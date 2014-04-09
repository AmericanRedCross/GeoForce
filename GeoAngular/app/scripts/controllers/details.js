/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *       on 4/9/14.
 */

angular.module('GeoAngular').controller('DetailsCtrl', function ($scope, $rootScope, $state, $stateParams, leafletData, LayerConfig, VectorProvider) {

  //Init activeTheme property
  $scope.activeTheme = "Projects";

  //Init selectedFeatureTitle property
  $scope.selectedFeatureTitle = "Philippines";

  $scope.toggleState = function(stateName) {
    var state = $state.current.name !== stateName ? stateName : 'main';
    $state.go(state, $stateParams);
  };



  //Initialize the dummy project/disaster click results - this needs to be moved to a new controller
  $scope.groupings = { 'Projects': { items: [
    {name: 'Project 1', id: 1},
    {name: 'Project 2', id: 2},
    {name: 'Project 3', id: 3},
    {name: 'RedCross Project', id: 4}
  ]}, 'Disasters': {items: [
    {name: 'Oso Landslide', id: 1},
    {name: 'Hurricane', id: 2}
  ]} };


});
