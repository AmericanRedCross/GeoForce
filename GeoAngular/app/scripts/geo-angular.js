(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/nick/code/Mapfolio/GeoForce/Config/layers/all.js":[function(require,module,exports){
/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *       on 8/6/14.
 */

module.exports = {


};

},{}],"/Users/nick/code/Mapfolio/GeoForce/Config/layers/basemaps.js":[function(require,module,exports){
/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *       on 8/6/14.
 */

module.exports = {

  /**
   * Basemaps Panel List
   *
   * List of basemaps that get shown in the Basemaps Panel. Edit this to add or remove
   * basemaps that the user will see as choices. All basemaps, including ones not in this
   * list, can still be manually referenced in the url. This is just for the User Interface.
   */
  basemaps: [
    'osmhot',
    'osm',
    'satellite',
    'ortho',
    'toner',
    'dark',
    'github',
    'mozilla',
    'green',
    'osmcycle',
    'osmtransport',
    'osmmapquest',
    'natgeo',
    'usgstopo',
    'esritopo',
    'ocean',
    'lightgray',
    'watercolor'
  ],


  /**
   * Basemaps
   *
   * All basemap aliases that can be referred to in the url. The corresponding
   * path to the thumbnail in the Basemaps Panel should be:
   *    images/{aliasName}.jpg
   *
   */

  osmhot: {
    url: 'http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png',
    name: 'Humanitarian OpenStreetMap',
    type: 'basemap'
  },

  redcross: {
    url: 'https://{s}.tiles.mapbox.com/v3/americanredcross.hcji22de/{z}/{x}/{y}.png',
    name: 'Red Cross',
    type: 'basemap'
  },

  satellite: {
    url: 'https://{s}.tiles.mapbox.com/v3/examples.map-qfyrx5r8/{z}/{x}/{y}.png',
    name: 'Mapbox Satellite',
    type: 'basemap'
  },

  mozilla: {
    url: 'http://{s}.tiles.mapbox.com/v3/mozilla-webprod.e91ef8b3/{z}/{x}/{y}.png',
    name: 'Mozilla',
    type: 'basemap'
  },

  github: {
    url: 'http://{s}.tiles.mapbox.com/v3/github.map-xgq2svrz/{z}/{x}/{y}.png',
    name: 'Github',
    type: 'basemap'
  },

  green: {
    url: 'http://{s}.tiles.mapbox.com/v3/examples.map-3gisupiu/{z}/{x}/{y}.png',
    name: 'Green Theme',
    type: 'basemap'
  },

  dark: {
    url: 'http://{s}.tiles.mapbox.com/v3/spatialdev.map-c9z2cyef/{z}/{x}/{y}.png',
    name: 'Dark Theme',
    type: 'basemap'
  },

  osm: {
    url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
    name: 'Standard OpenStreetMap',
    type: 'basemap'
  },

  osmcycle: {
    url: 'http://{s}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png',
    name: 'Cycle OpenStreetMap',
    type: 'basemap'
  },

  osmtransport: {
    url: 'http://{s}.tile2.opencyclemap.org/transport/{z}/{x}/{y}.png',
    name: 'Transport OpenStreetMap',
    type: 'basemap'
  },

  osmmapquest: {
    url: 'http://otile3.mqcdn.com/tiles/1.0.0/osm/{z}/{x}/{y}.png',
    name: 'MapQuest OpenStreetMap',
    type: 'basemap'
  },

  natgeo: {
    url: 'http://services.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}',
    name: 'National Geographic',
    type: 'basemap'
  },

  usgstopo: {
    url: 'http://services.arcgisonline.com/ArcGIS/rest/services/USA_Topo_Maps/MapServer/tile/{z}/{y}/{x}',
    name: 'USGS Topographic',
    type: 'basemap'
  },

  ortho: {
    url: 'http://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
    name: 'Orthographic',
    type: 'basemap'
  },

  ocean: {
    url: 'http://services.arcgisonline.com/ArcGIS/rest/services/Ocean/World_Ocean_Base/MapServer/tile/{z}/{y}/{x}',
    name: 'Ocean Bathymetric',
    type: 'basemap'
  },

  lightgray: {
    url: 'http://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}',
    name: 'Light Gray',
    type: 'basemap'
  },

  esritopo: {
    url: 'http://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}',
    name: 'Esri Topographic',
    type: 'basemap'
  },

  toner: {
    url: 'http://{s}.tile.stamen.com/toner/{z}/{x}/{y}.png',
    name: 'Stamen Toner',
    type: 'basemap'
  },

  watercolor: {
    url: 'http://{s}.tile.stamen.com/watercolor/{z}/{x}/{y}.png',
    name: 'Stamen Watercolor',
    type: 'basemap'
  }

};

},{}],"/Users/nick/code/Mapfolio/GeoForce/Config/layers/disaster.js":[function(require,module,exports){
/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *       on 8/6/14.
 */

module.exports = {
  usgsearthquake: {
    type: 'geojson',
    theme: 'disaster',
    url: 'http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson',
    properties: {
      'title': 'USGS Realtime Earthquakes Feed (Week)'

    }
  },

  precipitation: {
    name: 'Precipitation',
    type: 'xyz',
    theme: 'disaster',
    url: 'http://{s}.tile.openweathermap.org/map/precipitation/{z}/{x}/{y}.png',
    opacity: 0.5
  },

  rain: {
    name: 'Rain',
    type: 'xyz',
    theme: 'disaster',
    url: 'http://{s}.tile.openweathermap.org/map/rain/{z}/{x}/{y}.png'
  },

};
},{}],"/Users/nick/code/Mapfolio/GeoForce/Config/layers/other.js":[function(require,module,exports){
/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *       on 8/6/14.
 */

module.exports = {
  landcover: {
    name: 'MODIS Landcover 2009',
    type: 'wms',
    theme: 'other',
    url: 'http://ags.servirlabs.net/ArcGIS/services/ReferenceNode/MODIS_Landcover_Type1_2009/MapServer/WMSServer',
    layers: '0',
    properties: {
      legend: ""
    }
  },

  snow: {
    name: 'Snow',
    type: 'xyz',
    theme: 'other',
    url: 'http://{s}.tile.openweathermap.org/map/snow/{z}/{x}/{y}.png'
  },

  airtemp: {
    name: 'NOAA Air Temperature',
    type: 'wms',
    theme: 'other',
    url: 'http://nowcoast.noaa.gov/wms/com.esri.wms.Esrimap/obs',
    transparent: true,      // default true
    format: 'image/png',    // default 'image/png'
    layers: 'OBS_MET_TEMP',
    properties: {
      legend: ""
    }
  },

  pressurecontour: {
    name: 'Pressure Contour',
    type: 'xyz',
    theme: 'other',
    url: 'http://{s}.tile.openweathermap.org/map/pressure_cntr/{z}/{x}/{y}.png',
    opacity: 0.9
  },

  pressure: {
    name: 'Pressure',
    type: 'xyz',
    theme: 'other',
    url: 'http://{s}.tile.openweathermap.org/map/pressure/{z}/{x}/{y}.png'
  },

  temperature: {
    name: 'Temperature',
    type: 'xyz',
    theme: 'other',
    url: 'http://{s}.tile.openweathermap.org/map/temp/{z}/{x}/{y}.png'
  },

  wind: {
    name: 'Wind',
    type: 'xyz',
    theme: 'other',
    url: 'http://{s}.tile.openweathermap.org/map/wind/{z}/{x}/{y}.png'
  },

  clouds: {
    name: 'Cloud Cover',
    type: 'xyz',
    theme: 'other',
    url: 'http://{s}.tile.openweathermap.org/map/clouds_cls/{z}/{x}/{y}.png',
    opacity: 0.5 // optional. opacity is 0.5 if not specified
  },

  precipitationclassic: {
    name: 'Precipitation (Classic)',
    type: 'xyz',
    theme: 'other',
    url: 'http://{s}.tile.openweathermap.org/map/precipitation_cls/{z}/{x}/{y}.png',
    opacity: 0.4
  },

  rainclassic: {
    name: 'Rain (Classic)',
    type: 'xyz',
    theme: 'other',
    url: 'http://{s}.tile.openweathermap.org/map/rain_cls/{z}/{x}/{y}.png'
  }

};
},{}],"/Users/nick/code/Mapfolio/GeoForce/Config/layers/project.js":[function(require,module,exports){
/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *       on 8/6/14.
 */

module.exports = {

  growingperiod: {
    name: 'Average Length of Growing Period (days)',
    type: 'wms',
    theme: 'project',
    url: 'http://apps.harvestchoice.org/arcgis/services/MapServices/cell_values_4/MapServer/WMSServer',
    layers: '15',
    properties: {
      legend: ""
    }
  },

  landcover: {
    name: 'MODIS Landcover 2009',
    type: 'wms',
    theme: 'project',
    url: 'http://ags.servirlabs.net/ArcGIS/services/ReferenceNode/MODIS_Landcover_Type1_2009/MapServer/WMSServer',
    layers: '0',
    properties: {
      legend: ""
    }
  }

};
},{}],"/Users/nick/code/Mapfolio/GeoForce/Config/layers/projecthealth.js":[function(require,module,exports){
/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *       on 8/6/14.
 */

module.exports = {
  gdacs: {
    name: 'GDACS: Global Disaster Alert and Coordination System',
    type: 'kml',
    theme: 'projecthealth',
    url: 'http://www.gdacs.org/xml/gdacs.kml',
    properties: {
      legend: ''
    }
  }
};
},{}],"/Users/nick/code/Mapfolio/GeoForce/Config/layers/projectrisk.js":[function(require,module,exports){
/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *       on 8/6/14.
 */

module.exports = {

};
},{}],"/Users/nick/code/Mapfolio/GeoForce/GeoAngular/app/lib/featurelabel/FeatureSet.js":[function(require,module,exports){
/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *       on 4/7/14.
 */

var featurelabel = require('./featurelabel');
var featureSets = featurelabel.featureSets;
var Label = require('./Label.js');


function FeatureSet() {
  this.features = [];
  this._pathIdHash = {};
  featureSets.push(this);
  this.selectedFeatureLayer = null;
  this.selectedIcon = null;
}
module.exports = FeatureSet;


FeatureSet.prototype.addFeature = function (featureLayer, geojsonLayer) {
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

};


FeatureSet.prototype._pathUpdated = function (leafletId) {
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
  pathUpdated(featureLayer, this);
};


function pathUpdated(featureLayer, featureSet) {
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
        updateLabel(featureLayer, featureSet);
      }

      featureLayer.pathsUpdated = 0;
    }

    return;
  }

  // there is only one polygon, so calculate center. also check to see if there are parts
  if ( featureLayer._parts && featureLayer._parts.length ) {
    featureLayer.labelCenterPoint = calculateCenter(featureLayer._parts);
    updateLabel(featureLayer, featureSet);

    return;
  }

}


function createLabel(featureLayer, featureSet) {
  var point = featureLayer.labelCenterPoint;

  var properties = featureLayer.feature.properties;
  var text = properties.title || properties.name || 'Label';
  if (properties.labelProperty) {
    if (typeof properties.labelProperty === 'function') {
      text = properties.labelProperty(properties);
    } else {
      text = properties[properties.labelProperty];
    }

  }

  //Determine map icon class
  var iconClass = "featurelabel-icon-text";
  if (properties["map-icon-class"]) {
      if (typeof properties["map-icon-class"] === 'function') {
          iconClass = properties["map-icon-class"](properties);
      } else {
          iconClass = properties[properties["map-icon-class"]];
      }
  }

  //Determine map icon size
  var iconSize = [35,35];
  if (properties["map-icon-size"]) {
      if (typeof properties["map-icon-size"] === 'function') {
          iconSize = properties["map-icon-size"](properties);
      } else {
          iconSize = properties[properties["map-icon-size"]];
      }
  }

  console.log('LABEL: ' + text + ' (' + point.x + ', ' + point.y + ') ' + properties.name);

  var icon = L.divIcon({
    className: iconClass || "", //iconClass || ($.isNumeric(text) ? 'featurelabel-icon-number' : 'featurelabel-icon-text'),
    iconSize: iconSize,
    html: text
  });

  var label = new Label(point, featureLayer, {icon:icon});

  label.clearAllEventListeners();
  featureLayer.clearAllEventListeners();

  label.on('mouseover', function(e) {
    mouseover(this, this.featureLayer);
  });

  featureLayer.on('mouseover', function (e) {
    mouseover(this.label, this);
  });

  function whitenLabel(label) {
    if (label._icon) {
      // label is text only, no badge
      if (label._icon.children[0].className.indexOf('featurelabel-icon-text') > -1) {
        label._icon.children[0].style['color'] = 'rgba(255,255,255,0.7)';
      }
      // label has a badge
      else {
        label._icon.children[0].style['box-shadow'] = '0px 0px 0px 6px rgba(255,255,255,0.7)';
      }
    }
  }

  function goldenLabel(label) {
    if (label._icon) {
      // label is text only, no badge
      if (label._icon.children[0].className.indexOf('featurelabel-icon-text') > -1) {
        label._icon.children[0].style['color'] = 'rgba(237,178,41,0.8)';
      }
      // label has a badge
      else {
        label._icon.children[0].style['box-shadow'] = '0px 0px 0px 6px rgba(237,178,41,0.8)';
      }
    }
  }

  function reddenLabel(label) {
    if (label._icon) {
      // label is text only, no badge
      if (label._icon.children[0].className.indexOf('featurelabel-icon-text') > -1) {
        label._icon.children[0].style['color'] = 'rgba(237,27,46,0.5)';
      }
      // label has a badge
      else {
        label._icon.children[0].style['box-shadow'] = '0px 0px 0px 6px rgba(237,27,46,0.5)';
      }
    }
  }

  function mouseover(label, featureLayer) {
    if (featureLayer !== featureSet.selectedFeatureLayer) {

      goldenLabel(label);

      featureLayer.setStyle({
        color: '#EDB229'  // gold
      });
      featureLayer.bringToFront();
    }
  }

  label.on('mouseout', function(e) {
    mouseout(this, this.featureLayer);
  });

  featureLayer.on('mouseout', function (e) {
    mouseout(this.label, this);
  });

  function mouseout(label, featureLayer) {
    if (featureLayer !== featureSet.selectedFeatureLayer) {

      whitenLabel(label);

      featureLayer.setStyle({
        color: properties.color || 'white'
      });
      if (featureSet.selectedFeatureLayer) {
        featureSet.selectedFeatureLayer.bringToFront();
      } else {
        featureLayer.bringToFront();
      }
    }
  }

  label.on('click', function (e) {
    click(this, this.featureLayer);
  });

  featureLayer.on('click', function (e) {
    click(this.label, this);
  });

  function click(label, featureLayer) {
    // TURN OFF
    if (featureLayer === featureSet.selectedFeatureLayer) {

      whitenLabel(label);

      featureLayer.setStyle({
        color: properties.color || 'white'
      });
      featureLayer.bringToFront();
      featureSet.selectedFeatureLayer = null;
      if (properties && properties.onDeselect && typeof properties.onDeselect === 'function') {
        properties.onDeselect(featureLayer);
      }
    }

    // TURN ON
    else {
      if (featureSet.selectedFeatureLayer) {
        whitenLabel({_icon: featureSet.selectedIcon});
        featureSet.selectedFeatureLayer.setStyle({
          color: properties.color || 'white'
        });
      }

      reddenLabel(label);

      // red cross red #ed1b2e
      featureLayer.setStyle({
        color: '#d9534f' // red
      });
      featureLayer.bringToFront();
      featureSet.selectedFeatureLayer = featureLayer;
      featureSet.selectedIcon = label._icon;
      if (properties && properties.onSelect && typeof properties.onSelect === 'function') {
        properties.onSelect(featureLayer);
      }
    }
  }

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

  featurelabel.labels[featureLayer.feature.properties.guid] = label;
}


function updateLabel(featureLayer, featureSet) {
  if ( ! featureLayer.label ) {
    createLabel(featureLayer, featureSet);
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

/*
    NH TODO: We are indeed getting the centroid, but ideally we
    want to check if the centroid is actually within the polygon
    for the polygons that bend like a boomarang. If it is outside,
    we need to nudge it over until it is inside...
 */
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

},{"./Label.js":"/Users/nick/code/Mapfolio/GeoForce/GeoAngular/app/lib/featurelabel/Label.js","./featurelabel":"/Users/nick/code/Mapfolio/GeoForce/GeoAngular/app/lib/featurelabel/featurelabel.js"}],"/Users/nick/code/Mapfolio/GeoForce/GeoAngular/app/lib/featurelabel/Label.js":[function(require,module,exports){
/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *       on 4/7/14.
 *
 *       Based on L.Marker from v0.7.2
 */


module.exports = L.Label = L.Class.extend({

  includes: L.Mixin.Events,

  options: {
    icon: new L.Icon.Default(),
    title: '',
    alt: '',
    clickable: true,
    draggable: false,
    keyboard: true,
    zIndexOffset: 0,
    opacity: 1,
    riseOnHover: false,
    riseOffset: 250
  },

  initialize: function (point, featureLayer, options) {
    L.setOptions(this, options);
//    this._latlng = L.latLng(latlng);
    this._point = point;
    if (featureLayer){
      this.featureLayer = featureLayer;
      featureLayer.label = this;
    }
    this.isLabel = true;
  },

  onAdd: function (map) {
    this._map = map;

    map.on('viewreset', this.update, this);

    this._initIcon();
    this.update();
    this.fire('add');

    if (map.options.zoomAnimation && map.options.markerZoomAnimation) {
      map.on('zoomanim', this._animateZoom, this);
    }
  },

  addTo: function (map) {
    map.addLayer(this);
    return this;
  },

  onRemove: function (map) {
    if (this.dragging) {
      this.dragging.disable();
    }

    this._removeIcon();
    this._removeShadow();

    this.fire('remove');

    map.off({
      'viewreset': this.update,
      'zoomanim': this._animateZoom
    }, this);

    this._map = null;
  },

//  getLatLng: function () {
//    return this._latlng;
//  },
//
//  setLatLng: function (latlng) {
//    this._latlng = L.latLng(latlng);
//
//    this.update();
//
//    return this.fire('move', { latlng: this._latlng });
//  },



  setZIndexOffset: function (offset) {
    this.options.zIndexOffset = offset;
    this.update();

    return this;
  },

  setIcon: function (icon) {

    this.options.icon = icon;

    if (this._map) {
      this._initIcon();
      this.update();
    }

    if (this._popup) {
      this.bindPopup(this._popup);
    }

    return this;
  },

  update: function (point) {
    if (point) {
      this._point = point;
    }
    if (this._icon) {
//      var pos = this._map.latLngToLayerPoint(this._latlng).round();
      this._setPos(this._point);
    }

    return this;
  },

  _initIcon: function () {
    var options = this.options,
      map = this._map,
      animation = (map.options.zoomAnimation && map.options.markerZoomAnimation),
      classToAdd = animation ? 'leaflet-zoom-animated' : 'leaflet-zoom-hide';

    var icon = options.icon.createIcon(this._icon),
      addIcon = false;

    // if we're not reusing the icon, remove the old one and init new one
    if (icon !== this._icon) {
      if (this._icon) {
        this._removeIcon();
      }
      addIcon = true;

      if (options.title) {
        icon.title = options.title;
      }

      if (options.alt) {
        icon.alt = options.alt;
      }
    }

    L.DomUtil.addClass(icon, classToAdd);

    if (options.keyboard) {
      icon.tabIndex = '0';
    }

    this._icon = icon;

    this._initInteraction();

    if (options.riseOnHover) {
      L.DomEvent
        .on(icon, 'mouseover', this._bringToFront, this)
        .on(icon, 'mouseout', this._resetZIndex, this);
    }

    var newShadow = options.icon.createShadow(this._shadow),
      addShadow = false;

    if (newShadow !== this._shadow) {
      this._removeShadow();
      addShadow = true;
    }

    if (newShadow) {
      L.DomUtil.addClass(newShadow, classToAdd);
    }
    this._shadow = newShadow;


    if (options.opacity < 1) {
      this._updateOpacity();
    }


    var panes = this._map._panes;

    if (addIcon) {
      panes.markerPane.appendChild(this._icon);
    }

    if (newShadow && addShadow) {
      panes.shadowPane.appendChild(this._shadow);
    }
  },

  _removeIcon: function () {
    if (this.options.riseOnHover) {
      L.DomEvent
        .off(this._icon, 'mouseover', this._bringToFront)
        .off(this._icon, 'mouseout', this._resetZIndex);
    }

    this._map._panes.markerPane.removeChild(this._icon);

    this._icon = null;
  },

  _removeShadow: function () {
    if (this._shadow) {
      this._map._panes.shadowPane.removeChild(this._shadow);
    }
    this._shadow = null;
  },

  _setPos: function (pos) {
    L.DomUtil.setPosition(this._icon, pos);

    if (this._shadow) {
      L.DomUtil.setPosition(this._shadow, pos);
    }

    this._zIndex = pos.y + this.options.zIndexOffset;

    this._resetZIndex();
  },

  _updateZIndex: function (offset) {
    this._icon.style.zIndex = this._zIndex + offset;
  },

  _animateZoom: function (opt) {
//    var pos = this._map._latLngToNewLayerPoint(this._latlng, opt.zoom, opt.center).round();
//
//    this._setPos(pos);
  },

  _initInteraction: function () {

    if (!this.options.clickable) { return; }

    // TODO refactor into something shared with Map/Path/etc. to DRY it up

    var icon = this._icon,
      events = ['dblclick', 'mousedown', 'mouseover', 'mouseout', 'contextmenu'];

    L.DomUtil.addClass(icon, 'leaflet-clickable');
    L.DomEvent.on(icon, 'click', this._onMouseClick, this);
    L.DomEvent.on(icon, 'keypress', this._onKeyPress, this);

    for (var i = 0; i < events.length; i++) {
      L.DomEvent.on(icon, events[i], this._fireMouseEvent, this);
    }

    if (L.Handler.MarkerDrag) {
      this.dragging = new L.Handler.MarkerDrag(this);

      if (this.options.draggable) {
        this.dragging.enable();
      }
    }
  },

  _onMouseClick: function (e) {
    var wasDragged = this.dragging && this.dragging.moved();

    if (this.hasEventListeners(e.type) || wasDragged) {
      L.DomEvent.stopPropagation(e);
    }

    if (wasDragged) { return; }

    if ((!this.dragging || !this.dragging._enabled) && this._map.dragging && this._map.dragging.moved()) { return; }

    this.fire(e.type, {
      originalEvent: e,
//      latlng: this._latlng
      point: this._point
    });
  },

  _onKeyPress: function (e) {
    if (e.keyCode === 13) {
      this.fire('click', {
        originalEvent: e,
//        latlng: this._latlng
        point: this._point
      });
    }
  },

  _fireMouseEvent: function (e) {

    this.fire(e.type, {
      originalEvent: e,
//      latlng: this._latlng
      point: this._point
    });

    // TODO proper custom event propagation
    // this line will always be called if marker is in a FeatureGroup
    if (e.type === 'contextmenu' && this.hasEventListeners(e.type)) {
      L.DomEvent.preventDefault(e);
    }
    if (e.type !== 'mousedown') {
      L.DomEvent.stopPropagation(e);
    } else {
      L.DomEvent.preventDefault(e);
    }
  },

  setOpacity: function (opacity) {
    this.options.opacity = opacity;
    if (this._map) {
      this._updateOpacity();
    }

    return this;
  },

  _updateOpacity: function () {
    L.DomUtil.setOpacity(this._icon, this.options.opacity);
    if (this._shadow) {
      L.DomUtil.setOpacity(this._shadow, this.options.opacity);
    }
  },

  _bringToFront: function () {
    this._updateZIndex(this.options.riseOffset);
  },

  _resetZIndex: function () {
    this._updateZIndex(0);
  }
});

},{}],"/Users/nick/code/Mapfolio/GeoForce/GeoAngular/app/lib/featurelabel/featurelabel.js":[function(require,module,exports){
/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *       on 4/7/14.
 */

var featureSets = [];

module.exports = {
  featureSets: featureSets,
  pathUpdated: function(leafletId) {
    for(var i= 0, len=featureSets.length; i<len; ++i) {
      featureSets[i]._pathUpdated(leafletId);
    }
  },
  labels: {}
};

require('./leaflet-patch');

},{"./leaflet-patch":"/Users/nick/code/Mapfolio/GeoForce/GeoAngular/app/lib/featurelabel/leaflet-patch.js"}],"/Users/nick/code/Mapfolio/GeoForce/GeoAngular/app/lib/featurelabel/leaflet-patch.js":[function(require,module,exports){
/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *       on 5/7/14.
 *
 * This is a patch that overrides the L.Polyline class in Leaflet 0.7.2
 *
 * All this is doing is broadcasting the leaflet id for the path that is being redrawn.
 */

var featurelabel = require('./featurelabel');

module.exports = function() {

  /**
   * Leaflet puts too much of a buffer around the area in which a shape
   * is clipped, thus we were not getting good centroids for shapes that
   * were being clipped. This resolves that.
   */
  L.Path.CLIP_PADDING = 0.02;

  L.Polyline.prototype._updatePath = function () {
    if (!this._map) { return; }

    this._clipPoints();
    this._simplifyPoints();

    L.Path.prototype._updatePath.call(this);

    /**
     * Notifies featurelabel that a path for a vector has been redrawn and the label should
     * positioned or repositioned.
     */
    featurelabel.pathUpdated(this._leaflet_id);
  };

  /**
   * Fixes a Leaflet bug where a reference to this._map is sometimes missing.
   */
  L.Path.prototype.bringToFront = function () {
    if (!this._map) {
      return this;
    }
    var root = this._map._pathRoot,
        path = this._container;

    if (path && root.lastChild !== path) {
      root.appendChild(path);
    }
    return this;
  };

}();
},{"./featurelabel":"/Users/nick/code/Mapfolio/GeoForce/GeoAngular/app/lib/featurelabel/featurelabel.js"}],"/Users/nick/code/Mapfolio/GeoForce/GeoAngular/app/scripts/app.js":[function(require,module,exports){
/**
 * This is the entry point of the application. We declare the main module here and then configure the main router
 * that creates corresponding views. The array parameter for module declares this module's dependencies.
 */
var GeoAngular = angular.module('GeoAngular', ['angularFileUpload', 'ngCookies', 'ngResource', 'ngSanitize', 'ngRoute', 'ui.router', 'ngAnimate', 'leaflet-directive', 'ui.bootstrap', 'ui.slider']);

GeoAngular.run(function ($rootScope, $state, $stateParams) {

  // It's very handy to add references to $state and $stateParams to the $rootScope
  // so that you can access them from any scope within your applications.For example,
  // <li ui-sref-active="active }"> will set the <li> // to active whenever
  // 'contacts.list' or one of its decendents is active.
  $rootScope.$state = $state;
  $rootScope.$stateParams = $stateParams;

  debug.$state = $state;
  debug.$stateParams = $stateParams;

  $rootScope.isState = function (stateName) {
    return $state.$current.name === stateName;
  };

  $rootScope.isParam = function(paramName) {
    var bool = $stateParams[paramName];
    if (!bool) {
      return false;
    }
    return true;
  };

  $rootScope.isNotParam = function(paramName) {
    var bool = $stateParams[paramName];
    if (!bool) {
      return true;
    }
    return false;
  };

  $rootScope.toggleParam = function(paramName) {
    var bool = $stateParams[paramName];
    if (!bool) {
      // mutex logic that makes only 1 panel open at a time
      for (var param in $stateParams) {
        if ($stateParams[param] === 'open') {
          $stateParams[param] = null;
        }
      }
      $stateParams[paramName] = 'open';
    } else {
      delete $stateParams[paramName];
    }
    var state = $state.current.name || 'main';
    $state.go(state, $stateParams);
  };

  $rootScope.setParamWithVal = function (paramName, val) {
    $stateParams[paramName] = val;
    var state = $state.current.name || 'main';
    $state.go(state, $stateParams);
  };
  debug.$rootScope = $rootScope;


  $rootScope.openParam = function(paramName) {
    var bool = $stateParams[paramName];
    if (!bool) {
      // mutex logic that makes only 1 panel open at a time
      for (var param in $stateParams) {
        if ($stateParams[param] === 'open') {
          $stateParams[param] = null;
        }
      }
      $stateParams[paramName] = 'open';
      var state = $state.current.name || 'main';
      $state.go(state, $stateParams);
    }
  };

  $rootScope.closeParam = function(paramName) {
    var bool = $stateParams[paramName];
    if (bool) {
      delete $stateParams[paramName];
      var state = $state.current.name || 'main';
      $state.go(state, $stateParams);
    }
  };

  $rootScope.isNotState = function (stateName) {
    return $state.$current.name !== stateName;
  };

  window.$state = $state;
  window.$stateParams = $stateParams;

});

GeoAngular.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider
    .when('/default', '/map@0,0,2(satellite,themecount)')
    .when('/phl', '/map@11.759815,121.893311,6(redcross,phl)')
    .otherwise(localStorage.getItem('defaultRoute') || '/map@0,0,2(satellite,themecount)');

  $stateProvider
    .state('main', {
      url: '/map@:lat,:lng,:zoom(*layers)?title&zoom-extent&stories&layers-panel&filters-panel&filters&legend&basemaps&info&theme&details-panel&search-panel&sf_id&level',
      views: {
        'details': {
          template: ' ',
          controller: 'MainCtrl'
        },
        'theme': {
          templateUrl: 'views/theme.html',
          controller: 'ThemeCtrl'
        }
      }
    })
    .state('upload', {
      url: '/map@:lat,:lng,:zoom(*layers)/upload?title&zoom-extent&stories&layers-panel&filters-panel&filters&legend&basemaps&info&theme&details-panel&search-panel&sf_id&level',
      views: {
        'details': {
          template: ' ',
          controller: 'MainCtrl'
        },
        'upload': {
          templateUrl: 'views/upload.html',
          controller: 'UploadCtrl'
        }
      }
    })
    .state('export', {
          url: '/map@:lat,:lng,:zoom(*layers)/export?title&zoom-extent&stories&layers-panel&filters-panel&filters&legend&basemaps&info&theme&details-panel&search-panel&sf_id&level',
          views: {
              'details': {
                  template: ' ',
                  controller: 'MainCtrl'
              },
              'export': {
                  templateUrl: 'views/export.html',
                  controller: 'ExportCtrl'
              }
          }
     });

});


GeoAngular.directive('selectOnClick', function () {
  return {
    restrict: 'A',
    link: function (scope, element, attrs) {
      element.on('click', function () {
        this.select();
      });
    }
  };
});


angular.module('GeoAngular').directive('myShow', function($animate) {
  return {
    scope: {
      'myShow': '=',
      'afterShow': '&',
      'afterHide': '&'
    },
    link: function(scope, element) {
      scope.$watch('myShow', function(show, oldShow) {
        if (show) {
          $animate.removeClass(element, 'ng-hide', scope.afterShow);
        }
        if (!show) {
          $animate.addClass(element, 'ng-hide', scope.afterHide);
        }
      });
    }
  }
});


require('./services/LayerConfig');
require('./services/StoriesConfig');
require('./services/Vector/VectorProvider');
require('./services/Donuts');
require('./controllers/main');
require('./controllers/map');
require('./controllers/details');
require('./controllers/navbar');
require('./controllers/side-view');
require('./controllers/stories');
require('./controllers/layers');
require('./controllers/filters');
require('./controllers/legend');
require('./controllers/info');
require('./controllers/basemaps');
require('./controllers/breadcrumbs');
require('./controllers/zoom-extent');
require('./controllers/theme');
require('./controllers/upload');
require('./controllers/search');
require('./controllers/export');


},{"./controllers/basemaps":"/Users/nick/code/Mapfolio/GeoForce/GeoAngular/app/scripts/controllers/basemaps.js","./controllers/breadcrumbs":"/Users/nick/code/Mapfolio/GeoForce/GeoAngular/app/scripts/controllers/breadcrumbs.js","./controllers/details":"/Users/nick/code/Mapfolio/GeoForce/GeoAngular/app/scripts/controllers/details.js","./controllers/export":"/Users/nick/code/Mapfolio/GeoForce/GeoAngular/app/scripts/controllers/export.js","./controllers/filters":"/Users/nick/code/Mapfolio/GeoForce/GeoAngular/app/scripts/controllers/filters.js","./controllers/info":"/Users/nick/code/Mapfolio/GeoForce/GeoAngular/app/scripts/controllers/info.js","./controllers/layers":"/Users/nick/code/Mapfolio/GeoForce/GeoAngular/app/scripts/controllers/layers.js","./controllers/legend":"/Users/nick/code/Mapfolio/GeoForce/GeoAngular/app/scripts/controllers/legend.js","./controllers/main":"/Users/nick/code/Mapfolio/GeoForce/GeoAngular/app/scripts/controllers/main.js","./controllers/map":"/Users/nick/code/Mapfolio/GeoForce/GeoAngular/app/scripts/controllers/map.js","./controllers/navbar":"/Users/nick/code/Mapfolio/GeoForce/GeoAngular/app/scripts/controllers/navbar.js","./controllers/search":"/Users/nick/code/Mapfolio/GeoForce/GeoAngular/app/scripts/controllers/search.js","./controllers/side-view":"/Users/nick/code/Mapfolio/GeoForce/GeoAngular/app/scripts/controllers/side-view.js","./controllers/stories":"/Users/nick/code/Mapfolio/GeoForce/GeoAngular/app/scripts/controllers/stories.js","./controllers/theme":"/Users/nick/code/Mapfolio/GeoForce/GeoAngular/app/scripts/controllers/theme.js","./controllers/upload":"/Users/nick/code/Mapfolio/GeoForce/GeoAngular/app/scripts/controllers/upload.js","./controllers/zoom-extent":"/Users/nick/code/Mapfolio/GeoForce/GeoAngular/app/scripts/controllers/zoom-extent.js","./services/Donuts":"/Users/nick/code/Mapfolio/GeoForce/GeoAngular/app/scripts/services/Donuts.js","./services/LayerConfig":"/Users/nick/code/Mapfolio/GeoForce/GeoAngular/app/scripts/services/LayerConfig.js","./services/StoriesConfig":"/Users/nick/code/Mapfolio/GeoForce/GeoAngular/app/scripts/services/StoriesConfig.js","./services/Vector/VectorProvider":"/Users/nick/code/Mapfolio/GeoForce/GeoAngular/app/scripts/services/Vector/VectorProvider.js"}],"/Users/nick/code/Mapfolio/GeoForce/GeoAngular/app/scripts/controllers/basemaps.js":[function(require,module,exports){
/**
 * Created by Ryan Whitley <rwhitley@spatialdev.com>
 *       on 3/28/14.
 */

module.exports = angular.module('GeoAngular').controller('BasemapsCtrl', function($scope, $state, $stateParams, LayerConfig) {
  $scope.basemaps = LayerConfig.basemaps;

  $scope.name = function (alias) {
    return LayerConfig[alias].name || alias;
  };

  $scope.getLayers = function() {
    if (! $stateParams || !$stateParams.layers) {
      return [];
    }
    var layers = $stateParams.layers.split(',');
    return layers;
  };

  $scope.currentBasemap = function () {
    var layers = $scope.getLayers();
    if (!layers) return null;
    return layers[0];
  };

  $scope.swapBasemap = function (basemap) {
    var layers = $scope.getLayers();
    layers[0] = basemap;
    layers = layers.join(',');
    angular.extend($stateParams, {
      layers: layers
    });
    $state.go('main', $stateParams);
  };

  $scope.isActiveBasemap = function(basemap) {
    return $scope.currentBasemap() === basemap;
  };

});
},{}],"/Users/nick/code/Mapfolio/GeoForce/GeoAngular/app/scripts/controllers/breadcrumbs.js":[function(require,module,exports){
/**
 * Created by Ryan Whitley <rwhitley@spatialdev.com>
 *       on 4/17/14.
 */

module.exports = angular.module('GeoAngular').controller('BreadcrumbsCtrl', function($scope, $rootScope, $state, $stateParams, $http, VectorProvider) {

  /**
   * Fixes Chrome Magnifying Glass Issue #206
   */
//  setTimeout(function() {
//    var toolbar = $('#MapUpperRightToolbarWrapper');
//    while ( toolbar.height() > 40 ) {
//      toolbar.width( toolbar.width() + 1 );
//    }
//  }, 1000);


	//var fullStackURL = config.chubbsPath('services/getAdminStack?format=json&adminlevel=:adminlevel&stackid=:guid&datasource=gadm');
	var fullStackURL = config.chubbsPath('services/custom/custom_operation?name=GetBreadCrumbsWithThemeCountsByID&format=json&gadm_level=:adminlevel&ids=:guid&datasource=gadm&theme=projects');

	var breadCrumbFeatures = {}; //Store results of the stack lookup here so we can reuse.

	$scope.$on('center-feature', function (event, featObj) {

		//See if the feature stack has already been stored
		if(breadCrumbFeatures[featObj.level] && breadCrumbFeatures[featObj.level][featObj.guid]){
			//Already have it
			updateBreadCrumbs(breadCrumbFeatures[featObj.level][featObj.guid], featObj.level);
		}
		else{
			//Go fetch it
			//Using the Center Feature's GUID, fetch the full stack details.
			var url = fullStackURL.replace(':adminlevel', featObj.level).replace(':guid', featObj.guid);
			var self = this;

			// Fetch from the server only if we don't have it in the hash
			$http.get(url).success(function (result, status) {

				if (!result || result.error) {
					console.error('Unable to fetch feature: ' + result.error);
					return;
				}

				var properties = result[0];

				//Update
                if(properties){
                    updateBreadCrumbs(properties, featObj.level);

                    //Store in the hash.
                    if(breadCrumbFeatures[featObj.level]){
                        breadCrumbFeatures[featObj.level][properties["guid" + featObj.level]] = properties;
                    }
                    else{
                        breadCrumbFeatures[featObj.level] = {};
                        breadCrumbFeatures[featObj.level][properties["guid" + featObj.level]] = properties;
                    }
                }else{
                    console.log("");
                }
			});
		}
	});

	function updateBreadCrumbs(featObj, level) {
		//Update The Breadcrumb display
		//Clear lower level scope items in case we've zoomed out
		for (var x = level; x <= 5; x++) {
			//null out any level values that are LOWER than what we're currently looking at
			$scope["level" + x] = "";
			$scope["feat" + x] = null;

			if(x == -1){
				$scope["levelarc"] = featObj["namearc"];
				$scope["featarc"] = featObj;
			}
		}

		//using the requested level, dig out the properties for that level and ones above it
		for (var i = level; i >= -1; i--) {
			if(i == -1){
				$scope["levelarc"] = featObj["namearc"];
				$scope["featarc"] = featObj;
			}
			$scope["level" + i] = featObj["name" + i];
			$scope["feat" + i] = featObj;
		}
	}

  $scope.zoomToGUID = function (featObj, level) {
    //Given a GUID, zoom to the feature.

    //Grab the feature from the VectorProvider.
    VectorProvider.fetchFeature(featObj["guid" + (level >= 0 ? level : "arc")], level, null, function (feat) {
      //Make a temp geojson layer and add the geojson.
      //Then grab the bounds from it and zoom to it.

      var gjl = L.geoJson(feat.geometry);
      $scope.$parent.zoomToBounds(gjl.getBounds());
    });
  };

  $scope.zoomToWorld = function () {
    var bounds = L.latLngBounds(L.latLng(-50,-179), L.latLng(50,179));
    $scope.$parent.zoomToBounds(bounds);
  };

});

},{}],"/Users/nick/code/Mapfolio/GeoForce/GeoAngular/app/scripts/controllers/details.js":[function(require,module,exports){
/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *       on 4/9/14.
 */

module.exports = angular.module('GeoAngular').controller('DetailsCtrl', function ($scope, $rootScope, $state, $stateParams, $http, Donuts, $filter) {

  $scope.details = {};

  $scope.salesforceUrl = config.salesforceUrl;

  $http.get('succubus_gitignore/sf-object-field-hash.json', {cached: true}).success(function(sfFieldHash) {
    $scope.sfFieldHash = sfFieldHash;
  });

  $scope.showRfa = function (details, value) {
    details.showRfa = true;
    value.showRfa = true;
  };

  $scope.hideRfa = function (details, value) {
    details.showRfa = false;
    value.showRfa = false;
  };

  $scope.showIndicators = function (details, value) {
    details.showIndicators = true;
    value.showIndicators = true;
  };

  $scope.hideIndicators = function (details, value) {
    details.showIndicators = false;
    value.showIndicators = false;
  };

  $scope.showRisks = function (details, value) {
      details.showRisks = true;
      value.showRisks = true;
  };

  $scope.hideRisks = function (details, value) {
      details.showRisks = false;
      value.showRisks = false;
  };

  $scope.showStatuses = function (details, value) {
      details.showStatuses = true;
      value.showStatuses = true;
  };

  $scope.hideStatuses = function (details, value) {
      details.showStatuses = false;
      value.showStatuses = false;
  };

  $scope.label = function (key) {

    var desc = key;

    // disaster
    if ($stateParams.theme === 'disaster') {

      if ($scope.sfFieldHash.Disaster__c[key]) {
        desc = $scope.sfFieldHash.Disaster__c[key].label || key;
      }

      if ($scope.sfFieldHash.Location__c[key]) {
        desc = $scope.sfFieldHash.Location__c[key].label || key;
      }

      if ($scope.sfFieldHash.Disaster_Location__c[key]) {
        desc = $scope.sfFieldHash.Disaster_Location__c[key].label || key;
      }

      if ($scope.sfFieldHash.Request_For_Assistance__c[key]) {
        desc = $scope.sfFieldHash.Request_For_Assistance__c[key].label || key;
      }

      return desc;
    }

    // contextual layer
    if ($scope.contextualLayer) {
      return key;
    }


    if ($stateParams.theme === 'projectRisk') {
      // project
      if ($scope.sfFieldHash.Project__c[key]) {
        desc = $scope.sfFieldHash.Project__c[key].label || key;
      }

      if ($scope.sfFieldHash.Location__c[key]) {
        desc = $scope.sfFieldHash.Location__c[key].label || key;
      }

      if ($scope.sfFieldHash.Risk__c[key]) {
        desc = $scope.sfFieldHash.Risk__c[key].label || key;
      }

      return desc;
    }


    if ($stateParams.theme === 'projectHealth') {
      // project
      if ($scope.sfFieldHash.Project__c[key]) {
        desc = $scope.sfFieldHash.Project__c[key].label || key;
      }

      if ($scope.sfFieldHash.Location__c[key]) {
        desc = $scope.sfFieldHash.Location__c[key].label || key;
      }

      if ($scope.sfFieldHash.Project_Evaluation__c[key]) {
        desc = $scope.sfFieldHash.Project_Evaluation__c[key].label || key;
      }

      return desc;
    }

    // project
    if ($scope.sfFieldHash.Project__c[key]) {
      desc = $scope.sfFieldHash.Project__c[key].label || key;
    }

    if ($scope.sfFieldHash.Location__c[key]) {
      desc = $scope.sfFieldHash.Location__c[key].label || key;
    }

    if ($scope.sfFieldHash.Indicator__c[key]) {
      desc = $scope.sfFieldHash.Indicator__c[key].label || key;
    }

    if ($scope.sfFieldHash.Indicator_Value__c[key]) {
      desc = $scope.sfFieldHash.Indicator_Value__c[key].label || key;
    }

    if ($scope.sfFieldHash.Logframe_Element__c[key]) {
      desc = $scope.sfFieldHash.Logframe_Element__c[key].label || key;
    }

    return desc;

  };

  $scope.tooltip = function (key) {
//    (sfFieldHash[key].inlineHelpText || '') + ' FieldName: ' + key

    var desc = '';

    // disaster
    if ($stateParams.theme === 'disaster') {

      if ($scope.sfFieldHash.Disaster__c[key]) {
        desc = $scope.sfFieldHash.Disaster__c[key].inlineHelpText || '';
      }

      if ($scope.sfFieldHash.Location__c[key]) {
        desc = $scope.sfFieldHash.Location__c[key].inlineHelpText || '';
      }

      if ($scope.sfFieldHash.Disaster_Location__c[key]) {
        desc = $scope.sfFieldHash.Disaster_Location__c[key].inlineHelpText || '';
      }

      if ($scope.sfFieldHash.Request_For_Assistance__c[key]) {
        desc = $scope.sfFieldHash.Request_For_Assistance__c[key].inlineHelpText || '';
      }

      return desc + ' FieldName: ' + key;
    }

    // contextual layer
    if ($scope.contextualLayer) {
      return 'FieldName: ' + key;
    }

    if ($stateParams.theme === 'projectRisk') {
      if ($scope.sfFieldHash.Project__c[key]) {
        desc = $scope.sfFieldHash.Project__c[key].inlineHelpText || '';
      }

      if ($scope.sfFieldHash.Location__c[key]) {
        desc = $scope.sfFieldHash.Location__c[key].inlineHelpText || '';
      }

      if ($scope.sfFieldHash.Risk__c[key]) {
        desc = $scope.sfFieldHash.Risk__c[key].inlineHelpText || '';
      }

      return desc + ' FieldName: ' + key;
    }

    if ($stateParams.theme === 'projectHealth') {
      if ($scope.sfFieldHash.Project__c[key]) {
        desc = $scope.sfFieldHash.Project__c[key].inlineHelpText || '';
      }

      if ($scope.sfFieldHash.Location__c[key]) {
        desc = $scope.sfFieldHash.Location__c[key].inlineHelpText || '';
      }

      if ($scope.sfFieldHash.Project_Evaluation__c[key]) {
        desc = $scope.sfFieldHash.Project_Evaluation__c[key].inlineHelpText || '';
      }
      return desc + ' FieldName: ' + key;
    }

    // project
    if ($scope.sfFieldHash.Project__c[key]) {
      desc = $scope.sfFieldHash.Project__c[key].inlineHelpText || '';
    }

    if ($scope.sfFieldHash.Location__c[key]) {
      desc = $scope.sfFieldHash.Location__c[key].inlineHelpText || '';
    }

    if ($scope.sfFieldHash.Indicator__c[key]) {
      desc = $scope.sfFieldHash.Indicator__c[key].inlineHelpText || '';
    }

    if ($scope.sfFieldHash.Indicator_Value__c[key]) {
      desc = $scope.sfFieldHash.Indicator_Value__c[key].inlineHelpText || '';
    }

    if ($scope.sfFieldHash.Logframe_Element__c[key]) {
      desc = $scope.sfFieldHash.Logframe_Element__c[key].inlineHelpText || '';
    }

    return desc + ' FieldName: ' + key;

  };

  //Init selectedFeatureTitle property
  $scope.title= "Feature Details";

  $scope.toggleState = function(stateName) {
    var state = $state.current.name !== stateName ? stateName : 'main';
    $state.go(state, $stateParams);
  };

  $scope.itemsList = true;
  $scope.details = false;


  //Initialize the dummy project/disaster click results
  $scope.groupings = {};

  $scope.alertUserToClick = true;

  $scope.$on('details', function (event, featureLayer) {
    $scope.alertUserToClick = false;
    var properties = featureLayer.feature.properties;
    $scope.feature = featureLayer.feature;
    $scope.title = $scope.featureTitle = properties.name || properties.title || 'Selected Feature';
    if (properties.salesforce) { // salesforce theme badge selected
      $scope.contextualLayer = false;
      $scope.groupings = properties.salesforce;
      $scope.numThemeItems = $.map(properties.salesforce, function(n) { return n}).length;
      $scope.showList();
      $scope.openParam('details-panel');
      $scope.createDonuts();
    } else { // standard geojson, show properties as details

      $scope.contextualLayer = (properties.sf_id ? false : true);
      $scope.showDetails(properties);
      $scope.openParam('details-panel');
    }
    $scope.resizeDetailsPanel();
  });

  $scope.$on('route-update', function () {
    var sf_id = $stateParams.sf_id;
    $scope.theme = $stateParams.theme;
    if ($scope.alertUserToClick === false) return;
    if (sf_id && typeof sf_id === 'string') {
      var url = config.chubbsPath('services/custom/custom_operation?name=doecostextsearch&format=json&text=') + sf_id;
      $http.get(url).success(function (result, status) {
        if (result[0]) {
          $rootScope.$broadcast('details', { feature: { properties: result[0] } });
        }
      });
    }
  });

  $scope.createDonuts = function() {
    // uses jquery to put donut in a div.
    if ($scope.groupings && $scope.groupings.Projects) {
      Donuts.createLabelDonut($scope.sfFieldHash.Project__c.sector__c.picklistValues, $scope.groupings.Projects, '#details-donut');
    }
  };

  $scope.moreLess = 'More';

  $scope.toggleMoreLess = function () {
    if ($scope.moreLess === 'More') {
      $scope.moreLess = 'Less';
    } else {
      $scope.moreLess = 'More';
    }
    //Resize;
    $scope.resizeDetailsPanel();
  };

  $scope.showDetails = function (item, themeItems, idx) {
    if (item.sf_id) {
      $rootScope.setParamWithVal('sf_id', item.sf_id);
    }
    if (item.name || item.title) {
      $scope.title = item.name || item.title;
    }
    if (typeof idx === 'number') $scope.activeThemeItemIdx = idx;
    if (themeItems) $scope.activeThemeItemsList = themeItems;
    $scope.itemsList = false;
    $scope.details = removeUnwantedItems(formatDetails(item, $stateParams.theme), $stateParams.theme);
    if (!$scope.contextualLayer) {
      $scope.lessDetails = removeUnwantedItems(lessDetails(formatDetails(item, $stateParams.theme)), $stateParams.theme);
    }

    //Filter/Format RFAs and Indicators
    if ($scope.details.requestsForAssistance && typeof $scope.details.requestsForAssistance === 'array') {
      //Filter/Format
      $scope.details.requestsForAssistance = $scope.details.requestsForAssistance.map(function (rfa) {
        return removeUnwantedItems(formatDetails(rfa, "RFA"), "RFA");
      });
    }

    if ($scope.details.indicators && typeof $scope.details.indicators === 'array') {
      //Filter/Format
      $scope.details.indicators = $scope.details.indicators.map(function (indicator) {
        return removeUnwantedItems(formatDetails(indicator, "indicator"), "indicator");
      });
    }

    if ($scope.details.risks && typeof $scope.details.risks === 'array') {
      //Filter/Format
//          $scope.details.risks = $scope.details.risks.map(function (risk) {
//              return removeUnwantedItems(formatDetails(risk, "risk"), "risk");
//          });
    }

    if ($scope.details.statuses && typeof $scope.details.statuses === 'array') {
      //Filter/Format
//          $scope.details.statuses = $scope.details.statuses.map(function (status) {
//              return removeUnwantedItems(formatDetails(status, "status"), "status");
//          });
    }

    //Need to wait until details panel switches modes, and then calculate the size.
    setTimeout(function() {
      $scope.resizeDetailsPanel();
    }, 100);

  };

  function removeUnwantedItems(details, type) {
    var passthroughDetails = {};
    var blacklistDictionary = config.unwantedProjectDetails;

    if (type === 'disaster') {
      blacklistDictionary = config.unwantedDisasterDetails;
    }
    else if (type === 'project') {
      blacklistDictionary = config.unwantedProjectDetails;
    }
    else if (type === 'RFA') {
      blacklistDictionary = config.unwantedRFADetails;
    }
    else if (type === 'indicator') {
      blacklistDictionary = config.unwantedIndicatorDetails;
    }

    for (var key in details) {
      var blacklisted = blacklistDictionary[key];
      if (blacklisted && (typeof blacklisted === 'function')) {
        //evaluate the function to decide if the key should be shown.
        blacklisted = blacklisted(details[key]);
      }
      if (!blacklisted) {
        //Allow the item thru if it is not blacklisted
        passthroughDetails[key] = details[key];
      }
    }

    return passthroughDetails;
  }

  function formatDetails(details, type) {
    var formattedDetails = {};
    var formattingDictionary = config.projectDetailsFormatting;

    if (type === 'disaster') {
      formattingDictionary = config.disasterDetailsFormatting;
    }
    else if (type === 'project') {
      formattingDictionary = config.projectDetailsFormatting;
    }
    else if (type === 'RFA') {
      formattingDictionary = config.RFADetailsFormatting;
    }
    else if (type === 'indicator') {
      formattingDictionary = config.indicatorDetailsFormatting;
    }

    for (var key in details) {
      var formatter = formattingDictionary[key];
      if (formatter) {
        switch (formatter.split(",")[0]) {
          case "currency":
            formattedDetails[key] = $filter('currency')(details[key], (formatter.split(",")[1] || "USD"));
            break;

          case "number":
            formattedDetails[key] = $filter('number')(details[key]);
            break;

          case "date":
            formattedDetails[key] = $filter('date')(details[key], "yyyy-dd-MM");
            break;
          case "rfaName":
            formattedDetails[key] = $scope.details.location__r_admin_0__c + ' ' + $scope.details.disaster_type__c + ' - ' + details.appeal_source__c;
            break;

          default:
            formattedDetails[key] = details[key];
        }
      }
      else {
        //No formatting
        formattedDetails[key] = details[key];
      }
    }

    return formattedDetails;
  }

  function lessDetails(details) {
    var lessDetails = [];
    if ($stateParams.theme === 'disaster') {
      for (var i = 0, len = config.disasterDetailsShortList.length; i < len; i++) {
        var key = config.disasterDetailsShortList[i];
        lessDetails.push({
          key: key,
          value: details[key]
        });
      }
    } else {
      var projectDetailsShortList = config.projectDetailsShortList;
      for (var i = 0, len = projectDetailsShortList.length; i < len; i++) {
        var key = projectDetailsShortList[i];
        lessDetails.push({
          key: key,
          value: details[key]
        });
      }
    }
    return lessDetails;
  }

  $scope.nextThemeItem = function() {
    var len = $scope.activeThemeItemsList.length;
    if (++$scope.activeThemeItemIdx >= len) $scope.activeThemeItemIdx = 0;
    var item = $scope.activeThemeItemsList[$scope.activeThemeItemIdx];
    $scope.showDetails(item);
  };

  $scope.prevThemeItem = function() {
    var len = $scope.activeThemeItemsList.length;
    if (--$scope.activeThemeItemIdx < 0) $scope.activeThemeItemIdx = len - 1;
    var item = $scope.activeThemeItemsList[$scope.activeThemeItemIdx];
    $scope.showDetails(item);
  };

  $scope.showList = function () {
    $scope.title = $scope.featureTitle;
    $scope.itemsList = true;
    $scope.details = false;
  };

  $scope.resizeDetailsPanel = function() {
    var height = $('#MapCtrl').height() - 200; //Magic Number

    //height is the value that the entire details panel should never exceed.
    //Within the panel itself, the inner container needs to adjust its height based on the contents of the panel.
    //Sometimes, there are tabs, and sometimes the project/disaster description can be quite long.
    //In these cases, then innerContainer should shrink to fit within the max-height of the outer panel (height)

    //Find the top of the innerContainer, and subtract from the max height of the panel.  That's what the max-height of the inner panel should be
    var innerTop = $('#DetailsPanel .InnerContainer').position().top;
    var bottomHeight = $(".details-bottom-buttons.pull-right").height();

    $('#DetailsPanel .InnerContainer ').css("max-height", height - innerTop - bottomHeight);
  };

	//Connect the layout onresize end event
	window.layout.panes.center.bind("layoutpaneonresize_end", $scope.resizeDetailsPanel);

	//For Init.
	$scope.resizeDetailsPanel();

  $scope.save = function (data, name) {
    var json = JSON.stringify(data, null, 2);
    var blob = new Blob([json], {type:'text/plain'});
    var downloadLink = document.createElement("a");
    var url = (window.webkitURL != null ? window.webkitURL : window.URL);
    downloadLink.href = url.createObjectURL(blob);
    downloadLink.download = name || 'feature.geojson';
    downloadLink.click();
  };

});

},{}],"/Users/nick/code/Mapfolio/GeoForce/GeoAngular/app/scripts/controllers/export.js":[function(require,module,exports){
/**
 * Created by Ryan Whitley
 *       on 6/4/14.
 */

module.exports = angular.module('GeoAngular').controller('ExportCtrl', function($scope, $http, $state, $stateParams) {
    console.log('ExportCtrl');

    $scope.export = function () {

    };

    $scope.routeUrl = window.location;


    /**
     * If ExportCtrl gets called twice for some reason, we might
     * have this class hanging around blocking the app. ExportCtrl
     * does get called twice sometimes, because the modal sometimes
     * nudges the map and reinstantiates the modal again via a new
     * route.
     */
    $('.modal-backdrop').remove();

    $('#exportModal').modal('show');

    $('#exportModal').on('hidden.bs.modal', function (e) {
        $state.go('main', $stateParams);
    });


    var self = this;

    //defaults
    self._LayoutElements = { "map": true, "legend": true, "optionalthemedetails": false };
    self._ImageFormat = 'png';

    self._init = function () {

        self._connectRadioButtonOnClicks();
        $("#executeExportButton").on("click", function () {
            //Show loading gif. Hide export button
            try {
                self._exportImage();
            }
            catch (e) {
                self._showExportButtonHideLoader();
            }

        });
    };

    self._showWaitingPanel = function () {
        self._showLoader(); //show knightRider image, hide
        $("#exportOptionsPanel").css({"display": "none"});
        $("#exportWaitingPanel").css({ "display": "block" });
        $(".exportGroupTitle.error").css({ "display": "none" }); //Hide error message, if shown
        $(".imageOpenButton").css({"display": "none"}); //hide open image button
    }

    self._hideWaitingPanel = function () {
        $("#exportWaitingPanel").css({"display": "none"});
        $("#exportOptionsPanel").css({"display": "block"});
    }

    self._hideExportButtonShowLoader = function () {
        $("#executeExportButton").css({ "display": "none" });
        $(".knightRiderLoader").css({ "display": "block" });
    }

    self._showExportButtonHideLoader = function () {
        $("#executeExportButton").css({"display": "block"});
        $(".knightRiderLoader").css({"display": "none"});
    }

    self._connectRadioButtonOnClicks = function () {


        $("#optionalOutputMap").on("click", self._getLayoutElementOnClick('map'));
        $("#optionalOutputLegend").on("click", self._getLayoutElementOnClick('legend'));
        $("#optionalThemeDetails").on("click", self._getLayoutElementOnClick('optionalthemedetails'));


        var pngRBNode = $("#pngImageFormat");
        pngRBNode.on("click", self._getImageButtonRadioButtonOnClick(pngRBNode, 'png'));

        var pdfRBNode = $("#pdfImageFormat");
        pdfRBNode.on("click", self._getImageButtonRadioButtonOnClick(pdfRBNode, 'pdf'));

        $("#exportClose").on("click", self.hideExportOption);

        $(".killOpenButton").on("click", self._hideWaitingPanel); //the discard button

    };

    self._getImageButtonRadioButtonOnClick = function (node, imageFormat) {

        return function () {
            self._ImageFormat = imageFormat;
            self._removeAllSelectedRadioButtons("exportOptionsContainer");
            node.addClass("exportRadioButtonSelected");
        };
    };

    self._getLayoutElementOnClick = function (element) {
        return function () {
            //Toggle Active State
            self._LayoutElements[element] = !self._LayoutElements[element];

            //$("#exportOptions .checkbox").removeClass("checked");
            $(this).toggleClass('checked');
        };
    };

    self._removeAllSelectedRadioButtons = function (parentDivID) {
        $.each($("#" + parentDivID + " .exportRadioButtonSelected"), function (idx, node) {
            $(node).removeClass("exportRadioButtonSelected");
        });
    };

    self._hideLoader = function () {
        $(".knightRiderLoader").css({"display": "none"});
    }

    self._showLoader = function () {
        $(".knightRiderLoader").css({"display": "block"});
    }

    this.showExportOption = function () {
        $("#exportOptions").css({ "display": "block" });
    }

    this.hideExportOption = function () {
        $("#exportOptions").css({ "display": "none" });
    }

    self._killOpenImageButton = function () {
        //Hide 'open image' button and show export button.
        self._showExportButtonHideLoader();
        $(".imageOpenButton").css({"display": "none"});
    }

    self._onError = function () {
        self._hideWaitingPanel();
        //Display error message.
        $(".exportGroupTitle.error").replace("<span>There was an error exporting the image.</span>");
        $(".exportGroupTitle.error").css({"display": "block"});
    }

    self._exportImage = function () {

        var titleHTML = "Title";

        //var legendsHTML = $('<div>').append($("#LayerListWrapper").clone()).html().replace(/\"/g, '\\"');


        var layoutWidth = $("body").width();
        var mapHeight = $("#MapCtrl").height();
        var mapWidth = $("#MapCtrl").width();

        var codeblock = "";
        //Adjust body width
        codeblock += '$("body").width(' + (mapWidth + 20) + ');';

        //Label selected country
        //codeblock += '$("#activeCountry").html( "' + _FSP.MapBuilder.SelectedCountry + '");';

        //Depending on what's in the layoutElements array, grab dom nodes
        //var _showNone = true; //flag to detect if user chose nothing

//        for (var key in self._LayoutElements) {
//            if (self._LayoutElements.hasOwnProperty(key)) {
//                //If user has selected even 1 element, then set _showNone to false; (because we are going to show something)
//                if (self._LayoutElements[key] === true) {
//                    _showNone = false;
//                }
//                switch (key) {
//                    case "map":
//                        if (self._LayoutElements[key] === true) {
//                            //grab the map div
//                            var mapHTML = $('<div>').append($(".leaflet-map-pane").clone()).html().replace(/\"/g, '\\"');
//                            if (mapHTML.indexOf('-webkit-transform') === -1) {
//                                mapHTML = mapHTML.replace(/-ms-transform/g, 'transform').replace(/transform/g, '-webkit-transform');
//                            }
//                            codeblock += '$("#MapCtrl").height(' + mapHeight + ');';
//                            codeblock += '$("#MapCtrl").replaceWith("' + mapHTML + '");';
//                            //Adjust Map wrapper
//                            codeblock += '$("#upperMapWrapper").width(' + (mapWidth) + ');';
//                            codeblock += '$("#upperMapWrapper").height(' + (mapHeight) + ');';
//                        }
//                        else {
//                            //hide map div
//                            codeblock += '$("#upperMapWrapper").hide();';
//                        }
//                        break;
//
//                    case "legend":
//                        if (self._LayoutElements[key] === true) {
////                            var legendsHTML = $('<div>').append($("#LayerListWrapper").clone()).html().replace(/\"/g, '\\"');
////                            codeblock += "$('#legends').append('" + legendsHTML + "');";
////
////                            //Adjust Title of CICOs
////                            codeblock += "$('#legends').prepend($('#parentCICO'));";
////                            codeblock += "$('#legends').prepend($('#LayerListWrapper header'));";
////
////
////                            //Move panelTitle to grpCICO.  1st thing.
////                            codeblock += "$('#grpCICO').prepend($('.panelTitle'));";
//                        }
//                        else {
//                            //if both map and legend are excluded, hide the wrapper with border
//                            if (self._LayoutElements["map"] != true) {
//                                codeblock += '$("#upperMapWrapper").css({"display": "none"});';
//                            }
//                        }
//                        break;
//
//                    case "optionalthemedetails":
//                        if (self._LayoutElements[key] === true) {
//                            //#DetailsPanel .title.ng-binding
//
//                            var COHTML = $('<div>').append($("#DetailsPanel .InnerContainer.scrollable").clone().addClass("on")).html().replace(/\"/g, '\\"').replace(/<!--(.*?)-->/gm, "");
//                            codeblock += "$('#uxThemeDetails').append('" + COHTML + "');";
//                        }
//                        break;
//                }
//            }
//        }

//        if (_showNone == true) {
//            //Don't do anything, cause user hasn't selected anything.
//            $("#exportMessage").html("Please select 1 or more elements to export.");
//            return;
//        }
//        else {
//            $("#exportMessage").html("");
//        }

        //show loader
        self._showWaitingPanel();

        //formatting
        //codeblock = codeblock.replace(/(\r\n|\n|\r)/gm, "");  //remove line breaks

        var printPostArgs = {
            //url: 'http://geo.redcross.com/mapfolio/print.htm',
            url: $scope.routeUrl.href.replace("mapfolio/#", "mapfolio/print.html#").replace("mapfolio/index.html#", "mapfolio/print.html#").replace("/export", "").replace("http://localhost:3001", "https://geo.redcross.org"), //Swap the current url for the print url
            imageformat: self._ImageFormat || 'png',
            format: 'json',
            //codeblock: codeblock,
            viewportheight: mapHeight,
            viewportwidth: layoutWidth,
            delay: 5000 //time to wait in ms
        };


        $.ajax({
            type: "POST",
            url: 'http://print.spatialdev.com',
            data: printPostArgs,
            success: self._onImageExport,
            error: self._onError
        });

    };

    self._onImageExport = function (result) {

        var exportImageURL = result.image;

        //instead, show a button/hyperlink for the user to open the image.
        $(".imageOpenButton a").attr("href", exportImageURL);
        $(".imageOpenButton").css({"display": "block"});

        //Hide loader
        self._hideLoader();
    };

    self._init();
});

},{}],"/Users/nick/code/Mapfolio/GeoForce/GeoAngular/app/scripts/controllers/filters.js":[function(require,module,exports){
/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *       on 3/27/14.
 */

module.exports = angular.module('GeoAngular').controller('FiltersCtrl', function($scope, $http, $state, $stateParams) {
  $scope.params = $stateParams;
  $scope.navTab = 'sectors';
  $scope.sectors = [];
  $scope.status = [];
  debug.budget = $scope.budget = {
    slider: [2000, 8000],
    min: 0,
    mean: 5000,
    max: 100000
  };

  /**
   * Get checkbox info that was generated by the Succubus.
   */
  $http.get('succubus_gitignore/sf-project-filter-checkboxes.json', {cache: true}).success(function (data, status) {
    angular.extend($scope, data);
    debug.filtersScope = $scope;
  }).error(function() {
    console.error("Unable to fetch project filter meta data");
  });

  /**
   * Get budget stats from Chubbs - dynamic from PostGIS.
   */
  $http.get(config.chubbsPath('services/custom/custom_operation?name=projecttotalbudget&format=json'), {cache: true}).success(function (data, status) {
    if (data.length > 0) {
      $scope.budget.min = data[0].min;
      $scope.budget.mean = data[0].avg;
      $scope.budget.max = data[0].max;
      $scope.budget.slider = [data[0].min, data[0].max];
    }
  }).error(function() {
    console.error("Unable to fetch Total Budget Min, Mean, Max");
  });

  $scope.dateFilters = [
    {
      name: 'Start Date',
      radio: 'on',
      empty: true,
      opened: false
    },{
      name: 'End Date',
      radio: 'on',
      empty: true,
      opened: false
    },{
      name: 'Create Date',
      radio: 'on',
      empty: true,
      opened: false
    },{
      name: 'Last Modified',
      radio: 'on',
      empty: true,
      opened: false
    }
  ];

  $scope.toggleDate = function($event, dateFilter) {
    $event.preventDefault();
    $event.stopPropagation();

    dateFilter.opened = !dateFilter.opened;
  };

  $scope.sectorsFilter = function () {
    var sectors = $scope.sectors;
    $scope.sectorClause = null;
    var first = true;
    for (var i = 0, len = sectors.length; i < len; ++i) {
      var sector = sectors[i];
      if (sector.checked) {
        if (first) {
          $scope.sectorClause = "sector__c LIKE '%" + sector.name + "%' ";
          first = false;
        } else {
          $scope.sectorClause += "OR sector__c LIKE '%" + sector.name + "%' ";
        }
      }
    }
    $scope.composeWhereClause();
  };

  $scope.clearSectorsFilter = function () {
    var sectors = $scope.sectors;
    for (var i = 0, len = sectors.length; i < len; ++i) {
      sectors[i].checked = false;
    }
    $scope.sectorClause = null;
    $scope.composeWhereClause();
  };

  $scope.statusFilter = function () {
    var status = $scope.status;
    $scope.statusClause = null;
    var first = true;
    for (var i = 0, len = status.length; i < len; ++i) {
      var stat = status[i];
      if (stat.checked) {
        if (first) {
          $scope.statusClause = "status__c LIKE '%" + stat.name + "%' ";
          first = false;
        } else {
          $scope.statusClause += "OR status__c LIKE '%" + stat.name + "%' ";
        }
      }
    }
    $scope.composeWhereClause();
  };

  $scope.clearStatusFilter = function () {
    var status = $scope.status;
    for (var i = 0, len = status.length; i < len; ++i) {
      status[i].checked = false;
    }
    $scope.statusClause = null;
    $scope.composeWhereClause();
  };

  $scope.dateFilter = function () {
    $scope.dateClause = null;
    var _first = true;
    var first = function () {
      if (_first) {
        _first = false;
        return '';
      }
      return ' AND ';
    };
    var dateFilters = $scope.dateFilters;
    for (var i = 0, len = dateFilters.length; i < len; ++i) {
      var filter = dateFilters[i];

      if (filter.name === 'Start Date' && filter.date) {
        $scope.dateClause = first() + 'start_date__c' + compare(filter) + "'" + dateString(filter.date) + "'";
        continue;
      }

      if (filter.name === 'End Date' && filter.date) {
        $scope.dateClause = first() + 'end_date__c' + compare(filter) + "'" + dateString(filter.date) + "'";
        continue;
      }

      if (filter.name === 'Create Date' && filter.date) {
        $scope.dateClause = first() + 'createdate' + compare(filter) + "'" + dateString(filter.date) + "'";
        continue;
      }

      if (filter.name === 'Last Modified' && filter.date) {
        $scope.dateClause = first() + 'lastmodifieddate' + compare(filter) + "'" + dateString(filter.date) + "'";
      }

    }
    $scope.composeWhereClause();
  };

  $scope.clearDateFilter = function () {
    $scope.dateFilters = [
      {
        name: 'Start Date',
        radio: 'on',
        empty: true,
        opened: false,
        date: null
      },{
        name: 'End Date',
        radio: 'on',
        empty: true,
        opened: false,
        date: null
      },{
        name: 'Create Date',
        radio: 'on',
        empty: true,
        opened: false,
        date: null
      },{
        name: 'Last Modified',
        radio: 'on',
        empty: true,
        opened: false,
        date: null
      }
    ];
    $scope.dateClause = null;
    $scope.composeWhereClause();
  };

  /**
   * Used in dateFilter. Determines the proper SQL comparator to use
   * for filtering a date.
   *
   * @param filter
   */
  function compare(filter) {
    var radio = filter.radio;
    if (radio === 'on') {
      return '=';
    }
    if (radio === 'before') {
      return '<';
    }
    if (radio === 'after') {
      return '>';
    }
  }

  /**
   * Returns date as YYYY-MM-DD
   *
   * @param date
   * @returns {string}
   */
  function dateString(date) {
    return date.toISOString().slice(0,10);
  }

  $scope.budgetFilter = function () {
    $scope.budgetClause = null;
    var min = $scope.budget.slider[0];
    var max = $scope.budget.slider[1];
    if (min !== 0 && max !== $scope.budget.max) { //both min and max changed
      $scope.budgetClause = 'total_budget__c>=' + min + ' AND total_budget__c<=' + max;
    } else if (min !== 0) { // only min changed
      $scope.budgetClause = 'total_budget__c>=' + min
    } else if (max !== $scope.budget.max) { // only max changed
      $scope.budgetClause = 'total_budget__c<=' + max;
    }
    $scope.composeWhereClause();
  };

  $scope.clearBudgetFilter = function () {
    $scope.budget.slider[0] = $scope.budget.min;
    $scope.budget.slider[1] = $scope.budget.max;
    $scope.budgetClause = null;
    $scope.composeWhereClause();
  };

  $scope.composeWhereClause = function () {
    $scope.whereClause = null;
    var parts = [$scope.sectorClause, $scope.dateClause, $scope.statusClause, $scope.budgetClause];
    var first = true;
    for (var i = 0, len = parts.length; i < len; ++i) {
      var part = parts[i];
      if (part) {
        if (first) {
          $scope.whereClause = part;
          first = false;
        } else {
          $scope.whereClause += 'AND ' + part;
        }
      }
    }
    if (!$scope.whereClause) $scope.whereClause = 'null';
    $scope.submitFilter();
  };

  $scope.submitFilter = function () {
    $stateParams.filters = $scope.whereClause;
    var state = $state.current.name || 'main';
    $state.go(state, $stateParams);
  };

  $scope.clearAllFilters = function () {
    $scope.clearSectorsFilter();
    $scope.clearStatusFilter();
    $scope.clearDateFilter();
    $scope.clearBudgetFilter();
  };

});

},{}],"/Users/nick/code/Mapfolio/GeoForce/GeoAngular/app/scripts/controllers/info.js":[function(require,module,exports){
/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *       on 3/27/14.
 */

module.exports = angular.module('GeoAngular').controller('InfoCtrl', function($scope) {
  $scope.params = $stateParams;
});
},{}],"/Users/nick/code/Mapfolio/GeoForce/GeoAngular/app/scripts/controllers/layers.js":[function(require,module,exports){
/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *       on 3/27/14.
 */

module.exports = angular.module('GeoAngular').controller('LayersCtrl', function($scope, $state, $stateParams, LayerConfig, VectorProvider) {
  $scope.params = $stateParams;
  $scope.zoom = parseInt($stateParams.zoom);
  $scope.navTab = 'contextual';

  debug.LayerConfig = LayerConfig;
  debug.setGadmLevel = VectorProvider.setGadmLevel;

  $scope.gadmLevel = $stateParams.level || 'auto';

  $scope.themeLayer = LayerConfig.theme;
  $scope.themecountLayer = LayerConfig.themecount;

  $scope.setBadges = function(bool) {
    if (bool) {
      $scope.themeLayer.active = false;
    } else {
      $scope.themeLayer.active = true;
    }
    $scope.toggleMapLayer('themecount', $scope.themecountLayer);
    $scope.toggleMapLayer('theme', $scope.themeLayer);

  };

  $scope.$watch('gadmLevel', function (newValue) {
    $stateParams.level = newValue;
    var state = $state.current.name || 'main';
    $state.go(state, $stateParams);
  });

  $scope.$on('level-update', function () {
    VectorProvider.setGadmLevel($stateParams.level);
    $scope.gadmLevel = $stateParams.level
  });

  $scope.$on('zoom-update', function () {
    console.log("zoom: " + $stateParams.zoom);
    $scope.zoom = parseInt($stateParams.zoom);
  });

  /**
   * This is the collection of all of the layers we have.
   * This is used by the searchLayersFilter.
   */
  $scope.allLayers = {};
  // building the allLayers model
  for (var k in LayerConfig) {
    var layer = LayerConfig[k];

    // We don't want to show layers that are basemaps, and we don't want to show the find func.
      if (  typeof layer === 'function'
      || k === 'basemaps'
      || k === 'bbox'
      || layer.type === 'basemap' ) {

      continue;
    }

    $scope.allLayers[k] = keyToObj(k);
  }

  $scope.layersPanels = {
//    'Boundaries': {},
//    'GeoJSON': {},
//    'KML': {},
//    'CSV': {},
//    'WMS': {},
    'Contextual layers:': {}
  };

  function buildLayersModel() {
    $scope.layersPanels['Contextual layers:'] = {};
    for (var layerKey in LayerConfig) {
      var layer = LayerConfig[layerKey];

      // We don't want to show layers that are basemaps, and we don't want to show the find func.
      if (  typeof layer === 'function'
        || layerKey === 'basemaps'
        || layerKey === 'bbox'
        || layer.type === 'basemap' ) {

        continue;
      }

      if (!$scope.$stateParams.theme) {
        var theme = 'project';
      } else {
        var theme = $scope.$stateParams.theme.toLowerCase();
      }

      if (!layer.theme || (layer.theme.toLowerCase() !== 'all' && layer.theme.toLowerCase() !== theme) ) {
        continue
      }

      $scope.layersPanels['Contextual layers:'][layerKey] = keyToObj(layerKey);

    }
  }
  buildLayersModel();

  debug.layersPanels = $scope.layersPanels;

  function keyToObj(key) {
    var val = LayerConfig[key];
    if (typeof val === 'string') {
      return {
        url: val
      };
    }
    return val;
  }

  //NH TODO: Not yet fully implemented - possible extra feature...
  /**
   * Layers that are active on the map but are not mentioned in LayerConfig
   * @type {{}}
   */
  $scope.nomadLayers = {};


  /**
   * When the route changes, we should see what layers we have on there and have the layers
   * in the panels checked accordingly.
   */
  $scope.$on('layers-update', function(evt, layers) {

    buildLayersModel();

    // github gists
    $scope.listGists();

    // reset the nomad layers
    for (var nk in $scope.nomadLayers) {
      $scope.nomadLayers[nk].active = false;
    }

    // reset the layer config layers
    for (var lck in LayerConfig) {
      if (typeof LayerConfig[lck] === 'object' && LayerConfig[lck] !== null) {
        LayerConfig[lck].active = false;
      }
    }

    /**
     * Check if the layer is active in map layers
     */
    $scope.mapLayers = layers;
    // skip the first layer, the basemap
    for (var i = 1, len = layers.length; i < len; i++) {
      var l = layers[i];
      // layer is in the layer config
      if (typeof LayerConfig[l] === 'object' && LayerConfig[l] !== null) {
        LayerConfig[l].active = true;
      }
      // layer is a github gist
      else if ($scope.gists[l]) {
        $scope.gists[l].active = true;
      }
      // layer is a not in the layer config. it's nomadic.
      else {
        $scope.nomadLayers[l] = {
          name: l,
          url: l,
          active: true
        }
      }
    }
  });


  $scope.toggleMapLayer = function (layerKey, layer) {

    // add layer
    if (layer.active === true) {
      $scope.mapLayers.push(layerKey);

    // remove layer
    } else {
      $scope.mapLayers = $.grep($scope.mapLayers, function(routeLayer){
        return routeLayer !== layerKey;
      });
    }

    $stateParams.layers = $scope.mapLayers.join(',');
    var state = $state.current.name || 'main';
    $state.go(state, $stateParams);

  };


  $scope.listGists = function () {
    $scope.gists = gists.fetch();
    if ($scope.gists) {
      $scope.numGists = Object.keys($scope.gists).length;
    } else {
      $scope.numGists = 0;
    }
  };
  $scope.listGists();
  debug.gistsLayersPanel = $scope.gists;

  $scope.searchLayers = $scope.allLayers;

  $scope.search = function(searchText) {
    var layers = $scope.allLayers;
    if (typeof searchText === 'string') {
      searchText = searchText.toLowerCase();
    } else {
      $scope.searchLayers = layers;
      return;
    }
    var searchLayers = {};
    for (var k in layers) {
      var l = layers[k];
      for (var k2 in l) {
        var val = l[k2].toString();
        if (val.toLowerCase().indexOf(searchText) > -1) {
          searchLayers[k] = l;
          break;
        }
      }
      var props = l.properties;
      if (props) {
        for (var k3 in props) {
          var val = props[k3].toString();
          if (val.toLowerCase().indexOf(searchText) > -1) {
            searchLayers[k] = l;
            break;
          }
        }
      }
    }
    $scope.searchLayers = searchLayers;
  };

});


},{}],"/Users/nick/code/Mapfolio/GeoForce/GeoAngular/app/scripts/controllers/legend.js":[function(require,module,exports){
/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *       on 3/27/14.
 */

module.exports = angular.module('GeoAngular').controller('LegendCtrl', function($scope, LayerConfig, $stateParams) {

  $scope.$on('layers-update', function (evt, layers) {
    $scope.layers = [];
    for (var i = layers.length - 1; i >= 1; i--){
      var l = layers[i];
      var layer = {};
      var lcfg = LayerConfig.find(l);

      layer.alias = l;
      layer.name = lcfg.name;
      if(l === 'themecount' || l === 'theme'){
          layer.name = $stateParams.theme || 'Project';
      }
      if (!name && lcfg.properties && lcfg.properties.title) {
        layer.name = lcfg.properties.title;
      } else if (!layer.name) {
        layer.name = l;
      }

      if(lcfg.properties){
          if(lcfg.properties.legend){
              if(typeof lcfg.properties.legend === 'function'){
                    //Build the legend element
                    layer.activeLegend = lcfg.properties.legend($stateParams.theme || 'project');
              }
              else{
                  //If legend is a string, use it directly
                  layer.activeLegend = lcfg.properties.legend;
              }
          }else{
              //No legend defined.  Use a default.

          }
      }

      $scope.layers.push(layer);
    }
  });

});
},{}],"/Users/nick/code/Mapfolio/GeoForce/GeoAngular/app/scripts/controllers/main.js":[function(require,module,exports){
module.exports = angular.module('GeoAngular').controller('MainCtrl', function($scope, $rootScope, $state, $stateParams, $location) {
  debug.$location = $location;
  localStorage.setItem('defaultRoute', $location.path());

  // NH TODO: See if this is also the case with ui-router?
  // weird bug where redirect peels out '://{s' when ':' is there
  // $routeParams.layers We just dont have the : in main.js so that
  // part of the path does not go away...
  var layersStr = $stateParams.layers = $stateParams.layers.replace('http//', 'http://');
  var themeStr = $stateParams.theme;

  var levelStr = $stateParams.level;
  var zoomStr = $stateParams.zoom;

  $rootScope.$broadcast('route-update');

  /**
   * Only if the latest route has a different layer string than before.
   */
  if (layersStr !== window.prevLayersStr || themeStr !== window.prevTheme) {
    window.prevLayersStr = layersStr;
    window.prevTheme = themeStr;
    var layers = layersStr.split(',');
    $rootScope.$broadcast('layers-update', layers);
  }

  if (levelStr !== null && levelStr !== window.prevLevelStr) {
    window.prevLevelStr = levelStr;
    $rootScope.$broadcast('level-update', levelStr);
  }

  if (zoomStr !== window.prevZoomStr) {
    window.prevZoomStr = zoomStr;
    $rootScope.$broadcast('zoom-update', zoomStr);
  }

});

},{}],"/Users/nick/code/Mapfolio/GeoForce/GeoAngular/app/scripts/controllers/map.js":[function(require,module,exports){
/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *     on Mon Mar 17 2014
 */

module.exports = angular.module('GeoAngular').controller('MapCtrl', function ($scope, $rootScope, $state, $stateParams, leafletData, LayerConfig, VectorProvider) {
  $scope.params = $stateParams;

  var lastLayersStr = '';
  $scope.blur = '';
  $scope.grayout = ''; //use this class to gray out the map, such as when the country selector menu is active

  $scope.toggleState = function(stateName) {
    var state = $state.current.name !== stateName ? stateName : 'main';
    $state.go(state, $stateParams);
  };

  var layersStr = null;
  var overlayNames = [];
  var theme = null;
  var filters = null;

  function redraw() {
    var lat = parseFloat($stateParams.lat)   || 0;
    var lng = parseFloat($stateParams.lng)   || 0;
    var zoom = parseFloat($stateParams.zoom) || 17;
    layersStr = $stateParams.layers || LayerConfig.redcross.url;
    var layers = layersStr.split(',');

    // first layer should always be treated as the basemap
    var basemap = LayerConfig.find(layers[0]) || LayerConfig.redcross.url;
    if (typeof basemap === 'string') {
      var basemapUrl = basemap;
    } else {
      var basemapUrl = basemap.url;
    }
    overlayNames = layers.slice(1);

    if (lastLayersStr !== layersStr) {
      console.log('Setting layers.');
      drawOverlays();

      $scope.defaults = {
        scrollWheelZoom: true
      };

      $scope.tiles = {
        url: basemapUrl
      };
    }

    if (theme != $stateParams.theme || filters != $stateParams.filters) { // null and undefined should be ==
      resetThemeCount();
      theme = $stateParams.theme;
      filters = $stateParams.filters;
    }

    $scope.center = {
      lat: lat,
      lng: lng,
      zoom: zoom
    };

    broadcastBBox();
    lastLayersStr = layersStr;
  }
  redraw();


  /***
   * Broadcast Listeners.
   */
  $scope.$on('route-update', function() {
    if ($scope.blur === 'blur' && $state.current.name !== 'landing') {
      $scope.blur = '';
    }
    var c = $scope.center;
    var lat = c.lat.toFixed(6);
    var lng = c.lng.toFixed(6);
    var zoom = c.zoom.toString();
    if (mapMoveEnd) {
      mapMoveEnd = false;
    } else if (  $stateParams.lat     !== lat
              || $stateParams.lng     !== lng
              || $stateParams.zoom    !== zoom
              || $stateParams.layers  !== layersStr
              || $stateParams.theme   !== theme
              || $stateParams.filters !== filters   ) {

      console.log('map.js route-update Updating Map...');
      redraw();
    }

  });

  $scope.$on('blur', function() {
    $scope.blur = 'blur';
  });

  //this takes in a WKT GeoJSON Extent geometry
  $scope.zoomToExtent = function(extent){
    delete $stateParams['zoom-extent'];
    $scope.bounds = {
      northEast: { lat: extent[2][1], lng: extent[2][0] },
      southWest: { lat: extent[0][1], lng: extent[0][0] }
    };
  };

  //This take a leaflet bounds object and handles it.
  delete $stateParams['zoom-extent'];
  $scope.zoomToBounds = function(bounds){
    $scope.bounds = { northEast: bounds.getNorthEast(), southWest: bounds.getSouthWest()};
  };



    function broadcastBBox() {
    //NH TODO Fixme. Find a better solution than a spin lock.
    if (!wait) {
      wait = true;
      setTimeout(function(){
        leafletData.getMap().then(function (map) {
          //Get the MIN/MAX Tile ZYX extents.
          //If they haven't chagned, then don't proceed.
          var tileBounds = getCurrentTileBounds(map);
          var zoom = map.getZoom();

          $scope.zoom = zoom;
          var minx = tileBounds.min.x;
          var maxx = tileBounds.max.x;
          var miny = tileBounds.min.y;
          var maxy = tileBounds.max.y;

          //Detect negative mins and set to 0
          if(minx < 0) minx = 0;
          if(miny < 0) miny = 0;

          //Check for extreme values greater than the tile bounds
          var extremeValue = Math.pow(2, zoom) - 1;

          if(maxx > extremeValue) maxx = extremeValue;
          if(maxy > extremeValue) maxy = extremeValue;

          var str = zoom + "," +  minx + ',' +
                                  maxx + ',' +
                                  miny + ',' +
                                  maxy;

          VectorProvider.updateBBox(str);

        });
        wait = false;
      }, 150);
    }

  }

    /**
     * Ripped From Leaflet TileLayer
     * Calculate the Max/Min ZYX Tile bounds.
     * Use those to snap BBox requests so we can cache.
     */

    function getCurrentTileBounds(map){
        var bounds = map.getPixelBounds(),
            tileSize = 256; //TODO

        // tile coordinates range for the current view
        var tileBounds = L.bounds(
            bounds.min.divideBy(tileSize).floor(),
            bounds.max.divideBy(tileSize).floor());

        return tileBounds;
    }


  /**
   * Native Leaflet Map Object
   */
  leafletData.getMap().then(function (map) {
    window.map = map;
    map.on('moveend', function () { // move is good too
      var c = map.getCenter();
      var lat = c.lat.toFixed(6);
      var lng = c.lng.toFixed(6);
      var zoom = map.getZoom().toString();

      if (   $stateParams.lat  !== lat
        || $stateParams.lng  !== lng
        || $stateParams.zoom !== zoom ) {

        console.log('map: lat,lng,zoom !== $stateParams');
        $stateParams.lat = lat;
        $stateParams.lng = lng;
        $stateParams.zoom = zoom;
        mapMoveEnd = true;
        $state.go($state.current.name, $stateParams);
        broadcastBBox();
      }
    });

    //Connect the layout onresize end event
    try {
        window.layout.panes.center.bind("layoutpaneonresize_end", function () {
            map.invalidateSize();
        });
    }catch(e){
        //Nothing
    }
  });


  var overlays = [];

  function drawOverlays() {
    leafletData.getMap().then(function (map) {

      for (var i = 0, len = overlayNames.length; i < len; ++i) {
        var overlayName = overlayNames[i];
        var currOverlay = overlays[i];

        if (currOverlay && currOverlay.overlayName === overlayName) {
          continue; // layer is already there, continue on!
        }

        // remove the current layer that is not what should be that layer in the list
        else if ( currOverlay && currOverlay._map ) {
          if (currOverlay.destroyResource) currOverlay.destroyResource();
          map.removeLayer(currOverlay);
        }

        // try for WMS (not a vector layer)
        // if things get more fancy with wms, it should get its own factory
        if (typeof LayerConfig[overlayName] === 'object'
                    && LayerConfig[overlayName].type.toLowerCase() === 'wms') {

          var cfg = LayerConfig[overlayName];
          var layer = L.tileLayer.wms(cfg.url, {
            format: cfg.format || 'image/png',
            transparent: cfg.transparent || true,
            layers: cfg.layers
          });
        }

        /**
         * Tiles that are an overlay. OSM / Google / Mapnik tend to make tiles in this format.
         */
        else if (typeof LayerConfig[overlayName] === 'object'
                          && LayerConfig[overlayName].type.toLowerCase() === 'xyz') {

          var cfg = LayerConfig[overlayName];
          var layer = L.tileLayer(cfg.url, {
            opacity: cfg.opacity || 0.5
          });
        }

        /**
         * TMS flips the y. GeoServer often serves this.
         */
        else if (typeof LayerConfig[overlayName] === 'object'
                          && LayerConfig[overlayName].type.toLowerCase() === 'tms') {
          var cfg = LayerConfig[overlayName];
          var layer = L.tileLayer(cfg.url, {
            opacity: cfg.opacity || 0.5,
            tms: true
          });
        }

        // if its not wms, its a vector layer
        else {
          var vecRes = VectorProvider.createResource(overlayName);
          var layer = vecRes.getLayer();
        }

        layer.overlayName = overlayName;
        layer.addTo(map);
        overlays[i] = layer;

      }

      // there are more overlays left in the list, less layers specified in route
      // we need to remove those too.
      for(var len2 = overlays.length; i < len2; ++i) {
        if (overlays[i].destroyResource) overlays[i].destroyResource();
        map.removeLayer(overlays[i]);
        delete overlays[i];
      }

    });
  }

  /**
   * Used privately to rebuild the theme count layer.
   */
  function resetThemeCount() {
    leafletData.getMap().then(function (map) {
      for (var j = 0, len = overlayNames.length; j < len; j++) {
        var nme = overlayNames[j];
        if (nme === 'themecount' || nme === 'theme') {
          var oldLyr = overlays[j];
          oldLyr.destroyResource();
          map.removeLayer(oldLyr);
          var newLyr = overlays[j] = VectorProvider.createResource(nme).getLayer();
          newLyr.addTo(map);
        }
      }
    });
  }

});
},{}],"/Users/nick/code/Mapfolio/GeoForce/GeoAngular/app/scripts/controllers/navbar.js":[function(require,module,exports){
module.exports = angular.module('GeoAngular').controller('NavBarCtrl', function($scope, $state, $stateParams) {
  $scope.params = $stateParams;

});

},{}],"/Users/nick/code/Mapfolio/GeoForce/GeoAngular/app/scripts/controllers/search.js":[function(require,module,exports){
/**
 * Created by Ryan Whitley <rwhitley@spatialdev.com>
 *       on 5/21/14.
 */

module.exports = angular.module('GeoAngular').controller('SearchECOSCtrl', function($scope, $rootScope, $stateParams, $http, VectorProvider) {
  console.log('SearchECOSCtrl');
  $scope.params = $stateParams;

  var url = config.chubbsPath('services/custom/custom_operation?name=doecostextsearch&format=json&text=:text');

  $scope.searchText = '';
  $scope.$watch('SearchInput', executeECOSSearch, true);


  function executeECOSSearch (text){
      if(!text || text.length < 3) return;

      var thisURL = url.replace(":text", text);

      // Fetch from the server only if we don't have it in the hash
      $http.get(thisURL).success(function (result, status) {

          if (!result){
              $scope.results = [{name: "No results found."}];
              return;
          }

          if(result.error) {
              $scope.results = [{name: "Error searching ECOS."}];
              return;
          }

          //break up the results by type.
          $scope.projectResults = result.filter(function(item){
             return item.theme_type == 'Project';
          });

          $scope.disasterResults = result.filter(function(item){
              return item.theme_type == 'Disaster';
          });

      });
  }

    $scope.handleSearchResultClick = function(properties){
        //Send to deatils panel
        sendProjectToDetailsPanel(properties);

        //If we have a guid, then try to zoom to it.
        if(properties.location__r_gis_geo_id__c && properties.level){
            zoomToGUID(properties.location__r_gis_geo_id__c, properties.level);
        }
    };

    function sendProjectToDetailsPanel (properties){
        $rootScope.$broadcast('details', { feature: { properties: properties } });
    }


    //this is a duplicate from breadcrumbs.js  Should be refactored to a single function
    function zoomToGUID (guid, level) {
        //Given a GUID, zoom to the feature.

        //Grab the feature from the VectorProvider.
        VectorProvider.fetchFeature(guid, level, null, function (feat) {
            //Make a temp geojson layer and add the geojson.
            //Then grab the bounds from it and zoom to it.

            var gjl = L.geoJson(feat.geometry);
            $scope.$parent.zoomToBounds(gjl.getBounds());
        });

    };
});

},{}],"/Users/nick/code/Mapfolio/GeoForce/GeoAngular/app/scripts/controllers/side-view.js":[function(require,module,exports){
/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *        and Ryan Whitley      <rwhitley@spatialdev.com>
 *         on 4/16/14.
 */

module.exports = angular.module('GeoAngular').controller('SideViewCtrl', function($scope) {

  //resize function
  function resizeScrollablePanel() {
    $(".side-view .scrollable").height($(".side-view .navpanel").height() - $(".side-view .navpanel .scrollable").position().top);  //This should respond to window.resize events and will be set during that event to make sure the panel stays
  }

  //Connect the layout onresize end event
  window.layout.panes.center.bind("layoutpaneonresize_end", resizeScrollablePanel);

  //For Init.
  resizeScrollablePanel();

});

},{}],"/Users/nick/code/Mapfolio/GeoForce/GeoAngular/app/scripts/controllers/stories.js":[function(require,module,exports){
/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *       on 3/26/14.
 */

module.exports = angular.module('GeoAngular').controller('StoriesCtrl', function($scope, $stateParams, StoriesConfig) {
  $scope.params = $stateParams;

  //Get Stories from config file and load them.
  $scope.storiesConfig = StoriesConfig;
  $scope.stories = [];
  $scope.storiesSearchArray = [];
  $scope.storiesSearchText = "";
  $scope.storiesExtentArray = []; //currently not used, but should be to allow Extent to perform 'AND' logic with the keywords.

  for (var storiesKey in StoriesConfig) {

    // We don't want to show the find func.
    if (typeof StoriesConfig[storiesKey] === 'function' || storiesKey == 'stories') {
      continue;
    }

    $scope.stories.push(StoriesConfig[storiesKey]);
  }

  $scope.filterByCheckbox = function(value) {
    //Take the term passed in and add or remove it from the keywords textbox.
    if ($scope.storiesSearchArray.indexOf(value) == -1) {
      //Add it
      $scope.storiesSearchArray.push(value);
    }
    else {
      //Remove it
      $scope.storiesSearchArray.splice($scope.storiesSearchArray.indexOf(value), 1);
    }
  };

  $scope.filterExtentByCheckbox = function(value) {
    //Take the term passed in and add or remove it from the keywords textbox.
    if ($scope.storiesExtentArray.indexOf(value) == -1) {
      //Add it
      $scope.storiesExtentArray.push(value);
    }
    else {
      //Remove it
      $scope.storiesExtentArray.splice($scope.storiesExtentArray.indexOf(value), 1);
    }
  };

  $scope.clearSearch = function() {
    $scope.storiesSearchArray = [];
    $scope.storiesSearchText = "";
    $scope.storiesExtentArray = [];
  }
});


angular.module('GeoAngular').filter('searchStoriesFilter', function() {
    return function(stories, $scope) {
      var outStories = [];
      if (stories) {
        //loop thru stories and filter based on search text/checkboxes.
        //comma separated items should be broken up and searched for separately using 'OR' logic.

        var keywords = [];
        if ($scope.storiesSearchText.length > 0) {
          keywords = $scope.storiesSearchText.split(",").concat($scope.storiesSearchArray);
        }
        else {
          keywords = $scope.storiesSearchArray;
        }
        if (keywords.length == 0) {
          return stories;
        }

        stories.forEach(function(story) {
          keywords.forEach(function(keyword) {
            if (keyword.length > 0 && story.keywords.toLowerCase().indexOf($.trim(keyword.toLowerCase())) > -1) {
              if (outStories.indexOf(story) == -1) {
                outStories.push(story);
              }
            }
          });
        });


      } else {
        return stories;
      }
      return outStories;
    };
  });
},{}],"/Users/nick/code/Mapfolio/GeoForce/GeoAngular/app/scripts/controllers/theme.js":[function(require,module,exports){
/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *       on 5/6/14.
 */

module.exports = angular.module('GeoAngular').controller('ThemeCtrl', function ($scope, $rootScope, $state, $stateParams, VectorProvider) {

  var themeNameHash = $rootScope.themeNameHash = {
    project: 'Projects',
    disaster: 'Disasters',
    projectRisk: 'Project Risk',
    projectHealth: 'Project Health',
    none: 'None'
  };

  $scope.project = function () {
    $scope.themeName = themeNameHash.project;
    ensureThemeCount();
    $scope.setThemeQueryParam('project');
  };

  $scope.disaster = function () {
    $scope.themeName = themeNameHash.disaster;
    ensureThemeCount();
    $scope.setThemeQueryParam('disaster');
  };

  $scope.projectRisk = function () {
      $scope.themeName = themeNameHash.projectRisk;
      ensureThemeCount();
      $scope.setThemeQueryParam('projectRisk');
  };

  $scope.projectHealth = function () {
      $scope.themeName = themeNameHash.projectHealth;
      ensureThemeCount();
      $scope.setThemeQueryParam('projectHealth');
  };

  $scope.none = function () {
    $scope.themeName = themeNameHash.none;
    var layersArr = $.grep($stateParams.layers.split(','), function(routeLayer){
      return routeLayer !== 'themecount' && routeLayer !== 'theme';
    });
    $stateParams.layers = layersArr.join(',');
    $scope.setThemeQueryParam('none');
  };

  function ensureThemeCount() {
    if ($stateParams.layers.indexOf('themecount') === -1 && $stateParams.layers.indexOf('theme') === -1) {
      $stateParams.layers += ',themecount';
    }
  }

  $scope.setThemeQueryParam = function (theme) {
    $stateParams.theme = theme;
    var state = $state.current.name || 'main';
    $state.go(state, $stateParams);
  };

  $scope.themeName = themeNameHash[$stateParams.theme] || 'Projects';

  /*
   Handling Theme Menu Animations
   */

  $scope.toggleThemeMenu = function(){
    var flippedOut = $(".menu-selection .dropdown").hasClass("open");

    if(flippedOut == false){
      $scope.unfurlThemes();
    }
    else{
      $scope.refurlThemes();
    }
  };

  $scope.unfurlThemes = function(){
    $scope.refurlThemes();
    //Try jQuery to add an 'on' class to each of the theme LI elements on a timer.
    $($('#ThemeMenu li').get().reverse()).each(function(index){
      var self = this;
      setTimeout(function () {
        $(self).addClass("theme-selector-li-on");
      }, index*150);
    });
  };

  //Refurl?
  $scope.refurlThemes = function(){
    //Try jQuery to remove the 'on' class to each of the theme LI elements on a timer.
    $('#ThemeSelectorMenu .dropdown-menu li').removeClass("theme-selector-li-on");
  };

  /*
   End Theme Menu Animations
   */

});
},{}],"/Users/nick/code/Mapfolio/GeoForce/GeoAngular/app/scripts/controllers/upload.js":[function(require,module,exports){
/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *       on 4/17/14.
 */

module.exports = angular.module('GeoAngular').controller('UploadCtrl', function($scope, $http, $state, $stateParams, $upload) {

  $scope.showAlert = false;
  $scope.showProgress = false;
  $scope.showUploadedUrl = false;
  $scope.percent = 3;
  $scope.disabled = false;
  $scope.kbUploaded = 0;
  $scope.kbTotal = 0;

  $scope.$upload = $upload;

  $scope.upload = function() {
    $("#upload-file-input").click().change(function(evt) {
      $scope.showProgress = true;
      $scope.percent = 5;

      var fileName = $(this).val().split('\\').pop();
      var file = $('#upload-file-input').get(0).files[0];
      parseAndUploadFile(file, fileName);

    });
  };

  $scope.fileDropped = function ($files) {
    var file = $files[0];
    parseAndUploadFile(file, file.name);
  };

  function parseAndUploadFile(file, fileName) {
    if (!fileName) fileName = 'file';
    var r = new FileReader();
    r.readAsBinaryString(file);
    r.onloadend = function(e){
      var data = e.target.result;
      var postObj = {
        "description": "Mapfolio Uploaded Data - " + fileName,
        "public": true,
        "files": {}
      };
      postObj.files[fileName] = {content: data};
      $scope.percent = 7;

      $scope.$upload.http({
        url: 'https://api.github.com/gists',
        method: "POST",
        data: postObj,
        headers: {'Content-Type': 'application/json'}
      }).progress(function(evt) {
        $scope.percent = parseFloat((evt.loaded / evt.totalSize * 100).toFixed(1));
        $scope.kbUploaded = (evt.loaded / 1024).toFixed(2);
        $scope.kbTotal = (evt.totalSize / 1024).toFixed(2);
      }).success(function (data, status, headers, config) {
        $scope.showProgress = false;
        var filename = data.files[fileName].filename;
        $scope.gistRawUrl = data.files[fileName].raw_url;
        $scope.gistHtmlUrl = data.html_url;
        $scope.disabled = true;
        $scope.showUploadedUrl = true;
        window.gists.append({name: filename, url: $scope.gistRawUrl, htmlUrl: $scope.gistHtmlUrl});
      }).error(function (data, status, headers, config) {
        $scope.showAlert = true;
        $scope.errorMessage = JSON.stringify(data,null,2);
      });

    };
  }

  $scope.addToMap = function () {
    var newUrl = $scope.gistRawUrl || $scope.remoteUrl;
    if (!newUrl) {
      $scope.showAlert = true;
      return;
    }

    $stateParams.layers = $stateParams.layers + ',' + newUrl;
    $('#uploadModal').modal('hide');
    $('#uploadModal').on('hidden.bs.modal', function(e) {
      $state.go('main', $stateParams);
    });

  };

  /**
   * If UploadCtrl gets called twice for some reason, we might
   * have this class hanging around blocking the app. UploadCtrl
   * does get called twice sometimes, because the modal sometimes
   * nudges the map and reinstantiates the modal again via a new
   * route.
   */
  $('.modal-backdrop').remove();

  $('#uploadModal').modal('show');

  $('#uploadModal').on('hidden.bs.modal', function(e) {
    $state.go('main', $stateParams);
  });

});

},{}],"/Users/nick/code/Mapfolio/GeoForce/GeoAngular/app/scripts/controllers/zoom-extent.js":[function(require,module,exports){
/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *        and Ryan Whitley      <rwhitley@spatialdev.com>
 *       on 4/2/14.
 */

module.exports = angular.module('GeoAngular').controller('ZoomExtentCtrl', function($scope, $rootScope, $stateParams, VectorProvider) {
  $scope.params = $stateParams;

  //Initialize the country selector menu by loading the json file and writing out the names into the panel
  $scope.countryList1 = null;

  var vecRes = VectorProvider.createResource("countryextents");
  vecRes.fetch(function(geojson){
    //Sort alphabetically
    geojson.features = geojson.features.sort(function(a,b){
      var textA = a.properties.name_0;
      var textB = b.properties.name_0;
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    });

    $scope.countryList1 = geojson.features;
  });

  //Initialize the ARC Region selector menu by loading the json file and writing out the names into the panel
  $scope.regionList1 = null;

  var vecResRegion = VectorProvider.createResource("arcregionextents");
  vecResRegion.fetch(function(geojson){
    //Sort alphabetically
    geojson.features = geojson.features.sort(function(a,b){
      var textA = a.properties.arc_region;
      var textB = b.properties.arc_region;
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    });

    $scope.regionList1 = geojson.features;
  });

});

},{}],"/Users/nick/code/Mapfolio/GeoForce/GeoAngular/app/scripts/services/Donuts.js":[function(require,module,exports){
/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *   and Rich Gwozdz <rgwozdz@spatialdev.com>
 *       on 5/21/14.
 */


module.exports = angular.module('GeoAngular').factory('Donuts', function () {

  /**
   * Creates a D3 Donut that is located in the details panel.
   */
  function ExpandoDonut(entities, visualizationDictionary, wrapper, labelPosition) {

    var data,
      tmpDataset,
      dataset,
      width,
      height,
      radius,
      color,
      pie,
      arc,
      svg,
      path,
      reportingValueArr,
      reportingValue,
      labelWrapper;

    data = {};

    wrapper = $(wrapper)[0];
    $(wrapper).html('');
    this.wrapper = wrapper;
    this.labelWrapper = null;
    this.svg = null;

    if(typeof labelPosition === 'undefined' || (labelPosition !== 'top' && labelPosition !== 'bottom')) {
      labelPosition = 'top'
    }

    // Loop through the entities
    for (var j = 0, jMax = entities.length; j < jMax; j++) {

      // Split the semi-colon delimited string of reporting values
      if(entities[j]['sector__c'] === null) {
        reportingValueArr = [-9999];
      } else {
        reportingValueArr = entities[j]['sector__c'].toString().split(';');
      }
      // Loop thru the reporting values
      for (var k = 0, kMax = reportingValueArr.length; k < kMax; k++) {

        // this iteration's reporting value
        reportingValue = reportingValueArr[k];

        // If we have already come across this id before (and started a count of its frequency), increment the count
        if(data.hasOwnProperty(reportingValue)) {
          data[reportingValue]['count']++;
        }

        else if (reportingValue === ''){
          // Null report id's come through as an empty string because splitting an empty string, creates an array with one empty string
          //  We're assigning these to a value of -9999

          // Increment the count of -9999
          if(data.hasOwnProperty('-9999')) {
            data['-9999']['count']++;
          }
          else {
            // if this is the first null id, create an object property and start the counter
            data['-9999'] = {
              'count': 1,
              'color': visualizationDictionary[-9999].color,
              'alias': visualizationDictionary[-9999].label
            };
          }
        }
        else {

          var reportingProperties = visualizationDictionary[reportingValue];

          if (!reportingProperties) {
            reportingProperties = {
              color: '#240201',
              alias: reportingValue || 'Unknown'
            }
          }

          // if this is the first time we see this id, create an object property and start the counter
          data[reportingValue] = {
            'count': 1,
            'color': reportingProperties.color,
            'alias': reportingProperties.label
          };
        }

      }

    }

    // prep dataset for D3; need a temp dataset to deal with merging of data counts for 'other' category
    tmpDataset = [];
    dataset = [];

    // Push properties from object holding the category counts/colors categories into an object array
    for (var j in data) {
      tmpDataset.push(data[j]);
    }

    // Create an object that will merge the count from all classification catergories that we've deemed as 'other''
    var mergedOther = {
      'count': 0,
      'color': visualizationDictionary[-9999].color,
      'alias': visualizationDictionary[-9999].label
    };

    // Merge all 'other' objects; we determine which are 'other' by testing to see if its been assigned the 'other' color
    for (var k = 0, kMax = tmpDataset.length; k < kMax; k++) {

      if(tmpDataset[k].color === visualizationDictionary[-9999].color) {
        mergedOther.count = mergedOther.count + tmpDataset[k].count;
      } else {
        dataset.push(tmpDataset[k]);
      }
    }

    // Add the merge objedt to the dataset we will use in donut chart
    dataset.push(mergedOther);


    // Use jQuery to get this cluster markers height and width (set in the CSS)
    width = $(wrapper).width() * 0.65;
    height = $(wrapper).height() * 0.65;

    if(height === 0) {
      height = width;
    }

    radius =  (Math.min(width, height) / 2) - 10;
    labelWrapper = $('<div class="clearfix" style="text-align:center; margin: 10px 0;" ></div>').appendTo(wrapper);
    var labelSwatch = $('<div style="display:inline-block; width: 1em; height: 1em; border-radius: 50%"></div>').appendTo(labelWrapper);
    var labelText = $('<div style="display:inline-block; padding-left: 10px;margin-top: -.4em;vertical-align: middle;"></div>').appendTo(labelWrapper);

    pie = d3.layout.pie()
      .sort(null);

    arc = d3.svg.arc()
      .innerRadius(radius-radius * 0.4)
      .outerRadius(radius);

    var arcOver = d3.svg.arc()
      .outerRadius(radius + 10)
      .innerRadius((radius-radius * 0.4) + 10);

    // Note that we add 'clusterDonut' as a selector
    svg = d3.select(wrapper).append("svg")
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    this.path = svg.selectAll("path")
      .data(function(){
        var dataObjArr,
          dataArr,
          pieData;

        dataObjArr = dataset;

        dataArr = [];

        for (var i = 0, iMax = dataObjArr.length; i < iMax; i++) {
          dataArr.push(dataObjArr[i]['count']);
        }

        pieData = pie(dataArr);

        for (var i = 0, iMax = pieData.length; i < iMax; i++) {
          pieData[i].data = dataObjArr[i];
        }

        return pieData;
      })
      .enter().append("path")
      .attr("fill", function(d, j) {
        return d.data.color;
      })
      .attr("d", arc)
      .attr("cursor","pointer")
      .attr("cursor","pointer")
      .on("mouseover", function(d, i) {

        // clear previously active chart wedge
        d3.select(wrapper).selectAll('path').transition()
          .duration(100)
          .attr("d", arc)
          .attr('opacity',1)
          .attr('stroke-width',1)
          .attr('stroke','rgba(255,255,255,1)');

        // Make the mouseover wedge active
        d3.select(this)
          .transition()
          .duration(100)
          .attr("d", arcOver)
          .attr('opacity',0.8)
          .attr('stroke-width',2)
          .attr('stroke','rgba(255,255,255,1)');

        // Make appropriate label
        $(labelSwatch).css('background-color', d.data.color);
        $(labelText).html(d.data.alias);

        // Show the label if currently hidden
        if($(self.caption).css('display') === 'none') {
          $(labelWrapper).slideToggle();
        }
      })
      //.on("mouseout", function(d,i) {})
      .each(function(d, i) {

        // on load, we want the largest chart wedge to be activew
        if(i !== 0  ){
          return;
        }

        d3.select(this)
          .transition()
          .duration(100)
          .attr("d", arcOver)
          .attr('opacity',0.8)
          .attr('stroke-width',2)
          .attr('stroke','rgba(255,255,255,1)');

        // make the label
        $(labelSwatch).css('background-color', d.data.color);
        $(labelText).html(d.data.alias);

        if($(labelWrapper).css('display') === 'none') {
          $(labelWrapper).slideToggle();
        }
      });

    if(labelPosition === 'top') {
      labelWrapper.prependTo(wrapper);
    } else {
      labelWrapper.appendTo(wrapper);
    }

    this.labelWrapper = labelWrapper;
    this.svg = svg;
  }




  function makeVisualizationDictionary(categoryEntities, opts){

    var options = opts || {};

    options.unassignedColor = options.unassignedColor || '#CCCCCC';
    options.unassignedLabel = options.unassignedLabel || 'Not Assigned';

    var defaultPalette = ["#009400", "#FFC93A", "#FF3849", "#171CE8", "#05FFD9", "#EC8E2F", "#6ED444", "#9556EF", "#2175DE", "#E23B5D", "#1f77b4", "#aec7e8", "#ff7f0e", "#ffbb78", "#2ca02c", "#98df8a", "#d62728", "#ff9896", "#9467bd", "#c5b0d5", "#8c564b", "#c49c94", "#e377c2", "#f7b6d2", "#7f7f7f", "#c7c7c7", "#bcbd22", "#dbdb8d", "#17becf", "#9edae5", "#009400", "#FFC93A", "#FF3849", "#171CE8", "#05FFD9", "#EC8E2F", "#6ED444", "#9556EF", "#2175DE", "#E23B5D", "#1f77b4", "#aec7e8", "#ff7f0e", "#ffbb78", "#2ca02c", "#98df8a", "#d62728", "#ff9896", "#9467bd", "#c5b0d5", "#8c564b", "#c49c94", "#e377c2", "#f7b6d2", "#7f7f7f", "#c7c7c7", "#bcbd22", "#dbdb8d", "#17becf", "#9edae5"];

    var dictionary = {};

    for(var i = 0; i < categoryEntities.length; i++) {

      var color = null;

      if(i < defaultPalette.length) {
        color = defaultPalette[i];
      } else {
        var index = i % defaultPalette.length - 1;
        color = defaultPalette[index];
      }
      dictionary[categoryEntities[i].value] = {
        value: categoryEntities[i].value,
        label: categoryEntities[i].label,
        color: color
      };

    }

    dictionary[-9999] = {
      value: -9999,
      label: options.unassignedLabel,
      color: options.unassignedColor
    };

    return dictionary;
  }


  /**
   * Public functions that are accessible elsewhere in the app.
   * Ex: Donuts.createDetailsDonut(arg1, arg2);
   */
  return {

    /**
     * Creates a D3 donut that goes around a label on the map.
     */
    createLabelDonut: function(sectors, projects, divId) {
      var vizDictionary = makeVisualizationDictionary(sectors);
      var donut = new ExpandoDonut(projects, vizDictionary, divId , 'bottom');
      $(divId).prepend('<div id="sectors-heading" class="heading">Sectors</div>');
      return donut;
    }

  };

});

},{}],"/Users/nick/code/Mapfolio/GeoForce/GeoAngular/app/scripts/services/LayerConfig.js":[function(require,module,exports){
/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *       on 3/18/14.
 */

/**
 * All of the layer names need to be lowercase.
 */
module.exports = angular.module('GeoAngular').service('LayerConfig', function () {

  var configLayers = [
    require('../../../../Config/layers/all.js'),
    require('../../../../Config/layers/basemaps.js'),
    require('../../../../Config/layers/disaster.js'),
    require('../../../../Config/layers/other.js'),
    require('../../../../Config/layers/project.js'),
    require('../../../../Config/layers/projecthealth.js'),
    require('../../../../Config/layers/projectrisk.js')
  ];

  /**
   * Adds the layers specified in the Config/layers directory to this.
   */
  for (var i = 0, len = configLayers.length; i < len; i++) {
    var cfg = configLayers[i];
    for (var key in cfg) {
      this[key] = cfg[key];
    }
  }


  /**
   * bbox
   *
   * This is universal to all layers, and bboxurl fetches the feature itinerary. This is in turn used to find the center
   * feature for the breadcrumbs as well as fetch the features that apply to a BBoxGeoJSON object.
   *
   * @type {{bboxurl: *, centerurl: *}}
   */
  this.bbox = {
    bboxurl: config.chubbsPath('services/custom/custom_operation?name=getidsbyextent&format=json&bbox=:bbox'),
    // used to get the center feature. can get any feature you want by id
    featurl: config.chubbsPath('services/custom/custom_operation?name=getfeaturesbyid&format=geojson&gadm_level=:level&ids=:ids')
  };

  /**
   * BBoxGeoJSON
   *
   * This layer type retrieved features that intersect with the map's bounding box.
   * There must be a backend API that understands this. The features that apply
   * to the bounding box are fetched universally to all layers. These endpoints
   * are specified in this.bbox.
   *
   * The Chubbs Spatial Server fully comprehends this, others do not.
   *
   * @type {{type: string}}
   */
  this.themecount = {
    name: 'Theme Count',
    type: 'bboxgeojson',
    url: config.chubbsPath("services/custom/custom_operation?name=getaggregatedthemefeaturesbyid&format=geojson&theme=:theme&gadm_level=:level&ids=:ids&filters=:filters"),
    properties: {
      "styleFn": function (properties) {
        var style = {
          color: 'white',
          opacity: 1,
          fillOpacity: 0.07,
          weight: 1.5
        };

        if (properties.theme == "disaster") {
          if (properties && properties.iroc_status__c) {
            switch (properties.iroc_status__c.toLowerCase()) {
              case "active":
                style.fillColor = "#cc0033";
                style.fillOpacity = 0.5;
                break;
              case "monitoring":
                style.fillColor = "#cc9900";
                style.fillOpacity = 0.5;
                break;
              case "inactive":
                style.fillColor = "white";
                style.fillOpacity = 0.0;
                break;
            }
          }
        }
        else if (properties.theme == "projectrisk") {
          if (properties && properties.overall_assessment__c) {
            switch (properties.overall_assessment__c.toLowerCase()) {
              case "critical":
                style.fillColor = "red";
                style.fillOpacity = 0.5;
                break;
              case "high":
                style.fillColor = "orange";
                style.fillOpacity = 0.5;
                break;
              case "medium":
                style.fillColor = "yellow";
                style.fillOpacity = 0.5;
                break;
              case "low":
                style.fillColor = "green";
                style.fillOpacity = 0.5;
                break;
            }
          }
        }
        else if (properties.theme == "projecthealth") {
          if (properties && properties.overall_status__c) {
            switch (properties.overall_status__c.toLowerCase()) {
              case "red":
                style.fillColor = "red";
                style.fillOpacity = 0.5;
                break;
              case "yellow":
                style.fillColor = "yellow";
                style.fillOpacity = 0.5;
                break;
              case "green":
                style.fillColor = "green";
                style.fillOpacity = 0.5;
                break;
              case "white":
                style.fillColor = "white";
                style.fillOpacity = 0.5;
                break;
            }
          }
        }
        return style;
      },
      "labelProperty": function (properties) {
        if (properties.theme == "disaster") {
          var color = "";
          var labelColor = "";
          if (properties && properties.iroc_status__c) {
            switch (properties.iroc_status__c.toLowerCase()) {
              case "active":
                color = "#cc0033";
                labelColor = "#fff";
                break;
              case "monitoring":
                color = "#e1bb25";
                labelColor = "#fff";
                break;
              case "inactive":
                color = "#bdbdbd";
                labelColor = "#000";
                break;
            }
          }
          return '<div class="featurelabel-icon-number"' + (color ? ' style="background-color: ' + color + ';color: ' + labelColor + '"' : '') + '><span>' + properties.theme_count + '</span></div>';
        }
        else {
          return '<div class="featurelabel-icon-number"><span>' + properties.theme_count + '</span></div>';
        }
      },
      "map-icon-size": function (properties) {
        //Return an array of 2 items. size of map icon
        return [35,35];
      },
      "detailsUrl": config.chubbsPath('services/custom/custom_operation?name=get:themebyguid&format=json&guids=:guids&gadm_level=:level&filters=:filters'),
      "onSelect": 'fetchFeatureDetails', // the BBoxGeoJSON method to call on select. (toggled on)
      "onDeselect": 'closeDetails', // featurelabel evaluates this string when a feature is toggled off
      "defaultTheme": 'project', // The default theme the layer uses. This is used if there is no theme query param.
      "legend": function (theme) {
        if (theme.toLowerCase() == 'disaster') {
          //disaster
          return '<img src="images/legend_disaster.png" alt="disaster legend" />';
        }
        else if (theme.toLowerCase() == 'projecthealth') {
          //project
          return '<img src="images/legend_projecthealth.png" alt="project health legend" />';
        }
        else if(theme.toLowerCase() == 'projectrisk') {
          return '<img src="images/legend_projectrisk.png" alt="project risk legend" />';
        }
        else if (theme.toLowerCase() == 'project') {
          return '<img src="images/legend_project.png" alt="project legend" />';
        }
      }

    }
  };

  this.theme = {
    name: 'Theme (Badge Off)',
    type: 'bboxgeojson',
    url: config.chubbsPath("services/custom/custom_operation?name=getaggregatedthemefeaturesbyid&format=geojson&theme=:theme&gadm_level=:level&ids=:ids&filters=:filters"),
    properties: {
      "styleFn": function (properties) {
        var style = {
          color: 'white',
          opacity: 1,
          fillOpacity: 0.07,
          weight: 1.5
        };

        if (properties.theme == "disaster") {
          if (properties && properties.iroc_status__c) {
            switch (properties.iroc_status__c.toLowerCase()) {
              case "active":
                style.fillColor = "#cc0033";
                style.fillOpacity = 0.5;
                break;
              case "monitoring":
                style.fillColor = "#cc9900";
                style.fillOpacity = 0.5;
                break;
              case "inactive":
                style.fillColor = "white";
                style.fillOpacity = 0.0;
                break;
            }
          }
        }
        else if (properties.theme == "projectrisk") {
          if (properties && properties.overall_assessment__c) {
            switch (properties.overall_assessment__c.toLowerCase()) {
              case "critical":
                style.fillColor = "red";
                style.fillOpacity = 0.5;
                break;
              case "high":
                style.fillColor = "orange";
                style.fillOpacity = 0.5;
                break;
              case "medium":
                style.fillColor = "yellow";
                style.fillOpacity = 0.5;
                break;
              case "low":
                style.fillColor = "green";
                style.fillOpacity = 0.5;
                break;
            }
          }
        }
        else if (properties.theme == "projecthealth") {
          if (properties && properties.overall_status__c) {
            switch (properties.overall_status__c.toLowerCase()) {
              case "red":
                style.fillColor = "red";
                style.fillOpacity = 0.5;
                break;
              case "yellow":
                style.fillColor = "yellow";
                style.fillOpacity = 0.5;
                break;
              case "green":
                style.fillColor = "green";
                style.fillOpacity = 0.5;
                break;
              case "white":
                style.fillColor = "white";
                style.fillOpacity = 0.5;
                break;
            }
          }
        }
        return style;
      },
      "map-icon-size": function (properties) {
        //Return an array of 2 items. size of map icon
        return [35,35];
      },
      "detailsUrl": config.chubbsPath('services/custom/custom_operation?name=get:themebyguid&format=json&guids=:guids&gadm_level=:level&filters=:filters'),
      "onSelect": 'fetchFeatureDetails', // the BBoxGeoJSON method to call on select. (toggled on)
      "onDeselect": 'closeDetails', // featurelabel evaluates this string when a feature is toggled off
      "defaultTheme": 'project', // The default theme the layer uses. This is used if there is no theme query param.
      "labelProperty": function() {
        return '<div class="featurelabel-icon-number" style="display:none;"></div>';
      },
      "legend": function (theme) {
        if (theme.toLowerCase() == 'disaster') {
          //disaster
          return '<img src="images/legend_disaster.png" alt="disaster legend" />';
        }
        else if (theme.toLowerCase() == 'projecthealth') {
          //project
          return '<img src="images/legend_projecthealth.png" alt="project health legend" />';
        }
        else if(theme.toLowerCase() == 'projectrisk') {
          return '<img src="images/legend_projectrisk.png" alt="project risk legend" />';
        }
        else if (theme.toLowerCase() == 'project') {
          return '<img src="images/legend_project.png" alt="project legend" />';
        }
      }

    }
  };


  this.boundaries = {
    name: 'Boundaries',
    type: 'bboxgeojson',
    theme: 'all',
    url: config.chubbsPath('services/custom/custom_operation?name=getfeaturesbyid&format=geojson&gadm_level=:level&ids=:ids'),
    properties: {
      "stroke": 'white',
      "stroke-width": 1.3,
      "stroke-opacity": 1,
      "fill-opacity": 0,
      "labelProperty": "name",
      "onSelect": 'showFeatureProperties',
      "onDeselect": 'closeDetails',
      "legend": '<svg class="leaflet-zoom-animated" width="48" height="48"><g><path stroke-linejoin="round" stroke-linecap="round" fill-rule="evenodd" stroke="white" stroke-opacity="1" stroke-width="1.3" fill="#555555" fill-opacity="0" class="leaflet-clickable" d="M-1890 -409L-1896 -404L-1899 -404L-1907 -395L-1919 -394L-1921 -404L-1924 -408L-1922 -411L-1899 -421L-1894 -420L-1891 -414L-1888 -413z"></path></g></svg>'
    }

  };

  /**
   * Shows badges with numbers on them. This is for testing and demo purposes.
   * Demonstrates the label w/ badge feature.
   */
  this.fakecount = {
    name: 'Fake Count',
    type: 'bboxgeojson',
    url: config.chubbsPath('services/custom/custom_operation?name=getfeaturesbyid&format=geojson&gadm_level=:level&ids=:ids'),
    properties: {
      "stroke": 'white',
      "stroke-width": 2,
      "stroke-opacity": 1,
      "fill": "green",
      "fill-opacity": 0,
      "labelProperty": function () {
        return Math.floor(Math.random() * (50 - 1 + 1)) + 1;
      }
    }

  };

  //GADM country extents, level 0
  this.countryextents = {
    type: 'geojson',
      theme: 'other',
      url: 'data/vw_gadm_raw_geom.geojson'
  };

  //ARC Region extents
  this.arcregionextents = {
    type: 'geojson',
      theme: 'other',
      url: 'data/arc_region_extents.geojson'
  };
  
  /**
   * For layers, we try and get an alias for everything, so if it's a URL that
   * does not match, we just want to return itself so we can fetch that given url.
   *
   * @param name
   * @returns {*}
   */
  this.find = function (name) {
    var val = this[name] || this[name.toLowerCase()];
    if (typeof val !== 'undefined' && val !== null) {
      return val;
    }
    if (name.slice(0, 4).toLowerCase() === 'http') {
      return name;
    }
    console.error('COULD NOT FIND ALIAS: ' + name);
    return null;
  };

});

},{"../../../../Config/layers/all.js":"/Users/nick/code/Mapfolio/GeoForce/Config/layers/all.js","../../../../Config/layers/basemaps.js":"/Users/nick/code/Mapfolio/GeoForce/Config/layers/basemaps.js","../../../../Config/layers/disaster.js":"/Users/nick/code/Mapfolio/GeoForce/Config/layers/disaster.js","../../../../Config/layers/other.js":"/Users/nick/code/Mapfolio/GeoForce/Config/layers/other.js","../../../../Config/layers/project.js":"/Users/nick/code/Mapfolio/GeoForce/Config/layers/project.js","../../../../Config/layers/projecthealth.js":"/Users/nick/code/Mapfolio/GeoForce/Config/layers/projecthealth.js","../../../../Config/layers/projectrisk.js":"/Users/nick/code/Mapfolio/GeoForce/Config/layers/projectrisk.js"}],"/Users/nick/code/Mapfolio/GeoForce/GeoAngular/app/scripts/services/StoriesConfig.js":[function(require,module,exports){
/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *       on 3/18/14.
 */

/**
 * Config File for Stories Panel
 */
module.exports = angular.module('GeoAngular').service('StoriesConfig', function () {

  /**
   * Stories Panel List
   *
   * List of stories that get shown in the Stories Panel. Edit this to add or remove
   * stories that the user will see as choices. All stories, including ones not in this
   * list, can still be manually referenced in the url. This is just for the User Interface.
   */
  this.stories = [
    'haiyan',
    'ebola'
  ];


  /**
   * Stories
   *
   * All story aliases can be referred to in the url. The corresponding
   * path to the thumbnail in the Stories Panel should be:
   *    images/{aliasName}.jpg
   *
   */

  this.haiyan = {
    url: '/mapfolio/index.html#/map@12.768946,122.486572,6(ortho,themecount,gdacs)?theme=disaster&details-panel=open&sf_id=a0Ed000000qZntUEAS',
    name: 'Typhoon Haiyan Response',
    date: '2013-10-12',
    thumbnail: 'images/stories/haiyan.png',
    keywords: 'Typhoon, Disaster Response, Haiyan, Disaster, AMEE'
  };
  this.ebola = {
    url: '/mapfolio/index.html#/map@15.072124,-3.460693,6(ortho,themecount,gdacs)?theme=disaster',
    name: 'Ebola Outbreak Resopnse',
    date: '2014-15-5',
    thumbnail: 'images/stories/ebola.png',
    keywords: 'Ebola, Disaster Response, Guinea, Disease, Mali, Africa'


  };

  /**
   * For layers, we try and get an alias for everything, so if it's a URL that
   * does not match, we just want to return itself so we can fetch that given url.
   *
   * @param name
   * @returns {*}
   */
  this.find = function(name) {
    var val = this[name] || this[name.toLowerCase()];
    if (typeof val !== 'undefined' && val !== null) {
      return val;
    }
    if (name.slice(0, 4).toLowerCase() === 'http') {
      return name;
    }
    console.error('COULD NOT FIND ALIAS: ' + name);
    return null;
  };

});

},{}],"/Users/nick/code/Mapfolio/GeoForce/GeoAngular/app/scripts/services/Vector/BBoxGeoJSON.js":[function(require,module,exports){
/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *       on 6/3/14.
 */

var FeatureSet = require('../../../lib/featurelabel/FeatureSet');
var Resource = require('./resource');
var bboxUrl = require('./vector').bboxUrl;
var bboxResources = require('./vector').bboxResources;

var L = require('./vector').L;
var angular = require('./vector').angular;
var $rootScope = require('./vector').$rootScope;
var $http = require('./vector').$http;

module.exports = BBoxGeoJSON;


function BBoxGeoJSON(config) {
  Resource.call(this, config);
  if(config.bboxurl) {
    this._bboxurl = bboxUrl = config.bboxurl;
  }
  this._features = {};
  this._featureLayersByLevel = {};
  this._allFeatureLayers = {};
  if (config.properties && config.properties.labelProperty) {
    this._featureSet = new FeatureSet();
  }
  this._defaultTheme = config.defaultTheme || 'project';

  if (config.detailsUrl) {
    this._detailsUrl = config.detailsUrl;
  }

  bboxResources.push(this);
  this._resIdx = bboxResources.length - 1;
}

BBoxGeoJSON.prototype = Object.create(Resource.prototype);
BBoxGeoJSON.prototype.constructor = BBoxGeoJSON;


BBoxGeoJSON.prototype.destroy = function() {
  bboxResources.splice(this._resIdx,1);
};


BBoxGeoJSON.prototype.getLayer = function () {
  var layer = Resource.prototype.getLayer.call(this);
  layer.destroyResource = this.destroy; // gives the map to destroy the bboxgeojson vector provider resource
  return layer;
};


BBoxGeoJSON.prototype._getFeatures = function (featObj) {
  var self = this;
  var theme = $rootScope.$stateParams.theme || self._defaultTheme;
  var filters = 'null';
  if ($rootScope.$stateParams.filters) {
    filters = $rootScope.$stateParams.filters;
  }
  var url = this._url.replace(':theme', theme)
    .replace(':level', featObj.level)
    .replace(':ids', featObj.guid)
    .replace(':filters', filters);
  var proxyPath = config.proxyPath(url);

  // a cache makes sense if the bboxgeojson object is reinstantiated
  $http.get(url, {cache: true}).success(function (geojson, status) {
    processFeatures(self, featObj, geojson);
  }).error(function(err) {
    $http.get(proxyPath).success(function (geojson, status) {
      processFeatures(self, featObj, geojson);
    }).error(function (err) {
      console.error('Unable to getFeatures: ' + url);
    });
  });
};

function processFeatures(self, featObj, geojson) {
  if (geojson.error) {
    console.error('Unable to fetch feature: ' + geojson.error);
    return;
  }

  if (!geojson.features || geojson.features.length < 1) {
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
    // LayerConfig will state the name of the BBoxGeoJSON method to be called on click.
    if (key === 'onSelect' || key === 'onDeselect') {
      var fnName = self._config.properties[key];
      feat.properties[key] = self[fnName];
    }
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
  L.stamp(featLayer);
  featLayer.feature = L.GeoJSON.asFeature(featObj);
  featLayer.defaultOptions = featLayer.options;
  self._geojsonLayer.resetStyle(featLayer);
  if (options.onEachFeature) {
    options.onEachFeature(featObj, featLayer);
  }

  addLayer(self, featLayer);
}


/**
 * Should only be used by BBoxLayer objects.
 * Consider this a private method.
 *
 * @param self
 * @param featLayer
 */
function addLayer(self, featLayer) {
  if (self._featureSet) {
    self._featureSet.addFeature(featLayer, self._geojsonLayer);
  }
  self._geojsonLayer.addLayer(featLayer);

  var props = featLayer.feature.properties;
  var level = props.level;
  if (!self._featureLayersByLevel[level]) {
    self._featureLayersByLevel[level] = [];
  }
  self._featureLayersByLevel[level].push(featLayer);
  self._allFeatureLayers[props.guid] = featLayer;
}


BBoxGeoJSON.prototype.processFeatureItinerary = function (featItinerary) {
  var self = this;
  var activeLevels = {};
  self._activeLevels = activeLevels;
  self._featItineraryHash = {};
  for (var i=0, len = featItinerary.length; i < len; ++i) {
    var o = featItinerary[i];
    activeLevels[o.level] = true;
    self._featItineraryHash[o.guid] = o;
    var guid = o.guid || o.id;
    if (!self._features[guid]) {
      // adding feature to features hash (all features ever)
      self._features[guid] = o;
      // getting the features (including basic, simplified geometry)
      self._getFeatures(o);
    } else {
      // if we already have a layer and it is not on the map but should be there, add it to the geojson layer
      var l = self._allFeatureLayers[guid];
      if (l) {
        addLayer(self, l);
      }

    }
  }
  self._removeInactiveLayers(self);
  removeInactiveLabels(self);
};


/**
 * This is called by the onSelect event for the featurelabels.
 * @param featureLayer
 */
BBoxGeoJSON.prototype.fetchFeatureDetails = function(featureLayer) {
  var properties = featureLayer.feature.properties;
  var detailsUrl = properties.detailsUrl;
  if (!detailsUrl) {
    console.error('We need a detailsUrl to fetchFeatureDetails');
    return;
  }

  var theme = $rootScope.$stateParams.theme || properties.defaultTheme || 'project';
  var themeName = $rootScope.themeNameHash[theme];
  if (typeof properties.level === 'undefined' || properties.level === null) {
    console.error('we need a level.');
  }

  var filters = 'null';
  if ($rootScope.$stateParams.filters) {
    filters = $rootScope.$stateParams.filters;
  }

  detailsUrl = detailsUrl.replace(':theme', theme)
    .replace(':guids', properties.guid)
    .replace(':level', properties.level)
    .replace(':filters', filters);

  $http.get(detailsUrl, {cache: true}).success(function (details) {

    featureLayer.feature.properties.salesforce = {};
    featureLayer.feature.properties.salesforce[themeName] = details;
    $rootScope.$broadcast('details', featureLayer);

  }).error(function(err){
    console.error(JSON.stringify(err));
  });

};


BBoxGeoJSON.prototype.showFeatureProperties = function(featureLayer) {
  $rootScope.$broadcast('details', featureLayer);
};


BBoxGeoJSON.prototype.closeDetails = function () {
  $rootScope.closeParam('details-panel');
};


function removeInactiveLabels(self) {
  var allFeatureLayers = self._allFeatureLayers;
  var featureItinerary = self._featItineraryHash;
  for (var key in allFeatureLayers) {
    if (!featureItinerary[key]) {
      var featureLayer = allFeatureLayers[key];
      if ( featureLayer.geojsonLayer && featureLayer.label) {
        console.log("REMOVING: " + featureLayer.feature.properties.name);
        window.map.removeLayer(featureLayer.label); // NH FIXME
        featureLayer.label = null;
      }

      if ( featureLayer.geojsonLayer && featureLayer.geojsonLayer.label) {
        console.log("REMOVING: " + featureLayer.feature.properties.name);
        window.map.removeLayer(featureLayer.geojsonLayer.label); // NH FIXME
        featureLayer.geojsonLayer.label = null;
      }
    }
  }
}

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

        console.log('Removed Layer: ' + layer.feature.properties.name);
      }
      delete featureLayersByLevel[level];
    }
  }
};

},{"../../../lib/featurelabel/FeatureSet":"/Users/nick/code/Mapfolio/GeoForce/GeoAngular/app/lib/featurelabel/FeatureSet.js","./resource":"/Users/nick/code/Mapfolio/GeoForce/GeoAngular/app/scripts/services/Vector/resource.js","./vector":"/Users/nick/code/Mapfolio/GeoForce/GeoAngular/app/scripts/services/Vector/vector.js"}],"/Users/nick/code/Mapfolio/GeoForce/GeoAngular/app/scripts/services/Vector/GeoJSON.js":[function(require,module,exports){
/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *       on 6/3/14.
 */

var Resource = require('./resource');
var $rootScope = require('./vector').$rootScope;

module.exports = GeoJSON;

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
      if ( data.type === 'FeatureCollection') {
        var feats = data.features;
        for (var i = 0, len = feats.length; i < len; ++i) {
          var feat = feats[i];
          if (!feat.properties) feat.properties = {};
          angular.extend(feat.properties, self._config.properties);
        }
      } else { // a feature or a geometry type
        if (!data.properties) data.properties = {};
        angular.extend(data.properties, self._config.properties);
      }
    }

    if (typeof cb === 'function') cb(self._geojson);
  });
};

GeoJSON.prototype.getLayer = function() {
  if (this._geojsonLayer) return this._geojsonLayer;
  var layer =  Resource.prototype.getLayer.call(this);
  this.fetch(function(geojson){
    layer.addData(geojson);
    layer.eachLayer(function (l) {
      l.on('click', function () {
        $rootScope.$broadcast('details', l);
      });
    });
  });
  return layer;
};

},{"./resource":"/Users/nick/code/Mapfolio/GeoForce/GeoAngular/app/scripts/services/Vector/resource.js","./vector":"/Users/nick/code/Mapfolio/GeoForce/GeoAngular/app/scripts/services/Vector/vector.js"}],"/Users/nick/code/Mapfolio/GeoForce/GeoAngular/app/scripts/services/Vector/KML.js":[function(require,module,exports){
/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *       on 6/3/14.
 */

var Resource = require('./resource');
var $rootScope = require('./vector').$rootScope;
var toGeoJSON = require('./vector').toGeoJSON;
var $ = require('./vector').$;

module.exports = KML;

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
      if (typeof self._geojson.properties === 'undefined') {
        self._geojson.properties = {};
      }
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
    layer.eachLayer(function (l) {
      l.on('click', function () {
        $rootScope.$broadcast('details', l);
      });
    });
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

},{"./resource":"/Users/nick/code/Mapfolio/GeoForce/GeoAngular/app/scripts/services/Vector/resource.js","./vector":"/Users/nick/code/Mapfolio/GeoForce/GeoAngular/app/scripts/services/Vector/vector.js"}],"/Users/nick/code/Mapfolio/GeoForce/GeoAngular/app/scripts/services/Vector/Resource.js":[function(require,module,exports){
/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *       on 6/3/14.
 */

var resources = require('./vector').resources;
var $http = require('./vector').$http;

module.exports = Resource;

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
  var proxyPath = config.proxyPath(this._url);
  $http.get(this._url, {cache: true}).success(function (data, status) {
    cb(data);
  }).error(function() {
    // trying proxy
    $http.get(proxyPath, {cache: true}).success(function (data, status) {
      cb(data);
    }).error(function() {
      console.error("Unable to fetch from: " + proxyPath);
    });
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
    style: function(feature) {
      if (typeof feature.properties.styleFn === 'function') {
        return feature.properties.styleFn(feature.properties);
      }
      return L.mapbox.simplestyle.style(feature);
    },
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

},{"./vector":"/Users/nick/code/Mapfolio/GeoForce/GeoAngular/app/scripts/services/Vector/vector.js"}],"/Users/nick/code/Mapfolio/GeoForce/GeoAngular/app/scripts/services/Vector/VectorProvider.js":[function(require,module,exports){
/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *       on 3/19/14.
 */

module.exports = angular.module('GeoAngular').factory('VectorProvider', function ($rootScope, $location, $http, LayerConfig) {

  var vector = require('./vector');
  vector.setInjectors($rootScope, $location, $http, LayerConfig);


  /**
   * make the default BBoxURL able to be overridden if specified by the LayerConfig Object.
   * @param config
   * @constructor
   */
  vector.bboxUrl = LayerConfig.bbox.bboxurl;

  var Resource = require('./Resource');
  var GeoJSON = require('./GeoJSON');
  var BBoxGeoJSON = require('./BBoxGeoJSON');
  var KML = require('./KML');
  var CSV = require('./csv');


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
        console.error("Unable to fetchFeatureItinerary: " + thisUrl);
      });
    });
  }

  function processFeatureItinerary(featItinerary) {
    console.log("FEATURE ITINERARY:");
    for (var j = 0, len = featItinerary.length; j < len; j++) {
      var feat = featItinerary[j];
      if ( feat.iscenter ) {
        vector.centerLevel = feat.level || 0;
      }
    }
    console.log(['featItinerary',featItinerary]);

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
     * Provides the ability to override the gadm level being shown by BBoxGeoJSON
     * features on the map. You may specify -1 to 5. No args or anything else
     * switches back on smart gadm (automatically choosing the level based on bbox).
     *
     * @param level
     */
    setGadmLevel: function(levelStr) {
      var level = parseInt(levelStr);
      vector.bboxUrl = vector.bboxUrl.replace(/&gadm_level=-?\d/,'');
      if (level >= -1 && level <= 5) {
        vector.bboxUrl += '&gadm_level=' + level;
      }
      console.log('bboxUrl: ' + vector.bboxUrl);
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


},{"./BBoxGeoJSON":"/Users/nick/code/Mapfolio/GeoForce/GeoAngular/app/scripts/services/Vector/BBoxGeoJSON.js","./GeoJSON":"/Users/nick/code/Mapfolio/GeoForce/GeoAngular/app/scripts/services/Vector/GeoJSON.js","./KML":"/Users/nick/code/Mapfolio/GeoForce/GeoAngular/app/scripts/services/Vector/KML.js","./Resource":"/Users/nick/code/Mapfolio/GeoForce/GeoAngular/app/scripts/services/Vector/Resource.js","./csv":"/Users/nick/code/Mapfolio/GeoForce/GeoAngular/app/scripts/services/Vector/csv.js","./vector":"/Users/nick/code/Mapfolio/GeoForce/GeoAngular/app/scripts/services/Vector/vector.js"}],"/Users/nick/code/Mapfolio/GeoForce/GeoAngular/app/scripts/services/Vector/csv.js":[function(require,module,exports){
/**
 * Created by Ryan Whitley <rwhitley@spatialdev.com>
 *       on 6/3/14.
 */

var Resource = require('./resource');
var $rootScope = require('./vector').$rootScope;
var $ = require('./vector').$;

module.exports = CSV;

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
  var self = this;
  if (file.data) {
    var decoded = this.bytesToString(self.Base64.decode(file.data));
    self.processCsvData(decoded);
  } else {
    var reader = new FileReader();
    reader.onload = function () {
      console.log("Finished reading CSV data");
      self.processCsvData(reader.result, layer);
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

},{"./resource":"/Users/nick/code/Mapfolio/GeoForce/GeoAngular/app/scripts/services/Vector/resource.js","./vector":"/Users/nick/code/Mapfolio/GeoForce/GeoAngular/app/scripts/services/Vector/vector.js"}],"/Users/nick/code/Mapfolio/GeoForce/GeoAngular/app/scripts/services/Vector/resource.js":[function(require,module,exports){
/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *       on 6/3/14.
 */

var resources = require('./vector').resources;
var $http = require('./vector').$http;

module.exports = Resource;

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
  var proxyPath = config.proxyPath(this._url);
  $http.get(this._url, {cache: true}).success(function (data, status) {
    cb(data);
  }).error(function() {
    // trying proxy
    $http.get(proxyPath, {cache: true}).success(function (data, status) {
      cb(data);
    }).error(function() {
      console.error("Unable to fetch from: " + proxyPath);
    });
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
    style: function(feature) {
      if (typeof feature.properties.styleFn === 'function') {
        return feature.properties.styleFn(feature.properties);
      }
      return L.mapbox.simplestyle.style(feature);
    },
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

},{"./vector":"/Users/nick/code/Mapfolio/GeoForce/GeoAngular/app/scripts/services/Vector/vector.js"}],"/Users/nick/code/Mapfolio/GeoForce/GeoAngular/app/scripts/services/Vector/vector.js":[function(require,module,exports){
/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *       on 6/3/14.
 */

var vector = {};
module.exports = vector;

vector.setInjectors = function ($rootScope, $location, $http, LayerConfig) {
  vector.$rootScope = $rootScope;
  vector.$location = $location;
  vector.$http = $http;
  vector.LayerConfig = LayerConfig;
};

vector.angular = angular;
vector.L = L;
vector.$ = $;
vector.toGeoJSON = toGeoJSON;


/**
 * This is updated by updateBBox. It is then used to query all
 * VectorProviders that use a bounding box to get additional
 * features.
 *
 * @type {string}
 */
var bbox = vector.bbox = null;

/**
 * Every resource that has been instantiated.
 * @type {Array}
 */
var resources = vector.resources = [];
debug.resources = resources;

/**
 * Every resource with a bounding box fetching mechanism.
 * @type {Array}
 */
var bboxResources = vector.bboxResources = [];
debug.bboxResources = bboxResources;

var bboxUrl = vector.bboxUrl = '';

var centerLevel = vector.centerLevel = 0;




},{}]},{},["/Users/nick/code/Mapfolio/GeoForce/GeoAngular/app/scripts/app.js"])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvbmljay9jb2RlL01hcGZvbGlvL0dlb0ZvcmNlL0NvbmZpZy9sYXllcnMvYWxsLmpzIiwiL1VzZXJzL25pY2svY29kZS9NYXBmb2xpby9HZW9Gb3JjZS9Db25maWcvbGF5ZXJzL2Jhc2VtYXBzLmpzIiwiL1VzZXJzL25pY2svY29kZS9NYXBmb2xpby9HZW9Gb3JjZS9Db25maWcvbGF5ZXJzL2Rpc2FzdGVyLmpzIiwiL1VzZXJzL25pY2svY29kZS9NYXBmb2xpby9HZW9Gb3JjZS9Db25maWcvbGF5ZXJzL290aGVyLmpzIiwiL1VzZXJzL25pY2svY29kZS9NYXBmb2xpby9HZW9Gb3JjZS9Db25maWcvbGF5ZXJzL3Byb2plY3QuanMiLCIvVXNlcnMvbmljay9jb2RlL01hcGZvbGlvL0dlb0ZvcmNlL0NvbmZpZy9sYXllcnMvcHJvamVjdGhlYWx0aC5qcyIsIi9Vc2Vycy9uaWNrL2NvZGUvTWFwZm9saW8vR2VvRm9yY2UvQ29uZmlnL2xheWVycy9wcm9qZWN0cmlzay5qcyIsIi9Vc2Vycy9uaWNrL2NvZGUvTWFwZm9saW8vR2VvRm9yY2UvR2VvQW5ndWxhci9hcHAvbGliL2ZlYXR1cmVsYWJlbC9GZWF0dXJlU2V0LmpzIiwiL1VzZXJzL25pY2svY29kZS9NYXBmb2xpby9HZW9Gb3JjZS9HZW9Bbmd1bGFyL2FwcC9saWIvZmVhdHVyZWxhYmVsL0xhYmVsLmpzIiwiL1VzZXJzL25pY2svY29kZS9NYXBmb2xpby9HZW9Gb3JjZS9HZW9Bbmd1bGFyL2FwcC9saWIvZmVhdHVyZWxhYmVsL2ZlYXR1cmVsYWJlbC5qcyIsIi9Vc2Vycy9uaWNrL2NvZGUvTWFwZm9saW8vR2VvRm9yY2UvR2VvQW5ndWxhci9hcHAvbGliL2ZlYXR1cmVsYWJlbC9sZWFmbGV0LXBhdGNoLmpzIiwiL1VzZXJzL25pY2svY29kZS9NYXBmb2xpby9HZW9Gb3JjZS9HZW9Bbmd1bGFyL2FwcC9zY3JpcHRzL2FwcC5qcyIsIi9Vc2Vycy9uaWNrL2NvZGUvTWFwZm9saW8vR2VvRm9yY2UvR2VvQW5ndWxhci9hcHAvc2NyaXB0cy9jb250cm9sbGVycy9iYXNlbWFwcy5qcyIsIi9Vc2Vycy9uaWNrL2NvZGUvTWFwZm9saW8vR2VvRm9yY2UvR2VvQW5ndWxhci9hcHAvc2NyaXB0cy9jb250cm9sbGVycy9icmVhZGNydW1icy5qcyIsIi9Vc2Vycy9uaWNrL2NvZGUvTWFwZm9saW8vR2VvRm9yY2UvR2VvQW5ndWxhci9hcHAvc2NyaXB0cy9jb250cm9sbGVycy9kZXRhaWxzLmpzIiwiL1VzZXJzL25pY2svY29kZS9NYXBmb2xpby9HZW9Gb3JjZS9HZW9Bbmd1bGFyL2FwcC9zY3JpcHRzL2NvbnRyb2xsZXJzL2V4cG9ydC5qcyIsIi9Vc2Vycy9uaWNrL2NvZGUvTWFwZm9saW8vR2VvRm9yY2UvR2VvQW5ndWxhci9hcHAvc2NyaXB0cy9jb250cm9sbGVycy9maWx0ZXJzLmpzIiwiL1VzZXJzL25pY2svY29kZS9NYXBmb2xpby9HZW9Gb3JjZS9HZW9Bbmd1bGFyL2FwcC9zY3JpcHRzL2NvbnRyb2xsZXJzL2luZm8uanMiLCIvVXNlcnMvbmljay9jb2RlL01hcGZvbGlvL0dlb0ZvcmNlL0dlb0FuZ3VsYXIvYXBwL3NjcmlwdHMvY29udHJvbGxlcnMvbGF5ZXJzLmpzIiwiL1VzZXJzL25pY2svY29kZS9NYXBmb2xpby9HZW9Gb3JjZS9HZW9Bbmd1bGFyL2FwcC9zY3JpcHRzL2NvbnRyb2xsZXJzL2xlZ2VuZC5qcyIsIi9Vc2Vycy9uaWNrL2NvZGUvTWFwZm9saW8vR2VvRm9yY2UvR2VvQW5ndWxhci9hcHAvc2NyaXB0cy9jb250cm9sbGVycy9tYWluLmpzIiwiL1VzZXJzL25pY2svY29kZS9NYXBmb2xpby9HZW9Gb3JjZS9HZW9Bbmd1bGFyL2FwcC9zY3JpcHRzL2NvbnRyb2xsZXJzL21hcC5qcyIsIi9Vc2Vycy9uaWNrL2NvZGUvTWFwZm9saW8vR2VvRm9yY2UvR2VvQW5ndWxhci9hcHAvc2NyaXB0cy9jb250cm9sbGVycy9uYXZiYXIuanMiLCIvVXNlcnMvbmljay9jb2RlL01hcGZvbGlvL0dlb0ZvcmNlL0dlb0FuZ3VsYXIvYXBwL3NjcmlwdHMvY29udHJvbGxlcnMvc2VhcmNoLmpzIiwiL1VzZXJzL25pY2svY29kZS9NYXBmb2xpby9HZW9Gb3JjZS9HZW9Bbmd1bGFyL2FwcC9zY3JpcHRzL2NvbnRyb2xsZXJzL3NpZGUtdmlldy5qcyIsIi9Vc2Vycy9uaWNrL2NvZGUvTWFwZm9saW8vR2VvRm9yY2UvR2VvQW5ndWxhci9hcHAvc2NyaXB0cy9jb250cm9sbGVycy9zdG9yaWVzLmpzIiwiL1VzZXJzL25pY2svY29kZS9NYXBmb2xpby9HZW9Gb3JjZS9HZW9Bbmd1bGFyL2FwcC9zY3JpcHRzL2NvbnRyb2xsZXJzL3RoZW1lLmpzIiwiL1VzZXJzL25pY2svY29kZS9NYXBmb2xpby9HZW9Gb3JjZS9HZW9Bbmd1bGFyL2FwcC9zY3JpcHRzL2NvbnRyb2xsZXJzL3VwbG9hZC5qcyIsIi9Vc2Vycy9uaWNrL2NvZGUvTWFwZm9saW8vR2VvRm9yY2UvR2VvQW5ndWxhci9hcHAvc2NyaXB0cy9jb250cm9sbGVycy96b29tLWV4dGVudC5qcyIsIi9Vc2Vycy9uaWNrL2NvZGUvTWFwZm9saW8vR2VvRm9yY2UvR2VvQW5ndWxhci9hcHAvc2NyaXB0cy9zZXJ2aWNlcy9Eb251dHMuanMiLCIvVXNlcnMvbmljay9jb2RlL01hcGZvbGlvL0dlb0ZvcmNlL0dlb0FuZ3VsYXIvYXBwL3NjcmlwdHMvc2VydmljZXMvTGF5ZXJDb25maWcuanMiLCIvVXNlcnMvbmljay9jb2RlL01hcGZvbGlvL0dlb0ZvcmNlL0dlb0FuZ3VsYXIvYXBwL3NjcmlwdHMvc2VydmljZXMvU3Rvcmllc0NvbmZpZy5qcyIsIi9Vc2Vycy9uaWNrL2NvZGUvTWFwZm9saW8vR2VvRm9yY2UvR2VvQW5ndWxhci9hcHAvc2NyaXB0cy9zZXJ2aWNlcy9WZWN0b3IvQkJveEdlb0pTT04uanMiLCIvVXNlcnMvbmljay9jb2RlL01hcGZvbGlvL0dlb0ZvcmNlL0dlb0FuZ3VsYXIvYXBwL3NjcmlwdHMvc2VydmljZXMvVmVjdG9yL0dlb0pTT04uanMiLCIvVXNlcnMvbmljay9jb2RlL01hcGZvbGlvL0dlb0ZvcmNlL0dlb0FuZ3VsYXIvYXBwL3NjcmlwdHMvc2VydmljZXMvVmVjdG9yL0tNTC5qcyIsIi9Vc2Vycy9uaWNrL2NvZGUvTWFwZm9saW8vR2VvRm9yY2UvR2VvQW5ndWxhci9hcHAvc2NyaXB0cy9zZXJ2aWNlcy9WZWN0b3IvUmVzb3VyY2UuanMiLCIvVXNlcnMvbmljay9jb2RlL01hcGZvbGlvL0dlb0ZvcmNlL0dlb0FuZ3VsYXIvYXBwL3NjcmlwdHMvc2VydmljZXMvVmVjdG9yL1ZlY3RvclByb3ZpZGVyLmpzIiwiL1VzZXJzL25pY2svY29kZS9NYXBmb2xpby9HZW9Gb3JjZS9HZW9Bbmd1bGFyL2FwcC9zY3JpcHRzL3NlcnZpY2VzL1ZlY3Rvci9jc3YuanMiLCIvVXNlcnMvbmljay9jb2RlL01hcGZvbGlvL0dlb0ZvcmNlL0dlb0FuZ3VsYXIvYXBwL3NjcmlwdHMvc2VydmljZXMvVmVjdG9yL3Jlc291cmNlLmpzIiwiL1VzZXJzL25pY2svY29kZS9NYXBmb2xpby9HZW9Gb3JjZS9HZW9Bbmd1bGFyL2FwcC9zY3JpcHRzL3NlcnZpY2VzL1ZlY3Rvci92ZWN0b3IuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0WUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqZ0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeFJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0UkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbFBBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbFhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDck5BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5U0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvKipcbiAqIENyZWF0ZWQgYnkgTmljaG9sYXMgSGFsbGFoYW4gPG5oYWxsYWhhbkBzcGF0aWFsZGV2LmNvbT5cbiAqICAgICAgIG9uIDgvNi8xNC5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblxuXG59O1xuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IE5pY2hvbGFzIEhhbGxhaGFuIDxuaGFsbGFoYW5Ac3BhdGlhbGRldi5jb20+XG4gKiAgICAgICBvbiA4LzYvMTQuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cbiAgLyoqXG4gICAqIEJhc2VtYXBzIFBhbmVsIExpc3RcbiAgICpcbiAgICogTGlzdCBvZiBiYXNlbWFwcyB0aGF0IGdldCBzaG93biBpbiB0aGUgQmFzZW1hcHMgUGFuZWwuIEVkaXQgdGhpcyB0byBhZGQgb3IgcmVtb3ZlXG4gICAqIGJhc2VtYXBzIHRoYXQgdGhlIHVzZXIgd2lsbCBzZWUgYXMgY2hvaWNlcy4gQWxsIGJhc2VtYXBzLCBpbmNsdWRpbmcgb25lcyBub3QgaW4gdGhpc1xuICAgKiBsaXN0LCBjYW4gc3RpbGwgYmUgbWFudWFsbHkgcmVmZXJlbmNlZCBpbiB0aGUgdXJsLiBUaGlzIGlzIGp1c3QgZm9yIHRoZSBVc2VyIEludGVyZmFjZS5cbiAgICovXG4gIGJhc2VtYXBzOiBbXG4gICAgJ29zbWhvdCcsXG4gICAgJ29zbScsXG4gICAgJ3NhdGVsbGl0ZScsXG4gICAgJ29ydGhvJyxcbiAgICAndG9uZXInLFxuICAgICdkYXJrJyxcbiAgICAnZ2l0aHViJyxcbiAgICAnbW96aWxsYScsXG4gICAgJ2dyZWVuJyxcbiAgICAnb3NtY3ljbGUnLFxuICAgICdvc210cmFuc3BvcnQnLFxuICAgICdvc21tYXBxdWVzdCcsXG4gICAgJ25hdGdlbycsXG4gICAgJ3VzZ3N0b3BvJyxcbiAgICAnZXNyaXRvcG8nLFxuICAgICdvY2VhbicsXG4gICAgJ2xpZ2h0Z3JheScsXG4gICAgJ3dhdGVyY29sb3InXG4gIF0sXG5cblxuICAvKipcbiAgICogQmFzZW1hcHNcbiAgICpcbiAgICogQWxsIGJhc2VtYXAgYWxpYXNlcyB0aGF0IGNhbiBiZSByZWZlcnJlZCB0byBpbiB0aGUgdXJsLiBUaGUgY29ycmVzcG9uZGluZ1xuICAgKiBwYXRoIHRvIHRoZSB0aHVtYm5haWwgaW4gdGhlIEJhc2VtYXBzIFBhbmVsIHNob3VsZCBiZTpcbiAgICogICAgaW1hZ2VzL3thbGlhc05hbWV9LmpwZ1xuICAgKlxuICAgKi9cblxuICBvc21ob3Q6IHtcbiAgICB1cmw6ICdodHRwOi8ve3N9LnRpbGUub3BlbnN0cmVldG1hcC5mci9ob3Qve3p9L3t4fS97eX0ucG5nJyxcbiAgICBuYW1lOiAnSHVtYW5pdGFyaWFuIE9wZW5TdHJlZXRNYXAnLFxuICAgIHR5cGU6ICdiYXNlbWFwJ1xuICB9LFxuXG4gIHJlZGNyb3NzOiB7XG4gICAgdXJsOiAnaHR0cHM6Ly97c30udGlsZXMubWFwYm94LmNvbS92My9hbWVyaWNhbnJlZGNyb3NzLmhjamkyMmRlL3t6fS97eH0ve3l9LnBuZycsXG4gICAgbmFtZTogJ1JlZCBDcm9zcycsXG4gICAgdHlwZTogJ2Jhc2VtYXAnXG4gIH0sXG5cbiAgc2F0ZWxsaXRlOiB7XG4gICAgdXJsOiAnaHR0cHM6Ly97c30udGlsZXMubWFwYm94LmNvbS92My9leGFtcGxlcy5tYXAtcWZ5cng1cjgve3p9L3t4fS97eX0ucG5nJyxcbiAgICBuYW1lOiAnTWFwYm94IFNhdGVsbGl0ZScsXG4gICAgdHlwZTogJ2Jhc2VtYXAnXG4gIH0sXG5cbiAgbW96aWxsYToge1xuICAgIHVybDogJ2h0dHA6Ly97c30udGlsZXMubWFwYm94LmNvbS92My9tb3ppbGxhLXdlYnByb2QuZTkxZWY4YjMve3p9L3t4fS97eX0ucG5nJyxcbiAgICBuYW1lOiAnTW96aWxsYScsXG4gICAgdHlwZTogJ2Jhc2VtYXAnXG4gIH0sXG5cbiAgZ2l0aHViOiB7XG4gICAgdXJsOiAnaHR0cDovL3tzfS50aWxlcy5tYXBib3guY29tL3YzL2dpdGh1Yi5tYXAteGdxMnN2cnove3p9L3t4fS97eX0ucG5nJyxcbiAgICBuYW1lOiAnR2l0aHViJyxcbiAgICB0eXBlOiAnYmFzZW1hcCdcbiAgfSxcblxuICBncmVlbjoge1xuICAgIHVybDogJ2h0dHA6Ly97c30udGlsZXMubWFwYm94LmNvbS92My9leGFtcGxlcy5tYXAtM2dpc3VwaXUve3p9L3t4fS97eX0ucG5nJyxcbiAgICBuYW1lOiAnR3JlZW4gVGhlbWUnLFxuICAgIHR5cGU6ICdiYXNlbWFwJ1xuICB9LFxuXG4gIGRhcms6IHtcbiAgICB1cmw6ICdodHRwOi8ve3N9LnRpbGVzLm1hcGJveC5jb20vdjMvc3BhdGlhbGRldi5tYXAtYzl6MmN5ZWYve3p9L3t4fS97eX0ucG5nJyxcbiAgICBuYW1lOiAnRGFyayBUaGVtZScsXG4gICAgdHlwZTogJ2Jhc2VtYXAnXG4gIH0sXG5cbiAgb3NtOiB7XG4gICAgdXJsOiAnaHR0cDovL3tzfS50aWxlLm9zbS5vcmcve3p9L3t4fS97eX0ucG5nJyxcbiAgICBuYW1lOiAnU3RhbmRhcmQgT3BlblN0cmVldE1hcCcsXG4gICAgdHlwZTogJ2Jhc2VtYXAnXG4gIH0sXG5cbiAgb3NtY3ljbGU6IHtcbiAgICB1cmw6ICdodHRwOi8ve3N9LnRpbGUub3BlbmN5Y2xlbWFwLm9yZy9jeWNsZS97en0ve3h9L3t5fS5wbmcnLFxuICAgIG5hbWU6ICdDeWNsZSBPcGVuU3RyZWV0TWFwJyxcbiAgICB0eXBlOiAnYmFzZW1hcCdcbiAgfSxcblxuICBvc210cmFuc3BvcnQ6IHtcbiAgICB1cmw6ICdodHRwOi8ve3N9LnRpbGUyLm9wZW5jeWNsZW1hcC5vcmcvdHJhbnNwb3J0L3t6fS97eH0ve3l9LnBuZycsXG4gICAgbmFtZTogJ1RyYW5zcG9ydCBPcGVuU3RyZWV0TWFwJyxcbiAgICB0eXBlOiAnYmFzZW1hcCdcbiAgfSxcblxuICBvc21tYXBxdWVzdDoge1xuICAgIHVybDogJ2h0dHA6Ly9vdGlsZTMubXFjZG4uY29tL3RpbGVzLzEuMC4wL29zbS97en0ve3h9L3t5fS5wbmcnLFxuICAgIG5hbWU6ICdNYXBRdWVzdCBPcGVuU3RyZWV0TWFwJyxcbiAgICB0eXBlOiAnYmFzZW1hcCdcbiAgfSxcblxuICBuYXRnZW86IHtcbiAgICB1cmw6ICdodHRwOi8vc2VydmljZXMuYXJjZ2lzb25saW5lLmNvbS9BcmNHSVMvcmVzdC9zZXJ2aWNlcy9OYXRHZW9fV29ybGRfTWFwL01hcFNlcnZlci90aWxlL3t6fS97eX0ve3h9JyxcbiAgICBuYW1lOiAnTmF0aW9uYWwgR2VvZ3JhcGhpYycsXG4gICAgdHlwZTogJ2Jhc2VtYXAnXG4gIH0sXG5cbiAgdXNnc3RvcG86IHtcbiAgICB1cmw6ICdodHRwOi8vc2VydmljZXMuYXJjZ2lzb25saW5lLmNvbS9BcmNHSVMvcmVzdC9zZXJ2aWNlcy9VU0FfVG9wb19NYXBzL01hcFNlcnZlci90aWxlL3t6fS97eX0ve3h9JyxcbiAgICBuYW1lOiAnVVNHUyBUb3BvZ3JhcGhpYycsXG4gICAgdHlwZTogJ2Jhc2VtYXAnXG4gIH0sXG5cbiAgb3J0aG86IHtcbiAgICB1cmw6ICdodHRwOi8vc2VydmljZXMuYXJjZ2lzb25saW5lLmNvbS9BcmNHSVMvcmVzdC9zZXJ2aWNlcy9Xb3JsZF9JbWFnZXJ5L01hcFNlcnZlci90aWxlL3t6fS97eX0ve3h9JyxcbiAgICBuYW1lOiAnT3J0aG9ncmFwaGljJyxcbiAgICB0eXBlOiAnYmFzZW1hcCdcbiAgfSxcblxuICBvY2Vhbjoge1xuICAgIHVybDogJ2h0dHA6Ly9zZXJ2aWNlcy5hcmNnaXNvbmxpbmUuY29tL0FyY0dJUy9yZXN0L3NlcnZpY2VzL09jZWFuL1dvcmxkX09jZWFuX0Jhc2UvTWFwU2VydmVyL3RpbGUve3p9L3t5fS97eH0nLFxuICAgIG5hbWU6ICdPY2VhbiBCYXRoeW1ldHJpYycsXG4gICAgdHlwZTogJ2Jhc2VtYXAnXG4gIH0sXG5cbiAgbGlnaHRncmF5OiB7XG4gICAgdXJsOiAnaHR0cDovL3NlcnZpY2VzLmFyY2dpc29ubGluZS5jb20vQXJjR0lTL3Jlc3Qvc2VydmljZXMvQ2FudmFzL1dvcmxkX0xpZ2h0X0dyYXlfQmFzZS9NYXBTZXJ2ZXIvdGlsZS97en0ve3l9L3t4fScsXG4gICAgbmFtZTogJ0xpZ2h0IEdyYXknLFxuICAgIHR5cGU6ICdiYXNlbWFwJ1xuICB9LFxuXG4gIGVzcml0b3BvOiB7XG4gICAgdXJsOiAnaHR0cDovL3NlcnZpY2VzLmFyY2dpc29ubGluZS5jb20vQXJjR0lTL3Jlc3Qvc2VydmljZXMvV29ybGRfVG9wb19NYXAvTWFwU2VydmVyL3RpbGUve3p9L3t5fS97eH0nLFxuICAgIG5hbWU6ICdFc3JpIFRvcG9ncmFwaGljJyxcbiAgICB0eXBlOiAnYmFzZW1hcCdcbiAgfSxcblxuICB0b25lcjoge1xuICAgIHVybDogJ2h0dHA6Ly97c30udGlsZS5zdGFtZW4uY29tL3RvbmVyL3t6fS97eH0ve3l9LnBuZycsXG4gICAgbmFtZTogJ1N0YW1lbiBUb25lcicsXG4gICAgdHlwZTogJ2Jhc2VtYXAnXG4gIH0sXG5cbiAgd2F0ZXJjb2xvcjoge1xuICAgIHVybDogJ2h0dHA6Ly97c30udGlsZS5zdGFtZW4uY29tL3dhdGVyY29sb3Ive3p9L3t4fS97eX0ucG5nJyxcbiAgICBuYW1lOiAnU3RhbWVuIFdhdGVyY29sb3InLFxuICAgIHR5cGU6ICdiYXNlbWFwJ1xuICB9XG5cbn07XG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgTmljaG9sYXMgSGFsbGFoYW4gPG5oYWxsYWhhbkBzcGF0aWFsZGV2LmNvbT5cbiAqICAgICAgIG9uIDgvNi8xNC5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgdXNnc2VhcnRocXVha2U6IHtcbiAgICB0eXBlOiAnZ2VvanNvbicsXG4gICAgdGhlbWU6ICdkaXNhc3RlcicsXG4gICAgdXJsOiAnaHR0cDovL2VhcnRocXVha2UudXNncy5nb3YvZWFydGhxdWFrZXMvZmVlZC92MS4wL3N1bW1hcnkvc2lnbmlmaWNhbnRfd2Vlay5nZW9qc29uJyxcbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAndGl0bGUnOiAnVVNHUyBSZWFsdGltZSBFYXJ0aHF1YWtlcyBGZWVkIChXZWVrKSdcblxuICAgIH1cbiAgfSxcblxuICBwcmVjaXBpdGF0aW9uOiB7XG4gICAgbmFtZTogJ1ByZWNpcGl0YXRpb24nLFxuICAgIHR5cGU6ICd4eXonLFxuICAgIHRoZW1lOiAnZGlzYXN0ZXInLFxuICAgIHVybDogJ2h0dHA6Ly97c30udGlsZS5vcGVud2VhdGhlcm1hcC5vcmcvbWFwL3ByZWNpcGl0YXRpb24ve3p9L3t4fS97eX0ucG5nJyxcbiAgICBvcGFjaXR5OiAwLjVcbiAgfSxcblxuICByYWluOiB7XG4gICAgbmFtZTogJ1JhaW4nLFxuICAgIHR5cGU6ICd4eXonLFxuICAgIHRoZW1lOiAnZGlzYXN0ZXInLFxuICAgIHVybDogJ2h0dHA6Ly97c30udGlsZS5vcGVud2VhdGhlcm1hcC5vcmcvbWFwL3JhaW4ve3p9L3t4fS97eX0ucG5nJ1xuICB9LFxuXG59OyIsIi8qKlxuICogQ3JlYXRlZCBieSBOaWNob2xhcyBIYWxsYWhhbiA8bmhhbGxhaGFuQHNwYXRpYWxkZXYuY29tPlxuICogICAgICAgb24gOC82LzE0LlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBsYW5kY292ZXI6IHtcbiAgICBuYW1lOiAnTU9ESVMgTGFuZGNvdmVyIDIwMDknLFxuICAgIHR5cGU6ICd3bXMnLFxuICAgIHRoZW1lOiAnb3RoZXInLFxuICAgIHVybDogJ2h0dHA6Ly9hZ3Muc2VydmlybGFicy5uZXQvQXJjR0lTL3NlcnZpY2VzL1JlZmVyZW5jZU5vZGUvTU9ESVNfTGFuZGNvdmVyX1R5cGUxXzIwMDkvTWFwU2VydmVyL1dNU1NlcnZlcicsXG4gICAgbGF5ZXJzOiAnMCcsXG4gICAgcHJvcGVydGllczoge1xuICAgICAgbGVnZW5kOiBcIlwiXG4gICAgfVxuICB9LFxuXG4gIHNub3c6IHtcbiAgICBuYW1lOiAnU25vdycsXG4gICAgdHlwZTogJ3h5eicsXG4gICAgdGhlbWU6ICdvdGhlcicsXG4gICAgdXJsOiAnaHR0cDovL3tzfS50aWxlLm9wZW53ZWF0aGVybWFwLm9yZy9tYXAvc25vdy97en0ve3h9L3t5fS5wbmcnXG4gIH0sXG5cbiAgYWlydGVtcDoge1xuICAgIG5hbWU6ICdOT0FBIEFpciBUZW1wZXJhdHVyZScsXG4gICAgdHlwZTogJ3dtcycsXG4gICAgdGhlbWU6ICdvdGhlcicsXG4gICAgdXJsOiAnaHR0cDovL25vd2NvYXN0Lm5vYWEuZ292L3dtcy9jb20uZXNyaS53bXMuRXNyaW1hcC9vYnMnLFxuICAgIHRyYW5zcGFyZW50OiB0cnVlLCAgICAgIC8vIGRlZmF1bHQgdHJ1ZVxuICAgIGZvcm1hdDogJ2ltYWdlL3BuZycsICAgIC8vIGRlZmF1bHQgJ2ltYWdlL3BuZydcbiAgICBsYXllcnM6ICdPQlNfTUVUX1RFTVAnLFxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgIGxlZ2VuZDogXCJcIlxuICAgIH1cbiAgfSxcblxuICBwcmVzc3VyZWNvbnRvdXI6IHtcbiAgICBuYW1lOiAnUHJlc3N1cmUgQ29udG91cicsXG4gICAgdHlwZTogJ3h5eicsXG4gICAgdGhlbWU6ICdvdGhlcicsXG4gICAgdXJsOiAnaHR0cDovL3tzfS50aWxlLm9wZW53ZWF0aGVybWFwLm9yZy9tYXAvcHJlc3N1cmVfY250ci97en0ve3h9L3t5fS5wbmcnLFxuICAgIG9wYWNpdHk6IDAuOVxuICB9LFxuXG4gIHByZXNzdXJlOiB7XG4gICAgbmFtZTogJ1ByZXNzdXJlJyxcbiAgICB0eXBlOiAneHl6JyxcbiAgICB0aGVtZTogJ290aGVyJyxcbiAgICB1cmw6ICdodHRwOi8ve3N9LnRpbGUub3BlbndlYXRoZXJtYXAub3JnL21hcC9wcmVzc3VyZS97en0ve3h9L3t5fS5wbmcnXG4gIH0sXG5cbiAgdGVtcGVyYXR1cmU6IHtcbiAgICBuYW1lOiAnVGVtcGVyYXR1cmUnLFxuICAgIHR5cGU6ICd4eXonLFxuICAgIHRoZW1lOiAnb3RoZXInLFxuICAgIHVybDogJ2h0dHA6Ly97c30udGlsZS5vcGVud2VhdGhlcm1hcC5vcmcvbWFwL3RlbXAve3p9L3t4fS97eX0ucG5nJ1xuICB9LFxuXG4gIHdpbmQ6IHtcbiAgICBuYW1lOiAnV2luZCcsXG4gICAgdHlwZTogJ3h5eicsXG4gICAgdGhlbWU6ICdvdGhlcicsXG4gICAgdXJsOiAnaHR0cDovL3tzfS50aWxlLm9wZW53ZWF0aGVybWFwLm9yZy9tYXAvd2luZC97en0ve3h9L3t5fS5wbmcnXG4gIH0sXG5cbiAgY2xvdWRzOiB7XG4gICAgbmFtZTogJ0Nsb3VkIENvdmVyJyxcbiAgICB0eXBlOiAneHl6JyxcbiAgICB0aGVtZTogJ290aGVyJyxcbiAgICB1cmw6ICdodHRwOi8ve3N9LnRpbGUub3BlbndlYXRoZXJtYXAub3JnL21hcC9jbG91ZHNfY2xzL3t6fS97eH0ve3l9LnBuZycsXG4gICAgb3BhY2l0eTogMC41IC8vIG9wdGlvbmFsLiBvcGFjaXR5IGlzIDAuNSBpZiBub3Qgc3BlY2lmaWVkXG4gIH0sXG5cbiAgcHJlY2lwaXRhdGlvbmNsYXNzaWM6IHtcbiAgICBuYW1lOiAnUHJlY2lwaXRhdGlvbiAoQ2xhc3NpYyknLFxuICAgIHR5cGU6ICd4eXonLFxuICAgIHRoZW1lOiAnb3RoZXInLFxuICAgIHVybDogJ2h0dHA6Ly97c30udGlsZS5vcGVud2VhdGhlcm1hcC5vcmcvbWFwL3ByZWNpcGl0YXRpb25fY2xzL3t6fS97eH0ve3l9LnBuZycsXG4gICAgb3BhY2l0eTogMC40XG4gIH0sXG5cbiAgcmFpbmNsYXNzaWM6IHtcbiAgICBuYW1lOiAnUmFpbiAoQ2xhc3NpYyknLFxuICAgIHR5cGU6ICd4eXonLFxuICAgIHRoZW1lOiAnb3RoZXInLFxuICAgIHVybDogJ2h0dHA6Ly97c30udGlsZS5vcGVud2VhdGhlcm1hcC5vcmcvbWFwL3JhaW5fY2xzL3t6fS97eH0ve3l9LnBuZydcbiAgfVxuXG59OyIsIi8qKlxuICogQ3JlYXRlZCBieSBOaWNob2xhcyBIYWxsYWhhbiA8bmhhbGxhaGFuQHNwYXRpYWxkZXYuY29tPlxuICogICAgICAgb24gOC82LzE0LlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXG4gIGdyb3dpbmdwZXJpb2Q6IHtcbiAgICBuYW1lOiAnQXZlcmFnZSBMZW5ndGggb2YgR3Jvd2luZyBQZXJpb2QgKGRheXMpJyxcbiAgICB0eXBlOiAnd21zJyxcbiAgICB0aGVtZTogJ3Byb2plY3QnLFxuICAgIHVybDogJ2h0dHA6Ly9hcHBzLmhhcnZlc3RjaG9pY2Uub3JnL2FyY2dpcy9zZXJ2aWNlcy9NYXBTZXJ2aWNlcy9jZWxsX3ZhbHVlc180L01hcFNlcnZlci9XTVNTZXJ2ZXInLFxuICAgIGxheWVyczogJzE1JyxcbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICBsZWdlbmQ6IFwiXCJcbiAgICB9XG4gIH0sXG5cbiAgbGFuZGNvdmVyOiB7XG4gICAgbmFtZTogJ01PRElTIExhbmRjb3ZlciAyMDA5JyxcbiAgICB0eXBlOiAnd21zJyxcbiAgICB0aGVtZTogJ3Byb2plY3QnLFxuICAgIHVybDogJ2h0dHA6Ly9hZ3Muc2VydmlybGFicy5uZXQvQXJjR0lTL3NlcnZpY2VzL1JlZmVyZW5jZU5vZGUvTU9ESVNfTGFuZGNvdmVyX1R5cGUxXzIwMDkvTWFwU2VydmVyL1dNU1NlcnZlcicsXG4gICAgbGF5ZXJzOiAnMCcsXG4gICAgcHJvcGVydGllczoge1xuICAgICAgbGVnZW5kOiBcIlwiXG4gICAgfVxuICB9XG5cbn07IiwiLyoqXG4gKiBDcmVhdGVkIGJ5IE5pY2hvbGFzIEhhbGxhaGFuIDxuaGFsbGFoYW5Ac3BhdGlhbGRldi5jb20+XG4gKiAgICAgICBvbiA4LzYvMTQuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGdkYWNzOiB7XG4gICAgbmFtZTogJ0dEQUNTOiBHbG9iYWwgRGlzYXN0ZXIgQWxlcnQgYW5kIENvb3JkaW5hdGlvbiBTeXN0ZW0nLFxuICAgIHR5cGU6ICdrbWwnLFxuICAgIHRoZW1lOiAncHJvamVjdGhlYWx0aCcsXG4gICAgdXJsOiAnaHR0cDovL3d3dy5nZGFjcy5vcmcveG1sL2dkYWNzLmttbCcsXG4gICAgcHJvcGVydGllczoge1xuICAgICAgbGVnZW5kOiAnJ1xuICAgIH1cbiAgfVxufTsiLCIvKipcbiAqIENyZWF0ZWQgYnkgTmljaG9sYXMgSGFsbGFoYW4gPG5oYWxsYWhhbkBzcGF0aWFsZGV2LmNvbT5cbiAqICAgICAgIG9uIDgvNi8xNC5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblxufTsiLCIvKipcbiAqIENyZWF0ZWQgYnkgTmljaG9sYXMgSGFsbGFoYW4gPG5oYWxsYWhhbkBzcGF0aWFsZGV2LmNvbT5cbiAqICAgICAgIG9uIDQvNy8xNC5cbiAqL1xuXG52YXIgZmVhdHVyZWxhYmVsID0gcmVxdWlyZSgnLi9mZWF0dXJlbGFiZWwnKTtcbnZhciBmZWF0dXJlU2V0cyA9IGZlYXR1cmVsYWJlbC5mZWF0dXJlU2V0cztcbnZhciBMYWJlbCA9IHJlcXVpcmUoJy4vTGFiZWwuanMnKTtcblxuXG5mdW5jdGlvbiBGZWF0dXJlU2V0KCkge1xuICB0aGlzLmZlYXR1cmVzID0gW107XG4gIHRoaXMuX3BhdGhJZEhhc2ggPSB7fTtcbiAgZmVhdHVyZVNldHMucHVzaCh0aGlzKTtcbiAgdGhpcy5zZWxlY3RlZEZlYXR1cmVMYXllciA9IG51bGw7XG4gIHRoaXMuc2VsZWN0ZWRJY29uID0gbnVsbDtcbn1cbm1vZHVsZS5leHBvcnRzID0gRmVhdHVyZVNldDtcblxuXG5GZWF0dXJlU2V0LnByb3RvdHlwZS5hZGRGZWF0dXJlID0gZnVuY3Rpb24gKGZlYXR1cmVMYXllciwgZ2VvanNvbkxheWVyKSB7XG4gIGZlYXR1cmVMYXllci5nZW9qc29uTGF5ZXIgPSBnZW9qc29uTGF5ZXI7XG4gIGlmICghZmVhdHVyZUxheWVyLl9sZWFmbGV0X2lkKSB7XG4gICAgTC5zdGFtcChmZWF0dXJlTGF5ZXIpO1xuICB9XG4gIHRoaXMuZmVhdHVyZXMucHVzaChmZWF0dXJlTGF5ZXIpO1xuXG4gIC8vIGZlYXR1cmUgY29uc2lzdHMgb2Ygb25lIHBvbHlnb25cbiAgaWYgKCFmZWF0dXJlTGF5ZXIuX2xheWVycykge1xuICAgIHZhciBsZWFmbGV0SWQgPSBmZWF0dXJlTGF5ZXIuX2xlYWZsZXRfaWQ7XG4gICAgdGhpcy5fcGF0aElkSGFzaFtsZWFmbGV0SWRdID0gZmVhdHVyZUxheWVyO1xuICB9XG5cbiAgLy8gZmVhdHVyZSBjb25zaXN0cyBvZiBzZXZlcmFsIHBvbHlnb25zXG4gIGVsc2Uge1xuICAgIGZvciAodmFyIGlkIGluIGZlYXR1cmVMYXllci5fbGF5ZXJzKSB7XG4gICAgICB2YXIgcGF0aExheWVyID0gZmVhdHVyZUxheWVyLl9sYXllcnNbaWRdO1xuICAgICAgdmFyIGxlYWZsZXRJZCA9IHBhdGhMYXllci5fbGVhZmxldF9pZDtcbiAgICAgIHRoaXMuX3BhdGhJZEhhc2hbbGVhZmxldElkXSA9IGZlYXR1cmVMYXllcjtcbiAgICB9XG4gIH1cblxufTtcblxuXG5GZWF0dXJlU2V0LnByb3RvdHlwZS5fcGF0aFVwZGF0ZWQgPSBmdW5jdGlvbiAobGVhZmxldElkKSB7XG4gIHZhciBmZWF0dXJlTGF5ZXIgPSB0aGlzLl9wYXRoSWRIYXNoW2xlYWZsZXRJZF07XG4gIC8vIHRoZSBoYXNoIGRvZXNuJ3QgYWx3YXlzIGNhdGNoIHRoZSBpZCBpZiB0aGUgZ3JhcGhpYyBoYXMgbm90IHlldCBiZWVuIHJlbmRlcmVkLlxuICBpZiAoIWZlYXR1cmVMYXllcikge1xuICAgIHZhciBmZWF0dXJlcyA9IHRoaXMuZmVhdHVyZXM7XG4gICAgZm9yICh2YXIga2V5IGluIGZlYXR1cmVzKSB7XG4gICAgICB2YXIgZmVhdCA9IHRoaXMuZmVhdHVyZXNba2V5XTtcbiAgICAgIGlmIChmZWF0Ll9sZWFmbGV0X2lkID09PSBsZWFmbGV0SWQpIHtcbiAgICAgICAgZmVhdHVyZUxheWVyID0gZmVhdDtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHBhdGhVcGRhdGVkKGZlYXR1cmVMYXllciwgdGhpcyk7XG59O1xuXG5cbmZ1bmN0aW9uIHBhdGhVcGRhdGVkKGZlYXR1cmVMYXllciwgZmVhdHVyZVNldCkge1xuICAvLyBJZiB0aGUgaWQgZG9lc250IGhhc2gsIG5vIHBhdGggZm9yIHRoZSBmZWF0dXJlcyBpbiBvdXIgZmVhdHVyZSBzZXQgYXBwbHkuXG4gIGlmICghZmVhdHVyZUxheWVyKSB7XG4gICAgLy9jb25zb2xlLmVycm9yKCdwYXRoVXBkYXRlZCBmZWF0dXJlTGF5ZXIgZW1wdHknKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoZmVhdHVyZUxheWVyLl9sYXllcnMpIHtcblxuICAgIC8vIG9ubHkgY2FsY3VsYXRlIGNlbnRlciBhZnRlciBhbGwgb2YgdGhlIHBvbHlnb25zIGhhdmUgYmVlbiB1cGRhdGVkXG4gICAgaWYgKCFmZWF0dXJlTGF5ZXIucGF0aHNVcGRhdGVkKSBmZWF0dXJlTGF5ZXIucGF0aHNVcGRhdGVkID0gMDtcbiAgICArK2ZlYXR1cmVMYXllci5wYXRoc1VwZGF0ZWQ7XG5cbiAgICBpZiAoZmVhdHVyZUxheWVyLnBhdGhzVXBkYXRlZCA9PT0gT2JqZWN0LmtleXMoZmVhdHVyZUxheWVyLl9sYXllcnMpLmxlbmd0aCkge1xuICAgICAgdmFyIGwgPSBmaW5kTGFyZ2VzdExheWVyKGZlYXR1cmVMYXllci5fbGF5ZXJzKTtcblxuICAgICAgaWYgKGwpIHtcbiAgICAgICAgZmVhdHVyZUxheWVyLmxhYmVsQ2VudGVyUG9pbnQgPSBjYWxjdWxhdGVDZW50ZXIobC5fcGFydHMpO1xuICAgICAgICB1cGRhdGVMYWJlbChmZWF0dXJlTGF5ZXIsIGZlYXR1cmVTZXQpO1xuICAgICAgfVxuXG4gICAgICBmZWF0dXJlTGF5ZXIucGF0aHNVcGRhdGVkID0gMDtcbiAgICB9XG5cbiAgICByZXR1cm47XG4gIH1cblxuICAvLyB0aGVyZSBpcyBvbmx5IG9uZSBwb2x5Z29uLCBzbyBjYWxjdWxhdGUgY2VudGVyLiBhbHNvIGNoZWNrIHRvIHNlZSBpZiB0aGVyZSBhcmUgcGFydHNcbiAgaWYgKCBmZWF0dXJlTGF5ZXIuX3BhcnRzICYmIGZlYXR1cmVMYXllci5fcGFydHMubGVuZ3RoICkge1xuICAgIGZlYXR1cmVMYXllci5sYWJlbENlbnRlclBvaW50ID0gY2FsY3VsYXRlQ2VudGVyKGZlYXR1cmVMYXllci5fcGFydHMpO1xuICAgIHVwZGF0ZUxhYmVsKGZlYXR1cmVMYXllciwgZmVhdHVyZVNldCk7XG5cbiAgICByZXR1cm47XG4gIH1cblxufVxuXG5cbmZ1bmN0aW9uIGNyZWF0ZUxhYmVsKGZlYXR1cmVMYXllciwgZmVhdHVyZVNldCkge1xuICB2YXIgcG9pbnQgPSBmZWF0dXJlTGF5ZXIubGFiZWxDZW50ZXJQb2ludDtcblxuICB2YXIgcHJvcGVydGllcyA9IGZlYXR1cmVMYXllci5mZWF0dXJlLnByb3BlcnRpZXM7XG4gIHZhciB0ZXh0ID0gcHJvcGVydGllcy50aXRsZSB8fCBwcm9wZXJ0aWVzLm5hbWUgfHwgJ0xhYmVsJztcbiAgaWYgKHByb3BlcnRpZXMubGFiZWxQcm9wZXJ0eSkge1xuICAgIGlmICh0eXBlb2YgcHJvcGVydGllcy5sYWJlbFByb3BlcnR5ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0ZXh0ID0gcHJvcGVydGllcy5sYWJlbFByb3BlcnR5KHByb3BlcnRpZXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0ZXh0ID0gcHJvcGVydGllc1twcm9wZXJ0aWVzLmxhYmVsUHJvcGVydHldO1xuICAgIH1cblxuICB9XG5cbiAgLy9EZXRlcm1pbmUgbWFwIGljb24gY2xhc3NcbiAgdmFyIGljb25DbGFzcyA9IFwiZmVhdHVyZWxhYmVsLWljb24tdGV4dFwiO1xuICBpZiAocHJvcGVydGllc1tcIm1hcC1pY29uLWNsYXNzXCJdKSB7XG4gICAgICBpZiAodHlwZW9mIHByb3BlcnRpZXNbXCJtYXAtaWNvbi1jbGFzc1wiXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIGljb25DbGFzcyA9IHByb3BlcnRpZXNbXCJtYXAtaWNvbi1jbGFzc1wiXShwcm9wZXJ0aWVzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWNvbkNsYXNzID0gcHJvcGVydGllc1twcm9wZXJ0aWVzW1wibWFwLWljb24tY2xhc3NcIl1dO1xuICAgICAgfVxuICB9XG5cbiAgLy9EZXRlcm1pbmUgbWFwIGljb24gc2l6ZVxuICB2YXIgaWNvblNpemUgPSBbMzUsMzVdO1xuICBpZiAocHJvcGVydGllc1tcIm1hcC1pY29uLXNpemVcIl0pIHtcbiAgICAgIGlmICh0eXBlb2YgcHJvcGVydGllc1tcIm1hcC1pY29uLXNpemVcIl0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBpY29uU2l6ZSA9IHByb3BlcnRpZXNbXCJtYXAtaWNvbi1zaXplXCJdKHByb3BlcnRpZXMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpY29uU2l6ZSA9IHByb3BlcnRpZXNbcHJvcGVydGllc1tcIm1hcC1pY29uLXNpemVcIl1dO1xuICAgICAgfVxuICB9XG5cbiAgY29uc29sZS5sb2coJ0xBQkVMOiAnICsgdGV4dCArICcgKCcgKyBwb2ludC54ICsgJywgJyArIHBvaW50LnkgKyAnKSAnICsgcHJvcGVydGllcy5uYW1lKTtcblxuICB2YXIgaWNvbiA9IEwuZGl2SWNvbih7XG4gICAgY2xhc3NOYW1lOiBpY29uQ2xhc3MgfHwgXCJcIiwgLy9pY29uQ2xhc3MgfHwgKCQuaXNOdW1lcmljKHRleHQpID8gJ2ZlYXR1cmVsYWJlbC1pY29uLW51bWJlcicgOiAnZmVhdHVyZWxhYmVsLWljb24tdGV4dCcpLFxuICAgIGljb25TaXplOiBpY29uU2l6ZSxcbiAgICBodG1sOiB0ZXh0XG4gIH0pO1xuXG4gIHZhciBsYWJlbCA9IG5ldyBMYWJlbChwb2ludCwgZmVhdHVyZUxheWVyLCB7aWNvbjppY29ufSk7XG5cbiAgbGFiZWwuY2xlYXJBbGxFdmVudExpc3RlbmVycygpO1xuICBmZWF0dXJlTGF5ZXIuY2xlYXJBbGxFdmVudExpc3RlbmVycygpO1xuXG4gIGxhYmVsLm9uKCdtb3VzZW92ZXInLCBmdW5jdGlvbihlKSB7XG4gICAgbW91c2VvdmVyKHRoaXMsIHRoaXMuZmVhdHVyZUxheWVyKTtcbiAgfSk7XG5cbiAgZmVhdHVyZUxheWVyLm9uKCdtb3VzZW92ZXInLCBmdW5jdGlvbiAoZSkge1xuICAgIG1vdXNlb3Zlcih0aGlzLmxhYmVsLCB0aGlzKTtcbiAgfSk7XG5cbiAgZnVuY3Rpb24gd2hpdGVuTGFiZWwobGFiZWwpIHtcbiAgICBpZiAobGFiZWwuX2ljb24pIHtcbiAgICAgIC8vIGxhYmVsIGlzIHRleHQgb25seSwgbm8gYmFkZ2VcbiAgICAgIGlmIChsYWJlbC5faWNvbi5jaGlsZHJlblswXS5jbGFzc05hbWUuaW5kZXhPZignZmVhdHVyZWxhYmVsLWljb24tdGV4dCcpID4gLTEpIHtcbiAgICAgICAgbGFiZWwuX2ljb24uY2hpbGRyZW5bMF0uc3R5bGVbJ2NvbG9yJ10gPSAncmdiYSgyNTUsMjU1LDI1NSwwLjcpJztcbiAgICAgIH1cbiAgICAgIC8vIGxhYmVsIGhhcyBhIGJhZGdlXG4gICAgICBlbHNlIHtcbiAgICAgICAgbGFiZWwuX2ljb24uY2hpbGRyZW5bMF0uc3R5bGVbJ2JveC1zaGFkb3cnXSA9ICcwcHggMHB4IDBweCA2cHggcmdiYSgyNTUsMjU1LDI1NSwwLjcpJztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnb2xkZW5MYWJlbChsYWJlbCkge1xuICAgIGlmIChsYWJlbC5faWNvbikge1xuICAgICAgLy8gbGFiZWwgaXMgdGV4dCBvbmx5LCBubyBiYWRnZVxuICAgICAgaWYgKGxhYmVsLl9pY29uLmNoaWxkcmVuWzBdLmNsYXNzTmFtZS5pbmRleE9mKCdmZWF0dXJlbGFiZWwtaWNvbi10ZXh0JykgPiAtMSkge1xuICAgICAgICBsYWJlbC5faWNvbi5jaGlsZHJlblswXS5zdHlsZVsnY29sb3InXSA9ICdyZ2JhKDIzNywxNzgsNDEsMC44KSc7XG4gICAgICB9XG4gICAgICAvLyBsYWJlbCBoYXMgYSBiYWRnZVxuICAgICAgZWxzZSB7XG4gICAgICAgIGxhYmVsLl9pY29uLmNoaWxkcmVuWzBdLnN0eWxlWydib3gtc2hhZG93J10gPSAnMHB4IDBweCAwcHggNnB4IHJnYmEoMjM3LDE3OCw0MSwwLjgpJztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZWRkZW5MYWJlbChsYWJlbCkge1xuICAgIGlmIChsYWJlbC5faWNvbikge1xuICAgICAgLy8gbGFiZWwgaXMgdGV4dCBvbmx5LCBubyBiYWRnZVxuICAgICAgaWYgKGxhYmVsLl9pY29uLmNoaWxkcmVuWzBdLmNsYXNzTmFtZS5pbmRleE9mKCdmZWF0dXJlbGFiZWwtaWNvbi10ZXh0JykgPiAtMSkge1xuICAgICAgICBsYWJlbC5faWNvbi5jaGlsZHJlblswXS5zdHlsZVsnY29sb3InXSA9ICdyZ2JhKDIzNywyNyw0NiwwLjUpJztcbiAgICAgIH1cbiAgICAgIC8vIGxhYmVsIGhhcyBhIGJhZGdlXG4gICAgICBlbHNlIHtcbiAgICAgICAgbGFiZWwuX2ljb24uY2hpbGRyZW5bMF0uc3R5bGVbJ2JveC1zaGFkb3cnXSA9ICcwcHggMHB4IDBweCA2cHggcmdiYSgyMzcsMjcsNDYsMC41KSc7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gbW91c2VvdmVyKGxhYmVsLCBmZWF0dXJlTGF5ZXIpIHtcbiAgICBpZiAoZmVhdHVyZUxheWVyICE9PSBmZWF0dXJlU2V0LnNlbGVjdGVkRmVhdHVyZUxheWVyKSB7XG5cbiAgICAgIGdvbGRlbkxhYmVsKGxhYmVsKTtcblxuICAgICAgZmVhdHVyZUxheWVyLnNldFN0eWxlKHtcbiAgICAgICAgY29sb3I6ICcjRURCMjI5JyAgLy8gZ29sZFxuICAgICAgfSk7XG4gICAgICBmZWF0dXJlTGF5ZXIuYnJpbmdUb0Zyb250KCk7XG4gICAgfVxuICB9XG5cbiAgbGFiZWwub24oJ21vdXNlb3V0JywgZnVuY3Rpb24oZSkge1xuICAgIG1vdXNlb3V0KHRoaXMsIHRoaXMuZmVhdHVyZUxheWVyKTtcbiAgfSk7XG5cbiAgZmVhdHVyZUxheWVyLm9uKCdtb3VzZW91dCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgbW91c2VvdXQodGhpcy5sYWJlbCwgdGhpcyk7XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIG1vdXNlb3V0KGxhYmVsLCBmZWF0dXJlTGF5ZXIpIHtcbiAgICBpZiAoZmVhdHVyZUxheWVyICE9PSBmZWF0dXJlU2V0LnNlbGVjdGVkRmVhdHVyZUxheWVyKSB7XG5cbiAgICAgIHdoaXRlbkxhYmVsKGxhYmVsKTtcblxuICAgICAgZmVhdHVyZUxheWVyLnNldFN0eWxlKHtcbiAgICAgICAgY29sb3I6IHByb3BlcnRpZXMuY29sb3IgfHwgJ3doaXRlJ1xuICAgICAgfSk7XG4gICAgICBpZiAoZmVhdHVyZVNldC5zZWxlY3RlZEZlYXR1cmVMYXllcikge1xuICAgICAgICBmZWF0dXJlU2V0LnNlbGVjdGVkRmVhdHVyZUxheWVyLmJyaW5nVG9Gcm9udCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZmVhdHVyZUxheWVyLmJyaW5nVG9Gcm9udCgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGxhYmVsLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgY2xpY2sodGhpcywgdGhpcy5mZWF0dXJlTGF5ZXIpO1xuICB9KTtcblxuICBmZWF0dXJlTGF5ZXIub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICBjbGljayh0aGlzLmxhYmVsLCB0aGlzKTtcbiAgfSk7XG5cbiAgZnVuY3Rpb24gY2xpY2sobGFiZWwsIGZlYXR1cmVMYXllcikge1xuICAgIC8vIFRVUk4gT0ZGXG4gICAgaWYgKGZlYXR1cmVMYXllciA9PT0gZmVhdHVyZVNldC5zZWxlY3RlZEZlYXR1cmVMYXllcikge1xuXG4gICAgICB3aGl0ZW5MYWJlbChsYWJlbCk7XG5cbiAgICAgIGZlYXR1cmVMYXllci5zZXRTdHlsZSh7XG4gICAgICAgIGNvbG9yOiBwcm9wZXJ0aWVzLmNvbG9yIHx8ICd3aGl0ZSdcbiAgICAgIH0pO1xuICAgICAgZmVhdHVyZUxheWVyLmJyaW5nVG9Gcm9udCgpO1xuICAgICAgZmVhdHVyZVNldC5zZWxlY3RlZEZlYXR1cmVMYXllciA9IG51bGw7XG4gICAgICBpZiAocHJvcGVydGllcyAmJiBwcm9wZXJ0aWVzLm9uRGVzZWxlY3QgJiYgdHlwZW9mIHByb3BlcnRpZXMub25EZXNlbGVjdCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBwcm9wZXJ0aWVzLm9uRGVzZWxlY3QoZmVhdHVyZUxheWVyKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBUVVJOIE9OXG4gICAgZWxzZSB7XG4gICAgICBpZiAoZmVhdHVyZVNldC5zZWxlY3RlZEZlYXR1cmVMYXllcikge1xuICAgICAgICB3aGl0ZW5MYWJlbCh7X2ljb246IGZlYXR1cmVTZXQuc2VsZWN0ZWRJY29ufSk7XG4gICAgICAgIGZlYXR1cmVTZXQuc2VsZWN0ZWRGZWF0dXJlTGF5ZXIuc2V0U3R5bGUoe1xuICAgICAgICAgIGNvbG9yOiBwcm9wZXJ0aWVzLmNvbG9yIHx8ICd3aGl0ZSdcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJlZGRlbkxhYmVsKGxhYmVsKTtcblxuICAgICAgLy8gcmVkIGNyb3NzIHJlZCAjZWQxYjJlXG4gICAgICBmZWF0dXJlTGF5ZXIuc2V0U3R5bGUoe1xuICAgICAgICBjb2xvcjogJyNkOTUzNGYnIC8vIHJlZFxuICAgICAgfSk7XG4gICAgICBmZWF0dXJlTGF5ZXIuYnJpbmdUb0Zyb250KCk7XG4gICAgICBmZWF0dXJlU2V0LnNlbGVjdGVkRmVhdHVyZUxheWVyID0gZmVhdHVyZUxheWVyO1xuICAgICAgZmVhdHVyZVNldC5zZWxlY3RlZEljb24gPSBsYWJlbC5faWNvbjtcbiAgICAgIGlmIChwcm9wZXJ0aWVzICYmIHByb3BlcnRpZXMub25TZWxlY3QgJiYgdHlwZW9mIHByb3BlcnRpZXMub25TZWxlY3QgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcHJvcGVydGllcy5vblNlbGVjdChmZWF0dXJlTGF5ZXIpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBGaXhlcyB0aGUgZG91YmxlIGxhYmVsIGJ1Zy5cbiAgICovXG4gIGZlYXR1cmVMYXllci5nZW9qc29uTGF5ZXIuYWRkTGF5ZXIobGFiZWwpO1xuXG4gIC8qKlxuICAgKiBJZGVhbGx5IHdlIHdhbnQgdG8gYmUgYWRkaW5nIGxhYmVscyB0byB0aGUgYWN0dWFsIGxheWVyIHRoZXkgYXJlIG9uXG4gICAqIHJhdGhlciB0aGFuIHRoZSBwYXJlbnQgR2VvSlNPTiBsYXllci5cbiAgICovXG4vLyAgICBpZiAoIWZlYXR1cmVMYXllci5hZGRMYXllcikge1xuLy8gICAgICBmZWF0dXJlTGF5ZXIuZ2VvanNvbkxheWVyLmFkZExheWVyKGxhYmVsKTtcbi8vICAgIH0gZWxzZSB7XG4vLyAgICAgIGZlYXR1cmVMYXllci5hZGRMYXllcihsYWJlbCk7XG4vLyAgICB9XG5cbiAgZmVhdHVyZWxhYmVsLmxhYmVsc1tmZWF0dXJlTGF5ZXIuZmVhdHVyZS5wcm9wZXJ0aWVzLmd1aWRdID0gbGFiZWw7XG59XG5cblxuZnVuY3Rpb24gdXBkYXRlTGFiZWwoZmVhdHVyZUxheWVyLCBmZWF0dXJlU2V0KSB7XG4gIGlmICggISBmZWF0dXJlTGF5ZXIubGFiZWwgKSB7XG4gICAgY3JlYXRlTGFiZWwoZmVhdHVyZUxheWVyLCBmZWF0dXJlU2V0KTtcbiAgfSBlbHNlIHtcbiAgICBmZWF0dXJlTGF5ZXIubGFiZWwudXBkYXRlKGZlYXR1cmVMYXllci5sYWJlbENlbnRlclBvaW50KTtcbiAgfVxufVxuXG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZUNlbnRlcihwYXJ0cykge1xuXG4gIHZhciBwYXJ0ID0gZmluZExhcmdlc3RQYXJ0KHBhcnRzKTtcbiAgdmFyIGNlbnRlciA9IGNlbnRyb2lkKHBhcnQpO1xuXG4gIHJldHVybiBjZW50ZXIucm91bmQoKTtcbn1cblxuXG4vLyAgaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9DZW50cm9pZCNDZW50cm9pZF9vZl9wb2x5Z29uXG5cbmZ1bmN0aW9uIGFyZWEocGFydEFycikge1xuICB2YXIgYXJlYSA9IDA7XG4gIHZhciBsZW4gPSBwYXJ0QXJyLmxlbmd0aDtcbiAgZm9yICh2YXIgaSA9IDAsIGogPSBsZW4gLSAxOyBpIDwgbGVuOyBqPWksIGkrKykge1xuICAgIHZhciBwMSA9IHBhcnRBcnJbal07XG4gICAgdmFyIHAyID0gcGFydEFycltpXTtcblxuICAgIGFyZWEgKz0gcDEueCAqIHAyLnkgLSBwMi54ICogcDEueTtcbiAgfVxuXG4gIHJldHVybiBhcmVhIC8gMjtcbn1cblxuLypcbiAgICBOSCBUT0RPOiBXZSBhcmUgaW5kZWVkIGdldHRpbmcgdGhlIGNlbnRyb2lkLCBidXQgaWRlYWxseSB3ZVxuICAgIHdhbnQgdG8gY2hlY2sgaWYgdGhlIGNlbnRyb2lkIGlzIGFjdHVhbGx5IHdpdGhpbiB0aGUgcG9seWdvblxuICAgIGZvciB0aGUgcG9seWdvbnMgdGhhdCBiZW5kIGxpa2UgYSBib29tYXJhbmcuIElmIGl0IGlzIG91dHNpZGUsXG4gICAgd2UgbmVlZCB0byBudWRnZSBpdCBvdmVyIHVudGlsIGl0IGlzIGluc2lkZS4uLlxuICovXG5mdW5jdGlvbiBjZW50cm9pZChwYXJ0QXJyKSB7XG4gIHZhciBsZW4gPSBwYXJ0QXJyLmxlbmd0aDtcbiAgdmFyIHggPSAwO1xuICB2YXIgeSA9IDA7XG4gIGZvciAodmFyIGkgPSAwLCBqID0gbGVuIC0gMTsgaSA8IGxlbjsgaj1pLCBpKyspIHtcbiAgICB2YXIgcDEgPSBwYXJ0QXJyW2pdO1xuICAgIHZhciBwMiA9IHBhcnRBcnJbaV07XG4gICAgdmFyIGYgPSBwMS54ICogcDIueSAtIHAyLnggKiBwMS55O1xuICAgIHggKz0gKHAxLnggKyBwMi54KSAqIGY7XG4gICAgeSArPSAocDEueSArIHAyLnkpICogZjtcbiAgfVxuICBmID0gYXJlYShwYXJ0QXJyKSAqIDY7XG4gIHJldHVybiBMLnBvaW50KHgvZiwgeS9mKTtcblxufVxuXG5cbmZ1bmN0aW9uIGZpbmRMYXJnZXN0TGF5ZXIobGF5ZXJzKSB7XG4gIHZhciBsYXJnZXN0TGF5ZXIgPSBudWxsO1xuICB2YXIgbWF4QXJlYSA9IDA7XG5cbiAgZm9yICh2YXIgaWQgaW4gbGF5ZXJzKSB7XG4gICAgdmFyIGwgPSBsYXllcnNbaWRdO1xuICAgIHZhciBwYXJ0cyA9IGwuX3BhcnRzO1xuICAgIHZhciBhID0gMDtcbiAgICBpZiAoIXBhcnRzKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHBhcnRzLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICBhICs9IGFyZWEocGFydHNbaV0pO1xuICAgIH1cbiAgICBpZiAoYSA+IG1heEFyZWEpIHtcbiAgICAgIG1heEFyZWEgPSBhO1xuICAgICAgbGFyZ2VzdExheWVyID0gbDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbGFyZ2VzdExheWVyO1xufVxuXG5mdW5jdGlvbiBmaW5kTGFyZ2VzdFBhcnQocGFydHMpIHtcbiAgdmFyIGxhcmdlc3RQYXJ0ID0gcGFydHNbMF07XG4gIHZhciBtYXhBcmVhID0gMDtcblxuICBmb3IgKHZhciBpID0gMCwgbGVuID0gcGFydHMubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgICB2YXIgcCA9IHBhcnRzW2ldO1xuICAgIHZhciBhID0gYXJlYShwKTtcbiAgICBpZiAoIGEgPiBtYXhBcmVhICkge1xuICAgICAgbGFyZ2VzdFBhcnQgPSBwO1xuICAgICAgbWF4QXJlYSA9IGE7XG4gICAgfVxuICB9XG4gIHJldHVybiBsYXJnZXN0UGFydDtcbn1cbiIsIi8qKlxuICogQ3JlYXRlZCBieSBOaWNob2xhcyBIYWxsYWhhbiA8bmhhbGxhaGFuQHNwYXRpYWxkZXYuY29tPlxuICogICAgICAgb24gNC83LzE0LlxuICpcbiAqICAgICAgIEJhc2VkIG9uIEwuTWFya2VyIGZyb20gdjAuNy4yXG4gKi9cblxuXG5tb2R1bGUuZXhwb3J0cyA9IEwuTGFiZWwgPSBMLkNsYXNzLmV4dGVuZCh7XG5cbiAgaW5jbHVkZXM6IEwuTWl4aW4uRXZlbnRzLFxuXG4gIG9wdGlvbnM6IHtcbiAgICBpY29uOiBuZXcgTC5JY29uLkRlZmF1bHQoKSxcbiAgICB0aXRsZTogJycsXG4gICAgYWx0OiAnJyxcbiAgICBjbGlja2FibGU6IHRydWUsXG4gICAgZHJhZ2dhYmxlOiBmYWxzZSxcbiAgICBrZXlib2FyZDogdHJ1ZSxcbiAgICB6SW5kZXhPZmZzZXQ6IDAsXG4gICAgb3BhY2l0eTogMSxcbiAgICByaXNlT25Ib3ZlcjogZmFsc2UsXG4gICAgcmlzZU9mZnNldDogMjUwXG4gIH0sXG5cbiAgaW5pdGlhbGl6ZTogZnVuY3Rpb24gKHBvaW50LCBmZWF0dXJlTGF5ZXIsIG9wdGlvbnMpIHtcbiAgICBMLnNldE9wdGlvbnModGhpcywgb3B0aW9ucyk7XG4vLyAgICB0aGlzLl9sYXRsbmcgPSBMLmxhdExuZyhsYXRsbmcpO1xuICAgIHRoaXMuX3BvaW50ID0gcG9pbnQ7XG4gICAgaWYgKGZlYXR1cmVMYXllcil7XG4gICAgICB0aGlzLmZlYXR1cmVMYXllciA9IGZlYXR1cmVMYXllcjtcbiAgICAgIGZlYXR1cmVMYXllci5sYWJlbCA9IHRoaXM7XG4gICAgfVxuICAgIHRoaXMuaXNMYWJlbCA9IHRydWU7XG4gIH0sXG5cbiAgb25BZGQ6IGZ1bmN0aW9uIChtYXApIHtcbiAgICB0aGlzLl9tYXAgPSBtYXA7XG5cbiAgICBtYXAub24oJ3ZpZXdyZXNldCcsIHRoaXMudXBkYXRlLCB0aGlzKTtcblxuICAgIHRoaXMuX2luaXRJY29uKCk7XG4gICAgdGhpcy51cGRhdGUoKTtcbiAgICB0aGlzLmZpcmUoJ2FkZCcpO1xuXG4gICAgaWYgKG1hcC5vcHRpb25zLnpvb21BbmltYXRpb24gJiYgbWFwLm9wdGlvbnMubWFya2VyWm9vbUFuaW1hdGlvbikge1xuICAgICAgbWFwLm9uKCd6b29tYW5pbScsIHRoaXMuX2FuaW1hdGVab29tLCB0aGlzKTtcbiAgICB9XG4gIH0sXG5cbiAgYWRkVG86IGZ1bmN0aW9uIChtYXApIHtcbiAgICBtYXAuYWRkTGF5ZXIodGhpcyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG5cbiAgb25SZW1vdmU6IGZ1bmN0aW9uIChtYXApIHtcbiAgICBpZiAodGhpcy5kcmFnZ2luZykge1xuICAgICAgdGhpcy5kcmFnZ2luZy5kaXNhYmxlKCk7XG4gICAgfVxuXG4gICAgdGhpcy5fcmVtb3ZlSWNvbigpO1xuICAgIHRoaXMuX3JlbW92ZVNoYWRvdygpO1xuXG4gICAgdGhpcy5maXJlKCdyZW1vdmUnKTtcblxuICAgIG1hcC5vZmYoe1xuICAgICAgJ3ZpZXdyZXNldCc6IHRoaXMudXBkYXRlLFxuICAgICAgJ3pvb21hbmltJzogdGhpcy5fYW5pbWF0ZVpvb21cbiAgICB9LCB0aGlzKTtcblxuICAgIHRoaXMuX21hcCA9IG51bGw7XG4gIH0sXG5cbi8vICBnZXRMYXRMbmc6IGZ1bmN0aW9uICgpIHtcbi8vICAgIHJldHVybiB0aGlzLl9sYXRsbmc7XG4vLyAgfSxcbi8vXG4vLyAgc2V0TGF0TG5nOiBmdW5jdGlvbiAobGF0bG5nKSB7XG4vLyAgICB0aGlzLl9sYXRsbmcgPSBMLmxhdExuZyhsYXRsbmcpO1xuLy9cbi8vICAgIHRoaXMudXBkYXRlKCk7XG4vL1xuLy8gICAgcmV0dXJuIHRoaXMuZmlyZSgnbW92ZScsIHsgbGF0bG5nOiB0aGlzLl9sYXRsbmcgfSk7XG4vLyAgfSxcblxuXG5cbiAgc2V0WkluZGV4T2Zmc2V0OiBmdW5jdGlvbiAob2Zmc2V0KSB7XG4gICAgdGhpcy5vcHRpb25zLnpJbmRleE9mZnNldCA9IG9mZnNldDtcbiAgICB0aGlzLnVwZGF0ZSgpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG5cbiAgc2V0SWNvbjogZnVuY3Rpb24gKGljb24pIHtcblxuICAgIHRoaXMub3B0aW9ucy5pY29uID0gaWNvbjtcblxuICAgIGlmICh0aGlzLl9tYXApIHtcbiAgICAgIHRoaXMuX2luaXRJY29uKCk7XG4gICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9wb3B1cCkge1xuICAgICAgdGhpcy5iaW5kUG9wdXAodGhpcy5fcG9wdXApO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9LFxuXG4gIHVwZGF0ZTogZnVuY3Rpb24gKHBvaW50KSB7XG4gICAgaWYgKHBvaW50KSB7XG4gICAgICB0aGlzLl9wb2ludCA9IHBvaW50O1xuICAgIH1cbiAgICBpZiAodGhpcy5faWNvbikge1xuLy8gICAgICB2YXIgcG9zID0gdGhpcy5fbWFwLmxhdExuZ1RvTGF5ZXJQb2ludCh0aGlzLl9sYXRsbmcpLnJvdW5kKCk7XG4gICAgICB0aGlzLl9zZXRQb3ModGhpcy5fcG9pbnQpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9LFxuXG4gIF9pbml0SWNvbjogZnVuY3Rpb24gKCkge1xuICAgIHZhciBvcHRpb25zID0gdGhpcy5vcHRpb25zLFxuICAgICAgbWFwID0gdGhpcy5fbWFwLFxuICAgICAgYW5pbWF0aW9uID0gKG1hcC5vcHRpb25zLnpvb21BbmltYXRpb24gJiYgbWFwLm9wdGlvbnMubWFya2VyWm9vbUFuaW1hdGlvbiksXG4gICAgICBjbGFzc1RvQWRkID0gYW5pbWF0aW9uID8gJ2xlYWZsZXQtem9vbS1hbmltYXRlZCcgOiAnbGVhZmxldC16b29tLWhpZGUnO1xuXG4gICAgdmFyIGljb24gPSBvcHRpb25zLmljb24uY3JlYXRlSWNvbih0aGlzLl9pY29uKSxcbiAgICAgIGFkZEljb24gPSBmYWxzZTtcblxuICAgIC8vIGlmIHdlJ3JlIG5vdCByZXVzaW5nIHRoZSBpY29uLCByZW1vdmUgdGhlIG9sZCBvbmUgYW5kIGluaXQgbmV3IG9uZVxuICAgIGlmIChpY29uICE9PSB0aGlzLl9pY29uKSB7XG4gICAgICBpZiAodGhpcy5faWNvbikge1xuICAgICAgICB0aGlzLl9yZW1vdmVJY29uKCk7XG4gICAgICB9XG4gICAgICBhZGRJY29uID0gdHJ1ZTtcblxuICAgICAgaWYgKG9wdGlvbnMudGl0bGUpIHtcbiAgICAgICAgaWNvbi50aXRsZSA9IG9wdGlvbnMudGl0bGU7XG4gICAgICB9XG5cbiAgICAgIGlmIChvcHRpb25zLmFsdCkge1xuICAgICAgICBpY29uLmFsdCA9IG9wdGlvbnMuYWx0O1xuICAgICAgfVxuICAgIH1cblxuICAgIEwuRG9tVXRpbC5hZGRDbGFzcyhpY29uLCBjbGFzc1RvQWRkKTtcblxuICAgIGlmIChvcHRpb25zLmtleWJvYXJkKSB7XG4gICAgICBpY29uLnRhYkluZGV4ID0gJzAnO1xuICAgIH1cblxuICAgIHRoaXMuX2ljb24gPSBpY29uO1xuXG4gICAgdGhpcy5faW5pdEludGVyYWN0aW9uKCk7XG5cbiAgICBpZiAob3B0aW9ucy5yaXNlT25Ib3Zlcikge1xuICAgICAgTC5Eb21FdmVudFxuICAgICAgICAub24oaWNvbiwgJ21vdXNlb3ZlcicsIHRoaXMuX2JyaW5nVG9Gcm9udCwgdGhpcylcbiAgICAgICAgLm9uKGljb24sICdtb3VzZW91dCcsIHRoaXMuX3Jlc2V0WkluZGV4LCB0aGlzKTtcbiAgICB9XG5cbiAgICB2YXIgbmV3U2hhZG93ID0gb3B0aW9ucy5pY29uLmNyZWF0ZVNoYWRvdyh0aGlzLl9zaGFkb3cpLFxuICAgICAgYWRkU2hhZG93ID0gZmFsc2U7XG5cbiAgICBpZiAobmV3U2hhZG93ICE9PSB0aGlzLl9zaGFkb3cpIHtcbiAgICAgIHRoaXMuX3JlbW92ZVNoYWRvdygpO1xuICAgICAgYWRkU2hhZG93ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAobmV3U2hhZG93KSB7XG4gICAgICBMLkRvbVV0aWwuYWRkQ2xhc3MobmV3U2hhZG93LCBjbGFzc1RvQWRkKTtcbiAgICB9XG4gICAgdGhpcy5fc2hhZG93ID0gbmV3U2hhZG93O1xuXG5cbiAgICBpZiAob3B0aW9ucy5vcGFjaXR5IDwgMSkge1xuICAgICAgdGhpcy5fdXBkYXRlT3BhY2l0eSgpO1xuICAgIH1cblxuXG4gICAgdmFyIHBhbmVzID0gdGhpcy5fbWFwLl9wYW5lcztcblxuICAgIGlmIChhZGRJY29uKSB7XG4gICAgICBwYW5lcy5tYXJrZXJQYW5lLmFwcGVuZENoaWxkKHRoaXMuX2ljb24pO1xuICAgIH1cblxuICAgIGlmIChuZXdTaGFkb3cgJiYgYWRkU2hhZG93KSB7XG4gICAgICBwYW5lcy5zaGFkb3dQYW5lLmFwcGVuZENoaWxkKHRoaXMuX3NoYWRvdyk7XG4gICAgfVxuICB9LFxuXG4gIF9yZW1vdmVJY29uOiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5yaXNlT25Ib3Zlcikge1xuICAgICAgTC5Eb21FdmVudFxuICAgICAgICAub2ZmKHRoaXMuX2ljb24sICdtb3VzZW92ZXInLCB0aGlzLl9icmluZ1RvRnJvbnQpXG4gICAgICAgIC5vZmYodGhpcy5faWNvbiwgJ21vdXNlb3V0JywgdGhpcy5fcmVzZXRaSW5kZXgpO1xuICAgIH1cblxuICAgIHRoaXMuX21hcC5fcGFuZXMubWFya2VyUGFuZS5yZW1vdmVDaGlsZCh0aGlzLl9pY29uKTtcblxuICAgIHRoaXMuX2ljb24gPSBudWxsO1xuICB9LFxuXG4gIF9yZW1vdmVTaGFkb3c6IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5fc2hhZG93KSB7XG4gICAgICB0aGlzLl9tYXAuX3BhbmVzLnNoYWRvd1BhbmUucmVtb3ZlQ2hpbGQodGhpcy5fc2hhZG93KTtcbiAgICB9XG4gICAgdGhpcy5fc2hhZG93ID0gbnVsbDtcbiAgfSxcblxuICBfc2V0UG9zOiBmdW5jdGlvbiAocG9zKSB7XG4gICAgTC5Eb21VdGlsLnNldFBvc2l0aW9uKHRoaXMuX2ljb24sIHBvcyk7XG5cbiAgICBpZiAodGhpcy5fc2hhZG93KSB7XG4gICAgICBMLkRvbVV0aWwuc2V0UG9zaXRpb24odGhpcy5fc2hhZG93LCBwb3MpO1xuICAgIH1cblxuICAgIHRoaXMuX3pJbmRleCA9IHBvcy55ICsgdGhpcy5vcHRpb25zLnpJbmRleE9mZnNldDtcblxuICAgIHRoaXMuX3Jlc2V0WkluZGV4KCk7XG4gIH0sXG5cbiAgX3VwZGF0ZVpJbmRleDogZnVuY3Rpb24gKG9mZnNldCkge1xuICAgIHRoaXMuX2ljb24uc3R5bGUuekluZGV4ID0gdGhpcy5fekluZGV4ICsgb2Zmc2V0O1xuICB9LFxuXG4gIF9hbmltYXRlWm9vbTogZnVuY3Rpb24gKG9wdCkge1xuLy8gICAgdmFyIHBvcyA9IHRoaXMuX21hcC5fbGF0TG5nVG9OZXdMYXllclBvaW50KHRoaXMuX2xhdGxuZywgb3B0Lnpvb20sIG9wdC5jZW50ZXIpLnJvdW5kKCk7XG4vL1xuLy8gICAgdGhpcy5fc2V0UG9zKHBvcyk7XG4gIH0sXG5cbiAgX2luaXRJbnRlcmFjdGlvbjogZnVuY3Rpb24gKCkge1xuXG4gICAgaWYgKCF0aGlzLm9wdGlvbnMuY2xpY2thYmxlKSB7IHJldHVybjsgfVxuXG4gICAgLy8gVE9ETyByZWZhY3RvciBpbnRvIHNvbWV0aGluZyBzaGFyZWQgd2l0aCBNYXAvUGF0aC9ldGMuIHRvIERSWSBpdCB1cFxuXG4gICAgdmFyIGljb24gPSB0aGlzLl9pY29uLFxuICAgICAgZXZlbnRzID0gWydkYmxjbGljaycsICdtb3VzZWRvd24nLCAnbW91c2VvdmVyJywgJ21vdXNlb3V0JywgJ2NvbnRleHRtZW51J107XG5cbiAgICBMLkRvbVV0aWwuYWRkQ2xhc3MoaWNvbiwgJ2xlYWZsZXQtY2xpY2thYmxlJyk7XG4gICAgTC5Eb21FdmVudC5vbihpY29uLCAnY2xpY2snLCB0aGlzLl9vbk1vdXNlQ2xpY2ssIHRoaXMpO1xuICAgIEwuRG9tRXZlbnQub24oaWNvbiwgJ2tleXByZXNzJywgdGhpcy5fb25LZXlQcmVzcywgdGhpcyk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGV2ZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgTC5Eb21FdmVudC5vbihpY29uLCBldmVudHNbaV0sIHRoaXMuX2ZpcmVNb3VzZUV2ZW50LCB0aGlzKTtcbiAgICB9XG5cbiAgICBpZiAoTC5IYW5kbGVyLk1hcmtlckRyYWcpIHtcbiAgICAgIHRoaXMuZHJhZ2dpbmcgPSBuZXcgTC5IYW5kbGVyLk1hcmtlckRyYWcodGhpcyk7XG5cbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuZHJhZ2dhYmxlKSB7XG4gICAgICAgIHRoaXMuZHJhZ2dpbmcuZW5hYmxlKCk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIF9vbk1vdXNlQ2xpY2s6IGZ1bmN0aW9uIChlKSB7XG4gICAgdmFyIHdhc0RyYWdnZWQgPSB0aGlzLmRyYWdnaW5nICYmIHRoaXMuZHJhZ2dpbmcubW92ZWQoKTtcblxuICAgIGlmICh0aGlzLmhhc0V2ZW50TGlzdGVuZXJzKGUudHlwZSkgfHwgd2FzRHJhZ2dlZCkge1xuICAgICAgTC5Eb21FdmVudC5zdG9wUHJvcGFnYXRpb24oZSk7XG4gICAgfVxuXG4gICAgaWYgKHdhc0RyYWdnZWQpIHsgcmV0dXJuOyB9XG5cbiAgICBpZiAoKCF0aGlzLmRyYWdnaW5nIHx8ICF0aGlzLmRyYWdnaW5nLl9lbmFibGVkKSAmJiB0aGlzLl9tYXAuZHJhZ2dpbmcgJiYgdGhpcy5fbWFwLmRyYWdnaW5nLm1vdmVkKCkpIHsgcmV0dXJuOyB9XG5cbiAgICB0aGlzLmZpcmUoZS50eXBlLCB7XG4gICAgICBvcmlnaW5hbEV2ZW50OiBlLFxuLy8gICAgICBsYXRsbmc6IHRoaXMuX2xhdGxuZ1xuICAgICAgcG9pbnQ6IHRoaXMuX3BvaW50XG4gICAgfSk7XG4gIH0sXG5cbiAgX29uS2V5UHJlc3M6IGZ1bmN0aW9uIChlKSB7XG4gICAgaWYgKGUua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgIHRoaXMuZmlyZSgnY2xpY2snLCB7XG4gICAgICAgIG9yaWdpbmFsRXZlbnQ6IGUsXG4vLyAgICAgICAgbGF0bG5nOiB0aGlzLl9sYXRsbmdcbiAgICAgICAgcG9pbnQ6IHRoaXMuX3BvaW50XG4gICAgICB9KTtcbiAgICB9XG4gIH0sXG5cbiAgX2ZpcmVNb3VzZUV2ZW50OiBmdW5jdGlvbiAoZSkge1xuXG4gICAgdGhpcy5maXJlKGUudHlwZSwge1xuICAgICAgb3JpZ2luYWxFdmVudDogZSxcbi8vICAgICAgbGF0bG5nOiB0aGlzLl9sYXRsbmdcbiAgICAgIHBvaW50OiB0aGlzLl9wb2ludFxuICAgIH0pO1xuXG4gICAgLy8gVE9ETyBwcm9wZXIgY3VzdG9tIGV2ZW50IHByb3BhZ2F0aW9uXG4gICAgLy8gdGhpcyBsaW5lIHdpbGwgYWx3YXlzIGJlIGNhbGxlZCBpZiBtYXJrZXIgaXMgaW4gYSBGZWF0dXJlR3JvdXBcbiAgICBpZiAoZS50eXBlID09PSAnY29udGV4dG1lbnUnICYmIHRoaXMuaGFzRXZlbnRMaXN0ZW5lcnMoZS50eXBlKSkge1xuICAgICAgTC5Eb21FdmVudC5wcmV2ZW50RGVmYXVsdChlKTtcbiAgICB9XG4gICAgaWYgKGUudHlwZSAhPT0gJ21vdXNlZG93bicpIHtcbiAgICAgIEwuRG9tRXZlbnQuc3RvcFByb3BhZ2F0aW9uKGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBMLkRvbUV2ZW50LnByZXZlbnREZWZhdWx0KGUpO1xuICAgIH1cbiAgfSxcblxuICBzZXRPcGFjaXR5OiBmdW5jdGlvbiAob3BhY2l0eSkge1xuICAgIHRoaXMub3B0aW9ucy5vcGFjaXR5ID0gb3BhY2l0eTtcbiAgICBpZiAodGhpcy5fbWFwKSB7XG4gICAgICB0aGlzLl91cGRhdGVPcGFjaXR5KCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG5cbiAgX3VwZGF0ZU9wYWNpdHk6IGZ1bmN0aW9uICgpIHtcbiAgICBMLkRvbVV0aWwuc2V0T3BhY2l0eSh0aGlzLl9pY29uLCB0aGlzLm9wdGlvbnMub3BhY2l0eSk7XG4gICAgaWYgKHRoaXMuX3NoYWRvdykge1xuICAgICAgTC5Eb21VdGlsLnNldE9wYWNpdHkodGhpcy5fc2hhZG93LCB0aGlzLm9wdGlvbnMub3BhY2l0eSk7XG4gICAgfVxuICB9LFxuXG4gIF9icmluZ1RvRnJvbnQ6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLl91cGRhdGVaSW5kZXgodGhpcy5vcHRpb25zLnJpc2VPZmZzZXQpO1xuICB9LFxuXG4gIF9yZXNldFpJbmRleDogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuX3VwZGF0ZVpJbmRleCgwKTtcbiAgfVxufSk7XG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgTmljaG9sYXMgSGFsbGFoYW4gPG5oYWxsYWhhbkBzcGF0aWFsZGV2LmNvbT5cbiAqICAgICAgIG9uIDQvNy8xNC5cbiAqL1xuXG52YXIgZmVhdHVyZVNldHMgPSBbXTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGZlYXR1cmVTZXRzOiBmZWF0dXJlU2V0cyxcbiAgcGF0aFVwZGF0ZWQ6IGZ1bmN0aW9uKGxlYWZsZXRJZCkge1xuICAgIGZvcih2YXIgaT0gMCwgbGVuPWZlYXR1cmVTZXRzLmxlbmd0aDsgaTxsZW47ICsraSkge1xuICAgICAgZmVhdHVyZVNldHNbaV0uX3BhdGhVcGRhdGVkKGxlYWZsZXRJZCk7XG4gICAgfVxuICB9LFxuICBsYWJlbHM6IHt9XG59O1xuXG5yZXF1aXJlKCcuL2xlYWZsZXQtcGF0Y2gnKTtcbiIsIi8qKlxuICogQ3JlYXRlZCBieSBOaWNob2xhcyBIYWxsYWhhbiA8bmhhbGxhaGFuQHNwYXRpYWxkZXYuY29tPlxuICogICAgICAgb24gNS83LzE0LlxuICpcbiAqIFRoaXMgaXMgYSBwYXRjaCB0aGF0IG92ZXJyaWRlcyB0aGUgTC5Qb2x5bGluZSBjbGFzcyBpbiBMZWFmbGV0IDAuNy4yXG4gKlxuICogQWxsIHRoaXMgaXMgZG9pbmcgaXMgYnJvYWRjYXN0aW5nIHRoZSBsZWFmbGV0IGlkIGZvciB0aGUgcGF0aCB0aGF0IGlzIGJlaW5nIHJlZHJhd24uXG4gKi9cblxudmFyIGZlYXR1cmVsYWJlbCA9IHJlcXVpcmUoJy4vZmVhdHVyZWxhYmVsJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG5cbiAgLyoqXG4gICAqIExlYWZsZXQgcHV0cyB0b28gbXVjaCBvZiBhIGJ1ZmZlciBhcm91bmQgdGhlIGFyZWEgaW4gd2hpY2ggYSBzaGFwZVxuICAgKiBpcyBjbGlwcGVkLCB0aHVzIHdlIHdlcmUgbm90IGdldHRpbmcgZ29vZCBjZW50cm9pZHMgZm9yIHNoYXBlcyB0aGF0XG4gICAqIHdlcmUgYmVpbmcgY2xpcHBlZC4gVGhpcyByZXNvbHZlcyB0aGF0LlxuICAgKi9cbiAgTC5QYXRoLkNMSVBfUEFERElORyA9IDAuMDI7XG5cbiAgTC5Qb2x5bGluZS5wcm90b3R5cGUuX3VwZGF0ZVBhdGggPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCF0aGlzLl9tYXApIHsgcmV0dXJuOyB9XG5cbiAgICB0aGlzLl9jbGlwUG9pbnRzKCk7XG4gICAgdGhpcy5fc2ltcGxpZnlQb2ludHMoKTtcblxuICAgIEwuUGF0aC5wcm90b3R5cGUuX3VwZGF0ZVBhdGguY2FsbCh0aGlzKTtcblxuICAgIC8qKlxuICAgICAqIE5vdGlmaWVzIGZlYXR1cmVsYWJlbCB0aGF0IGEgcGF0aCBmb3IgYSB2ZWN0b3IgaGFzIGJlZW4gcmVkcmF3biBhbmQgdGhlIGxhYmVsIHNob3VsZFxuICAgICAqIHBvc2l0aW9uZWQgb3IgcmVwb3NpdGlvbmVkLlxuICAgICAqL1xuICAgIGZlYXR1cmVsYWJlbC5wYXRoVXBkYXRlZCh0aGlzLl9sZWFmbGV0X2lkKTtcbiAgfTtcblxuICAvKipcbiAgICogRml4ZXMgYSBMZWFmbGV0IGJ1ZyB3aGVyZSBhIHJlZmVyZW5jZSB0byB0aGlzLl9tYXAgaXMgc29tZXRpbWVzIG1pc3NpbmcuXG4gICAqL1xuICBMLlBhdGgucHJvdG90eXBlLmJyaW5nVG9Gcm9udCA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIXRoaXMuX21hcCkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHZhciByb290ID0gdGhpcy5fbWFwLl9wYXRoUm9vdCxcbiAgICAgICAgcGF0aCA9IHRoaXMuX2NvbnRhaW5lcjtcblxuICAgIGlmIChwYXRoICYmIHJvb3QubGFzdENoaWxkICE9PSBwYXRoKSB7XG4gICAgICByb290LmFwcGVuZENoaWxkKHBhdGgpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxufSgpOyIsIi8qKlxuICogVGhpcyBpcyB0aGUgZW50cnkgcG9pbnQgb2YgdGhlIGFwcGxpY2F0aW9uLiBXZSBkZWNsYXJlIHRoZSBtYWluIG1vZHVsZSBoZXJlIGFuZCB0aGVuIGNvbmZpZ3VyZSB0aGUgbWFpbiByb3V0ZXJcbiAqIHRoYXQgY3JlYXRlcyBjb3JyZXNwb25kaW5nIHZpZXdzLiBUaGUgYXJyYXkgcGFyYW1ldGVyIGZvciBtb2R1bGUgZGVjbGFyZXMgdGhpcyBtb2R1bGUncyBkZXBlbmRlbmNpZXMuXG4gKi9cbnZhciBHZW9Bbmd1bGFyID0gYW5ndWxhci5tb2R1bGUoJ0dlb0FuZ3VsYXInLCBbJ2FuZ3VsYXJGaWxlVXBsb2FkJywgJ25nQ29va2llcycsICduZ1Jlc291cmNlJywgJ25nU2FuaXRpemUnLCAnbmdSb3V0ZScsICd1aS5yb3V0ZXInLCAnbmdBbmltYXRlJywgJ2xlYWZsZXQtZGlyZWN0aXZlJywgJ3VpLmJvb3RzdHJhcCcsICd1aS5zbGlkZXInXSk7XG5cbkdlb0FuZ3VsYXIucnVuKGZ1bmN0aW9uICgkcm9vdFNjb3BlLCAkc3RhdGUsICRzdGF0ZVBhcmFtcykge1xuXG4gIC8vIEl0J3MgdmVyeSBoYW5keSB0byBhZGQgcmVmZXJlbmNlcyB0byAkc3RhdGUgYW5kICRzdGF0ZVBhcmFtcyB0byB0aGUgJHJvb3RTY29wZVxuICAvLyBzbyB0aGF0IHlvdSBjYW4gYWNjZXNzIHRoZW0gZnJvbSBhbnkgc2NvcGUgd2l0aGluIHlvdXIgYXBwbGljYXRpb25zLkZvciBleGFtcGxlLFxuICAvLyA8bGkgdWktc3JlZi1hY3RpdmU9XCJhY3RpdmUgfVwiPiB3aWxsIHNldCB0aGUgPGxpPiAvLyB0byBhY3RpdmUgd2hlbmV2ZXJcbiAgLy8gJ2NvbnRhY3RzLmxpc3QnIG9yIG9uZSBvZiBpdHMgZGVjZW5kZW50cyBpcyBhY3RpdmUuXG4gICRyb290U2NvcGUuJHN0YXRlID0gJHN0YXRlO1xuICAkcm9vdFNjb3BlLiRzdGF0ZVBhcmFtcyA9ICRzdGF0ZVBhcmFtcztcblxuICBkZWJ1Zy4kc3RhdGUgPSAkc3RhdGU7XG4gIGRlYnVnLiRzdGF0ZVBhcmFtcyA9ICRzdGF0ZVBhcmFtcztcblxuICAkcm9vdFNjb3BlLmlzU3RhdGUgPSBmdW5jdGlvbiAoc3RhdGVOYW1lKSB7XG4gICAgcmV0dXJuICRzdGF0ZS4kY3VycmVudC5uYW1lID09PSBzdGF0ZU5hbWU7XG4gIH07XG5cbiAgJHJvb3RTY29wZS5pc1BhcmFtID0gZnVuY3Rpb24ocGFyYW1OYW1lKSB7XG4gICAgdmFyIGJvb2wgPSAkc3RhdGVQYXJhbXNbcGFyYW1OYW1lXTtcbiAgICBpZiAoIWJvb2wpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgJHJvb3RTY29wZS5pc05vdFBhcmFtID0gZnVuY3Rpb24ocGFyYW1OYW1lKSB7XG4gICAgdmFyIGJvb2wgPSAkc3RhdGVQYXJhbXNbcGFyYW1OYW1lXTtcbiAgICBpZiAoIWJvb2wpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgJHJvb3RTY29wZS50b2dnbGVQYXJhbSA9IGZ1bmN0aW9uKHBhcmFtTmFtZSkge1xuICAgIHZhciBib29sID0gJHN0YXRlUGFyYW1zW3BhcmFtTmFtZV07XG4gICAgaWYgKCFib29sKSB7XG4gICAgICAvLyBtdXRleCBsb2dpYyB0aGF0IG1ha2VzIG9ubHkgMSBwYW5lbCBvcGVuIGF0IGEgdGltZVxuICAgICAgZm9yICh2YXIgcGFyYW0gaW4gJHN0YXRlUGFyYW1zKSB7XG4gICAgICAgIGlmICgkc3RhdGVQYXJhbXNbcGFyYW1dID09PSAnb3BlbicpIHtcbiAgICAgICAgICAkc3RhdGVQYXJhbXNbcGFyYW1dID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgJHN0YXRlUGFyYW1zW3BhcmFtTmFtZV0gPSAnb3Blbic7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlbGV0ZSAkc3RhdGVQYXJhbXNbcGFyYW1OYW1lXTtcbiAgICB9XG4gICAgdmFyIHN0YXRlID0gJHN0YXRlLmN1cnJlbnQubmFtZSB8fCAnbWFpbic7XG4gICAgJHN0YXRlLmdvKHN0YXRlLCAkc3RhdGVQYXJhbXMpO1xuICB9O1xuXG4gICRyb290U2NvcGUuc2V0UGFyYW1XaXRoVmFsID0gZnVuY3Rpb24gKHBhcmFtTmFtZSwgdmFsKSB7XG4gICAgJHN0YXRlUGFyYW1zW3BhcmFtTmFtZV0gPSB2YWw7XG4gICAgdmFyIHN0YXRlID0gJHN0YXRlLmN1cnJlbnQubmFtZSB8fCAnbWFpbic7XG4gICAgJHN0YXRlLmdvKHN0YXRlLCAkc3RhdGVQYXJhbXMpO1xuICB9O1xuICBkZWJ1Zy4kcm9vdFNjb3BlID0gJHJvb3RTY29wZTtcblxuXG4gICRyb290U2NvcGUub3BlblBhcmFtID0gZnVuY3Rpb24ocGFyYW1OYW1lKSB7XG4gICAgdmFyIGJvb2wgPSAkc3RhdGVQYXJhbXNbcGFyYW1OYW1lXTtcbiAgICBpZiAoIWJvb2wpIHtcbiAgICAgIC8vIG11dGV4IGxvZ2ljIHRoYXQgbWFrZXMgb25seSAxIHBhbmVsIG9wZW4gYXQgYSB0aW1lXG4gICAgICBmb3IgKHZhciBwYXJhbSBpbiAkc3RhdGVQYXJhbXMpIHtcbiAgICAgICAgaWYgKCRzdGF0ZVBhcmFtc1twYXJhbV0gPT09ICdvcGVuJykge1xuICAgICAgICAgICRzdGF0ZVBhcmFtc1twYXJhbV0gPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAkc3RhdGVQYXJhbXNbcGFyYW1OYW1lXSA9ICdvcGVuJztcbiAgICAgIHZhciBzdGF0ZSA9ICRzdGF0ZS5jdXJyZW50Lm5hbWUgfHwgJ21haW4nO1xuICAgICAgJHN0YXRlLmdvKHN0YXRlLCAkc3RhdGVQYXJhbXMpO1xuICAgIH1cbiAgfTtcblxuICAkcm9vdFNjb3BlLmNsb3NlUGFyYW0gPSBmdW5jdGlvbihwYXJhbU5hbWUpIHtcbiAgICB2YXIgYm9vbCA9ICRzdGF0ZVBhcmFtc1twYXJhbU5hbWVdO1xuICAgIGlmIChib29sKSB7XG4gICAgICBkZWxldGUgJHN0YXRlUGFyYW1zW3BhcmFtTmFtZV07XG4gICAgICB2YXIgc3RhdGUgPSAkc3RhdGUuY3VycmVudC5uYW1lIHx8ICdtYWluJztcbiAgICAgICRzdGF0ZS5nbyhzdGF0ZSwgJHN0YXRlUGFyYW1zKTtcbiAgICB9XG4gIH07XG5cbiAgJHJvb3RTY29wZS5pc05vdFN0YXRlID0gZnVuY3Rpb24gKHN0YXRlTmFtZSkge1xuICAgIHJldHVybiAkc3RhdGUuJGN1cnJlbnQubmFtZSAhPT0gc3RhdGVOYW1lO1xuICB9O1xuXG4gIHdpbmRvdy4kc3RhdGUgPSAkc3RhdGU7XG4gIHdpbmRvdy4kc3RhdGVQYXJhbXMgPSAkc3RhdGVQYXJhbXM7XG5cbn0pO1xuXG5HZW9Bbmd1bGFyLmNvbmZpZyhmdW5jdGlvbiAoJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcikge1xuICAkdXJsUm91dGVyUHJvdmlkZXJcbiAgICAud2hlbignL2RlZmF1bHQnLCAnL21hcEAwLDAsMihzYXRlbGxpdGUsdGhlbWVjb3VudCknKVxuICAgIC53aGVuKCcvcGhsJywgJy9tYXBAMTEuNzU5ODE1LDEyMS44OTMzMTEsNihyZWRjcm9zcyxwaGwpJylcbiAgICAub3RoZXJ3aXNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdkZWZhdWx0Um91dGUnKSB8fCAnL21hcEAwLDAsMihzYXRlbGxpdGUsdGhlbWVjb3VudCknKTtcblxuICAkc3RhdGVQcm92aWRlclxuICAgIC5zdGF0ZSgnbWFpbicsIHtcbiAgICAgIHVybDogJy9tYXBAOmxhdCw6bG5nLDp6b29tKCpsYXllcnMpP3RpdGxlJnpvb20tZXh0ZW50JnN0b3JpZXMmbGF5ZXJzLXBhbmVsJmZpbHRlcnMtcGFuZWwmZmlsdGVycyZsZWdlbmQmYmFzZW1hcHMmaW5mbyZ0aGVtZSZkZXRhaWxzLXBhbmVsJnNlYXJjaC1wYW5lbCZzZl9pZCZsZXZlbCcsXG4gICAgICB2aWV3czoge1xuICAgICAgICAnZGV0YWlscyc6IHtcbiAgICAgICAgICB0ZW1wbGF0ZTogJyAnLFxuICAgICAgICAgIGNvbnRyb2xsZXI6ICdNYWluQ3RybCdcbiAgICAgICAgfSxcbiAgICAgICAgJ3RoZW1lJzoge1xuICAgICAgICAgIHRlbXBsYXRlVXJsOiAndmlld3MvdGhlbWUuaHRtbCcsXG4gICAgICAgICAgY29udHJvbGxlcjogJ1RoZW1lQ3RybCdcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gICAgLnN0YXRlKCd1cGxvYWQnLCB7XG4gICAgICB1cmw6ICcvbWFwQDpsYXQsOmxuZyw6em9vbSgqbGF5ZXJzKS91cGxvYWQ/dGl0bGUmem9vbS1leHRlbnQmc3RvcmllcyZsYXllcnMtcGFuZWwmZmlsdGVycy1wYW5lbCZmaWx0ZXJzJmxlZ2VuZCZiYXNlbWFwcyZpbmZvJnRoZW1lJmRldGFpbHMtcGFuZWwmc2VhcmNoLXBhbmVsJnNmX2lkJmxldmVsJyxcbiAgICAgIHZpZXdzOiB7XG4gICAgICAgICdkZXRhaWxzJzoge1xuICAgICAgICAgIHRlbXBsYXRlOiAnICcsXG4gICAgICAgICAgY29udHJvbGxlcjogJ01haW5DdHJsJ1xuICAgICAgICB9LFxuICAgICAgICAndXBsb2FkJzoge1xuICAgICAgICAgIHRlbXBsYXRlVXJsOiAndmlld3MvdXBsb2FkLmh0bWwnLFxuICAgICAgICAgIGNvbnRyb2xsZXI6ICdVcGxvYWRDdHJsJ1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgICAuc3RhdGUoJ2V4cG9ydCcsIHtcbiAgICAgICAgICB1cmw6ICcvbWFwQDpsYXQsOmxuZyw6em9vbSgqbGF5ZXJzKS9leHBvcnQ/dGl0bGUmem9vbS1leHRlbnQmc3RvcmllcyZsYXllcnMtcGFuZWwmZmlsdGVycy1wYW5lbCZmaWx0ZXJzJmxlZ2VuZCZiYXNlbWFwcyZpbmZvJnRoZW1lJmRldGFpbHMtcGFuZWwmc2VhcmNoLXBhbmVsJnNmX2lkJmxldmVsJyxcbiAgICAgICAgICB2aWV3czoge1xuICAgICAgICAgICAgICAnZGV0YWlscyc6IHtcbiAgICAgICAgICAgICAgICAgIHRlbXBsYXRlOiAnICcsXG4gICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnTWFpbkN0cmwnXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICdleHBvcnQnOiB7XG4gICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3ZpZXdzL2V4cG9ydC5odG1sJyxcbiAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdFeHBvcnRDdHJsJ1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICB9KTtcblxufSk7XG5cblxuR2VvQW5ndWxhci5kaXJlY3RpdmUoJ3NlbGVjdE9uQ2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB7XG4gICAgcmVzdHJpY3Q6ICdBJyxcbiAgICBsaW5rOiBmdW5jdGlvbiAoc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSB7XG4gICAgICBlbGVtZW50Lm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5zZWxlY3QoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcbn0pO1xuXG5cbmFuZ3VsYXIubW9kdWxlKCdHZW9Bbmd1bGFyJykuZGlyZWN0aXZlKCdteVNob3cnLCBmdW5jdGlvbigkYW5pbWF0ZSkge1xuICByZXR1cm4ge1xuICAgIHNjb3BlOiB7XG4gICAgICAnbXlTaG93JzogJz0nLFxuICAgICAgJ2FmdGVyU2hvdyc6ICcmJyxcbiAgICAgICdhZnRlckhpZGUnOiAnJidcbiAgICB9LFxuICAgIGxpbms6IGZ1bmN0aW9uKHNjb3BlLCBlbGVtZW50KSB7XG4gICAgICBzY29wZS4kd2F0Y2goJ215U2hvdycsIGZ1bmN0aW9uKHNob3csIG9sZFNob3cpIHtcbiAgICAgICAgaWYgKHNob3cpIHtcbiAgICAgICAgICAkYW5pbWF0ZS5yZW1vdmVDbGFzcyhlbGVtZW50LCAnbmctaGlkZScsIHNjb3BlLmFmdGVyU2hvdyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFzaG93KSB7XG4gICAgICAgICAgJGFuaW1hdGUuYWRkQ2xhc3MoZWxlbWVudCwgJ25nLWhpZGUnLCBzY29wZS5hZnRlckhpZGUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn0pO1xuXG5cbnJlcXVpcmUoJy4vc2VydmljZXMvTGF5ZXJDb25maWcnKTtcbnJlcXVpcmUoJy4vc2VydmljZXMvU3Rvcmllc0NvbmZpZycpO1xucmVxdWlyZSgnLi9zZXJ2aWNlcy9WZWN0b3IvVmVjdG9yUHJvdmlkZXInKTtcbnJlcXVpcmUoJy4vc2VydmljZXMvRG9udXRzJyk7XG5yZXF1aXJlKCcuL2NvbnRyb2xsZXJzL21haW4nKTtcbnJlcXVpcmUoJy4vY29udHJvbGxlcnMvbWFwJyk7XG5yZXF1aXJlKCcuL2NvbnRyb2xsZXJzL2RldGFpbHMnKTtcbnJlcXVpcmUoJy4vY29udHJvbGxlcnMvbmF2YmFyJyk7XG5yZXF1aXJlKCcuL2NvbnRyb2xsZXJzL3NpZGUtdmlldycpO1xucmVxdWlyZSgnLi9jb250cm9sbGVycy9zdG9yaWVzJyk7XG5yZXF1aXJlKCcuL2NvbnRyb2xsZXJzL2xheWVycycpO1xucmVxdWlyZSgnLi9jb250cm9sbGVycy9maWx0ZXJzJyk7XG5yZXF1aXJlKCcuL2NvbnRyb2xsZXJzL2xlZ2VuZCcpO1xucmVxdWlyZSgnLi9jb250cm9sbGVycy9pbmZvJyk7XG5yZXF1aXJlKCcuL2NvbnRyb2xsZXJzL2Jhc2VtYXBzJyk7XG5yZXF1aXJlKCcuL2NvbnRyb2xsZXJzL2JyZWFkY3J1bWJzJyk7XG5yZXF1aXJlKCcuL2NvbnRyb2xsZXJzL3pvb20tZXh0ZW50Jyk7XG5yZXF1aXJlKCcuL2NvbnRyb2xsZXJzL3RoZW1lJyk7XG5yZXF1aXJlKCcuL2NvbnRyb2xsZXJzL3VwbG9hZCcpO1xucmVxdWlyZSgnLi9jb250cm9sbGVycy9zZWFyY2gnKTtcbnJlcXVpcmUoJy4vY29udHJvbGxlcnMvZXhwb3J0Jyk7XG5cbiIsIi8qKlxuICogQ3JlYXRlZCBieSBSeWFuIFdoaXRsZXkgPHJ3aGl0bGV5QHNwYXRpYWxkZXYuY29tPlxuICogICAgICAgb24gMy8yOC8xNC5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdHZW9Bbmd1bGFyJykuY29udHJvbGxlcignQmFzZW1hcHNDdHJsJywgZnVuY3Rpb24oJHNjb3BlLCAkc3RhdGUsICRzdGF0ZVBhcmFtcywgTGF5ZXJDb25maWcpIHtcbiAgJHNjb3BlLmJhc2VtYXBzID0gTGF5ZXJDb25maWcuYmFzZW1hcHM7XG5cbiAgJHNjb3BlLm5hbWUgPSBmdW5jdGlvbiAoYWxpYXMpIHtcbiAgICByZXR1cm4gTGF5ZXJDb25maWdbYWxpYXNdLm5hbWUgfHwgYWxpYXM7XG4gIH07XG5cbiAgJHNjb3BlLmdldExheWVycyA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICghICRzdGF0ZVBhcmFtcyB8fCAhJHN0YXRlUGFyYW1zLmxheWVycykge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgICB2YXIgbGF5ZXJzID0gJHN0YXRlUGFyYW1zLmxheWVycy5zcGxpdCgnLCcpO1xuICAgIHJldHVybiBsYXllcnM7XG4gIH07XG5cbiAgJHNjb3BlLmN1cnJlbnRCYXNlbWFwID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBsYXllcnMgPSAkc2NvcGUuZ2V0TGF5ZXJzKCk7XG4gICAgaWYgKCFsYXllcnMpIHJldHVybiBudWxsO1xuICAgIHJldHVybiBsYXllcnNbMF07XG4gIH07XG5cbiAgJHNjb3BlLnN3YXBCYXNlbWFwID0gZnVuY3Rpb24gKGJhc2VtYXApIHtcbiAgICB2YXIgbGF5ZXJzID0gJHNjb3BlLmdldExheWVycygpO1xuICAgIGxheWVyc1swXSA9IGJhc2VtYXA7XG4gICAgbGF5ZXJzID0gbGF5ZXJzLmpvaW4oJywnKTtcbiAgICBhbmd1bGFyLmV4dGVuZCgkc3RhdGVQYXJhbXMsIHtcbiAgICAgIGxheWVyczogbGF5ZXJzXG4gICAgfSk7XG4gICAgJHN0YXRlLmdvKCdtYWluJywgJHN0YXRlUGFyYW1zKTtcbiAgfTtcblxuICAkc2NvcGUuaXNBY3RpdmVCYXNlbWFwID0gZnVuY3Rpb24oYmFzZW1hcCkge1xuICAgIHJldHVybiAkc2NvcGUuY3VycmVudEJhc2VtYXAoKSA9PT0gYmFzZW1hcDtcbiAgfTtcblxufSk7IiwiLyoqXG4gKiBDcmVhdGVkIGJ5IFJ5YW4gV2hpdGxleSA8cndoaXRsZXlAc3BhdGlhbGRldi5jb20+XG4gKiAgICAgICBvbiA0LzE3LzE0LlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ0dlb0FuZ3VsYXInKS5jb250cm9sbGVyKCdCcmVhZGNydW1ic0N0cmwnLCBmdW5jdGlvbigkc2NvcGUsICRyb290U2NvcGUsICRzdGF0ZSwgJHN0YXRlUGFyYW1zLCAkaHR0cCwgVmVjdG9yUHJvdmlkZXIpIHtcblxuICAvKipcbiAgICogRml4ZXMgQ2hyb21lIE1hZ25pZnlpbmcgR2xhc3MgSXNzdWUgIzIwNlxuICAgKi9cbi8vICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuLy8gICAgdmFyIHRvb2xiYXIgPSAkKCcjTWFwVXBwZXJSaWdodFRvb2xiYXJXcmFwcGVyJyk7XG4vLyAgICB3aGlsZSAoIHRvb2xiYXIuaGVpZ2h0KCkgPiA0MCApIHtcbi8vICAgICAgdG9vbGJhci53aWR0aCggdG9vbGJhci53aWR0aCgpICsgMSApO1xuLy8gICAgfVxuLy8gIH0sIDEwMDApO1xuXG5cblx0Ly92YXIgZnVsbFN0YWNrVVJMID0gY29uZmlnLmNodWJic1BhdGgoJ3NlcnZpY2VzL2dldEFkbWluU3RhY2s/Zm9ybWF0PWpzb24mYWRtaW5sZXZlbD06YWRtaW5sZXZlbCZzdGFja2lkPTpndWlkJmRhdGFzb3VyY2U9Z2FkbScpO1xuXHR2YXIgZnVsbFN0YWNrVVJMID0gY29uZmlnLmNodWJic1BhdGgoJ3NlcnZpY2VzL2N1c3RvbS9jdXN0b21fb3BlcmF0aW9uP25hbWU9R2V0QnJlYWRDcnVtYnNXaXRoVGhlbWVDb3VudHNCeUlEJmZvcm1hdD1qc29uJmdhZG1fbGV2ZWw9OmFkbWlubGV2ZWwmaWRzPTpndWlkJmRhdGFzb3VyY2U9Z2FkbSZ0aGVtZT1wcm9qZWN0cycpO1xuXG5cdHZhciBicmVhZENydW1iRmVhdHVyZXMgPSB7fTsgLy9TdG9yZSByZXN1bHRzIG9mIHRoZSBzdGFjayBsb29rdXAgaGVyZSBzbyB3ZSBjYW4gcmV1c2UuXG5cblx0JHNjb3BlLiRvbignY2VudGVyLWZlYXR1cmUnLCBmdW5jdGlvbiAoZXZlbnQsIGZlYXRPYmopIHtcblxuXHRcdC8vU2VlIGlmIHRoZSBmZWF0dXJlIHN0YWNrIGhhcyBhbHJlYWR5IGJlZW4gc3RvcmVkXG5cdFx0aWYoYnJlYWRDcnVtYkZlYXR1cmVzW2ZlYXRPYmoubGV2ZWxdICYmIGJyZWFkQ3J1bWJGZWF0dXJlc1tmZWF0T2JqLmxldmVsXVtmZWF0T2JqLmd1aWRdKXtcblx0XHRcdC8vQWxyZWFkeSBoYXZlIGl0XG5cdFx0XHR1cGRhdGVCcmVhZENydW1icyhicmVhZENydW1iRmVhdHVyZXNbZmVhdE9iai5sZXZlbF1bZmVhdE9iai5ndWlkXSwgZmVhdE9iai5sZXZlbCk7XG5cdFx0fVxuXHRcdGVsc2V7XG5cdFx0XHQvL0dvIGZldGNoIGl0XG5cdFx0XHQvL1VzaW5nIHRoZSBDZW50ZXIgRmVhdHVyZSdzIEdVSUQsIGZldGNoIHRoZSBmdWxsIHN0YWNrIGRldGFpbHMuXG5cdFx0XHR2YXIgdXJsID0gZnVsbFN0YWNrVVJMLnJlcGxhY2UoJzphZG1pbmxldmVsJywgZmVhdE9iai5sZXZlbCkucmVwbGFjZSgnOmd1aWQnLCBmZWF0T2JqLmd1aWQpO1xuXHRcdFx0dmFyIHNlbGYgPSB0aGlzO1xuXG5cdFx0XHQvLyBGZXRjaCBmcm9tIHRoZSBzZXJ2ZXIgb25seSBpZiB3ZSBkb24ndCBoYXZlIGl0IGluIHRoZSBoYXNoXG5cdFx0XHQkaHR0cC5nZXQodXJsKS5zdWNjZXNzKGZ1bmN0aW9uIChyZXN1bHQsIHN0YXR1cykge1xuXG5cdFx0XHRcdGlmICghcmVzdWx0IHx8IHJlc3VsdC5lcnJvcikge1xuXHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoJ1VuYWJsZSB0byBmZXRjaCBmZWF0dXJlOiAnICsgcmVzdWx0LmVycm9yKTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR2YXIgcHJvcGVydGllcyA9IHJlc3VsdFswXTtcblxuXHRcdFx0XHQvL1VwZGF0ZVxuICAgICAgICAgICAgICAgIGlmKHByb3BlcnRpZXMpe1xuICAgICAgICAgICAgICAgICAgICB1cGRhdGVCcmVhZENydW1icyhwcm9wZXJ0aWVzLCBmZWF0T2JqLmxldmVsKTtcblxuICAgICAgICAgICAgICAgICAgICAvL1N0b3JlIGluIHRoZSBoYXNoLlxuICAgICAgICAgICAgICAgICAgICBpZihicmVhZENydW1iRmVhdHVyZXNbZmVhdE9iai5sZXZlbF0pe1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWRDcnVtYkZlYXR1cmVzW2ZlYXRPYmoubGV2ZWxdW3Byb3BlcnRpZXNbXCJndWlkXCIgKyBmZWF0T2JqLmxldmVsXV0gPSBwcm9wZXJ0aWVzO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhZENydW1iRmVhdHVyZXNbZmVhdE9iai5sZXZlbF0gPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFkQ3J1bWJGZWF0dXJlc1tmZWF0T2JqLmxldmVsXVtwcm9wZXJ0aWVzW1wiZ3VpZFwiICsgZmVhdE9iai5sZXZlbF1dID0gcHJvcGVydGllcztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlwiKTtcbiAgICAgICAgICAgICAgICB9XG5cdFx0XHR9KTtcblx0XHR9XG5cdH0pO1xuXG5cdGZ1bmN0aW9uIHVwZGF0ZUJyZWFkQ3J1bWJzKGZlYXRPYmosIGxldmVsKSB7XG5cdFx0Ly9VcGRhdGUgVGhlIEJyZWFkY3J1bWIgZGlzcGxheVxuXHRcdC8vQ2xlYXIgbG93ZXIgbGV2ZWwgc2NvcGUgaXRlbXMgaW4gY2FzZSB3ZSd2ZSB6b29tZWQgb3V0XG5cdFx0Zm9yICh2YXIgeCA9IGxldmVsOyB4IDw9IDU7IHgrKykge1xuXHRcdFx0Ly9udWxsIG91dCBhbnkgbGV2ZWwgdmFsdWVzIHRoYXQgYXJlIExPV0VSIHRoYW4gd2hhdCB3ZSdyZSBjdXJyZW50bHkgbG9va2luZyBhdFxuXHRcdFx0JHNjb3BlW1wibGV2ZWxcIiArIHhdID0gXCJcIjtcblx0XHRcdCRzY29wZVtcImZlYXRcIiArIHhdID0gbnVsbDtcblxuXHRcdFx0aWYoeCA9PSAtMSl7XG5cdFx0XHRcdCRzY29wZVtcImxldmVsYXJjXCJdID0gZmVhdE9ialtcIm5hbWVhcmNcIl07XG5cdFx0XHRcdCRzY29wZVtcImZlYXRhcmNcIl0gPSBmZWF0T2JqO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vdXNpbmcgdGhlIHJlcXVlc3RlZCBsZXZlbCwgZGlnIG91dCB0aGUgcHJvcGVydGllcyBmb3IgdGhhdCBsZXZlbCBhbmQgb25lcyBhYm92ZSBpdFxuXHRcdGZvciAodmFyIGkgPSBsZXZlbDsgaSA+PSAtMTsgaS0tKSB7XG5cdFx0XHRpZihpID09IC0xKXtcblx0XHRcdFx0JHNjb3BlW1wibGV2ZWxhcmNcIl0gPSBmZWF0T2JqW1wibmFtZWFyY1wiXTtcblx0XHRcdFx0JHNjb3BlW1wiZmVhdGFyY1wiXSA9IGZlYXRPYmo7XG5cdFx0XHR9XG5cdFx0XHQkc2NvcGVbXCJsZXZlbFwiICsgaV0gPSBmZWF0T2JqW1wibmFtZVwiICsgaV07XG5cdFx0XHQkc2NvcGVbXCJmZWF0XCIgKyBpXSA9IGZlYXRPYmo7XG5cdFx0fVxuXHR9XG5cbiAgJHNjb3BlLnpvb21Ub0dVSUQgPSBmdW5jdGlvbiAoZmVhdE9iaiwgbGV2ZWwpIHtcbiAgICAvL0dpdmVuIGEgR1VJRCwgem9vbSB0byB0aGUgZmVhdHVyZS5cblxuICAgIC8vR3JhYiB0aGUgZmVhdHVyZSBmcm9tIHRoZSBWZWN0b3JQcm92aWRlci5cbiAgICBWZWN0b3JQcm92aWRlci5mZXRjaEZlYXR1cmUoZmVhdE9ialtcImd1aWRcIiArIChsZXZlbCA+PSAwID8gbGV2ZWwgOiBcImFyY1wiKV0sIGxldmVsLCBudWxsLCBmdW5jdGlvbiAoZmVhdCkge1xuICAgICAgLy9NYWtlIGEgdGVtcCBnZW9qc29uIGxheWVyIGFuZCBhZGQgdGhlIGdlb2pzb24uXG4gICAgICAvL1RoZW4gZ3JhYiB0aGUgYm91bmRzIGZyb20gaXQgYW5kIHpvb20gdG8gaXQuXG5cbiAgICAgIHZhciBnamwgPSBMLmdlb0pzb24oZmVhdC5nZW9tZXRyeSk7XG4gICAgICAkc2NvcGUuJHBhcmVudC56b29tVG9Cb3VuZHMoZ2psLmdldEJvdW5kcygpKTtcbiAgICB9KTtcbiAgfTtcblxuICAkc2NvcGUuem9vbVRvV29ybGQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGJvdW5kcyA9IEwubGF0TG5nQm91bmRzKEwubGF0TG5nKC01MCwtMTc5KSwgTC5sYXRMbmcoNTAsMTc5KSk7XG4gICAgJHNjb3BlLiRwYXJlbnQuem9vbVRvQm91bmRzKGJvdW5kcyk7XG4gIH07XG5cbn0pO1xuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IE5pY2hvbGFzIEhhbGxhaGFuIDxuaGFsbGFoYW5Ac3BhdGlhbGRldi5jb20+XG4gKiAgICAgICBvbiA0LzkvMTQuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnR2VvQW5ndWxhcicpLmNvbnRyb2xsZXIoJ0RldGFpbHNDdHJsJywgZnVuY3Rpb24gKCRzY29wZSwgJHJvb3RTY29wZSwgJHN0YXRlLCAkc3RhdGVQYXJhbXMsICRodHRwLCBEb251dHMsICRmaWx0ZXIpIHtcblxuICAkc2NvcGUuZGV0YWlscyA9IHt9O1xuXG4gICRzY29wZS5zYWxlc2ZvcmNlVXJsID0gY29uZmlnLnNhbGVzZm9yY2VVcmw7XG5cbiAgJGh0dHAuZ2V0KCdzdWNjdWJ1c19naXRpZ25vcmUvc2Ytb2JqZWN0LWZpZWxkLWhhc2guanNvbicsIHtjYWNoZWQ6IHRydWV9KS5zdWNjZXNzKGZ1bmN0aW9uKHNmRmllbGRIYXNoKSB7XG4gICAgJHNjb3BlLnNmRmllbGRIYXNoID0gc2ZGaWVsZEhhc2g7XG4gIH0pO1xuXG4gICRzY29wZS5zaG93UmZhID0gZnVuY3Rpb24gKGRldGFpbHMsIHZhbHVlKSB7XG4gICAgZGV0YWlscy5zaG93UmZhID0gdHJ1ZTtcbiAgICB2YWx1ZS5zaG93UmZhID0gdHJ1ZTtcbiAgfTtcblxuICAkc2NvcGUuaGlkZVJmYSA9IGZ1bmN0aW9uIChkZXRhaWxzLCB2YWx1ZSkge1xuICAgIGRldGFpbHMuc2hvd1JmYSA9IGZhbHNlO1xuICAgIHZhbHVlLnNob3dSZmEgPSBmYWxzZTtcbiAgfTtcblxuICAkc2NvcGUuc2hvd0luZGljYXRvcnMgPSBmdW5jdGlvbiAoZGV0YWlscywgdmFsdWUpIHtcbiAgICBkZXRhaWxzLnNob3dJbmRpY2F0b3JzID0gdHJ1ZTtcbiAgICB2YWx1ZS5zaG93SW5kaWNhdG9ycyA9IHRydWU7XG4gIH07XG5cbiAgJHNjb3BlLmhpZGVJbmRpY2F0b3JzID0gZnVuY3Rpb24gKGRldGFpbHMsIHZhbHVlKSB7XG4gICAgZGV0YWlscy5zaG93SW5kaWNhdG9ycyA9IGZhbHNlO1xuICAgIHZhbHVlLnNob3dJbmRpY2F0b3JzID0gZmFsc2U7XG4gIH07XG5cbiAgJHNjb3BlLnNob3dSaXNrcyA9IGZ1bmN0aW9uIChkZXRhaWxzLCB2YWx1ZSkge1xuICAgICAgZGV0YWlscy5zaG93Umlza3MgPSB0cnVlO1xuICAgICAgdmFsdWUuc2hvd1Jpc2tzID0gdHJ1ZTtcbiAgfTtcblxuICAkc2NvcGUuaGlkZVJpc2tzID0gZnVuY3Rpb24gKGRldGFpbHMsIHZhbHVlKSB7XG4gICAgICBkZXRhaWxzLnNob3dSaXNrcyA9IGZhbHNlO1xuICAgICAgdmFsdWUuc2hvd1Jpc2tzID0gZmFsc2U7XG4gIH07XG5cbiAgJHNjb3BlLnNob3dTdGF0dXNlcyA9IGZ1bmN0aW9uIChkZXRhaWxzLCB2YWx1ZSkge1xuICAgICAgZGV0YWlscy5zaG93U3RhdHVzZXMgPSB0cnVlO1xuICAgICAgdmFsdWUuc2hvd1N0YXR1c2VzID0gdHJ1ZTtcbiAgfTtcblxuICAkc2NvcGUuaGlkZVN0YXR1c2VzID0gZnVuY3Rpb24gKGRldGFpbHMsIHZhbHVlKSB7XG4gICAgICBkZXRhaWxzLnNob3dTdGF0dXNlcyA9IGZhbHNlO1xuICAgICAgdmFsdWUuc2hvd1N0YXR1c2VzID0gZmFsc2U7XG4gIH07XG5cbiAgJHNjb3BlLmxhYmVsID0gZnVuY3Rpb24gKGtleSkge1xuXG4gICAgdmFyIGRlc2MgPSBrZXk7XG5cbiAgICAvLyBkaXNhc3RlclxuICAgIGlmICgkc3RhdGVQYXJhbXMudGhlbWUgPT09ICdkaXNhc3RlcicpIHtcblxuICAgICAgaWYgKCRzY29wZS5zZkZpZWxkSGFzaC5EaXNhc3Rlcl9fY1trZXldKSB7XG4gICAgICAgIGRlc2MgPSAkc2NvcGUuc2ZGaWVsZEhhc2guRGlzYXN0ZXJfX2Nba2V5XS5sYWJlbCB8fCBrZXk7XG4gICAgICB9XG5cbiAgICAgIGlmICgkc2NvcGUuc2ZGaWVsZEhhc2guTG9jYXRpb25fX2Nba2V5XSkge1xuICAgICAgICBkZXNjID0gJHNjb3BlLnNmRmllbGRIYXNoLkxvY2F0aW9uX19jW2tleV0ubGFiZWwgfHwga2V5O1xuICAgICAgfVxuXG4gICAgICBpZiAoJHNjb3BlLnNmRmllbGRIYXNoLkRpc2FzdGVyX0xvY2F0aW9uX19jW2tleV0pIHtcbiAgICAgICAgZGVzYyA9ICRzY29wZS5zZkZpZWxkSGFzaC5EaXNhc3Rlcl9Mb2NhdGlvbl9fY1trZXldLmxhYmVsIHx8IGtleTtcbiAgICAgIH1cblxuICAgICAgaWYgKCRzY29wZS5zZkZpZWxkSGFzaC5SZXF1ZXN0X0Zvcl9Bc3Npc3RhbmNlX19jW2tleV0pIHtcbiAgICAgICAgZGVzYyA9ICRzY29wZS5zZkZpZWxkSGFzaC5SZXF1ZXN0X0Zvcl9Bc3Npc3RhbmNlX19jW2tleV0ubGFiZWwgfHwga2V5O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGVzYztcbiAgICB9XG5cbiAgICAvLyBjb250ZXh0dWFsIGxheWVyXG4gICAgaWYgKCRzY29wZS5jb250ZXh0dWFsTGF5ZXIpIHtcbiAgICAgIHJldHVybiBrZXk7XG4gICAgfVxuXG5cbiAgICBpZiAoJHN0YXRlUGFyYW1zLnRoZW1lID09PSAncHJvamVjdFJpc2snKSB7XG4gICAgICAvLyBwcm9qZWN0XG4gICAgICBpZiAoJHNjb3BlLnNmRmllbGRIYXNoLlByb2plY3RfX2Nba2V5XSkge1xuICAgICAgICBkZXNjID0gJHNjb3BlLnNmRmllbGRIYXNoLlByb2plY3RfX2Nba2V5XS5sYWJlbCB8fCBrZXk7XG4gICAgICB9XG5cbiAgICAgIGlmICgkc2NvcGUuc2ZGaWVsZEhhc2guTG9jYXRpb25fX2Nba2V5XSkge1xuICAgICAgICBkZXNjID0gJHNjb3BlLnNmRmllbGRIYXNoLkxvY2F0aW9uX19jW2tleV0ubGFiZWwgfHwga2V5O1xuICAgICAgfVxuXG4gICAgICBpZiAoJHNjb3BlLnNmRmllbGRIYXNoLlJpc2tfX2Nba2V5XSkge1xuICAgICAgICBkZXNjID0gJHNjb3BlLnNmRmllbGRIYXNoLlJpc2tfX2Nba2V5XS5sYWJlbCB8fCBrZXk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkZXNjO1xuICAgIH1cblxuXG4gICAgaWYgKCRzdGF0ZVBhcmFtcy50aGVtZSA9PT0gJ3Byb2plY3RIZWFsdGgnKSB7XG4gICAgICAvLyBwcm9qZWN0XG4gICAgICBpZiAoJHNjb3BlLnNmRmllbGRIYXNoLlByb2plY3RfX2Nba2V5XSkge1xuICAgICAgICBkZXNjID0gJHNjb3BlLnNmRmllbGRIYXNoLlByb2plY3RfX2Nba2V5XS5sYWJlbCB8fCBrZXk7XG4gICAgICB9XG5cbiAgICAgIGlmICgkc2NvcGUuc2ZGaWVsZEhhc2guTG9jYXRpb25fX2Nba2V5XSkge1xuICAgICAgICBkZXNjID0gJHNjb3BlLnNmRmllbGRIYXNoLkxvY2F0aW9uX19jW2tleV0ubGFiZWwgfHwga2V5O1xuICAgICAgfVxuXG4gICAgICBpZiAoJHNjb3BlLnNmRmllbGRIYXNoLlByb2plY3RfRXZhbHVhdGlvbl9fY1trZXldKSB7XG4gICAgICAgIGRlc2MgPSAkc2NvcGUuc2ZGaWVsZEhhc2guUHJvamVjdF9FdmFsdWF0aW9uX19jW2tleV0ubGFiZWwgfHwga2V5O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGVzYztcbiAgICB9XG5cbiAgICAvLyBwcm9qZWN0XG4gICAgaWYgKCRzY29wZS5zZkZpZWxkSGFzaC5Qcm9qZWN0X19jW2tleV0pIHtcbiAgICAgIGRlc2MgPSAkc2NvcGUuc2ZGaWVsZEhhc2guUHJvamVjdF9fY1trZXldLmxhYmVsIHx8IGtleTtcbiAgICB9XG5cbiAgICBpZiAoJHNjb3BlLnNmRmllbGRIYXNoLkxvY2F0aW9uX19jW2tleV0pIHtcbiAgICAgIGRlc2MgPSAkc2NvcGUuc2ZGaWVsZEhhc2guTG9jYXRpb25fX2Nba2V5XS5sYWJlbCB8fCBrZXk7XG4gICAgfVxuXG4gICAgaWYgKCRzY29wZS5zZkZpZWxkSGFzaC5JbmRpY2F0b3JfX2Nba2V5XSkge1xuICAgICAgZGVzYyA9ICRzY29wZS5zZkZpZWxkSGFzaC5JbmRpY2F0b3JfX2Nba2V5XS5sYWJlbCB8fCBrZXk7XG4gICAgfVxuXG4gICAgaWYgKCRzY29wZS5zZkZpZWxkSGFzaC5JbmRpY2F0b3JfVmFsdWVfX2Nba2V5XSkge1xuICAgICAgZGVzYyA9ICRzY29wZS5zZkZpZWxkSGFzaC5JbmRpY2F0b3JfVmFsdWVfX2Nba2V5XS5sYWJlbCB8fCBrZXk7XG4gICAgfVxuXG4gICAgaWYgKCRzY29wZS5zZkZpZWxkSGFzaC5Mb2dmcmFtZV9FbGVtZW50X19jW2tleV0pIHtcbiAgICAgIGRlc2MgPSAkc2NvcGUuc2ZGaWVsZEhhc2guTG9nZnJhbWVfRWxlbWVudF9fY1trZXldLmxhYmVsIHx8IGtleTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGVzYztcblxuICB9O1xuXG4gICRzY29wZS50b29sdGlwID0gZnVuY3Rpb24gKGtleSkge1xuLy8gICAgKHNmRmllbGRIYXNoW2tleV0uaW5saW5lSGVscFRleHQgfHwgJycpICsgJyBGaWVsZE5hbWU6ICcgKyBrZXlcblxuICAgIHZhciBkZXNjID0gJyc7XG5cbiAgICAvLyBkaXNhc3RlclxuICAgIGlmICgkc3RhdGVQYXJhbXMudGhlbWUgPT09ICdkaXNhc3RlcicpIHtcblxuICAgICAgaWYgKCRzY29wZS5zZkZpZWxkSGFzaC5EaXNhc3Rlcl9fY1trZXldKSB7XG4gICAgICAgIGRlc2MgPSAkc2NvcGUuc2ZGaWVsZEhhc2guRGlzYXN0ZXJfX2Nba2V5XS5pbmxpbmVIZWxwVGV4dCB8fCAnJztcbiAgICAgIH1cblxuICAgICAgaWYgKCRzY29wZS5zZkZpZWxkSGFzaC5Mb2NhdGlvbl9fY1trZXldKSB7XG4gICAgICAgIGRlc2MgPSAkc2NvcGUuc2ZGaWVsZEhhc2guTG9jYXRpb25fX2Nba2V5XS5pbmxpbmVIZWxwVGV4dCB8fCAnJztcbiAgICAgIH1cblxuICAgICAgaWYgKCRzY29wZS5zZkZpZWxkSGFzaC5EaXNhc3Rlcl9Mb2NhdGlvbl9fY1trZXldKSB7XG4gICAgICAgIGRlc2MgPSAkc2NvcGUuc2ZGaWVsZEhhc2guRGlzYXN0ZXJfTG9jYXRpb25fX2Nba2V5XS5pbmxpbmVIZWxwVGV4dCB8fCAnJztcbiAgICAgIH1cblxuICAgICAgaWYgKCRzY29wZS5zZkZpZWxkSGFzaC5SZXF1ZXN0X0Zvcl9Bc3Npc3RhbmNlX19jW2tleV0pIHtcbiAgICAgICAgZGVzYyA9ICRzY29wZS5zZkZpZWxkSGFzaC5SZXF1ZXN0X0Zvcl9Bc3Npc3RhbmNlX19jW2tleV0uaW5saW5lSGVscFRleHQgfHwgJyc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkZXNjICsgJyBGaWVsZE5hbWU6ICcgKyBrZXk7XG4gICAgfVxuXG4gICAgLy8gY29udGV4dHVhbCBsYXllclxuICAgIGlmICgkc2NvcGUuY29udGV4dHVhbExheWVyKSB7XG4gICAgICByZXR1cm4gJ0ZpZWxkTmFtZTogJyArIGtleTtcbiAgICB9XG5cbiAgICBpZiAoJHN0YXRlUGFyYW1zLnRoZW1lID09PSAncHJvamVjdFJpc2snKSB7XG4gICAgICBpZiAoJHNjb3BlLnNmRmllbGRIYXNoLlByb2plY3RfX2Nba2V5XSkge1xuICAgICAgICBkZXNjID0gJHNjb3BlLnNmRmllbGRIYXNoLlByb2plY3RfX2Nba2V5XS5pbmxpbmVIZWxwVGV4dCB8fCAnJztcbiAgICAgIH1cblxuICAgICAgaWYgKCRzY29wZS5zZkZpZWxkSGFzaC5Mb2NhdGlvbl9fY1trZXldKSB7XG4gICAgICAgIGRlc2MgPSAkc2NvcGUuc2ZGaWVsZEhhc2guTG9jYXRpb25fX2Nba2V5XS5pbmxpbmVIZWxwVGV4dCB8fCAnJztcbiAgICAgIH1cblxuICAgICAgaWYgKCRzY29wZS5zZkZpZWxkSGFzaC5SaXNrX19jW2tleV0pIHtcbiAgICAgICAgZGVzYyA9ICRzY29wZS5zZkZpZWxkSGFzaC5SaXNrX19jW2tleV0uaW5saW5lSGVscFRleHQgfHwgJyc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkZXNjICsgJyBGaWVsZE5hbWU6ICcgKyBrZXk7XG4gICAgfVxuXG4gICAgaWYgKCRzdGF0ZVBhcmFtcy50aGVtZSA9PT0gJ3Byb2plY3RIZWFsdGgnKSB7XG4gICAgICBpZiAoJHNjb3BlLnNmRmllbGRIYXNoLlByb2plY3RfX2Nba2V5XSkge1xuICAgICAgICBkZXNjID0gJHNjb3BlLnNmRmllbGRIYXNoLlByb2plY3RfX2Nba2V5XS5pbmxpbmVIZWxwVGV4dCB8fCAnJztcbiAgICAgIH1cblxuICAgICAgaWYgKCRzY29wZS5zZkZpZWxkSGFzaC5Mb2NhdGlvbl9fY1trZXldKSB7XG4gICAgICAgIGRlc2MgPSAkc2NvcGUuc2ZGaWVsZEhhc2guTG9jYXRpb25fX2Nba2V5XS5pbmxpbmVIZWxwVGV4dCB8fCAnJztcbiAgICAgIH1cblxuICAgICAgaWYgKCRzY29wZS5zZkZpZWxkSGFzaC5Qcm9qZWN0X0V2YWx1YXRpb25fX2Nba2V5XSkge1xuICAgICAgICBkZXNjID0gJHNjb3BlLnNmRmllbGRIYXNoLlByb2plY3RfRXZhbHVhdGlvbl9fY1trZXldLmlubGluZUhlbHBUZXh0IHx8ICcnO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGRlc2MgKyAnIEZpZWxkTmFtZTogJyArIGtleTtcbiAgICB9XG5cbiAgICAvLyBwcm9qZWN0XG4gICAgaWYgKCRzY29wZS5zZkZpZWxkSGFzaC5Qcm9qZWN0X19jW2tleV0pIHtcbiAgICAgIGRlc2MgPSAkc2NvcGUuc2ZGaWVsZEhhc2guUHJvamVjdF9fY1trZXldLmlubGluZUhlbHBUZXh0IHx8ICcnO1xuICAgIH1cblxuICAgIGlmICgkc2NvcGUuc2ZGaWVsZEhhc2guTG9jYXRpb25fX2Nba2V5XSkge1xuICAgICAgZGVzYyA9ICRzY29wZS5zZkZpZWxkSGFzaC5Mb2NhdGlvbl9fY1trZXldLmlubGluZUhlbHBUZXh0IHx8ICcnO1xuICAgIH1cblxuICAgIGlmICgkc2NvcGUuc2ZGaWVsZEhhc2guSW5kaWNhdG9yX19jW2tleV0pIHtcbiAgICAgIGRlc2MgPSAkc2NvcGUuc2ZGaWVsZEhhc2guSW5kaWNhdG9yX19jW2tleV0uaW5saW5lSGVscFRleHQgfHwgJyc7XG4gICAgfVxuXG4gICAgaWYgKCRzY29wZS5zZkZpZWxkSGFzaC5JbmRpY2F0b3JfVmFsdWVfX2Nba2V5XSkge1xuICAgICAgZGVzYyA9ICRzY29wZS5zZkZpZWxkSGFzaC5JbmRpY2F0b3JfVmFsdWVfX2Nba2V5XS5pbmxpbmVIZWxwVGV4dCB8fCAnJztcbiAgICB9XG5cbiAgICBpZiAoJHNjb3BlLnNmRmllbGRIYXNoLkxvZ2ZyYW1lX0VsZW1lbnRfX2Nba2V5XSkge1xuICAgICAgZGVzYyA9ICRzY29wZS5zZkZpZWxkSGFzaC5Mb2dmcmFtZV9FbGVtZW50X19jW2tleV0uaW5saW5lSGVscFRleHQgfHwgJyc7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRlc2MgKyAnIEZpZWxkTmFtZTogJyArIGtleTtcblxuICB9O1xuXG4gIC8vSW5pdCBzZWxlY3RlZEZlYXR1cmVUaXRsZSBwcm9wZXJ0eVxuICAkc2NvcGUudGl0bGU9IFwiRmVhdHVyZSBEZXRhaWxzXCI7XG5cbiAgJHNjb3BlLnRvZ2dsZVN0YXRlID0gZnVuY3Rpb24oc3RhdGVOYW1lKSB7XG4gICAgdmFyIHN0YXRlID0gJHN0YXRlLmN1cnJlbnQubmFtZSAhPT0gc3RhdGVOYW1lID8gc3RhdGVOYW1lIDogJ21haW4nO1xuICAgICRzdGF0ZS5nbyhzdGF0ZSwgJHN0YXRlUGFyYW1zKTtcbiAgfTtcblxuICAkc2NvcGUuaXRlbXNMaXN0ID0gdHJ1ZTtcbiAgJHNjb3BlLmRldGFpbHMgPSBmYWxzZTtcblxuXG4gIC8vSW5pdGlhbGl6ZSB0aGUgZHVtbXkgcHJvamVjdC9kaXNhc3RlciBjbGljayByZXN1bHRzXG4gICRzY29wZS5ncm91cGluZ3MgPSB7fTtcblxuICAkc2NvcGUuYWxlcnRVc2VyVG9DbGljayA9IHRydWU7XG5cbiAgJHNjb3BlLiRvbignZGV0YWlscycsIGZ1bmN0aW9uIChldmVudCwgZmVhdHVyZUxheWVyKSB7XG4gICAgJHNjb3BlLmFsZXJ0VXNlclRvQ2xpY2sgPSBmYWxzZTtcbiAgICB2YXIgcHJvcGVydGllcyA9IGZlYXR1cmVMYXllci5mZWF0dXJlLnByb3BlcnRpZXM7XG4gICAgJHNjb3BlLmZlYXR1cmUgPSBmZWF0dXJlTGF5ZXIuZmVhdHVyZTtcbiAgICAkc2NvcGUudGl0bGUgPSAkc2NvcGUuZmVhdHVyZVRpdGxlID0gcHJvcGVydGllcy5uYW1lIHx8IHByb3BlcnRpZXMudGl0bGUgfHwgJ1NlbGVjdGVkIEZlYXR1cmUnO1xuICAgIGlmIChwcm9wZXJ0aWVzLnNhbGVzZm9yY2UpIHsgLy8gc2FsZXNmb3JjZSB0aGVtZSBiYWRnZSBzZWxlY3RlZFxuICAgICAgJHNjb3BlLmNvbnRleHR1YWxMYXllciA9IGZhbHNlO1xuICAgICAgJHNjb3BlLmdyb3VwaW5ncyA9IHByb3BlcnRpZXMuc2FsZXNmb3JjZTtcbiAgICAgICRzY29wZS5udW1UaGVtZUl0ZW1zID0gJC5tYXAocHJvcGVydGllcy5zYWxlc2ZvcmNlLCBmdW5jdGlvbihuKSB7IHJldHVybiBufSkubGVuZ3RoO1xuICAgICAgJHNjb3BlLnNob3dMaXN0KCk7XG4gICAgICAkc2NvcGUub3BlblBhcmFtKCdkZXRhaWxzLXBhbmVsJyk7XG4gICAgICAkc2NvcGUuY3JlYXRlRG9udXRzKCk7XG4gICAgfSBlbHNlIHsgLy8gc3RhbmRhcmQgZ2VvanNvbiwgc2hvdyBwcm9wZXJ0aWVzIGFzIGRldGFpbHNcblxuICAgICAgJHNjb3BlLmNvbnRleHR1YWxMYXllciA9IChwcm9wZXJ0aWVzLnNmX2lkID8gZmFsc2UgOiB0cnVlKTtcbiAgICAgICRzY29wZS5zaG93RGV0YWlscyhwcm9wZXJ0aWVzKTtcbiAgICAgICRzY29wZS5vcGVuUGFyYW0oJ2RldGFpbHMtcGFuZWwnKTtcbiAgICB9XG4gICAgJHNjb3BlLnJlc2l6ZURldGFpbHNQYW5lbCgpO1xuICB9KTtcblxuICAkc2NvcGUuJG9uKCdyb3V0ZS11cGRhdGUnLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNmX2lkID0gJHN0YXRlUGFyYW1zLnNmX2lkO1xuICAgICRzY29wZS50aGVtZSA9ICRzdGF0ZVBhcmFtcy50aGVtZTtcbiAgICBpZiAoJHNjb3BlLmFsZXJ0VXNlclRvQ2xpY2sgPT09IGZhbHNlKSByZXR1cm47XG4gICAgaWYgKHNmX2lkICYmIHR5cGVvZiBzZl9pZCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHZhciB1cmwgPSBjb25maWcuY2h1YmJzUGF0aCgnc2VydmljZXMvY3VzdG9tL2N1c3RvbV9vcGVyYXRpb24/bmFtZT1kb2Vjb3N0ZXh0c2VhcmNoJmZvcm1hdD1qc29uJnRleHQ9JykgKyBzZl9pZDtcbiAgICAgICRodHRwLmdldCh1cmwpLnN1Y2Nlc3MoZnVuY3Rpb24gKHJlc3VsdCwgc3RhdHVzKSB7XG4gICAgICAgIGlmIChyZXN1bHRbMF0pIHtcbiAgICAgICAgICAkcm9vdFNjb3BlLiRicm9hZGNhc3QoJ2RldGFpbHMnLCB7IGZlYXR1cmU6IHsgcHJvcGVydGllczogcmVzdWx0WzBdIH0gfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG5cbiAgJHNjb3BlLmNyZWF0ZURvbnV0cyA9IGZ1bmN0aW9uKCkge1xuICAgIC8vIHVzZXMganF1ZXJ5IHRvIHB1dCBkb251dCBpbiBhIGRpdi5cbiAgICBpZiAoJHNjb3BlLmdyb3VwaW5ncyAmJiAkc2NvcGUuZ3JvdXBpbmdzLlByb2plY3RzKSB7XG4gICAgICBEb251dHMuY3JlYXRlTGFiZWxEb251dCgkc2NvcGUuc2ZGaWVsZEhhc2guUHJvamVjdF9fYy5zZWN0b3JfX2MucGlja2xpc3RWYWx1ZXMsICRzY29wZS5ncm91cGluZ3MuUHJvamVjdHMsICcjZGV0YWlscy1kb251dCcpO1xuICAgIH1cbiAgfTtcblxuICAkc2NvcGUubW9yZUxlc3MgPSAnTW9yZSc7XG5cbiAgJHNjb3BlLnRvZ2dsZU1vcmVMZXNzID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICgkc2NvcGUubW9yZUxlc3MgPT09ICdNb3JlJykge1xuICAgICAgJHNjb3BlLm1vcmVMZXNzID0gJ0xlc3MnO1xuICAgIH0gZWxzZSB7XG4gICAgICAkc2NvcGUubW9yZUxlc3MgPSAnTW9yZSc7XG4gICAgfVxuICAgIC8vUmVzaXplO1xuICAgICRzY29wZS5yZXNpemVEZXRhaWxzUGFuZWwoKTtcbiAgfTtcblxuICAkc2NvcGUuc2hvd0RldGFpbHMgPSBmdW5jdGlvbiAoaXRlbSwgdGhlbWVJdGVtcywgaWR4KSB7XG4gICAgaWYgKGl0ZW0uc2ZfaWQpIHtcbiAgICAgICRyb290U2NvcGUuc2V0UGFyYW1XaXRoVmFsKCdzZl9pZCcsIGl0ZW0uc2ZfaWQpO1xuICAgIH1cbiAgICBpZiAoaXRlbS5uYW1lIHx8IGl0ZW0udGl0bGUpIHtcbiAgICAgICRzY29wZS50aXRsZSA9IGl0ZW0ubmFtZSB8fCBpdGVtLnRpdGxlO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGlkeCA9PT0gJ251bWJlcicpICRzY29wZS5hY3RpdmVUaGVtZUl0ZW1JZHggPSBpZHg7XG4gICAgaWYgKHRoZW1lSXRlbXMpICRzY29wZS5hY3RpdmVUaGVtZUl0ZW1zTGlzdCA9IHRoZW1lSXRlbXM7XG4gICAgJHNjb3BlLml0ZW1zTGlzdCA9IGZhbHNlO1xuICAgICRzY29wZS5kZXRhaWxzID0gcmVtb3ZlVW53YW50ZWRJdGVtcyhmb3JtYXREZXRhaWxzKGl0ZW0sICRzdGF0ZVBhcmFtcy50aGVtZSksICRzdGF0ZVBhcmFtcy50aGVtZSk7XG4gICAgaWYgKCEkc2NvcGUuY29udGV4dHVhbExheWVyKSB7XG4gICAgICAkc2NvcGUubGVzc0RldGFpbHMgPSByZW1vdmVVbndhbnRlZEl0ZW1zKGxlc3NEZXRhaWxzKGZvcm1hdERldGFpbHMoaXRlbSwgJHN0YXRlUGFyYW1zLnRoZW1lKSksICRzdGF0ZVBhcmFtcy50aGVtZSk7XG4gICAgfVxuXG4gICAgLy9GaWx0ZXIvRm9ybWF0IFJGQXMgYW5kIEluZGljYXRvcnNcbiAgICBpZiAoJHNjb3BlLmRldGFpbHMucmVxdWVzdHNGb3JBc3Npc3RhbmNlICYmIHR5cGVvZiAkc2NvcGUuZGV0YWlscy5yZXF1ZXN0c0ZvckFzc2lzdGFuY2UgPT09ICdhcnJheScpIHtcbiAgICAgIC8vRmlsdGVyL0Zvcm1hdFxuICAgICAgJHNjb3BlLmRldGFpbHMucmVxdWVzdHNGb3JBc3Npc3RhbmNlID0gJHNjb3BlLmRldGFpbHMucmVxdWVzdHNGb3JBc3Npc3RhbmNlLm1hcChmdW5jdGlvbiAocmZhKSB7XG4gICAgICAgIHJldHVybiByZW1vdmVVbndhbnRlZEl0ZW1zKGZvcm1hdERldGFpbHMocmZhLCBcIlJGQVwiKSwgXCJSRkFcIik7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoJHNjb3BlLmRldGFpbHMuaW5kaWNhdG9ycyAmJiB0eXBlb2YgJHNjb3BlLmRldGFpbHMuaW5kaWNhdG9ycyA9PT0gJ2FycmF5Jykge1xuICAgICAgLy9GaWx0ZXIvRm9ybWF0XG4gICAgICAkc2NvcGUuZGV0YWlscy5pbmRpY2F0b3JzID0gJHNjb3BlLmRldGFpbHMuaW5kaWNhdG9ycy5tYXAoZnVuY3Rpb24gKGluZGljYXRvcikge1xuICAgICAgICByZXR1cm4gcmVtb3ZlVW53YW50ZWRJdGVtcyhmb3JtYXREZXRhaWxzKGluZGljYXRvciwgXCJpbmRpY2F0b3JcIiksIFwiaW5kaWNhdG9yXCIpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKCRzY29wZS5kZXRhaWxzLnJpc2tzICYmIHR5cGVvZiAkc2NvcGUuZGV0YWlscy5yaXNrcyA9PT0gJ2FycmF5Jykge1xuICAgICAgLy9GaWx0ZXIvRm9ybWF0XG4vLyAgICAgICAgICAkc2NvcGUuZGV0YWlscy5yaXNrcyA9ICRzY29wZS5kZXRhaWxzLnJpc2tzLm1hcChmdW5jdGlvbiAocmlzaykge1xuLy8gICAgICAgICAgICAgIHJldHVybiByZW1vdmVVbndhbnRlZEl0ZW1zKGZvcm1hdERldGFpbHMocmlzaywgXCJyaXNrXCIpLCBcInJpc2tcIik7XG4vLyAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoJHNjb3BlLmRldGFpbHMuc3RhdHVzZXMgJiYgdHlwZW9mICRzY29wZS5kZXRhaWxzLnN0YXR1c2VzID09PSAnYXJyYXknKSB7XG4gICAgICAvL0ZpbHRlci9Gb3JtYXRcbi8vICAgICAgICAgICRzY29wZS5kZXRhaWxzLnN0YXR1c2VzID0gJHNjb3BlLmRldGFpbHMuc3RhdHVzZXMubWFwKGZ1bmN0aW9uIChzdGF0dXMpIHtcbi8vICAgICAgICAgICAgICByZXR1cm4gcmVtb3ZlVW53YW50ZWRJdGVtcyhmb3JtYXREZXRhaWxzKHN0YXR1cywgXCJzdGF0dXNcIiksIFwic3RhdHVzXCIpO1xuLy8gICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy9OZWVkIHRvIHdhaXQgdW50aWwgZGV0YWlscyBwYW5lbCBzd2l0Y2hlcyBtb2RlcywgYW5kIHRoZW4gY2FsY3VsYXRlIHRoZSBzaXplLlxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAkc2NvcGUucmVzaXplRGV0YWlsc1BhbmVsKCk7XG4gICAgfSwgMTAwKTtcblxuICB9O1xuXG4gIGZ1bmN0aW9uIHJlbW92ZVVud2FudGVkSXRlbXMoZGV0YWlscywgdHlwZSkge1xuICAgIHZhciBwYXNzdGhyb3VnaERldGFpbHMgPSB7fTtcbiAgICB2YXIgYmxhY2tsaXN0RGljdGlvbmFyeSA9IGNvbmZpZy51bndhbnRlZFByb2plY3REZXRhaWxzO1xuXG4gICAgaWYgKHR5cGUgPT09ICdkaXNhc3RlcicpIHtcbiAgICAgIGJsYWNrbGlzdERpY3Rpb25hcnkgPSBjb25maWcudW53YW50ZWREaXNhc3RlckRldGFpbHM7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgPT09ICdwcm9qZWN0Jykge1xuICAgICAgYmxhY2tsaXN0RGljdGlvbmFyeSA9IGNvbmZpZy51bndhbnRlZFByb2plY3REZXRhaWxzO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlID09PSAnUkZBJykge1xuICAgICAgYmxhY2tsaXN0RGljdGlvbmFyeSA9IGNvbmZpZy51bndhbnRlZFJGQURldGFpbHM7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgPT09ICdpbmRpY2F0b3InKSB7XG4gICAgICBibGFja2xpc3REaWN0aW9uYXJ5ID0gY29uZmlnLnVud2FudGVkSW5kaWNhdG9yRGV0YWlscztcbiAgICB9XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gZGV0YWlscykge1xuICAgICAgdmFyIGJsYWNrbGlzdGVkID0gYmxhY2tsaXN0RGljdGlvbmFyeVtrZXldO1xuICAgICAgaWYgKGJsYWNrbGlzdGVkICYmICh0eXBlb2YgYmxhY2tsaXN0ZWQgPT09ICdmdW5jdGlvbicpKSB7XG4gICAgICAgIC8vZXZhbHVhdGUgdGhlIGZ1bmN0aW9uIHRvIGRlY2lkZSBpZiB0aGUga2V5IHNob3VsZCBiZSBzaG93bi5cbiAgICAgICAgYmxhY2tsaXN0ZWQgPSBibGFja2xpc3RlZChkZXRhaWxzW2tleV0pO1xuICAgICAgfVxuICAgICAgaWYgKCFibGFja2xpc3RlZCkge1xuICAgICAgICAvL0FsbG93IHRoZSBpdGVtIHRocnUgaWYgaXQgaXMgbm90IGJsYWNrbGlzdGVkXG4gICAgICAgIHBhc3N0aHJvdWdoRGV0YWlsc1trZXldID0gZGV0YWlsc1trZXldO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBwYXNzdGhyb3VnaERldGFpbHM7XG4gIH1cblxuICBmdW5jdGlvbiBmb3JtYXREZXRhaWxzKGRldGFpbHMsIHR5cGUpIHtcbiAgICB2YXIgZm9ybWF0dGVkRGV0YWlscyA9IHt9O1xuICAgIHZhciBmb3JtYXR0aW5nRGljdGlvbmFyeSA9IGNvbmZpZy5wcm9qZWN0RGV0YWlsc0Zvcm1hdHRpbmc7XG5cbiAgICBpZiAodHlwZSA9PT0gJ2Rpc2FzdGVyJykge1xuICAgICAgZm9ybWF0dGluZ0RpY3Rpb25hcnkgPSBjb25maWcuZGlzYXN0ZXJEZXRhaWxzRm9ybWF0dGluZztcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSA9PT0gJ3Byb2plY3QnKSB7XG4gICAgICBmb3JtYXR0aW5nRGljdGlvbmFyeSA9IGNvbmZpZy5wcm9qZWN0RGV0YWlsc0Zvcm1hdHRpbmc7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgPT09ICdSRkEnKSB7XG4gICAgICBmb3JtYXR0aW5nRGljdGlvbmFyeSA9IGNvbmZpZy5SRkFEZXRhaWxzRm9ybWF0dGluZztcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSA9PT0gJ2luZGljYXRvcicpIHtcbiAgICAgIGZvcm1hdHRpbmdEaWN0aW9uYXJ5ID0gY29uZmlnLmluZGljYXRvckRldGFpbHNGb3JtYXR0aW5nO1xuICAgIH1cblxuICAgIGZvciAodmFyIGtleSBpbiBkZXRhaWxzKSB7XG4gICAgICB2YXIgZm9ybWF0dGVyID0gZm9ybWF0dGluZ0RpY3Rpb25hcnlba2V5XTtcbiAgICAgIGlmIChmb3JtYXR0ZXIpIHtcbiAgICAgICAgc3dpdGNoIChmb3JtYXR0ZXIuc3BsaXQoXCIsXCIpWzBdKSB7XG4gICAgICAgICAgY2FzZSBcImN1cnJlbmN5XCI6XG4gICAgICAgICAgICBmb3JtYXR0ZWREZXRhaWxzW2tleV0gPSAkZmlsdGVyKCdjdXJyZW5jeScpKGRldGFpbHNba2V5XSwgKGZvcm1hdHRlci5zcGxpdChcIixcIilbMV0gfHwgXCJVU0RcIikpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlIFwibnVtYmVyXCI6XG4gICAgICAgICAgICBmb3JtYXR0ZWREZXRhaWxzW2tleV0gPSAkZmlsdGVyKCdudW1iZXInKShkZXRhaWxzW2tleV0pO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlIFwiZGF0ZVwiOlxuICAgICAgICAgICAgZm9ybWF0dGVkRGV0YWlsc1trZXldID0gJGZpbHRlcignZGF0ZScpKGRldGFpbHNba2V5XSwgXCJ5eXl5LWRkLU1NXCIpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBcInJmYU5hbWVcIjpcbiAgICAgICAgICAgIGZvcm1hdHRlZERldGFpbHNba2V5XSA9ICRzY29wZS5kZXRhaWxzLmxvY2F0aW9uX19yX2FkbWluXzBfX2MgKyAnICcgKyAkc2NvcGUuZGV0YWlscy5kaXNhc3Rlcl90eXBlX19jICsgJyAtICcgKyBkZXRhaWxzLmFwcGVhbF9zb3VyY2VfX2M7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBmb3JtYXR0ZWREZXRhaWxzW2tleV0gPSBkZXRhaWxzW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICAvL05vIGZvcm1hdHRpbmdcbiAgICAgICAgZm9ybWF0dGVkRGV0YWlsc1trZXldID0gZGV0YWlsc1trZXldO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmb3JtYXR0ZWREZXRhaWxzO1xuICB9XG5cbiAgZnVuY3Rpb24gbGVzc0RldGFpbHMoZGV0YWlscykge1xuICAgIHZhciBsZXNzRGV0YWlscyA9IFtdO1xuICAgIGlmICgkc3RhdGVQYXJhbXMudGhlbWUgPT09ICdkaXNhc3RlcicpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBjb25maWcuZGlzYXN0ZXJEZXRhaWxzU2hvcnRMaXN0Lmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIHZhciBrZXkgPSBjb25maWcuZGlzYXN0ZXJEZXRhaWxzU2hvcnRMaXN0W2ldO1xuICAgICAgICBsZXNzRGV0YWlscy5wdXNoKHtcbiAgICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgICB2YWx1ZTogZGV0YWlsc1trZXldXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgcHJvamVjdERldGFpbHNTaG9ydExpc3QgPSBjb25maWcucHJvamVjdERldGFpbHNTaG9ydExpc3Q7XG4gICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gcHJvamVjdERldGFpbHNTaG9ydExpc3QubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgdmFyIGtleSA9IHByb2plY3REZXRhaWxzU2hvcnRMaXN0W2ldO1xuICAgICAgICBsZXNzRGV0YWlscy5wdXNoKHtcbiAgICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgICB2YWx1ZTogZGV0YWlsc1trZXldXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbGVzc0RldGFpbHM7XG4gIH1cblxuICAkc2NvcGUubmV4dFRoZW1lSXRlbSA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBsZW4gPSAkc2NvcGUuYWN0aXZlVGhlbWVJdGVtc0xpc3QubGVuZ3RoO1xuICAgIGlmICgrKyRzY29wZS5hY3RpdmVUaGVtZUl0ZW1JZHggPj0gbGVuKSAkc2NvcGUuYWN0aXZlVGhlbWVJdGVtSWR4ID0gMDtcbiAgICB2YXIgaXRlbSA9ICRzY29wZS5hY3RpdmVUaGVtZUl0ZW1zTGlzdFskc2NvcGUuYWN0aXZlVGhlbWVJdGVtSWR4XTtcbiAgICAkc2NvcGUuc2hvd0RldGFpbHMoaXRlbSk7XG4gIH07XG5cbiAgJHNjb3BlLnByZXZUaGVtZUl0ZW0gPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgbGVuID0gJHNjb3BlLmFjdGl2ZVRoZW1lSXRlbXNMaXN0Lmxlbmd0aDtcbiAgICBpZiAoLS0kc2NvcGUuYWN0aXZlVGhlbWVJdGVtSWR4IDwgMCkgJHNjb3BlLmFjdGl2ZVRoZW1lSXRlbUlkeCA9IGxlbiAtIDE7XG4gICAgdmFyIGl0ZW0gPSAkc2NvcGUuYWN0aXZlVGhlbWVJdGVtc0xpc3RbJHNjb3BlLmFjdGl2ZVRoZW1lSXRlbUlkeF07XG4gICAgJHNjb3BlLnNob3dEZXRhaWxzKGl0ZW0pO1xuICB9O1xuXG4gICRzY29wZS5zaG93TGlzdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAkc2NvcGUudGl0bGUgPSAkc2NvcGUuZmVhdHVyZVRpdGxlO1xuICAgICRzY29wZS5pdGVtc0xpc3QgPSB0cnVlO1xuICAgICRzY29wZS5kZXRhaWxzID0gZmFsc2U7XG4gIH07XG5cbiAgJHNjb3BlLnJlc2l6ZURldGFpbHNQYW5lbCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBoZWlnaHQgPSAkKCcjTWFwQ3RybCcpLmhlaWdodCgpIC0gMjAwOyAvL01hZ2ljIE51bWJlclxuXG4gICAgLy9oZWlnaHQgaXMgdGhlIHZhbHVlIHRoYXQgdGhlIGVudGlyZSBkZXRhaWxzIHBhbmVsIHNob3VsZCBuZXZlciBleGNlZWQuXG4gICAgLy9XaXRoaW4gdGhlIHBhbmVsIGl0c2VsZiwgdGhlIGlubmVyIGNvbnRhaW5lciBuZWVkcyB0byBhZGp1c3QgaXRzIGhlaWdodCBiYXNlZCBvbiB0aGUgY29udGVudHMgb2YgdGhlIHBhbmVsLlxuICAgIC8vU29tZXRpbWVzLCB0aGVyZSBhcmUgdGFicywgYW5kIHNvbWV0aW1lcyB0aGUgcHJvamVjdC9kaXNhc3RlciBkZXNjcmlwdGlvbiBjYW4gYmUgcXVpdGUgbG9uZy5cbiAgICAvL0luIHRoZXNlIGNhc2VzLCB0aGVuIGlubmVyQ29udGFpbmVyIHNob3VsZCBzaHJpbmsgdG8gZml0IHdpdGhpbiB0aGUgbWF4LWhlaWdodCBvZiB0aGUgb3V0ZXIgcGFuZWwgKGhlaWdodClcblxuICAgIC8vRmluZCB0aGUgdG9wIG9mIHRoZSBpbm5lckNvbnRhaW5lciwgYW5kIHN1YnRyYWN0IGZyb20gdGhlIG1heCBoZWlnaHQgb2YgdGhlIHBhbmVsLiAgVGhhdCdzIHdoYXQgdGhlIG1heC1oZWlnaHQgb2YgdGhlIGlubmVyIHBhbmVsIHNob3VsZCBiZVxuICAgIHZhciBpbm5lclRvcCA9ICQoJyNEZXRhaWxzUGFuZWwgLklubmVyQ29udGFpbmVyJykucG9zaXRpb24oKS50b3A7XG4gICAgdmFyIGJvdHRvbUhlaWdodCA9ICQoXCIuZGV0YWlscy1ib3R0b20tYnV0dG9ucy5wdWxsLXJpZ2h0XCIpLmhlaWdodCgpO1xuXG4gICAgJCgnI0RldGFpbHNQYW5lbCAuSW5uZXJDb250YWluZXIgJykuY3NzKFwibWF4LWhlaWdodFwiLCBoZWlnaHQgLSBpbm5lclRvcCAtIGJvdHRvbUhlaWdodCk7XG4gIH07XG5cblx0Ly9Db25uZWN0IHRoZSBsYXlvdXQgb25yZXNpemUgZW5kIGV2ZW50XG5cdHdpbmRvdy5sYXlvdXQucGFuZXMuY2VudGVyLmJpbmQoXCJsYXlvdXRwYW5lb25yZXNpemVfZW5kXCIsICRzY29wZS5yZXNpemVEZXRhaWxzUGFuZWwpO1xuXG5cdC8vRm9yIEluaXQuXG5cdCRzY29wZS5yZXNpemVEZXRhaWxzUGFuZWwoKTtcblxuICAkc2NvcGUuc2F2ZSA9IGZ1bmN0aW9uIChkYXRhLCBuYW1lKSB7XG4gICAgdmFyIGpzb24gPSBKU09OLnN0cmluZ2lmeShkYXRhLCBudWxsLCAyKTtcbiAgICB2YXIgYmxvYiA9IG5ldyBCbG9iKFtqc29uXSwge3R5cGU6J3RleHQvcGxhaW4nfSk7XG4gICAgdmFyIGRvd25sb2FkTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIHZhciB1cmwgPSAod2luZG93LndlYmtpdFVSTCAhPSBudWxsID8gd2luZG93LndlYmtpdFVSTCA6IHdpbmRvdy5VUkwpO1xuICAgIGRvd25sb2FkTGluay5ocmVmID0gdXJsLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcbiAgICBkb3dubG9hZExpbmsuZG93bmxvYWQgPSBuYW1lIHx8ICdmZWF0dXJlLmdlb2pzb24nO1xuICAgIGRvd25sb2FkTGluay5jbGljaygpO1xuICB9O1xuXG59KTtcbiIsIi8qKlxuICogQ3JlYXRlZCBieSBSeWFuIFdoaXRsZXlcbiAqICAgICAgIG9uIDYvNC8xNC5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdHZW9Bbmd1bGFyJykuY29udHJvbGxlcignRXhwb3J0Q3RybCcsIGZ1bmN0aW9uKCRzY29wZSwgJGh0dHAsICRzdGF0ZSwgJHN0YXRlUGFyYW1zKSB7XG4gICAgY29uc29sZS5sb2coJ0V4cG9ydEN0cmwnKTtcblxuICAgICRzY29wZS5leHBvcnQgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICB9O1xuXG4gICAgJHNjb3BlLnJvdXRlVXJsID0gd2luZG93LmxvY2F0aW9uO1xuXG5cbiAgICAvKipcbiAgICAgKiBJZiBFeHBvcnRDdHJsIGdldHMgY2FsbGVkIHR3aWNlIGZvciBzb21lIHJlYXNvbiwgd2UgbWlnaHRcbiAgICAgKiBoYXZlIHRoaXMgY2xhc3MgaGFuZ2luZyBhcm91bmQgYmxvY2tpbmcgdGhlIGFwcC4gRXhwb3J0Q3RybFxuICAgICAqIGRvZXMgZ2V0IGNhbGxlZCB0d2ljZSBzb21ldGltZXMsIGJlY2F1c2UgdGhlIG1vZGFsIHNvbWV0aW1lc1xuICAgICAqIG51ZGdlcyB0aGUgbWFwIGFuZCByZWluc3RhbnRpYXRlcyB0aGUgbW9kYWwgYWdhaW4gdmlhIGEgbmV3XG4gICAgICogcm91dGUuXG4gICAgICovXG4gICAgJCgnLm1vZGFsLWJhY2tkcm9wJykucmVtb3ZlKCk7XG5cbiAgICAkKCcjZXhwb3J0TW9kYWwnKS5tb2RhbCgnc2hvdycpO1xuXG4gICAgJCgnI2V4cG9ydE1vZGFsJykub24oJ2hpZGRlbi5icy5tb2RhbCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICRzdGF0ZS5nbygnbWFpbicsICRzdGF0ZVBhcmFtcyk7XG4gICAgfSk7XG5cblxuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIC8vZGVmYXVsdHNcbiAgICBzZWxmLl9MYXlvdXRFbGVtZW50cyA9IHsgXCJtYXBcIjogdHJ1ZSwgXCJsZWdlbmRcIjogdHJ1ZSwgXCJvcHRpb25hbHRoZW1lZGV0YWlsc1wiOiBmYWxzZSB9O1xuICAgIHNlbGYuX0ltYWdlRm9ybWF0ID0gJ3BuZyc7XG5cbiAgICBzZWxmLl9pbml0ID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIHNlbGYuX2Nvbm5lY3RSYWRpb0J1dHRvbk9uQ2xpY2tzKCk7XG4gICAgICAgICQoXCIjZXhlY3V0ZUV4cG9ydEJ1dHRvblwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vU2hvdyBsb2FkaW5nIGdpZi4gSGlkZSBleHBvcnQgYnV0dG9uXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHNlbGYuX2V4cG9ydEltYWdlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIHNlbGYuX3Nob3dFeHBvcnRCdXR0b25IaWRlTG9hZGVyKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIHNlbGYuX3Nob3dXYWl0aW5nUGFuZWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNlbGYuX3Nob3dMb2FkZXIoKTsgLy9zaG93IGtuaWdodFJpZGVyIGltYWdlLCBoaWRlXG4gICAgICAgICQoXCIjZXhwb3J0T3B0aW9uc1BhbmVsXCIpLmNzcyh7XCJkaXNwbGF5XCI6IFwibm9uZVwifSk7XG4gICAgICAgICQoXCIjZXhwb3J0V2FpdGluZ1BhbmVsXCIpLmNzcyh7IFwiZGlzcGxheVwiOiBcImJsb2NrXCIgfSk7XG4gICAgICAgICQoXCIuZXhwb3J0R3JvdXBUaXRsZS5lcnJvclwiKS5jc3MoeyBcImRpc3BsYXlcIjogXCJub25lXCIgfSk7IC8vSGlkZSBlcnJvciBtZXNzYWdlLCBpZiBzaG93blxuICAgICAgICAkKFwiLmltYWdlT3BlbkJ1dHRvblwiKS5jc3Moe1wiZGlzcGxheVwiOiBcIm5vbmVcIn0pOyAvL2hpZGUgb3BlbiBpbWFnZSBidXR0b25cbiAgICB9XG5cbiAgICBzZWxmLl9oaWRlV2FpdGluZ1BhbmVsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAkKFwiI2V4cG9ydFdhaXRpbmdQYW5lbFwiKS5jc3Moe1wiZGlzcGxheVwiOiBcIm5vbmVcIn0pO1xuICAgICAgICAkKFwiI2V4cG9ydE9wdGlvbnNQYW5lbFwiKS5jc3Moe1wiZGlzcGxheVwiOiBcImJsb2NrXCJ9KTtcbiAgICB9XG5cbiAgICBzZWxmLl9oaWRlRXhwb3J0QnV0dG9uU2hvd0xvYWRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJChcIiNleGVjdXRlRXhwb3J0QnV0dG9uXCIpLmNzcyh7IFwiZGlzcGxheVwiOiBcIm5vbmVcIiB9KTtcbiAgICAgICAgJChcIi5rbmlnaHRSaWRlckxvYWRlclwiKS5jc3MoeyBcImRpc3BsYXlcIjogXCJibG9ja1wiIH0pO1xuICAgIH1cblxuICAgIHNlbGYuX3Nob3dFeHBvcnRCdXR0b25IaWRlTG9hZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAkKFwiI2V4ZWN1dGVFeHBvcnRCdXR0b25cIikuY3NzKHtcImRpc3BsYXlcIjogXCJibG9ja1wifSk7XG4gICAgICAgICQoXCIua25pZ2h0UmlkZXJMb2FkZXJcIikuY3NzKHtcImRpc3BsYXlcIjogXCJub25lXCJ9KTtcbiAgICB9XG5cbiAgICBzZWxmLl9jb25uZWN0UmFkaW9CdXR0b25PbkNsaWNrcyA9IGZ1bmN0aW9uICgpIHtcblxuXG4gICAgICAgICQoXCIjb3B0aW9uYWxPdXRwdXRNYXBcIikub24oXCJjbGlja1wiLCBzZWxmLl9nZXRMYXlvdXRFbGVtZW50T25DbGljaygnbWFwJykpO1xuICAgICAgICAkKFwiI29wdGlvbmFsT3V0cHV0TGVnZW5kXCIpLm9uKFwiY2xpY2tcIiwgc2VsZi5fZ2V0TGF5b3V0RWxlbWVudE9uQ2xpY2soJ2xlZ2VuZCcpKTtcbiAgICAgICAgJChcIiNvcHRpb25hbFRoZW1lRGV0YWlsc1wiKS5vbihcImNsaWNrXCIsIHNlbGYuX2dldExheW91dEVsZW1lbnRPbkNsaWNrKCdvcHRpb25hbHRoZW1lZGV0YWlscycpKTtcblxuXG4gICAgICAgIHZhciBwbmdSQk5vZGUgPSAkKFwiI3BuZ0ltYWdlRm9ybWF0XCIpO1xuICAgICAgICBwbmdSQk5vZGUub24oXCJjbGlja1wiLCBzZWxmLl9nZXRJbWFnZUJ1dHRvblJhZGlvQnV0dG9uT25DbGljayhwbmdSQk5vZGUsICdwbmcnKSk7XG5cbiAgICAgICAgdmFyIHBkZlJCTm9kZSA9ICQoXCIjcGRmSW1hZ2VGb3JtYXRcIik7XG4gICAgICAgIHBkZlJCTm9kZS5vbihcImNsaWNrXCIsIHNlbGYuX2dldEltYWdlQnV0dG9uUmFkaW9CdXR0b25PbkNsaWNrKHBkZlJCTm9kZSwgJ3BkZicpKTtcblxuICAgICAgICAkKFwiI2V4cG9ydENsb3NlXCIpLm9uKFwiY2xpY2tcIiwgc2VsZi5oaWRlRXhwb3J0T3B0aW9uKTtcblxuICAgICAgICAkKFwiLmtpbGxPcGVuQnV0dG9uXCIpLm9uKFwiY2xpY2tcIiwgc2VsZi5faGlkZVdhaXRpbmdQYW5lbCk7IC8vdGhlIGRpc2NhcmQgYnV0dG9uXG5cbiAgICB9O1xuXG4gICAgc2VsZi5fZ2V0SW1hZ2VCdXR0b25SYWRpb0J1dHRvbk9uQ2xpY2sgPSBmdW5jdGlvbiAobm9kZSwgaW1hZ2VGb3JtYXQpIHtcblxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc2VsZi5fSW1hZ2VGb3JtYXQgPSBpbWFnZUZvcm1hdDtcbiAgICAgICAgICAgIHNlbGYuX3JlbW92ZUFsbFNlbGVjdGVkUmFkaW9CdXR0b25zKFwiZXhwb3J0T3B0aW9uc0NvbnRhaW5lclwiKTtcbiAgICAgICAgICAgIG5vZGUuYWRkQ2xhc3MoXCJleHBvcnRSYWRpb0J1dHRvblNlbGVjdGVkXCIpO1xuICAgICAgICB9O1xuICAgIH07XG5cbiAgICBzZWxmLl9nZXRMYXlvdXRFbGVtZW50T25DbGljayA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvL1RvZ2dsZSBBY3RpdmUgU3RhdGVcbiAgICAgICAgICAgIHNlbGYuX0xheW91dEVsZW1lbnRzW2VsZW1lbnRdID0gIXNlbGYuX0xheW91dEVsZW1lbnRzW2VsZW1lbnRdO1xuXG4gICAgICAgICAgICAvLyQoXCIjZXhwb3J0T3B0aW9ucyAuY2hlY2tib3hcIikucmVtb3ZlQ2xhc3MoXCJjaGVja2VkXCIpO1xuICAgICAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnY2hlY2tlZCcpO1xuICAgICAgICB9O1xuICAgIH07XG5cbiAgICBzZWxmLl9yZW1vdmVBbGxTZWxlY3RlZFJhZGlvQnV0dG9ucyA9IGZ1bmN0aW9uIChwYXJlbnREaXZJRCkge1xuICAgICAgICAkLmVhY2goJChcIiNcIiArIHBhcmVudERpdklEICsgXCIgLmV4cG9ydFJhZGlvQnV0dG9uU2VsZWN0ZWRcIiksIGZ1bmN0aW9uIChpZHgsIG5vZGUpIHtcbiAgICAgICAgICAgICQobm9kZSkucmVtb3ZlQ2xhc3MoXCJleHBvcnRSYWRpb0J1dHRvblNlbGVjdGVkXCIpO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgc2VsZi5faGlkZUxvYWRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJChcIi5rbmlnaHRSaWRlckxvYWRlclwiKS5jc3Moe1wiZGlzcGxheVwiOiBcIm5vbmVcIn0pO1xuICAgIH1cblxuICAgIHNlbGYuX3Nob3dMb2FkZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoXCIua25pZ2h0UmlkZXJMb2FkZXJcIikuY3NzKHtcImRpc3BsYXlcIjogXCJibG9ja1wifSk7XG4gICAgfVxuXG4gICAgdGhpcy5zaG93RXhwb3J0T3B0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAkKFwiI2V4cG9ydE9wdGlvbnNcIikuY3NzKHsgXCJkaXNwbGF5XCI6IFwiYmxvY2tcIiB9KTtcbiAgICB9XG5cbiAgICB0aGlzLmhpZGVFeHBvcnRPcHRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoXCIjZXhwb3J0T3B0aW9uc1wiKS5jc3MoeyBcImRpc3BsYXlcIjogXCJub25lXCIgfSk7XG4gICAgfVxuXG4gICAgc2VsZi5fa2lsbE9wZW5JbWFnZUJ1dHRvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy9IaWRlICdvcGVuIGltYWdlJyBidXR0b24gYW5kIHNob3cgZXhwb3J0IGJ1dHRvbi5cbiAgICAgICAgc2VsZi5fc2hvd0V4cG9ydEJ1dHRvbkhpZGVMb2FkZXIoKTtcbiAgICAgICAgJChcIi5pbWFnZU9wZW5CdXR0b25cIikuY3NzKHtcImRpc3BsYXlcIjogXCJub25lXCJ9KTtcbiAgICB9XG5cbiAgICBzZWxmLl9vbkVycm9yID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBzZWxmLl9oaWRlV2FpdGluZ1BhbmVsKCk7XG4gICAgICAgIC8vRGlzcGxheSBlcnJvciBtZXNzYWdlLlxuICAgICAgICAkKFwiLmV4cG9ydEdyb3VwVGl0bGUuZXJyb3JcIikucmVwbGFjZShcIjxzcGFuPlRoZXJlIHdhcyBhbiBlcnJvciBleHBvcnRpbmcgdGhlIGltYWdlLjwvc3Bhbj5cIik7XG4gICAgICAgICQoXCIuZXhwb3J0R3JvdXBUaXRsZS5lcnJvclwiKS5jc3Moe1wiZGlzcGxheVwiOiBcImJsb2NrXCJ9KTtcbiAgICB9XG5cbiAgICBzZWxmLl9leHBvcnRJbWFnZSA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICB2YXIgdGl0bGVIVE1MID0gXCJUaXRsZVwiO1xuXG4gICAgICAgIC8vdmFyIGxlZ2VuZHNIVE1MID0gJCgnPGRpdj4nKS5hcHBlbmQoJChcIiNMYXllckxpc3RXcmFwcGVyXCIpLmNsb25lKCkpLmh0bWwoKS5yZXBsYWNlKC9cXFwiL2csICdcXFxcXCInKTtcblxuXG4gICAgICAgIHZhciBsYXlvdXRXaWR0aCA9ICQoXCJib2R5XCIpLndpZHRoKCk7XG4gICAgICAgIHZhciBtYXBIZWlnaHQgPSAkKFwiI01hcEN0cmxcIikuaGVpZ2h0KCk7XG4gICAgICAgIHZhciBtYXBXaWR0aCA9ICQoXCIjTWFwQ3RybFwiKS53aWR0aCgpO1xuXG4gICAgICAgIHZhciBjb2RlYmxvY2sgPSBcIlwiO1xuICAgICAgICAvL0FkanVzdCBib2R5IHdpZHRoXG4gICAgICAgIGNvZGVibG9jayArPSAnJChcImJvZHlcIikud2lkdGgoJyArIChtYXBXaWR0aCArIDIwKSArICcpOyc7XG5cbiAgICAgICAgLy9MYWJlbCBzZWxlY3RlZCBjb3VudHJ5XG4gICAgICAgIC8vY29kZWJsb2NrICs9ICckKFwiI2FjdGl2ZUNvdW50cnlcIikuaHRtbCggXCInICsgX0ZTUC5NYXBCdWlsZGVyLlNlbGVjdGVkQ291bnRyeSArICdcIik7JztcblxuICAgICAgICAvL0RlcGVuZGluZyBvbiB3aGF0J3MgaW4gdGhlIGxheW91dEVsZW1lbnRzIGFycmF5LCBncmFiIGRvbSBub2Rlc1xuICAgICAgICAvL3ZhciBfc2hvd05vbmUgPSB0cnVlOyAvL2ZsYWcgdG8gZGV0ZWN0IGlmIHVzZXIgY2hvc2Ugbm90aGluZ1xuXG4vLyAgICAgICAgZm9yICh2YXIga2V5IGluIHNlbGYuX0xheW91dEVsZW1lbnRzKSB7XG4vLyAgICAgICAgICAgIGlmIChzZWxmLl9MYXlvdXRFbGVtZW50cy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4vLyAgICAgICAgICAgICAgICAvL0lmIHVzZXIgaGFzIHNlbGVjdGVkIGV2ZW4gMSBlbGVtZW50LCB0aGVuIHNldCBfc2hvd05vbmUgdG8gZmFsc2U7IChiZWNhdXNlIHdlIGFyZSBnb2luZyB0byBzaG93IHNvbWV0aGluZylcbi8vICAgICAgICAgICAgICAgIGlmIChzZWxmLl9MYXlvdXRFbGVtZW50c1trZXldID09PSB0cnVlKSB7XG4vLyAgICAgICAgICAgICAgICAgICAgX3Nob3dOb25lID0gZmFsc2U7XG4vLyAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAgICBzd2l0Y2ggKGtleSkge1xuLy8gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJtYXBcIjpcbi8vICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGYuX0xheW91dEVsZW1lbnRzW2tleV0gPT09IHRydWUpIHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vZ3JhYiB0aGUgbWFwIGRpdlxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1hcEhUTUwgPSAkKCc8ZGl2PicpLmFwcGVuZCgkKFwiLmxlYWZsZXQtbWFwLXBhbmVcIikuY2xvbmUoKSkuaHRtbCgpLnJlcGxhY2UoL1xcXCIvZywgJ1xcXFxcIicpO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1hcEhUTUwuaW5kZXhPZignLXdlYmtpdC10cmFuc2Zvcm0nKSA9PT0gLTEpIHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXBIVE1MID0gbWFwSFRNTC5yZXBsYWNlKC8tbXMtdHJhbnNmb3JtL2csICd0cmFuc2Zvcm0nKS5yZXBsYWNlKC90cmFuc2Zvcm0vZywgJy13ZWJraXQtdHJhbnNmb3JtJyk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2RlYmxvY2sgKz0gJyQoXCIjTWFwQ3RybFwiKS5oZWlnaHQoJyArIG1hcEhlaWdodCArICcpOyc7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2RlYmxvY2sgKz0gJyQoXCIjTWFwQ3RybFwiKS5yZXBsYWNlV2l0aChcIicgKyBtYXBIVE1MICsgJ1wiKTsnO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9BZGp1c3QgTWFwIHdyYXBwZXJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvZGVibG9jayArPSAnJChcIiN1cHBlck1hcFdyYXBwZXJcIikud2lkdGgoJyArIChtYXBXaWR0aCkgKyAnKTsnO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29kZWJsb2NrICs9ICckKFwiI3VwcGVyTWFwV3JhcHBlclwiKS5oZWlnaHQoJyArIChtYXBIZWlnaHQpICsgJyk7Jztcbi8vICAgICAgICAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vaGlkZSBtYXAgZGl2XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2RlYmxvY2sgKz0gJyQoXCIjdXBwZXJNYXBXcmFwcGVyXCIpLmhpZGUoKTsnO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuLy9cbi8vICAgICAgICAgICAgICAgICAgICBjYXNlIFwibGVnZW5kXCI6XG4vLyAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZWxmLl9MYXlvdXRFbGVtZW50c1trZXldID09PSB0cnVlKSB7XG4vLy8vICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBsZWdlbmRzSFRNTCA9ICQoJzxkaXY+JykuYXBwZW5kKCQoXCIjTGF5ZXJMaXN0V3JhcHBlclwiKS5jbG9uZSgpKS5odG1sKCkucmVwbGFjZSgvXFxcIi9nLCAnXFxcXFwiJyk7XG4vLy8vICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvZGVibG9jayArPSBcIiQoJyNsZWdlbmRzJykuYXBwZW5kKCdcIiArIGxlZ2VuZHNIVE1MICsgXCInKTtcIjtcbi8vLy9cbi8vLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9BZGp1c3QgVGl0bGUgb2YgQ0lDT3Ncbi8vLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29kZWJsb2NrICs9IFwiJCgnI2xlZ2VuZHMnKS5wcmVwZW5kKCQoJyNwYXJlbnRDSUNPJykpO1wiO1xuLy8vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2RlYmxvY2sgKz0gXCIkKCcjbGVnZW5kcycpLnByZXBlbmQoJCgnI0xheWVyTGlzdFdyYXBwZXIgaGVhZGVyJykpO1wiO1xuLy8vL1xuLy8vL1xuLy8vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL01vdmUgcGFuZWxUaXRsZSB0byBncnBDSUNPLiAgMXN0IHRoaW5nLlxuLy8vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2RlYmxvY2sgKz0gXCIkKCcjZ3JwQ0lDTycpLnByZXBlbmQoJCgnLnBhbmVsVGl0bGUnKSk7XCI7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2lmIGJvdGggbWFwIGFuZCBsZWdlbmQgYXJlIGV4Y2x1ZGVkLCBoaWRlIHRoZSB3cmFwcGVyIHdpdGggYm9yZGVyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZi5fTGF5b3V0RWxlbWVudHNbXCJtYXBcIl0gIT0gdHJ1ZSkge1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvZGVibG9jayArPSAnJChcIiN1cHBlck1hcFdyYXBwZXJcIikuY3NzKHtcImRpc3BsYXlcIjogXCJub25lXCJ9KTsnO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuLy9cbi8vICAgICAgICAgICAgICAgICAgICBjYXNlIFwib3B0aW9uYWx0aGVtZWRldGFpbHNcIjpcbi8vICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGYuX0xheW91dEVsZW1lbnRzW2tleV0gPT09IHRydWUpIHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vI0RldGFpbHNQYW5lbCAudGl0bGUubmctYmluZGluZ1xuLy9cbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBDT0hUTUwgPSAkKCc8ZGl2PicpLmFwcGVuZCgkKFwiI0RldGFpbHNQYW5lbCAuSW5uZXJDb250YWluZXIuc2Nyb2xsYWJsZVwiKS5jbG9uZSgpLmFkZENsYXNzKFwib25cIikpLmh0bWwoKS5yZXBsYWNlKC9cXFwiL2csICdcXFxcXCInKS5yZXBsYWNlKC88IS0tKC4qPyktLT4vZ20sIFwiXCIpO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29kZWJsb2NrICs9IFwiJCgnI3V4VGhlbWVEZXRhaWxzJykuYXBwZW5kKCdcIiArIENPSFRNTCArIFwiJyk7XCI7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4vLyAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgIH1cbi8vICAgICAgICB9XG5cbi8vICAgICAgICBpZiAoX3Nob3dOb25lID09IHRydWUpIHtcbi8vICAgICAgICAgICAgLy9Eb24ndCBkbyBhbnl0aGluZywgY2F1c2UgdXNlciBoYXNuJ3Qgc2VsZWN0ZWQgYW55dGhpbmcuXG4vLyAgICAgICAgICAgICQoXCIjZXhwb3J0TWVzc2FnZVwiKS5odG1sKFwiUGxlYXNlIHNlbGVjdCAxIG9yIG1vcmUgZWxlbWVudHMgdG8gZXhwb3J0LlwiKTtcbi8vICAgICAgICAgICAgcmV0dXJuO1xuLy8gICAgICAgIH1cbi8vICAgICAgICBlbHNlIHtcbi8vICAgICAgICAgICAgJChcIiNleHBvcnRNZXNzYWdlXCIpLmh0bWwoXCJcIik7XG4vLyAgICAgICAgfVxuXG4gICAgICAgIC8vc2hvdyBsb2FkZXJcbiAgICAgICAgc2VsZi5fc2hvd1dhaXRpbmdQYW5lbCgpO1xuXG4gICAgICAgIC8vZm9ybWF0dGluZ1xuICAgICAgICAvL2NvZGVibG9jayA9IGNvZGVibG9jay5yZXBsYWNlKC8oXFxyXFxufFxcbnxcXHIpL2dtLCBcIlwiKTsgIC8vcmVtb3ZlIGxpbmUgYnJlYWtzXG5cbiAgICAgICAgdmFyIHByaW50UG9zdEFyZ3MgPSB7XG4gICAgICAgICAgICAvL3VybDogJ2h0dHA6Ly9nZW8ucmVkY3Jvc3MuY29tL21hcGZvbGlvL3ByaW50Lmh0bScsXG4gICAgICAgICAgICB1cmw6ICRzY29wZS5yb3V0ZVVybC5ocmVmLnJlcGxhY2UoXCJtYXBmb2xpby8jXCIsIFwibWFwZm9saW8vcHJpbnQuaHRtbCNcIikucmVwbGFjZShcIm1hcGZvbGlvL2luZGV4Lmh0bWwjXCIsIFwibWFwZm9saW8vcHJpbnQuaHRtbCNcIikucmVwbGFjZShcIi9leHBvcnRcIiwgXCJcIikucmVwbGFjZShcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMVwiLCBcImh0dHBzOi8vZ2VvLnJlZGNyb3NzLm9yZ1wiKSwgLy9Td2FwIHRoZSBjdXJyZW50IHVybCBmb3IgdGhlIHByaW50IHVybFxuICAgICAgICAgICAgaW1hZ2Vmb3JtYXQ6IHNlbGYuX0ltYWdlRm9ybWF0IHx8ICdwbmcnLFxuICAgICAgICAgICAgZm9ybWF0OiAnanNvbicsXG4gICAgICAgICAgICAvL2NvZGVibG9jazogY29kZWJsb2NrLFxuICAgICAgICAgICAgdmlld3BvcnRoZWlnaHQ6IG1hcEhlaWdodCxcbiAgICAgICAgICAgIHZpZXdwb3J0d2lkdGg6IGxheW91dFdpZHRoLFxuICAgICAgICAgICAgZGVsYXk6IDUwMDAgLy90aW1lIHRvIHdhaXQgaW4gbXNcbiAgICAgICAgfTtcblxuXG4gICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcbiAgICAgICAgICAgIHVybDogJ2h0dHA6Ly9wcmludC5zcGF0aWFsZGV2LmNvbScsXG4gICAgICAgICAgICBkYXRhOiBwcmludFBvc3RBcmdzLFxuICAgICAgICAgICAgc3VjY2Vzczogc2VsZi5fb25JbWFnZUV4cG9ydCxcbiAgICAgICAgICAgIGVycm9yOiBzZWxmLl9vbkVycm9yXG4gICAgICAgIH0pO1xuXG4gICAgfTtcblxuICAgIHNlbGYuX29uSW1hZ2VFeHBvcnQgPSBmdW5jdGlvbiAocmVzdWx0KSB7XG5cbiAgICAgICAgdmFyIGV4cG9ydEltYWdlVVJMID0gcmVzdWx0LmltYWdlO1xuXG4gICAgICAgIC8vaW5zdGVhZCwgc2hvdyBhIGJ1dHRvbi9oeXBlcmxpbmsgZm9yIHRoZSB1c2VyIHRvIG9wZW4gdGhlIGltYWdlLlxuICAgICAgICAkKFwiLmltYWdlT3BlbkJ1dHRvbiBhXCIpLmF0dHIoXCJocmVmXCIsIGV4cG9ydEltYWdlVVJMKTtcbiAgICAgICAgJChcIi5pbWFnZU9wZW5CdXR0b25cIikuY3NzKHtcImRpc3BsYXlcIjogXCJibG9ja1wifSk7XG5cbiAgICAgICAgLy9IaWRlIGxvYWRlclxuICAgICAgICBzZWxmLl9oaWRlTG9hZGVyKCk7XG4gICAgfTtcblxuICAgIHNlbGYuX2luaXQoKTtcbn0pO1xuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IE5pY2hvbGFzIEhhbGxhaGFuIDxuaGFsbGFoYW5Ac3BhdGlhbGRldi5jb20+XG4gKiAgICAgICBvbiAzLzI3LzE0LlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ0dlb0FuZ3VsYXInKS5jb250cm9sbGVyKCdGaWx0ZXJzQ3RybCcsIGZ1bmN0aW9uKCRzY29wZSwgJGh0dHAsICRzdGF0ZSwgJHN0YXRlUGFyYW1zKSB7XG4gICRzY29wZS5wYXJhbXMgPSAkc3RhdGVQYXJhbXM7XG4gICRzY29wZS5uYXZUYWIgPSAnc2VjdG9ycyc7XG4gICRzY29wZS5zZWN0b3JzID0gW107XG4gICRzY29wZS5zdGF0dXMgPSBbXTtcbiAgZGVidWcuYnVkZ2V0ID0gJHNjb3BlLmJ1ZGdldCA9IHtcbiAgICBzbGlkZXI6IFsyMDAwLCA4MDAwXSxcbiAgICBtaW46IDAsXG4gICAgbWVhbjogNTAwMCxcbiAgICBtYXg6IDEwMDAwMFxuICB9O1xuXG4gIC8qKlxuICAgKiBHZXQgY2hlY2tib3ggaW5mbyB0aGF0IHdhcyBnZW5lcmF0ZWQgYnkgdGhlIFN1Y2N1YnVzLlxuICAgKi9cbiAgJGh0dHAuZ2V0KCdzdWNjdWJ1c19naXRpZ25vcmUvc2YtcHJvamVjdC1maWx0ZXItY2hlY2tib3hlcy5qc29uJywge2NhY2hlOiB0cnVlfSkuc3VjY2VzcyhmdW5jdGlvbiAoZGF0YSwgc3RhdHVzKSB7XG4gICAgYW5ndWxhci5leHRlbmQoJHNjb3BlLCBkYXRhKTtcbiAgICBkZWJ1Zy5maWx0ZXJzU2NvcGUgPSAkc2NvcGU7XG4gIH0pLmVycm9yKGZ1bmN0aW9uKCkge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJVbmFibGUgdG8gZmV0Y2ggcHJvamVjdCBmaWx0ZXIgbWV0YSBkYXRhXCIpO1xuICB9KTtcblxuICAvKipcbiAgICogR2V0IGJ1ZGdldCBzdGF0cyBmcm9tIENodWJicyAtIGR5bmFtaWMgZnJvbSBQb3N0R0lTLlxuICAgKi9cbiAgJGh0dHAuZ2V0KGNvbmZpZy5jaHViYnNQYXRoKCdzZXJ2aWNlcy9jdXN0b20vY3VzdG9tX29wZXJhdGlvbj9uYW1lPXByb2plY3R0b3RhbGJ1ZGdldCZmb3JtYXQ9anNvbicpLCB7Y2FjaGU6IHRydWV9KS5zdWNjZXNzKGZ1bmN0aW9uIChkYXRhLCBzdGF0dXMpIHtcbiAgICBpZiAoZGF0YS5sZW5ndGggPiAwKSB7XG4gICAgICAkc2NvcGUuYnVkZ2V0Lm1pbiA9IGRhdGFbMF0ubWluO1xuICAgICAgJHNjb3BlLmJ1ZGdldC5tZWFuID0gZGF0YVswXS5hdmc7XG4gICAgICAkc2NvcGUuYnVkZ2V0Lm1heCA9IGRhdGFbMF0ubWF4O1xuICAgICAgJHNjb3BlLmJ1ZGdldC5zbGlkZXIgPSBbZGF0YVswXS5taW4sIGRhdGFbMF0ubWF4XTtcbiAgICB9XG4gIH0pLmVycm9yKGZ1bmN0aW9uKCkge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJVbmFibGUgdG8gZmV0Y2ggVG90YWwgQnVkZ2V0IE1pbiwgTWVhbiwgTWF4XCIpO1xuICB9KTtcblxuICAkc2NvcGUuZGF0ZUZpbHRlcnMgPSBbXG4gICAge1xuICAgICAgbmFtZTogJ1N0YXJ0IERhdGUnLFxuICAgICAgcmFkaW86ICdvbicsXG4gICAgICBlbXB0eTogdHJ1ZSxcbiAgICAgIG9wZW5lZDogZmFsc2VcbiAgICB9LHtcbiAgICAgIG5hbWU6ICdFbmQgRGF0ZScsXG4gICAgICByYWRpbzogJ29uJyxcbiAgICAgIGVtcHR5OiB0cnVlLFxuICAgICAgb3BlbmVkOiBmYWxzZVxuICAgIH0se1xuICAgICAgbmFtZTogJ0NyZWF0ZSBEYXRlJyxcbiAgICAgIHJhZGlvOiAnb24nLFxuICAgICAgZW1wdHk6IHRydWUsXG4gICAgICBvcGVuZWQ6IGZhbHNlXG4gICAgfSx7XG4gICAgICBuYW1lOiAnTGFzdCBNb2RpZmllZCcsXG4gICAgICByYWRpbzogJ29uJyxcbiAgICAgIGVtcHR5OiB0cnVlLFxuICAgICAgb3BlbmVkOiBmYWxzZVxuICAgIH1cbiAgXTtcblxuICAkc2NvcGUudG9nZ2xlRGF0ZSA9IGZ1bmN0aW9uKCRldmVudCwgZGF0ZUZpbHRlcikge1xuICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgIGRhdGVGaWx0ZXIub3BlbmVkID0gIWRhdGVGaWx0ZXIub3BlbmVkO1xuICB9O1xuXG4gICRzY29wZS5zZWN0b3JzRmlsdGVyID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWN0b3JzID0gJHNjb3BlLnNlY3RvcnM7XG4gICAgJHNjb3BlLnNlY3RvckNsYXVzZSA9IG51bGw7XG4gICAgdmFyIGZpcnN0ID0gdHJ1ZTtcbiAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gc2VjdG9ycy5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICAgICAgdmFyIHNlY3RvciA9IHNlY3RvcnNbaV07XG4gICAgICBpZiAoc2VjdG9yLmNoZWNrZWQpIHtcbiAgICAgICAgaWYgKGZpcnN0KSB7XG4gICAgICAgICAgJHNjb3BlLnNlY3RvckNsYXVzZSA9IFwic2VjdG9yX19jIExJS0UgJyVcIiArIHNlY3Rvci5uYW1lICsgXCIlJyBcIjtcbiAgICAgICAgICBmaXJzdCA9IGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICRzY29wZS5zZWN0b3JDbGF1c2UgKz0gXCJPUiBzZWN0b3JfX2MgTElLRSAnJVwiICsgc2VjdG9yLm5hbWUgKyBcIiUnIFwiO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgICRzY29wZS5jb21wb3NlV2hlcmVDbGF1c2UoKTtcbiAgfTtcblxuICAkc2NvcGUuY2xlYXJTZWN0b3JzRmlsdGVyID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWN0b3JzID0gJHNjb3BlLnNlY3RvcnM7XG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHNlY3RvcnMubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgICAgIHNlY3RvcnNbaV0uY2hlY2tlZCA9IGZhbHNlO1xuICAgIH1cbiAgICAkc2NvcGUuc2VjdG9yQ2xhdXNlID0gbnVsbDtcbiAgICAkc2NvcGUuY29tcG9zZVdoZXJlQ2xhdXNlKCk7XG4gIH07XG5cbiAgJHNjb3BlLnN0YXR1c0ZpbHRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc3RhdHVzID0gJHNjb3BlLnN0YXR1cztcbiAgICAkc2NvcGUuc3RhdHVzQ2xhdXNlID0gbnVsbDtcbiAgICB2YXIgZmlyc3QgPSB0cnVlO1xuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBzdGF0dXMubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgICAgIHZhciBzdGF0ID0gc3RhdHVzW2ldO1xuICAgICAgaWYgKHN0YXQuY2hlY2tlZCkge1xuICAgICAgICBpZiAoZmlyc3QpIHtcbiAgICAgICAgICAkc2NvcGUuc3RhdHVzQ2xhdXNlID0gXCJzdGF0dXNfX2MgTElLRSAnJVwiICsgc3RhdC5uYW1lICsgXCIlJyBcIjtcbiAgICAgICAgICBmaXJzdCA9IGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICRzY29wZS5zdGF0dXNDbGF1c2UgKz0gXCJPUiBzdGF0dXNfX2MgTElLRSAnJVwiICsgc3RhdC5uYW1lICsgXCIlJyBcIjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAkc2NvcGUuY29tcG9zZVdoZXJlQ2xhdXNlKCk7XG4gIH07XG5cbiAgJHNjb3BlLmNsZWFyU3RhdHVzRmlsdGVyID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzdGF0dXMgPSAkc2NvcGUuc3RhdHVzO1xuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBzdGF0dXMubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgICAgIHN0YXR1c1tpXS5jaGVja2VkID0gZmFsc2U7XG4gICAgfVxuICAgICRzY29wZS5zdGF0dXNDbGF1c2UgPSBudWxsO1xuICAgICRzY29wZS5jb21wb3NlV2hlcmVDbGF1c2UoKTtcbiAgfTtcblxuICAkc2NvcGUuZGF0ZUZpbHRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAkc2NvcGUuZGF0ZUNsYXVzZSA9IG51bGw7XG4gICAgdmFyIF9maXJzdCA9IHRydWU7XG4gICAgdmFyIGZpcnN0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKF9maXJzdCkge1xuICAgICAgICBfZmlyc3QgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgICAgfVxuICAgICAgcmV0dXJuICcgQU5EICc7XG4gICAgfTtcbiAgICB2YXIgZGF0ZUZpbHRlcnMgPSAkc2NvcGUuZGF0ZUZpbHRlcnM7XG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGRhdGVGaWx0ZXJzLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICB2YXIgZmlsdGVyID0gZGF0ZUZpbHRlcnNbaV07XG5cbiAgICAgIGlmIChmaWx0ZXIubmFtZSA9PT0gJ1N0YXJ0IERhdGUnICYmIGZpbHRlci5kYXRlKSB7XG4gICAgICAgICRzY29wZS5kYXRlQ2xhdXNlID0gZmlyc3QoKSArICdzdGFydF9kYXRlX19jJyArIGNvbXBhcmUoZmlsdGVyKSArIFwiJ1wiICsgZGF0ZVN0cmluZyhmaWx0ZXIuZGF0ZSkgKyBcIidcIjtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChmaWx0ZXIubmFtZSA9PT0gJ0VuZCBEYXRlJyAmJiBmaWx0ZXIuZGF0ZSkge1xuICAgICAgICAkc2NvcGUuZGF0ZUNsYXVzZSA9IGZpcnN0KCkgKyAnZW5kX2RhdGVfX2MnICsgY29tcGFyZShmaWx0ZXIpICsgXCInXCIgKyBkYXRlU3RyaW5nKGZpbHRlci5kYXRlKSArIFwiJ1wiO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKGZpbHRlci5uYW1lID09PSAnQ3JlYXRlIERhdGUnICYmIGZpbHRlci5kYXRlKSB7XG4gICAgICAgICRzY29wZS5kYXRlQ2xhdXNlID0gZmlyc3QoKSArICdjcmVhdGVkYXRlJyArIGNvbXBhcmUoZmlsdGVyKSArIFwiJ1wiICsgZGF0ZVN0cmluZyhmaWx0ZXIuZGF0ZSkgKyBcIidcIjtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChmaWx0ZXIubmFtZSA9PT0gJ0xhc3QgTW9kaWZpZWQnICYmIGZpbHRlci5kYXRlKSB7XG4gICAgICAgICRzY29wZS5kYXRlQ2xhdXNlID0gZmlyc3QoKSArICdsYXN0bW9kaWZpZWRkYXRlJyArIGNvbXBhcmUoZmlsdGVyKSArIFwiJ1wiICsgZGF0ZVN0cmluZyhmaWx0ZXIuZGF0ZSkgKyBcIidcIjtcbiAgICAgIH1cblxuICAgIH1cbiAgICAkc2NvcGUuY29tcG9zZVdoZXJlQ2xhdXNlKCk7XG4gIH07XG5cbiAgJHNjb3BlLmNsZWFyRGF0ZUZpbHRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAkc2NvcGUuZGF0ZUZpbHRlcnMgPSBbXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdTdGFydCBEYXRlJyxcbiAgICAgICAgcmFkaW86ICdvbicsXG4gICAgICAgIGVtcHR5OiB0cnVlLFxuICAgICAgICBvcGVuZWQ6IGZhbHNlLFxuICAgICAgICBkYXRlOiBudWxsXG4gICAgICB9LHtcbiAgICAgICAgbmFtZTogJ0VuZCBEYXRlJyxcbiAgICAgICAgcmFkaW86ICdvbicsXG4gICAgICAgIGVtcHR5OiB0cnVlLFxuICAgICAgICBvcGVuZWQ6IGZhbHNlLFxuICAgICAgICBkYXRlOiBudWxsXG4gICAgICB9LHtcbiAgICAgICAgbmFtZTogJ0NyZWF0ZSBEYXRlJyxcbiAgICAgICAgcmFkaW86ICdvbicsXG4gICAgICAgIGVtcHR5OiB0cnVlLFxuICAgICAgICBvcGVuZWQ6IGZhbHNlLFxuICAgICAgICBkYXRlOiBudWxsXG4gICAgICB9LHtcbiAgICAgICAgbmFtZTogJ0xhc3QgTW9kaWZpZWQnLFxuICAgICAgICByYWRpbzogJ29uJyxcbiAgICAgICAgZW1wdHk6IHRydWUsXG4gICAgICAgIG9wZW5lZDogZmFsc2UsXG4gICAgICAgIGRhdGU6IG51bGxcbiAgICAgIH1cbiAgICBdO1xuICAgICRzY29wZS5kYXRlQ2xhdXNlID0gbnVsbDtcbiAgICAkc2NvcGUuY29tcG9zZVdoZXJlQ2xhdXNlKCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFVzZWQgaW4gZGF0ZUZpbHRlci4gRGV0ZXJtaW5lcyB0aGUgcHJvcGVyIFNRTCBjb21wYXJhdG9yIHRvIHVzZVxuICAgKiBmb3IgZmlsdGVyaW5nIGEgZGF0ZS5cbiAgICpcbiAgICogQHBhcmFtIGZpbHRlclxuICAgKi9cbiAgZnVuY3Rpb24gY29tcGFyZShmaWx0ZXIpIHtcbiAgICB2YXIgcmFkaW8gPSBmaWx0ZXIucmFkaW87XG4gICAgaWYgKHJhZGlvID09PSAnb24nKSB7XG4gICAgICByZXR1cm4gJz0nO1xuICAgIH1cbiAgICBpZiAocmFkaW8gPT09ICdiZWZvcmUnKSB7XG4gICAgICByZXR1cm4gJzwnO1xuICAgIH1cbiAgICBpZiAocmFkaW8gPT09ICdhZnRlcicpIHtcbiAgICAgIHJldHVybiAnPic7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgZGF0ZSBhcyBZWVlZLU1NLUREXG4gICAqXG4gICAqIEBwYXJhbSBkYXRlXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqL1xuICBmdW5jdGlvbiBkYXRlU3RyaW5nKGRhdGUpIHtcbiAgICByZXR1cm4gZGF0ZS50b0lTT1N0cmluZygpLnNsaWNlKDAsMTApO1xuICB9XG5cbiAgJHNjb3BlLmJ1ZGdldEZpbHRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAkc2NvcGUuYnVkZ2V0Q2xhdXNlID0gbnVsbDtcbiAgICB2YXIgbWluID0gJHNjb3BlLmJ1ZGdldC5zbGlkZXJbMF07XG4gICAgdmFyIG1heCA9ICRzY29wZS5idWRnZXQuc2xpZGVyWzFdO1xuICAgIGlmIChtaW4gIT09IDAgJiYgbWF4ICE9PSAkc2NvcGUuYnVkZ2V0Lm1heCkgeyAvL2JvdGggbWluIGFuZCBtYXggY2hhbmdlZFxuICAgICAgJHNjb3BlLmJ1ZGdldENsYXVzZSA9ICd0b3RhbF9idWRnZXRfX2M+PScgKyBtaW4gKyAnIEFORCB0b3RhbF9idWRnZXRfX2M8PScgKyBtYXg7XG4gICAgfSBlbHNlIGlmIChtaW4gIT09IDApIHsgLy8gb25seSBtaW4gY2hhbmdlZFxuICAgICAgJHNjb3BlLmJ1ZGdldENsYXVzZSA9ICd0b3RhbF9idWRnZXRfX2M+PScgKyBtaW5cbiAgICB9IGVsc2UgaWYgKG1heCAhPT0gJHNjb3BlLmJ1ZGdldC5tYXgpIHsgLy8gb25seSBtYXggY2hhbmdlZFxuICAgICAgJHNjb3BlLmJ1ZGdldENsYXVzZSA9ICd0b3RhbF9idWRnZXRfX2M8PScgKyBtYXg7XG4gICAgfVxuICAgICRzY29wZS5jb21wb3NlV2hlcmVDbGF1c2UoKTtcbiAgfTtcblxuICAkc2NvcGUuY2xlYXJCdWRnZXRGaWx0ZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgJHNjb3BlLmJ1ZGdldC5zbGlkZXJbMF0gPSAkc2NvcGUuYnVkZ2V0Lm1pbjtcbiAgICAkc2NvcGUuYnVkZ2V0LnNsaWRlclsxXSA9ICRzY29wZS5idWRnZXQubWF4O1xuICAgICRzY29wZS5idWRnZXRDbGF1c2UgPSBudWxsO1xuICAgICRzY29wZS5jb21wb3NlV2hlcmVDbGF1c2UoKTtcbiAgfTtcblxuICAkc2NvcGUuY29tcG9zZVdoZXJlQ2xhdXNlID0gZnVuY3Rpb24gKCkge1xuICAgICRzY29wZS53aGVyZUNsYXVzZSA9IG51bGw7XG4gICAgdmFyIHBhcnRzID0gWyRzY29wZS5zZWN0b3JDbGF1c2UsICRzY29wZS5kYXRlQ2xhdXNlLCAkc2NvcGUuc3RhdHVzQ2xhdXNlLCAkc2NvcGUuYnVkZ2V0Q2xhdXNlXTtcbiAgICB2YXIgZmlyc3QgPSB0cnVlO1xuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBwYXJ0cy5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICAgICAgdmFyIHBhcnQgPSBwYXJ0c1tpXTtcbiAgICAgIGlmIChwYXJ0KSB7XG4gICAgICAgIGlmIChmaXJzdCkge1xuICAgICAgICAgICRzY29wZS53aGVyZUNsYXVzZSA9IHBhcnQ7XG4gICAgICAgICAgZmlyc3QgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAkc2NvcGUud2hlcmVDbGF1c2UgKz0gJ0FORCAnICsgcGFydDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoISRzY29wZS53aGVyZUNsYXVzZSkgJHNjb3BlLndoZXJlQ2xhdXNlID0gJ251bGwnO1xuICAgICRzY29wZS5zdWJtaXRGaWx0ZXIoKTtcbiAgfTtcblxuICAkc2NvcGUuc3VibWl0RmlsdGVyID0gZnVuY3Rpb24gKCkge1xuICAgICRzdGF0ZVBhcmFtcy5maWx0ZXJzID0gJHNjb3BlLndoZXJlQ2xhdXNlO1xuICAgIHZhciBzdGF0ZSA9ICRzdGF0ZS5jdXJyZW50Lm5hbWUgfHwgJ21haW4nO1xuICAgICRzdGF0ZS5nbyhzdGF0ZSwgJHN0YXRlUGFyYW1zKTtcbiAgfTtcblxuICAkc2NvcGUuY2xlYXJBbGxGaWx0ZXJzID0gZnVuY3Rpb24gKCkge1xuICAgICRzY29wZS5jbGVhclNlY3RvcnNGaWx0ZXIoKTtcbiAgICAkc2NvcGUuY2xlYXJTdGF0dXNGaWx0ZXIoKTtcbiAgICAkc2NvcGUuY2xlYXJEYXRlRmlsdGVyKCk7XG4gICAgJHNjb3BlLmNsZWFyQnVkZ2V0RmlsdGVyKCk7XG4gIH07XG5cbn0pO1xuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IE5pY2hvbGFzIEhhbGxhaGFuIDxuaGFsbGFoYW5Ac3BhdGlhbGRldi5jb20+XG4gKiAgICAgICBvbiAzLzI3LzE0LlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ0dlb0FuZ3VsYXInKS5jb250cm9sbGVyKCdJbmZvQ3RybCcsIGZ1bmN0aW9uKCRzY29wZSkge1xuICAkc2NvcGUucGFyYW1zID0gJHN0YXRlUGFyYW1zO1xufSk7IiwiLyoqXG4gKiBDcmVhdGVkIGJ5IE5pY2hvbGFzIEhhbGxhaGFuIDxuaGFsbGFoYW5Ac3BhdGlhbGRldi5jb20+XG4gKiAgICAgICBvbiAzLzI3LzE0LlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ0dlb0FuZ3VsYXInKS5jb250cm9sbGVyKCdMYXllcnNDdHJsJywgZnVuY3Rpb24oJHNjb3BlLCAkc3RhdGUsICRzdGF0ZVBhcmFtcywgTGF5ZXJDb25maWcsIFZlY3RvclByb3ZpZGVyKSB7XG4gICRzY29wZS5wYXJhbXMgPSAkc3RhdGVQYXJhbXM7XG4gICRzY29wZS56b29tID0gcGFyc2VJbnQoJHN0YXRlUGFyYW1zLnpvb20pO1xuICAkc2NvcGUubmF2VGFiID0gJ2NvbnRleHR1YWwnO1xuXG4gIGRlYnVnLkxheWVyQ29uZmlnID0gTGF5ZXJDb25maWc7XG4gIGRlYnVnLnNldEdhZG1MZXZlbCA9IFZlY3RvclByb3ZpZGVyLnNldEdhZG1MZXZlbDtcblxuICAkc2NvcGUuZ2FkbUxldmVsID0gJHN0YXRlUGFyYW1zLmxldmVsIHx8ICdhdXRvJztcblxuICAkc2NvcGUudGhlbWVMYXllciA9IExheWVyQ29uZmlnLnRoZW1lO1xuICAkc2NvcGUudGhlbWVjb3VudExheWVyID0gTGF5ZXJDb25maWcudGhlbWVjb3VudDtcblxuICAkc2NvcGUuc2V0QmFkZ2VzID0gZnVuY3Rpb24oYm9vbCkge1xuICAgIGlmIChib29sKSB7XG4gICAgICAkc2NvcGUudGhlbWVMYXllci5hY3RpdmUgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgJHNjb3BlLnRoZW1lTGF5ZXIuYWN0aXZlID0gdHJ1ZTtcbiAgICB9XG4gICAgJHNjb3BlLnRvZ2dsZU1hcExheWVyKCd0aGVtZWNvdW50JywgJHNjb3BlLnRoZW1lY291bnRMYXllcik7XG4gICAgJHNjb3BlLnRvZ2dsZU1hcExheWVyKCd0aGVtZScsICRzY29wZS50aGVtZUxheWVyKTtcblxuICB9O1xuXG4gICRzY29wZS4kd2F0Y2goJ2dhZG1MZXZlbCcsIGZ1bmN0aW9uIChuZXdWYWx1ZSkge1xuICAgICRzdGF0ZVBhcmFtcy5sZXZlbCA9IG5ld1ZhbHVlO1xuICAgIHZhciBzdGF0ZSA9ICRzdGF0ZS5jdXJyZW50Lm5hbWUgfHwgJ21haW4nO1xuICAgICRzdGF0ZS5nbyhzdGF0ZSwgJHN0YXRlUGFyYW1zKTtcbiAgfSk7XG5cbiAgJHNjb3BlLiRvbignbGV2ZWwtdXBkYXRlJywgZnVuY3Rpb24gKCkge1xuICAgIFZlY3RvclByb3ZpZGVyLnNldEdhZG1MZXZlbCgkc3RhdGVQYXJhbXMubGV2ZWwpO1xuICAgICRzY29wZS5nYWRtTGV2ZWwgPSAkc3RhdGVQYXJhbXMubGV2ZWxcbiAgfSk7XG5cbiAgJHNjb3BlLiRvbignem9vbS11cGRhdGUnLCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc29sZS5sb2coXCJ6b29tOiBcIiArICRzdGF0ZVBhcmFtcy56b29tKTtcbiAgICAkc2NvcGUuem9vbSA9IHBhcnNlSW50KCRzdGF0ZVBhcmFtcy56b29tKTtcbiAgfSk7XG5cbiAgLyoqXG4gICAqIFRoaXMgaXMgdGhlIGNvbGxlY3Rpb24gb2YgYWxsIG9mIHRoZSBsYXllcnMgd2UgaGF2ZS5cbiAgICogVGhpcyBpcyB1c2VkIGJ5IHRoZSBzZWFyY2hMYXllcnNGaWx0ZXIuXG4gICAqL1xuICAkc2NvcGUuYWxsTGF5ZXJzID0ge307XG4gIC8vIGJ1aWxkaW5nIHRoZSBhbGxMYXllcnMgbW9kZWxcbiAgZm9yICh2YXIgayBpbiBMYXllckNvbmZpZykge1xuICAgIHZhciBsYXllciA9IExheWVyQ29uZmlnW2tdO1xuXG4gICAgLy8gV2UgZG9uJ3Qgd2FudCB0byBzaG93IGxheWVycyB0aGF0IGFyZSBiYXNlbWFwcywgYW5kIHdlIGRvbid0IHdhbnQgdG8gc2hvdyB0aGUgZmluZCBmdW5jLlxuICAgICAgaWYgKCAgdHlwZW9mIGxheWVyID09PSAnZnVuY3Rpb24nXG4gICAgICB8fCBrID09PSAnYmFzZW1hcHMnXG4gICAgICB8fCBrID09PSAnYmJveCdcbiAgICAgIHx8IGxheWVyLnR5cGUgPT09ICdiYXNlbWFwJyApIHtcblxuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgJHNjb3BlLmFsbExheWVyc1trXSA9IGtleVRvT2JqKGspO1xuICB9XG5cbiAgJHNjb3BlLmxheWVyc1BhbmVscyA9IHtcbi8vICAgICdCb3VuZGFyaWVzJzoge30sXG4vLyAgICAnR2VvSlNPTic6IHt9LFxuLy8gICAgJ0tNTCc6IHt9LFxuLy8gICAgJ0NTVic6IHt9LFxuLy8gICAgJ1dNUyc6IHt9LFxuICAgICdDb250ZXh0dWFsIGxheWVyczonOiB7fVxuICB9O1xuXG4gIGZ1bmN0aW9uIGJ1aWxkTGF5ZXJzTW9kZWwoKSB7XG4gICAgJHNjb3BlLmxheWVyc1BhbmVsc1snQ29udGV4dHVhbCBsYXllcnM6J10gPSB7fTtcbiAgICBmb3IgKHZhciBsYXllcktleSBpbiBMYXllckNvbmZpZykge1xuICAgICAgdmFyIGxheWVyID0gTGF5ZXJDb25maWdbbGF5ZXJLZXldO1xuXG4gICAgICAvLyBXZSBkb24ndCB3YW50IHRvIHNob3cgbGF5ZXJzIHRoYXQgYXJlIGJhc2VtYXBzLCBhbmQgd2UgZG9uJ3Qgd2FudCB0byBzaG93IHRoZSBmaW5kIGZ1bmMuXG4gICAgICBpZiAoICB0eXBlb2YgbGF5ZXIgPT09ICdmdW5jdGlvbidcbiAgICAgICAgfHwgbGF5ZXJLZXkgPT09ICdiYXNlbWFwcydcbiAgICAgICAgfHwgbGF5ZXJLZXkgPT09ICdiYm94J1xuICAgICAgICB8fCBsYXllci50eXBlID09PSAnYmFzZW1hcCcgKSB7XG5cbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICghJHNjb3BlLiRzdGF0ZVBhcmFtcy50aGVtZSkge1xuICAgICAgICB2YXIgdGhlbWUgPSAncHJvamVjdCc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgdGhlbWUgPSAkc2NvcGUuJHN0YXRlUGFyYW1zLnRoZW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICB9XG5cbiAgICAgIGlmICghbGF5ZXIudGhlbWUgfHwgKGxheWVyLnRoZW1lLnRvTG93ZXJDYXNlKCkgIT09ICdhbGwnICYmIGxheWVyLnRoZW1lLnRvTG93ZXJDYXNlKCkgIT09IHRoZW1lKSApIHtcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgJHNjb3BlLmxheWVyc1BhbmVsc1snQ29udGV4dHVhbCBsYXllcnM6J11bbGF5ZXJLZXldID0ga2V5VG9PYmoobGF5ZXJLZXkpO1xuXG4gICAgfVxuICB9XG4gIGJ1aWxkTGF5ZXJzTW9kZWwoKTtcblxuICBkZWJ1Zy5sYXllcnNQYW5lbHMgPSAkc2NvcGUubGF5ZXJzUGFuZWxzO1xuXG4gIGZ1bmN0aW9uIGtleVRvT2JqKGtleSkge1xuICAgIHZhciB2YWwgPSBMYXllckNvbmZpZ1trZXldO1xuICAgIGlmICh0eXBlb2YgdmFsID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdXJsOiB2YWxcbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiB2YWw7XG4gIH1cblxuICAvL05IIFRPRE86IE5vdCB5ZXQgZnVsbHkgaW1wbGVtZW50ZWQgLSBwb3NzaWJsZSBleHRyYSBmZWF0dXJlLi4uXG4gIC8qKlxuICAgKiBMYXllcnMgdGhhdCBhcmUgYWN0aXZlIG9uIHRoZSBtYXAgYnV0IGFyZSBub3QgbWVudGlvbmVkIGluIExheWVyQ29uZmlnXG4gICAqIEB0eXBlIHt7fX1cbiAgICovXG4gICRzY29wZS5ub21hZExheWVycyA9IHt9O1xuXG5cbiAgLyoqXG4gICAqIFdoZW4gdGhlIHJvdXRlIGNoYW5nZXMsIHdlIHNob3VsZCBzZWUgd2hhdCBsYXllcnMgd2UgaGF2ZSBvbiB0aGVyZSBhbmQgaGF2ZSB0aGUgbGF5ZXJzXG4gICAqIGluIHRoZSBwYW5lbHMgY2hlY2tlZCBhY2NvcmRpbmdseS5cbiAgICovXG4gICRzY29wZS4kb24oJ2xheWVycy11cGRhdGUnLCBmdW5jdGlvbihldnQsIGxheWVycykge1xuXG4gICAgYnVpbGRMYXllcnNNb2RlbCgpO1xuXG4gICAgLy8gZ2l0aHViIGdpc3RzXG4gICAgJHNjb3BlLmxpc3RHaXN0cygpO1xuXG4gICAgLy8gcmVzZXQgdGhlIG5vbWFkIGxheWVyc1xuICAgIGZvciAodmFyIG5rIGluICRzY29wZS5ub21hZExheWVycykge1xuICAgICAgJHNjb3BlLm5vbWFkTGF5ZXJzW25rXS5hY3RpdmUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyByZXNldCB0aGUgbGF5ZXIgY29uZmlnIGxheWVyc1xuICAgIGZvciAodmFyIGxjayBpbiBMYXllckNvbmZpZykge1xuICAgICAgaWYgKHR5cGVvZiBMYXllckNvbmZpZ1tsY2tdID09PSAnb2JqZWN0JyAmJiBMYXllckNvbmZpZ1tsY2tdICE9PSBudWxsKSB7XG4gICAgICAgIExheWVyQ29uZmlnW2xja10uYWN0aXZlID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgdGhlIGxheWVyIGlzIGFjdGl2ZSBpbiBtYXAgbGF5ZXJzXG4gICAgICovXG4gICAgJHNjb3BlLm1hcExheWVycyA9IGxheWVycztcbiAgICAvLyBza2lwIHRoZSBmaXJzdCBsYXllciwgdGhlIGJhc2VtYXBcbiAgICBmb3IgKHZhciBpID0gMSwgbGVuID0gbGF5ZXJzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICB2YXIgbCA9IGxheWVyc1tpXTtcbiAgICAgIC8vIGxheWVyIGlzIGluIHRoZSBsYXllciBjb25maWdcbiAgICAgIGlmICh0eXBlb2YgTGF5ZXJDb25maWdbbF0gPT09ICdvYmplY3QnICYmIExheWVyQ29uZmlnW2xdICE9PSBudWxsKSB7XG4gICAgICAgIExheWVyQ29uZmlnW2xdLmFjdGl2ZSA9IHRydWU7XG4gICAgICB9XG4gICAgICAvLyBsYXllciBpcyBhIGdpdGh1YiBnaXN0XG4gICAgICBlbHNlIGlmICgkc2NvcGUuZ2lzdHNbbF0pIHtcbiAgICAgICAgJHNjb3BlLmdpc3RzW2xdLmFjdGl2ZSA9IHRydWU7XG4gICAgICB9XG4gICAgICAvLyBsYXllciBpcyBhIG5vdCBpbiB0aGUgbGF5ZXIgY29uZmlnLiBpdCdzIG5vbWFkaWMuXG4gICAgICBlbHNlIHtcbiAgICAgICAgJHNjb3BlLm5vbWFkTGF5ZXJzW2xdID0ge1xuICAgICAgICAgIG5hbWU6IGwsXG4gICAgICAgICAgdXJsOiBsLFxuICAgICAgICAgIGFjdGl2ZTogdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuXG4gICRzY29wZS50b2dnbGVNYXBMYXllciA9IGZ1bmN0aW9uIChsYXllcktleSwgbGF5ZXIpIHtcblxuICAgIC8vIGFkZCBsYXllclxuICAgIGlmIChsYXllci5hY3RpdmUgPT09IHRydWUpIHtcbiAgICAgICRzY29wZS5tYXBMYXllcnMucHVzaChsYXllcktleSk7XG5cbiAgICAvLyByZW1vdmUgbGF5ZXJcbiAgICB9IGVsc2Uge1xuICAgICAgJHNjb3BlLm1hcExheWVycyA9ICQuZ3JlcCgkc2NvcGUubWFwTGF5ZXJzLCBmdW5jdGlvbihyb3V0ZUxheWVyKXtcbiAgICAgICAgcmV0dXJuIHJvdXRlTGF5ZXIgIT09IGxheWVyS2V5O1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgJHN0YXRlUGFyYW1zLmxheWVycyA9ICRzY29wZS5tYXBMYXllcnMuam9pbignLCcpO1xuICAgIHZhciBzdGF0ZSA9ICRzdGF0ZS5jdXJyZW50Lm5hbWUgfHwgJ21haW4nO1xuICAgICRzdGF0ZS5nbyhzdGF0ZSwgJHN0YXRlUGFyYW1zKTtcblxuICB9O1xuXG5cbiAgJHNjb3BlLmxpc3RHaXN0cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAkc2NvcGUuZ2lzdHMgPSBnaXN0cy5mZXRjaCgpO1xuICAgIGlmICgkc2NvcGUuZ2lzdHMpIHtcbiAgICAgICRzY29wZS5udW1HaXN0cyA9IE9iamVjdC5rZXlzKCRzY29wZS5naXN0cykubGVuZ3RoO1xuICAgIH0gZWxzZSB7XG4gICAgICAkc2NvcGUubnVtR2lzdHMgPSAwO1xuICAgIH1cbiAgfTtcbiAgJHNjb3BlLmxpc3RHaXN0cygpO1xuICBkZWJ1Zy5naXN0c0xheWVyc1BhbmVsID0gJHNjb3BlLmdpc3RzO1xuXG4gICRzY29wZS5zZWFyY2hMYXllcnMgPSAkc2NvcGUuYWxsTGF5ZXJzO1xuXG4gICRzY29wZS5zZWFyY2ggPSBmdW5jdGlvbihzZWFyY2hUZXh0KSB7XG4gICAgdmFyIGxheWVycyA9ICRzY29wZS5hbGxMYXllcnM7XG4gICAgaWYgKHR5cGVvZiBzZWFyY2hUZXh0ID09PSAnc3RyaW5nJykge1xuICAgICAgc2VhcmNoVGV4dCA9IHNlYXJjaFRleHQudG9Mb3dlckNhc2UoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgJHNjb3BlLnNlYXJjaExheWVycyA9IGxheWVycztcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHNlYXJjaExheWVycyA9IHt9O1xuICAgIGZvciAodmFyIGsgaW4gbGF5ZXJzKSB7XG4gICAgICB2YXIgbCA9IGxheWVyc1trXTtcbiAgICAgIGZvciAodmFyIGsyIGluIGwpIHtcbiAgICAgICAgdmFyIHZhbCA9IGxbazJdLnRvU3RyaW5nKCk7XG4gICAgICAgIGlmICh2YWwudG9Mb3dlckNhc2UoKS5pbmRleE9mKHNlYXJjaFRleHQpID4gLTEpIHtcbiAgICAgICAgICBzZWFyY2hMYXllcnNba10gPSBsO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB2YXIgcHJvcHMgPSBsLnByb3BlcnRpZXM7XG4gICAgICBpZiAocHJvcHMpIHtcbiAgICAgICAgZm9yICh2YXIgazMgaW4gcHJvcHMpIHtcbiAgICAgICAgICB2YXIgdmFsID0gcHJvcHNbazNdLnRvU3RyaW5nKCk7XG4gICAgICAgICAgaWYgKHZhbC50b0xvd2VyQ2FzZSgpLmluZGV4T2Yoc2VhcmNoVGV4dCkgPiAtMSkge1xuICAgICAgICAgICAgc2VhcmNoTGF5ZXJzW2tdID0gbDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAkc2NvcGUuc2VhcmNoTGF5ZXJzID0gc2VhcmNoTGF5ZXJzO1xuICB9O1xuXG59KTtcblxuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IE5pY2hvbGFzIEhhbGxhaGFuIDxuaGFsbGFoYW5Ac3BhdGlhbGRldi5jb20+XG4gKiAgICAgICBvbiAzLzI3LzE0LlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ0dlb0FuZ3VsYXInKS5jb250cm9sbGVyKCdMZWdlbmRDdHJsJywgZnVuY3Rpb24oJHNjb3BlLCBMYXllckNvbmZpZywgJHN0YXRlUGFyYW1zKSB7XG5cbiAgJHNjb3BlLiRvbignbGF5ZXJzLXVwZGF0ZScsIGZ1bmN0aW9uIChldnQsIGxheWVycykge1xuICAgICRzY29wZS5sYXllcnMgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gbGF5ZXJzLmxlbmd0aCAtIDE7IGkgPj0gMTsgaS0tKXtcbiAgICAgIHZhciBsID0gbGF5ZXJzW2ldO1xuICAgICAgdmFyIGxheWVyID0ge307XG4gICAgICB2YXIgbGNmZyA9IExheWVyQ29uZmlnLmZpbmQobCk7XG5cbiAgICAgIGxheWVyLmFsaWFzID0gbDtcbiAgICAgIGxheWVyLm5hbWUgPSBsY2ZnLm5hbWU7XG4gICAgICBpZihsID09PSAndGhlbWVjb3VudCcgfHwgbCA9PT0gJ3RoZW1lJyl7XG4gICAgICAgICAgbGF5ZXIubmFtZSA9ICRzdGF0ZVBhcmFtcy50aGVtZSB8fCAnUHJvamVjdCc7XG4gICAgICB9XG4gICAgICBpZiAoIW5hbWUgJiYgbGNmZy5wcm9wZXJ0aWVzICYmIGxjZmcucHJvcGVydGllcy50aXRsZSkge1xuICAgICAgICBsYXllci5uYW1lID0gbGNmZy5wcm9wZXJ0aWVzLnRpdGxlO1xuICAgICAgfSBlbHNlIGlmICghbGF5ZXIubmFtZSkge1xuICAgICAgICBsYXllci5uYW1lID0gbDtcbiAgICAgIH1cblxuICAgICAgaWYobGNmZy5wcm9wZXJ0aWVzKXtcbiAgICAgICAgICBpZihsY2ZnLnByb3BlcnRpZXMubGVnZW5kKXtcbiAgICAgICAgICAgICAgaWYodHlwZW9mIGxjZmcucHJvcGVydGllcy5sZWdlbmQgPT09ICdmdW5jdGlvbicpe1xuICAgICAgICAgICAgICAgICAgICAvL0J1aWxkIHRoZSBsZWdlbmQgZWxlbWVudFxuICAgICAgICAgICAgICAgICAgICBsYXllci5hY3RpdmVMZWdlbmQgPSBsY2ZnLnByb3BlcnRpZXMubGVnZW5kKCRzdGF0ZVBhcmFtcy50aGVtZSB8fCAncHJvamVjdCcpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgICAvL0lmIGxlZ2VuZCBpcyBhIHN0cmluZywgdXNlIGl0IGRpcmVjdGx5XG4gICAgICAgICAgICAgICAgICBsYXllci5hY3RpdmVMZWdlbmQgPSBsY2ZnLnByb3BlcnRpZXMubGVnZW5kO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgIC8vTm8gbGVnZW5kIGRlZmluZWQuICBVc2UgYSBkZWZhdWx0LlxuXG4gICAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAkc2NvcGUubGF5ZXJzLnB1c2gobGF5ZXIpO1xuICAgIH1cbiAgfSk7XG5cbn0pOyIsIm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ0dlb0FuZ3VsYXInKS5jb250cm9sbGVyKCdNYWluQ3RybCcsIGZ1bmN0aW9uKCRzY29wZSwgJHJvb3RTY29wZSwgJHN0YXRlLCAkc3RhdGVQYXJhbXMsICRsb2NhdGlvbikge1xuICBkZWJ1Zy4kbG9jYXRpb24gPSAkbG9jYXRpb247XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdkZWZhdWx0Um91dGUnLCAkbG9jYXRpb24ucGF0aCgpKTtcblxuICAvLyBOSCBUT0RPOiBTZWUgaWYgdGhpcyBpcyBhbHNvIHRoZSBjYXNlIHdpdGggdWktcm91dGVyP1xuICAvLyB3ZWlyZCBidWcgd2hlcmUgcmVkaXJlY3QgcGVlbHMgb3V0ICc6Ly97cycgd2hlbiAnOicgaXMgdGhlcmVcbiAgLy8gJHJvdXRlUGFyYW1zLmxheWVycyBXZSBqdXN0IGRvbnQgaGF2ZSB0aGUgOiBpbiBtYWluLmpzIHNvIHRoYXRcbiAgLy8gcGFydCBvZiB0aGUgcGF0aCBkb2VzIG5vdCBnbyBhd2F5Li4uXG4gIHZhciBsYXllcnNTdHIgPSAkc3RhdGVQYXJhbXMubGF5ZXJzID0gJHN0YXRlUGFyYW1zLmxheWVycy5yZXBsYWNlKCdodHRwLy8nLCAnaHR0cDovLycpO1xuICB2YXIgdGhlbWVTdHIgPSAkc3RhdGVQYXJhbXMudGhlbWU7XG5cbiAgdmFyIGxldmVsU3RyID0gJHN0YXRlUGFyYW1zLmxldmVsO1xuICB2YXIgem9vbVN0ciA9ICRzdGF0ZVBhcmFtcy56b29tO1xuXG4gICRyb290U2NvcGUuJGJyb2FkY2FzdCgncm91dGUtdXBkYXRlJyk7XG5cbiAgLyoqXG4gICAqIE9ubHkgaWYgdGhlIGxhdGVzdCByb3V0ZSBoYXMgYSBkaWZmZXJlbnQgbGF5ZXIgc3RyaW5nIHRoYW4gYmVmb3JlLlxuICAgKi9cbiAgaWYgKGxheWVyc1N0ciAhPT0gd2luZG93LnByZXZMYXllcnNTdHIgfHwgdGhlbWVTdHIgIT09IHdpbmRvdy5wcmV2VGhlbWUpIHtcbiAgICB3aW5kb3cucHJldkxheWVyc1N0ciA9IGxheWVyc1N0cjtcbiAgICB3aW5kb3cucHJldlRoZW1lID0gdGhlbWVTdHI7XG4gICAgdmFyIGxheWVycyA9IGxheWVyc1N0ci5zcGxpdCgnLCcpO1xuICAgICRyb290U2NvcGUuJGJyb2FkY2FzdCgnbGF5ZXJzLXVwZGF0ZScsIGxheWVycyk7XG4gIH1cblxuICBpZiAobGV2ZWxTdHIgIT09IG51bGwgJiYgbGV2ZWxTdHIgIT09IHdpbmRvdy5wcmV2TGV2ZWxTdHIpIHtcbiAgICB3aW5kb3cucHJldkxldmVsU3RyID0gbGV2ZWxTdHI7XG4gICAgJHJvb3RTY29wZS4kYnJvYWRjYXN0KCdsZXZlbC11cGRhdGUnLCBsZXZlbFN0cik7XG4gIH1cblxuICBpZiAoem9vbVN0ciAhPT0gd2luZG93LnByZXZab29tU3RyKSB7XG4gICAgd2luZG93LnByZXZab29tU3RyID0gem9vbVN0cjtcbiAgICAkcm9vdFNjb3BlLiRicm9hZGNhc3QoJ3pvb20tdXBkYXRlJywgem9vbVN0cik7XG4gIH1cblxufSk7XG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgTmljaG9sYXMgSGFsbGFoYW4gPG5oYWxsYWhhbkBzcGF0aWFsZGV2LmNvbT5cbiAqICAgICBvbiBNb24gTWFyIDE3IDIwMTRcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdHZW9Bbmd1bGFyJykuY29udHJvbGxlcignTWFwQ3RybCcsIGZ1bmN0aW9uICgkc2NvcGUsICRyb290U2NvcGUsICRzdGF0ZSwgJHN0YXRlUGFyYW1zLCBsZWFmbGV0RGF0YSwgTGF5ZXJDb25maWcsIFZlY3RvclByb3ZpZGVyKSB7XG4gICRzY29wZS5wYXJhbXMgPSAkc3RhdGVQYXJhbXM7XG5cbiAgdmFyIGxhc3RMYXllcnNTdHIgPSAnJztcbiAgJHNjb3BlLmJsdXIgPSAnJztcbiAgJHNjb3BlLmdyYXlvdXQgPSAnJzsgLy91c2UgdGhpcyBjbGFzcyB0byBncmF5IG91dCB0aGUgbWFwLCBzdWNoIGFzIHdoZW4gdGhlIGNvdW50cnkgc2VsZWN0b3IgbWVudSBpcyBhY3RpdmVcblxuICAkc2NvcGUudG9nZ2xlU3RhdGUgPSBmdW5jdGlvbihzdGF0ZU5hbWUpIHtcbiAgICB2YXIgc3RhdGUgPSAkc3RhdGUuY3VycmVudC5uYW1lICE9PSBzdGF0ZU5hbWUgPyBzdGF0ZU5hbWUgOiAnbWFpbic7XG4gICAgJHN0YXRlLmdvKHN0YXRlLCAkc3RhdGVQYXJhbXMpO1xuICB9O1xuXG4gIHZhciBsYXllcnNTdHIgPSBudWxsO1xuICB2YXIgb3ZlcmxheU5hbWVzID0gW107XG4gIHZhciB0aGVtZSA9IG51bGw7XG4gIHZhciBmaWx0ZXJzID0gbnVsbDtcblxuICBmdW5jdGlvbiByZWRyYXcoKSB7XG4gICAgdmFyIGxhdCA9IHBhcnNlRmxvYXQoJHN0YXRlUGFyYW1zLmxhdCkgICB8fCAwO1xuICAgIHZhciBsbmcgPSBwYXJzZUZsb2F0KCRzdGF0ZVBhcmFtcy5sbmcpICAgfHwgMDtcbiAgICB2YXIgem9vbSA9IHBhcnNlRmxvYXQoJHN0YXRlUGFyYW1zLnpvb20pIHx8IDE3O1xuICAgIGxheWVyc1N0ciA9ICRzdGF0ZVBhcmFtcy5sYXllcnMgfHwgTGF5ZXJDb25maWcucmVkY3Jvc3MudXJsO1xuICAgIHZhciBsYXllcnMgPSBsYXllcnNTdHIuc3BsaXQoJywnKTtcblxuICAgIC8vIGZpcnN0IGxheWVyIHNob3VsZCBhbHdheXMgYmUgdHJlYXRlZCBhcyB0aGUgYmFzZW1hcFxuICAgIHZhciBiYXNlbWFwID0gTGF5ZXJDb25maWcuZmluZChsYXllcnNbMF0pIHx8IExheWVyQ29uZmlnLnJlZGNyb3NzLnVybDtcbiAgICBpZiAodHlwZW9mIGJhc2VtYXAgPT09ICdzdHJpbmcnKSB7XG4gICAgICB2YXIgYmFzZW1hcFVybCA9IGJhc2VtYXA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBiYXNlbWFwVXJsID0gYmFzZW1hcC51cmw7XG4gICAgfVxuICAgIG92ZXJsYXlOYW1lcyA9IGxheWVycy5zbGljZSgxKTtcblxuICAgIGlmIChsYXN0TGF5ZXJzU3RyICE9PSBsYXllcnNTdHIpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdTZXR0aW5nIGxheWVycy4nKTtcbiAgICAgIGRyYXdPdmVybGF5cygpO1xuXG4gICAgICAkc2NvcGUuZGVmYXVsdHMgPSB7XG4gICAgICAgIHNjcm9sbFdoZWVsWm9vbTogdHJ1ZVxuICAgICAgfTtcblxuICAgICAgJHNjb3BlLnRpbGVzID0ge1xuICAgICAgICB1cmw6IGJhc2VtYXBVcmxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgaWYgKHRoZW1lICE9ICRzdGF0ZVBhcmFtcy50aGVtZSB8fCBmaWx0ZXJzICE9ICRzdGF0ZVBhcmFtcy5maWx0ZXJzKSB7IC8vIG51bGwgYW5kIHVuZGVmaW5lZCBzaG91bGQgYmUgPT1cbiAgICAgIHJlc2V0VGhlbWVDb3VudCgpO1xuICAgICAgdGhlbWUgPSAkc3RhdGVQYXJhbXMudGhlbWU7XG4gICAgICBmaWx0ZXJzID0gJHN0YXRlUGFyYW1zLmZpbHRlcnM7XG4gICAgfVxuXG4gICAgJHNjb3BlLmNlbnRlciA9IHtcbiAgICAgIGxhdDogbGF0LFxuICAgICAgbG5nOiBsbmcsXG4gICAgICB6b29tOiB6b29tXG4gICAgfTtcblxuICAgIGJyb2FkY2FzdEJCb3goKTtcbiAgICBsYXN0TGF5ZXJzU3RyID0gbGF5ZXJzU3RyO1xuICB9XG4gIHJlZHJhdygpO1xuXG5cbiAgLyoqKlxuICAgKiBCcm9hZGNhc3QgTGlzdGVuZXJzLlxuICAgKi9cbiAgJHNjb3BlLiRvbigncm91dGUtdXBkYXRlJywgZnVuY3Rpb24oKSB7XG4gICAgaWYgKCRzY29wZS5ibHVyID09PSAnYmx1cicgJiYgJHN0YXRlLmN1cnJlbnQubmFtZSAhPT0gJ2xhbmRpbmcnKSB7XG4gICAgICAkc2NvcGUuYmx1ciA9ICcnO1xuICAgIH1cbiAgICB2YXIgYyA9ICRzY29wZS5jZW50ZXI7XG4gICAgdmFyIGxhdCA9IGMubGF0LnRvRml4ZWQoNik7XG4gICAgdmFyIGxuZyA9IGMubG5nLnRvRml4ZWQoNik7XG4gICAgdmFyIHpvb20gPSBjLnpvb20udG9TdHJpbmcoKTtcbiAgICBpZiAobWFwTW92ZUVuZCkge1xuICAgICAgbWFwTW92ZUVuZCA9IGZhbHNlO1xuICAgIH0gZWxzZSBpZiAoICAkc3RhdGVQYXJhbXMubGF0ICAgICAhPT0gbGF0XG4gICAgICAgICAgICAgIHx8ICRzdGF0ZVBhcmFtcy5sbmcgICAgICE9PSBsbmdcbiAgICAgICAgICAgICAgfHwgJHN0YXRlUGFyYW1zLnpvb20gICAgIT09IHpvb21cbiAgICAgICAgICAgICAgfHwgJHN0YXRlUGFyYW1zLmxheWVycyAgIT09IGxheWVyc1N0clxuICAgICAgICAgICAgICB8fCAkc3RhdGVQYXJhbXMudGhlbWUgICAhPT0gdGhlbWVcbiAgICAgICAgICAgICAgfHwgJHN0YXRlUGFyYW1zLmZpbHRlcnMgIT09IGZpbHRlcnMgICApIHtcblxuICAgICAgY29uc29sZS5sb2coJ21hcC5qcyByb3V0ZS11cGRhdGUgVXBkYXRpbmcgTWFwLi4uJyk7XG4gICAgICByZWRyYXcoKTtcbiAgICB9XG5cbiAgfSk7XG5cbiAgJHNjb3BlLiRvbignYmx1cicsIGZ1bmN0aW9uKCkge1xuICAgICRzY29wZS5ibHVyID0gJ2JsdXInO1xuICB9KTtcblxuICAvL3RoaXMgdGFrZXMgaW4gYSBXS1QgR2VvSlNPTiBFeHRlbnQgZ2VvbWV0cnlcbiAgJHNjb3BlLnpvb21Ub0V4dGVudCA9IGZ1bmN0aW9uKGV4dGVudCl7XG4gICAgZGVsZXRlICRzdGF0ZVBhcmFtc1snem9vbS1leHRlbnQnXTtcbiAgICAkc2NvcGUuYm91bmRzID0ge1xuICAgICAgbm9ydGhFYXN0OiB7IGxhdDogZXh0ZW50WzJdWzFdLCBsbmc6IGV4dGVudFsyXVswXSB9LFxuICAgICAgc291dGhXZXN0OiB7IGxhdDogZXh0ZW50WzBdWzFdLCBsbmc6IGV4dGVudFswXVswXSB9XG4gICAgfTtcbiAgfTtcblxuICAvL1RoaXMgdGFrZSBhIGxlYWZsZXQgYm91bmRzIG9iamVjdCBhbmQgaGFuZGxlcyBpdC5cbiAgZGVsZXRlICRzdGF0ZVBhcmFtc1snem9vbS1leHRlbnQnXTtcbiAgJHNjb3BlLnpvb21Ub0JvdW5kcyA9IGZ1bmN0aW9uKGJvdW5kcyl7XG4gICAgJHNjb3BlLmJvdW5kcyA9IHsgbm9ydGhFYXN0OiBib3VuZHMuZ2V0Tm9ydGhFYXN0KCksIHNvdXRoV2VzdDogYm91bmRzLmdldFNvdXRoV2VzdCgpfTtcbiAgfTtcblxuXG5cbiAgICBmdW5jdGlvbiBicm9hZGNhc3RCQm94KCkge1xuICAgIC8vTkggVE9ETyBGaXhtZS4gRmluZCBhIGJldHRlciBzb2x1dGlvbiB0aGFuIGEgc3BpbiBsb2NrLlxuICAgIGlmICghd2FpdCkge1xuICAgICAgd2FpdCA9IHRydWU7XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgIGxlYWZsZXREYXRhLmdldE1hcCgpLnRoZW4oZnVuY3Rpb24gKG1hcCkge1xuICAgICAgICAgIC8vR2V0IHRoZSBNSU4vTUFYIFRpbGUgWllYIGV4dGVudHMuXG4gICAgICAgICAgLy9JZiB0aGV5IGhhdmVuJ3QgY2hhZ25lZCwgdGhlbiBkb24ndCBwcm9jZWVkLlxuICAgICAgICAgIHZhciB0aWxlQm91bmRzID0gZ2V0Q3VycmVudFRpbGVCb3VuZHMobWFwKTtcbiAgICAgICAgICB2YXIgem9vbSA9IG1hcC5nZXRab29tKCk7XG5cbiAgICAgICAgICAkc2NvcGUuem9vbSA9IHpvb207XG4gICAgICAgICAgdmFyIG1pbnggPSB0aWxlQm91bmRzLm1pbi54O1xuICAgICAgICAgIHZhciBtYXh4ID0gdGlsZUJvdW5kcy5tYXgueDtcbiAgICAgICAgICB2YXIgbWlueSA9IHRpbGVCb3VuZHMubWluLnk7XG4gICAgICAgICAgdmFyIG1heHkgPSB0aWxlQm91bmRzLm1heC55O1xuXG4gICAgICAgICAgLy9EZXRlY3QgbmVnYXRpdmUgbWlucyBhbmQgc2V0IHRvIDBcbiAgICAgICAgICBpZihtaW54IDwgMCkgbWlueCA9IDA7XG4gICAgICAgICAgaWYobWlueSA8IDApIG1pbnkgPSAwO1xuXG4gICAgICAgICAgLy9DaGVjayBmb3IgZXh0cmVtZSB2YWx1ZXMgZ3JlYXRlciB0aGFuIHRoZSB0aWxlIGJvdW5kc1xuICAgICAgICAgIHZhciBleHRyZW1lVmFsdWUgPSBNYXRoLnBvdygyLCB6b29tKSAtIDE7XG5cbiAgICAgICAgICBpZihtYXh4ID4gZXh0cmVtZVZhbHVlKSBtYXh4ID0gZXh0cmVtZVZhbHVlO1xuICAgICAgICAgIGlmKG1heHkgPiBleHRyZW1lVmFsdWUpIG1heHkgPSBleHRyZW1lVmFsdWU7XG5cbiAgICAgICAgICB2YXIgc3RyID0gem9vbSArIFwiLFwiICsgIG1pbnggKyAnLCcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heHggKyAnLCcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbnkgKyAnLCcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heHk7XG5cbiAgICAgICAgICBWZWN0b3JQcm92aWRlci51cGRhdGVCQm94KHN0cik7XG5cbiAgICAgICAgfSk7XG4gICAgICAgIHdhaXQgPSBmYWxzZTtcbiAgICAgIH0sIDE1MCk7XG4gICAgfVxuXG4gIH1cblxuICAgIC8qKlxuICAgICAqIFJpcHBlZCBGcm9tIExlYWZsZXQgVGlsZUxheWVyXG4gICAgICogQ2FsY3VsYXRlIHRoZSBNYXgvTWluIFpZWCBUaWxlIGJvdW5kcy5cbiAgICAgKiBVc2UgdGhvc2UgdG8gc25hcCBCQm94IHJlcXVlc3RzIHNvIHdlIGNhbiBjYWNoZS5cbiAgICAgKi9cblxuICAgIGZ1bmN0aW9uIGdldEN1cnJlbnRUaWxlQm91bmRzKG1hcCl7XG4gICAgICAgIHZhciBib3VuZHMgPSBtYXAuZ2V0UGl4ZWxCb3VuZHMoKSxcbiAgICAgICAgICAgIHRpbGVTaXplID0gMjU2OyAvL1RPRE9cblxuICAgICAgICAvLyB0aWxlIGNvb3JkaW5hdGVzIHJhbmdlIGZvciB0aGUgY3VycmVudCB2aWV3XG4gICAgICAgIHZhciB0aWxlQm91bmRzID0gTC5ib3VuZHMoXG4gICAgICAgICAgICBib3VuZHMubWluLmRpdmlkZUJ5KHRpbGVTaXplKS5mbG9vcigpLFxuICAgICAgICAgICAgYm91bmRzLm1heC5kaXZpZGVCeSh0aWxlU2l6ZSkuZmxvb3IoKSk7XG5cbiAgICAgICAgcmV0dXJuIHRpbGVCb3VuZHM7XG4gICAgfVxuXG5cbiAgLyoqXG4gICAqIE5hdGl2ZSBMZWFmbGV0IE1hcCBPYmplY3RcbiAgICovXG4gIGxlYWZsZXREYXRhLmdldE1hcCgpLnRoZW4oZnVuY3Rpb24gKG1hcCkge1xuICAgIHdpbmRvdy5tYXAgPSBtYXA7XG4gICAgbWFwLm9uKCdtb3ZlZW5kJywgZnVuY3Rpb24gKCkgeyAvLyBtb3ZlIGlzIGdvb2QgdG9vXG4gICAgICB2YXIgYyA9IG1hcC5nZXRDZW50ZXIoKTtcbiAgICAgIHZhciBsYXQgPSBjLmxhdC50b0ZpeGVkKDYpO1xuICAgICAgdmFyIGxuZyA9IGMubG5nLnRvRml4ZWQoNik7XG4gICAgICB2YXIgem9vbSA9IG1hcC5nZXRab29tKCkudG9TdHJpbmcoKTtcblxuICAgICAgaWYgKCAgICRzdGF0ZVBhcmFtcy5sYXQgICE9PSBsYXRcbiAgICAgICAgfHwgJHN0YXRlUGFyYW1zLmxuZyAgIT09IGxuZ1xuICAgICAgICB8fCAkc3RhdGVQYXJhbXMuem9vbSAhPT0gem9vbSApIHtcblxuICAgICAgICBjb25zb2xlLmxvZygnbWFwOiBsYXQsbG5nLHpvb20gIT09ICRzdGF0ZVBhcmFtcycpO1xuICAgICAgICAkc3RhdGVQYXJhbXMubGF0ID0gbGF0O1xuICAgICAgICAkc3RhdGVQYXJhbXMubG5nID0gbG5nO1xuICAgICAgICAkc3RhdGVQYXJhbXMuem9vbSA9IHpvb207XG4gICAgICAgIG1hcE1vdmVFbmQgPSB0cnVlO1xuICAgICAgICAkc3RhdGUuZ28oJHN0YXRlLmN1cnJlbnQubmFtZSwgJHN0YXRlUGFyYW1zKTtcbiAgICAgICAgYnJvYWRjYXN0QkJveCgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy9Db25uZWN0IHRoZSBsYXlvdXQgb25yZXNpemUgZW5kIGV2ZW50XG4gICAgdHJ5IHtcbiAgICAgICAgd2luZG93LmxheW91dC5wYW5lcy5jZW50ZXIuYmluZChcImxheW91dHBhbmVvbnJlc2l6ZV9lbmRcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgbWFwLmludmFsaWRhdGVTaXplKCk7XG4gICAgICAgIH0pO1xuICAgIH1jYXRjaChlKXtcbiAgICAgICAgLy9Ob3RoaW5nXG4gICAgfVxuICB9KTtcblxuXG4gIHZhciBvdmVybGF5cyA9IFtdO1xuXG4gIGZ1bmN0aW9uIGRyYXdPdmVybGF5cygpIHtcbiAgICBsZWFmbGV0RGF0YS5nZXRNYXAoKS50aGVuKGZ1bmN0aW9uIChtYXApIHtcblxuICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IG92ZXJsYXlOYW1lcy5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICAgICAgICB2YXIgb3ZlcmxheU5hbWUgPSBvdmVybGF5TmFtZXNbaV07XG4gICAgICAgIHZhciBjdXJyT3ZlcmxheSA9IG92ZXJsYXlzW2ldO1xuXG4gICAgICAgIGlmIChjdXJyT3ZlcmxheSAmJiBjdXJyT3ZlcmxheS5vdmVybGF5TmFtZSA9PT0gb3ZlcmxheU5hbWUpIHtcbiAgICAgICAgICBjb250aW51ZTsgLy8gbGF5ZXIgaXMgYWxyZWFkeSB0aGVyZSwgY29udGludWUgb24hXG4gICAgICAgIH1cblxuICAgICAgICAvLyByZW1vdmUgdGhlIGN1cnJlbnQgbGF5ZXIgdGhhdCBpcyBub3Qgd2hhdCBzaG91bGQgYmUgdGhhdCBsYXllciBpbiB0aGUgbGlzdFxuICAgICAgICBlbHNlIGlmICggY3Vyck92ZXJsYXkgJiYgY3Vyck92ZXJsYXkuX21hcCApIHtcbiAgICAgICAgICBpZiAoY3Vyck92ZXJsYXkuZGVzdHJveVJlc291cmNlKSBjdXJyT3ZlcmxheS5kZXN0cm95UmVzb3VyY2UoKTtcbiAgICAgICAgICBtYXAucmVtb3ZlTGF5ZXIoY3Vyck92ZXJsYXkpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gdHJ5IGZvciBXTVMgKG5vdCBhIHZlY3RvciBsYXllcilcbiAgICAgICAgLy8gaWYgdGhpbmdzIGdldCBtb3JlIGZhbmN5IHdpdGggd21zLCBpdCBzaG91bGQgZ2V0IGl0cyBvd24gZmFjdG9yeVxuICAgICAgICBpZiAodHlwZW9mIExheWVyQ29uZmlnW292ZXJsYXlOYW1lXSA9PT0gJ29iamVjdCdcbiAgICAgICAgICAgICAgICAgICAgJiYgTGF5ZXJDb25maWdbb3ZlcmxheU5hbWVdLnR5cGUudG9Mb3dlckNhc2UoKSA9PT0gJ3dtcycpIHtcblxuICAgICAgICAgIHZhciBjZmcgPSBMYXllckNvbmZpZ1tvdmVybGF5TmFtZV07XG4gICAgICAgICAgdmFyIGxheWVyID0gTC50aWxlTGF5ZXIud21zKGNmZy51cmwsIHtcbiAgICAgICAgICAgIGZvcm1hdDogY2ZnLmZvcm1hdCB8fCAnaW1hZ2UvcG5nJyxcbiAgICAgICAgICAgIHRyYW5zcGFyZW50OiBjZmcudHJhbnNwYXJlbnQgfHwgdHJ1ZSxcbiAgICAgICAgICAgIGxheWVyczogY2ZnLmxheWVyc1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRpbGVzIHRoYXQgYXJlIGFuIG92ZXJsYXkuIE9TTSAvIEdvb2dsZSAvIE1hcG5payB0ZW5kIHRvIG1ha2UgdGlsZXMgaW4gdGhpcyBmb3JtYXQuXG4gICAgICAgICAqL1xuICAgICAgICBlbHNlIGlmICh0eXBlb2YgTGF5ZXJDb25maWdbb3ZlcmxheU5hbWVdID09PSAnb2JqZWN0J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAmJiBMYXllckNvbmZpZ1tvdmVybGF5TmFtZV0udHlwZS50b0xvd2VyQ2FzZSgpID09PSAneHl6Jykge1xuXG4gICAgICAgICAgdmFyIGNmZyA9IExheWVyQ29uZmlnW292ZXJsYXlOYW1lXTtcbiAgICAgICAgICB2YXIgbGF5ZXIgPSBMLnRpbGVMYXllcihjZmcudXJsLCB7XG4gICAgICAgICAgICBvcGFjaXR5OiBjZmcub3BhY2l0eSB8fCAwLjVcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUTVMgZmxpcHMgdGhlIHkuIEdlb1NlcnZlciBvZnRlbiBzZXJ2ZXMgdGhpcy5cbiAgICAgICAgICovXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBMYXllckNvbmZpZ1tvdmVybGF5TmFtZV0gPT09ICdvYmplY3QnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICYmIExheWVyQ29uZmlnW292ZXJsYXlOYW1lXS50eXBlLnRvTG93ZXJDYXNlKCkgPT09ICd0bXMnKSB7XG4gICAgICAgICAgdmFyIGNmZyA9IExheWVyQ29uZmlnW292ZXJsYXlOYW1lXTtcbiAgICAgICAgICB2YXIgbGF5ZXIgPSBMLnRpbGVMYXllcihjZmcudXJsLCB7XG4gICAgICAgICAgICBvcGFjaXR5OiBjZmcub3BhY2l0eSB8fCAwLjUsXG4gICAgICAgICAgICB0bXM6IHRydWVcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGlmIGl0cyBub3Qgd21zLCBpdHMgYSB2ZWN0b3IgbGF5ZXJcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgdmFyIHZlY1JlcyA9IFZlY3RvclByb3ZpZGVyLmNyZWF0ZVJlc291cmNlKG92ZXJsYXlOYW1lKTtcbiAgICAgICAgICB2YXIgbGF5ZXIgPSB2ZWNSZXMuZ2V0TGF5ZXIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxheWVyLm92ZXJsYXlOYW1lID0gb3ZlcmxheU5hbWU7XG4gICAgICAgIGxheWVyLmFkZFRvKG1hcCk7XG4gICAgICAgIG92ZXJsYXlzW2ldID0gbGF5ZXI7XG5cbiAgICAgIH1cblxuICAgICAgLy8gdGhlcmUgYXJlIG1vcmUgb3ZlcmxheXMgbGVmdCBpbiB0aGUgbGlzdCwgbGVzcyBsYXllcnMgc3BlY2lmaWVkIGluIHJvdXRlXG4gICAgICAvLyB3ZSBuZWVkIHRvIHJlbW92ZSB0aG9zZSB0b28uXG4gICAgICBmb3IodmFyIGxlbjIgPSBvdmVybGF5cy5sZW5ndGg7IGkgPCBsZW4yOyArK2kpIHtcbiAgICAgICAgaWYgKG92ZXJsYXlzW2ldLmRlc3Ryb3lSZXNvdXJjZSkgb3ZlcmxheXNbaV0uZGVzdHJveVJlc291cmNlKCk7XG4gICAgICAgIG1hcC5yZW1vdmVMYXllcihvdmVybGF5c1tpXSk7XG4gICAgICAgIGRlbGV0ZSBvdmVybGF5c1tpXTtcbiAgICAgIH1cblxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFVzZWQgcHJpdmF0ZWx5IHRvIHJlYnVpbGQgdGhlIHRoZW1lIGNvdW50IGxheWVyLlxuICAgKi9cbiAgZnVuY3Rpb24gcmVzZXRUaGVtZUNvdW50KCkge1xuICAgIGxlYWZsZXREYXRhLmdldE1hcCgpLnRoZW4oZnVuY3Rpb24gKG1hcCkge1xuICAgICAgZm9yICh2YXIgaiA9IDAsIGxlbiA9IG92ZXJsYXlOYW1lcy5sZW5ndGg7IGogPCBsZW47IGorKykge1xuICAgICAgICB2YXIgbm1lID0gb3ZlcmxheU5hbWVzW2pdO1xuICAgICAgICBpZiAobm1lID09PSAndGhlbWVjb3VudCcgfHwgbm1lID09PSAndGhlbWUnKSB7XG4gICAgICAgICAgdmFyIG9sZEx5ciA9IG92ZXJsYXlzW2pdO1xuICAgICAgICAgIG9sZEx5ci5kZXN0cm95UmVzb3VyY2UoKTtcbiAgICAgICAgICBtYXAucmVtb3ZlTGF5ZXIob2xkTHlyKTtcbiAgICAgICAgICB2YXIgbmV3THlyID0gb3ZlcmxheXNbal0gPSBWZWN0b3JQcm92aWRlci5jcmVhdGVSZXNvdXJjZShubWUpLmdldExheWVyKCk7XG4gICAgICAgICAgbmV3THlyLmFkZFRvKG1hcCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG59KTsiLCJtb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdHZW9Bbmd1bGFyJykuY29udHJvbGxlcignTmF2QmFyQ3RybCcsIGZ1bmN0aW9uKCRzY29wZSwgJHN0YXRlLCAkc3RhdGVQYXJhbXMpIHtcbiAgJHNjb3BlLnBhcmFtcyA9ICRzdGF0ZVBhcmFtcztcblxufSk7XG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgUnlhbiBXaGl0bGV5IDxyd2hpdGxleUBzcGF0aWFsZGV2LmNvbT5cbiAqICAgICAgIG9uIDUvMjEvMTQuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnR2VvQW5ndWxhcicpLmNvbnRyb2xsZXIoJ1NlYXJjaEVDT1NDdHJsJywgZnVuY3Rpb24oJHNjb3BlLCAkcm9vdFNjb3BlLCAkc3RhdGVQYXJhbXMsICRodHRwLCBWZWN0b3JQcm92aWRlcikge1xuICBjb25zb2xlLmxvZygnU2VhcmNoRUNPU0N0cmwnKTtcbiAgJHNjb3BlLnBhcmFtcyA9ICRzdGF0ZVBhcmFtcztcblxuICB2YXIgdXJsID0gY29uZmlnLmNodWJic1BhdGgoJ3NlcnZpY2VzL2N1c3RvbS9jdXN0b21fb3BlcmF0aW9uP25hbWU9ZG9lY29zdGV4dHNlYXJjaCZmb3JtYXQ9anNvbiZ0ZXh0PTp0ZXh0Jyk7XG5cbiAgJHNjb3BlLnNlYXJjaFRleHQgPSAnJztcbiAgJHNjb3BlLiR3YXRjaCgnU2VhcmNoSW5wdXQnLCBleGVjdXRlRUNPU1NlYXJjaCwgdHJ1ZSk7XG5cblxuICBmdW5jdGlvbiBleGVjdXRlRUNPU1NlYXJjaCAodGV4dCl7XG4gICAgICBpZighdGV4dCB8fCB0ZXh0Lmxlbmd0aCA8IDMpIHJldHVybjtcblxuICAgICAgdmFyIHRoaXNVUkwgPSB1cmwucmVwbGFjZShcIjp0ZXh0XCIsIHRleHQpO1xuXG4gICAgICAvLyBGZXRjaCBmcm9tIHRoZSBzZXJ2ZXIgb25seSBpZiB3ZSBkb24ndCBoYXZlIGl0IGluIHRoZSBoYXNoXG4gICAgICAkaHR0cC5nZXQodGhpc1VSTCkuc3VjY2VzcyhmdW5jdGlvbiAocmVzdWx0LCBzdGF0dXMpIHtcblxuICAgICAgICAgIGlmICghcmVzdWx0KXtcbiAgICAgICAgICAgICAgJHNjb3BlLnJlc3VsdHMgPSBbe25hbWU6IFwiTm8gcmVzdWx0cyBmb3VuZC5cIn1dO1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYocmVzdWx0LmVycm9yKSB7XG4gICAgICAgICAgICAgICRzY29wZS5yZXN1bHRzID0gW3tuYW1lOiBcIkVycm9yIHNlYXJjaGluZyBFQ09TLlwifV07XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvL2JyZWFrIHVwIHRoZSByZXN1bHRzIGJ5IHR5cGUuXG4gICAgICAgICAgJHNjb3BlLnByb2plY3RSZXN1bHRzID0gcmVzdWx0LmZpbHRlcihmdW5jdGlvbihpdGVtKXtcbiAgICAgICAgICAgICByZXR1cm4gaXRlbS50aGVtZV90eXBlID09ICdQcm9qZWN0JztcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgICRzY29wZS5kaXNhc3RlclJlc3VsdHMgPSByZXN1bHQuZmlsdGVyKGZ1bmN0aW9uKGl0ZW0pe1xuICAgICAgICAgICAgICByZXR1cm4gaXRlbS50aGVtZV90eXBlID09ICdEaXNhc3Rlcic7XG4gICAgICAgICAgfSk7XG5cbiAgICAgIH0pO1xuICB9XG5cbiAgICAkc2NvcGUuaGFuZGxlU2VhcmNoUmVzdWx0Q2xpY2sgPSBmdW5jdGlvbihwcm9wZXJ0aWVzKXtcbiAgICAgICAgLy9TZW5kIHRvIGRlYXRpbHMgcGFuZWxcbiAgICAgICAgc2VuZFByb2plY3RUb0RldGFpbHNQYW5lbChwcm9wZXJ0aWVzKTtcblxuICAgICAgICAvL0lmIHdlIGhhdmUgYSBndWlkLCB0aGVuIHRyeSB0byB6b29tIHRvIGl0LlxuICAgICAgICBpZihwcm9wZXJ0aWVzLmxvY2F0aW9uX19yX2dpc19nZW9faWRfX2MgJiYgcHJvcGVydGllcy5sZXZlbCl7XG4gICAgICAgICAgICB6b29tVG9HVUlEKHByb3BlcnRpZXMubG9jYXRpb25fX3JfZ2lzX2dlb19pZF9fYywgcHJvcGVydGllcy5sZXZlbCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gc2VuZFByb2plY3RUb0RldGFpbHNQYW5lbCAocHJvcGVydGllcyl7XG4gICAgICAgICRyb290U2NvcGUuJGJyb2FkY2FzdCgnZGV0YWlscycsIHsgZmVhdHVyZTogeyBwcm9wZXJ0aWVzOiBwcm9wZXJ0aWVzIH0gfSk7XG4gICAgfVxuXG5cbiAgICAvL3RoaXMgaXMgYSBkdXBsaWNhdGUgZnJvbSBicmVhZGNydW1icy5qcyAgU2hvdWxkIGJlIHJlZmFjdG9yZWQgdG8gYSBzaW5nbGUgZnVuY3Rpb25cbiAgICBmdW5jdGlvbiB6b29tVG9HVUlEIChndWlkLCBsZXZlbCkge1xuICAgICAgICAvL0dpdmVuIGEgR1VJRCwgem9vbSB0byB0aGUgZmVhdHVyZS5cblxuICAgICAgICAvL0dyYWIgdGhlIGZlYXR1cmUgZnJvbSB0aGUgVmVjdG9yUHJvdmlkZXIuXG4gICAgICAgIFZlY3RvclByb3ZpZGVyLmZldGNoRmVhdHVyZShndWlkLCBsZXZlbCwgbnVsbCwgZnVuY3Rpb24gKGZlYXQpIHtcbiAgICAgICAgICAgIC8vTWFrZSBhIHRlbXAgZ2VvanNvbiBsYXllciBhbmQgYWRkIHRoZSBnZW9qc29uLlxuICAgICAgICAgICAgLy9UaGVuIGdyYWIgdGhlIGJvdW5kcyBmcm9tIGl0IGFuZCB6b29tIHRvIGl0LlxuXG4gICAgICAgICAgICB2YXIgZ2psID0gTC5nZW9Kc29uKGZlYXQuZ2VvbWV0cnkpO1xuICAgICAgICAgICAgJHNjb3BlLiRwYXJlbnQuem9vbVRvQm91bmRzKGdqbC5nZXRCb3VuZHMoKSk7XG4gICAgICAgIH0pO1xuXG4gICAgfTtcbn0pO1xuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IE5pY2hvbGFzIEhhbGxhaGFuIDxuaGFsbGFoYW5Ac3BhdGlhbGRldi5jb20+XG4gKiAgICAgICAgYW5kIFJ5YW4gV2hpdGxleSAgICAgIDxyd2hpdGxleUBzcGF0aWFsZGV2LmNvbT5cbiAqICAgICAgICAgb24gNC8xNi8xNC5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdHZW9Bbmd1bGFyJykuY29udHJvbGxlcignU2lkZVZpZXdDdHJsJywgZnVuY3Rpb24oJHNjb3BlKSB7XG5cbiAgLy9yZXNpemUgZnVuY3Rpb25cbiAgZnVuY3Rpb24gcmVzaXplU2Nyb2xsYWJsZVBhbmVsKCkge1xuICAgICQoXCIuc2lkZS12aWV3IC5zY3JvbGxhYmxlXCIpLmhlaWdodCgkKFwiLnNpZGUtdmlldyAubmF2cGFuZWxcIikuaGVpZ2h0KCkgLSAkKFwiLnNpZGUtdmlldyAubmF2cGFuZWwgLnNjcm9sbGFibGVcIikucG9zaXRpb24oKS50b3ApOyAgLy9UaGlzIHNob3VsZCByZXNwb25kIHRvIHdpbmRvdy5yZXNpemUgZXZlbnRzIGFuZCB3aWxsIGJlIHNldCBkdXJpbmcgdGhhdCBldmVudCB0byBtYWtlIHN1cmUgdGhlIHBhbmVsIHN0YXlzXG4gIH1cblxuICAvL0Nvbm5lY3QgdGhlIGxheW91dCBvbnJlc2l6ZSBlbmQgZXZlbnRcbiAgd2luZG93LmxheW91dC5wYW5lcy5jZW50ZXIuYmluZChcImxheW91dHBhbmVvbnJlc2l6ZV9lbmRcIiwgcmVzaXplU2Nyb2xsYWJsZVBhbmVsKTtcblxuICAvL0ZvciBJbml0LlxuICByZXNpemVTY3JvbGxhYmxlUGFuZWwoKTtcblxufSk7XG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgTmljaG9sYXMgSGFsbGFoYW4gPG5oYWxsYWhhbkBzcGF0aWFsZGV2LmNvbT5cbiAqICAgICAgIG9uIDMvMjYvMTQuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnR2VvQW5ndWxhcicpLmNvbnRyb2xsZXIoJ1N0b3JpZXNDdHJsJywgZnVuY3Rpb24oJHNjb3BlLCAkc3RhdGVQYXJhbXMsIFN0b3JpZXNDb25maWcpIHtcbiAgJHNjb3BlLnBhcmFtcyA9ICRzdGF0ZVBhcmFtcztcblxuICAvL0dldCBTdG9yaWVzIGZyb20gY29uZmlnIGZpbGUgYW5kIGxvYWQgdGhlbS5cbiAgJHNjb3BlLnN0b3JpZXNDb25maWcgPSBTdG9yaWVzQ29uZmlnO1xuICAkc2NvcGUuc3RvcmllcyA9IFtdO1xuICAkc2NvcGUuc3Rvcmllc1NlYXJjaEFycmF5ID0gW107XG4gICRzY29wZS5zdG9yaWVzU2VhcmNoVGV4dCA9IFwiXCI7XG4gICRzY29wZS5zdG9yaWVzRXh0ZW50QXJyYXkgPSBbXTsgLy9jdXJyZW50bHkgbm90IHVzZWQsIGJ1dCBzaG91bGQgYmUgdG8gYWxsb3cgRXh0ZW50IHRvIHBlcmZvcm0gJ0FORCcgbG9naWMgd2l0aCB0aGUga2V5d29yZHMuXG5cbiAgZm9yICh2YXIgc3Rvcmllc0tleSBpbiBTdG9yaWVzQ29uZmlnKSB7XG5cbiAgICAvLyBXZSBkb24ndCB3YW50IHRvIHNob3cgdGhlIGZpbmQgZnVuYy5cbiAgICBpZiAodHlwZW9mIFN0b3JpZXNDb25maWdbc3Rvcmllc0tleV0gPT09ICdmdW5jdGlvbicgfHwgc3Rvcmllc0tleSA9PSAnc3RvcmllcycpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgICRzY29wZS5zdG9yaWVzLnB1c2goU3Rvcmllc0NvbmZpZ1tzdG9yaWVzS2V5XSk7XG4gIH1cblxuICAkc2NvcGUuZmlsdGVyQnlDaGVja2JveCA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgLy9UYWtlIHRoZSB0ZXJtIHBhc3NlZCBpbiBhbmQgYWRkIG9yIHJlbW92ZSBpdCBmcm9tIHRoZSBrZXl3b3JkcyB0ZXh0Ym94LlxuICAgIGlmICgkc2NvcGUuc3Rvcmllc1NlYXJjaEFycmF5LmluZGV4T2YodmFsdWUpID09IC0xKSB7XG4gICAgICAvL0FkZCBpdFxuICAgICAgJHNjb3BlLnN0b3JpZXNTZWFyY2hBcnJheS5wdXNoKHZhbHVlKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAvL1JlbW92ZSBpdFxuICAgICAgJHNjb3BlLnN0b3JpZXNTZWFyY2hBcnJheS5zcGxpY2UoJHNjb3BlLnN0b3JpZXNTZWFyY2hBcnJheS5pbmRleE9mKHZhbHVlKSwgMSk7XG4gICAgfVxuICB9O1xuXG4gICRzY29wZS5maWx0ZXJFeHRlbnRCeUNoZWNrYm94ID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICAvL1Rha2UgdGhlIHRlcm0gcGFzc2VkIGluIGFuZCBhZGQgb3IgcmVtb3ZlIGl0IGZyb20gdGhlIGtleXdvcmRzIHRleHRib3guXG4gICAgaWYgKCRzY29wZS5zdG9yaWVzRXh0ZW50QXJyYXkuaW5kZXhPZih2YWx1ZSkgPT0gLTEpIHtcbiAgICAgIC8vQWRkIGl0XG4gICAgICAkc2NvcGUuc3Rvcmllc0V4dGVudEFycmF5LnB1c2godmFsdWUpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIC8vUmVtb3ZlIGl0XG4gICAgICAkc2NvcGUuc3Rvcmllc0V4dGVudEFycmF5LnNwbGljZSgkc2NvcGUuc3Rvcmllc0V4dGVudEFycmF5LmluZGV4T2YodmFsdWUpLCAxKTtcbiAgICB9XG4gIH07XG5cbiAgJHNjb3BlLmNsZWFyU2VhcmNoID0gZnVuY3Rpb24oKSB7XG4gICAgJHNjb3BlLnN0b3JpZXNTZWFyY2hBcnJheSA9IFtdO1xuICAgICRzY29wZS5zdG9yaWVzU2VhcmNoVGV4dCA9IFwiXCI7XG4gICAgJHNjb3BlLnN0b3JpZXNFeHRlbnRBcnJheSA9IFtdO1xuICB9XG59KTtcblxuXG5hbmd1bGFyLm1vZHVsZSgnR2VvQW5ndWxhcicpLmZpbHRlcignc2VhcmNoU3Rvcmllc0ZpbHRlcicsIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBmdW5jdGlvbihzdG9yaWVzLCAkc2NvcGUpIHtcbiAgICAgIHZhciBvdXRTdG9yaWVzID0gW107XG4gICAgICBpZiAoc3Rvcmllcykge1xuICAgICAgICAvL2xvb3AgdGhydSBzdG9yaWVzIGFuZCBmaWx0ZXIgYmFzZWQgb24gc2VhcmNoIHRleHQvY2hlY2tib3hlcy5cbiAgICAgICAgLy9jb21tYSBzZXBhcmF0ZWQgaXRlbXMgc2hvdWxkIGJlIGJyb2tlbiB1cCBhbmQgc2VhcmNoZWQgZm9yIHNlcGFyYXRlbHkgdXNpbmcgJ09SJyBsb2dpYy5cblxuICAgICAgICB2YXIga2V5d29yZHMgPSBbXTtcbiAgICAgICAgaWYgKCRzY29wZS5zdG9yaWVzU2VhcmNoVGV4dC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAga2V5d29yZHMgPSAkc2NvcGUuc3Rvcmllc1NlYXJjaFRleHQuc3BsaXQoXCIsXCIpLmNvbmNhdCgkc2NvcGUuc3Rvcmllc1NlYXJjaEFycmF5KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBrZXl3b3JkcyA9ICRzY29wZS5zdG9yaWVzU2VhcmNoQXJyYXk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGtleXdvcmRzLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgcmV0dXJuIHN0b3JpZXM7XG4gICAgICAgIH1cblxuICAgICAgICBzdG9yaWVzLmZvckVhY2goZnVuY3Rpb24oc3RvcnkpIHtcbiAgICAgICAgICBrZXl3b3Jkcy5mb3JFYWNoKGZ1bmN0aW9uKGtleXdvcmQpIHtcbiAgICAgICAgICAgIGlmIChrZXl3b3JkLmxlbmd0aCA+IDAgJiYgc3Rvcnkua2V5d29yZHMudG9Mb3dlckNhc2UoKS5pbmRleE9mKCQudHJpbShrZXl3b3JkLnRvTG93ZXJDYXNlKCkpKSA+IC0xKSB7XG4gICAgICAgICAgICAgIGlmIChvdXRTdG9yaWVzLmluZGV4T2Yoc3RvcnkpID09IC0xKSB7XG4gICAgICAgICAgICAgICAgb3V0U3Rvcmllcy5wdXNoKHN0b3J5KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gc3RvcmllcztcbiAgICAgIH1cbiAgICAgIHJldHVybiBvdXRTdG9yaWVzO1xuICAgIH07XG4gIH0pOyIsIi8qKlxuICogQ3JlYXRlZCBieSBOaWNob2xhcyBIYWxsYWhhbiA8bmhhbGxhaGFuQHNwYXRpYWxkZXYuY29tPlxuICogICAgICAgb24gNS82LzE0LlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ0dlb0FuZ3VsYXInKS5jb250cm9sbGVyKCdUaGVtZUN0cmwnLCBmdW5jdGlvbiAoJHNjb3BlLCAkcm9vdFNjb3BlLCAkc3RhdGUsICRzdGF0ZVBhcmFtcywgVmVjdG9yUHJvdmlkZXIpIHtcblxuICB2YXIgdGhlbWVOYW1lSGFzaCA9ICRyb290U2NvcGUudGhlbWVOYW1lSGFzaCA9IHtcbiAgICBwcm9qZWN0OiAnUHJvamVjdHMnLFxuICAgIGRpc2FzdGVyOiAnRGlzYXN0ZXJzJyxcbiAgICBwcm9qZWN0UmlzazogJ1Byb2plY3QgUmlzaycsXG4gICAgcHJvamVjdEhlYWx0aDogJ1Byb2plY3QgSGVhbHRoJyxcbiAgICBub25lOiAnTm9uZSdcbiAgfTtcblxuICAkc2NvcGUucHJvamVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAkc2NvcGUudGhlbWVOYW1lID0gdGhlbWVOYW1lSGFzaC5wcm9qZWN0O1xuICAgIGVuc3VyZVRoZW1lQ291bnQoKTtcbiAgICAkc2NvcGUuc2V0VGhlbWVRdWVyeVBhcmFtKCdwcm9qZWN0Jyk7XG4gIH07XG5cbiAgJHNjb3BlLmRpc2FzdGVyID0gZnVuY3Rpb24gKCkge1xuICAgICRzY29wZS50aGVtZU5hbWUgPSB0aGVtZU5hbWVIYXNoLmRpc2FzdGVyO1xuICAgIGVuc3VyZVRoZW1lQ291bnQoKTtcbiAgICAkc2NvcGUuc2V0VGhlbWVRdWVyeVBhcmFtKCdkaXNhc3RlcicpO1xuICB9O1xuXG4gICRzY29wZS5wcm9qZWN0UmlzayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICRzY29wZS50aGVtZU5hbWUgPSB0aGVtZU5hbWVIYXNoLnByb2plY3RSaXNrO1xuICAgICAgZW5zdXJlVGhlbWVDb3VudCgpO1xuICAgICAgJHNjb3BlLnNldFRoZW1lUXVlcnlQYXJhbSgncHJvamVjdFJpc2snKTtcbiAgfTtcblxuICAkc2NvcGUucHJvamVjdEhlYWx0aCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICRzY29wZS50aGVtZU5hbWUgPSB0aGVtZU5hbWVIYXNoLnByb2plY3RIZWFsdGg7XG4gICAgICBlbnN1cmVUaGVtZUNvdW50KCk7XG4gICAgICAkc2NvcGUuc2V0VGhlbWVRdWVyeVBhcmFtKCdwcm9qZWN0SGVhbHRoJyk7XG4gIH07XG5cbiAgJHNjb3BlLm5vbmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgJHNjb3BlLnRoZW1lTmFtZSA9IHRoZW1lTmFtZUhhc2gubm9uZTtcbiAgICB2YXIgbGF5ZXJzQXJyID0gJC5ncmVwKCRzdGF0ZVBhcmFtcy5sYXllcnMuc3BsaXQoJywnKSwgZnVuY3Rpb24ocm91dGVMYXllcil7XG4gICAgICByZXR1cm4gcm91dGVMYXllciAhPT0gJ3RoZW1lY291bnQnICYmIHJvdXRlTGF5ZXIgIT09ICd0aGVtZSc7XG4gICAgfSk7XG4gICAgJHN0YXRlUGFyYW1zLmxheWVycyA9IGxheWVyc0Fyci5qb2luKCcsJyk7XG4gICAgJHNjb3BlLnNldFRoZW1lUXVlcnlQYXJhbSgnbm9uZScpO1xuICB9O1xuXG4gIGZ1bmN0aW9uIGVuc3VyZVRoZW1lQ291bnQoKSB7XG4gICAgaWYgKCRzdGF0ZVBhcmFtcy5sYXllcnMuaW5kZXhPZigndGhlbWVjb3VudCcpID09PSAtMSAmJiAkc3RhdGVQYXJhbXMubGF5ZXJzLmluZGV4T2YoJ3RoZW1lJykgPT09IC0xKSB7XG4gICAgICAkc3RhdGVQYXJhbXMubGF5ZXJzICs9ICcsdGhlbWVjb3VudCc7XG4gICAgfVxuICB9XG5cbiAgJHNjb3BlLnNldFRoZW1lUXVlcnlQYXJhbSA9IGZ1bmN0aW9uICh0aGVtZSkge1xuICAgICRzdGF0ZVBhcmFtcy50aGVtZSA9IHRoZW1lO1xuICAgIHZhciBzdGF0ZSA9ICRzdGF0ZS5jdXJyZW50Lm5hbWUgfHwgJ21haW4nO1xuICAgICRzdGF0ZS5nbyhzdGF0ZSwgJHN0YXRlUGFyYW1zKTtcbiAgfTtcblxuICAkc2NvcGUudGhlbWVOYW1lID0gdGhlbWVOYW1lSGFzaFskc3RhdGVQYXJhbXMudGhlbWVdIHx8ICdQcm9qZWN0cyc7XG5cbiAgLypcbiAgIEhhbmRsaW5nIFRoZW1lIE1lbnUgQW5pbWF0aW9uc1xuICAgKi9cblxuICAkc2NvcGUudG9nZ2xlVGhlbWVNZW51ID0gZnVuY3Rpb24oKXtcbiAgICB2YXIgZmxpcHBlZE91dCA9ICQoXCIubWVudS1zZWxlY3Rpb24gLmRyb3Bkb3duXCIpLmhhc0NsYXNzKFwib3BlblwiKTtcblxuICAgIGlmKGZsaXBwZWRPdXQgPT0gZmFsc2Upe1xuICAgICAgJHNjb3BlLnVuZnVybFRoZW1lcygpO1xuICAgIH1cbiAgICBlbHNle1xuICAgICAgJHNjb3BlLnJlZnVybFRoZW1lcygpO1xuICAgIH1cbiAgfTtcblxuICAkc2NvcGUudW5mdXJsVGhlbWVzID0gZnVuY3Rpb24oKXtcbiAgICAkc2NvcGUucmVmdXJsVGhlbWVzKCk7XG4gICAgLy9UcnkgalF1ZXJ5IHRvIGFkZCBhbiAnb24nIGNsYXNzIHRvIGVhY2ggb2YgdGhlIHRoZW1lIExJIGVsZW1lbnRzIG9uIGEgdGltZXIuXG4gICAgJCgkKCcjVGhlbWVNZW51IGxpJykuZ2V0KCkucmV2ZXJzZSgpKS5lYWNoKGZ1bmN0aW9uKGluZGV4KXtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHNlbGYpLmFkZENsYXNzKFwidGhlbWUtc2VsZWN0b3ItbGktb25cIik7XG4gICAgICB9LCBpbmRleCoxNTApO1xuICAgIH0pO1xuICB9O1xuXG4gIC8vUmVmdXJsP1xuICAkc2NvcGUucmVmdXJsVGhlbWVzID0gZnVuY3Rpb24oKXtcbiAgICAvL1RyeSBqUXVlcnkgdG8gcmVtb3ZlIHRoZSAnb24nIGNsYXNzIHRvIGVhY2ggb2YgdGhlIHRoZW1lIExJIGVsZW1lbnRzIG9uIGEgdGltZXIuXG4gICAgJCgnI1RoZW1lU2VsZWN0b3JNZW51IC5kcm9wZG93bi1tZW51IGxpJykucmVtb3ZlQ2xhc3MoXCJ0aGVtZS1zZWxlY3Rvci1saS1vblwiKTtcbiAgfTtcblxuICAvKlxuICAgRW5kIFRoZW1lIE1lbnUgQW5pbWF0aW9uc1xuICAgKi9cblxufSk7IiwiLyoqXG4gKiBDcmVhdGVkIGJ5IE5pY2hvbGFzIEhhbGxhaGFuIDxuaGFsbGFoYW5Ac3BhdGlhbGRldi5jb20+XG4gKiAgICAgICBvbiA0LzE3LzE0LlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ0dlb0FuZ3VsYXInKS5jb250cm9sbGVyKCdVcGxvYWRDdHJsJywgZnVuY3Rpb24oJHNjb3BlLCAkaHR0cCwgJHN0YXRlLCAkc3RhdGVQYXJhbXMsICR1cGxvYWQpIHtcblxuICAkc2NvcGUuc2hvd0FsZXJ0ID0gZmFsc2U7XG4gICRzY29wZS5zaG93UHJvZ3Jlc3MgPSBmYWxzZTtcbiAgJHNjb3BlLnNob3dVcGxvYWRlZFVybCA9IGZhbHNlO1xuICAkc2NvcGUucGVyY2VudCA9IDM7XG4gICRzY29wZS5kaXNhYmxlZCA9IGZhbHNlO1xuICAkc2NvcGUua2JVcGxvYWRlZCA9IDA7XG4gICRzY29wZS5rYlRvdGFsID0gMDtcblxuICAkc2NvcGUuJHVwbG9hZCA9ICR1cGxvYWQ7XG5cbiAgJHNjb3BlLnVwbG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICQoXCIjdXBsb2FkLWZpbGUtaW5wdXRcIikuY2xpY2soKS5jaGFuZ2UoZnVuY3Rpb24oZXZ0KSB7XG4gICAgICAkc2NvcGUuc2hvd1Byb2dyZXNzID0gdHJ1ZTtcbiAgICAgICRzY29wZS5wZXJjZW50ID0gNTtcblxuICAgICAgdmFyIGZpbGVOYW1lID0gJCh0aGlzKS52YWwoKS5zcGxpdCgnXFxcXCcpLnBvcCgpO1xuICAgICAgdmFyIGZpbGUgPSAkKCcjdXBsb2FkLWZpbGUtaW5wdXQnKS5nZXQoMCkuZmlsZXNbMF07XG4gICAgICBwYXJzZUFuZFVwbG9hZEZpbGUoZmlsZSwgZmlsZU5hbWUpO1xuXG4gICAgfSk7XG4gIH07XG5cbiAgJHNjb3BlLmZpbGVEcm9wcGVkID0gZnVuY3Rpb24gKCRmaWxlcykge1xuICAgIHZhciBmaWxlID0gJGZpbGVzWzBdO1xuICAgIHBhcnNlQW5kVXBsb2FkRmlsZShmaWxlLCBmaWxlLm5hbWUpO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHBhcnNlQW5kVXBsb2FkRmlsZShmaWxlLCBmaWxlTmFtZSkge1xuICAgIGlmICghZmlsZU5hbWUpIGZpbGVOYW1lID0gJ2ZpbGUnO1xuICAgIHZhciByID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICByLnJlYWRBc0JpbmFyeVN0cmluZyhmaWxlKTtcbiAgICByLm9ubG9hZGVuZCA9IGZ1bmN0aW9uKGUpe1xuICAgICAgdmFyIGRhdGEgPSBlLnRhcmdldC5yZXN1bHQ7XG4gICAgICB2YXIgcG9zdE9iaiA9IHtcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIk1hcGZvbGlvIFVwbG9hZGVkIERhdGEgLSBcIiArIGZpbGVOYW1lLFxuICAgICAgICBcInB1YmxpY1wiOiB0cnVlLFxuICAgICAgICBcImZpbGVzXCI6IHt9XG4gICAgICB9O1xuICAgICAgcG9zdE9iai5maWxlc1tmaWxlTmFtZV0gPSB7Y29udGVudDogZGF0YX07XG4gICAgICAkc2NvcGUucGVyY2VudCA9IDc7XG5cbiAgICAgICRzY29wZS4kdXBsb2FkLmh0dHAoe1xuICAgICAgICB1cmw6ICdodHRwczovL2FwaS5naXRodWIuY29tL2dpc3RzJyxcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgZGF0YTogcG9zdE9iaixcbiAgICAgICAgaGVhZGVyczogeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9XG4gICAgICB9KS5wcm9ncmVzcyhmdW5jdGlvbihldnQpIHtcbiAgICAgICAgJHNjb3BlLnBlcmNlbnQgPSBwYXJzZUZsb2F0KChldnQubG9hZGVkIC8gZXZ0LnRvdGFsU2l6ZSAqIDEwMCkudG9GaXhlZCgxKSk7XG4gICAgICAgICRzY29wZS5rYlVwbG9hZGVkID0gKGV2dC5sb2FkZWQgLyAxMDI0KS50b0ZpeGVkKDIpO1xuICAgICAgICAkc2NvcGUua2JUb3RhbCA9IChldnQudG90YWxTaXplIC8gMTAyNCkudG9GaXhlZCgyKTtcbiAgICAgIH0pLnN1Y2Nlc3MoZnVuY3Rpb24gKGRhdGEsIHN0YXR1cywgaGVhZGVycywgY29uZmlnKSB7XG4gICAgICAgICRzY29wZS5zaG93UHJvZ3Jlc3MgPSBmYWxzZTtcbiAgICAgICAgdmFyIGZpbGVuYW1lID0gZGF0YS5maWxlc1tmaWxlTmFtZV0uZmlsZW5hbWU7XG4gICAgICAgICRzY29wZS5naXN0UmF3VXJsID0gZGF0YS5maWxlc1tmaWxlTmFtZV0ucmF3X3VybDtcbiAgICAgICAgJHNjb3BlLmdpc3RIdG1sVXJsID0gZGF0YS5odG1sX3VybDtcbiAgICAgICAgJHNjb3BlLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgJHNjb3BlLnNob3dVcGxvYWRlZFVybCA9IHRydWU7XG4gICAgICAgIHdpbmRvdy5naXN0cy5hcHBlbmQoe25hbWU6IGZpbGVuYW1lLCB1cmw6ICRzY29wZS5naXN0UmF3VXJsLCBodG1sVXJsOiAkc2NvcGUuZ2lzdEh0bWxVcmx9KTtcbiAgICAgIH0pLmVycm9yKGZ1bmN0aW9uIChkYXRhLCBzdGF0dXMsIGhlYWRlcnMsIGNvbmZpZykge1xuICAgICAgICAkc2NvcGUuc2hvd0FsZXJ0ID0gdHJ1ZTtcbiAgICAgICAgJHNjb3BlLmVycm9yTWVzc2FnZSA9IEpTT04uc3RyaW5naWZ5KGRhdGEsbnVsbCwyKTtcbiAgICAgIH0pO1xuXG4gICAgfTtcbiAgfVxuXG4gICRzY29wZS5hZGRUb01hcCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgbmV3VXJsID0gJHNjb3BlLmdpc3RSYXdVcmwgfHwgJHNjb3BlLnJlbW90ZVVybDtcbiAgICBpZiAoIW5ld1VybCkge1xuICAgICAgJHNjb3BlLnNob3dBbGVydCA9IHRydWU7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgJHN0YXRlUGFyYW1zLmxheWVycyA9ICRzdGF0ZVBhcmFtcy5sYXllcnMgKyAnLCcgKyBuZXdVcmw7XG4gICAgJCgnI3VwbG9hZE1vZGFsJykubW9kYWwoJ2hpZGUnKTtcbiAgICAkKCcjdXBsb2FkTW9kYWwnKS5vbignaGlkZGVuLmJzLm1vZGFsJywgZnVuY3Rpb24oZSkge1xuICAgICAgJHN0YXRlLmdvKCdtYWluJywgJHN0YXRlUGFyYW1zKTtcbiAgICB9KTtcblxuICB9O1xuXG4gIC8qKlxuICAgKiBJZiBVcGxvYWRDdHJsIGdldHMgY2FsbGVkIHR3aWNlIGZvciBzb21lIHJlYXNvbiwgd2UgbWlnaHRcbiAgICogaGF2ZSB0aGlzIGNsYXNzIGhhbmdpbmcgYXJvdW5kIGJsb2NraW5nIHRoZSBhcHAuIFVwbG9hZEN0cmxcbiAgICogZG9lcyBnZXQgY2FsbGVkIHR3aWNlIHNvbWV0aW1lcywgYmVjYXVzZSB0aGUgbW9kYWwgc29tZXRpbWVzXG4gICAqIG51ZGdlcyB0aGUgbWFwIGFuZCByZWluc3RhbnRpYXRlcyB0aGUgbW9kYWwgYWdhaW4gdmlhIGEgbmV3XG4gICAqIHJvdXRlLlxuICAgKi9cbiAgJCgnLm1vZGFsLWJhY2tkcm9wJykucmVtb3ZlKCk7XG5cbiAgJCgnI3VwbG9hZE1vZGFsJykubW9kYWwoJ3Nob3cnKTtcblxuICAkKCcjdXBsb2FkTW9kYWwnKS5vbignaGlkZGVuLmJzLm1vZGFsJywgZnVuY3Rpb24oZSkge1xuICAgICRzdGF0ZS5nbygnbWFpbicsICRzdGF0ZVBhcmFtcyk7XG4gIH0pO1xuXG59KTtcbiIsIi8qKlxuICogQ3JlYXRlZCBieSBOaWNob2xhcyBIYWxsYWhhbiA8bmhhbGxhaGFuQHNwYXRpYWxkZXYuY29tPlxuICogICAgICAgIGFuZCBSeWFuIFdoaXRsZXkgICAgICA8cndoaXRsZXlAc3BhdGlhbGRldi5jb20+XG4gKiAgICAgICBvbiA0LzIvMTQuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnR2VvQW5ndWxhcicpLmNvbnRyb2xsZXIoJ1pvb21FeHRlbnRDdHJsJywgZnVuY3Rpb24oJHNjb3BlLCAkcm9vdFNjb3BlLCAkc3RhdGVQYXJhbXMsIFZlY3RvclByb3ZpZGVyKSB7XG4gICRzY29wZS5wYXJhbXMgPSAkc3RhdGVQYXJhbXM7XG5cbiAgLy9Jbml0aWFsaXplIHRoZSBjb3VudHJ5IHNlbGVjdG9yIG1lbnUgYnkgbG9hZGluZyB0aGUganNvbiBmaWxlIGFuZCB3cml0aW5nIG91dCB0aGUgbmFtZXMgaW50byB0aGUgcGFuZWxcbiAgJHNjb3BlLmNvdW50cnlMaXN0MSA9IG51bGw7XG5cbiAgdmFyIHZlY1JlcyA9IFZlY3RvclByb3ZpZGVyLmNyZWF0ZVJlc291cmNlKFwiY291bnRyeWV4dGVudHNcIik7XG4gIHZlY1Jlcy5mZXRjaChmdW5jdGlvbihnZW9qc29uKXtcbiAgICAvL1NvcnQgYWxwaGFiZXRpY2FsbHlcbiAgICBnZW9qc29uLmZlYXR1cmVzID0gZ2VvanNvbi5mZWF0dXJlcy5zb3J0KGZ1bmN0aW9uKGEsYil7XG4gICAgICB2YXIgdGV4dEEgPSBhLnByb3BlcnRpZXMubmFtZV8wO1xuICAgICAgdmFyIHRleHRCID0gYi5wcm9wZXJ0aWVzLm5hbWVfMDtcbiAgICAgIHJldHVybiAodGV4dEEgPCB0ZXh0QikgPyAtMSA6ICh0ZXh0QSA+IHRleHRCKSA/IDEgOiAwO1xuICAgIH0pO1xuXG4gICAgJHNjb3BlLmNvdW50cnlMaXN0MSA9IGdlb2pzb24uZmVhdHVyZXM7XG4gIH0pO1xuXG4gIC8vSW5pdGlhbGl6ZSB0aGUgQVJDIFJlZ2lvbiBzZWxlY3RvciBtZW51IGJ5IGxvYWRpbmcgdGhlIGpzb24gZmlsZSBhbmQgd3JpdGluZyBvdXQgdGhlIG5hbWVzIGludG8gdGhlIHBhbmVsXG4gICRzY29wZS5yZWdpb25MaXN0MSA9IG51bGw7XG5cbiAgdmFyIHZlY1Jlc1JlZ2lvbiA9IFZlY3RvclByb3ZpZGVyLmNyZWF0ZVJlc291cmNlKFwiYXJjcmVnaW9uZXh0ZW50c1wiKTtcbiAgdmVjUmVzUmVnaW9uLmZldGNoKGZ1bmN0aW9uKGdlb2pzb24pe1xuICAgIC8vU29ydCBhbHBoYWJldGljYWxseVxuICAgIGdlb2pzb24uZmVhdHVyZXMgPSBnZW9qc29uLmZlYXR1cmVzLnNvcnQoZnVuY3Rpb24oYSxiKXtcbiAgICAgIHZhciB0ZXh0QSA9IGEucHJvcGVydGllcy5hcmNfcmVnaW9uO1xuICAgICAgdmFyIHRleHRCID0gYi5wcm9wZXJ0aWVzLmFyY19yZWdpb247XG4gICAgICByZXR1cm4gKHRleHRBIDwgdGV4dEIpID8gLTEgOiAodGV4dEEgPiB0ZXh0QikgPyAxIDogMDtcbiAgICB9KTtcblxuICAgICRzY29wZS5yZWdpb25MaXN0MSA9IGdlb2pzb24uZmVhdHVyZXM7XG4gIH0pO1xuXG59KTtcbiIsIi8qKlxuICogQ3JlYXRlZCBieSBOaWNob2xhcyBIYWxsYWhhbiA8bmhhbGxhaGFuQHNwYXRpYWxkZXYuY29tPlxuICogICBhbmQgUmljaCBHd296ZHogPHJnd296ZHpAc3BhdGlhbGRldi5jb20+XG4gKiAgICAgICBvbiA1LzIxLzE0LlxuICovXG5cblxubW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnR2VvQW5ndWxhcicpLmZhY3RvcnkoJ0RvbnV0cycsIGZ1bmN0aW9uICgpIHtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhIEQzIERvbnV0IHRoYXQgaXMgbG9jYXRlZCBpbiB0aGUgZGV0YWlscyBwYW5lbC5cbiAgICovXG4gIGZ1bmN0aW9uIEV4cGFuZG9Eb251dChlbnRpdGllcywgdmlzdWFsaXphdGlvbkRpY3Rpb25hcnksIHdyYXBwZXIsIGxhYmVsUG9zaXRpb24pIHtcblxuICAgIHZhciBkYXRhLFxuICAgICAgdG1wRGF0YXNldCxcbiAgICAgIGRhdGFzZXQsXG4gICAgICB3aWR0aCxcbiAgICAgIGhlaWdodCxcbiAgICAgIHJhZGl1cyxcbiAgICAgIGNvbG9yLFxuICAgICAgcGllLFxuICAgICAgYXJjLFxuICAgICAgc3ZnLFxuICAgICAgcGF0aCxcbiAgICAgIHJlcG9ydGluZ1ZhbHVlQXJyLFxuICAgICAgcmVwb3J0aW5nVmFsdWUsXG4gICAgICBsYWJlbFdyYXBwZXI7XG5cbiAgICBkYXRhID0ge307XG5cbiAgICB3cmFwcGVyID0gJCh3cmFwcGVyKVswXTtcbiAgICAkKHdyYXBwZXIpLmh0bWwoJycpO1xuICAgIHRoaXMud3JhcHBlciA9IHdyYXBwZXI7XG4gICAgdGhpcy5sYWJlbFdyYXBwZXIgPSBudWxsO1xuICAgIHRoaXMuc3ZnID0gbnVsbDtcblxuICAgIGlmKHR5cGVvZiBsYWJlbFBvc2l0aW9uID09PSAndW5kZWZpbmVkJyB8fCAobGFiZWxQb3NpdGlvbiAhPT0gJ3RvcCcgJiYgbGFiZWxQb3NpdGlvbiAhPT0gJ2JvdHRvbScpKSB7XG4gICAgICBsYWJlbFBvc2l0aW9uID0gJ3RvcCdcbiAgICB9XG5cbiAgICAvLyBMb29wIHRocm91Z2ggdGhlIGVudGl0aWVzXG4gICAgZm9yICh2YXIgaiA9IDAsIGpNYXggPSBlbnRpdGllcy5sZW5ndGg7IGogPCBqTWF4OyBqKyspIHtcblxuICAgICAgLy8gU3BsaXQgdGhlIHNlbWktY29sb24gZGVsaW1pdGVkIHN0cmluZyBvZiByZXBvcnRpbmcgdmFsdWVzXG4gICAgICBpZihlbnRpdGllc1tqXVsnc2VjdG9yX19jJ10gPT09IG51bGwpIHtcbiAgICAgICAgcmVwb3J0aW5nVmFsdWVBcnIgPSBbLTk5OTldO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVwb3J0aW5nVmFsdWVBcnIgPSBlbnRpdGllc1tqXVsnc2VjdG9yX19jJ10udG9TdHJpbmcoKS5zcGxpdCgnOycpO1xuICAgICAgfVxuICAgICAgLy8gTG9vcCB0aHJ1IHRoZSByZXBvcnRpbmcgdmFsdWVzXG4gICAgICBmb3IgKHZhciBrID0gMCwga01heCA9IHJlcG9ydGluZ1ZhbHVlQXJyLmxlbmd0aDsgayA8IGtNYXg7IGsrKykge1xuXG4gICAgICAgIC8vIHRoaXMgaXRlcmF0aW9uJ3MgcmVwb3J0aW5nIHZhbHVlXG4gICAgICAgIHJlcG9ydGluZ1ZhbHVlID0gcmVwb3J0aW5nVmFsdWVBcnJba107XG5cbiAgICAgICAgLy8gSWYgd2UgaGF2ZSBhbHJlYWR5IGNvbWUgYWNyb3NzIHRoaXMgaWQgYmVmb3JlIChhbmQgc3RhcnRlZCBhIGNvdW50IG9mIGl0cyBmcmVxdWVuY3kpLCBpbmNyZW1lbnQgdGhlIGNvdW50XG4gICAgICAgIGlmKGRhdGEuaGFzT3duUHJvcGVydHkocmVwb3J0aW5nVmFsdWUpKSB7XG4gICAgICAgICAgZGF0YVtyZXBvcnRpbmdWYWx1ZV1bJ2NvdW50J10rKztcbiAgICAgICAgfVxuXG4gICAgICAgIGVsc2UgaWYgKHJlcG9ydGluZ1ZhbHVlID09PSAnJyl7XG4gICAgICAgICAgLy8gTnVsbCByZXBvcnQgaWQncyBjb21lIHRocm91Z2ggYXMgYW4gZW1wdHkgc3RyaW5nIGJlY2F1c2Ugc3BsaXR0aW5nIGFuIGVtcHR5IHN0cmluZywgY3JlYXRlcyBhbiBhcnJheSB3aXRoIG9uZSBlbXB0eSBzdHJpbmdcbiAgICAgICAgICAvLyAgV2UncmUgYXNzaWduaW5nIHRoZXNlIHRvIGEgdmFsdWUgb2YgLTk5OTlcblxuICAgICAgICAgIC8vIEluY3JlbWVudCB0aGUgY291bnQgb2YgLTk5OTlcbiAgICAgICAgICBpZihkYXRhLmhhc093blByb3BlcnR5KCctOTk5OScpKSB7XG4gICAgICAgICAgICBkYXRhWyctOTk5OSddWydjb3VudCddKys7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gaWYgdGhpcyBpcyB0aGUgZmlyc3QgbnVsbCBpZCwgY3JlYXRlIGFuIG9iamVjdCBwcm9wZXJ0eSBhbmQgc3RhcnQgdGhlIGNvdW50ZXJcbiAgICAgICAgICAgIGRhdGFbJy05OTk5J10gPSB7XG4gICAgICAgICAgICAgICdjb3VudCc6IDEsXG4gICAgICAgICAgICAgICdjb2xvcic6IHZpc3VhbGl6YXRpb25EaWN0aW9uYXJ5Wy05OTk5XS5jb2xvcixcbiAgICAgICAgICAgICAgJ2FsaWFzJzogdmlzdWFsaXphdGlvbkRpY3Rpb25hcnlbLTk5OTldLmxhYmVsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcblxuICAgICAgICAgIHZhciByZXBvcnRpbmdQcm9wZXJ0aWVzID0gdmlzdWFsaXphdGlvbkRpY3Rpb25hcnlbcmVwb3J0aW5nVmFsdWVdO1xuXG4gICAgICAgICAgaWYgKCFyZXBvcnRpbmdQcm9wZXJ0aWVzKSB7XG4gICAgICAgICAgICByZXBvcnRpbmdQcm9wZXJ0aWVzID0ge1xuICAgICAgICAgICAgICBjb2xvcjogJyMyNDAyMDEnLFxuICAgICAgICAgICAgICBhbGlhczogcmVwb3J0aW5nVmFsdWUgfHwgJ1Vua25vd24nXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gaWYgdGhpcyBpcyB0aGUgZmlyc3QgdGltZSB3ZSBzZWUgdGhpcyBpZCwgY3JlYXRlIGFuIG9iamVjdCBwcm9wZXJ0eSBhbmQgc3RhcnQgdGhlIGNvdW50ZXJcbiAgICAgICAgICBkYXRhW3JlcG9ydGluZ1ZhbHVlXSA9IHtcbiAgICAgICAgICAgICdjb3VudCc6IDEsXG4gICAgICAgICAgICAnY29sb3InOiByZXBvcnRpbmdQcm9wZXJ0aWVzLmNvbG9yLFxuICAgICAgICAgICAgJ2FsaWFzJzogcmVwb3J0aW5nUHJvcGVydGllcy5sYWJlbFxuICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgfVxuXG4gICAgfVxuXG4gICAgLy8gcHJlcCBkYXRhc2V0IGZvciBEMzsgbmVlZCBhIHRlbXAgZGF0YXNldCB0byBkZWFsIHdpdGggbWVyZ2luZyBvZiBkYXRhIGNvdW50cyBmb3IgJ290aGVyJyBjYXRlZ29yeVxuICAgIHRtcERhdGFzZXQgPSBbXTtcbiAgICBkYXRhc2V0ID0gW107XG5cbiAgICAvLyBQdXNoIHByb3BlcnRpZXMgZnJvbSBvYmplY3QgaG9sZGluZyB0aGUgY2F0ZWdvcnkgY291bnRzL2NvbG9ycyBjYXRlZ29yaWVzIGludG8gYW4gb2JqZWN0IGFycmF5XG4gICAgZm9yICh2YXIgaiBpbiBkYXRhKSB7XG4gICAgICB0bXBEYXRhc2V0LnB1c2goZGF0YVtqXSk7XG4gICAgfVxuXG4gICAgLy8gQ3JlYXRlIGFuIG9iamVjdCB0aGF0IHdpbGwgbWVyZ2UgdGhlIGNvdW50IGZyb20gYWxsIGNsYXNzaWZpY2F0aW9uIGNhdGVyZ29yaWVzIHRoYXQgd2UndmUgZGVlbWVkIGFzICdvdGhlcicnXG4gICAgdmFyIG1lcmdlZE90aGVyID0ge1xuICAgICAgJ2NvdW50JzogMCxcbiAgICAgICdjb2xvcic6IHZpc3VhbGl6YXRpb25EaWN0aW9uYXJ5Wy05OTk5XS5jb2xvcixcbiAgICAgICdhbGlhcyc6IHZpc3VhbGl6YXRpb25EaWN0aW9uYXJ5Wy05OTk5XS5sYWJlbFxuICAgIH07XG5cbiAgICAvLyBNZXJnZSBhbGwgJ290aGVyJyBvYmplY3RzOyB3ZSBkZXRlcm1pbmUgd2hpY2ggYXJlICdvdGhlcicgYnkgdGVzdGluZyB0byBzZWUgaWYgaXRzIGJlZW4gYXNzaWduZWQgdGhlICdvdGhlcicgY29sb3JcbiAgICBmb3IgKHZhciBrID0gMCwga01heCA9IHRtcERhdGFzZXQubGVuZ3RoOyBrIDwga01heDsgaysrKSB7XG5cbiAgICAgIGlmKHRtcERhdGFzZXRba10uY29sb3IgPT09IHZpc3VhbGl6YXRpb25EaWN0aW9uYXJ5Wy05OTk5XS5jb2xvcikge1xuICAgICAgICBtZXJnZWRPdGhlci5jb3VudCA9IG1lcmdlZE90aGVyLmNvdW50ICsgdG1wRGF0YXNldFtrXS5jb3VudDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRhdGFzZXQucHVzaCh0bXBEYXRhc2V0W2tdKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBBZGQgdGhlIG1lcmdlIG9iamVkdCB0byB0aGUgZGF0YXNldCB3ZSB3aWxsIHVzZSBpbiBkb251dCBjaGFydFxuICAgIGRhdGFzZXQucHVzaChtZXJnZWRPdGhlcik7XG5cblxuICAgIC8vIFVzZSBqUXVlcnkgdG8gZ2V0IHRoaXMgY2x1c3RlciBtYXJrZXJzIGhlaWdodCBhbmQgd2lkdGggKHNldCBpbiB0aGUgQ1NTKVxuICAgIHdpZHRoID0gJCh3cmFwcGVyKS53aWR0aCgpICogMC42NTtcbiAgICBoZWlnaHQgPSAkKHdyYXBwZXIpLmhlaWdodCgpICogMC42NTtcblxuICAgIGlmKGhlaWdodCA9PT0gMCkge1xuICAgICAgaGVpZ2h0ID0gd2lkdGg7XG4gICAgfVxuXG4gICAgcmFkaXVzID0gIChNYXRoLm1pbih3aWR0aCwgaGVpZ2h0KSAvIDIpIC0gMTA7XG4gICAgbGFiZWxXcmFwcGVyID0gJCgnPGRpdiBjbGFzcz1cImNsZWFyZml4XCIgc3R5bGU9XCJ0ZXh0LWFsaWduOmNlbnRlcjsgbWFyZ2luOiAxMHB4IDA7XCIgPjwvZGl2PicpLmFwcGVuZFRvKHdyYXBwZXIpO1xuICAgIHZhciBsYWJlbFN3YXRjaCA9ICQoJzxkaXYgc3R5bGU9XCJkaXNwbGF5OmlubGluZS1ibG9jazsgd2lkdGg6IDFlbTsgaGVpZ2h0OiAxZW07IGJvcmRlci1yYWRpdXM6IDUwJVwiPjwvZGl2PicpLmFwcGVuZFRvKGxhYmVsV3JhcHBlcik7XG4gICAgdmFyIGxhYmVsVGV4dCA9ICQoJzxkaXYgc3R5bGU9XCJkaXNwbGF5OmlubGluZS1ibG9jazsgcGFkZGluZy1sZWZ0OiAxMHB4O21hcmdpbi10b3A6IC0uNGVtO3ZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XCI+PC9kaXY+JykuYXBwZW5kVG8obGFiZWxXcmFwcGVyKTtcblxuICAgIHBpZSA9IGQzLmxheW91dC5waWUoKVxuICAgICAgLnNvcnQobnVsbCk7XG5cbiAgICBhcmMgPSBkMy5zdmcuYXJjKClcbiAgICAgIC5pbm5lclJhZGl1cyhyYWRpdXMtcmFkaXVzICogMC40KVxuICAgICAgLm91dGVyUmFkaXVzKHJhZGl1cyk7XG5cbiAgICB2YXIgYXJjT3ZlciA9IGQzLnN2Zy5hcmMoKVxuICAgICAgLm91dGVyUmFkaXVzKHJhZGl1cyArIDEwKVxuICAgICAgLmlubmVyUmFkaXVzKChyYWRpdXMtcmFkaXVzICogMC40KSArIDEwKTtcblxuICAgIC8vIE5vdGUgdGhhdCB3ZSBhZGQgJ2NsdXN0ZXJEb251dCcgYXMgYSBzZWxlY3RvclxuICAgIHN2ZyA9IGQzLnNlbGVjdCh3cmFwcGVyKS5hcHBlbmQoXCJzdmdcIilcbiAgICAgIC5hdHRyKFwid2lkdGhcIiwgd2lkdGgpXG4gICAgICAuYXR0cihcImhlaWdodFwiLCBoZWlnaHQpXG4gICAgICAuYXBwZW5kKFwiZ1wiKVxuICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoXCIgKyB3aWR0aCAvIDIgKyBcIixcIiArIGhlaWdodCAvIDIgKyBcIilcIik7XG5cbiAgICB0aGlzLnBhdGggPSBzdmcuc2VsZWN0QWxsKFwicGF0aFwiKVxuICAgICAgLmRhdGEoZnVuY3Rpb24oKXtcbiAgICAgICAgdmFyIGRhdGFPYmpBcnIsXG4gICAgICAgICAgZGF0YUFycixcbiAgICAgICAgICBwaWVEYXRhO1xuXG4gICAgICAgIGRhdGFPYmpBcnIgPSBkYXRhc2V0O1xuXG4gICAgICAgIGRhdGFBcnIgPSBbXTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMCwgaU1heCA9IGRhdGFPYmpBcnIubGVuZ3RoOyBpIDwgaU1heDsgaSsrKSB7XG4gICAgICAgICAgZGF0YUFyci5wdXNoKGRhdGFPYmpBcnJbaV1bJ2NvdW50J10pO1xuICAgICAgICB9XG5cbiAgICAgICAgcGllRGF0YSA9IHBpZShkYXRhQXJyKTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMCwgaU1heCA9IHBpZURhdGEubGVuZ3RoOyBpIDwgaU1heDsgaSsrKSB7XG4gICAgICAgICAgcGllRGF0YVtpXS5kYXRhID0gZGF0YU9iakFycltpXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwaWVEYXRhO1xuICAgICAgfSlcbiAgICAgIC5lbnRlcigpLmFwcGVuZChcInBhdGhcIilcbiAgICAgIC5hdHRyKFwiZmlsbFwiLCBmdW5jdGlvbihkLCBqKSB7XG4gICAgICAgIHJldHVybiBkLmRhdGEuY29sb3I7XG4gICAgICB9KVxuICAgICAgLmF0dHIoXCJkXCIsIGFyYylcbiAgICAgIC5hdHRyKFwiY3Vyc29yXCIsXCJwb2ludGVyXCIpXG4gICAgICAuYXR0cihcImN1cnNvclwiLFwicG9pbnRlclwiKVxuICAgICAgLm9uKFwibW91c2VvdmVyXCIsIGZ1bmN0aW9uKGQsIGkpIHtcblxuICAgICAgICAvLyBjbGVhciBwcmV2aW91c2x5IGFjdGl2ZSBjaGFydCB3ZWRnZVxuICAgICAgICBkMy5zZWxlY3Qod3JhcHBlcikuc2VsZWN0QWxsKCdwYXRoJykudHJhbnNpdGlvbigpXG4gICAgICAgICAgLmR1cmF0aW9uKDEwMClcbiAgICAgICAgICAuYXR0cihcImRcIiwgYXJjKVxuICAgICAgICAgIC5hdHRyKCdvcGFjaXR5JywxKVxuICAgICAgICAgIC5hdHRyKCdzdHJva2Utd2lkdGgnLDEpXG4gICAgICAgICAgLmF0dHIoJ3N0cm9rZScsJ3JnYmEoMjU1LDI1NSwyNTUsMSknKTtcblxuICAgICAgICAvLyBNYWtlIHRoZSBtb3VzZW92ZXIgd2VkZ2UgYWN0aXZlXG4gICAgICAgIGQzLnNlbGVjdCh0aGlzKVxuICAgICAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgICAgICAuZHVyYXRpb24oMTAwKVxuICAgICAgICAgIC5hdHRyKFwiZFwiLCBhcmNPdmVyKVxuICAgICAgICAgIC5hdHRyKCdvcGFjaXR5JywwLjgpXG4gICAgICAgICAgLmF0dHIoJ3N0cm9rZS13aWR0aCcsMilcbiAgICAgICAgICAuYXR0cignc3Ryb2tlJywncmdiYSgyNTUsMjU1LDI1NSwxKScpO1xuXG4gICAgICAgIC8vIE1ha2UgYXBwcm9wcmlhdGUgbGFiZWxcbiAgICAgICAgJChsYWJlbFN3YXRjaCkuY3NzKCdiYWNrZ3JvdW5kLWNvbG9yJywgZC5kYXRhLmNvbG9yKTtcbiAgICAgICAgJChsYWJlbFRleHQpLmh0bWwoZC5kYXRhLmFsaWFzKTtcblxuICAgICAgICAvLyBTaG93IHRoZSBsYWJlbCBpZiBjdXJyZW50bHkgaGlkZGVuXG4gICAgICAgIGlmKCQoc2VsZi5jYXB0aW9uKS5jc3MoJ2Rpc3BsYXknKSA9PT0gJ25vbmUnKSB7XG4gICAgICAgICAgJChsYWJlbFdyYXBwZXIpLnNsaWRlVG9nZ2xlKCk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAvLy5vbihcIm1vdXNlb3V0XCIsIGZ1bmN0aW9uKGQsaSkge30pXG4gICAgICAuZWFjaChmdW5jdGlvbihkLCBpKSB7XG5cbiAgICAgICAgLy8gb24gbG9hZCwgd2Ugd2FudCB0aGUgbGFyZ2VzdCBjaGFydCB3ZWRnZSB0byBiZSBhY3RpdmV3XG4gICAgICAgIGlmKGkgIT09IDAgICl7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgZDMuc2VsZWN0KHRoaXMpXG4gICAgICAgICAgLnRyYW5zaXRpb24oKVxuICAgICAgICAgIC5kdXJhdGlvbigxMDApXG4gICAgICAgICAgLmF0dHIoXCJkXCIsIGFyY092ZXIpXG4gICAgICAgICAgLmF0dHIoJ29wYWNpdHknLDAuOClcbiAgICAgICAgICAuYXR0cignc3Ryb2tlLXdpZHRoJywyKVxuICAgICAgICAgIC5hdHRyKCdzdHJva2UnLCdyZ2JhKDI1NSwyNTUsMjU1LDEpJyk7XG5cbiAgICAgICAgLy8gbWFrZSB0aGUgbGFiZWxcbiAgICAgICAgJChsYWJlbFN3YXRjaCkuY3NzKCdiYWNrZ3JvdW5kLWNvbG9yJywgZC5kYXRhLmNvbG9yKTtcbiAgICAgICAgJChsYWJlbFRleHQpLmh0bWwoZC5kYXRhLmFsaWFzKTtcblxuICAgICAgICBpZigkKGxhYmVsV3JhcHBlcikuY3NzKCdkaXNwbGF5JykgPT09ICdub25lJykge1xuICAgICAgICAgICQobGFiZWxXcmFwcGVyKS5zbGlkZVRvZ2dsZSgpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgIGlmKGxhYmVsUG9zaXRpb24gPT09ICd0b3AnKSB7XG4gICAgICBsYWJlbFdyYXBwZXIucHJlcGVuZFRvKHdyYXBwZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsYWJlbFdyYXBwZXIuYXBwZW5kVG8od3JhcHBlcik7XG4gICAgfVxuXG4gICAgdGhpcy5sYWJlbFdyYXBwZXIgPSBsYWJlbFdyYXBwZXI7XG4gICAgdGhpcy5zdmcgPSBzdmc7XG4gIH1cblxuXG5cblxuICBmdW5jdGlvbiBtYWtlVmlzdWFsaXphdGlvbkRpY3Rpb25hcnkoY2F0ZWdvcnlFbnRpdGllcywgb3B0cyl7XG5cbiAgICB2YXIgb3B0aW9ucyA9IG9wdHMgfHwge307XG5cbiAgICBvcHRpb25zLnVuYXNzaWduZWRDb2xvciA9IG9wdGlvbnMudW5hc3NpZ25lZENvbG9yIHx8ICcjQ0NDQ0NDJztcbiAgICBvcHRpb25zLnVuYXNzaWduZWRMYWJlbCA9IG9wdGlvbnMudW5hc3NpZ25lZExhYmVsIHx8ICdOb3QgQXNzaWduZWQnO1xuXG4gICAgdmFyIGRlZmF1bHRQYWxldHRlID0gW1wiIzAwOTQwMFwiLCBcIiNGRkM5M0FcIiwgXCIjRkYzODQ5XCIsIFwiIzE3MUNFOFwiLCBcIiMwNUZGRDlcIiwgXCIjRUM4RTJGXCIsIFwiIzZFRDQ0NFwiLCBcIiM5NTU2RUZcIiwgXCIjMjE3NURFXCIsIFwiI0UyM0I1RFwiLCBcIiMxZjc3YjRcIiwgXCIjYWVjN2U4XCIsIFwiI2ZmN2YwZVwiLCBcIiNmZmJiNzhcIiwgXCIjMmNhMDJjXCIsIFwiIzk4ZGY4YVwiLCBcIiNkNjI3MjhcIiwgXCIjZmY5ODk2XCIsIFwiIzk0NjdiZFwiLCBcIiNjNWIwZDVcIiwgXCIjOGM1NjRiXCIsIFwiI2M0OWM5NFwiLCBcIiNlMzc3YzJcIiwgXCIjZjdiNmQyXCIsIFwiIzdmN2Y3ZlwiLCBcIiNjN2M3YzdcIiwgXCIjYmNiZDIyXCIsIFwiI2RiZGI4ZFwiLCBcIiMxN2JlY2ZcIiwgXCIjOWVkYWU1XCIsIFwiIzAwOTQwMFwiLCBcIiNGRkM5M0FcIiwgXCIjRkYzODQ5XCIsIFwiIzE3MUNFOFwiLCBcIiMwNUZGRDlcIiwgXCIjRUM4RTJGXCIsIFwiIzZFRDQ0NFwiLCBcIiM5NTU2RUZcIiwgXCIjMjE3NURFXCIsIFwiI0UyM0I1RFwiLCBcIiMxZjc3YjRcIiwgXCIjYWVjN2U4XCIsIFwiI2ZmN2YwZVwiLCBcIiNmZmJiNzhcIiwgXCIjMmNhMDJjXCIsIFwiIzk4ZGY4YVwiLCBcIiNkNjI3MjhcIiwgXCIjZmY5ODk2XCIsIFwiIzk0NjdiZFwiLCBcIiNjNWIwZDVcIiwgXCIjOGM1NjRiXCIsIFwiI2M0OWM5NFwiLCBcIiNlMzc3YzJcIiwgXCIjZjdiNmQyXCIsIFwiIzdmN2Y3ZlwiLCBcIiNjN2M3YzdcIiwgXCIjYmNiZDIyXCIsIFwiI2RiZGI4ZFwiLCBcIiMxN2JlY2ZcIiwgXCIjOWVkYWU1XCJdO1xuXG4gICAgdmFyIGRpY3Rpb25hcnkgPSB7fTtcblxuICAgIGZvcih2YXIgaSA9IDA7IGkgPCBjYXRlZ29yeUVudGl0aWVzLmxlbmd0aDsgaSsrKSB7XG5cbiAgICAgIHZhciBjb2xvciA9IG51bGw7XG5cbiAgICAgIGlmKGkgPCBkZWZhdWx0UGFsZXR0ZS5sZW5ndGgpIHtcbiAgICAgICAgY29sb3IgPSBkZWZhdWx0UGFsZXR0ZVtpXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBpbmRleCA9IGkgJSBkZWZhdWx0UGFsZXR0ZS5sZW5ndGggLSAxO1xuICAgICAgICBjb2xvciA9IGRlZmF1bHRQYWxldHRlW2luZGV4XTtcbiAgICAgIH1cbiAgICAgIGRpY3Rpb25hcnlbY2F0ZWdvcnlFbnRpdGllc1tpXS52YWx1ZV0gPSB7XG4gICAgICAgIHZhbHVlOiBjYXRlZ29yeUVudGl0aWVzW2ldLnZhbHVlLFxuICAgICAgICBsYWJlbDogY2F0ZWdvcnlFbnRpdGllc1tpXS5sYWJlbCxcbiAgICAgICAgY29sb3I6IGNvbG9yXG4gICAgICB9O1xuXG4gICAgfVxuXG4gICAgZGljdGlvbmFyeVstOTk5OV0gPSB7XG4gICAgICB2YWx1ZTogLTk5OTksXG4gICAgICBsYWJlbDogb3B0aW9ucy51bmFzc2lnbmVkTGFiZWwsXG4gICAgICBjb2xvcjogb3B0aW9ucy51bmFzc2lnbmVkQ29sb3JcbiAgICB9O1xuXG4gICAgcmV0dXJuIGRpY3Rpb25hcnk7XG4gIH1cblxuXG4gIC8qKlxuICAgKiBQdWJsaWMgZnVuY3Rpb25zIHRoYXQgYXJlIGFjY2Vzc2libGUgZWxzZXdoZXJlIGluIHRoZSBhcHAuXG4gICAqIEV4OiBEb251dHMuY3JlYXRlRGV0YWlsc0RvbnV0KGFyZzEsIGFyZzIpO1xuICAgKi9cbiAgcmV0dXJuIHtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBEMyBkb251dCB0aGF0IGdvZXMgYXJvdW5kIGEgbGFiZWwgb24gdGhlIG1hcC5cbiAgICAgKi9cbiAgICBjcmVhdGVMYWJlbERvbnV0OiBmdW5jdGlvbihzZWN0b3JzLCBwcm9qZWN0cywgZGl2SWQpIHtcbiAgICAgIHZhciB2aXpEaWN0aW9uYXJ5ID0gbWFrZVZpc3VhbGl6YXRpb25EaWN0aW9uYXJ5KHNlY3RvcnMpO1xuICAgICAgdmFyIGRvbnV0ID0gbmV3IEV4cGFuZG9Eb251dChwcm9qZWN0cywgdml6RGljdGlvbmFyeSwgZGl2SWQgLCAnYm90dG9tJyk7XG4gICAgICAkKGRpdklkKS5wcmVwZW5kKCc8ZGl2IGlkPVwic2VjdG9ycy1oZWFkaW5nXCIgY2xhc3M9XCJoZWFkaW5nXCI+U2VjdG9yczwvZGl2PicpO1xuICAgICAgcmV0dXJuIGRvbnV0O1xuICAgIH1cblxuICB9O1xuXG59KTtcbiIsIi8qKlxuICogQ3JlYXRlZCBieSBOaWNob2xhcyBIYWxsYWhhbiA8bmhhbGxhaGFuQHNwYXRpYWxkZXYuY29tPlxuICogICAgICAgb24gMy8xOC8xNC5cbiAqL1xuXG4vKipcbiAqIEFsbCBvZiB0aGUgbGF5ZXIgbmFtZXMgbmVlZCB0byBiZSBsb3dlcmNhc2UuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ0dlb0FuZ3VsYXInKS5zZXJ2aWNlKCdMYXllckNvbmZpZycsIGZ1bmN0aW9uICgpIHtcblxuICB2YXIgY29uZmlnTGF5ZXJzID0gW1xuICAgIHJlcXVpcmUoJy4uLy4uLy4uLy4uL0NvbmZpZy9sYXllcnMvYWxsLmpzJyksXG4gICAgcmVxdWlyZSgnLi4vLi4vLi4vLi4vQ29uZmlnL2xheWVycy9iYXNlbWFwcy5qcycpLFxuICAgIHJlcXVpcmUoJy4uLy4uLy4uLy4uL0NvbmZpZy9sYXllcnMvZGlzYXN0ZXIuanMnKSxcbiAgICByZXF1aXJlKCcuLi8uLi8uLi8uLi9Db25maWcvbGF5ZXJzL290aGVyLmpzJyksXG4gICAgcmVxdWlyZSgnLi4vLi4vLi4vLi4vQ29uZmlnL2xheWVycy9wcm9qZWN0LmpzJyksXG4gICAgcmVxdWlyZSgnLi4vLi4vLi4vLi4vQ29uZmlnL2xheWVycy9wcm9qZWN0aGVhbHRoLmpzJyksXG4gICAgcmVxdWlyZSgnLi4vLi4vLi4vLi4vQ29uZmlnL2xheWVycy9wcm9qZWN0cmlzay5qcycpXG4gIF07XG5cbiAgLyoqXG4gICAqIEFkZHMgdGhlIGxheWVycyBzcGVjaWZpZWQgaW4gdGhlIENvbmZpZy9sYXllcnMgZGlyZWN0b3J5IHRvIHRoaXMuXG4gICAqL1xuICBmb3IgKHZhciBpID0gMCwgbGVuID0gY29uZmlnTGF5ZXJzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgdmFyIGNmZyA9IGNvbmZpZ0xheWVyc1tpXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gY2ZnKSB7XG4gICAgICB0aGlzW2tleV0gPSBjZmdba2V5XTtcbiAgICB9XG4gIH1cblxuXG4gIC8qKlxuICAgKiBiYm94XG4gICAqXG4gICAqIFRoaXMgaXMgdW5pdmVyc2FsIHRvIGFsbCBsYXllcnMsIGFuZCBiYm94dXJsIGZldGNoZXMgdGhlIGZlYXR1cmUgaXRpbmVyYXJ5LiBUaGlzIGlzIGluIHR1cm4gdXNlZCB0byBmaW5kIHRoZSBjZW50ZXJcbiAgICogZmVhdHVyZSBmb3IgdGhlIGJyZWFkY3J1bWJzIGFzIHdlbGwgYXMgZmV0Y2ggdGhlIGZlYXR1cmVzIHRoYXQgYXBwbHkgdG8gYSBCQm94R2VvSlNPTiBvYmplY3QuXG4gICAqXG4gICAqIEB0eXBlIHt7YmJveHVybDogKiwgY2VudGVydXJsOiAqfX1cbiAgICovXG4gIHRoaXMuYmJveCA9IHtcbiAgICBiYm94dXJsOiBjb25maWcuY2h1YmJzUGF0aCgnc2VydmljZXMvY3VzdG9tL2N1c3RvbV9vcGVyYXRpb24/bmFtZT1nZXRpZHNieWV4dGVudCZmb3JtYXQ9anNvbiZiYm94PTpiYm94JyksXG4gICAgLy8gdXNlZCB0byBnZXQgdGhlIGNlbnRlciBmZWF0dXJlLiBjYW4gZ2V0IGFueSBmZWF0dXJlIHlvdSB3YW50IGJ5IGlkXG4gICAgZmVhdHVybDogY29uZmlnLmNodWJic1BhdGgoJ3NlcnZpY2VzL2N1c3RvbS9jdXN0b21fb3BlcmF0aW9uP25hbWU9Z2V0ZmVhdHVyZXNieWlkJmZvcm1hdD1nZW9qc29uJmdhZG1fbGV2ZWw9OmxldmVsJmlkcz06aWRzJylcbiAgfTtcblxuICAvKipcbiAgICogQkJveEdlb0pTT05cbiAgICpcbiAgICogVGhpcyBsYXllciB0eXBlIHJldHJpZXZlZCBmZWF0dXJlcyB0aGF0IGludGVyc2VjdCB3aXRoIHRoZSBtYXAncyBib3VuZGluZyBib3guXG4gICAqIFRoZXJlIG11c3QgYmUgYSBiYWNrZW5kIEFQSSB0aGF0IHVuZGVyc3RhbmRzIHRoaXMuIFRoZSBmZWF0dXJlcyB0aGF0IGFwcGx5XG4gICAqIHRvIHRoZSBib3VuZGluZyBib3ggYXJlIGZldGNoZWQgdW5pdmVyc2FsbHkgdG8gYWxsIGxheWVycy4gVGhlc2UgZW5kcG9pbnRzXG4gICAqIGFyZSBzcGVjaWZpZWQgaW4gdGhpcy5iYm94LlxuICAgKlxuICAgKiBUaGUgQ2h1YmJzIFNwYXRpYWwgU2VydmVyIGZ1bGx5IGNvbXByZWhlbmRzIHRoaXMsIG90aGVycyBkbyBub3QuXG4gICAqXG4gICAqIEB0eXBlIHt7dHlwZTogc3RyaW5nfX1cbiAgICovXG4gIHRoaXMudGhlbWVjb3VudCA9IHtcbiAgICBuYW1lOiAnVGhlbWUgQ291bnQnLFxuICAgIHR5cGU6ICdiYm94Z2VvanNvbicsXG4gICAgdXJsOiBjb25maWcuY2h1YmJzUGF0aChcInNlcnZpY2VzL2N1c3RvbS9jdXN0b21fb3BlcmF0aW9uP25hbWU9Z2V0YWdncmVnYXRlZHRoZW1lZmVhdHVyZXNieWlkJmZvcm1hdD1nZW9qc29uJnRoZW1lPTp0aGVtZSZnYWRtX2xldmVsPTpsZXZlbCZpZHM9OmlkcyZmaWx0ZXJzPTpmaWx0ZXJzXCIpLFxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgIFwic3R5bGVGblwiOiBmdW5jdGlvbiAocHJvcGVydGllcykge1xuICAgICAgICB2YXIgc3R5bGUgPSB7XG4gICAgICAgICAgY29sb3I6ICd3aGl0ZScsXG4gICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICBmaWxsT3BhY2l0eTogMC4wNyxcbiAgICAgICAgICB3ZWlnaHQ6IDEuNVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChwcm9wZXJ0aWVzLnRoZW1lID09IFwiZGlzYXN0ZXJcIikge1xuICAgICAgICAgIGlmIChwcm9wZXJ0aWVzICYmIHByb3BlcnRpZXMuaXJvY19zdGF0dXNfX2MpIHtcbiAgICAgICAgICAgIHN3aXRjaCAocHJvcGVydGllcy5pcm9jX3N0YXR1c19fYy50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICAgICAgICAgIGNhc2UgXCJhY3RpdmVcIjpcbiAgICAgICAgICAgICAgICBzdHlsZS5maWxsQ29sb3IgPSBcIiNjYzAwMzNcIjtcbiAgICAgICAgICAgICAgICBzdHlsZS5maWxsT3BhY2l0eSA9IDAuNTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSBcIm1vbml0b3JpbmdcIjpcbiAgICAgICAgICAgICAgICBzdHlsZS5maWxsQ29sb3IgPSBcIiNjYzk5MDBcIjtcbiAgICAgICAgICAgICAgICBzdHlsZS5maWxsT3BhY2l0eSA9IDAuNTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSBcImluYWN0aXZlXCI6XG4gICAgICAgICAgICAgICAgc3R5bGUuZmlsbENvbG9yID0gXCJ3aGl0ZVwiO1xuICAgICAgICAgICAgICAgIHN0eWxlLmZpbGxPcGFjaXR5ID0gMC4wO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChwcm9wZXJ0aWVzLnRoZW1lID09IFwicHJvamVjdHJpc2tcIikge1xuICAgICAgICAgIGlmIChwcm9wZXJ0aWVzICYmIHByb3BlcnRpZXMub3ZlcmFsbF9hc3Nlc3NtZW50X19jKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKHByb3BlcnRpZXMub3ZlcmFsbF9hc3Nlc3NtZW50X19jLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgICAgICAgICAgY2FzZSBcImNyaXRpY2FsXCI6XG4gICAgICAgICAgICAgICAgc3R5bGUuZmlsbENvbG9yID0gXCJyZWRcIjtcbiAgICAgICAgICAgICAgICBzdHlsZS5maWxsT3BhY2l0eSA9IDAuNTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSBcImhpZ2hcIjpcbiAgICAgICAgICAgICAgICBzdHlsZS5maWxsQ29sb3IgPSBcIm9yYW5nZVwiO1xuICAgICAgICAgICAgICAgIHN0eWxlLmZpbGxPcGFjaXR5ID0gMC41O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIFwibWVkaXVtXCI6XG4gICAgICAgICAgICAgICAgc3R5bGUuZmlsbENvbG9yID0gXCJ5ZWxsb3dcIjtcbiAgICAgICAgICAgICAgICBzdHlsZS5maWxsT3BhY2l0eSA9IDAuNTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSBcImxvd1wiOlxuICAgICAgICAgICAgICAgIHN0eWxlLmZpbGxDb2xvciA9IFwiZ3JlZW5cIjtcbiAgICAgICAgICAgICAgICBzdHlsZS5maWxsT3BhY2l0eSA9IDAuNTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocHJvcGVydGllcy50aGVtZSA9PSBcInByb2plY3RoZWFsdGhcIikge1xuICAgICAgICAgIGlmIChwcm9wZXJ0aWVzICYmIHByb3BlcnRpZXMub3ZlcmFsbF9zdGF0dXNfX2MpIHtcbiAgICAgICAgICAgIHN3aXRjaCAocHJvcGVydGllcy5vdmVyYWxsX3N0YXR1c19fYy50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICAgICAgICAgIGNhc2UgXCJyZWRcIjpcbiAgICAgICAgICAgICAgICBzdHlsZS5maWxsQ29sb3IgPSBcInJlZFwiO1xuICAgICAgICAgICAgICAgIHN0eWxlLmZpbGxPcGFjaXR5ID0gMC41O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIFwieWVsbG93XCI6XG4gICAgICAgICAgICAgICAgc3R5bGUuZmlsbENvbG9yID0gXCJ5ZWxsb3dcIjtcbiAgICAgICAgICAgICAgICBzdHlsZS5maWxsT3BhY2l0eSA9IDAuNTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSBcImdyZWVuXCI6XG4gICAgICAgICAgICAgICAgc3R5bGUuZmlsbENvbG9yID0gXCJncmVlblwiO1xuICAgICAgICAgICAgICAgIHN0eWxlLmZpbGxPcGFjaXR5ID0gMC41O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIFwid2hpdGVcIjpcbiAgICAgICAgICAgICAgICBzdHlsZS5maWxsQ29sb3IgPSBcIndoaXRlXCI7XG4gICAgICAgICAgICAgICAgc3R5bGUuZmlsbE9wYWNpdHkgPSAwLjU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdHlsZTtcbiAgICAgIH0sXG4gICAgICBcImxhYmVsUHJvcGVydHlcIjogZnVuY3Rpb24gKHByb3BlcnRpZXMpIHtcbiAgICAgICAgaWYgKHByb3BlcnRpZXMudGhlbWUgPT0gXCJkaXNhc3RlclwiKSB7XG4gICAgICAgICAgdmFyIGNvbG9yID0gXCJcIjtcbiAgICAgICAgICB2YXIgbGFiZWxDb2xvciA9IFwiXCI7XG4gICAgICAgICAgaWYgKHByb3BlcnRpZXMgJiYgcHJvcGVydGllcy5pcm9jX3N0YXR1c19fYykge1xuICAgICAgICAgICAgc3dpdGNoIChwcm9wZXJ0aWVzLmlyb2Nfc3RhdHVzX19jLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgICAgICAgICAgY2FzZSBcImFjdGl2ZVwiOlxuICAgICAgICAgICAgICAgIGNvbG9yID0gXCIjY2MwMDMzXCI7XG4gICAgICAgICAgICAgICAgbGFiZWxDb2xvciA9IFwiI2ZmZlwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIFwibW9uaXRvcmluZ1wiOlxuICAgICAgICAgICAgICAgIGNvbG9yID0gXCIjZTFiYjI1XCI7XG4gICAgICAgICAgICAgICAgbGFiZWxDb2xvciA9IFwiI2ZmZlwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIFwiaW5hY3RpdmVcIjpcbiAgICAgICAgICAgICAgICBjb2xvciA9IFwiI2JkYmRiZFwiO1xuICAgICAgICAgICAgICAgIGxhYmVsQ29sb3IgPSBcIiMwMDBcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuICc8ZGl2IGNsYXNzPVwiZmVhdHVyZWxhYmVsLWljb24tbnVtYmVyXCInICsgKGNvbG9yID8gJyBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6ICcgKyBjb2xvciArICc7Y29sb3I6ICcgKyBsYWJlbENvbG9yICsgJ1wiJyA6ICcnKSArICc+PHNwYW4+JyArIHByb3BlcnRpZXMudGhlbWVfY291bnQgKyAnPC9zcGFuPjwvZGl2Pic7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgcmV0dXJuICc8ZGl2IGNsYXNzPVwiZmVhdHVyZWxhYmVsLWljb24tbnVtYmVyXCI+PHNwYW4+JyArIHByb3BlcnRpZXMudGhlbWVfY291bnQgKyAnPC9zcGFuPjwvZGl2Pic7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcIm1hcC1pY29uLXNpemVcIjogZnVuY3Rpb24gKHByb3BlcnRpZXMpIHtcbiAgICAgICAgLy9SZXR1cm4gYW4gYXJyYXkgb2YgMiBpdGVtcy4gc2l6ZSBvZiBtYXAgaWNvblxuICAgICAgICByZXR1cm4gWzM1LDM1XTtcbiAgICAgIH0sXG4gICAgICBcImRldGFpbHNVcmxcIjogY29uZmlnLmNodWJic1BhdGgoJ3NlcnZpY2VzL2N1c3RvbS9jdXN0b21fb3BlcmF0aW9uP25hbWU9Z2V0OnRoZW1lYnlndWlkJmZvcm1hdD1qc29uJmd1aWRzPTpndWlkcyZnYWRtX2xldmVsPTpsZXZlbCZmaWx0ZXJzPTpmaWx0ZXJzJyksXG4gICAgICBcIm9uU2VsZWN0XCI6ICdmZXRjaEZlYXR1cmVEZXRhaWxzJywgLy8gdGhlIEJCb3hHZW9KU09OIG1ldGhvZCB0byBjYWxsIG9uIHNlbGVjdC4gKHRvZ2dsZWQgb24pXG4gICAgICBcIm9uRGVzZWxlY3RcIjogJ2Nsb3NlRGV0YWlscycsIC8vIGZlYXR1cmVsYWJlbCBldmFsdWF0ZXMgdGhpcyBzdHJpbmcgd2hlbiBhIGZlYXR1cmUgaXMgdG9nZ2xlZCBvZmZcbiAgICAgIFwiZGVmYXVsdFRoZW1lXCI6ICdwcm9qZWN0JywgLy8gVGhlIGRlZmF1bHQgdGhlbWUgdGhlIGxheWVyIHVzZXMuIFRoaXMgaXMgdXNlZCBpZiB0aGVyZSBpcyBubyB0aGVtZSBxdWVyeSBwYXJhbS5cbiAgICAgIFwibGVnZW5kXCI6IGZ1bmN0aW9uICh0aGVtZSkge1xuICAgICAgICBpZiAodGhlbWUudG9Mb3dlckNhc2UoKSA9PSAnZGlzYXN0ZXInKSB7XG4gICAgICAgICAgLy9kaXNhc3RlclxuICAgICAgICAgIHJldHVybiAnPGltZyBzcmM9XCJpbWFnZXMvbGVnZW5kX2Rpc2FzdGVyLnBuZ1wiIGFsdD1cImRpc2FzdGVyIGxlZ2VuZFwiIC8+JztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGVtZS50b0xvd2VyQ2FzZSgpID09ICdwcm9qZWN0aGVhbHRoJykge1xuICAgICAgICAgIC8vcHJvamVjdFxuICAgICAgICAgIHJldHVybiAnPGltZyBzcmM9XCJpbWFnZXMvbGVnZW5kX3Byb2plY3RoZWFsdGgucG5nXCIgYWx0PVwicHJvamVjdCBoZWFsdGggbGVnZW5kXCIgLz4nO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYodGhlbWUudG9Mb3dlckNhc2UoKSA9PSAncHJvamVjdHJpc2snKSB7XG4gICAgICAgICAgcmV0dXJuICc8aW1nIHNyYz1cImltYWdlcy9sZWdlbmRfcHJvamVjdHJpc2sucG5nXCIgYWx0PVwicHJvamVjdCByaXNrIGxlZ2VuZFwiIC8+JztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGVtZS50b0xvd2VyQ2FzZSgpID09ICdwcm9qZWN0Jykge1xuICAgICAgICAgIHJldHVybiAnPGltZyBzcmM9XCJpbWFnZXMvbGVnZW5kX3Byb2plY3QucG5nXCIgYWx0PVwicHJvamVjdCBsZWdlbmRcIiAvPic7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgIH1cbiAgfTtcblxuICB0aGlzLnRoZW1lID0ge1xuICAgIG5hbWU6ICdUaGVtZSAoQmFkZ2UgT2ZmKScsXG4gICAgdHlwZTogJ2Jib3hnZW9qc29uJyxcbiAgICB1cmw6IGNvbmZpZy5jaHViYnNQYXRoKFwic2VydmljZXMvY3VzdG9tL2N1c3RvbV9vcGVyYXRpb24/bmFtZT1nZXRhZ2dyZWdhdGVkdGhlbWVmZWF0dXJlc2J5aWQmZm9ybWF0PWdlb2pzb24mdGhlbWU9OnRoZW1lJmdhZG1fbGV2ZWw9OmxldmVsJmlkcz06aWRzJmZpbHRlcnM9OmZpbHRlcnNcIiksXG4gICAgcHJvcGVydGllczoge1xuICAgICAgXCJzdHlsZUZuXCI6IGZ1bmN0aW9uIChwcm9wZXJ0aWVzKSB7XG4gICAgICAgIHZhciBzdHlsZSA9IHtcbiAgICAgICAgICBjb2xvcjogJ3doaXRlJyxcbiAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgIGZpbGxPcGFjaXR5OiAwLjA3LFxuICAgICAgICAgIHdlaWdodDogMS41XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKHByb3BlcnRpZXMudGhlbWUgPT0gXCJkaXNhc3RlclwiKSB7XG4gICAgICAgICAgaWYgKHByb3BlcnRpZXMgJiYgcHJvcGVydGllcy5pcm9jX3N0YXR1c19fYykge1xuICAgICAgICAgICAgc3dpdGNoIChwcm9wZXJ0aWVzLmlyb2Nfc3RhdHVzX19jLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgICAgICAgICAgY2FzZSBcImFjdGl2ZVwiOlxuICAgICAgICAgICAgICAgIHN0eWxlLmZpbGxDb2xvciA9IFwiI2NjMDAzM1wiO1xuICAgICAgICAgICAgICAgIHN0eWxlLmZpbGxPcGFjaXR5ID0gMC41O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIFwibW9uaXRvcmluZ1wiOlxuICAgICAgICAgICAgICAgIHN0eWxlLmZpbGxDb2xvciA9IFwiI2NjOTkwMFwiO1xuICAgICAgICAgICAgICAgIHN0eWxlLmZpbGxPcGFjaXR5ID0gMC41O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIFwiaW5hY3RpdmVcIjpcbiAgICAgICAgICAgICAgICBzdHlsZS5maWxsQ29sb3IgPSBcIndoaXRlXCI7XG4gICAgICAgICAgICAgICAgc3R5bGUuZmlsbE9wYWNpdHkgPSAwLjA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHByb3BlcnRpZXMudGhlbWUgPT0gXCJwcm9qZWN0cmlza1wiKSB7XG4gICAgICAgICAgaWYgKHByb3BlcnRpZXMgJiYgcHJvcGVydGllcy5vdmVyYWxsX2Fzc2Vzc21lbnRfX2MpIHtcbiAgICAgICAgICAgIHN3aXRjaCAocHJvcGVydGllcy5vdmVyYWxsX2Fzc2Vzc21lbnRfX2MudG9Mb3dlckNhc2UoKSkge1xuICAgICAgICAgICAgICBjYXNlIFwiY3JpdGljYWxcIjpcbiAgICAgICAgICAgICAgICBzdHlsZS5maWxsQ29sb3IgPSBcInJlZFwiO1xuICAgICAgICAgICAgICAgIHN0eWxlLmZpbGxPcGFjaXR5ID0gMC41O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIFwiaGlnaFwiOlxuICAgICAgICAgICAgICAgIHN0eWxlLmZpbGxDb2xvciA9IFwib3JhbmdlXCI7XG4gICAgICAgICAgICAgICAgc3R5bGUuZmlsbE9wYWNpdHkgPSAwLjU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgXCJtZWRpdW1cIjpcbiAgICAgICAgICAgICAgICBzdHlsZS5maWxsQ29sb3IgPSBcInllbGxvd1wiO1xuICAgICAgICAgICAgICAgIHN0eWxlLmZpbGxPcGFjaXR5ID0gMC41O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIFwibG93XCI6XG4gICAgICAgICAgICAgICAgc3R5bGUuZmlsbENvbG9yID0gXCJncmVlblwiO1xuICAgICAgICAgICAgICAgIHN0eWxlLmZpbGxPcGFjaXR5ID0gMC41O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChwcm9wZXJ0aWVzLnRoZW1lID09IFwicHJvamVjdGhlYWx0aFwiKSB7XG4gICAgICAgICAgaWYgKHByb3BlcnRpZXMgJiYgcHJvcGVydGllcy5vdmVyYWxsX3N0YXR1c19fYykge1xuICAgICAgICAgICAgc3dpdGNoIChwcm9wZXJ0aWVzLm92ZXJhbGxfc3RhdHVzX19jLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgICAgICAgICAgY2FzZSBcInJlZFwiOlxuICAgICAgICAgICAgICAgIHN0eWxlLmZpbGxDb2xvciA9IFwicmVkXCI7XG4gICAgICAgICAgICAgICAgc3R5bGUuZmlsbE9wYWNpdHkgPSAwLjU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgXCJ5ZWxsb3dcIjpcbiAgICAgICAgICAgICAgICBzdHlsZS5maWxsQ29sb3IgPSBcInllbGxvd1wiO1xuICAgICAgICAgICAgICAgIHN0eWxlLmZpbGxPcGFjaXR5ID0gMC41O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIFwiZ3JlZW5cIjpcbiAgICAgICAgICAgICAgICBzdHlsZS5maWxsQ29sb3IgPSBcImdyZWVuXCI7XG4gICAgICAgICAgICAgICAgc3R5bGUuZmlsbE9wYWNpdHkgPSAwLjU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgXCJ3aGl0ZVwiOlxuICAgICAgICAgICAgICAgIHN0eWxlLmZpbGxDb2xvciA9IFwid2hpdGVcIjtcbiAgICAgICAgICAgICAgICBzdHlsZS5maWxsT3BhY2l0eSA9IDAuNTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0eWxlO1xuICAgICAgfSxcbiAgICAgIFwibWFwLWljb24tc2l6ZVwiOiBmdW5jdGlvbiAocHJvcGVydGllcykge1xuICAgICAgICAvL1JldHVybiBhbiBhcnJheSBvZiAyIGl0ZW1zLiBzaXplIG9mIG1hcCBpY29uXG4gICAgICAgIHJldHVybiBbMzUsMzVdO1xuICAgICAgfSxcbiAgICAgIFwiZGV0YWlsc1VybFwiOiBjb25maWcuY2h1YmJzUGF0aCgnc2VydmljZXMvY3VzdG9tL2N1c3RvbV9vcGVyYXRpb24/bmFtZT1nZXQ6dGhlbWVieWd1aWQmZm9ybWF0PWpzb24mZ3VpZHM9Omd1aWRzJmdhZG1fbGV2ZWw9OmxldmVsJmZpbHRlcnM9OmZpbHRlcnMnKSxcbiAgICAgIFwib25TZWxlY3RcIjogJ2ZldGNoRmVhdHVyZURldGFpbHMnLCAvLyB0aGUgQkJveEdlb0pTT04gbWV0aG9kIHRvIGNhbGwgb24gc2VsZWN0LiAodG9nZ2xlZCBvbilcbiAgICAgIFwib25EZXNlbGVjdFwiOiAnY2xvc2VEZXRhaWxzJywgLy8gZmVhdHVyZWxhYmVsIGV2YWx1YXRlcyB0aGlzIHN0cmluZyB3aGVuIGEgZmVhdHVyZSBpcyB0b2dnbGVkIG9mZlxuICAgICAgXCJkZWZhdWx0VGhlbWVcIjogJ3Byb2plY3QnLCAvLyBUaGUgZGVmYXVsdCB0aGVtZSB0aGUgbGF5ZXIgdXNlcy4gVGhpcyBpcyB1c2VkIGlmIHRoZXJlIGlzIG5vIHRoZW1lIHF1ZXJ5IHBhcmFtLlxuICAgICAgXCJsYWJlbFByb3BlcnR5XCI6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gJzxkaXYgY2xhc3M9XCJmZWF0dXJlbGFiZWwtaWNvbi1udW1iZXJcIiBzdHlsZT1cImRpc3BsYXk6bm9uZTtcIj48L2Rpdj4nO1xuICAgICAgfSxcbiAgICAgIFwibGVnZW5kXCI6IGZ1bmN0aW9uICh0aGVtZSkge1xuICAgICAgICBpZiAodGhlbWUudG9Mb3dlckNhc2UoKSA9PSAnZGlzYXN0ZXInKSB7XG4gICAgICAgICAgLy9kaXNhc3RlclxuICAgICAgICAgIHJldHVybiAnPGltZyBzcmM9XCJpbWFnZXMvbGVnZW5kX2Rpc2FzdGVyLnBuZ1wiIGFsdD1cImRpc2FzdGVyIGxlZ2VuZFwiIC8+JztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGVtZS50b0xvd2VyQ2FzZSgpID09ICdwcm9qZWN0aGVhbHRoJykge1xuICAgICAgICAgIC8vcHJvamVjdFxuICAgICAgICAgIHJldHVybiAnPGltZyBzcmM9XCJpbWFnZXMvbGVnZW5kX3Byb2plY3RoZWFsdGgucG5nXCIgYWx0PVwicHJvamVjdCBoZWFsdGggbGVnZW5kXCIgLz4nO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYodGhlbWUudG9Mb3dlckNhc2UoKSA9PSAncHJvamVjdHJpc2snKSB7XG4gICAgICAgICAgcmV0dXJuICc8aW1nIHNyYz1cImltYWdlcy9sZWdlbmRfcHJvamVjdHJpc2sucG5nXCIgYWx0PVwicHJvamVjdCByaXNrIGxlZ2VuZFwiIC8+JztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGVtZS50b0xvd2VyQ2FzZSgpID09ICdwcm9qZWN0Jykge1xuICAgICAgICAgIHJldHVybiAnPGltZyBzcmM9XCJpbWFnZXMvbGVnZW5kX3Byb2plY3QucG5nXCIgYWx0PVwicHJvamVjdCBsZWdlbmRcIiAvPic7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgIH1cbiAgfTtcblxuXG4gIHRoaXMuYm91bmRhcmllcyA9IHtcbiAgICBuYW1lOiAnQm91bmRhcmllcycsXG4gICAgdHlwZTogJ2Jib3hnZW9qc29uJyxcbiAgICB0aGVtZTogJ2FsbCcsXG4gICAgdXJsOiBjb25maWcuY2h1YmJzUGF0aCgnc2VydmljZXMvY3VzdG9tL2N1c3RvbV9vcGVyYXRpb24/bmFtZT1nZXRmZWF0dXJlc2J5aWQmZm9ybWF0PWdlb2pzb24mZ2FkbV9sZXZlbD06bGV2ZWwmaWRzPTppZHMnKSxcbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICBcInN0cm9rZVwiOiAnd2hpdGUnLFxuICAgICAgXCJzdHJva2Utd2lkdGhcIjogMS4zLFxuICAgICAgXCJzdHJva2Utb3BhY2l0eVwiOiAxLFxuICAgICAgXCJmaWxsLW9wYWNpdHlcIjogMCxcbiAgICAgIFwibGFiZWxQcm9wZXJ0eVwiOiBcIm5hbWVcIixcbiAgICAgIFwib25TZWxlY3RcIjogJ3Nob3dGZWF0dXJlUHJvcGVydGllcycsXG4gICAgICBcIm9uRGVzZWxlY3RcIjogJ2Nsb3NlRGV0YWlscycsXG4gICAgICBcImxlZ2VuZFwiOiAnPHN2ZyBjbGFzcz1cImxlYWZsZXQtem9vbS1hbmltYXRlZFwiIHdpZHRoPVwiNDhcIiBoZWlnaHQ9XCI0OFwiPjxnPjxwYXRoIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBzdHJva2U9XCJ3aGl0ZVwiIHN0cm9rZS1vcGFjaXR5PVwiMVwiIHN0cm9rZS13aWR0aD1cIjEuM1wiIGZpbGw9XCIjNTU1NTU1XCIgZmlsbC1vcGFjaXR5PVwiMFwiIGNsYXNzPVwibGVhZmxldC1jbGlja2FibGVcIiBkPVwiTS0xODkwIC00MDlMLTE4OTYgLTQwNEwtMTg5OSAtNDA0TC0xOTA3IC0zOTVMLTE5MTkgLTM5NEwtMTkyMSAtNDA0TC0xOTI0IC00MDhMLTE5MjIgLTQxMUwtMTg5OSAtNDIxTC0xODk0IC00MjBMLTE4OTEgLTQxNEwtMTg4OCAtNDEzelwiPjwvcGF0aD48L2c+PC9zdmc+J1xuICAgIH1cblxuICB9O1xuXG4gIC8qKlxuICAgKiBTaG93cyBiYWRnZXMgd2l0aCBudW1iZXJzIG9uIHRoZW0uIFRoaXMgaXMgZm9yIHRlc3RpbmcgYW5kIGRlbW8gcHVycG9zZXMuXG4gICAqIERlbW9uc3RyYXRlcyB0aGUgbGFiZWwgdy8gYmFkZ2UgZmVhdHVyZS5cbiAgICovXG4gIHRoaXMuZmFrZWNvdW50ID0ge1xuICAgIG5hbWU6ICdGYWtlIENvdW50JyxcbiAgICB0eXBlOiAnYmJveGdlb2pzb24nLFxuICAgIHVybDogY29uZmlnLmNodWJic1BhdGgoJ3NlcnZpY2VzL2N1c3RvbS9jdXN0b21fb3BlcmF0aW9uP25hbWU9Z2V0ZmVhdHVyZXNieWlkJmZvcm1hdD1nZW9qc29uJmdhZG1fbGV2ZWw9OmxldmVsJmlkcz06aWRzJyksXG4gICAgcHJvcGVydGllczoge1xuICAgICAgXCJzdHJva2VcIjogJ3doaXRlJyxcbiAgICAgIFwic3Ryb2tlLXdpZHRoXCI6IDIsXG4gICAgICBcInN0cm9rZS1vcGFjaXR5XCI6IDEsXG4gICAgICBcImZpbGxcIjogXCJncmVlblwiLFxuICAgICAgXCJmaWxsLW9wYWNpdHlcIjogMCxcbiAgICAgIFwibGFiZWxQcm9wZXJ0eVwiOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoNTAgLSAxICsgMSkpICsgMTtcbiAgICAgIH1cbiAgICB9XG5cbiAgfTtcblxuICAvL0dBRE0gY291bnRyeSBleHRlbnRzLCBsZXZlbCAwXG4gIHRoaXMuY291bnRyeWV4dGVudHMgPSB7XG4gICAgdHlwZTogJ2dlb2pzb24nLFxuICAgICAgdGhlbWU6ICdvdGhlcicsXG4gICAgICB1cmw6ICdkYXRhL3Z3X2dhZG1fcmF3X2dlb20uZ2VvanNvbidcbiAgfTtcblxuICAvL0FSQyBSZWdpb24gZXh0ZW50c1xuICB0aGlzLmFyY3JlZ2lvbmV4dGVudHMgPSB7XG4gICAgdHlwZTogJ2dlb2pzb24nLFxuICAgICAgdGhlbWU6ICdvdGhlcicsXG4gICAgICB1cmw6ICdkYXRhL2FyY19yZWdpb25fZXh0ZW50cy5nZW9qc29uJ1xuICB9O1xuICBcbiAgLyoqXG4gICAqIEZvciBsYXllcnMsIHdlIHRyeSBhbmQgZ2V0IGFuIGFsaWFzIGZvciBldmVyeXRoaW5nLCBzbyBpZiBpdCdzIGEgVVJMIHRoYXRcbiAgICogZG9lcyBub3QgbWF0Y2gsIHdlIGp1c3Qgd2FudCB0byByZXR1cm4gaXRzZWxmIHNvIHdlIGNhbiBmZXRjaCB0aGF0IGdpdmVuIHVybC5cbiAgICpcbiAgICogQHBhcmFtIG5hbWVcbiAgICogQHJldHVybnMgeyp9XG4gICAqL1xuICB0aGlzLmZpbmQgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHZhciB2YWwgPSB0aGlzW25hbWVdIHx8IHRoaXNbbmFtZS50b0xvd2VyQ2FzZSgpXTtcbiAgICBpZiAodHlwZW9mIHZhbCAhPT0gJ3VuZGVmaW5lZCcgJiYgdmFsICE9PSBudWxsKSB7XG4gICAgICByZXR1cm4gdmFsO1xuICAgIH1cbiAgICBpZiAobmFtZS5zbGljZSgwLCA0KS50b0xvd2VyQ2FzZSgpID09PSAnaHR0cCcpIHtcbiAgICAgIHJldHVybiBuYW1lO1xuICAgIH1cbiAgICBjb25zb2xlLmVycm9yKCdDT1VMRCBOT1QgRklORCBBTElBUzogJyArIG5hbWUpO1xuICAgIHJldHVybiBudWxsO1xuICB9O1xuXG59KTtcbiIsIi8qKlxuICogQ3JlYXRlZCBieSBOaWNob2xhcyBIYWxsYWhhbiA8bmhhbGxhaGFuQHNwYXRpYWxkZXYuY29tPlxuICogICAgICAgb24gMy8xOC8xNC5cbiAqL1xuXG4vKipcbiAqIENvbmZpZyBGaWxlIGZvciBTdG9yaWVzIFBhbmVsXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ0dlb0FuZ3VsYXInKS5zZXJ2aWNlKCdTdG9yaWVzQ29uZmlnJywgZnVuY3Rpb24gKCkge1xuXG4gIC8qKlxuICAgKiBTdG9yaWVzIFBhbmVsIExpc3RcbiAgICpcbiAgICogTGlzdCBvZiBzdG9yaWVzIHRoYXQgZ2V0IHNob3duIGluIHRoZSBTdG9yaWVzIFBhbmVsLiBFZGl0IHRoaXMgdG8gYWRkIG9yIHJlbW92ZVxuICAgKiBzdG9yaWVzIHRoYXQgdGhlIHVzZXIgd2lsbCBzZWUgYXMgY2hvaWNlcy4gQWxsIHN0b3JpZXMsIGluY2x1ZGluZyBvbmVzIG5vdCBpbiB0aGlzXG4gICAqIGxpc3QsIGNhbiBzdGlsbCBiZSBtYW51YWxseSByZWZlcmVuY2VkIGluIHRoZSB1cmwuIFRoaXMgaXMganVzdCBmb3IgdGhlIFVzZXIgSW50ZXJmYWNlLlxuICAgKi9cbiAgdGhpcy5zdG9yaWVzID0gW1xuICAgICdoYWl5YW4nLFxuICAgICdlYm9sYSdcbiAgXTtcblxuXG4gIC8qKlxuICAgKiBTdG9yaWVzXG4gICAqXG4gICAqIEFsbCBzdG9yeSBhbGlhc2VzIGNhbiBiZSByZWZlcnJlZCB0byBpbiB0aGUgdXJsLiBUaGUgY29ycmVzcG9uZGluZ1xuICAgKiBwYXRoIHRvIHRoZSB0aHVtYm5haWwgaW4gdGhlIFN0b3JpZXMgUGFuZWwgc2hvdWxkIGJlOlxuICAgKiAgICBpbWFnZXMve2FsaWFzTmFtZX0uanBnXG4gICAqXG4gICAqL1xuXG4gIHRoaXMuaGFpeWFuID0ge1xuICAgIHVybDogJy9tYXBmb2xpby9pbmRleC5odG1sIy9tYXBAMTIuNzY4OTQ2LDEyMi40ODY1NzIsNihvcnRobyx0aGVtZWNvdW50LGdkYWNzKT90aGVtZT1kaXNhc3RlciZkZXRhaWxzLXBhbmVsPW9wZW4mc2ZfaWQ9YTBFZDAwMDAwMHFabnRVRUFTJyxcbiAgICBuYW1lOiAnVHlwaG9vbiBIYWl5YW4gUmVzcG9uc2UnLFxuICAgIGRhdGU6ICcyMDEzLTEwLTEyJyxcbiAgICB0aHVtYm5haWw6ICdpbWFnZXMvc3Rvcmllcy9oYWl5YW4ucG5nJyxcbiAgICBrZXl3b3JkczogJ1R5cGhvb24sIERpc2FzdGVyIFJlc3BvbnNlLCBIYWl5YW4sIERpc2FzdGVyLCBBTUVFJ1xuICB9O1xuICB0aGlzLmVib2xhID0ge1xuICAgIHVybDogJy9tYXBmb2xpby9pbmRleC5odG1sIy9tYXBAMTUuMDcyMTI0LC0zLjQ2MDY5Myw2KG9ydGhvLHRoZW1lY291bnQsZ2RhY3MpP3RoZW1lPWRpc2FzdGVyJyxcbiAgICBuYW1lOiAnRWJvbGEgT3V0YnJlYWsgUmVzb3Buc2UnLFxuICAgIGRhdGU6ICcyMDE0LTE1LTUnLFxuICAgIHRodW1ibmFpbDogJ2ltYWdlcy9zdG9yaWVzL2Vib2xhLnBuZycsXG4gICAga2V5d29yZHM6ICdFYm9sYSwgRGlzYXN0ZXIgUmVzcG9uc2UsIEd1aW5lYSwgRGlzZWFzZSwgTWFsaSwgQWZyaWNhJ1xuXG5cbiAgfTtcblxuICAvKipcbiAgICogRm9yIGxheWVycywgd2UgdHJ5IGFuZCBnZXQgYW4gYWxpYXMgZm9yIGV2ZXJ5dGhpbmcsIHNvIGlmIGl0J3MgYSBVUkwgdGhhdFxuICAgKiBkb2VzIG5vdCBtYXRjaCwgd2UganVzdCB3YW50IHRvIHJldHVybiBpdHNlbGYgc28gd2UgY2FuIGZldGNoIHRoYXQgZ2l2ZW4gdXJsLlxuICAgKlxuICAgKiBAcGFyYW0gbmFtZVxuICAgKiBAcmV0dXJucyB7Kn1cbiAgICovXG4gIHRoaXMuZmluZCA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICB2YXIgdmFsID0gdGhpc1tuYW1lXSB8fCB0aGlzW25hbWUudG9Mb3dlckNhc2UoKV07XG4gICAgaWYgKHR5cGVvZiB2YWwgIT09ICd1bmRlZmluZWQnICYmIHZhbCAhPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHZhbDtcbiAgICB9XG4gICAgaWYgKG5hbWUuc2xpY2UoMCwgNCkudG9Mb3dlckNhc2UoKSA9PT0gJ2h0dHAnKSB7XG4gICAgICByZXR1cm4gbmFtZTtcbiAgICB9XG4gICAgY29uc29sZS5lcnJvcignQ09VTEQgTk9UIEZJTkQgQUxJQVM6ICcgKyBuYW1lKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcblxufSk7XG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgTmljaG9sYXMgSGFsbGFoYW4gPG5oYWxsYWhhbkBzcGF0aWFsZGV2LmNvbT5cbiAqICAgICAgIG9uIDYvMy8xNC5cbiAqL1xuXG52YXIgRmVhdHVyZVNldCA9IHJlcXVpcmUoJy4uLy4uLy4uL2xpYi9mZWF0dXJlbGFiZWwvRmVhdHVyZVNldCcpO1xudmFyIFJlc291cmNlID0gcmVxdWlyZSgnLi9yZXNvdXJjZScpO1xudmFyIGJib3hVcmwgPSByZXF1aXJlKCcuL3ZlY3RvcicpLmJib3hVcmw7XG52YXIgYmJveFJlc291cmNlcyA9IHJlcXVpcmUoJy4vdmVjdG9yJykuYmJveFJlc291cmNlcztcblxudmFyIEwgPSByZXF1aXJlKCcuL3ZlY3RvcicpLkw7XG52YXIgYW5ndWxhciA9IHJlcXVpcmUoJy4vdmVjdG9yJykuYW5ndWxhcjtcbnZhciAkcm9vdFNjb3BlID0gcmVxdWlyZSgnLi92ZWN0b3InKS4kcm9vdFNjb3BlO1xudmFyICRodHRwID0gcmVxdWlyZSgnLi92ZWN0b3InKS4kaHR0cDtcblxubW9kdWxlLmV4cG9ydHMgPSBCQm94R2VvSlNPTjtcblxuXG5mdW5jdGlvbiBCQm94R2VvSlNPTihjb25maWcpIHtcbiAgUmVzb3VyY2UuY2FsbCh0aGlzLCBjb25maWcpO1xuICBpZihjb25maWcuYmJveHVybCkge1xuICAgIHRoaXMuX2Jib3h1cmwgPSBiYm94VXJsID0gY29uZmlnLmJib3h1cmw7XG4gIH1cbiAgdGhpcy5fZmVhdHVyZXMgPSB7fTtcbiAgdGhpcy5fZmVhdHVyZUxheWVyc0J5TGV2ZWwgPSB7fTtcbiAgdGhpcy5fYWxsRmVhdHVyZUxheWVycyA9IHt9O1xuICBpZiAoY29uZmlnLnByb3BlcnRpZXMgJiYgY29uZmlnLnByb3BlcnRpZXMubGFiZWxQcm9wZXJ0eSkge1xuICAgIHRoaXMuX2ZlYXR1cmVTZXQgPSBuZXcgRmVhdHVyZVNldCgpO1xuICB9XG4gIHRoaXMuX2RlZmF1bHRUaGVtZSA9IGNvbmZpZy5kZWZhdWx0VGhlbWUgfHwgJ3Byb2plY3QnO1xuXG4gIGlmIChjb25maWcuZGV0YWlsc1VybCkge1xuICAgIHRoaXMuX2RldGFpbHNVcmwgPSBjb25maWcuZGV0YWlsc1VybDtcbiAgfVxuXG4gIGJib3hSZXNvdXJjZXMucHVzaCh0aGlzKTtcbiAgdGhpcy5fcmVzSWR4ID0gYmJveFJlc291cmNlcy5sZW5ndGggLSAxO1xufVxuXG5CQm94R2VvSlNPTi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFJlc291cmNlLnByb3RvdHlwZSk7XG5CQm94R2VvSlNPTi5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBCQm94R2VvSlNPTjtcblxuXG5CQm94R2VvSlNPTi5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuICBiYm94UmVzb3VyY2VzLnNwbGljZSh0aGlzLl9yZXNJZHgsMSk7XG59O1xuXG5cbkJCb3hHZW9KU09OLnByb3RvdHlwZS5nZXRMYXllciA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGxheWVyID0gUmVzb3VyY2UucHJvdG90eXBlLmdldExheWVyLmNhbGwodGhpcyk7XG4gIGxheWVyLmRlc3Ryb3lSZXNvdXJjZSA9IHRoaXMuZGVzdHJveTsgLy8gZ2l2ZXMgdGhlIG1hcCB0byBkZXN0cm95IHRoZSBiYm94Z2VvanNvbiB2ZWN0b3IgcHJvdmlkZXIgcmVzb3VyY2VcbiAgcmV0dXJuIGxheWVyO1xufTtcblxuXG5CQm94R2VvSlNPTi5wcm90b3R5cGUuX2dldEZlYXR1cmVzID0gZnVuY3Rpb24gKGZlYXRPYmopIHtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICB2YXIgdGhlbWUgPSAkcm9vdFNjb3BlLiRzdGF0ZVBhcmFtcy50aGVtZSB8fCBzZWxmLl9kZWZhdWx0VGhlbWU7XG4gIHZhciBmaWx0ZXJzID0gJ251bGwnO1xuICBpZiAoJHJvb3RTY29wZS4kc3RhdGVQYXJhbXMuZmlsdGVycykge1xuICAgIGZpbHRlcnMgPSAkcm9vdFNjb3BlLiRzdGF0ZVBhcmFtcy5maWx0ZXJzO1xuICB9XG4gIHZhciB1cmwgPSB0aGlzLl91cmwucmVwbGFjZSgnOnRoZW1lJywgdGhlbWUpXG4gICAgLnJlcGxhY2UoJzpsZXZlbCcsIGZlYXRPYmoubGV2ZWwpXG4gICAgLnJlcGxhY2UoJzppZHMnLCBmZWF0T2JqLmd1aWQpXG4gICAgLnJlcGxhY2UoJzpmaWx0ZXJzJywgZmlsdGVycyk7XG4gIHZhciBwcm94eVBhdGggPSBjb25maWcucHJveHlQYXRoKHVybCk7XG5cbiAgLy8gYSBjYWNoZSBtYWtlcyBzZW5zZSBpZiB0aGUgYmJveGdlb2pzb24gb2JqZWN0IGlzIHJlaW5zdGFudGlhdGVkXG4gICRodHRwLmdldCh1cmwsIHtjYWNoZTogdHJ1ZX0pLnN1Y2Nlc3MoZnVuY3Rpb24gKGdlb2pzb24sIHN0YXR1cykge1xuICAgIHByb2Nlc3NGZWF0dXJlcyhzZWxmLCBmZWF0T2JqLCBnZW9qc29uKTtcbiAgfSkuZXJyb3IoZnVuY3Rpb24oZXJyKSB7XG4gICAgJGh0dHAuZ2V0KHByb3h5UGF0aCkuc3VjY2VzcyhmdW5jdGlvbiAoZ2VvanNvbiwgc3RhdHVzKSB7XG4gICAgICBwcm9jZXNzRmVhdHVyZXMoc2VsZiwgZmVhdE9iaiwgZ2VvanNvbik7XG4gICAgfSkuZXJyb3IoZnVuY3Rpb24gKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcignVW5hYmxlIHRvIGdldEZlYXR1cmVzOiAnICsgdXJsKTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5mdW5jdGlvbiBwcm9jZXNzRmVhdHVyZXMoc2VsZiwgZmVhdE9iaiwgZ2VvanNvbikge1xuICBpZiAoZ2VvanNvbi5lcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ1VuYWJsZSB0byBmZXRjaCBmZWF0dXJlOiAnICsgZ2VvanNvbi5lcnJvcik7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKCFnZW9qc29uLmZlYXR1cmVzIHx8IGdlb2pzb24uZmVhdHVyZXMubGVuZ3RoIDwgMSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBmZWF0ID0gZ2VvanNvbi5mZWF0dXJlc1swXTtcblxuICAvLyBwdXR0aW5nIGV4aXN0aW5nIHByb3BlcnRpZXMgaW50byBuZXcgZmVhdHVyZSBvYmplY3QgcHJvcGVydGllc1xuICBmb3IgKHZhciBrZXkgaW4gZmVhdE9iaikge1xuICAgIGZlYXQucHJvcGVydGllc1trZXldID0gZmVhdE9ialtrZXldO1xuICAgIGRlbGV0ZSBmZWF0T2JqW2tleV07XG4gIH1cblxuICAvLyBleHRlbmRpbmcgcHJvcGVydGllcyBmcm9tIHRoZSBjb25maWcgZmlsZVxuICBmb3IgKHZhciBrZXkgaW4gc2VsZi5fY29uZmlnLnByb3BlcnRpZXMpIHtcbiAgICBmZWF0LnByb3BlcnRpZXNba2V5XSA9IHNlbGYuX2NvbmZpZy5wcm9wZXJ0aWVzW2tleV07XG4gICAgLy8gTGF5ZXJDb25maWcgd2lsbCBzdGF0ZSB0aGUgbmFtZSBvZiB0aGUgQkJveEdlb0pTT04gbWV0aG9kIHRvIGJlIGNhbGxlZCBvbiBjbGljay5cbiAgICBpZiAoa2V5ID09PSAnb25TZWxlY3QnIHx8IGtleSA9PT0gJ29uRGVzZWxlY3QnKSB7XG4gICAgICB2YXIgZm5OYW1lID0gc2VsZi5fY29uZmlnLnByb3BlcnRpZXNba2V5XTtcbiAgICAgIGZlYXQucHJvcGVydGllc1trZXldID0gc2VsZltmbk5hbWVdO1xuICAgIH1cbiAgfVxuXG4gIGZvciAodmFyIGsgaW4gZmVhdCkge1xuICAgIGZlYXRPYmpba10gPSBmZWF0W2tdO1xuICB9XG4gIGFuZ3VsYXIuZXh0ZW5kKGZlYXRPYmosIGZlYXQpO1xuICBjb25zb2xlLmxvZygnZmV0Y2hlZCBmZWF0dXJlOiAnICsgZmVhdE9iai5wcm9wZXJ0aWVzLm5hbWUpO1xuXG4gIGlmICghc2VsZi5fZ2VvanNvbkxheWVyKSB7XG4gICAgc2VsZi5fZ2V0TGF5ZXIoKTtcbiAgICBjb25zb2xlLmxvZygnY3JlYXRpbmcgbGF5ZXIgaW4gX2dldEZlYXR1cmVzJyk7XG4gIH1cblxuICB2YXIgb3B0aW9ucyA9IHNlbGYuX2dlb2pzb25MYXllci5vcHRpb25zO1xuICB2YXIgZmVhdExheWVyID0gTC5HZW9KU09OLmdlb21ldHJ5VG9MYXllcihmZWF0T2JqLCBvcHRpb25zLnBvaW50VG9MYXllciwgb3B0aW9ucy5jb29yZHNUb0xhdExuZywgb3B0aW9ucyk7XG4gIEwuc3RhbXAoZmVhdExheWVyKTtcbiAgZmVhdExheWVyLmZlYXR1cmUgPSBMLkdlb0pTT04uYXNGZWF0dXJlKGZlYXRPYmopO1xuICBmZWF0TGF5ZXIuZGVmYXVsdE9wdGlvbnMgPSBmZWF0TGF5ZXIub3B0aW9ucztcbiAgc2VsZi5fZ2VvanNvbkxheWVyLnJlc2V0U3R5bGUoZmVhdExheWVyKTtcbiAgaWYgKG9wdGlvbnMub25FYWNoRmVhdHVyZSkge1xuICAgIG9wdGlvbnMub25FYWNoRmVhdHVyZShmZWF0T2JqLCBmZWF0TGF5ZXIpO1xuICB9XG5cbiAgYWRkTGF5ZXIoc2VsZiwgZmVhdExheWVyKTtcbn1cblxuXG4vKipcbiAqIFNob3VsZCBvbmx5IGJlIHVzZWQgYnkgQkJveExheWVyIG9iamVjdHMuXG4gKiBDb25zaWRlciB0aGlzIGEgcHJpdmF0ZSBtZXRob2QuXG4gKlxuICogQHBhcmFtIHNlbGZcbiAqIEBwYXJhbSBmZWF0TGF5ZXJcbiAqL1xuZnVuY3Rpb24gYWRkTGF5ZXIoc2VsZiwgZmVhdExheWVyKSB7XG4gIGlmIChzZWxmLl9mZWF0dXJlU2V0KSB7XG4gICAgc2VsZi5fZmVhdHVyZVNldC5hZGRGZWF0dXJlKGZlYXRMYXllciwgc2VsZi5fZ2VvanNvbkxheWVyKTtcbiAgfVxuICBzZWxmLl9nZW9qc29uTGF5ZXIuYWRkTGF5ZXIoZmVhdExheWVyKTtcblxuICB2YXIgcHJvcHMgPSBmZWF0TGF5ZXIuZmVhdHVyZS5wcm9wZXJ0aWVzO1xuICB2YXIgbGV2ZWwgPSBwcm9wcy5sZXZlbDtcbiAgaWYgKCFzZWxmLl9mZWF0dXJlTGF5ZXJzQnlMZXZlbFtsZXZlbF0pIHtcbiAgICBzZWxmLl9mZWF0dXJlTGF5ZXJzQnlMZXZlbFtsZXZlbF0gPSBbXTtcbiAgfVxuICBzZWxmLl9mZWF0dXJlTGF5ZXJzQnlMZXZlbFtsZXZlbF0ucHVzaChmZWF0TGF5ZXIpO1xuICBzZWxmLl9hbGxGZWF0dXJlTGF5ZXJzW3Byb3BzLmd1aWRdID0gZmVhdExheWVyO1xufVxuXG5cbkJCb3hHZW9KU09OLnByb3RvdHlwZS5wcm9jZXNzRmVhdHVyZUl0aW5lcmFyeSA9IGZ1bmN0aW9uIChmZWF0SXRpbmVyYXJ5KSB7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgdmFyIGFjdGl2ZUxldmVscyA9IHt9O1xuICBzZWxmLl9hY3RpdmVMZXZlbHMgPSBhY3RpdmVMZXZlbHM7XG4gIHNlbGYuX2ZlYXRJdGluZXJhcnlIYXNoID0ge307XG4gIGZvciAodmFyIGk9MCwgbGVuID0gZmVhdEl0aW5lcmFyeS5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICAgIHZhciBvID0gZmVhdEl0aW5lcmFyeVtpXTtcbiAgICBhY3RpdmVMZXZlbHNbby5sZXZlbF0gPSB0cnVlO1xuICAgIHNlbGYuX2ZlYXRJdGluZXJhcnlIYXNoW28uZ3VpZF0gPSBvO1xuICAgIHZhciBndWlkID0gby5ndWlkIHx8IG8uaWQ7XG4gICAgaWYgKCFzZWxmLl9mZWF0dXJlc1tndWlkXSkge1xuICAgICAgLy8gYWRkaW5nIGZlYXR1cmUgdG8gZmVhdHVyZXMgaGFzaCAoYWxsIGZlYXR1cmVzIGV2ZXIpXG4gICAgICBzZWxmLl9mZWF0dXJlc1tndWlkXSA9IG87XG4gICAgICAvLyBnZXR0aW5nIHRoZSBmZWF0dXJlcyAoaW5jbHVkaW5nIGJhc2ljLCBzaW1wbGlmaWVkIGdlb21ldHJ5KVxuICAgICAgc2VsZi5fZ2V0RmVhdHVyZXMobyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGlmIHdlIGFscmVhZHkgaGF2ZSBhIGxheWVyIGFuZCBpdCBpcyBub3Qgb24gdGhlIG1hcCBidXQgc2hvdWxkIGJlIHRoZXJlLCBhZGQgaXQgdG8gdGhlIGdlb2pzb24gbGF5ZXJcbiAgICAgIHZhciBsID0gc2VsZi5fYWxsRmVhdHVyZUxheWVyc1tndWlkXTtcbiAgICAgIGlmIChsKSB7XG4gICAgICAgIGFkZExheWVyKHNlbGYsIGwpO1xuICAgICAgfVxuXG4gICAgfVxuICB9XG4gIHNlbGYuX3JlbW92ZUluYWN0aXZlTGF5ZXJzKHNlbGYpO1xuICByZW1vdmVJbmFjdGl2ZUxhYmVscyhzZWxmKTtcbn07XG5cblxuLyoqXG4gKiBUaGlzIGlzIGNhbGxlZCBieSB0aGUgb25TZWxlY3QgZXZlbnQgZm9yIHRoZSBmZWF0dXJlbGFiZWxzLlxuICogQHBhcmFtIGZlYXR1cmVMYXllclxuICovXG5CQm94R2VvSlNPTi5wcm90b3R5cGUuZmV0Y2hGZWF0dXJlRGV0YWlscyA9IGZ1bmN0aW9uKGZlYXR1cmVMYXllcikge1xuICB2YXIgcHJvcGVydGllcyA9IGZlYXR1cmVMYXllci5mZWF0dXJlLnByb3BlcnRpZXM7XG4gIHZhciBkZXRhaWxzVXJsID0gcHJvcGVydGllcy5kZXRhaWxzVXJsO1xuICBpZiAoIWRldGFpbHNVcmwpIHtcbiAgICBjb25zb2xlLmVycm9yKCdXZSBuZWVkIGEgZGV0YWlsc1VybCB0byBmZXRjaEZlYXR1cmVEZXRhaWxzJyk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIHRoZW1lID0gJHJvb3RTY29wZS4kc3RhdGVQYXJhbXMudGhlbWUgfHwgcHJvcGVydGllcy5kZWZhdWx0VGhlbWUgfHwgJ3Byb2plY3QnO1xuICB2YXIgdGhlbWVOYW1lID0gJHJvb3RTY29wZS50aGVtZU5hbWVIYXNoW3RoZW1lXTtcbiAgaWYgKHR5cGVvZiBwcm9wZXJ0aWVzLmxldmVsID09PSAndW5kZWZpbmVkJyB8fCBwcm9wZXJ0aWVzLmxldmVsID09PSBudWxsKSB7XG4gICAgY29uc29sZS5lcnJvcignd2UgbmVlZCBhIGxldmVsLicpO1xuICB9XG5cbiAgdmFyIGZpbHRlcnMgPSAnbnVsbCc7XG4gIGlmICgkcm9vdFNjb3BlLiRzdGF0ZVBhcmFtcy5maWx0ZXJzKSB7XG4gICAgZmlsdGVycyA9ICRyb290U2NvcGUuJHN0YXRlUGFyYW1zLmZpbHRlcnM7XG4gIH1cblxuICBkZXRhaWxzVXJsID0gZGV0YWlsc1VybC5yZXBsYWNlKCc6dGhlbWUnLCB0aGVtZSlcbiAgICAucmVwbGFjZSgnOmd1aWRzJywgcHJvcGVydGllcy5ndWlkKVxuICAgIC5yZXBsYWNlKCc6bGV2ZWwnLCBwcm9wZXJ0aWVzLmxldmVsKVxuICAgIC5yZXBsYWNlKCc6ZmlsdGVycycsIGZpbHRlcnMpO1xuXG4gICRodHRwLmdldChkZXRhaWxzVXJsLCB7Y2FjaGU6IHRydWV9KS5zdWNjZXNzKGZ1bmN0aW9uIChkZXRhaWxzKSB7XG5cbiAgICBmZWF0dXJlTGF5ZXIuZmVhdHVyZS5wcm9wZXJ0aWVzLnNhbGVzZm9yY2UgPSB7fTtcbiAgICBmZWF0dXJlTGF5ZXIuZmVhdHVyZS5wcm9wZXJ0aWVzLnNhbGVzZm9yY2VbdGhlbWVOYW1lXSA9IGRldGFpbHM7XG4gICAgJHJvb3RTY29wZS4kYnJvYWRjYXN0KCdkZXRhaWxzJywgZmVhdHVyZUxheWVyKTtcblxuICB9KS5lcnJvcihmdW5jdGlvbihlcnIpe1xuICAgIGNvbnNvbGUuZXJyb3IoSlNPTi5zdHJpbmdpZnkoZXJyKSk7XG4gIH0pO1xuXG59O1xuXG5cbkJCb3hHZW9KU09OLnByb3RvdHlwZS5zaG93RmVhdHVyZVByb3BlcnRpZXMgPSBmdW5jdGlvbihmZWF0dXJlTGF5ZXIpIHtcbiAgJHJvb3RTY29wZS4kYnJvYWRjYXN0KCdkZXRhaWxzJywgZmVhdHVyZUxheWVyKTtcbn07XG5cblxuQkJveEdlb0pTT04ucHJvdG90eXBlLmNsb3NlRGV0YWlscyA9IGZ1bmN0aW9uICgpIHtcbiAgJHJvb3RTY29wZS5jbG9zZVBhcmFtKCdkZXRhaWxzLXBhbmVsJyk7XG59O1xuXG5cbmZ1bmN0aW9uIHJlbW92ZUluYWN0aXZlTGFiZWxzKHNlbGYpIHtcbiAgdmFyIGFsbEZlYXR1cmVMYXllcnMgPSBzZWxmLl9hbGxGZWF0dXJlTGF5ZXJzO1xuICB2YXIgZmVhdHVyZUl0aW5lcmFyeSA9IHNlbGYuX2ZlYXRJdGluZXJhcnlIYXNoO1xuICBmb3IgKHZhciBrZXkgaW4gYWxsRmVhdHVyZUxheWVycykge1xuICAgIGlmICghZmVhdHVyZUl0aW5lcmFyeVtrZXldKSB7XG4gICAgICB2YXIgZmVhdHVyZUxheWVyID0gYWxsRmVhdHVyZUxheWVyc1trZXldO1xuICAgICAgaWYgKCBmZWF0dXJlTGF5ZXIuZ2VvanNvbkxheWVyICYmIGZlYXR1cmVMYXllci5sYWJlbCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIlJFTU9WSU5HOiBcIiArIGZlYXR1cmVMYXllci5mZWF0dXJlLnByb3BlcnRpZXMubmFtZSk7XG4gICAgICAgIHdpbmRvdy5tYXAucmVtb3ZlTGF5ZXIoZmVhdHVyZUxheWVyLmxhYmVsKTsgLy8gTkggRklYTUVcbiAgICAgICAgZmVhdHVyZUxheWVyLmxhYmVsID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgaWYgKCBmZWF0dXJlTGF5ZXIuZ2VvanNvbkxheWVyICYmIGZlYXR1cmVMYXllci5nZW9qc29uTGF5ZXIubGFiZWwpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJSRU1PVklORzogXCIgKyBmZWF0dXJlTGF5ZXIuZmVhdHVyZS5wcm9wZXJ0aWVzLm5hbWUpO1xuICAgICAgICB3aW5kb3cubWFwLnJlbW92ZUxheWVyKGZlYXR1cmVMYXllci5nZW9qc29uTGF5ZXIubGFiZWwpOyAvLyBOSCBGSVhNRVxuICAgICAgICBmZWF0dXJlTGF5ZXIuZ2VvanNvbkxheWVyLmxhYmVsID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBGb3IgYWxsIG9mIHRoZSBhY3RpdmUgbGF5ZXJzIHRoYXQgd2UgaGF2ZSwgcmVtb3ZlIGxheWVycyB0aGF0IGFyZVxuICogbm90IHBhcnQgb2YgdGhlIGN1cnJlbnQgc2V0IG9mIGFjdGl2ZSBsZXZlbHMuXG4gKlxuICogQHByaXZhdGVcbiAqL1xuQkJveEdlb0pTT04ucHJvdG90eXBlLl9yZW1vdmVJbmFjdGl2ZUxheWVycyA9IGZ1bmN0aW9uKHNlbGYpIHtcbiAgdmFyIGFjdGl2ZUxldmVscyA9IHRoaXMuX2FjdGl2ZUxldmVscztcbiAgdmFyIGZlYXR1cmVMYXllcnNCeUxldmVsID0gdGhpcy5fZmVhdHVyZUxheWVyc0J5TGV2ZWw7XG4gIGZvciAodmFyIGxldmVsIGluIGZlYXR1cmVMYXllcnNCeUxldmVsKSB7XG4gICAgLy8gaWYgdGhlIGxldmVsIGlzIG5vdCBhbiBhY3RpdmUgbGV2ZWwsIHJlbW92ZSBmcm9tIG1hcFxuICAgIGlmICghYWN0aXZlTGV2ZWxzW2xldmVsXSkge1xuICAgICAgdmFyIGxheWVycyA9IGZlYXR1cmVMYXllcnNCeUxldmVsW2xldmVsXTtcbiAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBsYXllcnMubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgICAgICAgdmFyIGxheWVyID0gbGF5ZXJzW2ldO1xuICAgICAgICBzZWxmLl9nZW9qc29uTGF5ZXIucmVtb3ZlTGF5ZXIobGF5ZXIpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKCdSZW1vdmVkIExheWVyOiAnICsgbGF5ZXIuZmVhdHVyZS5wcm9wZXJ0aWVzLm5hbWUpO1xuICAgICAgfVxuICAgICAgZGVsZXRlIGZlYXR1cmVMYXllcnNCeUxldmVsW2xldmVsXTtcbiAgICB9XG4gIH1cbn07XG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgTmljaG9sYXMgSGFsbGFoYW4gPG5oYWxsYWhhbkBzcGF0aWFsZGV2LmNvbT5cbiAqICAgICAgIG9uIDYvMy8xNC5cbiAqL1xuXG52YXIgUmVzb3VyY2UgPSByZXF1aXJlKCcuL3Jlc291cmNlJyk7XG52YXIgJHJvb3RTY29wZSA9IHJlcXVpcmUoJy4vdmVjdG9yJykuJHJvb3RTY29wZTtcblxubW9kdWxlLmV4cG9ydHMgPSBHZW9KU09OO1xuXG4vKipcbiAqIFRoaXMgaXMgYSBiYXNpYyBHZW9KU09OIFZlY3RvclByb3ZpZGVyLlxuICogQHBhcmFtIGNvbmZpZ1xuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIEdlb0pTT04oY29uZmlnKSB7XG4gIFJlc291cmNlLmNhbGwodGhpcywgY29uZmlnKTtcbiAgdGhpcy5fZ2VvanNvbiA9IG51bGw7XG59XG5cbkdlb0pTT04ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShSZXNvdXJjZS5wcm90b3R5cGUpO1xuR2VvSlNPTi5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBHZW9KU09OO1xuXG5HZW9KU09OLnByb3RvdHlwZS5mZXRjaCA9IGZ1bmN0aW9uIChjYikge1xuICBpZiAodGhpcy5fZ2VvanNvbiAmJiB0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicpIHtcbiAgICBjYih0aGlzLl9nZW9qc29uKTtcbiAgICByZXR1cm47XG4gIH1cbiAgdmFyIHNlbGYgPSB0aGlzO1xuICBSZXNvdXJjZS5wcm90b3R5cGUuZmV0Y2guY2FsbCh0aGlzLCBmdW5jdGlvbihkYXRhKSB7XG4gICAgc2VsZi5fZ2VvanNvbiA9IGRhdGE7XG4gICAgaWYgKHR5cGVvZiBzZWxmLl9jb25maWcucHJvcGVydGllcyA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGlmICggZGF0YS50eXBlID09PSAnRmVhdHVyZUNvbGxlY3Rpb24nKSB7XG4gICAgICAgIHZhciBmZWF0cyA9IGRhdGEuZmVhdHVyZXM7XG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBmZWF0cy5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICAgICAgICAgIHZhciBmZWF0ID0gZmVhdHNbaV07XG4gICAgICAgICAgaWYgKCFmZWF0LnByb3BlcnRpZXMpIGZlYXQucHJvcGVydGllcyA9IHt9O1xuICAgICAgICAgIGFuZ3VsYXIuZXh0ZW5kKGZlYXQucHJvcGVydGllcywgc2VsZi5fY29uZmlnLnByb3BlcnRpZXMpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgeyAvLyBhIGZlYXR1cmUgb3IgYSBnZW9tZXRyeSB0eXBlXG4gICAgICAgIGlmICghZGF0YS5wcm9wZXJ0aWVzKSBkYXRhLnByb3BlcnRpZXMgPSB7fTtcbiAgICAgICAgYW5ndWxhci5leHRlbmQoZGF0YS5wcm9wZXJ0aWVzLCBzZWxmLl9jb25maWcucHJvcGVydGllcyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJykgY2Ioc2VsZi5fZ2VvanNvbik7XG4gIH0pO1xufTtcblxuR2VvSlNPTi5wcm90b3R5cGUuZ2V0TGF5ZXIgPSBmdW5jdGlvbigpIHtcbiAgaWYgKHRoaXMuX2dlb2pzb25MYXllcikgcmV0dXJuIHRoaXMuX2dlb2pzb25MYXllcjtcbiAgdmFyIGxheWVyID0gIFJlc291cmNlLnByb3RvdHlwZS5nZXRMYXllci5jYWxsKHRoaXMpO1xuICB0aGlzLmZldGNoKGZ1bmN0aW9uKGdlb2pzb24pe1xuICAgIGxheWVyLmFkZERhdGEoZ2VvanNvbik7XG4gICAgbGF5ZXIuZWFjaExheWVyKGZ1bmN0aW9uIChsKSB7XG4gICAgICBsLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJHJvb3RTY29wZS4kYnJvYWRjYXN0KCdkZXRhaWxzJywgbCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG4gIHJldHVybiBsYXllcjtcbn07XG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgTmljaG9sYXMgSGFsbGFoYW4gPG5oYWxsYWhhbkBzcGF0aWFsZGV2LmNvbT5cbiAqICAgICAgIG9uIDYvMy8xNC5cbiAqL1xuXG52YXIgUmVzb3VyY2UgPSByZXF1aXJlKCcuL3Jlc291cmNlJyk7XG52YXIgJHJvb3RTY29wZSA9IHJlcXVpcmUoJy4vdmVjdG9yJykuJHJvb3RTY29wZTtcbnZhciB0b0dlb0pTT04gPSByZXF1aXJlKCcuL3ZlY3RvcicpLnRvR2VvSlNPTjtcbnZhciAkID0gcmVxdWlyZSgnLi92ZWN0b3InKS4kO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEtNTDtcblxuLyoqXG4gKiBBIEtNTCBSZXNvdXJjZSBmZXRjaGVzIEtNTCBhbmQgcGFyc2VzIGl0IHdpdGggdG9nZW9qc29uLmpzXG4gKiBOb3RlIHRoYXQgdG9nZW9qc29uLmpzIGhhcyBidWdzIGFuZCBkb2VzIG5vdCBhY2N1cmF0ZWx5IHBhcnNlXG4gKiBzb21lIG9mIHRoZSBLTUwgc291cmNlcyB3ZSBoYXZlIHRlc3RlZCB3aXRoLiBUaGlzIGxpYnJhcnkgaGFzXG4gKiBiZWVuIG1vZGlmaWVkIHdpdGggbXkgaG90Zml4ZXMuXG4gKlxuICogQHBhcmFtIGNvbmZpZ1xuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIEtNTChjb25maWcpIHtcbiAgUmVzb3VyY2UuY2FsbCh0aGlzLCBjb25maWcpO1xuICB0aGlzLl9nZW9qc29uID0gbnVsbDtcbn1cblxuS01MLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoUmVzb3VyY2UucHJvdG90eXBlKTtcbktNTC5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBLTUw7XG5cbktNTC5wcm90b3R5cGUuZmV0Y2ggPSBmdW5jdGlvbiAoY2IpIHtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICBSZXNvdXJjZS5wcm90b3R5cGUuZmV0Y2guY2FsbCh0aGlzLCBmdW5jdGlvbihkYXRhKSB7XG4gICAgdmFyIHhtbCA9ICQucGFyc2VYTUwoZGF0YSk7XG4gICAgc2VsZi5fZ2VvanNvbiA9IHRvR2VvSlNPTi5rbWwoeG1sKTtcbiAgICBpZiAodHlwZW9mIHNlbGYuX2NvbmZpZy5wcm9wZXJ0aWVzID09PSAnb2JqZWN0Jykge1xuICAgICAgaWYgKHR5cGVvZiBzZWxmLl9nZW9qc29uLnByb3BlcnRpZXMgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHNlbGYuX2dlb2pzb24ucHJvcGVydGllcyA9IHt9O1xuICAgICAgfVxuICAgICAgYW5ndWxhci5leHRlbmQoc2VsZi5fZ2VvanNvbi5wcm9wZXJ0aWVzLCBzZWxmLl9jb25maWcucHJvcGVydGllcyk7XG4gICAgICBzZWxmLl9nZW9qc29uLnByb3BlcnRpZXMuc3JjVHlwZSA9ICdrbWwnO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKSBjYihzZWxmLl9nZW9qc29uLCBzZWxmKTtcbiAgfSk7XG59O1xuXG5LTUwucHJvdG90eXBlLmdldExheWVyID0gZnVuY3Rpb24gKCkge1xuICBpZiAodGhpcy5fZ2VvanNvbkxheWVyKSByZXR1cm4gdGhpcy5fZ2VvanNvbkxheWVyO1xuICB2YXIgbGF5ZXIgPSAgUmVzb3VyY2UucHJvdG90eXBlLmdldExheWVyLmNhbGwodGhpcyk7XG4gIHRoaXMuZmV0Y2goZnVuY3Rpb24oZ2VvanNvbil7XG4gICAgbGF5ZXIuYWRkRGF0YShnZW9qc29uKTtcbiAgICBsYXllci5lYWNoTGF5ZXIoZnVuY3Rpb24gKGwpIHtcbiAgICAgIGwub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkcm9vdFNjb3BlLiRicm9hZGNhc3QoJ2RldGFpbHMnLCBsKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcbiAgcmV0dXJuIGxheWVyO1xufTtcblxuS01MLnByb3RvdHlwZS5lYWNoTGF5ZXIgPSBmdW5jdGlvbiAoY2IpIHtcbiAgdGhpcy5fZWFjaExheWVyQ2FsbGJhY2sgPSBjYjtcbiAgdGhpcy5mZXRjaChmdW5jdGlvbihnZW9qc29uLCBzZWxmKXtcbiAgICB2YXIgbGF5ZXJzID0gc2VsZi5fZ2VvanNvbkxheWVyLl9sYXllcnM7XG4gICAgZm9yICh2YXIga2V5IGluIGxheWVycykge1xuICAgICAgdmFyIGxheWVyID0gbGF5ZXJzW2tleV07XG4gICAgICBjYihsYXllcik7XG4gICAgfVxuICB9KTtcbn07XG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgTmljaG9sYXMgSGFsbGFoYW4gPG5oYWxsYWhhbkBzcGF0aWFsZGV2LmNvbT5cbiAqICAgICAgIG9uIDYvMy8xNC5cbiAqL1xuXG52YXIgcmVzb3VyY2VzID0gcmVxdWlyZSgnLi92ZWN0b3InKS5yZXNvdXJjZXM7XG52YXIgJGh0dHAgPSByZXF1aXJlKCcuL3ZlY3RvcicpLiRodHRwO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlc291cmNlO1xuXG4vKipcbiAqIEFsbCBWZWN0b3JQcm92aWRlciByZXNvdXJjZXMgYXJlIGNoaWxkcmVuIG9mIHRoaXMgY2xhc3MuXG4gKiBAcGFyYW0gY29uZmlnXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gUmVzb3VyY2UoY29uZmlnKSB7XG4gIHJlc291cmNlcy5wdXNoKHRoaXMpO1xuICB0aGlzLl9jb25maWcgPSBjb25maWc7XG4gIHRoaXMuX3VybCA9IG51bGw7XG4gIGlmICh0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0Jykge1xuICAgIHRoaXMuX3VybCA9IGNvbmZpZy51cmw7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5fdXJsID0gY29uZmlnO1xuICB9XG5cbiAgdGhpcy5fZWFjaExheWVyQ2FsbGJhY2sgPSBudWxsO1xuICB0aGlzLl9nZW9qc29uTGF5ZXIgPSBudWxsO1xufVxuXG5cbi8qKlxuICogRmV0Y2hlcyBkYXRhIGZyb20gdGhlIGdpdmVuIHVybCBvZiBhIHJlc291cmNlLlxuICogU3ViY2xhc3NlcyB0aGVuIGhhbmRsZSB0aGUgY2FsbGJhY2sgYWNjb3JkaW5nbHkuXG4gKlxuICogTmVlZHMgdG8gYWxzbyB0cnkgdG8gZ2V0IGEgcmVzb3VyY2UgdmlhIHRoZSBDaHViYnNcbiAqIHByb3h5LlxuICpcbiAqIEBwYXJhbSBjYlxuICovXG5SZXNvdXJjZS5wcm90b3R5cGUuZmV0Y2ggPSBmdW5jdGlvbihjYikge1xuICB2YXIgcHJveHlQYXRoID0gY29uZmlnLnByb3h5UGF0aCh0aGlzLl91cmwpO1xuICAkaHR0cC5nZXQodGhpcy5fdXJsLCB7Y2FjaGU6IHRydWV9KS5zdWNjZXNzKGZ1bmN0aW9uIChkYXRhLCBzdGF0dXMpIHtcbiAgICBjYihkYXRhKTtcbiAgfSkuZXJyb3IoZnVuY3Rpb24oKSB7XG4gICAgLy8gdHJ5aW5nIHByb3h5XG4gICAgJGh0dHAuZ2V0KHByb3h5UGF0aCwge2NhY2hlOiB0cnVlfSkuc3VjY2VzcyhmdW5jdGlvbiAoZGF0YSwgc3RhdHVzKSB7XG4gICAgICBjYihkYXRhKTtcbiAgICB9KS5lcnJvcihmdW5jdGlvbigpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJVbmFibGUgdG8gZmV0Y2ggZnJvbTogXCIgKyBwcm94eVBhdGgpO1xuICAgIH0pO1xuICB9KTtcblxufTtcblxuXG4vKipcbiAqIFJldHVybnMgdGhlIExlYWZsZXQgR2VvSlNPTiBMYXllciBhc3NvY2lhdGVkIHdpdGggdGhlXG4gKiBSZXNvdXJjZSBvciBjcmVhdGVzIGEgbmV3IG9uZS5cbiAqXG4gKiBAcmV0dXJucyB7bnVsbHwqfVxuICovXG5SZXNvdXJjZS5wcm90b3R5cGUuZ2V0TGF5ZXIgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0eXBlb2YgdGhpcy5fZ2VvanNvbkxheWVyICE9PSAndW5kZWZpbmVkJyAmJiB0aGlzLl9nZW9qc29uTGF5ZXIgIT09IG51bGwpIHtcbiAgICByZXR1cm4gdGhpcy5fZ2VvanNvbkxheWVyO1xuICB9XG5cbiAgdGhpcy5fZ2VvanNvbkxheWVyID0gTC5nZW9Kc29uKHRoaXMuX2dlb2pzb24gfHwgbnVsbCwge1xuICAgIHN0eWxlOiBmdW5jdGlvbihmZWF0dXJlKSB7XG4gICAgICBpZiAodHlwZW9mIGZlYXR1cmUucHJvcGVydGllcy5zdHlsZUZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBmZWF0dXJlLnByb3BlcnRpZXMuc3R5bGVGbihmZWF0dXJlLnByb3BlcnRpZXMpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIEwubWFwYm94LnNpbXBsZXN0eWxlLnN0eWxlKGZlYXR1cmUpO1xuICAgIH0sXG4gICAgcG9pbnRUb0xheWVyOiBmdW5jdGlvbihmZWF0dXJlLCBsYXRsb24pIHtcbiAgICAgIGlmICghZmVhdHVyZS5wcm9wZXJ0aWVzKSBmZWF0dXJlLnByb3BlcnRpZXMgPSB7fTtcbiAgICAgIGlmIChmZWF0dXJlLnByb3BlcnRpZXMuc2NhbGUpIHtcbiAgICAgICAgcmV0dXJuIEwuY2lyY2xlTWFya2VyKGxhdGxvbiwge1xuICAgICAgICAgIGZpbGxDb2xvcjogZmVhdHVyZS5wcm9wZXJ0aWVzLmNvbG9yIHx8ICcjRkYwMDAwJyxcbiAgICAgICAgICByYWRpdXM6IDIwICogZmVhdHVyZS5wcm9wZXJ0aWVzLnNjYWxlXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIEwubWFwYm94Lm1hcmtlci5zdHlsZShmZWF0dXJlLCBsYXRsb24pO1xuICAgIH1cbiAgfSkuZWFjaExheWVyKHRoaXMuX2VhY2hMYXllckNhbGxiYWNrKTtcblxuXG4gIHJldHVybiB0aGlzLl9nZW9qc29uTGF5ZXI7XG59O1xuXG5SZXNvdXJjZS5wcm90b3R5cGUuZWFjaExheWVyID0gZnVuY3Rpb24gKGNiKSB7XG4gIHRoaXMuX2VhY2hMYXllckNhbGxiYWNrID0gY2I7XG4gIHRoaXMuX2dlb2pzb25MYXllci5lYWNoTGF5ZXIoY2IpO1xufTtcbiIsIi8qKlxuICogQ3JlYXRlZCBieSBOaWNob2xhcyBIYWxsYWhhbiA8bmhhbGxhaGFuQHNwYXRpYWxkZXYuY29tPlxuICogICAgICAgb24gMy8xOS8xNC5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdHZW9Bbmd1bGFyJykuZmFjdG9yeSgnVmVjdG9yUHJvdmlkZXInLCBmdW5jdGlvbiAoJHJvb3RTY29wZSwgJGxvY2F0aW9uLCAkaHR0cCwgTGF5ZXJDb25maWcpIHtcblxuICB2YXIgdmVjdG9yID0gcmVxdWlyZSgnLi92ZWN0b3InKTtcbiAgdmVjdG9yLnNldEluamVjdG9ycygkcm9vdFNjb3BlLCAkbG9jYXRpb24sICRodHRwLCBMYXllckNvbmZpZyk7XG5cblxuICAvKipcbiAgICogbWFrZSB0aGUgZGVmYXVsdCBCQm94VVJMIGFibGUgdG8gYmUgb3ZlcnJpZGRlbiBpZiBzcGVjaWZpZWQgYnkgdGhlIExheWVyQ29uZmlnIE9iamVjdC5cbiAgICogQHBhcmFtIGNvbmZpZ1xuICAgKiBAY29uc3RydWN0b3JcbiAgICovXG4gIHZlY3Rvci5iYm94VXJsID0gTGF5ZXJDb25maWcuYmJveC5iYm94dXJsO1xuXG4gIHZhciBSZXNvdXJjZSA9IHJlcXVpcmUoJy4vUmVzb3VyY2UnKTtcbiAgdmFyIEdlb0pTT04gPSByZXF1aXJlKCcuL0dlb0pTT04nKTtcbiAgdmFyIEJCb3hHZW9KU09OID0gcmVxdWlyZSgnLi9CQm94R2VvSlNPTicpO1xuICB2YXIgS01MID0gcmVxdWlyZSgnLi9LTUwnKTtcbiAgdmFyIENTViA9IHJlcXVpcmUoJy4vY3N2Jyk7XG5cblxuICAvKipcbiAgICogVGhpcyBpcyB1c2VkIGJ5IHRoZSBmYWN0b3J5IHRvIGR5bmFtaWNhbGx5IHN0YXRlIHRoZSB0eXBlIChjbGFzcylcbiAgICogdGhhdCBpdCB3YW50cyB0byBpbnN0YW50aWF0ZS5cbiAgICpcbiAgICogQHR5cGUge3tnZW9qc29uOiBHZW9KU09OLCBiYm94Z2VvanNvbjogQkJveEdlb0pTT04sIGttbDogS01MfX1cbiAgICovXG4gIHZhciB0eXBlcyA9IHtcbiAgICBnZW9qc29uOiBHZW9KU09OLFxuICAgIGJib3hnZW9qc29uOiBCQm94R2VvSlNPTixcbiAgICBrbWw6IEtNTCxcbiAgICBjc3Y6IENTVlxuICB9O1xuXG5cblxuICAvKipcbiAgICogRmV0Y2hlcyB0aGUgZmVhdHVyZSBpdGluZXJhcnkgYmFzZWQgb24gdGhlIGN1cnJlbnQgYmJveC5cbiAgICpcbiAgICogVGhlIGZlYXR1cmUgaXRpbmVyYXJ5IGlzIGEgc2V0IG9mIGZlYXR1cmVzIHdpdGggc29tZSBwcm9wZXJ0aWVzXG4gICAqIHN1Y2ggYXMgZ3VpZCBhbmQgbmFtZS4gVGhlIGdlb21ldHJ5IGZvciBlYWNoIG9mIHRoZXNlIGZlYXR1cmVzXG4gICAqIGhhcyBub3QgeWV0IGJlZW4gcmVxdWVzdGVkLiBUaGlzIGlzIGRvbmUgYnkgX2dldEZlYXR1cmVzLlxuICAgKi9cbiAgZnVuY3Rpb24gZmV0Y2hGZWF0dXJlSXRpbmVyYXJ5KCkge1xuICAgIHZhciB0aGlzVXJsID0gdmVjdG9yLmJib3hVcmwucmVwbGFjZSgnOmJib3gnLCB2ZWN0b3IuYmJveCk7XG4gICAgdmFyIHByb3h5UGF0aCA9IGNvbmZpZy5wcm94eVBhdGgodGhpc1VybCk7XG4gICAgJGh0dHAuZ2V0KHRoaXNVcmwsIHtjYWNoZTogdHJ1ZX0pLnN1Y2Nlc3MoZnVuY3Rpb24gKGZlYXRJdGluZXJhcnksIHN0YXR1cykge1xuICAgICAgcHJvY2Vzc0ZlYXR1cmVJdGluZXJhcnkoZmVhdEl0aW5lcmFyeSk7XG4gICAgfSkuZXJyb3IoZnVuY3Rpb24oKSB7XG4gICAgICAkaHR0cC5nZXQocHJveHlQYXRoLCB7Y2FjaGU6IHRydWV9KS5zdWNjZXNzKGZ1bmN0aW9uIChmZWF0SXRpbmVyYXJ5LCBzdGF0dXMpIHtcbiAgICAgICAgcHJvY2Vzc0ZlYXR1cmVJdGluZXJhcnkoZmVhdEl0aW5lcmFyeSk7XG4gICAgICB9KS5lcnJvcihmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIlVuYWJsZSB0byBmZXRjaEZlYXR1cmVJdGluZXJhcnk6IFwiICsgdGhpc1VybCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NGZWF0dXJlSXRpbmVyYXJ5KGZlYXRJdGluZXJhcnkpIHtcbiAgICBjb25zb2xlLmxvZyhcIkZFQVRVUkUgSVRJTkVSQVJZOlwiKTtcbiAgICBmb3IgKHZhciBqID0gMCwgbGVuID0gZmVhdEl0aW5lcmFyeS5sZW5ndGg7IGogPCBsZW47IGorKykge1xuICAgICAgdmFyIGZlYXQgPSBmZWF0SXRpbmVyYXJ5W2pdO1xuICAgICAgaWYgKCBmZWF0LmlzY2VudGVyICkge1xuICAgICAgICB2ZWN0b3IuY2VudGVyTGV2ZWwgPSBmZWF0LmxldmVsIHx8IDA7XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKFsnZmVhdEl0aW5lcmFyeScsZmVhdEl0aW5lcmFyeV0pO1xuXG4gICAgLy8gaWYgdGhlcmUgYXJlIG5vIGZlYXR1cmVzIGZvciB0aGUgY3VycmVudCBib3VuZGluZyBib3hcbiAgICBpZiAoIWZlYXRJdGluZXJhcnkgfHwgZmVhdEl0aW5lcmFyeS5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDZW50ZXIgZmVhdHVyZSBsb2dpYyBmb3IgYnJlYWRjcnVtYnMuXG4gICAgICovXG4gICAgZm9yICh2YXIgaT0wLCBsZW49ZmVhdEl0aW5lcmFyeS5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICAgICAgdmFyIGYgPSBmZWF0SXRpbmVyYXJ5W2ldO1xuICAgICAgaWYgKGYuaXNjZW50ZXIgPT0gdHJ1ZSkge1xuICAgICAgICAkcm9vdFNjb3BlLiRicm9hZGNhc3QoJ2NlbnRlci1mZWF0dXJlJywgZik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQkJveEdlb0pTT04gbG9naWNcbiAgICAgKi9cbiAgICBmb3IodmFyIHIgPSAwLCBsZW4gPSB2ZWN0b3IuYmJveFJlc291cmNlcy5sZW5ndGg7IHIgPCBsZW47ICsrcikge1xuICAgICAgdmVjdG9yLmJib3hSZXNvdXJjZXNbcl0ucHJvY2Vzc0ZlYXR1cmVJdGluZXJhcnkoZmVhdEl0aW5lcmFyeSk7XG4gICAgfVxuXG4gIH1cblxuXG4gIHJldHVybiB7XG4gICAgLyoqXG4gICAgICogWW91IGNhbiBleHBsaWNpdGx5IG5hbWUgdGhlIHR5cGUgb2YgcmVzb3VyY2UuIElmIG5vdCxcbiAgICAgKiB3ZSB3aWxsIGZpZ3VyZSBpdCBvdXQgZm9yIHlvdS4uLlxuICAgICAqXG4gICAgICogQHBhcmFtIHJlc291cmNlTmFtZVxuICAgICAqIEBwYXJhbSB0eXBlXG4gICAgICovXG4gICAgY3JlYXRlUmVzb3VyY2U6IGZ1bmN0aW9uIChyZXNvdXJjZU5hbWUsIHR5cGUpIHtcbiAgICAgIHZhciBjb25maWcgPSBMYXllckNvbmZpZy5maW5kKHJlc291cmNlTmFtZSk7XG4gICAgICBpZiAoY29uZmlnID09PSBudWxsKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1ZlY3RvclByb3ZpZGVyOiBJbnZhbGlkIFJlc291cmNlIENvbmZpZ3VyYXRpb24gTmFtZS4gQ2hlY2sgTGF5ZXJDb25maWcgRmlsZS4uLicpO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlIHx8IGNvbmZpZy50eXBlKSB7XG4gICAgICAgIC8vIGlmIHRoZSByZXNvdXJjZSBpcyBqdXN0IGEgc3RyaW5nLCB0aGVuIGl0IHNob3VsZCBiZSBhIHVybFxuICAgICAgICByZXR1cm4gbmV3IHR5cGVzWyh0eXBlIHx8IGNvbmZpZy50eXBlKS50b0xvd2VyQ2FzZSgpXShjb25maWcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGNvbmZpZy5zbGljZShjb25maWcubGVuZ3RoIC0gMykudG9Mb3dlckNhc2UoKSA9PT0gJ2ttbCcpIHtcbiAgICAgICAgICByZXR1cm4gbmV3IEtNTChjb25maWcpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNvbmZpZy5zbGljZShjb25maWcubGVuZ3RoIC0gMykudG9Mb3dlckNhc2UoKSA9PT0gJ2NzdicpIHtcbiAgICAgICAgICByZXR1cm4gbmV3IENTVihjb25maWcpO1xuICAgICAgICB9XG4gICAgICAgIC8vIE5IIFRPRE8gQ2hlY2sgYSBiaXQgbW9yZSBpbnRvIGlmIHRoaXMgcmVzb3VyY2UgaXMgdmFsaWQgR2VvSlNPTlxuICAgICAgICByZXR1cm4gbmV3IEdlb0pTT04oY29uZmlnKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogV2hlbiB0aGUgYm91bmRpbmcgYm94IG9mIHRoZSBtYXAgY2hhbmdlcywgVmVjdG9yUHJvdmlkZXIgbmVlZHNcbiAgICAgKiB0byBiZSBub3RpZmllZCBvZiB0aGUgY3VycmVudCBib3VuZGluZyBib3ggc28gaXQgY2FuIGZldGNoIHRoZVxuICAgICAqIGxhdGVzdCB2ZWN0b3IgZGF0YSBmb3IgdGhlIGJib3ggb2YgdGhlIG1hcCB2aWV3cG9ydC5cbiAgICAgKlxuICAgICAqIFRoZSBiYm94IG11c3QgYmUgV0dTODQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gYmJveFN0ciBcInNvdXRoLHdlc3Qsbm9ydGgsZWFzdFwiID09PSBcIm1pblgsbWluWSxtYXhYLG1heFlcIlxuICAgICAqL1xuICAgIHVwZGF0ZUJCb3g6IGZ1bmN0aW9uKGJib3hTdHIpIHtcbiAgICAgIHZlY3Rvci5iYm94ID0gYmJveFN0cjtcblxuICAgICAgY29uc29sZS5sb2coJ1ZlY3RvclByb3ZpZGVyIGJib3g6ICcgKyB2ZWN0b3IuYmJveCk7XG4gICAgICBmZXRjaEZlYXR1cmVJdGluZXJhcnkoKTtcblxuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIFByb3ZpZGVzIHRoZSBhYmlsaXR5IHRvIG92ZXJyaWRlIHRoZSBnYWRtIGxldmVsIGJlaW5nIHNob3duIGJ5IEJCb3hHZW9KU09OXG4gICAgICogZmVhdHVyZXMgb24gdGhlIG1hcC4gWW91IG1heSBzcGVjaWZ5IC0xIHRvIDUuIE5vIGFyZ3Mgb3IgYW55dGhpbmcgZWxzZVxuICAgICAqIHN3aXRjaGVzIGJhY2sgb24gc21hcnQgZ2FkbSAoYXV0b21hdGljYWxseSBjaG9vc2luZyB0aGUgbGV2ZWwgYmFzZWQgb24gYmJveCkuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gbGV2ZWxcbiAgICAgKi9cbiAgICBzZXRHYWRtTGV2ZWw6IGZ1bmN0aW9uKGxldmVsU3RyKSB7XG4gICAgICB2YXIgbGV2ZWwgPSBwYXJzZUludChsZXZlbFN0cik7XG4gICAgICB2ZWN0b3IuYmJveFVybCA9IHZlY3Rvci5iYm94VXJsLnJlcGxhY2UoLyZnYWRtX2xldmVsPS0/XFxkLywnJyk7XG4gICAgICBpZiAobGV2ZWwgPj0gLTEgJiYgbGV2ZWwgPD0gNSkge1xuICAgICAgICB2ZWN0b3IuYmJveFVybCArPSAnJmdhZG1fbGV2ZWw9JyArIGxldmVsO1xuICAgICAgfVxuICAgICAgY29uc29sZS5sb2coJ2Jib3hVcmw6ICcgKyB2ZWN0b3IuYmJveFVybCk7XG4gICAgICBmZXRjaEZlYXR1cmVJdGluZXJhcnkoKTtcbiAgICB9LFxuXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgZmVhdHVyZSBiYXNlZCBvbiBndWlkIGFuZCBsZXZlbC4gWW91IG1heSBtZXJnZSBpbiBhIHNldCBvZiBwcm9wZXJ0aWVzIGludG8gdGhlXG4gICAgICogY2FsbGVkIGJhY2sgb2JqZWN0IGlmIGRlc2lyZWQgKG9wdGlvbmFsKS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBndWlkXG4gICAgICovXG4gICAgZmV0Y2hGZWF0dXJlOiBmdW5jdGlvbihndWlkLCBsZXZlbCwgcHJvcHNUb01lcmdlLCBjYikge1xuICAgICAgdmFyIHVybCA9IExheWVyQ29uZmlnLmJib3guZmVhdHVybC5yZXBsYWNlKCc6bGV2ZWwnLCBsZXZlbCkucmVwbGFjZSgnOmlkcycsIGd1aWQpO1xuICAgICAgdmFyIHByb3h5UGF0aCA9IGNvbmZpZy5wcm94eVBhdGgodXJsKTtcblxuICAgICAgJGh0dHAuZ2V0KHVybCwge2NhY2hlOiB0cnVlfSkuc3VjY2VzcyhmdW5jdGlvbiAoZ2VvanNvbiwgc3RhdHVzKSB7XG4gICAgICAgIG1lcmdlKGdlb2pzb24pO1xuICAgICAgfSkuZXJyb3IoZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICRodHRwLmdldChwcm94eVBhdGgpLnN1Y2Nlc3MoZnVuY3Rpb24gKGdlb2pzb24sIHN0YXR1cykge1xuICAgICAgICAgIG1lcmdlKGdlb2pzb24pO1xuICAgICAgICB9KS5lcnJvcihmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignVW5hYmxlIHRvIGZldGNoRmVhdHVyZTogJyArIGd1aWQpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgICBmdW5jdGlvbiBtZXJnZShnZW9qc29uKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEZWFsIHdpdGggYmFkIHN0dWZmLlxuICAgICAgICAgKi9cbiAgICAgICAgaWYgKGdlb2pzb24uZXJyb3IpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdVbmFibGUgdG8gZmV0Y2ggZmVhdHVyZTogJyArIGdlb2pzb24uZXJyb3IpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghZ2VvanNvbi5mZWF0dXJlcyB8fCBnZW9qc29uLmZlYXR1cmVzLmxlbmd0aCA8IDEpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyB3ZSBvbmx5IGFyZSBhY3R1YWxseSBhc2tpbmcgZm9yIDEgZmVhdHVyZVxuICAgICAgICB2YXIgZmVhdCA9IGdlb2pzb24uZmVhdHVyZXNbMF07XG5cbiAgICAgICAgLy8gcHV0dGluZyBleGlzdGluZyBwcm9wZXJ0aWVzIGludG8gZ2VvanNvbiBmZWF0dXJlXG4gICAgICAgIGlmIChwcm9wc1RvTWVyZ2UpIHtcbiAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gcHJvcHNUb01lcmdlKSB7XG4gICAgICAgICAgICBmZWF0LnByb3BlcnRpZXNba2V5XSA9IHByb3BzVG9NZXJnZVtrZXldO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNiKGZlYXQpO1xuICAgICAgfVxuXG4gICAgfVxuICB9O1xuXG5cbn0pO1xuXG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgUnlhbiBXaGl0bGV5IDxyd2hpdGxleUBzcGF0aWFsZGV2LmNvbT5cbiAqICAgICAgIG9uIDYvMy8xNC5cbiAqL1xuXG52YXIgUmVzb3VyY2UgPSByZXF1aXJlKCcuL3Jlc291cmNlJyk7XG52YXIgJHJvb3RTY29wZSA9IHJlcXVpcmUoJy4vdmVjdG9yJykuJHJvb3RTY29wZTtcbnZhciAkID0gcmVxdWlyZSgnLi92ZWN0b3InKS4kO1xuXG5tb2R1bGUuZXhwb3J0cyA9IENTVjtcblxuLyoqXG4gKiBBIENTViBSZXNvdXJjZSBmZXRjaGVzIENTViBhbmQgcGFyc2VzIGl0XG4gKlxuICogQHBhcmFtIGNvbmZpZ1xuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIENTVihjb25maWcpIHtcbiAgUmVzb3VyY2UuY2FsbCh0aGlzLCBjb25maWcpO1xuICB0aGlzLl9nZW9qc29uID0gbnVsbDtcbn1cblxuQ1NWLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoUmVzb3VyY2UucHJvdG90eXBlKTtcbkNTVi5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBDU1Y7XG5cbkNTVi5wcm90b3R5cGUubGF0RmllbGRTdHJpbmdzID0gW1wibGF0XCIsIFwibGF0aXR1ZGVcIiwgXCJ5XCIsIFwieWNlbnRlclwiXTtcbkNTVi5wcm90b3R5cGUubG9uZ0ZpZWxkU3RyaW5ncyA9IFtcImxvblwiLCBcImxvbmdcIiwgXCJsb25naXR1ZGVcIiwgXCJ4XCIsIFwieGNlbnRlclwiLCBcImxuZ1wiXTtcblxuQ1NWLnByb3RvdHlwZS5nZXRMYXllciA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMuX2dlb2pzb25MYXllcikgcmV0dXJuIHRoaXMuX2dlb2pzb25MYXllcjtcbiAgdmFyIGxheWVyID0gUmVzb3VyY2UucHJvdG90eXBlLmdldExheWVyLmNhbGwodGhpcyk7XG4gIHRoaXMuZmV0Y2goZnVuY3Rpb24gKGdlb2pzb24pIHtcbiAgICBsYXllci5hZGREYXRhKGdlb2pzb24pO1xuICAgIGxheWVyLmVhY2hMYXllcihmdW5jdGlvbiAobCkge1xuICAgICAgbC5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICRyb290U2NvcGUuJGJyb2FkY2FzdCgnZGV0YWlscycsIGwpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xuICByZXR1cm4gbGF5ZXI7XG59O1xuXG5DU1YucHJvdG90eXBlLmZldGNoID0gZnVuY3Rpb24gKGNiKSB7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgUmVzb3VyY2UucHJvdG90eXBlLmZldGNoLmNhbGwodGhpcywgZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAvL2RhdGEgc2hvdWxkIGJlIHRoZSByYXcgY3N2LlxuXG4gICAgc2VsZi5fZ2VvanNvbiA9IHNlbGYucHJvY2Vzc0NzdkRhdGEoZGF0YSk7XG5cbiAgICBpZiAodHlwZW9mIHNlbGYuX2NvbmZpZy5wcm9wZXJ0aWVzID09PSAnb2JqZWN0Jykge1xuICAgICAgYW5ndWxhci5leHRlbmQoc2VsZi5fZ2VvanNvbi5wcm9wZXJ0aWVzLCBzZWxmLl9jb25maWcucHJvcGVydGllcyk7XG4gICAgICBzZWxmLl9nZW9qc29uLnByb3BlcnRpZXMuc3JjVHlwZSA9ICdjc3YnO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKSBjYihzZWxmLl9nZW9qc29uLCBzZWxmKTtcbiAgfSk7XG59O1xuXG5DU1YucHJvdG90eXBlLmhhbmRsZUNzdiA9IGZ1bmN0aW9uIChmaWxlLCBsYXllcikge1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIGlmIChmaWxlLmRhdGEpIHtcbiAgICB2YXIgZGVjb2RlZCA9IHRoaXMuYnl0ZXNUb1N0cmluZyhzZWxmLkJhc2U2NC5kZWNvZGUoZmlsZS5kYXRhKSk7XG4gICAgc2VsZi5wcm9jZXNzQ3N2RGF0YShkZWNvZGVkKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICByZWFkZXIub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgY29uc29sZS5sb2coXCJGaW5pc2hlZCByZWFkaW5nIENTViBkYXRhXCIpO1xuICAgICAgc2VsZi5wcm9jZXNzQ3N2RGF0YShyZWFkZXIucmVzdWx0LCBsYXllcik7XG4gICAgfTtcbiAgICByZWFkZXIucmVhZEFzVGV4dChmaWxlKTtcbiAgfVxufTtcblxuQ1NWLnByb3RvdHlwZS5nZXRTZXBhcmF0b3IgPSBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gIHZhciBzZXBhcmF0b3JzID0gW1wiLFwiLCBcIiAgICAgIFwiLCBcIjtcIiwgXCJ8XCJdO1xuICB2YXIgbWF4U2VwYXJhdG9yTGVuZ3RoID0gMDtcbiAgdmFyIG1heFNlcGFyYXRvclZhbHVlID0gXCJcIjtcbiAgJC5lYWNoKHNlcGFyYXRvcnMsIGZ1bmN0aW9uIChpZHgsIHNlcGFyYXRvcikge1xuICAgIHZhciBsZW5ndGggPSBzdHJpbmcuc3BsaXQoc2VwYXJhdG9yKS5sZW5ndGg7XG4gICAgaWYgKGxlbmd0aCA+IG1heFNlcGFyYXRvckxlbmd0aCkge1xuICAgICAgbWF4U2VwYXJhdG9yTGVuZ3RoID0gbGVuZ3RoO1xuICAgICAgbWF4U2VwYXJhdG9yVmFsdWUgPSBzZXBhcmF0b3I7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIG1heFNlcGFyYXRvclZhbHVlO1xufTtcblxuQ1NWLnByb3RvdHlwZS5ieXRlc1RvU3RyaW5nID0gZnVuY3Rpb24gKGIpIHtcbiAgdmFyIHMgPSBbXTtcbiAgJC5lYWNoKGIsIGZ1bmN0aW9uIChpZHgsIGMpIHtcbiAgICBzLnB1c2goU3RyaW5nLmZyb21DaGFyQ29kZShjKSk7XG4gIH0pO1xuICByZXR1cm4gcy5qb2luKFwiXCIpO1xufTtcblxuQ1NWLnByb3RvdHlwZS5wcm9jZXNzQ3N2RGF0YSA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gIHZhciBuZXdMaW5lSWR4ID0gZGF0YS5pbmRleE9mKFwiXFxuXCIpO1xuICB2YXIgZmlyc3RMaW5lID0gJC50cmltKGRhdGEuc3Vic3RyKDAsIG5ld0xpbmVJZHgpKTsgLy9yZW1vdmUgZXh0cmEgd2hpdGVzcGFjZSwgbm90IHN1cmUgaWYgSSBuZWVkIHRvIGRvIHRoaXMgc2luY2UgSSB0aHJldyBvdXQgc3BhY2UgZGVsaW1pdGVyc1xuICB2YXIgc2VwYXJhdG9yID0gdGhpcy5nZXRTZXBhcmF0b3IoZmlyc3RMaW5lKTtcbiAgdmFyIGNzdlN0b3JlID0gJC5jc3YudG9PYmplY3RzKGRhdGEpO1xuICB2YXIgZmllbGROYW1lcyA9IGZpcnN0TGluZS5zcGxpdChzZXBhcmF0b3IpO1xuXG4gIHZhciBsYXRGaWVsZCA9IG51bGw7XG4gIHZhciBsb25nRmllbGQgPSBudWxsO1xuXG4gIHZhciBzZWxmID0gdGhpcztcblxuICAvL0ZpbmQgTGF0L0xuZyBjb2x1bW5zXG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBmaWVsZE5hbWVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgdmFyIGZpZWxkTmFtZSA9IGZpZWxkTmFtZXNbaV07XG4gICAgdmFyIG1hdGNoSWQ7XG4gICAgbWF0Y2hJZCA9ICQuaW5BcnJheShmaWVsZE5hbWUudG9Mb3dlckNhc2UoKSwgc2VsZi5sYXRGaWVsZFN0cmluZ3MpO1xuICAgIGlmIChtYXRjaElkICE9PSAtMSkge1xuICAgICAgbGF0RmllbGQgPSBmaWVsZE5hbWU7XG4gICAgfVxuXG4gICAgbWF0Y2hJZCA9ICQuaW5BcnJheShmaWVsZE5hbWUudG9Mb3dlckNhc2UoKSwgc2VsZi5sb25nRmllbGRTdHJpbmdzKTtcbiAgICBpZiAobWF0Y2hJZCAhPT0gLTEpIHtcbiAgICAgIGxvbmdGaWVsZCA9IGZpZWxkTmFtZTtcbiAgICB9XG4gIH1cblxuICAvL0lmIE1pc3NpbmcgTGF0ZmllbGQgb3IgTG9uZ0ZpZWxkLCB0aGVuIGV4aXQuXG4gIGlmICghbGF0RmllbGQpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKCFsb25nRmllbGQpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgb3V0cHV0R2VvSlNPTiA9IHtcbiAgICBcInR5cGVcIjogXCJGZWF0dXJlQ29sbGVjdGlvblwiLFxuICAgIFwiZmVhdHVyZXNcIjogW11cbiAgfTtcblxuICBmb3IgKHZhciBpID0gMCwgbGVuID0gY3N2U3RvcmUubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICB2YXIgcm93ID0gY3N2U3RvcmVbaV07XG4gICAgdmFyIGxhdGl0dWRlID0gcGFyc2VGbG9hdChyb3dbbGF0RmllbGRdKTtcbiAgICB2YXIgbG9uZ2l0dWRlID0gcGFyc2VGbG9hdChyb3dbbG9uZ0ZpZWxkXSk7XG5cbiAgICBpZiAoaXNOYU4obGF0aXR1ZGUpIHx8IGlzTmFOKGxvbmdpdHVkZSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvL2NyZWF0ZSBHZW9KU09OIGZyYWdtZW50XG4gICAgb3V0cHV0R2VvSlNPTi5mZWF0dXJlcy5wdXNoKHtcbiAgICAgIFwidHlwZVwiOiBcIkZlYXR1cmVcIixcbiAgICAgIFwiZ2VvbWV0cnlcIjoge1widHlwZVwiOiBcIlBvaW50XCIsIFwiY29vcmRpbmF0ZXNcIjogW2xvbmdpdHVkZSwgbGF0aXR1ZGVdfSxcbiAgICAgIFwicHJvcGVydGllc1wiOiByb3dcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBvdXRwdXRHZW9KU09OO1xufTtcblxuQ1NWLnByb3RvdHlwZS5lYWNoTGF5ZXIgPSBmdW5jdGlvbiAoY2IpIHtcbiAgdGhpcy5fZWFjaExheWVyQ2FsbGJhY2sgPSBjYjtcbiAgdGhpcy5mZXRjaChmdW5jdGlvbiAoZ2VvanNvbiwgc2VsZikge1xuICAgIHZhciBsYXllcnMgPSBzZWxmLl9nZW9qc29uTGF5ZXIuX2xheWVycztcbiAgICBmb3IgKHZhciBrZXkgaW4gbGF5ZXJzKSB7XG4gICAgICB2YXIgbGF5ZXIgPSBsYXllcnNba2V5XTtcbiAgICAgIGNiKGxheWVyKTtcbiAgICB9XG4gIH0pO1xufTtcblxuLyoqXG4gKlxuICogIEJhc2U2NCBlbmNvZGUgLyBkZWNvZGVcbiAqICBodHRwOi8vd3d3LndlYnRvb2xraXQuaW5mby9cbiAqXG4gKiovXG5DU1YucHJvdG90eXBlLkJhc2U2NCA9IHtcblxuICAvLyBwcml2YXRlIHByb3BlcnR5XG4gIF9rZXlTdHI6IFwiQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLz1cIixcblxuICAvLyBwdWJsaWMgbWV0aG9kIGZvciBlbmNvZGluZ1xuICBlbmNvZGU6IGZ1bmN0aW9uIChpbnB1dCkge1xuICAgIHZhciBvdXRwdXQgPSBcIlwiO1xuICAgIHZhciBjaHIxLCBjaHIyLCBjaHIzLCBlbmMxLCBlbmMyLCBlbmMzLCBlbmM0O1xuICAgIHZhciBpID0gMDtcblxuICAgIGlucHV0ID0gQmFzZTY0Ll91dGY4X2VuY29kZShpbnB1dCk7XG5cbiAgICB3aGlsZSAoaSA8IGlucHV0Lmxlbmd0aCkge1xuXG4gICAgICBjaHIxID0gaW5wdXQuY2hhckNvZGVBdChpKyspO1xuICAgICAgY2hyMiA9IGlucHV0LmNoYXJDb2RlQXQoaSsrKTtcbiAgICAgIGNocjMgPSBpbnB1dC5jaGFyQ29kZUF0KGkrKyk7XG5cbiAgICAgIGVuYzEgPSBjaHIxID4+IDI7XG4gICAgICBlbmMyID0gKChjaHIxICYgMykgPDwgNCkgfCAoY2hyMiA+PiA0KTtcbiAgICAgIGVuYzMgPSAoKGNocjIgJiAxNSkgPDwgMikgfCAoY2hyMyA+PiA2KTtcbiAgICAgIGVuYzQgPSBjaHIzICYgNjM7XG5cbiAgICAgIGlmIChpc05hTihjaHIyKSkge1xuICAgICAgICBlbmMzID0gZW5jNCA9IDY0O1xuICAgICAgfSBlbHNlIGlmIChpc05hTihjaHIzKSkge1xuICAgICAgICBlbmM0ID0gNjQ7XG4gICAgICB9XG5cbiAgICAgIG91dHB1dCA9IG91dHB1dCArXG4gICAgICAgIHRoaXMuX2tleVN0ci5jaGFyQXQoZW5jMSkgKyB0aGlzLl9rZXlTdHIuY2hhckF0KGVuYzIpICtcbiAgICAgICAgdGhpcy5fa2V5U3RyLmNoYXJBdChlbmMzKSArIHRoaXMuX2tleVN0ci5jaGFyQXQoZW5jNCk7XG5cbiAgICB9XG5cbiAgICByZXR1cm4gb3V0cHV0O1xuICB9LFxuXG4gIC8vIHB1YmxpYyBtZXRob2QgZm9yIGRlY29kaW5nXG4gIGRlY29kZTogZnVuY3Rpb24gKGlucHV0KSB7XG4gICAgdmFyIG91dHB1dCA9IFwiXCI7XG4gICAgdmFyIGNocjEsIGNocjIsIGNocjM7XG4gICAgdmFyIGVuYzEsIGVuYzIsIGVuYzMsIGVuYzQ7XG4gICAgdmFyIGkgPSAwO1xuXG4gICAgaW5wdXQgPSBpbnB1dC5yZXBsYWNlKC9bXkEtWmEtejAtOVxcK1xcL1xcPV0vZywgXCJcIik7XG5cbiAgICB3aGlsZSAoaSA8IGlucHV0Lmxlbmd0aCkge1xuXG4gICAgICBlbmMxID0gdGhpcy5fa2V5U3RyLmluZGV4T2YoaW5wdXQuY2hhckF0KGkrKykpO1xuICAgICAgZW5jMiA9IHRoaXMuX2tleVN0ci5pbmRleE9mKGlucHV0LmNoYXJBdChpKyspKTtcbiAgICAgIGVuYzMgPSB0aGlzLl9rZXlTdHIuaW5kZXhPZihpbnB1dC5jaGFyQXQoaSsrKSk7XG4gICAgICBlbmM0ID0gdGhpcy5fa2V5U3RyLmluZGV4T2YoaW5wdXQuY2hhckF0KGkrKykpO1xuXG4gICAgICBjaHIxID0gKGVuYzEgPDwgMikgfCAoZW5jMiA+PiA0KTtcbiAgICAgIGNocjIgPSAoKGVuYzIgJiAxNSkgPDwgNCkgfCAoZW5jMyA+PiAyKTtcbiAgICAgIGNocjMgPSAoKGVuYzMgJiAzKSA8PCA2KSB8IGVuYzQ7XG5cbiAgICAgIG91dHB1dCA9IG91dHB1dCArIFN0cmluZy5mcm9tQ2hhckNvZGUoY2hyMSk7XG5cbiAgICAgIGlmIChlbmMzICE9IDY0KSB7XG4gICAgICAgIG91dHB1dCA9IG91dHB1dCArIFN0cmluZy5mcm9tQ2hhckNvZGUoY2hyMik7XG4gICAgICB9XG4gICAgICBpZiAoZW5jNCAhPSA2NCkge1xuICAgICAgICBvdXRwdXQgPSBvdXRwdXQgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKGNocjMpO1xuICAgICAgfVxuXG4gICAgfVxuXG4gICAgb3V0cHV0ID0gdGhpcy5CYXNlNjQuX3V0ZjhfZGVjb2RlKG91dHB1dCk7XG5cbiAgICByZXR1cm4gb3V0cHV0O1xuXG4gIH0sXG5cbiAgLy8gcHJpdmF0ZSBtZXRob2QgZm9yIFVURi04IGVuY29kaW5nXG4gIF91dGY4X2VuY29kZTogZnVuY3Rpb24gKHN0cmluZykge1xuICAgIHN0cmluZyA9IHN0cmluZy5yZXBsYWNlKC9cXHJcXG4vZywgXCJcXG5cIik7XG4gICAgdmFyIHV0ZnRleHQgPSBcIlwiO1xuXG4gICAgZm9yICh2YXIgbiA9IDA7IG4gPCBzdHJpbmcubGVuZ3RoOyBuKyspIHtcblxuICAgICAgdmFyIGMgPSBzdHJpbmcuY2hhckNvZGVBdChuKTtcblxuICAgICAgaWYgKGMgPCAxMjgpIHtcbiAgICAgICAgdXRmdGV4dCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGMpO1xuICAgICAgfSBlbHNlIGlmICgoYyA+IDEyNykgJiYgKGMgPCAyMDQ4KSkge1xuICAgICAgICB1dGZ0ZXh0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoKGMgPj4gNikgfCAxOTIpO1xuICAgICAgICB1dGZ0ZXh0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoKGMgJiA2MykgfCAxMjgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdXRmdGV4dCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKChjID4+IDEyKSB8IDIyNCk7XG4gICAgICAgIHV0ZnRleHQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSgoKGMgPj4gNikgJiA2MykgfCAxMjgpO1xuICAgICAgICB1dGZ0ZXh0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoKGMgJiA2MykgfCAxMjgpO1xuICAgICAgfVxuXG4gICAgfVxuXG4gICAgcmV0dXJuIHV0ZnRleHQ7XG4gIH0sXG5cbiAgLy8gcHJpdmF0ZSBtZXRob2QgZm9yIFVURi04IGRlY29kaW5nXG4gIF91dGY4X2RlY29kZTogZnVuY3Rpb24gKHV0ZnRleHQpIHtcbiAgICB2YXIgc3RyaW5nID0gXCJcIjtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIGMgPSBjMSA9IGMyID0gMDtcblxuICAgIHdoaWxlIChpIDwgdXRmdGV4dC5sZW5ndGgpIHtcblxuICAgICAgYyA9IHV0ZnRleHQuY2hhckNvZGVBdChpKTtcblxuICAgICAgaWYgKGMgPCAxMjgpIHtcbiAgICAgICAgc3RyaW5nICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYyk7XG4gICAgICAgIGkrKztcbiAgICAgIH0gZWxzZSBpZiAoKGMgPiAxOTEpICYmIChjIDwgMjI0KSkge1xuICAgICAgICBjMiA9IHV0ZnRleHQuY2hhckNvZGVBdChpICsgMSk7XG4gICAgICAgIHN0cmluZyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKCgoYyAmIDMxKSA8PCA2KSB8IChjMiAmIDYzKSk7XG4gICAgICAgIGkgKz0gMjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGMyID0gdXRmdGV4dC5jaGFyQ29kZUF0KGkgKyAxKTtcbiAgICAgICAgYzMgPSB1dGZ0ZXh0LmNoYXJDb2RlQXQoaSArIDIpO1xuICAgICAgICBzdHJpbmcgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSgoKGMgJiAxNSkgPDwgMTIpIHwgKChjMiAmIDYzKSA8PCA2KSB8IChjMyAmIDYzKSk7XG4gICAgICAgIGkgKz0gMztcbiAgICAgIH1cblxuICAgIH1cblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxufTtcbiIsIi8qKlxuICogQ3JlYXRlZCBieSBOaWNob2xhcyBIYWxsYWhhbiA8bmhhbGxhaGFuQHNwYXRpYWxkZXYuY29tPlxuICogICAgICAgb24gNi8zLzE0LlxuICovXG5cbnZhciByZXNvdXJjZXMgPSByZXF1aXJlKCcuL3ZlY3RvcicpLnJlc291cmNlcztcbnZhciAkaHR0cCA9IHJlcXVpcmUoJy4vdmVjdG9yJykuJGh0dHA7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVzb3VyY2U7XG5cbi8qKlxuICogQWxsIFZlY3RvclByb3ZpZGVyIHJlc291cmNlcyBhcmUgY2hpbGRyZW4gb2YgdGhpcyBjbGFzcy5cbiAqIEBwYXJhbSBjb25maWdcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBSZXNvdXJjZShjb25maWcpIHtcbiAgcmVzb3VyY2VzLnB1c2godGhpcyk7XG4gIHRoaXMuX2NvbmZpZyA9IGNvbmZpZztcbiAgdGhpcy5fdXJsID0gbnVsbDtcbiAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnKSB7XG4gICAgdGhpcy5fdXJsID0gY29uZmlnLnVybDtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLl91cmwgPSBjb25maWc7XG4gIH1cblxuICB0aGlzLl9lYWNoTGF5ZXJDYWxsYmFjayA9IG51bGw7XG4gIHRoaXMuX2dlb2pzb25MYXllciA9IG51bGw7XG59XG5cblxuLyoqXG4gKiBGZXRjaGVzIGRhdGEgZnJvbSB0aGUgZ2l2ZW4gdXJsIG9mIGEgcmVzb3VyY2UuXG4gKiBTdWJjbGFzc2VzIHRoZW4gaGFuZGxlIHRoZSBjYWxsYmFjayBhY2NvcmRpbmdseS5cbiAqXG4gKiBOZWVkcyB0byBhbHNvIHRyeSB0byBnZXQgYSByZXNvdXJjZSB2aWEgdGhlIENodWJic1xuICogcHJveHkuXG4gKlxuICogQHBhcmFtIGNiXG4gKi9cblJlc291cmNlLnByb3RvdHlwZS5mZXRjaCA9IGZ1bmN0aW9uKGNiKSB7XG4gIHZhciBwcm94eVBhdGggPSBjb25maWcucHJveHlQYXRoKHRoaXMuX3VybCk7XG4gICRodHRwLmdldCh0aGlzLl91cmwsIHtjYWNoZTogdHJ1ZX0pLnN1Y2Nlc3MoZnVuY3Rpb24gKGRhdGEsIHN0YXR1cykge1xuICAgIGNiKGRhdGEpO1xuICB9KS5lcnJvcihmdW5jdGlvbigpIHtcbiAgICAvLyB0cnlpbmcgcHJveHlcbiAgICAkaHR0cC5nZXQocHJveHlQYXRoLCB7Y2FjaGU6IHRydWV9KS5zdWNjZXNzKGZ1bmN0aW9uIChkYXRhLCBzdGF0dXMpIHtcbiAgICAgIGNiKGRhdGEpO1xuICAgIH0pLmVycm9yKGZ1bmN0aW9uKCkge1xuICAgICAgY29uc29sZS5lcnJvcihcIlVuYWJsZSB0byBmZXRjaCBmcm9tOiBcIiArIHByb3h5UGF0aCk7XG4gICAgfSk7XG4gIH0pO1xuXG59O1xuXG5cbi8qKlxuICogUmV0dXJucyB0aGUgTGVhZmxldCBHZW9KU09OIExheWVyIGFzc29jaWF0ZWQgd2l0aCB0aGVcbiAqIFJlc291cmNlIG9yIGNyZWF0ZXMgYSBuZXcgb25lLlxuICpcbiAqIEByZXR1cm5zIHtudWxsfCp9XG4gKi9cblJlc291cmNlLnByb3RvdHlwZS5nZXRMYXllciA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHR5cGVvZiB0aGlzLl9nZW9qc29uTGF5ZXIgIT09ICd1bmRlZmluZWQnICYmIHRoaXMuX2dlb2pzb25MYXllciAhPT0gbnVsbCkge1xuICAgIHJldHVybiB0aGlzLl9nZW9qc29uTGF5ZXI7XG4gIH1cblxuICB0aGlzLl9nZW9qc29uTGF5ZXIgPSBMLmdlb0pzb24odGhpcy5fZ2VvanNvbiB8fCBudWxsLCB7XG4gICAgc3R5bGU6IGZ1bmN0aW9uKGZlYXR1cmUpIHtcbiAgICAgIGlmICh0eXBlb2YgZmVhdHVyZS5wcm9wZXJ0aWVzLnN0eWxlRm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIGZlYXR1cmUucHJvcGVydGllcy5zdHlsZUZuKGZlYXR1cmUucHJvcGVydGllcyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gTC5tYXBib3guc2ltcGxlc3R5bGUuc3R5bGUoZmVhdHVyZSk7XG4gICAgfSxcbiAgICBwb2ludFRvTGF5ZXI6IGZ1bmN0aW9uKGZlYXR1cmUsIGxhdGxvbikge1xuICAgICAgaWYgKCFmZWF0dXJlLnByb3BlcnRpZXMpIGZlYXR1cmUucHJvcGVydGllcyA9IHt9O1xuICAgICAgaWYgKGZlYXR1cmUucHJvcGVydGllcy5zY2FsZSkge1xuICAgICAgICByZXR1cm4gTC5jaXJjbGVNYXJrZXIobGF0bG9uLCB7XG4gICAgICAgICAgZmlsbENvbG9yOiBmZWF0dXJlLnByb3BlcnRpZXMuY29sb3IgfHwgJyNGRjAwMDAnLFxuICAgICAgICAgIHJhZGl1czogMjAgKiBmZWF0dXJlLnByb3BlcnRpZXMuc2NhbGVcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gTC5tYXBib3gubWFya2VyLnN0eWxlKGZlYXR1cmUsIGxhdGxvbik7XG4gICAgfVxuICB9KS5lYWNoTGF5ZXIodGhpcy5fZWFjaExheWVyQ2FsbGJhY2spO1xuXG5cbiAgcmV0dXJuIHRoaXMuX2dlb2pzb25MYXllcjtcbn07XG5cblJlc291cmNlLnByb3RvdHlwZS5lYWNoTGF5ZXIgPSBmdW5jdGlvbiAoY2IpIHtcbiAgdGhpcy5fZWFjaExheWVyQ2FsbGJhY2sgPSBjYjtcbiAgdGhpcy5fZ2VvanNvbkxheWVyLmVhY2hMYXllcihjYik7XG59O1xuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IE5pY2hvbGFzIEhhbGxhaGFuIDxuaGFsbGFoYW5Ac3BhdGlhbGRldi5jb20+XG4gKiAgICAgICBvbiA2LzMvMTQuXG4gKi9cblxudmFyIHZlY3RvciA9IHt9O1xubW9kdWxlLmV4cG9ydHMgPSB2ZWN0b3I7XG5cbnZlY3Rvci5zZXRJbmplY3RvcnMgPSBmdW5jdGlvbiAoJHJvb3RTY29wZSwgJGxvY2F0aW9uLCAkaHR0cCwgTGF5ZXJDb25maWcpIHtcbiAgdmVjdG9yLiRyb290U2NvcGUgPSAkcm9vdFNjb3BlO1xuICB2ZWN0b3IuJGxvY2F0aW9uID0gJGxvY2F0aW9uO1xuICB2ZWN0b3IuJGh0dHAgPSAkaHR0cDtcbiAgdmVjdG9yLkxheWVyQ29uZmlnID0gTGF5ZXJDb25maWc7XG59O1xuXG52ZWN0b3IuYW5ndWxhciA9IGFuZ3VsYXI7XG52ZWN0b3IuTCA9IEw7XG52ZWN0b3IuJCA9ICQ7XG52ZWN0b3IudG9HZW9KU09OID0gdG9HZW9KU09OO1xuXG5cbi8qKlxuICogVGhpcyBpcyB1cGRhdGVkIGJ5IHVwZGF0ZUJCb3guIEl0IGlzIHRoZW4gdXNlZCB0byBxdWVyeSBhbGxcbiAqIFZlY3RvclByb3ZpZGVycyB0aGF0IHVzZSBhIGJvdW5kaW5nIGJveCB0byBnZXQgYWRkaXRpb25hbFxuICogZmVhdHVyZXMuXG4gKlxuICogQHR5cGUge3N0cmluZ31cbiAqL1xudmFyIGJib3ggPSB2ZWN0b3IuYmJveCA9IG51bGw7XG5cbi8qKlxuICogRXZlcnkgcmVzb3VyY2UgdGhhdCBoYXMgYmVlbiBpbnN0YW50aWF0ZWQuXG4gKiBAdHlwZSB7QXJyYXl9XG4gKi9cbnZhciByZXNvdXJjZXMgPSB2ZWN0b3IucmVzb3VyY2VzID0gW107XG5kZWJ1Zy5yZXNvdXJjZXMgPSByZXNvdXJjZXM7XG5cbi8qKlxuICogRXZlcnkgcmVzb3VyY2Ugd2l0aCBhIGJvdW5kaW5nIGJveCBmZXRjaGluZyBtZWNoYW5pc20uXG4gKiBAdHlwZSB7QXJyYXl9XG4gKi9cbnZhciBiYm94UmVzb3VyY2VzID0gdmVjdG9yLmJib3hSZXNvdXJjZXMgPSBbXTtcbmRlYnVnLmJib3hSZXNvdXJjZXMgPSBiYm94UmVzb3VyY2VzO1xuXG52YXIgYmJveFVybCA9IHZlY3Rvci5iYm94VXJsID0gJyc7XG5cbnZhciBjZW50ZXJMZXZlbCA9IHZlY3Rvci5jZW50ZXJMZXZlbCA9IDA7XG5cblxuXG4iXX0=
