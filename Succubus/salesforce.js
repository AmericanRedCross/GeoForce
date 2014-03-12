/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *     on Tue Mar 11 2014
 */

var jsforce = require('jsforce');
var settings = require('./settings').salesforce;


var conn = new jsforce.Connection({
    // you can change loginUrl to connect to sandbox or prerelease env.
    loginUrl : settings.loginUrl
});


function connect() {
    conn.login(settings.user, settings.password+settings.token, function(err, userInfo) {
        if (err) { return console.error(err); }
        // Now you can get the access token and instance URL information.
        // Save them to establish connection next time.
        console.log('===== Login =====')
        console.log('accessToken: ' + conn.accessToken);
        console.log('instanceUrl: ' + conn.instanceUrl);
        // logged in user property
        console.log("User ID: " + userInfo.id);
        console.log("Org ID: " + userInfo.organizationId);
        console.log("=================");
    });
}

connect();


// NH TODO: This should be done differently?
function handleResult(result, cb) {
    if (!result.done) {
        // you can use the locator to fetch next records set.
        // Connection#queryMore()
        console.log("next records URL : " + result.nextRecordsUrl);

        conn.queryMore(result.nextRecordsUrl, function(err, result) {
            cb(result.records, false);
            handleResult(result, cb);
        });
    } else {
        cb(result.records, true);
    }
}


function query(queryStr, cb) {
    conn.query(queryStr, function(err, result) {
        if (err) {
            return console.error('QUERY FAILED: ' + queryStr + '\n' + err + '\n');
        }
        handleResult(result, cb);
    });
}

module.exports = {};


/**
 * This function will query salesforce and the compile the response into an array
 * of only strings and numbers. Objects will be serialized into JSON. This is so
 * that the results can be stored in a Postgres table.
 */
module.exports.queryAndFlattenResults = function(queryStr, cb) {

    function flattenRecords(records) {
        for (var i=0, len=records.length; i < len; ++i) {
            var record = records[i];
            for (var key in record) {
                var val = record[key];
                if (typeof val === 'object' && val !== null) {
                    record[key] = JSON.stringify(val);
                }
            }
        }
        cb(records);
    }

    query(queryStr, flattenRecords);
}

