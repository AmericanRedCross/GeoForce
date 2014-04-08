update arc_regions_dissolved
set geom = ST_Simplify(geom, 0.1);

update gadm0
set geom_simplify_med = ST_Simplify(geom, 0.1);

update gadm1
set geom_simplify_med = ST_SimplifyPreserveTopology(geom, 0.1);

update gadm2
set geom_simplify_med = (geom);

update gadm3
set geom_simplify_med = ST_SimplifyPreserveTopology(geom, 0.1);

update gadm4
set geom_simplify_med = ST_SimplifyPreserveTopology(geom, 0.1);

update gadm5
set geom_simplify_med = ST_SimplifyPreserveTopology(geom, 0.1);


--The above causes self-intersection errors (run this to see them)
--SELECT ST_IsValidReason(geom_simplify_med) from gadm0

--Run this to fix them
UPDATE arc_regions_dissolved set geom = st_buffer(geom,0);
UPDATE gadm0 set geom_simplify_med = st_buffer(geom_simplify_med,0); 
UPDATE gadm1 set geom_simplify_med = st_buffer(geom_simplify_med,0);
UPDATE gadm2 set geom_simplify_med = st_buffer(geom_simplify_med,0);
UPDATE gadm3 set geom_simplify_med = st_buffer(geom_simplify_med,0);
UPDATE gadm4 set geom_simplify_med = st_buffer(geom_simplify_med,0);
UPDATE gadm5 set geom_simplify_med = st_buffer(geom_simplify_med,0);

--select st_astext(geom_simplify_med) from gadm0
select * from UpdateGeometrySRID('arc_regions_dissolved', 'geom', 4326);
select * from UpdateGeometrySRID('gadm0', 'geom_simplify_med', 4326);
select * from UpdateGeometrySRID('gadm1', 'geom_simplify_med', 4326);
select * from UpdateGeometrySRID('gadm2', 'geom_simplify_med', 4326);
select * from UpdateGeometrySRID('gadm3', 'geom_simplify_med', 4326);
select * from UpdateGeometrySRID('gadm4', 'geom_simplify_med', 4326);
select * from UpdateGeometrySRID('gadm5', 'geom_simplify_med', 4326);

--Since we've smoothed away 34 islands for level 0 in the process, add them back in
update gadm0 set geom_simplify_med = geom
where guid NOT IN(
	select id from udf_getidsbyextent(null, 'POLYGON((-180 -90, -180 90, 180 90, 180 -90, -180 -90))')
	)

--need to do this for other levels as well.
