/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *       on 3/26/14.
 */

angular.module('GeoAngular').controller('StoriesCtrl', function($scope, $stateParams) {
  console.log('StoriesCtrl');
  $scope.params = $stateParams;

});