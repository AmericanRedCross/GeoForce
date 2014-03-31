/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *       on 3/19/14.
 */

/**
 * This service is incredible.
 */
angular.module('GeoAngular').factory('VectorProvider', function ($rootScope, $location, $http, LayerConfig) {

  var types = {
    geojson: GeoJSON,
    kml: KML
  };

  function Resource(config) {
    this.config = config;
    this.url = null;
    if (typeof config === 'object') {
      this.url = config.url;
    } else {
      this.url = config;
    }
    this.srcData = null;
    this.geojson = null;
  }

  Resource.prototype._fetch = function(cb) {
    if (typeof this.geojson !== 'undefined' && this.geojson !== null) {
      cb();
    } else {
      var self = this;
      $http.get(this.url).success(function (data, status) {
        self.srcData = data;
        cb();
      }).error(function() {
        console.log("Trying proxy for " + this.name);

      });
    }
  };

  function GeoJSON(config) {
    Resource.call(this, config);
  }

  GeoJSON.prototype = Object.create(Resource.prototype);
  GeoJSON.prototype.constructor = GeoJSON;

  GeoJSON.prototype.fetch = function (cb) {
    var self = this;
    this._fetch(function() {
      self.geojson = self.srcData;
      if (typeof self.config.properties === 'object') {
        angular.extend(self.geojson.properties, self.config.properties);
      }
      cb(self.geojson);
    });
  };


  function KML(config) {
    Resource.call(this, config);
  }

  KML.prototype = Object.create(Resource.prototype);
  KML.prototype.constructor = KML;

  KML.prototype.fetch = function (cb) {
    var self = this;
    this._fetch(function() {
      self.geojson = toGeoJSON.kml(self.srcData);
      if (typeof self.config.properties === 'object') {
        angular.extend(self.geojson.properties, self.config.properties);
      }
      cb(self.geojson);
    });
  };

  return {
    /**
     * You can explicity name the type of resource. If not,
     * we will figure it out for you...
     *
     * @param resourceName
     * @param type
     */
    createResource: function (resourceName, type) {
      var res = LayerConfig.find(resourceName);
      if (res === null) {
        console.error('VectorProvider: Invalid Resource Name. Check LayerConfig File...');
        return null;
      }
      if (type || res.type) {
        // if the resource is just a string, then it should be a url
        return new types[(type || res.type).toLowerCase()](res);
      } else {
        if (res.slice(res.length - 3).toLowerCase() === 'kml') {
          return new KML(res);
        }
        // NH TODO Check a bit more into if this resource is valid GeoJSON
        return new GeoJSON(res);
      }
    }
  };
});
