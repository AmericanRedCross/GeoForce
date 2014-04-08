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
    this._geojsonLayer = null;
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
    if (typeof this._geojsonLayer !== 'undefined' && this._geojsonLayer !== null) {
      return this._geojsonLayer;
    }

    this._geojsonLayer = L.geoJson(this._geojson || null, {
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


    return this._geojsonLayer;
  };

  Resource.prototype.eachLayer = function (cb) {
    this._eachLayerCallback = cb;
    this._geojsonLayer.eachLayer(cb);
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

      if (typeof cb === 'function') cb(self._geojson);
    });
  };

  GeoJSON.prototype.getLayer = function() {
    if (this._geojsonLayer) return this._geojsonLayer;
    var layer =  Resource.prototype.getLayer.call(this);
    this.fetch(function(geojson){
      layer.addData(geojson);
    });
    return layer;
  };






  function BBoxGeoJSON(config) {
    Resource.call(this, config);
    this._bboxurl = config.bboxurl;
    this._features = {};
    this._featureLayersByLevel = {};
    this._allFeatureLayers = {};
    this._featureLabels = new L.spatialdev.featurelabel.FeatureSet();

    bboxResources.push(this);
  }

  BBoxGeoJSON.prototype = Object.create(Resource.prototype);
  BBoxGeoJSON.prototype.constructor = BBoxGeoJSON;

  BBoxGeoJSON.prototype._getFeatures = function (featObj) {
    var url = this._url.replace(':level', featObj.level).replace(':ids', featObj.guid);
    var self = this;
    // not cached because we only fetch when we dont have the feature in the hash
    $http.get(url).success(function (geojson, status) {

      if (geojson.error) {
        console.error('Unable to fetch feature: ' + geojson.error);
        return;
      }
      var feat = geojson.features[0];

      // putting existing properties into new feature object properties
      for (var key in featObj) {
        feat.properties[key] = featObj[key];
        delete featObj[key];
      }

      // extending properties from the config file
      for (var key in self._config.properties) {
        feat.properties[key] = self._config.properties[key];
      }

      for (var k in feat) {
        featObj[k] = feat[k];
      }
      angular.extend(featObj, feat);
      console.log('fetched feature: ' + featObj.properties.name);

      if (!self._geojsonLayer) {
        self._getLayer();
        console.log('creating layer in _getFeatures');
      }

      var options = self._geojsonLayer.options;
      var featLayer = L.GeoJSON.geometryToLayer(featObj, options.pointToLayer, options.coordsToLatLng, options);
      featLayer.feature = L.GeoJSON.asFeature(featObj);
      featLayer.defaultOptions = featLayer.options;
      self._geojsonLayer.resetStyle(featLayer);
      if (options.onEachFeature) {
        options.onEachFeature(featObj, featLayer);
      }

      BBoxGeoJSON_addLayer(self, featLayer);

    }).error(function(err) {
      //NH TODO Deal with proxy logic.
      console.error("Unable to fetch feature: " + err);

    });
  };


  /**
   * Should only be used by BBoxLayer objects.
   * Consider this a private method.
   *
   * @param self
   * @param featLayer
   */
  function BBoxGeoJSON_addLayer(self, featLayer) {

    self._featureLabels.addFeature(featLayer);
    self._geojsonLayer.addLayer(featLayer);
//    self._featureLabels.addFeature(featLayer);

    var props = featLayer.feature.properties;
    var level = props.level;
    if (!self._featureLayersByLevel[level]) {
      self._featureLayersByLevel[level] = [];
    }
    self._featureLayersByLevel[level].push(featLayer);
    self._allFeatureLayers[props.guid] = featLayer;
  }


  /**
   * Fetches the feature itinerary based on the current bbox.
   *
   * The feature itinerary is a set of features with some properties
   * such as guid and name. The geometry for each of these features
   * has not yet been requested. This is done by _getFeatures.
   */
  BBoxGeoJSON.prototype.fetchFeatureItinerary = function() {
    var url = this._bboxurl.replace(':bbox', bbox);
    var self = this;
    $http.get(url, {cache: true}).success(function (featItinerary, status) {
      console.log('featItinerary: ' + JSON.stringify(featItinerary));
      var activeLevels = {};
      self._activeLevels = activeLevels;
      for (var i=0, len=featItinerary.length; i < len; ++i) {
        var o = featItinerary[i];
        activeLevels[o.level] = true;
        var guid = o.guid || o.id;
        if (!self._features[guid]) {
          // adding feature to features hash (all features ever)
          self._features[guid] = o;
          // getting the features (including basic, simplified geometry)
          self._getFeatures(o);
        } else {
          // NH TODO: Test to see what happens when layers get re-added but the geometry still hasn't gotten here.

          // if we already have a layer and it is not on the map but should be there, add it to the geojson layer
          var l = self._allFeatureLayers[guid];
          if (l) {
            BBoxGeoJSON_addLayer(self, l);
          }

        }
      }
      self._removeInactiveLayers(self);

    }).error(function() {
      //NH TODO Deal with proxy logic.
      console.error("Need to try proxy for _fetchForBBox");

    });
  };


  /**
   * For all of the active layers that we have, remove layers that are
   * not part of the current set of active levels.
   *
   * @private
   */
  BBoxGeoJSON.prototype._removeInactiveLayers = function(self) {
    var activeLevels = this._activeLevels;
    var featureLayersByLevel = this._featureLayersByLevel;
    for (var level in featureLayersByLevel) {
      // if the level is not an active level, remove from map
      if (!activeLevels[level]) {
        var layers = featureLayersByLevel[level];
        for (var i = 0, len = layers.length; i < len; ++i) {
          var layer = layers[i];
          self._geojsonLayer.removeLayer(layer);

          // NH TODO Have the label be in the featureLayer
          if (layer.label) debug.map.removeLayer(layer.label);

          console.log('Removed Layer: ' + layer.feature.properties.name);
        }
        delete featureLayersByLevel[level];
      }
    }
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

      console.log('VectorProvider bbox: ' + bbox);
      for(var i = 0, len = bboxResources.length; i < len; ++i) {
        bboxResources[i].fetchFeatureItinerary();
      }

    }
  };
});
