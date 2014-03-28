/**
 * Created by Ryan Whitley <rwhitley@spatialdev.com>
 *       on 3/28/14.
 */

angular.module('GeoAngular').controller('BasemapsCtrl', function($scope, $routeParams, $location, Route) {
  console.log('BasemapsCtrl');

  $scope.navTo = Route.navTo;

});