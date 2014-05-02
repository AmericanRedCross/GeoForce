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
