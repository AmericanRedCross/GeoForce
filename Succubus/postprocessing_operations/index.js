/**
 * Created by Ryan Whitley <rwhitley@spatialdev.com>
 *     on Tue April 10th, 2014
 *
 *     Runs post ETL operations, such as view and static table creation for postprocessing data.
 */

var ecosetl = require('../pg'), flow = require('flow');


module.exports = {};

var operations = {};

//Drop/Create Theme Views used by the client app
operations.createThemeViews = "CREATE OR REPLACE VIEW vw_theme_projects_gadm AS \
SELECT text_search.name, text_search.level, text_search.country, text_search.geom, text_search.fullname, text_search.stack_guid::character varying, count(text_search.id) as project_count \
FROM sf_all_projects a \
JOIN text_search ON text_search.stack_guid::character varying::text = a.gis_geo_id__c \
GROUP BY text_search.name, text_search.level, text_search.country, text_search.geom, text_search.fullname, text_search.stack_guid; \
ALTER TABLE vw_theme_projects_gadm \
OWNER TO postgres;";


operations.createAggregateProjectCountsForGADM = "";

operations.




module.exports.run = flow.define(
	function(cb) {
		this.cb = cb;
		for (var operation in operations) {
			ecosetl.query(operations[operation], this.MULTI());
		}
	},
	function(){
		//When all have finished
		this.cb();
	}
)

