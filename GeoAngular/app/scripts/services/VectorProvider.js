/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *       on 3/19/14.
 */

/**
 * This service is incredible.
 */
angular.module('GeoAngular').factory('VectorProvider', function ($rootScope, $location, $http, Alias) {

  var types = {
    geojson: GeoJSON,
    kml: KML
  }

  function Resource(url, name) {

  }

  function GeoJSON(url, name) {

  }

  function KML(url, name) {

  }


  return {
    /**
     * You can explicity name the type of resource. If not,
     * we will figure it out for you...
     *
     * @param resourceName
     * @param type
     */
    createResource: function(resourceName, type) {
      var url = Alias.find(resourceName);
      if (url === null) {
        console.error('VectorProvider: Invalid Resource Name. Check Alias File...');
        return null;
      }
      if (type) {
        return new types[type.toLowerCase()];
      }
    }
  };
});
