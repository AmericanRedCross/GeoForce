angular.module('GeoAngular').controller('NavBarCtrl', function($scope, $stateParams) {
  console.log('NavBarCtrl');
  $scope.params = $stateParams;
});
