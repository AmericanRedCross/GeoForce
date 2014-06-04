/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *       on 3/27/14.
 */

module.exports = angular.module('GeoAngular').controller('LayersCtrl', function($scope, $state, $stateParams, LayerConfig) {
  console.log('LayersCtrl');
  $scope.params = $stateParams;

  $scope.navTab = 'contextual';

  debug.LayerConfig = LayerConfig;

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
       || layerKey === 'basemaps'
       || layerKey === 'bbox'
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

    else if (LayerConfig[layerKey].type && LayerConfig[layerKey].type.toLowerCase() === 'wms') {
      $scope.layersPanels.WMS[layerKey] = LayerConfig[layerKey];
    }

    else {
      $scope.layersPanels.Other[layerKey] = keyToObj(layerKey);
    }

  }

  debug.layersPanels = $scope.layersPanels;

  function keyToObj(key) {
    val = LayerConfig[layerKey];
    if (typeof val === 'string') {
      return {
        url: val
      };
    }
    return val;
  }

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
    var mapLayers = $scope.mapLayers = $stateParams.layers.split(',');
    // skip the first layer, the basemap
    for (var i = 1, len = mapLayers.length; i < len; i++) {
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


  $scope.toggleMapLayer = function (layerKey, layer) {

    // add layer
    if (layer.active === true) {
      $scope.mapLayers.push(layerKey);

    // remove layer
    } else {
      $scope.mapLayers = $.grep($scope.mapLayers, function(routeLayer){
        return routeLayer !== layerKey;
      });
    }

    $stateParams.layers = $scope.mapLayers.join(',');
    var state = $state.current.name || 'main';
    $state.go(state, $stateParams);

  };

});
