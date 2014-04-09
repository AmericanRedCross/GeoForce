/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *       on 4/9/14.
 */

angular.module('GeoAngular').controller('DetailsCtrl', function ($scope, $rootScope, $state, $stateParams, leafletData, LayerConfig, VectorProvider) {

  //Init selectedFeatureTitle property
  $scope.selectedFeatureTitle = "Some Feature (All Categories)";

  $scope.toggleState = function(stateName) {
    var state = $state.current.name !== stateName ? stateName : 'main';
    $state.go(state, $stateParams);
  };



  //Initialize the dummy project/disaster click results
  $scope.groupings = {
    'Projects': [
      {name: 'Project 1', id: 1},
      {name: 'Project 2', id: 2},
      {name: 'Project 3', id: 3},
      {name: 'RedCross Project', id: 4}
    ],
    'Disasters': [
      {name: 'Oso Landslide', id: 1},
      {name: 'Hurricane', id: 2}
    ]
  };


  $scope.$on('feature-details', function (event, featureLayer) {
    var properties = featureLayer.feature.properties;

    $scope.selectedFeatureTitle = properties.name;

    $scope.groupings = properties.details;

  });

});
