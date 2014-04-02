/**
 * This is the entry point of the application. We declare the main module here and then configure the main router
 * that creates corresponding views. The array parameter for module declares this module's dependencies.
 */
var GeoAngular = angular.module('GeoAngular', ['ngCookies', 'ngResource', 'ngSanitize', 'ngRoute', 'ui.router', 'ngAnimate', 'leaflet-directive']);

GeoAngular.run(function ($rootScope, $state, $stateParams) {

  // It's very handy to add references to $state and $stateParams to the $rootScope
  // so that you can access them from any scope within your applications.For example,
  // <li ui-sref-active="active }"> will set the <li> // to active whenever
  // 'contacts.list' or one of its decendents is active.
  $rootScope.$state = $state;
  $rootScope.$stateParams = $stateParams;

  window.$state = $state;
  window.$stateParams = $stateParams;

});

GeoAngular.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider
    //NH TODO: do this differently. This way is just nice for deving.
    .when('/landing', '/map@0,0,2(redcross,gdacstest)/landing')
    .when('/main', '/map@0,0,2(redcross,gdacstest)')
    .otherwise('/map@0,0,2(pinterest,phl)/landing');

  $stateProvider
    .state('main', {
      url: '/map@:lat,:lng,:zoom(*layers)',
      views: {
        'details': {
          template: 'in main state',
          controller: 'AppCtrl'
        }
      }
    })
    .state('landing', {
      url: '/map@:lat,:lng,:zoom(*layers)/landing',
      views: {
        'details': {
          template: 'in landing state',
          controller: 'AppCtrl'
        },
        'landing': {
          templateUrl: 'views/landing.html',
          controller: 'LandingCtrl'
        }
      }
    });

});





//GeoAngular.config(function($routeProvider){
//
//  $routeProvider.when('/', {
//    redirectTo: '/map@0,0,2(pinterest,gdacstest)'
//
//  }).when('/map@:lat,:lng,:zoom(:layers*)\/landing', {
//        templateUrl: 'views/landing.html',
//        controller: 'LandingCtrl'
//
//  }).when('/map@:lat,:lng,:zoom(:layers*)', {
//        templateUrl: 'views/app.html',
//        controller: 'AppCtrl'
//
//  }).when('/map@:lat,:lng,:zoom(:layers*)\/stories', {
//    templateUrl: 'views/stories.html',
//    controller: 'StoriesCtrl'
//
//  }).when('/map@:lat,:lng,:zoom(:layers*)\/layers', {
//    templateUrl: 'views/layers.html',
//    controller: 'LayersCtrl'
//
//  }).when('/map@:lat,:lng,:zoom(:layers*)\/filters', {
//    templateUrl: 'views/filters.html',
//    controller: 'FiltersCtrl'
//
//  }).when('/map@:lat,:lng,:zoom(:layers*)\/legend', {
//    templateUrl: 'views/legend.html',
//    controller: 'StoriesCtrl'
//
//  }).when('/map@:lat,:lng,:zoom(:layers*)\/info', {
//    templateUrl: 'views/info.html',
//    controller: 'InfoCtrl'
//
//  }).when('/map@:lat,:lng,:zoom(:layers*)\/basemaps', {
//      templateUrl: 'views/basemaps.html',
//      controller: 'BasemapsCtrl'
//
//  }).otherwise({
//    redirectTo: '/map@0,0,2(redcross,phl)'
//  });
//
//});
