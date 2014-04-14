/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *        and Ryan Whitley      <rwhitley@spatialdev.com>
 *       on 4/2/14.
 */

angular.module('GeoAngular').controller('ZoomExtentCtrl', function($scope, $rootScope, $stateParams, VectorProvider) {
  console.log('ZoomExtentCtrl');
  $scope.params = $stateParams;

  //Initialize the country selector menu by loading the json file and writing out the names into the panel
  $scope.countryList1 = null;
  $scope.countryList2 = null;
  $scope.countryList3 = null;
  var vecRes = VectorProvider.createResource("countryextents");
  vecRes.fetch(function(geojson){
    //Sort alphabetically
    geojson.features = geojson.features.sort(function(a,b){
      var textA = a.properties.name_0;
      var textB = b.properties.name_0;
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    });

    //Break up the file into thirds
    var length = geojson.features.length;
    $scope.countryList1 = geojson.features.slice(0, length/3);
    $scope.countryList2 = geojson.features.slice(length/3 + 1, (length/3) * 2);
    $scope.countryList3 = geojson.features.slice(((length/3) * 2) + 1, length);
  });

  //Initialize the ARC Region selector menu by loading the json file and writing out the names into the panel
  $scope.regionList1 = null;
  $scope.regionList2 = null;
  $scope.regionList3 = null;
  var vecResRegion = VectorProvider.createResource("arcregionextents");
  vecResRegion.fetch(function(geojson){
    //Sort alphabetically
    geojson.features = geojson.features.sort(function(a,b){
      var textA = a.properties.arcregion2;
      var textB = b.properties.arcregion2;
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    });

    //Break up the file into thirds
    var length = geojson.features.length;
    $scope.regionList1 = geojson.features.slice(0, 2);
    $scope.regionList2 = geojson.features.slice(2, 3);
    $scope.regionList3 = geojson.features.slice(3, 4);
  });

});
