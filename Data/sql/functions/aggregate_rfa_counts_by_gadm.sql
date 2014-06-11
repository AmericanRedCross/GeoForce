CREATE VIEW vw_sf_disaster AS select sf_disaster.*, sf_disaster_location.location__r_gis_geo_id__c \
    FROM sf_disaster, sf_disaster_location \
    WHERE sf_disaster.sf_id = sf_disaster_location.disaster__r_id; \
    DROP TABLE IF EXISTS sf_aggregated_gadm_disaster_counts; \
    \
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
    AND   gadm5.guid::text = vw_sf_disaster.location__r_gis_geo_id__c;  \
      \
      \
    INSERT INTO sf_aggregated_gadm_disaster_counts  \
    (     SELECT  0 as countARC,
              ''::character varying as nameARC,
              0 as guidARC,
              null::geometry as geomarc,
              1 as count0,
              (SELECT count(id) FROM sf_request_for_assistance rfa WHERE rfa.disaster__r_id = vw_sf_disaster.sf_id) as rfacount0,
              gadm0.name_0 as name0,
              gadm0.guid as guid0,
              gadm0.geom_simplify_med as geom0,
              1 as count1,
              (SELECT count(id) FROM sf_request_for_assistance rfa WHERE rfa.disaster__r_id = vw_sf_disaster.sf_id) as rfacount1,
              gadm1.name_1 as name1, gadm1.guid as guid1,
              gadm1.geom_simplify_med as geom1,
              1 as count2,
              (SELECT count(id) FROM sf_request_for_assistance rfa WHERE rfa.disaster__r_id = vw_sf_disaster.sf_id) as rfacount2,
              gadm2.name_2 as name2,
              gadm2.guid as guid2,
              gadm2.geom_simplify_med as geom2,
              1 as count3,
              (SELECT count(id) FROM sf_request_for_assistance rfa WHERE rfa.disaster__r_id = vw_sf_disaster.sf_id) as rfacount3,
              gadm3.name_3 as name3,
              gadm3.guid as guid3,
              gadm3.geom_simplify_med as geom3,
              1 as count4,
              (SELECT count(id) FROM sf_request_for_assistance rfa WHERE rfa.disaster__r_id = vw_sf_disaster.sf_id) as rfacount4,
              gadm4.name_4 as name4,
              gadm4.guid as guid4,
              gadm4.geom_simplify_med as geom4,
              0 as count5,
              '' as name5,
              null as guid5,
              null::geometry as geom5,


              vw_sf_disaster.sf_id

          FROM    gadm0, gadm1, gadm2, gadm3, gadm4, vw_sf_disaster
          WHERE   gadm0.id_0 = gadm1.id_0
          AND   gadm2.id_0 = gadm1.id_0
          AND   gadm3.id_0 = gadm1.id_0
          AND   gadm4.id_0 = gadm1.id_0
          AND   gadm1.id_1 = gadm2.id_1
          AND   gadm3.id_1 = gadm2.id_1
          AND   gadm4.id_1 = gadm2.id_1
          AND   gadm2.id_2 = gadm3.id_2
          AND   gadm4.id_2 = gadm3.id_2
          AND   gadm3.id_3 = gadm4.id_3
          AND   gadm4.guid::text = vw_sf_disaster.location__r_gis_geo_id__c); \
    \
    \
    INSERT INTO sf_aggregated_gadm_disaster_counts \
    (   SELECT  0 as countARC,
              ''::character varying as nameARC,
              0 as guidARC,
              null::geometry as geomarc,
              1 as count0,
              (SELECT count(id) FROM sf_request_for_assistance rfa WHERE rfa.disaster__r_id = vw_sf_disaster.sf_id) as rfacount0,
              gadm0.name_0 as name0,
              gadm0.guid as guid0,
              gadm0.geom_simplify_med as geom0,
              1 as count1,
              (SELECT count(id) FROM sf_request_for_assistance rfa WHERE rfa.disaster__r_id = vw_sf_disaster.sf_id) as rfacount1,
              gadm1.name_1 as name1, gadm1.guid as guid1,
              gadm1.geom_simplify_med as geom1,
              1 as count2,
              (SELECT count(id) FROM sf_request_for_assistance rfa WHERE rfa.disaster__r_id = vw_sf_disaster.sf_id) as rfacount2,
              gadm2.name_2 as name2,
              gadm2.guid as guid2,
              gadm2.geom_simplify_med as geom2,
              1 as count3,
              (SELECT count(id) FROM sf_request_for_assistance rfa WHERE rfa.disaster__r_id = vw_sf_disaster.sf_id) as rfacount3,
              gadm3.name_3 as name3,
              gadm3.guid as guid3,
              gadm3.geom_simplify_med as geom3,
              0 as count4,
              '' as name4,
              null as guid4,
              null::geometry as geom4,
              0 as count5,
              '' as name5,
              null as guid5,
              null::geometry as geom5,

              vw_sf_disaster.sf_id

          FROM    gadm0, gadm1, gadm2, gadm3, vw_sf_disaster
          WHERE   gadm0.id_0 = gadm1.id_0
          AND   gadm2.id_0 = gadm1.id_0
          AND   gadm3.id_0 = gadm1.id_0
          AND   gadm1.id_1 = gadm2.id_1
          AND   gadm3.id_1 = gadm2.id_1
          AND   gadm2.id_2 = gadm3.id_2
          AND   gadm3.guid::text = vw_sf_disaster.location__r_gis_geo_id__c); \
    \
    --Level 3
    INSERT INTO sf_aggregated_gadm_disaster_counts \
    ( SELECT 0 as countARC,
              ''::character varying as nameARC,
              0 as guidARC,
              null::geometry as geomarc,
              1 as count0,
              (SELECT count(id) FROM sf_request_for_assistance rfa WHERE rfa.disaster__r_id = vw_sf_disaster.sf_id) as rfacount0,
              gadm0.name_0 as name,
              gadm0.guid,
              gadm0.geom_simplify_med as geom0,
              1 as count1,
              (SELECT count(id) FROM sf_request_for_assistance rfa WHERE rfa.disaster__r_id = vw_sf_disaster.sf_id) as rfacount1,
              gadm1.name_1 as name,
              gadm1.guid,
              gadm1.geom_simplify_med as geom1,
              1 as count2,
              (SELECT count(id) FROM sf_request_for_assistance rfa WHERE rfa.disaster__r_id = vw_sf_disaster.sf_id) as rfacount2,
              gadm2.name_2 as name2,
              gadm2.guid as guid2,
              gadm2.geom_simplify_med as geom2,
              0 as count3,
              '' as name3,
              null as guid3,
              null::geometry as geom3,
              0 as count4,
              '' as name4,
              null as guid4,
              null::geometry as geom4,
              0 as count5,
              '' as name5,
              null as guid5,
              null::geometry as geom5,

              vw_sf_disaster.sf_id

          FROM  gadm0, gadm1, gadm2, vw_sf_disaster
          WHERE gadm0.id_0 = gadm1.id_0
          AND gadm1.id_1 = gadm2.id_1
          AND gadm2.id_0 = gadm1.id_0
          AND gadm2.guid::text = vw_sf_disaster.location__r_gis_geo_id__c); \
    \

    --Level 1
    INSERT INTO sf_aggregated_gadm_disaster_counts \
    ( SELECT 0 as countARC,
              ''::character varying as nameARC,
              0 as guidARC,
              null::geometry as geomarc,
              1 as count0,
              (SELECT count(id) FROM sf_request_for_assistance rfa WHERE rfa.disaster__r_id = vw_sf_disaster.sf_id) as rfacount0,
              gadm0.name_0 as name,
              gadm0.guid,
              gadm0.geom_simplify_med as geom0,
              1 as count1,
              (SELECT count(id) FROM sf_request_for_assistance rfa WHERE rfa.disaster__r_id = vw_sf_disaster.sf_id) as rfacount1,
              gadm1.name_1 as name,
              gadm1.guid,
              gadm1.geom_simplify_med as geom1,
              0 as count2,
              '' as name2,
              null as guid2,
              null::geometry as geom2,
              0 as count3,
              '' as name3,
              null as guid3,
              null::geometry as geom3,
              0 as count4,
              '' as name4,
              null as guid4,
              null::geometry as geom4,
              0 as count5,
              '' as name5,
              null as guid5,
              null::geometry as geom5,

              vw_sf_disaster.sf_id

          FROM  gadm1, gadm0, vw_sf_disaster
          WHERE gadm0.id_0 = gadm1.id_0
          AND gadm1.guid::text = vw_sf_disaster.location__r_gis_geo_id__c); \
    \
    --Level 0
    INSERT INTO sf_aggregated_gadm_disaster_counts \
    ( SELECT 0 as countARC, \
        ''::character varying as nameARC, \
        0 as guidARC, \
        null::geometry as geomarc, \
        1 as count0, \
        (SELECT count(id) FROM sf_request_for_assistance rfa WHERE rfa.disaster__r_id = vw_sf_disaster.sf_id) as rfacount0, \
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
    \
    \
    UPDATE sf_aggregated_gadm_disaster_counts SET geom0 = ST_BUFFER(geom0, 0); \
    \
    \
    UPDATE sf_aggregated_gadm_disaster_counts \
    SET nameARC = a.region, countarc = count0, guidarc = a.gid, geomarc = a.geom \
    FROM ARC_REGIONS_DISSOLVED a \
    WHERE ST_INTERSECTS(a.geom, geom0);