/**
 * Created by Ryan Whitley <rwhitley@spatialdev.com>
 *     on Tue April 10th, 2014
 *
 *     Runs post ETL operations, such as view and static table creation for postprocessing data.
 */

var ecosetl = require('../pg'), flow = require('flow');
var pg = require('../settings').pg;


module.exports = {};

var operations = {};



function createProjectView(user) {
    var str =
        "CREATE OR REPLACE VIEW vw_theme_project_gadm AS \
  SELECT  text_search.level, \
          text_search.stack_guid::character varying as guid, \
          a.*\
  FROM sf_project AS a \
  JOIN text_search ON text_search.stack_guid::character varying::text = a.location__r_gis_geo_id__c; \
  ALTER TABLE vw_theme_project_gadm \
  OWNER TO "+user+";";

    return str;
}



function addLevelToSFProjectTable() {
    var str = "ALTER TABLE sf_project ADD COLUMN level character varying;";
    str += "UPDATE sf_project SET level = text_search.level FROM text_search WHERE text_search.stack_guid::character varying::text = sf_project.location__r_gis_geo_id__c;";
    return str;
}

function addLevelToSFDisasterTable() {
    var str = "ALTER TABLE sf_disaster ADD COLUMN level character varying;";
    str += "ALTER TABLE sf_disaster ADD COLUMN level character varying; \
    UPDATE sf_disaster \
    SET level = text_search.level \
    FROM text_search, sf_disaster sfd \
    LEFT JOIN sf_disaster_location ON sf_disaster_location.disaster__r_id = sfd.sf_id \
    WHERE text_search.stack_guid::character varying::text = sf_disaster_location.location__r_gis_geo_id__c \
    AND sfd.id = sf_disaster.id;";
    return str;
}

function createDisasterView(user) {
    var str =
        "CREATE OR REPLACE VIEW vw_theme_disaster_gadm AS \
          SELECT text_search.level, \
          text_search.stack_guid::character varying as guid, \
          dis.* FROM sf_disaster_location AS loc \
          LEFT JOIN sf_disaster as dis ON loc.disaster__r_id = dis.sf_id \
          JOIN text_search ON text_search.stack_guid::character varying::text = loc.location__r_gis_geo_id__c; \
          ALTER TABLE vw_theme_disaster_gadm \
          OWNER TO "+user+";";

    return str;
}

//Drop/Create Theme Views used by the client app
operations.createProjectThemeView = createProjectView(pg.user);
operations.createDisasterThemeView = createDisasterView(pg.user);

//Add 'level' column to sf_project, sf_disaster tables for fast searches with zoom to capability.
operations.addLevelToSFProjectTable = addLevelToSFProjectTable();
operations.addLevelToSFDisasterTable = addLevelToSFDisasterTable();

//Create the aggregated project counts by all gaul levels, with counts rolled up to parents
operations.createAggregateProjectCountsForGADM =
"DROP TABLE IF EXISTS sf_aggregated_gadm_project_counts; \
SELECT  0 as countARC, \
    ''::character varying as nameARC, \
    0 as guidARC, \
    null::geometry as geomarc, \
    1 as count0, \
    gadm0.name_0 as name0, \
    gadm0.guid as guid0, \
    gadm0.geom_simplify_med as geom0, \
    1 as count1, \
    gadm1.name_1 as name1, gadm1.guid as guid1, \
    gadm1.geom_simplify_med as geom1, \
    1 as count2, \
    gadm2.name_2 as name2, \
    gadm2.guid as guid2, \
    gadm2.geom_simplify_med as geom2, \
    1 as count3, \
    gadm3.name_3 as name3, \
    gadm3.guid as guid3, \
    gadm3.geom_simplify_med as geom3, \
    1 as count4, \
    gadm4.name_4 as name4, \
    gadm4.guid as guid4, \
    gadm4.geom_simplify_med as geom4, \
    1 as count5, \
    gadm5.name_5 as name5, \
    gadm5.guid as guid5, \
    gadm5.geom_simplify_med as geom5, \
\
sf_project.sector__c, \
    sf_project.status__c, \
    sf_project.stage_name__c, \
    sf_project.start_date__c, \
    sf_project.end_date__c, \
    sf_project.sub_sector__c, \
    sf_project.name, \
    sf_project.summary__c, \
    sf_project.total_budget__c, \
    sf_project.sf_id \
INTO    sf_aggregated_gadm_project_counts \
FROM    gadm0, gadm1, gadm2, gadm3, gadm4, gadm5, sf_project \
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
AND   gadm5.guid::text = sf_project.location__r_gis_geo_id__c;  \
  \
  \
INSERT INTO sf_aggregated_gadm_project_counts  \
( SELECT  0 as countARC,  \
    ''::character varying as nameARC,  \
    0 as guidARC,  \
    null::geometry as geomarc,  \
    1 as count0,  \
    gadm0.name_0 as name0,  \
    gadm0.guid as guid0,  \
    gadm0.geom_simplify_med as geom0,  \
    1 as count1,  \
    gadm1.name_1 as name1, gadm1.guid as guid1,  \
    gadm1.geom_simplify_med as geom1,  \
    1 as count2,  \
    gadm2.name_2 as name2,  \
    gadm2.guid as guid2,  \
    gadm2.geom_simplify_med as geom2,  \
    1 as count3,  \
    gadm3.name_3 as name3,  \
    gadm3.guid as guid3,  \
    gadm3.geom_simplify_med as geom3,  \
    1 as count4,  \
    gadm4.name_4 as name4,  \
    gadm4.guid as guid4,  \
    gadm4.geom_simplify_med as geom4,  \
    0 as count5,  \
    '' as name5,  \
    null as guid5,  \
    null::geometry as geom5,  \
  \
  \
sf_project.sector__c,  \
    sf_project.status__c,  \
    sf_project.stage_name__c,  \
    sf_project.start_date__c,  \
    sf_project.end_date__c,  \
    sf_project.sub_sector__c,  \
    sf_project.name,  \
    sf_project.summary__c,  \
    sf_project.total_budget__c,  \
    sf_project.sf_id  \
  \
FROM    gadm0, gadm1, gadm2, gadm3, gadm4, sf_project  \
WHERE   gadm0.id_0 = gadm1.id_0  \
AND   gadm2.id_0 = gadm1.id_0  \
AND   gadm3.id_0 = gadm1.id_0  \
AND   gadm4.id_0 = gadm1.id_0  \
AND   gadm1.id_1 = gadm2.id_1  \
AND   gadm3.id_1 = gadm2.id_1  \
AND   gadm4.id_1 = gadm2.id_1  \
AND   gadm2.id_2 = gadm3.id_2  \
AND   gadm4.id_2 = gadm3.id_2  \
AND   gadm3.id_3 = gadm4.id_3  \
AND   gadm4.guid::text = sf_project.location__r_gis_geo_id__c); \
\
\
INSERT INTO sf_aggregated_gadm_project_counts \
( SELECT  0 as countARC, \
    ''::character varying as nameARC, \
    0 as guidARC, \
    null::geometry as geomarc, \
    1 as count0, \
    gadm0.name_0 as name0, \
    gadm0.guid as guid0, \
    gadm0.geom_simplify_med as geom0, \
    1 as count1, \
    gadm1.name_1 as name1, gadm1.guid as guid1, \
    gadm1.geom_simplify_med as geom1, \
    1 as count2, \
    gadm2.name_2 as name2, \
    gadm2.guid as guid2, \
    gadm2.geom_simplify_med as geom2, \
    1 as count3, \
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
    null::geometry as geom5, \
 \
sf_project.sector__c, \
    sf_project.status__c, \
    sf_project.stage_name__c, \
    sf_project.start_date__c, \
    sf_project.end_date__c, \
    sf_project.sub_sector__c, \
    sf_project.name, \
    sf_project.summary__c, \
    sf_project.total_budget__c, \
    sf_project.sf_id \
 \
FROM    gadm0, gadm1, gadm2, gadm3, sf_project \
WHERE   gadm0.id_0 = gadm1.id_0 \
AND   gadm2.id_0 = gadm1.id_0 \
AND   gadm3.id_0 = gadm1.id_0 \
AND   gadm1.id_1 = gadm2.id_1 \
AND   gadm3.id_1 = gadm2.id_1 \
AND   gadm2.id_2 = gadm3.id_2 \
AND   gadm3.guid::text = sf_project.location__r_gis_geo_id__c); \
\
\
INSERT INTO sf_aggregated_gadm_project_counts \
( SELECT 0 as countARC, \
    ''::character varying as nameARC, \
    0 as guidARC, \
    null::geometry as geomarc, \
    1 as count0, \
    gadm0.name_0 as name, \
    gadm0.guid, \
    gadm0.geom_simplify_med as geom0, \
    1 as count1, \
    gadm1.name_1 as name, \
    gadm1.guid, \
    gadm1.geom_simplify_med as geom1, \
    1 as count2, \
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
    null::geometry as geom5, \
 \
sf_project.sector__c, \
    sf_project.status__c, \
    sf_project.stage_name__c, \
    sf_project.start_date__c, \
    sf_project.end_date__c, \
    sf_project.sub_sector__c, \
    sf_project.name, \
    sf_project.summary__c, \
    sf_project.total_budget__c, \
    sf_project.sf_id \
 \
FROM  gadm0, gadm1, gadm2, sf_project \
WHERE gadm0.id_0 = gadm1.id_0 \
AND gadm1.id_1 = gadm2.id_1 \
AND gadm2.id_0 = gadm1.id_0 \
AND gadm2.guid::text = sf_project.location__r_gis_geo_id__c); \
\
INSERT INTO sf_aggregated_gadm_project_counts \
( SELECT 0 as countARC, \
    ''::character varying as nameARC, \
    0 as guidARC, \
    null::geometry as geomarc, \
    1 as count0, \
    gadm0.name_0 as name, \
    gadm0.guid, \
    gadm0.geom_simplify_med as geom0, \
    1 as count1, \
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
    null::geometry as geom5, \
 \
sf_project.sector__c, \
    sf_project.status__c, \
    sf_project.stage_name__c, \
    sf_project.start_date__c, \
    sf_project.end_date__c, \
    sf_project.sub_sector__c, \
    sf_project.name, \
    sf_project.summary__c, \
    sf_project.total_budget__c, \
    sf_project.sf_id \
 \
FROM  gadm1, gadm0, sf_project \
WHERE gadm0.id_0 = gadm1.id_0 \
AND gadm1.guid::text = sf_project.location__r_gis_geo_id__c); \
\
\
INSERT INTO sf_aggregated_gadm_project_counts \
( SELECT 0 as countARC, \
    ''::character varying as nameARC, \
    0 as guidARC, \
    null::geometry as geomarc, \
    1 as count0, \
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
    null::geometry as geom5, \
 \
sf_project.sector__c, \
    sf_project.status__c, \
    sf_project.stage_name__c, \
    sf_project.start_date__c, \
    sf_project.end_date__c, \
    sf_project.sub_sector__c, \
    sf_project.name, \
    sf_project.summary__c, \
    sf_project.total_budget__c, \
    sf_project.sf_id \
 \
FROM gadm0, sf_project \
WHERE gadm0.guid::text = sf_project.location__r_gis_geo_id__c \
AND location__r_gis_geo_id__c IS NOT NULL ); \
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
SET nameARC = a.region, countarc = count0, guidarc = a.gid, geomarc = a.geom \
FROM ARC_REGIONS_DISSOLVED a \
WHERE ST_INTERSECTS(a.geom, geom0);";




//Create the aggregated project counts by all gaul levels, with counts rolled up to parents
operations.createAggregateDisasterCountsForGADM =
    "CREATE OR REPLACE VIEW vw_sf_disaster AS select sf_disaster.*, sf_disaster_location.location__r_gis_geo_id__c \
FROM sf_disaster, sf_disaster_location \
WHERE sf_disaster.sf_id = sf_disaster_location.disaster__r_id; \
DROP TABLE IF EXISTS sf_aggregated_gadm_disaster_counts; \
\
SELECT  0 as countARC, \
0 as rfacountarc, \
    ''::character varying as nameARC, \
    0 as guidARC, \
    null::geometry as geomarc,\
    1 as count0,\
    (SELECT count(id) FROM sf_request_for_assistance rfa WHERE rfa.disaster__r_id = vw_sf_disaster.sf_id) as rfacount0, \
    gadm0.name_0 as name0, \
    gadm0.guid as guid0, \
    gadm0.geom_simplify_med as geom0,\
    1 as count1,\
    (SELECT count(id) FROM sf_request_for_assistance rfa WHERE rfa.disaster__r_id = vw_sf_disaster.sf_id) as rfacount1,\
    gadm1.name_1 as name1, gadm1.guid as guid1,\
    gadm1.geom_simplify_med as geom1,\
    1 as count2,\
    (SELECT count(id) FROM sf_request_for_assistance rfa WHERE rfa.disaster__r_id = vw_sf_disaster.sf_id) as rfacount2,\
    gadm2.name_2 as name2,\
    gadm2.guid as guid2,\
    gadm2.geom_simplify_med as geom2,\
    1 as count3,\
    (SELECT count(id) FROM sf_request_for_assistance rfa WHERE rfa.disaster__r_id = vw_sf_disaster.sf_id) as rfacount3,\
    gadm3.name_3 as name3,\
    gadm3.guid as guid3,\
    gadm3.geom_simplify_med as geom3,\
    1 as count4,\
    (SELECT count(id) FROM sf_request_for_assistance rfa WHERE rfa.disaster__r_id = vw_sf_disaster.sf_id) as rfacount4,\
    gadm4.name_4 as name4,\
    gadm4.guid as guid4,\
    gadm4.geom_simplify_med as geom4,\
    1 as count5,\
    (SELECT count(id) FROM sf_request_for_assistance rfa WHERE rfa.disaster__r_id = vw_sf_disaster.sf_id) as rfacount5,\
    gadm5.name_5 as name5,\
    gadm5.guid as guid5,\
    gadm5.geom_simplify_med as geom5,\
\
    vw_sf_disaster.sf_id \
INTO    sf_aggregated_gadm_disaster_counts \
FROM    gadm0, gadm1, gadm2, gadm3, gadm4, gadm5, vw_sf_disaster \
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
AND   gadm5.guid::text = vw_sf_disaster.location__r_gis_geo_id__c; \
\
\
INSERT INTO sf_aggregated_gadm_disaster_counts  \
(     SELECT  0 as countARC, \
0 as rfacountarc, \
    ''::character varying as nameARC, \
    0 as guidARC, \
    null::geometry as geomarc, \
    1 as count0, \
    (SELECT count(id) FROM sf_request_for_assistance rfa WHERE rfa.disaster__r_id = vw_sf_disaster.sf_id) as rfacount0, \
    gadm0.name_0 as name0, \
    gadm0.guid as guid0, \
    gadm0.geom_simplify_med as geom0, \
    1 as count1, \
    (SELECT count(id) FROM sf_request_for_assistance rfa WHERE rfa.disaster__r_id = vw_sf_disaster.sf_id) as rfacount1, \
    gadm1.name_1 as name1, gadm1.guid as guid1, \
    gadm1.geom_simplify_med as geom1, \
    1 as count2, \
    (SELECT count(id) FROM sf_request_for_assistance rfa WHERE rfa.disaster__r_id = vw_sf_disaster.sf_id) as rfacount2, \
    gadm2.name_2 as name2, \
    gadm2.guid as guid2, \
    gadm2.geom_simplify_med as geom2, \
    1 as count3, \
    (SELECT count(id) FROM sf_request_for_assistance rfa WHERE rfa.disaster__r_id = vw_sf_disaster.sf_id) as rfacount3, \
    gadm3.name_3 as name3, \
    gadm3.guid as guid3, \
    gadm3.geom_simplify_med as geom3, \
    1 as count4, \
    (SELECT count(id) FROM sf_request_for_assistance rfa WHERE rfa.disaster__r_id = vw_sf_disaster.sf_id) as rfacount4, \
    gadm4.name_4 as name4, \
    gadm4.guid as guid4, \
    gadm4.geom_simplify_med as geom4, \
    0 as count5, \
    0 as rfacount5, \
    '' as name5, \
    null as guid5, \
    null::geometry as geom5, \
 \
 \
    vw_sf_disaster.sf_id \
 \
FROM    gadm0, gadm1, gadm2, gadm3, gadm4, vw_sf_disaster \
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
AND   gadm4.guid::text = vw_sf_disaster.location__r_gis_geo_id__c); \
\
\
INSERT INTO sf_aggregated_gadm_disaster_counts \
(   SELECT  0 as countARC, \
0 as rfacountarc, \
    ''::character varying as nameARC, \
    0 as guidARC, \
    null::geometry as geomarc, \
    1 as count0, \
    (SELECT count(id) FROM sf_request_for_assistance rfa WHERE rfa.disaster__r_id = vw_sf_disaster.sf_id) as rfacount0, \
    gadm0.name_0 as name0, \
    gadm0.guid as guid0, \
    gadm0.geom_simplify_med as geom0, \
    1 as count1, \
    (SELECT count(id) FROM sf_request_for_assistance rfa WHERE rfa.disaster__r_id = vw_sf_disaster.sf_id) as rfacount1, \
    gadm1.name_1 as name1, gadm1.guid as guid1, \
    gadm1.geom_simplify_med as geom1, \
    1 as count2, \
    (SELECT count(id) FROM sf_request_for_assistance rfa WHERE rfa.disaster__r_id = vw_sf_disaster.sf_id) as rfacount2, \
    gadm2.name_2 as name2, \
    gadm2.guid as guid2, \
    gadm2.geom_simplify_med as geom2, \
    1 as count3, \
    (SELECT count(id) FROM sf_request_for_assistance rfa WHERE rfa.disaster__r_id = vw_sf_disaster.sf_id) as rfacount3, \
    gadm3.name_3 as name3, \
    gadm3.guid as guid3, \
    gadm3.geom_simplify_med as geom3, \
    0 as count4, \
    0 as rfacount4, \
    '' as name4, \
    null as guid4, \
    null::geometry as geom4, \
    0 as count5, \
    0 as rfacount5, \
    '' as name5, \
    null as guid5, \
    null::geometry as geom5, \
 \
    vw_sf_disaster.sf_id \
 \
FROM    gadm0, gadm1, gadm2, gadm3, vw_sf_disaster \
WHERE   gadm0.id_0 = gadm1.id_0 \
AND   gadm2.id_0 = gadm1.id_0 \
AND   gadm3.id_0 = gadm1.id_0 \
AND   gadm1.id_1 = gadm2.id_1 \
AND   gadm3.id_1 = gadm2.id_1 \
AND   gadm2.id_2 = gadm3.id_2 \
AND   gadm3.guid::text = vw_sf_disaster.location__r_gis_geo_id__c); \
\
INSERT INTO sf_aggregated_gadm_disaster_counts \
( SELECT 0 as countARC, \
0 as rfacountarc, \
    ''::character varying as nameARC, \
    0 as guidARC, \
    null::geometry as geomarc, \
    1 as count0, \
    (SELECT count(id) FROM sf_request_for_assistance rfa WHERE rfa.disaster__r_id = vw_sf_disaster.sf_id) as rfacount0, \
    gadm0.name_0 as name, \
    gadm0.guid, \
    gadm0.geom_simplify_med as geom0, \
    1 as count1, \
    (SELECT count(id) FROM sf_request_for_assistance rfa WHERE rfa.disaster__r_id = vw_sf_disaster.sf_id) as rfacount1, \
    gadm1.name_1 as name, \
    gadm1.guid, \
    gadm1.geom_simplify_med as geom1, \
    1 as count2, \
    (SELECT count(id) FROM sf_request_for_assistance rfa WHERE rfa.disaster__r_id = vw_sf_disaster.sf_id) as rfacount2, \
    gadm2.name_2 as name2, \
    gadm2.guid as guid2, \
    gadm2.geom_simplify_med as geom2, \
    0 as count3, \
    0 as rfacount3, \
    '' as name3, \
    null as guid3, \
    null::geometry as geom3, \
    0 as count4, \
    0 as rfacount4, \
    '' as name4, \
    null as guid4, \
    null::geometry as geom4, \
    0 as count5, \
    0 as rfacount5, \
    '' as name5, \
    null as guid5, \
    null::geometry as geom5, \
 \
    vw_sf_disaster.sf_id \
 \
FROM  gadm0, gadm1, gadm2, vw_sf_disaster \
WHERE gadm0.id_0 = gadm1.id_0 \
AND gadm1.id_1 = gadm2.id_1 \
AND gadm2.id_0 = gadm1.id_0 \
AND gadm2.guid::text = vw_sf_disaster.location__r_gis_geo_id__c); \
\
 \
INSERT INTO sf_aggregated_gadm_disaster_counts \
( SELECT 0 as countARC, \
0 as rfacountarc, \
    ''::character varying as nameARC, \
    0 as guidARC, \
    null::geometry as geomarc, \
    1 as count0, \
    (SELECT count(id) FROM sf_request_for_assistance rfa WHERE rfa.disaster__r_id = vw_sf_disaster.sf_id) as rfacount0, \
    gadm0.name_0 as name, \
    gadm0.guid, \
    gadm0.geom_simplify_med as geom0, \
    1 as count1, \
    (SELECT count(id) FROM sf_request_for_assistance rfa WHERE rfa.disaster__r_id = vw_sf_disaster.sf_id) as rfacount1, \
    gadm1.name_1 as name, \
    gadm1.guid, \
    gadm1.geom_simplify_med as geom1, \
    0 as count2, \
    0 as rfacount2, \
    '' as name2, \
    null as guid2, \
    null::geometry as geom2, \
    0 as count3, \
    0 as rfacount3, \
    '' as name3, \
    null as guid3, \
    null::geometry as geom3, \
    0 as count4, \
    0 as rfacount4, \
    '' as name4, \
    null as guid4, \
    null::geometry as geom4, \
    0 as count5, \
    0 as rfacount5, \
    '' as name5, \
    null as guid5, \
    null::geometry as geom5, \
 \
    vw_sf_disaster.sf_id \
 \
FROM  gadm1, gadm0, vw_sf_disaster \
WHERE gadm0.id_0 = gadm1.id_0 \
AND gadm1.guid::text = vw_sf_disaster.location__r_gis_geo_id__c); \
\
INSERT INTO sf_aggregated_gadm_disaster_counts \
( SELECT 0 as countARC, \
0 as rfacountarc, \
''::character varying as nameARC, \
0 as guidARC, \
null::geometry as geomarc, \
1 as count0, \
(SELECT count(id) FROM sf_request_for_assistance rfa WHERE rfa.disaster__r_id = vw_sf_disaster.sf_id) as rfacount0, \
gadm0.name_0 as name, \
gadm0.guid, \
gadm0.geom_simplify_med as geom0, \
0 as count1, \
0 as rfacount1, \
    '' as name1, \
null as guid1, \
null::geometry as geom1, \
0 as count2, \
0 as rfacount2, \
    '' as name2, \
null as guid2, \
null::geometry as geom2, \
0 as count3, \
0 as rfacount3, \
    '' as name3, \
null as guid3, \
null::geometry as geom3, \
0 as count4, \
0 as rfacount4, \
    '' as name4, \
null as guid4, \
null::geometry as geom4, \
0 as count5, \
0 as rfacount5, \
    '' as name5, \
null as guid5, \
null::geometry as geom5, \
\
vw_sf_disaster.sf_id \
\
FROM gadm0, vw_sf_disaster \
WHERE gadm0.guid::text = vw_sf_disaster.location__r_gis_geo_id__c \
AND location__r_gis_geo_id__c IS NOT NULL ); \
\
\
ALTER TABLE sf_aggregated_gadm_disaster_counts ADD COLUMN id SERIAL; \
\
\
UPDATE sf_aggregated_gadm_disaster_counts SET id = DEFAULT; \
\
\
ALTER TABLE sf_aggregated_gadm_disaster_counts ADD PRIMARY KEY (id); \
\
\
DROP INDEX IF EXISTS idx_vw_sf_disastercounts_id; \
CREATE INDEX idx_vw_sf_disastercounts_id ON sf_aggregated_gadm_disaster_counts USING btree (id); \
CREATE INDEX idx_vw_sf_disastercounts_guidarc ON sf_aggregated_gadm_disaster_counts USING btree (guidarc); \
CREATE INDEX idx_vw_sf_disastercounts_guid0 ON sf_aggregated_gadm_disaster_counts USING btree (guid0); \
CREATE INDEX idx_vw_sf_disastercounts_guid1 ON sf_aggregated_gadm_disaster_counts USING btree (guid1); \
CREATE INDEX idx_vw_sf_disastercounts_guid2 ON sf_aggregated_gadm_disaster_counts USING btree (guid2); \
CREATE INDEX idx_vw_sf_disastercounts_guid3 ON sf_aggregated_gadm_disaster_counts USING btree (guid3); \
CREATE INDEX idx_vw_sf_disastercounts_guid4 ON sf_aggregated_gadm_disaster_counts USING btree (guid4); \
CREATE INDEX idx_vw_sf_disastercounts_guid5 ON sf_aggregated_gadm_disaster_counts USING btree (guid5); \
CREATE INDEX idx_sf_agg_disaster_geom0 ON sf_aggregated_gadm_disaster_counts USING gist (geom0); \
\
UPDATE sf_aggregated_gadm_disaster_counts SET geom0 = ST_BUFFER(geom0, 0); \
\
\
UPDATE sf_aggregated_gadm_disaster_counts \
SET nameARC = a.region, countarc = count0, rfacountarc = rfacount0,  guidarc = a.gid, geomarc = a.geom \
FROM ARC_REGIONS_DISSOLVED a \
WHERE ST_INTERSECTS(a.geom, geom0);"

operations.AddIndicesForSFTables =
    "DROP INDEX IF EXISTS idx_sf_project_sector__c; CREATE INDEX idx_sf_project_sector__c ON sf_project USING btree (sector__c); \
    DROP INDEX IF EXISTS idx_sf_project_status__c; CREATE INDEX idx_sf_project_status__c ON sf_project USING btree (status__c); \
    DROP INDEX IF EXISTS idx_sf_project_stage_name__c; CREATE INDEX idx_sf_project_stage_name__c ON sf_project USING btree (stage_name__c); \
    DROP INDEX IF EXISTS idx_sf_project_start_date__c; CREATE INDEX idx_sf_project_start_date__c ON sf_project USING btree (start_date__c); \
    DROP INDEX IF EXISTS idx_sf_project_end_date__c; CREATE INDEX idx_sf_project_end_date__c ON sf_project USING btree (end_date__c); \
    DROP INDEX IF EXISTS idx_sf_project_sub_sector__c; CREATE INDEX idx_sf_project_sub_sector__c ON sf_project USING btree (sub_sector__c); \
    DROP INDEX IF EXISTS idx_sf_project_name; CREATE INDEX idx_sf_project_name ON sf_project USING btree (name); \
    DROP INDEX IF EXISTS idx_sf_project_summary__c; CREATE INDEX idx_sf_project_summary__c ON sf_project USING btree (summary__c); \
    DROP INDEX IF EXISTS idx_sf_project_total_budget__c; CREATE INDEX idx_sf_project_total_budget__c ON sf_project USING btree (total_budget__c); \
    DROP INDEX IF EXISTS idx_sf_project_sf_id; CREATE INDEX idx_sf_project_sf_id ON sf_project USING btree (sf_id);"

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

