
WITH 
projects AS (
	--This lists GUIDs and Names for Level 2 GADMs that have associated projects
	SELECT count(gadm0.guid) as count0, gadm0.name_0 as name0, gadm0.guid as guid0, count(gadm1.guid) count1, gadm1.name_1 as name1, gadm1.guid as guid1, count(gadm2.guid) as count2, gadm2.name_2 as name2, gadm2.guid as guid2
	FROM gadm0,gadm1,gadm2, vw_sf_all_projects
	WHERE   gadm0.id_0 = gadm1.id_0 AND
	  gadm1.id_1 = gadm2.id_1 AND
	  gadm2.id_0 = gadm1.id_0
	AND gadm2.guid = vw_sf_all_projects.stack_guid
	AND vw_sf_all_projects.level = '2'
	--AND gadm0.guid = 'fb01414c-00e3-4321-b4af-9404efed6d84'
	GROUP BY gadm0.guid, gadm0.name_0, gadm1.guid, gadm1.name_1, gadm2.guid, gadm2.name_2
UNION ALL
	--This lists GUIDs and Names for Level 1 GADMs that have associated projects
	SELECT count(gadm0.guid), gadm0.name_0 as name, gadm0.guid, count(gadm1.guid), gadm1.name_1 as name, gadm1.guid, 0 as count2, '' as name2, null as guid2  FROM gadm1, gadm0, vw_sf_all_projects
	WHERE gadm0.id_0 = gadm1.id_0
	AND gadm1.guid = vw_sf_all_projects.stack_guid
	AND vw_sf_all_projects.level = '1'
	--AND gadm0.guid = 'fb01414c-00e3-4321-b4af-9404efed6d84'
	GROUP BY gadm0.guid, gadm0.name_0, gadm1.guid, gadm1.name_1
UNION ALL
	--This lists GUIDs and Names for Level 0 GADMs that have associated projects
	SELECT count(gadm0.guid), gadm0.name_0 as name, gadm0.guid, 0 as count1, '' as name1, null as guid1, 0 as count2, '' as name2, null as guid2  FROM gadm0, vw_sf_all_projects
	WHERE gadm0.guid = vw_sf_all_projects.stack_guid
	AND vw_sf_all_projects.level = '0'
	GROUP BY gadm0.guid, gadm0.name_0
	--AND gadm0.guid = '78ebd129-eecc-46c1-a165-76c24a4c82e7'
)
select * INTO sf_aggregated_gadm_project_counts from
projects

SELECT * from
sf_aggregated_gadm_project_counts


SELECT sum(count0), name0, guid0
FROM sf_aggregated_gadm_project_counts
group by name0, guid0

