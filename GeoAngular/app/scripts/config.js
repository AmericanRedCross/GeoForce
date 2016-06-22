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

config.defaultTheme = 'disaster';


config.UNOCHAOpacity = "0.5";

/*
ECOS Disaster Type to UNOCHA Icon Mapping Here
Keys in this dictionary are ECOS Disaster Types, coming out of the DB.
The icon property references the UNOCHA web font class names. See a list here: (http://54.187.215.30/mapfolio/styles/UNOCHA-Humanitarian-Icons-WebFont/demo.html)
These are referenced by the Disaster Type theme (to show icons on the map that tie to disaster type), and also in the legend, and in the disaster type filters panel
 */
config.UNOCHAIconLookup = {

  "Meteorological - Tropical Cyclone": {icon: "icon-disaster_cyclone", color: "rgba(255,0,0," + config.UNOCHAOpacity + ")"},
  "Floods": {icon: "icon-disaster_flood", color: "rgba(255,0,0," + config.UNOCHAOpacity + ")"},
  "Tsunami, Volcano": {icon: "icon-disaster_tsunami", color: "rgba(255,0,0," + config.UNOCHAOpacity + ")"},
  "Floods, Storm": {icon: "icon-disaster_flood", color: "rgba(255,0,0," + config.UNOCHAOpacity + ")"},
  "Tsunami": {icon: "icon-disaster_tsunami", color: "rgba(255,0,0," + config.UNOCHAOpacity + ")"},
  "Famine / Food Insecurity": {icon: "icon-cluster_food_security", color: "rgba(255,0,0," + config.UNOCHAOpacity + ")"},
  "Drought": {icon: "icon-disaster_drought", color: "rgba(255,0,0," + config.UNOCHAOpacity + ")"},
  "Meteorological - Tropical Cyclone;Hydrological - Floods": {icon: "icon-disaster_cyclone", color: "rgba(255,0,0," + config.UNOCHAOpacity + ")"},
  "Food Insecurity": {icon: "icon-cluster_food_security", color: "rgba(255,0,0," + config.UNOCHAOpacity + ")"},
  "Civil Unrest": {icon: "icon-people_rebel", color: "rgba(255,0,0," + config.UNOCHAOpacity + ")"},
  "Floods, Tropical Storm": {icon: "icon-disaster_flood", color: "rgba(255,0,0," + config.UNOCHAOpacity + ")"},
  "Complex Emergency": {icon: "icon-crisis_conflict", color: "rgba(255,0,0," + config.UNOCHAOpacity + ")"},
  "Epidemic": {icon: "icon-disaster_epidemic", color: "rgba(255,0,0," + config.UNOCHAOpacity + ")"},
  "Population Movement": {icon: "icon-crisis_population_displacement", color: "rgba(255,0,0," + config.UNOCHAOpacity + ")"},
  "Climatological - Drought": {icon: "icon-disaster_drought", color: "rgba(255,0,0," + config.UNOCHAOpacity + ")"},
  "Winter Storm": {icon: "icon-disaster_snowfall", color: "rgba(255,0,0," + config.UNOCHAOpacity + ")"},
  "Tropical Storm": {icon: "icon-disaster_heavy_rain", color: "rgba(255,0,0," + config.UNOCHAOpacity + ")"},
  "Earthquake, Tsunami": {icon: "icon-disaster_earthquake", color: "rgba(255,0,0," + config.UNOCHAOpacity + ")"},
  "Hydrological - Floods": {icon: "icon-disaster_flood", color: "rgba(255,0,0," + config.UNOCHAOpacity + ")"},
  "Landslide;Floods": {icon: "icon-disaster_landslide", color: "rgba(255,0,0," + config.UNOCHAOpacity + ")"},
  "Earthquake": {icon: "icon-disaster_earthquake", color: "rgba(255,0,0," + config.UNOCHAOpacity + ")"},
  "Landslide;Hydrological - Floods": {icon: "icon-disaster_landslide", color: "rgba(255,0,0," + config.UNOCHAOpacity + ")"},
  "Locusts": {icon: "icon-disaster_locust_infestation", color: "rgba(255,0,0," + config.UNOCHAOpacity + ")"},
  "Grasshoppers": {icon: "icon-disaster_locust_infestation", color: "rgba(255,0,0," + config.UNOCHAOpacity + ")"},
  "Conflict": {icon: "icon-crisis_conflict", color: "rgba(255,0,0," + config.UNOCHAOpacity + ")"},
  "Terrorism": {icon: "icon-security_dangerous_area", color: "rgba(255,0,0," + config.UNOCHAOpacity + ")"},
  "Climatological - Heat Wave": {icon: "icon-disaster_heatwave", color: "rgba(255,0,0," + config.UNOCHAOpacity + ")"},
  "Climatological - Cold Wave": {icon: "icon-disaster_cold_wave", color: "rgba(255,0,0," + config.UNOCHAOpacity + ")"},
  "Climatological - Wildfire": {icon: "icon-disaster_fire", color: "rgba(255,0,0," + config.UNOCHAOpacity + ")"},
  "Volcano": {icon: "icon-disaster_volcano", color: "rgba(255,0,0," + config.UNOCHAOpacity + ")"},
  "Rockfall": {icon: "icon-disaster_landslide", color: "rgba(255,0,0," + config.UNOCHAOpacity + ")"},
  "Landslide": {icon: "icon-disaster_landslide", color: "rgba(255,0,0," + config.UNOCHAOpacity + ")"},
  "Avalanche": {icon: "icon-disaster_snow_avalanche", color: "rgba(255,0,0," + config.UNOCHAOpacity + ")"},
  "Meteorological - Local Storm": {icon: "icon-disaster_heavy_rain", color: "rgba(255,0,0," + config.UNOCHAOpacity + ")"},
  "Meteorological - Extra Tropical Cyclone": {icon: "icon-disaster_cyclone", color: "rgba(255,0,0," + config.UNOCHAOpacity + ")"},
  "Hydrological - Flash Flood": {icon: "icon-disaster_flash_flood", color: "rgba(255,0,0," + config.UNOCHAOpacity + ")"},
  "Hydrological - Storm Surge": {icon: "icon-disaster_storm_surge", color: "rgba(255,0,0," + config.UNOCHAOpacity + ")"}


}

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
config.projectRiskDetailsFormatting = {
  createddate: "date",
  systemmodstamp: "date",
  lastmodifieddate: "date",
  likelihood__c: "number",
  impact__c: "number"
};


/**
 * This defines the type of formatting used for each field in the details panel
 *
 * @type {{}}
 */
config.projectHealthDetailsFormatting = {
  createddate: "date",
  systemmodstamp: "date",
  lastmodifieddate: "date",
  evaluation_date__c: "date"
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
  total_arc_cash_contribution_on_rfa__c: "currency,$",
  requested_amount_usd__c: "currency,$",
  name: "rfaName"
};


/**
 * This defines the type of formatting used for each field in the details panel
 *
 * @type {{}}
 */
config.indicatorDetailsFormatting = {
  createddate: "date",
  systemmodstamp: "date",
  lastmodifieddate: "date"
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
  concept_start_date__c: true,
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
  overall_status__c: true,
  phase__c: true,
  proposal_approved_on__c: true,
  proposal_submitted_on__c: true,
  project_program_implementation__c: true,
  staffing_level__c: true,
  scope_status__c: true,
  stakeholder_status__c: true,
  status_as_of__c: true,
  timeline_status__c: true,
  type__c:true,
  usg_contract_number__c: true,
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
  sf_id: true,
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
  beneficiaries_reached_households__c: true,
  beneficiaries_targeted_households__c: true,
  createdbyid: true,
  disaster__c: true,
  isdeleted: true,
  lastmodifiedbyid: true,
  latest_checklist__c: true,
  //sf_id: true, //we need this to provide a link to ECOS. In the .html ng-repeat, we will use a filter to exclude this property from being written
  showRfa: true,
  createddate: true,
  date_issued__c: true,
  disaster__r_id: true,
  exchange_rate__c: true,
  requested_amount_foreign_currerncy__c: true,
  requested_amount_usd__c: true,
  future_contribution__c: true,
  id: true,
  lastmodifieddate: true,
  subject__c: true,
  target_population__c: true,
  systemmodstamp: true,
  total_arc_contributions__c: true
};

/**
 * This defines the fields we DON'T want to show in the Details panel
 * Specify true to hide it.
 * @type {{}}
 */
config.unwantedIndicatorDetails = {
  createdbyid: true,
  lastmodifiedbyid: true,
  logframe_element__c: true,
  project__c: true,
  unique_indicator_value__c: true,
  systemmodstamp: true,
  showIndicators: true,
  type__c: true,
  sf_id: true

};

/**
 * This defines the fields we DON'T want to show in the Details panel
 * Specify true to hide it.
 * @type {{}}
 */
config.unwantedProjectRiskDetails = {
  id : true,
  project__c: true,
  risk_owner__c: true,
  sf_id: true,
  showRisks: true,
  systemmodstamp: true

};

/**
 * This defines the fields we DON'T want to show in the Details panel
 * Specify true to hide it.
 * @type {{}}
 */
config.unwantedProjectHealthDetails = {

  id: true,
  sf_id: true,
  project__c: true,
  showStatuses: true,
  systemmodstamp: true

};

config.ProjectRiskOrder = {
  null:0,
  Low:1,
  Medium:2,
  High:3,
  Critical:4
};

config.DisasterOrder = {
  null:0,
  Inactive:1,
  Monitoring:2,
  Active:3
};

config.ProjectHealthOrder = {
  null:0,
  White:1,
  Green:2,
  Yellow:3,
  Red:4
};

