/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *       on 3/27/14.
 */

angular.module('GeoAngular').controller('InfoCtrl', function($scope, $routeParams, $location, Route) {
  console.log('InfoCtrl');
  $scope.navTo = Route.navTo;
});