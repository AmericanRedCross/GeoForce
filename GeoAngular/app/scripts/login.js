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
  $urlRouterProvider
    .when('/landing', '/map@35.029996,-89.340820,4(redcross,themecount)/landing')
    .when('/main', '/map@35.029996,-89.340820,4(redcross,smartgadm)');

  $stateProvider
    .state('landing', {
      url: '/map@:lat,:lng,:zoom(*layers)/landing?title&zoom-extent&stories&layers-panel&filters-panel&filters&legend&basemaps&info&theme&details-panel&search-panel',
      views: {
        'details': {
          template: ' ',
          controller: 'MainCtrl'
        },
        'landing': {
          templateUrl: 'views/landing.html',
          controller: 'LandingCtrl'
        }
      }
    })

});

