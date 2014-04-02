angular.module('GeoAngular').controller('LandingCtrl', function($scope, $rootScope, $stateParams) {
  console.log('LandingCtrl');

  $rootScope.$broadcast('blur');

  $scope.params = $stateParams;
});
