/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *     on Tue Mar 11 2014
 *
 *     Please comment in detail exactly what each query does. If the current
 *     description is not accurate, I would appreciate improvement.
 */

var fs = require('fs');
var metaData = JSON.parse(fs.readFileSync('meta-data/sf-objects.json'));

var metaFields =
"Name, " +
"Id, " +
"LastModifiedDate, " +
"SystemModstamp";

var projectFields =
"Allow_Project_Creation__c, \
AP_Codes__c, \
Business_Unit__c, \
Consolidated_Record_Type__c, \
Disaster__r.Id, \
External_Title__c, \
Is_OFAC__c, \
ISD_Region__c, \
Is_Test_Data__c, \
Is_USG_Funded__c, \
Phase__c, \
Phase_Name__c, \
Project_Close_out_Date__c, \
End_Date__c, \
Start_Date__c, \
Sector__c, \
Stage_Name__c, \
Status__c, \
Sub_Sector__c, \
Summary__c, \
Target_Beneficiaries_Direct__c, \
Target_Beneficiaries_Indirect__c, \
Target_Beneficiaries_Rollup_Type__c, \
Total_Budget__c";

var locationFields =
    "Location__r.Admin_0__c, " +
    "Location__r.Admin_1__c, " +
    "Location__r.Admin_2__c, " +
    "Location__r.Admin_3__c, " +
    "Location__r.Admin_4__c, " +
    "Location__r.Admin_5__c, " +
    "Location__r.GIS_GEO_ID__c, " +
    "Location__r.ISD_Region__c, " +
    "Location__r.Latitude__c, " +
    "Location__r.Longitude__c, " +
    "Location__r.Type__c";

var disasterFields =
"Deaths__c, " +
"People_Affected__c, " +
"People_Injured__c, " +
"People_Missing__c, " +
"Affected_As_Of__c, " +
"ARC_Region__c, " +
"Category__c, " +
"Deaths_As_Of__c, " +
"Date__c, " +
"Disaster_Type__c, " +
"GLIDE_Number__c, " +
"Injured_As_Of__c, " +
"IROC_Status__c, " +
"Is_Test_Data__c, " +
"Missing_As_Of__c, " +
"Source_Deaths__c, " +
"Source_People_Affected__c, " +
"Source_People_Injured__c, " +
"Source_People_Missing__c, " +
"Summary__c, " +
"Total_ARC_Contributions__c";

function createFieldsString(fieldsArr) {
  var str = '';
  for (var i = 0, len = fieldsArr.length; i < len - 1; i++) {
    var obj = fieldsArr[i];
    var fieldName = obj.name;
    str += fieldName + ', ';
  }
  str += fieldsArr[i].name;
  return str;
}

var indicatorFields = createFieldsString(metaData.Indicator__c.fields);
var indicatorValueFields = createFieldsString(metaData.Indicator_Value__c.fields);
//var logframeElementFields = createFieldsString(metaData.Logframe_Element__c.fields);
//var projectLocationFields = createFieldsString(metaData.Project_Location__c.fields);
var requestForAssistanceFields = createFieldsString(metaData.Request_For_Assistance__c.fields);


module.exports = {

  /**
   * Selects all of the fields from every project.
   */
  project: "Select " + metaFields + ", " + locationFields + ", " + projectFields + " From Project__c",

  /**
   * Selects all applicable information relating to the disasters table.
   */
  disaster: "Select " + metaFields + ", " + disasterFields + " From Disaster__c",


  /**
   * Selects the DisasterLocation table so we can do the many to many join between disasters and locations.
   * A given disaster may have many disaster locations. You may join by Disaster__r.Id
   */
  disasterLocation: "Select " + metaFields + ", " + locationFields +  ", Disaster__r.Id " + " From Disaster_Location__c",


  /**
   * Selects the ProjectLocation table for the many to many with locations and projects. This should be used instead
   * of directly looking up the Location relation in Project, because there can actually be many locations for a project.
   * However, there are currently no fields in the ProjectLocation table.
   */
  projectLocation: "Select " + metaFields + ", "  + locationFields +  ", Project__r.Id " + " From Project_Location__c",


  /**
   * Selects the Request_For_Assistance__c table.
   * A given disaster may have many requests for assistance. You may join by Disaster__r.Id
   */
  requestForAssistance: "Select Disaster__r.Id, " + requestForAssistanceFields + " From Request_For_Assistance__c",

  /**
   * Gets just the location table. This is used for migrations to a new GADM dataset.
   */
  location: "Select " + metaFields + ", Admin_0__c, Admin_1__c, Admin_2__c, Admin_3__c, Admin_4__c, Admin_5__c, GIS_GEO_ID__c, ISD_Region__c, Latitude__c, Longitude__c From Location__c",


  indicator: "Select " + indicatorFields + " From Indicator__c",
  indicatorValue: "Select " + indicatorValueFields + " From Indicator_Value__c"
//  logframeElement: "Select " + logframeElementFields + " From Logframe_Element__c",

};