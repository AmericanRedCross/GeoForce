-- creating indices
CREATE INDEX ON gadm0_2014 (name_0);
CREATE INDEX ON gadm0_2014 (id_0);
CREATE INDEX ON gadm0_2014 USING gist (geom);

CREATE INDEX ON gadm1_2014 (name_1);
CREATE INDEX ON gadm1_2014 (id_0);
CREATE INDEX ON gadm1_2014 (id_1);
CREATE INDEX ON gadm1_2014 USING gist (geom);

CREATE INDEX ON gadm2_2014 (name_2);
CREATE INDEX ON gadm2_2014 (id_0);
CREATE INDEX ON gadm2_2014 (id_1);
CREATE INDEX ON gadm2_2014 (id_2);
CREATE INDEX ON gadm2_2014 USING gist (geom);

CREATE INDEX ON gadm3_2014 (name_3);
CREATE INDEX ON gadm3_2014 (id_0);
CREATE INDEX ON gadm3_2014 (id_1);
CREATE INDEX ON gadm3_2014 (id_2);
CREATE INDEX ON gadm3_2014 (id_3);
CREATE INDEX ON gadm3_2014 USING gist (geom);

CREATE INDEX ON gadm4_2014 (name_4);
CREATE INDEX ON gadm4_2014 (id_0);
CREATE INDEX ON gadm4_2014 (id_1);
CREATE INDEX ON gadm4_2014 (id_2);
CREATE INDEX ON gadm4_2014 (id_3);
CREATE INDEX ON gadm4_2014 (id_4);
CREATE INDEX ON gadm4_2014 USING gist (geom);

CREATE INDEX ON gadm5_2014 (name_5);
CREATE INDEX ON gadm5_2014 (id_0);
CREATE INDEX ON gadm5_2014 (id_1);
CREATE INDEX ON gadm5_2014 (id_2);
CREATE INDEX ON gadm5_2014 (id_3);
CREATE INDEX ON gadm5_2014 (id_4);
CREATE INDEX ON gadm5_2014 (id_5);
CREATE INDEX ON gadm5_2014 USING gist (geom);


-- Migrate create guids for all of the columns.
-- Then migrate over the guid from the older gadm
-- when the name matches...
ALTER TABLE gadm0_2014
ADD COLUMN guid uuid DEFAULT uuid_generate_v4();

UPDATE gadm0_2014
SET guid = gadm0.guid
FROM gadm0
WHERE gadm0_2014.name_0 = gadm0.name_0;

CREATE INDEX ON gadm0_2014 (guid);


ALTER TABLE gadm1_2014
ADD COLUMN guid uuid DEFAULT uuid_generate_v4();

UPDATE gadm1_2014
SET guid = gadm1.guid
FROM gadm1
WHERE gadm1_2014.name_1 = gadm1.name_1;

CREATE INDEX ON gadm1_2014 (guid);


ALTER TABLE gadm2_2014
ADD COLUMN guid uuid DEFAULT uuid_generate_v4();

UPDATE gadm2_2014
SET guid = gadm2.guid
FROM gadm2
WHERE gadm2_2014.name_2 = gadm2.name_2;

CREATE INDEX ON gadm2_2014 (guid);


ALTER TABLE gadm3_2014
ADD COLUMN guid uuid DEFAULT uuid_generate_v4();

UPDATE gadm3_2014
SET guid = gadm3.guid
FROM gadm3
WHERE gadm3_2014.name_3 = gadm3.name_3;

CREATE INDEX ON gadm3_2014 (guid);


ALTER TABLE gadm4_2014
ADD COLUMN guid uuid DEFAULT uuid_generate_v4();

UPDATE gadm4_2014
SET guid = gadm4.guid
FROM gadm4
WHERE gadm4_2014.name_4 = gadm4.name_4;

CREATE INDEX ON gadm4_2014 (guid);


ALTER TABLE gadm5_2014
ADD COLUMN guid uuid DEFAULT uuid_generate_v4();

UPDATE gadm5_2014
SET guid = gadm5.guid
FROM gadm5
WHERE gadm5_2014.name_5 = gadm5.name_5;

CREATE INDEX ON gadm5_2014 (guid);






-- NH GHETTO SIMPLIFY STUFF
ALTER TABLE gadm0_2014 ADD COLUMN geom_simplify_med geometry;
ALTER TABLE gadm1_2014 ADD COLUMN geom_simplify_med geometry;
ALTER TABLE gadm2_2014 ADD COLUMN geom_simplify_med geometry;
ALTER TABLE gadm3_2014 ADD COLUMN geom_simplify_med geometry;
ALTER TABLE gadm4_2014 ADD COLUMN geom_simplify_med geometry;
ALTER TABLE gadm5_2014 ADD COLUMN geom_simplify_med geometry;

update arc_regions_dissolved
set geom = ST_Simplify(geom, 0.1);

update gadm0_2014
set geom_simplify_med = ST_Simplify(geom, 0.06);

update gadm1_2014
set geom_simplify_med = ST_SimplifyPreserveTopology(geom, 0.01);

update gadm2_2014
set geom_simplify_med = geom;

update gadm3_2014
set geom_simplify_med = geom;

update gadm4_2014
set geom_simplify_med = geom;

update gadm5_2014
set geom_simplify_med = geom;


--The above causes self-intersection errors (run this to see them)
--SELECT ST_IsValidReason(geom_simplify_med) from gadm0

--Run this to fix them
UPDATE arc_regions_dissolved set geom = st_buffer(geom,0);
UPDATE gadm0_2014 set geom_simplify_med = st_buffer(geom_simplify_med,0);
UPDATE gadm1_2014 set geom_simplify_med = st_buffer(geom_simplify_med,0);
UPDATE gadm2_2014 set geom_simplify_med = st_buffer(geom_simplify_med,0);
UPDATE gadm3_2014 set geom_simplify_med = st_buffer(geom_simplify_med,0);
UPDATE gadm4_2014 set geom_simplify_med = st_buffer(geom_simplify_med,0);
UPDATE gadm5_2014 set geom_simplify_med = st_buffer(geom_simplify_med,0);

--select st_astext(geom_simplify_med) from gadm0
select * from UpdateGeometrySRID('arc_regions_dissolved', 'geom', 4326);
select * from UpdateGeometrySRID('gadm0_2014', 'geom_simplify_med', 4326);
select * from UpdateGeometrySRID('gadm1_2014', 'geom_simplify_med', 4326);
select * from UpdateGeometrySRID('gadm2_2014', 'geom_simplify_med', 4326);
select * from UpdateGeometrySRID('gadm3_2014', 'geom_simplify_med', 4326);
select * from UpdateGeometrySRID('gadm4_2014', 'geom_simplify_med', 4326);
select * from UpdateGeometrySRID('gadm5_2014', 'geom_simplify_med', 4326);

-- NH THESE ARE NOT WORKING!!!
--Since we've smoothed away 34 islands for level 0 in the process, add them back in
--update gadm0_2014 set geom_simplify_med = geom
--where guid NOT IN (
--	select guid from udf_getidsbyextent(null, 'POLYGON((-180 -90, -180 90, 180 90, 180 -90, -180 -90))')
--	);

--need to do this for other levels as well.
--update gadm1_2014 set geom_simplify_med = geom
--where guid NOT IN (
--	select guid from udf_getidsbyextent(null, 'POLYGON((-180 -90, -180 90, 180 90, 180 -90, -180 -90))')
--	);







-- make new text_search table
CREATE TABLE text_search_2014
(
  id serial NOT NULL,
  name character varying,
  level character varying,
  source character varying,
  country character varying,
  year integer,
  last_updated timestamp without time zone DEFAULT ('now'::text)::date,
  geom geometry,
  fullname character varying,
  stack_guid uuid,
  feature_guid uuid
);
ALTER TABLE text_search_2014 ADD PRIMARY KEY (id);


INSERT INTO text_search_2014 (name, level, source, country, year, stack_guid, feature_guid, geom, fullname)
    (SELECT name_0,
            '0',
            'GADM',
            name_0,
            year,
            guid,
            guid,
            geom,
            name_0
    FROM gadm0_2014);

INSERT INTO text_search_2014 (name, level, source, country, year, stack_guid, feature_guid, geom, fullname)
    (SELECT name_1,
            '1',
            'GADM',
            name_0,
            year,
            guid,
            guid,
            geom,
            name_1 || ', ' || name_0
    FROM gadm1_2014);

INSERT INTO text_search_2014 (name, level, source, country, year, stack_guid, feature_guid, geom, fullname)
    (SELECT name_2,
            '2',
            'GADM',
            name_0,
            year,
            guid,
            guid,
            geom,
            name_2 || ', ' || name_1 || ', ' || name_0
    FROM gadm2_2014);

INSERT INTO text_search_2014 (name, level, source, country, year, stack_guid, feature_guid, geom, fullname)
    (SELECT name_3,
            '3',
            'GADM',
            name_0,
            year,
            guid,
            guid,
            geom,
            name_3 || ', ' || name_2 || ', ' || name_1 || ', ' || name_0
    FROM gadm3_2014);

INSERT INTO text_search_2014 (name, level, source, country, year, stack_guid, feature_guid, geom, fullname)
    (SELECT name_4,
            '4',
            'GADM',
            name_0,
            year,
            guid,
            guid,
            geom,
            name_4 || ', ' || name_3 || ', ' || name_2 || ', ' || name_1 || ', ' || name_0
    FROM gadm4_2014);

INSERT INTO text_search_2014 (name, level, source, country, year, stack_guid, feature_guid, geom, fullname)
    (SELECT name_5,
            '5',
            'GADM',
            name_0,
            year,
            guid,
            guid,
            geom,
            name_5 || ', ' || name_4 || ', ' || name_3 || ', ' || name_2 || ', ' || name_1 || ', ' || name_0
    FROM gadm5_2014);

CREATE INDEX ON text_search_2014 (name);
CREATE INDEX ON text_search_2014 (level);
CREATE INDEX ON text_search_2014 (source);
CREATE INDEX ON text_search_2014 (country);
CREATE INDEX ON text_search_2014 (year);
CREATE INDEX ON text_search_2014 (stack_guid);
CREATE INDEX ON text_search_2014 (feature_guid);
CREATE INDEX ON text_search_2014 (fullname);
CREATE INDEX ON text_search_2014 USING gist (geom);


--OK! We have everything remade for 2014. Now time to rename the tables accordingly so everything "just works".

ALTER TABLE gadm0 RENAME TO gadm0_2012;
ALTER TABLE gadm1 RENAME TO gadm1_2012;
ALTER TABLE gadm2 RENAME TO gadm2_2012;
ALTER TABLE gadm3 RENAME TO gadm3_2012;
ALTER TABLE gadm4 RENAME TO gadm4_2012;
ALTER TABLE gadm5 RENAME TO gadm5_2012;
ALTER TABLE text_search RENAME TO text_search_2012;

ALTER TABLE gadm0_2014 RENAME TO gadm0;
ALTER TABLE gadm1_2014 RENAME TO gadm1;
ALTER TABLE gadm2_2014 RENAME TO gadm2;
ALTER TABLE gadm3_2014 RENAME TO gadm3;
ALTER TABLE gadm4_2014 RENAME TO gadm4;
ALTER TABLE gadm5_2014 RENAME TO gadm5;
ALTER TABLE text_search_2014 RENAME TO text_search;
