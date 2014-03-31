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
  var layersStr = null;

  function setParams() {
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
    var overlays = layers.slice(1);

    if (lastLayersStr !== layersStr) {
      console.log('Setting layers.');
      if (Array.isArray(overlays) && overlays.length > 0)
        addOverlays(overlays);

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
  setParams();

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
      setParams();
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
  });


  function addOverlays(overlays) {
    leafletData.getMap().then(function (map) {

      for (var i = 0, len = overlays.length; i < len; ++i) {
        var o = overlays[i];
        var vecRes = VectorProvider.createResource(o);
        vecRes.fetch(function(geojson){

          L.geoJson(geojson, {
            style: L.mapbox.simplestyle.style,
            pointToLayer: function(feature, latlon) {
              if (!feature.properties) feature.properties = {};
              return L.mapbox.marker.style(feature, latlon);
            }
          }).eachLayer(add).addTo(map);

          function add(l) {

          }

        });
      }

    });
  }


});
