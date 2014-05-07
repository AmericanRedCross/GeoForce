/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *       on 3/27/14.
 */

angular.module('GeoAngular').controller('FiltersCtrl', function($scope, $http) {
  console.log('FiltersCtrl');
  $scope.params = $stateParams;

  $scope.navTab = 'sectors';

  $http.get('services/custom/custom_operation?name=getprojectsectorlist&format=json', {cache: true}).success(function (data, status) {
    console.log(JSON.stringify(data));
  }).error(function() {
    console.error("Unable to fetch project sector list");
  });

  $scope.customFilter = function () {

  };

});