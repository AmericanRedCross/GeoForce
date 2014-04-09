--Creating Views for each theme.  This should happen as part of Succubus (maybe)
--Projects by GADM level
CREATE OR REPLACE VIEW vw_theme_projects_gadm AS
 SELECT text_search.name, text_search.level, text_search.country, text_search.geom, text_search.fullname, text_search.stack_guid::character varying, count(text_search.id) as project_count
   FROM sf_all_projects a
   JOIN text_search ON text_search.stack_guid::character varying::text = a.gis_geo_id__c
   GROUP BY text_search.name, text_search.level, text_search.country, text_search.geom, text_search.fullname, text_search.stack_guid;

ALTER TABLE vw_theme_projects_gadm
  OWNER TO postgres;