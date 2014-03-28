/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *       on 3/28/14.
 */

angular.module('GeoAngular').factory('RouteParser', function ($location, Alias) {
  return function() {
    var path = $location.path();
    var coords = path.slice(path.indexOf('@')+1,path.indexOf('(')).split(',');
    var lat =  coords[0] || '0';
    var lng =  coords[1] || '0';
    var zoom = coords[2] || '2';
    var layers = path.slice(path.indexOf('(')+1,path.indexOf(')')) || Alias.redcross;
    var landing = false;
    if (path.indexOf('landing') != -1) {
      landing = true;
    }

    return {
      lat: lat,
      lng: lng,
      zoom: zoom,
      layers: layers,
      landing: landing
    }
  };
});
