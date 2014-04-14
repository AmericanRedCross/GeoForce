CREATE OR REPLACE FUNCTION udf_dissolve_gadm0 ( incountry character varying)
  RETURNS integer AS
$BODY$
DECLARE 
 returnCode integer;
BEGIN
 returnCode := 0;
 
 INSERT INTO gadm0
 SELECT id_0, name_0, ST_Union(geom) as the_geom
 FROM gadm2
 WHERE name_0 = incountry
 GROUP BY id_0, name_0

 RETURN 1;
 --RETURN returnCode;
END;
$BODY$
  LANGUAGE plpgsql VOLATILE
  COST 100;
ALTER FUNCTION udf_dissolve_gadm0(character varying)
  OWNER TO postgres;