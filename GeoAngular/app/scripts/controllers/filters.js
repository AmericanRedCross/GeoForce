/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *       on 3/27/14.
 */

angular.module('GeoAngular').controller('FiltersCtrl', function($scope, $routeParams, $location, Route) {
  console.log('FiltersCtrl');
  $scope.navTo = Route.navTo;
});