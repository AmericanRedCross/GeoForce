--15 mins
DROP TABLE IF EXISTS gadmrollup;
SELECT ''::character varying as nameARC, 0 as guidARC,
null::geometry as geomarc, gadm0.name_0 as name0, gadm0.guid as guid0, gadm0.geom_simplify_med as geom0,
gadm1.name_1 as name1, gadm1.guid as guid1, gadm1.geom_simplify_med as geom1,
gadm2.name_2 as name2, gadm2.guid as guid2, gadm2.geom_simplify_med as geom2,
gadm3.name_3 as name3, gadm3.guid as guid3, gadm3.geom_simplify_med as geom3,
gadm4.name_4 as name4, gadm4.guid as guid4, gadm4.geom_simplify_med as geom4,
gadm5.name_5 as name5, gadm5.guid as guid5, gadm5.geom_simplify_med as geom5

INTO gadmrollup
FROM gadm0
LEFT OUTER JOIN gadm1
ON gadm0.id_0 = gadm1.id_0
LEFT OUTER JOIN gadm2
ON gadm2.id_0 = gadm1.id_0 AND gadm2.id_1 = gadm1.id_1
LEFT OUTER JOIN gadm3
ON gadm3.id_0 = gadm2.id_0 AND gadm3.id_1 = gadm2.id_1 AND gadm3.id_2 = gadm2.id_2
LEFT OUTER JOIN gadm4
ON gadm4.id_0 = gadm3.id_0 AND gadm4.id_1 = gadm3.id_1 AND gadm4.id_2 = gadm3.id_2 AND gadm4.id_3 = gadm3.id_3
LEFT OUTER JOIN gadm5
ON gadm5.id_0 = gadm4.id_0 AND gadm5.id_1 = gadm4.id_1 AND gadm5.id_2 = gadm4.id_2 AND gadm5.id_3 = gadm4.id_3 AND gadm5.id_4 = gadm4.id_4;




CREATE INDEX ON gadmrollup (nameARC);
CREATE INDEX ON gadmrollup (name0);
CREATE INDEX ON gadmrollup (name1);
CREATE INDEX ON gadmrollup (name2);
CREATE INDEX ON gadmrollup (name3);
CREATE INDEX ON gadmrollup (name4);
CREATE INDEX ON gadmrollup (name5);

CREATE INDEX ON gadmrollup (guidARC);
CREATE INDEX ON gadmrollup (guid0);
CREATE INDEX ON gadmrollup (guid1);
CREATE INDEX ON gadmrollup (guid2);
CREATE INDEX ON gadmrollup (guid3);
CREATE INDEX ON gadmrollup (guid4);
CREATE INDEX ON gadmrollup (guid5);


CREATE INDEX ON gadmrollup USING gist (geomARC);
CREATE INDEX ON gadmrollup USING gist (geom0);
CREATE INDEX ON gadmrollup USING gist (geom1);
CREATE INDEX ON gadmrollup USING gist (geom2);
CREATE INDEX ON gadmrollup USING gist (geom3);
CREATE INDEX ON gadmrollup USING gist (geom4);
CREATE INDEX ON gadmrollup USING gist (geom5);

--5 minutes
ALTER TABLE gadmrollup ADD COLUMN id SERIAL;
UPDATE gadmrollup SET id = DEFAULT;
ALTER TABLE gadmrollup ADD PRIMARY KEY (id);
CREATE INDEX idx_sf_gadmguids_id ON gadmrollup USING btree (id);
UPDATE gadmrollup SET geom0 = ST_BUFFER(geom0, 0);

--Join on name for most of the countries.
UPDATE gadmrollup
set namearc = (select region from arc_regions a where a.name = gadmrollup.name0)

--Fill in a few that slipped thru the cracks
UPDATE gadmrollup
set namearc = 'USA',
geomarc = (select geom from arc_regions_dissolved where region = 'USA'),
guidarc = 3
where name0 = 'United States'

UPDATE gadmrollup
set namearc = 'LAC'
where name0 = 'Bahamas'

UPDATE gadmrollup
set namearc = 'AFRICA'
where name0 = 'Guinea-Bissau'

UPDATE gadmrollup
set namearc = 'AFRICA'
where name0 = 'Tanzania'

UPDATE gadmrollup
set namearc = 'AFRICA'
where name0 = 'Republic of Congo'

UPDATE gadmrollup
set namearc = 'AFRICA'
where name0 = 'Côte d''Ivoire'

UPDATE gadmrollup
set namearc = 'AMEE'
where name0 IN (
'Åland',
'Andorra',
'Caspian Sea',
'Faroe Islands',
'Gibraltar',
'Guernsey',
'Isle of Man',
'Jersey',
'Liechtenstein',
'Monaco',
'Palestina',
'San Marino',
'Serbia',
'Svalbard and Jan Mayen',
'Vatican City');

UPDATE gadmrollup
set namearc = 'AMEE'
where name0 IN (
'American Samoa',
'British Indian Ocean Territory',
'Christmas Island',
'Cocos Islands',
'Cook Islands',
'French Polynesia',
'French Southern Territories',
'Guam',
'Heard Island and McDonald Islands',
'Kiribati',
'Macao',
'Maldives',
'Marshall Islands',
'Mauritius',
'Micronesia',
'Nauru',
'Niue',
'Norfolk Island',
'Northern Mariana Islands',
'Palau',
'Pitcairn Islands',
'Reunion',
'Seychelles',
'Singapore',
'Spratly islands',
'Tokelau',
'Tonga',
'Tuvalu',
'United States Minor Outlying Islands',
'Wallis and Futuna'
);

UPDATE gadmrollup
set namearc = 'LAC'
where name0 IN (
'Anguilla',
'Antigua and Barbuda',
'Aruba',
'Bonaire, Saint Eustatius and Saba',
'British Virgin Islands',
'Clipperton Island',
'Curaçao',
'Grenada',
'Guadeloupe',
'Martinique',
'Montserrat',
'Saint-Barthélemy',
'Saint Lucia',
'Saint-Martin',
'Saint Pierre and Miquelon',
'Saint Vincent and the Grenadines',
'South Georgia and the South Sandwich Islands',
'Turks and Caicos Islands',
'Virgin Islands, U.S.');

UPDATE gadmrollup
set namearc = 'AFRICA'
where name0 IN (
'Bouvet Island',
'Cape Verde',
'Comoros',
'Mayotte',
'Saint Helena',
'Sao Tome and Principe');



