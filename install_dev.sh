#!/usr/bin/env bash
echo !!! INSTALLING MAPFOLIO SERVER PRODUCTION !!!
echo CLONING GIT REPOSITORY FROM GITHUB
rm -rf GeoForce
git clone https://github.com/AmericanRedCross/GeoForce.git
git checkout origin development
echo COPYING SETTINGS FILES AND SSL CERTIFICATES
cp settings/chubbs_settings_prod.js GeoForce/Chubbs/private/settings.js
cp settings/succubus_settings_prod.js GeoForce/Succubus/settings.js
cp ssl_keys/geo.cer GeoForce/Chubbs/private/geo.cer
cp ssl_keys/geo.pfx GeoForce/Chubbs/private/geo.pfx
echo INSTALLING MAPFOLIO DEPENDENCIES
cd GeoAngular/app/lib/Leaflet.MapboxVectorTile
npm install
echo BUILDING geo-angular.js
cd ../../../
npm run-script build
echo INSTALLING CHUBBS DEPENDENCIES
cd ../Chubbs
npm install
echo INSTALLING GEOANGULAR DEPENDENCIES
cd ../GeoAngular
npm install
echo INSTALLING SUCCUBUS DEPENDENCIES
cd ../Succubus
npm install
echo RUNNING SUCCUBUS PREPERATION SCRIPTS
node preprocessing_operations/meta.js
echo !!! SUCCESS !!!