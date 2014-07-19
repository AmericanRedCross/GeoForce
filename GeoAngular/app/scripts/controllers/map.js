/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *     on Mon Mar 17 2014
 */

module.exports = angular.module('GeoAngular').controller('MapCtrl', function ($scope, $rootScope, $state, $stateParams, leafletData, LayerConfig, VectorProvider) {
  $scope.params = $stateParams;

  var lastLayersStr = '';
  $scope.blur = '';
  $scope.grayout = ''; //use this class to gray out the map, such as when the country selector menu is active

  $scope.toggleState = function(stateName) {
    var state = $state.current.name !== stateName ? stateName : 'main';
    $state.go(state, $stateParams);
  };

  var layersStr = null;
  var overlayNames = [];
  var theme = null;
  var filters = null;

  function redraw() {
    var lat = parseFloat($stateParams.lat)   || 0;
    var lng = parseFloat($stateParams.lng)   || 0;
    var zoom = parseFloat($stateParams.zoom) || 17;
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

    if (theme != $stateParams.theme || filters != $stateParams.filters) { // null and undefined should be ==
      resetThemeCount();
      theme = $stateParams.theme;
      filters = $stateParams.filters;
    }

    $scope.center = {
      lat: lat,
      lng: lng,
      zoom: zoom
    };

    broadcastBBox();
    lastLayersStr = layersStr;
  }
  redraw();


  /***
   * Broadcast Listeners.
   */
  $scope.$on('route-update', function() {
    if ($scope.blur === 'blur' && $state.current.name !== 'landing') {
      $scope.blur = '';
    }
    var c = $scope.center;
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
    $scope.bounds = {
      northEast: { lat: extent[2][1], lng: extent[2][0] },
      southWest: { lat: extent[0][1], lng: extent[0][0] }
    };
  };

  //This take a leaflet bounds object and handles it.
  delete $stateParams['zoom-extent'];
  $scope.zoomToBounds = function(bounds){
    $scope.bounds = { northEast: bounds.getNorthEast(), southWest: bounds.getSouthWest()};
  };



    function broadcastBBox() {
    //NH TODO Fixme. Find a better solution than a spin lock.
    if (!wait) {
      wait = true;
      setTimeout(function(){
        leafletData.getMap().then(function (map) {
          //Get the MIN/MAX Tile ZYX extents.
          //If they haven't chagned, then don't proceed.
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

        });
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
  leafletData.getMap().then(function (map) {
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
      }
    });

    //Connect the layout onresize end event
    try {
        window.layout.panes.center.bind("layoutpaneonresize_end", function () {
            map.invalidateSize();
        });
    }catch(e){
        //Nothing
    }
  });


  var overlays = [];

  function drawOverlays() {
    leafletData.getMap().then(function (map) {

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

        // try for WMS (not a vector layer)
        // if things get more fancy with wms, it should get its own factory
        if (typeof LayerConfig[overlayName] === 'object'
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

    });
  }

  /**
   * Used privately to rebuild the theme count layer.
   */
  function resetThemeCount() {
    leafletData.getMap().then(function (map) {
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
    });
  }

});