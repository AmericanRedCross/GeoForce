/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *     on Mon Mar 17 2014
 */

// global map object used for debugging only
m = {};

angular.module('GeoAngular').controller('MapCtrl', function ($scope, leafletData, Route, Alias, VectorProvider) {

  var routeParams = Route();

  function setParams(routeParams) {
    var lat = parseFloat(routeParams.lat) || 0;
    var lng = parseFloat(routeParams.lng) || 0;
    var zoom = parseFloat(routeParams.zoom) || 2;
    var layers = routeParams.layers.split(',') || Alias.redcross;


    // first layer should always be treated as the basemap
    var basemap = Alias.find(layers[0]) || Alias.redcross;
    var overlays = layers.slice(1);

    if (Array.isArray(overlays) && overlays.length > 0)
      addOverlays(overlays);

    $scope.center = {
      lat: lat,
      lng: lng,
      zoom: zoom
    };
    $scope.defaults = {
      scrollWheelZoom: true
    }
    $scope.tiles = {
      url: basemap
    };
  }
  setParams(routeParams);


  $scope.$on('route-init', function (event, params) {
    setParams(params);
  });

  $scope.$on('route-update', function (event, params) {
    setParams(params);
  });


  leafletData.getMap().then(function (map) {
    m = map;
    map.on('moveend', function () { // move is good too
      var c = map.getCenter();
      Route({
        lat: c.lat.toFixed(6),
        lng: c.lng.toFixed(6),
        zoom: map.getZoom()
      });
    });
  });


  function addOverlays(overlays) {
    leafletData.getMap().then(function (map) {
      console.log('Adding Overlays...' + JSON.stringify(overlays));
      for (var i = 0, len = overlays.length; i < len; ++i) {
        var o = overlays[i];

        // KML
        if (o.slice(o.length - 3) === 'kml') {
          addKml(o);
        }

      }

    });
  }


  function addKml(url) {
    omnivore.kml(o).on('ready',function (p) {
      // when this is fired, the layer
      // is done being initialized
      console.log('kml ready');
      console.log(p);

    }).on('error',function (e) {
          console.warn('Error loading kml. Trying php proxy...');

          var layer = omnivore.kml('proxy.php?' + o).on('error', function (e) {
            console.error('giving up loading kml...');
          })

          layer.addTo(map);


        }).addTo(map);
  }


  function addGeoJson(url) {

  }

});
