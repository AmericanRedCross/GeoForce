-- View: vw_gadm1_med_geom

-- DROP VIEW vw_gadm1_med_geom;

CREATE OR REPLACE VIEW vw_gadm0_med_geom AS 
 SELECT gadm0.name_0, gadm0.geom_simplify_med, gadm0.year
   FROM gadm0;

ALTER TABLE vw_gadm0_med_geom
  OWNER TO postgres;



CREATE OR REPLACE VIEW vw_gadm1_med_geom AS 
 SELECT gadm1.name_1, gadm1.geom_simplify_med, gadm1.year
   FROM gadm1;

ALTER TABLE vw_gadm1_med_geom
  OWNER TO postgres;


CREATE OR REPLACE VIEW vw_gadm2_med_geom AS 
 SELECT gadm2.name_2, gadm2.geom_simplify_med, gadm2.year
   FROM gadm2;

ALTER TABLE vw_gadm2_med_geom
  OWNER TO postgres;

  CREATE OR REPLACE VIEW vw_gadm3_med_geom AS 
 SELECT gadm3.name_3, gadm3.geom_simplify_med, gadm3.year
   FROM gadm3;

ALTER TABLE vw_gadm3_med_geom
  OWNER TO postgres;

  CREATE OR REPLACE VIEW vw_gadm4_med_geom AS 
 SELECT gadm4.name_4, gadm4.geom_simplify_med, gadm4.year
   FROM gadm4;

ALTER TABLE vw_gadm4_med_geom
  OWNER TO postgres;

    CREATE OR REPLACE VIEW vw_gadm5_med_geom AS 
 SELECT gadm5.name_5, gadm5.geom_simplify_med, gadm5.year
   FROM gadm5;

ALTER TABLE vw_gadm5_med_geom
  OWNER TO postgres;