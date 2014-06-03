/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *       on 3/19/14.
 */

angular.module('GeoAngular').factory('VectorProvider', function ($rootScope, $location, $http, LayerConfig) {

  var vector = require('./vector');
  vector.setInjectors($rootScope, $location, $http, LayerConfig);


  /**
   * make the default BBoxURL able to be overridden if specified by the LayerConfig Object.
   * @param config
   * @constructor
   */
  vector.bboxUrl = LayerConfig.bbox.bboxurl;

  var Resource = require('./resource');
  var GeoJSON = require('./geojson');
  var BBoxGeoJSON = require('./bboxgeojson');

  /**
   * This is used by the factory to dynamically state the type (class)
   * that it wants to instantiate.
   *
   * @type {{geojson: GeoJSON, bboxgeojson: BBoxGeoJSON, kml: KML}}
   */
  var types = {
    geojson: GeoJSON,
    bboxgeojson: BBoxGeoJSON,
    kml: KML,
    csv: CSV
  };



  /**
   * Fetches the feature itinerary based on the current bbox.
   *
   * The feature itinerary is a set of features with some properties
   * such as guid and name. The geometry for each of these features
   * has not yet been requested. This is done by _getFeatures.
   */
  function fetchFeatureItinerary() {
    var thisUrl = vector.bboxUrl.replace(':bbox', vector.bbox);
    var proxyPath = config.proxyPath(thisUrl);
    $http.get(thisUrl, {cache: true}).success(function (featItinerary, status) {
      processFeatureItinerary(featItinerary);
    }).error(function() {
      $http.get(proxyPath, {cache: true}).success(function (featItinerary, status) {
        processFeatureItinerary(featItinerary);
      }).error(function() {
        console.error("Unable to fetchFeatureItinerary: " + url);
      });
    });
  }

  function processFeatureItinerary(featItinerary) {
    console.log("FEATURE ITINERARY:");
    for (var j = 0, len = featItinerary.length; j < len; j++) {
      var feat = featItinerary[j];
      if ( feat.iscenter ) {
        vector.centerLevel = feat.level || 0;
        console.log('CENTER ' + feat.name + ' ' + feat.guid + ' ' + feat.level);
      } else {
        console.log(feat.name + ' ' + feat.guid + ' ' + feat.level);
      }
    }

    // if there are no features for the current bounding box
    if (!featItinerary || featItinerary.length === 0) {
      return;
    }

    /**
     * Center feature logic for breadcrumbs.
     */
    for (var i=0, len=featItinerary.length; i < len; ++i) {
      var f = featItinerary[i];
      if (f.iscenter == true) {
        $rootScope.$broadcast('center-feature', f);
      }
    }

    /**
     * BBoxGeoJSON logic
     */
    for(var r = 0, len = vector.bboxResources.length; r < len; ++r) {
      vector.bboxResources[r].processFeatureItinerary(featItinerary);
    }

  }


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
      if (typeof cb === 'function') cb(self._geojson, self);
    });
  };

  KML.prototype.getLayer = function () {
    if (this._geojsonLayer) return this._geojsonLayer;
    var layer =  Resource.prototype.getLayer.call(this);
    this.fetch(function(geojson){
      layer.addData(geojson);
    });
    return layer;
  };

  KML.prototype.eachLayer = function (cb) {
    this._eachLayerCallback = cb;
    this.fetch(function(geojson, self){
      var layers = self._geojsonLayer._layers;
      for (var key in layers) {
        var layer = layers[key];
        cb(layer);
      }
    });
  };

  /**
   * A CSV Resource fetches CSV and parses it
   *
   * @param config
   * @constructor
   */
  function CSV(config) {
    Resource.call(this, config);
    this._geojson = null;
  }

  CSV.prototype = Object.create(Resource.prototype);
  CSV.prototype.constructor = CSV;

  CSV.prototype.latFieldStrings = ["lat", "latitude", "y", "ycenter"];
  CSV.prototype.longFieldStrings = ["lon", "long", "longitude", "x", "xcenter", "lng"];

  CSV.prototype.getLayer = function () {
    if (this._geojsonLayer) return this._geojsonLayer;
    var layer = Resource.prototype.getLayer.call(this);
    this.fetch(function (geojson) {
      layer.addData(geojson);
      layer.eachLayer(function (l) {
        l.on('click', function () {
          $rootScope.$broadcast('details', l);
        });
      });
    });
    return layer;
  };

  CSV.prototype.fetch = function (cb) {
    var self = this;
    Resource.prototype.fetch.call(this, function (data) {
      //data should be the raw csv.

      self._geojson = self.processCsvData(data);

      if (typeof self._config.properties === 'object') {
        angular.extend(self._geojson.properties, self._config.properties);
        self._geojson.properties.srcType = 'csv';
      }
      if (typeof cb === 'function') cb(self._geojson, self);
    });
  };

  CSV.prototype.handleCsv = function (file, layer) {
    console.log("Processing CSV: ", file, ", ", file.name, ", ", file.type, ", ", file.size);
    if (file.data) {
      var decoded = this.bytesToString(this.Base64.decode(file.data));
      this.processCsvData(decoded);
    } else {
      var reader = new FileReader();
      reader.onload = function () {
        console.log("Finished reading CSV data");
        this.processCsvData(reader.result, layer);
      };
      reader.readAsText(file);
    }
  };

  CSV.prototype.getSeparator = function (string) {
    var separators = [",", "      ", ";", "|"];
    var maxSeparatorLength = 0;
    var maxSeparatorValue = "";
    $.each(separators, function (idx, separator) {
      var length = string.split(separator).length;
      if (length > maxSeparatorLength) {
        maxSeparatorLength = length;
        maxSeparatorValue = separator;
      }
    });
    return maxSeparatorValue;
  };

  CSV.prototype.bytesToString = function (b) {
    var s = [];
    $.each(b, function (idx, c) {
      s.push(String.fromCharCode(c));
    });
    return s.join("");
  };

  CSV.prototype.processCsvData = function (data) {
    var newLineIdx = data.indexOf("\n");
    var firstLine = $.trim(data.substr(0, newLineIdx)); //remove extra whitespace, not sure if I need to do this since I threw out space delimiters
    var separator = this.getSeparator(firstLine);
    var csvStore = $.csv.toObjects(data);
    var fieldNames = firstLine.split(separator);

    var latField = null;
    var longField = null;

    var self = this;

    //Find Lat/Lng columns
    for (var i = 0, len = fieldNames.length; i < len; i++) {
      var fieldName = fieldNames[i];
      var matchId;
      matchId = $.inArray(fieldName.toLowerCase(), self.latFieldStrings);
      if (matchId !== -1) {
        latField = fieldName;
      }

      matchId = $.inArray(fieldName.toLowerCase(), self.longFieldStrings);
      if (matchId !== -1) {
        longField = fieldName;
      }
    }

    //If Missing Latfield or LongField, then exit.
    if (!latField) {
      return;
    }
    if (!longField) {
      return;
    }

    var outputGeoJSON = {
      "type": "FeatureCollection",
      "features": []
    };

    for (var i = 0, len = csvStore.length; i < len; i++) {
      var row = csvStore[i];
      var latitude = parseFloat(row[latField]);
      var longitude = parseFloat(row[longField]);

      if (isNaN(latitude) || isNaN(longitude)) {
        return;
      }

      //create GeoJSON fragment
      outputGeoJSON.features.push({
        "type": "Feature",
        "geometry": {"type": "Point", "coordinates": [longitude, latitude]},
        "properties": row
      });
    }

    return outputGeoJSON;
  };

  CSV.prototype.eachLayer = function (cb) {
    this._eachLayerCallback = cb;
    this.fetch(function (geojson, self) {
      var layers = self._geojsonLayer._layers;
      for (var key in layers) {
        var layer = layers[key];
        cb(layer);
      }
    });
  };

  /**
   *
   *  Base64 encode / decode
   *  http://www.webtoolkit.info/
   *
   **/
  CSV.prototype.Base64 = {

    // private property
    _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",

    // public method for encoding
    encode: function (input) {
      var output = "";
      var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
      var i = 0;

      input = Base64._utf8_encode(input);

      while (i < input.length) {

        chr1 = input.charCodeAt(i++);
        chr2 = input.charCodeAt(i++);
        chr3 = input.charCodeAt(i++);

        enc1 = chr1 >> 2;
        enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
        enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
        enc4 = chr3 & 63;

        if (isNaN(chr2)) {
          enc3 = enc4 = 64;
        } else if (isNaN(chr3)) {
          enc4 = 64;
        }

        output = output +
          this._keyStr.charAt(enc1) + this._keyStr.charAt(enc2) +
          this._keyStr.charAt(enc3) + this._keyStr.charAt(enc4);

      }

      return output;
    },

    // public method for decoding
    decode: function (input) {
      var output = "";
      var chr1, chr2, chr3;
      var enc1, enc2, enc3, enc4;
      var i = 0;

      input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

      while (i < input.length) {

        enc1 = this._keyStr.indexOf(input.charAt(i++));
        enc2 = this._keyStr.indexOf(input.charAt(i++));
        enc3 = this._keyStr.indexOf(input.charAt(i++));
        enc4 = this._keyStr.indexOf(input.charAt(i++));

        chr1 = (enc1 << 2) | (enc2 >> 4);
        chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
        chr3 = ((enc3 & 3) << 6) | enc4;

        output = output + String.fromCharCode(chr1);

        if (enc3 != 64) {
          output = output + String.fromCharCode(chr2);
        }
        if (enc4 != 64) {
          output = output + String.fromCharCode(chr3);
        }

      }

      output = this.Base64._utf8_decode(output);

      return output;

    },

    // private method for UTF-8 encoding
    _utf8_encode: function (string) {
      string = string.replace(/\r\n/g, "\n");
      var utftext = "";

      for (var n = 0; n < string.length; n++) {

        var c = string.charCodeAt(n);

        if (c < 128) {
          utftext += String.fromCharCode(c);
        } else if ((c > 127) && (c < 2048)) {
          utftext += String.fromCharCode((c >> 6) | 192);
          utftext += String.fromCharCode((c & 63) | 128);
        } else {
          utftext += String.fromCharCode((c >> 12) | 224);
          utftext += String.fromCharCode(((c >> 6) & 63) | 128);
          utftext += String.fromCharCode((c & 63) | 128);
        }

      }

      return utftext;
    },

    // private method for UTF-8 decoding
    _utf8_decode: function (utftext) {
      var string = "";
      var i = 0;
      var c = c1 = c2 = 0;

      while (i < utftext.length) {

        c = utftext.charCodeAt(i);

        if (c < 128) {
          string += String.fromCharCode(c);
          i++;
        } else if ((c > 191) && (c < 224)) {
          c2 = utftext.charCodeAt(i + 1);
          string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
          i += 2;
        } else {
          c2 = utftext.charCodeAt(i + 1);
          c3 = utftext.charCodeAt(i + 2);
          string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
          i += 3;
        }

      }

      return string;
    }

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
        else if (config.slice(config.length - 3).toLowerCase() === 'csv') {
          return new CSV(config);
        }
        // NH TODO Check a bit more into if this resource is valid GeoJSON
        return new GeoJSON(config);
      }
    },

    /**
     * When the bounding box of the map changes, VectorProvider needs
     * to be notified of the current bounding box so it can fetch the
     * latest vector data for the bbox of the map viewport.
     *
     * The bbox must be WGS84.
     *
     * @param bboxStr "south,west,north,east" === "minX,minY,maxX,maxY"
     */
    updateBBox: function(bboxStr) {
      vector.bbox = bboxStr;

      console.log('VectorProvider bbox: ' + vector.bbox);
      fetchFeatureItinerary();

    },

    /**
     * Returns a feature based on guid and level. You may merge in a set of properties into the
     * called back object if desired (optional).
     *
     * @param guid
     */
    fetchFeature: function(guid, level, propsToMerge, cb) {
      var url = LayerConfig.bbox.featurl.replace(':level', level).replace(':ids', guid);
      var proxyPath = config.proxyPath(url);

      $http.get(url, {cache: true}).success(function (geojson, status) {
        merge(geojson);
      }).error(function(err) {
        $http.get(proxyPath).success(function (geojson, status) {
          merge(geojson);
        }).error(function (err) {
          console.error('Unable to fetchFeature: ' + guid);
        });
      });

      function merge(geojson) {
        /**
         * Deal with bad stuff.
         */
        if (geojson.error) {
          console.error('Unable to fetch feature: ' + geojson.error);
          return;
        }

        if (!geojson.features || geojson.features.length < 1) {
          return;
        }

        // we only are actually asking for 1 feature
        var feat = geojson.features[0];

        // putting existing properties into geojson feature
        if (propsToMerge) {
          for (var key in propsToMerge) {
            feat.properties[key] = propsToMerge[key];
          }
        }

        cb(feat);
      }

    }
  };


});

