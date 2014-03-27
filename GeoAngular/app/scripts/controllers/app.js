angular.module('GeoAngular').controller('AppCtrl', function($scope, $routeParams, $location, Route) {
  console.log('AppCtrl');

  // weird bug where redirect peels out '://{s' when ':' is there
  // $routeParams.layers We just dont have the : in main.js so that
  // part of the path does not go away...
  $routeParams.layers = $routeParams.layers.replace('http//', 'http://');

  $scope.routeParams = $routeParams;
  $scope.$on('route-update', function (event, params) {
    $scope.routeParams = params;
  });

  // Update the route when the model is updated.
  $scope.$watchCollection('routeParams', function(newParams, oldParams) {
    Route.update(newParams);
  });

});
