select * from gadm0_2014 where id_0 not in ( select id_0 from gadm0 );
-- 2;"Åland"

select * from gadm0 where id_0 not in ( select id_0 from gadm0_2014 );
-- none

select * from gadm1_2014 where id_1 not in ( select id_1 from gadm1 );
-- none

select * from gadm1 where id_1 not in ( select id_1 from gadm1_2014 );
-- none

select * from gadm2_2014 where id_2 not in ( select id_2 from gadm2 );
-- none

select * from gadm2 where id_2 not in ( select id_2 from gadm2_2014 );
-- 186;"Russia";71;"Sverdlovsk";0;"NA (1)";31429;2012;"523c290c-7330-4b5c-8cad-d7bb485c977f"
-- 186;"Russia";71;"Sverdlovsk";0;"NA (2)";31430;2012;"584b9269-a5bd-49f9-8976-5df9733642be"

select count(id_3) from gadm3;
-- 108500
select count(id_3) from gadm3_2014;
-- 114423
select count(id_4) from gadm4;
-- 59601
select count(id_4) from gadm4_2014;
-- 49343
select count(id_5) from gadm5;
-- 40269
select count(id_5) from gadm5_2014;
-- 49343

select * from gadm3_2014 where id_3 not in ( select id_3 from gadm3 );
-- long exec

select * from gadm3 where id_3 not in ( select id_3 from gadm3_2014 );
-- long exec

select * from gadm4_2014 where id_4 not in ( select id_4 from gadm4 );
-- long exec

select * from gadm4 where id_4 not in ( select id_4 from gadm4_2014 );
-- long exec

select * from gadm5_2014 where id_5 not in ( select id_5 from gadm5 );
-- long exec

select * from gadm5 where id_5 not in ( select id_5 from gadm1_2014 );
-- long exec