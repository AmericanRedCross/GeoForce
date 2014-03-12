/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *     on Tue Mar 11 2014
 */

var settings            = require('./settings').pg;
var pg                  = require('pg');
var salesforce          = require('./salesforce');
var salesforceQueries   = require('./salesforce-queries');

// PostGIS Connection String
var conString =     "postgres://" +
                    settings.user + ":" +
                    settings.password + "@" +
                    settings.server + ":" +
                    settings.port + "/" +
                    settings.database;


function testSimpleSelectQuery() {
    var queryStr = "SELECT id_0, ogc_fid, year, guid FROM gadm0;";

    pg.connect(conString, function(err, client, done) {
        if(err) {
            return console.error('error fetching client from pool', err);
        }
        client.query(queryStr, function(err, result) {
            //call `done()` to release the client back to the pool
            done();

            if(err) {
                return console.error('error running query', err);
            }
            console.log(JSON.stringify(result.rows, null, 2));
        });
    });
}
testSimpleSelectQuery();



function testInsertProjects() {

    var queryStr = salesforceQueries[queryName];
    salesforce.queryAndFlattenResults(queryStr, insertRowsIntoProjects);

}
testInsertProjects();

function insertRowsIntoProjects(rows) {

}