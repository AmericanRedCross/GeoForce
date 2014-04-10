/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *       on 3/27/14.
 */

angular.module('GeoAngular').controller('LayersCtrl', function($scope) {
  console.log('LayersCtrl');
  $scope.params = $stateParams;

  $scope.allProjects = {
    lat: -19.808054,
    lng: 31.508789,
    zoom: 6,
    layers: 'pinterest,allprojects'
  };

  $scope.smartGadm = {
    lat: -19.808054,
    lng: 31.508789,
    zoom: 6,
    layers: 'pinterest,allprojects'
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