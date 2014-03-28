/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *     on Mon Mar 17 2014
 */

// global map object used for debugging only
m = {};

angular.module('GeoAngular').controller('MapCtrl', function ($scope, leafletData, Route, Alias, VectorProvider) {
  console.log('MapCtrl');

  var routeParams = Route.get();

  var lastLayersStr = '';
  $scope.blur = '';

  //Init activeTheme property
  $scope.activeTheme = "Projects";


  function setParams(routeParams) {
    if (routeParams.landing) {
      console.log('landing');
      $scope.blur = 'blur';
    } else {
      $scope.blur = '';
    }
    var lat = parseFloat(routeParams.lat) || 0;
    var lng = parseFloat(routeParams.lng) || 0;
    var zoom = parseFloat(routeParams.zoom) || 2;
    var layersStr = routeParams.layers;
    var layers = layersStr.split(',') || Alias.redcross;

    // first layer should always be treated as the basemap
    var basemap = Alias.find(layers[0]) || Alias.redcross;
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
  setParams(routeParams);


  $scope.$on('route-init', function (event, params) {
    setParams(params);
  });

  $scope.$on('route-update', function (event, params) {
    setParams(params);
  });

  $scope.$on('remove-blur', function (event) {
    $scope.blur = '';
  });

  leafletData.getMap().then(function (map) {
    m = map;
    map.on('moveend', function () { // move is good too
      var c = map.getCenter();
      var lat = parseFloat(c.lat.toFixed(6));
      var lng = parseFloat(c.lng.toFixed(6));
      var zoom = map.getZoom();

      var params = Route.get();

      if (   params.lat  !== lat
          || params.lng  !== lng
          || params.zoom !== zoom ) {

        console.log('map lat,lng,zoom !== params');
        Route.update({
          lat: parseFloat(c.lat.toFixed(6)),
          lng: parseFloat(c.lng.toFixed(6)),
          zoom: map.getZoom()
        });

      }

    });
  });


  function addOverlays(overlays) {
    leafletData.getMap().then(function (map) {

      for (var i = 0, len = overlays.length; i < len; ++i) {
        var o = overlays[i];
        var vecRes = VectorProvider.createResource(o);
        vecRes.fetch(function(geojson, name){
          $scope.geojson = {
            data: geojson,
            style: {
              fillColor: "green",
              weight: 2,
              opacity: 1,
              color: 'white',
              dashArray: '3',
              fillOpacity: 0.7
            }
          }
        });
      }

    });
  }


});
