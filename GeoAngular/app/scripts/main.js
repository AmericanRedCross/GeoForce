(function () { 'use strict';

angular.module('GeoAngular', ['ngCookies', 'ngResource', 'ngSanitize', 'ngRoute', 'leaflet-directive']).config(Routes);


function Routes($routeProvider) {
    $routeProvider.when('/', {
//        templateUrl: 'views/landing.html',
//        controller: 'LandingCtrl'
        redirectTo: '/map@0,0,2(http//{s}.tile.osm.org/{z}/{x}/{y}.png,layer2,layer3)/stories/test'

    }).when('/map@:lat,:lng,:zoom(:layers*)\/stories/:stories', {
        templateUrl: 'views/app.html',
        controller: 'AppCtrl'

    }).otherwise({
        redirectTo: '/map@0,0,2(otherwise)/stories/test'
    });
}


})();