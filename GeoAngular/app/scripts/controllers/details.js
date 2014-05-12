/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *       on 4/9/14.
 */

angular.module('GeoAngular').controller('DetailsCtrl', function ($scope, $rootScope, $state, $stateParams, leafletData, LayerConfig, VectorProvider) {

  //Init selectedFeatureTitle property
  $scope.selectedFeatureTitle = "Feature Details";

  $scope.toggleState = function(stateName) {
    var state = $state.current.name !== stateName ? stateName : 'main';
    $state.go(state, $stateParams);
  };

  $scope.itemsList = true;
  $scope.details = false;


  //Initialize the dummy project/disaster click results
  $scope.groupings = {
    'Please click on a badge or feature to see details...': []
  };


  $scope.$on('details', function (event, featureLayer) {
    var properties = featureLayer.feature.properties;
    $scope.feature = featureLayer.feature;
    $scope.selectedFeatureTitle = properties.name || properties.title || 'Selected Feature';
    if (properties.details) { // theme badge selected
      $scope.groupings = properties.details;
      $scope.showList();
    } else { // standard geojson, show properties as details
      $scope.showDetails(properties);
    }

    $scope.toggleParam('details-panel');
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
    var height = themeSelectorTop - detailsPanelTop - 150;
    $('#DetailsPanel .InnerContainer ').height(height);
  };

	//Connect the layout onresize end event
	window.layout.panes.center.bind("layoutpaneonresize_end", $scope.resizeDetailsPanel);

	//For Init.
	$scope.resizeDetailsPanel();

  $scope.save = function (data, name) {
    var json = JSON.stringify(data, null, 2);
    var blob = new Blob([json], {type:'text/plain'});
    var downloadLink = document.createElement("a");
    var url = (window.webkitURL != null ? window.webkitURL : window.URL);
    downloadLink.href = url.createObjectURL(blob);
    downloadLink.download = name || 'feature.geojson';
    downloadLink.click();
  };

});
