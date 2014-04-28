/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *     on Tue Mar 11 2014
 *
 *     Please comment in detail exactly what each query does. If the current
 *     description is not accurate, I would appreciate improvement.
 */

var metaFields =
"Name, " +
"Id, " +
"LastModifiedDate, " +
"SystemModstamp, " +
"CreatedDate";

var projectFields =
"Allow_Project_Creation__c, \
AP_Codes__c, \
Budget_Status__c, \
Business_Unit__c, \
Concept_start_date__c, \
Consolidated_Record_Type__c, \
National_Society_Contractors__c, \
Disaster__r.Id, \
External_Title__c, \
Human_Resource_Status__c, \
Inactive_AP_Codes__c, \
Is_OFAC__c, \
ISD_Region__c, \
Is_Test_Data__c, \
Is_USG_Funded__c, \
Overall_Status__c, \
Phase__c, \
Phase_Name__c, \
Project_Close_out_Date__c, \
End_Date__c, \
Start_Date__c, \
Project_Program_Implementation__c, \
Locations__c, \
Proposal_Approved_On__c, \
Proposal_Submitted_On__c, \
Scope_Status__c, \
Sector__c, \
Staffing_Level__c, \
Stage_Name__c, \
Stakeholder_Status__c, \
Status__c, \
Status_As_Of__c, \
Sub_Sector__c, \
Summary__c, \
Target_Beneficiaries_Direct__c, \
Target_Beneficiaries_Indirect__c, \
Target_Beneficiaries_Rollup_Type__c, \
Timeline_Status__c, \
Total_Budget__c, \
Type__c, \
USG_Contract_Number__c";


var locationFields =
"Location__r.Admin_0__c, " +
"Location__r.Admin_1__c, " +
"Location__r.Admin_2__c, " +
"Location__r.Admin_3__c, " +
"Location__r.Admin_4__c, " +
"Location__r.Admin_5__c, " +
"Location__r.Custom_Name__c, " +
"Location__r.GIS_GEO_ID__c, " +
"Location__r.Internal_Region__c, " +
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
"Total_ARC_Contributions__c, " +
"Unique_Disaster_Id__c";


var requestForAssistanceFields =
"Appeal_Source__c, " +
"Appeal_Type__c, " +
"ARC_Response_Date__c, " +
"Beneficiaries_Reached_as_of__c, " +
"Beneficiaries_Reached_Households__c, " +
"Beneficiaries_Reached_Individuals__c, " +
"Beneficiaries_Targeted_Households__c, " +
"Beneficiaries_Targeted_Individuals__c, " +
"Date_Issued__c, " +
"End_Date__c, " +
"Exchange_Rate__c, " +
"Future_Contribution__c, " +
"Requested_Amount__c, " +
"Requested_Amount_Foreign_Currerncy__c, " +
"Requested_Amount_USD__c, " +
"Response_Strategy_Comments__c, " +
"Start_Date__c, " +
"Status__c, " +
"Subject__c, " +
"Target_Population__c, " +
"Total_ARC_Contributions__c";


module.exports = {

  /**
   * Selects all of the fields from every project.
   */
  project: "Select " + metaFields + ", " + locationFields + ", " + projectFields + " From Project__c",


  /**
   * Shows number of projects and the budget per country.
   */
  numProjAndBudgetPerCountry: "Select Count(Name) project_count, Sum(Total_Budget__c) total_budget, Location__r.Admin_0__c From Project__c Group By Location__r.Admin_0__c",

  /**
   * Shows all of the projects grouped by country
   */
  projGroupedByCountry: "Select Location__r.Admin_0__c, Location__r.GIS_GEO_ID__c, Count(Name) project_count, Sum(Total_Budget__c) total_budget From Project__c Group By Location__r.Admin_0__c, Location__r.GIS_GEO_ID__c",


  /**
   * Selects all applicable information relating to the disasters table.
   */
  disaster: "Select " + metaFields + ", " + disasterFields + " From Disaster__c",


  /**
   * Selects the DisasterLocation table so we can do the many to many join between disasters and locations.
   * A given disaster may have many disaster locations. You may join by Disaster__r.Id
   */
  disasterLocation: "Select " + metaFields + ", Disaster__r.Id, " + locationFields + " From Disaster_Location__c",


  /**
   * Selects the ProjectLocation table for the many to many with locations and projects. This should be used instead
   * of directly looking up the Location relation in Project, because there can actually be many locations for a project.
   * However, there are currently no fields in the ProjectLocation table.
   */
  projectLocation: "Select " + metaFields + ", Project__r.Id, " + locationFields + " From Project_Location__c",


  /**
   * Selects the Request_For_Assistance__c table.
   * A given disaster may have many requests for assistance. You may join by Disaster__r.Id
   */
  requestForAssistance: "Select " + metaFields + ", Disaster__r.Id, " + requestForAssistanceFields + " From Request_For_Assistance__c"

};
