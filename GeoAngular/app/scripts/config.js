/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *       on 4/10/14.
 */

var config = {};

config.chubbsPath = function (relPath) {
  return window.location.protocol + "//" + window.location.host + "/" + relPath;
};

config.proxyPath = function (path) {
  return config.chubbsPath('services/utilities/proxy?url=' + path);
};

config.salesforceUrl = "https://na14.salesforce.com";


/**
 * These are the details initially shown for projects.
 * Clicking on the Show More Details button will show the rest.
 *
 * @type {{}}
 */
config.projectDetailsShortList = [
  'business_unit__c',
  'sector__c',
  'start_date__c',
  'end_date__c',
  'status__c',
  'target_beneficiaries_direct__c',
  'total_budget__c'
];

/**
 * These are the details initially shown for disasters.
 * Clicking on the Show More Details button will show the rest.
 *
 * @type {{}}
 */
config.disasterDetailsShortList = [
  'name',
  'date__c',
  'category__c',
  'people_affected__c',
  'total_arc_contributions__c'
];


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

/**
 * This defines the type of formatting used for each field in the details panel
 *
 * @type {{}}
 */
config.RFADetailsFormatting = {
  arc_response_date__c: "date",
  beneficiaries_reached_households__c: "number",
  requested_amount__c: "currency,$", //Should be 'currency' followed by a comma and then an ANGULAR currency specification ("CHF" or "USD" or "$" or etc.)
  beneficiaries_reached_individuals__c: "number",
  beneficiaries_targeted_households__c: "number",
  beneficiaries_targeted_individuals__c: "number",
  end_date__c: "date",
  start_date__c: "date",
  total_arc_contributions__c: "currency,$",
  requested_amount_foreign_currerncy__c: "currency,CHF ",
  requested_amount_usd__c: "currency,$",
  name: "rfaName"
};


/**
 * This defines the type of formatting used for each field in the details panel
 *
 * @type {{}}
 */
config.indicatorDetailsFormatting = {

};

/**
 * This defines the fields we DON'T want to show in the Details panel
 *
 * @type {{}}
 */
config.unwantedProjectDetails = {
  allow_project_creation__c: true,
  ap_codes__c: true,
  budget_status__c: true,
  disaster__r_id: true,
  external_title__c: true,
  human_resource_status__c: true,
  id: true,
  inactive_ap_codes__c: true,
  is_ofac__c: true,
  is_test_data__c: true,
  is_usg_funded__c: true,
  isd_region__c: true,
  systemmodstamp: true,
  national_society_contractors__c: true,
  external_title__c: true,
  human_resource_status__c: true,
  inactive_ap_codes__c: true,
  phase__c: true,
  proposal_approved_on__c: true,
  proposal_submitted_on__c: true,
  scope_status__c: true,
  status_as_of__c: true,
  type__c:true,
  locations__c: true,
  location__r_custom_name__c: true,
  location__r_gis_geo_id__c: true,
  location__r_internal_region__c: true,
  location__r_isd_region__c: true,
  location__r_latitude__c: true,
  location__r_longitude__c: true,
  location__r_type__c: true,
  level: true,
  overall_assessment__c: true,
  location__r_admin_0__c: function (item) {
    return (item ? false : true);
  }, //If item is something, then return false to show it.  Return true to hide it.
  location__r_admin_1__c: function (item) {
    return (item ? false : true);
  },
  location__r_admin_2__c: function (item) {
    return (item ? false : true);
  },
  location__r_admin_3__c: function (item) {
    return (item ? false : true);
  },
  location__r_admin_4__c: function (item) {
    return (item ? false : true);
  },
  location__r_admin_5__c: function (item) {
    return (item ? false : true);
  }
};


/**
 * This defines the fields we DON'T want to show in the Details panel
 *
 * @type {{}}
 */
config.unwantedDisasterDetails = {
  affected_as_of__c: true,
  createddate: true,
  deaths_as_of__c: true,
  unique_disaster_id__c: true,
  disaster_id__c: true,
  disaster__r_id: true,
  id: true,
  injured_as_of__c: true,
  is_test_data__c: true,
  lastmodifieddate: true,
  level: true,
  location__r_custom_name__c: true,
  location__r_gis_geo_id__c: true,
  location__r_internal_region__c: true,
  location__r_isd_region__c: true,
  location__r_latitude__c: true,
  location__r_longitude__c: true,
  location__r_type__c: true,
  missing_as_of__c: true,
  source_deaths__c: true,
  source_people_affected__c: true,
  source_people_injured__c: true,
  source_people_missing__c: true,
  systemmodstamp: true,
  location__r_admin_0__c: function (item) {
    return (item ? false : true);
  }, //If item is something, then return false to show it.  Return true to hide it.
  location__r_admin_1__c: function (item) {
    return (item ? false : true);
  },
  location__r_admin_2__c: function (item) {
    return (item ? false : true);
  },
  location__r_admin_3__c: function (item) {
    return (item ? false : true);
  },
  location__r_admin_4__c: function (item) {
    return (item ? false : true);
  },
  location__r_admin_5__c: function (item) {
    return (item ? false : true);
  }
};

/**
 * This defines the fields we DON'T want to show in the Details panel
 * Specify true to hide it.
 * @type {{}}
 */
config.unwantedRFADetails = {
  beneficiaries_reached_as_of__c: true,
  createddate: true,
  date_issued__c: true,
  disaster__r_id: true,
  exchange_rate__c: true,
  future_contribution__c: true,
  id: true,
  lastmodifieddate: true,
  subject__c: true,
  target_population__c: true,
  systemmodstamp: true
};

/**
 * This defines the fields we DON'T want to show in the Details panel
 * Specify true to hide it.
 * @type {{}}
 */
config.unwantedIndicatorDetails = {

};