/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *       on 3/27/14.
 */

angular.module('GeoAngular').controller('LayersCtrl', function($scope, $stateParams, LayerConfig) {
  console.log('LayersCtrl');
  $scope.params = $stateParams;

  $scope.navTab = 'contextual';

  debug.LayerConfig = LayerConfig;

  $scope.allProjects = {
    lat: -19.808054,
    lng: 31.508789,
    zoom: 6,
    layers: 'pinterest,allprojects'
  };

  $scope.smartGadm = {
    lat: 43.468868,
    lng: -106.638794,
    zoom: 9,
    layers: 'ortho,smartgadm'
  };

  $scope.gdacsKml = {
    lat: 0,
    lng: 0,
    zoom: 2,
    layers: 'osmhot,http://www.gdacs.org/xml/gdacs.kml'
  };

  $scope.gadm0 = {
    lat: -19.808054,
    lng: 31.508789,
    zoom: 6,
    layers: 'pinterest,allprojects'
  };

  $scope.gadm1 = {
    lat: -19.808054,
    lng: 31.508789,
    zoom: 6,
    layers: 'pinterest,allprojects'
  };

  $scope.gadm2 = {
    lat: -19.808054,
    lng: 31.508789,
    zoom: 6,
    layers: 'pinterest,allprojects'
  };

  $scope.gadm3 = {
    lat: -19.808054,
    lng: 31.508789,
    zoom: 6,
    layers: 'pinterest,allprojects'
  };

  $scope.earthquakesKml = {
    lat: -19.808054,
    lng: 31.508789,
    zoom: 6,
    layers: 'pinterest,allprojects'
  };

  $scope.standardGeoJson = {
    lat: -19.808054,
    lng: 31.508789,
    zoom: 6,
    layers: 'pinterest,allprojects'
  };

});