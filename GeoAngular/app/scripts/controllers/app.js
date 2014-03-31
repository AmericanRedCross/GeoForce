angular.module('GeoAngular').controller('AppCtrl', function($scope, $rootScope, $routeParams, Route) {
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
    Route.updateLocation();
  });

  //RW - Need to figure out where to put this:
  /*var resizeTracker;
    window.resize =function () {
        map.invalidateSize();

        clearTimeout(resizeTracker);
        resizeTracker = setTimeout(function () {
            map.invalidateSize();
        }, 100);
    };*/

});
