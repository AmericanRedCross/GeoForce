/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *     on Mon Mar 17 2014
 */

angular.module('GeoAngular').controller('MapCtrl', function($scope, leafletData, Route, Alias) {

  var routeParams = Route();

  function setParams(routeParams) {
    var lat     = parseFloat(routeParams.lat)   || 0;
    var lng     = parseFloat(routeParams.lng)   || 0;
    var zoom    = parseFloat(routeParams.zoom)  || 2;
    var layers  = routeParams.layers.split(',') || Alias.redcross;


    // first layer should always be treated as the basemap
    var basemap = Alias.find(layers[0]) || Alias.redcross;
    var overlays = [];

    for(var i = 1, len = layers.length; i<len; ++i) {
      var o = Alias.find(layers[i]);
      if (o) overlays.push(o);
    }
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


  leafletData.getMap().then(function(map) {
    map.on('moveend',function(){ // move is good too
      var c = map.getCenter();
      Route({
        lat: c.lat.toFixed(6),
        lng: c.lng.toFixed(6),
        zoom: map.getZoom()
      });
    });
  });


  function addOverlays(overlays) {
    console.log('Adding Overlays...');
    console.log(JSON.stringify(overlays));


  }

});
