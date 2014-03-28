angular.module('GeoAngular').controller('LandingCtrl', function($scope, $rootScope, $routeParams, $location, Route) {
  console.log('LandingCtrl');

  // weird bug where redirect peels out '://{s' when ':' is there
  // $routeParams.layers We just dont have the : in main.js so that
  // part of the path does not go away...
  $routeParams.layers = $routeParams.layers.replace('http//', 'http://');

  window.RouteParams = $routeParams;
  $scope.routeParams = window.RouteParams;

  RouteParams.landing = true;

  $scope.navTo = Route.navTo;

  // Update the route when the model is updated.
  $scope.$watchCollection('routeParams', function(newParams, oldParams) {
//    console.log('landing.js $watchCollection(routeParams). Updating Location...');
//    updateLocation();
  });

  function updateLocation() {
    var path = '/map@' + RouteParams.lat +
      ',' + RouteParams.lng +
      ',' + RouteParams.zoom +
      '(' + RouteParams.layers + ')';
    if (RouteParams.stories) path += '/stories/' + RouteParams.stories;
    if (RouteParams.landing) path += '/landing';

    $location.path(path);
  }

});
