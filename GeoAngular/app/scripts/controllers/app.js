angular.module('GeoAngular').controller('AppCtrl', function($scope, $rootScope, $state, $stateParams, Route) {
  console.log('AppCtrl');

  // weird bug where redirect peels out '://{s' when ':' is there
  // $routeParams.layers We just dont have the : in main.js so that
  // part of the path does not go away...
  $stateParams.layers = $stateParams.layers.replace('http//', 'http://');

  window.RouteParams = $stateParams;
  $scope.routeParams = window.RouteParams;

  RouteParams.landing = false;

  // Update the route when the model is updated.
  $scope.$watchCollection('routeParams', function(newParams, oldParams) {
    console.log('app.js $watchCollection(routeParams).');
    $rootScope.$broadcast('route-update');
    Route.updateLocation();
  });
});
