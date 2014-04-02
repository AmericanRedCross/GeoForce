angular.module('GeoAngular').controller('NavBarCtrl', function($scope, $state, $stateParams) {
  console.log('NavBarCtrl');
  $scope.params = $stateParams;

  $scope.isNotState = function (stateName) {
    return $state.$current.name !== stateName;
  }

  $scope.isState = function (stateName) {
    return $state.$current.name === stateName;
  }

});
