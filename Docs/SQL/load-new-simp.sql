update gadm0
set gadm0.geom_simplify_med = gadm0_2014.geomsimp
where gadm0.id_0 = gadm0_2014.id_0;

update gadm1
set gadm1.geom_simplify_med = gadm1_2014.geomsimp
where gadm1.id_1 = gadm1_2014.id_1;

update gadm2
set gadm2.geom_simplify_med = gadm2_2014.geomsimp
where gadm2.id_2 = gadm2_2014.id_2;

update gadm3
set gadm3.geom_simplify_med = gadm3_2014.geomsimp
where gadm3.id_3 = gadm3_2014.id_3;

update gadm4
set gadm4.geom_simplify_med = gadm4_2014.geomsimp
where gadm4.id_4 = gadm4_2014.id_4;

update gadm5
set gadm5.geom_simplify_med = gadm5_2014.geomsimp
where gadm5.id_5 = gadm5_2014.id_5;
