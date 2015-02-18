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

  $scope.toggleState = function(stateName) {
    var state = $state.current.name !== stateName ? stateName : 'main';
    $state.go(state, $stateParams);
  };

  var lastLayersStr = '';
  var lastBasemapUrl = null;
  var basemapLayer = null;
  var layersStr = null;
  var overlayNames = [];
  var overlays = [];
  var theme = null;
  var filters = null;

  function redraw() {
    var lat = parseFloat($stateParams.lat)   || 0;
    var lng = parseFloat($stateParams.lng)   || 0;
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
      basemapLayer = L.tileLayer(basemapUrl);
      basemapLayer.addTo(map);
    }

    if (lastLayersStr !== layersStr) {
      console.log('Setting layers.');
      drawOverlays();

      $scope.defaults = {
        scrollWheelZoom: true
      };

      $scope.tiles = {
        url: basemapUrl
      };
    }

    if ((theme != $stateParams.theme || filters != $stateParams.filters) || firstLoad === true) { // null and undefined should be ==

      firstLoad = false;

      //Update local variables
      theme = $stateParams.theme;
      filters = $stateParams.filters;

      //Call the 'onChanged' function
      onThemeChanged($stateParams.theme);
      onFiltersChanged($stateParams.filters);
    }

    var c = $scope.center = {
      lat: lat,
      lng: lng,
      zoom: zoom
    };

    if (typeof map === 'object' && (c.lat != 0 && c.lng !=0)) {
      map.setView([c.lat, c.lng], zoom);
    }

    broadcastBBox();
    lastLayersStr = layersStr;
    lastBasemapUrl = basemapUrl;
  }

  //For vector tile choropleths, ask for new data .json from the server
  //onThemeChanged($stateParams.theme);


  /***
   * Broadcast Listeners.
   */
  $scope.$on('route-update', function() {
    if ($scope.blur === 'blur' && $state.current.name !== 'landing') {
      $scope.blur = '';
    }

    var c;
    if(!$scope.center){
      var lat = parseFloat($stateParams.lat)   || 0;
      var lng = parseFloat($stateParams.lng)   || 0;
      var zoom = parseFloat($stateParams.zoom) || 8;

      c = $scope.center = {
        lat: lat,
        lng: lng,
        zoom: zoom
      };
    }
    else{
      c = $scope.center;
    }

    var lat = c.lat.toFixed(6);
    var lng = c.lng.toFixed(6);
    var zoom = c.zoom.toString();
    if (mapMoveEnd) {
      mapMoveEnd = false;
    } else if (  $stateParams.lat     !== lat
              || $stateParams.lng     !== lng
              || $stateParams.zoom    !== zoom
              || $stateParams.layers  !== layersStr
              || $stateParams.theme   !== theme
              || $stateParams.filters !== filters   ) {

      console.log('map.js route-update Updating Map...');
      redraw();
    }

  });

  $scope.$on('blur', function() {
    $scope.blur = 'blur';
  });

  //this takes in a WKT GeoJSON Extent geometry
  $scope.zoomToExtent = function(extent){
    delete $stateParams['zoom-extent'];

    var southWest = { lat: extent[0][1], lng: extent[0][0] };
    var northEast = { lat: extent[2][1], lng: extent[2][0] };

    $scope.bounds = L.latLngBounds(southWest, northEast);

    //Zoom to bounds
    map.fitBounds($scope.bounds);
  };

  //This take a leaflet bounds object and handles it.
  delete $stateParams['zoom-extent'];
  $scope.zoomToBounds = function(bounds){

    //Build new bounds object
    $scope.bounds = L.latLngBounds(bounds.getSouthWest(), bounds.getNorthEast());

    //Zoom to bounds
    map.fitBounds($scope.bounds);
  };




    function broadcastBBox() {
    //NH TODO Fixme. Find a better solution than a spin lock.
    if (!wait) {
      wait = true;
      setTimeout(function(){

          //Get the MIN/MAX Tile ZYX extents.
          //If they haven't chagned, then don't proceed.

          //When the page loads, no zoom or center has been set, so don't get bounds until that has happened

          if(!map.getZoom()) { return; }
          var tileBounds = getCurrentTileBounds(map);
          var zoom = map.getZoom();

          $scope.zoom = zoom;
          var minx = tileBounds.min.x;
          var maxx = tileBounds.max.x;
          var miny = tileBounds.min.y;
          var maxy = tileBounds.max.y;

          //Detect negative mins and set to 0
          if(minx < 0) minx = 0;
          if(miny < 0) miny = 0;

          //Check for extreme values greater than the tile bounds
          var extremeValue = Math.pow(2, zoom) - 1;

          if(maxx > extremeValue) maxx = extremeValue;
          if(maxy > extremeValue) maxy = extremeValue;

          var str = zoom + "," +  minx + ',' +
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

    function getCurrentTileBounds(map){
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

    if (   $stateParams.lat  !== lat
      || $stateParams.lng  !== lng
      || $stateParams.zoom !== zoom ) {

      console.log('map: lat,lng,zoom !== $stateParams');
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
    if($rootScope && $rootScope.vtData) {
      var data = $rootScope.vtData;
      updateECOSData(data, overlayNames, false); //false means the theme didn't change, so don't clear old features.
    }

  });

  //Connect the layout onresize end event
  try {
      window.layout.panes.center.bind("layoutpaneonresize_end", function () {
          map.invalidateSize();
      });
  }catch(e) {
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
        else if ( currOverlay && currOverlay._map ) {
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

      }

      // there are more overlays left in the list, less layers specified in route
      // we need to remove those too.
      for(var len2 = overlays.length; i < len2; ++i) {
        if (overlays[i].destroyResource) overlays[i].destroyResource();
        map.removeLayer(overlays[i]);
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
   * When the theme changes, this function will be fired.
   * @param theme
   */
  function onThemeChanged(theme){
    //reset theme count
    resetThemeCount();

    //For vector tile choropleths, ask for new data .json from the server
    getECOSProperties(function (data) {

      if(data && data.features){

        var guids = {};

        angular.forEach(data.features, function (dataItem, dataKey) {
          guids[dataItem.properties.guid] = dataItem.properties;
        });

        $rootScope.vtData = guids; //Store the data to be merged with vector tile layer.  In config/vectortiles.js, the MVT choropleth layers will attempt to merge this data in when tiles finish loading (any time new tiles are requested, like zoomin/out/pan)

        updateECOSData(guids, overlayNames, true); //true is for ThemeChanged boolean

      }


    })

    //redraw map overlays - vector tiles need to be re-styled with new theme data.
    //redrawMapOverlays(overlayNames);
  }

  /**
   * When the filters change, this function will be fired.
   * @param theme
   */
  function onFiltersChanged(filters){
    //For vector tile choropleths, ask for new data .json from the server
    //getECOSProperties(function (data) {
    //
    //  updateECOSData(data, overlayNames);
    //
    //})
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
  function updateECOSData(ecosData, layerNames, newTheme) {
    map.eachLayer(function (layer) {
      if (layerNames.indexOf(layer.overlayName) > -1 && layer._tilesToProcess <= 0) {

        if (ecosData) {
          var layers = layer.getLayers();

          //If any features are returned, loop thru the vtfs and apply these values, restyle.
          mergeECOSProperties(layers, ecosData, newTheme);

          //Update Layer(s) style and redraw
          layer.setStyle(getThemeStyle);
          layer.redraw(false); //false means that this redraw won't trigger the onTilesLoaded event.
        }

      }
    });
  }

  function getThemeStyle(vtf){

    var opacity = "0.5";

    var style = {};
    //Default style - make hollow
    style.color = 'rgba(0,0,0,' + opacity + ')';
    style.outline = {
      color: 'rgb(20,20,20)',
      size: 2
    };



    var properties = vtf.properties;

    if(!properties.theme){
      return style;
    }

    var ecosProperties;

    if (properties.theme == "disaster") {
      ecosProperties = properties["ecos_properties"]["disaster"];

      if (ecosProperties) {
        if (ecosProperties.iroc_status__c) {
          switch (ecosProperties.iroc_status__c.toLowerCase()) {
            case "active":
              style.color = 'rgba(204,0,51,' + opacity + ')';
              style.outline = {
                color: 'rgb(20,20,20)',
                size: 2
              }
              break;
            case "monitoring":
              style.color = 'rgba(204,153,0,' + opacity + ')';
              style.outline = {
                color: 'rgb(20,20,20)',
                size: 2
              }
              break;
            case "inactive":
              style.color = 'rgba(255,255,255,' + opacity + ')';
              style.outline = {
                color: 'rgb(20,20,20)',
                size: 2
              }
              break;
          }
        }
      }

    }
    else if (properties.theme == "projectRisk") {
      ecosProperties = properties["ecos_properties"]["projectRisk"];
      if (ecosProperties && ecosProperties.overall_assessment__c) {
        switch (ecosProperties.overall_assessment__c.toLowerCase()) {
          case "critical":
            style.color = 'rgba(255,0,0,' + opacity + ')';
            style.outline = {
              color: 'rgb(20,20,20)',
              size: 2
            }
            break;
          case "high":
            style.color = 'rgba(255,127,0,' + opacity + ')';
            style.outline = {
              color: 'rgb(20,20,20)',
              size: 2
            }
            break;
          case "medium":
            style.color = 'rgba(255,255,0,' + opacity + ')';
            style.outline = {
              color: 'rgb(20,20,20)',
              size: 2
            }
            break;
          case "low":
            style.color = 'rgba(0,255,0,' + opacity + ')';
            style.outline = {
              color: 'rgb(20,20,20)',
              size: 2
            }
            break;
        }
      }
    }
    else if (properties.theme == "projectHealth") {
      ecosProperties = properties["ecos_properties"]["projectHealth"];
      if (ecosProperties && ecosProperties.overall_status__c) {
        switch (ecosProperties.overall_status__c.toLowerCase()) {
          case "red":
            style.color = 'rgba(255,0,0,' + opacity + ')';
            style.outline = {
              color: 'rgb(20,20,20)',
              size: 2
            }
            break;
          case "yellow":
            style.color = 'rgba(255,255,0,' + opacity + ')';
            style.outline = {
              color: 'rgb(20,20,20)',
              size: 2
            }
            break;
          case "green":
            style.color = 'rgba(0,255,0,' + opacity + ')';
            style.outline = {
              color: 'rgb(20,20,20)',
              size: 2
            }
            break;
          case "white":
            style.color = 'rgba(255,255,255,' + opacity + ')';
            style.outline = {
              color: 'rgb(20,20,20)',
              size: 2
            }
            break;
        }
      }
    }
    else if (properties.theme == "project") {
      ecosProperties = properties["ecos_properties"]["project"];

      if (ecosProperties && ecosProperties) {

        var count =  parseInt(ecosProperties.theme_count);

        if(count == 0) {
          //make hollow
          style.color = 'rgba(0,0,0,' + opacity + ')';
          style.outline = {
            color: 'rgb(20,20,20)',
            size: 2
          }
        }
        else if(count > 0 && count <= 2) {
          //make hollow
          style.color = 'rgba(229,255,235,' + opacity + ')';
          style.outline = {
            color: 'rgb(20,20,20)',
            size: 2
          }
        }
        else if(count > 2 && count <= 5) {
          //make hollow
          style.color = 'rgba(169,255,189,' + opacity + ')';
          style.outline = {
            color: 'rgb(20,20,20)',
            size: 2
          }
        }
        else if(count > 5 && count <= 8) {
          //make hollow
          style.color = 'rgba(169,255,125,' + opacity + ')';
          style.outline = {
            color: 'rgb(20,20,20)',
            size: 2
          }
        }
        else if(count > 8 && count <= 10) {
          //make hollow
          style.color = 'rgba(41,255,90,' + opacity + ')';
          style.outline = {
            color: 'rgb(20,20,20)',
            size: 2
          }
        }
        else if(count > 10) {
          //make hollow
          style.color = 'rgba(0,255,59,' + opacity + ')';
          style.outline = {
            color: 'rgb(20,20,20)',
            size: 2
          }
        }

      }
      else{
        //make hollow
        style.color = 'rgba(0,0,0,' + opacity + ')';
        style.outline = {
          color: 'rgb(20,20,20)',
          size: 2
        }
      }
    }

    //Label
    //if (vtf.layer.name === 'gadm0_7perc_geom_label') {
    //  style.staticLabel = function () {
    //    var labelStyle = {
    //      html: ecosProperties.theme_count,
    //      iconSize: [42, 42],
    //      cssClass: 'label-icon-number-lg'
    //    };
    //    return labelStyle;
    //  };
    //}


    return style;



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
    var url = "http://localhost:3001/services/custom/custom_operation?name=getallaggregatedthemefeatures&format=geojson&theme=:theme&gadm_level=0&filters=:filters";
    //url = url.replace(":bbox", $rootScope.bbox);

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


      //Grab the current theme.
      var theme = ($rootScope && $rootScope.$stateParams && $rootScope.$stateParams.theme) || 'project';

      for (var layer in MVTLayers) {
        if (layer && MVTLayers[layer].features) {
          //Clear out old ECOS properties.

          if(newTheme === true) clearFeatureProperties(MVTLayers[layer].features);

          angular.forEach(MVTLayers[layer].features, function (vtf) {
            if (vtf.properties.guid && data[vtf.properties.guid]) {
              //We've found it.  Add a property to all matching features.
              vtf.properties.theme = theme;
              vtf.properties.ecos_properties = {};
              vtf.properties.ecos_properties[theme] = data[vtf.properties.guid];
            }
          });

        }
      }

    }
  }

  //As we swap ECOS properties out on the vector tile layer, clear out the old properties so we don't get residual theme values from old themes.
  function clearFeatureProperties(features){

    angular.forEach(features, function (vtf, vtfkey) {
      if(vtf.properties) {
        vtf.properties.ecos_properties = {};
        vtf.theme = "";
      }
    });

  }

});
