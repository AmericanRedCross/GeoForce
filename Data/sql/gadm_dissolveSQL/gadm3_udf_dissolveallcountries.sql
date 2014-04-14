CREATE OR REPLACE FUNCTION gadm3_udf_dissolveallcountries() 
RETURNS integer AS $$
DECLARE
    projectrow RECORD;

BEGIN

    FOR projectrow IN SELECT DISTINCT ON (name_0) name_0 FROM gadm2 WHERE name_3 IS NOT NULL AND name_0 not in ('Spain','Canada', 'Estonia', 'Thailand','Belgium')
 LOOP
    
	
        -- Now "projectrow" has one record from cs_materialized_views
        RAISE NOTICE ' %', projectrow.name_0;
        PERFORM gadm3_udf_dissolve(projectrow.name_0);
        
    END LOOP;
    RETURN 1;
END;
$$ LANGUAGE plpgsql;

SELECT * FROM gadm3_udf_dissolveallcountries();
