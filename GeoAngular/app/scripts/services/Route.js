/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *     on Mon Mar 17 2014
 */

angular.module('GeoAngular').factory('Route', function ($rootScope, $location) {

  // default route parameters. gets reset by AppCtrl.
  var params = {
    lat: '0',
    lng: '0',
    zoom: '2',
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
      angular.extend(params, routeParams);
      updateLocation();
      $rootScope.$broadcast('route-update', params);
    }
    return params;
  };


//  {
//    get: function () {
//      return params;
//    },
//
//    /**
//     * This will replace the internal params object completely.
//     * @param routeParams
//     */
//    set: function (routeParams) {
//      params = routeParams;
//      updateLocation();
//      $rootScope.$broadcast('route-update', params);
//    },
//
//    /**
//     * You can provide a subset or superset of params and
//     * the object will be updated accordingly.
//     * @param routeParams
//     */
//    update: function (routeParams) {
//      for (var param in routeParams) {
//        params[param] = routeParams[param];
//      }
//      updateLocation();
//      $rootScope.$broadcast('route-update', params);
//    }
//  };

});
