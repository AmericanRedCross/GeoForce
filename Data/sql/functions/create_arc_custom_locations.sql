CREATE EXTENSION IF NOT EXISTS plv8;
DROP TABLE IF EXISTS arc_custom_locations;

CREATE TABLE arc_custom_locations (
 id serial primary key not null,
 ecos_id character varying not null,
 name character varying not null,
 geom geometry not null,
 level character varying,
 country character varying,
 gadm_stack_guid uuid,
 gadm_stack_level character varying, -- so we know where to begin our hit test
 created_by character varying,
 updated_by character varying,
 created timestamp with time zone not null default now(),
 updated timestamp with time zone not null default now()
);

/**************

tests

SELECT * FROM gadm2 WHERE ST_Intersects(ST_GeomFromText('POINT(-2.18902587890625 7.396514773092444)', 4326), geom);
SELECT st_geomfromtext as geom FROM ST_GeomFromText('POINT(-41.9765042089989 -11.4713226763985)', 4326);


SELECT * FROM ___create_arcCustomLocation('id1245', 'POINT(-2.18902587890625 7.396514773092444)', 'Chiraa');
SELECT * FROM ___create_arcCustomLocation('id1245', 'POINT(152.941205658511 -27.4459127098148)', 'brisbane cty');

SELECT * FROM arc_custom_locations

SELECT  ecos_id, name, country, year, gadm_stack_guid FROM arc_custom_locations WHERE name ILIKE('chiraa' || '%') ORDER BY name

Executing query: SELECT ST_AsGeoJSON(ST_Extent(geom)) as geom,guid as stack_guid, arc_region as isd_region, id_0 as adm0_code, name_0 as adm0_name, 
id_1 as adm1_code, name_1 as adm1_name, id_2 as adm2_code, name_2 as adm2_name, ST_AsText(ST_Centroid(geom)) as centroid, 2 as level FROM gadm2 
WHERE ST_Intersects(ST_GeomFromText($1, 4326), geom) GROUP BY stack_guid,isd_region,adm0_code,adm0_name,adm1_code,adm1_name,adm2_code,adm2_name,centroid,level, POINT(-120.50147 47.50012)

    Get full name :
    var lowestLevel = parseInt(stack[0].level);
    var fullname = "";

    var names = [name];

    for (var i=lowestLevel; i >= 0; i--){
       var gadmstr = 'name_' + i;
       names.push(gadm[0][gadmstr]);
    }
    
    fullname = names.join(", ");

***************/

DROP FUNCTION IF EXISTS ___create_arccustomlocation(character varying,character varying,character varying,uuid);
DROP FUNCTION IF EXISTS ___create_arccustomlocation(character varying,character varying,character varying,uuid, integer);
DROP FUNCTION IF EXISTS ___create_arccustomlocation(character varying,character varying,character varying);

CREATE OR REPLACE FUNCTION public.___create_arcCustomLocation(ecos_id character varying, wkt character varying, name character varying)
  RETURNS text AS
$BODY$

var stack;
var geom;
var lowestgadmlevel = 5;
var gadm_stack_level;
var level = 8; //automatically assign level 8 to all custom locations

// in the future, first verify that ECOS ID has the proper rights to create a location
if (ecos_id !== '' && ecos_id != null && wkt !== '' && wkt !== null && name !== '' && name !== null) {

    try {
        geom = plv8.execute("SELECT st_geomfromtext as geom FROM ST_GeomFromText($1, 4326)", [wkt])[0].geom; //get geom from wkt
    }
    catch (e) {
        return plv8.elog(ERROR, e);
    }

    // run our own hit test
    for (var i = lowestgadmlevel; i <= lowestgadmlevel; i--){
	stack = plv8.execute("SELECT * FROM gadm" + i + " WHERE ST_Intersects($1::geometry, geom)", [geom]);
	if(stack.length > 0) {
          gadm_stack_level = i;
	  break;
	}
    }

    // make sure our hit test returned something
    if (stack.length === 0){
        return plv8.elog(ERROR, 'Unable to find admin stack with associated geometry');
    }

    // capitalize each word in name
    var n = [];
    name.split(" ").forEach(function(w,i){n.push(w[0].toUpperCase() + w.slice(1,w.length))});
    name = n.join(" ")

    // create new custom location
    try {
	plv8.execute("INSERT INTO arc_custom_locations (ecos_id, name, country, geom, gadm_stack_guid, gadm_stack_level, level, created_by) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)", [ecos_id, name, stack[0].name_0, geom, stack[0].guid, gadm_stack_level, level, ecos_id]);
    } catch (e) {
        return plv8.elog(ERROR, e);
    }

}

return JSON.stringify(true);

$BODY$
  LANGUAGE plv8 VOLATILE
  COST 100;
ALTER FUNCTION public.___create_arcCustomLocation(character varying, character varying, character varying)
  OWNER TO postgres;
/***************************************************************************************

TESTS

SELECT * FROM arc_custom_locations;

SELECT * FROM ___edit_arcCustomLocation(1, 'ECOS231394', 'POINT(-2.1842432 7.343332)', 'Chiraa FC')
SELECT * FROM ___edit_arcCustomLocation(1, 'ECOS231394', 'POINT(-1.1842432 7.343332)', 'Chiraa FC');
SELECT * FROM ___edit_arcCustomLocation(2, 'ECOS14533', 'POINT(152.234 -27.41148)', 'brisbane capital');

SELECT  ecos_id, name, country, gadm_stack_guid FROM arc_custom_locations WHERE name ILIKE('ch' || '%') ORDER BY name


*****************************************************************************************/

CREATE OR REPLACE FUNCTION public.___edit_arcCustomLocation(id integer, ecos_id character varying, wkt character varying, name character varying)
  RETURNS text AS
$BODY$

var stack;
var geom;
var lowestgadmlevel = 5;
var gadm_stack_level;
var editRecordId;
var level = 8;

if (ecos_id !== '' && ecos_id != null && wkt !== '' && wkt !== null && name !== '' && name !== null) {

    try {
	editRecordId = plv8.execute("SELECT id, name, country, ecos_id FROM arc_custom_locations WHERE id = $1", [id]);
    } catch (e) {
        return plv8.elog(ERROR, e);
    }

    if (typeof editRecordId[0] === "undefined"){
        return plv8.elog(ERROR, "Invalid custom record id");
    } else {
       editRecordId = editRecordId[0].id;
    }

    try {
        // get geom from wkt
        geom = plv8.execute("SELECT st_geomfromtext as geom FROM ST_GeomFromText($1, 4326)", [wkt])[0].geom;
    }
    catch (e) {
        return plv8.elog(ERROR, e);
    }

    // run our own hit test
    for (var i = lowestgadmlevel; i <= lowestgadmlevel; i--){
	stack = plv8.execute("SELECT * FROM gadm" + i + " WHERE ST_Intersects($1::geometry, geom)", [geom]);
	if(stack.length > 0) {
          gadm_stack_level = i;
	  break;
	}
    }

    // make sure our hit test returned something
    if (stack.length === 0){
        return plv8.elog(ERROR, 'Unable to find admin stack with associated geometry');
    }

    // capitalize first letter of each word in name
    var n = [];
    name.split(" ").forEach(function(w,i){n.push(w[0].toUpperCase() + w.slice(1,w.length))});
    name = n.join(" ")

    // update existing location
    try {
    	plv8.execute("UPDATE arc_custom_locations SET ecos_id = $1, name = $2, country = $3, geom = $4, gadm_stack_guid = $5, updated_by = $1, level = $7, gadm_stack_level = $8, updated = now() WHERE id = $6", [ecos_id, name, stack[0].name_0, geom, stack[0].guid, editRecordId, level, gadm_stack_level]);
    } catch (e) {
        return plv8.elog(ERROR, e);
    }

}

return JSON.stringify(true);

$BODY$
  LANGUAGE plv8 VOLATILE
  COST 100;
ALTER FUNCTION public.___edit_arcCustomLocation(integer, character varying, character varying, character varying)
  OWNER TO postgres;
