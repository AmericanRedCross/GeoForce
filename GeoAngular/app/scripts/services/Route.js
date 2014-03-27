/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *     on Mon Mar 17 2014
 */

angular.module('GeoAngular').factory('Route', function ($rootScope, $location, Alias) {

  var init = true;

  // default route parameters. gets reset by AppCtrl.
  var params = {
    lat: 45,
    lng: 0,
    zoom: 4,
    layers: Alias.osm
  };

  function updateLocation() {
    var path = '/map@' + params.lat +
      ',' + params.lng +
      ',' + params.zoom +
      '(' + params.layers + ')';
    if (params.stories) path += '/stories/' + params.stories;
    if (params.landing) path += '/landing';

    $location.path(path);
  }

  /**
   * Simple object equality test. angular.equals is expensive.
   * @param obj1
   * @param obj2
   * @returns {boolean}
   */
  function equals(obj1, obj2) {
    if (Object.keys(obj1).length !== Object.keys(obj2).length)
      return false;
    for (var key in obj1) {
      if (obj1[key] !== obj2[key])
        return false;
    }
    return true;
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
    updateLocation: updateLocation,
    get: function() {
      // NH good way to test if outsiders are messing with inside
//    return angular.extend({},params);
      return params;
    },
    update: function(routeParams) {
      // only do this stuff if we have an arg in the fn call
      if (typeof routeParams !== 'undefined' && routeParams !== null) {
        if (init) {
          params = routeParams;
          $rootScope.$broadcast('route-init', params);
          console.log('route-init');
          console.log(JSON.stringify(params));
          init = false;
        } else {
          // Angular is trolling Route. We don't want to do 3 broadcasts of the same thing.
          //NH TODO: Figure out why this is true when initial landing link is clicked
//        if ( equals(params,routeParams) ) return params;
          angular.extend(params, routeParams);
          updateLocation();
          $rootScope.$broadcast('route-update', params);
          console.log('route-update');
          console.log(JSON.stringify(params));
        }
      }
      // NH good way to test if outsiders are messing with inside
//    return angular.extend({},params);
      return params;
    },
    getMapPathAppended: getMapPathAppended,
    navTo: function(routeFragment) {
      var path = getMapPathAppended(routeFragment);
      console.log('navTo: ' + path);
      $location.path(path);
    }
  };


});
