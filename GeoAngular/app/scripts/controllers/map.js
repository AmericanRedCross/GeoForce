/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *     on Mon Mar 17 2014
 */

module.exports = angular.module('GeoAngular').controller('MapCtrl', function ($scope, $rootScope, $state, $stateParams, LayerConfig, VectorProvider, $http) {
  var map = L.map('map');
  var firstLoad = true;

  $scope.params = $stateParams;
  $scope.blur = '';
  $scope.grayout = ''; //use this class to gray out the map, such as when the country selector menu is active

  $scope.toggleState = function (stateName) {
    var state = $state.current.name !== stateName ? stateName : 'main';
    $state.go(state, $stateParams);
  };

  var lastLayersStr = '';
  var lastThemeLabels;
  var lastBasemapUrl = null;
  var basemapLayer = null;
  var layersStr = null;
  var overlayNames = [];
  var overlays = [];
  var overlays_dictionary = {};
  var theme = null;
  var filters = null;

  function redraw() {
    var lat = parseFloat($stateParams.lat) || 0;
    var lng = parseFloat($stateParams.lng) || 0;
    var zoom = parseFloat($stateParams.zoom) || 8;
    layersStr = $stateParams.layers || LayerConfig.redcross.url;
    var layers = layersStr.split(',');

    // first layer should always be treated as the basemap
    var basemap = LayerConfig.find(layers[0]) || LayerConfig.redcross.url;
    if (typeof basemap === 'string') {
      var basemapUrl = basemap;
    } else {
      var basemapUrl = basemap.url;
    }
    overlayNames = layers.slice(1);


    if (lastBasemapUrl !== basemapUrl && typeof map === 'object') {
      if (basemapLayer) {
        map.removeLayer(basemapLayer);
      }
      basemapLayer = L.tileLayer(basemapUrl).addTo(map);

      basemapLayer.on('load', function () {
        //Move to back
        basemapLayer.bringToBack();
      });

    }

    if (lastLayersStr !== layersStr) {

      drawOverlays();

      $scope.defaults = {
        scrollWheelZoom: true
      };

      $scope.tiles = {
        url: basemapUrl
      };
    }

    var c = $scope.center = {
      lat: lat,
      lng: lng,
      zoom: zoom
    };

    if (typeof map === 'object' && (c.lat != 0 && c.lng != 0)) {
      map.setView([c.lat, c.lng], zoom);
    }

    if ((theme != $stateParams.theme || filters != $stateParams.filters) || firstLoad === true) {

      firstLoad = false;

      //Update local variables
      theme = $stateParams.theme;
      filters = $stateParams.filters;

      //Call the 'onChanged' function
      onThemeChanged($stateParams.theme);
      onFiltersChanged($stateParams.filters);
    }

    broadcastBBox();
    lastLayersStr = layersStr;
    lastBasemapUrl = basemapUrl;
  }

  //For vector tile choropleths, ask for new data .json from the server
  onThemeChanged($stateParams.theme);


  /***
   * Broadcast Listeners.
   */
  $scope.$on('route-update', function () {
    if ($scope.blur === 'blur' && $state.current.name !== 'landing') {
      $scope.blur = '';
    }

    var c;
    if (!$scope.center) {
      var lat = parseFloat($stateParams.lat) || 0;
      var lng = parseFloat($stateParams.lng) || 0;
      var zoom = parseFloat($stateParams.zoom) || 8;

      c = $scope.center = {
        lat: lat,
        lng: lng,
        zoom: zoom
      };
    }
    else {
      c = $scope.center;
    }

    var lat = c.lat.toFixed(6);
    var lng = c.lng.toFixed(6);
    var zoom = c.zoom.toString();
    if (mapMoveEnd) {
      mapMoveEnd = false;
    } else if ($stateParams.lat !== lat
      || $stateParams.lng !== lng
      || $stateParams.zoom !== zoom
      || $stateParams.layers !== layersStr
      || $stateParams.theme !== theme
      || $stateParams.filters !== filters) {

      console.log('map.js route-update Updating Map...');
      redraw();
    }

    //Should we show 'bubbles' on top of the theme layer?
    var themeLabels = ($stateParams.themelabels && $stateParams.themelabels.toLowerCase() === 'true');
    if (themeLabels != lastThemeLabels) {

      onThemeLabelChanged();
      lastThemeLabels = themeLabels;
    }

  });

  $scope.$on('blur', function () {
    $scope.blur = 'blur';
  });

  //this takes in a WKT GeoJSON Extent geometry
  $scope.zoomToExtent = function (extent) {
    delete $stateParams['zoom-extent'];

    var southWest = {lat: extent[0][1], lng: extent[0][0]};
    var northEast = {lat: extent[2][1], lng: extent[2][0]};

    $scope.bounds = L.latLngBounds(southWest, northEast);

    //Zoom to bounds
    map.fitBounds($scope.bounds);
  };

  //This take a leaflet bounds object and handles it.
  delete $stateParams['zoom-extent'];
  $scope.zoomToBounds = function (bounds) {

    //Build new bounds object
    $scope.bounds = L.latLngBounds(bounds.getSouthWest(), bounds.getNorthEast());

    //Zoom to bounds
    map.fitBounds($scope.bounds);
  };


  function broadcastBBox() {
    //NH TODO Fixme. Find a better solution than a spin lock.
    if (!wait) {
      wait = true;
      setTimeout(function () {

        //Get the MIN/MAX Tile ZYX extents.
        //If they haven't chagned, then don't proceed.

        //When the page loads, no zoom or center has been set, so don't get bounds until that has happened

        if (!map.getZoom()) {
          return;
        }
        var tileBounds = getCurrentTileBounds(map);
        var zoom = map.getZoom();

        $scope.zoom = zoom;
        var minx = tileBounds.min.x;
        var maxx = tileBounds.max.x;
        var miny = tileBounds.min.y;
        var maxy = tileBounds.max.y;

        //Detect negative mins and set to 0
        if (minx < 0) minx = 0;
        if (miny < 0) miny = 0;

        //Check for extreme values greater than the tile bounds
        var extremeValue = Math.pow(2, zoom) - 1;

        if (maxx > extremeValue) maxx = extremeValue;
        if (maxy > extremeValue) maxy = extremeValue;

        var str = zoom + "," + minx + ',' +
          maxx + ',' +
          miny + ',' +
          maxy;

        VectorProvider.updateBBox(str);
        $rootScope.bbox = str; //save the bbox string to rootScope so VectorTile styling functions have access


        wait = false;
      }, 150);
    }

  }

  /**
   * Ripped From Leaflet TileLayer
   * Calculate the Max/Min ZYX Tile bounds.
   * Use those to snap BBox requests so we can cache.
   */

  function getCurrentTileBounds(map) {
    var bounds = map.getPixelBounds(),
      tileSize = 256; //TODO

    // tile coordinates range for the current view
    var tileBounds = L.bounds(
      bounds.min.divideBy(tileSize).floor(),
      bounds.max.divideBy(tileSize).floor());

    return tileBounds;
  }


  /**
   * Native Leaflet Map Object
   */

  window.map = map;
  map.on('moveend', function () { // move is good too
    var c = map.getCenter();
    var lat = c.lat.toFixed(6);
    var lng = c.lng.toFixed(6);
    var zoom = map.getZoom().toString();

    if ($stateParams.lat !== lat
      || $stateParams.lng !== lng
      || $stateParams.zoom !== zoom) {


      $stateParams.lat = lat;
      $stateParams.lng = lng;
      $stateParams.zoom = zoom;
      mapMoveEnd = true;
      $state.go($state.current.name, $stateParams);
      broadcastBBox();

      //Update ECOS Details - Usually this happens when tiles finish loading after a pan.  But sometimes if the tiles are loaded/cached, then the event doesn't fire after the map stops moving.
      //updateECOSData(overlayNames);
    }
  });

  //merge vector tiles in the new view with .json stats
  map.on('moveend', function () {
    //if ($rootScope && $rootScope.vtData) {
    //  var data = $rootScope.vtData;
    //  updateECOSData(data, false); //false means the theme didn't change, so don't clear old features.
    //}

  });

  //Connect the layout onresize end event
  try {
    window.layout.panes.center.bind("layoutpaneonresize_end", function () {
      map.invalidateSize();
    });
  } catch (e) {
    //Nothing
  }


  function drawOverlays() {

    for (var i = 0, len = overlayNames.length; i < len; ++i) {
      var overlayName = overlayNames[i];
      var currOverlay = overlays[i];

      if (currOverlay && currOverlay.overlayName === overlayName) {
        continue; // layer is already there, continue on!
      }

      // remove the current layer that is not what should be that layer in the list
      else if (currOverlay && currOverlay._map) {
        if (currOverlay.destroyResource) currOverlay.destroyResource();
        map.removeLayer(currOverlay);
      }

      /**
       * Mapnik Vector Tile Format (.PBF)
       */
      if (typeof LayerConfig[overlayName] === 'object'
        && LayerConfig[overlayName].type.toLowerCase() === 'pbf') {

        var vecRes = VectorProvider.createResource(overlayName);
        var layer = vecRes.getLayer();
        layer.overlayName = overlayName;

      }

      // try for WMS (not a vector layer)
      // if things get more fancy with wms, it should get its own factory
      else if (typeof LayerConfig[overlayName] === 'object'
        && LayerConfig[overlayName].type.toLowerCase() === 'wms') {

        var cfg = LayerConfig[overlayName];
        var layer = L.tileLayer.wms(cfg.url, {
          format: cfg.format || 'image/png',
          transparent: cfg.transparent || true,
          layers: cfg.layers
        });
      }

      /**
       * Tiles that are an overlay. OSM / Google / Mapnik tend to make tiles in this format.
       */
      else if (typeof LayerConfig[overlayName] === 'object'
        && LayerConfig[overlayName].type.toLowerCase() === 'xyz') {

        var cfg = LayerConfig[overlayName];
        var layer = L.tileLayer(cfg.url, {
          opacity: cfg.opacity || 0.5
        });
      }

      /**
       * TMS flips the y. GeoServer often serves this.
       */
      else if (typeof LayerConfig[overlayName] === 'object'
        && LayerConfig[overlayName].type.toLowerCase() === 'tms') {
        var cfg = LayerConfig[overlayName];
        var layer = L.tileLayer(cfg.url, {
          opacity: cfg.opacity || 0.5,
          tms: true
        });
      }

      // if its not wms, its a vector layer
      else {
        var vecRes = VectorProvider.createResource(overlayName);
        var layer = vecRes.getLayer();
      }

      layer.overlayName = overlayName;
      layer.addTo(map);
      overlays[i] = layer;
      overlays_dictionary[overlayName] = layer; //keep a dictionary reference for faster fetching in UpdateECOSData

      if (LayerConfig.themeLayers.indexOf(overlayName) > -1) {
        //We have one of the theme layers (GADM), parse the name and find out which level we're dealing with as opposed to storing a seaprate level state param
        var level = overlayName.substring(overlayName.length - 1, overlayName.length);
        $rootScope.level = level; //Store in rootscope
      }

    }

    // there are more overlays left in the list, less layers specified in route
    // we need to remove those too.
    for (var len2 = overlays.length; i < len2; ++i) {
      if (overlays[i].destroyResource) overlays[i].destroyResource();
      map.removeLayer(overlays[i]);
      delete overlays_dictionary[overlays[i].overlayName]; //delete dictionary reference for faster fetching in UpdateECOSData
      delete overlays[i];

    }


  }

  /**
   * Used privately to rebuild the theme count layer.
   */
  function resetThemeCount() {

    for (var j = 0, len = overlayNames.length; j < len; j++) {
      var nme = overlayNames[j];
      if (nme === 'themecount' || nme === 'theme') {
        var oldLyr = overlays[j];
        oldLyr.destroyResource();
        map.removeLayer(oldLyr);
        var newLyr = overlays[j] = VectorProvider.createResource(nme).getLayer();
        newLyr.addTo(map);
      }
    }

  }

  /**
   * When the theme label state changes, this function will be fired.
   * @param theme
   */
  function onThemeLabelChanged() {

    //Find the current theme level, if any
    var level = $rootScope.level; //set in drawoverlays

    if(!level) return; //no theme

    var layer = overlays_dictionary["gadm" + level];

    if (layer) {

      var layers = layer.getLayers();

      if(!layers) return; //no layers have loaded yet.  This needs to wait until some tiles have loaded.

      var vtLayer;
      var vtLabelLayer;

      if(level == 0){
        vtLayer = layers["GADM_2014"];
        vtLabelLayer = layers["GADM_2014_label"];
      }
      else if(level == 1){
        vtLayer = layers["Gadm1_2014"];
        vtLabelLayer = layers["Gadm1_2014_label"];
      }


      //Clear ecos property from MVTFeature
      clearFeatureProperties(vtLayer.features);
      //Clear ecos property from Label Layer
      clearFeatureProperties(vtLabelLayer.features);

      //Update Layer(s) style and redraw
      vtLayer.clearLayerFeatureHash(); //Force VTs to be reparsed.
      vtLabelLayer.clearLayerFeatureHash();

      //layer.setStyle(layer.style); //feed back in the same style
      layer.redraw(false); //false means that this redraw won't trigger the onTilesLoaded event.
      //updateECOSData(guids, true); //true is for ThemeChanged boolean
    }

  }



  /**
   * When the theme changes, this function will be fired.
   * @param theme
   */
  function onThemeChanged(theme) {
    //reset theme count
    resetThemeCount();

    //Find the current theme level, if any
    var level = $rootScope.level; //set in drawoverlays

    if (!level) return; //no theme

    var layer = overlays_dictionary["gadm" + level];

    if (layer) {
      //For vector tile choropleths, ask for new data .json from the server
      getECOSProperties(function (data) {

        if (data && data.features) {

          var guids = {};

          angular.forEach(data.features, function (dataItem, dataKey) {
            guids[dataItem.properties.guid] = dataItem.properties;
          });

          $rootScope.vtData = guids; //Store the data to be merged with vector tile layer.  In config/vectortiles.js, the MVT choropleth layers will attempt to merge this data in when tiles finish loading (any time new tiles are requested, like zoomin/out/pan)

          var layers = layer.getLayers();

          if (!layers) return; //no layers have loaded yet.  This needs to wait until some tiles have loaded.

          var vtLayer;
          var vtLabelLayer;

          //TODO: Move this logic to a single location
          if (level == 0) {
            vtLayer = layers["GADM_2014"];
            vtLabelLayer = layers["GADM_2014_label"];
          }
          else if (level == 1) {
            vtLayer = layers["Gadm1_2014"];
            vtLabelLayer = layers["Gadm1_2014_label"];
          }

          //Clear ecos property from MVTFeature
          clearFeatureProperties(vtLayer.features);
          //Clear ecos property from Label Layer
          clearFeatureProperties(vtLabelLayer.features);

          //Update Layer(s) style and redraw
          vtLayer.clearLayerFeatureHash(); //Force VTs to be reparsed.
          vtLabelLayer.clearLayerFeatureHash();

          //layer.setStyle(layer.style); //feed back in the same style
          layer.redraw(false); //false means that this redraw won't trigger the onTilesLoaded event.
          //updateECOSData(guids, true); //true is for ThemeChanged boolean
        }

      })
    }

  }

  /**
   * When the filters change, this function will be fired.
   * @param theme
   */
  function onFiltersChanged(filters){

  }

  function redrawMapOverlays(layerNames){
    map.eachLayer(function (layer) {
      if(layerNames.indexOf(layer.overlayName) > -1){
        layer.redraw();
      }
    });
  }

  /**
   * Take data/properties from the server and merge them in with a vector tiles layer.
   * @param ecosData - the data
   * @param layerNames - any layer names to apply the data to
   * @newTheme - boolean. If true, a new theme has been selected, so existing VT propeties will be cleared.  If false, then we can skip features that already have been 'filled' and worry about new ones.
   */
  function updateECOSData(ecosData, newTheme) {

      var layer = overlays_dictionary["gadm0"];

      if(layer){
        if (ecosData) {
          var layers = layer.getLayers();

          //Update VTFSource filter
          //layer.setFilter(function(mvt, ctx){
          //  //Filter checks if feature has ecos properties.
          //  return ($rootScope.vtData && $rootScope.vtData[mvt.properties.guid]) ? true : false;
          //})

          //If any features are returned, loop thru the vtfs and apply these values, restyle.
          mergeECOSProperties(layers, ecosData, newTheme);



          //Update Layer(s) style and redraw
          layer.setStyle(layer.style); //feed back in the same style
          layer.redraw(false); //false means that this redraw won't trigger the onTilesLoaded event.
        }
      }

  }

  /***
   *
   * When the app starts, or when the filters change, fetch the .json file that contains the counts for all of the districts for a given Administrative boundary level
   * Currently, each of these files will be small enough to bulk load them a single time, as opposed to when the user pans the map.
   * These files will be used to update the vector tiles choropleth map.
   *
   * @param $http
   * @param $rootScope
   * @param cb
   */
  function getECOSProperties (cb){
    //This should fetch data from the server that pertains to the features loaded in the current extent.
    //var url = "http://localhost:3001/services/custom/custom_operation?name=getaggregatedthemefeaturesbyextent&format=geojson&bbox=:bbox&theme=:theme&gadm_level=0&filters=:filters";

    var level = $rootScope.level;

    if (!level) return; //exit if no level

    var url = "../services/custom/custom_operation?name=getallaggregatedthemefeatures&format=geojson&theme=:theme&gadm_level=" + level + "&filters=:filters";

    if ($rootScope.$stateParams.filters) {
      filters = $rootScope.$stateParams.filters;
      //Add filters to URL.
      url = url.replace(":filters", filters);
    }
    else {
      url = url.replace("&filters=:filters", ""); //no filters.  Remove
    }

    var theme = $rootScope.$stateParams.theme || 'project';
    url = url.replace(":theme", theme);

    //When done, call the cb (callback) function
    $http.get(url, {cache: true}).success(cb).error(function (err) {
      console.log("err");
    });
  }

  //Take an MVTLayer(s) and add in properties from a web service call
  //newTheme is a boolean that tells us whether to clear existing properties or keep what we've got and just add to the set.
  function mergeECOSProperties(MVTLayers, data, newTheme){
    if (MVTLayers) {

      var fullStart = new Date();

      //Grab the current theme.
      var theme = ($rootScope && $rootScope.$stateParams && $rootScope.$stateParams.theme) || 'project';

      for (var layer in MVTLayers) {
        if (layer && MVTLayers[layer].features) {

          //optionally clear out old ECOS properties.
          if (newTheme === true) {
            //Clear ecos property from MVTFeature
            clearFeatureProperties(MVTLayers[layer].features);
            //"unlink" the data - set the linked property to false.
          }

          //Iterate over data, use the ID to attempt to line up data in MVTLayer.features dictionary (id is the key)
          angular.forEach(Object.keys(data), function (key) { //.map(function(item){ return !item.properties.isMapped; })
            var vtf = MVTLayers[layer].features[key];

            //mark as linked
            data.isLinked = true;

            if (vtf) {
              vtf.properties.theme = theme;
              vtf.properties.ecos_properties = {};
              vtf.properties.ecos_properties[theme] = data[key];
            }
          });

        }
      }

      var msDiff = new Date().getTime() - new Date(fullStart).getTime(); //Difference in ms
      console.log("Merge Time: " + msDiff);
    }
  }

  //As we swap ECOS properties out on the vector tile layer, clear out the old properties so we don't get residual theme values from old themes.
  function clearFeatureProperties(features){

    angular.forEach(features, function (vtf, vtfkey) {
      if(vtf.properties) {
        vtf.properties.ecos_properties = {};
        vtf.theme = "";
      }

      //Remove Old labels
      vtf.removeLabel();

    });

  }

});
