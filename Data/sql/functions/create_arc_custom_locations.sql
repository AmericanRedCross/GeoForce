CREATE EXTENSION IF NOT EXISTS plv8;
DROP TABLE IF EXISTS arc_custom_locations;

CREATE TABLE arc_custom_locations (
 id serial primary key not null,
 ecos_id character varying not null,
 name character varying not null,
 geom geometry not null,
 level character varying,
 country character varying,
 year integer,
 last_updated timestamp with time zone not null default now(),
 stack_guid uuid
);

DELETE FROM text_search WHERE source = 'Custom';

/**************

SELECT * FROM gadm2 WHERE ST_Intersects(ST_GeomFromText('POINT(-2.18902587890625 7.396514773092444)', 4326), geom);

SELECT st_geomfromtext as geom FROM ST_GeomFromText('POINT(-41.9765042089989 -11.4713226763985)', 4326);

SELECT * FROM text_search where stack_guid = '6ad3318d-c6a3-4c43-9f80-e3943d2f5e4d' Limit 5
SELECT * FROM text_search_2012 where level = '4' Limit 5
SELECT * FROM uuid_generate_v4();

SELECT * FROM ___create_arcCustomLocation('id1245', 'POINT(-2.18902587890625 7.396514773092444)', 'Chiraa', '6ad3318d-c6a3-4c43-9f80-e3943d2f5e4d');

SELECT * FROM arc_custom_locations;
SELECT * FROM text_search limit 4
WHERE name = 'Chiraa';
SELECT * FROM gadm3 WHERE stack_guid = udf_executestrictadminsearchbynamewithgeom

***************/

CREATE OR REPLACE FUNCTION public.___create_arcCustomLocation(ecos_id character varying, wkt character varying, name character varying, stack_guid uuid)
  RETURNS text AS
$BODY$

var stack;
var geom;
var uuid;
var gadm;

if (ecos_id !== '' && ecos_id != null && stack_guid !== '' && stack_guid !== null && wkt !== '' && wkt !== null && name !== '' && name !== null) {

    try {
        geom = plv8.execute("SELECT st_geomfromtext as geom FROM ST_GeomFromText($1, 4326)", [wkt])[0].geom;
        stack = plv8.execute("SELECT * FROM text_search WHERE stack_guid = $1", [stack_guid]);
        uuid = plv8.execute("SELECT uuid_generate_v4 as uuid FROM uuid_generate_v4()")[0].uuid;
        gadm = plv8.execute("SELECT * FROM gadm" + stack[0].level + " WHERE ST_Intersects(ST_GeomFromText($1, 4326), geom)", [wkt])
    }
    catch (e) {
        return plv8.elog(ERROR, e);
    }

    var lowestLevel = parseInt(stack[0].level);
    var fullname = "";

    var names = [name];

    for (var i=lowestLevel; i >= 0; i--){
       var gadmstr = 'name_' + i;
       names.push(gadm[0][gadmstr]);
    }
    
    fullname = names.join(", ");
    
    // create new custom location
    try {
	plv8.execute("INSERT INTO arc_custom_locations (ecos_id, name, country, year, geom, level, stack_guid) VALUES ($1, $2, $3, $4, $5, $6, $7)", [ecos_id, name, stack[0].country, 2017, geom, lowestLevel+1, stack[0].stack_guid]);
	// add to text search

	plv8.execute("INSERT INTO text_search (name, source, country, year, geom, fullname, level, stack_guid) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)", [name, 'Custom', stack[0].country, 2017, geom, fullname, (lowestLevel+1).toString(), stack[0].stack_guid])
    } catch (e) {
        return plv8.elog(ERROR, e);
    }

}

return JSON.stringify(true);

$BODY$
  LANGUAGE plv8 VOLATILE
  COST 100;
ALTER FUNCTION public.___create_arcCustomLocation(character varying, character varying, character varying, uuid)
  OWNER TO postgres;

/**

SELECT arc_region as isd_region, id_0 as adm0_code, name_0 as adm0_name, id_1 as adm1_code, name_1 as adm1_name, id_2 as adm2_code, 
name_2 as adm2_name, alc.name, ST_AsText(ST_Centroid(alc.geom)) as centroid, alc.level 
FROM gadm2, arc_custom_locations alc
WHERE name_0 = (SELECT country FROM arc_custom_locations where stack_guid = 'b0fc6ef3-b2ca-4e6e-9bd1-69750d4d576a')
AND ST_Intersects((SELECT geom FROM arc_custom_locations where stack_guid = 'b0fc6ef3-b2ca-4e6e-9bd1-69750d4d576a'), gadm2.geom);

SELECT arc_region as isd_region, id_0 as adm0_code, name_0 as adm0_name, id_1 as adm1_code, name_1 as adm1_name, id_2 as adm2_code, 
name_2 as adm2_name, acl.name, ST_AsText(ST_Centroid(acl.geom)) as centroid, acl.level  FROM gadm2, arc_custom_locations acl WHERE acl.stack_guid = gadm2.guid AND guid = '6ad3318d-c6a3-4c43-9f80-e3943d2f5e4d'

SELECT acl.geom, arc_region as isd_region, id_0 as adm0_code,name_0 as adm0_name,id_1 as adm1_code,name_1 as adm1_name,id_2 as adm2_code,name_2 as adm2_name, acl.name, 
ST_AsText(ST_Centroid(acl.geom)) as centroid, acl.level  FROM gadm2, arc_custom_locations acl WHERE acl.stack_guid = gadm2 .guid AND guid = '6ad3318d-c6a3-4c43-9f80-e3943d2f5e4d'

SELECT acl.geom, arc_region as isd_region, id_0 as adm0_code,name_0 as adm0_name,id_1 as adm1_code,name_1 as adm1_name,
id_2 as adm2_code,name_2 as adm2_name ,acl.name, ST_AsText(ST_Centroid(acl.geom)) as centroid, 
acl.level  FROM gadm2, arc_custom_locations acl WHERE acl.stack_guid = gadm2 .guid AND guid = '6ad3318d-c6a3-4c43-9f80-e3943d2f5e4d'

SELECT ST_AsGeoJSON(geom) as geom
from arc_custom_locations limit 1

**/

