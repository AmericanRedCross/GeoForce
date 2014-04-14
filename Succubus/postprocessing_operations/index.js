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

//Create the aggregated project counts by all gaul levels, with counts rolled up to parents
operations.createAggregateProjectCountsForGADM = "DROP TABLE IF EXISTS sf_aggregated_gadm_projects_counts; \
SELECT 0 as countARC, ''::character varying as nameARC, 0 as guidARC, null::geometry as geomarc, count(gadm0.guid) as count0, gadm0.name_0 as name0, gadm0.guid as guid0, gadm0.geom_simplify_med as geom0, count(gadm1.guid) count1, gadm1.name_1 as name1, gadm1.guid as guid1, gadm1.geom_simplify_med as geom1, count(gadm2.guid) as count2, gadm2.name_2 as name2, gadm2.guid as guid2, gadm2.geom_simplify_med as geom2 \
INTO sf_aggregated_gadm_projects_counts \
FROM gadm0,gadm1,gadm2, vw_sf_all_projects \
WHERE   gadm0.id_0 = gadm1.id_0 AND gadm1.id_1 = gadm2.id_1 AND gadm2.id_0 = gadm1.id_0 AND gadm2.guid = vw_sf_all_projects.stack_guid AND vw_sf_all_projects.level = '2' \
GROUP BY gadm0.guid, gadm0.name_0, gadm1.guid, gadm1.name_1, gadm2.guid, gadm2.name_2, gadm2.geom_simplify_med, gadm1.geom_simplify_med, gadm0.geom_simplify_med;  \
INSERT INTO sf_aggregated_gadm_projects_counts( \
SELECT 0 as countARC, ''::character varying as nameARC, 0 as guidARC, null::geometry as geomarc, count(gadm0.guid), gadm0.name_0 as name, gadm0.guid, gadm0.geom_simplify_med as geom0, count(gadm1.guid), gadm1.name_1 as name, gadm1.guid, gadm1.geom_simplify_med as geom1, 0 as count2, '' as name2, null as guid2, null::geometry as geom2 \
FROM gadm1, gadm0, vw_sf_all_projects \
WHERE gadm0.id_0 = gadm1.id_0 AND gadm1.guid = vw_sf_all_projects.stack_guid AND vw_sf_all_projects.level = '1' \
GROUP BY gadm0.guid, gadm0.name_0, gadm1.guid, gadm1.name_1, geom2, gadm1.geom_simplify_med, gadm0.geom_simplify_med); \
INSERT INTO sf_aggregated_gadm_projects_counts( \
SELECT 0 as countARC, ''::character varying as nameARC, 0 as guidARC, null::geometry as geomarc, count(gadm0.guid), gadm0.name_0 as name, gadm0.guid,gadm0.geom_simplify_med as geom0,  0 as count1, '' as name1, null as guid1, null::geometry as geom1, 0 as count2, '' as name2, null as guid2, null::geometry as geom2 \
FROM gadm0, vw_sf_all_projects \
WHERE gadm0.guid = vw_sf_all_projects.stack_guid \
AND vw_sf_all_projects.level = '0' \
GROUP BY gadm0.guid, gadm0.name_0, gadm0.geom_simplify_med); \
ALTER TABLE sf_aggregated_gadm_projects_counts ADD COLUMN id SERIAL; \
UPDATE sf_aggregated_gadm_projects_counts SET id = DEFAULT; \
ALTER TABLE sf_aggregated_gadm_projects_counts ADD PRIMARY KEY (id); \
CREATE INDEX idx_sf_projectcounts_id ON sf_aggregated_gadm_projects_counts USING btree (id); \
UPDATE sf_aggregated_gadm_projects_counts SET geom0 = ST_BUFFER(geom0, 0); \
update sf_aggregated_gadm_projects_counts \
set nameARC = a.arcregion2, countarc = count0, guidarc = a.gid, geomarc = a.geom \
FROM ARC_REGIONS_DISSOLVED a \
WHERE ST_INTERSECTS(a.geom, geom0);";


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

