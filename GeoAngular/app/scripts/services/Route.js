/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *     on Mon Mar 17 2014
 */

angular.module('GeoAngular').factory('Route', function ($rootScope, $location) {

  var init = true;

  // default route parameters. gets reset by AppCtrl.
  var params = {
    lat: '45',
    lng: '0',
    zoom: '4',
    layers: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
    stories: 'Route' //NH TODO take out, just for debugging...
  };

  function updateLocation() {
    $location.path( '/map@' + params.lat +
        ',' + params.lng +
        ',' + params.zoom +
        '(' + params.layers +
        ')/stories/' + params.stories);
  }

  return function(routeParams) {
    // only do this stuff if we have an arg in the fn call
    if (typeof routeParams !== 'undefined' && routeParams !== null) {
      if (init) {
        params = routeParams;
        $rootScope.$broadcast('route-init', params);
        console.log('route-init');
        console.log(JSON.stringify(params));
        init = false;
      } else {
        angular.extend(params, routeParams);
        updateLocation();
        $rootScope.$broadcast('route-update', params);
        console.log('route-update');
        console.log(JSON.stringify(params));
      }
    }
    return params;
  };

});
