echo !!! INSTALLING MAPFOLIO !!!
echo CLONING GIT REPOSITORY FROM GITHUB
rm -rf GeoForce
git clone https://github.com/AmericanRedCross/GeoForce.git
echo COPYING SETTINGS FILES
cp settings/chubbs_settings_dev.js GeoForce/Chubbs/private/settings.js
cp settings/succubus_settings_dev.js GeoForce/Succubus/settings.js
echo INSTALLING CHUBBS DEPENDENCIES
cd GeoForce/Chubbs
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
