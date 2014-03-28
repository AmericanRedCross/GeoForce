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
    this.srcData = null;
    this.geojson = null;
  }

  Resource.prototype._fetch = function(cb) {
    if (typeof this.geojson !== 'undefined' && this.geojson !== null) {
      cb(this.geojson, this.name, this.url);
    } else {
      $http.get(this.url).success(function (data, status) {
        this.srcData = data;
        cb(data, this.name, this.url);
      }).error(function() {
        console.log("Trying proxy for " + this.name);

      });
    }
  };

  function GeoJSON(url, name) {
    Resource.call(this, url, name);
  }

  GeoJSON.prototype = Object.create(Resource.prototype);
  GeoJSON.prototype.constructor = GeoJSON;

  GeoJSON.prototype.fetch = function (cb) {
    this._fetch(function(data) {
      this.geojson = data;
      cb(data);
    });
  }


  function KML(url, name) {
    Resource.call(this, url, name);
  }

  KML.prototype = Object.create(Resource.prototype);
  KML.prototype.constructor = KML;

  KML.prototype.fetch = function (cb) {
    this._fetch(function(data) {
      this.geojson = toGeoJSON.kml(data);
      cb(this.geojson);
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
