UPDATE gadm0
SET geom_simplify_med = gadm0_2014.geomsimp
FROM gadm0_2014
WHERE gadm0.id_0 = gadm0_2014.id_0;

UPDATE gadm1
SET geom_simplify_med = gadm1_2014.geomsimp
FROM gadm1_2014
WHERE gadm1.id_0 = gadm1_2014.id_0
  AND gadm1.id_1 = gadm1_2014.id_1;

UPDATE gadm2
SET geom_simplify_med = gadm2_2014.geomsimp
FROM gadm2_2014
WHERE gadm2.id_0 = gadm2_2014.id_0
  AND gadm2.id_1 = gadm2_2014.id_1
  AND gadm2.id_2 = gadm2_2014.id_2;

UPDATE gadm3
SET geom_simplify_med = gadm3_2014.geomsimp
FROM gadm3_2014
WHERE gadm3.id_0 = gadm3_2014.id_0
  AND gadm3.id_1 = gadm3_2014.id_1
  AND gadm3.id_2 = gadm3_2014.id_2
  AND gadm3.id_3 = gadm3_2014.id_3;

UPDATE gadm4
SET geom_simplify_med = gadm4_2014.geomsimp
FROM gadm4_2014
WHERE gadm4.id_0 = gadm4_2014.id_0
  AND gadm4.id_1 = gadm4_2014.id_1
  AND gadm4.id_2 = gadm4_2014.id_2
  AND gadm4.id_3 = gadm4_2014.id_3
  AND gadm4.id_4 = gadm4_2014.id_4;

UPDATE gadm5
SET geom_simplify_med = gadm5_2014.geomsimp
FROM gadm5_2014
WHERE gadm5.id_0 = gadm5_2014.id_0
  AND gadm5.id_1 = gadm5_2014.id_1
  AND gadm5.id_2 = gadm5_2014.id_2
  AND gadm5.id_3 = gadm5_2014.id_3
  AND gadm5.id_4 = gadm5_2014.id_4
  AND gadm5.id_5 = gadm5_2014.id_5;
