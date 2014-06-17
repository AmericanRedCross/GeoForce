//nonsensitiveSettings.js is part of the repository.
//passwords and sensitive settings are in settings.js
var nonsensitiveSettings = {};

process.env.NODE_ENV = 'development'; //Change to 'production' or 'test' depending on deployment.

nonsensitiveSettings.pg = {};
nonsensitiveSettings.application = {};
nonsensitiveSettings.tilestream = {};

//application port settings
nonsensitiveSettings.application.port = 3001;
nonsensitiveSettings.application.ip = "localhost";

//Enable Security?
nonsensitiveSettings.enableSecurity = false;


nonsensitiveSettings.tilestream.host = "54.212.254.185";
nonsensitiveSettings.tilestream.path = "/api/Tileset";
nonsensitiveSettings.tilestream.port = "8888";

//Should the API display postgres views?
nonsensitiveSettings.displayViews = true;

//Should the API display postgres tables?
nonsensitiveSettings.displayTables = false;

//Should the API hide any postgres tables or views?
nonsensitiveSettings.pg.noFlyList = ["att_0"];

//The list of formats to be returned by the Table Query REST endpoint.  If ogr2ogr is installed, .shp will be added automatically.
nonsensitiveSettings.application.formatList =[ 'html', 'GeoJSON', 'esriJSON'];

//Where to write out TopoJSON files?
nonsensitiveSettings.application.topoJsonOutputFolder = "/public/topojson/output/";

//Where to write out GeoJSON files?
nonsensitiveSettings.application.geoJsonOutputFolder = "/public/geojson/output/";

//Optional.  If you're using port forwarding or URL rewriting, but need to display full URLs to your assets, this will stand in for the host.
nonsensitiveSettings.application.publichost = ""; //Keep this empty if you want to use the default host
nonsensitiveSettings.application.publicport = "80";


//The lowest administrative level for each datasource
nonsensitiveSettings.dsLevels = {};
nonsensitiveSettings.dsLevels["gadm"] = 5;
nonsensitiveSettings.dsLevels["gaul"] = 2;
nonsensitiveSettings.dsLevels["naturalearth"] = 1;
nonsensitiveSettings.dsLevels["local"] = 2;

//Columns by level and datasource
nonsensitiveSettings.dsColumns = {};

//Used to define how to query DB for admin stack
//Columns aliased to be consistent between data sources.
//GADM
nonsensitiveSettings.dsColumns["gadm0"] = { geometry: "ST_AsGeoJSON(geom_simplify_high) as geom,", columns: "guid as stack_guid, id_0 as adm0_code, name_0 as adm0_name, ST_AsText(ST_Centroid(geom)) as centroid, 0 as level" };
nonsensitiveSettings.dsColumns["gadm1"] = { geometry: "ST_AsGeoJSON(geom_simplify_high) as geom,", columns: "guid as stack_guid, id_0 as adm0_code, name_0 as adm0_name, id_1 as adm1_code, name_1 as adm1_name, ST_AsText(ST_Centroid(geom)) as centroid, 1 as level" };
nonsensitiveSettings.dsColumns["gadm2"] = { geometry: "ST_AsGeoJSON(geom_simplify_high) as geom,", columns: "guid as stack_guid, id_0 as adm0_code, name_0 as adm0_name, id_1 as adm1_code, name_1 as adm1_name, id_2 as adm2_code, name_2 as adm2_name, ST_AsText(ST_Centroid(geom)) as centroid, 2 as level" };
nonsensitiveSettings.dsColumns["gadm3"] = { geometry: "ST_AsGeoJSON(geom_simplify_high) as geom,", columns: "guid as stack_guid, id_0 as adm0_code, name_0 as adm0_name, id_1 as adm1_code, name_1 as adm1_name, id_2 as adm2_code, name_2 as adm2_name, id_3 as adm3_code, name_3 as adm3_name, ST_AsText(ST_Centroid(geom)) as centroid, 3 as level" };
nonsensitiveSettings.dsColumns["gadm4"] = { geometry: "ST_AsGeoJSON(geom_simplify_high) as geom,", columns: "guid as stack_guid, id_0 as adm0_code, name_0 as adm0_name, id_1 as adm1_code, name_1 as adm1_name, id_2 as adm2_code, name_2 as adm2_name, id_3 as adm3_code, name_3 as adm3_name, id_4 as adm4_code, name_4 as adm4_name, ST_AsText(ST_Centroid(geom)) as centroid, 4 as level" };
nonsensitiveSettings.dsColumns["gadm5"] = { geometry: "ST_AsGeoJSON(geom_simplify_high) as geom,", columns: "guid as stack_guid, id_0 as adm0_code, name_0 as adm0_name, id_1 as adm1_code, name_1 as adm1_name, id_2 as adm2_code, name_2 as adm2_name, id_3 as adm3_code, name_3 as adm3_name, id_4 as adm4_code, name_4 as adm4_name, id_5 as adm5_code, name_5 as adm5_name, ST_AsText(ST_Centroid(geom)) as centroid, 5 as level" };

//ECOS Query Whitelist
//settings.projectDetails = ["sf_project.name, sf_project.External_Title__c", "sf_project.Sector__c", "sf_project.Status__c", "sf_project.Sub_Sector__c", "sf_project.Summary__c", "sf_project.Total_Budget__c", "sf_project.Start_Date__c", "sf_project.End_Date__c"];
nonsensitiveSettings.projectDetails = [
    'sf_project.business_unit__c',
    'sf_project.ap_codes__c',
    'sf_project.concept_start_date__c',
    'sf_project.consolidated_record_type__c',
    'sf_project.createddate',
    'sf_project.end_date__c',
    'sf_project.external_title__c',
    'sf_project.human_resource_status__c',
    'sf_project.inactive_ap_codes__c',
    'sf_project.is_ofac__c',
    'sf_project.is_test_data__c',
    'sf_project.is_usg_funded__c',
    'sf_project.isd_region__c',
    'sf_project.lastmodifieddate',
    'sf_project.location__r_isd_region__c',
    'sf_project.name',
    'sf_project.national_society_contractors__c',
    'sf_project.overall_status__c',
    'sf_project.phase__c',
    'sf_project.phase_name__c',
    'sf_project.project_close_out_date__c',
    'sf_project.project_program_implementation__c',
    'sf_project.proposal_approved_on__c',
    'sf_project.proposal_submitted_on__c',
    'sf_project.scope_status__c',
    'sf_project.sector__c',
    'sf_project.staffing_level__c',
    'sf_project.stage_name__c',
    'sf_project.stakeholder_status__c',
    'sf_project.start_date__c',
    'sf_project.status__c',
    'sf_project.status_as_of__c',
    'sf_project.sub_sector__c',
    'sf_project.summary__c',
    'sf_project.target_beneficiaries_direct__c',
    'sf_project.target_beneficiaries_indirect__c',
    'sf_project.target_beneficiaries_rollup_type__c',
    'sf_project.timeline_status__c',
    'sf_project.total_budget__c',
    'sf_project.usg_contract_number__c',
    'sf_project.sf_id',
    'sf_project.location__r_gis_geo_id__c'
];

nonsensitiveSettings.disasterDetails = ["*"];

module.exports = nonsensitiveSettings;