--Get counts before we start.
--(252)
select count(stack_guid) from text_search where source = 'GADM' and level = '0';
select count(guid) from gadm0;
 
 
UPDATE gadm0
SET guid = ts.feature_guid
FROM text_search as ts
WHERE ts.stack_guid = gadm0.guid;
--(252), 7.6 Seconds
 
 
select count(stack_guid) from text_search where source = 'GADM' and level = '1';
--(3417)
 
UPDATE gadm1
SET guid = ts.feature_guid
FROM text_search as ts
WHERE ts.stack_guid = gadm1.guid;
--(3417) updated, 39.4 seconds
 
select count(stack_guid) from text_search where source = 'GADM' and level = '2';
--(40,963)
 
UPDATE gadm2
SET guid = ts.feature_guid
FROM text_search as ts
WHERE ts.stack_guid = gadm2.guid;
--(40,963), 294.4 seconds
 
select count(stack_guid) from text_search where source = 'GADM' and level = '3';
--(108,500)
 
UPDATE gadm3
SET guid = ts.feature_guid
FROM text_search as ts
WHERE ts.stack_guid = gadm3.guid;
 
UPDATE gadm4
SET guid = ts.feature_guid
FROM text_search as ts
WHERE ts.stack_guid = gadm4.guid;
 
UPDATE gadm5
SET guid = ts.feature_guid
FROM text_search as ts
WHERE ts.stack_guid = gadm5.guid;
 
UPDATE text_search
SET stack_guid = feature_guid
WHERE source = 'GADM';

