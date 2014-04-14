CREATE OR REPLACE FUNCTION gadm4_udf_dissolveallcountries() 
RETURNS integer AS $$
DECLARE
    projectrow RECORD;

BEGIN

    FOR projectrow IN SELECT DISTINCT ON (name_0) name_0 FROM gadm2 WHERE name_4 IS NOT NULL AND name_0 not in ('Spain','Canada', 'Estonia', 'Thailand')
 LOOP
    
	
        -- Now "projectrow" has one record from cs_materialized_views
        RAISE NOTICE ' %', projectrow.name_0;
        PERFORM gadm4_udf_dissolve(projectrow.name_0);
        
    END LOOP;
    RETURN 1;
END;
$$ LANGUAGE plpgsql;

SELECT * FROM gadm4_udf_dissolveallcountries();
