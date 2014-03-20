/**
 * This is the entry point of the application. We declare the main module here and then configure the main router
 * that creates corresponding views. The array parameter for module declares this module's dependencies.
 */
angular.module('GeoAngular', ['ngCookies', 'ngResource', 'ngSanitize', 'ngRoute', 'leaflet-directive']).config(function($routeProvider){

  $routeProvider.when('/', {
//        templateUrl: 'views/landing.html',
//        controller: 'LandingCtrl'
    redirectTo: '/map@0,0,2(osm)/stories/test'

  }).when('/map@:lat,:lng,:zoom(:layers*)\/stories/:stories', {
        templateUrl: 'views/app.html',
        controller: 'AppCtrl'

  }).otherwise({
    redirectTo: '/map@0,0,2(esriortho)/stories/test'
  });

});
