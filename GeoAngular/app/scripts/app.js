'use strict';

angular.module('GeoAngular', [
        'ngCookies',
        'ngResource',
        'ngSanitize',
        'ngRoute'
    ])
    .config(function ($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'

        }).when('/:map*\/stories/:stories', {
            templateUrl: 'views/nh1.html',
            controller: 'NH1Ctrl'

        }).otherwise({
            redirectTo: '/'
        });

    });
