CREATE OR REPLACE FUNCTION gadm2_udf_dissolve ( incountry character varying)
  RETURNS integer AS
$BODY$
DECLARE 
 returnCode integer;
BEGIN
 returnCode := 0;
 
 INSERT INTO gadm2_only
 SELECT id_0, name_0,id_1, name_1, id_2, name_2, ST_Union(geom) as the_geom
 FROM gadm2
 WHERE name_0 = incountry
 GROUP BY id_0, name_0,id_1, name_1,id_2, name_2;

 RETURN 1;
 --RETURN returnCode;
END;
$BODY$
  LANGUAGE plpgsql VOLATILE
  COST 100;
ALTER FUNCTION gadm2_udf_dissolve(character varying)
  OWNER TO postgres;

