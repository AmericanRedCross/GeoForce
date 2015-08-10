CREATE OR REPLACE VIEW vw_sf_project AS select sf_project.*, sf_project_location.location__r_gis_geo_id__c as geo_id
FROM sf_project, sf_project_location
WHERE sf_project.sf_id = sf_project_location.project__r_id;
DROP TABLE IF EXISTS sf_aggregated_gadm_project_counts_many;

    SELECT  1 as countARC,
    (SELECT count(id) FROM sf_project_risk risk WHERE risk.project__c = vw_sf_project.sf_id) as riskcountarc,
    arc_regions_dissolved.name::character varying as nameARC,
    arc_regions_dissolved.gid as guidARC,
    arc_regions_dissolved.geom::geometry as geomarc,
    1 as count0,
    (SELECT count(id) FROM sf_project_risk risk WHERE risk.project__c = vw_sf_project.sf_id) as riskcount0,
    gadm0.name_0 as name0,
    gadm0.guid as guid0,
    gadm0.geom_simplify_med as geom0,
    1 as count1,
    (SELECT count(id) FROM sf_project_risk risk WHERE risk.project__c = vw_sf_project.sf_id) as riskcount1,
    gadm1.name_1 as name1, gadm1.guid as guid1,
    gadm1.geom_simplify_med as geom1,
    1 as count2,
    (SELECT count(id) FROM sf_project_risk risk WHERE risk.project__c = vw_sf_project.sf_id) as riskcount2,
    gadm2.name_2 as name2,
    gadm2.guid as guid2,
    gadm2.geom_simplify_med as geom2,
    1 as count3,
    (SELECT count(id) FROM sf_project_risk risk WHERE risk.project__c = vw_sf_project.sf_id) as riskcount3,
    gadm3.name_3 as name3,
    gadm3.guid as guid3,
    gadm3.geom_simplify_med as geom3,
    1 as count4,
    (SELECT count(id) FROM sf_project_risk risk WHERE risk.project__c = vw_sf_project.sf_id) as riskcount4,
    gadm4.name_4 as name4,
    gadm4.guid as guid4,
    gadm4.geom_simplify_med as geom4,
    1 as count5,
    (SELECT count(id) FROM sf_project_risk risk WHERE risk.project__c = vw_sf_project.sf_id) as riskcount5,
    gadm5.name_5 as name5,
    gadm5.guid as guid5,
    gadm5.geom_simplify_med as geom5,

    vw_sf_project.sector__c,
    vw_sf_project.status__c,
    vw_sf_project.stage_name__c,
    vw_sf_project.start_date__c,
    vw_sf_project.end_date__c,
    vw_sf_project.sub_sector__c,
    vw_sf_project.name,
    vw_sf_project.summary__c,
    vw_sf_project.total_budget__c,
    vw_sf_project.sf_id,
    vw_sf_project.overall_assessment__c,
    vw_sf_project.overall_status__c,
    vw_sf_project.phase__c,
    vw_sf_project.business_unit__c


    INTO    sf_aggregated_gadm_project_counts_many
    FROM    arc_regions_dissolved, gadm0, gadm1, gadm2, gadm3, gadm4, gadm5, vw_sf_project
    WHERE  arc_regions_dissolved.name = gadm0.arc_region
    AND gadm0.id_0 = gadm1.id_0
    AND gadm2.id_0 = gadm1.id_0
    AND gadm3.id_0 = gadm1.id_0
    AND gadm4.id_0 = gadm1.id_0
    AND gadm5.id_0 = gadm1.id_0
    AND gadm1.id_1 = gadm2.id_1
    AND gadm3.id_1 = gadm2.id_1
    AND gadm4.id_1 = gadm2.id_1
    AND gadm5.id_1 = gadm2.id_1
    AND gadm2.id_2 = gadm3.id_2
    AND gadm4.id_2 = gadm3.id_2
    AND gadm5.id_2 = gadm3.id_2
    AND gadm3.id_3 = gadm4.id_3
    AND gadm5.id_3 = gadm4.id_3
    AND gadm4.id_4 = gadm5.id_4
    AND gadm5.guid::text = geo_id
        --Ignore projects in sf_project where consolidated_record_type__c is 'Disaster Response'
        -- https://github.com/AmericanRedCross/GeoForce/issues/227
    AND consolidated_record_type__c != 'Disaster Response';


INSERT INTO sf_aggregated_gadm_project_counts_many
(       SELECT  1 as countARC,
        (SELECT count(id) FROM sf_project_risk risk WHERE risk.project__c = vw_sf_project.sf_id) as riskcountarc,
        arc_regions_dissolved.name::character varying as nameARC,
        arc_regions_dissolved.gid as guidARC,
        arc_regions_dissolved.geom::geometry as geomarc,
        1 as count0,
        (SELECT count(id) FROM sf_project_risk risk WHERE risk.project__c = vw_sf_project.sf_id) as riskcount0,
        gadm0.name_0 as name0,
        gadm0.guid as guid0,
        gadm0.geom_simplify_med as geom0,
        1 as count1,
        (SELECT count(id) FROM sf_project_risk risk WHERE risk.project__c = vw_sf_project.sf_id) as riskcount1,
        gadm1.name_1 as name1, gadm1.guid as guid1,
        gadm1.geom_simplify_med as geom1,
        1 as count2,
        (SELECT count(id) FROM sf_project_risk risk WHERE risk.project__c = vw_sf_project.sf_id) as riskcount2,
        gadm2.name_2 as name2,
        gadm2.guid as guid2,
        gadm2.geom_simplify_med as geom2,
        1 as count3,
        (SELECT count(id) FROM sf_project_risk risk WHERE risk.project__c = vw_sf_project.sf_id) as riskcount3,
        gadm3.name_3 as name3,
        gadm3.guid as guid3,
        gadm3.geom_simplify_med as geom3,
        1 as count4,
        (SELECT count(id) FROM sf_project_risk risk WHERE risk.project__c = vw_sf_project.sf_id) as riskcount4,
        gadm4.name_4 as name4,
        gadm4.guid as guid4,
        gadm4.geom_simplify_med as geom4,
        0 as count5,
        0 as riskcount5,
        '' as name5,
        null as guid5,
        null::geometry as geom5,

        vw_sf_project.sector__c,
        vw_sf_project.status__c,
        vw_sf_project.stage_name__c,
        vw_sf_project.start_date__c,
        vw_sf_project.end_date__c,
        vw_sf_project.sub_sector__c,
        vw_sf_project.name,
        vw_sf_project.summary__c,
        vw_sf_project.total_budget__c,
        vw_sf_project.sf_id,
        vw_sf_project.overall_assessment__c,
        vw_sf_project.overall_status__c,
        vw_sf_project.phase__c,
        vw_sf_project.business_unit__c

    FROM    arc_regions_dissolved, gadm0, gadm1, gadm2, gadm3, gadm4, vw_sf_project
    WHERE  arc_regions_dissolved.name = gadm0.arc_region
        AND gadm0.id_0 = gadm1.id_0
        AND gadm2.id_0 = gadm1.id_0
        AND gadm3.id_0 = gadm1.id_0
        AND gadm4.id_0 = gadm1.id_0
        AND gadm1.id_1 = gadm2.id_1
        AND gadm3.id_1 = gadm2.id_1
        AND gadm4.id_1 = gadm2.id_1
        AND gadm2.id_2 = gadm3.id_2
        AND gadm4.id_2 = gadm3.id_2
        AND gadm3.id_3 = gadm4.id_3
        AND gadm4.guid::text = geo_id
            --Ignore projects in sf_project where consolidated_record_type__c is 'Disaster Response'
            -- https://github.com/AmericanRedCross/GeoForce/issues/227
        AND consolidated_record_type__c != 'Disaster Response');


INSERT INTO sf_aggregated_gadm_project_counts_many
(
    SELECT  1 as countARC,
    (SELECT count(id) FROM sf_project_risk risk WHERE risk.project__c = vw_sf_project.sf_id) as riskcountarc,
    arc_regions_dissolved.name::character varying as nameARC,
    arc_regions_dissolved.gid as guidARC,
    arc_regions_dissolved.geom::geometry as geomarc,
    1 as count0,
    (SELECT count(id) FROM sf_project_risk risk WHERE risk.project__c = vw_sf_project.sf_id) as riskcount0,
    gadm0.name_0 as name0,
    gadm0.guid as guid0,
    gadm0.geom_simplify_med as geom0,
    1 as count1,
    (SELECT count(id) FROM sf_project_risk risk WHERE risk.project__c = vw_sf_project.sf_id) as riskcount1,
    gadm1.name_1 as name1, gadm1.guid as guid1,
    gadm1.geom_simplify_med as geom1,
    1 as count2,
    (SELECT count(id) FROM sf_project_risk risk WHERE risk.project__c = vw_sf_project.sf_id) as riskcount2,
    gadm2.name_2 as name2,
    gadm2.guid as guid2,
    gadm2.geom_simplify_med as geom2,
    1 as count3,
    (SELECT count(id) FROM sf_project_risk risk WHERE risk.project__c = vw_sf_project.sf_id) as riskcount3,
    gadm3.name_3 as name3,
    gadm3.guid as guid3,
    gadm3.geom_simplify_med as geom3,
    0 as count4,
    0 as riskcount4,
    '' as name4,
    null as guid4,
    null::geometry as geom4,
    0 as count5,
    0 as riskcount5,
    '' as name5,
    null as guid5,
    null::geometry as geom5,

    vw_sf_project.sector__c,
    vw_sf_project.status__c,
    vw_sf_project.stage_name__c,
    vw_sf_project.start_date__c,
    vw_sf_project.end_date__c,
    vw_sf_project.sub_sector__c,
    vw_sf_project.name,
    vw_sf_project.summary__c,
    vw_sf_project.total_budget__c,
    vw_sf_project.sf_id,
    vw_sf_project.overall_assessment__c,
    vw_sf_project.overall_status__c,
    vw_sf_project.phase__c,
    vw_sf_project.business_unit__c

    FROM    arc_regions_dissolved, gadm0, gadm1, gadm2, gadm3, vw_sf_project
    WHERE  arc_regions_dissolved.name = gadm0.arc_region
    AND gadm0.id_0 = gadm1.id_0
    AND gadm2.id_0 = gadm1.id_0
    AND gadm3.id_0 = gadm1.id_0
    AND gadm1.id_1 = gadm2.id_1
    AND gadm3.id_1 = gadm2.id_1
    AND gadm2.id_2 = gadm3.id_2
    AND gadm3.guid::text = geo_id
        --Ignore projects in sf_project where consolidated_record_type__c is 'Disaster Response'
        -- https://github.com/AmericanRedCross/GeoForce/issues/227
    AND consolidated_record_type__c != 'Disaster Response');

INSERT INTO sf_aggregated_gadm_project_counts_many
(
    SELECT  1 as countARC,
    (SELECT count(id) FROM sf_project_risk risk WHERE risk.project__c = vw_sf_project.sf_id) as riskcountarc,
    arc_regions_dissolved.name::character varying as nameARC,
    arc_regions_dissolved.gid as guidARC,
    arc_regions_dissolved.geom::geometry as geomarc,
    1 as count0,
    (SELECT count(id) FROM sf_project_risk risk WHERE risk.project__c = vw_sf_project.sf_id) as riskcount0,
    gadm0.name_0 as name,
    gadm0.guid,
    gadm0.geom_simplify_med as geom0,
    1 as count1,
    (SELECT count(id) FROM sf_project_risk risk WHERE risk.project__c = vw_sf_project.sf_id) as riskcount1,
    gadm1.name_1 as name,
    gadm1.guid,
    gadm1.geom_simplify_med as geom1,
    1 as count2,
    (SELECT count(id) FROM sf_project_risk risk WHERE risk.project__c = vw_sf_project.sf_id) as riskcount2,
    gadm2.name_2 as name2,
    gadm2.guid as guid2,
    gadm2.geom_simplify_med as geom2,
    0 as count3,
    0 as riskcount3,
    '' as name3,
    null as guid3,
    null::geometry as geom3,
    0 as count4,
    0 as riskcount4,
    '' as name4,
    null as guid4,
    null::geometry as geom4,
    0 as count5,
    0 as riskcount5,
    '' as name5,
    null as guid5,
    null::geometry as geom5,

    vw_sf_project.sector__c,
    vw_sf_project.status__c,
    vw_sf_project.stage_name__c,
    vw_sf_project.start_date__c,
    vw_sf_project.end_date__c,
    vw_sf_project.sub_sector__c,
    vw_sf_project.name,
    vw_sf_project.summary__c,
    vw_sf_project.total_budget__c,
    vw_sf_project.sf_id,
    vw_sf_project.overall_assessment__c,
    vw_sf_project.overall_status__c,
    vw_sf_project.phase__c,
    vw_sf_project.business_unit__c

    FROM    arc_regions_dissolved, gadm0, gadm1, gadm2, vw_sf_project
    WHERE  arc_regions_dissolved.name = gadm0.arc_region
    AND gadm0.id_0 = gadm1.id_0
    AND gadm1.id_1 = gadm2.id_1
    AND gadm2.id_0 = gadm1.id_0
    AND gadm2.guid::text = geo_id
    --Ignore projects in sf_project where consolidated_record_type__c is 'Disaster Response'
    -- https://github.com/AmericanRedCross/GeoForce/issues/227
    AND consolidated_record_type__c != 'Disaster Response');


INSERT INTO sf_aggregated_gadm_project_counts_many
(
    SELECT  1 as countARC,
    (SELECT count(id) FROM sf_project_risk risk WHERE risk.project__c = vw_sf_project.sf_id) as riskcountarc,
    arc_regions_dissolved.name::character varying as nameARC,
    arc_regions_dissolved.gid as guidARC,
    arc_regions_dissolved.geom::geometry as geomarc,
    1 as count0,
    (SELECT count(id) FROM sf_project_risk risk WHERE risk.project__c = vw_sf_project.sf_id) as riskcount0,
    gadm0.name_0 as name,
    gadm0.guid,
    gadm0.geom_simplify_med as geom0,
    1 as count1,
    (SELECT count(id) FROM sf_project_risk risk WHERE risk.project__c = vw_sf_project.sf_id) as riskcount1,
    gadm1.name_1 as name,
    gadm1.guid,
    gadm1.geom_simplify_med as geom1,
    0 as count2,
    0 as rfacount2,
    '' as name2,
    null as guid2,
    null::geometry as geom2,
    0 as count3,
    0 as rfacount3,
    '' as name3,
    null as guid3,
    null::geometry as geom3,
    0 as count4,
    0 as rfacount4,
    '' as name4,
    null as guid4,
    null::geometry as geom4,
    0 as count5,
    0 as rfacount5,
    '' as name5,
    null as guid5,
    null::geometry as geom5,

    vw_sf_project.sector__c,
    vw_sf_project.status__c,
    vw_sf_project.stage_name__c,
    vw_sf_project.start_date__c,
    vw_sf_project.end_date__c,
    vw_sf_project.sub_sector__c,
    vw_sf_project.name,
    vw_sf_project.summary__c,
    vw_sf_project.total_budget__c,
    vw_sf_project.sf_id,
    vw_sf_project.overall_assessment__c,
    vw_sf_project.overall_status__c,
    vw_sf_project.phase__c,
    vw_sf_project.business_unit__c

    FROM    arc_regions_dissolved, gadm0, gadm1, vw_sf_project
    WHERE  arc_regions_dissolved.name = gadm0.arc_region
    AND gadm0.id_0 = gadm1.id_0
    AND gadm1.guid::text = geo_id
    --Ignore projects in sf_project where consolidated_record_type__c is 'Disaster Response'
    -- https://github.com/AmericanRedCross/GeoForce/issues/227
    AND consolidated_record_type__c != 'Disaster Response');

INSERT INTO sf_aggregated_gadm_project_counts_many
(
    SELECT  1 as countARC,
    (SELECT count(id) FROM sf_project_risk risk WHERE risk.project__c = vw_sf_project.sf_id) as riskcountarc,
    arc_regions_dissolved.name::character varying as nameARC,
    arc_regions_dissolved.gid as guidARC,
    arc_regions_dissolved.geom::geometry as geomarc,
    1 as count0,
    (SELECT count(id) FROM sf_project_risk risk WHERE risk.project__c = vw_sf_project.sf_id) as riskcount0,
    gadm0.name_0 as name,
    gadm0.guid,
    gadm0.geom_simplify_med as geom0,
    0 as count1,
    0 as rfacount1,
        '' as name1,
    null as guid1,
    null::geometry as geom1,
    0 as count2,
    0 as rfacount2,
        '' as name2,
    null as guid2,
    null::geometry as geom2,
    0 as count3,
    0 as rfacount3,
        '' as name3,
    null as guid3,
    null::geometry as geom3,
    0 as count4,
    0 as rfacount4,
        '' as name4,
    null as guid4,
    null::geometry as geom4,
    0 as count5,
    0 as rfacount5,
        '' as name5,
    null as guid5,
    null::geometry as geom5,

    vw_sf_project.sector__c,
    vw_sf_project.status__c,
    vw_sf_project.stage_name__c,
    vw_sf_project.start_date__c,
    vw_sf_project.end_date__c,
    vw_sf_project.sub_sector__c,
    vw_sf_project.name,
    vw_sf_project.summary__c,
    vw_sf_project.total_budget__c,
    vw_sf_project.sf_id,
    vw_sf_project.overall_assessment__c,
    vw_sf_project.overall_status__c,
    vw_sf_project.phase__c,
    vw_sf_project.business_unit__c

FROM arc_regions_dissolved, gadm0, vw_sf_project
WHERE arc_regions_dissolved.name = gadm0.arc_region
AND gadm0.guid::text = geo_id AND geo_id IS NOT NULL
    --Ignore projects in sf_project where consolidated_record_type__c is 'Disaster Response'
    -- https://github.com/AmericanRedCross/GeoForce/issues/227
AND consolidated_record_type__c != 'Disaster Response');




INSERT INTO sf_aggregated_gadm_project_counts_many
(
    SELECT  1 as countARC,
    (SELECT count(id) FROM sf_project_risk risk WHERE risk.project__c = vw_sf_project.sf_id) as riskcountarc,
    arc_regions_dissolved.name::character varying as nameARC,
    arc_regions_dissolved.gid as guidARC,
    arc_regions_dissolved.geom::geometry as geomarc,
    0 as count0,
    0 as riskcount0,
    '' as name0,
    null as guid0,
    null as geom0,
    0 as count1,
    0 as rfacount1,
        '' as name1,
    null as guid1,
    null::geometry as geom1,
    0 as count2,
    0 as rfacount2,
        '' as name2,
    null as guid2,
    null::geometry as geom2,
    0 as count3,
    0 as rfacount3,
        '' as name3,
    null as guid3,
    null::geometry as geom3,
    0 as count4,
    0 as rfacount4,
        '' as name4,
    null as guid4,
    null::geometry as geom4,
    0 as count5,
    0 as rfacount5,
        '' as name5,
    null as guid5,
    null::geometry as geom5,

    vw_sf_project.sector__c,
    vw_sf_project.status__c,
    vw_sf_project.stage_name__c,
    vw_sf_project.start_date__c,
    vw_sf_project.end_date__c,
    vw_sf_project.sub_sector__c,
    vw_sf_project.name,
    vw_sf_project.summary__c,
    vw_sf_project.total_budget__c,
    vw_sf_project.sf_id,
    vw_sf_project.overall_assessment__c,
    vw_sf_project.overall_status__c,
    vw_sf_project.phase__c,
    vw_sf_project.business_unit__c

FROM arc_regions_dissolved, vw_sf_project
WHERE arc_regions_dissolved.guid::text = geo_id AND geo_id IS NOT NULL
    --Ignore projects in sf_project where consolidated_record_type__c is 'Disaster Response'
    -- https://github.com/AmericanRedCross/GeoForce/issues/227
AND consolidated_record_type__c != 'Disaster Response');







ALTER TABLE sf_aggregated_gadm_project_counts_many ADD COLUMN id SERIAL;
UPDATE sf_aggregated_gadm_project_counts_many SET id = DEFAULT;
ALTER TABLE sf_aggregated_gadm_project_counts_many ADD PRIMARY KEY (id);


DROP INDEX IF EXISTS idx_sf_aggregated_gadm_project_counts_many_id;
CREATE INDEX idx_sf_aggregated_gadm_project_counts_many_id ON sf_aggregated_gadm_project_counts_many USING btree (id);
CREATE INDEX idx_sf_aggregated_gadm_project_counts_many_guidarc ON sf_aggregated_gadm_project_counts_many USING btree (guidarc);
CREATE INDEX idx_sf_aggregated_gadm_project_counts_many_guid0 ON sf_aggregated_gadm_project_counts_many USING btree (guid0);
CREATE INDEX idx_sf_aggregated_gadm_project_counts_many_guid1 ON sf_aggregated_gadm_project_counts_many USING btree (guid1);
CREATE INDEX idx_sf_aggregated_gadm_project_counts_many_guid2 ON sf_aggregated_gadm_project_counts_many USING btree (guid2);
CREATE INDEX idx_sf_aggregated_gadm_project_counts_many_guid3 ON sf_aggregated_gadm_project_counts_many USING btree (guid3);
CREATE INDEX idx_sf_aggregated_gadm_project_counts_many_guid4 ON sf_aggregated_gadm_project_counts_many USING btree (guid4);
CREATE INDEX idx_sf_aggregated_gadm_project_counts_many_guid5 ON sf_aggregated_gadm_project_counts_many USING btree (guid5);
CREATE INDEX idx_sf_aggregated_gadm_project_counts_many_geom0 ON sf_aggregated_gadm_project_counts_many USING gist (geom0);

UPDATE sf_aggregated_gadm_project_counts_many SET geom0 = ST_BUFFER(geom0, 0);

