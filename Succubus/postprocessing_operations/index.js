/**
 * Created by Ryan Whitley <rwhitley@spatialdev.com>
 *     on Tue April 10th, 2014
 *
 *     Runs post ETL operations, such as view and static table creation for postprocessing data.
 */

var ecosetl = require('../pg'), flow = require('flow');
var pg = require('../settings').pg;
var fs = require('fs');


module.exports = {};

var operations = {};

function addLevelToSFProjectTable() {
    var str = "ALTER TABLE sf_project ADD COLUMN level character varying;";
    str += "UPDATE sf_project SET level = text_search.level FROM text_search WHERE text_search.stack_guid::character varying::text = sf_project.location__r_gis_geo_id__c;";
    return str;
}

function addRiskToSFProjectTable() {
    var str = "ALTER TABLE sf_project ADD COLUMN overall_assessment__c character varying;";
    str += "WITH risk as (SELECT project__c, CASE WHEN array_agg(lower(overall_assessment__c)) @> ARRAY['critical'] THEN 'Critical' WHEN array_agg(lower(overall_assessment__c)) @> ARRAY['high'] THEN 'High' WHEN array_agg(lower(overall_assessment__c)) @> ARRAY['medium'] THEN 'Medium' WHEN array_agg(lower(overall_assessment__c)) @> ARRAY['low'] THEN 'Low' END as overall_assessment__c FROM sf_project_risk GROUP BY project__C) UPDATE sf_project SET overall_assessment__c = risk.overall_assessment__c FROM risk WHERE risk.project__c = sf_project.sf_id;";
    return str;
}

function addStatusToSFProjectTable() {
    //overall_status__c already exists in sf_project table, but is empty.  Let's fill it.
    //var str = "ALTER TABLE sf_project ADD COLUMN overall_status__c character varying;";
    var str = "WITH status as (SELECT project__c, CASE WHEN array_agg(lower(overall_status__c)) @> ARRAY['red'] THEN 'Red' WHEN array_agg(lower(overall_status__c)) @> ARRAY['yellow'] THEN 'Yellow' WHEN array_agg(lower(overall_status__c)) @> ARRAY['green'] THEN 'Green' WHEN array_agg(lower(overall_status__c)) @> ARRAY['white'] THEN 'White' END as overall_status__c FROM sf_project_status GROUP BY project__C) UPDATE sf_project SET overall_status__c = status.overall_status__c FROM status WHERE status.project__c = sf_project.sf_id;";
    return str;
}

function addLevelToSFDisasterTable() {
    var str = "ALTER TABLE sf_disaster ADD COLUMN level character varying;";
    str += "UPDATE sf_disaster \
    SET level = text_search.level \
    FROM text_search, sf_disaster sfd \
    LEFT JOIN sf_disaster_location ON sf_disaster_location.disaster__r_id = sfd.sf_id \
    WHERE text_search.stack_guid::character varying::text = sf_disaster_location.location__r_gis_geo_id__c \
    AND sfd.id = sf_disaster.id;";
    return str;
}



//Add 'level' column to sf_project, sf_disaster tables for fast searches with zoom to capability.
operations.addLevelToSFProjectTable = addLevelToSFProjectTable();
operations.addLevelToSFDisasterTable = addLevelToSFDisasterTable();

//Add 'risk' to sf_project
operations.addRiskToSFProjectTable = addRiskToSFProjectTable();

//Add 'status' to sf_project
operations.addStatusToSFProjectTable = addStatusToSFProjectTable();

//Create the aggregated project counts by all gaul levels, with counts rolled up to parents
operations.createAggregateProjectCountsForGADM = fs.readFileSync('./sql/createAggregatedProjectCountsForGADM.sql', 'utf8');

//Create the aggregated project counts by all gaul levels, with counts rolled up to parents
operations.createAggregateDisasterCountsForGADM = fs.readFileSync('./sql/createAggregatedDisasterCountsForGADM.sql', 'utf8');

operations.AddIndicesForProjectTable =
    "DROP INDEX IF EXISTS idx_sf_project_sector__c; CREATE INDEX idx_sf_project_sector__c ON sf_project USING btree (sector__c); \
    DROP INDEX IF EXISTS idx_sf_project_status__c; CREATE INDEX idx_sf_project_status__c ON sf_project USING btree (status__c); \
    DROP INDEX IF EXISTS idx_sf_project_stage_name__c; CREATE INDEX idx_sf_project_stage_name__c ON sf_project USING btree (stage_name__c); \
    DROP INDEX IF EXISTS idx_sf_project_start_date__c; CREATE INDEX idx_sf_project_start_date__c ON sf_project USING btree (start_date__c); \
    DROP INDEX IF EXISTS idx_sf_project_end_date__c; CREATE INDEX idx_sf_project_end_date__c ON sf_project USING btree (end_date__c); \
    DROP INDEX IF EXISTS idx_sf_project_sub_sector__c; CREATE INDEX idx_sf_project_sub_sector__c ON sf_project USING btree (sub_sector__c); \
    DROP INDEX IF EXISTS idx_sf_project_name; CREATE INDEX idx_sf_project_name ON sf_project USING btree (name); \
    DROP INDEX IF EXISTS idx_sf_project_summary__c; CREATE INDEX idx_sf_project_summary__c ON sf_project USING gin(to_tsvector('english', summary__c)); \
    DROP INDEX IF EXISTS idx_sf_project_total_budget__c; CREATE INDEX idx_sf_project_total_budget__c ON sf_project USING btree (total_budget__c); \
    DROP INDEX IF EXISTS idx_sf_project_sf_id; CREATE INDEX idx_sf_project_sf_id ON sf_project USING btree (sf_id);";

operations.AddIndicesForIndicatorTable =
  "DROP INDEX IF EXISTS idx_sf_indicator_sf_id; CREATE INDEX idx_sf_indicator_sf_id ON sf_indicator USING btree (sf_id); \
  DROP INDEX IF EXISTS idx_sf_indicator_logframe_element__c; CREATE INDEX idx_sf_indicator_logframe_element__c ON sf_indicator USING btree (logframe_element__c); \
  DROP INDEX IF EXISTS idx_sf_indicator_project__c; CREATE INDEX idx_sf_indicator_project__c ON sf_indicator USING btree (project__c); ";

operations.AddIndicesForIndicatorValueTable =
  "DROP INDEX IF EXISTS idx_sf_indicator_value_sf_id; CREATE INDEX idx_sf_indicator_value_sf_id ON sf_indicator_value USING btree (sf_id); \
  DROP INDEX IF EXISTS idx_sf_indicator_value_indicator__c; CREATE INDEX idx_sf_indicator_value_indicator__c ON sf_indicator_value USING btree (indicator__c); ";

//operations.AddIndicesForLogframeElementTable =
//  "DROP INDEX IF EXISTS idx_sf_logframe_element_sf_id; CREATE INDEX idx_sf_logframe_element_sf_id ON sf_logframe_element USING btree (sf_id); ";

//operations.vacuum = "VACUUM ANALYZE;";

module.exports.run = flow.define(
	function(cb) {
		this.cb = cb;
		for (var operation in operations) {
      console.log("Postprocessing: " + operation);
			ecosetl.query(operations[operation], this.MULTI());
      console.log("Done.");
		}
	},
	function(){
		//When all have finished
		this.cb();
	}
);

