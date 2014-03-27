/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *       on 3/27/14.
 */

angular.module('GeoAngular').controller('LegendCtrl', function($scope, $routeParams, $location, Route) {
  console.log('LegendCtrl');
  $scope.navTo = Route.navTo;
});