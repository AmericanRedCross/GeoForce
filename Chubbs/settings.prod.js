//Settings.js is not part of the repository.  However, it should be deployed with the application and contain deployment-specific settings.
//There is a settings.js.example file that should match the structure and properties of this file that IS checked in to the repo.
var settings = {};
var settingsNonsensitive = require("./settingsNonsensitive.js");

//Bring in the non sensitive stuff.
settings = settingsNonsensitive;

//Change to 'production' or 'test' depending on deployment.
process.env.NODE_ENV = 'development';

//Optional setting to load SpatialServer in WebViz Search mode
//settings.application.mode = "webviz";  //webviz or geoforce (or leave blank for geoforce ,will load by default).

//application port settings
settings.application.port = 3001;
settings.application.ip = "localhost";

//Enable Security?
settings.enableSecurity = false;

//SSL Settings
settings.ssl = {};
settings.ssl.pfx = 'geo.pfx';
settings.ssl.password = 'Amer1can$$';

//Express Session Secret
settings.expressSessionSecret = "specialsecret";

//Settings for postgres DB
settings.pg.username = 'postgres';
settings.pg.password = 'R3dcr0ss1';
settings.pg.server = 'redcrossgeo.colkd43xjmvs.us-west-2.rds.amazonaws.com';
settings.pg.port = '5432';
settings.pg.database = 'redcross_exp';
settings.pg.featureLimit = 1000; //how many features to return by default

//PROD SalesForce OAUTH settings
settings.salesforce = {};
settings.salesforce.ConsumerKey = "3MVG9rFJvQRVOvk7XZDhmVBe80WWTKPhXR7NTCe54twlN_wZ0dVpXrss8AS16OT6Ro.VTBe7XTUDVlsdh_jcW"; //clientID
settings.salesforce.ClientSecret = "6309669959839545455";
settings.salesforce.Scope = ["id", "profile"];
settings.salesforce.CallbackURL = "https://geo.redcross.org/oauth2/callback";
settings.salesforce.authorizationURL = 'https://na14.salesforce.com/services/oauth2/authorize';
settings.salesforce.tokenURL = 'https://na14.salesforce.com/services/oauth2/token';

//Dev SalesForce OAUTH
//settings.salesforce = {};
//settings.salesforce.ConsumerKey = "3MVG98RqVesxRgQ6CLigEoPB8i1LoxaQ9ZBQsnktbqvSiK9D_II0AiEtjkzNa.p93eYgg_EwTQ3FXt0OtF8om"; //clientID
//settings.salesforce.ClientSecret = "2833705175389639412";
//settings.salesforce.Scope = ["id", "profile"];
//settings.salesforce.CallbackURL = "https://geo.redcross.org/oauth2/callback";
//settings.salesforce.authorizationURL = 'https://cs19.salesforce.com/services/oauth2/authorize';
//settings.salesforce.tokenURL = 'https://cs19.salesforce.com/services/oauth2/token';

module.exports = settings;