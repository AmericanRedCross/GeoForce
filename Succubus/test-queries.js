var jsforce = require('jsforce');
var fs = require('fs');


var conn = new jsforce.Connection({
    // you can change loginUrl to connect to sandbox or prerelease env.
    loginUrl : 'https://cs9.salesforce.com'
});


conn.login('gis@redcross.org', 'Bmx1982$3oFZwrt5JcdbwmtK8crUR6vp', function(err, userInfo) {
//conn.login('rwhitley@spatialdev.com', 'Alsep11!d24nNuICOP0ya24RJH2yqiRU', function(err, userInfo) {
    if (err) { return console.error(err); }
    // Now you can get the access token and instance URL information.
    // Save them to establish connection next time.
    console.log('accessToken: ' + conn.accessToken);
    console.log('instanceUrl: ' + conn.instanceUrl);
    // logged in user property
    console.log("User ID: " + userInfo.id);
    console.log("Org ID: " + userInfo.organizationId);


    function testQuery(queryStr, fileName) {
        var str = queryStr;
        var name = fileName;
        conn.query(str, function(err, result) {
            if (err) {
                return console.error('QUERY FAILED: ' + queryStr + '\nDESCRIPTION: ' + name + '\n' + err + '\n');
            } else {
                console.log("=== Query Successful ===");
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

    var str = "Select Timeline_Status__c, Target_Beneficiaries_Indirect__c, Target_Beneficiaries_Direct__c, Summary__c, Sub_Sector__c, Status_As_Of__c, Start_Date__c, Sector__c, Phase_Name__c, Overall_Status__c, Name, Location__r.Admin_2__c, Location__r.Admin_1__c, Location__r.Admin_0__c, Location__c, ISD_Region__c, End_Date__c, Budget_Status__c From Project__c";
    var desc = 'all-projects';
    testQuery(str, desc);


    str = "Select Name, Location__r.Admin_2__c, Location__r.Admin_1__c, Location__r.Admin_0__c, Location__c From Account";
    desc = 'all-organizations';
    testQuery(str, desc);

    str = "Select Count(Name), Sum(Total_Budget__c) From Project__c";
    desc = 'all-money-in-world';
    testQuery(str, desc);

    str = "Select Count(Name), Sum(Total_Budget__c), Location__r.Admin_0__c From Project__c Group By Location__r.Admin_0__c";
    desc = 'num-proj-and-budget-per-country';
    testQuery(str, desc);

    str = "Select Location__r.Admin_0__c, Location__r.Admin_1__c, Location__r.Admin_2__c, Name, Type__c, Collection_Frequency__c, Project__r.Name, Organization__r.Name, Standard__r.Is_Standard__c, Standard__c, Project__c, Organization__c, Location__c From Indicator__c Where Standard__r.Is_Standard__c = true";
    desc = 'all-standard-indicators';
    testQuery(str, desc);

    str = "Select Indicator__r.Location__r.Admin_0__c, Indicator__r.Location__r.Admin_2__c, Indicator__r.Location__r.Admin_1__c, Indicator__r.Name, Indicator__r.Collection_Frequency__c, Effective_Date__c, Collection_Period__c, Target__c, Actual__c, Variance__c, Indicator__r.Location__c, Indicator__c From Indicator_Value__c Where FISCAL_YEAR(Effective_Date__c) = 2013";
    desc = 'year2013-targets-and-timeframes';
    testQuery(str, desc);

    str = "Select  Indicator__r.Location__r.Admin_0__c, Indicator__r.Location__r.Admin_2__c, Indicator__r.Location__r.Admin_1__c, Indicator__r.Name, Indicator__r.Collection_Frequency__c, Effective_Date__c, Collection_Period__c, Target__c, Actual__c, Variance__c, Indicator__r.Location__c,  Indicator__c From Indicator_Value__c Where FISCAL_QUARTER(Effective_Date__c) = 4";
    desc = 'all-4th-quarters';
    testQuery(str, desc);

    str = "Select Location__r.Admin_0__c, Count(Name), Sum(Total_Budget__c) From Project__c Group By Location__r.Admin_0__c";
    desc = 'proj-grouped-by-country';
    testQuery(str, desc);

    str = "Select Indicator__r.Project__r.Start_Date__c, Indicator__r.Project__r.RecordType.Name, Indicator__r.Project__r.RecordTypeId, Indicator__r.Project__r.Program__c, Indicator__r.Project__r.Phase_Name__c, Indicator__r.Project__r.End_Date__c, Indicator__r.Logframe_Element__r.Name, Indicator__r.Logframe_Element__r.Location__c, Indicator__r.Logframe_Element__r.Start_Date__c, Indicator__r.Logframe_Element__r.End_Date__c, Indicator__r.Logframe_Element__r.Custom_Summary__c, Indicator__r.Logframe_Element__r.Type__c, Indicator__r.Logframe_Element__r.Parent__c, Indicator__r.Name, Indicator__r.Custom_Summary__c, Indicator__r.Collection_Frequency__c, Indicator__r.Logframe_Element__c, Indicator__r.Type__c, Indicator__r.Location__c, Indicator__r.Description__c, Target__c, Actual__c, Effective_Date__c, Collection_Period__c, Period__c, Subjective__c, Target_Percent__c, Variance__c, Indicator__c From Indicator_Value__c Where Indicator__r.Project__c = 'a00K0000002F8ov'";
    desc = 'all-data-for-a-given-project';
    testQuery(str, desc);

    str = "Select Indicator__r.Project__r.Start_Date__c, Indicator__r.Project__r.RecordType.Name, Indicator__r.Project__r.RecordTypeId, Indicator__r.Project__r.Program__c, Indicator__r.Project__r.Phase_Name__c, Indicator__r.Project__r.End_Date__c, Indicator__r.Logframe_Element__r.Name, Indicator__r.Logframe_Element__r.Location__c, Indicator__r.Logframe_Element__r.Start_Date__c, Indicator__r.Logframe_Element__r.End_Date__c, Indicator__r.Logframe_Element__r.Custom_Summary__c, Indicator__r.Logframe_Element__r.Type__c, Indicator__r.Logframe_Element__r.Parent__c, Indicator__r.Name, Indicator__r.Custom_Summary__c, Indicator__r.Collection_Frequency__c, Indicator__r.Logframe_Element__c, Indicator__r.Type__c, Indicator__r.Location__c, Indicator__r.Description__c, Target__c, Actual__c, Effective_Date__c, Collection_Period__c, Period__c, Subjective__c, Target_Percent__c, Variance__c, Indicator__c From Indicator_Value__c Where Indicator__r.Project__c = 'a00K0000002IZP6' Or Indicator__r.Project__r.Program__c = 'a00K0000002IZP6'";
    desc = 'all-data-for-a-given-program';
    testQuery(str, desc);
});

