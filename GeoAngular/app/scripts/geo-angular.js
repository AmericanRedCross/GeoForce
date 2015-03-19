(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/spatialdev/Documents/GitHub/GeoForce/Config/layers/all.js":[function(require,module,exports){
/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *       on 8/6/14.
 */

module.exports = {


};

},{}],"/Users/spatialdev/Documents/GitHub/GeoForce/Config/layers/basemaps.js":[function(require,module,exports){
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

},{}],"/Users/spatialdev/Documents/GitHub/GeoForce/Config/layers/disaster.js":[function(require,module,exports){
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
  }

};
},{}],"/Users/spatialdev/Documents/GitHub/GeoForce/Config/layers/other.js":[function(require,module,exports){
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
  },

  laccommunities: {
    name: 'LAC Communities',
    type: 'geojson',
    theme: 'other',
    url: 'https://gist.githubusercontent.com/anonymous/d58e51d612add6483257/raw/LAC_Communities_styled.geojson'
  }

};

},{}],"/Users/spatialdev/Documents/GitHub/GeoForce/Config/layers/project.js":[function(require,module,exports){
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
},{}],"/Users/spatialdev/Documents/GitHub/GeoForce/Config/layers/projecthealth.js":[function(require,module,exports){
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
},{}],"/Users/spatialdev/Documents/GitHub/GeoForce/Config/layers/projectrisk.js":[function(require,module,exports){
/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *       on 8/6/14.
 */

module.exports = {

};
},{}],"/Users/spatialdev/Documents/GitHub/GeoForce/Config/layers/vectortiles.js":[function(require,module,exports){
/**
 * Created by Ryan Whitley <rwhitley@spatialdev.com>
 *       on 12/15/14.
 */




var gadm0 = {
  type: 'pbf',
  name: 'GADM0',
  //url: "http://localhost:3000/services/postgis/gadm0/geom_simplify_med/vector-tiles/{z}/{x}/{y}.pbf?fields=guid::character varying,name_0,year&labelpoints=true",
  //url: "http://localhost:3000/services/postgis/gadm0/geom_simplify_med/vector-tiles/{z}/{x}/{y}.pbf?fields=guid::character varying,name_0,year",

  url: "../services/vector-tiles/gadm0_labels_2014/{z}/{x}/{y}.pbf",
  detailsUrl: 'services/custom/custom_operation?name=get:themebyguid&format=json&guids=:guids&gadm_level=:level&filters=:filters',
  debug: false,
  clickableLayers: ["GADM_2014"],

  getIDForLayerFeature: function (feature) {
    return feature.properties.guid;
    //return feature.properties.name_0;
  },
  mutexToggle: true,

  //The filter function does 2 things: 1) Merge in external properties that can be used for choroplething.  2) Filter out features that don't have ECOS properties
  filter: function(vtf, $rootScope){
    var data = $rootScope.vtData;

    if(data && data[vtf.properties.guid]){
      var theme = $rootScope.$stateParams.theme;
      vtf.properties.theme = theme;
      vtf.properties.ecos_properties = {};
      vtf.properties.ecos_properties[theme] = data[vtf.properties.guid];
      return true;
    }

    return false; //don't draw feature
  },

  /**
   * When we want to link events between layers, like clicking on a label and a
   * corresponding polygon freature, this will return the corresponding mapping
   * between layers. This provides knowledge of which other feature a given feature
   * is linked to.
   *
   * @param layerName  the layer we want to know the linked layer from
   * @returns {string} returns corresponding linked layer
   */
  layerLink: function (layerName) {
    if (layerName.indexOf('_label') > -1) {
      return layerName.replace('_label', '');
    }
    return layerName + '_label';
  },

  style: getThemeStyle,

  onClick: function(evt, $http, $rootScope, PBFObject) {

    if(evt && evt.feature && evt.feature.id){
      //Do the onclick thing
      PBFObject.fetchFeatureDetails(evt.feature.id, 0);
    }
  },
  onSelect: function(vtf, PBFObject){
    //When a selection has changed (likey when a label was clicked and the corresponding feature selected)
    if(vtf && vtf.id){
      //Do the onclick thing
      PBFObject.fetchFeatureDetails(vtf.id, 0);
    }
  }
}

var gadm1 = {
  type: 'pbf',
  name: 'GADM1',
  //url: "http://localhost:3000/services/postgis/gadm0/geom_simplify_med/vector-tiles/{z}/{x}/{y}.pbf?fields=guid::character varying,name_0,year&labelpoints=true",
  //url: "http://localhost:3000/services/postgis/gadm0/geom_simplify_med/vector-tiles/{z}/{x}/{y}.pbf?fields=guid::character varying,name_0,year",

  url: "../services/vector-tiles/gadm1_labels_2014/{z}/{x}/{y}.pbf",
  detailsUrl: 'services/custom/custom_operation?name=get:themebyguid&format=json&guids=:guids&gadm_level=1&filters=:filters',
  debug: false,
  clickableLayers: ["Gadm1_2014"],

  getIDForLayerFeature: function (feature) {
    return feature.properties.guid;
  },
  mutexToggle: true,

  /**
   * The filter function gets called when iterating though each vector tile feature (vtf). You have access
   * to every property associated with a given feature (the feature, and the layer). You can also filter
   * based of the context (each tile that the feature is drawn onto).
   *
   * Returning false skips over the feature and it is not drawn.
   *
   * @param feature
   * @returns {boolean}
   */
  filter: function(vtf, $rootScope){
    var data = $rootScope.vtData;

    if(data && data[vtf.properties.guid]){
      var theme = $rootScope.$stateParams.theme;
      vtf.properties.theme = theme;
      vtf.properties.ecos_properties = {};
      vtf.properties.ecos_properties[theme] = data[vtf.properties.guid];
      return true;
    }

    return false;
  },

  /**
   * When we want to link events between layers, like clicking on a label and a
   * corresponding polygon freature, this will return the corresponding mapping
   * between layers. This provides knowledge of which other feature a given feature
   * is linked to.
   *
   * @param layerName  the layer we want to know the linked layer from
   * @returns {string} returns corresponding linked layer
   */
  layerLink: function (layerName) {
    if (layerName.indexOf('_label') > -1) {
      return layerName.replace('_label', '');
    }
    return layerName + '_label';
  },

  style: getThemeStyle,

  onClick: function(evt, $http, $rootScope, PBFObject) {

    if(evt && evt.feature && evt.feature.id){
      //Do the onclick thing
      PBFObject.fetchFeatureDetails(evt.feature.id, 0);
    }
  },
  onSelect: function(vtf, PBFObject){
    //When a selection has changed (likey when a label was clicked and the corresponding feature selected)
    if(vtf && vtf.id){
      //Do the onclick thing
      PBFObject.fetchFeatureDetails(vtf.id, 0);
    }
  }
}


//var hatchDesign;

function getThemeStyle(vtf){

  var opacity = "0.5";

  var style = {};
  //Default style - make hollow
  style.color = 'rgba(0,0,0,' + opacity + ')';
  style.outline = {
    color: 'rgb(20,20,20)',
    size: 2
  };

  var properties = vtf.properties;

  //Skip if we're a regular polygon, and not a label point, and if there is no ECOS properties.
  if(vtf.layer.name.indexOf('label') == -1 && !properties.theme){
    return style;
  }

  var ecosProperties;

  if (properties.theme == "disaster") {
    ecosProperties = properties["ecos_properties"]["disaster"];

    if (ecosProperties) {
      if (ecosProperties.iroc_status__c) {
        switch (ecosProperties.iroc_status__c.toLowerCase()) {
          case "active":
            style.color = 'rgba(204,0,51,' + opacity + ')';
            style.outline = {
              color: 'rgb(20,20,20)',
              size: 2
            }
            break;
          case "monitoring":
            style.color = 'rgba(204,153,0,' + opacity + ')';
            style.outline = {
              color: 'rgb(20,20,20)',
              size: 2
            }
            break;
          case "inactive":
            style.color = 'rgba(255,255,255,' + opacity + ')';
            style.outline = {
              color: 'rgb(20,20,20)',
              size: 2
            }
            break;
        }
      }
    }

  }
  else if (properties.theme == "projectRisk") {
    ecosProperties = properties["ecos_properties"]["projectRisk"];
    if (ecosProperties && ecosProperties.overall_assessment__c) {
      switch (ecosProperties.overall_assessment__c.toLowerCase()) {
        case "critical":
          style.color = 'rgba(255,0,0,' + opacity + ')';
          style.outline = {
            color: 'rgb(20,20,20)',
            size: 2
          }
          break;
        case "high":
          style.color = 'rgba(255,127,0,' + opacity + ')';
          style.outline = {
            color: 'rgb(20,20,20)',
            size: 2
          }
          break;
        case "medium":
          style.color = 'rgba(255,255,0,' + opacity + ')';
          style.outline = {
            color: 'rgb(20,20,20)',
            size: 2
          }
          break;
        case "low":
          style.color = 'rgba(0,255,0,' + opacity + ')';
          style.outline = {
            color: 'rgb(20,20,20)',
            size: 2
          }
          break;
      }
    }
  }
  else if (properties.theme == "projectHealth") {
    ecosProperties = properties["ecos_properties"]["projectHealth"];
    if (ecosProperties && ecosProperties.overall_status__c) {
      switch (ecosProperties.overall_status__c.toLowerCase()) {
        case "red":
          style.color = 'rgba(255,0,0,' + opacity + ')';
          style.outline = {
            color: 'rgb(20,20,20)',
            size: 2
          }
          break;
        case "yellow":
          style.color = 'rgba(255,255,0,' + opacity + ')';
          style.outline = {
            color: 'rgb(20,20,20)',
            size: 2
          }
          break;
        case "green":
          style.color = 'rgba(0,255,0,' + opacity + ')';
          style.outline = {
            color: 'rgb(20,20,20)',
            size: 2
          }
          break;
        case "white":
          style.color = 'rgba(255,255,255,' + opacity + ')';
          style.outline = {
            color: 'rgb(20,20,20)',
            size: 2
          }
          break;
      }
    }
  }
  else if (properties.theme == "project") {
    ecosProperties = properties["ecos_properties"]["project"];

    if (ecosProperties && ecosProperties) {

      var count =  parseInt(ecosProperties.theme_count);

      if(count == 0) {
        //make hollow
        style.color = 'rgba(0,0,0,' + opacity + ')';
        style.outline = {
          color: 'rgb(20,20,20)',
          size: 2
        }
      }
      else if(count > 0 && count <= 2) {
        //make hollow
        style.color = 'rgba(229,255,235,' + opacity + ')';
        style.outline = {
          color: 'rgb(20,20,20)',
          size: 2
        }
      }
      else if(count > 2 && count <= 5) {
        //make hollow
        style.color = 'rgba(169,255,189,' + opacity + ')';
        style.outline = {
          color: 'rgb(20,20,20)',
          size: 2
        }
      }
      else if(count > 5 && count <= 8) {
        //make hollow
        style.color = 'rgba(169,255,125,' + opacity + ')';
        style.outline = {
          color: 'rgb(20,20,20)',
          size: 2
        }
      }
      else if(count > 8 && count <= 10) {
        //make hollow
        style.color = 'rgba(41,255,90,' + opacity + ')';
        style.outline = {
          color: 'rgb(20,20,20)',
          size: 2
        }
      }
      else if(count > 10) {
        //make hollow
        style.color = 'rgba(0,255,59,' + opacity + ')';
        style.outline = {
          color: 'rgb(20,20,20)',
          size: 2
        }
      }

    }
    else{
      //make hollow
      style.color = 'rgba(0,0,0,' + opacity + ')';
      style.outline = {
        color: 'rgb(20,20,20)',
        size: 2
      }
    }
  }


  //if(!hatchDesign){
  //  hatchDesign = getImageRef();
  //}

  //style.selected = {
  //  color: function(ctx2d){
  //    //Hatch symbol
  //    var repeat = ctx2d.createPattern(hatchDesign, "repeat");
  //    return repeat;
  //
  //  },
  //  outline : {
  //    color: 'rgb(255,255,0)',
  //    size: 2
  //  }
  //}

  style.selected = {
    color: 'rgba(255,255,0,0.8)',
    outline : {
      color: 'rgb(255,255,0)',
      size: 2
    }
  }

  //Label
  if (vtf.layer.name === 'GADM_2014_label') {
    if(ecosProperties && ecosProperties.theme_count){
      style.staticLabel = function () {
        var labelStyle = {
          html: (ecosProperties && ecosProperties.theme_count ? buildDynamicLabel(ecosProperties) : ""),
          iconSize: [42, 42],
          cssClass: 'noclass'
        };
        return labelStyle;
      };
    }
    else{
      //When switching themes, reset old label styles to null so labels don't get drawn for old theme.
      style.staticLabel = null;
    }

  }


  return style;
}

function buildDynamicLabel(properties){
  if (properties.theme == "disaster") {
    var color = "";
    var labelColor = "";
    if (properties && properties.iroc_status__c) {
      switch (properties.iroc_status__c.toLowerCase()) {
        case "active":
          color = "rgba(204,0,51,0.4)";
          labelColor = "#fff";
          break;
        case "monitoring":
          color = "rgba(225,187,37,0.4)";
          labelColor = "#fff";
          break;
        case "inactive":
          color = "rgba(189,189,189,0.4)";
          labelColor = "#000";
          break;
      }
    }
    return '<div class="label-icon-number-40percent"' + (color ? ' style="background-color: ' + color + ';color: ' + labelColor + '"' : '') + '><span>' + properties.theme_count + '</span></div>';
  }
  else {
    return '<div class="label-icon-number-40percent"><span>' + properties.theme_count + '</span></div>';
  }
}



//**********************************************************************
// function waitfor - Wait until a condition is met
//
// Needed parameters:
//    test: a value
//    expectedValue: the value of the test function we are waiting for
//    msec: delay between the calls to test
//    callback: function to execute when the condition is met
// Parameters for debugging:
//    count: used to count the loops
//    source: a string to specify an ID, a message, etc
//**********************************************************************
function waitfor(test, expectedValue, msec, count, source, callback) {
  // Check if condition met. If not, re-check later (msec).
  while (test() !== expectedValue) {
    count++;
    console.log("Waiting for condition to be met..." + count);
    setTimeout(function() {
      waitfor(test, expectedValue, msec, count, source, callback);
    }, msec);
    return;
  }
  // Condition finally met. callback() can be executed.
  console.log(source + ': ' + test() + ', expected: ' + expectedValue + ', ' + count + ' loops.');
  callback();
}

function createDesign(){
  var pattern = document.createElement('canvas');
  pattern.width = 40;
  pattern.height = 40;
  var pctx = pattern.getContext('2d');

  pctx.fillStyle = "rgba(188, 222, 178, 0.5)";
  pctx.fillRect(0,0,20,20);
  pctx.fillRect(20,20,20,20);

  return pattern;
}

function getImageRef(url){
  var img = new Image(256,256); // width, height values are optional params
  img.src = 'images/diagonal_stripes_1.png';
  return img;
}


module.exports = {
  gadm0 : gadm0,
  gadm1 : gadm1
};
},{}],"/Users/spatialdev/Documents/GitHub/GeoForce/GeoAngular/app/lib/Leaflet.MapboxVectorTile/node_modules/pbf/index.js":[function(require,module,exports){
(function (Buffer){
'use strict';

var ieee754 = require('ieee754');

module.exports = Protobuf;
function Protobuf(buf) {
    this.buf = buf;
    this.pos = 0;
}

Protobuf.prototype = {
    get length() { return this.buf.length; }
};

Protobuf.Varint = 0;
Protobuf.Int64 = 1;
Protobuf.Message = 2;
Protobuf.String = 2;
Protobuf.Packed = 2;
Protobuf.Int32 = 5;

Protobuf.prototype.destroy = function() {
    this.buf = null;
};

// === READING =================================================================

Protobuf.prototype.readUInt32 = function() {
    var val = this.buf.readUInt32LE(this.pos);
    this.pos += 4;
    return val;
};

Protobuf.prototype.readUInt64 = function() {
    var val = this.buf.readUInt64LE(this.pos);
    this.pos += 8;
    return val;
};

Protobuf.prototype.readDouble = function() {
    var val = ieee754.read(this.buf, this.pos, true, 52, 8);
    this.pos += 8;
    return val;
};

Protobuf.prototype.readVarint = function() {
    // TODO: bounds checking
    var pos = this.pos;
    if (this.buf[pos] <= 0x7f) {
        this.pos++;
        return this.buf[pos];
    } else if (this.buf[pos + 1] <= 0x7f) {
        this.pos += 2;
        return (this.buf[pos] & 0x7f) | (this.buf[pos + 1] << 7);
    } else if (this.buf[pos + 2] <= 0x7f) {
        this.pos += 3;
        return (this.buf[pos] & 0x7f) | (this.buf[pos + 1] & 0x7f) << 7 | (this.buf[pos + 2]) << 14;
    } else if (this.buf[pos + 3] <= 0x7f) {
        this.pos += 4;
        return (this.buf[pos] & 0x7f) | (this.buf[pos + 1] & 0x7f) << 7 | (this.buf[pos + 2] & 0x7f) << 14 | (this.buf[pos + 3]) << 21;
    } else if (this.buf[pos + 4] <= 0x7f) {
        this.pos += 5;
        return ((this.buf[pos] & 0x7f) | (this.buf[pos + 1] & 0x7f) << 7 | (this.buf[pos + 2] & 0x7f) << 14 | (this.buf[pos + 3]) << 21) + (this.buf[pos + 4] * 268435456);
    } else {
        this.skip(Protobuf.Varint);
        return 0;
        // throw new Error("TODO: Handle 6+ byte varints");
    }
};

Protobuf.prototype.readSVarint = function() {
    var num = this.readVarint();
    if (num > 2147483647) throw new Error('TODO: Handle numbers >= 2^30');
    // zigzag encoding
    return ((num >> 1) ^ -(num & 1));
};

Protobuf.prototype.readString = function() {
    var bytes = this.readVarint();
    // TODO: bounds checking
    var chr = String.fromCharCode;
    var b = this.buf;
    var p = this.pos;
    var end = this.pos + bytes;
    var str = '';
    while (p < end) {
        if (b[p] <= 0x7F) str += chr(b[p++]);
        else if (b[p] <= 0xBF) throw new Error('Invalid UTF-8 codepoint: ' + b[p]);
        else if (b[p] <= 0xDF) str += chr((b[p++] & 0x1F) << 6 | (b[p++] & 0x3F));
        else if (b[p] <= 0xEF) str += chr((b[p++] & 0x1F) << 12 | (b[p++] & 0x3F) << 6 | (b[p++] & 0x3F));
        else if (b[p] <= 0xF7) p += 4; // We can't handle these codepoints in JS, so skip.
        else if (b[p] <= 0xFB) p += 5;
        else if (b[p] <= 0xFD) p += 6;
        else throw new Error('Invalid UTF-8 codepoint: ' + b[p]);
    }
    this.pos += bytes;
    return str;
};

Protobuf.prototype.readBuffer = function() {
    var bytes = this.readVarint();
    var buffer = this.buf.subarray(this.pos, this.pos + bytes);
    this.pos += bytes;
    return buffer;
};

Protobuf.prototype.readPacked = function(type) {
    // TODO: bounds checking
    var bytes = this.readVarint();
    var end = this.pos + bytes;
    var array = [];
    while (this.pos < end) {
        array.push(this['read' + type]());
    }
    return array;
};

Protobuf.prototype.skip = function(val) {
    // TODO: bounds checking
    var type = val & 0x7;
    switch (type) {
        /* varint */ case Protobuf.Varint: while (this.buf[this.pos++] > 0x7f); break;
        /* 64 bit */ case Protobuf.Int64: this.pos += 8; break;
        /* length */ case Protobuf.Message: var bytes = this.readVarint(); this.pos += bytes; break;
        /* 32 bit */ case Protobuf.Int32: this.pos += 4; break;
        default: throw new Error('Unimplemented type: ' + type);
    }
};

// === WRITING =================================================================

Protobuf.prototype.writeTag = function(tag, type) {
    this.writeVarint((tag << 3) | type);
};

Protobuf.prototype.realloc = function(min) {
    var length = this.buf.length;
    while (length < this.pos + min) length *= 2;
    if (length != this.buf.length) {
        var buf = new Buffer(length);
        this.buf.copy(buf);
        this.buf = buf;
    }
};

Protobuf.prototype.finish = function() {
    return this.buf.slice(0, this.pos);
};

Protobuf.prototype.writePacked = function(type, tag, items) {
    if (!items.length) return;

    var message = new Protobuf();
    for (var i = 0; i < items.length; i++) {
        message['write' + type](items[i]);
    }
    var data = message.finish();

    this.writeTag(tag, Protobuf.Packed);
    this.writeBuffer(data);
};

Protobuf.prototype.writeUInt32 = function(val) {
    this.realloc(4);
    this.buf.writeUInt32LE(val, this.pos);
    this.pos += 4;
};

Protobuf.prototype.writeTaggedUInt32 = function(tag, val) {
    this.writeTag(tag, Protobuf.Int32);
    this.writeUInt32(val);
};

Protobuf.prototype.writeVarint = function(val) {
    val = Number(val);
    if (isNaN(val)) {
        val = 0;
    }

    if (val <= 0x7f) {
        this.realloc(1);
        this.buf[this.pos++] = val;
    } else if (val <= 0x3fff) {
        this.realloc(2);
        this.buf[this.pos++] = 0x80 | ((val >>> 0) & 0x7f);
        this.buf[this.pos++] = 0x00 | ((val >>> 7) & 0x7f);
    } else if (val <= 0x1ffffff) {
        this.realloc(3);
        this.buf[this.pos++] = 0x80 | ((val >>> 0) & 0x7f);
        this.buf[this.pos++] = 0x80 | ((val >>> 7) & 0x7f);
        this.buf[this.pos++] = 0x00 | ((val >>> 14) & 0x7f);
    } else if (val <= 0xfffffff) {
        this.realloc(4);
        this.buf[this.pos++] = 0x80 | ((val >>> 0) & 0x7f);
        this.buf[this.pos++] = 0x80 | ((val >>> 7) & 0x7f);
        this.buf[this.pos++] = 0x80 | ((val >>> 14) & 0x7f);
        this.buf[this.pos++] = 0x00 | ((val >>> 21) & 0x7f);
    } else {
        while (val > 0) {
            var b = val & 0x7f;
            val = Math.floor(val / 128);
            if (val > 0) b |= 0x80
            this.realloc(1);
            this.buf[this.pos++] = b;
        }
    }
};

Protobuf.prototype.writeTaggedVarint = function(tag, val) {
    this.writeTag(tag, Protobuf.Varint);
    this.writeVarint(val);
};

Protobuf.prototype.writeSVarint = function(val) {
    if (val >= 0) {
        this.writeVarint(val * 2);
    } else {
        this.writeVarint(val * -2 - 1);
    }
};

Protobuf.prototype.writeTaggedSVarint = function(tag, val) {
    this.writeTag(tag, Protobuf.Varint);
    this.writeSVarint(val);
};

Protobuf.prototype.writeBoolean = function(val) {
    this.writeVarint(Boolean(val));
};

Protobuf.prototype.writeTaggedBoolean = function(tag, val) {
    this.writeTaggedVarint(tag, Boolean(val));
};

Protobuf.prototype.writeString = function(str) {
    str = String(str);
    var bytes = Buffer.byteLength(str);
    this.writeVarint(bytes);
    this.realloc(bytes);
    this.buf.write(str, this.pos);
    this.pos += bytes;
};

Protobuf.prototype.writeTaggedString = function(tag, str) {
    this.writeTag(tag, Protobuf.String);
    this.writeString(str);
};

Protobuf.prototype.writeFloat = function(val) {
    this.realloc(4);
    this.buf.writeFloatLE(val, this.pos);
    this.pos += 4;
};

Protobuf.prototype.writeTaggedFloat = function(tag, val) {
    this.writeTag(tag, Protobuf.Int32);
    this.writeFloat(val);
};

Protobuf.prototype.writeDouble = function(val) {
    this.realloc(8);
    this.buf.writeDoubleLE(val, this.pos);
    this.pos += 8;
};

Protobuf.prototype.writeTaggedDouble = function(tag, val) {
    this.writeTag(tag, Protobuf.Int64);
    this.writeDouble(val);
};

Protobuf.prototype.writeBuffer = function(buffer) {
    var bytes = buffer.length;
    this.writeVarint(bytes);
    this.realloc(bytes);
    buffer.copy(this.buf, this.pos);
    this.pos += bytes;
};

Protobuf.prototype.writeTaggedBuffer = function(tag, buffer) {
    this.writeTag(tag, Protobuf.String);
    this.writeBuffer(buffer);
};

Protobuf.prototype.writeMessage = function(tag, protobuf) {
    var buffer = protobuf.finish();
    this.writeTag(tag, Protobuf.Message);
    this.writeBuffer(buffer);
};

}).call(this,require("buffer").Buffer)

},{"buffer":"/Users/spatialdev/Documents/GitHub/GeoForce/GeoAngular/node_modules/browserify/node_modules/buffer/index.js","ieee754":"/Users/spatialdev/Documents/GitHub/GeoForce/GeoAngular/app/lib/Leaflet.MapboxVectorTile/node_modules/pbf/node_modules/ieee754/index.js"}],"/Users/spatialdev/Documents/GitHub/GeoForce/GeoAngular/app/lib/Leaflet.MapboxVectorTile/node_modules/pbf/node_modules/ieee754/index.js":[function(require,module,exports){
exports.read = function(buffer, offset, isLE, mLen, nBytes) {
  var e, m,
      eLen = nBytes * 8 - mLen - 1,
      eMax = (1 << eLen) - 1,
      eBias = eMax >> 1,
      nBits = -7,
      i = isLE ? (nBytes - 1) : 0,
      d = isLE ? -1 : 1,
      s = buffer[offset + i];

  i += d;

  e = s & ((1 << (-nBits)) - 1);
  s >>= (-nBits);
  nBits += eLen;
  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8);

  m = e & ((1 << (-nBits)) - 1);
  e >>= (-nBits);
  nBits += mLen;
  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8);

  if (e === 0) {
    e = 1 - eBias;
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity);
  } else {
    m = m + Math.pow(2, mLen);
    e = e - eBias;
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
};

exports.write = function(buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c,
      eLen = nBytes * 8 - mLen - 1,
      eMax = (1 << eLen) - 1,
      eBias = eMax >> 1,
      rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0),
      i = isLE ? 0 : (nBytes - 1),
      d = isLE ? 1 : -1,
      s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0;

  value = Math.abs(value);

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0;
    e = eMax;
  } else {
    e = Math.floor(Math.log(value) / Math.LN2);
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--;
      c *= 2;
    }
    if (e + eBias >= 1) {
      value += rt / c;
    } else {
      value += rt * Math.pow(2, 1 - eBias);
    }
    if (value * c >= 2) {
      e++;
      c /= 2;
    }

    if (e + eBias >= eMax) {
      m = 0;
      e = eMax;
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen);
      e = e + eBias;
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
      e = 0;
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8);

  e = (e << mLen) | m;
  eLen += mLen;
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8);

  buffer[offset + i - d] |= s * 128;
};

},{}],"/Users/spatialdev/Documents/GitHub/GeoForce/GeoAngular/app/lib/Leaflet.MapboxVectorTile/node_modules/point-geometry/index.js":[function(require,module,exports){
'use strict';

module.exports = Point;

function Point(x, y) {
    this.x = x;
    this.y = y;
}

Point.prototype = {
    clone: function() { return new Point(this.x, this.y); },

    add:     function(p) { return this.clone()._add(p);     },
    sub:     function(p) { return this.clone()._sub(p);     },
    mult:    function(k) { return this.clone()._mult(k);    },
    div:     function(k) { return this.clone()._div(k);     },
    rotate:  function(a) { return this.clone()._rotate(a);  },
    matMult: function(m) { return this.clone()._matMult(m); },
    unit:    function() { return this.clone()._unit(); },
    perp:    function() { return this.clone()._perp(); },
    round:   function() { return this.clone()._round(); },

    mag: function() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    },

    equals: function(p) {
        return this.x === p.x &&
               this.y === p.y;
    },

    dist: function(p) {
        return Math.sqrt(this.distSqr(p));
    },

    distSqr: function(p) {
        var dx = p.x - this.x,
            dy = p.y - this.y;
        return dx * dx + dy * dy;
    },

    angle: function() {
        return Math.atan2(this.y, this.x);
    },

    angleTo: function(b) {
        return Math.atan2(this.y - b.y, this.x - b.x);
    },

    angleWith: function(b) {
        return this.angleWithSep(b.x, b.y);
    },

    // Find the angle of the two vectors, solving the formula for the cross product a x b = |a||b|sin(θ) for θ.
    angleWithSep: function(x, y) {
        return Math.atan2(
            this.x * y - this.y * x,
            this.x * x + this.y * y);
    },

    _matMult: function(m) {
        var x = m[0] * this.x + m[1] * this.y,
            y = m[2] * this.x + m[3] * this.y;
        this.x = x;
        this.y = y;
        return this;
    },

    _add: function(p) {
        this.x += p.x;
        this.y += p.y;
        return this;
    },

    _sub: function(p) {
        this.x -= p.x;
        this.y -= p.y;
        return this;
    },

    _mult: function(k) {
        this.x *= k;
        this.y *= k;
        return this;
    },

    _div: function(k) {
        this.x /= k;
        this.y /= k;
        return this;
    },

    _unit: function() {
        this._div(this.mag());
        return this;
    },

    _perp: function() {
        var y = this.y;
        this.y = this.x;
        this.x = -y;
        return this;
    },

    _rotate: function(angle) {
        var cos = Math.cos(angle),
            sin = Math.sin(angle),
            x = cos * this.x - sin * this.y,
            y = sin * this.x + cos * this.y;
        this.x = x;
        this.y = y;
        return this;
    },

    _round: function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this;
    }
};

// constructs Point from an array if necessary
Point.convert = function (a) {
    if (a instanceof Point) {
        return a;
    }
    if (Array.isArray(a)) {
        return new Point(a[0], a[1]);
    }
    return a;
};

},{}],"/Users/spatialdev/Documents/GitHub/GeoForce/GeoAngular/app/lib/Leaflet.MapboxVectorTile/node_modules/vector-tile/index.js":[function(require,module,exports){
module.exports.VectorTile = require('./lib/vectortile.js');
module.exports.VectorTileFeature = require('./lib/vectortilefeature.js');
module.exports.VectorTileLayer = require('./lib/vectortilelayer.js');

},{"./lib/vectortile.js":"/Users/spatialdev/Documents/GitHub/GeoForce/GeoAngular/app/lib/Leaflet.MapboxVectorTile/node_modules/vector-tile/lib/vectortile.js","./lib/vectortilefeature.js":"/Users/spatialdev/Documents/GitHub/GeoForce/GeoAngular/app/lib/Leaflet.MapboxVectorTile/node_modules/vector-tile/lib/vectortilefeature.js","./lib/vectortilelayer.js":"/Users/spatialdev/Documents/GitHub/GeoForce/GeoAngular/app/lib/Leaflet.MapboxVectorTile/node_modules/vector-tile/lib/vectortilelayer.js"}],"/Users/spatialdev/Documents/GitHub/GeoForce/GeoAngular/app/lib/Leaflet.MapboxVectorTile/node_modules/vector-tile/lib/vectortile.js":[function(require,module,exports){
'use strict';

var VectorTileLayer = require('./vectortilelayer');

module.exports = VectorTile;

function VectorTile(buffer, end) {

    this.layers = {};
    this._buffer = buffer;

    end = end || buffer.length;

    while (buffer.pos < end) {
        var val = buffer.readVarint(),
            tag = val >> 3;

        if (tag == 3) {
            var layer = this.readLayer();
            if (layer.length) this.layers[layer.name] = layer;
        } else {
            buffer.skip(val);
        }
    }
}

VectorTile.prototype.readLayer = function() {
    var buffer = this._buffer,
        bytes = buffer.readVarint(),
        end = buffer.pos + bytes,
        layer = new VectorTileLayer(buffer, end);

    buffer.pos = end;

    return layer;
};

},{"./vectortilelayer":"/Users/spatialdev/Documents/GitHub/GeoForce/GeoAngular/app/lib/Leaflet.MapboxVectorTile/node_modules/vector-tile/lib/vectortilelayer.js"}],"/Users/spatialdev/Documents/GitHub/GeoForce/GeoAngular/app/lib/Leaflet.MapboxVectorTile/node_modules/vector-tile/lib/vectortilefeature.js":[function(require,module,exports){
'use strict';

var Point = require('point-geometry');

module.exports = VectorTileFeature;

function VectorTileFeature(buffer, end, extent, keys, values) {

    this.properties = {};

    // Public
    this.extent = extent;
    this.type = 0;

    // Private
    this._buffer = buffer;
    this._geometry = -1;

    end = end || buffer.length;

    while (buffer.pos < end) {
        var val = buffer.readVarint(),
            tag = val >> 3;

        if (tag == 1) {
            this._id = buffer.readVarint();

        } else if (tag == 2) {
            var tagLen = buffer.readVarint(),
                tagEnd = buffer.pos + tagLen;

            while (buffer.pos < tagEnd) {
                var key = keys[buffer.readVarint()];
                var value = values[buffer.readVarint()];
                this.properties[key] = value;
            }

        } else if (tag == 3) {
            this.type = buffer.readVarint();

        } else if (tag == 4) {
            this._geometry = buffer.pos;
            buffer.skip(val);

        } else {
            buffer.skip(val);
        }
    }
}

VectorTileFeature.types = ['Unknown', 'Point', 'LineString', 'Polygon'];

VectorTileFeature.prototype.loadGeometry = function() {
    var buffer = this._buffer;
    buffer.pos = this._geometry;

    var bytes = buffer.readVarint(),
        end = buffer.pos + bytes,
        cmd = 1,
        length = 0,
        x = 0,
        y = 0,
        lines = [],
        line;

    while (buffer.pos < end) {
        if (!length) {
            var cmd_length = buffer.readVarint();
            cmd = cmd_length & 0x7;
            length = cmd_length >> 3;
        }

        length--;

        if (cmd === 1 || cmd === 2) {
            x += buffer.readSVarint();
            y += buffer.readSVarint();

            if (cmd === 1) {
                // moveTo
                if (line) {
                    lines.push(line);
                }
                line = [];
            }

            line.push(new Point(x, y));
        } else if (cmd === 7) {
            // closePolygon
            line.push(line[0].clone());
        } else {
            throw new Error('unknown command ' + cmd);
        }
    }

    if (line) lines.push(line);

    return lines;
};

VectorTileFeature.prototype.bbox = function() {
    var buffer = this._buffer;
    buffer.pos = this._geometry;

    var bytes = buffer.readVarint(),
        end = buffer.pos + bytes,

        cmd = 1,
        length = 0,
        x = 0,
        y = 0,
        x1 = Infinity,
        x2 = -Infinity,
        y1 = Infinity,
        y2 = -Infinity;

    while (buffer.pos < end) {
        if (!length) {
            var cmd_length = buffer.readVarint();
            cmd = cmd_length & 0x7;
            length = cmd_length >> 3;
        }

        length--;

        if (cmd === 1 || cmd === 2) {
            x += buffer.readSVarint();
            y += buffer.readSVarint();
            if (x < x1) x1 = x;
            if (x > x2) x2 = x;
            if (y < y1) y1 = y;
            if (y > y2) y2 = y;

        } else if (cmd !== 7) {
            throw new Error('unknown command ' + cmd);
        }
    }

    return [x1, y1, x2, y2];
};

},{"point-geometry":"/Users/spatialdev/Documents/GitHub/GeoForce/GeoAngular/app/lib/Leaflet.MapboxVectorTile/node_modules/point-geometry/index.js"}],"/Users/spatialdev/Documents/GitHub/GeoForce/GeoAngular/app/lib/Leaflet.MapboxVectorTile/node_modules/vector-tile/lib/vectortilelayer.js":[function(require,module,exports){
'use strict';

var VectorTileFeature = require('./vectortilefeature.js');

module.exports = VectorTileLayer;
function VectorTileLayer(buffer, end) {
    // Public
    this.version = 1;
    this.name = null;
    this.extent = 4096;
    this.length = 0;

    // Private
    this._buffer = buffer;
    this._keys = [];
    this._values = [];
    this._features = [];

    var val, tag;

    end = end || buffer.length;

    while (buffer.pos < end) {
        val = buffer.readVarint();
        tag = val >> 3;

        if (tag === 15) {
            this.version = buffer.readVarint();
        } else if (tag === 1) {
            this.name = buffer.readString();
        } else if (tag === 5) {
            this.extent = buffer.readVarint();
        } else if (tag === 2) {
            this.length++;
            this._features.push(buffer.pos);
            buffer.skip(val);

        } else if (tag === 3) {
            this._keys.push(buffer.readString());
        } else if (tag === 4) {
            this._values.push(this.readFeatureValue());
        } else {
            buffer.skip(val);
        }
    }
}

VectorTileLayer.prototype.readFeatureValue = function() {
    var buffer = this._buffer,
        value = null,
        bytes = buffer.readVarint(),
        end = buffer.pos + bytes,
        val, tag;

    while (buffer.pos < end) {
        val = buffer.readVarint();
        tag = val >> 3;

        if (tag == 1) {
            value = buffer.readString();
        } else if (tag == 2) {
            throw new Error('read float');
        } else if (tag == 3) {
            value = buffer.readDouble();
        } else if (tag == 4) {
            value = buffer.readVarint();
        } else if (tag == 5) {
            throw new Error('read uint');
        } else if (tag == 6) {
            value = buffer.readSVarint();
        } else if (tag == 7) {
            value = Boolean(buffer.readVarint());
        } else {
            buffer.skip(val);
        }
    }

    return value;
};

// return feature `i` from this layer as a `VectorTileFeature`
VectorTileLayer.prototype.feature = function(i) {
    if (i < 0 || i >= this._features.length) throw new Error('feature index out of bounds');

    this._buffer.pos = this._features[i];
    var end = this._buffer.readVarint() + this._buffer.pos;

    return new VectorTileFeature(this._buffer, end, this.extent, this._keys, this._values);
};

},{"./vectortilefeature.js":"/Users/spatialdev/Documents/GitHub/GeoForce/GeoAngular/app/lib/Leaflet.MapboxVectorTile/node_modules/vector-tile/lib/vectortilefeature.js"}],"/Users/spatialdev/Documents/GitHub/GeoForce/GeoAngular/app/lib/Leaflet.MapboxVectorTile/src/MVTFeature.js":[function(require,module,exports){
/**
 * Created by Ryan Whitley, Daniel Duarte, and Nicholas Hallahan
 *    on 6/03/14.
 */
var Util = require('./MVTUtil');
var StaticLabel = require('./StaticLabel/StaticLabel.js');

module.exports = MVTFeature;

function MVTFeature(mvtLayer, vtf, ctx, id, style) {
  if (!vtf) return null;

  // Apply all of the properties of vtf to this object.
  for (var key in vtf) {
    this[key] = vtf[key];
  }

  this.mvtLayer = mvtLayer;
  this.mvtSource = mvtLayer.mvtSource;
  this.map = mvtLayer.mvtSource.map;

  this.id = id;

  this.layerLink = this.mvtSource.layerLink;
  this.toggleEnabled = true;
  this.selected = false;

  // how much we divide the coordinate from the vector tile
  this.divisor = vtf.extent / ctx.tileSize;
  this.extent = vtf.extent;
  this.tileSize = ctx.tileSize;

  //An object to store the paths and contexts for this feature
  this.tiles = {};

  this.style = style;

  //Add to the collection
  this.addTileFeature(vtf, ctx);

  var self = this;
  this.map.on('zoomend', function() {
    self.staticLabel = null;
  });

  if (style && style.dynamicLabel && typeof style.dynamicLabel === 'function') {
    this.dynamicLabel = this.mvtSource.dynamicLabel.createFeature(this);
  }

  ajax(self);
}


function ajax(self) {
  var style = self.style;
  if (style && style.ajaxSource && typeof style.ajaxSource === 'function') {
    var ajaxEndpoint = style.ajaxSource(self);
    if (ajaxEndpoint) {
      Util.getJSON(ajaxEndpoint, function(error, response, body) {
        if (error) {
          throw ['ajaxSource AJAX Error', error];
        } else {
          ajaxCallback(self, response);
          return true;
        }
      });
    }
  }
  return false;
}

function ajaxCallback(self, response) {
  self.ajaxData = response;

  /**
   * You can attach a callback function to a feature in your app
   * that will get called whenever new ajaxData comes in. This
   * can be used to update UI that looks at data from within a feature.
   *
   * setStyle may possibly have a style with a different ajaxData source,
   * and you would potentially get new contextual data for your feature.
   *
   * TODO: This needs to be documented.
   */
  if (typeof self.ajaxDataReceived === 'function') {
    self.ajaxDataReceived(self, response);
  }

  self._setStyle(self.mvtLayer.style);
  redrawTiles(self);
}

MVTFeature.prototype._setStyle = function(styleFn) {
  this.style = styleFn(this, this.ajaxData);

  // The label gets removed, and the (re)draw,
  // that is initiated by the MVTLayer creates a new label.
  this.removeLabel();
};

MVTFeature.prototype.setStyle = function(styleFn) {
  this.ajaxData = null;
  this.style = styleFn(this, null);
  var hasAjaxSource = ajax(this);
  if (!hasAjaxSource) {
    // The label gets removed, and the (re)draw,
    // that is initiated by the MVTLayer creates a new label.
    this.removeLabel();
  }
};

MVTFeature.prototype.draw = function(canvasID) {
  //Get the info from the tiles list
  var tileInfo =  this.tiles[canvasID];

  var vtf = tileInfo.vtf;
  var ctx = tileInfo.ctx;

  //Get the actual canvas from the parent layer's _tiles object.
  var xy = canvasID.split(":").slice(1, 3).join(":");
  ctx.canvas = this.mvtLayer._tiles[xy];

//  This could be used to directly compute the style function from the layer on every draw.
//  This is much less efficient...
//  this.style = this.mvtLayer.style(this);

  if (this.selected) {
    var style = this.style.selected || this.style;
  } else {
    var style = this.style;
  }

  switch (vtf.type) {
    case 1: //Point
      this._drawPoint(ctx, vtf.coordinates, style);
      if (!this.staticLabel && typeof this.style.staticLabel === 'function') {
        if (this.style.ajaxSource && !this.ajaxData) {
          break;
        }
        this._drawStaticLabel(ctx, vtf.coordinates, style);
      }
      break;

    case 2: //LineString
      this._drawLineString(ctx, vtf.coordinates, style);
      break;

    case 3: //Polygon
      this._drawPolygon(ctx, vtf.coordinates, style);
      break;

    default:
      throw new Error('Unmanaged type: ' + vtf.type);
  }

};

MVTFeature.prototype.getPathsForTile = function(canvasID) {
  //Get the info from the parts list
  return this.tiles[canvasID].paths;
};

MVTFeature.prototype.addTileFeature = function(vtf, ctx) {
  //Store the important items in the tiles list

  //We only want to store info for tiles for the current map zoom.  If it is tile info for another zoom level, ignore it
  //Also, if there are existing tiles in the list for other zoom levels, expunge them.
  var zoom = this.map.getZoom();

  if(ctx.zoom != zoom) return;

  this.clearTileFeatures(zoom); //TODO: This iterates thru all tiles every time a new tile is added.  Figure out a better way to do this.

  this.tiles[ctx.id] = {
    ctx: ctx,
    vtf: vtf,
    paths: []
  };

};


/**
 * Clear the inner list of tile features if they don't match the given zoom.
 *
 * @param zoom
 */
MVTFeature.prototype.clearTileFeatures = function(zoom) {
  //If stored tiles exist for other zoom levels, expunge them from the list.
  for (var key in this.tiles) {
     if(key.split(":")[0] != zoom) delete this.tiles[key];
  }
};

/**
 * Redraws all of the tiles associated with a feature. Useful for
 * style change and toggling.
 *
 * @param self
 */
function redrawTiles(self) {
  //Redraw the whole tile, not just this vtf
  var tiles = self.tiles;
  var mvtLayer = self.mvtLayer;

  for (var id in tiles) {
    var tileZoom = parseInt(id.split(':')[0]);
    var mapZoom = self.map.getZoom();
    if (tileZoom === mapZoom) {
      //Redraw the tile
      mvtLayer.redrawTile(id);
    }
  }
}

MVTFeature.prototype.toggle = function() {
  if (this.selected) {
    this.deselect();
  } else {
    this.select();
  }
};

MVTFeature.prototype.select = function() {
  this.selected = true;
  this.mvtSource.featureSelected(this);
  redrawTiles(this);
  var linkedFeature = this.linkedFeature();
  if (linkedFeature && linkedFeature.staticLabel && !linkedFeature.staticLabel.selected) {
    linkedFeature.staticLabel.select();
  }
};

MVTFeature.prototype.deselect = function() {
  this.selected = false;
  this.mvtSource.featureDeselected(this);
  redrawTiles(this);
  var linkedFeature = this.linkedFeature();
  if (linkedFeature && linkedFeature.staticLabel && linkedFeature.staticLabel.selected) {
    linkedFeature.staticLabel.deselect();
  }
};

MVTFeature.prototype.on = function(eventType, callback) {
  this._eventHandlers[eventType] = callback;
};

MVTFeature.prototype._drawPoint = function(ctx, coordsArray, style) {
  if (!style) return;
  if (!ctx || !ctx.canvas) return;

  var tile = this.tiles[ctx.id];

  //Get radius
  var radius = 1;
  if (typeof style.radius === 'function') {
    radius = style.radius(ctx.zoom); //Allows for scale dependent rednering
  }
  else{
    radius = style.radius;
  }

  var p = this._tilePoint(coordsArray[0][0]);
  var c = ctx.canvas;
  var ctx2d;
  try{
    ctx2d = c.getContext('2d');
  }
  catch(e){
    console.log("_drawPoint error: " + e);
    return;
  }

  ctx2d.beginPath();
  ctx2d.fillStyle = style.color;
  ctx2d.arc(p.x, p.y, radius, 0, Math.PI * 2);
  ctx2d.closePath();
  ctx2d.fill();

  if(style.lineWidth && style.strokeStyle){
    ctx2d.lineWidth = style.lineWidth;
    ctx2d.strokeStyle = style.strokeStyle;
    ctx2d.stroke();
  }

  ctx2d.restore();
  tile.paths.push([p]);
};

MVTFeature.prototype._drawLineString = function(ctx, coordsArray, style) {
  if (!style) return;
  if (!ctx || !ctx.canvas) return;

  var ctx2d = ctx.canvas.getContext('2d');
  ctx2d.strokeStyle = style.color;
  ctx2d.lineWidth = style.size;
  ctx2d.beginPath();

  var projCoords = [];
  var tile = this.tiles[ctx.id];

  for (var gidx in coordsArray) {
    var coords = coordsArray[gidx];

    for (i = 0; i < coords.length; i++) {
      var method = (i === 0 ? 'move' : 'line') + 'To';
      var proj = this._tilePoint(coords[i]);
      projCoords.push(proj);
      ctx2d[method](proj.x, proj.y);
    }
  }

  ctx2d.stroke();
  ctx2d.restore();

  tile.paths.push(projCoords);
};

MVTFeature.prototype._drawPolygon = function(ctx, coordsArray, style) {
  if (!style) return;
  if (!ctx || !ctx.canvas) return;

  var ctx2d = ctx.canvas.getContext('2d');
  var outline = style.outline;

  // color may be defined via function to make choropleth work right
  if (typeof style.color === 'function') {
    ctx2d.fillStyle = style.color(ctx2d);
  } else {
    ctx2d.fillStyle = style.color;
  }

  if (outline) {
    ctx2d.strokeStyle = outline.color;
    ctx2d.lineWidth = outline.size;
  }
  ctx2d.beginPath();

  var projCoords = [];
  var tile = this.tiles[ctx.id];

  var featureLabel = this.dynamicLabel;
  if (featureLabel) {
    featureLabel.addTilePolys(ctx, coordsArray);
  }

  for (var gidx = 0, len = coordsArray.length; gidx < len; gidx++) {
    var coords = coordsArray[gidx];

    for (var i = 0; i < coords.length; i++) {
      var coord = coords[i];
      var method = (i === 0 ? 'move' : 'line') + 'To';
      var proj = this._tilePoint(coords[i]);
      projCoords.push(proj);
      ctx2d[method](proj.x, proj.y);
    }
  }

  ctx2d.closePath();
  ctx2d.fill();
  if (outline) {
    ctx2d.stroke();
  }

  tile.paths.push(projCoords);

};

MVTFeature.prototype._drawStaticLabel = function(ctx, coordsArray, style) {
  if (!style) return;
  if (!ctx) return;

  // If the corresponding layer is not on the map, 
  // we dont want to put on a label.
  if (!this.mvtLayer._map) return;

  var vecPt = this._tilePoint(coordsArray[0][0]);

  // We're making a standard Leaflet Marker for this label.
  var p = this._project(vecPt, ctx.tile.x, ctx.tile.y, this.extent, this.tileSize); //vectile pt to merc pt
  var mercPt = L.point(p.x, p.y); // make into leaflet obj
  var latLng = this.map.unproject(mercPt); // merc pt to latlng

  this.staticLabel = new StaticLabel(this, ctx, latLng, style);
  this.mvtLayer.featureWithLabelAdded(this);
};

MVTFeature.prototype.removeLabel = function() {
  if (!this.staticLabel) return;
  this.staticLabel.remove();
  this.staticLabel = null;
};

/**
 * Projects a vector tile point to the Spherical Mercator pixel space for a given zoom level.
 *
 * @param vecPt
 * @param tileX
 * @param tileY
 * @param extent
 * @param tileSize
 */
MVTFeature.prototype._project = function(vecPt, tileX, tileY, extent, tileSize) {
  var xOffset = tileX * tileSize;
  var yOffset = tileY * tileSize;
  return {
    x: Math.floor(vecPt.x + xOffset),
    y: Math.floor(vecPt.y + yOffset)
  };
};

/**
 * Takes a coordinate from a vector tile and turns it into a Leaflet Point.
 *
 * @param ctx
 * @param coords
 * @returns {eGeomType.Point}
 * @private
 */
MVTFeature.prototype._tilePoint = function(coords) {
  return new L.Point(coords.x / this.divisor, coords.y / this.divisor);
};

MVTFeature.prototype.linkedFeature = function() {
  var linkedLayer = this.mvtLayer.linkedLayer();
  if(linkedLayer){
    var linkedFeature = linkedLayer.features[this.id];
    return linkedFeature;
  }else{
    return null;
  }
};


},{"./MVTUtil":"/Users/spatialdev/Documents/GitHub/GeoForce/GeoAngular/app/lib/Leaflet.MapboxVectorTile/src/MVTUtil.js","./StaticLabel/StaticLabel.js":"/Users/spatialdev/Documents/GitHub/GeoForce/GeoAngular/app/lib/Leaflet.MapboxVectorTile/src/StaticLabel/StaticLabel.js"}],"/Users/spatialdev/Documents/GitHub/GeoForce/GeoAngular/app/lib/Leaflet.MapboxVectorTile/src/MVTLayer.js":[function(require,module,exports){
/**
 * Created by Ryan Whitley on 5/17/14.
 */
/** Forked from https://gist.github.com/DGuidi/1716010 **/
var MVTFeature = require('./MVTFeature');
var Util = require('./MVTUtil');

module.exports = L.TileLayer.Canvas.extend({

  options: {
    debug: false,
    isHiddenLayer: false,
    getIDForLayerFeature: function() {},
    tileSize: 256,
    lineClickTolerance: 2
  },

  _featureIsClicked: {},

  _isPointInPoly: function(pt, poly) {
    if(poly && poly.length) {
      for (var c = false, i = -1, l = poly.length, j = l - 1; ++i < l; j = i)
        ((poly[i].y <= pt.y && pt.y < poly[j].y) || (poly[j].y <= pt.y && pt.y < poly[i].y))
        && (pt.x < (poly[j].x - poly[i].x) * (pt.y - poly[i].y) / (poly[j].y - poly[i].y) + poly[i].x)
        && (c = !c);
      return c;
    }
  },

  _getDistanceFromLine: function(pt, pts) {
    var min = Number.POSITIVE_INFINITY;
    if (pts && pts.length > 1) {
      pt = L.point(pt.x, pt.y);
      for (var i = 0, l = pts.length - 1; i < l; i++) {
        var test = this._projectPointOnLineSegment(pt, pts[i], pts[i + 1]);
        if (test.distance <= min) {
          min = test.distance;
        }
      }
    }
    return min;
  },

  _projectPointOnLineSegment: function(p, r0, r1) {
    var lineLength = r0.distanceTo(r1);
    if (lineLength < 1) {
        return {distance: p.distanceTo(r0), coordinate: r0};
    }
    var u = ((p.x - r0.x) * (r1.x - r0.x) + (p.y - r0.y) * (r1.y - r0.y)) / Math.pow(lineLength, 2);
    if (u < 0.0000001) {
        return {distance: p.distanceTo(r0), coordinate: r0};
    }
    if (u > 0.9999999) {
        return {distance: p.distanceTo(r1), coordinate: r1};
    }
    var a = L.point(r0.x + u * (r1.x - r0.x), r0.y + u * (r1.y - r0.y));
    return {distance: p.distanceTo(a), point: a};
  },

  initialize: function(mvtSource, options) {
    var self = this;
    self.mvtSource = mvtSource;
    L.Util.setOptions(this, options);

    this.style = options.style;
    this.name = options.name;
    this._canvasIDToFeatures = {};
    this.features = {};
    this.featuresWithLabels = [];
    this._highestCount = 0;
  },

  onAdd: function(map) {
    var self = this;
    self.map = map;
    L.TileLayer.Canvas.prototype.onAdd.call(this, map);
    map.on('layerremove', function(e) {
      // we only want to do stuff when the layerremove event is on this layer
      if (e.layer._leaflet_id === self._leaflet_id) {
        removeLabels(self);
      }
    });
  },

  drawTile: function(canvas, tilePoint, zoom) {

    var ctx = {
      canvas: canvas,
      tile: tilePoint,
      zoom: zoom,
      tileSize: this.options.tileSize
    };

    ctx.id = Util.getContextID(ctx);

    if (!this._canvasIDToFeatures[ctx.id]) {
      this._initializeFeaturesHash(ctx);
    }
    if (!this.features) {
      this.features = {};
    }

  },

  _initializeFeaturesHash: function(ctx){
    this._canvasIDToFeatures[ctx.id] = {};
    this._canvasIDToFeatures[ctx.id].features = [];
    this._canvasIDToFeatures[ctx.id].canvas = ctx.canvas;
  },

  _draw: function(ctx) {
    //Draw is handled by the parent MVTSource object
  },
  getCanvas: function(parentCtx){
    //This gets called if a vector tile feature has already been parsed.
    //We've already got the geom, just get on with the drawing.
    //Need a way to pluck a canvas element from this layer given the parent layer's id.
    //Wait for it to get loaded before proceeding.
    var tilePoint = parentCtx.tile;
    var ctx = this._tiles[tilePoint.x + ":" + tilePoint.y];

    if(ctx){
      parentCtx.canvas = ctx;
      this.redrawTile(parentCtx.id);
      return;
    }

    var self = this;

    //This is a timer that will wait for a criterion to return true.
    //If not true within the timeout duration, it will move on.
    waitFor(function () {
        ctx = self._tiles[tilePoint.x + ":" + tilePoint.y];
        if(ctx) {
          return true;
        }
      },
      function(){
        //When it finishes, do this.
        ctx = self._tiles[tilePoint.x + ":" + tilePoint.y];
        parentCtx.canvas = ctx;
        self.redrawTile(parentCtx.id);

      }, //when done, go to next flow
      2000); //The Timeout milliseconds.  After this, give up and move on

  },

  parseVectorTileLayer: function(vtl, ctx) {
    var self = this;
    var tilePoint = ctx.tile;
    var layerCtx  = { canvas: null, id: ctx.id, tile: ctx.tile, zoom: ctx.zoom, tileSize: ctx.tileSize};

    //See if we can pluck the child tile from this PBF tile layer based on the master layer's tile id.
    layerCtx.canvas = self._tiles[tilePoint.x + ":" + tilePoint.y];



    //Initialize this tile's feature storage hash, if it hasn't already been created.  Used for when filters are updated, and features are cleared to prepare for a fresh redraw.
    if (!this._canvasIDToFeatures[layerCtx.id]) {
      this._initializeFeaturesHash(layerCtx);
    }else{
      //Clear this tile's previously saved features.
      this.clearTileFeatureHash(layerCtx.id);
    }

    var features = vtl.parsedFeatures;
    for (var i = 0, len = features.length; i < len; i++) {
      var vtf = features[i]; //vector tile feature
      vtf.layer = vtl;

      /**
       * Apply filter on feature if there is one. Defined in the options object
       * of TileLayer.MVTSource.js
       */
      var filter = self.options.filter;
      if (filter && typeof filter === 'function') {
        if ( filter(vtf, layerCtx) === false ) continue;
      }

      var getIDForLayerFeature;
      if (typeof self.options.getIDForLayerFeature === 'function') {
        getIDForLayerFeature = self.options.getIDForLayerFeature;
      } else {
        getIDForLayerFeature = Util.getIDForLayerFeature;
      }
      var uniqueID = self.options.getIDForLayerFeature(vtf) || i;
      var mvtFeature = self.features[uniqueID];

      /**
       * Use layerOrdering function to apply a zIndex property to each vtf.  This is defined in
       * TileLayer.MVTSource.js.  Used below to sort features.npm
       */
      var layerOrdering = self.options.layerOrdering;
      if (typeof layerOrdering === 'function') {
        layerOrdering(vtf, layerCtx); //Applies a custom property to the feature, which is used after we're thru iterating to sort
      }

      //Create a new MVTFeature if one doesn't already exist for this feature.
      if (!mvtFeature) {


        //Get a style for the feature - set it just once for each new MVTFeature
        var style = self.style(vtf);

        //create a new feature
        self.features[uniqueID] = mvtFeature = new MVTFeature(self, vtf, layerCtx, uniqueID, style);
        if (style && style.dynamicLabel && typeof style.dynamicLabel === 'function') {
          self.featuresWithLabels.push(mvtFeature);
        }
      } else {
        //Add the new part to the existing feature
        mvtFeature.addTileFeature(vtf, layerCtx);
      }

      //Associate & Save this feature with this tile for later
      if(layerCtx && layerCtx.id) self._canvasIDToFeatures[layerCtx.id]['features'].push(mvtFeature);

    }

    /**
     * Apply sorting (zIndex) on feature if there is a function defined in the options object
     * of TileLayer.MVTSource.js
     */
    var layerOrdering = self.options.layerOrdering;
    if (layerOrdering) {
      //We've assigned the custom zIndex property when iterating above.  Now just sort.
      self._canvasIDToFeatures[layerCtx.id].features = self._canvasIDToFeatures[layerCtx.id].features.sort(function(a, b) {
        return -(b.properties.zIndex - a.properties.zIndex)
      });
    }

    self.redrawTile(layerCtx.id);
  },

  setStyle: function(styleFn) {
    // refresh the number for the highest count value
    // this is used only for choropleth
    this._highestCount = 0;

    // lowest count should not be 0, since we want to figure out the lowest
    this._lowestCount = null;

    this.style = styleFn;
    for (var key in this.features) {
      var feat = this.features[key];
      feat.setStyle(styleFn);
    }
    var z = this.map.getZoom();
    for (var key in this._tiles) {
      var id = z + ':' + key;
      this.redrawTile(id);
    }
  },

  /**
   * As counts for choropleths come in with the ajax data,
   * we want to keep track of which value is the highest
   * to create the color ramp for the fills of polygons.
   * @param count
   */
  setHighestCount: function(count) {
    if (count > this._highestCount) {
      this._highestCount = count;
    }
  },

  /**
   * Returns the highest number of all of the counts that have come in
   * from setHighestCount. This is assumed to be set via ajax callbacks.
   * @returns {number}
   */
  getHighestCount: function() {
    return this._highestCount;
  },

  setLowestCount: function(count) {
    if (!this._lowestCount || count < this._lowestCount) {
      this._lowestCount = count;
    }
  },

  getLowestCount: function() {
    return this._lowestCount;
  },

  setCountRange: function(count) {
    this.setHighestCount(count);
    this.setLowestCount(count);
  },

  //This is the old way.  It works, but is slow for mouseover events.  Fine for click events.
  handleClickEvent: function(evt, cb) {
    //Click happened on the GroupLayer (Manager) and passed it here
    var tileID = evt.tileID.split(":").slice(1, 3).join(":");
    var canvas = this._tiles[tileID];
    if(!canvas) (cb(evt)); //break out
    var x = evt.layerPoint.x - canvas._leaflet_pos.x;
    var y = evt.layerPoint.y - canvas._leaflet_pos.y;

    var tilePoint = {x: x, y: y};
    var features = this._canvasIDToFeatures[evt.tileID].features;

    var minDistance = Number.POSITIVE_INFINITY;
    var nearest = null;
    var j, paths, distance;

    for (var i = 0; i < features.length; i++) {
      var feature = features[i];
      switch (feature.type) {
        case 2: //LineString
          paths = feature.getPathsForTile(evt.tileID);
          for (j = 0; j < paths.length; j++) {
            if (feature.style) {
              var distance = this._getDistanceFromLine(tilePoint, paths[j]);
              var thickness = (feature.selected && feature.style.selected ? feature.style.selected.size : feature.style.size);
              if (distance < thickness / 2 + this.options.lineClickTolerance && distance < minDistance) {
                nearest = feature;
                minDistance = distance;
              }
            }
          }
          break;

        case 3: //Polygon
          paths = feature.getPathsForTile(evt.tileID);
          for (j = 0; j < paths.length; j++) {
            if (this._isPointInPoly(tilePoint, paths[j])) {
              nearest = feature;
              minDistance = 0; // point is inside the polygon, so distance is zero
            }
          }
          break;
      }
      if (minDistance == 0) break;
    }

    if (nearest && nearest.toggleEnabled) {
        nearest.toggle();
    }
    evt.feature = nearest;
    cb(evt);
  },

  clearTile: function(id) {
    //id is the entire zoom:x:y.  we just want x:y.
    var ca = id.split(":");
    var canvasId = ca[1] + ":" + ca[2];
    if (typeof this._tiles[canvasId] === 'undefined') {
      console.error("typeof this._tiles[canvasId] === 'undefined'");
      return;
    }
    var canvas = this._tiles[canvasId];

    var context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
  },

  clearTileFeatureHash: function(canvasID){
    this._canvasIDToFeatures[canvasID] = { features: []}; //Get rid of all saved features
  },

  clearLayerFeatureHash: function(){
    this.features = {};
  },

  redrawTile: function(canvasID) {
    //First, clear the canvas
    this.clearTile(canvasID);

    // If the features are not in the tile, then there is nothing to redraw.
    // This may happen if you call redraw before features have loaded and initially
    // drawn the tile.
    var featfeats = this._canvasIDToFeatures[canvasID];
    if (!featfeats) {
      return;
    }

    //Get the features for this tile, and redraw them.
    var features = featfeats.features;

    // we want to skip drawing the selected features and draw them last
    var selectedFeatures = [];

    // drawing all of the non-selected features
    for (var i = 0; i < features.length; i++) {
      var feature = features[i];
      if (feature.selected) {
        selectedFeatures.push(feature);
      } else {
        feature.draw(canvasID);
      }
    }

    // drawing the selected features last
    for (var j = 0, len2 = selectedFeatures.length; j < len2; j++) {
      var selFeat = selectedFeatures[j];
      selFeat.draw(canvasID);
    }
  },

  _resetCanvasIDToFeatures: function(canvasID, canvas) {

    this._canvasIDToFeatures[canvasID] = {};
    this._canvasIDToFeatures[canvasID].features = [];
    this._canvasIDToFeatures[canvasID].canvas = canvas;

  },

  linkedLayer: function() {
    if(this.mvtSource.layerLink) {
      var linkName = this.mvtSource.layerLink(this.name);
      return this.mvtSource.layers[linkName];
    }
    else{
      return null;
    }
  },

  featureWithLabelAdded: function(feature) {
    this.featuresWithLabels.push(feature);
  }

});


function removeLabels(self) {
  var features = self.featuresWithLabels;
  for (var i = 0, len = features.length; i < len; i++) {
    var feat = features[i];
    feat.removeLabel();
  }
  self.featuresWithLabels = [];
}


/**
 * See https://github.com/ariya/phantomjs/blob/master/examples/waitfor.js
 *
 * Wait until the test condition is true or a timeout occurs. Useful for waiting
 * on a server response or for a ui change (fadeIn, etc.) to occur.
 *
 * @param testFx javascript condition that evaluates to a boolean,
 * it can be passed in as a string (e.g.: "1 == 1" or "$('#bar').is(':visible')" or
 * as a callback function.
 * @param onReady what to do when testFx condition is fulfilled,
 * it can be passed in as a string (e.g.: "1 == 1" or "$('#bar').is(':visible')" or
 * as a callback function.
 * @param timeOutMillis the max amount of time to wait. If not specified, 3 sec is used.
 */
function waitFor(testFx, onReady, timeOutMillis) {
  var maxtimeOutMillis = timeOutMillis ? timeOutMillis : 3000, //< Default Max Timout is 3s
    start = new Date().getTime(),
    condition = (typeof (testFx) === "string" ? eval(testFx) : testFx()), //< defensive code
    interval = setInterval(function () {
      if ((new Date().getTime() - start < maxtimeOutMillis) && !condition) {
        // If not time-out yet and condition not yet fulfilled
        condition = (typeof (testFx) === "string" ? eval(testFx) : testFx()); //< defensive code
      } else {
        if (!condition) {
          // If condition still not fulfilled (timeout but condition is 'false')
          console.log("'waitFor()' timeout");
          clearInterval(interval); //< Stop this interval
          typeof (onReady) === "string" ? eval(onReady) : onReady('timeout'); //< Do what it's supposed to do once the condition is fulfilled
        } else {
          // Condition fulfilled (timeout and/or condition is 'true')
          console.log("'waitFor()' finished in " + (new Date().getTime() - start) + "ms.");
          clearInterval(interval); //< Stop this interval
          typeof (onReady) === "string" ? eval(onReady) : onReady('success'); //< Do what it's supposed to do once the condition is fulfilled
        }
      }
    }, 50); //< repeat check every 50ms
};

},{"./MVTFeature":"/Users/spatialdev/Documents/GitHub/GeoForce/GeoAngular/app/lib/Leaflet.MapboxVectorTile/src/MVTFeature.js","./MVTUtil":"/Users/spatialdev/Documents/GitHub/GeoForce/GeoAngular/app/lib/Leaflet.MapboxVectorTile/src/MVTUtil.js"}],"/Users/spatialdev/Documents/GitHub/GeoForce/GeoAngular/app/lib/Leaflet.MapboxVectorTile/src/MVTSource.js":[function(require,module,exports){
var VectorTile = require('vector-tile').VectorTile;
var Protobuf = require('pbf');
var Point = require('point-geometry');
var Util = require('./MVTUtil');
var MVTLayer = require('./MVTLayer');


module.exports = L.TileLayer.MVTSource = L.TileLayer.Canvas.extend({

  options: {
    debug: false,
    url: "", //URL TO Vector Tile Source,
    getIDForLayerFeature: function() {},
    tileSize: 256,
    visibleLayers: []
  },
  layers: {}, //Keep a list of the layers contained in the PBFs
  processedTiles: {}, //Keep a list of tiles that have been processed already
  _eventHandlers: {},
  _triggerOnTilesLoadedEvent: true, //whether or not to fire the onTilesLoaded event when all of the tiles finish loading.

  style: function(feature) {
    var style = {};

    var type = feature.type;
    switch (type) {
      case 1: //'Point'
        style.color = 'rgba(49,79,79,1)';
        style.radius = 5;
        style.selected = {
          color: 'rgba(255,255,0,0.5)',
          radius: 6
        };
        break;
      case 2: //'LineString'
        style.color = 'rgba(161,217,155,0.8)';
        style.size = 3;
        style.selected = {
          color: 'rgba(255,25,0,0.5)',
          size: 4
        };
        break;
      case 3: //'Polygon'
        style.color = 'rgba(49,79,79,1)';
        style.outline = {
          color: 'rgba(161,217,155,0.8)',
          size: 1
        };
        style.selected = {
          color: 'rgba(255,140,0,0.3)',
          outline: {
            color: 'rgba(255,140,0,1)',
            size: 2
          }
        };
        break;
    }
    return style;
  },


  initialize: function(options) {
    L.Util.setOptions(this, options);

    //a list of the layers contained in the PBFs
    this.layers = {};

    // tiles currently in the viewport
    this.activeTiles = {};

    // thats that have been loaded and drawn
    this.loadedTiles = {};

    /**
     * For some reason, Leaflet has some code that resets the
     * z index in the options object. I'm having trouble tracking
     * down exactly what does this and why, so for now, we should
     * just copy the value to this.zIndex so we can have the right
     * number when we make the subsequent MVTLayers.
     */
    this.zIndex = options.zIndex;

    if (typeof options.style === 'function') {
      this.style = options.style;
    }

    if (typeof options.ajaxSource === 'function') {
      this.ajaxSource = options.ajaxSource;
    }

    this.layerLink = options.layerLink;

    this._eventHandlers = {};

    this._tilesToProcess = 0; //store the max number of tiles to be loaded.  Later, we can use this count to count down PBF loading.
  },

  redraw: function(triggerOnTilesLoadedEvent){
    //Only set to false if it actually is passed in as 'false'
    if (triggerOnTilesLoadedEvent === false) {
      this._triggerOnTilesLoadedEvent = false;
    }

    L.TileLayer.Canvas.prototype.redraw.call(this);
  },

  onAdd: function(map) {
    var self = this;
    self.map = map;
    L.TileLayer.Canvas.prototype.onAdd.call(this, map);

    var mapOnClickCallback = function(e) {
      self._onClick(e);
    };

    map.on('click', mapOnClickCallback);

    map.on("layerremove", function(e) {
      // check to see if the layer removed is this one
      // call a method to remove the child layers (the ones that actually have something drawn on them).
      if (e.layer._leaflet_id === self._leaflet_id && e.layer.removeChildLayers) {
        e.layer.removeChildLayers(map);
        map.off('click', mapOnClickCallback);
      }
    });

    self.addChildLayers(map);

    if (typeof DynamicLabel === 'function' ) {
      this.dynamicLabel = new DynamicLabel(map, this, {});
    }

  },

  drawTile: function(canvas, tilePoint, zoom) {
    var ctx = {
      id: [zoom, tilePoint.x, tilePoint.y].join(":"),
      canvas: canvas,
      tile: tilePoint,
      zoom: zoom,
      tileSize: this.options.tileSize
    };

    //Capture the max number of the tiles to load here. this._tilesToProcess is an internal number we use to know when we've finished requesting PBFs.
    if(this._tilesToProcess < this._tilesToLoad) this._tilesToProcess = this._tilesToLoad;

    var id = ctx.id = Util.getContextID(ctx);
    this.activeTiles[id] = ctx;

    if(!this.processedTiles[ctx.zoom]) this.processedTiles[ctx.zoom] = {};

    if (this.options.debug) {
      this._drawDebugInfo(ctx);
    }
    this._draw(ctx);
  },

  setOpacity:function(opacity) {
    this._setVisibleLayersStyle('opacity',opacity);
  },

  setZIndex:function(zIndex) {
    this._setVisibleLayersStyle('zIndex',zIndex);
  },

  _setVisibleLayersStyle:function(style, value) {
    for(var key in this.layers) {
      this.layers[key]._tileContainer.style[style] = value;
    }
  },

  _drawDebugInfo: function(ctx) {
    var max = this.options.tileSize;
    var g = ctx.canvas.getContext('2d');
    g.strokeStyle = '#000000';
    g.fillStyle = '#FFFF00';
    g.strokeRect(0, 0, max, max);
    g.font = "12px Arial";
    g.fillRect(0, 0, 5, 5);
    g.fillRect(0, max - 5, 5, 5);
    g.fillRect(max - 5, 0, 5, 5);
    g.fillRect(max - 5, max - 5, 5, 5);
    g.fillRect(max / 2 - 5, max / 2 - 5, 10, 10);
    g.strokeText(ctx.zoom + ' ' + ctx.tile.x + ' ' + ctx.tile.y, max / 2 - 30, max / 2 - 10);
  },

  _draw: function(ctx) {
    var self = this;

//    //This works to skip fetching and processing tiles if they've already been processed.
//    var vectorTile = loadedTiles[ctx.id];
//    //if we've already parsed it, don't get it again.
//    if(vectorTile){
//      console.log("Skipping fetching " + ctx.id);
//      self.checkVectorTileLayers(parseVT(vectorTile), ctx, true);
//      self.reduceTilesToProcessCount();
//      return;
//    }

    var fullStart = new Date();

    if (!this.options.url) return;
    var url = self.options.url.replace("{z}", ctx.zoom).replace("{x}", ctx.tile.x).replace("{y}", ctx.tile.y);

    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
      if (xhr.status == "200") {

        if(!xhr.response) return;

        var arrayBuffer = new Uint8Array(xhr.response);
        var buf = new Protobuf(arrayBuffer);
        var vt = new VectorTile(buf);
        //Check the current map layer zoom.  If fast zooming is occurring, then short circuit tiles that are for a different zoom level than we're currently on.
        if(self.map && self.map.getZoom() != ctx.zoom) {
          console.log("Fetched tile for zoom level " + ctx.zoom + ". Map is at zoom level " + self._map.getZoom());
          return;
        }
        self.checkVectorTileLayers(parseVT(vt), ctx);
        tileLoaded(self, ctx);
      }

      var msDiff = new Date().getTime() - new Date(fullStart).getTime(); //Difference in ms
      //console.log("Timer - " + ctx.zoom + "/" + ctx.tile.x + "/" + ctx.tile.y + ": " + msDiff);

      //either way, reduce the count of tilesToProcess tiles here
      self.reduceTilesToProcessCount();
    };

    xhr.onerror = function() {
      console.log("xhr error: " + xhr.status)
    };

    xhr.open('GET', url, true); //async is true
    xhr.responseType = 'arraybuffer';
    xhr.send();
  },

  reduceTilesToProcessCount: function(){
    this._tilesToProcess--;
    if(!this._tilesToProcess){
      //Trigger event letting us know that all PBFs have been loaded and processed (or 404'd).
      if(this._eventHandlers["PBFLoad"]) this._eventHandlers["PBFLoad"]();
      this._pbfLoaded();
    }
  },

  checkVectorTileLayers: function(vt, ctx, parsed) {
    var self = this;

    //Check if there are specified visible layers
    if(self.options.visibleLayers && self.options.visibleLayers.length > 0){
      //only let thru the layers listed in the visibleLayers array
      for(var i=0; i < self.options.visibleLayers.length; i++){
        var layerName = self.options.visibleLayers[i];
        if(vt.layers[layerName]){
           //Proceed with parsing
          self.prepareMVTLayers(vt.layers[layerName], layerName, ctx, parsed);
        }
      }
    }else{
      //Parse all vt.layers
      for (var key in vt.layers) {
        self.prepareMVTLayers(vt.layers[key], key, ctx, parsed);
      }
    }
  },

  prepareMVTLayers: function(lyr ,key, ctx, parsed) {
    var self = this;

    if (!self.layers[key]) {
      //Create MVTLayer or MVTPointLayer for user
      self.layers[key] = self.createMVTLayer(key, lyr.parsedFeatures[0].type || null);
    }

    if (parsed) {
      //We've already parsed it.  Go get canvas and draw.
      self.layers[key].getCanvas(ctx, lyr);
    } else {
      self.layers[key].parseVectorTileLayer(lyr, ctx);
    }

  },

  createMVTLayer: function(key, type) {
    var self = this;

    var getIDForLayerFeature;
    if (typeof self.options.getIDForLayerFeature === 'function') {
      getIDForLayerFeature = self.options.getIDForLayerFeature;
    } else {
      getIDForLayerFeature = Util.getIDForLayerFeature;
    }

    var options = {
      getIDForLayerFeature: getIDForLayerFeature,
      filter: self.options.filter,
      layerOrdering: self.options.layerOrdering,
      style: self.style,
      name: key,
      asynch: true
    };

    if (self.options.zIndex) {
      options.zIndex = self.zIndex;
    }

    //Take the layer and create a new MVTLayer or MVTPointLayer if one doesn't exist.
    var layer = new MVTLayer(self, options).addTo(self.map);

    return layer;
  },

  getLayers: function() {
    return this.layers;
  },

  hideLayer: function(id) {
    if (this.layers[id]) {
      this._map.removeLayer(this.layers[id]);
      if(this.options.visibleLayers.indexOf("id") > -1){
        this.visibleLayers.splice(this.options.visibleLayers.indexOf("id"), 1);
      }
    }
  },

  showLayer: function(id) {
    if (this.layers[id]) {
      this._map.addLayer(this.layers[id]);
      if(this.options.visibleLayers.indexOf("id") == -1){
        this.visibleLayers.push(id);
      }
    }
    //Make sure manager layer is always in front
    this.bringToFront();
  },

  removeChildLayers: function(map){
    //Remove child layers of this group layer
    for (var key in this.layers) {
      var layer = this.layers[key];
      map.removeLayer(layer);
    }
  },

  addChildLayers: function(map) {
    var self = this;
    if(self.options.visibleLayers.length > 0){
      //only let thru the layers listed in the visibleLayers array
      for(var i=0; i < self.options.visibleLayers.length; i++){
        var layerName = self.options.visibleLayers[i];
        var layer = this.layers[layerName];
        if(layer){
          //Proceed with parsing
          map.addLayer(layer);
        }
      }
    }else{
      //Add all layers
      for (var key in this.layers) {
        var layer = this.layers[key];
        // layer is set to visible and is not already on map
        if (!layer._map) {
          map.addLayer(layer);
        }
      }
    }
  },

  bind: function(eventType, callback) {
    this._eventHandlers[eventType] = callback;
  },

  _onClick: function(evt) {
    //Here, pass the event on to the child MVTLayer and have it do the hit test and handle the result.
    var self = this;
    var onClick = self.options.onClick;
    var clickableLayers = self.options.clickableLayers;
    var layers = self.layers;

    evt.tileID =  getTileURL(evt.latlng.lat, evt.latlng.lng, this.map.getZoom());

    // We must have an array of clickable layers, otherwise, we just pass
    // the event to the public onClick callback in options.

    if(!clickableLayers){
      clickableLayers = Object.keys(self.layers);
    }

    if (clickableLayers && clickableLayers.length > 0) {
      for (var i = 0, len = clickableLayers.length; i < len; i++) {
        var key = clickableLayers[i];
        var layer = layers[key];
        if (layer) {
          layer.handleClickEvent(evt, function(evt) {
            if (typeof onClick === 'function') {
              onClick(evt);
            }
          });
        }
      }
    } else {
      if (typeof onClick === 'function') {
        onClick(evt);
      }
    }

  },

  setFilter: function(filterFunction, layerName) {
    //take in a new filter function.
    //Propagate to child layers.

    //Add filter to all child layers if no layer is specified.
    for (var key in this.layers) {
      var layer = this.layers[key];

      if (layerName){
        if(key.toLowerCase() == layerName.toLowerCase()){
          layer.options.filter = filterFunction; //Assign filter to child layer, only if name matches
          //After filter is set, the old feature hashes are invalid.  Clear them for next draw.
          layer.clearLayerFeatureHash();
          //layer.clearTileFeatureHash();
        }
      }
      else{
        layer.options.filter = filterFunction; //Assign filter to child layer
        //After filter is set, the old feature hashes are invalid.  Clear them for next draw.
        layer.clearLayerFeatureHash();
        //layer.clearTileFeatureHash();
      }
    }
  },

  /**
   * Take in a new style function and propogate to child layers.
   * If you do not set a layer name, it resets the style for all of the layers.
   * @param styleFunction
   * @param layerName
   */
  setStyle: function(styleFn, layerName) {
    for (var key in this.layers) {
      var layer = this.layers[key];
      if (layerName) {
        if(key.toLowerCase() == layerName.toLowerCase()) {
          layer.setStyle(styleFn);
        }
      } else {
        layer.setStyle(styleFn);
      }
    }
  },

  featureSelected: function(mvtFeature) {
    if (this.options.mutexToggle) {
      if (this._selectedFeature) {
        this._selectedFeature.deselect();
      }
      this._selectedFeature = mvtFeature;
    }
    if (this.options.onSelect) {
      this.options.onSelect(mvtFeature);
    }
  },

  featureDeselected: function(mvtFeature) {
    if (this.options.mutexToggle && this._selectedFeature) {
      this._selectedFeature = null;
    }
    if (this.options.onDeselect) {
      this.options.onDeselect(mvtFeature);
    }
  },

  _pbfLoaded: function() {
    //Fires when all tiles from this layer have been loaded and drawn (or 404'd).

    //Make sure manager layer is always in front
    this.bringToFront();

    //See if there is an event to execute
    var self = this;
    var onTilesLoaded = self.options.onTilesLoaded;

    if (onTilesLoaded && typeof onTilesLoaded === 'function' && this._triggerOnTilesLoadedEvent === true) {
      onTilesLoaded(this);
    }
    self._triggerOnTilesLoadedEvent = true; //reset - if redraw() is called with the optinal 'false' parameter to temporarily disable the onTilesLoaded event from firing.  This resets it back to true after a single time of firing as 'false'.
  }

});


if (typeof(Number.prototype.toRad) === "undefined") {
  Number.prototype.toRad = function() {
    return this * Math.PI / 180;
  }
}

function getTileURL(lat, lon, zoom) {
  var xtile = parseInt(Math.floor( (lon + 180) / 360 * (1<<zoom) ));
  var ytile = parseInt(Math.floor( (1 - Math.log(Math.tan(lat.toRad()) + 1 / Math.cos(lat.toRad())) / Math.PI) / 2 * (1<<zoom) ));
  return "" + zoom + ":" + xtile + ":" + ytile;
}

function tileLoaded(pbfSource, ctx) {
  pbfSource.loadedTiles[ctx.id] = ctx;
}

function parseVT(vt){
  for (var key in vt.layers) {
    var lyr = vt.layers[key];
    parseVTFeatures(lyr);
  }
  return vt;
}

function parseVTFeatures(vtl){
  vtl.parsedFeatures = [];
  var features = vtl._features;
  for (var i = 0, len = features.length; i < len; i++) {
    var vtf = vtl.feature(i);
    vtf.coordinates = vtf.loadGeometry();
    vtl.parsedFeatures.push(vtf);
  }
  return vtl;
}

},{"./MVTLayer":"/Users/spatialdev/Documents/GitHub/GeoForce/GeoAngular/app/lib/Leaflet.MapboxVectorTile/src/MVTLayer.js","./MVTUtil":"/Users/spatialdev/Documents/GitHub/GeoForce/GeoAngular/app/lib/Leaflet.MapboxVectorTile/src/MVTUtil.js","pbf":"/Users/spatialdev/Documents/GitHub/GeoForce/GeoAngular/app/lib/Leaflet.MapboxVectorTile/node_modules/pbf/index.js","point-geometry":"/Users/spatialdev/Documents/GitHub/GeoForce/GeoAngular/app/lib/Leaflet.MapboxVectorTile/node_modules/point-geometry/index.js","vector-tile":"/Users/spatialdev/Documents/GitHub/GeoForce/GeoAngular/app/lib/Leaflet.MapboxVectorTile/node_modules/vector-tile/index.js"}],"/Users/spatialdev/Documents/GitHub/GeoForce/GeoAngular/app/lib/Leaflet.MapboxVectorTile/src/MVTUtil.js":[function(require,module,exports){
/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *       on 8/15/14.
 */
var Util = module.exports = {};

Util.getContextID = function(ctx) {
  return [ctx.zoom, ctx.tile.x, ctx.tile.y].join(":");
};

/**
 * Default function that gets the id for a layer feature.
 * Sometimes this needs to be done in a different way and
 * can be specified by the user in the options for L.TileLayer.MVTSource.
 *
 * @param feature
 * @returns {ctx.id|*|id|string|jsts.index.chain.MonotoneChain.id|number}
 */
Util.getIDForLayerFeature = function(feature) {
  return feature.properties.id;
};

Util.getJSON = function(url, callback) {
  var xmlhttp = typeof XMLHttpRequest !== 'undefined' ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
  xmlhttp.onreadystatechange = function() {
    var status = xmlhttp.status;
    if (xmlhttp.readyState === 4 && status >= 200 && status < 300) {
      var json = JSON.parse(xmlhttp.responseText);
      callback(null, json);
    } else {
      callback( { error: true, status: status } );
    }
  };
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
};

},{}],"/Users/spatialdev/Documents/GitHub/GeoForce/GeoAngular/app/lib/Leaflet.MapboxVectorTile/src/StaticLabel/StaticLabel.js":[function(require,module,exports){
/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *       on 7/31/14.
 */
var Util = require('../MVTUtil');
module.exports = StaticLabel;

function StaticLabel(mvtFeature, ctx, latLng, style) {
  var self = this;
  this.mvtFeature = mvtFeature;
  this.map = mvtFeature.map;
  this.zoom = ctx.zoom;
  this.latLng = latLng;
  this.selected = false;

  if (mvtFeature.linkedFeature) {
    var linkedFeature = mvtFeature.linkedFeature();
    if (linkedFeature && linkedFeature.selected) {
      self.selected = true;
    }
  }

  init(self, mvtFeature, ctx, latLng, style)
}

function init(self, mvtFeature, ctx, latLng, style) {
  var ajaxData = mvtFeature.ajaxData;
  var sty = self.style = style.staticLabel(mvtFeature, ajaxData);
  var icon = self.icon = L.divIcon({
    className: sty.cssClass || 'label-icon-text',
    html: sty.html,
    iconSize: sty.iconSize || [50,50]
  });

  self.marker = L.marker(latLng, {icon: icon}).addTo(self.map);

  if (self.selected) {
    self.marker._icon.classList.add(self.style.cssSelectedClass || 'label-icon-text-selected');
  }

  self.marker.on('click', function(e) {
    self.toggle();
  });

  self.map.on('zoomend', function(e) {
    var newZoom = e.target.getZoom();
    if (self.zoom !== newZoom) {
      self.map.removeLayer(self.marker);
    }
  });
}


StaticLabel.prototype.toggle = function() {
  if (this.selected) {
    this.deselect();
  } else {
    this.select();
  }
};

StaticLabel.prototype.select = function() {
  this.selected = true;
  this.marker._icon.classList.add(this.style.cssSelectedClass || 'label-icon-text-selected');
  var linkedFeature = this.mvtFeature.linkedFeature();
  if (!linkedFeature.selected) linkedFeature.select();
};

StaticLabel.prototype.deselect = function() {
  this.selected = false;
  this.marker._icon.classList.remove(this.style.cssSelectedClass || 'label-icon-text-selected');
  var linkedFeature = this.mvtFeature.linkedFeature();
  if (linkedFeature.selected) linkedFeature.deselect();
};

StaticLabel.prototype.remove = function() {
  if (!this.map || !this.marker) return;
  this.map.removeLayer(this.marker);
};

},{"../MVTUtil":"/Users/spatialdev/Documents/GitHub/GeoForce/GeoAngular/app/lib/Leaflet.MapboxVectorTile/src/MVTUtil.js"}],"/Users/spatialdev/Documents/GitHub/GeoForce/GeoAngular/app/lib/featurelabel/FeatureSet.js":[function(require,module,exports){
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

},{"./Label.js":"/Users/spatialdev/Documents/GitHub/GeoForce/GeoAngular/app/lib/featurelabel/Label.js","./featurelabel":"/Users/spatialdev/Documents/GitHub/GeoForce/GeoAngular/app/lib/featurelabel/featurelabel.js"}],"/Users/spatialdev/Documents/GitHub/GeoForce/GeoAngular/app/lib/featurelabel/Label.js":[function(require,module,exports){
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

},{}],"/Users/spatialdev/Documents/GitHub/GeoForce/GeoAngular/app/lib/featurelabel/featurelabel.js":[function(require,module,exports){
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

},{"./leaflet-patch":"/Users/spatialdev/Documents/GitHub/GeoForce/GeoAngular/app/lib/featurelabel/leaflet-patch.js"}],"/Users/spatialdev/Documents/GitHub/GeoForce/GeoAngular/app/lib/featurelabel/leaflet-patch.js":[function(require,module,exports){
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
},{"./featurelabel":"/Users/spatialdev/Documents/GitHub/GeoForce/GeoAngular/app/lib/featurelabel/featurelabel.js"}],"/Users/spatialdev/Documents/GitHub/GeoForce/GeoAngular/app/scripts/app.js":[function(require,module,exports){
/**
 * This is the entry point of the application. We declare the main module here and then configure the main router
 * that creates corresponding views. The array parameter for module declares this module's dependencies.
 */
var GeoAngular = angular.module('GeoAngular', ['angularFileUpload', 'ngCookies', 'ngResource', 'ngSanitize', 'ngRoute', 'ui.router', 'ngAnimate', 'ui.bootstrap', 'ui.slider']);

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
    .when('/default', '/map@0.1,0.1,2(satellite,gadm0)')
    .when('/phl', '/map@11.759815,121.893311,6(redcross,phl)')
    .otherwise(localStorage.getItem('defaultRoute') || '/map@0,0,2(satellite,gadm0)');

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
require('../lib/Leaflet.MapboxVectorTile/src/MVTSource.js');


},{"../lib/Leaflet.MapboxVectorTile/src/MVTSource.js":"/Users/spatialdev/Documents/GitHub/GeoForce/GeoAngular/app/lib/Leaflet.MapboxVectorTile/src/MVTSource.js","./controllers/basemaps":"/Users/spatialdev/Documents/GitHub/GeoForce/GeoAngular/app/scripts/controllers/basemaps.js","./controllers/breadcrumbs":"/Users/spatialdev/Documents/GitHub/GeoForce/GeoAngular/app/scripts/controllers/breadcrumbs.js","./controllers/details":"/Users/spatialdev/Documents/GitHub/GeoForce/GeoAngular/app/scripts/controllers/details.js","./controllers/export":"/Users/spatialdev/Documents/GitHub/GeoForce/GeoAngular/app/scripts/controllers/export.js","./controllers/filters":"/Users/spatialdev/Documents/GitHub/GeoForce/GeoAngular/app/scripts/controllers/filters.js","./controllers/info":"/Users/spatialdev/Documents/GitHub/GeoForce/GeoAngular/app/scripts/controllers/info.js","./controllers/layers":"/Users/spatialdev/Documents/GitHub/GeoForce/GeoAngular/app/scripts/controllers/layers.js","./controllers/legend":"/Users/spatialdev/Documents/GitHub/GeoForce/GeoAngular/app/scripts/controllers/legend.js","./controllers/main":"/Users/spatialdev/Documents/GitHub/GeoForce/GeoAngular/app/scripts/controllers/main.js","./controllers/map":"/Users/spatialdev/Documents/GitHub/GeoForce/GeoAngular/app/scripts/controllers/map.js","./controllers/navbar":"/Users/spatialdev/Documents/GitHub/GeoForce/GeoAngular/app/scripts/controllers/navbar.js","./controllers/search":"/Users/spatialdev/Documents/GitHub/GeoForce/GeoAngular/app/scripts/controllers/search.js","./controllers/side-view":"/Users/spatialdev/Documents/GitHub/GeoForce/GeoAngular/app/scripts/controllers/side-view.js","./controllers/stories":"/Users/spatialdev/Documents/GitHub/GeoForce/GeoAngular/app/scripts/controllers/stories.js","./controllers/theme":"/Users/spatialdev/Documents/GitHub/GeoForce/GeoAngular/app/scripts/controllers/theme.js","./controllers/upload":"/Users/spatialdev/Documents/GitHub/GeoForce/GeoAngular/app/scripts/controllers/upload.js","./controllers/zoom-extent":"/Users/spatialdev/Documents/GitHub/GeoForce/GeoAngular/app/scripts/controllers/zoom-extent.js","./services/Donuts":"/Users/spatialdev/Documents/GitHub/GeoForce/GeoAngular/app/scripts/services/Donuts.js","./services/LayerConfig":"/Users/spatialdev/Documents/GitHub/GeoForce/GeoAngular/app/scripts/services/LayerConfig.js","./services/StoriesConfig":"/Users/spatialdev/Documents/GitHub/GeoForce/GeoAngular/app/scripts/services/StoriesConfig.js","./services/Vector/VectorProvider":"/Users/spatialdev/Documents/GitHub/GeoForce/GeoAngular/app/scripts/services/Vector/VectorProvider.js"}],"/Users/spatialdev/Documents/GitHub/GeoForce/GeoAngular/app/scripts/controllers/basemaps.js":[function(require,module,exports){
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
},{}],"/Users/spatialdev/Documents/GitHub/GeoForce/GeoAngular/app/scripts/controllers/breadcrumbs.js":[function(require,module,exports){
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

},{}],"/Users/spatialdev/Documents/GitHub/GeoForce/GeoAngular/app/scripts/controllers/details.js":[function(require,module,exports){
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

      if($scope.groupings.hasOwnProperty('Project Risk')==true){
        $scope.groupings['Project Risk'] = SortByProjectRisk($scope.groupings['Project Risk']);
      };

      if($scope.groupings.hasOwnProperty('Disasters')==true){
        $scope.groupings['Disasters'] = SoryByDisaster($scope.groupings['Disasters']);
      };

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

  var SortByProjectRisk = function(arr){
    arr.sort(function (a, b) {
      if (config.ProjectRiskOrder[a.overall_assessment__c] < config.ProjectRiskOrder[b.overall_assessment__c]) {
        return 1;
      }
      if (config.ProjectRiskOrder[a.overall_assessment__c] > config.ProjectRiskOrder[b.overall_assessment__c]) {
        return -1;
      }
      // a must be equal to b
      return 0;
    });

    return arr;
  };
  var SoryByDisaster = function(arr){
    arr.sort(function (a, b) {
      if (config.DisasterOrder[a.iroc_status__c] < config.DisasterOrder[b.iroc_status__c]) {
        return 1;
      }
      if (config.DisasterOrder[a.iroc_status__c] > config.DisasterOrder[b.iroc_status__c]) {
        return -1;
      }
      // in case of a tie; order by date
      return new Date(b.date__c) - new Date(a.date__c);

    });

    return arr;
  };


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
    if ($scope.details.requestsForAssistance && angular.isArray($scope.details.requestsForAssistance)) {
      //Filter/Format
      $scope.details.requestsForAssistance = $scope.details.requestsForAssistance.map(function (rfa) {
        return removeUnwantedItems(formatDetails(rfa, "RFA"), "RFA");
      });
    }

    if ($scope.details.indicators && angular.isArray($scope.details.indicators)) {
      //Filter/Format
      $scope.details.indicators = $scope.details.indicators.map(function (indicator) {
        return removeUnwantedItems(formatDetails(indicator, "indicator"), "indicator");
      });
    }

    if ($scope.details.risks && angular.isArray($scope.details.risks) === true) {
      //Filter/Format
      $scope.details.risks = $scope.details.risks.map(function (risk) {
        return removeUnwantedItems(formatDetails(risk, "risk"), "risk");
      });
    }

    if ($scope.details.statuses && angular.isArray($scope.details.statuses)) {
      //Filter/Format
      $scope.details.statuses = $scope.details.statuses.map(function (status) {
        return removeUnwantedItems(formatDetails(status, "status"), "status");
      });
    }

    //Need to wait until details panel switches modes, and then calculate the size.
    setTimeout(function () {
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
    else if (type === 'projectRisk' || type === 'risk') {
      blacklistDictionary = config.unwantedProjectRiskDetails;
    }
    else if (type === 'projectHealth' || type === 'status') {
      blacklistDictionary = config.unwantedProjectHealthDetails;
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
    else if (type === 'projectRisk' || type === 'risk') {
      formattingDictionary = config.projectRiskDetailsFormatting;
    }
    else if (type === 'projectHealth' || type === 'status') {
      formattingDictionary = config.projectHealthDetailsFormatting;
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

},{}],"/Users/spatialdev/Documents/GitHub/GeoForce/GeoAngular/app/scripts/controllers/export.js":[function(require,module,exports){
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

},{}],"/Users/spatialdev/Documents/GitHub/GeoForce/GeoAngular/app/scripts/controllers/filters.js":[function(require,module,exports){
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

},{}],"/Users/spatialdev/Documents/GitHub/GeoForce/GeoAngular/app/scripts/controllers/info.js":[function(require,module,exports){
/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *       on 3/27/14.
 */

module.exports = angular.module('GeoAngular').controller('InfoCtrl', function($scope) {
  $scope.params = $stateParams;
});
},{}],"/Users/spatialdev/Documents/GitHub/GeoForce/GeoAngular/app/scripts/controllers/layers.js":[function(require,module,exports){
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
  //$scope.themecountLayer = LayerConfig.themecount;

  $scope.setBadges = function(bool) {
    //RW - TODO - Implement this option for vector tiles.
    //if (bool) {
    //  $scope.themeLayer.active = false;
    //} else {
    //  $scope.themeLayer.active = true;
    //}
    //$scope.toggleMapLayer('themecount', $scope.themecountLayer);
    //$scope.toggleMapLayer('theme', $scope.themeLayer);

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


},{}],"/Users/spatialdev/Documents/GitHub/GeoForce/GeoAngular/app/scripts/controllers/legend.js":[function(require,module,exports){
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
      if(l === 'gadm0' || l === 'theme'){
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

},{}],"/Users/spatialdev/Documents/GitHub/GeoForce/GeoAngular/app/scripts/controllers/main.js":[function(require,module,exports){
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

},{}],"/Users/spatialdev/Documents/GitHub/GeoForce/GeoAngular/app/scripts/controllers/map.js":[function(require,module,exports){
/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *     on Mon Mar 17 2014
 */

module.exports = angular.module('GeoAngular').controller('MapCtrl', function ($scope, $rootScope, $state, $stateParams, LayerConfig, VectorProvider, $http) {
  var map = L.map('map');
  var firstLoad = true;

  $scope.params = $stateParams;
  $scope.blur = '';
  $scope.grayout = ''; //use this class to gray out the map, such as when the country selector menu is active

  $scope.toggleState = function(stateName) {
    var state = $state.current.name !== stateName ? stateName : 'main';
    $state.go(state, $stateParams);
  };

  var lastLayersStr = '';
  var lastBasemapUrl = null;
  var basemapLayer = null;
  var layersStr = null;
  var overlayNames = [];
  var overlays = [];
  var overlays_dictionary = {};
  var theme = null;
  var filters = null;

  function redraw() {
    var lat = parseFloat($stateParams.lat)   || 0;
    var lng = parseFloat($stateParams.lng)   || 0;
    var zoom = parseFloat($stateParams.zoom) || 8;
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


    if (lastBasemapUrl !== basemapUrl && typeof map === 'object') {
      if (basemapLayer) {
        map.removeLayer(basemapLayer);
      }
      basemapLayer = L.tileLayer(basemapUrl).addTo(map);

      basemapLayer.on('load', function () {
        //Move to back
        basemapLayer.bringToBack();
      });

    }

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

    var c = $scope.center = {
      lat: lat,
      lng: lng,
      zoom: zoom
    };

    if (typeof map === 'object' && (c.lat != 0 && c.lng !=0)) {
      map.setView([c.lat, c.lng], zoom);
    }


    if ((theme != $stateParams.theme || filters != $stateParams.filters) || firstLoad === true) {

      firstLoad = false;

      //Update local variables
      theme = $stateParams.theme;
      filters = $stateParams.filters;

      //Call the 'onChanged' function
      onThemeChanged($stateParams.theme);
      onFiltersChanged($stateParams.filters);
    }

    broadcastBBox();
    lastLayersStr = layersStr;
    lastBasemapUrl = basemapUrl;
  }

  //For vector tile choropleths, ask for new data .json from the server
  onThemeChanged($stateParams.theme);


  /***
   * Broadcast Listeners.
   */
  $scope.$on('route-update', function() {
    if ($scope.blur === 'blur' && $state.current.name !== 'landing') {
      $scope.blur = '';
    }

    var c;
    if(!$scope.center){
      var lat = parseFloat($stateParams.lat)   || 0;
      var lng = parseFloat($stateParams.lng)   || 0;
      var zoom = parseFloat($stateParams.zoom) || 8;

      c = $scope.center = {
        lat: lat,
        lng: lng,
        zoom: zoom
      };
    }
    else{
      c = $scope.center;
    }

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

    var southWest = { lat: extent[0][1], lng: extent[0][0] };
    var northEast = { lat: extent[2][1], lng: extent[2][0] };

    $scope.bounds = L.latLngBounds(southWest, northEast);

    //Zoom to bounds
    map.fitBounds($scope.bounds);
  };

  //This take a leaflet bounds object and handles it.
  delete $stateParams['zoom-extent'];
  $scope.zoomToBounds = function(bounds){

    //Build new bounds object
    $scope.bounds = L.latLngBounds(bounds.getSouthWest(), bounds.getNorthEast());

    //Zoom to bounds
    map.fitBounds($scope.bounds);
  };




    function broadcastBBox() {
    //NH TODO Fixme. Find a better solution than a spin lock.
    if (!wait) {
      wait = true;
      setTimeout(function(){

          //Get the MIN/MAX Tile ZYX extents.
          //If they haven't chagned, then don't proceed.

          //When the page loads, no zoom or center has been set, so don't get bounds until that has happened

          if(!map.getZoom()) { return; }
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
          $rootScope.bbox = str; //save the bbox string to rootScope so VectorTile styling functions have access


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

  window.map = map;
  map.on('moveend', function () { // move is good too
    var c = map.getCenter();
    var lat = c.lat.toFixed(6);
    var lng = c.lng.toFixed(6);
    var zoom = map.getZoom().toString();

    if (   $stateParams.lat  !== lat
      || $stateParams.lng  !== lng
      || $stateParams.zoom !== zoom ) {


      $stateParams.lat = lat;
      $stateParams.lng = lng;
      $stateParams.zoom = zoom;
      mapMoveEnd = true;
      $state.go($state.current.name, $stateParams);
      broadcastBBox();

      //Update ECOS Details - Usually this happens when tiles finish loading after a pan.  But sometimes if the tiles are loaded/cached, then the event doesn't fire after the map stops moving.
      //updateECOSData(overlayNames);
    }
  });

  //merge vector tiles in the new view with .json stats
  map.on('moveend', function () {
    //if ($rootScope && $rootScope.vtData) {
    //  var data = $rootScope.vtData;
    //  updateECOSData(data, false); //false means the theme didn't change, so don't clear old features.
    //}

  });

  //Connect the layout onresize end event
  try {
      window.layout.panes.center.bind("layoutpaneonresize_end", function () {
          map.invalidateSize();
      });
  }catch(e) {
    //Nothing
  }





  function drawOverlays() {

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

        /**
         * Mapnik Vector Tile Format (.PBF)
         */
        if (typeof LayerConfig[overlayName] === 'object'
          && LayerConfig[overlayName].type.toLowerCase() === 'pbf') {

          var vecRes = VectorProvider.createResource(overlayName);
          var layer = vecRes.getLayer();
          layer.overlayName = overlayName;

        }

        // try for WMS (not a vector layer)
        // if things get more fancy with wms, it should get its own factory
        else if (typeof LayerConfig[overlayName] === 'object'
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
        overlays_dictionary[overlayName] = layer; //keep a dictionary reference for faster fetching in UpdateECOSData

      }

      // there are more overlays left in the list, less layers specified in route
      // we need to remove those too.
      for(var len2 = overlays.length; i < len2; ++i) {
        if (overlays[i].destroyResource) overlays[i].destroyResource();
        map.removeLayer(overlays[i]);
        delete overlays_dictionary[overlays[i].overlayName]; //delete dictionary reference for faster fetching in UpdateECOSData
        delete overlays[i];

      }


  }

  /**
   * Used privately to rebuild the theme count layer.
   */
  function resetThemeCount() {

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

  }

  /**
   * When the theme changes, this function will be fired.
   * @param theme
   */
  function onThemeChanged(theme){
    //reset theme count
    resetThemeCount();

    var layer = overlays_dictionary["gadm0"];

    if(layer){
      //For vector tile choropleths, ask for new data .json from the server
      getECOSProperties(function (data) {

        if(data && data.features) {

          var guids = {};

          angular.forEach(data.features, function (dataItem, dataKey) {
            guids[dataItem.properties.guid] = dataItem.properties;
          });

          $rootScope.vtData = guids; //Store the data to be merged with vector tile layer.  In config/vectortiles.js, the MVT choropleth layers will attempt to merge this data in when tiles finish loading (any time new tiles are requested, like zoomin/out/pan)

          var layers = layer.getLayers();
          var vtLayer = layers["GADM_2014"];
          var vtLabelLayer = layers["GADM_2014_label"];

          //Clear ecos property from MVTFeature
          clearFeatureProperties(vtLayer.features);
          //Clear ecos property from Label Layer
          clearFeatureProperties(vtLabelLayer.features);

          //Update Layer(s) style and redraw
          vtLayer.clearLayerFeatureHash(); //Force VTs to be reparsed.
          vtLabelLayer.clearLayerFeatureHash();

          //layer.setStyle(layer.style); //feed back in the same style
          layer.redraw(false); //false means that this redraw won't trigger the onTilesLoaded event.
          //updateECOSData(guids, true); //true is for ThemeChanged boolean
        }

      })
    }



    //redraw map overlays - vector tiles need to be re-styled with new theme data.
    //redrawMapOverlays(overlayNames);
  }

  /**
   * When the filters change, this function will be fired.
   * @param theme
   */
  function onFiltersChanged(filters){

  }

  function redrawMapOverlays(layerNames){
    map.eachLayer(function (layer) {
      if(layerNames.indexOf(layer.overlayName) > -1){
        layer.redraw();
      }
    });
  }

  /**
   * Take data/properties from the server and merge them in with a vector tiles layer.
   * @param ecosData - the data
   * @param layerNames - any layer names to apply the data to
   * @newTheme - boolean. If true, a new theme has been selected, so existing VT propeties will be cleared.  If false, then we can skip features that already have been 'filled' and worry about new ones.
   */
  function updateECOSData(ecosData, newTheme) {

      var layer = overlays_dictionary["gadm0"];

      if(layer){
        if (ecosData) {
          var layers = layer.getLayers();

          //Update VTFSource filter
          //layer.setFilter(function(mvt, ctx){
          //  //Filter checks if feature has ecos properties.
          //  return ($rootScope.vtData && $rootScope.vtData[mvt.properties.guid]) ? true : false;
          //})

          //If any features are returned, loop thru the vtfs and apply these values, restyle.
          mergeECOSProperties(layers, ecosData, newTheme);



          //Update Layer(s) style and redraw
          layer.setStyle(layer.style); //feed back in the same style
          layer.redraw(false); //false means that this redraw won't trigger the onTilesLoaded event.
        }
      }

  }

  /***
   *
   * When the app starts, or when the filters change, fetch the .json file that contains the counts for all of the districts for a given Administrative boundary level
   * Currently, each of these files will be small enough to bulk load them a single time, as opposed to when the user pans the map.
   * These files will be used to update the vector tiles choropleth map.
   *
   * @param $http
   * @param $rootScope
   * @param cb
   */
  function getECOSProperties (cb){
    //This should fetch data from the server that pertains to the features loaded in the current extent.
    //var url = "http://localhost:3001/services/custom/custom_operation?name=getaggregatedthemefeaturesbyextent&format=geojson&bbox=:bbox&theme=:theme&gadm_level=0&filters=:filters";
    var url = "../services/custom/custom_operation?name=getallaggregatedthemefeatures&format=geojson&theme=:theme&gadm_level=0&filters=:filters";
    //url = url.replace(":bbox", $rootScope.bbox);

    if ($rootScope.$stateParams.filters) {
      filters = $rootScope.$stateParams.filters;
      //Add filters to URL.
      url = url.replace(":filters", filters);
    }
    else {
      url = url.replace("&filters=:filters", ""); //no filters.  Remove
    }

    var theme = $rootScope.$stateParams.theme || 'project';
    url = url.replace(":theme", theme);

    //When done, call the cb (callback) function
    $http.get(url, {cache: true}).success(cb).error(function (err) {
      console.log("err");
    });
  }

  //Take an MVTLayer(s) and add in properties from a web service call
  //newTheme is a boolean that tells us whether to clear existing properties or keep what we've got and just add to the set.
  function mergeECOSProperties(MVTLayers, data, newTheme){
    if (MVTLayers) {

      var fullStart = new Date();

      //Grab the current theme.
      var theme = ($rootScope && $rootScope.$stateParams && $rootScope.$stateParams.theme) || 'project';

      for (var layer in MVTLayers) {
        if (layer && MVTLayers[layer].features) {

          //optionally clear out old ECOS properties.
          if (newTheme === true) {
            //Clear ecos property from MVTFeature
            clearFeatureProperties(MVTLayers[layer].features);
            //"unlink" the data - set the linked property to false.
          }

          //Iterate over data, use the ID to attempt to line up data in MVTLayer.features dictionary (id is the key)
          angular.forEach(Object.keys(data), function (key) { //.map(function(item){ return !item.properties.isMapped; })
            var vtf = MVTLayers[layer].features[key];

            //mark as linked
            data.isLinked = true;

            if (vtf) {
              vtf.properties.theme = theme;
              vtf.properties.ecos_properties = {};
              vtf.properties.ecos_properties[theme] = data[key];
            }
          });

        }
      }

      var msDiff = new Date().getTime() - new Date(fullStart).getTime(); //Difference in ms
      console.log("Merge Time: " + msDiff);
    }
  }

  //As we swap ECOS properties out on the vector tile layer, clear out the old properties so we don't get residual theme values from old themes.
  function clearFeatureProperties(features){

    angular.forEach(features, function (vtf, vtfkey) {
      if(vtf.properties) {
        vtf.properties.ecos_properties = {};
        vtf.theme = "";
      }

      //Remove Old labels
      vtf.removeLabel();

    });

  }

});

},{}],"/Users/spatialdev/Documents/GitHub/GeoForce/GeoAngular/app/scripts/controllers/navbar.js":[function(require,module,exports){
module.exports = angular.module('GeoAngular').controller('NavBarCtrl', function($scope, $state, $stateParams) {

  $scope.params = $stateParams;

});

},{}],"/Users/spatialdev/Documents/GitHub/GeoForce/GeoAngular/app/scripts/controllers/search.js":[function(require,module,exports){
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

    //When a user clicks one of the search result items
    $scope.handleSearchResultClick = function(properties){
        //Send to deatils panel
        sendProjectToDetailsPanel(properties);

        //If we have a guid, then try to zoom to it.
        if(properties.location__r_gis_geo_id__c && properties.level){
            zoomToGUID(properties.location__r_gis_geo_id__c, properties.level);
        }
    };

    function sendProjectToDetailsPanel (properties) {
      $rootScope.$broadcast('details', {feature: {properties: properties}});
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

},{}],"/Users/spatialdev/Documents/GitHub/GeoForce/GeoAngular/app/scripts/controllers/side-view.js":[function(require,module,exports){
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

},{}],"/Users/spatialdev/Documents/GitHub/GeoForce/GeoAngular/app/scripts/controllers/stories.js":[function(require,module,exports){
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
},{}],"/Users/spatialdev/Documents/GitHub/GeoForce/GeoAngular/app/scripts/controllers/theme.js":[function(require,module,exports){
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
      return routeLayer !== 'gadm0' && routeLayer !== 'theme';
    });
    $stateParams.layers = layersArr.join(',');
    $scope.setThemeQueryParam('none');
  };

  function ensureThemeCount() {
    if ($stateParams.layers.indexOf('gadm0') === -1 && $stateParams.layers.indexOf('theme') === -1) {
      $stateParams.layers += ',gadm0';
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

},{}],"/Users/spatialdev/Documents/GitHub/GeoForce/GeoAngular/app/scripts/controllers/upload.js":[function(require,module,exports){
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

},{}],"/Users/spatialdev/Documents/GitHub/GeoForce/GeoAngular/app/scripts/controllers/zoom-extent.js":[function(require,module,exports){
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

},{}],"/Users/spatialdev/Documents/GitHub/GeoForce/GeoAngular/app/scripts/services/Donuts.js":[function(require,module,exports){
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

},{}],"/Users/spatialdev/Documents/GitHub/GeoForce/GeoAngular/app/scripts/services/LayerConfig.js":[function(require,module,exports){
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
    require('../../../../Config/layers/projectrisk.js'),
    require('../../../../Config/layers/vectortiles.js')

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
  //this.themecount = {
  //  name: 'Theme Count',
  //  type: 'bboxgeojson',
  //  url: config.chubbsPath("services/custom/custom_operation?name=getaggregatedthemefeaturesbyid&format=geojson&theme=:theme&gadm_level=:level&ids=:ids&filters=:filters"),
  //  properties: {
  //    "styleFn": function (properties) {
  //      var style = {
  //        color: 'white',
  //        opacity: 1,
  //        fillOpacity: 0.07,
  //        weight: 1.5
  //      };
  //
  //      if (properties.theme == "disaster") {
  //        if (properties && properties.iroc_status__c) {
  //          switch (properties.iroc_status__c.toLowerCase()) {
  //            case "active":
  //              style.fillColor = "#cc0033";
  //              style.fillOpacity = 0.5;
  //              break;
  //            case "monitoring":
  //              style.fillColor = "#cc9900";
  //              style.fillOpacity = 0.5;
  //              break;
  //            case "inactive":
  //              style.fillColor = "white";
  //              style.fillOpacity = 0.0;
  //              break;
  //          }
  //        }
  //      }
  //      else if (properties.theme == "projectrisk") {
  //        if (properties && properties.overall_assessment__c) {
  //          switch (properties.overall_assessment__c.toLowerCase()) {
  //            case "critical":
  //              style.fillColor = "red";
  //              style.fillOpacity = 0.5;
  //              break;
  //            case "high":
  //              style.fillColor = "orange";
  //              style.fillOpacity = 0.5;
  //              break;
  //            case "medium":
  //              style.fillColor = "yellow";
  //              style.fillOpacity = 0.5;
  //              break;
  //            case "low":
  //              style.fillColor = "green";
  //              style.fillOpacity = 0.5;
  //              break;
  //          }
  //        }
  //      }
  //      else if (properties.theme == "projecthealth") {
  //        if (properties && properties.overall_status__c) {
  //          switch (properties.overall_status__c.toLowerCase()) {
  //            case "red":
  //              style.fillColor = "red";
  //              style.fillOpacity = 0.5;
  //              break;
  //            case "yellow":
  //              style.fillColor = "yellow";
  //              style.fillOpacity = 0.5;
  //              break;
  //            case "green":
  //              style.fillColor = "green";
  //              style.fillOpacity = 0.5;
  //              break;
  //            case "white":
  //              style.fillColor = "white";
  //              style.fillOpacity = 0.5;
  //              break;
  //          }
  //        }
  //      }
  //      return style;
  //    },
  //    "labelProperty": function (properties) {
  //      if (properties.theme == "disaster") {
  //        var color = "";
  //        var labelColor = "";
  //        if (properties && properties.iroc_status__c) {
  //          switch (properties.iroc_status__c.toLowerCase()) {
  //            case "active":
  //              color = "#cc0033";
  //              labelColor = "#fff";
  //              break;
  //            case "monitoring":
  //              color = "#e1bb25";
  //              labelColor = "#fff";
  //              break;
  //            case "inactive":
  //              color = "#bdbdbd";
  //              labelColor = "#000";
  //              break;
  //          }
  //        }
  //        return '<div class="featurelabel-icon-number"' + (color ? ' style="background-color: ' + color + ';color: ' + labelColor + '"' : '') + '><span>' + properties.theme_count + '</span></div>';
  //      }
  //      else {
  //        return '<div class="featurelabel-icon-number"><span>' + properties.theme_count + '</span></div>';
  //      }
  //    },
  //    "map-icon-size": function (properties) {
  //      //Return an array of 2 items. size of map icon
  //      return [35,35];
  //    },
  //    "detailsUrl": config.chubbsPath('services/custom/custom_operation?name=get:themebyguid&format=json&guids=:guids&gadm_level=:level&filters=:filters'),
  //    "onSelect": 'fetchFeatureDetails', // the BBoxGeoJSON method to call on select. (toggled on)
  //    "onDeselect": 'closeDetails', // featurelabel evaluates this string when a feature is toggled off
  //    "defaultTheme": 'project', // The default theme the layer uses. This is used if there is no theme query param.
  //    "legend": function (theme) {
  //      if (theme.toLowerCase() == 'disaster') {
  //        //disaster
  //        return '<img src="images/legend_disaster.png" alt="disaster legend" />';
  //      }
  //      else if (theme.toLowerCase() == 'projecthealth') {
  //        //project
  //        return '<img src="images/legend_projecthealth.png" alt="project health legend" />';
  //      }
  //      else if(theme.toLowerCase() == 'projectrisk') {
  //        return '<img src="images/legend_projectrisk.png" alt="project risk legend" />';
  //      }
  //      else if (theme.toLowerCase() == 'project') {
  //        return '<img src="images/legend_project.png" alt="project legend" />';
  //      }
  //    }
  //
  //  }
  //};

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

},{"../../../../Config/layers/all.js":"/Users/spatialdev/Documents/GitHub/GeoForce/Config/layers/all.js","../../../../Config/layers/basemaps.js":"/Users/spatialdev/Documents/GitHub/GeoForce/Config/layers/basemaps.js","../../../../Config/layers/disaster.js":"/Users/spatialdev/Documents/GitHub/GeoForce/Config/layers/disaster.js","../../../../Config/layers/other.js":"/Users/spatialdev/Documents/GitHub/GeoForce/Config/layers/other.js","../../../../Config/layers/project.js":"/Users/spatialdev/Documents/GitHub/GeoForce/Config/layers/project.js","../../../../Config/layers/projecthealth.js":"/Users/spatialdev/Documents/GitHub/GeoForce/Config/layers/projecthealth.js","../../../../Config/layers/projectrisk.js":"/Users/spatialdev/Documents/GitHub/GeoForce/Config/layers/projectrisk.js","../../../../Config/layers/vectortiles.js":"/Users/spatialdev/Documents/GitHub/GeoForce/Config/layers/vectortiles.js"}],"/Users/spatialdev/Documents/GitHub/GeoForce/GeoAngular/app/scripts/services/StoriesConfig.js":[function(require,module,exports){
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
    url: '/mapfolio/index.html#/map@12.768946,122.486572,6(ortho,gadm0,gdacs)?theme=disaster&details-panel=open&sf_id=a0Ed000000qZntUEAS',
    name: 'Typhoon Haiyan Response',
    date: '2013-10-12',
    thumbnail: 'images/stories/haiyan.png',
    keywords: 'Typhoon, Disaster Response, Haiyan, Disaster, AMEE'
  };
  this.ebola = {
    url: '/mapfolio/index.html#/map@15.072124,-3.460693,6(ortho,gadm0,gdacs)?theme=disaster',
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

},{}],"/Users/spatialdev/Documents/GitHub/GeoForce/GeoAngular/app/scripts/services/Vector/BBoxGeoJSON.js":[function(require,module,exports){
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

},{"../../../lib/featurelabel/FeatureSet":"/Users/spatialdev/Documents/GitHub/GeoForce/GeoAngular/app/lib/featurelabel/FeatureSet.js","./resource":"/Users/spatialdev/Documents/GitHub/GeoForce/GeoAngular/app/scripts/services/Vector/resource.js","./vector":"/Users/spatialdev/Documents/GitHub/GeoForce/GeoAngular/app/scripts/services/Vector/vector.js"}],"/Users/spatialdev/Documents/GitHub/GeoForce/GeoAngular/app/scripts/services/Vector/GeoJSON.js":[function(require,module,exports){
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

},{"./resource":"/Users/spatialdev/Documents/GitHub/GeoForce/GeoAngular/app/scripts/services/Vector/resource.js","./vector":"/Users/spatialdev/Documents/GitHub/GeoForce/GeoAngular/app/scripts/services/Vector/vector.js"}],"/Users/spatialdev/Documents/GitHub/GeoForce/GeoAngular/app/scripts/services/Vector/KML.js":[function(require,module,exports){
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

},{"./resource":"/Users/spatialdev/Documents/GitHub/GeoForce/GeoAngular/app/scripts/services/Vector/resource.js","./vector":"/Users/spatialdev/Documents/GitHub/GeoForce/GeoAngular/app/scripts/services/Vector/vector.js"}],"/Users/spatialdev/Documents/GitHub/GeoForce/GeoAngular/app/scripts/services/Vector/Resource.js":[function(require,module,exports){
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

},{"./vector":"/Users/spatialdev/Documents/GitHub/GeoForce/GeoAngular/app/scripts/services/Vector/vector.js"}],"/Users/spatialdev/Documents/GitHub/GeoForce/GeoAngular/app/scripts/services/Vector/VectorProvider.js":[function(require,module,exports){
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
  var PBF = require('./pbf');


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
    csv: CSV,
    pbf: PBF
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
        $rootScope.$broadcast('center-feature', feat);
      }
    }
    console.log(['featItinerary',featItinerary]);

    // if there are no features for the current bounding box
    //if (!featItinerary || featItinerary.length === 0) {
    //  return;
    //}

    /**
     * Center feature logic for breadcrumbs.
     */
    //for (var i=0, len=featItinerary.length; i < len; ++i) {
    //  var f = featItinerary[i];
    //  if (f.iscenter == true) {
    //    $rootScope.$broadcast('center-feature', f);
    //  }
    //}

    /**
     * BBoxGeoJSON logic
     */
    //for(var r = 0, len = vector.bboxResources.length; r < len; ++r) {
    //  vector.bboxResources[r].processFeatureItinerary(featItinerary);
    //}

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
        if (config.slice(config.length - 3).toLowerCase() === 'pbf') {
          return new PBF(config);
        }
        else if (config.slice(config.length - 3).toLowerCase() === 'kml') {
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
      //fetchFeatureItinerary();
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


},{"./BBoxGeoJSON":"/Users/spatialdev/Documents/GitHub/GeoForce/GeoAngular/app/scripts/services/Vector/BBoxGeoJSON.js","./GeoJSON":"/Users/spatialdev/Documents/GitHub/GeoForce/GeoAngular/app/scripts/services/Vector/GeoJSON.js","./KML":"/Users/spatialdev/Documents/GitHub/GeoForce/GeoAngular/app/scripts/services/Vector/KML.js","./Resource":"/Users/spatialdev/Documents/GitHub/GeoForce/GeoAngular/app/scripts/services/Vector/Resource.js","./csv":"/Users/spatialdev/Documents/GitHub/GeoForce/GeoAngular/app/scripts/services/Vector/csv.js","./pbf":"/Users/spatialdev/Documents/GitHub/GeoForce/GeoAngular/app/scripts/services/Vector/pbf.js","./vector":"/Users/spatialdev/Documents/GitHub/GeoForce/GeoAngular/app/scripts/services/Vector/vector.js"}],"/Users/spatialdev/Documents/GitHub/GeoForce/GeoAngular/app/scripts/services/Vector/csv.js":[function(require,module,exports){
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

},{"./resource":"/Users/spatialdev/Documents/GitHub/GeoForce/GeoAngular/app/scripts/services/Vector/resource.js","./vector":"/Users/spatialdev/Documents/GitHub/GeoForce/GeoAngular/app/scripts/services/Vector/vector.js"}],"/Users/spatialdev/Documents/GitHub/GeoForce/GeoAngular/app/scripts/services/Vector/pbf.js":[function(require,module,exports){
/**
 * Created by Ryan Whitley <rwhitley@spatialdev.com>
 *       on 12/15/14.
 */

var Resource = require('./resource');
var $rootScope = require('./vector').$rootScope;
var $http = require('./vector').$http;
var vector = require('./vector');

module.exports = PBF;

/**
 * A PBF Resource instantiates a MVTSource (Mapbox Vector Tile)
 *
 * @param config
 * @constructor
 */
function PBF(options) {
  this.options = options;
  this._onTilesLoaded = options.onTilesLoaded; //Store the real function in a local property.
  this._onClick = options.onClick; //Store the real function in a local property.
  this._onSelect = options.onSelect;  //Store the real function in a local property so we can overload it later with angular stuff.
  this._onFilter = options.filter; //Store the real function in a local property.

  var self = this;

  options.onTilesLoaded = function(MVTSource){

    if(self._onTilesLoaded) self._onTilesLoaded(MVTSource, $http, $rootScope);

  }

  options.onClick = function(evt){

    self._onClick(evt, $http, $rootScope, self);

  }

  options.onSelect = function(vtf){

    self._onSelect(vtf, self);

  }

  options.filter = function(vtf){

    return self._onFilter(vtf, $rootScope);

  }

  this.layer = new L.TileLayer.MVTSource(options);
}

PBF.prototype = Object.create(Resource.prototype);
PBF.prototype.constructor = PBF;

PBF.prototype.getLayer = function () {
  return this.layer;
};

PBF.prototype.fetchFeatureDetails = function(guid, level) {

  var detailsUrl = config.chubbsPath(this.options.detailsUrl);
  if (!detailsUrl) {
    console.error('We need a detailsUrl to fetchFeatureDetails');
    return;
  }

  var theme = $rootScope.$stateParams.theme || 'project';
  var themeName = $rootScope.themeNameHash[theme];
  if (typeof level === 'undefined' || level === null) {
    console.error('we need a level.');
  }

  var filters = 'null';
  if ($rootScope.$stateParams.filters) {
    filters = $rootScope.$stateParams.filters;
  }

  detailsUrl = detailsUrl.replace(':theme', theme)
    .replace(':guids', guid)
    .replace(':level', level)
    .replace(':filters', filters);

  $http.get(detailsUrl, {cache: true}).success(function (details) {
    var featureLayer = { feature: { properties: {}}};
    featureLayer.feature.properties.salesforce = {};
    featureLayer.feature.properties.salesforce[themeName] = details;
    $rootScope.$broadcast('details', featureLayer);

  }).error(function(err){
    console.error(JSON.stringify(err));
  });

};





},{"./resource":"/Users/spatialdev/Documents/GitHub/GeoForce/GeoAngular/app/scripts/services/Vector/resource.js","./vector":"/Users/spatialdev/Documents/GitHub/GeoForce/GeoAngular/app/scripts/services/Vector/vector.js"}],"/Users/spatialdev/Documents/GitHub/GeoForce/GeoAngular/app/scripts/services/Vector/resource.js":[function(require,module,exports){
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

},{"./vector":"/Users/spatialdev/Documents/GitHub/GeoForce/GeoAngular/app/scripts/services/Vector/vector.js"}],"/Users/spatialdev/Documents/GitHub/GeoForce/GeoAngular/app/scripts/services/Vector/vector.js":[function(require,module,exports){
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




},{}],"/Users/spatialdev/Documents/GitHub/GeoForce/GeoAngular/node_modules/browserify/node_modules/buffer/index.js":[function(require,module,exports){
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */

var base64 = require('base64-js')
var ieee754 = require('ieee754')
var isArray = require('is-array')

exports.Buffer = Buffer
exports.SlowBuffer = Buffer
exports.INSPECT_MAX_BYTES = 50
Buffer.poolSize = 8192 // not used by this implementation

var kMaxLength = 0x3fffffff

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Note:
 *
 * - Implementation must support adding new properties to `Uint8Array` instances.
 *   Firefox 4-29 lacked support, fixed in Firefox 30+.
 *   See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *  - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *  - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *    incorrect length in some situations.
 *
 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they will
 * get the Object implementation, which is slower but will work correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = (function () {
  try {
    var buf = new ArrayBuffer(0)
    var arr = new Uint8Array(buf)
    arr.foo = function () { return 42 }
    return 42 === arr.foo() && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        new Uint8Array(1).subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
})()

/**
 * Class: Buffer
 * =============
 *
 * The Buffer constructor returns instances of `Uint8Array` that are augmented
 * with function properties for all the node `Buffer` API functions. We use
 * `Uint8Array` so that square bracket notation works as expected -- it returns
 * a single octet.
 *
 * By augmenting the instances, we can avoid modifying the `Uint8Array`
 * prototype.
 */
function Buffer (subject, encoding, noZero) {
  if (!(this instanceof Buffer))
    return new Buffer(subject, encoding, noZero)

  var type = typeof subject

  // Find the length
  var length
  if (type === 'number')
    length = subject > 0 ? subject >>> 0 : 0
  else if (type === 'string') {
    if (encoding === 'base64')
      subject = base64clean(subject)
    length = Buffer.byteLength(subject, encoding)
  } else if (type === 'object' && subject !== null) { // assume object is array-like
    if (subject.type === 'Buffer' && isArray(subject.data))
      subject = subject.data
    length = +subject.length > 0 ? Math.floor(+subject.length) : 0
  } else
    throw new TypeError('must start with number, buffer, array or string')

  if (this.length > kMaxLength)
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
      'size: 0x' + kMaxLength.toString(16) + ' bytes')

  var buf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Preferred: Return an augmented `Uint8Array` instance for best performance
    buf = Buffer._augment(new Uint8Array(length))
  } else {
    // Fallback: Return THIS instance of Buffer (created by `new`)
    buf = this
    buf.length = length
    buf._isBuffer = true
  }

  var i
  if (Buffer.TYPED_ARRAY_SUPPORT && typeof subject.byteLength === 'number') {
    // Speed optimization -- use set if we're copying from a typed array
    buf._set(subject)
  } else if (isArrayish(subject)) {
    // Treat array-ish objects as a byte array
    if (Buffer.isBuffer(subject)) {
      for (i = 0; i < length; i++)
        buf[i] = subject.readUInt8(i)
    } else {
      for (i = 0; i < length; i++)
        buf[i] = ((subject[i] % 256) + 256) % 256
    }
  } else if (type === 'string') {
    buf.write(subject, 0, encoding)
  } else if (type === 'number' && !Buffer.TYPED_ARRAY_SUPPORT && !noZero) {
    for (i = 0; i < length; i++) {
      buf[i] = 0
    }
  }

  return buf
}

Buffer.isBuffer = function (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b))
    throw new TypeError('Arguments must be Buffers')

  var x = a.length
  var y = b.length
  for (var i = 0, len = Math.min(x, y); i < len && a[i] === b[i]; i++) {}
  if (i !== len) {
    x = a[i]
    y = b[i]
  }
  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'binary':
    case 'base64':
    case 'raw':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function (list, totalLength) {
  if (!isArray(list)) throw new TypeError('Usage: Buffer.concat(list[, length])')

  if (list.length === 0) {
    return new Buffer(0)
  } else if (list.length === 1) {
    return list[0]
  }

  var i
  if (totalLength === undefined) {
    totalLength = 0
    for (i = 0; i < list.length; i++) {
      totalLength += list[i].length
    }
  }

  var buf = new Buffer(totalLength)
  var pos = 0
  for (i = 0; i < list.length; i++) {
    var item = list[i]
    item.copy(buf, pos)
    pos += item.length
  }
  return buf
}

Buffer.byteLength = function (str, encoding) {
  var ret
  str = str + ''
  switch (encoding || 'utf8') {
    case 'ascii':
    case 'binary':
    case 'raw':
      ret = str.length
      break
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      ret = str.length * 2
      break
    case 'hex':
      ret = str.length >>> 1
      break
    case 'utf8':
    case 'utf-8':
      ret = utf8ToBytes(str).length
      break
    case 'base64':
      ret = base64ToBytes(str).length
      break
    default:
      ret = str.length
  }
  return ret
}

// pre-set for values that may exist in the future
Buffer.prototype.length = undefined
Buffer.prototype.parent = undefined

// toString(encoding, start=0, end=buffer.length)
Buffer.prototype.toString = function (encoding, start, end) {
  var loweredCase = false

  start = start >>> 0
  end = end === undefined || end === Infinity ? this.length : end >>> 0

  if (!encoding) encoding = 'utf8'
  if (start < 0) start = 0
  if (end > this.length) end = this.length
  if (end <= start) return ''

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'binary':
        return binarySlice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase)
          throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.equals = function (b) {
  if(!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max)
      str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  return Buffer.compare(this, b)
}

// `get` will be removed in Node 0.13+
Buffer.prototype.get = function (offset) {
  console.log('.get() is deprecated. Access using array indexes instead.')
  return this.readUInt8(offset)
}

// `set` will be removed in Node 0.13+
Buffer.prototype.set = function (v, offset) {
  console.log('.set() is deprecated. Access using array indexes instead.')
  return this.writeUInt8(v, offset)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new Error('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; i++) {
    var byte = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(byte)) throw new Error('Invalid hex string')
    buf[offset + i] = byte
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  var charsWritten = blitBuffer(utf8ToBytes(string), buf, offset, length)
  return charsWritten
}

function asciiWrite (buf, string, offset, length) {
  var charsWritten = blitBuffer(asciiToBytes(string), buf, offset, length)
  return charsWritten
}

function binaryWrite (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  var charsWritten = blitBuffer(base64ToBytes(string), buf, offset, length)
  return charsWritten
}

function utf16leWrite (buf, string, offset, length) {
  var charsWritten = blitBuffer(utf16leToBytes(string), buf, offset, length, 2)
  return charsWritten
}

Buffer.prototype.write = function (string, offset, length, encoding) {
  // Support both (string, offset, length, encoding)
  // and the legacy (string, encoding, offset, length)
  if (isFinite(offset)) {
    if (!isFinite(length)) {
      encoding = length
      length = undefined
    }
  } else {  // legacy
    var swap = encoding
    encoding = offset
    offset = length
    length = swap
  }

  offset = Number(offset) || 0
  var remaining = this.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }
  encoding = String(encoding || 'utf8').toLowerCase()

  var ret
  switch (encoding) {
    case 'hex':
      ret = hexWrite(this, string, offset, length)
      break
    case 'utf8':
    case 'utf-8':
      ret = utf8Write(this, string, offset, length)
      break
    case 'ascii':
      ret = asciiWrite(this, string, offset, length)
      break
    case 'binary':
      ret = binaryWrite(this, string, offset, length)
      break
    case 'base64':
      ret = base64Write(this, string, offset, length)
      break
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      ret = utf16leWrite(this, string, offset, length)
      break
    default:
      throw new TypeError('Unknown encoding: ' + encoding)
  }
  return ret
}

Buffer.prototype.toJSON = function () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  var res = ''
  var tmp = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; i++) {
    if (buf[i] <= 0x7F) {
      res += decodeUtf8Char(tmp) + String.fromCharCode(buf[i])
      tmp = ''
    } else {
      tmp += '%' + buf[i].toString(16)
    }
  }

  return res + decodeUtf8Char(tmp)
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; i++) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function binarySlice (buf, start, end) {
  return asciiSlice(buf, start, end)
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; i++) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len;
    if (start < 0)
      start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0)
      end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start)
    end = start

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    return Buffer._augment(this.subarray(start, end))
  } else {
    var sliceLen = end - start
    var newBuf = new Buffer(sliceLen, undefined, true)
    for (var i = 0; i < sliceLen; i++) {
      newBuf[i] = this[i + start]
    }
    return newBuf
  }
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0)
    throw new RangeError('offset is not uint')
  if (offset + ext > length)
    throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUInt8 = function (offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function (offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function (offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function (offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function (offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
      ((this[offset + 1] << 16) |
      (this[offset + 2] << 8) |
      this[offset + 3])
}

Buffer.prototype.readInt8 = function (offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80))
    return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function (offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function (offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function (offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 4, this.length)

  return (this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16) |
      (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function (offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
      (this[offset + 1] << 16) |
      (this[offset + 2] << 8) |
      (this[offset + 3])
}

Buffer.prototype.readFloatLE = function (offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function (offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function (offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function (offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('buffer must be a Buffer instance')
  if (value > max || value < min) throw new TypeError('value is out of bounds')
  if (offset + ext > buf.length) throw new TypeError('index out of range')
}

Buffer.prototype.writeUInt8 = function (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert)
    checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = value
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; i++) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert)
    checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value
    this[offset + 1] = (value >>> 8)
  } else objectWriteUInt16(this, value, offset, true)
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert)
    checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = value
  } else objectWriteUInt16(this, value, offset, false)
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; i++) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert)
    checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = value
  } else objectWriteUInt32(this, value, offset, true)
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert)
    checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = value
  } else objectWriteUInt32(this, value, offset, false)
  return offset + 4
}

Buffer.prototype.writeInt8 = function (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert)
    checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = value
  return offset + 1
}

Buffer.prototype.writeInt16LE = function (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert)
    checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value
    this[offset + 1] = (value >>> 8)
  } else objectWriteUInt16(this, value, offset, true)
  return offset + 2
}

Buffer.prototype.writeInt16BE = function (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert)
    checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = value
  } else objectWriteUInt16(this, value, offset, false)
  return offset + 2
}

Buffer.prototype.writeInt32LE = function (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert)
    checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else objectWriteUInt32(this, value, offset, true)
  return offset + 4
}

Buffer.prototype.writeInt32BE = function (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert)
    checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = value
  } else objectWriteUInt32(this, value, offset, false)
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (value > max || value < min) throw new TypeError('value is out of bounds')
  if (offset + ext > buf.length) throw new TypeError('index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert)
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert)
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function (target, target_start, start, end) {
  var source = this

  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (!target_start) target_start = 0

  // Copy 0 bytes; we're done
  if (end === start) return
  if (target.length === 0 || source.length === 0) return

  // Fatal error conditions
  if (end < start) throw new TypeError('sourceEnd < sourceStart')
  if (target_start < 0 || target_start >= target.length)
    throw new TypeError('targetStart out of bounds')
  if (start < 0 || start >= source.length) throw new TypeError('sourceStart out of bounds')
  if (end < 0 || end > source.length) throw new TypeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length)
    end = this.length
  if (target.length - target_start < end - start)
    end = target.length - target_start + start

  var len = end - start

  if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < len; i++) {
      target[i + target_start] = this[i + start]
    }
  } else {
    target._set(this.subarray(start, start + len), target_start)
  }
}

// fill(value, start=0, end=buffer.length)
Buffer.prototype.fill = function (value, start, end) {
  if (!value) value = 0
  if (!start) start = 0
  if (!end) end = this.length

  if (end < start) throw new TypeError('end < start')

  // Fill 0 bytes; we're done
  if (end === start) return
  if (this.length === 0) return

  if (start < 0 || start >= this.length) throw new TypeError('start out of bounds')
  if (end < 0 || end > this.length) throw new TypeError('end out of bounds')

  var i
  if (typeof value === 'number') {
    for (i = start; i < end; i++) {
      this[i] = value
    }
  } else {
    var bytes = utf8ToBytes(value.toString())
    var len = bytes.length
    for (i = start; i < end; i++) {
      this[i] = bytes[i % len]
    }
  }

  return this
}

/**
 * Creates a new `ArrayBuffer` with the *copied* memory of the buffer instance.
 * Added in Node 0.12. Only available in browsers that support ArrayBuffer.
 */
Buffer.prototype.toArrayBuffer = function () {
  if (typeof Uint8Array !== 'undefined') {
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      return (new Buffer(this)).buffer
    } else {
      var buf = new Uint8Array(this.length)
      for (var i = 0, len = buf.length; i < len; i += 1) {
        buf[i] = this[i]
      }
      return buf.buffer
    }
  } else {
    throw new TypeError('Buffer.toArrayBuffer not supported in this browser')
  }
}

// HELPER FUNCTIONS
// ================

var BP = Buffer.prototype

/**
 * Augment a Uint8Array *instance* (not the Uint8Array class!) with Buffer methods
 */
Buffer._augment = function (arr) {
  arr.constructor = Buffer
  arr._isBuffer = true

  // save reference to original Uint8Array get/set methods before overwriting
  arr._get = arr.get
  arr._set = arr.set

  // deprecated, will be removed in node 0.13+
  arr.get = BP.get
  arr.set = BP.set

  arr.write = BP.write
  arr.toString = BP.toString
  arr.toLocaleString = BP.toString
  arr.toJSON = BP.toJSON
  arr.equals = BP.equals
  arr.compare = BP.compare
  arr.copy = BP.copy
  arr.slice = BP.slice
  arr.readUInt8 = BP.readUInt8
  arr.readUInt16LE = BP.readUInt16LE
  arr.readUInt16BE = BP.readUInt16BE
  arr.readUInt32LE = BP.readUInt32LE
  arr.readUInt32BE = BP.readUInt32BE
  arr.readInt8 = BP.readInt8
  arr.readInt16LE = BP.readInt16LE
  arr.readInt16BE = BP.readInt16BE
  arr.readInt32LE = BP.readInt32LE
  arr.readInt32BE = BP.readInt32BE
  arr.readFloatLE = BP.readFloatLE
  arr.readFloatBE = BP.readFloatBE
  arr.readDoubleLE = BP.readDoubleLE
  arr.readDoubleBE = BP.readDoubleBE
  arr.writeUInt8 = BP.writeUInt8
  arr.writeUInt16LE = BP.writeUInt16LE
  arr.writeUInt16BE = BP.writeUInt16BE
  arr.writeUInt32LE = BP.writeUInt32LE
  arr.writeUInt32BE = BP.writeUInt32BE
  arr.writeInt8 = BP.writeInt8
  arr.writeInt16LE = BP.writeInt16LE
  arr.writeInt16BE = BP.writeInt16BE
  arr.writeInt32LE = BP.writeInt32LE
  arr.writeInt32BE = BP.writeInt32BE
  arr.writeFloatLE = BP.writeFloatLE
  arr.writeFloatBE = BP.writeFloatBE
  arr.writeDoubleLE = BP.writeDoubleLE
  arr.writeDoubleBE = BP.writeDoubleBE
  arr.fill = BP.fill
  arr.inspect = BP.inspect
  arr.toArrayBuffer = BP.toArrayBuffer

  return arr
}

var INVALID_BASE64_RE = /[^+\/0-9A-z]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function isArrayish (subject) {
  return isArray(subject) || Buffer.isBuffer(subject) ||
      subject && typeof subject === 'object' &&
      typeof subject.length === 'number'
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; i++) {
    var b = str.charCodeAt(i)
    if (b <= 0x7F) {
      byteArray.push(b)
    } else {
      var start = i
      if (b >= 0xD800 && b <= 0xDFFF) i++
      var h = encodeURIComponent(str.slice(start, i+1)).substr(1).split('%')
      for (var j = 0; j < h.length; j++) {
        byteArray.push(parseInt(h[j], 16))
      }
    }
  }
  return byteArray
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; i++) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; i++) {
    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(str)
}

function blitBuffer (src, dst, offset, length, unitSize) {
  if (unitSize) length -= length % unitSize;
  for (var i = 0; i < length; i++) {
    if ((i + offset >= dst.length) || (i >= src.length))
      break
    dst[i + offset] = src[i]
  }
  return i
}

function decodeUtf8Char (str) {
  try {
    return decodeURIComponent(str)
  } catch (err) {
    return String.fromCharCode(0xFFFD) // UTF 8 invalid char
  }
}

},{"base64-js":"/Users/spatialdev/Documents/GitHub/GeoForce/GeoAngular/node_modules/browserify/node_modules/buffer/node_modules/base64-js/lib/b64.js","ieee754":"/Users/spatialdev/Documents/GitHub/GeoForce/GeoAngular/node_modules/browserify/node_modules/buffer/node_modules/ieee754/index.js","is-array":"/Users/spatialdev/Documents/GitHub/GeoForce/GeoAngular/node_modules/browserify/node_modules/buffer/node_modules/is-array/index.js"}],"/Users/spatialdev/Documents/GitHub/GeoForce/GeoAngular/node_modules/browserify/node_modules/buffer/node_modules/base64-js/lib/b64.js":[function(require,module,exports){
var lookup = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

;(function (exports) {
	'use strict';

  var Arr = (typeof Uint8Array !== 'undefined')
    ? Uint8Array
    : Array

	var PLUS   = '+'.charCodeAt(0)
	var SLASH  = '/'.charCodeAt(0)
	var NUMBER = '0'.charCodeAt(0)
	var LOWER  = 'a'.charCodeAt(0)
	var UPPER  = 'A'.charCodeAt(0)

	function decode (elt) {
		var code = elt.charCodeAt(0)
		if (code === PLUS)
			return 62 // '+'
		if (code === SLASH)
			return 63 // '/'
		if (code < NUMBER)
			return -1 //no match
		if (code < NUMBER + 10)
			return code - NUMBER + 26 + 26
		if (code < UPPER + 26)
			return code - UPPER
		if (code < LOWER + 26)
			return code - LOWER + 26
	}

	function b64ToByteArray (b64) {
		var i, j, l, tmp, placeHolders, arr

		if (b64.length % 4 > 0) {
			throw new Error('Invalid string. Length must be a multiple of 4')
		}

		// the number of equal signs (place holders)
		// if there are two placeholders, than the two characters before it
		// represent one byte
		// if there is only one, then the three characters before it represent 2 bytes
		// this is just a cheap hack to not do indexOf twice
		var len = b64.length
		placeHolders = '=' === b64.charAt(len - 2) ? 2 : '=' === b64.charAt(len - 1) ? 1 : 0

		// base64 is 4/3 + up to two characters of the original data
		arr = new Arr(b64.length * 3 / 4 - placeHolders)

		// if there are placeholders, only get up to the last complete 4 chars
		l = placeHolders > 0 ? b64.length - 4 : b64.length

		var L = 0

		function push (v) {
			arr[L++] = v
		}

		for (i = 0, j = 0; i < l; i += 4, j += 3) {
			tmp = (decode(b64.charAt(i)) << 18) | (decode(b64.charAt(i + 1)) << 12) | (decode(b64.charAt(i + 2)) << 6) | decode(b64.charAt(i + 3))
			push((tmp & 0xFF0000) >> 16)
			push((tmp & 0xFF00) >> 8)
			push(tmp & 0xFF)
		}

		if (placeHolders === 2) {
			tmp = (decode(b64.charAt(i)) << 2) | (decode(b64.charAt(i + 1)) >> 4)
			push(tmp & 0xFF)
		} else if (placeHolders === 1) {
			tmp = (decode(b64.charAt(i)) << 10) | (decode(b64.charAt(i + 1)) << 4) | (decode(b64.charAt(i + 2)) >> 2)
			push((tmp >> 8) & 0xFF)
			push(tmp & 0xFF)
		}

		return arr
	}

	function uint8ToBase64 (uint8) {
		var i,
			extraBytes = uint8.length % 3, // if we have 1 byte left, pad 2 bytes
			output = "",
			temp, length

		function encode (num) {
			return lookup.charAt(num)
		}

		function tripletToBase64 (num) {
			return encode(num >> 18 & 0x3F) + encode(num >> 12 & 0x3F) + encode(num >> 6 & 0x3F) + encode(num & 0x3F)
		}

		// go through the array every three bytes, we'll deal with trailing stuff later
		for (i = 0, length = uint8.length - extraBytes; i < length; i += 3) {
			temp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
			output += tripletToBase64(temp)
		}

		// pad the end with zeros, but make sure to not forget the extra bytes
		switch (extraBytes) {
			case 1:
				temp = uint8[uint8.length - 1]
				output += encode(temp >> 2)
				output += encode((temp << 4) & 0x3F)
				output += '=='
				break
			case 2:
				temp = (uint8[uint8.length - 2] << 8) + (uint8[uint8.length - 1])
				output += encode(temp >> 10)
				output += encode((temp >> 4) & 0x3F)
				output += encode((temp << 2) & 0x3F)
				output += '='
				break
		}

		return output
	}

	exports.toByteArray = b64ToByteArray
	exports.fromByteArray = uint8ToBase64
}(typeof exports === 'undefined' ? (this.base64js = {}) : exports))

},{}],"/Users/spatialdev/Documents/GitHub/GeoForce/GeoAngular/node_modules/browserify/node_modules/buffer/node_modules/ieee754/index.js":[function(require,module,exports){
exports.read = function(buffer, offset, isLE, mLen, nBytes) {
  var e, m,
      eLen = nBytes * 8 - mLen - 1,
      eMax = (1 << eLen) - 1,
      eBias = eMax >> 1,
      nBits = -7,
      i = isLE ? (nBytes - 1) : 0,
      d = isLE ? -1 : 1,
      s = buffer[offset + i];

  i += d;

  e = s & ((1 << (-nBits)) - 1);
  s >>= (-nBits);
  nBits += eLen;
  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8);

  m = e & ((1 << (-nBits)) - 1);
  e >>= (-nBits);
  nBits += mLen;
  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8);

  if (e === 0) {
    e = 1 - eBias;
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity);
  } else {
    m = m + Math.pow(2, mLen);
    e = e - eBias;
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
};

exports.write = function(buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c,
      eLen = nBytes * 8 - mLen - 1,
      eMax = (1 << eLen) - 1,
      eBias = eMax >> 1,
      rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0),
      i = isLE ? 0 : (nBytes - 1),
      d = isLE ? 1 : -1,
      s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0;

  value = Math.abs(value);

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0;
    e = eMax;
  } else {
    e = Math.floor(Math.log(value) / Math.LN2);
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--;
      c *= 2;
    }
    if (e + eBias >= 1) {
      value += rt / c;
    } else {
      value += rt * Math.pow(2, 1 - eBias);
    }
    if (value * c >= 2) {
      e++;
      c /= 2;
    }

    if (e + eBias >= eMax) {
      m = 0;
      e = eMax;
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen);
      e = e + eBias;
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
      e = 0;
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8);

  e = (e << mLen) | m;
  eLen += mLen;
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8);

  buffer[offset + i - d] |= s * 128;
};

},{}],"/Users/spatialdev/Documents/GitHub/GeoForce/GeoAngular/node_modules/browserify/node_modules/buffer/node_modules/is-array/index.js":[function(require,module,exports){

/**
 * isArray
 */

var isArray = Array.isArray;

/**
 * toString
 */

var str = Object.prototype.toString;

/**
 * Whether or not the given `val`
 * is an array.
 *
 * example:
 *
 *        isArray([]);
 *        // > true
 *        isArray(arguments);
 *        // > false
 *        isArray('');
 *        // > false
 *
 * @param {mixed} val
 * @return {bool}
 */

module.exports = isArray || function (val) {
  return !! val && '[object Array]' == str.call(val);
};

},{}]},{},["/Users/spatialdev/Documents/GitHub/GeoForce/GeoAngular/app/scripts/app.js"])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvc3BhdGlhbGRldi9Eb2N1bWVudHMvR2l0SHViL0dlb0ZvcmNlL0NvbmZpZy9sYXllcnMvYWxsLmpzIiwiL1VzZXJzL3NwYXRpYWxkZXYvRG9jdW1lbnRzL0dpdEh1Yi9HZW9Gb3JjZS9Db25maWcvbGF5ZXJzL2Jhc2VtYXBzLmpzIiwiL1VzZXJzL3NwYXRpYWxkZXYvRG9jdW1lbnRzL0dpdEh1Yi9HZW9Gb3JjZS9Db25maWcvbGF5ZXJzL2Rpc2FzdGVyLmpzIiwiL1VzZXJzL3NwYXRpYWxkZXYvRG9jdW1lbnRzL0dpdEh1Yi9HZW9Gb3JjZS9Db25maWcvbGF5ZXJzL290aGVyLmpzIiwiL1VzZXJzL3NwYXRpYWxkZXYvRG9jdW1lbnRzL0dpdEh1Yi9HZW9Gb3JjZS9Db25maWcvbGF5ZXJzL3Byb2plY3QuanMiLCIvVXNlcnMvc3BhdGlhbGRldi9Eb2N1bWVudHMvR2l0SHViL0dlb0ZvcmNlL0NvbmZpZy9sYXllcnMvcHJvamVjdGhlYWx0aC5qcyIsIi9Vc2Vycy9zcGF0aWFsZGV2L0RvY3VtZW50cy9HaXRIdWIvR2VvRm9yY2UvQ29uZmlnL2xheWVycy9wcm9qZWN0cmlzay5qcyIsIi9Vc2Vycy9zcGF0aWFsZGV2L0RvY3VtZW50cy9HaXRIdWIvR2VvRm9yY2UvQ29uZmlnL2xheWVycy92ZWN0b3J0aWxlcy5qcyIsImFwcC9saWIvTGVhZmxldC5NYXBib3hWZWN0b3JUaWxlL25vZGVfbW9kdWxlcy9wYmYvaW5kZXguanMiLCIvVXNlcnMvc3BhdGlhbGRldi9Eb2N1bWVudHMvR2l0SHViL0dlb0ZvcmNlL0dlb0FuZ3VsYXIvYXBwL2xpYi9MZWFmbGV0Lk1hcGJveFZlY3RvclRpbGUvbm9kZV9tb2R1bGVzL3BiZi9ub2RlX21vZHVsZXMvaWVlZTc1NC9pbmRleC5qcyIsIi9Vc2Vycy9zcGF0aWFsZGV2L0RvY3VtZW50cy9HaXRIdWIvR2VvRm9yY2UvR2VvQW5ndWxhci9hcHAvbGliL0xlYWZsZXQuTWFwYm94VmVjdG9yVGlsZS9ub2RlX21vZHVsZXMvcG9pbnQtZ2VvbWV0cnkvaW5kZXguanMiLCIvVXNlcnMvc3BhdGlhbGRldi9Eb2N1bWVudHMvR2l0SHViL0dlb0ZvcmNlL0dlb0FuZ3VsYXIvYXBwL2xpYi9MZWFmbGV0Lk1hcGJveFZlY3RvclRpbGUvbm9kZV9tb2R1bGVzL3ZlY3Rvci10aWxlL2luZGV4LmpzIiwiL1VzZXJzL3NwYXRpYWxkZXYvRG9jdW1lbnRzL0dpdEh1Yi9HZW9Gb3JjZS9HZW9Bbmd1bGFyL2FwcC9saWIvTGVhZmxldC5NYXBib3hWZWN0b3JUaWxlL25vZGVfbW9kdWxlcy92ZWN0b3ItdGlsZS9saWIvdmVjdG9ydGlsZS5qcyIsIi9Vc2Vycy9zcGF0aWFsZGV2L0RvY3VtZW50cy9HaXRIdWIvR2VvRm9yY2UvR2VvQW5ndWxhci9hcHAvbGliL0xlYWZsZXQuTWFwYm94VmVjdG9yVGlsZS9ub2RlX21vZHVsZXMvdmVjdG9yLXRpbGUvbGliL3ZlY3RvcnRpbGVmZWF0dXJlLmpzIiwiL1VzZXJzL3NwYXRpYWxkZXYvRG9jdW1lbnRzL0dpdEh1Yi9HZW9Gb3JjZS9HZW9Bbmd1bGFyL2FwcC9saWIvTGVhZmxldC5NYXBib3hWZWN0b3JUaWxlL25vZGVfbW9kdWxlcy92ZWN0b3ItdGlsZS9saWIvdmVjdG9ydGlsZWxheWVyLmpzIiwiL1VzZXJzL3NwYXRpYWxkZXYvRG9jdW1lbnRzL0dpdEh1Yi9HZW9Gb3JjZS9HZW9Bbmd1bGFyL2FwcC9saWIvTGVhZmxldC5NYXBib3hWZWN0b3JUaWxlL3NyYy9NVlRGZWF0dXJlLmpzIiwiL1VzZXJzL3NwYXRpYWxkZXYvRG9jdW1lbnRzL0dpdEh1Yi9HZW9Gb3JjZS9HZW9Bbmd1bGFyL2FwcC9saWIvTGVhZmxldC5NYXBib3hWZWN0b3JUaWxlL3NyYy9NVlRMYXllci5qcyIsIi9Vc2Vycy9zcGF0aWFsZGV2L0RvY3VtZW50cy9HaXRIdWIvR2VvRm9yY2UvR2VvQW5ndWxhci9hcHAvbGliL0xlYWZsZXQuTWFwYm94VmVjdG9yVGlsZS9zcmMvTVZUU291cmNlLmpzIiwiL1VzZXJzL3NwYXRpYWxkZXYvRG9jdW1lbnRzL0dpdEh1Yi9HZW9Gb3JjZS9HZW9Bbmd1bGFyL2FwcC9saWIvTGVhZmxldC5NYXBib3hWZWN0b3JUaWxlL3NyYy9NVlRVdGlsLmpzIiwiL1VzZXJzL3NwYXRpYWxkZXYvRG9jdW1lbnRzL0dpdEh1Yi9HZW9Gb3JjZS9HZW9Bbmd1bGFyL2FwcC9saWIvTGVhZmxldC5NYXBib3hWZWN0b3JUaWxlL3NyYy9TdGF0aWNMYWJlbC9TdGF0aWNMYWJlbC5qcyIsIi9Vc2Vycy9zcGF0aWFsZGV2L0RvY3VtZW50cy9HaXRIdWIvR2VvRm9yY2UvR2VvQW5ndWxhci9hcHAvbGliL2ZlYXR1cmVsYWJlbC9GZWF0dXJlU2V0LmpzIiwiL1VzZXJzL3NwYXRpYWxkZXYvRG9jdW1lbnRzL0dpdEh1Yi9HZW9Gb3JjZS9HZW9Bbmd1bGFyL2FwcC9saWIvZmVhdHVyZWxhYmVsL0xhYmVsLmpzIiwiL1VzZXJzL3NwYXRpYWxkZXYvRG9jdW1lbnRzL0dpdEh1Yi9HZW9Gb3JjZS9HZW9Bbmd1bGFyL2FwcC9saWIvZmVhdHVyZWxhYmVsL2ZlYXR1cmVsYWJlbC5qcyIsIi9Vc2Vycy9zcGF0aWFsZGV2L0RvY3VtZW50cy9HaXRIdWIvR2VvRm9yY2UvR2VvQW5ndWxhci9hcHAvbGliL2ZlYXR1cmVsYWJlbC9sZWFmbGV0LXBhdGNoLmpzIiwiL1VzZXJzL3NwYXRpYWxkZXYvRG9jdW1lbnRzL0dpdEh1Yi9HZW9Gb3JjZS9HZW9Bbmd1bGFyL2FwcC9zY3JpcHRzL2FwcC5qcyIsIi9Vc2Vycy9zcGF0aWFsZGV2L0RvY3VtZW50cy9HaXRIdWIvR2VvRm9yY2UvR2VvQW5ndWxhci9hcHAvc2NyaXB0cy9jb250cm9sbGVycy9iYXNlbWFwcy5qcyIsIi9Vc2Vycy9zcGF0aWFsZGV2L0RvY3VtZW50cy9HaXRIdWIvR2VvRm9yY2UvR2VvQW5ndWxhci9hcHAvc2NyaXB0cy9jb250cm9sbGVycy9icmVhZGNydW1icy5qcyIsIi9Vc2Vycy9zcGF0aWFsZGV2L0RvY3VtZW50cy9HaXRIdWIvR2VvRm9yY2UvR2VvQW5ndWxhci9hcHAvc2NyaXB0cy9jb250cm9sbGVycy9kZXRhaWxzLmpzIiwiL1VzZXJzL3NwYXRpYWxkZXYvRG9jdW1lbnRzL0dpdEh1Yi9HZW9Gb3JjZS9HZW9Bbmd1bGFyL2FwcC9zY3JpcHRzL2NvbnRyb2xsZXJzL2V4cG9ydC5qcyIsIi9Vc2Vycy9zcGF0aWFsZGV2L0RvY3VtZW50cy9HaXRIdWIvR2VvRm9yY2UvR2VvQW5ndWxhci9hcHAvc2NyaXB0cy9jb250cm9sbGVycy9maWx0ZXJzLmpzIiwiL1VzZXJzL3NwYXRpYWxkZXYvRG9jdW1lbnRzL0dpdEh1Yi9HZW9Gb3JjZS9HZW9Bbmd1bGFyL2FwcC9zY3JpcHRzL2NvbnRyb2xsZXJzL2luZm8uanMiLCIvVXNlcnMvc3BhdGlhbGRldi9Eb2N1bWVudHMvR2l0SHViL0dlb0ZvcmNlL0dlb0FuZ3VsYXIvYXBwL3NjcmlwdHMvY29udHJvbGxlcnMvbGF5ZXJzLmpzIiwiL1VzZXJzL3NwYXRpYWxkZXYvRG9jdW1lbnRzL0dpdEh1Yi9HZW9Gb3JjZS9HZW9Bbmd1bGFyL2FwcC9zY3JpcHRzL2NvbnRyb2xsZXJzL2xlZ2VuZC5qcyIsIi9Vc2Vycy9zcGF0aWFsZGV2L0RvY3VtZW50cy9HaXRIdWIvR2VvRm9yY2UvR2VvQW5ndWxhci9hcHAvc2NyaXB0cy9jb250cm9sbGVycy9tYWluLmpzIiwiL1VzZXJzL3NwYXRpYWxkZXYvRG9jdW1lbnRzL0dpdEh1Yi9HZW9Gb3JjZS9HZW9Bbmd1bGFyL2FwcC9zY3JpcHRzL2NvbnRyb2xsZXJzL21hcC5qcyIsIi9Vc2Vycy9zcGF0aWFsZGV2L0RvY3VtZW50cy9HaXRIdWIvR2VvRm9yY2UvR2VvQW5ndWxhci9hcHAvc2NyaXB0cy9jb250cm9sbGVycy9uYXZiYXIuanMiLCIvVXNlcnMvc3BhdGlhbGRldi9Eb2N1bWVudHMvR2l0SHViL0dlb0ZvcmNlL0dlb0FuZ3VsYXIvYXBwL3NjcmlwdHMvY29udHJvbGxlcnMvc2VhcmNoLmpzIiwiL1VzZXJzL3NwYXRpYWxkZXYvRG9jdW1lbnRzL0dpdEh1Yi9HZW9Gb3JjZS9HZW9Bbmd1bGFyL2FwcC9zY3JpcHRzL2NvbnRyb2xsZXJzL3NpZGUtdmlldy5qcyIsIi9Vc2Vycy9zcGF0aWFsZGV2L0RvY3VtZW50cy9HaXRIdWIvR2VvRm9yY2UvR2VvQW5ndWxhci9hcHAvc2NyaXB0cy9jb250cm9sbGVycy9zdG9yaWVzLmpzIiwiL1VzZXJzL3NwYXRpYWxkZXYvRG9jdW1lbnRzL0dpdEh1Yi9HZW9Gb3JjZS9HZW9Bbmd1bGFyL2FwcC9zY3JpcHRzL2NvbnRyb2xsZXJzL3RoZW1lLmpzIiwiL1VzZXJzL3NwYXRpYWxkZXYvRG9jdW1lbnRzL0dpdEh1Yi9HZW9Gb3JjZS9HZW9Bbmd1bGFyL2FwcC9zY3JpcHRzL2NvbnRyb2xsZXJzL3VwbG9hZC5qcyIsIi9Vc2Vycy9zcGF0aWFsZGV2L0RvY3VtZW50cy9HaXRIdWIvR2VvRm9yY2UvR2VvQW5ndWxhci9hcHAvc2NyaXB0cy9jb250cm9sbGVycy96b29tLWV4dGVudC5qcyIsIi9Vc2Vycy9zcGF0aWFsZGV2L0RvY3VtZW50cy9HaXRIdWIvR2VvRm9yY2UvR2VvQW5ndWxhci9hcHAvc2NyaXB0cy9zZXJ2aWNlcy9Eb251dHMuanMiLCIvVXNlcnMvc3BhdGlhbGRldi9Eb2N1bWVudHMvR2l0SHViL0dlb0ZvcmNlL0dlb0FuZ3VsYXIvYXBwL3NjcmlwdHMvc2VydmljZXMvTGF5ZXJDb25maWcuanMiLCIvVXNlcnMvc3BhdGlhbGRldi9Eb2N1bWVudHMvR2l0SHViL0dlb0ZvcmNlL0dlb0FuZ3VsYXIvYXBwL3NjcmlwdHMvc2VydmljZXMvU3Rvcmllc0NvbmZpZy5qcyIsIi9Vc2Vycy9zcGF0aWFsZGV2L0RvY3VtZW50cy9HaXRIdWIvR2VvRm9yY2UvR2VvQW5ndWxhci9hcHAvc2NyaXB0cy9zZXJ2aWNlcy9WZWN0b3IvQkJveEdlb0pTT04uanMiLCIvVXNlcnMvc3BhdGlhbGRldi9Eb2N1bWVudHMvR2l0SHViL0dlb0ZvcmNlL0dlb0FuZ3VsYXIvYXBwL3NjcmlwdHMvc2VydmljZXMvVmVjdG9yL0dlb0pTT04uanMiLCIvVXNlcnMvc3BhdGlhbGRldi9Eb2N1bWVudHMvR2l0SHViL0dlb0ZvcmNlL0dlb0FuZ3VsYXIvYXBwL3NjcmlwdHMvc2VydmljZXMvVmVjdG9yL0tNTC5qcyIsIi9Vc2Vycy9zcGF0aWFsZGV2L0RvY3VtZW50cy9HaXRIdWIvR2VvRm9yY2UvR2VvQW5ndWxhci9hcHAvc2NyaXB0cy9zZXJ2aWNlcy9WZWN0b3IvUmVzb3VyY2UuanMiLCIvVXNlcnMvc3BhdGlhbGRldi9Eb2N1bWVudHMvR2l0SHViL0dlb0ZvcmNlL0dlb0FuZ3VsYXIvYXBwL3NjcmlwdHMvc2VydmljZXMvVmVjdG9yL1ZlY3RvclByb3ZpZGVyLmpzIiwiL1VzZXJzL3NwYXRpYWxkZXYvRG9jdW1lbnRzL0dpdEh1Yi9HZW9Gb3JjZS9HZW9Bbmd1bGFyL2FwcC9zY3JpcHRzL3NlcnZpY2VzL1ZlY3Rvci9jc3YuanMiLCIvVXNlcnMvc3BhdGlhbGRldi9Eb2N1bWVudHMvR2l0SHViL0dlb0ZvcmNlL0dlb0FuZ3VsYXIvYXBwL3NjcmlwdHMvc2VydmljZXMvVmVjdG9yL3BiZi5qcyIsIi9Vc2Vycy9zcGF0aWFsZGV2L0RvY3VtZW50cy9HaXRIdWIvR2VvRm9yY2UvR2VvQW5ndWxhci9hcHAvc2NyaXB0cy9zZXJ2aWNlcy9WZWN0b3IvcmVzb3VyY2UuanMiLCIvVXNlcnMvc3BhdGlhbGRldi9Eb2N1bWVudHMvR2l0SHViL0dlb0ZvcmNlL0dlb0FuZ3VsYXIvYXBwL3NjcmlwdHMvc2VydmljZXMvVmVjdG9yL3ZlY3Rvci5qcyIsIi9Vc2Vycy9zcGF0aWFsZGV2L0RvY3VtZW50cy9HaXRIdWIvR2VvRm9yY2UvR2VvQW5ndWxhci9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnVmZmVyL2luZGV4LmpzIiwiL1VzZXJzL3NwYXRpYWxkZXYvRG9jdW1lbnRzL0dpdEh1Yi9HZW9Gb3JjZS9HZW9Bbmd1bGFyL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9idWZmZXIvbm9kZV9tb2R1bGVzL2Jhc2U2NC1qcy9saWIvYjY0LmpzIiwiL1VzZXJzL3NwYXRpYWxkZXYvRG9jdW1lbnRzL0dpdEh1Yi9HZW9Gb3JjZS9HZW9Bbmd1bGFyL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9idWZmZXIvbm9kZV9tb2R1bGVzL2llZWU3NTQvaW5kZXguanMiLCIvVXNlcnMvc3BhdGlhbGRldi9Eb2N1bWVudHMvR2l0SHViL0dlb0ZvcmNlL0dlb0FuZ3VsYXIvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2J1ZmZlci9ub2RlX21vZHVsZXMvaXMtYXJyYXkvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUNyZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUNoU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuSUE7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1SUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2piQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDemRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMWpCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdFJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDblBBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4UkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1aENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IE5pY2hvbGFzIEhhbGxhaGFuIDxuaGFsbGFoYW5Ac3BhdGlhbGRldi5jb20+XG4gKiAgICAgICBvbiA4LzYvMTQuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cblxufTtcbiIsIi8qKlxuICogQ3JlYXRlZCBieSBOaWNob2xhcyBIYWxsYWhhbiA8bmhhbGxhaGFuQHNwYXRpYWxkZXYuY29tPlxuICogICAgICAgb24gOC82LzE0LlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXG4gIC8qKlxuICAgKiBCYXNlbWFwcyBQYW5lbCBMaXN0XG4gICAqXG4gICAqIExpc3Qgb2YgYmFzZW1hcHMgdGhhdCBnZXQgc2hvd24gaW4gdGhlIEJhc2VtYXBzIFBhbmVsLiBFZGl0IHRoaXMgdG8gYWRkIG9yIHJlbW92ZVxuICAgKiBiYXNlbWFwcyB0aGF0IHRoZSB1c2VyIHdpbGwgc2VlIGFzIGNob2ljZXMuIEFsbCBiYXNlbWFwcywgaW5jbHVkaW5nIG9uZXMgbm90IGluIHRoaXNcbiAgICogbGlzdCwgY2FuIHN0aWxsIGJlIG1hbnVhbGx5IHJlZmVyZW5jZWQgaW4gdGhlIHVybC4gVGhpcyBpcyBqdXN0IGZvciB0aGUgVXNlciBJbnRlcmZhY2UuXG4gICAqL1xuICBiYXNlbWFwczogW1xuICAgICdvc21ob3QnLFxuICAgICdvc20nLFxuICAgICdzYXRlbGxpdGUnLFxuICAgICdvcnRobycsXG4gICAgJ3RvbmVyJyxcbiAgICAnZGFyaycsXG4gICAgJ2dpdGh1YicsXG4gICAgJ21vemlsbGEnLFxuICAgICdncmVlbicsXG4gICAgJ29zbWN5Y2xlJyxcbiAgICAnb3NtdHJhbnNwb3J0JyxcbiAgICAnb3NtbWFwcXVlc3QnLFxuICAgICduYXRnZW8nLFxuICAgICd1c2dzdG9wbycsXG4gICAgJ2Vzcml0b3BvJyxcbiAgICAnb2NlYW4nLFxuICAgICdsaWdodGdyYXknLFxuICAgICd3YXRlcmNvbG9yJ1xuICBdLFxuXG5cbiAgLyoqXG4gICAqIEJhc2VtYXBzXG4gICAqXG4gICAqIEFsbCBiYXNlbWFwIGFsaWFzZXMgdGhhdCBjYW4gYmUgcmVmZXJyZWQgdG8gaW4gdGhlIHVybC4gVGhlIGNvcnJlc3BvbmRpbmdcbiAgICogcGF0aCB0byB0aGUgdGh1bWJuYWlsIGluIHRoZSBCYXNlbWFwcyBQYW5lbCBzaG91bGQgYmU6XG4gICAqICAgIGltYWdlcy97YWxpYXNOYW1lfS5qcGdcbiAgICpcbiAgICovXG5cbiAgb3NtaG90OiB7XG4gICAgdXJsOiAnaHR0cDovL3tzfS50aWxlLm9wZW5zdHJlZXRtYXAuZnIvaG90L3t6fS97eH0ve3l9LnBuZycsXG4gICAgbmFtZTogJ0h1bWFuaXRhcmlhbiBPcGVuU3RyZWV0TWFwJyxcbiAgICB0eXBlOiAnYmFzZW1hcCdcbiAgfSxcblxuICByZWRjcm9zczoge1xuICAgIHVybDogJ2h0dHBzOi8ve3N9LnRpbGVzLm1hcGJveC5jb20vdjMvYW1lcmljYW5yZWRjcm9zcy5oY2ppMjJkZS97en0ve3h9L3t5fS5wbmcnLFxuICAgIG5hbWU6ICdSZWQgQ3Jvc3MnLFxuICAgIHR5cGU6ICdiYXNlbWFwJ1xuICB9LFxuXG4gIHNhdGVsbGl0ZToge1xuICAgIHVybDogJ2h0dHBzOi8ve3N9LnRpbGVzLm1hcGJveC5jb20vdjMvZXhhbXBsZXMubWFwLXFmeXJ4NXI4L3t6fS97eH0ve3l9LnBuZycsXG4gICAgbmFtZTogJ01hcGJveCBTYXRlbGxpdGUnLFxuICAgIHR5cGU6ICdiYXNlbWFwJ1xuICB9LFxuXG4gIG1vemlsbGE6IHtcbiAgICB1cmw6ICdodHRwOi8ve3N9LnRpbGVzLm1hcGJveC5jb20vdjMvbW96aWxsYS13ZWJwcm9kLmU5MWVmOGIzL3t6fS97eH0ve3l9LnBuZycsXG4gICAgbmFtZTogJ01vemlsbGEnLFxuICAgIHR5cGU6ICdiYXNlbWFwJ1xuICB9LFxuXG4gIGdpdGh1Yjoge1xuICAgIHVybDogJ2h0dHA6Ly97c30udGlsZXMubWFwYm94LmNvbS92My9naXRodWIubWFwLXhncTJzdnJ6L3t6fS97eH0ve3l9LnBuZycsXG4gICAgbmFtZTogJ0dpdGh1YicsXG4gICAgdHlwZTogJ2Jhc2VtYXAnXG4gIH0sXG5cbiAgZ3JlZW46IHtcbiAgICB1cmw6ICdodHRwOi8ve3N9LnRpbGVzLm1hcGJveC5jb20vdjMvZXhhbXBsZXMubWFwLTNnaXN1cGl1L3t6fS97eH0ve3l9LnBuZycsXG4gICAgbmFtZTogJ0dyZWVuIFRoZW1lJyxcbiAgICB0eXBlOiAnYmFzZW1hcCdcbiAgfSxcblxuICBkYXJrOiB7XG4gICAgdXJsOiAnaHR0cDovL3tzfS50aWxlcy5tYXBib3guY29tL3YzL3NwYXRpYWxkZXYubWFwLWM5ejJjeWVmL3t6fS97eH0ve3l9LnBuZycsXG4gICAgbmFtZTogJ0RhcmsgVGhlbWUnLFxuICAgIHR5cGU6ICdiYXNlbWFwJ1xuICB9LFxuXG4gIG9zbToge1xuICAgIHVybDogJ2h0dHA6Ly97c30udGlsZS5vc20ub3JnL3t6fS97eH0ve3l9LnBuZycsXG4gICAgbmFtZTogJ1N0YW5kYXJkIE9wZW5TdHJlZXRNYXAnLFxuICAgIHR5cGU6ICdiYXNlbWFwJ1xuICB9LFxuXG4gIG9zbWN5Y2xlOiB7XG4gICAgdXJsOiAnaHR0cDovL3tzfS50aWxlLm9wZW5jeWNsZW1hcC5vcmcvY3ljbGUve3p9L3t4fS97eX0ucG5nJyxcbiAgICBuYW1lOiAnQ3ljbGUgT3BlblN0cmVldE1hcCcsXG4gICAgdHlwZTogJ2Jhc2VtYXAnXG4gIH0sXG5cbiAgb3NtdHJhbnNwb3J0OiB7XG4gICAgdXJsOiAnaHR0cDovL3tzfS50aWxlMi5vcGVuY3ljbGVtYXAub3JnL3RyYW5zcG9ydC97en0ve3h9L3t5fS5wbmcnLFxuICAgIG5hbWU6ICdUcmFuc3BvcnQgT3BlblN0cmVldE1hcCcsXG4gICAgdHlwZTogJ2Jhc2VtYXAnXG4gIH0sXG5cbiAgb3NtbWFwcXVlc3Q6IHtcbiAgICB1cmw6ICdodHRwOi8vb3RpbGUzLm1xY2RuLmNvbS90aWxlcy8xLjAuMC9vc20ve3p9L3t4fS97eX0ucG5nJyxcbiAgICBuYW1lOiAnTWFwUXVlc3QgT3BlblN0cmVldE1hcCcsXG4gICAgdHlwZTogJ2Jhc2VtYXAnXG4gIH0sXG5cbiAgbmF0Z2VvOiB7XG4gICAgdXJsOiAnaHR0cDovL3NlcnZpY2VzLmFyY2dpc29ubGluZS5jb20vQXJjR0lTL3Jlc3Qvc2VydmljZXMvTmF0R2VvX1dvcmxkX01hcC9NYXBTZXJ2ZXIvdGlsZS97en0ve3l9L3t4fScsXG4gICAgbmFtZTogJ05hdGlvbmFsIEdlb2dyYXBoaWMnLFxuICAgIHR5cGU6ICdiYXNlbWFwJ1xuICB9LFxuXG4gIHVzZ3N0b3BvOiB7XG4gICAgdXJsOiAnaHR0cDovL3NlcnZpY2VzLmFyY2dpc29ubGluZS5jb20vQXJjR0lTL3Jlc3Qvc2VydmljZXMvVVNBX1RvcG9fTWFwcy9NYXBTZXJ2ZXIvdGlsZS97en0ve3l9L3t4fScsXG4gICAgbmFtZTogJ1VTR1MgVG9wb2dyYXBoaWMnLFxuICAgIHR5cGU6ICdiYXNlbWFwJ1xuICB9LFxuXG4gIG9ydGhvOiB7XG4gICAgdXJsOiAnaHR0cDovL3NlcnZpY2VzLmFyY2dpc29ubGluZS5jb20vQXJjR0lTL3Jlc3Qvc2VydmljZXMvV29ybGRfSW1hZ2VyeS9NYXBTZXJ2ZXIvdGlsZS97en0ve3l9L3t4fScsXG4gICAgbmFtZTogJ09ydGhvZ3JhcGhpYycsXG4gICAgdHlwZTogJ2Jhc2VtYXAnXG4gIH0sXG5cbiAgb2NlYW46IHtcbiAgICB1cmw6ICdodHRwOi8vc2VydmljZXMuYXJjZ2lzb25saW5lLmNvbS9BcmNHSVMvcmVzdC9zZXJ2aWNlcy9PY2Vhbi9Xb3JsZF9PY2Vhbl9CYXNlL01hcFNlcnZlci90aWxlL3t6fS97eX0ve3h9JyxcbiAgICBuYW1lOiAnT2NlYW4gQmF0aHltZXRyaWMnLFxuICAgIHR5cGU6ICdiYXNlbWFwJ1xuICB9LFxuXG4gIGxpZ2h0Z3JheToge1xuICAgIHVybDogJ2h0dHA6Ly9zZXJ2aWNlcy5hcmNnaXNvbmxpbmUuY29tL0FyY0dJUy9yZXN0L3NlcnZpY2VzL0NhbnZhcy9Xb3JsZF9MaWdodF9HcmF5X0Jhc2UvTWFwU2VydmVyL3RpbGUve3p9L3t5fS97eH0nLFxuICAgIG5hbWU6ICdMaWdodCBHcmF5JyxcbiAgICB0eXBlOiAnYmFzZW1hcCdcbiAgfSxcblxuICBlc3JpdG9wbzoge1xuICAgIHVybDogJ2h0dHA6Ly9zZXJ2aWNlcy5hcmNnaXNvbmxpbmUuY29tL0FyY0dJUy9yZXN0L3NlcnZpY2VzL1dvcmxkX1RvcG9fTWFwL01hcFNlcnZlci90aWxlL3t6fS97eX0ve3h9JyxcbiAgICBuYW1lOiAnRXNyaSBUb3BvZ3JhcGhpYycsXG4gICAgdHlwZTogJ2Jhc2VtYXAnXG4gIH0sXG5cbiAgdG9uZXI6IHtcbiAgICB1cmw6ICdodHRwOi8ve3N9LnRpbGUuc3RhbWVuLmNvbS90b25lci97en0ve3h9L3t5fS5wbmcnLFxuICAgIG5hbWU6ICdTdGFtZW4gVG9uZXInLFxuICAgIHR5cGU6ICdiYXNlbWFwJ1xuICB9LFxuXG4gIHdhdGVyY29sb3I6IHtcbiAgICB1cmw6ICdodHRwOi8ve3N9LnRpbGUuc3RhbWVuLmNvbS93YXRlcmNvbG9yL3t6fS97eH0ve3l9LnBuZycsXG4gICAgbmFtZTogJ1N0YW1lbiBXYXRlcmNvbG9yJyxcbiAgICB0eXBlOiAnYmFzZW1hcCdcbiAgfVxuXG59O1xuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IE5pY2hvbGFzIEhhbGxhaGFuIDxuaGFsbGFoYW5Ac3BhdGlhbGRldi5jb20+XG4gKiAgICAgICBvbiA4LzYvMTQuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHVzZ3NlYXJ0aHF1YWtlOiB7XG4gICAgdHlwZTogJ2dlb2pzb24nLFxuICAgIHRoZW1lOiAnZGlzYXN0ZXInLFxuICAgIHVybDogJ2h0dHA6Ly9lYXJ0aHF1YWtlLnVzZ3MuZ292L2VhcnRocXVha2VzL2ZlZWQvdjEuMC9zdW1tYXJ5L3NpZ25pZmljYW50X3dlZWsuZ2VvanNvbicsXG4gICAgcHJvcGVydGllczoge1xuICAgICAgJ3RpdGxlJzogJ1VTR1MgUmVhbHRpbWUgRWFydGhxdWFrZXMgRmVlZCAoV2VlayknXG5cbiAgICB9XG4gIH0sXG5cbiAgcHJlY2lwaXRhdGlvbjoge1xuICAgIG5hbWU6ICdQcmVjaXBpdGF0aW9uJyxcbiAgICB0eXBlOiAneHl6JyxcbiAgICB0aGVtZTogJ2Rpc2FzdGVyJyxcbiAgICB1cmw6ICdodHRwOi8ve3N9LnRpbGUub3BlbndlYXRoZXJtYXAub3JnL21hcC9wcmVjaXBpdGF0aW9uL3t6fS97eH0ve3l9LnBuZycsXG4gICAgb3BhY2l0eTogMC41XG4gIH0sXG5cbiAgcmFpbjoge1xuICAgIG5hbWU6ICdSYWluJyxcbiAgICB0eXBlOiAneHl6JyxcbiAgICB0aGVtZTogJ2Rpc2FzdGVyJyxcbiAgICB1cmw6ICdodHRwOi8ve3N9LnRpbGUub3BlbndlYXRoZXJtYXAub3JnL21hcC9yYWluL3t6fS97eH0ve3l9LnBuZydcbiAgfVxuXG59OyIsIi8qKlxuICogQ3JlYXRlZCBieSBOaWNob2xhcyBIYWxsYWhhbiA8bmhhbGxhaGFuQHNwYXRpYWxkZXYuY29tPlxuICogICAgICAgb24gOC82LzE0LlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXG4gIGxhbmRjb3Zlcjoge1xuICAgIG5hbWU6ICdNT0RJUyBMYW5kY292ZXIgMjAwOScsXG4gICAgdHlwZTogJ3dtcycsXG4gICAgdGhlbWU6ICdvdGhlcicsXG4gICAgdXJsOiAnaHR0cDovL2Fncy5zZXJ2aXJsYWJzLm5ldC9BcmNHSVMvc2VydmljZXMvUmVmZXJlbmNlTm9kZS9NT0RJU19MYW5kY292ZXJfVHlwZTFfMjAwOS9NYXBTZXJ2ZXIvV01TU2VydmVyJyxcbiAgICBsYXllcnM6ICcwJyxcbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICBsZWdlbmQ6IFwiXCJcbiAgICB9XG4gIH0sXG5cbiAgc25vdzoge1xuICAgIG5hbWU6ICdTbm93JyxcbiAgICB0eXBlOiAneHl6JyxcbiAgICB0aGVtZTogJ290aGVyJyxcbiAgICB1cmw6ICdodHRwOi8ve3N9LnRpbGUub3BlbndlYXRoZXJtYXAub3JnL21hcC9zbm93L3t6fS97eH0ve3l9LnBuZydcbiAgfSxcblxuICBhaXJ0ZW1wOiB7XG4gICAgbmFtZTogJ05PQUEgQWlyIFRlbXBlcmF0dXJlJyxcbiAgICB0eXBlOiAnd21zJyxcbiAgICB0aGVtZTogJ290aGVyJyxcbiAgICB1cmw6ICdodHRwOi8vbm93Y29hc3Qubm9hYS5nb3Yvd21zL2NvbS5lc3JpLndtcy5Fc3JpbWFwL29icycsXG4gICAgdHJhbnNwYXJlbnQ6IHRydWUsICAgICAgLy8gZGVmYXVsdCB0cnVlXG4gICAgZm9ybWF0OiAnaW1hZ2UvcG5nJywgICAgLy8gZGVmYXVsdCAnaW1hZ2UvcG5nJ1xuICAgIGxheWVyczogJ09CU19NRVRfVEVNUCcsXG4gICAgcHJvcGVydGllczoge1xuICAgICAgbGVnZW5kOiBcIlwiXG4gICAgfVxuICB9LFxuXG4gIHByZXNzdXJlY29udG91cjoge1xuICAgIG5hbWU6ICdQcmVzc3VyZSBDb250b3VyJyxcbiAgICB0eXBlOiAneHl6JyxcbiAgICB0aGVtZTogJ290aGVyJyxcbiAgICB1cmw6ICdodHRwOi8ve3N9LnRpbGUub3BlbndlYXRoZXJtYXAub3JnL21hcC9wcmVzc3VyZV9jbnRyL3t6fS97eH0ve3l9LnBuZycsXG4gICAgb3BhY2l0eTogMC45XG4gIH0sXG5cbiAgcHJlc3N1cmU6IHtcbiAgICBuYW1lOiAnUHJlc3N1cmUnLFxuICAgIHR5cGU6ICd4eXonLFxuICAgIHRoZW1lOiAnb3RoZXInLFxuICAgIHVybDogJ2h0dHA6Ly97c30udGlsZS5vcGVud2VhdGhlcm1hcC5vcmcvbWFwL3ByZXNzdXJlL3t6fS97eH0ve3l9LnBuZydcbiAgfSxcblxuICB0ZW1wZXJhdHVyZToge1xuICAgIG5hbWU6ICdUZW1wZXJhdHVyZScsXG4gICAgdHlwZTogJ3h5eicsXG4gICAgdGhlbWU6ICdvdGhlcicsXG4gICAgdXJsOiAnaHR0cDovL3tzfS50aWxlLm9wZW53ZWF0aGVybWFwLm9yZy9tYXAvdGVtcC97en0ve3h9L3t5fS5wbmcnXG4gIH0sXG5cbiAgd2luZDoge1xuICAgIG5hbWU6ICdXaW5kJyxcbiAgICB0eXBlOiAneHl6JyxcbiAgICB0aGVtZTogJ290aGVyJyxcbiAgICB1cmw6ICdodHRwOi8ve3N9LnRpbGUub3BlbndlYXRoZXJtYXAub3JnL21hcC93aW5kL3t6fS97eH0ve3l9LnBuZydcbiAgfSxcblxuICBjbG91ZHM6IHtcbiAgICBuYW1lOiAnQ2xvdWQgQ292ZXInLFxuICAgIHR5cGU6ICd4eXonLFxuICAgIHRoZW1lOiAnb3RoZXInLFxuICAgIHVybDogJ2h0dHA6Ly97c30udGlsZS5vcGVud2VhdGhlcm1hcC5vcmcvbWFwL2Nsb3Vkc19jbHMve3p9L3t4fS97eX0ucG5nJyxcbiAgICBvcGFjaXR5OiAwLjUgLy8gb3B0aW9uYWwuIG9wYWNpdHkgaXMgMC41IGlmIG5vdCBzcGVjaWZpZWRcbiAgfSxcblxuICBwcmVjaXBpdGF0aW9uY2xhc3NpYzoge1xuICAgIG5hbWU6ICdQcmVjaXBpdGF0aW9uIChDbGFzc2ljKScsXG4gICAgdHlwZTogJ3h5eicsXG4gICAgdGhlbWU6ICdvdGhlcicsXG4gICAgdXJsOiAnaHR0cDovL3tzfS50aWxlLm9wZW53ZWF0aGVybWFwLm9yZy9tYXAvcHJlY2lwaXRhdGlvbl9jbHMve3p9L3t4fS97eX0ucG5nJyxcbiAgICBvcGFjaXR5OiAwLjRcbiAgfSxcblxuICByYWluY2xhc3NpYzoge1xuICAgIG5hbWU6ICdSYWluIChDbGFzc2ljKScsXG4gICAgdHlwZTogJ3h5eicsXG4gICAgdGhlbWU6ICdvdGhlcicsXG4gICAgdXJsOiAnaHR0cDovL3tzfS50aWxlLm9wZW53ZWF0aGVybWFwLm9yZy9tYXAvcmFpbl9jbHMve3p9L3t4fS97eX0ucG5nJ1xuICB9LFxuXG4gIGxhY2NvbW11bml0aWVzOiB7XG4gICAgbmFtZTogJ0xBQyBDb21tdW5pdGllcycsXG4gICAgdHlwZTogJ2dlb2pzb24nLFxuICAgIHRoZW1lOiAnb3RoZXInLFxuICAgIHVybDogJ2h0dHBzOi8vZ2lzdC5naXRodWJ1c2VyY29udGVudC5jb20vYW5vbnltb3VzL2Q1OGU1MWQ2MTJhZGQ2NDgzMjU3L3Jhdy9MQUNfQ29tbXVuaXRpZXNfc3R5bGVkLmdlb2pzb24nXG4gIH1cblxufTtcbiIsIi8qKlxuICogQ3JlYXRlZCBieSBOaWNob2xhcyBIYWxsYWhhbiA8bmhhbGxhaGFuQHNwYXRpYWxkZXYuY29tPlxuICogICAgICAgb24gOC82LzE0LlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXG4gIGdyb3dpbmdwZXJpb2Q6IHtcbiAgICBuYW1lOiAnQXZlcmFnZSBMZW5ndGggb2YgR3Jvd2luZyBQZXJpb2QgKGRheXMpJyxcbiAgICB0eXBlOiAnd21zJyxcbiAgICB0aGVtZTogJ3Byb2plY3QnLFxuICAgIHVybDogJ2h0dHA6Ly9hcHBzLmhhcnZlc3RjaG9pY2Uub3JnL2FyY2dpcy9zZXJ2aWNlcy9NYXBTZXJ2aWNlcy9jZWxsX3ZhbHVlc180L01hcFNlcnZlci9XTVNTZXJ2ZXInLFxuICAgIGxheWVyczogJzE1JyxcbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICBsZWdlbmQ6IFwiXCJcbiAgICB9XG4gIH0sXG5cbiAgbGFuZGNvdmVyOiB7XG4gICAgbmFtZTogJ01PRElTIExhbmRjb3ZlciAyMDA5JyxcbiAgICB0eXBlOiAnd21zJyxcbiAgICB0aGVtZTogJ3Byb2plY3QnLFxuICAgIHVybDogJ2h0dHA6Ly9hZ3Muc2VydmlybGFicy5uZXQvQXJjR0lTL3NlcnZpY2VzL1JlZmVyZW5jZU5vZGUvTU9ESVNfTGFuZGNvdmVyX1R5cGUxXzIwMDkvTWFwU2VydmVyL1dNU1NlcnZlcicsXG4gICAgbGF5ZXJzOiAnMCcsXG4gICAgcHJvcGVydGllczoge1xuICAgICAgbGVnZW5kOiBcIlwiXG4gICAgfVxuICB9XG5cbn07IiwiLyoqXG4gKiBDcmVhdGVkIGJ5IE5pY2hvbGFzIEhhbGxhaGFuIDxuaGFsbGFoYW5Ac3BhdGlhbGRldi5jb20+XG4gKiAgICAgICBvbiA4LzYvMTQuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGdkYWNzOiB7XG4gICAgbmFtZTogJ0dEQUNTOiBHbG9iYWwgRGlzYXN0ZXIgQWxlcnQgYW5kIENvb3JkaW5hdGlvbiBTeXN0ZW0nLFxuICAgIHR5cGU6ICdrbWwnLFxuICAgIHRoZW1lOiAncHJvamVjdGhlYWx0aCcsXG4gICAgdXJsOiAnaHR0cDovL3d3dy5nZGFjcy5vcmcveG1sL2dkYWNzLmttbCcsXG4gICAgcHJvcGVydGllczoge1xuICAgICAgbGVnZW5kOiAnJ1xuICAgIH1cbiAgfVxufTsiLCIvKipcbiAqIENyZWF0ZWQgYnkgTmljaG9sYXMgSGFsbGFoYW4gPG5oYWxsYWhhbkBzcGF0aWFsZGV2LmNvbT5cbiAqICAgICAgIG9uIDgvNi8xNC5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblxufTsiLCIvKipcbiAqIENyZWF0ZWQgYnkgUnlhbiBXaGl0bGV5IDxyd2hpdGxleUBzcGF0aWFsZGV2LmNvbT5cbiAqICAgICAgIG9uIDEyLzE1LzE0LlxuICovXG5cblxuXG5cbnZhciBnYWRtMCA9IHtcbiAgdHlwZTogJ3BiZicsXG4gIG5hbWU6ICdHQURNMCcsXG4gIC8vdXJsOiBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9zZXJ2aWNlcy9wb3N0Z2lzL2dhZG0wL2dlb21fc2ltcGxpZnlfbWVkL3ZlY3Rvci10aWxlcy97en0ve3h9L3t5fS5wYmY/ZmllbGRzPWd1aWQ6OmNoYXJhY3RlciB2YXJ5aW5nLG5hbWVfMCx5ZWFyJmxhYmVscG9pbnRzPXRydWVcIixcbiAgLy91cmw6IFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL3NlcnZpY2VzL3Bvc3RnaXMvZ2FkbTAvZ2VvbV9zaW1wbGlmeV9tZWQvdmVjdG9yLXRpbGVzL3t6fS97eH0ve3l9LnBiZj9maWVsZHM9Z3VpZDo6Y2hhcmFjdGVyIHZhcnlpbmcsbmFtZV8wLHllYXJcIixcblxuICB1cmw6IFwiLi4vc2VydmljZXMvdmVjdG9yLXRpbGVzL2dhZG0wX2xhYmVsc18yMDE0L3t6fS97eH0ve3l9LnBiZlwiLFxuICBkZXRhaWxzVXJsOiAnc2VydmljZXMvY3VzdG9tL2N1c3RvbV9vcGVyYXRpb24/bmFtZT1nZXQ6dGhlbWVieWd1aWQmZm9ybWF0PWpzb24mZ3VpZHM9Omd1aWRzJmdhZG1fbGV2ZWw9OmxldmVsJmZpbHRlcnM9OmZpbHRlcnMnLFxuICBkZWJ1ZzogZmFsc2UsXG4gIGNsaWNrYWJsZUxheWVyczogW1wiR0FETV8yMDE0XCJdLFxuXG4gIGdldElERm9yTGF5ZXJGZWF0dXJlOiBmdW5jdGlvbiAoZmVhdHVyZSkge1xuICAgIHJldHVybiBmZWF0dXJlLnByb3BlcnRpZXMuZ3VpZDtcbiAgICAvL3JldHVybiBmZWF0dXJlLnByb3BlcnRpZXMubmFtZV8wO1xuICB9LFxuICBtdXRleFRvZ2dsZTogdHJ1ZSxcblxuICAvL1RoZSBmaWx0ZXIgZnVuY3Rpb24gZG9lcyAyIHRoaW5nczogMSkgTWVyZ2UgaW4gZXh0ZXJuYWwgcHJvcGVydGllcyB0aGF0IGNhbiBiZSB1c2VkIGZvciBjaG9yb3BsZXRoaW5nLiAgMikgRmlsdGVyIG91dCBmZWF0dXJlcyB0aGF0IGRvbid0IGhhdmUgRUNPUyBwcm9wZXJ0aWVzXG4gIGZpbHRlcjogZnVuY3Rpb24odnRmLCAkcm9vdFNjb3BlKXtcbiAgICB2YXIgZGF0YSA9ICRyb290U2NvcGUudnREYXRhO1xuXG4gICAgaWYoZGF0YSAmJiBkYXRhW3Z0Zi5wcm9wZXJ0aWVzLmd1aWRdKXtcbiAgICAgIHZhciB0aGVtZSA9ICRyb290U2NvcGUuJHN0YXRlUGFyYW1zLnRoZW1lO1xuICAgICAgdnRmLnByb3BlcnRpZXMudGhlbWUgPSB0aGVtZTtcbiAgICAgIHZ0Zi5wcm9wZXJ0aWVzLmVjb3NfcHJvcGVydGllcyA9IHt9O1xuICAgICAgdnRmLnByb3BlcnRpZXMuZWNvc19wcm9wZXJ0aWVzW3RoZW1lXSA9IGRhdGFbdnRmLnByb3BlcnRpZXMuZ3VpZF07XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7IC8vZG9uJ3QgZHJhdyBmZWF0dXJlXG4gIH0sXG5cbiAgLyoqXG4gICAqIFdoZW4gd2Ugd2FudCB0byBsaW5rIGV2ZW50cyBiZXR3ZWVuIGxheWVycywgbGlrZSBjbGlja2luZyBvbiBhIGxhYmVsIGFuZCBhXG4gICAqIGNvcnJlc3BvbmRpbmcgcG9seWdvbiBmcmVhdHVyZSwgdGhpcyB3aWxsIHJldHVybiB0aGUgY29ycmVzcG9uZGluZyBtYXBwaW5nXG4gICAqIGJldHdlZW4gbGF5ZXJzLiBUaGlzIHByb3ZpZGVzIGtub3dsZWRnZSBvZiB3aGljaCBvdGhlciBmZWF0dXJlIGEgZ2l2ZW4gZmVhdHVyZVxuICAgKiBpcyBsaW5rZWQgdG8uXG4gICAqXG4gICAqIEBwYXJhbSBsYXllck5hbWUgIHRoZSBsYXllciB3ZSB3YW50IHRvIGtub3cgdGhlIGxpbmtlZCBsYXllciBmcm9tXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IHJldHVybnMgY29ycmVzcG9uZGluZyBsaW5rZWQgbGF5ZXJcbiAgICovXG4gIGxheWVyTGluazogZnVuY3Rpb24gKGxheWVyTmFtZSkge1xuICAgIGlmIChsYXllck5hbWUuaW5kZXhPZignX2xhYmVsJykgPiAtMSkge1xuICAgICAgcmV0dXJuIGxheWVyTmFtZS5yZXBsYWNlKCdfbGFiZWwnLCAnJyk7XG4gICAgfVxuICAgIHJldHVybiBsYXllck5hbWUgKyAnX2xhYmVsJztcbiAgfSxcblxuICBzdHlsZTogZ2V0VGhlbWVTdHlsZSxcblxuICBvbkNsaWNrOiBmdW5jdGlvbihldnQsICRodHRwLCAkcm9vdFNjb3BlLCBQQkZPYmplY3QpIHtcblxuICAgIGlmKGV2dCAmJiBldnQuZmVhdHVyZSAmJiBldnQuZmVhdHVyZS5pZCl7XG4gICAgICAvL0RvIHRoZSBvbmNsaWNrIHRoaW5nXG4gICAgICBQQkZPYmplY3QuZmV0Y2hGZWF0dXJlRGV0YWlscyhldnQuZmVhdHVyZS5pZCwgMCk7XG4gICAgfVxuICB9LFxuICBvblNlbGVjdDogZnVuY3Rpb24odnRmLCBQQkZPYmplY3Qpe1xuICAgIC8vV2hlbiBhIHNlbGVjdGlvbiBoYXMgY2hhbmdlZCAobGlrZXkgd2hlbiBhIGxhYmVsIHdhcyBjbGlja2VkIGFuZCB0aGUgY29ycmVzcG9uZGluZyBmZWF0dXJlIHNlbGVjdGVkKVxuICAgIGlmKHZ0ZiAmJiB2dGYuaWQpe1xuICAgICAgLy9EbyB0aGUgb25jbGljayB0aGluZ1xuICAgICAgUEJGT2JqZWN0LmZldGNoRmVhdHVyZURldGFpbHModnRmLmlkLCAwKTtcbiAgICB9XG4gIH1cbn1cblxudmFyIGdhZG0xID0ge1xuICB0eXBlOiAncGJmJyxcbiAgbmFtZTogJ0dBRE0xJyxcbiAgLy91cmw6IFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL3NlcnZpY2VzL3Bvc3RnaXMvZ2FkbTAvZ2VvbV9zaW1wbGlmeV9tZWQvdmVjdG9yLXRpbGVzL3t6fS97eH0ve3l9LnBiZj9maWVsZHM9Z3VpZDo6Y2hhcmFjdGVyIHZhcnlpbmcsbmFtZV8wLHllYXImbGFiZWxwb2ludHM9dHJ1ZVwiLFxuICAvL3VybDogXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvc2VydmljZXMvcG9zdGdpcy9nYWRtMC9nZW9tX3NpbXBsaWZ5X21lZC92ZWN0b3ItdGlsZXMve3p9L3t4fS97eX0ucGJmP2ZpZWxkcz1ndWlkOjpjaGFyYWN0ZXIgdmFyeWluZyxuYW1lXzAseWVhclwiLFxuXG4gIHVybDogXCIuLi9zZXJ2aWNlcy92ZWN0b3ItdGlsZXMvZ2FkbTFfbGFiZWxzXzIwMTQve3p9L3t4fS97eX0ucGJmXCIsXG4gIGRldGFpbHNVcmw6ICdzZXJ2aWNlcy9jdXN0b20vY3VzdG9tX29wZXJhdGlvbj9uYW1lPWdldDp0aGVtZWJ5Z3VpZCZmb3JtYXQ9anNvbiZndWlkcz06Z3VpZHMmZ2FkbV9sZXZlbD0xJmZpbHRlcnM9OmZpbHRlcnMnLFxuICBkZWJ1ZzogZmFsc2UsXG4gIGNsaWNrYWJsZUxheWVyczogW1wiR2FkbTFfMjAxNFwiXSxcblxuICBnZXRJREZvckxheWVyRmVhdHVyZTogZnVuY3Rpb24gKGZlYXR1cmUpIHtcbiAgICByZXR1cm4gZmVhdHVyZS5wcm9wZXJ0aWVzLmd1aWQ7XG4gIH0sXG4gIG11dGV4VG9nZ2xlOiB0cnVlLFxuXG4gIC8qKlxuICAgKiBUaGUgZmlsdGVyIGZ1bmN0aW9uIGdldHMgY2FsbGVkIHdoZW4gaXRlcmF0aW5nIHRob3VnaCBlYWNoIHZlY3RvciB0aWxlIGZlYXR1cmUgKHZ0ZikuIFlvdSBoYXZlIGFjY2Vzc1xuICAgKiB0byBldmVyeSBwcm9wZXJ0eSBhc3NvY2lhdGVkIHdpdGggYSBnaXZlbiBmZWF0dXJlICh0aGUgZmVhdHVyZSwgYW5kIHRoZSBsYXllcikuIFlvdSBjYW4gYWxzbyBmaWx0ZXJcbiAgICogYmFzZWQgb2YgdGhlIGNvbnRleHQgKGVhY2ggdGlsZSB0aGF0IHRoZSBmZWF0dXJlIGlzIGRyYXduIG9udG8pLlxuICAgKlxuICAgKiBSZXR1cm5pbmcgZmFsc2Ugc2tpcHMgb3ZlciB0aGUgZmVhdHVyZSBhbmQgaXQgaXMgbm90IGRyYXduLlxuICAgKlxuICAgKiBAcGFyYW0gZmVhdHVyZVxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIGZpbHRlcjogZnVuY3Rpb24odnRmLCAkcm9vdFNjb3BlKXtcbiAgICB2YXIgZGF0YSA9ICRyb290U2NvcGUudnREYXRhO1xuXG4gICAgaWYoZGF0YSAmJiBkYXRhW3Z0Zi5wcm9wZXJ0aWVzLmd1aWRdKXtcbiAgICAgIHZhciB0aGVtZSA9ICRyb290U2NvcGUuJHN0YXRlUGFyYW1zLnRoZW1lO1xuICAgICAgdnRmLnByb3BlcnRpZXMudGhlbWUgPSB0aGVtZTtcbiAgICAgIHZ0Zi5wcm9wZXJ0aWVzLmVjb3NfcHJvcGVydGllcyA9IHt9O1xuICAgICAgdnRmLnByb3BlcnRpZXMuZWNvc19wcm9wZXJ0aWVzW3RoZW1lXSA9IGRhdGFbdnRmLnByb3BlcnRpZXMuZ3VpZF07XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFdoZW4gd2Ugd2FudCB0byBsaW5rIGV2ZW50cyBiZXR3ZWVuIGxheWVycywgbGlrZSBjbGlja2luZyBvbiBhIGxhYmVsIGFuZCBhXG4gICAqIGNvcnJlc3BvbmRpbmcgcG9seWdvbiBmcmVhdHVyZSwgdGhpcyB3aWxsIHJldHVybiB0aGUgY29ycmVzcG9uZGluZyBtYXBwaW5nXG4gICAqIGJldHdlZW4gbGF5ZXJzLiBUaGlzIHByb3ZpZGVzIGtub3dsZWRnZSBvZiB3aGljaCBvdGhlciBmZWF0dXJlIGEgZ2l2ZW4gZmVhdHVyZVxuICAgKiBpcyBsaW5rZWQgdG8uXG4gICAqXG4gICAqIEBwYXJhbSBsYXllck5hbWUgIHRoZSBsYXllciB3ZSB3YW50IHRvIGtub3cgdGhlIGxpbmtlZCBsYXllciBmcm9tXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IHJldHVybnMgY29ycmVzcG9uZGluZyBsaW5rZWQgbGF5ZXJcbiAgICovXG4gIGxheWVyTGluazogZnVuY3Rpb24gKGxheWVyTmFtZSkge1xuICAgIGlmIChsYXllck5hbWUuaW5kZXhPZignX2xhYmVsJykgPiAtMSkge1xuICAgICAgcmV0dXJuIGxheWVyTmFtZS5yZXBsYWNlKCdfbGFiZWwnLCAnJyk7XG4gICAgfVxuICAgIHJldHVybiBsYXllck5hbWUgKyAnX2xhYmVsJztcbiAgfSxcblxuICBzdHlsZTogZ2V0VGhlbWVTdHlsZSxcblxuICBvbkNsaWNrOiBmdW5jdGlvbihldnQsICRodHRwLCAkcm9vdFNjb3BlLCBQQkZPYmplY3QpIHtcblxuICAgIGlmKGV2dCAmJiBldnQuZmVhdHVyZSAmJiBldnQuZmVhdHVyZS5pZCl7XG4gICAgICAvL0RvIHRoZSBvbmNsaWNrIHRoaW5nXG4gICAgICBQQkZPYmplY3QuZmV0Y2hGZWF0dXJlRGV0YWlscyhldnQuZmVhdHVyZS5pZCwgMCk7XG4gICAgfVxuICB9LFxuICBvblNlbGVjdDogZnVuY3Rpb24odnRmLCBQQkZPYmplY3Qpe1xuICAgIC8vV2hlbiBhIHNlbGVjdGlvbiBoYXMgY2hhbmdlZCAobGlrZXkgd2hlbiBhIGxhYmVsIHdhcyBjbGlja2VkIGFuZCB0aGUgY29ycmVzcG9uZGluZyBmZWF0dXJlIHNlbGVjdGVkKVxuICAgIGlmKHZ0ZiAmJiB2dGYuaWQpe1xuICAgICAgLy9EbyB0aGUgb25jbGljayB0aGluZ1xuICAgICAgUEJGT2JqZWN0LmZldGNoRmVhdHVyZURldGFpbHModnRmLmlkLCAwKTtcbiAgICB9XG4gIH1cbn1cblxuXG4vL3ZhciBoYXRjaERlc2lnbjtcblxuZnVuY3Rpb24gZ2V0VGhlbWVTdHlsZSh2dGYpe1xuXG4gIHZhciBvcGFjaXR5ID0gXCIwLjVcIjtcblxuICB2YXIgc3R5bGUgPSB7fTtcbiAgLy9EZWZhdWx0IHN0eWxlIC0gbWFrZSBob2xsb3dcbiAgc3R5bGUuY29sb3IgPSAncmdiYSgwLDAsMCwnICsgb3BhY2l0eSArICcpJztcbiAgc3R5bGUub3V0bGluZSA9IHtcbiAgICBjb2xvcjogJ3JnYigyMCwyMCwyMCknLFxuICAgIHNpemU6IDJcbiAgfTtcblxuICB2YXIgcHJvcGVydGllcyA9IHZ0Zi5wcm9wZXJ0aWVzO1xuXG4gIC8vU2tpcCBpZiB3ZSdyZSBhIHJlZ3VsYXIgcG9seWdvbiwgYW5kIG5vdCBhIGxhYmVsIHBvaW50LCBhbmQgaWYgdGhlcmUgaXMgbm8gRUNPUyBwcm9wZXJ0aWVzLlxuICBpZih2dGYubGF5ZXIubmFtZS5pbmRleE9mKCdsYWJlbCcpID09IC0xICYmICFwcm9wZXJ0aWVzLnRoZW1lKXtcbiAgICByZXR1cm4gc3R5bGU7XG4gIH1cblxuICB2YXIgZWNvc1Byb3BlcnRpZXM7XG5cbiAgaWYgKHByb3BlcnRpZXMudGhlbWUgPT0gXCJkaXNhc3RlclwiKSB7XG4gICAgZWNvc1Byb3BlcnRpZXMgPSBwcm9wZXJ0aWVzW1wiZWNvc19wcm9wZXJ0aWVzXCJdW1wiZGlzYXN0ZXJcIl07XG5cbiAgICBpZiAoZWNvc1Byb3BlcnRpZXMpIHtcbiAgICAgIGlmIChlY29zUHJvcGVydGllcy5pcm9jX3N0YXR1c19fYykge1xuICAgICAgICBzd2l0Y2ggKGVjb3NQcm9wZXJ0aWVzLmlyb2Nfc3RhdHVzX19jLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgICAgICBjYXNlIFwiYWN0aXZlXCI6XG4gICAgICAgICAgICBzdHlsZS5jb2xvciA9ICdyZ2JhKDIwNCwwLDUxLCcgKyBvcGFjaXR5ICsgJyknO1xuICAgICAgICAgICAgc3R5bGUub3V0bGluZSA9IHtcbiAgICAgICAgICAgICAgY29sb3I6ICdyZ2IoMjAsMjAsMjApJyxcbiAgICAgICAgICAgICAgc2l6ZTogMlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBcIm1vbml0b3JpbmdcIjpcbiAgICAgICAgICAgIHN0eWxlLmNvbG9yID0gJ3JnYmEoMjA0LDE1MywwLCcgKyBvcGFjaXR5ICsgJyknO1xuICAgICAgICAgICAgc3R5bGUub3V0bGluZSA9IHtcbiAgICAgICAgICAgICAgY29sb3I6ICdyZ2IoMjAsMjAsMjApJyxcbiAgICAgICAgICAgICAgc2l6ZTogMlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBcImluYWN0aXZlXCI6XG4gICAgICAgICAgICBzdHlsZS5jb2xvciA9ICdyZ2JhKDI1NSwyNTUsMjU1LCcgKyBvcGFjaXR5ICsgJyknO1xuICAgICAgICAgICAgc3R5bGUub3V0bGluZSA9IHtcbiAgICAgICAgICAgICAgY29sb3I6ICdyZ2IoMjAsMjAsMjApJyxcbiAgICAgICAgICAgICAgc2l6ZTogMlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgfVxuICBlbHNlIGlmIChwcm9wZXJ0aWVzLnRoZW1lID09IFwicHJvamVjdFJpc2tcIikge1xuICAgIGVjb3NQcm9wZXJ0aWVzID0gcHJvcGVydGllc1tcImVjb3NfcHJvcGVydGllc1wiXVtcInByb2plY3RSaXNrXCJdO1xuICAgIGlmIChlY29zUHJvcGVydGllcyAmJiBlY29zUHJvcGVydGllcy5vdmVyYWxsX2Fzc2Vzc21lbnRfX2MpIHtcbiAgICAgIHN3aXRjaCAoZWNvc1Byb3BlcnRpZXMub3ZlcmFsbF9hc3Nlc3NtZW50X19jLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgICAgY2FzZSBcImNyaXRpY2FsXCI6XG4gICAgICAgICAgc3R5bGUuY29sb3IgPSAncmdiYSgyNTUsMCwwLCcgKyBvcGFjaXR5ICsgJyknO1xuICAgICAgICAgIHN0eWxlLm91dGxpbmUgPSB7XG4gICAgICAgICAgICBjb2xvcjogJ3JnYigyMCwyMCwyMCknLFxuICAgICAgICAgICAgc2l6ZTogMlxuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcImhpZ2hcIjpcbiAgICAgICAgICBzdHlsZS5jb2xvciA9ICdyZ2JhKDI1NSwxMjcsMCwnICsgb3BhY2l0eSArICcpJztcbiAgICAgICAgICBzdHlsZS5vdXRsaW5lID0ge1xuICAgICAgICAgICAgY29sb3I6ICdyZ2IoMjAsMjAsMjApJyxcbiAgICAgICAgICAgIHNpemU6IDJcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJtZWRpdW1cIjpcbiAgICAgICAgICBzdHlsZS5jb2xvciA9ICdyZ2JhKDI1NSwyNTUsMCwnICsgb3BhY2l0eSArICcpJztcbiAgICAgICAgICBzdHlsZS5vdXRsaW5lID0ge1xuICAgICAgICAgICAgY29sb3I6ICdyZ2IoMjAsMjAsMjApJyxcbiAgICAgICAgICAgIHNpemU6IDJcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJsb3dcIjpcbiAgICAgICAgICBzdHlsZS5jb2xvciA9ICdyZ2JhKDAsMjU1LDAsJyArIG9wYWNpdHkgKyAnKSc7XG4gICAgICAgICAgc3R5bGUub3V0bGluZSA9IHtcbiAgICAgICAgICAgIGNvbG9yOiAncmdiKDIwLDIwLDIwKScsXG4gICAgICAgICAgICBzaXplOiAyXG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBlbHNlIGlmIChwcm9wZXJ0aWVzLnRoZW1lID09IFwicHJvamVjdEhlYWx0aFwiKSB7XG4gICAgZWNvc1Byb3BlcnRpZXMgPSBwcm9wZXJ0aWVzW1wiZWNvc19wcm9wZXJ0aWVzXCJdW1wicHJvamVjdEhlYWx0aFwiXTtcbiAgICBpZiAoZWNvc1Byb3BlcnRpZXMgJiYgZWNvc1Byb3BlcnRpZXMub3ZlcmFsbF9zdGF0dXNfX2MpIHtcbiAgICAgIHN3aXRjaCAoZWNvc1Byb3BlcnRpZXMub3ZlcmFsbF9zdGF0dXNfX2MudG9Mb3dlckNhc2UoKSkge1xuICAgICAgICBjYXNlIFwicmVkXCI6XG4gICAgICAgICAgc3R5bGUuY29sb3IgPSAncmdiYSgyNTUsMCwwLCcgKyBvcGFjaXR5ICsgJyknO1xuICAgICAgICAgIHN0eWxlLm91dGxpbmUgPSB7XG4gICAgICAgICAgICBjb2xvcjogJ3JnYigyMCwyMCwyMCknLFxuICAgICAgICAgICAgc2l6ZTogMlxuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcInllbGxvd1wiOlxuICAgICAgICAgIHN0eWxlLmNvbG9yID0gJ3JnYmEoMjU1LDI1NSwwLCcgKyBvcGFjaXR5ICsgJyknO1xuICAgICAgICAgIHN0eWxlLm91dGxpbmUgPSB7XG4gICAgICAgICAgICBjb2xvcjogJ3JnYigyMCwyMCwyMCknLFxuICAgICAgICAgICAgc2l6ZTogMlxuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcImdyZWVuXCI6XG4gICAgICAgICAgc3R5bGUuY29sb3IgPSAncmdiYSgwLDI1NSwwLCcgKyBvcGFjaXR5ICsgJyknO1xuICAgICAgICAgIHN0eWxlLm91dGxpbmUgPSB7XG4gICAgICAgICAgICBjb2xvcjogJ3JnYigyMCwyMCwyMCknLFxuICAgICAgICAgICAgc2l6ZTogMlxuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIndoaXRlXCI6XG4gICAgICAgICAgc3R5bGUuY29sb3IgPSAncmdiYSgyNTUsMjU1LDI1NSwnICsgb3BhY2l0eSArICcpJztcbiAgICAgICAgICBzdHlsZS5vdXRsaW5lID0ge1xuICAgICAgICAgICAgY29sb3I6ICdyZ2IoMjAsMjAsMjApJyxcbiAgICAgICAgICAgIHNpemU6IDJcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGVsc2UgaWYgKHByb3BlcnRpZXMudGhlbWUgPT0gXCJwcm9qZWN0XCIpIHtcbiAgICBlY29zUHJvcGVydGllcyA9IHByb3BlcnRpZXNbXCJlY29zX3Byb3BlcnRpZXNcIl1bXCJwcm9qZWN0XCJdO1xuXG4gICAgaWYgKGVjb3NQcm9wZXJ0aWVzICYmIGVjb3NQcm9wZXJ0aWVzKSB7XG5cbiAgICAgIHZhciBjb3VudCA9ICBwYXJzZUludChlY29zUHJvcGVydGllcy50aGVtZV9jb3VudCk7XG5cbiAgICAgIGlmKGNvdW50ID09IDApIHtcbiAgICAgICAgLy9tYWtlIGhvbGxvd1xuICAgICAgICBzdHlsZS5jb2xvciA9ICdyZ2JhKDAsMCwwLCcgKyBvcGFjaXR5ICsgJyknO1xuICAgICAgICBzdHlsZS5vdXRsaW5lID0ge1xuICAgICAgICAgIGNvbG9yOiAncmdiKDIwLDIwLDIwKScsXG4gICAgICAgICAgc2l6ZTogMlxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIGlmKGNvdW50ID4gMCAmJiBjb3VudCA8PSAyKSB7XG4gICAgICAgIC8vbWFrZSBob2xsb3dcbiAgICAgICAgc3R5bGUuY29sb3IgPSAncmdiYSgyMjksMjU1LDIzNSwnICsgb3BhY2l0eSArICcpJztcbiAgICAgICAgc3R5bGUub3V0bGluZSA9IHtcbiAgICAgICAgICBjb2xvcjogJ3JnYigyMCwyMCwyMCknLFxuICAgICAgICAgIHNpemU6IDJcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSBpZihjb3VudCA+IDIgJiYgY291bnQgPD0gNSkge1xuICAgICAgICAvL21ha2UgaG9sbG93XG4gICAgICAgIHN0eWxlLmNvbG9yID0gJ3JnYmEoMTY5LDI1NSwxODksJyArIG9wYWNpdHkgKyAnKSc7XG4gICAgICAgIHN0eWxlLm91dGxpbmUgPSB7XG4gICAgICAgICAgY29sb3I6ICdyZ2IoMjAsMjAsMjApJyxcbiAgICAgICAgICBzaXplOiAyXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2UgaWYoY291bnQgPiA1ICYmIGNvdW50IDw9IDgpIHtcbiAgICAgICAgLy9tYWtlIGhvbGxvd1xuICAgICAgICBzdHlsZS5jb2xvciA9ICdyZ2JhKDE2OSwyNTUsMTI1LCcgKyBvcGFjaXR5ICsgJyknO1xuICAgICAgICBzdHlsZS5vdXRsaW5lID0ge1xuICAgICAgICAgIGNvbG9yOiAncmdiKDIwLDIwLDIwKScsXG4gICAgICAgICAgc2l6ZTogMlxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIGlmKGNvdW50ID4gOCAmJiBjb3VudCA8PSAxMCkge1xuICAgICAgICAvL21ha2UgaG9sbG93XG4gICAgICAgIHN0eWxlLmNvbG9yID0gJ3JnYmEoNDEsMjU1LDkwLCcgKyBvcGFjaXR5ICsgJyknO1xuICAgICAgICBzdHlsZS5vdXRsaW5lID0ge1xuICAgICAgICAgIGNvbG9yOiAncmdiKDIwLDIwLDIwKScsXG4gICAgICAgICAgc2l6ZTogMlxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIGlmKGNvdW50ID4gMTApIHtcbiAgICAgICAgLy9tYWtlIGhvbGxvd1xuICAgICAgICBzdHlsZS5jb2xvciA9ICdyZ2JhKDAsMjU1LDU5LCcgKyBvcGFjaXR5ICsgJyknO1xuICAgICAgICBzdHlsZS5vdXRsaW5lID0ge1xuICAgICAgICAgIGNvbG9yOiAncmdiKDIwLDIwLDIwKScsXG4gICAgICAgICAgc2l6ZTogMlxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICB9XG4gICAgZWxzZXtcbiAgICAgIC8vbWFrZSBob2xsb3dcbiAgICAgIHN0eWxlLmNvbG9yID0gJ3JnYmEoMCwwLDAsJyArIG9wYWNpdHkgKyAnKSc7XG4gICAgICBzdHlsZS5vdXRsaW5lID0ge1xuICAgICAgICBjb2xvcjogJ3JnYigyMCwyMCwyMCknLFxuICAgICAgICBzaXplOiAyXG4gICAgICB9XG4gICAgfVxuICB9XG5cblxuICAvL2lmKCFoYXRjaERlc2lnbil7XG4gIC8vICBoYXRjaERlc2lnbiA9IGdldEltYWdlUmVmKCk7XG4gIC8vfVxuXG4gIC8vc3R5bGUuc2VsZWN0ZWQgPSB7XG4gIC8vICBjb2xvcjogZnVuY3Rpb24oY3R4MmQpe1xuICAvLyAgICAvL0hhdGNoIHN5bWJvbFxuICAvLyAgICB2YXIgcmVwZWF0ID0gY3R4MmQuY3JlYXRlUGF0dGVybihoYXRjaERlc2lnbiwgXCJyZXBlYXRcIik7XG4gIC8vICAgIHJldHVybiByZXBlYXQ7XG4gIC8vXG4gIC8vICB9LFxuICAvLyAgb3V0bGluZSA6IHtcbiAgLy8gICAgY29sb3I6ICdyZ2IoMjU1LDI1NSwwKScsXG4gIC8vICAgIHNpemU6IDJcbiAgLy8gIH1cbiAgLy99XG5cbiAgc3R5bGUuc2VsZWN0ZWQgPSB7XG4gICAgY29sb3I6ICdyZ2JhKDI1NSwyNTUsMCwwLjgpJyxcbiAgICBvdXRsaW5lIDoge1xuICAgICAgY29sb3I6ICdyZ2IoMjU1LDI1NSwwKScsXG4gICAgICBzaXplOiAyXG4gICAgfVxuICB9XG5cbiAgLy9MYWJlbFxuICBpZiAodnRmLmxheWVyLm5hbWUgPT09ICdHQURNXzIwMTRfbGFiZWwnKSB7XG4gICAgaWYoZWNvc1Byb3BlcnRpZXMgJiYgZWNvc1Byb3BlcnRpZXMudGhlbWVfY291bnQpe1xuICAgICAgc3R5bGUuc3RhdGljTGFiZWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBsYWJlbFN0eWxlID0ge1xuICAgICAgICAgIGh0bWw6IChlY29zUHJvcGVydGllcyAmJiBlY29zUHJvcGVydGllcy50aGVtZV9jb3VudCA/IGJ1aWxkRHluYW1pY0xhYmVsKGVjb3NQcm9wZXJ0aWVzKSA6IFwiXCIpLFxuICAgICAgICAgIGljb25TaXplOiBbNDIsIDQyXSxcbiAgICAgICAgICBjc3NDbGFzczogJ25vY2xhc3MnXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBsYWJlbFN0eWxlO1xuICAgICAgfTtcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgIC8vV2hlbiBzd2l0Y2hpbmcgdGhlbWVzLCByZXNldCBvbGQgbGFiZWwgc3R5bGVzIHRvIG51bGwgc28gbGFiZWxzIGRvbid0IGdldCBkcmF3biBmb3Igb2xkIHRoZW1lLlxuICAgICAgc3R5bGUuc3RhdGljTGFiZWwgPSBudWxsO1xuICAgIH1cblxuICB9XG5cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIGJ1aWxkRHluYW1pY0xhYmVsKHByb3BlcnRpZXMpe1xuICBpZiAocHJvcGVydGllcy50aGVtZSA9PSBcImRpc2FzdGVyXCIpIHtcbiAgICB2YXIgY29sb3IgPSBcIlwiO1xuICAgIHZhciBsYWJlbENvbG9yID0gXCJcIjtcbiAgICBpZiAocHJvcGVydGllcyAmJiBwcm9wZXJ0aWVzLmlyb2Nfc3RhdHVzX19jKSB7XG4gICAgICBzd2l0Y2ggKHByb3BlcnRpZXMuaXJvY19zdGF0dXNfX2MudG9Mb3dlckNhc2UoKSkge1xuICAgICAgICBjYXNlIFwiYWN0aXZlXCI6XG4gICAgICAgICAgY29sb3IgPSBcInJnYmEoMjA0LDAsNTEsMC40KVwiO1xuICAgICAgICAgIGxhYmVsQ29sb3IgPSBcIiNmZmZcIjtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIm1vbml0b3JpbmdcIjpcbiAgICAgICAgICBjb2xvciA9IFwicmdiYSgyMjUsMTg3LDM3LDAuNClcIjtcbiAgICAgICAgICBsYWJlbENvbG9yID0gXCIjZmZmXCI7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJpbmFjdGl2ZVwiOlxuICAgICAgICAgIGNvbG9yID0gXCJyZ2JhKDE4OSwxODksMTg5LDAuNClcIjtcbiAgICAgICAgICBsYWJlbENvbG9yID0gXCIjMDAwXCI7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiAnPGRpdiBjbGFzcz1cImxhYmVsLWljb24tbnVtYmVyLTQwcGVyY2VudFwiJyArIChjb2xvciA/ICcgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiAnICsgY29sb3IgKyAnO2NvbG9yOiAnICsgbGFiZWxDb2xvciArICdcIicgOiAnJykgKyAnPjxzcGFuPicgKyBwcm9wZXJ0aWVzLnRoZW1lX2NvdW50ICsgJzwvc3Bhbj48L2Rpdj4nO1xuICB9XG4gIGVsc2Uge1xuICAgIHJldHVybiAnPGRpdiBjbGFzcz1cImxhYmVsLWljb24tbnVtYmVyLTQwcGVyY2VudFwiPjxzcGFuPicgKyBwcm9wZXJ0aWVzLnRoZW1lX2NvdW50ICsgJzwvc3Bhbj48L2Rpdj4nO1xuICB9XG59XG5cblxuXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbi8vIGZ1bmN0aW9uIHdhaXRmb3IgLSBXYWl0IHVudGlsIGEgY29uZGl0aW9uIGlzIG1ldFxuLy9cbi8vIE5lZWRlZCBwYXJhbWV0ZXJzOlxuLy8gICAgdGVzdDogYSB2YWx1ZVxuLy8gICAgZXhwZWN0ZWRWYWx1ZTogdGhlIHZhbHVlIG9mIHRoZSB0ZXN0IGZ1bmN0aW9uIHdlIGFyZSB3YWl0aW5nIGZvclxuLy8gICAgbXNlYzogZGVsYXkgYmV0d2VlbiB0aGUgY2FsbHMgdG8gdGVzdFxuLy8gICAgY2FsbGJhY2s6IGZ1bmN0aW9uIHRvIGV4ZWN1dGUgd2hlbiB0aGUgY29uZGl0aW9uIGlzIG1ldFxuLy8gUGFyYW1ldGVycyBmb3IgZGVidWdnaW5nOlxuLy8gICAgY291bnQ6IHVzZWQgdG8gY291bnQgdGhlIGxvb3BzXG4vLyAgICBzb3VyY2U6IGEgc3RyaW5nIHRvIHNwZWNpZnkgYW4gSUQsIGEgbWVzc2FnZSwgZXRjXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbmZ1bmN0aW9uIHdhaXRmb3IodGVzdCwgZXhwZWN0ZWRWYWx1ZSwgbXNlYywgY291bnQsIHNvdXJjZSwgY2FsbGJhY2spIHtcbiAgLy8gQ2hlY2sgaWYgY29uZGl0aW9uIG1ldC4gSWYgbm90LCByZS1jaGVjayBsYXRlciAobXNlYykuXG4gIHdoaWxlICh0ZXN0KCkgIT09IGV4cGVjdGVkVmFsdWUpIHtcbiAgICBjb3VudCsrO1xuICAgIGNvbnNvbGUubG9nKFwiV2FpdGluZyBmb3IgY29uZGl0aW9uIHRvIGJlIG1ldC4uLlwiICsgY291bnQpO1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICB3YWl0Zm9yKHRlc3QsIGV4cGVjdGVkVmFsdWUsIG1zZWMsIGNvdW50LCBzb3VyY2UsIGNhbGxiYWNrKTtcbiAgICB9LCBtc2VjKTtcbiAgICByZXR1cm47XG4gIH1cbiAgLy8gQ29uZGl0aW9uIGZpbmFsbHkgbWV0LiBjYWxsYmFjaygpIGNhbiBiZSBleGVjdXRlZC5cbiAgY29uc29sZS5sb2coc291cmNlICsgJzogJyArIHRlc3QoKSArICcsIGV4cGVjdGVkOiAnICsgZXhwZWN0ZWRWYWx1ZSArICcsICcgKyBjb3VudCArICcgbG9vcHMuJyk7XG4gIGNhbGxiYWNrKCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZURlc2lnbigpe1xuICB2YXIgcGF0dGVybiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICBwYXR0ZXJuLndpZHRoID0gNDA7XG4gIHBhdHRlcm4uaGVpZ2h0ID0gNDA7XG4gIHZhciBwY3R4ID0gcGF0dGVybi5nZXRDb250ZXh0KCcyZCcpO1xuXG4gIHBjdHguZmlsbFN0eWxlID0gXCJyZ2JhKDE4OCwgMjIyLCAxNzgsIDAuNSlcIjtcbiAgcGN0eC5maWxsUmVjdCgwLDAsMjAsMjApO1xuICBwY3R4LmZpbGxSZWN0KDIwLDIwLDIwLDIwKTtcblxuICByZXR1cm4gcGF0dGVybjtcbn1cblxuZnVuY3Rpb24gZ2V0SW1hZ2VSZWYodXJsKXtcbiAgdmFyIGltZyA9IG5ldyBJbWFnZSgyNTYsMjU2KTsgLy8gd2lkdGgsIGhlaWdodCB2YWx1ZXMgYXJlIG9wdGlvbmFsIHBhcmFtc1xuICBpbWcuc3JjID0gJ2ltYWdlcy9kaWFnb25hbF9zdHJpcGVzXzEucG5nJztcbiAgcmV0dXJuIGltZztcbn1cblxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZ2FkbTAgOiBnYWRtMCxcbiAgZ2FkbTEgOiBnYWRtMVxufTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBpZWVlNzU0ID0gcmVxdWlyZSgnaWVlZTc1NCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFByb3RvYnVmO1xuZnVuY3Rpb24gUHJvdG9idWYoYnVmKSB7XG4gICAgdGhpcy5idWYgPSBidWY7XG4gICAgdGhpcy5wb3MgPSAwO1xufVxuXG5Qcm90b2J1Zi5wcm90b3R5cGUgPSB7XG4gICAgZ2V0IGxlbmd0aCgpIHsgcmV0dXJuIHRoaXMuYnVmLmxlbmd0aDsgfVxufTtcblxuUHJvdG9idWYuVmFyaW50ID0gMDtcblByb3RvYnVmLkludDY0ID0gMTtcblByb3RvYnVmLk1lc3NhZ2UgPSAyO1xuUHJvdG9idWYuU3RyaW5nID0gMjtcblByb3RvYnVmLlBhY2tlZCA9IDI7XG5Qcm90b2J1Zi5JbnQzMiA9IDU7XG5cblByb3RvYnVmLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5idWYgPSBudWxsO1xufTtcblxuLy8gPT09IFJFQURJTkcgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuUHJvdG9idWYucHJvdG90eXBlLnJlYWRVSW50MzIgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgdmFsID0gdGhpcy5idWYucmVhZFVJbnQzMkxFKHRoaXMucG9zKTtcbiAgICB0aGlzLnBvcyArPSA0O1xuICAgIHJldHVybiB2YWw7XG59O1xuXG5Qcm90b2J1Zi5wcm90b3R5cGUucmVhZFVJbnQ2NCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciB2YWwgPSB0aGlzLmJ1Zi5yZWFkVUludDY0TEUodGhpcy5wb3MpO1xuICAgIHRoaXMucG9zICs9IDg7XG4gICAgcmV0dXJuIHZhbDtcbn07XG5cblByb3RvYnVmLnByb3RvdHlwZS5yZWFkRG91YmxlID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHZhbCA9IGllZWU3NTQucmVhZCh0aGlzLmJ1ZiwgdGhpcy5wb3MsIHRydWUsIDUyLCA4KTtcbiAgICB0aGlzLnBvcyArPSA4O1xuICAgIHJldHVybiB2YWw7XG59O1xuXG5Qcm90b2J1Zi5wcm90b3R5cGUucmVhZFZhcmludCA9IGZ1bmN0aW9uKCkge1xuICAgIC8vIFRPRE86IGJvdW5kcyBjaGVja2luZ1xuICAgIHZhciBwb3MgPSB0aGlzLnBvcztcbiAgICBpZiAodGhpcy5idWZbcG9zXSA8PSAweDdmKSB7XG4gICAgICAgIHRoaXMucG9zKys7XG4gICAgICAgIHJldHVybiB0aGlzLmJ1Zltwb3NdO1xuICAgIH0gZWxzZSBpZiAodGhpcy5idWZbcG9zICsgMV0gPD0gMHg3Zikge1xuICAgICAgICB0aGlzLnBvcyArPSAyO1xuICAgICAgICByZXR1cm4gKHRoaXMuYnVmW3Bvc10gJiAweDdmKSB8ICh0aGlzLmJ1Zltwb3MgKyAxXSA8PCA3KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuYnVmW3BvcyArIDJdIDw9IDB4N2YpIHtcbiAgICAgICAgdGhpcy5wb3MgKz0gMztcbiAgICAgICAgcmV0dXJuICh0aGlzLmJ1Zltwb3NdICYgMHg3ZikgfCAodGhpcy5idWZbcG9zICsgMV0gJiAweDdmKSA8PCA3IHwgKHRoaXMuYnVmW3BvcyArIDJdKSA8PCAxNDtcbiAgICB9IGVsc2UgaWYgKHRoaXMuYnVmW3BvcyArIDNdIDw9IDB4N2YpIHtcbiAgICAgICAgdGhpcy5wb3MgKz0gNDtcbiAgICAgICAgcmV0dXJuICh0aGlzLmJ1Zltwb3NdICYgMHg3ZikgfCAodGhpcy5idWZbcG9zICsgMV0gJiAweDdmKSA8PCA3IHwgKHRoaXMuYnVmW3BvcyArIDJdICYgMHg3ZikgPDwgMTQgfCAodGhpcy5idWZbcG9zICsgM10pIDw8IDIxO1xuICAgIH0gZWxzZSBpZiAodGhpcy5idWZbcG9zICsgNF0gPD0gMHg3Zikge1xuICAgICAgICB0aGlzLnBvcyArPSA1O1xuICAgICAgICByZXR1cm4gKCh0aGlzLmJ1Zltwb3NdICYgMHg3ZikgfCAodGhpcy5idWZbcG9zICsgMV0gJiAweDdmKSA8PCA3IHwgKHRoaXMuYnVmW3BvcyArIDJdICYgMHg3ZikgPDwgMTQgfCAodGhpcy5idWZbcG9zICsgM10pIDw8IDIxKSArICh0aGlzLmJ1Zltwb3MgKyA0XSAqIDI2ODQzNTQ1Nik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5za2lwKFByb3RvYnVmLlZhcmludCk7XG4gICAgICAgIHJldHVybiAwO1xuICAgICAgICAvLyB0aHJvdyBuZXcgRXJyb3IoXCJUT0RPOiBIYW5kbGUgNisgYnl0ZSB2YXJpbnRzXCIpO1xuICAgIH1cbn07XG5cblByb3RvYnVmLnByb3RvdHlwZS5yZWFkU1ZhcmludCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBudW0gPSB0aGlzLnJlYWRWYXJpbnQoKTtcbiAgICBpZiAobnVtID4gMjE0NzQ4MzY0NykgdGhyb3cgbmV3IEVycm9yKCdUT0RPOiBIYW5kbGUgbnVtYmVycyA+PSAyXjMwJyk7XG4gICAgLy8gemlnemFnIGVuY29kaW5nXG4gICAgcmV0dXJuICgobnVtID4+IDEpIF4gLShudW0gJiAxKSk7XG59O1xuXG5Qcm90b2J1Zi5wcm90b3R5cGUucmVhZFN0cmluZyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBieXRlcyA9IHRoaXMucmVhZFZhcmludCgpO1xuICAgIC8vIFRPRE86IGJvdW5kcyBjaGVja2luZ1xuICAgIHZhciBjaHIgPSBTdHJpbmcuZnJvbUNoYXJDb2RlO1xuICAgIHZhciBiID0gdGhpcy5idWY7XG4gICAgdmFyIHAgPSB0aGlzLnBvcztcbiAgICB2YXIgZW5kID0gdGhpcy5wb3MgKyBieXRlcztcbiAgICB2YXIgc3RyID0gJyc7XG4gICAgd2hpbGUgKHAgPCBlbmQpIHtcbiAgICAgICAgaWYgKGJbcF0gPD0gMHg3Rikgc3RyICs9IGNocihiW3ArK10pO1xuICAgICAgICBlbHNlIGlmIChiW3BdIDw9IDB4QkYpIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBVVEYtOCBjb2RlcG9pbnQ6ICcgKyBiW3BdKTtcbiAgICAgICAgZWxzZSBpZiAoYltwXSA8PSAweERGKSBzdHIgKz0gY2hyKChiW3ArK10gJiAweDFGKSA8PCA2IHwgKGJbcCsrXSAmIDB4M0YpKTtcbiAgICAgICAgZWxzZSBpZiAoYltwXSA8PSAweEVGKSBzdHIgKz0gY2hyKChiW3ArK10gJiAweDFGKSA8PCAxMiB8IChiW3ArK10gJiAweDNGKSA8PCA2IHwgKGJbcCsrXSAmIDB4M0YpKTtcbiAgICAgICAgZWxzZSBpZiAoYltwXSA8PSAweEY3KSBwICs9IDQ7IC8vIFdlIGNhbid0IGhhbmRsZSB0aGVzZSBjb2RlcG9pbnRzIGluIEpTLCBzbyBza2lwLlxuICAgICAgICBlbHNlIGlmIChiW3BdIDw9IDB4RkIpIHAgKz0gNTtcbiAgICAgICAgZWxzZSBpZiAoYltwXSA8PSAweEZEKSBwICs9IDY7XG4gICAgICAgIGVsc2UgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIFVURi04IGNvZGVwb2ludDogJyArIGJbcF0pO1xuICAgIH1cbiAgICB0aGlzLnBvcyArPSBieXRlcztcbiAgICByZXR1cm4gc3RyO1xufTtcblxuUHJvdG9idWYucHJvdG90eXBlLnJlYWRCdWZmZXIgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgYnl0ZXMgPSB0aGlzLnJlYWRWYXJpbnQoKTtcbiAgICB2YXIgYnVmZmVyID0gdGhpcy5idWYuc3ViYXJyYXkodGhpcy5wb3MsIHRoaXMucG9zICsgYnl0ZXMpO1xuICAgIHRoaXMucG9zICs9IGJ5dGVzO1xuICAgIHJldHVybiBidWZmZXI7XG59O1xuXG5Qcm90b2J1Zi5wcm90b3R5cGUucmVhZFBhY2tlZCA9IGZ1bmN0aW9uKHR5cGUpIHtcbiAgICAvLyBUT0RPOiBib3VuZHMgY2hlY2tpbmdcbiAgICB2YXIgYnl0ZXMgPSB0aGlzLnJlYWRWYXJpbnQoKTtcbiAgICB2YXIgZW5kID0gdGhpcy5wb3MgKyBieXRlcztcbiAgICB2YXIgYXJyYXkgPSBbXTtcbiAgICB3aGlsZSAodGhpcy5wb3MgPCBlbmQpIHtcbiAgICAgICAgYXJyYXkucHVzaCh0aGlzWydyZWFkJyArIHR5cGVdKCkpO1xuICAgIH1cbiAgICByZXR1cm4gYXJyYXk7XG59O1xuXG5Qcm90b2J1Zi5wcm90b3R5cGUuc2tpcCA9IGZ1bmN0aW9uKHZhbCkge1xuICAgIC8vIFRPRE86IGJvdW5kcyBjaGVja2luZ1xuICAgIHZhciB0eXBlID0gdmFsICYgMHg3O1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAvKiB2YXJpbnQgKi8gY2FzZSBQcm90b2J1Zi5WYXJpbnQ6IHdoaWxlICh0aGlzLmJ1Zlt0aGlzLnBvcysrXSA+IDB4N2YpOyBicmVhaztcbiAgICAgICAgLyogNjQgYml0ICovIGNhc2UgUHJvdG9idWYuSW50NjQ6IHRoaXMucG9zICs9IDg7IGJyZWFrO1xuICAgICAgICAvKiBsZW5ndGggKi8gY2FzZSBQcm90b2J1Zi5NZXNzYWdlOiB2YXIgYnl0ZXMgPSB0aGlzLnJlYWRWYXJpbnQoKTsgdGhpcy5wb3MgKz0gYnl0ZXM7IGJyZWFrO1xuICAgICAgICAvKiAzMiBiaXQgKi8gY2FzZSBQcm90b2J1Zi5JbnQzMjogdGhpcy5wb3MgKz0gNDsgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6IHRocm93IG5ldyBFcnJvcignVW5pbXBsZW1lbnRlZCB0eXBlOiAnICsgdHlwZSk7XG4gICAgfVxufTtcblxuLy8gPT09IFdSSVRJTkcgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuUHJvdG9idWYucHJvdG90eXBlLndyaXRlVGFnID0gZnVuY3Rpb24odGFnLCB0eXBlKSB7XG4gICAgdGhpcy53cml0ZVZhcmludCgodGFnIDw8IDMpIHwgdHlwZSk7XG59O1xuXG5Qcm90b2J1Zi5wcm90b3R5cGUucmVhbGxvYyA9IGZ1bmN0aW9uKG1pbikge1xuICAgIHZhciBsZW5ndGggPSB0aGlzLmJ1Zi5sZW5ndGg7XG4gICAgd2hpbGUgKGxlbmd0aCA8IHRoaXMucG9zICsgbWluKSBsZW5ndGggKj0gMjtcbiAgICBpZiAobGVuZ3RoICE9IHRoaXMuYnVmLmxlbmd0aCkge1xuICAgICAgICB2YXIgYnVmID0gbmV3IEJ1ZmZlcihsZW5ndGgpO1xuICAgICAgICB0aGlzLmJ1Zi5jb3B5KGJ1Zik7XG4gICAgICAgIHRoaXMuYnVmID0gYnVmO1xuICAgIH1cbn07XG5cblByb3RvYnVmLnByb3RvdHlwZS5maW5pc2ggPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5idWYuc2xpY2UoMCwgdGhpcy5wb3MpO1xufTtcblxuUHJvdG9idWYucHJvdG90eXBlLndyaXRlUGFja2VkID0gZnVuY3Rpb24odHlwZSwgdGFnLCBpdGVtcykge1xuICAgIGlmICghaXRlbXMubGVuZ3RoKSByZXR1cm47XG5cbiAgICB2YXIgbWVzc2FnZSA9IG5ldyBQcm90b2J1ZigpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbWVzc2FnZVsnd3JpdGUnICsgdHlwZV0oaXRlbXNbaV0pO1xuICAgIH1cbiAgICB2YXIgZGF0YSA9IG1lc3NhZ2UuZmluaXNoKCk7XG5cbiAgICB0aGlzLndyaXRlVGFnKHRhZywgUHJvdG9idWYuUGFja2VkKTtcbiAgICB0aGlzLndyaXRlQnVmZmVyKGRhdGEpO1xufTtcblxuUHJvdG9idWYucHJvdG90eXBlLndyaXRlVUludDMyID0gZnVuY3Rpb24odmFsKSB7XG4gICAgdGhpcy5yZWFsbG9jKDQpO1xuICAgIHRoaXMuYnVmLndyaXRlVUludDMyTEUodmFsLCB0aGlzLnBvcyk7XG4gICAgdGhpcy5wb3MgKz0gNDtcbn07XG5cblByb3RvYnVmLnByb3RvdHlwZS53cml0ZVRhZ2dlZFVJbnQzMiA9IGZ1bmN0aW9uKHRhZywgdmFsKSB7XG4gICAgdGhpcy53cml0ZVRhZyh0YWcsIFByb3RvYnVmLkludDMyKTtcbiAgICB0aGlzLndyaXRlVUludDMyKHZhbCk7XG59O1xuXG5Qcm90b2J1Zi5wcm90b3R5cGUud3JpdGVWYXJpbnQgPSBmdW5jdGlvbih2YWwpIHtcbiAgICB2YWwgPSBOdW1iZXIodmFsKTtcbiAgICBpZiAoaXNOYU4odmFsKSkge1xuICAgICAgICB2YWwgPSAwO1xuICAgIH1cblxuICAgIGlmICh2YWwgPD0gMHg3Zikge1xuICAgICAgICB0aGlzLnJlYWxsb2MoMSk7XG4gICAgICAgIHRoaXMuYnVmW3RoaXMucG9zKytdID0gdmFsO1xuICAgIH0gZWxzZSBpZiAodmFsIDw9IDB4M2ZmZikge1xuICAgICAgICB0aGlzLnJlYWxsb2MoMik7XG4gICAgICAgIHRoaXMuYnVmW3RoaXMucG9zKytdID0gMHg4MCB8ICgodmFsID4+PiAwKSAmIDB4N2YpO1xuICAgICAgICB0aGlzLmJ1Zlt0aGlzLnBvcysrXSA9IDB4MDAgfCAoKHZhbCA+Pj4gNykgJiAweDdmKTtcbiAgICB9IGVsc2UgaWYgKHZhbCA8PSAweDFmZmZmZmYpIHtcbiAgICAgICAgdGhpcy5yZWFsbG9jKDMpO1xuICAgICAgICB0aGlzLmJ1Zlt0aGlzLnBvcysrXSA9IDB4ODAgfCAoKHZhbCA+Pj4gMCkgJiAweDdmKTtcbiAgICAgICAgdGhpcy5idWZbdGhpcy5wb3MrK10gPSAweDgwIHwgKCh2YWwgPj4+IDcpICYgMHg3Zik7XG4gICAgICAgIHRoaXMuYnVmW3RoaXMucG9zKytdID0gMHgwMCB8ICgodmFsID4+PiAxNCkgJiAweDdmKTtcbiAgICB9IGVsc2UgaWYgKHZhbCA8PSAweGZmZmZmZmYpIHtcbiAgICAgICAgdGhpcy5yZWFsbG9jKDQpO1xuICAgICAgICB0aGlzLmJ1Zlt0aGlzLnBvcysrXSA9IDB4ODAgfCAoKHZhbCA+Pj4gMCkgJiAweDdmKTtcbiAgICAgICAgdGhpcy5idWZbdGhpcy5wb3MrK10gPSAweDgwIHwgKCh2YWwgPj4+IDcpICYgMHg3Zik7XG4gICAgICAgIHRoaXMuYnVmW3RoaXMucG9zKytdID0gMHg4MCB8ICgodmFsID4+PiAxNCkgJiAweDdmKTtcbiAgICAgICAgdGhpcy5idWZbdGhpcy5wb3MrK10gPSAweDAwIHwgKCh2YWwgPj4+IDIxKSAmIDB4N2YpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHdoaWxlICh2YWwgPiAwKSB7XG4gICAgICAgICAgICB2YXIgYiA9IHZhbCAmIDB4N2Y7XG4gICAgICAgICAgICB2YWwgPSBNYXRoLmZsb29yKHZhbCAvIDEyOCk7XG4gICAgICAgICAgICBpZiAodmFsID4gMCkgYiB8PSAweDgwXG4gICAgICAgICAgICB0aGlzLnJlYWxsb2MoMSk7XG4gICAgICAgICAgICB0aGlzLmJ1Zlt0aGlzLnBvcysrXSA9IGI7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5Qcm90b2J1Zi5wcm90b3R5cGUud3JpdGVUYWdnZWRWYXJpbnQgPSBmdW5jdGlvbih0YWcsIHZhbCkge1xuICAgIHRoaXMud3JpdGVUYWcodGFnLCBQcm90b2J1Zi5WYXJpbnQpO1xuICAgIHRoaXMud3JpdGVWYXJpbnQodmFsKTtcbn07XG5cblByb3RvYnVmLnByb3RvdHlwZS53cml0ZVNWYXJpbnQgPSBmdW5jdGlvbih2YWwpIHtcbiAgICBpZiAodmFsID49IDApIHtcbiAgICAgICAgdGhpcy53cml0ZVZhcmludCh2YWwgKiAyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLndyaXRlVmFyaW50KHZhbCAqIC0yIC0gMSk7XG4gICAgfVxufTtcblxuUHJvdG9idWYucHJvdG90eXBlLndyaXRlVGFnZ2VkU1ZhcmludCA9IGZ1bmN0aW9uKHRhZywgdmFsKSB7XG4gICAgdGhpcy53cml0ZVRhZyh0YWcsIFByb3RvYnVmLlZhcmludCk7XG4gICAgdGhpcy53cml0ZVNWYXJpbnQodmFsKTtcbn07XG5cblByb3RvYnVmLnByb3RvdHlwZS53cml0ZUJvb2xlYW4gPSBmdW5jdGlvbih2YWwpIHtcbiAgICB0aGlzLndyaXRlVmFyaW50KEJvb2xlYW4odmFsKSk7XG59O1xuXG5Qcm90b2J1Zi5wcm90b3R5cGUud3JpdGVUYWdnZWRCb29sZWFuID0gZnVuY3Rpb24odGFnLCB2YWwpIHtcbiAgICB0aGlzLndyaXRlVGFnZ2VkVmFyaW50KHRhZywgQm9vbGVhbih2YWwpKTtcbn07XG5cblByb3RvYnVmLnByb3RvdHlwZS53cml0ZVN0cmluZyA9IGZ1bmN0aW9uKHN0cikge1xuICAgIHN0ciA9IFN0cmluZyhzdHIpO1xuICAgIHZhciBieXRlcyA9IEJ1ZmZlci5ieXRlTGVuZ3RoKHN0cik7XG4gICAgdGhpcy53cml0ZVZhcmludChieXRlcyk7XG4gICAgdGhpcy5yZWFsbG9jKGJ5dGVzKTtcbiAgICB0aGlzLmJ1Zi53cml0ZShzdHIsIHRoaXMucG9zKTtcbiAgICB0aGlzLnBvcyArPSBieXRlcztcbn07XG5cblByb3RvYnVmLnByb3RvdHlwZS53cml0ZVRhZ2dlZFN0cmluZyA9IGZ1bmN0aW9uKHRhZywgc3RyKSB7XG4gICAgdGhpcy53cml0ZVRhZyh0YWcsIFByb3RvYnVmLlN0cmluZyk7XG4gICAgdGhpcy53cml0ZVN0cmluZyhzdHIpO1xufTtcblxuUHJvdG9idWYucHJvdG90eXBlLndyaXRlRmxvYXQgPSBmdW5jdGlvbih2YWwpIHtcbiAgICB0aGlzLnJlYWxsb2MoNCk7XG4gICAgdGhpcy5idWYud3JpdGVGbG9hdExFKHZhbCwgdGhpcy5wb3MpO1xuICAgIHRoaXMucG9zICs9IDQ7XG59O1xuXG5Qcm90b2J1Zi5wcm90b3R5cGUud3JpdGVUYWdnZWRGbG9hdCA9IGZ1bmN0aW9uKHRhZywgdmFsKSB7XG4gICAgdGhpcy53cml0ZVRhZyh0YWcsIFByb3RvYnVmLkludDMyKTtcbiAgICB0aGlzLndyaXRlRmxvYXQodmFsKTtcbn07XG5cblByb3RvYnVmLnByb3RvdHlwZS53cml0ZURvdWJsZSA9IGZ1bmN0aW9uKHZhbCkge1xuICAgIHRoaXMucmVhbGxvYyg4KTtcbiAgICB0aGlzLmJ1Zi53cml0ZURvdWJsZUxFKHZhbCwgdGhpcy5wb3MpO1xuICAgIHRoaXMucG9zICs9IDg7XG59O1xuXG5Qcm90b2J1Zi5wcm90b3R5cGUud3JpdGVUYWdnZWREb3VibGUgPSBmdW5jdGlvbih0YWcsIHZhbCkge1xuICAgIHRoaXMud3JpdGVUYWcodGFnLCBQcm90b2J1Zi5JbnQ2NCk7XG4gICAgdGhpcy53cml0ZURvdWJsZSh2YWwpO1xufTtcblxuUHJvdG9idWYucHJvdG90eXBlLndyaXRlQnVmZmVyID0gZnVuY3Rpb24oYnVmZmVyKSB7XG4gICAgdmFyIGJ5dGVzID0gYnVmZmVyLmxlbmd0aDtcbiAgICB0aGlzLndyaXRlVmFyaW50KGJ5dGVzKTtcbiAgICB0aGlzLnJlYWxsb2MoYnl0ZXMpO1xuICAgIGJ1ZmZlci5jb3B5KHRoaXMuYnVmLCB0aGlzLnBvcyk7XG4gICAgdGhpcy5wb3MgKz0gYnl0ZXM7XG59O1xuXG5Qcm90b2J1Zi5wcm90b3R5cGUud3JpdGVUYWdnZWRCdWZmZXIgPSBmdW5jdGlvbih0YWcsIGJ1ZmZlcikge1xuICAgIHRoaXMud3JpdGVUYWcodGFnLCBQcm90b2J1Zi5TdHJpbmcpO1xuICAgIHRoaXMud3JpdGVCdWZmZXIoYnVmZmVyKTtcbn07XG5cblByb3RvYnVmLnByb3RvdHlwZS53cml0ZU1lc3NhZ2UgPSBmdW5jdGlvbih0YWcsIHByb3RvYnVmKSB7XG4gICAgdmFyIGJ1ZmZlciA9IHByb3RvYnVmLmZpbmlzaCgpO1xuICAgIHRoaXMud3JpdGVUYWcodGFnLCBQcm90b2J1Zi5NZXNzYWdlKTtcbiAgICB0aGlzLndyaXRlQnVmZmVyKGJ1ZmZlcik7XG59O1xuIiwiZXhwb3J0cy5yZWFkID0gZnVuY3Rpb24oYnVmZmVyLCBvZmZzZXQsIGlzTEUsIG1MZW4sIG5CeXRlcykge1xuICB2YXIgZSwgbSxcbiAgICAgIGVMZW4gPSBuQnl0ZXMgKiA4IC0gbUxlbiAtIDEsXG4gICAgICBlTWF4ID0gKDEgPDwgZUxlbikgLSAxLFxuICAgICAgZUJpYXMgPSBlTWF4ID4+IDEsXG4gICAgICBuQml0cyA9IC03LFxuICAgICAgaSA9IGlzTEUgPyAobkJ5dGVzIC0gMSkgOiAwLFxuICAgICAgZCA9IGlzTEUgPyAtMSA6IDEsXG4gICAgICBzID0gYnVmZmVyW29mZnNldCArIGldO1xuXG4gIGkgKz0gZDtcblxuICBlID0gcyAmICgoMSA8PCAoLW5CaXRzKSkgLSAxKTtcbiAgcyA+Pj0gKC1uQml0cyk7XG4gIG5CaXRzICs9IGVMZW47XG4gIGZvciAoOyBuQml0cyA+IDA7IGUgPSBlICogMjU2ICsgYnVmZmVyW29mZnNldCArIGldLCBpICs9IGQsIG5CaXRzIC09IDgpO1xuXG4gIG0gPSBlICYgKCgxIDw8ICgtbkJpdHMpKSAtIDEpO1xuICBlID4+PSAoLW5CaXRzKTtcbiAgbkJpdHMgKz0gbUxlbjtcbiAgZm9yICg7IG5CaXRzID4gMDsgbSA9IG0gKiAyNTYgKyBidWZmZXJbb2Zmc2V0ICsgaV0sIGkgKz0gZCwgbkJpdHMgLT0gOCk7XG5cbiAgaWYgKGUgPT09IDApIHtcbiAgICBlID0gMSAtIGVCaWFzO1xuICB9IGVsc2UgaWYgKGUgPT09IGVNYXgpIHtcbiAgICByZXR1cm4gbSA/IE5hTiA6ICgocyA/IC0xIDogMSkgKiBJbmZpbml0eSk7XG4gIH0gZWxzZSB7XG4gICAgbSA9IG0gKyBNYXRoLnBvdygyLCBtTGVuKTtcbiAgICBlID0gZSAtIGVCaWFzO1xuICB9XG4gIHJldHVybiAocyA/IC0xIDogMSkgKiBtICogTWF0aC5wb3coMiwgZSAtIG1MZW4pO1xufTtcblxuZXhwb3J0cy53cml0ZSA9IGZ1bmN0aW9uKGJ1ZmZlciwgdmFsdWUsIG9mZnNldCwgaXNMRSwgbUxlbiwgbkJ5dGVzKSB7XG4gIHZhciBlLCBtLCBjLFxuICAgICAgZUxlbiA9IG5CeXRlcyAqIDggLSBtTGVuIC0gMSxcbiAgICAgIGVNYXggPSAoMSA8PCBlTGVuKSAtIDEsXG4gICAgICBlQmlhcyA9IGVNYXggPj4gMSxcbiAgICAgIHJ0ID0gKG1MZW4gPT09IDIzID8gTWF0aC5wb3coMiwgLTI0KSAtIE1hdGgucG93KDIsIC03NykgOiAwKSxcbiAgICAgIGkgPSBpc0xFID8gMCA6IChuQnl0ZXMgLSAxKSxcbiAgICAgIGQgPSBpc0xFID8gMSA6IC0xLFxuICAgICAgcyA9IHZhbHVlIDwgMCB8fCAodmFsdWUgPT09IDAgJiYgMSAvIHZhbHVlIDwgMCkgPyAxIDogMDtcblxuICB2YWx1ZSA9IE1hdGguYWJzKHZhbHVlKTtcblxuICBpZiAoaXNOYU4odmFsdWUpIHx8IHZhbHVlID09PSBJbmZpbml0eSkge1xuICAgIG0gPSBpc05hTih2YWx1ZSkgPyAxIDogMDtcbiAgICBlID0gZU1heDtcbiAgfSBlbHNlIHtcbiAgICBlID0gTWF0aC5mbG9vcihNYXRoLmxvZyh2YWx1ZSkgLyBNYXRoLkxOMik7XG4gICAgaWYgKHZhbHVlICogKGMgPSBNYXRoLnBvdygyLCAtZSkpIDwgMSkge1xuICAgICAgZS0tO1xuICAgICAgYyAqPSAyO1xuICAgIH1cbiAgICBpZiAoZSArIGVCaWFzID49IDEpIHtcbiAgICAgIHZhbHVlICs9IHJ0IC8gYztcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsdWUgKz0gcnQgKiBNYXRoLnBvdygyLCAxIC0gZUJpYXMpO1xuICAgIH1cbiAgICBpZiAodmFsdWUgKiBjID49IDIpIHtcbiAgICAgIGUrKztcbiAgICAgIGMgLz0gMjtcbiAgICB9XG5cbiAgICBpZiAoZSArIGVCaWFzID49IGVNYXgpIHtcbiAgICAgIG0gPSAwO1xuICAgICAgZSA9IGVNYXg7XG4gICAgfSBlbHNlIGlmIChlICsgZUJpYXMgPj0gMSkge1xuICAgICAgbSA9ICh2YWx1ZSAqIGMgLSAxKSAqIE1hdGgucG93KDIsIG1MZW4pO1xuICAgICAgZSA9IGUgKyBlQmlhcztcbiAgICB9IGVsc2Uge1xuICAgICAgbSA9IHZhbHVlICogTWF0aC5wb3coMiwgZUJpYXMgLSAxKSAqIE1hdGgucG93KDIsIG1MZW4pO1xuICAgICAgZSA9IDA7XG4gICAgfVxuICB9XG5cbiAgZm9yICg7IG1MZW4gPj0gODsgYnVmZmVyW29mZnNldCArIGldID0gbSAmIDB4ZmYsIGkgKz0gZCwgbSAvPSAyNTYsIG1MZW4gLT0gOCk7XG5cbiAgZSA9IChlIDw8IG1MZW4pIHwgbTtcbiAgZUxlbiArPSBtTGVuO1xuICBmb3IgKDsgZUxlbiA+IDA7IGJ1ZmZlcltvZmZzZXQgKyBpXSA9IGUgJiAweGZmLCBpICs9IGQsIGUgLz0gMjU2LCBlTGVuIC09IDgpO1xuXG4gIGJ1ZmZlcltvZmZzZXQgKyBpIC0gZF0gfD0gcyAqIDEyODtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gUG9pbnQ7XG5cbmZ1bmN0aW9uIFBvaW50KHgsIHkpIHtcbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG59XG5cblBvaW50LnByb3RvdHlwZSA9IHtcbiAgICBjbG9uZTogZnVuY3Rpb24oKSB7IHJldHVybiBuZXcgUG9pbnQodGhpcy54LCB0aGlzLnkpOyB9LFxuXG4gICAgYWRkOiAgICAgZnVuY3Rpb24ocCkgeyByZXR1cm4gdGhpcy5jbG9uZSgpLl9hZGQocCk7ICAgICB9LFxuICAgIHN1YjogICAgIGZ1bmN0aW9uKHApIHsgcmV0dXJuIHRoaXMuY2xvbmUoKS5fc3ViKHApOyAgICAgfSxcbiAgICBtdWx0OiAgICBmdW5jdGlvbihrKSB7IHJldHVybiB0aGlzLmNsb25lKCkuX211bHQoayk7ICAgIH0sXG4gICAgZGl2OiAgICAgZnVuY3Rpb24oaykgeyByZXR1cm4gdGhpcy5jbG9uZSgpLl9kaXYoayk7ICAgICB9LFxuICAgIHJvdGF0ZTogIGZ1bmN0aW9uKGEpIHsgcmV0dXJuIHRoaXMuY2xvbmUoKS5fcm90YXRlKGEpOyAgfSxcbiAgICBtYXRNdWx0OiBmdW5jdGlvbihtKSB7IHJldHVybiB0aGlzLmNsb25lKCkuX21hdE11bHQobSk7IH0sXG4gICAgdW5pdDogICAgZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzLmNsb25lKCkuX3VuaXQoKTsgfSxcbiAgICBwZXJwOiAgICBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMuY2xvbmUoKS5fcGVycCgpOyB9LFxuICAgIHJvdW5kOiAgIGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpcy5jbG9uZSgpLl9yb3VuZCgpOyB9LFxuXG4gICAgbWFnOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydCh0aGlzLnggKiB0aGlzLnggKyB0aGlzLnkgKiB0aGlzLnkpO1xuICAgIH0sXG5cbiAgICBlcXVhbHM6IGZ1bmN0aW9uKHApIHtcbiAgICAgICAgcmV0dXJuIHRoaXMueCA9PT0gcC54ICYmXG4gICAgICAgICAgICAgICB0aGlzLnkgPT09IHAueTtcbiAgICB9LFxuXG4gICAgZGlzdDogZnVuY3Rpb24ocCkge1xuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KHRoaXMuZGlzdFNxcihwKSk7XG4gICAgfSxcblxuICAgIGRpc3RTcXI6IGZ1bmN0aW9uKHApIHtcbiAgICAgICAgdmFyIGR4ID0gcC54IC0gdGhpcy54LFxuICAgICAgICAgICAgZHkgPSBwLnkgLSB0aGlzLnk7XG4gICAgICAgIHJldHVybiBkeCAqIGR4ICsgZHkgKiBkeTtcbiAgICB9LFxuXG4gICAgYW5nbGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gTWF0aC5hdGFuMih0aGlzLnksIHRoaXMueCk7XG4gICAgfSxcblxuICAgIGFuZ2xlVG86IGZ1bmN0aW9uKGIpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguYXRhbjIodGhpcy55IC0gYi55LCB0aGlzLnggLSBiLngpO1xuICAgIH0sXG5cbiAgICBhbmdsZVdpdGg6IGZ1bmN0aW9uKGIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYW5nbGVXaXRoU2VwKGIueCwgYi55KTtcbiAgICB9LFxuXG4gICAgLy8gRmluZCB0aGUgYW5nbGUgb2YgdGhlIHR3byB2ZWN0b3JzLCBzb2x2aW5nIHRoZSBmb3JtdWxhIGZvciB0aGUgY3Jvc3MgcHJvZHVjdCBhIHggYiA9IHxhfHxifHNpbijOuCkgZm9yIM64LlxuICAgIGFuZ2xlV2l0aFNlcDogZnVuY3Rpb24oeCwgeSkge1xuICAgICAgICByZXR1cm4gTWF0aC5hdGFuMihcbiAgICAgICAgICAgIHRoaXMueCAqIHkgLSB0aGlzLnkgKiB4LFxuICAgICAgICAgICAgdGhpcy54ICogeCArIHRoaXMueSAqIHkpO1xuICAgIH0sXG5cbiAgICBfbWF0TXVsdDogZnVuY3Rpb24obSkge1xuICAgICAgICB2YXIgeCA9IG1bMF0gKiB0aGlzLnggKyBtWzFdICogdGhpcy55LFxuICAgICAgICAgICAgeSA9IG1bMl0gKiB0aGlzLnggKyBtWzNdICogdGhpcy55O1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgX2FkZDogZnVuY3Rpb24ocCkge1xuICAgICAgICB0aGlzLnggKz0gcC54O1xuICAgICAgICB0aGlzLnkgKz0gcC55O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgX3N1YjogZnVuY3Rpb24ocCkge1xuICAgICAgICB0aGlzLnggLT0gcC54O1xuICAgICAgICB0aGlzLnkgLT0gcC55O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgX211bHQ6IGZ1bmN0aW9uKGspIHtcbiAgICAgICAgdGhpcy54ICo9IGs7XG4gICAgICAgIHRoaXMueSAqPSBrO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgX2RpdjogZnVuY3Rpb24oaykge1xuICAgICAgICB0aGlzLnggLz0gaztcbiAgICAgICAgdGhpcy55IC89IGs7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICBfdW5pdDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuX2Rpdih0aGlzLm1hZygpKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIF9wZXJwOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHkgPSB0aGlzLnk7XG4gICAgICAgIHRoaXMueSA9IHRoaXMueDtcbiAgICAgICAgdGhpcy54ID0gLXk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICBfcm90YXRlOiBmdW5jdGlvbihhbmdsZSkge1xuICAgICAgICB2YXIgY29zID0gTWF0aC5jb3MoYW5nbGUpLFxuICAgICAgICAgICAgc2luID0gTWF0aC5zaW4oYW5nbGUpLFxuICAgICAgICAgICAgeCA9IGNvcyAqIHRoaXMueCAtIHNpbiAqIHRoaXMueSxcbiAgICAgICAgICAgIHkgPSBzaW4gKiB0aGlzLnggKyBjb3MgKiB0aGlzLnk7XG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICBfcm91bmQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLnggPSBNYXRoLnJvdW5kKHRoaXMueCk7XG4gICAgICAgIHRoaXMueSA9IE1hdGgucm91bmQodGhpcy55KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufTtcblxuLy8gY29uc3RydWN0cyBQb2ludCBmcm9tIGFuIGFycmF5IGlmIG5lY2Vzc2FyeVxuUG9pbnQuY29udmVydCA9IGZ1bmN0aW9uIChhKSB7XG4gICAgaWYgKGEgaW5zdGFuY2VvZiBQb2ludCkge1xuICAgICAgICByZXR1cm4gYTtcbiAgICB9XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoYSkpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQb2ludChhWzBdLCBhWzFdKTtcbiAgICB9XG4gICAgcmV0dXJuIGE7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMuVmVjdG9yVGlsZSA9IHJlcXVpcmUoJy4vbGliL3ZlY3RvcnRpbGUuanMnKTtcbm1vZHVsZS5leHBvcnRzLlZlY3RvclRpbGVGZWF0dXJlID0gcmVxdWlyZSgnLi9saWIvdmVjdG9ydGlsZWZlYXR1cmUuanMnKTtcbm1vZHVsZS5leHBvcnRzLlZlY3RvclRpbGVMYXllciA9IHJlcXVpcmUoJy4vbGliL3ZlY3RvcnRpbGVsYXllci5qcycpO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgVmVjdG9yVGlsZUxheWVyID0gcmVxdWlyZSgnLi92ZWN0b3J0aWxlbGF5ZXInKTtcblxubW9kdWxlLmV4cG9ydHMgPSBWZWN0b3JUaWxlO1xuXG5mdW5jdGlvbiBWZWN0b3JUaWxlKGJ1ZmZlciwgZW5kKSB7XG5cbiAgICB0aGlzLmxheWVycyA9IHt9O1xuICAgIHRoaXMuX2J1ZmZlciA9IGJ1ZmZlcjtcblxuICAgIGVuZCA9IGVuZCB8fCBidWZmZXIubGVuZ3RoO1xuXG4gICAgd2hpbGUgKGJ1ZmZlci5wb3MgPCBlbmQpIHtcbiAgICAgICAgdmFyIHZhbCA9IGJ1ZmZlci5yZWFkVmFyaW50KCksXG4gICAgICAgICAgICB0YWcgPSB2YWwgPj4gMztcblxuICAgICAgICBpZiAodGFnID09IDMpIHtcbiAgICAgICAgICAgIHZhciBsYXllciA9IHRoaXMucmVhZExheWVyKCk7XG4gICAgICAgICAgICBpZiAobGF5ZXIubGVuZ3RoKSB0aGlzLmxheWVyc1tsYXllci5uYW1lXSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYnVmZmVyLnNraXAodmFsKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuVmVjdG9yVGlsZS5wcm90b3R5cGUucmVhZExheWVyID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGJ1ZmZlciA9IHRoaXMuX2J1ZmZlcixcbiAgICAgICAgYnl0ZXMgPSBidWZmZXIucmVhZFZhcmludCgpLFxuICAgICAgICBlbmQgPSBidWZmZXIucG9zICsgYnl0ZXMsXG4gICAgICAgIGxheWVyID0gbmV3IFZlY3RvclRpbGVMYXllcihidWZmZXIsIGVuZCk7XG5cbiAgICBidWZmZXIucG9zID0gZW5kO1xuXG4gICAgcmV0dXJuIGxheWVyO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIFBvaW50ID0gcmVxdWlyZSgncG9pbnQtZ2VvbWV0cnknKTtcblxubW9kdWxlLmV4cG9ydHMgPSBWZWN0b3JUaWxlRmVhdHVyZTtcblxuZnVuY3Rpb24gVmVjdG9yVGlsZUZlYXR1cmUoYnVmZmVyLCBlbmQsIGV4dGVudCwga2V5cywgdmFsdWVzKSB7XG5cbiAgICB0aGlzLnByb3BlcnRpZXMgPSB7fTtcblxuICAgIC8vIFB1YmxpY1xuICAgIHRoaXMuZXh0ZW50ID0gZXh0ZW50O1xuICAgIHRoaXMudHlwZSA9IDA7XG5cbiAgICAvLyBQcml2YXRlXG4gICAgdGhpcy5fYnVmZmVyID0gYnVmZmVyO1xuICAgIHRoaXMuX2dlb21ldHJ5ID0gLTE7XG5cbiAgICBlbmQgPSBlbmQgfHwgYnVmZmVyLmxlbmd0aDtcblxuICAgIHdoaWxlIChidWZmZXIucG9zIDwgZW5kKSB7XG4gICAgICAgIHZhciB2YWwgPSBidWZmZXIucmVhZFZhcmludCgpLFxuICAgICAgICAgICAgdGFnID0gdmFsID4+IDM7XG5cbiAgICAgICAgaWYgKHRhZyA9PSAxKSB7XG4gICAgICAgICAgICB0aGlzLl9pZCA9IGJ1ZmZlci5yZWFkVmFyaW50KCk7XG5cbiAgICAgICAgfSBlbHNlIGlmICh0YWcgPT0gMikge1xuICAgICAgICAgICAgdmFyIHRhZ0xlbiA9IGJ1ZmZlci5yZWFkVmFyaW50KCksXG4gICAgICAgICAgICAgICAgdGFnRW5kID0gYnVmZmVyLnBvcyArIHRhZ0xlbjtcblxuICAgICAgICAgICAgd2hpbGUgKGJ1ZmZlci5wb3MgPCB0YWdFbmQpIHtcbiAgICAgICAgICAgICAgICB2YXIga2V5ID0ga2V5c1tidWZmZXIucmVhZFZhcmludCgpXTtcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSB2YWx1ZXNbYnVmZmVyLnJlYWRWYXJpbnQoKV07XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wZXJ0aWVzW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9IGVsc2UgaWYgKHRhZyA9PSAzKSB7XG4gICAgICAgICAgICB0aGlzLnR5cGUgPSBidWZmZXIucmVhZFZhcmludCgpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAodGFnID09IDQpIHtcbiAgICAgICAgICAgIHRoaXMuX2dlb21ldHJ5ID0gYnVmZmVyLnBvcztcbiAgICAgICAgICAgIGJ1ZmZlci5za2lwKHZhbCk7XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJ1ZmZlci5za2lwKHZhbCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblZlY3RvclRpbGVGZWF0dXJlLnR5cGVzID0gWydVbmtub3duJywgJ1BvaW50JywgJ0xpbmVTdHJpbmcnLCAnUG9seWdvbiddO1xuXG5WZWN0b3JUaWxlRmVhdHVyZS5wcm90b3R5cGUubG9hZEdlb21ldHJ5ID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGJ1ZmZlciA9IHRoaXMuX2J1ZmZlcjtcbiAgICBidWZmZXIucG9zID0gdGhpcy5fZ2VvbWV0cnk7XG5cbiAgICB2YXIgYnl0ZXMgPSBidWZmZXIucmVhZFZhcmludCgpLFxuICAgICAgICBlbmQgPSBidWZmZXIucG9zICsgYnl0ZXMsXG4gICAgICAgIGNtZCA9IDEsXG4gICAgICAgIGxlbmd0aCA9IDAsXG4gICAgICAgIHggPSAwLFxuICAgICAgICB5ID0gMCxcbiAgICAgICAgbGluZXMgPSBbXSxcbiAgICAgICAgbGluZTtcblxuICAgIHdoaWxlIChidWZmZXIucG9zIDwgZW5kKSB7XG4gICAgICAgIGlmICghbGVuZ3RoKSB7XG4gICAgICAgICAgICB2YXIgY21kX2xlbmd0aCA9IGJ1ZmZlci5yZWFkVmFyaW50KCk7XG4gICAgICAgICAgICBjbWQgPSBjbWRfbGVuZ3RoICYgMHg3O1xuICAgICAgICAgICAgbGVuZ3RoID0gY21kX2xlbmd0aCA+PiAzO1xuICAgICAgICB9XG5cbiAgICAgICAgbGVuZ3RoLS07XG5cbiAgICAgICAgaWYgKGNtZCA9PT0gMSB8fCBjbWQgPT09IDIpIHtcbiAgICAgICAgICAgIHggKz0gYnVmZmVyLnJlYWRTVmFyaW50KCk7XG4gICAgICAgICAgICB5ICs9IGJ1ZmZlci5yZWFkU1ZhcmludCgpO1xuXG4gICAgICAgICAgICBpZiAoY21kID09PSAxKSB7XG4gICAgICAgICAgICAgICAgLy8gbW92ZVRvXG4gICAgICAgICAgICAgICAgaWYgKGxpbmUpIHtcbiAgICAgICAgICAgICAgICAgICAgbGluZXMucHVzaChsaW5lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGluZSA9IFtdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsaW5lLnB1c2gobmV3IFBvaW50KHgsIHkpKTtcbiAgICAgICAgfSBlbHNlIGlmIChjbWQgPT09IDcpIHtcbiAgICAgICAgICAgIC8vIGNsb3NlUG9seWdvblxuICAgICAgICAgICAgbGluZS5wdXNoKGxpbmVbMF0uY2xvbmUoKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3Vua25vd24gY29tbWFuZCAnICsgY21kKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmIChsaW5lKSBsaW5lcy5wdXNoKGxpbmUpO1xuXG4gICAgcmV0dXJuIGxpbmVzO1xufTtcblxuVmVjdG9yVGlsZUZlYXR1cmUucHJvdG90eXBlLmJib3ggPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgYnVmZmVyID0gdGhpcy5fYnVmZmVyO1xuICAgIGJ1ZmZlci5wb3MgPSB0aGlzLl9nZW9tZXRyeTtcblxuICAgIHZhciBieXRlcyA9IGJ1ZmZlci5yZWFkVmFyaW50KCksXG4gICAgICAgIGVuZCA9IGJ1ZmZlci5wb3MgKyBieXRlcyxcblxuICAgICAgICBjbWQgPSAxLFxuICAgICAgICBsZW5ndGggPSAwLFxuICAgICAgICB4ID0gMCxcbiAgICAgICAgeSA9IDAsXG4gICAgICAgIHgxID0gSW5maW5pdHksXG4gICAgICAgIHgyID0gLUluZmluaXR5LFxuICAgICAgICB5MSA9IEluZmluaXR5LFxuICAgICAgICB5MiA9IC1JbmZpbml0eTtcblxuICAgIHdoaWxlIChidWZmZXIucG9zIDwgZW5kKSB7XG4gICAgICAgIGlmICghbGVuZ3RoKSB7XG4gICAgICAgICAgICB2YXIgY21kX2xlbmd0aCA9IGJ1ZmZlci5yZWFkVmFyaW50KCk7XG4gICAgICAgICAgICBjbWQgPSBjbWRfbGVuZ3RoICYgMHg3O1xuICAgICAgICAgICAgbGVuZ3RoID0gY21kX2xlbmd0aCA+PiAzO1xuICAgICAgICB9XG5cbiAgICAgICAgbGVuZ3RoLS07XG5cbiAgICAgICAgaWYgKGNtZCA9PT0gMSB8fCBjbWQgPT09IDIpIHtcbiAgICAgICAgICAgIHggKz0gYnVmZmVyLnJlYWRTVmFyaW50KCk7XG4gICAgICAgICAgICB5ICs9IGJ1ZmZlci5yZWFkU1ZhcmludCgpO1xuICAgICAgICAgICAgaWYgKHggPCB4MSkgeDEgPSB4O1xuICAgICAgICAgICAgaWYgKHggPiB4MikgeDIgPSB4O1xuICAgICAgICAgICAgaWYgKHkgPCB5MSkgeTEgPSB5O1xuICAgICAgICAgICAgaWYgKHkgPiB5MikgeTIgPSB5O1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY21kICE9PSA3KSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3Vua25vd24gY29tbWFuZCAnICsgY21kKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBbeDEsIHkxLCB4MiwgeTJdO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIFZlY3RvclRpbGVGZWF0dXJlID0gcmVxdWlyZSgnLi92ZWN0b3J0aWxlZmVhdHVyZS5qcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFZlY3RvclRpbGVMYXllcjtcbmZ1bmN0aW9uIFZlY3RvclRpbGVMYXllcihidWZmZXIsIGVuZCkge1xuICAgIC8vIFB1YmxpY1xuICAgIHRoaXMudmVyc2lvbiA9IDE7XG4gICAgdGhpcy5uYW1lID0gbnVsbDtcbiAgICB0aGlzLmV4dGVudCA9IDQwOTY7XG4gICAgdGhpcy5sZW5ndGggPSAwO1xuXG4gICAgLy8gUHJpdmF0ZVxuICAgIHRoaXMuX2J1ZmZlciA9IGJ1ZmZlcjtcbiAgICB0aGlzLl9rZXlzID0gW107XG4gICAgdGhpcy5fdmFsdWVzID0gW107XG4gICAgdGhpcy5fZmVhdHVyZXMgPSBbXTtcblxuICAgIHZhciB2YWwsIHRhZztcblxuICAgIGVuZCA9IGVuZCB8fCBidWZmZXIubGVuZ3RoO1xuXG4gICAgd2hpbGUgKGJ1ZmZlci5wb3MgPCBlbmQpIHtcbiAgICAgICAgdmFsID0gYnVmZmVyLnJlYWRWYXJpbnQoKTtcbiAgICAgICAgdGFnID0gdmFsID4+IDM7XG5cbiAgICAgICAgaWYgKHRhZyA9PT0gMTUpIHtcbiAgICAgICAgICAgIHRoaXMudmVyc2lvbiA9IGJ1ZmZlci5yZWFkVmFyaW50KCk7XG4gICAgICAgIH0gZWxzZSBpZiAodGFnID09PSAxKSB7XG4gICAgICAgICAgICB0aGlzLm5hbWUgPSBidWZmZXIucmVhZFN0cmluZygpO1xuICAgICAgICB9IGVsc2UgaWYgKHRhZyA9PT0gNSkge1xuICAgICAgICAgICAgdGhpcy5leHRlbnQgPSBidWZmZXIucmVhZFZhcmludCgpO1xuICAgICAgICB9IGVsc2UgaWYgKHRhZyA9PT0gMikge1xuICAgICAgICAgICAgdGhpcy5sZW5ndGgrKztcbiAgICAgICAgICAgIHRoaXMuX2ZlYXR1cmVzLnB1c2goYnVmZmVyLnBvcyk7XG4gICAgICAgICAgICBidWZmZXIuc2tpcCh2YWwpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAodGFnID09PSAzKSB7XG4gICAgICAgICAgICB0aGlzLl9rZXlzLnB1c2goYnVmZmVyLnJlYWRTdHJpbmcoKSk7XG4gICAgICAgIH0gZWxzZSBpZiAodGFnID09PSA0KSB7XG4gICAgICAgICAgICB0aGlzLl92YWx1ZXMucHVzaCh0aGlzLnJlYWRGZWF0dXJlVmFsdWUoKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBidWZmZXIuc2tpcCh2YWwpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5WZWN0b3JUaWxlTGF5ZXIucHJvdG90eXBlLnJlYWRGZWF0dXJlVmFsdWUgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgYnVmZmVyID0gdGhpcy5fYnVmZmVyLFxuICAgICAgICB2YWx1ZSA9IG51bGwsXG4gICAgICAgIGJ5dGVzID0gYnVmZmVyLnJlYWRWYXJpbnQoKSxcbiAgICAgICAgZW5kID0gYnVmZmVyLnBvcyArIGJ5dGVzLFxuICAgICAgICB2YWwsIHRhZztcblxuICAgIHdoaWxlIChidWZmZXIucG9zIDwgZW5kKSB7XG4gICAgICAgIHZhbCA9IGJ1ZmZlci5yZWFkVmFyaW50KCk7XG4gICAgICAgIHRhZyA9IHZhbCA+PiAzO1xuXG4gICAgICAgIGlmICh0YWcgPT0gMSkge1xuICAgICAgICAgICAgdmFsdWUgPSBidWZmZXIucmVhZFN0cmluZygpO1xuICAgICAgICB9IGVsc2UgaWYgKHRhZyA9PSAyKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3JlYWQgZmxvYXQnKTtcbiAgICAgICAgfSBlbHNlIGlmICh0YWcgPT0gMykge1xuICAgICAgICAgICAgdmFsdWUgPSBidWZmZXIucmVhZERvdWJsZSgpO1xuICAgICAgICB9IGVsc2UgaWYgKHRhZyA9PSA0KSB7XG4gICAgICAgICAgICB2YWx1ZSA9IGJ1ZmZlci5yZWFkVmFyaW50KCk7XG4gICAgICAgIH0gZWxzZSBpZiAodGFnID09IDUpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigncmVhZCB1aW50Jyk7XG4gICAgICAgIH0gZWxzZSBpZiAodGFnID09IDYpIHtcbiAgICAgICAgICAgIHZhbHVlID0gYnVmZmVyLnJlYWRTVmFyaW50KCk7XG4gICAgICAgIH0gZWxzZSBpZiAodGFnID09IDcpIHtcbiAgICAgICAgICAgIHZhbHVlID0gQm9vbGVhbihidWZmZXIucmVhZFZhcmludCgpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJ1ZmZlci5za2lwKHZhbCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWU7XG59O1xuXG4vLyByZXR1cm4gZmVhdHVyZSBgaWAgZnJvbSB0aGlzIGxheWVyIGFzIGEgYFZlY3RvclRpbGVGZWF0dXJlYFxuVmVjdG9yVGlsZUxheWVyLnByb3RvdHlwZS5mZWF0dXJlID0gZnVuY3Rpb24oaSkge1xuICAgIGlmIChpIDwgMCB8fCBpID49IHRoaXMuX2ZlYXR1cmVzLmxlbmd0aCkgdGhyb3cgbmV3IEVycm9yKCdmZWF0dXJlIGluZGV4IG91dCBvZiBib3VuZHMnKTtcblxuICAgIHRoaXMuX2J1ZmZlci5wb3MgPSB0aGlzLl9mZWF0dXJlc1tpXTtcbiAgICB2YXIgZW5kID0gdGhpcy5fYnVmZmVyLnJlYWRWYXJpbnQoKSArIHRoaXMuX2J1ZmZlci5wb3M7XG5cbiAgICByZXR1cm4gbmV3IFZlY3RvclRpbGVGZWF0dXJlKHRoaXMuX2J1ZmZlciwgZW5kLCB0aGlzLmV4dGVudCwgdGhpcy5fa2V5cywgdGhpcy5fdmFsdWVzKTtcbn07XG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgUnlhbiBXaGl0bGV5LCBEYW5pZWwgRHVhcnRlLCBhbmQgTmljaG9sYXMgSGFsbGFoYW5cbiAqICAgIG9uIDYvMDMvMTQuXG4gKi9cbnZhciBVdGlsID0gcmVxdWlyZSgnLi9NVlRVdGlsJyk7XG52YXIgU3RhdGljTGFiZWwgPSByZXF1aXJlKCcuL1N0YXRpY0xhYmVsL1N0YXRpY0xhYmVsLmpzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gTVZURmVhdHVyZTtcblxuZnVuY3Rpb24gTVZURmVhdHVyZShtdnRMYXllciwgdnRmLCBjdHgsIGlkLCBzdHlsZSkge1xuICBpZiAoIXZ0ZikgcmV0dXJuIG51bGw7XG5cbiAgLy8gQXBwbHkgYWxsIG9mIHRoZSBwcm9wZXJ0aWVzIG9mIHZ0ZiB0byB0aGlzIG9iamVjdC5cbiAgZm9yICh2YXIga2V5IGluIHZ0Zikge1xuICAgIHRoaXNba2V5XSA9IHZ0ZltrZXldO1xuICB9XG5cbiAgdGhpcy5tdnRMYXllciA9IG12dExheWVyO1xuICB0aGlzLm12dFNvdXJjZSA9IG12dExheWVyLm12dFNvdXJjZTtcbiAgdGhpcy5tYXAgPSBtdnRMYXllci5tdnRTb3VyY2UubWFwO1xuXG4gIHRoaXMuaWQgPSBpZDtcblxuICB0aGlzLmxheWVyTGluayA9IHRoaXMubXZ0U291cmNlLmxheWVyTGluaztcbiAgdGhpcy50b2dnbGVFbmFibGVkID0gdHJ1ZTtcbiAgdGhpcy5zZWxlY3RlZCA9IGZhbHNlO1xuXG4gIC8vIGhvdyBtdWNoIHdlIGRpdmlkZSB0aGUgY29vcmRpbmF0ZSBmcm9tIHRoZSB2ZWN0b3IgdGlsZVxuICB0aGlzLmRpdmlzb3IgPSB2dGYuZXh0ZW50IC8gY3R4LnRpbGVTaXplO1xuICB0aGlzLmV4dGVudCA9IHZ0Zi5leHRlbnQ7XG4gIHRoaXMudGlsZVNpemUgPSBjdHgudGlsZVNpemU7XG5cbiAgLy9BbiBvYmplY3QgdG8gc3RvcmUgdGhlIHBhdGhzIGFuZCBjb250ZXh0cyBmb3IgdGhpcyBmZWF0dXJlXG4gIHRoaXMudGlsZXMgPSB7fTtcblxuICB0aGlzLnN0eWxlID0gc3R5bGU7XG5cbiAgLy9BZGQgdG8gdGhlIGNvbGxlY3Rpb25cbiAgdGhpcy5hZGRUaWxlRmVhdHVyZSh2dGYsIGN0eCk7XG5cbiAgdmFyIHNlbGYgPSB0aGlzO1xuICB0aGlzLm1hcC5vbignem9vbWVuZCcsIGZ1bmN0aW9uKCkge1xuICAgIHNlbGYuc3RhdGljTGFiZWwgPSBudWxsO1xuICB9KTtcblxuICBpZiAoc3R5bGUgJiYgc3R5bGUuZHluYW1pY0xhYmVsICYmIHR5cGVvZiBzdHlsZS5keW5hbWljTGFiZWwgPT09ICdmdW5jdGlvbicpIHtcbiAgICB0aGlzLmR5bmFtaWNMYWJlbCA9IHRoaXMubXZ0U291cmNlLmR5bmFtaWNMYWJlbC5jcmVhdGVGZWF0dXJlKHRoaXMpO1xuICB9XG5cbiAgYWpheChzZWxmKTtcbn1cblxuXG5mdW5jdGlvbiBhamF4KHNlbGYpIHtcbiAgdmFyIHN0eWxlID0gc2VsZi5zdHlsZTtcbiAgaWYgKHN0eWxlICYmIHN0eWxlLmFqYXhTb3VyY2UgJiYgdHlwZW9mIHN0eWxlLmFqYXhTb3VyY2UgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgYWpheEVuZHBvaW50ID0gc3R5bGUuYWpheFNvdXJjZShzZWxmKTtcbiAgICBpZiAoYWpheEVuZHBvaW50KSB7XG4gICAgICBVdGlsLmdldEpTT04oYWpheEVuZHBvaW50LCBmdW5jdGlvbihlcnJvciwgcmVzcG9uc2UsIGJvZHkpIHtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgdGhyb3cgWydhamF4U291cmNlIEFKQVggRXJyb3InLCBlcnJvcl07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYWpheENhbGxiYWNrKHNlbGYsIHJlc3BvbnNlKTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gYWpheENhbGxiYWNrKHNlbGYsIHJlc3BvbnNlKSB7XG4gIHNlbGYuYWpheERhdGEgPSByZXNwb25zZTtcblxuICAvKipcbiAgICogWW91IGNhbiBhdHRhY2ggYSBjYWxsYmFjayBmdW5jdGlvbiB0byBhIGZlYXR1cmUgaW4geW91ciBhcHBcbiAgICogdGhhdCB3aWxsIGdldCBjYWxsZWQgd2hlbmV2ZXIgbmV3IGFqYXhEYXRhIGNvbWVzIGluLiBUaGlzXG4gICAqIGNhbiBiZSB1c2VkIHRvIHVwZGF0ZSBVSSB0aGF0IGxvb2tzIGF0IGRhdGEgZnJvbSB3aXRoaW4gYSBmZWF0dXJlLlxuICAgKlxuICAgKiBzZXRTdHlsZSBtYXkgcG9zc2libHkgaGF2ZSBhIHN0eWxlIHdpdGggYSBkaWZmZXJlbnQgYWpheERhdGEgc291cmNlLFxuICAgKiBhbmQgeW91IHdvdWxkIHBvdGVudGlhbGx5IGdldCBuZXcgY29udGV4dHVhbCBkYXRhIGZvciB5b3VyIGZlYXR1cmUuXG4gICAqXG4gICAqIFRPRE86IFRoaXMgbmVlZHMgdG8gYmUgZG9jdW1lbnRlZC5cbiAgICovXG4gIGlmICh0eXBlb2Ygc2VsZi5hamF4RGF0YVJlY2VpdmVkID09PSAnZnVuY3Rpb24nKSB7XG4gICAgc2VsZi5hamF4RGF0YVJlY2VpdmVkKHNlbGYsIHJlc3BvbnNlKTtcbiAgfVxuXG4gIHNlbGYuX3NldFN0eWxlKHNlbGYubXZ0TGF5ZXIuc3R5bGUpO1xuICByZWRyYXdUaWxlcyhzZWxmKTtcbn1cblxuTVZURmVhdHVyZS5wcm90b3R5cGUuX3NldFN0eWxlID0gZnVuY3Rpb24oc3R5bGVGbikge1xuICB0aGlzLnN0eWxlID0gc3R5bGVGbih0aGlzLCB0aGlzLmFqYXhEYXRhKTtcblxuICAvLyBUaGUgbGFiZWwgZ2V0cyByZW1vdmVkLCBhbmQgdGhlIChyZSlkcmF3LFxuICAvLyB0aGF0IGlzIGluaXRpYXRlZCBieSB0aGUgTVZUTGF5ZXIgY3JlYXRlcyBhIG5ldyBsYWJlbC5cbiAgdGhpcy5yZW1vdmVMYWJlbCgpO1xufTtcblxuTVZURmVhdHVyZS5wcm90b3R5cGUuc2V0U3R5bGUgPSBmdW5jdGlvbihzdHlsZUZuKSB7XG4gIHRoaXMuYWpheERhdGEgPSBudWxsO1xuICB0aGlzLnN0eWxlID0gc3R5bGVGbih0aGlzLCBudWxsKTtcbiAgdmFyIGhhc0FqYXhTb3VyY2UgPSBhamF4KHRoaXMpO1xuICBpZiAoIWhhc0FqYXhTb3VyY2UpIHtcbiAgICAvLyBUaGUgbGFiZWwgZ2V0cyByZW1vdmVkLCBhbmQgdGhlIChyZSlkcmF3LFxuICAgIC8vIHRoYXQgaXMgaW5pdGlhdGVkIGJ5IHRoZSBNVlRMYXllciBjcmVhdGVzIGEgbmV3IGxhYmVsLlxuICAgIHRoaXMucmVtb3ZlTGFiZWwoKTtcbiAgfVxufTtcblxuTVZURmVhdHVyZS5wcm90b3R5cGUuZHJhdyA9IGZ1bmN0aW9uKGNhbnZhc0lEKSB7XG4gIC8vR2V0IHRoZSBpbmZvIGZyb20gdGhlIHRpbGVzIGxpc3RcbiAgdmFyIHRpbGVJbmZvID0gIHRoaXMudGlsZXNbY2FudmFzSURdO1xuXG4gIHZhciB2dGYgPSB0aWxlSW5mby52dGY7XG4gIHZhciBjdHggPSB0aWxlSW5mby5jdHg7XG5cbiAgLy9HZXQgdGhlIGFjdHVhbCBjYW52YXMgZnJvbSB0aGUgcGFyZW50IGxheWVyJ3MgX3RpbGVzIG9iamVjdC5cbiAgdmFyIHh5ID0gY2FudmFzSUQuc3BsaXQoXCI6XCIpLnNsaWNlKDEsIDMpLmpvaW4oXCI6XCIpO1xuICBjdHguY2FudmFzID0gdGhpcy5tdnRMYXllci5fdGlsZXNbeHldO1xuXG4vLyAgVGhpcyBjb3VsZCBiZSB1c2VkIHRvIGRpcmVjdGx5IGNvbXB1dGUgdGhlIHN0eWxlIGZ1bmN0aW9uIGZyb20gdGhlIGxheWVyIG9uIGV2ZXJ5IGRyYXcuXG4vLyAgVGhpcyBpcyBtdWNoIGxlc3MgZWZmaWNpZW50Li4uXG4vLyAgdGhpcy5zdHlsZSA9IHRoaXMubXZ0TGF5ZXIuc3R5bGUodGhpcyk7XG5cbiAgaWYgKHRoaXMuc2VsZWN0ZWQpIHtcbiAgICB2YXIgc3R5bGUgPSB0aGlzLnN0eWxlLnNlbGVjdGVkIHx8IHRoaXMuc3R5bGU7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHN0eWxlID0gdGhpcy5zdHlsZTtcbiAgfVxuXG4gIHN3aXRjaCAodnRmLnR5cGUpIHtcbiAgICBjYXNlIDE6IC8vUG9pbnRcbiAgICAgIHRoaXMuX2RyYXdQb2ludChjdHgsIHZ0Zi5jb29yZGluYXRlcywgc3R5bGUpO1xuICAgICAgaWYgKCF0aGlzLnN0YXRpY0xhYmVsICYmIHR5cGVvZiB0aGlzLnN0eWxlLnN0YXRpY0xhYmVsID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGlmICh0aGlzLnN0eWxlLmFqYXhTb3VyY2UgJiYgIXRoaXMuYWpheERhdGEpIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9kcmF3U3RhdGljTGFiZWwoY3R4LCB2dGYuY29vcmRpbmF0ZXMsIHN0eWxlKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAyOiAvL0xpbmVTdHJpbmdcbiAgICAgIHRoaXMuX2RyYXdMaW5lU3RyaW5nKGN0eCwgdnRmLmNvb3JkaW5hdGVzLCBzdHlsZSk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgMzogLy9Qb2x5Z29uXG4gICAgICB0aGlzLl9kcmF3UG9seWdvbihjdHgsIHZ0Zi5jb29yZGluYXRlcywgc3R5bGUpO1xuICAgICAgYnJlYWs7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbm1hbmFnZWQgdHlwZTogJyArIHZ0Zi50eXBlKTtcbiAgfVxuXG59O1xuXG5NVlRGZWF0dXJlLnByb3RvdHlwZS5nZXRQYXRoc0ZvclRpbGUgPSBmdW5jdGlvbihjYW52YXNJRCkge1xuICAvL0dldCB0aGUgaW5mbyBmcm9tIHRoZSBwYXJ0cyBsaXN0XG4gIHJldHVybiB0aGlzLnRpbGVzW2NhbnZhc0lEXS5wYXRocztcbn07XG5cbk1WVEZlYXR1cmUucHJvdG90eXBlLmFkZFRpbGVGZWF0dXJlID0gZnVuY3Rpb24odnRmLCBjdHgpIHtcbiAgLy9TdG9yZSB0aGUgaW1wb3J0YW50IGl0ZW1zIGluIHRoZSB0aWxlcyBsaXN0XG5cbiAgLy9XZSBvbmx5IHdhbnQgdG8gc3RvcmUgaW5mbyBmb3IgdGlsZXMgZm9yIHRoZSBjdXJyZW50IG1hcCB6b29tLiAgSWYgaXQgaXMgdGlsZSBpbmZvIGZvciBhbm90aGVyIHpvb20gbGV2ZWwsIGlnbm9yZSBpdFxuICAvL0Fsc28sIGlmIHRoZXJlIGFyZSBleGlzdGluZyB0aWxlcyBpbiB0aGUgbGlzdCBmb3Igb3RoZXIgem9vbSBsZXZlbHMsIGV4cHVuZ2UgdGhlbS5cbiAgdmFyIHpvb20gPSB0aGlzLm1hcC5nZXRab29tKCk7XG5cbiAgaWYoY3R4Lnpvb20gIT0gem9vbSkgcmV0dXJuO1xuXG4gIHRoaXMuY2xlYXJUaWxlRmVhdHVyZXMoem9vbSk7IC8vVE9ETzogVGhpcyBpdGVyYXRlcyB0aHJ1IGFsbCB0aWxlcyBldmVyeSB0aW1lIGEgbmV3IHRpbGUgaXMgYWRkZWQuICBGaWd1cmUgb3V0IGEgYmV0dGVyIHdheSB0byBkbyB0aGlzLlxuXG4gIHRoaXMudGlsZXNbY3R4LmlkXSA9IHtcbiAgICBjdHg6IGN0eCxcbiAgICB2dGY6IHZ0ZixcbiAgICBwYXRoczogW11cbiAgfTtcblxufTtcblxuXG4vKipcbiAqIENsZWFyIHRoZSBpbm5lciBsaXN0IG9mIHRpbGUgZmVhdHVyZXMgaWYgdGhleSBkb24ndCBtYXRjaCB0aGUgZ2l2ZW4gem9vbS5cbiAqXG4gKiBAcGFyYW0gem9vbVxuICovXG5NVlRGZWF0dXJlLnByb3RvdHlwZS5jbGVhclRpbGVGZWF0dXJlcyA9IGZ1bmN0aW9uKHpvb20pIHtcbiAgLy9JZiBzdG9yZWQgdGlsZXMgZXhpc3QgZm9yIG90aGVyIHpvb20gbGV2ZWxzLCBleHB1bmdlIHRoZW0gZnJvbSB0aGUgbGlzdC5cbiAgZm9yICh2YXIga2V5IGluIHRoaXMudGlsZXMpIHtcbiAgICAgaWYoa2V5LnNwbGl0KFwiOlwiKVswXSAhPSB6b29tKSBkZWxldGUgdGhpcy50aWxlc1trZXldO1xuICB9XG59O1xuXG4vKipcbiAqIFJlZHJhd3MgYWxsIG9mIHRoZSB0aWxlcyBhc3NvY2lhdGVkIHdpdGggYSBmZWF0dXJlLiBVc2VmdWwgZm9yXG4gKiBzdHlsZSBjaGFuZ2UgYW5kIHRvZ2dsaW5nLlxuICpcbiAqIEBwYXJhbSBzZWxmXG4gKi9cbmZ1bmN0aW9uIHJlZHJhd1RpbGVzKHNlbGYpIHtcbiAgLy9SZWRyYXcgdGhlIHdob2xlIHRpbGUsIG5vdCBqdXN0IHRoaXMgdnRmXG4gIHZhciB0aWxlcyA9IHNlbGYudGlsZXM7XG4gIHZhciBtdnRMYXllciA9IHNlbGYubXZ0TGF5ZXI7XG5cbiAgZm9yICh2YXIgaWQgaW4gdGlsZXMpIHtcbiAgICB2YXIgdGlsZVpvb20gPSBwYXJzZUludChpZC5zcGxpdCgnOicpWzBdKTtcbiAgICB2YXIgbWFwWm9vbSA9IHNlbGYubWFwLmdldFpvb20oKTtcbiAgICBpZiAodGlsZVpvb20gPT09IG1hcFpvb20pIHtcbiAgICAgIC8vUmVkcmF3IHRoZSB0aWxlXG4gICAgICBtdnRMYXllci5yZWRyYXdUaWxlKGlkKTtcbiAgICB9XG4gIH1cbn1cblxuTVZURmVhdHVyZS5wcm90b3R5cGUudG9nZ2xlID0gZnVuY3Rpb24oKSB7XG4gIGlmICh0aGlzLnNlbGVjdGVkKSB7XG4gICAgdGhpcy5kZXNlbGVjdCgpO1xuICB9IGVsc2Uge1xuICAgIHRoaXMuc2VsZWN0KCk7XG4gIH1cbn07XG5cbk1WVEZlYXR1cmUucHJvdG90eXBlLnNlbGVjdCA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLnNlbGVjdGVkID0gdHJ1ZTtcbiAgdGhpcy5tdnRTb3VyY2UuZmVhdHVyZVNlbGVjdGVkKHRoaXMpO1xuICByZWRyYXdUaWxlcyh0aGlzKTtcbiAgdmFyIGxpbmtlZEZlYXR1cmUgPSB0aGlzLmxpbmtlZEZlYXR1cmUoKTtcbiAgaWYgKGxpbmtlZEZlYXR1cmUgJiYgbGlua2VkRmVhdHVyZS5zdGF0aWNMYWJlbCAmJiAhbGlua2VkRmVhdHVyZS5zdGF0aWNMYWJlbC5zZWxlY3RlZCkge1xuICAgIGxpbmtlZEZlYXR1cmUuc3RhdGljTGFiZWwuc2VsZWN0KCk7XG4gIH1cbn07XG5cbk1WVEZlYXR1cmUucHJvdG90eXBlLmRlc2VsZWN0ID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuc2VsZWN0ZWQgPSBmYWxzZTtcbiAgdGhpcy5tdnRTb3VyY2UuZmVhdHVyZURlc2VsZWN0ZWQodGhpcyk7XG4gIHJlZHJhd1RpbGVzKHRoaXMpO1xuICB2YXIgbGlua2VkRmVhdHVyZSA9IHRoaXMubGlua2VkRmVhdHVyZSgpO1xuICBpZiAobGlua2VkRmVhdHVyZSAmJiBsaW5rZWRGZWF0dXJlLnN0YXRpY0xhYmVsICYmIGxpbmtlZEZlYXR1cmUuc3RhdGljTGFiZWwuc2VsZWN0ZWQpIHtcbiAgICBsaW5rZWRGZWF0dXJlLnN0YXRpY0xhYmVsLmRlc2VsZWN0KCk7XG4gIH1cbn07XG5cbk1WVEZlYXR1cmUucHJvdG90eXBlLm9uID0gZnVuY3Rpb24oZXZlbnRUeXBlLCBjYWxsYmFjaykge1xuICB0aGlzLl9ldmVudEhhbmRsZXJzW2V2ZW50VHlwZV0gPSBjYWxsYmFjaztcbn07XG5cbk1WVEZlYXR1cmUucHJvdG90eXBlLl9kcmF3UG9pbnQgPSBmdW5jdGlvbihjdHgsIGNvb3Jkc0FycmF5LCBzdHlsZSkge1xuICBpZiAoIXN0eWxlKSByZXR1cm47XG4gIGlmICghY3R4IHx8ICFjdHguY2FudmFzKSByZXR1cm47XG5cbiAgdmFyIHRpbGUgPSB0aGlzLnRpbGVzW2N0eC5pZF07XG5cbiAgLy9HZXQgcmFkaXVzXG4gIHZhciByYWRpdXMgPSAxO1xuICBpZiAodHlwZW9mIHN0eWxlLnJhZGl1cyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJhZGl1cyA9IHN0eWxlLnJhZGl1cyhjdHguem9vbSk7IC8vQWxsb3dzIGZvciBzY2FsZSBkZXBlbmRlbnQgcmVkbmVyaW5nXG4gIH1cbiAgZWxzZXtcbiAgICByYWRpdXMgPSBzdHlsZS5yYWRpdXM7XG4gIH1cblxuICB2YXIgcCA9IHRoaXMuX3RpbGVQb2ludChjb29yZHNBcnJheVswXVswXSk7XG4gIHZhciBjID0gY3R4LmNhbnZhcztcbiAgdmFyIGN0eDJkO1xuICB0cnl7XG4gICAgY3R4MmQgPSBjLmdldENvbnRleHQoJzJkJyk7XG4gIH1cbiAgY2F0Y2goZSl7XG4gICAgY29uc29sZS5sb2coXCJfZHJhd1BvaW50IGVycm9yOiBcIiArIGUpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGN0eDJkLmJlZ2luUGF0aCgpO1xuICBjdHgyZC5maWxsU3R5bGUgPSBzdHlsZS5jb2xvcjtcbiAgY3R4MmQuYXJjKHAueCwgcC55LCByYWRpdXMsIDAsIE1hdGguUEkgKiAyKTtcbiAgY3R4MmQuY2xvc2VQYXRoKCk7XG4gIGN0eDJkLmZpbGwoKTtcblxuICBpZihzdHlsZS5saW5lV2lkdGggJiYgc3R5bGUuc3Ryb2tlU3R5bGUpe1xuICAgIGN0eDJkLmxpbmVXaWR0aCA9IHN0eWxlLmxpbmVXaWR0aDtcbiAgICBjdHgyZC5zdHJva2VTdHlsZSA9IHN0eWxlLnN0cm9rZVN0eWxlO1xuICAgIGN0eDJkLnN0cm9rZSgpO1xuICB9XG5cbiAgY3R4MmQucmVzdG9yZSgpO1xuICB0aWxlLnBhdGhzLnB1c2goW3BdKTtcbn07XG5cbk1WVEZlYXR1cmUucHJvdG90eXBlLl9kcmF3TGluZVN0cmluZyA9IGZ1bmN0aW9uKGN0eCwgY29vcmRzQXJyYXksIHN0eWxlKSB7XG4gIGlmICghc3R5bGUpIHJldHVybjtcbiAgaWYgKCFjdHggfHwgIWN0eC5jYW52YXMpIHJldHVybjtcblxuICB2YXIgY3R4MmQgPSBjdHguY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gIGN0eDJkLnN0cm9rZVN0eWxlID0gc3R5bGUuY29sb3I7XG4gIGN0eDJkLmxpbmVXaWR0aCA9IHN0eWxlLnNpemU7XG4gIGN0eDJkLmJlZ2luUGF0aCgpO1xuXG4gIHZhciBwcm9qQ29vcmRzID0gW107XG4gIHZhciB0aWxlID0gdGhpcy50aWxlc1tjdHguaWRdO1xuXG4gIGZvciAodmFyIGdpZHggaW4gY29vcmRzQXJyYXkpIHtcbiAgICB2YXIgY29vcmRzID0gY29vcmRzQXJyYXlbZ2lkeF07XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgY29vcmRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgbWV0aG9kID0gKGkgPT09IDAgPyAnbW92ZScgOiAnbGluZScpICsgJ1RvJztcbiAgICAgIHZhciBwcm9qID0gdGhpcy5fdGlsZVBvaW50KGNvb3Jkc1tpXSk7XG4gICAgICBwcm9qQ29vcmRzLnB1c2gocHJvaik7XG4gICAgICBjdHgyZFttZXRob2RdKHByb2oueCwgcHJvai55KTtcbiAgICB9XG4gIH1cblxuICBjdHgyZC5zdHJva2UoKTtcbiAgY3R4MmQucmVzdG9yZSgpO1xuXG4gIHRpbGUucGF0aHMucHVzaChwcm9qQ29vcmRzKTtcbn07XG5cbk1WVEZlYXR1cmUucHJvdG90eXBlLl9kcmF3UG9seWdvbiA9IGZ1bmN0aW9uKGN0eCwgY29vcmRzQXJyYXksIHN0eWxlKSB7XG4gIGlmICghc3R5bGUpIHJldHVybjtcbiAgaWYgKCFjdHggfHwgIWN0eC5jYW52YXMpIHJldHVybjtcblxuICB2YXIgY3R4MmQgPSBjdHguY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gIHZhciBvdXRsaW5lID0gc3R5bGUub3V0bGluZTtcblxuICAvLyBjb2xvciBtYXkgYmUgZGVmaW5lZCB2aWEgZnVuY3Rpb24gdG8gbWFrZSBjaG9yb3BsZXRoIHdvcmsgcmlnaHRcbiAgaWYgKHR5cGVvZiBzdHlsZS5jb2xvciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGN0eDJkLmZpbGxTdHlsZSA9IHN0eWxlLmNvbG9yKGN0eDJkKTtcbiAgfSBlbHNlIHtcbiAgICBjdHgyZC5maWxsU3R5bGUgPSBzdHlsZS5jb2xvcjtcbiAgfVxuXG4gIGlmIChvdXRsaW5lKSB7XG4gICAgY3R4MmQuc3Ryb2tlU3R5bGUgPSBvdXRsaW5lLmNvbG9yO1xuICAgIGN0eDJkLmxpbmVXaWR0aCA9IG91dGxpbmUuc2l6ZTtcbiAgfVxuICBjdHgyZC5iZWdpblBhdGgoKTtcblxuICB2YXIgcHJvakNvb3JkcyA9IFtdO1xuICB2YXIgdGlsZSA9IHRoaXMudGlsZXNbY3R4LmlkXTtcblxuICB2YXIgZmVhdHVyZUxhYmVsID0gdGhpcy5keW5hbWljTGFiZWw7XG4gIGlmIChmZWF0dXJlTGFiZWwpIHtcbiAgICBmZWF0dXJlTGFiZWwuYWRkVGlsZVBvbHlzKGN0eCwgY29vcmRzQXJyYXkpO1xuICB9XG5cbiAgZm9yICh2YXIgZ2lkeCA9IDAsIGxlbiA9IGNvb3Jkc0FycmF5Lmxlbmd0aDsgZ2lkeCA8IGxlbjsgZ2lkeCsrKSB7XG4gICAgdmFyIGNvb3JkcyA9IGNvb3Jkc0FycmF5W2dpZHhdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb29yZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBjb29yZCA9IGNvb3Jkc1tpXTtcbiAgICAgIHZhciBtZXRob2QgPSAoaSA9PT0gMCA/ICdtb3ZlJyA6ICdsaW5lJykgKyAnVG8nO1xuICAgICAgdmFyIHByb2ogPSB0aGlzLl90aWxlUG9pbnQoY29vcmRzW2ldKTtcbiAgICAgIHByb2pDb29yZHMucHVzaChwcm9qKTtcbiAgICAgIGN0eDJkW21ldGhvZF0ocHJvai54LCBwcm9qLnkpO1xuICAgIH1cbiAgfVxuXG4gIGN0eDJkLmNsb3NlUGF0aCgpO1xuICBjdHgyZC5maWxsKCk7XG4gIGlmIChvdXRsaW5lKSB7XG4gICAgY3R4MmQuc3Ryb2tlKCk7XG4gIH1cblxuICB0aWxlLnBhdGhzLnB1c2gocHJvakNvb3Jkcyk7XG5cbn07XG5cbk1WVEZlYXR1cmUucHJvdG90eXBlLl9kcmF3U3RhdGljTGFiZWwgPSBmdW5jdGlvbihjdHgsIGNvb3Jkc0FycmF5LCBzdHlsZSkge1xuICBpZiAoIXN0eWxlKSByZXR1cm47XG4gIGlmICghY3R4KSByZXR1cm47XG5cbiAgLy8gSWYgdGhlIGNvcnJlc3BvbmRpbmcgbGF5ZXIgaXMgbm90IG9uIHRoZSBtYXAsIFxuICAvLyB3ZSBkb250IHdhbnQgdG8gcHV0IG9uIGEgbGFiZWwuXG4gIGlmICghdGhpcy5tdnRMYXllci5fbWFwKSByZXR1cm47XG5cbiAgdmFyIHZlY1B0ID0gdGhpcy5fdGlsZVBvaW50KGNvb3Jkc0FycmF5WzBdWzBdKTtcblxuICAvLyBXZSdyZSBtYWtpbmcgYSBzdGFuZGFyZCBMZWFmbGV0IE1hcmtlciBmb3IgdGhpcyBsYWJlbC5cbiAgdmFyIHAgPSB0aGlzLl9wcm9qZWN0KHZlY1B0LCBjdHgudGlsZS54LCBjdHgudGlsZS55LCB0aGlzLmV4dGVudCwgdGhpcy50aWxlU2l6ZSk7IC8vdmVjdGlsZSBwdCB0byBtZXJjIHB0XG4gIHZhciBtZXJjUHQgPSBMLnBvaW50KHAueCwgcC55KTsgLy8gbWFrZSBpbnRvIGxlYWZsZXQgb2JqXG4gIHZhciBsYXRMbmcgPSB0aGlzLm1hcC51bnByb2plY3QobWVyY1B0KTsgLy8gbWVyYyBwdCB0byBsYXRsbmdcblxuICB0aGlzLnN0YXRpY0xhYmVsID0gbmV3IFN0YXRpY0xhYmVsKHRoaXMsIGN0eCwgbGF0TG5nLCBzdHlsZSk7XG4gIHRoaXMubXZ0TGF5ZXIuZmVhdHVyZVdpdGhMYWJlbEFkZGVkKHRoaXMpO1xufTtcblxuTVZURmVhdHVyZS5wcm90b3R5cGUucmVtb3ZlTGFiZWwgPSBmdW5jdGlvbigpIHtcbiAgaWYgKCF0aGlzLnN0YXRpY0xhYmVsKSByZXR1cm47XG4gIHRoaXMuc3RhdGljTGFiZWwucmVtb3ZlKCk7XG4gIHRoaXMuc3RhdGljTGFiZWwgPSBudWxsO1xufTtcblxuLyoqXG4gKiBQcm9qZWN0cyBhIHZlY3RvciB0aWxlIHBvaW50IHRvIHRoZSBTcGhlcmljYWwgTWVyY2F0b3IgcGl4ZWwgc3BhY2UgZm9yIGEgZ2l2ZW4gem9vbSBsZXZlbC5cbiAqXG4gKiBAcGFyYW0gdmVjUHRcbiAqIEBwYXJhbSB0aWxlWFxuICogQHBhcmFtIHRpbGVZXG4gKiBAcGFyYW0gZXh0ZW50XG4gKiBAcGFyYW0gdGlsZVNpemVcbiAqL1xuTVZURmVhdHVyZS5wcm90b3R5cGUuX3Byb2plY3QgPSBmdW5jdGlvbih2ZWNQdCwgdGlsZVgsIHRpbGVZLCBleHRlbnQsIHRpbGVTaXplKSB7XG4gIHZhciB4T2Zmc2V0ID0gdGlsZVggKiB0aWxlU2l6ZTtcbiAgdmFyIHlPZmZzZXQgPSB0aWxlWSAqIHRpbGVTaXplO1xuICByZXR1cm4ge1xuICAgIHg6IE1hdGguZmxvb3IodmVjUHQueCArIHhPZmZzZXQpLFxuICAgIHk6IE1hdGguZmxvb3IodmVjUHQueSArIHlPZmZzZXQpXG4gIH07XG59O1xuXG4vKipcbiAqIFRha2VzIGEgY29vcmRpbmF0ZSBmcm9tIGEgdmVjdG9yIHRpbGUgYW5kIHR1cm5zIGl0IGludG8gYSBMZWFmbGV0IFBvaW50LlxuICpcbiAqIEBwYXJhbSBjdHhcbiAqIEBwYXJhbSBjb29yZHNcbiAqIEByZXR1cm5zIHtlR2VvbVR5cGUuUG9pbnR9XG4gKiBAcHJpdmF0ZVxuICovXG5NVlRGZWF0dXJlLnByb3RvdHlwZS5fdGlsZVBvaW50ID0gZnVuY3Rpb24oY29vcmRzKSB7XG4gIHJldHVybiBuZXcgTC5Qb2ludChjb29yZHMueCAvIHRoaXMuZGl2aXNvciwgY29vcmRzLnkgLyB0aGlzLmRpdmlzb3IpO1xufTtcblxuTVZURmVhdHVyZS5wcm90b3R5cGUubGlua2VkRmVhdHVyZSA9IGZ1bmN0aW9uKCkge1xuICB2YXIgbGlua2VkTGF5ZXIgPSB0aGlzLm12dExheWVyLmxpbmtlZExheWVyKCk7XG4gIGlmKGxpbmtlZExheWVyKXtcbiAgICB2YXIgbGlua2VkRmVhdHVyZSA9IGxpbmtlZExheWVyLmZlYXR1cmVzW3RoaXMuaWRdO1xuICAgIHJldHVybiBsaW5rZWRGZWF0dXJlO1xuICB9ZWxzZXtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufTtcblxuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IFJ5YW4gV2hpdGxleSBvbiA1LzE3LzE0LlxuICovXG4vKiogRm9ya2VkIGZyb20gaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vREd1aWRpLzE3MTYwMTAgKiovXG52YXIgTVZURmVhdHVyZSA9IHJlcXVpcmUoJy4vTVZURmVhdHVyZScpO1xudmFyIFV0aWwgPSByZXF1aXJlKCcuL01WVFV0aWwnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBMLlRpbGVMYXllci5DYW52YXMuZXh0ZW5kKHtcblxuICBvcHRpb25zOiB7XG4gICAgZGVidWc6IGZhbHNlLFxuICAgIGlzSGlkZGVuTGF5ZXI6IGZhbHNlLFxuICAgIGdldElERm9yTGF5ZXJGZWF0dXJlOiBmdW5jdGlvbigpIHt9LFxuICAgIHRpbGVTaXplOiAyNTYsXG4gICAgbGluZUNsaWNrVG9sZXJhbmNlOiAyXG4gIH0sXG5cbiAgX2ZlYXR1cmVJc0NsaWNrZWQ6IHt9LFxuXG4gIF9pc1BvaW50SW5Qb2x5OiBmdW5jdGlvbihwdCwgcG9seSkge1xuICAgIGlmKHBvbHkgJiYgcG9seS5sZW5ndGgpIHtcbiAgICAgIGZvciAodmFyIGMgPSBmYWxzZSwgaSA9IC0xLCBsID0gcG9seS5sZW5ndGgsIGogPSBsIC0gMTsgKytpIDwgbDsgaiA9IGkpXG4gICAgICAgICgocG9seVtpXS55IDw9IHB0LnkgJiYgcHQueSA8IHBvbHlbal0ueSkgfHwgKHBvbHlbal0ueSA8PSBwdC55ICYmIHB0LnkgPCBwb2x5W2ldLnkpKVxuICAgICAgICAmJiAocHQueCA8IChwb2x5W2pdLnggLSBwb2x5W2ldLngpICogKHB0LnkgLSBwb2x5W2ldLnkpIC8gKHBvbHlbal0ueSAtIHBvbHlbaV0ueSkgKyBwb2x5W2ldLngpXG4gICAgICAgICYmIChjID0gIWMpO1xuICAgICAgcmV0dXJuIGM7XG4gICAgfVxuICB9LFxuXG4gIF9nZXREaXN0YW5jZUZyb21MaW5lOiBmdW5jdGlvbihwdCwgcHRzKSB7XG4gICAgdmFyIG1pbiA9IE51bWJlci5QT1NJVElWRV9JTkZJTklUWTtcbiAgICBpZiAocHRzICYmIHB0cy5sZW5ndGggPiAxKSB7XG4gICAgICBwdCA9IEwucG9pbnQocHQueCwgcHQueSk7XG4gICAgICBmb3IgKHZhciBpID0gMCwgbCA9IHB0cy5sZW5ndGggLSAxOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIHZhciB0ZXN0ID0gdGhpcy5fcHJvamVjdFBvaW50T25MaW5lU2VnbWVudChwdCwgcHRzW2ldLCBwdHNbaSArIDFdKTtcbiAgICAgICAgaWYgKHRlc3QuZGlzdGFuY2UgPD0gbWluKSB7XG4gICAgICAgICAgbWluID0gdGVzdC5kaXN0YW5jZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbWluO1xuICB9LFxuXG4gIF9wcm9qZWN0UG9pbnRPbkxpbmVTZWdtZW50OiBmdW5jdGlvbihwLCByMCwgcjEpIHtcbiAgICB2YXIgbGluZUxlbmd0aCA9IHIwLmRpc3RhbmNlVG8ocjEpO1xuICAgIGlmIChsaW5lTGVuZ3RoIDwgMSkge1xuICAgICAgICByZXR1cm4ge2Rpc3RhbmNlOiBwLmRpc3RhbmNlVG8ocjApLCBjb29yZGluYXRlOiByMH07XG4gICAgfVxuICAgIHZhciB1ID0gKChwLnggLSByMC54KSAqIChyMS54IC0gcjAueCkgKyAocC55IC0gcjAueSkgKiAocjEueSAtIHIwLnkpKSAvIE1hdGgucG93KGxpbmVMZW5ndGgsIDIpO1xuICAgIGlmICh1IDwgMC4wMDAwMDAxKSB7XG4gICAgICAgIHJldHVybiB7ZGlzdGFuY2U6IHAuZGlzdGFuY2VUbyhyMCksIGNvb3JkaW5hdGU6IHIwfTtcbiAgICB9XG4gICAgaWYgKHUgPiAwLjk5OTk5OTkpIHtcbiAgICAgICAgcmV0dXJuIHtkaXN0YW5jZTogcC5kaXN0YW5jZVRvKHIxKSwgY29vcmRpbmF0ZTogcjF9O1xuICAgIH1cbiAgICB2YXIgYSA9IEwucG9pbnQocjAueCArIHUgKiAocjEueCAtIHIwLngpLCByMC55ICsgdSAqIChyMS55IC0gcjAueSkpO1xuICAgIHJldHVybiB7ZGlzdGFuY2U6IHAuZGlzdGFuY2VUbyhhKSwgcG9pbnQ6IGF9O1xuICB9LFxuXG4gIGluaXRpYWxpemU6IGZ1bmN0aW9uKG12dFNvdXJjZSwgb3B0aW9ucykge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICBzZWxmLm12dFNvdXJjZSA9IG12dFNvdXJjZTtcbiAgICBMLlV0aWwuc2V0T3B0aW9ucyh0aGlzLCBvcHRpb25zKTtcblxuICAgIHRoaXMuc3R5bGUgPSBvcHRpb25zLnN0eWxlO1xuICAgIHRoaXMubmFtZSA9IG9wdGlvbnMubmFtZTtcbiAgICB0aGlzLl9jYW52YXNJRFRvRmVhdHVyZXMgPSB7fTtcbiAgICB0aGlzLmZlYXR1cmVzID0ge307XG4gICAgdGhpcy5mZWF0dXJlc1dpdGhMYWJlbHMgPSBbXTtcbiAgICB0aGlzLl9oaWdoZXN0Q291bnQgPSAwO1xuICB9LFxuXG4gIG9uQWRkOiBmdW5jdGlvbihtYXApIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgc2VsZi5tYXAgPSBtYXA7XG4gICAgTC5UaWxlTGF5ZXIuQ2FudmFzLnByb3RvdHlwZS5vbkFkZC5jYWxsKHRoaXMsIG1hcCk7XG4gICAgbWFwLm9uKCdsYXllcnJlbW92ZScsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIC8vIHdlIG9ubHkgd2FudCB0byBkbyBzdHVmZiB3aGVuIHRoZSBsYXllcnJlbW92ZSBldmVudCBpcyBvbiB0aGlzIGxheWVyXG4gICAgICBpZiAoZS5sYXllci5fbGVhZmxldF9pZCA9PT0gc2VsZi5fbGVhZmxldF9pZCkge1xuICAgICAgICByZW1vdmVMYWJlbHMoc2VsZik7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG5cbiAgZHJhd1RpbGU6IGZ1bmN0aW9uKGNhbnZhcywgdGlsZVBvaW50LCB6b29tKSB7XG5cbiAgICB2YXIgY3R4ID0ge1xuICAgICAgY2FudmFzOiBjYW52YXMsXG4gICAgICB0aWxlOiB0aWxlUG9pbnQsXG4gICAgICB6b29tOiB6b29tLFxuICAgICAgdGlsZVNpemU6IHRoaXMub3B0aW9ucy50aWxlU2l6ZVxuICAgIH07XG5cbiAgICBjdHguaWQgPSBVdGlsLmdldENvbnRleHRJRChjdHgpO1xuXG4gICAgaWYgKCF0aGlzLl9jYW52YXNJRFRvRmVhdHVyZXNbY3R4LmlkXSkge1xuICAgICAgdGhpcy5faW5pdGlhbGl6ZUZlYXR1cmVzSGFzaChjdHgpO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuZmVhdHVyZXMpIHtcbiAgICAgIHRoaXMuZmVhdHVyZXMgPSB7fTtcbiAgICB9XG5cbiAgfSxcblxuICBfaW5pdGlhbGl6ZUZlYXR1cmVzSGFzaDogZnVuY3Rpb24oY3R4KXtcbiAgICB0aGlzLl9jYW52YXNJRFRvRmVhdHVyZXNbY3R4LmlkXSA9IHt9O1xuICAgIHRoaXMuX2NhbnZhc0lEVG9GZWF0dXJlc1tjdHguaWRdLmZlYXR1cmVzID0gW107XG4gICAgdGhpcy5fY2FudmFzSURUb0ZlYXR1cmVzW2N0eC5pZF0uY2FudmFzID0gY3R4LmNhbnZhcztcbiAgfSxcblxuICBfZHJhdzogZnVuY3Rpb24oY3R4KSB7XG4gICAgLy9EcmF3IGlzIGhhbmRsZWQgYnkgdGhlIHBhcmVudCBNVlRTb3VyY2Ugb2JqZWN0XG4gIH0sXG4gIGdldENhbnZhczogZnVuY3Rpb24ocGFyZW50Q3R4KXtcbiAgICAvL1RoaXMgZ2V0cyBjYWxsZWQgaWYgYSB2ZWN0b3IgdGlsZSBmZWF0dXJlIGhhcyBhbHJlYWR5IGJlZW4gcGFyc2VkLlxuICAgIC8vV2UndmUgYWxyZWFkeSBnb3QgdGhlIGdlb20sIGp1c3QgZ2V0IG9uIHdpdGggdGhlIGRyYXdpbmcuXG4gICAgLy9OZWVkIGEgd2F5IHRvIHBsdWNrIGEgY2FudmFzIGVsZW1lbnQgZnJvbSB0aGlzIGxheWVyIGdpdmVuIHRoZSBwYXJlbnQgbGF5ZXIncyBpZC5cbiAgICAvL1dhaXQgZm9yIGl0IHRvIGdldCBsb2FkZWQgYmVmb3JlIHByb2NlZWRpbmcuXG4gICAgdmFyIHRpbGVQb2ludCA9IHBhcmVudEN0eC50aWxlO1xuICAgIHZhciBjdHggPSB0aGlzLl90aWxlc1t0aWxlUG9pbnQueCArIFwiOlwiICsgdGlsZVBvaW50LnldO1xuXG4gICAgaWYoY3R4KXtcbiAgICAgIHBhcmVudEN0eC5jYW52YXMgPSBjdHg7XG4gICAgICB0aGlzLnJlZHJhd1RpbGUocGFyZW50Q3R4LmlkKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAvL1RoaXMgaXMgYSB0aW1lciB0aGF0IHdpbGwgd2FpdCBmb3IgYSBjcml0ZXJpb24gdG8gcmV0dXJuIHRydWUuXG4gICAgLy9JZiBub3QgdHJ1ZSB3aXRoaW4gdGhlIHRpbWVvdXQgZHVyYXRpb24sIGl0IHdpbGwgbW92ZSBvbi5cbiAgICB3YWl0Rm9yKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY3R4ID0gc2VsZi5fdGlsZXNbdGlsZVBvaW50LnggKyBcIjpcIiArIHRpbGVQb2ludC55XTtcbiAgICAgICAgaWYoY3R4KSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBmdW5jdGlvbigpe1xuICAgICAgICAvL1doZW4gaXQgZmluaXNoZXMsIGRvIHRoaXMuXG4gICAgICAgIGN0eCA9IHNlbGYuX3RpbGVzW3RpbGVQb2ludC54ICsgXCI6XCIgKyB0aWxlUG9pbnQueV07XG4gICAgICAgIHBhcmVudEN0eC5jYW52YXMgPSBjdHg7XG4gICAgICAgIHNlbGYucmVkcmF3VGlsZShwYXJlbnRDdHguaWQpO1xuXG4gICAgICB9LCAvL3doZW4gZG9uZSwgZ28gdG8gbmV4dCBmbG93XG4gICAgICAyMDAwKTsgLy9UaGUgVGltZW91dCBtaWxsaXNlY29uZHMuICBBZnRlciB0aGlzLCBnaXZlIHVwIGFuZCBtb3ZlIG9uXG5cbiAgfSxcblxuICBwYXJzZVZlY3RvclRpbGVMYXllcjogZnVuY3Rpb24odnRsLCBjdHgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdmFyIHRpbGVQb2ludCA9IGN0eC50aWxlO1xuICAgIHZhciBsYXllckN0eCAgPSB7IGNhbnZhczogbnVsbCwgaWQ6IGN0eC5pZCwgdGlsZTogY3R4LnRpbGUsIHpvb206IGN0eC56b29tLCB0aWxlU2l6ZTogY3R4LnRpbGVTaXplfTtcblxuICAgIC8vU2VlIGlmIHdlIGNhbiBwbHVjayB0aGUgY2hpbGQgdGlsZSBmcm9tIHRoaXMgUEJGIHRpbGUgbGF5ZXIgYmFzZWQgb24gdGhlIG1hc3RlciBsYXllcidzIHRpbGUgaWQuXG4gICAgbGF5ZXJDdHguY2FudmFzID0gc2VsZi5fdGlsZXNbdGlsZVBvaW50LnggKyBcIjpcIiArIHRpbGVQb2ludC55XTtcblxuXG5cbiAgICAvL0luaXRpYWxpemUgdGhpcyB0aWxlJ3MgZmVhdHVyZSBzdG9yYWdlIGhhc2gsIGlmIGl0IGhhc24ndCBhbHJlYWR5IGJlZW4gY3JlYXRlZC4gIFVzZWQgZm9yIHdoZW4gZmlsdGVycyBhcmUgdXBkYXRlZCwgYW5kIGZlYXR1cmVzIGFyZSBjbGVhcmVkIHRvIHByZXBhcmUgZm9yIGEgZnJlc2ggcmVkcmF3LlxuICAgIGlmICghdGhpcy5fY2FudmFzSURUb0ZlYXR1cmVzW2xheWVyQ3R4LmlkXSkge1xuICAgICAgdGhpcy5faW5pdGlhbGl6ZUZlYXR1cmVzSGFzaChsYXllckN0eCk7XG4gICAgfWVsc2V7XG4gICAgICAvL0NsZWFyIHRoaXMgdGlsZSdzIHByZXZpb3VzbHkgc2F2ZWQgZmVhdHVyZXMuXG4gICAgICB0aGlzLmNsZWFyVGlsZUZlYXR1cmVIYXNoKGxheWVyQ3R4LmlkKTtcbiAgICB9XG5cbiAgICB2YXIgZmVhdHVyZXMgPSB2dGwucGFyc2VkRmVhdHVyZXM7XG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGZlYXR1cmVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICB2YXIgdnRmID0gZmVhdHVyZXNbaV07IC8vdmVjdG9yIHRpbGUgZmVhdHVyZVxuICAgICAgdnRmLmxheWVyID0gdnRsO1xuXG4gICAgICAvKipcbiAgICAgICAqIEFwcGx5IGZpbHRlciBvbiBmZWF0dXJlIGlmIHRoZXJlIGlzIG9uZS4gRGVmaW5lZCBpbiB0aGUgb3B0aW9ucyBvYmplY3RcbiAgICAgICAqIG9mIFRpbGVMYXllci5NVlRTb3VyY2UuanNcbiAgICAgICAqL1xuICAgICAgdmFyIGZpbHRlciA9IHNlbGYub3B0aW9ucy5maWx0ZXI7XG4gICAgICBpZiAoZmlsdGVyICYmIHR5cGVvZiBmaWx0ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgaWYgKCBmaWx0ZXIodnRmLCBsYXllckN0eCkgPT09IGZhbHNlICkgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIHZhciBnZXRJREZvckxheWVyRmVhdHVyZTtcbiAgICAgIGlmICh0eXBlb2Ygc2VsZi5vcHRpb25zLmdldElERm9yTGF5ZXJGZWF0dXJlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGdldElERm9yTGF5ZXJGZWF0dXJlID0gc2VsZi5vcHRpb25zLmdldElERm9yTGF5ZXJGZWF0dXJlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZ2V0SURGb3JMYXllckZlYXR1cmUgPSBVdGlsLmdldElERm9yTGF5ZXJGZWF0dXJlO1xuICAgICAgfVxuICAgICAgdmFyIHVuaXF1ZUlEID0gc2VsZi5vcHRpb25zLmdldElERm9yTGF5ZXJGZWF0dXJlKHZ0ZikgfHwgaTtcbiAgICAgIHZhciBtdnRGZWF0dXJlID0gc2VsZi5mZWF0dXJlc1t1bmlxdWVJRF07XG5cbiAgICAgIC8qKlxuICAgICAgICogVXNlIGxheWVyT3JkZXJpbmcgZnVuY3Rpb24gdG8gYXBwbHkgYSB6SW5kZXggcHJvcGVydHkgdG8gZWFjaCB2dGYuICBUaGlzIGlzIGRlZmluZWQgaW5cbiAgICAgICAqIFRpbGVMYXllci5NVlRTb3VyY2UuanMuICBVc2VkIGJlbG93IHRvIHNvcnQgZmVhdHVyZXMubnBtXG4gICAgICAgKi9cbiAgICAgIHZhciBsYXllck9yZGVyaW5nID0gc2VsZi5vcHRpb25zLmxheWVyT3JkZXJpbmc7XG4gICAgICBpZiAodHlwZW9mIGxheWVyT3JkZXJpbmcgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgbGF5ZXJPcmRlcmluZyh2dGYsIGxheWVyQ3R4KTsgLy9BcHBsaWVzIGEgY3VzdG9tIHByb3BlcnR5IHRvIHRoZSBmZWF0dXJlLCB3aGljaCBpcyB1c2VkIGFmdGVyIHdlJ3JlIHRocnUgaXRlcmF0aW5nIHRvIHNvcnRcbiAgICAgIH1cblxuICAgICAgLy9DcmVhdGUgYSBuZXcgTVZURmVhdHVyZSBpZiBvbmUgZG9lc24ndCBhbHJlYWR5IGV4aXN0IGZvciB0aGlzIGZlYXR1cmUuXG4gICAgICBpZiAoIW12dEZlYXR1cmUpIHtcblxuXG4gICAgICAgIC8vR2V0IGEgc3R5bGUgZm9yIHRoZSBmZWF0dXJlIC0gc2V0IGl0IGp1c3Qgb25jZSBmb3IgZWFjaCBuZXcgTVZURmVhdHVyZVxuICAgICAgICB2YXIgc3R5bGUgPSBzZWxmLnN0eWxlKHZ0Zik7XG5cbiAgICAgICAgLy9jcmVhdGUgYSBuZXcgZmVhdHVyZVxuICAgICAgICBzZWxmLmZlYXR1cmVzW3VuaXF1ZUlEXSA9IG12dEZlYXR1cmUgPSBuZXcgTVZURmVhdHVyZShzZWxmLCB2dGYsIGxheWVyQ3R4LCB1bmlxdWVJRCwgc3R5bGUpO1xuICAgICAgICBpZiAoc3R5bGUgJiYgc3R5bGUuZHluYW1pY0xhYmVsICYmIHR5cGVvZiBzdHlsZS5keW5hbWljTGFiZWwgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBzZWxmLmZlYXR1cmVzV2l0aExhYmVscy5wdXNoKG12dEZlYXR1cmUpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvL0FkZCB0aGUgbmV3IHBhcnQgdG8gdGhlIGV4aXN0aW5nIGZlYXR1cmVcbiAgICAgICAgbXZ0RmVhdHVyZS5hZGRUaWxlRmVhdHVyZSh2dGYsIGxheWVyQ3R4KTtcbiAgICAgIH1cblxuICAgICAgLy9Bc3NvY2lhdGUgJiBTYXZlIHRoaXMgZmVhdHVyZSB3aXRoIHRoaXMgdGlsZSBmb3IgbGF0ZXJcbiAgICAgIGlmKGxheWVyQ3R4ICYmIGxheWVyQ3R4LmlkKSBzZWxmLl9jYW52YXNJRFRvRmVhdHVyZXNbbGF5ZXJDdHguaWRdWydmZWF0dXJlcyddLnB1c2gobXZ0RmVhdHVyZSk7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBcHBseSBzb3J0aW5nICh6SW5kZXgpIG9uIGZlYXR1cmUgaWYgdGhlcmUgaXMgYSBmdW5jdGlvbiBkZWZpbmVkIGluIHRoZSBvcHRpb25zIG9iamVjdFxuICAgICAqIG9mIFRpbGVMYXllci5NVlRTb3VyY2UuanNcbiAgICAgKi9cbiAgICB2YXIgbGF5ZXJPcmRlcmluZyA9IHNlbGYub3B0aW9ucy5sYXllck9yZGVyaW5nO1xuICAgIGlmIChsYXllck9yZGVyaW5nKSB7XG4gICAgICAvL1dlJ3ZlIGFzc2lnbmVkIHRoZSBjdXN0b20gekluZGV4IHByb3BlcnR5IHdoZW4gaXRlcmF0aW5nIGFib3ZlLiAgTm93IGp1c3Qgc29ydC5cbiAgICAgIHNlbGYuX2NhbnZhc0lEVG9GZWF0dXJlc1tsYXllckN0eC5pZF0uZmVhdHVyZXMgPSBzZWxmLl9jYW52YXNJRFRvRmVhdHVyZXNbbGF5ZXJDdHguaWRdLmZlYXR1cmVzLnNvcnQoZnVuY3Rpb24oYSwgYikge1xuICAgICAgICByZXR1cm4gLShiLnByb3BlcnRpZXMuekluZGV4IC0gYS5wcm9wZXJ0aWVzLnpJbmRleClcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHNlbGYucmVkcmF3VGlsZShsYXllckN0eC5pZCk7XG4gIH0sXG5cbiAgc2V0U3R5bGU6IGZ1bmN0aW9uKHN0eWxlRm4pIHtcbiAgICAvLyByZWZyZXNoIHRoZSBudW1iZXIgZm9yIHRoZSBoaWdoZXN0IGNvdW50IHZhbHVlXG4gICAgLy8gdGhpcyBpcyB1c2VkIG9ubHkgZm9yIGNob3JvcGxldGhcbiAgICB0aGlzLl9oaWdoZXN0Q291bnQgPSAwO1xuXG4gICAgLy8gbG93ZXN0IGNvdW50IHNob3VsZCBub3QgYmUgMCwgc2luY2Ugd2Ugd2FudCB0byBmaWd1cmUgb3V0IHRoZSBsb3dlc3RcbiAgICB0aGlzLl9sb3dlc3RDb3VudCA9IG51bGw7XG5cbiAgICB0aGlzLnN0eWxlID0gc3R5bGVGbjtcbiAgICBmb3IgKHZhciBrZXkgaW4gdGhpcy5mZWF0dXJlcykge1xuICAgICAgdmFyIGZlYXQgPSB0aGlzLmZlYXR1cmVzW2tleV07XG4gICAgICBmZWF0LnNldFN0eWxlKHN0eWxlRm4pO1xuICAgIH1cbiAgICB2YXIgeiA9IHRoaXMubWFwLmdldFpvb20oKTtcbiAgICBmb3IgKHZhciBrZXkgaW4gdGhpcy5fdGlsZXMpIHtcbiAgICAgIHZhciBpZCA9IHogKyAnOicgKyBrZXk7XG4gICAgICB0aGlzLnJlZHJhd1RpbGUoaWQpO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogQXMgY291bnRzIGZvciBjaG9yb3BsZXRocyBjb21lIGluIHdpdGggdGhlIGFqYXggZGF0YSxcbiAgICogd2Ugd2FudCB0byBrZWVwIHRyYWNrIG9mIHdoaWNoIHZhbHVlIGlzIHRoZSBoaWdoZXN0XG4gICAqIHRvIGNyZWF0ZSB0aGUgY29sb3IgcmFtcCBmb3IgdGhlIGZpbGxzIG9mIHBvbHlnb25zLlxuICAgKiBAcGFyYW0gY291bnRcbiAgICovXG4gIHNldEhpZ2hlc3RDb3VudDogZnVuY3Rpb24oY291bnQpIHtcbiAgICBpZiAoY291bnQgPiB0aGlzLl9oaWdoZXN0Q291bnQpIHtcbiAgICAgIHRoaXMuX2hpZ2hlc3RDb3VudCA9IGNvdW50O1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgaGlnaGVzdCBudW1iZXIgb2YgYWxsIG9mIHRoZSBjb3VudHMgdGhhdCBoYXZlIGNvbWUgaW5cbiAgICogZnJvbSBzZXRIaWdoZXN0Q291bnQuIFRoaXMgaXMgYXNzdW1lZCB0byBiZSBzZXQgdmlhIGFqYXggY2FsbGJhY2tzLlxuICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0SGlnaGVzdENvdW50OiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5faGlnaGVzdENvdW50O1xuICB9LFxuXG4gIHNldExvd2VzdENvdW50OiBmdW5jdGlvbihjb3VudCkge1xuICAgIGlmICghdGhpcy5fbG93ZXN0Q291bnQgfHwgY291bnQgPCB0aGlzLl9sb3dlc3RDb3VudCkge1xuICAgICAgdGhpcy5fbG93ZXN0Q291bnQgPSBjb3VudDtcbiAgICB9XG4gIH0sXG5cbiAgZ2V0TG93ZXN0Q291bnQ6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9sb3dlc3RDb3VudDtcbiAgfSxcblxuICBzZXRDb3VudFJhbmdlOiBmdW5jdGlvbihjb3VudCkge1xuICAgIHRoaXMuc2V0SGlnaGVzdENvdW50KGNvdW50KTtcbiAgICB0aGlzLnNldExvd2VzdENvdW50KGNvdW50KTtcbiAgfSxcblxuICAvL1RoaXMgaXMgdGhlIG9sZCB3YXkuICBJdCB3b3JrcywgYnV0IGlzIHNsb3cgZm9yIG1vdXNlb3ZlciBldmVudHMuICBGaW5lIGZvciBjbGljayBldmVudHMuXG4gIGhhbmRsZUNsaWNrRXZlbnQ6IGZ1bmN0aW9uKGV2dCwgY2IpIHtcbiAgICAvL0NsaWNrIGhhcHBlbmVkIG9uIHRoZSBHcm91cExheWVyIChNYW5hZ2VyKSBhbmQgcGFzc2VkIGl0IGhlcmVcbiAgICB2YXIgdGlsZUlEID0gZXZ0LnRpbGVJRC5zcGxpdChcIjpcIikuc2xpY2UoMSwgMykuam9pbihcIjpcIik7XG4gICAgdmFyIGNhbnZhcyA9IHRoaXMuX3RpbGVzW3RpbGVJRF07XG4gICAgaWYoIWNhbnZhcykgKGNiKGV2dCkpOyAvL2JyZWFrIG91dFxuICAgIHZhciB4ID0gZXZ0LmxheWVyUG9pbnQueCAtIGNhbnZhcy5fbGVhZmxldF9wb3MueDtcbiAgICB2YXIgeSA9IGV2dC5sYXllclBvaW50LnkgLSBjYW52YXMuX2xlYWZsZXRfcG9zLnk7XG5cbiAgICB2YXIgdGlsZVBvaW50ID0ge3g6IHgsIHk6IHl9O1xuICAgIHZhciBmZWF0dXJlcyA9IHRoaXMuX2NhbnZhc0lEVG9GZWF0dXJlc1tldnQudGlsZUlEXS5mZWF0dXJlcztcblxuICAgIHZhciBtaW5EaXN0YW5jZSA9IE51bWJlci5QT1NJVElWRV9JTkZJTklUWTtcbiAgICB2YXIgbmVhcmVzdCA9IG51bGw7XG4gICAgdmFyIGosIHBhdGhzLCBkaXN0YW5jZTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZmVhdHVyZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBmZWF0dXJlID0gZmVhdHVyZXNbaV07XG4gICAgICBzd2l0Y2ggKGZlYXR1cmUudHlwZSkge1xuICAgICAgICBjYXNlIDI6IC8vTGluZVN0cmluZ1xuICAgICAgICAgIHBhdGhzID0gZmVhdHVyZS5nZXRQYXRoc0ZvclRpbGUoZXZ0LnRpbGVJRCk7XG4gICAgICAgICAgZm9yIChqID0gMDsgaiA8IHBhdGhzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICBpZiAoZmVhdHVyZS5zdHlsZSkge1xuICAgICAgICAgICAgICB2YXIgZGlzdGFuY2UgPSB0aGlzLl9nZXREaXN0YW5jZUZyb21MaW5lKHRpbGVQb2ludCwgcGF0aHNbal0pO1xuICAgICAgICAgICAgICB2YXIgdGhpY2tuZXNzID0gKGZlYXR1cmUuc2VsZWN0ZWQgJiYgZmVhdHVyZS5zdHlsZS5zZWxlY3RlZCA/IGZlYXR1cmUuc3R5bGUuc2VsZWN0ZWQuc2l6ZSA6IGZlYXR1cmUuc3R5bGUuc2l6ZSk7XG4gICAgICAgICAgICAgIGlmIChkaXN0YW5jZSA8IHRoaWNrbmVzcyAvIDIgKyB0aGlzLm9wdGlvbnMubGluZUNsaWNrVG9sZXJhbmNlICYmIGRpc3RhbmNlIDwgbWluRGlzdGFuY2UpIHtcbiAgICAgICAgICAgICAgICBuZWFyZXN0ID0gZmVhdHVyZTtcbiAgICAgICAgICAgICAgICBtaW5EaXN0YW5jZSA9IGRpc3RhbmNlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgMzogLy9Qb2x5Z29uXG4gICAgICAgICAgcGF0aHMgPSBmZWF0dXJlLmdldFBhdGhzRm9yVGlsZShldnQudGlsZUlEKTtcbiAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgcGF0aHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9pc1BvaW50SW5Qb2x5KHRpbGVQb2ludCwgcGF0aHNbal0pKSB7XG4gICAgICAgICAgICAgIG5lYXJlc3QgPSBmZWF0dXJlO1xuICAgICAgICAgICAgICBtaW5EaXN0YW5jZSA9IDA7IC8vIHBvaW50IGlzIGluc2lkZSB0aGUgcG9seWdvbiwgc28gZGlzdGFuY2UgaXMgemVyb1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGlmIChtaW5EaXN0YW5jZSA9PSAwKSBicmVhaztcbiAgICB9XG5cbiAgICBpZiAobmVhcmVzdCAmJiBuZWFyZXN0LnRvZ2dsZUVuYWJsZWQpIHtcbiAgICAgICAgbmVhcmVzdC50b2dnbGUoKTtcbiAgICB9XG4gICAgZXZ0LmZlYXR1cmUgPSBuZWFyZXN0O1xuICAgIGNiKGV2dCk7XG4gIH0sXG5cbiAgY2xlYXJUaWxlOiBmdW5jdGlvbihpZCkge1xuICAgIC8vaWQgaXMgdGhlIGVudGlyZSB6b29tOng6eS4gIHdlIGp1c3Qgd2FudCB4OnkuXG4gICAgdmFyIGNhID0gaWQuc3BsaXQoXCI6XCIpO1xuICAgIHZhciBjYW52YXNJZCA9IGNhWzFdICsgXCI6XCIgKyBjYVsyXTtcbiAgICBpZiAodHlwZW9mIHRoaXMuX3RpbGVzW2NhbnZhc0lkXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJ0eXBlb2YgdGhpcy5fdGlsZXNbY2FudmFzSWRdID09PSAndW5kZWZpbmVkJ1wiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIGNhbnZhcyA9IHRoaXMuX3RpbGVzW2NhbnZhc0lkXTtcblxuICAgIHZhciBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgY29udGV4dC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgfSxcblxuICBjbGVhclRpbGVGZWF0dXJlSGFzaDogZnVuY3Rpb24oY2FudmFzSUQpe1xuICAgIHRoaXMuX2NhbnZhc0lEVG9GZWF0dXJlc1tjYW52YXNJRF0gPSB7IGZlYXR1cmVzOiBbXX07IC8vR2V0IHJpZCBvZiBhbGwgc2F2ZWQgZmVhdHVyZXNcbiAgfSxcblxuICBjbGVhckxheWVyRmVhdHVyZUhhc2g6IGZ1bmN0aW9uKCl7XG4gICAgdGhpcy5mZWF0dXJlcyA9IHt9O1xuICB9LFxuXG4gIHJlZHJhd1RpbGU6IGZ1bmN0aW9uKGNhbnZhc0lEKSB7XG4gICAgLy9GaXJzdCwgY2xlYXIgdGhlIGNhbnZhc1xuICAgIHRoaXMuY2xlYXJUaWxlKGNhbnZhc0lEKTtcblxuICAgIC8vIElmIHRoZSBmZWF0dXJlcyBhcmUgbm90IGluIHRoZSB0aWxlLCB0aGVuIHRoZXJlIGlzIG5vdGhpbmcgdG8gcmVkcmF3LlxuICAgIC8vIFRoaXMgbWF5IGhhcHBlbiBpZiB5b3UgY2FsbCByZWRyYXcgYmVmb3JlIGZlYXR1cmVzIGhhdmUgbG9hZGVkIGFuZCBpbml0aWFsbHlcbiAgICAvLyBkcmF3biB0aGUgdGlsZS5cbiAgICB2YXIgZmVhdGZlYXRzID0gdGhpcy5fY2FudmFzSURUb0ZlYXR1cmVzW2NhbnZhc0lEXTtcbiAgICBpZiAoIWZlYXRmZWF0cykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vR2V0IHRoZSBmZWF0dXJlcyBmb3IgdGhpcyB0aWxlLCBhbmQgcmVkcmF3IHRoZW0uXG4gICAgdmFyIGZlYXR1cmVzID0gZmVhdGZlYXRzLmZlYXR1cmVzO1xuXG4gICAgLy8gd2Ugd2FudCB0byBza2lwIGRyYXdpbmcgdGhlIHNlbGVjdGVkIGZlYXR1cmVzIGFuZCBkcmF3IHRoZW0gbGFzdFxuICAgIHZhciBzZWxlY3RlZEZlYXR1cmVzID0gW107XG5cbiAgICAvLyBkcmF3aW5nIGFsbCBvZiB0aGUgbm9uLXNlbGVjdGVkIGZlYXR1cmVzXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBmZWF0dXJlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGZlYXR1cmUgPSBmZWF0dXJlc1tpXTtcbiAgICAgIGlmIChmZWF0dXJlLnNlbGVjdGVkKSB7XG4gICAgICAgIHNlbGVjdGVkRmVhdHVyZXMucHVzaChmZWF0dXJlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZlYXR1cmUuZHJhdyhjYW52YXNJRCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gZHJhd2luZyB0aGUgc2VsZWN0ZWQgZmVhdHVyZXMgbGFzdFxuICAgIGZvciAodmFyIGogPSAwLCBsZW4yID0gc2VsZWN0ZWRGZWF0dXJlcy5sZW5ndGg7IGogPCBsZW4yOyBqKyspIHtcbiAgICAgIHZhciBzZWxGZWF0ID0gc2VsZWN0ZWRGZWF0dXJlc1tqXTtcbiAgICAgIHNlbEZlYXQuZHJhdyhjYW52YXNJRCk7XG4gICAgfVxuICB9LFxuXG4gIF9yZXNldENhbnZhc0lEVG9GZWF0dXJlczogZnVuY3Rpb24oY2FudmFzSUQsIGNhbnZhcykge1xuXG4gICAgdGhpcy5fY2FudmFzSURUb0ZlYXR1cmVzW2NhbnZhc0lEXSA9IHt9O1xuICAgIHRoaXMuX2NhbnZhc0lEVG9GZWF0dXJlc1tjYW52YXNJRF0uZmVhdHVyZXMgPSBbXTtcbiAgICB0aGlzLl9jYW52YXNJRFRvRmVhdHVyZXNbY2FudmFzSURdLmNhbnZhcyA9IGNhbnZhcztcblxuICB9LFxuXG4gIGxpbmtlZExheWVyOiBmdW5jdGlvbigpIHtcbiAgICBpZih0aGlzLm12dFNvdXJjZS5sYXllckxpbmspIHtcbiAgICAgIHZhciBsaW5rTmFtZSA9IHRoaXMubXZ0U291cmNlLmxheWVyTGluayh0aGlzLm5hbWUpO1xuICAgICAgcmV0dXJuIHRoaXMubXZ0U291cmNlLmxheWVyc1tsaW5rTmFtZV07XG4gICAgfVxuICAgIGVsc2V7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH0sXG5cbiAgZmVhdHVyZVdpdGhMYWJlbEFkZGVkOiBmdW5jdGlvbihmZWF0dXJlKSB7XG4gICAgdGhpcy5mZWF0dXJlc1dpdGhMYWJlbHMucHVzaChmZWF0dXJlKTtcbiAgfVxuXG59KTtcblxuXG5mdW5jdGlvbiByZW1vdmVMYWJlbHMoc2VsZikge1xuICB2YXIgZmVhdHVyZXMgPSBzZWxmLmZlYXR1cmVzV2l0aExhYmVscztcbiAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGZlYXR1cmVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgdmFyIGZlYXQgPSBmZWF0dXJlc1tpXTtcbiAgICBmZWF0LnJlbW92ZUxhYmVsKCk7XG4gIH1cbiAgc2VsZi5mZWF0dXJlc1dpdGhMYWJlbHMgPSBbXTtcbn1cblxuXG4vKipcbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vYXJpeWEvcGhhbnRvbWpzL2Jsb2IvbWFzdGVyL2V4YW1wbGVzL3dhaXRmb3IuanNcbiAqXG4gKiBXYWl0IHVudGlsIHRoZSB0ZXN0IGNvbmRpdGlvbiBpcyB0cnVlIG9yIGEgdGltZW91dCBvY2N1cnMuIFVzZWZ1bCBmb3Igd2FpdGluZ1xuICogb24gYSBzZXJ2ZXIgcmVzcG9uc2Ugb3IgZm9yIGEgdWkgY2hhbmdlIChmYWRlSW4sIGV0Yy4pIHRvIG9jY3VyLlxuICpcbiAqIEBwYXJhbSB0ZXN0RnggamF2YXNjcmlwdCBjb25kaXRpb24gdGhhdCBldmFsdWF0ZXMgdG8gYSBib29sZWFuLFxuICogaXQgY2FuIGJlIHBhc3NlZCBpbiBhcyBhIHN0cmluZyAoZS5nLjogXCIxID09IDFcIiBvciBcIiQoJyNiYXInKS5pcygnOnZpc2libGUnKVwiIG9yXG4gKiBhcyBhIGNhbGxiYWNrIGZ1bmN0aW9uLlxuICogQHBhcmFtIG9uUmVhZHkgd2hhdCB0byBkbyB3aGVuIHRlc3RGeCBjb25kaXRpb24gaXMgZnVsZmlsbGVkLFxuICogaXQgY2FuIGJlIHBhc3NlZCBpbiBhcyBhIHN0cmluZyAoZS5nLjogXCIxID09IDFcIiBvciBcIiQoJyNiYXInKS5pcygnOnZpc2libGUnKVwiIG9yXG4gKiBhcyBhIGNhbGxiYWNrIGZ1bmN0aW9uLlxuICogQHBhcmFtIHRpbWVPdXRNaWxsaXMgdGhlIG1heCBhbW91bnQgb2YgdGltZSB0byB3YWl0LiBJZiBub3Qgc3BlY2lmaWVkLCAzIHNlYyBpcyB1c2VkLlxuICovXG5mdW5jdGlvbiB3YWl0Rm9yKHRlc3RGeCwgb25SZWFkeSwgdGltZU91dE1pbGxpcykge1xuICB2YXIgbWF4dGltZU91dE1pbGxpcyA9IHRpbWVPdXRNaWxsaXMgPyB0aW1lT3V0TWlsbGlzIDogMzAwMCwgLy88IERlZmF1bHQgTWF4IFRpbW91dCBpcyAzc1xuICAgIHN0YXJ0ID0gbmV3IERhdGUoKS5nZXRUaW1lKCksXG4gICAgY29uZGl0aW9uID0gKHR5cGVvZiAodGVzdEZ4KSA9PT0gXCJzdHJpbmdcIiA/IGV2YWwodGVzdEZ4KSA6IHRlc3RGeCgpKSwgLy88IGRlZmVuc2l2ZSBjb2RlXG4gICAgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoKG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gc3RhcnQgPCBtYXh0aW1lT3V0TWlsbGlzKSAmJiAhY29uZGl0aW9uKSB7XG4gICAgICAgIC8vIElmIG5vdCB0aW1lLW91dCB5ZXQgYW5kIGNvbmRpdGlvbiBub3QgeWV0IGZ1bGZpbGxlZFxuICAgICAgICBjb25kaXRpb24gPSAodHlwZW9mICh0ZXN0RngpID09PSBcInN0cmluZ1wiID8gZXZhbCh0ZXN0RngpIDogdGVzdEZ4KCkpOyAvLzwgZGVmZW5zaXZlIGNvZGVcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICghY29uZGl0aW9uKSB7XG4gICAgICAgICAgLy8gSWYgY29uZGl0aW9uIHN0aWxsIG5vdCBmdWxmaWxsZWQgKHRpbWVvdXQgYnV0IGNvbmRpdGlvbiBpcyAnZmFsc2UnKVxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiJ3dhaXRGb3IoKScgdGltZW91dFwiKTtcbiAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTsgLy88IFN0b3AgdGhpcyBpbnRlcnZhbFxuICAgICAgICAgIHR5cGVvZiAob25SZWFkeSkgPT09IFwic3RyaW5nXCIgPyBldmFsKG9uUmVhZHkpIDogb25SZWFkeSgndGltZW91dCcpOyAvLzwgRG8gd2hhdCBpdCdzIHN1cHBvc2VkIHRvIGRvIG9uY2UgdGhlIGNvbmRpdGlvbiBpcyBmdWxmaWxsZWRcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBDb25kaXRpb24gZnVsZmlsbGVkICh0aW1lb3V0IGFuZC9vciBjb25kaXRpb24gaXMgJ3RydWUnKVxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiJ3dhaXRGb3IoKScgZmluaXNoZWQgaW4gXCIgKyAobmV3IERhdGUoKS5nZXRUaW1lKCkgLSBzdGFydCkgKyBcIm1zLlwiKTtcbiAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTsgLy88IFN0b3AgdGhpcyBpbnRlcnZhbFxuICAgICAgICAgIHR5cGVvZiAob25SZWFkeSkgPT09IFwic3RyaW5nXCIgPyBldmFsKG9uUmVhZHkpIDogb25SZWFkeSgnc3VjY2VzcycpOyAvLzwgRG8gd2hhdCBpdCdzIHN1cHBvc2VkIHRvIGRvIG9uY2UgdGhlIGNvbmRpdGlvbiBpcyBmdWxmaWxsZWRcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIDUwKTsgLy88IHJlcGVhdCBjaGVjayBldmVyeSA1MG1zXG59O1xuIiwidmFyIFZlY3RvclRpbGUgPSByZXF1aXJlKCd2ZWN0b3ItdGlsZScpLlZlY3RvclRpbGU7XG52YXIgUHJvdG9idWYgPSByZXF1aXJlKCdwYmYnKTtcbnZhciBQb2ludCA9IHJlcXVpcmUoJ3BvaW50LWdlb21ldHJ5Jyk7XG52YXIgVXRpbCA9IHJlcXVpcmUoJy4vTVZUVXRpbCcpO1xudmFyIE1WVExheWVyID0gcmVxdWlyZSgnLi9NVlRMYXllcicpO1xuXG5cbm1vZHVsZS5leHBvcnRzID0gTC5UaWxlTGF5ZXIuTVZUU291cmNlID0gTC5UaWxlTGF5ZXIuQ2FudmFzLmV4dGVuZCh7XG5cbiAgb3B0aW9uczoge1xuICAgIGRlYnVnOiBmYWxzZSxcbiAgICB1cmw6IFwiXCIsIC8vVVJMIFRPIFZlY3RvciBUaWxlIFNvdXJjZSxcbiAgICBnZXRJREZvckxheWVyRmVhdHVyZTogZnVuY3Rpb24oKSB7fSxcbiAgICB0aWxlU2l6ZTogMjU2LFxuICAgIHZpc2libGVMYXllcnM6IFtdXG4gIH0sXG4gIGxheWVyczoge30sIC8vS2VlcCBhIGxpc3Qgb2YgdGhlIGxheWVycyBjb250YWluZWQgaW4gdGhlIFBCRnNcbiAgcHJvY2Vzc2VkVGlsZXM6IHt9LCAvL0tlZXAgYSBsaXN0IG9mIHRpbGVzIHRoYXQgaGF2ZSBiZWVuIHByb2Nlc3NlZCBhbHJlYWR5XG4gIF9ldmVudEhhbmRsZXJzOiB7fSxcbiAgX3RyaWdnZXJPblRpbGVzTG9hZGVkRXZlbnQ6IHRydWUsIC8vd2hldGhlciBvciBub3QgdG8gZmlyZSB0aGUgb25UaWxlc0xvYWRlZCBldmVudCB3aGVuIGFsbCBvZiB0aGUgdGlsZXMgZmluaXNoIGxvYWRpbmcuXG5cbiAgc3R5bGU6IGZ1bmN0aW9uKGZlYXR1cmUpIHtcbiAgICB2YXIgc3R5bGUgPSB7fTtcblxuICAgIHZhciB0eXBlID0gZmVhdHVyZS50eXBlO1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSAxOiAvLydQb2ludCdcbiAgICAgICAgc3R5bGUuY29sb3IgPSAncmdiYSg0OSw3OSw3OSwxKSc7XG4gICAgICAgIHN0eWxlLnJhZGl1cyA9IDU7XG4gICAgICAgIHN0eWxlLnNlbGVjdGVkID0ge1xuICAgICAgICAgIGNvbG9yOiAncmdiYSgyNTUsMjU1LDAsMC41KScsXG4gICAgICAgICAgcmFkaXVzOiA2XG4gICAgICAgIH07XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAyOiAvLydMaW5lU3RyaW5nJ1xuICAgICAgICBzdHlsZS5jb2xvciA9ICdyZ2JhKDE2MSwyMTcsMTU1LDAuOCknO1xuICAgICAgICBzdHlsZS5zaXplID0gMztcbiAgICAgICAgc3R5bGUuc2VsZWN0ZWQgPSB7XG4gICAgICAgICAgY29sb3I6ICdyZ2JhKDI1NSwyNSwwLDAuNSknLFxuICAgICAgICAgIHNpemU6IDRcbiAgICAgICAgfTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDM6IC8vJ1BvbHlnb24nXG4gICAgICAgIHN0eWxlLmNvbG9yID0gJ3JnYmEoNDksNzksNzksMSknO1xuICAgICAgICBzdHlsZS5vdXRsaW5lID0ge1xuICAgICAgICAgIGNvbG9yOiAncmdiYSgxNjEsMjE3LDE1NSwwLjgpJyxcbiAgICAgICAgICBzaXplOiAxXG4gICAgICAgIH07XG4gICAgICAgIHN0eWxlLnNlbGVjdGVkID0ge1xuICAgICAgICAgIGNvbG9yOiAncmdiYSgyNTUsMTQwLDAsMC4zKScsXG4gICAgICAgICAgb3V0bGluZToge1xuICAgICAgICAgICAgY29sb3I6ICdyZ2JhKDI1NSwxNDAsMCwxKScsXG4gICAgICAgICAgICBzaXplOiAyXG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgcmV0dXJuIHN0eWxlO1xuICB9LFxuXG5cbiAgaW5pdGlhbGl6ZTogZnVuY3Rpb24ob3B0aW9ucykge1xuICAgIEwuVXRpbC5zZXRPcHRpb25zKHRoaXMsIG9wdGlvbnMpO1xuXG4gICAgLy9hIGxpc3Qgb2YgdGhlIGxheWVycyBjb250YWluZWQgaW4gdGhlIFBCRnNcbiAgICB0aGlzLmxheWVycyA9IHt9O1xuXG4gICAgLy8gdGlsZXMgY3VycmVudGx5IGluIHRoZSB2aWV3cG9ydFxuICAgIHRoaXMuYWN0aXZlVGlsZXMgPSB7fTtcblxuICAgIC8vIHRoYXRzIHRoYXQgaGF2ZSBiZWVuIGxvYWRlZCBhbmQgZHJhd25cbiAgICB0aGlzLmxvYWRlZFRpbGVzID0ge307XG5cbiAgICAvKipcbiAgICAgKiBGb3Igc29tZSByZWFzb24sIExlYWZsZXQgaGFzIHNvbWUgY29kZSB0aGF0IHJlc2V0cyB0aGVcbiAgICAgKiB6IGluZGV4IGluIHRoZSBvcHRpb25zIG9iamVjdC4gSSdtIGhhdmluZyB0cm91YmxlIHRyYWNraW5nXG4gICAgICogZG93biBleGFjdGx5IHdoYXQgZG9lcyB0aGlzIGFuZCB3aHksIHNvIGZvciBub3csIHdlIHNob3VsZFxuICAgICAqIGp1c3QgY29weSB0aGUgdmFsdWUgdG8gdGhpcy56SW5kZXggc28gd2UgY2FuIGhhdmUgdGhlIHJpZ2h0XG4gICAgICogbnVtYmVyIHdoZW4gd2UgbWFrZSB0aGUgc3Vic2VxdWVudCBNVlRMYXllcnMuXG4gICAgICovXG4gICAgdGhpcy56SW5kZXggPSBvcHRpb25zLnpJbmRleDtcblxuICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5zdHlsZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhpcy5zdHlsZSA9IG9wdGlvbnMuc3R5bGU7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBvcHRpb25zLmFqYXhTb3VyY2UgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRoaXMuYWpheFNvdXJjZSA9IG9wdGlvbnMuYWpheFNvdXJjZTtcbiAgICB9XG5cbiAgICB0aGlzLmxheWVyTGluayA9IG9wdGlvbnMubGF5ZXJMaW5rO1xuXG4gICAgdGhpcy5fZXZlbnRIYW5kbGVycyA9IHt9O1xuXG4gICAgdGhpcy5fdGlsZXNUb1Byb2Nlc3MgPSAwOyAvL3N0b3JlIHRoZSBtYXggbnVtYmVyIG9mIHRpbGVzIHRvIGJlIGxvYWRlZC4gIExhdGVyLCB3ZSBjYW4gdXNlIHRoaXMgY291bnQgdG8gY291bnQgZG93biBQQkYgbG9hZGluZy5cbiAgfSxcblxuICByZWRyYXc6IGZ1bmN0aW9uKHRyaWdnZXJPblRpbGVzTG9hZGVkRXZlbnQpe1xuICAgIC8vT25seSBzZXQgdG8gZmFsc2UgaWYgaXQgYWN0dWFsbHkgaXMgcGFzc2VkIGluIGFzICdmYWxzZSdcbiAgICBpZiAodHJpZ2dlck9uVGlsZXNMb2FkZWRFdmVudCA9PT0gZmFsc2UpIHtcbiAgICAgIHRoaXMuX3RyaWdnZXJPblRpbGVzTG9hZGVkRXZlbnQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBMLlRpbGVMYXllci5DYW52YXMucHJvdG90eXBlLnJlZHJhdy5jYWxsKHRoaXMpO1xuICB9LFxuXG4gIG9uQWRkOiBmdW5jdGlvbihtYXApIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgc2VsZi5tYXAgPSBtYXA7XG4gICAgTC5UaWxlTGF5ZXIuQ2FudmFzLnByb3RvdHlwZS5vbkFkZC5jYWxsKHRoaXMsIG1hcCk7XG5cbiAgICB2YXIgbWFwT25DbGlja0NhbGxiYWNrID0gZnVuY3Rpb24oZSkge1xuICAgICAgc2VsZi5fb25DbGljayhlKTtcbiAgICB9O1xuXG4gICAgbWFwLm9uKCdjbGljaycsIG1hcE9uQ2xpY2tDYWxsYmFjayk7XG5cbiAgICBtYXAub24oXCJsYXllcnJlbW92ZVwiLCBmdW5jdGlvbihlKSB7XG4gICAgICAvLyBjaGVjayB0byBzZWUgaWYgdGhlIGxheWVyIHJlbW92ZWQgaXMgdGhpcyBvbmVcbiAgICAgIC8vIGNhbGwgYSBtZXRob2QgdG8gcmVtb3ZlIHRoZSBjaGlsZCBsYXllcnMgKHRoZSBvbmVzIHRoYXQgYWN0dWFsbHkgaGF2ZSBzb21ldGhpbmcgZHJhd24gb24gdGhlbSkuXG4gICAgICBpZiAoZS5sYXllci5fbGVhZmxldF9pZCA9PT0gc2VsZi5fbGVhZmxldF9pZCAmJiBlLmxheWVyLnJlbW92ZUNoaWxkTGF5ZXJzKSB7XG4gICAgICAgIGUubGF5ZXIucmVtb3ZlQ2hpbGRMYXllcnMobWFwKTtcbiAgICAgICAgbWFwLm9mZignY2xpY2snLCBtYXBPbkNsaWNrQ2FsbGJhY2spO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgc2VsZi5hZGRDaGlsZExheWVycyhtYXApO1xuXG4gICAgaWYgKHR5cGVvZiBEeW5hbWljTGFiZWwgPT09ICdmdW5jdGlvbicgKSB7XG4gICAgICB0aGlzLmR5bmFtaWNMYWJlbCA9IG5ldyBEeW5hbWljTGFiZWwobWFwLCB0aGlzLCB7fSk7XG4gICAgfVxuXG4gIH0sXG5cbiAgZHJhd1RpbGU6IGZ1bmN0aW9uKGNhbnZhcywgdGlsZVBvaW50LCB6b29tKSB7XG4gICAgdmFyIGN0eCA9IHtcbiAgICAgIGlkOiBbem9vbSwgdGlsZVBvaW50LngsIHRpbGVQb2ludC55XS5qb2luKFwiOlwiKSxcbiAgICAgIGNhbnZhczogY2FudmFzLFxuICAgICAgdGlsZTogdGlsZVBvaW50LFxuICAgICAgem9vbTogem9vbSxcbiAgICAgIHRpbGVTaXplOiB0aGlzLm9wdGlvbnMudGlsZVNpemVcbiAgICB9O1xuXG4gICAgLy9DYXB0dXJlIHRoZSBtYXggbnVtYmVyIG9mIHRoZSB0aWxlcyB0byBsb2FkIGhlcmUuIHRoaXMuX3RpbGVzVG9Qcm9jZXNzIGlzIGFuIGludGVybmFsIG51bWJlciB3ZSB1c2UgdG8ga25vdyB3aGVuIHdlJ3ZlIGZpbmlzaGVkIHJlcXVlc3RpbmcgUEJGcy5cbiAgICBpZih0aGlzLl90aWxlc1RvUHJvY2VzcyA8IHRoaXMuX3RpbGVzVG9Mb2FkKSB0aGlzLl90aWxlc1RvUHJvY2VzcyA9IHRoaXMuX3RpbGVzVG9Mb2FkO1xuXG4gICAgdmFyIGlkID0gY3R4LmlkID0gVXRpbC5nZXRDb250ZXh0SUQoY3R4KTtcbiAgICB0aGlzLmFjdGl2ZVRpbGVzW2lkXSA9IGN0eDtcblxuICAgIGlmKCF0aGlzLnByb2Nlc3NlZFRpbGVzW2N0eC56b29tXSkgdGhpcy5wcm9jZXNzZWRUaWxlc1tjdHguem9vbV0gPSB7fTtcblxuICAgIGlmICh0aGlzLm9wdGlvbnMuZGVidWcpIHtcbiAgICAgIHRoaXMuX2RyYXdEZWJ1Z0luZm8oY3R4KTtcbiAgICB9XG4gICAgdGhpcy5fZHJhdyhjdHgpO1xuICB9LFxuXG4gIHNldE9wYWNpdHk6ZnVuY3Rpb24ob3BhY2l0eSkge1xuICAgIHRoaXMuX3NldFZpc2libGVMYXllcnNTdHlsZSgnb3BhY2l0eScsb3BhY2l0eSk7XG4gIH0sXG5cbiAgc2V0WkluZGV4OmZ1bmN0aW9uKHpJbmRleCkge1xuICAgIHRoaXMuX3NldFZpc2libGVMYXllcnNTdHlsZSgnekluZGV4Jyx6SW5kZXgpO1xuICB9LFxuXG4gIF9zZXRWaXNpYmxlTGF5ZXJzU3R5bGU6ZnVuY3Rpb24oc3R5bGUsIHZhbHVlKSB7XG4gICAgZm9yKHZhciBrZXkgaW4gdGhpcy5sYXllcnMpIHtcbiAgICAgIHRoaXMubGF5ZXJzW2tleV0uX3RpbGVDb250YWluZXIuc3R5bGVbc3R5bGVdID0gdmFsdWU7XG4gICAgfVxuICB9LFxuXG4gIF9kcmF3RGVidWdJbmZvOiBmdW5jdGlvbihjdHgpIHtcbiAgICB2YXIgbWF4ID0gdGhpcy5vcHRpb25zLnRpbGVTaXplO1xuICAgIHZhciBnID0gY3R4LmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIGcuc3Ryb2tlU3R5bGUgPSAnIzAwMDAwMCc7XG4gICAgZy5maWxsU3R5bGUgPSAnI0ZGRkYwMCc7XG4gICAgZy5zdHJva2VSZWN0KDAsIDAsIG1heCwgbWF4KTtcbiAgICBnLmZvbnQgPSBcIjEycHggQXJpYWxcIjtcbiAgICBnLmZpbGxSZWN0KDAsIDAsIDUsIDUpO1xuICAgIGcuZmlsbFJlY3QoMCwgbWF4IC0gNSwgNSwgNSk7XG4gICAgZy5maWxsUmVjdChtYXggLSA1LCAwLCA1LCA1KTtcbiAgICBnLmZpbGxSZWN0KG1heCAtIDUsIG1heCAtIDUsIDUsIDUpO1xuICAgIGcuZmlsbFJlY3QobWF4IC8gMiAtIDUsIG1heCAvIDIgLSA1LCAxMCwgMTApO1xuICAgIGcuc3Ryb2tlVGV4dChjdHguem9vbSArICcgJyArIGN0eC50aWxlLnggKyAnICcgKyBjdHgudGlsZS55LCBtYXggLyAyIC0gMzAsIG1heCAvIDIgLSAxMCk7XG4gIH0sXG5cbiAgX2RyYXc6IGZ1bmN0aW9uKGN0eCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuLy8gICAgLy9UaGlzIHdvcmtzIHRvIHNraXAgZmV0Y2hpbmcgYW5kIHByb2Nlc3NpbmcgdGlsZXMgaWYgdGhleSd2ZSBhbHJlYWR5IGJlZW4gcHJvY2Vzc2VkLlxuLy8gICAgdmFyIHZlY3RvclRpbGUgPSBsb2FkZWRUaWxlc1tjdHguaWRdO1xuLy8gICAgLy9pZiB3ZSd2ZSBhbHJlYWR5IHBhcnNlZCBpdCwgZG9uJ3QgZ2V0IGl0IGFnYWluLlxuLy8gICAgaWYodmVjdG9yVGlsZSl7XG4vLyAgICAgIGNvbnNvbGUubG9nKFwiU2tpcHBpbmcgZmV0Y2hpbmcgXCIgKyBjdHguaWQpO1xuLy8gICAgICBzZWxmLmNoZWNrVmVjdG9yVGlsZUxheWVycyhwYXJzZVZUKHZlY3RvclRpbGUpLCBjdHgsIHRydWUpO1xuLy8gICAgICBzZWxmLnJlZHVjZVRpbGVzVG9Qcm9jZXNzQ291bnQoKTtcbi8vICAgICAgcmV0dXJuO1xuLy8gICAgfVxuXG4gICAgdmFyIGZ1bGxTdGFydCA9IG5ldyBEYXRlKCk7XG5cbiAgICBpZiAoIXRoaXMub3B0aW9ucy51cmwpIHJldHVybjtcbiAgICB2YXIgdXJsID0gc2VsZi5vcHRpb25zLnVybC5yZXBsYWNlKFwie3p9XCIsIGN0eC56b29tKS5yZXBsYWNlKFwie3h9XCIsIGN0eC50aWxlLngpLnJlcGxhY2UoXCJ7eX1cIiwgY3R4LnRpbGUueSk7XG5cbiAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgeGhyLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKHhoci5zdGF0dXMgPT0gXCIyMDBcIikge1xuXG4gICAgICAgIGlmKCF4aHIucmVzcG9uc2UpIHJldHVybjtcblxuICAgICAgICB2YXIgYXJyYXlCdWZmZXIgPSBuZXcgVWludDhBcnJheSh4aHIucmVzcG9uc2UpO1xuICAgICAgICB2YXIgYnVmID0gbmV3IFByb3RvYnVmKGFycmF5QnVmZmVyKTtcbiAgICAgICAgdmFyIHZ0ID0gbmV3IFZlY3RvclRpbGUoYnVmKTtcbiAgICAgICAgLy9DaGVjayB0aGUgY3VycmVudCBtYXAgbGF5ZXIgem9vbS4gIElmIGZhc3Qgem9vbWluZyBpcyBvY2N1cnJpbmcsIHRoZW4gc2hvcnQgY2lyY3VpdCB0aWxlcyB0aGF0IGFyZSBmb3IgYSBkaWZmZXJlbnQgem9vbSBsZXZlbCB0aGFuIHdlJ3JlIGN1cnJlbnRseSBvbi5cbiAgICAgICAgaWYoc2VsZi5tYXAgJiYgc2VsZi5tYXAuZ2V0Wm9vbSgpICE9IGN0eC56b29tKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJGZXRjaGVkIHRpbGUgZm9yIHpvb20gbGV2ZWwgXCIgKyBjdHguem9vbSArIFwiLiBNYXAgaXMgYXQgem9vbSBsZXZlbCBcIiArIHNlbGYuX21hcC5nZXRab29tKCkpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBzZWxmLmNoZWNrVmVjdG9yVGlsZUxheWVycyhwYXJzZVZUKHZ0KSwgY3R4KTtcbiAgICAgICAgdGlsZUxvYWRlZChzZWxmLCBjdHgpO1xuICAgICAgfVxuXG4gICAgICB2YXIgbXNEaWZmID0gbmV3IERhdGUoKS5nZXRUaW1lKCkgLSBuZXcgRGF0ZShmdWxsU3RhcnQpLmdldFRpbWUoKTsgLy9EaWZmZXJlbmNlIGluIG1zXG4gICAgICAvL2NvbnNvbGUubG9nKFwiVGltZXIgLSBcIiArIGN0eC56b29tICsgXCIvXCIgKyBjdHgudGlsZS54ICsgXCIvXCIgKyBjdHgudGlsZS55ICsgXCI6IFwiICsgbXNEaWZmKTtcblxuICAgICAgLy9laXRoZXIgd2F5LCByZWR1Y2UgdGhlIGNvdW50IG9mIHRpbGVzVG9Qcm9jZXNzIHRpbGVzIGhlcmVcbiAgICAgIHNlbGYucmVkdWNlVGlsZXNUb1Byb2Nlc3NDb3VudCgpO1xuICAgIH07XG5cbiAgICB4aHIub25lcnJvciA9IGZ1bmN0aW9uKCkge1xuICAgICAgY29uc29sZS5sb2coXCJ4aHIgZXJyb3I6IFwiICsgeGhyLnN0YXR1cylcbiAgICB9O1xuXG4gICAgeGhyLm9wZW4oJ0dFVCcsIHVybCwgdHJ1ZSk7IC8vYXN5bmMgaXMgdHJ1ZVxuICAgIHhoci5yZXNwb25zZVR5cGUgPSAnYXJyYXlidWZmZXInO1xuICAgIHhoci5zZW5kKCk7XG4gIH0sXG5cbiAgcmVkdWNlVGlsZXNUb1Byb2Nlc3NDb3VudDogZnVuY3Rpb24oKXtcbiAgICB0aGlzLl90aWxlc1RvUHJvY2Vzcy0tO1xuICAgIGlmKCF0aGlzLl90aWxlc1RvUHJvY2Vzcyl7XG4gICAgICAvL1RyaWdnZXIgZXZlbnQgbGV0dGluZyB1cyBrbm93IHRoYXQgYWxsIFBCRnMgaGF2ZSBiZWVuIGxvYWRlZCBhbmQgcHJvY2Vzc2VkIChvciA0MDQnZCkuXG4gICAgICBpZih0aGlzLl9ldmVudEhhbmRsZXJzW1wiUEJGTG9hZFwiXSkgdGhpcy5fZXZlbnRIYW5kbGVyc1tcIlBCRkxvYWRcIl0oKTtcbiAgICAgIHRoaXMuX3BiZkxvYWRlZCgpO1xuICAgIH1cbiAgfSxcblxuICBjaGVja1ZlY3RvclRpbGVMYXllcnM6IGZ1bmN0aW9uKHZ0LCBjdHgsIHBhcnNlZCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIC8vQ2hlY2sgaWYgdGhlcmUgYXJlIHNwZWNpZmllZCB2aXNpYmxlIGxheWVyc1xuICAgIGlmKHNlbGYub3B0aW9ucy52aXNpYmxlTGF5ZXJzICYmIHNlbGYub3B0aW9ucy52aXNpYmxlTGF5ZXJzLmxlbmd0aCA+IDApe1xuICAgICAgLy9vbmx5IGxldCB0aHJ1IHRoZSBsYXllcnMgbGlzdGVkIGluIHRoZSB2aXNpYmxlTGF5ZXJzIGFycmF5XG4gICAgICBmb3IodmFyIGk9MDsgaSA8IHNlbGYub3B0aW9ucy52aXNpYmxlTGF5ZXJzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgdmFyIGxheWVyTmFtZSA9IHNlbGYub3B0aW9ucy52aXNpYmxlTGF5ZXJzW2ldO1xuICAgICAgICBpZih2dC5sYXllcnNbbGF5ZXJOYW1lXSl7XG4gICAgICAgICAgIC8vUHJvY2VlZCB3aXRoIHBhcnNpbmdcbiAgICAgICAgICBzZWxmLnByZXBhcmVNVlRMYXllcnModnQubGF5ZXJzW2xheWVyTmFtZV0sIGxheWVyTmFtZSwgY3R4LCBwYXJzZWQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfWVsc2V7XG4gICAgICAvL1BhcnNlIGFsbCB2dC5sYXllcnNcbiAgICAgIGZvciAodmFyIGtleSBpbiB2dC5sYXllcnMpIHtcbiAgICAgICAgc2VsZi5wcmVwYXJlTVZUTGF5ZXJzKHZ0LmxheWVyc1trZXldLCBrZXksIGN0eCwgcGFyc2VkKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgcHJlcGFyZU1WVExheWVyczogZnVuY3Rpb24obHlyICxrZXksIGN0eCwgcGFyc2VkKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgaWYgKCFzZWxmLmxheWVyc1trZXldKSB7XG4gICAgICAvL0NyZWF0ZSBNVlRMYXllciBvciBNVlRQb2ludExheWVyIGZvciB1c2VyXG4gICAgICBzZWxmLmxheWVyc1trZXldID0gc2VsZi5jcmVhdGVNVlRMYXllcihrZXksIGx5ci5wYXJzZWRGZWF0dXJlc1swXS50eXBlIHx8IG51bGwpO1xuICAgIH1cblxuICAgIGlmIChwYXJzZWQpIHtcbiAgICAgIC8vV2UndmUgYWxyZWFkeSBwYXJzZWQgaXQuICBHbyBnZXQgY2FudmFzIGFuZCBkcmF3LlxuICAgICAgc2VsZi5sYXllcnNba2V5XS5nZXRDYW52YXMoY3R4LCBseXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZWxmLmxheWVyc1trZXldLnBhcnNlVmVjdG9yVGlsZUxheWVyKGx5ciwgY3R4KTtcbiAgICB9XG5cbiAgfSxcblxuICBjcmVhdGVNVlRMYXllcjogZnVuY3Rpb24oa2V5LCB0eXBlKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgdmFyIGdldElERm9yTGF5ZXJGZWF0dXJlO1xuICAgIGlmICh0eXBlb2Ygc2VsZi5vcHRpb25zLmdldElERm9yTGF5ZXJGZWF0dXJlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBnZXRJREZvckxheWVyRmVhdHVyZSA9IHNlbGYub3B0aW9ucy5nZXRJREZvckxheWVyRmVhdHVyZTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2V0SURGb3JMYXllckZlYXR1cmUgPSBVdGlsLmdldElERm9yTGF5ZXJGZWF0dXJlO1xuICAgIH1cblxuICAgIHZhciBvcHRpb25zID0ge1xuICAgICAgZ2V0SURGb3JMYXllckZlYXR1cmU6IGdldElERm9yTGF5ZXJGZWF0dXJlLFxuICAgICAgZmlsdGVyOiBzZWxmLm9wdGlvbnMuZmlsdGVyLFxuICAgICAgbGF5ZXJPcmRlcmluZzogc2VsZi5vcHRpb25zLmxheWVyT3JkZXJpbmcsXG4gICAgICBzdHlsZTogc2VsZi5zdHlsZSxcbiAgICAgIG5hbWU6IGtleSxcbiAgICAgIGFzeW5jaDogdHJ1ZVxuICAgIH07XG5cbiAgICBpZiAoc2VsZi5vcHRpb25zLnpJbmRleCkge1xuICAgICAgb3B0aW9ucy56SW5kZXggPSBzZWxmLnpJbmRleDtcbiAgICB9XG5cbiAgICAvL1Rha2UgdGhlIGxheWVyIGFuZCBjcmVhdGUgYSBuZXcgTVZUTGF5ZXIgb3IgTVZUUG9pbnRMYXllciBpZiBvbmUgZG9lc24ndCBleGlzdC5cbiAgICB2YXIgbGF5ZXIgPSBuZXcgTVZUTGF5ZXIoc2VsZiwgb3B0aW9ucykuYWRkVG8oc2VsZi5tYXApO1xuXG4gICAgcmV0dXJuIGxheWVyO1xuICB9LFxuXG4gIGdldExheWVyczogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMubGF5ZXJzO1xuICB9LFxuXG4gIGhpZGVMYXllcjogZnVuY3Rpb24oaWQpIHtcbiAgICBpZiAodGhpcy5sYXllcnNbaWRdKSB7XG4gICAgICB0aGlzLl9tYXAucmVtb3ZlTGF5ZXIodGhpcy5sYXllcnNbaWRdKTtcbiAgICAgIGlmKHRoaXMub3B0aW9ucy52aXNpYmxlTGF5ZXJzLmluZGV4T2YoXCJpZFwiKSA+IC0xKXtcbiAgICAgICAgdGhpcy52aXNpYmxlTGF5ZXJzLnNwbGljZSh0aGlzLm9wdGlvbnMudmlzaWJsZUxheWVycy5pbmRleE9mKFwiaWRcIiksIDEpO1xuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICBzaG93TGF5ZXI6IGZ1bmN0aW9uKGlkKSB7XG4gICAgaWYgKHRoaXMubGF5ZXJzW2lkXSkge1xuICAgICAgdGhpcy5fbWFwLmFkZExheWVyKHRoaXMubGF5ZXJzW2lkXSk7XG4gICAgICBpZih0aGlzLm9wdGlvbnMudmlzaWJsZUxheWVycy5pbmRleE9mKFwiaWRcIikgPT0gLTEpe1xuICAgICAgICB0aGlzLnZpc2libGVMYXllcnMucHVzaChpZCk7XG4gICAgICB9XG4gICAgfVxuICAgIC8vTWFrZSBzdXJlIG1hbmFnZXIgbGF5ZXIgaXMgYWx3YXlzIGluIGZyb250XG4gICAgdGhpcy5icmluZ1RvRnJvbnQoKTtcbiAgfSxcblxuICByZW1vdmVDaGlsZExheWVyczogZnVuY3Rpb24obWFwKXtcbiAgICAvL1JlbW92ZSBjaGlsZCBsYXllcnMgb2YgdGhpcyBncm91cCBsYXllclxuICAgIGZvciAodmFyIGtleSBpbiB0aGlzLmxheWVycykge1xuICAgICAgdmFyIGxheWVyID0gdGhpcy5sYXllcnNba2V5XTtcbiAgICAgIG1hcC5yZW1vdmVMYXllcihsYXllcik7XG4gICAgfVxuICB9LFxuXG4gIGFkZENoaWxkTGF5ZXJzOiBmdW5jdGlvbihtYXApIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgaWYoc2VsZi5vcHRpb25zLnZpc2libGVMYXllcnMubGVuZ3RoID4gMCl7XG4gICAgICAvL29ubHkgbGV0IHRocnUgdGhlIGxheWVycyBsaXN0ZWQgaW4gdGhlIHZpc2libGVMYXllcnMgYXJyYXlcbiAgICAgIGZvcih2YXIgaT0wOyBpIDwgc2VsZi5vcHRpb25zLnZpc2libGVMYXllcnMubGVuZ3RoOyBpKyspe1xuICAgICAgICB2YXIgbGF5ZXJOYW1lID0gc2VsZi5vcHRpb25zLnZpc2libGVMYXllcnNbaV07XG4gICAgICAgIHZhciBsYXllciA9IHRoaXMubGF5ZXJzW2xheWVyTmFtZV07XG4gICAgICAgIGlmKGxheWVyKXtcbiAgICAgICAgICAvL1Byb2NlZWQgd2l0aCBwYXJzaW5nXG4gICAgICAgICAgbWFwLmFkZExheWVyKGxheWVyKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1lbHNle1xuICAgICAgLy9BZGQgYWxsIGxheWVyc1xuICAgICAgZm9yICh2YXIga2V5IGluIHRoaXMubGF5ZXJzKSB7XG4gICAgICAgIHZhciBsYXllciA9IHRoaXMubGF5ZXJzW2tleV07XG4gICAgICAgIC8vIGxheWVyIGlzIHNldCB0byB2aXNpYmxlIGFuZCBpcyBub3QgYWxyZWFkeSBvbiBtYXBcbiAgICAgICAgaWYgKCFsYXllci5fbWFwKSB7XG4gICAgICAgICAgbWFwLmFkZExheWVyKGxheWVyKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICBiaW5kOiBmdW5jdGlvbihldmVudFR5cGUsIGNhbGxiYWNrKSB7XG4gICAgdGhpcy5fZXZlbnRIYW5kbGVyc1tldmVudFR5cGVdID0gY2FsbGJhY2s7XG4gIH0sXG5cbiAgX29uQ2xpY2s6IGZ1bmN0aW9uKGV2dCkge1xuICAgIC8vSGVyZSwgcGFzcyB0aGUgZXZlbnQgb24gdG8gdGhlIGNoaWxkIE1WVExheWVyIGFuZCBoYXZlIGl0IGRvIHRoZSBoaXQgdGVzdCBhbmQgaGFuZGxlIHRoZSByZXN1bHQuXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHZhciBvbkNsaWNrID0gc2VsZi5vcHRpb25zLm9uQ2xpY2s7XG4gICAgdmFyIGNsaWNrYWJsZUxheWVycyA9IHNlbGYub3B0aW9ucy5jbGlja2FibGVMYXllcnM7XG4gICAgdmFyIGxheWVycyA9IHNlbGYubGF5ZXJzO1xuXG4gICAgZXZ0LnRpbGVJRCA9ICBnZXRUaWxlVVJMKGV2dC5sYXRsbmcubGF0LCBldnQubGF0bG5nLmxuZywgdGhpcy5tYXAuZ2V0Wm9vbSgpKTtcblxuICAgIC8vIFdlIG11c3QgaGF2ZSBhbiBhcnJheSBvZiBjbGlja2FibGUgbGF5ZXJzLCBvdGhlcndpc2UsIHdlIGp1c3QgcGFzc1xuICAgIC8vIHRoZSBldmVudCB0byB0aGUgcHVibGljIG9uQ2xpY2sgY2FsbGJhY2sgaW4gb3B0aW9ucy5cblxuICAgIGlmKCFjbGlja2FibGVMYXllcnMpe1xuICAgICAgY2xpY2thYmxlTGF5ZXJzID0gT2JqZWN0LmtleXMoc2VsZi5sYXllcnMpO1xuICAgIH1cblxuICAgIGlmIChjbGlja2FibGVMYXllcnMgJiYgY2xpY2thYmxlTGF5ZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBjbGlja2FibGVMYXllcnMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgdmFyIGtleSA9IGNsaWNrYWJsZUxheWVyc1tpXTtcbiAgICAgICAgdmFyIGxheWVyID0gbGF5ZXJzW2tleV07XG4gICAgICAgIGlmIChsYXllcikge1xuICAgICAgICAgIGxheWVyLmhhbmRsZUNsaWNrRXZlbnQoZXZ0LCBmdW5jdGlvbihldnQpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb25DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICBvbkNsaWNrKGV2dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHR5cGVvZiBvbkNsaWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIG9uQ2xpY2soZXZ0KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgfSxcblxuICBzZXRGaWx0ZXI6IGZ1bmN0aW9uKGZpbHRlckZ1bmN0aW9uLCBsYXllck5hbWUpIHtcbiAgICAvL3Rha2UgaW4gYSBuZXcgZmlsdGVyIGZ1bmN0aW9uLlxuICAgIC8vUHJvcGFnYXRlIHRvIGNoaWxkIGxheWVycy5cblxuICAgIC8vQWRkIGZpbHRlciB0byBhbGwgY2hpbGQgbGF5ZXJzIGlmIG5vIGxheWVyIGlzIHNwZWNpZmllZC5cbiAgICBmb3IgKHZhciBrZXkgaW4gdGhpcy5sYXllcnMpIHtcbiAgICAgIHZhciBsYXllciA9IHRoaXMubGF5ZXJzW2tleV07XG5cbiAgICAgIGlmIChsYXllck5hbWUpe1xuICAgICAgICBpZihrZXkudG9Mb3dlckNhc2UoKSA9PSBsYXllck5hbWUudG9Mb3dlckNhc2UoKSl7XG4gICAgICAgICAgbGF5ZXIub3B0aW9ucy5maWx0ZXIgPSBmaWx0ZXJGdW5jdGlvbjsgLy9Bc3NpZ24gZmlsdGVyIHRvIGNoaWxkIGxheWVyLCBvbmx5IGlmIG5hbWUgbWF0Y2hlc1xuICAgICAgICAgIC8vQWZ0ZXIgZmlsdGVyIGlzIHNldCwgdGhlIG9sZCBmZWF0dXJlIGhhc2hlcyBhcmUgaW52YWxpZC4gIENsZWFyIHRoZW0gZm9yIG5leHQgZHJhdy5cbiAgICAgICAgICBsYXllci5jbGVhckxheWVyRmVhdHVyZUhhc2goKTtcbiAgICAgICAgICAvL2xheWVyLmNsZWFyVGlsZUZlYXR1cmVIYXNoKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2V7XG4gICAgICAgIGxheWVyLm9wdGlvbnMuZmlsdGVyID0gZmlsdGVyRnVuY3Rpb247IC8vQXNzaWduIGZpbHRlciB0byBjaGlsZCBsYXllclxuICAgICAgICAvL0FmdGVyIGZpbHRlciBpcyBzZXQsIHRoZSBvbGQgZmVhdHVyZSBoYXNoZXMgYXJlIGludmFsaWQuICBDbGVhciB0aGVtIGZvciBuZXh0IGRyYXcuXG4gICAgICAgIGxheWVyLmNsZWFyTGF5ZXJGZWF0dXJlSGFzaCgpO1xuICAgICAgICAvL2xheWVyLmNsZWFyVGlsZUZlYXR1cmVIYXNoKCk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBUYWtlIGluIGEgbmV3IHN0eWxlIGZ1bmN0aW9uIGFuZCBwcm9wb2dhdGUgdG8gY2hpbGQgbGF5ZXJzLlxuICAgKiBJZiB5b3UgZG8gbm90IHNldCBhIGxheWVyIG5hbWUsIGl0IHJlc2V0cyB0aGUgc3R5bGUgZm9yIGFsbCBvZiB0aGUgbGF5ZXJzLlxuICAgKiBAcGFyYW0gc3R5bGVGdW5jdGlvblxuICAgKiBAcGFyYW0gbGF5ZXJOYW1lXG4gICAqL1xuICBzZXRTdHlsZTogZnVuY3Rpb24oc3R5bGVGbiwgbGF5ZXJOYW1lKSB7XG4gICAgZm9yICh2YXIga2V5IGluIHRoaXMubGF5ZXJzKSB7XG4gICAgICB2YXIgbGF5ZXIgPSB0aGlzLmxheWVyc1trZXldO1xuICAgICAgaWYgKGxheWVyTmFtZSkge1xuICAgICAgICBpZihrZXkudG9Mb3dlckNhc2UoKSA9PSBsYXllck5hbWUudG9Mb3dlckNhc2UoKSkge1xuICAgICAgICAgIGxheWVyLnNldFN0eWxlKHN0eWxlRm4pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsYXllci5zZXRTdHlsZShzdHlsZUZuKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgZmVhdHVyZVNlbGVjdGVkOiBmdW5jdGlvbihtdnRGZWF0dXJlKSB7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5tdXRleFRvZ2dsZSkge1xuICAgICAgaWYgKHRoaXMuX3NlbGVjdGVkRmVhdHVyZSkge1xuICAgICAgICB0aGlzLl9zZWxlY3RlZEZlYXR1cmUuZGVzZWxlY3QoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX3NlbGVjdGVkRmVhdHVyZSA9IG12dEZlYXR1cmU7XG4gICAgfVxuICAgIGlmICh0aGlzLm9wdGlvbnMub25TZWxlY3QpIHtcbiAgICAgIHRoaXMub3B0aW9ucy5vblNlbGVjdChtdnRGZWF0dXJlKTtcbiAgICB9XG4gIH0sXG5cbiAgZmVhdHVyZURlc2VsZWN0ZWQ6IGZ1bmN0aW9uKG12dEZlYXR1cmUpIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLm11dGV4VG9nZ2xlICYmIHRoaXMuX3NlbGVjdGVkRmVhdHVyZSkge1xuICAgICAgdGhpcy5fc2VsZWN0ZWRGZWF0dXJlID0gbnVsbDtcbiAgICB9XG4gICAgaWYgKHRoaXMub3B0aW9ucy5vbkRlc2VsZWN0KSB7XG4gICAgICB0aGlzLm9wdGlvbnMub25EZXNlbGVjdChtdnRGZWF0dXJlKTtcbiAgICB9XG4gIH0sXG5cbiAgX3BiZkxvYWRlZDogZnVuY3Rpb24oKSB7XG4gICAgLy9GaXJlcyB3aGVuIGFsbCB0aWxlcyBmcm9tIHRoaXMgbGF5ZXIgaGF2ZSBiZWVuIGxvYWRlZCBhbmQgZHJhd24gKG9yIDQwNCdkKS5cblxuICAgIC8vTWFrZSBzdXJlIG1hbmFnZXIgbGF5ZXIgaXMgYWx3YXlzIGluIGZyb250XG4gICAgdGhpcy5icmluZ1RvRnJvbnQoKTtcblxuICAgIC8vU2VlIGlmIHRoZXJlIGlzIGFuIGV2ZW50IHRvIGV4ZWN1dGVcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdmFyIG9uVGlsZXNMb2FkZWQgPSBzZWxmLm9wdGlvbnMub25UaWxlc0xvYWRlZDtcblxuICAgIGlmIChvblRpbGVzTG9hZGVkICYmIHR5cGVvZiBvblRpbGVzTG9hZGVkID09PSAnZnVuY3Rpb24nICYmIHRoaXMuX3RyaWdnZXJPblRpbGVzTG9hZGVkRXZlbnQgPT09IHRydWUpIHtcbiAgICAgIG9uVGlsZXNMb2FkZWQodGhpcyk7XG4gICAgfVxuICAgIHNlbGYuX3RyaWdnZXJPblRpbGVzTG9hZGVkRXZlbnQgPSB0cnVlOyAvL3Jlc2V0IC0gaWYgcmVkcmF3KCkgaXMgY2FsbGVkIHdpdGggdGhlIG9wdGluYWwgJ2ZhbHNlJyBwYXJhbWV0ZXIgdG8gdGVtcG9yYXJpbHkgZGlzYWJsZSB0aGUgb25UaWxlc0xvYWRlZCBldmVudCBmcm9tIGZpcmluZy4gIFRoaXMgcmVzZXRzIGl0IGJhY2sgdG8gdHJ1ZSBhZnRlciBhIHNpbmdsZSB0aW1lIG9mIGZpcmluZyBhcyAnZmFsc2UnLlxuICB9XG5cbn0pO1xuXG5cbmlmICh0eXBlb2YoTnVtYmVyLnByb3RvdHlwZS50b1JhZCkgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgTnVtYmVyLnByb3RvdHlwZS50b1JhZCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzICogTWF0aC5QSSAvIDE4MDtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRUaWxlVVJMKGxhdCwgbG9uLCB6b29tKSB7XG4gIHZhciB4dGlsZSA9IHBhcnNlSW50KE1hdGguZmxvb3IoIChsb24gKyAxODApIC8gMzYwICogKDE8PHpvb20pICkpO1xuICB2YXIgeXRpbGUgPSBwYXJzZUludChNYXRoLmZsb29yKCAoMSAtIE1hdGgubG9nKE1hdGgudGFuKGxhdC50b1JhZCgpKSArIDEgLyBNYXRoLmNvcyhsYXQudG9SYWQoKSkpIC8gTWF0aC5QSSkgLyAyICogKDE8PHpvb20pICkpO1xuICByZXR1cm4gXCJcIiArIHpvb20gKyBcIjpcIiArIHh0aWxlICsgXCI6XCIgKyB5dGlsZTtcbn1cblxuZnVuY3Rpb24gdGlsZUxvYWRlZChwYmZTb3VyY2UsIGN0eCkge1xuICBwYmZTb3VyY2UubG9hZGVkVGlsZXNbY3R4LmlkXSA9IGN0eDtcbn1cblxuZnVuY3Rpb24gcGFyc2VWVCh2dCl7XG4gIGZvciAodmFyIGtleSBpbiB2dC5sYXllcnMpIHtcbiAgICB2YXIgbHlyID0gdnQubGF5ZXJzW2tleV07XG4gICAgcGFyc2VWVEZlYXR1cmVzKGx5cik7XG4gIH1cbiAgcmV0dXJuIHZ0O1xufVxuXG5mdW5jdGlvbiBwYXJzZVZURmVhdHVyZXModnRsKXtcbiAgdnRsLnBhcnNlZEZlYXR1cmVzID0gW107XG4gIHZhciBmZWF0dXJlcyA9IHZ0bC5fZmVhdHVyZXM7XG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBmZWF0dXJlcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIHZhciB2dGYgPSB2dGwuZmVhdHVyZShpKTtcbiAgICB2dGYuY29vcmRpbmF0ZXMgPSB2dGYubG9hZEdlb21ldHJ5KCk7XG4gICAgdnRsLnBhcnNlZEZlYXR1cmVzLnB1c2godnRmKTtcbiAgfVxuICByZXR1cm4gdnRsO1xufVxuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IE5pY2hvbGFzIEhhbGxhaGFuIDxuaGFsbGFoYW5Ac3BhdGlhbGRldi5jb20+XG4gKiAgICAgICBvbiA4LzE1LzE0LlxuICovXG52YXIgVXRpbCA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cblV0aWwuZ2V0Q29udGV4dElEID0gZnVuY3Rpb24oY3R4KSB7XG4gIHJldHVybiBbY3R4Lnpvb20sIGN0eC50aWxlLngsIGN0eC50aWxlLnldLmpvaW4oXCI6XCIpO1xufTtcblxuLyoqXG4gKiBEZWZhdWx0IGZ1bmN0aW9uIHRoYXQgZ2V0cyB0aGUgaWQgZm9yIGEgbGF5ZXIgZmVhdHVyZS5cbiAqIFNvbWV0aW1lcyB0aGlzIG5lZWRzIHRvIGJlIGRvbmUgaW4gYSBkaWZmZXJlbnQgd2F5IGFuZFxuICogY2FuIGJlIHNwZWNpZmllZCBieSB0aGUgdXNlciBpbiB0aGUgb3B0aW9ucyBmb3IgTC5UaWxlTGF5ZXIuTVZUU291cmNlLlxuICpcbiAqIEBwYXJhbSBmZWF0dXJlXG4gKiBAcmV0dXJucyB7Y3R4LmlkfCp8aWR8c3RyaW5nfGpzdHMuaW5kZXguY2hhaW4uTW9ub3RvbmVDaGFpbi5pZHxudW1iZXJ9XG4gKi9cblV0aWwuZ2V0SURGb3JMYXllckZlYXR1cmUgPSBmdW5jdGlvbihmZWF0dXJlKSB7XG4gIHJldHVybiBmZWF0dXJlLnByb3BlcnRpZXMuaWQ7XG59O1xuXG5VdGlsLmdldEpTT04gPSBmdW5jdGlvbih1cmwsIGNhbGxiYWNrKSB7XG4gIHZhciB4bWxodHRwID0gdHlwZW9mIFhNTEh0dHBSZXF1ZXN0ICE9PSAndW5kZWZpbmVkJyA/IG5ldyBYTUxIdHRwUmVxdWVzdCgpIDogbmV3IEFjdGl2ZVhPYmplY3QoJ01pY3Jvc29mdC5YTUxIVFRQJyk7XG4gIHhtbGh0dHAub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHN0YXR1cyA9IHhtbGh0dHAuc3RhdHVzO1xuICAgIGlmICh4bWxodHRwLnJlYWR5U3RhdGUgPT09IDQgJiYgc3RhdHVzID49IDIwMCAmJiBzdGF0dXMgPCAzMDApIHtcbiAgICAgIHZhciBqc29uID0gSlNPTi5wYXJzZSh4bWxodHRwLnJlc3BvbnNlVGV4dCk7XG4gICAgICBjYWxsYmFjayhudWxsLCBqc29uKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2FsbGJhY2soIHsgZXJyb3I6IHRydWUsIHN0YXR1czogc3RhdHVzIH0gKTtcbiAgICB9XG4gIH07XG4gIHhtbGh0dHAub3BlbihcIkdFVFwiLCB1cmwsIHRydWUpO1xuICB4bWxodHRwLnNlbmQoKTtcbn07XG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgTmljaG9sYXMgSGFsbGFoYW4gPG5oYWxsYWhhbkBzcGF0aWFsZGV2LmNvbT5cbiAqICAgICAgIG9uIDcvMzEvMTQuXG4gKi9cbnZhciBVdGlsID0gcmVxdWlyZSgnLi4vTVZUVXRpbCcpO1xubW9kdWxlLmV4cG9ydHMgPSBTdGF0aWNMYWJlbDtcblxuZnVuY3Rpb24gU3RhdGljTGFiZWwobXZ0RmVhdHVyZSwgY3R4LCBsYXRMbmcsIHN0eWxlKSB7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgdGhpcy5tdnRGZWF0dXJlID0gbXZ0RmVhdHVyZTtcbiAgdGhpcy5tYXAgPSBtdnRGZWF0dXJlLm1hcDtcbiAgdGhpcy56b29tID0gY3R4Lnpvb207XG4gIHRoaXMubGF0TG5nID0gbGF0TG5nO1xuICB0aGlzLnNlbGVjdGVkID0gZmFsc2U7XG5cbiAgaWYgKG12dEZlYXR1cmUubGlua2VkRmVhdHVyZSkge1xuICAgIHZhciBsaW5rZWRGZWF0dXJlID0gbXZ0RmVhdHVyZS5saW5rZWRGZWF0dXJlKCk7XG4gICAgaWYgKGxpbmtlZEZlYXR1cmUgJiYgbGlua2VkRmVhdHVyZS5zZWxlY3RlZCkge1xuICAgICAgc2VsZi5zZWxlY3RlZCA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgaW5pdChzZWxmLCBtdnRGZWF0dXJlLCBjdHgsIGxhdExuZywgc3R5bGUpXG59XG5cbmZ1bmN0aW9uIGluaXQoc2VsZiwgbXZ0RmVhdHVyZSwgY3R4LCBsYXRMbmcsIHN0eWxlKSB7XG4gIHZhciBhamF4RGF0YSA9IG12dEZlYXR1cmUuYWpheERhdGE7XG4gIHZhciBzdHkgPSBzZWxmLnN0eWxlID0gc3R5bGUuc3RhdGljTGFiZWwobXZ0RmVhdHVyZSwgYWpheERhdGEpO1xuICB2YXIgaWNvbiA9IHNlbGYuaWNvbiA9IEwuZGl2SWNvbih7XG4gICAgY2xhc3NOYW1lOiBzdHkuY3NzQ2xhc3MgfHwgJ2xhYmVsLWljb24tdGV4dCcsXG4gICAgaHRtbDogc3R5Lmh0bWwsXG4gICAgaWNvblNpemU6IHN0eS5pY29uU2l6ZSB8fCBbNTAsNTBdXG4gIH0pO1xuXG4gIHNlbGYubWFya2VyID0gTC5tYXJrZXIobGF0TG5nLCB7aWNvbjogaWNvbn0pLmFkZFRvKHNlbGYubWFwKTtcblxuICBpZiAoc2VsZi5zZWxlY3RlZCkge1xuICAgIHNlbGYubWFya2VyLl9pY29uLmNsYXNzTGlzdC5hZGQoc2VsZi5zdHlsZS5jc3NTZWxlY3RlZENsYXNzIHx8ICdsYWJlbC1pY29uLXRleHQtc2VsZWN0ZWQnKTtcbiAgfVxuXG4gIHNlbGYubWFya2VyLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICBzZWxmLnRvZ2dsZSgpO1xuICB9KTtcblxuICBzZWxmLm1hcC5vbignem9vbWVuZCcsIGZ1bmN0aW9uKGUpIHtcbiAgICB2YXIgbmV3Wm9vbSA9IGUudGFyZ2V0LmdldFpvb20oKTtcbiAgICBpZiAoc2VsZi56b29tICE9PSBuZXdab29tKSB7XG4gICAgICBzZWxmLm1hcC5yZW1vdmVMYXllcihzZWxmLm1hcmtlcik7XG4gICAgfVxuICB9KTtcbn1cblxuXG5TdGF0aWNMYWJlbC5wcm90b3R5cGUudG9nZ2xlID0gZnVuY3Rpb24oKSB7XG4gIGlmICh0aGlzLnNlbGVjdGVkKSB7XG4gICAgdGhpcy5kZXNlbGVjdCgpO1xuICB9IGVsc2Uge1xuICAgIHRoaXMuc2VsZWN0KCk7XG4gIH1cbn07XG5cblN0YXRpY0xhYmVsLnByb3RvdHlwZS5zZWxlY3QgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5zZWxlY3RlZCA9IHRydWU7XG4gIHRoaXMubWFya2VyLl9pY29uLmNsYXNzTGlzdC5hZGQodGhpcy5zdHlsZS5jc3NTZWxlY3RlZENsYXNzIHx8ICdsYWJlbC1pY29uLXRleHQtc2VsZWN0ZWQnKTtcbiAgdmFyIGxpbmtlZEZlYXR1cmUgPSB0aGlzLm12dEZlYXR1cmUubGlua2VkRmVhdHVyZSgpO1xuICBpZiAoIWxpbmtlZEZlYXR1cmUuc2VsZWN0ZWQpIGxpbmtlZEZlYXR1cmUuc2VsZWN0KCk7XG59O1xuXG5TdGF0aWNMYWJlbC5wcm90b3R5cGUuZGVzZWxlY3QgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5zZWxlY3RlZCA9IGZhbHNlO1xuICB0aGlzLm1hcmtlci5faWNvbi5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuc3R5bGUuY3NzU2VsZWN0ZWRDbGFzcyB8fCAnbGFiZWwtaWNvbi10ZXh0LXNlbGVjdGVkJyk7XG4gIHZhciBsaW5rZWRGZWF0dXJlID0gdGhpcy5tdnRGZWF0dXJlLmxpbmtlZEZlYXR1cmUoKTtcbiAgaWYgKGxpbmtlZEZlYXR1cmUuc2VsZWN0ZWQpIGxpbmtlZEZlYXR1cmUuZGVzZWxlY3QoKTtcbn07XG5cblN0YXRpY0xhYmVsLnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbigpIHtcbiAgaWYgKCF0aGlzLm1hcCB8fCAhdGhpcy5tYXJrZXIpIHJldHVybjtcbiAgdGhpcy5tYXAucmVtb3ZlTGF5ZXIodGhpcy5tYXJrZXIpO1xufTtcbiIsIi8qKlxuICogQ3JlYXRlZCBieSBOaWNob2xhcyBIYWxsYWhhbiA8bmhhbGxhaGFuQHNwYXRpYWxkZXYuY29tPlxuICogICAgICAgb24gNC83LzE0LlxuICovXG5cbnZhciBmZWF0dXJlbGFiZWwgPSByZXF1aXJlKCcuL2ZlYXR1cmVsYWJlbCcpO1xudmFyIGZlYXR1cmVTZXRzID0gZmVhdHVyZWxhYmVsLmZlYXR1cmVTZXRzO1xudmFyIExhYmVsID0gcmVxdWlyZSgnLi9MYWJlbC5qcycpO1xuXG5cbmZ1bmN0aW9uIEZlYXR1cmVTZXQoKSB7XG4gIHRoaXMuZmVhdHVyZXMgPSBbXTtcbiAgdGhpcy5fcGF0aElkSGFzaCA9IHt9O1xuICBmZWF0dXJlU2V0cy5wdXNoKHRoaXMpO1xuICB0aGlzLnNlbGVjdGVkRmVhdHVyZUxheWVyID0gbnVsbDtcbiAgdGhpcy5zZWxlY3RlZEljb24gPSBudWxsO1xufVxubW9kdWxlLmV4cG9ydHMgPSBGZWF0dXJlU2V0O1xuXG5cbkZlYXR1cmVTZXQucHJvdG90eXBlLmFkZEZlYXR1cmUgPSBmdW5jdGlvbiAoZmVhdHVyZUxheWVyLCBnZW9qc29uTGF5ZXIpIHtcbiAgZmVhdHVyZUxheWVyLmdlb2pzb25MYXllciA9IGdlb2pzb25MYXllcjtcbiAgaWYgKCFmZWF0dXJlTGF5ZXIuX2xlYWZsZXRfaWQpIHtcbiAgICBMLnN0YW1wKGZlYXR1cmVMYXllcik7XG4gIH1cbiAgdGhpcy5mZWF0dXJlcy5wdXNoKGZlYXR1cmVMYXllcik7XG5cbiAgLy8gZmVhdHVyZSBjb25zaXN0cyBvZiBvbmUgcG9seWdvblxuICBpZiAoIWZlYXR1cmVMYXllci5fbGF5ZXJzKSB7XG4gICAgdmFyIGxlYWZsZXRJZCA9IGZlYXR1cmVMYXllci5fbGVhZmxldF9pZDtcbiAgICB0aGlzLl9wYXRoSWRIYXNoW2xlYWZsZXRJZF0gPSBmZWF0dXJlTGF5ZXI7XG4gIH1cblxuICAvLyBmZWF0dXJlIGNvbnNpc3RzIG9mIHNldmVyYWwgcG9seWdvbnNcbiAgZWxzZSB7XG4gICAgZm9yICh2YXIgaWQgaW4gZmVhdHVyZUxheWVyLl9sYXllcnMpIHtcbiAgICAgIHZhciBwYXRoTGF5ZXIgPSBmZWF0dXJlTGF5ZXIuX2xheWVyc1tpZF07XG4gICAgICB2YXIgbGVhZmxldElkID0gcGF0aExheWVyLl9sZWFmbGV0X2lkO1xuICAgICAgdGhpcy5fcGF0aElkSGFzaFtsZWFmbGV0SWRdID0gZmVhdHVyZUxheWVyO1xuICAgIH1cbiAgfVxuXG59O1xuXG5cbkZlYXR1cmVTZXQucHJvdG90eXBlLl9wYXRoVXBkYXRlZCA9IGZ1bmN0aW9uIChsZWFmbGV0SWQpIHtcbiAgdmFyIGZlYXR1cmVMYXllciA9IHRoaXMuX3BhdGhJZEhhc2hbbGVhZmxldElkXTtcbiAgLy8gdGhlIGhhc2ggZG9lc24ndCBhbHdheXMgY2F0Y2ggdGhlIGlkIGlmIHRoZSBncmFwaGljIGhhcyBub3QgeWV0IGJlZW4gcmVuZGVyZWQuXG4gIGlmICghZmVhdHVyZUxheWVyKSB7XG4gICAgdmFyIGZlYXR1cmVzID0gdGhpcy5mZWF0dXJlcztcbiAgICBmb3IgKHZhciBrZXkgaW4gZmVhdHVyZXMpIHtcbiAgICAgIHZhciBmZWF0ID0gdGhpcy5mZWF0dXJlc1trZXldO1xuICAgICAgaWYgKGZlYXQuX2xlYWZsZXRfaWQgPT09IGxlYWZsZXRJZCkge1xuICAgICAgICBmZWF0dXJlTGF5ZXIgPSBmZWF0O1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcGF0aFVwZGF0ZWQoZmVhdHVyZUxheWVyLCB0aGlzKTtcbn07XG5cblxuZnVuY3Rpb24gcGF0aFVwZGF0ZWQoZmVhdHVyZUxheWVyLCBmZWF0dXJlU2V0KSB7XG4gIC8vIElmIHRoZSBpZCBkb2VzbnQgaGFzaCwgbm8gcGF0aCBmb3IgdGhlIGZlYXR1cmVzIGluIG91ciBmZWF0dXJlIHNldCBhcHBseS5cbiAgaWYgKCFmZWF0dXJlTGF5ZXIpIHtcbiAgICAvL2NvbnNvbGUuZXJyb3IoJ3BhdGhVcGRhdGVkIGZlYXR1cmVMYXllciBlbXB0eScpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChmZWF0dXJlTGF5ZXIuX2xheWVycykge1xuXG4gICAgLy8gb25seSBjYWxjdWxhdGUgY2VudGVyIGFmdGVyIGFsbCBvZiB0aGUgcG9seWdvbnMgaGF2ZSBiZWVuIHVwZGF0ZWRcbiAgICBpZiAoIWZlYXR1cmVMYXllci5wYXRoc1VwZGF0ZWQpIGZlYXR1cmVMYXllci5wYXRoc1VwZGF0ZWQgPSAwO1xuICAgICsrZmVhdHVyZUxheWVyLnBhdGhzVXBkYXRlZDtcblxuICAgIGlmIChmZWF0dXJlTGF5ZXIucGF0aHNVcGRhdGVkID09PSBPYmplY3Qua2V5cyhmZWF0dXJlTGF5ZXIuX2xheWVycykubGVuZ3RoKSB7XG4gICAgICB2YXIgbCA9IGZpbmRMYXJnZXN0TGF5ZXIoZmVhdHVyZUxheWVyLl9sYXllcnMpO1xuXG4gICAgICBpZiAobCkge1xuICAgICAgICBmZWF0dXJlTGF5ZXIubGFiZWxDZW50ZXJQb2ludCA9IGNhbGN1bGF0ZUNlbnRlcihsLl9wYXJ0cyk7XG4gICAgICAgIHVwZGF0ZUxhYmVsKGZlYXR1cmVMYXllciwgZmVhdHVyZVNldCk7XG4gICAgICB9XG5cbiAgICAgIGZlYXR1cmVMYXllci5wYXRoc1VwZGF0ZWQgPSAwO1xuICAgIH1cblxuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIHRoZXJlIGlzIG9ubHkgb25lIHBvbHlnb24sIHNvIGNhbGN1bGF0ZSBjZW50ZXIuIGFsc28gY2hlY2sgdG8gc2VlIGlmIHRoZXJlIGFyZSBwYXJ0c1xuICBpZiAoIGZlYXR1cmVMYXllci5fcGFydHMgJiYgZmVhdHVyZUxheWVyLl9wYXJ0cy5sZW5ndGggKSB7XG4gICAgZmVhdHVyZUxheWVyLmxhYmVsQ2VudGVyUG9pbnQgPSBjYWxjdWxhdGVDZW50ZXIoZmVhdHVyZUxheWVyLl9wYXJ0cyk7XG4gICAgdXBkYXRlTGFiZWwoZmVhdHVyZUxheWVyLCBmZWF0dXJlU2V0KTtcblxuICAgIHJldHVybjtcbiAgfVxuXG59XG5cblxuZnVuY3Rpb24gY3JlYXRlTGFiZWwoZmVhdHVyZUxheWVyLCBmZWF0dXJlU2V0KSB7XG4gIHZhciBwb2ludCA9IGZlYXR1cmVMYXllci5sYWJlbENlbnRlclBvaW50O1xuXG4gIHZhciBwcm9wZXJ0aWVzID0gZmVhdHVyZUxheWVyLmZlYXR1cmUucHJvcGVydGllcztcbiAgdmFyIHRleHQgPSBwcm9wZXJ0aWVzLnRpdGxlIHx8IHByb3BlcnRpZXMubmFtZSB8fCAnTGFiZWwnO1xuICBpZiAocHJvcGVydGllcy5sYWJlbFByb3BlcnR5KSB7XG4gICAgaWYgKHR5cGVvZiBwcm9wZXJ0aWVzLmxhYmVsUHJvcGVydHkgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRleHQgPSBwcm9wZXJ0aWVzLmxhYmVsUHJvcGVydHkocHJvcGVydGllcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRleHQgPSBwcm9wZXJ0aWVzW3Byb3BlcnRpZXMubGFiZWxQcm9wZXJ0eV07XG4gICAgfVxuXG4gIH1cblxuICAvL0RldGVybWluZSBtYXAgaWNvbiBjbGFzc1xuICB2YXIgaWNvbkNsYXNzID0gXCJmZWF0dXJlbGFiZWwtaWNvbi10ZXh0XCI7XG4gIGlmIChwcm9wZXJ0aWVzW1wibWFwLWljb24tY2xhc3NcIl0pIHtcbiAgICAgIGlmICh0eXBlb2YgcHJvcGVydGllc1tcIm1hcC1pY29uLWNsYXNzXCJdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgaWNvbkNsYXNzID0gcHJvcGVydGllc1tcIm1hcC1pY29uLWNsYXNzXCJdKHByb3BlcnRpZXMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpY29uQ2xhc3MgPSBwcm9wZXJ0aWVzW3Byb3BlcnRpZXNbXCJtYXAtaWNvbi1jbGFzc1wiXV07XG4gICAgICB9XG4gIH1cblxuICAvL0RldGVybWluZSBtYXAgaWNvbiBzaXplXG4gIHZhciBpY29uU2l6ZSA9IFszNSwzNV07XG4gIGlmIChwcm9wZXJ0aWVzW1wibWFwLWljb24tc2l6ZVwiXSkge1xuICAgICAgaWYgKHR5cGVvZiBwcm9wZXJ0aWVzW1wibWFwLWljb24tc2l6ZVwiXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIGljb25TaXplID0gcHJvcGVydGllc1tcIm1hcC1pY29uLXNpemVcIl0ocHJvcGVydGllcyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIGljb25TaXplID0gcHJvcGVydGllc1twcm9wZXJ0aWVzW1wibWFwLWljb24tc2l6ZVwiXV07XG4gICAgICB9XG4gIH1cblxuICBjb25zb2xlLmxvZygnTEFCRUw6ICcgKyB0ZXh0ICsgJyAoJyArIHBvaW50LnggKyAnLCAnICsgcG9pbnQueSArICcpICcgKyBwcm9wZXJ0aWVzLm5hbWUpO1xuXG4gIHZhciBpY29uID0gTC5kaXZJY29uKHtcbiAgICBjbGFzc05hbWU6IGljb25DbGFzcyB8fCBcIlwiLCAvL2ljb25DbGFzcyB8fCAoJC5pc051bWVyaWModGV4dCkgPyAnZmVhdHVyZWxhYmVsLWljb24tbnVtYmVyJyA6ICdmZWF0dXJlbGFiZWwtaWNvbi10ZXh0JyksXG4gICAgaWNvblNpemU6IGljb25TaXplLFxuICAgIGh0bWw6IHRleHRcbiAgfSk7XG5cbiAgdmFyIGxhYmVsID0gbmV3IExhYmVsKHBvaW50LCBmZWF0dXJlTGF5ZXIsIHtpY29uOmljb259KTtcblxuICBsYWJlbC5jbGVhckFsbEV2ZW50TGlzdGVuZXJzKCk7XG4gIGZlYXR1cmVMYXllci5jbGVhckFsbEV2ZW50TGlzdGVuZXJzKCk7XG5cbiAgbGFiZWwub24oJ21vdXNlb3ZlcicsIGZ1bmN0aW9uKGUpIHtcbiAgICBtb3VzZW92ZXIodGhpcywgdGhpcy5mZWF0dXJlTGF5ZXIpO1xuICB9KTtcblxuICBmZWF0dXJlTGF5ZXIub24oJ21vdXNlb3ZlcicsIGZ1bmN0aW9uIChlKSB7XG4gICAgbW91c2VvdmVyKHRoaXMubGFiZWwsIHRoaXMpO1xuICB9KTtcblxuICBmdW5jdGlvbiB3aGl0ZW5MYWJlbChsYWJlbCkge1xuICAgIGlmIChsYWJlbC5faWNvbikge1xuICAgICAgLy8gbGFiZWwgaXMgdGV4dCBvbmx5LCBubyBiYWRnZVxuICAgICAgaWYgKGxhYmVsLl9pY29uLmNoaWxkcmVuWzBdLmNsYXNzTmFtZS5pbmRleE9mKCdmZWF0dXJlbGFiZWwtaWNvbi10ZXh0JykgPiAtMSkge1xuICAgICAgICBsYWJlbC5faWNvbi5jaGlsZHJlblswXS5zdHlsZVsnY29sb3InXSA9ICdyZ2JhKDI1NSwyNTUsMjU1LDAuNyknO1xuICAgICAgfVxuICAgICAgLy8gbGFiZWwgaGFzIGEgYmFkZ2VcbiAgICAgIGVsc2Uge1xuICAgICAgICBsYWJlbC5faWNvbi5jaGlsZHJlblswXS5zdHlsZVsnYm94LXNoYWRvdyddID0gJzBweCAwcHggMHB4IDZweCByZ2JhKDI1NSwyNTUsMjU1LDAuNyknO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdvbGRlbkxhYmVsKGxhYmVsKSB7XG4gICAgaWYgKGxhYmVsLl9pY29uKSB7XG4gICAgICAvLyBsYWJlbCBpcyB0ZXh0IG9ubHksIG5vIGJhZGdlXG4gICAgICBpZiAobGFiZWwuX2ljb24uY2hpbGRyZW5bMF0uY2xhc3NOYW1lLmluZGV4T2YoJ2ZlYXR1cmVsYWJlbC1pY29uLXRleHQnKSA+IC0xKSB7XG4gICAgICAgIGxhYmVsLl9pY29uLmNoaWxkcmVuWzBdLnN0eWxlWydjb2xvciddID0gJ3JnYmEoMjM3LDE3OCw0MSwwLjgpJztcbiAgICAgIH1cbiAgICAgIC8vIGxhYmVsIGhhcyBhIGJhZGdlXG4gICAgICBlbHNlIHtcbiAgICAgICAgbGFiZWwuX2ljb24uY2hpbGRyZW5bMF0uc3R5bGVbJ2JveC1zaGFkb3cnXSA9ICcwcHggMHB4IDBweCA2cHggcmdiYSgyMzcsMTc4LDQxLDAuOCknO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlZGRlbkxhYmVsKGxhYmVsKSB7XG4gICAgaWYgKGxhYmVsLl9pY29uKSB7XG4gICAgICAvLyBsYWJlbCBpcyB0ZXh0IG9ubHksIG5vIGJhZGdlXG4gICAgICBpZiAobGFiZWwuX2ljb24uY2hpbGRyZW5bMF0uY2xhc3NOYW1lLmluZGV4T2YoJ2ZlYXR1cmVsYWJlbC1pY29uLXRleHQnKSA+IC0xKSB7XG4gICAgICAgIGxhYmVsLl9pY29uLmNoaWxkcmVuWzBdLnN0eWxlWydjb2xvciddID0gJ3JnYmEoMjM3LDI3LDQ2LDAuNSknO1xuICAgICAgfVxuICAgICAgLy8gbGFiZWwgaGFzIGEgYmFkZ2VcbiAgICAgIGVsc2Uge1xuICAgICAgICBsYWJlbC5faWNvbi5jaGlsZHJlblswXS5zdHlsZVsnYm94LXNoYWRvdyddID0gJzBweCAwcHggMHB4IDZweCByZ2JhKDIzNywyNyw0NiwwLjUpJztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBtb3VzZW92ZXIobGFiZWwsIGZlYXR1cmVMYXllcikge1xuICAgIGlmIChmZWF0dXJlTGF5ZXIgIT09IGZlYXR1cmVTZXQuc2VsZWN0ZWRGZWF0dXJlTGF5ZXIpIHtcblxuICAgICAgZ29sZGVuTGFiZWwobGFiZWwpO1xuXG4gICAgICBmZWF0dXJlTGF5ZXIuc2V0U3R5bGUoe1xuICAgICAgICBjb2xvcjogJyNFREIyMjknICAvLyBnb2xkXG4gICAgICB9KTtcbiAgICAgIGZlYXR1cmVMYXllci5icmluZ1RvRnJvbnQoKTtcbiAgICB9XG4gIH1cblxuICBsYWJlbC5vbignbW91c2VvdXQnLCBmdW5jdGlvbihlKSB7XG4gICAgbW91c2VvdXQodGhpcywgdGhpcy5mZWF0dXJlTGF5ZXIpO1xuICB9KTtcblxuICBmZWF0dXJlTGF5ZXIub24oJ21vdXNlb3V0JywgZnVuY3Rpb24gKGUpIHtcbiAgICBtb3VzZW91dCh0aGlzLmxhYmVsLCB0aGlzKTtcbiAgfSk7XG5cbiAgZnVuY3Rpb24gbW91c2VvdXQobGFiZWwsIGZlYXR1cmVMYXllcikge1xuICAgIGlmIChmZWF0dXJlTGF5ZXIgIT09IGZlYXR1cmVTZXQuc2VsZWN0ZWRGZWF0dXJlTGF5ZXIpIHtcblxuICAgICAgd2hpdGVuTGFiZWwobGFiZWwpO1xuXG4gICAgICBmZWF0dXJlTGF5ZXIuc2V0U3R5bGUoe1xuICAgICAgICBjb2xvcjogcHJvcGVydGllcy5jb2xvciB8fCAnd2hpdGUnXG4gICAgICB9KTtcbiAgICAgIGlmIChmZWF0dXJlU2V0LnNlbGVjdGVkRmVhdHVyZUxheWVyKSB7XG4gICAgICAgIGZlYXR1cmVTZXQuc2VsZWN0ZWRGZWF0dXJlTGF5ZXIuYnJpbmdUb0Zyb250KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmZWF0dXJlTGF5ZXIuYnJpbmdUb0Zyb250KCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbGFiZWwub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICBjbGljayh0aGlzLCB0aGlzLmZlYXR1cmVMYXllcik7XG4gIH0pO1xuXG4gIGZlYXR1cmVMYXllci5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgIGNsaWNrKHRoaXMubGFiZWwsIHRoaXMpO1xuICB9KTtcblxuICBmdW5jdGlvbiBjbGljayhsYWJlbCwgZmVhdHVyZUxheWVyKSB7XG4gICAgLy8gVFVSTiBPRkZcbiAgICBpZiAoZmVhdHVyZUxheWVyID09PSBmZWF0dXJlU2V0LnNlbGVjdGVkRmVhdHVyZUxheWVyKSB7XG5cbiAgICAgIHdoaXRlbkxhYmVsKGxhYmVsKTtcblxuICAgICAgZmVhdHVyZUxheWVyLnNldFN0eWxlKHtcbiAgICAgICAgY29sb3I6IHByb3BlcnRpZXMuY29sb3IgfHwgJ3doaXRlJ1xuICAgICAgfSk7XG4gICAgICBmZWF0dXJlTGF5ZXIuYnJpbmdUb0Zyb250KCk7XG4gICAgICBmZWF0dXJlU2V0LnNlbGVjdGVkRmVhdHVyZUxheWVyID0gbnVsbDtcbiAgICAgIGlmIChwcm9wZXJ0aWVzICYmIHByb3BlcnRpZXMub25EZXNlbGVjdCAmJiB0eXBlb2YgcHJvcGVydGllcy5vbkRlc2VsZWN0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHByb3BlcnRpZXMub25EZXNlbGVjdChmZWF0dXJlTGF5ZXIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFRVUk4gT05cbiAgICBlbHNlIHtcbiAgICAgIGlmIChmZWF0dXJlU2V0LnNlbGVjdGVkRmVhdHVyZUxheWVyKSB7XG4gICAgICAgIHdoaXRlbkxhYmVsKHtfaWNvbjogZmVhdHVyZVNldC5zZWxlY3RlZEljb259KTtcbiAgICAgICAgZmVhdHVyZVNldC5zZWxlY3RlZEZlYXR1cmVMYXllci5zZXRTdHlsZSh7XG4gICAgICAgICAgY29sb3I6IHByb3BlcnRpZXMuY29sb3IgfHwgJ3doaXRlJ1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmVkZGVuTGFiZWwobGFiZWwpO1xuXG4gICAgICAvLyByZWQgY3Jvc3MgcmVkICNlZDFiMmVcbiAgICAgIGZlYXR1cmVMYXllci5zZXRTdHlsZSh7XG4gICAgICAgIGNvbG9yOiAnI2Q5NTM0ZicgLy8gcmVkXG4gICAgICB9KTtcbiAgICAgIGZlYXR1cmVMYXllci5icmluZ1RvRnJvbnQoKTtcbiAgICAgIGZlYXR1cmVTZXQuc2VsZWN0ZWRGZWF0dXJlTGF5ZXIgPSBmZWF0dXJlTGF5ZXI7XG4gICAgICBmZWF0dXJlU2V0LnNlbGVjdGVkSWNvbiA9IGxhYmVsLl9pY29uO1xuICAgICAgaWYgKHByb3BlcnRpZXMgJiYgcHJvcGVydGllcy5vblNlbGVjdCAmJiB0eXBlb2YgcHJvcGVydGllcy5vblNlbGVjdCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBwcm9wZXJ0aWVzLm9uU2VsZWN0KGZlYXR1cmVMYXllcik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEZpeGVzIHRoZSBkb3VibGUgbGFiZWwgYnVnLlxuICAgKi9cbiAgZmVhdHVyZUxheWVyLmdlb2pzb25MYXllci5hZGRMYXllcihsYWJlbCk7XG5cbiAgLyoqXG4gICAqIElkZWFsbHkgd2Ugd2FudCB0byBiZSBhZGRpbmcgbGFiZWxzIHRvIHRoZSBhY3R1YWwgbGF5ZXIgdGhleSBhcmUgb25cbiAgICogcmF0aGVyIHRoYW4gdGhlIHBhcmVudCBHZW9KU09OIGxheWVyLlxuICAgKi9cbi8vICAgIGlmICghZmVhdHVyZUxheWVyLmFkZExheWVyKSB7XG4vLyAgICAgIGZlYXR1cmVMYXllci5nZW9qc29uTGF5ZXIuYWRkTGF5ZXIobGFiZWwpO1xuLy8gICAgfSBlbHNlIHtcbi8vICAgICAgZmVhdHVyZUxheWVyLmFkZExheWVyKGxhYmVsKTtcbi8vICAgIH1cblxuICBmZWF0dXJlbGFiZWwubGFiZWxzW2ZlYXR1cmVMYXllci5mZWF0dXJlLnByb3BlcnRpZXMuZ3VpZF0gPSBsYWJlbDtcbn1cblxuXG5mdW5jdGlvbiB1cGRhdGVMYWJlbChmZWF0dXJlTGF5ZXIsIGZlYXR1cmVTZXQpIHtcbiAgaWYgKCAhIGZlYXR1cmVMYXllci5sYWJlbCApIHtcbiAgICBjcmVhdGVMYWJlbChmZWF0dXJlTGF5ZXIsIGZlYXR1cmVTZXQpO1xuICB9IGVsc2Uge1xuICAgIGZlYXR1cmVMYXllci5sYWJlbC51cGRhdGUoZmVhdHVyZUxheWVyLmxhYmVsQ2VudGVyUG9pbnQpO1xuICB9XG59XG5cblxuZnVuY3Rpb24gY2FsY3VsYXRlQ2VudGVyKHBhcnRzKSB7XG5cbiAgdmFyIHBhcnQgPSBmaW5kTGFyZ2VzdFBhcnQocGFydHMpO1xuICB2YXIgY2VudGVyID0gY2VudHJvaWQocGFydCk7XG5cbiAgcmV0dXJuIGNlbnRlci5yb3VuZCgpO1xufVxuXG5cbi8vICBodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0NlbnRyb2lkI0NlbnRyb2lkX29mX3BvbHlnb25cblxuZnVuY3Rpb24gYXJlYShwYXJ0QXJyKSB7XG4gIHZhciBhcmVhID0gMDtcbiAgdmFyIGxlbiA9IHBhcnRBcnIubGVuZ3RoO1xuICBmb3IgKHZhciBpID0gMCwgaiA9IGxlbiAtIDE7IGkgPCBsZW47IGo9aSwgaSsrKSB7XG4gICAgdmFyIHAxID0gcGFydEFycltqXTtcbiAgICB2YXIgcDIgPSBwYXJ0QXJyW2ldO1xuXG4gICAgYXJlYSArPSBwMS54ICogcDIueSAtIHAyLnggKiBwMS55O1xuICB9XG5cbiAgcmV0dXJuIGFyZWEgLyAyO1xufVxuXG4vKlxuICAgIE5IIFRPRE86IFdlIGFyZSBpbmRlZWQgZ2V0dGluZyB0aGUgY2VudHJvaWQsIGJ1dCBpZGVhbGx5IHdlXG4gICAgd2FudCB0byBjaGVjayBpZiB0aGUgY2VudHJvaWQgaXMgYWN0dWFsbHkgd2l0aGluIHRoZSBwb2x5Z29uXG4gICAgZm9yIHRoZSBwb2x5Z29ucyB0aGF0IGJlbmQgbGlrZSBhIGJvb21hcmFuZy4gSWYgaXQgaXMgb3V0c2lkZSxcbiAgICB3ZSBuZWVkIHRvIG51ZGdlIGl0IG92ZXIgdW50aWwgaXQgaXMgaW5zaWRlLi4uXG4gKi9cbmZ1bmN0aW9uIGNlbnRyb2lkKHBhcnRBcnIpIHtcbiAgdmFyIGxlbiA9IHBhcnRBcnIubGVuZ3RoO1xuICB2YXIgeCA9IDA7XG4gIHZhciB5ID0gMDtcbiAgZm9yICh2YXIgaSA9IDAsIGogPSBsZW4gLSAxOyBpIDwgbGVuOyBqPWksIGkrKykge1xuICAgIHZhciBwMSA9IHBhcnRBcnJbal07XG4gICAgdmFyIHAyID0gcGFydEFycltpXTtcbiAgICB2YXIgZiA9IHAxLnggKiBwMi55IC0gcDIueCAqIHAxLnk7XG4gICAgeCArPSAocDEueCArIHAyLngpICogZjtcbiAgICB5ICs9IChwMS55ICsgcDIueSkgKiBmO1xuICB9XG4gIGYgPSBhcmVhKHBhcnRBcnIpICogNjtcbiAgcmV0dXJuIEwucG9pbnQoeC9mLCB5L2YpO1xuXG59XG5cblxuZnVuY3Rpb24gZmluZExhcmdlc3RMYXllcihsYXllcnMpIHtcbiAgdmFyIGxhcmdlc3RMYXllciA9IG51bGw7XG4gIHZhciBtYXhBcmVhID0gMDtcblxuICBmb3IgKHZhciBpZCBpbiBsYXllcnMpIHtcbiAgICB2YXIgbCA9IGxheWVyc1tpZF07XG4gICAgdmFyIHBhcnRzID0gbC5fcGFydHM7XG4gICAgdmFyIGEgPSAwO1xuICAgIGlmICghcGFydHMpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gcGFydHMubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgICAgIGEgKz0gYXJlYShwYXJ0c1tpXSk7XG4gICAgfVxuICAgIGlmIChhID4gbWF4QXJlYSkge1xuICAgICAgbWF4QXJlYSA9IGE7XG4gICAgICBsYXJnZXN0TGF5ZXIgPSBsO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBsYXJnZXN0TGF5ZXI7XG59XG5cbmZ1bmN0aW9uIGZpbmRMYXJnZXN0UGFydChwYXJ0cykge1xuICB2YXIgbGFyZ2VzdFBhcnQgPSBwYXJ0c1swXTtcbiAgdmFyIG1heEFyZWEgPSAwO1xuXG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBwYXJ0cy5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICAgIHZhciBwID0gcGFydHNbaV07XG4gICAgdmFyIGEgPSBhcmVhKHApO1xuICAgIGlmICggYSA+IG1heEFyZWEgKSB7XG4gICAgICBsYXJnZXN0UGFydCA9IHA7XG4gICAgICBtYXhBcmVhID0gYTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGxhcmdlc3RQYXJ0O1xufVxuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IE5pY2hvbGFzIEhhbGxhaGFuIDxuaGFsbGFoYW5Ac3BhdGlhbGRldi5jb20+XG4gKiAgICAgICBvbiA0LzcvMTQuXG4gKlxuICogICAgICAgQmFzZWQgb24gTC5NYXJrZXIgZnJvbSB2MC43LjJcbiAqL1xuXG5cbm1vZHVsZS5leHBvcnRzID0gTC5MYWJlbCA9IEwuQ2xhc3MuZXh0ZW5kKHtcblxuICBpbmNsdWRlczogTC5NaXhpbi5FdmVudHMsXG5cbiAgb3B0aW9uczoge1xuICAgIGljb246IG5ldyBMLkljb24uRGVmYXVsdCgpLFxuICAgIHRpdGxlOiAnJyxcbiAgICBhbHQ6ICcnLFxuICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICBkcmFnZ2FibGU6IGZhbHNlLFxuICAgIGtleWJvYXJkOiB0cnVlLFxuICAgIHpJbmRleE9mZnNldDogMCxcbiAgICBvcGFjaXR5OiAxLFxuICAgIHJpc2VPbkhvdmVyOiBmYWxzZSxcbiAgICByaXNlT2Zmc2V0OiAyNTBcbiAgfSxcblxuICBpbml0aWFsaXplOiBmdW5jdGlvbiAocG9pbnQsIGZlYXR1cmVMYXllciwgb3B0aW9ucykge1xuICAgIEwuc2V0T3B0aW9ucyh0aGlzLCBvcHRpb25zKTtcbi8vICAgIHRoaXMuX2xhdGxuZyA9IEwubGF0TG5nKGxhdGxuZyk7XG4gICAgdGhpcy5fcG9pbnQgPSBwb2ludDtcbiAgICBpZiAoZmVhdHVyZUxheWVyKXtcbiAgICAgIHRoaXMuZmVhdHVyZUxheWVyID0gZmVhdHVyZUxheWVyO1xuICAgICAgZmVhdHVyZUxheWVyLmxhYmVsID0gdGhpcztcbiAgICB9XG4gICAgdGhpcy5pc0xhYmVsID0gdHJ1ZTtcbiAgfSxcblxuICBvbkFkZDogZnVuY3Rpb24gKG1hcCkge1xuICAgIHRoaXMuX21hcCA9IG1hcDtcblxuICAgIG1hcC5vbigndmlld3Jlc2V0JywgdGhpcy51cGRhdGUsIHRoaXMpO1xuXG4gICAgdGhpcy5faW5pdEljb24oKTtcbiAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIHRoaXMuZmlyZSgnYWRkJyk7XG5cbiAgICBpZiAobWFwLm9wdGlvbnMuem9vbUFuaW1hdGlvbiAmJiBtYXAub3B0aW9ucy5tYXJrZXJab29tQW5pbWF0aW9uKSB7XG4gICAgICBtYXAub24oJ3pvb21hbmltJywgdGhpcy5fYW5pbWF0ZVpvb20sIHRoaXMpO1xuICAgIH1cbiAgfSxcblxuICBhZGRUbzogZnVuY3Rpb24gKG1hcCkge1xuICAgIG1hcC5hZGRMYXllcih0aGlzKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfSxcblxuICBvblJlbW92ZTogZnVuY3Rpb24gKG1hcCkge1xuICAgIGlmICh0aGlzLmRyYWdnaW5nKSB7XG4gICAgICB0aGlzLmRyYWdnaW5nLmRpc2FibGUoKTtcbiAgICB9XG5cbiAgICB0aGlzLl9yZW1vdmVJY29uKCk7XG4gICAgdGhpcy5fcmVtb3ZlU2hhZG93KCk7XG5cbiAgICB0aGlzLmZpcmUoJ3JlbW92ZScpO1xuXG4gICAgbWFwLm9mZih7XG4gICAgICAndmlld3Jlc2V0JzogdGhpcy51cGRhdGUsXG4gICAgICAnem9vbWFuaW0nOiB0aGlzLl9hbmltYXRlWm9vbVxuICAgIH0sIHRoaXMpO1xuXG4gICAgdGhpcy5fbWFwID0gbnVsbDtcbiAgfSxcblxuLy8gIGdldExhdExuZzogZnVuY3Rpb24gKCkge1xuLy8gICAgcmV0dXJuIHRoaXMuX2xhdGxuZztcbi8vICB9LFxuLy9cbi8vICBzZXRMYXRMbmc6IGZ1bmN0aW9uIChsYXRsbmcpIHtcbi8vICAgIHRoaXMuX2xhdGxuZyA9IEwubGF0TG5nKGxhdGxuZyk7XG4vL1xuLy8gICAgdGhpcy51cGRhdGUoKTtcbi8vXG4vLyAgICByZXR1cm4gdGhpcy5maXJlKCdtb3ZlJywgeyBsYXRsbmc6IHRoaXMuX2xhdGxuZyB9KTtcbi8vICB9LFxuXG5cblxuICBzZXRaSW5kZXhPZmZzZXQ6IGZ1bmN0aW9uIChvZmZzZXQpIHtcbiAgICB0aGlzLm9wdGlvbnMuekluZGV4T2Zmc2V0ID0gb2Zmc2V0O1xuICAgIHRoaXMudXBkYXRlKCk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfSxcblxuICBzZXRJY29uOiBmdW5jdGlvbiAoaWNvbikge1xuXG4gICAgdGhpcy5vcHRpb25zLmljb24gPSBpY29uO1xuXG4gICAgaWYgKHRoaXMuX21hcCkge1xuICAgICAgdGhpcy5faW5pdEljb24oKTtcbiAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX3BvcHVwKSB7XG4gICAgICB0aGlzLmJpbmRQb3B1cCh0aGlzLl9wb3B1cCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG5cbiAgdXBkYXRlOiBmdW5jdGlvbiAocG9pbnQpIHtcbiAgICBpZiAocG9pbnQpIHtcbiAgICAgIHRoaXMuX3BvaW50ID0gcG9pbnQ7XG4gICAgfVxuICAgIGlmICh0aGlzLl9pY29uKSB7XG4vLyAgICAgIHZhciBwb3MgPSB0aGlzLl9tYXAubGF0TG5nVG9MYXllclBvaW50KHRoaXMuX2xhdGxuZykucm91bmQoKTtcbiAgICAgIHRoaXMuX3NldFBvcyh0aGlzLl9wb2ludCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG5cbiAgX2luaXRJY29uOiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnMsXG4gICAgICBtYXAgPSB0aGlzLl9tYXAsXG4gICAgICBhbmltYXRpb24gPSAobWFwLm9wdGlvbnMuem9vbUFuaW1hdGlvbiAmJiBtYXAub3B0aW9ucy5tYXJrZXJab29tQW5pbWF0aW9uKSxcbiAgICAgIGNsYXNzVG9BZGQgPSBhbmltYXRpb24gPyAnbGVhZmxldC16b29tLWFuaW1hdGVkJyA6ICdsZWFmbGV0LXpvb20taGlkZSc7XG5cbiAgICB2YXIgaWNvbiA9IG9wdGlvbnMuaWNvbi5jcmVhdGVJY29uKHRoaXMuX2ljb24pLFxuICAgICAgYWRkSWNvbiA9IGZhbHNlO1xuXG4gICAgLy8gaWYgd2UncmUgbm90IHJldXNpbmcgdGhlIGljb24sIHJlbW92ZSB0aGUgb2xkIG9uZSBhbmQgaW5pdCBuZXcgb25lXG4gICAgaWYgKGljb24gIT09IHRoaXMuX2ljb24pIHtcbiAgICAgIGlmICh0aGlzLl9pY29uKSB7XG4gICAgICAgIHRoaXMuX3JlbW92ZUljb24oKTtcbiAgICAgIH1cbiAgICAgIGFkZEljb24gPSB0cnVlO1xuXG4gICAgICBpZiAob3B0aW9ucy50aXRsZSkge1xuICAgICAgICBpY29uLnRpdGxlID0gb3B0aW9ucy50aXRsZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG9wdGlvbnMuYWx0KSB7XG4gICAgICAgIGljb24uYWx0ID0gb3B0aW9ucy5hbHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgTC5Eb21VdGlsLmFkZENsYXNzKGljb24sIGNsYXNzVG9BZGQpO1xuXG4gICAgaWYgKG9wdGlvbnMua2V5Ym9hcmQpIHtcbiAgICAgIGljb24udGFiSW5kZXggPSAnMCc7XG4gICAgfVxuXG4gICAgdGhpcy5faWNvbiA9IGljb247XG5cbiAgICB0aGlzLl9pbml0SW50ZXJhY3Rpb24oKTtcblxuICAgIGlmIChvcHRpb25zLnJpc2VPbkhvdmVyKSB7XG4gICAgICBMLkRvbUV2ZW50XG4gICAgICAgIC5vbihpY29uLCAnbW91c2VvdmVyJywgdGhpcy5fYnJpbmdUb0Zyb250LCB0aGlzKVxuICAgICAgICAub24oaWNvbiwgJ21vdXNlb3V0JywgdGhpcy5fcmVzZXRaSW5kZXgsIHRoaXMpO1xuICAgIH1cblxuICAgIHZhciBuZXdTaGFkb3cgPSBvcHRpb25zLmljb24uY3JlYXRlU2hhZG93KHRoaXMuX3NoYWRvdyksXG4gICAgICBhZGRTaGFkb3cgPSBmYWxzZTtcblxuICAgIGlmIChuZXdTaGFkb3cgIT09IHRoaXMuX3NoYWRvdykge1xuICAgICAgdGhpcy5fcmVtb3ZlU2hhZG93KCk7XG4gICAgICBhZGRTaGFkb3cgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChuZXdTaGFkb3cpIHtcbiAgICAgIEwuRG9tVXRpbC5hZGRDbGFzcyhuZXdTaGFkb3csIGNsYXNzVG9BZGQpO1xuICAgIH1cbiAgICB0aGlzLl9zaGFkb3cgPSBuZXdTaGFkb3c7XG5cblxuICAgIGlmIChvcHRpb25zLm9wYWNpdHkgPCAxKSB7XG4gICAgICB0aGlzLl91cGRhdGVPcGFjaXR5KCk7XG4gICAgfVxuXG5cbiAgICB2YXIgcGFuZXMgPSB0aGlzLl9tYXAuX3BhbmVzO1xuXG4gICAgaWYgKGFkZEljb24pIHtcbiAgICAgIHBhbmVzLm1hcmtlclBhbmUuYXBwZW5kQ2hpbGQodGhpcy5faWNvbik7XG4gICAgfVxuXG4gICAgaWYgKG5ld1NoYWRvdyAmJiBhZGRTaGFkb3cpIHtcbiAgICAgIHBhbmVzLnNoYWRvd1BhbmUuYXBwZW5kQ2hpbGQodGhpcy5fc2hhZG93KTtcbiAgICB9XG4gIH0sXG5cbiAgX3JlbW92ZUljb246IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLnJpc2VPbkhvdmVyKSB7XG4gICAgICBMLkRvbUV2ZW50XG4gICAgICAgIC5vZmYodGhpcy5faWNvbiwgJ21vdXNlb3ZlcicsIHRoaXMuX2JyaW5nVG9Gcm9udClcbiAgICAgICAgLm9mZih0aGlzLl9pY29uLCAnbW91c2VvdXQnLCB0aGlzLl9yZXNldFpJbmRleCk7XG4gICAgfVxuXG4gICAgdGhpcy5fbWFwLl9wYW5lcy5tYXJrZXJQYW5lLnJlbW92ZUNoaWxkKHRoaXMuX2ljb24pO1xuXG4gICAgdGhpcy5faWNvbiA9IG51bGw7XG4gIH0sXG5cbiAgX3JlbW92ZVNoYWRvdzogZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLl9zaGFkb3cpIHtcbiAgICAgIHRoaXMuX21hcC5fcGFuZXMuc2hhZG93UGFuZS5yZW1vdmVDaGlsZCh0aGlzLl9zaGFkb3cpO1xuICAgIH1cbiAgICB0aGlzLl9zaGFkb3cgPSBudWxsO1xuICB9LFxuXG4gIF9zZXRQb3M6IGZ1bmN0aW9uIChwb3MpIHtcbiAgICBMLkRvbVV0aWwuc2V0UG9zaXRpb24odGhpcy5faWNvbiwgcG9zKTtcblxuICAgIGlmICh0aGlzLl9zaGFkb3cpIHtcbiAgICAgIEwuRG9tVXRpbC5zZXRQb3NpdGlvbih0aGlzLl9zaGFkb3csIHBvcyk7XG4gICAgfVxuXG4gICAgdGhpcy5fekluZGV4ID0gcG9zLnkgKyB0aGlzLm9wdGlvbnMuekluZGV4T2Zmc2V0O1xuXG4gICAgdGhpcy5fcmVzZXRaSW5kZXgoKTtcbiAgfSxcblxuICBfdXBkYXRlWkluZGV4OiBmdW5jdGlvbiAob2Zmc2V0KSB7XG4gICAgdGhpcy5faWNvbi5zdHlsZS56SW5kZXggPSB0aGlzLl96SW5kZXggKyBvZmZzZXQ7XG4gIH0sXG5cbiAgX2FuaW1hdGVab29tOiBmdW5jdGlvbiAob3B0KSB7XG4vLyAgICB2YXIgcG9zID0gdGhpcy5fbWFwLl9sYXRMbmdUb05ld0xheWVyUG9pbnQodGhpcy5fbGF0bG5nLCBvcHQuem9vbSwgb3B0LmNlbnRlcikucm91bmQoKTtcbi8vXG4vLyAgICB0aGlzLl9zZXRQb3MocG9zKTtcbiAgfSxcblxuICBfaW5pdEludGVyYWN0aW9uOiBmdW5jdGlvbiAoKSB7XG5cbiAgICBpZiAoIXRoaXMub3B0aW9ucy5jbGlja2FibGUpIHsgcmV0dXJuOyB9XG5cbiAgICAvLyBUT0RPIHJlZmFjdG9yIGludG8gc29tZXRoaW5nIHNoYXJlZCB3aXRoIE1hcC9QYXRoL2V0Yy4gdG8gRFJZIGl0IHVwXG5cbiAgICB2YXIgaWNvbiA9IHRoaXMuX2ljb24sXG4gICAgICBldmVudHMgPSBbJ2RibGNsaWNrJywgJ21vdXNlZG93bicsICdtb3VzZW92ZXInLCAnbW91c2VvdXQnLCAnY29udGV4dG1lbnUnXTtcblxuICAgIEwuRG9tVXRpbC5hZGRDbGFzcyhpY29uLCAnbGVhZmxldC1jbGlja2FibGUnKTtcbiAgICBMLkRvbUV2ZW50Lm9uKGljb24sICdjbGljaycsIHRoaXMuX29uTW91c2VDbGljaywgdGhpcyk7XG4gICAgTC5Eb21FdmVudC5vbihpY29uLCAna2V5cHJlc3MnLCB0aGlzLl9vbktleVByZXNzLCB0aGlzKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZXZlbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBMLkRvbUV2ZW50Lm9uKGljb24sIGV2ZW50c1tpXSwgdGhpcy5fZmlyZU1vdXNlRXZlbnQsIHRoaXMpO1xuICAgIH1cblxuICAgIGlmIChMLkhhbmRsZXIuTWFya2VyRHJhZykge1xuICAgICAgdGhpcy5kcmFnZ2luZyA9IG5ldyBMLkhhbmRsZXIuTWFya2VyRHJhZyh0aGlzKTtcblxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5kcmFnZ2FibGUpIHtcbiAgICAgICAgdGhpcy5kcmFnZ2luZy5lbmFibGUoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgX29uTW91c2VDbGljazogZnVuY3Rpb24gKGUpIHtcbiAgICB2YXIgd2FzRHJhZ2dlZCA9IHRoaXMuZHJhZ2dpbmcgJiYgdGhpcy5kcmFnZ2luZy5tb3ZlZCgpO1xuXG4gICAgaWYgKHRoaXMuaGFzRXZlbnRMaXN0ZW5lcnMoZS50eXBlKSB8fCB3YXNEcmFnZ2VkKSB7XG4gICAgICBMLkRvbUV2ZW50LnN0b3BQcm9wYWdhdGlvbihlKTtcbiAgICB9XG5cbiAgICBpZiAod2FzRHJhZ2dlZCkgeyByZXR1cm47IH1cblxuICAgIGlmICgoIXRoaXMuZHJhZ2dpbmcgfHwgIXRoaXMuZHJhZ2dpbmcuX2VuYWJsZWQpICYmIHRoaXMuX21hcC5kcmFnZ2luZyAmJiB0aGlzLl9tYXAuZHJhZ2dpbmcubW92ZWQoKSkgeyByZXR1cm47IH1cblxuICAgIHRoaXMuZmlyZShlLnR5cGUsIHtcbiAgICAgIG9yaWdpbmFsRXZlbnQ6IGUsXG4vLyAgICAgIGxhdGxuZzogdGhpcy5fbGF0bG5nXG4gICAgICBwb2ludDogdGhpcy5fcG9pbnRcbiAgICB9KTtcbiAgfSxcblxuICBfb25LZXlQcmVzczogZnVuY3Rpb24gKGUpIHtcbiAgICBpZiAoZS5rZXlDb2RlID09PSAxMykge1xuICAgICAgdGhpcy5maXJlKCdjbGljaycsIHtcbiAgICAgICAgb3JpZ2luYWxFdmVudDogZSxcbi8vICAgICAgICBsYXRsbmc6IHRoaXMuX2xhdGxuZ1xuICAgICAgICBwb2ludDogdGhpcy5fcG9pbnRcbiAgICAgIH0pO1xuICAgIH1cbiAgfSxcblxuICBfZmlyZU1vdXNlRXZlbnQ6IGZ1bmN0aW9uIChlKSB7XG5cbiAgICB0aGlzLmZpcmUoZS50eXBlLCB7XG4gICAgICBvcmlnaW5hbEV2ZW50OiBlLFxuLy8gICAgICBsYXRsbmc6IHRoaXMuX2xhdGxuZ1xuICAgICAgcG9pbnQ6IHRoaXMuX3BvaW50XG4gICAgfSk7XG5cbiAgICAvLyBUT0RPIHByb3BlciBjdXN0b20gZXZlbnQgcHJvcGFnYXRpb25cbiAgICAvLyB0aGlzIGxpbmUgd2lsbCBhbHdheXMgYmUgY2FsbGVkIGlmIG1hcmtlciBpcyBpbiBhIEZlYXR1cmVHcm91cFxuICAgIGlmIChlLnR5cGUgPT09ICdjb250ZXh0bWVudScgJiYgdGhpcy5oYXNFdmVudExpc3RlbmVycyhlLnR5cGUpKSB7XG4gICAgICBMLkRvbUV2ZW50LnByZXZlbnREZWZhdWx0KGUpO1xuICAgIH1cbiAgICBpZiAoZS50eXBlICE9PSAnbW91c2Vkb3duJykge1xuICAgICAgTC5Eb21FdmVudC5zdG9wUHJvcGFnYXRpb24oZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIEwuRG9tRXZlbnQucHJldmVudERlZmF1bHQoZSk7XG4gICAgfVxuICB9LFxuXG4gIHNldE9wYWNpdHk6IGZ1bmN0aW9uIChvcGFjaXR5KSB7XG4gICAgdGhpcy5vcHRpb25zLm9wYWNpdHkgPSBvcGFjaXR5O1xuICAgIGlmICh0aGlzLl9tYXApIHtcbiAgICAgIHRoaXMuX3VwZGF0ZU9wYWNpdHkoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfSxcblxuICBfdXBkYXRlT3BhY2l0eTogZnVuY3Rpb24gKCkge1xuICAgIEwuRG9tVXRpbC5zZXRPcGFjaXR5KHRoaXMuX2ljb24sIHRoaXMub3B0aW9ucy5vcGFjaXR5KTtcbiAgICBpZiAodGhpcy5fc2hhZG93KSB7XG4gICAgICBMLkRvbVV0aWwuc2V0T3BhY2l0eSh0aGlzLl9zaGFkb3csIHRoaXMub3B0aW9ucy5vcGFjaXR5KTtcbiAgICB9XG4gIH0sXG5cbiAgX2JyaW5nVG9Gcm9udDogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuX3VwZGF0ZVpJbmRleCh0aGlzLm9wdGlvbnMucmlzZU9mZnNldCk7XG4gIH0sXG5cbiAgX3Jlc2V0WkluZGV4OiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5fdXBkYXRlWkluZGV4KDApO1xuICB9XG59KTtcbiIsIi8qKlxuICogQ3JlYXRlZCBieSBOaWNob2xhcyBIYWxsYWhhbiA8bmhhbGxhaGFuQHNwYXRpYWxkZXYuY29tPlxuICogICAgICAgb24gNC83LzE0LlxuICovXG5cbnZhciBmZWF0dXJlU2V0cyA9IFtdO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZmVhdHVyZVNldHM6IGZlYXR1cmVTZXRzLFxuICBwYXRoVXBkYXRlZDogZnVuY3Rpb24obGVhZmxldElkKSB7XG4gICAgZm9yKHZhciBpPSAwLCBsZW49ZmVhdHVyZVNldHMubGVuZ3RoOyBpPGxlbjsgKytpKSB7XG4gICAgICBmZWF0dXJlU2V0c1tpXS5fcGF0aFVwZGF0ZWQobGVhZmxldElkKTtcbiAgICB9XG4gIH0sXG4gIGxhYmVsczoge31cbn07XG5cbnJlcXVpcmUoJy4vbGVhZmxldC1wYXRjaCcpO1xuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IE5pY2hvbGFzIEhhbGxhaGFuIDxuaGFsbGFoYW5Ac3BhdGlhbGRldi5jb20+XG4gKiAgICAgICBvbiA1LzcvMTQuXG4gKlxuICogVGhpcyBpcyBhIHBhdGNoIHRoYXQgb3ZlcnJpZGVzIHRoZSBMLlBvbHlsaW5lIGNsYXNzIGluIExlYWZsZXQgMC43LjJcbiAqXG4gKiBBbGwgdGhpcyBpcyBkb2luZyBpcyBicm9hZGNhc3RpbmcgdGhlIGxlYWZsZXQgaWQgZm9yIHRoZSBwYXRoIHRoYXQgaXMgYmVpbmcgcmVkcmF3bi5cbiAqL1xuXG52YXIgZmVhdHVyZWxhYmVsID0gcmVxdWlyZSgnLi9mZWF0dXJlbGFiZWwnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcblxuICAvKipcbiAgICogTGVhZmxldCBwdXRzIHRvbyBtdWNoIG9mIGEgYnVmZmVyIGFyb3VuZCB0aGUgYXJlYSBpbiB3aGljaCBhIHNoYXBlXG4gICAqIGlzIGNsaXBwZWQsIHRodXMgd2Ugd2VyZSBub3QgZ2V0dGluZyBnb29kIGNlbnRyb2lkcyBmb3Igc2hhcGVzIHRoYXRcbiAgICogd2VyZSBiZWluZyBjbGlwcGVkLiBUaGlzIHJlc29sdmVzIHRoYXQuXG4gICAqL1xuICBMLlBhdGguQ0xJUF9QQURESU5HID0gMC4wMjtcblxuICBMLlBvbHlsaW5lLnByb3RvdHlwZS5fdXBkYXRlUGF0aCA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIXRoaXMuX21hcCkgeyByZXR1cm47IH1cblxuICAgIHRoaXMuX2NsaXBQb2ludHMoKTtcbiAgICB0aGlzLl9zaW1wbGlmeVBvaW50cygpO1xuXG4gICAgTC5QYXRoLnByb3RvdHlwZS5fdXBkYXRlUGF0aC5jYWxsKHRoaXMpO1xuXG4gICAgLyoqXG4gICAgICogTm90aWZpZXMgZmVhdHVyZWxhYmVsIHRoYXQgYSBwYXRoIGZvciBhIHZlY3RvciBoYXMgYmVlbiByZWRyYXduIGFuZCB0aGUgbGFiZWwgc2hvdWxkXG4gICAgICogcG9zaXRpb25lZCBvciByZXBvc2l0aW9uZWQuXG4gICAgICovXG4gICAgZmVhdHVyZWxhYmVsLnBhdGhVcGRhdGVkKHRoaXMuX2xlYWZsZXRfaWQpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBGaXhlcyBhIExlYWZsZXQgYnVnIHdoZXJlIGEgcmVmZXJlbmNlIHRvIHRoaXMuX21hcCBpcyBzb21ldGltZXMgbWlzc2luZy5cbiAgICovXG4gIEwuUGF0aC5wcm90b3R5cGUuYnJpbmdUb0Zyb250ID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICghdGhpcy5fbWFwKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgdmFyIHJvb3QgPSB0aGlzLl9tYXAuX3BhdGhSb290LFxuICAgICAgICBwYXRoID0gdGhpcy5fY29udGFpbmVyO1xuXG4gICAgaWYgKHBhdGggJiYgcm9vdC5sYXN0Q2hpbGQgIT09IHBhdGgpIHtcbiAgICAgIHJvb3QuYXBwZW5kQ2hpbGQocGF0aCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG59KCk7IiwiLyoqXG4gKiBUaGlzIGlzIHRoZSBlbnRyeSBwb2ludCBvZiB0aGUgYXBwbGljYXRpb24uIFdlIGRlY2xhcmUgdGhlIG1haW4gbW9kdWxlIGhlcmUgYW5kIHRoZW4gY29uZmlndXJlIHRoZSBtYWluIHJvdXRlclxuICogdGhhdCBjcmVhdGVzIGNvcnJlc3BvbmRpbmcgdmlld3MuIFRoZSBhcnJheSBwYXJhbWV0ZXIgZm9yIG1vZHVsZSBkZWNsYXJlcyB0aGlzIG1vZHVsZSdzIGRlcGVuZGVuY2llcy5cbiAqL1xudmFyIEdlb0FuZ3VsYXIgPSBhbmd1bGFyLm1vZHVsZSgnR2VvQW5ndWxhcicsIFsnYW5ndWxhckZpbGVVcGxvYWQnLCAnbmdDb29raWVzJywgJ25nUmVzb3VyY2UnLCAnbmdTYW5pdGl6ZScsICduZ1JvdXRlJywgJ3VpLnJvdXRlcicsICduZ0FuaW1hdGUnLCAndWkuYm9vdHN0cmFwJywgJ3VpLnNsaWRlciddKTtcblxuR2VvQW5ndWxhci5ydW4oZnVuY3Rpb24gKCRyb290U2NvcGUsICRzdGF0ZSwgJHN0YXRlUGFyYW1zKSB7XG5cbiAgLy8gSXQncyB2ZXJ5IGhhbmR5IHRvIGFkZCByZWZlcmVuY2VzIHRvICRzdGF0ZSBhbmQgJHN0YXRlUGFyYW1zIHRvIHRoZSAkcm9vdFNjb3BlXG4gIC8vIHNvIHRoYXQgeW91IGNhbiBhY2Nlc3MgdGhlbSBmcm9tIGFueSBzY29wZSB3aXRoaW4geW91ciBhcHBsaWNhdGlvbnMuRm9yIGV4YW1wbGUsXG4gIC8vIDxsaSB1aS1zcmVmLWFjdGl2ZT1cImFjdGl2ZSB9XCI+IHdpbGwgc2V0IHRoZSA8bGk+IC8vIHRvIGFjdGl2ZSB3aGVuZXZlclxuICAvLyAnY29udGFjdHMubGlzdCcgb3Igb25lIG9mIGl0cyBkZWNlbmRlbnRzIGlzIGFjdGl2ZS5cbiAgJHJvb3RTY29wZS4kc3RhdGUgPSAkc3RhdGU7XG4gICRyb290U2NvcGUuJHN0YXRlUGFyYW1zID0gJHN0YXRlUGFyYW1zO1xuXG4gIGRlYnVnLiRzdGF0ZSA9ICRzdGF0ZTtcbiAgZGVidWcuJHN0YXRlUGFyYW1zID0gJHN0YXRlUGFyYW1zO1xuXG4gICRyb290U2NvcGUuaXNTdGF0ZSA9IGZ1bmN0aW9uIChzdGF0ZU5hbWUpIHtcbiAgICByZXR1cm4gJHN0YXRlLiRjdXJyZW50Lm5hbWUgPT09IHN0YXRlTmFtZTtcbiAgfTtcblxuICAkcm9vdFNjb3BlLmlzUGFyYW0gPSBmdW5jdGlvbihwYXJhbU5hbWUpIHtcbiAgICB2YXIgYm9vbCA9ICRzdGF0ZVBhcmFtc1twYXJhbU5hbWVdO1xuICAgIGlmICghYm9vbCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICAkcm9vdFNjb3BlLmlzTm90UGFyYW0gPSBmdW5jdGlvbihwYXJhbU5hbWUpIHtcbiAgICB2YXIgYm9vbCA9ICRzdGF0ZVBhcmFtc1twYXJhbU5hbWVdO1xuICAgIGlmICghYm9vbCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICAkcm9vdFNjb3BlLnRvZ2dsZVBhcmFtID0gZnVuY3Rpb24ocGFyYW1OYW1lKSB7XG4gICAgdmFyIGJvb2wgPSAkc3RhdGVQYXJhbXNbcGFyYW1OYW1lXTtcbiAgICBpZiAoIWJvb2wpIHtcbiAgICAgIC8vIG11dGV4IGxvZ2ljIHRoYXQgbWFrZXMgb25seSAxIHBhbmVsIG9wZW4gYXQgYSB0aW1lXG4gICAgICBmb3IgKHZhciBwYXJhbSBpbiAkc3RhdGVQYXJhbXMpIHtcbiAgICAgICAgaWYgKCRzdGF0ZVBhcmFtc1twYXJhbV0gPT09ICdvcGVuJykge1xuICAgICAgICAgICRzdGF0ZVBhcmFtc1twYXJhbV0gPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAkc3RhdGVQYXJhbXNbcGFyYW1OYW1lXSA9ICdvcGVuJztcbiAgICB9IGVsc2Uge1xuICAgICAgZGVsZXRlICRzdGF0ZVBhcmFtc1twYXJhbU5hbWVdO1xuICAgIH1cbiAgICB2YXIgc3RhdGUgPSAkc3RhdGUuY3VycmVudC5uYW1lIHx8ICdtYWluJztcbiAgICAkc3RhdGUuZ28oc3RhdGUsICRzdGF0ZVBhcmFtcyk7XG4gIH07XG5cbiAgJHJvb3RTY29wZS5zZXRQYXJhbVdpdGhWYWwgPSBmdW5jdGlvbiAocGFyYW1OYW1lLCB2YWwpIHtcbiAgICAkc3RhdGVQYXJhbXNbcGFyYW1OYW1lXSA9IHZhbDtcbiAgICB2YXIgc3RhdGUgPSAkc3RhdGUuY3VycmVudC5uYW1lIHx8ICdtYWluJztcbiAgICAkc3RhdGUuZ28oc3RhdGUsICRzdGF0ZVBhcmFtcyk7XG4gIH07XG4gIGRlYnVnLiRyb290U2NvcGUgPSAkcm9vdFNjb3BlO1xuXG5cbiAgJHJvb3RTY29wZS5vcGVuUGFyYW0gPSBmdW5jdGlvbihwYXJhbU5hbWUpIHtcbiAgICB2YXIgYm9vbCA9ICRzdGF0ZVBhcmFtc1twYXJhbU5hbWVdO1xuICAgIGlmICghYm9vbCkge1xuICAgICAgLy8gbXV0ZXggbG9naWMgdGhhdCBtYWtlcyBvbmx5IDEgcGFuZWwgb3BlbiBhdCBhIHRpbWVcbiAgICAgIGZvciAodmFyIHBhcmFtIGluICRzdGF0ZVBhcmFtcykge1xuICAgICAgICBpZiAoJHN0YXRlUGFyYW1zW3BhcmFtXSA9PT0gJ29wZW4nKSB7XG4gICAgICAgICAgJHN0YXRlUGFyYW1zW3BhcmFtXSA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgICRzdGF0ZVBhcmFtc1twYXJhbU5hbWVdID0gJ29wZW4nO1xuICAgICAgdmFyIHN0YXRlID0gJHN0YXRlLmN1cnJlbnQubmFtZSB8fCAnbWFpbic7XG4gICAgICAkc3RhdGUuZ28oc3RhdGUsICRzdGF0ZVBhcmFtcyk7XG4gICAgfVxuICB9O1xuXG4gICRyb290U2NvcGUuY2xvc2VQYXJhbSA9IGZ1bmN0aW9uKHBhcmFtTmFtZSkge1xuICAgIHZhciBib29sID0gJHN0YXRlUGFyYW1zW3BhcmFtTmFtZV07XG4gICAgaWYgKGJvb2wpIHtcbiAgICAgIGRlbGV0ZSAkc3RhdGVQYXJhbXNbcGFyYW1OYW1lXTtcbiAgICAgIHZhciBzdGF0ZSA9ICRzdGF0ZS5jdXJyZW50Lm5hbWUgfHwgJ21haW4nO1xuICAgICAgJHN0YXRlLmdvKHN0YXRlLCAkc3RhdGVQYXJhbXMpO1xuICAgIH1cbiAgfTtcblxuICAkcm9vdFNjb3BlLmlzTm90U3RhdGUgPSBmdW5jdGlvbiAoc3RhdGVOYW1lKSB7XG4gICAgcmV0dXJuICRzdGF0ZS4kY3VycmVudC5uYW1lICE9PSBzdGF0ZU5hbWU7XG4gIH07XG5cbiAgd2luZG93LiRzdGF0ZSA9ICRzdGF0ZTtcbiAgd2luZG93LiRzdGF0ZVBhcmFtcyA9ICRzdGF0ZVBhcmFtcztcblxufSk7XG5cbkdlb0FuZ3VsYXIuY29uZmlnKGZ1bmN0aW9uICgkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyKSB7XG4gICR1cmxSb3V0ZXJQcm92aWRlclxuICAgIC53aGVuKCcvZGVmYXVsdCcsICcvbWFwQDAuMSwwLjEsMihzYXRlbGxpdGUsZ2FkbTApJylcbiAgICAud2hlbignL3BobCcsICcvbWFwQDExLjc1OTgxNSwxMjEuODkzMzExLDYocmVkY3Jvc3MscGhsKScpXG4gICAgLm90aGVyd2lzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZGVmYXVsdFJvdXRlJykgfHwgJy9tYXBAMCwwLDIoc2F0ZWxsaXRlLGdhZG0wKScpO1xuXG4gICRzdGF0ZVByb3ZpZGVyXG4gICAgLnN0YXRlKCdtYWluJywge1xuICAgICAgdXJsOiAnL21hcEA6bGF0LDpsbmcsOnpvb20oKmxheWVycyk/dGl0bGUmem9vbS1leHRlbnQmc3RvcmllcyZsYXllcnMtcGFuZWwmZmlsdGVycy1wYW5lbCZmaWx0ZXJzJmxlZ2VuZCZiYXNlbWFwcyZpbmZvJnRoZW1lJmRldGFpbHMtcGFuZWwmc2VhcmNoLXBhbmVsJnNmX2lkJmxldmVsJyxcbiAgICAgIHZpZXdzOiB7XG4gICAgICAgICdkZXRhaWxzJzoge1xuICAgICAgICAgIHRlbXBsYXRlOiAnICcsXG4gICAgICAgICAgY29udHJvbGxlcjogJ01haW5DdHJsJ1xuICAgICAgICB9LFxuICAgICAgICAndGhlbWUnOiB7XG4gICAgICAgICAgdGVtcGxhdGVVcmw6ICd2aWV3cy90aGVtZS5odG1sJyxcbiAgICAgICAgICBjb250cm9sbGVyOiAnVGhlbWVDdHJsJ1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgICAuc3RhdGUoJ3VwbG9hZCcsIHtcbiAgICAgIHVybDogJy9tYXBAOmxhdCw6bG5nLDp6b29tKCpsYXllcnMpL3VwbG9hZD90aXRsZSZ6b29tLWV4dGVudCZzdG9yaWVzJmxheWVycy1wYW5lbCZmaWx0ZXJzLXBhbmVsJmZpbHRlcnMmbGVnZW5kJmJhc2VtYXBzJmluZm8mdGhlbWUmZGV0YWlscy1wYW5lbCZzZWFyY2gtcGFuZWwmc2ZfaWQmbGV2ZWwnLFxuICAgICAgdmlld3M6IHtcbiAgICAgICAgJ2RldGFpbHMnOiB7XG4gICAgICAgICAgdGVtcGxhdGU6ICcgJyxcbiAgICAgICAgICBjb250cm9sbGVyOiAnTWFpbkN0cmwnXG4gICAgICAgIH0sXG4gICAgICAgICd1cGxvYWQnOiB7XG4gICAgICAgICAgdGVtcGxhdGVVcmw6ICd2aWV3cy91cGxvYWQuaHRtbCcsXG4gICAgICAgICAgY29udHJvbGxlcjogJ1VwbG9hZEN0cmwnXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICAgIC5zdGF0ZSgnZXhwb3J0Jywge1xuICAgICAgICAgIHVybDogJy9tYXBAOmxhdCw6bG5nLDp6b29tKCpsYXllcnMpL2V4cG9ydD90aXRsZSZ6b29tLWV4dGVudCZzdG9yaWVzJmxheWVycy1wYW5lbCZmaWx0ZXJzLXBhbmVsJmZpbHRlcnMmbGVnZW5kJmJhc2VtYXBzJmluZm8mdGhlbWUmZGV0YWlscy1wYW5lbCZzZWFyY2gtcGFuZWwmc2ZfaWQmbGV2ZWwnLFxuICAgICAgICAgIHZpZXdzOiB7XG4gICAgICAgICAgICAgICdkZXRhaWxzJzoge1xuICAgICAgICAgICAgICAgICAgdGVtcGxhdGU6ICcgJyxcbiAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdNYWluQ3RybCdcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgJ2V4cG9ydCc6IHtcbiAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAndmlld3MvZXhwb3J0Lmh0bWwnLFxuICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ0V4cG9ydEN0cmwnXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgIH0pO1xuXG59KTtcblxuXG5HZW9Bbmd1bGFyLmRpcmVjdGl2ZSgnc2VsZWN0T25DbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHtcbiAgICByZXN0cmljdDogJ0EnLFxuICAgIGxpbms6IGZ1bmN0aW9uIChzY29wZSwgZWxlbWVudCwgYXR0cnMpIHtcbiAgICAgIGVsZW1lbnQub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnNlbGVjdCgpO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xufSk7XG5cblxuYW5ndWxhci5tb2R1bGUoJ0dlb0FuZ3VsYXInKS5kaXJlY3RpdmUoJ215U2hvdycsIGZ1bmN0aW9uKCRhbmltYXRlKSB7XG4gIHJldHVybiB7XG4gICAgc2NvcGU6IHtcbiAgICAgICdteVNob3cnOiAnPScsXG4gICAgICAnYWZ0ZXJTaG93JzogJyYnLFxuICAgICAgJ2FmdGVySGlkZSc6ICcmJ1xuICAgIH0sXG4gICAgbGluazogZnVuY3Rpb24oc2NvcGUsIGVsZW1lbnQpIHtcbiAgICAgIHNjb3BlLiR3YXRjaCgnbXlTaG93JywgZnVuY3Rpb24oc2hvdywgb2xkU2hvdykge1xuICAgICAgICBpZiAoc2hvdykge1xuICAgICAgICAgICRhbmltYXRlLnJlbW92ZUNsYXNzKGVsZW1lbnQsICduZy1oaWRlJywgc2NvcGUuYWZ0ZXJTaG93KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXNob3cpIHtcbiAgICAgICAgICAkYW5pbWF0ZS5hZGRDbGFzcyhlbGVtZW50LCAnbmctaGlkZScsIHNjb3BlLmFmdGVySGlkZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufSk7XG5cblxucmVxdWlyZSgnLi9zZXJ2aWNlcy9MYXllckNvbmZpZycpO1xucmVxdWlyZSgnLi9zZXJ2aWNlcy9TdG9yaWVzQ29uZmlnJyk7XG5yZXF1aXJlKCcuL3NlcnZpY2VzL1ZlY3Rvci9WZWN0b3JQcm92aWRlcicpO1xucmVxdWlyZSgnLi9zZXJ2aWNlcy9Eb251dHMnKTtcbnJlcXVpcmUoJy4vY29udHJvbGxlcnMvbWFpbicpO1xucmVxdWlyZSgnLi9jb250cm9sbGVycy9tYXAnKTtcbnJlcXVpcmUoJy4vY29udHJvbGxlcnMvZGV0YWlscycpO1xucmVxdWlyZSgnLi9jb250cm9sbGVycy9uYXZiYXInKTtcbnJlcXVpcmUoJy4vY29udHJvbGxlcnMvc2lkZS12aWV3Jyk7XG5yZXF1aXJlKCcuL2NvbnRyb2xsZXJzL3N0b3JpZXMnKTtcbnJlcXVpcmUoJy4vY29udHJvbGxlcnMvbGF5ZXJzJyk7XG5yZXF1aXJlKCcuL2NvbnRyb2xsZXJzL2ZpbHRlcnMnKTtcbnJlcXVpcmUoJy4vY29udHJvbGxlcnMvbGVnZW5kJyk7XG5yZXF1aXJlKCcuL2NvbnRyb2xsZXJzL2luZm8nKTtcbnJlcXVpcmUoJy4vY29udHJvbGxlcnMvYmFzZW1hcHMnKTtcbnJlcXVpcmUoJy4vY29udHJvbGxlcnMvYnJlYWRjcnVtYnMnKTtcbnJlcXVpcmUoJy4vY29udHJvbGxlcnMvem9vbS1leHRlbnQnKTtcbnJlcXVpcmUoJy4vY29udHJvbGxlcnMvdGhlbWUnKTtcbnJlcXVpcmUoJy4vY29udHJvbGxlcnMvdXBsb2FkJyk7XG5yZXF1aXJlKCcuL2NvbnRyb2xsZXJzL3NlYXJjaCcpO1xucmVxdWlyZSgnLi9jb250cm9sbGVycy9leHBvcnQnKTtcbnJlcXVpcmUoJy4uL2xpYi9MZWFmbGV0Lk1hcGJveFZlY3RvclRpbGUvc3JjL01WVFNvdXJjZS5qcycpO1xuXG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgUnlhbiBXaGl0bGV5IDxyd2hpdGxleUBzcGF0aWFsZGV2LmNvbT5cbiAqICAgICAgIG9uIDMvMjgvMTQuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnR2VvQW5ndWxhcicpLmNvbnRyb2xsZXIoJ0Jhc2VtYXBzQ3RybCcsIGZ1bmN0aW9uKCRzY29wZSwgJHN0YXRlLCAkc3RhdGVQYXJhbXMsIExheWVyQ29uZmlnKSB7XG4gICRzY29wZS5iYXNlbWFwcyA9IExheWVyQ29uZmlnLmJhc2VtYXBzO1xuXG4gICRzY29wZS5uYW1lID0gZnVuY3Rpb24gKGFsaWFzKSB7XG4gICAgcmV0dXJuIExheWVyQ29uZmlnW2FsaWFzXS5uYW1lIHx8IGFsaWFzO1xuICB9O1xuXG4gICRzY29wZS5nZXRMYXllcnMgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAoISAkc3RhdGVQYXJhbXMgfHwgISRzdGF0ZVBhcmFtcy5sYXllcnMpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgdmFyIGxheWVycyA9ICRzdGF0ZVBhcmFtcy5sYXllcnMuc3BsaXQoJywnKTtcbiAgICByZXR1cm4gbGF5ZXJzO1xuICB9O1xuXG4gICRzY29wZS5jdXJyZW50QmFzZW1hcCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgbGF5ZXJzID0gJHNjb3BlLmdldExheWVycygpO1xuICAgIGlmICghbGF5ZXJzKSByZXR1cm4gbnVsbDtcbiAgICByZXR1cm4gbGF5ZXJzWzBdO1xuICB9O1xuXG4gICRzY29wZS5zd2FwQmFzZW1hcCA9IGZ1bmN0aW9uIChiYXNlbWFwKSB7XG4gICAgdmFyIGxheWVycyA9ICRzY29wZS5nZXRMYXllcnMoKTtcbiAgICBsYXllcnNbMF0gPSBiYXNlbWFwO1xuICAgIGxheWVycyA9IGxheWVycy5qb2luKCcsJyk7XG4gICAgYW5ndWxhci5leHRlbmQoJHN0YXRlUGFyYW1zLCB7XG4gICAgICBsYXllcnM6IGxheWVyc1xuICAgIH0pO1xuICAgICRzdGF0ZS5nbygnbWFpbicsICRzdGF0ZVBhcmFtcyk7XG4gIH07XG5cbiAgJHNjb3BlLmlzQWN0aXZlQmFzZW1hcCA9IGZ1bmN0aW9uKGJhc2VtYXApIHtcbiAgICByZXR1cm4gJHNjb3BlLmN1cnJlbnRCYXNlbWFwKCkgPT09IGJhc2VtYXA7XG4gIH07XG5cbn0pOyIsIi8qKlxuICogQ3JlYXRlZCBieSBSeWFuIFdoaXRsZXkgPHJ3aGl0bGV5QHNwYXRpYWxkZXYuY29tPlxuICogICAgICAgb24gNC8xNy8xNC5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdHZW9Bbmd1bGFyJykuY29udHJvbGxlcignQnJlYWRjcnVtYnNDdHJsJywgZnVuY3Rpb24oJHNjb3BlLCAkcm9vdFNjb3BlLCAkc3RhdGUsICRzdGF0ZVBhcmFtcywgJGh0dHAsIFZlY3RvclByb3ZpZGVyKSB7XG5cbiAgLyoqXG4gICAqIEZpeGVzIENocm9tZSBNYWduaWZ5aW5nIEdsYXNzIElzc3VlICMyMDZcbiAgICovXG4vLyAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbi8vICAgIHZhciB0b29sYmFyID0gJCgnI01hcFVwcGVyUmlnaHRUb29sYmFyV3JhcHBlcicpO1xuLy8gICAgd2hpbGUgKCB0b29sYmFyLmhlaWdodCgpID4gNDAgKSB7XG4vLyAgICAgIHRvb2xiYXIud2lkdGgoIHRvb2xiYXIud2lkdGgoKSArIDEgKTtcbi8vICAgIH1cbi8vICB9LCAxMDAwKTtcblxuXG5cdC8vdmFyIGZ1bGxTdGFja1VSTCA9IGNvbmZpZy5jaHViYnNQYXRoKCdzZXJ2aWNlcy9nZXRBZG1pblN0YWNrP2Zvcm1hdD1qc29uJmFkbWlubGV2ZWw9OmFkbWlubGV2ZWwmc3RhY2tpZD06Z3VpZCZkYXRhc291cmNlPWdhZG0nKTtcblx0dmFyIGZ1bGxTdGFja1VSTCA9IGNvbmZpZy5jaHViYnNQYXRoKCdzZXJ2aWNlcy9jdXN0b20vY3VzdG9tX29wZXJhdGlvbj9uYW1lPUdldEJyZWFkQ3J1bWJzV2l0aFRoZW1lQ291bnRzQnlJRCZmb3JtYXQ9anNvbiZnYWRtX2xldmVsPTphZG1pbmxldmVsJmlkcz06Z3VpZCZkYXRhc291cmNlPWdhZG0mdGhlbWU9cHJvamVjdHMnKTtcblxuXHR2YXIgYnJlYWRDcnVtYkZlYXR1cmVzID0ge307IC8vU3RvcmUgcmVzdWx0cyBvZiB0aGUgc3RhY2sgbG9va3VwIGhlcmUgc28gd2UgY2FuIHJldXNlLlxuXG5cdCRzY29wZS4kb24oJ2NlbnRlci1mZWF0dXJlJywgZnVuY3Rpb24gKGV2ZW50LCBmZWF0T2JqKSB7XG5cblx0XHQvL1NlZSBpZiB0aGUgZmVhdHVyZSBzdGFjayBoYXMgYWxyZWFkeSBiZWVuIHN0b3JlZFxuXHRcdGlmKGJyZWFkQ3J1bWJGZWF0dXJlc1tmZWF0T2JqLmxldmVsXSAmJiBicmVhZENydW1iRmVhdHVyZXNbZmVhdE9iai5sZXZlbF1bZmVhdE9iai5ndWlkXSl7XG5cdFx0XHQvL0FscmVhZHkgaGF2ZSBpdFxuXHRcdFx0dXBkYXRlQnJlYWRDcnVtYnMoYnJlYWRDcnVtYkZlYXR1cmVzW2ZlYXRPYmoubGV2ZWxdW2ZlYXRPYmouZ3VpZF0sIGZlYXRPYmoubGV2ZWwpO1xuXHRcdH1cblx0XHRlbHNle1xuXHRcdFx0Ly9HbyBmZXRjaCBpdFxuXHRcdFx0Ly9Vc2luZyB0aGUgQ2VudGVyIEZlYXR1cmUncyBHVUlELCBmZXRjaCB0aGUgZnVsbCBzdGFjayBkZXRhaWxzLlxuXHRcdFx0dmFyIHVybCA9IGZ1bGxTdGFja1VSTC5yZXBsYWNlKCc6YWRtaW5sZXZlbCcsIGZlYXRPYmoubGV2ZWwpLnJlcGxhY2UoJzpndWlkJywgZmVhdE9iai5ndWlkKTtcblx0XHRcdHZhciBzZWxmID0gdGhpcztcblxuXHRcdFx0Ly8gRmV0Y2ggZnJvbSB0aGUgc2VydmVyIG9ubHkgaWYgd2UgZG9uJ3QgaGF2ZSBpdCBpbiB0aGUgaGFzaFxuXHRcdFx0JGh0dHAuZ2V0KHVybCkuc3VjY2VzcyhmdW5jdGlvbiAocmVzdWx0LCBzdGF0dXMpIHtcblxuXHRcdFx0XHRpZiAoIXJlc3VsdCB8fCByZXN1bHQuZXJyb3IpIHtcblx0XHRcdFx0XHRjb25zb2xlLmVycm9yKCdVbmFibGUgdG8gZmV0Y2ggZmVhdHVyZTogJyArIHJlc3VsdC5lcnJvcik7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0dmFyIHByb3BlcnRpZXMgPSByZXN1bHRbMF07XG5cblx0XHRcdFx0Ly9VcGRhdGVcbiAgICAgICAgICAgICAgICBpZihwcm9wZXJ0aWVzKXtcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlQnJlYWRDcnVtYnMocHJvcGVydGllcywgZmVhdE9iai5sZXZlbCk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy9TdG9yZSBpbiB0aGUgaGFzaC5cbiAgICAgICAgICAgICAgICAgICAgaWYoYnJlYWRDcnVtYkZlYXR1cmVzW2ZlYXRPYmoubGV2ZWxdKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFkQ3J1bWJGZWF0dXJlc1tmZWF0T2JqLmxldmVsXVtwcm9wZXJ0aWVzW1wiZ3VpZFwiICsgZmVhdE9iai5sZXZlbF1dID0gcHJvcGVydGllcztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWRDcnVtYkZlYXR1cmVzW2ZlYXRPYmoubGV2ZWxdID0ge307XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhZENydW1iRmVhdHVyZXNbZmVhdE9iai5sZXZlbF1bcHJvcGVydGllc1tcImd1aWRcIiArIGZlYXRPYmoubGV2ZWxdXSA9IHByb3BlcnRpZXM7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJcIik7XG4gICAgICAgICAgICAgICAgfVxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9KTtcblxuXHRmdW5jdGlvbiB1cGRhdGVCcmVhZENydW1icyhmZWF0T2JqLCBsZXZlbCkge1xuXHRcdC8vVXBkYXRlIFRoZSBCcmVhZGNydW1iIGRpc3BsYXlcblx0XHQvL0NsZWFyIGxvd2VyIGxldmVsIHNjb3BlIGl0ZW1zIGluIGNhc2Ugd2UndmUgem9vbWVkIG91dFxuXHRcdGZvciAodmFyIHggPSBsZXZlbDsgeCA8PSA1OyB4KyspIHtcblx0XHRcdC8vbnVsbCBvdXQgYW55IGxldmVsIHZhbHVlcyB0aGF0IGFyZSBMT1dFUiB0aGFuIHdoYXQgd2UncmUgY3VycmVudGx5IGxvb2tpbmcgYXRcblx0XHRcdCRzY29wZVtcImxldmVsXCIgKyB4XSA9IFwiXCI7XG5cdFx0XHQkc2NvcGVbXCJmZWF0XCIgKyB4XSA9IG51bGw7XG5cblx0XHRcdGlmKHggPT0gLTEpe1xuXHRcdFx0XHQkc2NvcGVbXCJsZXZlbGFyY1wiXSA9IGZlYXRPYmpbXCJuYW1lYXJjXCJdO1xuXHRcdFx0XHQkc2NvcGVbXCJmZWF0YXJjXCJdID0gZmVhdE9iajtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvL3VzaW5nIHRoZSByZXF1ZXN0ZWQgbGV2ZWwsIGRpZyBvdXQgdGhlIHByb3BlcnRpZXMgZm9yIHRoYXQgbGV2ZWwgYW5kIG9uZXMgYWJvdmUgaXRcblx0XHRmb3IgKHZhciBpID0gbGV2ZWw7IGkgPj0gLTE7IGktLSkge1xuXHRcdFx0aWYoaSA9PSAtMSl7XG5cdFx0XHRcdCRzY29wZVtcImxldmVsYXJjXCJdID0gZmVhdE9ialtcIm5hbWVhcmNcIl07XG5cdFx0XHRcdCRzY29wZVtcImZlYXRhcmNcIl0gPSBmZWF0T2JqO1xuXHRcdFx0fVxuXHRcdFx0JHNjb3BlW1wibGV2ZWxcIiArIGldID0gZmVhdE9ialtcIm5hbWVcIiArIGldO1xuXHRcdFx0JHNjb3BlW1wiZmVhdFwiICsgaV0gPSBmZWF0T2JqO1xuXHRcdH1cblx0fVxuXG4gICRzY29wZS56b29tVG9HVUlEID0gZnVuY3Rpb24gKGZlYXRPYmosIGxldmVsKSB7XG4gICAgLy9HaXZlbiBhIEdVSUQsIHpvb20gdG8gdGhlIGZlYXR1cmUuXG5cbiAgICAvL0dyYWIgdGhlIGZlYXR1cmUgZnJvbSB0aGUgVmVjdG9yUHJvdmlkZXIuXG4gICAgVmVjdG9yUHJvdmlkZXIuZmV0Y2hGZWF0dXJlKGZlYXRPYmpbXCJndWlkXCIgKyAobGV2ZWwgPj0gMCA/IGxldmVsIDogXCJhcmNcIildLCBsZXZlbCwgbnVsbCwgZnVuY3Rpb24gKGZlYXQpIHtcbiAgICAgIC8vTWFrZSBhIHRlbXAgZ2VvanNvbiBsYXllciBhbmQgYWRkIHRoZSBnZW9qc29uLlxuICAgICAgLy9UaGVuIGdyYWIgdGhlIGJvdW5kcyBmcm9tIGl0IGFuZCB6b29tIHRvIGl0LlxuXG4gICAgICB2YXIgZ2psID0gTC5nZW9Kc29uKGZlYXQuZ2VvbWV0cnkpO1xuICAgICAgJHNjb3BlLiRwYXJlbnQuem9vbVRvQm91bmRzKGdqbC5nZXRCb3VuZHMoKSk7XG4gICAgfSk7XG4gIH07XG5cbiAgJHNjb3BlLnpvb21Ub1dvcmxkID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBib3VuZHMgPSBMLmxhdExuZ0JvdW5kcyhMLmxhdExuZygtNTAsLTE3OSksIEwubGF0TG5nKDUwLDE3OSkpO1xuICAgICRzY29wZS4kcGFyZW50Lnpvb21Ub0JvdW5kcyhib3VuZHMpO1xuICB9O1xuXG59KTtcbiIsIi8qKlxuICogQ3JlYXRlZCBieSBOaWNob2xhcyBIYWxsYWhhbiA8bmhhbGxhaGFuQHNwYXRpYWxkZXYuY29tPlxuICogICAgICAgb24gNC85LzE0LlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ0dlb0FuZ3VsYXInKS5jb250cm9sbGVyKCdEZXRhaWxzQ3RybCcsIGZ1bmN0aW9uICgkc2NvcGUsICRyb290U2NvcGUsICRzdGF0ZSwgJHN0YXRlUGFyYW1zLCAkaHR0cCwgRG9udXRzLCAkZmlsdGVyKSB7XG5cbiAgJHNjb3BlLmRldGFpbHMgPSB7fTtcblxuICAkc2NvcGUuc2FsZXNmb3JjZVVybCA9IGNvbmZpZy5zYWxlc2ZvcmNlVXJsO1xuXG4gICRodHRwLmdldCgnc3VjY3VidXNfZ2l0aWdub3JlL3NmLW9iamVjdC1maWVsZC1oYXNoLmpzb24nLCB7Y2FjaGVkOiB0cnVlfSkuc3VjY2VzcyhmdW5jdGlvbihzZkZpZWxkSGFzaCkge1xuICAgICRzY29wZS5zZkZpZWxkSGFzaCA9IHNmRmllbGRIYXNoO1xuICB9KTtcblxuICAkc2NvcGUuc2hvd1JmYSA9IGZ1bmN0aW9uIChkZXRhaWxzLCB2YWx1ZSkge1xuICAgIGRldGFpbHMuc2hvd1JmYSA9IHRydWU7XG4gICAgdmFsdWUuc2hvd1JmYSA9IHRydWU7XG4gIH07XG5cbiAgJHNjb3BlLmhpZGVSZmEgPSBmdW5jdGlvbiAoZGV0YWlscywgdmFsdWUpIHtcbiAgICBkZXRhaWxzLnNob3dSZmEgPSBmYWxzZTtcbiAgICB2YWx1ZS5zaG93UmZhID0gZmFsc2U7XG4gIH07XG5cbiAgJHNjb3BlLnNob3dJbmRpY2F0b3JzID0gZnVuY3Rpb24gKGRldGFpbHMsIHZhbHVlKSB7XG4gICAgZGV0YWlscy5zaG93SW5kaWNhdG9ycyA9IHRydWU7XG4gICAgdmFsdWUuc2hvd0luZGljYXRvcnMgPSB0cnVlO1xuICB9O1xuXG4gICRzY29wZS5oaWRlSW5kaWNhdG9ycyA9IGZ1bmN0aW9uIChkZXRhaWxzLCB2YWx1ZSkge1xuICAgIGRldGFpbHMuc2hvd0luZGljYXRvcnMgPSBmYWxzZTtcbiAgICB2YWx1ZS5zaG93SW5kaWNhdG9ycyA9IGZhbHNlO1xuICB9O1xuXG4gICRzY29wZS5zaG93Umlza3MgPSBmdW5jdGlvbiAoZGV0YWlscywgdmFsdWUpIHtcbiAgICAgIGRldGFpbHMuc2hvd1Jpc2tzID0gdHJ1ZTtcbiAgICAgIHZhbHVlLnNob3dSaXNrcyA9IHRydWU7XG4gIH07XG5cbiAgJHNjb3BlLmhpZGVSaXNrcyA9IGZ1bmN0aW9uIChkZXRhaWxzLCB2YWx1ZSkge1xuICAgICAgZGV0YWlscy5zaG93Umlza3MgPSBmYWxzZTtcbiAgICAgIHZhbHVlLnNob3dSaXNrcyA9IGZhbHNlO1xuICB9O1xuXG4gICRzY29wZS5zaG93U3RhdHVzZXMgPSBmdW5jdGlvbiAoZGV0YWlscywgdmFsdWUpIHtcbiAgICAgIGRldGFpbHMuc2hvd1N0YXR1c2VzID0gdHJ1ZTtcbiAgICAgIHZhbHVlLnNob3dTdGF0dXNlcyA9IHRydWU7XG4gIH07XG5cbiAgJHNjb3BlLmhpZGVTdGF0dXNlcyA9IGZ1bmN0aW9uIChkZXRhaWxzLCB2YWx1ZSkge1xuICAgICAgZGV0YWlscy5zaG93U3RhdHVzZXMgPSBmYWxzZTtcbiAgICAgIHZhbHVlLnNob3dTdGF0dXNlcyA9IGZhbHNlO1xuICB9O1xuXG4gICRzY29wZS5sYWJlbCA9IGZ1bmN0aW9uIChrZXkpIHtcblxuICAgIHZhciBkZXNjID0ga2V5O1xuXG4gICAgLy8gZGlzYXN0ZXJcbiAgICBpZiAoJHN0YXRlUGFyYW1zLnRoZW1lID09PSAnZGlzYXN0ZXInKSB7XG5cbiAgICAgIGlmICgkc2NvcGUuc2ZGaWVsZEhhc2guRGlzYXN0ZXJfX2Nba2V5XSkge1xuICAgICAgICBkZXNjID0gJHNjb3BlLnNmRmllbGRIYXNoLkRpc2FzdGVyX19jW2tleV0ubGFiZWwgfHwga2V5O1xuICAgICAgfVxuXG4gICAgICBpZiAoJHNjb3BlLnNmRmllbGRIYXNoLkxvY2F0aW9uX19jW2tleV0pIHtcbiAgICAgICAgZGVzYyA9ICRzY29wZS5zZkZpZWxkSGFzaC5Mb2NhdGlvbl9fY1trZXldLmxhYmVsIHx8IGtleTtcbiAgICAgIH1cblxuICAgICAgaWYgKCRzY29wZS5zZkZpZWxkSGFzaC5EaXNhc3Rlcl9Mb2NhdGlvbl9fY1trZXldKSB7XG4gICAgICAgIGRlc2MgPSAkc2NvcGUuc2ZGaWVsZEhhc2guRGlzYXN0ZXJfTG9jYXRpb25fX2Nba2V5XS5sYWJlbCB8fCBrZXk7XG4gICAgICB9XG5cbiAgICAgIGlmICgkc2NvcGUuc2ZGaWVsZEhhc2guUmVxdWVzdF9Gb3JfQXNzaXN0YW5jZV9fY1trZXldKSB7XG4gICAgICAgIGRlc2MgPSAkc2NvcGUuc2ZGaWVsZEhhc2guUmVxdWVzdF9Gb3JfQXNzaXN0YW5jZV9fY1trZXldLmxhYmVsIHx8IGtleTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRlc2M7XG4gICAgfVxuXG4gICAgLy8gY29udGV4dHVhbCBsYXllclxuICAgIGlmICgkc2NvcGUuY29udGV4dHVhbExheWVyKSB7XG4gICAgICByZXR1cm4ga2V5O1xuICAgIH1cblxuXG4gICAgaWYgKCRzdGF0ZVBhcmFtcy50aGVtZSA9PT0gJ3Byb2plY3RSaXNrJykge1xuICAgICAgLy8gcHJvamVjdFxuICAgICAgaWYgKCRzY29wZS5zZkZpZWxkSGFzaC5Qcm9qZWN0X19jW2tleV0pIHtcbiAgICAgICAgZGVzYyA9ICRzY29wZS5zZkZpZWxkSGFzaC5Qcm9qZWN0X19jW2tleV0ubGFiZWwgfHwga2V5O1xuICAgICAgfVxuXG4gICAgICBpZiAoJHNjb3BlLnNmRmllbGRIYXNoLkxvY2F0aW9uX19jW2tleV0pIHtcbiAgICAgICAgZGVzYyA9ICRzY29wZS5zZkZpZWxkSGFzaC5Mb2NhdGlvbl9fY1trZXldLmxhYmVsIHx8IGtleTtcbiAgICAgIH1cblxuICAgICAgaWYgKCRzY29wZS5zZkZpZWxkSGFzaC5SaXNrX19jW2tleV0pIHtcbiAgICAgICAgZGVzYyA9ICRzY29wZS5zZkZpZWxkSGFzaC5SaXNrX19jW2tleV0ubGFiZWwgfHwga2V5O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGVzYztcbiAgICB9XG5cblxuICAgIGlmICgkc3RhdGVQYXJhbXMudGhlbWUgPT09ICdwcm9qZWN0SGVhbHRoJykge1xuICAgICAgLy8gcHJvamVjdFxuICAgICAgaWYgKCRzY29wZS5zZkZpZWxkSGFzaC5Qcm9qZWN0X19jW2tleV0pIHtcbiAgICAgICAgZGVzYyA9ICRzY29wZS5zZkZpZWxkSGFzaC5Qcm9qZWN0X19jW2tleV0ubGFiZWwgfHwga2V5O1xuICAgICAgfVxuXG4gICAgICBpZiAoJHNjb3BlLnNmRmllbGRIYXNoLkxvY2F0aW9uX19jW2tleV0pIHtcbiAgICAgICAgZGVzYyA9ICRzY29wZS5zZkZpZWxkSGFzaC5Mb2NhdGlvbl9fY1trZXldLmxhYmVsIHx8IGtleTtcbiAgICAgIH1cblxuICAgICAgaWYgKCRzY29wZS5zZkZpZWxkSGFzaC5Qcm9qZWN0X0V2YWx1YXRpb25fX2Nba2V5XSkge1xuICAgICAgICBkZXNjID0gJHNjb3BlLnNmRmllbGRIYXNoLlByb2plY3RfRXZhbHVhdGlvbl9fY1trZXldLmxhYmVsIHx8IGtleTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRlc2M7XG4gICAgfVxuXG4gICAgLy8gcHJvamVjdFxuICAgIGlmICgkc2NvcGUuc2ZGaWVsZEhhc2guUHJvamVjdF9fY1trZXldKSB7XG4gICAgICBkZXNjID0gJHNjb3BlLnNmRmllbGRIYXNoLlByb2plY3RfX2Nba2V5XS5sYWJlbCB8fCBrZXk7XG4gICAgfVxuXG4gICAgaWYgKCRzY29wZS5zZkZpZWxkSGFzaC5Mb2NhdGlvbl9fY1trZXldKSB7XG4gICAgICBkZXNjID0gJHNjb3BlLnNmRmllbGRIYXNoLkxvY2F0aW9uX19jW2tleV0ubGFiZWwgfHwga2V5O1xuICAgIH1cblxuICAgIGlmICgkc2NvcGUuc2ZGaWVsZEhhc2guSW5kaWNhdG9yX19jW2tleV0pIHtcbiAgICAgIGRlc2MgPSAkc2NvcGUuc2ZGaWVsZEhhc2guSW5kaWNhdG9yX19jW2tleV0ubGFiZWwgfHwga2V5O1xuICAgIH1cblxuICAgIGlmICgkc2NvcGUuc2ZGaWVsZEhhc2guSW5kaWNhdG9yX1ZhbHVlX19jW2tleV0pIHtcbiAgICAgIGRlc2MgPSAkc2NvcGUuc2ZGaWVsZEhhc2guSW5kaWNhdG9yX1ZhbHVlX19jW2tleV0ubGFiZWwgfHwga2V5O1xuICAgIH1cblxuICAgIGlmICgkc2NvcGUuc2ZGaWVsZEhhc2guTG9nZnJhbWVfRWxlbWVudF9fY1trZXldKSB7XG4gICAgICBkZXNjID0gJHNjb3BlLnNmRmllbGRIYXNoLkxvZ2ZyYW1lX0VsZW1lbnRfX2Nba2V5XS5sYWJlbCB8fCBrZXk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRlc2M7XG5cbiAgfTtcblxuICAkc2NvcGUudG9vbHRpcCA9IGZ1bmN0aW9uIChrZXkpIHtcbi8vICAgIChzZkZpZWxkSGFzaFtrZXldLmlubGluZUhlbHBUZXh0IHx8ICcnKSArICcgRmllbGROYW1lOiAnICsga2V5XG5cbiAgICB2YXIgZGVzYyA9ICcnO1xuXG4gICAgLy8gZGlzYXN0ZXJcbiAgICBpZiAoJHN0YXRlUGFyYW1zLnRoZW1lID09PSAnZGlzYXN0ZXInKSB7XG5cbiAgICAgIGlmICgkc2NvcGUuc2ZGaWVsZEhhc2guRGlzYXN0ZXJfX2Nba2V5XSkge1xuICAgICAgICBkZXNjID0gJHNjb3BlLnNmRmllbGRIYXNoLkRpc2FzdGVyX19jW2tleV0uaW5saW5lSGVscFRleHQgfHwgJyc7XG4gICAgICB9XG5cbiAgICAgIGlmICgkc2NvcGUuc2ZGaWVsZEhhc2guTG9jYXRpb25fX2Nba2V5XSkge1xuICAgICAgICBkZXNjID0gJHNjb3BlLnNmRmllbGRIYXNoLkxvY2F0aW9uX19jW2tleV0uaW5saW5lSGVscFRleHQgfHwgJyc7XG4gICAgICB9XG5cbiAgICAgIGlmICgkc2NvcGUuc2ZGaWVsZEhhc2guRGlzYXN0ZXJfTG9jYXRpb25fX2Nba2V5XSkge1xuICAgICAgICBkZXNjID0gJHNjb3BlLnNmRmllbGRIYXNoLkRpc2FzdGVyX0xvY2F0aW9uX19jW2tleV0uaW5saW5lSGVscFRleHQgfHwgJyc7XG4gICAgICB9XG5cbiAgICAgIGlmICgkc2NvcGUuc2ZGaWVsZEhhc2guUmVxdWVzdF9Gb3JfQXNzaXN0YW5jZV9fY1trZXldKSB7XG4gICAgICAgIGRlc2MgPSAkc2NvcGUuc2ZGaWVsZEhhc2guUmVxdWVzdF9Gb3JfQXNzaXN0YW5jZV9fY1trZXldLmlubGluZUhlbHBUZXh0IHx8ICcnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGVzYyArICcgRmllbGROYW1lOiAnICsga2V5O1xuICAgIH1cblxuICAgIC8vIGNvbnRleHR1YWwgbGF5ZXJcbiAgICBpZiAoJHNjb3BlLmNvbnRleHR1YWxMYXllcikge1xuICAgICAgcmV0dXJuICdGaWVsZE5hbWU6ICcgKyBrZXk7XG4gICAgfVxuXG4gICAgaWYgKCRzdGF0ZVBhcmFtcy50aGVtZSA9PT0gJ3Byb2plY3RSaXNrJykge1xuICAgICAgaWYgKCRzY29wZS5zZkZpZWxkSGFzaC5Qcm9qZWN0X19jW2tleV0pIHtcbiAgICAgICAgZGVzYyA9ICRzY29wZS5zZkZpZWxkSGFzaC5Qcm9qZWN0X19jW2tleV0uaW5saW5lSGVscFRleHQgfHwgJyc7XG4gICAgICB9XG5cbiAgICAgIGlmICgkc2NvcGUuc2ZGaWVsZEhhc2guTG9jYXRpb25fX2Nba2V5XSkge1xuICAgICAgICBkZXNjID0gJHNjb3BlLnNmRmllbGRIYXNoLkxvY2F0aW9uX19jW2tleV0uaW5saW5lSGVscFRleHQgfHwgJyc7XG4gICAgICB9XG5cbiAgICAgIGlmICgkc2NvcGUuc2ZGaWVsZEhhc2guUmlza19fY1trZXldKSB7XG4gICAgICAgIGRlc2MgPSAkc2NvcGUuc2ZGaWVsZEhhc2guUmlza19fY1trZXldLmlubGluZUhlbHBUZXh0IHx8ICcnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGVzYyArICcgRmllbGROYW1lOiAnICsga2V5O1xuICAgIH1cblxuICAgIGlmICgkc3RhdGVQYXJhbXMudGhlbWUgPT09ICdwcm9qZWN0SGVhbHRoJykge1xuICAgICAgaWYgKCRzY29wZS5zZkZpZWxkSGFzaC5Qcm9qZWN0X19jW2tleV0pIHtcbiAgICAgICAgZGVzYyA9ICRzY29wZS5zZkZpZWxkSGFzaC5Qcm9qZWN0X19jW2tleV0uaW5saW5lSGVscFRleHQgfHwgJyc7XG4gICAgICB9XG5cbiAgICAgIGlmICgkc2NvcGUuc2ZGaWVsZEhhc2guTG9jYXRpb25fX2Nba2V5XSkge1xuICAgICAgICBkZXNjID0gJHNjb3BlLnNmRmllbGRIYXNoLkxvY2F0aW9uX19jW2tleV0uaW5saW5lSGVscFRleHQgfHwgJyc7XG4gICAgICB9XG5cbiAgICAgIGlmICgkc2NvcGUuc2ZGaWVsZEhhc2guUHJvamVjdF9FdmFsdWF0aW9uX19jW2tleV0pIHtcbiAgICAgICAgZGVzYyA9ICRzY29wZS5zZkZpZWxkSGFzaC5Qcm9qZWN0X0V2YWx1YXRpb25fX2Nba2V5XS5pbmxpbmVIZWxwVGV4dCB8fCAnJztcbiAgICAgIH1cbiAgICAgIHJldHVybiBkZXNjICsgJyBGaWVsZE5hbWU6ICcgKyBrZXk7XG4gICAgfVxuXG4gICAgLy8gcHJvamVjdFxuICAgIGlmICgkc2NvcGUuc2ZGaWVsZEhhc2guUHJvamVjdF9fY1trZXldKSB7XG4gICAgICBkZXNjID0gJHNjb3BlLnNmRmllbGRIYXNoLlByb2plY3RfX2Nba2V5XS5pbmxpbmVIZWxwVGV4dCB8fCAnJztcbiAgICB9XG5cbiAgICBpZiAoJHNjb3BlLnNmRmllbGRIYXNoLkxvY2F0aW9uX19jW2tleV0pIHtcbiAgICAgIGRlc2MgPSAkc2NvcGUuc2ZGaWVsZEhhc2guTG9jYXRpb25fX2Nba2V5XS5pbmxpbmVIZWxwVGV4dCB8fCAnJztcbiAgICB9XG5cbiAgICBpZiAoJHNjb3BlLnNmRmllbGRIYXNoLkluZGljYXRvcl9fY1trZXldKSB7XG4gICAgICBkZXNjID0gJHNjb3BlLnNmRmllbGRIYXNoLkluZGljYXRvcl9fY1trZXldLmlubGluZUhlbHBUZXh0IHx8ICcnO1xuICAgIH1cblxuICAgIGlmICgkc2NvcGUuc2ZGaWVsZEhhc2guSW5kaWNhdG9yX1ZhbHVlX19jW2tleV0pIHtcbiAgICAgIGRlc2MgPSAkc2NvcGUuc2ZGaWVsZEhhc2guSW5kaWNhdG9yX1ZhbHVlX19jW2tleV0uaW5saW5lSGVscFRleHQgfHwgJyc7XG4gICAgfVxuXG4gICAgaWYgKCRzY29wZS5zZkZpZWxkSGFzaC5Mb2dmcmFtZV9FbGVtZW50X19jW2tleV0pIHtcbiAgICAgIGRlc2MgPSAkc2NvcGUuc2ZGaWVsZEhhc2guTG9nZnJhbWVfRWxlbWVudF9fY1trZXldLmlubGluZUhlbHBUZXh0IHx8ICcnO1xuICAgIH1cblxuICAgIHJldHVybiBkZXNjICsgJyBGaWVsZE5hbWU6ICcgKyBrZXk7XG5cbiAgfTtcblxuICAvL0luaXQgc2VsZWN0ZWRGZWF0dXJlVGl0bGUgcHJvcGVydHlcbiAgJHNjb3BlLnRpdGxlPSBcIkZlYXR1cmUgRGV0YWlsc1wiO1xuXG4gICRzY29wZS50b2dnbGVTdGF0ZSA9IGZ1bmN0aW9uKHN0YXRlTmFtZSkge1xuICAgIHZhciBzdGF0ZSA9ICRzdGF0ZS5jdXJyZW50Lm5hbWUgIT09IHN0YXRlTmFtZSA/IHN0YXRlTmFtZSA6ICdtYWluJztcbiAgICAkc3RhdGUuZ28oc3RhdGUsICRzdGF0ZVBhcmFtcyk7XG4gIH07XG5cbiAgJHNjb3BlLml0ZW1zTGlzdCA9IHRydWU7XG4gICRzY29wZS5kZXRhaWxzID0gZmFsc2U7XG5cblxuICAvL0luaXRpYWxpemUgdGhlIGR1bW15IHByb2plY3QvZGlzYXN0ZXIgY2xpY2sgcmVzdWx0c1xuICAkc2NvcGUuZ3JvdXBpbmdzID0ge307XG5cbiAgJHNjb3BlLmFsZXJ0VXNlclRvQ2xpY2sgPSB0cnVlO1xuXG4gICRzY29wZS4kb24oJ2RldGFpbHMnLCBmdW5jdGlvbiAoZXZlbnQsIGZlYXR1cmVMYXllcikge1xuICAgICRzY29wZS5hbGVydFVzZXJUb0NsaWNrID0gZmFsc2U7XG4gICAgdmFyIHByb3BlcnRpZXMgPSBmZWF0dXJlTGF5ZXIuZmVhdHVyZS5wcm9wZXJ0aWVzO1xuICAgICRzY29wZS5mZWF0dXJlID0gZmVhdHVyZUxheWVyLmZlYXR1cmU7XG4gICAgJHNjb3BlLnRpdGxlID0gJHNjb3BlLmZlYXR1cmVUaXRsZSA9IHByb3BlcnRpZXMubmFtZSB8fCBwcm9wZXJ0aWVzLnRpdGxlIHx8ICdTZWxlY3RlZCBGZWF0dXJlJztcbiAgICBpZiAocHJvcGVydGllcy5zYWxlc2ZvcmNlKSB7IC8vIHNhbGVzZm9yY2UgdGhlbWUgYmFkZ2Ugc2VsZWN0ZWRcbiAgICAgICRzY29wZS5jb250ZXh0dWFsTGF5ZXIgPSBmYWxzZTtcbiAgICAgICRzY29wZS5ncm91cGluZ3MgPSBwcm9wZXJ0aWVzLnNhbGVzZm9yY2U7XG5cbiAgICAgIGlmKCRzY29wZS5ncm91cGluZ3MuaGFzT3duUHJvcGVydHkoJ1Byb2plY3QgUmlzaycpPT10cnVlKXtcbiAgICAgICAgJHNjb3BlLmdyb3VwaW5nc1snUHJvamVjdCBSaXNrJ10gPSBTb3J0QnlQcm9qZWN0Umlzaygkc2NvcGUuZ3JvdXBpbmdzWydQcm9qZWN0IFJpc2snXSk7XG4gICAgICB9O1xuXG4gICAgICBpZigkc2NvcGUuZ3JvdXBpbmdzLmhhc093blByb3BlcnR5KCdEaXNhc3RlcnMnKT09dHJ1ZSl7XG4gICAgICAgICRzY29wZS5ncm91cGluZ3NbJ0Rpc2FzdGVycyddID0gU29yeUJ5RGlzYXN0ZXIoJHNjb3BlLmdyb3VwaW5nc1snRGlzYXN0ZXJzJ10pO1xuICAgICAgfTtcblxuICAgICAgJHNjb3BlLm51bVRoZW1lSXRlbXMgPSAkLm1hcChwcm9wZXJ0aWVzLnNhbGVzZm9yY2UsIGZ1bmN0aW9uKG4pIHsgcmV0dXJuIG59KS5sZW5ndGg7XG4gICAgICAkc2NvcGUuc2hvd0xpc3QoKTtcbiAgICAgICRzY29wZS5vcGVuUGFyYW0oJ2RldGFpbHMtcGFuZWwnKTtcbiAgICAgICRzY29wZS5jcmVhdGVEb251dHMoKTtcbiAgICB9IGVsc2UgeyAvLyBzdGFuZGFyZCBnZW9qc29uLCBzaG93IHByb3BlcnRpZXMgYXMgZGV0YWlsc1xuXG4gICAgICAkc2NvcGUuY29udGV4dHVhbExheWVyID0gKHByb3BlcnRpZXMuc2ZfaWQgPyBmYWxzZSA6IHRydWUpO1xuICAgICAgJHNjb3BlLnNob3dEZXRhaWxzKHByb3BlcnRpZXMpO1xuICAgICAgJHNjb3BlLm9wZW5QYXJhbSgnZGV0YWlscy1wYW5lbCcpO1xuICAgIH1cbiAgICAkc2NvcGUucmVzaXplRGV0YWlsc1BhbmVsKCk7XG4gIH0pO1xuXG4gIHZhciBTb3J0QnlQcm9qZWN0UmlzayA9IGZ1bmN0aW9uKGFycil7XG4gICAgYXJyLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgIGlmIChjb25maWcuUHJvamVjdFJpc2tPcmRlclthLm92ZXJhbGxfYXNzZXNzbWVudF9fY10gPCBjb25maWcuUHJvamVjdFJpc2tPcmRlcltiLm92ZXJhbGxfYXNzZXNzbWVudF9fY10pIHtcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgICB9XG4gICAgICBpZiAoY29uZmlnLlByb2plY3RSaXNrT3JkZXJbYS5vdmVyYWxsX2Fzc2Vzc21lbnRfX2NdID4gY29uZmlnLlByb2plY3RSaXNrT3JkZXJbYi5vdmVyYWxsX2Fzc2Vzc21lbnRfX2NdKSB7XG4gICAgICAgIHJldHVybiAtMTtcbiAgICAgIH1cbiAgICAgIC8vIGEgbXVzdCBiZSBlcXVhbCB0byBiXG4gICAgICByZXR1cm4gMDtcbiAgICB9KTtcblxuICAgIHJldHVybiBhcnI7XG4gIH07XG4gIHZhciBTb3J5QnlEaXNhc3RlciA9IGZ1bmN0aW9uKGFycil7XG4gICAgYXJyLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgIGlmIChjb25maWcuRGlzYXN0ZXJPcmRlclthLmlyb2Nfc3RhdHVzX19jXSA8IGNvbmZpZy5EaXNhc3Rlck9yZGVyW2IuaXJvY19zdGF0dXNfX2NdKSB7XG4gICAgICAgIHJldHVybiAxO1xuICAgICAgfVxuICAgICAgaWYgKGNvbmZpZy5EaXNhc3Rlck9yZGVyW2EuaXJvY19zdGF0dXNfX2NdID4gY29uZmlnLkRpc2FzdGVyT3JkZXJbYi5pcm9jX3N0YXR1c19fY10pIHtcbiAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgfVxuICAgICAgLy8gaW4gY2FzZSBvZiBhIHRpZTsgb3JkZXIgYnkgZGF0ZVxuICAgICAgcmV0dXJuIG5ldyBEYXRlKGIuZGF0ZV9fYykgLSBuZXcgRGF0ZShhLmRhdGVfX2MpO1xuXG4gICAgfSk7XG5cbiAgICByZXR1cm4gYXJyO1xuICB9O1xuXG5cbiAgJHNjb3BlLiRvbigncm91dGUtdXBkYXRlJywgZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZl9pZCA9ICRzdGF0ZVBhcmFtcy5zZl9pZDtcbiAgICAkc2NvcGUudGhlbWUgPSAkc3RhdGVQYXJhbXMudGhlbWU7XG4gICAgaWYgKCRzY29wZS5hbGVydFVzZXJUb0NsaWNrID09PSBmYWxzZSkgcmV0dXJuO1xuICAgIGlmIChzZl9pZCAmJiB0eXBlb2Ygc2ZfaWQgPT09ICdzdHJpbmcnKSB7XG4gICAgICB2YXIgdXJsID0gY29uZmlnLmNodWJic1BhdGgoJ3NlcnZpY2VzL2N1c3RvbS9jdXN0b21fb3BlcmF0aW9uP25hbWU9ZG9lY29zdGV4dHNlYXJjaCZmb3JtYXQ9anNvbiZ0ZXh0PScpICsgc2ZfaWQ7XG4gICAgICAkaHR0cC5nZXQodXJsKS5zdWNjZXNzKGZ1bmN0aW9uIChyZXN1bHQsIHN0YXR1cykge1xuICAgICAgICBpZiAocmVzdWx0WzBdKSB7XG4gICAgICAgICAgJHJvb3RTY29wZS4kYnJvYWRjYXN0KCdkZXRhaWxzJywgeyBmZWF0dXJlOiB7IHByb3BlcnRpZXM6IHJlc3VsdFswXSB9IH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xuXG4gICRzY29wZS5jcmVhdGVEb251dHMgPSBmdW5jdGlvbigpIHtcbiAgICAvLyB1c2VzIGpxdWVyeSB0byBwdXQgZG9udXQgaW4gYSBkaXYuXG4gICAgaWYgKCRzY29wZS5ncm91cGluZ3MgJiYgJHNjb3BlLmdyb3VwaW5ncy5Qcm9qZWN0cykge1xuICAgICAgRG9udXRzLmNyZWF0ZUxhYmVsRG9udXQoJHNjb3BlLnNmRmllbGRIYXNoLlByb2plY3RfX2Muc2VjdG9yX19jLnBpY2tsaXN0VmFsdWVzLCAkc2NvcGUuZ3JvdXBpbmdzLlByb2plY3RzLCAnI2RldGFpbHMtZG9udXQnKTtcbiAgICB9XG4gIH07XG5cbiAgJHNjb3BlLm1vcmVMZXNzID0gJ01vcmUnO1xuXG4gICRzY29wZS50b2dnbGVNb3JlTGVzcyA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoJHNjb3BlLm1vcmVMZXNzID09PSAnTW9yZScpIHtcbiAgICAgICRzY29wZS5tb3JlTGVzcyA9ICdMZXNzJztcbiAgICB9IGVsc2Uge1xuICAgICAgJHNjb3BlLm1vcmVMZXNzID0gJ01vcmUnO1xuICAgIH1cbiAgICAvL1Jlc2l6ZTtcbiAgICAkc2NvcGUucmVzaXplRGV0YWlsc1BhbmVsKCk7XG4gIH07XG5cbiAgJHNjb3BlLnNob3dEZXRhaWxzID0gZnVuY3Rpb24gKGl0ZW0sIHRoZW1lSXRlbXMsIGlkeCkge1xuICAgIGlmIChpdGVtLnNmX2lkKSB7XG4gICAgICAkcm9vdFNjb3BlLnNldFBhcmFtV2l0aFZhbCgnc2ZfaWQnLCBpdGVtLnNmX2lkKTtcbiAgICB9XG4gICAgaWYgKGl0ZW0ubmFtZSB8fCBpdGVtLnRpdGxlKSB7XG4gICAgICAkc2NvcGUudGl0bGUgPSBpdGVtLm5hbWUgfHwgaXRlbS50aXRsZTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGlkeCA9PT0gJ251bWJlcicpICRzY29wZS5hY3RpdmVUaGVtZUl0ZW1JZHggPSBpZHg7XG4gICAgaWYgKHRoZW1lSXRlbXMpICRzY29wZS5hY3RpdmVUaGVtZUl0ZW1zTGlzdCA9IHRoZW1lSXRlbXM7XG5cbiAgICAkc2NvcGUuaXRlbXNMaXN0ID0gZmFsc2U7XG5cbiAgICAkc2NvcGUuZGV0YWlscyA9IHJlbW92ZVVud2FudGVkSXRlbXMoZm9ybWF0RGV0YWlscyhpdGVtLCAkc3RhdGVQYXJhbXMudGhlbWUpLCAkc3RhdGVQYXJhbXMudGhlbWUpO1xuXG4gICAgaWYgKCEkc2NvcGUuY29udGV4dHVhbExheWVyKSB7XG4gICAgICAkc2NvcGUubGVzc0RldGFpbHMgPSByZW1vdmVVbndhbnRlZEl0ZW1zKGxlc3NEZXRhaWxzKGZvcm1hdERldGFpbHMoaXRlbSwgJHN0YXRlUGFyYW1zLnRoZW1lKSksICRzdGF0ZVBhcmFtcy50aGVtZSk7XG4gICAgfVxuXG4gICAgLy9GaWx0ZXIvRm9ybWF0IFJGQXMgYW5kIEluZGljYXRvcnNcbiAgICBpZiAoJHNjb3BlLmRldGFpbHMucmVxdWVzdHNGb3JBc3Npc3RhbmNlICYmIGFuZ3VsYXIuaXNBcnJheSgkc2NvcGUuZGV0YWlscy5yZXF1ZXN0c0ZvckFzc2lzdGFuY2UpKSB7XG4gICAgICAvL0ZpbHRlci9Gb3JtYXRcbiAgICAgICRzY29wZS5kZXRhaWxzLnJlcXVlc3RzRm9yQXNzaXN0YW5jZSA9ICRzY29wZS5kZXRhaWxzLnJlcXVlc3RzRm9yQXNzaXN0YW5jZS5tYXAoZnVuY3Rpb24gKHJmYSkge1xuICAgICAgICByZXR1cm4gcmVtb3ZlVW53YW50ZWRJdGVtcyhmb3JtYXREZXRhaWxzKHJmYSwgXCJSRkFcIiksIFwiUkZBXCIpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKCRzY29wZS5kZXRhaWxzLmluZGljYXRvcnMgJiYgYW5ndWxhci5pc0FycmF5KCRzY29wZS5kZXRhaWxzLmluZGljYXRvcnMpKSB7XG4gICAgICAvL0ZpbHRlci9Gb3JtYXRcbiAgICAgICRzY29wZS5kZXRhaWxzLmluZGljYXRvcnMgPSAkc2NvcGUuZGV0YWlscy5pbmRpY2F0b3JzLm1hcChmdW5jdGlvbiAoaW5kaWNhdG9yKSB7XG4gICAgICAgIHJldHVybiByZW1vdmVVbndhbnRlZEl0ZW1zKGZvcm1hdERldGFpbHMoaW5kaWNhdG9yLCBcImluZGljYXRvclwiKSwgXCJpbmRpY2F0b3JcIik7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoJHNjb3BlLmRldGFpbHMucmlza3MgJiYgYW5ndWxhci5pc0FycmF5KCRzY29wZS5kZXRhaWxzLnJpc2tzKSA9PT0gdHJ1ZSkge1xuICAgICAgLy9GaWx0ZXIvRm9ybWF0XG4gICAgICAkc2NvcGUuZGV0YWlscy5yaXNrcyA9ICRzY29wZS5kZXRhaWxzLnJpc2tzLm1hcChmdW5jdGlvbiAocmlzaykge1xuICAgICAgICByZXR1cm4gcmVtb3ZlVW53YW50ZWRJdGVtcyhmb3JtYXREZXRhaWxzKHJpc2ssIFwicmlza1wiKSwgXCJyaXNrXCIpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKCRzY29wZS5kZXRhaWxzLnN0YXR1c2VzICYmIGFuZ3VsYXIuaXNBcnJheSgkc2NvcGUuZGV0YWlscy5zdGF0dXNlcykpIHtcbiAgICAgIC8vRmlsdGVyL0Zvcm1hdFxuICAgICAgJHNjb3BlLmRldGFpbHMuc3RhdHVzZXMgPSAkc2NvcGUuZGV0YWlscy5zdGF0dXNlcy5tYXAoZnVuY3Rpb24gKHN0YXR1cykge1xuICAgICAgICByZXR1cm4gcmVtb3ZlVW53YW50ZWRJdGVtcyhmb3JtYXREZXRhaWxzKHN0YXR1cywgXCJzdGF0dXNcIiksIFwic3RhdHVzXCIpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy9OZWVkIHRvIHdhaXQgdW50aWwgZGV0YWlscyBwYW5lbCBzd2l0Y2hlcyBtb2RlcywgYW5kIHRoZW4gY2FsY3VsYXRlIHRoZSBzaXplLlxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgJHNjb3BlLnJlc2l6ZURldGFpbHNQYW5lbCgpO1xuICAgIH0sIDEwMCk7XG5cbiAgfTtcblxuICBmdW5jdGlvbiByZW1vdmVVbndhbnRlZEl0ZW1zKGRldGFpbHMsIHR5cGUpIHtcbiAgICB2YXIgcGFzc3Rocm91Z2hEZXRhaWxzID0ge307XG4gICAgdmFyIGJsYWNrbGlzdERpY3Rpb25hcnkgPSBjb25maWcudW53YW50ZWRQcm9qZWN0RGV0YWlscztcblxuICAgIGlmICh0eXBlID09PSAnZGlzYXN0ZXInKSB7XG4gICAgICBibGFja2xpc3REaWN0aW9uYXJ5ID0gY29uZmlnLnVud2FudGVkRGlzYXN0ZXJEZXRhaWxzO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlID09PSAncHJvamVjdCcpIHtcbiAgICAgIGJsYWNrbGlzdERpY3Rpb25hcnkgPSBjb25maWcudW53YW50ZWRQcm9qZWN0RGV0YWlscztcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSA9PT0gJ1JGQScpIHtcbiAgICAgIGJsYWNrbGlzdERpY3Rpb25hcnkgPSBjb25maWcudW53YW50ZWRSRkFEZXRhaWxzO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlID09PSAnaW5kaWNhdG9yJykge1xuICAgICAgYmxhY2tsaXN0RGljdGlvbmFyeSA9IGNvbmZpZy51bndhbnRlZEluZGljYXRvckRldGFpbHM7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgPT09ICdwcm9qZWN0UmlzaycgfHwgdHlwZSA9PT0gJ3Jpc2snKSB7XG4gICAgICBibGFja2xpc3REaWN0aW9uYXJ5ID0gY29uZmlnLnVud2FudGVkUHJvamVjdFJpc2tEZXRhaWxzO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlID09PSAncHJvamVjdEhlYWx0aCcgfHwgdHlwZSA9PT0gJ3N0YXR1cycpIHtcbiAgICAgIGJsYWNrbGlzdERpY3Rpb25hcnkgPSBjb25maWcudW53YW50ZWRQcm9qZWN0SGVhbHRoRGV0YWlscztcbiAgICB9XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gZGV0YWlscykge1xuICAgICAgdmFyIGJsYWNrbGlzdGVkID0gYmxhY2tsaXN0RGljdGlvbmFyeVtrZXldO1xuICAgICAgaWYgKGJsYWNrbGlzdGVkICYmICh0eXBlb2YgYmxhY2tsaXN0ZWQgPT09ICdmdW5jdGlvbicpKSB7XG4gICAgICAgIC8vZXZhbHVhdGUgdGhlIGZ1bmN0aW9uIHRvIGRlY2lkZSBpZiB0aGUga2V5IHNob3VsZCBiZSBzaG93bi5cbiAgICAgICAgYmxhY2tsaXN0ZWQgPSBibGFja2xpc3RlZChkZXRhaWxzW2tleV0pO1xuICAgICAgfVxuICAgICAgaWYgKCFibGFja2xpc3RlZCkge1xuICAgICAgICAvL0FsbG93IHRoZSBpdGVtIHRocnUgaWYgaXQgaXMgbm90IGJsYWNrbGlzdGVkXG4gICAgICAgIHBhc3N0aHJvdWdoRGV0YWlsc1trZXldID0gZGV0YWlsc1trZXldO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBwYXNzdGhyb3VnaERldGFpbHM7XG4gIH1cblxuICBmdW5jdGlvbiBmb3JtYXREZXRhaWxzKGRldGFpbHMsIHR5cGUpIHtcbiAgICB2YXIgZm9ybWF0dGVkRGV0YWlscyA9IHt9O1xuICAgIHZhciBmb3JtYXR0aW5nRGljdGlvbmFyeSA9IGNvbmZpZy5wcm9qZWN0RGV0YWlsc0Zvcm1hdHRpbmc7XG5cbiAgICBpZiAodHlwZSA9PT0gJ2Rpc2FzdGVyJykge1xuICAgICAgZm9ybWF0dGluZ0RpY3Rpb25hcnkgPSBjb25maWcuZGlzYXN0ZXJEZXRhaWxzRm9ybWF0dGluZztcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSA9PT0gJ3Byb2plY3QnKSB7XG4gICAgICBmb3JtYXR0aW5nRGljdGlvbmFyeSA9IGNvbmZpZy5wcm9qZWN0RGV0YWlsc0Zvcm1hdHRpbmc7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgPT09ICdSRkEnKSB7XG4gICAgICBmb3JtYXR0aW5nRGljdGlvbmFyeSA9IGNvbmZpZy5SRkFEZXRhaWxzRm9ybWF0dGluZztcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSA9PT0gJ2luZGljYXRvcicpIHtcbiAgICAgIGZvcm1hdHRpbmdEaWN0aW9uYXJ5ID0gY29uZmlnLmluZGljYXRvckRldGFpbHNGb3JtYXR0aW5nO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlID09PSAncHJvamVjdFJpc2snIHx8IHR5cGUgPT09ICdyaXNrJykge1xuICAgICAgZm9ybWF0dGluZ0RpY3Rpb25hcnkgPSBjb25maWcucHJvamVjdFJpc2tEZXRhaWxzRm9ybWF0dGluZztcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSA9PT0gJ3Byb2plY3RIZWFsdGgnIHx8IHR5cGUgPT09ICdzdGF0dXMnKSB7XG4gICAgICBmb3JtYXR0aW5nRGljdGlvbmFyeSA9IGNvbmZpZy5wcm9qZWN0SGVhbHRoRGV0YWlsc0Zvcm1hdHRpbmc7XG4gICAgfVxuXG4gICAgZm9yICh2YXIga2V5IGluIGRldGFpbHMpIHtcbiAgICAgIHZhciBmb3JtYXR0ZXIgPSBmb3JtYXR0aW5nRGljdGlvbmFyeVtrZXldO1xuICAgICAgaWYgKGZvcm1hdHRlcikge1xuICAgICAgICBzd2l0Y2ggKGZvcm1hdHRlci5zcGxpdChcIixcIilbMF0pIHtcbiAgICAgICAgICBjYXNlIFwiY3VycmVuY3lcIjpcbiAgICAgICAgICAgIGZvcm1hdHRlZERldGFpbHNba2V5XSA9ICRmaWx0ZXIoJ2N1cnJlbmN5JykoZGV0YWlsc1trZXldLCAoZm9ybWF0dGVyLnNwbGl0KFwiLFwiKVsxXSB8fCBcIlVTRFwiKSk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgXCJudW1iZXJcIjpcbiAgICAgICAgICAgIGZvcm1hdHRlZERldGFpbHNba2V5XSA9ICRmaWx0ZXIoJ251bWJlcicpKGRldGFpbHNba2V5XSk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgXCJkYXRlXCI6XG4gICAgICAgICAgICBmb3JtYXR0ZWREZXRhaWxzW2tleV0gPSAkZmlsdGVyKCdkYXRlJykoZGV0YWlsc1trZXldLCBcInl5eXktZGQtTU1cIik7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgXCJyZmFOYW1lXCI6XG4gICAgICAgICAgICBmb3JtYXR0ZWREZXRhaWxzW2tleV0gPSAkc2NvcGUuZGV0YWlscy5sb2NhdGlvbl9fcl9hZG1pbl8wX19jICsgJyAnICsgJHNjb3BlLmRldGFpbHMuZGlzYXN0ZXJfdHlwZV9fYyArICcgLSAnICsgZGV0YWlscy5hcHBlYWxfc291cmNlX19jO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgZm9ybWF0dGVkRGV0YWlsc1trZXldID0gZGV0YWlsc1trZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgLy9ObyBmb3JtYXR0aW5nXG4gICAgICAgIGZvcm1hdHRlZERldGFpbHNba2V5XSA9IGRldGFpbHNba2V5XTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZm9ybWF0dGVkRGV0YWlscztcbiAgfVxuXG4gIGZ1bmN0aW9uIGxlc3NEZXRhaWxzKGRldGFpbHMpIHtcbiAgICB2YXIgbGVzc0RldGFpbHMgPSBbXTtcbiAgICBpZiAoJHN0YXRlUGFyYW1zLnRoZW1lID09PSAnZGlzYXN0ZXInKSB7XG4gICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gY29uZmlnLmRpc2FzdGVyRGV0YWlsc1Nob3J0TGlzdC5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICB2YXIga2V5ID0gY29uZmlnLmRpc2FzdGVyRGV0YWlsc1Nob3J0TGlzdFtpXTtcbiAgICAgICAgbGVzc0RldGFpbHMucHVzaCh7XG4gICAgICAgICAga2V5OiBrZXksXG4gICAgICAgICAgdmFsdWU6IGRldGFpbHNba2V5XVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHByb2plY3REZXRhaWxzU2hvcnRMaXN0ID0gY29uZmlnLnByb2plY3REZXRhaWxzU2hvcnRMaXN0O1xuICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHByb2plY3REZXRhaWxzU2hvcnRMaXN0Lmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIHZhciBrZXkgPSBwcm9qZWN0RGV0YWlsc1Nob3J0TGlzdFtpXTtcbiAgICAgICAgbGVzc0RldGFpbHMucHVzaCh7XG4gICAgICAgICAga2V5OiBrZXksXG4gICAgICAgICAgdmFsdWU6IGRldGFpbHNba2V5XVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGxlc3NEZXRhaWxzO1xuICB9XG5cbiAgJHNjb3BlLm5leHRUaGVtZUl0ZW0gPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgbGVuID0gJHNjb3BlLmFjdGl2ZVRoZW1lSXRlbXNMaXN0Lmxlbmd0aDtcbiAgICBpZiAoKyskc2NvcGUuYWN0aXZlVGhlbWVJdGVtSWR4ID49IGxlbikgJHNjb3BlLmFjdGl2ZVRoZW1lSXRlbUlkeCA9IDA7XG4gICAgdmFyIGl0ZW0gPSAkc2NvcGUuYWN0aXZlVGhlbWVJdGVtc0xpc3RbJHNjb3BlLmFjdGl2ZVRoZW1lSXRlbUlkeF07XG4gICAgJHNjb3BlLnNob3dEZXRhaWxzKGl0ZW0pO1xuICB9O1xuXG4gICRzY29wZS5wcmV2VGhlbWVJdGVtID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGxlbiA9ICRzY29wZS5hY3RpdmVUaGVtZUl0ZW1zTGlzdC5sZW5ndGg7XG4gICAgaWYgKC0tJHNjb3BlLmFjdGl2ZVRoZW1lSXRlbUlkeCA8IDApICRzY29wZS5hY3RpdmVUaGVtZUl0ZW1JZHggPSBsZW4gLSAxO1xuICAgIHZhciBpdGVtID0gJHNjb3BlLmFjdGl2ZVRoZW1lSXRlbXNMaXN0WyRzY29wZS5hY3RpdmVUaGVtZUl0ZW1JZHhdO1xuICAgICRzY29wZS5zaG93RGV0YWlscyhpdGVtKTtcbiAgfTtcblxuICAkc2NvcGUuc2hvd0xpc3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgJHNjb3BlLnRpdGxlID0gJHNjb3BlLmZlYXR1cmVUaXRsZTtcbiAgICAkc2NvcGUuaXRlbXNMaXN0ID0gdHJ1ZTtcbiAgICAkc2NvcGUuZGV0YWlscyA9IGZhbHNlO1xuICB9O1xuXG4gICRzY29wZS5yZXNpemVEZXRhaWxzUGFuZWwgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgaGVpZ2h0ID0gJCgnI01hcEN0cmwnKS5oZWlnaHQoKSAtIDIwMDsgLy9NYWdpYyBOdW1iZXJcblxuICAgIC8vaGVpZ2h0IGlzIHRoZSB2YWx1ZSB0aGF0IHRoZSBlbnRpcmUgZGV0YWlscyBwYW5lbCBzaG91bGQgbmV2ZXIgZXhjZWVkLlxuICAgIC8vV2l0aGluIHRoZSBwYW5lbCBpdHNlbGYsIHRoZSBpbm5lciBjb250YWluZXIgbmVlZHMgdG8gYWRqdXN0IGl0cyBoZWlnaHQgYmFzZWQgb24gdGhlIGNvbnRlbnRzIG9mIHRoZSBwYW5lbC5cbiAgICAvL1NvbWV0aW1lcywgdGhlcmUgYXJlIHRhYnMsIGFuZCBzb21ldGltZXMgdGhlIHByb2plY3QvZGlzYXN0ZXIgZGVzY3JpcHRpb24gY2FuIGJlIHF1aXRlIGxvbmcuXG4gICAgLy9JbiB0aGVzZSBjYXNlcywgdGhlbiBpbm5lckNvbnRhaW5lciBzaG91bGQgc2hyaW5rIHRvIGZpdCB3aXRoaW4gdGhlIG1heC1oZWlnaHQgb2YgdGhlIG91dGVyIHBhbmVsIChoZWlnaHQpXG5cbiAgICAvL0ZpbmQgdGhlIHRvcCBvZiB0aGUgaW5uZXJDb250YWluZXIsIGFuZCBzdWJ0cmFjdCBmcm9tIHRoZSBtYXggaGVpZ2h0IG9mIHRoZSBwYW5lbC4gIFRoYXQncyB3aGF0IHRoZSBtYXgtaGVpZ2h0IG9mIHRoZSBpbm5lciBwYW5lbCBzaG91bGQgYmVcbiAgICB2YXIgaW5uZXJUb3AgPSAkKCcjRGV0YWlsc1BhbmVsIC5Jbm5lckNvbnRhaW5lcicpLnBvc2l0aW9uKCkudG9wO1xuICAgIHZhciBib3R0b21IZWlnaHQgPSAkKFwiLmRldGFpbHMtYm90dG9tLWJ1dHRvbnMucHVsbC1yaWdodFwiKS5oZWlnaHQoKTtcblxuICAgICQoJyNEZXRhaWxzUGFuZWwgLklubmVyQ29udGFpbmVyICcpLmNzcyhcIm1heC1oZWlnaHRcIiwgaGVpZ2h0IC0gaW5uZXJUb3AgLSBib3R0b21IZWlnaHQpO1xuICB9O1xuXG5cdC8vQ29ubmVjdCB0aGUgbGF5b3V0IG9ucmVzaXplIGVuZCBldmVudFxuXHR3aW5kb3cubGF5b3V0LnBhbmVzLmNlbnRlci5iaW5kKFwibGF5b3V0cGFuZW9ucmVzaXplX2VuZFwiLCAkc2NvcGUucmVzaXplRGV0YWlsc1BhbmVsKTtcblxuXHQvL0ZvciBJbml0LlxuXHQkc2NvcGUucmVzaXplRGV0YWlsc1BhbmVsKCk7XG5cbiAgJHNjb3BlLnNhdmUgPSBmdW5jdGlvbiAoZGF0YSwgbmFtZSkge1xuICAgIHZhciBqc29uID0gSlNPTi5zdHJpbmdpZnkoZGF0YSwgbnVsbCwgMik7XG4gICAgdmFyIGJsb2IgPSBuZXcgQmxvYihbanNvbl0sIHt0eXBlOid0ZXh0L3BsYWluJ30pO1xuICAgIHZhciBkb3dubG9hZExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICB2YXIgdXJsID0gKHdpbmRvdy53ZWJraXRVUkwgIT0gbnVsbCA/IHdpbmRvdy53ZWJraXRVUkwgOiB3aW5kb3cuVVJMKTtcbiAgICBkb3dubG9hZExpbmsuaHJlZiA9IHVybC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG4gICAgZG93bmxvYWRMaW5rLmRvd25sb2FkID0gbmFtZSB8fCAnZmVhdHVyZS5nZW9qc29uJztcbiAgICBkb3dubG9hZExpbmsuY2xpY2soKTtcbiAgfTtcblxufSk7XG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgUnlhbiBXaGl0bGV5XG4gKiAgICAgICBvbiA2LzQvMTQuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnR2VvQW5ndWxhcicpLmNvbnRyb2xsZXIoJ0V4cG9ydEN0cmwnLCBmdW5jdGlvbigkc2NvcGUsICRodHRwLCAkc3RhdGUsICRzdGF0ZVBhcmFtcykge1xuICAgIGNvbnNvbGUubG9nKCdFeHBvcnRDdHJsJyk7XG5cbiAgICAkc2NvcGUuZXhwb3J0ID0gZnVuY3Rpb24gKCkge1xuXG4gICAgfTtcblxuICAgICRzY29wZS5yb3V0ZVVybCA9IHdpbmRvdy5sb2NhdGlvbjtcblxuXG4gICAgLyoqXG4gICAgICogSWYgRXhwb3J0Q3RybCBnZXRzIGNhbGxlZCB0d2ljZSBmb3Igc29tZSByZWFzb24sIHdlIG1pZ2h0XG4gICAgICogaGF2ZSB0aGlzIGNsYXNzIGhhbmdpbmcgYXJvdW5kIGJsb2NraW5nIHRoZSBhcHAuIEV4cG9ydEN0cmxcbiAgICAgKiBkb2VzIGdldCBjYWxsZWQgdHdpY2Ugc29tZXRpbWVzLCBiZWNhdXNlIHRoZSBtb2RhbCBzb21ldGltZXNcbiAgICAgKiBudWRnZXMgdGhlIG1hcCBhbmQgcmVpbnN0YW50aWF0ZXMgdGhlIG1vZGFsIGFnYWluIHZpYSBhIG5ld1xuICAgICAqIHJvdXRlLlxuICAgICAqL1xuICAgICQoJy5tb2RhbC1iYWNrZHJvcCcpLnJlbW92ZSgpO1xuXG4gICAgJCgnI2V4cG9ydE1vZGFsJykubW9kYWwoJ3Nob3cnKTtcblxuICAgICQoJyNleHBvcnRNb2RhbCcpLm9uKCdoaWRkZW4uYnMubW9kYWwnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAkc3RhdGUuZ28oJ21haW4nLCAkc3RhdGVQYXJhbXMpO1xuICAgIH0pO1xuXG5cbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAvL2RlZmF1bHRzXG4gICAgc2VsZi5fTGF5b3V0RWxlbWVudHMgPSB7IFwibWFwXCI6IHRydWUsIFwibGVnZW5kXCI6IHRydWUsIFwib3B0aW9uYWx0aGVtZWRldGFpbHNcIjogZmFsc2UgfTtcbiAgICBzZWxmLl9JbWFnZUZvcm1hdCA9ICdwbmcnO1xuXG4gICAgc2VsZi5faW5pdCA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBzZWxmLl9jb25uZWN0UmFkaW9CdXR0b25PbkNsaWNrcygpO1xuICAgICAgICAkKFwiI2V4ZWN1dGVFeHBvcnRCdXR0b25cIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvL1Nob3cgbG9hZGluZyBnaWYuIEhpZGUgZXhwb3J0IGJ1dHRvblxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBzZWxmLl9leHBvcnRJbWFnZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICBzZWxmLl9zaG93RXhwb3J0QnV0dG9uSGlkZUxvYWRlcigpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBzZWxmLl9zaG93V2FpdGluZ1BhbmVsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBzZWxmLl9zaG93TG9hZGVyKCk7IC8vc2hvdyBrbmlnaHRSaWRlciBpbWFnZSwgaGlkZVxuICAgICAgICAkKFwiI2V4cG9ydE9wdGlvbnNQYW5lbFwiKS5jc3Moe1wiZGlzcGxheVwiOiBcIm5vbmVcIn0pO1xuICAgICAgICAkKFwiI2V4cG9ydFdhaXRpbmdQYW5lbFwiKS5jc3MoeyBcImRpc3BsYXlcIjogXCJibG9ja1wiIH0pO1xuICAgICAgICAkKFwiLmV4cG9ydEdyb3VwVGl0bGUuZXJyb3JcIikuY3NzKHsgXCJkaXNwbGF5XCI6IFwibm9uZVwiIH0pOyAvL0hpZGUgZXJyb3IgbWVzc2FnZSwgaWYgc2hvd25cbiAgICAgICAgJChcIi5pbWFnZU9wZW5CdXR0b25cIikuY3NzKHtcImRpc3BsYXlcIjogXCJub25lXCJ9KTsgLy9oaWRlIG9wZW4gaW1hZ2UgYnV0dG9uXG4gICAgfVxuXG4gICAgc2VsZi5faGlkZVdhaXRpbmdQYW5lbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJChcIiNleHBvcnRXYWl0aW5nUGFuZWxcIikuY3NzKHtcImRpc3BsYXlcIjogXCJub25lXCJ9KTtcbiAgICAgICAgJChcIiNleHBvcnRPcHRpb25zUGFuZWxcIikuY3NzKHtcImRpc3BsYXlcIjogXCJibG9ja1wifSk7XG4gICAgfVxuXG4gICAgc2VsZi5faGlkZUV4cG9ydEJ1dHRvblNob3dMb2FkZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoXCIjZXhlY3V0ZUV4cG9ydEJ1dHRvblwiKS5jc3MoeyBcImRpc3BsYXlcIjogXCJub25lXCIgfSk7XG4gICAgICAgICQoXCIua25pZ2h0UmlkZXJMb2FkZXJcIikuY3NzKHsgXCJkaXNwbGF5XCI6IFwiYmxvY2tcIiB9KTtcbiAgICB9XG5cbiAgICBzZWxmLl9zaG93RXhwb3J0QnV0dG9uSGlkZUxvYWRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJChcIiNleGVjdXRlRXhwb3J0QnV0dG9uXCIpLmNzcyh7XCJkaXNwbGF5XCI6IFwiYmxvY2tcIn0pO1xuICAgICAgICAkKFwiLmtuaWdodFJpZGVyTG9hZGVyXCIpLmNzcyh7XCJkaXNwbGF5XCI6IFwibm9uZVwifSk7XG4gICAgfVxuXG4gICAgc2VsZi5fY29ubmVjdFJhZGlvQnV0dG9uT25DbGlja3MgPSBmdW5jdGlvbiAoKSB7XG5cblxuICAgICAgICAkKFwiI29wdGlvbmFsT3V0cHV0TWFwXCIpLm9uKFwiY2xpY2tcIiwgc2VsZi5fZ2V0TGF5b3V0RWxlbWVudE9uQ2xpY2soJ21hcCcpKTtcbiAgICAgICAgJChcIiNvcHRpb25hbE91dHB1dExlZ2VuZFwiKS5vbihcImNsaWNrXCIsIHNlbGYuX2dldExheW91dEVsZW1lbnRPbkNsaWNrKCdsZWdlbmQnKSk7XG4gICAgICAgICQoXCIjb3B0aW9uYWxUaGVtZURldGFpbHNcIikub24oXCJjbGlja1wiLCBzZWxmLl9nZXRMYXlvdXRFbGVtZW50T25DbGljaygnb3B0aW9uYWx0aGVtZWRldGFpbHMnKSk7XG5cblxuICAgICAgICB2YXIgcG5nUkJOb2RlID0gJChcIiNwbmdJbWFnZUZvcm1hdFwiKTtcbiAgICAgICAgcG5nUkJOb2RlLm9uKFwiY2xpY2tcIiwgc2VsZi5fZ2V0SW1hZ2VCdXR0b25SYWRpb0J1dHRvbk9uQ2xpY2socG5nUkJOb2RlLCAncG5nJykpO1xuXG4gICAgICAgIHZhciBwZGZSQk5vZGUgPSAkKFwiI3BkZkltYWdlRm9ybWF0XCIpO1xuICAgICAgICBwZGZSQk5vZGUub24oXCJjbGlja1wiLCBzZWxmLl9nZXRJbWFnZUJ1dHRvblJhZGlvQnV0dG9uT25DbGljayhwZGZSQk5vZGUsICdwZGYnKSk7XG5cbiAgICAgICAgJChcIiNleHBvcnRDbG9zZVwiKS5vbihcImNsaWNrXCIsIHNlbGYuaGlkZUV4cG9ydE9wdGlvbik7XG5cbiAgICAgICAgJChcIi5raWxsT3BlbkJ1dHRvblwiKS5vbihcImNsaWNrXCIsIHNlbGYuX2hpZGVXYWl0aW5nUGFuZWwpOyAvL3RoZSBkaXNjYXJkIGJ1dHRvblxuXG4gICAgfTtcblxuICAgIHNlbGYuX2dldEltYWdlQnV0dG9uUmFkaW9CdXR0b25PbkNsaWNrID0gZnVuY3Rpb24gKG5vZGUsIGltYWdlRm9ybWF0KSB7XG5cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHNlbGYuX0ltYWdlRm9ybWF0ID0gaW1hZ2VGb3JtYXQ7XG4gICAgICAgICAgICBzZWxmLl9yZW1vdmVBbGxTZWxlY3RlZFJhZGlvQnV0dG9ucyhcImV4cG9ydE9wdGlvbnNDb250YWluZXJcIik7XG4gICAgICAgICAgICBub2RlLmFkZENsYXNzKFwiZXhwb3J0UmFkaW9CdXR0b25TZWxlY3RlZFwiKTtcbiAgICAgICAgfTtcbiAgICB9O1xuXG4gICAgc2VsZi5fZ2V0TGF5b3V0RWxlbWVudE9uQ2xpY2sgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy9Ub2dnbGUgQWN0aXZlIFN0YXRlXG4gICAgICAgICAgICBzZWxmLl9MYXlvdXRFbGVtZW50c1tlbGVtZW50XSA9ICFzZWxmLl9MYXlvdXRFbGVtZW50c1tlbGVtZW50XTtcblxuICAgICAgICAgICAgLy8kKFwiI2V4cG9ydE9wdGlvbnMgLmNoZWNrYm94XCIpLnJlbW92ZUNsYXNzKFwiY2hlY2tlZFwiKTtcbiAgICAgICAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ2NoZWNrZWQnKTtcbiAgICAgICAgfTtcbiAgICB9O1xuXG4gICAgc2VsZi5fcmVtb3ZlQWxsU2VsZWN0ZWRSYWRpb0J1dHRvbnMgPSBmdW5jdGlvbiAocGFyZW50RGl2SUQpIHtcbiAgICAgICAgJC5lYWNoKCQoXCIjXCIgKyBwYXJlbnREaXZJRCArIFwiIC5leHBvcnRSYWRpb0J1dHRvblNlbGVjdGVkXCIpLCBmdW5jdGlvbiAoaWR4LCBub2RlKSB7XG4gICAgICAgICAgICAkKG5vZGUpLnJlbW92ZUNsYXNzKFwiZXhwb3J0UmFkaW9CdXR0b25TZWxlY3RlZFwiKTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIHNlbGYuX2hpZGVMb2FkZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoXCIua25pZ2h0UmlkZXJMb2FkZXJcIikuY3NzKHtcImRpc3BsYXlcIjogXCJub25lXCJ9KTtcbiAgICB9XG5cbiAgICBzZWxmLl9zaG93TG9hZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAkKFwiLmtuaWdodFJpZGVyTG9hZGVyXCIpLmNzcyh7XCJkaXNwbGF5XCI6IFwiYmxvY2tcIn0pO1xuICAgIH1cblxuICAgIHRoaXMuc2hvd0V4cG9ydE9wdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJChcIiNleHBvcnRPcHRpb25zXCIpLmNzcyh7IFwiZGlzcGxheVwiOiBcImJsb2NrXCIgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5oaWRlRXhwb3J0T3B0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAkKFwiI2V4cG9ydE9wdGlvbnNcIikuY3NzKHsgXCJkaXNwbGF5XCI6IFwibm9uZVwiIH0pO1xuICAgIH1cblxuICAgIHNlbGYuX2tpbGxPcGVuSW1hZ2VCdXR0b24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vSGlkZSAnb3BlbiBpbWFnZScgYnV0dG9uIGFuZCBzaG93IGV4cG9ydCBidXR0b24uXG4gICAgICAgIHNlbGYuX3Nob3dFeHBvcnRCdXR0b25IaWRlTG9hZGVyKCk7XG4gICAgICAgICQoXCIuaW1hZ2VPcGVuQnV0dG9uXCIpLmNzcyh7XCJkaXNwbGF5XCI6IFwibm9uZVwifSk7XG4gICAgfVxuXG4gICAgc2VsZi5fb25FcnJvciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc2VsZi5faGlkZVdhaXRpbmdQYW5lbCgpO1xuICAgICAgICAvL0Rpc3BsYXkgZXJyb3IgbWVzc2FnZS5cbiAgICAgICAgJChcIi5leHBvcnRHcm91cFRpdGxlLmVycm9yXCIpLnJlcGxhY2UoXCI8c3Bhbj5UaGVyZSB3YXMgYW4gZXJyb3IgZXhwb3J0aW5nIHRoZSBpbWFnZS48L3NwYW4+XCIpO1xuICAgICAgICAkKFwiLmV4cG9ydEdyb3VwVGl0bGUuZXJyb3JcIikuY3NzKHtcImRpc3BsYXlcIjogXCJibG9ja1wifSk7XG4gICAgfVxuXG4gICAgc2VsZi5fZXhwb3J0SW1hZ2UgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgdmFyIHRpdGxlSFRNTCA9IFwiVGl0bGVcIjtcblxuICAgICAgICAvL3ZhciBsZWdlbmRzSFRNTCA9ICQoJzxkaXY+JykuYXBwZW5kKCQoXCIjTGF5ZXJMaXN0V3JhcHBlclwiKS5jbG9uZSgpKS5odG1sKCkucmVwbGFjZSgvXFxcIi9nLCAnXFxcXFwiJyk7XG5cblxuICAgICAgICB2YXIgbGF5b3V0V2lkdGggPSAkKFwiYm9keVwiKS53aWR0aCgpO1xuICAgICAgICB2YXIgbWFwSGVpZ2h0ID0gJChcIiNNYXBDdHJsXCIpLmhlaWdodCgpO1xuICAgICAgICB2YXIgbWFwV2lkdGggPSAkKFwiI01hcEN0cmxcIikud2lkdGgoKTtcblxuICAgICAgICB2YXIgY29kZWJsb2NrID0gXCJcIjtcbiAgICAgICAgLy9BZGp1c3QgYm9keSB3aWR0aFxuICAgICAgICBjb2RlYmxvY2sgKz0gJyQoXCJib2R5XCIpLndpZHRoKCcgKyAobWFwV2lkdGggKyAyMCkgKyAnKTsnO1xuXG4gICAgICAgIC8vTGFiZWwgc2VsZWN0ZWQgY291bnRyeVxuICAgICAgICAvL2NvZGVibG9jayArPSAnJChcIiNhY3RpdmVDb3VudHJ5XCIpLmh0bWwoIFwiJyArIF9GU1AuTWFwQnVpbGRlci5TZWxlY3RlZENvdW50cnkgKyAnXCIpOyc7XG5cbiAgICAgICAgLy9EZXBlbmRpbmcgb24gd2hhdCdzIGluIHRoZSBsYXlvdXRFbGVtZW50cyBhcnJheSwgZ3JhYiBkb20gbm9kZXNcbiAgICAgICAgLy92YXIgX3Nob3dOb25lID0gdHJ1ZTsgLy9mbGFnIHRvIGRldGVjdCBpZiB1c2VyIGNob3NlIG5vdGhpbmdcblxuLy8gICAgICAgIGZvciAodmFyIGtleSBpbiBzZWxmLl9MYXlvdXRFbGVtZW50cykge1xuLy8gICAgICAgICAgICBpZiAoc2VsZi5fTGF5b3V0RWxlbWVudHMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuLy8gICAgICAgICAgICAgICAgLy9JZiB1c2VyIGhhcyBzZWxlY3RlZCBldmVuIDEgZWxlbWVudCwgdGhlbiBzZXQgX3Nob3dOb25lIHRvIGZhbHNlOyAoYmVjYXVzZSB3ZSBhcmUgZ29pbmcgdG8gc2hvdyBzb21ldGhpbmcpXG4vLyAgICAgICAgICAgICAgICBpZiAoc2VsZi5fTGF5b3V0RWxlbWVudHNba2V5XSA9PT0gdHJ1ZSkge1xuLy8gICAgICAgICAgICAgICAgICAgIF9zaG93Tm9uZSA9IGZhbHNlO1xuLy8gICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgICAgc3dpdGNoIChrZXkpIHtcbi8vICAgICAgICAgICAgICAgICAgICBjYXNlIFwibWFwXCI6XG4vLyAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZWxmLl9MYXlvdXRFbGVtZW50c1trZXldID09PSB0cnVlKSB7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2dyYWIgdGhlIG1hcCBkaXZcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtYXBIVE1MID0gJCgnPGRpdj4nKS5hcHBlbmQoJChcIi5sZWFmbGV0LW1hcC1wYW5lXCIpLmNsb25lKCkpLmh0bWwoKS5yZXBsYWNlKC9cXFwiL2csICdcXFxcXCInKTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtYXBIVE1MLmluZGV4T2YoJy13ZWJraXQtdHJhbnNmb3JtJykgPT09IC0xKSB7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFwSFRNTCA9IG1hcEhUTUwucmVwbGFjZSgvLW1zLXRyYW5zZm9ybS9nLCAndHJhbnNmb3JtJykucmVwbGFjZSgvdHJhbnNmb3JtL2csICctd2Via2l0LXRyYW5zZm9ybScpO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29kZWJsb2NrICs9ICckKFwiI01hcEN0cmxcIikuaGVpZ2h0KCcgKyBtYXBIZWlnaHQgKyAnKTsnO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29kZWJsb2NrICs9ICckKFwiI01hcEN0cmxcIikucmVwbGFjZVdpdGgoXCInICsgbWFwSFRNTCArICdcIik7Jztcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vQWRqdXN0IE1hcCB3cmFwcGVyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2RlYmxvY2sgKz0gJyQoXCIjdXBwZXJNYXBXcmFwcGVyXCIpLndpZHRoKCcgKyAobWFwV2lkdGgpICsgJyk7Jztcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvZGVibG9jayArPSAnJChcIiN1cHBlck1hcFdyYXBwZXJcIikuaGVpZ2h0KCcgKyAobWFwSGVpZ2h0KSArICcpOyc7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2hpZGUgbWFwIGRpdlxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29kZWJsb2NrICs9ICckKFwiI3VwcGVyTWFwV3JhcHBlclwiKS5oaWRlKCk7Jztcbi8vICAgICAgICAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbi8vXG4vLyAgICAgICAgICAgICAgICAgICAgY2FzZSBcImxlZ2VuZFwiOlxuLy8gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZi5fTGF5b3V0RWxlbWVudHNba2V5XSA9PT0gdHJ1ZSkge1xuLy8vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbGVnZW5kc0hUTUwgPSAkKCc8ZGl2PicpLmFwcGVuZCgkKFwiI0xheWVyTGlzdFdyYXBwZXJcIikuY2xvbmUoKSkuaHRtbCgpLnJlcGxhY2UoL1xcXCIvZywgJ1xcXFxcIicpO1xuLy8vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2RlYmxvY2sgKz0gXCIkKCcjbGVnZW5kcycpLmFwcGVuZCgnXCIgKyBsZWdlbmRzSFRNTCArIFwiJyk7XCI7XG4vLy8vXG4vLy8vICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vQWRqdXN0IFRpdGxlIG9mIENJQ09zXG4vLy8vICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvZGVibG9jayArPSBcIiQoJyNsZWdlbmRzJykucHJlcGVuZCgkKCcjcGFyZW50Q0lDTycpKTtcIjtcbi8vLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29kZWJsb2NrICs9IFwiJCgnI2xlZ2VuZHMnKS5wcmVwZW5kKCQoJyNMYXllckxpc3RXcmFwcGVyIGhlYWRlcicpKTtcIjtcbi8vLy9cbi8vLy9cbi8vLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9Nb3ZlIHBhbmVsVGl0bGUgdG8gZ3JwQ0lDTy4gIDFzdCB0aGluZy5cbi8vLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29kZWJsb2NrICs9IFwiJCgnI2dycENJQ08nKS5wcmVwZW5kKCQoJy5wYW5lbFRpdGxlJykpO1wiO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9pZiBib3RoIG1hcCBhbmQgbGVnZW5kIGFyZSBleGNsdWRlZCwgaGlkZSB0aGUgd3JhcHBlciB3aXRoIGJvcmRlclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGYuX0xheW91dEVsZW1lbnRzW1wibWFwXCJdICE9IHRydWUpIHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2RlYmxvY2sgKz0gJyQoXCIjdXBwZXJNYXBXcmFwcGVyXCIpLmNzcyh7XCJkaXNwbGF5XCI6IFwibm9uZVwifSk7Jztcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbi8vXG4vLyAgICAgICAgICAgICAgICAgICAgY2FzZSBcIm9wdGlvbmFsdGhlbWVkZXRhaWxzXCI6XG4vLyAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZWxmLl9MYXlvdXRFbGVtZW50c1trZXldID09PSB0cnVlKSB7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyNEZXRhaWxzUGFuZWwgLnRpdGxlLm5nLWJpbmRpbmdcbi8vXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgQ09IVE1MID0gJCgnPGRpdj4nKS5hcHBlbmQoJChcIiNEZXRhaWxzUGFuZWwgLklubmVyQ29udGFpbmVyLnNjcm9sbGFibGVcIikuY2xvbmUoKS5hZGRDbGFzcyhcIm9uXCIpKS5odG1sKCkucmVwbGFjZSgvXFxcIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvPCEtLSguKj8pLS0+L2dtLCBcIlwiKTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvZGVibG9jayArPSBcIiQoJyN1eFRoZW1lRGV0YWlscycpLmFwcGVuZCgnXCIgKyBDT0hUTUwgKyBcIicpO1wiO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuLy8gICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICB9XG4vLyAgICAgICAgfVxuXG4vLyAgICAgICAgaWYgKF9zaG93Tm9uZSA9PSB0cnVlKSB7XG4vLyAgICAgICAgICAgIC8vRG9uJ3QgZG8gYW55dGhpbmcsIGNhdXNlIHVzZXIgaGFzbid0IHNlbGVjdGVkIGFueXRoaW5nLlxuLy8gICAgICAgICAgICAkKFwiI2V4cG9ydE1lc3NhZ2VcIikuaHRtbChcIlBsZWFzZSBzZWxlY3QgMSBvciBtb3JlIGVsZW1lbnRzIHRvIGV4cG9ydC5cIik7XG4vLyAgICAgICAgICAgIHJldHVybjtcbi8vICAgICAgICB9XG4vLyAgICAgICAgZWxzZSB7XG4vLyAgICAgICAgICAgICQoXCIjZXhwb3J0TWVzc2FnZVwiKS5odG1sKFwiXCIpO1xuLy8gICAgICAgIH1cblxuICAgICAgICAvL3Nob3cgbG9hZGVyXG4gICAgICAgIHNlbGYuX3Nob3dXYWl0aW5nUGFuZWwoKTtcblxuICAgICAgICAvL2Zvcm1hdHRpbmdcbiAgICAgICAgLy9jb2RlYmxvY2sgPSBjb2RlYmxvY2sucmVwbGFjZSgvKFxcclxcbnxcXG58XFxyKS9nbSwgXCJcIik7ICAvL3JlbW92ZSBsaW5lIGJyZWFrc1xuXG4gICAgICAgIHZhciBwcmludFBvc3RBcmdzID0ge1xuICAgICAgICAgICAgLy91cmw6ICdodHRwOi8vZ2VvLnJlZGNyb3NzLmNvbS9tYXBmb2xpby9wcmludC5odG0nLFxuICAgICAgICAgICAgdXJsOiAkc2NvcGUucm91dGVVcmwuaHJlZi5yZXBsYWNlKFwibWFwZm9saW8vI1wiLCBcIm1hcGZvbGlvL3ByaW50Lmh0bWwjXCIpLnJlcGxhY2UoXCJtYXBmb2xpby9pbmRleC5odG1sI1wiLCBcIm1hcGZvbGlvL3ByaW50Lmh0bWwjXCIpLnJlcGxhY2UoXCIvZXhwb3J0XCIsIFwiXCIpLnJlcGxhY2UoXCJodHRwOi8vbG9jYWxob3N0OjMwMDFcIiwgXCJodHRwczovL2dlby5yZWRjcm9zcy5vcmdcIiksIC8vU3dhcCB0aGUgY3VycmVudCB1cmwgZm9yIHRoZSBwcmludCB1cmxcbiAgICAgICAgICAgIGltYWdlZm9ybWF0OiBzZWxmLl9JbWFnZUZvcm1hdCB8fCAncG5nJyxcbiAgICAgICAgICAgIGZvcm1hdDogJ2pzb24nLFxuICAgICAgICAgICAgLy9jb2RlYmxvY2s6IGNvZGVibG9jayxcbiAgICAgICAgICAgIHZpZXdwb3J0aGVpZ2h0OiBtYXBIZWlnaHQsXG4gICAgICAgICAgICB2aWV3cG9ydHdpZHRoOiBsYXlvdXRXaWR0aCxcbiAgICAgICAgICAgIGRlbGF5OiA1MDAwIC8vdGltZSB0byB3YWl0IGluIG1zXG4gICAgICAgIH07XG5cblxuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXG4gICAgICAgICAgICB1cmw6ICdodHRwOi8vcHJpbnQuc3BhdGlhbGRldi5jb20nLFxuICAgICAgICAgICAgZGF0YTogcHJpbnRQb3N0QXJncyxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHNlbGYuX29uSW1hZ2VFeHBvcnQsXG4gICAgICAgICAgICBlcnJvcjogc2VsZi5fb25FcnJvclxuICAgICAgICB9KTtcblxuICAgIH07XG5cbiAgICBzZWxmLl9vbkltYWdlRXhwb3J0ID0gZnVuY3Rpb24gKHJlc3VsdCkge1xuXG4gICAgICAgIHZhciBleHBvcnRJbWFnZVVSTCA9IHJlc3VsdC5pbWFnZTtcblxuICAgICAgICAvL2luc3RlYWQsIHNob3cgYSBidXR0b24vaHlwZXJsaW5rIGZvciB0aGUgdXNlciB0byBvcGVuIHRoZSBpbWFnZS5cbiAgICAgICAgJChcIi5pbWFnZU9wZW5CdXR0b24gYVwiKS5hdHRyKFwiaHJlZlwiLCBleHBvcnRJbWFnZVVSTCk7XG4gICAgICAgICQoXCIuaW1hZ2VPcGVuQnV0dG9uXCIpLmNzcyh7XCJkaXNwbGF5XCI6IFwiYmxvY2tcIn0pO1xuXG4gICAgICAgIC8vSGlkZSBsb2FkZXJcbiAgICAgICAgc2VsZi5faGlkZUxvYWRlcigpO1xuICAgIH07XG5cbiAgICBzZWxmLl9pbml0KCk7XG59KTtcbiIsIi8qKlxuICogQ3JlYXRlZCBieSBOaWNob2xhcyBIYWxsYWhhbiA8bmhhbGxhaGFuQHNwYXRpYWxkZXYuY29tPlxuICogICAgICAgb24gMy8yNy8xNC5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdHZW9Bbmd1bGFyJykuY29udHJvbGxlcignRmlsdGVyc0N0cmwnLCBmdW5jdGlvbigkc2NvcGUsICRodHRwLCAkc3RhdGUsICRzdGF0ZVBhcmFtcykge1xuICAkc2NvcGUucGFyYW1zID0gJHN0YXRlUGFyYW1zO1xuICAkc2NvcGUubmF2VGFiID0gJ3NlY3RvcnMnO1xuICAkc2NvcGUuc2VjdG9ycyA9IFtdO1xuICAkc2NvcGUuc3RhdHVzID0gW107XG4gIGRlYnVnLmJ1ZGdldCA9ICRzY29wZS5idWRnZXQgPSB7XG4gICAgc2xpZGVyOiBbMjAwMCwgODAwMF0sXG4gICAgbWluOiAwLFxuICAgIG1lYW46IDUwMDAsXG4gICAgbWF4OiAxMDAwMDBcbiAgfTtcblxuICAvKipcbiAgICogR2V0IGNoZWNrYm94IGluZm8gdGhhdCB3YXMgZ2VuZXJhdGVkIGJ5IHRoZSBTdWNjdWJ1cy5cbiAgICovXG4gICRodHRwLmdldCgnc3VjY3VidXNfZ2l0aWdub3JlL3NmLXByb2plY3QtZmlsdGVyLWNoZWNrYm94ZXMuanNvbicsIHtjYWNoZTogdHJ1ZX0pLnN1Y2Nlc3MoZnVuY3Rpb24gKGRhdGEsIHN0YXR1cykge1xuICAgIGFuZ3VsYXIuZXh0ZW5kKCRzY29wZSwgZGF0YSk7XG4gICAgZGVidWcuZmlsdGVyc1Njb3BlID0gJHNjb3BlO1xuICB9KS5lcnJvcihmdW5jdGlvbigpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiVW5hYmxlIHRvIGZldGNoIHByb2plY3QgZmlsdGVyIG1ldGEgZGF0YVwiKTtcbiAgfSk7XG5cbiAgLyoqXG4gICAqIEdldCBidWRnZXQgc3RhdHMgZnJvbSBDaHViYnMgLSBkeW5hbWljIGZyb20gUG9zdEdJUy5cbiAgICovXG4gICRodHRwLmdldChjb25maWcuY2h1YmJzUGF0aCgnc2VydmljZXMvY3VzdG9tL2N1c3RvbV9vcGVyYXRpb24/bmFtZT1wcm9qZWN0dG90YWxidWRnZXQmZm9ybWF0PWpzb24nKSwge2NhY2hlOiB0cnVlfSkuc3VjY2VzcyhmdW5jdGlvbiAoZGF0YSwgc3RhdHVzKSB7XG4gICAgaWYgKGRhdGEubGVuZ3RoID4gMCkge1xuICAgICAgJHNjb3BlLmJ1ZGdldC5taW4gPSBkYXRhWzBdLm1pbjtcbiAgICAgICRzY29wZS5idWRnZXQubWVhbiA9IGRhdGFbMF0uYXZnO1xuICAgICAgJHNjb3BlLmJ1ZGdldC5tYXggPSBkYXRhWzBdLm1heDtcbiAgICAgICRzY29wZS5idWRnZXQuc2xpZGVyID0gW2RhdGFbMF0ubWluLCBkYXRhWzBdLm1heF07XG4gICAgfVxuICB9KS5lcnJvcihmdW5jdGlvbigpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiVW5hYmxlIHRvIGZldGNoIFRvdGFsIEJ1ZGdldCBNaW4sIE1lYW4sIE1heFwiKTtcbiAgfSk7XG5cbiAgJHNjb3BlLmRhdGVGaWx0ZXJzID0gW1xuICAgIHtcbiAgICAgIG5hbWU6ICdTdGFydCBEYXRlJyxcbiAgICAgIHJhZGlvOiAnb24nLFxuICAgICAgZW1wdHk6IHRydWUsXG4gICAgICBvcGVuZWQ6IGZhbHNlXG4gICAgfSx7XG4gICAgICBuYW1lOiAnRW5kIERhdGUnLFxuICAgICAgcmFkaW86ICdvbicsXG4gICAgICBlbXB0eTogdHJ1ZSxcbiAgICAgIG9wZW5lZDogZmFsc2VcbiAgICB9LHtcbiAgICAgIG5hbWU6ICdDcmVhdGUgRGF0ZScsXG4gICAgICByYWRpbzogJ29uJyxcbiAgICAgIGVtcHR5OiB0cnVlLFxuICAgICAgb3BlbmVkOiBmYWxzZVxuICAgIH0se1xuICAgICAgbmFtZTogJ0xhc3QgTW9kaWZpZWQnLFxuICAgICAgcmFkaW86ICdvbicsXG4gICAgICBlbXB0eTogdHJ1ZSxcbiAgICAgIG9wZW5lZDogZmFsc2VcbiAgICB9XG4gIF07XG5cbiAgJHNjb3BlLnRvZ2dsZURhdGUgPSBmdW5jdGlvbigkZXZlbnQsIGRhdGVGaWx0ZXIpIHtcbiAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICBkYXRlRmlsdGVyLm9wZW5lZCA9ICFkYXRlRmlsdGVyLm9wZW5lZDtcbiAgfTtcblxuICAkc2NvcGUuc2VjdG9yc0ZpbHRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2VjdG9ycyA9ICRzY29wZS5zZWN0b3JzO1xuICAgICRzY29wZS5zZWN0b3JDbGF1c2UgPSBudWxsO1xuICAgIHZhciBmaXJzdCA9IHRydWU7XG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHNlY3RvcnMubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgICAgIHZhciBzZWN0b3IgPSBzZWN0b3JzW2ldO1xuICAgICAgaWYgKHNlY3Rvci5jaGVja2VkKSB7XG4gICAgICAgIGlmIChmaXJzdCkge1xuICAgICAgICAgICRzY29wZS5zZWN0b3JDbGF1c2UgPSBcInNlY3Rvcl9fYyBMSUtFICclXCIgKyBzZWN0b3IubmFtZSArIFwiJScgXCI7XG4gICAgICAgICAgZmlyc3QgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAkc2NvcGUuc2VjdG9yQ2xhdXNlICs9IFwiT1Igc2VjdG9yX19jIExJS0UgJyVcIiArIHNlY3Rvci5uYW1lICsgXCIlJyBcIjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAkc2NvcGUuY29tcG9zZVdoZXJlQ2xhdXNlKCk7XG4gIH07XG5cbiAgJHNjb3BlLmNsZWFyU2VjdG9yc0ZpbHRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2VjdG9ycyA9ICRzY29wZS5zZWN0b3JzO1xuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBzZWN0b3JzLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICBzZWN0b3JzW2ldLmNoZWNrZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgJHNjb3BlLnNlY3RvckNsYXVzZSA9IG51bGw7XG4gICAgJHNjb3BlLmNvbXBvc2VXaGVyZUNsYXVzZSgpO1xuICB9O1xuXG4gICRzY29wZS5zdGF0dXNGaWx0ZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHN0YXR1cyA9ICRzY29wZS5zdGF0dXM7XG4gICAgJHNjb3BlLnN0YXR1c0NsYXVzZSA9IG51bGw7XG4gICAgdmFyIGZpcnN0ID0gdHJ1ZTtcbiAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gc3RhdHVzLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICB2YXIgc3RhdCA9IHN0YXR1c1tpXTtcbiAgICAgIGlmIChzdGF0LmNoZWNrZWQpIHtcbiAgICAgICAgaWYgKGZpcnN0KSB7XG4gICAgICAgICAgJHNjb3BlLnN0YXR1c0NsYXVzZSA9IFwic3RhdHVzX19jIExJS0UgJyVcIiArIHN0YXQubmFtZSArIFwiJScgXCI7XG4gICAgICAgICAgZmlyc3QgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAkc2NvcGUuc3RhdHVzQ2xhdXNlICs9IFwiT1Igc3RhdHVzX19jIExJS0UgJyVcIiArIHN0YXQubmFtZSArIFwiJScgXCI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgJHNjb3BlLmNvbXBvc2VXaGVyZUNsYXVzZSgpO1xuICB9O1xuXG4gICRzY29wZS5jbGVhclN0YXR1c0ZpbHRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc3RhdHVzID0gJHNjb3BlLnN0YXR1cztcbiAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gc3RhdHVzLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICBzdGF0dXNbaV0uY2hlY2tlZCA9IGZhbHNlO1xuICAgIH1cbiAgICAkc2NvcGUuc3RhdHVzQ2xhdXNlID0gbnVsbDtcbiAgICAkc2NvcGUuY29tcG9zZVdoZXJlQ2xhdXNlKCk7XG4gIH07XG5cbiAgJHNjb3BlLmRhdGVGaWx0ZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgJHNjb3BlLmRhdGVDbGF1c2UgPSBudWxsO1xuICAgIHZhciBfZmlyc3QgPSB0cnVlO1xuICAgIHZhciBmaXJzdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChfZmlyc3QpIHtcbiAgICAgICAgX2ZpcnN0ID0gZmFsc2U7XG4gICAgICAgIHJldHVybiAnJztcbiAgICAgIH1cbiAgICAgIHJldHVybiAnIEFORCAnO1xuICAgIH07XG4gICAgdmFyIGRhdGVGaWx0ZXJzID0gJHNjb3BlLmRhdGVGaWx0ZXJzO1xuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBkYXRlRmlsdGVycy5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICAgICAgdmFyIGZpbHRlciA9IGRhdGVGaWx0ZXJzW2ldO1xuXG4gICAgICBpZiAoZmlsdGVyLm5hbWUgPT09ICdTdGFydCBEYXRlJyAmJiBmaWx0ZXIuZGF0ZSkge1xuICAgICAgICAkc2NvcGUuZGF0ZUNsYXVzZSA9IGZpcnN0KCkgKyAnc3RhcnRfZGF0ZV9fYycgKyBjb21wYXJlKGZpbHRlcikgKyBcIidcIiArIGRhdGVTdHJpbmcoZmlsdGVyLmRhdGUpICsgXCInXCI7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoZmlsdGVyLm5hbWUgPT09ICdFbmQgRGF0ZScgJiYgZmlsdGVyLmRhdGUpIHtcbiAgICAgICAgJHNjb3BlLmRhdGVDbGF1c2UgPSBmaXJzdCgpICsgJ2VuZF9kYXRlX19jJyArIGNvbXBhcmUoZmlsdGVyKSArIFwiJ1wiICsgZGF0ZVN0cmluZyhmaWx0ZXIuZGF0ZSkgKyBcIidcIjtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChmaWx0ZXIubmFtZSA9PT0gJ0NyZWF0ZSBEYXRlJyAmJiBmaWx0ZXIuZGF0ZSkge1xuICAgICAgICAkc2NvcGUuZGF0ZUNsYXVzZSA9IGZpcnN0KCkgKyAnY3JlYXRlZGF0ZScgKyBjb21wYXJlKGZpbHRlcikgKyBcIidcIiArIGRhdGVTdHJpbmcoZmlsdGVyLmRhdGUpICsgXCInXCI7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoZmlsdGVyLm5hbWUgPT09ICdMYXN0IE1vZGlmaWVkJyAmJiBmaWx0ZXIuZGF0ZSkge1xuICAgICAgICAkc2NvcGUuZGF0ZUNsYXVzZSA9IGZpcnN0KCkgKyAnbGFzdG1vZGlmaWVkZGF0ZScgKyBjb21wYXJlKGZpbHRlcikgKyBcIidcIiArIGRhdGVTdHJpbmcoZmlsdGVyLmRhdGUpICsgXCInXCI7XG4gICAgICB9XG5cbiAgICB9XG4gICAgJHNjb3BlLmNvbXBvc2VXaGVyZUNsYXVzZSgpO1xuICB9O1xuXG4gICRzY29wZS5jbGVhckRhdGVGaWx0ZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgJHNjb3BlLmRhdGVGaWx0ZXJzID0gW1xuICAgICAge1xuICAgICAgICBuYW1lOiAnU3RhcnQgRGF0ZScsXG4gICAgICAgIHJhZGlvOiAnb24nLFxuICAgICAgICBlbXB0eTogdHJ1ZSxcbiAgICAgICAgb3BlbmVkOiBmYWxzZSxcbiAgICAgICAgZGF0ZTogbnVsbFxuICAgICAgfSx7XG4gICAgICAgIG5hbWU6ICdFbmQgRGF0ZScsXG4gICAgICAgIHJhZGlvOiAnb24nLFxuICAgICAgICBlbXB0eTogdHJ1ZSxcbiAgICAgICAgb3BlbmVkOiBmYWxzZSxcbiAgICAgICAgZGF0ZTogbnVsbFxuICAgICAgfSx7XG4gICAgICAgIG5hbWU6ICdDcmVhdGUgRGF0ZScsXG4gICAgICAgIHJhZGlvOiAnb24nLFxuICAgICAgICBlbXB0eTogdHJ1ZSxcbiAgICAgICAgb3BlbmVkOiBmYWxzZSxcbiAgICAgICAgZGF0ZTogbnVsbFxuICAgICAgfSx7XG4gICAgICAgIG5hbWU6ICdMYXN0IE1vZGlmaWVkJyxcbiAgICAgICAgcmFkaW86ICdvbicsXG4gICAgICAgIGVtcHR5OiB0cnVlLFxuICAgICAgICBvcGVuZWQ6IGZhbHNlLFxuICAgICAgICBkYXRlOiBudWxsXG4gICAgICB9XG4gICAgXTtcbiAgICAkc2NvcGUuZGF0ZUNsYXVzZSA9IG51bGw7XG4gICAgJHNjb3BlLmNvbXBvc2VXaGVyZUNsYXVzZSgpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBVc2VkIGluIGRhdGVGaWx0ZXIuIERldGVybWluZXMgdGhlIHByb3BlciBTUUwgY29tcGFyYXRvciB0byB1c2VcbiAgICogZm9yIGZpbHRlcmluZyBhIGRhdGUuXG4gICAqXG4gICAqIEBwYXJhbSBmaWx0ZXJcbiAgICovXG4gIGZ1bmN0aW9uIGNvbXBhcmUoZmlsdGVyKSB7XG4gICAgdmFyIHJhZGlvID0gZmlsdGVyLnJhZGlvO1xuICAgIGlmIChyYWRpbyA9PT0gJ29uJykge1xuICAgICAgcmV0dXJuICc9JztcbiAgICB9XG4gICAgaWYgKHJhZGlvID09PSAnYmVmb3JlJykge1xuICAgICAgcmV0dXJuICc8JztcbiAgICB9XG4gICAgaWYgKHJhZGlvID09PSAnYWZ0ZXInKSB7XG4gICAgICByZXR1cm4gJz4nO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGRhdGUgYXMgWVlZWS1NTS1ERFxuICAgKlxuICAgKiBAcGFyYW0gZGF0ZVxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKi9cbiAgZnVuY3Rpb24gZGF0ZVN0cmluZyhkYXRlKSB7XG4gICAgcmV0dXJuIGRhdGUudG9JU09TdHJpbmcoKS5zbGljZSgwLDEwKTtcbiAgfVxuXG4gICRzY29wZS5idWRnZXRGaWx0ZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgJHNjb3BlLmJ1ZGdldENsYXVzZSA9IG51bGw7XG4gICAgdmFyIG1pbiA9ICRzY29wZS5idWRnZXQuc2xpZGVyWzBdO1xuICAgIHZhciBtYXggPSAkc2NvcGUuYnVkZ2V0LnNsaWRlclsxXTtcbiAgICBpZiAobWluICE9PSAwICYmIG1heCAhPT0gJHNjb3BlLmJ1ZGdldC5tYXgpIHsgLy9ib3RoIG1pbiBhbmQgbWF4IGNoYW5nZWRcbiAgICAgICRzY29wZS5idWRnZXRDbGF1c2UgPSAndG90YWxfYnVkZ2V0X19jPj0nICsgbWluICsgJyBBTkQgdG90YWxfYnVkZ2V0X19jPD0nICsgbWF4O1xuICAgIH0gZWxzZSBpZiAobWluICE9PSAwKSB7IC8vIG9ubHkgbWluIGNoYW5nZWRcbiAgICAgICRzY29wZS5idWRnZXRDbGF1c2UgPSAndG90YWxfYnVkZ2V0X19jPj0nICsgbWluXG4gICAgfSBlbHNlIGlmIChtYXggIT09ICRzY29wZS5idWRnZXQubWF4KSB7IC8vIG9ubHkgbWF4IGNoYW5nZWRcbiAgICAgICRzY29wZS5idWRnZXRDbGF1c2UgPSAndG90YWxfYnVkZ2V0X19jPD0nICsgbWF4O1xuICAgIH1cbiAgICAkc2NvcGUuY29tcG9zZVdoZXJlQ2xhdXNlKCk7XG4gIH07XG5cbiAgJHNjb3BlLmNsZWFyQnVkZ2V0RmlsdGVyID0gZnVuY3Rpb24gKCkge1xuICAgICRzY29wZS5idWRnZXQuc2xpZGVyWzBdID0gJHNjb3BlLmJ1ZGdldC5taW47XG4gICAgJHNjb3BlLmJ1ZGdldC5zbGlkZXJbMV0gPSAkc2NvcGUuYnVkZ2V0Lm1heDtcbiAgICAkc2NvcGUuYnVkZ2V0Q2xhdXNlID0gbnVsbDtcbiAgICAkc2NvcGUuY29tcG9zZVdoZXJlQ2xhdXNlKCk7XG4gIH07XG5cbiAgJHNjb3BlLmNvbXBvc2VXaGVyZUNsYXVzZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAkc2NvcGUud2hlcmVDbGF1c2UgPSBudWxsO1xuICAgIHZhciBwYXJ0cyA9IFskc2NvcGUuc2VjdG9yQ2xhdXNlLCAkc2NvcGUuZGF0ZUNsYXVzZSwgJHNjb3BlLnN0YXR1c0NsYXVzZSwgJHNjb3BlLmJ1ZGdldENsYXVzZV07XG4gICAgdmFyIGZpcnN0ID0gdHJ1ZTtcbiAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gcGFydHMubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgICAgIHZhciBwYXJ0ID0gcGFydHNbaV07XG4gICAgICBpZiAocGFydCkge1xuICAgICAgICBpZiAoZmlyc3QpIHtcbiAgICAgICAgICAkc2NvcGUud2hlcmVDbGF1c2UgPSBwYXJ0O1xuICAgICAgICAgIGZpcnN0ID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgJHNjb3BlLndoZXJlQ2xhdXNlICs9ICdBTkQgJyArIHBhcnQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCEkc2NvcGUud2hlcmVDbGF1c2UpICRzY29wZS53aGVyZUNsYXVzZSA9ICdudWxsJztcbiAgICAkc2NvcGUuc3VibWl0RmlsdGVyKCk7XG4gIH07XG5cbiAgJHNjb3BlLnN1Ym1pdEZpbHRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAkc3RhdGVQYXJhbXMuZmlsdGVycyA9ICRzY29wZS53aGVyZUNsYXVzZTtcbiAgICB2YXIgc3RhdGUgPSAkc3RhdGUuY3VycmVudC5uYW1lIHx8ICdtYWluJztcbiAgICAkc3RhdGUuZ28oc3RhdGUsICRzdGF0ZVBhcmFtcyk7XG4gIH07XG5cbiAgJHNjb3BlLmNsZWFyQWxsRmlsdGVycyA9IGZ1bmN0aW9uICgpIHtcbiAgICAkc2NvcGUuY2xlYXJTZWN0b3JzRmlsdGVyKCk7XG4gICAgJHNjb3BlLmNsZWFyU3RhdHVzRmlsdGVyKCk7XG4gICAgJHNjb3BlLmNsZWFyRGF0ZUZpbHRlcigpO1xuICAgICRzY29wZS5jbGVhckJ1ZGdldEZpbHRlcigpO1xuICB9O1xuXG59KTtcbiIsIi8qKlxuICogQ3JlYXRlZCBieSBOaWNob2xhcyBIYWxsYWhhbiA8bmhhbGxhaGFuQHNwYXRpYWxkZXYuY29tPlxuICogICAgICAgb24gMy8yNy8xNC5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdHZW9Bbmd1bGFyJykuY29udHJvbGxlcignSW5mb0N0cmwnLCBmdW5jdGlvbigkc2NvcGUpIHtcbiAgJHNjb3BlLnBhcmFtcyA9ICRzdGF0ZVBhcmFtcztcbn0pOyIsIi8qKlxuICogQ3JlYXRlZCBieSBOaWNob2xhcyBIYWxsYWhhbiA8bmhhbGxhaGFuQHNwYXRpYWxkZXYuY29tPlxuICogICAgICAgb24gMy8yNy8xNC5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdHZW9Bbmd1bGFyJykuY29udHJvbGxlcignTGF5ZXJzQ3RybCcsIGZ1bmN0aW9uKCRzY29wZSwgJHN0YXRlLCAkc3RhdGVQYXJhbXMsIExheWVyQ29uZmlnLCBWZWN0b3JQcm92aWRlcikge1xuICAkc2NvcGUucGFyYW1zID0gJHN0YXRlUGFyYW1zO1xuICAkc2NvcGUuem9vbSA9IHBhcnNlSW50KCRzdGF0ZVBhcmFtcy56b29tKTtcbiAgJHNjb3BlLm5hdlRhYiA9ICdjb250ZXh0dWFsJztcblxuICBkZWJ1Zy5MYXllckNvbmZpZyA9IExheWVyQ29uZmlnO1xuICBkZWJ1Zy5zZXRHYWRtTGV2ZWwgPSBWZWN0b3JQcm92aWRlci5zZXRHYWRtTGV2ZWw7XG5cbiAgJHNjb3BlLmdhZG1MZXZlbCA9ICRzdGF0ZVBhcmFtcy5sZXZlbCB8fCAnYXV0byc7XG5cbiAgJHNjb3BlLnRoZW1lTGF5ZXIgPSBMYXllckNvbmZpZy50aGVtZTtcbiAgLy8kc2NvcGUudGhlbWVjb3VudExheWVyID0gTGF5ZXJDb25maWcudGhlbWVjb3VudDtcblxuICAkc2NvcGUuc2V0QmFkZ2VzID0gZnVuY3Rpb24oYm9vbCkge1xuICAgIC8vUlcgLSBUT0RPIC0gSW1wbGVtZW50IHRoaXMgb3B0aW9uIGZvciB2ZWN0b3IgdGlsZXMuXG4gICAgLy9pZiAoYm9vbCkge1xuICAgIC8vICAkc2NvcGUudGhlbWVMYXllci5hY3RpdmUgPSBmYWxzZTtcbiAgICAvL30gZWxzZSB7XG4gICAgLy8gICRzY29wZS50aGVtZUxheWVyLmFjdGl2ZSA9IHRydWU7XG4gICAgLy99XG4gICAgLy8kc2NvcGUudG9nZ2xlTWFwTGF5ZXIoJ3RoZW1lY291bnQnLCAkc2NvcGUudGhlbWVjb3VudExheWVyKTtcbiAgICAvLyRzY29wZS50b2dnbGVNYXBMYXllcigndGhlbWUnLCAkc2NvcGUudGhlbWVMYXllcik7XG5cbiAgfTtcblxuICAkc2NvcGUuJHdhdGNoKCdnYWRtTGV2ZWwnLCBmdW5jdGlvbiAobmV3VmFsdWUpIHtcbiAgICAkc3RhdGVQYXJhbXMubGV2ZWwgPSBuZXdWYWx1ZTtcbiAgICB2YXIgc3RhdGUgPSAkc3RhdGUuY3VycmVudC5uYW1lIHx8ICdtYWluJztcbiAgICAkc3RhdGUuZ28oc3RhdGUsICRzdGF0ZVBhcmFtcyk7XG4gIH0pO1xuXG4gICRzY29wZS4kb24oJ2xldmVsLXVwZGF0ZScsIGZ1bmN0aW9uICgpIHtcbiAgICBWZWN0b3JQcm92aWRlci5zZXRHYWRtTGV2ZWwoJHN0YXRlUGFyYW1zLmxldmVsKTtcbiAgICAkc2NvcGUuZ2FkbUxldmVsID0gJHN0YXRlUGFyYW1zLmxldmVsXG4gIH0pO1xuXG4gICRzY29wZS4kb24oJ3pvb20tdXBkYXRlJywgZnVuY3Rpb24gKCkge1xuICAgIGNvbnNvbGUubG9nKFwiem9vbTogXCIgKyAkc3RhdGVQYXJhbXMuem9vbSk7XG4gICAgJHNjb3BlLnpvb20gPSBwYXJzZUludCgkc3RhdGVQYXJhbXMuem9vbSk7XG4gIH0pO1xuXG4gIC8qKlxuICAgKiBUaGlzIGlzIHRoZSBjb2xsZWN0aW9uIG9mIGFsbCBvZiB0aGUgbGF5ZXJzIHdlIGhhdmUuXG4gICAqIFRoaXMgaXMgdXNlZCBieSB0aGUgc2VhcmNoTGF5ZXJzRmlsdGVyLlxuICAgKi9cbiAgJHNjb3BlLmFsbExheWVycyA9IHt9O1xuICAvLyBidWlsZGluZyB0aGUgYWxsTGF5ZXJzIG1vZGVsXG4gIGZvciAodmFyIGsgaW4gTGF5ZXJDb25maWcpIHtcbiAgICB2YXIgbGF5ZXIgPSBMYXllckNvbmZpZ1trXTtcblxuICAgIC8vIFdlIGRvbid0IHdhbnQgdG8gc2hvdyBsYXllcnMgdGhhdCBhcmUgYmFzZW1hcHMsIGFuZCB3ZSBkb24ndCB3YW50IHRvIHNob3cgdGhlIGZpbmQgZnVuYy5cbiAgICAgIGlmICggIHR5cGVvZiBsYXllciA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgfHwgayA9PT0gJ2Jhc2VtYXBzJ1xuICAgICAgfHwgayA9PT0gJ2Jib3gnXG4gICAgICB8fCBsYXllci50eXBlID09PSAnYmFzZW1hcCcgKSB7XG5cbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgICRzY29wZS5hbGxMYXllcnNba10gPSBrZXlUb09iaihrKTtcbiAgfVxuXG4gICRzY29wZS5sYXllcnNQYW5lbHMgPSB7XG4vLyAgICAnQm91bmRhcmllcyc6IHt9LFxuLy8gICAgJ0dlb0pTT04nOiB7fSxcbi8vICAgICdLTUwnOiB7fSxcbi8vICAgICdDU1YnOiB7fSxcbi8vICAgICdXTVMnOiB7fSxcbiAgICAnQ29udGV4dHVhbCBsYXllcnM6Jzoge31cbiAgfTtcblxuICBmdW5jdGlvbiBidWlsZExheWVyc01vZGVsKCkge1xuICAgICRzY29wZS5sYXllcnNQYW5lbHNbJ0NvbnRleHR1YWwgbGF5ZXJzOiddID0ge307XG4gICAgZm9yICh2YXIgbGF5ZXJLZXkgaW4gTGF5ZXJDb25maWcpIHtcbiAgICAgIHZhciBsYXllciA9IExheWVyQ29uZmlnW2xheWVyS2V5XTtcblxuICAgICAgLy8gV2UgZG9uJ3Qgd2FudCB0byBzaG93IGxheWVycyB0aGF0IGFyZSBiYXNlbWFwcywgYW5kIHdlIGRvbid0IHdhbnQgdG8gc2hvdyB0aGUgZmluZCBmdW5jLlxuICAgICAgaWYgKCAgdHlwZW9mIGxheWVyID09PSAnZnVuY3Rpb24nXG4gICAgICAgIHx8IGxheWVyS2V5ID09PSAnYmFzZW1hcHMnXG4gICAgICAgIHx8IGxheWVyS2V5ID09PSAnYmJveCdcbiAgICAgICAgfHwgbGF5ZXIudHlwZSA9PT0gJ2Jhc2VtYXAnICkge1xuXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoISRzY29wZS4kc3RhdGVQYXJhbXMudGhlbWUpIHtcbiAgICAgICAgdmFyIHRoZW1lID0gJ3Byb2plY3QnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHRoZW1lID0gJHNjb3BlLiRzdGF0ZVBhcmFtcy50aGVtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWxheWVyLnRoZW1lIHx8IChsYXllci50aGVtZS50b0xvd2VyQ2FzZSgpICE9PSAnYWxsJyAmJiBsYXllci50aGVtZS50b0xvd2VyQ2FzZSgpICE9PSB0aGVtZSkgKSB7XG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgICRzY29wZS5sYXllcnNQYW5lbHNbJ0NvbnRleHR1YWwgbGF5ZXJzOiddW2xheWVyS2V5XSA9IGtleVRvT2JqKGxheWVyS2V5KTtcblxuICAgIH1cbiAgfVxuICBidWlsZExheWVyc01vZGVsKCk7XG5cbiAgZGVidWcubGF5ZXJzUGFuZWxzID0gJHNjb3BlLmxheWVyc1BhbmVscztcblxuICBmdW5jdGlvbiBrZXlUb09iaihrZXkpIHtcbiAgICB2YXIgdmFsID0gTGF5ZXJDb25maWdba2V5XTtcbiAgICBpZiAodHlwZW9mIHZhbCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHVybDogdmFsXG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gdmFsO1xuICB9XG5cbiAgLy9OSCBUT0RPOiBOb3QgeWV0IGZ1bGx5IGltcGxlbWVudGVkIC0gcG9zc2libGUgZXh0cmEgZmVhdHVyZS4uLlxuICAvKipcbiAgICogTGF5ZXJzIHRoYXQgYXJlIGFjdGl2ZSBvbiB0aGUgbWFwIGJ1dCBhcmUgbm90IG1lbnRpb25lZCBpbiBMYXllckNvbmZpZ1xuICAgKiBAdHlwZSB7e319XG4gICAqL1xuICAkc2NvcGUubm9tYWRMYXllcnMgPSB7fTtcblxuXG4gIC8qKlxuICAgKiBXaGVuIHRoZSByb3V0ZSBjaGFuZ2VzLCB3ZSBzaG91bGQgc2VlIHdoYXQgbGF5ZXJzIHdlIGhhdmUgb24gdGhlcmUgYW5kIGhhdmUgdGhlIGxheWVyc1xuICAgKiBpbiB0aGUgcGFuZWxzIGNoZWNrZWQgYWNjb3JkaW5nbHkuXG4gICAqL1xuICAkc2NvcGUuJG9uKCdsYXllcnMtdXBkYXRlJywgZnVuY3Rpb24oZXZ0LCBsYXllcnMpIHtcblxuICAgIGJ1aWxkTGF5ZXJzTW9kZWwoKTtcblxuICAgIC8vIGdpdGh1YiBnaXN0c1xuICAgICRzY29wZS5saXN0R2lzdHMoKTtcblxuICAgIC8vIHJlc2V0IHRoZSBub21hZCBsYXllcnNcbiAgICBmb3IgKHZhciBuayBpbiAkc2NvcGUubm9tYWRMYXllcnMpIHtcbiAgICAgICRzY29wZS5ub21hZExheWVyc1tua10uYWN0aXZlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gcmVzZXQgdGhlIGxheWVyIGNvbmZpZyBsYXllcnNcbiAgICBmb3IgKHZhciBsY2sgaW4gTGF5ZXJDb25maWcpIHtcbiAgICAgIGlmICh0eXBlb2YgTGF5ZXJDb25maWdbbGNrXSA9PT0gJ29iamVjdCcgJiYgTGF5ZXJDb25maWdbbGNrXSAhPT0gbnVsbCkge1xuICAgICAgICBMYXllckNvbmZpZ1tsY2tdLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIHRoZSBsYXllciBpcyBhY3RpdmUgaW4gbWFwIGxheWVyc1xuICAgICAqL1xuICAgICRzY29wZS5tYXBMYXllcnMgPSBsYXllcnM7XG4gICAgLy8gc2tpcCB0aGUgZmlyc3QgbGF5ZXIsIHRoZSBiYXNlbWFwXG4gICAgZm9yICh2YXIgaSA9IDEsIGxlbiA9IGxheWVycy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgdmFyIGwgPSBsYXllcnNbaV07XG4gICAgICAvLyBsYXllciBpcyBpbiB0aGUgbGF5ZXIgY29uZmlnXG4gICAgICBpZiAodHlwZW9mIExheWVyQ29uZmlnW2xdID09PSAnb2JqZWN0JyAmJiBMYXllckNvbmZpZ1tsXSAhPT0gbnVsbCkge1xuICAgICAgICBMYXllckNvbmZpZ1tsXS5hY3RpdmUgPSB0cnVlO1xuICAgICAgfVxuICAgICAgLy8gbGF5ZXIgaXMgYSBnaXRodWIgZ2lzdFxuICAgICAgZWxzZSBpZiAoJHNjb3BlLmdpc3RzW2xdKSB7XG4gICAgICAgICRzY29wZS5naXN0c1tsXS5hY3RpdmUgPSB0cnVlO1xuICAgICAgfVxuICAgICAgLy8gbGF5ZXIgaXMgYSBub3QgaW4gdGhlIGxheWVyIGNvbmZpZy4gaXQncyBub21hZGljLlxuICAgICAgZWxzZSB7XG4gICAgICAgICRzY29wZS5ub21hZExheWVyc1tsXSA9IHtcbiAgICAgICAgICBuYW1lOiBsLFxuICAgICAgICAgIHVybDogbCxcbiAgICAgICAgICBhY3RpdmU6IHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cblxuICAkc2NvcGUudG9nZ2xlTWFwTGF5ZXIgPSBmdW5jdGlvbiAobGF5ZXJLZXksIGxheWVyKSB7XG5cbiAgICAvLyBhZGQgbGF5ZXJcbiAgICBpZiAobGF5ZXIuYWN0aXZlID09PSB0cnVlKSB7XG4gICAgICAkc2NvcGUubWFwTGF5ZXJzLnB1c2gobGF5ZXJLZXkpO1xuXG4gICAgLy8gcmVtb3ZlIGxheWVyXG4gICAgfSBlbHNlIHtcbiAgICAgICRzY29wZS5tYXBMYXllcnMgPSAkLmdyZXAoJHNjb3BlLm1hcExheWVycywgZnVuY3Rpb24ocm91dGVMYXllcil7XG4gICAgICAgIHJldHVybiByb3V0ZUxheWVyICE9PSBsYXllcktleTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgICRzdGF0ZVBhcmFtcy5sYXllcnMgPSAkc2NvcGUubWFwTGF5ZXJzLmpvaW4oJywnKTtcbiAgICB2YXIgc3RhdGUgPSAkc3RhdGUuY3VycmVudC5uYW1lIHx8ICdtYWluJztcbiAgICAkc3RhdGUuZ28oc3RhdGUsICRzdGF0ZVBhcmFtcyk7XG5cbiAgfTtcblxuXG4gICRzY29wZS5saXN0R2lzdHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgJHNjb3BlLmdpc3RzID0gZ2lzdHMuZmV0Y2goKTtcbiAgICBpZiAoJHNjb3BlLmdpc3RzKSB7XG4gICAgICAkc2NvcGUubnVtR2lzdHMgPSBPYmplY3Qua2V5cygkc2NvcGUuZ2lzdHMpLmxlbmd0aDtcbiAgICB9IGVsc2Uge1xuICAgICAgJHNjb3BlLm51bUdpc3RzID0gMDtcbiAgICB9XG4gIH07XG4gICRzY29wZS5saXN0R2lzdHMoKTtcbiAgZGVidWcuZ2lzdHNMYXllcnNQYW5lbCA9ICRzY29wZS5naXN0cztcblxuICAkc2NvcGUuc2VhcmNoTGF5ZXJzID0gJHNjb3BlLmFsbExheWVycztcblxuICAkc2NvcGUuc2VhcmNoID0gZnVuY3Rpb24oc2VhcmNoVGV4dCkge1xuICAgIHZhciBsYXllcnMgPSAkc2NvcGUuYWxsTGF5ZXJzO1xuICAgIGlmICh0eXBlb2Ygc2VhcmNoVGV4dCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHNlYXJjaFRleHQgPSBzZWFyY2hUZXh0LnRvTG93ZXJDYXNlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICRzY29wZS5zZWFyY2hMYXllcnMgPSBsYXllcnM7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciBzZWFyY2hMYXllcnMgPSB7fTtcbiAgICBmb3IgKHZhciBrIGluIGxheWVycykge1xuICAgICAgdmFyIGwgPSBsYXllcnNba107XG4gICAgICBmb3IgKHZhciBrMiBpbiBsKSB7XG4gICAgICAgIHZhciB2YWwgPSBsW2syXS50b1N0cmluZygpO1xuICAgICAgICBpZiAodmFsLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihzZWFyY2hUZXh0KSA+IC0xKSB7XG4gICAgICAgICAgc2VhcmNoTGF5ZXJzW2tdID0gbDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdmFyIHByb3BzID0gbC5wcm9wZXJ0aWVzO1xuICAgICAgaWYgKHByb3BzKSB7XG4gICAgICAgIGZvciAodmFyIGszIGluIHByb3BzKSB7XG4gICAgICAgICAgdmFyIHZhbCA9IHByb3BzW2szXS50b1N0cmluZygpO1xuICAgICAgICAgIGlmICh2YWwudG9Mb3dlckNhc2UoKS5pbmRleE9mKHNlYXJjaFRleHQpID4gLTEpIHtcbiAgICAgICAgICAgIHNlYXJjaExheWVyc1trXSA9IGw7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgJHNjb3BlLnNlYXJjaExheWVycyA9IHNlYXJjaExheWVycztcbiAgfTtcblxufSk7XG5cbiIsIi8qKlxuICogQ3JlYXRlZCBieSBOaWNob2xhcyBIYWxsYWhhbiA8bmhhbGxhaGFuQHNwYXRpYWxkZXYuY29tPlxuICogICAgICAgb24gMy8yNy8xNC5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdHZW9Bbmd1bGFyJykuY29udHJvbGxlcignTGVnZW5kQ3RybCcsIGZ1bmN0aW9uKCRzY29wZSwgTGF5ZXJDb25maWcsICRzdGF0ZVBhcmFtcykge1xuXG4gICRzY29wZS4kb24oJ2xheWVycy11cGRhdGUnLCBmdW5jdGlvbiAoZXZ0LCBsYXllcnMpIHtcbiAgICAkc2NvcGUubGF5ZXJzID0gW107XG4gICAgZm9yICh2YXIgaSA9IGxheWVycy5sZW5ndGggLSAxOyBpID49IDE7IGktLSl7XG4gICAgICB2YXIgbCA9IGxheWVyc1tpXTtcbiAgICAgIHZhciBsYXllciA9IHt9O1xuICAgICAgdmFyIGxjZmcgPSBMYXllckNvbmZpZy5maW5kKGwpO1xuXG4gICAgICBsYXllci5hbGlhcyA9IGw7XG4gICAgICBsYXllci5uYW1lID0gbGNmZy5uYW1lO1xuICAgICAgaWYobCA9PT0gJ2dhZG0wJyB8fCBsID09PSAndGhlbWUnKXtcbiAgICAgICAgICBsYXllci5uYW1lID0gJHN0YXRlUGFyYW1zLnRoZW1lIHx8ICdQcm9qZWN0JztcbiAgICAgIH1cbiAgICAgIGlmICghbmFtZSAmJiBsY2ZnLnByb3BlcnRpZXMgJiYgbGNmZy5wcm9wZXJ0aWVzLnRpdGxlKSB7XG4gICAgICAgIGxheWVyLm5hbWUgPSBsY2ZnLnByb3BlcnRpZXMudGl0bGU7XG4gICAgICB9IGVsc2UgaWYgKCFsYXllci5uYW1lKSB7XG4gICAgICAgIGxheWVyLm5hbWUgPSBsO1xuICAgICAgfVxuXG4gICAgICBpZihsY2ZnLnByb3BlcnRpZXMpe1xuICAgICAgICAgIGlmKGxjZmcucHJvcGVydGllcy5sZWdlbmQpe1xuICAgICAgICAgICAgICBpZih0eXBlb2YgbGNmZy5wcm9wZXJ0aWVzLmxlZ2VuZCA9PT0gJ2Z1bmN0aW9uJyl7XG4gICAgICAgICAgICAgICAgICAgIC8vQnVpbGQgdGhlIGxlZ2VuZCBlbGVtZW50XG4gICAgICAgICAgICAgICAgICAgIGxheWVyLmFjdGl2ZUxlZ2VuZCA9IGxjZmcucHJvcGVydGllcy5sZWdlbmQoJHN0YXRlUGFyYW1zLnRoZW1lIHx8ICdwcm9qZWN0Jyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgIC8vSWYgbGVnZW5kIGlzIGEgc3RyaW5nLCB1c2UgaXQgZGlyZWN0bHlcbiAgICAgICAgICAgICAgICAgIGxheWVyLmFjdGl2ZUxlZ2VuZCA9IGxjZmcucHJvcGVydGllcy5sZWdlbmQ7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgLy9ObyBsZWdlbmQgZGVmaW5lZC4gIFVzZSBhIGRlZmF1bHQuXG5cbiAgICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgICRzY29wZS5sYXllcnMucHVzaChsYXllcik7XG4gICAgfVxuICB9KTtcblxufSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdHZW9Bbmd1bGFyJykuY29udHJvbGxlcignTWFpbkN0cmwnLCBmdW5jdGlvbigkc2NvcGUsICRyb290U2NvcGUsICRzdGF0ZSwgJHN0YXRlUGFyYW1zLCAkbG9jYXRpb24pIHtcbiAgZGVidWcuJGxvY2F0aW9uID0gJGxvY2F0aW9uO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZGVmYXVsdFJvdXRlJywgJGxvY2F0aW9uLnBhdGgoKSk7XG5cbiAgLy8gTkggVE9ETzogU2VlIGlmIHRoaXMgaXMgYWxzbyB0aGUgY2FzZSB3aXRoIHVpLXJvdXRlcj9cbiAgLy8gd2VpcmQgYnVnIHdoZXJlIHJlZGlyZWN0IHBlZWxzIG91dCAnOi8ve3MnIHdoZW4gJzonIGlzIHRoZXJlXG4gIC8vICRyb3V0ZVBhcmFtcy5sYXllcnMgV2UganVzdCBkb250IGhhdmUgdGhlIDogaW4gbWFpbi5qcyBzbyB0aGF0XG4gIC8vIHBhcnQgb2YgdGhlIHBhdGggZG9lcyBub3QgZ28gYXdheS4uLlxuICB2YXIgbGF5ZXJzU3RyID0gJHN0YXRlUGFyYW1zLmxheWVycyA9ICRzdGF0ZVBhcmFtcy5sYXllcnMucmVwbGFjZSgnaHR0cC8vJywgJ2h0dHA6Ly8nKTtcbiAgdmFyIHRoZW1lU3RyID0gJHN0YXRlUGFyYW1zLnRoZW1lO1xuXG4gIHZhciBsZXZlbFN0ciA9ICRzdGF0ZVBhcmFtcy5sZXZlbDtcbiAgdmFyIHpvb21TdHIgPSAkc3RhdGVQYXJhbXMuem9vbTtcblxuICAkcm9vdFNjb3BlLiRicm9hZGNhc3QoJ3JvdXRlLXVwZGF0ZScpO1xuXG4gIC8qKlxuICAgKiBPbmx5IGlmIHRoZSBsYXRlc3Qgcm91dGUgaGFzIGEgZGlmZmVyZW50IGxheWVyIHN0cmluZyB0aGFuIGJlZm9yZS5cbiAgICovXG4gIGlmIChsYXllcnNTdHIgIT09IHdpbmRvdy5wcmV2TGF5ZXJzU3RyIHx8IHRoZW1lU3RyICE9PSB3aW5kb3cucHJldlRoZW1lKSB7XG4gICAgd2luZG93LnByZXZMYXllcnNTdHIgPSBsYXllcnNTdHI7XG4gICAgd2luZG93LnByZXZUaGVtZSA9IHRoZW1lU3RyO1xuICAgIHZhciBsYXllcnMgPSBsYXllcnNTdHIuc3BsaXQoJywnKTtcbiAgICAkcm9vdFNjb3BlLiRicm9hZGNhc3QoJ2xheWVycy11cGRhdGUnLCBsYXllcnMpO1xuICB9XG5cbiAgaWYgKGxldmVsU3RyICE9PSBudWxsICYmIGxldmVsU3RyICE9PSB3aW5kb3cucHJldkxldmVsU3RyKSB7XG4gICAgd2luZG93LnByZXZMZXZlbFN0ciA9IGxldmVsU3RyO1xuICAgICRyb290U2NvcGUuJGJyb2FkY2FzdCgnbGV2ZWwtdXBkYXRlJywgbGV2ZWxTdHIpO1xuICB9XG5cbiAgaWYgKHpvb21TdHIgIT09IHdpbmRvdy5wcmV2Wm9vbVN0cikge1xuICAgIHdpbmRvdy5wcmV2Wm9vbVN0ciA9IHpvb21TdHI7XG4gICAgJHJvb3RTY29wZS4kYnJvYWRjYXN0KCd6b29tLXVwZGF0ZScsIHpvb21TdHIpO1xuICB9XG5cbn0pO1xuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IE5pY2hvbGFzIEhhbGxhaGFuIDxuaGFsbGFoYW5Ac3BhdGlhbGRldi5jb20+XG4gKiAgICAgb24gTW9uIE1hciAxNyAyMDE0XG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnR2VvQW5ndWxhcicpLmNvbnRyb2xsZXIoJ01hcEN0cmwnLCBmdW5jdGlvbiAoJHNjb3BlLCAkcm9vdFNjb3BlLCAkc3RhdGUsICRzdGF0ZVBhcmFtcywgTGF5ZXJDb25maWcsIFZlY3RvclByb3ZpZGVyLCAkaHR0cCkge1xuICB2YXIgbWFwID0gTC5tYXAoJ21hcCcpO1xuICB2YXIgZmlyc3RMb2FkID0gdHJ1ZTtcblxuICAkc2NvcGUucGFyYW1zID0gJHN0YXRlUGFyYW1zO1xuICAkc2NvcGUuYmx1ciA9ICcnO1xuICAkc2NvcGUuZ3JheW91dCA9ICcnOyAvL3VzZSB0aGlzIGNsYXNzIHRvIGdyYXkgb3V0IHRoZSBtYXAsIHN1Y2ggYXMgd2hlbiB0aGUgY291bnRyeSBzZWxlY3RvciBtZW51IGlzIGFjdGl2ZVxuXG4gICRzY29wZS50b2dnbGVTdGF0ZSA9IGZ1bmN0aW9uKHN0YXRlTmFtZSkge1xuICAgIHZhciBzdGF0ZSA9ICRzdGF0ZS5jdXJyZW50Lm5hbWUgIT09IHN0YXRlTmFtZSA/IHN0YXRlTmFtZSA6ICdtYWluJztcbiAgICAkc3RhdGUuZ28oc3RhdGUsICRzdGF0ZVBhcmFtcyk7XG4gIH07XG5cbiAgdmFyIGxhc3RMYXllcnNTdHIgPSAnJztcbiAgdmFyIGxhc3RCYXNlbWFwVXJsID0gbnVsbDtcbiAgdmFyIGJhc2VtYXBMYXllciA9IG51bGw7XG4gIHZhciBsYXllcnNTdHIgPSBudWxsO1xuICB2YXIgb3ZlcmxheU5hbWVzID0gW107XG4gIHZhciBvdmVybGF5cyA9IFtdO1xuICB2YXIgb3ZlcmxheXNfZGljdGlvbmFyeSA9IHt9O1xuICB2YXIgdGhlbWUgPSBudWxsO1xuICB2YXIgZmlsdGVycyA9IG51bGw7XG5cbiAgZnVuY3Rpb24gcmVkcmF3KCkge1xuICAgIHZhciBsYXQgPSBwYXJzZUZsb2F0KCRzdGF0ZVBhcmFtcy5sYXQpICAgfHwgMDtcbiAgICB2YXIgbG5nID0gcGFyc2VGbG9hdCgkc3RhdGVQYXJhbXMubG5nKSAgIHx8IDA7XG4gICAgdmFyIHpvb20gPSBwYXJzZUZsb2F0KCRzdGF0ZVBhcmFtcy56b29tKSB8fCA4O1xuICAgIGxheWVyc1N0ciA9ICRzdGF0ZVBhcmFtcy5sYXllcnMgfHwgTGF5ZXJDb25maWcucmVkY3Jvc3MudXJsO1xuICAgIHZhciBsYXllcnMgPSBsYXllcnNTdHIuc3BsaXQoJywnKTtcblxuICAgIC8vIGZpcnN0IGxheWVyIHNob3VsZCBhbHdheXMgYmUgdHJlYXRlZCBhcyB0aGUgYmFzZW1hcFxuICAgIHZhciBiYXNlbWFwID0gTGF5ZXJDb25maWcuZmluZChsYXllcnNbMF0pIHx8IExheWVyQ29uZmlnLnJlZGNyb3NzLnVybDtcbiAgICBpZiAodHlwZW9mIGJhc2VtYXAgPT09ICdzdHJpbmcnKSB7XG4gICAgICB2YXIgYmFzZW1hcFVybCA9IGJhc2VtYXA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBiYXNlbWFwVXJsID0gYmFzZW1hcC51cmw7XG4gICAgfVxuICAgIG92ZXJsYXlOYW1lcyA9IGxheWVycy5zbGljZSgxKTtcblxuXG4gICAgaWYgKGxhc3RCYXNlbWFwVXJsICE9PSBiYXNlbWFwVXJsICYmIHR5cGVvZiBtYXAgPT09ICdvYmplY3QnKSB7XG4gICAgICBpZiAoYmFzZW1hcExheWVyKSB7XG4gICAgICAgIG1hcC5yZW1vdmVMYXllcihiYXNlbWFwTGF5ZXIpO1xuICAgICAgfVxuICAgICAgYmFzZW1hcExheWVyID0gTC50aWxlTGF5ZXIoYmFzZW1hcFVybCkuYWRkVG8obWFwKTtcblxuICAgICAgYmFzZW1hcExheWVyLm9uKCdsb2FkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAvL01vdmUgdG8gYmFja1xuICAgICAgICBiYXNlbWFwTGF5ZXIuYnJpbmdUb0JhY2soKTtcbiAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgaWYgKGxhc3RMYXllcnNTdHIgIT09IGxheWVyc1N0cikge1xuICAgICAgY29uc29sZS5sb2coJ1NldHRpbmcgbGF5ZXJzLicpO1xuICAgICAgZHJhd092ZXJsYXlzKCk7XG5cbiAgICAgICRzY29wZS5kZWZhdWx0cyA9IHtcbiAgICAgICAgc2Nyb2xsV2hlZWxab29tOiB0cnVlXG4gICAgICB9O1xuXG4gICAgICAkc2NvcGUudGlsZXMgPSB7XG4gICAgICAgIHVybDogYmFzZW1hcFVybFxuICAgICAgfTtcbiAgICB9XG5cbiAgICB2YXIgYyA9ICRzY29wZS5jZW50ZXIgPSB7XG4gICAgICBsYXQ6IGxhdCxcbiAgICAgIGxuZzogbG5nLFxuICAgICAgem9vbTogem9vbVxuICAgIH07XG5cbiAgICBpZiAodHlwZW9mIG1hcCA9PT0gJ29iamVjdCcgJiYgKGMubGF0ICE9IDAgJiYgYy5sbmcgIT0wKSkge1xuICAgICAgbWFwLnNldFZpZXcoW2MubGF0LCBjLmxuZ10sIHpvb20pO1xuICAgIH1cblxuXG4gICAgaWYgKCh0aGVtZSAhPSAkc3RhdGVQYXJhbXMudGhlbWUgfHwgZmlsdGVycyAhPSAkc3RhdGVQYXJhbXMuZmlsdGVycykgfHwgZmlyc3RMb2FkID09PSB0cnVlKSB7XG5cbiAgICAgIGZpcnN0TG9hZCA9IGZhbHNlO1xuXG4gICAgICAvL1VwZGF0ZSBsb2NhbCB2YXJpYWJsZXNcbiAgICAgIHRoZW1lID0gJHN0YXRlUGFyYW1zLnRoZW1lO1xuICAgICAgZmlsdGVycyA9ICRzdGF0ZVBhcmFtcy5maWx0ZXJzO1xuXG4gICAgICAvL0NhbGwgdGhlICdvbkNoYW5nZWQnIGZ1bmN0aW9uXG4gICAgICBvblRoZW1lQ2hhbmdlZCgkc3RhdGVQYXJhbXMudGhlbWUpO1xuICAgICAgb25GaWx0ZXJzQ2hhbmdlZCgkc3RhdGVQYXJhbXMuZmlsdGVycyk7XG4gICAgfVxuXG4gICAgYnJvYWRjYXN0QkJveCgpO1xuICAgIGxhc3RMYXllcnNTdHIgPSBsYXllcnNTdHI7XG4gICAgbGFzdEJhc2VtYXBVcmwgPSBiYXNlbWFwVXJsO1xuICB9XG5cbiAgLy9Gb3IgdmVjdG9yIHRpbGUgY2hvcm9wbGV0aHMsIGFzayBmb3IgbmV3IGRhdGEgLmpzb24gZnJvbSB0aGUgc2VydmVyXG4gIG9uVGhlbWVDaGFuZ2VkKCRzdGF0ZVBhcmFtcy50aGVtZSk7XG5cblxuICAvKioqXG4gICAqIEJyb2FkY2FzdCBMaXN0ZW5lcnMuXG4gICAqL1xuICAkc2NvcGUuJG9uKCdyb3V0ZS11cGRhdGUnLCBmdW5jdGlvbigpIHtcbiAgICBpZiAoJHNjb3BlLmJsdXIgPT09ICdibHVyJyAmJiAkc3RhdGUuY3VycmVudC5uYW1lICE9PSAnbGFuZGluZycpIHtcbiAgICAgICRzY29wZS5ibHVyID0gJyc7XG4gICAgfVxuXG4gICAgdmFyIGM7XG4gICAgaWYoISRzY29wZS5jZW50ZXIpe1xuICAgICAgdmFyIGxhdCA9IHBhcnNlRmxvYXQoJHN0YXRlUGFyYW1zLmxhdCkgICB8fCAwO1xuICAgICAgdmFyIGxuZyA9IHBhcnNlRmxvYXQoJHN0YXRlUGFyYW1zLmxuZykgICB8fCAwO1xuICAgICAgdmFyIHpvb20gPSBwYXJzZUZsb2F0KCRzdGF0ZVBhcmFtcy56b29tKSB8fCA4O1xuXG4gICAgICBjID0gJHNjb3BlLmNlbnRlciA9IHtcbiAgICAgICAgbGF0OiBsYXQsXG4gICAgICAgIGxuZzogbG5nLFxuICAgICAgICB6b29tOiB6b29tXG4gICAgICB9O1xuICAgIH1cbiAgICBlbHNle1xuICAgICAgYyA9ICRzY29wZS5jZW50ZXI7XG4gICAgfVxuXG4gICAgdmFyIGxhdCA9IGMubGF0LnRvRml4ZWQoNik7XG4gICAgdmFyIGxuZyA9IGMubG5nLnRvRml4ZWQoNik7XG4gICAgdmFyIHpvb20gPSBjLnpvb20udG9TdHJpbmcoKTtcbiAgICBpZiAobWFwTW92ZUVuZCkge1xuICAgICAgbWFwTW92ZUVuZCA9IGZhbHNlO1xuICAgIH0gZWxzZSBpZiAoICAkc3RhdGVQYXJhbXMubGF0ICAgICAhPT0gbGF0XG4gICAgICAgICAgICAgIHx8ICRzdGF0ZVBhcmFtcy5sbmcgICAgICE9PSBsbmdcbiAgICAgICAgICAgICAgfHwgJHN0YXRlUGFyYW1zLnpvb20gICAgIT09IHpvb21cbiAgICAgICAgICAgICAgfHwgJHN0YXRlUGFyYW1zLmxheWVycyAgIT09IGxheWVyc1N0clxuICAgICAgICAgICAgICB8fCAkc3RhdGVQYXJhbXMudGhlbWUgICAhPT0gdGhlbWVcbiAgICAgICAgICAgICAgfHwgJHN0YXRlUGFyYW1zLmZpbHRlcnMgIT09IGZpbHRlcnMgICApIHtcblxuICAgICAgY29uc29sZS5sb2coJ21hcC5qcyByb3V0ZS11cGRhdGUgVXBkYXRpbmcgTWFwLi4uJyk7XG4gICAgICByZWRyYXcoKTtcbiAgICB9XG5cbiAgfSk7XG5cbiAgJHNjb3BlLiRvbignYmx1cicsIGZ1bmN0aW9uKCkge1xuICAgICRzY29wZS5ibHVyID0gJ2JsdXInO1xuICB9KTtcblxuICAvL3RoaXMgdGFrZXMgaW4gYSBXS1QgR2VvSlNPTiBFeHRlbnQgZ2VvbWV0cnlcbiAgJHNjb3BlLnpvb21Ub0V4dGVudCA9IGZ1bmN0aW9uKGV4dGVudCl7XG4gICAgZGVsZXRlICRzdGF0ZVBhcmFtc1snem9vbS1leHRlbnQnXTtcblxuICAgIHZhciBzb3V0aFdlc3QgPSB7IGxhdDogZXh0ZW50WzBdWzFdLCBsbmc6IGV4dGVudFswXVswXSB9O1xuICAgIHZhciBub3J0aEVhc3QgPSB7IGxhdDogZXh0ZW50WzJdWzFdLCBsbmc6IGV4dGVudFsyXVswXSB9O1xuXG4gICAgJHNjb3BlLmJvdW5kcyA9IEwubGF0TG5nQm91bmRzKHNvdXRoV2VzdCwgbm9ydGhFYXN0KTtcblxuICAgIC8vWm9vbSB0byBib3VuZHNcbiAgICBtYXAuZml0Qm91bmRzKCRzY29wZS5ib3VuZHMpO1xuICB9O1xuXG4gIC8vVGhpcyB0YWtlIGEgbGVhZmxldCBib3VuZHMgb2JqZWN0IGFuZCBoYW5kbGVzIGl0LlxuICBkZWxldGUgJHN0YXRlUGFyYW1zWyd6b29tLWV4dGVudCddO1xuICAkc2NvcGUuem9vbVRvQm91bmRzID0gZnVuY3Rpb24oYm91bmRzKXtcblxuICAgIC8vQnVpbGQgbmV3IGJvdW5kcyBvYmplY3RcbiAgICAkc2NvcGUuYm91bmRzID0gTC5sYXRMbmdCb3VuZHMoYm91bmRzLmdldFNvdXRoV2VzdCgpLCBib3VuZHMuZ2V0Tm9ydGhFYXN0KCkpO1xuXG4gICAgLy9ab29tIHRvIGJvdW5kc1xuICAgIG1hcC5maXRCb3VuZHMoJHNjb3BlLmJvdW5kcyk7XG4gIH07XG5cblxuXG5cbiAgICBmdW5jdGlvbiBicm9hZGNhc3RCQm94KCkge1xuICAgIC8vTkggVE9ETyBGaXhtZS4gRmluZCBhIGJldHRlciBzb2x1dGlvbiB0aGFuIGEgc3BpbiBsb2NrLlxuICAgIGlmICghd2FpdCkge1xuICAgICAgd2FpdCA9IHRydWU7XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG5cbiAgICAgICAgICAvL0dldCB0aGUgTUlOL01BWCBUaWxlIFpZWCBleHRlbnRzLlxuICAgICAgICAgIC8vSWYgdGhleSBoYXZlbid0IGNoYWduZWQsIHRoZW4gZG9uJ3QgcHJvY2VlZC5cblxuICAgICAgICAgIC8vV2hlbiB0aGUgcGFnZSBsb2Fkcywgbm8gem9vbSBvciBjZW50ZXIgaGFzIGJlZW4gc2V0LCBzbyBkb24ndCBnZXQgYm91bmRzIHVudGlsIHRoYXQgaGFzIGhhcHBlbmVkXG5cbiAgICAgICAgICBpZighbWFwLmdldFpvb20oKSkgeyByZXR1cm47IH1cbiAgICAgICAgICB2YXIgdGlsZUJvdW5kcyA9IGdldEN1cnJlbnRUaWxlQm91bmRzKG1hcCk7XG4gICAgICAgICAgdmFyIHpvb20gPSBtYXAuZ2V0Wm9vbSgpO1xuXG4gICAgICAgICAgJHNjb3BlLnpvb20gPSB6b29tO1xuICAgICAgICAgIHZhciBtaW54ID0gdGlsZUJvdW5kcy5taW4ueDtcbiAgICAgICAgICB2YXIgbWF4eCA9IHRpbGVCb3VuZHMubWF4Lng7XG4gICAgICAgICAgdmFyIG1pbnkgPSB0aWxlQm91bmRzLm1pbi55O1xuICAgICAgICAgIHZhciBtYXh5ID0gdGlsZUJvdW5kcy5tYXgueTtcblxuICAgICAgICAgIC8vRGV0ZWN0IG5lZ2F0aXZlIG1pbnMgYW5kIHNldCB0byAwXG4gICAgICAgICAgaWYobWlueCA8IDApIG1pbnggPSAwO1xuICAgICAgICAgIGlmKG1pbnkgPCAwKSBtaW55ID0gMDtcblxuICAgICAgICAgIC8vQ2hlY2sgZm9yIGV4dHJlbWUgdmFsdWVzIGdyZWF0ZXIgdGhhbiB0aGUgdGlsZSBib3VuZHNcbiAgICAgICAgICB2YXIgZXh0cmVtZVZhbHVlID0gTWF0aC5wb3coMiwgem9vbSkgLSAxO1xuXG4gICAgICAgICAgaWYobWF4eCA+IGV4dHJlbWVWYWx1ZSkgbWF4eCA9IGV4dHJlbWVWYWx1ZTtcbiAgICAgICAgICBpZihtYXh5ID4gZXh0cmVtZVZhbHVlKSBtYXh5ID0gZXh0cmVtZVZhbHVlO1xuXG4gICAgICAgICAgdmFyIHN0ciA9IHpvb20gKyBcIixcIiArICBtaW54ICsgJywnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXh4ICsgJywnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW55ICsgJywnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXh5O1xuXG4gICAgICAgICAgVmVjdG9yUHJvdmlkZXIudXBkYXRlQkJveChzdHIpO1xuICAgICAgICAgICRyb290U2NvcGUuYmJveCA9IHN0cjsgLy9zYXZlIHRoZSBiYm94IHN0cmluZyB0byByb290U2NvcGUgc28gVmVjdG9yVGlsZSBzdHlsaW5nIGZ1bmN0aW9ucyBoYXZlIGFjY2Vzc1xuXG5cbiAgICAgICAgd2FpdCA9IGZhbHNlO1xuICAgICAgfSwgMTUwKTtcbiAgICB9XG5cbiAgfVxuXG4gICAgLyoqXG4gICAgICogUmlwcGVkIEZyb20gTGVhZmxldCBUaWxlTGF5ZXJcbiAgICAgKiBDYWxjdWxhdGUgdGhlIE1heC9NaW4gWllYIFRpbGUgYm91bmRzLlxuICAgICAqIFVzZSB0aG9zZSB0byBzbmFwIEJCb3ggcmVxdWVzdHMgc28gd2UgY2FuIGNhY2hlLlxuICAgICAqL1xuXG4gICAgZnVuY3Rpb24gZ2V0Q3VycmVudFRpbGVCb3VuZHMobWFwKXtcbiAgICAgICAgdmFyIGJvdW5kcyA9IG1hcC5nZXRQaXhlbEJvdW5kcygpLFxuICAgICAgICAgICAgdGlsZVNpemUgPSAyNTY7IC8vVE9ET1xuXG4gICAgICAgIC8vIHRpbGUgY29vcmRpbmF0ZXMgcmFuZ2UgZm9yIHRoZSBjdXJyZW50IHZpZXdcbiAgICAgICAgdmFyIHRpbGVCb3VuZHMgPSBMLmJvdW5kcyhcbiAgICAgICAgICAgIGJvdW5kcy5taW4uZGl2aWRlQnkodGlsZVNpemUpLmZsb29yKCksXG4gICAgICAgICAgICBib3VuZHMubWF4LmRpdmlkZUJ5KHRpbGVTaXplKS5mbG9vcigpKTtcblxuICAgICAgICByZXR1cm4gdGlsZUJvdW5kcztcbiAgICB9XG5cblxuLyoqXG4gKiBOYXRpdmUgTGVhZmxldCBNYXAgT2JqZWN0XG4gKi9cblxuICB3aW5kb3cubWFwID0gbWFwO1xuICBtYXAub24oJ21vdmVlbmQnLCBmdW5jdGlvbiAoKSB7IC8vIG1vdmUgaXMgZ29vZCB0b29cbiAgICB2YXIgYyA9IG1hcC5nZXRDZW50ZXIoKTtcbiAgICB2YXIgbGF0ID0gYy5sYXQudG9GaXhlZCg2KTtcbiAgICB2YXIgbG5nID0gYy5sbmcudG9GaXhlZCg2KTtcbiAgICB2YXIgem9vbSA9IG1hcC5nZXRab29tKCkudG9TdHJpbmcoKTtcblxuICAgIGlmICggICAkc3RhdGVQYXJhbXMubGF0ICAhPT0gbGF0XG4gICAgICB8fCAkc3RhdGVQYXJhbXMubG5nICAhPT0gbG5nXG4gICAgICB8fCAkc3RhdGVQYXJhbXMuem9vbSAhPT0gem9vbSApIHtcblxuXG4gICAgICAkc3RhdGVQYXJhbXMubGF0ID0gbGF0O1xuICAgICAgJHN0YXRlUGFyYW1zLmxuZyA9IGxuZztcbiAgICAgICRzdGF0ZVBhcmFtcy56b29tID0gem9vbTtcbiAgICAgIG1hcE1vdmVFbmQgPSB0cnVlO1xuICAgICAgJHN0YXRlLmdvKCRzdGF0ZS5jdXJyZW50Lm5hbWUsICRzdGF0ZVBhcmFtcyk7XG4gICAgICBicm9hZGNhc3RCQm94KCk7XG5cbiAgICAgIC8vVXBkYXRlIEVDT1MgRGV0YWlscyAtIFVzdWFsbHkgdGhpcyBoYXBwZW5zIHdoZW4gdGlsZXMgZmluaXNoIGxvYWRpbmcgYWZ0ZXIgYSBwYW4uICBCdXQgc29tZXRpbWVzIGlmIHRoZSB0aWxlcyBhcmUgbG9hZGVkL2NhY2hlZCwgdGhlbiB0aGUgZXZlbnQgZG9lc24ndCBmaXJlIGFmdGVyIHRoZSBtYXAgc3RvcHMgbW92aW5nLlxuICAgICAgLy91cGRhdGVFQ09TRGF0YShvdmVybGF5TmFtZXMpO1xuICAgIH1cbiAgfSk7XG5cbiAgLy9tZXJnZSB2ZWN0b3IgdGlsZXMgaW4gdGhlIG5ldyB2aWV3IHdpdGggLmpzb24gc3RhdHNcbiAgbWFwLm9uKCdtb3ZlZW5kJywgZnVuY3Rpb24gKCkge1xuICAgIC8vaWYgKCRyb290U2NvcGUgJiYgJHJvb3RTY29wZS52dERhdGEpIHtcbiAgICAvLyAgdmFyIGRhdGEgPSAkcm9vdFNjb3BlLnZ0RGF0YTtcbiAgICAvLyAgdXBkYXRlRUNPU0RhdGEoZGF0YSwgZmFsc2UpOyAvL2ZhbHNlIG1lYW5zIHRoZSB0aGVtZSBkaWRuJ3QgY2hhbmdlLCBzbyBkb24ndCBjbGVhciBvbGQgZmVhdHVyZXMuXG4gICAgLy99XG5cbiAgfSk7XG5cbiAgLy9Db25uZWN0IHRoZSBsYXlvdXQgb25yZXNpemUgZW5kIGV2ZW50XG4gIHRyeSB7XG4gICAgICB3aW5kb3cubGF5b3V0LnBhbmVzLmNlbnRlci5iaW5kKFwibGF5b3V0cGFuZW9ucmVzaXplX2VuZFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgbWFwLmludmFsaWRhdGVTaXplKCk7XG4gICAgICB9KTtcbiAgfWNhdGNoKGUpIHtcbiAgICAvL05vdGhpbmdcbiAgfVxuXG5cblxuXG5cbiAgZnVuY3Rpb24gZHJhd092ZXJsYXlzKCkge1xuXG4gICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gb3ZlcmxheU5hbWVzLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICAgIHZhciBvdmVybGF5TmFtZSA9IG92ZXJsYXlOYW1lc1tpXTtcbiAgICAgICAgdmFyIGN1cnJPdmVybGF5ID0gb3ZlcmxheXNbaV07XG5cbiAgICAgICAgaWYgKGN1cnJPdmVybGF5ICYmIGN1cnJPdmVybGF5Lm92ZXJsYXlOYW1lID09PSBvdmVybGF5TmFtZSkge1xuICAgICAgICAgIGNvbnRpbnVlOyAvLyBsYXllciBpcyBhbHJlYWR5IHRoZXJlLCBjb250aW51ZSBvbiFcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHJlbW92ZSB0aGUgY3VycmVudCBsYXllciB0aGF0IGlzIG5vdCB3aGF0IHNob3VsZCBiZSB0aGF0IGxheWVyIGluIHRoZSBsaXN0XG4gICAgICAgIGVsc2UgaWYgKCBjdXJyT3ZlcmxheSAmJiBjdXJyT3ZlcmxheS5fbWFwICkge1xuICAgICAgICAgIGlmIChjdXJyT3ZlcmxheS5kZXN0cm95UmVzb3VyY2UpIGN1cnJPdmVybGF5LmRlc3Ryb3lSZXNvdXJjZSgpO1xuICAgICAgICAgIG1hcC5yZW1vdmVMYXllcihjdXJyT3ZlcmxheSk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogTWFwbmlrIFZlY3RvciBUaWxlIEZvcm1hdCAoLlBCRilcbiAgICAgICAgICovXG4gICAgICAgIGlmICh0eXBlb2YgTGF5ZXJDb25maWdbb3ZlcmxheU5hbWVdID09PSAnb2JqZWN0J1xuICAgICAgICAgICYmIExheWVyQ29uZmlnW292ZXJsYXlOYW1lXS50eXBlLnRvTG93ZXJDYXNlKCkgPT09ICdwYmYnKSB7XG5cbiAgICAgICAgICB2YXIgdmVjUmVzID0gVmVjdG9yUHJvdmlkZXIuY3JlYXRlUmVzb3VyY2Uob3ZlcmxheU5hbWUpO1xuICAgICAgICAgIHZhciBsYXllciA9IHZlY1Jlcy5nZXRMYXllcigpO1xuICAgICAgICAgIGxheWVyLm92ZXJsYXlOYW1lID0gb3ZlcmxheU5hbWU7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHRyeSBmb3IgV01TIChub3QgYSB2ZWN0b3IgbGF5ZXIpXG4gICAgICAgIC8vIGlmIHRoaW5ncyBnZXQgbW9yZSBmYW5jeSB3aXRoIHdtcywgaXQgc2hvdWxkIGdldCBpdHMgb3duIGZhY3RvcnlcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIExheWVyQ29uZmlnW292ZXJsYXlOYW1lXSA9PT0gJ29iamVjdCdcbiAgICAgICAgICAgICAgICAgICAgJiYgTGF5ZXJDb25maWdbb3ZlcmxheU5hbWVdLnR5cGUudG9Mb3dlckNhc2UoKSA9PT0gJ3dtcycpIHtcblxuICAgICAgICAgIHZhciBjZmcgPSBMYXllckNvbmZpZ1tvdmVybGF5TmFtZV07XG4gICAgICAgICAgdmFyIGxheWVyID0gTC50aWxlTGF5ZXIud21zKGNmZy51cmwsIHtcbiAgICAgICAgICAgIGZvcm1hdDogY2ZnLmZvcm1hdCB8fCAnaW1hZ2UvcG5nJyxcbiAgICAgICAgICAgIHRyYW5zcGFyZW50OiBjZmcudHJhbnNwYXJlbnQgfHwgdHJ1ZSxcbiAgICAgICAgICAgIGxheWVyczogY2ZnLmxheWVyc1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRpbGVzIHRoYXQgYXJlIGFuIG92ZXJsYXkuIE9TTSAvIEdvb2dsZSAvIE1hcG5payB0ZW5kIHRvIG1ha2UgdGlsZXMgaW4gdGhpcyBmb3JtYXQuXG4gICAgICAgICAqL1xuICAgICAgICBlbHNlIGlmICh0eXBlb2YgTGF5ZXJDb25maWdbb3ZlcmxheU5hbWVdID09PSAnb2JqZWN0J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAmJiBMYXllckNvbmZpZ1tvdmVybGF5TmFtZV0udHlwZS50b0xvd2VyQ2FzZSgpID09PSAneHl6Jykge1xuXG4gICAgICAgICAgdmFyIGNmZyA9IExheWVyQ29uZmlnW292ZXJsYXlOYW1lXTtcbiAgICAgICAgICB2YXIgbGF5ZXIgPSBMLnRpbGVMYXllcihjZmcudXJsLCB7XG4gICAgICAgICAgICBvcGFjaXR5OiBjZmcub3BhY2l0eSB8fCAwLjVcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUTVMgZmxpcHMgdGhlIHkuIEdlb1NlcnZlciBvZnRlbiBzZXJ2ZXMgdGhpcy5cbiAgICAgICAgICovXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBMYXllckNvbmZpZ1tvdmVybGF5TmFtZV0gPT09ICdvYmplY3QnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICYmIExheWVyQ29uZmlnW292ZXJsYXlOYW1lXS50eXBlLnRvTG93ZXJDYXNlKCkgPT09ICd0bXMnKSB7XG4gICAgICAgICAgdmFyIGNmZyA9IExheWVyQ29uZmlnW292ZXJsYXlOYW1lXTtcbiAgICAgICAgICB2YXIgbGF5ZXIgPSBMLnRpbGVMYXllcihjZmcudXJsLCB7XG4gICAgICAgICAgICBvcGFjaXR5OiBjZmcub3BhY2l0eSB8fCAwLjUsXG4gICAgICAgICAgICB0bXM6IHRydWVcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGlmIGl0cyBub3Qgd21zLCBpdHMgYSB2ZWN0b3IgbGF5ZXJcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgdmFyIHZlY1JlcyA9IFZlY3RvclByb3ZpZGVyLmNyZWF0ZVJlc291cmNlKG92ZXJsYXlOYW1lKTtcbiAgICAgICAgICB2YXIgbGF5ZXIgPSB2ZWNSZXMuZ2V0TGF5ZXIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxheWVyLm92ZXJsYXlOYW1lID0gb3ZlcmxheU5hbWU7XG4gICAgICAgIGxheWVyLmFkZFRvKG1hcCk7XG4gICAgICAgIG92ZXJsYXlzW2ldID0gbGF5ZXI7XG4gICAgICAgIG92ZXJsYXlzX2RpY3Rpb25hcnlbb3ZlcmxheU5hbWVdID0gbGF5ZXI7IC8va2VlcCBhIGRpY3Rpb25hcnkgcmVmZXJlbmNlIGZvciBmYXN0ZXIgZmV0Y2hpbmcgaW4gVXBkYXRlRUNPU0RhdGFcblxuICAgICAgfVxuXG4gICAgICAvLyB0aGVyZSBhcmUgbW9yZSBvdmVybGF5cyBsZWZ0IGluIHRoZSBsaXN0LCBsZXNzIGxheWVycyBzcGVjaWZpZWQgaW4gcm91dGVcbiAgICAgIC8vIHdlIG5lZWQgdG8gcmVtb3ZlIHRob3NlIHRvby5cbiAgICAgIGZvcih2YXIgbGVuMiA9IG92ZXJsYXlzLmxlbmd0aDsgaSA8IGxlbjI7ICsraSkge1xuICAgICAgICBpZiAob3ZlcmxheXNbaV0uZGVzdHJveVJlc291cmNlKSBvdmVybGF5c1tpXS5kZXN0cm95UmVzb3VyY2UoKTtcbiAgICAgICAgbWFwLnJlbW92ZUxheWVyKG92ZXJsYXlzW2ldKTtcbiAgICAgICAgZGVsZXRlIG92ZXJsYXlzX2RpY3Rpb25hcnlbb3ZlcmxheXNbaV0ub3ZlcmxheU5hbWVdOyAvL2RlbGV0ZSBkaWN0aW9uYXJ5IHJlZmVyZW5jZSBmb3IgZmFzdGVyIGZldGNoaW5nIGluIFVwZGF0ZUVDT1NEYXRhXG4gICAgICAgIGRlbGV0ZSBvdmVybGF5c1tpXTtcblxuICAgICAgfVxuXG5cbiAgfVxuXG4gIC8qKlxuICAgKiBVc2VkIHByaXZhdGVseSB0byByZWJ1aWxkIHRoZSB0aGVtZSBjb3VudCBsYXllci5cbiAgICovXG4gIGZ1bmN0aW9uIHJlc2V0VGhlbWVDb3VudCgpIHtcblxuICAgIGZvciAodmFyIGogPSAwLCBsZW4gPSBvdmVybGF5TmFtZXMubGVuZ3RoOyBqIDwgbGVuOyBqKyspIHtcbiAgICAgIHZhciBubWUgPSBvdmVybGF5TmFtZXNbal07XG4gICAgICBpZiAobm1lID09PSAndGhlbWVjb3VudCcgfHwgbm1lID09PSAndGhlbWUnKSB7XG4gICAgICAgIHZhciBvbGRMeXIgPSBvdmVybGF5c1tqXTtcbiAgICAgICAgb2xkTHlyLmRlc3Ryb3lSZXNvdXJjZSgpO1xuICAgICAgICBtYXAucmVtb3ZlTGF5ZXIob2xkTHlyKTtcbiAgICAgICAgdmFyIG5ld0x5ciA9IG92ZXJsYXlzW2pdID0gVmVjdG9yUHJvdmlkZXIuY3JlYXRlUmVzb3VyY2Uobm1lKS5nZXRMYXllcigpO1xuICAgICAgICBuZXdMeXIuYWRkVG8obWFwKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgfVxuXG4gIC8qKlxuICAgKiBXaGVuIHRoZSB0aGVtZSBjaGFuZ2VzLCB0aGlzIGZ1bmN0aW9uIHdpbGwgYmUgZmlyZWQuXG4gICAqIEBwYXJhbSB0aGVtZVxuICAgKi9cbiAgZnVuY3Rpb24gb25UaGVtZUNoYW5nZWQodGhlbWUpe1xuICAgIC8vcmVzZXQgdGhlbWUgY291bnRcbiAgICByZXNldFRoZW1lQ291bnQoKTtcblxuICAgIHZhciBsYXllciA9IG92ZXJsYXlzX2RpY3Rpb25hcnlbXCJnYWRtMFwiXTtcblxuICAgIGlmKGxheWVyKXtcbiAgICAgIC8vRm9yIHZlY3RvciB0aWxlIGNob3JvcGxldGhzLCBhc2sgZm9yIG5ldyBkYXRhIC5qc29uIGZyb20gdGhlIHNlcnZlclxuICAgICAgZ2V0RUNPU1Byb3BlcnRpZXMoZnVuY3Rpb24gKGRhdGEpIHtcblxuICAgICAgICBpZihkYXRhICYmIGRhdGEuZmVhdHVyZXMpIHtcblxuICAgICAgICAgIHZhciBndWlkcyA9IHt9O1xuXG4gICAgICAgICAgYW5ndWxhci5mb3JFYWNoKGRhdGEuZmVhdHVyZXMsIGZ1bmN0aW9uIChkYXRhSXRlbSwgZGF0YUtleSkge1xuICAgICAgICAgICAgZ3VpZHNbZGF0YUl0ZW0ucHJvcGVydGllcy5ndWlkXSA9IGRhdGFJdGVtLnByb3BlcnRpZXM7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICAkcm9vdFNjb3BlLnZ0RGF0YSA9IGd1aWRzOyAvL1N0b3JlIHRoZSBkYXRhIHRvIGJlIG1lcmdlZCB3aXRoIHZlY3RvciB0aWxlIGxheWVyLiAgSW4gY29uZmlnL3ZlY3RvcnRpbGVzLmpzLCB0aGUgTVZUIGNob3JvcGxldGggbGF5ZXJzIHdpbGwgYXR0ZW1wdCB0byBtZXJnZSB0aGlzIGRhdGEgaW4gd2hlbiB0aWxlcyBmaW5pc2ggbG9hZGluZyAoYW55IHRpbWUgbmV3IHRpbGVzIGFyZSByZXF1ZXN0ZWQsIGxpa2Ugem9vbWluL291dC9wYW4pXG5cbiAgICAgICAgICB2YXIgbGF5ZXJzID0gbGF5ZXIuZ2V0TGF5ZXJzKCk7XG4gICAgICAgICAgdmFyIHZ0TGF5ZXIgPSBsYXllcnNbXCJHQURNXzIwMTRcIl07XG4gICAgICAgICAgdmFyIHZ0TGFiZWxMYXllciA9IGxheWVyc1tcIkdBRE1fMjAxNF9sYWJlbFwiXTtcblxuICAgICAgICAgIC8vQ2xlYXIgZWNvcyBwcm9wZXJ0eSBmcm9tIE1WVEZlYXR1cmVcbiAgICAgICAgICBjbGVhckZlYXR1cmVQcm9wZXJ0aWVzKHZ0TGF5ZXIuZmVhdHVyZXMpO1xuICAgICAgICAgIC8vQ2xlYXIgZWNvcyBwcm9wZXJ0eSBmcm9tIExhYmVsIExheWVyXG4gICAgICAgICAgY2xlYXJGZWF0dXJlUHJvcGVydGllcyh2dExhYmVsTGF5ZXIuZmVhdHVyZXMpO1xuXG4gICAgICAgICAgLy9VcGRhdGUgTGF5ZXIocykgc3R5bGUgYW5kIHJlZHJhd1xuICAgICAgICAgIHZ0TGF5ZXIuY2xlYXJMYXllckZlYXR1cmVIYXNoKCk7IC8vRm9yY2UgVlRzIHRvIGJlIHJlcGFyc2VkLlxuICAgICAgICAgIHZ0TGFiZWxMYXllci5jbGVhckxheWVyRmVhdHVyZUhhc2goKTtcblxuICAgICAgICAgIC8vbGF5ZXIuc2V0U3R5bGUobGF5ZXIuc3R5bGUpOyAvL2ZlZWQgYmFjayBpbiB0aGUgc2FtZSBzdHlsZVxuICAgICAgICAgIGxheWVyLnJlZHJhdyhmYWxzZSk7IC8vZmFsc2UgbWVhbnMgdGhhdCB0aGlzIHJlZHJhdyB3b24ndCB0cmlnZ2VyIHRoZSBvblRpbGVzTG9hZGVkIGV2ZW50LlxuICAgICAgICAgIC8vdXBkYXRlRUNPU0RhdGEoZ3VpZHMsIHRydWUpOyAvL3RydWUgaXMgZm9yIFRoZW1lQ2hhbmdlZCBib29sZWFuXG4gICAgICAgIH1cblxuICAgICAgfSlcbiAgICB9XG5cblxuXG4gICAgLy9yZWRyYXcgbWFwIG92ZXJsYXlzIC0gdmVjdG9yIHRpbGVzIG5lZWQgdG8gYmUgcmUtc3R5bGVkIHdpdGggbmV3IHRoZW1lIGRhdGEuXG4gICAgLy9yZWRyYXdNYXBPdmVybGF5cyhvdmVybGF5TmFtZXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFdoZW4gdGhlIGZpbHRlcnMgY2hhbmdlLCB0aGlzIGZ1bmN0aW9uIHdpbGwgYmUgZmlyZWQuXG4gICAqIEBwYXJhbSB0aGVtZVxuICAgKi9cbiAgZnVuY3Rpb24gb25GaWx0ZXJzQ2hhbmdlZChmaWx0ZXJzKXtcblxuICB9XG5cbiAgZnVuY3Rpb24gcmVkcmF3TWFwT3ZlcmxheXMobGF5ZXJOYW1lcyl7XG4gICAgbWFwLmVhY2hMYXllcihmdW5jdGlvbiAobGF5ZXIpIHtcbiAgICAgIGlmKGxheWVyTmFtZXMuaW5kZXhPZihsYXllci5vdmVybGF5TmFtZSkgPiAtMSl7XG4gICAgICAgIGxheWVyLnJlZHJhdygpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFRha2UgZGF0YS9wcm9wZXJ0aWVzIGZyb20gdGhlIHNlcnZlciBhbmQgbWVyZ2UgdGhlbSBpbiB3aXRoIGEgdmVjdG9yIHRpbGVzIGxheWVyLlxuICAgKiBAcGFyYW0gZWNvc0RhdGEgLSB0aGUgZGF0YVxuICAgKiBAcGFyYW0gbGF5ZXJOYW1lcyAtIGFueSBsYXllciBuYW1lcyB0byBhcHBseSB0aGUgZGF0YSB0b1xuICAgKiBAbmV3VGhlbWUgLSBib29sZWFuLiBJZiB0cnVlLCBhIG5ldyB0aGVtZSBoYXMgYmVlbiBzZWxlY3RlZCwgc28gZXhpc3RpbmcgVlQgcHJvcGV0aWVzIHdpbGwgYmUgY2xlYXJlZC4gIElmIGZhbHNlLCB0aGVuIHdlIGNhbiBza2lwIGZlYXR1cmVzIHRoYXQgYWxyZWFkeSBoYXZlIGJlZW4gJ2ZpbGxlZCcgYW5kIHdvcnJ5IGFib3V0IG5ldyBvbmVzLlxuICAgKi9cbiAgZnVuY3Rpb24gdXBkYXRlRUNPU0RhdGEoZWNvc0RhdGEsIG5ld1RoZW1lKSB7XG5cbiAgICAgIHZhciBsYXllciA9IG92ZXJsYXlzX2RpY3Rpb25hcnlbXCJnYWRtMFwiXTtcblxuICAgICAgaWYobGF5ZXIpe1xuICAgICAgICBpZiAoZWNvc0RhdGEpIHtcbiAgICAgICAgICB2YXIgbGF5ZXJzID0gbGF5ZXIuZ2V0TGF5ZXJzKCk7XG5cbiAgICAgICAgICAvL1VwZGF0ZSBWVEZTb3VyY2UgZmlsdGVyXG4gICAgICAgICAgLy9sYXllci5zZXRGaWx0ZXIoZnVuY3Rpb24obXZ0LCBjdHgpe1xuICAgICAgICAgIC8vICAvL0ZpbHRlciBjaGVja3MgaWYgZmVhdHVyZSBoYXMgZWNvcyBwcm9wZXJ0aWVzLlxuICAgICAgICAgIC8vICByZXR1cm4gKCRyb290U2NvcGUudnREYXRhICYmICRyb290U2NvcGUudnREYXRhW212dC5wcm9wZXJ0aWVzLmd1aWRdKSA/IHRydWUgOiBmYWxzZTtcbiAgICAgICAgICAvL30pXG5cbiAgICAgICAgICAvL0lmIGFueSBmZWF0dXJlcyBhcmUgcmV0dXJuZWQsIGxvb3AgdGhydSB0aGUgdnRmcyBhbmQgYXBwbHkgdGhlc2UgdmFsdWVzLCByZXN0eWxlLlxuICAgICAgICAgIG1lcmdlRUNPU1Byb3BlcnRpZXMobGF5ZXJzLCBlY29zRGF0YSwgbmV3VGhlbWUpO1xuXG5cblxuICAgICAgICAgIC8vVXBkYXRlIExheWVyKHMpIHN0eWxlIGFuZCByZWRyYXdcbiAgICAgICAgICBsYXllci5zZXRTdHlsZShsYXllci5zdHlsZSk7IC8vZmVlZCBiYWNrIGluIHRoZSBzYW1lIHN0eWxlXG4gICAgICAgICAgbGF5ZXIucmVkcmF3KGZhbHNlKTsgLy9mYWxzZSBtZWFucyB0aGF0IHRoaXMgcmVkcmF3IHdvbid0IHRyaWdnZXIgdGhlIG9uVGlsZXNMb2FkZWQgZXZlbnQuXG4gICAgICAgIH1cbiAgICAgIH1cblxuICB9XG5cbiAgLyoqKlxuICAgKlxuICAgKiBXaGVuIHRoZSBhcHAgc3RhcnRzLCBvciB3aGVuIHRoZSBmaWx0ZXJzIGNoYW5nZSwgZmV0Y2ggdGhlIC5qc29uIGZpbGUgdGhhdCBjb250YWlucyB0aGUgY291bnRzIGZvciBhbGwgb2YgdGhlIGRpc3RyaWN0cyBmb3IgYSBnaXZlbiBBZG1pbmlzdHJhdGl2ZSBib3VuZGFyeSBsZXZlbFxuICAgKiBDdXJyZW50bHksIGVhY2ggb2YgdGhlc2UgZmlsZXMgd2lsbCBiZSBzbWFsbCBlbm91Z2ggdG8gYnVsayBsb2FkIHRoZW0gYSBzaW5nbGUgdGltZSwgYXMgb3Bwb3NlZCB0byB3aGVuIHRoZSB1c2VyIHBhbnMgdGhlIG1hcC5cbiAgICogVGhlc2UgZmlsZXMgd2lsbCBiZSB1c2VkIHRvIHVwZGF0ZSB0aGUgdmVjdG9yIHRpbGVzIGNob3JvcGxldGggbWFwLlxuICAgKlxuICAgKiBAcGFyYW0gJGh0dHBcbiAgICogQHBhcmFtICRyb290U2NvcGVcbiAgICogQHBhcmFtIGNiXG4gICAqL1xuICBmdW5jdGlvbiBnZXRFQ09TUHJvcGVydGllcyAoY2Ipe1xuICAgIC8vVGhpcyBzaG91bGQgZmV0Y2ggZGF0YSBmcm9tIHRoZSBzZXJ2ZXIgdGhhdCBwZXJ0YWlucyB0byB0aGUgZmVhdHVyZXMgbG9hZGVkIGluIHRoZSBjdXJyZW50IGV4dGVudC5cbiAgICAvL3ZhciB1cmwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9zZXJ2aWNlcy9jdXN0b20vY3VzdG9tX29wZXJhdGlvbj9uYW1lPWdldGFnZ3JlZ2F0ZWR0aGVtZWZlYXR1cmVzYnlleHRlbnQmZm9ybWF0PWdlb2pzb24mYmJveD06YmJveCZ0aGVtZT06dGhlbWUmZ2FkbV9sZXZlbD0wJmZpbHRlcnM9OmZpbHRlcnNcIjtcbiAgICB2YXIgdXJsID0gXCIuLi9zZXJ2aWNlcy9jdXN0b20vY3VzdG9tX29wZXJhdGlvbj9uYW1lPWdldGFsbGFnZ3JlZ2F0ZWR0aGVtZWZlYXR1cmVzJmZvcm1hdD1nZW9qc29uJnRoZW1lPTp0aGVtZSZnYWRtX2xldmVsPTAmZmlsdGVycz06ZmlsdGVyc1wiO1xuICAgIC8vdXJsID0gdXJsLnJlcGxhY2UoXCI6YmJveFwiLCAkcm9vdFNjb3BlLmJib3gpO1xuXG4gICAgaWYgKCRyb290U2NvcGUuJHN0YXRlUGFyYW1zLmZpbHRlcnMpIHtcbiAgICAgIGZpbHRlcnMgPSAkcm9vdFNjb3BlLiRzdGF0ZVBhcmFtcy5maWx0ZXJzO1xuICAgICAgLy9BZGQgZmlsdGVycyB0byBVUkwuXG4gICAgICB1cmwgPSB1cmwucmVwbGFjZShcIjpmaWx0ZXJzXCIsIGZpbHRlcnMpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHVybCA9IHVybC5yZXBsYWNlKFwiJmZpbHRlcnM9OmZpbHRlcnNcIiwgXCJcIik7IC8vbm8gZmlsdGVycy4gIFJlbW92ZVxuICAgIH1cblxuICAgIHZhciB0aGVtZSA9ICRyb290U2NvcGUuJHN0YXRlUGFyYW1zLnRoZW1lIHx8ICdwcm9qZWN0JztcbiAgICB1cmwgPSB1cmwucmVwbGFjZShcIjp0aGVtZVwiLCB0aGVtZSk7XG5cbiAgICAvL1doZW4gZG9uZSwgY2FsbCB0aGUgY2IgKGNhbGxiYWNrKSBmdW5jdGlvblxuICAgICRodHRwLmdldCh1cmwsIHtjYWNoZTogdHJ1ZX0pLnN1Y2Nlc3MoY2IpLmVycm9yKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiZXJyXCIpO1xuICAgIH0pO1xuICB9XG5cbiAgLy9UYWtlIGFuIE1WVExheWVyKHMpIGFuZCBhZGQgaW4gcHJvcGVydGllcyBmcm9tIGEgd2ViIHNlcnZpY2UgY2FsbFxuICAvL25ld1RoZW1lIGlzIGEgYm9vbGVhbiB0aGF0IHRlbGxzIHVzIHdoZXRoZXIgdG8gY2xlYXIgZXhpc3RpbmcgcHJvcGVydGllcyBvciBrZWVwIHdoYXQgd2UndmUgZ290IGFuZCBqdXN0IGFkZCB0byB0aGUgc2V0LlxuICBmdW5jdGlvbiBtZXJnZUVDT1NQcm9wZXJ0aWVzKE1WVExheWVycywgZGF0YSwgbmV3VGhlbWUpe1xuICAgIGlmIChNVlRMYXllcnMpIHtcblxuICAgICAgdmFyIGZ1bGxTdGFydCA9IG5ldyBEYXRlKCk7XG5cbiAgICAgIC8vR3JhYiB0aGUgY3VycmVudCB0aGVtZS5cbiAgICAgIHZhciB0aGVtZSA9ICgkcm9vdFNjb3BlICYmICRyb290U2NvcGUuJHN0YXRlUGFyYW1zICYmICRyb290U2NvcGUuJHN0YXRlUGFyYW1zLnRoZW1lKSB8fCAncHJvamVjdCc7XG5cbiAgICAgIGZvciAodmFyIGxheWVyIGluIE1WVExheWVycykge1xuICAgICAgICBpZiAobGF5ZXIgJiYgTVZUTGF5ZXJzW2xheWVyXS5mZWF0dXJlcykge1xuXG4gICAgICAgICAgLy9vcHRpb25hbGx5IGNsZWFyIG91dCBvbGQgRUNPUyBwcm9wZXJ0aWVzLlxuICAgICAgICAgIGlmIChuZXdUaGVtZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgLy9DbGVhciBlY29zIHByb3BlcnR5IGZyb20gTVZURmVhdHVyZVxuICAgICAgICAgICAgY2xlYXJGZWF0dXJlUHJvcGVydGllcyhNVlRMYXllcnNbbGF5ZXJdLmZlYXR1cmVzKTtcbiAgICAgICAgICAgIC8vXCJ1bmxpbmtcIiB0aGUgZGF0YSAtIHNldCB0aGUgbGlua2VkIHByb3BlcnR5IHRvIGZhbHNlLlxuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vSXRlcmF0ZSBvdmVyIGRhdGEsIHVzZSB0aGUgSUQgdG8gYXR0ZW1wdCB0byBsaW5lIHVwIGRhdGEgaW4gTVZUTGF5ZXIuZmVhdHVyZXMgZGljdGlvbmFyeSAoaWQgaXMgdGhlIGtleSlcbiAgICAgICAgICBhbmd1bGFyLmZvckVhY2goT2JqZWN0LmtleXMoZGF0YSksIGZ1bmN0aW9uIChrZXkpIHsgLy8ubWFwKGZ1bmN0aW9uKGl0ZW0peyByZXR1cm4gIWl0ZW0ucHJvcGVydGllcy5pc01hcHBlZDsgfSlcbiAgICAgICAgICAgIHZhciB2dGYgPSBNVlRMYXllcnNbbGF5ZXJdLmZlYXR1cmVzW2tleV07XG5cbiAgICAgICAgICAgIC8vbWFyayBhcyBsaW5rZWRcbiAgICAgICAgICAgIGRhdGEuaXNMaW5rZWQgPSB0cnVlO1xuXG4gICAgICAgICAgICBpZiAodnRmKSB7XG4gICAgICAgICAgICAgIHZ0Zi5wcm9wZXJ0aWVzLnRoZW1lID0gdGhlbWU7XG4gICAgICAgICAgICAgIHZ0Zi5wcm9wZXJ0aWVzLmVjb3NfcHJvcGVydGllcyA9IHt9O1xuICAgICAgICAgICAgICB2dGYucHJvcGVydGllcy5lY29zX3Byb3BlcnRpZXNbdGhlbWVdID0gZGF0YVtrZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIG1zRGlmZiA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gbmV3IERhdGUoZnVsbFN0YXJ0KS5nZXRUaW1lKCk7IC8vRGlmZmVyZW5jZSBpbiBtc1xuICAgICAgY29uc29sZS5sb2coXCJNZXJnZSBUaW1lOiBcIiArIG1zRGlmZik7XG4gICAgfVxuICB9XG5cbiAgLy9BcyB3ZSBzd2FwIEVDT1MgcHJvcGVydGllcyBvdXQgb24gdGhlIHZlY3RvciB0aWxlIGxheWVyLCBjbGVhciBvdXQgdGhlIG9sZCBwcm9wZXJ0aWVzIHNvIHdlIGRvbid0IGdldCByZXNpZHVhbCB0aGVtZSB2YWx1ZXMgZnJvbSBvbGQgdGhlbWVzLlxuICBmdW5jdGlvbiBjbGVhckZlYXR1cmVQcm9wZXJ0aWVzKGZlYXR1cmVzKXtcblxuICAgIGFuZ3VsYXIuZm9yRWFjaChmZWF0dXJlcywgZnVuY3Rpb24gKHZ0ZiwgdnRma2V5KSB7XG4gICAgICBpZih2dGYucHJvcGVydGllcykge1xuICAgICAgICB2dGYucHJvcGVydGllcy5lY29zX3Byb3BlcnRpZXMgPSB7fTtcbiAgICAgICAgdnRmLnRoZW1lID0gXCJcIjtcbiAgICAgIH1cblxuICAgICAgLy9SZW1vdmUgT2xkIGxhYmVsc1xuICAgICAgdnRmLnJlbW92ZUxhYmVsKCk7XG5cbiAgICB9KTtcblxuICB9XG5cbn0pO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnR2VvQW5ndWxhcicpLmNvbnRyb2xsZXIoJ05hdkJhckN0cmwnLCBmdW5jdGlvbigkc2NvcGUsICRzdGF0ZSwgJHN0YXRlUGFyYW1zKSB7XG5cbiAgJHNjb3BlLnBhcmFtcyA9ICRzdGF0ZVBhcmFtcztcblxufSk7XG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgUnlhbiBXaGl0bGV5IDxyd2hpdGxleUBzcGF0aWFsZGV2LmNvbT5cbiAqICAgICAgIG9uIDUvMjEvMTQuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnR2VvQW5ndWxhcicpLmNvbnRyb2xsZXIoJ1NlYXJjaEVDT1NDdHJsJywgZnVuY3Rpb24oJHNjb3BlLCAkcm9vdFNjb3BlLCAkc3RhdGVQYXJhbXMsICRodHRwLCBWZWN0b3JQcm92aWRlcikge1xuICBjb25zb2xlLmxvZygnU2VhcmNoRUNPU0N0cmwnKTtcbiAgJHNjb3BlLnBhcmFtcyA9ICRzdGF0ZVBhcmFtcztcblxuICB2YXIgdXJsID0gY29uZmlnLmNodWJic1BhdGgoJ3NlcnZpY2VzL2N1c3RvbS9jdXN0b21fb3BlcmF0aW9uP25hbWU9ZG9lY29zdGV4dHNlYXJjaCZmb3JtYXQ9anNvbiZ0ZXh0PTp0ZXh0Jyk7XG5cbiAgJHNjb3BlLnNlYXJjaFRleHQgPSAnJztcbiAgJHNjb3BlLiR3YXRjaCgnU2VhcmNoSW5wdXQnLCBleGVjdXRlRUNPU1NlYXJjaCwgdHJ1ZSk7XG5cblxuICBmdW5jdGlvbiBleGVjdXRlRUNPU1NlYXJjaCAodGV4dCl7XG4gICAgICBpZighdGV4dCB8fCB0ZXh0Lmxlbmd0aCA8IDMpIHJldHVybjtcblxuICAgICAgdmFyIHRoaXNVUkwgPSB1cmwucmVwbGFjZShcIjp0ZXh0XCIsIHRleHQpO1xuXG4gICAgICAvLyBGZXRjaCBmcm9tIHRoZSBzZXJ2ZXIgb25seSBpZiB3ZSBkb24ndCBoYXZlIGl0IGluIHRoZSBoYXNoXG4gICAgICAkaHR0cC5nZXQodGhpc1VSTCkuc3VjY2VzcyhmdW5jdGlvbiAocmVzdWx0LCBzdGF0dXMpIHtcblxuICAgICAgICAgIGlmICghcmVzdWx0KXtcbiAgICAgICAgICAgICAgJHNjb3BlLnJlc3VsdHMgPSBbe25hbWU6IFwiTm8gcmVzdWx0cyBmb3VuZC5cIn1dO1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYocmVzdWx0LmVycm9yKSB7XG4gICAgICAgICAgICAgICRzY29wZS5yZXN1bHRzID0gW3tuYW1lOiBcIkVycm9yIHNlYXJjaGluZyBFQ09TLlwifV07XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvL2JyZWFrIHVwIHRoZSByZXN1bHRzIGJ5IHR5cGUuXG4gICAgICAgICAgJHNjb3BlLnByb2plY3RSZXN1bHRzID0gcmVzdWx0LmZpbHRlcihmdW5jdGlvbihpdGVtKXtcbiAgICAgICAgICAgICByZXR1cm4gaXRlbS50aGVtZV90eXBlID09ICdQcm9qZWN0JztcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgICRzY29wZS5kaXNhc3RlclJlc3VsdHMgPSByZXN1bHQuZmlsdGVyKGZ1bmN0aW9uKGl0ZW0pe1xuICAgICAgICAgICAgICByZXR1cm4gaXRlbS50aGVtZV90eXBlID09ICdEaXNhc3Rlcic7XG4gICAgICAgICAgfSk7XG5cbiAgICAgIH0pO1xuICB9XG5cbiAgICAvL1doZW4gYSB1c2VyIGNsaWNrcyBvbmUgb2YgdGhlIHNlYXJjaCByZXN1bHQgaXRlbXNcbiAgICAkc2NvcGUuaGFuZGxlU2VhcmNoUmVzdWx0Q2xpY2sgPSBmdW5jdGlvbihwcm9wZXJ0aWVzKXtcbiAgICAgICAgLy9TZW5kIHRvIGRlYXRpbHMgcGFuZWxcbiAgICAgICAgc2VuZFByb2plY3RUb0RldGFpbHNQYW5lbChwcm9wZXJ0aWVzKTtcblxuICAgICAgICAvL0lmIHdlIGhhdmUgYSBndWlkLCB0aGVuIHRyeSB0byB6b29tIHRvIGl0LlxuICAgICAgICBpZihwcm9wZXJ0aWVzLmxvY2F0aW9uX19yX2dpc19nZW9faWRfX2MgJiYgcHJvcGVydGllcy5sZXZlbCl7XG4gICAgICAgICAgICB6b29tVG9HVUlEKHByb3BlcnRpZXMubG9jYXRpb25fX3JfZ2lzX2dlb19pZF9fYywgcHJvcGVydGllcy5sZXZlbCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gc2VuZFByb2plY3RUb0RldGFpbHNQYW5lbCAocHJvcGVydGllcykge1xuICAgICAgJHJvb3RTY29wZS4kYnJvYWRjYXN0KCdkZXRhaWxzJywge2ZlYXR1cmU6IHtwcm9wZXJ0aWVzOiBwcm9wZXJ0aWVzfX0pO1xuICAgIH1cblxuXG4gICAgLy90aGlzIGlzIGEgZHVwbGljYXRlIGZyb20gYnJlYWRjcnVtYnMuanMgIFNob3VsZCBiZSByZWZhY3RvcmVkIHRvIGEgc2luZ2xlIGZ1bmN0aW9uXG4gICAgZnVuY3Rpb24gem9vbVRvR1VJRCAoZ3VpZCwgbGV2ZWwpIHtcbiAgICAgICAgLy9HaXZlbiBhIEdVSUQsIHpvb20gdG8gdGhlIGZlYXR1cmUuXG5cbiAgICAgICAgLy9HcmFiIHRoZSBmZWF0dXJlIGZyb20gdGhlIFZlY3RvclByb3ZpZGVyLlxuICAgICAgICBWZWN0b3JQcm92aWRlci5mZXRjaEZlYXR1cmUoZ3VpZCwgbGV2ZWwsIG51bGwsIGZ1bmN0aW9uIChmZWF0KSB7XG4gICAgICAgICAgICAvL01ha2UgYSB0ZW1wIGdlb2pzb24gbGF5ZXIgYW5kIGFkZCB0aGUgZ2VvanNvbi5cbiAgICAgICAgICAgIC8vVGhlbiBncmFiIHRoZSBib3VuZHMgZnJvbSBpdCBhbmQgem9vbSB0byBpdC5cblxuICAgICAgICAgICAgdmFyIGdqbCA9IEwuZ2VvSnNvbihmZWF0Lmdlb21ldHJ5KTtcbiAgICAgICAgICAgICRzY29wZS4kcGFyZW50Lnpvb21Ub0JvdW5kcyhnamwuZ2V0Qm91bmRzKCkpO1xuICAgICAgICB9KTtcblxuICAgIH07XG59KTtcbiIsIi8qKlxuICogQ3JlYXRlZCBieSBOaWNob2xhcyBIYWxsYWhhbiA8bmhhbGxhaGFuQHNwYXRpYWxkZXYuY29tPlxuICogICAgICAgIGFuZCBSeWFuIFdoaXRsZXkgICAgICA8cndoaXRsZXlAc3BhdGlhbGRldi5jb20+XG4gKiAgICAgICAgIG9uIDQvMTYvMTQuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnR2VvQW5ndWxhcicpLmNvbnRyb2xsZXIoJ1NpZGVWaWV3Q3RybCcsIGZ1bmN0aW9uKCRzY29wZSkge1xuXG4gIC8vcmVzaXplIGZ1bmN0aW9uXG4gIGZ1bmN0aW9uIHJlc2l6ZVNjcm9sbGFibGVQYW5lbCgpIHtcbiAgICAkKFwiLnNpZGUtdmlldyAuc2Nyb2xsYWJsZVwiKS5oZWlnaHQoJChcIi5zaWRlLXZpZXcgLm5hdnBhbmVsXCIpLmhlaWdodCgpIC0gJChcIi5zaWRlLXZpZXcgLm5hdnBhbmVsIC5zY3JvbGxhYmxlXCIpLnBvc2l0aW9uKCkudG9wKTsgIC8vVGhpcyBzaG91bGQgcmVzcG9uZCB0byB3aW5kb3cucmVzaXplIGV2ZW50cyBhbmQgd2lsbCBiZSBzZXQgZHVyaW5nIHRoYXQgZXZlbnQgdG8gbWFrZSBzdXJlIHRoZSBwYW5lbCBzdGF5c1xuICB9XG5cbiAgLy9Db25uZWN0IHRoZSBsYXlvdXQgb25yZXNpemUgZW5kIGV2ZW50XG4gIHdpbmRvdy5sYXlvdXQucGFuZXMuY2VudGVyLmJpbmQoXCJsYXlvdXRwYW5lb25yZXNpemVfZW5kXCIsIHJlc2l6ZVNjcm9sbGFibGVQYW5lbCk7XG5cbiAgLy9Gb3IgSW5pdC5cbiAgcmVzaXplU2Nyb2xsYWJsZVBhbmVsKCk7XG5cbn0pO1xuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IE5pY2hvbGFzIEhhbGxhaGFuIDxuaGFsbGFoYW5Ac3BhdGlhbGRldi5jb20+XG4gKiAgICAgICBvbiAzLzI2LzE0LlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ0dlb0FuZ3VsYXInKS5jb250cm9sbGVyKCdTdG9yaWVzQ3RybCcsIGZ1bmN0aW9uKCRzY29wZSwgJHN0YXRlUGFyYW1zLCBTdG9yaWVzQ29uZmlnKSB7XG4gICRzY29wZS5wYXJhbXMgPSAkc3RhdGVQYXJhbXM7XG5cbiAgLy9HZXQgU3RvcmllcyBmcm9tIGNvbmZpZyBmaWxlIGFuZCBsb2FkIHRoZW0uXG4gICRzY29wZS5zdG9yaWVzQ29uZmlnID0gU3Rvcmllc0NvbmZpZztcbiAgJHNjb3BlLnN0b3JpZXMgPSBbXTtcbiAgJHNjb3BlLnN0b3JpZXNTZWFyY2hBcnJheSA9IFtdO1xuICAkc2NvcGUuc3Rvcmllc1NlYXJjaFRleHQgPSBcIlwiO1xuICAkc2NvcGUuc3Rvcmllc0V4dGVudEFycmF5ID0gW107IC8vY3VycmVudGx5IG5vdCB1c2VkLCBidXQgc2hvdWxkIGJlIHRvIGFsbG93IEV4dGVudCB0byBwZXJmb3JtICdBTkQnIGxvZ2ljIHdpdGggdGhlIGtleXdvcmRzLlxuXG4gIGZvciAodmFyIHN0b3JpZXNLZXkgaW4gU3Rvcmllc0NvbmZpZykge1xuXG4gICAgLy8gV2UgZG9uJ3Qgd2FudCB0byBzaG93IHRoZSBmaW5kIGZ1bmMuXG4gICAgaWYgKHR5cGVvZiBTdG9yaWVzQ29uZmlnW3N0b3JpZXNLZXldID09PSAnZnVuY3Rpb24nIHx8IHN0b3JpZXNLZXkgPT0gJ3N0b3JpZXMnKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICAkc2NvcGUuc3Rvcmllcy5wdXNoKFN0b3JpZXNDb25maWdbc3Rvcmllc0tleV0pO1xuICB9XG5cbiAgJHNjb3BlLmZpbHRlckJ5Q2hlY2tib3ggPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgIC8vVGFrZSB0aGUgdGVybSBwYXNzZWQgaW4gYW5kIGFkZCBvciByZW1vdmUgaXQgZnJvbSB0aGUga2V5d29yZHMgdGV4dGJveC5cbiAgICBpZiAoJHNjb3BlLnN0b3JpZXNTZWFyY2hBcnJheS5pbmRleE9mKHZhbHVlKSA9PSAtMSkge1xuICAgICAgLy9BZGQgaXRcbiAgICAgICRzY29wZS5zdG9yaWVzU2VhcmNoQXJyYXkucHVzaCh2YWx1ZSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgLy9SZW1vdmUgaXRcbiAgICAgICRzY29wZS5zdG9yaWVzU2VhcmNoQXJyYXkuc3BsaWNlKCRzY29wZS5zdG9yaWVzU2VhcmNoQXJyYXkuaW5kZXhPZih2YWx1ZSksIDEpO1xuICAgIH1cbiAgfTtcblxuICAkc2NvcGUuZmlsdGVyRXh0ZW50QnlDaGVja2JveCA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgLy9UYWtlIHRoZSB0ZXJtIHBhc3NlZCBpbiBhbmQgYWRkIG9yIHJlbW92ZSBpdCBmcm9tIHRoZSBrZXl3b3JkcyB0ZXh0Ym94LlxuICAgIGlmICgkc2NvcGUuc3Rvcmllc0V4dGVudEFycmF5LmluZGV4T2YodmFsdWUpID09IC0xKSB7XG4gICAgICAvL0FkZCBpdFxuICAgICAgJHNjb3BlLnN0b3JpZXNFeHRlbnRBcnJheS5wdXNoKHZhbHVlKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAvL1JlbW92ZSBpdFxuICAgICAgJHNjb3BlLnN0b3JpZXNFeHRlbnRBcnJheS5zcGxpY2UoJHNjb3BlLnN0b3JpZXNFeHRlbnRBcnJheS5pbmRleE9mKHZhbHVlKSwgMSk7XG4gICAgfVxuICB9O1xuXG4gICRzY29wZS5jbGVhclNlYXJjaCA9IGZ1bmN0aW9uKCkge1xuICAgICRzY29wZS5zdG9yaWVzU2VhcmNoQXJyYXkgPSBbXTtcbiAgICAkc2NvcGUuc3Rvcmllc1NlYXJjaFRleHQgPSBcIlwiO1xuICAgICRzY29wZS5zdG9yaWVzRXh0ZW50QXJyYXkgPSBbXTtcbiAgfVxufSk7XG5cblxuYW5ndWxhci5tb2R1bGUoJ0dlb0FuZ3VsYXInKS5maWx0ZXIoJ3NlYXJjaFN0b3JpZXNGaWx0ZXInLCBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oc3RvcmllcywgJHNjb3BlKSB7XG4gICAgICB2YXIgb3V0U3RvcmllcyA9IFtdO1xuICAgICAgaWYgKHN0b3JpZXMpIHtcbiAgICAgICAgLy9sb29wIHRocnUgc3RvcmllcyBhbmQgZmlsdGVyIGJhc2VkIG9uIHNlYXJjaCB0ZXh0L2NoZWNrYm94ZXMuXG4gICAgICAgIC8vY29tbWEgc2VwYXJhdGVkIGl0ZW1zIHNob3VsZCBiZSBicm9rZW4gdXAgYW5kIHNlYXJjaGVkIGZvciBzZXBhcmF0ZWx5IHVzaW5nICdPUicgbG9naWMuXG5cbiAgICAgICAgdmFyIGtleXdvcmRzID0gW107XG4gICAgICAgIGlmICgkc2NvcGUuc3Rvcmllc1NlYXJjaFRleHQubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGtleXdvcmRzID0gJHNjb3BlLnN0b3JpZXNTZWFyY2hUZXh0LnNwbGl0KFwiLFwiKS5jb25jYXQoJHNjb3BlLnN0b3JpZXNTZWFyY2hBcnJheSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAga2V5d29yZHMgPSAkc2NvcGUuc3Rvcmllc1NlYXJjaEFycmF5O1xuICAgICAgICB9XG4gICAgICAgIGlmIChrZXl3b3Jkcy5sZW5ndGggPT0gMCkge1xuICAgICAgICAgIHJldHVybiBzdG9yaWVzO1xuICAgICAgICB9XG5cbiAgICAgICAgc3Rvcmllcy5mb3JFYWNoKGZ1bmN0aW9uKHN0b3J5KSB7XG4gICAgICAgICAga2V5d29yZHMuZm9yRWFjaChmdW5jdGlvbihrZXl3b3JkKSB7XG4gICAgICAgICAgICBpZiAoa2V5d29yZC5sZW5ndGggPiAwICYmIHN0b3J5LmtleXdvcmRzLnRvTG93ZXJDYXNlKCkuaW5kZXhPZigkLnRyaW0oa2V5d29yZC50b0xvd2VyQ2FzZSgpKSkgPiAtMSkge1xuICAgICAgICAgICAgICBpZiAob3V0U3Rvcmllcy5pbmRleE9mKHN0b3J5KSA9PSAtMSkge1xuICAgICAgICAgICAgICAgIG91dFN0b3JpZXMucHVzaChzdG9yeSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cblxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHN0b3JpZXM7XG4gICAgICB9XG4gICAgICByZXR1cm4gb3V0U3RvcmllcztcbiAgICB9O1xuICB9KTsiLCIvKipcbiAqIENyZWF0ZWQgYnkgTmljaG9sYXMgSGFsbGFoYW4gPG5oYWxsYWhhbkBzcGF0aWFsZGV2LmNvbT5cbiAqICAgICAgIG9uIDUvNi8xNC5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdHZW9Bbmd1bGFyJykuY29udHJvbGxlcignVGhlbWVDdHJsJywgZnVuY3Rpb24gKCRzY29wZSwgJHJvb3RTY29wZSwgJHN0YXRlLCAkc3RhdGVQYXJhbXMsIFZlY3RvclByb3ZpZGVyKSB7XG5cbiAgdmFyIHRoZW1lTmFtZUhhc2ggPSAkcm9vdFNjb3BlLnRoZW1lTmFtZUhhc2ggPSB7XG4gICAgcHJvamVjdDogJ1Byb2plY3RzJyxcbiAgICBkaXNhc3RlcjogJ0Rpc2FzdGVycycsXG4gICAgcHJvamVjdFJpc2s6ICdQcm9qZWN0IFJpc2snLFxuICAgIHByb2plY3RIZWFsdGg6ICdQcm9qZWN0IEhlYWx0aCcsXG4gICAgbm9uZTogJ05vbmUnXG4gIH07XG5cbiAgJHNjb3BlLnByb2plY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgJHNjb3BlLnRoZW1lTmFtZSA9IHRoZW1lTmFtZUhhc2gucHJvamVjdDtcbiAgICBlbnN1cmVUaGVtZUNvdW50KCk7XG4gICAgJHNjb3BlLnNldFRoZW1lUXVlcnlQYXJhbSgncHJvamVjdCcpO1xuICB9O1xuXG4gICRzY29wZS5kaXNhc3RlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAkc2NvcGUudGhlbWVOYW1lID0gdGhlbWVOYW1lSGFzaC5kaXNhc3RlcjtcbiAgICBlbnN1cmVUaGVtZUNvdW50KCk7XG4gICAgJHNjb3BlLnNldFRoZW1lUXVlcnlQYXJhbSgnZGlzYXN0ZXInKTtcbiAgfTtcblxuICAkc2NvcGUucHJvamVjdFJpc2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAkc2NvcGUudGhlbWVOYW1lID0gdGhlbWVOYW1lSGFzaC5wcm9qZWN0UmlzaztcbiAgICAgIGVuc3VyZVRoZW1lQ291bnQoKTtcbiAgICAgICRzY29wZS5zZXRUaGVtZVF1ZXJ5UGFyYW0oJ3Byb2plY3RSaXNrJyk7XG4gIH07XG5cbiAgJHNjb3BlLnByb2plY3RIZWFsdGggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAkc2NvcGUudGhlbWVOYW1lID0gdGhlbWVOYW1lSGFzaC5wcm9qZWN0SGVhbHRoO1xuICAgICAgZW5zdXJlVGhlbWVDb3VudCgpO1xuICAgICAgJHNjb3BlLnNldFRoZW1lUXVlcnlQYXJhbSgncHJvamVjdEhlYWx0aCcpO1xuICB9O1xuXG4gICRzY29wZS5ub25lID0gZnVuY3Rpb24gKCkge1xuICAgICRzY29wZS50aGVtZU5hbWUgPSB0aGVtZU5hbWVIYXNoLm5vbmU7XG4gICAgdmFyIGxheWVyc0FyciA9ICQuZ3JlcCgkc3RhdGVQYXJhbXMubGF5ZXJzLnNwbGl0KCcsJyksIGZ1bmN0aW9uKHJvdXRlTGF5ZXIpe1xuICAgICAgcmV0dXJuIHJvdXRlTGF5ZXIgIT09ICdnYWRtMCcgJiYgcm91dGVMYXllciAhPT0gJ3RoZW1lJztcbiAgICB9KTtcbiAgICAkc3RhdGVQYXJhbXMubGF5ZXJzID0gbGF5ZXJzQXJyLmpvaW4oJywnKTtcbiAgICAkc2NvcGUuc2V0VGhlbWVRdWVyeVBhcmFtKCdub25lJyk7XG4gIH07XG5cbiAgZnVuY3Rpb24gZW5zdXJlVGhlbWVDb3VudCgpIHtcbiAgICBpZiAoJHN0YXRlUGFyYW1zLmxheWVycy5pbmRleE9mKCdnYWRtMCcpID09PSAtMSAmJiAkc3RhdGVQYXJhbXMubGF5ZXJzLmluZGV4T2YoJ3RoZW1lJykgPT09IC0xKSB7XG4gICAgICAkc3RhdGVQYXJhbXMubGF5ZXJzICs9ICcsZ2FkbTAnO1xuICAgIH1cbiAgfVxuXG4gICRzY29wZS5zZXRUaGVtZVF1ZXJ5UGFyYW0gPSBmdW5jdGlvbiAodGhlbWUpIHtcbiAgICAkc3RhdGVQYXJhbXMudGhlbWUgPSB0aGVtZTtcbiAgICB2YXIgc3RhdGUgPSAkc3RhdGUuY3VycmVudC5uYW1lIHx8ICdtYWluJztcbiAgICAkc3RhdGUuZ28oc3RhdGUsICRzdGF0ZVBhcmFtcyk7XG4gIH07XG5cbiAgJHNjb3BlLnRoZW1lTmFtZSA9IHRoZW1lTmFtZUhhc2hbJHN0YXRlUGFyYW1zLnRoZW1lXSB8fCAnUHJvamVjdHMnO1xuXG4gIC8qXG4gICBIYW5kbGluZyBUaGVtZSBNZW51IEFuaW1hdGlvbnNcbiAgICovXG5cbiAgJHNjb3BlLnRvZ2dsZVRoZW1lTWVudSA9IGZ1bmN0aW9uKCl7XG4gICAgdmFyIGZsaXBwZWRPdXQgPSAkKFwiLm1lbnUtc2VsZWN0aW9uIC5kcm9wZG93blwiKS5oYXNDbGFzcyhcIm9wZW5cIik7XG5cbiAgICBpZihmbGlwcGVkT3V0ID09IGZhbHNlKXtcbiAgICAgICRzY29wZS51bmZ1cmxUaGVtZXMoKTtcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgICRzY29wZS5yZWZ1cmxUaGVtZXMoKTtcbiAgICB9XG4gIH07XG5cbiAgJHNjb3BlLnVuZnVybFRoZW1lcyA9IGZ1bmN0aW9uKCl7XG4gICAgJHNjb3BlLnJlZnVybFRoZW1lcygpO1xuICAgIC8vVHJ5IGpRdWVyeSB0byBhZGQgYW4gJ29uJyBjbGFzcyB0byBlYWNoIG9mIHRoZSB0aGVtZSBMSSBlbGVtZW50cyBvbiBhIHRpbWVyLlxuICAgICQoJCgnI1RoZW1lTWVudSBsaScpLmdldCgpLnJldmVyc2UoKSkuZWFjaChmdW5jdGlvbihpbmRleCl7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJChzZWxmKS5hZGRDbGFzcyhcInRoZW1lLXNlbGVjdG9yLWxpLW9uXCIpO1xuICAgICAgfSwgaW5kZXgqMTUwKTtcbiAgICB9KTtcbiAgfTtcblxuICAvL1JlZnVybD9cbiAgJHNjb3BlLnJlZnVybFRoZW1lcyA9IGZ1bmN0aW9uKCl7XG4gICAgLy9UcnkgalF1ZXJ5IHRvIHJlbW92ZSB0aGUgJ29uJyBjbGFzcyB0byBlYWNoIG9mIHRoZSB0aGVtZSBMSSBlbGVtZW50cyBvbiBhIHRpbWVyLlxuICAgICQoJyNUaGVtZVNlbGVjdG9yTWVudSAuZHJvcGRvd24tbWVudSBsaScpLnJlbW92ZUNsYXNzKFwidGhlbWUtc2VsZWN0b3ItbGktb25cIik7XG4gIH07XG5cbiAgLypcbiAgIEVuZCBUaGVtZSBNZW51IEFuaW1hdGlvbnNcbiAgICovXG5cbn0pO1xuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IE5pY2hvbGFzIEhhbGxhaGFuIDxuaGFsbGFoYW5Ac3BhdGlhbGRldi5jb20+XG4gKiAgICAgICBvbiA0LzE3LzE0LlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ0dlb0FuZ3VsYXInKS5jb250cm9sbGVyKCdVcGxvYWRDdHJsJywgZnVuY3Rpb24oJHNjb3BlLCAkaHR0cCwgJHN0YXRlLCAkc3RhdGVQYXJhbXMsICR1cGxvYWQpIHtcblxuICAkc2NvcGUuc2hvd0FsZXJ0ID0gZmFsc2U7XG4gICRzY29wZS5zaG93UHJvZ3Jlc3MgPSBmYWxzZTtcbiAgJHNjb3BlLnNob3dVcGxvYWRlZFVybCA9IGZhbHNlO1xuICAkc2NvcGUucGVyY2VudCA9IDM7XG4gICRzY29wZS5kaXNhYmxlZCA9IGZhbHNlO1xuICAkc2NvcGUua2JVcGxvYWRlZCA9IDA7XG4gICRzY29wZS5rYlRvdGFsID0gMDtcblxuICAkc2NvcGUuJHVwbG9hZCA9ICR1cGxvYWQ7XG5cbiAgJHNjb3BlLnVwbG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICQoXCIjdXBsb2FkLWZpbGUtaW5wdXRcIikuY2xpY2soKS5jaGFuZ2UoZnVuY3Rpb24oZXZ0KSB7XG4gICAgICAkc2NvcGUuc2hvd1Byb2dyZXNzID0gdHJ1ZTtcbiAgICAgICRzY29wZS5wZXJjZW50ID0gNTtcblxuICAgICAgdmFyIGZpbGVOYW1lID0gJCh0aGlzKS52YWwoKS5zcGxpdCgnXFxcXCcpLnBvcCgpO1xuICAgICAgdmFyIGZpbGUgPSAkKCcjdXBsb2FkLWZpbGUtaW5wdXQnKS5nZXQoMCkuZmlsZXNbMF07XG4gICAgICBwYXJzZUFuZFVwbG9hZEZpbGUoZmlsZSwgZmlsZU5hbWUpO1xuXG4gICAgfSk7XG4gIH07XG5cbiAgJHNjb3BlLmZpbGVEcm9wcGVkID0gZnVuY3Rpb24gKCRmaWxlcykge1xuICAgIHZhciBmaWxlID0gJGZpbGVzWzBdO1xuICAgIHBhcnNlQW5kVXBsb2FkRmlsZShmaWxlLCBmaWxlLm5hbWUpO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHBhcnNlQW5kVXBsb2FkRmlsZShmaWxlLCBmaWxlTmFtZSkge1xuICAgIGlmICghZmlsZU5hbWUpIGZpbGVOYW1lID0gJ2ZpbGUnO1xuICAgIHZhciByID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICByLnJlYWRBc0JpbmFyeVN0cmluZyhmaWxlKTtcbiAgICByLm9ubG9hZGVuZCA9IGZ1bmN0aW9uKGUpe1xuICAgICAgdmFyIGRhdGEgPSBlLnRhcmdldC5yZXN1bHQ7XG4gICAgICB2YXIgcG9zdE9iaiA9IHtcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIk1hcGZvbGlvIFVwbG9hZGVkIERhdGEgLSBcIiArIGZpbGVOYW1lLFxuICAgICAgICBcInB1YmxpY1wiOiB0cnVlLFxuICAgICAgICBcImZpbGVzXCI6IHt9XG4gICAgICB9O1xuICAgICAgcG9zdE9iai5maWxlc1tmaWxlTmFtZV0gPSB7Y29udGVudDogZGF0YX07XG4gICAgICAkc2NvcGUucGVyY2VudCA9IDc7XG5cbiAgICAgICRzY29wZS4kdXBsb2FkLmh0dHAoe1xuICAgICAgICB1cmw6ICdodHRwczovL2FwaS5naXRodWIuY29tL2dpc3RzJyxcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgZGF0YTogcG9zdE9iaixcbiAgICAgICAgaGVhZGVyczogeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9XG4gICAgICB9KS5wcm9ncmVzcyhmdW5jdGlvbihldnQpIHtcbiAgICAgICAgJHNjb3BlLnBlcmNlbnQgPSBwYXJzZUZsb2F0KChldnQubG9hZGVkIC8gZXZ0LnRvdGFsU2l6ZSAqIDEwMCkudG9GaXhlZCgxKSk7XG4gICAgICAgICRzY29wZS5rYlVwbG9hZGVkID0gKGV2dC5sb2FkZWQgLyAxMDI0KS50b0ZpeGVkKDIpO1xuICAgICAgICAkc2NvcGUua2JUb3RhbCA9IChldnQudG90YWxTaXplIC8gMTAyNCkudG9GaXhlZCgyKTtcbiAgICAgIH0pLnN1Y2Nlc3MoZnVuY3Rpb24gKGRhdGEsIHN0YXR1cywgaGVhZGVycywgY29uZmlnKSB7XG4gICAgICAgICRzY29wZS5zaG93UHJvZ3Jlc3MgPSBmYWxzZTtcbiAgICAgICAgdmFyIGZpbGVuYW1lID0gZGF0YS5maWxlc1tmaWxlTmFtZV0uZmlsZW5hbWU7XG4gICAgICAgICRzY29wZS5naXN0UmF3VXJsID0gZGF0YS5maWxlc1tmaWxlTmFtZV0ucmF3X3VybDtcbiAgICAgICAgJHNjb3BlLmdpc3RIdG1sVXJsID0gZGF0YS5odG1sX3VybDtcbiAgICAgICAgJHNjb3BlLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgJHNjb3BlLnNob3dVcGxvYWRlZFVybCA9IHRydWU7XG4gICAgICAgIHdpbmRvdy5naXN0cy5hcHBlbmQoe25hbWU6IGZpbGVuYW1lLCB1cmw6ICRzY29wZS5naXN0UmF3VXJsLCBodG1sVXJsOiAkc2NvcGUuZ2lzdEh0bWxVcmx9KTtcbiAgICAgIH0pLmVycm9yKGZ1bmN0aW9uIChkYXRhLCBzdGF0dXMsIGhlYWRlcnMsIGNvbmZpZykge1xuICAgICAgICAkc2NvcGUuc2hvd0FsZXJ0ID0gdHJ1ZTtcbiAgICAgICAgJHNjb3BlLmVycm9yTWVzc2FnZSA9IEpTT04uc3RyaW5naWZ5KGRhdGEsbnVsbCwyKTtcbiAgICAgIH0pO1xuXG4gICAgfTtcbiAgfVxuXG4gICRzY29wZS5hZGRUb01hcCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgbmV3VXJsID0gJHNjb3BlLmdpc3RSYXdVcmwgfHwgJHNjb3BlLnJlbW90ZVVybDtcbiAgICBpZiAoIW5ld1VybCkge1xuICAgICAgJHNjb3BlLnNob3dBbGVydCA9IHRydWU7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgJHN0YXRlUGFyYW1zLmxheWVycyA9ICRzdGF0ZVBhcmFtcy5sYXllcnMgKyAnLCcgKyBuZXdVcmw7XG4gICAgJCgnI3VwbG9hZE1vZGFsJykubW9kYWwoJ2hpZGUnKTtcbiAgICAkKCcjdXBsb2FkTW9kYWwnKS5vbignaGlkZGVuLmJzLm1vZGFsJywgZnVuY3Rpb24oZSkge1xuICAgICAgJHN0YXRlLmdvKCdtYWluJywgJHN0YXRlUGFyYW1zKTtcbiAgICB9KTtcblxuICB9O1xuXG4gIC8qKlxuICAgKiBJZiBVcGxvYWRDdHJsIGdldHMgY2FsbGVkIHR3aWNlIGZvciBzb21lIHJlYXNvbiwgd2UgbWlnaHRcbiAgICogaGF2ZSB0aGlzIGNsYXNzIGhhbmdpbmcgYXJvdW5kIGJsb2NraW5nIHRoZSBhcHAuIFVwbG9hZEN0cmxcbiAgICogZG9lcyBnZXQgY2FsbGVkIHR3aWNlIHNvbWV0aW1lcywgYmVjYXVzZSB0aGUgbW9kYWwgc29tZXRpbWVzXG4gICAqIG51ZGdlcyB0aGUgbWFwIGFuZCByZWluc3RhbnRpYXRlcyB0aGUgbW9kYWwgYWdhaW4gdmlhIGEgbmV3XG4gICAqIHJvdXRlLlxuICAgKi9cbiAgJCgnLm1vZGFsLWJhY2tkcm9wJykucmVtb3ZlKCk7XG5cbiAgJCgnI3VwbG9hZE1vZGFsJykubW9kYWwoJ3Nob3cnKTtcblxuICAkKCcjdXBsb2FkTW9kYWwnKS5vbignaGlkZGVuLmJzLm1vZGFsJywgZnVuY3Rpb24oZSkge1xuICAgICRzdGF0ZS5nbygnbWFpbicsICRzdGF0ZVBhcmFtcyk7XG4gIH0pO1xuXG59KTtcbiIsIi8qKlxuICogQ3JlYXRlZCBieSBOaWNob2xhcyBIYWxsYWhhbiA8bmhhbGxhaGFuQHNwYXRpYWxkZXYuY29tPlxuICogICAgICAgIGFuZCBSeWFuIFdoaXRsZXkgICAgICA8cndoaXRsZXlAc3BhdGlhbGRldi5jb20+XG4gKiAgICAgICBvbiA0LzIvMTQuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnR2VvQW5ndWxhcicpLmNvbnRyb2xsZXIoJ1pvb21FeHRlbnRDdHJsJywgZnVuY3Rpb24oJHNjb3BlLCAkcm9vdFNjb3BlLCAkc3RhdGVQYXJhbXMsIFZlY3RvclByb3ZpZGVyKSB7XG4gICRzY29wZS5wYXJhbXMgPSAkc3RhdGVQYXJhbXM7XG5cbiAgLy9Jbml0aWFsaXplIHRoZSBjb3VudHJ5IHNlbGVjdG9yIG1lbnUgYnkgbG9hZGluZyB0aGUganNvbiBmaWxlIGFuZCB3cml0aW5nIG91dCB0aGUgbmFtZXMgaW50byB0aGUgcGFuZWxcbiAgJHNjb3BlLmNvdW50cnlMaXN0MSA9IG51bGw7XG5cbiAgdmFyIHZlY1JlcyA9IFZlY3RvclByb3ZpZGVyLmNyZWF0ZVJlc291cmNlKFwiY291bnRyeWV4dGVudHNcIik7XG4gIHZlY1Jlcy5mZXRjaChmdW5jdGlvbihnZW9qc29uKXtcbiAgICAvL1NvcnQgYWxwaGFiZXRpY2FsbHlcbiAgICBnZW9qc29uLmZlYXR1cmVzID0gZ2VvanNvbi5mZWF0dXJlcy5zb3J0KGZ1bmN0aW9uKGEsYil7XG4gICAgICB2YXIgdGV4dEEgPSBhLnByb3BlcnRpZXMubmFtZV8wO1xuICAgICAgdmFyIHRleHRCID0gYi5wcm9wZXJ0aWVzLm5hbWVfMDtcbiAgICAgIHJldHVybiAodGV4dEEgPCB0ZXh0QikgPyAtMSA6ICh0ZXh0QSA+IHRleHRCKSA/IDEgOiAwO1xuICAgIH0pO1xuXG4gICAgJHNjb3BlLmNvdW50cnlMaXN0MSA9IGdlb2pzb24uZmVhdHVyZXM7XG4gIH0pO1xuXG4gIC8vSW5pdGlhbGl6ZSB0aGUgQVJDIFJlZ2lvbiBzZWxlY3RvciBtZW51IGJ5IGxvYWRpbmcgdGhlIGpzb24gZmlsZSBhbmQgd3JpdGluZyBvdXQgdGhlIG5hbWVzIGludG8gdGhlIHBhbmVsXG4gICRzY29wZS5yZWdpb25MaXN0MSA9IG51bGw7XG5cbiAgdmFyIHZlY1Jlc1JlZ2lvbiA9IFZlY3RvclByb3ZpZGVyLmNyZWF0ZVJlc291cmNlKFwiYXJjcmVnaW9uZXh0ZW50c1wiKTtcbiAgdmVjUmVzUmVnaW9uLmZldGNoKGZ1bmN0aW9uKGdlb2pzb24pe1xuICAgIC8vU29ydCBhbHBoYWJldGljYWxseVxuICAgIGdlb2pzb24uZmVhdHVyZXMgPSBnZW9qc29uLmZlYXR1cmVzLnNvcnQoZnVuY3Rpb24oYSxiKXtcbiAgICAgIHZhciB0ZXh0QSA9IGEucHJvcGVydGllcy5hcmNfcmVnaW9uO1xuICAgICAgdmFyIHRleHRCID0gYi5wcm9wZXJ0aWVzLmFyY19yZWdpb247XG4gICAgICByZXR1cm4gKHRleHRBIDwgdGV4dEIpID8gLTEgOiAodGV4dEEgPiB0ZXh0QikgPyAxIDogMDtcbiAgICB9KTtcblxuICAgICRzY29wZS5yZWdpb25MaXN0MSA9IGdlb2pzb24uZmVhdHVyZXM7XG4gIH0pO1xuXG59KTtcbiIsIi8qKlxuICogQ3JlYXRlZCBieSBOaWNob2xhcyBIYWxsYWhhbiA8bmhhbGxhaGFuQHNwYXRpYWxkZXYuY29tPlxuICogICBhbmQgUmljaCBHd296ZHogPHJnd296ZHpAc3BhdGlhbGRldi5jb20+XG4gKiAgICAgICBvbiA1LzIxLzE0LlxuICovXG5cblxubW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnR2VvQW5ndWxhcicpLmZhY3RvcnkoJ0RvbnV0cycsIGZ1bmN0aW9uICgpIHtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhIEQzIERvbnV0IHRoYXQgaXMgbG9jYXRlZCBpbiB0aGUgZGV0YWlscyBwYW5lbC5cbiAgICovXG4gIGZ1bmN0aW9uIEV4cGFuZG9Eb251dChlbnRpdGllcywgdmlzdWFsaXphdGlvbkRpY3Rpb25hcnksIHdyYXBwZXIsIGxhYmVsUG9zaXRpb24pIHtcblxuICAgIHZhciBkYXRhLFxuICAgICAgdG1wRGF0YXNldCxcbiAgICAgIGRhdGFzZXQsXG4gICAgICB3aWR0aCxcbiAgICAgIGhlaWdodCxcbiAgICAgIHJhZGl1cyxcbiAgICAgIGNvbG9yLFxuICAgICAgcGllLFxuICAgICAgYXJjLFxuICAgICAgc3ZnLFxuICAgICAgcGF0aCxcbiAgICAgIHJlcG9ydGluZ1ZhbHVlQXJyLFxuICAgICAgcmVwb3J0aW5nVmFsdWUsXG4gICAgICBsYWJlbFdyYXBwZXI7XG5cbiAgICBkYXRhID0ge307XG5cbiAgICB3cmFwcGVyID0gJCh3cmFwcGVyKVswXTtcbiAgICAkKHdyYXBwZXIpLmh0bWwoJycpO1xuICAgIHRoaXMud3JhcHBlciA9IHdyYXBwZXI7XG4gICAgdGhpcy5sYWJlbFdyYXBwZXIgPSBudWxsO1xuICAgIHRoaXMuc3ZnID0gbnVsbDtcblxuICAgIGlmKHR5cGVvZiBsYWJlbFBvc2l0aW9uID09PSAndW5kZWZpbmVkJyB8fCAobGFiZWxQb3NpdGlvbiAhPT0gJ3RvcCcgJiYgbGFiZWxQb3NpdGlvbiAhPT0gJ2JvdHRvbScpKSB7XG4gICAgICBsYWJlbFBvc2l0aW9uID0gJ3RvcCdcbiAgICB9XG5cbiAgICAvLyBMb29wIHRocm91Z2ggdGhlIGVudGl0aWVzXG4gICAgZm9yICh2YXIgaiA9IDAsIGpNYXggPSBlbnRpdGllcy5sZW5ndGg7IGogPCBqTWF4OyBqKyspIHtcblxuICAgICAgLy8gU3BsaXQgdGhlIHNlbWktY29sb24gZGVsaW1pdGVkIHN0cmluZyBvZiByZXBvcnRpbmcgdmFsdWVzXG4gICAgICBpZihlbnRpdGllc1tqXVsnc2VjdG9yX19jJ10gPT09IG51bGwpIHtcbiAgICAgICAgcmVwb3J0aW5nVmFsdWVBcnIgPSBbLTk5OTldO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVwb3J0aW5nVmFsdWVBcnIgPSBlbnRpdGllc1tqXVsnc2VjdG9yX19jJ10udG9TdHJpbmcoKS5zcGxpdCgnOycpO1xuICAgICAgfVxuICAgICAgLy8gTG9vcCB0aHJ1IHRoZSByZXBvcnRpbmcgdmFsdWVzXG4gICAgICBmb3IgKHZhciBrID0gMCwga01heCA9IHJlcG9ydGluZ1ZhbHVlQXJyLmxlbmd0aDsgayA8IGtNYXg7IGsrKykge1xuXG4gICAgICAgIC8vIHRoaXMgaXRlcmF0aW9uJ3MgcmVwb3J0aW5nIHZhbHVlXG4gICAgICAgIHJlcG9ydGluZ1ZhbHVlID0gcmVwb3J0aW5nVmFsdWVBcnJba107XG5cbiAgICAgICAgLy8gSWYgd2UgaGF2ZSBhbHJlYWR5IGNvbWUgYWNyb3NzIHRoaXMgaWQgYmVmb3JlIChhbmQgc3RhcnRlZCBhIGNvdW50IG9mIGl0cyBmcmVxdWVuY3kpLCBpbmNyZW1lbnQgdGhlIGNvdW50XG4gICAgICAgIGlmKGRhdGEuaGFzT3duUHJvcGVydHkocmVwb3J0aW5nVmFsdWUpKSB7XG4gICAgICAgICAgZGF0YVtyZXBvcnRpbmdWYWx1ZV1bJ2NvdW50J10rKztcbiAgICAgICAgfVxuXG4gICAgICAgIGVsc2UgaWYgKHJlcG9ydGluZ1ZhbHVlID09PSAnJyl7XG4gICAgICAgICAgLy8gTnVsbCByZXBvcnQgaWQncyBjb21lIHRocm91Z2ggYXMgYW4gZW1wdHkgc3RyaW5nIGJlY2F1c2Ugc3BsaXR0aW5nIGFuIGVtcHR5IHN0cmluZywgY3JlYXRlcyBhbiBhcnJheSB3aXRoIG9uZSBlbXB0eSBzdHJpbmdcbiAgICAgICAgICAvLyAgV2UncmUgYXNzaWduaW5nIHRoZXNlIHRvIGEgdmFsdWUgb2YgLTk5OTlcblxuICAgICAgICAgIC8vIEluY3JlbWVudCB0aGUgY291bnQgb2YgLTk5OTlcbiAgICAgICAgICBpZihkYXRhLmhhc093blByb3BlcnR5KCctOTk5OScpKSB7XG4gICAgICAgICAgICBkYXRhWyctOTk5OSddWydjb3VudCddKys7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gaWYgdGhpcyBpcyB0aGUgZmlyc3QgbnVsbCBpZCwgY3JlYXRlIGFuIG9iamVjdCBwcm9wZXJ0eSBhbmQgc3RhcnQgdGhlIGNvdW50ZXJcbiAgICAgICAgICAgIGRhdGFbJy05OTk5J10gPSB7XG4gICAgICAgICAgICAgICdjb3VudCc6IDEsXG4gICAgICAgICAgICAgICdjb2xvcic6IHZpc3VhbGl6YXRpb25EaWN0aW9uYXJ5Wy05OTk5XS5jb2xvcixcbiAgICAgICAgICAgICAgJ2FsaWFzJzogdmlzdWFsaXphdGlvbkRpY3Rpb25hcnlbLTk5OTldLmxhYmVsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcblxuICAgICAgICAgIHZhciByZXBvcnRpbmdQcm9wZXJ0aWVzID0gdmlzdWFsaXphdGlvbkRpY3Rpb25hcnlbcmVwb3J0aW5nVmFsdWVdO1xuXG4gICAgICAgICAgaWYgKCFyZXBvcnRpbmdQcm9wZXJ0aWVzKSB7XG4gICAgICAgICAgICByZXBvcnRpbmdQcm9wZXJ0aWVzID0ge1xuICAgICAgICAgICAgICBjb2xvcjogJyMyNDAyMDEnLFxuICAgICAgICAgICAgICBhbGlhczogcmVwb3J0aW5nVmFsdWUgfHwgJ1Vua25vd24nXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gaWYgdGhpcyBpcyB0aGUgZmlyc3QgdGltZSB3ZSBzZWUgdGhpcyBpZCwgY3JlYXRlIGFuIG9iamVjdCBwcm9wZXJ0eSBhbmQgc3RhcnQgdGhlIGNvdW50ZXJcbiAgICAgICAgICBkYXRhW3JlcG9ydGluZ1ZhbHVlXSA9IHtcbiAgICAgICAgICAgICdjb3VudCc6IDEsXG4gICAgICAgICAgICAnY29sb3InOiByZXBvcnRpbmdQcm9wZXJ0aWVzLmNvbG9yLFxuICAgICAgICAgICAgJ2FsaWFzJzogcmVwb3J0aW5nUHJvcGVydGllcy5sYWJlbFxuICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgfVxuXG4gICAgfVxuXG4gICAgLy8gcHJlcCBkYXRhc2V0IGZvciBEMzsgbmVlZCBhIHRlbXAgZGF0YXNldCB0byBkZWFsIHdpdGggbWVyZ2luZyBvZiBkYXRhIGNvdW50cyBmb3IgJ290aGVyJyBjYXRlZ29yeVxuICAgIHRtcERhdGFzZXQgPSBbXTtcbiAgICBkYXRhc2V0ID0gW107XG5cbiAgICAvLyBQdXNoIHByb3BlcnRpZXMgZnJvbSBvYmplY3QgaG9sZGluZyB0aGUgY2F0ZWdvcnkgY291bnRzL2NvbG9ycyBjYXRlZ29yaWVzIGludG8gYW4gb2JqZWN0IGFycmF5XG4gICAgZm9yICh2YXIgaiBpbiBkYXRhKSB7XG4gICAgICB0bXBEYXRhc2V0LnB1c2goZGF0YVtqXSk7XG4gICAgfVxuXG4gICAgLy8gQ3JlYXRlIGFuIG9iamVjdCB0aGF0IHdpbGwgbWVyZ2UgdGhlIGNvdW50IGZyb20gYWxsIGNsYXNzaWZpY2F0aW9uIGNhdGVyZ29yaWVzIHRoYXQgd2UndmUgZGVlbWVkIGFzICdvdGhlcicnXG4gICAgdmFyIG1lcmdlZE90aGVyID0ge1xuICAgICAgJ2NvdW50JzogMCxcbiAgICAgICdjb2xvcic6IHZpc3VhbGl6YXRpb25EaWN0aW9uYXJ5Wy05OTk5XS5jb2xvcixcbiAgICAgICdhbGlhcyc6IHZpc3VhbGl6YXRpb25EaWN0aW9uYXJ5Wy05OTk5XS5sYWJlbFxuICAgIH07XG5cbiAgICAvLyBNZXJnZSBhbGwgJ290aGVyJyBvYmplY3RzOyB3ZSBkZXRlcm1pbmUgd2hpY2ggYXJlICdvdGhlcicgYnkgdGVzdGluZyB0byBzZWUgaWYgaXRzIGJlZW4gYXNzaWduZWQgdGhlICdvdGhlcicgY29sb3JcbiAgICBmb3IgKHZhciBrID0gMCwga01heCA9IHRtcERhdGFzZXQubGVuZ3RoOyBrIDwga01heDsgaysrKSB7XG5cbiAgICAgIGlmKHRtcERhdGFzZXRba10uY29sb3IgPT09IHZpc3VhbGl6YXRpb25EaWN0aW9uYXJ5Wy05OTk5XS5jb2xvcikge1xuICAgICAgICBtZXJnZWRPdGhlci5jb3VudCA9IG1lcmdlZE90aGVyLmNvdW50ICsgdG1wRGF0YXNldFtrXS5jb3VudDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRhdGFzZXQucHVzaCh0bXBEYXRhc2V0W2tdKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBBZGQgdGhlIG1lcmdlIG9iamVkdCB0byB0aGUgZGF0YXNldCB3ZSB3aWxsIHVzZSBpbiBkb251dCBjaGFydFxuICAgIGRhdGFzZXQucHVzaChtZXJnZWRPdGhlcik7XG5cblxuICAgIC8vIFVzZSBqUXVlcnkgdG8gZ2V0IHRoaXMgY2x1c3RlciBtYXJrZXJzIGhlaWdodCBhbmQgd2lkdGggKHNldCBpbiB0aGUgQ1NTKVxuICAgIHdpZHRoID0gJCh3cmFwcGVyKS53aWR0aCgpICogMC42NTtcbiAgICBoZWlnaHQgPSAkKHdyYXBwZXIpLmhlaWdodCgpICogMC42NTtcblxuICAgIGlmKGhlaWdodCA9PT0gMCkge1xuICAgICAgaGVpZ2h0ID0gd2lkdGg7XG4gICAgfVxuXG4gICAgcmFkaXVzID0gIChNYXRoLm1pbih3aWR0aCwgaGVpZ2h0KSAvIDIpIC0gMTA7XG4gICAgbGFiZWxXcmFwcGVyID0gJCgnPGRpdiBjbGFzcz1cImNsZWFyZml4XCIgc3R5bGU9XCJ0ZXh0LWFsaWduOmNlbnRlcjsgbWFyZ2luOiAxMHB4IDA7XCIgPjwvZGl2PicpLmFwcGVuZFRvKHdyYXBwZXIpO1xuICAgIHZhciBsYWJlbFN3YXRjaCA9ICQoJzxkaXYgc3R5bGU9XCJkaXNwbGF5OmlubGluZS1ibG9jazsgd2lkdGg6IDFlbTsgaGVpZ2h0OiAxZW07IGJvcmRlci1yYWRpdXM6IDUwJVwiPjwvZGl2PicpLmFwcGVuZFRvKGxhYmVsV3JhcHBlcik7XG4gICAgdmFyIGxhYmVsVGV4dCA9ICQoJzxkaXYgc3R5bGU9XCJkaXNwbGF5OmlubGluZS1ibG9jazsgcGFkZGluZy1sZWZ0OiAxMHB4O21hcmdpbi10b3A6IC0uNGVtO3ZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XCI+PC9kaXY+JykuYXBwZW5kVG8obGFiZWxXcmFwcGVyKTtcblxuICAgIHBpZSA9IGQzLmxheW91dC5waWUoKVxuICAgICAgLnNvcnQobnVsbCk7XG5cbiAgICBhcmMgPSBkMy5zdmcuYXJjKClcbiAgICAgIC5pbm5lclJhZGl1cyhyYWRpdXMtcmFkaXVzICogMC40KVxuICAgICAgLm91dGVyUmFkaXVzKHJhZGl1cyk7XG5cbiAgICB2YXIgYXJjT3ZlciA9IGQzLnN2Zy5hcmMoKVxuICAgICAgLm91dGVyUmFkaXVzKHJhZGl1cyArIDEwKVxuICAgICAgLmlubmVyUmFkaXVzKChyYWRpdXMtcmFkaXVzICogMC40KSArIDEwKTtcblxuICAgIC8vIE5vdGUgdGhhdCB3ZSBhZGQgJ2NsdXN0ZXJEb251dCcgYXMgYSBzZWxlY3RvclxuICAgIHN2ZyA9IGQzLnNlbGVjdCh3cmFwcGVyKS5hcHBlbmQoXCJzdmdcIilcbiAgICAgIC5hdHRyKFwid2lkdGhcIiwgd2lkdGgpXG4gICAgICAuYXR0cihcImhlaWdodFwiLCBoZWlnaHQpXG4gICAgICAuYXBwZW5kKFwiZ1wiKVxuICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoXCIgKyB3aWR0aCAvIDIgKyBcIixcIiArIGhlaWdodCAvIDIgKyBcIilcIik7XG5cbiAgICB0aGlzLnBhdGggPSBzdmcuc2VsZWN0QWxsKFwicGF0aFwiKVxuICAgICAgLmRhdGEoZnVuY3Rpb24oKXtcbiAgICAgICAgdmFyIGRhdGFPYmpBcnIsXG4gICAgICAgICAgZGF0YUFycixcbiAgICAgICAgICBwaWVEYXRhO1xuXG4gICAgICAgIGRhdGFPYmpBcnIgPSBkYXRhc2V0O1xuXG4gICAgICAgIGRhdGFBcnIgPSBbXTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMCwgaU1heCA9IGRhdGFPYmpBcnIubGVuZ3RoOyBpIDwgaU1heDsgaSsrKSB7XG4gICAgICAgICAgZGF0YUFyci5wdXNoKGRhdGFPYmpBcnJbaV1bJ2NvdW50J10pO1xuICAgICAgICB9XG5cbiAgICAgICAgcGllRGF0YSA9IHBpZShkYXRhQXJyKTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMCwgaU1heCA9IHBpZURhdGEubGVuZ3RoOyBpIDwgaU1heDsgaSsrKSB7XG4gICAgICAgICAgcGllRGF0YVtpXS5kYXRhID0gZGF0YU9iakFycltpXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwaWVEYXRhO1xuICAgICAgfSlcbiAgICAgIC5lbnRlcigpLmFwcGVuZChcInBhdGhcIilcbiAgICAgIC5hdHRyKFwiZmlsbFwiLCBmdW5jdGlvbihkLCBqKSB7XG4gICAgICAgIHJldHVybiBkLmRhdGEuY29sb3I7XG4gICAgICB9KVxuICAgICAgLmF0dHIoXCJkXCIsIGFyYylcbiAgICAgIC5hdHRyKFwiY3Vyc29yXCIsXCJwb2ludGVyXCIpXG4gICAgICAuYXR0cihcImN1cnNvclwiLFwicG9pbnRlclwiKVxuICAgICAgLm9uKFwibW91c2VvdmVyXCIsIGZ1bmN0aW9uKGQsIGkpIHtcblxuICAgICAgICAvLyBjbGVhciBwcmV2aW91c2x5IGFjdGl2ZSBjaGFydCB3ZWRnZVxuICAgICAgICBkMy5zZWxlY3Qod3JhcHBlcikuc2VsZWN0QWxsKCdwYXRoJykudHJhbnNpdGlvbigpXG4gICAgICAgICAgLmR1cmF0aW9uKDEwMClcbiAgICAgICAgICAuYXR0cihcImRcIiwgYXJjKVxuICAgICAgICAgIC5hdHRyKCdvcGFjaXR5JywxKVxuICAgICAgICAgIC5hdHRyKCdzdHJva2Utd2lkdGgnLDEpXG4gICAgICAgICAgLmF0dHIoJ3N0cm9rZScsJ3JnYmEoMjU1LDI1NSwyNTUsMSknKTtcblxuICAgICAgICAvLyBNYWtlIHRoZSBtb3VzZW92ZXIgd2VkZ2UgYWN0aXZlXG4gICAgICAgIGQzLnNlbGVjdCh0aGlzKVxuICAgICAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgICAgICAuZHVyYXRpb24oMTAwKVxuICAgICAgICAgIC5hdHRyKFwiZFwiLCBhcmNPdmVyKVxuICAgICAgICAgIC5hdHRyKCdvcGFjaXR5JywwLjgpXG4gICAgICAgICAgLmF0dHIoJ3N0cm9rZS13aWR0aCcsMilcbiAgICAgICAgICAuYXR0cignc3Ryb2tlJywncmdiYSgyNTUsMjU1LDI1NSwxKScpO1xuXG4gICAgICAgIC8vIE1ha2UgYXBwcm9wcmlhdGUgbGFiZWxcbiAgICAgICAgJChsYWJlbFN3YXRjaCkuY3NzKCdiYWNrZ3JvdW5kLWNvbG9yJywgZC5kYXRhLmNvbG9yKTtcbiAgICAgICAgJChsYWJlbFRleHQpLmh0bWwoZC5kYXRhLmFsaWFzKTtcblxuICAgICAgICAvLyBTaG93IHRoZSBsYWJlbCBpZiBjdXJyZW50bHkgaGlkZGVuXG4gICAgICAgIGlmKCQoc2VsZi5jYXB0aW9uKS5jc3MoJ2Rpc3BsYXknKSA9PT0gJ25vbmUnKSB7XG4gICAgICAgICAgJChsYWJlbFdyYXBwZXIpLnNsaWRlVG9nZ2xlKCk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAvLy5vbihcIm1vdXNlb3V0XCIsIGZ1bmN0aW9uKGQsaSkge30pXG4gICAgICAuZWFjaChmdW5jdGlvbihkLCBpKSB7XG5cbiAgICAgICAgLy8gb24gbG9hZCwgd2Ugd2FudCB0aGUgbGFyZ2VzdCBjaGFydCB3ZWRnZSB0byBiZSBhY3RpdmV3XG4gICAgICAgIGlmKGkgIT09IDAgICl7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgZDMuc2VsZWN0KHRoaXMpXG4gICAgICAgICAgLnRyYW5zaXRpb24oKVxuICAgICAgICAgIC5kdXJhdGlvbigxMDApXG4gICAgICAgICAgLmF0dHIoXCJkXCIsIGFyY092ZXIpXG4gICAgICAgICAgLmF0dHIoJ29wYWNpdHknLDAuOClcbiAgICAgICAgICAuYXR0cignc3Ryb2tlLXdpZHRoJywyKVxuICAgICAgICAgIC5hdHRyKCdzdHJva2UnLCdyZ2JhKDI1NSwyNTUsMjU1LDEpJyk7XG5cbiAgICAgICAgLy8gbWFrZSB0aGUgbGFiZWxcbiAgICAgICAgJChsYWJlbFN3YXRjaCkuY3NzKCdiYWNrZ3JvdW5kLWNvbG9yJywgZC5kYXRhLmNvbG9yKTtcbiAgICAgICAgJChsYWJlbFRleHQpLmh0bWwoZC5kYXRhLmFsaWFzKTtcblxuICAgICAgICBpZigkKGxhYmVsV3JhcHBlcikuY3NzKCdkaXNwbGF5JykgPT09ICdub25lJykge1xuICAgICAgICAgICQobGFiZWxXcmFwcGVyKS5zbGlkZVRvZ2dsZSgpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgIGlmKGxhYmVsUG9zaXRpb24gPT09ICd0b3AnKSB7XG4gICAgICBsYWJlbFdyYXBwZXIucHJlcGVuZFRvKHdyYXBwZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsYWJlbFdyYXBwZXIuYXBwZW5kVG8od3JhcHBlcik7XG4gICAgfVxuXG4gICAgdGhpcy5sYWJlbFdyYXBwZXIgPSBsYWJlbFdyYXBwZXI7XG4gICAgdGhpcy5zdmcgPSBzdmc7XG4gIH1cblxuXG5cblxuICBmdW5jdGlvbiBtYWtlVmlzdWFsaXphdGlvbkRpY3Rpb25hcnkoY2F0ZWdvcnlFbnRpdGllcywgb3B0cyl7XG5cbiAgICB2YXIgb3B0aW9ucyA9IG9wdHMgfHwge307XG5cbiAgICBvcHRpb25zLnVuYXNzaWduZWRDb2xvciA9IG9wdGlvbnMudW5hc3NpZ25lZENvbG9yIHx8ICcjQ0NDQ0NDJztcbiAgICBvcHRpb25zLnVuYXNzaWduZWRMYWJlbCA9IG9wdGlvbnMudW5hc3NpZ25lZExhYmVsIHx8ICdOb3QgQXNzaWduZWQnO1xuXG4gICAgdmFyIGRlZmF1bHRQYWxldHRlID0gW1wiIzAwOTQwMFwiLCBcIiNGRkM5M0FcIiwgXCIjRkYzODQ5XCIsIFwiIzE3MUNFOFwiLCBcIiMwNUZGRDlcIiwgXCIjRUM4RTJGXCIsIFwiIzZFRDQ0NFwiLCBcIiM5NTU2RUZcIiwgXCIjMjE3NURFXCIsIFwiI0UyM0I1RFwiLCBcIiMxZjc3YjRcIiwgXCIjYWVjN2U4XCIsIFwiI2ZmN2YwZVwiLCBcIiNmZmJiNzhcIiwgXCIjMmNhMDJjXCIsIFwiIzk4ZGY4YVwiLCBcIiNkNjI3MjhcIiwgXCIjZmY5ODk2XCIsIFwiIzk0NjdiZFwiLCBcIiNjNWIwZDVcIiwgXCIjOGM1NjRiXCIsIFwiI2M0OWM5NFwiLCBcIiNlMzc3YzJcIiwgXCIjZjdiNmQyXCIsIFwiIzdmN2Y3ZlwiLCBcIiNjN2M3YzdcIiwgXCIjYmNiZDIyXCIsIFwiI2RiZGI4ZFwiLCBcIiMxN2JlY2ZcIiwgXCIjOWVkYWU1XCIsIFwiIzAwOTQwMFwiLCBcIiNGRkM5M0FcIiwgXCIjRkYzODQ5XCIsIFwiIzE3MUNFOFwiLCBcIiMwNUZGRDlcIiwgXCIjRUM4RTJGXCIsIFwiIzZFRDQ0NFwiLCBcIiM5NTU2RUZcIiwgXCIjMjE3NURFXCIsIFwiI0UyM0I1RFwiLCBcIiMxZjc3YjRcIiwgXCIjYWVjN2U4XCIsIFwiI2ZmN2YwZVwiLCBcIiNmZmJiNzhcIiwgXCIjMmNhMDJjXCIsIFwiIzk4ZGY4YVwiLCBcIiNkNjI3MjhcIiwgXCIjZmY5ODk2XCIsIFwiIzk0NjdiZFwiLCBcIiNjNWIwZDVcIiwgXCIjOGM1NjRiXCIsIFwiI2M0OWM5NFwiLCBcIiNlMzc3YzJcIiwgXCIjZjdiNmQyXCIsIFwiIzdmN2Y3ZlwiLCBcIiNjN2M3YzdcIiwgXCIjYmNiZDIyXCIsIFwiI2RiZGI4ZFwiLCBcIiMxN2JlY2ZcIiwgXCIjOWVkYWU1XCJdO1xuXG4gICAgdmFyIGRpY3Rpb25hcnkgPSB7fTtcblxuICAgIGZvcih2YXIgaSA9IDA7IGkgPCBjYXRlZ29yeUVudGl0aWVzLmxlbmd0aDsgaSsrKSB7XG5cbiAgICAgIHZhciBjb2xvciA9IG51bGw7XG5cbiAgICAgIGlmKGkgPCBkZWZhdWx0UGFsZXR0ZS5sZW5ndGgpIHtcbiAgICAgICAgY29sb3IgPSBkZWZhdWx0UGFsZXR0ZVtpXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBpbmRleCA9IGkgJSBkZWZhdWx0UGFsZXR0ZS5sZW5ndGggLSAxO1xuICAgICAgICBjb2xvciA9IGRlZmF1bHRQYWxldHRlW2luZGV4XTtcbiAgICAgIH1cbiAgICAgIGRpY3Rpb25hcnlbY2F0ZWdvcnlFbnRpdGllc1tpXS52YWx1ZV0gPSB7XG4gICAgICAgIHZhbHVlOiBjYXRlZ29yeUVudGl0aWVzW2ldLnZhbHVlLFxuICAgICAgICBsYWJlbDogY2F0ZWdvcnlFbnRpdGllc1tpXS5sYWJlbCxcbiAgICAgICAgY29sb3I6IGNvbG9yXG4gICAgICB9O1xuXG4gICAgfVxuXG4gICAgZGljdGlvbmFyeVstOTk5OV0gPSB7XG4gICAgICB2YWx1ZTogLTk5OTksXG4gICAgICBsYWJlbDogb3B0aW9ucy51bmFzc2lnbmVkTGFiZWwsXG4gICAgICBjb2xvcjogb3B0aW9ucy51bmFzc2lnbmVkQ29sb3JcbiAgICB9O1xuXG4gICAgcmV0dXJuIGRpY3Rpb25hcnk7XG4gIH1cblxuXG4gIC8qKlxuICAgKiBQdWJsaWMgZnVuY3Rpb25zIHRoYXQgYXJlIGFjY2Vzc2libGUgZWxzZXdoZXJlIGluIHRoZSBhcHAuXG4gICAqIEV4OiBEb251dHMuY3JlYXRlRGV0YWlsc0RvbnV0KGFyZzEsIGFyZzIpO1xuICAgKi9cbiAgcmV0dXJuIHtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBEMyBkb251dCB0aGF0IGdvZXMgYXJvdW5kIGEgbGFiZWwgb24gdGhlIG1hcC5cbiAgICAgKi9cbiAgICBjcmVhdGVMYWJlbERvbnV0OiBmdW5jdGlvbihzZWN0b3JzLCBwcm9qZWN0cywgZGl2SWQpIHtcbiAgICAgIHZhciB2aXpEaWN0aW9uYXJ5ID0gbWFrZVZpc3VhbGl6YXRpb25EaWN0aW9uYXJ5KHNlY3RvcnMpO1xuICAgICAgdmFyIGRvbnV0ID0gbmV3IEV4cGFuZG9Eb251dChwcm9qZWN0cywgdml6RGljdGlvbmFyeSwgZGl2SWQgLCAnYm90dG9tJyk7XG4gICAgICAkKGRpdklkKS5wcmVwZW5kKCc8ZGl2IGlkPVwic2VjdG9ycy1oZWFkaW5nXCIgY2xhc3M9XCJoZWFkaW5nXCI+U2VjdG9yczwvZGl2PicpO1xuICAgICAgcmV0dXJuIGRvbnV0O1xuICAgIH1cblxuICB9O1xuXG59KTtcbiIsIi8qKlxuICogQ3JlYXRlZCBieSBOaWNob2xhcyBIYWxsYWhhbiA8bmhhbGxhaGFuQHNwYXRpYWxkZXYuY29tPlxuICogICAgICAgb24gMy8xOC8xNC5cbiAqL1xuXG4vKipcbiAqIEFsbCBvZiB0aGUgbGF5ZXIgbmFtZXMgbmVlZCB0byBiZSBsb3dlcmNhc2UuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ0dlb0FuZ3VsYXInKS5zZXJ2aWNlKCdMYXllckNvbmZpZycsIGZ1bmN0aW9uICgpIHtcblxuICB2YXIgY29uZmlnTGF5ZXJzID0gW1xuICAgIHJlcXVpcmUoJy4uLy4uLy4uLy4uL0NvbmZpZy9sYXllcnMvYWxsLmpzJyksXG4gICAgcmVxdWlyZSgnLi4vLi4vLi4vLi4vQ29uZmlnL2xheWVycy9iYXNlbWFwcy5qcycpLFxuICAgIHJlcXVpcmUoJy4uLy4uLy4uLy4uL0NvbmZpZy9sYXllcnMvZGlzYXN0ZXIuanMnKSxcbiAgICByZXF1aXJlKCcuLi8uLi8uLi8uLi9Db25maWcvbGF5ZXJzL290aGVyLmpzJyksXG4gICAgcmVxdWlyZSgnLi4vLi4vLi4vLi4vQ29uZmlnL2xheWVycy9wcm9qZWN0LmpzJyksXG4gICAgcmVxdWlyZSgnLi4vLi4vLi4vLi4vQ29uZmlnL2xheWVycy9wcm9qZWN0aGVhbHRoLmpzJyksXG4gICAgcmVxdWlyZSgnLi4vLi4vLi4vLi4vQ29uZmlnL2xheWVycy9wcm9qZWN0cmlzay5qcycpLFxuICAgIHJlcXVpcmUoJy4uLy4uLy4uLy4uL0NvbmZpZy9sYXllcnMvdmVjdG9ydGlsZXMuanMnKVxuXG4gIF07XG5cbiAgLyoqXG4gICAqIEFkZHMgdGhlIGxheWVycyBzcGVjaWZpZWQgaW4gdGhlIENvbmZpZy9sYXllcnMgZGlyZWN0b3J5IHRvIHRoaXMuXG4gICAqL1xuICBmb3IgKHZhciBpID0gMCwgbGVuID0gY29uZmlnTGF5ZXJzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgdmFyIGNmZyA9IGNvbmZpZ0xheWVyc1tpXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gY2ZnKSB7XG4gICAgICB0aGlzW2tleV0gPSBjZmdba2V5XTtcbiAgICB9XG4gIH1cblxuXG4gIC8qKlxuICAgKiBiYm94XG4gICAqXG4gICAqIFRoaXMgaXMgdW5pdmVyc2FsIHRvIGFsbCBsYXllcnMsIGFuZCBiYm94dXJsIGZldGNoZXMgdGhlIGZlYXR1cmUgaXRpbmVyYXJ5LiBUaGlzIGlzIGluIHR1cm4gdXNlZCB0byBmaW5kIHRoZSBjZW50ZXJcbiAgICogZmVhdHVyZSBmb3IgdGhlIGJyZWFkY3J1bWJzIGFzIHdlbGwgYXMgZmV0Y2ggdGhlIGZlYXR1cmVzIHRoYXQgYXBwbHkgdG8gYSBCQm94R2VvSlNPTiBvYmplY3QuXG4gICAqXG4gICAqIEB0eXBlIHt7YmJveHVybDogKiwgY2VudGVydXJsOiAqfX1cbiAgICovXG4gIHRoaXMuYmJveCA9IHtcbiAgICBiYm94dXJsOiBjb25maWcuY2h1YmJzUGF0aCgnc2VydmljZXMvY3VzdG9tL2N1c3RvbV9vcGVyYXRpb24/bmFtZT1nZXRpZHNieWV4dGVudCZmb3JtYXQ9anNvbiZiYm94PTpiYm94JyksXG4gICAgLy8gdXNlZCB0byBnZXQgdGhlIGNlbnRlciBmZWF0dXJlLiBjYW4gZ2V0IGFueSBmZWF0dXJlIHlvdSB3YW50IGJ5IGlkXG4gICAgZmVhdHVybDogY29uZmlnLmNodWJic1BhdGgoJ3NlcnZpY2VzL2N1c3RvbS9jdXN0b21fb3BlcmF0aW9uP25hbWU9Z2V0ZmVhdHVyZXNieWlkJmZvcm1hdD1nZW9qc29uJmdhZG1fbGV2ZWw9OmxldmVsJmlkcz06aWRzJylcbiAgfTtcblxuICAvKipcbiAgICogQkJveEdlb0pTT05cbiAgICpcbiAgICogVGhpcyBsYXllciB0eXBlIHJldHJpZXZlZCBmZWF0dXJlcyB0aGF0IGludGVyc2VjdCB3aXRoIHRoZSBtYXAncyBib3VuZGluZyBib3guXG4gICAqIFRoZXJlIG11c3QgYmUgYSBiYWNrZW5kIEFQSSB0aGF0IHVuZGVyc3RhbmRzIHRoaXMuIFRoZSBmZWF0dXJlcyB0aGF0IGFwcGx5XG4gICAqIHRvIHRoZSBib3VuZGluZyBib3ggYXJlIGZldGNoZWQgdW5pdmVyc2FsbHkgdG8gYWxsIGxheWVycy4gVGhlc2UgZW5kcG9pbnRzXG4gICAqIGFyZSBzcGVjaWZpZWQgaW4gdGhpcy5iYm94LlxuICAgKlxuICAgKiBUaGUgQ2h1YmJzIFNwYXRpYWwgU2VydmVyIGZ1bGx5IGNvbXByZWhlbmRzIHRoaXMsIG90aGVycyBkbyBub3QuXG4gICAqXG4gICAqIEB0eXBlIHt7dHlwZTogc3RyaW5nfX1cbiAgICovXG4gIC8vdGhpcy50aGVtZWNvdW50ID0ge1xuICAvLyAgbmFtZTogJ1RoZW1lIENvdW50JyxcbiAgLy8gIHR5cGU6ICdiYm94Z2VvanNvbicsXG4gIC8vICB1cmw6IGNvbmZpZy5jaHViYnNQYXRoKFwic2VydmljZXMvY3VzdG9tL2N1c3RvbV9vcGVyYXRpb24/bmFtZT1nZXRhZ2dyZWdhdGVkdGhlbWVmZWF0dXJlc2J5aWQmZm9ybWF0PWdlb2pzb24mdGhlbWU9OnRoZW1lJmdhZG1fbGV2ZWw9OmxldmVsJmlkcz06aWRzJmZpbHRlcnM9OmZpbHRlcnNcIiksXG4gIC8vICBwcm9wZXJ0aWVzOiB7XG4gIC8vICAgIFwic3R5bGVGblwiOiBmdW5jdGlvbiAocHJvcGVydGllcykge1xuICAvLyAgICAgIHZhciBzdHlsZSA9IHtcbiAgLy8gICAgICAgIGNvbG9yOiAnd2hpdGUnLFxuICAvLyAgICAgICAgb3BhY2l0eTogMSxcbiAgLy8gICAgICAgIGZpbGxPcGFjaXR5OiAwLjA3LFxuICAvLyAgICAgICAgd2VpZ2h0OiAxLjVcbiAgLy8gICAgICB9O1xuICAvL1xuICAvLyAgICAgIGlmIChwcm9wZXJ0aWVzLnRoZW1lID09IFwiZGlzYXN0ZXJcIikge1xuICAvLyAgICAgICAgaWYgKHByb3BlcnRpZXMgJiYgcHJvcGVydGllcy5pcm9jX3N0YXR1c19fYykge1xuICAvLyAgICAgICAgICBzd2l0Y2ggKHByb3BlcnRpZXMuaXJvY19zdGF0dXNfX2MudG9Mb3dlckNhc2UoKSkge1xuICAvLyAgICAgICAgICAgIGNhc2UgXCJhY3RpdmVcIjpcbiAgLy8gICAgICAgICAgICAgIHN0eWxlLmZpbGxDb2xvciA9IFwiI2NjMDAzM1wiO1xuICAvLyAgICAgICAgICAgICAgc3R5bGUuZmlsbE9wYWNpdHkgPSAwLjU7XG4gIC8vICAgICAgICAgICAgICBicmVhaztcbiAgLy8gICAgICAgICAgICBjYXNlIFwibW9uaXRvcmluZ1wiOlxuICAvLyAgICAgICAgICAgICAgc3R5bGUuZmlsbENvbG9yID0gXCIjY2M5OTAwXCI7XG4gIC8vICAgICAgICAgICAgICBzdHlsZS5maWxsT3BhY2l0eSA9IDAuNTtcbiAgLy8gICAgICAgICAgICAgIGJyZWFrO1xuICAvLyAgICAgICAgICAgIGNhc2UgXCJpbmFjdGl2ZVwiOlxuICAvLyAgICAgICAgICAgICAgc3R5bGUuZmlsbENvbG9yID0gXCJ3aGl0ZVwiO1xuICAvLyAgICAgICAgICAgICAgc3R5bGUuZmlsbE9wYWNpdHkgPSAwLjA7XG4gIC8vICAgICAgICAgICAgICBicmVhaztcbiAgLy8gICAgICAgICAgfVxuICAvLyAgICAgICAgfVxuICAvLyAgICAgIH1cbiAgLy8gICAgICBlbHNlIGlmIChwcm9wZXJ0aWVzLnRoZW1lID09IFwicHJvamVjdHJpc2tcIikge1xuICAvLyAgICAgICAgaWYgKHByb3BlcnRpZXMgJiYgcHJvcGVydGllcy5vdmVyYWxsX2Fzc2Vzc21lbnRfX2MpIHtcbiAgLy8gICAgICAgICAgc3dpdGNoIChwcm9wZXJ0aWVzLm92ZXJhbGxfYXNzZXNzbWVudF9fYy50b0xvd2VyQ2FzZSgpKSB7XG4gIC8vICAgICAgICAgICAgY2FzZSBcImNyaXRpY2FsXCI6XG4gIC8vICAgICAgICAgICAgICBzdHlsZS5maWxsQ29sb3IgPSBcInJlZFwiO1xuICAvLyAgICAgICAgICAgICAgc3R5bGUuZmlsbE9wYWNpdHkgPSAwLjU7XG4gIC8vICAgICAgICAgICAgICBicmVhaztcbiAgLy8gICAgICAgICAgICBjYXNlIFwiaGlnaFwiOlxuICAvLyAgICAgICAgICAgICAgc3R5bGUuZmlsbENvbG9yID0gXCJvcmFuZ2VcIjtcbiAgLy8gICAgICAgICAgICAgIHN0eWxlLmZpbGxPcGFjaXR5ID0gMC41O1xuICAvLyAgICAgICAgICAgICAgYnJlYWs7XG4gIC8vICAgICAgICAgICAgY2FzZSBcIm1lZGl1bVwiOlxuICAvLyAgICAgICAgICAgICAgc3R5bGUuZmlsbENvbG9yID0gXCJ5ZWxsb3dcIjtcbiAgLy8gICAgICAgICAgICAgIHN0eWxlLmZpbGxPcGFjaXR5ID0gMC41O1xuICAvLyAgICAgICAgICAgICAgYnJlYWs7XG4gIC8vICAgICAgICAgICAgY2FzZSBcImxvd1wiOlxuICAvLyAgICAgICAgICAgICAgc3R5bGUuZmlsbENvbG9yID0gXCJncmVlblwiO1xuICAvLyAgICAgICAgICAgICAgc3R5bGUuZmlsbE9wYWNpdHkgPSAwLjU7XG4gIC8vICAgICAgICAgICAgICBicmVhaztcbiAgLy8gICAgICAgICAgfVxuICAvLyAgICAgICAgfVxuICAvLyAgICAgIH1cbiAgLy8gICAgICBlbHNlIGlmIChwcm9wZXJ0aWVzLnRoZW1lID09IFwicHJvamVjdGhlYWx0aFwiKSB7XG4gIC8vICAgICAgICBpZiAocHJvcGVydGllcyAmJiBwcm9wZXJ0aWVzLm92ZXJhbGxfc3RhdHVzX19jKSB7XG4gIC8vICAgICAgICAgIHN3aXRjaCAocHJvcGVydGllcy5vdmVyYWxsX3N0YXR1c19fYy50b0xvd2VyQ2FzZSgpKSB7XG4gIC8vICAgICAgICAgICAgY2FzZSBcInJlZFwiOlxuICAvLyAgICAgICAgICAgICAgc3R5bGUuZmlsbENvbG9yID0gXCJyZWRcIjtcbiAgLy8gICAgICAgICAgICAgIHN0eWxlLmZpbGxPcGFjaXR5ID0gMC41O1xuICAvLyAgICAgICAgICAgICAgYnJlYWs7XG4gIC8vICAgICAgICAgICAgY2FzZSBcInllbGxvd1wiOlxuICAvLyAgICAgICAgICAgICAgc3R5bGUuZmlsbENvbG9yID0gXCJ5ZWxsb3dcIjtcbiAgLy8gICAgICAgICAgICAgIHN0eWxlLmZpbGxPcGFjaXR5ID0gMC41O1xuICAvLyAgICAgICAgICAgICAgYnJlYWs7XG4gIC8vICAgICAgICAgICAgY2FzZSBcImdyZWVuXCI6XG4gIC8vICAgICAgICAgICAgICBzdHlsZS5maWxsQ29sb3IgPSBcImdyZWVuXCI7XG4gIC8vICAgICAgICAgICAgICBzdHlsZS5maWxsT3BhY2l0eSA9IDAuNTtcbiAgLy8gICAgICAgICAgICAgIGJyZWFrO1xuICAvLyAgICAgICAgICAgIGNhc2UgXCJ3aGl0ZVwiOlxuICAvLyAgICAgICAgICAgICAgc3R5bGUuZmlsbENvbG9yID0gXCJ3aGl0ZVwiO1xuICAvLyAgICAgICAgICAgICAgc3R5bGUuZmlsbE9wYWNpdHkgPSAwLjU7XG4gIC8vICAgICAgICAgICAgICBicmVhaztcbiAgLy8gICAgICAgICAgfVxuICAvLyAgICAgICAgfVxuICAvLyAgICAgIH1cbiAgLy8gICAgICByZXR1cm4gc3R5bGU7XG4gIC8vICAgIH0sXG4gIC8vICAgIFwibGFiZWxQcm9wZXJ0eVwiOiBmdW5jdGlvbiAocHJvcGVydGllcykge1xuICAvLyAgICAgIGlmIChwcm9wZXJ0aWVzLnRoZW1lID09IFwiZGlzYXN0ZXJcIikge1xuICAvLyAgICAgICAgdmFyIGNvbG9yID0gXCJcIjtcbiAgLy8gICAgICAgIHZhciBsYWJlbENvbG9yID0gXCJcIjtcbiAgLy8gICAgICAgIGlmIChwcm9wZXJ0aWVzICYmIHByb3BlcnRpZXMuaXJvY19zdGF0dXNfX2MpIHtcbiAgLy8gICAgICAgICAgc3dpdGNoIChwcm9wZXJ0aWVzLmlyb2Nfc3RhdHVzX19jLnRvTG93ZXJDYXNlKCkpIHtcbiAgLy8gICAgICAgICAgICBjYXNlIFwiYWN0aXZlXCI6XG4gIC8vICAgICAgICAgICAgICBjb2xvciA9IFwiI2NjMDAzM1wiO1xuICAvLyAgICAgICAgICAgICAgbGFiZWxDb2xvciA9IFwiI2ZmZlwiO1xuICAvLyAgICAgICAgICAgICAgYnJlYWs7XG4gIC8vICAgICAgICAgICAgY2FzZSBcIm1vbml0b3JpbmdcIjpcbiAgLy8gICAgICAgICAgICAgIGNvbG9yID0gXCIjZTFiYjI1XCI7XG4gIC8vICAgICAgICAgICAgICBsYWJlbENvbG9yID0gXCIjZmZmXCI7XG4gIC8vICAgICAgICAgICAgICBicmVhaztcbiAgLy8gICAgICAgICAgICBjYXNlIFwiaW5hY3RpdmVcIjpcbiAgLy8gICAgICAgICAgICAgIGNvbG9yID0gXCIjYmRiZGJkXCI7XG4gIC8vICAgICAgICAgICAgICBsYWJlbENvbG9yID0gXCIjMDAwXCI7XG4gIC8vICAgICAgICAgICAgICBicmVhaztcbiAgLy8gICAgICAgICAgfVxuICAvLyAgICAgICAgfVxuICAvLyAgICAgICAgcmV0dXJuICc8ZGl2IGNsYXNzPVwiZmVhdHVyZWxhYmVsLWljb24tbnVtYmVyXCInICsgKGNvbG9yID8gJyBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6ICcgKyBjb2xvciArICc7Y29sb3I6ICcgKyBsYWJlbENvbG9yICsgJ1wiJyA6ICcnKSArICc+PHNwYW4+JyArIHByb3BlcnRpZXMudGhlbWVfY291bnQgKyAnPC9zcGFuPjwvZGl2Pic7XG4gIC8vICAgICAgfVxuICAvLyAgICAgIGVsc2Uge1xuICAvLyAgICAgICAgcmV0dXJuICc8ZGl2IGNsYXNzPVwiZmVhdHVyZWxhYmVsLWljb24tbnVtYmVyXCI+PHNwYW4+JyArIHByb3BlcnRpZXMudGhlbWVfY291bnQgKyAnPC9zcGFuPjwvZGl2Pic7XG4gIC8vICAgICAgfVxuICAvLyAgICB9LFxuICAvLyAgICBcIm1hcC1pY29uLXNpemVcIjogZnVuY3Rpb24gKHByb3BlcnRpZXMpIHtcbiAgLy8gICAgICAvL1JldHVybiBhbiBhcnJheSBvZiAyIGl0ZW1zLiBzaXplIG9mIG1hcCBpY29uXG4gIC8vICAgICAgcmV0dXJuIFszNSwzNV07XG4gIC8vICAgIH0sXG4gIC8vICAgIFwiZGV0YWlsc1VybFwiOiBjb25maWcuY2h1YmJzUGF0aCgnc2VydmljZXMvY3VzdG9tL2N1c3RvbV9vcGVyYXRpb24/bmFtZT1nZXQ6dGhlbWVieWd1aWQmZm9ybWF0PWpzb24mZ3VpZHM9Omd1aWRzJmdhZG1fbGV2ZWw9OmxldmVsJmZpbHRlcnM9OmZpbHRlcnMnKSxcbiAgLy8gICAgXCJvblNlbGVjdFwiOiAnZmV0Y2hGZWF0dXJlRGV0YWlscycsIC8vIHRoZSBCQm94R2VvSlNPTiBtZXRob2QgdG8gY2FsbCBvbiBzZWxlY3QuICh0b2dnbGVkIG9uKVxuICAvLyAgICBcIm9uRGVzZWxlY3RcIjogJ2Nsb3NlRGV0YWlscycsIC8vIGZlYXR1cmVsYWJlbCBldmFsdWF0ZXMgdGhpcyBzdHJpbmcgd2hlbiBhIGZlYXR1cmUgaXMgdG9nZ2xlZCBvZmZcbiAgLy8gICAgXCJkZWZhdWx0VGhlbWVcIjogJ3Byb2plY3QnLCAvLyBUaGUgZGVmYXVsdCB0aGVtZSB0aGUgbGF5ZXIgdXNlcy4gVGhpcyBpcyB1c2VkIGlmIHRoZXJlIGlzIG5vIHRoZW1lIHF1ZXJ5IHBhcmFtLlxuICAvLyAgICBcImxlZ2VuZFwiOiBmdW5jdGlvbiAodGhlbWUpIHtcbiAgLy8gICAgICBpZiAodGhlbWUudG9Mb3dlckNhc2UoKSA9PSAnZGlzYXN0ZXInKSB7XG4gIC8vICAgICAgICAvL2Rpc2FzdGVyXG4gIC8vICAgICAgICByZXR1cm4gJzxpbWcgc3JjPVwiaW1hZ2VzL2xlZ2VuZF9kaXNhc3Rlci5wbmdcIiBhbHQ9XCJkaXNhc3RlciBsZWdlbmRcIiAvPic7XG4gIC8vICAgICAgfVxuICAvLyAgICAgIGVsc2UgaWYgKHRoZW1lLnRvTG93ZXJDYXNlKCkgPT0gJ3Byb2plY3RoZWFsdGgnKSB7XG4gIC8vICAgICAgICAvL3Byb2plY3RcbiAgLy8gICAgICAgIHJldHVybiAnPGltZyBzcmM9XCJpbWFnZXMvbGVnZW5kX3Byb2plY3RoZWFsdGgucG5nXCIgYWx0PVwicHJvamVjdCBoZWFsdGggbGVnZW5kXCIgLz4nO1xuICAvLyAgICAgIH1cbiAgLy8gICAgICBlbHNlIGlmKHRoZW1lLnRvTG93ZXJDYXNlKCkgPT0gJ3Byb2plY3RyaXNrJykge1xuICAvLyAgICAgICAgcmV0dXJuICc8aW1nIHNyYz1cImltYWdlcy9sZWdlbmRfcHJvamVjdHJpc2sucG5nXCIgYWx0PVwicHJvamVjdCByaXNrIGxlZ2VuZFwiIC8+JztcbiAgLy8gICAgICB9XG4gIC8vICAgICAgZWxzZSBpZiAodGhlbWUudG9Mb3dlckNhc2UoKSA9PSAncHJvamVjdCcpIHtcbiAgLy8gICAgICAgIHJldHVybiAnPGltZyBzcmM9XCJpbWFnZXMvbGVnZW5kX3Byb2plY3QucG5nXCIgYWx0PVwicHJvamVjdCBsZWdlbmRcIiAvPic7XG4gIC8vICAgICAgfVxuICAvLyAgICB9XG4gIC8vXG4gIC8vICB9XG4gIC8vfTtcblxuICB0aGlzLnRoZW1lID0ge1xuICAgIG5hbWU6ICdUaGVtZSAoQmFkZ2UgT2ZmKScsXG4gICAgdHlwZTogJ2Jib3hnZW9qc29uJyxcbiAgICB1cmw6IGNvbmZpZy5jaHViYnNQYXRoKFwic2VydmljZXMvY3VzdG9tL2N1c3RvbV9vcGVyYXRpb24/bmFtZT1nZXRhZ2dyZWdhdGVkdGhlbWVmZWF0dXJlc2J5aWQmZm9ybWF0PWdlb2pzb24mdGhlbWU9OnRoZW1lJmdhZG1fbGV2ZWw9OmxldmVsJmlkcz06aWRzJmZpbHRlcnM9OmZpbHRlcnNcIiksXG4gICAgcHJvcGVydGllczoge1xuICAgICAgXCJzdHlsZUZuXCI6IGZ1bmN0aW9uIChwcm9wZXJ0aWVzKSB7XG4gICAgICAgIHZhciBzdHlsZSA9IHtcbiAgICAgICAgICBjb2xvcjogJ3doaXRlJyxcbiAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgIGZpbGxPcGFjaXR5OiAwLjA3LFxuICAgICAgICAgIHdlaWdodDogMS41XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKHByb3BlcnRpZXMudGhlbWUgPT0gXCJkaXNhc3RlclwiKSB7XG4gICAgICAgICAgaWYgKHByb3BlcnRpZXMgJiYgcHJvcGVydGllcy5pcm9jX3N0YXR1c19fYykge1xuICAgICAgICAgICAgc3dpdGNoIChwcm9wZXJ0aWVzLmlyb2Nfc3RhdHVzX19jLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgICAgICAgICAgY2FzZSBcImFjdGl2ZVwiOlxuICAgICAgICAgICAgICAgIHN0eWxlLmZpbGxDb2xvciA9IFwiI2NjMDAzM1wiO1xuICAgICAgICAgICAgICAgIHN0eWxlLmZpbGxPcGFjaXR5ID0gMC41O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIFwibW9uaXRvcmluZ1wiOlxuICAgICAgICAgICAgICAgIHN0eWxlLmZpbGxDb2xvciA9IFwiI2NjOTkwMFwiO1xuICAgICAgICAgICAgICAgIHN0eWxlLmZpbGxPcGFjaXR5ID0gMC41O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIFwiaW5hY3RpdmVcIjpcbiAgICAgICAgICAgICAgICBzdHlsZS5maWxsQ29sb3IgPSBcIndoaXRlXCI7XG4gICAgICAgICAgICAgICAgc3R5bGUuZmlsbE9wYWNpdHkgPSAwLjA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHByb3BlcnRpZXMudGhlbWUgPT0gXCJwcm9qZWN0cmlza1wiKSB7XG4gICAgICAgICAgaWYgKHByb3BlcnRpZXMgJiYgcHJvcGVydGllcy5vdmVyYWxsX2Fzc2Vzc21lbnRfX2MpIHtcbiAgICAgICAgICAgIHN3aXRjaCAocHJvcGVydGllcy5vdmVyYWxsX2Fzc2Vzc21lbnRfX2MudG9Mb3dlckNhc2UoKSkge1xuICAgICAgICAgICAgICBjYXNlIFwiY3JpdGljYWxcIjpcbiAgICAgICAgICAgICAgICBzdHlsZS5maWxsQ29sb3IgPSBcInJlZFwiO1xuICAgICAgICAgICAgICAgIHN0eWxlLmZpbGxPcGFjaXR5ID0gMC41O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIFwiaGlnaFwiOlxuICAgICAgICAgICAgICAgIHN0eWxlLmZpbGxDb2xvciA9IFwib3JhbmdlXCI7XG4gICAgICAgICAgICAgICAgc3R5bGUuZmlsbE9wYWNpdHkgPSAwLjU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgXCJtZWRpdW1cIjpcbiAgICAgICAgICAgICAgICBzdHlsZS5maWxsQ29sb3IgPSBcInllbGxvd1wiO1xuICAgICAgICAgICAgICAgIHN0eWxlLmZpbGxPcGFjaXR5ID0gMC41O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIFwibG93XCI6XG4gICAgICAgICAgICAgICAgc3R5bGUuZmlsbENvbG9yID0gXCJncmVlblwiO1xuICAgICAgICAgICAgICAgIHN0eWxlLmZpbGxPcGFjaXR5ID0gMC41O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChwcm9wZXJ0aWVzLnRoZW1lID09IFwicHJvamVjdGhlYWx0aFwiKSB7XG4gICAgICAgICAgaWYgKHByb3BlcnRpZXMgJiYgcHJvcGVydGllcy5vdmVyYWxsX3N0YXR1c19fYykge1xuICAgICAgICAgICAgc3dpdGNoIChwcm9wZXJ0aWVzLm92ZXJhbGxfc3RhdHVzX19jLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgICAgICAgICAgY2FzZSBcInJlZFwiOlxuICAgICAgICAgICAgICAgIHN0eWxlLmZpbGxDb2xvciA9IFwicmVkXCI7XG4gICAgICAgICAgICAgICAgc3R5bGUuZmlsbE9wYWNpdHkgPSAwLjU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgXCJ5ZWxsb3dcIjpcbiAgICAgICAgICAgICAgICBzdHlsZS5maWxsQ29sb3IgPSBcInllbGxvd1wiO1xuICAgICAgICAgICAgICAgIHN0eWxlLmZpbGxPcGFjaXR5ID0gMC41O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIFwiZ3JlZW5cIjpcbiAgICAgICAgICAgICAgICBzdHlsZS5maWxsQ29sb3IgPSBcImdyZWVuXCI7XG4gICAgICAgICAgICAgICAgc3R5bGUuZmlsbE9wYWNpdHkgPSAwLjU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgXCJ3aGl0ZVwiOlxuICAgICAgICAgICAgICAgIHN0eWxlLmZpbGxDb2xvciA9IFwid2hpdGVcIjtcbiAgICAgICAgICAgICAgICBzdHlsZS5maWxsT3BhY2l0eSA9IDAuNTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0eWxlO1xuICAgICAgfSxcbiAgICAgIFwibWFwLWljb24tc2l6ZVwiOiBmdW5jdGlvbiAocHJvcGVydGllcykge1xuICAgICAgICAvL1JldHVybiBhbiBhcnJheSBvZiAyIGl0ZW1zLiBzaXplIG9mIG1hcCBpY29uXG4gICAgICAgIHJldHVybiBbMzUsMzVdO1xuICAgICAgfSxcbiAgICAgIFwiZGV0YWlsc1VybFwiOiBjb25maWcuY2h1YmJzUGF0aCgnc2VydmljZXMvY3VzdG9tL2N1c3RvbV9vcGVyYXRpb24/bmFtZT1nZXQ6dGhlbWVieWd1aWQmZm9ybWF0PWpzb24mZ3VpZHM9Omd1aWRzJmdhZG1fbGV2ZWw9OmxldmVsJmZpbHRlcnM9OmZpbHRlcnMnKSxcbiAgICAgIFwib25TZWxlY3RcIjogJ2ZldGNoRmVhdHVyZURldGFpbHMnLCAvLyB0aGUgQkJveEdlb0pTT04gbWV0aG9kIHRvIGNhbGwgb24gc2VsZWN0LiAodG9nZ2xlZCBvbilcbiAgICAgIFwib25EZXNlbGVjdFwiOiAnY2xvc2VEZXRhaWxzJywgLy8gZmVhdHVyZWxhYmVsIGV2YWx1YXRlcyB0aGlzIHN0cmluZyB3aGVuIGEgZmVhdHVyZSBpcyB0b2dnbGVkIG9mZlxuICAgICAgXCJkZWZhdWx0VGhlbWVcIjogJ3Byb2plY3QnLCAvLyBUaGUgZGVmYXVsdCB0aGVtZSB0aGUgbGF5ZXIgdXNlcy4gVGhpcyBpcyB1c2VkIGlmIHRoZXJlIGlzIG5vIHRoZW1lIHF1ZXJ5IHBhcmFtLlxuICAgICAgXCJsYWJlbFByb3BlcnR5XCI6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gJzxkaXYgY2xhc3M9XCJmZWF0dXJlbGFiZWwtaWNvbi1udW1iZXJcIiBzdHlsZT1cImRpc3BsYXk6bm9uZTtcIj48L2Rpdj4nO1xuICAgICAgfSxcbiAgICAgIFwibGVnZW5kXCI6IGZ1bmN0aW9uICh0aGVtZSkge1xuICAgICAgICBpZiAodGhlbWUudG9Mb3dlckNhc2UoKSA9PSAnZGlzYXN0ZXInKSB7XG4gICAgICAgICAgLy9kaXNhc3RlclxuICAgICAgICAgIHJldHVybiAnPGltZyBzcmM9XCJpbWFnZXMvbGVnZW5kX2Rpc2FzdGVyLnBuZ1wiIGFsdD1cImRpc2FzdGVyIGxlZ2VuZFwiIC8+JztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGVtZS50b0xvd2VyQ2FzZSgpID09ICdwcm9qZWN0aGVhbHRoJykge1xuICAgICAgICAgIC8vcHJvamVjdFxuICAgICAgICAgIHJldHVybiAnPGltZyBzcmM9XCJpbWFnZXMvbGVnZW5kX3Byb2plY3RoZWFsdGgucG5nXCIgYWx0PVwicHJvamVjdCBoZWFsdGggbGVnZW5kXCIgLz4nO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYodGhlbWUudG9Mb3dlckNhc2UoKSA9PSAncHJvamVjdHJpc2snKSB7XG4gICAgICAgICAgcmV0dXJuICc8aW1nIHNyYz1cImltYWdlcy9sZWdlbmRfcHJvamVjdHJpc2sucG5nXCIgYWx0PVwicHJvamVjdCByaXNrIGxlZ2VuZFwiIC8+JztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGVtZS50b0xvd2VyQ2FzZSgpID09ICdwcm9qZWN0Jykge1xuICAgICAgICAgIHJldHVybiAnPGltZyBzcmM9XCJpbWFnZXMvbGVnZW5kX3Byb2plY3QucG5nXCIgYWx0PVwicHJvamVjdCBsZWdlbmRcIiAvPic7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgIH1cbiAgfTtcblxuXG4gIHRoaXMuYm91bmRhcmllcyA9IHtcbiAgICBuYW1lOiAnQm91bmRhcmllcycsXG4gICAgdHlwZTogJ2Jib3hnZW9qc29uJyxcbiAgICB0aGVtZTogJ2FsbCcsXG4gICAgdXJsOiBjb25maWcuY2h1YmJzUGF0aCgnc2VydmljZXMvY3VzdG9tL2N1c3RvbV9vcGVyYXRpb24/bmFtZT1nZXRmZWF0dXJlc2J5aWQmZm9ybWF0PWdlb2pzb24mZ2FkbV9sZXZlbD06bGV2ZWwmaWRzPTppZHMnKSxcbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICBcInN0cm9rZVwiOiAnd2hpdGUnLFxuICAgICAgXCJzdHJva2Utd2lkdGhcIjogMS4zLFxuICAgICAgXCJzdHJva2Utb3BhY2l0eVwiOiAxLFxuICAgICAgXCJmaWxsLW9wYWNpdHlcIjogMCxcbiAgICAgIFwibGFiZWxQcm9wZXJ0eVwiOiBcIm5hbWVcIixcbiAgICAgIFwib25TZWxlY3RcIjogJ3Nob3dGZWF0dXJlUHJvcGVydGllcycsXG4gICAgICBcIm9uRGVzZWxlY3RcIjogJ2Nsb3NlRGV0YWlscycsXG4gICAgICBcImxlZ2VuZFwiOiAnPHN2ZyBjbGFzcz1cImxlYWZsZXQtem9vbS1hbmltYXRlZFwiIHdpZHRoPVwiNDhcIiBoZWlnaHQ9XCI0OFwiPjxnPjxwYXRoIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBzdHJva2U9XCJ3aGl0ZVwiIHN0cm9rZS1vcGFjaXR5PVwiMVwiIHN0cm9rZS13aWR0aD1cIjEuM1wiIGZpbGw9XCIjNTU1NTU1XCIgZmlsbC1vcGFjaXR5PVwiMFwiIGNsYXNzPVwibGVhZmxldC1jbGlja2FibGVcIiBkPVwiTS0xODkwIC00MDlMLTE4OTYgLTQwNEwtMTg5OSAtNDA0TC0xOTA3IC0zOTVMLTE5MTkgLTM5NEwtMTkyMSAtNDA0TC0xOTI0IC00MDhMLTE5MjIgLTQxMUwtMTg5OSAtNDIxTC0xODk0IC00MjBMLTE4OTEgLTQxNEwtMTg4OCAtNDEzelwiPjwvcGF0aD48L2c+PC9zdmc+J1xuICAgIH1cblxuICB9O1xuXG4gIC8qKlxuICAgKiBTaG93cyBiYWRnZXMgd2l0aCBudW1iZXJzIG9uIHRoZW0uIFRoaXMgaXMgZm9yIHRlc3RpbmcgYW5kIGRlbW8gcHVycG9zZXMuXG4gICAqIERlbW9uc3RyYXRlcyB0aGUgbGFiZWwgdy8gYmFkZ2UgZmVhdHVyZS5cbiAgICovXG4gIHRoaXMuZmFrZWNvdW50ID0ge1xuICAgIG5hbWU6ICdGYWtlIENvdW50JyxcbiAgICB0eXBlOiAnYmJveGdlb2pzb24nLFxuICAgIHVybDogY29uZmlnLmNodWJic1BhdGgoJ3NlcnZpY2VzL2N1c3RvbS9jdXN0b21fb3BlcmF0aW9uP25hbWU9Z2V0ZmVhdHVyZXNieWlkJmZvcm1hdD1nZW9qc29uJmdhZG1fbGV2ZWw9OmxldmVsJmlkcz06aWRzJyksXG4gICAgcHJvcGVydGllczoge1xuICAgICAgXCJzdHJva2VcIjogJ3doaXRlJyxcbiAgICAgIFwic3Ryb2tlLXdpZHRoXCI6IDIsXG4gICAgICBcInN0cm9rZS1vcGFjaXR5XCI6IDEsXG4gICAgICBcImZpbGxcIjogXCJncmVlblwiLFxuICAgICAgXCJmaWxsLW9wYWNpdHlcIjogMCxcbiAgICAgIFwibGFiZWxQcm9wZXJ0eVwiOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoNTAgLSAxICsgMSkpICsgMTtcbiAgICAgIH1cbiAgICB9XG5cbiAgfTtcblxuICAvL0dBRE0gY291bnRyeSBleHRlbnRzLCBsZXZlbCAwXG4gIHRoaXMuY291bnRyeWV4dGVudHMgPSB7XG4gICAgdHlwZTogJ2dlb2pzb24nLFxuICAgICAgdGhlbWU6ICdvdGhlcicsXG4gICAgICB1cmw6ICdkYXRhL3Z3X2dhZG1fcmF3X2dlb20uZ2VvanNvbidcbiAgfTtcblxuICAvL0FSQyBSZWdpb24gZXh0ZW50c1xuICB0aGlzLmFyY3JlZ2lvbmV4dGVudHMgPSB7XG4gICAgdHlwZTogJ2dlb2pzb24nLFxuICAgICAgdGhlbWU6ICdvdGhlcicsXG4gICAgICB1cmw6ICdkYXRhL2FyY19yZWdpb25fZXh0ZW50cy5nZW9qc29uJ1xuICB9O1xuXG4gIC8qKlxuICAgKiBGb3IgbGF5ZXJzLCB3ZSB0cnkgYW5kIGdldCBhbiBhbGlhcyBmb3IgZXZlcnl0aGluZywgc28gaWYgaXQncyBhIFVSTCB0aGF0XG4gICAqIGRvZXMgbm90IG1hdGNoLCB3ZSBqdXN0IHdhbnQgdG8gcmV0dXJuIGl0c2VsZiBzbyB3ZSBjYW4gZmV0Y2ggdGhhdCBnaXZlbiB1cmwuXG4gICAqXG4gICAqIEBwYXJhbSBuYW1lXG4gICAqIEByZXR1cm5zIHsqfVxuICAgKi9cbiAgdGhpcy5maW5kID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB2YXIgdmFsID0gdGhpc1tuYW1lXSB8fCB0aGlzW25hbWUudG9Mb3dlckNhc2UoKV07XG4gICAgaWYgKHR5cGVvZiB2YWwgIT09ICd1bmRlZmluZWQnICYmIHZhbCAhPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHZhbDtcbiAgICB9XG4gICAgaWYgKG5hbWUuc2xpY2UoMCwgNCkudG9Mb3dlckNhc2UoKSA9PT0gJ2h0dHAnKSB7XG4gICAgICByZXR1cm4gbmFtZTtcbiAgICB9XG4gICAgY29uc29sZS5lcnJvcignQ09VTEQgTk9UIEZJTkQgQUxJQVM6ICcgKyBuYW1lKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcblxufSk7XG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgTmljaG9sYXMgSGFsbGFoYW4gPG5oYWxsYWhhbkBzcGF0aWFsZGV2LmNvbT5cbiAqICAgICAgIG9uIDMvMTgvMTQuXG4gKi9cblxuLyoqXG4gKiBDb25maWcgRmlsZSBmb3IgU3RvcmllcyBQYW5lbFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdHZW9Bbmd1bGFyJykuc2VydmljZSgnU3Rvcmllc0NvbmZpZycsIGZ1bmN0aW9uICgpIHtcblxuICAvKipcbiAgICogU3RvcmllcyBQYW5lbCBMaXN0XG4gICAqXG4gICAqIExpc3Qgb2Ygc3RvcmllcyB0aGF0IGdldCBzaG93biBpbiB0aGUgU3RvcmllcyBQYW5lbC4gRWRpdCB0aGlzIHRvIGFkZCBvciByZW1vdmVcbiAgICogc3RvcmllcyB0aGF0IHRoZSB1c2VyIHdpbGwgc2VlIGFzIGNob2ljZXMuIEFsbCBzdG9yaWVzLCBpbmNsdWRpbmcgb25lcyBub3QgaW4gdGhpc1xuICAgKiBsaXN0LCBjYW4gc3RpbGwgYmUgbWFudWFsbHkgcmVmZXJlbmNlZCBpbiB0aGUgdXJsLiBUaGlzIGlzIGp1c3QgZm9yIHRoZSBVc2VyIEludGVyZmFjZS5cbiAgICovXG4gIHRoaXMuc3RvcmllcyA9IFtcbiAgICAnaGFpeWFuJyxcbiAgICAnZWJvbGEnXG4gIF07XG5cblxuICAvKipcbiAgICogU3Rvcmllc1xuICAgKlxuICAgKiBBbGwgc3RvcnkgYWxpYXNlcyBjYW4gYmUgcmVmZXJyZWQgdG8gaW4gdGhlIHVybC4gVGhlIGNvcnJlc3BvbmRpbmdcbiAgICogcGF0aCB0byB0aGUgdGh1bWJuYWlsIGluIHRoZSBTdG9yaWVzIFBhbmVsIHNob3VsZCBiZTpcbiAgICogICAgaW1hZ2VzL3thbGlhc05hbWV9LmpwZ1xuICAgKlxuICAgKi9cblxuICB0aGlzLmhhaXlhbiA9IHtcbiAgICB1cmw6ICcvbWFwZm9saW8vaW5kZXguaHRtbCMvbWFwQDEyLjc2ODk0NiwxMjIuNDg2NTcyLDYob3J0aG8sZ2FkbTAsZ2RhY3MpP3RoZW1lPWRpc2FzdGVyJmRldGFpbHMtcGFuZWw9b3BlbiZzZl9pZD1hMEVkMDAwMDAwcVpudFVFQVMnLFxuICAgIG5hbWU6ICdUeXBob29uIEhhaXlhbiBSZXNwb25zZScsXG4gICAgZGF0ZTogJzIwMTMtMTAtMTInLFxuICAgIHRodW1ibmFpbDogJ2ltYWdlcy9zdG9yaWVzL2hhaXlhbi5wbmcnLFxuICAgIGtleXdvcmRzOiAnVHlwaG9vbiwgRGlzYXN0ZXIgUmVzcG9uc2UsIEhhaXlhbiwgRGlzYXN0ZXIsIEFNRUUnXG4gIH07XG4gIHRoaXMuZWJvbGEgPSB7XG4gICAgdXJsOiAnL21hcGZvbGlvL2luZGV4Lmh0bWwjL21hcEAxNS4wNzIxMjQsLTMuNDYwNjkzLDYob3J0aG8sZ2FkbTAsZ2RhY3MpP3RoZW1lPWRpc2FzdGVyJyxcbiAgICBuYW1lOiAnRWJvbGEgT3V0YnJlYWsgUmVzb3Buc2UnLFxuICAgIGRhdGU6ICcyMDE0LTE1LTUnLFxuICAgIHRodW1ibmFpbDogJ2ltYWdlcy9zdG9yaWVzL2Vib2xhLnBuZycsXG4gICAga2V5d29yZHM6ICdFYm9sYSwgRGlzYXN0ZXIgUmVzcG9uc2UsIEd1aW5lYSwgRGlzZWFzZSwgTWFsaSwgQWZyaWNhJ1xuXG5cbiAgfTtcblxuICAvKipcbiAgICogRm9yIGxheWVycywgd2UgdHJ5IGFuZCBnZXQgYW4gYWxpYXMgZm9yIGV2ZXJ5dGhpbmcsIHNvIGlmIGl0J3MgYSBVUkwgdGhhdFxuICAgKiBkb2VzIG5vdCBtYXRjaCwgd2UganVzdCB3YW50IHRvIHJldHVybiBpdHNlbGYgc28gd2UgY2FuIGZldGNoIHRoYXQgZ2l2ZW4gdXJsLlxuICAgKlxuICAgKiBAcGFyYW0gbmFtZVxuICAgKiBAcmV0dXJucyB7Kn1cbiAgICovXG4gIHRoaXMuZmluZCA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICB2YXIgdmFsID0gdGhpc1tuYW1lXSB8fCB0aGlzW25hbWUudG9Mb3dlckNhc2UoKV07XG4gICAgaWYgKHR5cGVvZiB2YWwgIT09ICd1bmRlZmluZWQnICYmIHZhbCAhPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHZhbDtcbiAgICB9XG4gICAgaWYgKG5hbWUuc2xpY2UoMCwgNCkudG9Mb3dlckNhc2UoKSA9PT0gJ2h0dHAnKSB7XG4gICAgICByZXR1cm4gbmFtZTtcbiAgICB9XG4gICAgY29uc29sZS5lcnJvcignQ09VTEQgTk9UIEZJTkQgQUxJQVM6ICcgKyBuYW1lKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcblxufSk7XG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgTmljaG9sYXMgSGFsbGFoYW4gPG5oYWxsYWhhbkBzcGF0aWFsZGV2LmNvbT5cbiAqICAgICAgIG9uIDYvMy8xNC5cbiAqL1xuXG52YXIgRmVhdHVyZVNldCA9IHJlcXVpcmUoJy4uLy4uLy4uL2xpYi9mZWF0dXJlbGFiZWwvRmVhdHVyZVNldCcpO1xudmFyIFJlc291cmNlID0gcmVxdWlyZSgnLi9yZXNvdXJjZScpO1xudmFyIGJib3hVcmwgPSByZXF1aXJlKCcuL3ZlY3RvcicpLmJib3hVcmw7XG52YXIgYmJveFJlc291cmNlcyA9IHJlcXVpcmUoJy4vdmVjdG9yJykuYmJveFJlc291cmNlcztcblxudmFyIEwgPSByZXF1aXJlKCcuL3ZlY3RvcicpLkw7XG52YXIgYW5ndWxhciA9IHJlcXVpcmUoJy4vdmVjdG9yJykuYW5ndWxhcjtcbnZhciAkcm9vdFNjb3BlID0gcmVxdWlyZSgnLi92ZWN0b3InKS4kcm9vdFNjb3BlO1xudmFyICRodHRwID0gcmVxdWlyZSgnLi92ZWN0b3InKS4kaHR0cDtcblxubW9kdWxlLmV4cG9ydHMgPSBCQm94R2VvSlNPTjtcblxuXG5mdW5jdGlvbiBCQm94R2VvSlNPTihjb25maWcpIHtcbiAgUmVzb3VyY2UuY2FsbCh0aGlzLCBjb25maWcpO1xuICBpZihjb25maWcuYmJveHVybCkge1xuICAgIHRoaXMuX2Jib3h1cmwgPSBiYm94VXJsID0gY29uZmlnLmJib3h1cmw7XG4gIH1cbiAgdGhpcy5fZmVhdHVyZXMgPSB7fTtcbiAgdGhpcy5fZmVhdHVyZUxheWVyc0J5TGV2ZWwgPSB7fTtcbiAgdGhpcy5fYWxsRmVhdHVyZUxheWVycyA9IHt9O1xuICBpZiAoY29uZmlnLnByb3BlcnRpZXMgJiYgY29uZmlnLnByb3BlcnRpZXMubGFiZWxQcm9wZXJ0eSkge1xuICAgIHRoaXMuX2ZlYXR1cmVTZXQgPSBuZXcgRmVhdHVyZVNldCgpO1xuICB9XG4gIHRoaXMuX2RlZmF1bHRUaGVtZSA9IGNvbmZpZy5kZWZhdWx0VGhlbWUgfHwgJ3Byb2plY3QnO1xuXG4gIGlmIChjb25maWcuZGV0YWlsc1VybCkge1xuICAgIHRoaXMuX2RldGFpbHNVcmwgPSBjb25maWcuZGV0YWlsc1VybDtcbiAgfVxuXG4gIGJib3hSZXNvdXJjZXMucHVzaCh0aGlzKTtcbiAgdGhpcy5fcmVzSWR4ID0gYmJveFJlc291cmNlcy5sZW5ndGggLSAxO1xufVxuXG5CQm94R2VvSlNPTi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFJlc291cmNlLnByb3RvdHlwZSk7XG5CQm94R2VvSlNPTi5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBCQm94R2VvSlNPTjtcblxuXG5CQm94R2VvSlNPTi5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuICBiYm94UmVzb3VyY2VzLnNwbGljZSh0aGlzLl9yZXNJZHgsMSk7XG59O1xuXG5cbkJCb3hHZW9KU09OLnByb3RvdHlwZS5nZXRMYXllciA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGxheWVyID0gUmVzb3VyY2UucHJvdG90eXBlLmdldExheWVyLmNhbGwodGhpcyk7XG4gIGxheWVyLmRlc3Ryb3lSZXNvdXJjZSA9IHRoaXMuZGVzdHJveTsgLy8gZ2l2ZXMgdGhlIG1hcCB0byBkZXN0cm95IHRoZSBiYm94Z2VvanNvbiB2ZWN0b3IgcHJvdmlkZXIgcmVzb3VyY2VcbiAgcmV0dXJuIGxheWVyO1xufTtcblxuXG5CQm94R2VvSlNPTi5wcm90b3R5cGUuX2dldEZlYXR1cmVzID0gZnVuY3Rpb24gKGZlYXRPYmopIHtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICB2YXIgdGhlbWUgPSAkcm9vdFNjb3BlLiRzdGF0ZVBhcmFtcy50aGVtZSB8fCBzZWxmLl9kZWZhdWx0VGhlbWU7XG4gIHZhciBmaWx0ZXJzID0gJ251bGwnO1xuICBpZiAoJHJvb3RTY29wZS4kc3RhdGVQYXJhbXMuZmlsdGVycykge1xuICAgIGZpbHRlcnMgPSAkcm9vdFNjb3BlLiRzdGF0ZVBhcmFtcy5maWx0ZXJzO1xuICB9XG4gIHZhciB1cmwgPSB0aGlzLl91cmwucmVwbGFjZSgnOnRoZW1lJywgdGhlbWUpXG4gICAgLnJlcGxhY2UoJzpsZXZlbCcsIGZlYXRPYmoubGV2ZWwpXG4gICAgLnJlcGxhY2UoJzppZHMnLCBmZWF0T2JqLmd1aWQpXG4gICAgLnJlcGxhY2UoJzpmaWx0ZXJzJywgZmlsdGVycyk7XG4gIHZhciBwcm94eVBhdGggPSBjb25maWcucHJveHlQYXRoKHVybCk7XG5cbiAgLy8gYSBjYWNoZSBtYWtlcyBzZW5zZSBpZiB0aGUgYmJveGdlb2pzb24gb2JqZWN0IGlzIHJlaW5zdGFudGlhdGVkXG4gICRodHRwLmdldCh1cmwsIHtjYWNoZTogdHJ1ZX0pLnN1Y2Nlc3MoZnVuY3Rpb24gKGdlb2pzb24sIHN0YXR1cykge1xuICAgIHByb2Nlc3NGZWF0dXJlcyhzZWxmLCBmZWF0T2JqLCBnZW9qc29uKTtcbiAgfSkuZXJyb3IoZnVuY3Rpb24oZXJyKSB7XG4gICAgJGh0dHAuZ2V0KHByb3h5UGF0aCkuc3VjY2VzcyhmdW5jdGlvbiAoZ2VvanNvbiwgc3RhdHVzKSB7XG4gICAgICBwcm9jZXNzRmVhdHVyZXMoc2VsZiwgZmVhdE9iaiwgZ2VvanNvbik7XG4gICAgfSkuZXJyb3IoZnVuY3Rpb24gKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcignVW5hYmxlIHRvIGdldEZlYXR1cmVzOiAnICsgdXJsKTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5mdW5jdGlvbiBwcm9jZXNzRmVhdHVyZXMoc2VsZiwgZmVhdE9iaiwgZ2VvanNvbikge1xuICBpZiAoZ2VvanNvbi5lcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ1VuYWJsZSB0byBmZXRjaCBmZWF0dXJlOiAnICsgZ2VvanNvbi5lcnJvcik7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKCFnZW9qc29uLmZlYXR1cmVzIHx8IGdlb2pzb24uZmVhdHVyZXMubGVuZ3RoIDwgMSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBmZWF0ID0gZ2VvanNvbi5mZWF0dXJlc1swXTtcblxuICAvLyBwdXR0aW5nIGV4aXN0aW5nIHByb3BlcnRpZXMgaW50byBuZXcgZmVhdHVyZSBvYmplY3QgcHJvcGVydGllc1xuICBmb3IgKHZhciBrZXkgaW4gZmVhdE9iaikge1xuICAgIGZlYXQucHJvcGVydGllc1trZXldID0gZmVhdE9ialtrZXldO1xuICAgIGRlbGV0ZSBmZWF0T2JqW2tleV07XG4gIH1cblxuICAvLyBleHRlbmRpbmcgcHJvcGVydGllcyBmcm9tIHRoZSBjb25maWcgZmlsZVxuICBmb3IgKHZhciBrZXkgaW4gc2VsZi5fY29uZmlnLnByb3BlcnRpZXMpIHtcbiAgICBmZWF0LnByb3BlcnRpZXNba2V5XSA9IHNlbGYuX2NvbmZpZy5wcm9wZXJ0aWVzW2tleV07XG4gICAgLy8gTGF5ZXJDb25maWcgd2lsbCBzdGF0ZSB0aGUgbmFtZSBvZiB0aGUgQkJveEdlb0pTT04gbWV0aG9kIHRvIGJlIGNhbGxlZCBvbiBjbGljay5cbiAgICBpZiAoa2V5ID09PSAnb25TZWxlY3QnIHx8IGtleSA9PT0gJ29uRGVzZWxlY3QnKSB7XG4gICAgICB2YXIgZm5OYW1lID0gc2VsZi5fY29uZmlnLnByb3BlcnRpZXNba2V5XTtcbiAgICAgIGZlYXQucHJvcGVydGllc1trZXldID0gc2VsZltmbk5hbWVdO1xuICAgIH1cbiAgfVxuXG4gIGZvciAodmFyIGsgaW4gZmVhdCkge1xuICAgIGZlYXRPYmpba10gPSBmZWF0W2tdO1xuICB9XG4gIGFuZ3VsYXIuZXh0ZW5kKGZlYXRPYmosIGZlYXQpO1xuICBjb25zb2xlLmxvZygnZmV0Y2hlZCBmZWF0dXJlOiAnICsgZmVhdE9iai5wcm9wZXJ0aWVzLm5hbWUpO1xuXG4gIGlmICghc2VsZi5fZ2VvanNvbkxheWVyKSB7XG4gICAgc2VsZi5fZ2V0TGF5ZXIoKTtcbiAgICBjb25zb2xlLmxvZygnY3JlYXRpbmcgbGF5ZXIgaW4gX2dldEZlYXR1cmVzJyk7XG4gIH1cblxuICB2YXIgb3B0aW9ucyA9IHNlbGYuX2dlb2pzb25MYXllci5vcHRpb25zO1xuICB2YXIgZmVhdExheWVyID0gTC5HZW9KU09OLmdlb21ldHJ5VG9MYXllcihmZWF0T2JqLCBvcHRpb25zLnBvaW50VG9MYXllciwgb3B0aW9ucy5jb29yZHNUb0xhdExuZywgb3B0aW9ucyk7XG4gIEwuc3RhbXAoZmVhdExheWVyKTtcbiAgZmVhdExheWVyLmZlYXR1cmUgPSBMLkdlb0pTT04uYXNGZWF0dXJlKGZlYXRPYmopO1xuICBmZWF0TGF5ZXIuZGVmYXVsdE9wdGlvbnMgPSBmZWF0TGF5ZXIub3B0aW9ucztcbiAgc2VsZi5fZ2VvanNvbkxheWVyLnJlc2V0U3R5bGUoZmVhdExheWVyKTtcbiAgaWYgKG9wdGlvbnMub25FYWNoRmVhdHVyZSkge1xuICAgIG9wdGlvbnMub25FYWNoRmVhdHVyZShmZWF0T2JqLCBmZWF0TGF5ZXIpO1xuICB9XG5cbiAgYWRkTGF5ZXIoc2VsZiwgZmVhdExheWVyKTtcbn1cblxuXG4vKipcbiAqIFNob3VsZCBvbmx5IGJlIHVzZWQgYnkgQkJveExheWVyIG9iamVjdHMuXG4gKiBDb25zaWRlciB0aGlzIGEgcHJpdmF0ZSBtZXRob2QuXG4gKlxuICogQHBhcmFtIHNlbGZcbiAqIEBwYXJhbSBmZWF0TGF5ZXJcbiAqL1xuZnVuY3Rpb24gYWRkTGF5ZXIoc2VsZiwgZmVhdExheWVyKSB7XG4gIGlmIChzZWxmLl9mZWF0dXJlU2V0KSB7XG4gICAgc2VsZi5fZmVhdHVyZVNldC5hZGRGZWF0dXJlKGZlYXRMYXllciwgc2VsZi5fZ2VvanNvbkxheWVyKTtcbiAgfVxuICBzZWxmLl9nZW9qc29uTGF5ZXIuYWRkTGF5ZXIoZmVhdExheWVyKTtcblxuICB2YXIgcHJvcHMgPSBmZWF0TGF5ZXIuZmVhdHVyZS5wcm9wZXJ0aWVzO1xuICB2YXIgbGV2ZWwgPSBwcm9wcy5sZXZlbDtcbiAgaWYgKCFzZWxmLl9mZWF0dXJlTGF5ZXJzQnlMZXZlbFtsZXZlbF0pIHtcbiAgICBzZWxmLl9mZWF0dXJlTGF5ZXJzQnlMZXZlbFtsZXZlbF0gPSBbXTtcbiAgfVxuICBzZWxmLl9mZWF0dXJlTGF5ZXJzQnlMZXZlbFtsZXZlbF0ucHVzaChmZWF0TGF5ZXIpO1xuICBzZWxmLl9hbGxGZWF0dXJlTGF5ZXJzW3Byb3BzLmd1aWRdID0gZmVhdExheWVyO1xufVxuXG5cbkJCb3hHZW9KU09OLnByb3RvdHlwZS5wcm9jZXNzRmVhdHVyZUl0aW5lcmFyeSA9IGZ1bmN0aW9uIChmZWF0SXRpbmVyYXJ5KSB7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgdmFyIGFjdGl2ZUxldmVscyA9IHt9O1xuICBzZWxmLl9hY3RpdmVMZXZlbHMgPSBhY3RpdmVMZXZlbHM7XG4gIHNlbGYuX2ZlYXRJdGluZXJhcnlIYXNoID0ge307XG4gIGZvciAodmFyIGk9MCwgbGVuID0gZmVhdEl0aW5lcmFyeS5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICAgIHZhciBvID0gZmVhdEl0aW5lcmFyeVtpXTtcbiAgICBhY3RpdmVMZXZlbHNbby5sZXZlbF0gPSB0cnVlO1xuICAgIHNlbGYuX2ZlYXRJdGluZXJhcnlIYXNoW28uZ3VpZF0gPSBvO1xuICAgIHZhciBndWlkID0gby5ndWlkIHx8IG8uaWQ7XG4gICAgaWYgKCFzZWxmLl9mZWF0dXJlc1tndWlkXSkge1xuICAgICAgLy8gYWRkaW5nIGZlYXR1cmUgdG8gZmVhdHVyZXMgaGFzaCAoYWxsIGZlYXR1cmVzIGV2ZXIpXG4gICAgICBzZWxmLl9mZWF0dXJlc1tndWlkXSA9IG87XG4gICAgICAvLyBnZXR0aW5nIHRoZSBmZWF0dXJlcyAoaW5jbHVkaW5nIGJhc2ljLCBzaW1wbGlmaWVkIGdlb21ldHJ5KVxuICAgICAgc2VsZi5fZ2V0RmVhdHVyZXMobyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGlmIHdlIGFscmVhZHkgaGF2ZSBhIGxheWVyIGFuZCBpdCBpcyBub3Qgb24gdGhlIG1hcCBidXQgc2hvdWxkIGJlIHRoZXJlLCBhZGQgaXQgdG8gdGhlIGdlb2pzb24gbGF5ZXJcbiAgICAgIHZhciBsID0gc2VsZi5fYWxsRmVhdHVyZUxheWVyc1tndWlkXTtcbiAgICAgIGlmIChsKSB7XG4gICAgICAgIGFkZExheWVyKHNlbGYsIGwpO1xuICAgICAgfVxuXG4gICAgfVxuICB9XG4gIHNlbGYuX3JlbW92ZUluYWN0aXZlTGF5ZXJzKHNlbGYpO1xuICByZW1vdmVJbmFjdGl2ZUxhYmVscyhzZWxmKTtcbn07XG5cblxuLyoqXG4gKiBUaGlzIGlzIGNhbGxlZCBieSB0aGUgb25TZWxlY3QgZXZlbnQgZm9yIHRoZSBmZWF0dXJlbGFiZWxzLlxuICogQHBhcmFtIGZlYXR1cmVMYXllclxuICovXG5CQm94R2VvSlNPTi5wcm90b3R5cGUuZmV0Y2hGZWF0dXJlRGV0YWlscyA9IGZ1bmN0aW9uKGZlYXR1cmVMYXllcikge1xuICB2YXIgcHJvcGVydGllcyA9IGZlYXR1cmVMYXllci5mZWF0dXJlLnByb3BlcnRpZXM7XG4gIHZhciBkZXRhaWxzVXJsID0gcHJvcGVydGllcy5kZXRhaWxzVXJsO1xuICBpZiAoIWRldGFpbHNVcmwpIHtcbiAgICBjb25zb2xlLmVycm9yKCdXZSBuZWVkIGEgZGV0YWlsc1VybCB0byBmZXRjaEZlYXR1cmVEZXRhaWxzJyk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIHRoZW1lID0gJHJvb3RTY29wZS4kc3RhdGVQYXJhbXMudGhlbWUgfHwgcHJvcGVydGllcy5kZWZhdWx0VGhlbWUgfHwgJ3Byb2plY3QnO1xuICB2YXIgdGhlbWVOYW1lID0gJHJvb3RTY29wZS50aGVtZU5hbWVIYXNoW3RoZW1lXTtcbiAgaWYgKHR5cGVvZiBwcm9wZXJ0aWVzLmxldmVsID09PSAndW5kZWZpbmVkJyB8fCBwcm9wZXJ0aWVzLmxldmVsID09PSBudWxsKSB7XG4gICAgY29uc29sZS5lcnJvcignd2UgbmVlZCBhIGxldmVsLicpO1xuICB9XG5cbiAgdmFyIGZpbHRlcnMgPSAnbnVsbCc7XG4gIGlmICgkcm9vdFNjb3BlLiRzdGF0ZVBhcmFtcy5maWx0ZXJzKSB7XG4gICAgZmlsdGVycyA9ICRyb290U2NvcGUuJHN0YXRlUGFyYW1zLmZpbHRlcnM7XG4gIH1cblxuICBkZXRhaWxzVXJsID0gZGV0YWlsc1VybC5yZXBsYWNlKCc6dGhlbWUnLCB0aGVtZSlcbiAgICAucmVwbGFjZSgnOmd1aWRzJywgcHJvcGVydGllcy5ndWlkKVxuICAgIC5yZXBsYWNlKCc6bGV2ZWwnLCBwcm9wZXJ0aWVzLmxldmVsKVxuICAgIC5yZXBsYWNlKCc6ZmlsdGVycycsIGZpbHRlcnMpO1xuXG4gICRodHRwLmdldChkZXRhaWxzVXJsLCB7Y2FjaGU6IHRydWV9KS5zdWNjZXNzKGZ1bmN0aW9uIChkZXRhaWxzKSB7XG5cbiAgICBmZWF0dXJlTGF5ZXIuZmVhdHVyZS5wcm9wZXJ0aWVzLnNhbGVzZm9yY2UgPSB7fTtcbiAgICBmZWF0dXJlTGF5ZXIuZmVhdHVyZS5wcm9wZXJ0aWVzLnNhbGVzZm9yY2VbdGhlbWVOYW1lXSA9IGRldGFpbHM7XG4gICAgJHJvb3RTY29wZS4kYnJvYWRjYXN0KCdkZXRhaWxzJywgZmVhdHVyZUxheWVyKTtcblxuICB9KS5lcnJvcihmdW5jdGlvbihlcnIpe1xuICAgIGNvbnNvbGUuZXJyb3IoSlNPTi5zdHJpbmdpZnkoZXJyKSk7XG4gIH0pO1xuXG59O1xuXG5cbkJCb3hHZW9KU09OLnByb3RvdHlwZS5zaG93RmVhdHVyZVByb3BlcnRpZXMgPSBmdW5jdGlvbihmZWF0dXJlTGF5ZXIpIHtcbiAgJHJvb3RTY29wZS4kYnJvYWRjYXN0KCdkZXRhaWxzJywgZmVhdHVyZUxheWVyKTtcbn07XG5cblxuQkJveEdlb0pTT04ucHJvdG90eXBlLmNsb3NlRGV0YWlscyA9IGZ1bmN0aW9uICgpIHtcbiAgJHJvb3RTY29wZS5jbG9zZVBhcmFtKCdkZXRhaWxzLXBhbmVsJyk7XG59O1xuXG5cbmZ1bmN0aW9uIHJlbW92ZUluYWN0aXZlTGFiZWxzKHNlbGYpIHtcbiAgdmFyIGFsbEZlYXR1cmVMYXllcnMgPSBzZWxmLl9hbGxGZWF0dXJlTGF5ZXJzO1xuICB2YXIgZmVhdHVyZUl0aW5lcmFyeSA9IHNlbGYuX2ZlYXRJdGluZXJhcnlIYXNoO1xuICBmb3IgKHZhciBrZXkgaW4gYWxsRmVhdHVyZUxheWVycykge1xuICAgIGlmICghZmVhdHVyZUl0aW5lcmFyeVtrZXldKSB7XG4gICAgICB2YXIgZmVhdHVyZUxheWVyID0gYWxsRmVhdHVyZUxheWVyc1trZXldO1xuICAgICAgaWYgKCBmZWF0dXJlTGF5ZXIuZ2VvanNvbkxheWVyICYmIGZlYXR1cmVMYXllci5sYWJlbCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIlJFTU9WSU5HOiBcIiArIGZlYXR1cmVMYXllci5mZWF0dXJlLnByb3BlcnRpZXMubmFtZSk7XG4gICAgICAgIHdpbmRvdy5tYXAucmVtb3ZlTGF5ZXIoZmVhdHVyZUxheWVyLmxhYmVsKTsgLy8gTkggRklYTUVcbiAgICAgICAgZmVhdHVyZUxheWVyLmxhYmVsID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgaWYgKCBmZWF0dXJlTGF5ZXIuZ2VvanNvbkxheWVyICYmIGZlYXR1cmVMYXllci5nZW9qc29uTGF5ZXIubGFiZWwpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJSRU1PVklORzogXCIgKyBmZWF0dXJlTGF5ZXIuZmVhdHVyZS5wcm9wZXJ0aWVzLm5hbWUpO1xuICAgICAgICB3aW5kb3cubWFwLnJlbW92ZUxheWVyKGZlYXR1cmVMYXllci5nZW9qc29uTGF5ZXIubGFiZWwpOyAvLyBOSCBGSVhNRVxuICAgICAgICBmZWF0dXJlTGF5ZXIuZ2VvanNvbkxheWVyLmxhYmVsID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBGb3IgYWxsIG9mIHRoZSBhY3RpdmUgbGF5ZXJzIHRoYXQgd2UgaGF2ZSwgcmVtb3ZlIGxheWVycyB0aGF0IGFyZVxuICogbm90IHBhcnQgb2YgdGhlIGN1cnJlbnQgc2V0IG9mIGFjdGl2ZSBsZXZlbHMuXG4gKlxuICogQHByaXZhdGVcbiAqL1xuQkJveEdlb0pTT04ucHJvdG90eXBlLl9yZW1vdmVJbmFjdGl2ZUxheWVycyA9IGZ1bmN0aW9uKHNlbGYpIHtcbiAgdmFyIGFjdGl2ZUxldmVscyA9IHRoaXMuX2FjdGl2ZUxldmVscztcbiAgdmFyIGZlYXR1cmVMYXllcnNCeUxldmVsID0gdGhpcy5fZmVhdHVyZUxheWVyc0J5TGV2ZWw7XG4gIGZvciAodmFyIGxldmVsIGluIGZlYXR1cmVMYXllcnNCeUxldmVsKSB7XG4gICAgLy8gaWYgdGhlIGxldmVsIGlzIG5vdCBhbiBhY3RpdmUgbGV2ZWwsIHJlbW92ZSBmcm9tIG1hcFxuICAgIGlmICghYWN0aXZlTGV2ZWxzW2xldmVsXSkge1xuICAgICAgdmFyIGxheWVycyA9IGZlYXR1cmVMYXllcnNCeUxldmVsW2xldmVsXTtcbiAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBsYXllcnMubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgICAgICAgdmFyIGxheWVyID0gbGF5ZXJzW2ldO1xuICAgICAgICBzZWxmLl9nZW9qc29uTGF5ZXIucmVtb3ZlTGF5ZXIobGF5ZXIpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKCdSZW1vdmVkIExheWVyOiAnICsgbGF5ZXIuZmVhdHVyZS5wcm9wZXJ0aWVzLm5hbWUpO1xuICAgICAgfVxuICAgICAgZGVsZXRlIGZlYXR1cmVMYXllcnNCeUxldmVsW2xldmVsXTtcbiAgICB9XG4gIH1cbn07XG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgTmljaG9sYXMgSGFsbGFoYW4gPG5oYWxsYWhhbkBzcGF0aWFsZGV2LmNvbT5cbiAqICAgICAgIG9uIDYvMy8xNC5cbiAqL1xuXG52YXIgUmVzb3VyY2UgPSByZXF1aXJlKCcuL3Jlc291cmNlJyk7XG52YXIgJHJvb3RTY29wZSA9IHJlcXVpcmUoJy4vdmVjdG9yJykuJHJvb3RTY29wZTtcblxubW9kdWxlLmV4cG9ydHMgPSBHZW9KU09OO1xuXG4vKipcbiAqIFRoaXMgaXMgYSBiYXNpYyBHZW9KU09OIFZlY3RvclByb3ZpZGVyLlxuICogQHBhcmFtIGNvbmZpZ1xuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIEdlb0pTT04oY29uZmlnKSB7XG4gIFJlc291cmNlLmNhbGwodGhpcywgY29uZmlnKTtcbiAgdGhpcy5fZ2VvanNvbiA9IG51bGw7XG59XG5cbkdlb0pTT04ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShSZXNvdXJjZS5wcm90b3R5cGUpO1xuR2VvSlNPTi5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBHZW9KU09OO1xuXG5HZW9KU09OLnByb3RvdHlwZS5mZXRjaCA9IGZ1bmN0aW9uIChjYikge1xuICBpZiAodGhpcy5fZ2VvanNvbiAmJiB0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicpIHtcbiAgICBjYih0aGlzLl9nZW9qc29uKTtcbiAgICByZXR1cm47XG4gIH1cbiAgdmFyIHNlbGYgPSB0aGlzO1xuICBSZXNvdXJjZS5wcm90b3R5cGUuZmV0Y2guY2FsbCh0aGlzLCBmdW5jdGlvbihkYXRhKSB7XG4gICAgc2VsZi5fZ2VvanNvbiA9IGRhdGE7XG4gICAgaWYgKHR5cGVvZiBzZWxmLl9jb25maWcucHJvcGVydGllcyA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGlmICggZGF0YS50eXBlID09PSAnRmVhdHVyZUNvbGxlY3Rpb24nKSB7XG4gICAgICAgIHZhciBmZWF0cyA9IGRhdGEuZmVhdHVyZXM7XG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBmZWF0cy5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICAgICAgICAgIHZhciBmZWF0ID0gZmVhdHNbaV07XG4gICAgICAgICAgaWYgKCFmZWF0LnByb3BlcnRpZXMpIGZlYXQucHJvcGVydGllcyA9IHt9O1xuICAgICAgICAgIGFuZ3VsYXIuZXh0ZW5kKGZlYXQucHJvcGVydGllcywgc2VsZi5fY29uZmlnLnByb3BlcnRpZXMpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgeyAvLyBhIGZlYXR1cmUgb3IgYSBnZW9tZXRyeSB0eXBlXG4gICAgICAgIGlmICghZGF0YS5wcm9wZXJ0aWVzKSBkYXRhLnByb3BlcnRpZXMgPSB7fTtcbiAgICAgICAgYW5ndWxhci5leHRlbmQoZGF0YS5wcm9wZXJ0aWVzLCBzZWxmLl9jb25maWcucHJvcGVydGllcyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJykgY2Ioc2VsZi5fZ2VvanNvbik7XG4gIH0pO1xufTtcblxuR2VvSlNPTi5wcm90b3R5cGUuZ2V0TGF5ZXIgPSBmdW5jdGlvbigpIHtcbiAgaWYgKHRoaXMuX2dlb2pzb25MYXllcikgcmV0dXJuIHRoaXMuX2dlb2pzb25MYXllcjtcbiAgdmFyIGxheWVyID0gIFJlc291cmNlLnByb3RvdHlwZS5nZXRMYXllci5jYWxsKHRoaXMpO1xuICB0aGlzLmZldGNoKGZ1bmN0aW9uKGdlb2pzb24pe1xuICAgIGxheWVyLmFkZERhdGEoZ2VvanNvbik7XG4gICAgbGF5ZXIuZWFjaExheWVyKGZ1bmN0aW9uIChsKSB7XG4gICAgICBsLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJHJvb3RTY29wZS4kYnJvYWRjYXN0KCdkZXRhaWxzJywgbCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG4gIHJldHVybiBsYXllcjtcbn07XG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgTmljaG9sYXMgSGFsbGFoYW4gPG5oYWxsYWhhbkBzcGF0aWFsZGV2LmNvbT5cbiAqICAgICAgIG9uIDYvMy8xNC5cbiAqL1xuXG52YXIgUmVzb3VyY2UgPSByZXF1aXJlKCcuL3Jlc291cmNlJyk7XG52YXIgJHJvb3RTY29wZSA9IHJlcXVpcmUoJy4vdmVjdG9yJykuJHJvb3RTY29wZTtcbnZhciB0b0dlb0pTT04gPSByZXF1aXJlKCcuL3ZlY3RvcicpLnRvR2VvSlNPTjtcbnZhciAkID0gcmVxdWlyZSgnLi92ZWN0b3InKS4kO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEtNTDtcblxuLyoqXG4gKiBBIEtNTCBSZXNvdXJjZSBmZXRjaGVzIEtNTCBhbmQgcGFyc2VzIGl0IHdpdGggdG9nZW9qc29uLmpzXG4gKiBOb3RlIHRoYXQgdG9nZW9qc29uLmpzIGhhcyBidWdzIGFuZCBkb2VzIG5vdCBhY2N1cmF0ZWx5IHBhcnNlXG4gKiBzb21lIG9mIHRoZSBLTUwgc291cmNlcyB3ZSBoYXZlIHRlc3RlZCB3aXRoLiBUaGlzIGxpYnJhcnkgaGFzXG4gKiBiZWVuIG1vZGlmaWVkIHdpdGggbXkgaG90Zml4ZXMuXG4gKlxuICogQHBhcmFtIGNvbmZpZ1xuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIEtNTChjb25maWcpIHtcbiAgUmVzb3VyY2UuY2FsbCh0aGlzLCBjb25maWcpO1xuICB0aGlzLl9nZW9qc29uID0gbnVsbDtcbn1cblxuS01MLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoUmVzb3VyY2UucHJvdG90eXBlKTtcbktNTC5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBLTUw7XG5cbktNTC5wcm90b3R5cGUuZmV0Y2ggPSBmdW5jdGlvbiAoY2IpIHtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICBSZXNvdXJjZS5wcm90b3R5cGUuZmV0Y2guY2FsbCh0aGlzLCBmdW5jdGlvbihkYXRhKSB7XG4gICAgdmFyIHhtbCA9ICQucGFyc2VYTUwoZGF0YSk7XG4gICAgc2VsZi5fZ2VvanNvbiA9IHRvR2VvSlNPTi5rbWwoeG1sKTtcbiAgICBpZiAodHlwZW9mIHNlbGYuX2NvbmZpZy5wcm9wZXJ0aWVzID09PSAnb2JqZWN0Jykge1xuICAgICAgaWYgKHR5cGVvZiBzZWxmLl9nZW9qc29uLnByb3BlcnRpZXMgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHNlbGYuX2dlb2pzb24ucHJvcGVydGllcyA9IHt9O1xuICAgICAgfVxuICAgICAgYW5ndWxhci5leHRlbmQoc2VsZi5fZ2VvanNvbi5wcm9wZXJ0aWVzLCBzZWxmLl9jb25maWcucHJvcGVydGllcyk7XG4gICAgICBzZWxmLl9nZW9qc29uLnByb3BlcnRpZXMuc3JjVHlwZSA9ICdrbWwnO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKSBjYihzZWxmLl9nZW9qc29uLCBzZWxmKTtcbiAgfSk7XG59O1xuXG5LTUwucHJvdG90eXBlLmdldExheWVyID0gZnVuY3Rpb24gKCkge1xuICBpZiAodGhpcy5fZ2VvanNvbkxheWVyKSByZXR1cm4gdGhpcy5fZ2VvanNvbkxheWVyO1xuICB2YXIgbGF5ZXIgPSAgUmVzb3VyY2UucHJvdG90eXBlLmdldExheWVyLmNhbGwodGhpcyk7XG4gIHRoaXMuZmV0Y2goZnVuY3Rpb24oZ2VvanNvbil7XG4gICAgbGF5ZXIuYWRkRGF0YShnZW9qc29uKTtcbiAgICBsYXllci5lYWNoTGF5ZXIoZnVuY3Rpb24gKGwpIHtcbiAgICAgIGwub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkcm9vdFNjb3BlLiRicm9hZGNhc3QoJ2RldGFpbHMnLCBsKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcbiAgcmV0dXJuIGxheWVyO1xufTtcblxuS01MLnByb3RvdHlwZS5lYWNoTGF5ZXIgPSBmdW5jdGlvbiAoY2IpIHtcbiAgdGhpcy5fZWFjaExheWVyQ2FsbGJhY2sgPSBjYjtcbiAgdGhpcy5mZXRjaChmdW5jdGlvbihnZW9qc29uLCBzZWxmKXtcbiAgICB2YXIgbGF5ZXJzID0gc2VsZi5fZ2VvanNvbkxheWVyLl9sYXllcnM7XG4gICAgZm9yICh2YXIga2V5IGluIGxheWVycykge1xuICAgICAgdmFyIGxheWVyID0gbGF5ZXJzW2tleV07XG4gICAgICBjYihsYXllcik7XG4gICAgfVxuICB9KTtcbn07XG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgTmljaG9sYXMgSGFsbGFoYW4gPG5oYWxsYWhhbkBzcGF0aWFsZGV2LmNvbT5cbiAqICAgICAgIG9uIDYvMy8xNC5cbiAqL1xuXG52YXIgcmVzb3VyY2VzID0gcmVxdWlyZSgnLi92ZWN0b3InKS5yZXNvdXJjZXM7XG52YXIgJGh0dHAgPSByZXF1aXJlKCcuL3ZlY3RvcicpLiRodHRwO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlc291cmNlO1xuXG4vKipcbiAqIEFsbCBWZWN0b3JQcm92aWRlciByZXNvdXJjZXMgYXJlIGNoaWxkcmVuIG9mIHRoaXMgY2xhc3MuXG4gKiBAcGFyYW0gY29uZmlnXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gUmVzb3VyY2UoY29uZmlnKSB7XG4gIHJlc291cmNlcy5wdXNoKHRoaXMpO1xuICB0aGlzLl9jb25maWcgPSBjb25maWc7XG4gIHRoaXMuX3VybCA9IG51bGw7XG4gIGlmICh0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0Jykge1xuICAgIHRoaXMuX3VybCA9IGNvbmZpZy51cmw7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5fdXJsID0gY29uZmlnO1xuICB9XG5cbiAgdGhpcy5fZWFjaExheWVyQ2FsbGJhY2sgPSBudWxsO1xuICB0aGlzLl9nZW9qc29uTGF5ZXIgPSBudWxsO1xufVxuXG5cbi8qKlxuICogRmV0Y2hlcyBkYXRhIGZyb20gdGhlIGdpdmVuIHVybCBvZiBhIHJlc291cmNlLlxuICogU3ViY2xhc3NlcyB0aGVuIGhhbmRsZSB0aGUgY2FsbGJhY2sgYWNjb3JkaW5nbHkuXG4gKlxuICogTmVlZHMgdG8gYWxzbyB0cnkgdG8gZ2V0IGEgcmVzb3VyY2UgdmlhIHRoZSBDaHViYnNcbiAqIHByb3h5LlxuICpcbiAqIEBwYXJhbSBjYlxuICovXG5SZXNvdXJjZS5wcm90b3R5cGUuZmV0Y2ggPSBmdW5jdGlvbihjYikge1xuICB2YXIgcHJveHlQYXRoID0gY29uZmlnLnByb3h5UGF0aCh0aGlzLl91cmwpO1xuICAkaHR0cC5nZXQodGhpcy5fdXJsLCB7Y2FjaGU6IHRydWV9KS5zdWNjZXNzKGZ1bmN0aW9uIChkYXRhLCBzdGF0dXMpIHtcbiAgICBjYihkYXRhKTtcbiAgfSkuZXJyb3IoZnVuY3Rpb24oKSB7XG4gICAgLy8gdHJ5aW5nIHByb3h5XG4gICAgJGh0dHAuZ2V0KHByb3h5UGF0aCwge2NhY2hlOiB0cnVlfSkuc3VjY2VzcyhmdW5jdGlvbiAoZGF0YSwgc3RhdHVzKSB7XG4gICAgICBjYihkYXRhKTtcbiAgICB9KS5lcnJvcihmdW5jdGlvbigpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJVbmFibGUgdG8gZmV0Y2ggZnJvbTogXCIgKyBwcm94eVBhdGgpO1xuICAgIH0pO1xuICB9KTtcblxufTtcblxuXG4vKipcbiAqIFJldHVybnMgdGhlIExlYWZsZXQgR2VvSlNPTiBMYXllciBhc3NvY2lhdGVkIHdpdGggdGhlXG4gKiBSZXNvdXJjZSBvciBjcmVhdGVzIGEgbmV3IG9uZS5cbiAqXG4gKiBAcmV0dXJucyB7bnVsbHwqfVxuICovXG5SZXNvdXJjZS5wcm90b3R5cGUuZ2V0TGF5ZXIgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0eXBlb2YgdGhpcy5fZ2VvanNvbkxheWVyICE9PSAndW5kZWZpbmVkJyAmJiB0aGlzLl9nZW9qc29uTGF5ZXIgIT09IG51bGwpIHtcbiAgICByZXR1cm4gdGhpcy5fZ2VvanNvbkxheWVyO1xuICB9XG5cbiAgdGhpcy5fZ2VvanNvbkxheWVyID0gTC5nZW9Kc29uKHRoaXMuX2dlb2pzb24gfHwgbnVsbCwge1xuICAgIHN0eWxlOiBmdW5jdGlvbihmZWF0dXJlKSB7XG4gICAgICBpZiAodHlwZW9mIGZlYXR1cmUucHJvcGVydGllcy5zdHlsZUZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBmZWF0dXJlLnByb3BlcnRpZXMuc3R5bGVGbihmZWF0dXJlLnByb3BlcnRpZXMpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIEwubWFwYm94LnNpbXBsZXN0eWxlLnN0eWxlKGZlYXR1cmUpO1xuICAgIH0sXG4gICAgcG9pbnRUb0xheWVyOiBmdW5jdGlvbihmZWF0dXJlLCBsYXRsb24pIHtcbiAgICAgIGlmICghZmVhdHVyZS5wcm9wZXJ0aWVzKSBmZWF0dXJlLnByb3BlcnRpZXMgPSB7fTtcbiAgICAgIGlmIChmZWF0dXJlLnByb3BlcnRpZXMuc2NhbGUpIHtcbiAgICAgICAgcmV0dXJuIEwuY2lyY2xlTWFya2VyKGxhdGxvbiwge1xuICAgICAgICAgIGZpbGxDb2xvcjogZmVhdHVyZS5wcm9wZXJ0aWVzLmNvbG9yIHx8ICcjRkYwMDAwJyxcbiAgICAgICAgICByYWRpdXM6IDIwICogZmVhdHVyZS5wcm9wZXJ0aWVzLnNjYWxlXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIEwubWFwYm94Lm1hcmtlci5zdHlsZShmZWF0dXJlLCBsYXRsb24pO1xuICAgIH1cbiAgfSkuZWFjaExheWVyKHRoaXMuX2VhY2hMYXllckNhbGxiYWNrKTtcblxuXG4gIHJldHVybiB0aGlzLl9nZW9qc29uTGF5ZXI7XG59O1xuXG5SZXNvdXJjZS5wcm90b3R5cGUuZWFjaExheWVyID0gZnVuY3Rpb24gKGNiKSB7XG4gIHRoaXMuX2VhY2hMYXllckNhbGxiYWNrID0gY2I7XG4gIHRoaXMuX2dlb2pzb25MYXllci5lYWNoTGF5ZXIoY2IpO1xufTtcbiIsIi8qKlxuICogQ3JlYXRlZCBieSBOaWNob2xhcyBIYWxsYWhhbiA8bmhhbGxhaGFuQHNwYXRpYWxkZXYuY29tPlxuICogICAgICAgb24gMy8xOS8xNC5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdHZW9Bbmd1bGFyJykuZmFjdG9yeSgnVmVjdG9yUHJvdmlkZXInLCBmdW5jdGlvbiAoJHJvb3RTY29wZSwgJGxvY2F0aW9uLCAkaHR0cCwgTGF5ZXJDb25maWcpIHtcblxuICB2YXIgdmVjdG9yID0gcmVxdWlyZSgnLi92ZWN0b3InKTtcbiAgdmVjdG9yLnNldEluamVjdG9ycygkcm9vdFNjb3BlLCAkbG9jYXRpb24sICRodHRwLCBMYXllckNvbmZpZyk7XG5cblxuICAvKipcbiAgICogbWFrZSB0aGUgZGVmYXVsdCBCQm94VVJMIGFibGUgdG8gYmUgb3ZlcnJpZGRlbiBpZiBzcGVjaWZpZWQgYnkgdGhlIExheWVyQ29uZmlnIE9iamVjdC5cbiAgICogQHBhcmFtIGNvbmZpZ1xuICAgKiBAY29uc3RydWN0b3JcbiAgICovXG4gIHZlY3Rvci5iYm94VXJsID0gTGF5ZXJDb25maWcuYmJveC5iYm94dXJsO1xuXG4gIHZhciBSZXNvdXJjZSA9IHJlcXVpcmUoJy4vUmVzb3VyY2UnKTtcbiAgdmFyIEdlb0pTT04gPSByZXF1aXJlKCcuL0dlb0pTT04nKTtcbiAgdmFyIEJCb3hHZW9KU09OID0gcmVxdWlyZSgnLi9CQm94R2VvSlNPTicpO1xuICB2YXIgS01MID0gcmVxdWlyZSgnLi9LTUwnKTtcbiAgdmFyIENTViA9IHJlcXVpcmUoJy4vY3N2Jyk7XG4gIHZhciBQQkYgPSByZXF1aXJlKCcuL3BiZicpO1xuXG5cbiAgLyoqXG4gICAqIFRoaXMgaXMgdXNlZCBieSB0aGUgZmFjdG9yeSB0byBkeW5hbWljYWxseSBzdGF0ZSB0aGUgdHlwZSAoY2xhc3MpXG4gICAqIHRoYXQgaXQgd2FudHMgdG8gaW5zdGFudGlhdGUuXG4gICAqXG4gICAqIEB0eXBlIHt7Z2VvanNvbjogR2VvSlNPTiwgYmJveGdlb2pzb246IEJCb3hHZW9KU09OLCBrbWw6IEtNTH19XG4gICAqL1xuICB2YXIgdHlwZXMgPSB7XG4gICAgZ2VvanNvbjogR2VvSlNPTixcbiAgICBiYm94Z2VvanNvbjogQkJveEdlb0pTT04sXG4gICAga21sOiBLTUwsXG4gICAgY3N2OiBDU1YsXG4gICAgcGJmOiBQQkZcbiAgfTtcblxuXG5cbiAgLyoqXG4gICAqIEZldGNoZXMgdGhlIGZlYXR1cmUgaXRpbmVyYXJ5IGJhc2VkIG9uIHRoZSBjdXJyZW50IGJib3guXG4gICAqXG4gICAqIFRoZSBmZWF0dXJlIGl0aW5lcmFyeSBpcyBhIHNldCBvZiBmZWF0dXJlcyB3aXRoIHNvbWUgcHJvcGVydGllc1xuICAgKiBzdWNoIGFzIGd1aWQgYW5kIG5hbWUuIFRoZSBnZW9tZXRyeSBmb3IgZWFjaCBvZiB0aGVzZSBmZWF0dXJlc1xuICAgKiBoYXMgbm90IHlldCBiZWVuIHJlcXVlc3RlZC4gVGhpcyBpcyBkb25lIGJ5IF9nZXRGZWF0dXJlcy5cbiAgICovXG4gIGZ1bmN0aW9uIGZldGNoRmVhdHVyZUl0aW5lcmFyeSgpIHtcbiAgICB2YXIgdGhpc1VybCA9IHZlY3Rvci5iYm94VXJsLnJlcGxhY2UoJzpiYm94JywgdmVjdG9yLmJib3gpO1xuICAgIHZhciBwcm94eVBhdGggPSBjb25maWcucHJveHlQYXRoKHRoaXNVcmwpO1xuICAgICRodHRwLmdldCh0aGlzVXJsLCB7Y2FjaGU6IHRydWV9KS5zdWNjZXNzKGZ1bmN0aW9uIChmZWF0SXRpbmVyYXJ5LCBzdGF0dXMpIHtcbiAgICAgIHByb2Nlc3NGZWF0dXJlSXRpbmVyYXJ5KGZlYXRJdGluZXJhcnkpO1xuICAgIH0pLmVycm9yKGZ1bmN0aW9uKCkge1xuICAgICAgJGh0dHAuZ2V0KHByb3h5UGF0aCwge2NhY2hlOiB0cnVlfSkuc3VjY2VzcyhmdW5jdGlvbiAoZmVhdEl0aW5lcmFyeSwgc3RhdHVzKSB7XG4gICAgICAgIHByb2Nlc3NGZWF0dXJlSXRpbmVyYXJ5KGZlYXRJdGluZXJhcnkpO1xuICAgICAgfSkuZXJyb3IoZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJVbmFibGUgdG8gZmV0Y2hGZWF0dXJlSXRpbmVyYXJ5OiBcIiArIHRoaXNVcmwpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzRmVhdHVyZUl0aW5lcmFyeShmZWF0SXRpbmVyYXJ5KSB7XG4gICAgY29uc29sZS5sb2coXCJGRUFUVVJFIElUSU5FUkFSWTpcIik7XG4gICAgZm9yICh2YXIgaiA9IDAsIGxlbiA9IGZlYXRJdGluZXJhcnkubGVuZ3RoOyBqIDwgbGVuOyBqKyspIHtcbiAgICAgIHZhciBmZWF0ID0gZmVhdEl0aW5lcmFyeVtqXTtcbiAgICAgIGlmICggZmVhdC5pc2NlbnRlciApIHtcbiAgICAgICAgdmVjdG9yLmNlbnRlckxldmVsID0gZmVhdC5sZXZlbCB8fCAwO1xuICAgICAgICAkcm9vdFNjb3BlLiRicm9hZGNhc3QoJ2NlbnRlci1mZWF0dXJlJywgZmVhdCk7XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKFsnZmVhdEl0aW5lcmFyeScsZmVhdEl0aW5lcmFyeV0pO1xuXG4gICAgLy8gaWYgdGhlcmUgYXJlIG5vIGZlYXR1cmVzIGZvciB0aGUgY3VycmVudCBib3VuZGluZyBib3hcbiAgICAvL2lmICghZmVhdEl0aW5lcmFyeSB8fCBmZWF0SXRpbmVyYXJ5Lmxlbmd0aCA9PT0gMCkge1xuICAgIC8vICByZXR1cm47XG4gICAgLy99XG5cbiAgICAvKipcbiAgICAgKiBDZW50ZXIgZmVhdHVyZSBsb2dpYyBmb3IgYnJlYWRjcnVtYnMuXG4gICAgICovXG4gICAgLy9mb3IgKHZhciBpPTAsIGxlbj1mZWF0SXRpbmVyYXJ5Lmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gICAgLy8gIHZhciBmID0gZmVhdEl0aW5lcmFyeVtpXTtcbiAgICAvLyAgaWYgKGYuaXNjZW50ZXIgPT0gdHJ1ZSkge1xuICAgIC8vICAgICRyb290U2NvcGUuJGJyb2FkY2FzdCgnY2VudGVyLWZlYXR1cmUnLCBmKTtcbiAgICAvLyAgfVxuICAgIC8vfVxuXG4gICAgLyoqXG4gICAgICogQkJveEdlb0pTT04gbG9naWNcbiAgICAgKi9cbiAgICAvL2Zvcih2YXIgciA9IDAsIGxlbiA9IHZlY3Rvci5iYm94UmVzb3VyY2VzLmxlbmd0aDsgciA8IGxlbjsgKytyKSB7XG4gICAgLy8gIHZlY3Rvci5iYm94UmVzb3VyY2VzW3JdLnByb2Nlc3NGZWF0dXJlSXRpbmVyYXJ5KGZlYXRJdGluZXJhcnkpO1xuICAgIC8vfVxuXG4gIH1cblxuXG4gIHJldHVybiB7XG4gICAgLyoqXG4gICAgICogWW91IGNhbiBleHBsaWNpdGx5IG5hbWUgdGhlIHR5cGUgb2YgcmVzb3VyY2UuIElmIG5vdCxcbiAgICAgKiB3ZSB3aWxsIGZpZ3VyZSBpdCBvdXQgZm9yIHlvdS4uLlxuICAgICAqXG4gICAgICogQHBhcmFtIHJlc291cmNlTmFtZVxuICAgICAqIEBwYXJhbSB0eXBlXG4gICAgICovXG4gICAgY3JlYXRlUmVzb3VyY2U6IGZ1bmN0aW9uIChyZXNvdXJjZU5hbWUsIHR5cGUpIHtcbiAgICAgIHZhciBjb25maWcgPSBMYXllckNvbmZpZy5maW5kKHJlc291cmNlTmFtZSk7XG4gICAgICBpZiAoY29uZmlnID09PSBudWxsKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1ZlY3RvclByb3ZpZGVyOiBJbnZhbGlkIFJlc291cmNlIENvbmZpZ3VyYXRpb24gTmFtZS4gQ2hlY2sgTGF5ZXJDb25maWcgRmlsZS4uLicpO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlIHx8IGNvbmZpZy50eXBlKSB7XG4gICAgICAgIC8vIGlmIHRoZSByZXNvdXJjZSBpcyBqdXN0IGEgc3RyaW5nLCB0aGVuIGl0IHNob3VsZCBiZSBhIHVybFxuICAgICAgICByZXR1cm4gbmV3IHR5cGVzWyh0eXBlIHx8IGNvbmZpZy50eXBlKS50b0xvd2VyQ2FzZSgpXShjb25maWcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGNvbmZpZy5zbGljZShjb25maWcubGVuZ3RoIC0gMykudG9Mb3dlckNhc2UoKSA9PT0gJ3BiZicpIHtcbiAgICAgICAgICByZXR1cm4gbmV3IFBCRihjb25maWcpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNvbmZpZy5zbGljZShjb25maWcubGVuZ3RoIC0gMykudG9Mb3dlckNhc2UoKSA9PT0gJ2ttbCcpIHtcbiAgICAgICAgICByZXR1cm4gbmV3IEtNTChjb25maWcpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNvbmZpZy5zbGljZShjb25maWcubGVuZ3RoIC0gMykudG9Mb3dlckNhc2UoKSA9PT0gJ2NzdicpIHtcbiAgICAgICAgICByZXR1cm4gbmV3IENTVihjb25maWcpO1xuICAgICAgICB9XG4gICAgICAgIC8vIE5IIFRPRE8gQ2hlY2sgYSBiaXQgbW9yZSBpbnRvIGlmIHRoaXMgcmVzb3VyY2UgaXMgdmFsaWQgR2VvSlNPTlxuICAgICAgICByZXR1cm4gbmV3IEdlb0pTT04oY29uZmlnKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogV2hlbiB0aGUgYm91bmRpbmcgYm94IG9mIHRoZSBtYXAgY2hhbmdlcywgVmVjdG9yUHJvdmlkZXIgbmVlZHNcbiAgICAgKiB0byBiZSBub3RpZmllZCBvZiB0aGUgY3VycmVudCBib3VuZGluZyBib3ggc28gaXQgY2FuIGZldGNoIHRoZVxuICAgICAqIGxhdGVzdCB2ZWN0b3IgZGF0YSBmb3IgdGhlIGJib3ggb2YgdGhlIG1hcCB2aWV3cG9ydC5cbiAgICAgKlxuICAgICAqIFRoZSBiYm94IG11c3QgYmUgV0dTODQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gYmJveFN0ciBcInNvdXRoLHdlc3Qsbm9ydGgsZWFzdFwiID09PSBcIm1pblgsbWluWSxtYXhYLG1heFlcIlxuICAgICAqL1xuICAgIHVwZGF0ZUJCb3g6IGZ1bmN0aW9uKGJib3hTdHIpIHtcbiAgICAgIHZlY3Rvci5iYm94ID0gYmJveFN0cjtcblxuICAgICAgZmV0Y2hGZWF0dXJlSXRpbmVyYXJ5KCk7XG4gICAgfSxcblxuXG4gICAgLyoqXG4gICAgICogUHJvdmlkZXMgdGhlIGFiaWxpdHkgdG8gb3ZlcnJpZGUgdGhlIGdhZG0gbGV2ZWwgYmVpbmcgc2hvd24gYnkgQkJveEdlb0pTT05cbiAgICAgKiBmZWF0dXJlcyBvbiB0aGUgbWFwLiBZb3UgbWF5IHNwZWNpZnkgLTEgdG8gNS4gTm8gYXJncyBvciBhbnl0aGluZyBlbHNlXG4gICAgICogc3dpdGNoZXMgYmFjayBvbiBzbWFydCBnYWRtIChhdXRvbWF0aWNhbGx5IGNob29zaW5nIHRoZSBsZXZlbCBiYXNlZCBvbiBiYm94KS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBsZXZlbFxuICAgICAqL1xuICAgIHNldEdhZG1MZXZlbDogZnVuY3Rpb24obGV2ZWxTdHIpIHtcbiAgICAgIHZhciBsZXZlbCA9IHBhcnNlSW50KGxldmVsU3RyKTtcbiAgICAgIHZlY3Rvci5iYm94VXJsID0gdmVjdG9yLmJib3hVcmwucmVwbGFjZSgvJmdhZG1fbGV2ZWw9LT9cXGQvLCcnKTtcbiAgICAgIGlmIChsZXZlbCA+PSAtMSAmJiBsZXZlbCA8PSA1KSB7XG4gICAgICAgIHZlY3Rvci5iYm94VXJsICs9ICcmZ2FkbV9sZXZlbD0nICsgbGV2ZWw7XG4gICAgICB9XG4gICAgICBjb25zb2xlLmxvZygnYmJveFVybDogJyArIHZlY3Rvci5iYm94VXJsKTtcbiAgICAgIC8vZmV0Y2hGZWF0dXJlSXRpbmVyYXJ5KCk7XG4gICAgfSxcblxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIGZlYXR1cmUgYmFzZWQgb24gZ3VpZCBhbmQgbGV2ZWwuIFlvdSBtYXkgbWVyZ2UgaW4gYSBzZXQgb2YgcHJvcGVydGllcyBpbnRvIHRoZVxuICAgICAqIGNhbGxlZCBiYWNrIG9iamVjdCBpZiBkZXNpcmVkIChvcHRpb25hbCkuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZ3VpZFxuICAgICAqL1xuICAgIGZldGNoRmVhdHVyZTogZnVuY3Rpb24oZ3VpZCwgbGV2ZWwsIHByb3BzVG9NZXJnZSwgY2IpIHtcbiAgICAgIHZhciB1cmwgPSBMYXllckNvbmZpZy5iYm94LmZlYXR1cmwucmVwbGFjZSgnOmxldmVsJywgbGV2ZWwpLnJlcGxhY2UoJzppZHMnLCBndWlkKTtcbiAgICAgIHZhciBwcm94eVBhdGggPSBjb25maWcucHJveHlQYXRoKHVybCk7XG5cbiAgICAgICRodHRwLmdldCh1cmwsIHtjYWNoZTogdHJ1ZX0pLnN1Y2Nlc3MoZnVuY3Rpb24gKGdlb2pzb24sIHN0YXR1cykge1xuICAgICAgICBtZXJnZShnZW9qc29uKTtcbiAgICAgIH0pLmVycm9yKGZ1bmN0aW9uKGVycikge1xuICAgICAgICAkaHR0cC5nZXQocHJveHlQYXRoKS5zdWNjZXNzKGZ1bmN0aW9uIChnZW9qc29uLCBzdGF0dXMpIHtcbiAgICAgICAgICBtZXJnZShnZW9qc29uKTtcbiAgICAgICAgfSkuZXJyb3IoZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1VuYWJsZSB0byBmZXRjaEZlYXR1cmU6ICcgKyBndWlkKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcblxuICAgICAgZnVuY3Rpb24gbWVyZ2UoZ2VvanNvbikge1xuICAgICAgICAvKipcbiAgICAgICAgICogRGVhbCB3aXRoIGJhZCBzdHVmZi5cbiAgICAgICAgICovXG4gICAgICAgIGlmIChnZW9qc29uLmVycm9yKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignVW5hYmxlIHRvIGZldGNoIGZlYXR1cmU6ICcgKyBnZW9qc29uLmVycm9yKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWdlb2pzb24uZmVhdHVyZXMgfHwgZ2VvanNvbi5mZWF0dXJlcy5sZW5ndGggPCAxKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gd2Ugb25seSBhcmUgYWN0dWFsbHkgYXNraW5nIGZvciAxIGZlYXR1cmVcbiAgICAgICAgdmFyIGZlYXQgPSBnZW9qc29uLmZlYXR1cmVzWzBdO1xuXG4gICAgICAgIC8vIHB1dHRpbmcgZXhpc3RpbmcgcHJvcGVydGllcyBpbnRvIGdlb2pzb24gZmVhdHVyZVxuICAgICAgICBpZiAocHJvcHNUb01lcmdlKSB7XG4gICAgICAgICAgZm9yICh2YXIga2V5IGluIHByb3BzVG9NZXJnZSkge1xuICAgICAgICAgICAgZmVhdC5wcm9wZXJ0aWVzW2tleV0gPSBwcm9wc1RvTWVyZ2Vba2V5XTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjYihmZWF0KTtcbiAgICAgIH1cblxuICAgIH1cblxuXG4gIH07XG5cblxufSk7XG5cbiIsIi8qKlxuICogQ3JlYXRlZCBieSBSeWFuIFdoaXRsZXkgPHJ3aGl0bGV5QHNwYXRpYWxkZXYuY29tPlxuICogICAgICAgb24gNi8zLzE0LlxuICovXG5cbnZhciBSZXNvdXJjZSA9IHJlcXVpcmUoJy4vcmVzb3VyY2UnKTtcbnZhciAkcm9vdFNjb3BlID0gcmVxdWlyZSgnLi92ZWN0b3InKS4kcm9vdFNjb3BlO1xudmFyICQgPSByZXF1aXJlKCcuL3ZlY3RvcicpLiQ7XG5cbm1vZHVsZS5leHBvcnRzID0gQ1NWO1xuXG4vKipcbiAqIEEgQ1NWIFJlc291cmNlIGZldGNoZXMgQ1NWIGFuZCBwYXJzZXMgaXRcbiAqXG4gKiBAcGFyYW0gY29uZmlnXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gQ1NWKGNvbmZpZykge1xuICBSZXNvdXJjZS5jYWxsKHRoaXMsIGNvbmZpZyk7XG4gIHRoaXMuX2dlb2pzb24gPSBudWxsO1xufVxuXG5DU1YucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShSZXNvdXJjZS5wcm90b3R5cGUpO1xuQ1NWLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IENTVjtcblxuQ1NWLnByb3RvdHlwZS5sYXRGaWVsZFN0cmluZ3MgPSBbXCJsYXRcIiwgXCJsYXRpdHVkZVwiLCBcInlcIiwgXCJ5Y2VudGVyXCJdO1xuQ1NWLnByb3RvdHlwZS5sb25nRmllbGRTdHJpbmdzID0gW1wibG9uXCIsIFwibG9uZ1wiLCBcImxvbmdpdHVkZVwiLCBcInhcIiwgXCJ4Y2VudGVyXCIsIFwibG5nXCJdO1xuXG5DU1YucHJvdG90eXBlLmdldExheWVyID0gZnVuY3Rpb24gKCkge1xuICBpZiAodGhpcy5fZ2VvanNvbkxheWVyKSByZXR1cm4gdGhpcy5fZ2VvanNvbkxheWVyO1xuICB2YXIgbGF5ZXIgPSBSZXNvdXJjZS5wcm90b3R5cGUuZ2V0TGF5ZXIuY2FsbCh0aGlzKTtcbiAgdGhpcy5mZXRjaChmdW5jdGlvbiAoZ2VvanNvbikge1xuICAgIGxheWVyLmFkZERhdGEoZ2VvanNvbik7XG4gICAgbGF5ZXIuZWFjaExheWVyKGZ1bmN0aW9uIChsKSB7XG4gICAgICBsLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJHJvb3RTY29wZS4kYnJvYWRjYXN0KCdkZXRhaWxzJywgbCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG4gIHJldHVybiBsYXllcjtcbn07XG5cbkNTVi5wcm90b3R5cGUuZmV0Y2ggPSBmdW5jdGlvbiAoY2IpIHtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICBSZXNvdXJjZS5wcm90b3R5cGUuZmV0Y2guY2FsbCh0aGlzLCBmdW5jdGlvbiAoZGF0YSkge1xuICAgIC8vZGF0YSBzaG91bGQgYmUgdGhlIHJhdyBjc3YuXG5cbiAgICBzZWxmLl9nZW9qc29uID0gc2VsZi5wcm9jZXNzQ3N2RGF0YShkYXRhKTtcblxuICAgIGlmICh0eXBlb2Ygc2VsZi5fY29uZmlnLnByb3BlcnRpZXMgPT09ICdvYmplY3QnKSB7XG4gICAgICBhbmd1bGFyLmV4dGVuZChzZWxmLl9nZW9qc29uLnByb3BlcnRpZXMsIHNlbGYuX2NvbmZpZy5wcm9wZXJ0aWVzKTtcbiAgICAgIHNlbGYuX2dlb2pzb24ucHJvcGVydGllcy5zcmNUeXBlID0gJ2Nzdic7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicpIGNiKHNlbGYuX2dlb2pzb24sIHNlbGYpO1xuICB9KTtcbn07XG5cbkNTVi5wcm90b3R5cGUuaGFuZGxlQ3N2ID0gZnVuY3Rpb24gKGZpbGUsIGxheWVyKSB7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgaWYgKGZpbGUuZGF0YSkge1xuICAgIHZhciBkZWNvZGVkID0gdGhpcy5ieXRlc1RvU3RyaW5nKHNlbGYuQmFzZTY0LmRlY29kZShmaWxlLmRhdGEpKTtcbiAgICBzZWxmLnByb2Nlc3NDc3ZEYXRhKGRlY29kZWQpO1xuICB9IGVsc2Uge1xuICAgIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgIHJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIkZpbmlzaGVkIHJlYWRpbmcgQ1NWIGRhdGFcIik7XG4gICAgICBzZWxmLnByb2Nlc3NDc3ZEYXRhKHJlYWRlci5yZXN1bHQsIGxheWVyKTtcbiAgICB9O1xuICAgIHJlYWRlci5yZWFkQXNUZXh0KGZpbGUpO1xuICB9XG59O1xuXG5DU1YucHJvdG90eXBlLmdldFNlcGFyYXRvciA9IGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgdmFyIHNlcGFyYXRvcnMgPSBbXCIsXCIsIFwiICAgICAgXCIsIFwiO1wiLCBcInxcIl07XG4gIHZhciBtYXhTZXBhcmF0b3JMZW5ndGggPSAwO1xuICB2YXIgbWF4U2VwYXJhdG9yVmFsdWUgPSBcIlwiO1xuICAkLmVhY2goc2VwYXJhdG9ycywgZnVuY3Rpb24gKGlkeCwgc2VwYXJhdG9yKSB7XG4gICAgdmFyIGxlbmd0aCA9IHN0cmluZy5zcGxpdChzZXBhcmF0b3IpLmxlbmd0aDtcbiAgICBpZiAobGVuZ3RoID4gbWF4U2VwYXJhdG9yTGVuZ3RoKSB7XG4gICAgICBtYXhTZXBhcmF0b3JMZW5ndGggPSBsZW5ndGg7XG4gICAgICBtYXhTZXBhcmF0b3JWYWx1ZSA9IHNlcGFyYXRvcjtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gbWF4U2VwYXJhdG9yVmFsdWU7XG59O1xuXG5DU1YucHJvdG90eXBlLmJ5dGVzVG9TdHJpbmcgPSBmdW5jdGlvbiAoYikge1xuICB2YXIgcyA9IFtdO1xuICAkLmVhY2goYiwgZnVuY3Rpb24gKGlkeCwgYykge1xuICAgIHMucHVzaChTdHJpbmcuZnJvbUNoYXJDb2RlKGMpKTtcbiAgfSk7XG4gIHJldHVybiBzLmpvaW4oXCJcIik7XG59O1xuXG5DU1YucHJvdG90eXBlLnByb2Nlc3NDc3ZEYXRhID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgdmFyIG5ld0xpbmVJZHggPSBkYXRhLmluZGV4T2YoXCJcXG5cIik7XG4gIHZhciBmaXJzdExpbmUgPSAkLnRyaW0oZGF0YS5zdWJzdHIoMCwgbmV3TGluZUlkeCkpOyAvL3JlbW92ZSBleHRyYSB3aGl0ZXNwYWNlLCBub3Qgc3VyZSBpZiBJIG5lZWQgdG8gZG8gdGhpcyBzaW5jZSBJIHRocmV3IG91dCBzcGFjZSBkZWxpbWl0ZXJzXG4gIHZhciBzZXBhcmF0b3IgPSB0aGlzLmdldFNlcGFyYXRvcihmaXJzdExpbmUpO1xuICB2YXIgY3N2U3RvcmUgPSAkLmNzdi50b09iamVjdHMoZGF0YSk7XG4gIHZhciBmaWVsZE5hbWVzID0gZmlyc3RMaW5lLnNwbGl0KHNlcGFyYXRvcik7XG5cbiAgdmFyIGxhdEZpZWxkID0gbnVsbDtcbiAgdmFyIGxvbmdGaWVsZCA9IG51bGw7XG5cbiAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gIC8vRmluZCBMYXQvTG5nIGNvbHVtbnNcbiAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGZpZWxkTmFtZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICB2YXIgZmllbGROYW1lID0gZmllbGROYW1lc1tpXTtcbiAgICB2YXIgbWF0Y2hJZDtcbiAgICBtYXRjaElkID0gJC5pbkFycmF5KGZpZWxkTmFtZS50b0xvd2VyQ2FzZSgpLCBzZWxmLmxhdEZpZWxkU3RyaW5ncyk7XG4gICAgaWYgKG1hdGNoSWQgIT09IC0xKSB7XG4gICAgICBsYXRGaWVsZCA9IGZpZWxkTmFtZTtcbiAgICB9XG5cbiAgICBtYXRjaElkID0gJC5pbkFycmF5KGZpZWxkTmFtZS50b0xvd2VyQ2FzZSgpLCBzZWxmLmxvbmdGaWVsZFN0cmluZ3MpO1xuICAgIGlmIChtYXRjaElkICE9PSAtMSkge1xuICAgICAgbG9uZ0ZpZWxkID0gZmllbGROYW1lO1xuICAgIH1cbiAgfVxuXG4gIC8vSWYgTWlzc2luZyBMYXRmaWVsZCBvciBMb25nRmllbGQsIHRoZW4gZXhpdC5cbiAgaWYgKCFsYXRGaWVsZCkge1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAoIWxvbmdGaWVsZCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBvdXRwdXRHZW9KU09OID0ge1xuICAgIFwidHlwZVwiOiBcIkZlYXR1cmVDb2xsZWN0aW9uXCIsXG4gICAgXCJmZWF0dXJlc1wiOiBbXVxuICB9O1xuXG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBjc3ZTdG9yZS5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIHZhciByb3cgPSBjc3ZTdG9yZVtpXTtcbiAgICB2YXIgbGF0aXR1ZGUgPSBwYXJzZUZsb2F0KHJvd1tsYXRGaWVsZF0pO1xuICAgIHZhciBsb25naXR1ZGUgPSBwYXJzZUZsb2F0KHJvd1tsb25nRmllbGRdKTtcblxuICAgIGlmIChpc05hTihsYXRpdHVkZSkgfHwgaXNOYU4obG9uZ2l0dWRlKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vY3JlYXRlIEdlb0pTT04gZnJhZ21lbnRcbiAgICBvdXRwdXRHZW9KU09OLmZlYXR1cmVzLnB1c2goe1xuICAgICAgXCJ0eXBlXCI6IFwiRmVhdHVyZVwiLFxuICAgICAgXCJnZW9tZXRyeVwiOiB7XCJ0eXBlXCI6IFwiUG9pbnRcIiwgXCJjb29yZGluYXRlc1wiOiBbbG9uZ2l0dWRlLCBsYXRpdHVkZV19LFxuICAgICAgXCJwcm9wZXJ0aWVzXCI6IHJvd1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIG91dHB1dEdlb0pTT047XG59O1xuXG5DU1YucHJvdG90eXBlLmVhY2hMYXllciA9IGZ1bmN0aW9uIChjYikge1xuICB0aGlzLl9lYWNoTGF5ZXJDYWxsYmFjayA9IGNiO1xuICB0aGlzLmZldGNoKGZ1bmN0aW9uIChnZW9qc29uLCBzZWxmKSB7XG4gICAgdmFyIGxheWVycyA9IHNlbGYuX2dlb2pzb25MYXllci5fbGF5ZXJzO1xuICAgIGZvciAodmFyIGtleSBpbiBsYXllcnMpIHtcbiAgICAgIHZhciBsYXllciA9IGxheWVyc1trZXldO1xuICAgICAgY2IobGF5ZXIpO1xuICAgIH1cbiAgfSk7XG59O1xuXG4vKipcbiAqXG4gKiAgQmFzZTY0IGVuY29kZSAvIGRlY29kZVxuICogIGh0dHA6Ly93d3cud2VidG9vbGtpdC5pbmZvL1xuICpcbiAqKi9cbkNTVi5wcm90b3R5cGUuQmFzZTY0ID0ge1xuXG4gIC8vIHByaXZhdGUgcHJvcGVydHlcbiAgX2tleVN0cjogXCJBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvPVwiLFxuXG4gIC8vIHB1YmxpYyBtZXRob2QgZm9yIGVuY29kaW5nXG4gIGVuY29kZTogZnVuY3Rpb24gKGlucHV0KSB7XG4gICAgdmFyIG91dHB1dCA9IFwiXCI7XG4gICAgdmFyIGNocjEsIGNocjIsIGNocjMsIGVuYzEsIGVuYzIsIGVuYzMsIGVuYzQ7XG4gICAgdmFyIGkgPSAwO1xuXG4gICAgaW5wdXQgPSBCYXNlNjQuX3V0ZjhfZW5jb2RlKGlucHV0KTtcblxuICAgIHdoaWxlIChpIDwgaW5wdXQubGVuZ3RoKSB7XG5cbiAgICAgIGNocjEgPSBpbnB1dC5jaGFyQ29kZUF0KGkrKyk7XG4gICAgICBjaHIyID0gaW5wdXQuY2hhckNvZGVBdChpKyspO1xuICAgICAgY2hyMyA9IGlucHV0LmNoYXJDb2RlQXQoaSsrKTtcblxuICAgICAgZW5jMSA9IGNocjEgPj4gMjtcbiAgICAgIGVuYzIgPSAoKGNocjEgJiAzKSA8PCA0KSB8IChjaHIyID4+IDQpO1xuICAgICAgZW5jMyA9ICgoY2hyMiAmIDE1KSA8PCAyKSB8IChjaHIzID4+IDYpO1xuICAgICAgZW5jNCA9IGNocjMgJiA2MztcblxuICAgICAgaWYgKGlzTmFOKGNocjIpKSB7XG4gICAgICAgIGVuYzMgPSBlbmM0ID0gNjQ7XG4gICAgICB9IGVsc2UgaWYgKGlzTmFOKGNocjMpKSB7XG4gICAgICAgIGVuYzQgPSA2NDtcbiAgICAgIH1cblxuICAgICAgb3V0cHV0ID0gb3V0cHV0ICtcbiAgICAgICAgdGhpcy5fa2V5U3RyLmNoYXJBdChlbmMxKSArIHRoaXMuX2tleVN0ci5jaGFyQXQoZW5jMikgK1xuICAgICAgICB0aGlzLl9rZXlTdHIuY2hhckF0KGVuYzMpICsgdGhpcy5fa2V5U3RyLmNoYXJBdChlbmM0KTtcblxuICAgIH1cblxuICAgIHJldHVybiBvdXRwdXQ7XG4gIH0sXG5cbiAgLy8gcHVibGljIG1ldGhvZCBmb3IgZGVjb2RpbmdcbiAgZGVjb2RlOiBmdW5jdGlvbiAoaW5wdXQpIHtcbiAgICB2YXIgb3V0cHV0ID0gXCJcIjtcbiAgICB2YXIgY2hyMSwgY2hyMiwgY2hyMztcbiAgICB2YXIgZW5jMSwgZW5jMiwgZW5jMywgZW5jNDtcbiAgICB2YXIgaSA9IDA7XG5cbiAgICBpbnB1dCA9IGlucHV0LnJlcGxhY2UoL1teQS1aYS16MC05XFwrXFwvXFw9XS9nLCBcIlwiKTtcblxuICAgIHdoaWxlIChpIDwgaW5wdXQubGVuZ3RoKSB7XG5cbiAgICAgIGVuYzEgPSB0aGlzLl9rZXlTdHIuaW5kZXhPZihpbnB1dC5jaGFyQXQoaSsrKSk7XG4gICAgICBlbmMyID0gdGhpcy5fa2V5U3RyLmluZGV4T2YoaW5wdXQuY2hhckF0KGkrKykpO1xuICAgICAgZW5jMyA9IHRoaXMuX2tleVN0ci5pbmRleE9mKGlucHV0LmNoYXJBdChpKyspKTtcbiAgICAgIGVuYzQgPSB0aGlzLl9rZXlTdHIuaW5kZXhPZihpbnB1dC5jaGFyQXQoaSsrKSk7XG5cbiAgICAgIGNocjEgPSAoZW5jMSA8PCAyKSB8IChlbmMyID4+IDQpO1xuICAgICAgY2hyMiA9ICgoZW5jMiAmIDE1KSA8PCA0KSB8IChlbmMzID4+IDIpO1xuICAgICAgY2hyMyA9ICgoZW5jMyAmIDMpIDw8IDYpIHwgZW5jNDtcblxuICAgICAgb3V0cHV0ID0gb3V0cHV0ICsgU3RyaW5nLmZyb21DaGFyQ29kZShjaHIxKTtcblxuICAgICAgaWYgKGVuYzMgIT0gNjQpIHtcbiAgICAgICAgb3V0cHV0ID0gb3V0cHV0ICsgU3RyaW5nLmZyb21DaGFyQ29kZShjaHIyKTtcbiAgICAgIH1cbiAgICAgIGlmIChlbmM0ICE9IDY0KSB7XG4gICAgICAgIG91dHB1dCA9IG91dHB1dCArIFN0cmluZy5mcm9tQ2hhckNvZGUoY2hyMyk7XG4gICAgICB9XG5cbiAgICB9XG5cbiAgICBvdXRwdXQgPSB0aGlzLkJhc2U2NC5fdXRmOF9kZWNvZGUob3V0cHV0KTtcblxuICAgIHJldHVybiBvdXRwdXQ7XG5cbiAgfSxcblxuICAvLyBwcml2YXRlIG1ldGhvZCBmb3IgVVRGLTggZW5jb2RpbmdcbiAgX3V0ZjhfZW5jb2RlOiBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gICAgc3RyaW5nID0gc3RyaW5nLnJlcGxhY2UoL1xcclxcbi9nLCBcIlxcblwiKTtcbiAgICB2YXIgdXRmdGV4dCA9IFwiXCI7XG5cbiAgICBmb3IgKHZhciBuID0gMDsgbiA8IHN0cmluZy5sZW5ndGg7IG4rKykge1xuXG4gICAgICB2YXIgYyA9IHN0cmluZy5jaGFyQ29kZUF0KG4pO1xuXG4gICAgICBpZiAoYyA8IDEyOCkge1xuICAgICAgICB1dGZ0ZXh0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYyk7XG4gICAgICB9IGVsc2UgaWYgKChjID4gMTI3KSAmJiAoYyA8IDIwNDgpKSB7XG4gICAgICAgIHV0ZnRleHQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSgoYyA+PiA2KSB8IDE5Mik7XG4gICAgICAgIHV0ZnRleHQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSgoYyAmIDYzKSB8IDEyOCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB1dGZ0ZXh0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoKGMgPj4gMTIpIHwgMjI0KTtcbiAgICAgICAgdXRmdGV4dCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKCgoYyA+PiA2KSAmIDYzKSB8IDEyOCk7XG4gICAgICAgIHV0ZnRleHQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSgoYyAmIDYzKSB8IDEyOCk7XG4gICAgICB9XG5cbiAgICB9XG5cbiAgICByZXR1cm4gdXRmdGV4dDtcbiAgfSxcblxuICAvLyBwcml2YXRlIG1ldGhvZCBmb3IgVVRGLTggZGVjb2RpbmdcbiAgX3V0ZjhfZGVjb2RlOiBmdW5jdGlvbiAodXRmdGV4dCkge1xuICAgIHZhciBzdHJpbmcgPSBcIlwiO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgYyA9IGMxID0gYzIgPSAwO1xuXG4gICAgd2hpbGUgKGkgPCB1dGZ0ZXh0Lmxlbmd0aCkge1xuXG4gICAgICBjID0gdXRmdGV4dC5jaGFyQ29kZUF0KGkpO1xuXG4gICAgICBpZiAoYyA8IDEyOCkge1xuICAgICAgICBzdHJpbmcgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShjKTtcbiAgICAgICAgaSsrO1xuICAgICAgfSBlbHNlIGlmICgoYyA+IDE5MSkgJiYgKGMgPCAyMjQpKSB7XG4gICAgICAgIGMyID0gdXRmdGV4dC5jaGFyQ29kZUF0KGkgKyAxKTtcbiAgICAgICAgc3RyaW5nICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoKChjICYgMzEpIDw8IDYpIHwgKGMyICYgNjMpKTtcbiAgICAgICAgaSArPSAyO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYzIgPSB1dGZ0ZXh0LmNoYXJDb2RlQXQoaSArIDEpO1xuICAgICAgICBjMyA9IHV0ZnRleHQuY2hhckNvZGVBdChpICsgMik7XG4gICAgICAgIHN0cmluZyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKCgoYyAmIDE1KSA8PCAxMikgfCAoKGMyICYgNjMpIDw8IDYpIHwgKGMzICYgNjMpKTtcbiAgICAgICAgaSArPSAzO1xuICAgICAgfVxuXG4gICAgfVxuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG59O1xuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IFJ5YW4gV2hpdGxleSA8cndoaXRsZXlAc3BhdGlhbGRldi5jb20+XG4gKiAgICAgICBvbiAxMi8xNS8xNC5cbiAqL1xuXG52YXIgUmVzb3VyY2UgPSByZXF1aXJlKCcuL3Jlc291cmNlJyk7XG52YXIgJHJvb3RTY29wZSA9IHJlcXVpcmUoJy4vdmVjdG9yJykuJHJvb3RTY29wZTtcbnZhciAkaHR0cCA9IHJlcXVpcmUoJy4vdmVjdG9yJykuJGh0dHA7XG52YXIgdmVjdG9yID0gcmVxdWlyZSgnLi92ZWN0b3InKTtcblxubW9kdWxlLmV4cG9ydHMgPSBQQkY7XG5cbi8qKlxuICogQSBQQkYgUmVzb3VyY2UgaW5zdGFudGlhdGVzIGEgTVZUU291cmNlIChNYXBib3ggVmVjdG9yIFRpbGUpXG4gKlxuICogQHBhcmFtIGNvbmZpZ1xuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIFBCRihvcHRpb25zKSB7XG4gIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gIHRoaXMuX29uVGlsZXNMb2FkZWQgPSBvcHRpb25zLm9uVGlsZXNMb2FkZWQ7IC8vU3RvcmUgdGhlIHJlYWwgZnVuY3Rpb24gaW4gYSBsb2NhbCBwcm9wZXJ0eS5cbiAgdGhpcy5fb25DbGljayA9IG9wdGlvbnMub25DbGljazsgLy9TdG9yZSB0aGUgcmVhbCBmdW5jdGlvbiBpbiBhIGxvY2FsIHByb3BlcnR5LlxuICB0aGlzLl9vblNlbGVjdCA9IG9wdGlvbnMub25TZWxlY3Q7ICAvL1N0b3JlIHRoZSByZWFsIGZ1bmN0aW9uIGluIGEgbG9jYWwgcHJvcGVydHkgc28gd2UgY2FuIG92ZXJsb2FkIGl0IGxhdGVyIHdpdGggYW5ndWxhciBzdHVmZi5cbiAgdGhpcy5fb25GaWx0ZXIgPSBvcHRpb25zLmZpbHRlcjsgLy9TdG9yZSB0aGUgcmVhbCBmdW5jdGlvbiBpbiBhIGxvY2FsIHByb3BlcnR5LlxuXG4gIHZhciBzZWxmID0gdGhpcztcblxuICBvcHRpb25zLm9uVGlsZXNMb2FkZWQgPSBmdW5jdGlvbihNVlRTb3VyY2Upe1xuXG4gICAgaWYoc2VsZi5fb25UaWxlc0xvYWRlZCkgc2VsZi5fb25UaWxlc0xvYWRlZChNVlRTb3VyY2UsICRodHRwLCAkcm9vdFNjb3BlKTtcblxuICB9XG5cbiAgb3B0aW9ucy5vbkNsaWNrID0gZnVuY3Rpb24oZXZ0KXtcblxuICAgIHNlbGYuX29uQ2xpY2soZXZ0LCAkaHR0cCwgJHJvb3RTY29wZSwgc2VsZik7XG5cbiAgfVxuXG4gIG9wdGlvbnMub25TZWxlY3QgPSBmdW5jdGlvbih2dGYpe1xuXG4gICAgc2VsZi5fb25TZWxlY3QodnRmLCBzZWxmKTtcblxuICB9XG5cbiAgb3B0aW9ucy5maWx0ZXIgPSBmdW5jdGlvbih2dGYpe1xuXG4gICAgcmV0dXJuIHNlbGYuX29uRmlsdGVyKHZ0ZiwgJHJvb3RTY29wZSk7XG5cbiAgfVxuXG4gIHRoaXMubGF5ZXIgPSBuZXcgTC5UaWxlTGF5ZXIuTVZUU291cmNlKG9wdGlvbnMpO1xufVxuXG5QQkYucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShSZXNvdXJjZS5wcm90b3R5cGUpO1xuUEJGLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFBCRjtcblxuUEJGLnByb3RvdHlwZS5nZXRMYXllciA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMubGF5ZXI7XG59O1xuXG5QQkYucHJvdG90eXBlLmZldGNoRmVhdHVyZURldGFpbHMgPSBmdW5jdGlvbihndWlkLCBsZXZlbCkge1xuXG4gIHZhciBkZXRhaWxzVXJsID0gY29uZmlnLmNodWJic1BhdGgodGhpcy5vcHRpb25zLmRldGFpbHNVcmwpO1xuICBpZiAoIWRldGFpbHNVcmwpIHtcbiAgICBjb25zb2xlLmVycm9yKCdXZSBuZWVkIGEgZGV0YWlsc1VybCB0byBmZXRjaEZlYXR1cmVEZXRhaWxzJyk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIHRoZW1lID0gJHJvb3RTY29wZS4kc3RhdGVQYXJhbXMudGhlbWUgfHwgJ3Byb2plY3QnO1xuICB2YXIgdGhlbWVOYW1lID0gJHJvb3RTY29wZS50aGVtZU5hbWVIYXNoW3RoZW1lXTtcbiAgaWYgKHR5cGVvZiBsZXZlbCA9PT0gJ3VuZGVmaW5lZCcgfHwgbGV2ZWwgPT09IG51bGwpIHtcbiAgICBjb25zb2xlLmVycm9yKCd3ZSBuZWVkIGEgbGV2ZWwuJyk7XG4gIH1cblxuICB2YXIgZmlsdGVycyA9ICdudWxsJztcbiAgaWYgKCRyb290U2NvcGUuJHN0YXRlUGFyYW1zLmZpbHRlcnMpIHtcbiAgICBmaWx0ZXJzID0gJHJvb3RTY29wZS4kc3RhdGVQYXJhbXMuZmlsdGVycztcbiAgfVxuXG4gIGRldGFpbHNVcmwgPSBkZXRhaWxzVXJsLnJlcGxhY2UoJzp0aGVtZScsIHRoZW1lKVxuICAgIC5yZXBsYWNlKCc6Z3VpZHMnLCBndWlkKVxuICAgIC5yZXBsYWNlKCc6bGV2ZWwnLCBsZXZlbClcbiAgICAucmVwbGFjZSgnOmZpbHRlcnMnLCBmaWx0ZXJzKTtcblxuICAkaHR0cC5nZXQoZGV0YWlsc1VybCwge2NhY2hlOiB0cnVlfSkuc3VjY2VzcyhmdW5jdGlvbiAoZGV0YWlscykge1xuICAgIHZhciBmZWF0dXJlTGF5ZXIgPSB7IGZlYXR1cmU6IHsgcHJvcGVydGllczoge319fTtcbiAgICBmZWF0dXJlTGF5ZXIuZmVhdHVyZS5wcm9wZXJ0aWVzLnNhbGVzZm9yY2UgPSB7fTtcbiAgICBmZWF0dXJlTGF5ZXIuZmVhdHVyZS5wcm9wZXJ0aWVzLnNhbGVzZm9yY2VbdGhlbWVOYW1lXSA9IGRldGFpbHM7XG4gICAgJHJvb3RTY29wZS4kYnJvYWRjYXN0KCdkZXRhaWxzJywgZmVhdHVyZUxheWVyKTtcblxuICB9KS5lcnJvcihmdW5jdGlvbihlcnIpe1xuICAgIGNvbnNvbGUuZXJyb3IoSlNPTi5zdHJpbmdpZnkoZXJyKSk7XG4gIH0pO1xuXG59O1xuXG5cblxuXG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgTmljaG9sYXMgSGFsbGFoYW4gPG5oYWxsYWhhbkBzcGF0aWFsZGV2LmNvbT5cbiAqICAgICAgIG9uIDYvMy8xNC5cbiAqL1xuXG52YXIgcmVzb3VyY2VzID0gcmVxdWlyZSgnLi92ZWN0b3InKS5yZXNvdXJjZXM7XG52YXIgJGh0dHAgPSByZXF1aXJlKCcuL3ZlY3RvcicpLiRodHRwO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlc291cmNlO1xuXG4vKipcbiAqIEFsbCBWZWN0b3JQcm92aWRlciByZXNvdXJjZXMgYXJlIGNoaWxkcmVuIG9mIHRoaXMgY2xhc3MuXG4gKiBAcGFyYW0gY29uZmlnXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gUmVzb3VyY2UoY29uZmlnKSB7XG4gIHJlc291cmNlcy5wdXNoKHRoaXMpO1xuICB0aGlzLl9jb25maWcgPSBjb25maWc7XG4gIHRoaXMuX3VybCA9IG51bGw7XG4gIGlmICh0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0Jykge1xuICAgIHRoaXMuX3VybCA9IGNvbmZpZy51cmw7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5fdXJsID0gY29uZmlnO1xuICB9XG5cbiAgdGhpcy5fZWFjaExheWVyQ2FsbGJhY2sgPSBudWxsO1xuICB0aGlzLl9nZW9qc29uTGF5ZXIgPSBudWxsO1xufVxuXG5cbi8qKlxuICogRmV0Y2hlcyBkYXRhIGZyb20gdGhlIGdpdmVuIHVybCBvZiBhIHJlc291cmNlLlxuICogU3ViY2xhc3NlcyB0aGVuIGhhbmRsZSB0aGUgY2FsbGJhY2sgYWNjb3JkaW5nbHkuXG4gKlxuICogTmVlZHMgdG8gYWxzbyB0cnkgdG8gZ2V0IGEgcmVzb3VyY2UgdmlhIHRoZSBDaHViYnNcbiAqIHByb3h5LlxuICpcbiAqIEBwYXJhbSBjYlxuICovXG5SZXNvdXJjZS5wcm90b3R5cGUuZmV0Y2ggPSBmdW5jdGlvbihjYikge1xuICB2YXIgcHJveHlQYXRoID0gY29uZmlnLnByb3h5UGF0aCh0aGlzLl91cmwpO1xuICAkaHR0cC5nZXQodGhpcy5fdXJsLCB7Y2FjaGU6IHRydWV9KS5zdWNjZXNzKGZ1bmN0aW9uIChkYXRhLCBzdGF0dXMpIHtcbiAgICBjYihkYXRhKTtcbiAgfSkuZXJyb3IoZnVuY3Rpb24oKSB7XG4gICAgLy8gdHJ5aW5nIHByb3h5XG4gICAgJGh0dHAuZ2V0KHByb3h5UGF0aCwge2NhY2hlOiB0cnVlfSkuc3VjY2VzcyhmdW5jdGlvbiAoZGF0YSwgc3RhdHVzKSB7XG4gICAgICBjYihkYXRhKTtcbiAgICB9KS5lcnJvcihmdW5jdGlvbigpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJVbmFibGUgdG8gZmV0Y2ggZnJvbTogXCIgKyBwcm94eVBhdGgpO1xuICAgIH0pO1xuICB9KTtcblxufTtcblxuXG4vKipcbiAqIFJldHVybnMgdGhlIExlYWZsZXQgR2VvSlNPTiBMYXllciBhc3NvY2lhdGVkIHdpdGggdGhlXG4gKiBSZXNvdXJjZSBvciBjcmVhdGVzIGEgbmV3IG9uZS5cbiAqXG4gKiBAcmV0dXJucyB7bnVsbHwqfVxuICovXG5SZXNvdXJjZS5wcm90b3R5cGUuZ2V0TGF5ZXIgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0eXBlb2YgdGhpcy5fZ2VvanNvbkxheWVyICE9PSAndW5kZWZpbmVkJyAmJiB0aGlzLl9nZW9qc29uTGF5ZXIgIT09IG51bGwpIHtcbiAgICByZXR1cm4gdGhpcy5fZ2VvanNvbkxheWVyO1xuICB9XG5cbiAgdGhpcy5fZ2VvanNvbkxheWVyID0gTC5nZW9Kc29uKHRoaXMuX2dlb2pzb24gfHwgbnVsbCwge1xuICAgIHN0eWxlOiBmdW5jdGlvbihmZWF0dXJlKSB7XG4gICAgICBpZiAodHlwZW9mIGZlYXR1cmUucHJvcGVydGllcy5zdHlsZUZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBmZWF0dXJlLnByb3BlcnRpZXMuc3R5bGVGbihmZWF0dXJlLnByb3BlcnRpZXMpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIEwubWFwYm94LnNpbXBsZXN0eWxlLnN0eWxlKGZlYXR1cmUpO1xuICAgIH0sXG4gICAgcG9pbnRUb0xheWVyOiBmdW5jdGlvbihmZWF0dXJlLCBsYXRsb24pIHtcbiAgICAgIGlmICghZmVhdHVyZS5wcm9wZXJ0aWVzKSBmZWF0dXJlLnByb3BlcnRpZXMgPSB7fTtcbiAgICAgIGlmIChmZWF0dXJlLnByb3BlcnRpZXMuc2NhbGUpIHtcbiAgICAgICAgcmV0dXJuIEwuY2lyY2xlTWFya2VyKGxhdGxvbiwge1xuICAgICAgICAgIGZpbGxDb2xvcjogZmVhdHVyZS5wcm9wZXJ0aWVzLmNvbG9yIHx8ICcjRkYwMDAwJyxcbiAgICAgICAgICByYWRpdXM6IDIwICogZmVhdHVyZS5wcm9wZXJ0aWVzLnNjYWxlXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIEwubWFwYm94Lm1hcmtlci5zdHlsZShmZWF0dXJlLCBsYXRsb24pO1xuICAgIH1cbiAgfSkuZWFjaExheWVyKHRoaXMuX2VhY2hMYXllckNhbGxiYWNrKTtcblxuXG4gIHJldHVybiB0aGlzLl9nZW9qc29uTGF5ZXI7XG59O1xuXG5SZXNvdXJjZS5wcm90b3R5cGUuZWFjaExheWVyID0gZnVuY3Rpb24gKGNiKSB7XG4gIHRoaXMuX2VhY2hMYXllckNhbGxiYWNrID0gY2I7XG4gIHRoaXMuX2dlb2pzb25MYXllci5lYWNoTGF5ZXIoY2IpO1xufTtcbiIsIi8qKlxuICogQ3JlYXRlZCBieSBOaWNob2xhcyBIYWxsYWhhbiA8bmhhbGxhaGFuQHNwYXRpYWxkZXYuY29tPlxuICogICAgICAgb24gNi8zLzE0LlxuICovXG5cbnZhciB2ZWN0b3IgPSB7fTtcbm1vZHVsZS5leHBvcnRzID0gdmVjdG9yO1xuXG52ZWN0b3Iuc2V0SW5qZWN0b3JzID0gZnVuY3Rpb24gKCRyb290U2NvcGUsICRsb2NhdGlvbiwgJGh0dHAsIExheWVyQ29uZmlnKSB7XG4gIHZlY3Rvci4kcm9vdFNjb3BlID0gJHJvb3RTY29wZTtcbiAgdmVjdG9yLiRsb2NhdGlvbiA9ICRsb2NhdGlvbjtcbiAgdmVjdG9yLiRodHRwID0gJGh0dHA7XG4gIHZlY3Rvci5MYXllckNvbmZpZyA9IExheWVyQ29uZmlnO1xufTtcblxudmVjdG9yLmFuZ3VsYXIgPSBhbmd1bGFyO1xudmVjdG9yLkwgPSBMO1xudmVjdG9yLiQgPSAkO1xudmVjdG9yLnRvR2VvSlNPTiA9IHRvR2VvSlNPTjtcblxuXG4vKipcbiAqIFRoaXMgaXMgdXBkYXRlZCBieSB1cGRhdGVCQm94LiBJdCBpcyB0aGVuIHVzZWQgdG8gcXVlcnkgYWxsXG4gKiBWZWN0b3JQcm92aWRlcnMgdGhhdCB1c2UgYSBib3VuZGluZyBib3ggdG8gZ2V0IGFkZGl0aW9uYWxcbiAqIGZlYXR1cmVzLlxuICpcbiAqIEB0eXBlIHtzdHJpbmd9XG4gKi9cbnZhciBiYm94ID0gdmVjdG9yLmJib3ggPSBudWxsO1xuXG4vKipcbiAqIEV2ZXJ5IHJlc291cmNlIHRoYXQgaGFzIGJlZW4gaW5zdGFudGlhdGVkLlxuICogQHR5cGUge0FycmF5fVxuICovXG52YXIgcmVzb3VyY2VzID0gdmVjdG9yLnJlc291cmNlcyA9IFtdO1xuZGVidWcucmVzb3VyY2VzID0gcmVzb3VyY2VzO1xuXG4vKipcbiAqIEV2ZXJ5IHJlc291cmNlIHdpdGggYSBib3VuZGluZyBib3ggZmV0Y2hpbmcgbWVjaGFuaXNtLlxuICogQHR5cGUge0FycmF5fVxuICovXG52YXIgYmJveFJlc291cmNlcyA9IHZlY3Rvci5iYm94UmVzb3VyY2VzID0gW107XG5kZWJ1Zy5iYm94UmVzb3VyY2VzID0gYmJveFJlc291cmNlcztcblxudmFyIGJib3hVcmwgPSB2ZWN0b3IuYmJveFVybCA9ICcnO1xuXG52YXIgY2VudGVyTGV2ZWwgPSB2ZWN0b3IuY2VudGVyTGV2ZWwgPSAwO1xuXG5cblxuIiwiLyohXG4gKiBUaGUgYnVmZmVyIG1vZHVsZSBmcm9tIG5vZGUuanMsIGZvciB0aGUgYnJvd3Nlci5cbiAqXG4gKiBAYXV0aG9yICAgRmVyb3NzIEFib3VraGFkaWplaCA8ZmVyb3NzQGZlcm9zcy5vcmc+IDxodHRwOi8vZmVyb3NzLm9yZz5cbiAqIEBsaWNlbnNlICBNSVRcbiAqL1xuXG52YXIgYmFzZTY0ID0gcmVxdWlyZSgnYmFzZTY0LWpzJylcbnZhciBpZWVlNzU0ID0gcmVxdWlyZSgnaWVlZTc1NCcpXG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJ2lzLWFycmF5JylcblxuZXhwb3J0cy5CdWZmZXIgPSBCdWZmZXJcbmV4cG9ydHMuU2xvd0J1ZmZlciA9IEJ1ZmZlclxuZXhwb3J0cy5JTlNQRUNUX01BWF9CWVRFUyA9IDUwXG5CdWZmZXIucG9vbFNpemUgPSA4MTkyIC8vIG5vdCB1c2VkIGJ5IHRoaXMgaW1wbGVtZW50YXRpb25cblxudmFyIGtNYXhMZW5ndGggPSAweDNmZmZmZmZmXG5cbi8qKlxuICogSWYgYEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUYDpcbiAqICAgPT09IHRydWUgICAgVXNlIFVpbnQ4QXJyYXkgaW1wbGVtZW50YXRpb24gKGZhc3Rlc3QpXG4gKiAgID09PSBmYWxzZSAgIFVzZSBPYmplY3QgaW1wbGVtZW50YXRpb24gKG1vc3QgY29tcGF0aWJsZSwgZXZlbiBJRTYpXG4gKlxuICogQnJvd3NlcnMgdGhhdCBzdXBwb3J0IHR5cGVkIGFycmF5cyBhcmUgSUUgMTArLCBGaXJlZm94IDQrLCBDaHJvbWUgNyssIFNhZmFyaSA1LjErLFxuICogT3BlcmEgMTEuNissIGlPUyA0LjIrLlxuICpcbiAqIE5vdGU6XG4gKlxuICogLSBJbXBsZW1lbnRhdGlvbiBtdXN0IHN1cHBvcnQgYWRkaW5nIG5ldyBwcm9wZXJ0aWVzIHRvIGBVaW50OEFycmF5YCBpbnN0YW5jZXMuXG4gKiAgIEZpcmVmb3ggNC0yOSBsYWNrZWQgc3VwcG9ydCwgZml4ZWQgaW4gRmlyZWZveCAzMCsuXG4gKiAgIFNlZTogaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9Njk1NDM4LlxuICpcbiAqICAtIENocm9tZSA5LTEwIGlzIG1pc3NpbmcgdGhlIGBUeXBlZEFycmF5LnByb3RvdHlwZS5zdWJhcnJheWAgZnVuY3Rpb24uXG4gKlxuICogIC0gSUUxMCBoYXMgYSBicm9rZW4gYFR5cGVkQXJyYXkucHJvdG90eXBlLnN1YmFycmF5YCBmdW5jdGlvbiB3aGljaCByZXR1cm5zIGFycmF5cyBvZlxuICogICAgaW5jb3JyZWN0IGxlbmd0aCBpbiBzb21lIHNpdHVhdGlvbnMuXG4gKlxuICogV2UgZGV0ZWN0IHRoZXNlIGJ1Z2d5IGJyb3dzZXJzIGFuZCBzZXQgYEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUYCB0byBgZmFsc2VgIHNvIHRoZXkgd2lsbFxuICogZ2V0IHRoZSBPYmplY3QgaW1wbGVtZW50YXRpb24sIHdoaWNoIGlzIHNsb3dlciBidXQgd2lsbCB3b3JrIGNvcnJlY3RseS5cbiAqL1xuQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQgPSAoZnVuY3Rpb24gKCkge1xuICB0cnkge1xuICAgIHZhciBidWYgPSBuZXcgQXJyYXlCdWZmZXIoMClcbiAgICB2YXIgYXJyID0gbmV3IFVpbnQ4QXJyYXkoYnVmKVxuICAgIGFyci5mb28gPSBmdW5jdGlvbiAoKSB7IHJldHVybiA0MiB9XG4gICAgcmV0dXJuIDQyID09PSBhcnIuZm9vKCkgJiYgLy8gdHlwZWQgYXJyYXkgaW5zdGFuY2VzIGNhbiBiZSBhdWdtZW50ZWRcbiAgICAgICAgdHlwZW9mIGFyci5zdWJhcnJheSA9PT0gJ2Z1bmN0aW9uJyAmJiAvLyBjaHJvbWUgOS0xMCBsYWNrIGBzdWJhcnJheWBcbiAgICAgICAgbmV3IFVpbnQ4QXJyYXkoMSkuc3ViYXJyYXkoMSwgMSkuYnl0ZUxlbmd0aCA9PT0gMCAvLyBpZTEwIGhhcyBicm9rZW4gYHN1YmFycmF5YFxuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn0pKClcblxuLyoqXG4gKiBDbGFzczogQnVmZmVyXG4gKiA9PT09PT09PT09PT09XG4gKlxuICogVGhlIEJ1ZmZlciBjb25zdHJ1Y3RvciByZXR1cm5zIGluc3RhbmNlcyBvZiBgVWludDhBcnJheWAgdGhhdCBhcmUgYXVnbWVudGVkXG4gKiB3aXRoIGZ1bmN0aW9uIHByb3BlcnRpZXMgZm9yIGFsbCB0aGUgbm9kZSBgQnVmZmVyYCBBUEkgZnVuY3Rpb25zLiBXZSB1c2VcbiAqIGBVaW50OEFycmF5YCBzbyB0aGF0IHNxdWFyZSBicmFja2V0IG5vdGF0aW9uIHdvcmtzIGFzIGV4cGVjdGVkIC0tIGl0IHJldHVybnNcbiAqIGEgc2luZ2xlIG9jdGV0LlxuICpcbiAqIEJ5IGF1Z21lbnRpbmcgdGhlIGluc3RhbmNlcywgd2UgY2FuIGF2b2lkIG1vZGlmeWluZyB0aGUgYFVpbnQ4QXJyYXlgXG4gKiBwcm90b3R5cGUuXG4gKi9cbmZ1bmN0aW9uIEJ1ZmZlciAoc3ViamVjdCwgZW5jb2RpbmcsIG5vWmVybykge1xuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgQnVmZmVyKSlcbiAgICByZXR1cm4gbmV3IEJ1ZmZlcihzdWJqZWN0LCBlbmNvZGluZywgbm9aZXJvKVxuXG4gIHZhciB0eXBlID0gdHlwZW9mIHN1YmplY3RcblxuICAvLyBGaW5kIHRoZSBsZW5ndGhcbiAgdmFyIGxlbmd0aFxuICBpZiAodHlwZSA9PT0gJ251bWJlcicpXG4gICAgbGVuZ3RoID0gc3ViamVjdCA+IDAgPyBzdWJqZWN0ID4+PiAwIDogMFxuICBlbHNlIGlmICh0eXBlID09PSAnc3RyaW5nJykge1xuICAgIGlmIChlbmNvZGluZyA9PT0gJ2Jhc2U2NCcpXG4gICAgICBzdWJqZWN0ID0gYmFzZTY0Y2xlYW4oc3ViamVjdClcbiAgICBsZW5ndGggPSBCdWZmZXIuYnl0ZUxlbmd0aChzdWJqZWN0LCBlbmNvZGluZylcbiAgfSBlbHNlIGlmICh0eXBlID09PSAnb2JqZWN0JyAmJiBzdWJqZWN0ICE9PSBudWxsKSB7IC8vIGFzc3VtZSBvYmplY3QgaXMgYXJyYXktbGlrZVxuICAgIGlmIChzdWJqZWN0LnR5cGUgPT09ICdCdWZmZXInICYmIGlzQXJyYXkoc3ViamVjdC5kYXRhKSlcbiAgICAgIHN1YmplY3QgPSBzdWJqZWN0LmRhdGFcbiAgICBsZW5ndGggPSArc3ViamVjdC5sZW5ndGggPiAwID8gTWF0aC5mbG9vcigrc3ViamVjdC5sZW5ndGgpIDogMFxuICB9IGVsc2VcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdtdXN0IHN0YXJ0IHdpdGggbnVtYmVyLCBidWZmZXIsIGFycmF5IG9yIHN0cmluZycpXG5cbiAgaWYgKHRoaXMubGVuZ3RoID4ga01heExlbmd0aClcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignQXR0ZW1wdCB0byBhbGxvY2F0ZSBCdWZmZXIgbGFyZ2VyIHRoYW4gbWF4aW11bSAnICtcbiAgICAgICdzaXplOiAweCcgKyBrTWF4TGVuZ3RoLnRvU3RyaW5nKDE2KSArICcgYnl0ZXMnKVxuXG4gIHZhciBidWZcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgLy8gUHJlZmVycmVkOiBSZXR1cm4gYW4gYXVnbWVudGVkIGBVaW50OEFycmF5YCBpbnN0YW5jZSBmb3IgYmVzdCBwZXJmb3JtYW5jZVxuICAgIGJ1ZiA9IEJ1ZmZlci5fYXVnbWVudChuZXcgVWludDhBcnJheShsZW5ndGgpKVxuICB9IGVsc2Uge1xuICAgIC8vIEZhbGxiYWNrOiBSZXR1cm4gVEhJUyBpbnN0YW5jZSBvZiBCdWZmZXIgKGNyZWF0ZWQgYnkgYG5ld2ApXG4gICAgYnVmID0gdGhpc1xuICAgIGJ1Zi5sZW5ndGggPSBsZW5ndGhcbiAgICBidWYuX2lzQnVmZmVyID0gdHJ1ZVxuICB9XG5cbiAgdmFyIGlcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUICYmIHR5cGVvZiBzdWJqZWN0LmJ5dGVMZW5ndGggPT09ICdudW1iZXInKSB7XG4gICAgLy8gU3BlZWQgb3B0aW1pemF0aW9uIC0tIHVzZSBzZXQgaWYgd2UncmUgY29weWluZyBmcm9tIGEgdHlwZWQgYXJyYXlcbiAgICBidWYuX3NldChzdWJqZWN0KVxuICB9IGVsc2UgaWYgKGlzQXJyYXlpc2goc3ViamVjdCkpIHtcbiAgICAvLyBUcmVhdCBhcnJheS1pc2ggb2JqZWN0cyBhcyBhIGJ5dGUgYXJyYXlcbiAgICBpZiAoQnVmZmVyLmlzQnVmZmVyKHN1YmplY3QpKSB7XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspXG4gICAgICAgIGJ1ZltpXSA9IHN1YmplY3QucmVhZFVJbnQ4KGkpXG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKylcbiAgICAgICAgYnVmW2ldID0gKChzdWJqZWN0W2ldICUgMjU2KSArIDI1NikgJSAyNTZcbiAgICB9XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICBidWYud3JpdGUoc3ViamVjdCwgMCwgZW5jb2RpbmcpXG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gJ251bWJlcicgJiYgIUJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUICYmICFub1plcm8pIHtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGJ1ZltpXSA9IDBcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYnVmXG59XG5cbkJ1ZmZlci5pc0J1ZmZlciA9IGZ1bmN0aW9uIChiKSB7XG4gIHJldHVybiAhIShiICE9IG51bGwgJiYgYi5faXNCdWZmZXIpXG59XG5cbkJ1ZmZlci5jb21wYXJlID0gZnVuY3Rpb24gKGEsIGIpIHtcbiAgaWYgKCFCdWZmZXIuaXNCdWZmZXIoYSkgfHwgIUJ1ZmZlci5pc0J1ZmZlcihiKSlcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudHMgbXVzdCBiZSBCdWZmZXJzJylcblxuICB2YXIgeCA9IGEubGVuZ3RoXG4gIHZhciB5ID0gYi5sZW5ndGhcbiAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IE1hdGgubWluKHgsIHkpOyBpIDwgbGVuICYmIGFbaV0gPT09IGJbaV07IGkrKykge31cbiAgaWYgKGkgIT09IGxlbikge1xuICAgIHggPSBhW2ldXG4gICAgeSA9IGJbaV1cbiAgfVxuICBpZiAoeCA8IHkpIHJldHVybiAtMVxuICBpZiAoeSA8IHgpIHJldHVybiAxXG4gIHJldHVybiAwXG59XG5cbkJ1ZmZlci5pc0VuY29kaW5nID0gZnVuY3Rpb24gKGVuY29kaW5nKSB7XG4gIHN3aXRjaCAoU3RyaW5nKGVuY29kaW5nKS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgY2FzZSAnaGV4JzpcbiAgICBjYXNlICd1dGY4JzpcbiAgICBjYXNlICd1dGYtOCc6XG4gICAgY2FzZSAnYXNjaWknOlxuICAgIGNhc2UgJ2JpbmFyeSc6XG4gICAgY2FzZSAnYmFzZTY0JzpcbiAgICBjYXNlICdyYXcnOlxuICAgIGNhc2UgJ3VjczInOlxuICAgIGNhc2UgJ3Vjcy0yJzpcbiAgICBjYXNlICd1dGYxNmxlJzpcbiAgICBjYXNlICd1dGYtMTZsZSc6XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG5CdWZmZXIuY29uY2F0ID0gZnVuY3Rpb24gKGxpc3QsIHRvdGFsTGVuZ3RoKSB7XG4gIGlmICghaXNBcnJheShsaXN0KSkgdGhyb3cgbmV3IFR5cGVFcnJvcignVXNhZ2U6IEJ1ZmZlci5jb25jYXQobGlzdFssIGxlbmd0aF0pJylcblxuICBpZiAobGlzdC5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gbmV3IEJ1ZmZlcigwKVxuICB9IGVsc2UgaWYgKGxpc3QubGVuZ3RoID09PSAxKSB7XG4gICAgcmV0dXJuIGxpc3RbMF1cbiAgfVxuXG4gIHZhciBpXG4gIGlmICh0b3RhbExlbmd0aCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdG90YWxMZW5ndGggPSAwXG4gICAgZm9yIChpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRvdGFsTGVuZ3RoICs9IGxpc3RbaV0ubGVuZ3RoXG4gICAgfVxuICB9XG5cbiAgdmFyIGJ1ZiA9IG5ldyBCdWZmZXIodG90YWxMZW5ndGgpXG4gIHZhciBwb3MgPSAwXG4gIGZvciAoaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldXG4gICAgaXRlbS5jb3B5KGJ1ZiwgcG9zKVxuICAgIHBvcyArPSBpdGVtLmxlbmd0aFxuICB9XG4gIHJldHVybiBidWZcbn1cblxuQnVmZmVyLmJ5dGVMZW5ndGggPSBmdW5jdGlvbiAoc3RyLCBlbmNvZGluZykge1xuICB2YXIgcmV0XG4gIHN0ciA9IHN0ciArICcnXG4gIHN3aXRjaCAoZW5jb2RpbmcgfHwgJ3V0ZjgnKSB7XG4gICAgY2FzZSAnYXNjaWknOlxuICAgIGNhc2UgJ2JpbmFyeSc6XG4gICAgY2FzZSAncmF3JzpcbiAgICAgIHJldCA9IHN0ci5sZW5ndGhcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAndWNzMic6XG4gICAgY2FzZSAndWNzLTInOlxuICAgIGNhc2UgJ3V0ZjE2bGUnOlxuICAgIGNhc2UgJ3V0Zi0xNmxlJzpcbiAgICAgIHJldCA9IHN0ci5sZW5ndGggKiAyXG4gICAgICBicmVha1xuICAgIGNhc2UgJ2hleCc6XG4gICAgICByZXQgPSBzdHIubGVuZ3RoID4+PiAxXG4gICAgICBicmVha1xuICAgIGNhc2UgJ3V0ZjgnOlxuICAgIGNhc2UgJ3V0Zi04JzpcbiAgICAgIHJldCA9IHV0ZjhUb0J5dGVzKHN0cikubGVuZ3RoXG4gICAgICBicmVha1xuICAgIGNhc2UgJ2Jhc2U2NCc6XG4gICAgICByZXQgPSBiYXNlNjRUb0J5dGVzKHN0cikubGVuZ3RoXG4gICAgICBicmVha1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXQgPSBzdHIubGVuZ3RoXG4gIH1cbiAgcmV0dXJuIHJldFxufVxuXG4vLyBwcmUtc2V0IGZvciB2YWx1ZXMgdGhhdCBtYXkgZXhpc3QgaW4gdGhlIGZ1dHVyZVxuQnVmZmVyLnByb3RvdHlwZS5sZW5ndGggPSB1bmRlZmluZWRcbkJ1ZmZlci5wcm90b3R5cGUucGFyZW50ID0gdW5kZWZpbmVkXG5cbi8vIHRvU3RyaW5nKGVuY29kaW5nLCBzdGFydD0wLCBlbmQ9YnVmZmVyLmxlbmd0aClcbkJ1ZmZlci5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoZW5jb2RpbmcsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGxvd2VyZWRDYXNlID0gZmFsc2VcblxuICBzdGFydCA9IHN0YXJ0ID4+PiAwXG4gIGVuZCA9IGVuZCA9PT0gdW5kZWZpbmVkIHx8IGVuZCA9PT0gSW5maW5pdHkgPyB0aGlzLmxlbmd0aCA6IGVuZCA+Pj4gMFxuXG4gIGlmICghZW5jb2RpbmcpIGVuY29kaW5nID0gJ3V0ZjgnXG4gIGlmIChzdGFydCA8IDApIHN0YXJ0ID0gMFxuICBpZiAoZW5kID4gdGhpcy5sZW5ndGgpIGVuZCA9IHRoaXMubGVuZ3RoXG4gIGlmIChlbmQgPD0gc3RhcnQpIHJldHVybiAnJ1xuXG4gIHdoaWxlICh0cnVlKSB7XG4gICAgc3dpdGNoIChlbmNvZGluZykge1xuICAgICAgY2FzZSAnaGV4JzpcbiAgICAgICAgcmV0dXJuIGhleFNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGNhc2UgJ3V0ZjgnOlxuICAgICAgY2FzZSAndXRmLTgnOlxuICAgICAgICByZXR1cm4gdXRmOFNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGNhc2UgJ2FzY2lpJzpcbiAgICAgICAgcmV0dXJuIGFzY2lpU2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgY2FzZSAnYmluYXJ5JzpcbiAgICAgICAgcmV0dXJuIGJpbmFyeVNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGNhc2UgJ2Jhc2U2NCc6XG4gICAgICAgIHJldHVybiBiYXNlNjRTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBjYXNlICd1Y3MyJzpcbiAgICAgIGNhc2UgJ3Vjcy0yJzpcbiAgICAgIGNhc2UgJ3V0ZjE2bGUnOlxuICAgICAgY2FzZSAndXRmLTE2bGUnOlxuICAgICAgICByZXR1cm4gdXRmMTZsZVNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGlmIChsb3dlcmVkQ2FzZSlcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdVbmtub3duIGVuY29kaW5nOiAnICsgZW5jb2RpbmcpXG4gICAgICAgIGVuY29kaW5nID0gKGVuY29kaW5nICsgJycpLnRvTG93ZXJDYXNlKClcbiAgICAgICAgbG93ZXJlZENhc2UgPSB0cnVlXG4gICAgfVxuICB9XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuZXF1YWxzID0gZnVuY3Rpb24gKGIpIHtcbiAgaWYoIUJ1ZmZlci5pc0J1ZmZlcihiKSkgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnQgbXVzdCBiZSBhIEJ1ZmZlcicpXG4gIHJldHVybiBCdWZmZXIuY29tcGFyZSh0aGlzLCBiKSA9PT0gMFxufVxuXG5CdWZmZXIucHJvdG90eXBlLmluc3BlY3QgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBzdHIgPSAnJ1xuICB2YXIgbWF4ID0gZXhwb3J0cy5JTlNQRUNUX01BWF9CWVRFU1xuICBpZiAodGhpcy5sZW5ndGggPiAwKSB7XG4gICAgc3RyID0gdGhpcy50b1N0cmluZygnaGV4JywgMCwgbWF4KS5tYXRjaCgvLnsyfS9nKS5qb2luKCcgJylcbiAgICBpZiAodGhpcy5sZW5ndGggPiBtYXgpXG4gICAgICBzdHIgKz0gJyAuLi4gJ1xuICB9XG4gIHJldHVybiAnPEJ1ZmZlciAnICsgc3RyICsgJz4nXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuY29tcGFyZSA9IGZ1bmN0aW9uIChiKSB7XG4gIGlmICghQnVmZmVyLmlzQnVmZmVyKGIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudCBtdXN0IGJlIGEgQnVmZmVyJylcbiAgcmV0dXJuIEJ1ZmZlci5jb21wYXJlKHRoaXMsIGIpXG59XG5cbi8vIGBnZXRgIHdpbGwgYmUgcmVtb3ZlZCBpbiBOb2RlIDAuMTMrXG5CdWZmZXIucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIChvZmZzZXQpIHtcbiAgY29uc29sZS5sb2coJy5nZXQoKSBpcyBkZXByZWNhdGVkLiBBY2Nlc3MgdXNpbmcgYXJyYXkgaW5kZXhlcyBpbnN0ZWFkLicpXG4gIHJldHVybiB0aGlzLnJlYWRVSW50OChvZmZzZXQpXG59XG5cbi8vIGBzZXRgIHdpbGwgYmUgcmVtb3ZlZCBpbiBOb2RlIDAuMTMrXG5CdWZmZXIucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uICh2LCBvZmZzZXQpIHtcbiAgY29uc29sZS5sb2coJy5zZXQoKSBpcyBkZXByZWNhdGVkLiBBY2Nlc3MgdXNpbmcgYXJyYXkgaW5kZXhlcyBpbnN0ZWFkLicpXG4gIHJldHVybiB0aGlzLndyaXRlVUludDgodiwgb2Zmc2V0KVxufVxuXG5mdW5jdGlvbiBoZXhXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIG9mZnNldCA9IE51bWJlcihvZmZzZXQpIHx8IDBcbiAgdmFyIHJlbWFpbmluZyA9IGJ1Zi5sZW5ndGggLSBvZmZzZXRcbiAgaWYgKCFsZW5ndGgpIHtcbiAgICBsZW5ndGggPSByZW1haW5pbmdcbiAgfSBlbHNlIHtcbiAgICBsZW5ndGggPSBOdW1iZXIobGVuZ3RoKVxuICAgIGlmIChsZW5ndGggPiByZW1haW5pbmcpIHtcbiAgICAgIGxlbmd0aCA9IHJlbWFpbmluZ1xuICAgIH1cbiAgfVxuXG4gIC8vIG11c3QgYmUgYW4gZXZlbiBudW1iZXIgb2YgZGlnaXRzXG4gIHZhciBzdHJMZW4gPSBzdHJpbmcubGVuZ3RoXG4gIGlmIChzdHJMZW4gJSAyICE9PSAwKSB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgaGV4IHN0cmluZycpXG5cbiAgaWYgKGxlbmd0aCA+IHN0ckxlbiAvIDIpIHtcbiAgICBsZW5ndGggPSBzdHJMZW4gLyAyXG4gIH1cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIHZhciBieXRlID0gcGFyc2VJbnQoc3RyaW5nLnN1YnN0cihpICogMiwgMiksIDE2KVxuICAgIGlmIChpc05hTihieXRlKSkgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGhleCBzdHJpbmcnKVxuICAgIGJ1ZltvZmZzZXQgKyBpXSA9IGJ5dGVcbiAgfVxuICByZXR1cm4gaVxufVxuXG5mdW5jdGlvbiB1dGY4V3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICB2YXIgY2hhcnNXcml0dGVuID0gYmxpdEJ1ZmZlcih1dGY4VG9CeXRlcyhzdHJpbmcpLCBidWYsIG9mZnNldCwgbGVuZ3RoKVxuICByZXR1cm4gY2hhcnNXcml0dGVuXG59XG5cbmZ1bmN0aW9uIGFzY2lpV3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICB2YXIgY2hhcnNXcml0dGVuID0gYmxpdEJ1ZmZlcihhc2NpaVRvQnl0ZXMoc3RyaW5nKSwgYnVmLCBvZmZzZXQsIGxlbmd0aClcbiAgcmV0dXJuIGNoYXJzV3JpdHRlblxufVxuXG5mdW5jdGlvbiBiaW5hcnlXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHJldHVybiBhc2NpaVdyaXRlKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcbn1cblxuZnVuY3Rpb24gYmFzZTY0V3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICB2YXIgY2hhcnNXcml0dGVuID0gYmxpdEJ1ZmZlcihiYXNlNjRUb0J5dGVzKHN0cmluZyksIGJ1Ziwgb2Zmc2V0LCBsZW5ndGgpXG4gIHJldHVybiBjaGFyc1dyaXR0ZW5cbn1cblxuZnVuY3Rpb24gdXRmMTZsZVdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgdmFyIGNoYXJzV3JpdHRlbiA9IGJsaXRCdWZmZXIodXRmMTZsZVRvQnl0ZXMoc3RyaW5nKSwgYnVmLCBvZmZzZXQsIGxlbmd0aCwgMilcbiAgcmV0dXJuIGNoYXJzV3JpdHRlblxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlID0gZnVuY3Rpb24gKHN0cmluZywgb2Zmc2V0LCBsZW5ndGgsIGVuY29kaW5nKSB7XG4gIC8vIFN1cHBvcnQgYm90aCAoc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCwgZW5jb2RpbmcpXG4gIC8vIGFuZCB0aGUgbGVnYWN5IChzdHJpbmcsIGVuY29kaW5nLCBvZmZzZXQsIGxlbmd0aClcbiAgaWYgKGlzRmluaXRlKG9mZnNldCkpIHtcbiAgICBpZiAoIWlzRmluaXRlKGxlbmd0aCkpIHtcbiAgICAgIGVuY29kaW5nID0gbGVuZ3RoXG4gICAgICBsZW5ndGggPSB1bmRlZmluZWRcbiAgICB9XG4gIH0gZWxzZSB7ICAvLyBsZWdhY3lcbiAgICB2YXIgc3dhcCA9IGVuY29kaW5nXG4gICAgZW5jb2RpbmcgPSBvZmZzZXRcbiAgICBvZmZzZXQgPSBsZW5ndGhcbiAgICBsZW5ndGggPSBzd2FwXG4gIH1cblxuICBvZmZzZXQgPSBOdW1iZXIob2Zmc2V0KSB8fCAwXG4gIHZhciByZW1haW5pbmcgPSB0aGlzLmxlbmd0aCAtIG9mZnNldFxuICBpZiAoIWxlbmd0aCkge1xuICAgIGxlbmd0aCA9IHJlbWFpbmluZ1xuICB9IGVsc2Uge1xuICAgIGxlbmd0aCA9IE51bWJlcihsZW5ndGgpXG4gICAgaWYgKGxlbmd0aCA+IHJlbWFpbmluZykge1xuICAgICAgbGVuZ3RoID0gcmVtYWluaW5nXG4gICAgfVxuICB9XG4gIGVuY29kaW5nID0gU3RyaW5nKGVuY29kaW5nIHx8ICd1dGY4JykudG9Mb3dlckNhc2UoKVxuXG4gIHZhciByZXRcbiAgc3dpdGNoIChlbmNvZGluZykge1xuICAgIGNhc2UgJ2hleCc6XG4gICAgICByZXQgPSBoZXhXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICd1dGY4JzpcbiAgICBjYXNlICd1dGYtOCc6XG4gICAgICByZXQgPSB1dGY4V3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnYXNjaWknOlxuICAgICAgcmV0ID0gYXNjaWlXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICdiaW5hcnknOlxuICAgICAgcmV0ID0gYmluYXJ5V3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnYmFzZTY0JzpcbiAgICAgIHJldCA9IGJhc2U2NFdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ3VjczInOlxuICAgIGNhc2UgJ3Vjcy0yJzpcbiAgICBjYXNlICd1dGYxNmxlJzpcbiAgICBjYXNlICd1dGYtMTZsZSc6XG4gICAgICByZXQgPSB1dGYxNmxlV3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcbiAgICAgIGJyZWFrXG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1Vua25vd24gZW5jb2Rpbmc6ICcgKyBlbmNvZGluZylcbiAgfVxuICByZXR1cm4gcmV0XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUudG9KU09OID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6ICdCdWZmZXInLFxuICAgIGRhdGE6IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKHRoaXMuX2FyciB8fCB0aGlzLCAwKVxuICB9XG59XG5cbmZ1bmN0aW9uIGJhc2U2NFNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgaWYgKHN0YXJ0ID09PSAwICYmIGVuZCA9PT0gYnVmLmxlbmd0aCkge1xuICAgIHJldHVybiBiYXNlNjQuZnJvbUJ5dGVBcnJheShidWYpXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGJhc2U2NC5mcm9tQnl0ZUFycmF5KGJ1Zi5zbGljZShzdGFydCwgZW5kKSlcbiAgfVxufVxuXG5mdW5jdGlvbiB1dGY4U2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICB2YXIgcmVzID0gJydcbiAgdmFyIHRtcCA9ICcnXG4gIGVuZCA9IE1hdGgubWluKGJ1Zi5sZW5ndGgsIGVuZClcblxuICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7IGkrKykge1xuICAgIGlmIChidWZbaV0gPD0gMHg3Rikge1xuICAgICAgcmVzICs9IGRlY29kZVV0ZjhDaGFyKHRtcCkgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKGJ1ZltpXSlcbiAgICAgIHRtcCA9ICcnXG4gICAgfSBlbHNlIHtcbiAgICAgIHRtcCArPSAnJScgKyBidWZbaV0udG9TdHJpbmcoMTYpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlcyArIGRlY29kZVV0ZjhDaGFyKHRtcClcbn1cblxuZnVuY3Rpb24gYXNjaWlTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIHZhciByZXQgPSAnJ1xuICBlbmQgPSBNYXRoLm1pbihidWYubGVuZ3RoLCBlbmQpXG5cbiAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyBpKyspIHtcbiAgICByZXQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShidWZbaV0pXG4gIH1cbiAgcmV0dXJuIHJldFxufVxuXG5mdW5jdGlvbiBiaW5hcnlTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIHJldHVybiBhc2NpaVNsaWNlKGJ1Ziwgc3RhcnQsIGVuZClcbn1cblxuZnVuY3Rpb24gaGV4U2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICB2YXIgbGVuID0gYnVmLmxlbmd0aFxuXG4gIGlmICghc3RhcnQgfHwgc3RhcnQgPCAwKSBzdGFydCA9IDBcbiAgaWYgKCFlbmQgfHwgZW5kIDwgMCB8fCBlbmQgPiBsZW4pIGVuZCA9IGxlblxuXG4gIHZhciBvdXQgPSAnJ1xuICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7IGkrKykge1xuICAgIG91dCArPSB0b0hleChidWZbaV0pXG4gIH1cbiAgcmV0dXJuIG91dFxufVxuXG5mdW5jdGlvbiB1dGYxNmxlU2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICB2YXIgYnl0ZXMgPSBidWYuc2xpY2Uoc3RhcnQsIGVuZClcbiAgdmFyIHJlcyA9ICcnXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYnl0ZXMubGVuZ3RoOyBpICs9IDIpIHtcbiAgICByZXMgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShieXRlc1tpXSArIGJ5dGVzW2kgKyAxXSAqIDI1NilcbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuc2xpY2UgPSBmdW5jdGlvbiAoc3RhcnQsIGVuZCkge1xuICB2YXIgbGVuID0gdGhpcy5sZW5ndGhcbiAgc3RhcnQgPSB+fnN0YXJ0XG4gIGVuZCA9IGVuZCA9PT0gdW5kZWZpbmVkID8gbGVuIDogfn5lbmRcblxuICBpZiAoc3RhcnQgPCAwKSB7XG4gICAgc3RhcnQgKz0gbGVuO1xuICAgIGlmIChzdGFydCA8IDApXG4gICAgICBzdGFydCA9IDBcbiAgfSBlbHNlIGlmIChzdGFydCA+IGxlbikge1xuICAgIHN0YXJ0ID0gbGVuXG4gIH1cblxuICBpZiAoZW5kIDwgMCkge1xuICAgIGVuZCArPSBsZW5cbiAgICBpZiAoZW5kIDwgMClcbiAgICAgIGVuZCA9IDBcbiAgfSBlbHNlIGlmIChlbmQgPiBsZW4pIHtcbiAgICBlbmQgPSBsZW5cbiAgfVxuXG4gIGlmIChlbmQgPCBzdGFydClcbiAgICBlbmQgPSBzdGFydFxuXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHJldHVybiBCdWZmZXIuX2F1Z21lbnQodGhpcy5zdWJhcnJheShzdGFydCwgZW5kKSlcbiAgfSBlbHNlIHtcbiAgICB2YXIgc2xpY2VMZW4gPSBlbmQgLSBzdGFydFxuICAgIHZhciBuZXdCdWYgPSBuZXcgQnVmZmVyKHNsaWNlTGVuLCB1bmRlZmluZWQsIHRydWUpXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzbGljZUxlbjsgaSsrKSB7XG4gICAgICBuZXdCdWZbaV0gPSB0aGlzW2kgKyBzdGFydF1cbiAgICB9XG4gICAgcmV0dXJuIG5ld0J1ZlxuICB9XG59XG5cbi8qXG4gKiBOZWVkIHRvIG1ha2Ugc3VyZSB0aGF0IGJ1ZmZlciBpc24ndCB0cnlpbmcgdG8gd3JpdGUgb3V0IG9mIGJvdW5kcy5cbiAqL1xuZnVuY3Rpb24gY2hlY2tPZmZzZXQgKG9mZnNldCwgZXh0LCBsZW5ndGgpIHtcbiAgaWYgKChvZmZzZXQgJSAxKSAhPT0gMCB8fCBvZmZzZXQgPCAwKVxuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdvZmZzZXQgaXMgbm90IHVpbnQnKVxuICBpZiAob2Zmc2V0ICsgZXh0ID4gbGVuZ3RoKVxuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdUcnlpbmcgdG8gYWNjZXNzIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDggPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KVxuICAgIGNoZWNrT2Zmc2V0KG9mZnNldCwgMSwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiB0aGlzW29mZnNldF1cbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDE2TEUgPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KVxuICAgIGNoZWNrT2Zmc2V0KG9mZnNldCwgMiwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiB0aGlzW29mZnNldF0gfCAodGhpc1tvZmZzZXQgKyAxXSA8PCA4KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50MTZCRSA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpXG4gICAgY2hlY2tPZmZzZXQob2Zmc2V0LCAyLCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuICh0aGlzW29mZnNldF0gPDwgOCkgfCB0aGlzW29mZnNldCArIDFdXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQzMkxFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydClcbiAgICBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuXG4gIHJldHVybiAoKHRoaXNbb2Zmc2V0XSkgfFxuICAgICAgKHRoaXNbb2Zmc2V0ICsgMV0gPDwgOCkgfFxuICAgICAgKHRoaXNbb2Zmc2V0ICsgMl0gPDwgMTYpKSArXG4gICAgICAodGhpc1tvZmZzZXQgKyAzXSAqIDB4MTAwMDAwMClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDMyQkUgPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KVxuICAgIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG5cbiAgcmV0dXJuICh0aGlzW29mZnNldF0gKiAweDEwMDAwMDApICtcbiAgICAgICgodGhpc1tvZmZzZXQgKyAxXSA8PCAxNikgfFxuICAgICAgKHRoaXNbb2Zmc2V0ICsgMl0gPDwgOCkgfFxuICAgICAgdGhpc1tvZmZzZXQgKyAzXSlcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50OCA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpXG4gICAgY2hlY2tPZmZzZXQob2Zmc2V0LCAxLCB0aGlzLmxlbmd0aClcbiAgaWYgKCEodGhpc1tvZmZzZXRdICYgMHg4MCkpXG4gICAgcmV0dXJuICh0aGlzW29mZnNldF0pXG4gIHJldHVybiAoKDB4ZmYgLSB0aGlzW29mZnNldF0gKyAxKSAqIC0xKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQxNkxFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydClcbiAgICBjaGVja09mZnNldChvZmZzZXQsIDIsIHRoaXMubGVuZ3RoKVxuICB2YXIgdmFsID0gdGhpc1tvZmZzZXRdIHwgKHRoaXNbb2Zmc2V0ICsgMV0gPDwgOClcbiAgcmV0dXJuICh2YWwgJiAweDgwMDApID8gdmFsIHwgMHhGRkZGMDAwMCA6IHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQxNkJFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydClcbiAgICBjaGVja09mZnNldChvZmZzZXQsIDIsIHRoaXMubGVuZ3RoKVxuICB2YXIgdmFsID0gdGhpc1tvZmZzZXQgKyAxXSB8ICh0aGlzW29mZnNldF0gPDwgOClcbiAgcmV0dXJuICh2YWwgJiAweDgwMDApID8gdmFsIHwgMHhGRkZGMDAwMCA6IHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQzMkxFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydClcbiAgICBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuXG4gIHJldHVybiAodGhpc1tvZmZzZXRdKSB8XG4gICAgICAodGhpc1tvZmZzZXQgKyAxXSA8PCA4KSB8XG4gICAgICAodGhpc1tvZmZzZXQgKyAyXSA8PCAxNikgfFxuICAgICAgKHRoaXNbb2Zmc2V0ICsgM10gPDwgMjQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDMyQkUgPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KVxuICAgIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG5cbiAgcmV0dXJuICh0aGlzW29mZnNldF0gPDwgMjQpIHxcbiAgICAgICh0aGlzW29mZnNldCArIDFdIDw8IDE2KSB8XG4gICAgICAodGhpc1tvZmZzZXQgKyAyXSA8PCA4KSB8XG4gICAgICAodGhpc1tvZmZzZXQgKyAzXSlcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkRmxvYXRMRSA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpXG4gICAgY2hlY2tPZmZzZXQob2Zmc2V0LCA0LCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuIGllZWU3NTQucmVhZCh0aGlzLCBvZmZzZXQsIHRydWUsIDIzLCA0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRGbG9hdEJFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydClcbiAgICBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gaWVlZTc1NC5yZWFkKHRoaXMsIG9mZnNldCwgZmFsc2UsIDIzLCA0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWREb3VibGVMRSA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpXG4gICAgY2hlY2tPZmZzZXQob2Zmc2V0LCA4LCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuIGllZWU3NTQucmVhZCh0aGlzLCBvZmZzZXQsIHRydWUsIDUyLCA4KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWREb3VibGVCRSA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpXG4gICAgY2hlY2tPZmZzZXQob2Zmc2V0LCA4LCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuIGllZWU3NTQucmVhZCh0aGlzLCBvZmZzZXQsIGZhbHNlLCA1MiwgOClcbn1cblxuZnVuY3Rpb24gY2hlY2tJbnQgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgZXh0LCBtYXgsIG1pbikge1xuICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcihidWYpKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdidWZmZXIgbXVzdCBiZSBhIEJ1ZmZlciBpbnN0YW5jZScpXG4gIGlmICh2YWx1ZSA+IG1heCB8fCB2YWx1ZSA8IG1pbikgdGhyb3cgbmV3IFR5cGVFcnJvcigndmFsdWUgaXMgb3V0IG9mIGJvdW5kcycpXG4gIGlmIChvZmZzZXQgKyBleHQgPiBidWYubGVuZ3RoKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdpbmRleCBvdXQgb2YgcmFuZ2UnKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDggPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpXG4gICAgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMSwgMHhmZiwgMClcbiAgaWYgKCFCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkgdmFsdWUgPSBNYXRoLmZsb29yKHZhbHVlKVxuICB0aGlzW29mZnNldF0gPSB2YWx1ZVxuICByZXR1cm4gb2Zmc2V0ICsgMVxufVxuXG5mdW5jdGlvbiBvYmplY3RXcml0ZVVJbnQxNiAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4pIHtcbiAgaWYgKHZhbHVlIDwgMCkgdmFsdWUgPSAweGZmZmYgKyB2YWx1ZSArIDFcbiAgZm9yICh2YXIgaSA9IDAsIGogPSBNYXRoLm1pbihidWYubGVuZ3RoIC0gb2Zmc2V0LCAyKTsgaSA8IGo7IGkrKykge1xuICAgIGJ1ZltvZmZzZXQgKyBpXSA9ICh2YWx1ZSAmICgweGZmIDw8ICg4ICogKGxpdHRsZUVuZGlhbiA/IGkgOiAxIC0gaSkpKSkgPj4+XG4gICAgICAobGl0dGxlRW5kaWFuID8gaSA6IDEgLSBpKSAqIDhcbiAgfVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDE2TEUgPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpXG4gICAgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMiwgMHhmZmZmLCAwKVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldF0gPSB2YWx1ZVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDgpXG4gIH0gZWxzZSBvYmplY3RXcml0ZVVJbnQxNih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlKVxuICByZXR1cm4gb2Zmc2V0ICsgMlxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDE2QkUgPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpXG4gICAgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMiwgMHhmZmZmLCAwKVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldF0gPSAodmFsdWUgPj4+IDgpXG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9IHZhbHVlXG4gIH0gZWxzZSBvYmplY3RXcml0ZVVJbnQxNih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSlcbiAgcmV0dXJuIG9mZnNldCArIDJcbn1cblxuZnVuY3Rpb24gb2JqZWN0V3JpdGVVSW50MzIgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuKSB7XG4gIGlmICh2YWx1ZSA8IDApIHZhbHVlID0gMHhmZmZmZmZmZiArIHZhbHVlICsgMVxuICBmb3IgKHZhciBpID0gMCwgaiA9IE1hdGgubWluKGJ1Zi5sZW5ndGggLSBvZmZzZXQsIDQpOyBpIDwgajsgaSsrKSB7XG4gICAgYnVmW29mZnNldCArIGldID0gKHZhbHVlID4+PiAobGl0dGxlRW5kaWFuID8gaSA6IDMgLSBpKSAqIDgpICYgMHhmZlxuICB9XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50MzJMRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydClcbiAgICBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCA0LCAweGZmZmZmZmZmLCAwKVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldCArIDNdID0gKHZhbHVlID4+PiAyNClcbiAgICB0aGlzW29mZnNldCArIDJdID0gKHZhbHVlID4+PiAxNilcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiA4KVxuICAgIHRoaXNbb2Zmc2V0XSA9IHZhbHVlXG4gIH0gZWxzZSBvYmplY3RXcml0ZVVJbnQzMih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlKVxuICByZXR1cm4gb2Zmc2V0ICsgNFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDMyQkUgPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpXG4gICAgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgNCwgMHhmZmZmZmZmZiwgMClcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlID4+PiAyNClcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiAxNilcbiAgICB0aGlzW29mZnNldCArIDJdID0gKHZhbHVlID4+PiA4KVxuICAgIHRoaXNbb2Zmc2V0ICsgM10gPSB2YWx1ZVxuICB9IGVsc2Ugb2JqZWN0V3JpdGVVSW50MzIodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UpXG4gIHJldHVybiBvZmZzZXQgKyA0XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQ4ID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KVxuICAgIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDEsIDB4N2YsIC0weDgwKVxuICBpZiAoIUJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB2YWx1ZSA9IE1hdGguZmxvb3IodmFsdWUpXG4gIGlmICh2YWx1ZSA8IDApIHZhbHVlID0gMHhmZiArIHZhbHVlICsgMVxuICB0aGlzW29mZnNldF0gPSB2YWx1ZVxuICByZXR1cm4gb2Zmc2V0ICsgMVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50MTZMRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydClcbiAgICBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAyLCAweDdmZmYsIC0weDgwMDApXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9IHZhbHVlXG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gOClcbiAgfSBlbHNlIG9iamVjdFdyaXRlVUludDE2KHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUpXG4gIHJldHVybiBvZmZzZXQgKyAyXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQxNkJFID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KVxuICAgIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDIsIDB4N2ZmZiwgLTB4ODAwMClcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlID4+PiA4KVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSB2YWx1ZVxuICB9IGVsc2Ugb2JqZWN0V3JpdGVVSW50MTYodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UpXG4gIHJldHVybiBvZmZzZXQgKyAyXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQzMkxFID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KVxuICAgIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDQsIDB4N2ZmZmZmZmYsIC0weDgwMDAwMDAwKVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldF0gPSB2YWx1ZVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDgpXG4gICAgdGhpc1tvZmZzZXQgKyAyXSA9ICh2YWx1ZSA+Pj4gMTYpXG4gICAgdGhpc1tvZmZzZXQgKyAzXSA9ICh2YWx1ZSA+Pj4gMjQpXG4gIH0gZWxzZSBvYmplY3RXcml0ZVVJbnQzMih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlKVxuICByZXR1cm4gb2Zmc2V0ICsgNFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50MzJCRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydClcbiAgICBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCA0LCAweDdmZmZmZmZmLCAtMHg4MDAwMDAwMClcbiAgaWYgKHZhbHVlIDwgMCkgdmFsdWUgPSAweGZmZmZmZmZmICsgdmFsdWUgKyAxXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSA+Pj4gMjQpXG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gMTYpXG4gICAgdGhpc1tvZmZzZXQgKyAyXSA9ICh2YWx1ZSA+Pj4gOClcbiAgICB0aGlzW29mZnNldCArIDNdID0gdmFsdWVcbiAgfSBlbHNlIG9iamVjdFdyaXRlVUludDMyKHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlKVxuICByZXR1cm4gb2Zmc2V0ICsgNFxufVxuXG5mdW5jdGlvbiBjaGVja0lFRUU3NTQgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgZXh0LCBtYXgsIG1pbikge1xuICBpZiAodmFsdWUgPiBtYXggfHwgdmFsdWUgPCBtaW4pIHRocm93IG5ldyBUeXBlRXJyb3IoJ3ZhbHVlIGlzIG91dCBvZiBib3VuZHMnKVxuICBpZiAob2Zmc2V0ICsgZXh0ID4gYnVmLmxlbmd0aCkgdGhyb3cgbmV3IFR5cGVFcnJvcignaW5kZXggb3V0IG9mIHJhbmdlJylcbn1cblxuZnVuY3Rpb24gd3JpdGVGbG9hdCAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpXG4gICAgY2hlY2tJRUVFNzU0KGJ1ZiwgdmFsdWUsIG9mZnNldCwgNCwgMy40MDI4MjM0NjYzODUyODg2ZSszOCwgLTMuNDAyODIzNDY2Mzg1Mjg4NmUrMzgpXG4gIGllZWU3NTQud3JpdGUoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIDIzLCA0KVxuICByZXR1cm4gb2Zmc2V0ICsgNFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlRmxvYXRMRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gd3JpdGVGbG9hdCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUZsb2F0QkUgPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIHdyaXRlRmxvYXQodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG5mdW5jdGlvbiB3cml0ZURvdWJsZSAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpXG4gICAgY2hlY2tJRUVFNzU0KGJ1ZiwgdmFsdWUsIG9mZnNldCwgOCwgMS43OTc2OTMxMzQ4NjIzMTU3RSszMDgsIC0xLjc5NzY5MzEzNDg2MjMxNTdFKzMwOClcbiAgaWVlZTc1NC53cml0ZShidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgNTIsIDgpXG4gIHJldHVybiBvZmZzZXQgKyA4XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVEb3VibGVMRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gd3JpdGVEb3VibGUodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVEb3VibGVCRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gd3JpdGVEb3VibGUodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG4vLyBjb3B5KHRhcmdldEJ1ZmZlciwgdGFyZ2V0U3RhcnQ9MCwgc291cmNlU3RhcnQ9MCwgc291cmNlRW5kPWJ1ZmZlci5sZW5ndGgpXG5CdWZmZXIucHJvdG90eXBlLmNvcHkgPSBmdW5jdGlvbiAodGFyZ2V0LCB0YXJnZXRfc3RhcnQsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIHNvdXJjZSA9IHRoaXNcblxuICBpZiAoIXN0YXJ0KSBzdGFydCA9IDBcbiAgaWYgKCFlbmQgJiYgZW5kICE9PSAwKSBlbmQgPSB0aGlzLmxlbmd0aFxuICBpZiAoIXRhcmdldF9zdGFydCkgdGFyZ2V0X3N0YXJ0ID0gMFxuXG4gIC8vIENvcHkgMCBieXRlczsgd2UncmUgZG9uZVxuICBpZiAoZW5kID09PSBzdGFydCkgcmV0dXJuXG4gIGlmICh0YXJnZXQubGVuZ3RoID09PSAwIHx8IHNvdXJjZS5sZW5ndGggPT09IDApIHJldHVyblxuXG4gIC8vIEZhdGFsIGVycm9yIGNvbmRpdGlvbnNcbiAgaWYgKGVuZCA8IHN0YXJ0KSB0aHJvdyBuZXcgVHlwZUVycm9yKCdzb3VyY2VFbmQgPCBzb3VyY2VTdGFydCcpXG4gIGlmICh0YXJnZXRfc3RhcnQgPCAwIHx8IHRhcmdldF9zdGFydCA+PSB0YXJnZXQubGVuZ3RoKVxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ3RhcmdldFN0YXJ0IG91dCBvZiBib3VuZHMnKVxuICBpZiAoc3RhcnQgPCAwIHx8IHN0YXJ0ID49IHNvdXJjZS5sZW5ndGgpIHRocm93IG5ldyBUeXBlRXJyb3IoJ3NvdXJjZVN0YXJ0IG91dCBvZiBib3VuZHMnKVxuICBpZiAoZW5kIDwgMCB8fCBlbmQgPiBzb3VyY2UubGVuZ3RoKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdzb3VyY2VFbmQgb3V0IG9mIGJvdW5kcycpXG5cbiAgLy8gQXJlIHdlIG9vYj9cbiAgaWYgKGVuZCA+IHRoaXMubGVuZ3RoKVxuICAgIGVuZCA9IHRoaXMubGVuZ3RoXG4gIGlmICh0YXJnZXQubGVuZ3RoIC0gdGFyZ2V0X3N0YXJ0IDwgZW5kIC0gc3RhcnQpXG4gICAgZW5kID0gdGFyZ2V0Lmxlbmd0aCAtIHRhcmdldF9zdGFydCArIHN0YXJ0XG5cbiAgdmFyIGxlbiA9IGVuZCAtIHN0YXJ0XG5cbiAgaWYgKGxlbiA8IDEwMDAgfHwgIUJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgdGFyZ2V0W2kgKyB0YXJnZXRfc3RhcnRdID0gdGhpc1tpICsgc3RhcnRdXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHRhcmdldC5fc2V0KHRoaXMuc3ViYXJyYXkoc3RhcnQsIHN0YXJ0ICsgbGVuKSwgdGFyZ2V0X3N0YXJ0KVxuICB9XG59XG5cbi8vIGZpbGwodmFsdWUsIHN0YXJ0PTAsIGVuZD1idWZmZXIubGVuZ3RoKVxuQnVmZmVyLnByb3RvdHlwZS5maWxsID0gZnVuY3Rpb24gKHZhbHVlLCBzdGFydCwgZW5kKSB7XG4gIGlmICghdmFsdWUpIHZhbHVlID0gMFxuICBpZiAoIXN0YXJ0KSBzdGFydCA9IDBcbiAgaWYgKCFlbmQpIGVuZCA9IHRoaXMubGVuZ3RoXG5cbiAgaWYgKGVuZCA8IHN0YXJ0KSB0aHJvdyBuZXcgVHlwZUVycm9yKCdlbmQgPCBzdGFydCcpXG5cbiAgLy8gRmlsbCAwIGJ5dGVzOyB3ZSdyZSBkb25lXG4gIGlmIChlbmQgPT09IHN0YXJ0KSByZXR1cm5cbiAgaWYgKHRoaXMubGVuZ3RoID09PSAwKSByZXR1cm5cblxuICBpZiAoc3RhcnQgPCAwIHx8IHN0YXJ0ID49IHRoaXMubGVuZ3RoKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdzdGFydCBvdXQgb2YgYm91bmRzJylcbiAgaWYgKGVuZCA8IDAgfHwgZW5kID4gdGhpcy5sZW5ndGgpIHRocm93IG5ldyBUeXBlRXJyb3IoJ2VuZCBvdXQgb2YgYm91bmRzJylcblxuICB2YXIgaVxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xuICAgIGZvciAoaSA9IHN0YXJ0OyBpIDwgZW5kOyBpKyspIHtcbiAgICAgIHRoaXNbaV0gPSB2YWx1ZVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB2YXIgYnl0ZXMgPSB1dGY4VG9CeXRlcyh2YWx1ZS50b1N0cmluZygpKVxuICAgIHZhciBsZW4gPSBieXRlcy5sZW5ndGhcbiAgICBmb3IgKGkgPSBzdGFydDsgaSA8IGVuZDsgaSsrKSB7XG4gICAgICB0aGlzW2ldID0gYnl0ZXNbaSAlIGxlbl1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGhpc1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgYEFycmF5QnVmZmVyYCB3aXRoIHRoZSAqY29waWVkKiBtZW1vcnkgb2YgdGhlIGJ1ZmZlciBpbnN0YW5jZS5cbiAqIEFkZGVkIGluIE5vZGUgMC4xMi4gT25seSBhdmFpbGFibGUgaW4gYnJvd3NlcnMgdGhhdCBzdXBwb3J0IEFycmF5QnVmZmVyLlxuICovXG5CdWZmZXIucHJvdG90eXBlLnRvQXJyYXlCdWZmZXIgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0eXBlb2YgVWludDhBcnJheSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICAgIHJldHVybiAobmV3IEJ1ZmZlcih0aGlzKSkuYnVmZmVyXG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBidWYgPSBuZXcgVWludDhBcnJheSh0aGlzLmxlbmd0aClcbiAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBidWYubGVuZ3RoOyBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICAgICAgYnVmW2ldID0gdGhpc1tpXVxuICAgICAgfVxuICAgICAgcmV0dXJuIGJ1Zi5idWZmZXJcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQnVmZmVyLnRvQXJyYXlCdWZmZXIgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXInKVxuICB9XG59XG5cbi8vIEhFTFBFUiBGVU5DVElPTlNcbi8vID09PT09PT09PT09PT09PT1cblxudmFyIEJQID0gQnVmZmVyLnByb3RvdHlwZVxuXG4vKipcbiAqIEF1Z21lbnQgYSBVaW50OEFycmF5ICppbnN0YW5jZSogKG5vdCB0aGUgVWludDhBcnJheSBjbGFzcyEpIHdpdGggQnVmZmVyIG1ldGhvZHNcbiAqL1xuQnVmZmVyLl9hdWdtZW50ID0gZnVuY3Rpb24gKGFycikge1xuICBhcnIuY29uc3RydWN0b3IgPSBCdWZmZXJcbiAgYXJyLl9pc0J1ZmZlciA9IHRydWVcblxuICAvLyBzYXZlIHJlZmVyZW5jZSB0byBvcmlnaW5hbCBVaW50OEFycmF5IGdldC9zZXQgbWV0aG9kcyBiZWZvcmUgb3ZlcndyaXRpbmdcbiAgYXJyLl9nZXQgPSBhcnIuZ2V0XG4gIGFyci5fc2V0ID0gYXJyLnNldFxuXG4gIC8vIGRlcHJlY2F0ZWQsIHdpbGwgYmUgcmVtb3ZlZCBpbiBub2RlIDAuMTMrXG4gIGFyci5nZXQgPSBCUC5nZXRcbiAgYXJyLnNldCA9IEJQLnNldFxuXG4gIGFyci53cml0ZSA9IEJQLndyaXRlXG4gIGFyci50b1N0cmluZyA9IEJQLnRvU3RyaW5nXG4gIGFyci50b0xvY2FsZVN0cmluZyA9IEJQLnRvU3RyaW5nXG4gIGFyci50b0pTT04gPSBCUC50b0pTT05cbiAgYXJyLmVxdWFscyA9IEJQLmVxdWFsc1xuICBhcnIuY29tcGFyZSA9IEJQLmNvbXBhcmVcbiAgYXJyLmNvcHkgPSBCUC5jb3B5XG4gIGFyci5zbGljZSA9IEJQLnNsaWNlXG4gIGFyci5yZWFkVUludDggPSBCUC5yZWFkVUludDhcbiAgYXJyLnJlYWRVSW50MTZMRSA9IEJQLnJlYWRVSW50MTZMRVxuICBhcnIucmVhZFVJbnQxNkJFID0gQlAucmVhZFVJbnQxNkJFXG4gIGFyci5yZWFkVUludDMyTEUgPSBCUC5yZWFkVUludDMyTEVcbiAgYXJyLnJlYWRVSW50MzJCRSA9IEJQLnJlYWRVSW50MzJCRVxuICBhcnIucmVhZEludDggPSBCUC5yZWFkSW50OFxuICBhcnIucmVhZEludDE2TEUgPSBCUC5yZWFkSW50MTZMRVxuICBhcnIucmVhZEludDE2QkUgPSBCUC5yZWFkSW50MTZCRVxuICBhcnIucmVhZEludDMyTEUgPSBCUC5yZWFkSW50MzJMRVxuICBhcnIucmVhZEludDMyQkUgPSBCUC5yZWFkSW50MzJCRVxuICBhcnIucmVhZEZsb2F0TEUgPSBCUC5yZWFkRmxvYXRMRVxuICBhcnIucmVhZEZsb2F0QkUgPSBCUC5yZWFkRmxvYXRCRVxuICBhcnIucmVhZERvdWJsZUxFID0gQlAucmVhZERvdWJsZUxFXG4gIGFyci5yZWFkRG91YmxlQkUgPSBCUC5yZWFkRG91YmxlQkVcbiAgYXJyLndyaXRlVUludDggPSBCUC53cml0ZVVJbnQ4XG4gIGFyci53cml0ZVVJbnQxNkxFID0gQlAud3JpdGVVSW50MTZMRVxuICBhcnIud3JpdGVVSW50MTZCRSA9IEJQLndyaXRlVUludDE2QkVcbiAgYXJyLndyaXRlVUludDMyTEUgPSBCUC53cml0ZVVJbnQzMkxFXG4gIGFyci53cml0ZVVJbnQzMkJFID0gQlAud3JpdGVVSW50MzJCRVxuICBhcnIud3JpdGVJbnQ4ID0gQlAud3JpdGVJbnQ4XG4gIGFyci53cml0ZUludDE2TEUgPSBCUC53cml0ZUludDE2TEVcbiAgYXJyLndyaXRlSW50MTZCRSA9IEJQLndyaXRlSW50MTZCRVxuICBhcnIud3JpdGVJbnQzMkxFID0gQlAud3JpdGVJbnQzMkxFXG4gIGFyci53cml0ZUludDMyQkUgPSBCUC53cml0ZUludDMyQkVcbiAgYXJyLndyaXRlRmxvYXRMRSA9IEJQLndyaXRlRmxvYXRMRVxuICBhcnIud3JpdGVGbG9hdEJFID0gQlAud3JpdGVGbG9hdEJFXG4gIGFyci53cml0ZURvdWJsZUxFID0gQlAud3JpdGVEb3VibGVMRVxuICBhcnIud3JpdGVEb3VibGVCRSA9IEJQLndyaXRlRG91YmxlQkVcbiAgYXJyLmZpbGwgPSBCUC5maWxsXG4gIGFyci5pbnNwZWN0ID0gQlAuaW5zcGVjdFxuICBhcnIudG9BcnJheUJ1ZmZlciA9IEJQLnRvQXJyYXlCdWZmZXJcblxuICByZXR1cm4gYXJyXG59XG5cbnZhciBJTlZBTElEX0JBU0U2NF9SRSA9IC9bXitcXC8wLTlBLXpdL2dcblxuZnVuY3Rpb24gYmFzZTY0Y2xlYW4gKHN0cikge1xuICAvLyBOb2RlIHN0cmlwcyBvdXQgaW52YWxpZCBjaGFyYWN0ZXJzIGxpa2UgXFxuIGFuZCBcXHQgZnJvbSB0aGUgc3RyaW5nLCBiYXNlNjQtanMgZG9lcyBub3RcbiAgc3RyID0gc3RyaW5ndHJpbShzdHIpLnJlcGxhY2UoSU5WQUxJRF9CQVNFNjRfUkUsICcnKVxuICAvLyBOb2RlIGFsbG93cyBmb3Igbm9uLXBhZGRlZCBiYXNlNjQgc3RyaW5ncyAobWlzc2luZyB0cmFpbGluZyA9PT0pLCBiYXNlNjQtanMgZG9lcyBub3RcbiAgd2hpbGUgKHN0ci5sZW5ndGggJSA0ICE9PSAwKSB7XG4gICAgc3RyID0gc3RyICsgJz0nXG4gIH1cbiAgcmV0dXJuIHN0clxufVxuXG5mdW5jdGlvbiBzdHJpbmd0cmltIChzdHIpIHtcbiAgaWYgKHN0ci50cmltKSByZXR1cm4gc3RyLnRyaW0oKVxuICByZXR1cm4gc3RyLnJlcGxhY2UoL15cXHMrfFxccyskL2csICcnKVxufVxuXG5mdW5jdGlvbiBpc0FycmF5aXNoIChzdWJqZWN0KSB7XG4gIHJldHVybiBpc0FycmF5KHN1YmplY3QpIHx8IEJ1ZmZlci5pc0J1ZmZlcihzdWJqZWN0KSB8fFxuICAgICAgc3ViamVjdCAmJiB0eXBlb2Ygc3ViamVjdCA9PT0gJ29iamVjdCcgJiZcbiAgICAgIHR5cGVvZiBzdWJqZWN0Lmxlbmd0aCA9PT0gJ251bWJlcidcbn1cblxuZnVuY3Rpb24gdG9IZXggKG4pIHtcbiAgaWYgKG4gPCAxNikgcmV0dXJuICcwJyArIG4udG9TdHJpbmcoMTYpXG4gIHJldHVybiBuLnRvU3RyaW5nKDE2KVxufVxuXG5mdW5jdGlvbiB1dGY4VG9CeXRlcyAoc3RyKSB7XG4gIHZhciBieXRlQXJyYXkgPSBbXVxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xuICAgIHZhciBiID0gc3RyLmNoYXJDb2RlQXQoaSlcbiAgICBpZiAoYiA8PSAweDdGKSB7XG4gICAgICBieXRlQXJyYXkucHVzaChiKVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgc3RhcnQgPSBpXG4gICAgICBpZiAoYiA+PSAweEQ4MDAgJiYgYiA8PSAweERGRkYpIGkrK1xuICAgICAgdmFyIGggPSBlbmNvZGVVUklDb21wb25lbnQoc3RyLnNsaWNlKHN0YXJ0LCBpKzEpKS5zdWJzdHIoMSkuc3BsaXQoJyUnKVxuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBoLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGJ5dGVBcnJheS5wdXNoKHBhcnNlSW50KGhbal0sIDE2KSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGJ5dGVBcnJheVxufVxuXG5mdW5jdGlvbiBhc2NpaVRvQnl0ZXMgKHN0cikge1xuICB2YXIgYnl0ZUFycmF5ID0gW11cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcbiAgICAvLyBOb2RlJ3MgY29kZSBzZWVtcyB0byBiZSBkb2luZyB0aGlzIGFuZCBub3QgJiAweDdGLi5cbiAgICBieXRlQXJyYXkucHVzaChzdHIuY2hhckNvZGVBdChpKSAmIDB4RkYpXG4gIH1cbiAgcmV0dXJuIGJ5dGVBcnJheVxufVxuXG5mdW5jdGlvbiB1dGYxNmxlVG9CeXRlcyAoc3RyKSB7XG4gIHZhciBjLCBoaSwgbG9cbiAgdmFyIGJ5dGVBcnJheSA9IFtdXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XG4gICAgYyA9IHN0ci5jaGFyQ29kZUF0KGkpXG4gICAgaGkgPSBjID4+IDhcbiAgICBsbyA9IGMgJSAyNTZcbiAgICBieXRlQXJyYXkucHVzaChsbylcbiAgICBieXRlQXJyYXkucHVzaChoaSlcbiAgfVxuXG4gIHJldHVybiBieXRlQXJyYXlcbn1cblxuZnVuY3Rpb24gYmFzZTY0VG9CeXRlcyAoc3RyKSB7XG4gIHJldHVybiBiYXNlNjQudG9CeXRlQXJyYXkoc3RyKVxufVxuXG5mdW5jdGlvbiBibGl0QnVmZmVyIChzcmMsIGRzdCwgb2Zmc2V0LCBsZW5ndGgsIHVuaXRTaXplKSB7XG4gIGlmICh1bml0U2l6ZSkgbGVuZ3RoIC09IGxlbmd0aCAlIHVuaXRTaXplO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKChpICsgb2Zmc2V0ID49IGRzdC5sZW5ndGgpIHx8IChpID49IHNyYy5sZW5ndGgpKVxuICAgICAgYnJlYWtcbiAgICBkc3RbaSArIG9mZnNldF0gPSBzcmNbaV1cbiAgfVxuICByZXR1cm4gaVxufVxuXG5mdW5jdGlvbiBkZWNvZGVVdGY4Q2hhciAoc3RyKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChzdHIpXG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4RkZGRCkgLy8gVVRGIDggaW52YWxpZCBjaGFyXG4gIH1cbn1cbiIsInZhciBsb29rdXAgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLyc7XG5cbjsoZnVuY3Rpb24gKGV4cG9ydHMpIHtcblx0J3VzZSBzdHJpY3QnO1xuXG4gIHZhciBBcnIgPSAodHlwZW9mIFVpbnQ4QXJyYXkgIT09ICd1bmRlZmluZWQnKVxuICAgID8gVWludDhBcnJheVxuICAgIDogQXJyYXlcblxuXHR2YXIgUExVUyAgID0gJysnLmNoYXJDb2RlQXQoMClcblx0dmFyIFNMQVNIICA9ICcvJy5jaGFyQ29kZUF0KDApXG5cdHZhciBOVU1CRVIgPSAnMCcuY2hhckNvZGVBdCgwKVxuXHR2YXIgTE9XRVIgID0gJ2EnLmNoYXJDb2RlQXQoMClcblx0dmFyIFVQUEVSICA9ICdBJy5jaGFyQ29kZUF0KDApXG5cblx0ZnVuY3Rpb24gZGVjb2RlIChlbHQpIHtcblx0XHR2YXIgY29kZSA9IGVsdC5jaGFyQ29kZUF0KDApXG5cdFx0aWYgKGNvZGUgPT09IFBMVVMpXG5cdFx0XHRyZXR1cm4gNjIgLy8gJysnXG5cdFx0aWYgKGNvZGUgPT09IFNMQVNIKVxuXHRcdFx0cmV0dXJuIDYzIC8vICcvJ1xuXHRcdGlmIChjb2RlIDwgTlVNQkVSKVxuXHRcdFx0cmV0dXJuIC0xIC8vbm8gbWF0Y2hcblx0XHRpZiAoY29kZSA8IE5VTUJFUiArIDEwKVxuXHRcdFx0cmV0dXJuIGNvZGUgLSBOVU1CRVIgKyAyNiArIDI2XG5cdFx0aWYgKGNvZGUgPCBVUFBFUiArIDI2KVxuXHRcdFx0cmV0dXJuIGNvZGUgLSBVUFBFUlxuXHRcdGlmIChjb2RlIDwgTE9XRVIgKyAyNilcblx0XHRcdHJldHVybiBjb2RlIC0gTE9XRVIgKyAyNlxuXHR9XG5cblx0ZnVuY3Rpb24gYjY0VG9CeXRlQXJyYXkgKGI2NCkge1xuXHRcdHZhciBpLCBqLCBsLCB0bXAsIHBsYWNlSG9sZGVycywgYXJyXG5cblx0XHRpZiAoYjY0Lmxlbmd0aCAlIDQgPiAwKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgc3RyaW5nLiBMZW5ndGggbXVzdCBiZSBhIG11bHRpcGxlIG9mIDQnKVxuXHRcdH1cblxuXHRcdC8vIHRoZSBudW1iZXIgb2YgZXF1YWwgc2lnbnMgKHBsYWNlIGhvbGRlcnMpXG5cdFx0Ly8gaWYgdGhlcmUgYXJlIHR3byBwbGFjZWhvbGRlcnMsIHRoYW4gdGhlIHR3byBjaGFyYWN0ZXJzIGJlZm9yZSBpdFxuXHRcdC8vIHJlcHJlc2VudCBvbmUgYnl0ZVxuXHRcdC8vIGlmIHRoZXJlIGlzIG9ubHkgb25lLCB0aGVuIHRoZSB0aHJlZSBjaGFyYWN0ZXJzIGJlZm9yZSBpdCByZXByZXNlbnQgMiBieXRlc1xuXHRcdC8vIHRoaXMgaXMganVzdCBhIGNoZWFwIGhhY2sgdG8gbm90IGRvIGluZGV4T2YgdHdpY2Vcblx0XHR2YXIgbGVuID0gYjY0Lmxlbmd0aFxuXHRcdHBsYWNlSG9sZGVycyA9ICc9JyA9PT0gYjY0LmNoYXJBdChsZW4gLSAyKSA/IDIgOiAnPScgPT09IGI2NC5jaGFyQXQobGVuIC0gMSkgPyAxIDogMFxuXG5cdFx0Ly8gYmFzZTY0IGlzIDQvMyArIHVwIHRvIHR3byBjaGFyYWN0ZXJzIG9mIHRoZSBvcmlnaW5hbCBkYXRhXG5cdFx0YXJyID0gbmV3IEFycihiNjQubGVuZ3RoICogMyAvIDQgLSBwbGFjZUhvbGRlcnMpXG5cblx0XHQvLyBpZiB0aGVyZSBhcmUgcGxhY2Vob2xkZXJzLCBvbmx5IGdldCB1cCB0byB0aGUgbGFzdCBjb21wbGV0ZSA0IGNoYXJzXG5cdFx0bCA9IHBsYWNlSG9sZGVycyA+IDAgPyBiNjQubGVuZ3RoIC0gNCA6IGI2NC5sZW5ndGhcblxuXHRcdHZhciBMID0gMFxuXG5cdFx0ZnVuY3Rpb24gcHVzaCAodikge1xuXHRcdFx0YXJyW0wrK10gPSB2XG5cdFx0fVxuXG5cdFx0Zm9yIChpID0gMCwgaiA9IDA7IGkgPCBsOyBpICs9IDQsIGogKz0gMykge1xuXHRcdFx0dG1wID0gKGRlY29kZShiNjQuY2hhckF0KGkpKSA8PCAxOCkgfCAoZGVjb2RlKGI2NC5jaGFyQXQoaSArIDEpKSA8PCAxMikgfCAoZGVjb2RlKGI2NC5jaGFyQXQoaSArIDIpKSA8PCA2KSB8IGRlY29kZShiNjQuY2hhckF0KGkgKyAzKSlcblx0XHRcdHB1c2goKHRtcCAmIDB4RkYwMDAwKSA+PiAxNilcblx0XHRcdHB1c2goKHRtcCAmIDB4RkYwMCkgPj4gOClcblx0XHRcdHB1c2godG1wICYgMHhGRilcblx0XHR9XG5cblx0XHRpZiAocGxhY2VIb2xkZXJzID09PSAyKSB7XG5cdFx0XHR0bXAgPSAoZGVjb2RlKGI2NC5jaGFyQXQoaSkpIDw8IDIpIHwgKGRlY29kZShiNjQuY2hhckF0KGkgKyAxKSkgPj4gNClcblx0XHRcdHB1c2godG1wICYgMHhGRilcblx0XHR9IGVsc2UgaWYgKHBsYWNlSG9sZGVycyA9PT0gMSkge1xuXHRcdFx0dG1wID0gKGRlY29kZShiNjQuY2hhckF0KGkpKSA8PCAxMCkgfCAoZGVjb2RlKGI2NC5jaGFyQXQoaSArIDEpKSA8PCA0KSB8IChkZWNvZGUoYjY0LmNoYXJBdChpICsgMikpID4+IDIpXG5cdFx0XHRwdXNoKCh0bXAgPj4gOCkgJiAweEZGKVxuXHRcdFx0cHVzaCh0bXAgJiAweEZGKVxuXHRcdH1cblxuXHRcdHJldHVybiBhcnJcblx0fVxuXG5cdGZ1bmN0aW9uIHVpbnQ4VG9CYXNlNjQgKHVpbnQ4KSB7XG5cdFx0dmFyIGksXG5cdFx0XHRleHRyYUJ5dGVzID0gdWludDgubGVuZ3RoICUgMywgLy8gaWYgd2UgaGF2ZSAxIGJ5dGUgbGVmdCwgcGFkIDIgYnl0ZXNcblx0XHRcdG91dHB1dCA9IFwiXCIsXG5cdFx0XHR0ZW1wLCBsZW5ndGhcblxuXHRcdGZ1bmN0aW9uIGVuY29kZSAobnVtKSB7XG5cdFx0XHRyZXR1cm4gbG9va3VwLmNoYXJBdChudW0pXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gdHJpcGxldFRvQmFzZTY0IChudW0pIHtcblx0XHRcdHJldHVybiBlbmNvZGUobnVtID4+IDE4ICYgMHgzRikgKyBlbmNvZGUobnVtID4+IDEyICYgMHgzRikgKyBlbmNvZGUobnVtID4+IDYgJiAweDNGKSArIGVuY29kZShudW0gJiAweDNGKVxuXHRcdH1cblxuXHRcdC8vIGdvIHRocm91Z2ggdGhlIGFycmF5IGV2ZXJ5IHRocmVlIGJ5dGVzLCB3ZSdsbCBkZWFsIHdpdGggdHJhaWxpbmcgc3R1ZmYgbGF0ZXJcblx0XHRmb3IgKGkgPSAwLCBsZW5ndGggPSB1aW50OC5sZW5ndGggLSBleHRyYUJ5dGVzOyBpIDwgbGVuZ3RoOyBpICs9IDMpIHtcblx0XHRcdHRlbXAgPSAodWludDhbaV0gPDwgMTYpICsgKHVpbnQ4W2kgKyAxXSA8PCA4KSArICh1aW50OFtpICsgMl0pXG5cdFx0XHRvdXRwdXQgKz0gdHJpcGxldFRvQmFzZTY0KHRlbXApXG5cdFx0fVxuXG5cdFx0Ly8gcGFkIHRoZSBlbmQgd2l0aCB6ZXJvcywgYnV0IG1ha2Ugc3VyZSB0byBub3QgZm9yZ2V0IHRoZSBleHRyYSBieXRlc1xuXHRcdHN3aXRjaCAoZXh0cmFCeXRlcykge1xuXHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHR0ZW1wID0gdWludDhbdWludDgubGVuZ3RoIC0gMV1cblx0XHRcdFx0b3V0cHV0ICs9IGVuY29kZSh0ZW1wID4+IDIpXG5cdFx0XHRcdG91dHB1dCArPSBlbmNvZGUoKHRlbXAgPDwgNCkgJiAweDNGKVxuXHRcdFx0XHRvdXRwdXQgKz0gJz09J1xuXHRcdFx0XHRicmVha1xuXHRcdFx0Y2FzZSAyOlxuXHRcdFx0XHR0ZW1wID0gKHVpbnQ4W3VpbnQ4Lmxlbmd0aCAtIDJdIDw8IDgpICsgKHVpbnQ4W3VpbnQ4Lmxlbmd0aCAtIDFdKVxuXHRcdFx0XHRvdXRwdXQgKz0gZW5jb2RlKHRlbXAgPj4gMTApXG5cdFx0XHRcdG91dHB1dCArPSBlbmNvZGUoKHRlbXAgPj4gNCkgJiAweDNGKVxuXHRcdFx0XHRvdXRwdXQgKz0gZW5jb2RlKCh0ZW1wIDw8IDIpICYgMHgzRilcblx0XHRcdFx0b3V0cHV0ICs9ICc9J1xuXHRcdFx0XHRicmVha1xuXHRcdH1cblxuXHRcdHJldHVybiBvdXRwdXRcblx0fVxuXG5cdGV4cG9ydHMudG9CeXRlQXJyYXkgPSBiNjRUb0J5dGVBcnJheVxuXHRleHBvcnRzLmZyb21CeXRlQXJyYXkgPSB1aW50OFRvQmFzZTY0XG59KHR5cGVvZiBleHBvcnRzID09PSAndW5kZWZpbmVkJyA/ICh0aGlzLmJhc2U2NGpzID0ge30pIDogZXhwb3J0cykpXG4iLCJleHBvcnRzLnJlYWQgPSBmdW5jdGlvbihidWZmZXIsIG9mZnNldCwgaXNMRSwgbUxlbiwgbkJ5dGVzKSB7XG4gIHZhciBlLCBtLFxuICAgICAgZUxlbiA9IG5CeXRlcyAqIDggLSBtTGVuIC0gMSxcbiAgICAgIGVNYXggPSAoMSA8PCBlTGVuKSAtIDEsXG4gICAgICBlQmlhcyA9IGVNYXggPj4gMSxcbiAgICAgIG5CaXRzID0gLTcsXG4gICAgICBpID0gaXNMRSA/IChuQnl0ZXMgLSAxKSA6IDAsXG4gICAgICBkID0gaXNMRSA/IC0xIDogMSxcbiAgICAgIHMgPSBidWZmZXJbb2Zmc2V0ICsgaV07XG5cbiAgaSArPSBkO1xuXG4gIGUgPSBzICYgKCgxIDw8ICgtbkJpdHMpKSAtIDEpO1xuICBzID4+PSAoLW5CaXRzKTtcbiAgbkJpdHMgKz0gZUxlbjtcbiAgZm9yICg7IG5CaXRzID4gMDsgZSA9IGUgKiAyNTYgKyBidWZmZXJbb2Zmc2V0ICsgaV0sIGkgKz0gZCwgbkJpdHMgLT0gOCk7XG5cbiAgbSA9IGUgJiAoKDEgPDwgKC1uQml0cykpIC0gMSk7XG4gIGUgPj49ICgtbkJpdHMpO1xuICBuQml0cyArPSBtTGVuO1xuICBmb3IgKDsgbkJpdHMgPiAwOyBtID0gbSAqIDI1NiArIGJ1ZmZlcltvZmZzZXQgKyBpXSwgaSArPSBkLCBuQml0cyAtPSA4KTtcblxuICBpZiAoZSA9PT0gMCkge1xuICAgIGUgPSAxIC0gZUJpYXM7XG4gIH0gZWxzZSBpZiAoZSA9PT0gZU1heCkge1xuICAgIHJldHVybiBtID8gTmFOIDogKChzID8gLTEgOiAxKSAqIEluZmluaXR5KTtcbiAgfSBlbHNlIHtcbiAgICBtID0gbSArIE1hdGgucG93KDIsIG1MZW4pO1xuICAgIGUgPSBlIC0gZUJpYXM7XG4gIH1cbiAgcmV0dXJuIChzID8gLTEgOiAxKSAqIG0gKiBNYXRoLnBvdygyLCBlIC0gbUxlbik7XG59O1xuXG5leHBvcnRzLndyaXRlID0gZnVuY3Rpb24oYnVmZmVyLCB2YWx1ZSwgb2Zmc2V0LCBpc0xFLCBtTGVuLCBuQnl0ZXMpIHtcbiAgdmFyIGUsIG0sIGMsXG4gICAgICBlTGVuID0gbkJ5dGVzICogOCAtIG1MZW4gLSAxLFxuICAgICAgZU1heCA9ICgxIDw8IGVMZW4pIC0gMSxcbiAgICAgIGVCaWFzID0gZU1heCA+PiAxLFxuICAgICAgcnQgPSAobUxlbiA9PT0gMjMgPyBNYXRoLnBvdygyLCAtMjQpIC0gTWF0aC5wb3coMiwgLTc3KSA6IDApLFxuICAgICAgaSA9IGlzTEUgPyAwIDogKG5CeXRlcyAtIDEpLFxuICAgICAgZCA9IGlzTEUgPyAxIDogLTEsXG4gICAgICBzID0gdmFsdWUgPCAwIHx8ICh2YWx1ZSA9PT0gMCAmJiAxIC8gdmFsdWUgPCAwKSA/IDEgOiAwO1xuXG4gIHZhbHVlID0gTWF0aC5hYnModmFsdWUpO1xuXG4gIGlmIChpc05hTih2YWx1ZSkgfHwgdmFsdWUgPT09IEluZmluaXR5KSB7XG4gICAgbSA9IGlzTmFOKHZhbHVlKSA/IDEgOiAwO1xuICAgIGUgPSBlTWF4O1xuICB9IGVsc2Uge1xuICAgIGUgPSBNYXRoLmZsb29yKE1hdGgubG9nKHZhbHVlKSAvIE1hdGguTE4yKTtcbiAgICBpZiAodmFsdWUgKiAoYyA9IE1hdGgucG93KDIsIC1lKSkgPCAxKSB7XG4gICAgICBlLS07XG4gICAgICBjICo9IDI7XG4gICAgfVxuICAgIGlmIChlICsgZUJpYXMgPj0gMSkge1xuICAgICAgdmFsdWUgKz0gcnQgLyBjO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWx1ZSArPSBydCAqIE1hdGgucG93KDIsIDEgLSBlQmlhcyk7XG4gICAgfVxuICAgIGlmICh2YWx1ZSAqIGMgPj0gMikge1xuICAgICAgZSsrO1xuICAgICAgYyAvPSAyO1xuICAgIH1cblxuICAgIGlmIChlICsgZUJpYXMgPj0gZU1heCkge1xuICAgICAgbSA9IDA7XG4gICAgICBlID0gZU1heDtcbiAgICB9IGVsc2UgaWYgKGUgKyBlQmlhcyA+PSAxKSB7XG4gICAgICBtID0gKHZhbHVlICogYyAtIDEpICogTWF0aC5wb3coMiwgbUxlbik7XG4gICAgICBlID0gZSArIGVCaWFzO1xuICAgIH0gZWxzZSB7XG4gICAgICBtID0gdmFsdWUgKiBNYXRoLnBvdygyLCBlQmlhcyAtIDEpICogTWF0aC5wb3coMiwgbUxlbik7XG4gICAgICBlID0gMDtcbiAgICB9XG4gIH1cblxuICBmb3IgKDsgbUxlbiA+PSA4OyBidWZmZXJbb2Zmc2V0ICsgaV0gPSBtICYgMHhmZiwgaSArPSBkLCBtIC89IDI1NiwgbUxlbiAtPSA4KTtcblxuICBlID0gKGUgPDwgbUxlbikgfCBtO1xuICBlTGVuICs9IG1MZW47XG4gIGZvciAoOyBlTGVuID4gMDsgYnVmZmVyW29mZnNldCArIGldID0gZSAmIDB4ZmYsIGkgKz0gZCwgZSAvPSAyNTYsIGVMZW4gLT0gOCk7XG5cbiAgYnVmZmVyW29mZnNldCArIGkgLSBkXSB8PSBzICogMTI4O1xufTtcbiIsIlxuLyoqXG4gKiBpc0FycmF5XG4gKi9cblxudmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5O1xuXG4vKipcbiAqIHRvU3RyaW5nXG4gKi9cblxudmFyIHN0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5cbi8qKlxuICogV2hldGhlciBvciBub3QgdGhlIGdpdmVuIGB2YWxgXG4gKiBpcyBhbiBhcnJheS5cbiAqXG4gKiBleGFtcGxlOlxuICpcbiAqICAgICAgICBpc0FycmF5KFtdKTtcbiAqICAgICAgICAvLyA+IHRydWVcbiAqICAgICAgICBpc0FycmF5KGFyZ3VtZW50cyk7XG4gKiAgICAgICAgLy8gPiBmYWxzZVxuICogICAgICAgIGlzQXJyYXkoJycpO1xuICogICAgICAgIC8vID4gZmFsc2VcbiAqXG4gKiBAcGFyYW0ge21peGVkfSB2YWxcbiAqIEByZXR1cm4ge2Jvb2x9XG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBpc0FycmF5IHx8IGZ1bmN0aW9uICh2YWwpIHtcbiAgcmV0dXJuICEhIHZhbCAmJiAnW29iamVjdCBBcnJheV0nID09IHN0ci5jYWxsKHZhbCk7XG59O1xuIl19
