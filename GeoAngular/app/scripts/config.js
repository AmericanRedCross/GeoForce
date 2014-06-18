/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *       on 4/10/14.
 */

var config = {};

config.chubbsPath = function(relPath) {
  return window.location.protocol + "//"  + window.location.host + "/" + relPath;
};

config.proxyPath = function(path) {
  return config.chubbsPath('services/utilities/proxy?url=' + path);
};

config.salesforceUrl = "https://na14.salesforce.com";


/**
 * These are the details initially shown for projects.
 * Clicking on the Show More Details button will show the rest.
 *
 * @type {{}}
 */
config.projectDetailsShortList = {
  end_date__c: true,
  isd_region__c: true,
  name: true,
  status__c: true,
  sector__c: true,
  start_date__c: true,
  target_beneficiaries_direct__c: true,
  timeline_status__c: true,
  total_budget__c: true
};


/**
 * These are the details initially shown for disasters.
 * Clicking on the Show More Details button will show the rest.
 *
 * @type {{}}
 */
config.disasterDetailsShortList = {
  name: true,
  date__c: true,
  category__c: true,
  people_affected__c: true,
  total_arc_contributions__c: true
};



/**
 * This defines the type of formatting used for each field in the details panel
 *
 * @type {{}}
 */
config.projectDetailsFormatting = {
    createddate: "date",
    systemmodstamp: "date",
    lastmodifieddate: "date",
    concept_start_date__c: "date",
    project_close_out_date__c: "date",
    end_date__c: "date",
    start_date__c: "date",
    proposal_approved_on__c: "date",
    proposal_submitted_on__c: "date",
    target_beneficiaries_direct__c: "number",
    target_beneficiaries_indirect__c: "number",
    total_budget__c: "currency,$"
};


/**
 * This defines the type of formatting used for each field in the details panel
 *
 * @type {{}}
 */
config.disasterDetailsFormatting = {
    date__c: "date",
    source_people_affected__c: "number",
    total_arc_contributions__c: "currency,$", //Should be 'currency' followed by a comma and then an ANGULAR currency specification ("CHF" or "USD" or "$" or etc.)
    source_people_missing__c: "number",
    source_people_injured__c: "number",
    source_people_affected__c: "number",
    source_deaths__c: "number",
    missing_as_of__c: "number",
    injured_as_of__c: "number",
    deaths_as_of__c: "number",
    affected_as_of__c: "number",
    people_missing__c: "number",
    people_injured__c: "number",
    people_affected__c: "number",
    deaths__c: "number",
    createddate: "date",
    systemmodstamp: "date",
    lastmodifieddate: "date"
};
