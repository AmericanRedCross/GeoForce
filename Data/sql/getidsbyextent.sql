-- Function: udf_getidsbyextent(integer, character varying)

-- DROP FUNCTION udf_getidsbyextent(integer, character varying);

CREATE OR REPLACE FUNCTION udf_getidsbyextent(IN ingadm_level integer, IN inwkt character varying)
  RETURNS TABLE(level integer, guid uuid, name text) AS
$BODY$
DECLARE

count0 integer;
count1 integer;
count2 integer;
count3 integer;
count4 integer;

wkt geometry;


BEGIN

	wkt:= ST_GeomFromText(inwkt, 4326); --make the geometry

		
	

	--Starting with GADM 0, find if the viewport passed in is completely within any of the boundaries.
	count0:= count(g.guid) from gadm0 g WHERE ST_Intersects(wkt, geom_simplify_med) AND year = 2012;
	IF(count0 = 1) THEN --start count0 = 1

			--We're looking at just 1 level 0.  Go down to level 1 and check.
			count1:= count(g.guid) from gadm1 g WHERE ST_Intersects(wkt, geom_simplify_med) AND year = 2012;
			IF(count1 = 1) THEN --start count1 = 1

				--We're looking at just 1 level 1.  Go down to level 2 and check.
				count2:= count(g.guid) from gadm2 g WHERE ST_Intersects(wkt, geom_simplify_med) AND year = 2012;
				IF(count2 = 1) THEN --start count2 = 1

						--We're looking at just 1 level 2.  Go down to level 3 and check.
						count3:= count(g.guid) from gadm3 g WHERE ST_Intersects(wkt, geom_simplify_med) AND year = 2012;
						IF(count3 = 1) THEN --start count3 = 1

								--We're looking at just 1 level 3.  Go down to level 4 and check.
								count4:= count(g.guid) from gadm4 g WHERE ST_Intersects(wkt, geom_simplify_med) AND year = 2012;
								IF(count4 = 1) THEN --start count4 = 1
									--We're inside of a level 4.  Assume we can't go lower than 5. Just return 5s
									RETURN QUERY SELECT 5, g.guid, name_5 from gadm5 g where ST_Intersects(wkt, geom_simplify_med) AND year = 2012;


								ELSE --count4 = 1
									--0 or > 1 features.  Just return those.
									RETURN QUERY SELECT 4, g.guid, name_4 from gadm4 g where ST_Intersects(wkt, geom_simplify_med) AND year = 2012;
								END IF; --count4 = 1



						ELSE --count3 = 1
							--0 or > 1 features.  Just return those.
							RETURN QUERY SELECT 3, g.guid, name_3 from gadm3 g where ST_Intersects(wkt, geom_simplify_med) AND year = 2012;
						END IF; --count3 = 1


				ELSE --count2 = 1
					--0 or > 1 features.  Just return those.
					RETURN QUERY SELECT 2, g.guid, name_2 from gadm2 g where ST_Intersects(wkt, geom_simplify_med) AND year = 2012;
				END IF; --count2 = 1



			ELSE --count1 = 1
				--0 or > 1 features.  Just return those.
				RETURN QUERY SELECT 1, g.guid, name_1 from gadm1 g where ST_Intersects(wkt, geom_simplify_med) AND year = 2012;
			END IF; --count1 = 1


	ELSE --count0 = 1
		--0 or > 1 features.  Just return those.
		RETURN QUERY SELECT 0, g.guid, name_0 from gadm0 g where ST_Intersects(wkt, geom_simplify_med) AND year = 2012;
	END IF; --count0 = 1
END;
$BODY$
  LANGUAGE plpgsql VOLATILE
  COST 100
  ROWS 1000;
ALTER FUNCTION udf_getidsbyextent(integer, character varying)
  OWNER TO postgres;
