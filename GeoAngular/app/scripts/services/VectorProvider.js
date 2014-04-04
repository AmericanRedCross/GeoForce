/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *       on 3/19/14.
 */

/**
 * This service is incredible.
 */
angular.module('GeoAngular').factory('VectorProvider', function ($rootScope, $location, $http, LayerConfig) {

  /**
   * This is used by the factory to dynamically state the type (class)
   * that it wants to instantiate.
   *
   * @type {{geojson: GeoJSON, bboxgeojson: BBoxGeoJSON, kml: KML}}
   */
  var types = {
    geojson: GeoJSON,
    bboxgeojson: BBoxGeoJSON,
    kml: KML
  };

  /**
   * This is updated by updateBBox. It is then used to query all
   * VectorProviders that use a bounding box to get additional
   * features.
   *
   * @type {string}
   */
  var bbox = null;

  /**
   * Every resource that has been instantiated.
   * @type {Array}
   */
  var resources = [];
  debug.resources = resources;

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

  Resource.prototype.fetch = function(cb) {
    if (typeof this.geojson !== 'undefined' && this.geojson !== null) {
      cb();
    } else {
      $http.get(this.url, {cache: true}).success(function (data, status) {
        cb(data);
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
    Resource.prototype.fetch.call(this, function(data) {
      self.geojson = data;
      if (typeof self.config.properties === 'object') {
        angular.extend(self.geojson.properties, self.config.properties);
      }
      cb(self.geojson);
    });
  };


  function BBoxGeoJSON(config) {
    GeoJSON.call(this, config);
    this.bboxurl = config.bboxurl;
  }

  BBoxGeoJSON.prototype = Object.create(GeoJSON.prototype);
  BBoxGeoJSON.prototype.constructor = BBoxGeoJSON;

  BBoxGeoJSON.prototype.fetch = function (cb) {

  };


  function KML(config) {
    Resource.call(this, config);
  }

  KML.prototype = Object.create(Resource.prototype);
  KML.prototype.constructor = KML;

  KML.prototype.fetch = function (cb) {
    var self = this;
    Resource.prototype.fetch.call(this, function() {
      var xml = $.parseXML(self.srcData);
      self.geojson = toGeoJSON.kml(xml);
      if (typeof self.config.properties === 'object') {
        angular.extend(self.geojson.properties, self.config.properties);
        self.geojson.properties.srcType = 'kml';
      }
      cb(self.geojson);
    });
  };

  return {
    /**
     * You can explicitly name the type of resource. If not,
     * we will figure it out for you...
     *
     * @param resourceName
     * @param type
     */
    createResource: function (resourceName, type) {
      var res = null;
      var config = LayerConfig.find(resourceName);
      if (config === null) {
        console.error('VectorProvider: Invalid Resource Configuration Name. Check LayerConfig File...');
        return null;
      }
      if (type || config.type) {
        // if the resource is just a string, then it should be a url
        res = new types[(type || config.type).toLowerCase()](config);
        resources.push(res);
        return res;
      } else {
        if (config.slice(config.length - 3).toLowerCase() === 'kml') {
          res = new KML(config);
          resources.push(res);
          return res;
        }
        // NH TODO Check a bit more into if this resource is valid GeoJSON
        res = new GeoJSON(config);
        resources.push(res);
        return res;
      }
    },

    updateBBox: function(bboxStr) {
      bbox = bboxStr;
      console.log('VectorProvider bbox: ' + bbox);
    }
  };
});
