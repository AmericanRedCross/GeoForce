/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *       on 3/27/14.
 */

angular.module('GeoAngular').controller('LayersCtrl', function($scope, $routeParams, $location, Route) {
  console.log('LayersCtrl');
  $scope.navTo = Route.navTo;
});