
angular.module('GeoAngular').controller('NavBarCtrl', function($scope, $routeParams, $location, Route) {

  $scope.navTo = Route.navTo;

});
