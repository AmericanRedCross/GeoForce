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

  L.spatialdev.featurelabel.FeatureSet.prototype.addFeature = function (featureLayer, geojsonLayer) {
    featureLayer.geojsonLayer = geojsonLayer;
    if (!featureLayer._leaflet_id) {
      L.stamp(featureLayer);
    }
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

    pathUpdated(featureLayer);
  };

  L.spatialdev.featurelabel.FeatureSet.prototype._pathUpdated = function (leafletId) {
    var featureLayer = this._pathIdHash[leafletId];
    // the hash doesn't always catch the id if the graphic has not yet been rendered.
    if (!featureLayer) {
      var features = this.features;
      for (var key in features) {
        var feat = this.features[key];
        if (feat._leaflet_id === leafletId) {
          featureLayer = feat;
          break;
        }
      }
    }
    pathUpdated(featureLayer);
  };

  function pathUpdated(featureLayer) {
    // If the id doesnt hash, no path for the features in our feature set apply.
    if (!featureLayer) {
      //console.error('pathUpdated featureLayer empty');
      return;
    }

    if (featureLayer._layers) {

      // only calculate center after all of the polygons have been updated
      if (!featureLayer.pathsUpdated) featureLayer.pathsUpdated = 0;
      ++featureLayer.pathsUpdated;

      if (featureLayer.pathsUpdated === Object.keys(featureLayer._layers).length) {
        var l = findLargestLayer(featureLayer._layers);

        if (l) {
          featureLayer.labelCenterPoint = calculateCenter(l._parts);
          updateLabel(featureLayer);
        }

        featureLayer.pathsUpdated = 0;
      }

      return;
    }

    // there is only one polygon, so calculate center. also check to see if there are parts
    if ( featureLayer._parts && featureLayer._parts.length ) {
      featureLayer.labelCenterPoint = calculateCenter(featureLayer._parts);
      updateLabel(featureLayer);

      return;
    }

  }


  var selectedFeatureLayer = null;
  var selectedIcon = null;

  function createLabel(featureLayer) {
    var point = featureLayer.labelCenterPoint;

    var properties = featureLayer.feature.properties;
    var text = properties.title || properties.name || 'Label';
    if (properties.labelProperty) {
      if (typeof properties.labelProperty === 'function') {
        text = properties.labelProperty();
      } else {
        text = properties[properties.labelProperty];
      }

    }

    console.log('LABEL: ' + text + ' (' + point.x + ', ' + point.y + ') ' + properties.name);

    var icon = L.divIcon({
      className: $.isNumeric(text) ? 'featurelabel-icon-number' : 'featurelabel-icon',
      iconSize: [45,45],
      html: text
    });

    var label = L.label(point, featureLayer, {icon:icon});

    label.on('mouseover', function(e) {
      var label = this;
      if (label.featureLayer !== selectedFeatureLayer) {
        label._icon.style['box-shadow'] = '0px 0px 0px 6px rgba(237,178,41,0.8)';
        label.featureLayer.setStyle({
          color: '#EDB229'  // gold
        });
        label.featureLayer.bringToFront();
      }
    });

    featureLayer.on('mouseover', function (e) {
      console.log('mouseover featurelayer');
    });

    label.on('mouseout', function(e) {
      var label = this;
      if (label.featureLayer !== selectedFeatureLayer) {
        label._icon.style['box-shadow'] = '0px 0px 0px 6px rgba(255,255,255,0.7)';
        label.featureLayer.setStyle({
          color: properties.color || 'white'
        });
        if (selectedFeatureLayer) {
          selectedFeatureLayer.bringToFront();
        } else {
          label.featureLayer.bringToFront();
        }
      }
    });

    featureLayer.on('mouseout', function (e) {
      console.log('mouseout featurelayer');
    });

    label.on('click', function (e) {
      var label = this;

      // TURN OFF
      if (label.featureLayer === selectedFeatureLayer) {
        label._icon.style['box-shadow'] = '0px 0px 0px 6px rgba(255,255,255,0.7)';
        label.featureLayer.setStyle({
          color: properties.color || 'white'
        });
        featureLayer.bringToFront();
        selectedFeatureLayer = null;
        if (properties && properties.onDeselect && typeof properties.onDeselect === 'function') {
          properties.onDeselect(label.featureLayer);
        }
      }

      // TURN ON
      else {
        if (selectedFeatureLayer) {
          selectedIcon.style['box-shadow'] = '0px 0px 0px 6px rgba(255,255,255,0.7)';
          selectedFeatureLayer.setStyle({
            color: properties.color || 'white'
          });
          selectedFeatureLayer.bringToFront();
          selectedFeatureLayer = null;
        }
        label._icon.style['box-shadow'] = '0px 0px 0px 6px rgba(237,27,46,0.5)';
        // red cross red #ed1b2e
        label.featureLayer.setStyle({
          color: '#d9534f' // red
        });
        label.featureLayer.bringToFront();
        selectedFeatureLayer = label.featureLayer;
        selectedIcon = label._icon;
        if (properties && properties.onSelect && typeof properties.onSelect === 'function') {
          properties.onSelect(label.featureLayer);
        }
      }

    });

    featureLayer.on('click', function (e) {
      console.log('click featurelayer');
    });


    /**
     * Fixes the double label bug.
     */
    featureLayer.geojsonLayer.addLayer(label);

    /**
     * Ideally we want to be adding labels to the actual layer they are on
     * rather than the parent GeoJSON layer.
     */
//    if (!featureLayer.addLayer) {
//      featureLayer.geojsonLayer.addLayer(label);
//    } else {
//      featureLayer.addLayer(label);
//    }

    L.spatialdev.featurelabel.labels[featureLayer.feature.properties.guid] = label;
  }


  function updateLabel(featureLayer) {
    if ( ! featureLayer.label ) {
      createLabel(featureLayer);
    } else {
      featureLayer.label.update(featureLayer.labelCenterPoint);
    }
  }


  function calculateCenter(parts) {

    var part = findLargestPart(parts);
    var center = centroid(part);

    return center.round();
  }


//  http://en.wikipedia.org/wiki/Centroid#Centroid_of_polygon

  function area(partArr) {
    var area = 0;
    var len = partArr.length;
    for (var i = 0, j = len - 1; i < len; j=i, i++) {
      var p1 = partArr[j];
      var p2 = partArr[i];

      area += p1.x * p2.y - p2.x * p1.y;
    }

    return area / 2;
  }

  function centroid(partArr) {
    var len = partArr.length;
    var x = 0;
    var y = 0;
    for (var i = 0, j = len - 1; i < len; j=i, i++) {
      var p1 = partArr[j];
      var p2 = partArr[i];
      var f = p1.x * p2.y - p2.x * p1.y;
      x += (p1.x + p2.x) * f;
      y += (p1.y + p2.y) * f;
    }
    f = area(partArr) * 6;
    return L.point(x/f, y/f);

  }


  function findLargestLayer(layers) {
    var largestLayer = null;
    var maxArea = 0;

    for (var id in layers) {
      var l = layers[id];
      var parts = l._parts;
      var a = 0;
      if (!parts) {
        continue;
      }
      for (var i = 0, len = parts.length; i < len; ++i) {
        a += area(parts[i]);
      }
      if (a > maxArea) {
        maxArea = a;
        largestLayer = l;
      }
    }

    return largestLayer;
  }

  function findLargestPart(parts) {
    var largestPart = parts[0];
    var maxArea = 0;

    for (var i = 0, len = parts.length; i < len; ++i) {
      var p = parts[i];
      var a = area(p);
      if ( a > maxArea ) {
        largestPart = p;
        maxArea = a;
      }
    }
    return largestPart;
  }

}());
