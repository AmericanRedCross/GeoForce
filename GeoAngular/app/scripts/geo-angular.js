(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/ryanwhitley/Documents/GitHub/Mapfolio/GeoForce/Config/layers/all.js":[function(require,module,exports){
/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *       on 8/6/14.
 */

module.exports = {


};

},{}],"/Users/ryanwhitley/Documents/GitHub/Mapfolio/GeoForce/Config/layers/basemaps.js":[function(require,module,exports){
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

},{}],"/Users/ryanwhitley/Documents/GitHub/Mapfolio/GeoForce/Config/layers/disaster.js":[function(require,module,exports){
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
},{}],"/Users/ryanwhitley/Documents/GitHub/Mapfolio/GeoForce/Config/layers/other.js":[function(require,module,exports){
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

},{}],"/Users/ryanwhitley/Documents/GitHub/Mapfolio/GeoForce/Config/layers/project.js":[function(require,module,exports){
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
},{}],"/Users/ryanwhitley/Documents/GitHub/Mapfolio/GeoForce/Config/layers/projecthealth.js":[function(require,module,exports){
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
},{}],"/Users/ryanwhitley/Documents/GitHub/Mapfolio/GeoForce/Config/layers/projectrisk.js":[function(require,module,exports){
/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *       on 8/6/14.
 */

module.exports = {

};
},{}],"/Users/ryanwhitley/Documents/GitHub/Mapfolio/GeoForce/Config/layers/vectortiles.js":[function(require,module,exports){
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

    //Show only countries with active theme properties
    if(data && data[vtf.properties.guid]){
      var theme = $rootScope.$stateParams.theme;
      vtf.properties.theme = theme;
      vtf.properties.ecos_properties = {};
      vtf.properties.ecos_properties[theme] = data[vtf.properties.guid];
      //return true;
    }

    return true; //draw feature
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

function getThemeStyle(vtf, $rootScope){

  var opacity = "0.5";

  var style = {};
  //Default style - make hollow
  style.color = 'rgba(0,0,0,0.1)';
  style.outline = {
    color: 'rgb(20,20,20)',
    size: 1
  };

  var properties = vtf.properties;

  //Skip if we're a regular polygon, and not a label point, and if there is no ECOS properties.
  if(vtf.layer.name.indexOf('label') == -1 && !properties.theme){
    return style;
  }

  //See if we should show theme badges/bubbles or not
  var checked = ($stateParams.themelabels && $stateParams.themelabels.toLowerCase() === 'true');

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
  else if (properties.theme == "disasterType") {
    ecosProperties = properties["ecos_properties"]["disasterType"]; //this is an array of disaster types for this area
    if (ecosProperties && ecosProperties.disaster_type__c) {

      //Look up the color in the dictionary
      style.color = UNOCHAIconLookup[ecosProperties.disaster_type__c[0]].color;
      //Use the same outline
      style.outline = {
        color: 'rgb(20,20,20)',
        size: 2
      }



      if(checked === true){
        //Disaster Type should use OCHA icons
        style.staticLabel = function () {
          var labelStyle = {
            html: (ecosProperties && ecosProperties.disaster_type__c[0] ? buildDisasterTypeLabel(ecosProperties.disaster_type__c[0], style.color, style.outline) : ""),
            iconSize: [42, 42],
            cssClass: 'noclass'
          };
          return labelStyle;
        };
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
  if(checked === true) {

    if (vtf.layer.name === 'GADM_2014_label') {
      if (ecosProperties && ecosProperties.theme_count) {

        if (properties.theme != "disasterType") {
          //Disaster Type labels are set in the bloc above
          //All others are set here.

          style.staticLabel = function () {
            var labelStyle = {
              html: (ecosProperties && ecosProperties.theme_count ? buildDynamicLabel(ecosProperties) : ""),
              iconSize: [42, 42],
              cssClass: 'noclass'
            };
            return labelStyle;
          };

        }

      }
      else {
        //When switching themes, reset old label styles to null so labels don't get drawn for old theme.
        style.staticLabel = null;
      }

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


/*
Set the dictionary used to look up UNOCHA icons for disaster types
 */
var UNOCHAIconLookup = {

  "Meteorological - Tropical Cyclone": {icon: "icon-disaster_cyclone", color: "rgba(255,0,0,1)"},
  "Floods": {icon: "icon-disaster_flood", color: "rgba(255,0,0,1)"},
  "Tsunami, Volcano": {icon: "icon-disaster_tsunami", color: "rgba(255,0,0,1)"},
  "Floods, Storm": {icon: "icon-disaster_flood", color: "rgba(255,0,0,1)"},
  "Tsunami": {icon: "icon-disaster_tsunami", color: "rgba(255,0,0,1)"},
  "Famine / Food Insecurity": {icon: "icon-cluster_food_security", color: "rgba(255,0,0,1)"},
  "Drought": {icon: "icon-disaster_drought", color: "rgba(255,0,0,1)"},
  "Meteorological - Tropical Cyclone;Hydrological - Floods": {icon: "icon-disaster_cyclone", color: "rgba(255,0,0,1)"},
  "Food Insecurity": {icon: "icon-cluster_food_security", color: "rgba(255,0,0,1)"},
  "Civil Unrest": {icon: "icon-people_rebel", color: "rgba(255,0,0,1)"},
  "Floods, Tropical Storm": {icon: "icon-disaster_flood", color: "rgba(255,0,0,1)"},
  "Complex Emergency": {icon: "icon-crisis_conflict", color: "rgba(255,0,0,1)"},
  "Epidemic": {icon: "icon-disaster_epidemic", color: "rgba(255,0,0,1)"},
  "Population Movement": {icon: "icon-crisis_population_displacement", color: "rgba(255,0,0,1)"},
  "Climatological - Drought": {icon: "icon-disaster_drought", color: "rgba(255,0,0,1)"},
  "Winter Storm": {icon: "icon-disaster_snowfall", color: "rgba(255,0,0,1)"},
  "Tropical Storm": {icon: "icon-disaster_heavy_rain", color: "rgba(255,0,0,1)"},
  "Earthquake, Tsunami": {icon: "icon-disaster_earthquake", color: "rgba(255,0,0,1)"},
  "Hydrological - Floods": {icon: "icon-disaster_flood", color: "rgba(255,0,0,1)"},
  "Landslide;Floods": {icon: "icon-disaster_landslide", color: "rgba(255,0,0,1)"},
  "Earthquake": {icon: "icon-disaster_earthquake", color: "rgba(255,0,0,1)"},
  "Landslide;Hydrological - Floods": {icon: "icon-disaster_landslide", color: "rgba(255,0,0,1)"}

}

function buildDisasterTypeLabel(disasterType, color) {

  var color = "";
  var labelColor = "";
  if (disasterType) {

    color = color || "rgba(204,0,51,0.4)";
    labelColor = "#fff";

  }

  var icon = UNOCHAIconLookup[disasterType].icon || 'icon-other_cluster_other';

  return '<div class="label-icon-number-100percent"' + (color ? ' style="font-family: humanitarian_icons; background-color: ' + color + ';color: ' + labelColor + '"' : '') + '><i class="un ' + icon + '"></i></div>';

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
},{}],"/Users/ryanwhitley/Documents/GitHub/Mapfolio/GeoForce/GeoAngular/app/lib/Leaflet.MapboxVectorTile/node_modules/pbf/index.js":[function(require,module,exports){
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
},{"buffer":"/usr/local/lib/node_modules/watchify/node_modules/browserify/node_modules/buffer/index.js","ieee754":"/Users/ryanwhitley/Documents/GitHub/Mapfolio/GeoForce/GeoAngular/app/lib/Leaflet.MapboxVectorTile/node_modules/pbf/node_modules/ieee754/index.js"}],"/Users/ryanwhitley/Documents/GitHub/Mapfolio/GeoForce/GeoAngular/app/lib/Leaflet.MapboxVectorTile/node_modules/pbf/node_modules/ieee754/index.js":[function(require,module,exports){
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

},{}],"/Users/ryanwhitley/Documents/GitHub/Mapfolio/GeoForce/GeoAngular/app/lib/Leaflet.MapboxVectorTile/node_modules/point-geometry/index.js":[function(require,module,exports){
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

},{}],"/Users/ryanwhitley/Documents/GitHub/Mapfolio/GeoForce/GeoAngular/app/lib/Leaflet.MapboxVectorTile/node_modules/vector-tile/index.js":[function(require,module,exports){
module.exports.VectorTile = require('./lib/vectortile.js');
module.exports.VectorTileFeature = require('./lib/vectortilefeature.js');
module.exports.VectorTileLayer = require('./lib/vectortilelayer.js');

},{"./lib/vectortile.js":"/Users/ryanwhitley/Documents/GitHub/Mapfolio/GeoForce/GeoAngular/app/lib/Leaflet.MapboxVectorTile/node_modules/vector-tile/lib/vectortile.js","./lib/vectortilefeature.js":"/Users/ryanwhitley/Documents/GitHub/Mapfolio/GeoForce/GeoAngular/app/lib/Leaflet.MapboxVectorTile/node_modules/vector-tile/lib/vectortilefeature.js","./lib/vectortilelayer.js":"/Users/ryanwhitley/Documents/GitHub/Mapfolio/GeoForce/GeoAngular/app/lib/Leaflet.MapboxVectorTile/node_modules/vector-tile/lib/vectortilelayer.js"}],"/Users/ryanwhitley/Documents/GitHub/Mapfolio/GeoForce/GeoAngular/app/lib/Leaflet.MapboxVectorTile/node_modules/vector-tile/lib/vectortile.js":[function(require,module,exports){
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

},{"./vectortilelayer":"/Users/ryanwhitley/Documents/GitHub/Mapfolio/GeoForce/GeoAngular/app/lib/Leaflet.MapboxVectorTile/node_modules/vector-tile/lib/vectortilelayer.js"}],"/Users/ryanwhitley/Documents/GitHub/Mapfolio/GeoForce/GeoAngular/app/lib/Leaflet.MapboxVectorTile/node_modules/vector-tile/lib/vectortilefeature.js":[function(require,module,exports){
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
            var tagEnd = buffer.pos + buffer.readVarint();

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

},{"point-geometry":"/Users/ryanwhitley/Documents/GitHub/Mapfolio/GeoForce/GeoAngular/app/lib/Leaflet.MapboxVectorTile/node_modules/point-geometry/index.js"}],"/Users/ryanwhitley/Documents/GitHub/Mapfolio/GeoForce/GeoAngular/app/lib/Leaflet.MapboxVectorTile/node_modules/vector-tile/lib/vectortilelayer.js":[function(require,module,exports){
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

},{"./vectortilefeature.js":"/Users/ryanwhitley/Documents/GitHub/Mapfolio/GeoForce/GeoAngular/app/lib/Leaflet.MapboxVectorTile/node_modules/vector-tile/lib/vectortilefeature.js"}],"/Users/ryanwhitley/Documents/GitHub/Mapfolio/GeoForce/GeoAngular/app/lib/Leaflet.MapboxVectorTile/src/MVTFeature.js":[function(require,module,exports){
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


},{"./MVTUtil":"/Users/ryanwhitley/Documents/GitHub/Mapfolio/GeoForce/GeoAngular/app/lib/Leaflet.MapboxVectorTile/src/MVTUtil.js","./StaticLabel/StaticLabel.js":"/Users/ryanwhitley/Documents/GitHub/Mapfolio/GeoForce/GeoAngular/app/lib/Leaflet.MapboxVectorTile/src/StaticLabel/StaticLabel.js"}],"/Users/ryanwhitley/Documents/GitHub/Mapfolio/GeoForce/GeoAngular/app/lib/Leaflet.MapboxVectorTile/src/MVTLayer.js":[function(require,module,exports){
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

},{"./MVTFeature":"/Users/ryanwhitley/Documents/GitHub/Mapfolio/GeoForce/GeoAngular/app/lib/Leaflet.MapboxVectorTile/src/MVTFeature.js","./MVTUtil":"/Users/ryanwhitley/Documents/GitHub/Mapfolio/GeoForce/GeoAngular/app/lib/Leaflet.MapboxVectorTile/src/MVTUtil.js"}],"/Users/ryanwhitley/Documents/GitHub/Mapfolio/GeoForce/GeoAngular/app/lib/Leaflet.MapboxVectorTile/src/MVTSource.js":[function(require,module,exports){
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

},{"./MVTLayer":"/Users/ryanwhitley/Documents/GitHub/Mapfolio/GeoForce/GeoAngular/app/lib/Leaflet.MapboxVectorTile/src/MVTLayer.js","./MVTUtil":"/Users/ryanwhitley/Documents/GitHub/Mapfolio/GeoForce/GeoAngular/app/lib/Leaflet.MapboxVectorTile/src/MVTUtil.js","pbf":"/Users/ryanwhitley/Documents/GitHub/Mapfolio/GeoForce/GeoAngular/app/lib/Leaflet.MapboxVectorTile/node_modules/pbf/index.js","point-geometry":"/Users/ryanwhitley/Documents/GitHub/Mapfolio/GeoForce/GeoAngular/app/lib/Leaflet.MapboxVectorTile/node_modules/point-geometry/index.js","vector-tile":"/Users/ryanwhitley/Documents/GitHub/Mapfolio/GeoForce/GeoAngular/app/lib/Leaflet.MapboxVectorTile/node_modules/vector-tile/index.js"}],"/Users/ryanwhitley/Documents/GitHub/Mapfolio/GeoForce/GeoAngular/app/lib/Leaflet.MapboxVectorTile/src/MVTUtil.js":[function(require,module,exports){
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

},{}],"/Users/ryanwhitley/Documents/GitHub/Mapfolio/GeoForce/GeoAngular/app/lib/Leaflet.MapboxVectorTile/src/StaticLabel/StaticLabel.js":[function(require,module,exports){
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

},{"../MVTUtil":"/Users/ryanwhitley/Documents/GitHub/Mapfolio/GeoForce/GeoAngular/app/lib/Leaflet.MapboxVectorTile/src/MVTUtil.js"}],"/Users/ryanwhitley/Documents/GitHub/Mapfolio/GeoForce/GeoAngular/app/lib/featurelabel/FeatureSet.js":[function(require,module,exports){
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

},{"./Label.js":"/Users/ryanwhitley/Documents/GitHub/Mapfolio/GeoForce/GeoAngular/app/lib/featurelabel/Label.js","./featurelabel":"/Users/ryanwhitley/Documents/GitHub/Mapfolio/GeoForce/GeoAngular/app/lib/featurelabel/featurelabel.js"}],"/Users/ryanwhitley/Documents/GitHub/Mapfolio/GeoForce/GeoAngular/app/lib/featurelabel/Label.js":[function(require,module,exports){
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

},{}],"/Users/ryanwhitley/Documents/GitHub/Mapfolio/GeoForce/GeoAngular/app/lib/featurelabel/featurelabel.js":[function(require,module,exports){
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

},{"./leaflet-patch":"/Users/ryanwhitley/Documents/GitHub/Mapfolio/GeoForce/GeoAngular/app/lib/featurelabel/leaflet-patch.js"}],"/Users/ryanwhitley/Documents/GitHub/Mapfolio/GeoForce/GeoAngular/app/lib/featurelabel/leaflet-patch.js":[function(require,module,exports){
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
},{"./featurelabel":"/Users/ryanwhitley/Documents/GitHub/Mapfolio/GeoForce/GeoAngular/app/lib/featurelabel/featurelabel.js"}],"/Users/ryanwhitley/Documents/GitHub/Mapfolio/GeoForce/GeoAngular/app/scripts/app.js":[function(require,module,exports){
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
    .when('/default', '/map@0.1,0.1,2(satellite,gadm0),disaster')
    .when('/phl', '/map@11.759815,121.893311,6(redcross,phl),disaster')
    .otherwise(localStorage.getItem('defaultRoute') || '/map@0,0,2(satellite,gadm0),disaster');

  $stateProvider
    .state('main', {
      url: '/map@:lat,:lng,:zoom(*layers),:theme?zoom-extent&stories&layers-panel&filters-panel&filters&legend&basemaps&info&title&details-panel&search-panel&sf_id&level&themelabels',
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
      url: '/map@:lat,:lng,:zoom(*layers):theme/upload?zoom-extent&stories&layers-panel&filters-panel&filters&legend&basemaps&info&title&details-panel&search-panel&sf_id&level&themelabels',
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
       url: '/map@:lat,:lng,:zoom(*layers),:theme/export?zoom-extent&stories&layers-panel&filters-panel&filters&legend&basemaps&info&title&details-panel&search-panel&sf_id&level&themelabels',
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


},{"../lib/Leaflet.MapboxVectorTile/src/MVTSource.js":"/Users/ryanwhitley/Documents/GitHub/Mapfolio/GeoForce/GeoAngular/app/lib/Leaflet.MapboxVectorTile/src/MVTSource.js","./controllers/basemaps":"/Users/ryanwhitley/Documents/GitHub/Mapfolio/GeoForce/GeoAngular/app/scripts/controllers/basemaps.js","./controllers/breadcrumbs":"/Users/ryanwhitley/Documents/GitHub/Mapfolio/GeoForce/GeoAngular/app/scripts/controllers/breadcrumbs.js","./controllers/details":"/Users/ryanwhitley/Documents/GitHub/Mapfolio/GeoForce/GeoAngular/app/scripts/controllers/details.js","./controllers/export":"/Users/ryanwhitley/Documents/GitHub/Mapfolio/GeoForce/GeoAngular/app/scripts/controllers/export.js","./controllers/filters":"/Users/ryanwhitley/Documents/GitHub/Mapfolio/GeoForce/GeoAngular/app/scripts/controllers/filters.js","./controllers/info":"/Users/ryanwhitley/Documents/GitHub/Mapfolio/GeoForce/GeoAngular/app/scripts/controllers/info.js","./controllers/layers":"/Users/ryanwhitley/Documents/GitHub/Mapfolio/GeoForce/GeoAngular/app/scripts/controllers/layers.js","./controllers/legend":"/Users/ryanwhitley/Documents/GitHub/Mapfolio/GeoForce/GeoAngular/app/scripts/controllers/legend.js","./controllers/main":"/Users/ryanwhitley/Documents/GitHub/Mapfolio/GeoForce/GeoAngular/app/scripts/controllers/main.js","./controllers/map":"/Users/ryanwhitley/Documents/GitHub/Mapfolio/GeoForce/GeoAngular/app/scripts/controllers/map.js","./controllers/navbar":"/Users/ryanwhitley/Documents/GitHub/Mapfolio/GeoForce/GeoAngular/app/scripts/controllers/navbar.js","./controllers/search":"/Users/ryanwhitley/Documents/GitHub/Mapfolio/GeoForce/GeoAngular/app/scripts/controllers/search.js","./controllers/side-view":"/Users/ryanwhitley/Documents/GitHub/Mapfolio/GeoForce/GeoAngular/app/scripts/controllers/side-view.js","./controllers/stories":"/Users/ryanwhitley/Documents/GitHub/Mapfolio/GeoForce/GeoAngular/app/scripts/controllers/stories.js","./controllers/theme":"/Users/ryanwhitley/Documents/GitHub/Mapfolio/GeoForce/GeoAngular/app/scripts/controllers/theme.js","./controllers/upload":"/Users/ryanwhitley/Documents/GitHub/Mapfolio/GeoForce/GeoAngular/app/scripts/controllers/upload.js","./controllers/zoom-extent":"/Users/ryanwhitley/Documents/GitHub/Mapfolio/GeoForce/GeoAngular/app/scripts/controllers/zoom-extent.js","./services/Donuts":"/Users/ryanwhitley/Documents/GitHub/Mapfolio/GeoForce/GeoAngular/app/scripts/services/Donuts.js","./services/LayerConfig":"/Users/ryanwhitley/Documents/GitHub/Mapfolio/GeoForce/GeoAngular/app/scripts/services/LayerConfig.js","./services/StoriesConfig":"/Users/ryanwhitley/Documents/GitHub/Mapfolio/GeoForce/GeoAngular/app/scripts/services/StoriesConfig.js","./services/Vector/VectorProvider":"/Users/ryanwhitley/Documents/GitHub/Mapfolio/GeoForce/GeoAngular/app/scripts/services/Vector/VectorProvider.js"}],"/Users/ryanwhitley/Documents/GitHub/Mapfolio/GeoForce/GeoAngular/app/scripts/controllers/basemaps.js":[function(require,module,exports){
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
},{}],"/Users/ryanwhitley/Documents/GitHub/Mapfolio/GeoForce/GeoAngular/app/scripts/controllers/breadcrumbs.js":[function(require,module,exports){
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

},{}],"/Users/ryanwhitley/Documents/GitHub/Mapfolio/GeoForce/GeoAngular/app/scripts/controllers/details.js":[function(require,module,exports){
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

  var sortDetails = function(){
    var projectkey = Object.keys($scope.groupings)[0];

    // Projects and Project Risk have same sorting rules
    if($scope.groupings.hasOwnProperty('Projects')==true || $scope.groupings.hasOwnProperty('Project Risk')==true){
      $scope.groupings[projectkey] = SortByProjectRisk($scope.groupings[projectkey]);
    };

    if($scope.groupings.hasOwnProperty('Project Health')==true){
      $scope.groupings[projectkey] = SortByProjectHealth($scope.groupings[projectkey]);
    };

    if($scope.groupings.hasOwnProperty('Disasters')==true){
      $scope.groupings['Disasters'] = SoryByDisaster($scope.groupings['Disasters']);
    };

  };

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

      sortDetails();

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
  var SortByProjectHealth = function(arr){
    arr.sort(function (a, b) {
      if (config.ProjectHealthOrder[a.overall_status__c] < config.ProjectHealthOrder[b.overall_status__c]) {
        return 1;
      }
      if (config.ProjectHealthOrder[a.overall_status__c] > config.ProjectHealthOrder[b.overall_status__c]) {
        return -1;
      }
      // a must be equal to b
      return 0;
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

},{}],"/Users/ryanwhitley/Documents/GitHub/Mapfolio/GeoForce/GeoAngular/app/scripts/controllers/export.js":[function(require,module,exports){
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

},{}],"/Users/ryanwhitley/Documents/GitHub/Mapfolio/GeoForce/GeoAngular/app/scripts/controllers/filters.js":[function(require,module,exports){
/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *       on 3/27/14.
 */

module.exports = angular.module('GeoAngular').controller('FiltersCtrl', function($scope, $http, $state, $stateParams) {
  $scope.filterMode = "project"; //Which theme are we filtering?
  $scope.params = $stateParams;
  $scope.navTab = 'sectors';
  $scope.sectors = [];
  $scope.disasterTypes = [];
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

},{}],"/Users/ryanwhitley/Documents/GitHub/Mapfolio/GeoForce/GeoAngular/app/scripts/controllers/info.js":[function(require,module,exports){
/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *       on 3/27/14.
 */

module.exports = angular.module('GeoAngular').controller('InfoCtrl', function($scope) {
  $scope.params = $stateParams;
});
},{}],"/Users/ryanwhitley/Documents/GitHub/Mapfolio/GeoForce/GeoAngular/app/scripts/controllers/layers.js":[function(require,module,exports){
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

  $scope.themeLabels = { isChecked: $stateParams.themelabels || true };

  $scope.themeLayer = LayerConfig.theme;

  $scope.updateThemeLabel = function() {
    if ($scope.themeLabels.isChecked === true) {
      $stateParams.themelabels = true;
    }
    else {
      //remove from stateparams
      delete $stateParams.themelabels;
    }

    var state = $state.current.name || 'main';
    $state.go(state, $stateParams);
  }

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

  $scope.$on('route-update', function() {
    //Check the stateParams
    //Specifically, see about the label properties being checked.

    var checked = ($stateParams.themelabels && $stateParams.themelabels.toLowerCase() === 'true');
    $scope.themeLabels = { isChecked: checked };

    //If themeLabels is not checked, remove the labels.
    //Refresh the theme layer

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


},{}],"/Users/ryanwhitley/Documents/GitHub/Mapfolio/GeoForce/GeoAngular/app/scripts/controllers/legend.js":[function(require,module,exports){
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

},{}],"/Users/ryanwhitley/Documents/GitHub/Mapfolio/GeoForce/GeoAngular/app/scripts/controllers/main.js":[function(require,module,exports){
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

  if (themeStr !== window.prevthemeStr) {
    window.prevthemeStr = themeStr;
    $rootScope.$broadcast('theme-update', themeStr);
  }

});

},{}],"/Users/ryanwhitley/Documents/GitHub/Mapfolio/GeoForce/GeoAngular/app/scripts/controllers/map.js":[function(require,module,exports){
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

  $scope.toggleState = function (stateName) {
    var state = $state.current.name !== stateName ? stateName : 'main';
    $state.go(state, $stateParams);
  };

  var lastLayersStr = '';
  var lastThemeLabels;
  var lastBasemapUrl = null;
  var basemapLayer = null;
  var layersStr = null;
  var overlayNames = [];
  var overlays = [];
  var overlays_dictionary = {};
  var theme = null;
  var filters = null;

  function redraw() {
    var lat = parseFloat($stateParams.lat) || 0;
    var lng = parseFloat($stateParams.lng) || 0;
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

    if (typeof map === 'object' && (c.lat != 0 && c.lng != 0)) {
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
  $scope.$on('route-update', function () {
    if ($scope.blur === 'blur' && $state.current.name !== 'landing') {
      $scope.blur = '';
    }

    var c;
    if (!$scope.center) {
      var lat = parseFloat($stateParams.lat) || 0;
      var lng = parseFloat($stateParams.lng) || 0;
      var zoom = parseFloat($stateParams.zoom) || 8;

      c = $scope.center = {
        lat: lat,
        lng: lng,
        zoom: zoom
      };
    }
    else {
      c = $scope.center;
    }

    var lat = c.lat.toFixed(6);
    var lng = c.lng.toFixed(6);
    var zoom = c.zoom.toString();
    if (mapMoveEnd) {
      mapMoveEnd = false;
    } else if ($stateParams.lat !== lat
      || $stateParams.lng !== lng
      || $stateParams.zoom !== zoom
      || $stateParams.layers !== layersStr
      || $stateParams.theme !== theme
      || $stateParams.filters !== filters) {

      console.log('map.js route-update Updating Map...');
      redraw();
    }

    //Should we show 'bubbles' on top of the theme layer?
    var themeLabels = ($stateParams.themelabels && $stateParams.themelabels.toLowerCase() === 'true');
    if (themeLabels != lastThemeLabels) {

      onThemeLabelChanged();
      lastThemeLabels = themeLabels;
    }

  });

  $scope.$on('blur', function () {
    $scope.blur = 'blur';
  });

  //this takes in a WKT GeoJSON Extent geometry
  $scope.zoomToExtent = function (extent) {
    delete $stateParams['zoom-extent'];

    var southWest = {lat: extent[0][1], lng: extent[0][0]};
    var northEast = {lat: extent[2][1], lng: extent[2][0]};

    $scope.bounds = L.latLngBounds(southWest, northEast);

    //Zoom to bounds
    map.fitBounds($scope.bounds);
  };

  //This take a leaflet bounds object and handles it.
  delete $stateParams['zoom-extent'];
  $scope.zoomToBounds = function (bounds) {

    //Build new bounds object
    $scope.bounds = L.latLngBounds(bounds.getSouthWest(), bounds.getNorthEast());

    //Zoom to bounds
    map.fitBounds($scope.bounds);
  };


  function broadcastBBox() {
    //NH TODO Fixme. Find a better solution than a spin lock.
    if (!wait) {
      wait = true;
      setTimeout(function () {

        //Get the MIN/MAX Tile ZYX extents.
        //If they haven't chagned, then don't proceed.

        //When the page loads, no zoom or center has been set, so don't get bounds until that has happened

        if (!map.getZoom()) {
          return;
        }
        var tileBounds = getCurrentTileBounds(map);
        var zoom = map.getZoom();

        $scope.zoom = zoom;
        var minx = tileBounds.min.x;
        var maxx = tileBounds.max.x;
        var miny = tileBounds.min.y;
        var maxy = tileBounds.max.y;

        //Detect negative mins and set to 0
        if (minx < 0) minx = 0;
        if (miny < 0) miny = 0;

        //Check for extreme values greater than the tile bounds
        var extremeValue = Math.pow(2, zoom) - 1;

        if (maxx > extremeValue) maxx = extremeValue;
        if (maxy > extremeValue) maxy = extremeValue;

        var str = zoom + "," + minx + ',' +
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

  function getCurrentTileBounds(map) {
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

    if ($stateParams.lat !== lat
      || $stateParams.lng !== lng
      || $stateParams.zoom !== zoom) {


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
  } catch (e) {
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
      else if (currOverlay && currOverlay._map) {
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
    for (var len2 = overlays.length; i < len2; ++i) {
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
   * When the theme label state changes, this function will be fired.
   * @param theme
   */
  function onThemeLabelChanged() {

    var layer = overlays_dictionary["gadm0"];

    if (layer) {

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

},{}],"/Users/ryanwhitley/Documents/GitHub/Mapfolio/GeoForce/GeoAngular/app/scripts/controllers/navbar.js":[function(require,module,exports){
module.exports = angular.module('GeoAngular').controller('NavBarCtrl', function($scope, $state, $stateParams) {

  $scope.params = $stateParams;

});

},{}],"/Users/ryanwhitley/Documents/GitHub/Mapfolio/GeoForce/GeoAngular/app/scripts/controllers/search.js":[function(require,module,exports){
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

},{}],"/Users/ryanwhitley/Documents/GitHub/Mapfolio/GeoForce/GeoAngular/app/scripts/controllers/side-view.js":[function(require,module,exports){
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

},{}],"/Users/ryanwhitley/Documents/GitHub/Mapfolio/GeoForce/GeoAngular/app/scripts/controllers/stories.js":[function(require,module,exports){
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
},{}],"/Users/ryanwhitley/Documents/GitHub/Mapfolio/GeoForce/GeoAngular/app/scripts/controllers/theme.js":[function(require,module,exports){
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
    disasterType: 'Disaster Type',
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

  $scope.disasterType = function () {
    $scope.themeName = themeNameHash.disasterType;
    ensureThemeCount();
    $scope.setThemeQueryParam('disasterType');
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
    //close details panel on theme change
    if($scope.isParam('details-panel') == true){
      if($stateParams.theme !== theme){
        $scope.closeParam('details-panel');
      }
    }
    $stateParams.theme = theme;

    //close filters panel if theme is Project Risk/Health or None
    if((($stateParams.theme !== 'project' && $stateParams.theme !== 'disaster') && $stateParams.theme !== null)){
      $scope.closeParam('filters-panel');
    }

    var state = $state.current.name || 'main';
    $state.go(state, $stateParams);
  };

  $scope.themeName = themeNameHash[$stateParams.theme] || themeNameHash[config.defaultTheme];

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

},{}],"/Users/ryanwhitley/Documents/GitHub/Mapfolio/GeoForce/GeoAngular/app/scripts/controllers/upload.js":[function(require,module,exports){
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

},{}],"/Users/ryanwhitley/Documents/GitHub/Mapfolio/GeoForce/GeoAngular/app/scripts/controllers/zoom-extent.js":[function(require,module,exports){
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

},{}],"/Users/ryanwhitley/Documents/GitHub/Mapfolio/GeoForce/GeoAngular/app/scripts/services/Donuts.js":[function(require,module,exports){
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

},{}],"/Users/ryanwhitley/Documents/GitHub/Mapfolio/GeoForce/GeoAngular/app/scripts/services/LayerConfig.js":[function(require,module,exports){
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

},{"../../../../Config/layers/all.js":"/Users/ryanwhitley/Documents/GitHub/Mapfolio/GeoForce/Config/layers/all.js","../../../../Config/layers/basemaps.js":"/Users/ryanwhitley/Documents/GitHub/Mapfolio/GeoForce/Config/layers/basemaps.js","../../../../Config/layers/disaster.js":"/Users/ryanwhitley/Documents/GitHub/Mapfolio/GeoForce/Config/layers/disaster.js","../../../../Config/layers/other.js":"/Users/ryanwhitley/Documents/GitHub/Mapfolio/GeoForce/Config/layers/other.js","../../../../Config/layers/project.js":"/Users/ryanwhitley/Documents/GitHub/Mapfolio/GeoForce/Config/layers/project.js","../../../../Config/layers/projecthealth.js":"/Users/ryanwhitley/Documents/GitHub/Mapfolio/GeoForce/Config/layers/projecthealth.js","../../../../Config/layers/projectrisk.js":"/Users/ryanwhitley/Documents/GitHub/Mapfolio/GeoForce/Config/layers/projectrisk.js","../../../../Config/layers/vectortiles.js":"/Users/ryanwhitley/Documents/GitHub/Mapfolio/GeoForce/Config/layers/vectortiles.js"}],"/Users/ryanwhitley/Documents/GitHub/Mapfolio/GeoForce/GeoAngular/app/scripts/services/StoriesConfig.js":[function(require,module,exports){
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

},{}],"/Users/ryanwhitley/Documents/GitHub/Mapfolio/GeoForce/GeoAngular/app/scripts/services/Vector/BBoxGeoJSON.js":[function(require,module,exports){
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

},{"../../../lib/featurelabel/FeatureSet":"/Users/ryanwhitley/Documents/GitHub/Mapfolio/GeoForce/GeoAngular/app/lib/featurelabel/FeatureSet.js","./resource":"/Users/ryanwhitley/Documents/GitHub/Mapfolio/GeoForce/GeoAngular/app/scripts/services/Vector/resource.js","./vector":"/Users/ryanwhitley/Documents/GitHub/Mapfolio/GeoForce/GeoAngular/app/scripts/services/Vector/vector.js"}],"/Users/ryanwhitley/Documents/GitHub/Mapfolio/GeoForce/GeoAngular/app/scripts/services/Vector/GeoJSON.js":[function(require,module,exports){
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

},{"./resource":"/Users/ryanwhitley/Documents/GitHub/Mapfolio/GeoForce/GeoAngular/app/scripts/services/Vector/resource.js","./vector":"/Users/ryanwhitley/Documents/GitHub/Mapfolio/GeoForce/GeoAngular/app/scripts/services/Vector/vector.js"}],"/Users/ryanwhitley/Documents/GitHub/Mapfolio/GeoForce/GeoAngular/app/scripts/services/Vector/KML.js":[function(require,module,exports){
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

},{"./resource":"/Users/ryanwhitley/Documents/GitHub/Mapfolio/GeoForce/GeoAngular/app/scripts/services/Vector/resource.js","./vector":"/Users/ryanwhitley/Documents/GitHub/Mapfolio/GeoForce/GeoAngular/app/scripts/services/Vector/vector.js"}],"/Users/ryanwhitley/Documents/GitHub/Mapfolio/GeoForce/GeoAngular/app/scripts/services/Vector/Resource.js":[function(require,module,exports){
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

},{"./vector":"/Users/ryanwhitley/Documents/GitHub/Mapfolio/GeoForce/GeoAngular/app/scripts/services/Vector/vector.js"}],"/Users/ryanwhitley/Documents/GitHub/Mapfolio/GeoForce/GeoAngular/app/scripts/services/Vector/VectorProvider.js":[function(require,module,exports){
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


},{"./BBoxGeoJSON":"/Users/ryanwhitley/Documents/GitHub/Mapfolio/GeoForce/GeoAngular/app/scripts/services/Vector/BBoxGeoJSON.js","./GeoJSON":"/Users/ryanwhitley/Documents/GitHub/Mapfolio/GeoForce/GeoAngular/app/scripts/services/Vector/GeoJSON.js","./KML":"/Users/ryanwhitley/Documents/GitHub/Mapfolio/GeoForce/GeoAngular/app/scripts/services/Vector/KML.js","./Resource":"/Users/ryanwhitley/Documents/GitHub/Mapfolio/GeoForce/GeoAngular/app/scripts/services/Vector/Resource.js","./csv":"/Users/ryanwhitley/Documents/GitHub/Mapfolio/GeoForce/GeoAngular/app/scripts/services/Vector/csv.js","./pbf":"/Users/ryanwhitley/Documents/GitHub/Mapfolio/GeoForce/GeoAngular/app/scripts/services/Vector/pbf.js","./vector":"/Users/ryanwhitley/Documents/GitHub/Mapfolio/GeoForce/GeoAngular/app/scripts/services/Vector/vector.js"}],"/Users/ryanwhitley/Documents/GitHub/Mapfolio/GeoForce/GeoAngular/app/scripts/services/Vector/csv.js":[function(require,module,exports){
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

},{"./resource":"/Users/ryanwhitley/Documents/GitHub/Mapfolio/GeoForce/GeoAngular/app/scripts/services/Vector/resource.js","./vector":"/Users/ryanwhitley/Documents/GitHub/Mapfolio/GeoForce/GeoAngular/app/scripts/services/Vector/vector.js"}],"/Users/ryanwhitley/Documents/GitHub/Mapfolio/GeoForce/GeoAngular/app/scripts/services/Vector/pbf.js":[function(require,module,exports){
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
  this._style = options.style; //Store the real function in a local property.

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

  options.style = function(vtf){

    return self._style(vtf, $rootScope);

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

  //for disasterType, just use the disaster endpoint
  if(theme.toLowerCase() == 'disastertype'){
    theme = 'disaster';
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





},{"./resource":"/Users/ryanwhitley/Documents/GitHub/Mapfolio/GeoForce/GeoAngular/app/scripts/services/Vector/resource.js","./vector":"/Users/ryanwhitley/Documents/GitHub/Mapfolio/GeoForce/GeoAngular/app/scripts/services/Vector/vector.js"}],"/Users/ryanwhitley/Documents/GitHub/Mapfolio/GeoForce/GeoAngular/app/scripts/services/Vector/resource.js":[function(require,module,exports){
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

},{"./vector":"/Users/ryanwhitley/Documents/GitHub/Mapfolio/GeoForce/GeoAngular/app/scripts/services/Vector/vector.js"}],"/Users/ryanwhitley/Documents/GitHub/Mapfolio/GeoForce/GeoAngular/app/scripts/services/Vector/vector.js":[function(require,module,exports){
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




},{}],"/usr/local/lib/node_modules/watchify/node_modules/browserify/node_modules/buffer/index.js":[function(require,module,exports){
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */

var base64 = require('base64-js')
var ieee754 = require('ieee754')

exports.Buffer = Buffer
exports.SlowBuffer = Buffer
exports.INSPECT_MAX_BYTES = 50
Buffer.poolSize = 8192

/**
 * If `TYPED_ARRAY_SUPPORT`:
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
 * We detect these buggy browsers and set `TYPED_ARRAY_SUPPORT` to `false` so they will
 * get the Object implementation, which is slower but will work correctly.
 */
var TYPED_ARRAY_SUPPORT = (function () {
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
    throw new Error('First argument needs to be a number, array or string.')

  var buf
  if (TYPED_ARRAY_SUPPORT) {
    // Preferred: Return an augmented `Uint8Array` instance for best performance
    buf = Buffer._augment(new Uint8Array(length))
  } else {
    // Fallback: Return THIS instance of Buffer (created by `new`)
    buf = this
    buf.length = length
    buf._isBuffer = true
  }

  var i
  if (TYPED_ARRAY_SUPPORT && typeof subject.byteLength === 'number') {
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
  } else if (type === 'number' && !TYPED_ARRAY_SUPPORT && !noZero) {
    for (i = 0; i < length; i++) {
      buf[i] = 0
    }
  }

  return buf
}

// STATIC METHODS
// ==============

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

Buffer.isBuffer = function (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.byteLength = function (str, encoding) {
  var ret
  str = str.toString()
  switch (encoding || 'utf8') {
    case 'hex':
      ret = str.length / 2
      break
    case 'utf8':
    case 'utf-8':
      ret = utf8ToBytes(str).length
      break
    case 'ascii':
    case 'binary':
    case 'raw':
      ret = str.length
      break
    case 'base64':
      ret = base64ToBytes(str).length
      break
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      ret = str.length * 2
      break
    default:
      throw new Error('Unknown encoding')
  }
  return ret
}

Buffer.concat = function (list, totalLength) {
  assert(isArray(list), 'Usage: Buffer.concat(list[, length])')

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

Buffer.compare = function (a, b) {
  assert(Buffer.isBuffer(a) && Buffer.isBuffer(b), 'Arguments must be Buffers')
  var x = a.length
  var y = b.length
  for (var i = 0, len = Math.min(x, y); i < len && a[i] === b[i]; i++) {}
  if (i !== len) {
    x = a[i]
    y = b[i]
  }
  if (x < y) {
    return -1
  }
  if (y < x) {
    return 1
  }
  return 0
}

// BUFFER INSTANCE METHODS
// =======================

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
  assert(strLen % 2 === 0, 'Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; i++) {
    var byte = parseInt(string.substr(i * 2, 2), 16)
    assert(!isNaN(byte), 'Invalid hex string')
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
  var charsWritten = blitBuffer(utf16leToBytes(string), buf, offset, length)
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
      throw new Error('Unknown encoding')
  }
  return ret
}

Buffer.prototype.toString = function (encoding, start, end) {
  var self = this

  encoding = String(encoding || 'utf8').toLowerCase()
  start = Number(start) || 0
  end = (end === undefined) ? self.length : Number(end)

  // Fastpath empty strings
  if (end === start)
    return ''

  var ret
  switch (encoding) {
    case 'hex':
      ret = hexSlice(self, start, end)
      break
    case 'utf8':
    case 'utf-8':
      ret = utf8Slice(self, start, end)
      break
    case 'ascii':
      ret = asciiSlice(self, start, end)
      break
    case 'binary':
      ret = binarySlice(self, start, end)
      break
    case 'base64':
      ret = base64Slice(self, start, end)
      break
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      ret = utf16leSlice(self, start, end)
      break
    default:
      throw new Error('Unknown encoding')
  }
  return ret
}

Buffer.prototype.toJSON = function () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

Buffer.prototype.equals = function (b) {
  assert(Buffer.isBuffer(b), 'Argument must be a Buffer')
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.compare = function (b) {
  assert(Buffer.isBuffer(b), 'Argument must be a Buffer')
  return Buffer.compare(this, b)
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
  assert(end >= start, 'sourceEnd < sourceStart')
  assert(target_start >= 0 && target_start < target.length,
      'targetStart out of bounds')
  assert(start >= 0 && start < source.length, 'sourceStart out of bounds')
  assert(end >= 0 && end <= source.length, 'sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length)
    end = this.length
  if (target.length - target_start < end - start)
    end = target.length - target_start + start

  var len = end - start

  if (len < 100 || !TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < len; i++) {
      target[i + target_start] = this[i + start]
    }
  } else {
    target._set(this.subarray(start, start + len), target_start)
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

  if (TYPED_ARRAY_SUPPORT) {
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

Buffer.prototype.readUInt8 = function (offset, noAssert) {
  if (!noAssert) {
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset < this.length, 'Trying to read beyond buffer length')
  }

  if (offset >= this.length)
    return

  return this[offset]
}

function readUInt16 (buf, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 1 < buf.length, 'Trying to read beyond buffer length')
  }

  var len = buf.length
  if (offset >= len)
    return

  var val
  if (littleEndian) {
    val = buf[offset]
    if (offset + 1 < len)
      val |= buf[offset + 1] << 8
  } else {
    val = buf[offset] << 8
    if (offset + 1 < len)
      val |= buf[offset + 1]
  }
  return val
}

Buffer.prototype.readUInt16LE = function (offset, noAssert) {
  return readUInt16(this, offset, true, noAssert)
}

Buffer.prototype.readUInt16BE = function (offset, noAssert) {
  return readUInt16(this, offset, false, noAssert)
}

function readUInt32 (buf, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 3 < buf.length, 'Trying to read beyond buffer length')
  }

  var len = buf.length
  if (offset >= len)
    return

  var val
  if (littleEndian) {
    if (offset + 2 < len)
      val = buf[offset + 2] << 16
    if (offset + 1 < len)
      val |= buf[offset + 1] << 8
    val |= buf[offset]
    if (offset + 3 < len)
      val = val + (buf[offset + 3] << 24 >>> 0)
  } else {
    if (offset + 1 < len)
      val = buf[offset + 1] << 16
    if (offset + 2 < len)
      val |= buf[offset + 2] << 8
    if (offset + 3 < len)
      val |= buf[offset + 3]
    val = val + (buf[offset] << 24 >>> 0)
  }
  return val
}

Buffer.prototype.readUInt32LE = function (offset, noAssert) {
  return readUInt32(this, offset, true, noAssert)
}

Buffer.prototype.readUInt32BE = function (offset, noAssert) {
  return readUInt32(this, offset, false, noAssert)
}

Buffer.prototype.readInt8 = function (offset, noAssert) {
  if (!noAssert) {
    assert(offset !== undefined && offset !== null,
        'missing offset')
    assert(offset < this.length, 'Trying to read beyond buffer length')
  }

  if (offset >= this.length)
    return

  var neg = this[offset] & 0x80
  if (neg)
    return (0xff - this[offset] + 1) * -1
  else
    return this[offset]
}

function readInt16 (buf, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 1 < buf.length, 'Trying to read beyond buffer length')
  }

  var len = buf.length
  if (offset >= len)
    return

  var val = readUInt16(buf, offset, littleEndian, true)
  var neg = val & 0x8000
  if (neg)
    return (0xffff - val + 1) * -1
  else
    return val
}

Buffer.prototype.readInt16LE = function (offset, noAssert) {
  return readInt16(this, offset, true, noAssert)
}

Buffer.prototype.readInt16BE = function (offset, noAssert) {
  return readInt16(this, offset, false, noAssert)
}

function readInt32 (buf, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 3 < buf.length, 'Trying to read beyond buffer length')
  }

  var len = buf.length
  if (offset >= len)
    return

  var val = readUInt32(buf, offset, littleEndian, true)
  var neg = val & 0x80000000
  if (neg)
    return (0xffffffff - val + 1) * -1
  else
    return val
}

Buffer.prototype.readInt32LE = function (offset, noAssert) {
  return readInt32(this, offset, true, noAssert)
}

Buffer.prototype.readInt32BE = function (offset, noAssert) {
  return readInt32(this, offset, false, noAssert)
}

function readFloat (buf, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset + 3 < buf.length, 'Trying to read beyond buffer length')
  }

  return ieee754.read(buf, offset, littleEndian, 23, 4)
}

Buffer.prototype.readFloatLE = function (offset, noAssert) {
  return readFloat(this, offset, true, noAssert)
}

Buffer.prototype.readFloatBE = function (offset, noAssert) {
  return readFloat(this, offset, false, noAssert)
}

function readDouble (buf, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset + 7 < buf.length, 'Trying to read beyond buffer length')
  }

  return ieee754.read(buf, offset, littleEndian, 52, 8)
}

Buffer.prototype.readDoubleLE = function (offset, noAssert) {
  return readDouble(this, offset, true, noAssert)
}

Buffer.prototype.readDoubleBE = function (offset, noAssert) {
  return readDouble(this, offset, false, noAssert)
}

Buffer.prototype.writeUInt8 = function (value, offset, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset < this.length, 'trying to write beyond buffer length')
    verifuint(value, 0xff)
  }

  if (offset >= this.length) return

  this[offset] = value
  return offset + 1
}

function writeUInt16 (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 1 < buf.length, 'trying to write beyond buffer length')
    verifuint(value, 0xffff)
  }

  var len = buf.length
  if (offset >= len)
    return

  for (var i = 0, j = Math.min(len - offset, 2); i < j; i++) {
    buf[offset + i] =
        (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
            (littleEndian ? i : 1 - i) * 8
  }
  return offset + 2
}

Buffer.prototype.writeUInt16LE = function (value, offset, noAssert) {
  return writeUInt16(this, value, offset, true, noAssert)
}

Buffer.prototype.writeUInt16BE = function (value, offset, noAssert) {
  return writeUInt16(this, value, offset, false, noAssert)
}

function writeUInt32 (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 3 < buf.length, 'trying to write beyond buffer length')
    verifuint(value, 0xffffffff)
  }

  var len = buf.length
  if (offset >= len)
    return

  for (var i = 0, j = Math.min(len - offset, 4); i < j; i++) {
    buf[offset + i] =
        (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
  return offset + 4
}

Buffer.prototype.writeUInt32LE = function (value, offset, noAssert) {
  return writeUInt32(this, value, offset, true, noAssert)
}

Buffer.prototype.writeUInt32BE = function (value, offset, noAssert) {
  return writeUInt32(this, value, offset, false, noAssert)
}

Buffer.prototype.writeInt8 = function (value, offset, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset < this.length, 'Trying to write beyond buffer length')
    verifsint(value, 0x7f, -0x80)
  }

  if (offset >= this.length)
    return

  if (value >= 0)
    this.writeUInt8(value, offset, noAssert)
  else
    this.writeUInt8(0xff + value + 1, offset, noAssert)
  return offset + 1
}

function writeInt16 (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 1 < buf.length, 'Trying to write beyond buffer length')
    verifsint(value, 0x7fff, -0x8000)
  }

  var len = buf.length
  if (offset >= len)
    return

  if (value >= 0)
    writeUInt16(buf, value, offset, littleEndian, noAssert)
  else
    writeUInt16(buf, 0xffff + value + 1, offset, littleEndian, noAssert)
  return offset + 2
}

Buffer.prototype.writeInt16LE = function (value, offset, noAssert) {
  return writeInt16(this, value, offset, true, noAssert)
}

Buffer.prototype.writeInt16BE = function (value, offset, noAssert) {
  return writeInt16(this, value, offset, false, noAssert)
}

function writeInt32 (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 3 < buf.length, 'Trying to write beyond buffer length')
    verifsint(value, 0x7fffffff, -0x80000000)
  }

  var len = buf.length
  if (offset >= len)
    return

  if (value >= 0)
    writeUInt32(buf, value, offset, littleEndian, noAssert)
  else
    writeUInt32(buf, 0xffffffff + value + 1, offset, littleEndian, noAssert)
  return offset + 4
}

Buffer.prototype.writeInt32LE = function (value, offset, noAssert) {
  return writeInt32(this, value, offset, true, noAssert)
}

Buffer.prototype.writeInt32BE = function (value, offset, noAssert) {
  return writeInt32(this, value, offset, false, noAssert)
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 3 < buf.length, 'Trying to write beyond buffer length')
    verifIEEE754(value, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }

  var len = buf.length
  if (offset >= len)
    return

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
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 7 < buf.length,
        'Trying to write beyond buffer length')
    verifIEEE754(value, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }

  var len = buf.length
  if (offset >= len)
    return

  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// fill(value, start=0, end=buffer.length)
Buffer.prototype.fill = function (value, start, end) {
  if (!value) value = 0
  if (!start) start = 0
  if (!end) end = this.length

  assert(end >= start, 'end < start')

  // Fill 0 bytes; we're done
  if (end === start) return
  if (this.length === 0) return

  assert(start >= 0 && start < this.length, 'start out of bounds')
  assert(end >= 0 && end <= this.length, 'end out of bounds')

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

Buffer.prototype.inspect = function () {
  var out = []
  var len = this.length
  for (var i = 0; i < len; i++) {
    out[i] = toHex(this[i])
    if (i === exports.INSPECT_MAX_BYTES) {
      out[i + 1] = '...'
      break
    }
  }
  return '<Buffer ' + out.join(' ') + '>'
}

/**
 * Creates a new `ArrayBuffer` with the *copied* memory of the buffer instance.
 * Added in Node 0.12. Only available in browsers that support ArrayBuffer.
 */
Buffer.prototype.toArrayBuffer = function () {
  if (typeof Uint8Array !== 'undefined') {
    if (TYPED_ARRAY_SUPPORT) {
      return (new Buffer(this)).buffer
    } else {
      var buf = new Uint8Array(this.length)
      for (var i = 0, len = buf.length; i < len; i += 1) {
        buf[i] = this[i]
      }
      return buf.buffer
    }
  } else {
    throw new Error('Buffer.toArrayBuffer not supported in this browser')
  }
}

// HELPER FUNCTIONS
// ================

var BP = Buffer.prototype

/**
 * Augment a Uint8Array *instance* (not the Uint8Array class!) with Buffer methods
 */
Buffer._augment = function (arr) {
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

function isArray (subject) {
  return (Array.isArray || function (subject) {
    return Object.prototype.toString.call(subject) === '[object Array]'
  })(subject)
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

function blitBuffer (src, dst, offset, length) {
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

/*
 * We have to make sure that the value is a valid integer. This means that it
 * is non-negative. It has no fractional component and that it does not
 * exceed the maximum allowed value.
 */
function verifuint (value, max) {
  assert(typeof value === 'number', 'cannot write a non-number as a number')
  assert(value >= 0, 'specified a negative value for writing an unsigned value')
  assert(value <= max, 'value is larger than maximum value for type')
  assert(Math.floor(value) === value, 'value has a fractional component')
}

function verifsint (value, max, min) {
  assert(typeof value === 'number', 'cannot write a non-number as a number')
  assert(value <= max, 'value larger than maximum allowed value')
  assert(value >= min, 'value smaller than minimum allowed value')
  assert(Math.floor(value) === value, 'value has a fractional component')
}

function verifIEEE754 (value, max, min) {
  assert(typeof value === 'number', 'cannot write a non-number as a number')
  assert(value <= max, 'value larger than maximum allowed value')
  assert(value >= min, 'value smaller than minimum allowed value')
}

function assert (test, message) {
  if (!test) throw new Error(message || 'Failed assertion')
}

},{"base64-js":"/usr/local/lib/node_modules/watchify/node_modules/browserify/node_modules/buffer/node_modules/base64-js/lib/b64.js","ieee754":"/usr/local/lib/node_modules/watchify/node_modules/browserify/node_modules/buffer/node_modules/ieee754/index.js"}],"/usr/local/lib/node_modules/watchify/node_modules/browserify/node_modules/buffer/node_modules/base64-js/lib/b64.js":[function(require,module,exports){
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

},{}],"/usr/local/lib/node_modules/watchify/node_modules/browserify/node_modules/buffer/node_modules/ieee754/index.js":[function(require,module,exports){
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

},{}]},{},["/Users/ryanwhitley/Documents/GitHub/Mapfolio/GeoForce/GeoAngular/app/scripts/app.js"])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi91c3IvbG9jYWwvbGliL25vZGVfbW9kdWxlcy93YXRjaGlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiL1VzZXJzL3J5YW53aGl0bGV5L0RvY3VtZW50cy9HaXRIdWIvTWFwZm9saW8vR2VvRm9yY2UvQ29uZmlnL2xheWVycy9hbGwuanMiLCIvVXNlcnMvcnlhbndoaXRsZXkvRG9jdW1lbnRzL0dpdEh1Yi9NYXBmb2xpby9HZW9Gb3JjZS9Db25maWcvbGF5ZXJzL2Jhc2VtYXBzLmpzIiwiL1VzZXJzL3J5YW53aGl0bGV5L0RvY3VtZW50cy9HaXRIdWIvTWFwZm9saW8vR2VvRm9yY2UvQ29uZmlnL2xheWVycy9kaXNhc3Rlci5qcyIsIi9Vc2Vycy9yeWFud2hpdGxleS9Eb2N1bWVudHMvR2l0SHViL01hcGZvbGlvL0dlb0ZvcmNlL0NvbmZpZy9sYXllcnMvb3RoZXIuanMiLCIvVXNlcnMvcnlhbndoaXRsZXkvRG9jdW1lbnRzL0dpdEh1Yi9NYXBmb2xpby9HZW9Gb3JjZS9Db25maWcvbGF5ZXJzL3Byb2plY3QuanMiLCIvVXNlcnMvcnlhbndoaXRsZXkvRG9jdW1lbnRzL0dpdEh1Yi9NYXBmb2xpby9HZW9Gb3JjZS9Db25maWcvbGF5ZXJzL3Byb2plY3RoZWFsdGguanMiLCIvVXNlcnMvcnlhbndoaXRsZXkvRG9jdW1lbnRzL0dpdEh1Yi9NYXBmb2xpby9HZW9Gb3JjZS9Db25maWcvbGF5ZXJzL3Byb2plY3RyaXNrLmpzIiwiL1VzZXJzL3J5YW53aGl0bGV5L0RvY3VtZW50cy9HaXRIdWIvTWFwZm9saW8vR2VvRm9yY2UvQ29uZmlnL2xheWVycy92ZWN0b3J0aWxlcy5qcyIsIi9Vc2Vycy9yeWFud2hpdGxleS9Eb2N1bWVudHMvR2l0SHViL01hcGZvbGlvL0dlb0ZvcmNlL0dlb0FuZ3VsYXIvYXBwL2xpYi9MZWFmbGV0Lk1hcGJveFZlY3RvclRpbGUvbm9kZV9tb2R1bGVzL3BiZi9pbmRleC5qcyIsIi9Vc2Vycy9yeWFud2hpdGxleS9Eb2N1bWVudHMvR2l0SHViL01hcGZvbGlvL0dlb0ZvcmNlL0dlb0FuZ3VsYXIvYXBwL2xpYi9MZWFmbGV0Lk1hcGJveFZlY3RvclRpbGUvbm9kZV9tb2R1bGVzL3BiZi9ub2RlX21vZHVsZXMvaWVlZTc1NC9pbmRleC5qcyIsIi9Vc2Vycy9yeWFud2hpdGxleS9Eb2N1bWVudHMvR2l0SHViL01hcGZvbGlvL0dlb0ZvcmNlL0dlb0FuZ3VsYXIvYXBwL2xpYi9MZWFmbGV0Lk1hcGJveFZlY3RvclRpbGUvbm9kZV9tb2R1bGVzL3BvaW50LWdlb21ldHJ5L2luZGV4LmpzIiwiL1VzZXJzL3J5YW53aGl0bGV5L0RvY3VtZW50cy9HaXRIdWIvTWFwZm9saW8vR2VvRm9yY2UvR2VvQW5ndWxhci9hcHAvbGliL0xlYWZsZXQuTWFwYm94VmVjdG9yVGlsZS9ub2RlX21vZHVsZXMvdmVjdG9yLXRpbGUvaW5kZXguanMiLCIvVXNlcnMvcnlhbndoaXRsZXkvRG9jdW1lbnRzL0dpdEh1Yi9NYXBmb2xpby9HZW9Gb3JjZS9HZW9Bbmd1bGFyL2FwcC9saWIvTGVhZmxldC5NYXBib3hWZWN0b3JUaWxlL25vZGVfbW9kdWxlcy92ZWN0b3ItdGlsZS9saWIvdmVjdG9ydGlsZS5qcyIsIi9Vc2Vycy9yeWFud2hpdGxleS9Eb2N1bWVudHMvR2l0SHViL01hcGZvbGlvL0dlb0ZvcmNlL0dlb0FuZ3VsYXIvYXBwL2xpYi9MZWFmbGV0Lk1hcGJveFZlY3RvclRpbGUvbm9kZV9tb2R1bGVzL3ZlY3Rvci10aWxlL2xpYi92ZWN0b3J0aWxlZmVhdHVyZS5qcyIsIi9Vc2Vycy9yeWFud2hpdGxleS9Eb2N1bWVudHMvR2l0SHViL01hcGZvbGlvL0dlb0ZvcmNlL0dlb0FuZ3VsYXIvYXBwL2xpYi9MZWFmbGV0Lk1hcGJveFZlY3RvclRpbGUvbm9kZV9tb2R1bGVzL3ZlY3Rvci10aWxlL2xpYi92ZWN0b3J0aWxlbGF5ZXIuanMiLCIvVXNlcnMvcnlhbndoaXRsZXkvRG9jdW1lbnRzL0dpdEh1Yi9NYXBmb2xpby9HZW9Gb3JjZS9HZW9Bbmd1bGFyL2FwcC9saWIvTGVhZmxldC5NYXBib3hWZWN0b3JUaWxlL3NyYy9NVlRGZWF0dXJlLmpzIiwiL1VzZXJzL3J5YW53aGl0bGV5L0RvY3VtZW50cy9HaXRIdWIvTWFwZm9saW8vR2VvRm9yY2UvR2VvQW5ndWxhci9hcHAvbGliL0xlYWZsZXQuTWFwYm94VmVjdG9yVGlsZS9zcmMvTVZUTGF5ZXIuanMiLCIvVXNlcnMvcnlhbndoaXRsZXkvRG9jdW1lbnRzL0dpdEh1Yi9NYXBmb2xpby9HZW9Gb3JjZS9HZW9Bbmd1bGFyL2FwcC9saWIvTGVhZmxldC5NYXBib3hWZWN0b3JUaWxlL3NyYy9NVlRTb3VyY2UuanMiLCIvVXNlcnMvcnlhbndoaXRsZXkvRG9jdW1lbnRzL0dpdEh1Yi9NYXBmb2xpby9HZW9Gb3JjZS9HZW9Bbmd1bGFyL2FwcC9saWIvTGVhZmxldC5NYXBib3hWZWN0b3JUaWxlL3NyYy9NVlRVdGlsLmpzIiwiL1VzZXJzL3J5YW53aGl0bGV5L0RvY3VtZW50cy9HaXRIdWIvTWFwZm9saW8vR2VvRm9yY2UvR2VvQW5ndWxhci9hcHAvbGliL0xlYWZsZXQuTWFwYm94VmVjdG9yVGlsZS9zcmMvU3RhdGljTGFiZWwvU3RhdGljTGFiZWwuanMiLCIvVXNlcnMvcnlhbndoaXRsZXkvRG9jdW1lbnRzL0dpdEh1Yi9NYXBmb2xpby9HZW9Gb3JjZS9HZW9Bbmd1bGFyL2FwcC9saWIvZmVhdHVyZWxhYmVsL0ZlYXR1cmVTZXQuanMiLCIvVXNlcnMvcnlhbndoaXRsZXkvRG9jdW1lbnRzL0dpdEh1Yi9NYXBmb2xpby9HZW9Gb3JjZS9HZW9Bbmd1bGFyL2FwcC9saWIvZmVhdHVyZWxhYmVsL0xhYmVsLmpzIiwiL1VzZXJzL3J5YW53aGl0bGV5L0RvY3VtZW50cy9HaXRIdWIvTWFwZm9saW8vR2VvRm9yY2UvR2VvQW5ndWxhci9hcHAvbGliL2ZlYXR1cmVsYWJlbC9mZWF0dXJlbGFiZWwuanMiLCIvVXNlcnMvcnlhbndoaXRsZXkvRG9jdW1lbnRzL0dpdEh1Yi9NYXBmb2xpby9HZW9Gb3JjZS9HZW9Bbmd1bGFyL2FwcC9saWIvZmVhdHVyZWxhYmVsL2xlYWZsZXQtcGF0Y2guanMiLCIvVXNlcnMvcnlhbndoaXRsZXkvRG9jdW1lbnRzL0dpdEh1Yi9NYXBmb2xpby9HZW9Gb3JjZS9HZW9Bbmd1bGFyL2FwcC9zY3JpcHRzL2FwcC5qcyIsIi9Vc2Vycy9yeWFud2hpdGxleS9Eb2N1bWVudHMvR2l0SHViL01hcGZvbGlvL0dlb0ZvcmNlL0dlb0FuZ3VsYXIvYXBwL3NjcmlwdHMvY29udHJvbGxlcnMvYmFzZW1hcHMuanMiLCIvVXNlcnMvcnlhbndoaXRsZXkvRG9jdW1lbnRzL0dpdEh1Yi9NYXBmb2xpby9HZW9Gb3JjZS9HZW9Bbmd1bGFyL2FwcC9zY3JpcHRzL2NvbnRyb2xsZXJzL2JyZWFkY3J1bWJzLmpzIiwiL1VzZXJzL3J5YW53aGl0bGV5L0RvY3VtZW50cy9HaXRIdWIvTWFwZm9saW8vR2VvRm9yY2UvR2VvQW5ndWxhci9hcHAvc2NyaXB0cy9jb250cm9sbGVycy9kZXRhaWxzLmpzIiwiL1VzZXJzL3J5YW53aGl0bGV5L0RvY3VtZW50cy9HaXRIdWIvTWFwZm9saW8vR2VvRm9yY2UvR2VvQW5ndWxhci9hcHAvc2NyaXB0cy9jb250cm9sbGVycy9leHBvcnQuanMiLCIvVXNlcnMvcnlhbndoaXRsZXkvRG9jdW1lbnRzL0dpdEh1Yi9NYXBmb2xpby9HZW9Gb3JjZS9HZW9Bbmd1bGFyL2FwcC9zY3JpcHRzL2NvbnRyb2xsZXJzL2ZpbHRlcnMuanMiLCIvVXNlcnMvcnlhbndoaXRsZXkvRG9jdW1lbnRzL0dpdEh1Yi9NYXBmb2xpby9HZW9Gb3JjZS9HZW9Bbmd1bGFyL2FwcC9zY3JpcHRzL2NvbnRyb2xsZXJzL2luZm8uanMiLCIvVXNlcnMvcnlhbndoaXRsZXkvRG9jdW1lbnRzL0dpdEh1Yi9NYXBmb2xpby9HZW9Gb3JjZS9HZW9Bbmd1bGFyL2FwcC9zY3JpcHRzL2NvbnRyb2xsZXJzL2xheWVycy5qcyIsIi9Vc2Vycy9yeWFud2hpdGxleS9Eb2N1bWVudHMvR2l0SHViL01hcGZvbGlvL0dlb0ZvcmNlL0dlb0FuZ3VsYXIvYXBwL3NjcmlwdHMvY29udHJvbGxlcnMvbGVnZW5kLmpzIiwiL1VzZXJzL3J5YW53aGl0bGV5L0RvY3VtZW50cy9HaXRIdWIvTWFwZm9saW8vR2VvRm9yY2UvR2VvQW5ndWxhci9hcHAvc2NyaXB0cy9jb250cm9sbGVycy9tYWluLmpzIiwiL1VzZXJzL3J5YW53aGl0bGV5L0RvY3VtZW50cy9HaXRIdWIvTWFwZm9saW8vR2VvRm9yY2UvR2VvQW5ndWxhci9hcHAvc2NyaXB0cy9jb250cm9sbGVycy9tYXAuanMiLCIvVXNlcnMvcnlhbndoaXRsZXkvRG9jdW1lbnRzL0dpdEh1Yi9NYXBmb2xpby9HZW9Gb3JjZS9HZW9Bbmd1bGFyL2FwcC9zY3JpcHRzL2NvbnRyb2xsZXJzL25hdmJhci5qcyIsIi9Vc2Vycy9yeWFud2hpdGxleS9Eb2N1bWVudHMvR2l0SHViL01hcGZvbGlvL0dlb0ZvcmNlL0dlb0FuZ3VsYXIvYXBwL3NjcmlwdHMvY29udHJvbGxlcnMvc2VhcmNoLmpzIiwiL1VzZXJzL3J5YW53aGl0bGV5L0RvY3VtZW50cy9HaXRIdWIvTWFwZm9saW8vR2VvRm9yY2UvR2VvQW5ndWxhci9hcHAvc2NyaXB0cy9jb250cm9sbGVycy9zaWRlLXZpZXcuanMiLCIvVXNlcnMvcnlhbndoaXRsZXkvRG9jdW1lbnRzL0dpdEh1Yi9NYXBmb2xpby9HZW9Gb3JjZS9HZW9Bbmd1bGFyL2FwcC9zY3JpcHRzL2NvbnRyb2xsZXJzL3N0b3JpZXMuanMiLCIvVXNlcnMvcnlhbndoaXRsZXkvRG9jdW1lbnRzL0dpdEh1Yi9NYXBmb2xpby9HZW9Gb3JjZS9HZW9Bbmd1bGFyL2FwcC9zY3JpcHRzL2NvbnRyb2xsZXJzL3RoZW1lLmpzIiwiL1VzZXJzL3J5YW53aGl0bGV5L0RvY3VtZW50cy9HaXRIdWIvTWFwZm9saW8vR2VvRm9yY2UvR2VvQW5ndWxhci9hcHAvc2NyaXB0cy9jb250cm9sbGVycy91cGxvYWQuanMiLCIvVXNlcnMvcnlhbndoaXRsZXkvRG9jdW1lbnRzL0dpdEh1Yi9NYXBmb2xpby9HZW9Gb3JjZS9HZW9Bbmd1bGFyL2FwcC9zY3JpcHRzL2NvbnRyb2xsZXJzL3pvb20tZXh0ZW50LmpzIiwiL1VzZXJzL3J5YW53aGl0bGV5L0RvY3VtZW50cy9HaXRIdWIvTWFwZm9saW8vR2VvRm9yY2UvR2VvQW5ndWxhci9hcHAvc2NyaXB0cy9zZXJ2aWNlcy9Eb251dHMuanMiLCIvVXNlcnMvcnlhbndoaXRsZXkvRG9jdW1lbnRzL0dpdEh1Yi9NYXBmb2xpby9HZW9Gb3JjZS9HZW9Bbmd1bGFyL2FwcC9zY3JpcHRzL3NlcnZpY2VzL0xheWVyQ29uZmlnLmpzIiwiL1VzZXJzL3J5YW53aGl0bGV5L0RvY3VtZW50cy9HaXRIdWIvTWFwZm9saW8vR2VvRm9yY2UvR2VvQW5ndWxhci9hcHAvc2NyaXB0cy9zZXJ2aWNlcy9TdG9yaWVzQ29uZmlnLmpzIiwiL1VzZXJzL3J5YW53aGl0bGV5L0RvY3VtZW50cy9HaXRIdWIvTWFwZm9saW8vR2VvRm9yY2UvR2VvQW5ndWxhci9hcHAvc2NyaXB0cy9zZXJ2aWNlcy9WZWN0b3IvQkJveEdlb0pTT04uanMiLCIvVXNlcnMvcnlhbndoaXRsZXkvRG9jdW1lbnRzL0dpdEh1Yi9NYXBmb2xpby9HZW9Gb3JjZS9HZW9Bbmd1bGFyL2FwcC9zY3JpcHRzL3NlcnZpY2VzL1ZlY3Rvci9HZW9KU09OLmpzIiwiL1VzZXJzL3J5YW53aGl0bGV5L0RvY3VtZW50cy9HaXRIdWIvTWFwZm9saW8vR2VvRm9yY2UvR2VvQW5ndWxhci9hcHAvc2NyaXB0cy9zZXJ2aWNlcy9WZWN0b3IvS01MLmpzIiwiL1VzZXJzL3J5YW53aGl0bGV5L0RvY3VtZW50cy9HaXRIdWIvTWFwZm9saW8vR2VvRm9yY2UvR2VvQW5ndWxhci9hcHAvc2NyaXB0cy9zZXJ2aWNlcy9WZWN0b3IvUmVzb3VyY2UuanMiLCIvVXNlcnMvcnlhbndoaXRsZXkvRG9jdW1lbnRzL0dpdEh1Yi9NYXBmb2xpby9HZW9Gb3JjZS9HZW9Bbmd1bGFyL2FwcC9zY3JpcHRzL3NlcnZpY2VzL1ZlY3Rvci9WZWN0b3JQcm92aWRlci5qcyIsIi9Vc2Vycy9yeWFud2hpdGxleS9Eb2N1bWVudHMvR2l0SHViL01hcGZvbGlvL0dlb0ZvcmNlL0dlb0FuZ3VsYXIvYXBwL3NjcmlwdHMvc2VydmljZXMvVmVjdG9yL2Nzdi5qcyIsIi9Vc2Vycy9yeWFud2hpdGxleS9Eb2N1bWVudHMvR2l0SHViL01hcGZvbGlvL0dlb0ZvcmNlL0dlb0FuZ3VsYXIvYXBwL3NjcmlwdHMvc2VydmljZXMvVmVjdG9yL3BiZi5qcyIsIi9Vc2Vycy9yeWFud2hpdGxleS9Eb2N1bWVudHMvR2l0SHViL01hcGZvbGlvL0dlb0ZvcmNlL0dlb0FuZ3VsYXIvYXBwL3NjcmlwdHMvc2VydmljZXMvVmVjdG9yL3Jlc291cmNlLmpzIiwiL1VzZXJzL3J5YW53aGl0bGV5L0RvY3VtZW50cy9HaXRIdWIvTWFwZm9saW8vR2VvRm9yY2UvR2VvQW5ndWxhci9hcHAvc2NyaXB0cy9zZXJ2aWNlcy9WZWN0b3IvdmVjdG9yLmpzIiwiL3Vzci9sb2NhbC9saWIvbm9kZV9tb2R1bGVzL3dhdGNoaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9idWZmZXIvaW5kZXguanMiLCIvdXNyL2xvY2FsL2xpYi9ub2RlX21vZHVsZXMvd2F0Y2hpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2J1ZmZlci9ub2RlX21vZHVsZXMvYmFzZTY0LWpzL2xpYi9iNjQuanMiLCIvdXNyL2xvY2FsL2xpYi9ub2RlX21vZHVsZXMvd2F0Y2hpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2J1ZmZlci9ub2RlX21vZHVsZXMvaWVlZTc1NC9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuSUE7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0lBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9FQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0WUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0dBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeFJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeFJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbFFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2bkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4UkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8qKlxuICogQ3JlYXRlZCBieSBOaWNob2xhcyBIYWxsYWhhbiA8bmhhbGxhaGFuQHNwYXRpYWxkZXYuY29tPlxuICogICAgICAgb24gOC82LzE0LlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXG5cbn07XG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgTmljaG9sYXMgSGFsbGFoYW4gPG5oYWxsYWhhbkBzcGF0aWFsZGV2LmNvbT5cbiAqICAgICAgIG9uIDgvNi8xNC5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblxuICAvKipcbiAgICogQmFzZW1hcHMgUGFuZWwgTGlzdFxuICAgKlxuICAgKiBMaXN0IG9mIGJhc2VtYXBzIHRoYXQgZ2V0IHNob3duIGluIHRoZSBCYXNlbWFwcyBQYW5lbC4gRWRpdCB0aGlzIHRvIGFkZCBvciByZW1vdmVcbiAgICogYmFzZW1hcHMgdGhhdCB0aGUgdXNlciB3aWxsIHNlZSBhcyBjaG9pY2VzLiBBbGwgYmFzZW1hcHMsIGluY2x1ZGluZyBvbmVzIG5vdCBpbiB0aGlzXG4gICAqIGxpc3QsIGNhbiBzdGlsbCBiZSBtYW51YWxseSByZWZlcmVuY2VkIGluIHRoZSB1cmwuIFRoaXMgaXMganVzdCBmb3IgdGhlIFVzZXIgSW50ZXJmYWNlLlxuICAgKi9cbiAgYmFzZW1hcHM6IFtcbiAgICAnb3NtaG90JyxcbiAgICAnb3NtJyxcbiAgICAnc2F0ZWxsaXRlJyxcbiAgICAnb3J0aG8nLFxuICAgICd0b25lcicsXG4gICAgJ2RhcmsnLFxuICAgICdnaXRodWInLFxuICAgICdtb3ppbGxhJyxcbiAgICAnZ3JlZW4nLFxuICAgICdvc21jeWNsZScsXG4gICAgJ29zbXRyYW5zcG9ydCcsXG4gICAgJ29zbW1hcHF1ZXN0JyxcbiAgICAnbmF0Z2VvJyxcbiAgICAndXNnc3RvcG8nLFxuICAgICdlc3JpdG9wbycsXG4gICAgJ29jZWFuJyxcbiAgICAnbGlnaHRncmF5JyxcbiAgICAnd2F0ZXJjb2xvcidcbiAgXSxcblxuXG4gIC8qKlxuICAgKiBCYXNlbWFwc1xuICAgKlxuICAgKiBBbGwgYmFzZW1hcCBhbGlhc2VzIHRoYXQgY2FuIGJlIHJlZmVycmVkIHRvIGluIHRoZSB1cmwuIFRoZSBjb3JyZXNwb25kaW5nXG4gICAqIHBhdGggdG8gdGhlIHRodW1ibmFpbCBpbiB0aGUgQmFzZW1hcHMgUGFuZWwgc2hvdWxkIGJlOlxuICAgKiAgICBpbWFnZXMve2FsaWFzTmFtZX0uanBnXG4gICAqXG4gICAqL1xuXG4gIG9zbWhvdDoge1xuICAgIHVybDogJ2h0dHA6Ly97c30udGlsZS5vcGVuc3RyZWV0bWFwLmZyL2hvdC97en0ve3h9L3t5fS5wbmcnLFxuICAgIG5hbWU6ICdIdW1hbml0YXJpYW4gT3BlblN0cmVldE1hcCcsXG4gICAgdHlwZTogJ2Jhc2VtYXAnXG4gIH0sXG5cbiAgcmVkY3Jvc3M6IHtcbiAgICB1cmw6ICdodHRwczovL3tzfS50aWxlcy5tYXBib3guY29tL3YzL2FtZXJpY2FucmVkY3Jvc3MuaGNqaTIyZGUve3p9L3t4fS97eX0ucG5nJyxcbiAgICBuYW1lOiAnUmVkIENyb3NzJyxcbiAgICB0eXBlOiAnYmFzZW1hcCdcbiAgfSxcblxuICBzYXRlbGxpdGU6IHtcbiAgICB1cmw6ICdodHRwczovL3tzfS50aWxlcy5tYXBib3guY29tL3YzL2V4YW1wbGVzLm1hcC1xZnlyeDVyOC97en0ve3h9L3t5fS5wbmcnLFxuICAgIG5hbWU6ICdNYXBib3ggU2F0ZWxsaXRlJyxcbiAgICB0eXBlOiAnYmFzZW1hcCdcbiAgfSxcblxuICBtb3ppbGxhOiB7XG4gICAgdXJsOiAnaHR0cDovL3tzfS50aWxlcy5tYXBib3guY29tL3YzL21vemlsbGEtd2VicHJvZC5lOTFlZjhiMy97en0ve3h9L3t5fS5wbmcnLFxuICAgIG5hbWU6ICdNb3ppbGxhJyxcbiAgICB0eXBlOiAnYmFzZW1hcCdcbiAgfSxcblxuICBnaXRodWI6IHtcbiAgICB1cmw6ICdodHRwOi8ve3N9LnRpbGVzLm1hcGJveC5jb20vdjMvZ2l0aHViLm1hcC14Z3Eyc3Zyei97en0ve3h9L3t5fS5wbmcnLFxuICAgIG5hbWU6ICdHaXRodWInLFxuICAgIHR5cGU6ICdiYXNlbWFwJ1xuICB9LFxuXG4gIGdyZWVuOiB7XG4gICAgdXJsOiAnaHR0cDovL3tzfS50aWxlcy5tYXBib3guY29tL3YzL2V4YW1wbGVzLm1hcC0zZ2lzdXBpdS97en0ve3h9L3t5fS5wbmcnLFxuICAgIG5hbWU6ICdHcmVlbiBUaGVtZScsXG4gICAgdHlwZTogJ2Jhc2VtYXAnXG4gIH0sXG5cbiAgZGFyazoge1xuICAgIHVybDogJ2h0dHA6Ly97c30udGlsZXMubWFwYm94LmNvbS92My9zcGF0aWFsZGV2Lm1hcC1jOXoyY3llZi97en0ve3h9L3t5fS5wbmcnLFxuICAgIG5hbWU6ICdEYXJrIFRoZW1lJyxcbiAgICB0eXBlOiAnYmFzZW1hcCdcbiAgfSxcblxuICBvc206IHtcbiAgICB1cmw6ICdodHRwOi8ve3N9LnRpbGUub3NtLm9yZy97en0ve3h9L3t5fS5wbmcnLFxuICAgIG5hbWU6ICdTdGFuZGFyZCBPcGVuU3RyZWV0TWFwJyxcbiAgICB0eXBlOiAnYmFzZW1hcCdcbiAgfSxcblxuICBvc21jeWNsZToge1xuICAgIHVybDogJ2h0dHA6Ly97c30udGlsZS5vcGVuY3ljbGVtYXAub3JnL2N5Y2xlL3t6fS97eH0ve3l9LnBuZycsXG4gICAgbmFtZTogJ0N5Y2xlIE9wZW5TdHJlZXRNYXAnLFxuICAgIHR5cGU6ICdiYXNlbWFwJ1xuICB9LFxuXG4gIG9zbXRyYW5zcG9ydDoge1xuICAgIHVybDogJ2h0dHA6Ly97c30udGlsZTIub3BlbmN5Y2xlbWFwLm9yZy90cmFuc3BvcnQve3p9L3t4fS97eX0ucG5nJyxcbiAgICBuYW1lOiAnVHJhbnNwb3J0IE9wZW5TdHJlZXRNYXAnLFxuICAgIHR5cGU6ICdiYXNlbWFwJ1xuICB9LFxuXG4gIG9zbW1hcHF1ZXN0OiB7XG4gICAgdXJsOiAnaHR0cDovL290aWxlMy5tcWNkbi5jb20vdGlsZXMvMS4wLjAvb3NtL3t6fS97eH0ve3l9LnBuZycsXG4gICAgbmFtZTogJ01hcFF1ZXN0IE9wZW5TdHJlZXRNYXAnLFxuICAgIHR5cGU6ICdiYXNlbWFwJ1xuICB9LFxuXG4gIG5hdGdlbzoge1xuICAgIHVybDogJ2h0dHA6Ly9zZXJ2aWNlcy5hcmNnaXNvbmxpbmUuY29tL0FyY0dJUy9yZXN0L3NlcnZpY2VzL05hdEdlb19Xb3JsZF9NYXAvTWFwU2VydmVyL3RpbGUve3p9L3t5fS97eH0nLFxuICAgIG5hbWU6ICdOYXRpb25hbCBHZW9ncmFwaGljJyxcbiAgICB0eXBlOiAnYmFzZW1hcCdcbiAgfSxcblxuICB1c2dzdG9wbzoge1xuICAgIHVybDogJ2h0dHA6Ly9zZXJ2aWNlcy5hcmNnaXNvbmxpbmUuY29tL0FyY0dJUy9yZXN0L3NlcnZpY2VzL1VTQV9Ub3BvX01hcHMvTWFwU2VydmVyL3RpbGUve3p9L3t5fS97eH0nLFxuICAgIG5hbWU6ICdVU0dTIFRvcG9ncmFwaGljJyxcbiAgICB0eXBlOiAnYmFzZW1hcCdcbiAgfSxcblxuICBvcnRobzoge1xuICAgIHVybDogJ2h0dHA6Ly9zZXJ2aWNlcy5hcmNnaXNvbmxpbmUuY29tL0FyY0dJUy9yZXN0L3NlcnZpY2VzL1dvcmxkX0ltYWdlcnkvTWFwU2VydmVyL3RpbGUve3p9L3t5fS97eH0nLFxuICAgIG5hbWU6ICdPcnRob2dyYXBoaWMnLFxuICAgIHR5cGU6ICdiYXNlbWFwJ1xuICB9LFxuXG4gIG9jZWFuOiB7XG4gICAgdXJsOiAnaHR0cDovL3NlcnZpY2VzLmFyY2dpc29ubGluZS5jb20vQXJjR0lTL3Jlc3Qvc2VydmljZXMvT2NlYW4vV29ybGRfT2NlYW5fQmFzZS9NYXBTZXJ2ZXIvdGlsZS97en0ve3l9L3t4fScsXG4gICAgbmFtZTogJ09jZWFuIEJhdGh5bWV0cmljJyxcbiAgICB0eXBlOiAnYmFzZW1hcCdcbiAgfSxcblxuICBsaWdodGdyYXk6IHtcbiAgICB1cmw6ICdodHRwOi8vc2VydmljZXMuYXJjZ2lzb25saW5lLmNvbS9BcmNHSVMvcmVzdC9zZXJ2aWNlcy9DYW52YXMvV29ybGRfTGlnaHRfR3JheV9CYXNlL01hcFNlcnZlci90aWxlL3t6fS97eX0ve3h9JyxcbiAgICBuYW1lOiAnTGlnaHQgR3JheScsXG4gICAgdHlwZTogJ2Jhc2VtYXAnXG4gIH0sXG5cbiAgZXNyaXRvcG86IHtcbiAgICB1cmw6ICdodHRwOi8vc2VydmljZXMuYXJjZ2lzb25saW5lLmNvbS9BcmNHSVMvcmVzdC9zZXJ2aWNlcy9Xb3JsZF9Ub3BvX01hcC9NYXBTZXJ2ZXIvdGlsZS97en0ve3l9L3t4fScsXG4gICAgbmFtZTogJ0VzcmkgVG9wb2dyYXBoaWMnLFxuICAgIHR5cGU6ICdiYXNlbWFwJ1xuICB9LFxuXG4gIHRvbmVyOiB7XG4gICAgdXJsOiAnaHR0cDovL3tzfS50aWxlLnN0YW1lbi5jb20vdG9uZXIve3p9L3t4fS97eX0ucG5nJyxcbiAgICBuYW1lOiAnU3RhbWVuIFRvbmVyJyxcbiAgICB0eXBlOiAnYmFzZW1hcCdcbiAgfSxcblxuICB3YXRlcmNvbG9yOiB7XG4gICAgdXJsOiAnaHR0cDovL3tzfS50aWxlLnN0YW1lbi5jb20vd2F0ZXJjb2xvci97en0ve3h9L3t5fS5wbmcnLFxuICAgIG5hbWU6ICdTdGFtZW4gV2F0ZXJjb2xvcicsXG4gICAgdHlwZTogJ2Jhc2VtYXAnXG4gIH1cblxufTtcbiIsIi8qKlxuICogQ3JlYXRlZCBieSBOaWNob2xhcyBIYWxsYWhhbiA8bmhhbGxhaGFuQHNwYXRpYWxkZXYuY29tPlxuICogICAgICAgb24gOC82LzE0LlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICB1c2dzZWFydGhxdWFrZToge1xuICAgIHR5cGU6ICdnZW9qc29uJyxcbiAgICB0aGVtZTogJ2Rpc2FzdGVyJyxcbiAgICB1cmw6ICdodHRwOi8vZWFydGhxdWFrZS51c2dzLmdvdi9lYXJ0aHF1YWtlcy9mZWVkL3YxLjAvc3VtbWFyeS9zaWduaWZpY2FudF93ZWVrLmdlb2pzb24nLFxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICd0aXRsZSc6ICdVU0dTIFJlYWx0aW1lIEVhcnRocXVha2VzIEZlZWQgKFdlZWspJ1xuXG4gICAgfVxuICB9LFxuXG4gIHByZWNpcGl0YXRpb246IHtcbiAgICBuYW1lOiAnUHJlY2lwaXRhdGlvbicsXG4gICAgdHlwZTogJ3h5eicsXG4gICAgdGhlbWU6ICdkaXNhc3RlcicsXG4gICAgdXJsOiAnaHR0cDovL3tzfS50aWxlLm9wZW53ZWF0aGVybWFwLm9yZy9tYXAvcHJlY2lwaXRhdGlvbi97en0ve3h9L3t5fS5wbmcnLFxuICAgIG9wYWNpdHk6IDAuNVxuICB9LFxuXG4gIHJhaW46IHtcbiAgICBuYW1lOiAnUmFpbicsXG4gICAgdHlwZTogJ3h5eicsXG4gICAgdGhlbWU6ICdkaXNhc3RlcicsXG4gICAgdXJsOiAnaHR0cDovL3tzfS50aWxlLm9wZW53ZWF0aGVybWFwLm9yZy9tYXAvcmFpbi97en0ve3h9L3t5fS5wbmcnXG4gIH1cblxufTsiLCIvKipcbiAqIENyZWF0ZWQgYnkgTmljaG9sYXMgSGFsbGFoYW4gPG5oYWxsYWhhbkBzcGF0aWFsZGV2LmNvbT5cbiAqICAgICAgIG9uIDgvNi8xNC5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblxuICBsYW5kY292ZXI6IHtcbiAgICBuYW1lOiAnTU9ESVMgTGFuZGNvdmVyIDIwMDknLFxuICAgIHR5cGU6ICd3bXMnLFxuICAgIHRoZW1lOiAnb3RoZXInLFxuICAgIHVybDogJ2h0dHA6Ly9hZ3Muc2VydmlybGFicy5uZXQvQXJjR0lTL3NlcnZpY2VzL1JlZmVyZW5jZU5vZGUvTU9ESVNfTGFuZGNvdmVyX1R5cGUxXzIwMDkvTWFwU2VydmVyL1dNU1NlcnZlcicsXG4gICAgbGF5ZXJzOiAnMCcsXG4gICAgcHJvcGVydGllczoge1xuICAgICAgbGVnZW5kOiBcIlwiXG4gICAgfVxuICB9LFxuXG4gIHNub3c6IHtcbiAgICBuYW1lOiAnU25vdycsXG4gICAgdHlwZTogJ3h5eicsXG4gICAgdGhlbWU6ICdvdGhlcicsXG4gICAgdXJsOiAnaHR0cDovL3tzfS50aWxlLm9wZW53ZWF0aGVybWFwLm9yZy9tYXAvc25vdy97en0ve3h9L3t5fS5wbmcnXG4gIH0sXG5cbiAgYWlydGVtcDoge1xuICAgIG5hbWU6ICdOT0FBIEFpciBUZW1wZXJhdHVyZScsXG4gICAgdHlwZTogJ3dtcycsXG4gICAgdGhlbWU6ICdvdGhlcicsXG4gICAgdXJsOiAnaHR0cDovL25vd2NvYXN0Lm5vYWEuZ292L3dtcy9jb20uZXNyaS53bXMuRXNyaW1hcC9vYnMnLFxuICAgIHRyYW5zcGFyZW50OiB0cnVlLCAgICAgIC8vIGRlZmF1bHQgdHJ1ZVxuICAgIGZvcm1hdDogJ2ltYWdlL3BuZycsICAgIC8vIGRlZmF1bHQgJ2ltYWdlL3BuZydcbiAgICBsYXllcnM6ICdPQlNfTUVUX1RFTVAnLFxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgIGxlZ2VuZDogXCJcIlxuICAgIH1cbiAgfSxcblxuICBwcmVzc3VyZWNvbnRvdXI6IHtcbiAgICBuYW1lOiAnUHJlc3N1cmUgQ29udG91cicsXG4gICAgdHlwZTogJ3h5eicsXG4gICAgdGhlbWU6ICdvdGhlcicsXG4gICAgdXJsOiAnaHR0cDovL3tzfS50aWxlLm9wZW53ZWF0aGVybWFwLm9yZy9tYXAvcHJlc3N1cmVfY250ci97en0ve3h9L3t5fS5wbmcnLFxuICAgIG9wYWNpdHk6IDAuOVxuICB9LFxuXG4gIHByZXNzdXJlOiB7XG4gICAgbmFtZTogJ1ByZXNzdXJlJyxcbiAgICB0eXBlOiAneHl6JyxcbiAgICB0aGVtZTogJ290aGVyJyxcbiAgICB1cmw6ICdodHRwOi8ve3N9LnRpbGUub3BlbndlYXRoZXJtYXAub3JnL21hcC9wcmVzc3VyZS97en0ve3h9L3t5fS5wbmcnXG4gIH0sXG5cbiAgdGVtcGVyYXR1cmU6IHtcbiAgICBuYW1lOiAnVGVtcGVyYXR1cmUnLFxuICAgIHR5cGU6ICd4eXonLFxuICAgIHRoZW1lOiAnb3RoZXInLFxuICAgIHVybDogJ2h0dHA6Ly97c30udGlsZS5vcGVud2VhdGhlcm1hcC5vcmcvbWFwL3RlbXAve3p9L3t4fS97eX0ucG5nJ1xuICB9LFxuXG4gIHdpbmQ6IHtcbiAgICBuYW1lOiAnV2luZCcsXG4gICAgdHlwZTogJ3h5eicsXG4gICAgdGhlbWU6ICdvdGhlcicsXG4gICAgdXJsOiAnaHR0cDovL3tzfS50aWxlLm9wZW53ZWF0aGVybWFwLm9yZy9tYXAvd2luZC97en0ve3h9L3t5fS5wbmcnXG4gIH0sXG5cbiAgY2xvdWRzOiB7XG4gICAgbmFtZTogJ0Nsb3VkIENvdmVyJyxcbiAgICB0eXBlOiAneHl6JyxcbiAgICB0aGVtZTogJ290aGVyJyxcbiAgICB1cmw6ICdodHRwOi8ve3N9LnRpbGUub3BlbndlYXRoZXJtYXAub3JnL21hcC9jbG91ZHNfY2xzL3t6fS97eH0ve3l9LnBuZycsXG4gICAgb3BhY2l0eTogMC41IC8vIG9wdGlvbmFsLiBvcGFjaXR5IGlzIDAuNSBpZiBub3Qgc3BlY2lmaWVkXG4gIH0sXG5cbiAgcHJlY2lwaXRhdGlvbmNsYXNzaWM6IHtcbiAgICBuYW1lOiAnUHJlY2lwaXRhdGlvbiAoQ2xhc3NpYyknLFxuICAgIHR5cGU6ICd4eXonLFxuICAgIHRoZW1lOiAnb3RoZXInLFxuICAgIHVybDogJ2h0dHA6Ly97c30udGlsZS5vcGVud2VhdGhlcm1hcC5vcmcvbWFwL3ByZWNpcGl0YXRpb25fY2xzL3t6fS97eH0ve3l9LnBuZycsXG4gICAgb3BhY2l0eTogMC40XG4gIH0sXG5cbiAgcmFpbmNsYXNzaWM6IHtcbiAgICBuYW1lOiAnUmFpbiAoQ2xhc3NpYyknLFxuICAgIHR5cGU6ICd4eXonLFxuICAgIHRoZW1lOiAnb3RoZXInLFxuICAgIHVybDogJ2h0dHA6Ly97c30udGlsZS5vcGVud2VhdGhlcm1hcC5vcmcvbWFwL3JhaW5fY2xzL3t6fS97eH0ve3l9LnBuZydcbiAgfSxcblxuICBsYWNjb21tdW5pdGllczoge1xuICAgIG5hbWU6ICdMQUMgQ29tbXVuaXRpZXMnLFxuICAgIHR5cGU6ICdnZW9qc29uJyxcbiAgICB0aGVtZTogJ290aGVyJyxcbiAgICB1cmw6ICdodHRwczovL2dpc3QuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2Fub255bW91cy9kNThlNTFkNjEyYWRkNjQ4MzI1Ny9yYXcvTEFDX0NvbW11bml0aWVzX3N0eWxlZC5nZW9qc29uJ1xuICB9XG5cbn07XG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgTmljaG9sYXMgSGFsbGFoYW4gPG5oYWxsYWhhbkBzcGF0aWFsZGV2LmNvbT5cbiAqICAgICAgIG9uIDgvNi8xNC5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblxuICBncm93aW5ncGVyaW9kOiB7XG4gICAgbmFtZTogJ0F2ZXJhZ2UgTGVuZ3RoIG9mIEdyb3dpbmcgUGVyaW9kIChkYXlzKScsXG4gICAgdHlwZTogJ3dtcycsXG4gICAgdGhlbWU6ICdwcm9qZWN0JyxcbiAgICB1cmw6ICdodHRwOi8vYXBwcy5oYXJ2ZXN0Y2hvaWNlLm9yZy9hcmNnaXMvc2VydmljZXMvTWFwU2VydmljZXMvY2VsbF92YWx1ZXNfNC9NYXBTZXJ2ZXIvV01TU2VydmVyJyxcbiAgICBsYXllcnM6ICcxNScsXG4gICAgcHJvcGVydGllczoge1xuICAgICAgbGVnZW5kOiBcIlwiXG4gICAgfVxuICB9LFxuXG4gIGxhbmRjb3Zlcjoge1xuICAgIG5hbWU6ICdNT0RJUyBMYW5kY292ZXIgMjAwOScsXG4gICAgdHlwZTogJ3dtcycsXG4gICAgdGhlbWU6ICdwcm9qZWN0JyxcbiAgICB1cmw6ICdodHRwOi8vYWdzLnNlcnZpcmxhYnMubmV0L0FyY0dJUy9zZXJ2aWNlcy9SZWZlcmVuY2VOb2RlL01PRElTX0xhbmRjb3Zlcl9UeXBlMV8yMDA5L01hcFNlcnZlci9XTVNTZXJ2ZXInLFxuICAgIGxheWVyczogJzAnLFxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgIGxlZ2VuZDogXCJcIlxuICAgIH1cbiAgfVxuXG59OyIsIi8qKlxuICogQ3JlYXRlZCBieSBOaWNob2xhcyBIYWxsYWhhbiA8bmhhbGxhaGFuQHNwYXRpYWxkZXYuY29tPlxuICogICAgICAgb24gOC82LzE0LlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBnZGFjczoge1xuICAgIG5hbWU6ICdHREFDUzogR2xvYmFsIERpc2FzdGVyIEFsZXJ0IGFuZCBDb29yZGluYXRpb24gU3lzdGVtJyxcbiAgICB0eXBlOiAna21sJyxcbiAgICB0aGVtZTogJ3Byb2plY3RoZWFsdGgnLFxuICAgIHVybDogJ2h0dHA6Ly93d3cuZ2RhY3Mub3JnL3htbC9nZGFjcy5rbWwnLFxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgIGxlZ2VuZDogJydcbiAgICB9XG4gIH1cbn07IiwiLyoqXG4gKiBDcmVhdGVkIGJ5IE5pY2hvbGFzIEhhbGxhaGFuIDxuaGFsbGFoYW5Ac3BhdGlhbGRldi5jb20+XG4gKiAgICAgICBvbiA4LzYvMTQuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cbn07IiwiLyoqXG4gKiBDcmVhdGVkIGJ5IFJ5YW4gV2hpdGxleSA8cndoaXRsZXlAc3BhdGlhbGRldi5jb20+XG4gKiAgICAgICBvbiAxMi8xNS8xNC5cbiAqL1xuXG5cblxuXG52YXIgZ2FkbTAgPSB7XG4gIHR5cGU6ICdwYmYnLFxuICBuYW1lOiAnR0FETTAnLFxuICAvL3VybDogXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvc2VydmljZXMvcG9zdGdpcy9nYWRtMC9nZW9tX3NpbXBsaWZ5X21lZC92ZWN0b3ItdGlsZXMve3p9L3t4fS97eX0ucGJmP2ZpZWxkcz1ndWlkOjpjaGFyYWN0ZXIgdmFyeWluZyxuYW1lXzAseWVhciZsYWJlbHBvaW50cz10cnVlXCIsXG4gIC8vdXJsOiBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9zZXJ2aWNlcy9wb3N0Z2lzL2dhZG0wL2dlb21fc2ltcGxpZnlfbWVkL3ZlY3Rvci10aWxlcy97en0ve3h9L3t5fS5wYmY/ZmllbGRzPWd1aWQ6OmNoYXJhY3RlciB2YXJ5aW5nLG5hbWVfMCx5ZWFyXCIsXG5cbiAgdXJsOiBcIi4uL3NlcnZpY2VzL3ZlY3Rvci10aWxlcy9nYWRtMF9sYWJlbHNfMjAxNC97en0ve3h9L3t5fS5wYmZcIixcbiAgZGV0YWlsc1VybDogJ3NlcnZpY2VzL2N1c3RvbS9jdXN0b21fb3BlcmF0aW9uP25hbWU9Z2V0OnRoZW1lYnlndWlkJmZvcm1hdD1qc29uJmd1aWRzPTpndWlkcyZnYWRtX2xldmVsPTpsZXZlbCZmaWx0ZXJzPTpmaWx0ZXJzJyxcbiAgZGVidWc6IGZhbHNlLFxuICBjbGlja2FibGVMYXllcnM6IFtcIkdBRE1fMjAxNFwiXSxcblxuICBnZXRJREZvckxheWVyRmVhdHVyZTogZnVuY3Rpb24gKGZlYXR1cmUpIHtcbiAgICByZXR1cm4gZmVhdHVyZS5wcm9wZXJ0aWVzLmd1aWQ7XG4gICAgLy9yZXR1cm4gZmVhdHVyZS5wcm9wZXJ0aWVzLm5hbWVfMDtcbiAgfSxcbiAgbXV0ZXhUb2dnbGU6IHRydWUsXG5cbiAgLy9UaGUgZmlsdGVyIGZ1bmN0aW9uIGRvZXMgMiB0aGluZ3M6IDEpIE1lcmdlIGluIGV4dGVybmFsIHByb3BlcnRpZXMgdGhhdCBjYW4gYmUgdXNlZCBmb3IgY2hvcm9wbGV0aGluZy4gIDIpIEZpbHRlciBvdXQgZmVhdHVyZXMgdGhhdCBkb24ndCBoYXZlIEVDT1MgcHJvcGVydGllc1xuICBmaWx0ZXI6IGZ1bmN0aW9uKHZ0ZiwgJHJvb3RTY29wZSl7XG4gICAgdmFyIGRhdGEgPSAkcm9vdFNjb3BlLnZ0RGF0YTtcblxuICAgIC8vU2hvdyBvbmx5IGNvdW50cmllcyB3aXRoIGFjdGl2ZSB0aGVtZSBwcm9wZXJ0aWVzXG4gICAgaWYoZGF0YSAmJiBkYXRhW3Z0Zi5wcm9wZXJ0aWVzLmd1aWRdKXtcbiAgICAgIHZhciB0aGVtZSA9ICRyb290U2NvcGUuJHN0YXRlUGFyYW1zLnRoZW1lO1xuICAgICAgdnRmLnByb3BlcnRpZXMudGhlbWUgPSB0aGVtZTtcbiAgICAgIHZ0Zi5wcm9wZXJ0aWVzLmVjb3NfcHJvcGVydGllcyA9IHt9O1xuICAgICAgdnRmLnByb3BlcnRpZXMuZWNvc19wcm9wZXJ0aWVzW3RoZW1lXSA9IGRhdGFbdnRmLnByb3BlcnRpZXMuZ3VpZF07XG4gICAgICAvL3JldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlOyAvL2RyYXcgZmVhdHVyZVxuICB9LFxuXG4gIC8qKlxuICAgKiBXaGVuIHdlIHdhbnQgdG8gbGluayBldmVudHMgYmV0d2VlbiBsYXllcnMsIGxpa2UgY2xpY2tpbmcgb24gYSBsYWJlbCBhbmQgYVxuICAgKiBjb3JyZXNwb25kaW5nIHBvbHlnb24gZnJlYXR1cmUsIHRoaXMgd2lsbCByZXR1cm4gdGhlIGNvcnJlc3BvbmRpbmcgbWFwcGluZ1xuICAgKiBiZXR3ZWVuIGxheWVycy4gVGhpcyBwcm92aWRlcyBrbm93bGVkZ2Ugb2Ygd2hpY2ggb3RoZXIgZmVhdHVyZSBhIGdpdmVuIGZlYXR1cmVcbiAgICogaXMgbGlua2VkIHRvLlxuICAgKlxuICAgKiBAcGFyYW0gbGF5ZXJOYW1lICB0aGUgbGF5ZXIgd2Ugd2FudCB0byBrbm93IHRoZSBsaW5rZWQgbGF5ZXIgZnJvbVxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSByZXR1cm5zIGNvcnJlc3BvbmRpbmcgbGlua2VkIGxheWVyXG4gICAqL1xuICBsYXllckxpbms6IGZ1bmN0aW9uIChsYXllck5hbWUpIHtcbiAgICBpZiAobGF5ZXJOYW1lLmluZGV4T2YoJ19sYWJlbCcpID4gLTEpIHtcbiAgICAgIHJldHVybiBsYXllck5hbWUucmVwbGFjZSgnX2xhYmVsJywgJycpO1xuICAgIH1cbiAgICByZXR1cm4gbGF5ZXJOYW1lICsgJ19sYWJlbCc7XG4gIH0sXG5cbiAgc3R5bGU6IGdldFRoZW1lU3R5bGUsXG5cbiAgb25DbGljazogZnVuY3Rpb24oZXZ0LCAkaHR0cCwgJHJvb3RTY29wZSwgUEJGT2JqZWN0KSB7XG5cbiAgICBpZihldnQgJiYgZXZ0LmZlYXR1cmUgJiYgZXZ0LmZlYXR1cmUuaWQpe1xuICAgICAgLy9EbyB0aGUgb25jbGljayB0aGluZ1xuICAgICAgUEJGT2JqZWN0LmZldGNoRmVhdHVyZURldGFpbHMoZXZ0LmZlYXR1cmUuaWQsIDApO1xuICAgIH1cbiAgfSxcbiAgb25TZWxlY3Q6IGZ1bmN0aW9uKHZ0ZiwgUEJGT2JqZWN0KXtcbiAgICAvL1doZW4gYSBzZWxlY3Rpb24gaGFzIGNoYW5nZWQgKGxpa2V5IHdoZW4gYSBsYWJlbCB3YXMgY2xpY2tlZCBhbmQgdGhlIGNvcnJlc3BvbmRpbmcgZmVhdHVyZSBzZWxlY3RlZClcbiAgICBpZih2dGYgJiYgdnRmLmlkKXtcbiAgICAgIC8vRG8gdGhlIG9uY2xpY2sgdGhpbmdcbiAgICAgIFBCRk9iamVjdC5mZXRjaEZlYXR1cmVEZXRhaWxzKHZ0Zi5pZCwgMCk7XG4gICAgfVxuICB9XG59XG5cbnZhciBnYWRtMSA9IHtcbiAgdHlwZTogJ3BiZicsXG4gIG5hbWU6ICdHQURNMScsXG4gIC8vdXJsOiBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9zZXJ2aWNlcy9wb3N0Z2lzL2dhZG0wL2dlb21fc2ltcGxpZnlfbWVkL3ZlY3Rvci10aWxlcy97en0ve3h9L3t5fS5wYmY/ZmllbGRzPWd1aWQ6OmNoYXJhY3RlciB2YXJ5aW5nLG5hbWVfMCx5ZWFyJmxhYmVscG9pbnRzPXRydWVcIixcbiAgLy91cmw6IFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL3NlcnZpY2VzL3Bvc3RnaXMvZ2FkbTAvZ2VvbV9zaW1wbGlmeV9tZWQvdmVjdG9yLXRpbGVzL3t6fS97eH0ve3l9LnBiZj9maWVsZHM9Z3VpZDo6Y2hhcmFjdGVyIHZhcnlpbmcsbmFtZV8wLHllYXJcIixcblxuICB1cmw6IFwiLi4vc2VydmljZXMvdmVjdG9yLXRpbGVzL2dhZG0xX2xhYmVsc18yMDE0L3t6fS97eH0ve3l9LnBiZlwiLFxuICBkZXRhaWxzVXJsOiAnc2VydmljZXMvY3VzdG9tL2N1c3RvbV9vcGVyYXRpb24/bmFtZT1nZXQ6dGhlbWVieWd1aWQmZm9ybWF0PWpzb24mZ3VpZHM9Omd1aWRzJmdhZG1fbGV2ZWw9MSZmaWx0ZXJzPTpmaWx0ZXJzJyxcbiAgZGVidWc6IGZhbHNlLFxuICBjbGlja2FibGVMYXllcnM6IFtcIkdhZG0xXzIwMTRcIl0sXG5cbiAgZ2V0SURGb3JMYXllckZlYXR1cmU6IGZ1bmN0aW9uIChmZWF0dXJlKSB7XG4gICAgcmV0dXJuIGZlYXR1cmUucHJvcGVydGllcy5ndWlkO1xuICB9LFxuICBtdXRleFRvZ2dsZTogdHJ1ZSxcblxuICAvKipcbiAgICogVGhlIGZpbHRlciBmdW5jdGlvbiBnZXRzIGNhbGxlZCB3aGVuIGl0ZXJhdGluZyB0aG91Z2ggZWFjaCB2ZWN0b3IgdGlsZSBmZWF0dXJlICh2dGYpLiBZb3UgaGF2ZSBhY2Nlc3NcbiAgICogdG8gZXZlcnkgcHJvcGVydHkgYXNzb2NpYXRlZCB3aXRoIGEgZ2l2ZW4gZmVhdHVyZSAodGhlIGZlYXR1cmUsIGFuZCB0aGUgbGF5ZXIpLiBZb3UgY2FuIGFsc28gZmlsdGVyXG4gICAqIGJhc2VkIG9mIHRoZSBjb250ZXh0IChlYWNoIHRpbGUgdGhhdCB0aGUgZmVhdHVyZSBpcyBkcmF3biBvbnRvKS5cbiAgICpcbiAgICogUmV0dXJuaW5nIGZhbHNlIHNraXBzIG92ZXIgdGhlIGZlYXR1cmUgYW5kIGl0IGlzIG5vdCBkcmF3bi5cbiAgICpcbiAgICogQHBhcmFtIGZlYXR1cmVcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBmaWx0ZXI6IGZ1bmN0aW9uKHZ0ZiwgJHJvb3RTY29wZSl7XG4gICAgdmFyIGRhdGEgPSAkcm9vdFNjb3BlLnZ0RGF0YTtcblxuICAgIGlmKGRhdGEgJiYgZGF0YVt2dGYucHJvcGVydGllcy5ndWlkXSl7XG4gICAgICB2YXIgdGhlbWUgPSAkcm9vdFNjb3BlLiRzdGF0ZVBhcmFtcy50aGVtZTtcbiAgICAgIHZ0Zi5wcm9wZXJ0aWVzLnRoZW1lID0gdGhlbWU7XG4gICAgICB2dGYucHJvcGVydGllcy5lY29zX3Byb3BlcnRpZXMgPSB7fTtcbiAgICAgIHZ0Zi5wcm9wZXJ0aWVzLmVjb3NfcHJvcGVydGllc1t0aGVtZV0gPSBkYXRhW3Z0Zi5wcm9wZXJ0aWVzLmd1aWRdO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9LFxuXG4gIC8qKlxuICAgKiBXaGVuIHdlIHdhbnQgdG8gbGluayBldmVudHMgYmV0d2VlbiBsYXllcnMsIGxpa2UgY2xpY2tpbmcgb24gYSBsYWJlbCBhbmQgYVxuICAgKiBjb3JyZXNwb25kaW5nIHBvbHlnb24gZnJlYXR1cmUsIHRoaXMgd2lsbCByZXR1cm4gdGhlIGNvcnJlc3BvbmRpbmcgbWFwcGluZ1xuICAgKiBiZXR3ZWVuIGxheWVycy4gVGhpcyBwcm92aWRlcyBrbm93bGVkZ2Ugb2Ygd2hpY2ggb3RoZXIgZmVhdHVyZSBhIGdpdmVuIGZlYXR1cmVcbiAgICogaXMgbGlua2VkIHRvLlxuICAgKlxuICAgKiBAcGFyYW0gbGF5ZXJOYW1lICB0aGUgbGF5ZXIgd2Ugd2FudCB0byBrbm93IHRoZSBsaW5rZWQgbGF5ZXIgZnJvbVxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSByZXR1cm5zIGNvcnJlc3BvbmRpbmcgbGlua2VkIGxheWVyXG4gICAqL1xuICBsYXllckxpbms6IGZ1bmN0aW9uIChsYXllck5hbWUpIHtcbiAgICBpZiAobGF5ZXJOYW1lLmluZGV4T2YoJ19sYWJlbCcpID4gLTEpIHtcbiAgICAgIHJldHVybiBsYXllck5hbWUucmVwbGFjZSgnX2xhYmVsJywgJycpO1xuICAgIH1cbiAgICByZXR1cm4gbGF5ZXJOYW1lICsgJ19sYWJlbCc7XG4gIH0sXG5cbiAgc3R5bGU6IGdldFRoZW1lU3R5bGUsXG5cbiAgb25DbGljazogZnVuY3Rpb24oZXZ0LCAkaHR0cCwgJHJvb3RTY29wZSwgUEJGT2JqZWN0KSB7XG5cbiAgICBpZihldnQgJiYgZXZ0LmZlYXR1cmUgJiYgZXZ0LmZlYXR1cmUuaWQpe1xuICAgICAgLy9EbyB0aGUgb25jbGljayB0aGluZ1xuICAgICAgUEJGT2JqZWN0LmZldGNoRmVhdHVyZURldGFpbHMoZXZ0LmZlYXR1cmUuaWQsIDApO1xuICAgIH1cbiAgfSxcbiAgb25TZWxlY3Q6IGZ1bmN0aW9uKHZ0ZiwgUEJGT2JqZWN0KXtcbiAgICAvL1doZW4gYSBzZWxlY3Rpb24gaGFzIGNoYW5nZWQgKGxpa2V5IHdoZW4gYSBsYWJlbCB3YXMgY2xpY2tlZCBhbmQgdGhlIGNvcnJlc3BvbmRpbmcgZmVhdHVyZSBzZWxlY3RlZClcbiAgICBpZih2dGYgJiYgdnRmLmlkKXtcbiAgICAgIC8vRG8gdGhlIG9uY2xpY2sgdGhpbmdcbiAgICAgIFBCRk9iamVjdC5mZXRjaEZlYXR1cmVEZXRhaWxzKHZ0Zi5pZCwgMCk7XG4gICAgfVxuICB9XG59XG5cblxuLy92YXIgaGF0Y2hEZXNpZ247XG5cbmZ1bmN0aW9uIGdldFRoZW1lU3R5bGUodnRmLCAkcm9vdFNjb3BlKXtcblxuICB2YXIgb3BhY2l0eSA9IFwiMC41XCI7XG5cbiAgdmFyIHN0eWxlID0ge307XG4gIC8vRGVmYXVsdCBzdHlsZSAtIG1ha2UgaG9sbG93XG4gIHN0eWxlLmNvbG9yID0gJ3JnYmEoMCwwLDAsMC4xKSc7XG4gIHN0eWxlLm91dGxpbmUgPSB7XG4gICAgY29sb3I6ICdyZ2IoMjAsMjAsMjApJyxcbiAgICBzaXplOiAxXG4gIH07XG5cbiAgdmFyIHByb3BlcnRpZXMgPSB2dGYucHJvcGVydGllcztcblxuICAvL1NraXAgaWYgd2UncmUgYSByZWd1bGFyIHBvbHlnb24sIGFuZCBub3QgYSBsYWJlbCBwb2ludCwgYW5kIGlmIHRoZXJlIGlzIG5vIEVDT1MgcHJvcGVydGllcy5cbiAgaWYodnRmLmxheWVyLm5hbWUuaW5kZXhPZignbGFiZWwnKSA9PSAtMSAmJiAhcHJvcGVydGllcy50aGVtZSl7XG4gICAgcmV0dXJuIHN0eWxlO1xuICB9XG5cbiAgLy9TZWUgaWYgd2Ugc2hvdWxkIHNob3cgdGhlbWUgYmFkZ2VzL2J1YmJsZXMgb3Igbm90XG4gIHZhciBjaGVja2VkID0gKCRzdGF0ZVBhcmFtcy50aGVtZWxhYmVscyAmJiAkc3RhdGVQYXJhbXMudGhlbWVsYWJlbHMudG9Mb3dlckNhc2UoKSA9PT0gJ3RydWUnKTtcblxuICB2YXIgZWNvc1Byb3BlcnRpZXM7XG5cbiAgaWYgKHByb3BlcnRpZXMudGhlbWUgPT0gXCJkaXNhc3RlclwiKSB7XG4gICAgZWNvc1Byb3BlcnRpZXMgPSBwcm9wZXJ0aWVzW1wiZWNvc19wcm9wZXJ0aWVzXCJdW1wiZGlzYXN0ZXJcIl07XG5cbiAgICBpZiAoZWNvc1Byb3BlcnRpZXMpIHtcbiAgICAgIGlmIChlY29zUHJvcGVydGllcy5pcm9jX3N0YXR1c19fYykge1xuICAgICAgICBzd2l0Y2ggKGVjb3NQcm9wZXJ0aWVzLmlyb2Nfc3RhdHVzX19jLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgICAgICBjYXNlIFwiYWN0aXZlXCI6XG4gICAgICAgICAgICBzdHlsZS5jb2xvciA9ICdyZ2JhKDIwNCwwLDUxLCcgKyBvcGFjaXR5ICsgJyknO1xuICAgICAgICAgICAgc3R5bGUub3V0bGluZSA9IHtcbiAgICAgICAgICAgICAgY29sb3I6ICdyZ2IoMjAsMjAsMjApJyxcbiAgICAgICAgICAgICAgc2l6ZTogMlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBcIm1vbml0b3JpbmdcIjpcbiAgICAgICAgICAgIHN0eWxlLmNvbG9yID0gJ3JnYmEoMjA0LDE1MywwLCcgKyBvcGFjaXR5ICsgJyknO1xuICAgICAgICAgICAgc3R5bGUub3V0bGluZSA9IHtcbiAgICAgICAgICAgICAgY29sb3I6ICdyZ2IoMjAsMjAsMjApJyxcbiAgICAgICAgICAgICAgc2l6ZTogMlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBcImluYWN0aXZlXCI6XG4gICAgICAgICAgICBzdHlsZS5jb2xvciA9ICdyZ2JhKDI1NSwyNTUsMjU1LCcgKyBvcGFjaXR5ICsgJyknO1xuICAgICAgICAgICAgc3R5bGUub3V0bGluZSA9IHtcbiAgICAgICAgICAgICAgY29sb3I6ICdyZ2IoMjAsMjAsMjApJyxcbiAgICAgICAgICAgICAgc2l6ZTogMlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgfVxuICBlbHNlIGlmIChwcm9wZXJ0aWVzLnRoZW1lID09IFwiZGlzYXN0ZXJUeXBlXCIpIHtcbiAgICBlY29zUHJvcGVydGllcyA9IHByb3BlcnRpZXNbXCJlY29zX3Byb3BlcnRpZXNcIl1bXCJkaXNhc3RlclR5cGVcIl07IC8vdGhpcyBpcyBhbiBhcnJheSBvZiBkaXNhc3RlciB0eXBlcyBmb3IgdGhpcyBhcmVhXG4gICAgaWYgKGVjb3NQcm9wZXJ0aWVzICYmIGVjb3NQcm9wZXJ0aWVzLmRpc2FzdGVyX3R5cGVfX2MpIHtcblxuICAgICAgLy9Mb29rIHVwIHRoZSBjb2xvciBpbiB0aGUgZGljdGlvbmFyeVxuICAgICAgc3R5bGUuY29sb3IgPSBVTk9DSEFJY29uTG9va3VwW2Vjb3NQcm9wZXJ0aWVzLmRpc2FzdGVyX3R5cGVfX2NbMF1dLmNvbG9yO1xuICAgICAgLy9Vc2UgdGhlIHNhbWUgb3V0bGluZVxuICAgICAgc3R5bGUub3V0bGluZSA9IHtcbiAgICAgICAgY29sb3I6ICdyZ2IoMjAsMjAsMjApJyxcbiAgICAgICAgc2l6ZTogMlxuICAgICAgfVxuXG5cblxuICAgICAgaWYoY2hlY2tlZCA9PT0gdHJ1ZSl7XG4gICAgICAgIC8vRGlzYXN0ZXIgVHlwZSBzaG91bGQgdXNlIE9DSEEgaWNvbnNcbiAgICAgICAgc3R5bGUuc3RhdGljTGFiZWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdmFyIGxhYmVsU3R5bGUgPSB7XG4gICAgICAgICAgICBodG1sOiAoZWNvc1Byb3BlcnRpZXMgJiYgZWNvc1Byb3BlcnRpZXMuZGlzYXN0ZXJfdHlwZV9fY1swXSA/IGJ1aWxkRGlzYXN0ZXJUeXBlTGFiZWwoZWNvc1Byb3BlcnRpZXMuZGlzYXN0ZXJfdHlwZV9fY1swXSwgc3R5bGUuY29sb3IsIHN0eWxlLm91dGxpbmUpIDogXCJcIiksXG4gICAgICAgICAgICBpY29uU2l6ZTogWzQyLCA0Ml0sXG4gICAgICAgICAgICBjc3NDbGFzczogJ25vY2xhc3MnXG4gICAgICAgICAgfTtcbiAgICAgICAgICByZXR1cm4gbGFiZWxTdHlsZTtcbiAgICAgICAgfTtcbiAgICAgIH1cblxuXG4gICAgfVxuICB9XG4gIGVsc2UgaWYgKHByb3BlcnRpZXMudGhlbWUgPT0gXCJwcm9qZWN0Umlza1wiKSB7XG4gICAgZWNvc1Byb3BlcnRpZXMgPSBwcm9wZXJ0aWVzW1wiZWNvc19wcm9wZXJ0aWVzXCJdW1wicHJvamVjdFJpc2tcIl07XG4gICAgaWYgKGVjb3NQcm9wZXJ0aWVzICYmIGVjb3NQcm9wZXJ0aWVzLm92ZXJhbGxfYXNzZXNzbWVudF9fYykge1xuICAgICAgc3dpdGNoIChlY29zUHJvcGVydGllcy5vdmVyYWxsX2Fzc2Vzc21lbnRfX2MudG9Mb3dlckNhc2UoKSkge1xuICAgICAgICBjYXNlIFwiY3JpdGljYWxcIjpcbiAgICAgICAgICBzdHlsZS5jb2xvciA9ICdyZ2JhKDI1NSwwLDAsJyArIG9wYWNpdHkgKyAnKSc7XG4gICAgICAgICAgc3R5bGUub3V0bGluZSA9IHtcbiAgICAgICAgICAgIGNvbG9yOiAncmdiKDIwLDIwLDIwKScsXG4gICAgICAgICAgICBzaXplOiAyXG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiaGlnaFwiOlxuICAgICAgICAgIHN0eWxlLmNvbG9yID0gJ3JnYmEoMjU1LDEyNywwLCcgKyBvcGFjaXR5ICsgJyknO1xuICAgICAgICAgIHN0eWxlLm91dGxpbmUgPSB7XG4gICAgICAgICAgICBjb2xvcjogJ3JnYigyMCwyMCwyMCknLFxuICAgICAgICAgICAgc2l6ZTogMlxuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIm1lZGl1bVwiOlxuICAgICAgICAgIHN0eWxlLmNvbG9yID0gJ3JnYmEoMjU1LDI1NSwwLCcgKyBvcGFjaXR5ICsgJyknO1xuICAgICAgICAgIHN0eWxlLm91dGxpbmUgPSB7XG4gICAgICAgICAgICBjb2xvcjogJ3JnYigyMCwyMCwyMCknLFxuICAgICAgICAgICAgc2l6ZTogMlxuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcImxvd1wiOlxuICAgICAgICAgIHN0eWxlLmNvbG9yID0gJ3JnYmEoMCwyNTUsMCwnICsgb3BhY2l0eSArICcpJztcbiAgICAgICAgICBzdHlsZS5vdXRsaW5lID0ge1xuICAgICAgICAgICAgY29sb3I6ICdyZ2IoMjAsMjAsMjApJyxcbiAgICAgICAgICAgIHNpemU6IDJcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGVsc2UgaWYgKHByb3BlcnRpZXMudGhlbWUgPT0gXCJwcm9qZWN0SGVhbHRoXCIpIHtcbiAgICBlY29zUHJvcGVydGllcyA9IHByb3BlcnRpZXNbXCJlY29zX3Byb3BlcnRpZXNcIl1bXCJwcm9qZWN0SGVhbHRoXCJdO1xuICAgIGlmIChlY29zUHJvcGVydGllcyAmJiBlY29zUHJvcGVydGllcy5vdmVyYWxsX3N0YXR1c19fYykge1xuICAgICAgc3dpdGNoIChlY29zUHJvcGVydGllcy5vdmVyYWxsX3N0YXR1c19fYy50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICAgIGNhc2UgXCJyZWRcIjpcbiAgICAgICAgICBzdHlsZS5jb2xvciA9ICdyZ2JhKDI1NSwwLDAsJyArIG9wYWNpdHkgKyAnKSc7XG4gICAgICAgICAgc3R5bGUub3V0bGluZSA9IHtcbiAgICAgICAgICAgIGNvbG9yOiAncmdiKDIwLDIwLDIwKScsXG4gICAgICAgICAgICBzaXplOiAyXG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwieWVsbG93XCI6XG4gICAgICAgICAgc3R5bGUuY29sb3IgPSAncmdiYSgyNTUsMjU1LDAsJyArIG9wYWNpdHkgKyAnKSc7XG4gICAgICAgICAgc3R5bGUub3V0bGluZSA9IHtcbiAgICAgICAgICAgIGNvbG9yOiAncmdiKDIwLDIwLDIwKScsXG4gICAgICAgICAgICBzaXplOiAyXG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiZ3JlZW5cIjpcbiAgICAgICAgICBzdHlsZS5jb2xvciA9ICdyZ2JhKDAsMjU1LDAsJyArIG9wYWNpdHkgKyAnKSc7XG4gICAgICAgICAgc3R5bGUub3V0bGluZSA9IHtcbiAgICAgICAgICAgIGNvbG9yOiAncmdiKDIwLDIwLDIwKScsXG4gICAgICAgICAgICBzaXplOiAyXG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwid2hpdGVcIjpcbiAgICAgICAgICBzdHlsZS5jb2xvciA9ICdyZ2JhKDI1NSwyNTUsMjU1LCcgKyBvcGFjaXR5ICsgJyknO1xuICAgICAgICAgIHN0eWxlLm91dGxpbmUgPSB7XG4gICAgICAgICAgICBjb2xvcjogJ3JnYigyMCwyMCwyMCknLFxuICAgICAgICAgICAgc2l6ZTogMlxuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgZWxzZSBpZiAocHJvcGVydGllcy50aGVtZSA9PSBcInByb2plY3RcIikge1xuICAgIGVjb3NQcm9wZXJ0aWVzID0gcHJvcGVydGllc1tcImVjb3NfcHJvcGVydGllc1wiXVtcInByb2plY3RcIl07XG5cbiAgICBpZiAoZWNvc1Byb3BlcnRpZXMgJiYgZWNvc1Byb3BlcnRpZXMpIHtcblxuICAgICAgdmFyIGNvdW50ID0gIHBhcnNlSW50KGVjb3NQcm9wZXJ0aWVzLnRoZW1lX2NvdW50KTtcblxuICAgICAgaWYoY291bnQgPT0gMCkge1xuICAgICAgICAvL21ha2UgaG9sbG93XG4gICAgICAgIHN0eWxlLmNvbG9yID0gJ3JnYmEoMCwwLDAsJyArIG9wYWNpdHkgKyAnKSc7XG4gICAgICAgIHN0eWxlLm91dGxpbmUgPSB7XG4gICAgICAgICAgY29sb3I6ICdyZ2IoMjAsMjAsMjApJyxcbiAgICAgICAgICBzaXplOiAyXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2UgaWYoY291bnQgPiAwICYmIGNvdW50IDw9IDIpIHtcbiAgICAgICAgLy9tYWtlIGhvbGxvd1xuICAgICAgICBzdHlsZS5jb2xvciA9ICdyZ2JhKDIyOSwyNTUsMjM1LCcgKyBvcGFjaXR5ICsgJyknO1xuICAgICAgICBzdHlsZS5vdXRsaW5lID0ge1xuICAgICAgICAgIGNvbG9yOiAncmdiKDIwLDIwLDIwKScsXG4gICAgICAgICAgc2l6ZTogMlxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIGlmKGNvdW50ID4gMiAmJiBjb3VudCA8PSA1KSB7XG4gICAgICAgIC8vbWFrZSBob2xsb3dcbiAgICAgICAgc3R5bGUuY29sb3IgPSAncmdiYSgxNjksMjU1LDE4OSwnICsgb3BhY2l0eSArICcpJztcbiAgICAgICAgc3R5bGUub3V0bGluZSA9IHtcbiAgICAgICAgICBjb2xvcjogJ3JnYigyMCwyMCwyMCknLFxuICAgICAgICAgIHNpemU6IDJcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSBpZihjb3VudCA+IDUgJiYgY291bnQgPD0gOCkge1xuICAgICAgICAvL21ha2UgaG9sbG93XG4gICAgICAgIHN0eWxlLmNvbG9yID0gJ3JnYmEoMTY5LDI1NSwxMjUsJyArIG9wYWNpdHkgKyAnKSc7XG4gICAgICAgIHN0eWxlLm91dGxpbmUgPSB7XG4gICAgICAgICAgY29sb3I6ICdyZ2IoMjAsMjAsMjApJyxcbiAgICAgICAgICBzaXplOiAyXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2UgaWYoY291bnQgPiA4ICYmIGNvdW50IDw9IDEwKSB7XG4gICAgICAgIC8vbWFrZSBob2xsb3dcbiAgICAgICAgc3R5bGUuY29sb3IgPSAncmdiYSg0MSwyNTUsOTAsJyArIG9wYWNpdHkgKyAnKSc7XG4gICAgICAgIHN0eWxlLm91dGxpbmUgPSB7XG4gICAgICAgICAgY29sb3I6ICdyZ2IoMjAsMjAsMjApJyxcbiAgICAgICAgICBzaXplOiAyXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2UgaWYoY291bnQgPiAxMCkge1xuICAgICAgICAvL21ha2UgaG9sbG93XG4gICAgICAgIHN0eWxlLmNvbG9yID0gJ3JnYmEoMCwyNTUsNTksJyArIG9wYWNpdHkgKyAnKSc7XG4gICAgICAgIHN0eWxlLm91dGxpbmUgPSB7XG4gICAgICAgICAgY29sb3I6ICdyZ2IoMjAsMjAsMjApJyxcbiAgICAgICAgICBzaXplOiAyXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgIH1cbiAgICBlbHNle1xuICAgICAgLy9tYWtlIGhvbGxvd1xuICAgICAgc3R5bGUuY29sb3IgPSAncmdiYSgwLDAsMCwnICsgb3BhY2l0eSArICcpJztcbiAgICAgIHN0eWxlLm91dGxpbmUgPSB7XG4gICAgICAgIGNvbG9yOiAncmdiKDIwLDIwLDIwKScsXG4gICAgICAgIHNpemU6IDJcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuXG4gIC8vaWYoIWhhdGNoRGVzaWduKXtcbiAgLy8gIGhhdGNoRGVzaWduID0gZ2V0SW1hZ2VSZWYoKTtcbiAgLy99XG5cbiAgLy9zdHlsZS5zZWxlY3RlZCA9IHtcbiAgLy8gIGNvbG9yOiBmdW5jdGlvbihjdHgyZCl7XG4gIC8vICAgIC8vSGF0Y2ggc3ltYm9sXG4gIC8vICAgIHZhciByZXBlYXQgPSBjdHgyZC5jcmVhdGVQYXR0ZXJuKGhhdGNoRGVzaWduLCBcInJlcGVhdFwiKTtcbiAgLy8gICAgcmV0dXJuIHJlcGVhdDtcbiAgLy9cbiAgLy8gIH0sXG4gIC8vICBvdXRsaW5lIDoge1xuICAvLyAgICBjb2xvcjogJ3JnYigyNTUsMjU1LDApJyxcbiAgLy8gICAgc2l6ZTogMlxuICAvLyAgfVxuICAvL31cblxuICBzdHlsZS5zZWxlY3RlZCA9IHtcbiAgICBjb2xvcjogJ3JnYmEoMjU1LDI1NSwwLDAuOCknLFxuICAgIG91dGxpbmUgOiB7XG4gICAgICBjb2xvcjogJ3JnYigyNTUsMjU1LDApJyxcbiAgICAgIHNpemU6IDJcbiAgICB9XG4gIH1cblxuICAvL0xhYmVsXG4gIGlmKGNoZWNrZWQgPT09IHRydWUpIHtcblxuICAgIGlmICh2dGYubGF5ZXIubmFtZSA9PT0gJ0dBRE1fMjAxNF9sYWJlbCcpIHtcbiAgICAgIGlmIChlY29zUHJvcGVydGllcyAmJiBlY29zUHJvcGVydGllcy50aGVtZV9jb3VudCkge1xuXG4gICAgICAgIGlmIChwcm9wZXJ0aWVzLnRoZW1lICE9IFwiZGlzYXN0ZXJUeXBlXCIpIHtcbiAgICAgICAgICAvL0Rpc2FzdGVyIFR5cGUgbGFiZWxzIGFyZSBzZXQgaW4gdGhlIGJsb2MgYWJvdmVcbiAgICAgICAgICAvL0FsbCBvdGhlcnMgYXJlIHNldCBoZXJlLlxuXG4gICAgICAgICAgc3R5bGUuc3RhdGljTGFiZWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgbGFiZWxTdHlsZSA9IHtcbiAgICAgICAgICAgICAgaHRtbDogKGVjb3NQcm9wZXJ0aWVzICYmIGVjb3NQcm9wZXJ0aWVzLnRoZW1lX2NvdW50ID8gYnVpbGREeW5hbWljTGFiZWwoZWNvc1Byb3BlcnRpZXMpIDogXCJcIiksXG4gICAgICAgICAgICAgIGljb25TaXplOiBbNDIsIDQyXSxcbiAgICAgICAgICAgICAgY3NzQ2xhc3M6ICdub2NsYXNzJ1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJldHVybiBsYWJlbFN0eWxlO1xuICAgICAgICAgIH07XG5cbiAgICAgICAgfVxuXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgLy9XaGVuIHN3aXRjaGluZyB0aGVtZXMsIHJlc2V0IG9sZCBsYWJlbCBzdHlsZXMgdG8gbnVsbCBzbyBsYWJlbHMgZG9uJ3QgZ2V0IGRyYXduIGZvciBvbGQgdGhlbWUuXG4gICAgICAgIHN0eWxlLnN0YXRpY0xhYmVsID0gbnVsbDtcbiAgICAgIH1cblxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gYnVpbGREeW5hbWljTGFiZWwocHJvcGVydGllcyl7XG4gIGlmIChwcm9wZXJ0aWVzLnRoZW1lID09IFwiZGlzYXN0ZXJcIikge1xuICAgIHZhciBjb2xvciA9IFwiXCI7XG4gICAgdmFyIGxhYmVsQ29sb3IgPSBcIlwiO1xuICAgIGlmIChwcm9wZXJ0aWVzICYmIHByb3BlcnRpZXMuaXJvY19zdGF0dXNfX2MpIHtcbiAgICAgIHN3aXRjaCAocHJvcGVydGllcy5pcm9jX3N0YXR1c19fYy50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICAgIGNhc2UgXCJhY3RpdmVcIjpcbiAgICAgICAgICBjb2xvciA9IFwicmdiYSgyMDQsMCw1MSwwLjQpXCI7XG4gICAgICAgICAgbGFiZWxDb2xvciA9IFwiI2ZmZlwiO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwibW9uaXRvcmluZ1wiOlxuICAgICAgICAgIGNvbG9yID0gXCJyZ2JhKDIyNSwxODcsMzcsMC40KVwiO1xuICAgICAgICAgIGxhYmVsQ29sb3IgPSBcIiNmZmZcIjtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcImluYWN0aXZlXCI6XG4gICAgICAgICAgY29sb3IgPSBcInJnYmEoMTg5LDE4OSwxODksMC40KVwiO1xuICAgICAgICAgIGxhYmVsQ29sb3IgPSBcIiMwMDBcIjtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuICc8ZGl2IGNsYXNzPVwibGFiZWwtaWNvbi1udW1iZXItNDBwZXJjZW50XCInICsgKGNvbG9yID8gJyBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6ICcgKyBjb2xvciArICc7Y29sb3I6ICcgKyBsYWJlbENvbG9yICsgJ1wiJyA6ICcnKSArICc+PHNwYW4+JyArIHByb3BlcnRpZXMudGhlbWVfY291bnQgKyAnPC9zcGFuPjwvZGl2Pic7XG4gIH1cbiAgZWxzZSB7XG4gICAgcmV0dXJuICc8ZGl2IGNsYXNzPVwibGFiZWwtaWNvbi1udW1iZXItNDBwZXJjZW50XCI+PHNwYW4+JyArIHByb3BlcnRpZXMudGhlbWVfY291bnQgKyAnPC9zcGFuPjwvZGl2Pic7XG4gIH1cbn1cblxuXG4vKlxuU2V0IHRoZSBkaWN0aW9uYXJ5IHVzZWQgdG8gbG9vayB1cCBVTk9DSEEgaWNvbnMgZm9yIGRpc2FzdGVyIHR5cGVzXG4gKi9cbnZhciBVTk9DSEFJY29uTG9va3VwID0ge1xuXG4gIFwiTWV0ZW9yb2xvZ2ljYWwgLSBUcm9waWNhbCBDeWNsb25lXCI6IHtpY29uOiBcImljb24tZGlzYXN0ZXJfY3ljbG9uZVwiLCBjb2xvcjogXCJyZ2JhKDI1NSwwLDAsMSlcIn0sXG4gIFwiRmxvb2RzXCI6IHtpY29uOiBcImljb24tZGlzYXN0ZXJfZmxvb2RcIiwgY29sb3I6IFwicmdiYSgyNTUsMCwwLDEpXCJ9LFxuICBcIlRzdW5hbWksIFZvbGNhbm9cIjoge2ljb246IFwiaWNvbi1kaXNhc3Rlcl90c3VuYW1pXCIsIGNvbG9yOiBcInJnYmEoMjU1LDAsMCwxKVwifSxcbiAgXCJGbG9vZHMsIFN0b3JtXCI6IHtpY29uOiBcImljb24tZGlzYXN0ZXJfZmxvb2RcIiwgY29sb3I6IFwicmdiYSgyNTUsMCwwLDEpXCJ9LFxuICBcIlRzdW5hbWlcIjoge2ljb246IFwiaWNvbi1kaXNhc3Rlcl90c3VuYW1pXCIsIGNvbG9yOiBcInJnYmEoMjU1LDAsMCwxKVwifSxcbiAgXCJGYW1pbmUgLyBGb29kIEluc2VjdXJpdHlcIjoge2ljb246IFwiaWNvbi1jbHVzdGVyX2Zvb2Rfc2VjdXJpdHlcIiwgY29sb3I6IFwicmdiYSgyNTUsMCwwLDEpXCJ9LFxuICBcIkRyb3VnaHRcIjoge2ljb246IFwiaWNvbi1kaXNhc3Rlcl9kcm91Z2h0XCIsIGNvbG9yOiBcInJnYmEoMjU1LDAsMCwxKVwifSxcbiAgXCJNZXRlb3JvbG9naWNhbCAtIFRyb3BpY2FsIEN5Y2xvbmU7SHlkcm9sb2dpY2FsIC0gRmxvb2RzXCI6IHtpY29uOiBcImljb24tZGlzYXN0ZXJfY3ljbG9uZVwiLCBjb2xvcjogXCJyZ2JhKDI1NSwwLDAsMSlcIn0sXG4gIFwiRm9vZCBJbnNlY3VyaXR5XCI6IHtpY29uOiBcImljb24tY2x1c3Rlcl9mb29kX3NlY3VyaXR5XCIsIGNvbG9yOiBcInJnYmEoMjU1LDAsMCwxKVwifSxcbiAgXCJDaXZpbCBVbnJlc3RcIjoge2ljb246IFwiaWNvbi1wZW9wbGVfcmViZWxcIiwgY29sb3I6IFwicmdiYSgyNTUsMCwwLDEpXCJ9LFxuICBcIkZsb29kcywgVHJvcGljYWwgU3Rvcm1cIjoge2ljb246IFwiaWNvbi1kaXNhc3Rlcl9mbG9vZFwiLCBjb2xvcjogXCJyZ2JhKDI1NSwwLDAsMSlcIn0sXG4gIFwiQ29tcGxleCBFbWVyZ2VuY3lcIjoge2ljb246IFwiaWNvbi1jcmlzaXNfY29uZmxpY3RcIiwgY29sb3I6IFwicmdiYSgyNTUsMCwwLDEpXCJ9LFxuICBcIkVwaWRlbWljXCI6IHtpY29uOiBcImljb24tZGlzYXN0ZXJfZXBpZGVtaWNcIiwgY29sb3I6IFwicmdiYSgyNTUsMCwwLDEpXCJ9LFxuICBcIlBvcHVsYXRpb24gTW92ZW1lbnRcIjoge2ljb246IFwiaWNvbi1jcmlzaXNfcG9wdWxhdGlvbl9kaXNwbGFjZW1lbnRcIiwgY29sb3I6IFwicmdiYSgyNTUsMCwwLDEpXCJ9LFxuICBcIkNsaW1hdG9sb2dpY2FsIC0gRHJvdWdodFwiOiB7aWNvbjogXCJpY29uLWRpc2FzdGVyX2Ryb3VnaHRcIiwgY29sb3I6IFwicmdiYSgyNTUsMCwwLDEpXCJ9LFxuICBcIldpbnRlciBTdG9ybVwiOiB7aWNvbjogXCJpY29uLWRpc2FzdGVyX3Nub3dmYWxsXCIsIGNvbG9yOiBcInJnYmEoMjU1LDAsMCwxKVwifSxcbiAgXCJUcm9waWNhbCBTdG9ybVwiOiB7aWNvbjogXCJpY29uLWRpc2FzdGVyX2hlYXZ5X3JhaW5cIiwgY29sb3I6IFwicmdiYSgyNTUsMCwwLDEpXCJ9LFxuICBcIkVhcnRocXVha2UsIFRzdW5hbWlcIjoge2ljb246IFwiaWNvbi1kaXNhc3Rlcl9lYXJ0aHF1YWtlXCIsIGNvbG9yOiBcInJnYmEoMjU1LDAsMCwxKVwifSxcbiAgXCJIeWRyb2xvZ2ljYWwgLSBGbG9vZHNcIjoge2ljb246IFwiaWNvbi1kaXNhc3Rlcl9mbG9vZFwiLCBjb2xvcjogXCJyZ2JhKDI1NSwwLDAsMSlcIn0sXG4gIFwiTGFuZHNsaWRlO0Zsb29kc1wiOiB7aWNvbjogXCJpY29uLWRpc2FzdGVyX2xhbmRzbGlkZVwiLCBjb2xvcjogXCJyZ2JhKDI1NSwwLDAsMSlcIn0sXG4gIFwiRWFydGhxdWFrZVwiOiB7aWNvbjogXCJpY29uLWRpc2FzdGVyX2VhcnRocXVha2VcIiwgY29sb3I6IFwicmdiYSgyNTUsMCwwLDEpXCJ9LFxuICBcIkxhbmRzbGlkZTtIeWRyb2xvZ2ljYWwgLSBGbG9vZHNcIjoge2ljb246IFwiaWNvbi1kaXNhc3Rlcl9sYW5kc2xpZGVcIiwgY29sb3I6IFwicmdiYSgyNTUsMCwwLDEpXCJ9XG5cbn1cblxuZnVuY3Rpb24gYnVpbGREaXNhc3RlclR5cGVMYWJlbChkaXNhc3RlclR5cGUsIGNvbG9yKSB7XG5cbiAgdmFyIGNvbG9yID0gXCJcIjtcbiAgdmFyIGxhYmVsQ29sb3IgPSBcIlwiO1xuICBpZiAoZGlzYXN0ZXJUeXBlKSB7XG5cbiAgICBjb2xvciA9IGNvbG9yIHx8IFwicmdiYSgyMDQsMCw1MSwwLjQpXCI7XG4gICAgbGFiZWxDb2xvciA9IFwiI2ZmZlwiO1xuXG4gIH1cblxuICB2YXIgaWNvbiA9IFVOT0NIQUljb25Mb29rdXBbZGlzYXN0ZXJUeXBlXS5pY29uIHx8ICdpY29uLW90aGVyX2NsdXN0ZXJfb3RoZXInO1xuXG4gIHJldHVybiAnPGRpdiBjbGFzcz1cImxhYmVsLWljb24tbnVtYmVyLTEwMHBlcmNlbnRcIicgKyAoY29sb3IgPyAnIHN0eWxlPVwiZm9udC1mYW1pbHk6IGh1bWFuaXRhcmlhbl9pY29uczsgYmFja2dyb3VuZC1jb2xvcjogJyArIGNvbG9yICsgJztjb2xvcjogJyArIGxhYmVsQ29sb3IgKyAnXCInIDogJycpICsgJz48aSBjbGFzcz1cInVuICcgKyBpY29uICsgJ1wiPjwvaT48L2Rpdj4nO1xuXG59XG5cblxuXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbi8vIGZ1bmN0aW9uIHdhaXRmb3IgLSBXYWl0IHVudGlsIGEgY29uZGl0aW9uIGlzIG1ldFxuLy9cbi8vIE5lZWRlZCBwYXJhbWV0ZXJzOlxuLy8gICAgdGVzdDogYSB2YWx1ZVxuLy8gICAgZXhwZWN0ZWRWYWx1ZTogdGhlIHZhbHVlIG9mIHRoZSB0ZXN0IGZ1bmN0aW9uIHdlIGFyZSB3YWl0aW5nIGZvclxuLy8gICAgbXNlYzogZGVsYXkgYmV0d2VlbiB0aGUgY2FsbHMgdG8gdGVzdFxuLy8gICAgY2FsbGJhY2s6IGZ1bmN0aW9uIHRvIGV4ZWN1dGUgd2hlbiB0aGUgY29uZGl0aW9uIGlzIG1ldFxuLy8gUGFyYW1ldGVycyBmb3IgZGVidWdnaW5nOlxuLy8gICAgY291bnQ6IHVzZWQgdG8gY291bnQgdGhlIGxvb3BzXG4vLyAgICBzb3VyY2U6IGEgc3RyaW5nIHRvIHNwZWNpZnkgYW4gSUQsIGEgbWVzc2FnZSwgZXRjXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbmZ1bmN0aW9uIHdhaXRmb3IodGVzdCwgZXhwZWN0ZWRWYWx1ZSwgbXNlYywgY291bnQsIHNvdXJjZSwgY2FsbGJhY2spIHtcbiAgLy8gQ2hlY2sgaWYgY29uZGl0aW9uIG1ldC4gSWYgbm90LCByZS1jaGVjayBsYXRlciAobXNlYykuXG4gIHdoaWxlICh0ZXN0KCkgIT09IGV4cGVjdGVkVmFsdWUpIHtcbiAgICBjb3VudCsrO1xuICAgIGNvbnNvbGUubG9nKFwiV2FpdGluZyBmb3IgY29uZGl0aW9uIHRvIGJlIG1ldC4uLlwiICsgY291bnQpO1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICB3YWl0Zm9yKHRlc3QsIGV4cGVjdGVkVmFsdWUsIG1zZWMsIGNvdW50LCBzb3VyY2UsIGNhbGxiYWNrKTtcbiAgICB9LCBtc2VjKTtcbiAgICByZXR1cm47XG4gIH1cbiAgLy8gQ29uZGl0aW9uIGZpbmFsbHkgbWV0LiBjYWxsYmFjaygpIGNhbiBiZSBleGVjdXRlZC5cbiAgY29uc29sZS5sb2coc291cmNlICsgJzogJyArIHRlc3QoKSArICcsIGV4cGVjdGVkOiAnICsgZXhwZWN0ZWRWYWx1ZSArICcsICcgKyBjb3VudCArICcgbG9vcHMuJyk7XG4gIGNhbGxiYWNrKCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZURlc2lnbigpe1xuICB2YXIgcGF0dGVybiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICBwYXR0ZXJuLndpZHRoID0gNDA7XG4gIHBhdHRlcm4uaGVpZ2h0ID0gNDA7XG4gIHZhciBwY3R4ID0gcGF0dGVybi5nZXRDb250ZXh0KCcyZCcpO1xuXG4gIHBjdHguZmlsbFN0eWxlID0gXCJyZ2JhKDE4OCwgMjIyLCAxNzgsIDAuNSlcIjtcbiAgcGN0eC5maWxsUmVjdCgwLDAsMjAsMjApO1xuICBwY3R4LmZpbGxSZWN0KDIwLDIwLDIwLDIwKTtcblxuICByZXR1cm4gcGF0dGVybjtcbn1cblxuZnVuY3Rpb24gZ2V0SW1hZ2VSZWYodXJsKXtcbiAgdmFyIGltZyA9IG5ldyBJbWFnZSgyNTYsMjU2KTsgLy8gd2lkdGgsIGhlaWdodCB2YWx1ZXMgYXJlIG9wdGlvbmFsIHBhcmFtc1xuICBpbWcuc3JjID0gJ2ltYWdlcy9kaWFnb25hbF9zdHJpcGVzXzEucG5nJztcbiAgcmV0dXJuIGltZztcbn1cblxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZ2FkbTAgOiBnYWRtMCxcbiAgZ2FkbTEgOiBnYWRtMVxufTsiLCIoZnVuY3Rpb24gKEJ1ZmZlcil7XG4ndXNlIHN0cmljdCc7XG5cbnZhciBpZWVlNzU0ID0gcmVxdWlyZSgnaWVlZTc1NCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFByb3RvYnVmO1xuZnVuY3Rpb24gUHJvdG9idWYoYnVmKSB7XG4gICAgdGhpcy5idWYgPSBidWY7XG4gICAgdGhpcy5wb3MgPSAwO1xufVxuXG5Qcm90b2J1Zi5wcm90b3R5cGUgPSB7XG4gICAgZ2V0IGxlbmd0aCgpIHsgcmV0dXJuIHRoaXMuYnVmLmxlbmd0aDsgfVxufTtcblxuUHJvdG9idWYuVmFyaW50ID0gMDtcblByb3RvYnVmLkludDY0ID0gMTtcblByb3RvYnVmLk1lc3NhZ2UgPSAyO1xuUHJvdG9idWYuU3RyaW5nID0gMjtcblByb3RvYnVmLlBhY2tlZCA9IDI7XG5Qcm90b2J1Zi5JbnQzMiA9IDU7XG5cblByb3RvYnVmLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5idWYgPSBudWxsO1xufTtcblxuLy8gPT09IFJFQURJTkcgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuUHJvdG9idWYucHJvdG90eXBlLnJlYWRVSW50MzIgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgdmFsID0gdGhpcy5idWYucmVhZFVJbnQzMkxFKHRoaXMucG9zKTtcbiAgICB0aGlzLnBvcyArPSA0O1xuICAgIHJldHVybiB2YWw7XG59O1xuXG5Qcm90b2J1Zi5wcm90b3R5cGUucmVhZFVJbnQ2NCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciB2YWwgPSB0aGlzLmJ1Zi5yZWFkVUludDY0TEUodGhpcy5wb3MpO1xuICAgIHRoaXMucG9zICs9IDg7XG4gICAgcmV0dXJuIHZhbDtcbn07XG5cblByb3RvYnVmLnByb3RvdHlwZS5yZWFkRG91YmxlID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHZhbCA9IGllZWU3NTQucmVhZCh0aGlzLmJ1ZiwgdGhpcy5wb3MsIHRydWUsIDUyLCA4KTtcbiAgICB0aGlzLnBvcyArPSA4O1xuICAgIHJldHVybiB2YWw7XG59O1xuXG5Qcm90b2J1Zi5wcm90b3R5cGUucmVhZFZhcmludCA9IGZ1bmN0aW9uKCkge1xuICAgIC8vIFRPRE86IGJvdW5kcyBjaGVja2luZ1xuICAgIHZhciBwb3MgPSB0aGlzLnBvcztcbiAgICBpZiAodGhpcy5idWZbcG9zXSA8PSAweDdmKSB7XG4gICAgICAgIHRoaXMucG9zKys7XG4gICAgICAgIHJldHVybiB0aGlzLmJ1Zltwb3NdO1xuICAgIH0gZWxzZSBpZiAodGhpcy5idWZbcG9zICsgMV0gPD0gMHg3Zikge1xuICAgICAgICB0aGlzLnBvcyArPSAyO1xuICAgICAgICByZXR1cm4gKHRoaXMuYnVmW3Bvc10gJiAweDdmKSB8ICh0aGlzLmJ1Zltwb3MgKyAxXSA8PCA3KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuYnVmW3BvcyArIDJdIDw9IDB4N2YpIHtcbiAgICAgICAgdGhpcy5wb3MgKz0gMztcbiAgICAgICAgcmV0dXJuICh0aGlzLmJ1Zltwb3NdICYgMHg3ZikgfCAodGhpcy5idWZbcG9zICsgMV0gJiAweDdmKSA8PCA3IHwgKHRoaXMuYnVmW3BvcyArIDJdKSA8PCAxNDtcbiAgICB9IGVsc2UgaWYgKHRoaXMuYnVmW3BvcyArIDNdIDw9IDB4N2YpIHtcbiAgICAgICAgdGhpcy5wb3MgKz0gNDtcbiAgICAgICAgcmV0dXJuICh0aGlzLmJ1Zltwb3NdICYgMHg3ZikgfCAodGhpcy5idWZbcG9zICsgMV0gJiAweDdmKSA8PCA3IHwgKHRoaXMuYnVmW3BvcyArIDJdICYgMHg3ZikgPDwgMTQgfCAodGhpcy5idWZbcG9zICsgM10pIDw8IDIxO1xuICAgIH0gZWxzZSBpZiAodGhpcy5idWZbcG9zICsgNF0gPD0gMHg3Zikge1xuICAgICAgICB0aGlzLnBvcyArPSA1O1xuICAgICAgICByZXR1cm4gKCh0aGlzLmJ1Zltwb3NdICYgMHg3ZikgfCAodGhpcy5idWZbcG9zICsgMV0gJiAweDdmKSA8PCA3IHwgKHRoaXMuYnVmW3BvcyArIDJdICYgMHg3ZikgPDwgMTQgfCAodGhpcy5idWZbcG9zICsgM10pIDw8IDIxKSArICh0aGlzLmJ1Zltwb3MgKyA0XSAqIDI2ODQzNTQ1Nik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5za2lwKFByb3RvYnVmLlZhcmludCk7XG4gICAgICAgIHJldHVybiAwO1xuICAgICAgICAvLyB0aHJvdyBuZXcgRXJyb3IoXCJUT0RPOiBIYW5kbGUgNisgYnl0ZSB2YXJpbnRzXCIpO1xuICAgIH1cbn07XG5cblByb3RvYnVmLnByb3RvdHlwZS5yZWFkU1ZhcmludCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBudW0gPSB0aGlzLnJlYWRWYXJpbnQoKTtcbiAgICBpZiAobnVtID4gMjE0NzQ4MzY0NykgdGhyb3cgbmV3IEVycm9yKCdUT0RPOiBIYW5kbGUgbnVtYmVycyA+PSAyXjMwJyk7XG4gICAgLy8gemlnemFnIGVuY29kaW5nXG4gICAgcmV0dXJuICgobnVtID4+IDEpIF4gLShudW0gJiAxKSk7XG59O1xuXG5Qcm90b2J1Zi5wcm90b3R5cGUucmVhZFN0cmluZyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBieXRlcyA9IHRoaXMucmVhZFZhcmludCgpO1xuICAgIC8vIFRPRE86IGJvdW5kcyBjaGVja2luZ1xuICAgIHZhciBjaHIgPSBTdHJpbmcuZnJvbUNoYXJDb2RlO1xuICAgIHZhciBiID0gdGhpcy5idWY7XG4gICAgdmFyIHAgPSB0aGlzLnBvcztcbiAgICB2YXIgZW5kID0gdGhpcy5wb3MgKyBieXRlcztcbiAgICB2YXIgc3RyID0gJyc7XG4gICAgd2hpbGUgKHAgPCBlbmQpIHtcbiAgICAgICAgaWYgKGJbcF0gPD0gMHg3Rikgc3RyICs9IGNocihiW3ArK10pO1xuICAgICAgICBlbHNlIGlmIChiW3BdIDw9IDB4QkYpIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBVVEYtOCBjb2RlcG9pbnQ6ICcgKyBiW3BdKTtcbiAgICAgICAgZWxzZSBpZiAoYltwXSA8PSAweERGKSBzdHIgKz0gY2hyKChiW3ArK10gJiAweDFGKSA8PCA2IHwgKGJbcCsrXSAmIDB4M0YpKTtcbiAgICAgICAgZWxzZSBpZiAoYltwXSA8PSAweEVGKSBzdHIgKz0gY2hyKChiW3ArK10gJiAweDFGKSA8PCAxMiB8IChiW3ArK10gJiAweDNGKSA8PCA2IHwgKGJbcCsrXSAmIDB4M0YpKTtcbiAgICAgICAgZWxzZSBpZiAoYltwXSA8PSAweEY3KSBwICs9IDQ7IC8vIFdlIGNhbid0IGhhbmRsZSB0aGVzZSBjb2RlcG9pbnRzIGluIEpTLCBzbyBza2lwLlxuICAgICAgICBlbHNlIGlmIChiW3BdIDw9IDB4RkIpIHAgKz0gNTtcbiAgICAgICAgZWxzZSBpZiAoYltwXSA8PSAweEZEKSBwICs9IDY7XG4gICAgICAgIGVsc2UgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIFVURi04IGNvZGVwb2ludDogJyArIGJbcF0pO1xuICAgIH1cbiAgICB0aGlzLnBvcyArPSBieXRlcztcbiAgICByZXR1cm4gc3RyO1xufTtcblxuUHJvdG9idWYucHJvdG90eXBlLnJlYWRCdWZmZXIgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgYnl0ZXMgPSB0aGlzLnJlYWRWYXJpbnQoKTtcbiAgICB2YXIgYnVmZmVyID0gdGhpcy5idWYuc3ViYXJyYXkodGhpcy5wb3MsIHRoaXMucG9zICsgYnl0ZXMpO1xuICAgIHRoaXMucG9zICs9IGJ5dGVzO1xuICAgIHJldHVybiBidWZmZXI7XG59O1xuXG5Qcm90b2J1Zi5wcm90b3R5cGUucmVhZFBhY2tlZCA9IGZ1bmN0aW9uKHR5cGUpIHtcbiAgICAvLyBUT0RPOiBib3VuZHMgY2hlY2tpbmdcbiAgICB2YXIgYnl0ZXMgPSB0aGlzLnJlYWRWYXJpbnQoKTtcbiAgICB2YXIgZW5kID0gdGhpcy5wb3MgKyBieXRlcztcbiAgICB2YXIgYXJyYXkgPSBbXTtcbiAgICB3aGlsZSAodGhpcy5wb3MgPCBlbmQpIHtcbiAgICAgICAgYXJyYXkucHVzaCh0aGlzWydyZWFkJyArIHR5cGVdKCkpO1xuICAgIH1cbiAgICByZXR1cm4gYXJyYXk7XG59O1xuXG5Qcm90b2J1Zi5wcm90b3R5cGUuc2tpcCA9IGZ1bmN0aW9uKHZhbCkge1xuICAgIC8vIFRPRE86IGJvdW5kcyBjaGVja2luZ1xuICAgIHZhciB0eXBlID0gdmFsICYgMHg3O1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAvKiB2YXJpbnQgKi8gY2FzZSBQcm90b2J1Zi5WYXJpbnQ6IHdoaWxlICh0aGlzLmJ1Zlt0aGlzLnBvcysrXSA+IDB4N2YpOyBicmVhaztcbiAgICAgICAgLyogNjQgYml0ICovIGNhc2UgUHJvdG9idWYuSW50NjQ6IHRoaXMucG9zICs9IDg7IGJyZWFrO1xuICAgICAgICAvKiBsZW5ndGggKi8gY2FzZSBQcm90b2J1Zi5NZXNzYWdlOiB2YXIgYnl0ZXMgPSB0aGlzLnJlYWRWYXJpbnQoKTsgdGhpcy5wb3MgKz0gYnl0ZXM7IGJyZWFrO1xuICAgICAgICAvKiAzMiBiaXQgKi8gY2FzZSBQcm90b2J1Zi5JbnQzMjogdGhpcy5wb3MgKz0gNDsgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6IHRocm93IG5ldyBFcnJvcignVW5pbXBsZW1lbnRlZCB0eXBlOiAnICsgdHlwZSk7XG4gICAgfVxufTtcblxuLy8gPT09IFdSSVRJTkcgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuUHJvdG9idWYucHJvdG90eXBlLndyaXRlVGFnID0gZnVuY3Rpb24odGFnLCB0eXBlKSB7XG4gICAgdGhpcy53cml0ZVZhcmludCgodGFnIDw8IDMpIHwgdHlwZSk7XG59O1xuXG5Qcm90b2J1Zi5wcm90b3R5cGUucmVhbGxvYyA9IGZ1bmN0aW9uKG1pbikge1xuICAgIHZhciBsZW5ndGggPSB0aGlzLmJ1Zi5sZW5ndGg7XG4gICAgd2hpbGUgKGxlbmd0aCA8IHRoaXMucG9zICsgbWluKSBsZW5ndGggKj0gMjtcbiAgICBpZiAobGVuZ3RoICE9IHRoaXMuYnVmLmxlbmd0aCkge1xuICAgICAgICB2YXIgYnVmID0gbmV3IEJ1ZmZlcihsZW5ndGgpO1xuICAgICAgICB0aGlzLmJ1Zi5jb3B5KGJ1Zik7XG4gICAgICAgIHRoaXMuYnVmID0gYnVmO1xuICAgIH1cbn07XG5cblByb3RvYnVmLnByb3RvdHlwZS5maW5pc2ggPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5idWYuc2xpY2UoMCwgdGhpcy5wb3MpO1xufTtcblxuUHJvdG9idWYucHJvdG90eXBlLndyaXRlUGFja2VkID0gZnVuY3Rpb24odHlwZSwgdGFnLCBpdGVtcykge1xuICAgIGlmICghaXRlbXMubGVuZ3RoKSByZXR1cm47XG5cbiAgICB2YXIgbWVzc2FnZSA9IG5ldyBQcm90b2J1ZigpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbWVzc2FnZVsnd3JpdGUnICsgdHlwZV0oaXRlbXNbaV0pO1xuICAgIH1cbiAgICB2YXIgZGF0YSA9IG1lc3NhZ2UuZmluaXNoKCk7XG5cbiAgICB0aGlzLndyaXRlVGFnKHRhZywgUHJvdG9idWYuUGFja2VkKTtcbiAgICB0aGlzLndyaXRlQnVmZmVyKGRhdGEpO1xufTtcblxuUHJvdG9idWYucHJvdG90eXBlLndyaXRlVUludDMyID0gZnVuY3Rpb24odmFsKSB7XG4gICAgdGhpcy5yZWFsbG9jKDQpO1xuICAgIHRoaXMuYnVmLndyaXRlVUludDMyTEUodmFsLCB0aGlzLnBvcyk7XG4gICAgdGhpcy5wb3MgKz0gNDtcbn07XG5cblByb3RvYnVmLnByb3RvdHlwZS53cml0ZVRhZ2dlZFVJbnQzMiA9IGZ1bmN0aW9uKHRhZywgdmFsKSB7XG4gICAgdGhpcy53cml0ZVRhZyh0YWcsIFByb3RvYnVmLkludDMyKTtcbiAgICB0aGlzLndyaXRlVUludDMyKHZhbCk7XG59O1xuXG5Qcm90b2J1Zi5wcm90b3R5cGUud3JpdGVWYXJpbnQgPSBmdW5jdGlvbih2YWwpIHtcbiAgICB2YWwgPSBOdW1iZXIodmFsKTtcbiAgICBpZiAoaXNOYU4odmFsKSkge1xuICAgICAgICB2YWwgPSAwO1xuICAgIH1cblxuICAgIGlmICh2YWwgPD0gMHg3Zikge1xuICAgICAgICB0aGlzLnJlYWxsb2MoMSk7XG4gICAgICAgIHRoaXMuYnVmW3RoaXMucG9zKytdID0gdmFsO1xuICAgIH0gZWxzZSBpZiAodmFsIDw9IDB4M2ZmZikge1xuICAgICAgICB0aGlzLnJlYWxsb2MoMik7XG4gICAgICAgIHRoaXMuYnVmW3RoaXMucG9zKytdID0gMHg4MCB8ICgodmFsID4+PiAwKSAmIDB4N2YpO1xuICAgICAgICB0aGlzLmJ1Zlt0aGlzLnBvcysrXSA9IDB4MDAgfCAoKHZhbCA+Pj4gNykgJiAweDdmKTtcbiAgICB9IGVsc2UgaWYgKHZhbCA8PSAweDFmZmZmZmYpIHtcbiAgICAgICAgdGhpcy5yZWFsbG9jKDMpO1xuICAgICAgICB0aGlzLmJ1Zlt0aGlzLnBvcysrXSA9IDB4ODAgfCAoKHZhbCA+Pj4gMCkgJiAweDdmKTtcbiAgICAgICAgdGhpcy5idWZbdGhpcy5wb3MrK10gPSAweDgwIHwgKCh2YWwgPj4+IDcpICYgMHg3Zik7XG4gICAgICAgIHRoaXMuYnVmW3RoaXMucG9zKytdID0gMHgwMCB8ICgodmFsID4+PiAxNCkgJiAweDdmKTtcbiAgICB9IGVsc2UgaWYgKHZhbCA8PSAweGZmZmZmZmYpIHtcbiAgICAgICAgdGhpcy5yZWFsbG9jKDQpO1xuICAgICAgICB0aGlzLmJ1Zlt0aGlzLnBvcysrXSA9IDB4ODAgfCAoKHZhbCA+Pj4gMCkgJiAweDdmKTtcbiAgICAgICAgdGhpcy5idWZbdGhpcy5wb3MrK10gPSAweDgwIHwgKCh2YWwgPj4+IDcpICYgMHg3Zik7XG4gICAgICAgIHRoaXMuYnVmW3RoaXMucG9zKytdID0gMHg4MCB8ICgodmFsID4+PiAxNCkgJiAweDdmKTtcbiAgICAgICAgdGhpcy5idWZbdGhpcy5wb3MrK10gPSAweDAwIHwgKCh2YWwgPj4+IDIxKSAmIDB4N2YpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHdoaWxlICh2YWwgPiAwKSB7XG4gICAgICAgICAgICB2YXIgYiA9IHZhbCAmIDB4N2Y7XG4gICAgICAgICAgICB2YWwgPSBNYXRoLmZsb29yKHZhbCAvIDEyOCk7XG4gICAgICAgICAgICBpZiAodmFsID4gMCkgYiB8PSAweDgwXG4gICAgICAgICAgICB0aGlzLnJlYWxsb2MoMSk7XG4gICAgICAgICAgICB0aGlzLmJ1Zlt0aGlzLnBvcysrXSA9IGI7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5Qcm90b2J1Zi5wcm90b3R5cGUud3JpdGVUYWdnZWRWYXJpbnQgPSBmdW5jdGlvbih0YWcsIHZhbCkge1xuICAgIHRoaXMud3JpdGVUYWcodGFnLCBQcm90b2J1Zi5WYXJpbnQpO1xuICAgIHRoaXMud3JpdGVWYXJpbnQodmFsKTtcbn07XG5cblByb3RvYnVmLnByb3RvdHlwZS53cml0ZVNWYXJpbnQgPSBmdW5jdGlvbih2YWwpIHtcbiAgICBpZiAodmFsID49IDApIHtcbiAgICAgICAgdGhpcy53cml0ZVZhcmludCh2YWwgKiAyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLndyaXRlVmFyaW50KHZhbCAqIC0yIC0gMSk7XG4gICAgfVxufTtcblxuUHJvdG9idWYucHJvdG90eXBlLndyaXRlVGFnZ2VkU1ZhcmludCA9IGZ1bmN0aW9uKHRhZywgdmFsKSB7XG4gICAgdGhpcy53cml0ZVRhZyh0YWcsIFByb3RvYnVmLlZhcmludCk7XG4gICAgdGhpcy53cml0ZVNWYXJpbnQodmFsKTtcbn07XG5cblByb3RvYnVmLnByb3RvdHlwZS53cml0ZUJvb2xlYW4gPSBmdW5jdGlvbih2YWwpIHtcbiAgICB0aGlzLndyaXRlVmFyaW50KEJvb2xlYW4odmFsKSk7XG59O1xuXG5Qcm90b2J1Zi5wcm90b3R5cGUud3JpdGVUYWdnZWRCb29sZWFuID0gZnVuY3Rpb24odGFnLCB2YWwpIHtcbiAgICB0aGlzLndyaXRlVGFnZ2VkVmFyaW50KHRhZywgQm9vbGVhbih2YWwpKTtcbn07XG5cblByb3RvYnVmLnByb3RvdHlwZS53cml0ZVN0cmluZyA9IGZ1bmN0aW9uKHN0cikge1xuICAgIHN0ciA9IFN0cmluZyhzdHIpO1xuICAgIHZhciBieXRlcyA9IEJ1ZmZlci5ieXRlTGVuZ3RoKHN0cik7XG4gICAgdGhpcy53cml0ZVZhcmludChieXRlcyk7XG4gICAgdGhpcy5yZWFsbG9jKGJ5dGVzKTtcbiAgICB0aGlzLmJ1Zi53cml0ZShzdHIsIHRoaXMucG9zKTtcbiAgICB0aGlzLnBvcyArPSBieXRlcztcbn07XG5cblByb3RvYnVmLnByb3RvdHlwZS53cml0ZVRhZ2dlZFN0cmluZyA9IGZ1bmN0aW9uKHRhZywgc3RyKSB7XG4gICAgdGhpcy53cml0ZVRhZyh0YWcsIFByb3RvYnVmLlN0cmluZyk7XG4gICAgdGhpcy53cml0ZVN0cmluZyhzdHIpO1xufTtcblxuUHJvdG9idWYucHJvdG90eXBlLndyaXRlRmxvYXQgPSBmdW5jdGlvbih2YWwpIHtcbiAgICB0aGlzLnJlYWxsb2MoNCk7XG4gICAgdGhpcy5idWYud3JpdGVGbG9hdExFKHZhbCwgdGhpcy5wb3MpO1xuICAgIHRoaXMucG9zICs9IDQ7XG59O1xuXG5Qcm90b2J1Zi5wcm90b3R5cGUud3JpdGVUYWdnZWRGbG9hdCA9IGZ1bmN0aW9uKHRhZywgdmFsKSB7XG4gICAgdGhpcy53cml0ZVRhZyh0YWcsIFByb3RvYnVmLkludDMyKTtcbiAgICB0aGlzLndyaXRlRmxvYXQodmFsKTtcbn07XG5cblByb3RvYnVmLnByb3RvdHlwZS53cml0ZURvdWJsZSA9IGZ1bmN0aW9uKHZhbCkge1xuICAgIHRoaXMucmVhbGxvYyg4KTtcbiAgICB0aGlzLmJ1Zi53cml0ZURvdWJsZUxFKHZhbCwgdGhpcy5wb3MpO1xuICAgIHRoaXMucG9zICs9IDg7XG59O1xuXG5Qcm90b2J1Zi5wcm90b3R5cGUud3JpdGVUYWdnZWREb3VibGUgPSBmdW5jdGlvbih0YWcsIHZhbCkge1xuICAgIHRoaXMud3JpdGVUYWcodGFnLCBQcm90b2J1Zi5JbnQ2NCk7XG4gICAgdGhpcy53cml0ZURvdWJsZSh2YWwpO1xufTtcblxuUHJvdG9idWYucHJvdG90eXBlLndyaXRlQnVmZmVyID0gZnVuY3Rpb24oYnVmZmVyKSB7XG4gICAgdmFyIGJ5dGVzID0gYnVmZmVyLmxlbmd0aDtcbiAgICB0aGlzLndyaXRlVmFyaW50KGJ5dGVzKTtcbiAgICB0aGlzLnJlYWxsb2MoYnl0ZXMpO1xuICAgIGJ1ZmZlci5jb3B5KHRoaXMuYnVmLCB0aGlzLnBvcyk7XG4gICAgdGhpcy5wb3MgKz0gYnl0ZXM7XG59O1xuXG5Qcm90b2J1Zi5wcm90b3R5cGUud3JpdGVUYWdnZWRCdWZmZXIgPSBmdW5jdGlvbih0YWcsIGJ1ZmZlcikge1xuICAgIHRoaXMud3JpdGVUYWcodGFnLCBQcm90b2J1Zi5TdHJpbmcpO1xuICAgIHRoaXMud3JpdGVCdWZmZXIoYnVmZmVyKTtcbn07XG5cblByb3RvYnVmLnByb3RvdHlwZS53cml0ZU1lc3NhZ2UgPSBmdW5jdGlvbih0YWcsIHByb3RvYnVmKSB7XG4gICAgdmFyIGJ1ZmZlciA9IHByb3RvYnVmLmZpbmlzaCgpO1xuICAgIHRoaXMud3JpdGVUYWcodGFnLCBQcm90b2J1Zi5NZXNzYWdlKTtcbiAgICB0aGlzLndyaXRlQnVmZmVyKGJ1ZmZlcik7XG59O1xuXG59KS5jYWxsKHRoaXMscmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIpIiwiZXhwb3J0cy5yZWFkID0gZnVuY3Rpb24oYnVmZmVyLCBvZmZzZXQsIGlzTEUsIG1MZW4sIG5CeXRlcykge1xuICB2YXIgZSwgbSxcbiAgICAgIGVMZW4gPSBuQnl0ZXMgKiA4IC0gbUxlbiAtIDEsXG4gICAgICBlTWF4ID0gKDEgPDwgZUxlbikgLSAxLFxuICAgICAgZUJpYXMgPSBlTWF4ID4+IDEsXG4gICAgICBuQml0cyA9IC03LFxuICAgICAgaSA9IGlzTEUgPyAobkJ5dGVzIC0gMSkgOiAwLFxuICAgICAgZCA9IGlzTEUgPyAtMSA6IDEsXG4gICAgICBzID0gYnVmZmVyW29mZnNldCArIGldO1xuXG4gIGkgKz0gZDtcblxuICBlID0gcyAmICgoMSA8PCAoLW5CaXRzKSkgLSAxKTtcbiAgcyA+Pj0gKC1uQml0cyk7XG4gIG5CaXRzICs9IGVMZW47XG4gIGZvciAoOyBuQml0cyA+IDA7IGUgPSBlICogMjU2ICsgYnVmZmVyW29mZnNldCArIGldLCBpICs9IGQsIG5CaXRzIC09IDgpO1xuXG4gIG0gPSBlICYgKCgxIDw8ICgtbkJpdHMpKSAtIDEpO1xuICBlID4+PSAoLW5CaXRzKTtcbiAgbkJpdHMgKz0gbUxlbjtcbiAgZm9yICg7IG5CaXRzID4gMDsgbSA9IG0gKiAyNTYgKyBidWZmZXJbb2Zmc2V0ICsgaV0sIGkgKz0gZCwgbkJpdHMgLT0gOCk7XG5cbiAgaWYgKGUgPT09IDApIHtcbiAgICBlID0gMSAtIGVCaWFzO1xuICB9IGVsc2UgaWYgKGUgPT09IGVNYXgpIHtcbiAgICByZXR1cm4gbSA/IE5hTiA6ICgocyA/IC0xIDogMSkgKiBJbmZpbml0eSk7XG4gIH0gZWxzZSB7XG4gICAgbSA9IG0gKyBNYXRoLnBvdygyLCBtTGVuKTtcbiAgICBlID0gZSAtIGVCaWFzO1xuICB9XG4gIHJldHVybiAocyA/IC0xIDogMSkgKiBtICogTWF0aC5wb3coMiwgZSAtIG1MZW4pO1xufTtcblxuZXhwb3J0cy53cml0ZSA9IGZ1bmN0aW9uKGJ1ZmZlciwgdmFsdWUsIG9mZnNldCwgaXNMRSwgbUxlbiwgbkJ5dGVzKSB7XG4gIHZhciBlLCBtLCBjLFxuICAgICAgZUxlbiA9IG5CeXRlcyAqIDggLSBtTGVuIC0gMSxcbiAgICAgIGVNYXggPSAoMSA8PCBlTGVuKSAtIDEsXG4gICAgICBlQmlhcyA9IGVNYXggPj4gMSxcbiAgICAgIHJ0ID0gKG1MZW4gPT09IDIzID8gTWF0aC5wb3coMiwgLTI0KSAtIE1hdGgucG93KDIsIC03NykgOiAwKSxcbiAgICAgIGkgPSBpc0xFID8gMCA6IChuQnl0ZXMgLSAxKSxcbiAgICAgIGQgPSBpc0xFID8gMSA6IC0xLFxuICAgICAgcyA9IHZhbHVlIDwgMCB8fCAodmFsdWUgPT09IDAgJiYgMSAvIHZhbHVlIDwgMCkgPyAxIDogMDtcblxuICB2YWx1ZSA9IE1hdGguYWJzKHZhbHVlKTtcblxuICBpZiAoaXNOYU4odmFsdWUpIHx8IHZhbHVlID09PSBJbmZpbml0eSkge1xuICAgIG0gPSBpc05hTih2YWx1ZSkgPyAxIDogMDtcbiAgICBlID0gZU1heDtcbiAgfSBlbHNlIHtcbiAgICBlID0gTWF0aC5mbG9vcihNYXRoLmxvZyh2YWx1ZSkgLyBNYXRoLkxOMik7XG4gICAgaWYgKHZhbHVlICogKGMgPSBNYXRoLnBvdygyLCAtZSkpIDwgMSkge1xuICAgICAgZS0tO1xuICAgICAgYyAqPSAyO1xuICAgIH1cbiAgICBpZiAoZSArIGVCaWFzID49IDEpIHtcbiAgICAgIHZhbHVlICs9IHJ0IC8gYztcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsdWUgKz0gcnQgKiBNYXRoLnBvdygyLCAxIC0gZUJpYXMpO1xuICAgIH1cbiAgICBpZiAodmFsdWUgKiBjID49IDIpIHtcbiAgICAgIGUrKztcbiAgICAgIGMgLz0gMjtcbiAgICB9XG5cbiAgICBpZiAoZSArIGVCaWFzID49IGVNYXgpIHtcbiAgICAgIG0gPSAwO1xuICAgICAgZSA9IGVNYXg7XG4gICAgfSBlbHNlIGlmIChlICsgZUJpYXMgPj0gMSkge1xuICAgICAgbSA9ICh2YWx1ZSAqIGMgLSAxKSAqIE1hdGgucG93KDIsIG1MZW4pO1xuICAgICAgZSA9IGUgKyBlQmlhcztcbiAgICB9IGVsc2Uge1xuICAgICAgbSA9IHZhbHVlICogTWF0aC5wb3coMiwgZUJpYXMgLSAxKSAqIE1hdGgucG93KDIsIG1MZW4pO1xuICAgICAgZSA9IDA7XG4gICAgfVxuICB9XG5cbiAgZm9yICg7IG1MZW4gPj0gODsgYnVmZmVyW29mZnNldCArIGldID0gbSAmIDB4ZmYsIGkgKz0gZCwgbSAvPSAyNTYsIG1MZW4gLT0gOCk7XG5cbiAgZSA9IChlIDw8IG1MZW4pIHwgbTtcbiAgZUxlbiArPSBtTGVuO1xuICBmb3IgKDsgZUxlbiA+IDA7IGJ1ZmZlcltvZmZzZXQgKyBpXSA9IGUgJiAweGZmLCBpICs9IGQsIGUgLz0gMjU2LCBlTGVuIC09IDgpO1xuXG4gIGJ1ZmZlcltvZmZzZXQgKyBpIC0gZF0gfD0gcyAqIDEyODtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gUG9pbnQ7XG5cbmZ1bmN0aW9uIFBvaW50KHgsIHkpIHtcbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG59XG5cblBvaW50LnByb3RvdHlwZSA9IHtcbiAgICBjbG9uZTogZnVuY3Rpb24oKSB7IHJldHVybiBuZXcgUG9pbnQodGhpcy54LCB0aGlzLnkpOyB9LFxuXG4gICAgYWRkOiAgICAgZnVuY3Rpb24ocCkgeyByZXR1cm4gdGhpcy5jbG9uZSgpLl9hZGQocCk7ICAgICB9LFxuICAgIHN1YjogICAgIGZ1bmN0aW9uKHApIHsgcmV0dXJuIHRoaXMuY2xvbmUoKS5fc3ViKHApOyAgICAgfSxcbiAgICBtdWx0OiAgICBmdW5jdGlvbihrKSB7IHJldHVybiB0aGlzLmNsb25lKCkuX211bHQoayk7ICAgIH0sXG4gICAgZGl2OiAgICAgZnVuY3Rpb24oaykgeyByZXR1cm4gdGhpcy5jbG9uZSgpLl9kaXYoayk7ICAgICB9LFxuICAgIHJvdGF0ZTogIGZ1bmN0aW9uKGEpIHsgcmV0dXJuIHRoaXMuY2xvbmUoKS5fcm90YXRlKGEpOyAgfSxcbiAgICBtYXRNdWx0OiBmdW5jdGlvbihtKSB7IHJldHVybiB0aGlzLmNsb25lKCkuX21hdE11bHQobSk7IH0sXG4gICAgdW5pdDogICAgZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzLmNsb25lKCkuX3VuaXQoKTsgfSxcbiAgICBwZXJwOiAgICBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMuY2xvbmUoKS5fcGVycCgpOyB9LFxuICAgIHJvdW5kOiAgIGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpcy5jbG9uZSgpLl9yb3VuZCgpOyB9LFxuXG4gICAgbWFnOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydCh0aGlzLnggKiB0aGlzLnggKyB0aGlzLnkgKiB0aGlzLnkpO1xuICAgIH0sXG5cbiAgICBlcXVhbHM6IGZ1bmN0aW9uKHApIHtcbiAgICAgICAgcmV0dXJuIHRoaXMueCA9PT0gcC54ICYmXG4gICAgICAgICAgICAgICB0aGlzLnkgPT09IHAueTtcbiAgICB9LFxuXG4gICAgZGlzdDogZnVuY3Rpb24ocCkge1xuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KHRoaXMuZGlzdFNxcihwKSk7XG4gICAgfSxcblxuICAgIGRpc3RTcXI6IGZ1bmN0aW9uKHApIHtcbiAgICAgICAgdmFyIGR4ID0gcC54IC0gdGhpcy54LFxuICAgICAgICAgICAgZHkgPSBwLnkgLSB0aGlzLnk7XG4gICAgICAgIHJldHVybiBkeCAqIGR4ICsgZHkgKiBkeTtcbiAgICB9LFxuXG4gICAgYW5nbGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gTWF0aC5hdGFuMih0aGlzLnksIHRoaXMueCk7XG4gICAgfSxcblxuICAgIGFuZ2xlVG86IGZ1bmN0aW9uKGIpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguYXRhbjIodGhpcy55IC0gYi55LCB0aGlzLnggLSBiLngpO1xuICAgIH0sXG5cbiAgICBhbmdsZVdpdGg6IGZ1bmN0aW9uKGIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYW5nbGVXaXRoU2VwKGIueCwgYi55KTtcbiAgICB9LFxuXG4gICAgLy8gRmluZCB0aGUgYW5nbGUgb2YgdGhlIHR3byB2ZWN0b3JzLCBzb2x2aW5nIHRoZSBmb3JtdWxhIGZvciB0aGUgY3Jvc3MgcHJvZHVjdCBhIHggYiA9IHxhfHxifHNpbijOuCkgZm9yIM64LlxuICAgIGFuZ2xlV2l0aFNlcDogZnVuY3Rpb24oeCwgeSkge1xuICAgICAgICByZXR1cm4gTWF0aC5hdGFuMihcbiAgICAgICAgICAgIHRoaXMueCAqIHkgLSB0aGlzLnkgKiB4LFxuICAgICAgICAgICAgdGhpcy54ICogeCArIHRoaXMueSAqIHkpO1xuICAgIH0sXG5cbiAgICBfbWF0TXVsdDogZnVuY3Rpb24obSkge1xuICAgICAgICB2YXIgeCA9IG1bMF0gKiB0aGlzLnggKyBtWzFdICogdGhpcy55LFxuICAgICAgICAgICAgeSA9IG1bMl0gKiB0aGlzLnggKyBtWzNdICogdGhpcy55O1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgX2FkZDogZnVuY3Rpb24ocCkge1xuICAgICAgICB0aGlzLnggKz0gcC54O1xuICAgICAgICB0aGlzLnkgKz0gcC55O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgX3N1YjogZnVuY3Rpb24ocCkge1xuICAgICAgICB0aGlzLnggLT0gcC54O1xuICAgICAgICB0aGlzLnkgLT0gcC55O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgX211bHQ6IGZ1bmN0aW9uKGspIHtcbiAgICAgICAgdGhpcy54ICo9IGs7XG4gICAgICAgIHRoaXMueSAqPSBrO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgX2RpdjogZnVuY3Rpb24oaykge1xuICAgICAgICB0aGlzLnggLz0gaztcbiAgICAgICAgdGhpcy55IC89IGs7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICBfdW5pdDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuX2Rpdih0aGlzLm1hZygpKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIF9wZXJwOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHkgPSB0aGlzLnk7XG4gICAgICAgIHRoaXMueSA9IHRoaXMueDtcbiAgICAgICAgdGhpcy54ID0gLXk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICBfcm90YXRlOiBmdW5jdGlvbihhbmdsZSkge1xuICAgICAgICB2YXIgY29zID0gTWF0aC5jb3MoYW5nbGUpLFxuICAgICAgICAgICAgc2luID0gTWF0aC5zaW4oYW5nbGUpLFxuICAgICAgICAgICAgeCA9IGNvcyAqIHRoaXMueCAtIHNpbiAqIHRoaXMueSxcbiAgICAgICAgICAgIHkgPSBzaW4gKiB0aGlzLnggKyBjb3MgKiB0aGlzLnk7XG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICBfcm91bmQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLnggPSBNYXRoLnJvdW5kKHRoaXMueCk7XG4gICAgICAgIHRoaXMueSA9IE1hdGgucm91bmQodGhpcy55KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufTtcblxuLy8gY29uc3RydWN0cyBQb2ludCBmcm9tIGFuIGFycmF5IGlmIG5lY2Vzc2FyeVxuUG9pbnQuY29udmVydCA9IGZ1bmN0aW9uIChhKSB7XG4gICAgaWYgKGEgaW5zdGFuY2VvZiBQb2ludCkge1xuICAgICAgICByZXR1cm4gYTtcbiAgICB9XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoYSkpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQb2ludChhWzBdLCBhWzFdKTtcbiAgICB9XG4gICAgcmV0dXJuIGE7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMuVmVjdG9yVGlsZSA9IHJlcXVpcmUoJy4vbGliL3ZlY3RvcnRpbGUuanMnKTtcbm1vZHVsZS5leHBvcnRzLlZlY3RvclRpbGVGZWF0dXJlID0gcmVxdWlyZSgnLi9saWIvdmVjdG9ydGlsZWZlYXR1cmUuanMnKTtcbm1vZHVsZS5leHBvcnRzLlZlY3RvclRpbGVMYXllciA9IHJlcXVpcmUoJy4vbGliL3ZlY3RvcnRpbGVsYXllci5qcycpO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgVmVjdG9yVGlsZUxheWVyID0gcmVxdWlyZSgnLi92ZWN0b3J0aWxlbGF5ZXInKTtcblxubW9kdWxlLmV4cG9ydHMgPSBWZWN0b3JUaWxlO1xuXG5mdW5jdGlvbiBWZWN0b3JUaWxlKGJ1ZmZlciwgZW5kKSB7XG5cbiAgICB0aGlzLmxheWVycyA9IHt9O1xuICAgIHRoaXMuX2J1ZmZlciA9IGJ1ZmZlcjtcblxuICAgIGVuZCA9IGVuZCB8fCBidWZmZXIubGVuZ3RoO1xuXG4gICAgd2hpbGUgKGJ1ZmZlci5wb3MgPCBlbmQpIHtcbiAgICAgICAgdmFyIHZhbCA9IGJ1ZmZlci5yZWFkVmFyaW50KCksXG4gICAgICAgICAgICB0YWcgPSB2YWwgPj4gMztcblxuICAgICAgICBpZiAodGFnID09IDMpIHtcbiAgICAgICAgICAgIHZhciBsYXllciA9IHRoaXMucmVhZExheWVyKCk7XG4gICAgICAgICAgICBpZiAobGF5ZXIubGVuZ3RoKSB0aGlzLmxheWVyc1tsYXllci5uYW1lXSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYnVmZmVyLnNraXAodmFsKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuVmVjdG9yVGlsZS5wcm90b3R5cGUucmVhZExheWVyID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGJ1ZmZlciA9IHRoaXMuX2J1ZmZlcixcbiAgICAgICAgYnl0ZXMgPSBidWZmZXIucmVhZFZhcmludCgpLFxuICAgICAgICBlbmQgPSBidWZmZXIucG9zICsgYnl0ZXMsXG4gICAgICAgIGxheWVyID0gbmV3IFZlY3RvclRpbGVMYXllcihidWZmZXIsIGVuZCk7XG5cbiAgICBidWZmZXIucG9zID0gZW5kO1xuXG4gICAgcmV0dXJuIGxheWVyO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIFBvaW50ID0gcmVxdWlyZSgncG9pbnQtZ2VvbWV0cnknKTtcblxubW9kdWxlLmV4cG9ydHMgPSBWZWN0b3JUaWxlRmVhdHVyZTtcblxuZnVuY3Rpb24gVmVjdG9yVGlsZUZlYXR1cmUoYnVmZmVyLCBlbmQsIGV4dGVudCwga2V5cywgdmFsdWVzKSB7XG5cbiAgICB0aGlzLnByb3BlcnRpZXMgPSB7fTtcblxuICAgIC8vIFB1YmxpY1xuICAgIHRoaXMuZXh0ZW50ID0gZXh0ZW50O1xuICAgIHRoaXMudHlwZSA9IDA7XG5cbiAgICAvLyBQcml2YXRlXG4gICAgdGhpcy5fYnVmZmVyID0gYnVmZmVyO1xuICAgIHRoaXMuX2dlb21ldHJ5ID0gLTE7XG5cbiAgICBlbmQgPSBlbmQgfHwgYnVmZmVyLmxlbmd0aDtcblxuICAgIHdoaWxlIChidWZmZXIucG9zIDwgZW5kKSB7XG4gICAgICAgIHZhciB2YWwgPSBidWZmZXIucmVhZFZhcmludCgpLFxuICAgICAgICAgICAgdGFnID0gdmFsID4+IDM7XG5cbiAgICAgICAgaWYgKHRhZyA9PSAxKSB7XG4gICAgICAgICAgICB0aGlzLl9pZCA9IGJ1ZmZlci5yZWFkVmFyaW50KCk7XG5cbiAgICAgICAgfSBlbHNlIGlmICh0YWcgPT0gMikge1xuICAgICAgICAgICAgdmFyIHRhZ0VuZCA9IGJ1ZmZlci5wb3MgKyBidWZmZXIucmVhZFZhcmludCgpO1xuXG4gICAgICAgICAgICB3aGlsZSAoYnVmZmVyLnBvcyA8IHRhZ0VuZCkge1xuICAgICAgICAgICAgICAgIHZhciBrZXkgPSBrZXlzW2J1ZmZlci5yZWFkVmFyaW50KCldO1xuICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IHZhbHVlc1tidWZmZXIucmVhZFZhcmludCgpXTtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BlcnRpZXNba2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0gZWxzZSBpZiAodGFnID09IDMpIHtcbiAgICAgICAgICAgIHRoaXMudHlwZSA9IGJ1ZmZlci5yZWFkVmFyaW50KCk7XG5cbiAgICAgICAgfSBlbHNlIGlmICh0YWcgPT0gNCkge1xuICAgICAgICAgICAgdGhpcy5fZ2VvbWV0cnkgPSBidWZmZXIucG9zO1xuICAgICAgICAgICAgYnVmZmVyLnNraXAodmFsKTtcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYnVmZmVyLnNraXAodmFsKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuVmVjdG9yVGlsZUZlYXR1cmUudHlwZXMgPSBbJ1Vua25vd24nLCAnUG9pbnQnLCAnTGluZVN0cmluZycsICdQb2x5Z29uJ107XG5cblZlY3RvclRpbGVGZWF0dXJlLnByb3RvdHlwZS5sb2FkR2VvbWV0cnkgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgYnVmZmVyID0gdGhpcy5fYnVmZmVyO1xuICAgIGJ1ZmZlci5wb3MgPSB0aGlzLl9nZW9tZXRyeTtcblxuICAgIHZhciBieXRlcyA9IGJ1ZmZlci5yZWFkVmFyaW50KCksXG4gICAgICAgIGVuZCA9IGJ1ZmZlci5wb3MgKyBieXRlcyxcbiAgICAgICAgY21kID0gMSxcbiAgICAgICAgbGVuZ3RoID0gMCxcbiAgICAgICAgeCA9IDAsXG4gICAgICAgIHkgPSAwLFxuICAgICAgICBsaW5lcyA9IFtdLFxuICAgICAgICBsaW5lO1xuXG4gICAgd2hpbGUgKGJ1ZmZlci5wb3MgPCBlbmQpIHtcbiAgICAgICAgaWYgKCFsZW5ndGgpIHtcbiAgICAgICAgICAgIHZhciBjbWRfbGVuZ3RoID0gYnVmZmVyLnJlYWRWYXJpbnQoKTtcbiAgICAgICAgICAgIGNtZCA9IGNtZF9sZW5ndGggJiAweDc7XG4gICAgICAgICAgICBsZW5ndGggPSBjbWRfbGVuZ3RoID4+IDM7XG4gICAgICAgIH1cblxuICAgICAgICBsZW5ndGgtLTtcblxuICAgICAgICBpZiAoY21kID09PSAxIHx8IGNtZCA9PT0gMikge1xuICAgICAgICAgICAgeCArPSBidWZmZXIucmVhZFNWYXJpbnQoKTtcbiAgICAgICAgICAgIHkgKz0gYnVmZmVyLnJlYWRTVmFyaW50KCk7XG5cbiAgICAgICAgICAgIGlmIChjbWQgPT09IDEpIHtcbiAgICAgICAgICAgICAgICAvLyBtb3ZlVG9cbiAgICAgICAgICAgICAgICBpZiAobGluZSkge1xuICAgICAgICAgICAgICAgICAgICBsaW5lcy5wdXNoKGxpbmUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsaW5lID0gW107XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxpbmUucHVzaChuZXcgUG9pbnQoeCwgeSkpO1xuICAgICAgICB9IGVsc2UgaWYgKGNtZCA9PT0gNykge1xuICAgICAgICAgICAgLy8gY2xvc2VQb2x5Z29uXG4gICAgICAgICAgICBsaW5lLnB1c2gobGluZVswXS5jbG9uZSgpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigndW5rbm93biBjb21tYW5kICcgKyBjbWQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGxpbmUpIGxpbmVzLnB1c2gobGluZSk7XG5cbiAgICByZXR1cm4gbGluZXM7XG59O1xuXG5WZWN0b3JUaWxlRmVhdHVyZS5wcm90b3R5cGUuYmJveCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBidWZmZXIgPSB0aGlzLl9idWZmZXI7XG4gICAgYnVmZmVyLnBvcyA9IHRoaXMuX2dlb21ldHJ5O1xuXG4gICAgdmFyIGJ5dGVzID0gYnVmZmVyLnJlYWRWYXJpbnQoKSxcbiAgICAgICAgZW5kID0gYnVmZmVyLnBvcyArIGJ5dGVzLFxuXG4gICAgICAgIGNtZCA9IDEsXG4gICAgICAgIGxlbmd0aCA9IDAsXG4gICAgICAgIHggPSAwLFxuICAgICAgICB5ID0gMCxcbiAgICAgICAgeDEgPSBJbmZpbml0eSxcbiAgICAgICAgeDIgPSAtSW5maW5pdHksXG4gICAgICAgIHkxID0gSW5maW5pdHksXG4gICAgICAgIHkyID0gLUluZmluaXR5O1xuXG4gICAgd2hpbGUgKGJ1ZmZlci5wb3MgPCBlbmQpIHtcbiAgICAgICAgaWYgKCFsZW5ndGgpIHtcbiAgICAgICAgICAgIHZhciBjbWRfbGVuZ3RoID0gYnVmZmVyLnJlYWRWYXJpbnQoKTtcbiAgICAgICAgICAgIGNtZCA9IGNtZF9sZW5ndGggJiAweDc7XG4gICAgICAgICAgICBsZW5ndGggPSBjbWRfbGVuZ3RoID4+IDM7XG4gICAgICAgIH1cblxuICAgICAgICBsZW5ndGgtLTtcblxuICAgICAgICBpZiAoY21kID09PSAxIHx8IGNtZCA9PT0gMikge1xuICAgICAgICAgICAgeCArPSBidWZmZXIucmVhZFNWYXJpbnQoKTtcbiAgICAgICAgICAgIHkgKz0gYnVmZmVyLnJlYWRTVmFyaW50KCk7XG4gICAgICAgICAgICBpZiAoeCA8IHgxKSB4MSA9IHg7XG4gICAgICAgICAgICBpZiAoeCA+IHgyKSB4MiA9IHg7XG4gICAgICAgICAgICBpZiAoeSA8IHkxKSB5MSA9IHk7XG4gICAgICAgICAgICBpZiAoeSA+IHkyKSB5MiA9IHk7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjbWQgIT09IDcpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigndW5rbm93biBjb21tYW5kICcgKyBjbWQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIFt4MSwgeTEsIHgyLCB5Ml07XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgVmVjdG9yVGlsZUZlYXR1cmUgPSByZXF1aXJlKCcuL3ZlY3RvcnRpbGVmZWF0dXJlLmpzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gVmVjdG9yVGlsZUxheWVyO1xuZnVuY3Rpb24gVmVjdG9yVGlsZUxheWVyKGJ1ZmZlciwgZW5kKSB7XG4gICAgLy8gUHVibGljXG4gICAgdGhpcy52ZXJzaW9uID0gMTtcbiAgICB0aGlzLm5hbWUgPSBudWxsO1xuICAgIHRoaXMuZXh0ZW50ID0gNDA5NjtcbiAgICB0aGlzLmxlbmd0aCA9IDA7XG5cbiAgICAvLyBQcml2YXRlXG4gICAgdGhpcy5fYnVmZmVyID0gYnVmZmVyO1xuICAgIHRoaXMuX2tleXMgPSBbXTtcbiAgICB0aGlzLl92YWx1ZXMgPSBbXTtcbiAgICB0aGlzLl9mZWF0dXJlcyA9IFtdO1xuXG4gICAgdmFyIHZhbCwgdGFnO1xuXG4gICAgZW5kID0gZW5kIHx8IGJ1ZmZlci5sZW5ndGg7XG5cbiAgICB3aGlsZSAoYnVmZmVyLnBvcyA8IGVuZCkge1xuICAgICAgICB2YWwgPSBidWZmZXIucmVhZFZhcmludCgpO1xuICAgICAgICB0YWcgPSB2YWwgPj4gMztcblxuICAgICAgICBpZiAodGFnID09PSAxNSkge1xuICAgICAgICAgICAgdGhpcy52ZXJzaW9uID0gYnVmZmVyLnJlYWRWYXJpbnQoKTtcbiAgICAgICAgfSBlbHNlIGlmICh0YWcgPT09IDEpIHtcbiAgICAgICAgICAgIHRoaXMubmFtZSA9IGJ1ZmZlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgIH0gZWxzZSBpZiAodGFnID09PSA1KSB7XG4gICAgICAgICAgICB0aGlzLmV4dGVudCA9IGJ1ZmZlci5yZWFkVmFyaW50KCk7XG4gICAgICAgIH0gZWxzZSBpZiAodGFnID09PSAyKSB7XG4gICAgICAgICAgICB0aGlzLmxlbmd0aCsrO1xuICAgICAgICAgICAgdGhpcy5fZmVhdHVyZXMucHVzaChidWZmZXIucG9zKTtcbiAgICAgICAgICAgIGJ1ZmZlci5za2lwKHZhbCk7XG5cbiAgICAgICAgfSBlbHNlIGlmICh0YWcgPT09IDMpIHtcbiAgICAgICAgICAgIHRoaXMuX2tleXMucHVzaChidWZmZXIucmVhZFN0cmluZygpKTtcbiAgICAgICAgfSBlbHNlIGlmICh0YWcgPT09IDQpIHtcbiAgICAgICAgICAgIHRoaXMuX3ZhbHVlcy5wdXNoKHRoaXMucmVhZEZlYXR1cmVWYWx1ZSgpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJ1ZmZlci5za2lwKHZhbCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblZlY3RvclRpbGVMYXllci5wcm90b3R5cGUucmVhZEZlYXR1cmVWYWx1ZSA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBidWZmZXIgPSB0aGlzLl9idWZmZXIsXG4gICAgICAgIHZhbHVlID0gbnVsbCxcbiAgICAgICAgYnl0ZXMgPSBidWZmZXIucmVhZFZhcmludCgpLFxuICAgICAgICBlbmQgPSBidWZmZXIucG9zICsgYnl0ZXMsXG4gICAgICAgIHZhbCwgdGFnO1xuXG4gICAgd2hpbGUgKGJ1ZmZlci5wb3MgPCBlbmQpIHtcbiAgICAgICAgdmFsID0gYnVmZmVyLnJlYWRWYXJpbnQoKTtcbiAgICAgICAgdGFnID0gdmFsID4+IDM7XG5cbiAgICAgICAgaWYgKHRhZyA9PSAxKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IGJ1ZmZlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgIH0gZWxzZSBpZiAodGFnID09IDIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigncmVhZCBmbG9hdCcpO1xuICAgICAgICB9IGVsc2UgaWYgKHRhZyA9PSAzKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IGJ1ZmZlci5yZWFkRG91YmxlKCk7XG4gICAgICAgIH0gZWxzZSBpZiAodGFnID09IDQpIHtcbiAgICAgICAgICAgIHZhbHVlID0gYnVmZmVyLnJlYWRWYXJpbnQoKTtcbiAgICAgICAgfSBlbHNlIGlmICh0YWcgPT0gNSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdyZWFkIHVpbnQnKTtcbiAgICAgICAgfSBlbHNlIGlmICh0YWcgPT0gNikge1xuICAgICAgICAgICAgdmFsdWUgPSBidWZmZXIucmVhZFNWYXJpbnQoKTtcbiAgICAgICAgfSBlbHNlIGlmICh0YWcgPT0gNykge1xuICAgICAgICAgICAgdmFsdWUgPSBCb29sZWFuKGJ1ZmZlci5yZWFkVmFyaW50KCkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYnVmZmVyLnNraXAodmFsKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZTtcbn07XG5cbi8vIHJldHVybiBmZWF0dXJlIGBpYCBmcm9tIHRoaXMgbGF5ZXIgYXMgYSBgVmVjdG9yVGlsZUZlYXR1cmVgXG5WZWN0b3JUaWxlTGF5ZXIucHJvdG90eXBlLmZlYXR1cmUgPSBmdW5jdGlvbihpKSB7XG4gICAgaWYgKGkgPCAwIHx8IGkgPj0gdGhpcy5fZmVhdHVyZXMubGVuZ3RoKSB0aHJvdyBuZXcgRXJyb3IoJ2ZlYXR1cmUgaW5kZXggb3V0IG9mIGJvdW5kcycpO1xuXG4gICAgdGhpcy5fYnVmZmVyLnBvcyA9IHRoaXMuX2ZlYXR1cmVzW2ldO1xuICAgIHZhciBlbmQgPSB0aGlzLl9idWZmZXIucmVhZFZhcmludCgpICsgdGhpcy5fYnVmZmVyLnBvcztcblxuICAgIHJldHVybiBuZXcgVmVjdG9yVGlsZUZlYXR1cmUodGhpcy5fYnVmZmVyLCBlbmQsIHRoaXMuZXh0ZW50LCB0aGlzLl9rZXlzLCB0aGlzLl92YWx1ZXMpO1xufTtcbiIsIi8qKlxuICogQ3JlYXRlZCBieSBSeWFuIFdoaXRsZXksIERhbmllbCBEdWFydGUsIGFuZCBOaWNob2xhcyBIYWxsYWhhblxuICogICAgb24gNi8wMy8xNC5cbiAqL1xudmFyIFV0aWwgPSByZXF1aXJlKCcuL01WVFV0aWwnKTtcbnZhciBTdGF0aWNMYWJlbCA9IHJlcXVpcmUoJy4vU3RhdGljTGFiZWwvU3RhdGljTGFiZWwuanMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBNVlRGZWF0dXJlO1xuXG5mdW5jdGlvbiBNVlRGZWF0dXJlKG12dExheWVyLCB2dGYsIGN0eCwgaWQsIHN0eWxlKSB7XG4gIGlmICghdnRmKSByZXR1cm4gbnVsbDtcblxuICAvLyBBcHBseSBhbGwgb2YgdGhlIHByb3BlcnRpZXMgb2YgdnRmIHRvIHRoaXMgb2JqZWN0LlxuICBmb3IgKHZhciBrZXkgaW4gdnRmKSB7XG4gICAgdGhpc1trZXldID0gdnRmW2tleV07XG4gIH1cblxuICB0aGlzLm12dExheWVyID0gbXZ0TGF5ZXI7XG4gIHRoaXMubXZ0U291cmNlID0gbXZ0TGF5ZXIubXZ0U291cmNlO1xuICB0aGlzLm1hcCA9IG12dExheWVyLm12dFNvdXJjZS5tYXA7XG5cbiAgdGhpcy5pZCA9IGlkO1xuXG4gIHRoaXMubGF5ZXJMaW5rID0gdGhpcy5tdnRTb3VyY2UubGF5ZXJMaW5rO1xuICB0aGlzLnRvZ2dsZUVuYWJsZWQgPSB0cnVlO1xuICB0aGlzLnNlbGVjdGVkID0gZmFsc2U7XG5cbiAgLy8gaG93IG11Y2ggd2UgZGl2aWRlIHRoZSBjb29yZGluYXRlIGZyb20gdGhlIHZlY3RvciB0aWxlXG4gIHRoaXMuZGl2aXNvciA9IHZ0Zi5leHRlbnQgLyBjdHgudGlsZVNpemU7XG4gIHRoaXMuZXh0ZW50ID0gdnRmLmV4dGVudDtcbiAgdGhpcy50aWxlU2l6ZSA9IGN0eC50aWxlU2l6ZTtcblxuICAvL0FuIG9iamVjdCB0byBzdG9yZSB0aGUgcGF0aHMgYW5kIGNvbnRleHRzIGZvciB0aGlzIGZlYXR1cmVcbiAgdGhpcy50aWxlcyA9IHt9O1xuXG4gIHRoaXMuc3R5bGUgPSBzdHlsZTtcblxuICAvL0FkZCB0byB0aGUgY29sbGVjdGlvblxuICB0aGlzLmFkZFRpbGVGZWF0dXJlKHZ0ZiwgY3R4KTtcblxuICB2YXIgc2VsZiA9IHRoaXM7XG4gIHRoaXMubWFwLm9uKCd6b29tZW5kJywgZnVuY3Rpb24oKSB7XG4gICAgc2VsZi5zdGF0aWNMYWJlbCA9IG51bGw7XG4gIH0pO1xuXG4gIGlmIChzdHlsZSAmJiBzdHlsZS5keW5hbWljTGFiZWwgJiYgdHlwZW9mIHN0eWxlLmR5bmFtaWNMYWJlbCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHRoaXMuZHluYW1pY0xhYmVsID0gdGhpcy5tdnRTb3VyY2UuZHluYW1pY0xhYmVsLmNyZWF0ZUZlYXR1cmUodGhpcyk7XG4gIH1cblxuICBhamF4KHNlbGYpO1xufVxuXG5cbmZ1bmN0aW9uIGFqYXgoc2VsZikge1xuICB2YXIgc3R5bGUgPSBzZWxmLnN0eWxlO1xuICBpZiAoc3R5bGUgJiYgc3R5bGUuYWpheFNvdXJjZSAmJiB0eXBlb2Ygc3R5bGUuYWpheFNvdXJjZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBhamF4RW5kcG9pbnQgPSBzdHlsZS5hamF4U291cmNlKHNlbGYpO1xuICAgIGlmIChhamF4RW5kcG9pbnQpIHtcbiAgICAgIFV0aWwuZ2V0SlNPTihhamF4RW5kcG9pbnQsIGZ1bmN0aW9uKGVycm9yLCByZXNwb25zZSwgYm9keSkge1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICB0aHJvdyBbJ2FqYXhTb3VyY2UgQUpBWCBFcnJvcicsIGVycm9yXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhamF4Q2FsbGJhY2soc2VsZiwgcmVzcG9uc2UpO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBhamF4Q2FsbGJhY2soc2VsZiwgcmVzcG9uc2UpIHtcbiAgc2VsZi5hamF4RGF0YSA9IHJlc3BvbnNlO1xuXG4gIC8qKlxuICAgKiBZb3UgY2FuIGF0dGFjaCBhIGNhbGxiYWNrIGZ1bmN0aW9uIHRvIGEgZmVhdHVyZSBpbiB5b3VyIGFwcFxuICAgKiB0aGF0IHdpbGwgZ2V0IGNhbGxlZCB3aGVuZXZlciBuZXcgYWpheERhdGEgY29tZXMgaW4uIFRoaXNcbiAgICogY2FuIGJlIHVzZWQgdG8gdXBkYXRlIFVJIHRoYXQgbG9va3MgYXQgZGF0YSBmcm9tIHdpdGhpbiBhIGZlYXR1cmUuXG4gICAqXG4gICAqIHNldFN0eWxlIG1heSBwb3NzaWJseSBoYXZlIGEgc3R5bGUgd2l0aCBhIGRpZmZlcmVudCBhamF4RGF0YSBzb3VyY2UsXG4gICAqIGFuZCB5b3Ugd291bGQgcG90ZW50aWFsbHkgZ2V0IG5ldyBjb250ZXh0dWFsIGRhdGEgZm9yIHlvdXIgZmVhdHVyZS5cbiAgICpcbiAgICogVE9ETzogVGhpcyBuZWVkcyB0byBiZSBkb2N1bWVudGVkLlxuICAgKi9cbiAgaWYgKHR5cGVvZiBzZWxmLmFqYXhEYXRhUmVjZWl2ZWQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBzZWxmLmFqYXhEYXRhUmVjZWl2ZWQoc2VsZiwgcmVzcG9uc2UpO1xuICB9XG5cbiAgc2VsZi5fc2V0U3R5bGUoc2VsZi5tdnRMYXllci5zdHlsZSk7XG4gIHJlZHJhd1RpbGVzKHNlbGYpO1xufVxuXG5NVlRGZWF0dXJlLnByb3RvdHlwZS5fc2V0U3R5bGUgPSBmdW5jdGlvbihzdHlsZUZuKSB7XG4gIHRoaXMuc3R5bGUgPSBzdHlsZUZuKHRoaXMsIHRoaXMuYWpheERhdGEpO1xuXG4gIC8vIFRoZSBsYWJlbCBnZXRzIHJlbW92ZWQsIGFuZCB0aGUgKHJlKWRyYXcsXG4gIC8vIHRoYXQgaXMgaW5pdGlhdGVkIGJ5IHRoZSBNVlRMYXllciBjcmVhdGVzIGEgbmV3IGxhYmVsLlxuICB0aGlzLnJlbW92ZUxhYmVsKCk7XG59O1xuXG5NVlRGZWF0dXJlLnByb3RvdHlwZS5zZXRTdHlsZSA9IGZ1bmN0aW9uKHN0eWxlRm4pIHtcbiAgdGhpcy5hamF4RGF0YSA9IG51bGw7XG4gIHRoaXMuc3R5bGUgPSBzdHlsZUZuKHRoaXMsIG51bGwpO1xuICB2YXIgaGFzQWpheFNvdXJjZSA9IGFqYXgodGhpcyk7XG4gIGlmICghaGFzQWpheFNvdXJjZSkge1xuICAgIC8vIFRoZSBsYWJlbCBnZXRzIHJlbW92ZWQsIGFuZCB0aGUgKHJlKWRyYXcsXG4gICAgLy8gdGhhdCBpcyBpbml0aWF0ZWQgYnkgdGhlIE1WVExheWVyIGNyZWF0ZXMgYSBuZXcgbGFiZWwuXG4gICAgdGhpcy5yZW1vdmVMYWJlbCgpO1xuICB9XG59O1xuXG5NVlRGZWF0dXJlLnByb3RvdHlwZS5kcmF3ID0gZnVuY3Rpb24oY2FudmFzSUQpIHtcbiAgLy9HZXQgdGhlIGluZm8gZnJvbSB0aGUgdGlsZXMgbGlzdFxuICB2YXIgdGlsZUluZm8gPSAgdGhpcy50aWxlc1tjYW52YXNJRF07XG5cbiAgdmFyIHZ0ZiA9IHRpbGVJbmZvLnZ0ZjtcbiAgdmFyIGN0eCA9IHRpbGVJbmZvLmN0eDtcblxuICAvL0dldCB0aGUgYWN0dWFsIGNhbnZhcyBmcm9tIHRoZSBwYXJlbnQgbGF5ZXIncyBfdGlsZXMgb2JqZWN0LlxuICB2YXIgeHkgPSBjYW52YXNJRC5zcGxpdChcIjpcIikuc2xpY2UoMSwgMykuam9pbihcIjpcIik7XG4gIGN0eC5jYW52YXMgPSB0aGlzLm12dExheWVyLl90aWxlc1t4eV07XG5cbi8vICBUaGlzIGNvdWxkIGJlIHVzZWQgdG8gZGlyZWN0bHkgY29tcHV0ZSB0aGUgc3R5bGUgZnVuY3Rpb24gZnJvbSB0aGUgbGF5ZXIgb24gZXZlcnkgZHJhdy5cbi8vICBUaGlzIGlzIG11Y2ggbGVzcyBlZmZpY2llbnQuLi5cbi8vICB0aGlzLnN0eWxlID0gdGhpcy5tdnRMYXllci5zdHlsZSh0aGlzKTtcblxuICBpZiAodGhpcy5zZWxlY3RlZCkge1xuICAgIHZhciBzdHlsZSA9IHRoaXMuc3R5bGUuc2VsZWN0ZWQgfHwgdGhpcy5zdHlsZTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgc3R5bGUgPSB0aGlzLnN0eWxlO1xuICB9XG5cbiAgc3dpdGNoICh2dGYudHlwZSkge1xuICAgIGNhc2UgMTogLy9Qb2ludFxuICAgICAgdGhpcy5fZHJhd1BvaW50KGN0eCwgdnRmLmNvb3JkaW5hdGVzLCBzdHlsZSk7XG4gICAgICBpZiAoIXRoaXMuc3RhdGljTGFiZWwgJiYgdHlwZW9mIHRoaXMuc3R5bGUuc3RhdGljTGFiZWwgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgaWYgKHRoaXMuc3R5bGUuYWpheFNvdXJjZSAmJiAhdGhpcy5hamF4RGF0YSkge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2RyYXdTdGF0aWNMYWJlbChjdHgsIHZ0Zi5jb29yZGluYXRlcywgc3R5bGUpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIDI6IC8vTGluZVN0cmluZ1xuICAgICAgdGhpcy5fZHJhd0xpbmVTdHJpbmcoY3R4LCB2dGYuY29vcmRpbmF0ZXMsIHN0eWxlKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAzOiAvL1BvbHlnb25cbiAgICAgIHRoaXMuX2RyYXdQb2x5Z29uKGN0eCwgdnRmLmNvb3JkaW5hdGVzLCBzdHlsZSk7XG4gICAgICBicmVhaztcblxuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VubWFuYWdlZCB0eXBlOiAnICsgdnRmLnR5cGUpO1xuICB9XG5cbn07XG5cbk1WVEZlYXR1cmUucHJvdG90eXBlLmdldFBhdGhzRm9yVGlsZSA9IGZ1bmN0aW9uKGNhbnZhc0lEKSB7XG4gIC8vR2V0IHRoZSBpbmZvIGZyb20gdGhlIHBhcnRzIGxpc3RcbiAgcmV0dXJuIHRoaXMudGlsZXNbY2FudmFzSURdLnBhdGhzO1xufTtcblxuTVZURmVhdHVyZS5wcm90b3R5cGUuYWRkVGlsZUZlYXR1cmUgPSBmdW5jdGlvbih2dGYsIGN0eCkge1xuICAvL1N0b3JlIHRoZSBpbXBvcnRhbnQgaXRlbXMgaW4gdGhlIHRpbGVzIGxpc3RcblxuICAvL1dlIG9ubHkgd2FudCB0byBzdG9yZSBpbmZvIGZvciB0aWxlcyBmb3IgdGhlIGN1cnJlbnQgbWFwIHpvb20uICBJZiBpdCBpcyB0aWxlIGluZm8gZm9yIGFub3RoZXIgem9vbSBsZXZlbCwgaWdub3JlIGl0XG4gIC8vQWxzbywgaWYgdGhlcmUgYXJlIGV4aXN0aW5nIHRpbGVzIGluIHRoZSBsaXN0IGZvciBvdGhlciB6b29tIGxldmVscywgZXhwdW5nZSB0aGVtLlxuICB2YXIgem9vbSA9IHRoaXMubWFwLmdldFpvb20oKTtcblxuICBpZihjdHguem9vbSAhPSB6b29tKSByZXR1cm47XG5cbiAgdGhpcy5jbGVhclRpbGVGZWF0dXJlcyh6b29tKTsgLy9UT0RPOiBUaGlzIGl0ZXJhdGVzIHRocnUgYWxsIHRpbGVzIGV2ZXJ5IHRpbWUgYSBuZXcgdGlsZSBpcyBhZGRlZC4gIEZpZ3VyZSBvdXQgYSBiZXR0ZXIgd2F5IHRvIGRvIHRoaXMuXG5cbiAgdGhpcy50aWxlc1tjdHguaWRdID0ge1xuICAgIGN0eDogY3R4LFxuICAgIHZ0ZjogdnRmLFxuICAgIHBhdGhzOiBbXVxuICB9O1xuXG59O1xuXG5cbi8qKlxuICogQ2xlYXIgdGhlIGlubmVyIGxpc3Qgb2YgdGlsZSBmZWF0dXJlcyBpZiB0aGV5IGRvbid0IG1hdGNoIHRoZSBnaXZlbiB6b29tLlxuICpcbiAqIEBwYXJhbSB6b29tXG4gKi9cbk1WVEZlYXR1cmUucHJvdG90eXBlLmNsZWFyVGlsZUZlYXR1cmVzID0gZnVuY3Rpb24oem9vbSkge1xuICAvL0lmIHN0b3JlZCB0aWxlcyBleGlzdCBmb3Igb3RoZXIgem9vbSBsZXZlbHMsIGV4cHVuZ2UgdGhlbSBmcm9tIHRoZSBsaXN0LlxuICBmb3IgKHZhciBrZXkgaW4gdGhpcy50aWxlcykge1xuICAgICBpZihrZXkuc3BsaXQoXCI6XCIpWzBdICE9IHpvb20pIGRlbGV0ZSB0aGlzLnRpbGVzW2tleV07XG4gIH1cbn07XG5cbi8qKlxuICogUmVkcmF3cyBhbGwgb2YgdGhlIHRpbGVzIGFzc29jaWF0ZWQgd2l0aCBhIGZlYXR1cmUuIFVzZWZ1bCBmb3JcbiAqIHN0eWxlIGNoYW5nZSBhbmQgdG9nZ2xpbmcuXG4gKlxuICogQHBhcmFtIHNlbGZcbiAqL1xuZnVuY3Rpb24gcmVkcmF3VGlsZXMoc2VsZikge1xuICAvL1JlZHJhdyB0aGUgd2hvbGUgdGlsZSwgbm90IGp1c3QgdGhpcyB2dGZcbiAgdmFyIHRpbGVzID0gc2VsZi50aWxlcztcbiAgdmFyIG12dExheWVyID0gc2VsZi5tdnRMYXllcjtcblxuICBmb3IgKHZhciBpZCBpbiB0aWxlcykge1xuICAgIHZhciB0aWxlWm9vbSA9IHBhcnNlSW50KGlkLnNwbGl0KCc6JylbMF0pO1xuICAgIHZhciBtYXBab29tID0gc2VsZi5tYXAuZ2V0Wm9vbSgpO1xuICAgIGlmICh0aWxlWm9vbSA9PT0gbWFwWm9vbSkge1xuICAgICAgLy9SZWRyYXcgdGhlIHRpbGVcbiAgICAgIG12dExheWVyLnJlZHJhd1RpbGUoaWQpO1xuICAgIH1cbiAgfVxufVxuXG5NVlRGZWF0dXJlLnByb3RvdHlwZS50b2dnbGUgPSBmdW5jdGlvbigpIHtcbiAgaWYgKHRoaXMuc2VsZWN0ZWQpIHtcbiAgICB0aGlzLmRlc2VsZWN0KCk7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5zZWxlY3QoKTtcbiAgfVxufTtcblxuTVZURmVhdHVyZS5wcm90b3R5cGUuc2VsZWN0ID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuc2VsZWN0ZWQgPSB0cnVlO1xuICB0aGlzLm12dFNvdXJjZS5mZWF0dXJlU2VsZWN0ZWQodGhpcyk7XG4gIHJlZHJhd1RpbGVzKHRoaXMpO1xuICB2YXIgbGlua2VkRmVhdHVyZSA9IHRoaXMubGlua2VkRmVhdHVyZSgpO1xuICBpZiAobGlua2VkRmVhdHVyZSAmJiBsaW5rZWRGZWF0dXJlLnN0YXRpY0xhYmVsICYmICFsaW5rZWRGZWF0dXJlLnN0YXRpY0xhYmVsLnNlbGVjdGVkKSB7XG4gICAgbGlua2VkRmVhdHVyZS5zdGF0aWNMYWJlbC5zZWxlY3QoKTtcbiAgfVxufTtcblxuTVZURmVhdHVyZS5wcm90b3R5cGUuZGVzZWxlY3QgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5zZWxlY3RlZCA9IGZhbHNlO1xuICB0aGlzLm12dFNvdXJjZS5mZWF0dXJlRGVzZWxlY3RlZCh0aGlzKTtcbiAgcmVkcmF3VGlsZXModGhpcyk7XG4gIHZhciBsaW5rZWRGZWF0dXJlID0gdGhpcy5saW5rZWRGZWF0dXJlKCk7XG4gIGlmIChsaW5rZWRGZWF0dXJlICYmIGxpbmtlZEZlYXR1cmUuc3RhdGljTGFiZWwgJiYgbGlua2VkRmVhdHVyZS5zdGF0aWNMYWJlbC5zZWxlY3RlZCkge1xuICAgIGxpbmtlZEZlYXR1cmUuc3RhdGljTGFiZWwuZGVzZWxlY3QoKTtcbiAgfVxufTtcblxuTVZURmVhdHVyZS5wcm90b3R5cGUub24gPSBmdW5jdGlvbihldmVudFR5cGUsIGNhbGxiYWNrKSB7XG4gIHRoaXMuX2V2ZW50SGFuZGxlcnNbZXZlbnRUeXBlXSA9IGNhbGxiYWNrO1xufTtcblxuTVZURmVhdHVyZS5wcm90b3R5cGUuX2RyYXdQb2ludCA9IGZ1bmN0aW9uKGN0eCwgY29vcmRzQXJyYXksIHN0eWxlKSB7XG4gIGlmICghc3R5bGUpIHJldHVybjtcbiAgaWYgKCFjdHggfHwgIWN0eC5jYW52YXMpIHJldHVybjtcblxuICB2YXIgdGlsZSA9IHRoaXMudGlsZXNbY3R4LmlkXTtcblxuICAvL0dldCByYWRpdXNcbiAgdmFyIHJhZGl1cyA9IDE7XG4gIGlmICh0eXBlb2Ygc3R5bGUucmFkaXVzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmFkaXVzID0gc3R5bGUucmFkaXVzKGN0eC56b29tKTsgLy9BbGxvd3MgZm9yIHNjYWxlIGRlcGVuZGVudCByZWRuZXJpbmdcbiAgfVxuICBlbHNle1xuICAgIHJhZGl1cyA9IHN0eWxlLnJhZGl1cztcbiAgfVxuXG4gIHZhciBwID0gdGhpcy5fdGlsZVBvaW50KGNvb3Jkc0FycmF5WzBdWzBdKTtcbiAgdmFyIGMgPSBjdHguY2FudmFzO1xuICB2YXIgY3R4MmQ7XG4gIHRyeXtcbiAgICBjdHgyZCA9IGMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgfVxuICBjYXRjaChlKXtcbiAgICBjb25zb2xlLmxvZyhcIl9kcmF3UG9pbnQgZXJyb3I6IFwiICsgZSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY3R4MmQuYmVnaW5QYXRoKCk7XG4gIGN0eDJkLmZpbGxTdHlsZSA9IHN0eWxlLmNvbG9yO1xuICBjdHgyZC5hcmMocC54LCBwLnksIHJhZGl1cywgMCwgTWF0aC5QSSAqIDIpO1xuICBjdHgyZC5jbG9zZVBhdGgoKTtcbiAgY3R4MmQuZmlsbCgpO1xuXG4gIGlmKHN0eWxlLmxpbmVXaWR0aCAmJiBzdHlsZS5zdHJva2VTdHlsZSl7XG4gICAgY3R4MmQubGluZVdpZHRoID0gc3R5bGUubGluZVdpZHRoO1xuICAgIGN0eDJkLnN0cm9rZVN0eWxlID0gc3R5bGUuc3Ryb2tlU3R5bGU7XG4gICAgY3R4MmQuc3Ryb2tlKCk7XG4gIH1cblxuICBjdHgyZC5yZXN0b3JlKCk7XG4gIHRpbGUucGF0aHMucHVzaChbcF0pO1xufTtcblxuTVZURmVhdHVyZS5wcm90b3R5cGUuX2RyYXdMaW5lU3RyaW5nID0gZnVuY3Rpb24oY3R4LCBjb29yZHNBcnJheSwgc3R5bGUpIHtcbiAgaWYgKCFzdHlsZSkgcmV0dXJuO1xuICBpZiAoIWN0eCB8fCAhY3R4LmNhbnZhcykgcmV0dXJuO1xuXG4gIHZhciBjdHgyZCA9IGN0eC5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgY3R4MmQuc3Ryb2tlU3R5bGUgPSBzdHlsZS5jb2xvcjtcbiAgY3R4MmQubGluZVdpZHRoID0gc3R5bGUuc2l6ZTtcbiAgY3R4MmQuYmVnaW5QYXRoKCk7XG5cbiAgdmFyIHByb2pDb29yZHMgPSBbXTtcbiAgdmFyIHRpbGUgPSB0aGlzLnRpbGVzW2N0eC5pZF07XG5cbiAgZm9yICh2YXIgZ2lkeCBpbiBjb29yZHNBcnJheSkge1xuICAgIHZhciBjb29yZHMgPSBjb29yZHNBcnJheVtnaWR4XTtcblxuICAgIGZvciAoaSA9IDA7IGkgPCBjb29yZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBtZXRob2QgPSAoaSA9PT0gMCA/ICdtb3ZlJyA6ICdsaW5lJykgKyAnVG8nO1xuICAgICAgdmFyIHByb2ogPSB0aGlzLl90aWxlUG9pbnQoY29vcmRzW2ldKTtcbiAgICAgIHByb2pDb29yZHMucHVzaChwcm9qKTtcbiAgICAgIGN0eDJkW21ldGhvZF0ocHJvai54LCBwcm9qLnkpO1xuICAgIH1cbiAgfVxuXG4gIGN0eDJkLnN0cm9rZSgpO1xuICBjdHgyZC5yZXN0b3JlKCk7XG5cbiAgdGlsZS5wYXRocy5wdXNoKHByb2pDb29yZHMpO1xufTtcblxuTVZURmVhdHVyZS5wcm90b3R5cGUuX2RyYXdQb2x5Z29uID0gZnVuY3Rpb24oY3R4LCBjb29yZHNBcnJheSwgc3R5bGUpIHtcbiAgaWYgKCFzdHlsZSkgcmV0dXJuO1xuICBpZiAoIWN0eCB8fCAhY3R4LmNhbnZhcykgcmV0dXJuO1xuXG4gIHZhciBjdHgyZCA9IGN0eC5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgdmFyIG91dGxpbmUgPSBzdHlsZS5vdXRsaW5lO1xuXG4gIC8vIGNvbG9yIG1heSBiZSBkZWZpbmVkIHZpYSBmdW5jdGlvbiB0byBtYWtlIGNob3JvcGxldGggd29yayByaWdodFxuICBpZiAodHlwZW9mIHN0eWxlLmNvbG9yID09PSAnZnVuY3Rpb24nKSB7XG4gICAgY3R4MmQuZmlsbFN0eWxlID0gc3R5bGUuY29sb3IoY3R4MmQpO1xuICB9IGVsc2Uge1xuICAgIGN0eDJkLmZpbGxTdHlsZSA9IHN0eWxlLmNvbG9yO1xuICB9XG5cbiAgaWYgKG91dGxpbmUpIHtcbiAgICBjdHgyZC5zdHJva2VTdHlsZSA9IG91dGxpbmUuY29sb3I7XG4gICAgY3R4MmQubGluZVdpZHRoID0gb3V0bGluZS5zaXplO1xuICB9XG4gIGN0eDJkLmJlZ2luUGF0aCgpO1xuXG4gIHZhciBwcm9qQ29vcmRzID0gW107XG4gIHZhciB0aWxlID0gdGhpcy50aWxlc1tjdHguaWRdO1xuXG4gIHZhciBmZWF0dXJlTGFiZWwgPSB0aGlzLmR5bmFtaWNMYWJlbDtcbiAgaWYgKGZlYXR1cmVMYWJlbCkge1xuICAgIGZlYXR1cmVMYWJlbC5hZGRUaWxlUG9seXMoY3R4LCBjb29yZHNBcnJheSk7XG4gIH1cblxuICBmb3IgKHZhciBnaWR4ID0gMCwgbGVuID0gY29vcmRzQXJyYXkubGVuZ3RoOyBnaWR4IDwgbGVuOyBnaWR4KyspIHtcbiAgICB2YXIgY29vcmRzID0gY29vcmRzQXJyYXlbZ2lkeF07XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvb3Jkcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGNvb3JkID0gY29vcmRzW2ldO1xuICAgICAgdmFyIG1ldGhvZCA9IChpID09PSAwID8gJ21vdmUnIDogJ2xpbmUnKSArICdUbyc7XG4gICAgICB2YXIgcHJvaiA9IHRoaXMuX3RpbGVQb2ludChjb29yZHNbaV0pO1xuICAgICAgcHJvakNvb3Jkcy5wdXNoKHByb2opO1xuICAgICAgY3R4MmRbbWV0aG9kXShwcm9qLngsIHByb2oueSk7XG4gICAgfVxuICB9XG5cbiAgY3R4MmQuY2xvc2VQYXRoKCk7XG4gIGN0eDJkLmZpbGwoKTtcbiAgaWYgKG91dGxpbmUpIHtcbiAgICBjdHgyZC5zdHJva2UoKTtcbiAgfVxuXG4gIHRpbGUucGF0aHMucHVzaChwcm9qQ29vcmRzKTtcblxufTtcblxuTVZURmVhdHVyZS5wcm90b3R5cGUuX2RyYXdTdGF0aWNMYWJlbCA9IGZ1bmN0aW9uKGN0eCwgY29vcmRzQXJyYXksIHN0eWxlKSB7XG4gIGlmICghc3R5bGUpIHJldHVybjtcbiAgaWYgKCFjdHgpIHJldHVybjtcblxuICAvLyBJZiB0aGUgY29ycmVzcG9uZGluZyBsYXllciBpcyBub3Qgb24gdGhlIG1hcCwgXG4gIC8vIHdlIGRvbnQgd2FudCB0byBwdXQgb24gYSBsYWJlbC5cbiAgaWYgKCF0aGlzLm12dExheWVyLl9tYXApIHJldHVybjtcblxuICB2YXIgdmVjUHQgPSB0aGlzLl90aWxlUG9pbnQoY29vcmRzQXJyYXlbMF1bMF0pO1xuXG4gIC8vIFdlJ3JlIG1ha2luZyBhIHN0YW5kYXJkIExlYWZsZXQgTWFya2VyIGZvciB0aGlzIGxhYmVsLlxuICB2YXIgcCA9IHRoaXMuX3Byb2plY3QodmVjUHQsIGN0eC50aWxlLngsIGN0eC50aWxlLnksIHRoaXMuZXh0ZW50LCB0aGlzLnRpbGVTaXplKTsgLy92ZWN0aWxlIHB0IHRvIG1lcmMgcHRcbiAgdmFyIG1lcmNQdCA9IEwucG9pbnQocC54LCBwLnkpOyAvLyBtYWtlIGludG8gbGVhZmxldCBvYmpcbiAgdmFyIGxhdExuZyA9IHRoaXMubWFwLnVucHJvamVjdChtZXJjUHQpOyAvLyBtZXJjIHB0IHRvIGxhdGxuZ1xuXG4gIHRoaXMuc3RhdGljTGFiZWwgPSBuZXcgU3RhdGljTGFiZWwodGhpcywgY3R4LCBsYXRMbmcsIHN0eWxlKTtcbiAgdGhpcy5tdnRMYXllci5mZWF0dXJlV2l0aExhYmVsQWRkZWQodGhpcyk7XG59O1xuXG5NVlRGZWF0dXJlLnByb3RvdHlwZS5yZW1vdmVMYWJlbCA9IGZ1bmN0aW9uKCkge1xuICBpZiAoIXRoaXMuc3RhdGljTGFiZWwpIHJldHVybjtcbiAgdGhpcy5zdGF0aWNMYWJlbC5yZW1vdmUoKTtcbiAgdGhpcy5zdGF0aWNMYWJlbCA9IG51bGw7XG59O1xuXG4vKipcbiAqIFByb2plY3RzIGEgdmVjdG9yIHRpbGUgcG9pbnQgdG8gdGhlIFNwaGVyaWNhbCBNZXJjYXRvciBwaXhlbCBzcGFjZSBmb3IgYSBnaXZlbiB6b29tIGxldmVsLlxuICpcbiAqIEBwYXJhbSB2ZWNQdFxuICogQHBhcmFtIHRpbGVYXG4gKiBAcGFyYW0gdGlsZVlcbiAqIEBwYXJhbSBleHRlbnRcbiAqIEBwYXJhbSB0aWxlU2l6ZVxuICovXG5NVlRGZWF0dXJlLnByb3RvdHlwZS5fcHJvamVjdCA9IGZ1bmN0aW9uKHZlY1B0LCB0aWxlWCwgdGlsZVksIGV4dGVudCwgdGlsZVNpemUpIHtcbiAgdmFyIHhPZmZzZXQgPSB0aWxlWCAqIHRpbGVTaXplO1xuICB2YXIgeU9mZnNldCA9IHRpbGVZICogdGlsZVNpemU7XG4gIHJldHVybiB7XG4gICAgeDogTWF0aC5mbG9vcih2ZWNQdC54ICsgeE9mZnNldCksXG4gICAgeTogTWF0aC5mbG9vcih2ZWNQdC55ICsgeU9mZnNldClcbiAgfTtcbn07XG5cbi8qKlxuICogVGFrZXMgYSBjb29yZGluYXRlIGZyb20gYSB2ZWN0b3IgdGlsZSBhbmQgdHVybnMgaXQgaW50byBhIExlYWZsZXQgUG9pbnQuXG4gKlxuICogQHBhcmFtIGN0eFxuICogQHBhcmFtIGNvb3Jkc1xuICogQHJldHVybnMge2VHZW9tVHlwZS5Qb2ludH1cbiAqIEBwcml2YXRlXG4gKi9cbk1WVEZlYXR1cmUucHJvdG90eXBlLl90aWxlUG9pbnQgPSBmdW5jdGlvbihjb29yZHMpIHtcbiAgcmV0dXJuIG5ldyBMLlBvaW50KGNvb3Jkcy54IC8gdGhpcy5kaXZpc29yLCBjb29yZHMueSAvIHRoaXMuZGl2aXNvcik7XG59O1xuXG5NVlRGZWF0dXJlLnByb3RvdHlwZS5saW5rZWRGZWF0dXJlID0gZnVuY3Rpb24oKSB7XG4gIHZhciBsaW5rZWRMYXllciA9IHRoaXMubXZ0TGF5ZXIubGlua2VkTGF5ZXIoKTtcbiAgaWYobGlua2VkTGF5ZXIpe1xuICAgIHZhciBsaW5rZWRGZWF0dXJlID0gbGlua2VkTGF5ZXIuZmVhdHVyZXNbdGhpcy5pZF07XG4gICAgcmV0dXJuIGxpbmtlZEZlYXR1cmU7XG4gIH1lbHNle1xuICAgIHJldHVybiBudWxsO1xuICB9XG59O1xuXG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgUnlhbiBXaGl0bGV5IG9uIDUvMTcvMTQuXG4gKi9cbi8qKiBGb3JrZWQgZnJvbSBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9ER3VpZGkvMTcxNjAxMCAqKi9cbnZhciBNVlRGZWF0dXJlID0gcmVxdWlyZSgnLi9NVlRGZWF0dXJlJyk7XG52YXIgVXRpbCA9IHJlcXVpcmUoJy4vTVZUVXRpbCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEwuVGlsZUxheWVyLkNhbnZhcy5leHRlbmQoe1xuXG4gIG9wdGlvbnM6IHtcbiAgICBkZWJ1ZzogZmFsc2UsXG4gICAgaXNIaWRkZW5MYXllcjogZmFsc2UsXG4gICAgZ2V0SURGb3JMYXllckZlYXR1cmU6IGZ1bmN0aW9uKCkge30sXG4gICAgdGlsZVNpemU6IDI1NixcbiAgICBsaW5lQ2xpY2tUb2xlcmFuY2U6IDJcbiAgfSxcblxuICBfZmVhdHVyZUlzQ2xpY2tlZDoge30sXG5cbiAgX2lzUG9pbnRJblBvbHk6IGZ1bmN0aW9uKHB0LCBwb2x5KSB7XG4gICAgaWYocG9seSAmJiBwb2x5Lmxlbmd0aCkge1xuICAgICAgZm9yICh2YXIgYyA9IGZhbHNlLCBpID0gLTEsIGwgPSBwb2x5Lmxlbmd0aCwgaiA9IGwgLSAxOyArK2kgPCBsOyBqID0gaSlcbiAgICAgICAgKChwb2x5W2ldLnkgPD0gcHQueSAmJiBwdC55IDwgcG9seVtqXS55KSB8fCAocG9seVtqXS55IDw9IHB0LnkgJiYgcHQueSA8IHBvbHlbaV0ueSkpXG4gICAgICAgICYmIChwdC54IDwgKHBvbHlbal0ueCAtIHBvbHlbaV0ueCkgKiAocHQueSAtIHBvbHlbaV0ueSkgLyAocG9seVtqXS55IC0gcG9seVtpXS55KSArIHBvbHlbaV0ueClcbiAgICAgICAgJiYgKGMgPSAhYyk7XG4gICAgICByZXR1cm4gYztcbiAgICB9XG4gIH0sXG5cbiAgX2dldERpc3RhbmNlRnJvbUxpbmU6IGZ1bmN0aW9uKHB0LCBwdHMpIHtcbiAgICB2YXIgbWluID0gTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZO1xuICAgIGlmIChwdHMgJiYgcHRzLmxlbmd0aCA+IDEpIHtcbiAgICAgIHB0ID0gTC5wb2ludChwdC54LCBwdC55KTtcbiAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gcHRzLmxlbmd0aCAtIDE7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgdmFyIHRlc3QgPSB0aGlzLl9wcm9qZWN0UG9pbnRPbkxpbmVTZWdtZW50KHB0LCBwdHNbaV0sIHB0c1tpICsgMV0pO1xuICAgICAgICBpZiAodGVzdC5kaXN0YW5jZSA8PSBtaW4pIHtcbiAgICAgICAgICBtaW4gPSB0ZXN0LmRpc3RhbmNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBtaW47XG4gIH0sXG5cbiAgX3Byb2plY3RQb2ludE9uTGluZVNlZ21lbnQ6IGZ1bmN0aW9uKHAsIHIwLCByMSkge1xuICAgIHZhciBsaW5lTGVuZ3RoID0gcjAuZGlzdGFuY2VUbyhyMSk7XG4gICAgaWYgKGxpbmVMZW5ndGggPCAxKSB7XG4gICAgICAgIHJldHVybiB7ZGlzdGFuY2U6IHAuZGlzdGFuY2VUbyhyMCksIGNvb3JkaW5hdGU6IHIwfTtcbiAgICB9XG4gICAgdmFyIHUgPSAoKHAueCAtIHIwLngpICogKHIxLnggLSByMC54KSArIChwLnkgLSByMC55KSAqIChyMS55IC0gcjAueSkpIC8gTWF0aC5wb3cobGluZUxlbmd0aCwgMik7XG4gICAgaWYgKHUgPCAwLjAwMDAwMDEpIHtcbiAgICAgICAgcmV0dXJuIHtkaXN0YW5jZTogcC5kaXN0YW5jZVRvKHIwKSwgY29vcmRpbmF0ZTogcjB9O1xuICAgIH1cbiAgICBpZiAodSA+IDAuOTk5OTk5OSkge1xuICAgICAgICByZXR1cm4ge2Rpc3RhbmNlOiBwLmRpc3RhbmNlVG8ocjEpLCBjb29yZGluYXRlOiByMX07XG4gICAgfVxuICAgIHZhciBhID0gTC5wb2ludChyMC54ICsgdSAqIChyMS54IC0gcjAueCksIHIwLnkgKyB1ICogKHIxLnkgLSByMC55KSk7XG4gICAgcmV0dXJuIHtkaXN0YW5jZTogcC5kaXN0YW5jZVRvKGEpLCBwb2ludDogYX07XG4gIH0sXG5cbiAgaW5pdGlhbGl6ZTogZnVuY3Rpb24obXZ0U291cmNlLCBvcHRpb25zKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHNlbGYubXZ0U291cmNlID0gbXZ0U291cmNlO1xuICAgIEwuVXRpbC5zZXRPcHRpb25zKHRoaXMsIG9wdGlvbnMpO1xuXG4gICAgdGhpcy5zdHlsZSA9IG9wdGlvbnMuc3R5bGU7XG4gICAgdGhpcy5uYW1lID0gb3B0aW9ucy5uYW1lO1xuICAgIHRoaXMuX2NhbnZhc0lEVG9GZWF0dXJlcyA9IHt9O1xuICAgIHRoaXMuZmVhdHVyZXMgPSB7fTtcbiAgICB0aGlzLmZlYXR1cmVzV2l0aExhYmVscyA9IFtdO1xuICAgIHRoaXMuX2hpZ2hlc3RDb3VudCA9IDA7XG4gIH0sXG5cbiAgb25BZGQ6IGZ1bmN0aW9uKG1hcCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICBzZWxmLm1hcCA9IG1hcDtcbiAgICBMLlRpbGVMYXllci5DYW52YXMucHJvdG90eXBlLm9uQWRkLmNhbGwodGhpcywgbWFwKTtcbiAgICBtYXAub24oJ2xheWVycmVtb3ZlJywgZnVuY3Rpb24oZSkge1xuICAgICAgLy8gd2Ugb25seSB3YW50IHRvIGRvIHN0dWZmIHdoZW4gdGhlIGxheWVycmVtb3ZlIGV2ZW50IGlzIG9uIHRoaXMgbGF5ZXJcbiAgICAgIGlmIChlLmxheWVyLl9sZWFmbGV0X2lkID09PSBzZWxmLl9sZWFmbGV0X2lkKSB7XG4gICAgICAgIHJlbW92ZUxhYmVscyhzZWxmKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcblxuICBkcmF3VGlsZTogZnVuY3Rpb24oY2FudmFzLCB0aWxlUG9pbnQsIHpvb20pIHtcblxuICAgIHZhciBjdHggPSB7XG4gICAgICBjYW52YXM6IGNhbnZhcyxcbiAgICAgIHRpbGU6IHRpbGVQb2ludCxcbiAgICAgIHpvb206IHpvb20sXG4gICAgICB0aWxlU2l6ZTogdGhpcy5vcHRpb25zLnRpbGVTaXplXG4gICAgfTtcblxuICAgIGN0eC5pZCA9IFV0aWwuZ2V0Q29udGV4dElEKGN0eCk7XG5cbiAgICBpZiAoIXRoaXMuX2NhbnZhc0lEVG9GZWF0dXJlc1tjdHguaWRdKSB7XG4gICAgICB0aGlzLl9pbml0aWFsaXplRmVhdHVyZXNIYXNoKGN0eCk7XG4gICAgfVxuICAgIGlmICghdGhpcy5mZWF0dXJlcykge1xuICAgICAgdGhpcy5mZWF0dXJlcyA9IHt9O1xuICAgIH1cblxuICB9LFxuXG4gIF9pbml0aWFsaXplRmVhdHVyZXNIYXNoOiBmdW5jdGlvbihjdHgpe1xuICAgIHRoaXMuX2NhbnZhc0lEVG9GZWF0dXJlc1tjdHguaWRdID0ge307XG4gICAgdGhpcy5fY2FudmFzSURUb0ZlYXR1cmVzW2N0eC5pZF0uZmVhdHVyZXMgPSBbXTtcbiAgICB0aGlzLl9jYW52YXNJRFRvRmVhdHVyZXNbY3R4LmlkXS5jYW52YXMgPSBjdHguY2FudmFzO1xuICB9LFxuXG4gIF9kcmF3OiBmdW5jdGlvbihjdHgpIHtcbiAgICAvL0RyYXcgaXMgaGFuZGxlZCBieSB0aGUgcGFyZW50IE1WVFNvdXJjZSBvYmplY3RcbiAgfSxcbiAgZ2V0Q2FudmFzOiBmdW5jdGlvbihwYXJlbnRDdHgpe1xuICAgIC8vVGhpcyBnZXRzIGNhbGxlZCBpZiBhIHZlY3RvciB0aWxlIGZlYXR1cmUgaGFzIGFscmVhZHkgYmVlbiBwYXJzZWQuXG4gICAgLy9XZSd2ZSBhbHJlYWR5IGdvdCB0aGUgZ2VvbSwganVzdCBnZXQgb24gd2l0aCB0aGUgZHJhd2luZy5cbiAgICAvL05lZWQgYSB3YXkgdG8gcGx1Y2sgYSBjYW52YXMgZWxlbWVudCBmcm9tIHRoaXMgbGF5ZXIgZ2l2ZW4gdGhlIHBhcmVudCBsYXllcidzIGlkLlxuICAgIC8vV2FpdCBmb3IgaXQgdG8gZ2V0IGxvYWRlZCBiZWZvcmUgcHJvY2VlZGluZy5cbiAgICB2YXIgdGlsZVBvaW50ID0gcGFyZW50Q3R4LnRpbGU7XG4gICAgdmFyIGN0eCA9IHRoaXMuX3RpbGVzW3RpbGVQb2ludC54ICsgXCI6XCIgKyB0aWxlUG9pbnQueV07XG5cbiAgICBpZihjdHgpe1xuICAgICAgcGFyZW50Q3R4LmNhbnZhcyA9IGN0eDtcbiAgICAgIHRoaXMucmVkcmF3VGlsZShwYXJlbnRDdHguaWQpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIC8vVGhpcyBpcyBhIHRpbWVyIHRoYXQgd2lsbCB3YWl0IGZvciBhIGNyaXRlcmlvbiB0byByZXR1cm4gdHJ1ZS5cbiAgICAvL0lmIG5vdCB0cnVlIHdpdGhpbiB0aGUgdGltZW91dCBkdXJhdGlvbiwgaXQgd2lsbCBtb3ZlIG9uLlxuICAgIHdhaXRGb3IoZnVuY3Rpb24gKCkge1xuICAgICAgICBjdHggPSBzZWxmLl90aWxlc1t0aWxlUG9pbnQueCArIFwiOlwiICsgdGlsZVBvaW50LnldO1xuICAgICAgICBpZihjdHgpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGZ1bmN0aW9uKCl7XG4gICAgICAgIC8vV2hlbiBpdCBmaW5pc2hlcywgZG8gdGhpcy5cbiAgICAgICAgY3R4ID0gc2VsZi5fdGlsZXNbdGlsZVBvaW50LnggKyBcIjpcIiArIHRpbGVQb2ludC55XTtcbiAgICAgICAgcGFyZW50Q3R4LmNhbnZhcyA9IGN0eDtcbiAgICAgICAgc2VsZi5yZWRyYXdUaWxlKHBhcmVudEN0eC5pZCk7XG5cbiAgICAgIH0sIC8vd2hlbiBkb25lLCBnbyB0byBuZXh0IGZsb3dcbiAgICAgIDIwMDApOyAvL1RoZSBUaW1lb3V0IG1pbGxpc2Vjb25kcy4gIEFmdGVyIHRoaXMsIGdpdmUgdXAgYW5kIG1vdmUgb25cblxuICB9LFxuXG4gIHBhcnNlVmVjdG9yVGlsZUxheWVyOiBmdW5jdGlvbih2dGwsIGN0eCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB2YXIgdGlsZVBvaW50ID0gY3R4LnRpbGU7XG4gICAgdmFyIGxheWVyQ3R4ICA9IHsgY2FudmFzOiBudWxsLCBpZDogY3R4LmlkLCB0aWxlOiBjdHgudGlsZSwgem9vbTogY3R4Lnpvb20sIHRpbGVTaXplOiBjdHgudGlsZVNpemV9O1xuXG4gICAgLy9TZWUgaWYgd2UgY2FuIHBsdWNrIHRoZSBjaGlsZCB0aWxlIGZyb20gdGhpcyBQQkYgdGlsZSBsYXllciBiYXNlZCBvbiB0aGUgbWFzdGVyIGxheWVyJ3MgdGlsZSBpZC5cbiAgICBsYXllckN0eC5jYW52YXMgPSBzZWxmLl90aWxlc1t0aWxlUG9pbnQueCArIFwiOlwiICsgdGlsZVBvaW50LnldO1xuXG5cblxuICAgIC8vSW5pdGlhbGl6ZSB0aGlzIHRpbGUncyBmZWF0dXJlIHN0b3JhZ2UgaGFzaCwgaWYgaXQgaGFzbid0IGFscmVhZHkgYmVlbiBjcmVhdGVkLiAgVXNlZCBmb3Igd2hlbiBmaWx0ZXJzIGFyZSB1cGRhdGVkLCBhbmQgZmVhdHVyZXMgYXJlIGNsZWFyZWQgdG8gcHJlcGFyZSBmb3IgYSBmcmVzaCByZWRyYXcuXG4gICAgaWYgKCF0aGlzLl9jYW52YXNJRFRvRmVhdHVyZXNbbGF5ZXJDdHguaWRdKSB7XG4gICAgICB0aGlzLl9pbml0aWFsaXplRmVhdHVyZXNIYXNoKGxheWVyQ3R4KTtcbiAgICB9ZWxzZXtcbiAgICAgIC8vQ2xlYXIgdGhpcyB0aWxlJ3MgcHJldmlvdXNseSBzYXZlZCBmZWF0dXJlcy5cbiAgICAgIHRoaXMuY2xlYXJUaWxlRmVhdHVyZUhhc2gobGF5ZXJDdHguaWQpO1xuICAgIH1cblxuICAgIHZhciBmZWF0dXJlcyA9IHZ0bC5wYXJzZWRGZWF0dXJlcztcbiAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gZmVhdHVyZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIHZhciB2dGYgPSBmZWF0dXJlc1tpXTsgLy92ZWN0b3IgdGlsZSBmZWF0dXJlXG4gICAgICB2dGYubGF5ZXIgPSB2dGw7XG5cbiAgICAgIC8qKlxuICAgICAgICogQXBwbHkgZmlsdGVyIG9uIGZlYXR1cmUgaWYgdGhlcmUgaXMgb25lLiBEZWZpbmVkIGluIHRoZSBvcHRpb25zIG9iamVjdFxuICAgICAgICogb2YgVGlsZUxheWVyLk1WVFNvdXJjZS5qc1xuICAgICAgICovXG4gICAgICB2YXIgZmlsdGVyID0gc2VsZi5vcHRpb25zLmZpbHRlcjtcbiAgICAgIGlmIChmaWx0ZXIgJiYgdHlwZW9mIGZpbHRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBpZiAoIGZpbHRlcih2dGYsIGxheWVyQ3R4KSA9PT0gZmFsc2UgKSBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgdmFyIGdldElERm9yTGF5ZXJGZWF0dXJlO1xuICAgICAgaWYgKHR5cGVvZiBzZWxmLm9wdGlvbnMuZ2V0SURGb3JMYXllckZlYXR1cmUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgZ2V0SURGb3JMYXllckZlYXR1cmUgPSBzZWxmLm9wdGlvbnMuZ2V0SURGb3JMYXllckZlYXR1cmU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBnZXRJREZvckxheWVyRmVhdHVyZSA9IFV0aWwuZ2V0SURGb3JMYXllckZlYXR1cmU7XG4gICAgICB9XG4gICAgICB2YXIgdW5pcXVlSUQgPSBzZWxmLm9wdGlvbnMuZ2V0SURGb3JMYXllckZlYXR1cmUodnRmKSB8fCBpO1xuICAgICAgdmFyIG12dEZlYXR1cmUgPSBzZWxmLmZlYXR1cmVzW3VuaXF1ZUlEXTtcblxuICAgICAgLyoqXG4gICAgICAgKiBVc2UgbGF5ZXJPcmRlcmluZyBmdW5jdGlvbiB0byBhcHBseSBhIHpJbmRleCBwcm9wZXJ0eSB0byBlYWNoIHZ0Zi4gIFRoaXMgaXMgZGVmaW5lZCBpblxuICAgICAgICogVGlsZUxheWVyLk1WVFNvdXJjZS5qcy4gIFVzZWQgYmVsb3cgdG8gc29ydCBmZWF0dXJlcy5ucG1cbiAgICAgICAqL1xuICAgICAgdmFyIGxheWVyT3JkZXJpbmcgPSBzZWxmLm9wdGlvbnMubGF5ZXJPcmRlcmluZztcbiAgICAgIGlmICh0eXBlb2YgbGF5ZXJPcmRlcmluZyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBsYXllck9yZGVyaW5nKHZ0ZiwgbGF5ZXJDdHgpOyAvL0FwcGxpZXMgYSBjdXN0b20gcHJvcGVydHkgdG8gdGhlIGZlYXR1cmUsIHdoaWNoIGlzIHVzZWQgYWZ0ZXIgd2UncmUgdGhydSBpdGVyYXRpbmcgdG8gc29ydFxuICAgICAgfVxuXG4gICAgICAvL0NyZWF0ZSBhIG5ldyBNVlRGZWF0dXJlIGlmIG9uZSBkb2Vzbid0IGFscmVhZHkgZXhpc3QgZm9yIHRoaXMgZmVhdHVyZS5cbiAgICAgIGlmICghbXZ0RmVhdHVyZSkge1xuXG5cbiAgICAgICAgLy9HZXQgYSBzdHlsZSBmb3IgdGhlIGZlYXR1cmUgLSBzZXQgaXQganVzdCBvbmNlIGZvciBlYWNoIG5ldyBNVlRGZWF0dXJlXG4gICAgICAgIHZhciBzdHlsZSA9IHNlbGYuc3R5bGUodnRmKTtcblxuICAgICAgICAvL2NyZWF0ZSBhIG5ldyBmZWF0dXJlXG4gICAgICAgIHNlbGYuZmVhdHVyZXNbdW5pcXVlSURdID0gbXZ0RmVhdHVyZSA9IG5ldyBNVlRGZWF0dXJlKHNlbGYsIHZ0ZiwgbGF5ZXJDdHgsIHVuaXF1ZUlELCBzdHlsZSk7XG4gICAgICAgIGlmIChzdHlsZSAmJiBzdHlsZS5keW5hbWljTGFiZWwgJiYgdHlwZW9mIHN0eWxlLmR5bmFtaWNMYWJlbCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHNlbGYuZmVhdHVyZXNXaXRoTGFiZWxzLnB1c2gobXZ0RmVhdHVyZSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vQWRkIHRoZSBuZXcgcGFydCB0byB0aGUgZXhpc3RpbmcgZmVhdHVyZVxuICAgICAgICBtdnRGZWF0dXJlLmFkZFRpbGVGZWF0dXJlKHZ0ZiwgbGF5ZXJDdHgpO1xuICAgICAgfVxuXG4gICAgICAvL0Fzc29jaWF0ZSAmIFNhdmUgdGhpcyBmZWF0dXJlIHdpdGggdGhpcyB0aWxlIGZvciBsYXRlclxuICAgICAgaWYobGF5ZXJDdHggJiYgbGF5ZXJDdHguaWQpIHNlbGYuX2NhbnZhc0lEVG9GZWF0dXJlc1tsYXllckN0eC5pZF1bJ2ZlYXR1cmVzJ10ucHVzaChtdnRGZWF0dXJlKTtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFwcGx5IHNvcnRpbmcgKHpJbmRleCkgb24gZmVhdHVyZSBpZiB0aGVyZSBpcyBhIGZ1bmN0aW9uIGRlZmluZWQgaW4gdGhlIG9wdGlvbnMgb2JqZWN0XG4gICAgICogb2YgVGlsZUxheWVyLk1WVFNvdXJjZS5qc1xuICAgICAqL1xuICAgIHZhciBsYXllck9yZGVyaW5nID0gc2VsZi5vcHRpb25zLmxheWVyT3JkZXJpbmc7XG4gICAgaWYgKGxheWVyT3JkZXJpbmcpIHtcbiAgICAgIC8vV2UndmUgYXNzaWduZWQgdGhlIGN1c3RvbSB6SW5kZXggcHJvcGVydHkgd2hlbiBpdGVyYXRpbmcgYWJvdmUuICBOb3cganVzdCBzb3J0LlxuICAgICAgc2VsZi5fY2FudmFzSURUb0ZlYXR1cmVzW2xheWVyQ3R4LmlkXS5mZWF0dXJlcyA9IHNlbGYuX2NhbnZhc0lEVG9GZWF0dXJlc1tsYXllckN0eC5pZF0uZmVhdHVyZXMuc29ydChmdW5jdGlvbihhLCBiKSB7XG4gICAgICAgIHJldHVybiAtKGIucHJvcGVydGllcy56SW5kZXggLSBhLnByb3BlcnRpZXMuekluZGV4KVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2VsZi5yZWRyYXdUaWxlKGxheWVyQ3R4LmlkKTtcbiAgfSxcblxuICBzZXRTdHlsZTogZnVuY3Rpb24oc3R5bGVGbikge1xuICAgIC8vIHJlZnJlc2ggdGhlIG51bWJlciBmb3IgdGhlIGhpZ2hlc3QgY291bnQgdmFsdWVcbiAgICAvLyB0aGlzIGlzIHVzZWQgb25seSBmb3IgY2hvcm9wbGV0aFxuICAgIHRoaXMuX2hpZ2hlc3RDb3VudCA9IDA7XG5cbiAgICAvLyBsb3dlc3QgY291bnQgc2hvdWxkIG5vdCBiZSAwLCBzaW5jZSB3ZSB3YW50IHRvIGZpZ3VyZSBvdXQgdGhlIGxvd2VzdFxuICAgIHRoaXMuX2xvd2VzdENvdW50ID0gbnVsbDtcblxuICAgIHRoaXMuc3R5bGUgPSBzdHlsZUZuO1xuICAgIGZvciAodmFyIGtleSBpbiB0aGlzLmZlYXR1cmVzKSB7XG4gICAgICB2YXIgZmVhdCA9IHRoaXMuZmVhdHVyZXNba2V5XTtcbiAgICAgIGZlYXQuc2V0U3R5bGUoc3R5bGVGbik7XG4gICAgfVxuICAgIHZhciB6ID0gdGhpcy5tYXAuZ2V0Wm9vbSgpO1xuICAgIGZvciAodmFyIGtleSBpbiB0aGlzLl90aWxlcykge1xuICAgICAgdmFyIGlkID0geiArICc6JyArIGtleTtcbiAgICAgIHRoaXMucmVkcmF3VGlsZShpZCk7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBBcyBjb3VudHMgZm9yIGNob3JvcGxldGhzIGNvbWUgaW4gd2l0aCB0aGUgYWpheCBkYXRhLFxuICAgKiB3ZSB3YW50IHRvIGtlZXAgdHJhY2sgb2Ygd2hpY2ggdmFsdWUgaXMgdGhlIGhpZ2hlc3RcbiAgICogdG8gY3JlYXRlIHRoZSBjb2xvciByYW1wIGZvciB0aGUgZmlsbHMgb2YgcG9seWdvbnMuXG4gICAqIEBwYXJhbSBjb3VudFxuICAgKi9cbiAgc2V0SGlnaGVzdENvdW50OiBmdW5jdGlvbihjb3VudCkge1xuICAgIGlmIChjb3VudCA+IHRoaXMuX2hpZ2hlc3RDb3VudCkge1xuICAgICAgdGhpcy5faGlnaGVzdENvdW50ID0gY291bnQ7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBoaWdoZXN0IG51bWJlciBvZiBhbGwgb2YgdGhlIGNvdW50cyB0aGF0IGhhdmUgY29tZSBpblxuICAgKiBmcm9tIHNldEhpZ2hlc3RDb3VudC4gVGhpcyBpcyBhc3N1bWVkIHRvIGJlIHNldCB2aWEgYWpheCBjYWxsYmFja3MuXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAqL1xuICBnZXRIaWdoZXN0Q291bnQ6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9oaWdoZXN0Q291bnQ7XG4gIH0sXG5cbiAgc2V0TG93ZXN0Q291bnQ6IGZ1bmN0aW9uKGNvdW50KSB7XG4gICAgaWYgKCF0aGlzLl9sb3dlc3RDb3VudCB8fCBjb3VudCA8IHRoaXMuX2xvd2VzdENvdW50KSB7XG4gICAgICB0aGlzLl9sb3dlc3RDb3VudCA9IGNvdW50O1xuICAgIH1cbiAgfSxcblxuICBnZXRMb3dlc3RDb3VudDogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xvd2VzdENvdW50O1xuICB9LFxuXG4gIHNldENvdW50UmFuZ2U6IGZ1bmN0aW9uKGNvdW50KSB7XG4gICAgdGhpcy5zZXRIaWdoZXN0Q291bnQoY291bnQpO1xuICAgIHRoaXMuc2V0TG93ZXN0Q291bnQoY291bnQpO1xuICB9LFxuXG4gIC8vVGhpcyBpcyB0aGUgb2xkIHdheS4gIEl0IHdvcmtzLCBidXQgaXMgc2xvdyBmb3IgbW91c2VvdmVyIGV2ZW50cy4gIEZpbmUgZm9yIGNsaWNrIGV2ZW50cy5cbiAgaGFuZGxlQ2xpY2tFdmVudDogZnVuY3Rpb24oZXZ0LCBjYikge1xuICAgIC8vQ2xpY2sgaGFwcGVuZWQgb24gdGhlIEdyb3VwTGF5ZXIgKE1hbmFnZXIpIGFuZCBwYXNzZWQgaXQgaGVyZVxuICAgIHZhciB0aWxlSUQgPSBldnQudGlsZUlELnNwbGl0KFwiOlwiKS5zbGljZSgxLCAzKS5qb2luKFwiOlwiKTtcbiAgICB2YXIgY2FudmFzID0gdGhpcy5fdGlsZXNbdGlsZUlEXTtcbiAgICBpZighY2FudmFzKSAoY2IoZXZ0KSk7IC8vYnJlYWsgb3V0XG4gICAgdmFyIHggPSBldnQubGF5ZXJQb2ludC54IC0gY2FudmFzLl9sZWFmbGV0X3Bvcy54O1xuICAgIHZhciB5ID0gZXZ0LmxheWVyUG9pbnQueSAtIGNhbnZhcy5fbGVhZmxldF9wb3MueTtcblxuICAgIHZhciB0aWxlUG9pbnQgPSB7eDogeCwgeTogeX07XG4gICAgdmFyIGZlYXR1cmVzID0gdGhpcy5fY2FudmFzSURUb0ZlYXR1cmVzW2V2dC50aWxlSURdLmZlYXR1cmVzO1xuXG4gICAgdmFyIG1pbkRpc3RhbmNlID0gTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZO1xuICAgIHZhciBuZWFyZXN0ID0gbnVsbDtcbiAgICB2YXIgaiwgcGF0aHMsIGRpc3RhbmNlO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBmZWF0dXJlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGZlYXR1cmUgPSBmZWF0dXJlc1tpXTtcbiAgICAgIHN3aXRjaCAoZmVhdHVyZS50eXBlKSB7XG4gICAgICAgIGNhc2UgMjogLy9MaW5lU3RyaW5nXG4gICAgICAgICAgcGF0aHMgPSBmZWF0dXJlLmdldFBhdGhzRm9yVGlsZShldnQudGlsZUlEKTtcbiAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgcGF0aHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIGlmIChmZWF0dXJlLnN0eWxlKSB7XG4gICAgICAgICAgICAgIHZhciBkaXN0YW5jZSA9IHRoaXMuX2dldERpc3RhbmNlRnJvbUxpbmUodGlsZVBvaW50LCBwYXRoc1tqXSk7XG4gICAgICAgICAgICAgIHZhciB0aGlja25lc3MgPSAoZmVhdHVyZS5zZWxlY3RlZCAmJiBmZWF0dXJlLnN0eWxlLnNlbGVjdGVkID8gZmVhdHVyZS5zdHlsZS5zZWxlY3RlZC5zaXplIDogZmVhdHVyZS5zdHlsZS5zaXplKTtcbiAgICAgICAgICAgICAgaWYgKGRpc3RhbmNlIDwgdGhpY2tuZXNzIC8gMiArIHRoaXMub3B0aW9ucy5saW5lQ2xpY2tUb2xlcmFuY2UgJiYgZGlzdGFuY2UgPCBtaW5EaXN0YW5jZSkge1xuICAgICAgICAgICAgICAgIG5lYXJlc3QgPSBmZWF0dXJlO1xuICAgICAgICAgICAgICAgIG1pbkRpc3RhbmNlID0gZGlzdGFuY2U7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAzOiAvL1BvbHlnb25cbiAgICAgICAgICBwYXRocyA9IGZlYXR1cmUuZ2V0UGF0aHNGb3JUaWxlKGV2dC50aWxlSUQpO1xuICAgICAgICAgIGZvciAoaiA9IDA7IGogPCBwYXRocy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuX2lzUG9pbnRJblBvbHkodGlsZVBvaW50LCBwYXRoc1tqXSkpIHtcbiAgICAgICAgICAgICAgbmVhcmVzdCA9IGZlYXR1cmU7XG4gICAgICAgICAgICAgIG1pbkRpc3RhbmNlID0gMDsgLy8gcG9pbnQgaXMgaW5zaWRlIHRoZSBwb2x5Z29uLCBzbyBkaXN0YW5jZSBpcyB6ZXJvXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgaWYgKG1pbkRpc3RhbmNlID09IDApIGJyZWFrO1xuICAgIH1cblxuICAgIGlmIChuZWFyZXN0ICYmIG5lYXJlc3QudG9nZ2xlRW5hYmxlZCkge1xuICAgICAgICBuZWFyZXN0LnRvZ2dsZSgpO1xuICAgIH1cbiAgICBldnQuZmVhdHVyZSA9IG5lYXJlc3Q7XG4gICAgY2IoZXZ0KTtcbiAgfSxcblxuICBjbGVhclRpbGU6IGZ1bmN0aW9uKGlkKSB7XG4gICAgLy9pZCBpcyB0aGUgZW50aXJlIHpvb206eDp5LiAgd2UganVzdCB3YW50IHg6eS5cbiAgICB2YXIgY2EgPSBpZC5zcGxpdChcIjpcIik7XG4gICAgdmFyIGNhbnZhc0lkID0gY2FbMV0gKyBcIjpcIiArIGNhWzJdO1xuICAgIGlmICh0eXBlb2YgdGhpcy5fdGlsZXNbY2FudmFzSWRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uc29sZS5lcnJvcihcInR5cGVvZiB0aGlzLl90aWxlc1tjYW52YXNJZF0gPT09ICd1bmRlZmluZWQnXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgY2FudmFzID0gdGhpcy5fdGlsZXNbY2FudmFzSWRdO1xuXG4gICAgdmFyIGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBjb250ZXh0LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICB9LFxuXG4gIGNsZWFyVGlsZUZlYXR1cmVIYXNoOiBmdW5jdGlvbihjYW52YXNJRCl7XG4gICAgdGhpcy5fY2FudmFzSURUb0ZlYXR1cmVzW2NhbnZhc0lEXSA9IHsgZmVhdHVyZXM6IFtdfTsgLy9HZXQgcmlkIG9mIGFsbCBzYXZlZCBmZWF0dXJlc1xuICB9LFxuXG4gIGNsZWFyTGF5ZXJGZWF0dXJlSGFzaDogZnVuY3Rpb24oKXtcbiAgICB0aGlzLmZlYXR1cmVzID0ge307XG4gIH0sXG5cbiAgcmVkcmF3VGlsZTogZnVuY3Rpb24oY2FudmFzSUQpIHtcbiAgICAvL0ZpcnN0LCBjbGVhciB0aGUgY2FudmFzXG4gICAgdGhpcy5jbGVhclRpbGUoY2FudmFzSUQpO1xuXG4gICAgLy8gSWYgdGhlIGZlYXR1cmVzIGFyZSBub3QgaW4gdGhlIHRpbGUsIHRoZW4gdGhlcmUgaXMgbm90aGluZyB0byByZWRyYXcuXG4gICAgLy8gVGhpcyBtYXkgaGFwcGVuIGlmIHlvdSBjYWxsIHJlZHJhdyBiZWZvcmUgZmVhdHVyZXMgaGF2ZSBsb2FkZWQgYW5kIGluaXRpYWxseVxuICAgIC8vIGRyYXduIHRoZSB0aWxlLlxuICAgIHZhciBmZWF0ZmVhdHMgPSB0aGlzLl9jYW52YXNJRFRvRmVhdHVyZXNbY2FudmFzSURdO1xuICAgIGlmICghZmVhdGZlYXRzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy9HZXQgdGhlIGZlYXR1cmVzIGZvciB0aGlzIHRpbGUsIGFuZCByZWRyYXcgdGhlbS5cbiAgICB2YXIgZmVhdHVyZXMgPSBmZWF0ZmVhdHMuZmVhdHVyZXM7XG5cbiAgICAvLyB3ZSB3YW50IHRvIHNraXAgZHJhd2luZyB0aGUgc2VsZWN0ZWQgZmVhdHVyZXMgYW5kIGRyYXcgdGhlbSBsYXN0XG4gICAgdmFyIHNlbGVjdGVkRmVhdHVyZXMgPSBbXTtcblxuICAgIC8vIGRyYXdpbmcgYWxsIG9mIHRoZSBub24tc2VsZWN0ZWQgZmVhdHVyZXNcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGZlYXR1cmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZmVhdHVyZSA9IGZlYXR1cmVzW2ldO1xuICAgICAgaWYgKGZlYXR1cmUuc2VsZWN0ZWQpIHtcbiAgICAgICAgc2VsZWN0ZWRGZWF0dXJlcy5wdXNoKGZlYXR1cmUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZmVhdHVyZS5kcmF3KGNhbnZhc0lEKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBkcmF3aW5nIHRoZSBzZWxlY3RlZCBmZWF0dXJlcyBsYXN0XG4gICAgZm9yICh2YXIgaiA9IDAsIGxlbjIgPSBzZWxlY3RlZEZlYXR1cmVzLmxlbmd0aDsgaiA8IGxlbjI7IGorKykge1xuICAgICAgdmFyIHNlbEZlYXQgPSBzZWxlY3RlZEZlYXR1cmVzW2pdO1xuICAgICAgc2VsRmVhdC5kcmF3KGNhbnZhc0lEKTtcbiAgICB9XG4gIH0sXG5cbiAgX3Jlc2V0Q2FudmFzSURUb0ZlYXR1cmVzOiBmdW5jdGlvbihjYW52YXNJRCwgY2FudmFzKSB7XG5cbiAgICB0aGlzLl9jYW52YXNJRFRvRmVhdHVyZXNbY2FudmFzSURdID0ge307XG4gICAgdGhpcy5fY2FudmFzSURUb0ZlYXR1cmVzW2NhbnZhc0lEXS5mZWF0dXJlcyA9IFtdO1xuICAgIHRoaXMuX2NhbnZhc0lEVG9GZWF0dXJlc1tjYW52YXNJRF0uY2FudmFzID0gY2FudmFzO1xuXG4gIH0sXG5cbiAgbGlua2VkTGF5ZXI6IGZ1bmN0aW9uKCkge1xuICAgIGlmKHRoaXMubXZ0U291cmNlLmxheWVyTGluaykge1xuICAgICAgdmFyIGxpbmtOYW1lID0gdGhpcy5tdnRTb3VyY2UubGF5ZXJMaW5rKHRoaXMubmFtZSk7XG4gICAgICByZXR1cm4gdGhpcy5tdnRTb3VyY2UubGF5ZXJzW2xpbmtOYW1lXTtcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfSxcblxuICBmZWF0dXJlV2l0aExhYmVsQWRkZWQ6IGZ1bmN0aW9uKGZlYXR1cmUpIHtcbiAgICB0aGlzLmZlYXR1cmVzV2l0aExhYmVscy5wdXNoKGZlYXR1cmUpO1xuICB9XG5cbn0pO1xuXG5cbmZ1bmN0aW9uIHJlbW92ZUxhYmVscyhzZWxmKSB7XG4gIHZhciBmZWF0dXJlcyA9IHNlbGYuZmVhdHVyZXNXaXRoTGFiZWxzO1xuICBmb3IgKHZhciBpID0gMCwgbGVuID0gZmVhdHVyZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICB2YXIgZmVhdCA9IGZlYXR1cmVzW2ldO1xuICAgIGZlYXQucmVtb3ZlTGFiZWwoKTtcbiAgfVxuICBzZWxmLmZlYXR1cmVzV2l0aExhYmVscyA9IFtdO1xufVxuXG5cbi8qKlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9hcml5YS9waGFudG9tanMvYmxvYi9tYXN0ZXIvZXhhbXBsZXMvd2FpdGZvci5qc1xuICpcbiAqIFdhaXQgdW50aWwgdGhlIHRlc3QgY29uZGl0aW9uIGlzIHRydWUgb3IgYSB0aW1lb3V0IG9jY3Vycy4gVXNlZnVsIGZvciB3YWl0aW5nXG4gKiBvbiBhIHNlcnZlciByZXNwb25zZSBvciBmb3IgYSB1aSBjaGFuZ2UgKGZhZGVJbiwgZXRjLikgdG8gb2NjdXIuXG4gKlxuICogQHBhcmFtIHRlc3RGeCBqYXZhc2NyaXB0IGNvbmRpdGlvbiB0aGF0IGV2YWx1YXRlcyB0byBhIGJvb2xlYW4sXG4gKiBpdCBjYW4gYmUgcGFzc2VkIGluIGFzIGEgc3RyaW5nIChlLmcuOiBcIjEgPT0gMVwiIG9yIFwiJCgnI2JhcicpLmlzKCc6dmlzaWJsZScpXCIgb3JcbiAqIGFzIGEgY2FsbGJhY2sgZnVuY3Rpb24uXG4gKiBAcGFyYW0gb25SZWFkeSB3aGF0IHRvIGRvIHdoZW4gdGVzdEZ4IGNvbmRpdGlvbiBpcyBmdWxmaWxsZWQsXG4gKiBpdCBjYW4gYmUgcGFzc2VkIGluIGFzIGEgc3RyaW5nIChlLmcuOiBcIjEgPT0gMVwiIG9yIFwiJCgnI2JhcicpLmlzKCc6dmlzaWJsZScpXCIgb3JcbiAqIGFzIGEgY2FsbGJhY2sgZnVuY3Rpb24uXG4gKiBAcGFyYW0gdGltZU91dE1pbGxpcyB0aGUgbWF4IGFtb3VudCBvZiB0aW1lIHRvIHdhaXQuIElmIG5vdCBzcGVjaWZpZWQsIDMgc2VjIGlzIHVzZWQuXG4gKi9cbmZ1bmN0aW9uIHdhaXRGb3IodGVzdEZ4LCBvblJlYWR5LCB0aW1lT3V0TWlsbGlzKSB7XG4gIHZhciBtYXh0aW1lT3V0TWlsbGlzID0gdGltZU91dE1pbGxpcyA/IHRpbWVPdXRNaWxsaXMgOiAzMDAwLCAvLzwgRGVmYXVsdCBNYXggVGltb3V0IGlzIDNzXG4gICAgc3RhcnQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSxcbiAgICBjb25kaXRpb24gPSAodHlwZW9mICh0ZXN0RngpID09PSBcInN0cmluZ1wiID8gZXZhbCh0ZXN0RngpIDogdGVzdEZ4KCkpLCAvLzwgZGVmZW5zaXZlIGNvZGVcbiAgICBpbnRlcnZhbCA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICgobmV3IERhdGUoKS5nZXRUaW1lKCkgLSBzdGFydCA8IG1heHRpbWVPdXRNaWxsaXMpICYmICFjb25kaXRpb24pIHtcbiAgICAgICAgLy8gSWYgbm90IHRpbWUtb3V0IHlldCBhbmQgY29uZGl0aW9uIG5vdCB5ZXQgZnVsZmlsbGVkXG4gICAgICAgIGNvbmRpdGlvbiA9ICh0eXBlb2YgKHRlc3RGeCkgPT09IFwic3RyaW5nXCIgPyBldmFsKHRlc3RGeCkgOiB0ZXN0RngoKSk7IC8vPCBkZWZlbnNpdmUgY29kZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKCFjb25kaXRpb24pIHtcbiAgICAgICAgICAvLyBJZiBjb25kaXRpb24gc3RpbGwgbm90IGZ1bGZpbGxlZCAodGltZW91dCBidXQgY29uZGl0aW9uIGlzICdmYWxzZScpXG4gICAgICAgICAgY29uc29sZS5sb2coXCInd2FpdEZvcigpJyB0aW1lb3V0XCIpO1xuICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpOyAvLzwgU3RvcCB0aGlzIGludGVydmFsXG4gICAgICAgICAgdHlwZW9mIChvblJlYWR5KSA9PT0gXCJzdHJpbmdcIiA/IGV2YWwob25SZWFkeSkgOiBvblJlYWR5KCd0aW1lb3V0Jyk7IC8vPCBEbyB3aGF0IGl0J3Mgc3VwcG9zZWQgdG8gZG8gb25jZSB0aGUgY29uZGl0aW9uIGlzIGZ1bGZpbGxlZFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIENvbmRpdGlvbiBmdWxmaWxsZWQgKHRpbWVvdXQgYW5kL29yIGNvbmRpdGlvbiBpcyAndHJ1ZScpXG4gICAgICAgICAgY29uc29sZS5sb2coXCInd2FpdEZvcigpJyBmaW5pc2hlZCBpbiBcIiArIChuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIHN0YXJ0KSArIFwibXMuXCIpO1xuICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpOyAvLzwgU3RvcCB0aGlzIGludGVydmFsXG4gICAgICAgICAgdHlwZW9mIChvblJlYWR5KSA9PT0gXCJzdHJpbmdcIiA/IGV2YWwob25SZWFkeSkgOiBvblJlYWR5KCdzdWNjZXNzJyk7IC8vPCBEbyB3aGF0IGl0J3Mgc3VwcG9zZWQgdG8gZG8gb25jZSB0aGUgY29uZGl0aW9uIGlzIGZ1bGZpbGxlZFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgNTApOyAvLzwgcmVwZWF0IGNoZWNrIGV2ZXJ5IDUwbXNcbn07XG4iLCJ2YXIgVmVjdG9yVGlsZSA9IHJlcXVpcmUoJ3ZlY3Rvci10aWxlJykuVmVjdG9yVGlsZTtcbnZhciBQcm90b2J1ZiA9IHJlcXVpcmUoJ3BiZicpO1xudmFyIFBvaW50ID0gcmVxdWlyZSgncG9pbnQtZ2VvbWV0cnknKTtcbnZhciBVdGlsID0gcmVxdWlyZSgnLi9NVlRVdGlsJyk7XG52YXIgTVZUTGF5ZXIgPSByZXF1aXJlKCcuL01WVExheWVyJyk7XG5cblxubW9kdWxlLmV4cG9ydHMgPSBMLlRpbGVMYXllci5NVlRTb3VyY2UgPSBMLlRpbGVMYXllci5DYW52YXMuZXh0ZW5kKHtcblxuICBvcHRpb25zOiB7XG4gICAgZGVidWc6IGZhbHNlLFxuICAgIHVybDogXCJcIiwgLy9VUkwgVE8gVmVjdG9yIFRpbGUgU291cmNlLFxuICAgIGdldElERm9yTGF5ZXJGZWF0dXJlOiBmdW5jdGlvbigpIHt9LFxuICAgIHRpbGVTaXplOiAyNTYsXG4gICAgdmlzaWJsZUxheWVyczogW11cbiAgfSxcbiAgbGF5ZXJzOiB7fSwgLy9LZWVwIGEgbGlzdCBvZiB0aGUgbGF5ZXJzIGNvbnRhaW5lZCBpbiB0aGUgUEJGc1xuICBwcm9jZXNzZWRUaWxlczoge30sIC8vS2VlcCBhIGxpc3Qgb2YgdGlsZXMgdGhhdCBoYXZlIGJlZW4gcHJvY2Vzc2VkIGFscmVhZHlcbiAgX2V2ZW50SGFuZGxlcnM6IHt9LFxuICBfdHJpZ2dlck9uVGlsZXNMb2FkZWRFdmVudDogdHJ1ZSwgLy93aGV0aGVyIG9yIG5vdCB0byBmaXJlIHRoZSBvblRpbGVzTG9hZGVkIGV2ZW50IHdoZW4gYWxsIG9mIHRoZSB0aWxlcyBmaW5pc2ggbG9hZGluZy5cblxuICBzdHlsZTogZnVuY3Rpb24oZmVhdHVyZSkge1xuICAgIHZhciBzdHlsZSA9IHt9O1xuXG4gICAgdmFyIHR5cGUgPSBmZWF0dXJlLnR5cGU7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlIDE6IC8vJ1BvaW50J1xuICAgICAgICBzdHlsZS5jb2xvciA9ICdyZ2JhKDQ5LDc5LDc5LDEpJztcbiAgICAgICAgc3R5bGUucmFkaXVzID0gNTtcbiAgICAgICAgc3R5bGUuc2VsZWN0ZWQgPSB7XG4gICAgICAgICAgY29sb3I6ICdyZ2JhKDI1NSwyNTUsMCwwLjUpJyxcbiAgICAgICAgICByYWRpdXM6IDZcbiAgICAgICAgfTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDI6IC8vJ0xpbmVTdHJpbmcnXG4gICAgICAgIHN0eWxlLmNvbG9yID0gJ3JnYmEoMTYxLDIxNywxNTUsMC44KSc7XG4gICAgICAgIHN0eWxlLnNpemUgPSAzO1xuICAgICAgICBzdHlsZS5zZWxlY3RlZCA9IHtcbiAgICAgICAgICBjb2xvcjogJ3JnYmEoMjU1LDI1LDAsMC41KScsXG4gICAgICAgICAgc2l6ZTogNFxuICAgICAgICB9O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMzogLy8nUG9seWdvbidcbiAgICAgICAgc3R5bGUuY29sb3IgPSAncmdiYSg0OSw3OSw3OSwxKSc7XG4gICAgICAgIHN0eWxlLm91dGxpbmUgPSB7XG4gICAgICAgICAgY29sb3I6ICdyZ2JhKDE2MSwyMTcsMTU1LDAuOCknLFxuICAgICAgICAgIHNpemU6IDFcbiAgICAgICAgfTtcbiAgICAgICAgc3R5bGUuc2VsZWN0ZWQgPSB7XG4gICAgICAgICAgY29sb3I6ICdyZ2JhKDI1NSwxNDAsMCwwLjMpJyxcbiAgICAgICAgICBvdXRsaW5lOiB7XG4gICAgICAgICAgICBjb2xvcjogJ3JnYmEoMjU1LDE0MCwwLDEpJyxcbiAgICAgICAgICAgIHNpemU6IDJcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICByZXR1cm4gc3R5bGU7XG4gIH0sXG5cblxuICBpbml0aWFsaXplOiBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgTC5VdGlsLnNldE9wdGlvbnModGhpcywgb3B0aW9ucyk7XG5cbiAgICAvL2EgbGlzdCBvZiB0aGUgbGF5ZXJzIGNvbnRhaW5lZCBpbiB0aGUgUEJGc1xuICAgIHRoaXMubGF5ZXJzID0ge307XG5cbiAgICAvLyB0aWxlcyBjdXJyZW50bHkgaW4gdGhlIHZpZXdwb3J0XG4gICAgdGhpcy5hY3RpdmVUaWxlcyA9IHt9O1xuXG4gICAgLy8gdGhhdHMgdGhhdCBoYXZlIGJlZW4gbG9hZGVkIGFuZCBkcmF3blxuICAgIHRoaXMubG9hZGVkVGlsZXMgPSB7fTtcblxuICAgIC8qKlxuICAgICAqIEZvciBzb21lIHJlYXNvbiwgTGVhZmxldCBoYXMgc29tZSBjb2RlIHRoYXQgcmVzZXRzIHRoZVxuICAgICAqIHogaW5kZXggaW4gdGhlIG9wdGlvbnMgb2JqZWN0LiBJJ20gaGF2aW5nIHRyb3VibGUgdHJhY2tpbmdcbiAgICAgKiBkb3duIGV4YWN0bHkgd2hhdCBkb2VzIHRoaXMgYW5kIHdoeSwgc28gZm9yIG5vdywgd2Ugc2hvdWxkXG4gICAgICoganVzdCBjb3B5IHRoZSB2YWx1ZSB0byB0aGlzLnpJbmRleCBzbyB3ZSBjYW4gaGF2ZSB0aGUgcmlnaHRcbiAgICAgKiBudW1iZXIgd2hlbiB3ZSBtYWtlIHRoZSBzdWJzZXF1ZW50IE1WVExheWVycy5cbiAgICAgKi9cbiAgICB0aGlzLnpJbmRleCA9IG9wdGlvbnMuekluZGV4O1xuXG4gICAgaWYgKHR5cGVvZiBvcHRpb25zLnN0eWxlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aGlzLnN0eWxlID0gb3B0aW9ucy5zdHlsZTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIG9wdGlvbnMuYWpheFNvdXJjZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhpcy5hamF4U291cmNlID0gb3B0aW9ucy5hamF4U291cmNlO1xuICAgIH1cblxuICAgIHRoaXMubGF5ZXJMaW5rID0gb3B0aW9ucy5sYXllckxpbms7XG5cbiAgICB0aGlzLl9ldmVudEhhbmRsZXJzID0ge307XG5cbiAgICB0aGlzLl90aWxlc1RvUHJvY2VzcyA9IDA7IC8vc3RvcmUgdGhlIG1heCBudW1iZXIgb2YgdGlsZXMgdG8gYmUgbG9hZGVkLiAgTGF0ZXIsIHdlIGNhbiB1c2UgdGhpcyBjb3VudCB0byBjb3VudCBkb3duIFBCRiBsb2FkaW5nLlxuICB9LFxuXG4gIHJlZHJhdzogZnVuY3Rpb24odHJpZ2dlck9uVGlsZXNMb2FkZWRFdmVudCl7XG4gICAgLy9Pbmx5IHNldCB0byBmYWxzZSBpZiBpdCBhY3R1YWxseSBpcyBwYXNzZWQgaW4gYXMgJ2ZhbHNlJ1xuICAgIGlmICh0cmlnZ2VyT25UaWxlc0xvYWRlZEV2ZW50ID09PSBmYWxzZSkge1xuICAgICAgdGhpcy5fdHJpZ2dlck9uVGlsZXNMb2FkZWRFdmVudCA9IGZhbHNlO1xuICAgIH1cblxuICAgIEwuVGlsZUxheWVyLkNhbnZhcy5wcm90b3R5cGUucmVkcmF3LmNhbGwodGhpcyk7XG4gIH0sXG5cbiAgb25BZGQ6IGZ1bmN0aW9uKG1hcCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICBzZWxmLm1hcCA9IG1hcDtcbiAgICBMLlRpbGVMYXllci5DYW52YXMucHJvdG90eXBlLm9uQWRkLmNhbGwodGhpcywgbWFwKTtcblxuICAgIHZhciBtYXBPbkNsaWNrQ2FsbGJhY2sgPSBmdW5jdGlvbihlKSB7XG4gICAgICBzZWxmLl9vbkNsaWNrKGUpO1xuICAgIH07XG5cbiAgICBtYXAub24oJ2NsaWNrJywgbWFwT25DbGlja0NhbGxiYWNrKTtcblxuICAgIG1hcC5vbihcImxheWVycmVtb3ZlXCIsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIC8vIGNoZWNrIHRvIHNlZSBpZiB0aGUgbGF5ZXIgcmVtb3ZlZCBpcyB0aGlzIG9uZVxuICAgICAgLy8gY2FsbCBhIG1ldGhvZCB0byByZW1vdmUgdGhlIGNoaWxkIGxheWVycyAodGhlIG9uZXMgdGhhdCBhY3R1YWxseSBoYXZlIHNvbWV0aGluZyBkcmF3biBvbiB0aGVtKS5cbiAgICAgIGlmIChlLmxheWVyLl9sZWFmbGV0X2lkID09PSBzZWxmLl9sZWFmbGV0X2lkICYmIGUubGF5ZXIucmVtb3ZlQ2hpbGRMYXllcnMpIHtcbiAgICAgICAgZS5sYXllci5yZW1vdmVDaGlsZExheWVycyhtYXApO1xuICAgICAgICBtYXAub2ZmKCdjbGljaycsIG1hcE9uQ2xpY2tDYWxsYmFjayk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBzZWxmLmFkZENoaWxkTGF5ZXJzKG1hcCk7XG5cbiAgICBpZiAodHlwZW9mIER5bmFtaWNMYWJlbCA9PT0gJ2Z1bmN0aW9uJyApIHtcbiAgICAgIHRoaXMuZHluYW1pY0xhYmVsID0gbmV3IER5bmFtaWNMYWJlbChtYXAsIHRoaXMsIHt9KTtcbiAgICB9XG5cbiAgfSxcblxuICBkcmF3VGlsZTogZnVuY3Rpb24oY2FudmFzLCB0aWxlUG9pbnQsIHpvb20pIHtcbiAgICB2YXIgY3R4ID0ge1xuICAgICAgaWQ6IFt6b29tLCB0aWxlUG9pbnQueCwgdGlsZVBvaW50LnldLmpvaW4oXCI6XCIpLFxuICAgICAgY2FudmFzOiBjYW52YXMsXG4gICAgICB0aWxlOiB0aWxlUG9pbnQsXG4gICAgICB6b29tOiB6b29tLFxuICAgICAgdGlsZVNpemU6IHRoaXMub3B0aW9ucy50aWxlU2l6ZVxuICAgIH07XG5cbiAgICAvL0NhcHR1cmUgdGhlIG1heCBudW1iZXIgb2YgdGhlIHRpbGVzIHRvIGxvYWQgaGVyZS4gdGhpcy5fdGlsZXNUb1Byb2Nlc3MgaXMgYW4gaW50ZXJuYWwgbnVtYmVyIHdlIHVzZSB0byBrbm93IHdoZW4gd2UndmUgZmluaXNoZWQgcmVxdWVzdGluZyBQQkZzLlxuICAgIGlmKHRoaXMuX3RpbGVzVG9Qcm9jZXNzIDwgdGhpcy5fdGlsZXNUb0xvYWQpIHRoaXMuX3RpbGVzVG9Qcm9jZXNzID0gdGhpcy5fdGlsZXNUb0xvYWQ7XG5cbiAgICB2YXIgaWQgPSBjdHguaWQgPSBVdGlsLmdldENvbnRleHRJRChjdHgpO1xuICAgIHRoaXMuYWN0aXZlVGlsZXNbaWRdID0gY3R4O1xuXG4gICAgaWYoIXRoaXMucHJvY2Vzc2VkVGlsZXNbY3R4Lnpvb21dKSB0aGlzLnByb2Nlc3NlZFRpbGVzW2N0eC56b29tXSA9IHt9O1xuXG4gICAgaWYgKHRoaXMub3B0aW9ucy5kZWJ1Zykge1xuICAgICAgdGhpcy5fZHJhd0RlYnVnSW5mbyhjdHgpO1xuICAgIH1cbiAgICB0aGlzLl9kcmF3KGN0eCk7XG4gIH0sXG5cbiAgc2V0T3BhY2l0eTpmdW5jdGlvbihvcGFjaXR5KSB7XG4gICAgdGhpcy5fc2V0VmlzaWJsZUxheWVyc1N0eWxlKCdvcGFjaXR5JyxvcGFjaXR5KTtcbiAgfSxcblxuICBzZXRaSW5kZXg6ZnVuY3Rpb24oekluZGV4KSB7XG4gICAgdGhpcy5fc2V0VmlzaWJsZUxheWVyc1N0eWxlKCd6SW5kZXgnLHpJbmRleCk7XG4gIH0sXG5cbiAgX3NldFZpc2libGVMYXllcnNTdHlsZTpmdW5jdGlvbihzdHlsZSwgdmFsdWUpIHtcbiAgICBmb3IodmFyIGtleSBpbiB0aGlzLmxheWVycykge1xuICAgICAgdGhpcy5sYXllcnNba2V5XS5fdGlsZUNvbnRhaW5lci5zdHlsZVtzdHlsZV0gPSB2YWx1ZTtcbiAgICB9XG4gIH0sXG5cbiAgX2RyYXdEZWJ1Z0luZm86IGZ1bmN0aW9uKGN0eCkge1xuICAgIHZhciBtYXggPSB0aGlzLm9wdGlvbnMudGlsZVNpemU7XG4gICAgdmFyIGcgPSBjdHguY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgZy5zdHJva2VTdHlsZSA9ICcjMDAwMDAwJztcbiAgICBnLmZpbGxTdHlsZSA9ICcjRkZGRjAwJztcbiAgICBnLnN0cm9rZVJlY3QoMCwgMCwgbWF4LCBtYXgpO1xuICAgIGcuZm9udCA9IFwiMTJweCBBcmlhbFwiO1xuICAgIGcuZmlsbFJlY3QoMCwgMCwgNSwgNSk7XG4gICAgZy5maWxsUmVjdCgwLCBtYXggLSA1LCA1LCA1KTtcbiAgICBnLmZpbGxSZWN0KG1heCAtIDUsIDAsIDUsIDUpO1xuICAgIGcuZmlsbFJlY3QobWF4IC0gNSwgbWF4IC0gNSwgNSwgNSk7XG4gICAgZy5maWxsUmVjdChtYXggLyAyIC0gNSwgbWF4IC8gMiAtIDUsIDEwLCAxMCk7XG4gICAgZy5zdHJva2VUZXh0KGN0eC56b29tICsgJyAnICsgY3R4LnRpbGUueCArICcgJyArIGN0eC50aWxlLnksIG1heCAvIDIgLSAzMCwgbWF4IC8gMiAtIDEwKTtcbiAgfSxcblxuICBfZHJhdzogZnVuY3Rpb24oY3R4KSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4vLyAgICAvL1RoaXMgd29ya3MgdG8gc2tpcCBmZXRjaGluZyBhbmQgcHJvY2Vzc2luZyB0aWxlcyBpZiB0aGV5J3ZlIGFscmVhZHkgYmVlbiBwcm9jZXNzZWQuXG4vLyAgICB2YXIgdmVjdG9yVGlsZSA9IGxvYWRlZFRpbGVzW2N0eC5pZF07XG4vLyAgICAvL2lmIHdlJ3ZlIGFscmVhZHkgcGFyc2VkIGl0LCBkb24ndCBnZXQgaXQgYWdhaW4uXG4vLyAgICBpZih2ZWN0b3JUaWxlKXtcbi8vICAgICAgY29uc29sZS5sb2coXCJTa2lwcGluZyBmZXRjaGluZyBcIiArIGN0eC5pZCk7XG4vLyAgICAgIHNlbGYuY2hlY2tWZWN0b3JUaWxlTGF5ZXJzKHBhcnNlVlQodmVjdG9yVGlsZSksIGN0eCwgdHJ1ZSk7XG4vLyAgICAgIHNlbGYucmVkdWNlVGlsZXNUb1Byb2Nlc3NDb3VudCgpO1xuLy8gICAgICByZXR1cm47XG4vLyAgICB9XG5cbiAgICB2YXIgZnVsbFN0YXJ0ID0gbmV3IERhdGUoKTtcblxuICAgIGlmICghdGhpcy5vcHRpb25zLnVybCkgcmV0dXJuO1xuICAgIHZhciB1cmwgPSBzZWxmLm9wdGlvbnMudXJsLnJlcGxhY2UoXCJ7en1cIiwgY3R4Lnpvb20pLnJlcGxhY2UoXCJ7eH1cIiwgY3R4LnRpbGUueCkucmVwbGFjZShcInt5fVwiLCBjdHgudGlsZS55KTtcblxuICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICB4aHIub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoeGhyLnN0YXR1cyA9PSBcIjIwMFwiKSB7XG5cbiAgICAgICAgaWYoIXhoci5yZXNwb25zZSkgcmV0dXJuO1xuXG4gICAgICAgIHZhciBhcnJheUJ1ZmZlciA9IG5ldyBVaW50OEFycmF5KHhoci5yZXNwb25zZSk7XG4gICAgICAgIHZhciBidWYgPSBuZXcgUHJvdG9idWYoYXJyYXlCdWZmZXIpO1xuICAgICAgICB2YXIgdnQgPSBuZXcgVmVjdG9yVGlsZShidWYpO1xuICAgICAgICAvL0NoZWNrIHRoZSBjdXJyZW50IG1hcCBsYXllciB6b29tLiAgSWYgZmFzdCB6b29taW5nIGlzIG9jY3VycmluZywgdGhlbiBzaG9ydCBjaXJjdWl0IHRpbGVzIHRoYXQgYXJlIGZvciBhIGRpZmZlcmVudCB6b29tIGxldmVsIHRoYW4gd2UncmUgY3VycmVudGx5IG9uLlxuICAgICAgICBpZihzZWxmLm1hcCAmJiBzZWxmLm1hcC5nZXRab29tKCkgIT0gY3R4Lnpvb20pIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkZldGNoZWQgdGlsZSBmb3Igem9vbSBsZXZlbCBcIiArIGN0eC56b29tICsgXCIuIE1hcCBpcyBhdCB6b29tIGxldmVsIFwiICsgc2VsZi5fbWFwLmdldFpvb20oKSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHNlbGYuY2hlY2tWZWN0b3JUaWxlTGF5ZXJzKHBhcnNlVlQodnQpLCBjdHgpO1xuICAgICAgICB0aWxlTG9hZGVkKHNlbGYsIGN0eCk7XG4gICAgICB9XG5cbiAgICAgIHZhciBtc0RpZmYgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIG5ldyBEYXRlKGZ1bGxTdGFydCkuZ2V0VGltZSgpOyAvL0RpZmZlcmVuY2UgaW4gbXNcbiAgICAgIC8vY29uc29sZS5sb2coXCJUaW1lciAtIFwiICsgY3R4Lnpvb20gKyBcIi9cIiArIGN0eC50aWxlLnggKyBcIi9cIiArIGN0eC50aWxlLnkgKyBcIjogXCIgKyBtc0RpZmYpO1xuXG4gICAgICAvL2VpdGhlciB3YXksIHJlZHVjZSB0aGUgY291bnQgb2YgdGlsZXNUb1Byb2Nlc3MgdGlsZXMgaGVyZVxuICAgICAgc2VsZi5yZWR1Y2VUaWxlc1RvUHJvY2Vzc0NvdW50KCk7XG4gICAgfTtcblxuICAgIHhoci5vbmVycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgICBjb25zb2xlLmxvZyhcInhociBlcnJvcjogXCIgKyB4aHIuc3RhdHVzKVxuICAgIH07XG5cbiAgICB4aHIub3BlbignR0VUJywgdXJsLCB0cnVlKTsgLy9hc3luYyBpcyB0cnVlXG4gICAgeGhyLnJlc3BvbnNlVHlwZSA9ICdhcnJheWJ1ZmZlcic7XG4gICAgeGhyLnNlbmQoKTtcbiAgfSxcblxuICByZWR1Y2VUaWxlc1RvUHJvY2Vzc0NvdW50OiBmdW5jdGlvbigpe1xuICAgIHRoaXMuX3RpbGVzVG9Qcm9jZXNzLS07XG4gICAgaWYoIXRoaXMuX3RpbGVzVG9Qcm9jZXNzKXtcbiAgICAgIC8vVHJpZ2dlciBldmVudCBsZXR0aW5nIHVzIGtub3cgdGhhdCBhbGwgUEJGcyBoYXZlIGJlZW4gbG9hZGVkIGFuZCBwcm9jZXNzZWQgKG9yIDQwNCdkKS5cbiAgICAgIGlmKHRoaXMuX2V2ZW50SGFuZGxlcnNbXCJQQkZMb2FkXCJdKSB0aGlzLl9ldmVudEhhbmRsZXJzW1wiUEJGTG9hZFwiXSgpO1xuICAgICAgdGhpcy5fcGJmTG9hZGVkKCk7XG4gICAgfVxuICB9LFxuXG4gIGNoZWNrVmVjdG9yVGlsZUxheWVyczogZnVuY3Rpb24odnQsIGN0eCwgcGFyc2VkKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgLy9DaGVjayBpZiB0aGVyZSBhcmUgc3BlY2lmaWVkIHZpc2libGUgbGF5ZXJzXG4gICAgaWYoc2VsZi5vcHRpb25zLnZpc2libGVMYXllcnMgJiYgc2VsZi5vcHRpb25zLnZpc2libGVMYXllcnMubGVuZ3RoID4gMCl7XG4gICAgICAvL29ubHkgbGV0IHRocnUgdGhlIGxheWVycyBsaXN0ZWQgaW4gdGhlIHZpc2libGVMYXllcnMgYXJyYXlcbiAgICAgIGZvcih2YXIgaT0wOyBpIDwgc2VsZi5vcHRpb25zLnZpc2libGVMYXllcnMubGVuZ3RoOyBpKyspe1xuICAgICAgICB2YXIgbGF5ZXJOYW1lID0gc2VsZi5vcHRpb25zLnZpc2libGVMYXllcnNbaV07XG4gICAgICAgIGlmKHZ0LmxheWVyc1tsYXllck5hbWVdKXtcbiAgICAgICAgICAgLy9Qcm9jZWVkIHdpdGggcGFyc2luZ1xuICAgICAgICAgIHNlbGYucHJlcGFyZU1WVExheWVycyh2dC5sYXllcnNbbGF5ZXJOYW1lXSwgbGF5ZXJOYW1lLCBjdHgsIHBhcnNlZCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9ZWxzZXtcbiAgICAgIC8vUGFyc2UgYWxsIHZ0LmxheWVyc1xuICAgICAgZm9yICh2YXIga2V5IGluIHZ0LmxheWVycykge1xuICAgICAgICBzZWxmLnByZXBhcmVNVlRMYXllcnModnQubGF5ZXJzW2tleV0sIGtleSwgY3R4LCBwYXJzZWQpO1xuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICBwcmVwYXJlTVZUTGF5ZXJzOiBmdW5jdGlvbihseXIgLGtleSwgY3R4LCBwYXJzZWQpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICBpZiAoIXNlbGYubGF5ZXJzW2tleV0pIHtcbiAgICAgIC8vQ3JlYXRlIE1WVExheWVyIG9yIE1WVFBvaW50TGF5ZXIgZm9yIHVzZXJcbiAgICAgIHNlbGYubGF5ZXJzW2tleV0gPSBzZWxmLmNyZWF0ZU1WVExheWVyKGtleSwgbHlyLnBhcnNlZEZlYXR1cmVzWzBdLnR5cGUgfHwgbnVsbCk7XG4gICAgfVxuXG4gICAgaWYgKHBhcnNlZCkge1xuICAgICAgLy9XZSd2ZSBhbHJlYWR5IHBhcnNlZCBpdC4gIEdvIGdldCBjYW52YXMgYW5kIGRyYXcuXG4gICAgICBzZWxmLmxheWVyc1trZXldLmdldENhbnZhcyhjdHgsIGx5cik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNlbGYubGF5ZXJzW2tleV0ucGFyc2VWZWN0b3JUaWxlTGF5ZXIobHlyLCBjdHgpO1xuICAgIH1cblxuICB9LFxuXG4gIGNyZWF0ZU1WVExheWVyOiBmdW5jdGlvbihrZXksIHR5cGUpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICB2YXIgZ2V0SURGb3JMYXllckZlYXR1cmU7XG4gICAgaWYgKHR5cGVvZiBzZWxmLm9wdGlvbnMuZ2V0SURGb3JMYXllckZlYXR1cmUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGdldElERm9yTGF5ZXJGZWF0dXJlID0gc2VsZi5vcHRpb25zLmdldElERm9yTGF5ZXJGZWF0dXJlO1xuICAgIH0gZWxzZSB7XG4gICAgICBnZXRJREZvckxheWVyRmVhdHVyZSA9IFV0aWwuZ2V0SURGb3JMYXllckZlYXR1cmU7XG4gICAgfVxuXG4gICAgdmFyIG9wdGlvbnMgPSB7XG4gICAgICBnZXRJREZvckxheWVyRmVhdHVyZTogZ2V0SURGb3JMYXllckZlYXR1cmUsXG4gICAgICBmaWx0ZXI6IHNlbGYub3B0aW9ucy5maWx0ZXIsXG4gICAgICBsYXllck9yZGVyaW5nOiBzZWxmLm9wdGlvbnMubGF5ZXJPcmRlcmluZyxcbiAgICAgIHN0eWxlOiBzZWxmLnN0eWxlLFxuICAgICAgbmFtZToga2V5LFxuICAgICAgYXN5bmNoOiB0cnVlXG4gICAgfTtcblxuICAgIGlmIChzZWxmLm9wdGlvbnMuekluZGV4KSB7XG4gICAgICBvcHRpb25zLnpJbmRleCA9IHNlbGYuekluZGV4O1xuICAgIH1cblxuICAgIC8vVGFrZSB0aGUgbGF5ZXIgYW5kIGNyZWF0ZSBhIG5ldyBNVlRMYXllciBvciBNVlRQb2ludExheWVyIGlmIG9uZSBkb2Vzbid0IGV4aXN0LlxuICAgIHZhciBsYXllciA9IG5ldyBNVlRMYXllcihzZWxmLCBvcHRpb25zKS5hZGRUbyhzZWxmLm1hcCk7XG5cbiAgICByZXR1cm4gbGF5ZXI7XG4gIH0sXG5cbiAgZ2V0TGF5ZXJzOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5sYXllcnM7XG4gIH0sXG5cbiAgaGlkZUxheWVyOiBmdW5jdGlvbihpZCkge1xuICAgIGlmICh0aGlzLmxheWVyc1tpZF0pIHtcbiAgICAgIHRoaXMuX21hcC5yZW1vdmVMYXllcih0aGlzLmxheWVyc1tpZF0pO1xuICAgICAgaWYodGhpcy5vcHRpb25zLnZpc2libGVMYXllcnMuaW5kZXhPZihcImlkXCIpID4gLTEpe1xuICAgICAgICB0aGlzLnZpc2libGVMYXllcnMuc3BsaWNlKHRoaXMub3B0aW9ucy52aXNpYmxlTGF5ZXJzLmluZGV4T2YoXCJpZFwiKSwgMSk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIHNob3dMYXllcjogZnVuY3Rpb24oaWQpIHtcbiAgICBpZiAodGhpcy5sYXllcnNbaWRdKSB7XG4gICAgICB0aGlzLl9tYXAuYWRkTGF5ZXIodGhpcy5sYXllcnNbaWRdKTtcbiAgICAgIGlmKHRoaXMub3B0aW9ucy52aXNpYmxlTGF5ZXJzLmluZGV4T2YoXCJpZFwiKSA9PSAtMSl7XG4gICAgICAgIHRoaXMudmlzaWJsZUxheWVycy5wdXNoKGlkKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy9NYWtlIHN1cmUgbWFuYWdlciBsYXllciBpcyBhbHdheXMgaW4gZnJvbnRcbiAgICB0aGlzLmJyaW5nVG9Gcm9udCgpO1xuICB9LFxuXG4gIHJlbW92ZUNoaWxkTGF5ZXJzOiBmdW5jdGlvbihtYXApe1xuICAgIC8vUmVtb3ZlIGNoaWxkIGxheWVycyBvZiB0aGlzIGdyb3VwIGxheWVyXG4gICAgZm9yICh2YXIga2V5IGluIHRoaXMubGF5ZXJzKSB7XG4gICAgICB2YXIgbGF5ZXIgPSB0aGlzLmxheWVyc1trZXldO1xuICAgICAgbWFwLnJlbW92ZUxheWVyKGxheWVyKTtcbiAgICB9XG4gIH0sXG5cbiAgYWRkQ2hpbGRMYXllcnM6IGZ1bmN0aW9uKG1hcCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICBpZihzZWxmLm9wdGlvbnMudmlzaWJsZUxheWVycy5sZW5ndGggPiAwKXtcbiAgICAgIC8vb25seSBsZXQgdGhydSB0aGUgbGF5ZXJzIGxpc3RlZCBpbiB0aGUgdmlzaWJsZUxheWVycyBhcnJheVxuICAgICAgZm9yKHZhciBpPTA7IGkgPCBzZWxmLm9wdGlvbnMudmlzaWJsZUxheWVycy5sZW5ndGg7IGkrKyl7XG4gICAgICAgIHZhciBsYXllck5hbWUgPSBzZWxmLm9wdGlvbnMudmlzaWJsZUxheWVyc1tpXTtcbiAgICAgICAgdmFyIGxheWVyID0gdGhpcy5sYXllcnNbbGF5ZXJOYW1lXTtcbiAgICAgICAgaWYobGF5ZXIpe1xuICAgICAgICAgIC8vUHJvY2VlZCB3aXRoIHBhcnNpbmdcbiAgICAgICAgICBtYXAuYWRkTGF5ZXIobGF5ZXIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfWVsc2V7XG4gICAgICAvL0FkZCBhbGwgbGF5ZXJzXG4gICAgICBmb3IgKHZhciBrZXkgaW4gdGhpcy5sYXllcnMpIHtcbiAgICAgICAgdmFyIGxheWVyID0gdGhpcy5sYXllcnNba2V5XTtcbiAgICAgICAgLy8gbGF5ZXIgaXMgc2V0IHRvIHZpc2libGUgYW5kIGlzIG5vdCBhbHJlYWR5IG9uIG1hcFxuICAgICAgICBpZiAoIWxheWVyLl9tYXApIHtcbiAgICAgICAgICBtYXAuYWRkTGF5ZXIobGF5ZXIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIGJpbmQ6IGZ1bmN0aW9uKGV2ZW50VHlwZSwgY2FsbGJhY2spIHtcbiAgICB0aGlzLl9ldmVudEhhbmRsZXJzW2V2ZW50VHlwZV0gPSBjYWxsYmFjaztcbiAgfSxcblxuICBfb25DbGljazogZnVuY3Rpb24oZXZ0KSB7XG4gICAgLy9IZXJlLCBwYXNzIHRoZSBldmVudCBvbiB0byB0aGUgY2hpbGQgTVZUTGF5ZXIgYW5kIGhhdmUgaXQgZG8gdGhlIGhpdCB0ZXN0IGFuZCBoYW5kbGUgdGhlIHJlc3VsdC5cbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdmFyIG9uQ2xpY2sgPSBzZWxmLm9wdGlvbnMub25DbGljaztcbiAgICB2YXIgY2xpY2thYmxlTGF5ZXJzID0gc2VsZi5vcHRpb25zLmNsaWNrYWJsZUxheWVycztcbiAgICB2YXIgbGF5ZXJzID0gc2VsZi5sYXllcnM7XG5cbiAgICBldnQudGlsZUlEID0gIGdldFRpbGVVUkwoZXZ0LmxhdGxuZy5sYXQsIGV2dC5sYXRsbmcubG5nLCB0aGlzLm1hcC5nZXRab29tKCkpO1xuXG4gICAgLy8gV2UgbXVzdCBoYXZlIGFuIGFycmF5IG9mIGNsaWNrYWJsZSBsYXllcnMsIG90aGVyd2lzZSwgd2UganVzdCBwYXNzXG4gICAgLy8gdGhlIGV2ZW50IHRvIHRoZSBwdWJsaWMgb25DbGljayBjYWxsYmFjayBpbiBvcHRpb25zLlxuXG4gICAgaWYoIWNsaWNrYWJsZUxheWVycyl7XG4gICAgICBjbGlja2FibGVMYXllcnMgPSBPYmplY3Qua2V5cyhzZWxmLmxheWVycyk7XG4gICAgfVxuXG4gICAgaWYgKGNsaWNrYWJsZUxheWVycyAmJiBjbGlja2FibGVMYXllcnMubGVuZ3RoID4gMCkge1xuICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGNsaWNrYWJsZUxheWVycy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICB2YXIga2V5ID0gY2xpY2thYmxlTGF5ZXJzW2ldO1xuICAgICAgICB2YXIgbGF5ZXIgPSBsYXllcnNba2V5XTtcbiAgICAgICAgaWYgKGxheWVyKSB7XG4gICAgICAgICAgbGF5ZXIuaGFuZGxlQ2xpY2tFdmVudChldnQsIGZ1bmN0aW9uKGV2dCkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBvbkNsaWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgIG9uQ2xpY2soZXZ0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodHlwZW9mIG9uQ2xpY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgb25DbGljayhldnQpO1xuICAgICAgfVxuICAgIH1cblxuICB9LFxuXG4gIHNldEZpbHRlcjogZnVuY3Rpb24oZmlsdGVyRnVuY3Rpb24sIGxheWVyTmFtZSkge1xuICAgIC8vdGFrZSBpbiBhIG5ldyBmaWx0ZXIgZnVuY3Rpb24uXG4gICAgLy9Qcm9wYWdhdGUgdG8gY2hpbGQgbGF5ZXJzLlxuXG4gICAgLy9BZGQgZmlsdGVyIHRvIGFsbCBjaGlsZCBsYXllcnMgaWYgbm8gbGF5ZXIgaXMgc3BlY2lmaWVkLlxuICAgIGZvciAodmFyIGtleSBpbiB0aGlzLmxheWVycykge1xuICAgICAgdmFyIGxheWVyID0gdGhpcy5sYXllcnNba2V5XTtcblxuICAgICAgaWYgKGxheWVyTmFtZSl7XG4gICAgICAgIGlmKGtleS50b0xvd2VyQ2FzZSgpID09IGxheWVyTmFtZS50b0xvd2VyQ2FzZSgpKXtcbiAgICAgICAgICBsYXllci5vcHRpb25zLmZpbHRlciA9IGZpbHRlckZ1bmN0aW9uOyAvL0Fzc2lnbiBmaWx0ZXIgdG8gY2hpbGQgbGF5ZXIsIG9ubHkgaWYgbmFtZSBtYXRjaGVzXG4gICAgICAgICAgLy9BZnRlciBmaWx0ZXIgaXMgc2V0LCB0aGUgb2xkIGZlYXR1cmUgaGFzaGVzIGFyZSBpbnZhbGlkLiAgQ2xlYXIgdGhlbSBmb3IgbmV4dCBkcmF3LlxuICAgICAgICAgIGxheWVyLmNsZWFyTGF5ZXJGZWF0dXJlSGFzaCgpO1xuICAgICAgICAgIC8vbGF5ZXIuY2xlYXJUaWxlRmVhdHVyZUhhc2goKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZXtcbiAgICAgICAgbGF5ZXIub3B0aW9ucy5maWx0ZXIgPSBmaWx0ZXJGdW5jdGlvbjsgLy9Bc3NpZ24gZmlsdGVyIHRvIGNoaWxkIGxheWVyXG4gICAgICAgIC8vQWZ0ZXIgZmlsdGVyIGlzIHNldCwgdGhlIG9sZCBmZWF0dXJlIGhhc2hlcyBhcmUgaW52YWxpZC4gIENsZWFyIHRoZW0gZm9yIG5leHQgZHJhdy5cbiAgICAgICAgbGF5ZXIuY2xlYXJMYXllckZlYXR1cmVIYXNoKCk7XG4gICAgICAgIC8vbGF5ZXIuY2xlYXJUaWxlRmVhdHVyZUhhc2goKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIFRha2UgaW4gYSBuZXcgc3R5bGUgZnVuY3Rpb24gYW5kIHByb3BvZ2F0ZSB0byBjaGlsZCBsYXllcnMuXG4gICAqIElmIHlvdSBkbyBub3Qgc2V0IGEgbGF5ZXIgbmFtZSwgaXQgcmVzZXRzIHRoZSBzdHlsZSBmb3IgYWxsIG9mIHRoZSBsYXllcnMuXG4gICAqIEBwYXJhbSBzdHlsZUZ1bmN0aW9uXG4gICAqIEBwYXJhbSBsYXllck5hbWVcbiAgICovXG4gIHNldFN0eWxlOiBmdW5jdGlvbihzdHlsZUZuLCBsYXllck5hbWUpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gdGhpcy5sYXllcnMpIHtcbiAgICAgIHZhciBsYXllciA9IHRoaXMubGF5ZXJzW2tleV07XG4gICAgICBpZiAobGF5ZXJOYW1lKSB7XG4gICAgICAgIGlmKGtleS50b0xvd2VyQ2FzZSgpID09IGxheWVyTmFtZS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICAgICAgbGF5ZXIuc2V0U3R5bGUoc3R5bGVGbik7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxheWVyLnNldFN0eWxlKHN0eWxlRm4pO1xuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICBmZWF0dXJlU2VsZWN0ZWQ6IGZ1bmN0aW9uKG12dEZlYXR1cmUpIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLm11dGV4VG9nZ2xlKSB7XG4gICAgICBpZiAodGhpcy5fc2VsZWN0ZWRGZWF0dXJlKSB7XG4gICAgICAgIHRoaXMuX3NlbGVjdGVkRmVhdHVyZS5kZXNlbGVjdCgpO1xuICAgICAgfVxuICAgICAgdGhpcy5fc2VsZWN0ZWRGZWF0dXJlID0gbXZ0RmVhdHVyZTtcbiAgICB9XG4gICAgaWYgKHRoaXMub3B0aW9ucy5vblNlbGVjdCkge1xuICAgICAgdGhpcy5vcHRpb25zLm9uU2VsZWN0KG12dEZlYXR1cmUpO1xuICAgIH1cbiAgfSxcblxuICBmZWF0dXJlRGVzZWxlY3RlZDogZnVuY3Rpb24obXZ0RmVhdHVyZSkge1xuICAgIGlmICh0aGlzLm9wdGlvbnMubXV0ZXhUb2dnbGUgJiYgdGhpcy5fc2VsZWN0ZWRGZWF0dXJlKSB7XG4gICAgICB0aGlzLl9zZWxlY3RlZEZlYXR1cmUgPSBudWxsO1xuICAgIH1cbiAgICBpZiAodGhpcy5vcHRpb25zLm9uRGVzZWxlY3QpIHtcbiAgICAgIHRoaXMub3B0aW9ucy5vbkRlc2VsZWN0KG12dEZlYXR1cmUpO1xuICAgIH1cbiAgfSxcblxuICBfcGJmTG9hZGVkOiBmdW5jdGlvbigpIHtcbiAgICAvL0ZpcmVzIHdoZW4gYWxsIHRpbGVzIGZyb20gdGhpcyBsYXllciBoYXZlIGJlZW4gbG9hZGVkIGFuZCBkcmF3biAob3IgNDA0J2QpLlxuXG4gICAgLy9NYWtlIHN1cmUgbWFuYWdlciBsYXllciBpcyBhbHdheXMgaW4gZnJvbnRcbiAgICB0aGlzLmJyaW5nVG9Gcm9udCgpO1xuXG4gICAgLy9TZWUgaWYgdGhlcmUgaXMgYW4gZXZlbnQgdG8gZXhlY3V0ZVxuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB2YXIgb25UaWxlc0xvYWRlZCA9IHNlbGYub3B0aW9ucy5vblRpbGVzTG9hZGVkO1xuXG4gICAgaWYgKG9uVGlsZXNMb2FkZWQgJiYgdHlwZW9mIG9uVGlsZXNMb2FkZWQgPT09ICdmdW5jdGlvbicgJiYgdGhpcy5fdHJpZ2dlck9uVGlsZXNMb2FkZWRFdmVudCA9PT0gdHJ1ZSkge1xuICAgICAgb25UaWxlc0xvYWRlZCh0aGlzKTtcbiAgICB9XG4gICAgc2VsZi5fdHJpZ2dlck9uVGlsZXNMb2FkZWRFdmVudCA9IHRydWU7IC8vcmVzZXQgLSBpZiByZWRyYXcoKSBpcyBjYWxsZWQgd2l0aCB0aGUgb3B0aW5hbCAnZmFsc2UnIHBhcmFtZXRlciB0byB0ZW1wb3JhcmlseSBkaXNhYmxlIHRoZSBvblRpbGVzTG9hZGVkIGV2ZW50IGZyb20gZmlyaW5nLiAgVGhpcyByZXNldHMgaXQgYmFjayB0byB0cnVlIGFmdGVyIGEgc2luZ2xlIHRpbWUgb2YgZmlyaW5nIGFzICdmYWxzZScuXG4gIH1cblxufSk7XG5cblxuaWYgKHR5cGVvZihOdW1iZXIucHJvdG90eXBlLnRvUmFkKSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICBOdW1iZXIucHJvdG90eXBlLnRvUmFkID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMgKiBNYXRoLlBJIC8gMTgwO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldFRpbGVVUkwobGF0LCBsb24sIHpvb20pIHtcbiAgdmFyIHh0aWxlID0gcGFyc2VJbnQoTWF0aC5mbG9vciggKGxvbiArIDE4MCkgLyAzNjAgKiAoMTw8em9vbSkgKSk7XG4gIHZhciB5dGlsZSA9IHBhcnNlSW50KE1hdGguZmxvb3IoICgxIC0gTWF0aC5sb2coTWF0aC50YW4obGF0LnRvUmFkKCkpICsgMSAvIE1hdGguY29zKGxhdC50b1JhZCgpKSkgLyBNYXRoLlBJKSAvIDIgKiAoMTw8em9vbSkgKSk7XG4gIHJldHVybiBcIlwiICsgem9vbSArIFwiOlwiICsgeHRpbGUgKyBcIjpcIiArIHl0aWxlO1xufVxuXG5mdW5jdGlvbiB0aWxlTG9hZGVkKHBiZlNvdXJjZSwgY3R4KSB7XG4gIHBiZlNvdXJjZS5sb2FkZWRUaWxlc1tjdHguaWRdID0gY3R4O1xufVxuXG5mdW5jdGlvbiBwYXJzZVZUKHZ0KXtcbiAgZm9yICh2YXIga2V5IGluIHZ0LmxheWVycykge1xuICAgIHZhciBseXIgPSB2dC5sYXllcnNba2V5XTtcbiAgICBwYXJzZVZURmVhdHVyZXMobHlyKTtcbiAgfVxuICByZXR1cm4gdnQ7XG59XG5cbmZ1bmN0aW9uIHBhcnNlVlRGZWF0dXJlcyh2dGwpe1xuICB2dGwucGFyc2VkRmVhdHVyZXMgPSBbXTtcbiAgdmFyIGZlYXR1cmVzID0gdnRsLl9mZWF0dXJlcztcbiAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGZlYXR1cmVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgdmFyIHZ0ZiA9IHZ0bC5mZWF0dXJlKGkpO1xuICAgIHZ0Zi5jb29yZGluYXRlcyA9IHZ0Zi5sb2FkR2VvbWV0cnkoKTtcbiAgICB2dGwucGFyc2VkRmVhdHVyZXMucHVzaCh2dGYpO1xuICB9XG4gIHJldHVybiB2dGw7XG59XG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgTmljaG9sYXMgSGFsbGFoYW4gPG5oYWxsYWhhbkBzcGF0aWFsZGV2LmNvbT5cbiAqICAgICAgIG9uIDgvMTUvMTQuXG4gKi9cbnZhciBVdGlsID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuVXRpbC5nZXRDb250ZXh0SUQgPSBmdW5jdGlvbihjdHgpIHtcbiAgcmV0dXJuIFtjdHguem9vbSwgY3R4LnRpbGUueCwgY3R4LnRpbGUueV0uam9pbihcIjpcIik7XG59O1xuXG4vKipcbiAqIERlZmF1bHQgZnVuY3Rpb24gdGhhdCBnZXRzIHRoZSBpZCBmb3IgYSBsYXllciBmZWF0dXJlLlxuICogU29tZXRpbWVzIHRoaXMgbmVlZHMgdG8gYmUgZG9uZSBpbiBhIGRpZmZlcmVudCB3YXkgYW5kXG4gKiBjYW4gYmUgc3BlY2lmaWVkIGJ5IHRoZSB1c2VyIGluIHRoZSBvcHRpb25zIGZvciBMLlRpbGVMYXllci5NVlRTb3VyY2UuXG4gKlxuICogQHBhcmFtIGZlYXR1cmVcbiAqIEByZXR1cm5zIHtjdHguaWR8KnxpZHxzdHJpbmd8anN0cy5pbmRleC5jaGFpbi5Nb25vdG9uZUNoYWluLmlkfG51bWJlcn1cbiAqL1xuVXRpbC5nZXRJREZvckxheWVyRmVhdHVyZSA9IGZ1bmN0aW9uKGZlYXR1cmUpIHtcbiAgcmV0dXJuIGZlYXR1cmUucHJvcGVydGllcy5pZDtcbn07XG5cblV0aWwuZ2V0SlNPTiA9IGZ1bmN0aW9uKHVybCwgY2FsbGJhY2spIHtcbiAgdmFyIHhtbGh0dHAgPSB0eXBlb2YgWE1MSHR0cFJlcXVlc3QgIT09ICd1bmRlZmluZWQnID8gbmV3IFhNTEh0dHBSZXF1ZXN0KCkgOiBuZXcgQWN0aXZlWE9iamVjdCgnTWljcm9zb2Z0LlhNTEhUVFAnKTtcbiAgeG1saHR0cC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgc3RhdHVzID0geG1saHR0cC5zdGF0dXM7XG4gICAgaWYgKHhtbGh0dHAucmVhZHlTdGF0ZSA9PT0gNCAmJiBzdGF0dXMgPj0gMjAwICYmIHN0YXR1cyA8IDMwMCkge1xuICAgICAgdmFyIGpzb24gPSBKU09OLnBhcnNlKHhtbGh0dHAucmVzcG9uc2VUZXh0KTtcbiAgICAgIGNhbGxiYWNrKG51bGwsIGpzb24pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjYWxsYmFjayggeyBlcnJvcjogdHJ1ZSwgc3RhdHVzOiBzdGF0dXMgfSApO1xuICAgIH1cbiAgfTtcbiAgeG1saHR0cC5vcGVuKFwiR0VUXCIsIHVybCwgdHJ1ZSk7XG4gIHhtbGh0dHAuc2VuZCgpO1xufTtcbiIsIi8qKlxuICogQ3JlYXRlZCBieSBOaWNob2xhcyBIYWxsYWhhbiA8bmhhbGxhaGFuQHNwYXRpYWxkZXYuY29tPlxuICogICAgICAgb24gNy8zMS8xNC5cbiAqL1xudmFyIFV0aWwgPSByZXF1aXJlKCcuLi9NVlRVdGlsJyk7XG5tb2R1bGUuZXhwb3J0cyA9IFN0YXRpY0xhYmVsO1xuXG5mdW5jdGlvbiBTdGF0aWNMYWJlbChtdnRGZWF0dXJlLCBjdHgsIGxhdExuZywgc3R5bGUpIHtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICB0aGlzLm12dEZlYXR1cmUgPSBtdnRGZWF0dXJlO1xuICB0aGlzLm1hcCA9IG12dEZlYXR1cmUubWFwO1xuICB0aGlzLnpvb20gPSBjdHguem9vbTtcbiAgdGhpcy5sYXRMbmcgPSBsYXRMbmc7XG4gIHRoaXMuc2VsZWN0ZWQgPSBmYWxzZTtcblxuICBpZiAobXZ0RmVhdHVyZS5saW5rZWRGZWF0dXJlKSB7XG4gICAgdmFyIGxpbmtlZEZlYXR1cmUgPSBtdnRGZWF0dXJlLmxpbmtlZEZlYXR1cmUoKTtcbiAgICBpZiAobGlua2VkRmVhdHVyZSAmJiBsaW5rZWRGZWF0dXJlLnNlbGVjdGVkKSB7XG4gICAgICBzZWxmLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBpbml0KHNlbGYsIG12dEZlYXR1cmUsIGN0eCwgbGF0TG5nLCBzdHlsZSlcbn1cblxuZnVuY3Rpb24gaW5pdChzZWxmLCBtdnRGZWF0dXJlLCBjdHgsIGxhdExuZywgc3R5bGUpIHtcbiAgdmFyIGFqYXhEYXRhID0gbXZ0RmVhdHVyZS5hamF4RGF0YTtcbiAgdmFyIHN0eSA9IHNlbGYuc3R5bGUgPSBzdHlsZS5zdGF0aWNMYWJlbChtdnRGZWF0dXJlLCBhamF4RGF0YSk7XG4gIHZhciBpY29uID0gc2VsZi5pY29uID0gTC5kaXZJY29uKHtcbiAgICBjbGFzc05hbWU6IHN0eS5jc3NDbGFzcyB8fCAnbGFiZWwtaWNvbi10ZXh0JyxcbiAgICBodG1sOiBzdHkuaHRtbCxcbiAgICBpY29uU2l6ZTogc3R5Lmljb25TaXplIHx8IFs1MCw1MF1cbiAgfSk7XG5cbiAgc2VsZi5tYXJrZXIgPSBMLm1hcmtlcihsYXRMbmcsIHtpY29uOiBpY29ufSkuYWRkVG8oc2VsZi5tYXApO1xuXG4gIGlmIChzZWxmLnNlbGVjdGVkKSB7XG4gICAgc2VsZi5tYXJrZXIuX2ljb24uY2xhc3NMaXN0LmFkZChzZWxmLnN0eWxlLmNzc1NlbGVjdGVkQ2xhc3MgfHwgJ2xhYmVsLWljb24tdGV4dC1zZWxlY3RlZCcpO1xuICB9XG5cbiAgc2VsZi5tYXJrZXIub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIHNlbGYudG9nZ2xlKCk7XG4gIH0pO1xuXG4gIHNlbGYubWFwLm9uKCd6b29tZW5kJywgZnVuY3Rpb24oZSkge1xuICAgIHZhciBuZXdab29tID0gZS50YXJnZXQuZ2V0Wm9vbSgpO1xuICAgIGlmIChzZWxmLnpvb20gIT09IG5ld1pvb20pIHtcbiAgICAgIHNlbGYubWFwLnJlbW92ZUxheWVyKHNlbGYubWFya2VyKTtcbiAgICB9XG4gIH0pO1xufVxuXG5cblN0YXRpY0xhYmVsLnByb3RvdHlwZS50b2dnbGUgPSBmdW5jdGlvbigpIHtcbiAgaWYgKHRoaXMuc2VsZWN0ZWQpIHtcbiAgICB0aGlzLmRlc2VsZWN0KCk7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5zZWxlY3QoKTtcbiAgfVxufTtcblxuU3RhdGljTGFiZWwucHJvdG90eXBlLnNlbGVjdCA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLnNlbGVjdGVkID0gdHJ1ZTtcbiAgdGhpcy5tYXJrZXIuX2ljb24uY2xhc3NMaXN0LmFkZCh0aGlzLnN0eWxlLmNzc1NlbGVjdGVkQ2xhc3MgfHwgJ2xhYmVsLWljb24tdGV4dC1zZWxlY3RlZCcpO1xuICB2YXIgbGlua2VkRmVhdHVyZSA9IHRoaXMubXZ0RmVhdHVyZS5saW5rZWRGZWF0dXJlKCk7XG4gIGlmICghbGlua2VkRmVhdHVyZS5zZWxlY3RlZCkgbGlua2VkRmVhdHVyZS5zZWxlY3QoKTtcbn07XG5cblN0YXRpY0xhYmVsLnByb3RvdHlwZS5kZXNlbGVjdCA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLnNlbGVjdGVkID0gZmFsc2U7XG4gIHRoaXMubWFya2VyLl9pY29uLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5zdHlsZS5jc3NTZWxlY3RlZENsYXNzIHx8ICdsYWJlbC1pY29uLXRleHQtc2VsZWN0ZWQnKTtcbiAgdmFyIGxpbmtlZEZlYXR1cmUgPSB0aGlzLm12dEZlYXR1cmUubGlua2VkRmVhdHVyZSgpO1xuICBpZiAobGlua2VkRmVhdHVyZS5zZWxlY3RlZCkgbGlua2VkRmVhdHVyZS5kZXNlbGVjdCgpO1xufTtcblxuU3RhdGljTGFiZWwucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uKCkge1xuICBpZiAoIXRoaXMubWFwIHx8ICF0aGlzLm1hcmtlcikgcmV0dXJuO1xuICB0aGlzLm1hcC5yZW1vdmVMYXllcih0aGlzLm1hcmtlcik7XG59O1xuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IE5pY2hvbGFzIEhhbGxhaGFuIDxuaGFsbGFoYW5Ac3BhdGlhbGRldi5jb20+XG4gKiAgICAgICBvbiA0LzcvMTQuXG4gKi9cblxudmFyIGZlYXR1cmVsYWJlbCA9IHJlcXVpcmUoJy4vZmVhdHVyZWxhYmVsJyk7XG52YXIgZmVhdHVyZVNldHMgPSBmZWF0dXJlbGFiZWwuZmVhdHVyZVNldHM7XG52YXIgTGFiZWwgPSByZXF1aXJlKCcuL0xhYmVsLmpzJyk7XG5cblxuZnVuY3Rpb24gRmVhdHVyZVNldCgpIHtcbiAgdGhpcy5mZWF0dXJlcyA9IFtdO1xuICB0aGlzLl9wYXRoSWRIYXNoID0ge307XG4gIGZlYXR1cmVTZXRzLnB1c2godGhpcyk7XG4gIHRoaXMuc2VsZWN0ZWRGZWF0dXJlTGF5ZXIgPSBudWxsO1xuICB0aGlzLnNlbGVjdGVkSWNvbiA9IG51bGw7XG59XG5tb2R1bGUuZXhwb3J0cyA9IEZlYXR1cmVTZXQ7XG5cblxuRmVhdHVyZVNldC5wcm90b3R5cGUuYWRkRmVhdHVyZSA9IGZ1bmN0aW9uIChmZWF0dXJlTGF5ZXIsIGdlb2pzb25MYXllcikge1xuICBmZWF0dXJlTGF5ZXIuZ2VvanNvbkxheWVyID0gZ2VvanNvbkxheWVyO1xuICBpZiAoIWZlYXR1cmVMYXllci5fbGVhZmxldF9pZCkge1xuICAgIEwuc3RhbXAoZmVhdHVyZUxheWVyKTtcbiAgfVxuICB0aGlzLmZlYXR1cmVzLnB1c2goZmVhdHVyZUxheWVyKTtcblxuICAvLyBmZWF0dXJlIGNvbnNpc3RzIG9mIG9uZSBwb2x5Z29uXG4gIGlmICghZmVhdHVyZUxheWVyLl9sYXllcnMpIHtcbiAgICB2YXIgbGVhZmxldElkID0gZmVhdHVyZUxheWVyLl9sZWFmbGV0X2lkO1xuICAgIHRoaXMuX3BhdGhJZEhhc2hbbGVhZmxldElkXSA9IGZlYXR1cmVMYXllcjtcbiAgfVxuXG4gIC8vIGZlYXR1cmUgY29uc2lzdHMgb2Ygc2V2ZXJhbCBwb2x5Z29uc1xuICBlbHNlIHtcbiAgICBmb3IgKHZhciBpZCBpbiBmZWF0dXJlTGF5ZXIuX2xheWVycykge1xuICAgICAgdmFyIHBhdGhMYXllciA9IGZlYXR1cmVMYXllci5fbGF5ZXJzW2lkXTtcbiAgICAgIHZhciBsZWFmbGV0SWQgPSBwYXRoTGF5ZXIuX2xlYWZsZXRfaWQ7XG4gICAgICB0aGlzLl9wYXRoSWRIYXNoW2xlYWZsZXRJZF0gPSBmZWF0dXJlTGF5ZXI7XG4gICAgfVxuICB9XG5cbn07XG5cblxuRmVhdHVyZVNldC5wcm90b3R5cGUuX3BhdGhVcGRhdGVkID0gZnVuY3Rpb24gKGxlYWZsZXRJZCkge1xuICB2YXIgZmVhdHVyZUxheWVyID0gdGhpcy5fcGF0aElkSGFzaFtsZWFmbGV0SWRdO1xuICAvLyB0aGUgaGFzaCBkb2Vzbid0IGFsd2F5cyBjYXRjaCB0aGUgaWQgaWYgdGhlIGdyYXBoaWMgaGFzIG5vdCB5ZXQgYmVlbiByZW5kZXJlZC5cbiAgaWYgKCFmZWF0dXJlTGF5ZXIpIHtcbiAgICB2YXIgZmVhdHVyZXMgPSB0aGlzLmZlYXR1cmVzO1xuICAgIGZvciAodmFyIGtleSBpbiBmZWF0dXJlcykge1xuICAgICAgdmFyIGZlYXQgPSB0aGlzLmZlYXR1cmVzW2tleV07XG4gICAgICBpZiAoZmVhdC5fbGVhZmxldF9pZCA9PT0gbGVhZmxldElkKSB7XG4gICAgICAgIGZlYXR1cmVMYXllciA9IGZlYXQ7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBwYXRoVXBkYXRlZChmZWF0dXJlTGF5ZXIsIHRoaXMpO1xufTtcblxuXG5mdW5jdGlvbiBwYXRoVXBkYXRlZChmZWF0dXJlTGF5ZXIsIGZlYXR1cmVTZXQpIHtcbiAgLy8gSWYgdGhlIGlkIGRvZXNudCBoYXNoLCBubyBwYXRoIGZvciB0aGUgZmVhdHVyZXMgaW4gb3VyIGZlYXR1cmUgc2V0IGFwcGx5LlxuICBpZiAoIWZlYXR1cmVMYXllcikge1xuICAgIC8vY29uc29sZS5lcnJvcigncGF0aFVwZGF0ZWQgZmVhdHVyZUxheWVyIGVtcHR5Jyk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGZlYXR1cmVMYXllci5fbGF5ZXJzKSB7XG5cbiAgICAvLyBvbmx5IGNhbGN1bGF0ZSBjZW50ZXIgYWZ0ZXIgYWxsIG9mIHRoZSBwb2x5Z29ucyBoYXZlIGJlZW4gdXBkYXRlZFxuICAgIGlmICghZmVhdHVyZUxheWVyLnBhdGhzVXBkYXRlZCkgZmVhdHVyZUxheWVyLnBhdGhzVXBkYXRlZCA9IDA7XG4gICAgKytmZWF0dXJlTGF5ZXIucGF0aHNVcGRhdGVkO1xuXG4gICAgaWYgKGZlYXR1cmVMYXllci5wYXRoc1VwZGF0ZWQgPT09IE9iamVjdC5rZXlzKGZlYXR1cmVMYXllci5fbGF5ZXJzKS5sZW5ndGgpIHtcbiAgICAgIHZhciBsID0gZmluZExhcmdlc3RMYXllcihmZWF0dXJlTGF5ZXIuX2xheWVycyk7XG5cbiAgICAgIGlmIChsKSB7XG4gICAgICAgIGZlYXR1cmVMYXllci5sYWJlbENlbnRlclBvaW50ID0gY2FsY3VsYXRlQ2VudGVyKGwuX3BhcnRzKTtcbiAgICAgICAgdXBkYXRlTGFiZWwoZmVhdHVyZUxheWVyLCBmZWF0dXJlU2V0KTtcbiAgICAgIH1cblxuICAgICAgZmVhdHVyZUxheWVyLnBhdGhzVXBkYXRlZCA9IDA7XG4gICAgfVxuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gdGhlcmUgaXMgb25seSBvbmUgcG9seWdvbiwgc28gY2FsY3VsYXRlIGNlbnRlci4gYWxzbyBjaGVjayB0byBzZWUgaWYgdGhlcmUgYXJlIHBhcnRzXG4gIGlmICggZmVhdHVyZUxheWVyLl9wYXJ0cyAmJiBmZWF0dXJlTGF5ZXIuX3BhcnRzLmxlbmd0aCApIHtcbiAgICBmZWF0dXJlTGF5ZXIubGFiZWxDZW50ZXJQb2ludCA9IGNhbGN1bGF0ZUNlbnRlcihmZWF0dXJlTGF5ZXIuX3BhcnRzKTtcbiAgICB1cGRhdGVMYWJlbChmZWF0dXJlTGF5ZXIsIGZlYXR1cmVTZXQpO1xuXG4gICAgcmV0dXJuO1xuICB9XG5cbn1cblxuXG5mdW5jdGlvbiBjcmVhdGVMYWJlbChmZWF0dXJlTGF5ZXIsIGZlYXR1cmVTZXQpIHtcbiAgdmFyIHBvaW50ID0gZmVhdHVyZUxheWVyLmxhYmVsQ2VudGVyUG9pbnQ7XG5cbiAgdmFyIHByb3BlcnRpZXMgPSBmZWF0dXJlTGF5ZXIuZmVhdHVyZS5wcm9wZXJ0aWVzO1xuICB2YXIgdGV4dCA9IHByb3BlcnRpZXMudGl0bGUgfHwgcHJvcGVydGllcy5uYW1lIHx8ICdMYWJlbCc7XG4gIGlmIChwcm9wZXJ0aWVzLmxhYmVsUHJvcGVydHkpIHtcbiAgICBpZiAodHlwZW9mIHByb3BlcnRpZXMubGFiZWxQcm9wZXJ0eSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGV4dCA9IHByb3BlcnRpZXMubGFiZWxQcm9wZXJ0eShwcm9wZXJ0aWVzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGV4dCA9IHByb3BlcnRpZXNbcHJvcGVydGllcy5sYWJlbFByb3BlcnR5XTtcbiAgICB9XG5cbiAgfVxuXG4gIC8vRGV0ZXJtaW5lIG1hcCBpY29uIGNsYXNzXG4gIHZhciBpY29uQ2xhc3MgPSBcImZlYXR1cmVsYWJlbC1pY29uLXRleHRcIjtcbiAgaWYgKHByb3BlcnRpZXNbXCJtYXAtaWNvbi1jbGFzc1wiXSkge1xuICAgICAgaWYgKHR5cGVvZiBwcm9wZXJ0aWVzW1wibWFwLWljb24tY2xhc3NcIl0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBpY29uQ2xhc3MgPSBwcm9wZXJ0aWVzW1wibWFwLWljb24tY2xhc3NcIl0ocHJvcGVydGllcyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIGljb25DbGFzcyA9IHByb3BlcnRpZXNbcHJvcGVydGllc1tcIm1hcC1pY29uLWNsYXNzXCJdXTtcbiAgICAgIH1cbiAgfVxuXG4gIC8vRGV0ZXJtaW5lIG1hcCBpY29uIHNpemVcbiAgdmFyIGljb25TaXplID0gWzM1LDM1XTtcbiAgaWYgKHByb3BlcnRpZXNbXCJtYXAtaWNvbi1zaXplXCJdKSB7XG4gICAgICBpZiAodHlwZW9mIHByb3BlcnRpZXNbXCJtYXAtaWNvbi1zaXplXCJdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgaWNvblNpemUgPSBwcm9wZXJ0aWVzW1wibWFwLWljb24tc2l6ZVwiXShwcm9wZXJ0aWVzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWNvblNpemUgPSBwcm9wZXJ0aWVzW3Byb3BlcnRpZXNbXCJtYXAtaWNvbi1zaXplXCJdXTtcbiAgICAgIH1cbiAgfVxuXG4gIGNvbnNvbGUubG9nKCdMQUJFTDogJyArIHRleHQgKyAnICgnICsgcG9pbnQueCArICcsICcgKyBwb2ludC55ICsgJykgJyArIHByb3BlcnRpZXMubmFtZSk7XG5cbiAgdmFyIGljb24gPSBMLmRpdkljb24oe1xuICAgIGNsYXNzTmFtZTogaWNvbkNsYXNzIHx8IFwiXCIsIC8vaWNvbkNsYXNzIHx8ICgkLmlzTnVtZXJpYyh0ZXh0KSA/ICdmZWF0dXJlbGFiZWwtaWNvbi1udW1iZXInIDogJ2ZlYXR1cmVsYWJlbC1pY29uLXRleHQnKSxcbiAgICBpY29uU2l6ZTogaWNvblNpemUsXG4gICAgaHRtbDogdGV4dFxuICB9KTtcblxuICB2YXIgbGFiZWwgPSBuZXcgTGFiZWwocG9pbnQsIGZlYXR1cmVMYXllciwge2ljb246aWNvbn0pO1xuXG4gIGxhYmVsLmNsZWFyQWxsRXZlbnRMaXN0ZW5lcnMoKTtcbiAgZmVhdHVyZUxheWVyLmNsZWFyQWxsRXZlbnRMaXN0ZW5lcnMoKTtcblxuICBsYWJlbC5vbignbW91c2VvdmVyJywgZnVuY3Rpb24oZSkge1xuICAgIG1vdXNlb3Zlcih0aGlzLCB0aGlzLmZlYXR1cmVMYXllcik7XG4gIH0pO1xuXG4gIGZlYXR1cmVMYXllci5vbignbW91c2VvdmVyJywgZnVuY3Rpb24gKGUpIHtcbiAgICBtb3VzZW92ZXIodGhpcy5sYWJlbCwgdGhpcyk7XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIHdoaXRlbkxhYmVsKGxhYmVsKSB7XG4gICAgaWYgKGxhYmVsLl9pY29uKSB7XG4gICAgICAvLyBsYWJlbCBpcyB0ZXh0IG9ubHksIG5vIGJhZGdlXG4gICAgICBpZiAobGFiZWwuX2ljb24uY2hpbGRyZW5bMF0uY2xhc3NOYW1lLmluZGV4T2YoJ2ZlYXR1cmVsYWJlbC1pY29uLXRleHQnKSA+IC0xKSB7XG4gICAgICAgIGxhYmVsLl9pY29uLmNoaWxkcmVuWzBdLnN0eWxlWydjb2xvciddID0gJ3JnYmEoMjU1LDI1NSwyNTUsMC43KSc7XG4gICAgICB9XG4gICAgICAvLyBsYWJlbCBoYXMgYSBiYWRnZVxuICAgICAgZWxzZSB7XG4gICAgICAgIGxhYmVsLl9pY29uLmNoaWxkcmVuWzBdLnN0eWxlWydib3gtc2hhZG93J10gPSAnMHB4IDBweCAwcHggNnB4IHJnYmEoMjU1LDI1NSwyNTUsMC43KSc7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ29sZGVuTGFiZWwobGFiZWwpIHtcbiAgICBpZiAobGFiZWwuX2ljb24pIHtcbiAgICAgIC8vIGxhYmVsIGlzIHRleHQgb25seSwgbm8gYmFkZ2VcbiAgICAgIGlmIChsYWJlbC5faWNvbi5jaGlsZHJlblswXS5jbGFzc05hbWUuaW5kZXhPZignZmVhdHVyZWxhYmVsLWljb24tdGV4dCcpID4gLTEpIHtcbiAgICAgICAgbGFiZWwuX2ljb24uY2hpbGRyZW5bMF0uc3R5bGVbJ2NvbG9yJ10gPSAncmdiYSgyMzcsMTc4LDQxLDAuOCknO1xuICAgICAgfVxuICAgICAgLy8gbGFiZWwgaGFzIGEgYmFkZ2VcbiAgICAgIGVsc2Uge1xuICAgICAgICBsYWJlbC5faWNvbi5jaGlsZHJlblswXS5zdHlsZVsnYm94LXNoYWRvdyddID0gJzBweCAwcHggMHB4IDZweCByZ2JhKDIzNywxNzgsNDEsMC44KSc7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVkZGVuTGFiZWwobGFiZWwpIHtcbiAgICBpZiAobGFiZWwuX2ljb24pIHtcbiAgICAgIC8vIGxhYmVsIGlzIHRleHQgb25seSwgbm8gYmFkZ2VcbiAgICAgIGlmIChsYWJlbC5faWNvbi5jaGlsZHJlblswXS5jbGFzc05hbWUuaW5kZXhPZignZmVhdHVyZWxhYmVsLWljb24tdGV4dCcpID4gLTEpIHtcbiAgICAgICAgbGFiZWwuX2ljb24uY2hpbGRyZW5bMF0uc3R5bGVbJ2NvbG9yJ10gPSAncmdiYSgyMzcsMjcsNDYsMC41KSc7XG4gICAgICB9XG4gICAgICAvLyBsYWJlbCBoYXMgYSBiYWRnZVxuICAgICAgZWxzZSB7XG4gICAgICAgIGxhYmVsLl9pY29uLmNoaWxkcmVuWzBdLnN0eWxlWydib3gtc2hhZG93J10gPSAnMHB4IDBweCAwcHggNnB4IHJnYmEoMjM3LDI3LDQ2LDAuNSknO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG1vdXNlb3ZlcihsYWJlbCwgZmVhdHVyZUxheWVyKSB7XG4gICAgaWYgKGZlYXR1cmVMYXllciAhPT0gZmVhdHVyZVNldC5zZWxlY3RlZEZlYXR1cmVMYXllcikge1xuXG4gICAgICBnb2xkZW5MYWJlbChsYWJlbCk7XG5cbiAgICAgIGZlYXR1cmVMYXllci5zZXRTdHlsZSh7XG4gICAgICAgIGNvbG9yOiAnI0VEQjIyOScgIC8vIGdvbGRcbiAgICAgIH0pO1xuICAgICAgZmVhdHVyZUxheWVyLmJyaW5nVG9Gcm9udCgpO1xuICAgIH1cbiAgfVxuXG4gIGxhYmVsLm9uKCdtb3VzZW91dCcsIGZ1bmN0aW9uKGUpIHtcbiAgICBtb3VzZW91dCh0aGlzLCB0aGlzLmZlYXR1cmVMYXllcik7XG4gIH0pO1xuXG4gIGZlYXR1cmVMYXllci5vbignbW91c2VvdXQnLCBmdW5jdGlvbiAoZSkge1xuICAgIG1vdXNlb3V0KHRoaXMubGFiZWwsIHRoaXMpO1xuICB9KTtcblxuICBmdW5jdGlvbiBtb3VzZW91dChsYWJlbCwgZmVhdHVyZUxheWVyKSB7XG4gICAgaWYgKGZlYXR1cmVMYXllciAhPT0gZmVhdHVyZVNldC5zZWxlY3RlZEZlYXR1cmVMYXllcikge1xuXG4gICAgICB3aGl0ZW5MYWJlbChsYWJlbCk7XG5cbiAgICAgIGZlYXR1cmVMYXllci5zZXRTdHlsZSh7XG4gICAgICAgIGNvbG9yOiBwcm9wZXJ0aWVzLmNvbG9yIHx8ICd3aGl0ZSdcbiAgICAgIH0pO1xuICAgICAgaWYgKGZlYXR1cmVTZXQuc2VsZWN0ZWRGZWF0dXJlTGF5ZXIpIHtcbiAgICAgICAgZmVhdHVyZVNldC5zZWxlY3RlZEZlYXR1cmVMYXllci5icmluZ1RvRnJvbnQoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZlYXR1cmVMYXllci5icmluZ1RvRnJvbnQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBsYWJlbC5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgIGNsaWNrKHRoaXMsIHRoaXMuZmVhdHVyZUxheWVyKTtcbiAgfSk7XG5cbiAgZmVhdHVyZUxheWVyLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgY2xpY2sodGhpcy5sYWJlbCwgdGhpcyk7XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIGNsaWNrKGxhYmVsLCBmZWF0dXJlTGF5ZXIpIHtcbiAgICAvLyBUVVJOIE9GRlxuICAgIGlmIChmZWF0dXJlTGF5ZXIgPT09IGZlYXR1cmVTZXQuc2VsZWN0ZWRGZWF0dXJlTGF5ZXIpIHtcblxuICAgICAgd2hpdGVuTGFiZWwobGFiZWwpO1xuXG4gICAgICBmZWF0dXJlTGF5ZXIuc2V0U3R5bGUoe1xuICAgICAgICBjb2xvcjogcHJvcGVydGllcy5jb2xvciB8fCAnd2hpdGUnXG4gICAgICB9KTtcbiAgICAgIGZlYXR1cmVMYXllci5icmluZ1RvRnJvbnQoKTtcbiAgICAgIGZlYXR1cmVTZXQuc2VsZWN0ZWRGZWF0dXJlTGF5ZXIgPSBudWxsO1xuICAgICAgaWYgKHByb3BlcnRpZXMgJiYgcHJvcGVydGllcy5vbkRlc2VsZWN0ICYmIHR5cGVvZiBwcm9wZXJ0aWVzLm9uRGVzZWxlY3QgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcHJvcGVydGllcy5vbkRlc2VsZWN0KGZlYXR1cmVMYXllcik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gVFVSTiBPTlxuICAgIGVsc2Uge1xuICAgICAgaWYgKGZlYXR1cmVTZXQuc2VsZWN0ZWRGZWF0dXJlTGF5ZXIpIHtcbiAgICAgICAgd2hpdGVuTGFiZWwoe19pY29uOiBmZWF0dXJlU2V0LnNlbGVjdGVkSWNvbn0pO1xuICAgICAgICBmZWF0dXJlU2V0LnNlbGVjdGVkRmVhdHVyZUxheWVyLnNldFN0eWxlKHtcbiAgICAgICAgICBjb2xvcjogcHJvcGVydGllcy5jb2xvciB8fCAnd2hpdGUnXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZWRkZW5MYWJlbChsYWJlbCk7XG5cbiAgICAgIC8vIHJlZCBjcm9zcyByZWQgI2VkMWIyZVxuICAgICAgZmVhdHVyZUxheWVyLnNldFN0eWxlKHtcbiAgICAgICAgY29sb3I6ICcjZDk1MzRmJyAvLyByZWRcbiAgICAgIH0pO1xuICAgICAgZmVhdHVyZUxheWVyLmJyaW5nVG9Gcm9udCgpO1xuICAgICAgZmVhdHVyZVNldC5zZWxlY3RlZEZlYXR1cmVMYXllciA9IGZlYXR1cmVMYXllcjtcbiAgICAgIGZlYXR1cmVTZXQuc2VsZWN0ZWRJY29uID0gbGFiZWwuX2ljb247XG4gICAgICBpZiAocHJvcGVydGllcyAmJiBwcm9wZXJ0aWVzLm9uU2VsZWN0ICYmIHR5cGVvZiBwcm9wZXJ0aWVzLm9uU2VsZWN0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHByb3BlcnRpZXMub25TZWxlY3QoZmVhdHVyZUxheWVyKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRml4ZXMgdGhlIGRvdWJsZSBsYWJlbCBidWcuXG4gICAqL1xuICBmZWF0dXJlTGF5ZXIuZ2VvanNvbkxheWVyLmFkZExheWVyKGxhYmVsKTtcblxuICAvKipcbiAgICogSWRlYWxseSB3ZSB3YW50IHRvIGJlIGFkZGluZyBsYWJlbHMgdG8gdGhlIGFjdHVhbCBsYXllciB0aGV5IGFyZSBvblxuICAgKiByYXRoZXIgdGhhbiB0aGUgcGFyZW50IEdlb0pTT04gbGF5ZXIuXG4gICAqL1xuLy8gICAgaWYgKCFmZWF0dXJlTGF5ZXIuYWRkTGF5ZXIpIHtcbi8vICAgICAgZmVhdHVyZUxheWVyLmdlb2pzb25MYXllci5hZGRMYXllcihsYWJlbCk7XG4vLyAgICB9IGVsc2Uge1xuLy8gICAgICBmZWF0dXJlTGF5ZXIuYWRkTGF5ZXIobGFiZWwpO1xuLy8gICAgfVxuXG4gIGZlYXR1cmVsYWJlbC5sYWJlbHNbZmVhdHVyZUxheWVyLmZlYXR1cmUucHJvcGVydGllcy5ndWlkXSA9IGxhYmVsO1xufVxuXG5cbmZ1bmN0aW9uIHVwZGF0ZUxhYmVsKGZlYXR1cmVMYXllciwgZmVhdHVyZVNldCkge1xuICBpZiAoICEgZmVhdHVyZUxheWVyLmxhYmVsICkge1xuICAgIGNyZWF0ZUxhYmVsKGZlYXR1cmVMYXllciwgZmVhdHVyZVNldCk7XG4gIH0gZWxzZSB7XG4gICAgZmVhdHVyZUxheWVyLmxhYmVsLnVwZGF0ZShmZWF0dXJlTGF5ZXIubGFiZWxDZW50ZXJQb2ludCk7XG4gIH1cbn1cblxuXG5mdW5jdGlvbiBjYWxjdWxhdGVDZW50ZXIocGFydHMpIHtcblxuICB2YXIgcGFydCA9IGZpbmRMYXJnZXN0UGFydChwYXJ0cyk7XG4gIHZhciBjZW50ZXIgPSBjZW50cm9pZChwYXJ0KTtcblxuICByZXR1cm4gY2VudGVyLnJvdW5kKCk7XG59XG5cblxuLy8gIGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQ2VudHJvaWQjQ2VudHJvaWRfb2ZfcG9seWdvblxuXG5mdW5jdGlvbiBhcmVhKHBhcnRBcnIpIHtcbiAgdmFyIGFyZWEgPSAwO1xuICB2YXIgbGVuID0gcGFydEFyci5sZW5ndGg7XG4gIGZvciAodmFyIGkgPSAwLCBqID0gbGVuIC0gMTsgaSA8IGxlbjsgaj1pLCBpKyspIHtcbiAgICB2YXIgcDEgPSBwYXJ0QXJyW2pdO1xuICAgIHZhciBwMiA9IHBhcnRBcnJbaV07XG5cbiAgICBhcmVhICs9IHAxLnggKiBwMi55IC0gcDIueCAqIHAxLnk7XG4gIH1cblxuICByZXR1cm4gYXJlYSAvIDI7XG59XG5cbi8qXG4gICAgTkggVE9ETzogV2UgYXJlIGluZGVlZCBnZXR0aW5nIHRoZSBjZW50cm9pZCwgYnV0IGlkZWFsbHkgd2VcbiAgICB3YW50IHRvIGNoZWNrIGlmIHRoZSBjZW50cm9pZCBpcyBhY3R1YWxseSB3aXRoaW4gdGhlIHBvbHlnb25cbiAgICBmb3IgdGhlIHBvbHlnb25zIHRoYXQgYmVuZCBsaWtlIGEgYm9vbWFyYW5nLiBJZiBpdCBpcyBvdXRzaWRlLFxuICAgIHdlIG5lZWQgdG8gbnVkZ2UgaXQgb3ZlciB1bnRpbCBpdCBpcyBpbnNpZGUuLi5cbiAqL1xuZnVuY3Rpb24gY2VudHJvaWQocGFydEFycikge1xuICB2YXIgbGVuID0gcGFydEFyci5sZW5ndGg7XG4gIHZhciB4ID0gMDtcbiAgdmFyIHkgPSAwO1xuICBmb3IgKHZhciBpID0gMCwgaiA9IGxlbiAtIDE7IGkgPCBsZW47IGo9aSwgaSsrKSB7XG4gICAgdmFyIHAxID0gcGFydEFycltqXTtcbiAgICB2YXIgcDIgPSBwYXJ0QXJyW2ldO1xuICAgIHZhciBmID0gcDEueCAqIHAyLnkgLSBwMi54ICogcDEueTtcbiAgICB4ICs9IChwMS54ICsgcDIueCkgKiBmO1xuICAgIHkgKz0gKHAxLnkgKyBwMi55KSAqIGY7XG4gIH1cbiAgZiA9IGFyZWEocGFydEFycikgKiA2O1xuICByZXR1cm4gTC5wb2ludCh4L2YsIHkvZik7XG5cbn1cblxuXG5mdW5jdGlvbiBmaW5kTGFyZ2VzdExheWVyKGxheWVycykge1xuICB2YXIgbGFyZ2VzdExheWVyID0gbnVsbDtcbiAgdmFyIG1heEFyZWEgPSAwO1xuXG4gIGZvciAodmFyIGlkIGluIGxheWVycykge1xuICAgIHZhciBsID0gbGF5ZXJzW2lkXTtcbiAgICB2YXIgcGFydHMgPSBsLl9wYXJ0cztcbiAgICB2YXIgYSA9IDA7XG4gICAgaWYgKCFwYXJ0cykge1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBwYXJ0cy5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICAgICAgYSArPSBhcmVhKHBhcnRzW2ldKTtcbiAgICB9XG4gICAgaWYgKGEgPiBtYXhBcmVhKSB7XG4gICAgICBtYXhBcmVhID0gYTtcbiAgICAgIGxhcmdlc3RMYXllciA9IGw7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGxhcmdlc3RMYXllcjtcbn1cblxuZnVuY3Rpb24gZmluZExhcmdlc3RQYXJ0KHBhcnRzKSB7XG4gIHZhciBsYXJnZXN0UGFydCA9IHBhcnRzWzBdO1xuICB2YXIgbWF4QXJlYSA9IDA7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHBhcnRzLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gICAgdmFyIHAgPSBwYXJ0c1tpXTtcbiAgICB2YXIgYSA9IGFyZWEocCk7XG4gICAgaWYgKCBhID4gbWF4QXJlYSApIHtcbiAgICAgIGxhcmdlc3RQYXJ0ID0gcDtcbiAgICAgIG1heEFyZWEgPSBhO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbGFyZ2VzdFBhcnQ7XG59XG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgTmljaG9sYXMgSGFsbGFoYW4gPG5oYWxsYWhhbkBzcGF0aWFsZGV2LmNvbT5cbiAqICAgICAgIG9uIDQvNy8xNC5cbiAqXG4gKiAgICAgICBCYXNlZCBvbiBMLk1hcmtlciBmcm9tIHYwLjcuMlxuICovXG5cblxubW9kdWxlLmV4cG9ydHMgPSBMLkxhYmVsID0gTC5DbGFzcy5leHRlbmQoe1xuXG4gIGluY2x1ZGVzOiBMLk1peGluLkV2ZW50cyxcblxuICBvcHRpb25zOiB7XG4gICAgaWNvbjogbmV3IEwuSWNvbi5EZWZhdWx0KCksXG4gICAgdGl0bGU6ICcnLFxuICAgIGFsdDogJycsXG4gICAgY2xpY2thYmxlOiB0cnVlLFxuICAgIGRyYWdnYWJsZTogZmFsc2UsXG4gICAga2V5Ym9hcmQ6IHRydWUsXG4gICAgekluZGV4T2Zmc2V0OiAwLFxuICAgIG9wYWNpdHk6IDEsXG4gICAgcmlzZU9uSG92ZXI6IGZhbHNlLFxuICAgIHJpc2VPZmZzZXQ6IDI1MFxuICB9LFxuXG4gIGluaXRpYWxpemU6IGZ1bmN0aW9uIChwb2ludCwgZmVhdHVyZUxheWVyLCBvcHRpb25zKSB7XG4gICAgTC5zZXRPcHRpb25zKHRoaXMsIG9wdGlvbnMpO1xuLy8gICAgdGhpcy5fbGF0bG5nID0gTC5sYXRMbmcobGF0bG5nKTtcbiAgICB0aGlzLl9wb2ludCA9IHBvaW50O1xuICAgIGlmIChmZWF0dXJlTGF5ZXIpe1xuICAgICAgdGhpcy5mZWF0dXJlTGF5ZXIgPSBmZWF0dXJlTGF5ZXI7XG4gICAgICBmZWF0dXJlTGF5ZXIubGFiZWwgPSB0aGlzO1xuICAgIH1cbiAgICB0aGlzLmlzTGFiZWwgPSB0cnVlO1xuICB9LFxuXG4gIG9uQWRkOiBmdW5jdGlvbiAobWFwKSB7XG4gICAgdGhpcy5fbWFwID0gbWFwO1xuXG4gICAgbWFwLm9uKCd2aWV3cmVzZXQnLCB0aGlzLnVwZGF0ZSwgdGhpcyk7XG5cbiAgICB0aGlzLl9pbml0SWNvbigpO1xuICAgIHRoaXMudXBkYXRlKCk7XG4gICAgdGhpcy5maXJlKCdhZGQnKTtcblxuICAgIGlmIChtYXAub3B0aW9ucy56b29tQW5pbWF0aW9uICYmIG1hcC5vcHRpb25zLm1hcmtlclpvb21BbmltYXRpb24pIHtcbiAgICAgIG1hcC5vbignem9vbWFuaW0nLCB0aGlzLl9hbmltYXRlWm9vbSwgdGhpcyk7XG4gICAgfVxuICB9LFxuXG4gIGFkZFRvOiBmdW5jdGlvbiAobWFwKSB7XG4gICAgbWFwLmFkZExheWVyKHRoaXMpO1xuICAgIHJldHVybiB0aGlzO1xuICB9LFxuXG4gIG9uUmVtb3ZlOiBmdW5jdGlvbiAobWFwKSB7XG4gICAgaWYgKHRoaXMuZHJhZ2dpbmcpIHtcbiAgICAgIHRoaXMuZHJhZ2dpbmcuZGlzYWJsZSgpO1xuICAgIH1cblxuICAgIHRoaXMuX3JlbW92ZUljb24oKTtcbiAgICB0aGlzLl9yZW1vdmVTaGFkb3coKTtcblxuICAgIHRoaXMuZmlyZSgncmVtb3ZlJyk7XG5cbiAgICBtYXAub2ZmKHtcbiAgICAgICd2aWV3cmVzZXQnOiB0aGlzLnVwZGF0ZSxcbiAgICAgICd6b29tYW5pbSc6IHRoaXMuX2FuaW1hdGVab29tXG4gICAgfSwgdGhpcyk7XG5cbiAgICB0aGlzLl9tYXAgPSBudWxsO1xuICB9LFxuXG4vLyAgZ2V0TGF0TG5nOiBmdW5jdGlvbiAoKSB7XG4vLyAgICByZXR1cm4gdGhpcy5fbGF0bG5nO1xuLy8gIH0sXG4vL1xuLy8gIHNldExhdExuZzogZnVuY3Rpb24gKGxhdGxuZykge1xuLy8gICAgdGhpcy5fbGF0bG5nID0gTC5sYXRMbmcobGF0bG5nKTtcbi8vXG4vLyAgICB0aGlzLnVwZGF0ZSgpO1xuLy9cbi8vICAgIHJldHVybiB0aGlzLmZpcmUoJ21vdmUnLCB7IGxhdGxuZzogdGhpcy5fbGF0bG5nIH0pO1xuLy8gIH0sXG5cblxuXG4gIHNldFpJbmRleE9mZnNldDogZnVuY3Rpb24gKG9mZnNldCkge1xuICAgIHRoaXMub3B0aW9ucy56SW5kZXhPZmZzZXQgPSBvZmZzZXQ7XG4gICAgdGhpcy51cGRhdGUoKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9LFxuXG4gIHNldEljb246IGZ1bmN0aW9uIChpY29uKSB7XG5cbiAgICB0aGlzLm9wdGlvbnMuaWNvbiA9IGljb247XG5cbiAgICBpZiAodGhpcy5fbWFwKSB7XG4gICAgICB0aGlzLl9pbml0SWNvbigpO1xuICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fcG9wdXApIHtcbiAgICAgIHRoaXMuYmluZFBvcHVwKHRoaXMuX3BvcHVwKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfSxcblxuICB1cGRhdGU6IGZ1bmN0aW9uIChwb2ludCkge1xuICAgIGlmIChwb2ludCkge1xuICAgICAgdGhpcy5fcG9pbnQgPSBwb2ludDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2ljb24pIHtcbi8vICAgICAgdmFyIHBvcyA9IHRoaXMuX21hcC5sYXRMbmdUb0xheWVyUG9pbnQodGhpcy5fbGF0bG5nKS5yb3VuZCgpO1xuICAgICAgdGhpcy5fc2V0UG9zKHRoaXMuX3BvaW50KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfSxcblxuICBfaW5pdEljb246IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgb3B0aW9ucyA9IHRoaXMub3B0aW9ucyxcbiAgICAgIG1hcCA9IHRoaXMuX21hcCxcbiAgICAgIGFuaW1hdGlvbiA9IChtYXAub3B0aW9ucy56b29tQW5pbWF0aW9uICYmIG1hcC5vcHRpb25zLm1hcmtlclpvb21BbmltYXRpb24pLFxuICAgICAgY2xhc3NUb0FkZCA9IGFuaW1hdGlvbiA/ICdsZWFmbGV0LXpvb20tYW5pbWF0ZWQnIDogJ2xlYWZsZXQtem9vbS1oaWRlJztcblxuICAgIHZhciBpY29uID0gb3B0aW9ucy5pY29uLmNyZWF0ZUljb24odGhpcy5faWNvbiksXG4gICAgICBhZGRJY29uID0gZmFsc2U7XG5cbiAgICAvLyBpZiB3ZSdyZSBub3QgcmV1c2luZyB0aGUgaWNvbiwgcmVtb3ZlIHRoZSBvbGQgb25lIGFuZCBpbml0IG5ldyBvbmVcbiAgICBpZiAoaWNvbiAhPT0gdGhpcy5faWNvbikge1xuICAgICAgaWYgKHRoaXMuX2ljb24pIHtcbiAgICAgICAgdGhpcy5fcmVtb3ZlSWNvbigpO1xuICAgICAgfVxuICAgICAgYWRkSWNvbiA9IHRydWU7XG5cbiAgICAgIGlmIChvcHRpb25zLnRpdGxlKSB7XG4gICAgICAgIGljb24udGl0bGUgPSBvcHRpb25zLnRpdGxlO1xuICAgICAgfVxuXG4gICAgICBpZiAob3B0aW9ucy5hbHQpIHtcbiAgICAgICAgaWNvbi5hbHQgPSBvcHRpb25zLmFsdDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBMLkRvbVV0aWwuYWRkQ2xhc3MoaWNvbiwgY2xhc3NUb0FkZCk7XG5cbiAgICBpZiAob3B0aW9ucy5rZXlib2FyZCkge1xuICAgICAgaWNvbi50YWJJbmRleCA9ICcwJztcbiAgICB9XG5cbiAgICB0aGlzLl9pY29uID0gaWNvbjtcblxuICAgIHRoaXMuX2luaXRJbnRlcmFjdGlvbigpO1xuXG4gICAgaWYgKG9wdGlvbnMucmlzZU9uSG92ZXIpIHtcbiAgICAgIEwuRG9tRXZlbnRcbiAgICAgICAgLm9uKGljb24sICdtb3VzZW92ZXInLCB0aGlzLl9icmluZ1RvRnJvbnQsIHRoaXMpXG4gICAgICAgIC5vbihpY29uLCAnbW91c2VvdXQnLCB0aGlzLl9yZXNldFpJbmRleCwgdGhpcyk7XG4gICAgfVxuXG4gICAgdmFyIG5ld1NoYWRvdyA9IG9wdGlvbnMuaWNvbi5jcmVhdGVTaGFkb3codGhpcy5fc2hhZG93KSxcbiAgICAgIGFkZFNoYWRvdyA9IGZhbHNlO1xuXG4gICAgaWYgKG5ld1NoYWRvdyAhPT0gdGhpcy5fc2hhZG93KSB7XG4gICAgICB0aGlzLl9yZW1vdmVTaGFkb3coKTtcbiAgICAgIGFkZFNoYWRvdyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKG5ld1NoYWRvdykge1xuICAgICAgTC5Eb21VdGlsLmFkZENsYXNzKG5ld1NoYWRvdywgY2xhc3NUb0FkZCk7XG4gICAgfVxuICAgIHRoaXMuX3NoYWRvdyA9IG5ld1NoYWRvdztcblxuXG4gICAgaWYgKG9wdGlvbnMub3BhY2l0eSA8IDEpIHtcbiAgICAgIHRoaXMuX3VwZGF0ZU9wYWNpdHkoKTtcbiAgICB9XG5cblxuICAgIHZhciBwYW5lcyA9IHRoaXMuX21hcC5fcGFuZXM7XG5cbiAgICBpZiAoYWRkSWNvbikge1xuICAgICAgcGFuZXMubWFya2VyUGFuZS5hcHBlbmRDaGlsZCh0aGlzLl9pY29uKTtcbiAgICB9XG5cbiAgICBpZiAobmV3U2hhZG93ICYmIGFkZFNoYWRvdykge1xuICAgICAgcGFuZXMuc2hhZG93UGFuZS5hcHBlbmRDaGlsZCh0aGlzLl9zaGFkb3cpO1xuICAgIH1cbiAgfSxcblxuICBfcmVtb3ZlSWNvbjogZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLm9wdGlvbnMucmlzZU9uSG92ZXIpIHtcbiAgICAgIEwuRG9tRXZlbnRcbiAgICAgICAgLm9mZih0aGlzLl9pY29uLCAnbW91c2VvdmVyJywgdGhpcy5fYnJpbmdUb0Zyb250KVxuICAgICAgICAub2ZmKHRoaXMuX2ljb24sICdtb3VzZW91dCcsIHRoaXMuX3Jlc2V0WkluZGV4KTtcbiAgICB9XG5cbiAgICB0aGlzLl9tYXAuX3BhbmVzLm1hcmtlclBhbmUucmVtb3ZlQ2hpbGQodGhpcy5faWNvbik7XG5cbiAgICB0aGlzLl9pY29uID0gbnVsbDtcbiAgfSxcblxuICBfcmVtb3ZlU2hhZG93OiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuX3NoYWRvdykge1xuICAgICAgdGhpcy5fbWFwLl9wYW5lcy5zaGFkb3dQYW5lLnJlbW92ZUNoaWxkKHRoaXMuX3NoYWRvdyk7XG4gICAgfVxuICAgIHRoaXMuX3NoYWRvdyA9IG51bGw7XG4gIH0sXG5cbiAgX3NldFBvczogZnVuY3Rpb24gKHBvcykge1xuICAgIEwuRG9tVXRpbC5zZXRQb3NpdGlvbih0aGlzLl9pY29uLCBwb3MpO1xuXG4gICAgaWYgKHRoaXMuX3NoYWRvdykge1xuICAgICAgTC5Eb21VdGlsLnNldFBvc2l0aW9uKHRoaXMuX3NoYWRvdywgcG9zKTtcbiAgICB9XG5cbiAgICB0aGlzLl96SW5kZXggPSBwb3MueSArIHRoaXMub3B0aW9ucy56SW5kZXhPZmZzZXQ7XG5cbiAgICB0aGlzLl9yZXNldFpJbmRleCgpO1xuICB9LFxuXG4gIF91cGRhdGVaSW5kZXg6IGZ1bmN0aW9uIChvZmZzZXQpIHtcbiAgICB0aGlzLl9pY29uLnN0eWxlLnpJbmRleCA9IHRoaXMuX3pJbmRleCArIG9mZnNldDtcbiAgfSxcblxuICBfYW5pbWF0ZVpvb206IGZ1bmN0aW9uIChvcHQpIHtcbi8vICAgIHZhciBwb3MgPSB0aGlzLl9tYXAuX2xhdExuZ1RvTmV3TGF5ZXJQb2ludCh0aGlzLl9sYXRsbmcsIG9wdC56b29tLCBvcHQuY2VudGVyKS5yb3VuZCgpO1xuLy9cbi8vICAgIHRoaXMuX3NldFBvcyhwb3MpO1xuICB9LFxuXG4gIF9pbml0SW50ZXJhY3Rpb246IGZ1bmN0aW9uICgpIHtcblxuICAgIGlmICghdGhpcy5vcHRpb25zLmNsaWNrYWJsZSkgeyByZXR1cm47IH1cblxuICAgIC8vIFRPRE8gcmVmYWN0b3IgaW50byBzb21ldGhpbmcgc2hhcmVkIHdpdGggTWFwL1BhdGgvZXRjLiB0byBEUlkgaXQgdXBcblxuICAgIHZhciBpY29uID0gdGhpcy5faWNvbixcbiAgICAgIGV2ZW50cyA9IFsnZGJsY2xpY2snLCAnbW91c2Vkb3duJywgJ21vdXNlb3ZlcicsICdtb3VzZW91dCcsICdjb250ZXh0bWVudSddO1xuXG4gICAgTC5Eb21VdGlsLmFkZENsYXNzKGljb24sICdsZWFmbGV0LWNsaWNrYWJsZScpO1xuICAgIEwuRG9tRXZlbnQub24oaWNvbiwgJ2NsaWNrJywgdGhpcy5fb25Nb3VzZUNsaWNrLCB0aGlzKTtcbiAgICBMLkRvbUV2ZW50Lm9uKGljb24sICdrZXlwcmVzcycsIHRoaXMuX29uS2V5UHJlc3MsIHRoaXMpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBldmVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIEwuRG9tRXZlbnQub24oaWNvbiwgZXZlbnRzW2ldLCB0aGlzLl9maXJlTW91c2VFdmVudCwgdGhpcyk7XG4gICAgfVxuXG4gICAgaWYgKEwuSGFuZGxlci5NYXJrZXJEcmFnKSB7XG4gICAgICB0aGlzLmRyYWdnaW5nID0gbmV3IEwuSGFuZGxlci5NYXJrZXJEcmFnKHRoaXMpO1xuXG4gICAgICBpZiAodGhpcy5vcHRpb25zLmRyYWdnYWJsZSkge1xuICAgICAgICB0aGlzLmRyYWdnaW5nLmVuYWJsZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICBfb25Nb3VzZUNsaWNrOiBmdW5jdGlvbiAoZSkge1xuICAgIHZhciB3YXNEcmFnZ2VkID0gdGhpcy5kcmFnZ2luZyAmJiB0aGlzLmRyYWdnaW5nLm1vdmVkKCk7XG5cbiAgICBpZiAodGhpcy5oYXNFdmVudExpc3RlbmVycyhlLnR5cGUpIHx8IHdhc0RyYWdnZWQpIHtcbiAgICAgIEwuRG9tRXZlbnQuc3RvcFByb3BhZ2F0aW9uKGUpO1xuICAgIH1cblxuICAgIGlmICh3YXNEcmFnZ2VkKSB7IHJldHVybjsgfVxuXG4gICAgaWYgKCghdGhpcy5kcmFnZ2luZyB8fCAhdGhpcy5kcmFnZ2luZy5fZW5hYmxlZCkgJiYgdGhpcy5fbWFwLmRyYWdnaW5nICYmIHRoaXMuX21hcC5kcmFnZ2luZy5tb3ZlZCgpKSB7IHJldHVybjsgfVxuXG4gICAgdGhpcy5maXJlKGUudHlwZSwge1xuICAgICAgb3JpZ2luYWxFdmVudDogZSxcbi8vICAgICAgbGF0bG5nOiB0aGlzLl9sYXRsbmdcbiAgICAgIHBvaW50OiB0aGlzLl9wb2ludFxuICAgIH0pO1xuICB9LFxuXG4gIF9vbktleVByZXNzOiBmdW5jdGlvbiAoZSkge1xuICAgIGlmIChlLmtleUNvZGUgPT09IDEzKSB7XG4gICAgICB0aGlzLmZpcmUoJ2NsaWNrJywge1xuICAgICAgICBvcmlnaW5hbEV2ZW50OiBlLFxuLy8gICAgICAgIGxhdGxuZzogdGhpcy5fbGF0bG5nXG4gICAgICAgIHBvaW50OiB0aGlzLl9wb2ludFxuICAgICAgfSk7XG4gICAgfVxuICB9LFxuXG4gIF9maXJlTW91c2VFdmVudDogZnVuY3Rpb24gKGUpIHtcblxuICAgIHRoaXMuZmlyZShlLnR5cGUsIHtcbiAgICAgIG9yaWdpbmFsRXZlbnQ6IGUsXG4vLyAgICAgIGxhdGxuZzogdGhpcy5fbGF0bG5nXG4gICAgICBwb2ludDogdGhpcy5fcG9pbnRcbiAgICB9KTtcblxuICAgIC8vIFRPRE8gcHJvcGVyIGN1c3RvbSBldmVudCBwcm9wYWdhdGlvblxuICAgIC8vIHRoaXMgbGluZSB3aWxsIGFsd2F5cyBiZSBjYWxsZWQgaWYgbWFya2VyIGlzIGluIGEgRmVhdHVyZUdyb3VwXG4gICAgaWYgKGUudHlwZSA9PT0gJ2NvbnRleHRtZW51JyAmJiB0aGlzLmhhc0V2ZW50TGlzdGVuZXJzKGUudHlwZSkpIHtcbiAgICAgIEwuRG9tRXZlbnQucHJldmVudERlZmF1bHQoZSk7XG4gICAgfVxuICAgIGlmIChlLnR5cGUgIT09ICdtb3VzZWRvd24nKSB7XG4gICAgICBMLkRvbUV2ZW50LnN0b3BQcm9wYWdhdGlvbihlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgTC5Eb21FdmVudC5wcmV2ZW50RGVmYXVsdChlKTtcbiAgICB9XG4gIH0sXG5cbiAgc2V0T3BhY2l0eTogZnVuY3Rpb24gKG9wYWNpdHkpIHtcbiAgICB0aGlzLm9wdGlvbnMub3BhY2l0eSA9IG9wYWNpdHk7XG4gICAgaWYgKHRoaXMuX21hcCkge1xuICAgICAgdGhpcy5fdXBkYXRlT3BhY2l0eSgpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9LFxuXG4gIF91cGRhdGVPcGFjaXR5OiBmdW5jdGlvbiAoKSB7XG4gICAgTC5Eb21VdGlsLnNldE9wYWNpdHkodGhpcy5faWNvbiwgdGhpcy5vcHRpb25zLm9wYWNpdHkpO1xuICAgIGlmICh0aGlzLl9zaGFkb3cpIHtcbiAgICAgIEwuRG9tVXRpbC5zZXRPcGFjaXR5KHRoaXMuX3NoYWRvdywgdGhpcy5vcHRpb25zLm9wYWNpdHkpO1xuICAgIH1cbiAgfSxcblxuICBfYnJpbmdUb0Zyb250OiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5fdXBkYXRlWkluZGV4KHRoaXMub3B0aW9ucy5yaXNlT2Zmc2V0KTtcbiAgfSxcblxuICBfcmVzZXRaSW5kZXg6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLl91cGRhdGVaSW5kZXgoMCk7XG4gIH1cbn0pO1xuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IE5pY2hvbGFzIEhhbGxhaGFuIDxuaGFsbGFoYW5Ac3BhdGlhbGRldi5jb20+XG4gKiAgICAgICBvbiA0LzcvMTQuXG4gKi9cblxudmFyIGZlYXR1cmVTZXRzID0gW107XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBmZWF0dXJlU2V0czogZmVhdHVyZVNldHMsXG4gIHBhdGhVcGRhdGVkOiBmdW5jdGlvbihsZWFmbGV0SWQpIHtcbiAgICBmb3IodmFyIGk9IDAsIGxlbj1mZWF0dXJlU2V0cy5sZW5ndGg7IGk8bGVuOyArK2kpIHtcbiAgICAgIGZlYXR1cmVTZXRzW2ldLl9wYXRoVXBkYXRlZChsZWFmbGV0SWQpO1xuICAgIH1cbiAgfSxcbiAgbGFiZWxzOiB7fVxufTtcblxucmVxdWlyZSgnLi9sZWFmbGV0LXBhdGNoJyk7XG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgTmljaG9sYXMgSGFsbGFoYW4gPG5oYWxsYWhhbkBzcGF0aWFsZGV2LmNvbT5cbiAqICAgICAgIG9uIDUvNy8xNC5cbiAqXG4gKiBUaGlzIGlzIGEgcGF0Y2ggdGhhdCBvdmVycmlkZXMgdGhlIEwuUG9seWxpbmUgY2xhc3MgaW4gTGVhZmxldCAwLjcuMlxuICpcbiAqIEFsbCB0aGlzIGlzIGRvaW5nIGlzIGJyb2FkY2FzdGluZyB0aGUgbGVhZmxldCBpZCBmb3IgdGhlIHBhdGggdGhhdCBpcyBiZWluZyByZWRyYXduLlxuICovXG5cbnZhciBmZWF0dXJlbGFiZWwgPSByZXF1aXJlKCcuL2ZlYXR1cmVsYWJlbCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuXG4gIC8qKlxuICAgKiBMZWFmbGV0IHB1dHMgdG9vIG11Y2ggb2YgYSBidWZmZXIgYXJvdW5kIHRoZSBhcmVhIGluIHdoaWNoIGEgc2hhcGVcbiAgICogaXMgY2xpcHBlZCwgdGh1cyB3ZSB3ZXJlIG5vdCBnZXR0aW5nIGdvb2QgY2VudHJvaWRzIGZvciBzaGFwZXMgdGhhdFxuICAgKiB3ZXJlIGJlaW5nIGNsaXBwZWQuIFRoaXMgcmVzb2x2ZXMgdGhhdC5cbiAgICovXG4gIEwuUGF0aC5DTElQX1BBRERJTkcgPSAwLjAyO1xuXG4gIEwuUG9seWxpbmUucHJvdG90eXBlLl91cGRhdGVQYXRoID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICghdGhpcy5fbWFwKSB7IHJldHVybjsgfVxuXG4gICAgdGhpcy5fY2xpcFBvaW50cygpO1xuICAgIHRoaXMuX3NpbXBsaWZ5UG9pbnRzKCk7XG5cbiAgICBMLlBhdGgucHJvdG90eXBlLl91cGRhdGVQYXRoLmNhbGwodGhpcyk7XG5cbiAgICAvKipcbiAgICAgKiBOb3RpZmllcyBmZWF0dXJlbGFiZWwgdGhhdCBhIHBhdGggZm9yIGEgdmVjdG9yIGhhcyBiZWVuIHJlZHJhd24gYW5kIHRoZSBsYWJlbCBzaG91bGRcbiAgICAgKiBwb3NpdGlvbmVkIG9yIHJlcG9zaXRpb25lZC5cbiAgICAgKi9cbiAgICBmZWF0dXJlbGFiZWwucGF0aFVwZGF0ZWQodGhpcy5fbGVhZmxldF9pZCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEZpeGVzIGEgTGVhZmxldCBidWcgd2hlcmUgYSByZWZlcmVuY2UgdG8gdGhpcy5fbWFwIGlzIHNvbWV0aW1lcyBtaXNzaW5nLlxuICAgKi9cbiAgTC5QYXRoLnByb3RvdHlwZS5icmluZ1RvRnJvbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCF0aGlzLl9tYXApIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICB2YXIgcm9vdCA9IHRoaXMuX21hcC5fcGF0aFJvb3QsXG4gICAgICAgIHBhdGggPSB0aGlzLl9jb250YWluZXI7XG5cbiAgICBpZiAocGF0aCAmJiByb290Lmxhc3RDaGlsZCAhPT0gcGF0aCkge1xuICAgICAgcm9vdC5hcHBlbmRDaGlsZChwYXRoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbn0oKTsiLCIvKipcbiAqIFRoaXMgaXMgdGhlIGVudHJ5IHBvaW50IG9mIHRoZSBhcHBsaWNhdGlvbi4gV2UgZGVjbGFyZSB0aGUgbWFpbiBtb2R1bGUgaGVyZSBhbmQgdGhlbiBjb25maWd1cmUgdGhlIG1haW4gcm91dGVyXG4gKiB0aGF0IGNyZWF0ZXMgY29ycmVzcG9uZGluZyB2aWV3cy4gVGhlIGFycmF5IHBhcmFtZXRlciBmb3IgbW9kdWxlIGRlY2xhcmVzIHRoaXMgbW9kdWxlJ3MgZGVwZW5kZW5jaWVzLlxuICovXG52YXIgR2VvQW5ndWxhciA9IGFuZ3VsYXIubW9kdWxlKCdHZW9Bbmd1bGFyJywgWydhbmd1bGFyRmlsZVVwbG9hZCcsICduZ0Nvb2tpZXMnLCAnbmdSZXNvdXJjZScsICduZ1Nhbml0aXplJywgJ25nUm91dGUnLCAndWkucm91dGVyJywgJ25nQW5pbWF0ZScsICd1aS5ib290c3RyYXAnLCAndWkuc2xpZGVyJ10pO1xuXG5HZW9Bbmd1bGFyLnJ1bihmdW5jdGlvbiAoJHJvb3RTY29wZSwgJHN0YXRlLCAkc3RhdGVQYXJhbXMpIHtcblxuICAvLyBJdCdzIHZlcnkgaGFuZHkgdG8gYWRkIHJlZmVyZW5jZXMgdG8gJHN0YXRlIGFuZCAkc3RhdGVQYXJhbXMgdG8gdGhlICRyb290U2NvcGVcbiAgLy8gc28gdGhhdCB5b3UgY2FuIGFjY2VzcyB0aGVtIGZyb20gYW55IHNjb3BlIHdpdGhpbiB5b3VyIGFwcGxpY2F0aW9ucy5Gb3IgZXhhbXBsZSxcbiAgLy8gPGxpIHVpLXNyZWYtYWN0aXZlPVwiYWN0aXZlIH1cIj4gd2lsbCBzZXQgdGhlIDxsaT4gLy8gdG8gYWN0aXZlIHdoZW5ldmVyXG4gIC8vICdjb250YWN0cy5saXN0JyBvciBvbmUgb2YgaXRzIGRlY2VuZGVudHMgaXMgYWN0aXZlLlxuICAkcm9vdFNjb3BlLiRzdGF0ZSA9ICRzdGF0ZTtcbiAgJHJvb3RTY29wZS4kc3RhdGVQYXJhbXMgPSAkc3RhdGVQYXJhbXM7XG5cbiAgZGVidWcuJHN0YXRlID0gJHN0YXRlO1xuICBkZWJ1Zy4kc3RhdGVQYXJhbXMgPSAkc3RhdGVQYXJhbXM7XG5cbiAgJHJvb3RTY29wZS5pc1N0YXRlID0gZnVuY3Rpb24gKHN0YXRlTmFtZSkge1xuICAgIHJldHVybiAkc3RhdGUuJGN1cnJlbnQubmFtZSA9PT0gc3RhdGVOYW1lO1xuICB9O1xuXG4gICRyb290U2NvcGUuaXNQYXJhbSA9IGZ1bmN0aW9uKHBhcmFtTmFtZSkge1xuICAgIHZhciBib29sID0gJHN0YXRlUGFyYW1zW3BhcmFtTmFtZV07XG4gICAgaWYgKCFib29sKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gICRyb290U2NvcGUuaXNOb3RQYXJhbSA9IGZ1bmN0aW9uKHBhcmFtTmFtZSkge1xuICAgIHZhciBib29sID0gJHN0YXRlUGFyYW1zW3BhcmFtTmFtZV07XG4gICAgaWYgKCFib29sKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gICRyb290U2NvcGUudG9nZ2xlUGFyYW0gPSBmdW5jdGlvbihwYXJhbU5hbWUpIHtcbiAgICB2YXIgYm9vbCA9ICRzdGF0ZVBhcmFtc1twYXJhbU5hbWVdO1xuICAgIGlmICghYm9vbCkge1xuICAgICAgLy8gbXV0ZXggbG9naWMgdGhhdCBtYWtlcyBvbmx5IDEgcGFuZWwgb3BlbiBhdCBhIHRpbWVcbiAgICAgIGZvciAodmFyIHBhcmFtIGluICRzdGF0ZVBhcmFtcykge1xuICAgICAgICBpZiAoJHN0YXRlUGFyYW1zW3BhcmFtXSA9PT0gJ29wZW4nKSB7XG4gICAgICAgICAgJHN0YXRlUGFyYW1zW3BhcmFtXSA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgICRzdGF0ZVBhcmFtc1twYXJhbU5hbWVdID0gJ29wZW4nO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWxldGUgJHN0YXRlUGFyYW1zW3BhcmFtTmFtZV07XG4gICAgfVxuICAgIHZhciBzdGF0ZSA9ICRzdGF0ZS5jdXJyZW50Lm5hbWUgfHwgJ21haW4nO1xuICAgICRzdGF0ZS5nbyhzdGF0ZSwgJHN0YXRlUGFyYW1zKTtcbiAgfTtcblxuICAkcm9vdFNjb3BlLnNldFBhcmFtV2l0aFZhbCA9IGZ1bmN0aW9uIChwYXJhbU5hbWUsIHZhbCkge1xuICAgICRzdGF0ZVBhcmFtc1twYXJhbU5hbWVdID0gdmFsO1xuICAgIHZhciBzdGF0ZSA9ICRzdGF0ZS5jdXJyZW50Lm5hbWUgfHwgJ21haW4nO1xuICAgICRzdGF0ZS5nbyhzdGF0ZSwgJHN0YXRlUGFyYW1zKTtcbiAgfTtcbiAgZGVidWcuJHJvb3RTY29wZSA9ICRyb290U2NvcGU7XG5cblxuICAkcm9vdFNjb3BlLm9wZW5QYXJhbSA9IGZ1bmN0aW9uKHBhcmFtTmFtZSkge1xuICAgIHZhciBib29sID0gJHN0YXRlUGFyYW1zW3BhcmFtTmFtZV07XG4gICAgaWYgKCFib29sKSB7XG4gICAgICAvLyBtdXRleCBsb2dpYyB0aGF0IG1ha2VzIG9ubHkgMSBwYW5lbCBvcGVuIGF0IGEgdGltZVxuICAgICAgZm9yICh2YXIgcGFyYW0gaW4gJHN0YXRlUGFyYW1zKSB7XG4gICAgICAgIGlmICgkc3RhdGVQYXJhbXNbcGFyYW1dID09PSAnb3BlbicpIHtcbiAgICAgICAgICAkc3RhdGVQYXJhbXNbcGFyYW1dID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgJHN0YXRlUGFyYW1zW3BhcmFtTmFtZV0gPSAnb3Blbic7XG4gICAgICB2YXIgc3RhdGUgPSAkc3RhdGUuY3VycmVudC5uYW1lIHx8ICdtYWluJztcbiAgICAgICRzdGF0ZS5nbyhzdGF0ZSwgJHN0YXRlUGFyYW1zKTtcbiAgICB9XG4gIH07XG5cbiAgJHJvb3RTY29wZS5jbG9zZVBhcmFtID0gZnVuY3Rpb24ocGFyYW1OYW1lKSB7XG4gICAgdmFyIGJvb2wgPSAkc3RhdGVQYXJhbXNbcGFyYW1OYW1lXTtcbiAgICBpZiAoYm9vbCkge1xuICAgICAgZGVsZXRlICRzdGF0ZVBhcmFtc1twYXJhbU5hbWVdO1xuICAgICAgdmFyIHN0YXRlID0gJHN0YXRlLmN1cnJlbnQubmFtZSB8fCAnbWFpbic7XG4gICAgICAkc3RhdGUuZ28oc3RhdGUsICRzdGF0ZVBhcmFtcyk7XG4gICAgfVxuICB9O1xuXG4gICRyb290U2NvcGUuaXNOb3RTdGF0ZSA9IGZ1bmN0aW9uIChzdGF0ZU5hbWUpIHtcbiAgICByZXR1cm4gJHN0YXRlLiRjdXJyZW50Lm5hbWUgIT09IHN0YXRlTmFtZTtcbiAgfTtcblxuICB3aW5kb3cuJHN0YXRlID0gJHN0YXRlO1xuICB3aW5kb3cuJHN0YXRlUGFyYW1zID0gJHN0YXRlUGFyYW1zO1xuXG59KTtcblxuR2VvQW5ndWxhci5jb25maWcoZnVuY3Rpb24gKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpIHtcbiAgJHVybFJvdXRlclByb3ZpZGVyXG4gICAgLndoZW4oJy9kZWZhdWx0JywgJy9tYXBAMC4xLDAuMSwyKHNhdGVsbGl0ZSxnYWRtMCksZGlzYXN0ZXInKVxuICAgIC53aGVuKCcvcGhsJywgJy9tYXBAMTEuNzU5ODE1LDEyMS44OTMzMTEsNihyZWRjcm9zcyxwaGwpLGRpc2FzdGVyJylcbiAgICAub3RoZXJ3aXNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdkZWZhdWx0Um91dGUnKSB8fCAnL21hcEAwLDAsMihzYXRlbGxpdGUsZ2FkbTApLGRpc2FzdGVyJyk7XG5cbiAgJHN0YXRlUHJvdmlkZXJcbiAgICAuc3RhdGUoJ21haW4nLCB7XG4gICAgICB1cmw6ICcvbWFwQDpsYXQsOmxuZyw6em9vbSgqbGF5ZXJzKSw6dGhlbWU/em9vbS1leHRlbnQmc3RvcmllcyZsYXllcnMtcGFuZWwmZmlsdGVycy1wYW5lbCZmaWx0ZXJzJmxlZ2VuZCZiYXNlbWFwcyZpbmZvJnRpdGxlJmRldGFpbHMtcGFuZWwmc2VhcmNoLXBhbmVsJnNmX2lkJmxldmVsJnRoZW1lbGFiZWxzJyxcbiAgICAgIHZpZXdzOiB7XG4gICAgICAgICdkZXRhaWxzJzoge1xuICAgICAgICAgIHRlbXBsYXRlOiAnICcsXG4gICAgICAgICAgY29udHJvbGxlcjogJ01haW5DdHJsJ1xuICAgICAgICB9LFxuICAgICAgICAndGhlbWUnOiB7XG4gICAgICAgICAgdGVtcGxhdGVVcmw6ICd2aWV3cy90aGVtZS5odG1sJyxcbiAgICAgICAgICBjb250cm9sbGVyOiAnVGhlbWVDdHJsJ1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgICAuc3RhdGUoJ3VwbG9hZCcsIHtcbiAgICAgIHVybDogJy9tYXBAOmxhdCw6bG5nLDp6b29tKCpsYXllcnMpOnRoZW1lL3VwbG9hZD96b29tLWV4dGVudCZzdG9yaWVzJmxheWVycy1wYW5lbCZmaWx0ZXJzLXBhbmVsJmZpbHRlcnMmbGVnZW5kJmJhc2VtYXBzJmluZm8mdGl0bGUmZGV0YWlscy1wYW5lbCZzZWFyY2gtcGFuZWwmc2ZfaWQmbGV2ZWwmdGhlbWVsYWJlbHMnLFxuICAgICAgdmlld3M6IHtcbiAgICAgICAgJ2RldGFpbHMnOiB7XG4gICAgICAgICAgdGVtcGxhdGU6ICcgJyxcbiAgICAgICAgICBjb250cm9sbGVyOiAnTWFpbkN0cmwnXG4gICAgICAgIH0sXG4gICAgICAgICd1cGxvYWQnOiB7XG4gICAgICAgICAgdGVtcGxhdGVVcmw6ICd2aWV3cy91cGxvYWQuaHRtbCcsXG4gICAgICAgICAgY29udHJvbGxlcjogJ1VwbG9hZEN0cmwnXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICAgIC5zdGF0ZSgnZXhwb3J0Jywge1xuICAgICAgIHVybDogJy9tYXBAOmxhdCw6bG5nLDp6b29tKCpsYXllcnMpLDp0aGVtZS9leHBvcnQ/em9vbS1leHRlbnQmc3RvcmllcyZsYXllcnMtcGFuZWwmZmlsdGVycy1wYW5lbCZmaWx0ZXJzJmxlZ2VuZCZiYXNlbWFwcyZpbmZvJnRpdGxlJmRldGFpbHMtcGFuZWwmc2VhcmNoLXBhbmVsJnNmX2lkJmxldmVsJnRoZW1lbGFiZWxzJyxcbiAgICAgICAgICB2aWV3czoge1xuICAgICAgICAgICAgICAnZGV0YWlscyc6IHtcbiAgICAgICAgICAgICAgICAgIHRlbXBsYXRlOiAnICcsXG4gICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnTWFpbkN0cmwnXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICdleHBvcnQnOiB7XG4gICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3ZpZXdzL2V4cG9ydC5odG1sJyxcbiAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdFeHBvcnRDdHJsJ1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICB9KTtcblxufSk7XG5cblxuR2VvQW5ndWxhci5kaXJlY3RpdmUoJ3NlbGVjdE9uQ2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB7XG4gICAgcmVzdHJpY3Q6ICdBJyxcbiAgICBsaW5rOiBmdW5jdGlvbiAoc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSB7XG4gICAgICBlbGVtZW50Lm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5zZWxlY3QoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcbn0pO1xuXG5cbmFuZ3VsYXIubW9kdWxlKCdHZW9Bbmd1bGFyJykuZGlyZWN0aXZlKCdteVNob3cnLCBmdW5jdGlvbigkYW5pbWF0ZSkge1xuICByZXR1cm4ge1xuICAgIHNjb3BlOiB7XG4gICAgICAnbXlTaG93JzogJz0nLFxuICAgICAgJ2FmdGVyU2hvdyc6ICcmJyxcbiAgICAgICdhZnRlckhpZGUnOiAnJidcbiAgICB9LFxuICAgIGxpbms6IGZ1bmN0aW9uKHNjb3BlLCBlbGVtZW50KSB7XG4gICAgICBzY29wZS4kd2F0Y2goJ215U2hvdycsIGZ1bmN0aW9uKHNob3csIG9sZFNob3cpIHtcbiAgICAgICAgaWYgKHNob3cpIHtcbiAgICAgICAgICAkYW5pbWF0ZS5yZW1vdmVDbGFzcyhlbGVtZW50LCAnbmctaGlkZScsIHNjb3BlLmFmdGVyU2hvdyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFzaG93KSB7XG4gICAgICAgICAgJGFuaW1hdGUuYWRkQ2xhc3MoZWxlbWVudCwgJ25nLWhpZGUnLCBzY29wZS5hZnRlckhpZGUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn0pO1xuXG5cbnJlcXVpcmUoJy4vc2VydmljZXMvTGF5ZXJDb25maWcnKTtcbnJlcXVpcmUoJy4vc2VydmljZXMvU3Rvcmllc0NvbmZpZycpO1xucmVxdWlyZSgnLi9zZXJ2aWNlcy9WZWN0b3IvVmVjdG9yUHJvdmlkZXInKTtcbnJlcXVpcmUoJy4vc2VydmljZXMvRG9udXRzJyk7XG5yZXF1aXJlKCcuL2NvbnRyb2xsZXJzL21haW4nKTtcbnJlcXVpcmUoJy4vY29udHJvbGxlcnMvbWFwJyk7XG5yZXF1aXJlKCcuL2NvbnRyb2xsZXJzL2RldGFpbHMnKTtcbnJlcXVpcmUoJy4vY29udHJvbGxlcnMvbmF2YmFyJyk7XG5yZXF1aXJlKCcuL2NvbnRyb2xsZXJzL3NpZGUtdmlldycpO1xucmVxdWlyZSgnLi9jb250cm9sbGVycy9zdG9yaWVzJyk7XG5yZXF1aXJlKCcuL2NvbnRyb2xsZXJzL2xheWVycycpO1xucmVxdWlyZSgnLi9jb250cm9sbGVycy9maWx0ZXJzJyk7XG5yZXF1aXJlKCcuL2NvbnRyb2xsZXJzL2xlZ2VuZCcpO1xucmVxdWlyZSgnLi9jb250cm9sbGVycy9pbmZvJyk7XG5yZXF1aXJlKCcuL2NvbnRyb2xsZXJzL2Jhc2VtYXBzJyk7XG5yZXF1aXJlKCcuL2NvbnRyb2xsZXJzL2JyZWFkY3J1bWJzJyk7XG5yZXF1aXJlKCcuL2NvbnRyb2xsZXJzL3pvb20tZXh0ZW50Jyk7XG5yZXF1aXJlKCcuL2NvbnRyb2xsZXJzL3RoZW1lJyk7XG5yZXF1aXJlKCcuL2NvbnRyb2xsZXJzL3VwbG9hZCcpO1xucmVxdWlyZSgnLi9jb250cm9sbGVycy9zZWFyY2gnKTtcbnJlcXVpcmUoJy4vY29udHJvbGxlcnMvZXhwb3J0Jyk7XG5yZXF1aXJlKCcuLi9saWIvTGVhZmxldC5NYXBib3hWZWN0b3JUaWxlL3NyYy9NVlRTb3VyY2UuanMnKTtcblxuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IFJ5YW4gV2hpdGxleSA8cndoaXRsZXlAc3BhdGlhbGRldi5jb20+XG4gKiAgICAgICBvbiAzLzI4LzE0LlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ0dlb0FuZ3VsYXInKS5jb250cm9sbGVyKCdCYXNlbWFwc0N0cmwnLCBmdW5jdGlvbigkc2NvcGUsICRzdGF0ZSwgJHN0YXRlUGFyYW1zLCBMYXllckNvbmZpZykge1xuICAkc2NvcGUuYmFzZW1hcHMgPSBMYXllckNvbmZpZy5iYXNlbWFwcztcblxuICAkc2NvcGUubmFtZSA9IGZ1bmN0aW9uIChhbGlhcykge1xuICAgIHJldHVybiBMYXllckNvbmZpZ1thbGlhc10ubmFtZSB8fCBhbGlhcztcbiAgfTtcblxuICAkc2NvcGUuZ2V0TGF5ZXJzID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKCEgJHN0YXRlUGFyYW1zIHx8ICEkc3RhdGVQYXJhbXMubGF5ZXJzKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICAgIHZhciBsYXllcnMgPSAkc3RhdGVQYXJhbXMubGF5ZXJzLnNwbGl0KCcsJyk7XG4gICAgcmV0dXJuIGxheWVycztcbiAgfTtcblxuICAkc2NvcGUuY3VycmVudEJhc2VtYXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGxheWVycyA9ICRzY29wZS5nZXRMYXllcnMoKTtcbiAgICBpZiAoIWxheWVycykgcmV0dXJuIG51bGw7XG4gICAgcmV0dXJuIGxheWVyc1swXTtcbiAgfTtcblxuICAkc2NvcGUuc3dhcEJhc2VtYXAgPSBmdW5jdGlvbiAoYmFzZW1hcCkge1xuICAgIHZhciBsYXllcnMgPSAkc2NvcGUuZ2V0TGF5ZXJzKCk7XG4gICAgbGF5ZXJzWzBdID0gYmFzZW1hcDtcbiAgICBsYXllcnMgPSBsYXllcnMuam9pbignLCcpO1xuICAgIGFuZ3VsYXIuZXh0ZW5kKCRzdGF0ZVBhcmFtcywge1xuICAgICAgbGF5ZXJzOiBsYXllcnNcbiAgICB9KTtcbiAgICAkc3RhdGUuZ28oJ21haW4nLCAkc3RhdGVQYXJhbXMpO1xuICB9O1xuXG4gICRzY29wZS5pc0FjdGl2ZUJhc2VtYXAgPSBmdW5jdGlvbihiYXNlbWFwKSB7XG4gICAgcmV0dXJuICRzY29wZS5jdXJyZW50QmFzZW1hcCgpID09PSBiYXNlbWFwO1xuICB9O1xuXG59KTsiLCIvKipcbiAqIENyZWF0ZWQgYnkgUnlhbiBXaGl0bGV5IDxyd2hpdGxleUBzcGF0aWFsZGV2LmNvbT5cbiAqICAgICAgIG9uIDQvMTcvMTQuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnR2VvQW5ndWxhcicpLmNvbnRyb2xsZXIoJ0JyZWFkY3J1bWJzQ3RybCcsIGZ1bmN0aW9uKCRzY29wZSwgJHJvb3RTY29wZSwgJHN0YXRlLCAkc3RhdGVQYXJhbXMsICRodHRwLCBWZWN0b3JQcm92aWRlcikge1xuXG4gIC8qKlxuICAgKiBGaXhlcyBDaHJvbWUgTWFnbmlmeWluZyBHbGFzcyBJc3N1ZSAjMjA2XG4gICAqL1xuLy8gIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4vLyAgICB2YXIgdG9vbGJhciA9ICQoJyNNYXBVcHBlclJpZ2h0VG9vbGJhcldyYXBwZXInKTtcbi8vICAgIHdoaWxlICggdG9vbGJhci5oZWlnaHQoKSA+IDQwICkge1xuLy8gICAgICB0b29sYmFyLndpZHRoKCB0b29sYmFyLndpZHRoKCkgKyAxICk7XG4vLyAgICB9XG4vLyAgfSwgMTAwMCk7XG5cblxuXHQvL3ZhciBmdWxsU3RhY2tVUkwgPSBjb25maWcuY2h1YmJzUGF0aCgnc2VydmljZXMvZ2V0QWRtaW5TdGFjaz9mb3JtYXQ9anNvbiZhZG1pbmxldmVsPTphZG1pbmxldmVsJnN0YWNraWQ9Omd1aWQmZGF0YXNvdXJjZT1nYWRtJyk7XG5cdHZhciBmdWxsU3RhY2tVUkwgPSBjb25maWcuY2h1YmJzUGF0aCgnc2VydmljZXMvY3VzdG9tL2N1c3RvbV9vcGVyYXRpb24/bmFtZT1HZXRCcmVhZENydW1ic1dpdGhUaGVtZUNvdW50c0J5SUQmZm9ybWF0PWpzb24mZ2FkbV9sZXZlbD06YWRtaW5sZXZlbCZpZHM9Omd1aWQmZGF0YXNvdXJjZT1nYWRtJnRoZW1lPXByb2plY3RzJyk7XG5cblx0dmFyIGJyZWFkQ3J1bWJGZWF0dXJlcyA9IHt9OyAvL1N0b3JlIHJlc3VsdHMgb2YgdGhlIHN0YWNrIGxvb2t1cCBoZXJlIHNvIHdlIGNhbiByZXVzZS5cblxuXHQkc2NvcGUuJG9uKCdjZW50ZXItZmVhdHVyZScsIGZ1bmN0aW9uIChldmVudCwgZmVhdE9iaikge1xuXG5cdFx0Ly9TZWUgaWYgdGhlIGZlYXR1cmUgc3RhY2sgaGFzIGFscmVhZHkgYmVlbiBzdG9yZWRcblx0XHRpZihicmVhZENydW1iRmVhdHVyZXNbZmVhdE9iai5sZXZlbF0gJiYgYnJlYWRDcnVtYkZlYXR1cmVzW2ZlYXRPYmoubGV2ZWxdW2ZlYXRPYmouZ3VpZF0pe1xuXHRcdFx0Ly9BbHJlYWR5IGhhdmUgaXRcblx0XHRcdHVwZGF0ZUJyZWFkQ3J1bWJzKGJyZWFkQ3J1bWJGZWF0dXJlc1tmZWF0T2JqLmxldmVsXVtmZWF0T2JqLmd1aWRdLCBmZWF0T2JqLmxldmVsKTtcblx0XHR9XG5cdFx0ZWxzZXtcblx0XHRcdC8vR28gZmV0Y2ggaXRcblx0XHRcdC8vVXNpbmcgdGhlIENlbnRlciBGZWF0dXJlJ3MgR1VJRCwgZmV0Y2ggdGhlIGZ1bGwgc3RhY2sgZGV0YWlscy5cblx0XHRcdHZhciB1cmwgPSBmdWxsU3RhY2tVUkwucmVwbGFjZSgnOmFkbWlubGV2ZWwnLCBmZWF0T2JqLmxldmVsKS5yZXBsYWNlKCc6Z3VpZCcsIGZlYXRPYmouZ3VpZCk7XG5cdFx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cblx0XHRcdC8vIEZldGNoIGZyb20gdGhlIHNlcnZlciBvbmx5IGlmIHdlIGRvbid0IGhhdmUgaXQgaW4gdGhlIGhhc2hcblx0XHRcdCRodHRwLmdldCh1cmwpLnN1Y2Nlc3MoZnVuY3Rpb24gKHJlc3VsdCwgc3RhdHVzKSB7XG5cblx0XHRcdFx0aWYgKCFyZXN1bHQgfHwgcmVzdWx0LmVycm9yKSB7XG5cdFx0XHRcdFx0Y29uc29sZS5lcnJvcignVW5hYmxlIHRvIGZldGNoIGZlYXR1cmU6ICcgKyByZXN1bHQuZXJyb3IpO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHZhciBwcm9wZXJ0aWVzID0gcmVzdWx0WzBdO1xuXG5cdFx0XHRcdC8vVXBkYXRlXG4gICAgICAgICAgICAgICAgaWYocHJvcGVydGllcyl7XG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZUJyZWFkQ3J1bWJzKHByb3BlcnRpZXMsIGZlYXRPYmoubGV2ZWwpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vU3RvcmUgaW4gdGhlIGhhc2guXG4gICAgICAgICAgICAgICAgICAgIGlmKGJyZWFkQ3J1bWJGZWF0dXJlc1tmZWF0T2JqLmxldmVsXSl7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhZENydW1iRmVhdHVyZXNbZmVhdE9iai5sZXZlbF1bcHJvcGVydGllc1tcImd1aWRcIiArIGZlYXRPYmoubGV2ZWxdXSA9IHByb3BlcnRpZXM7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFkQ3J1bWJGZWF0dXJlc1tmZWF0T2JqLmxldmVsXSA9IHt9O1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWRDcnVtYkZlYXR1cmVzW2ZlYXRPYmoubGV2ZWxdW3Byb3BlcnRpZXNbXCJndWlkXCIgKyBmZWF0T2JqLmxldmVsXV0gPSBwcm9wZXJ0aWVzO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiXCIpO1xuICAgICAgICAgICAgICAgIH1cblx0XHRcdH0pO1xuXHRcdH1cblx0fSk7XG5cblx0ZnVuY3Rpb24gdXBkYXRlQnJlYWRDcnVtYnMoZmVhdE9iaiwgbGV2ZWwpIHtcblx0XHQvL1VwZGF0ZSBUaGUgQnJlYWRjcnVtYiBkaXNwbGF5XG5cdFx0Ly9DbGVhciBsb3dlciBsZXZlbCBzY29wZSBpdGVtcyBpbiBjYXNlIHdlJ3ZlIHpvb21lZCBvdXRcblx0XHRmb3IgKHZhciB4ID0gbGV2ZWw7IHggPD0gNTsgeCsrKSB7XG5cdFx0XHQvL251bGwgb3V0IGFueSBsZXZlbCB2YWx1ZXMgdGhhdCBhcmUgTE9XRVIgdGhhbiB3aGF0IHdlJ3JlIGN1cnJlbnRseSBsb29raW5nIGF0XG5cdFx0XHQkc2NvcGVbXCJsZXZlbFwiICsgeF0gPSBcIlwiO1xuXHRcdFx0JHNjb3BlW1wiZmVhdFwiICsgeF0gPSBudWxsO1xuXG5cdFx0XHRpZih4ID09IC0xKXtcblx0XHRcdFx0JHNjb3BlW1wibGV2ZWxhcmNcIl0gPSBmZWF0T2JqW1wibmFtZWFyY1wiXTtcblx0XHRcdFx0JHNjb3BlW1wiZmVhdGFyY1wiXSA9IGZlYXRPYmo7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly91c2luZyB0aGUgcmVxdWVzdGVkIGxldmVsLCBkaWcgb3V0IHRoZSBwcm9wZXJ0aWVzIGZvciB0aGF0IGxldmVsIGFuZCBvbmVzIGFib3ZlIGl0XG5cdFx0Zm9yICh2YXIgaSA9IGxldmVsOyBpID49IC0xOyBpLS0pIHtcblx0XHRcdGlmKGkgPT0gLTEpe1xuXHRcdFx0XHQkc2NvcGVbXCJsZXZlbGFyY1wiXSA9IGZlYXRPYmpbXCJuYW1lYXJjXCJdO1xuXHRcdFx0XHQkc2NvcGVbXCJmZWF0YXJjXCJdID0gZmVhdE9iajtcblx0XHRcdH1cblx0XHRcdCRzY29wZVtcImxldmVsXCIgKyBpXSA9IGZlYXRPYmpbXCJuYW1lXCIgKyBpXTtcblx0XHRcdCRzY29wZVtcImZlYXRcIiArIGldID0gZmVhdE9iajtcblx0XHR9XG5cdH1cblxuICAkc2NvcGUuem9vbVRvR1VJRCA9IGZ1bmN0aW9uIChmZWF0T2JqLCBsZXZlbCkge1xuICAgIC8vR2l2ZW4gYSBHVUlELCB6b29tIHRvIHRoZSBmZWF0dXJlLlxuXG4gICAgLy9HcmFiIHRoZSBmZWF0dXJlIGZyb20gdGhlIFZlY3RvclByb3ZpZGVyLlxuICAgIFZlY3RvclByb3ZpZGVyLmZldGNoRmVhdHVyZShmZWF0T2JqW1wiZ3VpZFwiICsgKGxldmVsID49IDAgPyBsZXZlbCA6IFwiYXJjXCIpXSwgbGV2ZWwsIG51bGwsIGZ1bmN0aW9uIChmZWF0KSB7XG4gICAgICAvL01ha2UgYSB0ZW1wIGdlb2pzb24gbGF5ZXIgYW5kIGFkZCB0aGUgZ2VvanNvbi5cbiAgICAgIC8vVGhlbiBncmFiIHRoZSBib3VuZHMgZnJvbSBpdCBhbmQgem9vbSB0byBpdC5cblxuICAgICAgdmFyIGdqbCA9IEwuZ2VvSnNvbihmZWF0Lmdlb21ldHJ5KTtcbiAgICAgICRzY29wZS4kcGFyZW50Lnpvb21Ub0JvdW5kcyhnamwuZ2V0Qm91bmRzKCkpO1xuICAgIH0pO1xuICB9O1xuXG4gICRzY29wZS56b29tVG9Xb3JsZCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgYm91bmRzID0gTC5sYXRMbmdCb3VuZHMoTC5sYXRMbmcoLTUwLC0xNzkpLCBMLmxhdExuZyg1MCwxNzkpKTtcbiAgICAkc2NvcGUuJHBhcmVudC56b29tVG9Cb3VuZHMoYm91bmRzKTtcbiAgfTtcblxufSk7XG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgTmljaG9sYXMgSGFsbGFoYW4gPG5oYWxsYWhhbkBzcGF0aWFsZGV2LmNvbT5cbiAqICAgICAgIG9uIDQvOS8xNC5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdHZW9Bbmd1bGFyJykuY29udHJvbGxlcignRGV0YWlsc0N0cmwnLCBmdW5jdGlvbiAoJHNjb3BlLCAkcm9vdFNjb3BlLCAkc3RhdGUsICRzdGF0ZVBhcmFtcywgJGh0dHAsIERvbnV0cywgJGZpbHRlcikge1xuXG4gICRzY29wZS5kZXRhaWxzID0ge307XG5cbiAgJHNjb3BlLnNhbGVzZm9yY2VVcmwgPSBjb25maWcuc2FsZXNmb3JjZVVybDtcblxuICAkaHR0cC5nZXQoJ3N1Y2N1YnVzX2dpdGlnbm9yZS9zZi1vYmplY3QtZmllbGQtaGFzaC5qc29uJywge2NhY2hlZDogdHJ1ZX0pLnN1Y2Nlc3MoZnVuY3Rpb24oc2ZGaWVsZEhhc2gpIHtcbiAgICAkc2NvcGUuc2ZGaWVsZEhhc2ggPSBzZkZpZWxkSGFzaDtcbiAgfSk7XG5cbiAgJHNjb3BlLnNob3dSZmEgPSBmdW5jdGlvbiAoZGV0YWlscywgdmFsdWUpIHtcbiAgICBkZXRhaWxzLnNob3dSZmEgPSB0cnVlO1xuICAgIHZhbHVlLnNob3dSZmEgPSB0cnVlO1xuICB9O1xuXG4gICRzY29wZS5oaWRlUmZhID0gZnVuY3Rpb24gKGRldGFpbHMsIHZhbHVlKSB7XG4gICAgZGV0YWlscy5zaG93UmZhID0gZmFsc2U7XG4gICAgdmFsdWUuc2hvd1JmYSA9IGZhbHNlO1xuICB9O1xuXG4gICRzY29wZS5zaG93SW5kaWNhdG9ycyA9IGZ1bmN0aW9uIChkZXRhaWxzLCB2YWx1ZSkge1xuICAgIGRldGFpbHMuc2hvd0luZGljYXRvcnMgPSB0cnVlO1xuICAgIHZhbHVlLnNob3dJbmRpY2F0b3JzID0gdHJ1ZTtcbiAgfTtcblxuICAkc2NvcGUuaGlkZUluZGljYXRvcnMgPSBmdW5jdGlvbiAoZGV0YWlscywgdmFsdWUpIHtcbiAgICBkZXRhaWxzLnNob3dJbmRpY2F0b3JzID0gZmFsc2U7XG4gICAgdmFsdWUuc2hvd0luZGljYXRvcnMgPSBmYWxzZTtcbiAgfTtcblxuICAkc2NvcGUuc2hvd1Jpc2tzID0gZnVuY3Rpb24gKGRldGFpbHMsIHZhbHVlKSB7XG4gICAgICBkZXRhaWxzLnNob3dSaXNrcyA9IHRydWU7XG4gICAgICB2YWx1ZS5zaG93Umlza3MgPSB0cnVlO1xuICB9O1xuXG4gICRzY29wZS5oaWRlUmlza3MgPSBmdW5jdGlvbiAoZGV0YWlscywgdmFsdWUpIHtcbiAgICAgIGRldGFpbHMuc2hvd1Jpc2tzID0gZmFsc2U7XG4gICAgICB2YWx1ZS5zaG93Umlza3MgPSBmYWxzZTtcbiAgfTtcblxuICAkc2NvcGUuc2hvd1N0YXR1c2VzID0gZnVuY3Rpb24gKGRldGFpbHMsIHZhbHVlKSB7XG4gICAgICBkZXRhaWxzLnNob3dTdGF0dXNlcyA9IHRydWU7XG4gICAgICB2YWx1ZS5zaG93U3RhdHVzZXMgPSB0cnVlO1xuICB9O1xuXG4gICRzY29wZS5oaWRlU3RhdHVzZXMgPSBmdW5jdGlvbiAoZGV0YWlscywgdmFsdWUpIHtcbiAgICAgIGRldGFpbHMuc2hvd1N0YXR1c2VzID0gZmFsc2U7XG4gICAgICB2YWx1ZS5zaG93U3RhdHVzZXMgPSBmYWxzZTtcbiAgfTtcblxuICAkc2NvcGUubGFiZWwgPSBmdW5jdGlvbiAoa2V5KSB7XG5cbiAgICB2YXIgZGVzYyA9IGtleTtcblxuICAgIC8vIGRpc2FzdGVyXG4gICAgaWYgKCRzdGF0ZVBhcmFtcy50aGVtZSA9PT0gJ2Rpc2FzdGVyJykge1xuXG4gICAgICBpZiAoJHNjb3BlLnNmRmllbGRIYXNoLkRpc2FzdGVyX19jW2tleV0pIHtcbiAgICAgICAgZGVzYyA9ICRzY29wZS5zZkZpZWxkSGFzaC5EaXNhc3Rlcl9fY1trZXldLmxhYmVsIHx8IGtleTtcbiAgICAgIH1cblxuICAgICAgaWYgKCRzY29wZS5zZkZpZWxkSGFzaC5Mb2NhdGlvbl9fY1trZXldKSB7XG4gICAgICAgIGRlc2MgPSAkc2NvcGUuc2ZGaWVsZEhhc2guTG9jYXRpb25fX2Nba2V5XS5sYWJlbCB8fCBrZXk7XG4gICAgICB9XG5cbiAgICAgIGlmICgkc2NvcGUuc2ZGaWVsZEhhc2guRGlzYXN0ZXJfTG9jYXRpb25fX2Nba2V5XSkge1xuICAgICAgICBkZXNjID0gJHNjb3BlLnNmRmllbGRIYXNoLkRpc2FzdGVyX0xvY2F0aW9uX19jW2tleV0ubGFiZWwgfHwga2V5O1xuICAgICAgfVxuXG4gICAgICBpZiAoJHNjb3BlLnNmRmllbGRIYXNoLlJlcXVlc3RfRm9yX0Fzc2lzdGFuY2VfX2Nba2V5XSkge1xuICAgICAgICBkZXNjID0gJHNjb3BlLnNmRmllbGRIYXNoLlJlcXVlc3RfRm9yX0Fzc2lzdGFuY2VfX2Nba2V5XS5sYWJlbCB8fCBrZXk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkZXNjO1xuICAgIH1cblxuICAgIC8vIGNvbnRleHR1YWwgbGF5ZXJcbiAgICBpZiAoJHNjb3BlLmNvbnRleHR1YWxMYXllcikge1xuICAgICAgcmV0dXJuIGtleTtcbiAgICB9XG5cblxuICAgIGlmICgkc3RhdGVQYXJhbXMudGhlbWUgPT09ICdwcm9qZWN0UmlzaycpIHtcbiAgICAgIC8vIHByb2plY3RcbiAgICAgIGlmICgkc2NvcGUuc2ZGaWVsZEhhc2guUHJvamVjdF9fY1trZXldKSB7XG4gICAgICAgIGRlc2MgPSAkc2NvcGUuc2ZGaWVsZEhhc2guUHJvamVjdF9fY1trZXldLmxhYmVsIHx8IGtleTtcbiAgICAgIH1cblxuICAgICAgaWYgKCRzY29wZS5zZkZpZWxkSGFzaC5Mb2NhdGlvbl9fY1trZXldKSB7XG4gICAgICAgIGRlc2MgPSAkc2NvcGUuc2ZGaWVsZEhhc2guTG9jYXRpb25fX2Nba2V5XS5sYWJlbCB8fCBrZXk7XG4gICAgICB9XG5cbiAgICAgIGlmICgkc2NvcGUuc2ZGaWVsZEhhc2guUmlza19fY1trZXldKSB7XG4gICAgICAgIGRlc2MgPSAkc2NvcGUuc2ZGaWVsZEhhc2guUmlza19fY1trZXldLmxhYmVsIHx8IGtleTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRlc2M7XG4gICAgfVxuXG5cbiAgICBpZiAoJHN0YXRlUGFyYW1zLnRoZW1lID09PSAncHJvamVjdEhlYWx0aCcpIHtcbiAgICAgIC8vIHByb2plY3RcbiAgICAgIGlmICgkc2NvcGUuc2ZGaWVsZEhhc2guUHJvamVjdF9fY1trZXldKSB7XG4gICAgICAgIGRlc2MgPSAkc2NvcGUuc2ZGaWVsZEhhc2guUHJvamVjdF9fY1trZXldLmxhYmVsIHx8IGtleTtcbiAgICAgIH1cblxuICAgICAgaWYgKCRzY29wZS5zZkZpZWxkSGFzaC5Mb2NhdGlvbl9fY1trZXldKSB7XG4gICAgICAgIGRlc2MgPSAkc2NvcGUuc2ZGaWVsZEhhc2guTG9jYXRpb25fX2Nba2V5XS5sYWJlbCB8fCBrZXk7XG4gICAgICB9XG5cbiAgICAgIGlmICgkc2NvcGUuc2ZGaWVsZEhhc2guUHJvamVjdF9FdmFsdWF0aW9uX19jW2tleV0pIHtcbiAgICAgICAgZGVzYyA9ICRzY29wZS5zZkZpZWxkSGFzaC5Qcm9qZWN0X0V2YWx1YXRpb25fX2Nba2V5XS5sYWJlbCB8fCBrZXk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkZXNjO1xuICAgIH1cblxuICAgIC8vIHByb2plY3RcbiAgICBpZiAoJHNjb3BlLnNmRmllbGRIYXNoLlByb2plY3RfX2Nba2V5XSkge1xuICAgICAgZGVzYyA9ICRzY29wZS5zZkZpZWxkSGFzaC5Qcm9qZWN0X19jW2tleV0ubGFiZWwgfHwga2V5O1xuICAgIH1cblxuICAgIGlmICgkc2NvcGUuc2ZGaWVsZEhhc2guTG9jYXRpb25fX2Nba2V5XSkge1xuICAgICAgZGVzYyA9ICRzY29wZS5zZkZpZWxkSGFzaC5Mb2NhdGlvbl9fY1trZXldLmxhYmVsIHx8IGtleTtcbiAgICB9XG5cbiAgICBpZiAoJHNjb3BlLnNmRmllbGRIYXNoLkluZGljYXRvcl9fY1trZXldKSB7XG4gICAgICBkZXNjID0gJHNjb3BlLnNmRmllbGRIYXNoLkluZGljYXRvcl9fY1trZXldLmxhYmVsIHx8IGtleTtcbiAgICB9XG5cbiAgICBpZiAoJHNjb3BlLnNmRmllbGRIYXNoLkluZGljYXRvcl9WYWx1ZV9fY1trZXldKSB7XG4gICAgICBkZXNjID0gJHNjb3BlLnNmRmllbGRIYXNoLkluZGljYXRvcl9WYWx1ZV9fY1trZXldLmxhYmVsIHx8IGtleTtcbiAgICB9XG5cbiAgICBpZiAoJHNjb3BlLnNmRmllbGRIYXNoLkxvZ2ZyYW1lX0VsZW1lbnRfX2Nba2V5XSkge1xuICAgICAgZGVzYyA9ICRzY29wZS5zZkZpZWxkSGFzaC5Mb2dmcmFtZV9FbGVtZW50X19jW2tleV0ubGFiZWwgfHwga2V5O1xuICAgIH1cblxuICAgIHJldHVybiBkZXNjO1xuXG4gIH07XG5cbiAgJHNjb3BlLnRvb2x0aXAgPSBmdW5jdGlvbiAoa2V5KSB7XG4vLyAgICAoc2ZGaWVsZEhhc2hba2V5XS5pbmxpbmVIZWxwVGV4dCB8fCAnJykgKyAnIEZpZWxkTmFtZTogJyArIGtleVxuXG4gICAgdmFyIGRlc2MgPSAnJztcblxuICAgIC8vIGRpc2FzdGVyXG4gICAgaWYgKCRzdGF0ZVBhcmFtcy50aGVtZSA9PT0gJ2Rpc2FzdGVyJykge1xuXG4gICAgICBpZiAoJHNjb3BlLnNmRmllbGRIYXNoLkRpc2FzdGVyX19jW2tleV0pIHtcbiAgICAgICAgZGVzYyA9ICRzY29wZS5zZkZpZWxkSGFzaC5EaXNhc3Rlcl9fY1trZXldLmlubGluZUhlbHBUZXh0IHx8ICcnO1xuICAgICAgfVxuXG4gICAgICBpZiAoJHNjb3BlLnNmRmllbGRIYXNoLkxvY2F0aW9uX19jW2tleV0pIHtcbiAgICAgICAgZGVzYyA9ICRzY29wZS5zZkZpZWxkSGFzaC5Mb2NhdGlvbl9fY1trZXldLmlubGluZUhlbHBUZXh0IHx8ICcnO1xuICAgICAgfVxuXG4gICAgICBpZiAoJHNjb3BlLnNmRmllbGRIYXNoLkRpc2FzdGVyX0xvY2F0aW9uX19jW2tleV0pIHtcbiAgICAgICAgZGVzYyA9ICRzY29wZS5zZkZpZWxkSGFzaC5EaXNhc3Rlcl9Mb2NhdGlvbl9fY1trZXldLmlubGluZUhlbHBUZXh0IHx8ICcnO1xuICAgICAgfVxuXG4gICAgICBpZiAoJHNjb3BlLnNmRmllbGRIYXNoLlJlcXVlc3RfRm9yX0Fzc2lzdGFuY2VfX2Nba2V5XSkge1xuICAgICAgICBkZXNjID0gJHNjb3BlLnNmRmllbGRIYXNoLlJlcXVlc3RfRm9yX0Fzc2lzdGFuY2VfX2Nba2V5XS5pbmxpbmVIZWxwVGV4dCB8fCAnJztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRlc2MgKyAnIEZpZWxkTmFtZTogJyArIGtleTtcbiAgICB9XG5cbiAgICAvLyBjb250ZXh0dWFsIGxheWVyXG4gICAgaWYgKCRzY29wZS5jb250ZXh0dWFsTGF5ZXIpIHtcbiAgICAgIHJldHVybiAnRmllbGROYW1lOiAnICsga2V5O1xuICAgIH1cblxuICAgIGlmICgkc3RhdGVQYXJhbXMudGhlbWUgPT09ICdwcm9qZWN0UmlzaycpIHtcbiAgICAgIGlmICgkc2NvcGUuc2ZGaWVsZEhhc2guUHJvamVjdF9fY1trZXldKSB7XG4gICAgICAgIGRlc2MgPSAkc2NvcGUuc2ZGaWVsZEhhc2guUHJvamVjdF9fY1trZXldLmlubGluZUhlbHBUZXh0IHx8ICcnO1xuICAgICAgfVxuXG4gICAgICBpZiAoJHNjb3BlLnNmRmllbGRIYXNoLkxvY2F0aW9uX19jW2tleV0pIHtcbiAgICAgICAgZGVzYyA9ICRzY29wZS5zZkZpZWxkSGFzaC5Mb2NhdGlvbl9fY1trZXldLmlubGluZUhlbHBUZXh0IHx8ICcnO1xuICAgICAgfVxuXG4gICAgICBpZiAoJHNjb3BlLnNmRmllbGRIYXNoLlJpc2tfX2Nba2V5XSkge1xuICAgICAgICBkZXNjID0gJHNjb3BlLnNmRmllbGRIYXNoLlJpc2tfX2Nba2V5XS5pbmxpbmVIZWxwVGV4dCB8fCAnJztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRlc2MgKyAnIEZpZWxkTmFtZTogJyArIGtleTtcbiAgICB9XG5cbiAgICBpZiAoJHN0YXRlUGFyYW1zLnRoZW1lID09PSAncHJvamVjdEhlYWx0aCcpIHtcbiAgICAgIGlmICgkc2NvcGUuc2ZGaWVsZEhhc2guUHJvamVjdF9fY1trZXldKSB7XG4gICAgICAgIGRlc2MgPSAkc2NvcGUuc2ZGaWVsZEhhc2guUHJvamVjdF9fY1trZXldLmlubGluZUhlbHBUZXh0IHx8ICcnO1xuICAgICAgfVxuXG4gICAgICBpZiAoJHNjb3BlLnNmRmllbGRIYXNoLkxvY2F0aW9uX19jW2tleV0pIHtcbiAgICAgICAgZGVzYyA9ICRzY29wZS5zZkZpZWxkSGFzaC5Mb2NhdGlvbl9fY1trZXldLmlubGluZUhlbHBUZXh0IHx8ICcnO1xuICAgICAgfVxuXG4gICAgICBpZiAoJHNjb3BlLnNmRmllbGRIYXNoLlByb2plY3RfRXZhbHVhdGlvbl9fY1trZXldKSB7XG4gICAgICAgIGRlc2MgPSAkc2NvcGUuc2ZGaWVsZEhhc2guUHJvamVjdF9FdmFsdWF0aW9uX19jW2tleV0uaW5saW5lSGVscFRleHQgfHwgJyc7XG4gICAgICB9XG4gICAgICByZXR1cm4gZGVzYyArICcgRmllbGROYW1lOiAnICsga2V5O1xuICAgIH1cblxuICAgIC8vIHByb2plY3RcbiAgICBpZiAoJHNjb3BlLnNmRmllbGRIYXNoLlByb2plY3RfX2Nba2V5XSkge1xuICAgICAgZGVzYyA9ICRzY29wZS5zZkZpZWxkSGFzaC5Qcm9qZWN0X19jW2tleV0uaW5saW5lSGVscFRleHQgfHwgJyc7XG4gICAgfVxuXG4gICAgaWYgKCRzY29wZS5zZkZpZWxkSGFzaC5Mb2NhdGlvbl9fY1trZXldKSB7XG4gICAgICBkZXNjID0gJHNjb3BlLnNmRmllbGRIYXNoLkxvY2F0aW9uX19jW2tleV0uaW5saW5lSGVscFRleHQgfHwgJyc7XG4gICAgfVxuXG4gICAgaWYgKCRzY29wZS5zZkZpZWxkSGFzaC5JbmRpY2F0b3JfX2Nba2V5XSkge1xuICAgICAgZGVzYyA9ICRzY29wZS5zZkZpZWxkSGFzaC5JbmRpY2F0b3JfX2Nba2V5XS5pbmxpbmVIZWxwVGV4dCB8fCAnJztcbiAgICB9XG5cbiAgICBpZiAoJHNjb3BlLnNmRmllbGRIYXNoLkluZGljYXRvcl9WYWx1ZV9fY1trZXldKSB7XG4gICAgICBkZXNjID0gJHNjb3BlLnNmRmllbGRIYXNoLkluZGljYXRvcl9WYWx1ZV9fY1trZXldLmlubGluZUhlbHBUZXh0IHx8ICcnO1xuICAgIH1cblxuICAgIGlmICgkc2NvcGUuc2ZGaWVsZEhhc2guTG9nZnJhbWVfRWxlbWVudF9fY1trZXldKSB7XG4gICAgICBkZXNjID0gJHNjb3BlLnNmRmllbGRIYXNoLkxvZ2ZyYW1lX0VsZW1lbnRfX2Nba2V5XS5pbmxpbmVIZWxwVGV4dCB8fCAnJztcbiAgICB9XG5cbiAgICByZXR1cm4gZGVzYyArICcgRmllbGROYW1lOiAnICsga2V5O1xuXG4gIH07XG5cbiAgLy9Jbml0IHNlbGVjdGVkRmVhdHVyZVRpdGxlIHByb3BlcnR5XG4gICRzY29wZS50aXRsZT0gXCJGZWF0dXJlIERldGFpbHNcIjtcblxuICB2YXIgc29ydERldGFpbHMgPSBmdW5jdGlvbigpe1xuICAgIHZhciBwcm9qZWN0a2V5ID0gT2JqZWN0LmtleXMoJHNjb3BlLmdyb3VwaW5ncylbMF07XG5cbiAgICAvLyBQcm9qZWN0cyBhbmQgUHJvamVjdCBSaXNrIGhhdmUgc2FtZSBzb3J0aW5nIHJ1bGVzXG4gICAgaWYoJHNjb3BlLmdyb3VwaW5ncy5oYXNPd25Qcm9wZXJ0eSgnUHJvamVjdHMnKT09dHJ1ZSB8fCAkc2NvcGUuZ3JvdXBpbmdzLmhhc093blByb3BlcnR5KCdQcm9qZWN0IFJpc2snKT09dHJ1ZSl7XG4gICAgICAkc2NvcGUuZ3JvdXBpbmdzW3Byb2plY3RrZXldID0gU29ydEJ5UHJvamVjdFJpc2soJHNjb3BlLmdyb3VwaW5nc1twcm9qZWN0a2V5XSk7XG4gICAgfTtcblxuICAgIGlmKCRzY29wZS5ncm91cGluZ3MuaGFzT3duUHJvcGVydHkoJ1Byb2plY3QgSGVhbHRoJyk9PXRydWUpe1xuICAgICAgJHNjb3BlLmdyb3VwaW5nc1twcm9qZWN0a2V5XSA9IFNvcnRCeVByb2plY3RIZWFsdGgoJHNjb3BlLmdyb3VwaW5nc1twcm9qZWN0a2V5XSk7XG4gICAgfTtcblxuICAgIGlmKCRzY29wZS5ncm91cGluZ3MuaGFzT3duUHJvcGVydHkoJ0Rpc2FzdGVycycpPT10cnVlKXtcbiAgICAgICRzY29wZS5ncm91cGluZ3NbJ0Rpc2FzdGVycyddID0gU29yeUJ5RGlzYXN0ZXIoJHNjb3BlLmdyb3VwaW5nc1snRGlzYXN0ZXJzJ10pO1xuICAgIH07XG5cbiAgfTtcblxuICAkc2NvcGUudG9nZ2xlU3RhdGUgPSBmdW5jdGlvbihzdGF0ZU5hbWUpIHtcbiAgICB2YXIgc3RhdGUgPSAkc3RhdGUuY3VycmVudC5uYW1lICE9PSBzdGF0ZU5hbWUgPyBzdGF0ZU5hbWUgOiAnbWFpbic7XG4gICAgJHN0YXRlLmdvKHN0YXRlLCAkc3RhdGVQYXJhbXMpO1xuICB9O1xuXG4gICRzY29wZS5pdGVtc0xpc3QgPSB0cnVlO1xuICAkc2NvcGUuZGV0YWlscyA9IGZhbHNlO1xuXG5cbiAgLy9Jbml0aWFsaXplIHRoZSBkdW1teSBwcm9qZWN0L2Rpc2FzdGVyIGNsaWNrIHJlc3VsdHNcbiAgJHNjb3BlLmdyb3VwaW5ncyA9IHt9O1xuXG4gICRzY29wZS5hbGVydFVzZXJUb0NsaWNrID0gdHJ1ZTtcblxuICAkc2NvcGUuJG9uKCdkZXRhaWxzJywgZnVuY3Rpb24gKGV2ZW50LCBmZWF0dXJlTGF5ZXIpIHtcbiAgICAkc2NvcGUuYWxlcnRVc2VyVG9DbGljayA9IGZhbHNlO1xuICAgIHZhciBwcm9wZXJ0aWVzID0gZmVhdHVyZUxheWVyLmZlYXR1cmUucHJvcGVydGllcztcbiAgICAkc2NvcGUuZmVhdHVyZSA9IGZlYXR1cmVMYXllci5mZWF0dXJlO1xuICAgICRzY29wZS50aXRsZSA9ICRzY29wZS5mZWF0dXJlVGl0bGUgPSBwcm9wZXJ0aWVzLm5hbWUgfHwgcHJvcGVydGllcy50aXRsZSB8fCAnU2VsZWN0ZWQgRmVhdHVyZSc7XG4gICAgaWYgKHByb3BlcnRpZXMuc2FsZXNmb3JjZSkgeyAvLyBzYWxlc2ZvcmNlIHRoZW1lIGJhZGdlIHNlbGVjdGVkXG4gICAgICAkc2NvcGUuY29udGV4dHVhbExheWVyID0gZmFsc2U7XG4gICAgICAkc2NvcGUuZ3JvdXBpbmdzID0gcHJvcGVydGllcy5zYWxlc2ZvcmNlO1xuXG4gICAgICBzb3J0RGV0YWlscygpO1xuXG4gICAgICAkc2NvcGUubnVtVGhlbWVJdGVtcyA9ICQubWFwKHByb3BlcnRpZXMuc2FsZXNmb3JjZSwgZnVuY3Rpb24obikgeyByZXR1cm4gbn0pLmxlbmd0aDtcbiAgICAgICRzY29wZS5zaG93TGlzdCgpO1xuICAgICAgJHNjb3BlLm9wZW5QYXJhbSgnZGV0YWlscy1wYW5lbCcpO1xuICAgICAgJHNjb3BlLmNyZWF0ZURvbnV0cygpO1xuICAgIH0gZWxzZSB7IC8vIHN0YW5kYXJkIGdlb2pzb24sIHNob3cgcHJvcGVydGllcyBhcyBkZXRhaWxzXG5cbiAgICAgICRzY29wZS5jb250ZXh0dWFsTGF5ZXIgPSAocHJvcGVydGllcy5zZl9pZCA/IGZhbHNlIDogdHJ1ZSk7XG4gICAgICAkc2NvcGUuc2hvd0RldGFpbHMocHJvcGVydGllcyk7XG4gICAgICAkc2NvcGUub3BlblBhcmFtKCdkZXRhaWxzLXBhbmVsJyk7XG4gICAgfVxuICAgICRzY29wZS5yZXNpemVEZXRhaWxzUGFuZWwoKTtcbiAgfSk7XG5cbiAgdmFyIFNvcnRCeVByb2plY3RSaXNrID0gZnVuY3Rpb24oYXJyKXtcbiAgICBhcnIuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgaWYgKGNvbmZpZy5Qcm9qZWN0Umlza09yZGVyW2Eub3ZlcmFsbF9hc3Nlc3NtZW50X19jXSA8IGNvbmZpZy5Qcm9qZWN0Umlza09yZGVyW2Iub3ZlcmFsbF9hc3Nlc3NtZW50X19jXSkge1xuICAgICAgICByZXR1cm4gMTtcbiAgICAgIH1cbiAgICAgIGlmIChjb25maWcuUHJvamVjdFJpc2tPcmRlclthLm92ZXJhbGxfYXNzZXNzbWVudF9fY10gPiBjb25maWcuUHJvamVjdFJpc2tPcmRlcltiLm92ZXJhbGxfYXNzZXNzbWVudF9fY10pIHtcbiAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgfVxuICAgICAgLy8gYSBtdXN0IGJlIGVxdWFsIHRvIGJcbiAgICAgIHJldHVybiAwO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGFycjtcbiAgfTtcbiAgdmFyIFNvcnlCeURpc2FzdGVyID0gZnVuY3Rpb24oYXJyKXtcbiAgICBhcnIuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgaWYgKGNvbmZpZy5EaXNhc3Rlck9yZGVyW2EuaXJvY19zdGF0dXNfX2NdIDwgY29uZmlnLkRpc2FzdGVyT3JkZXJbYi5pcm9jX3N0YXR1c19fY10pIHtcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgICB9XG4gICAgICBpZiAoY29uZmlnLkRpc2FzdGVyT3JkZXJbYS5pcm9jX3N0YXR1c19fY10gPiBjb25maWcuRGlzYXN0ZXJPcmRlcltiLmlyb2Nfc3RhdHVzX19jXSkge1xuICAgICAgICByZXR1cm4gLTE7XG4gICAgICB9XG4gICAgICAvLyBpbiBjYXNlIG9mIGEgdGllOyBvcmRlciBieSBkYXRlXG4gICAgICByZXR1cm4gbmV3IERhdGUoYi5kYXRlX19jKSAtIG5ldyBEYXRlKGEuZGF0ZV9fYyk7XG5cbiAgICB9KTtcblxuICAgIHJldHVybiBhcnI7XG4gIH07XG4gIHZhciBTb3J0QnlQcm9qZWN0SGVhbHRoID0gZnVuY3Rpb24oYXJyKXtcbiAgICBhcnIuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgaWYgKGNvbmZpZy5Qcm9qZWN0SGVhbHRoT3JkZXJbYS5vdmVyYWxsX3N0YXR1c19fY10gPCBjb25maWcuUHJvamVjdEhlYWx0aE9yZGVyW2Iub3ZlcmFsbF9zdGF0dXNfX2NdKSB7XG4gICAgICAgIHJldHVybiAxO1xuICAgICAgfVxuICAgICAgaWYgKGNvbmZpZy5Qcm9qZWN0SGVhbHRoT3JkZXJbYS5vdmVyYWxsX3N0YXR1c19fY10gPiBjb25maWcuUHJvamVjdEhlYWx0aE9yZGVyW2Iub3ZlcmFsbF9zdGF0dXNfX2NdKSB7XG4gICAgICAgIHJldHVybiAtMTtcbiAgICAgIH1cbiAgICAgIC8vIGEgbXVzdCBiZSBlcXVhbCB0byBiXG4gICAgICByZXR1cm4gMDtcbiAgICB9KTtcblxuICAgIHJldHVybiBhcnI7XG4gIH07XG5cblxuICAkc2NvcGUuJG9uKCdyb3V0ZS11cGRhdGUnLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNmX2lkID0gJHN0YXRlUGFyYW1zLnNmX2lkO1xuICAgICRzY29wZS50aGVtZSA9ICRzdGF0ZVBhcmFtcy50aGVtZTtcbiAgICBpZiAoJHNjb3BlLmFsZXJ0VXNlclRvQ2xpY2sgPT09IGZhbHNlKSByZXR1cm47XG4gICAgaWYgKHNmX2lkICYmIHR5cGVvZiBzZl9pZCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHZhciB1cmwgPSBjb25maWcuY2h1YmJzUGF0aCgnc2VydmljZXMvY3VzdG9tL2N1c3RvbV9vcGVyYXRpb24/bmFtZT1kb2Vjb3N0ZXh0c2VhcmNoJmZvcm1hdD1qc29uJnRleHQ9JykgKyBzZl9pZDtcbiAgICAgICRodHRwLmdldCh1cmwpLnN1Y2Nlc3MoZnVuY3Rpb24gKHJlc3VsdCwgc3RhdHVzKSB7XG4gICAgICAgIGlmIChyZXN1bHRbMF0pIHtcbiAgICAgICAgICAkcm9vdFNjb3BlLiRicm9hZGNhc3QoJ2RldGFpbHMnLCB7IGZlYXR1cmU6IHsgcHJvcGVydGllczogcmVzdWx0WzBdIH0gfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG5cbiAgJHNjb3BlLmNyZWF0ZURvbnV0cyA9IGZ1bmN0aW9uKCkge1xuICAgIC8vIHVzZXMganF1ZXJ5IHRvIHB1dCBkb251dCBpbiBhIGRpdi5cbiAgICBpZiAoJHNjb3BlLmdyb3VwaW5ncyAmJiAkc2NvcGUuZ3JvdXBpbmdzLlByb2plY3RzKSB7XG4gICAgICBEb251dHMuY3JlYXRlTGFiZWxEb251dCgkc2NvcGUuc2ZGaWVsZEhhc2guUHJvamVjdF9fYy5zZWN0b3JfX2MucGlja2xpc3RWYWx1ZXMsICRzY29wZS5ncm91cGluZ3MuUHJvamVjdHMsICcjZGV0YWlscy1kb251dCcpO1xuICAgIH1cbiAgfTtcblxuICAkc2NvcGUubW9yZUxlc3MgPSAnTW9yZSc7XG5cbiAgJHNjb3BlLnRvZ2dsZU1vcmVMZXNzID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICgkc2NvcGUubW9yZUxlc3MgPT09ICdNb3JlJykge1xuICAgICAgJHNjb3BlLm1vcmVMZXNzID0gJ0xlc3MnO1xuICAgIH0gZWxzZSB7XG4gICAgICAkc2NvcGUubW9yZUxlc3MgPSAnTW9yZSc7XG4gICAgfVxuICAgIC8vUmVzaXplO1xuICAgICRzY29wZS5yZXNpemVEZXRhaWxzUGFuZWwoKTtcbiAgfTtcblxuICAkc2NvcGUuc2hvd0RldGFpbHMgPSBmdW5jdGlvbiAoaXRlbSwgdGhlbWVJdGVtcywgaWR4KSB7XG4gICAgaWYgKGl0ZW0uc2ZfaWQpIHtcbiAgICAgICRyb290U2NvcGUuc2V0UGFyYW1XaXRoVmFsKCdzZl9pZCcsIGl0ZW0uc2ZfaWQpO1xuICAgIH1cbiAgICBpZiAoaXRlbS5uYW1lIHx8IGl0ZW0udGl0bGUpIHtcbiAgICAgICRzY29wZS50aXRsZSA9IGl0ZW0ubmFtZSB8fCBpdGVtLnRpdGxlO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgaWR4ID09PSAnbnVtYmVyJykgJHNjb3BlLmFjdGl2ZVRoZW1lSXRlbUlkeCA9IGlkeDtcbiAgICBpZiAodGhlbWVJdGVtcykgJHNjb3BlLmFjdGl2ZVRoZW1lSXRlbXNMaXN0ID0gdGhlbWVJdGVtcztcblxuICAgICRzY29wZS5pdGVtc0xpc3QgPSBmYWxzZTtcblxuICAgICRzY29wZS5kZXRhaWxzID0gcmVtb3ZlVW53YW50ZWRJdGVtcyhmb3JtYXREZXRhaWxzKGl0ZW0sICRzdGF0ZVBhcmFtcy50aGVtZSksICRzdGF0ZVBhcmFtcy50aGVtZSk7XG5cbiAgICBpZiAoISRzY29wZS5jb250ZXh0dWFsTGF5ZXIpIHtcbiAgICAgICRzY29wZS5sZXNzRGV0YWlscyA9IHJlbW92ZVVud2FudGVkSXRlbXMobGVzc0RldGFpbHMoZm9ybWF0RGV0YWlscyhpdGVtLCAkc3RhdGVQYXJhbXMudGhlbWUpKSwgJHN0YXRlUGFyYW1zLnRoZW1lKTtcbiAgICB9XG5cbiAgICAvL0ZpbHRlci9Gb3JtYXQgUkZBcyBhbmQgSW5kaWNhdG9yc1xuICAgIGlmICgkc2NvcGUuZGV0YWlscy5yZXF1ZXN0c0ZvckFzc2lzdGFuY2UgJiYgYW5ndWxhci5pc0FycmF5KCRzY29wZS5kZXRhaWxzLnJlcXVlc3RzRm9yQXNzaXN0YW5jZSkpIHtcbiAgICAgIC8vRmlsdGVyL0Zvcm1hdFxuICAgICAgJHNjb3BlLmRldGFpbHMucmVxdWVzdHNGb3JBc3Npc3RhbmNlID0gJHNjb3BlLmRldGFpbHMucmVxdWVzdHNGb3JBc3Npc3RhbmNlLm1hcChmdW5jdGlvbiAocmZhKSB7XG4gICAgICAgIHJldHVybiByZW1vdmVVbndhbnRlZEl0ZW1zKGZvcm1hdERldGFpbHMocmZhLCBcIlJGQVwiKSwgXCJSRkFcIik7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoJHNjb3BlLmRldGFpbHMuaW5kaWNhdG9ycyAmJiBhbmd1bGFyLmlzQXJyYXkoJHNjb3BlLmRldGFpbHMuaW5kaWNhdG9ycykpIHtcbiAgICAgIC8vRmlsdGVyL0Zvcm1hdFxuICAgICAgJHNjb3BlLmRldGFpbHMuaW5kaWNhdG9ycyA9ICRzY29wZS5kZXRhaWxzLmluZGljYXRvcnMubWFwKGZ1bmN0aW9uIChpbmRpY2F0b3IpIHtcbiAgICAgICAgcmV0dXJuIHJlbW92ZVVud2FudGVkSXRlbXMoZm9ybWF0RGV0YWlscyhpbmRpY2F0b3IsIFwiaW5kaWNhdG9yXCIpLCBcImluZGljYXRvclwiKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmICgkc2NvcGUuZGV0YWlscy5yaXNrcyAmJiBhbmd1bGFyLmlzQXJyYXkoJHNjb3BlLmRldGFpbHMucmlza3MpID09PSB0cnVlKSB7XG4gICAgICAvL0ZpbHRlci9Gb3JtYXRcbiAgICAgICRzY29wZS5kZXRhaWxzLnJpc2tzID0gJHNjb3BlLmRldGFpbHMucmlza3MubWFwKGZ1bmN0aW9uIChyaXNrKSB7XG4gICAgICAgIHJldHVybiByZW1vdmVVbndhbnRlZEl0ZW1zKGZvcm1hdERldGFpbHMocmlzaywgXCJyaXNrXCIpLCBcInJpc2tcIik7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoJHNjb3BlLmRldGFpbHMuc3RhdHVzZXMgJiYgYW5ndWxhci5pc0FycmF5KCRzY29wZS5kZXRhaWxzLnN0YXR1c2VzKSkge1xuICAgICAgLy9GaWx0ZXIvRm9ybWF0XG4gICAgICAkc2NvcGUuZGV0YWlscy5zdGF0dXNlcyA9ICRzY29wZS5kZXRhaWxzLnN0YXR1c2VzLm1hcChmdW5jdGlvbiAoc3RhdHVzKSB7XG4gICAgICAgIHJldHVybiByZW1vdmVVbndhbnRlZEl0ZW1zKGZvcm1hdERldGFpbHMoc3RhdHVzLCBcInN0YXR1c1wiKSwgXCJzdGF0dXNcIik7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvL05lZWQgdG8gd2FpdCB1bnRpbCBkZXRhaWxzIHBhbmVsIHN3aXRjaGVzIG1vZGVzLCBhbmQgdGhlbiBjYWxjdWxhdGUgdGhlIHNpemUuXG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAkc2NvcGUucmVzaXplRGV0YWlsc1BhbmVsKCk7XG4gICAgfSwgMTAwKTtcblxuICB9O1xuXG4gIGZ1bmN0aW9uIHJlbW92ZVVud2FudGVkSXRlbXMoZGV0YWlscywgdHlwZSkge1xuICAgIHZhciBwYXNzdGhyb3VnaERldGFpbHMgPSB7fTtcbiAgICB2YXIgYmxhY2tsaXN0RGljdGlvbmFyeSA9IGNvbmZpZy51bndhbnRlZFByb2plY3REZXRhaWxzO1xuXG4gICAgaWYgKHR5cGUgPT09ICdkaXNhc3RlcicpIHtcbiAgICAgIGJsYWNrbGlzdERpY3Rpb25hcnkgPSBjb25maWcudW53YW50ZWREaXNhc3RlckRldGFpbHM7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgPT09ICdwcm9qZWN0Jykge1xuICAgICAgYmxhY2tsaXN0RGljdGlvbmFyeSA9IGNvbmZpZy51bndhbnRlZFByb2plY3REZXRhaWxzO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlID09PSAnUkZBJykge1xuICAgICAgYmxhY2tsaXN0RGljdGlvbmFyeSA9IGNvbmZpZy51bndhbnRlZFJGQURldGFpbHM7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgPT09ICdpbmRpY2F0b3InKSB7XG4gICAgICBibGFja2xpc3REaWN0aW9uYXJ5ID0gY29uZmlnLnVud2FudGVkSW5kaWNhdG9yRGV0YWlscztcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSA9PT0gJ3Byb2plY3RSaXNrJyB8fCB0eXBlID09PSAncmlzaycpIHtcbiAgICAgIGJsYWNrbGlzdERpY3Rpb25hcnkgPSBjb25maWcudW53YW50ZWRQcm9qZWN0Umlza0RldGFpbHM7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgPT09ICdwcm9qZWN0SGVhbHRoJyB8fCB0eXBlID09PSAnc3RhdHVzJykge1xuICAgICAgYmxhY2tsaXN0RGljdGlvbmFyeSA9IGNvbmZpZy51bndhbnRlZFByb2plY3RIZWFsdGhEZXRhaWxzO1xuICAgIH1cblxuICAgIGZvciAodmFyIGtleSBpbiBkZXRhaWxzKSB7XG4gICAgICB2YXIgYmxhY2tsaXN0ZWQgPSBibGFja2xpc3REaWN0aW9uYXJ5W2tleV07XG4gICAgICBpZiAoYmxhY2tsaXN0ZWQgJiYgKHR5cGVvZiBibGFja2xpc3RlZCA9PT0gJ2Z1bmN0aW9uJykpIHtcbiAgICAgICAgLy9ldmFsdWF0ZSB0aGUgZnVuY3Rpb24gdG8gZGVjaWRlIGlmIHRoZSBrZXkgc2hvdWxkIGJlIHNob3duLlxuICAgICAgICBibGFja2xpc3RlZCA9IGJsYWNrbGlzdGVkKGRldGFpbHNba2V5XSk7XG4gICAgICB9XG4gICAgICBpZiAoIWJsYWNrbGlzdGVkKSB7XG4gICAgICAgIC8vQWxsb3cgdGhlIGl0ZW0gdGhydSBpZiBpdCBpcyBub3QgYmxhY2tsaXN0ZWRcbiAgICAgICAgcGFzc3Rocm91Z2hEZXRhaWxzW2tleV0gPSBkZXRhaWxzW2tleV07XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhc3N0aHJvdWdoRGV0YWlscztcbiAgfVxuXG4gIGZ1bmN0aW9uIGZvcm1hdERldGFpbHMoZGV0YWlscywgdHlwZSkge1xuICAgIHZhciBmb3JtYXR0ZWREZXRhaWxzID0ge307XG4gICAgdmFyIGZvcm1hdHRpbmdEaWN0aW9uYXJ5ID0gY29uZmlnLnByb2plY3REZXRhaWxzRm9ybWF0dGluZztcblxuICAgIGlmICh0eXBlID09PSAnZGlzYXN0ZXInKSB7XG4gICAgICBmb3JtYXR0aW5nRGljdGlvbmFyeSA9IGNvbmZpZy5kaXNhc3RlckRldGFpbHNGb3JtYXR0aW5nO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlID09PSAncHJvamVjdCcpIHtcbiAgICAgIGZvcm1hdHRpbmdEaWN0aW9uYXJ5ID0gY29uZmlnLnByb2plY3REZXRhaWxzRm9ybWF0dGluZztcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSA9PT0gJ1JGQScpIHtcbiAgICAgIGZvcm1hdHRpbmdEaWN0aW9uYXJ5ID0gY29uZmlnLlJGQURldGFpbHNGb3JtYXR0aW5nO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlID09PSAnaW5kaWNhdG9yJykge1xuICAgICAgZm9ybWF0dGluZ0RpY3Rpb25hcnkgPSBjb25maWcuaW5kaWNhdG9yRGV0YWlsc0Zvcm1hdHRpbmc7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgPT09ICdwcm9qZWN0UmlzaycgfHwgdHlwZSA9PT0gJ3Jpc2snKSB7XG4gICAgICBmb3JtYXR0aW5nRGljdGlvbmFyeSA9IGNvbmZpZy5wcm9qZWN0Umlza0RldGFpbHNGb3JtYXR0aW5nO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlID09PSAncHJvamVjdEhlYWx0aCcgfHwgdHlwZSA9PT0gJ3N0YXR1cycpIHtcbiAgICAgIGZvcm1hdHRpbmdEaWN0aW9uYXJ5ID0gY29uZmlnLnByb2plY3RIZWFsdGhEZXRhaWxzRm9ybWF0dGluZztcbiAgICB9XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gZGV0YWlscykge1xuICAgICAgdmFyIGZvcm1hdHRlciA9IGZvcm1hdHRpbmdEaWN0aW9uYXJ5W2tleV07XG4gICAgICBpZiAoZm9ybWF0dGVyKSB7XG4gICAgICAgIHN3aXRjaCAoZm9ybWF0dGVyLnNwbGl0KFwiLFwiKVswXSkge1xuICAgICAgICAgIGNhc2UgXCJjdXJyZW5jeVwiOlxuICAgICAgICAgICAgZm9ybWF0dGVkRGV0YWlsc1trZXldID0gJGZpbHRlcignY3VycmVuY3knKShkZXRhaWxzW2tleV0sIChmb3JtYXR0ZXIuc3BsaXQoXCIsXCIpWzFdIHx8IFwiVVNEXCIpKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSBcIm51bWJlclwiOlxuICAgICAgICAgICAgZm9ybWF0dGVkRGV0YWlsc1trZXldID0gJGZpbHRlcignbnVtYmVyJykoZGV0YWlsc1trZXldKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSBcImRhdGVcIjpcbiAgICAgICAgICAgIGZvcm1hdHRlZERldGFpbHNba2V5XSA9ICRmaWx0ZXIoJ2RhdGUnKShkZXRhaWxzW2tleV0sIFwieXl5eS1kZC1NTVwiKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSBcInJmYU5hbWVcIjpcbiAgICAgICAgICAgIGZvcm1hdHRlZERldGFpbHNba2V5XSA9ICRzY29wZS5kZXRhaWxzLmxvY2F0aW9uX19yX2FkbWluXzBfX2MgKyAnICcgKyAkc2NvcGUuZGV0YWlscy5kaXNhc3Rlcl90eXBlX19jICsgJyAtICcgKyBkZXRhaWxzLmFwcGVhbF9zb3VyY2VfX2M7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBmb3JtYXR0ZWREZXRhaWxzW2tleV0gPSBkZXRhaWxzW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICAvL05vIGZvcm1hdHRpbmdcbiAgICAgICAgZm9ybWF0dGVkRGV0YWlsc1trZXldID0gZGV0YWlsc1trZXldO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmb3JtYXR0ZWREZXRhaWxzO1xuICB9XG5cbiAgZnVuY3Rpb24gbGVzc0RldGFpbHMoZGV0YWlscykge1xuICAgIHZhciBsZXNzRGV0YWlscyA9IFtdO1xuICAgIGlmICgkc3RhdGVQYXJhbXMudGhlbWUgPT09ICdkaXNhc3RlcicpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBjb25maWcuZGlzYXN0ZXJEZXRhaWxzU2hvcnRMaXN0Lmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIHZhciBrZXkgPSBjb25maWcuZGlzYXN0ZXJEZXRhaWxzU2hvcnRMaXN0W2ldO1xuICAgICAgICBsZXNzRGV0YWlscy5wdXNoKHtcbiAgICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgICB2YWx1ZTogZGV0YWlsc1trZXldXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgcHJvamVjdERldGFpbHNTaG9ydExpc3QgPSBjb25maWcucHJvamVjdERldGFpbHNTaG9ydExpc3Q7XG4gICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gcHJvamVjdERldGFpbHNTaG9ydExpc3QubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgdmFyIGtleSA9IHByb2plY3REZXRhaWxzU2hvcnRMaXN0W2ldO1xuICAgICAgICBsZXNzRGV0YWlscy5wdXNoKHtcbiAgICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgICB2YWx1ZTogZGV0YWlsc1trZXldXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbGVzc0RldGFpbHM7XG4gIH1cblxuICAkc2NvcGUubmV4dFRoZW1lSXRlbSA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBsZW4gPSAkc2NvcGUuYWN0aXZlVGhlbWVJdGVtc0xpc3QubGVuZ3RoO1xuICAgIGlmICgrKyRzY29wZS5hY3RpdmVUaGVtZUl0ZW1JZHggPj0gbGVuKSAkc2NvcGUuYWN0aXZlVGhlbWVJdGVtSWR4ID0gMDtcbiAgICB2YXIgaXRlbSA9ICRzY29wZS5hY3RpdmVUaGVtZUl0ZW1zTGlzdFskc2NvcGUuYWN0aXZlVGhlbWVJdGVtSWR4XTtcbiAgICAkc2NvcGUuc2hvd0RldGFpbHMoaXRlbSk7XG4gIH07XG5cbiAgJHNjb3BlLnByZXZUaGVtZUl0ZW0gPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgbGVuID0gJHNjb3BlLmFjdGl2ZVRoZW1lSXRlbXNMaXN0Lmxlbmd0aDtcbiAgICBpZiAoLS0kc2NvcGUuYWN0aXZlVGhlbWVJdGVtSWR4IDwgMCkgJHNjb3BlLmFjdGl2ZVRoZW1lSXRlbUlkeCA9IGxlbiAtIDE7XG4gICAgdmFyIGl0ZW0gPSAkc2NvcGUuYWN0aXZlVGhlbWVJdGVtc0xpc3RbJHNjb3BlLmFjdGl2ZVRoZW1lSXRlbUlkeF07XG4gICAgJHNjb3BlLnNob3dEZXRhaWxzKGl0ZW0pO1xuICB9O1xuXG4gICRzY29wZS5zaG93TGlzdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAkc2NvcGUudGl0bGUgPSAkc2NvcGUuZmVhdHVyZVRpdGxlO1xuICAgICRzY29wZS5pdGVtc0xpc3QgPSB0cnVlO1xuICAgICRzY29wZS5kZXRhaWxzID0gZmFsc2U7XG4gIH07XG5cbiAgJHNjb3BlLnJlc2l6ZURldGFpbHNQYW5lbCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBoZWlnaHQgPSAkKCcjTWFwQ3RybCcpLmhlaWdodCgpIC0gMjAwOyAvL01hZ2ljIE51bWJlclxuXG4gICAgLy9oZWlnaHQgaXMgdGhlIHZhbHVlIHRoYXQgdGhlIGVudGlyZSBkZXRhaWxzIHBhbmVsIHNob3VsZCBuZXZlciBleGNlZWQuXG4gICAgLy9XaXRoaW4gdGhlIHBhbmVsIGl0c2VsZiwgdGhlIGlubmVyIGNvbnRhaW5lciBuZWVkcyB0byBhZGp1c3QgaXRzIGhlaWdodCBiYXNlZCBvbiB0aGUgY29udGVudHMgb2YgdGhlIHBhbmVsLlxuICAgIC8vU29tZXRpbWVzLCB0aGVyZSBhcmUgdGFicywgYW5kIHNvbWV0aW1lcyB0aGUgcHJvamVjdC9kaXNhc3RlciBkZXNjcmlwdGlvbiBjYW4gYmUgcXVpdGUgbG9uZy5cbiAgICAvL0luIHRoZXNlIGNhc2VzLCB0aGVuIGlubmVyQ29udGFpbmVyIHNob3VsZCBzaHJpbmsgdG8gZml0IHdpdGhpbiB0aGUgbWF4LWhlaWdodCBvZiB0aGUgb3V0ZXIgcGFuZWwgKGhlaWdodClcblxuICAgIC8vRmluZCB0aGUgdG9wIG9mIHRoZSBpbm5lckNvbnRhaW5lciwgYW5kIHN1YnRyYWN0IGZyb20gdGhlIG1heCBoZWlnaHQgb2YgdGhlIHBhbmVsLiAgVGhhdCdzIHdoYXQgdGhlIG1heC1oZWlnaHQgb2YgdGhlIGlubmVyIHBhbmVsIHNob3VsZCBiZVxuICAgIHZhciBpbm5lclRvcCA9ICQoJyNEZXRhaWxzUGFuZWwgLklubmVyQ29udGFpbmVyJykucG9zaXRpb24oKS50b3A7XG4gICAgdmFyIGJvdHRvbUhlaWdodCA9ICQoXCIuZGV0YWlscy1ib3R0b20tYnV0dG9ucy5wdWxsLXJpZ2h0XCIpLmhlaWdodCgpO1xuXG4gICAgJCgnI0RldGFpbHNQYW5lbCAuSW5uZXJDb250YWluZXIgJykuY3NzKFwibWF4LWhlaWdodFwiLCBoZWlnaHQgLSBpbm5lclRvcCAtIGJvdHRvbUhlaWdodCk7XG4gIH07XG5cblx0Ly9Db25uZWN0IHRoZSBsYXlvdXQgb25yZXNpemUgZW5kIGV2ZW50XG5cdHdpbmRvdy5sYXlvdXQucGFuZXMuY2VudGVyLmJpbmQoXCJsYXlvdXRwYW5lb25yZXNpemVfZW5kXCIsICRzY29wZS5yZXNpemVEZXRhaWxzUGFuZWwpO1xuXG5cdC8vRm9yIEluaXQuXG5cdCRzY29wZS5yZXNpemVEZXRhaWxzUGFuZWwoKTtcblxuICAkc2NvcGUuc2F2ZSA9IGZ1bmN0aW9uIChkYXRhLCBuYW1lKSB7XG4gICAgdmFyIGpzb24gPSBKU09OLnN0cmluZ2lmeShkYXRhLCBudWxsLCAyKTtcbiAgICB2YXIgYmxvYiA9IG5ldyBCbG9iKFtqc29uXSwge3R5cGU6J3RleHQvcGxhaW4nfSk7XG4gICAgdmFyIGRvd25sb2FkTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIHZhciB1cmwgPSAod2luZG93LndlYmtpdFVSTCAhPSBudWxsID8gd2luZG93LndlYmtpdFVSTCA6IHdpbmRvdy5VUkwpO1xuICAgIGRvd25sb2FkTGluay5ocmVmID0gdXJsLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcbiAgICBkb3dubG9hZExpbmsuZG93bmxvYWQgPSBuYW1lIHx8ICdmZWF0dXJlLmdlb2pzb24nO1xuICAgIGRvd25sb2FkTGluay5jbGljaygpO1xuICB9O1xuXG59KTtcbiIsIi8qKlxuICogQ3JlYXRlZCBieSBSeWFuIFdoaXRsZXlcbiAqICAgICAgIG9uIDYvNC8xNC5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdHZW9Bbmd1bGFyJykuY29udHJvbGxlcignRXhwb3J0Q3RybCcsIGZ1bmN0aW9uKCRzY29wZSwgJGh0dHAsICRzdGF0ZSwgJHN0YXRlUGFyYW1zKSB7XG4gICAgY29uc29sZS5sb2coJ0V4cG9ydEN0cmwnKTtcblxuICAgICRzY29wZS5leHBvcnQgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICB9O1xuXG4gICAgJHNjb3BlLnJvdXRlVXJsID0gd2luZG93LmxvY2F0aW9uO1xuXG5cbiAgICAvKipcbiAgICAgKiBJZiBFeHBvcnRDdHJsIGdldHMgY2FsbGVkIHR3aWNlIGZvciBzb21lIHJlYXNvbiwgd2UgbWlnaHRcbiAgICAgKiBoYXZlIHRoaXMgY2xhc3MgaGFuZ2luZyBhcm91bmQgYmxvY2tpbmcgdGhlIGFwcC4gRXhwb3J0Q3RybFxuICAgICAqIGRvZXMgZ2V0IGNhbGxlZCB0d2ljZSBzb21ldGltZXMsIGJlY2F1c2UgdGhlIG1vZGFsIHNvbWV0aW1lc1xuICAgICAqIG51ZGdlcyB0aGUgbWFwIGFuZCByZWluc3RhbnRpYXRlcyB0aGUgbW9kYWwgYWdhaW4gdmlhIGEgbmV3XG4gICAgICogcm91dGUuXG4gICAgICovXG4gICAgJCgnLm1vZGFsLWJhY2tkcm9wJykucmVtb3ZlKCk7XG5cbiAgICAkKCcjZXhwb3J0TW9kYWwnKS5tb2RhbCgnc2hvdycpO1xuXG4gICAgJCgnI2V4cG9ydE1vZGFsJykub24oJ2hpZGRlbi5icy5tb2RhbCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICRzdGF0ZS5nbygnbWFpbicsICRzdGF0ZVBhcmFtcyk7XG4gICAgfSk7XG5cblxuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIC8vZGVmYXVsdHNcbiAgICBzZWxmLl9MYXlvdXRFbGVtZW50cyA9IHsgXCJtYXBcIjogdHJ1ZSwgXCJsZWdlbmRcIjogdHJ1ZSwgXCJvcHRpb25hbHRoZW1lZGV0YWlsc1wiOiBmYWxzZSB9O1xuICAgIHNlbGYuX0ltYWdlRm9ybWF0ID0gJ3BuZyc7XG5cbiAgICBzZWxmLl9pbml0ID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIHNlbGYuX2Nvbm5lY3RSYWRpb0J1dHRvbk9uQ2xpY2tzKCk7XG4gICAgICAgICQoXCIjZXhlY3V0ZUV4cG9ydEJ1dHRvblwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vU2hvdyBsb2FkaW5nIGdpZi4gSGlkZSBleHBvcnQgYnV0dG9uXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHNlbGYuX2V4cG9ydEltYWdlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIHNlbGYuX3Nob3dFeHBvcnRCdXR0b25IaWRlTG9hZGVyKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIHNlbGYuX3Nob3dXYWl0aW5nUGFuZWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNlbGYuX3Nob3dMb2FkZXIoKTsgLy9zaG93IGtuaWdodFJpZGVyIGltYWdlLCBoaWRlXG4gICAgICAgICQoXCIjZXhwb3J0T3B0aW9uc1BhbmVsXCIpLmNzcyh7XCJkaXNwbGF5XCI6IFwibm9uZVwifSk7XG4gICAgICAgICQoXCIjZXhwb3J0V2FpdGluZ1BhbmVsXCIpLmNzcyh7IFwiZGlzcGxheVwiOiBcImJsb2NrXCIgfSk7XG4gICAgICAgICQoXCIuZXhwb3J0R3JvdXBUaXRsZS5lcnJvclwiKS5jc3MoeyBcImRpc3BsYXlcIjogXCJub25lXCIgfSk7IC8vSGlkZSBlcnJvciBtZXNzYWdlLCBpZiBzaG93blxuICAgICAgICAkKFwiLmltYWdlT3BlbkJ1dHRvblwiKS5jc3Moe1wiZGlzcGxheVwiOiBcIm5vbmVcIn0pOyAvL2hpZGUgb3BlbiBpbWFnZSBidXR0b25cbiAgICB9XG5cbiAgICBzZWxmLl9oaWRlV2FpdGluZ1BhbmVsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAkKFwiI2V4cG9ydFdhaXRpbmdQYW5lbFwiKS5jc3Moe1wiZGlzcGxheVwiOiBcIm5vbmVcIn0pO1xuICAgICAgICAkKFwiI2V4cG9ydE9wdGlvbnNQYW5lbFwiKS5jc3Moe1wiZGlzcGxheVwiOiBcImJsb2NrXCJ9KTtcbiAgICB9XG5cbiAgICBzZWxmLl9oaWRlRXhwb3J0QnV0dG9uU2hvd0xvYWRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJChcIiNleGVjdXRlRXhwb3J0QnV0dG9uXCIpLmNzcyh7IFwiZGlzcGxheVwiOiBcIm5vbmVcIiB9KTtcbiAgICAgICAgJChcIi5rbmlnaHRSaWRlckxvYWRlclwiKS5jc3MoeyBcImRpc3BsYXlcIjogXCJibG9ja1wiIH0pO1xuICAgIH1cblxuICAgIHNlbGYuX3Nob3dFeHBvcnRCdXR0b25IaWRlTG9hZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAkKFwiI2V4ZWN1dGVFeHBvcnRCdXR0b25cIikuY3NzKHtcImRpc3BsYXlcIjogXCJibG9ja1wifSk7XG4gICAgICAgICQoXCIua25pZ2h0UmlkZXJMb2FkZXJcIikuY3NzKHtcImRpc3BsYXlcIjogXCJub25lXCJ9KTtcbiAgICB9XG5cbiAgICBzZWxmLl9jb25uZWN0UmFkaW9CdXR0b25PbkNsaWNrcyA9IGZ1bmN0aW9uICgpIHtcblxuXG4gICAgICAgICQoXCIjb3B0aW9uYWxPdXRwdXRNYXBcIikub24oXCJjbGlja1wiLCBzZWxmLl9nZXRMYXlvdXRFbGVtZW50T25DbGljaygnbWFwJykpO1xuICAgICAgICAkKFwiI29wdGlvbmFsT3V0cHV0TGVnZW5kXCIpLm9uKFwiY2xpY2tcIiwgc2VsZi5fZ2V0TGF5b3V0RWxlbWVudE9uQ2xpY2soJ2xlZ2VuZCcpKTtcbiAgICAgICAgJChcIiNvcHRpb25hbFRoZW1lRGV0YWlsc1wiKS5vbihcImNsaWNrXCIsIHNlbGYuX2dldExheW91dEVsZW1lbnRPbkNsaWNrKCdvcHRpb25hbHRoZW1lZGV0YWlscycpKTtcblxuXG4gICAgICAgIHZhciBwbmdSQk5vZGUgPSAkKFwiI3BuZ0ltYWdlRm9ybWF0XCIpO1xuICAgICAgICBwbmdSQk5vZGUub24oXCJjbGlja1wiLCBzZWxmLl9nZXRJbWFnZUJ1dHRvblJhZGlvQnV0dG9uT25DbGljayhwbmdSQk5vZGUsICdwbmcnKSk7XG5cbiAgICAgICAgdmFyIHBkZlJCTm9kZSA9ICQoXCIjcGRmSW1hZ2VGb3JtYXRcIik7XG4gICAgICAgIHBkZlJCTm9kZS5vbihcImNsaWNrXCIsIHNlbGYuX2dldEltYWdlQnV0dG9uUmFkaW9CdXR0b25PbkNsaWNrKHBkZlJCTm9kZSwgJ3BkZicpKTtcblxuICAgICAgICAkKFwiI2V4cG9ydENsb3NlXCIpLm9uKFwiY2xpY2tcIiwgc2VsZi5oaWRlRXhwb3J0T3B0aW9uKTtcblxuICAgICAgICAkKFwiLmtpbGxPcGVuQnV0dG9uXCIpLm9uKFwiY2xpY2tcIiwgc2VsZi5faGlkZVdhaXRpbmdQYW5lbCk7IC8vdGhlIGRpc2NhcmQgYnV0dG9uXG5cbiAgICB9O1xuXG4gICAgc2VsZi5fZ2V0SW1hZ2VCdXR0b25SYWRpb0J1dHRvbk9uQ2xpY2sgPSBmdW5jdGlvbiAobm9kZSwgaW1hZ2VGb3JtYXQpIHtcblxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc2VsZi5fSW1hZ2VGb3JtYXQgPSBpbWFnZUZvcm1hdDtcbiAgICAgICAgICAgIHNlbGYuX3JlbW92ZUFsbFNlbGVjdGVkUmFkaW9CdXR0b25zKFwiZXhwb3J0T3B0aW9uc0NvbnRhaW5lclwiKTtcbiAgICAgICAgICAgIG5vZGUuYWRkQ2xhc3MoXCJleHBvcnRSYWRpb0J1dHRvblNlbGVjdGVkXCIpO1xuICAgICAgICB9O1xuICAgIH07XG5cbiAgICBzZWxmLl9nZXRMYXlvdXRFbGVtZW50T25DbGljayA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvL1RvZ2dsZSBBY3RpdmUgU3RhdGVcbiAgICAgICAgICAgIHNlbGYuX0xheW91dEVsZW1lbnRzW2VsZW1lbnRdID0gIXNlbGYuX0xheW91dEVsZW1lbnRzW2VsZW1lbnRdO1xuXG4gICAgICAgICAgICAvLyQoXCIjZXhwb3J0T3B0aW9ucyAuY2hlY2tib3hcIikucmVtb3ZlQ2xhc3MoXCJjaGVja2VkXCIpO1xuICAgICAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnY2hlY2tlZCcpO1xuICAgICAgICB9O1xuICAgIH07XG5cbiAgICBzZWxmLl9yZW1vdmVBbGxTZWxlY3RlZFJhZGlvQnV0dG9ucyA9IGZ1bmN0aW9uIChwYXJlbnREaXZJRCkge1xuICAgICAgICAkLmVhY2goJChcIiNcIiArIHBhcmVudERpdklEICsgXCIgLmV4cG9ydFJhZGlvQnV0dG9uU2VsZWN0ZWRcIiksIGZ1bmN0aW9uIChpZHgsIG5vZGUpIHtcbiAgICAgICAgICAgICQobm9kZSkucmVtb3ZlQ2xhc3MoXCJleHBvcnRSYWRpb0J1dHRvblNlbGVjdGVkXCIpO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgc2VsZi5faGlkZUxvYWRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJChcIi5rbmlnaHRSaWRlckxvYWRlclwiKS5jc3Moe1wiZGlzcGxheVwiOiBcIm5vbmVcIn0pO1xuICAgIH1cblxuICAgIHNlbGYuX3Nob3dMb2FkZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoXCIua25pZ2h0UmlkZXJMb2FkZXJcIikuY3NzKHtcImRpc3BsYXlcIjogXCJibG9ja1wifSk7XG4gICAgfVxuXG4gICAgdGhpcy5zaG93RXhwb3J0T3B0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAkKFwiI2V4cG9ydE9wdGlvbnNcIikuY3NzKHsgXCJkaXNwbGF5XCI6IFwiYmxvY2tcIiB9KTtcbiAgICB9XG5cbiAgICB0aGlzLmhpZGVFeHBvcnRPcHRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoXCIjZXhwb3J0T3B0aW9uc1wiKS5jc3MoeyBcImRpc3BsYXlcIjogXCJub25lXCIgfSk7XG4gICAgfVxuXG4gICAgc2VsZi5fa2lsbE9wZW5JbWFnZUJ1dHRvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy9IaWRlICdvcGVuIGltYWdlJyBidXR0b24gYW5kIHNob3cgZXhwb3J0IGJ1dHRvbi5cbiAgICAgICAgc2VsZi5fc2hvd0V4cG9ydEJ1dHRvbkhpZGVMb2FkZXIoKTtcbiAgICAgICAgJChcIi5pbWFnZU9wZW5CdXR0b25cIikuY3NzKHtcImRpc3BsYXlcIjogXCJub25lXCJ9KTtcbiAgICB9XG5cbiAgICBzZWxmLl9vbkVycm9yID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBzZWxmLl9oaWRlV2FpdGluZ1BhbmVsKCk7XG4gICAgICAgIC8vRGlzcGxheSBlcnJvciBtZXNzYWdlLlxuICAgICAgICAkKFwiLmV4cG9ydEdyb3VwVGl0bGUuZXJyb3JcIikucmVwbGFjZShcIjxzcGFuPlRoZXJlIHdhcyBhbiBlcnJvciBleHBvcnRpbmcgdGhlIGltYWdlLjwvc3Bhbj5cIik7XG4gICAgICAgICQoXCIuZXhwb3J0R3JvdXBUaXRsZS5lcnJvclwiKS5jc3Moe1wiZGlzcGxheVwiOiBcImJsb2NrXCJ9KTtcbiAgICB9XG5cbiAgICBzZWxmLl9leHBvcnRJbWFnZSA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICB2YXIgdGl0bGVIVE1MID0gXCJUaXRsZVwiO1xuXG4gICAgICAgIC8vdmFyIGxlZ2VuZHNIVE1MID0gJCgnPGRpdj4nKS5hcHBlbmQoJChcIiNMYXllckxpc3RXcmFwcGVyXCIpLmNsb25lKCkpLmh0bWwoKS5yZXBsYWNlKC9cXFwiL2csICdcXFxcXCInKTtcblxuXG4gICAgICAgIHZhciBsYXlvdXRXaWR0aCA9ICQoXCJib2R5XCIpLndpZHRoKCk7XG4gICAgICAgIHZhciBtYXBIZWlnaHQgPSAkKFwiI01hcEN0cmxcIikuaGVpZ2h0KCk7XG4gICAgICAgIHZhciBtYXBXaWR0aCA9ICQoXCIjTWFwQ3RybFwiKS53aWR0aCgpO1xuXG4gICAgICAgIHZhciBjb2RlYmxvY2sgPSBcIlwiO1xuICAgICAgICAvL0FkanVzdCBib2R5IHdpZHRoXG4gICAgICAgIGNvZGVibG9jayArPSAnJChcImJvZHlcIikud2lkdGgoJyArIChtYXBXaWR0aCArIDIwKSArICcpOyc7XG5cbiAgICAgICAgLy9MYWJlbCBzZWxlY3RlZCBjb3VudHJ5XG4gICAgICAgIC8vY29kZWJsb2NrICs9ICckKFwiI2FjdGl2ZUNvdW50cnlcIikuaHRtbCggXCInICsgX0ZTUC5NYXBCdWlsZGVyLlNlbGVjdGVkQ291bnRyeSArICdcIik7JztcblxuICAgICAgICAvL0RlcGVuZGluZyBvbiB3aGF0J3MgaW4gdGhlIGxheW91dEVsZW1lbnRzIGFycmF5LCBncmFiIGRvbSBub2Rlc1xuICAgICAgICAvL3ZhciBfc2hvd05vbmUgPSB0cnVlOyAvL2ZsYWcgdG8gZGV0ZWN0IGlmIHVzZXIgY2hvc2Ugbm90aGluZ1xuXG4vLyAgICAgICAgZm9yICh2YXIga2V5IGluIHNlbGYuX0xheW91dEVsZW1lbnRzKSB7XG4vLyAgICAgICAgICAgIGlmIChzZWxmLl9MYXlvdXRFbGVtZW50cy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4vLyAgICAgICAgICAgICAgICAvL0lmIHVzZXIgaGFzIHNlbGVjdGVkIGV2ZW4gMSBlbGVtZW50LCB0aGVuIHNldCBfc2hvd05vbmUgdG8gZmFsc2U7IChiZWNhdXNlIHdlIGFyZSBnb2luZyB0byBzaG93IHNvbWV0aGluZylcbi8vICAgICAgICAgICAgICAgIGlmIChzZWxmLl9MYXlvdXRFbGVtZW50c1trZXldID09PSB0cnVlKSB7XG4vLyAgICAgICAgICAgICAgICAgICAgX3Nob3dOb25lID0gZmFsc2U7XG4vLyAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAgICBzd2l0Y2ggKGtleSkge1xuLy8gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJtYXBcIjpcbi8vICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGYuX0xheW91dEVsZW1lbnRzW2tleV0gPT09IHRydWUpIHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vZ3JhYiB0aGUgbWFwIGRpdlxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1hcEhUTUwgPSAkKCc8ZGl2PicpLmFwcGVuZCgkKFwiLmxlYWZsZXQtbWFwLXBhbmVcIikuY2xvbmUoKSkuaHRtbCgpLnJlcGxhY2UoL1xcXCIvZywgJ1xcXFxcIicpO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1hcEhUTUwuaW5kZXhPZignLXdlYmtpdC10cmFuc2Zvcm0nKSA9PT0gLTEpIHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXBIVE1MID0gbWFwSFRNTC5yZXBsYWNlKC8tbXMtdHJhbnNmb3JtL2csICd0cmFuc2Zvcm0nKS5yZXBsYWNlKC90cmFuc2Zvcm0vZywgJy13ZWJraXQtdHJhbnNmb3JtJyk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2RlYmxvY2sgKz0gJyQoXCIjTWFwQ3RybFwiKS5oZWlnaHQoJyArIG1hcEhlaWdodCArICcpOyc7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2RlYmxvY2sgKz0gJyQoXCIjTWFwQ3RybFwiKS5yZXBsYWNlV2l0aChcIicgKyBtYXBIVE1MICsgJ1wiKTsnO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9BZGp1c3QgTWFwIHdyYXBwZXJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvZGVibG9jayArPSAnJChcIiN1cHBlck1hcFdyYXBwZXJcIikud2lkdGgoJyArIChtYXBXaWR0aCkgKyAnKTsnO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29kZWJsb2NrICs9ICckKFwiI3VwcGVyTWFwV3JhcHBlclwiKS5oZWlnaHQoJyArIChtYXBIZWlnaHQpICsgJyk7Jztcbi8vICAgICAgICAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vaGlkZSBtYXAgZGl2XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2RlYmxvY2sgKz0gJyQoXCIjdXBwZXJNYXBXcmFwcGVyXCIpLmhpZGUoKTsnO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuLy9cbi8vICAgICAgICAgICAgICAgICAgICBjYXNlIFwibGVnZW5kXCI6XG4vLyAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZWxmLl9MYXlvdXRFbGVtZW50c1trZXldID09PSB0cnVlKSB7XG4vLy8vICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBsZWdlbmRzSFRNTCA9ICQoJzxkaXY+JykuYXBwZW5kKCQoXCIjTGF5ZXJMaXN0V3JhcHBlclwiKS5jbG9uZSgpKS5odG1sKCkucmVwbGFjZSgvXFxcIi9nLCAnXFxcXFwiJyk7XG4vLy8vICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvZGVibG9jayArPSBcIiQoJyNsZWdlbmRzJykuYXBwZW5kKCdcIiArIGxlZ2VuZHNIVE1MICsgXCInKTtcIjtcbi8vLy9cbi8vLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9BZGp1c3QgVGl0bGUgb2YgQ0lDT3Ncbi8vLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29kZWJsb2NrICs9IFwiJCgnI2xlZ2VuZHMnKS5wcmVwZW5kKCQoJyNwYXJlbnRDSUNPJykpO1wiO1xuLy8vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2RlYmxvY2sgKz0gXCIkKCcjbGVnZW5kcycpLnByZXBlbmQoJCgnI0xheWVyTGlzdFdyYXBwZXIgaGVhZGVyJykpO1wiO1xuLy8vL1xuLy8vL1xuLy8vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL01vdmUgcGFuZWxUaXRsZSB0byBncnBDSUNPLiAgMXN0IHRoaW5nLlxuLy8vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2RlYmxvY2sgKz0gXCIkKCcjZ3JwQ0lDTycpLnByZXBlbmQoJCgnLnBhbmVsVGl0bGUnKSk7XCI7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2lmIGJvdGggbWFwIGFuZCBsZWdlbmQgYXJlIGV4Y2x1ZGVkLCBoaWRlIHRoZSB3cmFwcGVyIHdpdGggYm9yZGVyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZi5fTGF5b3V0RWxlbWVudHNbXCJtYXBcIl0gIT0gdHJ1ZSkge1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvZGVibG9jayArPSAnJChcIiN1cHBlck1hcFdyYXBwZXJcIikuY3NzKHtcImRpc3BsYXlcIjogXCJub25lXCJ9KTsnO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuLy9cbi8vICAgICAgICAgICAgICAgICAgICBjYXNlIFwib3B0aW9uYWx0aGVtZWRldGFpbHNcIjpcbi8vICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGYuX0xheW91dEVsZW1lbnRzW2tleV0gPT09IHRydWUpIHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vI0RldGFpbHNQYW5lbCAudGl0bGUubmctYmluZGluZ1xuLy9cbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBDT0hUTUwgPSAkKCc8ZGl2PicpLmFwcGVuZCgkKFwiI0RldGFpbHNQYW5lbCAuSW5uZXJDb250YWluZXIuc2Nyb2xsYWJsZVwiKS5jbG9uZSgpLmFkZENsYXNzKFwib25cIikpLmh0bWwoKS5yZXBsYWNlKC9cXFwiL2csICdcXFxcXCInKS5yZXBsYWNlKC88IS0tKC4qPyktLT4vZ20sIFwiXCIpO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29kZWJsb2NrICs9IFwiJCgnI3V4VGhlbWVEZXRhaWxzJykuYXBwZW5kKCdcIiArIENPSFRNTCArIFwiJyk7XCI7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4vLyAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgIH1cbi8vICAgICAgICB9XG5cbi8vICAgICAgICBpZiAoX3Nob3dOb25lID09IHRydWUpIHtcbi8vICAgICAgICAgICAgLy9Eb24ndCBkbyBhbnl0aGluZywgY2F1c2UgdXNlciBoYXNuJ3Qgc2VsZWN0ZWQgYW55dGhpbmcuXG4vLyAgICAgICAgICAgICQoXCIjZXhwb3J0TWVzc2FnZVwiKS5odG1sKFwiUGxlYXNlIHNlbGVjdCAxIG9yIG1vcmUgZWxlbWVudHMgdG8gZXhwb3J0LlwiKTtcbi8vICAgICAgICAgICAgcmV0dXJuO1xuLy8gICAgICAgIH1cbi8vICAgICAgICBlbHNlIHtcbi8vICAgICAgICAgICAgJChcIiNleHBvcnRNZXNzYWdlXCIpLmh0bWwoXCJcIik7XG4vLyAgICAgICAgfVxuXG4gICAgICAgIC8vc2hvdyBsb2FkZXJcbiAgICAgICAgc2VsZi5fc2hvd1dhaXRpbmdQYW5lbCgpO1xuXG4gICAgICAgIC8vZm9ybWF0dGluZ1xuICAgICAgICAvL2NvZGVibG9jayA9IGNvZGVibG9jay5yZXBsYWNlKC8oXFxyXFxufFxcbnxcXHIpL2dtLCBcIlwiKTsgIC8vcmVtb3ZlIGxpbmUgYnJlYWtzXG5cbiAgICAgICAgdmFyIHByaW50UG9zdEFyZ3MgPSB7XG4gICAgICAgICAgICAvL3VybDogJ2h0dHA6Ly9nZW8ucmVkY3Jvc3MuY29tL21hcGZvbGlvL3ByaW50Lmh0bScsXG4gICAgICAgICAgICB1cmw6ICRzY29wZS5yb3V0ZVVybC5ocmVmLnJlcGxhY2UoXCJtYXBmb2xpby8jXCIsIFwibWFwZm9saW8vcHJpbnQuaHRtbCNcIikucmVwbGFjZShcIm1hcGZvbGlvL2luZGV4Lmh0bWwjXCIsIFwibWFwZm9saW8vcHJpbnQuaHRtbCNcIikucmVwbGFjZShcIi9leHBvcnRcIiwgXCJcIikucmVwbGFjZShcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMVwiLCBcImh0dHBzOi8vZ2VvLnJlZGNyb3NzLm9yZ1wiKSwgLy9Td2FwIHRoZSBjdXJyZW50IHVybCBmb3IgdGhlIHByaW50IHVybFxuICAgICAgICAgICAgaW1hZ2Vmb3JtYXQ6IHNlbGYuX0ltYWdlRm9ybWF0IHx8ICdwbmcnLFxuICAgICAgICAgICAgZm9ybWF0OiAnanNvbicsXG4gICAgICAgICAgICAvL2NvZGVibG9jazogY29kZWJsb2NrLFxuICAgICAgICAgICAgdmlld3BvcnRoZWlnaHQ6IG1hcEhlaWdodCxcbiAgICAgICAgICAgIHZpZXdwb3J0d2lkdGg6IGxheW91dFdpZHRoLFxuICAgICAgICAgICAgZGVsYXk6IDUwMDAgLy90aW1lIHRvIHdhaXQgaW4gbXNcbiAgICAgICAgfTtcblxuXG4gICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcbiAgICAgICAgICAgIHVybDogJ2h0dHA6Ly9wcmludC5zcGF0aWFsZGV2LmNvbScsXG4gICAgICAgICAgICBkYXRhOiBwcmludFBvc3RBcmdzLFxuICAgICAgICAgICAgc3VjY2Vzczogc2VsZi5fb25JbWFnZUV4cG9ydCxcbiAgICAgICAgICAgIGVycm9yOiBzZWxmLl9vbkVycm9yXG4gICAgICAgIH0pO1xuXG4gICAgfTtcblxuICAgIHNlbGYuX29uSW1hZ2VFeHBvcnQgPSBmdW5jdGlvbiAocmVzdWx0KSB7XG5cbiAgICAgICAgdmFyIGV4cG9ydEltYWdlVVJMID0gcmVzdWx0LmltYWdlO1xuXG4gICAgICAgIC8vaW5zdGVhZCwgc2hvdyBhIGJ1dHRvbi9oeXBlcmxpbmsgZm9yIHRoZSB1c2VyIHRvIG9wZW4gdGhlIGltYWdlLlxuICAgICAgICAkKFwiLmltYWdlT3BlbkJ1dHRvbiBhXCIpLmF0dHIoXCJocmVmXCIsIGV4cG9ydEltYWdlVVJMKTtcbiAgICAgICAgJChcIi5pbWFnZU9wZW5CdXR0b25cIikuY3NzKHtcImRpc3BsYXlcIjogXCJibG9ja1wifSk7XG5cbiAgICAgICAgLy9IaWRlIGxvYWRlclxuICAgICAgICBzZWxmLl9oaWRlTG9hZGVyKCk7XG4gICAgfTtcblxuICAgIHNlbGYuX2luaXQoKTtcbn0pO1xuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IE5pY2hvbGFzIEhhbGxhaGFuIDxuaGFsbGFoYW5Ac3BhdGlhbGRldi5jb20+XG4gKiAgICAgICBvbiAzLzI3LzE0LlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ0dlb0FuZ3VsYXInKS5jb250cm9sbGVyKCdGaWx0ZXJzQ3RybCcsIGZ1bmN0aW9uKCRzY29wZSwgJGh0dHAsICRzdGF0ZSwgJHN0YXRlUGFyYW1zKSB7XG4gICRzY29wZS5maWx0ZXJNb2RlID0gXCJwcm9qZWN0XCI7IC8vV2hpY2ggdGhlbWUgYXJlIHdlIGZpbHRlcmluZz9cbiAgJHNjb3BlLnBhcmFtcyA9ICRzdGF0ZVBhcmFtcztcbiAgJHNjb3BlLm5hdlRhYiA9ICdzZWN0b3JzJztcbiAgJHNjb3BlLnNlY3RvcnMgPSBbXTtcbiAgJHNjb3BlLmRpc2FzdGVyVHlwZXMgPSBbXTtcbiAgJHNjb3BlLnN0YXR1cyA9IFtdO1xuICBkZWJ1Zy5idWRnZXQgPSAkc2NvcGUuYnVkZ2V0ID0ge1xuICAgIHNsaWRlcjogWzIwMDAsIDgwMDBdLFxuICAgIG1pbjogMCxcbiAgICBtZWFuOiA1MDAwLFxuICAgIG1heDogMTAwMDAwXG4gIH07XG5cbiAgLyoqXG4gICAqIEdldCBjaGVja2JveCBpbmZvIHRoYXQgd2FzIGdlbmVyYXRlZCBieSB0aGUgU3VjY3VidXMuXG4gICAqL1xuICAkaHR0cC5nZXQoJ3N1Y2N1YnVzX2dpdGlnbm9yZS9zZi1wcm9qZWN0LWZpbHRlci1jaGVja2JveGVzLmpzb24nLCB7Y2FjaGU6IHRydWV9KS5zdWNjZXNzKGZ1bmN0aW9uIChkYXRhLCBzdGF0dXMpIHtcbiAgICBhbmd1bGFyLmV4dGVuZCgkc2NvcGUsIGRhdGEpO1xuICAgIGRlYnVnLmZpbHRlcnNTY29wZSA9ICRzY29wZTtcbiAgfSkuZXJyb3IoZnVuY3Rpb24oKSB7XG4gICAgY29uc29sZS5lcnJvcihcIlVuYWJsZSB0byBmZXRjaCBwcm9qZWN0IGZpbHRlciBtZXRhIGRhdGFcIik7XG4gIH0pO1xuXG4gIC8qKlxuICAgKiBHZXQgYnVkZ2V0IHN0YXRzIGZyb20gQ2h1YmJzIC0gZHluYW1pYyBmcm9tIFBvc3RHSVMuXG4gICAqL1xuICAkaHR0cC5nZXQoY29uZmlnLmNodWJic1BhdGgoJ3NlcnZpY2VzL2N1c3RvbS9jdXN0b21fb3BlcmF0aW9uP25hbWU9cHJvamVjdHRvdGFsYnVkZ2V0JmZvcm1hdD1qc29uJyksIHtjYWNoZTogdHJ1ZX0pLnN1Y2Nlc3MoZnVuY3Rpb24gKGRhdGEsIHN0YXR1cykge1xuICAgIGlmIChkYXRhLmxlbmd0aCA+IDApIHtcbiAgICAgICRzY29wZS5idWRnZXQubWluID0gZGF0YVswXS5taW47XG4gICAgICAkc2NvcGUuYnVkZ2V0Lm1lYW4gPSBkYXRhWzBdLmF2ZztcbiAgICAgICRzY29wZS5idWRnZXQubWF4ID0gZGF0YVswXS5tYXg7XG4gICAgICAkc2NvcGUuYnVkZ2V0LnNsaWRlciA9IFtkYXRhWzBdLm1pbiwgZGF0YVswXS5tYXhdO1xuICAgIH1cbiAgfSkuZXJyb3IoZnVuY3Rpb24oKSB7XG4gICAgY29uc29sZS5lcnJvcihcIlVuYWJsZSB0byBmZXRjaCBUb3RhbCBCdWRnZXQgTWluLCBNZWFuLCBNYXhcIik7XG4gIH0pO1xuXG4gICRzY29wZS5kYXRlRmlsdGVycyA9IFtcbiAgICB7XG4gICAgICBuYW1lOiAnU3RhcnQgRGF0ZScsXG4gICAgICByYWRpbzogJ29uJyxcbiAgICAgIGVtcHR5OiB0cnVlLFxuICAgICAgb3BlbmVkOiBmYWxzZVxuICAgIH0se1xuICAgICAgbmFtZTogJ0VuZCBEYXRlJyxcbiAgICAgIHJhZGlvOiAnb24nLFxuICAgICAgZW1wdHk6IHRydWUsXG4gICAgICBvcGVuZWQ6IGZhbHNlXG4gICAgfSx7XG4gICAgICBuYW1lOiAnQ3JlYXRlIERhdGUnLFxuICAgICAgcmFkaW86ICdvbicsXG4gICAgICBlbXB0eTogdHJ1ZSxcbiAgICAgIG9wZW5lZDogZmFsc2VcbiAgICB9LHtcbiAgICAgIG5hbWU6ICdMYXN0IE1vZGlmaWVkJyxcbiAgICAgIHJhZGlvOiAnb24nLFxuICAgICAgZW1wdHk6IHRydWUsXG4gICAgICBvcGVuZWQ6IGZhbHNlXG4gICAgfVxuICBdO1xuXG4gICRzY29wZS50b2dnbGVEYXRlID0gZnVuY3Rpb24oJGV2ZW50LCBkYXRlRmlsdGVyKSB7XG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgZGF0ZUZpbHRlci5vcGVuZWQgPSAhZGF0ZUZpbHRlci5vcGVuZWQ7XG4gIH07XG5cbiAgJHNjb3BlLnNlY3RvcnNGaWx0ZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlY3RvcnMgPSAkc2NvcGUuc2VjdG9ycztcbiAgICAkc2NvcGUuc2VjdG9yQ2xhdXNlID0gbnVsbDtcbiAgICB2YXIgZmlyc3QgPSB0cnVlO1xuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBzZWN0b3JzLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICB2YXIgc2VjdG9yID0gc2VjdG9yc1tpXTtcbiAgICAgIGlmIChzZWN0b3IuY2hlY2tlZCkge1xuICAgICAgICBpZiAoZmlyc3QpIHtcbiAgICAgICAgICAkc2NvcGUuc2VjdG9yQ2xhdXNlID0gXCJzZWN0b3JfX2MgTElLRSAnJVwiICsgc2VjdG9yLm5hbWUgKyBcIiUnIFwiO1xuICAgICAgICAgIGZpcnN0ID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgJHNjb3BlLnNlY3RvckNsYXVzZSArPSBcIk9SIHNlY3Rvcl9fYyBMSUtFICclXCIgKyBzZWN0b3IubmFtZSArIFwiJScgXCI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgJHNjb3BlLmNvbXBvc2VXaGVyZUNsYXVzZSgpO1xuICB9O1xuXG4gICRzY29wZS5jbGVhclNlY3RvcnNGaWx0ZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlY3RvcnMgPSAkc2NvcGUuc2VjdG9ycztcbiAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gc2VjdG9ycy5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICAgICAgc2VjdG9yc1tpXS5jaGVja2VkID0gZmFsc2U7XG4gICAgfVxuICAgICRzY29wZS5zZWN0b3JDbGF1c2UgPSBudWxsO1xuICAgICRzY29wZS5jb21wb3NlV2hlcmVDbGF1c2UoKTtcbiAgfTtcblxuICAkc2NvcGUuc3RhdHVzRmlsdGVyID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzdGF0dXMgPSAkc2NvcGUuc3RhdHVzO1xuICAgICRzY29wZS5zdGF0dXNDbGF1c2UgPSBudWxsO1xuICAgIHZhciBmaXJzdCA9IHRydWU7XG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHN0YXR1cy5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICAgICAgdmFyIHN0YXQgPSBzdGF0dXNbaV07XG4gICAgICBpZiAoc3RhdC5jaGVja2VkKSB7XG4gICAgICAgIGlmIChmaXJzdCkge1xuICAgICAgICAgICRzY29wZS5zdGF0dXNDbGF1c2UgPSBcInN0YXR1c19fYyBMSUtFICclXCIgKyBzdGF0Lm5hbWUgKyBcIiUnIFwiO1xuICAgICAgICAgIGZpcnN0ID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgJHNjb3BlLnN0YXR1c0NsYXVzZSArPSBcIk9SIHN0YXR1c19fYyBMSUtFICclXCIgKyBzdGF0Lm5hbWUgKyBcIiUnIFwiO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgICRzY29wZS5jb21wb3NlV2hlcmVDbGF1c2UoKTtcbiAgfTtcblxuICAkc2NvcGUuY2xlYXJTdGF0dXNGaWx0ZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHN0YXR1cyA9ICRzY29wZS5zdGF0dXM7XG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHN0YXR1cy5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICAgICAgc3RhdHVzW2ldLmNoZWNrZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgJHNjb3BlLnN0YXR1c0NsYXVzZSA9IG51bGw7XG4gICAgJHNjb3BlLmNvbXBvc2VXaGVyZUNsYXVzZSgpO1xuICB9O1xuXG4gICRzY29wZS5kYXRlRmlsdGVyID0gZnVuY3Rpb24gKCkge1xuICAgICRzY29wZS5kYXRlQ2xhdXNlID0gbnVsbDtcbiAgICB2YXIgX2ZpcnN0ID0gdHJ1ZTtcbiAgICB2YXIgZmlyc3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoX2ZpcnN0KSB7XG4gICAgICAgIF9maXJzdCA9IGZhbHNlO1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgICB9XG4gICAgICByZXR1cm4gJyBBTkQgJztcbiAgICB9O1xuICAgIHZhciBkYXRlRmlsdGVycyA9ICRzY29wZS5kYXRlRmlsdGVycztcbiAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gZGF0ZUZpbHRlcnMubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgICAgIHZhciBmaWx0ZXIgPSBkYXRlRmlsdGVyc1tpXTtcblxuICAgICAgaWYgKGZpbHRlci5uYW1lID09PSAnU3RhcnQgRGF0ZScgJiYgZmlsdGVyLmRhdGUpIHtcbiAgICAgICAgJHNjb3BlLmRhdGVDbGF1c2UgPSBmaXJzdCgpICsgJ3N0YXJ0X2RhdGVfX2MnICsgY29tcGFyZShmaWx0ZXIpICsgXCInXCIgKyBkYXRlU3RyaW5nKGZpbHRlci5kYXRlKSArIFwiJ1wiO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKGZpbHRlci5uYW1lID09PSAnRW5kIERhdGUnICYmIGZpbHRlci5kYXRlKSB7XG4gICAgICAgICRzY29wZS5kYXRlQ2xhdXNlID0gZmlyc3QoKSArICdlbmRfZGF0ZV9fYycgKyBjb21wYXJlKGZpbHRlcikgKyBcIidcIiArIGRhdGVTdHJpbmcoZmlsdGVyLmRhdGUpICsgXCInXCI7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoZmlsdGVyLm5hbWUgPT09ICdDcmVhdGUgRGF0ZScgJiYgZmlsdGVyLmRhdGUpIHtcbiAgICAgICAgJHNjb3BlLmRhdGVDbGF1c2UgPSBmaXJzdCgpICsgJ2NyZWF0ZWRhdGUnICsgY29tcGFyZShmaWx0ZXIpICsgXCInXCIgKyBkYXRlU3RyaW5nKGZpbHRlci5kYXRlKSArIFwiJ1wiO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKGZpbHRlci5uYW1lID09PSAnTGFzdCBNb2RpZmllZCcgJiYgZmlsdGVyLmRhdGUpIHtcbiAgICAgICAgJHNjb3BlLmRhdGVDbGF1c2UgPSBmaXJzdCgpICsgJ2xhc3Rtb2RpZmllZGRhdGUnICsgY29tcGFyZShmaWx0ZXIpICsgXCInXCIgKyBkYXRlU3RyaW5nKGZpbHRlci5kYXRlKSArIFwiJ1wiO1xuICAgICAgfVxuXG4gICAgfVxuICAgICRzY29wZS5jb21wb3NlV2hlcmVDbGF1c2UoKTtcbiAgfTtcblxuICAkc2NvcGUuY2xlYXJEYXRlRmlsdGVyID0gZnVuY3Rpb24gKCkge1xuICAgICRzY29wZS5kYXRlRmlsdGVycyA9IFtcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ1N0YXJ0IERhdGUnLFxuICAgICAgICByYWRpbzogJ29uJyxcbiAgICAgICAgZW1wdHk6IHRydWUsXG4gICAgICAgIG9wZW5lZDogZmFsc2UsXG4gICAgICAgIGRhdGU6IG51bGxcbiAgICAgIH0se1xuICAgICAgICBuYW1lOiAnRW5kIERhdGUnLFxuICAgICAgICByYWRpbzogJ29uJyxcbiAgICAgICAgZW1wdHk6IHRydWUsXG4gICAgICAgIG9wZW5lZDogZmFsc2UsXG4gICAgICAgIGRhdGU6IG51bGxcbiAgICAgIH0se1xuICAgICAgICBuYW1lOiAnQ3JlYXRlIERhdGUnLFxuICAgICAgICByYWRpbzogJ29uJyxcbiAgICAgICAgZW1wdHk6IHRydWUsXG4gICAgICAgIG9wZW5lZDogZmFsc2UsXG4gICAgICAgIGRhdGU6IG51bGxcbiAgICAgIH0se1xuICAgICAgICBuYW1lOiAnTGFzdCBNb2RpZmllZCcsXG4gICAgICAgIHJhZGlvOiAnb24nLFxuICAgICAgICBlbXB0eTogdHJ1ZSxcbiAgICAgICAgb3BlbmVkOiBmYWxzZSxcbiAgICAgICAgZGF0ZTogbnVsbFxuICAgICAgfVxuICAgIF07XG4gICAgJHNjb3BlLmRhdGVDbGF1c2UgPSBudWxsO1xuICAgICRzY29wZS5jb21wb3NlV2hlcmVDbGF1c2UoKTtcbiAgfTtcblxuICAvKipcbiAgICogVXNlZCBpbiBkYXRlRmlsdGVyLiBEZXRlcm1pbmVzIHRoZSBwcm9wZXIgU1FMIGNvbXBhcmF0b3IgdG8gdXNlXG4gICAqIGZvciBmaWx0ZXJpbmcgYSBkYXRlLlxuICAgKlxuICAgKiBAcGFyYW0gZmlsdGVyXG4gICAqL1xuICBmdW5jdGlvbiBjb21wYXJlKGZpbHRlcikge1xuICAgIHZhciByYWRpbyA9IGZpbHRlci5yYWRpbztcbiAgICBpZiAocmFkaW8gPT09ICdvbicpIHtcbiAgICAgIHJldHVybiAnPSc7XG4gICAgfVxuICAgIGlmIChyYWRpbyA9PT0gJ2JlZm9yZScpIHtcbiAgICAgIHJldHVybiAnPCc7XG4gICAgfVxuICAgIGlmIChyYWRpbyA9PT0gJ2FmdGVyJykge1xuICAgICAgcmV0dXJuICc+JztcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBkYXRlIGFzIFlZWVktTU0tRERcbiAgICpcbiAgICogQHBhcmFtIGRhdGVcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICovXG4gIGZ1bmN0aW9uIGRhdGVTdHJpbmcoZGF0ZSkge1xuICAgIHJldHVybiBkYXRlLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwxMCk7XG4gIH1cblxuICAkc2NvcGUuYnVkZ2V0RmlsdGVyID0gZnVuY3Rpb24gKCkge1xuICAgICRzY29wZS5idWRnZXRDbGF1c2UgPSBudWxsO1xuICAgIHZhciBtaW4gPSAkc2NvcGUuYnVkZ2V0LnNsaWRlclswXTtcbiAgICB2YXIgbWF4ID0gJHNjb3BlLmJ1ZGdldC5zbGlkZXJbMV07XG4gICAgaWYgKG1pbiAhPT0gMCAmJiBtYXggIT09ICRzY29wZS5idWRnZXQubWF4KSB7IC8vYm90aCBtaW4gYW5kIG1heCBjaGFuZ2VkXG4gICAgICAkc2NvcGUuYnVkZ2V0Q2xhdXNlID0gJ3RvdGFsX2J1ZGdldF9fYz49JyArIG1pbiArICcgQU5EIHRvdGFsX2J1ZGdldF9fYzw9JyArIG1heDtcbiAgICB9IGVsc2UgaWYgKG1pbiAhPT0gMCkgeyAvLyBvbmx5IG1pbiBjaGFuZ2VkXG4gICAgICAkc2NvcGUuYnVkZ2V0Q2xhdXNlID0gJ3RvdGFsX2J1ZGdldF9fYz49JyArIG1pblxuICAgIH0gZWxzZSBpZiAobWF4ICE9PSAkc2NvcGUuYnVkZ2V0Lm1heCkgeyAvLyBvbmx5IG1heCBjaGFuZ2VkXG4gICAgICAkc2NvcGUuYnVkZ2V0Q2xhdXNlID0gJ3RvdGFsX2J1ZGdldF9fYzw9JyArIG1heDtcbiAgICB9XG4gICAgJHNjb3BlLmNvbXBvc2VXaGVyZUNsYXVzZSgpO1xuICB9O1xuXG4gICRzY29wZS5jbGVhckJ1ZGdldEZpbHRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAkc2NvcGUuYnVkZ2V0LnNsaWRlclswXSA9ICRzY29wZS5idWRnZXQubWluO1xuICAgICRzY29wZS5idWRnZXQuc2xpZGVyWzFdID0gJHNjb3BlLmJ1ZGdldC5tYXg7XG4gICAgJHNjb3BlLmJ1ZGdldENsYXVzZSA9IG51bGw7XG4gICAgJHNjb3BlLmNvbXBvc2VXaGVyZUNsYXVzZSgpO1xuICB9O1xuXG4gICRzY29wZS5jb21wb3NlV2hlcmVDbGF1c2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgJHNjb3BlLndoZXJlQ2xhdXNlID0gbnVsbDtcbiAgICB2YXIgcGFydHMgPSBbJHNjb3BlLnNlY3RvckNsYXVzZSwgJHNjb3BlLmRhdGVDbGF1c2UsICRzY29wZS5zdGF0dXNDbGF1c2UsICRzY29wZS5idWRnZXRDbGF1c2VdO1xuICAgIHZhciBmaXJzdCA9IHRydWU7XG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHBhcnRzLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICB2YXIgcGFydCA9IHBhcnRzW2ldO1xuICAgICAgaWYgKHBhcnQpIHtcbiAgICAgICAgaWYgKGZpcnN0KSB7XG4gICAgICAgICAgJHNjb3BlLndoZXJlQ2xhdXNlID0gcGFydDtcbiAgICAgICAgICBmaXJzdCA9IGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICRzY29wZS53aGVyZUNsYXVzZSArPSAnQU5EICcgKyBwYXJ0O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGlmICghJHNjb3BlLndoZXJlQ2xhdXNlKSAkc2NvcGUud2hlcmVDbGF1c2UgPSAnbnVsbCc7XG4gICAgJHNjb3BlLnN1Ym1pdEZpbHRlcigpO1xuICB9O1xuXG4gICRzY29wZS5zdWJtaXRGaWx0ZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgJHN0YXRlUGFyYW1zLmZpbHRlcnMgPSAkc2NvcGUud2hlcmVDbGF1c2U7XG4gICAgdmFyIHN0YXRlID0gJHN0YXRlLmN1cnJlbnQubmFtZSB8fCAnbWFpbic7XG4gICAgJHN0YXRlLmdvKHN0YXRlLCAkc3RhdGVQYXJhbXMpO1xuICB9O1xuXG4gICRzY29wZS5jbGVhckFsbEZpbHRlcnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgJHNjb3BlLmNsZWFyU2VjdG9yc0ZpbHRlcigpO1xuICAgICRzY29wZS5jbGVhclN0YXR1c0ZpbHRlcigpO1xuICAgICRzY29wZS5jbGVhckRhdGVGaWx0ZXIoKTtcbiAgICAkc2NvcGUuY2xlYXJCdWRnZXRGaWx0ZXIoKTtcbiAgfTtcblxufSk7XG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgTmljaG9sYXMgSGFsbGFoYW4gPG5oYWxsYWhhbkBzcGF0aWFsZGV2LmNvbT5cbiAqICAgICAgIG9uIDMvMjcvMTQuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnR2VvQW5ndWxhcicpLmNvbnRyb2xsZXIoJ0luZm9DdHJsJywgZnVuY3Rpb24oJHNjb3BlKSB7XG4gICRzY29wZS5wYXJhbXMgPSAkc3RhdGVQYXJhbXM7XG59KTsiLCIvKipcbiAqIENyZWF0ZWQgYnkgTmljaG9sYXMgSGFsbGFoYW4gPG5oYWxsYWhhbkBzcGF0aWFsZGV2LmNvbT5cbiAqICAgICAgIG9uIDMvMjcvMTQuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnR2VvQW5ndWxhcicpLmNvbnRyb2xsZXIoJ0xheWVyc0N0cmwnLCBmdW5jdGlvbigkc2NvcGUsICRzdGF0ZSwgJHN0YXRlUGFyYW1zLCBMYXllckNvbmZpZywgVmVjdG9yUHJvdmlkZXIpIHtcbiAgJHNjb3BlLnBhcmFtcyA9ICRzdGF0ZVBhcmFtcztcbiAgJHNjb3BlLnpvb20gPSBwYXJzZUludCgkc3RhdGVQYXJhbXMuem9vbSk7XG4gICRzY29wZS5uYXZUYWIgPSAnY29udGV4dHVhbCc7XG5cbiAgZGVidWcuTGF5ZXJDb25maWcgPSBMYXllckNvbmZpZztcbiAgZGVidWcuc2V0R2FkbUxldmVsID0gVmVjdG9yUHJvdmlkZXIuc2V0R2FkbUxldmVsO1xuXG4gICRzY29wZS5nYWRtTGV2ZWwgPSAkc3RhdGVQYXJhbXMubGV2ZWwgfHwgJ2F1dG8nO1xuXG4gICRzY29wZS50aGVtZUxhYmVscyA9IHsgaXNDaGVja2VkOiAkc3RhdGVQYXJhbXMudGhlbWVsYWJlbHMgfHwgdHJ1ZSB9O1xuXG4gICRzY29wZS50aGVtZUxheWVyID0gTGF5ZXJDb25maWcudGhlbWU7XG5cbiAgJHNjb3BlLnVwZGF0ZVRoZW1lTGFiZWwgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAoJHNjb3BlLnRoZW1lTGFiZWxzLmlzQ2hlY2tlZCA9PT0gdHJ1ZSkge1xuICAgICAgJHN0YXRlUGFyYW1zLnRoZW1lbGFiZWxzID0gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAvL3JlbW92ZSBmcm9tIHN0YXRlcGFyYW1zXG4gICAgICBkZWxldGUgJHN0YXRlUGFyYW1zLnRoZW1lbGFiZWxzO1xuICAgIH1cblxuICAgIHZhciBzdGF0ZSA9ICRzdGF0ZS5jdXJyZW50Lm5hbWUgfHwgJ21haW4nO1xuICAgICRzdGF0ZS5nbyhzdGF0ZSwgJHN0YXRlUGFyYW1zKTtcbiAgfVxuXG4gICRzY29wZS4kd2F0Y2goJ2dhZG1MZXZlbCcsIGZ1bmN0aW9uIChuZXdWYWx1ZSkge1xuICAgICRzdGF0ZVBhcmFtcy5sZXZlbCA9IG5ld1ZhbHVlO1xuICAgIHZhciBzdGF0ZSA9ICRzdGF0ZS5jdXJyZW50Lm5hbWUgfHwgJ21haW4nO1xuICAgICRzdGF0ZS5nbyhzdGF0ZSwgJHN0YXRlUGFyYW1zKTtcbiAgfSk7XG5cbiAgJHNjb3BlLiRvbignbGV2ZWwtdXBkYXRlJywgZnVuY3Rpb24gKCkge1xuICAgIFZlY3RvclByb3ZpZGVyLnNldEdhZG1MZXZlbCgkc3RhdGVQYXJhbXMubGV2ZWwpO1xuICAgICRzY29wZS5nYWRtTGV2ZWwgPSAkc3RhdGVQYXJhbXMubGV2ZWxcbiAgfSk7XG5cbiAgJHNjb3BlLiRvbignem9vbS11cGRhdGUnLCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc29sZS5sb2coXCJ6b29tOiBcIiArICRzdGF0ZVBhcmFtcy56b29tKTtcbiAgICAkc2NvcGUuem9vbSA9IHBhcnNlSW50KCRzdGF0ZVBhcmFtcy56b29tKTtcbiAgfSk7XG5cblxuICAvKipcbiAgICogVGhpcyBpcyB0aGUgY29sbGVjdGlvbiBvZiBhbGwgb2YgdGhlIGxheWVycyB3ZSBoYXZlLlxuICAgKiBUaGlzIGlzIHVzZWQgYnkgdGhlIHNlYXJjaExheWVyc0ZpbHRlci5cbiAgICovXG4gICRzY29wZS5hbGxMYXllcnMgPSB7fTtcbiAgLy8gYnVpbGRpbmcgdGhlIGFsbExheWVycyBtb2RlbFxuICBmb3IgKHZhciBrIGluIExheWVyQ29uZmlnKSB7XG4gICAgdmFyIGxheWVyID0gTGF5ZXJDb25maWdba107XG5cbiAgICAvLyBXZSBkb24ndCB3YW50IHRvIHNob3cgbGF5ZXJzIHRoYXQgYXJlIGJhc2VtYXBzLCBhbmQgd2UgZG9uJ3Qgd2FudCB0byBzaG93IHRoZSBmaW5kIGZ1bmMuXG4gICAgICBpZiAoICB0eXBlb2YgbGF5ZXIgPT09ICdmdW5jdGlvbidcbiAgICAgIHx8IGsgPT09ICdiYXNlbWFwcydcbiAgICAgIHx8IGsgPT09ICdiYm94J1xuICAgICAgfHwgbGF5ZXIudHlwZSA9PT0gJ2Jhc2VtYXAnICkge1xuXG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICAkc2NvcGUuYWxsTGF5ZXJzW2tdID0ga2V5VG9PYmooayk7XG4gIH1cblxuICAkc2NvcGUubGF5ZXJzUGFuZWxzID0ge1xuLy8gICAgJ0JvdW5kYXJpZXMnOiB7fSxcbi8vICAgICdHZW9KU09OJzoge30sXG4vLyAgICAnS01MJzoge30sXG4vLyAgICAnQ1NWJzoge30sXG4vLyAgICAnV01TJzoge30sXG4gICAgJ0NvbnRleHR1YWwgbGF5ZXJzOic6IHt9XG4gIH07XG5cbiAgZnVuY3Rpb24gYnVpbGRMYXllcnNNb2RlbCgpIHtcbiAgICAkc2NvcGUubGF5ZXJzUGFuZWxzWydDb250ZXh0dWFsIGxheWVyczonXSA9IHt9O1xuICAgIGZvciAodmFyIGxheWVyS2V5IGluIExheWVyQ29uZmlnKSB7XG4gICAgICB2YXIgbGF5ZXIgPSBMYXllckNvbmZpZ1tsYXllcktleV07XG5cbiAgICAgIC8vIFdlIGRvbid0IHdhbnQgdG8gc2hvdyBsYXllcnMgdGhhdCBhcmUgYmFzZW1hcHMsIGFuZCB3ZSBkb24ndCB3YW50IHRvIHNob3cgdGhlIGZpbmQgZnVuYy5cbiAgICAgIGlmICggIHR5cGVvZiBsYXllciA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICB8fCBsYXllcktleSA9PT0gJ2Jhc2VtYXBzJ1xuICAgICAgICB8fCBsYXllcktleSA9PT0gJ2Jib3gnXG4gICAgICAgIHx8IGxheWVyLnR5cGUgPT09ICdiYXNlbWFwJyApIHtcblxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCEkc2NvcGUuJHN0YXRlUGFyYW1zLnRoZW1lKSB7XG4gICAgICAgIHZhciB0aGVtZSA9ICdwcm9qZWN0JztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciB0aGVtZSA9ICRzY29wZS4kc3RhdGVQYXJhbXMudGhlbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFsYXllci50aGVtZSB8fCAobGF5ZXIudGhlbWUudG9Mb3dlckNhc2UoKSAhPT0gJ2FsbCcgJiYgbGF5ZXIudGhlbWUudG9Mb3dlckNhc2UoKSAhPT0gdGhlbWUpICkge1xuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICAkc2NvcGUubGF5ZXJzUGFuZWxzWydDb250ZXh0dWFsIGxheWVyczonXVtsYXllcktleV0gPSBrZXlUb09iaihsYXllcktleSk7XG5cbiAgICB9XG4gIH1cbiAgYnVpbGRMYXllcnNNb2RlbCgpO1xuXG4gIGRlYnVnLmxheWVyc1BhbmVscyA9ICRzY29wZS5sYXllcnNQYW5lbHM7XG5cbiAgZnVuY3Rpb24ga2V5VG9PYmooa2V5KSB7XG4gICAgdmFyIHZhbCA9IExheWVyQ29uZmlnW2tleV07XG4gICAgaWYgKHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB1cmw6IHZhbFxuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbDtcbiAgfVxuXG4gIC8vTkggVE9ETzogTm90IHlldCBmdWxseSBpbXBsZW1lbnRlZCAtIHBvc3NpYmxlIGV4dHJhIGZlYXR1cmUuLi5cbiAgLyoqXG4gICAqIExheWVycyB0aGF0IGFyZSBhY3RpdmUgb24gdGhlIG1hcCBidXQgYXJlIG5vdCBtZW50aW9uZWQgaW4gTGF5ZXJDb25maWdcbiAgICogQHR5cGUge3t9fVxuICAgKi9cbiAgJHNjb3BlLm5vbWFkTGF5ZXJzID0ge307XG5cblxuICAvKipcbiAgICogV2hlbiB0aGUgcm91dGUgY2hhbmdlcywgd2Ugc2hvdWxkIHNlZSB3aGF0IGxheWVycyB3ZSBoYXZlIG9uIHRoZXJlIGFuZCBoYXZlIHRoZSBsYXllcnNcbiAgICogaW4gdGhlIHBhbmVscyBjaGVja2VkIGFjY29yZGluZ2x5LlxuICAgKi9cbiAgJHNjb3BlLiRvbignbGF5ZXJzLXVwZGF0ZScsIGZ1bmN0aW9uKGV2dCwgbGF5ZXJzKSB7XG5cbiAgICBidWlsZExheWVyc01vZGVsKCk7XG5cbiAgICAvLyBnaXRodWIgZ2lzdHNcbiAgICAkc2NvcGUubGlzdEdpc3RzKCk7XG5cbiAgICAvLyByZXNldCB0aGUgbm9tYWQgbGF5ZXJzXG4gICAgZm9yICh2YXIgbmsgaW4gJHNjb3BlLm5vbWFkTGF5ZXJzKSB7XG4gICAgICAkc2NvcGUubm9tYWRMYXllcnNbbmtdLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIC8vIHJlc2V0IHRoZSBsYXllciBjb25maWcgbGF5ZXJzXG4gICAgZm9yICh2YXIgbGNrIGluIExheWVyQ29uZmlnKSB7XG4gICAgICBpZiAodHlwZW9mIExheWVyQ29uZmlnW2xja10gPT09ICdvYmplY3QnICYmIExheWVyQ29uZmlnW2xja10gIT09IG51bGwpIHtcbiAgICAgICAgTGF5ZXJDb25maWdbbGNrXS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVjayBpZiB0aGUgbGF5ZXIgaXMgYWN0aXZlIGluIG1hcCBsYXllcnNcbiAgICAgKi9cbiAgICAkc2NvcGUubWFwTGF5ZXJzID0gbGF5ZXJzO1xuICAgIC8vIHNraXAgdGhlIGZpcnN0IGxheWVyLCB0aGUgYmFzZW1hcFxuICAgIGZvciAodmFyIGkgPSAxLCBsZW4gPSBsYXllcnMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIHZhciBsID0gbGF5ZXJzW2ldO1xuICAgICAgLy8gbGF5ZXIgaXMgaW4gdGhlIGxheWVyIGNvbmZpZ1xuICAgICAgaWYgKHR5cGVvZiBMYXllckNvbmZpZ1tsXSA9PT0gJ29iamVjdCcgJiYgTGF5ZXJDb25maWdbbF0gIT09IG51bGwpIHtcbiAgICAgICAgTGF5ZXJDb25maWdbbF0uYWN0aXZlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIC8vIGxheWVyIGlzIGEgZ2l0aHViIGdpc3RcbiAgICAgIGVsc2UgaWYgKCRzY29wZS5naXN0c1tsXSkge1xuICAgICAgICAkc2NvcGUuZ2lzdHNbbF0uYWN0aXZlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIC8vIGxheWVyIGlzIGEgbm90IGluIHRoZSBsYXllciBjb25maWcuIGl0J3Mgbm9tYWRpYy5cbiAgICAgIGVsc2Uge1xuICAgICAgICAkc2NvcGUubm9tYWRMYXllcnNbbF0gPSB7XG4gICAgICAgICAgbmFtZTogbCxcbiAgICAgICAgICB1cmw6IGwsXG4gICAgICAgICAgYWN0aXZlOiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gICRzY29wZS4kb24oJ3JvdXRlLXVwZGF0ZScsIGZ1bmN0aW9uKCkge1xuICAgIC8vQ2hlY2sgdGhlIHN0YXRlUGFyYW1zXG4gICAgLy9TcGVjaWZpY2FsbHksIHNlZSBhYm91dCB0aGUgbGFiZWwgcHJvcGVydGllcyBiZWluZyBjaGVja2VkLlxuXG4gICAgdmFyIGNoZWNrZWQgPSAoJHN0YXRlUGFyYW1zLnRoZW1lbGFiZWxzICYmICRzdGF0ZVBhcmFtcy50aGVtZWxhYmVscy50b0xvd2VyQ2FzZSgpID09PSAndHJ1ZScpO1xuICAgICRzY29wZS50aGVtZUxhYmVscyA9IHsgaXNDaGVja2VkOiBjaGVja2VkIH07XG5cbiAgICAvL0lmIHRoZW1lTGFiZWxzIGlzIG5vdCBjaGVja2VkLCByZW1vdmUgdGhlIGxhYmVscy5cbiAgICAvL1JlZnJlc2ggdGhlIHRoZW1lIGxheWVyXG5cbiAgfSk7XG5cblxuICAkc2NvcGUudG9nZ2xlTWFwTGF5ZXIgPSBmdW5jdGlvbiAobGF5ZXJLZXksIGxheWVyKSB7XG5cbiAgICAvLyBhZGQgbGF5ZXJcbiAgICBpZiAobGF5ZXIuYWN0aXZlID09PSB0cnVlKSB7XG4gICAgICAkc2NvcGUubWFwTGF5ZXJzLnB1c2gobGF5ZXJLZXkpO1xuXG4gICAgLy8gcmVtb3ZlIGxheWVyXG4gICAgfSBlbHNlIHtcbiAgICAgICRzY29wZS5tYXBMYXllcnMgPSAkLmdyZXAoJHNjb3BlLm1hcExheWVycywgZnVuY3Rpb24ocm91dGVMYXllcil7XG4gICAgICAgIHJldHVybiByb3V0ZUxheWVyICE9PSBsYXllcktleTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgICRzdGF0ZVBhcmFtcy5sYXllcnMgPSAkc2NvcGUubWFwTGF5ZXJzLmpvaW4oJywnKTtcbiAgICB2YXIgc3RhdGUgPSAkc3RhdGUuY3VycmVudC5uYW1lIHx8ICdtYWluJztcbiAgICAkc3RhdGUuZ28oc3RhdGUsICRzdGF0ZVBhcmFtcyk7XG5cbiAgfTtcblxuXG4gICRzY29wZS5saXN0R2lzdHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgJHNjb3BlLmdpc3RzID0gZ2lzdHMuZmV0Y2goKTtcbiAgICBpZiAoJHNjb3BlLmdpc3RzKSB7XG4gICAgICAkc2NvcGUubnVtR2lzdHMgPSBPYmplY3Qua2V5cygkc2NvcGUuZ2lzdHMpLmxlbmd0aDtcbiAgICB9IGVsc2Uge1xuICAgICAgJHNjb3BlLm51bUdpc3RzID0gMDtcbiAgICB9XG4gIH07XG4gICRzY29wZS5saXN0R2lzdHMoKTtcbiAgZGVidWcuZ2lzdHNMYXllcnNQYW5lbCA9ICRzY29wZS5naXN0cztcblxuICAkc2NvcGUuc2VhcmNoTGF5ZXJzID0gJHNjb3BlLmFsbExheWVycztcblxuICAkc2NvcGUuc2VhcmNoID0gZnVuY3Rpb24oc2VhcmNoVGV4dCkge1xuICAgIHZhciBsYXllcnMgPSAkc2NvcGUuYWxsTGF5ZXJzO1xuICAgIGlmICh0eXBlb2Ygc2VhcmNoVGV4dCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHNlYXJjaFRleHQgPSBzZWFyY2hUZXh0LnRvTG93ZXJDYXNlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICRzY29wZS5zZWFyY2hMYXllcnMgPSBsYXllcnM7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciBzZWFyY2hMYXllcnMgPSB7fTtcbiAgICBmb3IgKHZhciBrIGluIGxheWVycykge1xuICAgICAgdmFyIGwgPSBsYXllcnNba107XG4gICAgICBmb3IgKHZhciBrMiBpbiBsKSB7XG4gICAgICAgIHZhciB2YWwgPSBsW2syXS50b1N0cmluZygpO1xuICAgICAgICBpZiAodmFsLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihzZWFyY2hUZXh0KSA+IC0xKSB7XG4gICAgICAgICAgc2VhcmNoTGF5ZXJzW2tdID0gbDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdmFyIHByb3BzID0gbC5wcm9wZXJ0aWVzO1xuICAgICAgaWYgKHByb3BzKSB7XG4gICAgICAgIGZvciAodmFyIGszIGluIHByb3BzKSB7XG4gICAgICAgICAgdmFyIHZhbCA9IHByb3BzW2szXS50b1N0cmluZygpO1xuICAgICAgICAgIGlmICh2YWwudG9Mb3dlckNhc2UoKS5pbmRleE9mKHNlYXJjaFRleHQpID4gLTEpIHtcbiAgICAgICAgICAgIHNlYXJjaExheWVyc1trXSA9IGw7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgJHNjb3BlLnNlYXJjaExheWVycyA9IHNlYXJjaExheWVycztcbiAgfTtcblxufSk7XG5cbiIsIi8qKlxuICogQ3JlYXRlZCBieSBOaWNob2xhcyBIYWxsYWhhbiA8bmhhbGxhaGFuQHNwYXRpYWxkZXYuY29tPlxuICogICAgICAgb24gMy8yNy8xNC5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdHZW9Bbmd1bGFyJykuY29udHJvbGxlcignTGVnZW5kQ3RybCcsIGZ1bmN0aW9uKCRzY29wZSwgTGF5ZXJDb25maWcsICRzdGF0ZVBhcmFtcykge1xuXG4gICRzY29wZS4kb24oJ2xheWVycy11cGRhdGUnLCBmdW5jdGlvbiAoZXZ0LCBsYXllcnMpIHtcbiAgICAkc2NvcGUubGF5ZXJzID0gW107XG4gICAgZm9yICh2YXIgaSA9IGxheWVycy5sZW5ndGggLSAxOyBpID49IDE7IGktLSl7XG4gICAgICB2YXIgbCA9IGxheWVyc1tpXTtcbiAgICAgIHZhciBsYXllciA9IHt9O1xuICAgICAgdmFyIGxjZmcgPSBMYXllckNvbmZpZy5maW5kKGwpO1xuXG4gICAgICBsYXllci5hbGlhcyA9IGw7XG4gICAgICBsYXllci5uYW1lID0gbGNmZy5uYW1lO1xuICAgICAgaWYobCA9PT0gJ2dhZG0wJyB8fCBsID09PSAndGhlbWUnKXtcbiAgICAgICAgICBsYXllci5uYW1lID0gJHN0YXRlUGFyYW1zLnRoZW1lIHx8ICdQcm9qZWN0JztcbiAgICAgIH1cbiAgICAgIGlmICghbmFtZSAmJiBsY2ZnLnByb3BlcnRpZXMgJiYgbGNmZy5wcm9wZXJ0aWVzLnRpdGxlKSB7XG4gICAgICAgIGxheWVyLm5hbWUgPSBsY2ZnLnByb3BlcnRpZXMudGl0bGU7XG4gICAgICB9IGVsc2UgaWYgKCFsYXllci5uYW1lKSB7XG4gICAgICAgIGxheWVyLm5hbWUgPSBsO1xuICAgICAgfVxuXG4gICAgICBpZihsY2ZnLnByb3BlcnRpZXMpe1xuICAgICAgICAgIGlmKGxjZmcucHJvcGVydGllcy5sZWdlbmQpe1xuICAgICAgICAgICAgICBpZih0eXBlb2YgbGNmZy5wcm9wZXJ0aWVzLmxlZ2VuZCA9PT0gJ2Z1bmN0aW9uJyl7XG4gICAgICAgICAgICAgICAgICAgIC8vQnVpbGQgdGhlIGxlZ2VuZCBlbGVtZW50XG4gICAgICAgICAgICAgICAgICAgIGxheWVyLmFjdGl2ZUxlZ2VuZCA9IGxjZmcucHJvcGVydGllcy5sZWdlbmQoJHN0YXRlUGFyYW1zLnRoZW1lIHx8ICdwcm9qZWN0Jyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgIC8vSWYgbGVnZW5kIGlzIGEgc3RyaW5nLCB1c2UgaXQgZGlyZWN0bHlcbiAgICAgICAgICAgICAgICAgIGxheWVyLmFjdGl2ZUxlZ2VuZCA9IGxjZmcucHJvcGVydGllcy5sZWdlbmQ7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgLy9ObyBsZWdlbmQgZGVmaW5lZC4gIFVzZSBhIGRlZmF1bHQuXG5cbiAgICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgICRzY29wZS5sYXllcnMucHVzaChsYXllcik7XG4gICAgfVxuICB9KTtcblxufSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdHZW9Bbmd1bGFyJykuY29udHJvbGxlcignTWFpbkN0cmwnLCBmdW5jdGlvbigkc2NvcGUsICRyb290U2NvcGUsICRzdGF0ZSwgJHN0YXRlUGFyYW1zLCAkbG9jYXRpb24pIHtcbiAgZGVidWcuJGxvY2F0aW9uID0gJGxvY2F0aW9uO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZGVmYXVsdFJvdXRlJywgJGxvY2F0aW9uLnBhdGgoKSk7XG5cbiAgLy8gTkggVE9ETzogU2VlIGlmIHRoaXMgaXMgYWxzbyB0aGUgY2FzZSB3aXRoIHVpLXJvdXRlcj9cbiAgLy8gd2VpcmQgYnVnIHdoZXJlIHJlZGlyZWN0IHBlZWxzIG91dCAnOi8ve3MnIHdoZW4gJzonIGlzIHRoZXJlXG4gIC8vICRyb3V0ZVBhcmFtcy5sYXllcnMgV2UganVzdCBkb250IGhhdmUgdGhlIDogaW4gbWFpbi5qcyBzbyB0aGF0XG4gIC8vIHBhcnQgb2YgdGhlIHBhdGggZG9lcyBub3QgZ28gYXdheS4uLlxuICB2YXIgbGF5ZXJzU3RyID0gJHN0YXRlUGFyYW1zLmxheWVycyA9ICRzdGF0ZVBhcmFtcy5sYXllcnMucmVwbGFjZSgnaHR0cC8vJywgJ2h0dHA6Ly8nKTtcbiAgdmFyIHRoZW1lU3RyID0gJHN0YXRlUGFyYW1zLnRoZW1lO1xuXG4gIHZhciBsZXZlbFN0ciA9ICRzdGF0ZVBhcmFtcy5sZXZlbDtcbiAgdmFyIHpvb21TdHIgPSAkc3RhdGVQYXJhbXMuem9vbTtcbiAgJHJvb3RTY29wZS4kYnJvYWRjYXN0KCdyb3V0ZS11cGRhdGUnKTtcblxuICAvKipcbiAgICogT25seSBpZiB0aGUgbGF0ZXN0IHJvdXRlIGhhcyBhIGRpZmZlcmVudCBsYXllciBzdHJpbmcgdGhhbiBiZWZvcmUuXG4gICAqL1xuICBpZiAobGF5ZXJzU3RyICE9PSB3aW5kb3cucHJldkxheWVyc1N0ciB8fCB0aGVtZVN0ciAhPT0gd2luZG93LnByZXZUaGVtZSkge1xuICAgIHdpbmRvdy5wcmV2TGF5ZXJzU3RyID0gbGF5ZXJzU3RyO1xuICAgIHdpbmRvdy5wcmV2VGhlbWUgPSB0aGVtZVN0cjtcbiAgICB2YXIgbGF5ZXJzID0gbGF5ZXJzU3RyLnNwbGl0KCcsJyk7XG4gICAgJHJvb3RTY29wZS4kYnJvYWRjYXN0KCdsYXllcnMtdXBkYXRlJywgbGF5ZXJzKTtcbiAgfVxuXG4gIGlmIChsZXZlbFN0ciAhPT0gbnVsbCAmJiBsZXZlbFN0ciAhPT0gd2luZG93LnByZXZMZXZlbFN0cikge1xuICAgIHdpbmRvdy5wcmV2TGV2ZWxTdHIgPSBsZXZlbFN0cjtcbiAgICAkcm9vdFNjb3BlLiRicm9hZGNhc3QoJ2xldmVsLXVwZGF0ZScsIGxldmVsU3RyKTtcbiAgfVxuXG4gIGlmICh6b29tU3RyICE9PSB3aW5kb3cucHJldlpvb21TdHIpIHtcbiAgICB3aW5kb3cucHJldlpvb21TdHIgPSB6b29tU3RyO1xuICAgICRyb290U2NvcGUuJGJyb2FkY2FzdCgnem9vbS11cGRhdGUnLCB6b29tU3RyKTtcbiAgfVxuXG4gIGlmICh0aGVtZVN0ciAhPT0gd2luZG93LnByZXZ0aGVtZVN0cikge1xuICAgIHdpbmRvdy5wcmV2dGhlbWVTdHIgPSB0aGVtZVN0cjtcbiAgICAkcm9vdFNjb3BlLiRicm9hZGNhc3QoJ3RoZW1lLXVwZGF0ZScsIHRoZW1lU3RyKTtcbiAgfVxuXG59KTtcbiIsIi8qKlxuICogQ3JlYXRlZCBieSBOaWNob2xhcyBIYWxsYWhhbiA8bmhhbGxhaGFuQHNwYXRpYWxkZXYuY29tPlxuICogICAgIG9uIE1vbiBNYXIgMTcgMjAxNFxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ0dlb0FuZ3VsYXInKS5jb250cm9sbGVyKCdNYXBDdHJsJywgZnVuY3Rpb24gKCRzY29wZSwgJHJvb3RTY29wZSwgJHN0YXRlLCAkc3RhdGVQYXJhbXMsIExheWVyQ29uZmlnLCBWZWN0b3JQcm92aWRlciwgJGh0dHApIHtcbiAgdmFyIG1hcCA9IEwubWFwKCdtYXAnKTtcbiAgdmFyIGZpcnN0TG9hZCA9IHRydWU7XG5cbiAgJHNjb3BlLnBhcmFtcyA9ICRzdGF0ZVBhcmFtcztcbiAgJHNjb3BlLmJsdXIgPSAnJztcbiAgJHNjb3BlLmdyYXlvdXQgPSAnJzsgLy91c2UgdGhpcyBjbGFzcyB0byBncmF5IG91dCB0aGUgbWFwLCBzdWNoIGFzIHdoZW4gdGhlIGNvdW50cnkgc2VsZWN0b3IgbWVudSBpcyBhY3RpdmVcblxuICAkc2NvcGUudG9nZ2xlU3RhdGUgPSBmdW5jdGlvbiAoc3RhdGVOYW1lKSB7XG4gICAgdmFyIHN0YXRlID0gJHN0YXRlLmN1cnJlbnQubmFtZSAhPT0gc3RhdGVOYW1lID8gc3RhdGVOYW1lIDogJ21haW4nO1xuICAgICRzdGF0ZS5nbyhzdGF0ZSwgJHN0YXRlUGFyYW1zKTtcbiAgfTtcblxuICB2YXIgbGFzdExheWVyc1N0ciA9ICcnO1xuICB2YXIgbGFzdFRoZW1lTGFiZWxzO1xuICB2YXIgbGFzdEJhc2VtYXBVcmwgPSBudWxsO1xuICB2YXIgYmFzZW1hcExheWVyID0gbnVsbDtcbiAgdmFyIGxheWVyc1N0ciA9IG51bGw7XG4gIHZhciBvdmVybGF5TmFtZXMgPSBbXTtcbiAgdmFyIG92ZXJsYXlzID0gW107XG4gIHZhciBvdmVybGF5c19kaWN0aW9uYXJ5ID0ge307XG4gIHZhciB0aGVtZSA9IG51bGw7XG4gIHZhciBmaWx0ZXJzID0gbnVsbDtcblxuICBmdW5jdGlvbiByZWRyYXcoKSB7XG4gICAgdmFyIGxhdCA9IHBhcnNlRmxvYXQoJHN0YXRlUGFyYW1zLmxhdCkgfHwgMDtcbiAgICB2YXIgbG5nID0gcGFyc2VGbG9hdCgkc3RhdGVQYXJhbXMubG5nKSB8fCAwO1xuICAgIHZhciB6b29tID0gcGFyc2VGbG9hdCgkc3RhdGVQYXJhbXMuem9vbSkgfHwgODtcbiAgICBsYXllcnNTdHIgPSAkc3RhdGVQYXJhbXMubGF5ZXJzIHx8IExheWVyQ29uZmlnLnJlZGNyb3NzLnVybDtcbiAgICB2YXIgbGF5ZXJzID0gbGF5ZXJzU3RyLnNwbGl0KCcsJyk7XG5cbiAgICAvLyBmaXJzdCBsYXllciBzaG91bGQgYWx3YXlzIGJlIHRyZWF0ZWQgYXMgdGhlIGJhc2VtYXBcbiAgICB2YXIgYmFzZW1hcCA9IExheWVyQ29uZmlnLmZpbmQobGF5ZXJzWzBdKSB8fCBMYXllckNvbmZpZy5yZWRjcm9zcy51cmw7XG4gICAgaWYgKHR5cGVvZiBiYXNlbWFwID09PSAnc3RyaW5nJykge1xuICAgICAgdmFyIGJhc2VtYXBVcmwgPSBiYXNlbWFwO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgYmFzZW1hcFVybCA9IGJhc2VtYXAudXJsO1xuICAgIH1cbiAgICBvdmVybGF5TmFtZXMgPSBsYXllcnMuc2xpY2UoMSk7XG5cblxuICAgIGlmIChsYXN0QmFzZW1hcFVybCAhPT0gYmFzZW1hcFVybCAmJiB0eXBlb2YgbWFwID09PSAnb2JqZWN0Jykge1xuICAgICAgaWYgKGJhc2VtYXBMYXllcikge1xuICAgICAgICBtYXAucmVtb3ZlTGF5ZXIoYmFzZW1hcExheWVyKTtcbiAgICAgIH1cbiAgICAgIGJhc2VtYXBMYXllciA9IEwudGlsZUxheWVyKGJhc2VtYXBVcmwpLmFkZFRvKG1hcCk7XG5cbiAgICAgIGJhc2VtYXBMYXllci5vbignbG9hZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy9Nb3ZlIHRvIGJhY2tcbiAgICAgICAgYmFzZW1hcExheWVyLmJyaW5nVG9CYWNrKCk7XG4gICAgICB9KTtcblxuICAgIH1cblxuICAgIGlmIChsYXN0TGF5ZXJzU3RyICE9PSBsYXllcnNTdHIpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdTZXR0aW5nIGxheWVycy4nKTtcbiAgICAgIGRyYXdPdmVybGF5cygpO1xuXG4gICAgICAkc2NvcGUuZGVmYXVsdHMgPSB7XG4gICAgICAgIHNjcm9sbFdoZWVsWm9vbTogdHJ1ZVxuICAgICAgfTtcblxuICAgICAgJHNjb3BlLnRpbGVzID0ge1xuICAgICAgICB1cmw6IGJhc2VtYXBVcmxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgdmFyIGMgPSAkc2NvcGUuY2VudGVyID0ge1xuICAgICAgbGF0OiBsYXQsXG4gICAgICBsbmc6IGxuZyxcbiAgICAgIHpvb206IHpvb21cbiAgICB9O1xuXG4gICAgaWYgKHR5cGVvZiBtYXAgPT09ICdvYmplY3QnICYmIChjLmxhdCAhPSAwICYmIGMubG5nICE9IDApKSB7XG4gICAgICBtYXAuc2V0VmlldyhbYy5sYXQsIGMubG5nXSwgem9vbSk7XG4gICAgfVxuXG4gICAgaWYgKCh0aGVtZSAhPSAkc3RhdGVQYXJhbXMudGhlbWUgfHwgZmlsdGVycyAhPSAkc3RhdGVQYXJhbXMuZmlsdGVycykgfHwgZmlyc3RMb2FkID09PSB0cnVlKSB7XG5cbiAgICAgIGZpcnN0TG9hZCA9IGZhbHNlO1xuXG4gICAgICAvL1VwZGF0ZSBsb2NhbCB2YXJpYWJsZXNcbiAgICAgIHRoZW1lID0gJHN0YXRlUGFyYW1zLnRoZW1lO1xuICAgICAgZmlsdGVycyA9ICRzdGF0ZVBhcmFtcy5maWx0ZXJzO1xuXG4gICAgICAvL0NhbGwgdGhlICdvbkNoYW5nZWQnIGZ1bmN0aW9uXG4gICAgICBvblRoZW1lQ2hhbmdlZCgkc3RhdGVQYXJhbXMudGhlbWUpO1xuICAgICAgb25GaWx0ZXJzQ2hhbmdlZCgkc3RhdGVQYXJhbXMuZmlsdGVycyk7XG4gICAgfVxuXG4gICAgYnJvYWRjYXN0QkJveCgpO1xuICAgIGxhc3RMYXllcnNTdHIgPSBsYXllcnNTdHI7XG4gICAgbGFzdEJhc2VtYXBVcmwgPSBiYXNlbWFwVXJsO1xuICB9XG5cbiAgLy9Gb3IgdmVjdG9yIHRpbGUgY2hvcm9wbGV0aHMsIGFzayBmb3IgbmV3IGRhdGEgLmpzb24gZnJvbSB0aGUgc2VydmVyXG4gIG9uVGhlbWVDaGFuZ2VkKCRzdGF0ZVBhcmFtcy50aGVtZSk7XG5cblxuICAvKioqXG4gICAqIEJyb2FkY2FzdCBMaXN0ZW5lcnMuXG4gICAqL1xuICAkc2NvcGUuJG9uKCdyb3V0ZS11cGRhdGUnLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCRzY29wZS5ibHVyID09PSAnYmx1cicgJiYgJHN0YXRlLmN1cnJlbnQubmFtZSAhPT0gJ2xhbmRpbmcnKSB7XG4gICAgICAkc2NvcGUuYmx1ciA9ICcnO1xuICAgIH1cblxuICAgIHZhciBjO1xuICAgIGlmICghJHNjb3BlLmNlbnRlcikge1xuICAgICAgdmFyIGxhdCA9IHBhcnNlRmxvYXQoJHN0YXRlUGFyYW1zLmxhdCkgfHwgMDtcbiAgICAgIHZhciBsbmcgPSBwYXJzZUZsb2F0KCRzdGF0ZVBhcmFtcy5sbmcpIHx8IDA7XG4gICAgICB2YXIgem9vbSA9IHBhcnNlRmxvYXQoJHN0YXRlUGFyYW1zLnpvb20pIHx8IDg7XG5cbiAgICAgIGMgPSAkc2NvcGUuY2VudGVyID0ge1xuICAgICAgICBsYXQ6IGxhdCxcbiAgICAgICAgbG5nOiBsbmcsXG4gICAgICAgIHpvb206IHpvb21cbiAgICAgIH07XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgYyA9ICRzY29wZS5jZW50ZXI7XG4gICAgfVxuXG4gICAgdmFyIGxhdCA9IGMubGF0LnRvRml4ZWQoNik7XG4gICAgdmFyIGxuZyA9IGMubG5nLnRvRml4ZWQoNik7XG4gICAgdmFyIHpvb20gPSBjLnpvb20udG9TdHJpbmcoKTtcbiAgICBpZiAobWFwTW92ZUVuZCkge1xuICAgICAgbWFwTW92ZUVuZCA9IGZhbHNlO1xuICAgIH0gZWxzZSBpZiAoJHN0YXRlUGFyYW1zLmxhdCAhPT0gbGF0XG4gICAgICB8fCAkc3RhdGVQYXJhbXMubG5nICE9PSBsbmdcbiAgICAgIHx8ICRzdGF0ZVBhcmFtcy56b29tICE9PSB6b29tXG4gICAgICB8fCAkc3RhdGVQYXJhbXMubGF5ZXJzICE9PSBsYXllcnNTdHJcbiAgICAgIHx8ICRzdGF0ZVBhcmFtcy50aGVtZSAhPT0gdGhlbWVcbiAgICAgIHx8ICRzdGF0ZVBhcmFtcy5maWx0ZXJzICE9PSBmaWx0ZXJzKSB7XG5cbiAgICAgIGNvbnNvbGUubG9nKCdtYXAuanMgcm91dGUtdXBkYXRlIFVwZGF0aW5nIE1hcC4uLicpO1xuICAgICAgcmVkcmF3KCk7XG4gICAgfVxuXG4gICAgLy9TaG91bGQgd2Ugc2hvdyAnYnViYmxlcycgb24gdG9wIG9mIHRoZSB0aGVtZSBsYXllcj9cbiAgICB2YXIgdGhlbWVMYWJlbHMgPSAoJHN0YXRlUGFyYW1zLnRoZW1lbGFiZWxzICYmICRzdGF0ZVBhcmFtcy50aGVtZWxhYmVscy50b0xvd2VyQ2FzZSgpID09PSAndHJ1ZScpO1xuICAgIGlmICh0aGVtZUxhYmVscyAhPSBsYXN0VGhlbWVMYWJlbHMpIHtcblxuICAgICAgb25UaGVtZUxhYmVsQ2hhbmdlZCgpO1xuICAgICAgbGFzdFRoZW1lTGFiZWxzID0gdGhlbWVMYWJlbHM7XG4gICAgfVxuXG4gIH0pO1xuXG4gICRzY29wZS4kb24oJ2JsdXInLCBmdW5jdGlvbiAoKSB7XG4gICAgJHNjb3BlLmJsdXIgPSAnYmx1cic7XG4gIH0pO1xuXG4gIC8vdGhpcyB0YWtlcyBpbiBhIFdLVCBHZW9KU09OIEV4dGVudCBnZW9tZXRyeVxuICAkc2NvcGUuem9vbVRvRXh0ZW50ID0gZnVuY3Rpb24gKGV4dGVudCkge1xuICAgIGRlbGV0ZSAkc3RhdGVQYXJhbXNbJ3pvb20tZXh0ZW50J107XG5cbiAgICB2YXIgc291dGhXZXN0ID0ge2xhdDogZXh0ZW50WzBdWzFdLCBsbmc6IGV4dGVudFswXVswXX07XG4gICAgdmFyIG5vcnRoRWFzdCA9IHtsYXQ6IGV4dGVudFsyXVsxXSwgbG5nOiBleHRlbnRbMl1bMF19O1xuXG4gICAgJHNjb3BlLmJvdW5kcyA9IEwubGF0TG5nQm91bmRzKHNvdXRoV2VzdCwgbm9ydGhFYXN0KTtcblxuICAgIC8vWm9vbSB0byBib3VuZHNcbiAgICBtYXAuZml0Qm91bmRzKCRzY29wZS5ib3VuZHMpO1xuICB9O1xuXG4gIC8vVGhpcyB0YWtlIGEgbGVhZmxldCBib3VuZHMgb2JqZWN0IGFuZCBoYW5kbGVzIGl0LlxuICBkZWxldGUgJHN0YXRlUGFyYW1zWyd6b29tLWV4dGVudCddO1xuICAkc2NvcGUuem9vbVRvQm91bmRzID0gZnVuY3Rpb24gKGJvdW5kcykge1xuXG4gICAgLy9CdWlsZCBuZXcgYm91bmRzIG9iamVjdFxuICAgICRzY29wZS5ib3VuZHMgPSBMLmxhdExuZ0JvdW5kcyhib3VuZHMuZ2V0U291dGhXZXN0KCksIGJvdW5kcy5nZXROb3J0aEVhc3QoKSk7XG5cbiAgICAvL1pvb20gdG8gYm91bmRzXG4gICAgbWFwLmZpdEJvdW5kcygkc2NvcGUuYm91bmRzKTtcbiAgfTtcblxuXG4gIGZ1bmN0aW9uIGJyb2FkY2FzdEJCb3goKSB7XG4gICAgLy9OSCBUT0RPIEZpeG1lLiBGaW5kIGEgYmV0dGVyIHNvbHV0aW9uIHRoYW4gYSBzcGluIGxvY2suXG4gICAgaWYgKCF3YWl0KSB7XG4gICAgICB3YWl0ID0gdHJ1ZTtcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIC8vR2V0IHRoZSBNSU4vTUFYIFRpbGUgWllYIGV4dGVudHMuXG4gICAgICAgIC8vSWYgdGhleSBoYXZlbid0IGNoYWduZWQsIHRoZW4gZG9uJ3QgcHJvY2VlZC5cblxuICAgICAgICAvL1doZW4gdGhlIHBhZ2UgbG9hZHMsIG5vIHpvb20gb3IgY2VudGVyIGhhcyBiZWVuIHNldCwgc28gZG9uJ3QgZ2V0IGJvdW5kcyB1bnRpbCB0aGF0IGhhcyBoYXBwZW5lZFxuXG4gICAgICAgIGlmICghbWFwLmdldFpvb20oKSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdGlsZUJvdW5kcyA9IGdldEN1cnJlbnRUaWxlQm91bmRzKG1hcCk7XG4gICAgICAgIHZhciB6b29tID0gbWFwLmdldFpvb20oKTtcblxuICAgICAgICAkc2NvcGUuem9vbSA9IHpvb207XG4gICAgICAgIHZhciBtaW54ID0gdGlsZUJvdW5kcy5taW4ueDtcbiAgICAgICAgdmFyIG1heHggPSB0aWxlQm91bmRzLm1heC54O1xuICAgICAgICB2YXIgbWlueSA9IHRpbGVCb3VuZHMubWluLnk7XG4gICAgICAgIHZhciBtYXh5ID0gdGlsZUJvdW5kcy5tYXgueTtcblxuICAgICAgICAvL0RldGVjdCBuZWdhdGl2ZSBtaW5zIGFuZCBzZXQgdG8gMFxuICAgICAgICBpZiAobWlueCA8IDApIG1pbnggPSAwO1xuICAgICAgICBpZiAobWlueSA8IDApIG1pbnkgPSAwO1xuXG4gICAgICAgIC8vQ2hlY2sgZm9yIGV4dHJlbWUgdmFsdWVzIGdyZWF0ZXIgdGhhbiB0aGUgdGlsZSBib3VuZHNcbiAgICAgICAgdmFyIGV4dHJlbWVWYWx1ZSA9IE1hdGgucG93KDIsIHpvb20pIC0gMTtcblxuICAgICAgICBpZiAobWF4eCA+IGV4dHJlbWVWYWx1ZSkgbWF4eCA9IGV4dHJlbWVWYWx1ZTtcbiAgICAgICAgaWYgKG1heHkgPiBleHRyZW1lVmFsdWUpIG1heHkgPSBleHRyZW1lVmFsdWU7XG5cbiAgICAgICAgdmFyIHN0ciA9IHpvb20gKyBcIixcIiArIG1pbnggKyAnLCcgK1xuICAgICAgICAgIG1heHggKyAnLCcgK1xuICAgICAgICAgIG1pbnkgKyAnLCcgK1xuICAgICAgICAgIG1heHk7XG5cbiAgICAgICAgVmVjdG9yUHJvdmlkZXIudXBkYXRlQkJveChzdHIpO1xuICAgICAgICAkcm9vdFNjb3BlLmJib3ggPSBzdHI7IC8vc2F2ZSB0aGUgYmJveCBzdHJpbmcgdG8gcm9vdFNjb3BlIHNvIFZlY3RvclRpbGUgc3R5bGluZyBmdW5jdGlvbnMgaGF2ZSBhY2Nlc3NcblxuXG4gICAgICAgIHdhaXQgPSBmYWxzZTtcbiAgICAgIH0sIDE1MCk7XG4gICAgfVxuXG4gIH1cblxuICAvKipcbiAgICogUmlwcGVkIEZyb20gTGVhZmxldCBUaWxlTGF5ZXJcbiAgICogQ2FsY3VsYXRlIHRoZSBNYXgvTWluIFpZWCBUaWxlIGJvdW5kcy5cbiAgICogVXNlIHRob3NlIHRvIHNuYXAgQkJveCByZXF1ZXN0cyBzbyB3ZSBjYW4gY2FjaGUuXG4gICAqL1xuXG4gIGZ1bmN0aW9uIGdldEN1cnJlbnRUaWxlQm91bmRzKG1hcCkge1xuICAgIHZhciBib3VuZHMgPSBtYXAuZ2V0UGl4ZWxCb3VuZHMoKSxcbiAgICAgIHRpbGVTaXplID0gMjU2OyAvL1RPRE9cblxuICAgIC8vIHRpbGUgY29vcmRpbmF0ZXMgcmFuZ2UgZm9yIHRoZSBjdXJyZW50IHZpZXdcbiAgICB2YXIgdGlsZUJvdW5kcyA9IEwuYm91bmRzKFxuICAgICAgYm91bmRzLm1pbi5kaXZpZGVCeSh0aWxlU2l6ZSkuZmxvb3IoKSxcbiAgICAgIGJvdW5kcy5tYXguZGl2aWRlQnkodGlsZVNpemUpLmZsb29yKCkpO1xuXG4gICAgcmV0dXJuIHRpbGVCb3VuZHM7XG4gIH1cblxuXG4gIC8qKlxuICAgKiBOYXRpdmUgTGVhZmxldCBNYXAgT2JqZWN0XG4gICAqL1xuXG4gIHdpbmRvdy5tYXAgPSBtYXA7XG4gIG1hcC5vbignbW92ZWVuZCcsIGZ1bmN0aW9uICgpIHsgLy8gbW92ZSBpcyBnb29kIHRvb1xuICAgIHZhciBjID0gbWFwLmdldENlbnRlcigpO1xuICAgIHZhciBsYXQgPSBjLmxhdC50b0ZpeGVkKDYpO1xuICAgIHZhciBsbmcgPSBjLmxuZy50b0ZpeGVkKDYpO1xuICAgIHZhciB6b29tID0gbWFwLmdldFpvb20oKS50b1N0cmluZygpO1xuXG4gICAgaWYgKCRzdGF0ZVBhcmFtcy5sYXQgIT09IGxhdFxuICAgICAgfHwgJHN0YXRlUGFyYW1zLmxuZyAhPT0gbG5nXG4gICAgICB8fCAkc3RhdGVQYXJhbXMuem9vbSAhPT0gem9vbSkge1xuXG5cbiAgICAgICRzdGF0ZVBhcmFtcy5sYXQgPSBsYXQ7XG4gICAgICAkc3RhdGVQYXJhbXMubG5nID0gbG5nO1xuICAgICAgJHN0YXRlUGFyYW1zLnpvb20gPSB6b29tO1xuICAgICAgbWFwTW92ZUVuZCA9IHRydWU7XG4gICAgICAkc3RhdGUuZ28oJHN0YXRlLmN1cnJlbnQubmFtZSwgJHN0YXRlUGFyYW1zKTtcbiAgICAgIGJyb2FkY2FzdEJCb3goKTtcblxuICAgICAgLy9VcGRhdGUgRUNPUyBEZXRhaWxzIC0gVXN1YWxseSB0aGlzIGhhcHBlbnMgd2hlbiB0aWxlcyBmaW5pc2ggbG9hZGluZyBhZnRlciBhIHBhbi4gIEJ1dCBzb21ldGltZXMgaWYgdGhlIHRpbGVzIGFyZSBsb2FkZWQvY2FjaGVkLCB0aGVuIHRoZSBldmVudCBkb2Vzbid0IGZpcmUgYWZ0ZXIgdGhlIG1hcCBzdG9wcyBtb3ZpbmcuXG4gICAgICAvL3VwZGF0ZUVDT1NEYXRhKG92ZXJsYXlOYW1lcyk7XG4gICAgfVxuICB9KTtcblxuICAvL21lcmdlIHZlY3RvciB0aWxlcyBpbiB0aGUgbmV3IHZpZXcgd2l0aCAuanNvbiBzdGF0c1xuICBtYXAub24oJ21vdmVlbmQnLCBmdW5jdGlvbiAoKSB7XG4gICAgLy9pZiAoJHJvb3RTY29wZSAmJiAkcm9vdFNjb3BlLnZ0RGF0YSkge1xuICAgIC8vICB2YXIgZGF0YSA9ICRyb290U2NvcGUudnREYXRhO1xuICAgIC8vICB1cGRhdGVFQ09TRGF0YShkYXRhLCBmYWxzZSk7IC8vZmFsc2UgbWVhbnMgdGhlIHRoZW1lIGRpZG4ndCBjaGFuZ2UsIHNvIGRvbid0IGNsZWFyIG9sZCBmZWF0dXJlcy5cbiAgICAvL31cblxuICB9KTtcblxuICAvL0Nvbm5lY3QgdGhlIGxheW91dCBvbnJlc2l6ZSBlbmQgZXZlbnRcbiAgdHJ5IHtcbiAgICB3aW5kb3cubGF5b3V0LnBhbmVzLmNlbnRlci5iaW5kKFwibGF5b3V0cGFuZW9ucmVzaXplX2VuZFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBtYXAuaW52YWxpZGF0ZVNpemUoKTtcbiAgICB9KTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIC8vTm90aGluZ1xuICB9XG5cblxuICBmdW5jdGlvbiBkcmF3T3ZlcmxheXMoKSB7XG5cbiAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gb3ZlcmxheU5hbWVzLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICB2YXIgb3ZlcmxheU5hbWUgPSBvdmVybGF5TmFtZXNbaV07XG4gICAgICB2YXIgY3Vyck92ZXJsYXkgPSBvdmVybGF5c1tpXTtcblxuICAgICAgaWYgKGN1cnJPdmVybGF5ICYmIGN1cnJPdmVybGF5Lm92ZXJsYXlOYW1lID09PSBvdmVybGF5TmFtZSkge1xuICAgICAgICBjb250aW51ZTsgLy8gbGF5ZXIgaXMgYWxyZWFkeSB0aGVyZSwgY29udGludWUgb24hXG4gICAgICB9XG5cbiAgICAgIC8vIHJlbW92ZSB0aGUgY3VycmVudCBsYXllciB0aGF0IGlzIG5vdCB3aGF0IHNob3VsZCBiZSB0aGF0IGxheWVyIGluIHRoZSBsaXN0XG4gICAgICBlbHNlIGlmIChjdXJyT3ZlcmxheSAmJiBjdXJyT3ZlcmxheS5fbWFwKSB7XG4gICAgICAgIGlmIChjdXJyT3ZlcmxheS5kZXN0cm95UmVzb3VyY2UpIGN1cnJPdmVybGF5LmRlc3Ryb3lSZXNvdXJjZSgpO1xuICAgICAgICBtYXAucmVtb3ZlTGF5ZXIoY3Vyck92ZXJsYXkpO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIE1hcG5payBWZWN0b3IgVGlsZSBGb3JtYXQgKC5QQkYpXG4gICAgICAgKi9cbiAgICAgIGlmICh0eXBlb2YgTGF5ZXJDb25maWdbb3ZlcmxheU5hbWVdID09PSAnb2JqZWN0J1xuICAgICAgICAmJiBMYXllckNvbmZpZ1tvdmVybGF5TmFtZV0udHlwZS50b0xvd2VyQ2FzZSgpID09PSAncGJmJykge1xuXG4gICAgICAgIHZhciB2ZWNSZXMgPSBWZWN0b3JQcm92aWRlci5jcmVhdGVSZXNvdXJjZShvdmVybGF5TmFtZSk7XG4gICAgICAgIHZhciBsYXllciA9IHZlY1Jlcy5nZXRMYXllcigpO1xuICAgICAgICBsYXllci5vdmVybGF5TmFtZSA9IG92ZXJsYXlOYW1lO1xuXG4gICAgICB9XG5cbiAgICAgIC8vIHRyeSBmb3IgV01TIChub3QgYSB2ZWN0b3IgbGF5ZXIpXG4gICAgICAvLyBpZiB0aGluZ3MgZ2V0IG1vcmUgZmFuY3kgd2l0aCB3bXMsIGl0IHNob3VsZCBnZXQgaXRzIG93biBmYWN0b3J5XG4gICAgICBlbHNlIGlmICh0eXBlb2YgTGF5ZXJDb25maWdbb3ZlcmxheU5hbWVdID09PSAnb2JqZWN0J1xuICAgICAgICAmJiBMYXllckNvbmZpZ1tvdmVybGF5TmFtZV0udHlwZS50b0xvd2VyQ2FzZSgpID09PSAnd21zJykge1xuXG4gICAgICAgIHZhciBjZmcgPSBMYXllckNvbmZpZ1tvdmVybGF5TmFtZV07XG4gICAgICAgIHZhciBsYXllciA9IEwudGlsZUxheWVyLndtcyhjZmcudXJsLCB7XG4gICAgICAgICAgZm9ybWF0OiBjZmcuZm9ybWF0IHx8ICdpbWFnZS9wbmcnLFxuICAgICAgICAgIHRyYW5zcGFyZW50OiBjZmcudHJhbnNwYXJlbnQgfHwgdHJ1ZSxcbiAgICAgICAgICBsYXllcnM6IGNmZy5sYXllcnNcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogVGlsZXMgdGhhdCBhcmUgYW4gb3ZlcmxheS4gT1NNIC8gR29vZ2xlIC8gTWFwbmlrIHRlbmQgdG8gbWFrZSB0aWxlcyBpbiB0aGlzIGZvcm1hdC5cbiAgICAgICAqL1xuICAgICAgZWxzZSBpZiAodHlwZW9mIExheWVyQ29uZmlnW292ZXJsYXlOYW1lXSA9PT0gJ29iamVjdCdcbiAgICAgICAgJiYgTGF5ZXJDb25maWdbb3ZlcmxheU5hbWVdLnR5cGUudG9Mb3dlckNhc2UoKSA9PT0gJ3h5eicpIHtcblxuICAgICAgICB2YXIgY2ZnID0gTGF5ZXJDb25maWdbb3ZlcmxheU5hbWVdO1xuICAgICAgICB2YXIgbGF5ZXIgPSBMLnRpbGVMYXllcihjZmcudXJsLCB7XG4gICAgICAgICAgb3BhY2l0eTogY2ZnLm9wYWNpdHkgfHwgMC41XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIFRNUyBmbGlwcyB0aGUgeS4gR2VvU2VydmVyIG9mdGVuIHNlcnZlcyB0aGlzLlxuICAgICAgICovXG4gICAgICBlbHNlIGlmICh0eXBlb2YgTGF5ZXJDb25maWdbb3ZlcmxheU5hbWVdID09PSAnb2JqZWN0J1xuICAgICAgICAmJiBMYXllckNvbmZpZ1tvdmVybGF5TmFtZV0udHlwZS50b0xvd2VyQ2FzZSgpID09PSAndG1zJykge1xuICAgICAgICB2YXIgY2ZnID0gTGF5ZXJDb25maWdbb3ZlcmxheU5hbWVdO1xuICAgICAgICB2YXIgbGF5ZXIgPSBMLnRpbGVMYXllcihjZmcudXJsLCB7XG4gICAgICAgICAgb3BhY2l0eTogY2ZnLm9wYWNpdHkgfHwgMC41LFxuICAgICAgICAgIHRtczogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgLy8gaWYgaXRzIG5vdCB3bXMsIGl0cyBhIHZlY3RvciBsYXllclxuICAgICAgZWxzZSB7XG4gICAgICAgIHZhciB2ZWNSZXMgPSBWZWN0b3JQcm92aWRlci5jcmVhdGVSZXNvdXJjZShvdmVybGF5TmFtZSk7XG4gICAgICAgIHZhciBsYXllciA9IHZlY1Jlcy5nZXRMYXllcigpO1xuICAgICAgfVxuXG4gICAgICBsYXllci5vdmVybGF5TmFtZSA9IG92ZXJsYXlOYW1lO1xuICAgICAgbGF5ZXIuYWRkVG8obWFwKTtcbiAgICAgIG92ZXJsYXlzW2ldID0gbGF5ZXI7XG4gICAgICBvdmVybGF5c19kaWN0aW9uYXJ5W292ZXJsYXlOYW1lXSA9IGxheWVyOyAvL2tlZXAgYSBkaWN0aW9uYXJ5IHJlZmVyZW5jZSBmb3IgZmFzdGVyIGZldGNoaW5nIGluIFVwZGF0ZUVDT1NEYXRhXG5cbiAgICB9XG5cbiAgICAvLyB0aGVyZSBhcmUgbW9yZSBvdmVybGF5cyBsZWZ0IGluIHRoZSBsaXN0LCBsZXNzIGxheWVycyBzcGVjaWZpZWQgaW4gcm91dGVcbiAgICAvLyB3ZSBuZWVkIHRvIHJlbW92ZSB0aG9zZSB0b28uXG4gICAgZm9yICh2YXIgbGVuMiA9IG92ZXJsYXlzLmxlbmd0aDsgaSA8IGxlbjI7ICsraSkge1xuICAgICAgaWYgKG92ZXJsYXlzW2ldLmRlc3Ryb3lSZXNvdXJjZSkgb3ZlcmxheXNbaV0uZGVzdHJveVJlc291cmNlKCk7XG4gICAgICBtYXAucmVtb3ZlTGF5ZXIob3ZlcmxheXNbaV0pO1xuICAgICAgZGVsZXRlIG92ZXJsYXlzX2RpY3Rpb25hcnlbb3ZlcmxheXNbaV0ub3ZlcmxheU5hbWVdOyAvL2RlbGV0ZSBkaWN0aW9uYXJ5IHJlZmVyZW5jZSBmb3IgZmFzdGVyIGZldGNoaW5nIGluIFVwZGF0ZUVDT1NEYXRhXG4gICAgICBkZWxldGUgb3ZlcmxheXNbaV07XG5cbiAgICB9XG5cblxuICB9XG5cbiAgLyoqXG4gICAqIFVzZWQgcHJpdmF0ZWx5IHRvIHJlYnVpbGQgdGhlIHRoZW1lIGNvdW50IGxheWVyLlxuICAgKi9cbiAgZnVuY3Rpb24gcmVzZXRUaGVtZUNvdW50KCkge1xuXG4gICAgZm9yICh2YXIgaiA9IDAsIGxlbiA9IG92ZXJsYXlOYW1lcy5sZW5ndGg7IGogPCBsZW47IGorKykge1xuICAgICAgdmFyIG5tZSA9IG92ZXJsYXlOYW1lc1tqXTtcbiAgICAgIGlmIChubWUgPT09ICd0aGVtZWNvdW50JyB8fCBubWUgPT09ICd0aGVtZScpIHtcbiAgICAgICAgdmFyIG9sZEx5ciA9IG92ZXJsYXlzW2pdO1xuICAgICAgICBvbGRMeXIuZGVzdHJveVJlc291cmNlKCk7XG4gICAgICAgIG1hcC5yZW1vdmVMYXllcihvbGRMeXIpO1xuICAgICAgICB2YXIgbmV3THlyID0gb3ZlcmxheXNbal0gPSBWZWN0b3JQcm92aWRlci5jcmVhdGVSZXNvdXJjZShubWUpLmdldExheWVyKCk7XG4gICAgICAgIG5ld0x5ci5hZGRUbyhtYXApO1xuICAgICAgfVxuICAgIH1cblxuICB9XG5cbiAgLyoqXG4gICAqIFdoZW4gdGhlIHRoZW1lIGxhYmVsIHN0YXRlIGNoYW5nZXMsIHRoaXMgZnVuY3Rpb24gd2lsbCBiZSBmaXJlZC5cbiAgICogQHBhcmFtIHRoZW1lXG4gICAqL1xuICBmdW5jdGlvbiBvblRoZW1lTGFiZWxDaGFuZ2VkKCkge1xuXG4gICAgdmFyIGxheWVyID0gb3ZlcmxheXNfZGljdGlvbmFyeVtcImdhZG0wXCJdO1xuXG4gICAgaWYgKGxheWVyKSB7XG5cbiAgICAgIHZhciBsYXllcnMgPSBsYXllci5nZXRMYXllcnMoKTtcbiAgICAgIHZhciB2dExheWVyID0gbGF5ZXJzW1wiR0FETV8yMDE0XCJdO1xuICAgICAgdmFyIHZ0TGFiZWxMYXllciA9IGxheWVyc1tcIkdBRE1fMjAxNF9sYWJlbFwiXTtcblxuICAgICAgLy9DbGVhciBlY29zIHByb3BlcnR5IGZyb20gTVZURmVhdHVyZVxuICAgICAgY2xlYXJGZWF0dXJlUHJvcGVydGllcyh2dExheWVyLmZlYXR1cmVzKTtcbiAgICAgIC8vQ2xlYXIgZWNvcyBwcm9wZXJ0eSBmcm9tIExhYmVsIExheWVyXG4gICAgICBjbGVhckZlYXR1cmVQcm9wZXJ0aWVzKHZ0TGFiZWxMYXllci5mZWF0dXJlcyk7XG5cbiAgICAgIC8vVXBkYXRlIExheWVyKHMpIHN0eWxlIGFuZCByZWRyYXdcbiAgICAgIHZ0TGF5ZXIuY2xlYXJMYXllckZlYXR1cmVIYXNoKCk7IC8vRm9yY2UgVlRzIHRvIGJlIHJlcGFyc2VkLlxuICAgICAgdnRMYWJlbExheWVyLmNsZWFyTGF5ZXJGZWF0dXJlSGFzaCgpO1xuXG4gICAgICAvL2xheWVyLnNldFN0eWxlKGxheWVyLnN0eWxlKTsgLy9mZWVkIGJhY2sgaW4gdGhlIHNhbWUgc3R5bGVcbiAgICAgIGxheWVyLnJlZHJhdyhmYWxzZSk7IC8vZmFsc2UgbWVhbnMgdGhhdCB0aGlzIHJlZHJhdyB3b24ndCB0cmlnZ2VyIHRoZSBvblRpbGVzTG9hZGVkIGV2ZW50LlxuICAgICAgLy91cGRhdGVFQ09TRGF0YShndWlkcywgdHJ1ZSk7IC8vdHJ1ZSBpcyBmb3IgVGhlbWVDaGFuZ2VkIGJvb2xlYW5cbiAgICB9XG5cbiAgfVxuXG5cblxuICAvKipcbiAgICogV2hlbiB0aGUgdGhlbWUgY2hhbmdlcywgdGhpcyBmdW5jdGlvbiB3aWxsIGJlIGZpcmVkLlxuICAgKiBAcGFyYW0gdGhlbWVcbiAgICovXG4gIGZ1bmN0aW9uIG9uVGhlbWVDaGFuZ2VkKHRoZW1lKXtcbiAgICAvL3Jlc2V0IHRoZW1lIGNvdW50XG4gICAgcmVzZXRUaGVtZUNvdW50KCk7XG5cbiAgICB2YXIgbGF5ZXIgPSBvdmVybGF5c19kaWN0aW9uYXJ5W1wiZ2FkbTBcIl07XG5cbiAgICBpZihsYXllcil7XG4gICAgICAvL0ZvciB2ZWN0b3IgdGlsZSBjaG9yb3BsZXRocywgYXNrIGZvciBuZXcgZGF0YSAuanNvbiBmcm9tIHRoZSBzZXJ2ZXJcbiAgICAgIGdldEVDT1NQcm9wZXJ0aWVzKGZ1bmN0aW9uIChkYXRhKSB7XG5cbiAgICAgICAgaWYoZGF0YSAmJiBkYXRhLmZlYXR1cmVzKSB7XG5cbiAgICAgICAgICB2YXIgZ3VpZHMgPSB7fTtcblxuICAgICAgICAgIGFuZ3VsYXIuZm9yRWFjaChkYXRhLmZlYXR1cmVzLCBmdW5jdGlvbiAoZGF0YUl0ZW0sIGRhdGFLZXkpIHtcbiAgICAgICAgICAgIGd1aWRzW2RhdGFJdGVtLnByb3BlcnRpZXMuZ3VpZF0gPSBkYXRhSXRlbS5wcm9wZXJ0aWVzO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgJHJvb3RTY29wZS52dERhdGEgPSBndWlkczsgLy9TdG9yZSB0aGUgZGF0YSB0byBiZSBtZXJnZWQgd2l0aCB2ZWN0b3IgdGlsZSBsYXllci4gIEluIGNvbmZpZy92ZWN0b3J0aWxlcy5qcywgdGhlIE1WVCBjaG9yb3BsZXRoIGxheWVycyB3aWxsIGF0dGVtcHQgdG8gbWVyZ2UgdGhpcyBkYXRhIGluIHdoZW4gdGlsZXMgZmluaXNoIGxvYWRpbmcgKGFueSB0aW1lIG5ldyB0aWxlcyBhcmUgcmVxdWVzdGVkLCBsaWtlIHpvb21pbi9vdXQvcGFuKVxuXG4gICAgICAgICAgdmFyIGxheWVycyA9IGxheWVyLmdldExheWVycygpO1xuICAgICAgICAgIHZhciB2dExheWVyID0gbGF5ZXJzW1wiR0FETV8yMDE0XCJdO1xuICAgICAgICAgIHZhciB2dExhYmVsTGF5ZXIgPSBsYXllcnNbXCJHQURNXzIwMTRfbGFiZWxcIl07XG5cbiAgICAgICAgICAvL0NsZWFyIGVjb3MgcHJvcGVydHkgZnJvbSBNVlRGZWF0dXJlXG4gICAgICAgICAgY2xlYXJGZWF0dXJlUHJvcGVydGllcyh2dExheWVyLmZlYXR1cmVzKTtcbiAgICAgICAgICAvL0NsZWFyIGVjb3MgcHJvcGVydHkgZnJvbSBMYWJlbCBMYXllclxuICAgICAgICAgIGNsZWFyRmVhdHVyZVByb3BlcnRpZXModnRMYWJlbExheWVyLmZlYXR1cmVzKTtcblxuICAgICAgICAgIC8vVXBkYXRlIExheWVyKHMpIHN0eWxlIGFuZCByZWRyYXdcbiAgICAgICAgICB2dExheWVyLmNsZWFyTGF5ZXJGZWF0dXJlSGFzaCgpOyAvL0ZvcmNlIFZUcyB0byBiZSByZXBhcnNlZC5cbiAgICAgICAgICB2dExhYmVsTGF5ZXIuY2xlYXJMYXllckZlYXR1cmVIYXNoKCk7XG5cbiAgICAgICAgICAvL2xheWVyLnNldFN0eWxlKGxheWVyLnN0eWxlKTsgLy9mZWVkIGJhY2sgaW4gdGhlIHNhbWUgc3R5bGVcbiAgICAgICAgICBsYXllci5yZWRyYXcoZmFsc2UpOyAvL2ZhbHNlIG1lYW5zIHRoYXQgdGhpcyByZWRyYXcgd29uJ3QgdHJpZ2dlciB0aGUgb25UaWxlc0xvYWRlZCBldmVudC5cbiAgICAgICAgICAvL3VwZGF0ZUVDT1NEYXRhKGd1aWRzLCB0cnVlKTsgLy90cnVlIGlzIGZvciBUaGVtZUNoYW5nZWQgYm9vbGVhblxuICAgICAgICB9XG5cbiAgICAgIH0pXG4gICAgfVxuXG5cblxuICAgIC8vcmVkcmF3IG1hcCBvdmVybGF5cyAtIHZlY3RvciB0aWxlcyBuZWVkIHRvIGJlIHJlLXN0eWxlZCB3aXRoIG5ldyB0aGVtZSBkYXRhLlxuICAgIC8vcmVkcmF3TWFwT3ZlcmxheXMob3ZlcmxheU5hbWVzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXaGVuIHRoZSBmaWx0ZXJzIGNoYW5nZSwgdGhpcyBmdW5jdGlvbiB3aWxsIGJlIGZpcmVkLlxuICAgKiBAcGFyYW0gdGhlbWVcbiAgICovXG4gIGZ1bmN0aW9uIG9uRmlsdGVyc0NoYW5nZWQoZmlsdGVycyl7XG5cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlZHJhd01hcE92ZXJsYXlzKGxheWVyTmFtZXMpe1xuICAgIG1hcC5lYWNoTGF5ZXIoZnVuY3Rpb24gKGxheWVyKSB7XG4gICAgICBpZihsYXllck5hbWVzLmluZGV4T2YobGF5ZXIub3ZlcmxheU5hbWUpID4gLTEpe1xuICAgICAgICBsYXllci5yZWRyYXcoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUYWtlIGRhdGEvcHJvcGVydGllcyBmcm9tIHRoZSBzZXJ2ZXIgYW5kIG1lcmdlIHRoZW0gaW4gd2l0aCBhIHZlY3RvciB0aWxlcyBsYXllci5cbiAgICogQHBhcmFtIGVjb3NEYXRhIC0gdGhlIGRhdGFcbiAgICogQHBhcmFtIGxheWVyTmFtZXMgLSBhbnkgbGF5ZXIgbmFtZXMgdG8gYXBwbHkgdGhlIGRhdGEgdG9cbiAgICogQG5ld1RoZW1lIC0gYm9vbGVhbi4gSWYgdHJ1ZSwgYSBuZXcgdGhlbWUgaGFzIGJlZW4gc2VsZWN0ZWQsIHNvIGV4aXN0aW5nIFZUIHByb3BldGllcyB3aWxsIGJlIGNsZWFyZWQuICBJZiBmYWxzZSwgdGhlbiB3ZSBjYW4gc2tpcCBmZWF0dXJlcyB0aGF0IGFscmVhZHkgaGF2ZSBiZWVuICdmaWxsZWQnIGFuZCB3b3JyeSBhYm91dCBuZXcgb25lcy5cbiAgICovXG4gIGZ1bmN0aW9uIHVwZGF0ZUVDT1NEYXRhKGVjb3NEYXRhLCBuZXdUaGVtZSkge1xuXG4gICAgICB2YXIgbGF5ZXIgPSBvdmVybGF5c19kaWN0aW9uYXJ5W1wiZ2FkbTBcIl07XG5cbiAgICAgIGlmKGxheWVyKXtcbiAgICAgICAgaWYgKGVjb3NEYXRhKSB7XG4gICAgICAgICAgdmFyIGxheWVycyA9IGxheWVyLmdldExheWVycygpO1xuXG4gICAgICAgICAgLy9VcGRhdGUgVlRGU291cmNlIGZpbHRlclxuICAgICAgICAgIC8vbGF5ZXIuc2V0RmlsdGVyKGZ1bmN0aW9uKG12dCwgY3R4KXtcbiAgICAgICAgICAvLyAgLy9GaWx0ZXIgY2hlY2tzIGlmIGZlYXR1cmUgaGFzIGVjb3MgcHJvcGVydGllcy5cbiAgICAgICAgICAvLyAgcmV0dXJuICgkcm9vdFNjb3BlLnZ0RGF0YSAmJiAkcm9vdFNjb3BlLnZ0RGF0YVttdnQucHJvcGVydGllcy5ndWlkXSkgPyB0cnVlIDogZmFsc2U7XG4gICAgICAgICAgLy99KVxuXG4gICAgICAgICAgLy9JZiBhbnkgZmVhdHVyZXMgYXJlIHJldHVybmVkLCBsb29wIHRocnUgdGhlIHZ0ZnMgYW5kIGFwcGx5IHRoZXNlIHZhbHVlcywgcmVzdHlsZS5cbiAgICAgICAgICBtZXJnZUVDT1NQcm9wZXJ0aWVzKGxheWVycywgZWNvc0RhdGEsIG5ld1RoZW1lKTtcblxuXG5cbiAgICAgICAgICAvL1VwZGF0ZSBMYXllcihzKSBzdHlsZSBhbmQgcmVkcmF3XG4gICAgICAgICAgbGF5ZXIuc2V0U3R5bGUobGF5ZXIuc3R5bGUpOyAvL2ZlZWQgYmFjayBpbiB0aGUgc2FtZSBzdHlsZVxuICAgICAgICAgIGxheWVyLnJlZHJhdyhmYWxzZSk7IC8vZmFsc2UgbWVhbnMgdGhhdCB0aGlzIHJlZHJhdyB3b24ndCB0cmlnZ2VyIHRoZSBvblRpbGVzTG9hZGVkIGV2ZW50LlxuICAgICAgICB9XG4gICAgICB9XG5cbiAgfVxuXG4gIC8qKipcbiAgICpcbiAgICogV2hlbiB0aGUgYXBwIHN0YXJ0cywgb3Igd2hlbiB0aGUgZmlsdGVycyBjaGFuZ2UsIGZldGNoIHRoZSAuanNvbiBmaWxlIHRoYXQgY29udGFpbnMgdGhlIGNvdW50cyBmb3IgYWxsIG9mIHRoZSBkaXN0cmljdHMgZm9yIGEgZ2l2ZW4gQWRtaW5pc3RyYXRpdmUgYm91bmRhcnkgbGV2ZWxcbiAgICogQ3VycmVudGx5LCBlYWNoIG9mIHRoZXNlIGZpbGVzIHdpbGwgYmUgc21hbGwgZW5vdWdoIHRvIGJ1bGsgbG9hZCB0aGVtIGEgc2luZ2xlIHRpbWUsIGFzIG9wcG9zZWQgdG8gd2hlbiB0aGUgdXNlciBwYW5zIHRoZSBtYXAuXG4gICAqIFRoZXNlIGZpbGVzIHdpbGwgYmUgdXNlZCB0byB1cGRhdGUgdGhlIHZlY3RvciB0aWxlcyBjaG9yb3BsZXRoIG1hcC5cbiAgICpcbiAgICogQHBhcmFtICRodHRwXG4gICAqIEBwYXJhbSAkcm9vdFNjb3BlXG4gICAqIEBwYXJhbSBjYlxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0RUNPU1Byb3BlcnRpZXMgKGNiKXtcbiAgICAvL1RoaXMgc2hvdWxkIGZldGNoIGRhdGEgZnJvbSB0aGUgc2VydmVyIHRoYXQgcGVydGFpbnMgdG8gdGhlIGZlYXR1cmVzIGxvYWRlZCBpbiB0aGUgY3VycmVudCBleHRlbnQuXG4gICAgLy92YXIgdXJsID0gXCJodHRwOi8vbG9jYWxob3N0OjMwMDEvc2VydmljZXMvY3VzdG9tL2N1c3RvbV9vcGVyYXRpb24/bmFtZT1nZXRhZ2dyZWdhdGVkdGhlbWVmZWF0dXJlc2J5ZXh0ZW50JmZvcm1hdD1nZW9qc29uJmJib3g9OmJib3gmdGhlbWU9OnRoZW1lJmdhZG1fbGV2ZWw9MCZmaWx0ZXJzPTpmaWx0ZXJzXCI7XG4gICAgdmFyIHVybCA9IFwiLi4vc2VydmljZXMvY3VzdG9tL2N1c3RvbV9vcGVyYXRpb24/bmFtZT1nZXRhbGxhZ2dyZWdhdGVkdGhlbWVmZWF0dXJlcyZmb3JtYXQ9Z2VvanNvbiZ0aGVtZT06dGhlbWUmZ2FkbV9sZXZlbD0wJmZpbHRlcnM9OmZpbHRlcnNcIjtcbiAgICAvL3VybCA9IHVybC5yZXBsYWNlKFwiOmJib3hcIiwgJHJvb3RTY29wZS5iYm94KTtcblxuICAgIGlmICgkcm9vdFNjb3BlLiRzdGF0ZVBhcmFtcy5maWx0ZXJzKSB7XG4gICAgICBmaWx0ZXJzID0gJHJvb3RTY29wZS4kc3RhdGVQYXJhbXMuZmlsdGVycztcbiAgICAgIC8vQWRkIGZpbHRlcnMgdG8gVVJMLlxuICAgICAgdXJsID0gdXJsLnJlcGxhY2UoXCI6ZmlsdGVyc1wiLCBmaWx0ZXJzKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB1cmwgPSB1cmwucmVwbGFjZShcIiZmaWx0ZXJzPTpmaWx0ZXJzXCIsIFwiXCIpOyAvL25vIGZpbHRlcnMuICBSZW1vdmVcbiAgICB9XG5cbiAgICB2YXIgdGhlbWUgPSAkcm9vdFNjb3BlLiRzdGF0ZVBhcmFtcy50aGVtZSB8fCAncHJvamVjdCc7XG4gICAgdXJsID0gdXJsLnJlcGxhY2UoXCI6dGhlbWVcIiwgdGhlbWUpO1xuXG4gICAgLy9XaGVuIGRvbmUsIGNhbGwgdGhlIGNiIChjYWxsYmFjaykgZnVuY3Rpb25cbiAgICAkaHR0cC5nZXQodXJsLCB7Y2FjaGU6IHRydWV9KS5zdWNjZXNzKGNiKS5lcnJvcihmdW5jdGlvbiAoZXJyKSB7XG4gICAgICBjb25zb2xlLmxvZyhcImVyclwiKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vVGFrZSBhbiBNVlRMYXllcihzKSBhbmQgYWRkIGluIHByb3BlcnRpZXMgZnJvbSBhIHdlYiBzZXJ2aWNlIGNhbGxcbiAgLy9uZXdUaGVtZSBpcyBhIGJvb2xlYW4gdGhhdCB0ZWxscyB1cyB3aGV0aGVyIHRvIGNsZWFyIGV4aXN0aW5nIHByb3BlcnRpZXMgb3Iga2VlcCB3aGF0IHdlJ3ZlIGdvdCBhbmQganVzdCBhZGQgdG8gdGhlIHNldC5cbiAgZnVuY3Rpb24gbWVyZ2VFQ09TUHJvcGVydGllcyhNVlRMYXllcnMsIGRhdGEsIG5ld1RoZW1lKXtcbiAgICBpZiAoTVZUTGF5ZXJzKSB7XG5cbiAgICAgIHZhciBmdWxsU3RhcnQgPSBuZXcgRGF0ZSgpO1xuXG4gICAgICAvL0dyYWIgdGhlIGN1cnJlbnQgdGhlbWUuXG4gICAgICB2YXIgdGhlbWUgPSAoJHJvb3RTY29wZSAmJiAkcm9vdFNjb3BlLiRzdGF0ZVBhcmFtcyAmJiAkcm9vdFNjb3BlLiRzdGF0ZVBhcmFtcy50aGVtZSkgfHwgJ3Byb2plY3QnO1xuXG4gICAgICBmb3IgKHZhciBsYXllciBpbiBNVlRMYXllcnMpIHtcbiAgICAgICAgaWYgKGxheWVyICYmIE1WVExheWVyc1tsYXllcl0uZmVhdHVyZXMpIHtcblxuICAgICAgICAgIC8vb3B0aW9uYWxseSBjbGVhciBvdXQgb2xkIEVDT1MgcHJvcGVydGllcy5cbiAgICAgICAgICBpZiAobmV3VGhlbWUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIC8vQ2xlYXIgZWNvcyBwcm9wZXJ0eSBmcm9tIE1WVEZlYXR1cmVcbiAgICAgICAgICAgIGNsZWFyRmVhdHVyZVByb3BlcnRpZXMoTVZUTGF5ZXJzW2xheWVyXS5mZWF0dXJlcyk7XG4gICAgICAgICAgICAvL1widW5saW5rXCIgdGhlIGRhdGEgLSBzZXQgdGhlIGxpbmtlZCBwcm9wZXJ0eSB0byBmYWxzZS5cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvL0l0ZXJhdGUgb3ZlciBkYXRhLCB1c2UgdGhlIElEIHRvIGF0dGVtcHQgdG8gbGluZSB1cCBkYXRhIGluIE1WVExheWVyLmZlYXR1cmVzIGRpY3Rpb25hcnkgKGlkIGlzIHRoZSBrZXkpXG4gICAgICAgICAgYW5ndWxhci5mb3JFYWNoKE9iamVjdC5rZXlzKGRhdGEpLCBmdW5jdGlvbiAoa2V5KSB7IC8vLm1hcChmdW5jdGlvbihpdGVtKXsgcmV0dXJuICFpdGVtLnByb3BlcnRpZXMuaXNNYXBwZWQ7IH0pXG4gICAgICAgICAgICB2YXIgdnRmID0gTVZUTGF5ZXJzW2xheWVyXS5mZWF0dXJlc1trZXldO1xuXG4gICAgICAgICAgICAvL21hcmsgYXMgbGlua2VkXG4gICAgICAgICAgICBkYXRhLmlzTGlua2VkID0gdHJ1ZTtcblxuICAgICAgICAgICAgaWYgKHZ0Zikge1xuICAgICAgICAgICAgICB2dGYucHJvcGVydGllcy50aGVtZSA9IHRoZW1lO1xuICAgICAgICAgICAgICB2dGYucHJvcGVydGllcy5lY29zX3Byb3BlcnRpZXMgPSB7fTtcbiAgICAgICAgICAgICAgdnRmLnByb3BlcnRpZXMuZWNvc19wcm9wZXJ0aWVzW3RoZW1lXSA9IGRhdGFba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciBtc0RpZmYgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIG5ldyBEYXRlKGZ1bGxTdGFydCkuZ2V0VGltZSgpOyAvL0RpZmZlcmVuY2UgaW4gbXNcbiAgICAgIGNvbnNvbGUubG9nKFwiTWVyZ2UgVGltZTogXCIgKyBtc0RpZmYpO1xuICAgIH1cbiAgfVxuXG4gIC8vQXMgd2Ugc3dhcCBFQ09TIHByb3BlcnRpZXMgb3V0IG9uIHRoZSB2ZWN0b3IgdGlsZSBsYXllciwgY2xlYXIgb3V0IHRoZSBvbGQgcHJvcGVydGllcyBzbyB3ZSBkb24ndCBnZXQgcmVzaWR1YWwgdGhlbWUgdmFsdWVzIGZyb20gb2xkIHRoZW1lcy5cbiAgZnVuY3Rpb24gY2xlYXJGZWF0dXJlUHJvcGVydGllcyhmZWF0dXJlcyl7XG5cbiAgICBhbmd1bGFyLmZvckVhY2goZmVhdHVyZXMsIGZ1bmN0aW9uICh2dGYsIHZ0ZmtleSkge1xuICAgICAgaWYodnRmLnByb3BlcnRpZXMpIHtcbiAgICAgICAgdnRmLnByb3BlcnRpZXMuZWNvc19wcm9wZXJ0aWVzID0ge307XG4gICAgICAgIHZ0Zi50aGVtZSA9IFwiXCI7XG4gICAgICB9XG5cbiAgICAgIC8vUmVtb3ZlIE9sZCBsYWJlbHNcbiAgICAgIHZ0Zi5yZW1vdmVMYWJlbCgpO1xuXG4gICAgfSk7XG5cbiAgfVxuXG59KTtcbiIsIm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ0dlb0FuZ3VsYXInKS5jb250cm9sbGVyKCdOYXZCYXJDdHJsJywgZnVuY3Rpb24oJHNjb3BlLCAkc3RhdGUsICRzdGF0ZVBhcmFtcykge1xuXG4gICRzY29wZS5wYXJhbXMgPSAkc3RhdGVQYXJhbXM7XG5cbn0pO1xuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IFJ5YW4gV2hpdGxleSA8cndoaXRsZXlAc3BhdGlhbGRldi5jb20+XG4gKiAgICAgICBvbiA1LzIxLzE0LlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ0dlb0FuZ3VsYXInKS5jb250cm9sbGVyKCdTZWFyY2hFQ09TQ3RybCcsIGZ1bmN0aW9uKCRzY29wZSwgJHJvb3RTY29wZSwgJHN0YXRlUGFyYW1zLCAkaHR0cCwgVmVjdG9yUHJvdmlkZXIpIHtcbiAgY29uc29sZS5sb2coJ1NlYXJjaEVDT1NDdHJsJyk7XG4gICRzY29wZS5wYXJhbXMgPSAkc3RhdGVQYXJhbXM7XG5cbiAgdmFyIHVybCA9IGNvbmZpZy5jaHViYnNQYXRoKCdzZXJ2aWNlcy9jdXN0b20vY3VzdG9tX29wZXJhdGlvbj9uYW1lPWRvZWNvc3RleHRzZWFyY2gmZm9ybWF0PWpzb24mdGV4dD06dGV4dCcpO1xuXG4gICRzY29wZS5zZWFyY2hUZXh0ID0gJyc7XG4gICRzY29wZS4kd2F0Y2goJ1NlYXJjaElucHV0JywgZXhlY3V0ZUVDT1NTZWFyY2gsIHRydWUpO1xuXG5cbiAgZnVuY3Rpb24gZXhlY3V0ZUVDT1NTZWFyY2ggKHRleHQpe1xuICAgICAgaWYoIXRleHQgfHwgdGV4dC5sZW5ndGggPCAzKSByZXR1cm47XG5cbiAgICAgIHZhciB0aGlzVVJMID0gdXJsLnJlcGxhY2UoXCI6dGV4dFwiLCB0ZXh0KTtcblxuICAgICAgLy8gRmV0Y2ggZnJvbSB0aGUgc2VydmVyIG9ubHkgaWYgd2UgZG9uJ3QgaGF2ZSBpdCBpbiB0aGUgaGFzaFxuICAgICAgJGh0dHAuZ2V0KHRoaXNVUkwpLnN1Y2Nlc3MoZnVuY3Rpb24gKHJlc3VsdCwgc3RhdHVzKSB7XG5cbiAgICAgICAgICBpZiAoIXJlc3VsdCl7XG4gICAgICAgICAgICAgICRzY29wZS5yZXN1bHRzID0gW3tuYW1lOiBcIk5vIHJlc3VsdHMgZm91bmQuXCJ9XTtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmKHJlc3VsdC5lcnJvcikge1xuICAgICAgICAgICAgICAkc2NvcGUucmVzdWx0cyA9IFt7bmFtZTogXCJFcnJvciBzZWFyY2hpbmcgRUNPUy5cIn1dO1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy9icmVhayB1cCB0aGUgcmVzdWx0cyBieSB0eXBlLlxuICAgICAgICAgICRzY29wZS5wcm9qZWN0UmVzdWx0cyA9IHJlc3VsdC5maWx0ZXIoZnVuY3Rpb24oaXRlbSl7XG4gICAgICAgICAgICAgcmV0dXJuIGl0ZW0udGhlbWVfdHlwZSA9PSAnUHJvamVjdCc7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICAkc2NvcGUuZGlzYXN0ZXJSZXN1bHRzID0gcmVzdWx0LmZpbHRlcihmdW5jdGlvbihpdGVtKXtcbiAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0udGhlbWVfdHlwZSA9PSAnRGlzYXN0ZXInO1xuICAgICAgICAgIH0pO1xuXG4gICAgICB9KTtcbiAgfVxuXG4gICAgLy9XaGVuIGEgdXNlciBjbGlja3Mgb25lIG9mIHRoZSBzZWFyY2ggcmVzdWx0IGl0ZW1zXG4gICAgJHNjb3BlLmhhbmRsZVNlYXJjaFJlc3VsdENsaWNrID0gZnVuY3Rpb24ocHJvcGVydGllcyl7XG4gICAgICAgIC8vU2VuZCB0byBkZWF0aWxzIHBhbmVsXG4gICAgICAgIHNlbmRQcm9qZWN0VG9EZXRhaWxzUGFuZWwocHJvcGVydGllcyk7XG5cbiAgICAgICAgLy9JZiB3ZSBoYXZlIGEgZ3VpZCwgdGhlbiB0cnkgdG8gem9vbSB0byBpdC5cbiAgICAgICAgaWYocHJvcGVydGllcy5sb2NhdGlvbl9fcl9naXNfZ2VvX2lkX19jICYmIHByb3BlcnRpZXMubGV2ZWwpe1xuICAgICAgICAgICAgem9vbVRvR1VJRChwcm9wZXJ0aWVzLmxvY2F0aW9uX19yX2dpc19nZW9faWRfX2MsIHByb3BlcnRpZXMubGV2ZWwpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIHNlbmRQcm9qZWN0VG9EZXRhaWxzUGFuZWwgKHByb3BlcnRpZXMpIHtcbiAgICAgICRyb290U2NvcGUuJGJyb2FkY2FzdCgnZGV0YWlscycsIHtmZWF0dXJlOiB7cHJvcGVydGllczogcHJvcGVydGllc319KTtcbiAgICB9XG5cblxuICAgIC8vdGhpcyBpcyBhIGR1cGxpY2F0ZSBmcm9tIGJyZWFkY3J1bWJzLmpzICBTaG91bGQgYmUgcmVmYWN0b3JlZCB0byBhIHNpbmdsZSBmdW5jdGlvblxuICAgIGZ1bmN0aW9uIHpvb21Ub0dVSUQgKGd1aWQsIGxldmVsKSB7XG4gICAgICAgIC8vR2l2ZW4gYSBHVUlELCB6b29tIHRvIHRoZSBmZWF0dXJlLlxuXG4gICAgICAgIC8vR3JhYiB0aGUgZmVhdHVyZSBmcm9tIHRoZSBWZWN0b3JQcm92aWRlci5cbiAgICAgICAgVmVjdG9yUHJvdmlkZXIuZmV0Y2hGZWF0dXJlKGd1aWQsIGxldmVsLCBudWxsLCBmdW5jdGlvbiAoZmVhdCkge1xuICAgICAgICAgICAgLy9NYWtlIGEgdGVtcCBnZW9qc29uIGxheWVyIGFuZCBhZGQgdGhlIGdlb2pzb24uXG4gICAgICAgICAgICAvL1RoZW4gZ3JhYiB0aGUgYm91bmRzIGZyb20gaXQgYW5kIHpvb20gdG8gaXQuXG5cbiAgICAgICAgICAgIHZhciBnamwgPSBMLmdlb0pzb24oZmVhdC5nZW9tZXRyeSk7XG4gICAgICAgICAgICAkc2NvcGUuJHBhcmVudC56b29tVG9Cb3VuZHMoZ2psLmdldEJvdW5kcygpKTtcbiAgICAgICAgfSk7XG5cbiAgICB9O1xufSk7XG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgTmljaG9sYXMgSGFsbGFoYW4gPG5oYWxsYWhhbkBzcGF0aWFsZGV2LmNvbT5cbiAqICAgICAgICBhbmQgUnlhbiBXaGl0bGV5ICAgICAgPHJ3aGl0bGV5QHNwYXRpYWxkZXYuY29tPlxuICogICAgICAgICBvbiA0LzE2LzE0LlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ0dlb0FuZ3VsYXInKS5jb250cm9sbGVyKCdTaWRlVmlld0N0cmwnLCBmdW5jdGlvbigkc2NvcGUpIHtcblxuICAvL3Jlc2l6ZSBmdW5jdGlvblxuICBmdW5jdGlvbiByZXNpemVTY3JvbGxhYmxlUGFuZWwoKSB7XG4gICAgJChcIi5zaWRlLXZpZXcgLnNjcm9sbGFibGVcIikuaGVpZ2h0KCQoXCIuc2lkZS12aWV3IC5uYXZwYW5lbFwiKS5oZWlnaHQoKSAtICQoXCIuc2lkZS12aWV3IC5uYXZwYW5lbCAuc2Nyb2xsYWJsZVwiKS5wb3NpdGlvbigpLnRvcCk7ICAvL1RoaXMgc2hvdWxkIHJlc3BvbmQgdG8gd2luZG93LnJlc2l6ZSBldmVudHMgYW5kIHdpbGwgYmUgc2V0IGR1cmluZyB0aGF0IGV2ZW50IHRvIG1ha2Ugc3VyZSB0aGUgcGFuZWwgc3RheXNcbiAgfVxuXG4gIC8vQ29ubmVjdCB0aGUgbGF5b3V0IG9ucmVzaXplIGVuZCBldmVudFxuICB3aW5kb3cubGF5b3V0LnBhbmVzLmNlbnRlci5iaW5kKFwibGF5b3V0cGFuZW9ucmVzaXplX2VuZFwiLCByZXNpemVTY3JvbGxhYmxlUGFuZWwpO1xuXG4gIC8vRm9yIEluaXQuXG4gIHJlc2l6ZVNjcm9sbGFibGVQYW5lbCgpO1xuXG59KTtcbiIsIi8qKlxuICogQ3JlYXRlZCBieSBOaWNob2xhcyBIYWxsYWhhbiA8bmhhbGxhaGFuQHNwYXRpYWxkZXYuY29tPlxuICogICAgICAgb24gMy8yNi8xNC5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdHZW9Bbmd1bGFyJykuY29udHJvbGxlcignU3Rvcmllc0N0cmwnLCBmdW5jdGlvbigkc2NvcGUsICRzdGF0ZVBhcmFtcywgU3Rvcmllc0NvbmZpZykge1xuICAkc2NvcGUucGFyYW1zID0gJHN0YXRlUGFyYW1zO1xuXG4gIC8vR2V0IFN0b3JpZXMgZnJvbSBjb25maWcgZmlsZSBhbmQgbG9hZCB0aGVtLlxuICAkc2NvcGUuc3Rvcmllc0NvbmZpZyA9IFN0b3JpZXNDb25maWc7XG4gICRzY29wZS5zdG9yaWVzID0gW107XG4gICRzY29wZS5zdG9yaWVzU2VhcmNoQXJyYXkgPSBbXTtcbiAgJHNjb3BlLnN0b3JpZXNTZWFyY2hUZXh0ID0gXCJcIjtcbiAgJHNjb3BlLnN0b3JpZXNFeHRlbnRBcnJheSA9IFtdOyAvL2N1cnJlbnRseSBub3QgdXNlZCwgYnV0IHNob3VsZCBiZSB0byBhbGxvdyBFeHRlbnQgdG8gcGVyZm9ybSAnQU5EJyBsb2dpYyB3aXRoIHRoZSBrZXl3b3Jkcy5cblxuICBmb3IgKHZhciBzdG9yaWVzS2V5IGluIFN0b3JpZXNDb25maWcpIHtcblxuICAgIC8vIFdlIGRvbid0IHdhbnQgdG8gc2hvdyB0aGUgZmluZCBmdW5jLlxuICAgIGlmICh0eXBlb2YgU3Rvcmllc0NvbmZpZ1tzdG9yaWVzS2V5XSA9PT0gJ2Z1bmN0aW9uJyB8fCBzdG9yaWVzS2V5ID09ICdzdG9yaWVzJykge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgJHNjb3BlLnN0b3JpZXMucHVzaChTdG9yaWVzQ29uZmlnW3N0b3JpZXNLZXldKTtcbiAgfVxuXG4gICRzY29wZS5maWx0ZXJCeUNoZWNrYm94ID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICAvL1Rha2UgdGhlIHRlcm0gcGFzc2VkIGluIGFuZCBhZGQgb3IgcmVtb3ZlIGl0IGZyb20gdGhlIGtleXdvcmRzIHRleHRib3guXG4gICAgaWYgKCRzY29wZS5zdG9yaWVzU2VhcmNoQXJyYXkuaW5kZXhPZih2YWx1ZSkgPT0gLTEpIHtcbiAgICAgIC8vQWRkIGl0XG4gICAgICAkc2NvcGUuc3Rvcmllc1NlYXJjaEFycmF5LnB1c2godmFsdWUpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIC8vUmVtb3ZlIGl0XG4gICAgICAkc2NvcGUuc3Rvcmllc1NlYXJjaEFycmF5LnNwbGljZSgkc2NvcGUuc3Rvcmllc1NlYXJjaEFycmF5LmluZGV4T2YodmFsdWUpLCAxKTtcbiAgICB9XG4gIH07XG5cbiAgJHNjb3BlLmZpbHRlckV4dGVudEJ5Q2hlY2tib3ggPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgIC8vVGFrZSB0aGUgdGVybSBwYXNzZWQgaW4gYW5kIGFkZCBvciByZW1vdmUgaXQgZnJvbSB0aGUga2V5d29yZHMgdGV4dGJveC5cbiAgICBpZiAoJHNjb3BlLnN0b3JpZXNFeHRlbnRBcnJheS5pbmRleE9mKHZhbHVlKSA9PSAtMSkge1xuICAgICAgLy9BZGQgaXRcbiAgICAgICRzY29wZS5zdG9yaWVzRXh0ZW50QXJyYXkucHVzaCh2YWx1ZSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgLy9SZW1vdmUgaXRcbiAgICAgICRzY29wZS5zdG9yaWVzRXh0ZW50QXJyYXkuc3BsaWNlKCRzY29wZS5zdG9yaWVzRXh0ZW50QXJyYXkuaW5kZXhPZih2YWx1ZSksIDEpO1xuICAgIH1cbiAgfTtcblxuICAkc2NvcGUuY2xlYXJTZWFyY2ggPSBmdW5jdGlvbigpIHtcbiAgICAkc2NvcGUuc3Rvcmllc1NlYXJjaEFycmF5ID0gW107XG4gICAgJHNjb3BlLnN0b3JpZXNTZWFyY2hUZXh0ID0gXCJcIjtcbiAgICAkc2NvcGUuc3Rvcmllc0V4dGVudEFycmF5ID0gW107XG4gIH1cbn0pO1xuXG5cbmFuZ3VsYXIubW9kdWxlKCdHZW9Bbmd1bGFyJykuZmlsdGVyKCdzZWFyY2hTdG9yaWVzRmlsdGVyJywgZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHN0b3JpZXMsICRzY29wZSkge1xuICAgICAgdmFyIG91dFN0b3JpZXMgPSBbXTtcbiAgICAgIGlmIChzdG9yaWVzKSB7XG4gICAgICAgIC8vbG9vcCB0aHJ1IHN0b3JpZXMgYW5kIGZpbHRlciBiYXNlZCBvbiBzZWFyY2ggdGV4dC9jaGVja2JveGVzLlxuICAgICAgICAvL2NvbW1hIHNlcGFyYXRlZCBpdGVtcyBzaG91bGQgYmUgYnJva2VuIHVwIGFuZCBzZWFyY2hlZCBmb3Igc2VwYXJhdGVseSB1c2luZyAnT1InIGxvZ2ljLlxuXG4gICAgICAgIHZhciBrZXl3b3JkcyA9IFtdO1xuICAgICAgICBpZiAoJHNjb3BlLnN0b3JpZXNTZWFyY2hUZXh0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBrZXl3b3JkcyA9ICRzY29wZS5zdG9yaWVzU2VhcmNoVGV4dC5zcGxpdChcIixcIikuY29uY2F0KCRzY29wZS5zdG9yaWVzU2VhcmNoQXJyYXkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGtleXdvcmRzID0gJHNjb3BlLnN0b3JpZXNTZWFyY2hBcnJheTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoa2V5d29yZHMubGVuZ3RoID09IDApIHtcbiAgICAgICAgICByZXR1cm4gc3RvcmllcztcbiAgICAgICAgfVxuXG4gICAgICAgIHN0b3JpZXMuZm9yRWFjaChmdW5jdGlvbihzdG9yeSkge1xuICAgICAgICAgIGtleXdvcmRzLmZvckVhY2goZnVuY3Rpb24oa2V5d29yZCkge1xuICAgICAgICAgICAgaWYgKGtleXdvcmQubGVuZ3RoID4gMCAmJiBzdG9yeS5rZXl3b3Jkcy50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJC50cmltKGtleXdvcmQudG9Mb3dlckNhc2UoKSkpID4gLTEpIHtcbiAgICAgICAgICAgICAgaWYgKG91dFN0b3JpZXMuaW5kZXhPZihzdG9yeSkgPT0gLTEpIHtcbiAgICAgICAgICAgICAgICBvdXRTdG9yaWVzLnB1c2goc3RvcnkpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBzdG9yaWVzO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG91dFN0b3JpZXM7XG4gICAgfTtcbiAgfSk7IiwiLyoqXG4gKiBDcmVhdGVkIGJ5IE5pY2hvbGFzIEhhbGxhaGFuIDxuaGFsbGFoYW5Ac3BhdGlhbGRldi5jb20+XG4gKiAgICAgICBvbiA1LzYvMTQuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnR2VvQW5ndWxhcicpLmNvbnRyb2xsZXIoJ1RoZW1lQ3RybCcsIGZ1bmN0aW9uICgkc2NvcGUsICRyb290U2NvcGUsICRzdGF0ZSwgJHN0YXRlUGFyYW1zLCBWZWN0b3JQcm92aWRlcikge1xuXG4gIHZhciB0aGVtZU5hbWVIYXNoID0gJHJvb3RTY29wZS50aGVtZU5hbWVIYXNoID0ge1xuICAgIHByb2plY3Q6ICdQcm9qZWN0cycsXG4gICAgZGlzYXN0ZXI6ICdEaXNhc3RlcnMnLFxuICAgIHByb2plY3RSaXNrOiAnUHJvamVjdCBSaXNrJyxcbiAgICBwcm9qZWN0SGVhbHRoOiAnUHJvamVjdCBIZWFsdGgnLFxuICAgIGRpc2FzdGVyVHlwZTogJ0Rpc2FzdGVyIFR5cGUnLFxuICAgIG5vbmU6ICdOb25lJ1xuICB9O1xuXG4gICRzY29wZS5wcm9qZWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICRzY29wZS50aGVtZU5hbWUgPSB0aGVtZU5hbWVIYXNoLnByb2plY3Q7XG4gICAgZW5zdXJlVGhlbWVDb3VudCgpO1xuICAgICRzY29wZS5zZXRUaGVtZVF1ZXJ5UGFyYW0oJ3Byb2plY3QnKTtcbiAgfTtcblxuICAkc2NvcGUuZGlzYXN0ZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgJHNjb3BlLnRoZW1lTmFtZSA9IHRoZW1lTmFtZUhhc2guZGlzYXN0ZXI7XG4gICAgZW5zdXJlVGhlbWVDb3VudCgpO1xuICAgICRzY29wZS5zZXRUaGVtZVF1ZXJ5UGFyYW0oJ2Rpc2FzdGVyJyk7XG4gIH07XG5cbiAgJHNjb3BlLnByb2plY3RSaXNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgJHNjb3BlLnRoZW1lTmFtZSA9IHRoZW1lTmFtZUhhc2gucHJvamVjdFJpc2s7XG4gICAgICBlbnN1cmVUaGVtZUNvdW50KCk7XG4gICAgICAkc2NvcGUuc2V0VGhlbWVRdWVyeVBhcmFtKCdwcm9qZWN0UmlzaycpO1xuICB9O1xuXG4gICRzY29wZS5wcm9qZWN0SGVhbHRoID0gZnVuY3Rpb24gKCkge1xuICAgICAgJHNjb3BlLnRoZW1lTmFtZSA9IHRoZW1lTmFtZUhhc2gucHJvamVjdEhlYWx0aDtcbiAgICAgIGVuc3VyZVRoZW1lQ291bnQoKTtcbiAgICAgICRzY29wZS5zZXRUaGVtZVF1ZXJ5UGFyYW0oJ3Byb2plY3RIZWFsdGgnKTtcbiAgfTtcblxuICAkc2NvcGUuZGlzYXN0ZXJUeXBlID0gZnVuY3Rpb24gKCkge1xuICAgICRzY29wZS50aGVtZU5hbWUgPSB0aGVtZU5hbWVIYXNoLmRpc2FzdGVyVHlwZTtcbiAgICBlbnN1cmVUaGVtZUNvdW50KCk7XG4gICAgJHNjb3BlLnNldFRoZW1lUXVlcnlQYXJhbSgnZGlzYXN0ZXJUeXBlJyk7XG4gIH07XG5cbiAgJHNjb3BlLm5vbmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgJHNjb3BlLnRoZW1lTmFtZSA9IHRoZW1lTmFtZUhhc2gubm9uZTtcbiAgICB2YXIgbGF5ZXJzQXJyID0gJC5ncmVwKCRzdGF0ZVBhcmFtcy5sYXllcnMuc3BsaXQoJywnKSwgZnVuY3Rpb24ocm91dGVMYXllcil7XG4gICAgICByZXR1cm4gcm91dGVMYXllciAhPT0gJ2dhZG0wJyAmJiByb3V0ZUxheWVyICE9PSAndGhlbWUnO1xuICAgIH0pO1xuICAgICRzdGF0ZVBhcmFtcy5sYXllcnMgPSBsYXllcnNBcnIuam9pbignLCcpO1xuICAgICRzY29wZS5zZXRUaGVtZVF1ZXJ5UGFyYW0oJ25vbmUnKTtcbiAgfTtcblxuICBmdW5jdGlvbiBlbnN1cmVUaGVtZUNvdW50KCkge1xuICAgIGlmICgkc3RhdGVQYXJhbXMubGF5ZXJzLmluZGV4T2YoJ2dhZG0wJykgPT09IC0xICYmICRzdGF0ZVBhcmFtcy5sYXllcnMuaW5kZXhPZigndGhlbWUnKSA9PT0gLTEpIHtcbiAgICAgICRzdGF0ZVBhcmFtcy5sYXllcnMgKz0gJyxnYWRtMCc7XG4gICAgfVxuICB9XG5cbiAgJHNjb3BlLnNldFRoZW1lUXVlcnlQYXJhbSA9IGZ1bmN0aW9uICh0aGVtZSkge1xuICAgIC8vY2xvc2UgZGV0YWlscyBwYW5lbCBvbiB0aGVtZSBjaGFuZ2VcbiAgICBpZigkc2NvcGUuaXNQYXJhbSgnZGV0YWlscy1wYW5lbCcpID09IHRydWUpe1xuICAgICAgaWYoJHN0YXRlUGFyYW1zLnRoZW1lICE9PSB0aGVtZSl7XG4gICAgICAgICRzY29wZS5jbG9zZVBhcmFtKCdkZXRhaWxzLXBhbmVsJyk7XG4gICAgICB9XG4gICAgfVxuICAgICRzdGF0ZVBhcmFtcy50aGVtZSA9IHRoZW1lO1xuXG4gICAgLy9jbG9zZSBmaWx0ZXJzIHBhbmVsIGlmIHRoZW1lIGlzIFByb2plY3QgUmlzay9IZWFsdGggb3IgTm9uZVxuICAgIGlmKCgoJHN0YXRlUGFyYW1zLnRoZW1lICE9PSAncHJvamVjdCcgJiYgJHN0YXRlUGFyYW1zLnRoZW1lICE9PSAnZGlzYXN0ZXInKSAmJiAkc3RhdGVQYXJhbXMudGhlbWUgIT09IG51bGwpKXtcbiAgICAgICRzY29wZS5jbG9zZVBhcmFtKCdmaWx0ZXJzLXBhbmVsJyk7XG4gICAgfVxuXG4gICAgdmFyIHN0YXRlID0gJHN0YXRlLmN1cnJlbnQubmFtZSB8fCAnbWFpbic7XG4gICAgJHN0YXRlLmdvKHN0YXRlLCAkc3RhdGVQYXJhbXMpO1xuICB9O1xuXG4gICRzY29wZS50aGVtZU5hbWUgPSB0aGVtZU5hbWVIYXNoWyRzdGF0ZVBhcmFtcy50aGVtZV0gfHwgdGhlbWVOYW1lSGFzaFtjb25maWcuZGVmYXVsdFRoZW1lXTtcblxuICAvKlxuICAgSGFuZGxpbmcgVGhlbWUgTWVudSBBbmltYXRpb25zXG4gICAqL1xuXG4gICRzY29wZS50b2dnbGVUaGVtZU1lbnUgPSBmdW5jdGlvbigpe1xuICAgIHZhciBmbGlwcGVkT3V0ID0gJChcIi5tZW51LXNlbGVjdGlvbiAuZHJvcGRvd25cIikuaGFzQ2xhc3MoXCJvcGVuXCIpO1xuXG4gICAgaWYoZmxpcHBlZE91dCA9PSBmYWxzZSl7XG4gICAgICAkc2NvcGUudW5mdXJsVGhlbWVzKCk7XG4gICAgfVxuICAgIGVsc2V7XG4gICAgICAkc2NvcGUucmVmdXJsVGhlbWVzKCk7XG4gICAgfVxuICB9O1xuXG4gICRzY29wZS51bmZ1cmxUaGVtZXMgPSBmdW5jdGlvbigpe1xuICAgICRzY29wZS5yZWZ1cmxUaGVtZXMoKTtcbiAgICAvL1RyeSBqUXVlcnkgdG8gYWRkIGFuICdvbicgY2xhc3MgdG8gZWFjaCBvZiB0aGUgdGhlbWUgTEkgZWxlbWVudHMgb24gYSB0aW1lci5cbiAgICAkKCQoJyNUaGVtZU1lbnUgbGknKS5nZXQoKS5yZXZlcnNlKCkpLmVhY2goZnVuY3Rpb24oaW5kZXgpe1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoc2VsZikuYWRkQ2xhc3MoXCJ0aGVtZS1zZWxlY3Rvci1saS1vblwiKTtcbiAgICAgIH0sIGluZGV4KjE1MCk7XG4gICAgfSk7XG4gIH07XG5cbiAgLy9SZWZ1cmw/XG4gICRzY29wZS5yZWZ1cmxUaGVtZXMgPSBmdW5jdGlvbigpe1xuICAgIC8vVHJ5IGpRdWVyeSB0byByZW1vdmUgdGhlICdvbicgY2xhc3MgdG8gZWFjaCBvZiB0aGUgdGhlbWUgTEkgZWxlbWVudHMgb24gYSB0aW1lci5cbiAgICAkKCcjVGhlbWVTZWxlY3Rvck1lbnUgLmRyb3Bkb3duLW1lbnUgbGknKS5yZW1vdmVDbGFzcyhcInRoZW1lLXNlbGVjdG9yLWxpLW9uXCIpO1xuICB9O1xuXG4gIC8qXG4gICBFbmQgVGhlbWUgTWVudSBBbmltYXRpb25zXG4gICAqL1xuXG59KTtcbiIsIi8qKlxuICogQ3JlYXRlZCBieSBOaWNob2xhcyBIYWxsYWhhbiA8bmhhbGxhaGFuQHNwYXRpYWxkZXYuY29tPlxuICogICAgICAgb24gNC8xNy8xNC5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdHZW9Bbmd1bGFyJykuY29udHJvbGxlcignVXBsb2FkQ3RybCcsIGZ1bmN0aW9uKCRzY29wZSwgJGh0dHAsICRzdGF0ZSwgJHN0YXRlUGFyYW1zLCAkdXBsb2FkKSB7XG5cbiAgJHNjb3BlLnNob3dBbGVydCA9IGZhbHNlO1xuICAkc2NvcGUuc2hvd1Byb2dyZXNzID0gZmFsc2U7XG4gICRzY29wZS5zaG93VXBsb2FkZWRVcmwgPSBmYWxzZTtcbiAgJHNjb3BlLnBlcmNlbnQgPSAzO1xuICAkc2NvcGUuZGlzYWJsZWQgPSBmYWxzZTtcbiAgJHNjb3BlLmtiVXBsb2FkZWQgPSAwO1xuICAkc2NvcGUua2JUb3RhbCA9IDA7XG5cbiAgJHNjb3BlLiR1cGxvYWQgPSAkdXBsb2FkO1xuXG4gICRzY29wZS51cGxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAkKFwiI3VwbG9hZC1maWxlLWlucHV0XCIpLmNsaWNrKCkuY2hhbmdlKGZ1bmN0aW9uKGV2dCkge1xuICAgICAgJHNjb3BlLnNob3dQcm9ncmVzcyA9IHRydWU7XG4gICAgICAkc2NvcGUucGVyY2VudCA9IDU7XG5cbiAgICAgIHZhciBmaWxlTmFtZSA9ICQodGhpcykudmFsKCkuc3BsaXQoJ1xcXFwnKS5wb3AoKTtcbiAgICAgIHZhciBmaWxlID0gJCgnI3VwbG9hZC1maWxlLWlucHV0JykuZ2V0KDApLmZpbGVzWzBdO1xuICAgICAgcGFyc2VBbmRVcGxvYWRGaWxlKGZpbGUsIGZpbGVOYW1lKTtcblxuICAgIH0pO1xuICB9O1xuXG4gICRzY29wZS5maWxlRHJvcHBlZCA9IGZ1bmN0aW9uICgkZmlsZXMpIHtcbiAgICB2YXIgZmlsZSA9ICRmaWxlc1swXTtcbiAgICBwYXJzZUFuZFVwbG9hZEZpbGUoZmlsZSwgZmlsZS5uYW1lKTtcbiAgfTtcblxuICBmdW5jdGlvbiBwYXJzZUFuZFVwbG9hZEZpbGUoZmlsZSwgZmlsZU5hbWUpIHtcbiAgICBpZiAoIWZpbGVOYW1lKSBmaWxlTmFtZSA9ICdmaWxlJztcbiAgICB2YXIgciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgci5yZWFkQXNCaW5hcnlTdHJpbmcoZmlsZSk7XG4gICAgci5vbmxvYWRlbmQgPSBmdW5jdGlvbihlKXtcbiAgICAgIHZhciBkYXRhID0gZS50YXJnZXQucmVzdWx0O1xuICAgICAgdmFyIHBvc3RPYmogPSB7XG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJNYXBmb2xpbyBVcGxvYWRlZCBEYXRhIC0gXCIgKyBmaWxlTmFtZSxcbiAgICAgICAgXCJwdWJsaWNcIjogdHJ1ZSxcbiAgICAgICAgXCJmaWxlc1wiOiB7fVxuICAgICAgfTtcbiAgICAgIHBvc3RPYmouZmlsZXNbZmlsZU5hbWVdID0ge2NvbnRlbnQ6IGRhdGF9O1xuICAgICAgJHNjb3BlLnBlcmNlbnQgPSA3O1xuXG4gICAgICAkc2NvcGUuJHVwbG9hZC5odHRwKHtcbiAgICAgICAgdXJsOiAnaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS9naXN0cycsXG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgIGRhdGE6IHBvc3RPYmosXG4gICAgICAgIGhlYWRlcnM6IHsnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nfVxuICAgICAgfSkucHJvZ3Jlc3MoZnVuY3Rpb24oZXZ0KSB7XG4gICAgICAgICRzY29wZS5wZXJjZW50ID0gcGFyc2VGbG9hdCgoZXZ0LmxvYWRlZCAvIGV2dC50b3RhbFNpemUgKiAxMDApLnRvRml4ZWQoMSkpO1xuICAgICAgICAkc2NvcGUua2JVcGxvYWRlZCA9IChldnQubG9hZGVkIC8gMTAyNCkudG9GaXhlZCgyKTtcbiAgICAgICAgJHNjb3BlLmtiVG90YWwgPSAoZXZ0LnRvdGFsU2l6ZSAvIDEwMjQpLnRvRml4ZWQoMik7XG4gICAgICB9KS5zdWNjZXNzKGZ1bmN0aW9uIChkYXRhLCBzdGF0dXMsIGhlYWRlcnMsIGNvbmZpZykge1xuICAgICAgICAkc2NvcGUuc2hvd1Byb2dyZXNzID0gZmFsc2U7XG4gICAgICAgIHZhciBmaWxlbmFtZSA9IGRhdGEuZmlsZXNbZmlsZU5hbWVdLmZpbGVuYW1lO1xuICAgICAgICAkc2NvcGUuZ2lzdFJhd1VybCA9IGRhdGEuZmlsZXNbZmlsZU5hbWVdLnJhd191cmw7XG4gICAgICAgICRzY29wZS5naXN0SHRtbFVybCA9IGRhdGEuaHRtbF91cmw7XG4gICAgICAgICRzY29wZS5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICRzY29wZS5zaG93VXBsb2FkZWRVcmwgPSB0cnVlO1xuICAgICAgICB3aW5kb3cuZ2lzdHMuYXBwZW5kKHtuYW1lOiBmaWxlbmFtZSwgdXJsOiAkc2NvcGUuZ2lzdFJhd1VybCwgaHRtbFVybDogJHNjb3BlLmdpc3RIdG1sVXJsfSk7XG4gICAgICB9KS5lcnJvcihmdW5jdGlvbiAoZGF0YSwgc3RhdHVzLCBoZWFkZXJzLCBjb25maWcpIHtcbiAgICAgICAgJHNjb3BlLnNob3dBbGVydCA9IHRydWU7XG4gICAgICAgICRzY29wZS5lcnJvck1lc3NhZ2UgPSBKU09OLnN0cmluZ2lmeShkYXRhLG51bGwsMik7XG4gICAgICB9KTtcblxuICAgIH07XG4gIH1cblxuICAkc2NvcGUuYWRkVG9NYXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG5ld1VybCA9ICRzY29wZS5naXN0UmF3VXJsIHx8ICRzY29wZS5yZW1vdGVVcmw7XG4gICAgaWYgKCFuZXdVcmwpIHtcbiAgICAgICRzY29wZS5zaG93QWxlcnQgPSB0cnVlO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgICRzdGF0ZVBhcmFtcy5sYXllcnMgPSAkc3RhdGVQYXJhbXMubGF5ZXJzICsgJywnICsgbmV3VXJsO1xuICAgICQoJyN1cGxvYWRNb2RhbCcpLm1vZGFsKCdoaWRlJyk7XG4gICAgJCgnI3VwbG9hZE1vZGFsJykub24oJ2hpZGRlbi5icy5tb2RhbCcsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICRzdGF0ZS5nbygnbWFpbicsICRzdGF0ZVBhcmFtcyk7XG4gICAgfSk7XG5cbiAgfTtcblxuICAvKipcbiAgICogSWYgVXBsb2FkQ3RybCBnZXRzIGNhbGxlZCB0d2ljZSBmb3Igc29tZSByZWFzb24sIHdlIG1pZ2h0XG4gICAqIGhhdmUgdGhpcyBjbGFzcyBoYW5naW5nIGFyb3VuZCBibG9ja2luZyB0aGUgYXBwLiBVcGxvYWRDdHJsXG4gICAqIGRvZXMgZ2V0IGNhbGxlZCB0d2ljZSBzb21ldGltZXMsIGJlY2F1c2UgdGhlIG1vZGFsIHNvbWV0aW1lc1xuICAgKiBudWRnZXMgdGhlIG1hcCBhbmQgcmVpbnN0YW50aWF0ZXMgdGhlIG1vZGFsIGFnYWluIHZpYSBhIG5ld1xuICAgKiByb3V0ZS5cbiAgICovXG4gICQoJy5tb2RhbC1iYWNrZHJvcCcpLnJlbW92ZSgpO1xuXG4gICQoJyN1cGxvYWRNb2RhbCcpLm1vZGFsKCdzaG93Jyk7XG5cbiAgJCgnI3VwbG9hZE1vZGFsJykub24oJ2hpZGRlbi5icy5tb2RhbCcsIGZ1bmN0aW9uKGUpIHtcbiAgICAkc3RhdGUuZ28oJ21haW4nLCAkc3RhdGVQYXJhbXMpO1xuICB9KTtcblxufSk7XG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgTmljaG9sYXMgSGFsbGFoYW4gPG5oYWxsYWhhbkBzcGF0aWFsZGV2LmNvbT5cbiAqICAgICAgICBhbmQgUnlhbiBXaGl0bGV5ICAgICAgPHJ3aGl0bGV5QHNwYXRpYWxkZXYuY29tPlxuICogICAgICAgb24gNC8yLzE0LlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ0dlb0FuZ3VsYXInKS5jb250cm9sbGVyKCdab29tRXh0ZW50Q3RybCcsIGZ1bmN0aW9uKCRzY29wZSwgJHJvb3RTY29wZSwgJHN0YXRlUGFyYW1zLCBWZWN0b3JQcm92aWRlcikge1xuICAkc2NvcGUucGFyYW1zID0gJHN0YXRlUGFyYW1zO1xuXG4gIC8vSW5pdGlhbGl6ZSB0aGUgY291bnRyeSBzZWxlY3RvciBtZW51IGJ5IGxvYWRpbmcgdGhlIGpzb24gZmlsZSBhbmQgd3JpdGluZyBvdXQgdGhlIG5hbWVzIGludG8gdGhlIHBhbmVsXG4gICRzY29wZS5jb3VudHJ5TGlzdDEgPSBudWxsO1xuXG4gIHZhciB2ZWNSZXMgPSBWZWN0b3JQcm92aWRlci5jcmVhdGVSZXNvdXJjZShcImNvdW50cnlleHRlbnRzXCIpO1xuICB2ZWNSZXMuZmV0Y2goZnVuY3Rpb24oZ2VvanNvbil7XG4gICAgLy9Tb3J0IGFscGhhYmV0aWNhbGx5XG4gICAgZ2VvanNvbi5mZWF0dXJlcyA9IGdlb2pzb24uZmVhdHVyZXMuc29ydChmdW5jdGlvbihhLGIpe1xuICAgICAgdmFyIHRleHRBID0gYS5wcm9wZXJ0aWVzLm5hbWVfMDtcbiAgICAgIHZhciB0ZXh0QiA9IGIucHJvcGVydGllcy5uYW1lXzA7XG4gICAgICByZXR1cm4gKHRleHRBIDwgdGV4dEIpID8gLTEgOiAodGV4dEEgPiB0ZXh0QikgPyAxIDogMDtcbiAgICB9KTtcblxuICAgICRzY29wZS5jb3VudHJ5TGlzdDEgPSBnZW9qc29uLmZlYXR1cmVzO1xuICB9KTtcblxuICAvL0luaXRpYWxpemUgdGhlIEFSQyBSZWdpb24gc2VsZWN0b3IgbWVudSBieSBsb2FkaW5nIHRoZSBqc29uIGZpbGUgYW5kIHdyaXRpbmcgb3V0IHRoZSBuYW1lcyBpbnRvIHRoZSBwYW5lbFxuICAkc2NvcGUucmVnaW9uTGlzdDEgPSBudWxsO1xuXG4gIHZhciB2ZWNSZXNSZWdpb24gPSBWZWN0b3JQcm92aWRlci5jcmVhdGVSZXNvdXJjZShcImFyY3JlZ2lvbmV4dGVudHNcIik7XG4gIHZlY1Jlc1JlZ2lvbi5mZXRjaChmdW5jdGlvbihnZW9qc29uKXtcbiAgICAvL1NvcnQgYWxwaGFiZXRpY2FsbHlcbiAgICBnZW9qc29uLmZlYXR1cmVzID0gZ2VvanNvbi5mZWF0dXJlcy5zb3J0KGZ1bmN0aW9uKGEsYil7XG4gICAgICB2YXIgdGV4dEEgPSBhLnByb3BlcnRpZXMuYXJjX3JlZ2lvbjtcbiAgICAgIHZhciB0ZXh0QiA9IGIucHJvcGVydGllcy5hcmNfcmVnaW9uO1xuICAgICAgcmV0dXJuICh0ZXh0QSA8IHRleHRCKSA/IC0xIDogKHRleHRBID4gdGV4dEIpID8gMSA6IDA7XG4gICAgfSk7XG5cbiAgICAkc2NvcGUucmVnaW9uTGlzdDEgPSBnZW9qc29uLmZlYXR1cmVzO1xuICB9KTtcblxufSk7XG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgTmljaG9sYXMgSGFsbGFoYW4gPG5oYWxsYWhhbkBzcGF0aWFsZGV2LmNvbT5cbiAqICAgYW5kIFJpY2ggR3dvemR6IDxyZ3dvemR6QHNwYXRpYWxkZXYuY29tPlxuICogICAgICAgb24gNS8yMS8xNC5cbiAqL1xuXG5cbm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ0dlb0FuZ3VsYXInKS5mYWN0b3J5KCdEb251dHMnLCBmdW5jdGlvbiAoKSB7XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBEMyBEb251dCB0aGF0IGlzIGxvY2F0ZWQgaW4gdGhlIGRldGFpbHMgcGFuZWwuXG4gICAqL1xuICBmdW5jdGlvbiBFeHBhbmRvRG9udXQoZW50aXRpZXMsIHZpc3VhbGl6YXRpb25EaWN0aW9uYXJ5LCB3cmFwcGVyLCBsYWJlbFBvc2l0aW9uKSB7XG5cbiAgICB2YXIgZGF0YSxcbiAgICAgIHRtcERhdGFzZXQsXG4gICAgICBkYXRhc2V0LFxuICAgICAgd2lkdGgsXG4gICAgICBoZWlnaHQsXG4gICAgICByYWRpdXMsXG4gICAgICBjb2xvcixcbiAgICAgIHBpZSxcbiAgICAgIGFyYyxcbiAgICAgIHN2ZyxcbiAgICAgIHBhdGgsXG4gICAgICByZXBvcnRpbmdWYWx1ZUFycixcbiAgICAgIHJlcG9ydGluZ1ZhbHVlLFxuICAgICAgbGFiZWxXcmFwcGVyO1xuXG4gICAgZGF0YSA9IHt9O1xuXG4gICAgd3JhcHBlciA9ICQod3JhcHBlcilbMF07XG4gICAgJCh3cmFwcGVyKS5odG1sKCcnKTtcbiAgICB0aGlzLndyYXBwZXIgPSB3cmFwcGVyO1xuICAgIHRoaXMubGFiZWxXcmFwcGVyID0gbnVsbDtcbiAgICB0aGlzLnN2ZyA9IG51bGw7XG5cbiAgICBpZih0eXBlb2YgbGFiZWxQb3NpdGlvbiA9PT0gJ3VuZGVmaW5lZCcgfHwgKGxhYmVsUG9zaXRpb24gIT09ICd0b3AnICYmIGxhYmVsUG9zaXRpb24gIT09ICdib3R0b20nKSkge1xuICAgICAgbGFiZWxQb3NpdGlvbiA9ICd0b3AnXG4gICAgfVxuXG4gICAgLy8gTG9vcCB0aHJvdWdoIHRoZSBlbnRpdGllc1xuICAgIGZvciAodmFyIGogPSAwLCBqTWF4ID0gZW50aXRpZXMubGVuZ3RoOyBqIDwgak1heDsgaisrKSB7XG5cbiAgICAgIC8vIFNwbGl0IHRoZSBzZW1pLWNvbG9uIGRlbGltaXRlZCBzdHJpbmcgb2YgcmVwb3J0aW5nIHZhbHVlc1xuICAgICAgaWYoZW50aXRpZXNbal1bJ3NlY3Rvcl9fYyddID09PSBudWxsKSB7XG4gICAgICAgIHJlcG9ydGluZ1ZhbHVlQXJyID0gWy05OTk5XTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlcG9ydGluZ1ZhbHVlQXJyID0gZW50aXRpZXNbal1bJ3NlY3Rvcl9fYyddLnRvU3RyaW5nKCkuc3BsaXQoJzsnKTtcbiAgICAgIH1cbiAgICAgIC8vIExvb3AgdGhydSB0aGUgcmVwb3J0aW5nIHZhbHVlc1xuICAgICAgZm9yICh2YXIgayA9IDAsIGtNYXggPSByZXBvcnRpbmdWYWx1ZUFyci5sZW5ndGg7IGsgPCBrTWF4OyBrKyspIHtcblxuICAgICAgICAvLyB0aGlzIGl0ZXJhdGlvbidzIHJlcG9ydGluZyB2YWx1ZVxuICAgICAgICByZXBvcnRpbmdWYWx1ZSA9IHJlcG9ydGluZ1ZhbHVlQXJyW2tdO1xuXG4gICAgICAgIC8vIElmIHdlIGhhdmUgYWxyZWFkeSBjb21lIGFjcm9zcyB0aGlzIGlkIGJlZm9yZSAoYW5kIHN0YXJ0ZWQgYSBjb3VudCBvZiBpdHMgZnJlcXVlbmN5KSwgaW5jcmVtZW50IHRoZSBjb3VudFxuICAgICAgICBpZihkYXRhLmhhc093blByb3BlcnR5KHJlcG9ydGluZ1ZhbHVlKSkge1xuICAgICAgICAgIGRhdGFbcmVwb3J0aW5nVmFsdWVdWydjb3VudCddKys7XG4gICAgICAgIH1cblxuICAgICAgICBlbHNlIGlmIChyZXBvcnRpbmdWYWx1ZSA9PT0gJycpe1xuICAgICAgICAgIC8vIE51bGwgcmVwb3J0IGlkJ3MgY29tZSB0aHJvdWdoIGFzIGFuIGVtcHR5IHN0cmluZyBiZWNhdXNlIHNwbGl0dGluZyBhbiBlbXB0eSBzdHJpbmcsIGNyZWF0ZXMgYW4gYXJyYXkgd2l0aCBvbmUgZW1wdHkgc3RyaW5nXG4gICAgICAgICAgLy8gIFdlJ3JlIGFzc2lnbmluZyB0aGVzZSB0byBhIHZhbHVlIG9mIC05OTk5XG5cbiAgICAgICAgICAvLyBJbmNyZW1lbnQgdGhlIGNvdW50IG9mIC05OTk5XG4gICAgICAgICAgaWYoZGF0YS5oYXNPd25Qcm9wZXJ0eSgnLTk5OTknKSkge1xuICAgICAgICAgICAgZGF0YVsnLTk5OTknXVsnY291bnQnXSsrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIGlmIHRoaXMgaXMgdGhlIGZpcnN0IG51bGwgaWQsIGNyZWF0ZSBhbiBvYmplY3QgcHJvcGVydHkgYW5kIHN0YXJ0IHRoZSBjb3VudGVyXG4gICAgICAgICAgICBkYXRhWyctOTk5OSddID0ge1xuICAgICAgICAgICAgICAnY291bnQnOiAxLFxuICAgICAgICAgICAgICAnY29sb3InOiB2aXN1YWxpemF0aW9uRGljdGlvbmFyeVstOTk5OV0uY29sb3IsXG4gICAgICAgICAgICAgICdhbGlhcyc6IHZpc3VhbGl6YXRpb25EaWN0aW9uYXJ5Wy05OTk5XS5sYWJlbFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG5cbiAgICAgICAgICB2YXIgcmVwb3J0aW5nUHJvcGVydGllcyA9IHZpc3VhbGl6YXRpb25EaWN0aW9uYXJ5W3JlcG9ydGluZ1ZhbHVlXTtcblxuICAgICAgICAgIGlmICghcmVwb3J0aW5nUHJvcGVydGllcykge1xuICAgICAgICAgICAgcmVwb3J0aW5nUHJvcGVydGllcyA9IHtcbiAgICAgICAgICAgICAgY29sb3I6ICcjMjQwMjAxJyxcbiAgICAgICAgICAgICAgYWxpYXM6IHJlcG9ydGluZ1ZhbHVlIHx8ICdVbmtub3duJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIGlmIHRoaXMgaXMgdGhlIGZpcnN0IHRpbWUgd2Ugc2VlIHRoaXMgaWQsIGNyZWF0ZSBhbiBvYmplY3QgcHJvcGVydHkgYW5kIHN0YXJ0IHRoZSBjb3VudGVyXG4gICAgICAgICAgZGF0YVtyZXBvcnRpbmdWYWx1ZV0gPSB7XG4gICAgICAgICAgICAnY291bnQnOiAxLFxuICAgICAgICAgICAgJ2NvbG9yJzogcmVwb3J0aW5nUHJvcGVydGllcy5jb2xvcixcbiAgICAgICAgICAgICdhbGlhcyc6IHJlcG9ydGluZ1Byb3BlcnRpZXMubGFiZWxcbiAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgIH1cblxuICAgIH1cblxuICAgIC8vIHByZXAgZGF0YXNldCBmb3IgRDM7IG5lZWQgYSB0ZW1wIGRhdGFzZXQgdG8gZGVhbCB3aXRoIG1lcmdpbmcgb2YgZGF0YSBjb3VudHMgZm9yICdvdGhlcicgY2F0ZWdvcnlcbiAgICB0bXBEYXRhc2V0ID0gW107XG4gICAgZGF0YXNldCA9IFtdO1xuXG4gICAgLy8gUHVzaCBwcm9wZXJ0aWVzIGZyb20gb2JqZWN0IGhvbGRpbmcgdGhlIGNhdGVnb3J5IGNvdW50cy9jb2xvcnMgY2F0ZWdvcmllcyBpbnRvIGFuIG9iamVjdCBhcnJheVxuICAgIGZvciAodmFyIGogaW4gZGF0YSkge1xuICAgICAgdG1wRGF0YXNldC5wdXNoKGRhdGFbal0pO1xuICAgIH1cblxuICAgIC8vIENyZWF0ZSBhbiBvYmplY3QgdGhhdCB3aWxsIG1lcmdlIHRoZSBjb3VudCBmcm9tIGFsbCBjbGFzc2lmaWNhdGlvbiBjYXRlcmdvcmllcyB0aGF0IHdlJ3ZlIGRlZW1lZCBhcyAnb3RoZXInJ1xuICAgIHZhciBtZXJnZWRPdGhlciA9IHtcbiAgICAgICdjb3VudCc6IDAsXG4gICAgICAnY29sb3InOiB2aXN1YWxpemF0aW9uRGljdGlvbmFyeVstOTk5OV0uY29sb3IsXG4gICAgICAnYWxpYXMnOiB2aXN1YWxpemF0aW9uRGljdGlvbmFyeVstOTk5OV0ubGFiZWxcbiAgICB9O1xuXG4gICAgLy8gTWVyZ2UgYWxsICdvdGhlcicgb2JqZWN0czsgd2UgZGV0ZXJtaW5lIHdoaWNoIGFyZSAnb3RoZXInIGJ5IHRlc3RpbmcgdG8gc2VlIGlmIGl0cyBiZWVuIGFzc2lnbmVkIHRoZSAnb3RoZXInIGNvbG9yXG4gICAgZm9yICh2YXIgayA9IDAsIGtNYXggPSB0bXBEYXRhc2V0Lmxlbmd0aDsgayA8IGtNYXg7IGsrKykge1xuXG4gICAgICBpZih0bXBEYXRhc2V0W2tdLmNvbG9yID09PSB2aXN1YWxpemF0aW9uRGljdGlvbmFyeVstOTk5OV0uY29sb3IpIHtcbiAgICAgICAgbWVyZ2VkT3RoZXIuY291bnQgPSBtZXJnZWRPdGhlci5jb3VudCArIHRtcERhdGFzZXRba10uY291bnQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkYXRhc2V0LnB1c2godG1wRGF0YXNldFtrXSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQWRkIHRoZSBtZXJnZSBvYmplZHQgdG8gdGhlIGRhdGFzZXQgd2Ugd2lsbCB1c2UgaW4gZG9udXQgY2hhcnRcbiAgICBkYXRhc2V0LnB1c2gobWVyZ2VkT3RoZXIpO1xuXG5cbiAgICAvLyBVc2UgalF1ZXJ5IHRvIGdldCB0aGlzIGNsdXN0ZXIgbWFya2VycyBoZWlnaHQgYW5kIHdpZHRoIChzZXQgaW4gdGhlIENTUylcbiAgICB3aWR0aCA9ICQod3JhcHBlcikud2lkdGgoKSAqIDAuNjU7XG4gICAgaGVpZ2h0ID0gJCh3cmFwcGVyKS5oZWlnaHQoKSAqIDAuNjU7XG5cbiAgICBpZihoZWlnaHQgPT09IDApIHtcbiAgICAgIGhlaWdodCA9IHdpZHRoO1xuICAgIH1cblxuICAgIHJhZGl1cyA9ICAoTWF0aC5taW4od2lkdGgsIGhlaWdodCkgLyAyKSAtIDEwO1xuICAgIGxhYmVsV3JhcHBlciA9ICQoJzxkaXYgY2xhc3M9XCJjbGVhcmZpeFwiIHN0eWxlPVwidGV4dC1hbGlnbjpjZW50ZXI7IG1hcmdpbjogMTBweCAwO1wiID48L2Rpdj4nKS5hcHBlbmRUbyh3cmFwcGVyKTtcbiAgICB2YXIgbGFiZWxTd2F0Y2ggPSAkKCc8ZGl2IHN0eWxlPVwiZGlzcGxheTppbmxpbmUtYmxvY2s7IHdpZHRoOiAxZW07IGhlaWdodDogMWVtOyBib3JkZXItcmFkaXVzOiA1MCVcIj48L2Rpdj4nKS5hcHBlbmRUbyhsYWJlbFdyYXBwZXIpO1xuICAgIHZhciBsYWJlbFRleHQgPSAkKCc8ZGl2IHN0eWxlPVwiZGlzcGxheTppbmxpbmUtYmxvY2s7IHBhZGRpbmctbGVmdDogMTBweDttYXJnaW4tdG9wOiAtLjRlbTt2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1wiPjwvZGl2PicpLmFwcGVuZFRvKGxhYmVsV3JhcHBlcik7XG5cbiAgICBwaWUgPSBkMy5sYXlvdXQucGllKClcbiAgICAgIC5zb3J0KG51bGwpO1xuXG4gICAgYXJjID0gZDMuc3ZnLmFyYygpXG4gICAgICAuaW5uZXJSYWRpdXMocmFkaXVzLXJhZGl1cyAqIDAuNClcbiAgICAgIC5vdXRlclJhZGl1cyhyYWRpdXMpO1xuXG4gICAgdmFyIGFyY092ZXIgPSBkMy5zdmcuYXJjKClcbiAgICAgIC5vdXRlclJhZGl1cyhyYWRpdXMgKyAxMClcbiAgICAgIC5pbm5lclJhZGl1cygocmFkaXVzLXJhZGl1cyAqIDAuNCkgKyAxMCk7XG5cbiAgICAvLyBOb3RlIHRoYXQgd2UgYWRkICdjbHVzdGVyRG9udXQnIGFzIGEgc2VsZWN0b3JcbiAgICBzdmcgPSBkMy5zZWxlY3Qod3JhcHBlcikuYXBwZW5kKFwic3ZnXCIpXG4gICAgICAuYXR0cihcIndpZHRoXCIsIHdpZHRoKVxuICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgaGVpZ2h0KVxuICAgICAgLmFwcGVuZChcImdcIilcbiAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKFwiICsgd2lkdGggLyAyICsgXCIsXCIgKyBoZWlnaHQgLyAyICsgXCIpXCIpO1xuXG4gICAgdGhpcy5wYXRoID0gc3ZnLnNlbGVjdEFsbChcInBhdGhcIilcbiAgICAgIC5kYXRhKGZ1bmN0aW9uKCl7XG4gICAgICAgIHZhciBkYXRhT2JqQXJyLFxuICAgICAgICAgIGRhdGFBcnIsXG4gICAgICAgICAgcGllRGF0YTtcblxuICAgICAgICBkYXRhT2JqQXJyID0gZGF0YXNldDtcblxuICAgICAgICBkYXRhQXJyID0gW107XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGlNYXggPSBkYXRhT2JqQXJyLmxlbmd0aDsgaSA8IGlNYXg7IGkrKykge1xuICAgICAgICAgIGRhdGFBcnIucHVzaChkYXRhT2JqQXJyW2ldWydjb3VudCddKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHBpZURhdGEgPSBwaWUoZGF0YUFycik7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGlNYXggPSBwaWVEYXRhLmxlbmd0aDsgaSA8IGlNYXg7IGkrKykge1xuICAgICAgICAgIHBpZURhdGFbaV0uZGF0YSA9IGRhdGFPYmpBcnJbaV07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcGllRGF0YTtcbiAgICAgIH0pXG4gICAgICAuZW50ZXIoKS5hcHBlbmQoXCJwYXRoXCIpXG4gICAgICAuYXR0cihcImZpbGxcIiwgZnVuY3Rpb24oZCwgaikge1xuICAgICAgICByZXR1cm4gZC5kYXRhLmNvbG9yO1xuICAgICAgfSlcbiAgICAgIC5hdHRyKFwiZFwiLCBhcmMpXG4gICAgICAuYXR0cihcImN1cnNvclwiLFwicG9pbnRlclwiKVxuICAgICAgLmF0dHIoXCJjdXJzb3JcIixcInBvaW50ZXJcIilcbiAgICAgIC5vbihcIm1vdXNlb3ZlclwiLCBmdW5jdGlvbihkLCBpKSB7XG5cbiAgICAgICAgLy8gY2xlYXIgcHJldmlvdXNseSBhY3RpdmUgY2hhcnQgd2VkZ2VcbiAgICAgICAgZDMuc2VsZWN0KHdyYXBwZXIpLnNlbGVjdEFsbCgncGF0aCcpLnRyYW5zaXRpb24oKVxuICAgICAgICAgIC5kdXJhdGlvbigxMDApXG4gICAgICAgICAgLmF0dHIoXCJkXCIsIGFyYylcbiAgICAgICAgICAuYXR0cignb3BhY2l0eScsMSlcbiAgICAgICAgICAuYXR0cignc3Ryb2tlLXdpZHRoJywxKVxuICAgICAgICAgIC5hdHRyKCdzdHJva2UnLCdyZ2JhKDI1NSwyNTUsMjU1LDEpJyk7XG5cbiAgICAgICAgLy8gTWFrZSB0aGUgbW91c2VvdmVyIHdlZGdlIGFjdGl2ZVxuICAgICAgICBkMy5zZWxlY3QodGhpcylcbiAgICAgICAgICAudHJhbnNpdGlvbigpXG4gICAgICAgICAgLmR1cmF0aW9uKDEwMClcbiAgICAgICAgICAuYXR0cihcImRcIiwgYXJjT3ZlcilcbiAgICAgICAgICAuYXR0cignb3BhY2l0eScsMC44KVxuICAgICAgICAgIC5hdHRyKCdzdHJva2Utd2lkdGgnLDIpXG4gICAgICAgICAgLmF0dHIoJ3N0cm9rZScsJ3JnYmEoMjU1LDI1NSwyNTUsMSknKTtcblxuICAgICAgICAvLyBNYWtlIGFwcHJvcHJpYXRlIGxhYmVsXG4gICAgICAgICQobGFiZWxTd2F0Y2gpLmNzcygnYmFja2dyb3VuZC1jb2xvcicsIGQuZGF0YS5jb2xvcik7XG4gICAgICAgICQobGFiZWxUZXh0KS5odG1sKGQuZGF0YS5hbGlhcyk7XG5cbiAgICAgICAgLy8gU2hvdyB0aGUgbGFiZWwgaWYgY3VycmVudGx5IGhpZGRlblxuICAgICAgICBpZigkKHNlbGYuY2FwdGlvbikuY3NzKCdkaXNwbGF5JykgPT09ICdub25lJykge1xuICAgICAgICAgICQobGFiZWxXcmFwcGVyKS5zbGlkZVRvZ2dsZSgpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLy8ub24oXCJtb3VzZW91dFwiLCBmdW5jdGlvbihkLGkpIHt9KVxuICAgICAgLmVhY2goZnVuY3Rpb24oZCwgaSkge1xuXG4gICAgICAgIC8vIG9uIGxvYWQsIHdlIHdhbnQgdGhlIGxhcmdlc3QgY2hhcnQgd2VkZ2UgdG8gYmUgYWN0aXZld1xuICAgICAgICBpZihpICE9PSAwICApe1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGQzLnNlbGVjdCh0aGlzKVxuICAgICAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgICAgICAuZHVyYXRpb24oMTAwKVxuICAgICAgICAgIC5hdHRyKFwiZFwiLCBhcmNPdmVyKVxuICAgICAgICAgIC5hdHRyKCdvcGFjaXR5JywwLjgpXG4gICAgICAgICAgLmF0dHIoJ3N0cm9rZS13aWR0aCcsMilcbiAgICAgICAgICAuYXR0cignc3Ryb2tlJywncmdiYSgyNTUsMjU1LDI1NSwxKScpO1xuXG4gICAgICAgIC8vIG1ha2UgdGhlIGxhYmVsXG4gICAgICAgICQobGFiZWxTd2F0Y2gpLmNzcygnYmFja2dyb3VuZC1jb2xvcicsIGQuZGF0YS5jb2xvcik7XG4gICAgICAgICQobGFiZWxUZXh0KS5odG1sKGQuZGF0YS5hbGlhcyk7XG5cbiAgICAgICAgaWYoJChsYWJlbFdyYXBwZXIpLmNzcygnZGlzcGxheScpID09PSAnbm9uZScpIHtcbiAgICAgICAgICAkKGxhYmVsV3JhcHBlcikuc2xpZGVUb2dnbGUoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICBpZihsYWJlbFBvc2l0aW9uID09PSAndG9wJykge1xuICAgICAgbGFiZWxXcmFwcGVyLnByZXBlbmRUbyh3cmFwcGVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGFiZWxXcmFwcGVyLmFwcGVuZFRvKHdyYXBwZXIpO1xuICAgIH1cblxuICAgIHRoaXMubGFiZWxXcmFwcGVyID0gbGFiZWxXcmFwcGVyO1xuICAgIHRoaXMuc3ZnID0gc3ZnO1xuICB9XG5cblxuXG5cbiAgZnVuY3Rpb24gbWFrZVZpc3VhbGl6YXRpb25EaWN0aW9uYXJ5KGNhdGVnb3J5RW50aXRpZXMsIG9wdHMpe1xuXG4gICAgdmFyIG9wdGlvbnMgPSBvcHRzIHx8IHt9O1xuXG4gICAgb3B0aW9ucy51bmFzc2lnbmVkQ29sb3IgPSBvcHRpb25zLnVuYXNzaWduZWRDb2xvciB8fCAnI0NDQ0NDQyc7XG4gICAgb3B0aW9ucy51bmFzc2lnbmVkTGFiZWwgPSBvcHRpb25zLnVuYXNzaWduZWRMYWJlbCB8fCAnTm90IEFzc2lnbmVkJztcblxuICAgIHZhciBkZWZhdWx0UGFsZXR0ZSA9IFtcIiMwMDk0MDBcIiwgXCIjRkZDOTNBXCIsIFwiI0ZGMzg0OVwiLCBcIiMxNzFDRThcIiwgXCIjMDVGRkQ5XCIsIFwiI0VDOEUyRlwiLCBcIiM2RUQ0NDRcIiwgXCIjOTU1NkVGXCIsIFwiIzIxNzVERVwiLCBcIiNFMjNCNURcIiwgXCIjMWY3N2I0XCIsIFwiI2FlYzdlOFwiLCBcIiNmZjdmMGVcIiwgXCIjZmZiYjc4XCIsIFwiIzJjYTAyY1wiLCBcIiM5OGRmOGFcIiwgXCIjZDYyNzI4XCIsIFwiI2ZmOTg5NlwiLCBcIiM5NDY3YmRcIiwgXCIjYzViMGQ1XCIsIFwiIzhjNTY0YlwiLCBcIiNjNDljOTRcIiwgXCIjZTM3N2MyXCIsIFwiI2Y3YjZkMlwiLCBcIiM3ZjdmN2ZcIiwgXCIjYzdjN2M3XCIsIFwiI2JjYmQyMlwiLCBcIiNkYmRiOGRcIiwgXCIjMTdiZWNmXCIsIFwiIzllZGFlNVwiLCBcIiMwMDk0MDBcIiwgXCIjRkZDOTNBXCIsIFwiI0ZGMzg0OVwiLCBcIiMxNzFDRThcIiwgXCIjMDVGRkQ5XCIsIFwiI0VDOEUyRlwiLCBcIiM2RUQ0NDRcIiwgXCIjOTU1NkVGXCIsIFwiIzIxNzVERVwiLCBcIiNFMjNCNURcIiwgXCIjMWY3N2I0XCIsIFwiI2FlYzdlOFwiLCBcIiNmZjdmMGVcIiwgXCIjZmZiYjc4XCIsIFwiIzJjYTAyY1wiLCBcIiM5OGRmOGFcIiwgXCIjZDYyNzI4XCIsIFwiI2ZmOTg5NlwiLCBcIiM5NDY3YmRcIiwgXCIjYzViMGQ1XCIsIFwiIzhjNTY0YlwiLCBcIiNjNDljOTRcIiwgXCIjZTM3N2MyXCIsIFwiI2Y3YjZkMlwiLCBcIiM3ZjdmN2ZcIiwgXCIjYzdjN2M3XCIsIFwiI2JjYmQyMlwiLCBcIiNkYmRiOGRcIiwgXCIjMTdiZWNmXCIsIFwiIzllZGFlNVwiXTtcblxuICAgIHZhciBkaWN0aW9uYXJ5ID0ge307XG5cbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgY2F0ZWdvcnlFbnRpdGllcy5sZW5ndGg7IGkrKykge1xuXG4gICAgICB2YXIgY29sb3IgPSBudWxsO1xuXG4gICAgICBpZihpIDwgZGVmYXVsdFBhbGV0dGUubGVuZ3RoKSB7XG4gICAgICAgIGNvbG9yID0gZGVmYXVsdFBhbGV0dGVbaV07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgaW5kZXggPSBpICUgZGVmYXVsdFBhbGV0dGUubGVuZ3RoIC0gMTtcbiAgICAgICAgY29sb3IgPSBkZWZhdWx0UGFsZXR0ZVtpbmRleF07XG4gICAgICB9XG4gICAgICBkaWN0aW9uYXJ5W2NhdGVnb3J5RW50aXRpZXNbaV0udmFsdWVdID0ge1xuICAgICAgICB2YWx1ZTogY2F0ZWdvcnlFbnRpdGllc1tpXS52YWx1ZSxcbiAgICAgICAgbGFiZWw6IGNhdGVnb3J5RW50aXRpZXNbaV0ubGFiZWwsXG4gICAgICAgIGNvbG9yOiBjb2xvclxuICAgICAgfTtcblxuICAgIH1cblxuICAgIGRpY3Rpb25hcnlbLTk5OTldID0ge1xuICAgICAgdmFsdWU6IC05OTk5LFxuICAgICAgbGFiZWw6IG9wdGlvbnMudW5hc3NpZ25lZExhYmVsLFxuICAgICAgY29sb3I6IG9wdGlvbnMudW5hc3NpZ25lZENvbG9yXG4gICAgfTtcblxuICAgIHJldHVybiBkaWN0aW9uYXJ5O1xuICB9XG5cblxuICAvKipcbiAgICogUHVibGljIGZ1bmN0aW9ucyB0aGF0IGFyZSBhY2Nlc3NpYmxlIGVsc2V3aGVyZSBpbiB0aGUgYXBwLlxuICAgKiBFeDogRG9udXRzLmNyZWF0ZURldGFpbHNEb251dChhcmcxLCBhcmcyKTtcbiAgICovXG4gIHJldHVybiB7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgRDMgZG9udXQgdGhhdCBnb2VzIGFyb3VuZCBhIGxhYmVsIG9uIHRoZSBtYXAuXG4gICAgICovXG4gICAgY3JlYXRlTGFiZWxEb251dDogZnVuY3Rpb24oc2VjdG9ycywgcHJvamVjdHMsIGRpdklkKSB7XG4gICAgICB2YXIgdml6RGljdGlvbmFyeSA9IG1ha2VWaXN1YWxpemF0aW9uRGljdGlvbmFyeShzZWN0b3JzKTtcbiAgICAgIHZhciBkb251dCA9IG5ldyBFeHBhbmRvRG9udXQocHJvamVjdHMsIHZpekRpY3Rpb25hcnksIGRpdklkICwgJ2JvdHRvbScpO1xuICAgICAgJChkaXZJZCkucHJlcGVuZCgnPGRpdiBpZD1cInNlY3RvcnMtaGVhZGluZ1wiIGNsYXNzPVwiaGVhZGluZ1wiPlNlY3RvcnM8L2Rpdj4nKTtcbiAgICAgIHJldHVybiBkb251dDtcbiAgICB9XG5cbiAgfTtcblxufSk7XG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgTmljaG9sYXMgSGFsbGFoYW4gPG5oYWxsYWhhbkBzcGF0aWFsZGV2LmNvbT5cbiAqICAgICAgIG9uIDMvMTgvMTQuXG4gKi9cblxuLyoqXG4gKiBBbGwgb2YgdGhlIGxheWVyIG5hbWVzIG5lZWQgdG8gYmUgbG93ZXJjYXNlLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdHZW9Bbmd1bGFyJykuc2VydmljZSgnTGF5ZXJDb25maWcnLCBmdW5jdGlvbiAoKSB7XG5cbiAgdmFyIGNvbmZpZ0xheWVycyA9IFtcbiAgICByZXF1aXJlKCcuLi8uLi8uLi8uLi9Db25maWcvbGF5ZXJzL2FsbC5qcycpLFxuICAgIHJlcXVpcmUoJy4uLy4uLy4uLy4uL0NvbmZpZy9sYXllcnMvYmFzZW1hcHMuanMnKSxcbiAgICByZXF1aXJlKCcuLi8uLi8uLi8uLi9Db25maWcvbGF5ZXJzL2Rpc2FzdGVyLmpzJyksXG4gICAgcmVxdWlyZSgnLi4vLi4vLi4vLi4vQ29uZmlnL2xheWVycy9vdGhlci5qcycpLFxuICAgIHJlcXVpcmUoJy4uLy4uLy4uLy4uL0NvbmZpZy9sYXllcnMvcHJvamVjdC5qcycpLFxuICAgIHJlcXVpcmUoJy4uLy4uLy4uLy4uL0NvbmZpZy9sYXllcnMvcHJvamVjdGhlYWx0aC5qcycpLFxuICAgIHJlcXVpcmUoJy4uLy4uLy4uLy4uL0NvbmZpZy9sYXllcnMvcHJvamVjdHJpc2suanMnKSxcbiAgICByZXF1aXJlKCcuLi8uLi8uLi8uLi9Db25maWcvbGF5ZXJzL3ZlY3RvcnRpbGVzLmpzJylcblxuICBdO1xuXG4gIC8qKlxuICAgKiBBZGRzIHRoZSBsYXllcnMgc3BlY2lmaWVkIGluIHRoZSBDb25maWcvbGF5ZXJzIGRpcmVjdG9yeSB0byB0aGlzLlxuICAgKi9cbiAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGNvbmZpZ0xheWVycy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIHZhciBjZmcgPSBjb25maWdMYXllcnNbaV07XG4gICAgZm9yICh2YXIga2V5IGluIGNmZykge1xuICAgICAgdGhpc1trZXldID0gY2ZnW2tleV07XG4gICAgfVxuICB9XG5cblxuICAvKipcbiAgICogYmJveFxuICAgKlxuICAgKiBUaGlzIGlzIHVuaXZlcnNhbCB0byBhbGwgbGF5ZXJzLCBhbmQgYmJveHVybCBmZXRjaGVzIHRoZSBmZWF0dXJlIGl0aW5lcmFyeS4gVGhpcyBpcyBpbiB0dXJuIHVzZWQgdG8gZmluZCB0aGUgY2VudGVyXG4gICAqIGZlYXR1cmUgZm9yIHRoZSBicmVhZGNydW1icyBhcyB3ZWxsIGFzIGZldGNoIHRoZSBmZWF0dXJlcyB0aGF0IGFwcGx5IHRvIGEgQkJveEdlb0pTT04gb2JqZWN0LlxuICAgKlxuICAgKiBAdHlwZSB7e2Jib3h1cmw6ICosIGNlbnRlcnVybDogKn19XG4gICAqL1xuICB0aGlzLmJib3ggPSB7XG4gICAgYmJveHVybDogY29uZmlnLmNodWJic1BhdGgoJ3NlcnZpY2VzL2N1c3RvbS9jdXN0b21fb3BlcmF0aW9uP25hbWU9Z2V0aWRzYnlleHRlbnQmZm9ybWF0PWpzb24mYmJveD06YmJveCcpLFxuICAgIC8vIHVzZWQgdG8gZ2V0IHRoZSBjZW50ZXIgZmVhdHVyZS4gY2FuIGdldCBhbnkgZmVhdHVyZSB5b3Ugd2FudCBieSBpZFxuICAgIGZlYXR1cmw6IGNvbmZpZy5jaHViYnNQYXRoKCdzZXJ2aWNlcy9jdXN0b20vY3VzdG9tX29wZXJhdGlvbj9uYW1lPWdldGZlYXR1cmVzYnlpZCZmb3JtYXQ9Z2VvanNvbiZnYWRtX2xldmVsPTpsZXZlbCZpZHM9OmlkcycpXG4gIH07XG5cbiAgLyoqXG4gICAqIEJCb3hHZW9KU09OXG4gICAqXG4gICAqIFRoaXMgbGF5ZXIgdHlwZSByZXRyaWV2ZWQgZmVhdHVyZXMgdGhhdCBpbnRlcnNlY3Qgd2l0aCB0aGUgbWFwJ3MgYm91bmRpbmcgYm94LlxuICAgKiBUaGVyZSBtdXN0IGJlIGEgYmFja2VuZCBBUEkgdGhhdCB1bmRlcnN0YW5kcyB0aGlzLiBUaGUgZmVhdHVyZXMgdGhhdCBhcHBseVxuICAgKiB0byB0aGUgYm91bmRpbmcgYm94IGFyZSBmZXRjaGVkIHVuaXZlcnNhbGx5IHRvIGFsbCBsYXllcnMuIFRoZXNlIGVuZHBvaW50c1xuICAgKiBhcmUgc3BlY2lmaWVkIGluIHRoaXMuYmJveC5cbiAgICpcbiAgICogVGhlIENodWJicyBTcGF0aWFsIFNlcnZlciBmdWxseSBjb21wcmVoZW5kcyB0aGlzLCBvdGhlcnMgZG8gbm90LlxuICAgKlxuICAgKiBAdHlwZSB7e3R5cGU6IHN0cmluZ319XG4gICAqL1xuICAvL3RoaXMudGhlbWVjb3VudCA9IHtcbiAgLy8gIG5hbWU6ICdUaGVtZSBDb3VudCcsXG4gIC8vICB0eXBlOiAnYmJveGdlb2pzb24nLFxuICAvLyAgdXJsOiBjb25maWcuY2h1YmJzUGF0aChcInNlcnZpY2VzL2N1c3RvbS9jdXN0b21fb3BlcmF0aW9uP25hbWU9Z2V0YWdncmVnYXRlZHRoZW1lZmVhdHVyZXNieWlkJmZvcm1hdD1nZW9qc29uJnRoZW1lPTp0aGVtZSZnYWRtX2xldmVsPTpsZXZlbCZpZHM9OmlkcyZmaWx0ZXJzPTpmaWx0ZXJzXCIpLFxuICAvLyAgcHJvcGVydGllczoge1xuICAvLyAgICBcInN0eWxlRm5cIjogZnVuY3Rpb24gKHByb3BlcnRpZXMpIHtcbiAgLy8gICAgICB2YXIgc3R5bGUgPSB7XG4gIC8vICAgICAgICBjb2xvcjogJ3doaXRlJyxcbiAgLy8gICAgICAgIG9wYWNpdHk6IDEsXG4gIC8vICAgICAgICBmaWxsT3BhY2l0eTogMC4wNyxcbiAgLy8gICAgICAgIHdlaWdodDogMS41XG4gIC8vICAgICAgfTtcbiAgLy9cbiAgLy8gICAgICBpZiAocHJvcGVydGllcy50aGVtZSA9PSBcImRpc2FzdGVyXCIpIHtcbiAgLy8gICAgICAgIGlmIChwcm9wZXJ0aWVzICYmIHByb3BlcnRpZXMuaXJvY19zdGF0dXNfX2MpIHtcbiAgLy8gICAgICAgICAgc3dpdGNoIChwcm9wZXJ0aWVzLmlyb2Nfc3RhdHVzX19jLnRvTG93ZXJDYXNlKCkpIHtcbiAgLy8gICAgICAgICAgICBjYXNlIFwiYWN0aXZlXCI6XG4gIC8vICAgICAgICAgICAgICBzdHlsZS5maWxsQ29sb3IgPSBcIiNjYzAwMzNcIjtcbiAgLy8gICAgICAgICAgICAgIHN0eWxlLmZpbGxPcGFjaXR5ID0gMC41O1xuICAvLyAgICAgICAgICAgICAgYnJlYWs7XG4gIC8vICAgICAgICAgICAgY2FzZSBcIm1vbml0b3JpbmdcIjpcbiAgLy8gICAgICAgICAgICAgIHN0eWxlLmZpbGxDb2xvciA9IFwiI2NjOTkwMFwiO1xuICAvLyAgICAgICAgICAgICAgc3R5bGUuZmlsbE9wYWNpdHkgPSAwLjU7XG4gIC8vICAgICAgICAgICAgICBicmVhaztcbiAgLy8gICAgICAgICAgICBjYXNlIFwiaW5hY3RpdmVcIjpcbiAgLy8gICAgICAgICAgICAgIHN0eWxlLmZpbGxDb2xvciA9IFwid2hpdGVcIjtcbiAgLy8gICAgICAgICAgICAgIHN0eWxlLmZpbGxPcGFjaXR5ID0gMC4wO1xuICAvLyAgICAgICAgICAgICAgYnJlYWs7XG4gIC8vICAgICAgICAgIH1cbiAgLy8gICAgICAgIH1cbiAgLy8gICAgICB9XG4gIC8vICAgICAgZWxzZSBpZiAocHJvcGVydGllcy50aGVtZSA9PSBcInByb2plY3RyaXNrXCIpIHtcbiAgLy8gICAgICAgIGlmIChwcm9wZXJ0aWVzICYmIHByb3BlcnRpZXMub3ZlcmFsbF9hc3Nlc3NtZW50X19jKSB7XG4gIC8vICAgICAgICAgIHN3aXRjaCAocHJvcGVydGllcy5vdmVyYWxsX2Fzc2Vzc21lbnRfX2MudG9Mb3dlckNhc2UoKSkge1xuICAvLyAgICAgICAgICAgIGNhc2UgXCJjcml0aWNhbFwiOlxuICAvLyAgICAgICAgICAgICAgc3R5bGUuZmlsbENvbG9yID0gXCJyZWRcIjtcbiAgLy8gICAgICAgICAgICAgIHN0eWxlLmZpbGxPcGFjaXR5ID0gMC41O1xuICAvLyAgICAgICAgICAgICAgYnJlYWs7XG4gIC8vICAgICAgICAgICAgY2FzZSBcImhpZ2hcIjpcbiAgLy8gICAgICAgICAgICAgIHN0eWxlLmZpbGxDb2xvciA9IFwib3JhbmdlXCI7XG4gIC8vICAgICAgICAgICAgICBzdHlsZS5maWxsT3BhY2l0eSA9IDAuNTtcbiAgLy8gICAgICAgICAgICAgIGJyZWFrO1xuICAvLyAgICAgICAgICAgIGNhc2UgXCJtZWRpdW1cIjpcbiAgLy8gICAgICAgICAgICAgIHN0eWxlLmZpbGxDb2xvciA9IFwieWVsbG93XCI7XG4gIC8vICAgICAgICAgICAgICBzdHlsZS5maWxsT3BhY2l0eSA9IDAuNTtcbiAgLy8gICAgICAgICAgICAgIGJyZWFrO1xuICAvLyAgICAgICAgICAgIGNhc2UgXCJsb3dcIjpcbiAgLy8gICAgICAgICAgICAgIHN0eWxlLmZpbGxDb2xvciA9IFwiZ3JlZW5cIjtcbiAgLy8gICAgICAgICAgICAgIHN0eWxlLmZpbGxPcGFjaXR5ID0gMC41O1xuICAvLyAgICAgICAgICAgICAgYnJlYWs7XG4gIC8vICAgICAgICAgIH1cbiAgLy8gICAgICAgIH1cbiAgLy8gICAgICB9XG4gIC8vICAgICAgZWxzZSBpZiAocHJvcGVydGllcy50aGVtZSA9PSBcInByb2plY3RoZWFsdGhcIikge1xuICAvLyAgICAgICAgaWYgKHByb3BlcnRpZXMgJiYgcHJvcGVydGllcy5vdmVyYWxsX3N0YXR1c19fYykge1xuICAvLyAgICAgICAgICBzd2l0Y2ggKHByb3BlcnRpZXMub3ZlcmFsbF9zdGF0dXNfX2MudG9Mb3dlckNhc2UoKSkge1xuICAvLyAgICAgICAgICAgIGNhc2UgXCJyZWRcIjpcbiAgLy8gICAgICAgICAgICAgIHN0eWxlLmZpbGxDb2xvciA9IFwicmVkXCI7XG4gIC8vICAgICAgICAgICAgICBzdHlsZS5maWxsT3BhY2l0eSA9IDAuNTtcbiAgLy8gICAgICAgICAgICAgIGJyZWFrO1xuICAvLyAgICAgICAgICAgIGNhc2UgXCJ5ZWxsb3dcIjpcbiAgLy8gICAgICAgICAgICAgIHN0eWxlLmZpbGxDb2xvciA9IFwieWVsbG93XCI7XG4gIC8vICAgICAgICAgICAgICBzdHlsZS5maWxsT3BhY2l0eSA9IDAuNTtcbiAgLy8gICAgICAgICAgICAgIGJyZWFrO1xuICAvLyAgICAgICAgICAgIGNhc2UgXCJncmVlblwiOlxuICAvLyAgICAgICAgICAgICAgc3R5bGUuZmlsbENvbG9yID0gXCJncmVlblwiO1xuICAvLyAgICAgICAgICAgICAgc3R5bGUuZmlsbE9wYWNpdHkgPSAwLjU7XG4gIC8vICAgICAgICAgICAgICBicmVhaztcbiAgLy8gICAgICAgICAgICBjYXNlIFwid2hpdGVcIjpcbiAgLy8gICAgICAgICAgICAgIHN0eWxlLmZpbGxDb2xvciA9IFwid2hpdGVcIjtcbiAgLy8gICAgICAgICAgICAgIHN0eWxlLmZpbGxPcGFjaXR5ID0gMC41O1xuICAvLyAgICAgICAgICAgICAgYnJlYWs7XG4gIC8vICAgICAgICAgIH1cbiAgLy8gICAgICAgIH1cbiAgLy8gICAgICB9XG4gIC8vICAgICAgcmV0dXJuIHN0eWxlO1xuICAvLyAgICB9LFxuICAvLyAgICBcImxhYmVsUHJvcGVydHlcIjogZnVuY3Rpb24gKHByb3BlcnRpZXMpIHtcbiAgLy8gICAgICBpZiAocHJvcGVydGllcy50aGVtZSA9PSBcImRpc2FzdGVyXCIpIHtcbiAgLy8gICAgICAgIHZhciBjb2xvciA9IFwiXCI7XG4gIC8vICAgICAgICB2YXIgbGFiZWxDb2xvciA9IFwiXCI7XG4gIC8vICAgICAgICBpZiAocHJvcGVydGllcyAmJiBwcm9wZXJ0aWVzLmlyb2Nfc3RhdHVzX19jKSB7XG4gIC8vICAgICAgICAgIHN3aXRjaCAocHJvcGVydGllcy5pcm9jX3N0YXR1c19fYy50b0xvd2VyQ2FzZSgpKSB7XG4gIC8vICAgICAgICAgICAgY2FzZSBcImFjdGl2ZVwiOlxuICAvLyAgICAgICAgICAgICAgY29sb3IgPSBcIiNjYzAwMzNcIjtcbiAgLy8gICAgICAgICAgICAgIGxhYmVsQ29sb3IgPSBcIiNmZmZcIjtcbiAgLy8gICAgICAgICAgICAgIGJyZWFrO1xuICAvLyAgICAgICAgICAgIGNhc2UgXCJtb25pdG9yaW5nXCI6XG4gIC8vICAgICAgICAgICAgICBjb2xvciA9IFwiI2UxYmIyNVwiO1xuICAvLyAgICAgICAgICAgICAgbGFiZWxDb2xvciA9IFwiI2ZmZlwiO1xuICAvLyAgICAgICAgICAgICAgYnJlYWs7XG4gIC8vICAgICAgICAgICAgY2FzZSBcImluYWN0aXZlXCI6XG4gIC8vICAgICAgICAgICAgICBjb2xvciA9IFwiI2JkYmRiZFwiO1xuICAvLyAgICAgICAgICAgICAgbGFiZWxDb2xvciA9IFwiIzAwMFwiO1xuICAvLyAgICAgICAgICAgICAgYnJlYWs7XG4gIC8vICAgICAgICAgIH1cbiAgLy8gICAgICAgIH1cbiAgLy8gICAgICAgIHJldHVybiAnPGRpdiBjbGFzcz1cImZlYXR1cmVsYWJlbC1pY29uLW51bWJlclwiJyArIChjb2xvciA/ICcgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiAnICsgY29sb3IgKyAnO2NvbG9yOiAnICsgbGFiZWxDb2xvciArICdcIicgOiAnJykgKyAnPjxzcGFuPicgKyBwcm9wZXJ0aWVzLnRoZW1lX2NvdW50ICsgJzwvc3Bhbj48L2Rpdj4nO1xuICAvLyAgICAgIH1cbiAgLy8gICAgICBlbHNlIHtcbiAgLy8gICAgICAgIHJldHVybiAnPGRpdiBjbGFzcz1cImZlYXR1cmVsYWJlbC1pY29uLW51bWJlclwiPjxzcGFuPicgKyBwcm9wZXJ0aWVzLnRoZW1lX2NvdW50ICsgJzwvc3Bhbj48L2Rpdj4nO1xuICAvLyAgICAgIH1cbiAgLy8gICAgfSxcbiAgLy8gICAgXCJtYXAtaWNvbi1zaXplXCI6IGZ1bmN0aW9uIChwcm9wZXJ0aWVzKSB7XG4gIC8vICAgICAgLy9SZXR1cm4gYW4gYXJyYXkgb2YgMiBpdGVtcy4gc2l6ZSBvZiBtYXAgaWNvblxuICAvLyAgICAgIHJldHVybiBbMzUsMzVdO1xuICAvLyAgICB9LFxuICAvLyAgICBcImRldGFpbHNVcmxcIjogY29uZmlnLmNodWJic1BhdGgoJ3NlcnZpY2VzL2N1c3RvbS9jdXN0b21fb3BlcmF0aW9uP25hbWU9Z2V0OnRoZW1lYnlndWlkJmZvcm1hdD1qc29uJmd1aWRzPTpndWlkcyZnYWRtX2xldmVsPTpsZXZlbCZmaWx0ZXJzPTpmaWx0ZXJzJyksXG4gIC8vICAgIFwib25TZWxlY3RcIjogJ2ZldGNoRmVhdHVyZURldGFpbHMnLCAvLyB0aGUgQkJveEdlb0pTT04gbWV0aG9kIHRvIGNhbGwgb24gc2VsZWN0LiAodG9nZ2xlZCBvbilcbiAgLy8gICAgXCJvbkRlc2VsZWN0XCI6ICdjbG9zZURldGFpbHMnLCAvLyBmZWF0dXJlbGFiZWwgZXZhbHVhdGVzIHRoaXMgc3RyaW5nIHdoZW4gYSBmZWF0dXJlIGlzIHRvZ2dsZWQgb2ZmXG4gIC8vICAgIFwiZGVmYXVsdFRoZW1lXCI6ICdwcm9qZWN0JywgLy8gVGhlIGRlZmF1bHQgdGhlbWUgdGhlIGxheWVyIHVzZXMuIFRoaXMgaXMgdXNlZCBpZiB0aGVyZSBpcyBubyB0aGVtZSBxdWVyeSBwYXJhbS5cbiAgLy8gICAgXCJsZWdlbmRcIjogZnVuY3Rpb24gKHRoZW1lKSB7XG4gIC8vICAgICAgaWYgKHRoZW1lLnRvTG93ZXJDYXNlKCkgPT0gJ2Rpc2FzdGVyJykge1xuICAvLyAgICAgICAgLy9kaXNhc3RlclxuICAvLyAgICAgICAgcmV0dXJuICc8aW1nIHNyYz1cImltYWdlcy9sZWdlbmRfZGlzYXN0ZXIucG5nXCIgYWx0PVwiZGlzYXN0ZXIgbGVnZW5kXCIgLz4nO1xuICAvLyAgICAgIH1cbiAgLy8gICAgICBlbHNlIGlmICh0aGVtZS50b0xvd2VyQ2FzZSgpID09ICdwcm9qZWN0aGVhbHRoJykge1xuICAvLyAgICAgICAgLy9wcm9qZWN0XG4gIC8vICAgICAgICByZXR1cm4gJzxpbWcgc3JjPVwiaW1hZ2VzL2xlZ2VuZF9wcm9qZWN0aGVhbHRoLnBuZ1wiIGFsdD1cInByb2plY3QgaGVhbHRoIGxlZ2VuZFwiIC8+JztcbiAgLy8gICAgICB9XG4gIC8vICAgICAgZWxzZSBpZih0aGVtZS50b0xvd2VyQ2FzZSgpID09ICdwcm9qZWN0cmlzaycpIHtcbiAgLy8gICAgICAgIHJldHVybiAnPGltZyBzcmM9XCJpbWFnZXMvbGVnZW5kX3Byb2plY3RyaXNrLnBuZ1wiIGFsdD1cInByb2plY3QgcmlzayBsZWdlbmRcIiAvPic7XG4gIC8vICAgICAgfVxuICAvLyAgICAgIGVsc2UgaWYgKHRoZW1lLnRvTG93ZXJDYXNlKCkgPT0gJ3Byb2plY3QnKSB7XG4gIC8vICAgICAgICByZXR1cm4gJzxpbWcgc3JjPVwiaW1hZ2VzL2xlZ2VuZF9wcm9qZWN0LnBuZ1wiIGFsdD1cInByb2plY3QgbGVnZW5kXCIgLz4nO1xuICAvLyAgICAgIH1cbiAgLy8gICAgfVxuICAvL1xuICAvLyAgfVxuICAvL307XG5cbiAgdGhpcy50aGVtZSA9IHtcbiAgICBuYW1lOiAnVGhlbWUgKEJhZGdlIE9mZiknLFxuICAgIHR5cGU6ICdiYm94Z2VvanNvbicsXG4gICAgdXJsOiBjb25maWcuY2h1YmJzUGF0aChcInNlcnZpY2VzL2N1c3RvbS9jdXN0b21fb3BlcmF0aW9uP25hbWU9Z2V0YWdncmVnYXRlZHRoZW1lZmVhdHVyZXNieWlkJmZvcm1hdD1nZW9qc29uJnRoZW1lPTp0aGVtZSZnYWRtX2xldmVsPTpsZXZlbCZpZHM9OmlkcyZmaWx0ZXJzPTpmaWx0ZXJzXCIpLFxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgIFwic3R5bGVGblwiOiBmdW5jdGlvbiAocHJvcGVydGllcykge1xuICAgICAgICB2YXIgc3R5bGUgPSB7XG4gICAgICAgICAgY29sb3I6ICd3aGl0ZScsXG4gICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICBmaWxsT3BhY2l0eTogMC4wNyxcbiAgICAgICAgICB3ZWlnaHQ6IDEuNVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChwcm9wZXJ0aWVzLnRoZW1lID09IFwiZGlzYXN0ZXJcIikge1xuICAgICAgICAgIGlmIChwcm9wZXJ0aWVzICYmIHByb3BlcnRpZXMuaXJvY19zdGF0dXNfX2MpIHtcbiAgICAgICAgICAgIHN3aXRjaCAocHJvcGVydGllcy5pcm9jX3N0YXR1c19fYy50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICAgICAgICAgIGNhc2UgXCJhY3RpdmVcIjpcbiAgICAgICAgICAgICAgICBzdHlsZS5maWxsQ29sb3IgPSBcIiNjYzAwMzNcIjtcbiAgICAgICAgICAgICAgICBzdHlsZS5maWxsT3BhY2l0eSA9IDAuNTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSBcIm1vbml0b3JpbmdcIjpcbiAgICAgICAgICAgICAgICBzdHlsZS5maWxsQ29sb3IgPSBcIiNjYzk5MDBcIjtcbiAgICAgICAgICAgICAgICBzdHlsZS5maWxsT3BhY2l0eSA9IDAuNTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSBcImluYWN0aXZlXCI6XG4gICAgICAgICAgICAgICAgc3R5bGUuZmlsbENvbG9yID0gXCJ3aGl0ZVwiO1xuICAgICAgICAgICAgICAgIHN0eWxlLmZpbGxPcGFjaXR5ID0gMC4wO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChwcm9wZXJ0aWVzLnRoZW1lID09IFwicHJvamVjdHJpc2tcIikge1xuICAgICAgICAgIGlmIChwcm9wZXJ0aWVzICYmIHByb3BlcnRpZXMub3ZlcmFsbF9hc3Nlc3NtZW50X19jKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKHByb3BlcnRpZXMub3ZlcmFsbF9hc3Nlc3NtZW50X19jLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgICAgICAgICAgY2FzZSBcImNyaXRpY2FsXCI6XG4gICAgICAgICAgICAgICAgc3R5bGUuZmlsbENvbG9yID0gXCJyZWRcIjtcbiAgICAgICAgICAgICAgICBzdHlsZS5maWxsT3BhY2l0eSA9IDAuNTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSBcImhpZ2hcIjpcbiAgICAgICAgICAgICAgICBzdHlsZS5maWxsQ29sb3IgPSBcIm9yYW5nZVwiO1xuICAgICAgICAgICAgICAgIHN0eWxlLmZpbGxPcGFjaXR5ID0gMC41O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIFwibWVkaXVtXCI6XG4gICAgICAgICAgICAgICAgc3R5bGUuZmlsbENvbG9yID0gXCJ5ZWxsb3dcIjtcbiAgICAgICAgICAgICAgICBzdHlsZS5maWxsT3BhY2l0eSA9IDAuNTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSBcImxvd1wiOlxuICAgICAgICAgICAgICAgIHN0eWxlLmZpbGxDb2xvciA9IFwiZ3JlZW5cIjtcbiAgICAgICAgICAgICAgICBzdHlsZS5maWxsT3BhY2l0eSA9IDAuNTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocHJvcGVydGllcy50aGVtZSA9PSBcInByb2plY3RoZWFsdGhcIikge1xuICAgICAgICAgIGlmIChwcm9wZXJ0aWVzICYmIHByb3BlcnRpZXMub3ZlcmFsbF9zdGF0dXNfX2MpIHtcbiAgICAgICAgICAgIHN3aXRjaCAocHJvcGVydGllcy5vdmVyYWxsX3N0YXR1c19fYy50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICAgICAgICAgIGNhc2UgXCJyZWRcIjpcbiAgICAgICAgICAgICAgICBzdHlsZS5maWxsQ29sb3IgPSBcInJlZFwiO1xuICAgICAgICAgICAgICAgIHN0eWxlLmZpbGxPcGFjaXR5ID0gMC41O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIFwieWVsbG93XCI6XG4gICAgICAgICAgICAgICAgc3R5bGUuZmlsbENvbG9yID0gXCJ5ZWxsb3dcIjtcbiAgICAgICAgICAgICAgICBzdHlsZS5maWxsT3BhY2l0eSA9IDAuNTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSBcImdyZWVuXCI6XG4gICAgICAgICAgICAgICAgc3R5bGUuZmlsbENvbG9yID0gXCJncmVlblwiO1xuICAgICAgICAgICAgICAgIHN0eWxlLmZpbGxPcGFjaXR5ID0gMC41O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIFwid2hpdGVcIjpcbiAgICAgICAgICAgICAgICBzdHlsZS5maWxsQ29sb3IgPSBcIndoaXRlXCI7XG4gICAgICAgICAgICAgICAgc3R5bGUuZmlsbE9wYWNpdHkgPSAwLjU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdHlsZTtcbiAgICAgIH0sXG4gICAgICBcIm1hcC1pY29uLXNpemVcIjogZnVuY3Rpb24gKHByb3BlcnRpZXMpIHtcbiAgICAgICAgLy9SZXR1cm4gYW4gYXJyYXkgb2YgMiBpdGVtcy4gc2l6ZSBvZiBtYXAgaWNvblxuICAgICAgICByZXR1cm4gWzM1LDM1XTtcbiAgICAgIH0sXG4gICAgICBcImRldGFpbHNVcmxcIjogY29uZmlnLmNodWJic1BhdGgoJ3NlcnZpY2VzL2N1c3RvbS9jdXN0b21fb3BlcmF0aW9uP25hbWU9Z2V0OnRoZW1lYnlndWlkJmZvcm1hdD1qc29uJmd1aWRzPTpndWlkcyZnYWRtX2xldmVsPTpsZXZlbCZmaWx0ZXJzPTpmaWx0ZXJzJyksXG4gICAgICBcIm9uU2VsZWN0XCI6ICdmZXRjaEZlYXR1cmVEZXRhaWxzJywgLy8gdGhlIEJCb3hHZW9KU09OIG1ldGhvZCB0byBjYWxsIG9uIHNlbGVjdC4gKHRvZ2dsZWQgb24pXG4gICAgICBcIm9uRGVzZWxlY3RcIjogJ2Nsb3NlRGV0YWlscycsIC8vIGZlYXR1cmVsYWJlbCBldmFsdWF0ZXMgdGhpcyBzdHJpbmcgd2hlbiBhIGZlYXR1cmUgaXMgdG9nZ2xlZCBvZmZcbiAgICAgIFwiZGVmYXVsdFRoZW1lXCI6ICdwcm9qZWN0JywgLy8gVGhlIGRlZmF1bHQgdGhlbWUgdGhlIGxheWVyIHVzZXMuIFRoaXMgaXMgdXNlZCBpZiB0aGVyZSBpcyBubyB0aGVtZSBxdWVyeSBwYXJhbS5cbiAgICAgIFwibGFiZWxQcm9wZXJ0eVwiOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuICc8ZGl2IGNsYXNzPVwiZmVhdHVyZWxhYmVsLWljb24tbnVtYmVyXCIgc3R5bGU9XCJkaXNwbGF5Om5vbmU7XCI+PC9kaXY+JztcbiAgICAgIH0sXG4gICAgICBcImxlZ2VuZFwiOiBmdW5jdGlvbiAodGhlbWUpIHtcbiAgICAgICAgaWYgKHRoZW1lLnRvTG93ZXJDYXNlKCkgPT0gJ2Rpc2FzdGVyJykge1xuICAgICAgICAgIC8vZGlzYXN0ZXJcbiAgICAgICAgICByZXR1cm4gJzxpbWcgc3JjPVwiaW1hZ2VzL2xlZ2VuZF9kaXNhc3Rlci5wbmdcIiBhbHQ9XCJkaXNhc3RlciBsZWdlbmRcIiAvPic7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhlbWUudG9Mb3dlckNhc2UoKSA9PSAncHJvamVjdGhlYWx0aCcpIHtcbiAgICAgICAgICAvL3Byb2plY3RcbiAgICAgICAgICByZXR1cm4gJzxpbWcgc3JjPVwiaW1hZ2VzL2xlZ2VuZF9wcm9qZWN0aGVhbHRoLnBuZ1wiIGFsdD1cInByb2plY3QgaGVhbHRoIGxlZ2VuZFwiIC8+JztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKHRoZW1lLnRvTG93ZXJDYXNlKCkgPT0gJ3Byb2plY3RyaXNrJykge1xuICAgICAgICAgIHJldHVybiAnPGltZyBzcmM9XCJpbWFnZXMvbGVnZW5kX3Byb2plY3RyaXNrLnBuZ1wiIGFsdD1cInByb2plY3QgcmlzayBsZWdlbmRcIiAvPic7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhlbWUudG9Mb3dlckNhc2UoKSA9PSAncHJvamVjdCcpIHtcbiAgICAgICAgICByZXR1cm4gJzxpbWcgc3JjPVwiaW1hZ2VzL2xlZ2VuZF9wcm9qZWN0LnBuZ1wiIGFsdD1cInByb2plY3QgbGVnZW5kXCIgLz4nO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICB9XG4gIH07XG5cblxuICB0aGlzLmJvdW5kYXJpZXMgPSB7XG4gICAgbmFtZTogJ0JvdW5kYXJpZXMnLFxuICAgIHR5cGU6ICdiYm94Z2VvanNvbicsXG4gICAgdGhlbWU6ICdhbGwnLFxuICAgIHVybDogY29uZmlnLmNodWJic1BhdGgoJ3NlcnZpY2VzL2N1c3RvbS9jdXN0b21fb3BlcmF0aW9uP25hbWU9Z2V0ZmVhdHVyZXNieWlkJmZvcm1hdD1nZW9qc29uJmdhZG1fbGV2ZWw9OmxldmVsJmlkcz06aWRzJyksXG4gICAgcHJvcGVydGllczoge1xuICAgICAgXCJzdHJva2VcIjogJ3doaXRlJyxcbiAgICAgIFwic3Ryb2tlLXdpZHRoXCI6IDEuMyxcbiAgICAgIFwic3Ryb2tlLW9wYWNpdHlcIjogMSxcbiAgICAgIFwiZmlsbC1vcGFjaXR5XCI6IDAsXG4gICAgICBcImxhYmVsUHJvcGVydHlcIjogXCJuYW1lXCIsXG4gICAgICBcIm9uU2VsZWN0XCI6ICdzaG93RmVhdHVyZVByb3BlcnRpZXMnLFxuICAgICAgXCJvbkRlc2VsZWN0XCI6ICdjbG9zZURldGFpbHMnLFxuICAgICAgXCJsZWdlbmRcIjogJzxzdmcgY2xhc3M9XCJsZWFmbGV0LXpvb20tYW5pbWF0ZWRcIiB3aWR0aD1cIjQ4XCIgaGVpZ2h0PVwiNDhcIj48Zz48cGF0aCBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBmaWxsLXJ1bGU9XCJldmVub2RkXCIgc3Ryb2tlPVwid2hpdGVcIiBzdHJva2Utb3BhY2l0eT1cIjFcIiBzdHJva2Utd2lkdGg9XCIxLjNcIiBmaWxsPVwiIzU1NTU1NVwiIGZpbGwtb3BhY2l0eT1cIjBcIiBjbGFzcz1cImxlYWZsZXQtY2xpY2thYmxlXCIgZD1cIk0tMTg5MCAtNDA5TC0xODk2IC00MDRMLTE4OTkgLTQwNEwtMTkwNyAtMzk1TC0xOTE5IC0zOTRMLTE5MjEgLTQwNEwtMTkyNCAtNDA4TC0xOTIyIC00MTFMLTE4OTkgLTQyMUwtMTg5NCAtNDIwTC0xODkxIC00MTRMLTE4ODggLTQxM3pcIj48L3BhdGg+PC9nPjwvc3ZnPidcbiAgICB9XG5cbiAgfTtcblxuICAvKipcbiAgICogU2hvd3MgYmFkZ2VzIHdpdGggbnVtYmVycyBvbiB0aGVtLiBUaGlzIGlzIGZvciB0ZXN0aW5nIGFuZCBkZW1vIHB1cnBvc2VzLlxuICAgKiBEZW1vbnN0cmF0ZXMgdGhlIGxhYmVsIHcvIGJhZGdlIGZlYXR1cmUuXG4gICAqL1xuICB0aGlzLmZha2Vjb3VudCA9IHtcbiAgICBuYW1lOiAnRmFrZSBDb3VudCcsXG4gICAgdHlwZTogJ2Jib3hnZW9qc29uJyxcbiAgICB1cmw6IGNvbmZpZy5jaHViYnNQYXRoKCdzZXJ2aWNlcy9jdXN0b20vY3VzdG9tX29wZXJhdGlvbj9uYW1lPWdldGZlYXR1cmVzYnlpZCZmb3JtYXQ9Z2VvanNvbiZnYWRtX2xldmVsPTpsZXZlbCZpZHM9OmlkcycpLFxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgIFwic3Ryb2tlXCI6ICd3aGl0ZScsXG4gICAgICBcInN0cm9rZS13aWR0aFwiOiAyLFxuICAgICAgXCJzdHJva2Utb3BhY2l0eVwiOiAxLFxuICAgICAgXCJmaWxsXCI6IFwiZ3JlZW5cIixcbiAgICAgIFwiZmlsbC1vcGFjaXR5XCI6IDAsXG4gICAgICBcImxhYmVsUHJvcGVydHlcIjogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDUwIC0gMSArIDEpKSArIDE7XG4gICAgICB9XG4gICAgfVxuXG4gIH07XG5cbiAgLy9HQURNIGNvdW50cnkgZXh0ZW50cywgbGV2ZWwgMFxuICB0aGlzLmNvdW50cnlleHRlbnRzID0ge1xuICAgIHR5cGU6ICdnZW9qc29uJyxcbiAgICAgIHRoZW1lOiAnb3RoZXInLFxuICAgICAgdXJsOiAnZGF0YS92d19nYWRtX3Jhd19nZW9tLmdlb2pzb24nXG4gIH07XG5cbiAgLy9BUkMgUmVnaW9uIGV4dGVudHNcbiAgdGhpcy5hcmNyZWdpb25leHRlbnRzID0ge1xuICAgIHR5cGU6ICdnZW9qc29uJyxcbiAgICAgIHRoZW1lOiAnb3RoZXInLFxuICAgICAgdXJsOiAnZGF0YS9hcmNfcmVnaW9uX2V4dGVudHMuZ2VvanNvbidcbiAgfTtcblxuICAvKipcbiAgICogRm9yIGxheWVycywgd2UgdHJ5IGFuZCBnZXQgYW4gYWxpYXMgZm9yIGV2ZXJ5dGhpbmcsIHNvIGlmIGl0J3MgYSBVUkwgdGhhdFxuICAgKiBkb2VzIG5vdCBtYXRjaCwgd2UganVzdCB3YW50IHRvIHJldHVybiBpdHNlbGYgc28gd2UgY2FuIGZldGNoIHRoYXQgZ2l2ZW4gdXJsLlxuICAgKlxuICAgKiBAcGFyYW0gbmFtZVxuICAgKiBAcmV0dXJucyB7Kn1cbiAgICovXG4gIHRoaXMuZmluZCA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdmFyIHZhbCA9IHRoaXNbbmFtZV0gfHwgdGhpc1tuYW1lLnRvTG93ZXJDYXNlKCldO1xuICAgIGlmICh0eXBlb2YgdmFsICE9PSAndW5kZWZpbmVkJyAmJiB2YWwgIT09IG51bGwpIHtcbiAgICAgIHJldHVybiB2YWw7XG4gICAgfVxuICAgIGlmIChuYW1lLnNsaWNlKDAsIDQpLnRvTG93ZXJDYXNlKCkgPT09ICdodHRwJykge1xuICAgICAgcmV0dXJuIG5hbWU7XG4gICAgfVxuICAgIGNvbnNvbGUuZXJyb3IoJ0NPVUxEIE5PVCBGSU5EIEFMSUFTOiAnICsgbmFtZSk7XG4gICAgcmV0dXJuIG51bGw7XG4gIH07XG5cbn0pO1xuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IE5pY2hvbGFzIEhhbGxhaGFuIDxuaGFsbGFoYW5Ac3BhdGlhbGRldi5jb20+XG4gKiAgICAgICBvbiAzLzE4LzE0LlxuICovXG5cbi8qKlxuICogQ29uZmlnIEZpbGUgZm9yIFN0b3JpZXMgUGFuZWxcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnR2VvQW5ndWxhcicpLnNlcnZpY2UoJ1N0b3JpZXNDb25maWcnLCBmdW5jdGlvbiAoKSB7XG5cbiAgLyoqXG4gICAqIFN0b3JpZXMgUGFuZWwgTGlzdFxuICAgKlxuICAgKiBMaXN0IG9mIHN0b3JpZXMgdGhhdCBnZXQgc2hvd24gaW4gdGhlIFN0b3JpZXMgUGFuZWwuIEVkaXQgdGhpcyB0byBhZGQgb3IgcmVtb3ZlXG4gICAqIHN0b3JpZXMgdGhhdCB0aGUgdXNlciB3aWxsIHNlZSBhcyBjaG9pY2VzLiBBbGwgc3RvcmllcywgaW5jbHVkaW5nIG9uZXMgbm90IGluIHRoaXNcbiAgICogbGlzdCwgY2FuIHN0aWxsIGJlIG1hbnVhbGx5IHJlZmVyZW5jZWQgaW4gdGhlIHVybC4gVGhpcyBpcyBqdXN0IGZvciB0aGUgVXNlciBJbnRlcmZhY2UuXG4gICAqL1xuICB0aGlzLnN0b3JpZXMgPSBbXG4gICAgJ2hhaXlhbicsXG4gICAgJ2Vib2xhJ1xuICBdO1xuXG5cbiAgLyoqXG4gICAqIFN0b3JpZXNcbiAgICpcbiAgICogQWxsIHN0b3J5IGFsaWFzZXMgY2FuIGJlIHJlZmVycmVkIHRvIGluIHRoZSB1cmwuIFRoZSBjb3JyZXNwb25kaW5nXG4gICAqIHBhdGggdG8gdGhlIHRodW1ibmFpbCBpbiB0aGUgU3RvcmllcyBQYW5lbCBzaG91bGQgYmU6XG4gICAqICAgIGltYWdlcy97YWxpYXNOYW1lfS5qcGdcbiAgICpcbiAgICovXG5cbiAgdGhpcy5oYWl5YW4gPSB7XG4gICAgdXJsOiAnL21hcGZvbGlvL2luZGV4Lmh0bWwjL21hcEAxMi43Njg5NDYsMTIyLjQ4NjU3Miw2KG9ydGhvLGdhZG0wLGdkYWNzKT90aGVtZT1kaXNhc3RlciZkZXRhaWxzLXBhbmVsPW9wZW4mc2ZfaWQ9YTBFZDAwMDAwMHFabnRVRUFTJyxcbiAgICBuYW1lOiAnVHlwaG9vbiBIYWl5YW4gUmVzcG9uc2UnLFxuICAgIGRhdGU6ICcyMDEzLTEwLTEyJyxcbiAgICB0aHVtYm5haWw6ICdpbWFnZXMvc3Rvcmllcy9oYWl5YW4ucG5nJyxcbiAgICBrZXl3b3JkczogJ1R5cGhvb24sIERpc2FzdGVyIFJlc3BvbnNlLCBIYWl5YW4sIERpc2FzdGVyLCBBTUVFJ1xuICB9O1xuICB0aGlzLmVib2xhID0ge1xuICAgIHVybDogJy9tYXBmb2xpby9pbmRleC5odG1sIy9tYXBAMTUuMDcyMTI0LC0zLjQ2MDY5Myw2KG9ydGhvLGdhZG0wLGdkYWNzKT90aGVtZT1kaXNhc3RlcicsXG4gICAgbmFtZTogJ0Vib2xhIE91dGJyZWFrIFJlc29wbnNlJyxcbiAgICBkYXRlOiAnMjAxNC0xNS01JyxcbiAgICB0aHVtYm5haWw6ICdpbWFnZXMvc3Rvcmllcy9lYm9sYS5wbmcnLFxuICAgIGtleXdvcmRzOiAnRWJvbGEsIERpc2FzdGVyIFJlc3BvbnNlLCBHdWluZWEsIERpc2Vhc2UsIE1hbGksIEFmcmljYSdcblxuXG4gIH07XG5cbiAgLyoqXG4gICAqIEZvciBsYXllcnMsIHdlIHRyeSBhbmQgZ2V0IGFuIGFsaWFzIGZvciBldmVyeXRoaW5nLCBzbyBpZiBpdCdzIGEgVVJMIHRoYXRcbiAgICogZG9lcyBub3QgbWF0Y2gsIHdlIGp1c3Qgd2FudCB0byByZXR1cm4gaXRzZWxmIHNvIHdlIGNhbiBmZXRjaCB0aGF0IGdpdmVuIHVybC5cbiAgICpcbiAgICogQHBhcmFtIG5hbWVcbiAgICogQHJldHVybnMgeyp9XG4gICAqL1xuICB0aGlzLmZpbmQgPSBmdW5jdGlvbihuYW1lKSB7XG4gICAgdmFyIHZhbCA9IHRoaXNbbmFtZV0gfHwgdGhpc1tuYW1lLnRvTG93ZXJDYXNlKCldO1xuICAgIGlmICh0eXBlb2YgdmFsICE9PSAndW5kZWZpbmVkJyAmJiB2YWwgIT09IG51bGwpIHtcbiAgICAgIHJldHVybiB2YWw7XG4gICAgfVxuICAgIGlmIChuYW1lLnNsaWNlKDAsIDQpLnRvTG93ZXJDYXNlKCkgPT09ICdodHRwJykge1xuICAgICAgcmV0dXJuIG5hbWU7XG4gICAgfVxuICAgIGNvbnNvbGUuZXJyb3IoJ0NPVUxEIE5PVCBGSU5EIEFMSUFTOiAnICsgbmFtZSk7XG4gICAgcmV0dXJuIG51bGw7XG4gIH07XG5cbn0pO1xuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IE5pY2hvbGFzIEhhbGxhaGFuIDxuaGFsbGFoYW5Ac3BhdGlhbGRldi5jb20+XG4gKiAgICAgICBvbiA2LzMvMTQuXG4gKi9cblxudmFyIEZlYXR1cmVTZXQgPSByZXF1aXJlKCcuLi8uLi8uLi9saWIvZmVhdHVyZWxhYmVsL0ZlYXR1cmVTZXQnKTtcbnZhciBSZXNvdXJjZSA9IHJlcXVpcmUoJy4vcmVzb3VyY2UnKTtcbnZhciBiYm94VXJsID0gcmVxdWlyZSgnLi92ZWN0b3InKS5iYm94VXJsO1xudmFyIGJib3hSZXNvdXJjZXMgPSByZXF1aXJlKCcuL3ZlY3RvcicpLmJib3hSZXNvdXJjZXM7XG5cbnZhciBMID0gcmVxdWlyZSgnLi92ZWN0b3InKS5MO1xudmFyIGFuZ3VsYXIgPSByZXF1aXJlKCcuL3ZlY3RvcicpLmFuZ3VsYXI7XG52YXIgJHJvb3RTY29wZSA9IHJlcXVpcmUoJy4vdmVjdG9yJykuJHJvb3RTY29wZTtcbnZhciAkaHR0cCA9IHJlcXVpcmUoJy4vdmVjdG9yJykuJGh0dHA7XG5cbm1vZHVsZS5leHBvcnRzID0gQkJveEdlb0pTT047XG5cblxuZnVuY3Rpb24gQkJveEdlb0pTT04oY29uZmlnKSB7XG4gIFJlc291cmNlLmNhbGwodGhpcywgY29uZmlnKTtcbiAgaWYoY29uZmlnLmJib3h1cmwpIHtcbiAgICB0aGlzLl9iYm94dXJsID0gYmJveFVybCA9IGNvbmZpZy5iYm94dXJsO1xuICB9XG4gIHRoaXMuX2ZlYXR1cmVzID0ge307XG4gIHRoaXMuX2ZlYXR1cmVMYXllcnNCeUxldmVsID0ge307XG4gIHRoaXMuX2FsbEZlYXR1cmVMYXllcnMgPSB7fTtcbiAgaWYgKGNvbmZpZy5wcm9wZXJ0aWVzICYmIGNvbmZpZy5wcm9wZXJ0aWVzLmxhYmVsUHJvcGVydHkpIHtcbiAgICB0aGlzLl9mZWF0dXJlU2V0ID0gbmV3IEZlYXR1cmVTZXQoKTtcbiAgfVxuICB0aGlzLl9kZWZhdWx0VGhlbWUgPSBjb25maWcuZGVmYXVsdFRoZW1lIHx8ICdwcm9qZWN0JztcblxuICBpZiAoY29uZmlnLmRldGFpbHNVcmwpIHtcbiAgICB0aGlzLl9kZXRhaWxzVXJsID0gY29uZmlnLmRldGFpbHNVcmw7XG4gIH1cblxuICBiYm94UmVzb3VyY2VzLnB1c2godGhpcyk7XG4gIHRoaXMuX3Jlc0lkeCA9IGJib3hSZXNvdXJjZXMubGVuZ3RoIC0gMTtcbn1cblxuQkJveEdlb0pTT04ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShSZXNvdXJjZS5wcm90b3R5cGUpO1xuQkJveEdlb0pTT04ucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gQkJveEdlb0pTT047XG5cblxuQkJveEdlb0pTT04ucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgYmJveFJlc291cmNlcy5zcGxpY2UodGhpcy5fcmVzSWR4LDEpO1xufTtcblxuXG5CQm94R2VvSlNPTi5wcm90b3R5cGUuZ2V0TGF5ZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBsYXllciA9IFJlc291cmNlLnByb3RvdHlwZS5nZXRMYXllci5jYWxsKHRoaXMpO1xuICBsYXllci5kZXN0cm95UmVzb3VyY2UgPSB0aGlzLmRlc3Ryb3k7IC8vIGdpdmVzIHRoZSBtYXAgdG8gZGVzdHJveSB0aGUgYmJveGdlb2pzb24gdmVjdG9yIHByb3ZpZGVyIHJlc291cmNlXG4gIHJldHVybiBsYXllcjtcbn07XG5cblxuQkJveEdlb0pTT04ucHJvdG90eXBlLl9nZXRGZWF0dXJlcyA9IGZ1bmN0aW9uIChmZWF0T2JqKSB7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgdmFyIHRoZW1lID0gJHJvb3RTY29wZS4kc3RhdGVQYXJhbXMudGhlbWUgfHwgc2VsZi5fZGVmYXVsdFRoZW1lO1xuICB2YXIgZmlsdGVycyA9ICdudWxsJztcbiAgaWYgKCRyb290U2NvcGUuJHN0YXRlUGFyYW1zLmZpbHRlcnMpIHtcbiAgICBmaWx0ZXJzID0gJHJvb3RTY29wZS4kc3RhdGVQYXJhbXMuZmlsdGVycztcbiAgfVxuICB2YXIgdXJsID0gdGhpcy5fdXJsLnJlcGxhY2UoJzp0aGVtZScsIHRoZW1lKVxuICAgIC5yZXBsYWNlKCc6bGV2ZWwnLCBmZWF0T2JqLmxldmVsKVxuICAgIC5yZXBsYWNlKCc6aWRzJywgZmVhdE9iai5ndWlkKVxuICAgIC5yZXBsYWNlKCc6ZmlsdGVycycsIGZpbHRlcnMpO1xuICB2YXIgcHJveHlQYXRoID0gY29uZmlnLnByb3h5UGF0aCh1cmwpO1xuXG4gIC8vIGEgY2FjaGUgbWFrZXMgc2Vuc2UgaWYgdGhlIGJib3hnZW9qc29uIG9iamVjdCBpcyByZWluc3RhbnRpYXRlZFxuICAkaHR0cC5nZXQodXJsLCB7Y2FjaGU6IHRydWV9KS5zdWNjZXNzKGZ1bmN0aW9uIChnZW9qc29uLCBzdGF0dXMpIHtcbiAgICBwcm9jZXNzRmVhdHVyZXMoc2VsZiwgZmVhdE9iaiwgZ2VvanNvbik7XG4gIH0pLmVycm9yKGZ1bmN0aW9uKGVycikge1xuICAgICRodHRwLmdldChwcm94eVBhdGgpLnN1Y2Nlc3MoZnVuY3Rpb24gKGdlb2pzb24sIHN0YXR1cykge1xuICAgICAgcHJvY2Vzc0ZlYXR1cmVzKHNlbGYsIGZlYXRPYmosIGdlb2pzb24pO1xuICAgIH0pLmVycm9yKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1VuYWJsZSB0byBnZXRGZWF0dXJlczogJyArIHVybCk7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuZnVuY3Rpb24gcHJvY2Vzc0ZlYXR1cmVzKHNlbGYsIGZlYXRPYmosIGdlb2pzb24pIHtcbiAgaWYgKGdlb2pzb24uZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdVbmFibGUgdG8gZmV0Y2ggZmVhdHVyZTogJyArIGdlb2pzb24uZXJyb3IpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmICghZ2VvanNvbi5mZWF0dXJlcyB8fCBnZW9qc29uLmZlYXR1cmVzLmxlbmd0aCA8IDEpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgZmVhdCA9IGdlb2pzb24uZmVhdHVyZXNbMF07XG5cbiAgLy8gcHV0dGluZyBleGlzdGluZyBwcm9wZXJ0aWVzIGludG8gbmV3IGZlYXR1cmUgb2JqZWN0IHByb3BlcnRpZXNcbiAgZm9yICh2YXIga2V5IGluIGZlYXRPYmopIHtcbiAgICBmZWF0LnByb3BlcnRpZXNba2V5XSA9IGZlYXRPYmpba2V5XTtcbiAgICBkZWxldGUgZmVhdE9ialtrZXldO1xuICB9XG5cbiAgLy8gZXh0ZW5kaW5nIHByb3BlcnRpZXMgZnJvbSB0aGUgY29uZmlnIGZpbGVcbiAgZm9yICh2YXIga2V5IGluIHNlbGYuX2NvbmZpZy5wcm9wZXJ0aWVzKSB7XG4gICAgZmVhdC5wcm9wZXJ0aWVzW2tleV0gPSBzZWxmLl9jb25maWcucHJvcGVydGllc1trZXldO1xuICAgIC8vIExheWVyQ29uZmlnIHdpbGwgc3RhdGUgdGhlIG5hbWUgb2YgdGhlIEJCb3hHZW9KU09OIG1ldGhvZCB0byBiZSBjYWxsZWQgb24gY2xpY2suXG4gICAgaWYgKGtleSA9PT0gJ29uU2VsZWN0JyB8fCBrZXkgPT09ICdvbkRlc2VsZWN0Jykge1xuICAgICAgdmFyIGZuTmFtZSA9IHNlbGYuX2NvbmZpZy5wcm9wZXJ0aWVzW2tleV07XG4gICAgICBmZWF0LnByb3BlcnRpZXNba2V5XSA9IHNlbGZbZm5OYW1lXTtcbiAgICB9XG4gIH1cblxuICBmb3IgKHZhciBrIGluIGZlYXQpIHtcbiAgICBmZWF0T2JqW2tdID0gZmVhdFtrXTtcbiAgfVxuICBhbmd1bGFyLmV4dGVuZChmZWF0T2JqLCBmZWF0KTtcbiAgY29uc29sZS5sb2coJ2ZldGNoZWQgZmVhdHVyZTogJyArIGZlYXRPYmoucHJvcGVydGllcy5uYW1lKTtcblxuICBpZiAoIXNlbGYuX2dlb2pzb25MYXllcikge1xuICAgIHNlbGYuX2dldExheWVyKCk7XG4gICAgY29uc29sZS5sb2coJ2NyZWF0aW5nIGxheWVyIGluIF9nZXRGZWF0dXJlcycpO1xuICB9XG5cbiAgdmFyIG9wdGlvbnMgPSBzZWxmLl9nZW9qc29uTGF5ZXIub3B0aW9ucztcbiAgdmFyIGZlYXRMYXllciA9IEwuR2VvSlNPTi5nZW9tZXRyeVRvTGF5ZXIoZmVhdE9iaiwgb3B0aW9ucy5wb2ludFRvTGF5ZXIsIG9wdGlvbnMuY29vcmRzVG9MYXRMbmcsIG9wdGlvbnMpO1xuICBMLnN0YW1wKGZlYXRMYXllcik7XG4gIGZlYXRMYXllci5mZWF0dXJlID0gTC5HZW9KU09OLmFzRmVhdHVyZShmZWF0T2JqKTtcbiAgZmVhdExheWVyLmRlZmF1bHRPcHRpb25zID0gZmVhdExheWVyLm9wdGlvbnM7XG4gIHNlbGYuX2dlb2pzb25MYXllci5yZXNldFN0eWxlKGZlYXRMYXllcik7XG4gIGlmIChvcHRpb25zLm9uRWFjaEZlYXR1cmUpIHtcbiAgICBvcHRpb25zLm9uRWFjaEZlYXR1cmUoZmVhdE9iaiwgZmVhdExheWVyKTtcbiAgfVxuXG4gIGFkZExheWVyKHNlbGYsIGZlYXRMYXllcik7XG59XG5cblxuLyoqXG4gKiBTaG91bGQgb25seSBiZSB1c2VkIGJ5IEJCb3hMYXllciBvYmplY3RzLlxuICogQ29uc2lkZXIgdGhpcyBhIHByaXZhdGUgbWV0aG9kLlxuICpcbiAqIEBwYXJhbSBzZWxmXG4gKiBAcGFyYW0gZmVhdExheWVyXG4gKi9cbmZ1bmN0aW9uIGFkZExheWVyKHNlbGYsIGZlYXRMYXllcikge1xuICBpZiAoc2VsZi5fZmVhdHVyZVNldCkge1xuICAgIHNlbGYuX2ZlYXR1cmVTZXQuYWRkRmVhdHVyZShmZWF0TGF5ZXIsIHNlbGYuX2dlb2pzb25MYXllcik7XG4gIH1cbiAgc2VsZi5fZ2VvanNvbkxheWVyLmFkZExheWVyKGZlYXRMYXllcik7XG5cbiAgdmFyIHByb3BzID0gZmVhdExheWVyLmZlYXR1cmUucHJvcGVydGllcztcbiAgdmFyIGxldmVsID0gcHJvcHMubGV2ZWw7XG4gIGlmICghc2VsZi5fZmVhdHVyZUxheWVyc0J5TGV2ZWxbbGV2ZWxdKSB7XG4gICAgc2VsZi5fZmVhdHVyZUxheWVyc0J5TGV2ZWxbbGV2ZWxdID0gW107XG4gIH1cbiAgc2VsZi5fZmVhdHVyZUxheWVyc0J5TGV2ZWxbbGV2ZWxdLnB1c2goZmVhdExheWVyKTtcbiAgc2VsZi5fYWxsRmVhdHVyZUxheWVyc1twcm9wcy5ndWlkXSA9IGZlYXRMYXllcjtcbn1cblxuXG5CQm94R2VvSlNPTi5wcm90b3R5cGUucHJvY2Vzc0ZlYXR1cmVJdGluZXJhcnkgPSBmdW5jdGlvbiAoZmVhdEl0aW5lcmFyeSkge1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIHZhciBhY3RpdmVMZXZlbHMgPSB7fTtcbiAgc2VsZi5fYWN0aXZlTGV2ZWxzID0gYWN0aXZlTGV2ZWxzO1xuICBzZWxmLl9mZWF0SXRpbmVyYXJ5SGFzaCA9IHt9O1xuICBmb3IgKHZhciBpPTAsIGxlbiA9IGZlYXRJdGluZXJhcnkubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgICB2YXIgbyA9IGZlYXRJdGluZXJhcnlbaV07XG4gICAgYWN0aXZlTGV2ZWxzW28ubGV2ZWxdID0gdHJ1ZTtcbiAgICBzZWxmLl9mZWF0SXRpbmVyYXJ5SGFzaFtvLmd1aWRdID0gbztcbiAgICB2YXIgZ3VpZCA9IG8uZ3VpZCB8fCBvLmlkO1xuICAgIGlmICghc2VsZi5fZmVhdHVyZXNbZ3VpZF0pIHtcbiAgICAgIC8vIGFkZGluZyBmZWF0dXJlIHRvIGZlYXR1cmVzIGhhc2ggKGFsbCBmZWF0dXJlcyBldmVyKVxuICAgICAgc2VsZi5fZmVhdHVyZXNbZ3VpZF0gPSBvO1xuICAgICAgLy8gZ2V0dGluZyB0aGUgZmVhdHVyZXMgKGluY2x1ZGluZyBiYXNpYywgc2ltcGxpZmllZCBnZW9tZXRyeSlcbiAgICAgIHNlbGYuX2dldEZlYXR1cmVzKG8pO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBpZiB3ZSBhbHJlYWR5IGhhdmUgYSBsYXllciBhbmQgaXQgaXMgbm90IG9uIHRoZSBtYXAgYnV0IHNob3VsZCBiZSB0aGVyZSwgYWRkIGl0IHRvIHRoZSBnZW9qc29uIGxheWVyXG4gICAgICB2YXIgbCA9IHNlbGYuX2FsbEZlYXR1cmVMYXllcnNbZ3VpZF07XG4gICAgICBpZiAobCkge1xuICAgICAgICBhZGRMYXllcihzZWxmLCBsKTtcbiAgICAgIH1cblxuICAgIH1cbiAgfVxuICBzZWxmLl9yZW1vdmVJbmFjdGl2ZUxheWVycyhzZWxmKTtcbiAgcmVtb3ZlSW5hY3RpdmVMYWJlbHMoc2VsZik7XG59O1xuXG5cbi8qKlxuICogVGhpcyBpcyBjYWxsZWQgYnkgdGhlIG9uU2VsZWN0IGV2ZW50IGZvciB0aGUgZmVhdHVyZWxhYmVscy5cbiAqIEBwYXJhbSBmZWF0dXJlTGF5ZXJcbiAqL1xuQkJveEdlb0pTT04ucHJvdG90eXBlLmZldGNoRmVhdHVyZURldGFpbHMgPSBmdW5jdGlvbihmZWF0dXJlTGF5ZXIpIHtcbiAgdmFyIHByb3BlcnRpZXMgPSBmZWF0dXJlTGF5ZXIuZmVhdHVyZS5wcm9wZXJ0aWVzO1xuICB2YXIgZGV0YWlsc1VybCA9IHByb3BlcnRpZXMuZGV0YWlsc1VybDtcbiAgaWYgKCFkZXRhaWxzVXJsKSB7XG4gICAgY29uc29sZS5lcnJvcignV2UgbmVlZCBhIGRldGFpbHNVcmwgdG8gZmV0Y2hGZWF0dXJlRGV0YWlscycpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciB0aGVtZSA9ICRyb290U2NvcGUuJHN0YXRlUGFyYW1zLnRoZW1lIHx8IHByb3BlcnRpZXMuZGVmYXVsdFRoZW1lIHx8ICdwcm9qZWN0JztcbiAgdmFyIHRoZW1lTmFtZSA9ICRyb290U2NvcGUudGhlbWVOYW1lSGFzaFt0aGVtZV07XG4gIGlmICh0eXBlb2YgcHJvcGVydGllcy5sZXZlbCA9PT0gJ3VuZGVmaW5lZCcgfHwgcHJvcGVydGllcy5sZXZlbCA9PT0gbnVsbCkge1xuICAgIGNvbnNvbGUuZXJyb3IoJ3dlIG5lZWQgYSBsZXZlbC4nKTtcbiAgfVxuXG4gIHZhciBmaWx0ZXJzID0gJ251bGwnO1xuICBpZiAoJHJvb3RTY29wZS4kc3RhdGVQYXJhbXMuZmlsdGVycykge1xuICAgIGZpbHRlcnMgPSAkcm9vdFNjb3BlLiRzdGF0ZVBhcmFtcy5maWx0ZXJzO1xuICB9XG5cbiAgZGV0YWlsc1VybCA9IGRldGFpbHNVcmwucmVwbGFjZSgnOnRoZW1lJywgdGhlbWUpXG4gICAgLnJlcGxhY2UoJzpndWlkcycsIHByb3BlcnRpZXMuZ3VpZClcbiAgICAucmVwbGFjZSgnOmxldmVsJywgcHJvcGVydGllcy5sZXZlbClcbiAgICAucmVwbGFjZSgnOmZpbHRlcnMnLCBmaWx0ZXJzKTtcblxuICAkaHR0cC5nZXQoZGV0YWlsc1VybCwge2NhY2hlOiB0cnVlfSkuc3VjY2VzcyhmdW5jdGlvbiAoZGV0YWlscykge1xuXG4gICAgZmVhdHVyZUxheWVyLmZlYXR1cmUucHJvcGVydGllcy5zYWxlc2ZvcmNlID0ge307XG4gICAgZmVhdHVyZUxheWVyLmZlYXR1cmUucHJvcGVydGllcy5zYWxlc2ZvcmNlW3RoZW1lTmFtZV0gPSBkZXRhaWxzO1xuICAgICRyb290U2NvcGUuJGJyb2FkY2FzdCgnZGV0YWlscycsIGZlYXR1cmVMYXllcik7XG5cbiAgfSkuZXJyb3IoZnVuY3Rpb24oZXJyKXtcbiAgICBjb25zb2xlLmVycm9yKEpTT04uc3RyaW5naWZ5KGVycikpO1xuICB9KTtcblxufTtcblxuXG5CQm94R2VvSlNPTi5wcm90b3R5cGUuc2hvd0ZlYXR1cmVQcm9wZXJ0aWVzID0gZnVuY3Rpb24oZmVhdHVyZUxheWVyKSB7XG4gICRyb290U2NvcGUuJGJyb2FkY2FzdCgnZGV0YWlscycsIGZlYXR1cmVMYXllcik7XG59O1xuXG5cbkJCb3hHZW9KU09OLnByb3RvdHlwZS5jbG9zZURldGFpbHMgPSBmdW5jdGlvbiAoKSB7XG4gICRyb290U2NvcGUuY2xvc2VQYXJhbSgnZGV0YWlscy1wYW5lbCcpO1xufTtcblxuXG5mdW5jdGlvbiByZW1vdmVJbmFjdGl2ZUxhYmVscyhzZWxmKSB7XG4gIHZhciBhbGxGZWF0dXJlTGF5ZXJzID0gc2VsZi5fYWxsRmVhdHVyZUxheWVycztcbiAgdmFyIGZlYXR1cmVJdGluZXJhcnkgPSBzZWxmLl9mZWF0SXRpbmVyYXJ5SGFzaDtcbiAgZm9yICh2YXIga2V5IGluIGFsbEZlYXR1cmVMYXllcnMpIHtcbiAgICBpZiAoIWZlYXR1cmVJdGluZXJhcnlba2V5XSkge1xuICAgICAgdmFyIGZlYXR1cmVMYXllciA9IGFsbEZlYXR1cmVMYXllcnNba2V5XTtcbiAgICAgIGlmICggZmVhdHVyZUxheWVyLmdlb2pzb25MYXllciAmJiBmZWF0dXJlTGF5ZXIubGFiZWwpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJSRU1PVklORzogXCIgKyBmZWF0dXJlTGF5ZXIuZmVhdHVyZS5wcm9wZXJ0aWVzLm5hbWUpO1xuICAgICAgICB3aW5kb3cubWFwLnJlbW92ZUxheWVyKGZlYXR1cmVMYXllci5sYWJlbCk7IC8vIE5IIEZJWE1FXG4gICAgICAgIGZlYXR1cmVMYXllci5sYWJlbCA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIGlmICggZmVhdHVyZUxheWVyLmdlb2pzb25MYXllciAmJiBmZWF0dXJlTGF5ZXIuZ2VvanNvbkxheWVyLmxhYmVsKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiUkVNT1ZJTkc6IFwiICsgZmVhdHVyZUxheWVyLmZlYXR1cmUucHJvcGVydGllcy5uYW1lKTtcbiAgICAgICAgd2luZG93Lm1hcC5yZW1vdmVMYXllcihmZWF0dXJlTGF5ZXIuZ2VvanNvbkxheWVyLmxhYmVsKTsgLy8gTkggRklYTUVcbiAgICAgICAgZmVhdHVyZUxheWVyLmdlb2pzb25MYXllci5sYWJlbCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogRm9yIGFsbCBvZiB0aGUgYWN0aXZlIGxheWVycyB0aGF0IHdlIGhhdmUsIHJlbW92ZSBsYXllcnMgdGhhdCBhcmVcbiAqIG5vdCBwYXJ0IG9mIHRoZSBjdXJyZW50IHNldCBvZiBhY3RpdmUgbGV2ZWxzLlxuICpcbiAqIEBwcml2YXRlXG4gKi9cbkJCb3hHZW9KU09OLnByb3RvdHlwZS5fcmVtb3ZlSW5hY3RpdmVMYXllcnMgPSBmdW5jdGlvbihzZWxmKSB7XG4gIHZhciBhY3RpdmVMZXZlbHMgPSB0aGlzLl9hY3RpdmVMZXZlbHM7XG4gIHZhciBmZWF0dXJlTGF5ZXJzQnlMZXZlbCA9IHRoaXMuX2ZlYXR1cmVMYXllcnNCeUxldmVsO1xuICBmb3IgKHZhciBsZXZlbCBpbiBmZWF0dXJlTGF5ZXJzQnlMZXZlbCkge1xuICAgIC8vIGlmIHRoZSBsZXZlbCBpcyBub3QgYW4gYWN0aXZlIGxldmVsLCByZW1vdmUgZnJvbSBtYXBcbiAgICBpZiAoIWFjdGl2ZUxldmVsc1tsZXZlbF0pIHtcbiAgICAgIHZhciBsYXllcnMgPSBmZWF0dXJlTGF5ZXJzQnlMZXZlbFtsZXZlbF07XG4gICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gbGF5ZXJzLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICAgIHZhciBsYXllciA9IGxheWVyc1tpXTtcbiAgICAgICAgc2VsZi5fZ2VvanNvbkxheWVyLnJlbW92ZUxheWVyKGxheWVyKTtcblxuICAgICAgICBjb25zb2xlLmxvZygnUmVtb3ZlZCBMYXllcjogJyArIGxheWVyLmZlYXR1cmUucHJvcGVydGllcy5uYW1lKTtcbiAgICAgIH1cbiAgICAgIGRlbGV0ZSBmZWF0dXJlTGF5ZXJzQnlMZXZlbFtsZXZlbF07XG4gICAgfVxuICB9XG59O1xuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IE5pY2hvbGFzIEhhbGxhaGFuIDxuaGFsbGFoYW5Ac3BhdGlhbGRldi5jb20+XG4gKiAgICAgICBvbiA2LzMvMTQuXG4gKi9cblxudmFyIFJlc291cmNlID0gcmVxdWlyZSgnLi9yZXNvdXJjZScpO1xudmFyICRyb290U2NvcGUgPSByZXF1aXJlKCcuL3ZlY3RvcicpLiRyb290U2NvcGU7XG5cbm1vZHVsZS5leHBvcnRzID0gR2VvSlNPTjtcblxuLyoqXG4gKiBUaGlzIGlzIGEgYmFzaWMgR2VvSlNPTiBWZWN0b3JQcm92aWRlci5cbiAqIEBwYXJhbSBjb25maWdcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBHZW9KU09OKGNvbmZpZykge1xuICBSZXNvdXJjZS5jYWxsKHRoaXMsIGNvbmZpZyk7XG4gIHRoaXMuX2dlb2pzb24gPSBudWxsO1xufVxuXG5HZW9KU09OLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoUmVzb3VyY2UucHJvdG90eXBlKTtcbkdlb0pTT04ucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gR2VvSlNPTjtcblxuR2VvSlNPTi5wcm90b3R5cGUuZmV0Y2ggPSBmdW5jdGlvbiAoY2IpIHtcbiAgaWYgKHRoaXMuX2dlb2pzb24gJiYgdHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKSB7XG4gICAgY2IodGhpcy5fZ2VvanNvbik7XG4gICAgcmV0dXJuO1xuICB9XG4gIHZhciBzZWxmID0gdGhpcztcbiAgUmVzb3VyY2UucHJvdG90eXBlLmZldGNoLmNhbGwodGhpcywgZnVuY3Rpb24oZGF0YSkge1xuICAgIHNlbGYuX2dlb2pzb24gPSBkYXRhO1xuICAgIGlmICh0eXBlb2Ygc2VsZi5fY29uZmlnLnByb3BlcnRpZXMgPT09ICdvYmplY3QnKSB7XG4gICAgICBpZiAoIGRhdGEudHlwZSA9PT0gJ0ZlYXR1cmVDb2xsZWN0aW9uJykge1xuICAgICAgICB2YXIgZmVhdHMgPSBkYXRhLmZlYXR1cmVzO1xuICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gZmVhdHMubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgICAgICAgICB2YXIgZmVhdCA9IGZlYXRzW2ldO1xuICAgICAgICAgIGlmICghZmVhdC5wcm9wZXJ0aWVzKSBmZWF0LnByb3BlcnRpZXMgPSB7fTtcbiAgICAgICAgICBhbmd1bGFyLmV4dGVuZChmZWF0LnByb3BlcnRpZXMsIHNlbGYuX2NvbmZpZy5wcm9wZXJ0aWVzKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHsgLy8gYSBmZWF0dXJlIG9yIGEgZ2VvbWV0cnkgdHlwZVxuICAgICAgICBpZiAoIWRhdGEucHJvcGVydGllcykgZGF0YS5wcm9wZXJ0aWVzID0ge307XG4gICAgICAgIGFuZ3VsYXIuZXh0ZW5kKGRhdGEucHJvcGVydGllcywgc2VsZi5fY29uZmlnLnByb3BlcnRpZXMpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicpIGNiKHNlbGYuX2dlb2pzb24pO1xuICB9KTtcbn07XG5cbkdlb0pTT04ucHJvdG90eXBlLmdldExheWVyID0gZnVuY3Rpb24oKSB7XG4gIGlmICh0aGlzLl9nZW9qc29uTGF5ZXIpIHJldHVybiB0aGlzLl9nZW9qc29uTGF5ZXI7XG4gIHZhciBsYXllciA9ICBSZXNvdXJjZS5wcm90b3R5cGUuZ2V0TGF5ZXIuY2FsbCh0aGlzKTtcbiAgdGhpcy5mZXRjaChmdW5jdGlvbihnZW9qc29uKXtcbiAgICBsYXllci5hZGREYXRhKGdlb2pzb24pO1xuICAgIGxheWVyLmVhY2hMYXllcihmdW5jdGlvbiAobCkge1xuICAgICAgbC5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICRyb290U2NvcGUuJGJyb2FkY2FzdCgnZGV0YWlscycsIGwpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xuICByZXR1cm4gbGF5ZXI7XG59O1xuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IE5pY2hvbGFzIEhhbGxhaGFuIDxuaGFsbGFoYW5Ac3BhdGlhbGRldi5jb20+XG4gKiAgICAgICBvbiA2LzMvMTQuXG4gKi9cblxudmFyIFJlc291cmNlID0gcmVxdWlyZSgnLi9yZXNvdXJjZScpO1xudmFyICRyb290U2NvcGUgPSByZXF1aXJlKCcuL3ZlY3RvcicpLiRyb290U2NvcGU7XG52YXIgdG9HZW9KU09OID0gcmVxdWlyZSgnLi92ZWN0b3InKS50b0dlb0pTT047XG52YXIgJCA9IHJlcXVpcmUoJy4vdmVjdG9yJykuJDtcblxubW9kdWxlLmV4cG9ydHMgPSBLTUw7XG5cbi8qKlxuICogQSBLTUwgUmVzb3VyY2UgZmV0Y2hlcyBLTUwgYW5kIHBhcnNlcyBpdCB3aXRoIHRvZ2VvanNvbi5qc1xuICogTm90ZSB0aGF0IHRvZ2VvanNvbi5qcyBoYXMgYnVncyBhbmQgZG9lcyBub3QgYWNjdXJhdGVseSBwYXJzZVxuICogc29tZSBvZiB0aGUgS01MIHNvdXJjZXMgd2UgaGF2ZSB0ZXN0ZWQgd2l0aC4gVGhpcyBsaWJyYXJ5IGhhc1xuICogYmVlbiBtb2RpZmllZCB3aXRoIG15IGhvdGZpeGVzLlxuICpcbiAqIEBwYXJhbSBjb25maWdcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBLTUwoY29uZmlnKSB7XG4gIFJlc291cmNlLmNhbGwodGhpcywgY29uZmlnKTtcbiAgdGhpcy5fZ2VvanNvbiA9IG51bGw7XG59XG5cbktNTC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFJlc291cmNlLnByb3RvdHlwZSk7XG5LTUwucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gS01MO1xuXG5LTUwucHJvdG90eXBlLmZldGNoID0gZnVuY3Rpb24gKGNiKSB7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgUmVzb3VyY2UucHJvdG90eXBlLmZldGNoLmNhbGwodGhpcywgZnVuY3Rpb24oZGF0YSkge1xuICAgIHZhciB4bWwgPSAkLnBhcnNlWE1MKGRhdGEpO1xuICAgIHNlbGYuX2dlb2pzb24gPSB0b0dlb0pTT04ua21sKHhtbCk7XG4gICAgaWYgKHR5cGVvZiBzZWxmLl9jb25maWcucHJvcGVydGllcyA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGlmICh0eXBlb2Ygc2VsZi5fZ2VvanNvbi5wcm9wZXJ0aWVzID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBzZWxmLl9nZW9qc29uLnByb3BlcnRpZXMgPSB7fTtcbiAgICAgIH1cbiAgICAgIGFuZ3VsYXIuZXh0ZW5kKHNlbGYuX2dlb2pzb24ucHJvcGVydGllcywgc2VsZi5fY29uZmlnLnByb3BlcnRpZXMpO1xuICAgICAgc2VsZi5fZ2VvanNvbi5wcm9wZXJ0aWVzLnNyY1R5cGUgPSAna21sJztcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJykgY2Ioc2VsZi5fZ2VvanNvbiwgc2VsZik7XG4gIH0pO1xufTtcblxuS01MLnByb3RvdHlwZS5nZXRMYXllciA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMuX2dlb2pzb25MYXllcikgcmV0dXJuIHRoaXMuX2dlb2pzb25MYXllcjtcbiAgdmFyIGxheWVyID0gIFJlc291cmNlLnByb3RvdHlwZS5nZXRMYXllci5jYWxsKHRoaXMpO1xuICB0aGlzLmZldGNoKGZ1bmN0aW9uKGdlb2pzb24pe1xuICAgIGxheWVyLmFkZERhdGEoZ2VvanNvbik7XG4gICAgbGF5ZXIuZWFjaExheWVyKGZ1bmN0aW9uIChsKSB7XG4gICAgICBsLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJHJvb3RTY29wZS4kYnJvYWRjYXN0KCdkZXRhaWxzJywgbCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG4gIHJldHVybiBsYXllcjtcbn07XG5cbktNTC5wcm90b3R5cGUuZWFjaExheWVyID0gZnVuY3Rpb24gKGNiKSB7XG4gIHRoaXMuX2VhY2hMYXllckNhbGxiYWNrID0gY2I7XG4gIHRoaXMuZmV0Y2goZnVuY3Rpb24oZ2VvanNvbiwgc2VsZil7XG4gICAgdmFyIGxheWVycyA9IHNlbGYuX2dlb2pzb25MYXllci5fbGF5ZXJzO1xuICAgIGZvciAodmFyIGtleSBpbiBsYXllcnMpIHtcbiAgICAgIHZhciBsYXllciA9IGxheWVyc1trZXldO1xuICAgICAgY2IobGF5ZXIpO1xuICAgIH1cbiAgfSk7XG59O1xuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IE5pY2hvbGFzIEhhbGxhaGFuIDxuaGFsbGFoYW5Ac3BhdGlhbGRldi5jb20+XG4gKiAgICAgICBvbiA2LzMvMTQuXG4gKi9cblxudmFyIHJlc291cmNlcyA9IHJlcXVpcmUoJy4vdmVjdG9yJykucmVzb3VyY2VzO1xudmFyICRodHRwID0gcmVxdWlyZSgnLi92ZWN0b3InKS4kaHR0cDtcblxubW9kdWxlLmV4cG9ydHMgPSBSZXNvdXJjZTtcblxuLyoqXG4gKiBBbGwgVmVjdG9yUHJvdmlkZXIgcmVzb3VyY2VzIGFyZSBjaGlsZHJlbiBvZiB0aGlzIGNsYXNzLlxuICogQHBhcmFtIGNvbmZpZ1xuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIFJlc291cmNlKGNvbmZpZykge1xuICByZXNvdXJjZXMucHVzaCh0aGlzKTtcbiAgdGhpcy5fY29uZmlnID0gY29uZmlnO1xuICB0aGlzLl91cmwgPSBudWxsO1xuICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcpIHtcbiAgICB0aGlzLl91cmwgPSBjb25maWcudXJsO1xuICB9IGVsc2Uge1xuICAgIHRoaXMuX3VybCA9IGNvbmZpZztcbiAgfVxuXG4gIHRoaXMuX2VhY2hMYXllckNhbGxiYWNrID0gbnVsbDtcbiAgdGhpcy5fZ2VvanNvbkxheWVyID0gbnVsbDtcbn1cblxuXG4vKipcbiAqIEZldGNoZXMgZGF0YSBmcm9tIHRoZSBnaXZlbiB1cmwgb2YgYSByZXNvdXJjZS5cbiAqIFN1YmNsYXNzZXMgdGhlbiBoYW5kbGUgdGhlIGNhbGxiYWNrIGFjY29yZGluZ2x5LlxuICpcbiAqIE5lZWRzIHRvIGFsc28gdHJ5IHRvIGdldCBhIHJlc291cmNlIHZpYSB0aGUgQ2h1YmJzXG4gKiBwcm94eS5cbiAqXG4gKiBAcGFyYW0gY2JcbiAqL1xuUmVzb3VyY2UucHJvdG90eXBlLmZldGNoID0gZnVuY3Rpb24oY2IpIHtcbiAgdmFyIHByb3h5UGF0aCA9IGNvbmZpZy5wcm94eVBhdGgodGhpcy5fdXJsKTtcbiAgJGh0dHAuZ2V0KHRoaXMuX3VybCwge2NhY2hlOiB0cnVlfSkuc3VjY2VzcyhmdW5jdGlvbiAoZGF0YSwgc3RhdHVzKSB7XG4gICAgY2IoZGF0YSk7XG4gIH0pLmVycm9yKGZ1bmN0aW9uKCkge1xuICAgIC8vIHRyeWluZyBwcm94eVxuICAgICRodHRwLmdldChwcm94eVBhdGgsIHtjYWNoZTogdHJ1ZX0pLnN1Y2Nlc3MoZnVuY3Rpb24gKGRhdGEsIHN0YXR1cykge1xuICAgICAgY2IoZGF0YSk7XG4gICAgfSkuZXJyb3IoZnVuY3Rpb24oKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiVW5hYmxlIHRvIGZldGNoIGZyb206IFwiICsgcHJveHlQYXRoKTtcbiAgICB9KTtcbiAgfSk7XG5cbn07XG5cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBMZWFmbGV0IEdlb0pTT04gTGF5ZXIgYXNzb2NpYXRlZCB3aXRoIHRoZVxuICogUmVzb3VyY2Ugb3IgY3JlYXRlcyBhIG5ldyBvbmUuXG4gKlxuICogQHJldHVybnMge251bGx8Kn1cbiAqL1xuUmVzb3VyY2UucHJvdG90eXBlLmdldExheWVyID0gZnVuY3Rpb24gKCkge1xuICBpZiAodHlwZW9mIHRoaXMuX2dlb2pzb25MYXllciAhPT0gJ3VuZGVmaW5lZCcgJiYgdGhpcy5fZ2VvanNvbkxheWVyICE9PSBudWxsKSB7XG4gICAgcmV0dXJuIHRoaXMuX2dlb2pzb25MYXllcjtcbiAgfVxuXG4gIHRoaXMuX2dlb2pzb25MYXllciA9IEwuZ2VvSnNvbih0aGlzLl9nZW9qc29uIHx8IG51bGwsIHtcbiAgICBzdHlsZTogZnVuY3Rpb24oZmVhdHVyZSkge1xuICAgICAgaWYgKHR5cGVvZiBmZWF0dXJlLnByb3BlcnRpZXMuc3R5bGVGbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gZmVhdHVyZS5wcm9wZXJ0aWVzLnN0eWxlRm4oZmVhdHVyZS5wcm9wZXJ0aWVzKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBMLm1hcGJveC5zaW1wbGVzdHlsZS5zdHlsZShmZWF0dXJlKTtcbiAgICB9LFxuICAgIHBvaW50VG9MYXllcjogZnVuY3Rpb24oZmVhdHVyZSwgbGF0bG9uKSB7XG4gICAgICBpZiAoIWZlYXR1cmUucHJvcGVydGllcykgZmVhdHVyZS5wcm9wZXJ0aWVzID0ge307XG4gICAgICBpZiAoZmVhdHVyZS5wcm9wZXJ0aWVzLnNjYWxlKSB7XG4gICAgICAgIHJldHVybiBMLmNpcmNsZU1hcmtlcihsYXRsb24sIHtcbiAgICAgICAgICBmaWxsQ29sb3I6IGZlYXR1cmUucHJvcGVydGllcy5jb2xvciB8fCAnI0ZGMDAwMCcsXG4gICAgICAgICAgcmFkaXVzOiAyMCAqIGZlYXR1cmUucHJvcGVydGllcy5zY2FsZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBMLm1hcGJveC5tYXJrZXIuc3R5bGUoZmVhdHVyZSwgbGF0bG9uKTtcbiAgICB9XG4gIH0pLmVhY2hMYXllcih0aGlzLl9lYWNoTGF5ZXJDYWxsYmFjayk7XG5cblxuICByZXR1cm4gdGhpcy5fZ2VvanNvbkxheWVyO1xufTtcblxuUmVzb3VyY2UucHJvdG90eXBlLmVhY2hMYXllciA9IGZ1bmN0aW9uIChjYikge1xuICB0aGlzLl9lYWNoTGF5ZXJDYWxsYmFjayA9IGNiO1xuICB0aGlzLl9nZW9qc29uTGF5ZXIuZWFjaExheWVyKGNiKTtcbn07XG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgTmljaG9sYXMgSGFsbGFoYW4gPG5oYWxsYWhhbkBzcGF0aWFsZGV2LmNvbT5cbiAqICAgICAgIG9uIDMvMTkvMTQuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnR2VvQW5ndWxhcicpLmZhY3RvcnkoJ1ZlY3RvclByb3ZpZGVyJywgZnVuY3Rpb24gKCRyb290U2NvcGUsICRsb2NhdGlvbiwgJGh0dHAsIExheWVyQ29uZmlnKSB7XG5cbiAgdmFyIHZlY3RvciA9IHJlcXVpcmUoJy4vdmVjdG9yJyk7XG4gIHZlY3Rvci5zZXRJbmplY3RvcnMoJHJvb3RTY29wZSwgJGxvY2F0aW9uLCAkaHR0cCwgTGF5ZXJDb25maWcpO1xuXG5cbiAgLyoqXG4gICAqIG1ha2UgdGhlIGRlZmF1bHQgQkJveFVSTCBhYmxlIHRvIGJlIG92ZXJyaWRkZW4gaWYgc3BlY2lmaWVkIGJ5IHRoZSBMYXllckNvbmZpZyBPYmplY3QuXG4gICAqIEBwYXJhbSBjb25maWdcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqL1xuICB2ZWN0b3IuYmJveFVybCA9IExheWVyQ29uZmlnLmJib3guYmJveHVybDtcblxuICB2YXIgUmVzb3VyY2UgPSByZXF1aXJlKCcuL1Jlc291cmNlJyk7XG4gIHZhciBHZW9KU09OID0gcmVxdWlyZSgnLi9HZW9KU09OJyk7XG4gIHZhciBCQm94R2VvSlNPTiA9IHJlcXVpcmUoJy4vQkJveEdlb0pTT04nKTtcbiAgdmFyIEtNTCA9IHJlcXVpcmUoJy4vS01MJyk7XG4gIHZhciBDU1YgPSByZXF1aXJlKCcuL2NzdicpO1xuICB2YXIgUEJGID0gcmVxdWlyZSgnLi9wYmYnKTtcblxuXG4gIC8qKlxuICAgKiBUaGlzIGlzIHVzZWQgYnkgdGhlIGZhY3RvcnkgdG8gZHluYW1pY2FsbHkgc3RhdGUgdGhlIHR5cGUgKGNsYXNzKVxuICAgKiB0aGF0IGl0IHdhbnRzIHRvIGluc3RhbnRpYXRlLlxuICAgKlxuICAgKiBAdHlwZSB7e2dlb2pzb246IEdlb0pTT04sIGJib3hnZW9qc29uOiBCQm94R2VvSlNPTiwga21sOiBLTUx9fVxuICAgKi9cbiAgdmFyIHR5cGVzID0ge1xuICAgIGdlb2pzb246IEdlb0pTT04sXG4gICAgYmJveGdlb2pzb246IEJCb3hHZW9KU09OLFxuICAgIGttbDogS01MLFxuICAgIGNzdjogQ1NWLFxuICAgIHBiZjogUEJGXG4gIH07XG5cblxuXG4gIC8qKlxuICAgKiBGZXRjaGVzIHRoZSBmZWF0dXJlIGl0aW5lcmFyeSBiYXNlZCBvbiB0aGUgY3VycmVudCBiYm94LlxuICAgKlxuICAgKiBUaGUgZmVhdHVyZSBpdGluZXJhcnkgaXMgYSBzZXQgb2YgZmVhdHVyZXMgd2l0aCBzb21lIHByb3BlcnRpZXNcbiAgICogc3VjaCBhcyBndWlkIGFuZCBuYW1lLiBUaGUgZ2VvbWV0cnkgZm9yIGVhY2ggb2YgdGhlc2UgZmVhdHVyZXNcbiAgICogaGFzIG5vdCB5ZXQgYmVlbiByZXF1ZXN0ZWQuIFRoaXMgaXMgZG9uZSBieSBfZ2V0RmVhdHVyZXMuXG4gICAqL1xuICBmdW5jdGlvbiBmZXRjaEZlYXR1cmVJdGluZXJhcnkoKSB7XG4gICAgdmFyIHRoaXNVcmwgPSB2ZWN0b3IuYmJveFVybC5yZXBsYWNlKCc6YmJveCcsIHZlY3Rvci5iYm94KTtcbiAgICB2YXIgcHJveHlQYXRoID0gY29uZmlnLnByb3h5UGF0aCh0aGlzVXJsKTtcbiAgICAkaHR0cC5nZXQodGhpc1VybCwge2NhY2hlOiB0cnVlfSkuc3VjY2VzcyhmdW5jdGlvbiAoZmVhdEl0aW5lcmFyeSwgc3RhdHVzKSB7XG4gICAgICBwcm9jZXNzRmVhdHVyZUl0aW5lcmFyeShmZWF0SXRpbmVyYXJ5KTtcbiAgICB9KS5lcnJvcihmdW5jdGlvbigpIHtcbiAgICAgICRodHRwLmdldChwcm94eVBhdGgsIHtjYWNoZTogdHJ1ZX0pLnN1Y2Nlc3MoZnVuY3Rpb24gKGZlYXRJdGluZXJhcnksIHN0YXR1cykge1xuICAgICAgICBwcm9jZXNzRmVhdHVyZUl0aW5lcmFyeShmZWF0SXRpbmVyYXJ5KTtcbiAgICAgIH0pLmVycm9yKGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiVW5hYmxlIHRvIGZldGNoRmVhdHVyZUl0aW5lcmFyeTogXCIgKyB0aGlzVXJsKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc0ZlYXR1cmVJdGluZXJhcnkoZmVhdEl0aW5lcmFyeSkge1xuICAgIGNvbnNvbGUubG9nKFwiRkVBVFVSRSBJVElORVJBUlk6XCIpO1xuICAgIGZvciAodmFyIGogPSAwLCBsZW4gPSBmZWF0SXRpbmVyYXJ5Lmxlbmd0aDsgaiA8IGxlbjsgaisrKSB7XG4gICAgICB2YXIgZmVhdCA9IGZlYXRJdGluZXJhcnlbal07XG4gICAgICBpZiAoIGZlYXQuaXNjZW50ZXIgKSB7XG4gICAgICAgIHZlY3Rvci5jZW50ZXJMZXZlbCA9IGZlYXQubGV2ZWwgfHwgMDtcbiAgICAgICAgJHJvb3RTY29wZS4kYnJvYWRjYXN0KCdjZW50ZXItZmVhdHVyZScsIGZlYXQpO1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zb2xlLmxvZyhbJ2ZlYXRJdGluZXJhcnknLGZlYXRJdGluZXJhcnldKTtcblxuICAgIC8vIGlmIHRoZXJlIGFyZSBubyBmZWF0dXJlcyBmb3IgdGhlIGN1cnJlbnQgYm91bmRpbmcgYm94XG4gICAgLy9pZiAoIWZlYXRJdGluZXJhcnkgfHwgZmVhdEl0aW5lcmFyeS5sZW5ndGggPT09IDApIHtcbiAgICAvLyAgcmV0dXJuO1xuICAgIC8vfVxuXG4gICAgLyoqXG4gICAgICogQ2VudGVyIGZlYXR1cmUgbG9naWMgZm9yIGJyZWFkY3J1bWJzLlxuICAgICAqL1xuICAgIC8vZm9yICh2YXIgaT0wLCBsZW49ZmVhdEl0aW5lcmFyeS5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICAgIC8vICB2YXIgZiA9IGZlYXRJdGluZXJhcnlbaV07XG4gICAgLy8gIGlmIChmLmlzY2VudGVyID09IHRydWUpIHtcbiAgICAvLyAgICAkcm9vdFNjb3BlLiRicm9hZGNhc3QoJ2NlbnRlci1mZWF0dXJlJywgZik7XG4gICAgLy8gIH1cbiAgICAvL31cblxuICAgIC8qKlxuICAgICAqIEJCb3hHZW9KU09OIGxvZ2ljXG4gICAgICovXG4gICAgLy9mb3IodmFyIHIgPSAwLCBsZW4gPSB2ZWN0b3IuYmJveFJlc291cmNlcy5sZW5ndGg7IHIgPCBsZW47ICsrcikge1xuICAgIC8vICB2ZWN0b3IuYmJveFJlc291cmNlc1tyXS5wcm9jZXNzRmVhdHVyZUl0aW5lcmFyeShmZWF0SXRpbmVyYXJ5KTtcbiAgICAvL31cblxuICB9XG5cblxuICByZXR1cm4ge1xuICAgIC8qKlxuICAgICAqIFlvdSBjYW4gZXhwbGljaXRseSBuYW1lIHRoZSB0eXBlIG9mIHJlc291cmNlLiBJZiBub3QsXG4gICAgICogd2Ugd2lsbCBmaWd1cmUgaXQgb3V0IGZvciB5b3UuLi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSByZXNvdXJjZU5hbWVcbiAgICAgKiBAcGFyYW0gdHlwZVxuICAgICAqL1xuICAgIGNyZWF0ZVJlc291cmNlOiBmdW5jdGlvbiAocmVzb3VyY2VOYW1lLCB0eXBlKSB7XG4gICAgICB2YXIgY29uZmlnID0gTGF5ZXJDb25maWcuZmluZChyZXNvdXJjZU5hbWUpO1xuICAgICAgaWYgKGNvbmZpZyA9PT0gbnVsbCkge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdWZWN0b3JQcm92aWRlcjogSW52YWxpZCBSZXNvdXJjZSBDb25maWd1cmF0aW9uIE5hbWUuIENoZWNrIExheWVyQ29uZmlnIEZpbGUuLi4nKTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgICBpZiAodHlwZSB8fCBjb25maWcudHlwZSkge1xuICAgICAgICAvLyBpZiB0aGUgcmVzb3VyY2UgaXMganVzdCBhIHN0cmluZywgdGhlbiBpdCBzaG91bGQgYmUgYSB1cmxcbiAgICAgICAgcmV0dXJuIG5ldyB0eXBlc1sodHlwZSB8fCBjb25maWcudHlwZSkudG9Mb3dlckNhc2UoKV0oY29uZmlnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChjb25maWcuc2xpY2UoY29uZmlnLmxlbmd0aCAtIDMpLnRvTG93ZXJDYXNlKCkgPT09ICdwYmYnKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBQQkYoY29uZmlnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjb25maWcuc2xpY2UoY29uZmlnLmxlbmd0aCAtIDMpLnRvTG93ZXJDYXNlKCkgPT09ICdrbWwnKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBLTUwoY29uZmlnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjb25maWcuc2xpY2UoY29uZmlnLmxlbmd0aCAtIDMpLnRvTG93ZXJDYXNlKCkgPT09ICdjc3YnKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBDU1YoY29uZmlnKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBOSCBUT0RPIENoZWNrIGEgYml0IG1vcmUgaW50byBpZiB0aGlzIHJlc291cmNlIGlzIHZhbGlkIEdlb0pTT05cbiAgICAgICAgcmV0dXJuIG5ldyBHZW9KU09OKGNvbmZpZyk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFdoZW4gdGhlIGJvdW5kaW5nIGJveCBvZiB0aGUgbWFwIGNoYW5nZXMsIFZlY3RvclByb3ZpZGVyIG5lZWRzXG4gICAgICogdG8gYmUgbm90aWZpZWQgb2YgdGhlIGN1cnJlbnQgYm91bmRpbmcgYm94IHNvIGl0IGNhbiBmZXRjaCB0aGVcbiAgICAgKiBsYXRlc3QgdmVjdG9yIGRhdGEgZm9yIHRoZSBiYm94IG9mIHRoZSBtYXAgdmlld3BvcnQuXG4gICAgICpcbiAgICAgKiBUaGUgYmJveCBtdXN0IGJlIFdHUzg0LlxuICAgICAqXG4gICAgICogQHBhcmFtIGJib3hTdHIgXCJzb3V0aCx3ZXN0LG5vcnRoLGVhc3RcIiA9PT0gXCJtaW5YLG1pblksbWF4WCxtYXhZXCJcbiAgICAgKi9cbiAgICB1cGRhdGVCQm94OiBmdW5jdGlvbihiYm94U3RyKSB7XG4gICAgICB2ZWN0b3IuYmJveCA9IGJib3hTdHI7XG5cbiAgICAgIGZldGNoRmVhdHVyZUl0aW5lcmFyeSgpO1xuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIFByb3ZpZGVzIHRoZSBhYmlsaXR5IHRvIG92ZXJyaWRlIHRoZSBnYWRtIGxldmVsIGJlaW5nIHNob3duIGJ5IEJCb3hHZW9KU09OXG4gICAgICogZmVhdHVyZXMgb24gdGhlIG1hcC4gWW91IG1heSBzcGVjaWZ5IC0xIHRvIDUuIE5vIGFyZ3Mgb3IgYW55dGhpbmcgZWxzZVxuICAgICAqIHN3aXRjaGVzIGJhY2sgb24gc21hcnQgZ2FkbSAoYXV0b21hdGljYWxseSBjaG9vc2luZyB0aGUgbGV2ZWwgYmFzZWQgb24gYmJveCkuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gbGV2ZWxcbiAgICAgKi9cbiAgICBzZXRHYWRtTGV2ZWw6IGZ1bmN0aW9uKGxldmVsU3RyKSB7XG4gICAgICB2YXIgbGV2ZWwgPSBwYXJzZUludChsZXZlbFN0cik7XG4gICAgICB2ZWN0b3IuYmJveFVybCA9IHZlY3Rvci5iYm94VXJsLnJlcGxhY2UoLyZnYWRtX2xldmVsPS0/XFxkLywnJyk7XG4gICAgICBpZiAobGV2ZWwgPj0gLTEgJiYgbGV2ZWwgPD0gNSkge1xuICAgICAgICB2ZWN0b3IuYmJveFVybCArPSAnJmdhZG1fbGV2ZWw9JyArIGxldmVsO1xuICAgICAgfVxuICAgICAgY29uc29sZS5sb2coJ2Jib3hVcmw6ICcgKyB2ZWN0b3IuYmJveFVybCk7XG4gICAgICAvL2ZldGNoRmVhdHVyZUl0aW5lcmFyeSgpO1xuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBmZWF0dXJlIGJhc2VkIG9uIGd1aWQgYW5kIGxldmVsLiBZb3UgbWF5IG1lcmdlIGluIGEgc2V0IG9mIHByb3BlcnRpZXMgaW50byB0aGVcbiAgICAgKiBjYWxsZWQgYmFjayBvYmplY3QgaWYgZGVzaXJlZCAob3B0aW9uYWwpLlxuICAgICAqXG4gICAgICogQHBhcmFtIGd1aWRcbiAgICAgKi9cbiAgICBmZXRjaEZlYXR1cmU6IGZ1bmN0aW9uKGd1aWQsIGxldmVsLCBwcm9wc1RvTWVyZ2UsIGNiKSB7XG4gICAgICB2YXIgdXJsID0gTGF5ZXJDb25maWcuYmJveC5mZWF0dXJsLnJlcGxhY2UoJzpsZXZlbCcsIGxldmVsKS5yZXBsYWNlKCc6aWRzJywgZ3VpZCk7XG4gICAgICB2YXIgcHJveHlQYXRoID0gY29uZmlnLnByb3h5UGF0aCh1cmwpO1xuXG4gICAgICAkaHR0cC5nZXQodXJsLCB7Y2FjaGU6IHRydWV9KS5zdWNjZXNzKGZ1bmN0aW9uIChnZW9qc29uLCBzdGF0dXMpIHtcbiAgICAgICAgbWVyZ2UoZ2VvanNvbik7XG4gICAgICB9KS5lcnJvcihmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgJGh0dHAuZ2V0KHByb3h5UGF0aCkuc3VjY2VzcyhmdW5jdGlvbiAoZ2VvanNvbiwgc3RhdHVzKSB7XG4gICAgICAgICAgbWVyZ2UoZ2VvanNvbik7XG4gICAgICAgIH0pLmVycm9yKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdVbmFibGUgdG8gZmV0Y2hGZWF0dXJlOiAnICsgZ3VpZCk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICAgIGZ1bmN0aW9uIG1lcmdlKGdlb2pzb24pIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIERlYWwgd2l0aCBiYWQgc3R1ZmYuXG4gICAgICAgICAqL1xuICAgICAgICBpZiAoZ2VvanNvbi5lcnJvcikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1VuYWJsZSB0byBmZXRjaCBmZWF0dXJlOiAnICsgZ2VvanNvbi5lcnJvcik7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFnZW9qc29uLmZlYXR1cmVzIHx8IGdlb2pzb24uZmVhdHVyZXMubGVuZ3RoIDwgMSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHdlIG9ubHkgYXJlIGFjdHVhbGx5IGFza2luZyBmb3IgMSBmZWF0dXJlXG4gICAgICAgIHZhciBmZWF0ID0gZ2VvanNvbi5mZWF0dXJlc1swXTtcblxuICAgICAgICAvLyBwdXR0aW5nIGV4aXN0aW5nIHByb3BlcnRpZXMgaW50byBnZW9qc29uIGZlYXR1cmVcbiAgICAgICAgaWYgKHByb3BzVG9NZXJnZSkge1xuICAgICAgICAgIGZvciAodmFyIGtleSBpbiBwcm9wc1RvTWVyZ2UpIHtcbiAgICAgICAgICAgIGZlYXQucHJvcGVydGllc1trZXldID0gcHJvcHNUb01lcmdlW2tleV07XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY2IoZmVhdCk7XG4gICAgICB9XG5cbiAgICB9XG5cblxuICB9O1xuXG5cbn0pO1xuXG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgUnlhbiBXaGl0bGV5IDxyd2hpdGxleUBzcGF0aWFsZGV2LmNvbT5cbiAqICAgICAgIG9uIDYvMy8xNC5cbiAqL1xuXG52YXIgUmVzb3VyY2UgPSByZXF1aXJlKCcuL3Jlc291cmNlJyk7XG52YXIgJHJvb3RTY29wZSA9IHJlcXVpcmUoJy4vdmVjdG9yJykuJHJvb3RTY29wZTtcbnZhciAkID0gcmVxdWlyZSgnLi92ZWN0b3InKS4kO1xuXG5tb2R1bGUuZXhwb3J0cyA9IENTVjtcblxuLyoqXG4gKiBBIENTViBSZXNvdXJjZSBmZXRjaGVzIENTViBhbmQgcGFyc2VzIGl0XG4gKlxuICogQHBhcmFtIGNvbmZpZ1xuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIENTVihjb25maWcpIHtcbiAgUmVzb3VyY2UuY2FsbCh0aGlzLCBjb25maWcpO1xuICB0aGlzLl9nZW9qc29uID0gbnVsbDtcbn1cblxuQ1NWLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoUmVzb3VyY2UucHJvdG90eXBlKTtcbkNTVi5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBDU1Y7XG5cbkNTVi5wcm90b3R5cGUubGF0RmllbGRTdHJpbmdzID0gW1wibGF0XCIsIFwibGF0aXR1ZGVcIiwgXCJ5XCIsIFwieWNlbnRlclwiXTtcbkNTVi5wcm90b3R5cGUubG9uZ0ZpZWxkU3RyaW5ncyA9IFtcImxvblwiLCBcImxvbmdcIiwgXCJsb25naXR1ZGVcIiwgXCJ4XCIsIFwieGNlbnRlclwiLCBcImxuZ1wiXTtcblxuQ1NWLnByb3RvdHlwZS5nZXRMYXllciA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMuX2dlb2pzb25MYXllcikgcmV0dXJuIHRoaXMuX2dlb2pzb25MYXllcjtcbiAgdmFyIGxheWVyID0gUmVzb3VyY2UucHJvdG90eXBlLmdldExheWVyLmNhbGwodGhpcyk7XG4gIHRoaXMuZmV0Y2goZnVuY3Rpb24gKGdlb2pzb24pIHtcbiAgICBsYXllci5hZGREYXRhKGdlb2pzb24pO1xuICAgIGxheWVyLmVhY2hMYXllcihmdW5jdGlvbiAobCkge1xuICAgICAgbC5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICRyb290U2NvcGUuJGJyb2FkY2FzdCgnZGV0YWlscycsIGwpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xuICByZXR1cm4gbGF5ZXI7XG59O1xuXG5DU1YucHJvdG90eXBlLmZldGNoID0gZnVuY3Rpb24gKGNiKSB7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgUmVzb3VyY2UucHJvdG90eXBlLmZldGNoLmNhbGwodGhpcywgZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAvL2RhdGEgc2hvdWxkIGJlIHRoZSByYXcgY3N2LlxuXG4gICAgc2VsZi5fZ2VvanNvbiA9IHNlbGYucHJvY2Vzc0NzdkRhdGEoZGF0YSk7XG5cbiAgICBpZiAodHlwZW9mIHNlbGYuX2NvbmZpZy5wcm9wZXJ0aWVzID09PSAnb2JqZWN0Jykge1xuICAgICAgYW5ndWxhci5leHRlbmQoc2VsZi5fZ2VvanNvbi5wcm9wZXJ0aWVzLCBzZWxmLl9jb25maWcucHJvcGVydGllcyk7XG4gICAgICBzZWxmLl9nZW9qc29uLnByb3BlcnRpZXMuc3JjVHlwZSA9ICdjc3YnO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKSBjYihzZWxmLl9nZW9qc29uLCBzZWxmKTtcbiAgfSk7XG59O1xuXG5DU1YucHJvdG90eXBlLmhhbmRsZUNzdiA9IGZ1bmN0aW9uIChmaWxlLCBsYXllcikge1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIGlmIChmaWxlLmRhdGEpIHtcbiAgICB2YXIgZGVjb2RlZCA9IHRoaXMuYnl0ZXNUb1N0cmluZyhzZWxmLkJhc2U2NC5kZWNvZGUoZmlsZS5kYXRhKSk7XG4gICAgc2VsZi5wcm9jZXNzQ3N2RGF0YShkZWNvZGVkKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICByZWFkZXIub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgY29uc29sZS5sb2coXCJGaW5pc2hlZCByZWFkaW5nIENTViBkYXRhXCIpO1xuICAgICAgc2VsZi5wcm9jZXNzQ3N2RGF0YShyZWFkZXIucmVzdWx0LCBsYXllcik7XG4gICAgfTtcbiAgICByZWFkZXIucmVhZEFzVGV4dChmaWxlKTtcbiAgfVxufTtcblxuQ1NWLnByb3RvdHlwZS5nZXRTZXBhcmF0b3IgPSBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gIHZhciBzZXBhcmF0b3JzID0gW1wiLFwiLCBcIiAgICAgIFwiLCBcIjtcIiwgXCJ8XCJdO1xuICB2YXIgbWF4U2VwYXJhdG9yTGVuZ3RoID0gMDtcbiAgdmFyIG1heFNlcGFyYXRvclZhbHVlID0gXCJcIjtcbiAgJC5lYWNoKHNlcGFyYXRvcnMsIGZ1bmN0aW9uIChpZHgsIHNlcGFyYXRvcikge1xuICAgIHZhciBsZW5ndGggPSBzdHJpbmcuc3BsaXQoc2VwYXJhdG9yKS5sZW5ndGg7XG4gICAgaWYgKGxlbmd0aCA+IG1heFNlcGFyYXRvckxlbmd0aCkge1xuICAgICAgbWF4U2VwYXJhdG9yTGVuZ3RoID0gbGVuZ3RoO1xuICAgICAgbWF4U2VwYXJhdG9yVmFsdWUgPSBzZXBhcmF0b3I7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIG1heFNlcGFyYXRvclZhbHVlO1xufTtcblxuQ1NWLnByb3RvdHlwZS5ieXRlc1RvU3RyaW5nID0gZnVuY3Rpb24gKGIpIHtcbiAgdmFyIHMgPSBbXTtcbiAgJC5lYWNoKGIsIGZ1bmN0aW9uIChpZHgsIGMpIHtcbiAgICBzLnB1c2goU3RyaW5nLmZyb21DaGFyQ29kZShjKSk7XG4gIH0pO1xuICByZXR1cm4gcy5qb2luKFwiXCIpO1xufTtcblxuQ1NWLnByb3RvdHlwZS5wcm9jZXNzQ3N2RGF0YSA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gIHZhciBuZXdMaW5lSWR4ID0gZGF0YS5pbmRleE9mKFwiXFxuXCIpO1xuICB2YXIgZmlyc3RMaW5lID0gJC50cmltKGRhdGEuc3Vic3RyKDAsIG5ld0xpbmVJZHgpKTsgLy9yZW1vdmUgZXh0cmEgd2hpdGVzcGFjZSwgbm90IHN1cmUgaWYgSSBuZWVkIHRvIGRvIHRoaXMgc2luY2UgSSB0aHJldyBvdXQgc3BhY2UgZGVsaW1pdGVyc1xuICB2YXIgc2VwYXJhdG9yID0gdGhpcy5nZXRTZXBhcmF0b3IoZmlyc3RMaW5lKTtcbiAgdmFyIGNzdlN0b3JlID0gJC5jc3YudG9PYmplY3RzKGRhdGEpO1xuICB2YXIgZmllbGROYW1lcyA9IGZpcnN0TGluZS5zcGxpdChzZXBhcmF0b3IpO1xuXG4gIHZhciBsYXRGaWVsZCA9IG51bGw7XG4gIHZhciBsb25nRmllbGQgPSBudWxsO1xuXG4gIHZhciBzZWxmID0gdGhpcztcblxuICAvL0ZpbmQgTGF0L0xuZyBjb2x1bW5zXG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBmaWVsZE5hbWVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgdmFyIGZpZWxkTmFtZSA9IGZpZWxkTmFtZXNbaV07XG4gICAgdmFyIG1hdGNoSWQ7XG4gICAgbWF0Y2hJZCA9ICQuaW5BcnJheShmaWVsZE5hbWUudG9Mb3dlckNhc2UoKSwgc2VsZi5sYXRGaWVsZFN0cmluZ3MpO1xuICAgIGlmIChtYXRjaElkICE9PSAtMSkge1xuICAgICAgbGF0RmllbGQgPSBmaWVsZE5hbWU7XG4gICAgfVxuXG4gICAgbWF0Y2hJZCA9ICQuaW5BcnJheShmaWVsZE5hbWUudG9Mb3dlckNhc2UoKSwgc2VsZi5sb25nRmllbGRTdHJpbmdzKTtcbiAgICBpZiAobWF0Y2hJZCAhPT0gLTEpIHtcbiAgICAgIGxvbmdGaWVsZCA9IGZpZWxkTmFtZTtcbiAgICB9XG4gIH1cblxuICAvL0lmIE1pc3NpbmcgTGF0ZmllbGQgb3IgTG9uZ0ZpZWxkLCB0aGVuIGV4aXQuXG4gIGlmICghbGF0RmllbGQpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKCFsb25nRmllbGQpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgb3V0cHV0R2VvSlNPTiA9IHtcbiAgICBcInR5cGVcIjogXCJGZWF0dXJlQ29sbGVjdGlvblwiLFxuICAgIFwiZmVhdHVyZXNcIjogW11cbiAgfTtcblxuICBmb3IgKHZhciBpID0gMCwgbGVuID0gY3N2U3RvcmUubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICB2YXIgcm93ID0gY3N2U3RvcmVbaV07XG4gICAgdmFyIGxhdGl0dWRlID0gcGFyc2VGbG9hdChyb3dbbGF0RmllbGRdKTtcbiAgICB2YXIgbG9uZ2l0dWRlID0gcGFyc2VGbG9hdChyb3dbbG9uZ0ZpZWxkXSk7XG5cbiAgICBpZiAoaXNOYU4obGF0aXR1ZGUpIHx8IGlzTmFOKGxvbmdpdHVkZSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvL2NyZWF0ZSBHZW9KU09OIGZyYWdtZW50XG4gICAgb3V0cHV0R2VvSlNPTi5mZWF0dXJlcy5wdXNoKHtcbiAgICAgIFwidHlwZVwiOiBcIkZlYXR1cmVcIixcbiAgICAgIFwiZ2VvbWV0cnlcIjoge1widHlwZVwiOiBcIlBvaW50XCIsIFwiY29vcmRpbmF0ZXNcIjogW2xvbmdpdHVkZSwgbGF0aXR1ZGVdfSxcbiAgICAgIFwicHJvcGVydGllc1wiOiByb3dcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBvdXRwdXRHZW9KU09OO1xufTtcblxuQ1NWLnByb3RvdHlwZS5lYWNoTGF5ZXIgPSBmdW5jdGlvbiAoY2IpIHtcbiAgdGhpcy5fZWFjaExheWVyQ2FsbGJhY2sgPSBjYjtcbiAgdGhpcy5mZXRjaChmdW5jdGlvbiAoZ2VvanNvbiwgc2VsZikge1xuICAgIHZhciBsYXllcnMgPSBzZWxmLl9nZW9qc29uTGF5ZXIuX2xheWVycztcbiAgICBmb3IgKHZhciBrZXkgaW4gbGF5ZXJzKSB7XG4gICAgICB2YXIgbGF5ZXIgPSBsYXllcnNba2V5XTtcbiAgICAgIGNiKGxheWVyKTtcbiAgICB9XG4gIH0pO1xufTtcblxuLyoqXG4gKlxuICogIEJhc2U2NCBlbmNvZGUgLyBkZWNvZGVcbiAqICBodHRwOi8vd3d3LndlYnRvb2xraXQuaW5mby9cbiAqXG4gKiovXG5DU1YucHJvdG90eXBlLkJhc2U2NCA9IHtcblxuICAvLyBwcml2YXRlIHByb3BlcnR5XG4gIF9rZXlTdHI6IFwiQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLz1cIixcblxuICAvLyBwdWJsaWMgbWV0aG9kIGZvciBlbmNvZGluZ1xuICBlbmNvZGU6IGZ1bmN0aW9uIChpbnB1dCkge1xuICAgIHZhciBvdXRwdXQgPSBcIlwiO1xuICAgIHZhciBjaHIxLCBjaHIyLCBjaHIzLCBlbmMxLCBlbmMyLCBlbmMzLCBlbmM0O1xuICAgIHZhciBpID0gMDtcblxuICAgIGlucHV0ID0gQmFzZTY0Ll91dGY4X2VuY29kZShpbnB1dCk7XG5cbiAgICB3aGlsZSAoaSA8IGlucHV0Lmxlbmd0aCkge1xuXG4gICAgICBjaHIxID0gaW5wdXQuY2hhckNvZGVBdChpKyspO1xuICAgICAgY2hyMiA9IGlucHV0LmNoYXJDb2RlQXQoaSsrKTtcbiAgICAgIGNocjMgPSBpbnB1dC5jaGFyQ29kZUF0KGkrKyk7XG5cbiAgICAgIGVuYzEgPSBjaHIxID4+IDI7XG4gICAgICBlbmMyID0gKChjaHIxICYgMykgPDwgNCkgfCAoY2hyMiA+PiA0KTtcbiAgICAgIGVuYzMgPSAoKGNocjIgJiAxNSkgPDwgMikgfCAoY2hyMyA+PiA2KTtcbiAgICAgIGVuYzQgPSBjaHIzICYgNjM7XG5cbiAgICAgIGlmIChpc05hTihjaHIyKSkge1xuICAgICAgICBlbmMzID0gZW5jNCA9IDY0O1xuICAgICAgfSBlbHNlIGlmIChpc05hTihjaHIzKSkge1xuICAgICAgICBlbmM0ID0gNjQ7XG4gICAgICB9XG5cbiAgICAgIG91dHB1dCA9IG91dHB1dCArXG4gICAgICAgIHRoaXMuX2tleVN0ci5jaGFyQXQoZW5jMSkgKyB0aGlzLl9rZXlTdHIuY2hhckF0KGVuYzIpICtcbiAgICAgICAgdGhpcy5fa2V5U3RyLmNoYXJBdChlbmMzKSArIHRoaXMuX2tleVN0ci5jaGFyQXQoZW5jNCk7XG5cbiAgICB9XG5cbiAgICByZXR1cm4gb3V0cHV0O1xuICB9LFxuXG4gIC8vIHB1YmxpYyBtZXRob2QgZm9yIGRlY29kaW5nXG4gIGRlY29kZTogZnVuY3Rpb24gKGlucHV0KSB7XG4gICAgdmFyIG91dHB1dCA9IFwiXCI7XG4gICAgdmFyIGNocjEsIGNocjIsIGNocjM7XG4gICAgdmFyIGVuYzEsIGVuYzIsIGVuYzMsIGVuYzQ7XG4gICAgdmFyIGkgPSAwO1xuXG4gICAgaW5wdXQgPSBpbnB1dC5yZXBsYWNlKC9bXkEtWmEtejAtOVxcK1xcL1xcPV0vZywgXCJcIik7XG5cbiAgICB3aGlsZSAoaSA8IGlucHV0Lmxlbmd0aCkge1xuXG4gICAgICBlbmMxID0gdGhpcy5fa2V5U3RyLmluZGV4T2YoaW5wdXQuY2hhckF0KGkrKykpO1xuICAgICAgZW5jMiA9IHRoaXMuX2tleVN0ci5pbmRleE9mKGlucHV0LmNoYXJBdChpKyspKTtcbiAgICAgIGVuYzMgPSB0aGlzLl9rZXlTdHIuaW5kZXhPZihpbnB1dC5jaGFyQXQoaSsrKSk7XG4gICAgICBlbmM0ID0gdGhpcy5fa2V5U3RyLmluZGV4T2YoaW5wdXQuY2hhckF0KGkrKykpO1xuXG4gICAgICBjaHIxID0gKGVuYzEgPDwgMikgfCAoZW5jMiA+PiA0KTtcbiAgICAgIGNocjIgPSAoKGVuYzIgJiAxNSkgPDwgNCkgfCAoZW5jMyA+PiAyKTtcbiAgICAgIGNocjMgPSAoKGVuYzMgJiAzKSA8PCA2KSB8IGVuYzQ7XG5cbiAgICAgIG91dHB1dCA9IG91dHB1dCArIFN0cmluZy5mcm9tQ2hhckNvZGUoY2hyMSk7XG5cbiAgICAgIGlmIChlbmMzICE9IDY0KSB7XG4gICAgICAgIG91dHB1dCA9IG91dHB1dCArIFN0cmluZy5mcm9tQ2hhckNvZGUoY2hyMik7XG4gICAgICB9XG4gICAgICBpZiAoZW5jNCAhPSA2NCkge1xuICAgICAgICBvdXRwdXQgPSBvdXRwdXQgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKGNocjMpO1xuICAgICAgfVxuXG4gICAgfVxuXG4gICAgb3V0cHV0ID0gdGhpcy5CYXNlNjQuX3V0ZjhfZGVjb2RlKG91dHB1dCk7XG5cbiAgICByZXR1cm4gb3V0cHV0O1xuXG4gIH0sXG5cbiAgLy8gcHJpdmF0ZSBtZXRob2QgZm9yIFVURi04IGVuY29kaW5nXG4gIF91dGY4X2VuY29kZTogZnVuY3Rpb24gKHN0cmluZykge1xuICAgIHN0cmluZyA9IHN0cmluZy5yZXBsYWNlKC9cXHJcXG4vZywgXCJcXG5cIik7XG4gICAgdmFyIHV0ZnRleHQgPSBcIlwiO1xuXG4gICAgZm9yICh2YXIgbiA9IDA7IG4gPCBzdHJpbmcubGVuZ3RoOyBuKyspIHtcblxuICAgICAgdmFyIGMgPSBzdHJpbmcuY2hhckNvZGVBdChuKTtcblxuICAgICAgaWYgKGMgPCAxMjgpIHtcbiAgICAgICAgdXRmdGV4dCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGMpO1xuICAgICAgfSBlbHNlIGlmICgoYyA+IDEyNykgJiYgKGMgPCAyMDQ4KSkge1xuICAgICAgICB1dGZ0ZXh0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoKGMgPj4gNikgfCAxOTIpO1xuICAgICAgICB1dGZ0ZXh0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoKGMgJiA2MykgfCAxMjgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdXRmdGV4dCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKChjID4+IDEyKSB8IDIyNCk7XG4gICAgICAgIHV0ZnRleHQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSgoKGMgPj4gNikgJiA2MykgfCAxMjgpO1xuICAgICAgICB1dGZ0ZXh0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoKGMgJiA2MykgfCAxMjgpO1xuICAgICAgfVxuXG4gICAgfVxuXG4gICAgcmV0dXJuIHV0ZnRleHQ7XG4gIH0sXG5cbiAgLy8gcHJpdmF0ZSBtZXRob2QgZm9yIFVURi04IGRlY29kaW5nXG4gIF91dGY4X2RlY29kZTogZnVuY3Rpb24gKHV0ZnRleHQpIHtcbiAgICB2YXIgc3RyaW5nID0gXCJcIjtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIGMgPSBjMSA9IGMyID0gMDtcblxuICAgIHdoaWxlIChpIDwgdXRmdGV4dC5sZW5ndGgpIHtcblxuICAgICAgYyA9IHV0ZnRleHQuY2hhckNvZGVBdChpKTtcblxuICAgICAgaWYgKGMgPCAxMjgpIHtcbiAgICAgICAgc3RyaW5nICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYyk7XG4gICAgICAgIGkrKztcbiAgICAgIH0gZWxzZSBpZiAoKGMgPiAxOTEpICYmIChjIDwgMjI0KSkge1xuICAgICAgICBjMiA9IHV0ZnRleHQuY2hhckNvZGVBdChpICsgMSk7XG4gICAgICAgIHN0cmluZyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKCgoYyAmIDMxKSA8PCA2KSB8IChjMiAmIDYzKSk7XG4gICAgICAgIGkgKz0gMjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGMyID0gdXRmdGV4dC5jaGFyQ29kZUF0KGkgKyAxKTtcbiAgICAgICAgYzMgPSB1dGZ0ZXh0LmNoYXJDb2RlQXQoaSArIDIpO1xuICAgICAgICBzdHJpbmcgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSgoKGMgJiAxNSkgPDwgMTIpIHwgKChjMiAmIDYzKSA8PCA2KSB8IChjMyAmIDYzKSk7XG4gICAgICAgIGkgKz0gMztcbiAgICAgIH1cblxuICAgIH1cblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxufTtcbiIsIi8qKlxuICogQ3JlYXRlZCBieSBSeWFuIFdoaXRsZXkgPHJ3aGl0bGV5QHNwYXRpYWxkZXYuY29tPlxuICogICAgICAgb24gMTIvMTUvMTQuXG4gKi9cblxudmFyIFJlc291cmNlID0gcmVxdWlyZSgnLi9yZXNvdXJjZScpO1xudmFyICRyb290U2NvcGUgPSByZXF1aXJlKCcuL3ZlY3RvcicpLiRyb290U2NvcGU7XG52YXIgJGh0dHAgPSByZXF1aXJlKCcuL3ZlY3RvcicpLiRodHRwO1xudmFyIHZlY3RvciA9IHJlcXVpcmUoJy4vdmVjdG9yJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUEJGO1xuXG4vKipcbiAqIEEgUEJGIFJlc291cmNlIGluc3RhbnRpYXRlcyBhIE1WVFNvdXJjZSAoTWFwYm94IFZlY3RvciBUaWxlKVxuICpcbiAqIEBwYXJhbSBjb25maWdcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBQQkYob3B0aW9ucykge1xuICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICB0aGlzLl9vblRpbGVzTG9hZGVkID0gb3B0aW9ucy5vblRpbGVzTG9hZGVkOyAvL1N0b3JlIHRoZSByZWFsIGZ1bmN0aW9uIGluIGEgbG9jYWwgcHJvcGVydHkuXG4gIHRoaXMuX29uQ2xpY2sgPSBvcHRpb25zLm9uQ2xpY2s7IC8vU3RvcmUgdGhlIHJlYWwgZnVuY3Rpb24gaW4gYSBsb2NhbCBwcm9wZXJ0eS5cbiAgdGhpcy5fb25TZWxlY3QgPSBvcHRpb25zLm9uU2VsZWN0OyAgLy9TdG9yZSB0aGUgcmVhbCBmdW5jdGlvbiBpbiBhIGxvY2FsIHByb3BlcnR5IHNvIHdlIGNhbiBvdmVybG9hZCBpdCBsYXRlciB3aXRoIGFuZ3VsYXIgc3R1ZmYuXG4gIHRoaXMuX29uRmlsdGVyID0gb3B0aW9ucy5maWx0ZXI7IC8vU3RvcmUgdGhlIHJlYWwgZnVuY3Rpb24gaW4gYSBsb2NhbCBwcm9wZXJ0eS5cbiAgdGhpcy5fc3R5bGUgPSBvcHRpb25zLnN0eWxlOyAvL1N0b3JlIHRoZSByZWFsIGZ1bmN0aW9uIGluIGEgbG9jYWwgcHJvcGVydHkuXG5cbiAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gIG9wdGlvbnMub25UaWxlc0xvYWRlZCA9IGZ1bmN0aW9uKE1WVFNvdXJjZSl7XG5cbiAgICBpZihzZWxmLl9vblRpbGVzTG9hZGVkKSBzZWxmLl9vblRpbGVzTG9hZGVkKE1WVFNvdXJjZSwgJGh0dHAsICRyb290U2NvcGUpO1xuXG4gIH1cblxuICBvcHRpb25zLm9uQ2xpY2sgPSBmdW5jdGlvbihldnQpe1xuXG4gICAgc2VsZi5fb25DbGljayhldnQsICRodHRwLCAkcm9vdFNjb3BlLCBzZWxmKTtcblxuICB9XG5cbiAgb3B0aW9ucy5vblNlbGVjdCA9IGZ1bmN0aW9uKHZ0Zil7XG5cbiAgICBzZWxmLl9vblNlbGVjdCh2dGYsIHNlbGYpO1xuXG4gIH1cblxuICBvcHRpb25zLmZpbHRlciA9IGZ1bmN0aW9uKHZ0Zil7XG5cbiAgICByZXR1cm4gc2VsZi5fb25GaWx0ZXIodnRmLCAkcm9vdFNjb3BlKTtcblxuICB9XG5cbiAgb3B0aW9ucy5zdHlsZSA9IGZ1bmN0aW9uKHZ0Zil7XG5cbiAgICByZXR1cm4gc2VsZi5fc3R5bGUodnRmLCAkcm9vdFNjb3BlKTtcblxuICB9XG5cbiAgdGhpcy5sYXllciA9IG5ldyBMLlRpbGVMYXllci5NVlRTb3VyY2Uob3B0aW9ucyk7XG59XG5cblBCRi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFJlc291cmNlLnByb3RvdHlwZSk7XG5QQkYucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gUEJGO1xuXG5QQkYucHJvdG90eXBlLmdldExheWVyID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5sYXllcjtcbn07XG5cblBCRi5wcm90b3R5cGUuZmV0Y2hGZWF0dXJlRGV0YWlscyA9IGZ1bmN0aW9uKGd1aWQsIGxldmVsKSB7XG5cblxuICB2YXIgZGV0YWlsc1VybCA9IGNvbmZpZy5jaHViYnNQYXRoKHRoaXMub3B0aW9ucy5kZXRhaWxzVXJsKTtcbiAgaWYgKCFkZXRhaWxzVXJsKSB7XG4gICAgY29uc29sZS5lcnJvcignV2UgbmVlZCBhIGRldGFpbHNVcmwgdG8gZmV0Y2hGZWF0dXJlRGV0YWlscycpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciB0aGVtZSA9ICRyb290U2NvcGUuJHN0YXRlUGFyYW1zLnRoZW1lIHx8ICdwcm9qZWN0JztcbiAgdmFyIHRoZW1lTmFtZSA9ICRyb290U2NvcGUudGhlbWVOYW1lSGFzaFt0aGVtZV07XG4gIGlmICh0eXBlb2YgbGV2ZWwgPT09ICd1bmRlZmluZWQnIHx8IGxldmVsID09PSBudWxsKSB7XG4gICAgY29uc29sZS5lcnJvcignd2UgbmVlZCBhIGxldmVsLicpO1xuICB9XG5cbiAgdmFyIGZpbHRlcnMgPSAnbnVsbCc7XG4gIGlmICgkcm9vdFNjb3BlLiRzdGF0ZVBhcmFtcy5maWx0ZXJzKSB7XG4gICAgZmlsdGVycyA9ICRyb290U2NvcGUuJHN0YXRlUGFyYW1zLmZpbHRlcnM7XG4gIH1cblxuICAvL2ZvciBkaXNhc3RlclR5cGUsIGp1c3QgdXNlIHRoZSBkaXNhc3RlciBlbmRwb2ludFxuICBpZih0aGVtZS50b0xvd2VyQ2FzZSgpID09ICdkaXNhc3RlcnR5cGUnKXtcbiAgICB0aGVtZSA9ICdkaXNhc3Rlcic7XG4gIH1cblxuICBkZXRhaWxzVXJsID0gZGV0YWlsc1VybC5yZXBsYWNlKCc6dGhlbWUnLCB0aGVtZSlcbiAgICAucmVwbGFjZSgnOmd1aWRzJywgZ3VpZClcbiAgICAucmVwbGFjZSgnOmxldmVsJywgbGV2ZWwpXG4gICAgLnJlcGxhY2UoJzpmaWx0ZXJzJywgZmlsdGVycyk7XG5cbiAgJGh0dHAuZ2V0KGRldGFpbHNVcmwsIHtjYWNoZTogdHJ1ZX0pLnN1Y2Nlc3MoZnVuY3Rpb24gKGRldGFpbHMpIHtcbiAgICB2YXIgZmVhdHVyZUxheWVyID0geyBmZWF0dXJlOiB7IHByb3BlcnRpZXM6IHt9fX07XG4gICAgZmVhdHVyZUxheWVyLmZlYXR1cmUucHJvcGVydGllcy5zYWxlc2ZvcmNlID0ge307XG4gICAgZmVhdHVyZUxheWVyLmZlYXR1cmUucHJvcGVydGllcy5zYWxlc2ZvcmNlW3RoZW1lTmFtZV0gPSBkZXRhaWxzO1xuICAgICRyb290U2NvcGUuJGJyb2FkY2FzdCgnZGV0YWlscycsIGZlYXR1cmVMYXllcik7XG5cbiAgfSkuZXJyb3IoZnVuY3Rpb24oZXJyKXtcbiAgICBjb25zb2xlLmVycm9yKEpTT04uc3RyaW5naWZ5KGVycikpO1xuICB9KTtcblxufTtcblxuXG5cblxuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IE5pY2hvbGFzIEhhbGxhaGFuIDxuaGFsbGFoYW5Ac3BhdGlhbGRldi5jb20+XG4gKiAgICAgICBvbiA2LzMvMTQuXG4gKi9cblxudmFyIHJlc291cmNlcyA9IHJlcXVpcmUoJy4vdmVjdG9yJykucmVzb3VyY2VzO1xudmFyICRodHRwID0gcmVxdWlyZSgnLi92ZWN0b3InKS4kaHR0cDtcblxubW9kdWxlLmV4cG9ydHMgPSBSZXNvdXJjZTtcblxuLyoqXG4gKiBBbGwgVmVjdG9yUHJvdmlkZXIgcmVzb3VyY2VzIGFyZSBjaGlsZHJlbiBvZiB0aGlzIGNsYXNzLlxuICogQHBhcmFtIGNvbmZpZ1xuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIFJlc291cmNlKGNvbmZpZykge1xuICByZXNvdXJjZXMucHVzaCh0aGlzKTtcbiAgdGhpcy5fY29uZmlnID0gY29uZmlnO1xuICB0aGlzLl91cmwgPSBudWxsO1xuICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcpIHtcbiAgICB0aGlzLl91cmwgPSBjb25maWcudXJsO1xuICB9IGVsc2Uge1xuICAgIHRoaXMuX3VybCA9IGNvbmZpZztcbiAgfVxuXG4gIHRoaXMuX2VhY2hMYXllckNhbGxiYWNrID0gbnVsbDtcbiAgdGhpcy5fZ2VvanNvbkxheWVyID0gbnVsbDtcbn1cblxuXG4vKipcbiAqIEZldGNoZXMgZGF0YSBmcm9tIHRoZSBnaXZlbiB1cmwgb2YgYSByZXNvdXJjZS5cbiAqIFN1YmNsYXNzZXMgdGhlbiBoYW5kbGUgdGhlIGNhbGxiYWNrIGFjY29yZGluZ2x5LlxuICpcbiAqIE5lZWRzIHRvIGFsc28gdHJ5IHRvIGdldCBhIHJlc291cmNlIHZpYSB0aGUgQ2h1YmJzXG4gKiBwcm94eS5cbiAqXG4gKiBAcGFyYW0gY2JcbiAqL1xuUmVzb3VyY2UucHJvdG90eXBlLmZldGNoID0gZnVuY3Rpb24oY2IpIHtcbiAgdmFyIHByb3h5UGF0aCA9IGNvbmZpZy5wcm94eVBhdGgodGhpcy5fdXJsKTtcbiAgJGh0dHAuZ2V0KHRoaXMuX3VybCwge2NhY2hlOiB0cnVlfSkuc3VjY2VzcyhmdW5jdGlvbiAoZGF0YSwgc3RhdHVzKSB7XG4gICAgY2IoZGF0YSk7XG4gIH0pLmVycm9yKGZ1bmN0aW9uKCkge1xuICAgIC8vIHRyeWluZyBwcm94eVxuICAgICRodHRwLmdldChwcm94eVBhdGgsIHtjYWNoZTogdHJ1ZX0pLnN1Y2Nlc3MoZnVuY3Rpb24gKGRhdGEsIHN0YXR1cykge1xuICAgICAgY2IoZGF0YSk7XG4gICAgfSkuZXJyb3IoZnVuY3Rpb24oKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiVW5hYmxlIHRvIGZldGNoIGZyb206IFwiICsgcHJveHlQYXRoKTtcbiAgICB9KTtcbiAgfSk7XG5cbn07XG5cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBMZWFmbGV0IEdlb0pTT04gTGF5ZXIgYXNzb2NpYXRlZCB3aXRoIHRoZVxuICogUmVzb3VyY2Ugb3IgY3JlYXRlcyBhIG5ldyBvbmUuXG4gKlxuICogQHJldHVybnMge251bGx8Kn1cbiAqL1xuUmVzb3VyY2UucHJvdG90eXBlLmdldExheWVyID0gZnVuY3Rpb24gKCkge1xuICBpZiAodHlwZW9mIHRoaXMuX2dlb2pzb25MYXllciAhPT0gJ3VuZGVmaW5lZCcgJiYgdGhpcy5fZ2VvanNvbkxheWVyICE9PSBudWxsKSB7XG4gICAgcmV0dXJuIHRoaXMuX2dlb2pzb25MYXllcjtcbiAgfVxuXG4gIHRoaXMuX2dlb2pzb25MYXllciA9IEwuZ2VvSnNvbih0aGlzLl9nZW9qc29uIHx8IG51bGwsIHtcbiAgICBzdHlsZTogZnVuY3Rpb24oZmVhdHVyZSkge1xuICAgICAgaWYgKHR5cGVvZiBmZWF0dXJlLnByb3BlcnRpZXMuc3R5bGVGbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gZmVhdHVyZS5wcm9wZXJ0aWVzLnN0eWxlRm4oZmVhdHVyZS5wcm9wZXJ0aWVzKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBMLm1hcGJveC5zaW1wbGVzdHlsZS5zdHlsZShmZWF0dXJlKTtcbiAgICB9LFxuICAgIHBvaW50VG9MYXllcjogZnVuY3Rpb24oZmVhdHVyZSwgbGF0bG9uKSB7XG4gICAgICBpZiAoIWZlYXR1cmUucHJvcGVydGllcykgZmVhdHVyZS5wcm9wZXJ0aWVzID0ge307XG4gICAgICBpZiAoZmVhdHVyZS5wcm9wZXJ0aWVzLnNjYWxlKSB7XG4gICAgICAgIHJldHVybiBMLmNpcmNsZU1hcmtlcihsYXRsb24sIHtcbiAgICAgICAgICBmaWxsQ29sb3I6IGZlYXR1cmUucHJvcGVydGllcy5jb2xvciB8fCAnI0ZGMDAwMCcsXG4gICAgICAgICAgcmFkaXVzOiAyMCAqIGZlYXR1cmUucHJvcGVydGllcy5zY2FsZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBMLm1hcGJveC5tYXJrZXIuc3R5bGUoZmVhdHVyZSwgbGF0bG9uKTtcbiAgICB9XG4gIH0pLmVhY2hMYXllcih0aGlzLl9lYWNoTGF5ZXJDYWxsYmFjayk7XG5cblxuICByZXR1cm4gdGhpcy5fZ2VvanNvbkxheWVyO1xufTtcblxuUmVzb3VyY2UucHJvdG90eXBlLmVhY2hMYXllciA9IGZ1bmN0aW9uIChjYikge1xuICB0aGlzLl9lYWNoTGF5ZXJDYWxsYmFjayA9IGNiO1xuICB0aGlzLl9nZW9qc29uTGF5ZXIuZWFjaExheWVyKGNiKTtcbn07XG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgTmljaG9sYXMgSGFsbGFoYW4gPG5oYWxsYWhhbkBzcGF0aWFsZGV2LmNvbT5cbiAqICAgICAgIG9uIDYvMy8xNC5cbiAqL1xuXG52YXIgdmVjdG9yID0ge307XG5tb2R1bGUuZXhwb3J0cyA9IHZlY3RvcjtcblxudmVjdG9yLnNldEluamVjdG9ycyA9IGZ1bmN0aW9uICgkcm9vdFNjb3BlLCAkbG9jYXRpb24sICRodHRwLCBMYXllckNvbmZpZykge1xuICB2ZWN0b3IuJHJvb3RTY29wZSA9ICRyb290U2NvcGU7XG4gIHZlY3Rvci4kbG9jYXRpb24gPSAkbG9jYXRpb247XG4gIHZlY3Rvci4kaHR0cCA9ICRodHRwO1xuICB2ZWN0b3IuTGF5ZXJDb25maWcgPSBMYXllckNvbmZpZztcbn07XG5cbnZlY3Rvci5hbmd1bGFyID0gYW5ndWxhcjtcbnZlY3Rvci5MID0gTDtcbnZlY3Rvci4kID0gJDtcbnZlY3Rvci50b0dlb0pTT04gPSB0b0dlb0pTT047XG5cblxuLyoqXG4gKiBUaGlzIGlzIHVwZGF0ZWQgYnkgdXBkYXRlQkJveC4gSXQgaXMgdGhlbiB1c2VkIHRvIHF1ZXJ5IGFsbFxuICogVmVjdG9yUHJvdmlkZXJzIHRoYXQgdXNlIGEgYm91bmRpbmcgYm94IHRvIGdldCBhZGRpdGlvbmFsXG4gKiBmZWF0dXJlcy5cbiAqXG4gKiBAdHlwZSB7c3RyaW5nfVxuICovXG52YXIgYmJveCA9IHZlY3Rvci5iYm94ID0gbnVsbDtcblxuLyoqXG4gKiBFdmVyeSByZXNvdXJjZSB0aGF0IGhhcyBiZWVuIGluc3RhbnRpYXRlZC5cbiAqIEB0eXBlIHtBcnJheX1cbiAqL1xudmFyIHJlc291cmNlcyA9IHZlY3Rvci5yZXNvdXJjZXMgPSBbXTtcbmRlYnVnLnJlc291cmNlcyA9IHJlc291cmNlcztcblxuLyoqXG4gKiBFdmVyeSByZXNvdXJjZSB3aXRoIGEgYm91bmRpbmcgYm94IGZldGNoaW5nIG1lY2hhbmlzbS5cbiAqIEB0eXBlIHtBcnJheX1cbiAqL1xudmFyIGJib3hSZXNvdXJjZXMgPSB2ZWN0b3IuYmJveFJlc291cmNlcyA9IFtdO1xuZGVidWcuYmJveFJlc291cmNlcyA9IGJib3hSZXNvdXJjZXM7XG5cbnZhciBiYm94VXJsID0gdmVjdG9yLmJib3hVcmwgPSAnJztcblxudmFyIGNlbnRlckxldmVsID0gdmVjdG9yLmNlbnRlckxldmVsID0gMDtcblxuXG5cbiIsIi8qIVxuICogVGhlIGJ1ZmZlciBtb2R1bGUgZnJvbSBub2RlLmpzLCBmb3IgdGhlIGJyb3dzZXIuXG4gKlxuICogQGF1dGhvciAgIEZlcm9zcyBBYm91a2hhZGlqZWggPGZlcm9zc0BmZXJvc3Mub3JnPiA8aHR0cDovL2Zlcm9zcy5vcmc+XG4gKiBAbGljZW5zZSAgTUlUXG4gKi9cblxudmFyIGJhc2U2NCA9IHJlcXVpcmUoJ2Jhc2U2NC1qcycpXG52YXIgaWVlZTc1NCA9IHJlcXVpcmUoJ2llZWU3NTQnKVxuXG5leHBvcnRzLkJ1ZmZlciA9IEJ1ZmZlclxuZXhwb3J0cy5TbG93QnVmZmVyID0gQnVmZmVyXG5leHBvcnRzLklOU1BFQ1RfTUFYX0JZVEVTID0gNTBcbkJ1ZmZlci5wb29sU2l6ZSA9IDgxOTJcblxuLyoqXG4gKiBJZiBgVFlQRURfQVJSQVlfU1VQUE9SVGA6XG4gKiAgID09PSB0cnVlICAgIFVzZSBVaW50OEFycmF5IGltcGxlbWVudGF0aW9uIChmYXN0ZXN0KVxuICogICA9PT0gZmFsc2UgICBVc2UgT2JqZWN0IGltcGxlbWVudGF0aW9uIChtb3N0IGNvbXBhdGlibGUsIGV2ZW4gSUU2KVxuICpcbiAqIEJyb3dzZXJzIHRoYXQgc3VwcG9ydCB0eXBlZCBhcnJheXMgYXJlIElFIDEwKywgRmlyZWZveCA0KywgQ2hyb21lIDcrLCBTYWZhcmkgNS4xKyxcbiAqIE9wZXJhIDExLjYrLCBpT1MgNC4yKy5cbiAqXG4gKiBOb3RlOlxuICpcbiAqIC0gSW1wbGVtZW50YXRpb24gbXVzdCBzdXBwb3J0IGFkZGluZyBuZXcgcHJvcGVydGllcyB0byBgVWludDhBcnJheWAgaW5zdGFuY2VzLlxuICogICBGaXJlZm94IDQtMjkgbGFja2VkIHN1cHBvcnQsIGZpeGVkIGluIEZpcmVmb3ggMzArLlxuICogICBTZWU6IGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTY5NTQzOC5cbiAqXG4gKiAgLSBDaHJvbWUgOS0xMCBpcyBtaXNzaW5nIHRoZSBgVHlwZWRBcnJheS5wcm90b3R5cGUuc3ViYXJyYXlgIGZ1bmN0aW9uLlxuICpcbiAqICAtIElFMTAgaGFzIGEgYnJva2VuIGBUeXBlZEFycmF5LnByb3RvdHlwZS5zdWJhcnJheWAgZnVuY3Rpb24gd2hpY2ggcmV0dXJucyBhcnJheXMgb2ZcbiAqICAgIGluY29ycmVjdCBsZW5ndGggaW4gc29tZSBzaXR1YXRpb25zLlxuICpcbiAqIFdlIGRldGVjdCB0aGVzZSBidWdneSBicm93c2VycyBhbmQgc2V0IGBUWVBFRF9BUlJBWV9TVVBQT1JUYCB0byBgZmFsc2VgIHNvIHRoZXkgd2lsbFxuICogZ2V0IHRoZSBPYmplY3QgaW1wbGVtZW50YXRpb24sIHdoaWNoIGlzIHNsb3dlciBidXQgd2lsbCB3b3JrIGNvcnJlY3RseS5cbiAqL1xudmFyIFRZUEVEX0FSUkFZX1NVUFBPUlQgPSAoZnVuY3Rpb24gKCkge1xuICB0cnkge1xuICAgIHZhciBidWYgPSBuZXcgQXJyYXlCdWZmZXIoMClcbiAgICB2YXIgYXJyID0gbmV3IFVpbnQ4QXJyYXkoYnVmKVxuICAgIGFyci5mb28gPSBmdW5jdGlvbiAoKSB7IHJldHVybiA0MiB9XG4gICAgcmV0dXJuIDQyID09PSBhcnIuZm9vKCkgJiYgLy8gdHlwZWQgYXJyYXkgaW5zdGFuY2VzIGNhbiBiZSBhdWdtZW50ZWRcbiAgICAgICAgdHlwZW9mIGFyci5zdWJhcnJheSA9PT0gJ2Z1bmN0aW9uJyAmJiAvLyBjaHJvbWUgOS0xMCBsYWNrIGBzdWJhcnJheWBcbiAgICAgICAgbmV3IFVpbnQ4QXJyYXkoMSkuc3ViYXJyYXkoMSwgMSkuYnl0ZUxlbmd0aCA9PT0gMCAvLyBpZTEwIGhhcyBicm9rZW4gYHN1YmFycmF5YFxuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn0pKClcblxuLyoqXG4gKiBDbGFzczogQnVmZmVyXG4gKiA9PT09PT09PT09PT09XG4gKlxuICogVGhlIEJ1ZmZlciBjb25zdHJ1Y3RvciByZXR1cm5zIGluc3RhbmNlcyBvZiBgVWludDhBcnJheWAgdGhhdCBhcmUgYXVnbWVudGVkXG4gKiB3aXRoIGZ1bmN0aW9uIHByb3BlcnRpZXMgZm9yIGFsbCB0aGUgbm9kZSBgQnVmZmVyYCBBUEkgZnVuY3Rpb25zLiBXZSB1c2VcbiAqIGBVaW50OEFycmF5YCBzbyB0aGF0IHNxdWFyZSBicmFja2V0IG5vdGF0aW9uIHdvcmtzIGFzIGV4cGVjdGVkIC0tIGl0IHJldHVybnNcbiAqIGEgc2luZ2xlIG9jdGV0LlxuICpcbiAqIEJ5IGF1Z21lbnRpbmcgdGhlIGluc3RhbmNlcywgd2UgY2FuIGF2b2lkIG1vZGlmeWluZyB0aGUgYFVpbnQ4QXJyYXlgXG4gKiBwcm90b3R5cGUuXG4gKi9cbmZ1bmN0aW9uIEJ1ZmZlciAoc3ViamVjdCwgZW5jb2RpbmcsIG5vWmVybykge1xuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgQnVmZmVyKSlcbiAgICByZXR1cm4gbmV3IEJ1ZmZlcihzdWJqZWN0LCBlbmNvZGluZywgbm9aZXJvKVxuXG4gIHZhciB0eXBlID0gdHlwZW9mIHN1YmplY3RcblxuICAvLyBGaW5kIHRoZSBsZW5ndGhcbiAgdmFyIGxlbmd0aFxuICBpZiAodHlwZSA9PT0gJ251bWJlcicpXG4gICAgbGVuZ3RoID0gc3ViamVjdCA+IDAgPyBzdWJqZWN0ID4+PiAwIDogMFxuICBlbHNlIGlmICh0eXBlID09PSAnc3RyaW5nJykge1xuICAgIGlmIChlbmNvZGluZyA9PT0gJ2Jhc2U2NCcpXG4gICAgICBzdWJqZWN0ID0gYmFzZTY0Y2xlYW4oc3ViamVjdClcbiAgICBsZW5ndGggPSBCdWZmZXIuYnl0ZUxlbmd0aChzdWJqZWN0LCBlbmNvZGluZylcbiAgfSBlbHNlIGlmICh0eXBlID09PSAnb2JqZWN0JyAmJiBzdWJqZWN0ICE9PSBudWxsKSB7IC8vIGFzc3VtZSBvYmplY3QgaXMgYXJyYXktbGlrZVxuICAgIGlmIChzdWJqZWN0LnR5cGUgPT09ICdCdWZmZXInICYmIGlzQXJyYXkoc3ViamVjdC5kYXRhKSlcbiAgICAgIHN1YmplY3QgPSBzdWJqZWN0LmRhdGFcbiAgICBsZW5ndGggPSArc3ViamVjdC5sZW5ndGggPiAwID8gTWF0aC5mbG9vcigrc3ViamVjdC5sZW5ndGgpIDogMFxuICB9IGVsc2VcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZpcnN0IGFyZ3VtZW50IG5lZWRzIHRvIGJlIGEgbnVtYmVyLCBhcnJheSBvciBzdHJpbmcuJylcblxuICB2YXIgYnVmXG4gIGlmIChUWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgLy8gUHJlZmVycmVkOiBSZXR1cm4gYW4gYXVnbWVudGVkIGBVaW50OEFycmF5YCBpbnN0YW5jZSBmb3IgYmVzdCBwZXJmb3JtYW5jZVxuICAgIGJ1ZiA9IEJ1ZmZlci5fYXVnbWVudChuZXcgVWludDhBcnJheShsZW5ndGgpKVxuICB9IGVsc2Uge1xuICAgIC8vIEZhbGxiYWNrOiBSZXR1cm4gVEhJUyBpbnN0YW5jZSBvZiBCdWZmZXIgKGNyZWF0ZWQgYnkgYG5ld2ApXG4gICAgYnVmID0gdGhpc1xuICAgIGJ1Zi5sZW5ndGggPSBsZW5ndGhcbiAgICBidWYuX2lzQnVmZmVyID0gdHJ1ZVxuICB9XG5cbiAgdmFyIGlcbiAgaWYgKFRZUEVEX0FSUkFZX1NVUFBPUlQgJiYgdHlwZW9mIHN1YmplY3QuYnl0ZUxlbmd0aCA9PT0gJ251bWJlcicpIHtcbiAgICAvLyBTcGVlZCBvcHRpbWl6YXRpb24gLS0gdXNlIHNldCBpZiB3ZSdyZSBjb3B5aW5nIGZyb20gYSB0eXBlZCBhcnJheVxuICAgIGJ1Zi5fc2V0KHN1YmplY3QpXG4gIH0gZWxzZSBpZiAoaXNBcnJheWlzaChzdWJqZWN0KSkge1xuICAgIC8vIFRyZWF0IGFycmF5LWlzaCBvYmplY3RzIGFzIGEgYnl0ZSBhcnJheVxuICAgIGlmIChCdWZmZXIuaXNCdWZmZXIoc3ViamVjdCkpIHtcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKylcbiAgICAgICAgYnVmW2ldID0gc3ViamVjdC5yZWFkVUludDgoaSlcbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKVxuICAgICAgICBidWZbaV0gPSAoKHN1YmplY3RbaV0gJSAyNTYpICsgMjU2KSAlIDI1NlxuICAgIH1cbiAgfSBlbHNlIGlmICh0eXBlID09PSAnc3RyaW5nJykge1xuICAgIGJ1Zi53cml0ZShzdWJqZWN0LCAwLCBlbmNvZGluZylcbiAgfSBlbHNlIGlmICh0eXBlID09PSAnbnVtYmVyJyAmJiAhVFlQRURfQVJSQVlfU1VQUE9SVCAmJiAhbm9aZXJvKSB7XG4gICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBidWZbaV0gPSAwXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGJ1ZlxufVxuXG4vLyBTVEFUSUMgTUVUSE9EU1xuLy8gPT09PT09PT09PT09PT1cblxuQnVmZmVyLmlzRW5jb2RpbmcgPSBmdW5jdGlvbiAoZW5jb2RpbmcpIHtcbiAgc3dpdGNoIChTdHJpbmcoZW5jb2RpbmcpLnRvTG93ZXJDYXNlKCkpIHtcbiAgICBjYXNlICdoZXgnOlxuICAgIGNhc2UgJ3V0ZjgnOlxuICAgIGNhc2UgJ3V0Zi04JzpcbiAgICBjYXNlICdhc2NpaSc6XG4gICAgY2FzZSAnYmluYXJ5JzpcbiAgICBjYXNlICdiYXNlNjQnOlxuICAgIGNhc2UgJ3Jhdyc6XG4gICAgY2FzZSAndWNzMic6XG4gICAgY2FzZSAndWNzLTInOlxuICAgIGNhc2UgJ3V0ZjE2bGUnOlxuICAgIGNhc2UgJ3V0Zi0xNmxlJzpcbiAgICAgIHJldHVybiB0cnVlXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbkJ1ZmZlci5pc0J1ZmZlciA9IGZ1bmN0aW9uIChiKSB7XG4gIHJldHVybiAhIShiICE9IG51bGwgJiYgYi5faXNCdWZmZXIpXG59XG5cbkJ1ZmZlci5ieXRlTGVuZ3RoID0gZnVuY3Rpb24gKHN0ciwgZW5jb2RpbmcpIHtcbiAgdmFyIHJldFxuICBzdHIgPSBzdHIudG9TdHJpbmcoKVxuICBzd2l0Y2ggKGVuY29kaW5nIHx8ICd1dGY4Jykge1xuICAgIGNhc2UgJ2hleCc6XG4gICAgICByZXQgPSBzdHIubGVuZ3RoIC8gMlxuICAgICAgYnJlYWtcbiAgICBjYXNlICd1dGY4JzpcbiAgICBjYXNlICd1dGYtOCc6XG4gICAgICByZXQgPSB1dGY4VG9CeXRlcyhzdHIpLmxlbmd0aFxuICAgICAgYnJlYWtcbiAgICBjYXNlICdhc2NpaSc6XG4gICAgY2FzZSAnYmluYXJ5JzpcbiAgICBjYXNlICdyYXcnOlxuICAgICAgcmV0ID0gc3RyLmxlbmd0aFxuICAgICAgYnJlYWtcbiAgICBjYXNlICdiYXNlNjQnOlxuICAgICAgcmV0ID0gYmFzZTY0VG9CeXRlcyhzdHIpLmxlbmd0aFxuICAgICAgYnJlYWtcbiAgICBjYXNlICd1Y3MyJzpcbiAgICBjYXNlICd1Y3MtMic6XG4gICAgY2FzZSAndXRmMTZsZSc6XG4gICAgY2FzZSAndXRmLTE2bGUnOlxuICAgICAgcmV0ID0gc3RyLmxlbmd0aCAqIDJcbiAgICAgIGJyZWFrXG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBFcnJvcignVW5rbm93biBlbmNvZGluZycpXG4gIH1cbiAgcmV0dXJuIHJldFxufVxuXG5CdWZmZXIuY29uY2F0ID0gZnVuY3Rpb24gKGxpc3QsIHRvdGFsTGVuZ3RoKSB7XG4gIGFzc2VydChpc0FycmF5KGxpc3QpLCAnVXNhZ2U6IEJ1ZmZlci5jb25jYXQobGlzdFssIGxlbmd0aF0pJylcblxuICBpZiAobGlzdC5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gbmV3IEJ1ZmZlcigwKVxuICB9IGVsc2UgaWYgKGxpc3QubGVuZ3RoID09PSAxKSB7XG4gICAgcmV0dXJuIGxpc3RbMF1cbiAgfVxuXG4gIHZhciBpXG4gIGlmICh0b3RhbExlbmd0aCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdG90YWxMZW5ndGggPSAwXG4gICAgZm9yIChpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRvdGFsTGVuZ3RoICs9IGxpc3RbaV0ubGVuZ3RoXG4gICAgfVxuICB9XG5cbiAgdmFyIGJ1ZiA9IG5ldyBCdWZmZXIodG90YWxMZW5ndGgpXG4gIHZhciBwb3MgPSAwXG4gIGZvciAoaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldXG4gICAgaXRlbS5jb3B5KGJ1ZiwgcG9zKVxuICAgIHBvcyArPSBpdGVtLmxlbmd0aFxuICB9XG4gIHJldHVybiBidWZcbn1cblxuQnVmZmVyLmNvbXBhcmUgPSBmdW5jdGlvbiAoYSwgYikge1xuICBhc3NlcnQoQnVmZmVyLmlzQnVmZmVyKGEpICYmIEJ1ZmZlci5pc0J1ZmZlcihiKSwgJ0FyZ3VtZW50cyBtdXN0IGJlIEJ1ZmZlcnMnKVxuICB2YXIgeCA9IGEubGVuZ3RoXG4gIHZhciB5ID0gYi5sZW5ndGhcbiAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IE1hdGgubWluKHgsIHkpOyBpIDwgbGVuICYmIGFbaV0gPT09IGJbaV07IGkrKykge31cbiAgaWYgKGkgIT09IGxlbikge1xuICAgIHggPSBhW2ldXG4gICAgeSA9IGJbaV1cbiAgfVxuICBpZiAoeCA8IHkpIHtcbiAgICByZXR1cm4gLTFcbiAgfVxuICBpZiAoeSA8IHgpIHtcbiAgICByZXR1cm4gMVxuICB9XG4gIHJldHVybiAwXG59XG5cbi8vIEJVRkZFUiBJTlNUQU5DRSBNRVRIT0RTXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PVxuXG5mdW5jdGlvbiBoZXhXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIG9mZnNldCA9IE51bWJlcihvZmZzZXQpIHx8IDBcbiAgdmFyIHJlbWFpbmluZyA9IGJ1Zi5sZW5ndGggLSBvZmZzZXRcbiAgaWYgKCFsZW5ndGgpIHtcbiAgICBsZW5ndGggPSByZW1haW5pbmdcbiAgfSBlbHNlIHtcbiAgICBsZW5ndGggPSBOdW1iZXIobGVuZ3RoKVxuICAgIGlmIChsZW5ndGggPiByZW1haW5pbmcpIHtcbiAgICAgIGxlbmd0aCA9IHJlbWFpbmluZ1xuICAgIH1cbiAgfVxuXG4gIC8vIG11c3QgYmUgYW4gZXZlbiBudW1iZXIgb2YgZGlnaXRzXG4gIHZhciBzdHJMZW4gPSBzdHJpbmcubGVuZ3RoXG4gIGFzc2VydChzdHJMZW4gJSAyID09PSAwLCAnSW52YWxpZCBoZXggc3RyaW5nJylcblxuICBpZiAobGVuZ3RoID4gc3RyTGVuIC8gMikge1xuICAgIGxlbmd0aCA9IHN0ckxlbiAvIDJcbiAgfVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGJ5dGUgPSBwYXJzZUludChzdHJpbmcuc3Vic3RyKGkgKiAyLCAyKSwgMTYpXG4gICAgYXNzZXJ0KCFpc05hTihieXRlKSwgJ0ludmFsaWQgaGV4IHN0cmluZycpXG4gICAgYnVmW29mZnNldCArIGldID0gYnl0ZVxuICB9XG4gIHJldHVybiBpXG59XG5cbmZ1bmN0aW9uIHV0ZjhXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHZhciBjaGFyc1dyaXR0ZW4gPSBibGl0QnVmZmVyKHV0ZjhUb0J5dGVzKHN0cmluZyksIGJ1Ziwgb2Zmc2V0LCBsZW5ndGgpXG4gIHJldHVybiBjaGFyc1dyaXR0ZW5cbn1cblxuZnVuY3Rpb24gYXNjaWlXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHZhciBjaGFyc1dyaXR0ZW4gPSBibGl0QnVmZmVyKGFzY2lpVG9CeXRlcyhzdHJpbmcpLCBidWYsIG9mZnNldCwgbGVuZ3RoKVxuICByZXR1cm4gY2hhcnNXcml0dGVuXG59XG5cbmZ1bmN0aW9uIGJpbmFyeVdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIGFzY2lpV3JpdGUoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxufVxuXG5mdW5jdGlvbiBiYXNlNjRXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHZhciBjaGFyc1dyaXR0ZW4gPSBibGl0QnVmZmVyKGJhc2U2NFRvQnl0ZXMoc3RyaW5nKSwgYnVmLCBvZmZzZXQsIGxlbmd0aClcbiAgcmV0dXJuIGNoYXJzV3JpdHRlblxufVxuXG5mdW5jdGlvbiB1dGYxNmxlV3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICB2YXIgY2hhcnNXcml0dGVuID0gYmxpdEJ1ZmZlcih1dGYxNmxlVG9CeXRlcyhzdHJpbmcpLCBidWYsIG9mZnNldCwgbGVuZ3RoKVxuICByZXR1cm4gY2hhcnNXcml0dGVuXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGUgPSBmdW5jdGlvbiAoc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCwgZW5jb2RpbmcpIHtcbiAgLy8gU3VwcG9ydCBib3RoIChzdHJpbmcsIG9mZnNldCwgbGVuZ3RoLCBlbmNvZGluZylcbiAgLy8gYW5kIHRoZSBsZWdhY3kgKHN0cmluZywgZW5jb2RpbmcsIG9mZnNldCwgbGVuZ3RoKVxuICBpZiAoaXNGaW5pdGUob2Zmc2V0KSkge1xuICAgIGlmICghaXNGaW5pdGUobGVuZ3RoKSkge1xuICAgICAgZW5jb2RpbmcgPSBsZW5ndGhcbiAgICAgIGxlbmd0aCA9IHVuZGVmaW5lZFxuICAgIH1cbiAgfSBlbHNlIHsgIC8vIGxlZ2FjeVxuICAgIHZhciBzd2FwID0gZW5jb2RpbmdcbiAgICBlbmNvZGluZyA9IG9mZnNldFxuICAgIG9mZnNldCA9IGxlbmd0aFxuICAgIGxlbmd0aCA9IHN3YXBcbiAgfVxuXG4gIG9mZnNldCA9IE51bWJlcihvZmZzZXQpIHx8IDBcbiAgdmFyIHJlbWFpbmluZyA9IHRoaXMubGVuZ3RoIC0gb2Zmc2V0XG4gIGlmICghbGVuZ3RoKSB7XG4gICAgbGVuZ3RoID0gcmVtYWluaW5nXG4gIH0gZWxzZSB7XG4gICAgbGVuZ3RoID0gTnVtYmVyKGxlbmd0aClcbiAgICBpZiAobGVuZ3RoID4gcmVtYWluaW5nKSB7XG4gICAgICBsZW5ndGggPSByZW1haW5pbmdcbiAgICB9XG4gIH1cbiAgZW5jb2RpbmcgPSBTdHJpbmcoZW5jb2RpbmcgfHwgJ3V0ZjgnKS50b0xvd2VyQ2FzZSgpXG5cbiAgdmFyIHJldFxuICBzd2l0Y2ggKGVuY29kaW5nKSB7XG4gICAgY2FzZSAnaGV4JzpcbiAgICAgIHJldCA9IGhleFdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ3V0ZjgnOlxuICAgIGNhc2UgJ3V0Zi04JzpcbiAgICAgIHJldCA9IHV0ZjhXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICdhc2NpaSc6XG4gICAgICByZXQgPSBhc2NpaVdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ2JpbmFyeSc6XG4gICAgICByZXQgPSBiaW5hcnlXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICdiYXNlNjQnOlxuICAgICAgcmV0ID0gYmFzZTY0V3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAndWNzMic6XG4gICAgY2FzZSAndWNzLTInOlxuICAgIGNhc2UgJ3V0ZjE2bGUnOlxuICAgIGNhc2UgJ3V0Zi0xNmxlJzpcbiAgICAgIHJldCA9IHV0ZjE2bGVXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuICAgICAgYnJlYWtcbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmtub3duIGVuY29kaW5nJylcbiAgfVxuICByZXR1cm4gcmV0XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoZW5jb2RpbmcsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIHNlbGYgPSB0aGlzXG5cbiAgZW5jb2RpbmcgPSBTdHJpbmcoZW5jb2RpbmcgfHwgJ3V0ZjgnKS50b0xvd2VyQ2FzZSgpXG4gIHN0YXJ0ID0gTnVtYmVyKHN0YXJ0KSB8fCAwXG4gIGVuZCA9IChlbmQgPT09IHVuZGVmaW5lZCkgPyBzZWxmLmxlbmd0aCA6IE51bWJlcihlbmQpXG5cbiAgLy8gRmFzdHBhdGggZW1wdHkgc3RyaW5nc1xuICBpZiAoZW5kID09PSBzdGFydClcbiAgICByZXR1cm4gJydcblxuICB2YXIgcmV0XG4gIHN3aXRjaCAoZW5jb2RpbmcpIHtcbiAgICBjYXNlICdoZXgnOlxuICAgICAgcmV0ID0gaGV4U2xpY2Uoc2VsZiwgc3RhcnQsIGVuZClcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAndXRmOCc6XG4gICAgY2FzZSAndXRmLTgnOlxuICAgICAgcmV0ID0gdXRmOFNsaWNlKHNlbGYsIHN0YXJ0LCBlbmQpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ2FzY2lpJzpcbiAgICAgIHJldCA9IGFzY2lpU2xpY2Uoc2VsZiwgc3RhcnQsIGVuZClcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnYmluYXJ5JzpcbiAgICAgIHJldCA9IGJpbmFyeVNsaWNlKHNlbGYsIHN0YXJ0LCBlbmQpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ2Jhc2U2NCc6XG4gICAgICByZXQgPSBiYXNlNjRTbGljZShzZWxmLCBzdGFydCwgZW5kKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICd1Y3MyJzpcbiAgICBjYXNlICd1Y3MtMic6XG4gICAgY2FzZSAndXRmMTZsZSc6XG4gICAgY2FzZSAndXRmLTE2bGUnOlxuICAgICAgcmV0ID0gdXRmMTZsZVNsaWNlKHNlbGYsIHN0YXJ0LCBlbmQpXG4gICAgICBicmVha1xuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Vua25vd24gZW5jb2RpbmcnKVxuICB9XG4gIHJldHVybiByZXRcbn1cblxuQnVmZmVyLnByb3RvdHlwZS50b0pTT04gPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogJ0J1ZmZlcicsXG4gICAgZGF0YTogQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwodGhpcy5fYXJyIHx8IHRoaXMsIDApXG4gIH1cbn1cblxuQnVmZmVyLnByb3RvdHlwZS5lcXVhbHMgPSBmdW5jdGlvbiAoYikge1xuICBhc3NlcnQoQnVmZmVyLmlzQnVmZmVyKGIpLCAnQXJndW1lbnQgbXVzdCBiZSBhIEJ1ZmZlcicpXG4gIHJldHVybiBCdWZmZXIuY29tcGFyZSh0aGlzLCBiKSA9PT0gMFxufVxuXG5CdWZmZXIucHJvdG90eXBlLmNvbXBhcmUgPSBmdW5jdGlvbiAoYikge1xuICBhc3NlcnQoQnVmZmVyLmlzQnVmZmVyKGIpLCAnQXJndW1lbnQgbXVzdCBiZSBhIEJ1ZmZlcicpXG4gIHJldHVybiBCdWZmZXIuY29tcGFyZSh0aGlzLCBiKVxufVxuXG4vLyBjb3B5KHRhcmdldEJ1ZmZlciwgdGFyZ2V0U3RhcnQ9MCwgc291cmNlU3RhcnQ9MCwgc291cmNlRW5kPWJ1ZmZlci5sZW5ndGgpXG5CdWZmZXIucHJvdG90eXBlLmNvcHkgPSBmdW5jdGlvbiAodGFyZ2V0LCB0YXJnZXRfc3RhcnQsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIHNvdXJjZSA9IHRoaXNcblxuICBpZiAoIXN0YXJ0KSBzdGFydCA9IDBcbiAgaWYgKCFlbmQgJiYgZW5kICE9PSAwKSBlbmQgPSB0aGlzLmxlbmd0aFxuICBpZiAoIXRhcmdldF9zdGFydCkgdGFyZ2V0X3N0YXJ0ID0gMFxuXG4gIC8vIENvcHkgMCBieXRlczsgd2UncmUgZG9uZVxuICBpZiAoZW5kID09PSBzdGFydCkgcmV0dXJuXG4gIGlmICh0YXJnZXQubGVuZ3RoID09PSAwIHx8IHNvdXJjZS5sZW5ndGggPT09IDApIHJldHVyblxuXG4gIC8vIEZhdGFsIGVycm9yIGNvbmRpdGlvbnNcbiAgYXNzZXJ0KGVuZCA+PSBzdGFydCwgJ3NvdXJjZUVuZCA8IHNvdXJjZVN0YXJ0JylcbiAgYXNzZXJ0KHRhcmdldF9zdGFydCA+PSAwICYmIHRhcmdldF9zdGFydCA8IHRhcmdldC5sZW5ndGgsXG4gICAgICAndGFyZ2V0U3RhcnQgb3V0IG9mIGJvdW5kcycpXG4gIGFzc2VydChzdGFydCA+PSAwICYmIHN0YXJ0IDwgc291cmNlLmxlbmd0aCwgJ3NvdXJjZVN0YXJ0IG91dCBvZiBib3VuZHMnKVxuICBhc3NlcnQoZW5kID49IDAgJiYgZW5kIDw9IHNvdXJjZS5sZW5ndGgsICdzb3VyY2VFbmQgb3V0IG9mIGJvdW5kcycpXG5cbiAgLy8gQXJlIHdlIG9vYj9cbiAgaWYgKGVuZCA+IHRoaXMubGVuZ3RoKVxuICAgIGVuZCA9IHRoaXMubGVuZ3RoXG4gIGlmICh0YXJnZXQubGVuZ3RoIC0gdGFyZ2V0X3N0YXJ0IDwgZW5kIC0gc3RhcnQpXG4gICAgZW5kID0gdGFyZ2V0Lmxlbmd0aCAtIHRhcmdldF9zdGFydCArIHN0YXJ0XG5cbiAgdmFyIGxlbiA9IGVuZCAtIHN0YXJ0XG5cbiAgaWYgKGxlbiA8IDEwMCB8fCAhVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIHRhcmdldFtpICsgdGFyZ2V0X3N0YXJ0XSA9IHRoaXNbaSArIHN0YXJ0XVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB0YXJnZXQuX3NldCh0aGlzLnN1YmFycmF5KHN0YXJ0LCBzdGFydCArIGxlbiksIHRhcmdldF9zdGFydClcbiAgfVxufVxuXG5mdW5jdGlvbiBiYXNlNjRTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIGlmIChzdGFydCA9PT0gMCAmJiBlbmQgPT09IGJ1Zi5sZW5ndGgpIHtcbiAgICByZXR1cm4gYmFzZTY0LmZyb21CeXRlQXJyYXkoYnVmKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBiYXNlNjQuZnJvbUJ5dGVBcnJheShidWYuc2xpY2Uoc3RhcnQsIGVuZCkpXG4gIH1cbn1cblxuZnVuY3Rpb24gdXRmOFNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIHJlcyA9ICcnXG4gIHZhciB0bXAgPSAnJ1xuICBlbmQgPSBNYXRoLm1pbihidWYubGVuZ3RoLCBlbmQpXG5cbiAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyBpKyspIHtcbiAgICBpZiAoYnVmW2ldIDw9IDB4N0YpIHtcbiAgICAgIHJlcyArPSBkZWNvZGVVdGY4Q2hhcih0bXApICsgU3RyaW5nLmZyb21DaGFyQ29kZShidWZbaV0pXG4gICAgICB0bXAgPSAnJ1xuICAgIH0gZWxzZSB7XG4gICAgICB0bXAgKz0gJyUnICsgYnVmW2ldLnRvU3RyaW5nKDE2KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXMgKyBkZWNvZGVVdGY4Q2hhcih0bXApXG59XG5cbmZ1bmN0aW9uIGFzY2lpU2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICB2YXIgcmV0ID0gJydcbiAgZW5kID0gTWF0aC5taW4oYnVmLmxlbmd0aCwgZW5kKVxuXG4gIGZvciAodmFyIGkgPSBzdGFydDsgaSA8IGVuZDsgaSsrKSB7XG4gICAgcmV0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYnVmW2ldKVxuICB9XG4gIHJldHVybiByZXRcbn1cblxuZnVuY3Rpb24gYmluYXJ5U2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICByZXR1cm4gYXNjaWlTbGljZShidWYsIHN0YXJ0LCBlbmQpXG59XG5cbmZ1bmN0aW9uIGhleFNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGxlbiA9IGJ1Zi5sZW5ndGhcblxuICBpZiAoIXN0YXJ0IHx8IHN0YXJ0IDwgMCkgc3RhcnQgPSAwXG4gIGlmICghZW5kIHx8IGVuZCA8IDAgfHwgZW5kID4gbGVuKSBlbmQgPSBsZW5cblxuICB2YXIgb3V0ID0gJydcbiAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyBpKyspIHtcbiAgICBvdXQgKz0gdG9IZXgoYnVmW2ldKVxuICB9XG4gIHJldHVybiBvdXRcbn1cblxuZnVuY3Rpb24gdXRmMTZsZVNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGJ5dGVzID0gYnVmLnNsaWNlKHN0YXJ0LCBlbmQpXG4gIHZhciByZXMgPSAnJ1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGJ5dGVzLmxlbmd0aDsgaSArPSAyKSB7XG4gICAgcmVzICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYnl0ZXNbaV0gKyBieXRlc1tpICsgMV0gKiAyNTYpXG4gIH1cbiAgcmV0dXJuIHJlc1xufVxuXG5CdWZmZXIucHJvdG90eXBlLnNsaWNlID0gZnVuY3Rpb24gKHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGxlbiA9IHRoaXMubGVuZ3RoXG4gIHN0YXJ0ID0gfn5zdGFydFxuICBlbmQgPSBlbmQgPT09IHVuZGVmaW5lZCA/IGxlbiA6IH5+ZW5kXG5cbiAgaWYgKHN0YXJ0IDwgMCkge1xuICAgIHN0YXJ0ICs9IGxlbjtcbiAgICBpZiAoc3RhcnQgPCAwKVxuICAgICAgc3RhcnQgPSAwXG4gIH0gZWxzZSBpZiAoc3RhcnQgPiBsZW4pIHtcbiAgICBzdGFydCA9IGxlblxuICB9XG5cbiAgaWYgKGVuZCA8IDApIHtcbiAgICBlbmQgKz0gbGVuXG4gICAgaWYgKGVuZCA8IDApXG4gICAgICBlbmQgPSAwXG4gIH0gZWxzZSBpZiAoZW5kID4gbGVuKSB7XG4gICAgZW5kID0gbGVuXG4gIH1cblxuICBpZiAoZW5kIDwgc3RhcnQpXG4gICAgZW5kID0gc3RhcnRcblxuICBpZiAoVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHJldHVybiBCdWZmZXIuX2F1Z21lbnQodGhpcy5zdWJhcnJheShzdGFydCwgZW5kKSlcbiAgfSBlbHNlIHtcbiAgICB2YXIgc2xpY2VMZW4gPSBlbmQgLSBzdGFydFxuICAgIHZhciBuZXdCdWYgPSBuZXcgQnVmZmVyKHNsaWNlTGVuLCB1bmRlZmluZWQsIHRydWUpXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzbGljZUxlbjsgaSsrKSB7XG4gICAgICBuZXdCdWZbaV0gPSB0aGlzW2kgKyBzdGFydF1cbiAgICB9XG4gICAgcmV0dXJuIG5ld0J1ZlxuICB9XG59XG5cbi8vIGBnZXRgIHdpbGwgYmUgcmVtb3ZlZCBpbiBOb2RlIDAuMTMrXG5CdWZmZXIucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIChvZmZzZXQpIHtcbiAgY29uc29sZS5sb2coJy5nZXQoKSBpcyBkZXByZWNhdGVkLiBBY2Nlc3MgdXNpbmcgYXJyYXkgaW5kZXhlcyBpbnN0ZWFkLicpXG4gIHJldHVybiB0aGlzLnJlYWRVSW50OChvZmZzZXQpXG59XG5cbi8vIGBzZXRgIHdpbGwgYmUgcmVtb3ZlZCBpbiBOb2RlIDAuMTMrXG5CdWZmZXIucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uICh2LCBvZmZzZXQpIHtcbiAgY29uc29sZS5sb2coJy5zZXQoKSBpcyBkZXByZWNhdGVkLiBBY2Nlc3MgdXNpbmcgYXJyYXkgaW5kZXhlcyBpbnN0ZWFkLicpXG4gIHJldHVybiB0aGlzLndyaXRlVUludDgodiwgb2Zmc2V0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50OCA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBhc3NlcnQob2Zmc2V0ICE9PSB1bmRlZmluZWQgJiYgb2Zmc2V0ICE9PSBudWxsLCAnbWlzc2luZyBvZmZzZXQnKVxuICAgIGFzc2VydChvZmZzZXQgPCB0aGlzLmxlbmd0aCwgJ1RyeWluZyB0byByZWFkIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbiAgfVxuXG4gIGlmIChvZmZzZXQgPj0gdGhpcy5sZW5ndGgpXG4gICAgcmV0dXJuXG5cbiAgcmV0dXJuIHRoaXNbb2Zmc2V0XVxufVxuXG5mdW5jdGlvbiByZWFkVUludDE2IChidWYsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgYXNzZXJ0KHR5cGVvZiBsaXR0bGVFbmRpYW4gPT09ICdib29sZWFuJywgJ21pc3Npbmcgb3IgaW52YWxpZCBlbmRpYW4nKVxuICAgIGFzc2VydChvZmZzZXQgIT09IHVuZGVmaW5lZCAmJiBvZmZzZXQgIT09IG51bGwsICdtaXNzaW5nIG9mZnNldCcpXG4gICAgYXNzZXJ0KG9mZnNldCArIDEgPCBidWYubGVuZ3RoLCAnVHJ5aW5nIHRvIHJlYWQgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxuICB9XG5cbiAgdmFyIGxlbiA9IGJ1Zi5sZW5ndGhcbiAgaWYgKG9mZnNldCA+PSBsZW4pXG4gICAgcmV0dXJuXG5cbiAgdmFyIHZhbFxuICBpZiAobGl0dGxlRW5kaWFuKSB7XG4gICAgdmFsID0gYnVmW29mZnNldF1cbiAgICBpZiAob2Zmc2V0ICsgMSA8IGxlbilcbiAgICAgIHZhbCB8PSBidWZbb2Zmc2V0ICsgMV0gPDwgOFxuICB9IGVsc2Uge1xuICAgIHZhbCA9IGJ1ZltvZmZzZXRdIDw8IDhcbiAgICBpZiAob2Zmc2V0ICsgMSA8IGxlbilcbiAgICAgIHZhbCB8PSBidWZbb2Zmc2V0ICsgMV1cbiAgfVxuICByZXR1cm4gdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQxNkxFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIHJlYWRVSW50MTYodGhpcywgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDE2QkUgPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gcmVhZFVJbnQxNih0aGlzLCBvZmZzZXQsIGZhbHNlLCBub0Fzc2VydClcbn1cblxuZnVuY3Rpb24gcmVhZFVJbnQzMiAoYnVmLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGFzc2VydCh0eXBlb2YgbGl0dGxlRW5kaWFuID09PSAnYm9vbGVhbicsICdtaXNzaW5nIG9yIGludmFsaWQgZW5kaWFuJylcbiAgICBhc3NlcnQob2Zmc2V0ICE9PSB1bmRlZmluZWQgJiYgb2Zmc2V0ICE9PSBudWxsLCAnbWlzc2luZyBvZmZzZXQnKVxuICAgIGFzc2VydChvZmZzZXQgKyAzIDwgYnVmLmxlbmd0aCwgJ1RyeWluZyB0byByZWFkIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbiAgfVxuXG4gIHZhciBsZW4gPSBidWYubGVuZ3RoXG4gIGlmIChvZmZzZXQgPj0gbGVuKVxuICAgIHJldHVyblxuXG4gIHZhciB2YWxcbiAgaWYgKGxpdHRsZUVuZGlhbikge1xuICAgIGlmIChvZmZzZXQgKyAyIDwgbGVuKVxuICAgICAgdmFsID0gYnVmW29mZnNldCArIDJdIDw8IDE2XG4gICAgaWYgKG9mZnNldCArIDEgPCBsZW4pXG4gICAgICB2YWwgfD0gYnVmW29mZnNldCArIDFdIDw8IDhcbiAgICB2YWwgfD0gYnVmW29mZnNldF1cbiAgICBpZiAob2Zmc2V0ICsgMyA8IGxlbilcbiAgICAgIHZhbCA9IHZhbCArIChidWZbb2Zmc2V0ICsgM10gPDwgMjQgPj4+IDApXG4gIH0gZWxzZSB7XG4gICAgaWYgKG9mZnNldCArIDEgPCBsZW4pXG4gICAgICB2YWwgPSBidWZbb2Zmc2V0ICsgMV0gPDwgMTZcbiAgICBpZiAob2Zmc2V0ICsgMiA8IGxlbilcbiAgICAgIHZhbCB8PSBidWZbb2Zmc2V0ICsgMl0gPDwgOFxuICAgIGlmIChvZmZzZXQgKyAzIDwgbGVuKVxuICAgICAgdmFsIHw9IGJ1ZltvZmZzZXQgKyAzXVxuICAgIHZhbCA9IHZhbCArIChidWZbb2Zmc2V0XSA8PCAyNCA+Pj4gMClcbiAgfVxuICByZXR1cm4gdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQzMkxFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIHJlYWRVSW50MzIodGhpcywgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDMyQkUgPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gcmVhZFVJbnQzMih0aGlzLCBvZmZzZXQsIGZhbHNlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50OCA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBhc3NlcnQob2Zmc2V0ICE9PSB1bmRlZmluZWQgJiYgb2Zmc2V0ICE9PSBudWxsLFxuICAgICAgICAnbWlzc2luZyBvZmZzZXQnKVxuICAgIGFzc2VydChvZmZzZXQgPCB0aGlzLmxlbmd0aCwgJ1RyeWluZyB0byByZWFkIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbiAgfVxuXG4gIGlmIChvZmZzZXQgPj0gdGhpcy5sZW5ndGgpXG4gICAgcmV0dXJuXG5cbiAgdmFyIG5lZyA9IHRoaXNbb2Zmc2V0XSAmIDB4ODBcbiAgaWYgKG5lZylcbiAgICByZXR1cm4gKDB4ZmYgLSB0aGlzW29mZnNldF0gKyAxKSAqIC0xXG4gIGVsc2VcbiAgICByZXR1cm4gdGhpc1tvZmZzZXRdXG59XG5cbmZ1bmN0aW9uIHJlYWRJbnQxNiAoYnVmLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGFzc2VydCh0eXBlb2YgbGl0dGxlRW5kaWFuID09PSAnYm9vbGVhbicsICdtaXNzaW5nIG9yIGludmFsaWQgZW5kaWFuJylcbiAgICBhc3NlcnQob2Zmc2V0ICE9PSB1bmRlZmluZWQgJiYgb2Zmc2V0ICE9PSBudWxsLCAnbWlzc2luZyBvZmZzZXQnKVxuICAgIGFzc2VydChvZmZzZXQgKyAxIDwgYnVmLmxlbmd0aCwgJ1RyeWluZyB0byByZWFkIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbiAgfVxuXG4gIHZhciBsZW4gPSBidWYubGVuZ3RoXG4gIGlmIChvZmZzZXQgPj0gbGVuKVxuICAgIHJldHVyblxuXG4gIHZhciB2YWwgPSByZWFkVUludDE2KGJ1Ziwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIHRydWUpXG4gIHZhciBuZWcgPSB2YWwgJiAweDgwMDBcbiAgaWYgKG5lZylcbiAgICByZXR1cm4gKDB4ZmZmZiAtIHZhbCArIDEpICogLTFcbiAgZWxzZVxuICAgIHJldHVybiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50MTZMRSA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiByZWFkSW50MTYodGhpcywgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50MTZCRSA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiByZWFkSW50MTYodGhpcywgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbmZ1bmN0aW9uIHJlYWRJbnQzMiAoYnVmLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGFzc2VydCh0eXBlb2YgbGl0dGxlRW5kaWFuID09PSAnYm9vbGVhbicsICdtaXNzaW5nIG9yIGludmFsaWQgZW5kaWFuJylcbiAgICBhc3NlcnQob2Zmc2V0ICE9PSB1bmRlZmluZWQgJiYgb2Zmc2V0ICE9PSBudWxsLCAnbWlzc2luZyBvZmZzZXQnKVxuICAgIGFzc2VydChvZmZzZXQgKyAzIDwgYnVmLmxlbmd0aCwgJ1RyeWluZyB0byByZWFkIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbiAgfVxuXG4gIHZhciBsZW4gPSBidWYubGVuZ3RoXG4gIGlmIChvZmZzZXQgPj0gbGVuKVxuICAgIHJldHVyblxuXG4gIHZhciB2YWwgPSByZWFkVUludDMyKGJ1Ziwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIHRydWUpXG4gIHZhciBuZWcgPSB2YWwgJiAweDgwMDAwMDAwXG4gIGlmIChuZWcpXG4gICAgcmV0dXJuICgweGZmZmZmZmZmIC0gdmFsICsgMSkgKiAtMVxuICBlbHNlXG4gICAgcmV0dXJuIHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQzMkxFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIHJlYWRJbnQzMih0aGlzLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQzMkJFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIHJlYWRJbnQzMih0aGlzLCBvZmZzZXQsIGZhbHNlLCBub0Fzc2VydClcbn1cblxuZnVuY3Rpb24gcmVhZEZsb2F0IChidWYsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgYXNzZXJ0KHR5cGVvZiBsaXR0bGVFbmRpYW4gPT09ICdib29sZWFuJywgJ21pc3Npbmcgb3IgaW52YWxpZCBlbmRpYW4nKVxuICAgIGFzc2VydChvZmZzZXQgKyAzIDwgYnVmLmxlbmd0aCwgJ1RyeWluZyB0byByZWFkIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbiAgfVxuXG4gIHJldHVybiBpZWVlNzU0LnJlYWQoYnVmLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgMjMsIDQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEZsb2F0TEUgPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gcmVhZEZsb2F0KHRoaXMsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEZsb2F0QkUgPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gcmVhZEZsb2F0KHRoaXMsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG5mdW5jdGlvbiByZWFkRG91YmxlIChidWYsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgYXNzZXJ0KHR5cGVvZiBsaXR0bGVFbmRpYW4gPT09ICdib29sZWFuJywgJ21pc3Npbmcgb3IgaW52YWxpZCBlbmRpYW4nKVxuICAgIGFzc2VydChvZmZzZXQgKyA3IDwgYnVmLmxlbmd0aCwgJ1RyeWluZyB0byByZWFkIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbiAgfVxuXG4gIHJldHVybiBpZWVlNzU0LnJlYWQoYnVmLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgNTIsIDgpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZERvdWJsZUxFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIHJlYWREb3VibGUodGhpcywgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkRG91YmxlQkUgPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gcmVhZERvdWJsZSh0aGlzLCBvZmZzZXQsIGZhbHNlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQ4ID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBhc3NlcnQodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCwgJ21pc3NpbmcgdmFsdWUnKVxuICAgIGFzc2VydChvZmZzZXQgIT09IHVuZGVmaW5lZCAmJiBvZmZzZXQgIT09IG51bGwsICdtaXNzaW5nIG9mZnNldCcpXG4gICAgYXNzZXJ0KG9mZnNldCA8IHRoaXMubGVuZ3RoLCAndHJ5aW5nIHRvIHdyaXRlIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbiAgICB2ZXJpZnVpbnQodmFsdWUsIDB4ZmYpXG4gIH1cblxuICBpZiAob2Zmc2V0ID49IHRoaXMubGVuZ3RoKSByZXR1cm5cblxuICB0aGlzW29mZnNldF0gPSB2YWx1ZVxuICByZXR1cm4gb2Zmc2V0ICsgMVxufVxuXG5mdW5jdGlvbiB3cml0ZVVJbnQxNiAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBhc3NlcnQodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCwgJ21pc3NpbmcgdmFsdWUnKVxuICAgIGFzc2VydCh0eXBlb2YgbGl0dGxlRW5kaWFuID09PSAnYm9vbGVhbicsICdtaXNzaW5nIG9yIGludmFsaWQgZW5kaWFuJylcbiAgICBhc3NlcnQob2Zmc2V0ICE9PSB1bmRlZmluZWQgJiYgb2Zmc2V0ICE9PSBudWxsLCAnbWlzc2luZyBvZmZzZXQnKVxuICAgIGFzc2VydChvZmZzZXQgKyAxIDwgYnVmLmxlbmd0aCwgJ3RyeWluZyB0byB3cml0ZSBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG4gICAgdmVyaWZ1aW50KHZhbHVlLCAweGZmZmYpXG4gIH1cblxuICB2YXIgbGVuID0gYnVmLmxlbmd0aFxuICBpZiAob2Zmc2V0ID49IGxlbilcbiAgICByZXR1cm5cblxuICBmb3IgKHZhciBpID0gMCwgaiA9IE1hdGgubWluKGxlbiAtIG9mZnNldCwgMik7IGkgPCBqOyBpKyspIHtcbiAgICBidWZbb2Zmc2V0ICsgaV0gPVxuICAgICAgICAodmFsdWUgJiAoMHhmZiA8PCAoOCAqIChsaXR0bGVFbmRpYW4gPyBpIDogMSAtIGkpKSkpID4+PlxuICAgICAgICAgICAgKGxpdHRsZUVuZGlhbiA/IGkgOiAxIC0gaSkgKiA4XG4gIH1cbiAgcmV0dXJuIG9mZnNldCArIDJcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQxNkxFID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiB3cml0ZVVJbnQxNih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQxNkJFID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiB3cml0ZVVJbnQxNih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbmZ1bmN0aW9uIHdyaXRlVUludDMyIChidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGFzc2VydCh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsLCAnbWlzc2luZyB2YWx1ZScpXG4gICAgYXNzZXJ0KHR5cGVvZiBsaXR0bGVFbmRpYW4gPT09ICdib29sZWFuJywgJ21pc3Npbmcgb3IgaW52YWxpZCBlbmRpYW4nKVxuICAgIGFzc2VydChvZmZzZXQgIT09IHVuZGVmaW5lZCAmJiBvZmZzZXQgIT09IG51bGwsICdtaXNzaW5nIG9mZnNldCcpXG4gICAgYXNzZXJ0KG9mZnNldCArIDMgPCBidWYubGVuZ3RoLCAndHJ5aW5nIHRvIHdyaXRlIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbiAgICB2ZXJpZnVpbnQodmFsdWUsIDB4ZmZmZmZmZmYpXG4gIH1cblxuICB2YXIgbGVuID0gYnVmLmxlbmd0aFxuICBpZiAob2Zmc2V0ID49IGxlbilcbiAgICByZXR1cm5cblxuICBmb3IgKHZhciBpID0gMCwgaiA9IE1hdGgubWluKGxlbiAtIG9mZnNldCwgNCk7IGkgPCBqOyBpKyspIHtcbiAgICBidWZbb2Zmc2V0ICsgaV0gPVxuICAgICAgICAodmFsdWUgPj4+IChsaXR0bGVFbmRpYW4gPyBpIDogMyAtIGkpICogOCkgJiAweGZmXG4gIH1cbiAgcmV0dXJuIG9mZnNldCArIDRcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQzMkxFID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiB3cml0ZVVJbnQzMih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQzMkJFID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiB3cml0ZVVJbnQzMih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQ4ID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBhc3NlcnQodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCwgJ21pc3NpbmcgdmFsdWUnKVxuICAgIGFzc2VydChvZmZzZXQgIT09IHVuZGVmaW5lZCAmJiBvZmZzZXQgIT09IG51bGwsICdtaXNzaW5nIG9mZnNldCcpXG4gICAgYXNzZXJ0KG9mZnNldCA8IHRoaXMubGVuZ3RoLCAnVHJ5aW5nIHRvIHdyaXRlIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbiAgICB2ZXJpZnNpbnQodmFsdWUsIDB4N2YsIC0weDgwKVxuICB9XG5cbiAgaWYgKG9mZnNldCA+PSB0aGlzLmxlbmd0aClcbiAgICByZXR1cm5cblxuICBpZiAodmFsdWUgPj0gMClcbiAgICB0aGlzLndyaXRlVUludDgodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpXG4gIGVsc2VcbiAgICB0aGlzLndyaXRlVUludDgoMHhmZiArIHZhbHVlICsgMSwgb2Zmc2V0LCBub0Fzc2VydClcbiAgcmV0dXJuIG9mZnNldCArIDFcbn1cblxuZnVuY3Rpb24gd3JpdGVJbnQxNiAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBhc3NlcnQodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCwgJ21pc3NpbmcgdmFsdWUnKVxuICAgIGFzc2VydCh0eXBlb2YgbGl0dGxlRW5kaWFuID09PSAnYm9vbGVhbicsICdtaXNzaW5nIG9yIGludmFsaWQgZW5kaWFuJylcbiAgICBhc3NlcnQob2Zmc2V0ICE9PSB1bmRlZmluZWQgJiYgb2Zmc2V0ICE9PSBudWxsLCAnbWlzc2luZyBvZmZzZXQnKVxuICAgIGFzc2VydChvZmZzZXQgKyAxIDwgYnVmLmxlbmd0aCwgJ1RyeWluZyB0byB3cml0ZSBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG4gICAgdmVyaWZzaW50KHZhbHVlLCAweDdmZmYsIC0weDgwMDApXG4gIH1cblxuICB2YXIgbGVuID0gYnVmLmxlbmd0aFxuICBpZiAob2Zmc2V0ID49IGxlbilcbiAgICByZXR1cm5cblxuICBpZiAodmFsdWUgPj0gMClcbiAgICB3cml0ZVVJbnQxNihidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpXG4gIGVsc2VcbiAgICB3cml0ZVVJbnQxNihidWYsIDB4ZmZmZiArIHZhbHVlICsgMSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KVxuICByZXR1cm4gb2Zmc2V0ICsgMlxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50MTZMRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gd3JpdGVJbnQxNih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDE2QkUgPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIHdyaXRlSW50MTYodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG5mdW5jdGlvbiB3cml0ZUludDMyIChidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGFzc2VydCh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsLCAnbWlzc2luZyB2YWx1ZScpXG4gICAgYXNzZXJ0KHR5cGVvZiBsaXR0bGVFbmRpYW4gPT09ICdib29sZWFuJywgJ21pc3Npbmcgb3IgaW52YWxpZCBlbmRpYW4nKVxuICAgIGFzc2VydChvZmZzZXQgIT09IHVuZGVmaW5lZCAmJiBvZmZzZXQgIT09IG51bGwsICdtaXNzaW5nIG9mZnNldCcpXG4gICAgYXNzZXJ0KG9mZnNldCArIDMgPCBidWYubGVuZ3RoLCAnVHJ5aW5nIHRvIHdyaXRlIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbiAgICB2ZXJpZnNpbnQodmFsdWUsIDB4N2ZmZmZmZmYsIC0weDgwMDAwMDAwKVxuICB9XG5cbiAgdmFyIGxlbiA9IGJ1Zi5sZW5ndGhcbiAgaWYgKG9mZnNldCA+PSBsZW4pXG4gICAgcmV0dXJuXG5cbiAgaWYgKHZhbHVlID49IDApXG4gICAgd3JpdGVVSW50MzIoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KVxuICBlbHNlXG4gICAgd3JpdGVVSW50MzIoYnVmLCAweGZmZmZmZmZmICsgdmFsdWUgKyAxLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpXG4gIHJldHVybiBvZmZzZXQgKyA0XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQzMkxFID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiB3cml0ZUludDMyKHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50MzJCRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gd3JpdGVJbnQzMih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbmZ1bmN0aW9uIHdyaXRlRmxvYXQgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgYXNzZXJ0KHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwsICdtaXNzaW5nIHZhbHVlJylcbiAgICBhc3NlcnQodHlwZW9mIGxpdHRsZUVuZGlhbiA9PT0gJ2Jvb2xlYW4nLCAnbWlzc2luZyBvciBpbnZhbGlkIGVuZGlhbicpXG4gICAgYXNzZXJ0KG9mZnNldCAhPT0gdW5kZWZpbmVkICYmIG9mZnNldCAhPT0gbnVsbCwgJ21pc3Npbmcgb2Zmc2V0JylcbiAgICBhc3NlcnQob2Zmc2V0ICsgMyA8IGJ1Zi5sZW5ndGgsICdUcnlpbmcgdG8gd3JpdGUgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxuICAgIHZlcmlmSUVFRTc1NCh2YWx1ZSwgMy40MDI4MjM0NjYzODUyODg2ZSszOCwgLTMuNDAyODIzNDY2Mzg1Mjg4NmUrMzgpXG4gIH1cblxuICB2YXIgbGVuID0gYnVmLmxlbmd0aFxuICBpZiAob2Zmc2V0ID49IGxlbilcbiAgICByZXR1cm5cblxuICBpZWVlNzU0LndyaXRlKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCAyMywgNClcbiAgcmV0dXJuIG9mZnNldCArIDRcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUZsb2F0TEUgPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIHdyaXRlRmxvYXQodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVGbG9hdEJFID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiB3cml0ZUZsb2F0KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlLCBub0Fzc2VydClcbn1cblxuZnVuY3Rpb24gd3JpdGVEb3VibGUgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgYXNzZXJ0KHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwsICdtaXNzaW5nIHZhbHVlJylcbiAgICBhc3NlcnQodHlwZW9mIGxpdHRsZUVuZGlhbiA9PT0gJ2Jvb2xlYW4nLCAnbWlzc2luZyBvciBpbnZhbGlkIGVuZGlhbicpXG4gICAgYXNzZXJ0KG9mZnNldCAhPT0gdW5kZWZpbmVkICYmIG9mZnNldCAhPT0gbnVsbCwgJ21pc3Npbmcgb2Zmc2V0JylcbiAgICBhc3NlcnQob2Zmc2V0ICsgNyA8IGJ1Zi5sZW5ndGgsXG4gICAgICAgICdUcnlpbmcgdG8gd3JpdGUgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxuICAgIHZlcmlmSUVFRTc1NCh2YWx1ZSwgMS43OTc2OTMxMzQ4NjIzMTU3RSszMDgsIC0xLjc5NzY5MzEzNDg2MjMxNTdFKzMwOClcbiAgfVxuXG4gIHZhciBsZW4gPSBidWYubGVuZ3RoXG4gIGlmIChvZmZzZXQgPj0gbGVuKVxuICAgIHJldHVyblxuXG4gIGllZWU3NTQud3JpdGUoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIDUyLCA4KVxuICByZXR1cm4gb2Zmc2V0ICsgOFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlRG91YmxlTEUgPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIHdyaXRlRG91YmxlKHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlRG91YmxlQkUgPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIHdyaXRlRG91YmxlKHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlLCBub0Fzc2VydClcbn1cblxuLy8gZmlsbCh2YWx1ZSwgc3RhcnQ9MCwgZW5kPWJ1ZmZlci5sZW5ndGgpXG5CdWZmZXIucHJvdG90eXBlLmZpbGwgPSBmdW5jdGlvbiAodmFsdWUsIHN0YXJ0LCBlbmQpIHtcbiAgaWYgKCF2YWx1ZSkgdmFsdWUgPSAwXG4gIGlmICghc3RhcnQpIHN0YXJ0ID0gMFxuICBpZiAoIWVuZCkgZW5kID0gdGhpcy5sZW5ndGhcblxuICBhc3NlcnQoZW5kID49IHN0YXJ0LCAnZW5kIDwgc3RhcnQnKVxuXG4gIC8vIEZpbGwgMCBieXRlczsgd2UncmUgZG9uZVxuICBpZiAoZW5kID09PSBzdGFydCkgcmV0dXJuXG4gIGlmICh0aGlzLmxlbmd0aCA9PT0gMCkgcmV0dXJuXG5cbiAgYXNzZXJ0KHN0YXJ0ID49IDAgJiYgc3RhcnQgPCB0aGlzLmxlbmd0aCwgJ3N0YXJ0IG91dCBvZiBib3VuZHMnKVxuICBhc3NlcnQoZW5kID49IDAgJiYgZW5kIDw9IHRoaXMubGVuZ3RoLCAnZW5kIG91dCBvZiBib3VuZHMnKVxuXG4gIHZhciBpXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgZm9yIChpID0gc3RhcnQ7IGkgPCBlbmQ7IGkrKykge1xuICAgICAgdGhpc1tpXSA9IHZhbHVlXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHZhciBieXRlcyA9IHV0ZjhUb0J5dGVzKHZhbHVlLnRvU3RyaW5nKCkpXG4gICAgdmFyIGxlbiA9IGJ5dGVzLmxlbmd0aFxuICAgIGZvciAoaSA9IHN0YXJ0OyBpIDwgZW5kOyBpKyspIHtcbiAgICAgIHRoaXNbaV0gPSBieXRlc1tpICUgbGVuXVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0aGlzXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuaW5zcGVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIG91dCA9IFtdXG4gIHZhciBsZW4gPSB0aGlzLmxlbmd0aFxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgb3V0W2ldID0gdG9IZXgodGhpc1tpXSlcbiAgICBpZiAoaSA9PT0gZXhwb3J0cy5JTlNQRUNUX01BWF9CWVRFUykge1xuICAgICAgb3V0W2kgKyAxXSA9ICcuLi4nXG4gICAgICBicmVha1xuICAgIH1cbiAgfVxuICByZXR1cm4gJzxCdWZmZXIgJyArIG91dC5qb2luKCcgJykgKyAnPidcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IGBBcnJheUJ1ZmZlcmAgd2l0aCB0aGUgKmNvcGllZCogbWVtb3J5IG9mIHRoZSBidWZmZXIgaW5zdGFuY2UuXG4gKiBBZGRlZCBpbiBOb2RlIDAuMTIuIE9ubHkgYXZhaWxhYmxlIGluIGJyb3dzZXJzIHRoYXQgc3VwcG9ydCBBcnJheUJ1ZmZlci5cbiAqL1xuQnVmZmVyLnByb3RvdHlwZS50b0FycmF5QnVmZmVyID0gZnVuY3Rpb24gKCkge1xuICBpZiAodHlwZW9mIFVpbnQ4QXJyYXkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgaWYgKFRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICAgIHJldHVybiAobmV3IEJ1ZmZlcih0aGlzKSkuYnVmZmVyXG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBidWYgPSBuZXcgVWludDhBcnJheSh0aGlzLmxlbmd0aClcbiAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBidWYubGVuZ3RoOyBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICAgICAgYnVmW2ldID0gdGhpc1tpXVxuICAgICAgfVxuICAgICAgcmV0dXJuIGJ1Zi5idWZmZXJcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdCdWZmZXIudG9BcnJheUJ1ZmZlciBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlcicpXG4gIH1cbn1cblxuLy8gSEVMUEVSIEZVTkNUSU9OU1xuLy8gPT09PT09PT09PT09PT09PVxuXG52YXIgQlAgPSBCdWZmZXIucHJvdG90eXBlXG5cbi8qKlxuICogQXVnbWVudCBhIFVpbnQ4QXJyYXkgKmluc3RhbmNlKiAobm90IHRoZSBVaW50OEFycmF5IGNsYXNzISkgd2l0aCBCdWZmZXIgbWV0aG9kc1xuICovXG5CdWZmZXIuX2F1Z21lbnQgPSBmdW5jdGlvbiAoYXJyKSB7XG4gIGFyci5faXNCdWZmZXIgPSB0cnVlXG5cbiAgLy8gc2F2ZSByZWZlcmVuY2UgdG8gb3JpZ2luYWwgVWludDhBcnJheSBnZXQvc2V0IG1ldGhvZHMgYmVmb3JlIG92ZXJ3cml0aW5nXG4gIGFyci5fZ2V0ID0gYXJyLmdldFxuICBhcnIuX3NldCA9IGFyci5zZXRcblxuICAvLyBkZXByZWNhdGVkLCB3aWxsIGJlIHJlbW92ZWQgaW4gbm9kZSAwLjEzK1xuICBhcnIuZ2V0ID0gQlAuZ2V0XG4gIGFyci5zZXQgPSBCUC5zZXRcblxuICBhcnIud3JpdGUgPSBCUC53cml0ZVxuICBhcnIudG9TdHJpbmcgPSBCUC50b1N0cmluZ1xuICBhcnIudG9Mb2NhbGVTdHJpbmcgPSBCUC50b1N0cmluZ1xuICBhcnIudG9KU09OID0gQlAudG9KU09OXG4gIGFyci5lcXVhbHMgPSBCUC5lcXVhbHNcbiAgYXJyLmNvbXBhcmUgPSBCUC5jb21wYXJlXG4gIGFyci5jb3B5ID0gQlAuY29weVxuICBhcnIuc2xpY2UgPSBCUC5zbGljZVxuICBhcnIucmVhZFVJbnQ4ID0gQlAucmVhZFVJbnQ4XG4gIGFyci5yZWFkVUludDE2TEUgPSBCUC5yZWFkVUludDE2TEVcbiAgYXJyLnJlYWRVSW50MTZCRSA9IEJQLnJlYWRVSW50MTZCRVxuICBhcnIucmVhZFVJbnQzMkxFID0gQlAucmVhZFVJbnQzMkxFXG4gIGFyci5yZWFkVUludDMyQkUgPSBCUC5yZWFkVUludDMyQkVcbiAgYXJyLnJlYWRJbnQ4ID0gQlAucmVhZEludDhcbiAgYXJyLnJlYWRJbnQxNkxFID0gQlAucmVhZEludDE2TEVcbiAgYXJyLnJlYWRJbnQxNkJFID0gQlAucmVhZEludDE2QkVcbiAgYXJyLnJlYWRJbnQzMkxFID0gQlAucmVhZEludDMyTEVcbiAgYXJyLnJlYWRJbnQzMkJFID0gQlAucmVhZEludDMyQkVcbiAgYXJyLnJlYWRGbG9hdExFID0gQlAucmVhZEZsb2F0TEVcbiAgYXJyLnJlYWRGbG9hdEJFID0gQlAucmVhZEZsb2F0QkVcbiAgYXJyLnJlYWREb3VibGVMRSA9IEJQLnJlYWREb3VibGVMRVxuICBhcnIucmVhZERvdWJsZUJFID0gQlAucmVhZERvdWJsZUJFXG4gIGFyci53cml0ZVVJbnQ4ID0gQlAud3JpdGVVSW50OFxuICBhcnIud3JpdGVVSW50MTZMRSA9IEJQLndyaXRlVUludDE2TEVcbiAgYXJyLndyaXRlVUludDE2QkUgPSBCUC53cml0ZVVJbnQxNkJFXG4gIGFyci53cml0ZVVJbnQzMkxFID0gQlAud3JpdGVVSW50MzJMRVxuICBhcnIud3JpdGVVSW50MzJCRSA9IEJQLndyaXRlVUludDMyQkVcbiAgYXJyLndyaXRlSW50OCA9IEJQLndyaXRlSW50OFxuICBhcnIud3JpdGVJbnQxNkxFID0gQlAud3JpdGVJbnQxNkxFXG4gIGFyci53cml0ZUludDE2QkUgPSBCUC53cml0ZUludDE2QkVcbiAgYXJyLndyaXRlSW50MzJMRSA9IEJQLndyaXRlSW50MzJMRVxuICBhcnIud3JpdGVJbnQzMkJFID0gQlAud3JpdGVJbnQzMkJFXG4gIGFyci53cml0ZUZsb2F0TEUgPSBCUC53cml0ZUZsb2F0TEVcbiAgYXJyLndyaXRlRmxvYXRCRSA9IEJQLndyaXRlRmxvYXRCRVxuICBhcnIud3JpdGVEb3VibGVMRSA9IEJQLndyaXRlRG91YmxlTEVcbiAgYXJyLndyaXRlRG91YmxlQkUgPSBCUC53cml0ZURvdWJsZUJFXG4gIGFyci5maWxsID0gQlAuZmlsbFxuICBhcnIuaW5zcGVjdCA9IEJQLmluc3BlY3RcbiAgYXJyLnRvQXJyYXlCdWZmZXIgPSBCUC50b0FycmF5QnVmZmVyXG5cbiAgcmV0dXJuIGFyclxufVxuXG52YXIgSU5WQUxJRF9CQVNFNjRfUkUgPSAvW14rXFwvMC05QS16XS9nXG5cbmZ1bmN0aW9uIGJhc2U2NGNsZWFuIChzdHIpIHtcbiAgLy8gTm9kZSBzdHJpcHMgb3V0IGludmFsaWQgY2hhcmFjdGVycyBsaWtlIFxcbiBhbmQgXFx0IGZyb20gdGhlIHN0cmluZywgYmFzZTY0LWpzIGRvZXMgbm90XG4gIHN0ciA9IHN0cmluZ3RyaW0oc3RyKS5yZXBsYWNlKElOVkFMSURfQkFTRTY0X1JFLCAnJylcbiAgLy8gTm9kZSBhbGxvd3MgZm9yIG5vbi1wYWRkZWQgYmFzZTY0IHN0cmluZ3MgKG1pc3NpbmcgdHJhaWxpbmcgPT09KSwgYmFzZTY0LWpzIGRvZXMgbm90XG4gIHdoaWxlIChzdHIubGVuZ3RoICUgNCAhPT0gMCkge1xuICAgIHN0ciA9IHN0ciArICc9J1xuICB9XG4gIHJldHVybiBzdHJcbn1cblxuZnVuY3Rpb24gc3RyaW5ndHJpbSAoc3RyKSB7XG4gIGlmIChzdHIudHJpbSkgcmV0dXJuIHN0ci50cmltKClcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nLCAnJylcbn1cblxuZnVuY3Rpb24gaXNBcnJheSAoc3ViamVjdCkge1xuICByZXR1cm4gKEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gKHN1YmplY3QpIHtcbiAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHN1YmplY3QpID09PSAnW29iamVjdCBBcnJheV0nXG4gIH0pKHN1YmplY3QpXG59XG5cbmZ1bmN0aW9uIGlzQXJyYXlpc2ggKHN1YmplY3QpIHtcbiAgcmV0dXJuIGlzQXJyYXkoc3ViamVjdCkgfHwgQnVmZmVyLmlzQnVmZmVyKHN1YmplY3QpIHx8XG4gICAgICBzdWJqZWN0ICYmIHR5cGVvZiBzdWJqZWN0ID09PSAnb2JqZWN0JyAmJlxuICAgICAgdHlwZW9mIHN1YmplY3QubGVuZ3RoID09PSAnbnVtYmVyJ1xufVxuXG5mdW5jdGlvbiB0b0hleCAobikge1xuICBpZiAobiA8IDE2KSByZXR1cm4gJzAnICsgbi50b1N0cmluZygxNilcbiAgcmV0dXJuIG4udG9TdHJpbmcoMTYpXG59XG5cbmZ1bmN0aW9uIHV0ZjhUb0J5dGVzIChzdHIpIHtcbiAgdmFyIGJ5dGVBcnJheSA9IFtdXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGIgPSBzdHIuY2hhckNvZGVBdChpKVxuICAgIGlmIChiIDw9IDB4N0YpIHtcbiAgICAgIGJ5dGVBcnJheS5wdXNoKGIpXG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBzdGFydCA9IGlcbiAgICAgIGlmIChiID49IDB4RDgwMCAmJiBiIDw9IDB4REZGRikgaSsrXG4gICAgICB2YXIgaCA9IGVuY29kZVVSSUNvbXBvbmVudChzdHIuc2xpY2Uoc3RhcnQsIGkrMSkpLnN1YnN0cigxKS5zcGxpdCgnJScpXG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGgubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgYnl0ZUFycmF5LnB1c2gocGFyc2VJbnQoaFtqXSwgMTYpKVxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gYnl0ZUFycmF5XG59XG5cbmZ1bmN0aW9uIGFzY2lpVG9CeXRlcyAoc3RyKSB7XG4gIHZhciBieXRlQXJyYXkgPSBbXVxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xuICAgIC8vIE5vZGUncyBjb2RlIHNlZW1zIHRvIGJlIGRvaW5nIHRoaXMgYW5kIG5vdCAmIDB4N0YuLlxuICAgIGJ5dGVBcnJheS5wdXNoKHN0ci5jaGFyQ29kZUF0KGkpICYgMHhGRilcbiAgfVxuICByZXR1cm4gYnl0ZUFycmF5XG59XG5cbmZ1bmN0aW9uIHV0ZjE2bGVUb0J5dGVzIChzdHIpIHtcbiAgdmFyIGMsIGhpLCBsb1xuICB2YXIgYnl0ZUFycmF5ID0gW11cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcbiAgICBjID0gc3RyLmNoYXJDb2RlQXQoaSlcbiAgICBoaSA9IGMgPj4gOFxuICAgIGxvID0gYyAlIDI1NlxuICAgIGJ5dGVBcnJheS5wdXNoKGxvKVxuICAgIGJ5dGVBcnJheS5wdXNoKGhpKVxuICB9XG5cbiAgcmV0dXJuIGJ5dGVBcnJheVxufVxuXG5mdW5jdGlvbiBiYXNlNjRUb0J5dGVzIChzdHIpIHtcbiAgcmV0dXJuIGJhc2U2NC50b0J5dGVBcnJheShzdHIpXG59XG5cbmZ1bmN0aW9uIGJsaXRCdWZmZXIgKHNyYywgZHN0LCBvZmZzZXQsIGxlbmd0aCkge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKChpICsgb2Zmc2V0ID49IGRzdC5sZW5ndGgpIHx8IChpID49IHNyYy5sZW5ndGgpKVxuICAgICAgYnJlYWtcbiAgICBkc3RbaSArIG9mZnNldF0gPSBzcmNbaV1cbiAgfVxuICByZXR1cm4gaVxufVxuXG5mdW5jdGlvbiBkZWNvZGVVdGY4Q2hhciAoc3RyKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChzdHIpXG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4RkZGRCkgLy8gVVRGIDggaW52YWxpZCBjaGFyXG4gIH1cbn1cblxuLypcbiAqIFdlIGhhdmUgdG8gbWFrZSBzdXJlIHRoYXQgdGhlIHZhbHVlIGlzIGEgdmFsaWQgaW50ZWdlci4gVGhpcyBtZWFucyB0aGF0IGl0XG4gKiBpcyBub24tbmVnYXRpdmUuIEl0IGhhcyBubyBmcmFjdGlvbmFsIGNvbXBvbmVudCBhbmQgdGhhdCBpdCBkb2VzIG5vdFxuICogZXhjZWVkIHRoZSBtYXhpbXVtIGFsbG93ZWQgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIHZlcmlmdWludCAodmFsdWUsIG1heCkge1xuICBhc3NlcnQodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJywgJ2Nhbm5vdCB3cml0ZSBhIG5vbi1udW1iZXIgYXMgYSBudW1iZXInKVxuICBhc3NlcnQodmFsdWUgPj0gMCwgJ3NwZWNpZmllZCBhIG5lZ2F0aXZlIHZhbHVlIGZvciB3cml0aW5nIGFuIHVuc2lnbmVkIHZhbHVlJylcbiAgYXNzZXJ0KHZhbHVlIDw9IG1heCwgJ3ZhbHVlIGlzIGxhcmdlciB0aGFuIG1heGltdW0gdmFsdWUgZm9yIHR5cGUnKVxuICBhc3NlcnQoTWF0aC5mbG9vcih2YWx1ZSkgPT09IHZhbHVlLCAndmFsdWUgaGFzIGEgZnJhY3Rpb25hbCBjb21wb25lbnQnKVxufVxuXG5mdW5jdGlvbiB2ZXJpZnNpbnQgKHZhbHVlLCBtYXgsIG1pbikge1xuICBhc3NlcnQodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJywgJ2Nhbm5vdCB3cml0ZSBhIG5vbi1udW1iZXIgYXMgYSBudW1iZXInKVxuICBhc3NlcnQodmFsdWUgPD0gbWF4LCAndmFsdWUgbGFyZ2VyIHRoYW4gbWF4aW11bSBhbGxvd2VkIHZhbHVlJylcbiAgYXNzZXJ0KHZhbHVlID49IG1pbiwgJ3ZhbHVlIHNtYWxsZXIgdGhhbiBtaW5pbXVtIGFsbG93ZWQgdmFsdWUnKVxuICBhc3NlcnQoTWF0aC5mbG9vcih2YWx1ZSkgPT09IHZhbHVlLCAndmFsdWUgaGFzIGEgZnJhY3Rpb25hbCBjb21wb25lbnQnKVxufVxuXG5mdW5jdGlvbiB2ZXJpZklFRUU3NTQgKHZhbHVlLCBtYXgsIG1pbikge1xuICBhc3NlcnQodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJywgJ2Nhbm5vdCB3cml0ZSBhIG5vbi1udW1iZXIgYXMgYSBudW1iZXInKVxuICBhc3NlcnQodmFsdWUgPD0gbWF4LCAndmFsdWUgbGFyZ2VyIHRoYW4gbWF4aW11bSBhbGxvd2VkIHZhbHVlJylcbiAgYXNzZXJ0KHZhbHVlID49IG1pbiwgJ3ZhbHVlIHNtYWxsZXIgdGhhbiBtaW5pbXVtIGFsbG93ZWQgdmFsdWUnKVxufVxuXG5mdW5jdGlvbiBhc3NlcnQgKHRlc3QsIG1lc3NhZ2UpIHtcbiAgaWYgKCF0ZXN0KSB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSB8fCAnRmFpbGVkIGFzc2VydGlvbicpXG59XG4iLCJ2YXIgbG9va3VwID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky8nO1xuXG47KGZ1bmN0aW9uIChleHBvcnRzKSB7XG5cdCd1c2Ugc3RyaWN0JztcblxuICB2YXIgQXJyID0gKHR5cGVvZiBVaW50OEFycmF5ICE9PSAndW5kZWZpbmVkJylcbiAgICA/IFVpbnQ4QXJyYXlcbiAgICA6IEFycmF5XG5cblx0dmFyIFBMVVMgICA9ICcrJy5jaGFyQ29kZUF0KDApXG5cdHZhciBTTEFTSCAgPSAnLycuY2hhckNvZGVBdCgwKVxuXHR2YXIgTlVNQkVSID0gJzAnLmNoYXJDb2RlQXQoMClcblx0dmFyIExPV0VSICA9ICdhJy5jaGFyQ29kZUF0KDApXG5cdHZhciBVUFBFUiAgPSAnQScuY2hhckNvZGVBdCgwKVxuXG5cdGZ1bmN0aW9uIGRlY29kZSAoZWx0KSB7XG5cdFx0dmFyIGNvZGUgPSBlbHQuY2hhckNvZGVBdCgwKVxuXHRcdGlmIChjb2RlID09PSBQTFVTKVxuXHRcdFx0cmV0dXJuIDYyIC8vICcrJ1xuXHRcdGlmIChjb2RlID09PSBTTEFTSClcblx0XHRcdHJldHVybiA2MyAvLyAnLydcblx0XHRpZiAoY29kZSA8IE5VTUJFUilcblx0XHRcdHJldHVybiAtMSAvL25vIG1hdGNoXG5cdFx0aWYgKGNvZGUgPCBOVU1CRVIgKyAxMClcblx0XHRcdHJldHVybiBjb2RlIC0gTlVNQkVSICsgMjYgKyAyNlxuXHRcdGlmIChjb2RlIDwgVVBQRVIgKyAyNilcblx0XHRcdHJldHVybiBjb2RlIC0gVVBQRVJcblx0XHRpZiAoY29kZSA8IExPV0VSICsgMjYpXG5cdFx0XHRyZXR1cm4gY29kZSAtIExPV0VSICsgMjZcblx0fVxuXG5cdGZ1bmN0aW9uIGI2NFRvQnl0ZUFycmF5IChiNjQpIHtcblx0XHR2YXIgaSwgaiwgbCwgdG1wLCBwbGFjZUhvbGRlcnMsIGFyclxuXG5cdFx0aWYgKGI2NC5sZW5ndGggJSA0ID4gMCkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHN0cmluZy4gTGVuZ3RoIG11c3QgYmUgYSBtdWx0aXBsZSBvZiA0Jylcblx0XHR9XG5cblx0XHQvLyB0aGUgbnVtYmVyIG9mIGVxdWFsIHNpZ25zIChwbGFjZSBob2xkZXJzKVxuXHRcdC8vIGlmIHRoZXJlIGFyZSB0d28gcGxhY2Vob2xkZXJzLCB0aGFuIHRoZSB0d28gY2hhcmFjdGVycyBiZWZvcmUgaXRcblx0XHQvLyByZXByZXNlbnQgb25lIGJ5dGVcblx0XHQvLyBpZiB0aGVyZSBpcyBvbmx5IG9uZSwgdGhlbiB0aGUgdGhyZWUgY2hhcmFjdGVycyBiZWZvcmUgaXQgcmVwcmVzZW50IDIgYnl0ZXNcblx0XHQvLyB0aGlzIGlzIGp1c3QgYSBjaGVhcCBoYWNrIHRvIG5vdCBkbyBpbmRleE9mIHR3aWNlXG5cdFx0dmFyIGxlbiA9IGI2NC5sZW5ndGhcblx0XHRwbGFjZUhvbGRlcnMgPSAnPScgPT09IGI2NC5jaGFyQXQobGVuIC0gMikgPyAyIDogJz0nID09PSBiNjQuY2hhckF0KGxlbiAtIDEpID8gMSA6IDBcblxuXHRcdC8vIGJhc2U2NCBpcyA0LzMgKyB1cCB0byB0d28gY2hhcmFjdGVycyBvZiB0aGUgb3JpZ2luYWwgZGF0YVxuXHRcdGFyciA9IG5ldyBBcnIoYjY0Lmxlbmd0aCAqIDMgLyA0IC0gcGxhY2VIb2xkZXJzKVxuXG5cdFx0Ly8gaWYgdGhlcmUgYXJlIHBsYWNlaG9sZGVycywgb25seSBnZXQgdXAgdG8gdGhlIGxhc3QgY29tcGxldGUgNCBjaGFyc1xuXHRcdGwgPSBwbGFjZUhvbGRlcnMgPiAwID8gYjY0Lmxlbmd0aCAtIDQgOiBiNjQubGVuZ3RoXG5cblx0XHR2YXIgTCA9IDBcblxuXHRcdGZ1bmN0aW9uIHB1c2ggKHYpIHtcblx0XHRcdGFycltMKytdID0gdlxuXHRcdH1cblxuXHRcdGZvciAoaSA9IDAsIGogPSAwOyBpIDwgbDsgaSArPSA0LCBqICs9IDMpIHtcblx0XHRcdHRtcCA9IChkZWNvZGUoYjY0LmNoYXJBdChpKSkgPDwgMTgpIHwgKGRlY29kZShiNjQuY2hhckF0KGkgKyAxKSkgPDwgMTIpIHwgKGRlY29kZShiNjQuY2hhckF0KGkgKyAyKSkgPDwgNikgfCBkZWNvZGUoYjY0LmNoYXJBdChpICsgMykpXG5cdFx0XHRwdXNoKCh0bXAgJiAweEZGMDAwMCkgPj4gMTYpXG5cdFx0XHRwdXNoKCh0bXAgJiAweEZGMDApID4+IDgpXG5cdFx0XHRwdXNoKHRtcCAmIDB4RkYpXG5cdFx0fVxuXG5cdFx0aWYgKHBsYWNlSG9sZGVycyA9PT0gMikge1xuXHRcdFx0dG1wID0gKGRlY29kZShiNjQuY2hhckF0KGkpKSA8PCAyKSB8IChkZWNvZGUoYjY0LmNoYXJBdChpICsgMSkpID4+IDQpXG5cdFx0XHRwdXNoKHRtcCAmIDB4RkYpXG5cdFx0fSBlbHNlIGlmIChwbGFjZUhvbGRlcnMgPT09IDEpIHtcblx0XHRcdHRtcCA9IChkZWNvZGUoYjY0LmNoYXJBdChpKSkgPDwgMTApIHwgKGRlY29kZShiNjQuY2hhckF0KGkgKyAxKSkgPDwgNCkgfCAoZGVjb2RlKGI2NC5jaGFyQXQoaSArIDIpKSA+PiAyKVxuXHRcdFx0cHVzaCgodG1wID4+IDgpICYgMHhGRilcblx0XHRcdHB1c2godG1wICYgMHhGRilcblx0XHR9XG5cblx0XHRyZXR1cm4gYXJyXG5cdH1cblxuXHRmdW5jdGlvbiB1aW50OFRvQmFzZTY0ICh1aW50OCkge1xuXHRcdHZhciBpLFxuXHRcdFx0ZXh0cmFCeXRlcyA9IHVpbnQ4Lmxlbmd0aCAlIDMsIC8vIGlmIHdlIGhhdmUgMSBieXRlIGxlZnQsIHBhZCAyIGJ5dGVzXG5cdFx0XHRvdXRwdXQgPSBcIlwiLFxuXHRcdFx0dGVtcCwgbGVuZ3RoXG5cblx0XHRmdW5jdGlvbiBlbmNvZGUgKG51bSkge1xuXHRcdFx0cmV0dXJuIGxvb2t1cC5jaGFyQXQobnVtKVxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIHRyaXBsZXRUb0Jhc2U2NCAobnVtKSB7XG5cdFx0XHRyZXR1cm4gZW5jb2RlKG51bSA+PiAxOCAmIDB4M0YpICsgZW5jb2RlKG51bSA+PiAxMiAmIDB4M0YpICsgZW5jb2RlKG51bSA+PiA2ICYgMHgzRikgKyBlbmNvZGUobnVtICYgMHgzRilcblx0XHR9XG5cblx0XHQvLyBnbyB0aHJvdWdoIHRoZSBhcnJheSBldmVyeSB0aHJlZSBieXRlcywgd2UnbGwgZGVhbCB3aXRoIHRyYWlsaW5nIHN0dWZmIGxhdGVyXG5cdFx0Zm9yIChpID0gMCwgbGVuZ3RoID0gdWludDgubGVuZ3RoIC0gZXh0cmFCeXRlczsgaSA8IGxlbmd0aDsgaSArPSAzKSB7XG5cdFx0XHR0ZW1wID0gKHVpbnQ4W2ldIDw8IDE2KSArICh1aW50OFtpICsgMV0gPDwgOCkgKyAodWludDhbaSArIDJdKVxuXHRcdFx0b3V0cHV0ICs9IHRyaXBsZXRUb0Jhc2U2NCh0ZW1wKVxuXHRcdH1cblxuXHRcdC8vIHBhZCB0aGUgZW5kIHdpdGggemVyb3MsIGJ1dCBtYWtlIHN1cmUgdG8gbm90IGZvcmdldCB0aGUgZXh0cmEgYnl0ZXNcblx0XHRzd2l0Y2ggKGV4dHJhQnl0ZXMpIHtcblx0XHRcdGNhc2UgMTpcblx0XHRcdFx0dGVtcCA9IHVpbnQ4W3VpbnQ4Lmxlbmd0aCAtIDFdXG5cdFx0XHRcdG91dHB1dCArPSBlbmNvZGUodGVtcCA+PiAyKVxuXHRcdFx0XHRvdXRwdXQgKz0gZW5jb2RlKCh0ZW1wIDw8IDQpICYgMHgzRilcblx0XHRcdFx0b3V0cHV0ICs9ICc9PSdcblx0XHRcdFx0YnJlYWtcblx0XHRcdGNhc2UgMjpcblx0XHRcdFx0dGVtcCA9ICh1aW50OFt1aW50OC5sZW5ndGggLSAyXSA8PCA4KSArICh1aW50OFt1aW50OC5sZW5ndGggLSAxXSlcblx0XHRcdFx0b3V0cHV0ICs9IGVuY29kZSh0ZW1wID4+IDEwKVxuXHRcdFx0XHRvdXRwdXQgKz0gZW5jb2RlKCh0ZW1wID4+IDQpICYgMHgzRilcblx0XHRcdFx0b3V0cHV0ICs9IGVuY29kZSgodGVtcCA8PCAyKSAmIDB4M0YpXG5cdFx0XHRcdG91dHB1dCArPSAnPSdcblx0XHRcdFx0YnJlYWtcblx0XHR9XG5cblx0XHRyZXR1cm4gb3V0cHV0XG5cdH1cblxuXHRleHBvcnRzLnRvQnl0ZUFycmF5ID0gYjY0VG9CeXRlQXJyYXlcblx0ZXhwb3J0cy5mcm9tQnl0ZUFycmF5ID0gdWludDhUb0Jhc2U2NFxufSh0eXBlb2YgZXhwb3J0cyA9PT0gJ3VuZGVmaW5lZCcgPyAodGhpcy5iYXNlNjRqcyA9IHt9KSA6IGV4cG9ydHMpKVxuIiwiZXhwb3J0cy5yZWFkID0gZnVuY3Rpb24oYnVmZmVyLCBvZmZzZXQsIGlzTEUsIG1MZW4sIG5CeXRlcykge1xuICB2YXIgZSwgbSxcbiAgICAgIGVMZW4gPSBuQnl0ZXMgKiA4IC0gbUxlbiAtIDEsXG4gICAgICBlTWF4ID0gKDEgPDwgZUxlbikgLSAxLFxuICAgICAgZUJpYXMgPSBlTWF4ID4+IDEsXG4gICAgICBuQml0cyA9IC03LFxuICAgICAgaSA9IGlzTEUgPyAobkJ5dGVzIC0gMSkgOiAwLFxuICAgICAgZCA9IGlzTEUgPyAtMSA6IDEsXG4gICAgICBzID0gYnVmZmVyW29mZnNldCArIGldO1xuXG4gIGkgKz0gZDtcblxuICBlID0gcyAmICgoMSA8PCAoLW5CaXRzKSkgLSAxKTtcbiAgcyA+Pj0gKC1uQml0cyk7XG4gIG5CaXRzICs9IGVMZW47XG4gIGZvciAoOyBuQml0cyA+IDA7IGUgPSBlICogMjU2ICsgYnVmZmVyW29mZnNldCArIGldLCBpICs9IGQsIG5CaXRzIC09IDgpO1xuXG4gIG0gPSBlICYgKCgxIDw8ICgtbkJpdHMpKSAtIDEpO1xuICBlID4+PSAoLW5CaXRzKTtcbiAgbkJpdHMgKz0gbUxlbjtcbiAgZm9yICg7IG5CaXRzID4gMDsgbSA9IG0gKiAyNTYgKyBidWZmZXJbb2Zmc2V0ICsgaV0sIGkgKz0gZCwgbkJpdHMgLT0gOCk7XG5cbiAgaWYgKGUgPT09IDApIHtcbiAgICBlID0gMSAtIGVCaWFzO1xuICB9IGVsc2UgaWYgKGUgPT09IGVNYXgpIHtcbiAgICByZXR1cm4gbSA/IE5hTiA6ICgocyA/IC0xIDogMSkgKiBJbmZpbml0eSk7XG4gIH0gZWxzZSB7XG4gICAgbSA9IG0gKyBNYXRoLnBvdygyLCBtTGVuKTtcbiAgICBlID0gZSAtIGVCaWFzO1xuICB9XG4gIHJldHVybiAocyA/IC0xIDogMSkgKiBtICogTWF0aC5wb3coMiwgZSAtIG1MZW4pO1xufTtcblxuZXhwb3J0cy53cml0ZSA9IGZ1bmN0aW9uKGJ1ZmZlciwgdmFsdWUsIG9mZnNldCwgaXNMRSwgbUxlbiwgbkJ5dGVzKSB7XG4gIHZhciBlLCBtLCBjLFxuICAgICAgZUxlbiA9IG5CeXRlcyAqIDggLSBtTGVuIC0gMSxcbiAgICAgIGVNYXggPSAoMSA8PCBlTGVuKSAtIDEsXG4gICAgICBlQmlhcyA9IGVNYXggPj4gMSxcbiAgICAgIHJ0ID0gKG1MZW4gPT09IDIzID8gTWF0aC5wb3coMiwgLTI0KSAtIE1hdGgucG93KDIsIC03NykgOiAwKSxcbiAgICAgIGkgPSBpc0xFID8gMCA6IChuQnl0ZXMgLSAxKSxcbiAgICAgIGQgPSBpc0xFID8gMSA6IC0xLFxuICAgICAgcyA9IHZhbHVlIDwgMCB8fCAodmFsdWUgPT09IDAgJiYgMSAvIHZhbHVlIDwgMCkgPyAxIDogMDtcblxuICB2YWx1ZSA9IE1hdGguYWJzKHZhbHVlKTtcblxuICBpZiAoaXNOYU4odmFsdWUpIHx8IHZhbHVlID09PSBJbmZpbml0eSkge1xuICAgIG0gPSBpc05hTih2YWx1ZSkgPyAxIDogMDtcbiAgICBlID0gZU1heDtcbiAgfSBlbHNlIHtcbiAgICBlID0gTWF0aC5mbG9vcihNYXRoLmxvZyh2YWx1ZSkgLyBNYXRoLkxOMik7XG4gICAgaWYgKHZhbHVlICogKGMgPSBNYXRoLnBvdygyLCAtZSkpIDwgMSkge1xuICAgICAgZS0tO1xuICAgICAgYyAqPSAyO1xuICAgIH1cbiAgICBpZiAoZSArIGVCaWFzID49IDEpIHtcbiAgICAgIHZhbHVlICs9IHJ0IC8gYztcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsdWUgKz0gcnQgKiBNYXRoLnBvdygyLCAxIC0gZUJpYXMpO1xuICAgIH1cbiAgICBpZiAodmFsdWUgKiBjID49IDIpIHtcbiAgICAgIGUrKztcbiAgICAgIGMgLz0gMjtcbiAgICB9XG5cbiAgICBpZiAoZSArIGVCaWFzID49IGVNYXgpIHtcbiAgICAgIG0gPSAwO1xuICAgICAgZSA9IGVNYXg7XG4gICAgfSBlbHNlIGlmIChlICsgZUJpYXMgPj0gMSkge1xuICAgICAgbSA9ICh2YWx1ZSAqIGMgLSAxKSAqIE1hdGgucG93KDIsIG1MZW4pO1xuICAgICAgZSA9IGUgKyBlQmlhcztcbiAgICB9IGVsc2Uge1xuICAgICAgbSA9IHZhbHVlICogTWF0aC5wb3coMiwgZUJpYXMgLSAxKSAqIE1hdGgucG93KDIsIG1MZW4pO1xuICAgICAgZSA9IDA7XG4gICAgfVxuICB9XG5cbiAgZm9yICg7IG1MZW4gPj0gODsgYnVmZmVyW29mZnNldCArIGldID0gbSAmIDB4ZmYsIGkgKz0gZCwgbSAvPSAyNTYsIG1MZW4gLT0gOCk7XG5cbiAgZSA9IChlIDw8IG1MZW4pIHwgbTtcbiAgZUxlbiArPSBtTGVuO1xuICBmb3IgKDsgZUxlbiA+IDA7IGJ1ZmZlcltvZmZzZXQgKyBpXSA9IGUgJiAweGZmLCBpICs9IGQsIGUgLz0gMjU2LCBlTGVuIC09IDgpO1xuXG4gIGJ1ZmZlcltvZmZzZXQgKyBpIC0gZF0gfD0gcyAqIDEyODtcbn07XG4iXX0=
