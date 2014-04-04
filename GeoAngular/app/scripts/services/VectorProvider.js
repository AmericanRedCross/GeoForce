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
   * Whenever we get a bbox, we put it in a hash and have it == true.
   * This is so we can check to see if we have ever requested the given
   * bbox and only ever ask for it once.
   */
  var bboxHash = {};

  /**
   * Every resource that has been instantiated.
   * @type {Array}
   */
  var resources = [];
  debug.resources = resources;

  /**
   * Every resource with a bounding box fetching mechanism.
   * @type {Array}
   */
  var bboxResources = [];
  debug.bboxResources = bboxResources;


  /**
   * All VectorProvider resources are children of this class.
   * @param config
   * @constructor
   */
  function Resource(config) {
    resources.push(this);
    this._config = config;
    this._url = null;
    if (typeof config === 'object') {
      this._url = config.url;
    } else {
      this._url = config;
    }

    this._eachLayerCallback = null;
    this._layer = null;
  }


  /**
   * Fetches data from the given url of a resource.
   * Subclasses then handle the callback accordingly.
   *
   * Needs to also try to get a resource via the Chubbs
   * proxy.
   *
   * @param cb
   */
  Resource.prototype.fetch = function(cb) {

    $http.get(this._url, {cache: true}).success(function (data, status) {
      cb(data);
    }).error(function() {
      //NH TODO Deal with proxy logic.
      console.log("Trying proxy for " + this.name);

    });

  };


  /**
   * Returns the Leaflet GeoJSON Layer associated with the
   * Resource or creates a new one.
   *
   * @returns {null|*}
   */
  Resource.prototype.getLayer = function () {
    if (typeof this._layer !== 'undefined' && this._layer !== null) {
      return this._layer;
    }

    this._layer = L.geoJson(this._geojson || null, {
      style: L.mapbox.simplestyle.style,
      pointToLayer: function(feature, latlon) {
        if (!feature.properties) feature.properties = {};
        if (feature.properties.scale) {
          return L.circleMarker(latlon, {
            fillColor: feature.properties.color || '#FF0000',
            radius: 20 * feature.properties.scale
          });
        }
        return L.mapbox.marker.style(feature, latlon);
      }
    }).eachLayer(this._eachLayerCallback);


    return this._layer;
  };

  Resource.prototype.eachLayer = function (cb) {
    this._eachLayerCallback = cb;
    this._layer.eachLayer(cb);
  };



  /**
   * This is a basic GeoJSON VectorProvider.
   * @param config
   * @constructor
   */
  function GeoJSON(config) {
    Resource.call(this, config);
    this._geojson = null;
  }

  GeoJSON.prototype = Object.create(Resource.prototype);
  GeoJSON.prototype.constructor = GeoJSON;

  GeoJSON.prototype.fetch = function (cb) {
    if (this._geojson && typeof cb === 'function') {
      cb(this._geojson);
      return;
    }
    var self = this;
    Resource.prototype.fetch.call(this, function(data) {
      self._geojson = data;
      if (typeof self._config.properties === 'object') {
        angular.extend(self._geojson.properties, self._config.properties);
      }
      if (self._layer !== 'undefined' && self._layer !== null) {
        this._layer.addData(self._geojson);
      }
      if (typeof cb === 'function') cb(self._geojson);
    });
  };


  function BBoxGeoJSON(config) {
    Resource.call(this, config);
    this._bboxurl = config.bboxurl;
    this._fetchedFeatures = [];
    bboxResources.push(this);
  }

  BBoxGeoJSON.prototype = Object.create(Resource.prototype);
  BBoxGeoJSON.prototype.constructor = BBoxGeoJSON;

  BBoxGeoJSON.prototype._getFeatures = function (cb) {

  };

  BBoxGeoJSON.prototype._fetchIDsForBBox = function() {
    var url = this._bboxurl.replace(':bbox', bbox);
    var self = this;
    $http.get(url, {cache: true}).success(function (idsArr, status) {
      console.log('idsArr: ' + JSON.stringify(idsArr));
    }).error(function() {
      //NH TODO Deal with proxy logic.
      console.error("Need to try proxy for _fetchForBBox");

    });
  };


  /**
   * A KML Resource fetches KML and parses it with togeojson.js
   * Note that togeojson.js has bugs and does not accurately parse
   * some of the KML sources we have tested with. This library has
   * been modified with my hotfixes.
   *
   * @param config
   * @constructor
   */
  function KML(config) {
    Resource.call(this, config);
    this._geojson = null;
  }

  KML.prototype = Object.create(Resource.prototype);
  KML.prototype.constructor = KML;

  KML.prototype.fetch = function (cb) {
    var self = this;
    Resource.prototype.fetch.call(this, function(data) {
      var xml = $.parseXML(data);
      self._geojson = toGeoJSON.kml(xml);
      if (typeof self._config.properties === 'object') {
        angular.extend(self._geojson.properties, self._config.properties);
        self._geojson.properties.srcType = 'kml';
      }
      if (typeof cb === 'function') cb(self._geojson);
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
      var config = LayerConfig.find(resourceName);
      if (config === null) {
        console.error('VectorProvider: Invalid Resource Configuration Name. Check LayerConfig File...');
        return null;
      }
      if (type || config.type) {
        // if the resource is just a string, then it should be a url
        return new types[(type || config.type).toLowerCase()](config);
      } else {
        if (config.slice(config.length - 3).toLowerCase() === 'kml') {
          return new KML(config);
        }
        // NH TODO Check a bit more into if this resource is valid GeoJSON
        return new GeoJSON(config);
      }
    },

    /**
     * When the bounding box of the map changes, VectorProvider needs
     * to be notified of the current bounding box so it can getch the
     * latest vector data for the bbox of the map viewport.
     *
     * The bbox must be WGS84.
     *
     * @param bboxStr "south,west,north,east" === "minX,minY,maxX,maxY"
     */
    updateBBox: function(bboxStr) {
      bbox = bboxStr;

      var alreadyFetched = bboxHash[bboxStr];
      if (!alreadyFetched) {
        bboxHash[bboxStr] = true;
        console.log('VectorProvider bbox: ' + bbox);
        for(var i = 0, len = bboxResources.length; i < len; ++i) {
          bboxResources[i]._fetchIDsForBBox();
        }
      }

    }
  };
});
