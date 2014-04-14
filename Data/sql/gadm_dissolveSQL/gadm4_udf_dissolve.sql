CREATE OR REPLACE FUNCTION gadm4_udf_dissolve ( incountry character varying)
  RETURNS integer AS
$BODY$
DECLARE 
 returnCode integer;
BEGIN
 returnCode := 0;
 
 INSERT INTO gadm4
 SELECT id_0, name_0,id_1, name_1, id_2, name_2,id_3, name_3,id_4, name_4, ST_Union(geom) as the_geom
 FROM gadm2
 WHERE name_0 = incountry
 GROUP BY id_0, name_0,id_1, name_1, id_2, name_2, id_3, name_3, id_4, name_4;

 RETURN 1;
 --RETURN returnCode;
END;
$BODY$
  LANGUAGE plpgsql VOLATILE
  COST 100;
ALTER FUNCTION gadm4_udf_dissolve(character varying)
  OWNER TO postgres;

