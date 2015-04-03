/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *       on 3/27/14.
 */

module.exports = angular.module('GeoAngular').controller('LayersCtrl', function($scope, $state, $stateParams, LayerConfig, VectorProvider, $rootScope) {
  $scope.params = $stateParams;
  $scope.zoom = parseInt($stateParams.zoom);
  $scope.navTab = 'contextual';

  debug.LayerConfig = LayerConfig;
  debug.setGadmLevel = VectorProvider.setGadmLevel;

  $scope.gadmLevel = $rootScope.level || 0;

  $scope.themeLabels = { isChecked: $stateParams.themelabels || true };

  $scope.theme = { isChecked: true };

  $scope.themeLayer = LayerConfig.theme;

  $scope.updateGadm = function (level) {
    $scope.gadmLevel = level || 0;
  };

  $scope.updateThemeLabel = function() {
    if ($scope.themeLabels.isChecked === true) {
      $stateParams.themelabels = 'true';
    }
    else {
      //remove from stateparams
      $stateParams.themelabels = 'false';
    }

    var state = $state.current.name || 'main';
    $state.go(state, $stateParams);
  }

  //Toggle ECOS Layer - if off, then turn on and vice versa.
  $scope.updateTheme = function() {

    var layersArray;

    if($stateParams.layers){
      layersArray = $stateParams.layers.split(",");
    }
    else{
      return;
    }


    if ($scope.theme.isChecked === true) {


      //Remove all GADM layers.
      angular.forEach(layersArray, function (value, key) {
        if (LayerConfig.themeLayers.indexOf(value) > -1) {
          layersArray.splice(layersArray.indexOf(value), 1); //remove any GADMs
        }
      });

      //Add in the gadm layer to the layers list in the stateparams.
      layersArray.push("gadm" + $scope.gadmLevel);
      $stateParams.layers = layersArray.join(",");


    }
    else {
      //remove from stateparams
      //Remove all GADM layers.
      angular.forEach(layersArray, function (value, key) {
        if (LayerConfig.themeLayers.indexOf(value) > -1) {
          layersArray.splice(layersArray.indexOf(value), 1); //remove any GADMs
        }
      });

      $stateParams.layers = layersArray.join(",");
    }

    var state = $state.current.name || 'main';
    $state.go(state, $stateParams);

  }


  $scope.$watch('gadmLevel', function (newValue) {
    $scope.updateTheme();
  });

  //$scope.$on('level-update', function () {
  //  VectorProvider.setGadmLevel($stateParams.level);
  //  $scope.gadmLevel = $stateParams.level
  //});

  $scope.$on('zoom-update', function () {
    $scope.zoom = parseInt($stateParams.zoom);
  });


  /**
   * This is the collection of all of the layers we have.
   * This is used by the searchLayersFilter.
   */
  $scope.allLayers = {};
  // building the allLayers model
  for (var k in LayerConfig) {
    var layer = LayerConfig[k];

    // We don't want to show layers that are basemaps, and we don't want to show the find func.
      if (  typeof layer === 'function'
      || k === 'basemaps'
      || k === 'bbox'
      || layer.type === 'basemap' ) {

      continue;
    }

    $scope.allLayers[k] = keyToObj(k);
  }

  $scope.layersPanels = {
//    'Boundaries': {},
//    'GeoJSON': {},
//    'KML': {},
//    'CSV': {},
//    'WMS': {},
    'Contextual layers:': {}
  };

  function buildLayersModel() {
    $scope.layersPanels['Contextual layers:'] = {};
    for (var layerKey in LayerConfig) {
      var layer = LayerConfig[layerKey];

      // We don't want to show layers that are basemaps, and we don't want to show the find func.
      if (  typeof layer === 'function'
        || layerKey === 'basemaps'
        || layerKey === 'bbox'
        || layer.type === 'basemap' ) {

        continue;
      }

      if (!$scope.$stateParams.theme) {
        var theme = 'project';
      } else {
        var theme = $scope.$stateParams.theme.toLowerCase();
      }

      if (!layer.theme || (layer.theme.toLowerCase() !== 'all' && layer.theme.toLowerCase() !== theme) ) {
        continue
      }

      $scope.layersPanels['Contextual layers:'][layerKey] = keyToObj(layerKey);

    }
  }
  buildLayersModel();

  debug.layersPanels = $scope.layersPanels;

  function keyToObj(key) {
    var val = LayerConfig[key];
    if (typeof val === 'string') {
      return {
        url: val
      };
    }
    return val;
  }

  //NH TODO: Not yet fully implemented - possible extra feature...
  /**
   * Layers that are active on the map but are not mentioned in LayerConfig
   * @type {{}}
   */
  $scope.nomadLayers = {};


  /**
   * When the route changes, we should see what layers we have on there and have the layers
   * in the panels checked accordingly.
   */
  $scope.$on('layers-update', function(evt, layers) {

    buildLayersModel();

    // github gists
    $scope.listGists();

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
     * Check if the layer is active in map layers
     * Force gadm0 on disaster themes
     */

    var theme = $stateParams.theme;

    //force gadm0 on disaster themes when user changes gadm level
    if(theme.indexOf('disaster')!==-1 && $stateParams.layers.split(",")[1] !== 'gadm0'){
      var layersArray;

      if($stateParams.layers){
        layersArray = $stateParams.layers.split(",");
      }

      //Remove all GADM layers.
      layersArray.forEach(function (value, key) {
        if (LayerConfig.themeLayers.indexOf(value) > -1) {
          layersArray.splice(layersArray.indexOf(value), 1); //remove any GADMs
        }
      });

      //Add in the gadm layer to the layers list in the stateparams.
      layersArray.push("gadm0");
      $stateParams.layers = layersArray.join(",");
    }


    $scope.mapLayers = layersArray;
    // skip the first layer, the basemap
    for (var i = 1, len = layers.length; i < len; i++) {
      var l = layers[i];
      // layer is in the layer config
      if (typeof LayerConfig[l] === 'object' && LayerConfig[l] !== null) {
        LayerConfig[l].active = true;
      }
      // layer is a github gist
      else if ($scope.gists[l]) {
        $scope.gists[l].active = true;
      }
      // layer is a not in the layer config. it's nomadic.
      else {
        $scope.nomadLayers[l] = {
          name: l,
          url: l,
          active: true
        }
      }
    }

    var state = $state.current.name || 'main';
    $state.go(state, $stateParams);
  });

  $scope.$on('route-update', function() {
    //Check the stateParams
    //Specifically, see about the label properties being checked.

    var checked;

    //See if we should show theme badges/bubbles or not
    if($stateParams.themelabels !== null && $stateParams.themelabels !== undefined){
      checked = $stateParams.themelabels;
    }
    else{
      //if not present, default to true
      checked = 'true';
    }

    $scope.themeLabels = { isChecked: (checked == 'true' ? true : false) };

    //See which, if any, gadm levels is active
    if($rootScope.level){
      $scope.gadmLevel = $rootScope.level;
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


  $scope.listGists = function () {
    $scope.gists = gists.fetch();
    if ($scope.gists) {
      $scope.numGists = Object.keys($scope.gists).length;
    } else {
      $scope.numGists = 0;
    }
  };
  $scope.listGists();
  debug.gistsLayersPanel = $scope.gists;

  $scope.searchLayers = $scope.allLayers;

  $scope.search = function(searchText) {
    var layers = $scope.allLayers;
    if (typeof searchText === 'string') {
      searchText = searchText.toLowerCase();
    } else {
      $scope.searchLayers = layers;
      return;
    }
    var searchLayers = {};
    for (var k in layers) {
      var l = layers[k];
      for (var k2 in l) {
        var val = l[k2].toString();
        if (val.toLowerCase().indexOf(searchText) > -1) {
          searchLayers[k] = l;
          break;
        }
      }
      var props = l.properties;
      if (props) {
        for (var k3 in props) {
          var val = props[k3].toString();
          if (val.toLowerCase().indexOf(searchText) > -1) {
            searchLayers[k] = l;
            break;
          }
        }
      }
    }
    $scope.searchLayers = searchLayers;
  };

  /*
   Handling Theme Menu Animations
   */

  $scope.toggleBLevelMenu = function(){
    var flippedOut = $(".menu-selection .dropdown").hasClass("open");

    if(flippedOut == false){
      $scope.unfurlThemes();
    }
    else{
      $scope.refurlThemes();
    }
  };

  $scope.unfurlThemes = function(){
    $scope.refurlThemes();
    //Try jQuery to add an 'on' class to each of the theme LI elements on a timer.
    $($('#BLevelMenu li').get().reverse()).each(function(index){
      var self = this;
      setTimeout(function () {
        $(self).addClass("theme-selector-li-on");
      }, index*100);
    });
  };

  //Refurl?
  $scope.refurlThemes = function(){
    //Try jQuery to remove the 'on' class to each of the theme LI elements on a timer.
    $('#BLevelSelectorMenu .dropdown-menu li').removeClass("theme-selector-li-on");
  };

  /*
   End Theme Menu Animations
   */

});

