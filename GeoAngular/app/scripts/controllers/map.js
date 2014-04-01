/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *     on Mon Mar 17 2014
 */

angular.module('GeoAngular').controller('MapCtrl', function ($scope, leafletData, LayerConfig, VectorProvider) {
  console.log('MapCtrl');

  $scope.routeParams = window.RouteParams;

  var lastLayersStr = '';
  $scope.blur = '';

  //Init activeTheme property
  $scope.activeTheme = "Projects";

  //Init selectedFeatureTitle property
  $scope.selectedFeatureTitle = "Philippines";

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
    if (RouteParams.landing) {
      console.log('landing');
      $scope.blur = 'blur';
    } else {
      $scope.blur = '';
    }
    var lat = parseFloat(RouteParams.lat)   || 0;
    var lng = parseFloat(RouteParams.lng)   || 0;
    var zoom = parseFloat(RouteParams.zoom) || 2;
    layersStr = RouteParams.layers;
    var layers = layersStr.split(',') || LayerConfig.redcross;

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

    lastLayersStr = layersStr;
  }
  redraw();

  $scope.$on('route-update', function() {
    var c = $scope.center;
    var lat = c.lat.toFixed(6);
    var lng = c.lng.toFixed(6);
    var zoom = c.zoom.toString();
    if (   RouteParams.lat    !== lat
        || RouteParams.lng    !== lng
        || RouteParams.zoom   !== zoom
        || RouteParams.layers !== layersStr ) {

      console.log('map.js route-update Updating Map...');
      redraw();
    }

  });


  leafletData.getMap().then(function (map) {
    map.on('moveend', function () { // move is good too
      var c = map.getCenter();
      var lat = c.lat.toFixed(6);
      var lng = c.lng.toFixed(6);
      var zoom = map.getZoom().toString();

      if (   RouteParams.lat  !== lat
          || RouteParams.lng  !== lng
          || RouteParams.zoom !== zoom ) {

        console.log('map: lat,lng,zoom !== RouteParams');
        RouteParams.lat = lat;
        RouteParams.lng = lng;
        RouteParams.zoom = zoom;
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
