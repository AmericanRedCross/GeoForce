/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *       on 3/27/14.
 */

angular.module('GeoAngular').controller('LayersCtrl', function($scope, $stateParams, LayerConfig) {
  console.log('LayersCtrl');
  $scope.params = $stateParams;

  $scope.navTab = 'contextual';

  debug.LayerConfig = LayerConfig;

//  function mapLayers() {
//    if (!$stateParams.layers) {
//      return {};
//    }
//    var list = $stateParams.layers.split(',').slice(1);
//    var layers = {};
//    for (var i = 0, len = list.length; i < len; i++) {
//      var l = list[i];
//      l.active = true;
//      layers[l] = l;
//      // layer is not in layer config, but we need to know about it
//      if (!LayerConfig[l]){
//        $scope.cowboyLayers[l] = {
//          name: l,
//          active: true
//        };
//      }
//    }
//    return layers;
//  }

  $scope.layersPanels = {
    'Boundaries': {},
    'GeoJSON': {},
    'KML': {},
    'CSV': {},
    'WMS': {},
    'Other': {}
  };


  for (var layerKey in LayerConfig) {

    // We don't want to show layers that are basemaps, and we don't want to show the find func.
    if (  typeof LayerConfig[layerKey] === 'function'
       || LayerConfig[layerKey] === 'basemaps'
       || LayerConfig[layerKey].type === 'basemap') {

      continue;
    }

    /**
     * Put layers in their respective categories.
     */
    if (LayerConfig[layerKey].type && LayerConfig[layerKey].type.toLowerCase() === 'bboxgeojson') {
      $scope.layersPanels.Boundaries[layerKey] = LayerConfig[layerKey];
    }

    else if (LayerConfig[layerKey].type && LayerConfig[layerKey].type.toLowerCase() === 'geojson') {
      $scope.layersPanels.GeoJSON[layerKey] = LayerConfig[layerKey];
    }

    else if (LayerConfig[layerKey].type && LayerConfig[layerKey].type.toLowerCase() === 'kml') {
      $scope.layersPanels.KML[layerKey] = LayerConfig[layerKey];
    }

    else if (LayerConfig[layerKey].type && LayerConfig[layerKey].type.toLowerCase() === 'csv') {
      $scope.layersPanels.CSV[layerKey] = LayerConfig[layerKey];
    }

    else {
      $scope.layersPanels.Other[layerKey] = LayerConfig[layerKey];
    }

  }

  debug.layersPanels = $scope.layersPanels;


  /**
   * Layers that are active on the map but are not mentioned in LayerConfig
   * @type {{}}
   */
  $scope.nomadLayers = {};


  /**
   * When the route changes, we should see what layers we have on there and have the layers
   * in the panels checked accordingly.
   */
  $scope.$on('route-update', function() {
    if (!$stateParams.layers) {
      return;
    }

    // reset the nomad layers
    for (var nk in $scope.nomadLayers) {
      $scope.nomadLayers[nk].active = false;
    }

    // reset the layer config layers
    for (var lck in LayerConfig) {
      if (typeof LayerConfig[lck] === 'object' && LayerConfig[lck] !== null) {
        LayerConfig[lck].active = false;
      }
    }

    /**
     * Check if the layer is active in map layers from stateParams
     */
    var mapLayers = $stateParams.layers.split(',').slice(1);
    for (var i = 0, len = mapLayers.length; i < len; i++) {
      var l = mapLayers[i];
      // layer is in the layer config
      if (typeof LayerConfig[l] === 'object' && LayerConfig[l] !== null) {
        LayerConfig[l].active = true;
      // layer is a not in the layer config. it's nomadic.
      } else {
        $scope.nomadLayers[l] = {
          name: l,
          url: l,
          active: true
        }
      }
    }
  });
});
