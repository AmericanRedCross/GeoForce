/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *       on 3/27/14.
 */

angular.module('GeoAngular').controller('LayersCtrl', function($scope, $stateParams, LayerConfig) {
  console.log('LayersCtrl');
  $scope.params = $stateParams;

  $scope.navTab = 'contextual';

  debug.LayerConfig = LayerConfig;

  /**
   * Layers that are active on the map but are not mentioned in LayerConfig
   * @type {{}}
   */
  $scope.cowboyLayers = {};

  function mapLayers() {
    if (!$stateParams.layers) {
      return {};
    }
    var list = $stateParams.layers.split(',').slice(1);
    var layers = {};
    for (var i = 0, len = list.length; i < len; i++) {
      var l = list[i];
      layers[l] = true;
      // layer is not in layer config, but we need to know about it
      if (!LayerConfig[l]){
        $scope.cowboyLayers[l] = {
          name: l,
          active: true
        };
      }
    }
    return layers;
  };

  $scope.layersPanel = {
    'Boundaries': {},
    'GeoJSON': {},
    'KML': {},
    'CSV': {},
    'WMS': {},
    'Other': {}
  };


  $scope.showLayers = function () {

    for (var layerKey in LayerConfig) {

      // We don't want to show layers that are basemaps, and we dont want to show the find func.
      if (  typeof LayerConfig[layerKey] === 'function'
         || LayerConfig[layerKey] === 'basemaps'
         || LayerConfig[layerKey].type === 'basemap') {

        continue;
      }

      /**
       * Put layers in their respective categories.
       */
      if (LayerConfig[layerKey].type && LayerConfig[layerKey].type.toLowerCase() === 'bboxgeojson') {
        var layer = $scope.layersPanel.Boundaries[layerKey] = LayerConfig[layerKey];
      }

      else if (LayerConfig[layerKey].type && LayerConfig[layerKey].type.toLowerCase() === 'geojson') {
        var layer = $scope.layersPanel.GeoJSON[layerKey] = LayerConfig[layerKey];
      }

      else if (LayerConfig[layerKey].type && LayerConfig[layerKey].type.toLowerCase() === 'kml') {
        var layer = $scope.layersPanel.KML[layerKey] = LayerConfig[layerKey];
      }

      else if (LayerConfig[layerKey].type && LayerConfig[layerKey].type.toLowerCase() === 'csv') {
        var layer = $scope.layersPanel.CSV[layerKey] = LayerConfig[layerKey];
      }

      else {
        var layer = $scope.layersPanel.Other[layerKey] = LayerConfig[layerKey];
      }

      /**
       * Check if the layer is active in map layers from stateParams
       */
      var activeLayers = mapLayers();
      if (layer && activeLayers[layerKey] && activeLayers[layerKey] === true) {
        layer.active = true;
      } else {
        layer.active = false;
      }

    }
  };

  $scope.showLayers();

  debug.showLayers = debug.showLayers;
  debug.layersPanel = $scope.layersPanel;

});