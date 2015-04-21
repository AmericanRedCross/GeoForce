module.exports = angular.module('GeoAngular').controller('NavBarCtrl', function($scope, $state, $stateParams, $rootScope) {

  $scope.params = $stateParams;
  $scope.fullscreen = false;

  //If stateParams.fullScreen=true, then apply a class to the HTML body called .fullScreen

  $scope.toggleFullScreen = function(){
      //Set the stateParam to fullscreen=true
    $scope.fullscreen = !$scope.fullscreen;
    $stateParams.fullscreen = $scope.fullscreen;
    var state = $state.current.name || 'main';
    $state.go(state, $stateParams);
  }


  $rootScope.$on('fullscreen-changed', function () {
    //If the fullscreen state changes.
    if($stateParams.fullscreen == "true"){
      $scope.fullscreen  = true;
    }else{
      $scope.fullscreen  = false;
    }

  });



});
