/**
 * This is the entry point of the application. We declare the main module here and then configure the main router
 * that creates corresponding views. The array parameter for module declares this module's dependencies.
 */
var GeoAngular = angular.module('GeoAngular', ['ngCookies', 'ngResource', 'ngSanitize', 'ngRoute', 'ui.router', 'ngAnimate', 'leaflet-directive', 'ui.bootstrap']);

GeoAngular.run(function ($rootScope, $state, $stateParams) {

    //For login, moving this here.  usually in global.js
    window.wait = false;

});

GeoAngular.config(function ($stateProvider, $urlRouterProvider) {


});

