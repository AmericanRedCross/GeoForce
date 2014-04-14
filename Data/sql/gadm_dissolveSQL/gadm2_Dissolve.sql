CREATE Table Burundi_gadm0 AS
SELECT id_0, name_0, ST_Union(geom) as the_geom
FROM gadm2
WHERE name_0 = 'Burundi'
GROUP BY id_0, name_0;


CREATE Table Burundi_gadm1 AS
SELECT id_1, name_1,id_0, name_0, ST_Union(geom) as the_geom
FROM gadm2
WHERE name_0 = 'Burundi'
GROUP BY id_1, name_1, id_0, name_0;


CREATE Table Burundi_gadm2 AS
SELECT id_2, name_2, id_1, name_1,id_0, name_0, ST_Union(geom) as the_geom
FROM gadm2
WHERE name_0 = 'Burundi'
GROUP BY id_2, name_2, id_1, name_1,id_0, name_0;








