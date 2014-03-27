/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *       on 3/26/14.
 */

angular.module('GeoAngular').controller('StoriesCtrl', function($scope, $routeParams, $location, Route) {
  console.log('StoriesCtrl');

  $scope.navTo = Route.navTo;

});