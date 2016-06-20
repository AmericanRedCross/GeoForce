//Settings file for the application
var settings = {}

settings.application = {};

//node.js application port settings
settings.application.port = 3000;

//google Anlaytics - remove these 3 lines or leave empty if you don't want to use.
settings.ga = {};
settings.ga.key = "UA-100000000-0";
settings.ga.domain = "yourdomain.com";

module.exports = settings;
