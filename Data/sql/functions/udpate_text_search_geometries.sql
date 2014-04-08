--Update geometry in text_search table
update text_search as ts
set geom = g.geom_simplify_med
FROM gadm0 AS g
WHERE ts.stack_guid = g.guid
AND ts.level = '0';

update text_search as ts
set geom = g.geom_simplify_med
FROM gadm1 AS g
WHERE ts.stack_guid = g.guid
AND ts.level = '1';

update text_search as ts
set geom = g.geom_simplify_med
FROM gadm2 AS g
WHERE ts.stack_guid = g.guid
AND ts.level = '2';

update text_search as ts
set geom = g.geom_simplify_med
FROM gadm3 AS g
WHERE ts.stack_guid = g.guid
AND ts.level = '3';

update text_search as ts
set geom = g.geom_simplify_med
FROM gadm4 AS g
WHERE ts.stack_guid = g.guid
AND ts.level = '4';

update text_search as ts
set geom = g.geom_simplify_med
FROM gadm5 AS g
WHERE ts.stack_guid = g.guid
AND ts.level = '5';


