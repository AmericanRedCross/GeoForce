/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *       on 4/7/14.
 */

(function () {
  'use strict';

  L.spatialdev.featurelabel.FeatureSet = function () {
    this.features = [];
    this._pathIdHash = {};
    L.spatialdev.featurelabel.featureSets.push(this);
  };

  L.spatialdev.featurelabel.FeatureSet.prototype.addFeature = function (featureLayer) {
    this.features.push(featureLayer);

    // feature consists of one polygon
    if (!featureLayer._layers) {
      var leafletId = featureLayer._leaflet_id;
      this._pathIdHash[leafletId] = featureLayer;
    }

    // feature consists of several polygons
    else {
      for (var id in featureLayer._layers) {
        var pathLayer = featureLayer._layers[id];
        var leafletId = pathLayer._leaflet_id;
        this._pathIdHash[leafletId] = featureLayer;
      }
    }

  };

  L.spatialdev.featurelabel.FeatureSet.prototype._pathUpdated = function (leafletId) {
    var featureLayer = this._pathIdHash[leafletId];

    // If the id doesnt hash, no path for the features in are feature set apply.
    if (!featureLayer) return;

    if (featureLayer._layers) {

      // only calculate center after all of the polygons have been updated
      if (!featureLayer.pathsUpdated) featureLayer.pathsUpdated = 0;
      ++featureLayer.pathsUpdated;

      if (featureLayer.pathsUpdated === Object.keys(featureLayer._layers).length) {
        var l = findMostComplexLayer(featureLayer._layers);

        if (l) {
          var center = calculateCenter(l._parts);
          featureLayer.label = new L.spatialdev.featurelabel.Label(center, featureLayer.feature.properties.name);
        }

        featureLayer.pathsUpdated = 0;
      }

    } else {

      // there is only one polygon, so calculate center. also check to see if there are parts
      if ( featureLayer._parts && featureLayer._parts.length ) {
        var center = calculateCenter(featureLayer._parts);
        featureLayer.label = new L.spatialdev.featurelabel.Label(center, featureLayer.feature.properties.name);
      }

    }

  };

  function calculateCenter(parts) {
    var xSum = 0;
    var ySum = 0;
    var pointSum = 0;
    for (var i = 0, len = parts.length; i < len; ++i) {
      var part = parts[i];
      for (var j = 0, len2 = part.length; j < len2; ++j) {
        var point = part[j];
        ++pointSum;
        xSum += point.x;
        ySum += point.y;
      }
    }
    var centerX = xSum / pointSum;
    var centerY = ySum / pointSum;
    var center =  L.point(centerX, centerY);
    return center.round();
  }

  function findMostComplexLayer(layers) {
    var complexLayer = null;
    var numPoints = 0;

    for (var id in layers) {
      var l = layers[id];
      var parts = l._parts;
      var pointsLen = 0;
      for (var i = 0, len = parts.length; i < len; ++i) {
        pointsLen += parts[i].length;
      }
      if (pointsLen > numPoints) {
        numPoints = pointsLen;
        complexLayer = l;
      }
    }

    return complexLayer;
  }

}());
