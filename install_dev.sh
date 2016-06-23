#!/usr/bin/env bash
echo !!! INSTALLING MAPFOLIO SERVER DEVELOPMENT !!!
echo CLONING GIT REPOSITORY FROM GITHUB
rm -rf GeoForce
git clone https://github.com/AmericanRedCross/GeoForce.git
cd GeoForce/
sudo git checkout development
echo COPYING SETTINGS FILES AND SSL CERTIFICATES
cp ~/Mapfolio/settings/chubbs_settings_dev.js ~/Mapfolio/GeoForce/Chubbs/private/settings.js
cp ~/Mapfolio/settings/succubus_settings_dev.js ~/Mapfolio/GeoForce/Succubus/settings.js
cp ~/Mapfolio/ssl_keys/geo.cer ~/Mapfolio/GeoForce/Chubbs/private/geo.cer
cp ~/Mapfolio/ssl_keys/geo.pfx ~/Mapfolio/GeoForce/Chubbs/private/geo.pfx
echo INSTALLING MAPFOLIO DEPENDENCIES
cd ~/Mapfolio/GeoForce/GeoAngular/app/lib/Leaflet.MapboxVectorTile/
npm install
echo INSTALLING GEOANGULAR DEPENDENCIES
cd ~/Mapfolio/GeoForce/GeoAngular/
npm install
echo BUILDING geo-angular.js
cd ~/Mapfolio/GeoForce/GeoAngular
sudo npm run-script build
echo INSTALLING CHUBBS DEPENDENCIES
cd ~/Mapfolio/GeoForce/Chubbs
npm install
echo INSTALLING SUCCUBUS DEPENDENCIES
cd ~/Mapfolio/GeoForce/Succubus
npm install
echo RUNNING SUCCUBUS PREPERATION SCRIPTS
sudo node ~/Mapfolio/GeoForce/Succubus/preprocessing_operations/meta.js
echo RESTART Chubbs
cd ~/Mapfolio/GeoForce/Chubbs
sudo pm2 restart all
echo !!! SUCCESS !!!