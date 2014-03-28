angular.module('GeoAngular').controller('AppCtrl', function($scope, $rootScope, $routeParams, $location, RouteParser) {
  console.log('AppCtrl');

  // weird bug where redirect peels out '://{s' when ':' is there
  // $routeParams.layers We just dont have the : in main.js so that
  // part of the path does not go away...
  $routeParams.layers = $routeParams.layers.replace('http//', 'http://');

  window.RouteParams = $routeParams;
  $scope.routeParams = window.RouteParams;

  RouteParams.landing = false;

  // Update the route when the model is updated.
  $scope.$watchCollection('routeParams', function(newParams, oldParams) {
    console.log('app.js $watchCollection(routeParams).');
    $rootScope.$broadcast('route-update');
    updateLocation();
  });

  function updateLocation() {
    var oldParams = RouteParser();
    if (  oldParams.lat !== RouteParams.lat   ||
          oldParams.lng !== RouteParams.lng   ||
          oldParams.zoom !== RouteParams.zoom ||
          oldParams.layers !== RouteParams.layers  ) {

      console.log('Updating location...');
      var path = '/map@' + RouteParams.lat +
        ',' + RouteParams.lng +
        ',' + RouteParams.zoom +
        '(' + RouteParams.layers + ')';

      $location.path(path);
    }

  }

});
