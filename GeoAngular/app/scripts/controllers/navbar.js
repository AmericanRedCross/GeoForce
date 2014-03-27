angular.module('GeoAngular').controller('NavBarCtrl', function($scope, $routeParams, $location, Route) {
  console.log('NavBarCtrl');
  $scope.navTo = Route.navTo;
});
