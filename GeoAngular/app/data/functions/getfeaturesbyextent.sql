--sample bbox zoomed to seattle
--"-122.57377624511719,47.50143120349543,-122.04471588134767,47.68642357794369"
--"minx, miny, maxx, maxy"
--PostGres polygon is 'POLYGON((minx miny, minx maxy, maxx maxy, maxx miny, minx miny))'
--So 'POLYGON((-122.573776 47.50143, -122.573776 47.68642, -122.04471 47.68642, -122.04471 47.50143, -122.573776 47.50143))'

--SELECT * from text_search where ST_Intersects(ST_GeomFromText('POLYGON((-122.573776 47.50143, -122.573776 47.68642, -122.04471 47.68642, -122.04471 47.50143, -122.573776 47.50143))', 4326), geom) AND year = 2012 AND level::integer = 0;

--SELECT name_0, geom_simplify_med from gadm0 where ST_Within(ST_GeomFromText('POLYGON((-121.37969970703124 47.800241632833654,-120.28106689453125 47.800241632833654,-120.28106689453125 47.01958886438214,-121.37969970703124 47.01958886438214,-121.37969970703124 47.800241632833654))', 4326), geom_simplify_med) AND year = 2012;


SELECT ST_Within(ST_GeomFromText('POLYGON((-121.37969970703124 47.800241632833654,-120.28106689453125 47.800241632833654,-120.28106689453125 47.01958886438214,-121.37969970703124 47.01958886438214,-121.37969970703124 47.800241632833654))', 4326), geom_simplify_med) from gadm2
where ST_Intersects(ST_GeomFromText('POLYGON((-121.37969970703124 47.800241632833654,-120.28106689453125 47.800241632833654,-120.28106689453125 47.01958886438214,-121.37969970703124 47.01958886438214,-121.37969970703124 47.800241632833654))', 4326), geom_simplify_med) AND year = 2012

--VACUUM ANALYZE gadm0

DO $$DECLARE

inside0 boolean;
inside1 boolean;
inside2 boolean;
inside3 boolean;
inside4 boolean;

wkt geometry;

BEGIN
 --Starting with GADM 0, find if the viewport passed in is completely within any of the boundaries.

	wkt:= ST_GeomFromText('POLYGON((-121.37969970703124 47.800241632833654,-120.28106689453125 47.800241632833654,-120.28106689453125 47.01958886438214,-121.37969970703124 47.01958886438214,-121.37969970703124 47.800241632833654))', 4326); --make the geometry so we don't have to keep doing it
	inside0:= false; -- start assuming we're not inside of a level 0 boundary.
	
	inside0:= ST_Within(wkt, geom_simplify_med) FROM gadm0 WHERE ST_Intersects(wkt, geom_simplify_med) AND year = 2012;

	IF(inside0 = true) THEN
		--We're inside of a level 0.  See if we're inside of a level 1
		inside1:= ST_Within(wkt, geom_simplify_med) FROM gadm1 WHERE ST_Intersects(wkt, geom_simplify_med) AND year = 2012;

		IF(inside1 = true) THEN
			--We're inside of a level 1.  See if we're inside of a level 2
			count2:= count(guid) from gadm2 WHERE ST_Intersects(wkt, geom_simplify_med) AND year = 2012;

			IF(count2 > 1) THEN --start count2 > 1
			inside2:= ST_Within(wkt, geom_simplify_med) FROM gadm2 WHERE ST_Intersects(wkt, geom_simplify_med) AND year = 2012;

				IF(inside2 = true) THEN
					--We're inside of a level 2.  See if we're inside of a level 3
					inside3:= ST_Within(wkt, geom_simplify_med) FROM gadm3 WHERE ST_Intersects(wkt, geom_simplify_med) AND year = 2012;

					IF(inside3 = true) THEN
						--We're inside of a level 3.  See if we're inside of a level 4
						inside4:= ST_Within(wkt, geom_simplify_med) FROM gadm4 WHERE ST_Intersects(wkt, geom_simplify_med) AND year = 2012;

						IF(inside4 = true) THEN
							--We're inside of a level 4.  Assume we can't go lower than 5. Just return 5s
							SELECT geom_simplify_med from gadm5 where ST_Intersects(wkt, geom_simplify_med) AND year = 2012;
						ELSE
							--We're not inside of a level 4.  So bring back the level 4s that intersect the viewport
							SELECT geom_simplify_med from gadm4 where ST_Intersects(wkt, geom_simplify_med) AND year = 2012;
						END IF;
					ELSE
						--We're not inside of a level 3.  So bring back the level 3s that intersect the viewport
						SELECT geom_simplify_med from gadm3 where ST_Intersects(wkt, geom_simplify_med) AND year = 2012;
					END IF;
				ELSE
					--We're not inside of a level 2.  So bring back the level 2s that intersect the viewport
					SELECT geom_simplify_med from gadm2 where ST_Intersects(wkt, geom_simplify_med) AND year = 2012;
				
				END IF;
				
			ELSE --for count2 > 1

			END IF; --End count2 > 1

		
		ELSE
			--We're not inside of a level 1.  So bring back the level 1s that intersect the viewport
			SELECT geom_simplify_med from gadm1 where ST_Intersects(wkt, geom_simplify_med) AND year = 2012;
		END IF;
	ELSE
		--We're not inside of a level 0.  So bring back the level 0s that intersect the viewport
		SELECT geom_simplify_med from gadm0 where ST_Intersects(wkt, geom_simplify_med) AND year = 2012;
		
	END IF;

END$$;