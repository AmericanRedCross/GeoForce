-- Function: udf_executeadminsearchbyname(character varying)

-- DROP FUNCTION udf_getidsbyextent(integer, character varying);

CREATE OR REPLACE FUNCTION udf_getidsbyextent(ingadm_level integer, inwkt character varying)
  RETURNS TABLE (level integer, id uuid, name text) AS
$BODY$
DECLARE
inside0 boolean;
inside1 boolean;
inside2 boolean;
inside3 boolean;
inside4 boolean;

count0 integer;
count1 integer;
count2 integer;
count3 integer;
count4 integer;

wkt geometry;


BEGIN

	wkt:= ST_GeomFromText(inwkt, 4326); --make the geometry

		
	

	--Starting with GADM 0, find if the viewport passed in is completely within any of the boundaries.
	inside0:= false; -- start assuming we're not inside of a level 0 boundary.

	count0:= count(guid) from gadm0 WHERE ST_Intersects(wkt, geom_simplify_med) AND year = 2012;
	IF(count0 = 1) THEN --start count0 = 1
		inside0:= ST_Within(wkt, geom_simplify_med) FROM gadm0 WHERE ST_Intersects(wkt, geom_simplify_med) AND year = 2012;
		IF(inside0 = true) THEN
			--We're completely inside of a level 0.  Go down a level and check again.







			count1:= count(guid) from gadm1 WHERE ST_Intersects(wkt, geom_simplify_med) AND year = 2012;
			IF(count1 = 1) THEN --start count1 = 1
				inside1:= ST_Within(wkt, geom_simplify_med) FROM gadm1 WHERE ST_Intersects(wkt, geom_simplify_med) AND year = 2012;
				IF(inside1 = true) THEN
					--We're completely inside of a level 1.  Go down a level and check again.








				count2:= count(guid) from gadm2 WHERE ST_Intersects(wkt, geom_simplify_med) AND year = 2012;
				IF(count2 = 1) THEN --start count2 = 1
					inside2:= ST_Within(wkt, geom_simplify_med) FROM gadm2 WHERE ST_Intersects(wkt, geom_simplify_med) AND year = 2012;
					IF(inside2 = true) THEN
						--We're completely inside of a level 2.  Go down a level and check again.




					count3:= count(guid) from gadm3 WHERE ST_Intersects(wkt, geom_simplify_med) AND year = 2012;
					IF(count3 = 1) THEN --start count3 = 1
						inside3:= ST_Within(wkt, geom_simplify_med) FROM gadm3 WHERE ST_Intersects(wkt, geom_simplify_med) AND year = 2012;
						IF(inside3 = true) THEN
							--We're completely inside of a level 3.  Go down a level and check again.







						count4:= count(guid) from gadm4 WHERE ST_Intersects(wkt, geom_simplify_med) AND year = 2012;
						IF(count4 = 1) THEN --start count4 = 1
							inside4:= ST_Within(wkt, geom_simplify_med) FROM gadm4 WHERE ST_Intersects(wkt, geom_simplify_med) AND year = 2012;
							IF(inside4 = true) THEN
								--We're completely inside of a level 4.  Go down a level and check again.


									--We're inside of a level 4.  Assume we can't go lower than 5. Just return 5s
									RETURN QUERY SELECT 5, guid, name_5 from gadm5 where ST_Intersects(wkt, geom_simplify_med) AND year = 2012;
								


							ELSE --inside4
								--We're not inside of a level 4.  So bring back the level 2s that intersect the viewport
								RETURN QUERY SELECT 4, guid, name_4 from gadm4 where ST_Intersects(wkt, geom_simplify_med) AND year = 2012;
							END IF; -- end inside4

						ELSE --count4 = 1
							--0 or > 1 features.  Just return those.
							RETURN QUERY SELECT 4, guid, name_4 from gadm4 where ST_Intersects(wkt, geom_simplify_med) AND year = 2012;
						END IF; --count4 = 1








						ELSE --inside3
							--We're not inside of a level 3.  So bring back the level 2s that intersect the viewport
							RETURN QUERY SELECT 3, guid, name_3 from gadm3 where ST_Intersects(wkt, geom_simplify_med) AND year = 2012;
						END IF; -- end inside3

					ELSE --count3 = 1
						--0 or > 1 features.  Just return those.
						RETURN QUERY SELECT 3, guid, name_3 from gadm3 where ST_Intersects(wkt, geom_simplify_med) AND year = 2012;
					END IF; --count3 = 1






					ELSE --inside2
						--We're not inside of a level 2.  So bring back the level 2s that intersect the viewport
						RETURN QUERY SELECT 2, guid, name_2 from gadm2 where ST_Intersects(wkt, geom_simplify_med) AND year = 2012;
					END IF; -- end inside2

				ELSE --count2 = 1
					--0 or > 1 features.  Just return those.
					RETURN QUERY SELECT 2, guid, name_2 from gadm2 where ST_Intersects(wkt, geom_simplify_med) AND year = 2012;
				END IF; --count2 = 1









				ELSE --inside1
					--We're not inside of a level 1.  So bring back the level 1s that intersect the viewport
					RETURN QUERY SELECT 1, guid, name_1 from gadm1 where ST_Intersects(wkt, geom_simplify_med) AND year = 2012;
				END IF; -- end inside1

			ELSE --count1 = 1
				--0 or > 1 features.  Just return those.
				RETURN QUERY SELECT 1, guid, name_1 from gadm1 where ST_Intersects(wkt, geom_simplify_med) AND year = 2012;
			END IF; --count1 = 1










			
		ELSE --inside0
			--We're not inside of a level 0.  So bring back the level 0s that intersect the viewport
			RETURN QUERY SELECT 0, guid, name_0 from gadm0 where ST_Intersects(wkt, geom_simplify_med) AND year = 2012;
		END IF; -- end inside0

	ELSE --count0 = 1
		--0 or > 1 features.  Just return those.
		RETURN QUERY SELECT 0, guid, name_0 from gadm0 where ST_Intersects(wkt, geom_simplify_med) AND year = 2012;
	END IF; --count0 = 1

	--for r in
		
	--loop
        --return next r;
    --end loop;
    --return;
END;
$BODY$
  LANGUAGE plpgsql VOLATILE
  COST 100
  ROWS 1000;
ALTER FUNCTION udf_getidsbyextent(integer, character varying)
  OWNER TO postgres;