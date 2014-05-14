/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *     on Mon Mar 17 2014
 */

angular.module('GeoAngular').controller('MapCtrl', function ($scope, $rootScope, $state, $stateParams, leafletData, LayerConfig, VectorProvider) {
  console.log('MapCtrl');

  $scope.params = $stateParams;

  var lastLayersStr = '';
	var title = $scope.title = $stateParams.title || 'World';
  $scope.blur = '';
  $scope.grayout = ''; //use this class to gray out the map, such as when the country selector menu is active

  //Init activeTheme property
  $scope.activeTheme = "Projects";


  $scope.toggleState = function(stateName) {
    var state = $state.current.name !== stateName ? stateName : 'main';
    $state.go(state, $stateParams);
  };

  var layersStr = null;
  var overlayNames = [];

  function redraw() {
    $scope.title = $stateParams.title || 'World';
    var lat = parseFloat($stateParams.lat)   || 0;
    var lng = parseFloat($stateParams.lng)   || 0;
    var zoom = parseFloat($stateParams.zoom) || 2;
    layersStr = $stateParams.layers || LayerConfig.redcross;
    var layers = layersStr.split(',');

    // first layer should always be treated as the basemap
    var basemap = LayerConfig.find(layers[0]) || LayerConfig.redcross;
    overlayNames = layers.slice(1);

    if (lastLayersStr !== layersStr) {
      console.log('Setting layers.');
      drawOverlays();

      $scope.defaults = {
        scrollWheelZoom: true
      };

      $scope.tiles = {
        url: basemap
      };
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
      console.log('moveend true');
      mapMoveEnd = false;
    } else if (   $stateParams.lat    !== lat
        || $stateParams.lng    !== lng
        || $stateParams.zoom   !== zoom
        || $stateParams.title  !== title
        || $stateParams.layers !== layersStr ) {

      console.log('map.js route-update Updating Map...');
      redraw();
    }

  });

  $scope.$on('blur', function() {
    $scope.blur = 'blur';
  });

  $scope.zoomToExtent = function(extent, title){
    $stateParams.title = title;
    delete $stateParams['zoom-extent'];
    $scope.bounds = {
      northEast: { lat: extent[2][1], lng: extent[2][0] },
      southWest: { lat: extent[0][1], lng: extent[0][0] }
    };
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
          if($scope.tileBounds ){
              if(!areBoundsEqual($scope.tileBounds, tileBounds, $scope.zoom, zoom)){
                  $scope.tileBounds = tileBounds;
                  $scope.zoom = zoom;
                  var minx = tileBounds.min.x;
                  var maxx = tileBounds.max.x;
                  var miny = tileBounds.min.y;
                  var maxy = tileBounds.max.y;

                  var str = zoom + "," + minx + ',' +
                      maxx + ',' +
                      miny + ',' +
                      maxy;

                  VectorProvider.updateBBox(str);
              }
          }
            else{
              //1st time thru
              $scope.tileBounds = tileBounds;
              $scope.zoom = zoom;
          }





//          var bounds = map.getBounds();
//          var west = bounds.getWest();
//          var south = bounds.getSouth();
//          var east = bounds.getEast();
//          var north = bounds.getNorth();
//
//          if (west < -180) west = -180;
//          if (south < -90) south = -90;
//          if (east > 180) east = 180;
//          if (north > 90) north = 90;

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

    function areBoundsEqual(a,b, za, zb){
        if(a.min.x != b.min.x) { return false; }
        if(a.min.y != b.min.y) { return false; }
        if(a.max.x != b.max.x) { return false; }
        if(a.max.y != b.max.y) { return false; }
        if(za != zb) { return false; }
        return true;
    }


  /**
   * Native Leaflet Map Object
   */
  leafletData.getMap().then(function (map) {
    debug.map = map;
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

//    map.on('zoomend', function() {
//      broadcastBBox();
//    });

    //Connect the layout onresize end event
    window.layout.panes.center.bind("layoutpaneonresize_end", function () {
      map.invalidateSize();
    });
  });


  var overlays = [];
  debug.overlays = overlays;

  /**
   * NH TODO: Be smart with inserting new layers instead of redrawing
   *          everything...
   */
  function drawOverlays() {
    leafletData.getMap().then(function (map) {

      for (var h = 0, len = overlays.length; h < len; ++h) {
        map.removeLayer(overlays[h]);
      }

      for (var i = 0, len = overlayNames.length; i < len; ++i) {

        // need to fetch data and redraw layer
        var vecRes = VectorProvider.createResource(overlayNames[i]);
        var layer = vecRes.getLayer();

        // NH TODO Only works for KML. Think through this better.
        vecRes.eachLayer(function (l) {
          var props = l.feature.properties;

        });

        overlays.push(layer);
        layer.addTo(map);
      }

    });
  }

  // Used by theme to redraw the overlays when the theme is changed.
  $scope.drawOverlays = drawOverlays;

});