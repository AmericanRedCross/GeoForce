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
    this.url = url;
    this.name = name;
  }

  Resource.prototype._fetch = function(cb) {
    $http.get(this.url).success(function (data, status) {
      cb(data, this.name, this.url);
    });
  }

  function GeoJSON(url, name) {
    Resource.call(this, url, name);
  }

  GeoJSON.prototype = Object.create(Resource.prototype);
  GeoJSON.prototype.constructor = GeoJSON;

  GeoJSON.prototype.fetch = function (cb) {
    this._fetch(cb);
  }


  function KML(url, name) {
    Resource.call(this, url, name);
  }

  KML.prototype = Object.create(Resource.prototype);
  KML.prototype.constructor = KML;

  KML.prototype.fetch = function (cb) {
    $http.get(url).success(function (data, status) {
      var geoJson = toGeoJSON.kml(data);
      cb(geoJson);
    }).error(function () {
        console.log("Trying proxy for " + this.name);
        //NH TODO proxy url
        $http.get('' + url).success(function (data, status) {
          var geoJson = toGeoJSON.kml(data);
          cb(geoJson);
        }).error(function () {
            //NH TODO proxy url
            $http.get('' + url).success(function (data, status) {
              console.log("Trying proxy2 for " + this.name);
              var geoJson = toGeoJSON.kml(data);
              cb(geoJson);
            }).error(function() {
                console.log('I give up: ' + this.name);
              });
          });
      });
  }

  return {
    /**
     * You can explicity name the type of resource. If not,
     * we will figure it out for you...
     *
     * @param resourceName
     * @param type
     */
    createResource: function (resourceName, type) {
      var url = Alias.find(resourceName);
      if (url === null) {
        console.error('VectorProvider: Invalid Resource Name. Check Alias File...');
        return null;
      }
      if (type) {
        return new types[type.toLowerCase()]();
      } else {
        if (url.slice(url.length - 3).toLowerCase() === 'kml') {
          return new KML(url, name);
        }
        // NH TODO Check a bit more into if this resource is valid GeoJSON
        return new GeoJSON(url, name);
      }
    }
  };
});
