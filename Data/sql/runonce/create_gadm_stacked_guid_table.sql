DROP TABLE IF EXISTS sf_gadm_guids; 
SELECT ''::character varying as nameARC, 0 as guidARC, null::geometry as geomarc, gadm0.name_0 as name0, gadm0.guid as guid0, gadm0.geom_simplify_med as geom0, gadm1.name_1 as name1, gadm1.guid as guid1, gadm1.geom_simplify_med as geom1, gadm2.name_2 as name2, gadm2.guid as guid2, gadm2.geom_simplify_med as geom2
INTO sf_gadm_guids 
FROM gadm0,gadm1,gadm2
WHERE   gadm0.id_0 = gadm1.id_0 AND gadm1.id_1 = gadm2.id_1 AND gadm2.id_0 = gadm1.id_0;

INSERT INTO sf_gadm_guids( 
SELECT ''::character varying as nameARC, 0 as guidARC, null::geometry as geomarc, gadm0.name_0 as name, gadm0.guid, gadm0.geom_simplify_med as geom0, gadm1.name_1 as name, gadm1.guid, gadm1.geom_simplify_med as geom1, '' as name2, null as guid2, null::geometry as geom2  
FROM gadm1, gadm0
WHERE gadm0.id_0 = gadm1.id_0);

INSERT INTO sf_gadm_guids(
SELECT ''::character varying as nameARC, 0 as guidARC, null::geometry as geomarc, gadm0.name_0, gadm0.guid, gadm0.geom_simplify_med as geom0,  '' as name1, null as guid1, null::geometry as geom1, '' as name2, null as guid2, null::geometry as geom2  
FROM gadm0);

--There are no ARCRegions tied to projects in ECOS.  This is just theoretical
--INSERT INTO sf_aggregated_gadm_projects_counts(
--SELECT  a.arcregion2 as nameARC, a.gid as guidARC, a.geom as geomARC, 0 as count0, '' as name0, null::geometry as geom0,  0 as count1, '' as name1, null as guid1, null::geometry as geom1, 0 as count2, '' as name2, null as guid2, null::geometry as geom2  
--FROM ARC_REGIONS_DISSOLVED a, vw_sf_all_projects 
--WHERE a.gid::character varying = vw_sf_all_projects.stack_guid::character varying 
--GROUP BY a.gid, a.arcregion2, a.geom);
--End Theoretical section

ALTER TABLE sf_gadm_guids ADD COLUMN id SERIAL;
UPDATE sf_gadm_guids SET id = DEFAULT;
ALTER TABLE sf_gadm_guids ADD PRIMARY KEY (id);
CREATE INDEX idx_sf_gadmguids_id ON sf_gadm_guids USING btree (id);
UPDATE sf_gadm_guids SET geom0 = ST_BUFFER(geom0, 0);

update sf_gadm_guids
set nameARC = a.arcregion2, countarc = count0, guidarc = a.gid, geomarc = a.geom
FROM ARC_REGIONS_DISSOLVED a
WHERE ST_INTERSECTS(a.geom, geom0);

select * from sf_gadm_guids
LIMIT 1000
