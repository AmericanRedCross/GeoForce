/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *     on Tue Mar 11 2014
 *
 *     Please comment in detail exactly what each query does. If the current
 *     description is not accurate, I would appreciate improvement.
 */

module.exports = {

    /**
     * Selects all of the fields from every project.
     */
    allProjects: "Select Id, LastModifiedDate, SystemModstamp, CreatedDate, Target_Beneficiaries_Indirect__c, Target_Beneficiaries_Direct__c, Summary__c, Sub_Sector__c, Start_Date__c, Sector__c, Phase_Name__c, Name, Location__r.Admin_2__c, Location__r.Admin_1__c, Location__r.Admin_0__c, Location__c, ISD_Region__c, End_Date__c From Project__c",

    /**
     * Selects all of the fields from the organization (Account table).
     */
    allOrganizations: "Select Id, LastModifiedDate, SystemModstamp, CreatedDate, Name, Location__r.Admin_2__c, Location__r.Admin_1__c, Location__r.Admin_0__c, Location__c From Account",

    /**
     * Shows how many projects there are and the sum of all of the budgets.
     */
    allMoneyInWorld: "Select Count(Name) project_count, Sum(Total_Budget__c) total_budget From Project__c",

    /**
     *
     */
    numProjAndBudgetPerCountry: "Select Count(Name) project_count, Sum(Total_Budget__c) total_budget, Location__r.Admin_0__c From Project__c Group By Location__r.Admin_0__c",

    /**
     * These commented out queries do not work. Please do not submit queries that do not
     * successfully return results and write a corresponding JSON file. I left these in
     * so you can uncomment one and see what happens when a query fails.
     */
//    allStandardIndicators: "Select Location__r.Admin_0__c, Location__r.Admin_1__c, Location__r.Admin_2__c, Name, Type__c, Collection_Frequency__c, Project__r.Name, Organization__r.Name, Standard__r.Is_Standard__c, Standard__c, Project__c, Organization__c, Location__c From Indicator__c Where Standard__r.Is_Standard__c = true",
//    year2013TargetsAndTimeframes: "Select Indicator__r.Location__r.Admin_0__c, Indicator__r.Location__r.Admin_2__c, Indicator__r.Location__r.Admin_1__c, Indicator__r.Name, Indicator__r.Collection_Frequency__c, Effective_Date__c, Collection_Period__c, Target__c, Actual__c, Variance__c, Indicator__r.Location__c, Indicator__c From Indicator_Value__c Where FISCAL_YEAR(Effective_Date__c) = 2013",
//    all4thQuarters: "Select  Indicator__r.Location__r.Admin_0__c, Indicator__r.Location__r.Admin_2__c, Indicator__r.Location__r.Admin_1__c, Indicator__r.Name, Indicator__r.Collection_Frequency__c, Effective_Date__c, Collection_Period__c, Target__c, Actual__c, Variance__c, Indicator__r.Location__c,  Indicator__c From Indicator_Value__c Where FISCAL_QUARTER(Effective_Date__c) = 4",

    /**
     * Shows all of the projects grouped by country
     */
    projGroupedByCountry: "Select Location__r.Admin_0__c, Location__r.GIS_GEO_ID__c, Count(Name) project_count, Sum(Total_Budget__c) total_budget From Project__c Group By Location__r.Admin_0__c, Location__r.GIS_GEO_ID__c",

    /**
     * Shows all of the data (fields) for a given project.
     *
     * NOTE: Queries like this are not necessary. I need results from every field of an
     * object or results that are "Group By". Queries on individual keys are not what I need.
     */
    allDataForAGivenProject: "Select Id, LastModifiedDate, SystemModstamp, CreatedDate, Indicator__r.Project__r.Start_Date__c, Indicator__r.Project__r.RecordType.Name, Indicator__r.Project__r.RecordTypeId, Indicator__r.Project__r.Program__c, Indicator__r.Project__r.Phase_Name__c, Indicator__r.Project__r.End_Date__c, Indicator__r.Logframe_Element__r.Name, Indicator__r.Logframe_Element__r.Location__c, Indicator__r.Logframe_Element__r.Start_Date__c, Indicator__r.Logframe_Element__r.End_Date__c, Indicator__r.Logframe_Element__r.Custom_Summary__c, Indicator__r.Logframe_Element__r.Type__c, Indicator__r.Logframe_Element__r.Parent__c, Indicator__r.Name, Indicator__r.Custom_Summary__c, Indicator__r.Collection_Frequency__c, Indicator__r.Logframe_Element__c, Indicator__r.Type__c, Indicator__r.Location__c, Indicator__r.Description__c, Target__c, Actual__c, Effective_Date__c, Collection_Period__c, Period__c, Subjective__c, Target_Percent__c, Variance__c, Indicator__c From Indicator_Value__c Where Indicator__r.Project__c = 'a00K0000002F8ov'",
    allDataForAGivenProgram: "Select Id, LastModifiedDate, SystemModstamp, CreatedDate, Indicator__r.Project__r.Start_Date__c, Indicator__r.Project__r.RecordType.Name, Indicator__r.Project__r.RecordTypeId, Indicator__r.Project__r.Program__c, Indicator__r.Project__r.Phase_Name__c, Indicator__r.Project__r.End_Date__c, Indicator__r.Logframe_Element__r.Name, Indicator__r.Logframe_Element__r.Location__c, Indicator__r.Logframe_Element__r.Start_Date__c, Indicator__r.Logframe_Element__r.End_Date__c, Indicator__r.Logframe_Element__r.Custom_Summary__c, Indicator__r.Logframe_Element__r.Type__c, Indicator__r.Logframe_Element__r.Parent__c, Indicator__r.Name, Indicator__r.Custom_Summary__c, Indicator__r.Collection_Frequency__c, Indicator__r.Logframe_Element__c, Indicator__r.Type__c, Indicator__r.Location__c, Indicator__r.Description__c, Target__c, Actual__c, Effective_Date__c, Collection_Period__c, Period__c, Subjective__c, Target_Percent__c, Variance__c, Indicator__c From Indicator_Value__c Where Indicator__r.Project__c = 'a00K0000002IZP6' Or Indicator__r.Project__r.Program__c = 'a00K0000002IZP6'"

};