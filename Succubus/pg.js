/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *     on Tue Mar 11 2014
 */

var pg                  = require('pg');
var S                   = require('string');
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


function query(queryStr, cb) {
    pg.connect(conString, function(err, client, done) {
        if(err) {
            return console.error('error fetching client from pool', err);
        }
        client.query(queryStr, function(err, result) {
            //call `done()` to release the client back to the pool
            done();

            if(err) {
                return console.error('ERROR RUNNING QUERY:', queryStr, err);
            }
            cb(result.rows || result);
        });
    });
}


function fetchTableNames(cb) {
    var queryStr = "SELECT * FROM pg_tables;";

    query(queryStr, function(rows) {
        var tables = {};
        rows.forEach(function(row){
            tables[row.tablename] = true;
        });
        cb(tables);
    });
}


function insertRows(queryTable, rows) {

    fetchTableNames(function (tables) {
        // See if a query table exists.
        if (tables[queryTable]) {
            _insertRows(queryTable, rows);
        }
        // If not, create the given table and then insert rows.
        else {
            createTable(queryTable, rows, function() {
                _insertRows(queryTable, rows);
            });
        }
    });

}


/**
 * This is to be called inside of function insertRows only.
 * Consider this private private.
 *
 * @param rows
 * @private
 */
function _insertRows(queryTable, rows) {
    rows.forEach(function(row){
        var insertStr = "INSERT INTO " + queryTable + " ( ";
        var valStr = "VALUES ( ";
        for (var field in row) {
            insertStr += field + ', ';
            valStr += sanitize(row[field]) + ', ';
        }
        insertStr = insertStr.slice(0, insertStr.length-2) + ') ';
        valStr = valStr.slice(0, valStr.length-2) + ');';
        var sql = insertStr + valStr;
//        console.log(sql);
        query(sql, function() {
            console.log(sql);
        });
    });
}


/**
 * Creates a table based on the type of each field in a given row.
 * If a given field for a row is null, we iterate further until we
 * find the type for the given field. If all rows for a given field
 * are null, we just make the type be a String.\
 *
 * @param rows
 */
function createTable(queryTable, rows, cb) {
    var table = {
       // fieldName: type
    };

    var row = rows[0];
    var len = rows.length;

    for (var key in row) {
        var val = row[key];

        // it's a string that may be a stringified object
        if (typeof val === 'string') {
            table[key] = 'text';
        }

        // it's a number
        if (typeof val === 'number') {
            if (isInt(val)) {
                table[key] = 'integer';
            } else {
                table[key] = 'float';
            }
        }

        // it's a null value, see if you can find a row that has a field that isn't null...
        else if (typeof val === 'object' && val === null) {
            for (var i=0; i<len; ++i) {
                row = rows[i];
                val = row[key];
                // its a string that may be a stringified object
                if (typeof val === 'string') {
                    table[key] = 'text';
                    break;
                }
                // it's a number
                if (typeof val === 'number') {
                    if (isInt(val)) {
                        table[key] = 'integer';
                    } else {
                        table[key] = 'float';
                    }
                    break;
                }
            }
            // OK, well... We haven't found what we're looking for. Let's just call it a varchar
            // and move on with our lives...
            if (!table[key]) table[key] = 'varchar(255)';
        }
    }

    var sql = "CREATE TABLE " + queryTable + "( ";
    for (var field in table) {
        sql += field + ' ' + table[field] + ', ';
    }
    sql = sql.slice(0, sql.length-2); // get rid of that last ', '
    sql += ");";

    console.log("Creating table for " + queryTable);
    console.log(sql);
    query(sql, function(res) {
        console.log(queryTable + ' successfully created.');
        console.log(res);
        cb();
    });
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
        return "$nh9$" + val + "$nh9$";
    }
    return val;
}


/******************************************************************
 **************************** TESTS *******************************
 ******************************************************************/

function testSimpleSelectQuery() {
    var queryStr = "SELECT id_0, ogc_fid, year, guid FROM gadm0;";

    query(queryStr, function(rows) {
        console.log(rows);
    });
}


function testInsertProjects() {
    var sfQuery = 'allProjects';
    var queryStr = salesforceQueries[sfQuery];
    var queryTable = ('sf_' + sfQuery).toLowerCase();
    salesforce.queryAndFlattenResults(queryStr, function(rows) {
        insertRows(queryTable, rows);
    });

}


//testSimpleSelectQuery();

//listTables(function(tables){
//    console.log(tables);
//});

testInsertProjects();