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
operations.createThemeViews =
"CREATE OR REPLACE VIEW vw_theme_project_gadm AS \
    SELECT  text_search.name, \
            text_search.level, \
            text_search.country, \
            text_search.geom, \
            text_search.fullname, \
            text_search.stack_guid::character varying, \
            count(text_search.id) as project_count \
    FROM sf_project a \
    JOIN text_search ON text_search.stack_guid::character varying::text = a.location__r_gis_geo_id__c \
    GROUP BY text_search.name, \
            text_search.level, \
            text_search.country, \
            text_search.geom, \
            text_search.fullname, \
            text_search.stack_guid; \
    ALTER TABLE vw_theme_project_gadm \
    OWNER TO postgres;";

//Create the aggregated project counts by all gaul levels, with counts rolled up to parents
operations.createAggregateProjectCountsForGADM =
"DROP TABLE IF EXISTS sf_aggregated_gadm_project_counts; \
SELECT  0 as countARC, \
        ''::character varying as nameARC, \
        0 as guidARC, \
        null::geometry as geomarc, \
        count(gadm0.guid) as count0, \
        gadm0.name_0 as name0, \
        gadm0.guid as guid0, \
        gadm0.geom_simplify_med as geom0, \
        count(gadm1.guid) count1, \
        gadm1.name_1 as name1, gadm1.guid as guid1, \
        gadm1.geom_simplify_med as geom1, \
        count(gadm2.guid) as count2, \
        gadm2.name_2 as name2, \
        gadm2.guid as guid2, \
        gadm2.geom_simplify_med as geom2, \
        count(gadm3.guid) as count3, \
        gadm3.name_3 as name3, \
        gadm3.guid as guid3, \
        gadm3.geom_simplify_med as geom3, \
        count(gadm4.guid) as count4, \
        gadm4.name_4 as name4, \
        gadm4.guid as guid4, \
        gadm4.geom_simplify_med as geom4, \
        count(gadm5.guid) as count5, \
        gadm5.name_5 as name5, \
        gadm5.guid as guid5, \
        gadm5.geom_simplify_med as geom5 \
INTO    sf_aggregated_gadm_project_counts \
FROM    gadm0, gadm1, gadm2, gadm3, gadm4, gadm5, vw_sf_project \
\
WHERE   gadm0.id_0 = gadm1.id_0 \
  AND   gadm2.id_0 = gadm1.id_0 \
  AND   gadm3.id_0 = gadm1.id_0 \
  AND   gadm4.id_0 = gadm1.id_0 \
  AND   gadm5.id_0 = gadm1.id_0 \
  AND   gadm1.id_1 = gadm2.id_1 \
  AND   gadm3.id_1 = gadm2.id_1 \
  AND   gadm4.id_1 = gadm2.id_1 \
  AND   gadm5.id_1 = gadm2.id_1 \
  AND   gadm2.id_2 = gadm3.id_2 \
  AND   gadm4.id_2 = gadm3.id_2 \
  AND   gadm5.id_2 = gadm3.id_2 \
  AND   gadm3.id_3 = gadm4.id_3 \
  AND   gadm5.id_3 = gadm4.id_3 \
  AND   gadm4.id_4 = gadm5.id_4 \
  AND   gadm5.guid = vw_sf_project.stack_guid \
  AND   vw_sf_project.level = '5' \
  \
GROUP BY gadm0.guid, \
        gadm0.name_0, \
        gadm1.guid, \
        gadm1.name_1, \
        gadm2.guid, \
        gadm2.name_2, \
        gadm3.guid, \
        gadm3.name_3, \
        gadm4.guid, \
        gadm4.name_4, \
        gadm5.guid, \
        gadm5.name_5, \
        gadm5.geom_simplify_med, \
        gadm4.geom_simplify_med, \
        gadm3.geom_simplify_med, \
        gadm2.geom_simplify_med, \
        gadm1.geom_simplify_med, \
        gadm0.geom_simplify_med; \
\
\
INSERT INTO sf_aggregated_gadm_project_counts \
  ( SELECT  0 as countARC, \
            ''::character varying as nameARC, \
            0 as guidARC, \
            null::geometry as geomarc, \
            count(gadm0.guid) as count0, \
            gadm0.name_0 as name0, \
            gadm0.guid as guid0, \
            gadm0.geom_simplify_med as geom0, \
            count(gadm1.guid) count1, \
            gadm1.name_1 as name1, gadm1.guid as guid1, \
            gadm1.geom_simplify_med as geom1, \
            count(gadm2.guid) as count2, \
            gadm2.name_2 as name2, \
            gadm2.guid as guid2, \
            gadm2.geom_simplify_med as geom2, \
            count(gadm3.guid) as count3, \
            gadm3.name_3 as name3, \
            gadm3.guid as guid3, \
            gadm3.geom_simplify_med as geom3, \
            count(gadm4.guid) as count4, \
            gadm4.name_4 as name4, \
            gadm4.guid as guid4, \
            gadm4.geom_simplify_med as geom4, \
            0 as count5, \
            '' as name5, \
            null as guid5, \
            null::geometry as geom5 \
    FROM    gadm0, gadm1, gadm2, gadm3, gadm4, vw_sf_project \
    WHERE   gadm0.id_0 = gadm1.id_0 \
      AND   gadm2.id_0 = gadm1.id_0 \
      AND   gadm3.id_0 = gadm1.id_0 \
      AND   gadm4.id_0 = gadm1.id_0 \
      AND   gadm1.id_1 = gadm2.id_1 \
      AND   gadm3.id_1 = gadm2.id_1 \
      AND   gadm4.id_1 = gadm2.id_1 \
      AND   gadm2.id_2 = gadm3.id_2 \
      AND   gadm4.id_2 = gadm3.id_2 \
      AND   gadm3.id_3 = gadm4.id_3 \
      AND   gadm4.guid = vw_sf_project.stack_guid \
      AND   vw_sf_project.level = '4' \
    GROUP BY gadm0.guid, \
            gadm0.name_0, \
            gadm1.guid, \
            gadm1.name_1, \
            gadm2.guid, \
            gadm2.name_2, \
            gadm3.guid, \
            gadm3.name_3, \
            gadm4.guid, \
            gadm4.name_4, \
            gadm4.geom_simplify_med, \
            gadm3.geom_simplify_med, \
            gadm2.geom_simplify_med, \
            gadm1.geom_simplify_med, \
            gadm0.geom_simplify_med ); \
\
\
INSERT INTO sf_aggregated_gadm_project_counts \
  ( SELECT  0 as countARC, \
            ''::character varying as nameARC, \
            0 as guidARC, \
            null::geometry as geomarc, \
            count(gadm0.guid) as count0, \
            gadm0.name_0 as name0, \
            gadm0.guid as guid0, \
            gadm0.geom_simplify_med as geom0, \
            count(gadm1.guid) count1, \
            gadm1.name_1 as name1, gadm1.guid as guid1, \
            gadm1.geom_simplify_med as geom1, \
            count(gadm2.guid) as count2, \
            gadm2.name_2 as name2, \
            gadm2.guid as guid2, \
            gadm2.geom_simplify_med as geom2, \
            count(gadm3.guid) as count3, \
            gadm3.name_3 as name3, \
            gadm3.guid as guid3, \
            gadm3.geom_simplify_med as geom3, \
            0 as count4, \
            '' as name4, \
            null as guid4, \
            null::geometry as geom4, \
            0 as count5, \
            '' as name5, \
            null as guid5, \
            null::geometry as geom5 \
    FROM    gadm0, gadm1, gadm2, gadm3, vw_sf_project \
    WHERE   gadm0.id_0 = gadm1.id_0 \
      AND   gadm2.id_0 = gadm1.id_0 \
      AND   gadm3.id_0 = gadm1.id_0 \
      AND   gadm1.id_1 = gadm2.id_1 \
      AND   gadm3.id_1 = gadm2.id_1 \
      AND   gadm2.id_2 = gadm3.id_2 \
      AND   gadm3.guid = vw_sf_project.stack_guid \
      AND   vw_sf_project.level = '3' \
    GROUP BY gadm0.guid, \
            gadm0.name_0, \
            gadm1.guid, \
            gadm1.name_1, \
            gadm2.guid, \
            gadm2.name_2, \
            gadm3.guid, \
            gadm3.name_3, \
            gadm3.geom_simplify_med, \
            gadm2.geom_simplify_med, \
            gadm1.geom_simplify_med, \
            gadm0.geom_simplify_med ); \
\
\
INSERT INTO sf_aggregated_gadm_project_counts \
  ( SELECT 0 as countARC, \
          ''::character varying as nameARC, \
          0 as guidARC, \
          null::geometry as geomarc, \
          count(gadm0.guid), \
          gadm0.name_0 as name, \
          gadm0.guid, \
          gadm0.geom_simplify_med as geom0, \
          count(gadm1.guid), \
          gadm1.name_1 as name, \
          gadm1.guid, \
          gadm1.geom_simplify_med as geom1, \
          count(gadm2.guid) as count2, \
          gadm2.name_2 as name2, \
          gadm2.guid as guid2, \
          gadm2.geom_simplify_med as geom2, \
          0 as count3, \
          '' as name3, \
          null as guid3, \
          null::geometry as geom3, \
          0 as count4, \
          '' as name4, \
          null as guid4, \
          null::geometry as geom4, \
          0 as count5, \
          '' as name5, \
          null as guid5, \
          null::geometry as geom5 \
    FROM  gadm0, gadm1, gadm2, vw_sf_project \
    WHERE gadm0.id_0 = gadm1.id_0 \
      AND gadm1.id_1 = gadm2.id_1 \
      AND gadm2.id_0 = gadm1.id_0 \
      AND gadm2.guid = vw_sf_project.stack_guid \
      AND vw_sf_project.level = '2' \
    GROUP BY gadm0.guid, \
          gadm0.name_0, \
          gadm1.guid, \
          gadm1.name_1, \
          gadm2.guid, \
          gadm2.name_2, \
          gadm2.geom_simplify_med, \
          gadm1.geom_simplify_med, \
          gadm0.geom_simplify_med ); \
\
INSERT INTO sf_aggregated_gadm_project_counts \
  ( SELECT 0 as countARC, \
          ''::character varying as nameARC, \
          0 as guidARC, \
          null::geometry as geomarc, \
          count(gadm0.guid), \
          gadm0.name_0 as name, \
          gadm0.guid, \
          gadm0.geom_simplify_med as geom0, \
          count(gadm1.guid), \
          gadm1.name_1 as name, \
          gadm1.guid, \
          gadm1.geom_simplify_med as geom1, \
          0 as count2, \
          '' as name2, \
          null as guid2, \
          null::geometry as geom2, \
          0 as count3, \
          '' as name3, \
          null as guid3, \
          null::geometry as geom3, \
          0 as count4, \
          '' as name4, \
          null as guid4, \
          null::geometry as geom4, \
          0 as count5, \
          '' as name5, \
          null as guid5, \
          null::geometry as geom5 \
    FROM  gadm1, gadm0, vw_sf_project \
    WHERE gadm0.id_0 = gadm1.id_0 \
      AND gadm1.guid = vw_sf_project.stack_guid \
      AND vw_sf_project.level = '1' \
    GROUP BY gadm0.guid, \
          gadm0.name_0, \
          gadm1.guid, \
          gadm1.name_1, \
          gadm1.geom_simplify_med, \
          gadm0.geom_simplify_med ); \
\
\
INSERT INTO sf_aggregated_gadm_project_counts\
  ( SELECT 0 as countARC, \
          ''::character varying as nameARC, \
          0 as guidARC, \
          null::geometry as geomarc, \
          count(gadm0.guid), \
          gadm0.name_0 as name, \
          gadm0.guid, \
          gadm0.geom_simplify_med as geom0, \
          0 as count1, \
          '' as name1, \
          null as guid1, \
          null::geometry as geom1, \
          0 as count2, \
          '' as name2, \
          null as guid2, \
          null::geometry as geom2, \
          0 as count3, \
          '' as name3, \
          null as guid3, \
          null::geometry as geom3, \
          0 as count4, \
          '' as name4, \
          null as guid4, \
          null::geometry as geom4, \
          0 as count5, \
          '' as name5, \
          null as guid5, \
          null::geometry as geom5 \
    FROM gadm0, vw_sf_project \
    WHERE gadm0.guid = vw_sf_project.stack_guid \
      AND vw_sf_project.level = '0' \
    GROUP BY gadm0.guid, \
          gadm0.name_0, \
          gadm0.geom_simplify_med ); \
\
\
ALTER TABLE sf_aggregated_gadm_project_counts ADD COLUMN id SERIAL; \
\
\
UPDATE sf_aggregated_gadm_project_counts SET id = DEFAULT; \
\
\
ALTER TABLE sf_aggregated_gadm_project_counts ADD PRIMARY KEY (id); \
\
\
DROP INDEX IF EXISTS idx_sf_projectcounts_id; \
CREATE INDEX idx_sf_projectcounts_id ON sf_aggregated_gadm_project_counts USING btree (id); \
CREATE INDEX idx_sf_projectcounts_guidarc ON sf_aggregated_gadm_project_counts USING btree (guidarc); \
CREATE INDEX idx_sf_projectcounts_guid0 ON sf_aggregated_gadm_project_counts USING btree (guid0); \
CREATE INDEX idx_sf_projectcounts_guid1 ON sf_aggregated_gadm_project_counts USING btree (guid1); \
CREATE INDEX idx_sf_projectcounts_guid2 ON sf_aggregated_gadm_project_counts USING btree (guid2); \
CREATE INDEX idx_sf_projectcounts_guid3 ON sf_aggregated_gadm_project_counts USING btree (guid3); \
CREATE INDEX idx_sf_projectcounts_guid4 ON sf_aggregated_gadm_project_counts USING btree (guid4); \
CREATE INDEX idx_sf_projectcounts_guid5 ON sf_aggregated_gadm_project_counts USING btree (guid5); \
\
\
UPDATE sf_aggregated_gadm_project_counts SET geom0 = ST_BUFFER(geom0, 0); \
\
\
UPDATE sf_aggregated_gadm_project_counts \
SET nameARC = a.arcregion2, countarc = count0, guidarc = a.gid, geomarc = a.geom \
FROM ARC_REGIONS_DISSOLVED a \
WHERE ST_INTERSECTS(a.geom, geom0);";

//operations.vacuum = "VACUUM ANALYZE;";

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
);

