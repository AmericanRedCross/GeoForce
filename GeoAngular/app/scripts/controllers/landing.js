angular.module('GeoAngular').controller('LandingCtrl', function($scope, $routeParams, $location, Route) {

  // weird bug where redirect peels out '://{s' when ':' is there
  // $routeParams.layers We just dont have the : in main.js so that
  // part of the path does not go away...
  $routeParams.layers = $routeParams.layers.replace('http//', 'http://');

  $routeParams.landing = true;

  Route($routeParams);

});
