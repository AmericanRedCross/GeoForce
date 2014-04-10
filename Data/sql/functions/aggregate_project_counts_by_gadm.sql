with projects as (
	--This lists GUIDs and Names for Level 2 GADMs that have associated projects
	SELECT gadm2.guid, 2 as level FROM gadm2, gadm0, vw_sf_all_projects
	WHERE gadm0.id_0 = gadm2.id_0
	AND gadm2.guid = vw_sf_all_projects.stack_guid
	AND vw_sf_all_projects.level = '2'
	AND gadm0.guid = 'fb01414c-00e3-4321-b4af-9404efed6d84'

	
UNION ALL

	--This lists GUIDs and Names for Level 1 GADMs that have associated projects
	SELECT gadm1.guid, 1 as level FROM gadm1, gadm0, vw_sf_all_projects
	WHERE gadm0.id_0 = gadm1.id_0
	AND gadm1.guid = vw_sf_all_projects.stack_guid
	AND vw_sf_all_projects.level = '1'
	AND gadm0.guid = 'fb01414c-00e3-4321-b4af-9404efed6d84'

UNION ALL

	--This lists GUIDs and Names for Level 0 GADMs that have associated projects
	SELECT gadm0.guid, 0 as level FROM gadm0, vw_sf_all_projects
	WHERE gadm0.guid = vw_sf_all_projects.stack_guid
	AND vw_sf_all_projects.level = '0'
	AND gadm0.guid = 'fb01414c-00e3-4321-b4af-9404efed6d84'
)
SELECT count(guid) as project_count --, (SELECT geom_simplify_med from gadm0 where guid IN ('fb01414c-00e3-4321-b4af-9404efed6d84')) as geom
FROM projects
GROUP by guid

