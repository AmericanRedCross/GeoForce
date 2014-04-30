/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *     on Tue Mar 11 2014
 */

var jsforce = require('jsforce'), flow = require('flow');
var settings = require('./settings').salesforce;


var conn = new jsforce.Connection({
    // you can change loginUrl to connect to sandbox or prerelease env.
    loginUrl : settings.loginUrl
});


/**
 * I set up a queue here where all of the queries wait
 * until the connection happens before they execute.
 */
var pending = [];
var waiting = false;
function connect(cb) {
    pending.push(cb);
    if (!waiting) {
        waiting = true;
        conn.login(settings.user, settings.password+settings.token, function(err, userInfo) {
            if (err) { return console.error(err); }
            // Now you can get the access token and instance URL information.
            // Save them to establish connection next time.
            console.log('===== Login =====');
            console.log('accessToken: ' + conn.accessToken);
            console.log('instanceUrl: ' + conn.instanceUrl);
            // logged in user property
            console.log("User ID: " + userInfo.id);
            console.log("Org ID: " + userInfo.organizationId);
            console.log("=================");
            waiting = false;
            do {
                pending.pop()();
            } while (pending.length > 0);
        });
    }
}


function query(queryStr, cb) {
    // Check if we are connected. If so, go for it...
    if (conn.accessToken) {
        execQuery(queryStr,cb);
    }
    // Otherwise, we needa connect before we can query...
    else {
        connect(function(){
            execQuery(queryStr, cb);
        });
    }
}

// Actually do the query.
function execQuery(queryStr,cb) {
    var records = [];
    conn.query(queryStr)
        .on("record", function(record) {
            if(records.length == 0){ console.log("Getting results for " + queryStr) }
            records.push(record);
            console.log("adding record. " + records.length)
        })
        .on("end", function(query) {
            console.log("total in database : " + query.totalSize);
            console.log("total fetched : " + query.totalFetched);
            cb(records);
        })
        .on("error", function(err) {
            console.error(err);
        })
        .run({ autoFetch : true});
}

function handleResult(result, cb, recordsCollection) {
    var that = this;

    //Add new records to the collection of old records
    if(result && result.records){
        recordsCollection = recordsCollection.concat(result.records);
    }

    if (!result.done) {
        // you can use the locator to fetch next records set.
        // Connection#queryMore()
        console.log("next records URL : " + result.nextRecordsUrl);
        conn.queryMore(result.nextRecordsUrl, function (err, nextResult) {
            console.log("Fetched " + nextResult.records.length + " more.");
            handleResult(nextResult, cb, recordsCollection);
        });
        console.log("After querymore.");

    } else {
        cb(recordsCollection);
    }
};

/**
 *
 * This function takes in an object and flattens out any properties into an array of strings and numbers
 * Adds the properties to the original record
 */
function extractProperties(key, object, record) {
  // the attributes object is of no use for us
  if (key === 'attributes') {
    return record;
  }
	for (var k in object) {
		if (object.hasOwnProperty(k)) {
      // the attributes object is of no use for us
      if (k === 'attributes') {
        continue;
      }
			var val = object[k];
			if (typeof val === 'object' && val !== null) {
				//mix in properties of return object.
				extractProperties(key+'_'+k, val, record);
				//AND, remove the original object property now that we've flattened it out.
				delete record[k];
			}
			else {
				//just write out the property
				record[key+'_'+k] = val;
			}
		}
	}
	return record;
}

module.exports = {};


/**
 * This function will query salesforce and the compile the response into an array
 * of only strings and numbers. Objects will be serialized into JSON. This is so
 * that the results can be stored in a Postgres table.
 */
module.exports.queryAndFlattenResults = function(queryStr, cb) {

	console.log("Executing SOQL query: " + queryStr)
	query(queryStr.toLowerCase(), function (records) {
		if (typeof records !== 'object' || records.length === 0) {
			console.warn('No Records for: ' + queryStr);
            cb([]); //return empty array
            return;
		}
		for (var i = 0, len = records.length; i < len; ++i) {
			var record = records[i];
			for (var key in record) {
				var val = record[key];
				if (typeof val === 'object' && val !== null) {
					extractProperties(key, val, record);
					delete record[key];
				}
				// our table already has an id field, so we need to rename it
				if (key.toLowerCase() === 'id') {
					record['sf_id'] = val;
					delete record[key];
				}
			}
		}


		cb(records);
	});

};

