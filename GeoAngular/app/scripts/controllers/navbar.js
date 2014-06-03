module.exports = angular.module('GeoAngular').controller('NavBarCtrl', function($scope, $state, $stateParams) {
  console.log('NavBarCtrl');
  $scope.params = $stateParams;



//  $scope.toggleState = function(stateName) {
//    var state = $state.current.name !== stateName ? stateName : 'main';
//    $state.go(state, $stateParams);
//    $scope['is'+stateName[0].toUpperCase()+stateName.slice(1)+'Active'] = false;
//  };




});
