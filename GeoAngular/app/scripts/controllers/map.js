/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *     on Mon Mar 17 2014
 */

angular.module('GeoAngular').controller('MapCtrl', function ($scope, $rootScope, $state, $stateParams, leafletData, LayerConfig, VectorProvider) {
  console.log('MapCtrl');

  var lastLayersStr = '';
  var title = $scope.title = $stateParams.title || 'World';
  $scope.blur = '';
  $scope.grayout = ''; //use this class to gray out the map, such as when the country selector menu is active

  //Init activeTheme property
  $scope.activeTheme = "Projects";

  //Init selectedFeatureTitle property
  $scope.selectedFeatureTitle = "Philippines";

  $scope.toggleState = function(stateName) {
    var state = $state.current.name !== stateName ? stateName : 'main';
    $state.go(state, $stateParams);
  };



  //Initialize the dummy project/disaster click results - this needs to be moved to a new controller
  $scope.groupings = { 'Projects': { items: [
    {name: 'Project 1', id: 1},
    {name: 'Project 2', id: 2},
    {name: 'Project 3', id: 3},
    {name: 'RedCross Project', id: 4}
  ]}, 'Disasters': {items: [
    {name: 'Oso Landslide', id: 1},
    {name: 'Hurricane', id: 2}
  ]} };


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
      if (Array.isArray(overlayNames) && overlayNames.length > 0)
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
    if (   $stateParams.lat    !== lat
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

  $scope.$on('zoom-to-extent', function(event, extent) {
    console.log('map broadcast received: zoom-to-extent');

    $scope.bounds = {
      northEast: { lat: extent[2][1], lng: extent[2][0] },
      southWest: { lat: extent[0][1], lng: extent[0][0] }
    };
  });


  function broadcastBBox() {
    leafletData.getMap().then(function (map) {
      var bounds = map.getBounds();
      var str = bounds.getSouth().toFixed(6) + ',' +
        bounds.getWest().toFixed(6) + ',' +
        bounds.getNorth().toFixed(6) + ',' +
        bounds.getEast().toFixed(6);

//      VectorProvider.
    });
  }


  /**
   * Native Leaflet Map Object
   */
  leafletData.getMap().then(function (map) {
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
        $state.go($state.current.name, {
          lat: lat,
          lng: lng,
          zoom: zoom
        });
        broadcastBBox();
      }

    });

    //Connect the layout onresize end event
    window.layout.panes.center.bind("layoutpaneonresize_end", function () {
      map.invalidateSize();
    });
  });


  var overlays = [];

  /**
   * NH TODO: Make sure that the overlays draw in the correct order rather
   *          than the order from which they happen to be fetched.
   *          Also be smart with inserting new layers instead of redrawing
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
        vecRes.fetch(function(geojson){

          var geojsonLayer = L.geoJson(geojson, {
            style: L.mapbox.simplestyle.style,
            pointToLayer: function(feature, latlon) {
              if (!feature.properties) feature.properties = {};
              if (feature.properties.scale) {
                return L.circleMarker(latlon, {
                  fillColor: feature.properties.color || '#FF0000',
                  radius: 20 * feature.properties.scale
                });
              }
              return L.mapbox.marker.style(feature, latlon);
            }
          }).eachLayer(add).addTo(map);

          function add(l) {
            var properties = l.feature.properties;
            console.log(JSON.stringify(properties));
          }

          geojsonLayer.name = name;
          overlays.push(geojsonLayer);

        });

      }

    });
  }


});
