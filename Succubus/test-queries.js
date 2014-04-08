var jsforce = require('jsforce');
var fs = require('fs');
var salesforceQueries = require('./salesforce-queries');
var settings = require('./settings').salesforce;


var conn = new jsforce.Connection({
    // you can change loginUrl to connect to sandbox or prerelease env.
    loginUrl : 'https://cs18.salesforce.com'
});


conn.login(settings.user, settings.password+settings.token, function(err, userInfo) {
    if (err) { return console.error(err); }
    // Now you can get the access token and instance URL information.
    // Save them to establish connection next time.
    console.log('accessToken: ' + conn.accessToken);
    console.log('instanceUrl: ' + conn.instanceUrl);
    // logged in user property
    console.log("User ID: " + userInfo.id);
    console.log("Org ID: " + userInfo.organizationId);
    console.log("");

    function testQuery(queryStr, fileName) {
        var str = queryStr;
        var name = fileName;
        conn.query(str, function(err, result) {
            if (err) {
                return console.error('QUERY FAILED: ' + queryStr + '\nDESCRIPTION: ' + name + '\n' + err + '\n');
            } else {
                console.log("=== Query Successful ===");
                console.log("name: " + name);
                console.log("query: " + str);
                console.log("total: " + result.totalSize);
                console.log("fetched: " + result.records.length);
                console.log("results path: " + 'test-queries/' + name + '.json');

            }

            var json = JSON.stringify(result.records, null, 2);
            fs.writeFile('test-queries/' + name + '.json', json, function(err) {
                if (err) console.log('err: test-queries/' + name + '.json  ' + err);
            });
            if (!result.done) {
                // you can use the locator to fetch next records set.
                // Connection#queryMore()
                console.log("next records URL : " + result.nextRecordsUrl);
            }

            console.log("========================");
            console.log("");
        });
    }

    for (var name in salesforceQueries) {
        testQuery(salesforceQueries[name], name);
    }

});

