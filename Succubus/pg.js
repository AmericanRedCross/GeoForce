/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *     on Tue Mar 11 2014
 */

var pg                  = require('pg');
var S                   = require('string');
var flow                = require('flow');
var settings            = require('./settings').pg;
var salesforce          = require('./salesforce');
var salesforceQueries   = require('./salesforce-queries');

// PostGIS Connection String
var conString =     "postgres://" +
                    settings.user + ":" +
                    settings.password + "@" +
                    settings.server + ":" +
                    settings.port + "/" +
                    settings.database;

module.exports = {};

var query = module.exports.query = function(queryStr, cb) {
    pg.connect(conString, function(err, client, done) {
        if(err) {
            console.error('error fetching client from pool', err);
        }
			  console.log(queryStr);
        client.query(queryStr, function(queryerr, result) {
            //call `done()` to release the client back to the pool
            done();

            if(queryerr) {
                console.error('ERROR RUNNING QUERY:', queryStr, queryerr);
            }

            cb((err || queryerr), (result && result.rows ? result.rows : result));
        });
    });
};


function fetchTableNames(cb) {
    var queryStr = "SELECT * FROM pg_tables;";

    query(queryStr, function(err, rows) {
        var tables = {};
        rows.forEach(function(row){
            tables[row.tablename] = true;
        });
        cb(tables);
    });
}

/*
 Wrap insertRows in a Flow.  Each step is dependant upon the previous.
 */
var insertRows = flow.define(

	function(queryTable, rows, queryStr, cb) {

		this.queryTable = queryTable;
		this.rows = rows;
		this.queryStr = queryStr;
		this.cb = cb;

		//Get an array of proper field names
		this.fields = getTableFieldNamesFromQuery(this.queryStr);

		//Get table names from postgres
		fetchTableNames(this);

	},function (tables) { //TODO: Only look up table names once.  Move this out of here.
		// See if a query table exists.
		if (tables[this.queryTable]) {
			//It exists. If the query returns any rows, then assume it's good data.
			if (this.rows.length > 0) {
				//Drop the view, then the old table.  Create table again and insert new rows
				dropViewAndTable(this.queryTable, this.rows, this.fields, this);
			}
			else {
				//If no rows (bad data), then don't drop the old table.  Don't do anything.  Exit.
				this.cb();
			}
		}
		else {// Create the given table and then insert rows.
			this(); //Flow to next block to create
		}
	},function(){
		//Coming back from dropViewAndTable
		createTableInsertRowsCreateView(this.queryTable, this.rows, this.fields, this.cb);
	}
);


/*
Group together the process of dropping a view and then the corresponding table.
Each is dependant on the previous step.
 */
var dropViewAndTable = flow.define(
	function(queryTable, rows, fields, cb) {
		this.queryTable = queryTable;
		this.rows = rows;
		this.fields = fields;
		this.cb = cb;

		dropView(this.queryTable, this);
	},function (err, result) {
		//Coming back from dropView
		if (err) {
			console.log("Error dropping view: " + this.queryTable + ".  Msg: " + err);
			this.cb(err);
		} else {
			//Drop table
			dropQueryTable(this.queryTable, this, false);
		}
	},function (err) {
		//Coming back from dropQueryTable
		if (!err) {
			//Create table again
			//Fow now, return
			this.cb();
		}
		else {
			console.log("Error dropping table: " + this.queryTable + ".  Msg: " + err);
			this.cb(err);
		}
	}
);

/*
Group Together the process of creating tables, inserting rows, and creating views.
Each step is dependant on the previous.
 */
var createTableInsertRowsCreateView = flow.define(

	function(queryTable, rows, fields, cb){
		this.queryTable = queryTable;
		this.rows = rows;
		this.fields = fields;
		this.cb = cb;

		//Create the table
		createTable(this.queryTable, this.rows, this.fields, this);
	},function () {
		//Coming back from createTable
		//Insert Rows
		_insertRows(this.queryTable, this.rows, this.fields, this);
	},function (err, res) {
		if (err) {
			console.log("Error inserting rows: " + this.queryTable + ".  Msg: " + err);
			this.cb(err);
		}
		this.cb(); //exit to caller
	}
);

/**
 * This is to be called inside of function insertRows only.
 * Consider this private private.
 * To know when it's done, wrap in a multiplexing flow
 *
 * @param rows
 * @private
 */
var _insertRows = flow.define(
	function(queryTable, rows, fields, cb) {
		this.cb = cb;

		rows.forEach(function (row) {
			var insertStr = "INSERT INTO " + queryTable + " ( ";
			var valStr = "VALUES ( ";
			for (var field in row) {
				if (isValidColumn(fields, field) == true) {
					insertStr += field + ', ';
					valStr += sanitize(row[field]) + ', ';
				}
			}
			insertStr = insertStr.slice(0, insertStr.length - 2) + ') ';
			valStr = valStr.slice(0, valStr.length - 2) + ');';
			var sql = insertStr.toLowerCase() + valStr;

			query(sql, this.MULTI()); //MULTI means to wait until all calls finish, and then proceed to next function in flow
		}.bind(this));


	},function() {
		//All queries have finished. We're done
		if (this.cb) this.cb();
	}
);


/**
 * Creates a table based on the type of each field in a given row.
 * If a given field for a row is null, we iterate further until we
 * find the type for the given field. If all rows for a given field
 * are null, we just make the type be a String.\
 *
 * @param queryTable
 * @param rows
 * @param cb
 */
function createTable(queryTable, rows, fields, cb) {
	var table = {
		// fieldName: type
	};

	var row = rows[0];
	var len = rows.length;

	for (var field in row) {

		var val = row[field];

			// it's a string that may be a stringified object
			if (typeof val === 'string') {
				table[field] = 'text';
			}

			// it's a number
			if (typeof val === 'number') {
				if (isInt(val)) {
					table[field] = 'bigint';
				} else {
					table[field] = 'float';
				}
			}

			// it's a null value, see if you can find a row that has a field that isn't null...
			else if (typeof val === 'object' && val === null) {
				for (var i = 0; i < len; ++i) {
					row = rows[i];
					val = row[field];
					// its a string that may be a stringified object
					if (typeof val === 'string') {
						table[field] = 'text';
						break;
					}
					// it's a number
					if (typeof val === 'number') {
						if (isInt(val)) {
							table[field] = 'bigint';
						} else {
							table[field] = 'float';
						}
						break;
					}
				}
				// OK, well... We haven't found what we're looking for. Let's just call it text
				// and move on with our lives...
				if (!table[field]) table[field] = 'text';
			}
		}

	//TODO: Get rid of this workaround.
	var lowerList = {}; //a lowercase list of field names coming back from salesforce.

	var sql = "CREATE TABLE " + queryTable + "( ID  SERIAL PRIMARY KEY, ";
	for (var field in table) {
		//Make sure the return field matches one of the whitelisted fields from the original SOQL query, otherwise ignore the property
		if (isValidColumn(fields, field) == true) {
			//It's ok.  Let it pass
			sql += field.toLowerCase() + ' ' + table[field] + ', ';
			lowerList[field.toLowerCase()] = true; //keep a lower case version
		}
	}

	//Add any columns that are defined in the select statement that AREN'T in the table object.
	fields.forEach(function(field){
		//Check to see if the field is in the table list.
		if(!lowerList[field] && field != 'id'){
			sql += field.toLowerCase() + ' text, ';
		}
	});

	sql = sql.slice(0, sql.length - 2); // get rid of that last ', '
	sql += ");";

	query(sql, function (err, res) {
		console.log(queryTable + ' successfully created.');
		// If we have a location guid, we should make an index on it.
		// NOTE: We can have this happen whenever, so don't worry about a callback with this.
		var locationField = 'Location__c';
		if (typeof row !== 'undefined' && typeof row[locationField] !== 'undefined') {
			var sql = 'CREATE INDEX idx_' + queryTable + '_location__c ON ' + queryTable + '(' + locationField + ');';
			query(sql, function (err, res) {
				console.log('Created Index.');
			});
		}

		cb(err, res);
	});
}


function insertQuery (sfQueryName, cb) {
	var queryStr = salesforceQueries[sfQueryName];
	var queryTable = 'sf_' + S(sfQueryName).underscore().s;

	salesforce.queryAndFlattenResults(queryStr, function (rows) {
		if(rows && rows.length > 0)
        {
            insertRows(queryTable, rows, queryStr, cb);
        }
        else{
            cb();
        }
	});
}

//addPrefix: boolean - specifies whether or not to add the 'sf_' before the incoming table name.
function dropQueryTable(sfQueryName, cb, addPrefix) {
    var queryTable = (addPrefix ? 'sf_' : '') + S(sfQueryName).underscore().s;
    var sql = "DROP TABLE IF EXISTS " + queryTable + ";";
    query(sql, function(err, res) {
        cb(err,res);
    })
}

//addPrefix: boolean - specifies whether or not to add the 'sf_' before the incoming view name.
function dropView(sfViewName, cb) {
    var queryView = 'vw_' + S(sfViewName).underscore().s;
    var sql = "DROP VIEW IF EXISTS " + queryView + ";";
    query(sql, function(err, res) {
        cb(err,res);
    })
}

var prepQueryTables = function (){
    //Take in the object and return an array
    var queryArr = [];
    for (var sfQueryName in salesforceQueries) {
        queryArr.push(sfQueryName);
    }
    return queryArr;
}

function insertAllQueryTables (cb){

    var tables = prepQueryTables();
    flow.serialForEach(tables, function(sfQueryName){
        insertQuery(sfQueryName, this);
    },function(err){
        //After every iteration is complete.
            console.log("Finished processing a SOQL Query.")
    },
    function(){
        //When all are done.
        cb();
    });
}

function dropAllSalesforceTables() {
    for (var sfQueryName in salesforceQueries) {
        dropQueryTable(sfQueryName);
    }
}

/******************************************************************
 ************************ UTILITY FUNCTIONS************************
 ******************************************************************/
function isInt(n) {
    return n % 1 === 0;
}

function sanitize(val) {
    // we want a null to still be null, not a string
    if (typeof val === 'string' && val !== 'null') {
        // $nh9$ is using $$ with an arbitrary tag. $$ in pg is a safe way to quote something,
        // because all escape characters are ignored inside of it.
        var esc = settings.escapeStr;
        return "$"+esc+"$" + val + "$"+esc+"$";
    }
    return val;
}

/*
 ...Becasuse what you ask for in the SOQL queries is not exactly what you get back from the API.
 This will parse the query statement so we know exactly which fields to use to create the PostGres Tables and Views
 */
function getTableFieldNamesFromQuery(queryStr){
	//break the query string in 1/2 by splitting on the FROM clause.  Take the 1st 1/2 and remove the 'select' statement.
	//Next, split the remainder by commas, then account for spaces and aliases.
	var fields = queryStr.toLowerCase().split('from')[0].replace('select','').split(',').map(function(field){
		//trim
		field = field.trim();

		//handle fully qualified names
    field = field.replace('.','_');

		if(field.indexOf(' ') > -1){
			field = field.split(' ')[1]; //use the alias
		}

		return field.trim();
	});
  fields.unshift('sf_id');
	return fields;
}

/*
...because there are several places where we're getting results from SalesForce API that don't match the original select statement.
This will tell you if the field is supposed to be going into the DB.
Filter out id, since we're handling that in a non-dynamic way.
 */
function isValidColumn(fields, field){
	if (fields.indexOf(field.toLowerCase()) > -1) {
		return true;
	}
	else{
		return false;
	}
}

/******************************************************************
 **************************** TESTS *******************************
 ******************************************************************/

function testSimpleSelectQuery() {
    var queryStr = "SELECT id_0, ogc_fid, year, guid FROM gadm0;";

    query(queryStr, function(err, rows) {
        console.log(rows);
    });
}

module.exports.run = function(cb){
	//Start the process
	insertAllQueryTables(function(err){
		//When we finish, run postprocessing
		//TODO:  Be smarter about what to do when we encounter an error. Don't need to run all postprocessing if some of the etl bombed.
		cb(err);
	});
}

