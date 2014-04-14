CREATE OR REPLACE FUNCTION udf_dissolveallcountries() 
RETURNS integer AS $$
DECLARE
    projectrow RECORD;

BEGIN

    FOR projectrow IN SELECT DISTINCT ON (name_0) name_0 FROM gadm2 WHERE name_0 SIMILAR TO '(G)%' LOOP
    
	
        -- Now "projectrow" has one record from cs_materialized_views
        RAISE NOTICE ' %', projectrow.name_0;
        PERFORM udf_dissolve_gadm0(projectrow.name_0);
        
    END LOOP;
    RETURN 1;
END;
$$ LANGUAGE plpgsql;

SELECT * FROM udf_dissolveallcountries();
