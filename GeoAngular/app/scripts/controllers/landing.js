module.exports = angular.module('GeoAngular').controller('LandingCtrl', function($scope, $rootScope, $stateParams) {
  console.log('LandingCtrl');
  $scope.params = $stateParams;

  $rootScope.$broadcast('blur');

});
