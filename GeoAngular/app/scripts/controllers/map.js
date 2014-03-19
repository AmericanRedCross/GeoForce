/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *     on Mon Mar 17 2014
 */

angular.module('GeoAngular').controller('MapCtrl', function($scope, leafletData, Route) {

  var routeParams = Route();

  $scope.test = 'here';
  routeParams.stories = 'inmapctr';

  var lat     = parseFloat(routeParams.lat)   || 0;
  var lng     = parseFloat(routeParams.lng)   || 0;
  var zoom    = parseFloat(routeParams.zoom)  || 2;
  var layers  = routeParams.layers.split(',') || 'http://{s}.tile.osm.org/{z}/{x}/{y}.png';

  // first layer should always be treated as the basemap
  var basemap = layers[0];
  layers = layers.slice(1);

  $scope.center = {
    lat: lat,
    lng: lng,
    zoom: zoom
  };
  $scope.defaults = {
    tileLayer: basemap,
    scrollWheelZoom: true
  }

  leafletData.getMap().then(function(map) {
    map.on('move',function(){ // moveend is good too
      var c = map.getCenter();
      Route({
        lat: c.lat.toFixed(6),
        lng: c.lng.toFixed(6),
        zoom: map.getZoom()
      });
    });
  });


});
