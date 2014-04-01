/**
 * This is the entry point of the application. We declare the main module here and then configure the main router
 * that creates corresponding views. The array parameter for module declares this module's dependencies.
 */
angular.module('GeoAngular', ['ngCookies', 'ngResource', 'ngSanitize', 'ngRoute', 'leaflet-directive']).config(function($routeProvider){

  $routeProvider.when('/', {
    redirectTo: '/map@0,0,2(pinterest,gdacstest)'

  }).when('/map@:lat,:lng,:zoom(:layers*)\/landing', {
        templateUrl: 'views/landing.html',
        controller: 'LandingCtrl'

  }).when('/map@:lat,:lng,:zoom(:layers*)', {
        templateUrl: 'views/app.html',
        controller: 'AppCtrl'

  }).when('/map@:lat,:lng,:zoom(:layers*)\/stories', {
    templateUrl: 'views/stories.html',
    controller: 'StoriesCtrl'

  }).when('/map@:lat,:lng,:zoom(:layers*)\/stories/:stories', {
    templateUrl: 'views/stories.html',
    controller: 'StoriesCtrl'

  }).when('/map@:lat,:lng,:zoom(:layers*)\/layers', {
    templateUrl: 'views/layers.html',
    controller: 'LayersCtrl'

  }).when('/map@:lat,:lng,:zoom(:layers*)\/layers/:layers', {
    templateUrl: 'views/layers.html',
    controller: 'LayersCtrl'

  }).when('/map@:lat,:lng,:zoom(:layers*)\/filters', {
    templateUrl: 'views/filters.html',
    controller: 'FiltersCtrl'

  }).when('/map@:lat,:lng,:zoom(:layers*)\/filters/:filters', {
    templateUrl: 'views/filters.html',
    controller: 'FiltersCtrl'

  }).when('/map@:lat,:lng,:zoom(:layers*)\/legend', {
    templateUrl: 'views/legend.html',
    controller: 'StoriesCtrl'

  }).when('/map@:lat,:lng,:zoom(:layers*)\/legend/:legend', {
    templateUrl: 'views/legend.html',
    controller: 'StoriesCtrl'

  }).when('/map@:lat,:lng,:zoom(:layers*)\/info', {
    templateUrl: 'views/info.html',
    controller: 'InfoCtrl'

  }).when('/map@:lat,:lng,:zoom(:layers*)\/info/:info', {
    templateUrl: 'views/info.html',
    controller: 'InfoCtrl'

  }).when('/map@:lat,:lng,:zoom(:layers*)\/basemaps', {
      templateUrl: 'views/basemaps.html',
      controller: 'BasemapsCtrl'

  }).when('/map@:lat,:lng,:zoom(:layers*)\/basemaps/:basemaps', {
      templateUrl: 'views/basemaps.html',
      controller: 'BasemapsCtrl'

  }).otherwise({
    redirectTo: '/map@0,0,2(redcross,phl)'
  });

});
