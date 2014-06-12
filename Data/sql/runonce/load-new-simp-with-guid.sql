UPDATE gadm0
SET geom_simplify_med = gadm0_7perc.geom
FROM gadm0_7perc
WHERE gadm0.guid::character varying = gadm0_7perc.guid;

UPDATE gadm1
SET geom_simplify_med = gadm1_25perc.geom
FROM gadm1_25perc
WHERE gadm1.guid::character varying = gadm1_25perc.guid;

UPDATE gadmrollup
SET geom0 = gadm0_7perc.geom
FROM gadm0_7perc
WHERE gadmrollup.guid0::character varying = gadm0_7perc.guid;

UPDATE gadmrollup
SET geom1 = gadm1_25perc.geom
FROM gadm1_25perc
WHERE gadmrollup.guid1::character varying = gadm1_25perc.guid;

UPDATE sf_aggregated_gadm_project_counts
SET geom0 = gadm0_7perc.geom
FROM gadm0_7perc
WHERE sf_aggregated_gadm_project_counts.guid0::character varying = gadm0_7perc.guid;

UPDATE sf_aggregated_gadm_project_counts
SET geom1 = gadm1_25perc.geom
FROM gadm1_25perc
WHERE sf_aggregated_gadm_project_counts.guid1::character varying = gadm1_25perc.guid;

UPDATE sf_aggregated_gadm_disaster_counts
SET geom0 = gadm0_7perc.geom
FROM gadm0_7perc
WHERE sf_aggregated_gadm_disaster_counts.guid0::character varying = gadm0_7perc.guid;

UPDATE sf_aggregated_gadm_disaster_counts
SET geom1 = gadm1_25perc.geom
FROM gadm1_25perc
WHERE sf_aggregated_gadm_disaster_counts.guid1::character varying = gadm1_25perc.guid;