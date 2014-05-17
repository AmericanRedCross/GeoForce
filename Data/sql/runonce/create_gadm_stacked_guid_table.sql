--15 mins
DROP TABLE IF EXISTS gadmrollup;
SELECT ''::character varying as nameARC, 0 as guidARC,
null::geometry as geomarc, gadm0.name_0 as name0, gadm0.guid as guid0, gadm0.geom_simplify_med as geom0,
gadm1.name_1 as name1, gadm1.guid as guid1, gadm1.geom_simplify_med as geom1,
gadm2.name_2 as name2, gadm2.guid as guid2, gadm2.geom_simplify_med as geom2,
gadm3.name_3 as name3, gadm3.guid as guid3, gadm3.geom_simplify_med as geom3,
gadm4.name_4 as name4, gadm4.guid as guid4, gadm4.geom_simplify_med as geom4,
gadm5.name_5 as name5, gadm5.guid as guid5, gadm5.geom_simplify_med as geom5

INTO gadmrollup
FROM gadm0
INNER JOIN gadm1
ON gadm0.id_0 = gadm1.id_0
INNER JOIN gadm2
ON gadm2.id_0 = gadm1.id_0 AND gadm2.id_1 = gadm1.id_1
LEFT OUTER JOIN gadm3
ON gadm3.id_0 = gadm2.id_0 AND gadm3.id_1 = gadm2.id_1 AND gadm3.id_2 = gadm2.id_2
LEFT OUTER JOIN gadm4
ON gadm4.id_0 = gadm3.id_0 AND gadm4.id_1 = gadm3.id_1 AND gadm4.id_2 = gadm3.id_2 AND gadm4.id_3 = gadm3.id_3
LEFT OUTER JOIN gadm5
ON gadm5.id_0 = gadm4.id_0 AND gadm5.id_1 = gadm4.id_1 AND gadm5.id_2 = gadm4.id_2 AND gadm5.id_3 = gadm4.id_3 AND gadm5.id_4 = gadm4.id_4;




CREATE INDEX ON gadmrollup (nameARC);
CREATE INDEX ON gadmrollup (name0);
CREATE INDEX ON gadmrollup (name1);
CREATE INDEX ON gadmrollup (name2);
CREATE INDEX ON gadmrollup (name3);
CREATE INDEX ON gadmrollup (name4);
CREATE INDEX ON gadmrollup (name5);
CREATE INDEX ON gadmrollup USING gist (geomARC);
CREATE INDEX ON gadmrollup USING gist (geom0);
CREATE INDEX ON gadmrollup USING gist (geom1);
CREATE INDEX ON gadmrollup USING gist (geom2);
CREATE INDEX ON gadmrollup USING gist (geom3);
CREATE INDEX ON gadmrollup USING gist (geom4);
CREATE INDEX ON gadmrollup USING gist (geom5);

--5 minutes
ALTER TABLE gadmrollup ADD COLUMN id SERIAL;
UPDATE gadmrollup SET id = DEFAULT;
ALTER TABLE gadmrollup ADD PRIMARY KEY (id);
CREATE INDEX idx_sf_gadmguids_id ON gadmrollup USING btree (id);
UPDATE gadmrollup SET geom0 = ST_BUFFER(geom0, 0);

--36 minutes
update gadmrollup
set nameARC = a.arcregion2, guidarc = a.gid, geomarc = a.geom
FROM ARC_REGIONS_DISSOLVED a
WHERE ST_INTERSECTS(a.geom, geom0);

select * from gadmrollup
LIMIT 100



