/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *     on Mon Mar 17 2014
 */

angular.module('GeoAngular').factory('Route', function ($location, LayerConfig) {

  function parseRoute() {
    var path = $location.path();
    var coords = path.slice(path.indexOf('@')+1,path.indexOf('(')).split(',');
    var lat =  coords[0] || '0';
    var lng =  coords[1] || '0';
    var zoom = coords[2] || '2';
    var layers = path.slice(path.indexOf('(')+1,path.indexOf(')')) || LayerConfig.redcross;
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
    };
  }


  function getMapPathAppended(routeFragment) {
    var loc = $location.path();
    if (loc.indexOf('map@') === -1) {
      console.error('appendMapPath failed. You are currently not at a valid location with a map route');
      loc = '/map@0,0,2(redcross)';
    }
    var idx = loc.indexOf(')') + 1;
    loc = loc.slice(0,idx);
    if (!routeFragment) routeFragment = '';
    else if (routeFragment[0] !== '/') routeFragment = '/' + routeFragment;
    return loc + routeFragment;
  }

  return {
    parseRoute: parseRoute,
    getMapPathAppended: getMapPathAppended,

    updateLocation: function() {
      var oldParams = parseRoute();
      if (  oldParams.lat !== RouteParams.lat   ||
        oldParams.lng !== RouteParams.lng   ||
        oldParams.zoom !== RouteParams.zoom ||
        oldParams.layers !== RouteParams.layers  ) {

        console.log('Updating location...');
        var path = '/map@' + RouteParams.lat +
          ',' + RouteParams.lng +
          ',' + RouteParams.zoom +
          '(' + RouteParams.layers + ')';

        $location.path(path);
      }
    },

    navTo: function(routeFragment) {
      var path = getMapPathAppended(routeFragment);
      console.log('navTo: ' + path);
      $location.path(path);
    }

  };


});
