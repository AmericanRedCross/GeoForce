DROP TABLE IF EXISTS sf_aggregated_gadm_projects_counts; 
SELECT count(gadm0.guid) as count0, gadm0.name_0 as name0, gadm0.guid as guid0, gadm0.geom_simplify_med as geom0, count(gadm1.guid) count1, gadm1.name_1 as name1, gadm1.guid as guid1, gadm1.geom_simplify_med as geom1, count(gadm2.guid) as count2, gadm2.name_2 as name2, gadm2.guid as guid2, gadm2.geom_simplify_med as geom2
INTO sf_aggregated_gadm_projects_counts 
FROM gadm0,gadm1,gadm2, vw_sf_all_projects 
WHERE   gadm0.id_0 = gadm1.id_0 AND gadm1.id_1 = gadm2.id_1 AND gadm2.id_0 = gadm1.id_0 AND gadm2.guid = vw_sf_all_projects.stack_guid AND vw_sf_all_projects.level = '2' 
GROUP BY gadm0.guid, gadm0.name_0, gadm1.guid, gadm1.name_1, gadm2.guid, gadm2.name_2, gadm2.geom_simplify_med, gadm1.geom_simplify_med, gadm0.geom_simplify_med; 

INSERT INTO sf_aggregated_gadm_projects_counts( 
SELECT count(gadm0.guid), gadm0.name_0 as name, gadm0.guid, gadm0.geom_simplify_med as geom0, count(gadm1.guid), gadm1.name_1 as name, gadm1.guid, gadm1.geom_simplify_med as geom1, 0 as count2, '' as name2, null as guid2, null::geometry as geom2  
FROM gadm1, gadm0, vw_sf_all_projects 
WHERE gadm0.id_0 = gadm1.id_0 AND gadm1.guid = vw_sf_all_projects.stack_guid AND vw_sf_all_projects.level = '1' 
GROUP BY gadm0.guid, gadm0.name_0, gadm1.guid, gadm1.name_1, geom2, gadm1.geom_simplify_med, gadm0.geom_simplify_med);

INSERT INTO sf_aggregated_gadm_projects_counts(SELECT count(gadm0.guid), gadm0.name_0 as name, gadm0.guid,gadm0.geom_simplify_med as geom0,  0 as count1, '' as name1, null as guid1, null::geometry as geom1, 0 as count2, '' as name2, null as guid2, null::geometry as geom2  
FROM gadm0, vw_sf_all_projects 
WHERE gadm0.guid = vw_sf_all_projects.stack_guid 
AND vw_sf_all_projects.level = '0' 
GROUP BY gadm0.guid, gadm0.name_0, gadm0.geom_simplify_med);

select * from sf_aggregated_gadm_projects_counts