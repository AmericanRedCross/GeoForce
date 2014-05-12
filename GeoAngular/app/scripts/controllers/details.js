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

  $scope.itemsList = true;
  $scope.details = false;


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


  $scope.$on('details', function (event, featureLayer) {
    var properties = featureLayer.feature.properties;
    $scope.selectedFeatureTitle = properties.name;
    $scope.groupings = properties.details;
    $scope.toggleParam('details-panel')
  });

  $scope.showDetails = function (item) {
    $scope.itemsList = false;
    $scope.details = item;
    $scope.resizeDetailsPanel();
  };

  $scope.showList = function () {
    $scope.itemsList = true;
    $scope.details = false;
  };

  $scope.resizeDetailsPanel = function() {
    var detailsPanelTop = $('#DetailsPanel').offset().top;
//    var themeSelectorTop = $('#ThemeSelectorMenu').offset().top;
    var themeSelectorTop = 694;
    var height = themeSelectorTop - detailsPanelTop - 135;
    $('#DetailsPanel .InnerContainer ').height(height);
  }

	//Connect the layout onresize end event
	window.layout.panes.center.bind("layoutpaneonresize_end", $scope.resizeDetailsPanel);

	//For Init.
	$scope.resizeDetailsPanel();

});
