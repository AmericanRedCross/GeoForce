/**
 * This is the entry point of the application. We declare the main module here and then configure the main router
 * that creates corresponding views. The array parameter for module declares this module's dependencies.
 */
angular.module('GeoAngular', ['ngCookies', 'ngResource', 'ngSanitize', 'ngRoute', 'leaflet-directive']).config(function($routeProvider){

  $routeProvider.when('/', {
    redirectTo: '/map@0,0,2(pinterest,phl)/landing'

  }).when('/map@:lat,:lng,:zoom(:layers*)\/landing', {
        templateUrl: 'views/landing.html',
        controller: 'LandingCtrl'

  }).when('/map@:lat,:lng,:zoom(:layers*)', {
        templateUrl: 'views/app.html',
        controller: 'AppCtrl'

  }).when('/map@:lat,:lng,:zoom(:layers*)\/stories/:stories', {
        templateUrl: 'views/app.html',
        controller: 'AppCtrl'

  }).when('/stories', {
        templateUrl: 'views/stories.html',
        controller: 'StoriesCtrl'

  }).when('/stories/:stories', {
      templateUrl: 'views/stories.html',
      controller: 'StoriesCtrl'

  }).otherwise({
    redirectTo: '/map@0,0,2(redcross,phl)'
  });

});
