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

  //Note - as of April 12, 2015, this is returning empty images
  landcover: {
    name: 'MODIS Landcover 2011',
    type: 'wms',
    theme: 'project',
    url: 'http://ags.servirlabs.net/arcgis/rest/services/Global/MODIS_Landcover_Type1_2011/MapServer/WMSServer',
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

//Default opacity of GADM polygons
var opacity = "0.5";

var gadm0 = {
  type: 'pbf',
  name: 'GADM0',
  //url: "http://localhost:3000/services/postgis/gadm0/geom_simplify_med/vector-tiles/{z}/{x}/{y}.pbf?fields=guid::character varying,name_0,year&labelpoints=true",
  //url: "http://localhost:3000/services/postgis/gadm0/geom_simplify_med/vector-tiles/{z}/{x}/{y}.pbf?fields=guid::character varying,name_0,year",

  //url: "../services/vector-tiles/gadm0_labels_2014/{z}/{x}/{y}.pbf",
  //url: "https://s3-us-west-2.amazonaws.com/vector-tiles/gadm0/{z}/{x}/{y}.pbf",
  //url: "http://{s}.spatialdevtiles.com/tiles/{z}/{x}/{y}.pbf",
  url: "http://{s}.spatialdevtiles.com/gadm0/{z}/{x}/{y}.pbf",
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
      PBFObject.fetchFeatureDetails(evt.feature.id, 0, evt.feature.properties.name_0);
    }
  },
  onSelect: function(vtf, PBFObject){
    //When a selection has changed (likey when a label was clicked and the corresponding feature selected)
    if(vtf && vtf.id){
      //Do the onclick thing
      PBFObject.fetchFeatureDetails(vtf.id, 0, vtf.properties.name_0);
    }
  },
  legend: function(){

  }
}

var gadm1 = {
  type: 'pbf',
  name: 'GADM1',
  //url: "http://localhost:3000/services/postgis/gadm0/geom_simplify_med/vector-tiles/{z}/{x}/{y}.pbf?fields=guid::character varying,name_0,year&labelpoints=true",
  //url: "http://localhost:3000/services/postgis/gadm0/geom_simplify_med/vector-tiles/{z}/{x}/{y}.pbf?fields=guid::character varying,name_0,year",

  url: "http://{s}.spatialdevtiles.com/gadm1/{z}/{x}/{y}.pbf",
  detailsUrl: 'services/custom/custom_operation?name=get:themebyguid&format=json&guids=:guids&gadm_level=1&filters=:filters',
  debug: false,
  clickableLayers: ["GADM_2014"],

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
      //return true;
    }

    return true;
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
      PBFObject.fetchFeatureDetails(evt.feature.id, 0, evt.feature.properties.name_1 + ", " + evt.feature.properties.name_0);
    }
  },
  onSelect: function(vtf, PBFObject){
    //When a selection has changed (likey when a label was clicked and the corresponding feature selected)
    if(vtf && vtf.id){
      //Do the onclick thing
      PBFObject.fetchFeatureDetails(vtf.id, 0, vtf.properties.name_1 + ", " + vtf.properties.name_0);
    }
  }
}

var gadm2 = {
  type: 'pbf',
  name: 'GADM2',
  //url: "http://localhost:3000/services/postgis/gadm0/geom_simplify_med/vector-tiles/{z}/{x}/{y}.pbf?fields=guid::character varying,name_0,year&labelpoints=true",
  //url: "http://localhost:3000/services/postgis/gadm0/geom_simplify_med/vector-tiles/{z}/{x}/{y}.pbf?fields=guid::character varying,name_0,year",

  url: "http://{s}.spatialdevtiles.com/gadm2/{z}/{x}/{y}.pbf",
  detailsUrl: 'services/custom/custom_operation?name=get:themebyguid&format=json&guids=:guids&gadm_level=2&filters=:filters',
  debug: false,
  clickableLayers: ["GADM_2014"],

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
      //return true;
    }

    return true;
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
      PBFObject.fetchFeatureDetails(evt.feature.id, 0, evt.feature.properties.name_2 + ", " + evt.feature.properties.name_1 + ", " + evt.feature.properties.name_0);
    }
  },
  onSelect: function(vtf, PBFObject){
    //When a selection has changed (likey when a label was clicked and the corresponding feature selected)
    if(vtf && vtf.id){
      //Do the onclick thing
      PBFObject.fetchFeatureDetails(vtf.id, 0, vtf.properties.name_2 + ", " + vtf.properties.name_1 + ", " + vtf.properties.name_0);
    }
  }
}
//var hatchDesign;

function getThemeStyle(vtf, $rootScope){

  var ecos_border_thickness = 1; //px - this is the thickness of boundaries that have ecos data associated
  var ecos_border_color = "rgba(140,140,140,1)";

  var style = {};
  //Default style for all boundaries - make hollow, with a thin outline.
  style.color = 'rgba(0,0,0,0.1)';
  style.outline = {
    color: 'rgba(20,20,20,0.5)',
    size:.5
  };

  var properties = vtf.properties;

  //Skip if we're a regular polygon, and not a label point, and if there is no ECOS properties.
  if(vtf.layer.name.indexOf('label') == -1 && !properties.theme){
    return style;
  }

  var checked;

  //See if we should show theme badges/bubbles or not
  if($stateParams.themelabels !== null && $stateParams.themelabels !== undefined){
    checked = $stateParams.themelabels;
  }
  else{
    //if not present, default to true
    checked = 'true';
  }

  var ecosProperties;

  if (properties.theme == "disaster") {
    ecosProperties = properties["ecos_properties"]["disaster"];

    if (ecosProperties) {
      if (ecosProperties.iroc_status__c) {
        //Keep track of the property name for the sake of legend display
        style.legendLabel = ecosProperties.iroc_status__c;

        switch (ecosProperties.iroc_status__c.toLowerCase()) {
          case "active":
            style.color = 'rgba(204,0,51,' + opacity + ')';
            style.outline = {
              color: ecos_border_color,
              size: ecos_border_thickness
            }
            break;
          case "monitoring":
            style.color = 'rgba(204,153,0,' + opacity + ')';
            style.outline = {
              color: ecos_border_color,
              size: ecos_border_thickness
            }
            break;
          case "inactive":
            style.color = 'rgba(255,255,255,' + opacity + ')';
            style.outline = {
              color: ecos_border_color,
              size: ecos_border_thickness
            }
            break;
        }
      }
    }

  }
  else if (properties.theme == "disasterType") {
    ecosProperties = properties["ecos_properties"]["disasterType"]; //this is an array of disaster types for this area
    if (ecosProperties && ecosProperties.disaster_type__c) {

      //Keep track of the property name for the sake of legend display
      style.legendLabel = ecosProperties.disaster_type__c;

      //Look up the color in the dictionary
      style.color = UNOCHAIconLookup[ecosProperties.disaster_type__c[0]].color;
      //Use the same outline
      style.outline = {
        color: ecos_border_color,
        size: ecos_border_thickness
      }



      if(checked == 'true'){
        //Disaster Type should use OCHA icons
        //But replace the opacity with solid fill for the bubble
        var bubble_fill = style.color.replace("," + opacity + ")", ",1)");
        style.staticLabel = function () {
          var labelStyle = {
            html: (ecosProperties && ecosProperties.disaster_type__c[0] ? buildDisasterTypeLabel(ecosProperties.disaster_type__c[0], bubble_fill, style.outline) : ""),
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
      //Keep track of the property name for the sake of legend display
      style.legendLabel = ecosProperties.overall_assessment__c;

      switch (ecosProperties.overall_assessment__c.toLowerCase()) {
        case "critical":
          style.color = 'rgba(255,0,0,' + opacity + ')';
          style.outline = {
            color: ecos_border_color,
            size: ecos_border_thickness
          }
          break;
        case "high":
          style.color = 'rgba(255,127,0,' + opacity + ')';
          style.outline = {
            color: ecos_border_color,
            size: ecos_border_thickness
          }
          break;
        case "medium":
          style.color = 'rgba(255,255,0,' + opacity + ')';
          style.outline = {
            color: ecos_border_color,
            size: ecos_border_thickness
          }
          break;
        case "low":
          style.color = 'rgba(0,255,0,' + opacity + ')';
          style.outline = {
            color: ecos_border_color,
            size: ecos_border_thickness
          }
          break;
      }
    }
  }
  else if (properties.theme == "projectHealth") {
    ecosProperties = properties["ecos_properties"]["projectHealth"];
    if (ecosProperties && ecosProperties.overall_status__c) {
      //Keep track of the property name for the sake of legend display
      style.legendLabel = ecosProperties.overall_status__c;

      switch (ecosProperties.overall_status__c.toLowerCase()) {
        case "red":
          style.color = 'rgba(255,0,0,' + opacity + ')';
          style.outline = {
            color: ecos_border_color,
            size: ecos_border_thickness
          }
          break;
        case "yellow":
          style.color = 'rgba(255,255,0,' + opacity + ')';
          style.outline = {
            color: ecos_border_color,
            size: ecos_border_thickness
          }
          break;
        case "green":
          style.color = 'rgba(0,255,0,' + opacity + ')';
          style.outline = {
            color: ecos_border_color,
            size: ecos_border_thickness
          }
          break;
        case "white":
          style.color = 'rgba(255,255,255,' + opacity + ')';
          style.outline = {
            color: ecos_border_color,
            size: ecos_border_thickness
          }
          break;
      }
    }
  }
  else if (properties.theme == "project") {
    ecosProperties = properties["ecos_properties"]["project"];

    if (ecosProperties && ecosProperties) {

      //Keep track of the property name for the sake of legend display
      style.legendLabel = "#Projects";

      //for the purposes of showing a legend, keep this gradient handy
      style.gradient = [
        'rgba(255,255,255,' + opacity + ')',
        'rgba(0,255,59,' + opacity + ')'
      ];

      var count =  parseInt(ecosProperties.theme_count);

      if(count == 0) {
        //make hollow
        style.color = 'rgba(0,0,0,' + opacity + ')';
        style.outline = {
          color: ecos_border_color,
          size: ecos_border_thickness
        }
      }
      else if(count > 0 && count <= 2) {
        //make hollow
        style.color = 'rgba(229,255,235,' + opacity + ')';
        style.outline = {
          color: ecos_border_color,
          size: ecos_border_thickness
        }
      }
      else if(count > 2 && count <= 5) {
        //make hollow
        style.color = 'rgba(169,255,189,' + opacity + ')';
        style.outline = {
          color: ecos_border_color,
          size: ecos_border_thickness
        }
      }
      else if(count > 5 && count <= 8) {
        //make hollow
        style.color = 'rgba(169,255,125,' + opacity + ')';
        style.outline = {
          color: ecos_border_color,
          size: ecos_border_thickness
        }
      }
      else if(count > 8 && count <= 10) {
        //make hollow
        style.color = 'rgba(41,255,90,' + opacity + ')';
        style.outline = {
          color: ecos_border_color,
          size: ecos_border_thickness
        }
      }
      else if(count > 10) {
        //make hollow
        style.color = 'rgba(0,255,59,' + opacity + ')';
        style.outline = {
          color: ecos_border_color,
          size: ecos_border_thickness
        }
      }

    }
    else{
      //make hollow
      style.color = 'rgba(0,0,0,' + opacity + ')';
      style.outline = {
        color: ecos_border_color,
        size: ecos_border_thickness
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
    //color: 'rgba(0,255,255,0.1)',
    color: style.color,
    outline : {
      color: 'rgba(0,255,255,1)',
      size: 2
    }
  }

  //Label
  if(checked == 'true') {

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
          color = "rgba(204,0,51,1)";
          labelColor = "#fff";
          break;
        case "monitoring":
          color = "rgba(225,187,37,1)";
          labelColor = "#fff";
          break;
        case "inactive":
          color = "rgba(189,189,189,1)";
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

  "Meteorological - Tropical Cyclone": {icon: "icon-disaster_cyclone", color: "rgba(255,0,0," + opacity + ")"},
  "Floods": {icon: "icon-disaster_flood", color: "rgba(255,0,0," + opacity + ")"},
  "Tsunami, Volcano": {icon: "icon-disaster_tsunami", color: "rgba(255,0,0," + opacity + ")"},
  "Floods, Storm": {icon: "icon-disaster_flood", color: "rgba(255,0,0," + opacity + ")"},
  "Tsunami": {icon: "icon-disaster_tsunami", color: "rgba(255,0,0," + opacity + ")"},
  "Famine / Food Insecurity": {icon: "icon-cluster_food_security", color: "rgba(255,0,0," + opacity + ")"},
  "Drought": {icon: "icon-disaster_drought", color: "rgba(255,0,0," + opacity + ")"},
  "Meteorological - Tropical Cyclone;Hydrological - Floods": {icon: "icon-disaster_cyclone", color: "rgba(255,0,0," + opacity + ")"},
  "Food Insecurity": {icon: "icon-cluster_food_security", color: "rgba(255,0,0," + opacity + ")"},
  "Civil Unrest": {icon: "icon-people_rebel", color: "rgba(255,0,0," + opacity + ")"},
  "Floods, Tropical Storm": {icon: "icon-disaster_flood", color: "rgba(255,0,0," + opacity + ")"},
  "Complex Emergency": {icon: "icon-crisis_conflict", color: "rgba(255,0,0," + opacity + ")"},
  "Epidemic": {icon: "icon-disaster_epidemic", color: "rgba(255,0,0," + opacity + ")"},
  "Population Movement": {icon: "icon-crisis_population_displacement", color: "rgba(255,0,0," + opacity + ")"},
  "Climatological - Drought": {icon: "icon-disaster_drought", color: "rgba(255,0,0," + opacity + ")"},
  "Winter Storm": {icon: "icon-disaster_snowfall", color: "rgba(255,0,0," + opacity + ")"},
  "Tropical Storm": {icon: "icon-disaster_heavy_rain", color: "rgba(255,0,0," + opacity + ")"},
  "Earthquake, Tsunami": {icon: "icon-disaster_earthquake", color: "rgba(255,0,0," + opacity + ")"},
  "Hydrological - Floods": {icon: "icon-disaster_flood", color: "rgba(255,0,0," + opacity + ")"},
  "Landslide;Floods": {icon: "icon-disaster_landslide", color: "rgba(255,0,0," + opacity + ")"},
  "Earthquake": {icon: "icon-disaster_earthquake", color: "rgba(255,0,0," + opacity + ")"},
  "Landslide;Hydrological - Floods": {icon: "icon-disaster_landslide", color: "rgba(255,0,0," + opacity + ")"}

}

function buildDisasterTypeLabel(disasterType, color) {

  var backColor = "";
  var labelColor = "";
  if (disasterType) {

    backColor = color || "rgba(204,0,51,0.4)";
    labelColor = "#fff";

  }

  var icon = UNOCHAIconLookup[disasterType].icon || 'icon-other_cluster_other';

  return '<div class="label-icon-number-100percent"' + (backColor ? ' style="font-family: humanitarian_icons; background-color: ' + backColor + ';color: ' + labelColor + '"' : '') + '><i class="un ' + icon + '"></i></div>';

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
  gadm1 : gadm1,
  gadm2 : gadm2,
  themeLayers: ["gadm0", "gadm1", "gadm2"] //a list of the theme layers - used to determine whether or not one is currently loaded or not.
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
    this.legendObject = {};
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



    //Initialize this tile's feature storage hash, if it hasn't already been created.
    // Used for when filters are updated, and features are cleared to prepare for a fresh redraw.
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
      if (typeof filter === 'function') {
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

        //If style.legendLabel property exists, build a legend object.
        //if(style.legendLabel){
        //  self.legendObject[style.legendLabel] = style;
        //}

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

    //TODO: this is sometimes undefined.
    if (typeof this._tiles[canvasId] === 'undefined') {
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
        this.addLegendStyle(feature);
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
  },

  addLegendStyle: function(feature){
    //Take in a feature, and add in class names and colors based on drawing style

    //If style.legendLabel property exists, build a legend object.
    if(feature.style.legendLabel){
      this.legendObject[feature.style.legendLabel] = feature.style;
    }

    //Store the bubble HTML, if present
    if(feature.staticLabel){
      this.legendObject[feature.style.legendLabel] = feature.staticLabel.icon;
    }
  },

  clearLegendObject: function(){
    this.legendObject = {};
  },

  getLegendObject: function(){
    //Get the legend object for this layer.
    return this.legendObject;
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
  _url: "", //internal URL property

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

    this._url = this.options.url;

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
//    var vectorTile = this.processedTiles[ctx.zoom][ctx.id];
//    //if we've already parsed it, don't get it again.
//    if(vectorTile){
//      console.log("Skipping fetching " + ctx.id);
//      self.checkVectorTileLayers(parseVT(vectorTile), ctx, true);
//      self.reduceTilesToProcessCount();
//      return;
//    }

    if (!this._url) return;
    var src = this.getTileUrl({ x: ctx.tile.x, y: ctx.tile.y, z: ctx.zoom });

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

      //either way, reduce the count of tilesToProcess tiles here
      self.reduceTilesToProcessCount();
    };

    xhr.onerror = function() {
      console.log("xhr error: " + xhr.status)
    };

    xhr.open('GET', src, true); //async is true
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
    .when('/default', '/map@0.1,0.1,2(osmtransport,gadm0),disaster')
    .when('/phl', '/map@11.759815,121.893311,6(redcross,phl),disaster')
    .otherwise(localStorage.getItem('defaultRoute') || '/map@1,1,2(osmtransport,gadm0),disaster');

  $stateProvider
    .state('main', {
      url: '/map@:lat,:lng,:zoom(*layers),:theme?zoom-extent&stories&layers-panel&filters-panel&filters&legend&basemaps&info&title&details-panel&search-panel&sf_id&level&themelabels&category&legend-panel',
      views: {
        'details': {
          template: ' ',
          controller: 'MainCtrl'
        },
        'theme': {
          templateUrl: 'views/theme.html',
          controller: 'ThemeCtrl'
        },
        'blevels':{
          templateUrl: 'views/blevels.html',
          controller: 'LayersCtrl'
        }
      }
    })
    .state('upload', {
      url: '/map@:lat,:lng,:zoom(*layers),:theme/upload?zoom-extent&stories&layers-panel&filters-panel&filters&legend&basemaps&info&title&details-panel&search-panel&sf_id&level&themelabels&category&legend-panel',
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
      url: '/map@:lat,:lng,:zoom(*layers),:theme/export?zoom-extent&stories&layers-panel&filters-panel&filters&legend&basemaps&info&title&details-panel&search-panel&sf_id&level&themelabels&category&legend-panel',
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

      // close param if user selects a country with no data
      var objtitle = Object.keys(properties.salesforce)[0];
      if(properties.salesforce[objtitle].length>=1){
        $scope.openParam('details-panel');
      } else {
        $scope.closeParam('details-panel');
      }

      $scope.createDonuts();
      $scope.dataset = Donuts.dataset;

      //sector legend
      var dc=0; //total sectors
      for(var i=0;i<$scope.dataset.length;i++){
        dc = dc + $scope.dataset[i].count;
      }
      for(var i=0;i<$scope.dataset.length;i++){
        $scope.dataset[i].width = Math.round((277 * ($scope.dataset[i].count/dc))); // percentage of div (250px)
      }
      // Sort sector array by count
      $scope.dataset.sort(function (a, b) {
        return b.width - a.width; // sort by count
      });

      if($scope.dataset.length>0) {
        $scope.datasetTitle = $scope.dataset[0].alias;
        $scope.datasetColor = $scope.dataset[0].color;
        $scope.datasetCount = $scope.dataset[0].count;
      }

      $scope.hideLegend = false;
      // end sector legend

    } else { // standard geojson, show properties as details

      $scope.contextualLayer = (properties.sf_id ? false : true);
      $scope.showDetails(properties);
      $scope.openParam('details-panel');
      $scope.numThemeItems = 1; //non sales force features
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
    $scope.hideLegend = true;

    if (item.sf_id) {
      $rootScope.setParamWithVal('sf_id', item.sf_id);
    }
    if (item.name || item.title) {
      $scope.title = item.name || item.title;
    }

    if (typeof idx === 'number') $scope.activeThemeItemIdx = idx;
    if (themeItems) $scope.activeThemeItemsList = themeItems;

    $scope.itemsList = false;

    $scope.$apply(function(){
      $scope.details = removeUnwantedItems(formatDetails(item, $stateParams.theme), $stateParams.theme);
    });

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
    if ($stateParams.theme.indexOf('disaster')!==-1) {
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
    $scope.hideLegend = false;
  };

  $scope.resizeDetailsPanel = function() {
    var height = $('#MapCtrl').height() - 260; //Magic Number

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

  $scope.updateSectorLegend = function(alias,color,count){
    $scope.datasetTitle = alias;
    $scope.datasetColor = color;
    $scope.datasetCount = count;
  }


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

module.exports = angular.module('GeoAngular').controller('FiltersCtrl', function ($scope, $http, $state, $stateParams,$timeout) {
  $scope.filterMode = "project"; //Which theme are we filtering?
  $scope.params = $stateParams;
  $scope.searchText = '';
  $scope.navTab = 'sectors';
  $scope.sectors = [];
  $scope.selected = false;
  $scope.disasterTypes = [];
  $scope.status = [];
  $scope.disasterTypescategory = {};
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
  }).error(function () {
    console.error("Unable to fetch project filter meta data");
  });

  $http.get('succubus_gitignore/sf-disaster-filter-checkboxes.json', {cache: true}).success(function (data, status) {
    angular.extend($scope, data);
    debug.filtersScope = $scope;
    $scope.categorizeDisasterFilters();
  }).error(function () {
    console.error("Unable to fetch project filter meta data");
  });

  // take array of disaster types and create a new object that separates by category
  $scope.categorizeDisasterFilters = function () {
    $scope.searchList = [];
    var dt = $scope.disasterTypes;
    var p = null;
    var arr = [];
    var cTypes = {};
    for (var i = 0; i < dt.length; i++) {
      if (dt[i].name.indexOf('---') !== -1) {
        arr = [];
        cTypes[dt[i].name.replace("--- ", "").replace(" ---", "")] = {};
        p = dt[i].name.replace("--- ", "").replace(" ---", "");
      } else {
        $scope.searchList.push(dt[i]);
      }
      if (dt[i].name.indexOf('---') == -1) {
        arr.push(dt[i]);
        cTypes[p] = arr;
      }
    }
    $scope.disasterTypescategory = cTypes;
  };

  $scope.closePanels = function (){
    for (var param in $stateParams) {
      if ($stateParams[param] === 'open') {
        $stateParams[param] = null;
      }
    }
  };

  $scope.$on('theme-update', function () {
    if ($stateParams.theme == 'disaster' || $stateParams.theme == 'disasterType') {
      $scope.navTab = 'disasterType';
    };
    if ($stateParams.theme == 'project') {
      $scope.navTab = 'sectors';
    };

    //$scope.closePanels(); // close all panels on theme change

    //clear theme filters
    if ($stateParams.filters !== null) {

      // only clear filters when switching from project to disaster; and vice versa
      if(($stateParams.theme.indexOf('disaster')!==-1 && ($stateParams.filters && $stateParams.filters.indexOf("sector__c")!==-1))) {
          delete $stateParams.filters;
          var state = $state.current.name || 'main';
          $state.go(state, $stateParams);
        }

      if($stateParams.theme.indexOf('project')!==-1 && ($stateParams.filters && $stateParams.filters.indexOf("disaster_type__c")!==-1)) {
        delete $stateParams.filters;
        var state = $state.current.name || 'main';
        $state.go(state, $stateParams);

      }

      //else {
      //  //delete $stateParams.filters;
      //  ////$stateParams.filters = null; //clear theme filters
      //  //var state = $state.current.name || 'main';
      //  //$state.go(state, $stateParams);
      //}

    }
  });

  var decodeDisasterFiltersURL = function () {
    var str = decodeURIComponent(encodeURIComponent($stateParams.filters));
    var index = [];
    for (var i = 0; i < str.length; i++) {
      if (str[i] === "%") index.push(i);
    }

    var arr = [];
    for (var i = 0; i < index.length; i++) {
      arr.push(str.substring(index[i] + 1, index[i + 1]));
      i = i + 1;
    }

    if ($stateParams.filters !== null && $stateParams.filters !== ""
      && $stateParams.filters !== "null" && typeof $stateParams.filters !== 'undefined'){
      var disasters = $scope.disasterTypes;
      $scope.sectorClause = null;
      var first = true;
      for (var s = 0; s < arr.length; s++) {
        for (var i = 0, len = disasters.length; i < len; ++i) {
          var disaster = disasters[i];
          if (arr[s].indexOf(disaster.name) !== -1) {
            if (first) {
              disaster.checked = true;
              $scope.sectorClause = "disaster_type__c LIKE '%" + disaster.name + "%' ";
              first = false;
            } else {
              disaster.checked = true;
              $scope.sectorClause += "OR disaster_type__c LIKE '%" + disaster.name + "%' ";
            }
          }
        }
      }
    }
  };

  var decodeProjectFiltersURL = function () {
    var str = decodeURIComponent(encodeURIComponent($stateParams.filters));
    var index = [];
    for (var i = 0; i < str.length; i++) {
      if (str[i] === "%") index.push(i);
    }

    var arr = [];
    for (var i = 0; i < index.length; i++) {
      arr.push(str.substring(index[i] + 1, index[i + 1]));
      i = i + 1;
    }

    if ($stateParams.filters !== null && $stateParams.filters !== ""
      && $stateParams.filters !== "null" && typeof $stateParams.filters !== 'undefined'){
      var sectors = $scope.sectors;
      $scope.sectorClause = null;
      var first = true;
      for (var s = 0; s < arr.length; s++) {
        for (var i = 0, len = sectors.length; i < len; ++i) {
          var sector = sectors[i];
          if (arr[s].indexOf(sector.name) !== -1) {
            if (first) {
              sector.checked = true;
              $scope.sectorClause = "sector__c LIKE '%" + sector.name + "%' ";
              first = false;
            } else {
              sector.checked = true;
              $scope.sectorClause = "sector__c LIKE '%" + sector.name + "%' ";
            }
          }
        }
      }
    }
  };

  $scope.$on('filters-update', function () {

    if($stateParams.theme.indexOf('disaster')!==-1) decodeDisasterFiltersURL();
    if($stateParams.theme == 'project') decodeProjectFiltersURL();

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
  }).error(function () {
    console.error("Unable to fetch Total Budget Min, Mean, Max");
  });

  $scope.dateFilters = [
    {
      name: 'Start Date',
      radio: 'on',
      empty: true,
      opened: false
    }, {
      name: 'End Date',
      radio: 'on',
      empty: true,
      opened: false
    }, {
      name: 'Create Date',
      radio: 'on',
      empty: true,
      opened: false
    }, {
      name: 'Last Modified',
      radio: 'on',
      empty: true,
      opened: false
    }
  ];

  $scope.toggleDate = function ($event, dateFilter) {
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

  $scope.disasterTypesFilter = function () {
    var disasters = $scope.disasterTypes;
    $scope.sectorClause = null;
    var first = true;
    for (var i = 0, len = disasters.length; i < len; ++i) {
      var disaster = disasters[i];
      if (disaster.checked) {
        if (first) {
          $scope.sectorClause = "disaster_type__c LIKE '%" + disaster.name + "%' ";
          first = false;
        } else {
          $scope.sectorClause += "OR disaster_type__c LIKE '%" + disaster.name + "%' ";
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

  $scope.clearDisasterTypeFilter = function () {
    var disasters = $scope.disasterTypes;
    for (var i = 0, len = disasters.length; i < len; ++i) {
      disasters[i].checked = false;
    }
    $scope.sectorClause = null;
    $scope.composeWhereClause();

    $stateParams.category = null;
    $stateParams.filters = null;
  };

  $scope.clearDisasterFilter = function () {
    var disasters = $scope.disasterTypes;
    for (var i = 0, len = disasters.length; i < len; ++i) {
      disasters[i].checked = false;
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
      }, {
        name: 'End Date',
        radio: 'on',
        empty: true,
        opened: false,
        date: null
      }, {
        name: 'Create Date',
        radio: 'on',
        empty: true,
        opened: false,
        date: null
      }, {
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
    return date.toISOString().slice(0, 10);
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

    if($stateParams.theme.indexOf('project')!==-1)$stateParams.filters = $scope.whereClause;
    if($stateParams.theme.indexOf('disaster')!==-1)$stateParams.filters = $scope.sectorClause;

    var state = $state.current.name || 'main';
    $state.go(state, $stateParams);
  };

  $scope.clearAllFilters = function () {
    $scope.clearSectorsFilter();
    $scope.clearStatusFilter();
    $scope.clearDateFilter();
    $scope.clearBudgetFilter();
    $scope.clearDisasterTypeFilter();
  };

  // puts the category in URL
  $scope.putCategoryURL = function (categoryName) {
      if ($stateParams.category == categoryName){
        $stateParams.category = null;
        $state.go($state.current.name, $stateParams);
      }else{
        $stateParams.category = categoryName;
        $state.go($state.current.name, $stateParams);
      }
  };

  $scope.handleSearch = function(val){
    var dt = $scope.disasterTypescategory;
    $scope.searchText = val;
    for(var i=0;i<Object.keys(dt).length;i++){
      var arr = dt[Object.keys(dt)[i]];
      for(var z=0;z<arr.length;z++){
        if(arr[z].name.indexOf(val)!==-1){
          $stateParams.category = Object.keys(dt)[i];
          $scope.disasterTypescategory[Object.keys(dt)[i]][z].isSearchActive = true;
        }
      }
    }
    var state = $state.current.name || 'main';
    $state.go(state, $stateParams);
  };

  $scope.highlightLayer = function (val){
    $scope.selected = true;
    $timeout(function(){
      var dt = $scope.disasterTypescategory;
      for(var i=0;i<Object.keys(dt).length;i++){
        var arr = dt[Object.keys(dt)[i]];
        for(var z=0;z<arr.length;z++){
          if(arr[z].name.indexOf(val)!==-1){
            $scope.disasterTypescategory[Object.keys(dt)[i]][z].isSearchActive = false;
          }
        }
      }
      $scope.searchText = '';
      $scope.selected = false;
    },2000);
  }

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

module.exports = angular.module('GeoAngular').controller('LayersCtrl', function($scope, $state, $stateParams, LayerConfig, VectorProvider, $rootScope) {
  $scope.params = $stateParams;
  $scope.zoom = parseInt($stateParams.zoom);
  $scope.navTab = 'contextual';

  $scope.gists = []; //initialize as empty
  $scope.mapLayers = []; //initialize as empty

  $scope.gadm0Label = '0. Countries';
  $scope.gadm1Label = '1. State / Province';
  $scope.gadm2Label = '2. County / District';


  debug.LayerConfig = LayerConfig;
  debug.setGadmLevel = VectorProvider.setGadmLevel;

  $scope.gadmLevel = $rootScope.level || 0;

  $scope.themeLabels = { isChecked: $stateParams.themelabels || true };

  $scope.theme = { isChecked: true };

  $scope.themeLayer = LayerConfig.theme;

  $scope.updateGadm = function (level) {
    $scope.level = level.toString();
    if(level.toString() !== $scope.gadmLevel) {
      $scope.gadmLevel = level.toString() || "0";
      console.log($scope.gadmLevel);
    };

  };

  $scope.closePanels = function (){
    for (var param in $stateParams) {
      if ($stateParams[param] === 'open') {
        $stateParams[param] = null;
      }
    }
  };

  $scope.updateThemeLabel = function() {
    if ($scope.themeLabels.isChecked === true) {
      $stateParams.themelabels = 'true';
    }
    else {
      //remove from stateparams
      $stateParams.themelabels = 'false';
    }

    var state = $state.current.name || 'main';
    $state.go(state, $stateParams);
  };

  //Toggle ECOS Layer - if off, then turn on and vice versa.
  $scope.updateTheme = function() {

    var layersArray;

    if($stateParams.layers){
      layersArray = $stateParams.layers.split(",");
    }
    else{
      return;
    }

    if ($scope.theme.isChecked === true) {

      //Remove all GADM layers.
      angular.forEach(layersArray, function (value, key) {
        if (LayerConfig.themeLayers.indexOf(value) > -1) {
          layersArray.splice(layersArray.indexOf(value), 1); //remove any GADMs
        }
      });

      //Add in the gadm layer to the layers list in the stateparams.
      layersArray.push("gadm" + $scope.gadmLevel);
      $stateParams.layers = layersArray.join(",");

    }
    else {
      //remove from stateparams
      //Remove all GADM layers.
      angular.forEach(layersArray, function (value, key) {
        if (LayerConfig.themeLayers.indexOf(value) > -1) {
          layersArray.splice(layersArray.indexOf(value), 1); //remove any GADMs
        }
      });

      $stateParams.layers = layersArray.join(",");
    }

    var state = $state.current.name || 'main';
    $state.go(state, $stateParams);

    //$scope.closeParam('details-panel');

  };


  $scope.$watch('gadmLevel', function (newValue) {
    $scope.updateTheme();
  });

  //$scope.$on('level-update', function () {
  //  VectorProvider.setGadmLevel($stateParams.level);
  //  $scope.gadmLevel = $stateParams.level
  //});

  $scope.$on('zoom-update', function () {
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
     * Force gadm0 on disaster themes
     */

    var theme = $stateParams.theme;


    //force gadm0 on disaster themes when user changes gadm level
    if(theme.indexOf('disaster')!==-1 && $stateParams.layers.split(",")[1] !== 'gadm0'){

      var layersArray = [];

      if($stateParams.layers){
        layersArray = $stateParams.layers.split(",");
      }

      //Remove all GADM layers.
      layersArray.forEach(function (value, key) {
        if (LayerConfig.themeLayers.indexOf(value) > -1) {
          layersArray.splice(layersArray.indexOf(value), 1); //remove any GADMs
        }
      });

      //Add in the gadm layer to the layers list in the stateparams.
      layersArray.push("gadm0");
      $stateParams.layers = layersArray.join(",");
    }


    $scope.mapLayers = $stateParams.layers.split(",");

    // skip the first layer, the basemap
    for (var i = 1, len = layers.length; i < len; i++) {
      var l = layers[i];
      // layer is in the layer config
      if (typeof LayerConfig[l] === 'object' && LayerConfig[l] !== null) {
        LayerConfig[l].active = true;
      }
      // layer is a github gist
      else if ($scope.gists && $scope.gists[l]) {
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

    var checked;

    //See if we should show theme badges/bubbles or not
    if($stateParams.themelabels !== null && $stateParams.themelabels !== undefined){
      checked = $stateParams.themelabels;
    }
    else{
      //if not present, default to true
      checked = 'true';
    }

    $scope.themeLabels = { isChecked: (checked == 'true' ? true : false) };

    //See which, if any, gadm levels is active
    if($rootScope.level){
      $scope.gadmLevel = $rootScope.level;
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

  /*
   Handling Theme Menu Animations
   */

  $scope.toggleBLevelMenu = function(){
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
    $($('#BLevelMenu li').get().reverse()).each(function(index){
      var self = this;
      setTimeout(function () {
        $(self).addClass("theme-selector-li-on");
      }, index*100);
    });
  };

  //Refurl?
  $scope.refurlThemes = function(){
    //Try jQuery to remove the 'on' class to each of the theme LI elements on a timer.
    $('#BLevelSelectorMenu .dropdown-menu li').removeClass("theme-selector-li-on");
  };

  /*
   End Theme Menu Animations
   */

});


},{}],"/Users/ryanwhitley/Documents/GitHub/Mapfolio/GeoForce/GeoAngular/app/scripts/controllers/legend.js":[function(require,module,exports){
/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *       on 3/27/14.
 */

module.exports = angular.module('GeoAngular').controller('LegendCtrl', function($scope, LayerConfig, $stateParams) {

  $scope.fold = false;

  $scope.$on('layers-update', function (evt, layers) {
    $scope.layers = [];
    for (var i = layers.length - 1; i >= 1; i--){
      var l = layers[i];
      var layer = {};
      var lcfg = LayerConfig.find(l);

      if(!lcfg){
        //exit if layer name is not in config.
        return;
      }

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

  $scope.$on('legend-width', function (evt,lw){
    $scope.width = lw.width;
    $scope.fold = lw.fold;
    if(lw.width>=435 || lw.fold == true){
      $scope.fold = true;
      console.log("fold");
    }
  });

  /*
   Set the dictionary used to look up UNOCHA icons for disaster types
   */
  var opacity = "0.5"
  $scope.UNOCHAIconLookup = {

    "Meteorological - Tropical Cyclone": {icon: "icon-disaster_cyclone", color: "rgba(255,0,0," + opacity + ")"},
    "Floods": {icon: "icon-disaster_flood", color: "rgba(255,0,0," + opacity + ")"},
    "Tsunami, Volcano": {icon: "icon-disaster_tsunami", color: "rgba(255,0,0," + opacity + ")"},
    "Floods, Storm": {icon: "icon-disaster_flood", color: "rgba(255,0,0," + opacity + ")"},
    "Tsunami": {icon: "icon-disaster_tsunami", color: "rgba(255,0,0," + opacity + ")"},
    "Famine / Food Insecurity": {icon: "icon-cluster_food_security", color: "rgba(255,0,0," + opacity + ")"},
    "Drought": {icon: "icon-disaster_drought", color: "rgba(255,0,0," + opacity + ")"},
    "Meteorological - Tropical Cyclone;Hydrological - Floods": {icon: "icon-disaster_cyclone", color: "rgba(255,0,0," + opacity + ")"},
    "Food Insecurity": {icon: "icon-cluster_food_security", color: "rgba(255,0,0," + opacity + ")"},
    "Civil Unrest": {icon: "icon-people_rebel", color: "rgba(255,0,0," + opacity + ")"},
    "Floods, Tropical Storm": {icon: "icon-disaster_flood", color: "rgba(255,0,0," + opacity + ")"},
    "Complex Emergency": {icon: "icon-crisis_conflict", color: "rgba(255,0,0," + opacity + ")"},
    "Epidemic": {icon: "icon-disaster_epidemic", color: "rgba(255,0,0," + opacity + ")"},
    "Population Movement": {icon: "icon-crisis_population_displacement", color: "rgba(255,0,0," + opacity + ")"},
    "Climatological - Drought": {icon: "icon-disaster_drought", color: "rgba(255,0,0," + opacity + ")"},
    "Winter Storm": {icon: "icon-disaster_snowfall", color: "rgba(255,0,0," + opacity + ")"},
    "Tropical Storm": {icon: "icon-disaster_heavy_rain", color: "rgba(255,0,0," + opacity + ")"},
    "Earthquake, Tsunami": {icon: "icon-disaster_earthquake", color: "rgba(255,0,0," + opacity + ")"},
    "Hydrological - Floods": {icon: "icon-disaster_flood", color: "rgba(255,0,0," + opacity + ")"},
    "Landslide;Floods": {icon: "icon-disaster_landslide", color: "rgba(255,0,0," + opacity + ")"},
    "Earthquake": {icon: "icon-disaster_earthquake", color: "rgba(255,0,0," + opacity + ")"},
    "Landslide;Hydrological - Floods": {icon: "icon-disaster_landslide", color: "rgba(255,0,0," + opacity + ")"}

  }


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
  var filtersStr = $stateParams.filters;
  var categoryStr = $stateParams.category; // layer category open
  var themeLabelStr = $stateParams.themelabels; // themelabels (bubbles)

  var levelStr = $stateParams.level;
  var zoomStr = $stateParams.zoom;
  $rootScope.$broadcast('route-update');

  /**
   * Only if the latest route has a different layer string than before.
   */
  if (layersStr !== window.prevLayersStr) {
    window.prevLayersStr = layersStr;
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

  if (filtersStr !== window.prevfiltersStr) {
    window.prevfiltersStr = filtersStr;
    $rootScope.$broadcast('filters-update', filtersStr);
  }

  // if the open category has changed broadcast category has changed
  if (categoryStr !== window.prevCategoryStr) {
    window.prevCategoryStr = categoryStr;
    $rootScope.$broadcast('category-update', categoryStr);
  }

  // if the themelabels has changed broadcast themelabels has changed
  if(window.themeLabelStr != themeLabelStr) {
    window.themeLabelStr = themeLabelStr;
    $rootScope.$broadcast('themelabels-update', themeLabelStr);
  }

});

},{}],"/Users/ryanwhitley/Documents/GitHub/Mapfolio/GeoForce/GeoAngular/app/scripts/controllers/map.js":[function(require,module,exports){
/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *     on Mon Mar 17 2014
 */

module.exports = angular.module('GeoAngular').controller('MapCtrl', function ($scope, $rootScope, $state, $stateParams, LayerConfig, VectorProvider, $http, $sce) {
  var map = L.map('map');
  var firstLoad = true;

  $scope.params = $stateParams;
  $scope.blur = '';
  $scope.grayout = ''; //use this class to gray out the map, such as when the country selector menu is active
  $scope.legendObject = {}; //When PBF layers are drawn, grab the legendObject out of it so we know what classes are being drawn on the map

  $scope.toggleState = function (stateName) {
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
    forceGadm0();
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

    if ((theme !== $stateParams.theme || filters !== $stateParams.filters) || firstLoad === true) {

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

  });

  $rootScope.$on('themelabels-update', function () {
    //Call the function
    onThemeLabelChanged();

    //See if we should show theme badges/bubbles or not
    if($stateParams.themelabels !== null && $stateParams.themelabels !== undefined){
      $scope.themeLabelsChecked = $stateParams.themelabels;
    }
    else{
      //if not present, default to true
      $scope.themeLabelsChecked = 'true';
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

  map.on('zoomend', function(evt) {

    var zoom = evt.target.getZoom();

    //When zoom ends, swap css class on map div, so the labels will change size
    //remove old classes, just in case

    $("#map").removeClass("medium-label");
    $("#map").removeClass("large-label");


    //Add appropriate class basd on zoom
    if (zoom >= 0 && zoom <= 5) {
      $("#map").addClass("medium-label");
    }
    else if (zoom > 5 && zoom <= 13) {
      $("#map").addClass("large-label");
    }

  });

  $rootScope.$watch('level', function () {
     //if the GADM level changes (and is something), then need to fetch new ECOS data for this theme
     onThemeChanged();
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
        if (vecRes) {
          var layer = vecRes.getLayer();
          layer.overlayName = overlayName;
        }
        else {
          //Not a valid layer.
          console.log(overlayName + " is not a layer specified in layerConfig.js");
          continue;
        }


      }

      // try for WMS (not a vector layer)
      // if things get more fancy with wms, it should get its own factory
      else if (typeof LayerConfig[overlayName] === 'object'
        && LayerConfig[overlayName].type.toLowerCase() === 'wms') {

        var cfg = LayerConfig[overlayName];

        if (cfg) {


          var layer = L.tileLayer.wms(cfg.url, {
            format: cfg.format || 'image/png',
            transparent: cfg.transparent || true,
            layers: cfg.layers
          });

        }
        else {
          //Not a valid layer.
          console.log(overlayName + " is not a layer specified in layerConfig.js");
          continue;
        }
      }


      /**
       * Tiles that are an overlay. OSM / Google / Mapnik tend to make tiles in this format.
       */
      else if (typeof LayerConfig[overlayName] === 'object'
        && LayerConfig[overlayName].type.toLowerCase() === 'xyz') {

        var cfg = LayerConfig[overlayName];
        if (cfg) {


          var layer = L.tileLayer(cfg.url, {
            opacity: cfg.opacity || 0.5
          });
        }

        else {
          //Not a valid layer.
          console.log(overlayName + " is not a layer specified in layerConfig.js");
          continue;
        }
      }

      /**
       * TMS flips the y. GeoServer often serves this.
       */
      else if (typeof LayerConfig[overlayName] === 'object'
        && LayerConfig[overlayName].type.toLowerCase() === 'tms') {
        var cfg = LayerConfig[overlayName];

        if (cfg) {
          var layer = L.tileLayer(cfg.url, {
            opacity: cfg.opacity || 0.5,
            tms: true
          });
        }

        else {
          //Not a valid layer.
          console.log(overlayName + " is not a layer specified in layerConfig.js");
          continue;
        }
      }

      // if its not wms, its a vector layer
      else {
        var vecRes = VectorProvider.createResource(overlayName);
        if (vecRes) {
          var layer = vecRes.getLayer();
        }
        else {
          //Not a valid layer.
          console.log(overlayName + " is not a layer specified in layerConfig.js");
          continue;
        }
      }

      if(layer){
        layer.overlayName = overlayName;
        layer.addTo(map);
        overlays[i] = layer;
        overlays_dictionary[overlayName] = layer; //keep a dictionary reference for faster fetching in UpdateECOSData

        //See which GADM level is currently loaded and store it in rootScope (assumes one at a time, which might go away at some point)
        if (LayerConfig.themeLayers.indexOf(overlayName) > -1) {
          //We have one of the theme layers (GADM), parse the name and find out which level we're dealing with as opposed to storing a seaprate level state param
          var level = overlayName.substring(overlayName.length - 1, overlayName.length);
          $rootScope.level = level; //Store in rootscope
        }
      }
    }

    // there are more overlays left in the list, less layers specified in route
    // we need to remove those too.
    for (var len2 = overlays.length; i < len2; ++i) {
      if (overlays[i] && overlays[i].destroyResource) {
        overlays[i].destroyResource();
        map.removeLayer(overlays[i]);
        delete overlays_dictionary[overlays[i].overlayName]; //delete dictionary reference for faster fetching in UpdateECOSData
        delete overlays[i];
      }
    }
  }


  /**
   * When the theme label state changes, this function will be fired.
   * @param theme
   */
  function onThemeLabelChanged() {

    //Find the current theme level, if any
    var level = $rootScope.level; //set in drawoverlays

    if(!level) return; //no theme

    var layer = overlays_dictionary["gadm" + level];

    if (layer) {
      redrawThemeLayers(layer);
    }

  }

  /**
   * When the theme changes, this function will be fired.
   * @param theme
   */
  function onThemeChanged(theme) {

    if($stateParams.theme){
      forceGadm0();
    }

    //Find the current theme level, if any
    var level = $rootScope.level; //set in drawoverlays

    if (!level) return; //no theme

    var layer = overlays_dictionary["gadm" + level];

    if (layer) {

      if($stateParams.theme.toLowerCase() === 'none'){
          //Skip the mumbo jumbo.  Clear the cached ECOS data and redraw empty
          $rootScope.vtData = {};
          redrawThemeLayers(layer);
      }
      else{
        //For vector tile choropleths, ask for new data .json from the server
        getECOSProperties(function (data) {

          if (data && data.features) {

            var guids = {};

            angular.forEach(data.features, function (dataItem, dataKey) {
              guids[dataItem.properties.guid] = dataItem.properties;
            });

            $rootScope.vtData = guids; //Store the data to be merged with vector tile layer.  In config/vectortiles.js, the MVT choropleth layers will attempt to merge this data in when tiles finish loading (any time new tiles are requested, like zoomin/out/pan)

            redrawThemeLayers(layer);

          }
        })
      }

    }

  }



  function redrawThemeLayers(layer){
    var layers = layer.getLayers();

    if (!layers) return; //no layers have loaded yet.  This needs to wait until some tiles have loaded.

    var vtLayer;
    var vtLabelLayer;

    //TODO: Move this logic to a single location

    vtLayer = layers["GADM_2014"];
    vtLabelLayer = layers["GADM_2014_label"];


    if(vtLayer && vtLayer.features) {
      //Clear ecos property from MVTFeature
      clearFeatureProperties(vtLayer.features);
      //Clear ecos property from Label Layer
      clearFeatureProperties(vtLabelLayer.features);


      //Update Layer(s) style and redraw
      vtLayer.clearLayerFeatureHash(); //Force VTs to be reparsed.
      vtLabelLayer.clearLayerFeatureHash();
    }

    //Clear the MVT internal legend object before redrawing
    if(vtLayer) vtLayer.clearLegendObject();
    if(vtLabelLayer) vtLabelLayer.clearLegendObject();

    layer.redraw(true); //false means that this redraw won't trigger the onTilesLoaded event.

    //Fetch the legend after redraw
    //need to wait until all tiles finish drawing
    layer.options.onTilesLoaded = function(){
      if(vtLayer){
        var legendObject = vtLayer.getLegendObject();
        if(legendObject){
          //set it equal to the scope
          $scope.legendObject = legendObject;

          // broadcast legend width for resize
          if($stateParams.theme == 'disasterType'){
            $scope.firstObject = legendObject[Object.keys(legendObject)[0]];
            var legendWidth = {width: document.getElementById('legend').offsetWidth};
            legendWidth.fold = (Object.keys(legendObject).length > 2);
            $rootScope.$broadcast('legend-width', legendWidth);
          }

          $scope.themeLabel = $rootScope.themeNameHash[$stateParams.theme];
          //$scope.legendObjectLabel = legendObject[Object.keys(legendObject)[0]].legendLabel.replace("#",""); //remove '#'
        }
      }

      if(vtLabelLayer){
        var bubbleLegendObject = vtLabelLayer.getLegendObject();
        if(bubbleLegendObject){
          //set it equal to the scope
          if($stateParams.theme.toLowerCase() == "disastertype"){
            //Disaster type has different bubble images
            $scope.bubbleLegendObject = bubbleLegendObject;
          }
          else{
            //Other themes use the same bubble type.
            //So just grab the first one
            var keys = Object.keys(bubbleLegendObject);
            if(bubbleLegendObject[keys[0]] && bubbleLegendObject[keys[0]].options && bubbleLegendObject[keys[0]].options.html){
              $scope.singleBubbleObject = $sce.trustAsHtml(bubbleLegendObject[keys[0]].options.html);
            }
          }
        }
      }
    }
  }


  /**
   * When the filters change, this function will be fired.
   * @param theme
   */
  function onFiltersChanged(filters){

  }

  /**
   * Force gadm0 on all disaster themes
   * @param theme
   */
  function forceGadm0(){
    var theme = $stateParams.theme;

    if(theme.indexOf('disaster')!==-1 && $stateParams.layers.split(",")[1] !== 'gadm0'){
      var layersArray;

      if($stateParams.layers){
        layersArray = $stateParams.layers.split(",");
      }

      //Remove all GADM layers.
      layersArray.forEach(function (value, key) {
        if (LayerConfig.themeLayers.indexOf(value) > -1) {
          layersArray.splice(layersArray.indexOf(value), 1); //remove any GADMs
        }
      });

      //Add in the gadm layer to the layers list in the stateparams.
      layersArray.push("gadm0");
      $stateParams.layers = layersArray.join(",");

      var state = $state.current.name || 'main';
      $state.go(state, $stateParams);
    }

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

    var level = $rootScope.level;

    if (!level) return; //exit if no level

    var url = "../services/custom/custom_operation?name=getallaggregatedthemefeatures&format=geojson&theme=:theme&gadm_level=" + level + "&filters=:filters";

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

  //Take a legend dicionary from MVTLayer and format it for display in HTML land.
  //function formatLegend(legendObject){
  //  var html = "";
  //
  //  for(var styleClass in legendObject){
  //
  //
  //
  //  }
  //
  //  return "";
  //}

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

module.exports = angular.module('GeoAngular').controller('ThemeCtrl', function ($scope, $rootScope, $state, $stateParams, VectorProvider, LayerConfig) {

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
    //ensureThemeCount();
    $scope.setThemeQueryParam('project');
  };

  $scope.disaster = function () {
    $scope.themeName = themeNameHash.disaster;
    //ensureThemeCount();
    $scope.setThemeQueryParam('disaster');
  };

  $scope.projectRisk = function () {
      $scope.themeName = themeNameHash.projectRisk;
      //ensureThemeCount();
      $scope.setThemeQueryParam('projectRisk');
  };

  $scope.projectHealth = function () {
      $scope.themeName = themeNameHash.projectHealth;
      //ensureThemeCount();
      $scope.setThemeQueryParam('projectHealth');
  };

  $scope.disasterType = function () {
    $scope.themeName = themeNameHash.disasterType;
    //ensureThemeCount();
    $scope.setThemeQueryParam('disasterType');
  };

  $scope.none = function () {
    $scope.themeName = themeNameHash.none;
    //var layersArr = $.grep($stateParams.layers.split(','), function(routeLayer){
    //  return routeLayer !== 'gadm0' && routeLayer !== 'theme';
    //});
    //$stateParams.layers = layersArr.join(',');
    $scope.setThemeQueryParam('none');
  };

  function ensureThemeCount() {
    if ($stateParams.layers.indexOf('gadm0') === -1 && $stateParams.layers.indexOf('theme') === -1) {
      $stateParams.layers += ',gadm0';
    }
  }

  $scope.closePanels = function (){
    for (var param in $stateParams) {
      if ($stateParams[param] === 'open') {
        $stateParams[param] = null;
      }
    }
  };

  $scope.setThemeQueryParam = function (theme) {

    //close details panel on theme change
    if($scope.isParam('details-panel') == true){
      if($stateParams.theme !== theme){
        $scope.closePanels();
      }
    }

    $stateParams.theme = theme;

    //force gadm0 on disaster and disasterType
    if(theme.indexOf('disaster')!==-1 && $stateParams.layers.split(",")[1] !== 'gadm0'){
      var layersArray;

      if($stateParams.layers){
        layersArray = $stateParams.layers.split(",");
      }

      //Remove all GADM layers.
      layersArray.forEach(function (value, key) {
        if (LayerConfig.themeLayers.indexOf(value) > -1) {
          layersArray.splice(layersArray.indexOf(value), 1); //remove any GADMs
        }
      });

      //Add in the gadm layer to the layers list in the stateparams.
      layersArray.push("gadm0");
      $stateParams.layers = layersArray.join(",");
    }

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
      }, index*100);
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

  var service = {};
  service.dataset = [];

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
              'alias': visualizationDictionary[-9999].label || 'Unknown'
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
            'alias': reportingProperties.label || 'Unknown'
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
      'alias': visualizationDictionary[-9999].label || 'Unknown'
    };

    // Merge all 'other' objects; we determine which are 'other' by testing to see if its been assigned the 'other' color
    for (var k = 0, kMax = tmpDataset.length; k < kMax; k++) {

      if(tmpDataset[k].color === visualizationDictionary[-9999].color) {
        mergedOther.count = mergedOther.count + tmpDataset[k].count;
      } else {
        dataset.push(tmpDataset[k]);
      }
    }

    // Add the merge object to the dataset we will use in donut chart
    dataset.push(mergedOther);
    service.dataset = dataset;


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

    var defaultPalette = ['#e65552',	'#f18432',	'#f4d746',	'#6d7c58',	'#b9c03e',	'#0f4e60',	'#01aa95',	'#a1b1cc',	'#ff859a',	'#b3b091',	'#8d2725',	'#a37654',	'#baa749',	'#75bb18',	'#dddfb3',	'#39b4d7',	'#87d8ce',	'#4876c3',	'#db1739',	'#8d8105',	'#d08484',	'#fdd5b7',	'#f4f7d4',	'#d8efb9',	'#eef758',	'#d6f4fd',	'#abbebc',	'#847cd1',	'#ebb8d4',	'#e9ce84',	'#d0a6a6',	'#615549',	'#99692b',	'#adbf95',	'#15e5c5',	'#5bb7d2',	'#4a8c84',	'#d18cfd',	'#fc173e',	'#fbf3a5',	'#9b5c5c',	'#fbebde',	'#ddb903',	'#cbcbcb',	'#464646',	'#287084',	'#b2f7ee',	'#9e9e9e',	'#eeeeee',	'#ae1fa9']

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

    /**
     * Creates a D3 donut that goes around a label on the map.
     */
    service.createLabelDonut = function(sectors, projects, divId) {
      var vizDictionary = makeVisualizationDictionary(sectors);
      var donut = new ExpandoDonut(projects, vizDictionary, divId , 'bottom');
      $(divId).prepend('<div id="sectors-heading" class="heading">Sectors</div>');
      return donut;
    };

  return service;


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
    url: '/mapfolio/index.html#/map@12.768946,122.486572,6(ortho,gadm0,gdacs),disaster?details-panel=open&sf_id=a0Ed000000qZntUEAS',
    name: 'Typhoon Haiyan Response',
    date: '2013-10-12',
    thumbnail: 'images/stories/haiyan.png',
    keywords: 'Typhoon, Disaster Response, Haiyan, Disaster, AMEE'
  };
  this.pam = {
    url: '/mapfolio/index.html#/map@-16.551962,168.085327,7(ortho,gdacs,gadm0),disaster',
    name: 'Cyclone Pam Resopnse',
    date: '2015-15-3',
    thumbnail: 'images/stories/pam.png',
    keywords: 'Cyclone, Disaster Response, Vanuatu, Africa'
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

    for (var j = 0, len = featItinerary.length; j < len; j++) {
      var feat = featItinerary[j];
      if ( feat.iscenter ) {
        vector.centerLevel = feat.level || 0;
        $rootScope.$broadcast('center-feature', feat);
      }
    }

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

PBF.prototype.fetchFeatureDetails = function(guid, level, name) {


  var detailsUrl = config.chubbsPath(this.options.detailsUrl);
  if (!detailsUrl) {
    console.error('We need a detailsUrl to fetchFeatureDetails');
    return;
  }

  var theme = $rootScope.$stateParams.theme || 'project';

  //Exit if theme is none.
  if(theme.toLowerCase() === 'none') return;

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
    featureLayer.feature.properties.name = name;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi91c3IvbG9jYWwvbGliL25vZGVfbW9kdWxlcy93YXRjaGlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiL1VzZXJzL3J5YW53aGl0bGV5L0RvY3VtZW50cy9HaXRIdWIvTWFwZm9saW8vR2VvRm9yY2UvQ29uZmlnL2xheWVycy9hbGwuanMiLCIvVXNlcnMvcnlhbndoaXRsZXkvRG9jdW1lbnRzL0dpdEh1Yi9NYXBmb2xpby9HZW9Gb3JjZS9Db25maWcvbGF5ZXJzL2Jhc2VtYXBzLmpzIiwiL1VzZXJzL3J5YW53aGl0bGV5L0RvY3VtZW50cy9HaXRIdWIvTWFwZm9saW8vR2VvRm9yY2UvQ29uZmlnL2xheWVycy9kaXNhc3Rlci5qcyIsIi9Vc2Vycy9yeWFud2hpdGxleS9Eb2N1bWVudHMvR2l0SHViL01hcGZvbGlvL0dlb0ZvcmNlL0NvbmZpZy9sYXllcnMvb3RoZXIuanMiLCIvVXNlcnMvcnlhbndoaXRsZXkvRG9jdW1lbnRzL0dpdEh1Yi9NYXBmb2xpby9HZW9Gb3JjZS9Db25maWcvbGF5ZXJzL3Byb2plY3QuanMiLCIvVXNlcnMvcnlhbndoaXRsZXkvRG9jdW1lbnRzL0dpdEh1Yi9NYXBmb2xpby9HZW9Gb3JjZS9Db25maWcvbGF5ZXJzL3Byb2plY3RoZWFsdGguanMiLCIvVXNlcnMvcnlhbndoaXRsZXkvRG9jdW1lbnRzL0dpdEh1Yi9NYXBmb2xpby9HZW9Gb3JjZS9Db25maWcvbGF5ZXJzL3Byb2plY3RyaXNrLmpzIiwiL1VzZXJzL3J5YW53aGl0bGV5L0RvY3VtZW50cy9HaXRIdWIvTWFwZm9saW8vR2VvRm9yY2UvQ29uZmlnL2xheWVycy92ZWN0b3J0aWxlcy5qcyIsIi9Vc2Vycy9yeWFud2hpdGxleS9Eb2N1bWVudHMvR2l0SHViL01hcGZvbGlvL0dlb0ZvcmNlL0dlb0FuZ3VsYXIvYXBwL2xpYi9MZWFmbGV0Lk1hcGJveFZlY3RvclRpbGUvbm9kZV9tb2R1bGVzL3BiZi9pbmRleC5qcyIsIi9Vc2Vycy9yeWFud2hpdGxleS9Eb2N1bWVudHMvR2l0SHViL01hcGZvbGlvL0dlb0ZvcmNlL0dlb0FuZ3VsYXIvYXBwL2xpYi9MZWFmbGV0Lk1hcGJveFZlY3RvclRpbGUvbm9kZV9tb2R1bGVzL3BiZi9ub2RlX21vZHVsZXMvaWVlZTc1NC9pbmRleC5qcyIsIi9Vc2Vycy9yeWFud2hpdGxleS9Eb2N1bWVudHMvR2l0SHViL01hcGZvbGlvL0dlb0ZvcmNlL0dlb0FuZ3VsYXIvYXBwL2xpYi9MZWFmbGV0Lk1hcGJveFZlY3RvclRpbGUvbm9kZV9tb2R1bGVzL3BvaW50LWdlb21ldHJ5L2luZGV4LmpzIiwiL1VzZXJzL3J5YW53aGl0bGV5L0RvY3VtZW50cy9HaXRIdWIvTWFwZm9saW8vR2VvRm9yY2UvR2VvQW5ndWxhci9hcHAvbGliL0xlYWZsZXQuTWFwYm94VmVjdG9yVGlsZS9ub2RlX21vZHVsZXMvdmVjdG9yLXRpbGUvaW5kZXguanMiLCIvVXNlcnMvcnlhbndoaXRsZXkvRG9jdW1lbnRzL0dpdEh1Yi9NYXBmb2xpby9HZW9Gb3JjZS9HZW9Bbmd1bGFyL2FwcC9saWIvTGVhZmxldC5NYXBib3hWZWN0b3JUaWxlL25vZGVfbW9kdWxlcy92ZWN0b3ItdGlsZS9saWIvdmVjdG9ydGlsZS5qcyIsIi9Vc2Vycy9yeWFud2hpdGxleS9Eb2N1bWVudHMvR2l0SHViL01hcGZvbGlvL0dlb0ZvcmNlL0dlb0FuZ3VsYXIvYXBwL2xpYi9MZWFmbGV0Lk1hcGJveFZlY3RvclRpbGUvbm9kZV9tb2R1bGVzL3ZlY3Rvci10aWxlL2xpYi92ZWN0b3J0aWxlZmVhdHVyZS5qcyIsIi9Vc2Vycy9yeWFud2hpdGxleS9Eb2N1bWVudHMvR2l0SHViL01hcGZvbGlvL0dlb0ZvcmNlL0dlb0FuZ3VsYXIvYXBwL2xpYi9MZWFmbGV0Lk1hcGJveFZlY3RvclRpbGUvbm9kZV9tb2R1bGVzL3ZlY3Rvci10aWxlL2xpYi92ZWN0b3J0aWxlbGF5ZXIuanMiLCIvVXNlcnMvcnlhbndoaXRsZXkvRG9jdW1lbnRzL0dpdEh1Yi9NYXBmb2xpby9HZW9Gb3JjZS9HZW9Bbmd1bGFyL2FwcC9saWIvTGVhZmxldC5NYXBib3hWZWN0b3JUaWxlL3NyYy9NVlRGZWF0dXJlLmpzIiwiL1VzZXJzL3J5YW53aGl0bGV5L0RvY3VtZW50cy9HaXRIdWIvTWFwZm9saW8vR2VvRm9yY2UvR2VvQW5ndWxhci9hcHAvbGliL0xlYWZsZXQuTWFwYm94VmVjdG9yVGlsZS9zcmMvTVZUTGF5ZXIuanMiLCIvVXNlcnMvcnlhbndoaXRsZXkvRG9jdW1lbnRzL0dpdEh1Yi9NYXBmb2xpby9HZW9Gb3JjZS9HZW9Bbmd1bGFyL2FwcC9saWIvTGVhZmxldC5NYXBib3hWZWN0b3JUaWxlL3NyYy9NVlRTb3VyY2UuanMiLCIvVXNlcnMvcnlhbndoaXRsZXkvRG9jdW1lbnRzL0dpdEh1Yi9NYXBmb2xpby9HZW9Gb3JjZS9HZW9Bbmd1bGFyL2FwcC9saWIvTGVhZmxldC5NYXBib3hWZWN0b3JUaWxlL3NyYy9NVlRVdGlsLmpzIiwiL1VzZXJzL3J5YW53aGl0bGV5L0RvY3VtZW50cy9HaXRIdWIvTWFwZm9saW8vR2VvRm9yY2UvR2VvQW5ndWxhci9hcHAvbGliL0xlYWZsZXQuTWFwYm94VmVjdG9yVGlsZS9zcmMvU3RhdGljTGFiZWwvU3RhdGljTGFiZWwuanMiLCIvVXNlcnMvcnlhbndoaXRsZXkvRG9jdW1lbnRzL0dpdEh1Yi9NYXBmb2xpby9HZW9Gb3JjZS9HZW9Bbmd1bGFyL2FwcC9saWIvZmVhdHVyZWxhYmVsL0ZlYXR1cmVTZXQuanMiLCIvVXNlcnMvcnlhbndoaXRsZXkvRG9jdW1lbnRzL0dpdEh1Yi9NYXBmb2xpby9HZW9Gb3JjZS9HZW9Bbmd1bGFyL2FwcC9saWIvZmVhdHVyZWxhYmVsL0xhYmVsLmpzIiwiL1VzZXJzL3J5YW53aGl0bGV5L0RvY3VtZW50cy9HaXRIdWIvTWFwZm9saW8vR2VvRm9yY2UvR2VvQW5ndWxhci9hcHAvbGliL2ZlYXR1cmVsYWJlbC9mZWF0dXJlbGFiZWwuanMiLCIvVXNlcnMvcnlhbndoaXRsZXkvRG9jdW1lbnRzL0dpdEh1Yi9NYXBmb2xpby9HZW9Gb3JjZS9HZW9Bbmd1bGFyL2FwcC9saWIvZmVhdHVyZWxhYmVsL2xlYWZsZXQtcGF0Y2guanMiLCIvVXNlcnMvcnlhbndoaXRsZXkvRG9jdW1lbnRzL0dpdEh1Yi9NYXBmb2xpby9HZW9Gb3JjZS9HZW9Bbmd1bGFyL2FwcC9zY3JpcHRzL2FwcC5qcyIsIi9Vc2Vycy9yeWFud2hpdGxleS9Eb2N1bWVudHMvR2l0SHViL01hcGZvbGlvL0dlb0ZvcmNlL0dlb0FuZ3VsYXIvYXBwL3NjcmlwdHMvY29udHJvbGxlcnMvYmFzZW1hcHMuanMiLCIvVXNlcnMvcnlhbndoaXRsZXkvRG9jdW1lbnRzL0dpdEh1Yi9NYXBmb2xpby9HZW9Gb3JjZS9HZW9Bbmd1bGFyL2FwcC9zY3JpcHRzL2NvbnRyb2xsZXJzL2JyZWFkY3J1bWJzLmpzIiwiL1VzZXJzL3J5YW53aGl0bGV5L0RvY3VtZW50cy9HaXRIdWIvTWFwZm9saW8vR2VvRm9yY2UvR2VvQW5ndWxhci9hcHAvc2NyaXB0cy9jb250cm9sbGVycy9kZXRhaWxzLmpzIiwiL1VzZXJzL3J5YW53aGl0bGV5L0RvY3VtZW50cy9HaXRIdWIvTWFwZm9saW8vR2VvRm9yY2UvR2VvQW5ndWxhci9hcHAvc2NyaXB0cy9jb250cm9sbGVycy9leHBvcnQuanMiLCIvVXNlcnMvcnlhbndoaXRsZXkvRG9jdW1lbnRzL0dpdEh1Yi9NYXBmb2xpby9HZW9Gb3JjZS9HZW9Bbmd1bGFyL2FwcC9zY3JpcHRzL2NvbnRyb2xsZXJzL2ZpbHRlcnMuanMiLCIvVXNlcnMvcnlhbndoaXRsZXkvRG9jdW1lbnRzL0dpdEh1Yi9NYXBmb2xpby9HZW9Gb3JjZS9HZW9Bbmd1bGFyL2FwcC9zY3JpcHRzL2NvbnRyb2xsZXJzL2luZm8uanMiLCIvVXNlcnMvcnlhbndoaXRsZXkvRG9jdW1lbnRzL0dpdEh1Yi9NYXBmb2xpby9HZW9Gb3JjZS9HZW9Bbmd1bGFyL2FwcC9zY3JpcHRzL2NvbnRyb2xsZXJzL2xheWVycy5qcyIsIi9Vc2Vycy9yeWFud2hpdGxleS9Eb2N1bWVudHMvR2l0SHViL01hcGZvbGlvL0dlb0ZvcmNlL0dlb0FuZ3VsYXIvYXBwL3NjcmlwdHMvY29udHJvbGxlcnMvbGVnZW5kLmpzIiwiL1VzZXJzL3J5YW53aGl0bGV5L0RvY3VtZW50cy9HaXRIdWIvTWFwZm9saW8vR2VvRm9yY2UvR2VvQW5ndWxhci9hcHAvc2NyaXB0cy9jb250cm9sbGVycy9tYWluLmpzIiwiL1VzZXJzL3J5YW53aGl0bGV5L0RvY3VtZW50cy9HaXRIdWIvTWFwZm9saW8vR2VvRm9yY2UvR2VvQW5ndWxhci9hcHAvc2NyaXB0cy9jb250cm9sbGVycy9tYXAuanMiLCIvVXNlcnMvcnlhbndoaXRsZXkvRG9jdW1lbnRzL0dpdEh1Yi9NYXBmb2xpby9HZW9Gb3JjZS9HZW9Bbmd1bGFyL2FwcC9zY3JpcHRzL2NvbnRyb2xsZXJzL25hdmJhci5qcyIsIi9Vc2Vycy9yeWFud2hpdGxleS9Eb2N1bWVudHMvR2l0SHViL01hcGZvbGlvL0dlb0ZvcmNlL0dlb0FuZ3VsYXIvYXBwL3NjcmlwdHMvY29udHJvbGxlcnMvc2VhcmNoLmpzIiwiL1VzZXJzL3J5YW53aGl0bGV5L0RvY3VtZW50cy9HaXRIdWIvTWFwZm9saW8vR2VvRm9yY2UvR2VvQW5ndWxhci9hcHAvc2NyaXB0cy9jb250cm9sbGVycy9zaWRlLXZpZXcuanMiLCIvVXNlcnMvcnlhbndoaXRsZXkvRG9jdW1lbnRzL0dpdEh1Yi9NYXBmb2xpby9HZW9Gb3JjZS9HZW9Bbmd1bGFyL2FwcC9zY3JpcHRzL2NvbnRyb2xsZXJzL3N0b3JpZXMuanMiLCIvVXNlcnMvcnlhbndoaXRsZXkvRG9jdW1lbnRzL0dpdEh1Yi9NYXBmb2xpby9HZW9Gb3JjZS9HZW9Bbmd1bGFyL2FwcC9zY3JpcHRzL2NvbnRyb2xsZXJzL3RoZW1lLmpzIiwiL1VzZXJzL3J5YW53aGl0bGV5L0RvY3VtZW50cy9HaXRIdWIvTWFwZm9saW8vR2VvRm9yY2UvR2VvQW5ndWxhci9hcHAvc2NyaXB0cy9jb250cm9sbGVycy91cGxvYWQuanMiLCIvVXNlcnMvcnlhbndoaXRsZXkvRG9jdW1lbnRzL0dpdEh1Yi9NYXBmb2xpby9HZW9Gb3JjZS9HZW9Bbmd1bGFyL2FwcC9zY3JpcHRzL2NvbnRyb2xsZXJzL3pvb20tZXh0ZW50LmpzIiwiL1VzZXJzL3J5YW53aGl0bGV5L0RvY3VtZW50cy9HaXRIdWIvTWFwZm9saW8vR2VvRm9yY2UvR2VvQW5ndWxhci9hcHAvc2NyaXB0cy9zZXJ2aWNlcy9Eb251dHMuanMiLCIvVXNlcnMvcnlhbndoaXRsZXkvRG9jdW1lbnRzL0dpdEh1Yi9NYXBmb2xpby9HZW9Gb3JjZS9HZW9Bbmd1bGFyL2FwcC9zY3JpcHRzL3NlcnZpY2VzL0xheWVyQ29uZmlnLmpzIiwiL1VzZXJzL3J5YW53aGl0bGV5L0RvY3VtZW50cy9HaXRIdWIvTWFwZm9saW8vR2VvRm9yY2UvR2VvQW5ndWxhci9hcHAvc2NyaXB0cy9zZXJ2aWNlcy9TdG9yaWVzQ29uZmlnLmpzIiwiL1VzZXJzL3J5YW53aGl0bGV5L0RvY3VtZW50cy9HaXRIdWIvTWFwZm9saW8vR2VvRm9yY2UvR2VvQW5ndWxhci9hcHAvc2NyaXB0cy9zZXJ2aWNlcy9WZWN0b3IvQkJveEdlb0pTT04uanMiLCIvVXNlcnMvcnlhbndoaXRsZXkvRG9jdW1lbnRzL0dpdEh1Yi9NYXBmb2xpby9HZW9Gb3JjZS9HZW9Bbmd1bGFyL2FwcC9zY3JpcHRzL3NlcnZpY2VzL1ZlY3Rvci9HZW9KU09OLmpzIiwiL1VzZXJzL3J5YW53aGl0bGV5L0RvY3VtZW50cy9HaXRIdWIvTWFwZm9saW8vR2VvRm9yY2UvR2VvQW5ndWxhci9hcHAvc2NyaXB0cy9zZXJ2aWNlcy9WZWN0b3IvS01MLmpzIiwiL1VzZXJzL3J5YW53aGl0bGV5L0RvY3VtZW50cy9HaXRIdWIvTWFwZm9saW8vR2VvRm9yY2UvR2VvQW5ndWxhci9hcHAvc2NyaXB0cy9zZXJ2aWNlcy9WZWN0b3IvUmVzb3VyY2UuanMiLCIvVXNlcnMvcnlhbndoaXRsZXkvRG9jdW1lbnRzL0dpdEh1Yi9NYXBmb2xpby9HZW9Gb3JjZS9HZW9Bbmd1bGFyL2FwcC9zY3JpcHRzL3NlcnZpY2VzL1ZlY3Rvci9WZWN0b3JQcm92aWRlci5qcyIsIi9Vc2Vycy9yeWFud2hpdGxleS9Eb2N1bWVudHMvR2l0SHViL01hcGZvbGlvL0dlb0ZvcmNlL0dlb0FuZ3VsYXIvYXBwL3NjcmlwdHMvc2VydmljZXMvVmVjdG9yL2Nzdi5qcyIsIi9Vc2Vycy9yeWFud2hpdGxleS9Eb2N1bWVudHMvR2l0SHViL01hcGZvbGlvL0dlb0ZvcmNlL0dlb0FuZ3VsYXIvYXBwL3NjcmlwdHMvc2VydmljZXMvVmVjdG9yL3BiZi5qcyIsIi9Vc2Vycy9yeWFud2hpdGxleS9Eb2N1bWVudHMvR2l0SHViL01hcGZvbGlvL0dlb0ZvcmNlL0dlb0FuZ3VsYXIvYXBwL3NjcmlwdHMvc2VydmljZXMvVmVjdG9yL3Jlc291cmNlLmpzIiwiL1VzZXJzL3J5YW53aGl0bGV5L0RvY3VtZW50cy9HaXRIdWIvTWFwZm9saW8vR2VvRm9yY2UvR2VvQW5ndWxhci9hcHAvc2NyaXB0cy9zZXJ2aWNlcy9WZWN0b3IvdmVjdG9yLmpzIiwiL3Vzci9sb2NhbC9saWIvbm9kZV9tb2R1bGVzL3dhdGNoaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9idWZmZXIvaW5kZXguanMiLCIvdXNyL2xvY2FsL2xpYi9ub2RlX21vZHVsZXMvd2F0Y2hpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2J1ZmZlci9ub2RlX21vZHVsZXMvYmFzZTY0LWpzL2xpYi9iNjQuanMiLCIvdXNyL2xvY2FsL2xpYi9ub2RlX21vZHVsZXMvd2F0Y2hpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2J1ZmZlci9ub2RlX21vZHVsZXMvaWVlZTc1NC9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaHFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbFNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbklBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDamJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlnQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDam9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOWdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNseUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9UQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3VUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4UkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDanBDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4SEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IE5pY2hvbGFzIEhhbGxhaGFuIDxuaGFsbGFoYW5Ac3BhdGlhbGRldi5jb20+XG4gKiAgICAgICBvbiA4LzYvMTQuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cblxufTtcbiIsIi8qKlxuICogQ3JlYXRlZCBieSBOaWNob2xhcyBIYWxsYWhhbiA8bmhhbGxhaGFuQHNwYXRpYWxkZXYuY29tPlxuICogICAgICAgb24gOC82LzE0LlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXG4gIC8qKlxuICAgKiBCYXNlbWFwcyBQYW5lbCBMaXN0XG4gICAqXG4gICAqIExpc3Qgb2YgYmFzZW1hcHMgdGhhdCBnZXQgc2hvd24gaW4gdGhlIEJhc2VtYXBzIFBhbmVsLiBFZGl0IHRoaXMgdG8gYWRkIG9yIHJlbW92ZVxuICAgKiBiYXNlbWFwcyB0aGF0IHRoZSB1c2VyIHdpbGwgc2VlIGFzIGNob2ljZXMuIEFsbCBiYXNlbWFwcywgaW5jbHVkaW5nIG9uZXMgbm90IGluIHRoaXNcbiAgICogbGlzdCwgY2FuIHN0aWxsIGJlIG1hbnVhbGx5IHJlZmVyZW5jZWQgaW4gdGhlIHVybC4gVGhpcyBpcyBqdXN0IGZvciB0aGUgVXNlciBJbnRlcmZhY2UuXG4gICAqL1xuICBiYXNlbWFwczogW1xuICAgICdvc21ob3QnLFxuICAgICdvc20nLFxuICAgICdzYXRlbGxpdGUnLFxuICAgICdvcnRobycsXG4gICAgJ3RvbmVyJyxcbiAgICAnZGFyaycsXG4gICAgJ2dpdGh1YicsXG4gICAgJ21vemlsbGEnLFxuICAgICdncmVlbicsXG4gICAgJ29zbWN5Y2xlJyxcbiAgICAnb3NtdHJhbnNwb3J0JyxcbiAgICAnb3NtbWFwcXVlc3QnLFxuICAgICduYXRnZW8nLFxuICAgICd1c2dzdG9wbycsXG4gICAgJ2Vzcml0b3BvJyxcbiAgICAnb2NlYW4nLFxuICAgICdsaWdodGdyYXknLFxuICAgICd3YXRlcmNvbG9yJ1xuICBdLFxuXG5cbiAgLyoqXG4gICAqIEJhc2VtYXBzXG4gICAqXG4gICAqIEFsbCBiYXNlbWFwIGFsaWFzZXMgdGhhdCBjYW4gYmUgcmVmZXJyZWQgdG8gaW4gdGhlIHVybC4gVGhlIGNvcnJlc3BvbmRpbmdcbiAgICogcGF0aCB0byB0aGUgdGh1bWJuYWlsIGluIHRoZSBCYXNlbWFwcyBQYW5lbCBzaG91bGQgYmU6XG4gICAqICAgIGltYWdlcy97YWxpYXNOYW1lfS5qcGdcbiAgICpcbiAgICovXG5cbiAgb3NtaG90OiB7XG4gICAgdXJsOiAnaHR0cDovL3tzfS50aWxlLm9wZW5zdHJlZXRtYXAuZnIvaG90L3t6fS97eH0ve3l9LnBuZycsXG4gICAgbmFtZTogJ0h1bWFuaXRhcmlhbiBPcGVuU3RyZWV0TWFwJyxcbiAgICB0eXBlOiAnYmFzZW1hcCdcbiAgfSxcblxuICByZWRjcm9zczoge1xuICAgIHVybDogJ2h0dHBzOi8ve3N9LnRpbGVzLm1hcGJveC5jb20vdjMvYW1lcmljYW5yZWRjcm9zcy5oY2ppMjJkZS97en0ve3h9L3t5fS5wbmcnLFxuICAgIG5hbWU6ICdSZWQgQ3Jvc3MnLFxuICAgIHR5cGU6ICdiYXNlbWFwJ1xuICB9LFxuXG4gIHNhdGVsbGl0ZToge1xuICAgIHVybDogJ2h0dHBzOi8ve3N9LnRpbGVzLm1hcGJveC5jb20vdjMvZXhhbXBsZXMubWFwLXFmeXJ4NXI4L3t6fS97eH0ve3l9LnBuZycsXG4gICAgbmFtZTogJ01hcGJveCBTYXRlbGxpdGUnLFxuICAgIHR5cGU6ICdiYXNlbWFwJ1xuICB9LFxuXG4gIG1vemlsbGE6IHtcbiAgICB1cmw6ICdodHRwOi8ve3N9LnRpbGVzLm1hcGJveC5jb20vdjMvbW96aWxsYS13ZWJwcm9kLmU5MWVmOGIzL3t6fS97eH0ve3l9LnBuZycsXG4gICAgbmFtZTogJ01vemlsbGEnLFxuICAgIHR5cGU6ICdiYXNlbWFwJ1xuICB9LFxuXG4gIGdpdGh1Yjoge1xuICAgIHVybDogJ2h0dHA6Ly97c30udGlsZXMubWFwYm94LmNvbS92My9naXRodWIubWFwLXhncTJzdnJ6L3t6fS97eH0ve3l9LnBuZycsXG4gICAgbmFtZTogJ0dpdGh1YicsXG4gICAgdHlwZTogJ2Jhc2VtYXAnXG4gIH0sXG5cbiAgZ3JlZW46IHtcbiAgICB1cmw6ICdodHRwOi8ve3N9LnRpbGVzLm1hcGJveC5jb20vdjMvZXhhbXBsZXMubWFwLTNnaXN1cGl1L3t6fS97eH0ve3l9LnBuZycsXG4gICAgbmFtZTogJ0dyZWVuIFRoZW1lJyxcbiAgICB0eXBlOiAnYmFzZW1hcCdcbiAgfSxcblxuICBkYXJrOiB7XG4gICAgdXJsOiAnaHR0cDovL3tzfS50aWxlcy5tYXBib3guY29tL3YzL3NwYXRpYWxkZXYubWFwLWM5ejJjeWVmL3t6fS97eH0ve3l9LnBuZycsXG4gICAgbmFtZTogJ0RhcmsgVGhlbWUnLFxuICAgIHR5cGU6ICdiYXNlbWFwJ1xuICB9LFxuXG4gIG9zbToge1xuICAgIHVybDogJ2h0dHA6Ly97c30udGlsZS5vc20ub3JnL3t6fS97eH0ve3l9LnBuZycsXG4gICAgbmFtZTogJ1N0YW5kYXJkIE9wZW5TdHJlZXRNYXAnLFxuICAgIHR5cGU6ICdiYXNlbWFwJ1xuICB9LFxuXG4gIG9zbWN5Y2xlOiB7XG4gICAgdXJsOiAnaHR0cDovL3tzfS50aWxlLm9wZW5jeWNsZW1hcC5vcmcvY3ljbGUve3p9L3t4fS97eX0ucG5nJyxcbiAgICBuYW1lOiAnQ3ljbGUgT3BlblN0cmVldE1hcCcsXG4gICAgdHlwZTogJ2Jhc2VtYXAnXG4gIH0sXG5cbiAgb3NtdHJhbnNwb3J0OiB7XG4gICAgdXJsOiAnaHR0cDovL3tzfS50aWxlMi5vcGVuY3ljbGVtYXAub3JnL3RyYW5zcG9ydC97en0ve3h9L3t5fS5wbmcnLFxuICAgIG5hbWU6ICdUcmFuc3BvcnQgT3BlblN0cmVldE1hcCcsXG4gICAgdHlwZTogJ2Jhc2VtYXAnXG4gIH0sXG5cbiAgb3NtbWFwcXVlc3Q6IHtcbiAgICB1cmw6ICdodHRwOi8vb3RpbGUzLm1xY2RuLmNvbS90aWxlcy8xLjAuMC9vc20ve3p9L3t4fS97eX0ucG5nJyxcbiAgICBuYW1lOiAnTWFwUXVlc3QgT3BlblN0cmVldE1hcCcsXG4gICAgdHlwZTogJ2Jhc2VtYXAnXG4gIH0sXG5cbiAgbmF0Z2VvOiB7XG4gICAgdXJsOiAnaHR0cDovL3NlcnZpY2VzLmFyY2dpc29ubGluZS5jb20vQXJjR0lTL3Jlc3Qvc2VydmljZXMvTmF0R2VvX1dvcmxkX01hcC9NYXBTZXJ2ZXIvdGlsZS97en0ve3l9L3t4fScsXG4gICAgbmFtZTogJ05hdGlvbmFsIEdlb2dyYXBoaWMnLFxuICAgIHR5cGU6ICdiYXNlbWFwJ1xuICB9LFxuXG4gIHVzZ3N0b3BvOiB7XG4gICAgdXJsOiAnaHR0cDovL3NlcnZpY2VzLmFyY2dpc29ubGluZS5jb20vQXJjR0lTL3Jlc3Qvc2VydmljZXMvVVNBX1RvcG9fTWFwcy9NYXBTZXJ2ZXIvdGlsZS97en0ve3l9L3t4fScsXG4gICAgbmFtZTogJ1VTR1MgVG9wb2dyYXBoaWMnLFxuICAgIHR5cGU6ICdiYXNlbWFwJ1xuICB9LFxuXG4gIG9ydGhvOiB7XG4gICAgdXJsOiAnaHR0cDovL3NlcnZpY2VzLmFyY2dpc29ubGluZS5jb20vQXJjR0lTL3Jlc3Qvc2VydmljZXMvV29ybGRfSW1hZ2VyeS9NYXBTZXJ2ZXIvdGlsZS97en0ve3l9L3t4fScsXG4gICAgbmFtZTogJ09ydGhvZ3JhcGhpYycsXG4gICAgdHlwZTogJ2Jhc2VtYXAnXG4gIH0sXG5cbiAgb2NlYW46IHtcbiAgICB1cmw6ICdodHRwOi8vc2VydmljZXMuYXJjZ2lzb25saW5lLmNvbS9BcmNHSVMvcmVzdC9zZXJ2aWNlcy9PY2Vhbi9Xb3JsZF9PY2Vhbl9CYXNlL01hcFNlcnZlci90aWxlL3t6fS97eX0ve3h9JyxcbiAgICBuYW1lOiAnT2NlYW4gQmF0aHltZXRyaWMnLFxuICAgIHR5cGU6ICdiYXNlbWFwJ1xuICB9LFxuXG4gIGxpZ2h0Z3JheToge1xuICAgIHVybDogJ2h0dHA6Ly9zZXJ2aWNlcy5hcmNnaXNvbmxpbmUuY29tL0FyY0dJUy9yZXN0L3NlcnZpY2VzL0NhbnZhcy9Xb3JsZF9MaWdodF9HcmF5X0Jhc2UvTWFwU2VydmVyL3RpbGUve3p9L3t5fS97eH0nLFxuICAgIG5hbWU6ICdMaWdodCBHcmF5JyxcbiAgICB0eXBlOiAnYmFzZW1hcCdcbiAgfSxcblxuICBlc3JpdG9wbzoge1xuICAgIHVybDogJ2h0dHA6Ly9zZXJ2aWNlcy5hcmNnaXNvbmxpbmUuY29tL0FyY0dJUy9yZXN0L3NlcnZpY2VzL1dvcmxkX1RvcG9fTWFwL01hcFNlcnZlci90aWxlL3t6fS97eX0ve3h9JyxcbiAgICBuYW1lOiAnRXNyaSBUb3BvZ3JhcGhpYycsXG4gICAgdHlwZTogJ2Jhc2VtYXAnXG4gIH0sXG5cbiAgdG9uZXI6IHtcbiAgICB1cmw6ICdodHRwOi8ve3N9LnRpbGUuc3RhbWVuLmNvbS90b25lci97en0ve3h9L3t5fS5wbmcnLFxuICAgIG5hbWU6ICdTdGFtZW4gVG9uZXInLFxuICAgIHR5cGU6ICdiYXNlbWFwJ1xuICB9LFxuXG4gIHdhdGVyY29sb3I6IHtcbiAgICB1cmw6ICdodHRwOi8ve3N9LnRpbGUuc3RhbWVuLmNvbS93YXRlcmNvbG9yL3t6fS97eH0ve3l9LnBuZycsXG4gICAgbmFtZTogJ1N0YW1lbiBXYXRlcmNvbG9yJyxcbiAgICB0eXBlOiAnYmFzZW1hcCdcbiAgfVxuXG59O1xuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IE5pY2hvbGFzIEhhbGxhaGFuIDxuaGFsbGFoYW5Ac3BhdGlhbGRldi5jb20+XG4gKiAgICAgICBvbiA4LzYvMTQuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHVzZ3NlYXJ0aHF1YWtlOiB7XG4gICAgdHlwZTogJ2dlb2pzb24nLFxuICAgIHRoZW1lOiAnZGlzYXN0ZXInLFxuICAgIHVybDogJ2h0dHA6Ly9lYXJ0aHF1YWtlLnVzZ3MuZ292L2VhcnRocXVha2VzL2ZlZWQvdjEuMC9zdW1tYXJ5L3NpZ25pZmljYW50X3dlZWsuZ2VvanNvbicsXG4gICAgcHJvcGVydGllczoge1xuICAgICAgJ3RpdGxlJzogJ1VTR1MgUmVhbHRpbWUgRWFydGhxdWFrZXMgRmVlZCAoV2VlayknXG5cbiAgICB9XG4gIH0sXG5cbiAgcHJlY2lwaXRhdGlvbjoge1xuICAgIG5hbWU6ICdQcmVjaXBpdGF0aW9uJyxcbiAgICB0eXBlOiAneHl6JyxcbiAgICB0aGVtZTogJ2Rpc2FzdGVyJyxcbiAgICB1cmw6ICdodHRwOi8ve3N9LnRpbGUub3BlbndlYXRoZXJtYXAub3JnL21hcC9wcmVjaXBpdGF0aW9uL3t6fS97eH0ve3l9LnBuZycsXG4gICAgb3BhY2l0eTogMC41XG4gIH0sXG5cbiAgcmFpbjoge1xuICAgIG5hbWU6ICdSYWluJyxcbiAgICB0eXBlOiAneHl6JyxcbiAgICB0aGVtZTogJ2Rpc2FzdGVyJyxcbiAgICB1cmw6ICdodHRwOi8ve3N9LnRpbGUub3BlbndlYXRoZXJtYXAub3JnL21hcC9yYWluL3t6fS97eH0ve3l9LnBuZydcbiAgfVxuXG59OyIsIi8qKlxuICogQ3JlYXRlZCBieSBOaWNob2xhcyBIYWxsYWhhbiA8bmhhbGxhaGFuQHNwYXRpYWxkZXYuY29tPlxuICogICAgICAgb24gOC82LzE0LlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXG5cbiAgc25vdzoge1xuICAgIG5hbWU6ICdTbm93JyxcbiAgICB0eXBlOiAneHl6JyxcbiAgICB0aGVtZTogJ290aGVyJyxcbiAgICB1cmw6ICdodHRwOi8ve3N9LnRpbGUub3BlbndlYXRoZXJtYXAub3JnL21hcC9zbm93L3t6fS97eH0ve3l9LnBuZydcbiAgfSxcblxuICBhaXJ0ZW1wOiB7XG4gICAgbmFtZTogJ05PQUEgQWlyIFRlbXBlcmF0dXJlJyxcbiAgICB0eXBlOiAnd21zJyxcbiAgICB0aGVtZTogJ290aGVyJyxcbiAgICB1cmw6ICdodHRwOi8vbm93Y29hc3Qubm9hYS5nb3Yvd21zL2NvbS5lc3JpLndtcy5Fc3JpbWFwL29icycsXG4gICAgdHJhbnNwYXJlbnQ6IHRydWUsICAgICAgLy8gZGVmYXVsdCB0cnVlXG4gICAgZm9ybWF0OiAnaW1hZ2UvcG5nJywgICAgLy8gZGVmYXVsdCAnaW1hZ2UvcG5nJ1xuICAgIGxheWVyczogJ09CU19NRVRfVEVNUCcsXG4gICAgcHJvcGVydGllczoge1xuICAgICAgbGVnZW5kOiBcIlwiXG4gICAgfVxuICB9LFxuXG4gIHByZXNzdXJlY29udG91cjoge1xuICAgIG5hbWU6ICdQcmVzc3VyZSBDb250b3VyJyxcbiAgICB0eXBlOiAneHl6JyxcbiAgICB0aGVtZTogJ290aGVyJyxcbiAgICB1cmw6ICdodHRwOi8ve3N9LnRpbGUub3BlbndlYXRoZXJtYXAub3JnL21hcC9wcmVzc3VyZV9jbnRyL3t6fS97eH0ve3l9LnBuZycsXG4gICAgb3BhY2l0eTogMC45XG4gIH0sXG5cbiAgcHJlc3N1cmU6IHtcbiAgICBuYW1lOiAnUHJlc3N1cmUnLFxuICAgIHR5cGU6ICd4eXonLFxuICAgIHRoZW1lOiAnb3RoZXInLFxuICAgIHVybDogJ2h0dHA6Ly97c30udGlsZS5vcGVud2VhdGhlcm1hcC5vcmcvbWFwL3ByZXNzdXJlL3t6fS97eH0ve3l9LnBuZydcbiAgfSxcblxuICB0ZW1wZXJhdHVyZToge1xuICAgIG5hbWU6ICdUZW1wZXJhdHVyZScsXG4gICAgdHlwZTogJ3h5eicsXG4gICAgdGhlbWU6ICdvdGhlcicsXG4gICAgdXJsOiAnaHR0cDovL3tzfS50aWxlLm9wZW53ZWF0aGVybWFwLm9yZy9tYXAvdGVtcC97en0ve3h9L3t5fS5wbmcnXG4gIH0sXG5cbiAgd2luZDoge1xuICAgIG5hbWU6ICdXaW5kJyxcbiAgICB0eXBlOiAneHl6JyxcbiAgICB0aGVtZTogJ290aGVyJyxcbiAgICB1cmw6ICdodHRwOi8ve3N9LnRpbGUub3BlbndlYXRoZXJtYXAub3JnL21hcC93aW5kL3t6fS97eH0ve3l9LnBuZydcbiAgfSxcblxuICBjbG91ZHM6IHtcbiAgICBuYW1lOiAnQ2xvdWQgQ292ZXInLFxuICAgIHR5cGU6ICd4eXonLFxuICAgIHRoZW1lOiAnb3RoZXInLFxuICAgIHVybDogJ2h0dHA6Ly97c30udGlsZS5vcGVud2VhdGhlcm1hcC5vcmcvbWFwL2Nsb3Vkc19jbHMve3p9L3t4fS97eX0ucG5nJyxcbiAgICBvcGFjaXR5OiAwLjUgLy8gb3B0aW9uYWwuIG9wYWNpdHkgaXMgMC41IGlmIG5vdCBzcGVjaWZpZWRcbiAgfSxcblxuICBwcmVjaXBpdGF0aW9uY2xhc3NpYzoge1xuICAgIG5hbWU6ICdQcmVjaXBpdGF0aW9uIChDbGFzc2ljKScsXG4gICAgdHlwZTogJ3h5eicsXG4gICAgdGhlbWU6ICdvdGhlcicsXG4gICAgdXJsOiAnaHR0cDovL3tzfS50aWxlLm9wZW53ZWF0aGVybWFwLm9yZy9tYXAvcHJlY2lwaXRhdGlvbl9jbHMve3p9L3t4fS97eX0ucG5nJyxcbiAgICBvcGFjaXR5OiAwLjRcbiAgfSxcblxuICByYWluY2xhc3NpYzoge1xuICAgIG5hbWU6ICdSYWluIChDbGFzc2ljKScsXG4gICAgdHlwZTogJ3h5eicsXG4gICAgdGhlbWU6ICdvdGhlcicsXG4gICAgdXJsOiAnaHR0cDovL3tzfS50aWxlLm9wZW53ZWF0aGVybWFwLm9yZy9tYXAvcmFpbl9jbHMve3p9L3t4fS97eX0ucG5nJ1xuICB9LFxuXG4gIGxhY2NvbW11bml0aWVzOiB7XG4gICAgbmFtZTogJ0xBQyBDb21tdW5pdGllcycsXG4gICAgdHlwZTogJ2dlb2pzb24nLFxuICAgIHRoZW1lOiAnb3RoZXInLFxuICAgIHVybDogJ2h0dHBzOi8vZ2lzdC5naXRodWJ1c2VyY29udGVudC5jb20vYW5vbnltb3VzL2Q1OGU1MWQ2MTJhZGQ2NDgzMjU3L3Jhdy9MQUNfQ29tbXVuaXRpZXNfc3R5bGVkLmdlb2pzb24nXG4gIH1cblxufTtcbiIsIi8qKlxuICogQ3JlYXRlZCBieSBOaWNob2xhcyBIYWxsYWhhbiA8bmhhbGxhaGFuQHNwYXRpYWxkZXYuY29tPlxuICogICAgICAgb24gOC82LzE0LlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXG4gIC8vTm90ZSAtIGFzIG9mIEFwcmlsIDEyLCAyMDE1LCB0aGlzIGlzIHJldHVybmluZyBlbXB0eSBpbWFnZXNcbiAgbGFuZGNvdmVyOiB7XG4gICAgbmFtZTogJ01PRElTIExhbmRjb3ZlciAyMDExJyxcbiAgICB0eXBlOiAnd21zJyxcbiAgICB0aGVtZTogJ3Byb2plY3QnLFxuICAgIHVybDogJ2h0dHA6Ly9hZ3Muc2VydmlybGFicy5uZXQvYXJjZ2lzL3Jlc3Qvc2VydmljZXMvR2xvYmFsL01PRElTX0xhbmRjb3Zlcl9UeXBlMV8yMDExL01hcFNlcnZlci9XTVNTZXJ2ZXInLFxuICAgIGxheWVyczogJzAnLFxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgIGxlZ2VuZDogXCJcIlxuICAgIH1cbiAgfVxuXG59OyIsIi8qKlxuICogQ3JlYXRlZCBieSBOaWNob2xhcyBIYWxsYWhhbiA8bmhhbGxhaGFuQHNwYXRpYWxkZXYuY29tPlxuICogICAgICAgb24gOC82LzE0LlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBnZGFjczoge1xuICAgIG5hbWU6ICdHREFDUzogR2xvYmFsIERpc2FzdGVyIEFsZXJ0IGFuZCBDb29yZGluYXRpb24gU3lzdGVtJyxcbiAgICB0eXBlOiAna21sJyxcbiAgICB0aGVtZTogJ3Byb2plY3RoZWFsdGgnLFxuICAgIHVybDogJ2h0dHA6Ly93d3cuZ2RhY3Mub3JnL3htbC9nZGFjcy5rbWwnLFxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgIGxlZ2VuZDogJydcbiAgICB9XG4gIH1cbn07IiwiLyoqXG4gKiBDcmVhdGVkIGJ5IE5pY2hvbGFzIEhhbGxhaGFuIDxuaGFsbGFoYW5Ac3BhdGlhbGRldi5jb20+XG4gKiAgICAgICBvbiA4LzYvMTQuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cbn07IiwiLyoqXG4gKiBDcmVhdGVkIGJ5IFJ5YW4gV2hpdGxleSA8cndoaXRsZXlAc3BhdGlhbGRldi5jb20+XG4gKiAgICAgICBvbiAxMi8xNS8xNC5cbiAqL1xuXG4vL0RlZmF1bHQgb3BhY2l0eSBvZiBHQURNIHBvbHlnb25zXG52YXIgb3BhY2l0eSA9IFwiMC41XCI7XG5cbnZhciBnYWRtMCA9IHtcbiAgdHlwZTogJ3BiZicsXG4gIG5hbWU6ICdHQURNMCcsXG4gIC8vdXJsOiBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9zZXJ2aWNlcy9wb3N0Z2lzL2dhZG0wL2dlb21fc2ltcGxpZnlfbWVkL3ZlY3Rvci10aWxlcy97en0ve3h9L3t5fS5wYmY/ZmllbGRzPWd1aWQ6OmNoYXJhY3RlciB2YXJ5aW5nLG5hbWVfMCx5ZWFyJmxhYmVscG9pbnRzPXRydWVcIixcbiAgLy91cmw6IFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL3NlcnZpY2VzL3Bvc3RnaXMvZ2FkbTAvZ2VvbV9zaW1wbGlmeV9tZWQvdmVjdG9yLXRpbGVzL3t6fS97eH0ve3l9LnBiZj9maWVsZHM9Z3VpZDo6Y2hhcmFjdGVyIHZhcnlpbmcsbmFtZV8wLHllYXJcIixcblxuICAvL3VybDogXCIuLi9zZXJ2aWNlcy92ZWN0b3ItdGlsZXMvZ2FkbTBfbGFiZWxzXzIwMTQve3p9L3t4fS97eX0ucGJmXCIsXG4gIC8vdXJsOiBcImh0dHBzOi8vczMtdXMtd2VzdC0yLmFtYXpvbmF3cy5jb20vdmVjdG9yLXRpbGVzL2dhZG0wL3t6fS97eH0ve3l9LnBiZlwiLFxuICAvL3VybDogXCJodHRwOi8ve3N9LnNwYXRpYWxkZXZ0aWxlcy5jb20vdGlsZXMve3p9L3t4fS97eX0ucGJmXCIsXG4gIHVybDogXCJodHRwOi8ve3N9LnNwYXRpYWxkZXZ0aWxlcy5jb20vZ2FkbTAve3p9L3t4fS97eX0ucGJmXCIsXG4gIGRldGFpbHNVcmw6ICdzZXJ2aWNlcy9jdXN0b20vY3VzdG9tX29wZXJhdGlvbj9uYW1lPWdldDp0aGVtZWJ5Z3VpZCZmb3JtYXQ9anNvbiZndWlkcz06Z3VpZHMmZ2FkbV9sZXZlbD06bGV2ZWwmZmlsdGVycz06ZmlsdGVycycsXG4gIGRlYnVnOiBmYWxzZSxcbiAgY2xpY2thYmxlTGF5ZXJzOiBbXCJHQURNXzIwMTRcIl0sXG5cbiAgZ2V0SURGb3JMYXllckZlYXR1cmU6IGZ1bmN0aW9uIChmZWF0dXJlKSB7XG4gICAgcmV0dXJuIGZlYXR1cmUucHJvcGVydGllcy5ndWlkO1xuICAgIC8vcmV0dXJuIGZlYXR1cmUucHJvcGVydGllcy5uYW1lXzA7XG4gIH0sXG4gIG11dGV4VG9nZ2xlOiB0cnVlLFxuXG4gIC8vVGhlIGZpbHRlciBmdW5jdGlvbiBkb2VzIDIgdGhpbmdzOiAxKSBNZXJnZSBpbiBleHRlcm5hbCBwcm9wZXJ0aWVzIHRoYXQgY2FuIGJlIHVzZWQgZm9yIGNob3JvcGxldGhpbmcuICAyKSBGaWx0ZXIgb3V0IGZlYXR1cmVzIHRoYXQgZG9uJ3QgaGF2ZSBFQ09TIHByb3BlcnRpZXNcbiAgZmlsdGVyOiBmdW5jdGlvbih2dGYsICRyb290U2NvcGUpe1xuICAgIHZhciBkYXRhID0gJHJvb3RTY29wZS52dERhdGE7XG5cbiAgICAvL1Nob3cgb25seSBjb3VudHJpZXMgd2l0aCBhY3RpdmUgdGhlbWUgcHJvcGVydGllc1xuICAgIGlmKGRhdGEgJiYgZGF0YVt2dGYucHJvcGVydGllcy5ndWlkXSl7XG4gICAgICB2YXIgdGhlbWUgPSAkcm9vdFNjb3BlLiRzdGF0ZVBhcmFtcy50aGVtZTtcbiAgICAgIHZ0Zi5wcm9wZXJ0aWVzLnRoZW1lID0gdGhlbWU7XG4gICAgICB2dGYucHJvcGVydGllcy5lY29zX3Byb3BlcnRpZXMgPSB7fTtcbiAgICAgIHZ0Zi5wcm9wZXJ0aWVzLmVjb3NfcHJvcGVydGllc1t0aGVtZV0gPSBkYXRhW3Z0Zi5wcm9wZXJ0aWVzLmd1aWRdO1xuICAgICAgLy9yZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTsgLy9kcmF3IGZlYXR1cmVcbiAgfSxcblxuICAvKipcbiAgICogV2hlbiB3ZSB3YW50IHRvIGxpbmsgZXZlbnRzIGJldHdlZW4gbGF5ZXJzLCBsaWtlIGNsaWNraW5nIG9uIGEgbGFiZWwgYW5kIGFcbiAgICogY29ycmVzcG9uZGluZyBwb2x5Z29uIGZyZWF0dXJlLCB0aGlzIHdpbGwgcmV0dXJuIHRoZSBjb3JyZXNwb25kaW5nIG1hcHBpbmdcbiAgICogYmV0d2VlbiBsYXllcnMuIFRoaXMgcHJvdmlkZXMga25vd2xlZGdlIG9mIHdoaWNoIG90aGVyIGZlYXR1cmUgYSBnaXZlbiBmZWF0dXJlXG4gICAqIGlzIGxpbmtlZCB0by5cbiAgICpcbiAgICogQHBhcmFtIGxheWVyTmFtZSAgdGhlIGxheWVyIHdlIHdhbnQgdG8ga25vdyB0aGUgbGlua2VkIGxheWVyIGZyb21cbiAgICogQHJldHVybnMge3N0cmluZ30gcmV0dXJucyBjb3JyZXNwb25kaW5nIGxpbmtlZCBsYXllclxuICAgKi9cbiAgbGF5ZXJMaW5rOiBmdW5jdGlvbiAobGF5ZXJOYW1lKSB7XG4gICAgaWYgKGxheWVyTmFtZS5pbmRleE9mKCdfbGFiZWwnKSA+IC0xKSB7XG4gICAgICByZXR1cm4gbGF5ZXJOYW1lLnJlcGxhY2UoJ19sYWJlbCcsICcnKTtcbiAgICB9XG4gICAgcmV0dXJuIGxheWVyTmFtZSArICdfbGFiZWwnO1xuICB9LFxuXG4gIHN0eWxlOiBnZXRUaGVtZVN0eWxlLFxuXG4gIG9uQ2xpY2s6IGZ1bmN0aW9uKGV2dCwgJGh0dHAsICRyb290U2NvcGUsIFBCRk9iamVjdCkge1xuXG4gICAgaWYoZXZ0ICYmIGV2dC5mZWF0dXJlICYmIGV2dC5mZWF0dXJlLmlkKXtcbiAgICAgIC8vRG8gdGhlIG9uY2xpY2sgdGhpbmdcbiAgICAgIFBCRk9iamVjdC5mZXRjaEZlYXR1cmVEZXRhaWxzKGV2dC5mZWF0dXJlLmlkLCAwLCBldnQuZmVhdHVyZS5wcm9wZXJ0aWVzLm5hbWVfMCk7XG4gICAgfVxuICB9LFxuICBvblNlbGVjdDogZnVuY3Rpb24odnRmLCBQQkZPYmplY3Qpe1xuICAgIC8vV2hlbiBhIHNlbGVjdGlvbiBoYXMgY2hhbmdlZCAobGlrZXkgd2hlbiBhIGxhYmVsIHdhcyBjbGlja2VkIGFuZCB0aGUgY29ycmVzcG9uZGluZyBmZWF0dXJlIHNlbGVjdGVkKVxuICAgIGlmKHZ0ZiAmJiB2dGYuaWQpe1xuICAgICAgLy9EbyB0aGUgb25jbGljayB0aGluZ1xuICAgICAgUEJGT2JqZWN0LmZldGNoRmVhdHVyZURldGFpbHModnRmLmlkLCAwLCB2dGYucHJvcGVydGllcy5uYW1lXzApO1xuICAgIH1cbiAgfSxcbiAgbGVnZW5kOiBmdW5jdGlvbigpe1xuXG4gIH1cbn1cblxudmFyIGdhZG0xID0ge1xuICB0eXBlOiAncGJmJyxcbiAgbmFtZTogJ0dBRE0xJyxcbiAgLy91cmw6IFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL3NlcnZpY2VzL3Bvc3RnaXMvZ2FkbTAvZ2VvbV9zaW1wbGlmeV9tZWQvdmVjdG9yLXRpbGVzL3t6fS97eH0ve3l9LnBiZj9maWVsZHM9Z3VpZDo6Y2hhcmFjdGVyIHZhcnlpbmcsbmFtZV8wLHllYXImbGFiZWxwb2ludHM9dHJ1ZVwiLFxuICAvL3VybDogXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvc2VydmljZXMvcG9zdGdpcy9nYWRtMC9nZW9tX3NpbXBsaWZ5X21lZC92ZWN0b3ItdGlsZXMve3p9L3t4fS97eX0ucGJmP2ZpZWxkcz1ndWlkOjpjaGFyYWN0ZXIgdmFyeWluZyxuYW1lXzAseWVhclwiLFxuXG4gIHVybDogXCJodHRwOi8ve3N9LnNwYXRpYWxkZXZ0aWxlcy5jb20vZ2FkbTEve3p9L3t4fS97eX0ucGJmXCIsXG4gIGRldGFpbHNVcmw6ICdzZXJ2aWNlcy9jdXN0b20vY3VzdG9tX29wZXJhdGlvbj9uYW1lPWdldDp0aGVtZWJ5Z3VpZCZmb3JtYXQ9anNvbiZndWlkcz06Z3VpZHMmZ2FkbV9sZXZlbD0xJmZpbHRlcnM9OmZpbHRlcnMnLFxuICBkZWJ1ZzogZmFsc2UsXG4gIGNsaWNrYWJsZUxheWVyczogW1wiR0FETV8yMDE0XCJdLFxuXG4gIGdldElERm9yTGF5ZXJGZWF0dXJlOiBmdW5jdGlvbiAoZmVhdHVyZSkge1xuICAgIHJldHVybiBmZWF0dXJlLnByb3BlcnRpZXMuZ3VpZDtcbiAgfSxcbiAgbXV0ZXhUb2dnbGU6IHRydWUsXG5cbiAgLyoqXG4gICAqIFRoZSBmaWx0ZXIgZnVuY3Rpb24gZ2V0cyBjYWxsZWQgd2hlbiBpdGVyYXRpbmcgdGhvdWdoIGVhY2ggdmVjdG9yIHRpbGUgZmVhdHVyZSAodnRmKS4gWW91IGhhdmUgYWNjZXNzXG4gICAqIHRvIGV2ZXJ5IHByb3BlcnR5IGFzc29jaWF0ZWQgd2l0aCBhIGdpdmVuIGZlYXR1cmUgKHRoZSBmZWF0dXJlLCBhbmQgdGhlIGxheWVyKS4gWW91IGNhbiBhbHNvIGZpbHRlclxuICAgKiBiYXNlZCBvZiB0aGUgY29udGV4dCAoZWFjaCB0aWxlIHRoYXQgdGhlIGZlYXR1cmUgaXMgZHJhd24gb250bykuXG4gICAqXG4gICAqIFJldHVybmluZyBmYWxzZSBza2lwcyBvdmVyIHRoZSBmZWF0dXJlIGFuZCBpdCBpcyBub3QgZHJhd24uXG4gICAqXG4gICAqIEBwYXJhbSBmZWF0dXJlXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgZmlsdGVyOiBmdW5jdGlvbih2dGYsICRyb290U2NvcGUpe1xuICAgIHZhciBkYXRhID0gJHJvb3RTY29wZS52dERhdGE7XG5cbiAgICBpZihkYXRhICYmIGRhdGFbdnRmLnByb3BlcnRpZXMuZ3VpZF0pe1xuICAgICAgdmFyIHRoZW1lID0gJHJvb3RTY29wZS4kc3RhdGVQYXJhbXMudGhlbWU7XG4gICAgICB2dGYucHJvcGVydGllcy50aGVtZSA9IHRoZW1lO1xuICAgICAgdnRmLnByb3BlcnRpZXMuZWNvc19wcm9wZXJ0aWVzID0ge307XG4gICAgICB2dGYucHJvcGVydGllcy5lY29zX3Byb3BlcnRpZXNbdGhlbWVdID0gZGF0YVt2dGYucHJvcGVydGllcy5ndWlkXTtcbiAgICAgIC8vcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFdoZW4gd2Ugd2FudCB0byBsaW5rIGV2ZW50cyBiZXR3ZWVuIGxheWVycywgbGlrZSBjbGlja2luZyBvbiBhIGxhYmVsIGFuZCBhXG4gICAqIGNvcnJlc3BvbmRpbmcgcG9seWdvbiBmcmVhdHVyZSwgdGhpcyB3aWxsIHJldHVybiB0aGUgY29ycmVzcG9uZGluZyBtYXBwaW5nXG4gICAqIGJldHdlZW4gbGF5ZXJzLiBUaGlzIHByb3ZpZGVzIGtub3dsZWRnZSBvZiB3aGljaCBvdGhlciBmZWF0dXJlIGEgZ2l2ZW4gZmVhdHVyZVxuICAgKiBpcyBsaW5rZWQgdG8uXG4gICAqXG4gICAqIEBwYXJhbSBsYXllck5hbWUgIHRoZSBsYXllciB3ZSB3YW50IHRvIGtub3cgdGhlIGxpbmtlZCBsYXllciBmcm9tXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IHJldHVybnMgY29ycmVzcG9uZGluZyBsaW5rZWQgbGF5ZXJcbiAgICovXG4gIGxheWVyTGluazogZnVuY3Rpb24gKGxheWVyTmFtZSkge1xuICAgIGlmIChsYXllck5hbWUuaW5kZXhPZignX2xhYmVsJykgPiAtMSkge1xuICAgICAgcmV0dXJuIGxheWVyTmFtZS5yZXBsYWNlKCdfbGFiZWwnLCAnJyk7XG4gICAgfVxuICAgIHJldHVybiBsYXllck5hbWUgKyAnX2xhYmVsJztcbiAgfSxcblxuICBzdHlsZTogZ2V0VGhlbWVTdHlsZSxcblxuICBvbkNsaWNrOiBmdW5jdGlvbihldnQsICRodHRwLCAkcm9vdFNjb3BlLCBQQkZPYmplY3QpIHtcblxuICAgIGlmKGV2dCAmJiBldnQuZmVhdHVyZSAmJiBldnQuZmVhdHVyZS5pZCl7XG4gICAgICAvL0RvIHRoZSBvbmNsaWNrIHRoaW5nXG4gICAgICBQQkZPYmplY3QuZmV0Y2hGZWF0dXJlRGV0YWlscyhldnQuZmVhdHVyZS5pZCwgMCwgZXZ0LmZlYXR1cmUucHJvcGVydGllcy5uYW1lXzEgKyBcIiwgXCIgKyBldnQuZmVhdHVyZS5wcm9wZXJ0aWVzLm5hbWVfMCk7XG4gICAgfVxuICB9LFxuICBvblNlbGVjdDogZnVuY3Rpb24odnRmLCBQQkZPYmplY3Qpe1xuICAgIC8vV2hlbiBhIHNlbGVjdGlvbiBoYXMgY2hhbmdlZCAobGlrZXkgd2hlbiBhIGxhYmVsIHdhcyBjbGlja2VkIGFuZCB0aGUgY29ycmVzcG9uZGluZyBmZWF0dXJlIHNlbGVjdGVkKVxuICAgIGlmKHZ0ZiAmJiB2dGYuaWQpe1xuICAgICAgLy9EbyB0aGUgb25jbGljayB0aGluZ1xuICAgICAgUEJGT2JqZWN0LmZldGNoRmVhdHVyZURldGFpbHModnRmLmlkLCAwLCB2dGYucHJvcGVydGllcy5uYW1lXzEgKyBcIiwgXCIgKyB2dGYucHJvcGVydGllcy5uYW1lXzApO1xuICAgIH1cbiAgfVxufVxuXG52YXIgZ2FkbTIgPSB7XG4gIHR5cGU6ICdwYmYnLFxuICBuYW1lOiAnR0FETTInLFxuICAvL3VybDogXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvc2VydmljZXMvcG9zdGdpcy9nYWRtMC9nZW9tX3NpbXBsaWZ5X21lZC92ZWN0b3ItdGlsZXMve3p9L3t4fS97eX0ucGJmP2ZpZWxkcz1ndWlkOjpjaGFyYWN0ZXIgdmFyeWluZyxuYW1lXzAseWVhciZsYWJlbHBvaW50cz10cnVlXCIsXG4gIC8vdXJsOiBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9zZXJ2aWNlcy9wb3N0Z2lzL2dhZG0wL2dlb21fc2ltcGxpZnlfbWVkL3ZlY3Rvci10aWxlcy97en0ve3h9L3t5fS5wYmY/ZmllbGRzPWd1aWQ6OmNoYXJhY3RlciB2YXJ5aW5nLG5hbWVfMCx5ZWFyXCIsXG5cbiAgdXJsOiBcImh0dHA6Ly97c30uc3BhdGlhbGRldnRpbGVzLmNvbS9nYWRtMi97en0ve3h9L3t5fS5wYmZcIixcbiAgZGV0YWlsc1VybDogJ3NlcnZpY2VzL2N1c3RvbS9jdXN0b21fb3BlcmF0aW9uP25hbWU9Z2V0OnRoZW1lYnlndWlkJmZvcm1hdD1qc29uJmd1aWRzPTpndWlkcyZnYWRtX2xldmVsPTImZmlsdGVycz06ZmlsdGVycycsXG4gIGRlYnVnOiBmYWxzZSxcbiAgY2xpY2thYmxlTGF5ZXJzOiBbXCJHQURNXzIwMTRcIl0sXG5cbiAgZ2V0SURGb3JMYXllckZlYXR1cmU6IGZ1bmN0aW9uIChmZWF0dXJlKSB7XG4gICAgcmV0dXJuIGZlYXR1cmUucHJvcGVydGllcy5ndWlkO1xuICB9LFxuICBtdXRleFRvZ2dsZTogdHJ1ZSxcblxuICAvKipcbiAgICogVGhlIGZpbHRlciBmdW5jdGlvbiBnZXRzIGNhbGxlZCB3aGVuIGl0ZXJhdGluZyB0aG91Z2ggZWFjaCB2ZWN0b3IgdGlsZSBmZWF0dXJlICh2dGYpLiBZb3UgaGF2ZSBhY2Nlc3NcbiAgICogdG8gZXZlcnkgcHJvcGVydHkgYXNzb2NpYXRlZCB3aXRoIGEgZ2l2ZW4gZmVhdHVyZSAodGhlIGZlYXR1cmUsIGFuZCB0aGUgbGF5ZXIpLiBZb3UgY2FuIGFsc28gZmlsdGVyXG4gICAqIGJhc2VkIG9mIHRoZSBjb250ZXh0IChlYWNoIHRpbGUgdGhhdCB0aGUgZmVhdHVyZSBpcyBkcmF3biBvbnRvKS5cbiAgICpcbiAgICogUmV0dXJuaW5nIGZhbHNlIHNraXBzIG92ZXIgdGhlIGZlYXR1cmUgYW5kIGl0IGlzIG5vdCBkcmF3bi5cbiAgICpcbiAgICogQHBhcmFtIGZlYXR1cmVcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBmaWx0ZXI6IGZ1bmN0aW9uKHZ0ZiwgJHJvb3RTY29wZSl7XG4gICAgdmFyIGRhdGEgPSAkcm9vdFNjb3BlLnZ0RGF0YTtcblxuICAgIGlmKGRhdGEgJiYgZGF0YVt2dGYucHJvcGVydGllcy5ndWlkXSl7XG4gICAgICB2YXIgdGhlbWUgPSAkcm9vdFNjb3BlLiRzdGF0ZVBhcmFtcy50aGVtZTtcbiAgICAgIHZ0Zi5wcm9wZXJ0aWVzLnRoZW1lID0gdGhlbWU7XG4gICAgICB2dGYucHJvcGVydGllcy5lY29zX3Byb3BlcnRpZXMgPSB7fTtcbiAgICAgIHZ0Zi5wcm9wZXJ0aWVzLmVjb3NfcHJvcGVydGllc1t0aGVtZV0gPSBkYXRhW3Z0Zi5wcm9wZXJ0aWVzLmd1aWRdO1xuICAgICAgLy9yZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSxcblxuICAvKipcbiAgICogV2hlbiB3ZSB3YW50IHRvIGxpbmsgZXZlbnRzIGJldHdlZW4gbGF5ZXJzLCBsaWtlIGNsaWNraW5nIG9uIGEgbGFiZWwgYW5kIGFcbiAgICogY29ycmVzcG9uZGluZyBwb2x5Z29uIGZyZWF0dXJlLCB0aGlzIHdpbGwgcmV0dXJuIHRoZSBjb3JyZXNwb25kaW5nIG1hcHBpbmdcbiAgICogYmV0d2VlbiBsYXllcnMuIFRoaXMgcHJvdmlkZXMga25vd2xlZGdlIG9mIHdoaWNoIG90aGVyIGZlYXR1cmUgYSBnaXZlbiBmZWF0dXJlXG4gICAqIGlzIGxpbmtlZCB0by5cbiAgICpcbiAgICogQHBhcmFtIGxheWVyTmFtZSAgdGhlIGxheWVyIHdlIHdhbnQgdG8ga25vdyB0aGUgbGlua2VkIGxheWVyIGZyb21cbiAgICogQHJldHVybnMge3N0cmluZ30gcmV0dXJucyBjb3JyZXNwb25kaW5nIGxpbmtlZCBsYXllclxuICAgKi9cbiAgbGF5ZXJMaW5rOiBmdW5jdGlvbiAobGF5ZXJOYW1lKSB7XG4gICAgaWYgKGxheWVyTmFtZS5pbmRleE9mKCdfbGFiZWwnKSA+IC0xKSB7XG4gICAgICByZXR1cm4gbGF5ZXJOYW1lLnJlcGxhY2UoJ19sYWJlbCcsICcnKTtcbiAgICB9XG4gICAgcmV0dXJuIGxheWVyTmFtZSArICdfbGFiZWwnO1xuICB9LFxuXG4gIHN0eWxlOiBnZXRUaGVtZVN0eWxlLFxuXG4gIG9uQ2xpY2s6IGZ1bmN0aW9uKGV2dCwgJGh0dHAsICRyb290U2NvcGUsIFBCRk9iamVjdCkge1xuXG4gICAgaWYoZXZ0ICYmIGV2dC5mZWF0dXJlICYmIGV2dC5mZWF0dXJlLmlkKXtcbiAgICAgIC8vRG8gdGhlIG9uY2xpY2sgdGhpbmdcbiAgICAgIFBCRk9iamVjdC5mZXRjaEZlYXR1cmVEZXRhaWxzKGV2dC5mZWF0dXJlLmlkLCAwLCBldnQuZmVhdHVyZS5wcm9wZXJ0aWVzLm5hbWVfMiArIFwiLCBcIiArIGV2dC5mZWF0dXJlLnByb3BlcnRpZXMubmFtZV8xICsgXCIsIFwiICsgZXZ0LmZlYXR1cmUucHJvcGVydGllcy5uYW1lXzApO1xuICAgIH1cbiAgfSxcbiAgb25TZWxlY3Q6IGZ1bmN0aW9uKHZ0ZiwgUEJGT2JqZWN0KXtcbiAgICAvL1doZW4gYSBzZWxlY3Rpb24gaGFzIGNoYW5nZWQgKGxpa2V5IHdoZW4gYSBsYWJlbCB3YXMgY2xpY2tlZCBhbmQgdGhlIGNvcnJlc3BvbmRpbmcgZmVhdHVyZSBzZWxlY3RlZClcbiAgICBpZih2dGYgJiYgdnRmLmlkKXtcbiAgICAgIC8vRG8gdGhlIG9uY2xpY2sgdGhpbmdcbiAgICAgIFBCRk9iamVjdC5mZXRjaEZlYXR1cmVEZXRhaWxzKHZ0Zi5pZCwgMCwgdnRmLnByb3BlcnRpZXMubmFtZV8yICsgXCIsIFwiICsgdnRmLnByb3BlcnRpZXMubmFtZV8xICsgXCIsIFwiICsgdnRmLnByb3BlcnRpZXMubmFtZV8wKTtcbiAgICB9XG4gIH1cbn1cbi8vdmFyIGhhdGNoRGVzaWduO1xuXG5mdW5jdGlvbiBnZXRUaGVtZVN0eWxlKHZ0ZiwgJHJvb3RTY29wZSl7XG5cbiAgdmFyIGVjb3NfYm9yZGVyX3RoaWNrbmVzcyA9IDE7IC8vcHggLSB0aGlzIGlzIHRoZSB0aGlja25lc3Mgb2YgYm91bmRhcmllcyB0aGF0IGhhdmUgZWNvcyBkYXRhIGFzc29jaWF0ZWRcbiAgdmFyIGVjb3NfYm9yZGVyX2NvbG9yID0gXCJyZ2JhKDE0MCwxNDAsMTQwLDEpXCI7XG5cbiAgdmFyIHN0eWxlID0ge307XG4gIC8vRGVmYXVsdCBzdHlsZSBmb3IgYWxsIGJvdW5kYXJpZXMgLSBtYWtlIGhvbGxvdywgd2l0aCBhIHRoaW4gb3V0bGluZS5cbiAgc3R5bGUuY29sb3IgPSAncmdiYSgwLDAsMCwwLjEpJztcbiAgc3R5bGUub3V0bGluZSA9IHtcbiAgICBjb2xvcjogJ3JnYmEoMjAsMjAsMjAsMC41KScsXG4gICAgc2l6ZTouNVxuICB9O1xuXG4gIHZhciBwcm9wZXJ0aWVzID0gdnRmLnByb3BlcnRpZXM7XG5cbiAgLy9Ta2lwIGlmIHdlJ3JlIGEgcmVndWxhciBwb2x5Z29uLCBhbmQgbm90IGEgbGFiZWwgcG9pbnQsIGFuZCBpZiB0aGVyZSBpcyBubyBFQ09TIHByb3BlcnRpZXMuXG4gIGlmKHZ0Zi5sYXllci5uYW1lLmluZGV4T2YoJ2xhYmVsJykgPT0gLTEgJiYgIXByb3BlcnRpZXMudGhlbWUpe1xuICAgIHJldHVybiBzdHlsZTtcbiAgfVxuXG4gIHZhciBjaGVja2VkO1xuXG4gIC8vU2VlIGlmIHdlIHNob3VsZCBzaG93IHRoZW1lIGJhZGdlcy9idWJibGVzIG9yIG5vdFxuICBpZigkc3RhdGVQYXJhbXMudGhlbWVsYWJlbHMgIT09IG51bGwgJiYgJHN0YXRlUGFyYW1zLnRoZW1lbGFiZWxzICE9PSB1bmRlZmluZWQpe1xuICAgIGNoZWNrZWQgPSAkc3RhdGVQYXJhbXMudGhlbWVsYWJlbHM7XG4gIH1cbiAgZWxzZXtcbiAgICAvL2lmIG5vdCBwcmVzZW50LCBkZWZhdWx0IHRvIHRydWVcbiAgICBjaGVja2VkID0gJ3RydWUnO1xuICB9XG5cbiAgdmFyIGVjb3NQcm9wZXJ0aWVzO1xuXG4gIGlmIChwcm9wZXJ0aWVzLnRoZW1lID09IFwiZGlzYXN0ZXJcIikge1xuICAgIGVjb3NQcm9wZXJ0aWVzID0gcHJvcGVydGllc1tcImVjb3NfcHJvcGVydGllc1wiXVtcImRpc2FzdGVyXCJdO1xuXG4gICAgaWYgKGVjb3NQcm9wZXJ0aWVzKSB7XG4gICAgICBpZiAoZWNvc1Byb3BlcnRpZXMuaXJvY19zdGF0dXNfX2MpIHtcbiAgICAgICAgLy9LZWVwIHRyYWNrIG9mIHRoZSBwcm9wZXJ0eSBuYW1lIGZvciB0aGUgc2FrZSBvZiBsZWdlbmQgZGlzcGxheVxuICAgICAgICBzdHlsZS5sZWdlbmRMYWJlbCA9IGVjb3NQcm9wZXJ0aWVzLmlyb2Nfc3RhdHVzX19jO1xuXG4gICAgICAgIHN3aXRjaCAoZWNvc1Byb3BlcnRpZXMuaXJvY19zdGF0dXNfX2MudG9Mb3dlckNhc2UoKSkge1xuICAgICAgICAgIGNhc2UgXCJhY3RpdmVcIjpcbiAgICAgICAgICAgIHN0eWxlLmNvbG9yID0gJ3JnYmEoMjA0LDAsNTEsJyArIG9wYWNpdHkgKyAnKSc7XG4gICAgICAgICAgICBzdHlsZS5vdXRsaW5lID0ge1xuICAgICAgICAgICAgICBjb2xvcjogZWNvc19ib3JkZXJfY29sb3IsXG4gICAgICAgICAgICAgIHNpemU6IGVjb3NfYm9yZGVyX3RoaWNrbmVzc1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBcIm1vbml0b3JpbmdcIjpcbiAgICAgICAgICAgIHN0eWxlLmNvbG9yID0gJ3JnYmEoMjA0LDE1MywwLCcgKyBvcGFjaXR5ICsgJyknO1xuICAgICAgICAgICAgc3R5bGUub3V0bGluZSA9IHtcbiAgICAgICAgICAgICAgY29sb3I6IGVjb3NfYm9yZGVyX2NvbG9yLFxuICAgICAgICAgICAgICBzaXplOiBlY29zX2JvcmRlcl90aGlja25lc3NcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgXCJpbmFjdGl2ZVwiOlxuICAgICAgICAgICAgc3R5bGUuY29sb3IgPSAncmdiYSgyNTUsMjU1LDI1NSwnICsgb3BhY2l0eSArICcpJztcbiAgICAgICAgICAgIHN0eWxlLm91dGxpbmUgPSB7XG4gICAgICAgICAgICAgIGNvbG9yOiBlY29zX2JvcmRlcl9jb2xvcixcbiAgICAgICAgICAgICAgc2l6ZTogZWNvc19ib3JkZXJfdGhpY2tuZXNzXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICB9XG4gIGVsc2UgaWYgKHByb3BlcnRpZXMudGhlbWUgPT0gXCJkaXNhc3RlclR5cGVcIikge1xuICAgIGVjb3NQcm9wZXJ0aWVzID0gcHJvcGVydGllc1tcImVjb3NfcHJvcGVydGllc1wiXVtcImRpc2FzdGVyVHlwZVwiXTsgLy90aGlzIGlzIGFuIGFycmF5IG9mIGRpc2FzdGVyIHR5cGVzIGZvciB0aGlzIGFyZWFcbiAgICBpZiAoZWNvc1Byb3BlcnRpZXMgJiYgZWNvc1Byb3BlcnRpZXMuZGlzYXN0ZXJfdHlwZV9fYykge1xuXG4gICAgICAvL0tlZXAgdHJhY2sgb2YgdGhlIHByb3BlcnR5IG5hbWUgZm9yIHRoZSBzYWtlIG9mIGxlZ2VuZCBkaXNwbGF5XG4gICAgICBzdHlsZS5sZWdlbmRMYWJlbCA9IGVjb3NQcm9wZXJ0aWVzLmRpc2FzdGVyX3R5cGVfX2M7XG5cbiAgICAgIC8vTG9vayB1cCB0aGUgY29sb3IgaW4gdGhlIGRpY3Rpb25hcnlcbiAgICAgIHN0eWxlLmNvbG9yID0gVU5PQ0hBSWNvbkxvb2t1cFtlY29zUHJvcGVydGllcy5kaXNhc3Rlcl90eXBlX19jWzBdXS5jb2xvcjtcbiAgICAgIC8vVXNlIHRoZSBzYW1lIG91dGxpbmVcbiAgICAgIHN0eWxlLm91dGxpbmUgPSB7XG4gICAgICAgIGNvbG9yOiBlY29zX2JvcmRlcl9jb2xvcixcbiAgICAgICAgc2l6ZTogZWNvc19ib3JkZXJfdGhpY2tuZXNzXG4gICAgICB9XG5cblxuXG4gICAgICBpZihjaGVja2VkID09ICd0cnVlJyl7XG4gICAgICAgIC8vRGlzYXN0ZXIgVHlwZSBzaG91bGQgdXNlIE9DSEEgaWNvbnNcbiAgICAgICAgLy9CdXQgcmVwbGFjZSB0aGUgb3BhY2l0eSB3aXRoIHNvbGlkIGZpbGwgZm9yIHRoZSBidWJibGVcbiAgICAgICAgdmFyIGJ1YmJsZV9maWxsID0gc3R5bGUuY29sb3IucmVwbGFjZShcIixcIiArIG9wYWNpdHkgKyBcIilcIiwgXCIsMSlcIik7XG4gICAgICAgIHN0eWxlLnN0YXRpY0xhYmVsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHZhciBsYWJlbFN0eWxlID0ge1xuICAgICAgICAgICAgaHRtbDogKGVjb3NQcm9wZXJ0aWVzICYmIGVjb3NQcm9wZXJ0aWVzLmRpc2FzdGVyX3R5cGVfX2NbMF0gPyBidWlsZERpc2FzdGVyVHlwZUxhYmVsKGVjb3NQcm9wZXJ0aWVzLmRpc2FzdGVyX3R5cGVfX2NbMF0sIGJ1YmJsZV9maWxsLCBzdHlsZS5vdXRsaW5lKSA6IFwiXCIpLFxuICAgICAgICAgICAgaWNvblNpemU6IFs0MiwgNDJdLFxuICAgICAgICAgICAgY3NzQ2xhc3M6ICdub2NsYXNzJ1xuICAgICAgICAgIH07XG4gICAgICAgICAgcmV0dXJuIGxhYmVsU3R5bGU7XG4gICAgICAgIH07XG4gICAgICB9XG5cblxuICAgIH1cbiAgfVxuICBlbHNlIGlmIChwcm9wZXJ0aWVzLnRoZW1lID09IFwicHJvamVjdFJpc2tcIikge1xuICAgIGVjb3NQcm9wZXJ0aWVzID0gcHJvcGVydGllc1tcImVjb3NfcHJvcGVydGllc1wiXVtcInByb2plY3RSaXNrXCJdO1xuICAgIGlmIChlY29zUHJvcGVydGllcyAmJiBlY29zUHJvcGVydGllcy5vdmVyYWxsX2Fzc2Vzc21lbnRfX2MpIHtcbiAgICAgIC8vS2VlcCB0cmFjayBvZiB0aGUgcHJvcGVydHkgbmFtZSBmb3IgdGhlIHNha2Ugb2YgbGVnZW5kIGRpc3BsYXlcbiAgICAgIHN0eWxlLmxlZ2VuZExhYmVsID0gZWNvc1Byb3BlcnRpZXMub3ZlcmFsbF9hc3Nlc3NtZW50X19jO1xuXG4gICAgICBzd2l0Y2ggKGVjb3NQcm9wZXJ0aWVzLm92ZXJhbGxfYXNzZXNzbWVudF9fYy50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICAgIGNhc2UgXCJjcml0aWNhbFwiOlxuICAgICAgICAgIHN0eWxlLmNvbG9yID0gJ3JnYmEoMjU1LDAsMCwnICsgb3BhY2l0eSArICcpJztcbiAgICAgICAgICBzdHlsZS5vdXRsaW5lID0ge1xuICAgICAgICAgICAgY29sb3I6IGVjb3NfYm9yZGVyX2NvbG9yLFxuICAgICAgICAgICAgc2l6ZTogZWNvc19ib3JkZXJfdGhpY2tuZXNzXG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiaGlnaFwiOlxuICAgICAgICAgIHN0eWxlLmNvbG9yID0gJ3JnYmEoMjU1LDEyNywwLCcgKyBvcGFjaXR5ICsgJyknO1xuICAgICAgICAgIHN0eWxlLm91dGxpbmUgPSB7XG4gICAgICAgICAgICBjb2xvcjogZWNvc19ib3JkZXJfY29sb3IsXG4gICAgICAgICAgICBzaXplOiBlY29zX2JvcmRlcl90aGlja25lc3NcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJtZWRpdW1cIjpcbiAgICAgICAgICBzdHlsZS5jb2xvciA9ICdyZ2JhKDI1NSwyNTUsMCwnICsgb3BhY2l0eSArICcpJztcbiAgICAgICAgICBzdHlsZS5vdXRsaW5lID0ge1xuICAgICAgICAgICAgY29sb3I6IGVjb3NfYm9yZGVyX2NvbG9yLFxuICAgICAgICAgICAgc2l6ZTogZWNvc19ib3JkZXJfdGhpY2tuZXNzXG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwibG93XCI6XG4gICAgICAgICAgc3R5bGUuY29sb3IgPSAncmdiYSgwLDI1NSwwLCcgKyBvcGFjaXR5ICsgJyknO1xuICAgICAgICAgIHN0eWxlLm91dGxpbmUgPSB7XG4gICAgICAgICAgICBjb2xvcjogZWNvc19ib3JkZXJfY29sb3IsXG4gICAgICAgICAgICBzaXplOiBlY29zX2JvcmRlcl90aGlja25lc3NcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGVsc2UgaWYgKHByb3BlcnRpZXMudGhlbWUgPT0gXCJwcm9qZWN0SGVhbHRoXCIpIHtcbiAgICBlY29zUHJvcGVydGllcyA9IHByb3BlcnRpZXNbXCJlY29zX3Byb3BlcnRpZXNcIl1bXCJwcm9qZWN0SGVhbHRoXCJdO1xuICAgIGlmIChlY29zUHJvcGVydGllcyAmJiBlY29zUHJvcGVydGllcy5vdmVyYWxsX3N0YXR1c19fYykge1xuICAgICAgLy9LZWVwIHRyYWNrIG9mIHRoZSBwcm9wZXJ0eSBuYW1lIGZvciB0aGUgc2FrZSBvZiBsZWdlbmQgZGlzcGxheVxuICAgICAgc3R5bGUubGVnZW5kTGFiZWwgPSBlY29zUHJvcGVydGllcy5vdmVyYWxsX3N0YXR1c19fYztcblxuICAgICAgc3dpdGNoIChlY29zUHJvcGVydGllcy5vdmVyYWxsX3N0YXR1c19fYy50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICAgIGNhc2UgXCJyZWRcIjpcbiAgICAgICAgICBzdHlsZS5jb2xvciA9ICdyZ2JhKDI1NSwwLDAsJyArIG9wYWNpdHkgKyAnKSc7XG4gICAgICAgICAgc3R5bGUub3V0bGluZSA9IHtcbiAgICAgICAgICAgIGNvbG9yOiBlY29zX2JvcmRlcl9jb2xvcixcbiAgICAgICAgICAgIHNpemU6IGVjb3NfYm9yZGVyX3RoaWNrbmVzc1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcInllbGxvd1wiOlxuICAgICAgICAgIHN0eWxlLmNvbG9yID0gJ3JnYmEoMjU1LDI1NSwwLCcgKyBvcGFjaXR5ICsgJyknO1xuICAgICAgICAgIHN0eWxlLm91dGxpbmUgPSB7XG4gICAgICAgICAgICBjb2xvcjogZWNvc19ib3JkZXJfY29sb3IsXG4gICAgICAgICAgICBzaXplOiBlY29zX2JvcmRlcl90aGlja25lc3NcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJncmVlblwiOlxuICAgICAgICAgIHN0eWxlLmNvbG9yID0gJ3JnYmEoMCwyNTUsMCwnICsgb3BhY2l0eSArICcpJztcbiAgICAgICAgICBzdHlsZS5vdXRsaW5lID0ge1xuICAgICAgICAgICAgY29sb3I6IGVjb3NfYm9yZGVyX2NvbG9yLFxuICAgICAgICAgICAgc2l6ZTogZWNvc19ib3JkZXJfdGhpY2tuZXNzXG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwid2hpdGVcIjpcbiAgICAgICAgICBzdHlsZS5jb2xvciA9ICdyZ2JhKDI1NSwyNTUsMjU1LCcgKyBvcGFjaXR5ICsgJyknO1xuICAgICAgICAgIHN0eWxlLm91dGxpbmUgPSB7XG4gICAgICAgICAgICBjb2xvcjogZWNvc19ib3JkZXJfY29sb3IsXG4gICAgICAgICAgICBzaXplOiBlY29zX2JvcmRlcl90aGlja25lc3NcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGVsc2UgaWYgKHByb3BlcnRpZXMudGhlbWUgPT0gXCJwcm9qZWN0XCIpIHtcbiAgICBlY29zUHJvcGVydGllcyA9IHByb3BlcnRpZXNbXCJlY29zX3Byb3BlcnRpZXNcIl1bXCJwcm9qZWN0XCJdO1xuXG4gICAgaWYgKGVjb3NQcm9wZXJ0aWVzICYmIGVjb3NQcm9wZXJ0aWVzKSB7XG5cbiAgICAgIC8vS2VlcCB0cmFjayBvZiB0aGUgcHJvcGVydHkgbmFtZSBmb3IgdGhlIHNha2Ugb2YgbGVnZW5kIGRpc3BsYXlcbiAgICAgIHN0eWxlLmxlZ2VuZExhYmVsID0gXCIjUHJvamVjdHNcIjtcblxuICAgICAgLy9mb3IgdGhlIHB1cnBvc2VzIG9mIHNob3dpbmcgYSBsZWdlbmQsIGtlZXAgdGhpcyBncmFkaWVudCBoYW5keVxuICAgICAgc3R5bGUuZ3JhZGllbnQgPSBbXG4gICAgICAgICdyZ2JhKDI1NSwyNTUsMjU1LCcgKyBvcGFjaXR5ICsgJyknLFxuICAgICAgICAncmdiYSgwLDI1NSw1OSwnICsgb3BhY2l0eSArICcpJ1xuICAgICAgXTtcblxuICAgICAgdmFyIGNvdW50ID0gIHBhcnNlSW50KGVjb3NQcm9wZXJ0aWVzLnRoZW1lX2NvdW50KTtcblxuICAgICAgaWYoY291bnQgPT0gMCkge1xuICAgICAgICAvL21ha2UgaG9sbG93XG4gICAgICAgIHN0eWxlLmNvbG9yID0gJ3JnYmEoMCwwLDAsJyArIG9wYWNpdHkgKyAnKSc7XG4gICAgICAgIHN0eWxlLm91dGxpbmUgPSB7XG4gICAgICAgICAgY29sb3I6IGVjb3NfYm9yZGVyX2NvbG9yLFxuICAgICAgICAgIHNpemU6IGVjb3NfYm9yZGVyX3RoaWNrbmVzc1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIGlmKGNvdW50ID4gMCAmJiBjb3VudCA8PSAyKSB7XG4gICAgICAgIC8vbWFrZSBob2xsb3dcbiAgICAgICAgc3R5bGUuY29sb3IgPSAncmdiYSgyMjksMjU1LDIzNSwnICsgb3BhY2l0eSArICcpJztcbiAgICAgICAgc3R5bGUub3V0bGluZSA9IHtcbiAgICAgICAgICBjb2xvcjogZWNvc19ib3JkZXJfY29sb3IsXG4gICAgICAgICAgc2l6ZTogZWNvc19ib3JkZXJfdGhpY2tuZXNzXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2UgaWYoY291bnQgPiAyICYmIGNvdW50IDw9IDUpIHtcbiAgICAgICAgLy9tYWtlIGhvbGxvd1xuICAgICAgICBzdHlsZS5jb2xvciA9ICdyZ2JhKDE2OSwyNTUsMTg5LCcgKyBvcGFjaXR5ICsgJyknO1xuICAgICAgICBzdHlsZS5vdXRsaW5lID0ge1xuICAgICAgICAgIGNvbG9yOiBlY29zX2JvcmRlcl9jb2xvcixcbiAgICAgICAgICBzaXplOiBlY29zX2JvcmRlcl90aGlja25lc3NcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSBpZihjb3VudCA+IDUgJiYgY291bnQgPD0gOCkge1xuICAgICAgICAvL21ha2UgaG9sbG93XG4gICAgICAgIHN0eWxlLmNvbG9yID0gJ3JnYmEoMTY5LDI1NSwxMjUsJyArIG9wYWNpdHkgKyAnKSc7XG4gICAgICAgIHN0eWxlLm91dGxpbmUgPSB7XG4gICAgICAgICAgY29sb3I6IGVjb3NfYm9yZGVyX2NvbG9yLFxuICAgICAgICAgIHNpemU6IGVjb3NfYm9yZGVyX3RoaWNrbmVzc1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIGlmKGNvdW50ID4gOCAmJiBjb3VudCA8PSAxMCkge1xuICAgICAgICAvL21ha2UgaG9sbG93XG4gICAgICAgIHN0eWxlLmNvbG9yID0gJ3JnYmEoNDEsMjU1LDkwLCcgKyBvcGFjaXR5ICsgJyknO1xuICAgICAgICBzdHlsZS5vdXRsaW5lID0ge1xuICAgICAgICAgIGNvbG9yOiBlY29zX2JvcmRlcl9jb2xvcixcbiAgICAgICAgICBzaXplOiBlY29zX2JvcmRlcl90aGlja25lc3NcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSBpZihjb3VudCA+IDEwKSB7XG4gICAgICAgIC8vbWFrZSBob2xsb3dcbiAgICAgICAgc3R5bGUuY29sb3IgPSAncmdiYSgwLDI1NSw1OSwnICsgb3BhY2l0eSArICcpJztcbiAgICAgICAgc3R5bGUub3V0bGluZSA9IHtcbiAgICAgICAgICBjb2xvcjogZWNvc19ib3JkZXJfY29sb3IsXG4gICAgICAgICAgc2l6ZTogZWNvc19ib3JkZXJfdGhpY2tuZXNzXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgIH1cbiAgICBlbHNle1xuICAgICAgLy9tYWtlIGhvbGxvd1xuICAgICAgc3R5bGUuY29sb3IgPSAncmdiYSgwLDAsMCwnICsgb3BhY2l0eSArICcpJztcbiAgICAgIHN0eWxlLm91dGxpbmUgPSB7XG4gICAgICAgIGNvbG9yOiBlY29zX2JvcmRlcl9jb2xvcixcbiAgICAgICAgc2l6ZTogZWNvc19ib3JkZXJfdGhpY2tuZXNzXG4gICAgICB9XG4gICAgfVxuICB9XG5cblxuICAvL2lmKCFoYXRjaERlc2lnbil7XG4gIC8vICBoYXRjaERlc2lnbiA9IGdldEltYWdlUmVmKCk7XG4gIC8vfVxuXG4gIC8vc3R5bGUuc2VsZWN0ZWQgPSB7XG4gIC8vICBjb2xvcjogZnVuY3Rpb24oY3R4MmQpe1xuICAvLyAgICAvL0hhdGNoIHN5bWJvbFxuICAvLyAgICB2YXIgcmVwZWF0ID0gY3R4MmQuY3JlYXRlUGF0dGVybihoYXRjaERlc2lnbiwgXCJyZXBlYXRcIik7XG4gIC8vICAgIHJldHVybiByZXBlYXQ7XG4gIC8vXG4gIC8vICB9LFxuICAvLyAgb3V0bGluZSA6IHtcbiAgLy8gICAgY29sb3I6ICdyZ2IoMjU1LDI1NSwwKScsXG4gIC8vICAgIHNpemU6IDJcbiAgLy8gIH1cbiAgLy99XG5cbiAgc3R5bGUuc2VsZWN0ZWQgPSB7XG4gICAgLy9jb2xvcjogJ3JnYmEoMCwyNTUsMjU1LDAuMSknLFxuICAgIGNvbG9yOiBzdHlsZS5jb2xvcixcbiAgICBvdXRsaW5lIDoge1xuICAgICAgY29sb3I6ICdyZ2JhKDAsMjU1LDI1NSwxKScsXG4gICAgICBzaXplOiAyXG4gICAgfVxuICB9XG5cbiAgLy9MYWJlbFxuICBpZihjaGVja2VkID09ICd0cnVlJykge1xuXG4gICAgaWYgKHZ0Zi5sYXllci5uYW1lID09PSAnR0FETV8yMDE0X2xhYmVsJykge1xuICAgICAgaWYgKGVjb3NQcm9wZXJ0aWVzICYmIGVjb3NQcm9wZXJ0aWVzLnRoZW1lX2NvdW50KSB7XG5cbiAgICAgICAgaWYgKHByb3BlcnRpZXMudGhlbWUgIT0gXCJkaXNhc3RlclR5cGVcIikge1xuICAgICAgICAgIC8vRGlzYXN0ZXIgVHlwZSBsYWJlbHMgYXJlIHNldCBpbiB0aGUgYmxvYyBhYm92ZVxuICAgICAgICAgIC8vQWxsIG90aGVycyBhcmUgc2V0IGhlcmUuXG5cbiAgICAgICAgICBzdHlsZS5zdGF0aWNMYWJlbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBsYWJlbFN0eWxlID0ge1xuICAgICAgICAgICAgICBodG1sOiAoZWNvc1Byb3BlcnRpZXMgJiYgZWNvc1Byb3BlcnRpZXMudGhlbWVfY291bnQgPyBidWlsZER5bmFtaWNMYWJlbChlY29zUHJvcGVydGllcykgOiBcIlwiKSxcbiAgICAgICAgICAgICAgaWNvblNpemU6IFs0MiwgNDJdLFxuICAgICAgICAgICAgICBjc3NDbGFzczogJ25vY2xhc3MnXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmV0dXJuIGxhYmVsU3R5bGU7XG4gICAgICAgICAgfTtcblxuICAgICAgICB9XG5cbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICAvL1doZW4gc3dpdGNoaW5nIHRoZW1lcywgcmVzZXQgb2xkIGxhYmVsIHN0eWxlcyB0byBudWxsIHNvIGxhYmVscyBkb24ndCBnZXQgZHJhd24gZm9yIG9sZCB0aGVtZS5cbiAgICAgICAgc3R5bGUuc3RhdGljTGFiZWwgPSBudWxsO1xuICAgICAgfVxuXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiBidWlsZER5bmFtaWNMYWJlbChwcm9wZXJ0aWVzKXtcbiAgaWYgKHByb3BlcnRpZXMudGhlbWUgPT0gXCJkaXNhc3RlclwiKSB7XG4gICAgdmFyIGNvbG9yID0gXCJcIjtcbiAgICB2YXIgbGFiZWxDb2xvciA9IFwiXCI7XG4gICAgaWYgKHByb3BlcnRpZXMgJiYgcHJvcGVydGllcy5pcm9jX3N0YXR1c19fYykge1xuICAgICAgc3dpdGNoIChwcm9wZXJ0aWVzLmlyb2Nfc3RhdHVzX19jLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgICAgY2FzZSBcImFjdGl2ZVwiOlxuICAgICAgICAgIGNvbG9yID0gXCJyZ2JhKDIwNCwwLDUxLDEpXCI7XG4gICAgICAgICAgbGFiZWxDb2xvciA9IFwiI2ZmZlwiO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwibW9uaXRvcmluZ1wiOlxuICAgICAgICAgIGNvbG9yID0gXCJyZ2JhKDIyNSwxODcsMzcsMSlcIjtcbiAgICAgICAgICBsYWJlbENvbG9yID0gXCIjZmZmXCI7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJpbmFjdGl2ZVwiOlxuICAgICAgICAgIGNvbG9yID0gXCJyZ2JhKDE4OSwxODksMTg5LDEpXCI7XG4gICAgICAgICAgbGFiZWxDb2xvciA9IFwiIzAwMFwiO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gJzxkaXYgY2xhc3M9XCJsYWJlbC1pY29uLW51bWJlci00MHBlcmNlbnRcIicgKyAoY29sb3IgPyAnIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogJyArIGNvbG9yICsgJztjb2xvcjogJyArIGxhYmVsQ29sb3IgKyAnXCInIDogJycpICsgJz48c3Bhbj4nICsgcHJvcGVydGllcy50aGVtZV9jb3VudCArICc8L3NwYW4+PC9kaXY+JztcbiAgfVxuICBlbHNlIHtcbiAgICByZXR1cm4gJzxkaXYgY2xhc3M9XCJsYWJlbC1pY29uLW51bWJlci00MHBlcmNlbnRcIj48c3Bhbj4nICsgcHJvcGVydGllcy50aGVtZV9jb3VudCArICc8L3NwYW4+PC9kaXY+JztcbiAgfVxufVxuXG5cbi8qXG5TZXQgdGhlIGRpY3Rpb25hcnkgdXNlZCB0byBsb29rIHVwIFVOT0NIQSBpY29ucyBmb3IgZGlzYXN0ZXIgdHlwZXNcbiAqL1xudmFyIFVOT0NIQUljb25Mb29rdXAgPSB7XG5cbiAgXCJNZXRlb3JvbG9naWNhbCAtIFRyb3BpY2FsIEN5Y2xvbmVcIjoge2ljb246IFwiaWNvbi1kaXNhc3Rlcl9jeWNsb25lXCIsIGNvbG9yOiBcInJnYmEoMjU1LDAsMCxcIiArIG9wYWNpdHkgKyBcIilcIn0sXG4gIFwiRmxvb2RzXCI6IHtpY29uOiBcImljb24tZGlzYXN0ZXJfZmxvb2RcIiwgY29sb3I6IFwicmdiYSgyNTUsMCwwLFwiICsgb3BhY2l0eSArIFwiKVwifSxcbiAgXCJUc3VuYW1pLCBWb2xjYW5vXCI6IHtpY29uOiBcImljb24tZGlzYXN0ZXJfdHN1bmFtaVwiLCBjb2xvcjogXCJyZ2JhKDI1NSwwLDAsXCIgKyBvcGFjaXR5ICsgXCIpXCJ9LFxuICBcIkZsb29kcywgU3Rvcm1cIjoge2ljb246IFwiaWNvbi1kaXNhc3Rlcl9mbG9vZFwiLCBjb2xvcjogXCJyZ2JhKDI1NSwwLDAsXCIgKyBvcGFjaXR5ICsgXCIpXCJ9LFxuICBcIlRzdW5hbWlcIjoge2ljb246IFwiaWNvbi1kaXNhc3Rlcl90c3VuYW1pXCIsIGNvbG9yOiBcInJnYmEoMjU1LDAsMCxcIiArIG9wYWNpdHkgKyBcIilcIn0sXG4gIFwiRmFtaW5lIC8gRm9vZCBJbnNlY3VyaXR5XCI6IHtpY29uOiBcImljb24tY2x1c3Rlcl9mb29kX3NlY3VyaXR5XCIsIGNvbG9yOiBcInJnYmEoMjU1LDAsMCxcIiArIG9wYWNpdHkgKyBcIilcIn0sXG4gIFwiRHJvdWdodFwiOiB7aWNvbjogXCJpY29uLWRpc2FzdGVyX2Ryb3VnaHRcIiwgY29sb3I6IFwicmdiYSgyNTUsMCwwLFwiICsgb3BhY2l0eSArIFwiKVwifSxcbiAgXCJNZXRlb3JvbG9naWNhbCAtIFRyb3BpY2FsIEN5Y2xvbmU7SHlkcm9sb2dpY2FsIC0gRmxvb2RzXCI6IHtpY29uOiBcImljb24tZGlzYXN0ZXJfY3ljbG9uZVwiLCBjb2xvcjogXCJyZ2JhKDI1NSwwLDAsXCIgKyBvcGFjaXR5ICsgXCIpXCJ9LFxuICBcIkZvb2QgSW5zZWN1cml0eVwiOiB7aWNvbjogXCJpY29uLWNsdXN0ZXJfZm9vZF9zZWN1cml0eVwiLCBjb2xvcjogXCJyZ2JhKDI1NSwwLDAsXCIgKyBvcGFjaXR5ICsgXCIpXCJ9LFxuICBcIkNpdmlsIFVucmVzdFwiOiB7aWNvbjogXCJpY29uLXBlb3BsZV9yZWJlbFwiLCBjb2xvcjogXCJyZ2JhKDI1NSwwLDAsXCIgKyBvcGFjaXR5ICsgXCIpXCJ9LFxuICBcIkZsb29kcywgVHJvcGljYWwgU3Rvcm1cIjoge2ljb246IFwiaWNvbi1kaXNhc3Rlcl9mbG9vZFwiLCBjb2xvcjogXCJyZ2JhKDI1NSwwLDAsXCIgKyBvcGFjaXR5ICsgXCIpXCJ9LFxuICBcIkNvbXBsZXggRW1lcmdlbmN5XCI6IHtpY29uOiBcImljb24tY3Jpc2lzX2NvbmZsaWN0XCIsIGNvbG9yOiBcInJnYmEoMjU1LDAsMCxcIiArIG9wYWNpdHkgKyBcIilcIn0sXG4gIFwiRXBpZGVtaWNcIjoge2ljb246IFwiaWNvbi1kaXNhc3Rlcl9lcGlkZW1pY1wiLCBjb2xvcjogXCJyZ2JhKDI1NSwwLDAsXCIgKyBvcGFjaXR5ICsgXCIpXCJ9LFxuICBcIlBvcHVsYXRpb24gTW92ZW1lbnRcIjoge2ljb246IFwiaWNvbi1jcmlzaXNfcG9wdWxhdGlvbl9kaXNwbGFjZW1lbnRcIiwgY29sb3I6IFwicmdiYSgyNTUsMCwwLFwiICsgb3BhY2l0eSArIFwiKVwifSxcbiAgXCJDbGltYXRvbG9naWNhbCAtIERyb3VnaHRcIjoge2ljb246IFwiaWNvbi1kaXNhc3Rlcl9kcm91Z2h0XCIsIGNvbG9yOiBcInJnYmEoMjU1LDAsMCxcIiArIG9wYWNpdHkgKyBcIilcIn0sXG4gIFwiV2ludGVyIFN0b3JtXCI6IHtpY29uOiBcImljb24tZGlzYXN0ZXJfc25vd2ZhbGxcIiwgY29sb3I6IFwicmdiYSgyNTUsMCwwLFwiICsgb3BhY2l0eSArIFwiKVwifSxcbiAgXCJUcm9waWNhbCBTdG9ybVwiOiB7aWNvbjogXCJpY29uLWRpc2FzdGVyX2hlYXZ5X3JhaW5cIiwgY29sb3I6IFwicmdiYSgyNTUsMCwwLFwiICsgb3BhY2l0eSArIFwiKVwifSxcbiAgXCJFYXJ0aHF1YWtlLCBUc3VuYW1pXCI6IHtpY29uOiBcImljb24tZGlzYXN0ZXJfZWFydGhxdWFrZVwiLCBjb2xvcjogXCJyZ2JhKDI1NSwwLDAsXCIgKyBvcGFjaXR5ICsgXCIpXCJ9LFxuICBcIkh5ZHJvbG9naWNhbCAtIEZsb29kc1wiOiB7aWNvbjogXCJpY29uLWRpc2FzdGVyX2Zsb29kXCIsIGNvbG9yOiBcInJnYmEoMjU1LDAsMCxcIiArIG9wYWNpdHkgKyBcIilcIn0sXG4gIFwiTGFuZHNsaWRlO0Zsb29kc1wiOiB7aWNvbjogXCJpY29uLWRpc2FzdGVyX2xhbmRzbGlkZVwiLCBjb2xvcjogXCJyZ2JhKDI1NSwwLDAsXCIgKyBvcGFjaXR5ICsgXCIpXCJ9LFxuICBcIkVhcnRocXVha2VcIjoge2ljb246IFwiaWNvbi1kaXNhc3Rlcl9lYXJ0aHF1YWtlXCIsIGNvbG9yOiBcInJnYmEoMjU1LDAsMCxcIiArIG9wYWNpdHkgKyBcIilcIn0sXG4gIFwiTGFuZHNsaWRlO0h5ZHJvbG9naWNhbCAtIEZsb29kc1wiOiB7aWNvbjogXCJpY29uLWRpc2FzdGVyX2xhbmRzbGlkZVwiLCBjb2xvcjogXCJyZ2JhKDI1NSwwLDAsXCIgKyBvcGFjaXR5ICsgXCIpXCJ9XG5cbn1cblxuZnVuY3Rpb24gYnVpbGREaXNhc3RlclR5cGVMYWJlbChkaXNhc3RlclR5cGUsIGNvbG9yKSB7XG5cbiAgdmFyIGJhY2tDb2xvciA9IFwiXCI7XG4gIHZhciBsYWJlbENvbG9yID0gXCJcIjtcbiAgaWYgKGRpc2FzdGVyVHlwZSkge1xuXG4gICAgYmFja0NvbG9yID0gY29sb3IgfHwgXCJyZ2JhKDIwNCwwLDUxLDAuNClcIjtcbiAgICBsYWJlbENvbG9yID0gXCIjZmZmXCI7XG5cbiAgfVxuXG4gIHZhciBpY29uID0gVU5PQ0hBSWNvbkxvb2t1cFtkaXNhc3RlclR5cGVdLmljb24gfHwgJ2ljb24tb3RoZXJfY2x1c3Rlcl9vdGhlcic7XG5cbiAgcmV0dXJuICc8ZGl2IGNsYXNzPVwibGFiZWwtaWNvbi1udW1iZXItMTAwcGVyY2VudFwiJyArIChiYWNrQ29sb3IgPyAnIHN0eWxlPVwiZm9udC1mYW1pbHk6IGh1bWFuaXRhcmlhbl9pY29uczsgYmFja2dyb3VuZC1jb2xvcjogJyArIGJhY2tDb2xvciArICc7Y29sb3I6ICcgKyBsYWJlbENvbG9yICsgJ1wiJyA6ICcnKSArICc+PGkgY2xhc3M9XCJ1biAnICsgaWNvbiArICdcIj48L2k+PC9kaXY+JztcblxufVxuXG5cbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuLy8gZnVuY3Rpb24gd2FpdGZvciAtIFdhaXQgdW50aWwgYSBjb25kaXRpb24gaXMgbWV0XG4vL1xuLy8gTmVlZGVkIHBhcmFtZXRlcnM6XG4vLyAgICB0ZXN0OiBhIHZhbHVlXG4vLyAgICBleHBlY3RlZFZhbHVlOiB0aGUgdmFsdWUgb2YgdGhlIHRlc3QgZnVuY3Rpb24gd2UgYXJlIHdhaXRpbmcgZm9yXG4vLyAgICBtc2VjOiBkZWxheSBiZXR3ZWVuIHRoZSBjYWxscyB0byB0ZXN0XG4vLyAgICBjYWxsYmFjazogZnVuY3Rpb24gdG8gZXhlY3V0ZSB3aGVuIHRoZSBjb25kaXRpb24gaXMgbWV0XG4vLyBQYXJhbWV0ZXJzIGZvciBkZWJ1Z2dpbmc6XG4vLyAgICBjb3VudDogdXNlZCB0byBjb3VudCB0aGUgbG9vcHNcbi8vICAgIHNvdXJjZTogYSBzdHJpbmcgdG8gc3BlY2lmeSBhbiBJRCwgYSBtZXNzYWdlLCBldGNcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuZnVuY3Rpb24gd2FpdGZvcih0ZXN0LCBleHBlY3RlZFZhbHVlLCBtc2VjLCBjb3VudCwgc291cmNlLCBjYWxsYmFjaykge1xuICAvLyBDaGVjayBpZiBjb25kaXRpb24gbWV0LiBJZiBub3QsIHJlLWNoZWNrIGxhdGVyIChtc2VjKS5cbiAgd2hpbGUgKHRlc3QoKSAhPT0gZXhwZWN0ZWRWYWx1ZSkge1xuICAgIGNvdW50Kys7XG4gICAgY29uc29sZS5sb2coXCJXYWl0aW5nIGZvciBjb25kaXRpb24gdG8gYmUgbWV0Li4uXCIgKyBjb3VudCk7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgIHdhaXRmb3IodGVzdCwgZXhwZWN0ZWRWYWx1ZSwgbXNlYywgY291bnQsIHNvdXJjZSwgY2FsbGJhY2spO1xuICAgIH0sIG1zZWMpO1xuICAgIHJldHVybjtcbiAgfVxuICAvLyBDb25kaXRpb24gZmluYWxseSBtZXQuIGNhbGxiYWNrKCkgY2FuIGJlIGV4ZWN1dGVkLlxuICBjb25zb2xlLmxvZyhzb3VyY2UgKyAnOiAnICsgdGVzdCgpICsgJywgZXhwZWN0ZWQ6ICcgKyBleHBlY3RlZFZhbHVlICsgJywgJyArIGNvdW50ICsgJyBsb29wcy4nKTtcbiAgY2FsbGJhY2soKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRGVzaWduKCl7XG4gIHZhciBwYXR0ZXJuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gIHBhdHRlcm4ud2lkdGggPSA0MDtcbiAgcGF0dGVybi5oZWlnaHQgPSA0MDtcbiAgdmFyIHBjdHggPSBwYXR0ZXJuLmdldENvbnRleHQoJzJkJyk7XG5cbiAgcGN0eC5maWxsU3R5bGUgPSBcInJnYmEoMTg4LCAyMjIsIDE3OCwgMC41KVwiO1xuICBwY3R4LmZpbGxSZWN0KDAsMCwyMCwyMCk7XG4gIHBjdHguZmlsbFJlY3QoMjAsMjAsMjAsMjApO1xuXG4gIHJldHVybiBwYXR0ZXJuO1xufVxuXG5mdW5jdGlvbiBnZXRJbWFnZVJlZih1cmwpe1xuICB2YXIgaW1nID0gbmV3IEltYWdlKDI1NiwyNTYpOyAvLyB3aWR0aCwgaGVpZ2h0IHZhbHVlcyBhcmUgb3B0aW9uYWwgcGFyYW1zXG4gIGltZy5zcmMgPSAnaW1hZ2VzL2RpYWdvbmFsX3N0cmlwZXNfMS5wbmcnO1xuICByZXR1cm4gaW1nO1xufVxuXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBnYWRtMCA6IGdhZG0wLFxuICBnYWRtMSA6IGdhZG0xLFxuICBnYWRtMiA6IGdhZG0yLFxuICB0aGVtZUxheWVyczogW1wiZ2FkbTBcIiwgXCJnYWRtMVwiLCBcImdhZG0yXCJdIC8vYSBsaXN0IG9mIHRoZSB0aGVtZSBsYXllcnMgLSB1c2VkIHRvIGRldGVybWluZSB3aGV0aGVyIG9yIG5vdCBvbmUgaXMgY3VycmVudGx5IGxvYWRlZCBvciBub3QuXG59OyIsIihmdW5jdGlvbiAoQnVmZmVyKXtcbid1c2Ugc3RyaWN0JztcblxudmFyIGllZWU3NTQgPSByZXF1aXJlKCdpZWVlNzU0Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUHJvdG9idWY7XG5mdW5jdGlvbiBQcm90b2J1ZihidWYpIHtcbiAgICB0aGlzLmJ1ZiA9IGJ1ZjtcbiAgICB0aGlzLnBvcyA9IDA7XG59XG5cblByb3RvYnVmLnByb3RvdHlwZSA9IHtcbiAgICBnZXQgbGVuZ3RoKCkgeyByZXR1cm4gdGhpcy5idWYubGVuZ3RoOyB9XG59O1xuXG5Qcm90b2J1Zi5WYXJpbnQgPSAwO1xuUHJvdG9idWYuSW50NjQgPSAxO1xuUHJvdG9idWYuTWVzc2FnZSA9IDI7XG5Qcm90b2J1Zi5TdHJpbmcgPSAyO1xuUHJvdG9idWYuUGFja2VkID0gMjtcblByb3RvYnVmLkludDMyID0gNTtcblxuUHJvdG9idWYucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmJ1ZiA9IG51bGw7XG59O1xuXG4vLyA9PT0gUkVBRElORyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5Qcm90b2J1Zi5wcm90b3R5cGUucmVhZFVJbnQzMiA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciB2YWwgPSB0aGlzLmJ1Zi5yZWFkVUludDMyTEUodGhpcy5wb3MpO1xuICAgIHRoaXMucG9zICs9IDQ7XG4gICAgcmV0dXJuIHZhbDtcbn07XG5cblByb3RvYnVmLnByb3RvdHlwZS5yZWFkVUludDY0ID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHZhbCA9IHRoaXMuYnVmLnJlYWRVSW50NjRMRSh0aGlzLnBvcyk7XG4gICAgdGhpcy5wb3MgKz0gODtcbiAgICByZXR1cm4gdmFsO1xufTtcblxuUHJvdG9idWYucHJvdG90eXBlLnJlYWREb3VibGUgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgdmFsID0gaWVlZTc1NC5yZWFkKHRoaXMuYnVmLCB0aGlzLnBvcywgdHJ1ZSwgNTIsIDgpO1xuICAgIHRoaXMucG9zICs9IDg7XG4gICAgcmV0dXJuIHZhbDtcbn07XG5cblByb3RvYnVmLnByb3RvdHlwZS5yZWFkVmFyaW50ID0gZnVuY3Rpb24oKSB7XG4gICAgLy8gVE9ETzogYm91bmRzIGNoZWNraW5nXG4gICAgdmFyIHBvcyA9IHRoaXMucG9zO1xuICAgIGlmICh0aGlzLmJ1Zltwb3NdIDw9IDB4N2YpIHtcbiAgICAgICAgdGhpcy5wb3MrKztcbiAgICAgICAgcmV0dXJuIHRoaXMuYnVmW3Bvc107XG4gICAgfSBlbHNlIGlmICh0aGlzLmJ1Zltwb3MgKyAxXSA8PSAweDdmKSB7XG4gICAgICAgIHRoaXMucG9zICs9IDI7XG4gICAgICAgIHJldHVybiAodGhpcy5idWZbcG9zXSAmIDB4N2YpIHwgKHRoaXMuYnVmW3BvcyArIDFdIDw8IDcpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5idWZbcG9zICsgMl0gPD0gMHg3Zikge1xuICAgICAgICB0aGlzLnBvcyArPSAzO1xuICAgICAgICByZXR1cm4gKHRoaXMuYnVmW3Bvc10gJiAweDdmKSB8ICh0aGlzLmJ1Zltwb3MgKyAxXSAmIDB4N2YpIDw8IDcgfCAodGhpcy5idWZbcG9zICsgMl0pIDw8IDE0O1xuICAgIH0gZWxzZSBpZiAodGhpcy5idWZbcG9zICsgM10gPD0gMHg3Zikge1xuICAgICAgICB0aGlzLnBvcyArPSA0O1xuICAgICAgICByZXR1cm4gKHRoaXMuYnVmW3Bvc10gJiAweDdmKSB8ICh0aGlzLmJ1Zltwb3MgKyAxXSAmIDB4N2YpIDw8IDcgfCAodGhpcy5idWZbcG9zICsgMl0gJiAweDdmKSA8PCAxNCB8ICh0aGlzLmJ1Zltwb3MgKyAzXSkgPDwgMjE7XG4gICAgfSBlbHNlIGlmICh0aGlzLmJ1Zltwb3MgKyA0XSA8PSAweDdmKSB7XG4gICAgICAgIHRoaXMucG9zICs9IDU7XG4gICAgICAgIHJldHVybiAoKHRoaXMuYnVmW3Bvc10gJiAweDdmKSB8ICh0aGlzLmJ1Zltwb3MgKyAxXSAmIDB4N2YpIDw8IDcgfCAodGhpcy5idWZbcG9zICsgMl0gJiAweDdmKSA8PCAxNCB8ICh0aGlzLmJ1Zltwb3MgKyAzXSkgPDwgMjEpICsgKHRoaXMuYnVmW3BvcyArIDRdICogMjY4NDM1NDU2KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNraXAoUHJvdG9idWYuVmFyaW50KTtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIC8vIHRocm93IG5ldyBFcnJvcihcIlRPRE86IEhhbmRsZSA2KyBieXRlIHZhcmludHNcIik7XG4gICAgfVxufTtcblxuUHJvdG9idWYucHJvdG90eXBlLnJlYWRTVmFyaW50ID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIG51bSA9IHRoaXMucmVhZFZhcmludCgpO1xuICAgIGlmIChudW0gPiAyMTQ3NDgzNjQ3KSB0aHJvdyBuZXcgRXJyb3IoJ1RPRE86IEhhbmRsZSBudW1iZXJzID49IDJeMzAnKTtcbiAgICAvLyB6aWd6YWcgZW5jb2RpbmdcbiAgICByZXR1cm4gKChudW0gPj4gMSkgXiAtKG51bSAmIDEpKTtcbn07XG5cblByb3RvYnVmLnByb3RvdHlwZS5yZWFkU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGJ5dGVzID0gdGhpcy5yZWFkVmFyaW50KCk7XG4gICAgLy8gVE9ETzogYm91bmRzIGNoZWNraW5nXG4gICAgdmFyIGNociA9IFN0cmluZy5mcm9tQ2hhckNvZGU7XG4gICAgdmFyIGIgPSB0aGlzLmJ1ZjtcbiAgICB2YXIgcCA9IHRoaXMucG9zO1xuICAgIHZhciBlbmQgPSB0aGlzLnBvcyArIGJ5dGVzO1xuICAgIHZhciBzdHIgPSAnJztcbiAgICB3aGlsZSAocCA8IGVuZCkge1xuICAgICAgICBpZiAoYltwXSA8PSAweDdGKSBzdHIgKz0gY2hyKGJbcCsrXSk7XG4gICAgICAgIGVsc2UgaWYgKGJbcF0gPD0gMHhCRikgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIFVURi04IGNvZGVwb2ludDogJyArIGJbcF0pO1xuICAgICAgICBlbHNlIGlmIChiW3BdIDw9IDB4REYpIHN0ciArPSBjaHIoKGJbcCsrXSAmIDB4MUYpIDw8IDYgfCAoYltwKytdICYgMHgzRikpO1xuICAgICAgICBlbHNlIGlmIChiW3BdIDw9IDB4RUYpIHN0ciArPSBjaHIoKGJbcCsrXSAmIDB4MUYpIDw8IDEyIHwgKGJbcCsrXSAmIDB4M0YpIDw8IDYgfCAoYltwKytdICYgMHgzRikpO1xuICAgICAgICBlbHNlIGlmIChiW3BdIDw9IDB4RjcpIHAgKz0gNDsgLy8gV2UgY2FuJ3QgaGFuZGxlIHRoZXNlIGNvZGVwb2ludHMgaW4gSlMsIHNvIHNraXAuXG4gICAgICAgIGVsc2UgaWYgKGJbcF0gPD0gMHhGQikgcCArPSA1O1xuICAgICAgICBlbHNlIGlmIChiW3BdIDw9IDB4RkQpIHAgKz0gNjtcbiAgICAgICAgZWxzZSB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgVVRGLTggY29kZXBvaW50OiAnICsgYltwXSk7XG4gICAgfVxuICAgIHRoaXMucG9zICs9IGJ5dGVzO1xuICAgIHJldHVybiBzdHI7XG59O1xuXG5Qcm90b2J1Zi5wcm90b3R5cGUucmVhZEJ1ZmZlciA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBieXRlcyA9IHRoaXMucmVhZFZhcmludCgpO1xuICAgIHZhciBidWZmZXIgPSB0aGlzLmJ1Zi5zdWJhcnJheSh0aGlzLnBvcywgdGhpcy5wb3MgKyBieXRlcyk7XG4gICAgdGhpcy5wb3MgKz0gYnl0ZXM7XG4gICAgcmV0dXJuIGJ1ZmZlcjtcbn07XG5cblByb3RvYnVmLnByb3RvdHlwZS5yZWFkUGFja2VkID0gZnVuY3Rpb24odHlwZSkge1xuICAgIC8vIFRPRE86IGJvdW5kcyBjaGVja2luZ1xuICAgIHZhciBieXRlcyA9IHRoaXMucmVhZFZhcmludCgpO1xuICAgIHZhciBlbmQgPSB0aGlzLnBvcyArIGJ5dGVzO1xuICAgIHZhciBhcnJheSA9IFtdO1xuICAgIHdoaWxlICh0aGlzLnBvcyA8IGVuZCkge1xuICAgICAgICBhcnJheS5wdXNoKHRoaXNbJ3JlYWQnICsgdHlwZV0oKSk7XG4gICAgfVxuICAgIHJldHVybiBhcnJheTtcbn07XG5cblByb3RvYnVmLnByb3RvdHlwZS5za2lwID0gZnVuY3Rpb24odmFsKSB7XG4gICAgLy8gVE9ETzogYm91bmRzIGNoZWNraW5nXG4gICAgdmFyIHR5cGUgPSB2YWwgJiAweDc7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIC8qIHZhcmludCAqLyBjYXNlIFByb3RvYnVmLlZhcmludDogd2hpbGUgKHRoaXMuYnVmW3RoaXMucG9zKytdID4gMHg3Zik7IGJyZWFrO1xuICAgICAgICAvKiA2NCBiaXQgKi8gY2FzZSBQcm90b2J1Zi5JbnQ2NDogdGhpcy5wb3MgKz0gODsgYnJlYWs7XG4gICAgICAgIC8qIGxlbmd0aCAqLyBjYXNlIFByb3RvYnVmLk1lc3NhZ2U6IHZhciBieXRlcyA9IHRoaXMucmVhZFZhcmludCgpOyB0aGlzLnBvcyArPSBieXRlczsgYnJlYWs7XG4gICAgICAgIC8qIDMyIGJpdCAqLyBjYXNlIFByb3RvYnVmLkludDMyOiB0aGlzLnBvcyArPSA0OyBicmVhaztcbiAgICAgICAgZGVmYXVsdDogdGhyb3cgbmV3IEVycm9yKCdVbmltcGxlbWVudGVkIHR5cGU6ICcgKyB0eXBlKTtcbiAgICB9XG59O1xuXG4vLyA9PT0gV1JJVElORyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5Qcm90b2J1Zi5wcm90b3R5cGUud3JpdGVUYWcgPSBmdW5jdGlvbih0YWcsIHR5cGUpIHtcbiAgICB0aGlzLndyaXRlVmFyaW50KCh0YWcgPDwgMykgfCB0eXBlKTtcbn07XG5cblByb3RvYnVmLnByb3RvdHlwZS5yZWFsbG9jID0gZnVuY3Rpb24obWluKSB7XG4gICAgdmFyIGxlbmd0aCA9IHRoaXMuYnVmLmxlbmd0aDtcbiAgICB3aGlsZSAobGVuZ3RoIDwgdGhpcy5wb3MgKyBtaW4pIGxlbmd0aCAqPSAyO1xuICAgIGlmIChsZW5ndGggIT0gdGhpcy5idWYubGVuZ3RoKSB7XG4gICAgICAgIHZhciBidWYgPSBuZXcgQnVmZmVyKGxlbmd0aCk7XG4gICAgICAgIHRoaXMuYnVmLmNvcHkoYnVmKTtcbiAgICAgICAgdGhpcy5idWYgPSBidWY7XG4gICAgfVxufTtcblxuUHJvdG9idWYucHJvdG90eXBlLmZpbmlzaCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmJ1Zi5zbGljZSgwLCB0aGlzLnBvcyk7XG59O1xuXG5Qcm90b2J1Zi5wcm90b3R5cGUud3JpdGVQYWNrZWQgPSBmdW5jdGlvbih0eXBlLCB0YWcsIGl0ZW1zKSB7XG4gICAgaWYgKCFpdGVtcy5sZW5ndGgpIHJldHVybjtcblxuICAgIHZhciBtZXNzYWdlID0gbmV3IFByb3RvYnVmKCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBtZXNzYWdlWyd3cml0ZScgKyB0eXBlXShpdGVtc1tpXSk7XG4gICAgfVxuICAgIHZhciBkYXRhID0gbWVzc2FnZS5maW5pc2goKTtcblxuICAgIHRoaXMud3JpdGVUYWcodGFnLCBQcm90b2J1Zi5QYWNrZWQpO1xuICAgIHRoaXMud3JpdGVCdWZmZXIoZGF0YSk7XG59O1xuXG5Qcm90b2J1Zi5wcm90b3R5cGUud3JpdGVVSW50MzIgPSBmdW5jdGlvbih2YWwpIHtcbiAgICB0aGlzLnJlYWxsb2MoNCk7XG4gICAgdGhpcy5idWYud3JpdGVVSW50MzJMRSh2YWwsIHRoaXMucG9zKTtcbiAgICB0aGlzLnBvcyArPSA0O1xufTtcblxuUHJvdG9idWYucHJvdG90eXBlLndyaXRlVGFnZ2VkVUludDMyID0gZnVuY3Rpb24odGFnLCB2YWwpIHtcbiAgICB0aGlzLndyaXRlVGFnKHRhZywgUHJvdG9idWYuSW50MzIpO1xuICAgIHRoaXMud3JpdGVVSW50MzIodmFsKTtcbn07XG5cblByb3RvYnVmLnByb3RvdHlwZS53cml0ZVZhcmludCA9IGZ1bmN0aW9uKHZhbCkge1xuICAgIHZhbCA9IE51bWJlcih2YWwpO1xuICAgIGlmIChpc05hTih2YWwpKSB7XG4gICAgICAgIHZhbCA9IDA7XG4gICAgfVxuXG4gICAgaWYgKHZhbCA8PSAweDdmKSB7XG4gICAgICAgIHRoaXMucmVhbGxvYygxKTtcbiAgICAgICAgdGhpcy5idWZbdGhpcy5wb3MrK10gPSB2YWw7XG4gICAgfSBlbHNlIGlmICh2YWwgPD0gMHgzZmZmKSB7XG4gICAgICAgIHRoaXMucmVhbGxvYygyKTtcbiAgICAgICAgdGhpcy5idWZbdGhpcy5wb3MrK10gPSAweDgwIHwgKCh2YWwgPj4+IDApICYgMHg3Zik7XG4gICAgICAgIHRoaXMuYnVmW3RoaXMucG9zKytdID0gMHgwMCB8ICgodmFsID4+PiA3KSAmIDB4N2YpO1xuICAgIH0gZWxzZSBpZiAodmFsIDw9IDB4MWZmZmZmZikge1xuICAgICAgICB0aGlzLnJlYWxsb2MoMyk7XG4gICAgICAgIHRoaXMuYnVmW3RoaXMucG9zKytdID0gMHg4MCB8ICgodmFsID4+PiAwKSAmIDB4N2YpO1xuICAgICAgICB0aGlzLmJ1Zlt0aGlzLnBvcysrXSA9IDB4ODAgfCAoKHZhbCA+Pj4gNykgJiAweDdmKTtcbiAgICAgICAgdGhpcy5idWZbdGhpcy5wb3MrK10gPSAweDAwIHwgKCh2YWwgPj4+IDE0KSAmIDB4N2YpO1xuICAgIH0gZWxzZSBpZiAodmFsIDw9IDB4ZmZmZmZmZikge1xuICAgICAgICB0aGlzLnJlYWxsb2MoNCk7XG4gICAgICAgIHRoaXMuYnVmW3RoaXMucG9zKytdID0gMHg4MCB8ICgodmFsID4+PiAwKSAmIDB4N2YpO1xuICAgICAgICB0aGlzLmJ1Zlt0aGlzLnBvcysrXSA9IDB4ODAgfCAoKHZhbCA+Pj4gNykgJiAweDdmKTtcbiAgICAgICAgdGhpcy5idWZbdGhpcy5wb3MrK10gPSAweDgwIHwgKCh2YWwgPj4+IDE0KSAmIDB4N2YpO1xuICAgICAgICB0aGlzLmJ1Zlt0aGlzLnBvcysrXSA9IDB4MDAgfCAoKHZhbCA+Pj4gMjEpICYgMHg3Zik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgd2hpbGUgKHZhbCA+IDApIHtcbiAgICAgICAgICAgIHZhciBiID0gdmFsICYgMHg3ZjtcbiAgICAgICAgICAgIHZhbCA9IE1hdGguZmxvb3IodmFsIC8gMTI4KTtcbiAgICAgICAgICAgIGlmICh2YWwgPiAwKSBiIHw9IDB4ODBcbiAgICAgICAgICAgIHRoaXMucmVhbGxvYygxKTtcbiAgICAgICAgICAgIHRoaXMuYnVmW3RoaXMucG9zKytdID0gYjtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cblByb3RvYnVmLnByb3RvdHlwZS53cml0ZVRhZ2dlZFZhcmludCA9IGZ1bmN0aW9uKHRhZywgdmFsKSB7XG4gICAgdGhpcy53cml0ZVRhZyh0YWcsIFByb3RvYnVmLlZhcmludCk7XG4gICAgdGhpcy53cml0ZVZhcmludCh2YWwpO1xufTtcblxuUHJvdG9idWYucHJvdG90eXBlLndyaXRlU1ZhcmludCA9IGZ1bmN0aW9uKHZhbCkge1xuICAgIGlmICh2YWwgPj0gMCkge1xuICAgICAgICB0aGlzLndyaXRlVmFyaW50KHZhbCAqIDIpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMud3JpdGVWYXJpbnQodmFsICogLTIgLSAxKTtcbiAgICB9XG59O1xuXG5Qcm90b2J1Zi5wcm90b3R5cGUud3JpdGVUYWdnZWRTVmFyaW50ID0gZnVuY3Rpb24odGFnLCB2YWwpIHtcbiAgICB0aGlzLndyaXRlVGFnKHRhZywgUHJvdG9idWYuVmFyaW50KTtcbiAgICB0aGlzLndyaXRlU1ZhcmludCh2YWwpO1xufTtcblxuUHJvdG9idWYucHJvdG90eXBlLndyaXRlQm9vbGVhbiA9IGZ1bmN0aW9uKHZhbCkge1xuICAgIHRoaXMud3JpdGVWYXJpbnQoQm9vbGVhbih2YWwpKTtcbn07XG5cblByb3RvYnVmLnByb3RvdHlwZS53cml0ZVRhZ2dlZEJvb2xlYW4gPSBmdW5jdGlvbih0YWcsIHZhbCkge1xuICAgIHRoaXMud3JpdGVUYWdnZWRWYXJpbnQodGFnLCBCb29sZWFuKHZhbCkpO1xufTtcblxuUHJvdG9idWYucHJvdG90eXBlLndyaXRlU3RyaW5nID0gZnVuY3Rpb24oc3RyKSB7XG4gICAgc3RyID0gU3RyaW5nKHN0cik7XG4gICAgdmFyIGJ5dGVzID0gQnVmZmVyLmJ5dGVMZW5ndGgoc3RyKTtcbiAgICB0aGlzLndyaXRlVmFyaW50KGJ5dGVzKTtcbiAgICB0aGlzLnJlYWxsb2MoYnl0ZXMpO1xuICAgIHRoaXMuYnVmLndyaXRlKHN0ciwgdGhpcy5wb3MpO1xuICAgIHRoaXMucG9zICs9IGJ5dGVzO1xufTtcblxuUHJvdG9idWYucHJvdG90eXBlLndyaXRlVGFnZ2VkU3RyaW5nID0gZnVuY3Rpb24odGFnLCBzdHIpIHtcbiAgICB0aGlzLndyaXRlVGFnKHRhZywgUHJvdG9idWYuU3RyaW5nKTtcbiAgICB0aGlzLndyaXRlU3RyaW5nKHN0cik7XG59O1xuXG5Qcm90b2J1Zi5wcm90b3R5cGUud3JpdGVGbG9hdCA9IGZ1bmN0aW9uKHZhbCkge1xuICAgIHRoaXMucmVhbGxvYyg0KTtcbiAgICB0aGlzLmJ1Zi53cml0ZUZsb2F0TEUodmFsLCB0aGlzLnBvcyk7XG4gICAgdGhpcy5wb3MgKz0gNDtcbn07XG5cblByb3RvYnVmLnByb3RvdHlwZS53cml0ZVRhZ2dlZEZsb2F0ID0gZnVuY3Rpb24odGFnLCB2YWwpIHtcbiAgICB0aGlzLndyaXRlVGFnKHRhZywgUHJvdG9idWYuSW50MzIpO1xuICAgIHRoaXMud3JpdGVGbG9hdCh2YWwpO1xufTtcblxuUHJvdG9idWYucHJvdG90eXBlLndyaXRlRG91YmxlID0gZnVuY3Rpb24odmFsKSB7XG4gICAgdGhpcy5yZWFsbG9jKDgpO1xuICAgIHRoaXMuYnVmLndyaXRlRG91YmxlTEUodmFsLCB0aGlzLnBvcyk7XG4gICAgdGhpcy5wb3MgKz0gODtcbn07XG5cblByb3RvYnVmLnByb3RvdHlwZS53cml0ZVRhZ2dlZERvdWJsZSA9IGZ1bmN0aW9uKHRhZywgdmFsKSB7XG4gICAgdGhpcy53cml0ZVRhZyh0YWcsIFByb3RvYnVmLkludDY0KTtcbiAgICB0aGlzLndyaXRlRG91YmxlKHZhbCk7XG59O1xuXG5Qcm90b2J1Zi5wcm90b3R5cGUud3JpdGVCdWZmZXIgPSBmdW5jdGlvbihidWZmZXIpIHtcbiAgICB2YXIgYnl0ZXMgPSBidWZmZXIubGVuZ3RoO1xuICAgIHRoaXMud3JpdGVWYXJpbnQoYnl0ZXMpO1xuICAgIHRoaXMucmVhbGxvYyhieXRlcyk7XG4gICAgYnVmZmVyLmNvcHkodGhpcy5idWYsIHRoaXMucG9zKTtcbiAgICB0aGlzLnBvcyArPSBieXRlcztcbn07XG5cblByb3RvYnVmLnByb3RvdHlwZS53cml0ZVRhZ2dlZEJ1ZmZlciA9IGZ1bmN0aW9uKHRhZywgYnVmZmVyKSB7XG4gICAgdGhpcy53cml0ZVRhZyh0YWcsIFByb3RvYnVmLlN0cmluZyk7XG4gICAgdGhpcy53cml0ZUJ1ZmZlcihidWZmZXIpO1xufTtcblxuUHJvdG9idWYucHJvdG90eXBlLndyaXRlTWVzc2FnZSA9IGZ1bmN0aW9uKHRhZywgcHJvdG9idWYpIHtcbiAgICB2YXIgYnVmZmVyID0gcHJvdG9idWYuZmluaXNoKCk7XG4gICAgdGhpcy53cml0ZVRhZyh0YWcsIFByb3RvYnVmLk1lc3NhZ2UpO1xuICAgIHRoaXMud3JpdGVCdWZmZXIoYnVmZmVyKTtcbn07XG5cbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwiYnVmZmVyXCIpLkJ1ZmZlcikiLCJleHBvcnRzLnJlYWQgPSBmdW5jdGlvbihidWZmZXIsIG9mZnNldCwgaXNMRSwgbUxlbiwgbkJ5dGVzKSB7XG4gIHZhciBlLCBtLFxuICAgICAgZUxlbiA9IG5CeXRlcyAqIDggLSBtTGVuIC0gMSxcbiAgICAgIGVNYXggPSAoMSA8PCBlTGVuKSAtIDEsXG4gICAgICBlQmlhcyA9IGVNYXggPj4gMSxcbiAgICAgIG5CaXRzID0gLTcsXG4gICAgICBpID0gaXNMRSA/IChuQnl0ZXMgLSAxKSA6IDAsXG4gICAgICBkID0gaXNMRSA/IC0xIDogMSxcbiAgICAgIHMgPSBidWZmZXJbb2Zmc2V0ICsgaV07XG5cbiAgaSArPSBkO1xuXG4gIGUgPSBzICYgKCgxIDw8ICgtbkJpdHMpKSAtIDEpO1xuICBzID4+PSAoLW5CaXRzKTtcbiAgbkJpdHMgKz0gZUxlbjtcbiAgZm9yICg7IG5CaXRzID4gMDsgZSA9IGUgKiAyNTYgKyBidWZmZXJbb2Zmc2V0ICsgaV0sIGkgKz0gZCwgbkJpdHMgLT0gOCk7XG5cbiAgbSA9IGUgJiAoKDEgPDwgKC1uQml0cykpIC0gMSk7XG4gIGUgPj49ICgtbkJpdHMpO1xuICBuQml0cyArPSBtTGVuO1xuICBmb3IgKDsgbkJpdHMgPiAwOyBtID0gbSAqIDI1NiArIGJ1ZmZlcltvZmZzZXQgKyBpXSwgaSArPSBkLCBuQml0cyAtPSA4KTtcblxuICBpZiAoZSA9PT0gMCkge1xuICAgIGUgPSAxIC0gZUJpYXM7XG4gIH0gZWxzZSBpZiAoZSA9PT0gZU1heCkge1xuICAgIHJldHVybiBtID8gTmFOIDogKChzID8gLTEgOiAxKSAqIEluZmluaXR5KTtcbiAgfSBlbHNlIHtcbiAgICBtID0gbSArIE1hdGgucG93KDIsIG1MZW4pO1xuICAgIGUgPSBlIC0gZUJpYXM7XG4gIH1cbiAgcmV0dXJuIChzID8gLTEgOiAxKSAqIG0gKiBNYXRoLnBvdygyLCBlIC0gbUxlbik7XG59O1xuXG5leHBvcnRzLndyaXRlID0gZnVuY3Rpb24oYnVmZmVyLCB2YWx1ZSwgb2Zmc2V0LCBpc0xFLCBtTGVuLCBuQnl0ZXMpIHtcbiAgdmFyIGUsIG0sIGMsXG4gICAgICBlTGVuID0gbkJ5dGVzICogOCAtIG1MZW4gLSAxLFxuICAgICAgZU1heCA9ICgxIDw8IGVMZW4pIC0gMSxcbiAgICAgIGVCaWFzID0gZU1heCA+PiAxLFxuICAgICAgcnQgPSAobUxlbiA9PT0gMjMgPyBNYXRoLnBvdygyLCAtMjQpIC0gTWF0aC5wb3coMiwgLTc3KSA6IDApLFxuICAgICAgaSA9IGlzTEUgPyAwIDogKG5CeXRlcyAtIDEpLFxuICAgICAgZCA9IGlzTEUgPyAxIDogLTEsXG4gICAgICBzID0gdmFsdWUgPCAwIHx8ICh2YWx1ZSA9PT0gMCAmJiAxIC8gdmFsdWUgPCAwKSA/IDEgOiAwO1xuXG4gIHZhbHVlID0gTWF0aC5hYnModmFsdWUpO1xuXG4gIGlmIChpc05hTih2YWx1ZSkgfHwgdmFsdWUgPT09IEluZmluaXR5KSB7XG4gICAgbSA9IGlzTmFOKHZhbHVlKSA/IDEgOiAwO1xuICAgIGUgPSBlTWF4O1xuICB9IGVsc2Uge1xuICAgIGUgPSBNYXRoLmZsb29yKE1hdGgubG9nKHZhbHVlKSAvIE1hdGguTE4yKTtcbiAgICBpZiAodmFsdWUgKiAoYyA9IE1hdGgucG93KDIsIC1lKSkgPCAxKSB7XG4gICAgICBlLS07XG4gICAgICBjICo9IDI7XG4gICAgfVxuICAgIGlmIChlICsgZUJpYXMgPj0gMSkge1xuICAgICAgdmFsdWUgKz0gcnQgLyBjO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWx1ZSArPSBydCAqIE1hdGgucG93KDIsIDEgLSBlQmlhcyk7XG4gICAgfVxuICAgIGlmICh2YWx1ZSAqIGMgPj0gMikge1xuICAgICAgZSsrO1xuICAgICAgYyAvPSAyO1xuICAgIH1cblxuICAgIGlmIChlICsgZUJpYXMgPj0gZU1heCkge1xuICAgICAgbSA9IDA7XG4gICAgICBlID0gZU1heDtcbiAgICB9IGVsc2UgaWYgKGUgKyBlQmlhcyA+PSAxKSB7XG4gICAgICBtID0gKHZhbHVlICogYyAtIDEpICogTWF0aC5wb3coMiwgbUxlbik7XG4gICAgICBlID0gZSArIGVCaWFzO1xuICAgIH0gZWxzZSB7XG4gICAgICBtID0gdmFsdWUgKiBNYXRoLnBvdygyLCBlQmlhcyAtIDEpICogTWF0aC5wb3coMiwgbUxlbik7XG4gICAgICBlID0gMDtcbiAgICB9XG4gIH1cblxuICBmb3IgKDsgbUxlbiA+PSA4OyBidWZmZXJbb2Zmc2V0ICsgaV0gPSBtICYgMHhmZiwgaSArPSBkLCBtIC89IDI1NiwgbUxlbiAtPSA4KTtcblxuICBlID0gKGUgPDwgbUxlbikgfCBtO1xuICBlTGVuICs9IG1MZW47XG4gIGZvciAoOyBlTGVuID4gMDsgYnVmZmVyW29mZnNldCArIGldID0gZSAmIDB4ZmYsIGkgKz0gZCwgZSAvPSAyNTYsIGVMZW4gLT0gOCk7XG5cbiAgYnVmZmVyW29mZnNldCArIGkgLSBkXSB8PSBzICogMTI4O1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBQb2ludDtcblxuZnVuY3Rpb24gUG9pbnQoeCwgeSkge1xuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbn1cblxuUG9pbnQucHJvdG90eXBlID0ge1xuICAgIGNsb25lOiBmdW5jdGlvbigpIHsgcmV0dXJuIG5ldyBQb2ludCh0aGlzLngsIHRoaXMueSk7IH0sXG5cbiAgICBhZGQ6ICAgICBmdW5jdGlvbihwKSB7IHJldHVybiB0aGlzLmNsb25lKCkuX2FkZChwKTsgICAgIH0sXG4gICAgc3ViOiAgICAgZnVuY3Rpb24ocCkgeyByZXR1cm4gdGhpcy5jbG9uZSgpLl9zdWIocCk7ICAgICB9LFxuICAgIG11bHQ6ICAgIGZ1bmN0aW9uKGspIHsgcmV0dXJuIHRoaXMuY2xvbmUoKS5fbXVsdChrKTsgICAgfSxcbiAgICBkaXY6ICAgICBmdW5jdGlvbihrKSB7IHJldHVybiB0aGlzLmNsb25lKCkuX2RpdihrKTsgICAgIH0sXG4gICAgcm90YXRlOiAgZnVuY3Rpb24oYSkgeyByZXR1cm4gdGhpcy5jbG9uZSgpLl9yb3RhdGUoYSk7ICB9LFxuICAgIG1hdE11bHQ6IGZ1bmN0aW9uKG0pIHsgcmV0dXJuIHRoaXMuY2xvbmUoKS5fbWF0TXVsdChtKTsgfSxcbiAgICB1bml0OiAgICBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMuY2xvbmUoKS5fdW5pdCgpOyB9LFxuICAgIHBlcnA6ICAgIGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpcy5jbG9uZSgpLl9wZXJwKCk7IH0sXG4gICAgcm91bmQ6ICAgZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzLmNsb25lKCkuX3JvdW5kKCk7IH0sXG5cbiAgICBtYWc6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KHRoaXMueCAqIHRoaXMueCArIHRoaXMueSAqIHRoaXMueSk7XG4gICAgfSxcblxuICAgIGVxdWFsczogZnVuY3Rpb24ocCkge1xuICAgICAgICByZXR1cm4gdGhpcy54ID09PSBwLnggJiZcbiAgICAgICAgICAgICAgIHRoaXMueSA9PT0gcC55O1xuICAgIH0sXG5cbiAgICBkaXN0OiBmdW5jdGlvbihwKSB7XG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQodGhpcy5kaXN0U3FyKHApKTtcbiAgICB9LFxuXG4gICAgZGlzdFNxcjogZnVuY3Rpb24ocCkge1xuICAgICAgICB2YXIgZHggPSBwLnggLSB0aGlzLngsXG4gICAgICAgICAgICBkeSA9IHAueSAtIHRoaXMueTtcbiAgICAgICAgcmV0dXJuIGR4ICogZHggKyBkeSAqIGR5O1xuICAgIH0sXG5cbiAgICBhbmdsZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBNYXRoLmF0YW4yKHRoaXMueSwgdGhpcy54KTtcbiAgICB9LFxuXG4gICAgYW5nbGVUbzogZnVuY3Rpb24oYikge1xuICAgICAgICByZXR1cm4gTWF0aC5hdGFuMih0aGlzLnkgLSBiLnksIHRoaXMueCAtIGIueCk7XG4gICAgfSxcblxuICAgIGFuZ2xlV2l0aDogZnVuY3Rpb24oYikge1xuICAgICAgICByZXR1cm4gdGhpcy5hbmdsZVdpdGhTZXAoYi54LCBiLnkpO1xuICAgIH0sXG5cbiAgICAvLyBGaW5kIHRoZSBhbmdsZSBvZiB0aGUgdHdvIHZlY3RvcnMsIHNvbHZpbmcgdGhlIGZvcm11bGEgZm9yIHRoZSBjcm9zcyBwcm9kdWN0IGEgeCBiID0gfGF8fGJ8c2luKM64KSBmb3IgzrguXG4gICAgYW5nbGVXaXRoU2VwOiBmdW5jdGlvbih4LCB5KSB7XG4gICAgICAgIHJldHVybiBNYXRoLmF0YW4yKFxuICAgICAgICAgICAgdGhpcy54ICogeSAtIHRoaXMueSAqIHgsXG4gICAgICAgICAgICB0aGlzLnggKiB4ICsgdGhpcy55ICogeSk7XG4gICAgfSxcblxuICAgIF9tYXRNdWx0OiBmdW5jdGlvbihtKSB7XG4gICAgICAgIHZhciB4ID0gbVswXSAqIHRoaXMueCArIG1bMV0gKiB0aGlzLnksXG4gICAgICAgICAgICB5ID0gbVsyXSAqIHRoaXMueCArIG1bM10gKiB0aGlzLnk7XG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICBfYWRkOiBmdW5jdGlvbihwKSB7XG4gICAgICAgIHRoaXMueCArPSBwLng7XG4gICAgICAgIHRoaXMueSArPSBwLnk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICBfc3ViOiBmdW5jdGlvbihwKSB7XG4gICAgICAgIHRoaXMueCAtPSBwLng7XG4gICAgICAgIHRoaXMueSAtPSBwLnk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICBfbXVsdDogZnVuY3Rpb24oaykge1xuICAgICAgICB0aGlzLnggKj0gaztcbiAgICAgICAgdGhpcy55ICo9IGs7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICBfZGl2OiBmdW5jdGlvbihrKSB7XG4gICAgICAgIHRoaXMueCAvPSBrO1xuICAgICAgICB0aGlzLnkgLz0gaztcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIF91bml0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5fZGl2KHRoaXMubWFnKCkpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgX3BlcnA6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgeSA9IHRoaXMueTtcbiAgICAgICAgdGhpcy55ID0gdGhpcy54O1xuICAgICAgICB0aGlzLnggPSAteTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIF9yb3RhdGU6IGZ1bmN0aW9uKGFuZ2xlKSB7XG4gICAgICAgIHZhciBjb3MgPSBNYXRoLmNvcyhhbmdsZSksXG4gICAgICAgICAgICBzaW4gPSBNYXRoLnNpbihhbmdsZSksXG4gICAgICAgICAgICB4ID0gY29zICogdGhpcy54IC0gc2luICogdGhpcy55LFxuICAgICAgICAgICAgeSA9IHNpbiAqIHRoaXMueCArIGNvcyAqIHRoaXMueTtcbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIF9yb3VuZDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMueCA9IE1hdGgucm91bmQodGhpcy54KTtcbiAgICAgICAgdGhpcy55ID0gTWF0aC5yb3VuZCh0aGlzLnkpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59O1xuXG4vLyBjb25zdHJ1Y3RzIFBvaW50IGZyb20gYW4gYXJyYXkgaWYgbmVjZXNzYXJ5XG5Qb2ludC5jb252ZXJ0ID0gZnVuY3Rpb24gKGEpIHtcbiAgICBpZiAoYSBpbnN0YW5jZW9mIFBvaW50KSB7XG4gICAgICAgIHJldHVybiBhO1xuICAgIH1cbiAgICBpZiAoQXJyYXkuaXNBcnJheShhKSkge1xuICAgICAgICByZXR1cm4gbmV3IFBvaW50KGFbMF0sIGFbMV0pO1xuICAgIH1cbiAgICByZXR1cm4gYTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cy5WZWN0b3JUaWxlID0gcmVxdWlyZSgnLi9saWIvdmVjdG9ydGlsZS5qcycpO1xubW9kdWxlLmV4cG9ydHMuVmVjdG9yVGlsZUZlYXR1cmUgPSByZXF1aXJlKCcuL2xpYi92ZWN0b3J0aWxlZmVhdHVyZS5qcycpO1xubW9kdWxlLmV4cG9ydHMuVmVjdG9yVGlsZUxheWVyID0gcmVxdWlyZSgnLi9saWIvdmVjdG9ydGlsZWxheWVyLmpzJyk7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBWZWN0b3JUaWxlTGF5ZXIgPSByZXF1aXJlKCcuL3ZlY3RvcnRpbGVsYXllcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFZlY3RvclRpbGU7XG5cbmZ1bmN0aW9uIFZlY3RvclRpbGUoYnVmZmVyLCBlbmQpIHtcblxuICAgIHRoaXMubGF5ZXJzID0ge307XG4gICAgdGhpcy5fYnVmZmVyID0gYnVmZmVyO1xuXG4gICAgZW5kID0gZW5kIHx8IGJ1ZmZlci5sZW5ndGg7XG5cbiAgICB3aGlsZSAoYnVmZmVyLnBvcyA8IGVuZCkge1xuICAgICAgICB2YXIgdmFsID0gYnVmZmVyLnJlYWRWYXJpbnQoKSxcbiAgICAgICAgICAgIHRhZyA9IHZhbCA+PiAzO1xuXG4gICAgICAgIGlmICh0YWcgPT0gMykge1xuICAgICAgICAgICAgdmFyIGxheWVyID0gdGhpcy5yZWFkTGF5ZXIoKTtcbiAgICAgICAgICAgIGlmIChsYXllci5sZW5ndGgpIHRoaXMubGF5ZXJzW2xheWVyLm5hbWVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBidWZmZXIuc2tpcCh2YWwpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5WZWN0b3JUaWxlLnByb3RvdHlwZS5yZWFkTGF5ZXIgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgYnVmZmVyID0gdGhpcy5fYnVmZmVyLFxuICAgICAgICBieXRlcyA9IGJ1ZmZlci5yZWFkVmFyaW50KCksXG4gICAgICAgIGVuZCA9IGJ1ZmZlci5wb3MgKyBieXRlcyxcbiAgICAgICAgbGF5ZXIgPSBuZXcgVmVjdG9yVGlsZUxheWVyKGJ1ZmZlciwgZW5kKTtcblxuICAgIGJ1ZmZlci5wb3MgPSBlbmQ7XG5cbiAgICByZXR1cm4gbGF5ZXI7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgUG9pbnQgPSByZXF1aXJlKCdwb2ludC1nZW9tZXRyeScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFZlY3RvclRpbGVGZWF0dXJlO1xuXG5mdW5jdGlvbiBWZWN0b3JUaWxlRmVhdHVyZShidWZmZXIsIGVuZCwgZXh0ZW50LCBrZXlzLCB2YWx1ZXMpIHtcblxuICAgIHRoaXMucHJvcGVydGllcyA9IHt9O1xuXG4gICAgLy8gUHVibGljXG4gICAgdGhpcy5leHRlbnQgPSBleHRlbnQ7XG4gICAgdGhpcy50eXBlID0gMDtcblxuICAgIC8vIFByaXZhdGVcbiAgICB0aGlzLl9idWZmZXIgPSBidWZmZXI7XG4gICAgdGhpcy5fZ2VvbWV0cnkgPSAtMTtcblxuICAgIGVuZCA9IGVuZCB8fCBidWZmZXIubGVuZ3RoO1xuXG4gICAgd2hpbGUgKGJ1ZmZlci5wb3MgPCBlbmQpIHtcbiAgICAgICAgdmFyIHZhbCA9IGJ1ZmZlci5yZWFkVmFyaW50KCksXG4gICAgICAgICAgICB0YWcgPSB2YWwgPj4gMztcblxuICAgICAgICBpZiAodGFnID09IDEpIHtcbiAgICAgICAgICAgIHRoaXMuX2lkID0gYnVmZmVyLnJlYWRWYXJpbnQoKTtcblxuICAgICAgICB9IGVsc2UgaWYgKHRhZyA9PSAyKSB7XG4gICAgICAgICAgICB2YXIgdGFnRW5kID0gYnVmZmVyLnBvcyArIGJ1ZmZlci5yZWFkVmFyaW50KCk7XG5cbiAgICAgICAgICAgIHdoaWxlIChidWZmZXIucG9zIDwgdGFnRW5kKSB7XG4gICAgICAgICAgICAgICAgdmFyIGtleSA9IGtleXNbYnVmZmVyLnJlYWRWYXJpbnQoKV07XG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gdmFsdWVzW2J1ZmZlci5yZWFkVmFyaW50KCldO1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcGVydGllc1trZXldID0gdmFsdWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSBlbHNlIGlmICh0YWcgPT0gMykge1xuICAgICAgICAgICAgdGhpcy50eXBlID0gYnVmZmVyLnJlYWRWYXJpbnQoKTtcblxuICAgICAgICB9IGVsc2UgaWYgKHRhZyA9PSA0KSB7XG4gICAgICAgICAgICB0aGlzLl9nZW9tZXRyeSA9IGJ1ZmZlci5wb3M7XG4gICAgICAgICAgICBidWZmZXIuc2tpcCh2YWwpO1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBidWZmZXIuc2tpcCh2YWwpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5WZWN0b3JUaWxlRmVhdHVyZS50eXBlcyA9IFsnVW5rbm93bicsICdQb2ludCcsICdMaW5lU3RyaW5nJywgJ1BvbHlnb24nXTtcblxuVmVjdG9yVGlsZUZlYXR1cmUucHJvdG90eXBlLmxvYWRHZW9tZXRyeSA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBidWZmZXIgPSB0aGlzLl9idWZmZXI7XG4gICAgYnVmZmVyLnBvcyA9IHRoaXMuX2dlb21ldHJ5O1xuXG4gICAgdmFyIGJ5dGVzID0gYnVmZmVyLnJlYWRWYXJpbnQoKSxcbiAgICAgICAgZW5kID0gYnVmZmVyLnBvcyArIGJ5dGVzLFxuICAgICAgICBjbWQgPSAxLFxuICAgICAgICBsZW5ndGggPSAwLFxuICAgICAgICB4ID0gMCxcbiAgICAgICAgeSA9IDAsXG4gICAgICAgIGxpbmVzID0gW10sXG4gICAgICAgIGxpbmU7XG5cbiAgICB3aGlsZSAoYnVmZmVyLnBvcyA8IGVuZCkge1xuICAgICAgICBpZiAoIWxlbmd0aCkge1xuICAgICAgICAgICAgdmFyIGNtZF9sZW5ndGggPSBidWZmZXIucmVhZFZhcmludCgpO1xuICAgICAgICAgICAgY21kID0gY21kX2xlbmd0aCAmIDB4NztcbiAgICAgICAgICAgIGxlbmd0aCA9IGNtZF9sZW5ndGggPj4gMztcbiAgICAgICAgfVxuXG4gICAgICAgIGxlbmd0aC0tO1xuXG4gICAgICAgIGlmIChjbWQgPT09IDEgfHwgY21kID09PSAyKSB7XG4gICAgICAgICAgICB4ICs9IGJ1ZmZlci5yZWFkU1ZhcmludCgpO1xuICAgICAgICAgICAgeSArPSBidWZmZXIucmVhZFNWYXJpbnQoKTtcblxuICAgICAgICAgICAgaWYgKGNtZCA9PT0gMSkge1xuICAgICAgICAgICAgICAgIC8vIG1vdmVUb1xuICAgICAgICAgICAgICAgIGlmIChsaW5lKSB7XG4gICAgICAgICAgICAgICAgICAgIGxpbmVzLnB1c2gobGluZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxpbmUgPSBbXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGluZS5wdXNoKG5ldyBQb2ludCh4LCB5KSk7XG4gICAgICAgIH0gZWxzZSBpZiAoY21kID09PSA3KSB7XG4gICAgICAgICAgICAvLyBjbG9zZVBvbHlnb25cbiAgICAgICAgICAgIGxpbmUucHVzaChsaW5lWzBdLmNsb25lKCkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCd1bmtub3duIGNvbW1hbmQgJyArIGNtZCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobGluZSkgbGluZXMucHVzaChsaW5lKTtcblxuICAgIHJldHVybiBsaW5lcztcbn07XG5cblZlY3RvclRpbGVGZWF0dXJlLnByb3RvdHlwZS5iYm94ID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGJ1ZmZlciA9IHRoaXMuX2J1ZmZlcjtcbiAgICBidWZmZXIucG9zID0gdGhpcy5fZ2VvbWV0cnk7XG5cbiAgICB2YXIgYnl0ZXMgPSBidWZmZXIucmVhZFZhcmludCgpLFxuICAgICAgICBlbmQgPSBidWZmZXIucG9zICsgYnl0ZXMsXG5cbiAgICAgICAgY21kID0gMSxcbiAgICAgICAgbGVuZ3RoID0gMCxcbiAgICAgICAgeCA9IDAsXG4gICAgICAgIHkgPSAwLFxuICAgICAgICB4MSA9IEluZmluaXR5LFxuICAgICAgICB4MiA9IC1JbmZpbml0eSxcbiAgICAgICAgeTEgPSBJbmZpbml0eSxcbiAgICAgICAgeTIgPSAtSW5maW5pdHk7XG5cbiAgICB3aGlsZSAoYnVmZmVyLnBvcyA8IGVuZCkge1xuICAgICAgICBpZiAoIWxlbmd0aCkge1xuICAgICAgICAgICAgdmFyIGNtZF9sZW5ndGggPSBidWZmZXIucmVhZFZhcmludCgpO1xuICAgICAgICAgICAgY21kID0gY21kX2xlbmd0aCAmIDB4NztcbiAgICAgICAgICAgIGxlbmd0aCA9IGNtZF9sZW5ndGggPj4gMztcbiAgICAgICAgfVxuXG4gICAgICAgIGxlbmd0aC0tO1xuXG4gICAgICAgIGlmIChjbWQgPT09IDEgfHwgY21kID09PSAyKSB7XG4gICAgICAgICAgICB4ICs9IGJ1ZmZlci5yZWFkU1ZhcmludCgpO1xuICAgICAgICAgICAgeSArPSBidWZmZXIucmVhZFNWYXJpbnQoKTtcbiAgICAgICAgICAgIGlmICh4IDwgeDEpIHgxID0geDtcbiAgICAgICAgICAgIGlmICh4ID4geDIpIHgyID0geDtcbiAgICAgICAgICAgIGlmICh5IDwgeTEpIHkxID0geTtcbiAgICAgICAgICAgIGlmICh5ID4geTIpIHkyID0geTtcblxuICAgICAgICB9IGVsc2UgaWYgKGNtZCAhPT0gNykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCd1bmtub3duIGNvbW1hbmQgJyArIGNtZCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gW3gxLCB5MSwgeDIsIHkyXTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBWZWN0b3JUaWxlRmVhdHVyZSA9IHJlcXVpcmUoJy4vdmVjdG9ydGlsZWZlYXR1cmUuanMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBWZWN0b3JUaWxlTGF5ZXI7XG5mdW5jdGlvbiBWZWN0b3JUaWxlTGF5ZXIoYnVmZmVyLCBlbmQpIHtcbiAgICAvLyBQdWJsaWNcbiAgICB0aGlzLnZlcnNpb24gPSAxO1xuICAgIHRoaXMubmFtZSA9IG51bGw7XG4gICAgdGhpcy5leHRlbnQgPSA0MDk2O1xuICAgIHRoaXMubGVuZ3RoID0gMDtcblxuICAgIC8vIFByaXZhdGVcbiAgICB0aGlzLl9idWZmZXIgPSBidWZmZXI7XG4gICAgdGhpcy5fa2V5cyA9IFtdO1xuICAgIHRoaXMuX3ZhbHVlcyA9IFtdO1xuICAgIHRoaXMuX2ZlYXR1cmVzID0gW107XG5cbiAgICB2YXIgdmFsLCB0YWc7XG5cbiAgICBlbmQgPSBlbmQgfHwgYnVmZmVyLmxlbmd0aDtcblxuICAgIHdoaWxlIChidWZmZXIucG9zIDwgZW5kKSB7XG4gICAgICAgIHZhbCA9IGJ1ZmZlci5yZWFkVmFyaW50KCk7XG4gICAgICAgIHRhZyA9IHZhbCA+PiAzO1xuXG4gICAgICAgIGlmICh0YWcgPT09IDE1KSB7XG4gICAgICAgICAgICB0aGlzLnZlcnNpb24gPSBidWZmZXIucmVhZFZhcmludCgpO1xuICAgICAgICB9IGVsc2UgaWYgKHRhZyA9PT0gMSkge1xuICAgICAgICAgICAgdGhpcy5uYW1lID0gYnVmZmVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgfSBlbHNlIGlmICh0YWcgPT09IDUpIHtcbiAgICAgICAgICAgIHRoaXMuZXh0ZW50ID0gYnVmZmVyLnJlYWRWYXJpbnQoKTtcbiAgICAgICAgfSBlbHNlIGlmICh0YWcgPT09IDIpIHtcbiAgICAgICAgICAgIHRoaXMubGVuZ3RoKys7XG4gICAgICAgICAgICB0aGlzLl9mZWF0dXJlcy5wdXNoKGJ1ZmZlci5wb3MpO1xuICAgICAgICAgICAgYnVmZmVyLnNraXAodmFsKTtcblxuICAgICAgICB9IGVsc2UgaWYgKHRhZyA9PT0gMykge1xuICAgICAgICAgICAgdGhpcy5fa2V5cy5wdXNoKGJ1ZmZlci5yZWFkU3RyaW5nKCkpO1xuICAgICAgICB9IGVsc2UgaWYgKHRhZyA9PT0gNCkge1xuICAgICAgICAgICAgdGhpcy5fdmFsdWVzLnB1c2godGhpcy5yZWFkRmVhdHVyZVZhbHVlKCkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYnVmZmVyLnNraXAodmFsKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuVmVjdG9yVGlsZUxheWVyLnByb3RvdHlwZS5yZWFkRmVhdHVyZVZhbHVlID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGJ1ZmZlciA9IHRoaXMuX2J1ZmZlcixcbiAgICAgICAgdmFsdWUgPSBudWxsLFxuICAgICAgICBieXRlcyA9IGJ1ZmZlci5yZWFkVmFyaW50KCksXG4gICAgICAgIGVuZCA9IGJ1ZmZlci5wb3MgKyBieXRlcyxcbiAgICAgICAgdmFsLCB0YWc7XG5cbiAgICB3aGlsZSAoYnVmZmVyLnBvcyA8IGVuZCkge1xuICAgICAgICB2YWwgPSBidWZmZXIucmVhZFZhcmludCgpO1xuICAgICAgICB0YWcgPSB2YWwgPj4gMztcblxuICAgICAgICBpZiAodGFnID09IDEpIHtcbiAgICAgICAgICAgIHZhbHVlID0gYnVmZmVyLnJlYWRTdHJpbmcoKTtcbiAgICAgICAgfSBlbHNlIGlmICh0YWcgPT0gMikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdyZWFkIGZsb2F0Jyk7XG4gICAgICAgIH0gZWxzZSBpZiAodGFnID09IDMpIHtcbiAgICAgICAgICAgIHZhbHVlID0gYnVmZmVyLnJlYWREb3VibGUoKTtcbiAgICAgICAgfSBlbHNlIGlmICh0YWcgPT0gNCkge1xuICAgICAgICAgICAgdmFsdWUgPSBidWZmZXIucmVhZFZhcmludCgpO1xuICAgICAgICB9IGVsc2UgaWYgKHRhZyA9PSA1KSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3JlYWQgdWludCcpO1xuICAgICAgICB9IGVsc2UgaWYgKHRhZyA9PSA2KSB7XG4gICAgICAgICAgICB2YWx1ZSA9IGJ1ZmZlci5yZWFkU1ZhcmludCgpO1xuICAgICAgICB9IGVsc2UgaWYgKHRhZyA9PSA3KSB7XG4gICAgICAgICAgICB2YWx1ZSA9IEJvb2xlYW4oYnVmZmVyLnJlYWRWYXJpbnQoKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBidWZmZXIuc2tpcCh2YWwpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlO1xufTtcblxuLy8gcmV0dXJuIGZlYXR1cmUgYGlgIGZyb20gdGhpcyBsYXllciBhcyBhIGBWZWN0b3JUaWxlRmVhdHVyZWBcblZlY3RvclRpbGVMYXllci5wcm90b3R5cGUuZmVhdHVyZSA9IGZ1bmN0aW9uKGkpIHtcbiAgICBpZiAoaSA8IDAgfHwgaSA+PSB0aGlzLl9mZWF0dXJlcy5sZW5ndGgpIHRocm93IG5ldyBFcnJvcignZmVhdHVyZSBpbmRleCBvdXQgb2YgYm91bmRzJyk7XG5cbiAgICB0aGlzLl9idWZmZXIucG9zID0gdGhpcy5fZmVhdHVyZXNbaV07XG4gICAgdmFyIGVuZCA9IHRoaXMuX2J1ZmZlci5yZWFkVmFyaW50KCkgKyB0aGlzLl9idWZmZXIucG9zO1xuXG4gICAgcmV0dXJuIG5ldyBWZWN0b3JUaWxlRmVhdHVyZSh0aGlzLl9idWZmZXIsIGVuZCwgdGhpcy5leHRlbnQsIHRoaXMuX2tleXMsIHRoaXMuX3ZhbHVlcyk7XG59O1xuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IFJ5YW4gV2hpdGxleSwgRGFuaWVsIER1YXJ0ZSwgYW5kIE5pY2hvbGFzIEhhbGxhaGFuXG4gKiAgICBvbiA2LzAzLzE0LlxuICovXG52YXIgVXRpbCA9IHJlcXVpcmUoJy4vTVZUVXRpbCcpO1xudmFyIFN0YXRpY0xhYmVsID0gcmVxdWlyZSgnLi9TdGF0aWNMYWJlbC9TdGF0aWNMYWJlbC5qcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1WVEZlYXR1cmU7XG5cbmZ1bmN0aW9uIE1WVEZlYXR1cmUobXZ0TGF5ZXIsIHZ0ZiwgY3R4LCBpZCwgc3R5bGUpIHtcbiAgaWYgKCF2dGYpIHJldHVybiBudWxsO1xuXG4gIC8vIEFwcGx5IGFsbCBvZiB0aGUgcHJvcGVydGllcyBvZiB2dGYgdG8gdGhpcyBvYmplY3QuXG4gIGZvciAodmFyIGtleSBpbiB2dGYpIHtcbiAgICB0aGlzW2tleV0gPSB2dGZba2V5XTtcbiAgfVxuXG4gIHRoaXMubXZ0TGF5ZXIgPSBtdnRMYXllcjtcbiAgdGhpcy5tdnRTb3VyY2UgPSBtdnRMYXllci5tdnRTb3VyY2U7XG4gIHRoaXMubWFwID0gbXZ0TGF5ZXIubXZ0U291cmNlLm1hcDtcblxuICB0aGlzLmlkID0gaWQ7XG5cbiAgdGhpcy5sYXllckxpbmsgPSB0aGlzLm12dFNvdXJjZS5sYXllckxpbms7XG4gIHRoaXMudG9nZ2xlRW5hYmxlZCA9IHRydWU7XG4gIHRoaXMuc2VsZWN0ZWQgPSBmYWxzZTtcblxuICAvLyBob3cgbXVjaCB3ZSBkaXZpZGUgdGhlIGNvb3JkaW5hdGUgZnJvbSB0aGUgdmVjdG9yIHRpbGVcbiAgdGhpcy5kaXZpc29yID0gdnRmLmV4dGVudCAvIGN0eC50aWxlU2l6ZTtcbiAgdGhpcy5leHRlbnQgPSB2dGYuZXh0ZW50O1xuICB0aGlzLnRpbGVTaXplID0gY3R4LnRpbGVTaXplO1xuXG4gIC8vQW4gb2JqZWN0IHRvIHN0b3JlIHRoZSBwYXRocyBhbmQgY29udGV4dHMgZm9yIHRoaXMgZmVhdHVyZVxuICB0aGlzLnRpbGVzID0ge307XG5cbiAgdGhpcy5zdHlsZSA9IHN0eWxlO1xuXG4gIC8vQWRkIHRvIHRoZSBjb2xsZWN0aW9uXG4gIHRoaXMuYWRkVGlsZUZlYXR1cmUodnRmLCBjdHgpO1xuXG4gIHZhciBzZWxmID0gdGhpcztcbiAgdGhpcy5tYXAub24oJ3pvb21lbmQnLCBmdW5jdGlvbigpIHtcbiAgICBzZWxmLnN0YXRpY0xhYmVsID0gbnVsbDtcbiAgfSk7XG5cbiAgaWYgKHN0eWxlICYmIHN0eWxlLmR5bmFtaWNMYWJlbCAmJiB0eXBlb2Ygc3R5bGUuZHluYW1pY0xhYmVsID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhpcy5keW5hbWljTGFiZWwgPSB0aGlzLm12dFNvdXJjZS5keW5hbWljTGFiZWwuY3JlYXRlRmVhdHVyZSh0aGlzKTtcbiAgfVxuXG4gIGFqYXgoc2VsZik7XG59XG5cblxuZnVuY3Rpb24gYWpheChzZWxmKSB7XG4gIHZhciBzdHlsZSA9IHNlbGYuc3R5bGU7XG4gIGlmIChzdHlsZSAmJiBzdHlsZS5hamF4U291cmNlICYmIHR5cGVvZiBzdHlsZS5hamF4U291cmNlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIGFqYXhFbmRwb2ludCA9IHN0eWxlLmFqYXhTb3VyY2Uoc2VsZik7XG4gICAgaWYgKGFqYXhFbmRwb2ludCkge1xuICAgICAgVXRpbC5nZXRKU09OKGFqYXhFbmRwb2ludCwgZnVuY3Rpb24oZXJyb3IsIHJlc3BvbnNlLCBib2R5KSB7XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgIHRocm93IFsnYWpheFNvdXJjZSBBSkFYIEVycm9yJywgZXJyb3JdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGFqYXhDYWxsYmFjayhzZWxmLCByZXNwb25zZSk7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGFqYXhDYWxsYmFjayhzZWxmLCByZXNwb25zZSkge1xuICBzZWxmLmFqYXhEYXRhID0gcmVzcG9uc2U7XG5cbiAgLyoqXG4gICAqIFlvdSBjYW4gYXR0YWNoIGEgY2FsbGJhY2sgZnVuY3Rpb24gdG8gYSBmZWF0dXJlIGluIHlvdXIgYXBwXG4gICAqIHRoYXQgd2lsbCBnZXQgY2FsbGVkIHdoZW5ldmVyIG5ldyBhamF4RGF0YSBjb21lcyBpbi4gVGhpc1xuICAgKiBjYW4gYmUgdXNlZCB0byB1cGRhdGUgVUkgdGhhdCBsb29rcyBhdCBkYXRhIGZyb20gd2l0aGluIGEgZmVhdHVyZS5cbiAgICpcbiAgICogc2V0U3R5bGUgbWF5IHBvc3NpYmx5IGhhdmUgYSBzdHlsZSB3aXRoIGEgZGlmZmVyZW50IGFqYXhEYXRhIHNvdXJjZSxcbiAgICogYW5kIHlvdSB3b3VsZCBwb3RlbnRpYWxseSBnZXQgbmV3IGNvbnRleHR1YWwgZGF0YSBmb3IgeW91ciBmZWF0dXJlLlxuICAgKlxuICAgKiBUT0RPOiBUaGlzIG5lZWRzIHRvIGJlIGRvY3VtZW50ZWQuXG4gICAqL1xuICBpZiAodHlwZW9mIHNlbGYuYWpheERhdGFSZWNlaXZlZCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHNlbGYuYWpheERhdGFSZWNlaXZlZChzZWxmLCByZXNwb25zZSk7XG4gIH1cblxuICBzZWxmLl9zZXRTdHlsZShzZWxmLm12dExheWVyLnN0eWxlKTtcbiAgcmVkcmF3VGlsZXMoc2VsZik7XG59XG5cbk1WVEZlYXR1cmUucHJvdG90eXBlLl9zZXRTdHlsZSA9IGZ1bmN0aW9uKHN0eWxlRm4pIHtcbiAgdGhpcy5zdHlsZSA9IHN0eWxlRm4odGhpcywgdGhpcy5hamF4RGF0YSk7XG5cbiAgLy8gVGhlIGxhYmVsIGdldHMgcmVtb3ZlZCwgYW5kIHRoZSAocmUpZHJhdyxcbiAgLy8gdGhhdCBpcyBpbml0aWF0ZWQgYnkgdGhlIE1WVExheWVyIGNyZWF0ZXMgYSBuZXcgbGFiZWwuXG4gIHRoaXMucmVtb3ZlTGFiZWwoKTtcbn07XG5cbk1WVEZlYXR1cmUucHJvdG90eXBlLnNldFN0eWxlID0gZnVuY3Rpb24oc3R5bGVGbikge1xuICB0aGlzLmFqYXhEYXRhID0gbnVsbDtcbiAgdGhpcy5zdHlsZSA9IHN0eWxlRm4odGhpcywgbnVsbCk7XG4gIHZhciBoYXNBamF4U291cmNlID0gYWpheCh0aGlzKTtcbiAgaWYgKCFoYXNBamF4U291cmNlKSB7XG4gICAgLy8gVGhlIGxhYmVsIGdldHMgcmVtb3ZlZCwgYW5kIHRoZSAocmUpZHJhdyxcbiAgICAvLyB0aGF0IGlzIGluaXRpYXRlZCBieSB0aGUgTVZUTGF5ZXIgY3JlYXRlcyBhIG5ldyBsYWJlbC5cbiAgICB0aGlzLnJlbW92ZUxhYmVsKCk7XG4gIH1cbn07XG5cbk1WVEZlYXR1cmUucHJvdG90eXBlLmRyYXcgPSBmdW5jdGlvbihjYW52YXNJRCkge1xuICAvL0dldCB0aGUgaW5mbyBmcm9tIHRoZSB0aWxlcyBsaXN0XG4gIHZhciB0aWxlSW5mbyA9ICB0aGlzLnRpbGVzW2NhbnZhc0lEXTtcblxuICB2YXIgdnRmID0gdGlsZUluZm8udnRmO1xuICB2YXIgY3R4ID0gdGlsZUluZm8uY3R4O1xuXG4gIC8vR2V0IHRoZSBhY3R1YWwgY2FudmFzIGZyb20gdGhlIHBhcmVudCBsYXllcidzIF90aWxlcyBvYmplY3QuXG4gIHZhciB4eSA9IGNhbnZhc0lELnNwbGl0KFwiOlwiKS5zbGljZSgxLCAzKS5qb2luKFwiOlwiKTtcbiAgY3R4LmNhbnZhcyA9IHRoaXMubXZ0TGF5ZXIuX3RpbGVzW3h5XTtcblxuLy8gIFRoaXMgY291bGQgYmUgdXNlZCB0byBkaXJlY3RseSBjb21wdXRlIHRoZSBzdHlsZSBmdW5jdGlvbiBmcm9tIHRoZSBsYXllciBvbiBldmVyeSBkcmF3LlxuLy8gIFRoaXMgaXMgbXVjaCBsZXNzIGVmZmljaWVudC4uLlxuLy8gIHRoaXMuc3R5bGUgPSB0aGlzLm12dExheWVyLnN0eWxlKHRoaXMpO1xuXG4gIGlmICh0aGlzLnNlbGVjdGVkKSB7XG4gICAgdmFyIHN0eWxlID0gdGhpcy5zdHlsZS5zZWxlY3RlZCB8fCB0aGlzLnN0eWxlO1xuICB9IGVsc2Uge1xuICAgIHZhciBzdHlsZSA9IHRoaXMuc3R5bGU7XG4gIH1cblxuICBzd2l0Y2ggKHZ0Zi50eXBlKSB7XG4gICAgY2FzZSAxOiAvL1BvaW50XG4gICAgICB0aGlzLl9kcmF3UG9pbnQoY3R4LCB2dGYuY29vcmRpbmF0ZXMsIHN0eWxlKTtcbiAgICAgIGlmICghdGhpcy5zdGF0aWNMYWJlbCAmJiB0eXBlb2YgdGhpcy5zdHlsZS5zdGF0aWNMYWJlbCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBpZiAodGhpcy5zdHlsZS5hamF4U291cmNlICYmICF0aGlzLmFqYXhEYXRhKSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fZHJhd1N0YXRpY0xhYmVsKGN0eCwgdnRmLmNvb3JkaW5hdGVzLCBzdHlsZSk7XG4gICAgICB9XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgMjogLy9MaW5lU3RyaW5nXG4gICAgICB0aGlzLl9kcmF3TGluZVN0cmluZyhjdHgsIHZ0Zi5jb29yZGluYXRlcywgc3R5bGUpO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIDM6IC8vUG9seWdvblxuICAgICAgdGhpcy5fZHJhd1BvbHlnb24oY3R4LCB2dGYuY29vcmRpbmF0ZXMsIHN0eWxlKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBFcnJvcignVW5tYW5hZ2VkIHR5cGU6ICcgKyB2dGYudHlwZSk7XG4gIH1cblxufTtcblxuTVZURmVhdHVyZS5wcm90b3R5cGUuZ2V0UGF0aHNGb3JUaWxlID0gZnVuY3Rpb24oY2FudmFzSUQpIHtcbiAgLy9HZXQgdGhlIGluZm8gZnJvbSB0aGUgcGFydHMgbGlzdFxuICByZXR1cm4gdGhpcy50aWxlc1tjYW52YXNJRF0ucGF0aHM7XG59O1xuXG5NVlRGZWF0dXJlLnByb3RvdHlwZS5hZGRUaWxlRmVhdHVyZSA9IGZ1bmN0aW9uKHZ0ZiwgY3R4KSB7XG4gIC8vU3RvcmUgdGhlIGltcG9ydGFudCBpdGVtcyBpbiB0aGUgdGlsZXMgbGlzdFxuXG4gIC8vV2Ugb25seSB3YW50IHRvIHN0b3JlIGluZm8gZm9yIHRpbGVzIGZvciB0aGUgY3VycmVudCBtYXAgem9vbS4gIElmIGl0IGlzIHRpbGUgaW5mbyBmb3IgYW5vdGhlciB6b29tIGxldmVsLCBpZ25vcmUgaXRcbiAgLy9BbHNvLCBpZiB0aGVyZSBhcmUgZXhpc3RpbmcgdGlsZXMgaW4gdGhlIGxpc3QgZm9yIG90aGVyIHpvb20gbGV2ZWxzLCBleHB1bmdlIHRoZW0uXG4gIHZhciB6b29tID0gdGhpcy5tYXAuZ2V0Wm9vbSgpO1xuXG4gIGlmKGN0eC56b29tICE9IHpvb20pIHJldHVybjtcblxuICB0aGlzLmNsZWFyVGlsZUZlYXR1cmVzKHpvb20pOyAvL1RPRE86IFRoaXMgaXRlcmF0ZXMgdGhydSBhbGwgdGlsZXMgZXZlcnkgdGltZSBhIG5ldyB0aWxlIGlzIGFkZGVkLiAgRmlndXJlIG91dCBhIGJldHRlciB3YXkgdG8gZG8gdGhpcy5cblxuICB0aGlzLnRpbGVzW2N0eC5pZF0gPSB7XG4gICAgY3R4OiBjdHgsXG4gICAgdnRmOiB2dGYsXG4gICAgcGF0aHM6IFtdXG4gIH07XG5cbn07XG5cblxuLyoqXG4gKiBDbGVhciB0aGUgaW5uZXIgbGlzdCBvZiB0aWxlIGZlYXR1cmVzIGlmIHRoZXkgZG9uJ3QgbWF0Y2ggdGhlIGdpdmVuIHpvb20uXG4gKlxuICogQHBhcmFtIHpvb21cbiAqL1xuTVZURmVhdHVyZS5wcm90b3R5cGUuY2xlYXJUaWxlRmVhdHVyZXMgPSBmdW5jdGlvbih6b29tKSB7XG4gIC8vSWYgc3RvcmVkIHRpbGVzIGV4aXN0IGZvciBvdGhlciB6b29tIGxldmVscywgZXhwdW5nZSB0aGVtIGZyb20gdGhlIGxpc3QuXG4gIGZvciAodmFyIGtleSBpbiB0aGlzLnRpbGVzKSB7XG4gICAgIGlmKGtleS5zcGxpdChcIjpcIilbMF0gIT0gem9vbSkgZGVsZXRlIHRoaXMudGlsZXNba2V5XTtcbiAgfVxufTtcblxuLyoqXG4gKiBSZWRyYXdzIGFsbCBvZiB0aGUgdGlsZXMgYXNzb2NpYXRlZCB3aXRoIGEgZmVhdHVyZS4gVXNlZnVsIGZvclxuICogc3R5bGUgY2hhbmdlIGFuZCB0b2dnbGluZy5cbiAqXG4gKiBAcGFyYW0gc2VsZlxuICovXG5mdW5jdGlvbiByZWRyYXdUaWxlcyhzZWxmKSB7XG4gIC8vUmVkcmF3IHRoZSB3aG9sZSB0aWxlLCBub3QganVzdCB0aGlzIHZ0ZlxuICB2YXIgdGlsZXMgPSBzZWxmLnRpbGVzO1xuICB2YXIgbXZ0TGF5ZXIgPSBzZWxmLm12dExheWVyO1xuXG4gIGZvciAodmFyIGlkIGluIHRpbGVzKSB7XG4gICAgdmFyIHRpbGVab29tID0gcGFyc2VJbnQoaWQuc3BsaXQoJzonKVswXSk7XG4gICAgdmFyIG1hcFpvb20gPSBzZWxmLm1hcC5nZXRab29tKCk7XG4gICAgaWYgKHRpbGVab29tID09PSBtYXBab29tKSB7XG4gICAgICAvL1JlZHJhdyB0aGUgdGlsZVxuICAgICAgbXZ0TGF5ZXIucmVkcmF3VGlsZShpZCk7XG4gICAgfVxuICB9XG59XG5cbk1WVEZlYXR1cmUucHJvdG90eXBlLnRvZ2dsZSA9IGZ1bmN0aW9uKCkge1xuICBpZiAodGhpcy5zZWxlY3RlZCkge1xuICAgIHRoaXMuZGVzZWxlY3QoKTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLnNlbGVjdCgpO1xuICB9XG59O1xuXG5NVlRGZWF0dXJlLnByb3RvdHlwZS5zZWxlY3QgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5zZWxlY3RlZCA9IHRydWU7XG4gIHRoaXMubXZ0U291cmNlLmZlYXR1cmVTZWxlY3RlZCh0aGlzKTtcbiAgcmVkcmF3VGlsZXModGhpcyk7XG4gIHZhciBsaW5rZWRGZWF0dXJlID0gdGhpcy5saW5rZWRGZWF0dXJlKCk7XG4gIGlmIChsaW5rZWRGZWF0dXJlICYmIGxpbmtlZEZlYXR1cmUuc3RhdGljTGFiZWwgJiYgIWxpbmtlZEZlYXR1cmUuc3RhdGljTGFiZWwuc2VsZWN0ZWQpIHtcbiAgICBsaW5rZWRGZWF0dXJlLnN0YXRpY0xhYmVsLnNlbGVjdCgpO1xuICB9XG59O1xuXG5NVlRGZWF0dXJlLnByb3RvdHlwZS5kZXNlbGVjdCA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLnNlbGVjdGVkID0gZmFsc2U7XG4gIHRoaXMubXZ0U291cmNlLmZlYXR1cmVEZXNlbGVjdGVkKHRoaXMpO1xuICByZWRyYXdUaWxlcyh0aGlzKTtcbiAgdmFyIGxpbmtlZEZlYXR1cmUgPSB0aGlzLmxpbmtlZEZlYXR1cmUoKTtcbiAgaWYgKGxpbmtlZEZlYXR1cmUgJiYgbGlua2VkRmVhdHVyZS5zdGF0aWNMYWJlbCAmJiBsaW5rZWRGZWF0dXJlLnN0YXRpY0xhYmVsLnNlbGVjdGVkKSB7XG4gICAgbGlua2VkRmVhdHVyZS5zdGF0aWNMYWJlbC5kZXNlbGVjdCgpO1xuICB9XG59O1xuXG5NVlRGZWF0dXJlLnByb3RvdHlwZS5vbiA9IGZ1bmN0aW9uKGV2ZW50VHlwZSwgY2FsbGJhY2spIHtcbiAgdGhpcy5fZXZlbnRIYW5kbGVyc1tldmVudFR5cGVdID0gY2FsbGJhY2s7XG59O1xuXG5NVlRGZWF0dXJlLnByb3RvdHlwZS5fZHJhd1BvaW50ID0gZnVuY3Rpb24oY3R4LCBjb29yZHNBcnJheSwgc3R5bGUpIHtcbiAgaWYgKCFzdHlsZSkgcmV0dXJuO1xuICBpZiAoIWN0eCB8fCAhY3R4LmNhbnZhcykgcmV0dXJuO1xuXG4gIHZhciB0aWxlID0gdGhpcy50aWxlc1tjdHguaWRdO1xuXG4gIC8vR2V0IHJhZGl1c1xuICB2YXIgcmFkaXVzID0gMTtcbiAgaWYgKHR5cGVvZiBzdHlsZS5yYWRpdXMgPT09ICdmdW5jdGlvbicpIHtcbiAgICByYWRpdXMgPSBzdHlsZS5yYWRpdXMoY3R4Lnpvb20pOyAvL0FsbG93cyBmb3Igc2NhbGUgZGVwZW5kZW50IHJlZG5lcmluZ1xuICB9XG4gIGVsc2V7XG4gICAgcmFkaXVzID0gc3R5bGUucmFkaXVzO1xuICB9XG5cbiAgdmFyIHAgPSB0aGlzLl90aWxlUG9pbnQoY29vcmRzQXJyYXlbMF1bMF0pO1xuICB2YXIgYyA9IGN0eC5jYW52YXM7XG4gIHZhciBjdHgyZDtcbiAgdHJ5e1xuICAgIGN0eDJkID0gYy5nZXRDb250ZXh0KCcyZCcpO1xuICB9XG4gIGNhdGNoKGUpe1xuICAgIGNvbnNvbGUubG9nKFwiX2RyYXdQb2ludCBlcnJvcjogXCIgKyBlKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBjdHgyZC5iZWdpblBhdGgoKTtcbiAgY3R4MmQuZmlsbFN0eWxlID0gc3R5bGUuY29sb3I7XG4gIGN0eDJkLmFyYyhwLngsIHAueSwgcmFkaXVzLCAwLCBNYXRoLlBJICogMik7XG4gIGN0eDJkLmNsb3NlUGF0aCgpO1xuICBjdHgyZC5maWxsKCk7XG5cbiAgaWYoc3R5bGUubGluZVdpZHRoICYmIHN0eWxlLnN0cm9rZVN0eWxlKXtcbiAgICBjdHgyZC5saW5lV2lkdGggPSBzdHlsZS5saW5lV2lkdGg7XG4gICAgY3R4MmQuc3Ryb2tlU3R5bGUgPSBzdHlsZS5zdHJva2VTdHlsZTtcbiAgICBjdHgyZC5zdHJva2UoKTtcbiAgfVxuXG4gIGN0eDJkLnJlc3RvcmUoKTtcbiAgdGlsZS5wYXRocy5wdXNoKFtwXSk7XG59O1xuXG5NVlRGZWF0dXJlLnByb3RvdHlwZS5fZHJhd0xpbmVTdHJpbmcgPSBmdW5jdGlvbihjdHgsIGNvb3Jkc0FycmF5LCBzdHlsZSkge1xuICBpZiAoIXN0eWxlKSByZXR1cm47XG4gIGlmICghY3R4IHx8ICFjdHguY2FudmFzKSByZXR1cm47XG5cbiAgdmFyIGN0eDJkID0gY3R4LmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICBjdHgyZC5zdHJva2VTdHlsZSA9IHN0eWxlLmNvbG9yO1xuICBjdHgyZC5saW5lV2lkdGggPSBzdHlsZS5zaXplO1xuICBjdHgyZC5iZWdpblBhdGgoKTtcblxuICB2YXIgcHJvakNvb3JkcyA9IFtdO1xuICB2YXIgdGlsZSA9IHRoaXMudGlsZXNbY3R4LmlkXTtcblxuICBmb3IgKHZhciBnaWR4IGluIGNvb3Jkc0FycmF5KSB7XG4gICAgdmFyIGNvb3JkcyA9IGNvb3Jkc0FycmF5W2dpZHhdO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IGNvb3Jkcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIG1ldGhvZCA9IChpID09PSAwID8gJ21vdmUnIDogJ2xpbmUnKSArICdUbyc7XG4gICAgICB2YXIgcHJvaiA9IHRoaXMuX3RpbGVQb2ludChjb29yZHNbaV0pO1xuICAgICAgcHJvakNvb3Jkcy5wdXNoKHByb2opO1xuICAgICAgY3R4MmRbbWV0aG9kXShwcm9qLngsIHByb2oueSk7XG4gICAgfVxuICB9XG5cbiAgY3R4MmQuc3Ryb2tlKCk7XG4gIGN0eDJkLnJlc3RvcmUoKTtcblxuICB0aWxlLnBhdGhzLnB1c2gocHJvakNvb3Jkcyk7XG59O1xuXG5NVlRGZWF0dXJlLnByb3RvdHlwZS5fZHJhd1BvbHlnb24gPSBmdW5jdGlvbihjdHgsIGNvb3Jkc0FycmF5LCBzdHlsZSkge1xuICBpZiAoIXN0eWxlKSByZXR1cm47XG4gIGlmICghY3R4IHx8ICFjdHguY2FudmFzKSByZXR1cm47XG5cbiAgdmFyIGN0eDJkID0gY3R4LmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICB2YXIgb3V0bGluZSA9IHN0eWxlLm91dGxpbmU7XG5cbiAgLy8gY29sb3IgbWF5IGJlIGRlZmluZWQgdmlhIGZ1bmN0aW9uIHRvIG1ha2UgY2hvcm9wbGV0aCB3b3JrIHJpZ2h0XG4gIGlmICh0eXBlb2Ygc3R5bGUuY29sb3IgPT09ICdmdW5jdGlvbicpIHtcbiAgICBjdHgyZC5maWxsU3R5bGUgPSBzdHlsZS5jb2xvcihjdHgyZCk7XG4gIH0gZWxzZSB7XG4gICAgY3R4MmQuZmlsbFN0eWxlID0gc3R5bGUuY29sb3I7XG4gIH1cblxuICBpZiAob3V0bGluZSkge1xuICAgIGN0eDJkLnN0cm9rZVN0eWxlID0gb3V0bGluZS5jb2xvcjtcbiAgICBjdHgyZC5saW5lV2lkdGggPSBvdXRsaW5lLnNpemU7XG4gIH1cbiAgY3R4MmQuYmVnaW5QYXRoKCk7XG5cbiAgdmFyIHByb2pDb29yZHMgPSBbXTtcbiAgdmFyIHRpbGUgPSB0aGlzLnRpbGVzW2N0eC5pZF07XG5cbiAgdmFyIGZlYXR1cmVMYWJlbCA9IHRoaXMuZHluYW1pY0xhYmVsO1xuICBpZiAoZmVhdHVyZUxhYmVsKSB7XG4gICAgZmVhdHVyZUxhYmVsLmFkZFRpbGVQb2x5cyhjdHgsIGNvb3Jkc0FycmF5KTtcbiAgfVxuXG4gIGZvciAodmFyIGdpZHggPSAwLCBsZW4gPSBjb29yZHNBcnJheS5sZW5ndGg7IGdpZHggPCBsZW47IGdpZHgrKykge1xuICAgIHZhciBjb29yZHMgPSBjb29yZHNBcnJheVtnaWR4XTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29vcmRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgY29vcmQgPSBjb29yZHNbaV07XG4gICAgICB2YXIgbWV0aG9kID0gKGkgPT09IDAgPyAnbW92ZScgOiAnbGluZScpICsgJ1RvJztcbiAgICAgIHZhciBwcm9qID0gdGhpcy5fdGlsZVBvaW50KGNvb3Jkc1tpXSk7XG4gICAgICBwcm9qQ29vcmRzLnB1c2gocHJvaik7XG4gICAgICBjdHgyZFttZXRob2RdKHByb2oueCwgcHJvai55KTtcbiAgICB9XG4gIH1cblxuICBjdHgyZC5jbG9zZVBhdGgoKTtcbiAgY3R4MmQuZmlsbCgpO1xuICBpZiAob3V0bGluZSkge1xuICAgIGN0eDJkLnN0cm9rZSgpO1xuICB9XG5cbiAgdGlsZS5wYXRocy5wdXNoKHByb2pDb29yZHMpO1xuXG59O1xuXG5NVlRGZWF0dXJlLnByb3RvdHlwZS5fZHJhd1N0YXRpY0xhYmVsID0gZnVuY3Rpb24oY3R4LCBjb29yZHNBcnJheSwgc3R5bGUpIHtcbiAgaWYgKCFzdHlsZSkgcmV0dXJuO1xuICBpZiAoIWN0eCkgcmV0dXJuO1xuXG4gIC8vIElmIHRoZSBjb3JyZXNwb25kaW5nIGxheWVyIGlzIG5vdCBvbiB0aGUgbWFwLCBcbiAgLy8gd2UgZG9udCB3YW50IHRvIHB1dCBvbiBhIGxhYmVsLlxuICBpZiAoIXRoaXMubXZ0TGF5ZXIuX21hcCkgcmV0dXJuO1xuXG4gIHZhciB2ZWNQdCA9IHRoaXMuX3RpbGVQb2ludChjb29yZHNBcnJheVswXVswXSk7XG5cbiAgLy8gV2UncmUgbWFraW5nIGEgc3RhbmRhcmQgTGVhZmxldCBNYXJrZXIgZm9yIHRoaXMgbGFiZWwuXG4gIHZhciBwID0gdGhpcy5fcHJvamVjdCh2ZWNQdCwgY3R4LnRpbGUueCwgY3R4LnRpbGUueSwgdGhpcy5leHRlbnQsIHRoaXMudGlsZVNpemUpOyAvL3ZlY3RpbGUgcHQgdG8gbWVyYyBwdFxuICB2YXIgbWVyY1B0ID0gTC5wb2ludChwLngsIHAueSk7IC8vIG1ha2UgaW50byBsZWFmbGV0IG9ialxuICB2YXIgbGF0TG5nID0gdGhpcy5tYXAudW5wcm9qZWN0KG1lcmNQdCk7IC8vIG1lcmMgcHQgdG8gbGF0bG5nXG5cbiAgdGhpcy5zdGF0aWNMYWJlbCA9IG5ldyBTdGF0aWNMYWJlbCh0aGlzLCBjdHgsIGxhdExuZywgc3R5bGUpO1xuICB0aGlzLm12dExheWVyLmZlYXR1cmVXaXRoTGFiZWxBZGRlZCh0aGlzKTtcbn07XG5cbk1WVEZlYXR1cmUucHJvdG90eXBlLnJlbW92ZUxhYmVsID0gZnVuY3Rpb24oKSB7XG4gIGlmICghdGhpcy5zdGF0aWNMYWJlbCkgcmV0dXJuO1xuICB0aGlzLnN0YXRpY0xhYmVsLnJlbW92ZSgpO1xuICB0aGlzLnN0YXRpY0xhYmVsID0gbnVsbDtcbn07XG5cbi8qKlxuICogUHJvamVjdHMgYSB2ZWN0b3IgdGlsZSBwb2ludCB0byB0aGUgU3BoZXJpY2FsIE1lcmNhdG9yIHBpeGVsIHNwYWNlIGZvciBhIGdpdmVuIHpvb20gbGV2ZWwuXG4gKlxuICogQHBhcmFtIHZlY1B0XG4gKiBAcGFyYW0gdGlsZVhcbiAqIEBwYXJhbSB0aWxlWVxuICogQHBhcmFtIGV4dGVudFxuICogQHBhcmFtIHRpbGVTaXplXG4gKi9cbk1WVEZlYXR1cmUucHJvdG90eXBlLl9wcm9qZWN0ID0gZnVuY3Rpb24odmVjUHQsIHRpbGVYLCB0aWxlWSwgZXh0ZW50LCB0aWxlU2l6ZSkge1xuICB2YXIgeE9mZnNldCA9IHRpbGVYICogdGlsZVNpemU7XG4gIHZhciB5T2Zmc2V0ID0gdGlsZVkgKiB0aWxlU2l6ZTtcbiAgcmV0dXJuIHtcbiAgICB4OiBNYXRoLmZsb29yKHZlY1B0LnggKyB4T2Zmc2V0KSxcbiAgICB5OiBNYXRoLmZsb29yKHZlY1B0LnkgKyB5T2Zmc2V0KVxuICB9O1xufTtcblxuLyoqXG4gKiBUYWtlcyBhIGNvb3JkaW5hdGUgZnJvbSBhIHZlY3RvciB0aWxlIGFuZCB0dXJucyBpdCBpbnRvIGEgTGVhZmxldCBQb2ludC5cbiAqXG4gKiBAcGFyYW0gY3R4XG4gKiBAcGFyYW0gY29vcmRzXG4gKiBAcmV0dXJucyB7ZUdlb21UeXBlLlBvaW50fVxuICogQHByaXZhdGVcbiAqL1xuTVZURmVhdHVyZS5wcm90b3R5cGUuX3RpbGVQb2ludCA9IGZ1bmN0aW9uKGNvb3Jkcykge1xuICByZXR1cm4gbmV3IEwuUG9pbnQoY29vcmRzLnggLyB0aGlzLmRpdmlzb3IsIGNvb3Jkcy55IC8gdGhpcy5kaXZpc29yKTtcbn07XG5cbk1WVEZlYXR1cmUucHJvdG90eXBlLmxpbmtlZEZlYXR1cmUgPSBmdW5jdGlvbigpIHtcbiAgdmFyIGxpbmtlZExheWVyID0gdGhpcy5tdnRMYXllci5saW5rZWRMYXllcigpO1xuICBpZihsaW5rZWRMYXllcil7XG4gICAgdmFyIGxpbmtlZEZlYXR1cmUgPSBsaW5rZWRMYXllci5mZWF0dXJlc1t0aGlzLmlkXTtcbiAgICByZXR1cm4gbGlua2VkRmVhdHVyZTtcbiAgfWVsc2V7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn07XG5cbiIsIi8qKlxuICogQ3JlYXRlZCBieSBSeWFuIFdoaXRsZXkgb24gNS8xNy8xNC5cbiAqL1xuLyoqIEZvcmtlZCBmcm9tIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL0RHdWlkaS8xNzE2MDEwICoqL1xudmFyIE1WVEZlYXR1cmUgPSByZXF1aXJlKCcuL01WVEZlYXR1cmUnKTtcbnZhciBVdGlsID0gcmVxdWlyZSgnLi9NVlRVdGlsJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gTC5UaWxlTGF5ZXIuQ2FudmFzLmV4dGVuZCh7XG5cbiAgb3B0aW9uczoge1xuICAgIGRlYnVnOiBmYWxzZSxcbiAgICBpc0hpZGRlbkxheWVyOiBmYWxzZSxcbiAgICBnZXRJREZvckxheWVyRmVhdHVyZTogZnVuY3Rpb24oKSB7fSxcbiAgICB0aWxlU2l6ZTogMjU2LFxuICAgIGxpbmVDbGlja1RvbGVyYW5jZTogMlxuICB9LFxuXG4gIF9mZWF0dXJlSXNDbGlja2VkOiB7fSxcblxuICBfaXNQb2ludEluUG9seTogZnVuY3Rpb24ocHQsIHBvbHkpIHtcbiAgICBpZihwb2x5ICYmIHBvbHkubGVuZ3RoKSB7XG4gICAgICBmb3IgKHZhciBjID0gZmFsc2UsIGkgPSAtMSwgbCA9IHBvbHkubGVuZ3RoLCBqID0gbCAtIDE7ICsraSA8IGw7IGogPSBpKVxuICAgICAgICAoKHBvbHlbaV0ueSA8PSBwdC55ICYmIHB0LnkgPCBwb2x5W2pdLnkpIHx8IChwb2x5W2pdLnkgPD0gcHQueSAmJiBwdC55IDwgcG9seVtpXS55KSlcbiAgICAgICAgJiYgKHB0LnggPCAocG9seVtqXS54IC0gcG9seVtpXS54KSAqIChwdC55IC0gcG9seVtpXS55KSAvIChwb2x5W2pdLnkgLSBwb2x5W2ldLnkpICsgcG9seVtpXS54KVxuICAgICAgICAmJiAoYyA9ICFjKTtcbiAgICAgIHJldHVybiBjO1xuICAgIH1cbiAgfSxcblxuICBfZ2V0RGlzdGFuY2VGcm9tTGluZTogZnVuY3Rpb24ocHQsIHB0cykge1xuICAgIHZhciBtaW4gPSBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFk7XG4gICAgaWYgKHB0cyAmJiBwdHMubGVuZ3RoID4gMSkge1xuICAgICAgcHQgPSBMLnBvaW50KHB0LngsIHB0LnkpO1xuICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBwdHMubGVuZ3RoIC0gMTsgaSA8IGw7IGkrKykge1xuICAgICAgICB2YXIgdGVzdCA9IHRoaXMuX3Byb2plY3RQb2ludE9uTGluZVNlZ21lbnQocHQsIHB0c1tpXSwgcHRzW2kgKyAxXSk7XG4gICAgICAgIGlmICh0ZXN0LmRpc3RhbmNlIDw9IG1pbikge1xuICAgICAgICAgIG1pbiA9IHRlc3QuZGlzdGFuY2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG1pbjtcbiAgfSxcblxuICBfcHJvamVjdFBvaW50T25MaW5lU2VnbWVudDogZnVuY3Rpb24ocCwgcjAsIHIxKSB7XG4gICAgdmFyIGxpbmVMZW5ndGggPSByMC5kaXN0YW5jZVRvKHIxKTtcbiAgICBpZiAobGluZUxlbmd0aCA8IDEpIHtcbiAgICAgICAgcmV0dXJuIHtkaXN0YW5jZTogcC5kaXN0YW5jZVRvKHIwKSwgY29vcmRpbmF0ZTogcjB9O1xuICAgIH1cbiAgICB2YXIgdSA9ICgocC54IC0gcjAueCkgKiAocjEueCAtIHIwLngpICsgKHAueSAtIHIwLnkpICogKHIxLnkgLSByMC55KSkgLyBNYXRoLnBvdyhsaW5lTGVuZ3RoLCAyKTtcbiAgICBpZiAodSA8IDAuMDAwMDAwMSkge1xuICAgICAgICByZXR1cm4ge2Rpc3RhbmNlOiBwLmRpc3RhbmNlVG8ocjApLCBjb29yZGluYXRlOiByMH07XG4gICAgfVxuICAgIGlmICh1ID4gMC45OTk5OTk5KSB7XG4gICAgICAgIHJldHVybiB7ZGlzdGFuY2U6IHAuZGlzdGFuY2VUbyhyMSksIGNvb3JkaW5hdGU6IHIxfTtcbiAgICB9XG4gICAgdmFyIGEgPSBMLnBvaW50KHIwLnggKyB1ICogKHIxLnggLSByMC54KSwgcjAueSArIHUgKiAocjEueSAtIHIwLnkpKTtcbiAgICByZXR1cm4ge2Rpc3RhbmNlOiBwLmRpc3RhbmNlVG8oYSksIHBvaW50OiBhfTtcbiAgfSxcblxuICBpbml0aWFsaXplOiBmdW5jdGlvbihtdnRTb3VyY2UsIG9wdGlvbnMpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgc2VsZi5tdnRTb3VyY2UgPSBtdnRTb3VyY2U7XG4gICAgTC5VdGlsLnNldE9wdGlvbnModGhpcywgb3B0aW9ucyk7XG5cbiAgICB0aGlzLnN0eWxlID0gb3B0aW9ucy5zdHlsZTtcbiAgICB0aGlzLm5hbWUgPSBvcHRpb25zLm5hbWU7XG4gICAgdGhpcy5fY2FudmFzSURUb0ZlYXR1cmVzID0ge307XG4gICAgdGhpcy5mZWF0dXJlcyA9IHt9O1xuICAgIHRoaXMuZmVhdHVyZXNXaXRoTGFiZWxzID0gW107XG4gICAgdGhpcy5faGlnaGVzdENvdW50ID0gMDtcbiAgICB0aGlzLmxlZ2VuZE9iamVjdCA9IHt9O1xuICB9LFxuXG4gIG9uQWRkOiBmdW5jdGlvbihtYXApIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgc2VsZi5tYXAgPSBtYXA7XG4gICAgTC5UaWxlTGF5ZXIuQ2FudmFzLnByb3RvdHlwZS5vbkFkZC5jYWxsKHRoaXMsIG1hcCk7XG4gICAgbWFwLm9uKCdsYXllcnJlbW92ZScsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIC8vIHdlIG9ubHkgd2FudCB0byBkbyBzdHVmZiB3aGVuIHRoZSBsYXllcnJlbW92ZSBldmVudCBpcyBvbiB0aGlzIGxheWVyXG4gICAgICBpZiAoZS5sYXllci5fbGVhZmxldF9pZCA9PT0gc2VsZi5fbGVhZmxldF9pZCkge1xuICAgICAgICByZW1vdmVMYWJlbHMoc2VsZik7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG5cbiAgZHJhd1RpbGU6IGZ1bmN0aW9uKGNhbnZhcywgdGlsZVBvaW50LCB6b29tKSB7XG5cbiAgICB2YXIgY3R4ID0ge1xuICAgICAgY2FudmFzOiBjYW52YXMsXG4gICAgICB0aWxlOiB0aWxlUG9pbnQsXG4gICAgICB6b29tOiB6b29tLFxuICAgICAgdGlsZVNpemU6IHRoaXMub3B0aW9ucy50aWxlU2l6ZVxuICAgIH07XG5cbiAgICBjdHguaWQgPSBVdGlsLmdldENvbnRleHRJRChjdHgpO1xuXG4gICAgaWYgKCF0aGlzLl9jYW52YXNJRFRvRmVhdHVyZXNbY3R4LmlkXSkge1xuICAgICAgdGhpcy5faW5pdGlhbGl6ZUZlYXR1cmVzSGFzaChjdHgpO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuZmVhdHVyZXMpIHtcbiAgICAgIHRoaXMuZmVhdHVyZXMgPSB7fTtcbiAgICB9XG5cbiAgfSxcblxuICBfaW5pdGlhbGl6ZUZlYXR1cmVzSGFzaDogZnVuY3Rpb24oY3R4KXtcbiAgICB0aGlzLl9jYW52YXNJRFRvRmVhdHVyZXNbY3R4LmlkXSA9IHt9O1xuICAgIHRoaXMuX2NhbnZhc0lEVG9GZWF0dXJlc1tjdHguaWRdLmZlYXR1cmVzID0gW107XG4gICAgdGhpcy5fY2FudmFzSURUb0ZlYXR1cmVzW2N0eC5pZF0uY2FudmFzID0gY3R4LmNhbnZhcztcbiAgfSxcblxuICBfZHJhdzogZnVuY3Rpb24oY3R4KSB7XG4gICAgLy9EcmF3IGlzIGhhbmRsZWQgYnkgdGhlIHBhcmVudCBNVlRTb3VyY2Ugb2JqZWN0XG4gIH0sXG4gIGdldENhbnZhczogZnVuY3Rpb24ocGFyZW50Q3R4KXtcbiAgICAvL1RoaXMgZ2V0cyBjYWxsZWQgaWYgYSB2ZWN0b3IgdGlsZSBmZWF0dXJlIGhhcyBhbHJlYWR5IGJlZW4gcGFyc2VkLlxuICAgIC8vV2UndmUgYWxyZWFkeSBnb3QgdGhlIGdlb20sIGp1c3QgZ2V0IG9uIHdpdGggdGhlIGRyYXdpbmcuXG4gICAgLy9OZWVkIGEgd2F5IHRvIHBsdWNrIGEgY2FudmFzIGVsZW1lbnQgZnJvbSB0aGlzIGxheWVyIGdpdmVuIHRoZSBwYXJlbnQgbGF5ZXIncyBpZC5cbiAgICAvL1dhaXQgZm9yIGl0IHRvIGdldCBsb2FkZWQgYmVmb3JlIHByb2NlZWRpbmcuXG4gICAgdmFyIHRpbGVQb2ludCA9IHBhcmVudEN0eC50aWxlO1xuICAgIHZhciBjdHggPSB0aGlzLl90aWxlc1t0aWxlUG9pbnQueCArIFwiOlwiICsgdGlsZVBvaW50LnldO1xuXG4gICAgaWYoY3R4KXtcbiAgICAgIHBhcmVudEN0eC5jYW52YXMgPSBjdHg7XG4gICAgICB0aGlzLnJlZHJhd1RpbGUocGFyZW50Q3R4LmlkKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAvL1RoaXMgaXMgYSB0aW1lciB0aGF0IHdpbGwgd2FpdCBmb3IgYSBjcml0ZXJpb24gdG8gcmV0dXJuIHRydWUuXG4gICAgLy9JZiBub3QgdHJ1ZSB3aXRoaW4gdGhlIHRpbWVvdXQgZHVyYXRpb24sIGl0IHdpbGwgbW92ZSBvbi5cbiAgICB3YWl0Rm9yKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY3R4ID0gc2VsZi5fdGlsZXNbdGlsZVBvaW50LnggKyBcIjpcIiArIHRpbGVQb2ludC55XTtcbiAgICAgICAgaWYoY3R4KSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBmdW5jdGlvbigpe1xuICAgICAgICAvL1doZW4gaXQgZmluaXNoZXMsIGRvIHRoaXMuXG4gICAgICAgIGN0eCA9IHNlbGYuX3RpbGVzW3RpbGVQb2ludC54ICsgXCI6XCIgKyB0aWxlUG9pbnQueV07XG4gICAgICAgIHBhcmVudEN0eC5jYW52YXMgPSBjdHg7XG4gICAgICAgIHNlbGYucmVkcmF3VGlsZShwYXJlbnRDdHguaWQpO1xuXG4gICAgICB9LCAvL3doZW4gZG9uZSwgZ28gdG8gbmV4dCBmbG93XG4gICAgICAyMDAwKTsgLy9UaGUgVGltZW91dCBtaWxsaXNlY29uZHMuICBBZnRlciB0aGlzLCBnaXZlIHVwIGFuZCBtb3ZlIG9uXG5cbiAgfSxcblxuICBwYXJzZVZlY3RvclRpbGVMYXllcjogZnVuY3Rpb24odnRsLCBjdHgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdmFyIHRpbGVQb2ludCA9IGN0eC50aWxlO1xuICAgIHZhciBsYXllckN0eCAgPSB7IGNhbnZhczogbnVsbCwgaWQ6IGN0eC5pZCwgdGlsZTogY3R4LnRpbGUsIHpvb206IGN0eC56b29tLCB0aWxlU2l6ZTogY3R4LnRpbGVTaXplfTtcblxuICAgIC8vU2VlIGlmIHdlIGNhbiBwbHVjayB0aGUgY2hpbGQgdGlsZSBmcm9tIHRoaXMgUEJGIHRpbGUgbGF5ZXIgYmFzZWQgb24gdGhlIG1hc3RlciBsYXllcidzIHRpbGUgaWQuXG4gICAgbGF5ZXJDdHguY2FudmFzID0gc2VsZi5fdGlsZXNbdGlsZVBvaW50LnggKyBcIjpcIiArIHRpbGVQb2ludC55XTtcblxuXG5cbiAgICAvL0luaXRpYWxpemUgdGhpcyB0aWxlJ3MgZmVhdHVyZSBzdG9yYWdlIGhhc2gsIGlmIGl0IGhhc24ndCBhbHJlYWR5IGJlZW4gY3JlYXRlZC5cbiAgICAvLyBVc2VkIGZvciB3aGVuIGZpbHRlcnMgYXJlIHVwZGF0ZWQsIGFuZCBmZWF0dXJlcyBhcmUgY2xlYXJlZCB0byBwcmVwYXJlIGZvciBhIGZyZXNoIHJlZHJhdy5cbiAgICBpZiAoIXRoaXMuX2NhbnZhc0lEVG9GZWF0dXJlc1tsYXllckN0eC5pZF0pIHtcbiAgICAgIHRoaXMuX2luaXRpYWxpemVGZWF0dXJlc0hhc2gobGF5ZXJDdHgpO1xuICAgIH1lbHNle1xuICAgICAgLy9DbGVhciB0aGlzIHRpbGUncyBwcmV2aW91c2x5IHNhdmVkIGZlYXR1cmVzLlxuICAgICAgdGhpcy5jbGVhclRpbGVGZWF0dXJlSGFzaChsYXllckN0eC5pZCk7XG4gICAgfVxuXG4gICAgdmFyIGZlYXR1cmVzID0gdnRsLnBhcnNlZEZlYXR1cmVzO1xuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBmZWF0dXJlcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgdmFyIHZ0ZiA9IGZlYXR1cmVzW2ldOyAvL3ZlY3RvciB0aWxlIGZlYXR1cmVcbiAgICAgIHZ0Zi5sYXllciA9IHZ0bDtcblxuICAgICAgLyoqXG4gICAgICAgKiBBcHBseSBmaWx0ZXIgb24gZmVhdHVyZSBpZiB0aGVyZSBpcyBvbmUuIERlZmluZWQgaW4gdGhlIG9wdGlvbnMgb2JqZWN0XG4gICAgICAgKiBvZiBUaWxlTGF5ZXIuTVZUU291cmNlLmpzXG4gICAgICAgKi9cbiAgICAgIHZhciBmaWx0ZXIgPSBzZWxmLm9wdGlvbnMuZmlsdGVyO1xuICAgICAgaWYgKHR5cGVvZiBmaWx0ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgaWYgKCBmaWx0ZXIodnRmLCBsYXllckN0eCkgPT09IGZhbHNlICkgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIHZhciBnZXRJREZvckxheWVyRmVhdHVyZTtcbiAgICAgIGlmICh0eXBlb2Ygc2VsZi5vcHRpb25zLmdldElERm9yTGF5ZXJGZWF0dXJlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGdldElERm9yTGF5ZXJGZWF0dXJlID0gc2VsZi5vcHRpb25zLmdldElERm9yTGF5ZXJGZWF0dXJlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZ2V0SURGb3JMYXllckZlYXR1cmUgPSBVdGlsLmdldElERm9yTGF5ZXJGZWF0dXJlO1xuICAgICAgfVxuICAgICAgdmFyIHVuaXF1ZUlEID0gc2VsZi5vcHRpb25zLmdldElERm9yTGF5ZXJGZWF0dXJlKHZ0ZikgfHwgaTtcbiAgICAgIHZhciBtdnRGZWF0dXJlID0gc2VsZi5mZWF0dXJlc1t1bmlxdWVJRF07XG5cbiAgICAgIC8qKlxuICAgICAgICogVXNlIGxheWVyT3JkZXJpbmcgZnVuY3Rpb24gdG8gYXBwbHkgYSB6SW5kZXggcHJvcGVydHkgdG8gZWFjaCB2dGYuICBUaGlzIGlzIGRlZmluZWQgaW5cbiAgICAgICAqIFRpbGVMYXllci5NVlRTb3VyY2UuanMuICBVc2VkIGJlbG93IHRvIHNvcnQgZmVhdHVyZXMubnBtXG4gICAgICAgKi9cbiAgICAgIHZhciBsYXllck9yZGVyaW5nID0gc2VsZi5vcHRpb25zLmxheWVyT3JkZXJpbmc7XG4gICAgICBpZiAodHlwZW9mIGxheWVyT3JkZXJpbmcgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgbGF5ZXJPcmRlcmluZyh2dGYsIGxheWVyQ3R4KTsgLy9BcHBsaWVzIGEgY3VzdG9tIHByb3BlcnR5IHRvIHRoZSBmZWF0dXJlLCB3aGljaCBpcyB1c2VkIGFmdGVyIHdlJ3JlIHRocnUgaXRlcmF0aW5nIHRvIHNvcnRcbiAgICAgIH1cblxuICAgICAgLy9DcmVhdGUgYSBuZXcgTVZURmVhdHVyZSBpZiBvbmUgZG9lc24ndCBhbHJlYWR5IGV4aXN0IGZvciB0aGlzIGZlYXR1cmUuXG4gICAgICBpZiAoIW12dEZlYXR1cmUpIHtcbiAgICAgICAgLy9HZXQgYSBzdHlsZSBmb3IgdGhlIGZlYXR1cmUgLSBzZXQgaXQganVzdCBvbmNlIGZvciBlYWNoIG5ldyBNVlRGZWF0dXJlXG4gICAgICAgIHZhciBzdHlsZSA9IHNlbGYuc3R5bGUodnRmKTtcblxuICAgICAgICAvL0lmIHN0eWxlLmxlZ2VuZExhYmVsIHByb3BlcnR5IGV4aXN0cywgYnVpbGQgYSBsZWdlbmQgb2JqZWN0LlxuICAgICAgICAvL2lmKHN0eWxlLmxlZ2VuZExhYmVsKXtcbiAgICAgICAgLy8gIHNlbGYubGVnZW5kT2JqZWN0W3N0eWxlLmxlZ2VuZExhYmVsXSA9IHN0eWxlO1xuICAgICAgICAvL31cblxuICAgICAgICAvL2NyZWF0ZSBhIG5ldyBmZWF0dXJlXG4gICAgICAgIHNlbGYuZmVhdHVyZXNbdW5pcXVlSURdID0gbXZ0RmVhdHVyZSA9IG5ldyBNVlRGZWF0dXJlKHNlbGYsIHZ0ZiwgbGF5ZXJDdHgsIHVuaXF1ZUlELCBzdHlsZSk7XG4gICAgICAgIGlmIChzdHlsZSAmJiBzdHlsZS5keW5hbWljTGFiZWwgJiYgdHlwZW9mIHN0eWxlLmR5bmFtaWNMYWJlbCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHNlbGYuZmVhdHVyZXNXaXRoTGFiZWxzLnB1c2gobXZ0RmVhdHVyZSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vQWRkIHRoZSBuZXcgcGFydCB0byB0aGUgZXhpc3RpbmcgZmVhdHVyZVxuICAgICAgICBtdnRGZWF0dXJlLmFkZFRpbGVGZWF0dXJlKHZ0ZiwgbGF5ZXJDdHgpO1xuICAgICAgfVxuXG4gICAgICAvL0Fzc29jaWF0ZSAmIFNhdmUgdGhpcyBmZWF0dXJlIHdpdGggdGhpcyB0aWxlIGZvciBsYXRlclxuICAgICAgaWYobGF5ZXJDdHggJiYgbGF5ZXJDdHguaWQpIHNlbGYuX2NhbnZhc0lEVG9GZWF0dXJlc1tsYXllckN0eC5pZF1bJ2ZlYXR1cmVzJ10ucHVzaChtdnRGZWF0dXJlKTtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFwcGx5IHNvcnRpbmcgKHpJbmRleCkgb24gZmVhdHVyZSBpZiB0aGVyZSBpcyBhIGZ1bmN0aW9uIGRlZmluZWQgaW4gdGhlIG9wdGlvbnMgb2JqZWN0XG4gICAgICogb2YgVGlsZUxheWVyLk1WVFNvdXJjZS5qc1xuICAgICAqL1xuICAgIHZhciBsYXllck9yZGVyaW5nID0gc2VsZi5vcHRpb25zLmxheWVyT3JkZXJpbmc7XG4gICAgaWYgKGxheWVyT3JkZXJpbmcpIHtcbiAgICAgIC8vV2UndmUgYXNzaWduZWQgdGhlIGN1c3RvbSB6SW5kZXggcHJvcGVydHkgd2hlbiBpdGVyYXRpbmcgYWJvdmUuICBOb3cganVzdCBzb3J0LlxuICAgICAgc2VsZi5fY2FudmFzSURUb0ZlYXR1cmVzW2xheWVyQ3R4LmlkXS5mZWF0dXJlcyA9IHNlbGYuX2NhbnZhc0lEVG9GZWF0dXJlc1tsYXllckN0eC5pZF0uZmVhdHVyZXMuc29ydChmdW5jdGlvbihhLCBiKSB7XG4gICAgICAgIHJldHVybiAtKGIucHJvcGVydGllcy56SW5kZXggLSBhLnByb3BlcnRpZXMuekluZGV4KVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2VsZi5yZWRyYXdUaWxlKGxheWVyQ3R4LmlkKTtcbiAgfSxcblxuICBzZXRTdHlsZTogZnVuY3Rpb24oc3R5bGVGbikge1xuICAgIC8vIHJlZnJlc2ggdGhlIG51bWJlciBmb3IgdGhlIGhpZ2hlc3QgY291bnQgdmFsdWVcbiAgICAvLyB0aGlzIGlzIHVzZWQgb25seSBmb3IgY2hvcm9wbGV0aFxuICAgIHRoaXMuX2hpZ2hlc3RDb3VudCA9IDA7XG5cbiAgICAvLyBsb3dlc3QgY291bnQgc2hvdWxkIG5vdCBiZSAwLCBzaW5jZSB3ZSB3YW50IHRvIGZpZ3VyZSBvdXQgdGhlIGxvd2VzdFxuICAgIHRoaXMuX2xvd2VzdENvdW50ID0gbnVsbDtcblxuICAgIHRoaXMuc3R5bGUgPSBzdHlsZUZuO1xuICAgIGZvciAodmFyIGtleSBpbiB0aGlzLmZlYXR1cmVzKSB7XG4gICAgICB2YXIgZmVhdCA9IHRoaXMuZmVhdHVyZXNba2V5XTtcbiAgICAgIGZlYXQuc2V0U3R5bGUoc3R5bGVGbik7XG4gICAgfVxuICAgIHZhciB6ID0gdGhpcy5tYXAuZ2V0Wm9vbSgpO1xuICAgIGZvciAodmFyIGtleSBpbiB0aGlzLl90aWxlcykge1xuICAgICAgdmFyIGlkID0geiArICc6JyArIGtleTtcbiAgICAgIHRoaXMucmVkcmF3VGlsZShpZCk7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBBcyBjb3VudHMgZm9yIGNob3JvcGxldGhzIGNvbWUgaW4gd2l0aCB0aGUgYWpheCBkYXRhLFxuICAgKiB3ZSB3YW50IHRvIGtlZXAgdHJhY2sgb2Ygd2hpY2ggdmFsdWUgaXMgdGhlIGhpZ2hlc3RcbiAgICogdG8gY3JlYXRlIHRoZSBjb2xvciByYW1wIGZvciB0aGUgZmlsbHMgb2YgcG9seWdvbnMuXG4gICAqIEBwYXJhbSBjb3VudFxuICAgKi9cbiAgc2V0SGlnaGVzdENvdW50OiBmdW5jdGlvbihjb3VudCkge1xuICAgIGlmIChjb3VudCA+IHRoaXMuX2hpZ2hlc3RDb3VudCkge1xuICAgICAgdGhpcy5faGlnaGVzdENvdW50ID0gY291bnQ7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBoaWdoZXN0IG51bWJlciBvZiBhbGwgb2YgdGhlIGNvdW50cyB0aGF0IGhhdmUgY29tZSBpblxuICAgKiBmcm9tIHNldEhpZ2hlc3RDb3VudC4gVGhpcyBpcyBhc3N1bWVkIHRvIGJlIHNldCB2aWEgYWpheCBjYWxsYmFja3MuXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAqL1xuICBnZXRIaWdoZXN0Q291bnQ6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9oaWdoZXN0Q291bnQ7XG4gIH0sXG5cbiAgc2V0TG93ZXN0Q291bnQ6IGZ1bmN0aW9uKGNvdW50KSB7XG4gICAgaWYgKCF0aGlzLl9sb3dlc3RDb3VudCB8fCBjb3VudCA8IHRoaXMuX2xvd2VzdENvdW50KSB7XG4gICAgICB0aGlzLl9sb3dlc3RDb3VudCA9IGNvdW50O1xuICAgIH1cbiAgfSxcblxuICBnZXRMb3dlc3RDb3VudDogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xvd2VzdENvdW50O1xuICB9LFxuXG4gIHNldENvdW50UmFuZ2U6IGZ1bmN0aW9uKGNvdW50KSB7XG4gICAgdGhpcy5zZXRIaWdoZXN0Q291bnQoY291bnQpO1xuICAgIHRoaXMuc2V0TG93ZXN0Q291bnQoY291bnQpO1xuICB9LFxuXG4gIC8vVGhpcyBpcyB0aGUgb2xkIHdheS4gIEl0IHdvcmtzLCBidXQgaXMgc2xvdyBmb3IgbW91c2VvdmVyIGV2ZW50cy4gIEZpbmUgZm9yIGNsaWNrIGV2ZW50cy5cbiAgaGFuZGxlQ2xpY2tFdmVudDogZnVuY3Rpb24oZXZ0LCBjYikge1xuICAgIC8vQ2xpY2sgaGFwcGVuZWQgb24gdGhlIEdyb3VwTGF5ZXIgKE1hbmFnZXIpIGFuZCBwYXNzZWQgaXQgaGVyZVxuICAgIHZhciB0aWxlSUQgPSBldnQudGlsZUlELnNwbGl0KFwiOlwiKS5zbGljZSgxLCAzKS5qb2luKFwiOlwiKTtcbiAgICB2YXIgY2FudmFzID0gdGhpcy5fdGlsZXNbdGlsZUlEXTtcbiAgICBpZighY2FudmFzKSAoY2IoZXZ0KSk7IC8vYnJlYWsgb3V0XG4gICAgdmFyIHggPSBldnQubGF5ZXJQb2ludC54IC0gY2FudmFzLl9sZWFmbGV0X3Bvcy54O1xuICAgIHZhciB5ID0gZXZ0LmxheWVyUG9pbnQueSAtIGNhbnZhcy5fbGVhZmxldF9wb3MueTtcblxuICAgIHZhciB0aWxlUG9pbnQgPSB7eDogeCwgeTogeX07XG4gICAgdmFyIGZlYXR1cmVzID0gdGhpcy5fY2FudmFzSURUb0ZlYXR1cmVzW2V2dC50aWxlSURdLmZlYXR1cmVzO1xuXG4gICAgdmFyIG1pbkRpc3RhbmNlID0gTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZO1xuICAgIHZhciBuZWFyZXN0ID0gbnVsbDtcbiAgICB2YXIgaiwgcGF0aHMsIGRpc3RhbmNlO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBmZWF0dXJlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGZlYXR1cmUgPSBmZWF0dXJlc1tpXTtcbiAgICAgIHN3aXRjaCAoZmVhdHVyZS50eXBlKSB7XG4gICAgICAgIGNhc2UgMjogLy9MaW5lU3RyaW5nXG4gICAgICAgICAgcGF0aHMgPSBmZWF0dXJlLmdldFBhdGhzRm9yVGlsZShldnQudGlsZUlEKTtcbiAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgcGF0aHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIGlmIChmZWF0dXJlLnN0eWxlKSB7XG4gICAgICAgICAgICAgIHZhciBkaXN0YW5jZSA9IHRoaXMuX2dldERpc3RhbmNlRnJvbUxpbmUodGlsZVBvaW50LCBwYXRoc1tqXSk7XG4gICAgICAgICAgICAgIHZhciB0aGlja25lc3MgPSAoZmVhdHVyZS5zZWxlY3RlZCAmJiBmZWF0dXJlLnN0eWxlLnNlbGVjdGVkID8gZmVhdHVyZS5zdHlsZS5zZWxlY3RlZC5zaXplIDogZmVhdHVyZS5zdHlsZS5zaXplKTtcbiAgICAgICAgICAgICAgaWYgKGRpc3RhbmNlIDwgdGhpY2tuZXNzIC8gMiArIHRoaXMub3B0aW9ucy5saW5lQ2xpY2tUb2xlcmFuY2UgJiYgZGlzdGFuY2UgPCBtaW5EaXN0YW5jZSkge1xuICAgICAgICAgICAgICAgIG5lYXJlc3QgPSBmZWF0dXJlO1xuICAgICAgICAgICAgICAgIG1pbkRpc3RhbmNlID0gZGlzdGFuY2U7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAzOiAvL1BvbHlnb25cbiAgICAgICAgICBwYXRocyA9IGZlYXR1cmUuZ2V0UGF0aHNGb3JUaWxlKGV2dC50aWxlSUQpO1xuICAgICAgICAgIGZvciAoaiA9IDA7IGogPCBwYXRocy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuX2lzUG9pbnRJblBvbHkodGlsZVBvaW50LCBwYXRoc1tqXSkpIHtcbiAgICAgICAgICAgICAgbmVhcmVzdCA9IGZlYXR1cmU7XG4gICAgICAgICAgICAgIG1pbkRpc3RhbmNlID0gMDsgLy8gcG9pbnQgaXMgaW5zaWRlIHRoZSBwb2x5Z29uLCBzbyBkaXN0YW5jZSBpcyB6ZXJvXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgaWYgKG1pbkRpc3RhbmNlID09IDApIGJyZWFrO1xuICAgIH1cblxuICAgIGlmIChuZWFyZXN0ICYmIG5lYXJlc3QudG9nZ2xlRW5hYmxlZCkge1xuICAgICAgICBuZWFyZXN0LnRvZ2dsZSgpO1xuICAgIH1cbiAgICBldnQuZmVhdHVyZSA9IG5lYXJlc3Q7XG4gICAgY2IoZXZ0KTtcbiAgfSxcblxuICBjbGVhclRpbGU6IGZ1bmN0aW9uKGlkKSB7XG4gICAgLy9pZCBpcyB0aGUgZW50aXJlIHpvb206eDp5LiAgd2UganVzdCB3YW50IHg6eS5cbiAgICB2YXIgY2EgPSBpZC5zcGxpdChcIjpcIik7XG4gICAgdmFyIGNhbnZhc0lkID0gY2FbMV0gKyBcIjpcIiArIGNhWzJdO1xuXG4gICAgLy9UT0RPOiB0aGlzIGlzIHNvbWV0aW1lcyB1bmRlZmluZWQuXG4gICAgaWYgKHR5cGVvZiB0aGlzLl90aWxlc1tjYW52YXNJZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciBjYW52YXMgPSB0aGlzLl90aWxlc1tjYW52YXNJZF07XG5cbiAgICB2YXIgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIGNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gIH0sXG5cbiAgY2xlYXJUaWxlRmVhdHVyZUhhc2g6IGZ1bmN0aW9uKGNhbnZhc0lEKXtcbiAgICB0aGlzLl9jYW52YXNJRFRvRmVhdHVyZXNbY2FudmFzSURdID0geyBmZWF0dXJlczogW119OyAvL0dldCByaWQgb2YgYWxsIHNhdmVkIGZlYXR1cmVzXG4gIH0sXG5cbiAgY2xlYXJMYXllckZlYXR1cmVIYXNoOiBmdW5jdGlvbigpe1xuICAgIHRoaXMuZmVhdHVyZXMgPSB7fTtcbiAgfSxcblxuICByZWRyYXdUaWxlOiBmdW5jdGlvbihjYW52YXNJRCkge1xuICAgIC8vRmlyc3QsIGNsZWFyIHRoZSBjYW52YXNcbiAgICB0aGlzLmNsZWFyVGlsZShjYW52YXNJRCk7XG5cbiAgICAvLyBJZiB0aGUgZmVhdHVyZXMgYXJlIG5vdCBpbiB0aGUgdGlsZSwgdGhlbiB0aGVyZSBpcyBub3RoaW5nIHRvIHJlZHJhdy5cbiAgICAvLyBUaGlzIG1heSBoYXBwZW4gaWYgeW91IGNhbGwgcmVkcmF3IGJlZm9yZSBmZWF0dXJlcyBoYXZlIGxvYWRlZCBhbmQgaW5pdGlhbGx5XG4gICAgLy8gZHJhd24gdGhlIHRpbGUuXG4gICAgdmFyIGZlYXRmZWF0cyA9IHRoaXMuX2NhbnZhc0lEVG9GZWF0dXJlc1tjYW52YXNJRF07XG4gICAgaWYgKCFmZWF0ZmVhdHMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvL0dldCB0aGUgZmVhdHVyZXMgZm9yIHRoaXMgdGlsZSwgYW5kIHJlZHJhdyB0aGVtLlxuICAgIHZhciBmZWF0dXJlcyA9IGZlYXRmZWF0cy5mZWF0dXJlcztcblxuICAgIC8vIHdlIHdhbnQgdG8gc2tpcCBkcmF3aW5nIHRoZSBzZWxlY3RlZCBmZWF0dXJlcyBhbmQgZHJhdyB0aGVtIGxhc3RcbiAgICB2YXIgc2VsZWN0ZWRGZWF0dXJlcyA9IFtdO1xuXG4gICAgLy8gZHJhd2luZyBhbGwgb2YgdGhlIG5vbi1zZWxlY3RlZCBmZWF0dXJlc1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZmVhdHVyZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBmZWF0dXJlID0gZmVhdHVyZXNbaV07XG4gICAgICBpZiAoZmVhdHVyZS5zZWxlY3RlZCkge1xuICAgICAgICBzZWxlY3RlZEZlYXR1cmVzLnB1c2goZmVhdHVyZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmZWF0dXJlLmRyYXcoY2FudmFzSUQpO1xuICAgICAgICB0aGlzLmFkZExlZ2VuZFN0eWxlKGZlYXR1cmUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGRyYXdpbmcgdGhlIHNlbGVjdGVkIGZlYXR1cmVzIGxhc3RcbiAgICBmb3IgKHZhciBqID0gMCwgbGVuMiA9IHNlbGVjdGVkRmVhdHVyZXMubGVuZ3RoOyBqIDwgbGVuMjsgaisrKSB7XG4gICAgICB2YXIgc2VsRmVhdCA9IHNlbGVjdGVkRmVhdHVyZXNbal07XG4gICAgICBzZWxGZWF0LmRyYXcoY2FudmFzSUQpO1xuICAgIH1cblxuICB9LFxuXG4gIF9yZXNldENhbnZhc0lEVG9GZWF0dXJlczogZnVuY3Rpb24oY2FudmFzSUQsIGNhbnZhcykge1xuXG4gICAgdGhpcy5fY2FudmFzSURUb0ZlYXR1cmVzW2NhbnZhc0lEXSA9IHt9O1xuICAgIHRoaXMuX2NhbnZhc0lEVG9GZWF0dXJlc1tjYW52YXNJRF0uZmVhdHVyZXMgPSBbXTtcbiAgICB0aGlzLl9jYW52YXNJRFRvRmVhdHVyZXNbY2FudmFzSURdLmNhbnZhcyA9IGNhbnZhcztcblxuICB9LFxuXG4gIGxpbmtlZExheWVyOiBmdW5jdGlvbigpIHtcbiAgICBpZih0aGlzLm12dFNvdXJjZS5sYXllckxpbmspIHtcbiAgICAgIHZhciBsaW5rTmFtZSA9IHRoaXMubXZ0U291cmNlLmxheWVyTGluayh0aGlzLm5hbWUpO1xuICAgICAgcmV0dXJuIHRoaXMubXZ0U291cmNlLmxheWVyc1tsaW5rTmFtZV07XG4gICAgfVxuICAgIGVsc2V7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH0sXG5cbiAgZmVhdHVyZVdpdGhMYWJlbEFkZGVkOiBmdW5jdGlvbihmZWF0dXJlKSB7XG4gICAgdGhpcy5mZWF0dXJlc1dpdGhMYWJlbHMucHVzaChmZWF0dXJlKTtcbiAgfSxcblxuICBhZGRMZWdlbmRTdHlsZTogZnVuY3Rpb24oZmVhdHVyZSl7XG4gICAgLy9UYWtlIGluIGEgZmVhdHVyZSwgYW5kIGFkZCBpbiBjbGFzcyBuYW1lcyBhbmQgY29sb3JzIGJhc2VkIG9uIGRyYXdpbmcgc3R5bGVcblxuICAgIC8vSWYgc3R5bGUubGVnZW5kTGFiZWwgcHJvcGVydHkgZXhpc3RzLCBidWlsZCBhIGxlZ2VuZCBvYmplY3QuXG4gICAgaWYoZmVhdHVyZS5zdHlsZS5sZWdlbmRMYWJlbCl7XG4gICAgICB0aGlzLmxlZ2VuZE9iamVjdFtmZWF0dXJlLnN0eWxlLmxlZ2VuZExhYmVsXSA9IGZlYXR1cmUuc3R5bGU7XG4gICAgfVxuXG4gICAgLy9TdG9yZSB0aGUgYnViYmxlIEhUTUwsIGlmIHByZXNlbnRcbiAgICBpZihmZWF0dXJlLnN0YXRpY0xhYmVsKXtcbiAgICAgIHRoaXMubGVnZW5kT2JqZWN0W2ZlYXR1cmUuc3R5bGUubGVnZW5kTGFiZWxdID0gZmVhdHVyZS5zdGF0aWNMYWJlbC5pY29uO1xuICAgIH1cbiAgfSxcblxuICBjbGVhckxlZ2VuZE9iamVjdDogZnVuY3Rpb24oKXtcbiAgICB0aGlzLmxlZ2VuZE9iamVjdCA9IHt9O1xuICB9LFxuXG4gIGdldExlZ2VuZE9iamVjdDogZnVuY3Rpb24oKXtcbiAgICAvL0dldCB0aGUgbGVnZW5kIG9iamVjdCBmb3IgdGhpcyBsYXllci5cbiAgICByZXR1cm4gdGhpcy5sZWdlbmRPYmplY3Q7XG4gIH1cblxufSk7XG5cblxuZnVuY3Rpb24gcmVtb3ZlTGFiZWxzKHNlbGYpIHtcbiAgdmFyIGZlYXR1cmVzID0gc2VsZi5mZWF0dXJlc1dpdGhMYWJlbHM7XG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBmZWF0dXJlcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIHZhciBmZWF0ID0gZmVhdHVyZXNbaV07XG4gICAgZmVhdC5yZW1vdmVMYWJlbCgpO1xuICB9XG4gIHNlbGYuZmVhdHVyZXNXaXRoTGFiZWxzID0gW107XG59XG5cblxuLyoqXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2FyaXlhL3BoYW50b21qcy9ibG9iL21hc3Rlci9leGFtcGxlcy93YWl0Zm9yLmpzXG4gKlxuICogV2FpdCB1bnRpbCB0aGUgdGVzdCBjb25kaXRpb24gaXMgdHJ1ZSBvciBhIHRpbWVvdXQgb2NjdXJzLiBVc2VmdWwgZm9yIHdhaXRpbmdcbiAqIG9uIGEgc2VydmVyIHJlc3BvbnNlIG9yIGZvciBhIHVpIGNoYW5nZSAoZmFkZUluLCBldGMuKSB0byBvY2N1ci5cbiAqXG4gKiBAcGFyYW0gdGVzdEZ4IGphdmFzY3JpcHQgY29uZGl0aW9uIHRoYXQgZXZhbHVhdGVzIHRvIGEgYm9vbGVhbixcbiAqIGl0IGNhbiBiZSBwYXNzZWQgaW4gYXMgYSBzdHJpbmcgKGUuZy46IFwiMSA9PSAxXCIgb3IgXCIkKCcjYmFyJykuaXMoJzp2aXNpYmxlJylcIiBvclxuICogYXMgYSBjYWxsYmFjayBmdW5jdGlvbi5cbiAqIEBwYXJhbSBvblJlYWR5IHdoYXQgdG8gZG8gd2hlbiB0ZXN0RnggY29uZGl0aW9uIGlzIGZ1bGZpbGxlZCxcbiAqIGl0IGNhbiBiZSBwYXNzZWQgaW4gYXMgYSBzdHJpbmcgKGUuZy46IFwiMSA9PSAxXCIgb3IgXCIkKCcjYmFyJykuaXMoJzp2aXNpYmxlJylcIiBvclxuICogYXMgYSBjYWxsYmFjayBmdW5jdGlvbi5cbiAqIEBwYXJhbSB0aW1lT3V0TWlsbGlzIHRoZSBtYXggYW1vdW50IG9mIHRpbWUgdG8gd2FpdC4gSWYgbm90IHNwZWNpZmllZCwgMyBzZWMgaXMgdXNlZC5cbiAqL1xuZnVuY3Rpb24gd2FpdEZvcih0ZXN0RngsIG9uUmVhZHksIHRpbWVPdXRNaWxsaXMpIHtcbiAgdmFyIG1heHRpbWVPdXRNaWxsaXMgPSB0aW1lT3V0TWlsbGlzID8gdGltZU91dE1pbGxpcyA6IDMwMDAsIC8vPCBEZWZhdWx0IE1heCBUaW1vdXQgaXMgM3NcbiAgICBzdGFydCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpLFxuICAgIGNvbmRpdGlvbiA9ICh0eXBlb2YgKHRlc3RGeCkgPT09IFwic3RyaW5nXCIgPyBldmFsKHRlc3RGeCkgOiB0ZXN0RngoKSksIC8vPCBkZWZlbnNpdmUgY29kZVxuICAgIGludGVydmFsID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKChuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIHN0YXJ0IDwgbWF4dGltZU91dE1pbGxpcykgJiYgIWNvbmRpdGlvbikge1xuICAgICAgICAvLyBJZiBub3QgdGltZS1vdXQgeWV0IGFuZCBjb25kaXRpb24gbm90IHlldCBmdWxmaWxsZWRcbiAgICAgICAgY29uZGl0aW9uID0gKHR5cGVvZiAodGVzdEZ4KSA9PT0gXCJzdHJpbmdcIiA/IGV2YWwodGVzdEZ4KSA6IHRlc3RGeCgpKTsgLy88IGRlZmVuc2l2ZSBjb2RlXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoIWNvbmRpdGlvbikge1xuICAgICAgICAgIC8vIElmIGNvbmRpdGlvbiBzdGlsbCBub3QgZnVsZmlsbGVkICh0aW1lb3V0IGJ1dCBjb25kaXRpb24gaXMgJ2ZhbHNlJylcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIid3YWl0Rm9yKCknIHRpbWVvdXRcIik7XG4gICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7IC8vPCBTdG9wIHRoaXMgaW50ZXJ2YWxcbiAgICAgICAgICB0eXBlb2YgKG9uUmVhZHkpID09PSBcInN0cmluZ1wiID8gZXZhbChvblJlYWR5KSA6IG9uUmVhZHkoJ3RpbWVvdXQnKTsgLy88IERvIHdoYXQgaXQncyBzdXBwb3NlZCB0byBkbyBvbmNlIHRoZSBjb25kaXRpb24gaXMgZnVsZmlsbGVkXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gQ29uZGl0aW9uIGZ1bGZpbGxlZCAodGltZW91dCBhbmQvb3IgY29uZGl0aW9uIGlzICd0cnVlJylcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIid3YWl0Rm9yKCknIGZpbmlzaGVkIGluIFwiICsgKG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gc3RhcnQpICsgXCJtcy5cIik7XG4gICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7IC8vPCBTdG9wIHRoaXMgaW50ZXJ2YWxcbiAgICAgICAgICB0eXBlb2YgKG9uUmVhZHkpID09PSBcInN0cmluZ1wiID8gZXZhbChvblJlYWR5KSA6IG9uUmVhZHkoJ3N1Y2Nlc3MnKTsgLy88IERvIHdoYXQgaXQncyBzdXBwb3NlZCB0byBkbyBvbmNlIHRoZSBjb25kaXRpb24gaXMgZnVsZmlsbGVkXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCA1MCk7IC8vPCByZXBlYXQgY2hlY2sgZXZlcnkgNTBtc1xufTtcbiIsInZhciBWZWN0b3JUaWxlID0gcmVxdWlyZSgndmVjdG9yLXRpbGUnKS5WZWN0b3JUaWxlO1xudmFyIFByb3RvYnVmID0gcmVxdWlyZSgncGJmJyk7XG52YXIgUG9pbnQgPSByZXF1aXJlKCdwb2ludC1nZW9tZXRyeScpO1xudmFyIFV0aWwgPSByZXF1aXJlKCcuL01WVFV0aWwnKTtcbnZhciBNVlRMYXllciA9IHJlcXVpcmUoJy4vTVZUTGF5ZXInKTtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IEwuVGlsZUxheWVyLk1WVFNvdXJjZSA9IEwuVGlsZUxheWVyLkNhbnZhcy5leHRlbmQoe1xuXG4gIG9wdGlvbnM6IHtcbiAgICBkZWJ1ZzogZmFsc2UsXG4gICAgdXJsOiBcIlwiLCAvL1VSTCBUTyBWZWN0b3IgVGlsZSBTb3VyY2UsXG4gICAgZ2V0SURGb3JMYXllckZlYXR1cmU6IGZ1bmN0aW9uKCkge30sXG4gICAgdGlsZVNpemU6IDI1NixcbiAgICB2aXNpYmxlTGF5ZXJzOiBbXVxuICB9LFxuICBsYXllcnM6IHt9LCAvL0tlZXAgYSBsaXN0IG9mIHRoZSBsYXllcnMgY29udGFpbmVkIGluIHRoZSBQQkZzXG4gIHByb2Nlc3NlZFRpbGVzOiB7fSwgLy9LZWVwIGEgbGlzdCBvZiB0aWxlcyB0aGF0IGhhdmUgYmVlbiBwcm9jZXNzZWQgYWxyZWFkeVxuICBfZXZlbnRIYW5kbGVyczoge30sXG4gIF90cmlnZ2VyT25UaWxlc0xvYWRlZEV2ZW50OiB0cnVlLCAvL3doZXRoZXIgb3Igbm90IHRvIGZpcmUgdGhlIG9uVGlsZXNMb2FkZWQgZXZlbnQgd2hlbiBhbGwgb2YgdGhlIHRpbGVzIGZpbmlzaCBsb2FkaW5nLlxuICBfdXJsOiBcIlwiLCAvL2ludGVybmFsIFVSTCBwcm9wZXJ0eVxuXG4gIHN0eWxlOiBmdW5jdGlvbihmZWF0dXJlKSB7XG4gICAgdmFyIHN0eWxlID0ge307XG5cbiAgICB2YXIgdHlwZSA9IGZlYXR1cmUudHlwZTtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgMTogLy8nUG9pbnQnXG4gICAgICAgIHN0eWxlLmNvbG9yID0gJ3JnYmEoNDksNzksNzksMSknO1xuICAgICAgICBzdHlsZS5yYWRpdXMgPSA1O1xuICAgICAgICBzdHlsZS5zZWxlY3RlZCA9IHtcbiAgICAgICAgICBjb2xvcjogJ3JnYmEoMjU1LDI1NSwwLDAuNSknLFxuICAgICAgICAgIHJhZGl1czogNlxuICAgICAgICB9O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMjogLy8nTGluZVN0cmluZydcbiAgICAgICAgc3R5bGUuY29sb3IgPSAncmdiYSgxNjEsMjE3LDE1NSwwLjgpJztcbiAgICAgICAgc3R5bGUuc2l6ZSA9IDM7XG4gICAgICAgIHN0eWxlLnNlbGVjdGVkID0ge1xuICAgICAgICAgIGNvbG9yOiAncmdiYSgyNTUsMjUsMCwwLjUpJyxcbiAgICAgICAgICBzaXplOiA0XG4gICAgICAgIH07XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAzOiAvLydQb2x5Z29uJ1xuICAgICAgICBzdHlsZS5jb2xvciA9ICdyZ2JhKDQ5LDc5LDc5LDEpJztcbiAgICAgICAgc3R5bGUub3V0bGluZSA9IHtcbiAgICAgICAgICBjb2xvcjogJ3JnYmEoMTYxLDIxNywxNTUsMC44KScsXG4gICAgICAgICAgc2l6ZTogMVxuICAgICAgICB9O1xuICAgICAgICBzdHlsZS5zZWxlY3RlZCA9IHtcbiAgICAgICAgICBjb2xvcjogJ3JnYmEoMjU1LDE0MCwwLDAuMyknLFxuICAgICAgICAgIG91dGxpbmU6IHtcbiAgICAgICAgICAgIGNvbG9yOiAncmdiYSgyNTUsMTQwLDAsMSknLFxuICAgICAgICAgICAgc2l6ZTogMlxuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHJldHVybiBzdHlsZTtcbiAgfSxcblxuXG4gIGluaXRpYWxpemU6IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICBMLlV0aWwuc2V0T3B0aW9ucyh0aGlzLCBvcHRpb25zKTtcblxuICAgIC8vYSBsaXN0IG9mIHRoZSBsYXllcnMgY29udGFpbmVkIGluIHRoZSBQQkZzXG4gICAgdGhpcy5sYXllcnMgPSB7fTtcblxuICAgIC8vIHRpbGVzIGN1cnJlbnRseSBpbiB0aGUgdmlld3BvcnRcbiAgICB0aGlzLmFjdGl2ZVRpbGVzID0ge307XG5cbiAgICAvLyB0aGF0cyB0aGF0IGhhdmUgYmVlbiBsb2FkZWQgYW5kIGRyYXduXG4gICAgdGhpcy5sb2FkZWRUaWxlcyA9IHt9O1xuXG4gICAgdGhpcy5fdXJsID0gdGhpcy5vcHRpb25zLnVybDtcblxuICAgIC8qKlxuICAgICAqIEZvciBzb21lIHJlYXNvbiwgTGVhZmxldCBoYXMgc29tZSBjb2RlIHRoYXQgcmVzZXRzIHRoZVxuICAgICAqIHogaW5kZXggaW4gdGhlIG9wdGlvbnMgb2JqZWN0LiBJJ20gaGF2aW5nIHRyb3VibGUgdHJhY2tpbmdcbiAgICAgKiBkb3duIGV4YWN0bHkgd2hhdCBkb2VzIHRoaXMgYW5kIHdoeSwgc28gZm9yIG5vdywgd2Ugc2hvdWxkXG4gICAgICoganVzdCBjb3B5IHRoZSB2YWx1ZSB0byB0aGlzLnpJbmRleCBzbyB3ZSBjYW4gaGF2ZSB0aGUgcmlnaHRcbiAgICAgKiBudW1iZXIgd2hlbiB3ZSBtYWtlIHRoZSBzdWJzZXF1ZW50IE1WVExheWVycy5cbiAgICAgKi9cbiAgICB0aGlzLnpJbmRleCA9IG9wdGlvbnMuekluZGV4O1xuXG4gICAgaWYgKHR5cGVvZiBvcHRpb25zLnN0eWxlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aGlzLnN0eWxlID0gb3B0aW9ucy5zdHlsZTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIG9wdGlvbnMuYWpheFNvdXJjZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhpcy5hamF4U291cmNlID0gb3B0aW9ucy5hamF4U291cmNlO1xuICAgIH1cblxuICAgIHRoaXMubGF5ZXJMaW5rID0gb3B0aW9ucy5sYXllckxpbms7XG5cbiAgICB0aGlzLl9ldmVudEhhbmRsZXJzID0ge307XG5cbiAgICB0aGlzLl90aWxlc1RvUHJvY2VzcyA9IDA7IC8vc3RvcmUgdGhlIG1heCBudW1iZXIgb2YgdGlsZXMgdG8gYmUgbG9hZGVkLiAgTGF0ZXIsIHdlIGNhbiB1c2UgdGhpcyBjb3VudCB0byBjb3VudCBkb3duIFBCRiBsb2FkaW5nLlxuICB9LFxuXG4gIHJlZHJhdzogZnVuY3Rpb24odHJpZ2dlck9uVGlsZXNMb2FkZWRFdmVudCl7XG4gICAgLy9Pbmx5IHNldCB0byBmYWxzZSBpZiBpdCBhY3R1YWxseSBpcyBwYXNzZWQgaW4gYXMgJ2ZhbHNlJ1xuICAgIGlmICh0cmlnZ2VyT25UaWxlc0xvYWRlZEV2ZW50ID09PSBmYWxzZSkge1xuICAgICAgdGhpcy5fdHJpZ2dlck9uVGlsZXNMb2FkZWRFdmVudCA9IGZhbHNlO1xuICAgIH1cblxuICAgIEwuVGlsZUxheWVyLkNhbnZhcy5wcm90b3R5cGUucmVkcmF3LmNhbGwodGhpcyk7XG4gIH0sXG5cbiAgb25BZGQ6IGZ1bmN0aW9uKG1hcCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICBzZWxmLm1hcCA9IG1hcDtcbiAgICBMLlRpbGVMYXllci5DYW52YXMucHJvdG90eXBlLm9uQWRkLmNhbGwodGhpcywgbWFwKTtcblxuICAgIHZhciBtYXBPbkNsaWNrQ2FsbGJhY2sgPSBmdW5jdGlvbihlKSB7XG4gICAgICBzZWxmLl9vbkNsaWNrKGUpO1xuICAgIH07XG5cbiAgICBtYXAub24oJ2NsaWNrJywgbWFwT25DbGlja0NhbGxiYWNrKTtcblxuICAgIG1hcC5vbihcImxheWVycmVtb3ZlXCIsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIC8vIGNoZWNrIHRvIHNlZSBpZiB0aGUgbGF5ZXIgcmVtb3ZlZCBpcyB0aGlzIG9uZVxuICAgICAgLy8gY2FsbCBhIG1ldGhvZCB0byByZW1vdmUgdGhlIGNoaWxkIGxheWVycyAodGhlIG9uZXMgdGhhdCBhY3R1YWxseSBoYXZlIHNvbWV0aGluZyBkcmF3biBvbiB0aGVtKS5cbiAgICAgIGlmIChlLmxheWVyLl9sZWFmbGV0X2lkID09PSBzZWxmLl9sZWFmbGV0X2lkICYmIGUubGF5ZXIucmVtb3ZlQ2hpbGRMYXllcnMpIHtcbiAgICAgICAgZS5sYXllci5yZW1vdmVDaGlsZExheWVycyhtYXApO1xuICAgICAgICBtYXAub2ZmKCdjbGljaycsIG1hcE9uQ2xpY2tDYWxsYmFjayk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBzZWxmLmFkZENoaWxkTGF5ZXJzKG1hcCk7XG5cbiAgICBpZiAodHlwZW9mIER5bmFtaWNMYWJlbCA9PT0gJ2Z1bmN0aW9uJyApIHtcbiAgICAgIHRoaXMuZHluYW1pY0xhYmVsID0gbmV3IER5bmFtaWNMYWJlbChtYXAsIHRoaXMsIHt9KTtcbiAgICB9XG5cbiAgfSxcblxuICBkcmF3VGlsZTogZnVuY3Rpb24oY2FudmFzLCB0aWxlUG9pbnQsIHpvb20pIHtcbiAgICB2YXIgY3R4ID0ge1xuICAgICAgaWQ6IFt6b29tLCB0aWxlUG9pbnQueCwgdGlsZVBvaW50LnldLmpvaW4oXCI6XCIpLFxuICAgICAgY2FudmFzOiBjYW52YXMsXG4gICAgICB0aWxlOiB0aWxlUG9pbnQsXG4gICAgICB6b29tOiB6b29tLFxuICAgICAgdGlsZVNpemU6IHRoaXMub3B0aW9ucy50aWxlU2l6ZVxuICAgIH07XG5cbiAgICAvL0NhcHR1cmUgdGhlIG1heCBudW1iZXIgb2YgdGhlIHRpbGVzIHRvIGxvYWQgaGVyZS4gdGhpcy5fdGlsZXNUb1Byb2Nlc3MgaXMgYW4gaW50ZXJuYWwgbnVtYmVyIHdlIHVzZSB0byBrbm93IHdoZW4gd2UndmUgZmluaXNoZWQgcmVxdWVzdGluZyBQQkZzLlxuICAgIGlmKHRoaXMuX3RpbGVzVG9Qcm9jZXNzIDwgdGhpcy5fdGlsZXNUb0xvYWQpIHRoaXMuX3RpbGVzVG9Qcm9jZXNzID0gdGhpcy5fdGlsZXNUb0xvYWQ7XG5cbiAgICB2YXIgaWQgPSBjdHguaWQgPSBVdGlsLmdldENvbnRleHRJRChjdHgpO1xuICAgIHRoaXMuYWN0aXZlVGlsZXNbaWRdID0gY3R4O1xuXG4gICAgaWYoIXRoaXMucHJvY2Vzc2VkVGlsZXNbY3R4Lnpvb21dKSB0aGlzLnByb2Nlc3NlZFRpbGVzW2N0eC56b29tXSA9IHt9O1xuXG4gICAgaWYgKHRoaXMub3B0aW9ucy5kZWJ1Zykge1xuICAgICAgdGhpcy5fZHJhd0RlYnVnSW5mbyhjdHgpO1xuICAgIH1cbiAgICB0aGlzLl9kcmF3KGN0eCk7XG4gIH0sXG5cbiAgc2V0T3BhY2l0eTpmdW5jdGlvbihvcGFjaXR5KSB7XG4gICAgdGhpcy5fc2V0VmlzaWJsZUxheWVyc1N0eWxlKCdvcGFjaXR5JyxvcGFjaXR5KTtcbiAgfSxcblxuICBzZXRaSW5kZXg6ZnVuY3Rpb24oekluZGV4KSB7XG4gICAgdGhpcy5fc2V0VmlzaWJsZUxheWVyc1N0eWxlKCd6SW5kZXgnLHpJbmRleCk7XG4gIH0sXG5cbiAgX3NldFZpc2libGVMYXllcnNTdHlsZTpmdW5jdGlvbihzdHlsZSwgdmFsdWUpIHtcbiAgICBmb3IodmFyIGtleSBpbiB0aGlzLmxheWVycykge1xuICAgICAgdGhpcy5sYXllcnNba2V5XS5fdGlsZUNvbnRhaW5lci5zdHlsZVtzdHlsZV0gPSB2YWx1ZTtcbiAgICB9XG4gIH0sXG5cbiAgX2RyYXdEZWJ1Z0luZm86IGZ1bmN0aW9uKGN0eCkge1xuICAgIHZhciBtYXggPSB0aGlzLm9wdGlvbnMudGlsZVNpemU7XG4gICAgdmFyIGcgPSBjdHguY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgZy5zdHJva2VTdHlsZSA9ICcjMDAwMDAwJztcbiAgICBnLmZpbGxTdHlsZSA9ICcjRkZGRjAwJztcbiAgICBnLnN0cm9rZVJlY3QoMCwgMCwgbWF4LCBtYXgpO1xuICAgIGcuZm9udCA9IFwiMTJweCBBcmlhbFwiO1xuICAgIGcuZmlsbFJlY3QoMCwgMCwgNSwgNSk7XG4gICAgZy5maWxsUmVjdCgwLCBtYXggLSA1LCA1LCA1KTtcbiAgICBnLmZpbGxSZWN0KG1heCAtIDUsIDAsIDUsIDUpO1xuICAgIGcuZmlsbFJlY3QobWF4IC0gNSwgbWF4IC0gNSwgNSwgNSk7XG4gICAgZy5maWxsUmVjdChtYXggLyAyIC0gNSwgbWF4IC8gMiAtIDUsIDEwLCAxMCk7XG4gICAgZy5zdHJva2VUZXh0KGN0eC56b29tICsgJyAnICsgY3R4LnRpbGUueCArICcgJyArIGN0eC50aWxlLnksIG1heCAvIDIgLSAzMCwgbWF4IC8gMiAtIDEwKTtcbiAgfSxcblxuICBfZHJhdzogZnVuY3Rpb24oY3R4KSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4vLyAgICAvL1RoaXMgd29ya3MgdG8gc2tpcCBmZXRjaGluZyBhbmQgcHJvY2Vzc2luZyB0aWxlcyBpZiB0aGV5J3ZlIGFscmVhZHkgYmVlbiBwcm9jZXNzZWQuXG4vLyAgICB2YXIgdmVjdG9yVGlsZSA9IHRoaXMucHJvY2Vzc2VkVGlsZXNbY3R4Lnpvb21dW2N0eC5pZF07XG4vLyAgICAvL2lmIHdlJ3ZlIGFscmVhZHkgcGFyc2VkIGl0LCBkb24ndCBnZXQgaXQgYWdhaW4uXG4vLyAgICBpZih2ZWN0b3JUaWxlKXtcbi8vICAgICAgY29uc29sZS5sb2coXCJTa2lwcGluZyBmZXRjaGluZyBcIiArIGN0eC5pZCk7XG4vLyAgICAgIHNlbGYuY2hlY2tWZWN0b3JUaWxlTGF5ZXJzKHBhcnNlVlQodmVjdG9yVGlsZSksIGN0eCwgdHJ1ZSk7XG4vLyAgICAgIHNlbGYucmVkdWNlVGlsZXNUb1Byb2Nlc3NDb3VudCgpO1xuLy8gICAgICByZXR1cm47XG4vLyAgICB9XG5cbiAgICBpZiAoIXRoaXMuX3VybCkgcmV0dXJuO1xuICAgIHZhciBzcmMgPSB0aGlzLmdldFRpbGVVcmwoeyB4OiBjdHgudGlsZS54LCB5OiBjdHgudGlsZS55LCB6OiBjdHguem9vbSB9KTtcblxuICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICB4aHIub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoeGhyLnN0YXR1cyA9PSBcIjIwMFwiKSB7XG5cbiAgICAgICAgaWYoIXhoci5yZXNwb25zZSkgcmV0dXJuO1xuXG4gICAgICAgIHZhciBhcnJheUJ1ZmZlciA9IG5ldyBVaW50OEFycmF5KHhoci5yZXNwb25zZSk7XG4gICAgICAgIHZhciBidWYgPSBuZXcgUHJvdG9idWYoYXJyYXlCdWZmZXIpO1xuICAgICAgICB2YXIgdnQgPSBuZXcgVmVjdG9yVGlsZShidWYpO1xuICAgICAgICAvL0NoZWNrIHRoZSBjdXJyZW50IG1hcCBsYXllciB6b29tLiAgSWYgZmFzdCB6b29taW5nIGlzIG9jY3VycmluZywgdGhlbiBzaG9ydCBjaXJjdWl0IHRpbGVzIHRoYXQgYXJlIGZvciBhIGRpZmZlcmVudCB6b29tIGxldmVsIHRoYW4gd2UncmUgY3VycmVudGx5IG9uLlxuICAgICAgICBpZihzZWxmLm1hcCAmJiBzZWxmLm1hcC5nZXRab29tKCkgIT0gY3R4Lnpvb20pIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkZldGNoZWQgdGlsZSBmb3Igem9vbSBsZXZlbCBcIiArIGN0eC56b29tICsgXCIuIE1hcCBpcyBhdCB6b29tIGxldmVsIFwiICsgc2VsZi5fbWFwLmdldFpvb20oKSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHNlbGYuY2hlY2tWZWN0b3JUaWxlTGF5ZXJzKHBhcnNlVlQodnQpLCBjdHgpO1xuICAgICAgICB0aWxlTG9hZGVkKHNlbGYsIGN0eCk7XG4gICAgICB9XG5cbiAgICAgIC8vZWl0aGVyIHdheSwgcmVkdWNlIHRoZSBjb3VudCBvZiB0aWxlc1RvUHJvY2VzcyB0aWxlcyBoZXJlXG4gICAgICBzZWxmLnJlZHVjZVRpbGVzVG9Qcm9jZXNzQ291bnQoKTtcbiAgICB9O1xuXG4gICAgeGhyLm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwieGhyIGVycm9yOiBcIiArIHhoci5zdGF0dXMpXG4gICAgfTtcblxuICAgIHhoci5vcGVuKCdHRVQnLCBzcmMsIHRydWUpOyAvL2FzeW5jIGlzIHRydWVcbiAgICB4aHIucmVzcG9uc2VUeXBlID0gJ2FycmF5YnVmZmVyJztcbiAgICB4aHIuc2VuZCgpO1xuICB9LFxuXG4gIHJlZHVjZVRpbGVzVG9Qcm9jZXNzQ291bnQ6IGZ1bmN0aW9uKCl7XG4gICAgdGhpcy5fdGlsZXNUb1Byb2Nlc3MtLTtcbiAgICBpZighdGhpcy5fdGlsZXNUb1Byb2Nlc3Mpe1xuICAgICAgLy9UcmlnZ2VyIGV2ZW50IGxldHRpbmcgdXMga25vdyB0aGF0IGFsbCBQQkZzIGhhdmUgYmVlbiBsb2FkZWQgYW5kIHByb2Nlc3NlZCAob3IgNDA0J2QpLlxuICAgICAgaWYodGhpcy5fZXZlbnRIYW5kbGVyc1tcIlBCRkxvYWRcIl0pIHRoaXMuX2V2ZW50SGFuZGxlcnNbXCJQQkZMb2FkXCJdKCk7XG4gICAgICB0aGlzLl9wYmZMb2FkZWQoKTtcbiAgICB9XG4gIH0sXG5cbiAgY2hlY2tWZWN0b3JUaWxlTGF5ZXJzOiBmdW5jdGlvbih2dCwgY3R4LCBwYXJzZWQpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAvL0NoZWNrIGlmIHRoZXJlIGFyZSBzcGVjaWZpZWQgdmlzaWJsZSBsYXllcnNcbiAgICBpZihzZWxmLm9wdGlvbnMudmlzaWJsZUxheWVycyAmJiBzZWxmLm9wdGlvbnMudmlzaWJsZUxheWVycy5sZW5ndGggPiAwKXtcbiAgICAgIC8vb25seSBsZXQgdGhydSB0aGUgbGF5ZXJzIGxpc3RlZCBpbiB0aGUgdmlzaWJsZUxheWVycyBhcnJheVxuICAgICAgZm9yKHZhciBpPTA7IGkgPCBzZWxmLm9wdGlvbnMudmlzaWJsZUxheWVycy5sZW5ndGg7IGkrKyl7XG4gICAgICAgIHZhciBsYXllck5hbWUgPSBzZWxmLm9wdGlvbnMudmlzaWJsZUxheWVyc1tpXTtcbiAgICAgICAgaWYodnQubGF5ZXJzW2xheWVyTmFtZV0pe1xuICAgICAgICAgICAvL1Byb2NlZWQgd2l0aCBwYXJzaW5nXG4gICAgICAgICAgc2VsZi5wcmVwYXJlTVZUTGF5ZXJzKHZ0LmxheWVyc1tsYXllck5hbWVdLCBsYXllck5hbWUsIGN0eCwgcGFyc2VkKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1lbHNle1xuICAgICAgLy9QYXJzZSBhbGwgdnQubGF5ZXJzXG4gICAgICBmb3IgKHZhciBrZXkgaW4gdnQubGF5ZXJzKSB7XG4gICAgICAgIHNlbGYucHJlcGFyZU1WVExheWVycyh2dC5sYXllcnNba2V5XSwga2V5LCBjdHgsIHBhcnNlZCk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIHByZXBhcmVNVlRMYXllcnM6IGZ1bmN0aW9uKGx5ciAsa2V5LCBjdHgsIHBhcnNlZCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIGlmICghc2VsZi5sYXllcnNba2V5XSkge1xuICAgICAgLy9DcmVhdGUgTVZUTGF5ZXIgb3IgTVZUUG9pbnRMYXllciBmb3IgdXNlclxuICAgICAgc2VsZi5sYXllcnNba2V5XSA9IHNlbGYuY3JlYXRlTVZUTGF5ZXIoa2V5LCBseXIucGFyc2VkRmVhdHVyZXNbMF0udHlwZSB8fCBudWxsKTtcbiAgICB9XG5cbiAgICBpZiAocGFyc2VkKSB7XG4gICAgICAvL1dlJ3ZlIGFscmVhZHkgcGFyc2VkIGl0LiAgR28gZ2V0IGNhbnZhcyBhbmQgZHJhdy5cbiAgICAgIHNlbGYubGF5ZXJzW2tleV0uZ2V0Q2FudmFzKGN0eCwgbHlyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2VsZi5sYXllcnNba2V5XS5wYXJzZVZlY3RvclRpbGVMYXllcihseXIsIGN0eCk7XG4gICAgfVxuXG4gIH0sXG5cbiAgY3JlYXRlTVZUTGF5ZXI6IGZ1bmN0aW9uKGtleSwgdHlwZSkge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIHZhciBnZXRJREZvckxheWVyRmVhdHVyZTtcbiAgICBpZiAodHlwZW9mIHNlbGYub3B0aW9ucy5nZXRJREZvckxheWVyRmVhdHVyZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgZ2V0SURGb3JMYXllckZlYXR1cmUgPSBzZWxmLm9wdGlvbnMuZ2V0SURGb3JMYXllckZlYXR1cmU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdldElERm9yTGF5ZXJGZWF0dXJlID0gVXRpbC5nZXRJREZvckxheWVyRmVhdHVyZTtcbiAgICB9XG5cbiAgICB2YXIgb3B0aW9ucyA9IHtcbiAgICAgIGdldElERm9yTGF5ZXJGZWF0dXJlOiBnZXRJREZvckxheWVyRmVhdHVyZSxcbiAgICAgIGZpbHRlcjogc2VsZi5vcHRpb25zLmZpbHRlcixcbiAgICAgIGxheWVyT3JkZXJpbmc6IHNlbGYub3B0aW9ucy5sYXllck9yZGVyaW5nLFxuICAgICAgc3R5bGU6IHNlbGYuc3R5bGUsXG4gICAgICBuYW1lOiBrZXksXG4gICAgICBhc3luY2g6IHRydWVcbiAgICB9O1xuXG4gICAgaWYgKHNlbGYub3B0aW9ucy56SW5kZXgpIHtcbiAgICAgIG9wdGlvbnMuekluZGV4ID0gc2VsZi56SW5kZXg7XG4gICAgfVxuXG4gICAgLy9UYWtlIHRoZSBsYXllciBhbmQgY3JlYXRlIGEgbmV3IE1WVExheWVyIG9yIE1WVFBvaW50TGF5ZXIgaWYgb25lIGRvZXNuJ3QgZXhpc3QuXG4gICAgdmFyIGxheWVyID0gbmV3IE1WVExheWVyKHNlbGYsIG9wdGlvbnMpLmFkZFRvKHNlbGYubWFwKTtcblxuICAgIHJldHVybiBsYXllcjtcbiAgfSxcblxuICBnZXRMYXllcnM6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmxheWVycztcbiAgfSxcblxuICBoaWRlTGF5ZXI6IGZ1bmN0aW9uKGlkKSB7XG4gICAgaWYgKHRoaXMubGF5ZXJzW2lkXSkge1xuICAgICAgdGhpcy5fbWFwLnJlbW92ZUxheWVyKHRoaXMubGF5ZXJzW2lkXSk7XG4gICAgICBpZih0aGlzLm9wdGlvbnMudmlzaWJsZUxheWVycy5pbmRleE9mKFwiaWRcIikgPiAtMSl7XG4gICAgICAgIHRoaXMudmlzaWJsZUxheWVycy5zcGxpY2UodGhpcy5vcHRpb25zLnZpc2libGVMYXllcnMuaW5kZXhPZihcImlkXCIpLCAxKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgc2hvd0xheWVyOiBmdW5jdGlvbihpZCkge1xuICAgIGlmICh0aGlzLmxheWVyc1tpZF0pIHtcbiAgICAgIHRoaXMuX21hcC5hZGRMYXllcih0aGlzLmxheWVyc1tpZF0pO1xuICAgICAgaWYodGhpcy5vcHRpb25zLnZpc2libGVMYXllcnMuaW5kZXhPZihcImlkXCIpID09IC0xKXtcbiAgICAgICAgdGhpcy52aXNpYmxlTGF5ZXJzLnB1c2goaWQpO1xuICAgICAgfVxuICAgIH1cbiAgICAvL01ha2Ugc3VyZSBtYW5hZ2VyIGxheWVyIGlzIGFsd2F5cyBpbiBmcm9udFxuICAgIHRoaXMuYnJpbmdUb0Zyb250KCk7XG4gIH0sXG5cbiAgcmVtb3ZlQ2hpbGRMYXllcnM6IGZ1bmN0aW9uKG1hcCl7XG4gICAgLy9SZW1vdmUgY2hpbGQgbGF5ZXJzIG9mIHRoaXMgZ3JvdXAgbGF5ZXJcbiAgICBmb3IgKHZhciBrZXkgaW4gdGhpcy5sYXllcnMpIHtcbiAgICAgIHZhciBsYXllciA9IHRoaXMubGF5ZXJzW2tleV07XG4gICAgICBtYXAucmVtb3ZlTGF5ZXIobGF5ZXIpO1xuICAgIH1cbiAgfSxcblxuICBhZGRDaGlsZExheWVyczogZnVuY3Rpb24obWFwKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIGlmKHNlbGYub3B0aW9ucy52aXNpYmxlTGF5ZXJzLmxlbmd0aCA+IDApe1xuICAgICAgLy9vbmx5IGxldCB0aHJ1IHRoZSBsYXllcnMgbGlzdGVkIGluIHRoZSB2aXNpYmxlTGF5ZXJzIGFycmF5XG4gICAgICBmb3IodmFyIGk9MDsgaSA8IHNlbGYub3B0aW9ucy52aXNpYmxlTGF5ZXJzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgdmFyIGxheWVyTmFtZSA9IHNlbGYub3B0aW9ucy52aXNpYmxlTGF5ZXJzW2ldO1xuICAgICAgICB2YXIgbGF5ZXIgPSB0aGlzLmxheWVyc1tsYXllck5hbWVdO1xuICAgICAgICBpZihsYXllcil7XG4gICAgICAgICAgLy9Qcm9jZWVkIHdpdGggcGFyc2luZ1xuICAgICAgICAgIG1hcC5hZGRMYXllcihsYXllcik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9ZWxzZXtcbiAgICAgIC8vQWRkIGFsbCBsYXllcnNcbiAgICAgIGZvciAodmFyIGtleSBpbiB0aGlzLmxheWVycykge1xuICAgICAgICB2YXIgbGF5ZXIgPSB0aGlzLmxheWVyc1trZXldO1xuICAgICAgICAvLyBsYXllciBpcyBzZXQgdG8gdmlzaWJsZSBhbmQgaXMgbm90IGFscmVhZHkgb24gbWFwXG4gICAgICAgIGlmICghbGF5ZXIuX21hcCkge1xuICAgICAgICAgIG1hcC5hZGRMYXllcihsYXllcik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgYmluZDogZnVuY3Rpb24oZXZlbnRUeXBlLCBjYWxsYmFjaykge1xuICAgIHRoaXMuX2V2ZW50SGFuZGxlcnNbZXZlbnRUeXBlXSA9IGNhbGxiYWNrO1xuICB9LFxuXG4gIF9vbkNsaWNrOiBmdW5jdGlvbihldnQpIHtcbiAgICAvL0hlcmUsIHBhc3MgdGhlIGV2ZW50IG9uIHRvIHRoZSBjaGlsZCBNVlRMYXllciBhbmQgaGF2ZSBpdCBkbyB0aGUgaGl0IHRlc3QgYW5kIGhhbmRsZSB0aGUgcmVzdWx0LlxuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB2YXIgb25DbGljayA9IHNlbGYub3B0aW9ucy5vbkNsaWNrO1xuICAgIHZhciBjbGlja2FibGVMYXllcnMgPSBzZWxmLm9wdGlvbnMuY2xpY2thYmxlTGF5ZXJzO1xuICAgIHZhciBsYXllcnMgPSBzZWxmLmxheWVycztcblxuICAgIGV2dC50aWxlSUQgPSAgZ2V0VGlsZVVSTChldnQubGF0bG5nLmxhdCwgZXZ0LmxhdGxuZy5sbmcsIHRoaXMubWFwLmdldFpvb20oKSk7XG5cbiAgICAvLyBXZSBtdXN0IGhhdmUgYW4gYXJyYXkgb2YgY2xpY2thYmxlIGxheWVycywgb3RoZXJ3aXNlLCB3ZSBqdXN0IHBhc3NcbiAgICAvLyB0aGUgZXZlbnQgdG8gdGhlIHB1YmxpYyBvbkNsaWNrIGNhbGxiYWNrIGluIG9wdGlvbnMuXG5cbiAgICBpZighY2xpY2thYmxlTGF5ZXJzKXtcbiAgICAgIGNsaWNrYWJsZUxheWVycyA9IE9iamVjdC5rZXlzKHNlbGYubGF5ZXJzKTtcbiAgICB9XG5cbiAgICBpZiAoY2xpY2thYmxlTGF5ZXJzICYmIGNsaWNrYWJsZUxheWVycy5sZW5ndGggPiAwKSB7XG4gICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gY2xpY2thYmxlTGF5ZXJzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIHZhciBrZXkgPSBjbGlja2FibGVMYXllcnNbaV07XG4gICAgICAgIHZhciBsYXllciA9IGxheWVyc1trZXldO1xuICAgICAgICBpZiAobGF5ZXIpIHtcbiAgICAgICAgICBsYXllci5oYW5kbGVDbGlja0V2ZW50KGV2dCwgZnVuY3Rpb24oZXZ0KSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIG9uQ2xpY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgb25DbGljayhldnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0eXBlb2Ygb25DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBvbkNsaWNrKGV2dCk7XG4gICAgICB9XG4gICAgfVxuXG4gIH0sXG5cbiAgc2V0RmlsdGVyOiBmdW5jdGlvbihmaWx0ZXJGdW5jdGlvbiwgbGF5ZXJOYW1lKSB7XG4gICAgLy90YWtlIGluIGEgbmV3IGZpbHRlciBmdW5jdGlvbi5cbiAgICAvL1Byb3BhZ2F0ZSB0byBjaGlsZCBsYXllcnMuXG5cbiAgICAvL0FkZCBmaWx0ZXIgdG8gYWxsIGNoaWxkIGxheWVycyBpZiBubyBsYXllciBpcyBzcGVjaWZpZWQuXG4gICAgZm9yICh2YXIga2V5IGluIHRoaXMubGF5ZXJzKSB7XG4gICAgICB2YXIgbGF5ZXIgPSB0aGlzLmxheWVyc1trZXldO1xuXG4gICAgICBpZiAobGF5ZXJOYW1lKXtcbiAgICAgICAgaWYoa2V5LnRvTG93ZXJDYXNlKCkgPT0gbGF5ZXJOYW1lLnRvTG93ZXJDYXNlKCkpe1xuICAgICAgICAgIGxheWVyLm9wdGlvbnMuZmlsdGVyID0gZmlsdGVyRnVuY3Rpb247IC8vQXNzaWduIGZpbHRlciB0byBjaGlsZCBsYXllciwgb25seSBpZiBuYW1lIG1hdGNoZXNcbiAgICAgICAgICAvL0FmdGVyIGZpbHRlciBpcyBzZXQsIHRoZSBvbGQgZmVhdHVyZSBoYXNoZXMgYXJlIGludmFsaWQuICBDbGVhciB0aGVtIGZvciBuZXh0IGRyYXcuXG4gICAgICAgICAgbGF5ZXIuY2xlYXJMYXllckZlYXR1cmVIYXNoKCk7XG4gICAgICAgICAgLy9sYXllci5jbGVhclRpbGVGZWF0dXJlSGFzaCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNle1xuICAgICAgICBsYXllci5vcHRpb25zLmZpbHRlciA9IGZpbHRlckZ1bmN0aW9uOyAvL0Fzc2lnbiBmaWx0ZXIgdG8gY2hpbGQgbGF5ZXJcbiAgICAgICAgLy9BZnRlciBmaWx0ZXIgaXMgc2V0LCB0aGUgb2xkIGZlYXR1cmUgaGFzaGVzIGFyZSBpbnZhbGlkLiAgQ2xlYXIgdGhlbSBmb3IgbmV4dCBkcmF3LlxuICAgICAgICBsYXllci5jbGVhckxheWVyRmVhdHVyZUhhc2goKTtcbiAgICAgICAgLy9sYXllci5jbGVhclRpbGVGZWF0dXJlSGFzaCgpO1xuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogVGFrZSBpbiBhIG5ldyBzdHlsZSBmdW5jdGlvbiBhbmQgcHJvcG9nYXRlIHRvIGNoaWxkIGxheWVycy5cbiAgICogSWYgeW91IGRvIG5vdCBzZXQgYSBsYXllciBuYW1lLCBpdCByZXNldHMgdGhlIHN0eWxlIGZvciBhbGwgb2YgdGhlIGxheWVycy5cbiAgICogQHBhcmFtIHN0eWxlRnVuY3Rpb25cbiAgICogQHBhcmFtIGxheWVyTmFtZVxuICAgKi9cbiAgc2V0U3R5bGU6IGZ1bmN0aW9uKHN0eWxlRm4sIGxheWVyTmFtZSkge1xuICAgIGZvciAodmFyIGtleSBpbiB0aGlzLmxheWVycykge1xuICAgICAgdmFyIGxheWVyID0gdGhpcy5sYXllcnNba2V5XTtcbiAgICAgIGlmIChsYXllck5hbWUpIHtcbiAgICAgICAgaWYoa2V5LnRvTG93ZXJDYXNlKCkgPT0gbGF5ZXJOYW1lLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgICAgICBsYXllci5zZXRTdHlsZShzdHlsZUZuKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGF5ZXIuc2V0U3R5bGUoc3R5bGVGbik7XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIGZlYXR1cmVTZWxlY3RlZDogZnVuY3Rpb24obXZ0RmVhdHVyZSkge1xuICAgIGlmICh0aGlzLm9wdGlvbnMubXV0ZXhUb2dnbGUpIHtcbiAgICAgIGlmICh0aGlzLl9zZWxlY3RlZEZlYXR1cmUpIHtcbiAgICAgICAgdGhpcy5fc2VsZWN0ZWRGZWF0dXJlLmRlc2VsZWN0KCk7XG4gICAgICB9XG4gICAgICB0aGlzLl9zZWxlY3RlZEZlYXR1cmUgPSBtdnRGZWF0dXJlO1xuICAgIH1cbiAgICBpZiAodGhpcy5vcHRpb25zLm9uU2VsZWN0KSB7XG4gICAgICB0aGlzLm9wdGlvbnMub25TZWxlY3QobXZ0RmVhdHVyZSk7XG4gICAgfVxuICB9LFxuXG4gIGZlYXR1cmVEZXNlbGVjdGVkOiBmdW5jdGlvbihtdnRGZWF0dXJlKSB7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5tdXRleFRvZ2dsZSAmJiB0aGlzLl9zZWxlY3RlZEZlYXR1cmUpIHtcbiAgICAgIHRoaXMuX3NlbGVjdGVkRmVhdHVyZSA9IG51bGw7XG4gICAgfVxuICAgIGlmICh0aGlzLm9wdGlvbnMub25EZXNlbGVjdCkge1xuICAgICAgdGhpcy5vcHRpb25zLm9uRGVzZWxlY3QobXZ0RmVhdHVyZSk7XG4gICAgfVxuICB9LFxuXG4gIF9wYmZMb2FkZWQ6IGZ1bmN0aW9uKCkge1xuICAgIC8vRmlyZXMgd2hlbiBhbGwgdGlsZXMgZnJvbSB0aGlzIGxheWVyIGhhdmUgYmVlbiBsb2FkZWQgYW5kIGRyYXduIChvciA0MDQnZCkuXG5cbiAgICAvL01ha2Ugc3VyZSBtYW5hZ2VyIGxheWVyIGlzIGFsd2F5cyBpbiBmcm9udFxuICAgIHRoaXMuYnJpbmdUb0Zyb250KCk7XG5cbiAgICAvL1NlZSBpZiB0aGVyZSBpcyBhbiBldmVudCB0byBleGVjdXRlXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHZhciBvblRpbGVzTG9hZGVkID0gc2VsZi5vcHRpb25zLm9uVGlsZXNMb2FkZWQ7XG5cbiAgICBpZiAob25UaWxlc0xvYWRlZCAmJiB0eXBlb2Ygb25UaWxlc0xvYWRlZCA9PT0gJ2Z1bmN0aW9uJyAmJiB0aGlzLl90cmlnZ2VyT25UaWxlc0xvYWRlZEV2ZW50ID09PSB0cnVlKSB7XG4gICAgICBvblRpbGVzTG9hZGVkKHRoaXMpO1xuICAgIH1cbiAgICBzZWxmLl90cmlnZ2VyT25UaWxlc0xvYWRlZEV2ZW50ID0gdHJ1ZTsgLy9yZXNldCAtIGlmIHJlZHJhdygpIGlzIGNhbGxlZCB3aXRoIHRoZSBvcHRpbmFsICdmYWxzZScgcGFyYW1ldGVyIHRvIHRlbXBvcmFyaWx5IGRpc2FibGUgdGhlIG9uVGlsZXNMb2FkZWQgZXZlbnQgZnJvbSBmaXJpbmcuICBUaGlzIHJlc2V0cyBpdCBiYWNrIHRvIHRydWUgYWZ0ZXIgYSBzaW5nbGUgdGltZSBvZiBmaXJpbmcgYXMgJ2ZhbHNlJy5cbiAgfVxuXG59KTtcblxuXG5pZiAodHlwZW9mKE51bWJlci5wcm90b3R5cGUudG9SYWQpID09PSBcInVuZGVmaW5lZFwiKSB7XG4gIE51bWJlci5wcm90b3R5cGUudG9SYWQgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcyAqIE1hdGguUEkgLyAxODA7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0VGlsZVVSTChsYXQsIGxvbiwgem9vbSkge1xuICB2YXIgeHRpbGUgPSBwYXJzZUludChNYXRoLmZsb29yKCAobG9uICsgMTgwKSAvIDM2MCAqICgxPDx6b29tKSApKTtcbiAgdmFyIHl0aWxlID0gcGFyc2VJbnQoTWF0aC5mbG9vciggKDEgLSBNYXRoLmxvZyhNYXRoLnRhbihsYXQudG9SYWQoKSkgKyAxIC8gTWF0aC5jb3MobGF0LnRvUmFkKCkpKSAvIE1hdGguUEkpIC8gMiAqICgxPDx6b29tKSApKTtcbiAgcmV0dXJuIFwiXCIgKyB6b29tICsgXCI6XCIgKyB4dGlsZSArIFwiOlwiICsgeXRpbGU7XG59XG5cbmZ1bmN0aW9uIHRpbGVMb2FkZWQocGJmU291cmNlLCBjdHgpIHtcbiAgcGJmU291cmNlLmxvYWRlZFRpbGVzW2N0eC5pZF0gPSBjdHg7XG59XG5cbmZ1bmN0aW9uIHBhcnNlVlQodnQpe1xuICBmb3IgKHZhciBrZXkgaW4gdnQubGF5ZXJzKSB7XG4gICAgdmFyIGx5ciA9IHZ0LmxheWVyc1trZXldO1xuICAgIHBhcnNlVlRGZWF0dXJlcyhseXIpO1xuICB9XG4gIHJldHVybiB2dDtcbn1cblxuZnVuY3Rpb24gcGFyc2VWVEZlYXR1cmVzKHZ0bCl7XG4gIHZ0bC5wYXJzZWRGZWF0dXJlcyA9IFtdO1xuICB2YXIgZmVhdHVyZXMgPSB2dGwuX2ZlYXR1cmVzO1xuICBmb3IgKHZhciBpID0gMCwgbGVuID0gZmVhdHVyZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICB2YXIgdnRmID0gdnRsLmZlYXR1cmUoaSk7XG4gICAgdnRmLmNvb3JkaW5hdGVzID0gdnRmLmxvYWRHZW9tZXRyeSgpO1xuICAgIHZ0bC5wYXJzZWRGZWF0dXJlcy5wdXNoKHZ0Zik7XG4gIH1cbiAgcmV0dXJuIHZ0bDtcbn1cbiIsIi8qKlxuICogQ3JlYXRlZCBieSBOaWNob2xhcyBIYWxsYWhhbiA8bmhhbGxhaGFuQHNwYXRpYWxkZXYuY29tPlxuICogICAgICAgb24gOC8xNS8xNC5cbiAqL1xudmFyIFV0aWwgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG5VdGlsLmdldENvbnRleHRJRCA9IGZ1bmN0aW9uKGN0eCkge1xuICByZXR1cm4gW2N0eC56b29tLCBjdHgudGlsZS54LCBjdHgudGlsZS55XS5qb2luKFwiOlwiKTtcbn07XG5cbi8qKlxuICogRGVmYXVsdCBmdW5jdGlvbiB0aGF0IGdldHMgdGhlIGlkIGZvciBhIGxheWVyIGZlYXR1cmUuXG4gKiBTb21ldGltZXMgdGhpcyBuZWVkcyB0byBiZSBkb25lIGluIGEgZGlmZmVyZW50IHdheSBhbmRcbiAqIGNhbiBiZSBzcGVjaWZpZWQgYnkgdGhlIHVzZXIgaW4gdGhlIG9wdGlvbnMgZm9yIEwuVGlsZUxheWVyLk1WVFNvdXJjZS5cbiAqXG4gKiBAcGFyYW0gZmVhdHVyZVxuICogQHJldHVybnMge2N0eC5pZHwqfGlkfHN0cmluZ3xqc3RzLmluZGV4LmNoYWluLk1vbm90b25lQ2hhaW4uaWR8bnVtYmVyfVxuICovXG5VdGlsLmdldElERm9yTGF5ZXJGZWF0dXJlID0gZnVuY3Rpb24oZmVhdHVyZSkge1xuICByZXR1cm4gZmVhdHVyZS5wcm9wZXJ0aWVzLmlkO1xufTtcblxuVXRpbC5nZXRKU09OID0gZnVuY3Rpb24odXJsLCBjYWxsYmFjaykge1xuICB2YXIgeG1saHR0cCA9IHR5cGVvZiBYTUxIdHRwUmVxdWVzdCAhPT0gJ3VuZGVmaW5lZCcgPyBuZXcgWE1MSHR0cFJlcXVlc3QoKSA6IG5ldyBBY3RpdmVYT2JqZWN0KCdNaWNyb3NvZnQuWE1MSFRUUCcpO1xuICB4bWxodHRwLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBzdGF0dXMgPSB4bWxodHRwLnN0YXR1cztcbiAgICBpZiAoeG1saHR0cC5yZWFkeVN0YXRlID09PSA0ICYmIHN0YXR1cyA+PSAyMDAgJiYgc3RhdHVzIDwgMzAwKSB7XG4gICAgICB2YXIganNvbiA9IEpTT04ucGFyc2UoeG1saHR0cC5yZXNwb25zZVRleHQpO1xuICAgICAgY2FsbGJhY2sobnVsbCwganNvbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNhbGxiYWNrKCB7IGVycm9yOiB0cnVlLCBzdGF0dXM6IHN0YXR1cyB9ICk7XG4gICAgfVxuICB9O1xuICB4bWxodHRwLm9wZW4oXCJHRVRcIiwgdXJsLCB0cnVlKTtcbiAgeG1saHR0cC5zZW5kKCk7XG59O1xuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IE5pY2hvbGFzIEhhbGxhaGFuIDxuaGFsbGFoYW5Ac3BhdGlhbGRldi5jb20+XG4gKiAgICAgICBvbiA3LzMxLzE0LlxuICovXG52YXIgVXRpbCA9IHJlcXVpcmUoJy4uL01WVFV0aWwnKTtcbm1vZHVsZS5leHBvcnRzID0gU3RhdGljTGFiZWw7XG5cbmZ1bmN0aW9uIFN0YXRpY0xhYmVsKG12dEZlYXR1cmUsIGN0eCwgbGF0TG5nLCBzdHlsZSkge1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIHRoaXMubXZ0RmVhdHVyZSA9IG12dEZlYXR1cmU7XG4gIHRoaXMubWFwID0gbXZ0RmVhdHVyZS5tYXA7XG4gIHRoaXMuem9vbSA9IGN0eC56b29tO1xuICB0aGlzLmxhdExuZyA9IGxhdExuZztcbiAgdGhpcy5zZWxlY3RlZCA9IGZhbHNlO1xuXG4gIGlmIChtdnRGZWF0dXJlLmxpbmtlZEZlYXR1cmUpIHtcbiAgICB2YXIgbGlua2VkRmVhdHVyZSA9IG12dEZlYXR1cmUubGlua2VkRmVhdHVyZSgpO1xuICAgIGlmIChsaW5rZWRGZWF0dXJlICYmIGxpbmtlZEZlYXR1cmUuc2VsZWN0ZWQpIHtcbiAgICAgIHNlbGYuc2VsZWN0ZWQgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGluaXQoc2VsZiwgbXZ0RmVhdHVyZSwgY3R4LCBsYXRMbmcsIHN0eWxlKVxufVxuXG5mdW5jdGlvbiBpbml0KHNlbGYsIG12dEZlYXR1cmUsIGN0eCwgbGF0TG5nLCBzdHlsZSkge1xuICB2YXIgYWpheERhdGEgPSBtdnRGZWF0dXJlLmFqYXhEYXRhO1xuICB2YXIgc3R5ID0gc2VsZi5zdHlsZSA9IHN0eWxlLnN0YXRpY0xhYmVsKG12dEZlYXR1cmUsIGFqYXhEYXRhKTtcbiAgdmFyIGljb24gPSBzZWxmLmljb24gPSBMLmRpdkljb24oe1xuICAgIGNsYXNzTmFtZTogc3R5LmNzc0NsYXNzIHx8ICdsYWJlbC1pY29uLXRleHQnLFxuICAgIGh0bWw6IHN0eS5odG1sLFxuICAgIGljb25TaXplOiBzdHkuaWNvblNpemUgfHwgWzUwLDUwXVxuICB9KTtcblxuICBzZWxmLm1hcmtlciA9IEwubWFya2VyKGxhdExuZywge2ljb246IGljb259KS5hZGRUbyhzZWxmLm1hcCk7XG5cbiAgaWYgKHNlbGYuc2VsZWN0ZWQpIHtcbiAgICBzZWxmLm1hcmtlci5faWNvbi5jbGFzc0xpc3QuYWRkKHNlbGYuc3R5bGUuY3NzU2VsZWN0ZWRDbGFzcyB8fCAnbGFiZWwtaWNvbi10ZXh0LXNlbGVjdGVkJyk7XG4gIH1cblxuICBzZWxmLm1hcmtlci5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgc2VsZi50b2dnbGUoKTtcbiAgfSk7XG5cbiAgc2VsZi5tYXAub24oJ3pvb21lbmQnLCBmdW5jdGlvbihlKSB7XG4gICAgdmFyIG5ld1pvb20gPSBlLnRhcmdldC5nZXRab29tKCk7XG4gICAgaWYgKHNlbGYuem9vbSAhPT0gbmV3Wm9vbSkge1xuICAgICAgc2VsZi5tYXAucmVtb3ZlTGF5ZXIoc2VsZi5tYXJrZXIpO1xuICAgIH1cbiAgfSk7XG59XG5cblxuU3RhdGljTGFiZWwucHJvdG90eXBlLnRvZ2dsZSA9IGZ1bmN0aW9uKCkge1xuICBpZiAodGhpcy5zZWxlY3RlZCkge1xuICAgIHRoaXMuZGVzZWxlY3QoKTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLnNlbGVjdCgpO1xuICB9XG59O1xuXG5TdGF0aWNMYWJlbC5wcm90b3R5cGUuc2VsZWN0ID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuc2VsZWN0ZWQgPSB0cnVlO1xuICB0aGlzLm1hcmtlci5faWNvbi5jbGFzc0xpc3QuYWRkKHRoaXMuc3R5bGUuY3NzU2VsZWN0ZWRDbGFzcyB8fCAnbGFiZWwtaWNvbi10ZXh0LXNlbGVjdGVkJyk7XG4gIHZhciBsaW5rZWRGZWF0dXJlID0gdGhpcy5tdnRGZWF0dXJlLmxpbmtlZEZlYXR1cmUoKTtcbiAgaWYgKCFsaW5rZWRGZWF0dXJlLnNlbGVjdGVkKSBsaW5rZWRGZWF0dXJlLnNlbGVjdCgpO1xufTtcblxuU3RhdGljTGFiZWwucHJvdG90eXBlLmRlc2VsZWN0ID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuc2VsZWN0ZWQgPSBmYWxzZTtcbiAgdGhpcy5tYXJrZXIuX2ljb24uY2xhc3NMaXN0LnJlbW92ZSh0aGlzLnN0eWxlLmNzc1NlbGVjdGVkQ2xhc3MgfHwgJ2xhYmVsLWljb24tdGV4dC1zZWxlY3RlZCcpO1xuICB2YXIgbGlua2VkRmVhdHVyZSA9IHRoaXMubXZ0RmVhdHVyZS5saW5rZWRGZWF0dXJlKCk7XG4gIGlmIChsaW5rZWRGZWF0dXJlLnNlbGVjdGVkKSBsaW5rZWRGZWF0dXJlLmRlc2VsZWN0KCk7XG59O1xuXG5TdGF0aWNMYWJlbC5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24oKSB7XG4gIGlmICghdGhpcy5tYXAgfHwgIXRoaXMubWFya2VyKSByZXR1cm47XG4gIHRoaXMubWFwLnJlbW92ZUxheWVyKHRoaXMubWFya2VyKTtcbn07XG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgTmljaG9sYXMgSGFsbGFoYW4gPG5oYWxsYWhhbkBzcGF0aWFsZGV2LmNvbT5cbiAqICAgICAgIG9uIDQvNy8xNC5cbiAqL1xuXG52YXIgZmVhdHVyZWxhYmVsID0gcmVxdWlyZSgnLi9mZWF0dXJlbGFiZWwnKTtcbnZhciBmZWF0dXJlU2V0cyA9IGZlYXR1cmVsYWJlbC5mZWF0dXJlU2V0cztcbnZhciBMYWJlbCA9IHJlcXVpcmUoJy4vTGFiZWwuanMnKTtcblxuXG5mdW5jdGlvbiBGZWF0dXJlU2V0KCkge1xuICB0aGlzLmZlYXR1cmVzID0gW107XG4gIHRoaXMuX3BhdGhJZEhhc2ggPSB7fTtcbiAgZmVhdHVyZVNldHMucHVzaCh0aGlzKTtcbiAgdGhpcy5zZWxlY3RlZEZlYXR1cmVMYXllciA9IG51bGw7XG4gIHRoaXMuc2VsZWN0ZWRJY29uID0gbnVsbDtcbn1cbm1vZHVsZS5leHBvcnRzID0gRmVhdHVyZVNldDtcblxuXG5GZWF0dXJlU2V0LnByb3RvdHlwZS5hZGRGZWF0dXJlID0gZnVuY3Rpb24gKGZlYXR1cmVMYXllciwgZ2VvanNvbkxheWVyKSB7XG4gIGZlYXR1cmVMYXllci5nZW9qc29uTGF5ZXIgPSBnZW9qc29uTGF5ZXI7XG4gIGlmICghZmVhdHVyZUxheWVyLl9sZWFmbGV0X2lkKSB7XG4gICAgTC5zdGFtcChmZWF0dXJlTGF5ZXIpO1xuICB9XG4gIHRoaXMuZmVhdHVyZXMucHVzaChmZWF0dXJlTGF5ZXIpO1xuXG4gIC8vIGZlYXR1cmUgY29uc2lzdHMgb2Ygb25lIHBvbHlnb25cbiAgaWYgKCFmZWF0dXJlTGF5ZXIuX2xheWVycykge1xuICAgIHZhciBsZWFmbGV0SWQgPSBmZWF0dXJlTGF5ZXIuX2xlYWZsZXRfaWQ7XG4gICAgdGhpcy5fcGF0aElkSGFzaFtsZWFmbGV0SWRdID0gZmVhdHVyZUxheWVyO1xuICB9XG5cbiAgLy8gZmVhdHVyZSBjb25zaXN0cyBvZiBzZXZlcmFsIHBvbHlnb25zXG4gIGVsc2Uge1xuICAgIGZvciAodmFyIGlkIGluIGZlYXR1cmVMYXllci5fbGF5ZXJzKSB7XG4gICAgICB2YXIgcGF0aExheWVyID0gZmVhdHVyZUxheWVyLl9sYXllcnNbaWRdO1xuICAgICAgdmFyIGxlYWZsZXRJZCA9IHBhdGhMYXllci5fbGVhZmxldF9pZDtcbiAgICAgIHRoaXMuX3BhdGhJZEhhc2hbbGVhZmxldElkXSA9IGZlYXR1cmVMYXllcjtcbiAgICB9XG4gIH1cblxufTtcblxuXG5GZWF0dXJlU2V0LnByb3RvdHlwZS5fcGF0aFVwZGF0ZWQgPSBmdW5jdGlvbiAobGVhZmxldElkKSB7XG4gIHZhciBmZWF0dXJlTGF5ZXIgPSB0aGlzLl9wYXRoSWRIYXNoW2xlYWZsZXRJZF07XG4gIC8vIHRoZSBoYXNoIGRvZXNuJ3QgYWx3YXlzIGNhdGNoIHRoZSBpZCBpZiB0aGUgZ3JhcGhpYyBoYXMgbm90IHlldCBiZWVuIHJlbmRlcmVkLlxuICBpZiAoIWZlYXR1cmVMYXllcikge1xuICAgIHZhciBmZWF0dXJlcyA9IHRoaXMuZmVhdHVyZXM7XG4gICAgZm9yICh2YXIga2V5IGluIGZlYXR1cmVzKSB7XG4gICAgICB2YXIgZmVhdCA9IHRoaXMuZmVhdHVyZXNba2V5XTtcbiAgICAgIGlmIChmZWF0Ll9sZWFmbGV0X2lkID09PSBsZWFmbGV0SWQpIHtcbiAgICAgICAgZmVhdHVyZUxheWVyID0gZmVhdDtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHBhdGhVcGRhdGVkKGZlYXR1cmVMYXllciwgdGhpcyk7XG59O1xuXG5cbmZ1bmN0aW9uIHBhdGhVcGRhdGVkKGZlYXR1cmVMYXllciwgZmVhdHVyZVNldCkge1xuICAvLyBJZiB0aGUgaWQgZG9lc250IGhhc2gsIG5vIHBhdGggZm9yIHRoZSBmZWF0dXJlcyBpbiBvdXIgZmVhdHVyZSBzZXQgYXBwbHkuXG4gIGlmICghZmVhdHVyZUxheWVyKSB7XG4gICAgLy9jb25zb2xlLmVycm9yKCdwYXRoVXBkYXRlZCBmZWF0dXJlTGF5ZXIgZW1wdHknKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoZmVhdHVyZUxheWVyLl9sYXllcnMpIHtcblxuICAgIC8vIG9ubHkgY2FsY3VsYXRlIGNlbnRlciBhZnRlciBhbGwgb2YgdGhlIHBvbHlnb25zIGhhdmUgYmVlbiB1cGRhdGVkXG4gICAgaWYgKCFmZWF0dXJlTGF5ZXIucGF0aHNVcGRhdGVkKSBmZWF0dXJlTGF5ZXIucGF0aHNVcGRhdGVkID0gMDtcbiAgICArK2ZlYXR1cmVMYXllci5wYXRoc1VwZGF0ZWQ7XG5cbiAgICBpZiAoZmVhdHVyZUxheWVyLnBhdGhzVXBkYXRlZCA9PT0gT2JqZWN0LmtleXMoZmVhdHVyZUxheWVyLl9sYXllcnMpLmxlbmd0aCkge1xuICAgICAgdmFyIGwgPSBmaW5kTGFyZ2VzdExheWVyKGZlYXR1cmVMYXllci5fbGF5ZXJzKTtcblxuICAgICAgaWYgKGwpIHtcbiAgICAgICAgZmVhdHVyZUxheWVyLmxhYmVsQ2VudGVyUG9pbnQgPSBjYWxjdWxhdGVDZW50ZXIobC5fcGFydHMpO1xuICAgICAgICB1cGRhdGVMYWJlbChmZWF0dXJlTGF5ZXIsIGZlYXR1cmVTZXQpO1xuICAgICAgfVxuXG4gICAgICBmZWF0dXJlTGF5ZXIucGF0aHNVcGRhdGVkID0gMDtcbiAgICB9XG5cbiAgICByZXR1cm47XG4gIH1cblxuICAvLyB0aGVyZSBpcyBvbmx5IG9uZSBwb2x5Z29uLCBzbyBjYWxjdWxhdGUgY2VudGVyLiBhbHNvIGNoZWNrIHRvIHNlZSBpZiB0aGVyZSBhcmUgcGFydHNcbiAgaWYgKCBmZWF0dXJlTGF5ZXIuX3BhcnRzICYmIGZlYXR1cmVMYXllci5fcGFydHMubGVuZ3RoICkge1xuICAgIGZlYXR1cmVMYXllci5sYWJlbENlbnRlclBvaW50ID0gY2FsY3VsYXRlQ2VudGVyKGZlYXR1cmVMYXllci5fcGFydHMpO1xuICAgIHVwZGF0ZUxhYmVsKGZlYXR1cmVMYXllciwgZmVhdHVyZVNldCk7XG5cbiAgICByZXR1cm47XG4gIH1cblxufVxuXG5cbmZ1bmN0aW9uIGNyZWF0ZUxhYmVsKGZlYXR1cmVMYXllciwgZmVhdHVyZVNldCkge1xuICB2YXIgcG9pbnQgPSBmZWF0dXJlTGF5ZXIubGFiZWxDZW50ZXJQb2ludDtcblxuICB2YXIgcHJvcGVydGllcyA9IGZlYXR1cmVMYXllci5mZWF0dXJlLnByb3BlcnRpZXM7XG4gIHZhciB0ZXh0ID0gcHJvcGVydGllcy50aXRsZSB8fCBwcm9wZXJ0aWVzLm5hbWUgfHwgJ0xhYmVsJztcbiAgaWYgKHByb3BlcnRpZXMubGFiZWxQcm9wZXJ0eSkge1xuICAgIGlmICh0eXBlb2YgcHJvcGVydGllcy5sYWJlbFByb3BlcnR5ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0ZXh0ID0gcHJvcGVydGllcy5sYWJlbFByb3BlcnR5KHByb3BlcnRpZXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0ZXh0ID0gcHJvcGVydGllc1twcm9wZXJ0aWVzLmxhYmVsUHJvcGVydHldO1xuICAgIH1cblxuICB9XG5cbiAgLy9EZXRlcm1pbmUgbWFwIGljb24gY2xhc3NcbiAgdmFyIGljb25DbGFzcyA9IFwiZmVhdHVyZWxhYmVsLWljb24tdGV4dFwiO1xuICBpZiAocHJvcGVydGllc1tcIm1hcC1pY29uLWNsYXNzXCJdKSB7XG4gICAgICBpZiAodHlwZW9mIHByb3BlcnRpZXNbXCJtYXAtaWNvbi1jbGFzc1wiXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIGljb25DbGFzcyA9IHByb3BlcnRpZXNbXCJtYXAtaWNvbi1jbGFzc1wiXShwcm9wZXJ0aWVzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWNvbkNsYXNzID0gcHJvcGVydGllc1twcm9wZXJ0aWVzW1wibWFwLWljb24tY2xhc3NcIl1dO1xuICAgICAgfVxuICB9XG5cbiAgLy9EZXRlcm1pbmUgbWFwIGljb24gc2l6ZVxuICB2YXIgaWNvblNpemUgPSBbMzUsMzVdO1xuICBpZiAocHJvcGVydGllc1tcIm1hcC1pY29uLXNpemVcIl0pIHtcbiAgICAgIGlmICh0eXBlb2YgcHJvcGVydGllc1tcIm1hcC1pY29uLXNpemVcIl0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBpY29uU2l6ZSA9IHByb3BlcnRpZXNbXCJtYXAtaWNvbi1zaXplXCJdKHByb3BlcnRpZXMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpY29uU2l6ZSA9IHByb3BlcnRpZXNbcHJvcGVydGllc1tcIm1hcC1pY29uLXNpemVcIl1dO1xuICAgICAgfVxuICB9XG5cbiAgY29uc29sZS5sb2coJ0xBQkVMOiAnICsgdGV4dCArICcgKCcgKyBwb2ludC54ICsgJywgJyArIHBvaW50LnkgKyAnKSAnICsgcHJvcGVydGllcy5uYW1lKTtcblxuICB2YXIgaWNvbiA9IEwuZGl2SWNvbih7XG4gICAgY2xhc3NOYW1lOiBpY29uQ2xhc3MgfHwgXCJcIiwgLy9pY29uQ2xhc3MgfHwgKCQuaXNOdW1lcmljKHRleHQpID8gJ2ZlYXR1cmVsYWJlbC1pY29uLW51bWJlcicgOiAnZmVhdHVyZWxhYmVsLWljb24tdGV4dCcpLFxuICAgIGljb25TaXplOiBpY29uU2l6ZSxcbiAgICBodG1sOiB0ZXh0XG4gIH0pO1xuXG4gIHZhciBsYWJlbCA9IG5ldyBMYWJlbChwb2ludCwgZmVhdHVyZUxheWVyLCB7aWNvbjppY29ufSk7XG5cbiAgbGFiZWwuY2xlYXJBbGxFdmVudExpc3RlbmVycygpO1xuICBmZWF0dXJlTGF5ZXIuY2xlYXJBbGxFdmVudExpc3RlbmVycygpO1xuXG4gIGxhYmVsLm9uKCdtb3VzZW92ZXInLCBmdW5jdGlvbihlKSB7XG4gICAgbW91c2VvdmVyKHRoaXMsIHRoaXMuZmVhdHVyZUxheWVyKTtcbiAgfSk7XG5cbiAgZmVhdHVyZUxheWVyLm9uKCdtb3VzZW92ZXInLCBmdW5jdGlvbiAoZSkge1xuICAgIG1vdXNlb3Zlcih0aGlzLmxhYmVsLCB0aGlzKTtcbiAgfSk7XG5cbiAgZnVuY3Rpb24gd2hpdGVuTGFiZWwobGFiZWwpIHtcbiAgICBpZiAobGFiZWwuX2ljb24pIHtcbiAgICAgIC8vIGxhYmVsIGlzIHRleHQgb25seSwgbm8gYmFkZ2VcbiAgICAgIGlmIChsYWJlbC5faWNvbi5jaGlsZHJlblswXS5jbGFzc05hbWUuaW5kZXhPZignZmVhdHVyZWxhYmVsLWljb24tdGV4dCcpID4gLTEpIHtcbiAgICAgICAgbGFiZWwuX2ljb24uY2hpbGRyZW5bMF0uc3R5bGVbJ2NvbG9yJ10gPSAncmdiYSgyNTUsMjU1LDI1NSwwLjcpJztcbiAgICAgIH1cbiAgICAgIC8vIGxhYmVsIGhhcyBhIGJhZGdlXG4gICAgICBlbHNlIHtcbiAgICAgICAgbGFiZWwuX2ljb24uY2hpbGRyZW5bMF0uc3R5bGVbJ2JveC1zaGFkb3cnXSA9ICcwcHggMHB4IDBweCA2cHggcmdiYSgyNTUsMjU1LDI1NSwwLjcpJztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnb2xkZW5MYWJlbChsYWJlbCkge1xuICAgIGlmIChsYWJlbC5faWNvbikge1xuICAgICAgLy8gbGFiZWwgaXMgdGV4dCBvbmx5LCBubyBiYWRnZVxuICAgICAgaWYgKGxhYmVsLl9pY29uLmNoaWxkcmVuWzBdLmNsYXNzTmFtZS5pbmRleE9mKCdmZWF0dXJlbGFiZWwtaWNvbi10ZXh0JykgPiAtMSkge1xuICAgICAgICBsYWJlbC5faWNvbi5jaGlsZHJlblswXS5zdHlsZVsnY29sb3InXSA9ICdyZ2JhKDIzNywxNzgsNDEsMC44KSc7XG4gICAgICB9XG4gICAgICAvLyBsYWJlbCBoYXMgYSBiYWRnZVxuICAgICAgZWxzZSB7XG4gICAgICAgIGxhYmVsLl9pY29uLmNoaWxkcmVuWzBdLnN0eWxlWydib3gtc2hhZG93J10gPSAnMHB4IDBweCAwcHggNnB4IHJnYmEoMjM3LDE3OCw0MSwwLjgpJztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZWRkZW5MYWJlbChsYWJlbCkge1xuICAgIGlmIChsYWJlbC5faWNvbikge1xuICAgICAgLy8gbGFiZWwgaXMgdGV4dCBvbmx5LCBubyBiYWRnZVxuICAgICAgaWYgKGxhYmVsLl9pY29uLmNoaWxkcmVuWzBdLmNsYXNzTmFtZS5pbmRleE9mKCdmZWF0dXJlbGFiZWwtaWNvbi10ZXh0JykgPiAtMSkge1xuICAgICAgICBsYWJlbC5faWNvbi5jaGlsZHJlblswXS5zdHlsZVsnY29sb3InXSA9ICdyZ2JhKDIzNywyNyw0NiwwLjUpJztcbiAgICAgIH1cbiAgICAgIC8vIGxhYmVsIGhhcyBhIGJhZGdlXG4gICAgICBlbHNlIHtcbiAgICAgICAgbGFiZWwuX2ljb24uY2hpbGRyZW5bMF0uc3R5bGVbJ2JveC1zaGFkb3cnXSA9ICcwcHggMHB4IDBweCA2cHggcmdiYSgyMzcsMjcsNDYsMC41KSc7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gbW91c2VvdmVyKGxhYmVsLCBmZWF0dXJlTGF5ZXIpIHtcbiAgICBpZiAoZmVhdHVyZUxheWVyICE9PSBmZWF0dXJlU2V0LnNlbGVjdGVkRmVhdHVyZUxheWVyKSB7XG5cbiAgICAgIGdvbGRlbkxhYmVsKGxhYmVsKTtcblxuICAgICAgZmVhdHVyZUxheWVyLnNldFN0eWxlKHtcbiAgICAgICAgY29sb3I6ICcjRURCMjI5JyAgLy8gZ29sZFxuICAgICAgfSk7XG4gICAgICBmZWF0dXJlTGF5ZXIuYnJpbmdUb0Zyb250KCk7XG4gICAgfVxuICB9XG5cbiAgbGFiZWwub24oJ21vdXNlb3V0JywgZnVuY3Rpb24oZSkge1xuICAgIG1vdXNlb3V0KHRoaXMsIHRoaXMuZmVhdHVyZUxheWVyKTtcbiAgfSk7XG5cbiAgZmVhdHVyZUxheWVyLm9uKCdtb3VzZW91dCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgbW91c2VvdXQodGhpcy5sYWJlbCwgdGhpcyk7XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIG1vdXNlb3V0KGxhYmVsLCBmZWF0dXJlTGF5ZXIpIHtcbiAgICBpZiAoZmVhdHVyZUxheWVyICE9PSBmZWF0dXJlU2V0LnNlbGVjdGVkRmVhdHVyZUxheWVyKSB7XG5cbiAgICAgIHdoaXRlbkxhYmVsKGxhYmVsKTtcblxuICAgICAgZmVhdHVyZUxheWVyLnNldFN0eWxlKHtcbiAgICAgICAgY29sb3I6IHByb3BlcnRpZXMuY29sb3IgfHwgJ3doaXRlJ1xuICAgICAgfSk7XG4gICAgICBpZiAoZmVhdHVyZVNldC5zZWxlY3RlZEZlYXR1cmVMYXllcikge1xuICAgICAgICBmZWF0dXJlU2V0LnNlbGVjdGVkRmVhdHVyZUxheWVyLmJyaW5nVG9Gcm9udCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZmVhdHVyZUxheWVyLmJyaW5nVG9Gcm9udCgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGxhYmVsLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgY2xpY2sodGhpcywgdGhpcy5mZWF0dXJlTGF5ZXIpO1xuICB9KTtcblxuICBmZWF0dXJlTGF5ZXIub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICBjbGljayh0aGlzLmxhYmVsLCB0aGlzKTtcbiAgfSk7XG5cbiAgZnVuY3Rpb24gY2xpY2sobGFiZWwsIGZlYXR1cmVMYXllcikge1xuICAgIC8vIFRVUk4gT0ZGXG4gICAgaWYgKGZlYXR1cmVMYXllciA9PT0gZmVhdHVyZVNldC5zZWxlY3RlZEZlYXR1cmVMYXllcikge1xuXG4gICAgICB3aGl0ZW5MYWJlbChsYWJlbCk7XG5cbiAgICAgIGZlYXR1cmVMYXllci5zZXRTdHlsZSh7XG4gICAgICAgIGNvbG9yOiBwcm9wZXJ0aWVzLmNvbG9yIHx8ICd3aGl0ZSdcbiAgICAgIH0pO1xuICAgICAgZmVhdHVyZUxheWVyLmJyaW5nVG9Gcm9udCgpO1xuICAgICAgZmVhdHVyZVNldC5zZWxlY3RlZEZlYXR1cmVMYXllciA9IG51bGw7XG4gICAgICBpZiAocHJvcGVydGllcyAmJiBwcm9wZXJ0aWVzLm9uRGVzZWxlY3QgJiYgdHlwZW9mIHByb3BlcnRpZXMub25EZXNlbGVjdCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBwcm9wZXJ0aWVzLm9uRGVzZWxlY3QoZmVhdHVyZUxheWVyKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBUVVJOIE9OXG4gICAgZWxzZSB7XG4gICAgICBpZiAoZmVhdHVyZVNldC5zZWxlY3RlZEZlYXR1cmVMYXllcikge1xuICAgICAgICB3aGl0ZW5MYWJlbCh7X2ljb246IGZlYXR1cmVTZXQuc2VsZWN0ZWRJY29ufSk7XG4gICAgICAgIGZlYXR1cmVTZXQuc2VsZWN0ZWRGZWF0dXJlTGF5ZXIuc2V0U3R5bGUoe1xuICAgICAgICAgIGNvbG9yOiBwcm9wZXJ0aWVzLmNvbG9yIHx8ICd3aGl0ZSdcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJlZGRlbkxhYmVsKGxhYmVsKTtcblxuICAgICAgLy8gcmVkIGNyb3NzIHJlZCAjZWQxYjJlXG4gICAgICBmZWF0dXJlTGF5ZXIuc2V0U3R5bGUoe1xuICAgICAgICBjb2xvcjogJyNkOTUzNGYnIC8vIHJlZFxuICAgICAgfSk7XG4gICAgICBmZWF0dXJlTGF5ZXIuYnJpbmdUb0Zyb250KCk7XG4gICAgICBmZWF0dXJlU2V0LnNlbGVjdGVkRmVhdHVyZUxheWVyID0gZmVhdHVyZUxheWVyO1xuICAgICAgZmVhdHVyZVNldC5zZWxlY3RlZEljb24gPSBsYWJlbC5faWNvbjtcbiAgICAgIGlmIChwcm9wZXJ0aWVzICYmIHByb3BlcnRpZXMub25TZWxlY3QgJiYgdHlwZW9mIHByb3BlcnRpZXMub25TZWxlY3QgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcHJvcGVydGllcy5vblNlbGVjdChmZWF0dXJlTGF5ZXIpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBGaXhlcyB0aGUgZG91YmxlIGxhYmVsIGJ1Zy5cbiAgICovXG4gIGZlYXR1cmVMYXllci5nZW9qc29uTGF5ZXIuYWRkTGF5ZXIobGFiZWwpO1xuXG4gIC8qKlxuICAgKiBJZGVhbGx5IHdlIHdhbnQgdG8gYmUgYWRkaW5nIGxhYmVscyB0byB0aGUgYWN0dWFsIGxheWVyIHRoZXkgYXJlIG9uXG4gICAqIHJhdGhlciB0aGFuIHRoZSBwYXJlbnQgR2VvSlNPTiBsYXllci5cbiAgICovXG4vLyAgICBpZiAoIWZlYXR1cmVMYXllci5hZGRMYXllcikge1xuLy8gICAgICBmZWF0dXJlTGF5ZXIuZ2VvanNvbkxheWVyLmFkZExheWVyKGxhYmVsKTtcbi8vICAgIH0gZWxzZSB7XG4vLyAgICAgIGZlYXR1cmVMYXllci5hZGRMYXllcihsYWJlbCk7XG4vLyAgICB9XG5cbiAgZmVhdHVyZWxhYmVsLmxhYmVsc1tmZWF0dXJlTGF5ZXIuZmVhdHVyZS5wcm9wZXJ0aWVzLmd1aWRdID0gbGFiZWw7XG59XG5cblxuZnVuY3Rpb24gdXBkYXRlTGFiZWwoZmVhdHVyZUxheWVyLCBmZWF0dXJlU2V0KSB7XG4gIGlmICggISBmZWF0dXJlTGF5ZXIubGFiZWwgKSB7XG4gICAgY3JlYXRlTGFiZWwoZmVhdHVyZUxheWVyLCBmZWF0dXJlU2V0KTtcbiAgfSBlbHNlIHtcbiAgICBmZWF0dXJlTGF5ZXIubGFiZWwudXBkYXRlKGZlYXR1cmVMYXllci5sYWJlbENlbnRlclBvaW50KTtcbiAgfVxufVxuXG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZUNlbnRlcihwYXJ0cykge1xuXG4gIHZhciBwYXJ0ID0gZmluZExhcmdlc3RQYXJ0KHBhcnRzKTtcbiAgdmFyIGNlbnRlciA9IGNlbnRyb2lkKHBhcnQpO1xuXG4gIHJldHVybiBjZW50ZXIucm91bmQoKTtcbn1cblxuXG4vLyAgaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9DZW50cm9pZCNDZW50cm9pZF9vZl9wb2x5Z29uXG5cbmZ1bmN0aW9uIGFyZWEocGFydEFycikge1xuICB2YXIgYXJlYSA9IDA7XG4gIHZhciBsZW4gPSBwYXJ0QXJyLmxlbmd0aDtcbiAgZm9yICh2YXIgaSA9IDAsIGogPSBsZW4gLSAxOyBpIDwgbGVuOyBqPWksIGkrKykge1xuICAgIHZhciBwMSA9IHBhcnRBcnJbal07XG4gICAgdmFyIHAyID0gcGFydEFycltpXTtcblxuICAgIGFyZWEgKz0gcDEueCAqIHAyLnkgLSBwMi54ICogcDEueTtcbiAgfVxuXG4gIHJldHVybiBhcmVhIC8gMjtcbn1cblxuLypcbiAgICBOSCBUT0RPOiBXZSBhcmUgaW5kZWVkIGdldHRpbmcgdGhlIGNlbnRyb2lkLCBidXQgaWRlYWxseSB3ZVxuICAgIHdhbnQgdG8gY2hlY2sgaWYgdGhlIGNlbnRyb2lkIGlzIGFjdHVhbGx5IHdpdGhpbiB0aGUgcG9seWdvblxuICAgIGZvciB0aGUgcG9seWdvbnMgdGhhdCBiZW5kIGxpa2UgYSBib29tYXJhbmcuIElmIGl0IGlzIG91dHNpZGUsXG4gICAgd2UgbmVlZCB0byBudWRnZSBpdCBvdmVyIHVudGlsIGl0IGlzIGluc2lkZS4uLlxuICovXG5mdW5jdGlvbiBjZW50cm9pZChwYXJ0QXJyKSB7XG4gIHZhciBsZW4gPSBwYXJ0QXJyLmxlbmd0aDtcbiAgdmFyIHggPSAwO1xuICB2YXIgeSA9IDA7XG4gIGZvciAodmFyIGkgPSAwLCBqID0gbGVuIC0gMTsgaSA8IGxlbjsgaj1pLCBpKyspIHtcbiAgICB2YXIgcDEgPSBwYXJ0QXJyW2pdO1xuICAgIHZhciBwMiA9IHBhcnRBcnJbaV07XG4gICAgdmFyIGYgPSBwMS54ICogcDIueSAtIHAyLnggKiBwMS55O1xuICAgIHggKz0gKHAxLnggKyBwMi54KSAqIGY7XG4gICAgeSArPSAocDEueSArIHAyLnkpICogZjtcbiAgfVxuICBmID0gYXJlYShwYXJ0QXJyKSAqIDY7XG4gIHJldHVybiBMLnBvaW50KHgvZiwgeS9mKTtcblxufVxuXG5cbmZ1bmN0aW9uIGZpbmRMYXJnZXN0TGF5ZXIobGF5ZXJzKSB7XG4gIHZhciBsYXJnZXN0TGF5ZXIgPSBudWxsO1xuICB2YXIgbWF4QXJlYSA9IDA7XG5cbiAgZm9yICh2YXIgaWQgaW4gbGF5ZXJzKSB7XG4gICAgdmFyIGwgPSBsYXllcnNbaWRdO1xuICAgIHZhciBwYXJ0cyA9IGwuX3BhcnRzO1xuICAgIHZhciBhID0gMDtcbiAgICBpZiAoIXBhcnRzKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHBhcnRzLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICBhICs9IGFyZWEocGFydHNbaV0pO1xuICAgIH1cbiAgICBpZiAoYSA+IG1heEFyZWEpIHtcbiAgICAgIG1heEFyZWEgPSBhO1xuICAgICAgbGFyZ2VzdExheWVyID0gbDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbGFyZ2VzdExheWVyO1xufVxuXG5mdW5jdGlvbiBmaW5kTGFyZ2VzdFBhcnQocGFydHMpIHtcbiAgdmFyIGxhcmdlc3RQYXJ0ID0gcGFydHNbMF07XG4gIHZhciBtYXhBcmVhID0gMDtcblxuICBmb3IgKHZhciBpID0gMCwgbGVuID0gcGFydHMubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgICB2YXIgcCA9IHBhcnRzW2ldO1xuICAgIHZhciBhID0gYXJlYShwKTtcbiAgICBpZiAoIGEgPiBtYXhBcmVhICkge1xuICAgICAgbGFyZ2VzdFBhcnQgPSBwO1xuICAgICAgbWF4QXJlYSA9IGE7XG4gICAgfVxuICB9XG4gIHJldHVybiBsYXJnZXN0UGFydDtcbn1cbiIsIi8qKlxuICogQ3JlYXRlZCBieSBOaWNob2xhcyBIYWxsYWhhbiA8bmhhbGxhaGFuQHNwYXRpYWxkZXYuY29tPlxuICogICAgICAgb24gNC83LzE0LlxuICpcbiAqICAgICAgIEJhc2VkIG9uIEwuTWFya2VyIGZyb20gdjAuNy4yXG4gKi9cblxuXG5tb2R1bGUuZXhwb3J0cyA9IEwuTGFiZWwgPSBMLkNsYXNzLmV4dGVuZCh7XG5cbiAgaW5jbHVkZXM6IEwuTWl4aW4uRXZlbnRzLFxuXG4gIG9wdGlvbnM6IHtcbiAgICBpY29uOiBuZXcgTC5JY29uLkRlZmF1bHQoKSxcbiAgICB0aXRsZTogJycsXG4gICAgYWx0OiAnJyxcbiAgICBjbGlja2FibGU6IHRydWUsXG4gICAgZHJhZ2dhYmxlOiBmYWxzZSxcbiAgICBrZXlib2FyZDogdHJ1ZSxcbiAgICB6SW5kZXhPZmZzZXQ6IDAsXG4gICAgb3BhY2l0eTogMSxcbiAgICByaXNlT25Ib3ZlcjogZmFsc2UsXG4gICAgcmlzZU9mZnNldDogMjUwXG4gIH0sXG5cbiAgaW5pdGlhbGl6ZTogZnVuY3Rpb24gKHBvaW50LCBmZWF0dXJlTGF5ZXIsIG9wdGlvbnMpIHtcbiAgICBMLnNldE9wdGlvbnModGhpcywgb3B0aW9ucyk7XG4vLyAgICB0aGlzLl9sYXRsbmcgPSBMLmxhdExuZyhsYXRsbmcpO1xuICAgIHRoaXMuX3BvaW50ID0gcG9pbnQ7XG4gICAgaWYgKGZlYXR1cmVMYXllcil7XG4gICAgICB0aGlzLmZlYXR1cmVMYXllciA9IGZlYXR1cmVMYXllcjtcbiAgICAgIGZlYXR1cmVMYXllci5sYWJlbCA9IHRoaXM7XG4gICAgfVxuICAgIHRoaXMuaXNMYWJlbCA9IHRydWU7XG4gIH0sXG5cbiAgb25BZGQ6IGZ1bmN0aW9uIChtYXApIHtcbiAgICB0aGlzLl9tYXAgPSBtYXA7XG5cbiAgICBtYXAub24oJ3ZpZXdyZXNldCcsIHRoaXMudXBkYXRlLCB0aGlzKTtcblxuICAgIHRoaXMuX2luaXRJY29uKCk7XG4gICAgdGhpcy51cGRhdGUoKTtcbiAgICB0aGlzLmZpcmUoJ2FkZCcpO1xuXG4gICAgaWYgKG1hcC5vcHRpb25zLnpvb21BbmltYXRpb24gJiYgbWFwLm9wdGlvbnMubWFya2VyWm9vbUFuaW1hdGlvbikge1xuICAgICAgbWFwLm9uKCd6b29tYW5pbScsIHRoaXMuX2FuaW1hdGVab29tLCB0aGlzKTtcbiAgICB9XG4gIH0sXG5cbiAgYWRkVG86IGZ1bmN0aW9uIChtYXApIHtcbiAgICBtYXAuYWRkTGF5ZXIodGhpcyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG5cbiAgb25SZW1vdmU6IGZ1bmN0aW9uIChtYXApIHtcbiAgICBpZiAodGhpcy5kcmFnZ2luZykge1xuICAgICAgdGhpcy5kcmFnZ2luZy5kaXNhYmxlKCk7XG4gICAgfVxuXG4gICAgdGhpcy5fcmVtb3ZlSWNvbigpO1xuICAgIHRoaXMuX3JlbW92ZVNoYWRvdygpO1xuXG4gICAgdGhpcy5maXJlKCdyZW1vdmUnKTtcblxuICAgIG1hcC5vZmYoe1xuICAgICAgJ3ZpZXdyZXNldCc6IHRoaXMudXBkYXRlLFxuICAgICAgJ3pvb21hbmltJzogdGhpcy5fYW5pbWF0ZVpvb21cbiAgICB9LCB0aGlzKTtcblxuICAgIHRoaXMuX21hcCA9IG51bGw7XG4gIH0sXG5cbi8vICBnZXRMYXRMbmc6IGZ1bmN0aW9uICgpIHtcbi8vICAgIHJldHVybiB0aGlzLl9sYXRsbmc7XG4vLyAgfSxcbi8vXG4vLyAgc2V0TGF0TG5nOiBmdW5jdGlvbiAobGF0bG5nKSB7XG4vLyAgICB0aGlzLl9sYXRsbmcgPSBMLmxhdExuZyhsYXRsbmcpO1xuLy9cbi8vICAgIHRoaXMudXBkYXRlKCk7XG4vL1xuLy8gICAgcmV0dXJuIHRoaXMuZmlyZSgnbW92ZScsIHsgbGF0bG5nOiB0aGlzLl9sYXRsbmcgfSk7XG4vLyAgfSxcblxuXG5cbiAgc2V0WkluZGV4T2Zmc2V0OiBmdW5jdGlvbiAob2Zmc2V0KSB7XG4gICAgdGhpcy5vcHRpb25zLnpJbmRleE9mZnNldCA9IG9mZnNldDtcbiAgICB0aGlzLnVwZGF0ZSgpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG5cbiAgc2V0SWNvbjogZnVuY3Rpb24gKGljb24pIHtcblxuICAgIHRoaXMub3B0aW9ucy5pY29uID0gaWNvbjtcblxuICAgIGlmICh0aGlzLl9tYXApIHtcbiAgICAgIHRoaXMuX2luaXRJY29uKCk7XG4gICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9wb3B1cCkge1xuICAgICAgdGhpcy5iaW5kUG9wdXAodGhpcy5fcG9wdXApO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9LFxuXG4gIHVwZGF0ZTogZnVuY3Rpb24gKHBvaW50KSB7XG4gICAgaWYgKHBvaW50KSB7XG4gICAgICB0aGlzLl9wb2ludCA9IHBvaW50O1xuICAgIH1cbiAgICBpZiAodGhpcy5faWNvbikge1xuLy8gICAgICB2YXIgcG9zID0gdGhpcy5fbWFwLmxhdExuZ1RvTGF5ZXJQb2ludCh0aGlzLl9sYXRsbmcpLnJvdW5kKCk7XG4gICAgICB0aGlzLl9zZXRQb3ModGhpcy5fcG9pbnQpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9LFxuXG4gIF9pbml0SWNvbjogZnVuY3Rpb24gKCkge1xuICAgIHZhciBvcHRpb25zID0gdGhpcy5vcHRpb25zLFxuICAgICAgbWFwID0gdGhpcy5fbWFwLFxuICAgICAgYW5pbWF0aW9uID0gKG1hcC5vcHRpb25zLnpvb21BbmltYXRpb24gJiYgbWFwLm9wdGlvbnMubWFya2VyWm9vbUFuaW1hdGlvbiksXG4gICAgICBjbGFzc1RvQWRkID0gYW5pbWF0aW9uID8gJ2xlYWZsZXQtem9vbS1hbmltYXRlZCcgOiAnbGVhZmxldC16b29tLWhpZGUnO1xuXG4gICAgdmFyIGljb24gPSBvcHRpb25zLmljb24uY3JlYXRlSWNvbih0aGlzLl9pY29uKSxcbiAgICAgIGFkZEljb24gPSBmYWxzZTtcblxuICAgIC8vIGlmIHdlJ3JlIG5vdCByZXVzaW5nIHRoZSBpY29uLCByZW1vdmUgdGhlIG9sZCBvbmUgYW5kIGluaXQgbmV3IG9uZVxuICAgIGlmIChpY29uICE9PSB0aGlzLl9pY29uKSB7XG4gICAgICBpZiAodGhpcy5faWNvbikge1xuICAgICAgICB0aGlzLl9yZW1vdmVJY29uKCk7XG4gICAgICB9XG4gICAgICBhZGRJY29uID0gdHJ1ZTtcblxuICAgICAgaWYgKG9wdGlvbnMudGl0bGUpIHtcbiAgICAgICAgaWNvbi50aXRsZSA9IG9wdGlvbnMudGl0bGU7XG4gICAgICB9XG5cbiAgICAgIGlmIChvcHRpb25zLmFsdCkge1xuICAgICAgICBpY29uLmFsdCA9IG9wdGlvbnMuYWx0O1xuICAgICAgfVxuICAgIH1cblxuICAgIEwuRG9tVXRpbC5hZGRDbGFzcyhpY29uLCBjbGFzc1RvQWRkKTtcblxuICAgIGlmIChvcHRpb25zLmtleWJvYXJkKSB7XG4gICAgICBpY29uLnRhYkluZGV4ID0gJzAnO1xuICAgIH1cblxuICAgIHRoaXMuX2ljb24gPSBpY29uO1xuXG4gICAgdGhpcy5faW5pdEludGVyYWN0aW9uKCk7XG5cbiAgICBpZiAob3B0aW9ucy5yaXNlT25Ib3Zlcikge1xuICAgICAgTC5Eb21FdmVudFxuICAgICAgICAub24oaWNvbiwgJ21vdXNlb3ZlcicsIHRoaXMuX2JyaW5nVG9Gcm9udCwgdGhpcylcbiAgICAgICAgLm9uKGljb24sICdtb3VzZW91dCcsIHRoaXMuX3Jlc2V0WkluZGV4LCB0aGlzKTtcbiAgICB9XG5cbiAgICB2YXIgbmV3U2hhZG93ID0gb3B0aW9ucy5pY29uLmNyZWF0ZVNoYWRvdyh0aGlzLl9zaGFkb3cpLFxuICAgICAgYWRkU2hhZG93ID0gZmFsc2U7XG5cbiAgICBpZiAobmV3U2hhZG93ICE9PSB0aGlzLl9zaGFkb3cpIHtcbiAgICAgIHRoaXMuX3JlbW92ZVNoYWRvdygpO1xuICAgICAgYWRkU2hhZG93ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAobmV3U2hhZG93KSB7XG4gICAgICBMLkRvbVV0aWwuYWRkQ2xhc3MobmV3U2hhZG93LCBjbGFzc1RvQWRkKTtcbiAgICB9XG4gICAgdGhpcy5fc2hhZG93ID0gbmV3U2hhZG93O1xuXG5cbiAgICBpZiAob3B0aW9ucy5vcGFjaXR5IDwgMSkge1xuICAgICAgdGhpcy5fdXBkYXRlT3BhY2l0eSgpO1xuICAgIH1cblxuXG4gICAgdmFyIHBhbmVzID0gdGhpcy5fbWFwLl9wYW5lcztcblxuICAgIGlmIChhZGRJY29uKSB7XG4gICAgICBwYW5lcy5tYXJrZXJQYW5lLmFwcGVuZENoaWxkKHRoaXMuX2ljb24pO1xuICAgIH1cblxuICAgIGlmIChuZXdTaGFkb3cgJiYgYWRkU2hhZG93KSB7XG4gICAgICBwYW5lcy5zaGFkb3dQYW5lLmFwcGVuZENoaWxkKHRoaXMuX3NoYWRvdyk7XG4gICAgfVxuICB9LFxuXG4gIF9yZW1vdmVJY29uOiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5yaXNlT25Ib3Zlcikge1xuICAgICAgTC5Eb21FdmVudFxuICAgICAgICAub2ZmKHRoaXMuX2ljb24sICdtb3VzZW92ZXInLCB0aGlzLl9icmluZ1RvRnJvbnQpXG4gICAgICAgIC5vZmYodGhpcy5faWNvbiwgJ21vdXNlb3V0JywgdGhpcy5fcmVzZXRaSW5kZXgpO1xuICAgIH1cblxuICAgIHRoaXMuX21hcC5fcGFuZXMubWFya2VyUGFuZS5yZW1vdmVDaGlsZCh0aGlzLl9pY29uKTtcblxuICAgIHRoaXMuX2ljb24gPSBudWxsO1xuICB9LFxuXG4gIF9yZW1vdmVTaGFkb3c6IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5fc2hhZG93KSB7XG4gICAgICB0aGlzLl9tYXAuX3BhbmVzLnNoYWRvd1BhbmUucmVtb3ZlQ2hpbGQodGhpcy5fc2hhZG93KTtcbiAgICB9XG4gICAgdGhpcy5fc2hhZG93ID0gbnVsbDtcbiAgfSxcblxuICBfc2V0UG9zOiBmdW5jdGlvbiAocG9zKSB7XG4gICAgTC5Eb21VdGlsLnNldFBvc2l0aW9uKHRoaXMuX2ljb24sIHBvcyk7XG5cbiAgICBpZiAodGhpcy5fc2hhZG93KSB7XG4gICAgICBMLkRvbVV0aWwuc2V0UG9zaXRpb24odGhpcy5fc2hhZG93LCBwb3MpO1xuICAgIH1cblxuICAgIHRoaXMuX3pJbmRleCA9IHBvcy55ICsgdGhpcy5vcHRpb25zLnpJbmRleE9mZnNldDtcblxuICAgIHRoaXMuX3Jlc2V0WkluZGV4KCk7XG4gIH0sXG5cbiAgX3VwZGF0ZVpJbmRleDogZnVuY3Rpb24gKG9mZnNldCkge1xuICAgIHRoaXMuX2ljb24uc3R5bGUuekluZGV4ID0gdGhpcy5fekluZGV4ICsgb2Zmc2V0O1xuICB9LFxuXG4gIF9hbmltYXRlWm9vbTogZnVuY3Rpb24gKG9wdCkge1xuLy8gICAgdmFyIHBvcyA9IHRoaXMuX21hcC5fbGF0TG5nVG9OZXdMYXllclBvaW50KHRoaXMuX2xhdGxuZywgb3B0Lnpvb20sIG9wdC5jZW50ZXIpLnJvdW5kKCk7XG4vL1xuLy8gICAgdGhpcy5fc2V0UG9zKHBvcyk7XG4gIH0sXG5cbiAgX2luaXRJbnRlcmFjdGlvbjogZnVuY3Rpb24gKCkge1xuXG4gICAgaWYgKCF0aGlzLm9wdGlvbnMuY2xpY2thYmxlKSB7IHJldHVybjsgfVxuXG4gICAgLy8gVE9ETyByZWZhY3RvciBpbnRvIHNvbWV0aGluZyBzaGFyZWQgd2l0aCBNYXAvUGF0aC9ldGMuIHRvIERSWSBpdCB1cFxuXG4gICAgdmFyIGljb24gPSB0aGlzLl9pY29uLFxuICAgICAgZXZlbnRzID0gWydkYmxjbGljaycsICdtb3VzZWRvd24nLCAnbW91c2VvdmVyJywgJ21vdXNlb3V0JywgJ2NvbnRleHRtZW51J107XG5cbiAgICBMLkRvbVV0aWwuYWRkQ2xhc3MoaWNvbiwgJ2xlYWZsZXQtY2xpY2thYmxlJyk7XG4gICAgTC5Eb21FdmVudC5vbihpY29uLCAnY2xpY2snLCB0aGlzLl9vbk1vdXNlQ2xpY2ssIHRoaXMpO1xuICAgIEwuRG9tRXZlbnQub24oaWNvbiwgJ2tleXByZXNzJywgdGhpcy5fb25LZXlQcmVzcywgdGhpcyk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGV2ZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgTC5Eb21FdmVudC5vbihpY29uLCBldmVudHNbaV0sIHRoaXMuX2ZpcmVNb3VzZUV2ZW50LCB0aGlzKTtcbiAgICB9XG5cbiAgICBpZiAoTC5IYW5kbGVyLk1hcmtlckRyYWcpIHtcbiAgICAgIHRoaXMuZHJhZ2dpbmcgPSBuZXcgTC5IYW5kbGVyLk1hcmtlckRyYWcodGhpcyk7XG5cbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuZHJhZ2dhYmxlKSB7XG4gICAgICAgIHRoaXMuZHJhZ2dpbmcuZW5hYmxlKCk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIF9vbk1vdXNlQ2xpY2s6IGZ1bmN0aW9uIChlKSB7XG4gICAgdmFyIHdhc0RyYWdnZWQgPSB0aGlzLmRyYWdnaW5nICYmIHRoaXMuZHJhZ2dpbmcubW92ZWQoKTtcblxuICAgIGlmICh0aGlzLmhhc0V2ZW50TGlzdGVuZXJzKGUudHlwZSkgfHwgd2FzRHJhZ2dlZCkge1xuICAgICAgTC5Eb21FdmVudC5zdG9wUHJvcGFnYXRpb24oZSk7XG4gICAgfVxuXG4gICAgaWYgKHdhc0RyYWdnZWQpIHsgcmV0dXJuOyB9XG5cbiAgICBpZiAoKCF0aGlzLmRyYWdnaW5nIHx8ICF0aGlzLmRyYWdnaW5nLl9lbmFibGVkKSAmJiB0aGlzLl9tYXAuZHJhZ2dpbmcgJiYgdGhpcy5fbWFwLmRyYWdnaW5nLm1vdmVkKCkpIHsgcmV0dXJuOyB9XG5cbiAgICB0aGlzLmZpcmUoZS50eXBlLCB7XG4gICAgICBvcmlnaW5hbEV2ZW50OiBlLFxuLy8gICAgICBsYXRsbmc6IHRoaXMuX2xhdGxuZ1xuICAgICAgcG9pbnQ6IHRoaXMuX3BvaW50XG4gICAgfSk7XG4gIH0sXG5cbiAgX29uS2V5UHJlc3M6IGZ1bmN0aW9uIChlKSB7XG4gICAgaWYgKGUua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgIHRoaXMuZmlyZSgnY2xpY2snLCB7XG4gICAgICAgIG9yaWdpbmFsRXZlbnQ6IGUsXG4vLyAgICAgICAgbGF0bG5nOiB0aGlzLl9sYXRsbmdcbiAgICAgICAgcG9pbnQ6IHRoaXMuX3BvaW50XG4gICAgICB9KTtcbiAgICB9XG4gIH0sXG5cbiAgX2ZpcmVNb3VzZUV2ZW50OiBmdW5jdGlvbiAoZSkge1xuXG4gICAgdGhpcy5maXJlKGUudHlwZSwge1xuICAgICAgb3JpZ2luYWxFdmVudDogZSxcbi8vICAgICAgbGF0bG5nOiB0aGlzLl9sYXRsbmdcbiAgICAgIHBvaW50OiB0aGlzLl9wb2ludFxuICAgIH0pO1xuXG4gICAgLy8gVE9ETyBwcm9wZXIgY3VzdG9tIGV2ZW50IHByb3BhZ2F0aW9uXG4gICAgLy8gdGhpcyBsaW5lIHdpbGwgYWx3YXlzIGJlIGNhbGxlZCBpZiBtYXJrZXIgaXMgaW4gYSBGZWF0dXJlR3JvdXBcbiAgICBpZiAoZS50eXBlID09PSAnY29udGV4dG1lbnUnICYmIHRoaXMuaGFzRXZlbnRMaXN0ZW5lcnMoZS50eXBlKSkge1xuICAgICAgTC5Eb21FdmVudC5wcmV2ZW50RGVmYXVsdChlKTtcbiAgICB9XG4gICAgaWYgKGUudHlwZSAhPT0gJ21vdXNlZG93bicpIHtcbiAgICAgIEwuRG9tRXZlbnQuc3RvcFByb3BhZ2F0aW9uKGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBMLkRvbUV2ZW50LnByZXZlbnREZWZhdWx0KGUpO1xuICAgIH1cbiAgfSxcblxuICBzZXRPcGFjaXR5OiBmdW5jdGlvbiAob3BhY2l0eSkge1xuICAgIHRoaXMub3B0aW9ucy5vcGFjaXR5ID0gb3BhY2l0eTtcbiAgICBpZiAodGhpcy5fbWFwKSB7XG4gICAgICB0aGlzLl91cGRhdGVPcGFjaXR5KCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG5cbiAgX3VwZGF0ZU9wYWNpdHk6IGZ1bmN0aW9uICgpIHtcbiAgICBMLkRvbVV0aWwuc2V0T3BhY2l0eSh0aGlzLl9pY29uLCB0aGlzLm9wdGlvbnMub3BhY2l0eSk7XG4gICAgaWYgKHRoaXMuX3NoYWRvdykge1xuICAgICAgTC5Eb21VdGlsLnNldE9wYWNpdHkodGhpcy5fc2hhZG93LCB0aGlzLm9wdGlvbnMub3BhY2l0eSk7XG4gICAgfVxuICB9LFxuXG4gIF9icmluZ1RvRnJvbnQ6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLl91cGRhdGVaSW5kZXgodGhpcy5vcHRpb25zLnJpc2VPZmZzZXQpO1xuICB9LFxuXG4gIF9yZXNldFpJbmRleDogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuX3VwZGF0ZVpJbmRleCgwKTtcbiAgfVxufSk7XG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgTmljaG9sYXMgSGFsbGFoYW4gPG5oYWxsYWhhbkBzcGF0aWFsZGV2LmNvbT5cbiAqICAgICAgIG9uIDQvNy8xNC5cbiAqL1xuXG52YXIgZmVhdHVyZVNldHMgPSBbXTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGZlYXR1cmVTZXRzOiBmZWF0dXJlU2V0cyxcbiAgcGF0aFVwZGF0ZWQ6IGZ1bmN0aW9uKGxlYWZsZXRJZCkge1xuICAgIGZvcih2YXIgaT0gMCwgbGVuPWZlYXR1cmVTZXRzLmxlbmd0aDsgaTxsZW47ICsraSkge1xuICAgICAgZmVhdHVyZVNldHNbaV0uX3BhdGhVcGRhdGVkKGxlYWZsZXRJZCk7XG4gICAgfVxuICB9LFxuICBsYWJlbHM6IHt9XG59O1xuXG5yZXF1aXJlKCcuL2xlYWZsZXQtcGF0Y2gnKTtcbiIsIi8qKlxuICogQ3JlYXRlZCBieSBOaWNob2xhcyBIYWxsYWhhbiA8bmhhbGxhaGFuQHNwYXRpYWxkZXYuY29tPlxuICogICAgICAgb24gNS83LzE0LlxuICpcbiAqIFRoaXMgaXMgYSBwYXRjaCB0aGF0IG92ZXJyaWRlcyB0aGUgTC5Qb2x5bGluZSBjbGFzcyBpbiBMZWFmbGV0IDAuNy4yXG4gKlxuICogQWxsIHRoaXMgaXMgZG9pbmcgaXMgYnJvYWRjYXN0aW5nIHRoZSBsZWFmbGV0IGlkIGZvciB0aGUgcGF0aCB0aGF0IGlzIGJlaW5nIHJlZHJhd24uXG4gKi9cblxudmFyIGZlYXR1cmVsYWJlbCA9IHJlcXVpcmUoJy4vZmVhdHVyZWxhYmVsJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG5cbiAgLyoqXG4gICAqIExlYWZsZXQgcHV0cyB0b28gbXVjaCBvZiBhIGJ1ZmZlciBhcm91bmQgdGhlIGFyZWEgaW4gd2hpY2ggYSBzaGFwZVxuICAgKiBpcyBjbGlwcGVkLCB0aHVzIHdlIHdlcmUgbm90IGdldHRpbmcgZ29vZCBjZW50cm9pZHMgZm9yIHNoYXBlcyB0aGF0XG4gICAqIHdlcmUgYmVpbmcgY2xpcHBlZC4gVGhpcyByZXNvbHZlcyB0aGF0LlxuICAgKi9cbiAgTC5QYXRoLkNMSVBfUEFERElORyA9IDAuMDI7XG5cbiAgTC5Qb2x5bGluZS5wcm90b3R5cGUuX3VwZGF0ZVBhdGggPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCF0aGlzLl9tYXApIHsgcmV0dXJuOyB9XG5cbiAgICB0aGlzLl9jbGlwUG9pbnRzKCk7XG4gICAgdGhpcy5fc2ltcGxpZnlQb2ludHMoKTtcblxuICAgIEwuUGF0aC5wcm90b3R5cGUuX3VwZGF0ZVBhdGguY2FsbCh0aGlzKTtcblxuICAgIC8qKlxuICAgICAqIE5vdGlmaWVzIGZlYXR1cmVsYWJlbCB0aGF0IGEgcGF0aCBmb3IgYSB2ZWN0b3IgaGFzIGJlZW4gcmVkcmF3biBhbmQgdGhlIGxhYmVsIHNob3VsZFxuICAgICAqIHBvc2l0aW9uZWQgb3IgcmVwb3NpdGlvbmVkLlxuICAgICAqL1xuICAgIGZlYXR1cmVsYWJlbC5wYXRoVXBkYXRlZCh0aGlzLl9sZWFmbGV0X2lkKTtcbiAgfTtcblxuICAvKipcbiAgICogRml4ZXMgYSBMZWFmbGV0IGJ1ZyB3aGVyZSBhIHJlZmVyZW5jZSB0byB0aGlzLl9tYXAgaXMgc29tZXRpbWVzIG1pc3NpbmcuXG4gICAqL1xuICBMLlBhdGgucHJvdG90eXBlLmJyaW5nVG9Gcm9udCA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIXRoaXMuX21hcCkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHZhciByb290ID0gdGhpcy5fbWFwLl9wYXRoUm9vdCxcbiAgICAgICAgcGF0aCA9IHRoaXMuX2NvbnRhaW5lcjtcblxuICAgIGlmIChwYXRoICYmIHJvb3QubGFzdENoaWxkICE9PSBwYXRoKSB7XG4gICAgICByb290LmFwcGVuZENoaWxkKHBhdGgpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxufSgpOyIsIi8qKlxuICogVGhpcyBpcyB0aGUgZW50cnkgcG9pbnQgb2YgdGhlIGFwcGxpY2F0aW9uLiBXZSBkZWNsYXJlIHRoZSBtYWluIG1vZHVsZSBoZXJlIGFuZCB0aGVuIGNvbmZpZ3VyZSB0aGUgbWFpbiByb3V0ZXJcbiAqIHRoYXQgY3JlYXRlcyBjb3JyZXNwb25kaW5nIHZpZXdzLiBUaGUgYXJyYXkgcGFyYW1ldGVyIGZvciBtb2R1bGUgZGVjbGFyZXMgdGhpcyBtb2R1bGUncyBkZXBlbmRlbmNpZXMuXG4gKi9cbnZhciBHZW9Bbmd1bGFyID0gYW5ndWxhci5tb2R1bGUoJ0dlb0FuZ3VsYXInLCBbJ2FuZ3VsYXJGaWxlVXBsb2FkJywgJ25nQ29va2llcycsICduZ1Jlc291cmNlJywgJ25nU2FuaXRpemUnLCAnbmdSb3V0ZScsICd1aS5yb3V0ZXInLCAnbmdBbmltYXRlJywgJ3VpLmJvb3RzdHJhcCcsICd1aS5zbGlkZXInXSk7XG5cbkdlb0FuZ3VsYXIucnVuKGZ1bmN0aW9uICgkcm9vdFNjb3BlLCAkc3RhdGUsICRzdGF0ZVBhcmFtcykge1xuXG4gIC8vIEl0J3MgdmVyeSBoYW5keSB0byBhZGQgcmVmZXJlbmNlcyB0byAkc3RhdGUgYW5kICRzdGF0ZVBhcmFtcyB0byB0aGUgJHJvb3RTY29wZVxuICAvLyBzbyB0aGF0IHlvdSBjYW4gYWNjZXNzIHRoZW0gZnJvbSBhbnkgc2NvcGUgd2l0aGluIHlvdXIgYXBwbGljYXRpb25zLkZvciBleGFtcGxlLFxuICAvLyA8bGkgdWktc3JlZi1hY3RpdmU9XCJhY3RpdmUgfVwiPiB3aWxsIHNldCB0aGUgPGxpPiAvLyB0byBhY3RpdmUgd2hlbmV2ZXJcbiAgLy8gJ2NvbnRhY3RzLmxpc3QnIG9yIG9uZSBvZiBpdHMgZGVjZW5kZW50cyBpcyBhY3RpdmUuXG4gICRyb290U2NvcGUuJHN0YXRlID0gJHN0YXRlO1xuICAkcm9vdFNjb3BlLiRzdGF0ZVBhcmFtcyA9ICRzdGF0ZVBhcmFtcztcblxuICBkZWJ1Zy4kc3RhdGUgPSAkc3RhdGU7XG4gIGRlYnVnLiRzdGF0ZVBhcmFtcyA9ICRzdGF0ZVBhcmFtcztcblxuICAkcm9vdFNjb3BlLmlzU3RhdGUgPSBmdW5jdGlvbiAoc3RhdGVOYW1lKSB7XG4gICAgcmV0dXJuICRzdGF0ZS4kY3VycmVudC5uYW1lID09PSBzdGF0ZU5hbWU7XG4gIH07XG5cbiAgJHJvb3RTY29wZS5pc1BhcmFtID0gZnVuY3Rpb24ocGFyYW1OYW1lKSB7XG4gICAgdmFyIGJvb2wgPSAkc3RhdGVQYXJhbXNbcGFyYW1OYW1lXTtcbiAgICBpZiAoIWJvb2wpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgJHJvb3RTY29wZS5pc05vdFBhcmFtID0gZnVuY3Rpb24ocGFyYW1OYW1lKSB7XG4gICAgdmFyIGJvb2wgPSAkc3RhdGVQYXJhbXNbcGFyYW1OYW1lXTtcbiAgICBpZiAoIWJvb2wpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgJHJvb3RTY29wZS50b2dnbGVQYXJhbSA9IGZ1bmN0aW9uKHBhcmFtTmFtZSkge1xuICAgIHZhciBib29sID0gJHN0YXRlUGFyYW1zW3BhcmFtTmFtZV07XG4gICAgaWYgKCFib29sKSB7XG4gICAgICAvLyBtdXRleCBsb2dpYyB0aGF0IG1ha2VzIG9ubHkgMSBwYW5lbCBvcGVuIGF0IGEgdGltZVxuICAgICAgZm9yICh2YXIgcGFyYW0gaW4gJHN0YXRlUGFyYW1zKSB7XG4gICAgICAgIGlmICgkc3RhdGVQYXJhbXNbcGFyYW1dID09PSAnb3BlbicpIHtcbiAgICAgICAgICAkc3RhdGVQYXJhbXNbcGFyYW1dID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgJHN0YXRlUGFyYW1zW3BhcmFtTmFtZV0gPSAnb3Blbic7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlbGV0ZSAkc3RhdGVQYXJhbXNbcGFyYW1OYW1lXTtcbiAgICB9XG4gICAgdmFyIHN0YXRlID0gJHN0YXRlLmN1cnJlbnQubmFtZSB8fCAnbWFpbic7XG4gICAgJHN0YXRlLmdvKHN0YXRlLCAkc3RhdGVQYXJhbXMpO1xuICB9O1xuXG4gICRyb290U2NvcGUuc2V0UGFyYW1XaXRoVmFsID0gZnVuY3Rpb24gKHBhcmFtTmFtZSwgdmFsKSB7XG4gICAgJHN0YXRlUGFyYW1zW3BhcmFtTmFtZV0gPSB2YWw7XG4gICAgdmFyIHN0YXRlID0gJHN0YXRlLmN1cnJlbnQubmFtZSB8fCAnbWFpbic7XG4gICAgJHN0YXRlLmdvKHN0YXRlLCAkc3RhdGVQYXJhbXMpO1xuICB9O1xuICBkZWJ1Zy4kcm9vdFNjb3BlID0gJHJvb3RTY29wZTtcblxuXG4gICRyb290U2NvcGUub3BlblBhcmFtID0gZnVuY3Rpb24ocGFyYW1OYW1lKSB7XG4gICAgdmFyIGJvb2wgPSAkc3RhdGVQYXJhbXNbcGFyYW1OYW1lXTtcbiAgICBpZiAoIWJvb2wpIHtcbiAgICAgIC8vIG11dGV4IGxvZ2ljIHRoYXQgbWFrZXMgb25seSAxIHBhbmVsIG9wZW4gYXQgYSB0aW1lXG4gICAgICBmb3IgKHZhciBwYXJhbSBpbiAkc3RhdGVQYXJhbXMpIHtcbiAgICAgICAgaWYgKCRzdGF0ZVBhcmFtc1twYXJhbV0gPT09ICdvcGVuJykge1xuICAgICAgICAgICRzdGF0ZVBhcmFtc1twYXJhbV0gPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAkc3RhdGVQYXJhbXNbcGFyYW1OYW1lXSA9ICdvcGVuJztcbiAgICAgIHZhciBzdGF0ZSA9ICRzdGF0ZS5jdXJyZW50Lm5hbWUgfHwgJ21haW4nO1xuICAgICAgJHN0YXRlLmdvKHN0YXRlLCAkc3RhdGVQYXJhbXMpO1xuICAgIH1cbiAgfTtcblxuICAkcm9vdFNjb3BlLmNsb3NlUGFyYW0gPSBmdW5jdGlvbihwYXJhbU5hbWUpIHtcbiAgICB2YXIgYm9vbCA9ICRzdGF0ZVBhcmFtc1twYXJhbU5hbWVdO1xuICAgIGlmIChib29sKSB7XG4gICAgICBkZWxldGUgJHN0YXRlUGFyYW1zW3BhcmFtTmFtZV07XG4gICAgICB2YXIgc3RhdGUgPSAkc3RhdGUuY3VycmVudC5uYW1lIHx8ICdtYWluJztcbiAgICAgICRzdGF0ZS5nbyhzdGF0ZSwgJHN0YXRlUGFyYW1zKTtcbiAgICB9XG4gIH07XG5cbiAgJHJvb3RTY29wZS5pc05vdFN0YXRlID0gZnVuY3Rpb24gKHN0YXRlTmFtZSkge1xuICAgIHJldHVybiAkc3RhdGUuJGN1cnJlbnQubmFtZSAhPT0gc3RhdGVOYW1lO1xuICB9O1xuXG4gIHdpbmRvdy4kc3RhdGUgPSAkc3RhdGU7XG4gIHdpbmRvdy4kc3RhdGVQYXJhbXMgPSAkc3RhdGVQYXJhbXM7XG5cbn0pO1xuXG5HZW9Bbmd1bGFyLmNvbmZpZyhmdW5jdGlvbiAoJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcikge1xuICAkdXJsUm91dGVyUHJvdmlkZXJcbiAgICAud2hlbignL2RlZmF1bHQnLCAnL21hcEAwLjEsMC4xLDIob3NtdHJhbnNwb3J0LGdhZG0wKSxkaXNhc3RlcicpXG4gICAgLndoZW4oJy9waGwnLCAnL21hcEAxMS43NTk4MTUsMTIxLjg5MzMxMSw2KHJlZGNyb3NzLHBobCksZGlzYXN0ZXInKVxuICAgIC5vdGhlcndpc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2RlZmF1bHRSb3V0ZScpIHx8ICcvbWFwQDEsMSwyKG9zbXRyYW5zcG9ydCxnYWRtMCksZGlzYXN0ZXInKTtcblxuICAkc3RhdGVQcm92aWRlclxuICAgIC5zdGF0ZSgnbWFpbicsIHtcbiAgICAgIHVybDogJy9tYXBAOmxhdCw6bG5nLDp6b29tKCpsYXllcnMpLDp0aGVtZT96b29tLWV4dGVudCZzdG9yaWVzJmxheWVycy1wYW5lbCZmaWx0ZXJzLXBhbmVsJmZpbHRlcnMmbGVnZW5kJmJhc2VtYXBzJmluZm8mdGl0bGUmZGV0YWlscy1wYW5lbCZzZWFyY2gtcGFuZWwmc2ZfaWQmbGV2ZWwmdGhlbWVsYWJlbHMmY2F0ZWdvcnkmbGVnZW5kLXBhbmVsJyxcbiAgICAgIHZpZXdzOiB7XG4gICAgICAgICdkZXRhaWxzJzoge1xuICAgICAgICAgIHRlbXBsYXRlOiAnICcsXG4gICAgICAgICAgY29udHJvbGxlcjogJ01haW5DdHJsJ1xuICAgICAgICB9LFxuICAgICAgICAndGhlbWUnOiB7XG4gICAgICAgICAgdGVtcGxhdGVVcmw6ICd2aWV3cy90aGVtZS5odG1sJyxcbiAgICAgICAgICBjb250cm9sbGVyOiAnVGhlbWVDdHJsJ1xuICAgICAgICB9LFxuICAgICAgICAnYmxldmVscyc6e1xuICAgICAgICAgIHRlbXBsYXRlVXJsOiAndmlld3MvYmxldmVscy5odG1sJyxcbiAgICAgICAgICBjb250cm9sbGVyOiAnTGF5ZXJzQ3RybCdcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gICAgLnN0YXRlKCd1cGxvYWQnLCB7XG4gICAgICB1cmw6ICcvbWFwQDpsYXQsOmxuZyw6em9vbSgqbGF5ZXJzKSw6dGhlbWUvdXBsb2FkP3pvb20tZXh0ZW50JnN0b3JpZXMmbGF5ZXJzLXBhbmVsJmZpbHRlcnMtcGFuZWwmZmlsdGVycyZsZWdlbmQmYmFzZW1hcHMmaW5mbyZ0aXRsZSZkZXRhaWxzLXBhbmVsJnNlYXJjaC1wYW5lbCZzZl9pZCZsZXZlbCZ0aGVtZWxhYmVscyZjYXRlZ29yeSZsZWdlbmQtcGFuZWwnLFxuICAgICAgdmlld3M6IHtcbiAgICAgICAgJ2RldGFpbHMnOiB7XG4gICAgICAgICAgdGVtcGxhdGU6ICcgJyxcbiAgICAgICAgICBjb250cm9sbGVyOiAnTWFpbkN0cmwnXG4gICAgICAgIH0sXG4gICAgICAgICd1cGxvYWQnOiB7XG4gICAgICAgICAgdGVtcGxhdGVVcmw6ICd2aWV3cy91cGxvYWQuaHRtbCcsXG4gICAgICAgICAgY29udHJvbGxlcjogJ1VwbG9hZEN0cmwnXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICAgIC5zdGF0ZSgnZXhwb3J0Jywge1xuICAgICAgdXJsOiAnL21hcEA6bGF0LDpsbmcsOnpvb20oKmxheWVycyksOnRoZW1lL2V4cG9ydD96b29tLWV4dGVudCZzdG9yaWVzJmxheWVycy1wYW5lbCZmaWx0ZXJzLXBhbmVsJmZpbHRlcnMmbGVnZW5kJmJhc2VtYXBzJmluZm8mdGl0bGUmZGV0YWlscy1wYW5lbCZzZWFyY2gtcGFuZWwmc2ZfaWQmbGV2ZWwmdGhlbWVsYWJlbHMmY2F0ZWdvcnkmbGVnZW5kLXBhbmVsJyxcbiAgICAgIHZpZXdzOiB7XG4gICAgICAgICdkZXRhaWxzJzoge1xuICAgICAgICAgIHRlbXBsYXRlOiAnICcsXG4gICAgICAgICAgY29udHJvbGxlcjogJ01haW5DdHJsJ1xuICAgICAgICB9LFxuICAgICAgICAnZXhwb3J0Jzoge1xuICAgICAgICAgIHRlbXBsYXRlVXJsOiAndmlld3MvZXhwb3J0Lmh0bWwnLFxuICAgICAgICAgIGNvbnRyb2xsZXI6ICdFeHBvcnRDdHJsJ1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbn0pO1xuXG5cbkdlb0FuZ3VsYXIuZGlyZWN0aXZlKCdzZWxlY3RPbkNsaWNrJywgZnVuY3Rpb24gKCkge1xuICByZXR1cm4ge1xuICAgIHJlc3RyaWN0OiAnQScsXG4gICAgbGluazogZnVuY3Rpb24gKHNjb3BlLCBlbGVtZW50LCBhdHRycykge1xuICAgICAgZWxlbWVudC5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0KCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG59KTtcblxuXG5hbmd1bGFyLm1vZHVsZSgnR2VvQW5ndWxhcicpLmRpcmVjdGl2ZSgnbXlTaG93JywgZnVuY3Rpb24oJGFuaW1hdGUpIHtcbiAgcmV0dXJuIHtcbiAgICBzY29wZToge1xuICAgICAgJ215U2hvdyc6ICc9JyxcbiAgICAgICdhZnRlclNob3cnOiAnJicsXG4gICAgICAnYWZ0ZXJIaWRlJzogJyYnXG4gICAgfSxcbiAgICBsaW5rOiBmdW5jdGlvbihzY29wZSwgZWxlbWVudCkge1xuICAgICAgc2NvcGUuJHdhdGNoKCdteVNob3cnLCBmdW5jdGlvbihzaG93LCBvbGRTaG93KSB7XG4gICAgICAgIGlmIChzaG93KSB7XG4gICAgICAgICAgJGFuaW1hdGUucmVtb3ZlQ2xhc3MoZWxlbWVudCwgJ25nLWhpZGUnLCBzY29wZS5hZnRlclNob3cpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghc2hvdykge1xuICAgICAgICAgICRhbmltYXRlLmFkZENsYXNzKGVsZW1lbnQsICduZy1oaWRlJywgc2NvcGUuYWZ0ZXJIaWRlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG59KTtcblxuXG5yZXF1aXJlKCcuL3NlcnZpY2VzL0xheWVyQ29uZmlnJyk7XG5yZXF1aXJlKCcuL3NlcnZpY2VzL1N0b3JpZXNDb25maWcnKTtcbnJlcXVpcmUoJy4vc2VydmljZXMvVmVjdG9yL1ZlY3RvclByb3ZpZGVyJyk7XG5yZXF1aXJlKCcuL3NlcnZpY2VzL0RvbnV0cycpO1xucmVxdWlyZSgnLi9jb250cm9sbGVycy9tYWluJyk7XG5yZXF1aXJlKCcuL2NvbnRyb2xsZXJzL21hcCcpO1xucmVxdWlyZSgnLi9jb250cm9sbGVycy9kZXRhaWxzJyk7XG5yZXF1aXJlKCcuL2NvbnRyb2xsZXJzL25hdmJhcicpO1xucmVxdWlyZSgnLi9jb250cm9sbGVycy9zaWRlLXZpZXcnKTtcbnJlcXVpcmUoJy4vY29udHJvbGxlcnMvc3RvcmllcycpO1xucmVxdWlyZSgnLi9jb250cm9sbGVycy9sYXllcnMnKTtcbnJlcXVpcmUoJy4vY29udHJvbGxlcnMvZmlsdGVycycpO1xucmVxdWlyZSgnLi9jb250cm9sbGVycy9sZWdlbmQnKTtcbnJlcXVpcmUoJy4vY29udHJvbGxlcnMvaW5mbycpO1xucmVxdWlyZSgnLi9jb250cm9sbGVycy9iYXNlbWFwcycpO1xucmVxdWlyZSgnLi9jb250cm9sbGVycy9icmVhZGNydW1icycpO1xucmVxdWlyZSgnLi9jb250cm9sbGVycy96b29tLWV4dGVudCcpO1xucmVxdWlyZSgnLi9jb250cm9sbGVycy90aGVtZScpO1xucmVxdWlyZSgnLi9jb250cm9sbGVycy91cGxvYWQnKTtcbnJlcXVpcmUoJy4vY29udHJvbGxlcnMvc2VhcmNoJyk7XG5yZXF1aXJlKCcuL2NvbnRyb2xsZXJzL2V4cG9ydCcpO1xucmVxdWlyZSgnLi4vbGliL0xlYWZsZXQuTWFwYm94VmVjdG9yVGlsZS9zcmMvTVZUU291cmNlLmpzJyk7XG5cbiIsIi8qKlxuICogQ3JlYXRlZCBieSBSeWFuIFdoaXRsZXkgPHJ3aGl0bGV5QHNwYXRpYWxkZXYuY29tPlxuICogICAgICAgb24gMy8yOC8xNC5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdHZW9Bbmd1bGFyJykuY29udHJvbGxlcignQmFzZW1hcHNDdHJsJywgZnVuY3Rpb24oJHNjb3BlLCAkc3RhdGUsICRzdGF0ZVBhcmFtcywgTGF5ZXJDb25maWcpIHtcbiAgJHNjb3BlLmJhc2VtYXBzID0gTGF5ZXJDb25maWcuYmFzZW1hcHM7XG5cbiAgJHNjb3BlLm5hbWUgPSBmdW5jdGlvbiAoYWxpYXMpIHtcbiAgICByZXR1cm4gTGF5ZXJDb25maWdbYWxpYXNdLm5hbWUgfHwgYWxpYXM7XG4gIH07XG5cbiAgJHNjb3BlLmdldExheWVycyA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICghICRzdGF0ZVBhcmFtcyB8fCAhJHN0YXRlUGFyYW1zLmxheWVycykge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgICB2YXIgbGF5ZXJzID0gJHN0YXRlUGFyYW1zLmxheWVycy5zcGxpdCgnLCcpO1xuICAgIHJldHVybiBsYXllcnM7XG4gIH07XG5cbiAgJHNjb3BlLmN1cnJlbnRCYXNlbWFwID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBsYXllcnMgPSAkc2NvcGUuZ2V0TGF5ZXJzKCk7XG4gICAgaWYgKCFsYXllcnMpIHJldHVybiBudWxsO1xuICAgIHJldHVybiBsYXllcnNbMF07XG4gIH07XG5cbiAgJHNjb3BlLnN3YXBCYXNlbWFwID0gZnVuY3Rpb24gKGJhc2VtYXApIHtcbiAgICB2YXIgbGF5ZXJzID0gJHNjb3BlLmdldExheWVycygpO1xuICAgIGxheWVyc1swXSA9IGJhc2VtYXA7XG4gICAgbGF5ZXJzID0gbGF5ZXJzLmpvaW4oJywnKTtcbiAgICBhbmd1bGFyLmV4dGVuZCgkc3RhdGVQYXJhbXMsIHtcbiAgICAgIGxheWVyczogbGF5ZXJzXG4gICAgfSk7XG4gICAgJHN0YXRlLmdvKCdtYWluJywgJHN0YXRlUGFyYW1zKTtcbiAgfTtcblxuICAkc2NvcGUuaXNBY3RpdmVCYXNlbWFwID0gZnVuY3Rpb24oYmFzZW1hcCkge1xuICAgIHJldHVybiAkc2NvcGUuY3VycmVudEJhc2VtYXAoKSA9PT0gYmFzZW1hcDtcbiAgfTtcblxufSk7IiwiLyoqXG4gKiBDcmVhdGVkIGJ5IFJ5YW4gV2hpdGxleSA8cndoaXRsZXlAc3BhdGlhbGRldi5jb20+XG4gKiAgICAgICBvbiA0LzE3LzE0LlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ0dlb0FuZ3VsYXInKS5jb250cm9sbGVyKCdCcmVhZGNydW1ic0N0cmwnLCBmdW5jdGlvbigkc2NvcGUsICRyb290U2NvcGUsICRzdGF0ZSwgJHN0YXRlUGFyYW1zLCAkaHR0cCwgVmVjdG9yUHJvdmlkZXIpIHtcblxuICAvKipcbiAgICogRml4ZXMgQ2hyb21lIE1hZ25pZnlpbmcgR2xhc3MgSXNzdWUgIzIwNlxuICAgKi9cbi8vICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuLy8gICAgdmFyIHRvb2xiYXIgPSAkKCcjTWFwVXBwZXJSaWdodFRvb2xiYXJXcmFwcGVyJyk7XG4vLyAgICB3aGlsZSAoIHRvb2xiYXIuaGVpZ2h0KCkgPiA0MCApIHtcbi8vICAgICAgdG9vbGJhci53aWR0aCggdG9vbGJhci53aWR0aCgpICsgMSApO1xuLy8gICAgfVxuLy8gIH0sIDEwMDApO1xuXG5cblx0Ly92YXIgZnVsbFN0YWNrVVJMID0gY29uZmlnLmNodWJic1BhdGgoJ3NlcnZpY2VzL2dldEFkbWluU3RhY2s/Zm9ybWF0PWpzb24mYWRtaW5sZXZlbD06YWRtaW5sZXZlbCZzdGFja2lkPTpndWlkJmRhdGFzb3VyY2U9Z2FkbScpO1xuXHR2YXIgZnVsbFN0YWNrVVJMID0gY29uZmlnLmNodWJic1BhdGgoJ3NlcnZpY2VzL2N1c3RvbS9jdXN0b21fb3BlcmF0aW9uP25hbWU9R2V0QnJlYWRDcnVtYnNXaXRoVGhlbWVDb3VudHNCeUlEJmZvcm1hdD1qc29uJmdhZG1fbGV2ZWw9OmFkbWlubGV2ZWwmaWRzPTpndWlkJmRhdGFzb3VyY2U9Z2FkbSZ0aGVtZT1wcm9qZWN0cycpO1xuXG5cdHZhciBicmVhZENydW1iRmVhdHVyZXMgPSB7fTsgLy9TdG9yZSByZXN1bHRzIG9mIHRoZSBzdGFjayBsb29rdXAgaGVyZSBzbyB3ZSBjYW4gcmV1c2UuXG5cblx0JHNjb3BlLiRvbignY2VudGVyLWZlYXR1cmUnLCBmdW5jdGlvbiAoZXZlbnQsIGZlYXRPYmopIHtcblxuXHRcdC8vU2VlIGlmIHRoZSBmZWF0dXJlIHN0YWNrIGhhcyBhbHJlYWR5IGJlZW4gc3RvcmVkXG5cdFx0aWYoYnJlYWRDcnVtYkZlYXR1cmVzW2ZlYXRPYmoubGV2ZWxdICYmIGJyZWFkQ3J1bWJGZWF0dXJlc1tmZWF0T2JqLmxldmVsXVtmZWF0T2JqLmd1aWRdKXtcblx0XHRcdC8vQWxyZWFkeSBoYXZlIGl0XG5cdFx0XHR1cGRhdGVCcmVhZENydW1icyhicmVhZENydW1iRmVhdHVyZXNbZmVhdE9iai5sZXZlbF1bZmVhdE9iai5ndWlkXSwgZmVhdE9iai5sZXZlbCk7XG5cdFx0fVxuXHRcdGVsc2V7XG5cdFx0XHQvL0dvIGZldGNoIGl0XG5cdFx0XHQvL1VzaW5nIHRoZSBDZW50ZXIgRmVhdHVyZSdzIEdVSUQsIGZldGNoIHRoZSBmdWxsIHN0YWNrIGRldGFpbHMuXG5cdFx0XHR2YXIgdXJsID0gZnVsbFN0YWNrVVJMLnJlcGxhY2UoJzphZG1pbmxldmVsJywgZmVhdE9iai5sZXZlbCkucmVwbGFjZSgnOmd1aWQnLCBmZWF0T2JqLmd1aWQpO1xuXHRcdFx0dmFyIHNlbGYgPSB0aGlzO1xuXG5cdFx0XHQvLyBGZXRjaCBmcm9tIHRoZSBzZXJ2ZXIgb25seSBpZiB3ZSBkb24ndCBoYXZlIGl0IGluIHRoZSBoYXNoXG5cdFx0XHQkaHR0cC5nZXQodXJsKS5zdWNjZXNzKGZ1bmN0aW9uIChyZXN1bHQsIHN0YXR1cykge1xuXG5cdFx0XHRcdGlmICghcmVzdWx0IHx8IHJlc3VsdC5lcnJvcikge1xuXHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoJ1VuYWJsZSB0byBmZXRjaCBmZWF0dXJlOiAnICsgcmVzdWx0LmVycm9yKTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR2YXIgcHJvcGVydGllcyA9IHJlc3VsdFswXTtcblxuXHRcdFx0XHQvL1VwZGF0ZVxuICAgICAgICAgICAgICAgIGlmKHByb3BlcnRpZXMpe1xuICAgICAgICAgICAgICAgICAgICB1cGRhdGVCcmVhZENydW1icyhwcm9wZXJ0aWVzLCBmZWF0T2JqLmxldmVsKTtcblxuICAgICAgICAgICAgICAgICAgICAvL1N0b3JlIGluIHRoZSBoYXNoLlxuICAgICAgICAgICAgICAgICAgICBpZihicmVhZENydW1iRmVhdHVyZXNbZmVhdE9iai5sZXZlbF0pe1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWRDcnVtYkZlYXR1cmVzW2ZlYXRPYmoubGV2ZWxdW3Byb3BlcnRpZXNbXCJndWlkXCIgKyBmZWF0T2JqLmxldmVsXV0gPSBwcm9wZXJ0aWVzO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhZENydW1iRmVhdHVyZXNbZmVhdE9iai5sZXZlbF0gPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFkQ3J1bWJGZWF0dXJlc1tmZWF0T2JqLmxldmVsXVtwcm9wZXJ0aWVzW1wiZ3VpZFwiICsgZmVhdE9iai5sZXZlbF1dID0gcHJvcGVydGllcztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlwiKTtcbiAgICAgICAgICAgICAgICB9XG5cdFx0XHR9KTtcblx0XHR9XG5cdH0pO1xuXG5cdGZ1bmN0aW9uIHVwZGF0ZUJyZWFkQ3J1bWJzKGZlYXRPYmosIGxldmVsKSB7XG5cdFx0Ly9VcGRhdGUgVGhlIEJyZWFkY3J1bWIgZGlzcGxheVxuXHRcdC8vQ2xlYXIgbG93ZXIgbGV2ZWwgc2NvcGUgaXRlbXMgaW4gY2FzZSB3ZSd2ZSB6b29tZWQgb3V0XG5cdFx0Zm9yICh2YXIgeCA9IGxldmVsOyB4IDw9IDU7IHgrKykge1xuXHRcdFx0Ly9udWxsIG91dCBhbnkgbGV2ZWwgdmFsdWVzIHRoYXQgYXJlIExPV0VSIHRoYW4gd2hhdCB3ZSdyZSBjdXJyZW50bHkgbG9va2luZyBhdFxuXHRcdFx0JHNjb3BlW1wibGV2ZWxcIiArIHhdID0gXCJcIjtcblx0XHRcdCRzY29wZVtcImZlYXRcIiArIHhdID0gbnVsbDtcblxuXHRcdFx0aWYoeCA9PSAtMSl7XG5cdFx0XHRcdCRzY29wZVtcImxldmVsYXJjXCJdID0gZmVhdE9ialtcIm5hbWVhcmNcIl07XG5cdFx0XHRcdCRzY29wZVtcImZlYXRhcmNcIl0gPSBmZWF0T2JqO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vdXNpbmcgdGhlIHJlcXVlc3RlZCBsZXZlbCwgZGlnIG91dCB0aGUgcHJvcGVydGllcyBmb3IgdGhhdCBsZXZlbCBhbmQgb25lcyBhYm92ZSBpdFxuXHRcdGZvciAodmFyIGkgPSBsZXZlbDsgaSA+PSAtMTsgaS0tKSB7XG5cdFx0XHRpZihpID09IC0xKXtcblx0XHRcdFx0JHNjb3BlW1wibGV2ZWxhcmNcIl0gPSBmZWF0T2JqW1wibmFtZWFyY1wiXTtcblx0XHRcdFx0JHNjb3BlW1wiZmVhdGFyY1wiXSA9IGZlYXRPYmo7XG5cdFx0XHR9XG5cdFx0XHQkc2NvcGVbXCJsZXZlbFwiICsgaV0gPSBmZWF0T2JqW1wibmFtZVwiICsgaV07XG5cdFx0XHQkc2NvcGVbXCJmZWF0XCIgKyBpXSA9IGZlYXRPYmo7XG5cdFx0fVxuXHR9XG5cbiAgJHNjb3BlLnpvb21Ub0dVSUQgPSBmdW5jdGlvbiAoZmVhdE9iaiwgbGV2ZWwpIHtcbiAgICAvL0dpdmVuIGEgR1VJRCwgem9vbSB0byB0aGUgZmVhdHVyZS5cblxuICAgIC8vR3JhYiB0aGUgZmVhdHVyZSBmcm9tIHRoZSBWZWN0b3JQcm92aWRlci5cbiAgICBWZWN0b3JQcm92aWRlci5mZXRjaEZlYXR1cmUoZmVhdE9ialtcImd1aWRcIiArIChsZXZlbCA+PSAwID8gbGV2ZWwgOiBcImFyY1wiKV0sIGxldmVsLCBudWxsLCBmdW5jdGlvbiAoZmVhdCkge1xuICAgICAgLy9NYWtlIGEgdGVtcCBnZW9qc29uIGxheWVyIGFuZCBhZGQgdGhlIGdlb2pzb24uXG4gICAgICAvL1RoZW4gZ3JhYiB0aGUgYm91bmRzIGZyb20gaXQgYW5kIHpvb20gdG8gaXQuXG5cbiAgICAgIHZhciBnamwgPSBMLmdlb0pzb24oZmVhdC5nZW9tZXRyeSk7XG4gICAgICAkc2NvcGUuJHBhcmVudC56b29tVG9Cb3VuZHMoZ2psLmdldEJvdW5kcygpKTtcbiAgICB9KTtcbiAgfTtcblxuICAkc2NvcGUuem9vbVRvV29ybGQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGJvdW5kcyA9IEwubGF0TG5nQm91bmRzKEwubGF0TG5nKC01MCwtMTc5KSwgTC5sYXRMbmcoNTAsMTc5KSk7XG4gICAgJHNjb3BlLiRwYXJlbnQuem9vbVRvQm91bmRzKGJvdW5kcyk7XG4gIH07XG5cbn0pO1xuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IE5pY2hvbGFzIEhhbGxhaGFuIDxuaGFsbGFoYW5Ac3BhdGlhbGRldi5jb20+XG4gKiAgICAgICBvbiA0LzkvMTQuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnR2VvQW5ndWxhcicpLmNvbnRyb2xsZXIoJ0RldGFpbHNDdHJsJywgZnVuY3Rpb24gKCRzY29wZSwgJHJvb3RTY29wZSwgJHN0YXRlLCAkc3RhdGVQYXJhbXMsICRodHRwLCBEb251dHMsICRmaWx0ZXIpIHtcblxuICAkc2NvcGUuZGV0YWlscyA9IHt9O1xuXG4gICRzY29wZS5zYWxlc2ZvcmNlVXJsID0gY29uZmlnLnNhbGVzZm9yY2VVcmw7XG5cbiAgJGh0dHAuZ2V0KCdzdWNjdWJ1c19naXRpZ25vcmUvc2Ytb2JqZWN0LWZpZWxkLWhhc2guanNvbicsIHtjYWNoZWQ6IHRydWV9KS5zdWNjZXNzKGZ1bmN0aW9uKHNmRmllbGRIYXNoKSB7XG4gICAgJHNjb3BlLnNmRmllbGRIYXNoID0gc2ZGaWVsZEhhc2g7XG4gIH0pO1xuXG4gICRzY29wZS5zaG93UmZhID0gZnVuY3Rpb24gKGRldGFpbHMsIHZhbHVlKSB7XG4gICAgZGV0YWlscy5zaG93UmZhID0gdHJ1ZTtcbiAgICB2YWx1ZS5zaG93UmZhID0gdHJ1ZTtcbiAgfTtcblxuICAkc2NvcGUuaGlkZVJmYSA9IGZ1bmN0aW9uIChkZXRhaWxzLCB2YWx1ZSkge1xuICAgIGRldGFpbHMuc2hvd1JmYSA9IGZhbHNlO1xuICAgIHZhbHVlLnNob3dSZmEgPSBmYWxzZTtcbiAgfTtcblxuICAkc2NvcGUuc2hvd0luZGljYXRvcnMgPSBmdW5jdGlvbiAoZGV0YWlscywgdmFsdWUpIHtcbiAgICBkZXRhaWxzLnNob3dJbmRpY2F0b3JzID0gdHJ1ZTtcbiAgICB2YWx1ZS5zaG93SW5kaWNhdG9ycyA9IHRydWU7XG4gIH07XG5cbiAgJHNjb3BlLmhpZGVJbmRpY2F0b3JzID0gZnVuY3Rpb24gKGRldGFpbHMsIHZhbHVlKSB7XG4gICAgZGV0YWlscy5zaG93SW5kaWNhdG9ycyA9IGZhbHNlO1xuICAgIHZhbHVlLnNob3dJbmRpY2F0b3JzID0gZmFsc2U7XG4gIH07XG5cbiAgJHNjb3BlLnNob3dSaXNrcyA9IGZ1bmN0aW9uIChkZXRhaWxzLCB2YWx1ZSkge1xuICAgICAgZGV0YWlscy5zaG93Umlza3MgPSB0cnVlO1xuICAgICAgdmFsdWUuc2hvd1Jpc2tzID0gdHJ1ZTtcbiAgfTtcblxuICAkc2NvcGUuaGlkZVJpc2tzID0gZnVuY3Rpb24gKGRldGFpbHMsIHZhbHVlKSB7XG4gICAgICBkZXRhaWxzLnNob3dSaXNrcyA9IGZhbHNlO1xuICAgICAgdmFsdWUuc2hvd1Jpc2tzID0gZmFsc2U7XG4gIH07XG5cbiAgJHNjb3BlLnNob3dTdGF0dXNlcyA9IGZ1bmN0aW9uIChkZXRhaWxzLCB2YWx1ZSkge1xuICAgICAgZGV0YWlscy5zaG93U3RhdHVzZXMgPSB0cnVlO1xuICAgICAgdmFsdWUuc2hvd1N0YXR1c2VzID0gdHJ1ZTtcbiAgfTtcblxuICAkc2NvcGUuaGlkZVN0YXR1c2VzID0gZnVuY3Rpb24gKGRldGFpbHMsIHZhbHVlKSB7XG4gICAgICBkZXRhaWxzLnNob3dTdGF0dXNlcyA9IGZhbHNlO1xuICAgICAgdmFsdWUuc2hvd1N0YXR1c2VzID0gZmFsc2U7XG4gIH07XG5cbiAgJHNjb3BlLmxhYmVsID0gZnVuY3Rpb24gKGtleSkge1xuXG4gICAgdmFyIGRlc2MgPSBrZXk7XG5cbiAgICAvLyBkaXNhc3RlclxuICAgIGlmICgkc3RhdGVQYXJhbXMudGhlbWUgPT09ICdkaXNhc3RlcicpIHtcblxuICAgICAgaWYgKCRzY29wZS5zZkZpZWxkSGFzaC5EaXNhc3Rlcl9fY1trZXldKSB7XG4gICAgICAgIGRlc2MgPSAkc2NvcGUuc2ZGaWVsZEhhc2guRGlzYXN0ZXJfX2Nba2V5XS5sYWJlbCB8fCBrZXk7XG4gICAgICB9XG5cbiAgICAgIGlmICgkc2NvcGUuc2ZGaWVsZEhhc2guTG9jYXRpb25fX2Nba2V5XSkge1xuICAgICAgICBkZXNjID0gJHNjb3BlLnNmRmllbGRIYXNoLkxvY2F0aW9uX19jW2tleV0ubGFiZWwgfHwga2V5O1xuICAgICAgfVxuXG4gICAgICBpZiAoJHNjb3BlLnNmRmllbGRIYXNoLkRpc2FzdGVyX0xvY2F0aW9uX19jW2tleV0pIHtcbiAgICAgICAgZGVzYyA9ICRzY29wZS5zZkZpZWxkSGFzaC5EaXNhc3Rlcl9Mb2NhdGlvbl9fY1trZXldLmxhYmVsIHx8IGtleTtcbiAgICAgIH1cblxuICAgICAgaWYgKCRzY29wZS5zZkZpZWxkSGFzaC5SZXF1ZXN0X0Zvcl9Bc3Npc3RhbmNlX19jW2tleV0pIHtcbiAgICAgICAgZGVzYyA9ICRzY29wZS5zZkZpZWxkSGFzaC5SZXF1ZXN0X0Zvcl9Bc3Npc3RhbmNlX19jW2tleV0ubGFiZWwgfHwga2V5O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGVzYztcbiAgICB9XG5cbiAgICAvLyBjb250ZXh0dWFsIGxheWVyXG4gICAgaWYgKCRzY29wZS5jb250ZXh0dWFsTGF5ZXIpIHtcbiAgICAgIHJldHVybiBrZXk7XG4gICAgfVxuXG5cbiAgICBpZiAoJHN0YXRlUGFyYW1zLnRoZW1lID09PSAncHJvamVjdFJpc2snKSB7XG4gICAgICAvLyBwcm9qZWN0XG4gICAgICBpZiAoJHNjb3BlLnNmRmllbGRIYXNoLlByb2plY3RfX2Nba2V5XSkge1xuICAgICAgICBkZXNjID0gJHNjb3BlLnNmRmllbGRIYXNoLlByb2plY3RfX2Nba2V5XS5sYWJlbCB8fCBrZXk7XG4gICAgICB9XG5cbiAgICAgIGlmICgkc2NvcGUuc2ZGaWVsZEhhc2guTG9jYXRpb25fX2Nba2V5XSkge1xuICAgICAgICBkZXNjID0gJHNjb3BlLnNmRmllbGRIYXNoLkxvY2F0aW9uX19jW2tleV0ubGFiZWwgfHwga2V5O1xuICAgICAgfVxuXG4gICAgICBpZiAoJHNjb3BlLnNmRmllbGRIYXNoLlJpc2tfX2Nba2V5XSkge1xuICAgICAgICBkZXNjID0gJHNjb3BlLnNmRmllbGRIYXNoLlJpc2tfX2Nba2V5XS5sYWJlbCB8fCBrZXk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkZXNjO1xuICAgIH1cblxuXG4gICAgaWYgKCRzdGF0ZVBhcmFtcy50aGVtZSA9PT0gJ3Byb2plY3RIZWFsdGgnKSB7XG4gICAgICAvLyBwcm9qZWN0XG4gICAgICBpZiAoJHNjb3BlLnNmRmllbGRIYXNoLlByb2plY3RfX2Nba2V5XSkge1xuICAgICAgICBkZXNjID0gJHNjb3BlLnNmRmllbGRIYXNoLlByb2plY3RfX2Nba2V5XS5sYWJlbCB8fCBrZXk7XG4gICAgICB9XG5cbiAgICAgIGlmICgkc2NvcGUuc2ZGaWVsZEhhc2guTG9jYXRpb25fX2Nba2V5XSkge1xuICAgICAgICBkZXNjID0gJHNjb3BlLnNmRmllbGRIYXNoLkxvY2F0aW9uX19jW2tleV0ubGFiZWwgfHwga2V5O1xuICAgICAgfVxuXG4gICAgICBpZiAoJHNjb3BlLnNmRmllbGRIYXNoLlByb2plY3RfRXZhbHVhdGlvbl9fY1trZXldKSB7XG4gICAgICAgIGRlc2MgPSAkc2NvcGUuc2ZGaWVsZEhhc2guUHJvamVjdF9FdmFsdWF0aW9uX19jW2tleV0ubGFiZWwgfHwga2V5O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGVzYztcbiAgICB9XG5cbiAgICAvLyBwcm9qZWN0XG4gICAgaWYgKCRzY29wZS5zZkZpZWxkSGFzaC5Qcm9qZWN0X19jW2tleV0pIHtcbiAgICAgIGRlc2MgPSAkc2NvcGUuc2ZGaWVsZEhhc2guUHJvamVjdF9fY1trZXldLmxhYmVsIHx8IGtleTtcbiAgICB9XG5cbiAgICBpZiAoJHNjb3BlLnNmRmllbGRIYXNoLkxvY2F0aW9uX19jW2tleV0pIHtcbiAgICAgIGRlc2MgPSAkc2NvcGUuc2ZGaWVsZEhhc2guTG9jYXRpb25fX2Nba2V5XS5sYWJlbCB8fCBrZXk7XG4gICAgfVxuXG4gICAgaWYgKCRzY29wZS5zZkZpZWxkSGFzaC5JbmRpY2F0b3JfX2Nba2V5XSkge1xuICAgICAgZGVzYyA9ICRzY29wZS5zZkZpZWxkSGFzaC5JbmRpY2F0b3JfX2Nba2V5XS5sYWJlbCB8fCBrZXk7XG4gICAgfVxuXG4gICAgaWYgKCRzY29wZS5zZkZpZWxkSGFzaC5JbmRpY2F0b3JfVmFsdWVfX2Nba2V5XSkge1xuICAgICAgZGVzYyA9ICRzY29wZS5zZkZpZWxkSGFzaC5JbmRpY2F0b3JfVmFsdWVfX2Nba2V5XS5sYWJlbCB8fCBrZXk7XG4gICAgfVxuXG4gICAgaWYgKCRzY29wZS5zZkZpZWxkSGFzaC5Mb2dmcmFtZV9FbGVtZW50X19jW2tleV0pIHtcbiAgICAgIGRlc2MgPSAkc2NvcGUuc2ZGaWVsZEhhc2guTG9nZnJhbWVfRWxlbWVudF9fY1trZXldLmxhYmVsIHx8IGtleTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGVzYztcblxuICB9O1xuXG4gICRzY29wZS50b29sdGlwID0gZnVuY3Rpb24gKGtleSkge1xuLy8gICAgKHNmRmllbGRIYXNoW2tleV0uaW5saW5lSGVscFRleHQgfHwgJycpICsgJyBGaWVsZE5hbWU6ICcgKyBrZXlcblxuICAgIHZhciBkZXNjID0gJyc7XG5cbiAgICAvLyBkaXNhc3RlclxuICAgIGlmICgkc3RhdGVQYXJhbXMudGhlbWUgPT09ICdkaXNhc3RlcicpIHtcblxuICAgICAgaWYgKCRzY29wZS5zZkZpZWxkSGFzaC5EaXNhc3Rlcl9fY1trZXldKSB7XG4gICAgICAgIGRlc2MgPSAkc2NvcGUuc2ZGaWVsZEhhc2guRGlzYXN0ZXJfX2Nba2V5XS5pbmxpbmVIZWxwVGV4dCB8fCAnJztcbiAgICAgIH1cblxuICAgICAgaWYgKCRzY29wZS5zZkZpZWxkSGFzaC5Mb2NhdGlvbl9fY1trZXldKSB7XG4gICAgICAgIGRlc2MgPSAkc2NvcGUuc2ZGaWVsZEhhc2guTG9jYXRpb25fX2Nba2V5XS5pbmxpbmVIZWxwVGV4dCB8fCAnJztcbiAgICAgIH1cblxuICAgICAgaWYgKCRzY29wZS5zZkZpZWxkSGFzaC5EaXNhc3Rlcl9Mb2NhdGlvbl9fY1trZXldKSB7XG4gICAgICAgIGRlc2MgPSAkc2NvcGUuc2ZGaWVsZEhhc2guRGlzYXN0ZXJfTG9jYXRpb25fX2Nba2V5XS5pbmxpbmVIZWxwVGV4dCB8fCAnJztcbiAgICAgIH1cblxuICAgICAgaWYgKCRzY29wZS5zZkZpZWxkSGFzaC5SZXF1ZXN0X0Zvcl9Bc3Npc3RhbmNlX19jW2tleV0pIHtcbiAgICAgICAgZGVzYyA9ICRzY29wZS5zZkZpZWxkSGFzaC5SZXF1ZXN0X0Zvcl9Bc3Npc3RhbmNlX19jW2tleV0uaW5saW5lSGVscFRleHQgfHwgJyc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkZXNjICsgJyBGaWVsZE5hbWU6ICcgKyBrZXk7XG4gICAgfVxuXG4gICAgLy8gY29udGV4dHVhbCBsYXllclxuICAgIGlmICgkc2NvcGUuY29udGV4dHVhbExheWVyKSB7XG4gICAgICByZXR1cm4gJ0ZpZWxkTmFtZTogJyArIGtleTtcbiAgICB9XG5cbiAgICBpZiAoJHN0YXRlUGFyYW1zLnRoZW1lID09PSAncHJvamVjdFJpc2snKSB7XG4gICAgICBpZiAoJHNjb3BlLnNmRmllbGRIYXNoLlByb2plY3RfX2Nba2V5XSkge1xuICAgICAgICBkZXNjID0gJHNjb3BlLnNmRmllbGRIYXNoLlByb2plY3RfX2Nba2V5XS5pbmxpbmVIZWxwVGV4dCB8fCAnJztcbiAgICAgIH1cblxuICAgICAgaWYgKCRzY29wZS5zZkZpZWxkSGFzaC5Mb2NhdGlvbl9fY1trZXldKSB7XG4gICAgICAgIGRlc2MgPSAkc2NvcGUuc2ZGaWVsZEhhc2guTG9jYXRpb25fX2Nba2V5XS5pbmxpbmVIZWxwVGV4dCB8fCAnJztcbiAgICAgIH1cblxuICAgICAgaWYgKCRzY29wZS5zZkZpZWxkSGFzaC5SaXNrX19jW2tleV0pIHtcbiAgICAgICAgZGVzYyA9ICRzY29wZS5zZkZpZWxkSGFzaC5SaXNrX19jW2tleV0uaW5saW5lSGVscFRleHQgfHwgJyc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkZXNjICsgJyBGaWVsZE5hbWU6ICcgKyBrZXk7XG4gICAgfVxuXG4gICAgaWYgKCRzdGF0ZVBhcmFtcy50aGVtZSA9PT0gJ3Byb2plY3RIZWFsdGgnKSB7XG4gICAgICBpZiAoJHNjb3BlLnNmRmllbGRIYXNoLlByb2plY3RfX2Nba2V5XSkge1xuICAgICAgICBkZXNjID0gJHNjb3BlLnNmRmllbGRIYXNoLlByb2plY3RfX2Nba2V5XS5pbmxpbmVIZWxwVGV4dCB8fCAnJztcbiAgICAgIH1cblxuICAgICAgaWYgKCRzY29wZS5zZkZpZWxkSGFzaC5Mb2NhdGlvbl9fY1trZXldKSB7XG4gICAgICAgIGRlc2MgPSAkc2NvcGUuc2ZGaWVsZEhhc2guTG9jYXRpb25fX2Nba2V5XS5pbmxpbmVIZWxwVGV4dCB8fCAnJztcbiAgICAgIH1cblxuICAgICAgaWYgKCRzY29wZS5zZkZpZWxkSGFzaC5Qcm9qZWN0X0V2YWx1YXRpb25fX2Nba2V5XSkge1xuICAgICAgICBkZXNjID0gJHNjb3BlLnNmRmllbGRIYXNoLlByb2plY3RfRXZhbHVhdGlvbl9fY1trZXldLmlubGluZUhlbHBUZXh0IHx8ICcnO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGRlc2MgKyAnIEZpZWxkTmFtZTogJyArIGtleTtcbiAgICB9XG5cbiAgICAvLyBwcm9qZWN0XG4gICAgaWYgKCRzY29wZS5zZkZpZWxkSGFzaC5Qcm9qZWN0X19jW2tleV0pIHtcbiAgICAgIGRlc2MgPSAkc2NvcGUuc2ZGaWVsZEhhc2guUHJvamVjdF9fY1trZXldLmlubGluZUhlbHBUZXh0IHx8ICcnO1xuICAgIH1cblxuICAgIGlmICgkc2NvcGUuc2ZGaWVsZEhhc2guTG9jYXRpb25fX2Nba2V5XSkge1xuICAgICAgZGVzYyA9ICRzY29wZS5zZkZpZWxkSGFzaC5Mb2NhdGlvbl9fY1trZXldLmlubGluZUhlbHBUZXh0IHx8ICcnO1xuICAgIH1cblxuICAgIGlmICgkc2NvcGUuc2ZGaWVsZEhhc2guSW5kaWNhdG9yX19jW2tleV0pIHtcbiAgICAgIGRlc2MgPSAkc2NvcGUuc2ZGaWVsZEhhc2guSW5kaWNhdG9yX19jW2tleV0uaW5saW5lSGVscFRleHQgfHwgJyc7XG4gICAgfVxuXG4gICAgaWYgKCRzY29wZS5zZkZpZWxkSGFzaC5JbmRpY2F0b3JfVmFsdWVfX2Nba2V5XSkge1xuICAgICAgZGVzYyA9ICRzY29wZS5zZkZpZWxkSGFzaC5JbmRpY2F0b3JfVmFsdWVfX2Nba2V5XS5pbmxpbmVIZWxwVGV4dCB8fCAnJztcbiAgICB9XG5cbiAgICBpZiAoJHNjb3BlLnNmRmllbGRIYXNoLkxvZ2ZyYW1lX0VsZW1lbnRfX2Nba2V5XSkge1xuICAgICAgZGVzYyA9ICRzY29wZS5zZkZpZWxkSGFzaC5Mb2dmcmFtZV9FbGVtZW50X19jW2tleV0uaW5saW5lSGVscFRleHQgfHwgJyc7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRlc2MgKyAnIEZpZWxkTmFtZTogJyArIGtleTtcblxuICB9O1xuXG4gIC8vSW5pdCBzZWxlY3RlZEZlYXR1cmVUaXRsZSBwcm9wZXJ0eVxuICAkc2NvcGUudGl0bGU9IFwiRmVhdHVyZSBEZXRhaWxzXCI7XG5cbiAgdmFyIHNvcnREZXRhaWxzID0gZnVuY3Rpb24oKXtcbiAgICB2YXIgcHJvamVjdGtleSA9IE9iamVjdC5rZXlzKCRzY29wZS5ncm91cGluZ3MpWzBdO1xuXG4gICAgLy8gUHJvamVjdHMgYW5kIFByb2plY3QgUmlzayBoYXZlIHNhbWUgc29ydGluZyBydWxlc1xuICAgIGlmKCRzY29wZS5ncm91cGluZ3MuaGFzT3duUHJvcGVydHkoJ1Byb2plY3RzJyk9PXRydWUgfHwgJHNjb3BlLmdyb3VwaW5ncy5oYXNPd25Qcm9wZXJ0eSgnUHJvamVjdCBSaXNrJyk9PXRydWUpe1xuICAgICAgJHNjb3BlLmdyb3VwaW5nc1twcm9qZWN0a2V5XSA9IFNvcnRCeVByb2plY3RSaXNrKCRzY29wZS5ncm91cGluZ3NbcHJvamVjdGtleV0pO1xuICAgIH07XG5cbiAgICBpZigkc2NvcGUuZ3JvdXBpbmdzLmhhc093blByb3BlcnR5KCdQcm9qZWN0IEhlYWx0aCcpPT10cnVlKXtcbiAgICAgICRzY29wZS5ncm91cGluZ3NbcHJvamVjdGtleV0gPSBTb3J0QnlQcm9qZWN0SGVhbHRoKCRzY29wZS5ncm91cGluZ3NbcHJvamVjdGtleV0pO1xuICAgIH07XG5cbiAgICBpZigkc2NvcGUuZ3JvdXBpbmdzLmhhc093blByb3BlcnR5KCdEaXNhc3RlcnMnKT09dHJ1ZSl7XG4gICAgICAkc2NvcGUuZ3JvdXBpbmdzWydEaXNhc3RlcnMnXSA9IFNvcnlCeURpc2FzdGVyKCRzY29wZS5ncm91cGluZ3NbJ0Rpc2FzdGVycyddKTtcbiAgICB9O1xuXG4gIH07XG5cbiAgJHNjb3BlLnRvZ2dsZVN0YXRlID0gZnVuY3Rpb24oc3RhdGVOYW1lKSB7XG4gICAgdmFyIHN0YXRlID0gJHN0YXRlLmN1cnJlbnQubmFtZSAhPT0gc3RhdGVOYW1lID8gc3RhdGVOYW1lIDogJ21haW4nO1xuICAgICRzdGF0ZS5nbyhzdGF0ZSwgJHN0YXRlUGFyYW1zKTtcbiAgfTtcblxuICAkc2NvcGUuaXRlbXNMaXN0ID0gdHJ1ZTtcbiAgJHNjb3BlLmRldGFpbHMgPSBmYWxzZTtcblxuXG4gIC8vSW5pdGlhbGl6ZSB0aGUgZHVtbXkgcHJvamVjdC9kaXNhc3RlciBjbGljayByZXN1bHRzXG4gICRzY29wZS5ncm91cGluZ3MgPSB7fTtcblxuICAkc2NvcGUuYWxlcnRVc2VyVG9DbGljayA9IHRydWU7XG5cbiAgJHNjb3BlLiRvbignZGV0YWlscycsIGZ1bmN0aW9uIChldmVudCwgZmVhdHVyZUxheWVyKSB7XG4gICAgJHNjb3BlLmFsZXJ0VXNlclRvQ2xpY2sgPSBmYWxzZTtcbiAgICB2YXIgcHJvcGVydGllcyA9IGZlYXR1cmVMYXllci5mZWF0dXJlLnByb3BlcnRpZXM7XG4gICAgJHNjb3BlLmZlYXR1cmUgPSBmZWF0dXJlTGF5ZXIuZmVhdHVyZTtcbiAgICAkc2NvcGUudGl0bGUgPSAkc2NvcGUuZmVhdHVyZVRpdGxlID0gcHJvcGVydGllcy5uYW1lIHx8IHByb3BlcnRpZXMudGl0bGUgfHwgJ1NlbGVjdGVkIEZlYXR1cmUnO1xuICAgIGlmIChwcm9wZXJ0aWVzLnNhbGVzZm9yY2UpIHsgLy8gc2FsZXNmb3JjZSB0aGVtZSBiYWRnZSBzZWxlY3RlZFxuICAgICAgJHNjb3BlLmNvbnRleHR1YWxMYXllciA9IGZhbHNlO1xuICAgICAgJHNjb3BlLmdyb3VwaW5ncyA9IHByb3BlcnRpZXMuc2FsZXNmb3JjZTtcblxuICAgICAgc29ydERldGFpbHMoKTtcblxuICAgICAgJHNjb3BlLm51bVRoZW1lSXRlbXMgPSAkLm1hcChwcm9wZXJ0aWVzLnNhbGVzZm9yY2UsIGZ1bmN0aW9uKG4pIHsgcmV0dXJuIG59KS5sZW5ndGg7XG4gICAgICAkc2NvcGUuc2hvd0xpc3QoKTtcblxuICAgICAgLy8gY2xvc2UgcGFyYW0gaWYgdXNlciBzZWxlY3RzIGEgY291bnRyeSB3aXRoIG5vIGRhdGFcbiAgICAgIHZhciBvYmp0aXRsZSA9IE9iamVjdC5rZXlzKHByb3BlcnRpZXMuc2FsZXNmb3JjZSlbMF07XG4gICAgICBpZihwcm9wZXJ0aWVzLnNhbGVzZm9yY2Vbb2JqdGl0bGVdLmxlbmd0aD49MSl7XG4gICAgICAgICRzY29wZS5vcGVuUGFyYW0oJ2RldGFpbHMtcGFuZWwnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICRzY29wZS5jbG9zZVBhcmFtKCdkZXRhaWxzLXBhbmVsJyk7XG4gICAgICB9XG5cbiAgICAgICRzY29wZS5jcmVhdGVEb251dHMoKTtcbiAgICAgICRzY29wZS5kYXRhc2V0ID0gRG9udXRzLmRhdGFzZXQ7XG5cbiAgICAgIC8vc2VjdG9yIGxlZ2VuZFxuICAgICAgdmFyIGRjPTA7IC8vdG90YWwgc2VjdG9yc1xuICAgICAgZm9yKHZhciBpPTA7aTwkc2NvcGUuZGF0YXNldC5sZW5ndGg7aSsrKXtcbiAgICAgICAgZGMgPSBkYyArICRzY29wZS5kYXRhc2V0W2ldLmNvdW50O1xuICAgICAgfVxuICAgICAgZm9yKHZhciBpPTA7aTwkc2NvcGUuZGF0YXNldC5sZW5ndGg7aSsrKXtcbiAgICAgICAgJHNjb3BlLmRhdGFzZXRbaV0ud2lkdGggPSBNYXRoLnJvdW5kKCgyNzcgKiAoJHNjb3BlLmRhdGFzZXRbaV0uY291bnQvZGMpKSk7IC8vIHBlcmNlbnRhZ2Ugb2YgZGl2ICgyNTBweClcbiAgICAgIH1cbiAgICAgIC8vIFNvcnQgc2VjdG9yIGFycmF5IGJ5IGNvdW50XG4gICAgICAkc2NvcGUuZGF0YXNldC5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgIHJldHVybiBiLndpZHRoIC0gYS53aWR0aDsgLy8gc29ydCBieSBjb3VudFxuICAgICAgfSk7XG5cbiAgICAgIGlmKCRzY29wZS5kYXRhc2V0Lmxlbmd0aD4wKSB7XG4gICAgICAgICRzY29wZS5kYXRhc2V0VGl0bGUgPSAkc2NvcGUuZGF0YXNldFswXS5hbGlhcztcbiAgICAgICAgJHNjb3BlLmRhdGFzZXRDb2xvciA9ICRzY29wZS5kYXRhc2V0WzBdLmNvbG9yO1xuICAgICAgICAkc2NvcGUuZGF0YXNldENvdW50ID0gJHNjb3BlLmRhdGFzZXRbMF0uY291bnQ7XG4gICAgICB9XG5cbiAgICAgICRzY29wZS5oaWRlTGVnZW5kID0gZmFsc2U7XG4gICAgICAvLyBlbmQgc2VjdG9yIGxlZ2VuZFxuXG4gICAgfSBlbHNlIHsgLy8gc3RhbmRhcmQgZ2VvanNvbiwgc2hvdyBwcm9wZXJ0aWVzIGFzIGRldGFpbHNcblxuICAgICAgJHNjb3BlLmNvbnRleHR1YWxMYXllciA9IChwcm9wZXJ0aWVzLnNmX2lkID8gZmFsc2UgOiB0cnVlKTtcbiAgICAgICRzY29wZS5zaG93RGV0YWlscyhwcm9wZXJ0aWVzKTtcbiAgICAgICRzY29wZS5vcGVuUGFyYW0oJ2RldGFpbHMtcGFuZWwnKTtcbiAgICAgICRzY29wZS5udW1UaGVtZUl0ZW1zID0gMTsgLy9ub24gc2FsZXMgZm9yY2UgZmVhdHVyZXNcbiAgICB9XG4gICAgJHNjb3BlLnJlc2l6ZURldGFpbHNQYW5lbCgpO1xuICB9KTtcblxuICB2YXIgU29ydEJ5UHJvamVjdFJpc2sgPSBmdW5jdGlvbihhcnIpe1xuICAgIGFyci5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICBpZiAoY29uZmlnLlByb2plY3RSaXNrT3JkZXJbYS5vdmVyYWxsX2Fzc2Vzc21lbnRfX2NdIDwgY29uZmlnLlByb2plY3RSaXNrT3JkZXJbYi5vdmVyYWxsX2Fzc2Vzc21lbnRfX2NdKSB7XG4gICAgICAgIHJldHVybiAxO1xuICAgICAgfVxuICAgICAgaWYgKGNvbmZpZy5Qcm9qZWN0Umlza09yZGVyW2Eub3ZlcmFsbF9hc3Nlc3NtZW50X19jXSA+IGNvbmZpZy5Qcm9qZWN0Umlza09yZGVyW2Iub3ZlcmFsbF9hc3Nlc3NtZW50X19jXSkge1xuICAgICAgICByZXR1cm4gLTE7XG4gICAgICB9XG4gICAgICAvLyBhIG11c3QgYmUgZXF1YWwgdG8gYlxuICAgICAgcmV0dXJuIDA7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gYXJyO1xuICB9O1xuICB2YXIgU29yeUJ5RGlzYXN0ZXIgPSBmdW5jdGlvbihhcnIpe1xuICAgIGFyci5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICBpZiAoY29uZmlnLkRpc2FzdGVyT3JkZXJbYS5pcm9jX3N0YXR1c19fY10gPCBjb25maWcuRGlzYXN0ZXJPcmRlcltiLmlyb2Nfc3RhdHVzX19jXSkge1xuICAgICAgICByZXR1cm4gMTtcbiAgICAgIH1cbiAgICAgIGlmIChjb25maWcuRGlzYXN0ZXJPcmRlclthLmlyb2Nfc3RhdHVzX19jXSA+IGNvbmZpZy5EaXNhc3Rlck9yZGVyW2IuaXJvY19zdGF0dXNfX2NdKSB7XG4gICAgICAgIHJldHVybiAtMTtcbiAgICAgIH1cbiAgICAgIC8vIGluIGNhc2Ugb2YgYSB0aWU7IG9yZGVyIGJ5IGRhdGVcbiAgICAgIHJldHVybiBuZXcgRGF0ZShiLmRhdGVfX2MpIC0gbmV3IERhdGUoYS5kYXRlX19jKTtcblxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGFycjtcbiAgfTtcbiAgdmFyIFNvcnRCeVByb2plY3RIZWFsdGggPSBmdW5jdGlvbihhcnIpe1xuICAgIGFyci5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICBpZiAoY29uZmlnLlByb2plY3RIZWFsdGhPcmRlclthLm92ZXJhbGxfc3RhdHVzX19jXSA8IGNvbmZpZy5Qcm9qZWN0SGVhbHRoT3JkZXJbYi5vdmVyYWxsX3N0YXR1c19fY10pIHtcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgICB9XG4gICAgICBpZiAoY29uZmlnLlByb2plY3RIZWFsdGhPcmRlclthLm92ZXJhbGxfc3RhdHVzX19jXSA+IGNvbmZpZy5Qcm9qZWN0SGVhbHRoT3JkZXJbYi5vdmVyYWxsX3N0YXR1c19fY10pIHtcbiAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgfVxuICAgICAgLy8gYSBtdXN0IGJlIGVxdWFsIHRvIGJcbiAgICAgIHJldHVybiAwO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGFycjtcbiAgfTtcblxuXG4gICRzY29wZS4kb24oJ3JvdXRlLXVwZGF0ZScsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2ZfaWQgPSAkc3RhdGVQYXJhbXMuc2ZfaWQ7XG4gICAgJHNjb3BlLnRoZW1lID0gJHN0YXRlUGFyYW1zLnRoZW1lO1xuICAgIGlmICgkc2NvcGUuYWxlcnRVc2VyVG9DbGljayA9PT0gZmFsc2UpIHJldHVybjtcbiAgICBpZiAoc2ZfaWQgJiYgdHlwZW9mIHNmX2lkID09PSAnc3RyaW5nJykge1xuICAgICAgdmFyIHVybCA9IGNvbmZpZy5jaHViYnNQYXRoKCdzZXJ2aWNlcy9jdXN0b20vY3VzdG9tX29wZXJhdGlvbj9uYW1lPWRvZWNvc3RleHRzZWFyY2gmZm9ybWF0PWpzb24mdGV4dD0nKSArIHNmX2lkO1xuICAgICAgJGh0dHAuZ2V0KHVybCkuc3VjY2VzcyhmdW5jdGlvbiAocmVzdWx0LCBzdGF0dXMpIHtcbiAgICAgICAgaWYgKHJlc3VsdFswXSkge1xuICAgICAgICAgICRyb290U2NvcGUuJGJyb2FkY2FzdCgnZGV0YWlscycsIHsgZmVhdHVyZTogeyBwcm9wZXJ0aWVzOiByZXN1bHRbMF0gfSB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9KTtcblxuICAkc2NvcGUuY3JlYXRlRG9udXRzID0gZnVuY3Rpb24oKSB7XG4gICAgLy8gdXNlcyBqcXVlcnkgdG8gcHV0IGRvbnV0IGluIGEgZGl2LlxuICAgIGlmICgkc2NvcGUuZ3JvdXBpbmdzICYmICRzY29wZS5ncm91cGluZ3MuUHJvamVjdHMpIHtcbiAgICAgIERvbnV0cy5jcmVhdGVMYWJlbERvbnV0KCRzY29wZS5zZkZpZWxkSGFzaC5Qcm9qZWN0X19jLnNlY3Rvcl9fYy5waWNrbGlzdFZhbHVlcywgJHNjb3BlLmdyb3VwaW5ncy5Qcm9qZWN0cywgJyNkZXRhaWxzLWRvbnV0Jyk7XG4gICAgfVxuICB9O1xuXG4gICRzY29wZS5tb3JlTGVzcyA9ICdNb3JlJztcblxuICAkc2NvcGUudG9nZ2xlTW9yZUxlc3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCRzY29wZS5tb3JlTGVzcyA9PT0gJ01vcmUnKSB7XG4gICAgICAkc2NvcGUubW9yZUxlc3MgPSAnTGVzcyc7XG4gICAgfSBlbHNlIHtcbiAgICAgICRzY29wZS5tb3JlTGVzcyA9ICdNb3JlJztcbiAgICB9XG4gICAgLy9SZXNpemU7XG4gICAgJHNjb3BlLnJlc2l6ZURldGFpbHNQYW5lbCgpO1xuICB9O1xuXG4gICRzY29wZS5zaG93RGV0YWlscyA9IGZ1bmN0aW9uIChpdGVtLCB0aGVtZUl0ZW1zLCBpZHgpIHtcbiAgICAkc2NvcGUuaGlkZUxlZ2VuZCA9IHRydWU7XG5cbiAgICBpZiAoaXRlbS5zZl9pZCkge1xuICAgICAgJHJvb3RTY29wZS5zZXRQYXJhbVdpdGhWYWwoJ3NmX2lkJywgaXRlbS5zZl9pZCk7XG4gICAgfVxuICAgIGlmIChpdGVtLm5hbWUgfHwgaXRlbS50aXRsZSkge1xuICAgICAgJHNjb3BlLnRpdGxlID0gaXRlbS5uYW1lIHx8IGl0ZW0udGl0bGU7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBpZHggPT09ICdudW1iZXInKSAkc2NvcGUuYWN0aXZlVGhlbWVJdGVtSWR4ID0gaWR4O1xuICAgIGlmICh0aGVtZUl0ZW1zKSAkc2NvcGUuYWN0aXZlVGhlbWVJdGVtc0xpc3QgPSB0aGVtZUl0ZW1zO1xuXG4gICAgJHNjb3BlLml0ZW1zTGlzdCA9IGZhbHNlO1xuXG4gICAgJHNjb3BlLiRhcHBseShmdW5jdGlvbigpe1xuICAgICAgJHNjb3BlLmRldGFpbHMgPSByZW1vdmVVbndhbnRlZEl0ZW1zKGZvcm1hdERldGFpbHMoaXRlbSwgJHN0YXRlUGFyYW1zLnRoZW1lKSwgJHN0YXRlUGFyYW1zLnRoZW1lKTtcbiAgICB9KTtcblxuICAgIGlmICghJHNjb3BlLmNvbnRleHR1YWxMYXllcikge1xuICAgICAgJHNjb3BlLmxlc3NEZXRhaWxzID0gcmVtb3ZlVW53YW50ZWRJdGVtcyhsZXNzRGV0YWlscyhmb3JtYXREZXRhaWxzKGl0ZW0sICRzdGF0ZVBhcmFtcy50aGVtZSkpLCAkc3RhdGVQYXJhbXMudGhlbWUpO1xuICAgIH1cblxuICAgIC8vRmlsdGVyL0Zvcm1hdCBSRkFzIGFuZCBJbmRpY2F0b3JzXG4gICAgaWYgKCRzY29wZS5kZXRhaWxzLnJlcXVlc3RzRm9yQXNzaXN0YW5jZSAmJiBhbmd1bGFyLmlzQXJyYXkoJHNjb3BlLmRldGFpbHMucmVxdWVzdHNGb3JBc3Npc3RhbmNlKSkge1xuICAgICAgLy9GaWx0ZXIvRm9ybWF0XG4gICAgICAkc2NvcGUuZGV0YWlscy5yZXF1ZXN0c0ZvckFzc2lzdGFuY2UgPSAkc2NvcGUuZGV0YWlscy5yZXF1ZXN0c0ZvckFzc2lzdGFuY2UubWFwKGZ1bmN0aW9uIChyZmEpIHtcbiAgICAgICAgcmV0dXJuIHJlbW92ZVVud2FudGVkSXRlbXMoZm9ybWF0RGV0YWlscyhyZmEsIFwiUkZBXCIpLCBcIlJGQVwiKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmICgkc2NvcGUuZGV0YWlscy5pbmRpY2F0b3JzICYmIGFuZ3VsYXIuaXNBcnJheSgkc2NvcGUuZGV0YWlscy5pbmRpY2F0b3JzKSkge1xuICAgICAgLy9GaWx0ZXIvRm9ybWF0XG4gICAgICAkc2NvcGUuZGV0YWlscy5pbmRpY2F0b3JzID0gJHNjb3BlLmRldGFpbHMuaW5kaWNhdG9ycy5tYXAoZnVuY3Rpb24gKGluZGljYXRvcikge1xuICAgICAgICByZXR1cm4gcmVtb3ZlVW53YW50ZWRJdGVtcyhmb3JtYXREZXRhaWxzKGluZGljYXRvciwgXCJpbmRpY2F0b3JcIiksIFwiaW5kaWNhdG9yXCIpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKCRzY29wZS5kZXRhaWxzLnJpc2tzICYmIGFuZ3VsYXIuaXNBcnJheSgkc2NvcGUuZGV0YWlscy5yaXNrcykgPT09IHRydWUpIHtcbiAgICAgIC8vRmlsdGVyL0Zvcm1hdFxuICAgICAgJHNjb3BlLmRldGFpbHMucmlza3MgPSAkc2NvcGUuZGV0YWlscy5yaXNrcy5tYXAoZnVuY3Rpb24gKHJpc2spIHtcbiAgICAgICAgcmV0dXJuIHJlbW92ZVVud2FudGVkSXRlbXMoZm9ybWF0RGV0YWlscyhyaXNrLCBcInJpc2tcIiksIFwicmlza1wiKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmICgkc2NvcGUuZGV0YWlscy5zdGF0dXNlcyAmJiBhbmd1bGFyLmlzQXJyYXkoJHNjb3BlLmRldGFpbHMuc3RhdHVzZXMpKSB7XG4gICAgICAvL0ZpbHRlci9Gb3JtYXRcbiAgICAgICRzY29wZS5kZXRhaWxzLnN0YXR1c2VzID0gJHNjb3BlLmRldGFpbHMuc3RhdHVzZXMubWFwKGZ1bmN0aW9uIChzdGF0dXMpIHtcbiAgICAgICAgcmV0dXJuIHJlbW92ZVVud2FudGVkSXRlbXMoZm9ybWF0RGV0YWlscyhzdGF0dXMsIFwic3RhdHVzXCIpLCBcInN0YXR1c1wiKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vTmVlZCB0byB3YWl0IHVudGlsIGRldGFpbHMgcGFuZWwgc3dpdGNoZXMgbW9kZXMsIGFuZCB0aGVuIGNhbGN1bGF0ZSB0aGUgc2l6ZS5cbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICRzY29wZS5yZXNpemVEZXRhaWxzUGFuZWwoKTtcbiAgICB9LCAxMDApO1xuXG4gIH07XG5cbiAgZnVuY3Rpb24gcmVtb3ZlVW53YW50ZWRJdGVtcyhkZXRhaWxzLCB0eXBlKSB7XG4gICAgdmFyIHBhc3N0aHJvdWdoRGV0YWlscyA9IHt9O1xuICAgIHZhciBibGFja2xpc3REaWN0aW9uYXJ5ID0gY29uZmlnLnVud2FudGVkUHJvamVjdERldGFpbHM7XG5cbiAgICBpZiAodHlwZSA9PT0gJ2Rpc2FzdGVyJykge1xuICAgICAgYmxhY2tsaXN0RGljdGlvbmFyeSA9IGNvbmZpZy51bndhbnRlZERpc2FzdGVyRGV0YWlscztcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSA9PT0gJ3Byb2plY3QnKSB7XG4gICAgICBibGFja2xpc3REaWN0aW9uYXJ5ID0gY29uZmlnLnVud2FudGVkUHJvamVjdERldGFpbHM7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgPT09ICdSRkEnKSB7XG4gICAgICBibGFja2xpc3REaWN0aW9uYXJ5ID0gY29uZmlnLnVud2FudGVkUkZBRGV0YWlscztcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSA9PT0gJ2luZGljYXRvcicpIHtcbiAgICAgIGJsYWNrbGlzdERpY3Rpb25hcnkgPSBjb25maWcudW53YW50ZWRJbmRpY2F0b3JEZXRhaWxzO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlID09PSAncHJvamVjdFJpc2snIHx8IHR5cGUgPT09ICdyaXNrJykge1xuICAgICAgYmxhY2tsaXN0RGljdGlvbmFyeSA9IGNvbmZpZy51bndhbnRlZFByb2plY3RSaXNrRGV0YWlscztcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSA9PT0gJ3Byb2plY3RIZWFsdGgnIHx8IHR5cGUgPT09ICdzdGF0dXMnKSB7XG4gICAgICBibGFja2xpc3REaWN0aW9uYXJ5ID0gY29uZmlnLnVud2FudGVkUHJvamVjdEhlYWx0aERldGFpbHM7XG4gICAgfVxuXG4gICAgZm9yICh2YXIga2V5IGluIGRldGFpbHMpIHtcbiAgICAgIHZhciBibGFja2xpc3RlZCA9IGJsYWNrbGlzdERpY3Rpb25hcnlba2V5XTtcbiAgICAgIGlmIChibGFja2xpc3RlZCAmJiAodHlwZW9mIGJsYWNrbGlzdGVkID09PSAnZnVuY3Rpb24nKSkge1xuICAgICAgICAvL2V2YWx1YXRlIHRoZSBmdW5jdGlvbiB0byBkZWNpZGUgaWYgdGhlIGtleSBzaG91bGQgYmUgc2hvd24uXG4gICAgICAgIGJsYWNrbGlzdGVkID0gYmxhY2tsaXN0ZWQoZGV0YWlsc1trZXldKTtcbiAgICAgIH1cbiAgICAgIGlmICghYmxhY2tsaXN0ZWQpIHtcbiAgICAgICAgLy9BbGxvdyB0aGUgaXRlbSB0aHJ1IGlmIGl0IGlzIG5vdCBibGFja2xpc3RlZFxuICAgICAgICBwYXNzdGhyb3VnaERldGFpbHNba2V5XSA9IGRldGFpbHNba2V5XTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcGFzc3Rocm91Z2hEZXRhaWxzO1xuICB9XG5cbiAgZnVuY3Rpb24gZm9ybWF0RGV0YWlscyhkZXRhaWxzLCB0eXBlKSB7XG4gICAgdmFyIGZvcm1hdHRlZERldGFpbHMgPSB7fTtcbiAgICB2YXIgZm9ybWF0dGluZ0RpY3Rpb25hcnkgPSBjb25maWcucHJvamVjdERldGFpbHNGb3JtYXR0aW5nO1xuXG4gICAgaWYgKHR5cGUgPT09ICdkaXNhc3RlcicpIHtcbiAgICAgIGZvcm1hdHRpbmdEaWN0aW9uYXJ5ID0gY29uZmlnLmRpc2FzdGVyRGV0YWlsc0Zvcm1hdHRpbmc7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgPT09ICdwcm9qZWN0Jykge1xuICAgICAgZm9ybWF0dGluZ0RpY3Rpb25hcnkgPSBjb25maWcucHJvamVjdERldGFpbHNGb3JtYXR0aW5nO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlID09PSAnUkZBJykge1xuICAgICAgZm9ybWF0dGluZ0RpY3Rpb25hcnkgPSBjb25maWcuUkZBRGV0YWlsc0Zvcm1hdHRpbmc7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgPT09ICdpbmRpY2F0b3InKSB7XG4gICAgICBmb3JtYXR0aW5nRGljdGlvbmFyeSA9IGNvbmZpZy5pbmRpY2F0b3JEZXRhaWxzRm9ybWF0dGluZztcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSA9PT0gJ3Byb2plY3RSaXNrJyB8fCB0eXBlID09PSAncmlzaycpIHtcbiAgICAgIGZvcm1hdHRpbmdEaWN0aW9uYXJ5ID0gY29uZmlnLnByb2plY3RSaXNrRGV0YWlsc0Zvcm1hdHRpbmc7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgPT09ICdwcm9qZWN0SGVhbHRoJyB8fCB0eXBlID09PSAnc3RhdHVzJykge1xuICAgICAgZm9ybWF0dGluZ0RpY3Rpb25hcnkgPSBjb25maWcucHJvamVjdEhlYWx0aERldGFpbHNGb3JtYXR0aW5nO1xuICAgIH1cblxuICAgIGZvciAodmFyIGtleSBpbiBkZXRhaWxzKSB7XG4gICAgICB2YXIgZm9ybWF0dGVyID0gZm9ybWF0dGluZ0RpY3Rpb25hcnlba2V5XTtcbiAgICAgIGlmIChmb3JtYXR0ZXIpIHtcbiAgICAgICAgc3dpdGNoIChmb3JtYXR0ZXIuc3BsaXQoXCIsXCIpWzBdKSB7XG4gICAgICAgICAgY2FzZSBcImN1cnJlbmN5XCI6XG4gICAgICAgICAgICBmb3JtYXR0ZWREZXRhaWxzW2tleV0gPSAkZmlsdGVyKCdjdXJyZW5jeScpKGRldGFpbHNba2V5XSwgKGZvcm1hdHRlci5zcGxpdChcIixcIilbMV0gfHwgXCJVU0RcIikpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlIFwibnVtYmVyXCI6XG4gICAgICAgICAgICBmb3JtYXR0ZWREZXRhaWxzW2tleV0gPSAkZmlsdGVyKCdudW1iZXInKShkZXRhaWxzW2tleV0pO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlIFwiZGF0ZVwiOlxuICAgICAgICAgICAgZm9ybWF0dGVkRGV0YWlsc1trZXldID0gJGZpbHRlcignZGF0ZScpKGRldGFpbHNba2V5XSwgXCJ5eXl5LWRkLU1NXCIpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlIFwicmZhTmFtZVwiOlxuICAgICAgICAgICAgZm9ybWF0dGVkRGV0YWlsc1trZXldID0gJHNjb3BlLmRldGFpbHMubG9jYXRpb25fX3JfYWRtaW5fMF9fYyArICcgJyArICRzY29wZS5kZXRhaWxzLmRpc2FzdGVyX3R5cGVfX2MgKyAnIC0gJyArIGRldGFpbHMuYXBwZWFsX3NvdXJjZV9fYztcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGZvcm1hdHRlZERldGFpbHNba2V5XSA9IGRldGFpbHNba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIC8vTm8gZm9ybWF0dGluZ1xuICAgICAgICBmb3JtYXR0ZWREZXRhaWxzW2tleV0gPSBkZXRhaWxzW2tleV07XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZvcm1hdHRlZERldGFpbHM7XG4gIH1cblxuICBmdW5jdGlvbiBsZXNzRGV0YWlscyhkZXRhaWxzKSB7XG4gICAgdmFyIGxlc3NEZXRhaWxzID0gW107XG4gICAgaWYgKCRzdGF0ZVBhcmFtcy50aGVtZS5pbmRleE9mKCdkaXNhc3RlcicpIT09LTEpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBjb25maWcuZGlzYXN0ZXJEZXRhaWxzU2hvcnRMaXN0Lmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIHZhciBrZXkgPSBjb25maWcuZGlzYXN0ZXJEZXRhaWxzU2hvcnRMaXN0W2ldO1xuICAgICAgICBsZXNzRGV0YWlscy5wdXNoKHtcbiAgICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgICB2YWx1ZTogZGV0YWlsc1trZXldXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgcHJvamVjdERldGFpbHNTaG9ydExpc3QgPSBjb25maWcucHJvamVjdERldGFpbHNTaG9ydExpc3Q7XG4gICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gcHJvamVjdERldGFpbHNTaG9ydExpc3QubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgdmFyIGtleSA9IHByb2plY3REZXRhaWxzU2hvcnRMaXN0W2ldO1xuICAgICAgICBsZXNzRGV0YWlscy5wdXNoKHtcbiAgICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgICB2YWx1ZTogZGV0YWlsc1trZXldXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbGVzc0RldGFpbHM7XG4gIH1cblxuICAkc2NvcGUubmV4dFRoZW1lSXRlbSA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBsZW4gPSAkc2NvcGUuYWN0aXZlVGhlbWVJdGVtc0xpc3QubGVuZ3RoO1xuICAgIGlmICgrKyRzY29wZS5hY3RpdmVUaGVtZUl0ZW1JZHggPj0gbGVuKSAkc2NvcGUuYWN0aXZlVGhlbWVJdGVtSWR4ID0gMDtcbiAgICB2YXIgaXRlbSA9ICRzY29wZS5hY3RpdmVUaGVtZUl0ZW1zTGlzdFskc2NvcGUuYWN0aXZlVGhlbWVJdGVtSWR4XTtcbiAgICAkc2NvcGUuc2hvd0RldGFpbHMoaXRlbSk7XG4gIH07XG5cbiAgJHNjb3BlLnByZXZUaGVtZUl0ZW0gPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgbGVuID0gJHNjb3BlLmFjdGl2ZVRoZW1lSXRlbXNMaXN0Lmxlbmd0aDtcbiAgICBpZiAoLS0kc2NvcGUuYWN0aXZlVGhlbWVJdGVtSWR4IDwgMCkgJHNjb3BlLmFjdGl2ZVRoZW1lSXRlbUlkeCA9IGxlbiAtIDE7XG4gICAgdmFyIGl0ZW0gPSAkc2NvcGUuYWN0aXZlVGhlbWVJdGVtc0xpc3RbJHNjb3BlLmFjdGl2ZVRoZW1lSXRlbUlkeF07XG4gICAgJHNjb3BlLnNob3dEZXRhaWxzKGl0ZW0pO1xuICB9O1xuXG4gICRzY29wZS5zaG93TGlzdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAkc2NvcGUudGl0bGUgPSAkc2NvcGUuZmVhdHVyZVRpdGxlO1xuICAgICRzY29wZS5pdGVtc0xpc3QgPSB0cnVlO1xuICAgICRzY29wZS5kZXRhaWxzID0gZmFsc2U7XG4gICAgJHNjb3BlLmhpZGVMZWdlbmQgPSBmYWxzZTtcbiAgfTtcblxuICAkc2NvcGUucmVzaXplRGV0YWlsc1BhbmVsID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGhlaWdodCA9ICQoJyNNYXBDdHJsJykuaGVpZ2h0KCkgLSAyNjA7IC8vTWFnaWMgTnVtYmVyXG5cbiAgICAvL2hlaWdodCBpcyB0aGUgdmFsdWUgdGhhdCB0aGUgZW50aXJlIGRldGFpbHMgcGFuZWwgc2hvdWxkIG5ldmVyIGV4Y2VlZC5cbiAgICAvL1dpdGhpbiB0aGUgcGFuZWwgaXRzZWxmLCB0aGUgaW5uZXIgY29udGFpbmVyIG5lZWRzIHRvIGFkanVzdCBpdHMgaGVpZ2h0IGJhc2VkIG9uIHRoZSBjb250ZW50cyBvZiB0aGUgcGFuZWwuXG4gICAgLy9Tb21ldGltZXMsIHRoZXJlIGFyZSB0YWJzLCBhbmQgc29tZXRpbWVzIHRoZSBwcm9qZWN0L2Rpc2FzdGVyIGRlc2NyaXB0aW9uIGNhbiBiZSBxdWl0ZSBsb25nLlxuICAgIC8vSW4gdGhlc2UgY2FzZXMsIHRoZW4gaW5uZXJDb250YWluZXIgc2hvdWxkIHNocmluayB0byBmaXQgd2l0aGluIHRoZSBtYXgtaGVpZ2h0IG9mIHRoZSBvdXRlciBwYW5lbCAoaGVpZ2h0KVxuXG4gICAgLy9GaW5kIHRoZSB0b3Agb2YgdGhlIGlubmVyQ29udGFpbmVyLCBhbmQgc3VidHJhY3QgZnJvbSB0aGUgbWF4IGhlaWdodCBvZiB0aGUgcGFuZWwuICBUaGF0J3Mgd2hhdCB0aGUgbWF4LWhlaWdodCBvZiB0aGUgaW5uZXIgcGFuZWwgc2hvdWxkIGJlXG4gICAgdmFyIGlubmVyVG9wID0gJCgnI0RldGFpbHNQYW5lbCAuSW5uZXJDb250YWluZXInKS5wb3NpdGlvbigpLnRvcDtcbiAgICB2YXIgYm90dG9tSGVpZ2h0ID0gJChcIi5kZXRhaWxzLWJvdHRvbS1idXR0b25zLnB1bGwtcmlnaHRcIikuaGVpZ2h0KCk7XG5cbiAgICAkKCcjRGV0YWlsc1BhbmVsIC5Jbm5lckNvbnRhaW5lciAnKS5jc3MoXCJtYXgtaGVpZ2h0XCIsIGhlaWdodCAtIGlubmVyVG9wIC0gYm90dG9tSGVpZ2h0KTtcbiAgfTtcblxuXHQvL0Nvbm5lY3QgdGhlIGxheW91dCBvbnJlc2l6ZSBlbmQgZXZlbnRcblx0d2luZG93LmxheW91dC5wYW5lcy5jZW50ZXIuYmluZChcImxheW91dHBhbmVvbnJlc2l6ZV9lbmRcIiwgJHNjb3BlLnJlc2l6ZURldGFpbHNQYW5lbCk7XG5cblx0Ly9Gb3IgSW5pdC5cblx0JHNjb3BlLnJlc2l6ZURldGFpbHNQYW5lbCgpO1xuXG4gICRzY29wZS5zYXZlID0gZnVuY3Rpb24gKGRhdGEsIG5hbWUpIHtcbiAgICB2YXIganNvbiA9IEpTT04uc3RyaW5naWZ5KGRhdGEsIG51bGwsIDIpO1xuICAgIHZhciBibG9iID0gbmV3IEJsb2IoW2pzb25dLCB7dHlwZTondGV4dC9wbGFpbid9KTtcbiAgICB2YXIgZG93bmxvYWRMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgdmFyIHVybCA9ICh3aW5kb3cud2Via2l0VVJMICE9IG51bGwgPyB3aW5kb3cud2Via2l0VVJMIDogd2luZG93LlVSTCk7XG4gICAgZG93bmxvYWRMaW5rLmhyZWYgPSB1cmwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuICAgIGRvd25sb2FkTGluay5kb3dubG9hZCA9IG5hbWUgfHwgJ2ZlYXR1cmUuZ2VvanNvbic7XG4gICAgZG93bmxvYWRMaW5rLmNsaWNrKCk7XG4gIH07XG5cbiAgJHNjb3BlLnVwZGF0ZVNlY3RvckxlZ2VuZCA9IGZ1bmN0aW9uKGFsaWFzLGNvbG9yLGNvdW50KXtcbiAgICAkc2NvcGUuZGF0YXNldFRpdGxlID0gYWxpYXM7XG4gICAgJHNjb3BlLmRhdGFzZXRDb2xvciA9IGNvbG9yO1xuICAgICRzY29wZS5kYXRhc2V0Q291bnQgPSBjb3VudDtcbiAgfVxuXG5cbn0pO1xuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IFJ5YW4gV2hpdGxleVxuICogICAgICAgb24gNi80LzE0LlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ0dlb0FuZ3VsYXInKS5jb250cm9sbGVyKCdFeHBvcnRDdHJsJywgZnVuY3Rpb24oJHNjb3BlLCAkaHR0cCwgJHN0YXRlLCAkc3RhdGVQYXJhbXMpIHtcbiAgICBjb25zb2xlLmxvZygnRXhwb3J0Q3RybCcpO1xuXG4gICAgJHNjb3BlLmV4cG9ydCA9IGZ1bmN0aW9uICgpIHtcblxuICAgIH07XG5cbiAgICAkc2NvcGUucm91dGVVcmwgPSB3aW5kb3cubG9jYXRpb247XG5cblxuICAgIC8qKlxuICAgICAqIElmIEV4cG9ydEN0cmwgZ2V0cyBjYWxsZWQgdHdpY2UgZm9yIHNvbWUgcmVhc29uLCB3ZSBtaWdodFxuICAgICAqIGhhdmUgdGhpcyBjbGFzcyBoYW5naW5nIGFyb3VuZCBibG9ja2luZyB0aGUgYXBwLiBFeHBvcnRDdHJsXG4gICAgICogZG9lcyBnZXQgY2FsbGVkIHR3aWNlIHNvbWV0aW1lcywgYmVjYXVzZSB0aGUgbW9kYWwgc29tZXRpbWVzXG4gICAgICogbnVkZ2VzIHRoZSBtYXAgYW5kIHJlaW5zdGFudGlhdGVzIHRoZSBtb2RhbCBhZ2FpbiB2aWEgYSBuZXdcbiAgICAgKiByb3V0ZS5cbiAgICAgKi9cbiAgICAkKCcubW9kYWwtYmFja2Ryb3AnKS5yZW1vdmUoKTtcblxuICAgICQoJyNleHBvcnRNb2RhbCcpLm1vZGFsKCdzaG93Jyk7XG5cbiAgICAkKCcjZXhwb3J0TW9kYWwnKS5vbignaGlkZGVuLmJzLm1vZGFsJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgJHN0YXRlLmdvKCdtYWluJywgJHN0YXRlUGFyYW1zKTtcbiAgICB9KTtcblxuXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgLy9kZWZhdWx0c1xuICAgIHNlbGYuX0xheW91dEVsZW1lbnRzID0geyBcIm1hcFwiOiB0cnVlLCBcImxlZ2VuZFwiOiB0cnVlLCBcIm9wdGlvbmFsdGhlbWVkZXRhaWxzXCI6IGZhbHNlIH07XG4gICAgc2VsZi5fSW1hZ2VGb3JtYXQgPSAncG5nJztcblxuICAgIHNlbGYuX2luaXQgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgc2VsZi5fY29ubmVjdFJhZGlvQnV0dG9uT25DbGlja3MoKTtcbiAgICAgICAgJChcIiNleGVjdXRlRXhwb3J0QnV0dG9uXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy9TaG93IGxvYWRpbmcgZ2lmLiBIaWRlIGV4cG9ydCBidXR0b25cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgc2VsZi5fZXhwb3J0SW1hZ2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5fc2hvd0V4cG9ydEJ1dHRvbkhpZGVMb2FkZXIoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgc2VsZi5fc2hvd1dhaXRpbmdQYW5lbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc2VsZi5fc2hvd0xvYWRlcigpOyAvL3Nob3cga25pZ2h0UmlkZXIgaW1hZ2UsIGhpZGVcbiAgICAgICAgJChcIiNleHBvcnRPcHRpb25zUGFuZWxcIikuY3NzKHtcImRpc3BsYXlcIjogXCJub25lXCJ9KTtcbiAgICAgICAgJChcIiNleHBvcnRXYWl0aW5nUGFuZWxcIikuY3NzKHsgXCJkaXNwbGF5XCI6IFwiYmxvY2tcIiB9KTtcbiAgICAgICAgJChcIi5leHBvcnRHcm91cFRpdGxlLmVycm9yXCIpLmNzcyh7IFwiZGlzcGxheVwiOiBcIm5vbmVcIiB9KTsgLy9IaWRlIGVycm9yIG1lc3NhZ2UsIGlmIHNob3duXG4gICAgICAgICQoXCIuaW1hZ2VPcGVuQnV0dG9uXCIpLmNzcyh7XCJkaXNwbGF5XCI6IFwibm9uZVwifSk7IC8vaGlkZSBvcGVuIGltYWdlIGJ1dHRvblxuICAgIH1cblxuICAgIHNlbGYuX2hpZGVXYWl0aW5nUGFuZWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoXCIjZXhwb3J0V2FpdGluZ1BhbmVsXCIpLmNzcyh7XCJkaXNwbGF5XCI6IFwibm9uZVwifSk7XG4gICAgICAgICQoXCIjZXhwb3J0T3B0aW9uc1BhbmVsXCIpLmNzcyh7XCJkaXNwbGF5XCI6IFwiYmxvY2tcIn0pO1xuICAgIH1cblxuICAgIHNlbGYuX2hpZGVFeHBvcnRCdXR0b25TaG93TG9hZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAkKFwiI2V4ZWN1dGVFeHBvcnRCdXR0b25cIikuY3NzKHsgXCJkaXNwbGF5XCI6IFwibm9uZVwiIH0pO1xuICAgICAgICAkKFwiLmtuaWdodFJpZGVyTG9hZGVyXCIpLmNzcyh7IFwiZGlzcGxheVwiOiBcImJsb2NrXCIgfSk7XG4gICAgfVxuXG4gICAgc2VsZi5fc2hvd0V4cG9ydEJ1dHRvbkhpZGVMb2FkZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoXCIjZXhlY3V0ZUV4cG9ydEJ1dHRvblwiKS5jc3Moe1wiZGlzcGxheVwiOiBcImJsb2NrXCJ9KTtcbiAgICAgICAgJChcIi5rbmlnaHRSaWRlckxvYWRlclwiKS5jc3Moe1wiZGlzcGxheVwiOiBcIm5vbmVcIn0pO1xuICAgIH1cblxuICAgIHNlbGYuX2Nvbm5lY3RSYWRpb0J1dHRvbk9uQ2xpY2tzID0gZnVuY3Rpb24gKCkge1xuXG5cbiAgICAgICAgJChcIiNvcHRpb25hbE91dHB1dE1hcFwiKS5vbihcImNsaWNrXCIsIHNlbGYuX2dldExheW91dEVsZW1lbnRPbkNsaWNrKCdtYXAnKSk7XG4gICAgICAgICQoXCIjb3B0aW9uYWxPdXRwdXRMZWdlbmRcIikub24oXCJjbGlja1wiLCBzZWxmLl9nZXRMYXlvdXRFbGVtZW50T25DbGljaygnbGVnZW5kJykpO1xuICAgICAgICAkKFwiI29wdGlvbmFsVGhlbWVEZXRhaWxzXCIpLm9uKFwiY2xpY2tcIiwgc2VsZi5fZ2V0TGF5b3V0RWxlbWVudE9uQ2xpY2soJ29wdGlvbmFsdGhlbWVkZXRhaWxzJykpO1xuXG5cbiAgICAgICAgdmFyIHBuZ1JCTm9kZSA9ICQoXCIjcG5nSW1hZ2VGb3JtYXRcIik7XG4gICAgICAgIHBuZ1JCTm9kZS5vbihcImNsaWNrXCIsIHNlbGYuX2dldEltYWdlQnV0dG9uUmFkaW9CdXR0b25PbkNsaWNrKHBuZ1JCTm9kZSwgJ3BuZycpKTtcblxuICAgICAgICB2YXIgcGRmUkJOb2RlID0gJChcIiNwZGZJbWFnZUZvcm1hdFwiKTtcbiAgICAgICAgcGRmUkJOb2RlLm9uKFwiY2xpY2tcIiwgc2VsZi5fZ2V0SW1hZ2VCdXR0b25SYWRpb0J1dHRvbk9uQ2xpY2socGRmUkJOb2RlLCAncGRmJykpO1xuXG4gICAgICAgICQoXCIjZXhwb3J0Q2xvc2VcIikub24oXCJjbGlja1wiLCBzZWxmLmhpZGVFeHBvcnRPcHRpb24pO1xuXG4gICAgICAgICQoXCIua2lsbE9wZW5CdXR0b25cIikub24oXCJjbGlja1wiLCBzZWxmLl9oaWRlV2FpdGluZ1BhbmVsKTsgLy90aGUgZGlzY2FyZCBidXR0b25cblxuICAgIH07XG5cbiAgICBzZWxmLl9nZXRJbWFnZUJ1dHRvblJhZGlvQnV0dG9uT25DbGljayA9IGZ1bmN0aW9uIChub2RlLCBpbWFnZUZvcm1hdCkge1xuXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzZWxmLl9JbWFnZUZvcm1hdCA9IGltYWdlRm9ybWF0O1xuICAgICAgICAgICAgc2VsZi5fcmVtb3ZlQWxsU2VsZWN0ZWRSYWRpb0J1dHRvbnMoXCJleHBvcnRPcHRpb25zQ29udGFpbmVyXCIpO1xuICAgICAgICAgICAgbm9kZS5hZGRDbGFzcyhcImV4cG9ydFJhZGlvQnV0dG9uU2VsZWN0ZWRcIik7XG4gICAgICAgIH07XG4gICAgfTtcblxuICAgIHNlbGYuX2dldExheW91dEVsZW1lbnRPbkNsaWNrID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vVG9nZ2xlIEFjdGl2ZSBTdGF0ZVxuICAgICAgICAgICAgc2VsZi5fTGF5b3V0RWxlbWVudHNbZWxlbWVudF0gPSAhc2VsZi5fTGF5b3V0RWxlbWVudHNbZWxlbWVudF07XG5cbiAgICAgICAgICAgIC8vJChcIiNleHBvcnRPcHRpb25zIC5jaGVja2JveFwiKS5yZW1vdmVDbGFzcyhcImNoZWNrZWRcIik7XG4gICAgICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdjaGVja2VkJyk7XG4gICAgICAgIH07XG4gICAgfTtcblxuICAgIHNlbGYuX3JlbW92ZUFsbFNlbGVjdGVkUmFkaW9CdXR0b25zID0gZnVuY3Rpb24gKHBhcmVudERpdklEKSB7XG4gICAgICAgICQuZWFjaCgkKFwiI1wiICsgcGFyZW50RGl2SUQgKyBcIiAuZXhwb3J0UmFkaW9CdXR0b25TZWxlY3RlZFwiKSwgZnVuY3Rpb24gKGlkeCwgbm9kZSkge1xuICAgICAgICAgICAgJChub2RlKS5yZW1vdmVDbGFzcyhcImV4cG9ydFJhZGlvQnV0dG9uU2VsZWN0ZWRcIik7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBzZWxmLl9oaWRlTG9hZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAkKFwiLmtuaWdodFJpZGVyTG9hZGVyXCIpLmNzcyh7XCJkaXNwbGF5XCI6IFwibm9uZVwifSk7XG4gICAgfVxuXG4gICAgc2VsZi5fc2hvd0xvYWRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJChcIi5rbmlnaHRSaWRlckxvYWRlclwiKS5jc3Moe1wiZGlzcGxheVwiOiBcImJsb2NrXCJ9KTtcbiAgICB9XG5cbiAgICB0aGlzLnNob3dFeHBvcnRPcHRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoXCIjZXhwb3J0T3B0aW9uc1wiKS5jc3MoeyBcImRpc3BsYXlcIjogXCJibG9ja1wiIH0pO1xuICAgIH1cblxuICAgIHRoaXMuaGlkZUV4cG9ydE9wdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJChcIiNleHBvcnRPcHRpb25zXCIpLmNzcyh7IFwiZGlzcGxheVwiOiBcIm5vbmVcIiB9KTtcbiAgICB9XG5cbiAgICBzZWxmLl9raWxsT3BlbkltYWdlQnV0dG9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvL0hpZGUgJ29wZW4gaW1hZ2UnIGJ1dHRvbiBhbmQgc2hvdyBleHBvcnQgYnV0dG9uLlxuICAgICAgICBzZWxmLl9zaG93RXhwb3J0QnV0dG9uSGlkZUxvYWRlcigpO1xuICAgICAgICAkKFwiLmltYWdlT3BlbkJ1dHRvblwiKS5jc3Moe1wiZGlzcGxheVwiOiBcIm5vbmVcIn0pO1xuICAgIH1cblxuICAgIHNlbGYuX29uRXJyb3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNlbGYuX2hpZGVXYWl0aW5nUGFuZWwoKTtcbiAgICAgICAgLy9EaXNwbGF5IGVycm9yIG1lc3NhZ2UuXG4gICAgICAgICQoXCIuZXhwb3J0R3JvdXBUaXRsZS5lcnJvclwiKS5yZXBsYWNlKFwiPHNwYW4+VGhlcmUgd2FzIGFuIGVycm9yIGV4cG9ydGluZyB0aGUgaW1hZ2UuPC9zcGFuPlwiKTtcbiAgICAgICAgJChcIi5leHBvcnRHcm91cFRpdGxlLmVycm9yXCIpLmNzcyh7XCJkaXNwbGF5XCI6IFwiYmxvY2tcIn0pO1xuICAgIH1cblxuICAgIHNlbGYuX2V4cG9ydEltYWdlID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIHZhciB0aXRsZUhUTUwgPSBcIlRpdGxlXCI7XG5cbiAgICAgICAgLy92YXIgbGVnZW5kc0hUTUwgPSAkKCc8ZGl2PicpLmFwcGVuZCgkKFwiI0xheWVyTGlzdFdyYXBwZXJcIikuY2xvbmUoKSkuaHRtbCgpLnJlcGxhY2UoL1xcXCIvZywgJ1xcXFxcIicpO1xuXG5cbiAgICAgICAgdmFyIGxheW91dFdpZHRoID0gJChcImJvZHlcIikud2lkdGgoKTtcbiAgICAgICAgdmFyIG1hcEhlaWdodCA9ICQoXCIjTWFwQ3RybFwiKS5oZWlnaHQoKTtcbiAgICAgICAgdmFyIG1hcFdpZHRoID0gJChcIiNNYXBDdHJsXCIpLndpZHRoKCk7XG5cbiAgICAgICAgdmFyIGNvZGVibG9jayA9IFwiXCI7XG4gICAgICAgIC8vQWRqdXN0IGJvZHkgd2lkdGhcbiAgICAgICAgY29kZWJsb2NrICs9ICckKFwiYm9keVwiKS53aWR0aCgnICsgKG1hcFdpZHRoICsgMjApICsgJyk7JztcblxuICAgICAgICAvL3Nob3cgbG9hZGVyXG4gICAgICAgIHNlbGYuX3Nob3dXYWl0aW5nUGFuZWwoKTtcblxuICAgICAgICAvL2Zvcm1hdHRpbmdcbiAgICAgICAgLy9jb2RlYmxvY2sgPSBjb2RlYmxvY2sucmVwbGFjZSgvKFxcclxcbnxcXG58XFxyKS9nbSwgXCJcIik7ICAvL3JlbW92ZSBsaW5lIGJyZWFrc1xuXG4gICAgICAgIHZhciBwcmludFBvc3RBcmdzID0ge1xuICAgICAgICAgICAgLy91cmw6ICdodHRwOi8vZ2VvLnJlZGNyb3NzLmNvbS9tYXBmb2xpby9wcmludC5odG0nLFxuICAgICAgICAgICAgdXJsOiAkc2NvcGUucm91dGVVcmwuaHJlZi5yZXBsYWNlKFwibWFwZm9saW8vI1wiLCBcIm1hcGZvbGlvL3ByaW50Lmh0bWwjXCIpLnJlcGxhY2UoXCJtYXBmb2xpby9pbmRleC5odG1sI1wiLCBcIm1hcGZvbGlvL3ByaW50Lmh0bWwjXCIpLnJlcGxhY2UoXCIvZXhwb3J0XCIsIFwiXCIpLnJlcGxhY2UoXCJodHRwOi8vbG9jYWxob3N0OjMwMDFcIiwgXCJodHRwczovL2dlby5yZWRjcm9zcy5vcmdcIiksIC8vU3dhcCB0aGUgY3VycmVudCB1cmwgZm9yIHRoZSBwcmludCB1cmxcbiAgICAgICAgICAgIGltYWdlZm9ybWF0OiBzZWxmLl9JbWFnZUZvcm1hdCB8fCAncG5nJyxcbiAgICAgICAgICAgIGZvcm1hdDogJ2pzb24nLFxuICAgICAgICAgICAgLy9jb2RlYmxvY2s6IGNvZGVibG9jayxcbiAgICAgICAgICAgIHZpZXdwb3J0aGVpZ2h0OiBtYXBIZWlnaHQsXG4gICAgICAgICAgICB2aWV3cG9ydHdpZHRoOiBsYXlvdXRXaWR0aCxcbiAgICAgICAgICAgIGRlbGF5OiA1MDAwIC8vdGltZSB0byB3YWl0IGluIG1zXG4gICAgICAgIH07XG5cblxuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXG4gICAgICAgICAgICB1cmw6ICdodHRwOi8vcHJpbnQuc3BhdGlhbGRldi5jb20nLFxuICAgICAgICAgICAgZGF0YTogcHJpbnRQb3N0QXJncyxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHNlbGYuX29uSW1hZ2VFeHBvcnQsXG4gICAgICAgICAgICBlcnJvcjogc2VsZi5fb25FcnJvclxuICAgICAgICB9KTtcblxuICAgIH07XG5cbiAgICBzZWxmLl9vbkltYWdlRXhwb3J0ID0gZnVuY3Rpb24gKHJlc3VsdCkge1xuXG4gICAgICAgIHZhciBleHBvcnRJbWFnZVVSTCA9IHJlc3VsdC5pbWFnZTtcblxuICAgICAgICAvL2luc3RlYWQsIHNob3cgYSBidXR0b24vaHlwZXJsaW5rIGZvciB0aGUgdXNlciB0byBvcGVuIHRoZSBpbWFnZS5cbiAgICAgICAgJChcIi5pbWFnZU9wZW5CdXR0b24gYVwiKS5hdHRyKFwiaHJlZlwiLCBleHBvcnRJbWFnZVVSTCk7XG4gICAgICAgICQoXCIuaW1hZ2VPcGVuQnV0dG9uXCIpLmNzcyh7XCJkaXNwbGF5XCI6IFwiYmxvY2tcIn0pO1xuXG4gICAgICAgIC8vSGlkZSBsb2FkZXJcbiAgICAgICAgc2VsZi5faGlkZUxvYWRlcigpO1xuICAgIH07XG5cbiAgICBzZWxmLl9pbml0KCk7XG59KTtcbiIsIi8qKlxuICogQ3JlYXRlZCBieSBOaWNob2xhcyBIYWxsYWhhbiA8bmhhbGxhaGFuQHNwYXRpYWxkZXYuY29tPlxuICogICAgICAgb24gMy8yNy8xNC5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdHZW9Bbmd1bGFyJykuY29udHJvbGxlcignRmlsdGVyc0N0cmwnLCBmdW5jdGlvbiAoJHNjb3BlLCAkaHR0cCwgJHN0YXRlLCAkc3RhdGVQYXJhbXMsJHRpbWVvdXQpIHtcbiAgJHNjb3BlLmZpbHRlck1vZGUgPSBcInByb2plY3RcIjsgLy9XaGljaCB0aGVtZSBhcmUgd2UgZmlsdGVyaW5nP1xuICAkc2NvcGUucGFyYW1zID0gJHN0YXRlUGFyYW1zO1xuICAkc2NvcGUuc2VhcmNoVGV4dCA9ICcnO1xuICAkc2NvcGUubmF2VGFiID0gJ3NlY3RvcnMnO1xuICAkc2NvcGUuc2VjdG9ycyA9IFtdO1xuICAkc2NvcGUuc2VsZWN0ZWQgPSBmYWxzZTtcbiAgJHNjb3BlLmRpc2FzdGVyVHlwZXMgPSBbXTtcbiAgJHNjb3BlLnN0YXR1cyA9IFtdO1xuICAkc2NvcGUuZGlzYXN0ZXJUeXBlc2NhdGVnb3J5ID0ge307XG4gIGRlYnVnLmJ1ZGdldCA9ICRzY29wZS5idWRnZXQgPSB7XG4gICAgc2xpZGVyOiBbMjAwMCwgODAwMF0sXG4gICAgbWluOiAwLFxuICAgIG1lYW46IDUwMDAsXG4gICAgbWF4OiAxMDAwMDBcbiAgfTtcblxuICAvKipcbiAgICogR2V0IGNoZWNrYm94IGluZm8gdGhhdCB3YXMgZ2VuZXJhdGVkIGJ5IHRoZSBTdWNjdWJ1cy5cbiAgICovXG4gICRodHRwLmdldCgnc3VjY3VidXNfZ2l0aWdub3JlL3NmLXByb2plY3QtZmlsdGVyLWNoZWNrYm94ZXMuanNvbicsIHtjYWNoZTogdHJ1ZX0pLnN1Y2Nlc3MoZnVuY3Rpb24gKGRhdGEsIHN0YXR1cykge1xuICAgIGFuZ3VsYXIuZXh0ZW5kKCRzY29wZSwgZGF0YSk7XG4gICAgZGVidWcuZmlsdGVyc1Njb3BlID0gJHNjb3BlO1xuICB9KS5lcnJvcihmdW5jdGlvbiAoKSB7XG4gICAgY29uc29sZS5lcnJvcihcIlVuYWJsZSB0byBmZXRjaCBwcm9qZWN0IGZpbHRlciBtZXRhIGRhdGFcIik7XG4gIH0pO1xuXG4gICRodHRwLmdldCgnc3VjY3VidXNfZ2l0aWdub3JlL3NmLWRpc2FzdGVyLWZpbHRlci1jaGVja2JveGVzLmpzb24nLCB7Y2FjaGU6IHRydWV9KS5zdWNjZXNzKGZ1bmN0aW9uIChkYXRhLCBzdGF0dXMpIHtcbiAgICBhbmd1bGFyLmV4dGVuZCgkc2NvcGUsIGRhdGEpO1xuICAgIGRlYnVnLmZpbHRlcnNTY29wZSA9ICRzY29wZTtcbiAgICAkc2NvcGUuY2F0ZWdvcml6ZURpc2FzdGVyRmlsdGVycygpO1xuICB9KS5lcnJvcihmdW5jdGlvbiAoKSB7XG4gICAgY29uc29sZS5lcnJvcihcIlVuYWJsZSB0byBmZXRjaCBwcm9qZWN0IGZpbHRlciBtZXRhIGRhdGFcIik7XG4gIH0pO1xuXG4gIC8vIHRha2UgYXJyYXkgb2YgZGlzYXN0ZXIgdHlwZXMgYW5kIGNyZWF0ZSBhIG5ldyBvYmplY3QgdGhhdCBzZXBhcmF0ZXMgYnkgY2F0ZWdvcnlcbiAgJHNjb3BlLmNhdGVnb3JpemVEaXNhc3RlckZpbHRlcnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgJHNjb3BlLnNlYXJjaExpc3QgPSBbXTtcbiAgICB2YXIgZHQgPSAkc2NvcGUuZGlzYXN0ZXJUeXBlcztcbiAgICB2YXIgcCA9IG51bGw7XG4gICAgdmFyIGFyciA9IFtdO1xuICAgIHZhciBjVHlwZXMgPSB7fTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGR0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoZHRbaV0ubmFtZS5pbmRleE9mKCctLS0nKSAhPT0gLTEpIHtcbiAgICAgICAgYXJyID0gW107XG4gICAgICAgIGNUeXBlc1tkdFtpXS5uYW1lLnJlcGxhY2UoXCItLS0gXCIsIFwiXCIpLnJlcGxhY2UoXCIgLS0tXCIsIFwiXCIpXSA9IHt9O1xuICAgICAgICBwID0gZHRbaV0ubmFtZS5yZXBsYWNlKFwiLS0tIFwiLCBcIlwiKS5yZXBsYWNlKFwiIC0tLVwiLCBcIlwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICRzY29wZS5zZWFyY2hMaXN0LnB1c2goZHRbaV0pO1xuICAgICAgfVxuICAgICAgaWYgKGR0W2ldLm5hbWUuaW5kZXhPZignLS0tJykgPT0gLTEpIHtcbiAgICAgICAgYXJyLnB1c2goZHRbaV0pO1xuICAgICAgICBjVHlwZXNbcF0gPSBhcnI7XG4gICAgICB9XG4gICAgfVxuICAgICRzY29wZS5kaXNhc3RlclR5cGVzY2F0ZWdvcnkgPSBjVHlwZXM7XG4gIH07XG5cbiAgJHNjb3BlLmNsb3NlUGFuZWxzID0gZnVuY3Rpb24gKCl7XG4gICAgZm9yICh2YXIgcGFyYW0gaW4gJHN0YXRlUGFyYW1zKSB7XG4gICAgICBpZiAoJHN0YXRlUGFyYW1zW3BhcmFtXSA9PT0gJ29wZW4nKSB7XG4gICAgICAgICRzdGF0ZVBhcmFtc1twYXJhbV0gPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICAkc2NvcGUuJG9uKCd0aGVtZS11cGRhdGUnLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCRzdGF0ZVBhcmFtcy50aGVtZSA9PSAnZGlzYXN0ZXInIHx8ICRzdGF0ZVBhcmFtcy50aGVtZSA9PSAnZGlzYXN0ZXJUeXBlJykge1xuICAgICAgJHNjb3BlLm5hdlRhYiA9ICdkaXNhc3RlclR5cGUnO1xuICAgIH07XG4gICAgaWYgKCRzdGF0ZVBhcmFtcy50aGVtZSA9PSAncHJvamVjdCcpIHtcbiAgICAgICRzY29wZS5uYXZUYWIgPSAnc2VjdG9ycyc7XG4gICAgfTtcblxuICAgIC8vJHNjb3BlLmNsb3NlUGFuZWxzKCk7IC8vIGNsb3NlIGFsbCBwYW5lbHMgb24gdGhlbWUgY2hhbmdlXG5cbiAgICAvL2NsZWFyIHRoZW1lIGZpbHRlcnNcbiAgICBpZiAoJHN0YXRlUGFyYW1zLmZpbHRlcnMgIT09IG51bGwpIHtcblxuICAgICAgLy8gb25seSBjbGVhciBmaWx0ZXJzIHdoZW4gc3dpdGNoaW5nIGZyb20gcHJvamVjdCB0byBkaXNhc3RlcjsgYW5kIHZpY2UgdmVyc2FcbiAgICAgIGlmKCgkc3RhdGVQYXJhbXMudGhlbWUuaW5kZXhPZignZGlzYXN0ZXInKSE9PS0xICYmICgkc3RhdGVQYXJhbXMuZmlsdGVycyAmJiAkc3RhdGVQYXJhbXMuZmlsdGVycy5pbmRleE9mKFwic2VjdG9yX19jXCIpIT09LTEpKSkge1xuICAgICAgICAgIGRlbGV0ZSAkc3RhdGVQYXJhbXMuZmlsdGVycztcbiAgICAgICAgICB2YXIgc3RhdGUgPSAkc3RhdGUuY3VycmVudC5uYW1lIHx8ICdtYWluJztcbiAgICAgICAgICAkc3RhdGUuZ28oc3RhdGUsICRzdGF0ZVBhcmFtcyk7XG4gICAgICAgIH1cblxuICAgICAgaWYoJHN0YXRlUGFyYW1zLnRoZW1lLmluZGV4T2YoJ3Byb2plY3QnKSE9PS0xICYmICgkc3RhdGVQYXJhbXMuZmlsdGVycyAmJiAkc3RhdGVQYXJhbXMuZmlsdGVycy5pbmRleE9mKFwiZGlzYXN0ZXJfdHlwZV9fY1wiKSE9PS0xKSkge1xuICAgICAgICBkZWxldGUgJHN0YXRlUGFyYW1zLmZpbHRlcnM7XG4gICAgICAgIHZhciBzdGF0ZSA9ICRzdGF0ZS5jdXJyZW50Lm5hbWUgfHwgJ21haW4nO1xuICAgICAgICAkc3RhdGUuZ28oc3RhdGUsICRzdGF0ZVBhcmFtcyk7XG5cbiAgICAgIH1cblxuICAgICAgLy9lbHNlIHtcbiAgICAgIC8vICAvL2RlbGV0ZSAkc3RhdGVQYXJhbXMuZmlsdGVycztcbiAgICAgIC8vICAvLy8vJHN0YXRlUGFyYW1zLmZpbHRlcnMgPSBudWxsOyAvL2NsZWFyIHRoZW1lIGZpbHRlcnNcbiAgICAgIC8vICAvL3ZhciBzdGF0ZSA9ICRzdGF0ZS5jdXJyZW50Lm5hbWUgfHwgJ21haW4nO1xuICAgICAgLy8gIC8vJHN0YXRlLmdvKHN0YXRlLCAkc3RhdGVQYXJhbXMpO1xuICAgICAgLy99XG5cbiAgICB9XG4gIH0pO1xuXG4gIHZhciBkZWNvZGVEaXNhc3RlckZpbHRlcnNVUkwgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHN0ciA9IGRlY29kZVVSSUNvbXBvbmVudChlbmNvZGVVUklDb21wb25lbnQoJHN0YXRlUGFyYW1zLmZpbHRlcnMpKTtcbiAgICB2YXIgaW5kZXggPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHN0cltpXSA9PT0gXCIlXCIpIGluZGV4LnB1c2goaSk7XG4gICAgfVxuXG4gICAgdmFyIGFyciA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaW5kZXgubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFyci5wdXNoKHN0ci5zdWJzdHJpbmcoaW5kZXhbaV0gKyAxLCBpbmRleFtpICsgMV0pKTtcbiAgICAgIGkgPSBpICsgMTtcbiAgICB9XG5cbiAgICBpZiAoJHN0YXRlUGFyYW1zLmZpbHRlcnMgIT09IG51bGwgJiYgJHN0YXRlUGFyYW1zLmZpbHRlcnMgIT09IFwiXCJcbiAgICAgICYmICRzdGF0ZVBhcmFtcy5maWx0ZXJzICE9PSBcIm51bGxcIiAmJiB0eXBlb2YgJHN0YXRlUGFyYW1zLmZpbHRlcnMgIT09ICd1bmRlZmluZWQnKXtcbiAgICAgIHZhciBkaXNhc3RlcnMgPSAkc2NvcGUuZGlzYXN0ZXJUeXBlcztcbiAgICAgICRzY29wZS5zZWN0b3JDbGF1c2UgPSBudWxsO1xuICAgICAgdmFyIGZpcnN0ID0gdHJ1ZTtcbiAgICAgIGZvciAodmFyIHMgPSAwOyBzIDwgYXJyLmxlbmd0aDsgcysrKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBkaXNhc3RlcnMubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgICAgICAgICB2YXIgZGlzYXN0ZXIgPSBkaXNhc3RlcnNbaV07XG4gICAgICAgICAgaWYgKGFycltzXS5pbmRleE9mKGRpc2FzdGVyLm5hbWUpICE9PSAtMSkge1xuICAgICAgICAgICAgaWYgKGZpcnN0KSB7XG4gICAgICAgICAgICAgIGRpc2FzdGVyLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAkc2NvcGUuc2VjdG9yQ2xhdXNlID0gXCJkaXNhc3Rlcl90eXBlX19jIExJS0UgJyVcIiArIGRpc2FzdGVyLm5hbWUgKyBcIiUnIFwiO1xuICAgICAgICAgICAgICBmaXJzdCA9IGZhbHNlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZGlzYXN0ZXIuY2hlY2tlZCA9IHRydWU7XG4gICAgICAgICAgICAgICRzY29wZS5zZWN0b3JDbGF1c2UgKz0gXCJPUiBkaXNhc3Rlcl90eXBlX19jIExJS0UgJyVcIiArIGRpc2FzdGVyLm5hbWUgKyBcIiUnIFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICB2YXIgZGVjb2RlUHJvamVjdEZpbHRlcnNVUkwgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHN0ciA9IGRlY29kZVVSSUNvbXBvbmVudChlbmNvZGVVUklDb21wb25lbnQoJHN0YXRlUGFyYW1zLmZpbHRlcnMpKTtcbiAgICB2YXIgaW5kZXggPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHN0cltpXSA9PT0gXCIlXCIpIGluZGV4LnB1c2goaSk7XG4gICAgfVxuXG4gICAgdmFyIGFyciA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaW5kZXgubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFyci5wdXNoKHN0ci5zdWJzdHJpbmcoaW5kZXhbaV0gKyAxLCBpbmRleFtpICsgMV0pKTtcbiAgICAgIGkgPSBpICsgMTtcbiAgICB9XG5cbiAgICBpZiAoJHN0YXRlUGFyYW1zLmZpbHRlcnMgIT09IG51bGwgJiYgJHN0YXRlUGFyYW1zLmZpbHRlcnMgIT09IFwiXCJcbiAgICAgICYmICRzdGF0ZVBhcmFtcy5maWx0ZXJzICE9PSBcIm51bGxcIiAmJiB0eXBlb2YgJHN0YXRlUGFyYW1zLmZpbHRlcnMgIT09ICd1bmRlZmluZWQnKXtcbiAgICAgIHZhciBzZWN0b3JzID0gJHNjb3BlLnNlY3RvcnM7XG4gICAgICAkc2NvcGUuc2VjdG9yQ2xhdXNlID0gbnVsbDtcbiAgICAgIHZhciBmaXJzdCA9IHRydWU7XG4gICAgICBmb3IgKHZhciBzID0gMDsgcyA8IGFyci5sZW5ndGg7IHMrKykge1xuICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gc2VjdG9ycy5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICAgICAgICAgIHZhciBzZWN0b3IgPSBzZWN0b3JzW2ldO1xuICAgICAgICAgIGlmIChhcnJbc10uaW5kZXhPZihzZWN0b3IubmFtZSkgIT09IC0xKSB7XG4gICAgICAgICAgICBpZiAoZmlyc3QpIHtcbiAgICAgICAgICAgICAgc2VjdG9yLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAkc2NvcGUuc2VjdG9yQ2xhdXNlID0gXCJzZWN0b3JfX2MgTElLRSAnJVwiICsgc2VjdG9yLm5hbWUgKyBcIiUnIFwiO1xuICAgICAgICAgICAgICBmaXJzdCA9IGZhbHNlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgc2VjdG9yLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAkc2NvcGUuc2VjdG9yQ2xhdXNlID0gXCJzZWN0b3JfX2MgTElLRSAnJVwiICsgc2VjdG9yLm5hbWUgKyBcIiUnIFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICAkc2NvcGUuJG9uKCdmaWx0ZXJzLXVwZGF0ZScsIGZ1bmN0aW9uICgpIHtcblxuICAgIGlmKCRzdGF0ZVBhcmFtcy50aGVtZS5pbmRleE9mKCdkaXNhc3RlcicpIT09LTEpIGRlY29kZURpc2FzdGVyRmlsdGVyc1VSTCgpO1xuICAgIGlmKCRzdGF0ZVBhcmFtcy50aGVtZSA9PSAncHJvamVjdCcpIGRlY29kZVByb2plY3RGaWx0ZXJzVVJMKCk7XG5cbiAgfSk7XG5cblxuICAvKipcbiAgICogR2V0IGJ1ZGdldCBzdGF0cyBmcm9tIENodWJicyAtIGR5bmFtaWMgZnJvbSBQb3N0R0lTLlxuICAgKi9cbiAgJGh0dHAuZ2V0KGNvbmZpZy5jaHViYnNQYXRoKCdzZXJ2aWNlcy9jdXN0b20vY3VzdG9tX29wZXJhdGlvbj9uYW1lPXByb2plY3R0b3RhbGJ1ZGdldCZmb3JtYXQ9anNvbicpLCB7Y2FjaGU6IHRydWV9KS5zdWNjZXNzKGZ1bmN0aW9uIChkYXRhLCBzdGF0dXMpIHtcbiAgICBpZiAoZGF0YS5sZW5ndGggPiAwKSB7XG4gICAgICAkc2NvcGUuYnVkZ2V0Lm1pbiA9IGRhdGFbMF0ubWluO1xuICAgICAgJHNjb3BlLmJ1ZGdldC5tZWFuID0gZGF0YVswXS5hdmc7XG4gICAgICAkc2NvcGUuYnVkZ2V0Lm1heCA9IGRhdGFbMF0ubWF4O1xuICAgICAgJHNjb3BlLmJ1ZGdldC5zbGlkZXIgPSBbZGF0YVswXS5taW4sIGRhdGFbMF0ubWF4XTtcbiAgICB9XG4gIH0pLmVycm9yKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiVW5hYmxlIHRvIGZldGNoIFRvdGFsIEJ1ZGdldCBNaW4sIE1lYW4sIE1heFwiKTtcbiAgfSk7XG5cbiAgJHNjb3BlLmRhdGVGaWx0ZXJzID0gW1xuICAgIHtcbiAgICAgIG5hbWU6ICdTdGFydCBEYXRlJyxcbiAgICAgIHJhZGlvOiAnb24nLFxuICAgICAgZW1wdHk6IHRydWUsXG4gICAgICBvcGVuZWQ6IGZhbHNlXG4gICAgfSwge1xuICAgICAgbmFtZTogJ0VuZCBEYXRlJyxcbiAgICAgIHJhZGlvOiAnb24nLFxuICAgICAgZW1wdHk6IHRydWUsXG4gICAgICBvcGVuZWQ6IGZhbHNlXG4gICAgfSwge1xuICAgICAgbmFtZTogJ0NyZWF0ZSBEYXRlJyxcbiAgICAgIHJhZGlvOiAnb24nLFxuICAgICAgZW1wdHk6IHRydWUsXG4gICAgICBvcGVuZWQ6IGZhbHNlXG4gICAgfSwge1xuICAgICAgbmFtZTogJ0xhc3QgTW9kaWZpZWQnLFxuICAgICAgcmFkaW86ICdvbicsXG4gICAgICBlbXB0eTogdHJ1ZSxcbiAgICAgIG9wZW5lZDogZmFsc2VcbiAgICB9XG4gIF07XG5cbiAgJHNjb3BlLnRvZ2dsZURhdGUgPSBmdW5jdGlvbiAoJGV2ZW50LCBkYXRlRmlsdGVyKSB7XG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgZGF0ZUZpbHRlci5vcGVuZWQgPSAhZGF0ZUZpbHRlci5vcGVuZWQ7XG4gIH07XG5cbiAgJHNjb3BlLnNlY3RvcnNGaWx0ZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlY3RvcnMgPSAkc2NvcGUuc2VjdG9ycztcbiAgICAkc2NvcGUuc2VjdG9yQ2xhdXNlID0gbnVsbDtcbiAgICB2YXIgZmlyc3QgPSB0cnVlO1xuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBzZWN0b3JzLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICB2YXIgc2VjdG9yID0gc2VjdG9yc1tpXTtcbiAgICAgIGlmIChzZWN0b3IuY2hlY2tlZCkge1xuICAgICAgICBpZiAoZmlyc3QpIHtcbiAgICAgICAgICAkc2NvcGUuc2VjdG9yQ2xhdXNlID0gXCJzZWN0b3JfX2MgTElLRSAnJVwiICsgc2VjdG9yLm5hbWUgKyBcIiUnIFwiO1xuICAgICAgICAgIGZpcnN0ID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgJHNjb3BlLnNlY3RvckNsYXVzZSArPSBcIk9SIHNlY3Rvcl9fYyBMSUtFICclXCIgKyBzZWN0b3IubmFtZSArIFwiJScgXCI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgJHNjb3BlLmNvbXBvc2VXaGVyZUNsYXVzZSgpO1xuICB9O1xuXG4gICRzY29wZS5kaXNhc3RlclR5cGVzRmlsdGVyID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBkaXNhc3RlcnMgPSAkc2NvcGUuZGlzYXN0ZXJUeXBlcztcbiAgICAkc2NvcGUuc2VjdG9yQ2xhdXNlID0gbnVsbDtcbiAgICB2YXIgZmlyc3QgPSB0cnVlO1xuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBkaXNhc3RlcnMubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgICAgIHZhciBkaXNhc3RlciA9IGRpc2FzdGVyc1tpXTtcbiAgICAgIGlmIChkaXNhc3Rlci5jaGVja2VkKSB7XG4gICAgICAgIGlmIChmaXJzdCkge1xuICAgICAgICAgICRzY29wZS5zZWN0b3JDbGF1c2UgPSBcImRpc2FzdGVyX3R5cGVfX2MgTElLRSAnJVwiICsgZGlzYXN0ZXIubmFtZSArIFwiJScgXCI7XG4gICAgICAgICAgZmlyc3QgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAkc2NvcGUuc2VjdG9yQ2xhdXNlICs9IFwiT1IgZGlzYXN0ZXJfdHlwZV9fYyBMSUtFICclXCIgKyBkaXNhc3Rlci5uYW1lICsgXCIlJyBcIjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAkc2NvcGUuY29tcG9zZVdoZXJlQ2xhdXNlKCk7XG4gIH07XG5cbiAgJHNjb3BlLmNsZWFyU2VjdG9yc0ZpbHRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2VjdG9ycyA9ICRzY29wZS5zZWN0b3JzO1xuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBzZWN0b3JzLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICBzZWN0b3JzW2ldLmNoZWNrZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgJHNjb3BlLnNlY3RvckNsYXVzZSA9IG51bGw7XG4gICAgJHNjb3BlLmNvbXBvc2VXaGVyZUNsYXVzZSgpO1xuICB9O1xuXG4gICRzY29wZS5jbGVhckRpc2FzdGVyVHlwZUZpbHRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZGlzYXN0ZXJzID0gJHNjb3BlLmRpc2FzdGVyVHlwZXM7XG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGRpc2FzdGVycy5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICAgICAgZGlzYXN0ZXJzW2ldLmNoZWNrZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgJHNjb3BlLnNlY3RvckNsYXVzZSA9IG51bGw7XG4gICAgJHNjb3BlLmNvbXBvc2VXaGVyZUNsYXVzZSgpO1xuXG4gICAgJHN0YXRlUGFyYW1zLmNhdGVnb3J5ID0gbnVsbDtcbiAgICAkc3RhdGVQYXJhbXMuZmlsdGVycyA9IG51bGw7XG4gIH07XG5cbiAgJHNjb3BlLmNsZWFyRGlzYXN0ZXJGaWx0ZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGRpc2FzdGVycyA9ICRzY29wZS5kaXNhc3RlclR5cGVzO1xuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBkaXNhc3RlcnMubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgICAgIGRpc2FzdGVyc1tpXS5jaGVja2VkID0gZmFsc2U7XG4gICAgfVxuICAgICRzY29wZS5zZWN0b3JDbGF1c2UgPSBudWxsO1xuICAgICRzY29wZS5jb21wb3NlV2hlcmVDbGF1c2UoKTtcbiAgfTtcblxuICAkc2NvcGUuc3RhdHVzRmlsdGVyID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzdGF0dXMgPSAkc2NvcGUuc3RhdHVzO1xuICAgICRzY29wZS5zdGF0dXNDbGF1c2UgPSBudWxsO1xuICAgIHZhciBmaXJzdCA9IHRydWU7XG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHN0YXR1cy5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICAgICAgdmFyIHN0YXQgPSBzdGF0dXNbaV07XG4gICAgICBpZiAoc3RhdC5jaGVja2VkKSB7XG4gICAgICAgIGlmIChmaXJzdCkge1xuICAgICAgICAgICRzY29wZS5zdGF0dXNDbGF1c2UgPSBcInN0YXR1c19fYyBMSUtFICclXCIgKyBzdGF0Lm5hbWUgKyBcIiUnIFwiO1xuICAgICAgICAgIGZpcnN0ID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgJHNjb3BlLnN0YXR1c0NsYXVzZSArPSBcIk9SIHN0YXR1c19fYyBMSUtFICclXCIgKyBzdGF0Lm5hbWUgKyBcIiUnIFwiO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgICRzY29wZS5jb21wb3NlV2hlcmVDbGF1c2UoKTtcbiAgfTtcblxuICAkc2NvcGUuY2xlYXJTdGF0dXNGaWx0ZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHN0YXR1cyA9ICRzY29wZS5zdGF0dXM7XG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHN0YXR1cy5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICAgICAgc3RhdHVzW2ldLmNoZWNrZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgJHNjb3BlLnN0YXR1c0NsYXVzZSA9IG51bGw7XG4gICAgJHNjb3BlLmNvbXBvc2VXaGVyZUNsYXVzZSgpO1xuICB9O1xuXG4gICRzY29wZS5kYXRlRmlsdGVyID0gZnVuY3Rpb24gKCkge1xuICAgICRzY29wZS5kYXRlQ2xhdXNlID0gbnVsbDtcbiAgICB2YXIgX2ZpcnN0ID0gdHJ1ZTtcbiAgICB2YXIgZmlyc3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoX2ZpcnN0KSB7XG4gICAgICAgIF9maXJzdCA9IGZhbHNlO1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgICB9XG4gICAgICByZXR1cm4gJyBBTkQgJztcbiAgICB9O1xuICAgIHZhciBkYXRlRmlsdGVycyA9ICRzY29wZS5kYXRlRmlsdGVycztcbiAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gZGF0ZUZpbHRlcnMubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgICAgIHZhciBmaWx0ZXIgPSBkYXRlRmlsdGVyc1tpXTtcblxuICAgICAgaWYgKGZpbHRlci5uYW1lID09PSAnU3RhcnQgRGF0ZScgJiYgZmlsdGVyLmRhdGUpIHtcbiAgICAgICAgJHNjb3BlLmRhdGVDbGF1c2UgPSBmaXJzdCgpICsgJ3N0YXJ0X2RhdGVfX2MnICsgY29tcGFyZShmaWx0ZXIpICsgXCInXCIgKyBkYXRlU3RyaW5nKGZpbHRlci5kYXRlKSArIFwiJ1wiO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKGZpbHRlci5uYW1lID09PSAnRW5kIERhdGUnICYmIGZpbHRlci5kYXRlKSB7XG4gICAgICAgICRzY29wZS5kYXRlQ2xhdXNlID0gZmlyc3QoKSArICdlbmRfZGF0ZV9fYycgKyBjb21wYXJlKGZpbHRlcikgKyBcIidcIiArIGRhdGVTdHJpbmcoZmlsdGVyLmRhdGUpICsgXCInXCI7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoZmlsdGVyLm5hbWUgPT09ICdDcmVhdGUgRGF0ZScgJiYgZmlsdGVyLmRhdGUpIHtcbiAgICAgICAgJHNjb3BlLmRhdGVDbGF1c2UgPSBmaXJzdCgpICsgJ2NyZWF0ZWRhdGUnICsgY29tcGFyZShmaWx0ZXIpICsgXCInXCIgKyBkYXRlU3RyaW5nKGZpbHRlci5kYXRlKSArIFwiJ1wiO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKGZpbHRlci5uYW1lID09PSAnTGFzdCBNb2RpZmllZCcgJiYgZmlsdGVyLmRhdGUpIHtcbiAgICAgICAgJHNjb3BlLmRhdGVDbGF1c2UgPSBmaXJzdCgpICsgJ2xhc3Rtb2RpZmllZGRhdGUnICsgY29tcGFyZShmaWx0ZXIpICsgXCInXCIgKyBkYXRlU3RyaW5nKGZpbHRlci5kYXRlKSArIFwiJ1wiO1xuICAgICAgfVxuXG4gICAgfVxuICAgICRzY29wZS5jb21wb3NlV2hlcmVDbGF1c2UoKTtcbiAgfTtcblxuICAkc2NvcGUuY2xlYXJEYXRlRmlsdGVyID0gZnVuY3Rpb24gKCkge1xuICAgICRzY29wZS5kYXRlRmlsdGVycyA9IFtcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ1N0YXJ0IERhdGUnLFxuICAgICAgICByYWRpbzogJ29uJyxcbiAgICAgICAgZW1wdHk6IHRydWUsXG4gICAgICAgIG9wZW5lZDogZmFsc2UsXG4gICAgICAgIGRhdGU6IG51bGxcbiAgICAgIH0sIHtcbiAgICAgICAgbmFtZTogJ0VuZCBEYXRlJyxcbiAgICAgICAgcmFkaW86ICdvbicsXG4gICAgICAgIGVtcHR5OiB0cnVlLFxuICAgICAgICBvcGVuZWQ6IGZhbHNlLFxuICAgICAgICBkYXRlOiBudWxsXG4gICAgICB9LCB7XG4gICAgICAgIG5hbWU6ICdDcmVhdGUgRGF0ZScsXG4gICAgICAgIHJhZGlvOiAnb24nLFxuICAgICAgICBlbXB0eTogdHJ1ZSxcbiAgICAgICAgb3BlbmVkOiBmYWxzZSxcbiAgICAgICAgZGF0ZTogbnVsbFxuICAgICAgfSwge1xuICAgICAgICBuYW1lOiAnTGFzdCBNb2RpZmllZCcsXG4gICAgICAgIHJhZGlvOiAnb24nLFxuICAgICAgICBlbXB0eTogdHJ1ZSxcbiAgICAgICAgb3BlbmVkOiBmYWxzZSxcbiAgICAgICAgZGF0ZTogbnVsbFxuICAgICAgfVxuICAgIF07XG4gICAgJHNjb3BlLmRhdGVDbGF1c2UgPSBudWxsO1xuICAgICRzY29wZS5jb21wb3NlV2hlcmVDbGF1c2UoKTtcbiAgfTtcblxuICAvKipcbiAgICogVXNlZCBpbiBkYXRlRmlsdGVyLiBEZXRlcm1pbmVzIHRoZSBwcm9wZXIgU1FMIGNvbXBhcmF0b3IgdG8gdXNlXG4gICAqIGZvciBmaWx0ZXJpbmcgYSBkYXRlLlxuICAgKlxuICAgKiBAcGFyYW0gZmlsdGVyXG4gICAqL1xuICBmdW5jdGlvbiBjb21wYXJlKGZpbHRlcikge1xuICAgIHZhciByYWRpbyA9IGZpbHRlci5yYWRpbztcbiAgICBpZiAocmFkaW8gPT09ICdvbicpIHtcbiAgICAgIHJldHVybiAnPSc7XG4gICAgfVxuICAgIGlmIChyYWRpbyA9PT0gJ2JlZm9yZScpIHtcbiAgICAgIHJldHVybiAnPCc7XG4gICAgfVxuICAgIGlmIChyYWRpbyA9PT0gJ2FmdGVyJykge1xuICAgICAgcmV0dXJuICc+JztcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBkYXRlIGFzIFlZWVktTU0tRERcbiAgICpcbiAgICogQHBhcmFtIGRhdGVcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICovXG4gIGZ1bmN0aW9uIGRhdGVTdHJpbmcoZGF0ZSkge1xuICAgIHJldHVybiBkYXRlLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApO1xuICB9XG5cbiAgJHNjb3BlLmJ1ZGdldEZpbHRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAkc2NvcGUuYnVkZ2V0Q2xhdXNlID0gbnVsbDtcbiAgICB2YXIgbWluID0gJHNjb3BlLmJ1ZGdldC5zbGlkZXJbMF07XG4gICAgdmFyIG1heCA9ICRzY29wZS5idWRnZXQuc2xpZGVyWzFdO1xuICAgIGlmIChtaW4gIT09IDAgJiYgbWF4ICE9PSAkc2NvcGUuYnVkZ2V0Lm1heCkgeyAvL2JvdGggbWluIGFuZCBtYXggY2hhbmdlZFxuICAgICAgJHNjb3BlLmJ1ZGdldENsYXVzZSA9ICd0b3RhbF9idWRnZXRfX2M+PScgKyBtaW4gKyAnIEFORCB0b3RhbF9idWRnZXRfX2M8PScgKyBtYXg7XG4gICAgfSBlbHNlIGlmIChtaW4gIT09IDApIHsgLy8gb25seSBtaW4gY2hhbmdlZFxuICAgICAgJHNjb3BlLmJ1ZGdldENsYXVzZSA9ICd0b3RhbF9idWRnZXRfX2M+PScgKyBtaW5cbiAgICB9IGVsc2UgaWYgKG1heCAhPT0gJHNjb3BlLmJ1ZGdldC5tYXgpIHsgLy8gb25seSBtYXggY2hhbmdlZFxuICAgICAgJHNjb3BlLmJ1ZGdldENsYXVzZSA9ICd0b3RhbF9idWRnZXRfX2M8PScgKyBtYXg7XG4gICAgfVxuICAgICRzY29wZS5jb21wb3NlV2hlcmVDbGF1c2UoKTtcbiAgfTtcblxuICAkc2NvcGUuY2xlYXJCdWRnZXRGaWx0ZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgJHNjb3BlLmJ1ZGdldC5zbGlkZXJbMF0gPSAkc2NvcGUuYnVkZ2V0Lm1pbjtcbiAgICAkc2NvcGUuYnVkZ2V0LnNsaWRlclsxXSA9ICRzY29wZS5idWRnZXQubWF4O1xuICAgICRzY29wZS5idWRnZXRDbGF1c2UgPSBudWxsO1xuICAgICRzY29wZS5jb21wb3NlV2hlcmVDbGF1c2UoKTtcbiAgfTtcblxuICAkc2NvcGUuY29tcG9zZVdoZXJlQ2xhdXNlID0gZnVuY3Rpb24gKCkge1xuICAgICRzY29wZS53aGVyZUNsYXVzZSA9IG51bGw7XG4gICAgdmFyIHBhcnRzID0gWyRzY29wZS5zZWN0b3JDbGF1c2UsICRzY29wZS5kYXRlQ2xhdXNlLCAkc2NvcGUuc3RhdHVzQ2xhdXNlLCAkc2NvcGUuYnVkZ2V0Q2xhdXNlXTtcbiAgICB2YXIgZmlyc3QgPSB0cnVlO1xuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBwYXJ0cy5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICAgICAgdmFyIHBhcnQgPSBwYXJ0c1tpXTtcbiAgICAgIGlmIChwYXJ0KSB7XG4gICAgICAgIGlmIChmaXJzdCkge1xuICAgICAgICAgICRzY29wZS53aGVyZUNsYXVzZSA9IHBhcnQ7XG4gICAgICAgICAgZmlyc3QgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAkc2NvcGUud2hlcmVDbGF1c2UgKz0gJ0FORCAnICsgcGFydDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoISRzY29wZS53aGVyZUNsYXVzZSkgJHNjb3BlLndoZXJlQ2xhdXNlID0gJ251bGwnO1xuICAgICRzY29wZS5zdWJtaXRGaWx0ZXIoKTtcbiAgfTtcblxuICAkc2NvcGUuc3VibWl0RmlsdGVyID0gZnVuY3Rpb24gKCkge1xuXG4gICAgaWYoJHN0YXRlUGFyYW1zLnRoZW1lLmluZGV4T2YoJ3Byb2plY3QnKSE9PS0xKSRzdGF0ZVBhcmFtcy5maWx0ZXJzID0gJHNjb3BlLndoZXJlQ2xhdXNlO1xuICAgIGlmKCRzdGF0ZVBhcmFtcy50aGVtZS5pbmRleE9mKCdkaXNhc3RlcicpIT09LTEpJHN0YXRlUGFyYW1zLmZpbHRlcnMgPSAkc2NvcGUuc2VjdG9yQ2xhdXNlO1xuXG4gICAgdmFyIHN0YXRlID0gJHN0YXRlLmN1cnJlbnQubmFtZSB8fCAnbWFpbic7XG4gICAgJHN0YXRlLmdvKHN0YXRlLCAkc3RhdGVQYXJhbXMpO1xuICB9O1xuXG4gICRzY29wZS5jbGVhckFsbEZpbHRlcnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgJHNjb3BlLmNsZWFyU2VjdG9yc0ZpbHRlcigpO1xuICAgICRzY29wZS5jbGVhclN0YXR1c0ZpbHRlcigpO1xuICAgICRzY29wZS5jbGVhckRhdGVGaWx0ZXIoKTtcbiAgICAkc2NvcGUuY2xlYXJCdWRnZXRGaWx0ZXIoKTtcbiAgICAkc2NvcGUuY2xlYXJEaXNhc3RlclR5cGVGaWx0ZXIoKTtcbiAgfTtcblxuICAvLyBwdXRzIHRoZSBjYXRlZ29yeSBpbiBVUkxcbiAgJHNjb3BlLnB1dENhdGVnb3J5VVJMID0gZnVuY3Rpb24gKGNhdGVnb3J5TmFtZSkge1xuICAgICAgaWYgKCRzdGF0ZVBhcmFtcy5jYXRlZ29yeSA9PSBjYXRlZ29yeU5hbWUpe1xuICAgICAgICAkc3RhdGVQYXJhbXMuY2F0ZWdvcnkgPSBudWxsO1xuICAgICAgICAkc3RhdGUuZ28oJHN0YXRlLmN1cnJlbnQubmFtZSwgJHN0YXRlUGFyYW1zKTtcbiAgICAgIH1lbHNle1xuICAgICAgICAkc3RhdGVQYXJhbXMuY2F0ZWdvcnkgPSBjYXRlZ29yeU5hbWU7XG4gICAgICAgICRzdGF0ZS5nbygkc3RhdGUuY3VycmVudC5uYW1lLCAkc3RhdGVQYXJhbXMpO1xuICAgICAgfVxuICB9O1xuXG4gICRzY29wZS5oYW5kbGVTZWFyY2ggPSBmdW5jdGlvbih2YWwpe1xuICAgIHZhciBkdCA9ICRzY29wZS5kaXNhc3RlclR5cGVzY2F0ZWdvcnk7XG4gICAgJHNjb3BlLnNlYXJjaFRleHQgPSB2YWw7XG4gICAgZm9yKHZhciBpPTA7aTxPYmplY3Qua2V5cyhkdCkubGVuZ3RoO2krKyl7XG4gICAgICB2YXIgYXJyID0gZHRbT2JqZWN0LmtleXMoZHQpW2ldXTtcbiAgICAgIGZvcih2YXIgej0wO3o8YXJyLmxlbmd0aDt6Kyspe1xuICAgICAgICBpZihhcnJbel0ubmFtZS5pbmRleE9mKHZhbCkhPT0tMSl7XG4gICAgICAgICAgJHN0YXRlUGFyYW1zLmNhdGVnb3J5ID0gT2JqZWN0LmtleXMoZHQpW2ldO1xuICAgICAgICAgICRzY29wZS5kaXNhc3RlclR5cGVzY2F0ZWdvcnlbT2JqZWN0LmtleXMoZHQpW2ldXVt6XS5pc1NlYXJjaEFjdGl2ZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdmFyIHN0YXRlID0gJHN0YXRlLmN1cnJlbnQubmFtZSB8fCAnbWFpbic7XG4gICAgJHN0YXRlLmdvKHN0YXRlLCAkc3RhdGVQYXJhbXMpO1xuICB9O1xuXG4gICRzY29wZS5oaWdobGlnaHRMYXllciA9IGZ1bmN0aW9uICh2YWwpe1xuICAgICRzY29wZS5zZWxlY3RlZCA9IHRydWU7XG4gICAgJHRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgIHZhciBkdCA9ICRzY29wZS5kaXNhc3RlclR5cGVzY2F0ZWdvcnk7XG4gICAgICBmb3IodmFyIGk9MDtpPE9iamVjdC5rZXlzKGR0KS5sZW5ndGg7aSsrKXtcbiAgICAgICAgdmFyIGFyciA9IGR0W09iamVjdC5rZXlzKGR0KVtpXV07XG4gICAgICAgIGZvcih2YXIgej0wO3o8YXJyLmxlbmd0aDt6Kyspe1xuICAgICAgICAgIGlmKGFyclt6XS5uYW1lLmluZGV4T2YodmFsKSE9PS0xKXtcbiAgICAgICAgICAgICRzY29wZS5kaXNhc3RlclR5cGVzY2F0ZWdvcnlbT2JqZWN0LmtleXMoZHQpW2ldXVt6XS5pc1NlYXJjaEFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgJHNjb3BlLnNlYXJjaFRleHQgPSAnJztcbiAgICAgICRzY29wZS5zZWxlY3RlZCA9IGZhbHNlO1xuICAgIH0sMjAwMCk7XG4gIH1cblxufSk7XG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgTmljaG9sYXMgSGFsbGFoYW4gPG5oYWxsYWhhbkBzcGF0aWFsZGV2LmNvbT5cbiAqICAgICAgIG9uIDMvMjcvMTQuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnR2VvQW5ndWxhcicpLmNvbnRyb2xsZXIoJ0luZm9DdHJsJywgZnVuY3Rpb24oJHNjb3BlKSB7XG4gICRzY29wZS5wYXJhbXMgPSAkc3RhdGVQYXJhbXM7XG59KTsiLCIvKipcbiAqIENyZWF0ZWQgYnkgTmljaG9sYXMgSGFsbGFoYW4gPG5oYWxsYWhhbkBzcGF0aWFsZGV2LmNvbT5cbiAqICAgICAgIG9uIDMvMjcvMTQuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnR2VvQW5ndWxhcicpLmNvbnRyb2xsZXIoJ0xheWVyc0N0cmwnLCBmdW5jdGlvbigkc2NvcGUsICRzdGF0ZSwgJHN0YXRlUGFyYW1zLCBMYXllckNvbmZpZywgVmVjdG9yUHJvdmlkZXIsICRyb290U2NvcGUpIHtcbiAgJHNjb3BlLnBhcmFtcyA9ICRzdGF0ZVBhcmFtcztcbiAgJHNjb3BlLnpvb20gPSBwYXJzZUludCgkc3RhdGVQYXJhbXMuem9vbSk7XG4gICRzY29wZS5uYXZUYWIgPSAnY29udGV4dHVhbCc7XG5cbiAgJHNjb3BlLmdpc3RzID0gW107IC8vaW5pdGlhbGl6ZSBhcyBlbXB0eVxuICAkc2NvcGUubWFwTGF5ZXJzID0gW107IC8vaW5pdGlhbGl6ZSBhcyBlbXB0eVxuXG4gICRzY29wZS5nYWRtMExhYmVsID0gJzAuIENvdW50cmllcyc7XG4gICRzY29wZS5nYWRtMUxhYmVsID0gJzEuIFN0YXRlIC8gUHJvdmluY2UnO1xuICAkc2NvcGUuZ2FkbTJMYWJlbCA9ICcyLiBDb3VudHkgLyBEaXN0cmljdCc7XG5cblxuICBkZWJ1Zy5MYXllckNvbmZpZyA9IExheWVyQ29uZmlnO1xuICBkZWJ1Zy5zZXRHYWRtTGV2ZWwgPSBWZWN0b3JQcm92aWRlci5zZXRHYWRtTGV2ZWw7XG5cbiAgJHNjb3BlLmdhZG1MZXZlbCA9ICRyb290U2NvcGUubGV2ZWwgfHwgMDtcblxuICAkc2NvcGUudGhlbWVMYWJlbHMgPSB7IGlzQ2hlY2tlZDogJHN0YXRlUGFyYW1zLnRoZW1lbGFiZWxzIHx8IHRydWUgfTtcblxuICAkc2NvcGUudGhlbWUgPSB7IGlzQ2hlY2tlZDogdHJ1ZSB9O1xuXG4gICRzY29wZS50aGVtZUxheWVyID0gTGF5ZXJDb25maWcudGhlbWU7XG5cbiAgJHNjb3BlLnVwZGF0ZUdhZG0gPSBmdW5jdGlvbiAobGV2ZWwpIHtcbiAgICAkc2NvcGUubGV2ZWwgPSBsZXZlbC50b1N0cmluZygpO1xuICAgIGlmKGxldmVsLnRvU3RyaW5nKCkgIT09ICRzY29wZS5nYWRtTGV2ZWwpIHtcbiAgICAgICRzY29wZS5nYWRtTGV2ZWwgPSBsZXZlbC50b1N0cmluZygpIHx8IFwiMFwiO1xuICAgICAgY29uc29sZS5sb2coJHNjb3BlLmdhZG1MZXZlbCk7XG4gICAgfTtcblxuICB9O1xuXG4gICRzY29wZS5jbG9zZVBhbmVscyA9IGZ1bmN0aW9uICgpe1xuICAgIGZvciAodmFyIHBhcmFtIGluICRzdGF0ZVBhcmFtcykge1xuICAgICAgaWYgKCRzdGF0ZVBhcmFtc1twYXJhbV0gPT09ICdvcGVuJykge1xuICAgICAgICAkc3RhdGVQYXJhbXNbcGFyYW1dID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgJHNjb3BlLnVwZGF0ZVRoZW1lTGFiZWwgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAoJHNjb3BlLnRoZW1lTGFiZWxzLmlzQ2hlY2tlZCA9PT0gdHJ1ZSkge1xuICAgICAgJHN0YXRlUGFyYW1zLnRoZW1lbGFiZWxzID0gJ3RydWUnO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIC8vcmVtb3ZlIGZyb20gc3RhdGVwYXJhbXNcbiAgICAgICRzdGF0ZVBhcmFtcy50aGVtZWxhYmVscyA9ICdmYWxzZSc7XG4gICAgfVxuXG4gICAgdmFyIHN0YXRlID0gJHN0YXRlLmN1cnJlbnQubmFtZSB8fCAnbWFpbic7XG4gICAgJHN0YXRlLmdvKHN0YXRlLCAkc3RhdGVQYXJhbXMpO1xuICB9O1xuXG4gIC8vVG9nZ2xlIEVDT1MgTGF5ZXIgLSBpZiBvZmYsIHRoZW4gdHVybiBvbiBhbmQgdmljZSB2ZXJzYS5cbiAgJHNjb3BlLnVwZGF0ZVRoZW1lID0gZnVuY3Rpb24oKSB7XG5cbiAgICB2YXIgbGF5ZXJzQXJyYXk7XG5cbiAgICBpZigkc3RhdGVQYXJhbXMubGF5ZXJzKXtcbiAgICAgIGxheWVyc0FycmF5ID0gJHN0YXRlUGFyYW1zLmxheWVycy5zcGxpdChcIixcIik7XG4gICAgfVxuICAgIGVsc2V7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKCRzY29wZS50aGVtZS5pc0NoZWNrZWQgPT09IHRydWUpIHtcblxuICAgICAgLy9SZW1vdmUgYWxsIEdBRE0gbGF5ZXJzLlxuICAgICAgYW5ndWxhci5mb3JFYWNoKGxheWVyc0FycmF5LCBmdW5jdGlvbiAodmFsdWUsIGtleSkge1xuICAgICAgICBpZiAoTGF5ZXJDb25maWcudGhlbWVMYXllcnMuaW5kZXhPZih2YWx1ZSkgPiAtMSkge1xuICAgICAgICAgIGxheWVyc0FycmF5LnNwbGljZShsYXllcnNBcnJheS5pbmRleE9mKHZhbHVlKSwgMSk7IC8vcmVtb3ZlIGFueSBHQURNc1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgLy9BZGQgaW4gdGhlIGdhZG0gbGF5ZXIgdG8gdGhlIGxheWVycyBsaXN0IGluIHRoZSBzdGF0ZXBhcmFtcy5cbiAgICAgIGxheWVyc0FycmF5LnB1c2goXCJnYWRtXCIgKyAkc2NvcGUuZ2FkbUxldmVsKTtcbiAgICAgICRzdGF0ZVBhcmFtcy5sYXllcnMgPSBsYXllcnNBcnJheS5qb2luKFwiLFwiKTtcblxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIC8vcmVtb3ZlIGZyb20gc3RhdGVwYXJhbXNcbiAgICAgIC8vUmVtb3ZlIGFsbCBHQURNIGxheWVycy5cbiAgICAgIGFuZ3VsYXIuZm9yRWFjaChsYXllcnNBcnJheSwgZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcbiAgICAgICAgaWYgKExheWVyQ29uZmlnLnRoZW1lTGF5ZXJzLmluZGV4T2YodmFsdWUpID4gLTEpIHtcbiAgICAgICAgICBsYXllcnNBcnJheS5zcGxpY2UobGF5ZXJzQXJyYXkuaW5kZXhPZih2YWx1ZSksIDEpOyAvL3JlbW92ZSBhbnkgR0FETXNcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgICRzdGF0ZVBhcmFtcy5sYXllcnMgPSBsYXllcnNBcnJheS5qb2luKFwiLFwiKTtcbiAgICB9XG5cbiAgICB2YXIgc3RhdGUgPSAkc3RhdGUuY3VycmVudC5uYW1lIHx8ICdtYWluJztcbiAgICAkc3RhdGUuZ28oc3RhdGUsICRzdGF0ZVBhcmFtcyk7XG5cbiAgICAvLyRzY29wZS5jbG9zZVBhcmFtKCdkZXRhaWxzLXBhbmVsJyk7XG5cbiAgfTtcblxuXG4gICRzY29wZS4kd2F0Y2goJ2dhZG1MZXZlbCcsIGZ1bmN0aW9uIChuZXdWYWx1ZSkge1xuICAgICRzY29wZS51cGRhdGVUaGVtZSgpO1xuICB9KTtcblxuICAvLyRzY29wZS4kb24oJ2xldmVsLXVwZGF0ZScsIGZ1bmN0aW9uICgpIHtcbiAgLy8gIFZlY3RvclByb3ZpZGVyLnNldEdhZG1MZXZlbCgkc3RhdGVQYXJhbXMubGV2ZWwpO1xuICAvLyAgJHNjb3BlLmdhZG1MZXZlbCA9ICRzdGF0ZVBhcmFtcy5sZXZlbFxuICAvL30pO1xuXG4gICRzY29wZS4kb24oJ3pvb20tdXBkYXRlJywgZnVuY3Rpb24gKCkge1xuICAgICRzY29wZS56b29tID0gcGFyc2VJbnQoJHN0YXRlUGFyYW1zLnpvb20pO1xuICB9KTtcblxuXG4gIC8qKlxuICAgKiBUaGlzIGlzIHRoZSBjb2xsZWN0aW9uIG9mIGFsbCBvZiB0aGUgbGF5ZXJzIHdlIGhhdmUuXG4gICAqIFRoaXMgaXMgdXNlZCBieSB0aGUgc2VhcmNoTGF5ZXJzRmlsdGVyLlxuICAgKi9cbiAgJHNjb3BlLmFsbExheWVycyA9IHt9O1xuICAvLyBidWlsZGluZyB0aGUgYWxsTGF5ZXJzIG1vZGVsXG4gIGZvciAodmFyIGsgaW4gTGF5ZXJDb25maWcpIHtcbiAgICB2YXIgbGF5ZXIgPSBMYXllckNvbmZpZ1trXTtcblxuICAgIC8vIFdlIGRvbid0IHdhbnQgdG8gc2hvdyBsYXllcnMgdGhhdCBhcmUgYmFzZW1hcHMsIGFuZCB3ZSBkb24ndCB3YW50IHRvIHNob3cgdGhlIGZpbmQgZnVuYy5cbiAgICAgIGlmICggIHR5cGVvZiBsYXllciA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgfHwgayA9PT0gJ2Jhc2VtYXBzJ1xuICAgICAgfHwgayA9PT0gJ2Jib3gnXG4gICAgICB8fCBsYXllci50eXBlID09PSAnYmFzZW1hcCcgKSB7XG5cbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgICRzY29wZS5hbGxMYXllcnNba10gPSBrZXlUb09iaihrKTtcbiAgfVxuXG4gICRzY29wZS5sYXllcnNQYW5lbHMgPSB7XG4vLyAgICAnQm91bmRhcmllcyc6IHt9LFxuLy8gICAgJ0dlb0pTT04nOiB7fSxcbi8vICAgICdLTUwnOiB7fSxcbi8vICAgICdDU1YnOiB7fSxcbi8vICAgICdXTVMnOiB7fSxcbiAgICAnQ29udGV4dHVhbCBsYXllcnM6Jzoge31cbiAgfTtcblxuICBmdW5jdGlvbiBidWlsZExheWVyc01vZGVsKCkge1xuICAgICRzY29wZS5sYXllcnNQYW5lbHNbJ0NvbnRleHR1YWwgbGF5ZXJzOiddID0ge307XG4gICAgZm9yICh2YXIgbGF5ZXJLZXkgaW4gTGF5ZXJDb25maWcpIHtcbiAgICAgIHZhciBsYXllciA9IExheWVyQ29uZmlnW2xheWVyS2V5XTtcblxuICAgICAgLy8gV2UgZG9uJ3Qgd2FudCB0byBzaG93IGxheWVycyB0aGF0IGFyZSBiYXNlbWFwcywgYW5kIHdlIGRvbid0IHdhbnQgdG8gc2hvdyB0aGUgZmluZCBmdW5jLlxuICAgICAgaWYgKCAgdHlwZW9mIGxheWVyID09PSAnZnVuY3Rpb24nXG4gICAgICAgIHx8IGxheWVyS2V5ID09PSAnYmFzZW1hcHMnXG4gICAgICAgIHx8IGxheWVyS2V5ID09PSAnYmJveCdcbiAgICAgICAgfHwgbGF5ZXIudHlwZSA9PT0gJ2Jhc2VtYXAnICkge1xuXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoISRzY29wZS4kc3RhdGVQYXJhbXMudGhlbWUpIHtcbiAgICAgICAgdmFyIHRoZW1lID0gJ3Byb2plY3QnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHRoZW1lID0gJHNjb3BlLiRzdGF0ZVBhcmFtcy50aGVtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWxheWVyLnRoZW1lIHx8IChsYXllci50aGVtZS50b0xvd2VyQ2FzZSgpICE9PSAnYWxsJyAmJiBsYXllci50aGVtZS50b0xvd2VyQ2FzZSgpICE9PSB0aGVtZSkgKSB7XG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgICRzY29wZS5sYXllcnNQYW5lbHNbJ0NvbnRleHR1YWwgbGF5ZXJzOiddW2xheWVyS2V5XSA9IGtleVRvT2JqKGxheWVyS2V5KTtcblxuICAgIH1cbiAgfVxuICBidWlsZExheWVyc01vZGVsKCk7XG5cbiAgZGVidWcubGF5ZXJzUGFuZWxzID0gJHNjb3BlLmxheWVyc1BhbmVscztcblxuICBmdW5jdGlvbiBrZXlUb09iaihrZXkpIHtcbiAgICB2YXIgdmFsID0gTGF5ZXJDb25maWdba2V5XTtcbiAgICBpZiAodHlwZW9mIHZhbCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHVybDogdmFsXG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gdmFsO1xuICB9XG5cbiAgLy9OSCBUT0RPOiBOb3QgeWV0IGZ1bGx5IGltcGxlbWVudGVkIC0gcG9zc2libGUgZXh0cmEgZmVhdHVyZS4uLlxuICAvKipcbiAgICogTGF5ZXJzIHRoYXQgYXJlIGFjdGl2ZSBvbiB0aGUgbWFwIGJ1dCBhcmUgbm90IG1lbnRpb25lZCBpbiBMYXllckNvbmZpZ1xuICAgKiBAdHlwZSB7e319XG4gICAqL1xuICAkc2NvcGUubm9tYWRMYXllcnMgPSB7fTtcblxuXG4gIC8qKlxuICAgKiBXaGVuIHRoZSByb3V0ZSBjaGFuZ2VzLCB3ZSBzaG91bGQgc2VlIHdoYXQgbGF5ZXJzIHdlIGhhdmUgb24gdGhlcmUgYW5kIGhhdmUgdGhlIGxheWVyc1xuICAgKiBpbiB0aGUgcGFuZWxzIGNoZWNrZWQgYWNjb3JkaW5nbHkuXG4gICAqL1xuICAkc2NvcGUuJG9uKCdsYXllcnMtdXBkYXRlJywgZnVuY3Rpb24oZXZ0LCBsYXllcnMpIHtcblxuICAgIGJ1aWxkTGF5ZXJzTW9kZWwoKTtcblxuICAgIC8vIGdpdGh1YiBnaXN0c1xuICAgICRzY29wZS5saXN0R2lzdHMoKTtcblxuICAgIC8vIHJlc2V0IHRoZSBub21hZCBsYXllcnNcbiAgICBmb3IgKHZhciBuayBpbiAkc2NvcGUubm9tYWRMYXllcnMpIHtcbiAgICAgICRzY29wZS5ub21hZExheWVyc1tua10uYWN0aXZlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gcmVzZXQgdGhlIGxheWVyIGNvbmZpZyBsYXllcnNcbiAgICBmb3IgKHZhciBsY2sgaW4gTGF5ZXJDb25maWcpIHtcbiAgICAgIGlmICh0eXBlb2YgTGF5ZXJDb25maWdbbGNrXSA9PT0gJ29iamVjdCcgJiYgTGF5ZXJDb25maWdbbGNrXSAhPT0gbnVsbCkge1xuICAgICAgICBMYXllckNvbmZpZ1tsY2tdLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIHRoZSBsYXllciBpcyBhY3RpdmUgaW4gbWFwIGxheWVyc1xuICAgICAqIEZvcmNlIGdhZG0wIG9uIGRpc2FzdGVyIHRoZW1lc1xuICAgICAqL1xuXG4gICAgdmFyIHRoZW1lID0gJHN0YXRlUGFyYW1zLnRoZW1lO1xuXG5cbiAgICAvL2ZvcmNlIGdhZG0wIG9uIGRpc2FzdGVyIHRoZW1lcyB3aGVuIHVzZXIgY2hhbmdlcyBnYWRtIGxldmVsXG4gICAgaWYodGhlbWUuaW5kZXhPZignZGlzYXN0ZXInKSE9PS0xICYmICRzdGF0ZVBhcmFtcy5sYXllcnMuc3BsaXQoXCIsXCIpWzFdICE9PSAnZ2FkbTAnKXtcblxuICAgICAgdmFyIGxheWVyc0FycmF5ID0gW107XG5cbiAgICAgIGlmKCRzdGF0ZVBhcmFtcy5sYXllcnMpe1xuICAgICAgICBsYXllcnNBcnJheSA9ICRzdGF0ZVBhcmFtcy5sYXllcnMuc3BsaXQoXCIsXCIpO1xuICAgICAgfVxuXG4gICAgICAvL1JlbW92ZSBhbGwgR0FETSBsYXllcnMuXG4gICAgICBsYXllcnNBcnJheS5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XG4gICAgICAgIGlmIChMYXllckNvbmZpZy50aGVtZUxheWVycy5pbmRleE9mKHZhbHVlKSA+IC0xKSB7XG4gICAgICAgICAgbGF5ZXJzQXJyYXkuc3BsaWNlKGxheWVyc0FycmF5LmluZGV4T2YodmFsdWUpLCAxKTsgLy9yZW1vdmUgYW55IEdBRE1zXG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICAvL0FkZCBpbiB0aGUgZ2FkbSBsYXllciB0byB0aGUgbGF5ZXJzIGxpc3QgaW4gdGhlIHN0YXRlcGFyYW1zLlxuICAgICAgbGF5ZXJzQXJyYXkucHVzaChcImdhZG0wXCIpO1xuICAgICAgJHN0YXRlUGFyYW1zLmxheWVycyA9IGxheWVyc0FycmF5LmpvaW4oXCIsXCIpO1xuICAgIH1cblxuXG4gICAgJHNjb3BlLm1hcExheWVycyA9ICRzdGF0ZVBhcmFtcy5sYXllcnMuc3BsaXQoXCIsXCIpO1xuXG4gICAgLy8gc2tpcCB0aGUgZmlyc3QgbGF5ZXIsIHRoZSBiYXNlbWFwXG4gICAgZm9yICh2YXIgaSA9IDEsIGxlbiA9IGxheWVycy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgdmFyIGwgPSBsYXllcnNbaV07XG4gICAgICAvLyBsYXllciBpcyBpbiB0aGUgbGF5ZXIgY29uZmlnXG4gICAgICBpZiAodHlwZW9mIExheWVyQ29uZmlnW2xdID09PSAnb2JqZWN0JyAmJiBMYXllckNvbmZpZ1tsXSAhPT0gbnVsbCkge1xuICAgICAgICBMYXllckNvbmZpZ1tsXS5hY3RpdmUgPSB0cnVlO1xuICAgICAgfVxuICAgICAgLy8gbGF5ZXIgaXMgYSBnaXRodWIgZ2lzdFxuICAgICAgZWxzZSBpZiAoJHNjb3BlLmdpc3RzICYmICRzY29wZS5naXN0c1tsXSkge1xuICAgICAgICAkc2NvcGUuZ2lzdHNbbF0uYWN0aXZlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIC8vIGxheWVyIGlzIGEgbm90IGluIHRoZSBsYXllciBjb25maWcuIGl0J3Mgbm9tYWRpYy5cbiAgICAgIGVsc2Uge1xuICAgICAgICAkc2NvcGUubm9tYWRMYXllcnNbbF0gPSB7XG4gICAgICAgICAgbmFtZTogbCxcbiAgICAgICAgICB1cmw6IGwsXG4gICAgICAgICAgYWN0aXZlOiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgfSk7XG5cbiAgJHNjb3BlLiRvbigncm91dGUtdXBkYXRlJywgZnVuY3Rpb24oKSB7XG4gICAgLy9DaGVjayB0aGUgc3RhdGVQYXJhbXNcbiAgICAvL1NwZWNpZmljYWxseSwgc2VlIGFib3V0IHRoZSBsYWJlbCBwcm9wZXJ0aWVzIGJlaW5nIGNoZWNrZWQuXG5cbiAgICB2YXIgY2hlY2tlZDtcblxuICAgIC8vU2VlIGlmIHdlIHNob3VsZCBzaG93IHRoZW1lIGJhZGdlcy9idWJibGVzIG9yIG5vdFxuICAgIGlmKCRzdGF0ZVBhcmFtcy50aGVtZWxhYmVscyAhPT0gbnVsbCAmJiAkc3RhdGVQYXJhbXMudGhlbWVsYWJlbHMgIT09IHVuZGVmaW5lZCl7XG4gICAgICBjaGVja2VkID0gJHN0YXRlUGFyYW1zLnRoZW1lbGFiZWxzO1xuICAgIH1cbiAgICBlbHNle1xuICAgICAgLy9pZiBub3QgcHJlc2VudCwgZGVmYXVsdCB0byB0cnVlXG4gICAgICBjaGVja2VkID0gJ3RydWUnO1xuICAgIH1cblxuICAgICRzY29wZS50aGVtZUxhYmVscyA9IHsgaXNDaGVja2VkOiAoY2hlY2tlZCA9PSAndHJ1ZScgPyB0cnVlIDogZmFsc2UpIH07XG5cbiAgICAvL1NlZSB3aGljaCwgaWYgYW55LCBnYWRtIGxldmVscyBpcyBhY3RpdmVcbiAgICBpZigkcm9vdFNjb3BlLmxldmVsKXtcbiAgICAgICRzY29wZS5nYWRtTGV2ZWwgPSAkcm9vdFNjb3BlLmxldmVsO1xuICAgIH1cblxuICB9KTtcblxuXG4gICRzY29wZS50b2dnbGVNYXBMYXllciA9IGZ1bmN0aW9uIChsYXllcktleSwgbGF5ZXIpIHtcblxuICAgIC8vIGFkZCBsYXllclxuICAgIGlmIChsYXllci5hY3RpdmUgPT09IHRydWUpIHtcbiAgICAgICRzY29wZS5tYXBMYXllcnMucHVzaChsYXllcktleSk7XG5cbiAgICAvLyByZW1vdmUgbGF5ZXJcbiAgICB9IGVsc2Uge1xuICAgICAgJHNjb3BlLm1hcExheWVycyA9ICQuZ3JlcCgkc2NvcGUubWFwTGF5ZXJzLCBmdW5jdGlvbihyb3V0ZUxheWVyKXtcbiAgICAgICAgcmV0dXJuIHJvdXRlTGF5ZXIgIT09IGxheWVyS2V5O1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgJHN0YXRlUGFyYW1zLmxheWVycyA9ICRzY29wZS5tYXBMYXllcnMuam9pbignLCcpO1xuICAgIHZhciBzdGF0ZSA9ICRzdGF0ZS5jdXJyZW50Lm5hbWUgfHwgJ21haW4nO1xuICAgICRzdGF0ZS5nbyhzdGF0ZSwgJHN0YXRlUGFyYW1zKTtcblxuICB9O1xuXG5cbiAgJHNjb3BlLmxpc3RHaXN0cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAkc2NvcGUuZ2lzdHMgPSBnaXN0cy5mZXRjaCgpO1xuICAgIGlmICgkc2NvcGUuZ2lzdHMpIHtcbiAgICAgICRzY29wZS5udW1HaXN0cyA9IE9iamVjdC5rZXlzKCRzY29wZS5naXN0cykubGVuZ3RoO1xuICAgIH0gZWxzZSB7XG4gICAgICAkc2NvcGUubnVtR2lzdHMgPSAwO1xuICAgIH1cbiAgfTtcbiAgJHNjb3BlLmxpc3RHaXN0cygpO1xuICBkZWJ1Zy5naXN0c0xheWVyc1BhbmVsID0gJHNjb3BlLmdpc3RzO1xuXG4gICRzY29wZS5zZWFyY2hMYXllcnMgPSAkc2NvcGUuYWxsTGF5ZXJzO1xuXG4gICRzY29wZS5zZWFyY2ggPSBmdW5jdGlvbihzZWFyY2hUZXh0KSB7XG4gICAgdmFyIGxheWVycyA9ICRzY29wZS5hbGxMYXllcnM7XG4gICAgaWYgKHR5cGVvZiBzZWFyY2hUZXh0ID09PSAnc3RyaW5nJykge1xuICAgICAgc2VhcmNoVGV4dCA9IHNlYXJjaFRleHQudG9Mb3dlckNhc2UoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgJHNjb3BlLnNlYXJjaExheWVycyA9IGxheWVycztcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHNlYXJjaExheWVycyA9IHt9O1xuICAgIGZvciAodmFyIGsgaW4gbGF5ZXJzKSB7XG4gICAgICB2YXIgbCA9IGxheWVyc1trXTtcbiAgICAgIGZvciAodmFyIGsyIGluIGwpIHtcbiAgICAgICAgdmFyIHZhbCA9IGxbazJdLnRvU3RyaW5nKCk7XG4gICAgICAgIGlmICh2YWwudG9Mb3dlckNhc2UoKS5pbmRleE9mKHNlYXJjaFRleHQpID4gLTEpIHtcbiAgICAgICAgICBzZWFyY2hMYXllcnNba10gPSBsO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB2YXIgcHJvcHMgPSBsLnByb3BlcnRpZXM7XG4gICAgICBpZiAocHJvcHMpIHtcbiAgICAgICAgZm9yICh2YXIgazMgaW4gcHJvcHMpIHtcbiAgICAgICAgICB2YXIgdmFsID0gcHJvcHNbazNdLnRvU3RyaW5nKCk7XG4gICAgICAgICAgaWYgKHZhbC50b0xvd2VyQ2FzZSgpLmluZGV4T2Yoc2VhcmNoVGV4dCkgPiAtMSkge1xuICAgICAgICAgICAgc2VhcmNoTGF5ZXJzW2tdID0gbDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAkc2NvcGUuc2VhcmNoTGF5ZXJzID0gc2VhcmNoTGF5ZXJzO1xuICB9O1xuXG4gIC8qXG4gICBIYW5kbGluZyBUaGVtZSBNZW51IEFuaW1hdGlvbnNcbiAgICovXG5cbiAgJHNjb3BlLnRvZ2dsZUJMZXZlbE1lbnUgPSBmdW5jdGlvbigpe1xuICAgIHZhciBmbGlwcGVkT3V0ID0gJChcIi5tZW51LXNlbGVjdGlvbiAuZHJvcGRvd25cIikuaGFzQ2xhc3MoXCJvcGVuXCIpO1xuXG4gICAgaWYoZmxpcHBlZE91dCA9PSBmYWxzZSl7XG4gICAgICAkc2NvcGUudW5mdXJsVGhlbWVzKCk7XG4gICAgfVxuICAgIGVsc2V7XG4gICAgICAkc2NvcGUucmVmdXJsVGhlbWVzKCk7XG4gICAgfVxuICB9O1xuXG4gICRzY29wZS51bmZ1cmxUaGVtZXMgPSBmdW5jdGlvbigpe1xuICAgICRzY29wZS5yZWZ1cmxUaGVtZXMoKTtcbiAgICAvL1RyeSBqUXVlcnkgdG8gYWRkIGFuICdvbicgY2xhc3MgdG8gZWFjaCBvZiB0aGUgdGhlbWUgTEkgZWxlbWVudHMgb24gYSB0aW1lci5cbiAgICAkKCQoJyNCTGV2ZWxNZW51IGxpJykuZ2V0KCkucmV2ZXJzZSgpKS5lYWNoKGZ1bmN0aW9uKGluZGV4KXtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHNlbGYpLmFkZENsYXNzKFwidGhlbWUtc2VsZWN0b3ItbGktb25cIik7XG4gICAgICB9LCBpbmRleCoxMDApO1xuICAgIH0pO1xuICB9O1xuXG4gIC8vUmVmdXJsP1xuICAkc2NvcGUucmVmdXJsVGhlbWVzID0gZnVuY3Rpb24oKXtcbiAgICAvL1RyeSBqUXVlcnkgdG8gcmVtb3ZlIHRoZSAnb24nIGNsYXNzIHRvIGVhY2ggb2YgdGhlIHRoZW1lIExJIGVsZW1lbnRzIG9uIGEgdGltZXIuXG4gICAgJCgnI0JMZXZlbFNlbGVjdG9yTWVudSAuZHJvcGRvd24tbWVudSBsaScpLnJlbW92ZUNsYXNzKFwidGhlbWUtc2VsZWN0b3ItbGktb25cIik7XG4gIH07XG5cbiAgLypcbiAgIEVuZCBUaGVtZSBNZW51IEFuaW1hdGlvbnNcbiAgICovXG5cbn0pO1xuXG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgTmljaG9sYXMgSGFsbGFoYW4gPG5oYWxsYWhhbkBzcGF0aWFsZGV2LmNvbT5cbiAqICAgICAgIG9uIDMvMjcvMTQuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnR2VvQW5ndWxhcicpLmNvbnRyb2xsZXIoJ0xlZ2VuZEN0cmwnLCBmdW5jdGlvbigkc2NvcGUsIExheWVyQ29uZmlnLCAkc3RhdGVQYXJhbXMpIHtcblxuICAkc2NvcGUuZm9sZCA9IGZhbHNlO1xuXG4gICRzY29wZS4kb24oJ2xheWVycy11cGRhdGUnLCBmdW5jdGlvbiAoZXZ0LCBsYXllcnMpIHtcbiAgICAkc2NvcGUubGF5ZXJzID0gW107XG4gICAgZm9yICh2YXIgaSA9IGxheWVycy5sZW5ndGggLSAxOyBpID49IDE7IGktLSl7XG4gICAgICB2YXIgbCA9IGxheWVyc1tpXTtcbiAgICAgIHZhciBsYXllciA9IHt9O1xuICAgICAgdmFyIGxjZmcgPSBMYXllckNvbmZpZy5maW5kKGwpO1xuXG4gICAgICBpZighbGNmZyl7XG4gICAgICAgIC8vZXhpdCBpZiBsYXllciBuYW1lIGlzIG5vdCBpbiBjb25maWcuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgbGF5ZXIuYWxpYXMgPSBsO1xuICAgICAgbGF5ZXIubmFtZSA9IGxjZmcubmFtZTtcbiAgICAgIGlmKGwgPT09ICdnYWRtMCcgfHwgbCA9PT0gJ3RoZW1lJyl7XG4gICAgICAgICAgbGF5ZXIubmFtZSA9ICRzdGF0ZVBhcmFtcy50aGVtZSB8fCAnUHJvamVjdCc7XG4gICAgICB9XG4gICAgICBpZiAoIW5hbWUgJiYgbGNmZy5wcm9wZXJ0aWVzICYmIGxjZmcucHJvcGVydGllcy50aXRsZSkge1xuICAgICAgICBsYXllci5uYW1lID0gbGNmZy5wcm9wZXJ0aWVzLnRpdGxlO1xuICAgICAgfSBlbHNlIGlmICghbGF5ZXIubmFtZSkge1xuICAgICAgICBsYXllci5uYW1lID0gbDtcbiAgICAgIH1cblxuICAgICAgaWYobGNmZy5wcm9wZXJ0aWVzKXtcbiAgICAgICAgICBpZihsY2ZnLnByb3BlcnRpZXMubGVnZW5kKXtcbiAgICAgICAgICAgICAgaWYodHlwZW9mIGxjZmcucHJvcGVydGllcy5sZWdlbmQgPT09ICdmdW5jdGlvbicpe1xuICAgICAgICAgICAgICAgICAgICAvL0J1aWxkIHRoZSBsZWdlbmQgZWxlbWVudFxuICAgICAgICAgICAgICAgICAgICBsYXllci5hY3RpdmVMZWdlbmQgPSBsY2ZnLnByb3BlcnRpZXMubGVnZW5kKCRzdGF0ZVBhcmFtcy50aGVtZSB8fCAncHJvamVjdCcpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgICAvL0lmIGxlZ2VuZCBpcyBhIHN0cmluZywgdXNlIGl0IGRpcmVjdGx5XG4gICAgICAgICAgICAgICAgICBsYXllci5hY3RpdmVMZWdlbmQgPSBsY2ZnLnByb3BlcnRpZXMubGVnZW5kO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgIC8vTm8gbGVnZW5kIGRlZmluZWQuICBVc2UgYSBkZWZhdWx0LlxuXG4gICAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAkc2NvcGUubGF5ZXJzLnB1c2gobGF5ZXIpO1xuICAgIH1cbiAgfSk7XG5cbiAgJHNjb3BlLiRvbignbGVnZW5kLXdpZHRoJywgZnVuY3Rpb24gKGV2dCxsdyl7XG4gICAgJHNjb3BlLndpZHRoID0gbHcud2lkdGg7XG4gICAgJHNjb3BlLmZvbGQgPSBsdy5mb2xkO1xuICAgIGlmKGx3LndpZHRoPj00MzUgfHwgbHcuZm9sZCA9PSB0cnVlKXtcbiAgICAgICRzY29wZS5mb2xkID0gdHJ1ZTtcbiAgICAgIGNvbnNvbGUubG9nKFwiZm9sZFwiKTtcbiAgICB9XG4gIH0pO1xuXG4gIC8qXG4gICBTZXQgdGhlIGRpY3Rpb25hcnkgdXNlZCB0byBsb29rIHVwIFVOT0NIQSBpY29ucyBmb3IgZGlzYXN0ZXIgdHlwZXNcbiAgICovXG4gIHZhciBvcGFjaXR5ID0gXCIwLjVcIlxuICAkc2NvcGUuVU5PQ0hBSWNvbkxvb2t1cCA9IHtcblxuICAgIFwiTWV0ZW9yb2xvZ2ljYWwgLSBUcm9waWNhbCBDeWNsb25lXCI6IHtpY29uOiBcImljb24tZGlzYXN0ZXJfY3ljbG9uZVwiLCBjb2xvcjogXCJyZ2JhKDI1NSwwLDAsXCIgKyBvcGFjaXR5ICsgXCIpXCJ9LFxuICAgIFwiRmxvb2RzXCI6IHtpY29uOiBcImljb24tZGlzYXN0ZXJfZmxvb2RcIiwgY29sb3I6IFwicmdiYSgyNTUsMCwwLFwiICsgb3BhY2l0eSArIFwiKVwifSxcbiAgICBcIlRzdW5hbWksIFZvbGNhbm9cIjoge2ljb246IFwiaWNvbi1kaXNhc3Rlcl90c3VuYW1pXCIsIGNvbG9yOiBcInJnYmEoMjU1LDAsMCxcIiArIG9wYWNpdHkgKyBcIilcIn0sXG4gICAgXCJGbG9vZHMsIFN0b3JtXCI6IHtpY29uOiBcImljb24tZGlzYXN0ZXJfZmxvb2RcIiwgY29sb3I6IFwicmdiYSgyNTUsMCwwLFwiICsgb3BhY2l0eSArIFwiKVwifSxcbiAgICBcIlRzdW5hbWlcIjoge2ljb246IFwiaWNvbi1kaXNhc3Rlcl90c3VuYW1pXCIsIGNvbG9yOiBcInJnYmEoMjU1LDAsMCxcIiArIG9wYWNpdHkgKyBcIilcIn0sXG4gICAgXCJGYW1pbmUgLyBGb29kIEluc2VjdXJpdHlcIjoge2ljb246IFwiaWNvbi1jbHVzdGVyX2Zvb2Rfc2VjdXJpdHlcIiwgY29sb3I6IFwicmdiYSgyNTUsMCwwLFwiICsgb3BhY2l0eSArIFwiKVwifSxcbiAgICBcIkRyb3VnaHRcIjoge2ljb246IFwiaWNvbi1kaXNhc3Rlcl9kcm91Z2h0XCIsIGNvbG9yOiBcInJnYmEoMjU1LDAsMCxcIiArIG9wYWNpdHkgKyBcIilcIn0sXG4gICAgXCJNZXRlb3JvbG9naWNhbCAtIFRyb3BpY2FsIEN5Y2xvbmU7SHlkcm9sb2dpY2FsIC0gRmxvb2RzXCI6IHtpY29uOiBcImljb24tZGlzYXN0ZXJfY3ljbG9uZVwiLCBjb2xvcjogXCJyZ2JhKDI1NSwwLDAsXCIgKyBvcGFjaXR5ICsgXCIpXCJ9LFxuICAgIFwiRm9vZCBJbnNlY3VyaXR5XCI6IHtpY29uOiBcImljb24tY2x1c3Rlcl9mb29kX3NlY3VyaXR5XCIsIGNvbG9yOiBcInJnYmEoMjU1LDAsMCxcIiArIG9wYWNpdHkgKyBcIilcIn0sXG4gICAgXCJDaXZpbCBVbnJlc3RcIjoge2ljb246IFwiaWNvbi1wZW9wbGVfcmViZWxcIiwgY29sb3I6IFwicmdiYSgyNTUsMCwwLFwiICsgb3BhY2l0eSArIFwiKVwifSxcbiAgICBcIkZsb29kcywgVHJvcGljYWwgU3Rvcm1cIjoge2ljb246IFwiaWNvbi1kaXNhc3Rlcl9mbG9vZFwiLCBjb2xvcjogXCJyZ2JhKDI1NSwwLDAsXCIgKyBvcGFjaXR5ICsgXCIpXCJ9LFxuICAgIFwiQ29tcGxleCBFbWVyZ2VuY3lcIjoge2ljb246IFwiaWNvbi1jcmlzaXNfY29uZmxpY3RcIiwgY29sb3I6IFwicmdiYSgyNTUsMCwwLFwiICsgb3BhY2l0eSArIFwiKVwifSxcbiAgICBcIkVwaWRlbWljXCI6IHtpY29uOiBcImljb24tZGlzYXN0ZXJfZXBpZGVtaWNcIiwgY29sb3I6IFwicmdiYSgyNTUsMCwwLFwiICsgb3BhY2l0eSArIFwiKVwifSxcbiAgICBcIlBvcHVsYXRpb24gTW92ZW1lbnRcIjoge2ljb246IFwiaWNvbi1jcmlzaXNfcG9wdWxhdGlvbl9kaXNwbGFjZW1lbnRcIiwgY29sb3I6IFwicmdiYSgyNTUsMCwwLFwiICsgb3BhY2l0eSArIFwiKVwifSxcbiAgICBcIkNsaW1hdG9sb2dpY2FsIC0gRHJvdWdodFwiOiB7aWNvbjogXCJpY29uLWRpc2FzdGVyX2Ryb3VnaHRcIiwgY29sb3I6IFwicmdiYSgyNTUsMCwwLFwiICsgb3BhY2l0eSArIFwiKVwifSxcbiAgICBcIldpbnRlciBTdG9ybVwiOiB7aWNvbjogXCJpY29uLWRpc2FzdGVyX3Nub3dmYWxsXCIsIGNvbG9yOiBcInJnYmEoMjU1LDAsMCxcIiArIG9wYWNpdHkgKyBcIilcIn0sXG4gICAgXCJUcm9waWNhbCBTdG9ybVwiOiB7aWNvbjogXCJpY29uLWRpc2FzdGVyX2hlYXZ5X3JhaW5cIiwgY29sb3I6IFwicmdiYSgyNTUsMCwwLFwiICsgb3BhY2l0eSArIFwiKVwifSxcbiAgICBcIkVhcnRocXVha2UsIFRzdW5hbWlcIjoge2ljb246IFwiaWNvbi1kaXNhc3Rlcl9lYXJ0aHF1YWtlXCIsIGNvbG9yOiBcInJnYmEoMjU1LDAsMCxcIiArIG9wYWNpdHkgKyBcIilcIn0sXG4gICAgXCJIeWRyb2xvZ2ljYWwgLSBGbG9vZHNcIjoge2ljb246IFwiaWNvbi1kaXNhc3Rlcl9mbG9vZFwiLCBjb2xvcjogXCJyZ2JhKDI1NSwwLDAsXCIgKyBvcGFjaXR5ICsgXCIpXCJ9LFxuICAgIFwiTGFuZHNsaWRlO0Zsb29kc1wiOiB7aWNvbjogXCJpY29uLWRpc2FzdGVyX2xhbmRzbGlkZVwiLCBjb2xvcjogXCJyZ2JhKDI1NSwwLDAsXCIgKyBvcGFjaXR5ICsgXCIpXCJ9LFxuICAgIFwiRWFydGhxdWFrZVwiOiB7aWNvbjogXCJpY29uLWRpc2FzdGVyX2VhcnRocXVha2VcIiwgY29sb3I6IFwicmdiYSgyNTUsMCwwLFwiICsgb3BhY2l0eSArIFwiKVwifSxcbiAgICBcIkxhbmRzbGlkZTtIeWRyb2xvZ2ljYWwgLSBGbG9vZHNcIjoge2ljb246IFwiaWNvbi1kaXNhc3Rlcl9sYW5kc2xpZGVcIiwgY29sb3I6IFwicmdiYSgyNTUsMCwwLFwiICsgb3BhY2l0eSArIFwiKVwifVxuXG4gIH1cblxuXG59KTtcbiIsIm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ0dlb0FuZ3VsYXInKS5jb250cm9sbGVyKCdNYWluQ3RybCcsIGZ1bmN0aW9uKCRzY29wZSwgJHJvb3RTY29wZSwgJHN0YXRlLCAkc3RhdGVQYXJhbXMsICRsb2NhdGlvbikge1xuICBkZWJ1Zy4kbG9jYXRpb24gPSAkbG9jYXRpb247XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdkZWZhdWx0Um91dGUnLCAkbG9jYXRpb24ucGF0aCgpKTtcblxuICAvLyBOSCBUT0RPOiBTZWUgaWYgdGhpcyBpcyBhbHNvIHRoZSBjYXNlIHdpdGggdWktcm91dGVyP1xuICAvLyB3ZWlyZCBidWcgd2hlcmUgcmVkaXJlY3QgcGVlbHMgb3V0ICc6Ly97cycgd2hlbiAnOicgaXMgdGhlcmVcbiAgLy8gJHJvdXRlUGFyYW1zLmxheWVycyBXZSBqdXN0IGRvbnQgaGF2ZSB0aGUgOiBpbiBtYWluLmpzIHNvIHRoYXRcbiAgLy8gcGFydCBvZiB0aGUgcGF0aCBkb2VzIG5vdCBnbyBhd2F5Li4uXG4gIHZhciBsYXllcnNTdHIgPSAkc3RhdGVQYXJhbXMubGF5ZXJzID0gJHN0YXRlUGFyYW1zLmxheWVycy5yZXBsYWNlKCdodHRwLy8nLCAnaHR0cDovLycpO1xuICB2YXIgdGhlbWVTdHIgPSAkc3RhdGVQYXJhbXMudGhlbWU7XG4gIHZhciBmaWx0ZXJzU3RyID0gJHN0YXRlUGFyYW1zLmZpbHRlcnM7XG4gIHZhciBjYXRlZ29yeVN0ciA9ICRzdGF0ZVBhcmFtcy5jYXRlZ29yeTsgLy8gbGF5ZXIgY2F0ZWdvcnkgb3BlblxuICB2YXIgdGhlbWVMYWJlbFN0ciA9ICRzdGF0ZVBhcmFtcy50aGVtZWxhYmVsczsgLy8gdGhlbWVsYWJlbHMgKGJ1YmJsZXMpXG5cbiAgdmFyIGxldmVsU3RyID0gJHN0YXRlUGFyYW1zLmxldmVsO1xuICB2YXIgem9vbVN0ciA9ICRzdGF0ZVBhcmFtcy56b29tO1xuICAkcm9vdFNjb3BlLiRicm9hZGNhc3QoJ3JvdXRlLXVwZGF0ZScpO1xuXG4gIC8qKlxuICAgKiBPbmx5IGlmIHRoZSBsYXRlc3Qgcm91dGUgaGFzIGEgZGlmZmVyZW50IGxheWVyIHN0cmluZyB0aGFuIGJlZm9yZS5cbiAgICovXG4gIGlmIChsYXllcnNTdHIgIT09IHdpbmRvdy5wcmV2TGF5ZXJzU3RyKSB7XG4gICAgd2luZG93LnByZXZMYXllcnNTdHIgPSBsYXllcnNTdHI7XG4gICAgdmFyIGxheWVycyA9IGxheWVyc1N0ci5zcGxpdCgnLCcpO1xuICAgICRyb290U2NvcGUuJGJyb2FkY2FzdCgnbGF5ZXJzLXVwZGF0ZScsIGxheWVycyk7XG4gIH1cblxuICBpZiAobGV2ZWxTdHIgIT09IG51bGwgJiYgbGV2ZWxTdHIgIT09IHdpbmRvdy5wcmV2TGV2ZWxTdHIpIHtcbiAgICB3aW5kb3cucHJldkxldmVsU3RyID0gbGV2ZWxTdHI7XG4gICAgJHJvb3RTY29wZS4kYnJvYWRjYXN0KCdsZXZlbC11cGRhdGUnLCBsZXZlbFN0cik7XG4gIH1cblxuICBpZiAoem9vbVN0ciAhPT0gd2luZG93LnByZXZab29tU3RyKSB7XG4gICAgd2luZG93LnByZXZab29tU3RyID0gem9vbVN0cjtcbiAgICAkcm9vdFNjb3BlLiRicm9hZGNhc3QoJ3pvb20tdXBkYXRlJywgem9vbVN0cik7XG4gIH1cblxuICBpZiAodGhlbWVTdHIgIT09IHdpbmRvdy5wcmV2dGhlbWVTdHIpIHtcbiAgICB3aW5kb3cucHJldnRoZW1lU3RyID0gdGhlbWVTdHI7XG4gICAgJHJvb3RTY29wZS4kYnJvYWRjYXN0KCd0aGVtZS11cGRhdGUnLCB0aGVtZVN0cik7XG4gIH1cblxuICBpZiAoZmlsdGVyc1N0ciAhPT0gd2luZG93LnByZXZmaWx0ZXJzU3RyKSB7XG4gICAgd2luZG93LnByZXZmaWx0ZXJzU3RyID0gZmlsdGVyc1N0cjtcbiAgICAkcm9vdFNjb3BlLiRicm9hZGNhc3QoJ2ZpbHRlcnMtdXBkYXRlJywgZmlsdGVyc1N0cik7XG4gIH1cblxuICAvLyBpZiB0aGUgb3BlbiBjYXRlZ29yeSBoYXMgY2hhbmdlZCBicm9hZGNhc3QgY2F0ZWdvcnkgaGFzIGNoYW5nZWRcbiAgaWYgKGNhdGVnb3J5U3RyICE9PSB3aW5kb3cucHJldkNhdGVnb3J5U3RyKSB7XG4gICAgd2luZG93LnByZXZDYXRlZ29yeVN0ciA9IGNhdGVnb3J5U3RyO1xuICAgICRyb290U2NvcGUuJGJyb2FkY2FzdCgnY2F0ZWdvcnktdXBkYXRlJywgY2F0ZWdvcnlTdHIpO1xuICB9XG5cbiAgLy8gaWYgdGhlIHRoZW1lbGFiZWxzIGhhcyBjaGFuZ2VkIGJyb2FkY2FzdCB0aGVtZWxhYmVscyBoYXMgY2hhbmdlZFxuICBpZih3aW5kb3cudGhlbWVMYWJlbFN0ciAhPSB0aGVtZUxhYmVsU3RyKSB7XG4gICAgd2luZG93LnRoZW1lTGFiZWxTdHIgPSB0aGVtZUxhYmVsU3RyO1xuICAgICRyb290U2NvcGUuJGJyb2FkY2FzdCgndGhlbWVsYWJlbHMtdXBkYXRlJywgdGhlbWVMYWJlbFN0cik7XG4gIH1cblxufSk7XG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgTmljaG9sYXMgSGFsbGFoYW4gPG5oYWxsYWhhbkBzcGF0aWFsZGV2LmNvbT5cbiAqICAgICBvbiBNb24gTWFyIDE3IDIwMTRcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdHZW9Bbmd1bGFyJykuY29udHJvbGxlcignTWFwQ3RybCcsIGZ1bmN0aW9uICgkc2NvcGUsICRyb290U2NvcGUsICRzdGF0ZSwgJHN0YXRlUGFyYW1zLCBMYXllckNvbmZpZywgVmVjdG9yUHJvdmlkZXIsICRodHRwLCAkc2NlKSB7XG4gIHZhciBtYXAgPSBMLm1hcCgnbWFwJyk7XG4gIHZhciBmaXJzdExvYWQgPSB0cnVlO1xuXG4gICRzY29wZS5wYXJhbXMgPSAkc3RhdGVQYXJhbXM7XG4gICRzY29wZS5ibHVyID0gJyc7XG4gICRzY29wZS5ncmF5b3V0ID0gJyc7IC8vdXNlIHRoaXMgY2xhc3MgdG8gZ3JheSBvdXQgdGhlIG1hcCwgc3VjaCBhcyB3aGVuIHRoZSBjb3VudHJ5IHNlbGVjdG9yIG1lbnUgaXMgYWN0aXZlXG4gICRzY29wZS5sZWdlbmRPYmplY3QgPSB7fTsgLy9XaGVuIFBCRiBsYXllcnMgYXJlIGRyYXduLCBncmFiIHRoZSBsZWdlbmRPYmplY3Qgb3V0IG9mIGl0IHNvIHdlIGtub3cgd2hhdCBjbGFzc2VzIGFyZSBiZWluZyBkcmF3biBvbiB0aGUgbWFwXG5cbiAgJHNjb3BlLnRvZ2dsZVN0YXRlID0gZnVuY3Rpb24gKHN0YXRlTmFtZSkge1xuICAgIHZhciBzdGF0ZSA9ICRzdGF0ZS5jdXJyZW50Lm5hbWUgIT09IHN0YXRlTmFtZSA/IHN0YXRlTmFtZSA6ICdtYWluJztcbiAgICAkc3RhdGUuZ28oc3RhdGUsICRzdGF0ZVBhcmFtcyk7XG4gIH07XG5cbiAgdmFyIGxhc3RMYXllcnNTdHIgPSAnJztcbiAgdmFyIGxhc3RCYXNlbWFwVXJsID0gbnVsbDtcbiAgdmFyIGJhc2VtYXBMYXllciA9IG51bGw7XG4gIHZhciBsYXllcnNTdHIgPSBudWxsO1xuICB2YXIgb3ZlcmxheU5hbWVzID0gW107XG4gIHZhciBvdmVybGF5cyA9IFtdO1xuICB2YXIgb3ZlcmxheXNfZGljdGlvbmFyeSA9IHt9O1xuICB2YXIgdGhlbWUgPSBudWxsO1xuICB2YXIgZmlsdGVycyA9IG51bGw7XG5cbiAgZnVuY3Rpb24gcmVkcmF3KCkge1xuICAgIGZvcmNlR2FkbTAoKTtcbiAgICB2YXIgbGF0ID0gcGFyc2VGbG9hdCgkc3RhdGVQYXJhbXMubGF0KSB8fCAwO1xuICAgIHZhciBsbmcgPSBwYXJzZUZsb2F0KCRzdGF0ZVBhcmFtcy5sbmcpIHx8IDA7XG4gICAgdmFyIHpvb20gPSBwYXJzZUZsb2F0KCRzdGF0ZVBhcmFtcy56b29tKSB8fCA4O1xuICAgIGxheWVyc1N0ciA9ICRzdGF0ZVBhcmFtcy5sYXllcnMgfHwgTGF5ZXJDb25maWcucmVkY3Jvc3MudXJsO1xuICAgIHZhciBsYXllcnMgPSBsYXllcnNTdHIuc3BsaXQoJywnKTtcblxuICAgIC8vIGZpcnN0IGxheWVyIHNob3VsZCBhbHdheXMgYmUgdHJlYXRlZCBhcyB0aGUgYmFzZW1hcFxuICAgIHZhciBiYXNlbWFwID0gTGF5ZXJDb25maWcuZmluZChsYXllcnNbMF0pIHx8IExheWVyQ29uZmlnLnJlZGNyb3NzLnVybDtcbiAgICBpZiAodHlwZW9mIGJhc2VtYXAgPT09ICdzdHJpbmcnKSB7XG4gICAgICB2YXIgYmFzZW1hcFVybCA9IGJhc2VtYXA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBiYXNlbWFwVXJsID0gYmFzZW1hcC51cmw7XG4gICAgfVxuXG4gICAgb3ZlcmxheU5hbWVzID0gbGF5ZXJzLnNsaWNlKDEpO1xuXG4gICAgaWYgKGxhc3RCYXNlbWFwVXJsICE9PSBiYXNlbWFwVXJsICYmIHR5cGVvZiBtYXAgPT09ICdvYmplY3QnKSB7XG4gICAgICBpZiAoYmFzZW1hcExheWVyKSB7XG4gICAgICAgIG1hcC5yZW1vdmVMYXllcihiYXNlbWFwTGF5ZXIpO1xuICAgICAgfVxuICAgICAgYmFzZW1hcExheWVyID0gTC50aWxlTGF5ZXIoYmFzZW1hcFVybCkuYWRkVG8obWFwKTtcblxuICAgICAgYmFzZW1hcExheWVyLm9uKCdsb2FkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAvL01vdmUgdG8gYmFja1xuICAgICAgICBiYXNlbWFwTGF5ZXIuYnJpbmdUb0JhY2soKTtcbiAgICAgIH0pO1xuXG4gICAgfVxuXG5cbiAgICBpZiAobGFzdExheWVyc1N0ciAhPT0gbGF5ZXJzU3RyKSB7XG5cbiAgICAgIGRyYXdPdmVybGF5cygpO1xuXG4gICAgICAkc2NvcGUuZGVmYXVsdHMgPSB7XG4gICAgICAgIHNjcm9sbFdoZWVsWm9vbTogdHJ1ZVxuICAgICAgfTtcblxuICAgICAgJHNjb3BlLnRpbGVzID0ge1xuICAgICAgICB1cmw6IGJhc2VtYXBVcmxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgdmFyIGMgPSAkc2NvcGUuY2VudGVyID0ge1xuICAgICAgbGF0OiBsYXQsXG4gICAgICBsbmc6IGxuZyxcbiAgICAgIHpvb206IHpvb21cbiAgICB9O1xuXG4gICAgaWYgKHR5cGVvZiBtYXAgPT09ICdvYmplY3QnICYmIChjLmxhdCAhPSAwICYmIGMubG5nICE9IDApKSB7XG4gICAgICBtYXAuc2V0VmlldyhbYy5sYXQsIGMubG5nXSwgem9vbSk7XG4gICAgfVxuXG4gICAgaWYgKCh0aGVtZSAhPT0gJHN0YXRlUGFyYW1zLnRoZW1lIHx8IGZpbHRlcnMgIT09ICRzdGF0ZVBhcmFtcy5maWx0ZXJzKSB8fCBmaXJzdExvYWQgPT09IHRydWUpIHtcblxuICAgICAgZmlyc3RMb2FkID0gZmFsc2U7XG5cbiAgICAgIC8vVXBkYXRlIGxvY2FsIHZhcmlhYmxlc1xuICAgICAgdGhlbWUgPSAkc3RhdGVQYXJhbXMudGhlbWU7XG4gICAgICBmaWx0ZXJzID0gJHN0YXRlUGFyYW1zLmZpbHRlcnM7XG5cbiAgICAgIC8vQ2FsbCB0aGUgJ29uQ2hhbmdlZCcgZnVuY3Rpb25cbiAgICAgIG9uVGhlbWVDaGFuZ2VkKCRzdGF0ZVBhcmFtcy50aGVtZSk7XG4gICAgICBvbkZpbHRlcnNDaGFuZ2VkKCRzdGF0ZVBhcmFtcy5maWx0ZXJzKTtcbiAgICB9XG5cbiAgICBicm9hZGNhc3RCQm94KCk7XG4gICAgbGFzdExheWVyc1N0ciA9IGxheWVyc1N0cjtcbiAgICBsYXN0QmFzZW1hcFVybCA9IGJhc2VtYXBVcmw7XG4gIH1cblxuICAvL0ZvciB2ZWN0b3IgdGlsZSBjaG9yb3BsZXRocywgYXNrIGZvciBuZXcgZGF0YSAuanNvbiBmcm9tIHRoZSBzZXJ2ZXJcbiAgb25UaGVtZUNoYW5nZWQoJHN0YXRlUGFyYW1zLnRoZW1lKTtcblxuXG4gIC8qKipcbiAgICogQnJvYWRjYXN0IExpc3RlbmVycy5cbiAgICovXG4gICRzY29wZS4kb24oJ3JvdXRlLXVwZGF0ZScsIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoJHNjb3BlLmJsdXIgPT09ICdibHVyJyAmJiAkc3RhdGUuY3VycmVudC5uYW1lICE9PSAnbGFuZGluZycpIHtcbiAgICAgICRzY29wZS5ibHVyID0gJyc7XG4gICAgfVxuXG4gICAgdmFyIGM7XG4gICAgaWYgKCEkc2NvcGUuY2VudGVyKSB7XG4gICAgICB2YXIgbGF0ID0gcGFyc2VGbG9hdCgkc3RhdGVQYXJhbXMubGF0KSB8fCAwO1xuICAgICAgdmFyIGxuZyA9IHBhcnNlRmxvYXQoJHN0YXRlUGFyYW1zLmxuZykgfHwgMDtcbiAgICAgIHZhciB6b29tID0gcGFyc2VGbG9hdCgkc3RhdGVQYXJhbXMuem9vbSkgfHwgODtcblxuICAgICAgYyA9ICRzY29wZS5jZW50ZXIgPSB7XG4gICAgICAgIGxhdDogbGF0LFxuICAgICAgICBsbmc6IGxuZyxcbiAgICAgICAgem9vbTogem9vbVxuICAgICAgfTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBjID0gJHNjb3BlLmNlbnRlcjtcbiAgICB9XG5cbiAgICB2YXIgbGF0ID0gYy5sYXQudG9GaXhlZCg2KTtcbiAgICB2YXIgbG5nID0gYy5sbmcudG9GaXhlZCg2KTtcbiAgICB2YXIgem9vbSA9IGMuem9vbS50b1N0cmluZygpO1xuICAgIGlmIChtYXBNb3ZlRW5kKSB7XG4gICAgICBtYXBNb3ZlRW5kID0gZmFsc2U7XG4gICAgfSBlbHNlIGlmICgkc3RhdGVQYXJhbXMubGF0ICE9PSBsYXRcbiAgICAgIHx8ICRzdGF0ZVBhcmFtcy5sbmcgIT09IGxuZ1xuICAgICAgfHwgJHN0YXRlUGFyYW1zLnpvb20gIT09IHpvb21cbiAgICAgIHx8ICRzdGF0ZVBhcmFtcy5sYXllcnMgIT09IGxheWVyc1N0clxuICAgICAgfHwgJHN0YXRlUGFyYW1zLnRoZW1lICE9PSB0aGVtZVxuICAgICAgfHwgJHN0YXRlUGFyYW1zLmZpbHRlcnMgIT09IGZpbHRlcnMpIHtcblxuICAgICAgY29uc29sZS5sb2coJ21hcC5qcyByb3V0ZS11cGRhdGUgVXBkYXRpbmcgTWFwLi4uJyk7XG4gICAgICByZWRyYXcoKTtcbiAgICB9XG5cbiAgfSk7XG5cbiAgJHJvb3RTY29wZS4kb24oJ3RoZW1lbGFiZWxzLXVwZGF0ZScsIGZ1bmN0aW9uICgpIHtcbiAgICAvL0NhbGwgdGhlIGZ1bmN0aW9uXG4gICAgb25UaGVtZUxhYmVsQ2hhbmdlZCgpO1xuXG4gICAgLy9TZWUgaWYgd2Ugc2hvdWxkIHNob3cgdGhlbWUgYmFkZ2VzL2J1YmJsZXMgb3Igbm90XG4gICAgaWYoJHN0YXRlUGFyYW1zLnRoZW1lbGFiZWxzICE9PSBudWxsICYmICRzdGF0ZVBhcmFtcy50aGVtZWxhYmVscyAhPT0gdW5kZWZpbmVkKXtcbiAgICAgICRzY29wZS50aGVtZUxhYmVsc0NoZWNrZWQgPSAkc3RhdGVQYXJhbXMudGhlbWVsYWJlbHM7XG4gICAgfVxuICAgIGVsc2V7XG4gICAgICAvL2lmIG5vdCBwcmVzZW50LCBkZWZhdWx0IHRvIHRydWVcbiAgICAgICRzY29wZS50aGVtZUxhYmVsc0NoZWNrZWQgPSAndHJ1ZSc7XG4gICAgfVxuICB9KTtcblxuXG4gICRzY29wZS4kb24oJ2JsdXInLCBmdW5jdGlvbiAoKSB7XG4gICAgJHNjb3BlLmJsdXIgPSAnYmx1cic7XG4gIH0pO1xuXG4gIC8vdGhpcyB0YWtlcyBpbiBhIFdLVCBHZW9KU09OIEV4dGVudCBnZW9tZXRyeVxuICAkc2NvcGUuem9vbVRvRXh0ZW50ID0gZnVuY3Rpb24gKGV4dGVudCkge1xuICAgIGRlbGV0ZSAkc3RhdGVQYXJhbXNbJ3pvb20tZXh0ZW50J107XG5cbiAgICB2YXIgc291dGhXZXN0ID0ge2xhdDogZXh0ZW50WzBdWzFdLCBsbmc6IGV4dGVudFswXVswXX07XG4gICAgdmFyIG5vcnRoRWFzdCA9IHtsYXQ6IGV4dGVudFsyXVsxXSwgbG5nOiBleHRlbnRbMl1bMF19O1xuXG4gICAgJHNjb3BlLmJvdW5kcyA9IEwubGF0TG5nQm91bmRzKHNvdXRoV2VzdCwgbm9ydGhFYXN0KTtcblxuICAgIC8vWm9vbSB0byBib3VuZHNcbiAgICBtYXAuZml0Qm91bmRzKCRzY29wZS5ib3VuZHMpO1xuICB9O1xuXG4gIC8vVGhpcyB0YWtlIGEgbGVhZmxldCBib3VuZHMgb2JqZWN0IGFuZCBoYW5kbGVzIGl0LlxuICBkZWxldGUgJHN0YXRlUGFyYW1zWyd6b29tLWV4dGVudCddO1xuICAkc2NvcGUuem9vbVRvQm91bmRzID0gZnVuY3Rpb24gKGJvdW5kcykge1xuXG4gICAgLy9CdWlsZCBuZXcgYm91bmRzIG9iamVjdFxuICAgICRzY29wZS5ib3VuZHMgPSBMLmxhdExuZ0JvdW5kcyhib3VuZHMuZ2V0U291dGhXZXN0KCksIGJvdW5kcy5nZXROb3J0aEVhc3QoKSk7XG5cbiAgICAvL1pvb20gdG8gYm91bmRzXG4gICAgbWFwLmZpdEJvdW5kcygkc2NvcGUuYm91bmRzKTtcbiAgfTtcblxuXG4gIGZ1bmN0aW9uIGJyb2FkY2FzdEJCb3goKSB7XG4gICAgLy9OSCBUT0RPIEZpeG1lLiBGaW5kIGEgYmV0dGVyIHNvbHV0aW9uIHRoYW4gYSBzcGluIGxvY2suXG4gICAgaWYgKCF3YWl0KSB7XG4gICAgICB3YWl0ID0gdHJ1ZTtcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIC8vR2V0IHRoZSBNSU4vTUFYIFRpbGUgWllYIGV4dGVudHMuXG4gICAgICAgIC8vSWYgdGhleSBoYXZlbid0IGNoYWduZWQsIHRoZW4gZG9uJ3QgcHJvY2VlZC5cblxuICAgICAgICAvL1doZW4gdGhlIHBhZ2UgbG9hZHMsIG5vIHpvb20gb3IgY2VudGVyIGhhcyBiZWVuIHNldCwgc28gZG9uJ3QgZ2V0IGJvdW5kcyB1bnRpbCB0aGF0IGhhcyBoYXBwZW5lZFxuICAgICAgICBpZiAoIW1hcC5nZXRab29tKCkpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHRpbGVCb3VuZHMgPSBnZXRDdXJyZW50VGlsZUJvdW5kcyhtYXApO1xuICAgICAgICB2YXIgem9vbSA9IG1hcC5nZXRab29tKCk7XG5cbiAgICAgICAgJHNjb3BlLnpvb20gPSB6b29tO1xuICAgICAgICB2YXIgbWlueCA9IHRpbGVCb3VuZHMubWluLng7XG4gICAgICAgIHZhciBtYXh4ID0gdGlsZUJvdW5kcy5tYXgueDtcbiAgICAgICAgdmFyIG1pbnkgPSB0aWxlQm91bmRzLm1pbi55O1xuICAgICAgICB2YXIgbWF4eSA9IHRpbGVCb3VuZHMubWF4Lnk7XG5cbiAgICAgICAgLy9EZXRlY3QgbmVnYXRpdmUgbWlucyBhbmQgc2V0IHRvIDBcbiAgICAgICAgaWYgKG1pbnggPCAwKSBtaW54ID0gMDtcbiAgICAgICAgaWYgKG1pbnkgPCAwKSBtaW55ID0gMDtcblxuICAgICAgICAvL0NoZWNrIGZvciBleHRyZW1lIHZhbHVlcyBncmVhdGVyIHRoYW4gdGhlIHRpbGUgYm91bmRzXG4gICAgICAgIHZhciBleHRyZW1lVmFsdWUgPSBNYXRoLnBvdygyLCB6b29tKSAtIDE7XG5cbiAgICAgICAgaWYgKG1heHggPiBleHRyZW1lVmFsdWUpIG1heHggPSBleHRyZW1lVmFsdWU7XG4gICAgICAgIGlmIChtYXh5ID4gZXh0cmVtZVZhbHVlKSBtYXh5ID0gZXh0cmVtZVZhbHVlO1xuXG4gICAgICAgIHZhciBzdHIgPSB6b29tICsgXCIsXCIgKyBtaW54ICsgJywnICtcbiAgICAgICAgICBtYXh4ICsgJywnICtcbiAgICAgICAgICBtaW55ICsgJywnICtcbiAgICAgICAgICBtYXh5O1xuXG4gICAgICAgIFZlY3RvclByb3ZpZGVyLnVwZGF0ZUJCb3goc3RyKTtcbiAgICAgICAgJHJvb3RTY29wZS5iYm94ID0gc3RyOyAvL3NhdmUgdGhlIGJib3ggc3RyaW5nIHRvIHJvb3RTY29wZSBzbyBWZWN0b3JUaWxlIHN0eWxpbmcgZnVuY3Rpb25zIGhhdmUgYWNjZXNzXG5cblxuICAgICAgICB3YWl0ID0gZmFsc2U7XG4gICAgICB9LCAxNTApO1xuICAgIH1cblxuICB9XG5cbiAgLyoqXG4gICAqIFJpcHBlZCBGcm9tIExlYWZsZXQgVGlsZUxheWVyXG4gICAqIENhbGN1bGF0ZSB0aGUgTWF4L01pbiBaWVggVGlsZSBib3VuZHMuXG4gICAqIFVzZSB0aG9zZSB0byBzbmFwIEJCb3ggcmVxdWVzdHMgc28gd2UgY2FuIGNhY2hlLlxuICAgKi9cblxuICBmdW5jdGlvbiBnZXRDdXJyZW50VGlsZUJvdW5kcyhtYXApIHtcbiAgICB2YXIgYm91bmRzID0gbWFwLmdldFBpeGVsQm91bmRzKCksXG4gICAgICB0aWxlU2l6ZSA9IDI1NjsgLy9UT0RPXG5cbiAgICAvLyB0aWxlIGNvb3JkaW5hdGVzIHJhbmdlIGZvciB0aGUgY3VycmVudCB2aWV3XG4gICAgdmFyIHRpbGVCb3VuZHMgPSBMLmJvdW5kcyhcbiAgICAgIGJvdW5kcy5taW4uZGl2aWRlQnkodGlsZVNpemUpLmZsb29yKCksXG4gICAgICBib3VuZHMubWF4LmRpdmlkZUJ5KHRpbGVTaXplKS5mbG9vcigpKTtcblxuICAgIHJldHVybiB0aWxlQm91bmRzO1xuICB9XG5cblxuICAvKipcbiAgICogTmF0aXZlIExlYWZsZXQgTWFwIE9iamVjdFxuICAgKi9cblxuICB3aW5kb3cubWFwID0gbWFwO1xuICBtYXAub24oJ21vdmVlbmQnLCBmdW5jdGlvbiAoKSB7IC8vIG1vdmUgaXMgZ29vZCB0b29cbiAgICB2YXIgYyA9IG1hcC5nZXRDZW50ZXIoKTtcbiAgICB2YXIgbGF0ID0gYy5sYXQudG9GaXhlZCg2KTtcbiAgICB2YXIgbG5nID0gYy5sbmcudG9GaXhlZCg2KTtcbiAgICB2YXIgem9vbSA9IG1hcC5nZXRab29tKCkudG9TdHJpbmcoKTtcblxuICAgIGlmICgkc3RhdGVQYXJhbXMubGF0ICE9PSBsYXRcbiAgICAgIHx8ICRzdGF0ZVBhcmFtcy5sbmcgIT09IGxuZ1xuICAgICAgfHwgJHN0YXRlUGFyYW1zLnpvb20gIT09IHpvb20pIHtcblxuXG4gICAgICAkc3RhdGVQYXJhbXMubGF0ID0gbGF0O1xuICAgICAgJHN0YXRlUGFyYW1zLmxuZyA9IGxuZztcbiAgICAgICRzdGF0ZVBhcmFtcy56b29tID0gem9vbTtcbiAgICAgIG1hcE1vdmVFbmQgPSB0cnVlO1xuICAgICAgJHN0YXRlLmdvKCRzdGF0ZS5jdXJyZW50Lm5hbWUsICRzdGF0ZVBhcmFtcyk7XG4gICAgICBicm9hZGNhc3RCQm94KCk7XG5cbiAgICAgIC8vVXBkYXRlIEVDT1MgRGV0YWlscyAtIFVzdWFsbHkgdGhpcyBoYXBwZW5zIHdoZW4gdGlsZXMgZmluaXNoIGxvYWRpbmcgYWZ0ZXIgYSBwYW4uICBCdXQgc29tZXRpbWVzIGlmIHRoZSB0aWxlcyBhcmUgbG9hZGVkL2NhY2hlZCwgdGhlbiB0aGUgZXZlbnQgZG9lc24ndCBmaXJlIGFmdGVyIHRoZSBtYXAgc3RvcHMgbW92aW5nLlxuICAgICAgLy91cGRhdGVFQ09TRGF0YShvdmVybGF5TmFtZXMpO1xuICAgIH1cbiAgfSk7XG5cbiAgbWFwLm9uKCd6b29tZW5kJywgZnVuY3Rpb24oZXZ0KSB7XG5cbiAgICB2YXIgem9vbSA9IGV2dC50YXJnZXQuZ2V0Wm9vbSgpO1xuXG4gICAgLy9XaGVuIHpvb20gZW5kcywgc3dhcCBjc3MgY2xhc3Mgb24gbWFwIGRpdiwgc28gdGhlIGxhYmVscyB3aWxsIGNoYW5nZSBzaXplXG4gICAgLy9yZW1vdmUgb2xkIGNsYXNzZXMsIGp1c3QgaW4gY2FzZVxuXG4gICAgJChcIiNtYXBcIikucmVtb3ZlQ2xhc3MoXCJtZWRpdW0tbGFiZWxcIik7XG4gICAgJChcIiNtYXBcIikucmVtb3ZlQ2xhc3MoXCJsYXJnZS1sYWJlbFwiKTtcblxuXG4gICAgLy9BZGQgYXBwcm9wcmlhdGUgY2xhc3MgYmFzZCBvbiB6b29tXG4gICAgaWYgKHpvb20gPj0gMCAmJiB6b29tIDw9IDUpIHtcbiAgICAgICQoXCIjbWFwXCIpLmFkZENsYXNzKFwibWVkaXVtLWxhYmVsXCIpO1xuICAgIH1cbiAgICBlbHNlIGlmICh6b29tID4gNSAmJiB6b29tIDw9IDEzKSB7XG4gICAgICAkKFwiI21hcFwiKS5hZGRDbGFzcyhcImxhcmdlLWxhYmVsXCIpO1xuICAgIH1cblxuICB9KTtcblxuICAkcm9vdFNjb3BlLiR3YXRjaCgnbGV2ZWwnLCBmdW5jdGlvbiAoKSB7XG4gICAgIC8vaWYgdGhlIEdBRE0gbGV2ZWwgY2hhbmdlcyAoYW5kIGlzIHNvbWV0aGluZyksIHRoZW4gbmVlZCB0byBmZXRjaCBuZXcgRUNPUyBkYXRhIGZvciB0aGlzIHRoZW1lXG4gICAgIG9uVGhlbWVDaGFuZ2VkKCk7XG4gIH0pO1xuXG4gIC8vQ29ubmVjdCB0aGUgbGF5b3V0IG9ucmVzaXplIGVuZCBldmVudFxuICB0cnkge1xuICAgIHdpbmRvdy5sYXlvdXQucGFuZXMuY2VudGVyLmJpbmQoXCJsYXlvdXRwYW5lb25yZXNpemVfZW5kXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIG1hcC5pbnZhbGlkYXRlU2l6ZSgpO1xuICAgIH0pO1xuICB9IGNhdGNoIChlKSB7XG4gICAgLy9Ob3RoaW5nXG4gIH1cblxuXG4gIGZ1bmN0aW9uIGRyYXdPdmVybGF5cygpIHtcblxuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBvdmVybGF5TmFtZXMubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgICAgIHZhciBvdmVybGF5TmFtZSA9IG92ZXJsYXlOYW1lc1tpXTtcbiAgICAgIHZhciBjdXJyT3ZlcmxheSA9IG92ZXJsYXlzW2ldO1xuXG4gICAgICBpZiAoY3Vyck92ZXJsYXkgJiYgY3Vyck92ZXJsYXkub3ZlcmxheU5hbWUgPT09IG92ZXJsYXlOYW1lKSB7XG4gICAgICAgIGNvbnRpbnVlOyAvLyBsYXllciBpcyBhbHJlYWR5IHRoZXJlLCBjb250aW51ZSBvbiFcbiAgICAgIH1cblxuICAgICAgLy8gcmVtb3ZlIHRoZSBjdXJyZW50IGxheWVyIHRoYXQgaXMgbm90IHdoYXQgc2hvdWxkIGJlIHRoYXQgbGF5ZXIgaW4gdGhlIGxpc3RcbiAgICAgIGVsc2UgaWYgKGN1cnJPdmVybGF5ICYmIGN1cnJPdmVybGF5Ll9tYXApIHtcbiAgICAgICAgaWYgKGN1cnJPdmVybGF5LmRlc3Ryb3lSZXNvdXJjZSkgY3Vyck92ZXJsYXkuZGVzdHJveVJlc291cmNlKCk7XG4gICAgICAgIG1hcC5yZW1vdmVMYXllcihjdXJyT3ZlcmxheSk7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogTWFwbmlrIFZlY3RvciBUaWxlIEZvcm1hdCAoLlBCRilcbiAgICAgICAqL1xuICAgICAgaWYgKHR5cGVvZiBMYXllckNvbmZpZ1tvdmVybGF5TmFtZV0gPT09ICdvYmplY3QnXG4gICAgICAgICYmIExheWVyQ29uZmlnW292ZXJsYXlOYW1lXS50eXBlLnRvTG93ZXJDYXNlKCkgPT09ICdwYmYnKSB7XG5cbiAgICAgICAgdmFyIHZlY1JlcyA9IFZlY3RvclByb3ZpZGVyLmNyZWF0ZVJlc291cmNlKG92ZXJsYXlOYW1lKTtcbiAgICAgICAgaWYgKHZlY1Jlcykge1xuICAgICAgICAgIHZhciBsYXllciA9IHZlY1Jlcy5nZXRMYXllcigpO1xuICAgICAgICAgIGxheWVyLm92ZXJsYXlOYW1lID0gb3ZlcmxheU5hbWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgLy9Ob3QgYSB2YWxpZCBsYXllci5cbiAgICAgICAgICBjb25zb2xlLmxvZyhvdmVybGF5TmFtZSArIFwiIGlzIG5vdCBhIGxheWVyIHNwZWNpZmllZCBpbiBsYXllckNvbmZpZy5qc1wiKTtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG5cbiAgICAgIH1cblxuICAgICAgLy8gdHJ5IGZvciBXTVMgKG5vdCBhIHZlY3RvciBsYXllcilcbiAgICAgIC8vIGlmIHRoaW5ncyBnZXQgbW9yZSBmYW5jeSB3aXRoIHdtcywgaXQgc2hvdWxkIGdldCBpdHMgb3duIGZhY3RvcnlcbiAgICAgIGVsc2UgaWYgKHR5cGVvZiBMYXllckNvbmZpZ1tvdmVybGF5TmFtZV0gPT09ICdvYmplY3QnXG4gICAgICAgICYmIExheWVyQ29uZmlnW292ZXJsYXlOYW1lXS50eXBlLnRvTG93ZXJDYXNlKCkgPT09ICd3bXMnKSB7XG5cbiAgICAgICAgdmFyIGNmZyA9IExheWVyQ29uZmlnW292ZXJsYXlOYW1lXTtcblxuICAgICAgICBpZiAoY2ZnKSB7XG5cblxuICAgICAgICAgIHZhciBsYXllciA9IEwudGlsZUxheWVyLndtcyhjZmcudXJsLCB7XG4gICAgICAgICAgICBmb3JtYXQ6IGNmZy5mb3JtYXQgfHwgJ2ltYWdlL3BuZycsXG4gICAgICAgICAgICB0cmFuc3BhcmVudDogY2ZnLnRyYW5zcGFyZW50IHx8IHRydWUsXG4gICAgICAgICAgICBsYXllcnM6IGNmZy5sYXllcnNcbiAgICAgICAgICB9KTtcblxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIC8vTm90IGEgdmFsaWQgbGF5ZXIuXG4gICAgICAgICAgY29uc29sZS5sb2cob3ZlcmxheU5hbWUgKyBcIiBpcyBub3QgYSBsYXllciBzcGVjaWZpZWQgaW4gbGF5ZXJDb25maWcuanNcIik7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuXG4gICAgICAvKipcbiAgICAgICAqIFRpbGVzIHRoYXQgYXJlIGFuIG92ZXJsYXkuIE9TTSAvIEdvb2dsZSAvIE1hcG5payB0ZW5kIHRvIG1ha2UgdGlsZXMgaW4gdGhpcyBmb3JtYXQuXG4gICAgICAgKi9cbiAgICAgIGVsc2UgaWYgKHR5cGVvZiBMYXllckNvbmZpZ1tvdmVybGF5TmFtZV0gPT09ICdvYmplY3QnXG4gICAgICAgICYmIExheWVyQ29uZmlnW292ZXJsYXlOYW1lXS50eXBlLnRvTG93ZXJDYXNlKCkgPT09ICd4eXonKSB7XG5cbiAgICAgICAgdmFyIGNmZyA9IExheWVyQ29uZmlnW292ZXJsYXlOYW1lXTtcbiAgICAgICAgaWYgKGNmZykge1xuXG5cbiAgICAgICAgICB2YXIgbGF5ZXIgPSBMLnRpbGVMYXllcihjZmcudXJsLCB7XG4gICAgICAgICAgICBvcGFjaXR5OiBjZmcub3BhY2l0eSB8fCAwLjVcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIC8vTm90IGEgdmFsaWQgbGF5ZXIuXG4gICAgICAgICAgY29uc29sZS5sb2cob3ZlcmxheU5hbWUgKyBcIiBpcyBub3QgYSBsYXllciBzcGVjaWZpZWQgaW4gbGF5ZXJDb25maWcuanNcIik7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBUTVMgZmxpcHMgdGhlIHkuIEdlb1NlcnZlciBvZnRlbiBzZXJ2ZXMgdGhpcy5cbiAgICAgICAqL1xuICAgICAgZWxzZSBpZiAodHlwZW9mIExheWVyQ29uZmlnW292ZXJsYXlOYW1lXSA9PT0gJ29iamVjdCdcbiAgICAgICAgJiYgTGF5ZXJDb25maWdbb3ZlcmxheU5hbWVdLnR5cGUudG9Mb3dlckNhc2UoKSA9PT0gJ3RtcycpIHtcbiAgICAgICAgdmFyIGNmZyA9IExheWVyQ29uZmlnW292ZXJsYXlOYW1lXTtcblxuICAgICAgICBpZiAoY2ZnKSB7XG4gICAgICAgICAgdmFyIGxheWVyID0gTC50aWxlTGF5ZXIoY2ZnLnVybCwge1xuICAgICAgICAgICAgb3BhY2l0eTogY2ZnLm9wYWNpdHkgfHwgMC41LFxuICAgICAgICAgICAgdG1zOiB0cnVlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAvL05vdCBhIHZhbGlkIGxheWVyLlxuICAgICAgICAgIGNvbnNvbGUubG9nKG92ZXJsYXlOYW1lICsgXCIgaXMgbm90IGEgbGF5ZXIgc3BlY2lmaWVkIGluIGxheWVyQ29uZmlnLmpzXCIpO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIGlmIGl0cyBub3Qgd21zLCBpdHMgYSB2ZWN0b3IgbGF5ZXJcbiAgICAgIGVsc2Uge1xuICAgICAgICB2YXIgdmVjUmVzID0gVmVjdG9yUHJvdmlkZXIuY3JlYXRlUmVzb3VyY2Uob3ZlcmxheU5hbWUpO1xuICAgICAgICBpZiAodmVjUmVzKSB7XG4gICAgICAgICAgdmFyIGxheWVyID0gdmVjUmVzLmdldExheWVyKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgLy9Ob3QgYSB2YWxpZCBsYXllci5cbiAgICAgICAgICBjb25zb2xlLmxvZyhvdmVybGF5TmFtZSArIFwiIGlzIG5vdCBhIGxheWVyIHNwZWNpZmllZCBpbiBsYXllckNvbmZpZy5qc1wiKTtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZihsYXllcil7XG4gICAgICAgIGxheWVyLm92ZXJsYXlOYW1lID0gb3ZlcmxheU5hbWU7XG4gICAgICAgIGxheWVyLmFkZFRvKG1hcCk7XG4gICAgICAgIG92ZXJsYXlzW2ldID0gbGF5ZXI7XG4gICAgICAgIG92ZXJsYXlzX2RpY3Rpb25hcnlbb3ZlcmxheU5hbWVdID0gbGF5ZXI7IC8va2VlcCBhIGRpY3Rpb25hcnkgcmVmZXJlbmNlIGZvciBmYXN0ZXIgZmV0Y2hpbmcgaW4gVXBkYXRlRUNPU0RhdGFcblxuICAgICAgICAvL1NlZSB3aGljaCBHQURNIGxldmVsIGlzIGN1cnJlbnRseSBsb2FkZWQgYW5kIHN0b3JlIGl0IGluIHJvb3RTY29wZSAoYXNzdW1lcyBvbmUgYXQgYSB0aW1lLCB3aGljaCBtaWdodCBnbyBhd2F5IGF0IHNvbWUgcG9pbnQpXG4gICAgICAgIGlmIChMYXllckNvbmZpZy50aGVtZUxheWVycy5pbmRleE9mKG92ZXJsYXlOYW1lKSA+IC0xKSB7XG4gICAgICAgICAgLy9XZSBoYXZlIG9uZSBvZiB0aGUgdGhlbWUgbGF5ZXJzIChHQURNKSwgcGFyc2UgdGhlIG5hbWUgYW5kIGZpbmQgb3V0IHdoaWNoIGxldmVsIHdlJ3JlIGRlYWxpbmcgd2l0aCBhcyBvcHBvc2VkIHRvIHN0b3JpbmcgYSBzZWFwcmF0ZSBsZXZlbCBzdGF0ZSBwYXJhbVxuICAgICAgICAgIHZhciBsZXZlbCA9IG92ZXJsYXlOYW1lLnN1YnN0cmluZyhvdmVybGF5TmFtZS5sZW5ndGggLSAxLCBvdmVybGF5TmFtZS5sZW5ndGgpO1xuICAgICAgICAgICRyb290U2NvcGUubGV2ZWwgPSBsZXZlbDsgLy9TdG9yZSBpbiByb290c2NvcGVcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIHRoZXJlIGFyZSBtb3JlIG92ZXJsYXlzIGxlZnQgaW4gdGhlIGxpc3QsIGxlc3MgbGF5ZXJzIHNwZWNpZmllZCBpbiByb3V0ZVxuICAgIC8vIHdlIG5lZWQgdG8gcmVtb3ZlIHRob3NlIHRvby5cbiAgICBmb3IgKHZhciBsZW4yID0gb3ZlcmxheXMubGVuZ3RoOyBpIDwgbGVuMjsgKytpKSB7XG4gICAgICBpZiAob3ZlcmxheXNbaV0gJiYgb3ZlcmxheXNbaV0uZGVzdHJveVJlc291cmNlKSB7XG4gICAgICAgIG92ZXJsYXlzW2ldLmRlc3Ryb3lSZXNvdXJjZSgpO1xuICAgICAgICBtYXAucmVtb3ZlTGF5ZXIob3ZlcmxheXNbaV0pO1xuICAgICAgICBkZWxldGUgb3ZlcmxheXNfZGljdGlvbmFyeVtvdmVybGF5c1tpXS5vdmVybGF5TmFtZV07IC8vZGVsZXRlIGRpY3Rpb25hcnkgcmVmZXJlbmNlIGZvciBmYXN0ZXIgZmV0Y2hpbmcgaW4gVXBkYXRlRUNPU0RhdGFcbiAgICAgICAgZGVsZXRlIG92ZXJsYXlzW2ldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG5cbiAgLyoqXG4gICAqIFdoZW4gdGhlIHRoZW1lIGxhYmVsIHN0YXRlIGNoYW5nZXMsIHRoaXMgZnVuY3Rpb24gd2lsbCBiZSBmaXJlZC5cbiAgICogQHBhcmFtIHRoZW1lXG4gICAqL1xuICBmdW5jdGlvbiBvblRoZW1lTGFiZWxDaGFuZ2VkKCkge1xuXG4gICAgLy9GaW5kIHRoZSBjdXJyZW50IHRoZW1lIGxldmVsLCBpZiBhbnlcbiAgICB2YXIgbGV2ZWwgPSAkcm9vdFNjb3BlLmxldmVsOyAvL3NldCBpbiBkcmF3b3ZlcmxheXNcblxuICAgIGlmKCFsZXZlbCkgcmV0dXJuOyAvL25vIHRoZW1lXG5cbiAgICB2YXIgbGF5ZXIgPSBvdmVybGF5c19kaWN0aW9uYXJ5W1wiZ2FkbVwiICsgbGV2ZWxdO1xuXG4gICAgaWYgKGxheWVyKSB7XG4gICAgICByZWRyYXdUaGVtZUxheWVycyhsYXllcik7XG4gICAgfVxuXG4gIH1cblxuICAvKipcbiAgICogV2hlbiB0aGUgdGhlbWUgY2hhbmdlcywgdGhpcyBmdW5jdGlvbiB3aWxsIGJlIGZpcmVkLlxuICAgKiBAcGFyYW0gdGhlbWVcbiAgICovXG4gIGZ1bmN0aW9uIG9uVGhlbWVDaGFuZ2VkKHRoZW1lKSB7XG5cbiAgICBpZigkc3RhdGVQYXJhbXMudGhlbWUpe1xuICAgICAgZm9yY2VHYWRtMCgpO1xuICAgIH1cblxuICAgIC8vRmluZCB0aGUgY3VycmVudCB0aGVtZSBsZXZlbCwgaWYgYW55XG4gICAgdmFyIGxldmVsID0gJHJvb3RTY29wZS5sZXZlbDsgLy9zZXQgaW4gZHJhd292ZXJsYXlzXG5cbiAgICBpZiAoIWxldmVsKSByZXR1cm47IC8vbm8gdGhlbWVcblxuICAgIHZhciBsYXllciA9IG92ZXJsYXlzX2RpY3Rpb25hcnlbXCJnYWRtXCIgKyBsZXZlbF07XG5cbiAgICBpZiAobGF5ZXIpIHtcblxuICAgICAgaWYoJHN0YXRlUGFyYW1zLnRoZW1lLnRvTG93ZXJDYXNlKCkgPT09ICdub25lJyl7XG4gICAgICAgICAgLy9Ta2lwIHRoZSBtdW1ibyBqdW1iby4gIENsZWFyIHRoZSBjYWNoZWQgRUNPUyBkYXRhIGFuZCByZWRyYXcgZW1wdHlcbiAgICAgICAgICAkcm9vdFNjb3BlLnZ0RGF0YSA9IHt9O1xuICAgICAgICAgIHJlZHJhd1RoZW1lTGF5ZXJzKGxheWVyKTtcbiAgICAgIH1cbiAgICAgIGVsc2V7XG4gICAgICAgIC8vRm9yIHZlY3RvciB0aWxlIGNob3JvcGxldGhzLCBhc2sgZm9yIG5ldyBkYXRhIC5qc29uIGZyb20gdGhlIHNlcnZlclxuICAgICAgICBnZXRFQ09TUHJvcGVydGllcyhmdW5jdGlvbiAoZGF0YSkge1xuXG4gICAgICAgICAgaWYgKGRhdGEgJiYgZGF0YS5mZWF0dXJlcykge1xuXG4gICAgICAgICAgICB2YXIgZ3VpZHMgPSB7fTtcblxuICAgICAgICAgICAgYW5ndWxhci5mb3JFYWNoKGRhdGEuZmVhdHVyZXMsIGZ1bmN0aW9uIChkYXRhSXRlbSwgZGF0YUtleSkge1xuICAgICAgICAgICAgICBndWlkc1tkYXRhSXRlbS5wcm9wZXJ0aWVzLmd1aWRdID0gZGF0YUl0ZW0ucHJvcGVydGllcztcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAkcm9vdFNjb3BlLnZ0RGF0YSA9IGd1aWRzOyAvL1N0b3JlIHRoZSBkYXRhIHRvIGJlIG1lcmdlZCB3aXRoIHZlY3RvciB0aWxlIGxheWVyLiAgSW4gY29uZmlnL3ZlY3RvcnRpbGVzLmpzLCB0aGUgTVZUIGNob3JvcGxldGggbGF5ZXJzIHdpbGwgYXR0ZW1wdCB0byBtZXJnZSB0aGlzIGRhdGEgaW4gd2hlbiB0aWxlcyBmaW5pc2ggbG9hZGluZyAoYW55IHRpbWUgbmV3IHRpbGVzIGFyZSByZXF1ZXN0ZWQsIGxpa2Ugem9vbWluL291dC9wYW4pXG5cbiAgICAgICAgICAgIHJlZHJhd1RoZW1lTGF5ZXJzKGxheWVyKTtcblxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH1cblxuICAgIH1cblxuICB9XG5cblxuXG4gIGZ1bmN0aW9uIHJlZHJhd1RoZW1lTGF5ZXJzKGxheWVyKXtcbiAgICB2YXIgbGF5ZXJzID0gbGF5ZXIuZ2V0TGF5ZXJzKCk7XG5cbiAgICBpZiAoIWxheWVycykgcmV0dXJuOyAvL25vIGxheWVycyBoYXZlIGxvYWRlZCB5ZXQuICBUaGlzIG5lZWRzIHRvIHdhaXQgdW50aWwgc29tZSB0aWxlcyBoYXZlIGxvYWRlZC5cblxuICAgIHZhciB2dExheWVyO1xuICAgIHZhciB2dExhYmVsTGF5ZXI7XG5cbiAgICAvL1RPRE86IE1vdmUgdGhpcyBsb2dpYyB0byBhIHNpbmdsZSBsb2NhdGlvblxuXG4gICAgdnRMYXllciA9IGxheWVyc1tcIkdBRE1fMjAxNFwiXTtcbiAgICB2dExhYmVsTGF5ZXIgPSBsYXllcnNbXCJHQURNXzIwMTRfbGFiZWxcIl07XG5cblxuICAgIGlmKHZ0TGF5ZXIgJiYgdnRMYXllci5mZWF0dXJlcykge1xuICAgICAgLy9DbGVhciBlY29zIHByb3BlcnR5IGZyb20gTVZURmVhdHVyZVxuICAgICAgY2xlYXJGZWF0dXJlUHJvcGVydGllcyh2dExheWVyLmZlYXR1cmVzKTtcbiAgICAgIC8vQ2xlYXIgZWNvcyBwcm9wZXJ0eSBmcm9tIExhYmVsIExheWVyXG4gICAgICBjbGVhckZlYXR1cmVQcm9wZXJ0aWVzKHZ0TGFiZWxMYXllci5mZWF0dXJlcyk7XG5cblxuICAgICAgLy9VcGRhdGUgTGF5ZXIocykgc3R5bGUgYW5kIHJlZHJhd1xuICAgICAgdnRMYXllci5jbGVhckxheWVyRmVhdHVyZUhhc2goKTsgLy9Gb3JjZSBWVHMgdG8gYmUgcmVwYXJzZWQuXG4gICAgICB2dExhYmVsTGF5ZXIuY2xlYXJMYXllckZlYXR1cmVIYXNoKCk7XG4gICAgfVxuXG4gICAgLy9DbGVhciB0aGUgTVZUIGludGVybmFsIGxlZ2VuZCBvYmplY3QgYmVmb3JlIHJlZHJhd2luZ1xuICAgIGlmKHZ0TGF5ZXIpIHZ0TGF5ZXIuY2xlYXJMZWdlbmRPYmplY3QoKTtcbiAgICBpZih2dExhYmVsTGF5ZXIpIHZ0TGFiZWxMYXllci5jbGVhckxlZ2VuZE9iamVjdCgpO1xuXG4gICAgbGF5ZXIucmVkcmF3KHRydWUpOyAvL2ZhbHNlIG1lYW5zIHRoYXQgdGhpcyByZWRyYXcgd29uJ3QgdHJpZ2dlciB0aGUgb25UaWxlc0xvYWRlZCBldmVudC5cblxuICAgIC8vRmV0Y2ggdGhlIGxlZ2VuZCBhZnRlciByZWRyYXdcbiAgICAvL25lZWQgdG8gd2FpdCB1bnRpbCBhbGwgdGlsZXMgZmluaXNoIGRyYXdpbmdcbiAgICBsYXllci5vcHRpb25zLm9uVGlsZXNMb2FkZWQgPSBmdW5jdGlvbigpe1xuICAgICAgaWYodnRMYXllcil7XG4gICAgICAgIHZhciBsZWdlbmRPYmplY3QgPSB2dExheWVyLmdldExlZ2VuZE9iamVjdCgpO1xuICAgICAgICBpZihsZWdlbmRPYmplY3Qpe1xuICAgICAgICAgIC8vc2V0IGl0IGVxdWFsIHRvIHRoZSBzY29wZVxuICAgICAgICAgICRzY29wZS5sZWdlbmRPYmplY3QgPSBsZWdlbmRPYmplY3Q7XG5cbiAgICAgICAgICAvLyBicm9hZGNhc3QgbGVnZW5kIHdpZHRoIGZvciByZXNpemVcbiAgICAgICAgICBpZigkc3RhdGVQYXJhbXMudGhlbWUgPT0gJ2Rpc2FzdGVyVHlwZScpe1xuICAgICAgICAgICAgJHNjb3BlLmZpcnN0T2JqZWN0ID0gbGVnZW5kT2JqZWN0W09iamVjdC5rZXlzKGxlZ2VuZE9iamVjdClbMF1dO1xuICAgICAgICAgICAgdmFyIGxlZ2VuZFdpZHRoID0ge3dpZHRoOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGVnZW5kJykub2Zmc2V0V2lkdGh9O1xuICAgICAgICAgICAgbGVnZW5kV2lkdGguZm9sZCA9IChPYmplY3Qua2V5cyhsZWdlbmRPYmplY3QpLmxlbmd0aCA+IDIpO1xuICAgICAgICAgICAgJHJvb3RTY29wZS4kYnJvYWRjYXN0KCdsZWdlbmQtd2lkdGgnLCBsZWdlbmRXaWR0aCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJHNjb3BlLnRoZW1lTGFiZWwgPSAkcm9vdFNjb3BlLnRoZW1lTmFtZUhhc2hbJHN0YXRlUGFyYW1zLnRoZW1lXTtcbiAgICAgICAgICAvLyRzY29wZS5sZWdlbmRPYmplY3RMYWJlbCA9IGxlZ2VuZE9iamVjdFtPYmplY3Qua2V5cyhsZWdlbmRPYmplY3QpWzBdXS5sZWdlbmRMYWJlbC5yZXBsYWNlKFwiI1wiLFwiXCIpOyAvL3JlbW92ZSAnIydcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZih2dExhYmVsTGF5ZXIpe1xuICAgICAgICB2YXIgYnViYmxlTGVnZW5kT2JqZWN0ID0gdnRMYWJlbExheWVyLmdldExlZ2VuZE9iamVjdCgpO1xuICAgICAgICBpZihidWJibGVMZWdlbmRPYmplY3Qpe1xuICAgICAgICAgIC8vc2V0IGl0IGVxdWFsIHRvIHRoZSBzY29wZVxuICAgICAgICAgIGlmKCRzdGF0ZVBhcmFtcy50aGVtZS50b0xvd2VyQ2FzZSgpID09IFwiZGlzYXN0ZXJ0eXBlXCIpe1xuICAgICAgICAgICAgLy9EaXNhc3RlciB0eXBlIGhhcyBkaWZmZXJlbnQgYnViYmxlIGltYWdlc1xuICAgICAgICAgICAgJHNjb3BlLmJ1YmJsZUxlZ2VuZE9iamVjdCA9IGJ1YmJsZUxlZ2VuZE9iamVjdDtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIC8vT3RoZXIgdGhlbWVzIHVzZSB0aGUgc2FtZSBidWJibGUgdHlwZS5cbiAgICAgICAgICAgIC8vU28ganVzdCBncmFiIHRoZSBmaXJzdCBvbmVcbiAgICAgICAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMoYnViYmxlTGVnZW5kT2JqZWN0KTtcbiAgICAgICAgICAgIGlmKGJ1YmJsZUxlZ2VuZE9iamVjdFtrZXlzWzBdXSAmJiBidWJibGVMZWdlbmRPYmplY3Rba2V5c1swXV0ub3B0aW9ucyAmJiBidWJibGVMZWdlbmRPYmplY3Rba2V5c1swXV0ub3B0aW9ucy5odG1sKXtcbiAgICAgICAgICAgICAgJHNjb3BlLnNpbmdsZUJ1YmJsZU9iamVjdCA9ICRzY2UudHJ1c3RBc0h0bWwoYnViYmxlTGVnZW5kT2JqZWN0W2tleXNbMF1dLm9wdGlvbnMuaHRtbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cblxuICAvKipcbiAgICogV2hlbiB0aGUgZmlsdGVycyBjaGFuZ2UsIHRoaXMgZnVuY3Rpb24gd2lsbCBiZSBmaXJlZC5cbiAgICogQHBhcmFtIHRoZW1lXG4gICAqL1xuICBmdW5jdGlvbiBvbkZpbHRlcnNDaGFuZ2VkKGZpbHRlcnMpe1xuXG4gIH1cblxuICAvKipcbiAgICogRm9yY2UgZ2FkbTAgb24gYWxsIGRpc2FzdGVyIHRoZW1lc1xuICAgKiBAcGFyYW0gdGhlbWVcbiAgICovXG4gIGZ1bmN0aW9uIGZvcmNlR2FkbTAoKXtcbiAgICB2YXIgdGhlbWUgPSAkc3RhdGVQYXJhbXMudGhlbWU7XG5cbiAgICBpZih0aGVtZS5pbmRleE9mKCdkaXNhc3RlcicpIT09LTEgJiYgJHN0YXRlUGFyYW1zLmxheWVycy5zcGxpdChcIixcIilbMV0gIT09ICdnYWRtMCcpe1xuICAgICAgdmFyIGxheWVyc0FycmF5O1xuXG4gICAgICBpZigkc3RhdGVQYXJhbXMubGF5ZXJzKXtcbiAgICAgICAgbGF5ZXJzQXJyYXkgPSAkc3RhdGVQYXJhbXMubGF5ZXJzLnNwbGl0KFwiLFwiKTtcbiAgICAgIH1cblxuICAgICAgLy9SZW1vdmUgYWxsIEdBRE0gbGF5ZXJzLlxuICAgICAgbGF5ZXJzQXJyYXkuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUsIGtleSkge1xuICAgICAgICBpZiAoTGF5ZXJDb25maWcudGhlbWVMYXllcnMuaW5kZXhPZih2YWx1ZSkgPiAtMSkge1xuICAgICAgICAgIGxheWVyc0FycmF5LnNwbGljZShsYXllcnNBcnJheS5pbmRleE9mKHZhbHVlKSwgMSk7IC8vcmVtb3ZlIGFueSBHQURNc1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgLy9BZGQgaW4gdGhlIGdhZG0gbGF5ZXIgdG8gdGhlIGxheWVycyBsaXN0IGluIHRoZSBzdGF0ZXBhcmFtcy5cbiAgICAgIGxheWVyc0FycmF5LnB1c2goXCJnYWRtMFwiKTtcbiAgICAgICRzdGF0ZVBhcmFtcy5sYXllcnMgPSBsYXllcnNBcnJheS5qb2luKFwiLFwiKTtcblxuICAgICAgdmFyIHN0YXRlID0gJHN0YXRlLmN1cnJlbnQubmFtZSB8fCAnbWFpbic7XG4gICAgICAkc3RhdGUuZ28oc3RhdGUsICRzdGF0ZVBhcmFtcyk7XG4gICAgfVxuXG4gIH1cblxuICBmdW5jdGlvbiByZWRyYXdNYXBPdmVybGF5cyhsYXllck5hbWVzKXtcbiAgICBtYXAuZWFjaExheWVyKGZ1bmN0aW9uIChsYXllcikge1xuICAgICAgaWYobGF5ZXJOYW1lcy5pbmRleE9mKGxheWVyLm92ZXJsYXlOYW1lKSA+IC0xKXtcbiAgICAgICAgbGF5ZXIucmVkcmF3KCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogVGFrZSBkYXRhL3Byb3BlcnRpZXMgZnJvbSB0aGUgc2VydmVyIGFuZCBtZXJnZSB0aGVtIGluIHdpdGggYSB2ZWN0b3IgdGlsZXMgbGF5ZXIuXG4gICAqIEBwYXJhbSBlY29zRGF0YSAtIHRoZSBkYXRhXG4gICAqIEBwYXJhbSBsYXllck5hbWVzIC0gYW55IGxheWVyIG5hbWVzIHRvIGFwcGx5IHRoZSBkYXRhIHRvXG4gICAqIEBuZXdUaGVtZSAtIGJvb2xlYW4uIElmIHRydWUsIGEgbmV3IHRoZW1lIGhhcyBiZWVuIHNlbGVjdGVkLCBzbyBleGlzdGluZyBWVCBwcm9wZXRpZXMgd2lsbCBiZSBjbGVhcmVkLiAgSWYgZmFsc2UsIHRoZW4gd2UgY2FuIHNraXAgZmVhdHVyZXMgdGhhdCBhbHJlYWR5IGhhdmUgYmVlbiAnZmlsbGVkJyBhbmQgd29ycnkgYWJvdXQgbmV3IG9uZXMuXG4gICAqL1xuICBmdW5jdGlvbiB1cGRhdGVFQ09TRGF0YShlY29zRGF0YSwgbmV3VGhlbWUpIHtcblxuICAgICAgdmFyIGxheWVyID0gb3ZlcmxheXNfZGljdGlvbmFyeVtcImdhZG0wXCJdO1xuXG4gICAgICBpZihsYXllcil7XG4gICAgICAgIGlmIChlY29zRGF0YSkge1xuICAgICAgICAgIHZhciBsYXllcnMgPSBsYXllci5nZXRMYXllcnMoKTtcblxuICAgICAgICAgIC8vVXBkYXRlIFZURlNvdXJjZSBmaWx0ZXJcbiAgICAgICAgICAvL2xheWVyLnNldEZpbHRlcihmdW5jdGlvbihtdnQsIGN0eCl7XG4gICAgICAgICAgLy8gIC8vRmlsdGVyIGNoZWNrcyBpZiBmZWF0dXJlIGhhcyBlY29zIHByb3BlcnRpZXMuXG4gICAgICAgICAgLy8gIHJldHVybiAoJHJvb3RTY29wZS52dERhdGEgJiYgJHJvb3RTY29wZS52dERhdGFbbXZ0LnByb3BlcnRpZXMuZ3VpZF0pID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgICAgIC8vfSlcblxuICAgICAgICAgIC8vSWYgYW55IGZlYXR1cmVzIGFyZSByZXR1cm5lZCwgbG9vcCB0aHJ1IHRoZSB2dGZzIGFuZCBhcHBseSB0aGVzZSB2YWx1ZXMsIHJlc3R5bGUuXG4gICAgICAgICAgbWVyZ2VFQ09TUHJvcGVydGllcyhsYXllcnMsIGVjb3NEYXRhLCBuZXdUaGVtZSk7XG5cblxuXG4gICAgICAgICAgLy9VcGRhdGUgTGF5ZXIocykgc3R5bGUgYW5kIHJlZHJhd1xuICAgICAgICAgIGxheWVyLnNldFN0eWxlKGxheWVyLnN0eWxlKTsgLy9mZWVkIGJhY2sgaW4gdGhlIHNhbWUgc3R5bGVcbiAgICAgICAgICBsYXllci5yZWRyYXcoZmFsc2UpOyAvL2ZhbHNlIG1lYW5zIHRoYXQgdGhpcyByZWRyYXcgd29uJ3QgdHJpZ2dlciB0aGUgb25UaWxlc0xvYWRlZCBldmVudC5cbiAgICAgICAgfVxuICAgICAgfVxuXG4gIH1cblxuICAvKioqXG4gICAqXG4gICAqIFdoZW4gdGhlIGFwcCBzdGFydHMsIG9yIHdoZW4gdGhlIGZpbHRlcnMgY2hhbmdlLCBmZXRjaCB0aGUgLmpzb24gZmlsZSB0aGF0IGNvbnRhaW5zIHRoZSBjb3VudHMgZm9yIGFsbCBvZiB0aGUgZGlzdHJpY3RzIGZvciBhIGdpdmVuIEFkbWluaXN0cmF0aXZlIGJvdW5kYXJ5IGxldmVsXG4gICAqIEN1cnJlbnRseSwgZWFjaCBvZiB0aGVzZSBmaWxlcyB3aWxsIGJlIHNtYWxsIGVub3VnaCB0byBidWxrIGxvYWQgdGhlbSBhIHNpbmdsZSB0aW1lLCBhcyBvcHBvc2VkIHRvIHdoZW4gdGhlIHVzZXIgcGFucyB0aGUgbWFwLlxuICAgKiBUaGVzZSBmaWxlcyB3aWxsIGJlIHVzZWQgdG8gdXBkYXRlIHRoZSB2ZWN0b3IgdGlsZXMgY2hvcm9wbGV0aCBtYXAuXG4gICAqXG4gICAqIEBwYXJhbSAkaHR0cFxuICAgKiBAcGFyYW0gJHJvb3RTY29wZVxuICAgKiBAcGFyYW0gY2JcbiAgICovXG4gIGZ1bmN0aW9uIGdldEVDT1NQcm9wZXJ0aWVzIChjYil7XG4gICAgLy9UaGlzIHNob3VsZCBmZXRjaCBkYXRhIGZyb20gdGhlIHNlcnZlciB0aGF0IHBlcnRhaW5zIHRvIHRoZSBmZWF0dXJlcyBsb2FkZWQgaW4gdGhlIGN1cnJlbnQgZXh0ZW50LlxuICAgIC8vdmFyIHVybCA9IFwiaHR0cDovL2xvY2FsaG9zdDozMDAxL3NlcnZpY2VzL2N1c3RvbS9jdXN0b21fb3BlcmF0aW9uP25hbWU9Z2V0YWdncmVnYXRlZHRoZW1lZmVhdHVyZXNieWV4dGVudCZmb3JtYXQ9Z2VvanNvbiZiYm94PTpiYm94JnRoZW1lPTp0aGVtZSZnYWRtX2xldmVsPTAmZmlsdGVycz06ZmlsdGVyc1wiO1xuXG4gICAgdmFyIGxldmVsID0gJHJvb3RTY29wZS5sZXZlbDtcblxuICAgIGlmICghbGV2ZWwpIHJldHVybjsgLy9leGl0IGlmIG5vIGxldmVsXG5cbiAgICB2YXIgdXJsID0gXCIuLi9zZXJ2aWNlcy9jdXN0b20vY3VzdG9tX29wZXJhdGlvbj9uYW1lPWdldGFsbGFnZ3JlZ2F0ZWR0aGVtZWZlYXR1cmVzJmZvcm1hdD1nZW9qc29uJnRoZW1lPTp0aGVtZSZnYWRtX2xldmVsPVwiICsgbGV2ZWwgKyBcIiZmaWx0ZXJzPTpmaWx0ZXJzXCI7XG5cbiAgICBpZiAoJHJvb3RTY29wZS4kc3RhdGVQYXJhbXMuZmlsdGVycykge1xuICAgICAgZmlsdGVycyA9ICRyb290U2NvcGUuJHN0YXRlUGFyYW1zLmZpbHRlcnM7XG4gICAgICAvL0FkZCBmaWx0ZXJzIHRvIFVSTC5cbiAgICAgIHVybCA9IHVybC5yZXBsYWNlKFwiOmZpbHRlcnNcIiwgZmlsdGVycyk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdXJsID0gdXJsLnJlcGxhY2UoXCImZmlsdGVycz06ZmlsdGVyc1wiLCBcIlwiKTsgLy9ubyBmaWx0ZXJzLiAgUmVtb3ZlXG4gICAgfVxuXG4gICAgdmFyIHRoZW1lID0gJHJvb3RTY29wZS4kc3RhdGVQYXJhbXMudGhlbWUgfHwgJ3Byb2plY3QnO1xuICAgIHVybCA9IHVybC5yZXBsYWNlKFwiOnRoZW1lXCIsIHRoZW1lKTtcblxuICAgIC8vV2hlbiBkb25lLCBjYWxsIHRoZSBjYiAoY2FsbGJhY2spIGZ1bmN0aW9uXG4gICAgJGh0dHAuZ2V0KHVybCwge2NhY2hlOiB0cnVlfSkuc3VjY2VzcyhjYikuZXJyb3IoZnVuY3Rpb24gKGVycikge1xuICAgICAgY29uc29sZS5sb2coXCJlcnJcIik7XG4gICAgfSk7XG4gIH1cblxuICAvL1Rha2UgYW4gTVZUTGF5ZXIocykgYW5kIGFkZCBpbiBwcm9wZXJ0aWVzIGZyb20gYSB3ZWIgc2VydmljZSBjYWxsXG4gIC8vbmV3VGhlbWUgaXMgYSBib29sZWFuIHRoYXQgdGVsbHMgdXMgd2hldGhlciB0byBjbGVhciBleGlzdGluZyBwcm9wZXJ0aWVzIG9yIGtlZXAgd2hhdCB3ZSd2ZSBnb3QgYW5kIGp1c3QgYWRkIHRvIHRoZSBzZXQuXG4gIGZ1bmN0aW9uIG1lcmdlRUNPU1Byb3BlcnRpZXMoTVZUTGF5ZXJzLCBkYXRhLCBuZXdUaGVtZSl7XG4gICAgaWYgKE1WVExheWVycykge1xuXG4gICAgICB2YXIgZnVsbFN0YXJ0ID0gbmV3IERhdGUoKTtcblxuICAgICAgLy9HcmFiIHRoZSBjdXJyZW50IHRoZW1lLlxuICAgICAgdmFyIHRoZW1lID0gKCRyb290U2NvcGUgJiYgJHJvb3RTY29wZS4kc3RhdGVQYXJhbXMgJiYgJHJvb3RTY29wZS4kc3RhdGVQYXJhbXMudGhlbWUpIHx8ICdwcm9qZWN0JztcblxuICAgICAgZm9yICh2YXIgbGF5ZXIgaW4gTVZUTGF5ZXJzKSB7XG4gICAgICAgIGlmIChsYXllciAmJiBNVlRMYXllcnNbbGF5ZXJdLmZlYXR1cmVzKSB7XG5cbiAgICAgICAgICAvL29wdGlvbmFsbHkgY2xlYXIgb3V0IG9sZCBFQ09TIHByb3BlcnRpZXMuXG4gICAgICAgICAgaWYgKG5ld1RoZW1lID09PSB0cnVlKSB7XG4gICAgICAgICAgICAvL0NsZWFyIGVjb3MgcHJvcGVydHkgZnJvbSBNVlRGZWF0dXJlXG4gICAgICAgICAgICBjbGVhckZlYXR1cmVQcm9wZXJ0aWVzKE1WVExheWVyc1tsYXllcl0uZmVhdHVyZXMpO1xuICAgICAgICAgICAgLy9cInVubGlua1wiIHRoZSBkYXRhIC0gc2V0IHRoZSBsaW5rZWQgcHJvcGVydHkgdG8gZmFsc2UuXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy9JdGVyYXRlIG92ZXIgZGF0YSwgdXNlIHRoZSBJRCB0byBhdHRlbXB0IHRvIGxpbmUgdXAgZGF0YSBpbiBNVlRMYXllci5mZWF0dXJlcyBkaWN0aW9uYXJ5IChpZCBpcyB0aGUga2V5KVxuICAgICAgICAgIGFuZ3VsYXIuZm9yRWFjaChPYmplY3Qua2V5cyhkYXRhKSwgZnVuY3Rpb24gKGtleSkgeyAvLy5tYXAoZnVuY3Rpb24oaXRlbSl7IHJldHVybiAhaXRlbS5wcm9wZXJ0aWVzLmlzTWFwcGVkOyB9KVxuICAgICAgICAgICAgdmFyIHZ0ZiA9IE1WVExheWVyc1tsYXllcl0uZmVhdHVyZXNba2V5XTtcblxuICAgICAgICAgICAgLy9tYXJrIGFzIGxpbmtlZFxuICAgICAgICAgICAgZGF0YS5pc0xpbmtlZCA9IHRydWU7XG5cbiAgICAgICAgICAgIGlmICh2dGYpIHtcbiAgICAgICAgICAgICAgdnRmLnByb3BlcnRpZXMudGhlbWUgPSB0aGVtZTtcbiAgICAgICAgICAgICAgdnRmLnByb3BlcnRpZXMuZWNvc19wcm9wZXJ0aWVzID0ge307XG4gICAgICAgICAgICAgIHZ0Zi5wcm9wZXJ0aWVzLmVjb3NfcHJvcGVydGllc1t0aGVtZV0gPSBkYXRhW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgbXNEaWZmID0gbmV3IERhdGUoKS5nZXRUaW1lKCkgLSBuZXcgRGF0ZShmdWxsU3RhcnQpLmdldFRpbWUoKTsgLy9EaWZmZXJlbmNlIGluIG1zXG4gICAgICBjb25zb2xlLmxvZyhcIk1lcmdlIFRpbWU6IFwiICsgbXNEaWZmKTtcbiAgICB9XG4gIH1cblxuICAvL0FzIHdlIHN3YXAgRUNPUyBwcm9wZXJ0aWVzIG91dCBvbiB0aGUgdmVjdG9yIHRpbGUgbGF5ZXIsIGNsZWFyIG91dCB0aGUgb2xkIHByb3BlcnRpZXMgc28gd2UgZG9uJ3QgZ2V0IHJlc2lkdWFsIHRoZW1lIHZhbHVlcyBmcm9tIG9sZCB0aGVtZXMuXG4gIGZ1bmN0aW9uIGNsZWFyRmVhdHVyZVByb3BlcnRpZXMoZmVhdHVyZXMpe1xuXG4gICAgYW5ndWxhci5mb3JFYWNoKGZlYXR1cmVzLCBmdW5jdGlvbiAodnRmLCB2dGZrZXkpIHtcbiAgICAgIGlmKHZ0Zi5wcm9wZXJ0aWVzKSB7XG4gICAgICAgIHZ0Zi5wcm9wZXJ0aWVzLmVjb3NfcHJvcGVydGllcyA9IHt9O1xuICAgICAgICB2dGYudGhlbWUgPSBcIlwiO1xuICAgICAgfVxuXG4gICAgICAvL1JlbW92ZSBPbGQgbGFiZWxzXG4gICAgICB2dGYucmVtb3ZlTGFiZWwoKTtcblxuICAgIH0pO1xuXG4gIH1cblxuICAvL1Rha2UgYSBsZWdlbmQgZGljaW9uYXJ5IGZyb20gTVZUTGF5ZXIgYW5kIGZvcm1hdCBpdCBmb3IgZGlzcGxheSBpbiBIVE1MIGxhbmQuXG4gIC8vZnVuY3Rpb24gZm9ybWF0TGVnZW5kKGxlZ2VuZE9iamVjdCl7XG4gIC8vICB2YXIgaHRtbCA9IFwiXCI7XG4gIC8vXG4gIC8vICBmb3IodmFyIHN0eWxlQ2xhc3MgaW4gbGVnZW5kT2JqZWN0KXtcbiAgLy9cbiAgLy9cbiAgLy9cbiAgLy8gIH1cbiAgLy9cbiAgLy8gIHJldHVybiBcIlwiO1xuICAvL31cblxufSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdHZW9Bbmd1bGFyJykuY29udHJvbGxlcignTmF2QmFyQ3RybCcsIGZ1bmN0aW9uKCRzY29wZSwgJHN0YXRlLCAkc3RhdGVQYXJhbXMpIHtcblxuICAkc2NvcGUucGFyYW1zID0gJHN0YXRlUGFyYW1zO1xuXG59KTtcbiIsIi8qKlxuICogQ3JlYXRlZCBieSBSeWFuIFdoaXRsZXkgPHJ3aGl0bGV5QHNwYXRpYWxkZXYuY29tPlxuICogICAgICAgb24gNS8yMS8xNC5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdHZW9Bbmd1bGFyJykuY29udHJvbGxlcignU2VhcmNoRUNPU0N0cmwnLCBmdW5jdGlvbigkc2NvcGUsICRyb290U2NvcGUsICRzdGF0ZVBhcmFtcywgJGh0dHAsIFZlY3RvclByb3ZpZGVyKSB7XG4gICRzY29wZS5wYXJhbXMgPSAkc3RhdGVQYXJhbXM7XG5cbiAgdmFyIHVybCA9IGNvbmZpZy5jaHViYnNQYXRoKCdzZXJ2aWNlcy9jdXN0b20vY3VzdG9tX29wZXJhdGlvbj9uYW1lPWRvZWNvc3RleHRzZWFyY2gmZm9ybWF0PWpzb24mdGV4dD06dGV4dCcpO1xuXG4gICRzY29wZS5zZWFyY2hUZXh0ID0gJyc7XG4gICRzY29wZS4kd2F0Y2goJ1NlYXJjaElucHV0JywgZXhlY3V0ZUVDT1NTZWFyY2gsIHRydWUpO1xuXG5cbiAgZnVuY3Rpb24gZXhlY3V0ZUVDT1NTZWFyY2ggKHRleHQpe1xuICAgICAgaWYoIXRleHQgfHwgdGV4dC5sZW5ndGggPCAzKSByZXR1cm47XG5cbiAgICAgIHZhciB0aGlzVVJMID0gdXJsLnJlcGxhY2UoXCI6dGV4dFwiLCB0ZXh0KTtcblxuICAgICAgLy8gRmV0Y2ggZnJvbSB0aGUgc2VydmVyIG9ubHkgaWYgd2UgZG9uJ3QgaGF2ZSBpdCBpbiB0aGUgaGFzaFxuICAgICAgJGh0dHAuZ2V0KHRoaXNVUkwpLnN1Y2Nlc3MoZnVuY3Rpb24gKHJlc3VsdCwgc3RhdHVzKSB7XG5cbiAgICAgICAgICBpZiAoIXJlc3VsdCl7XG4gICAgICAgICAgICAgICRzY29wZS5yZXN1bHRzID0gW3tuYW1lOiBcIk5vIHJlc3VsdHMgZm91bmQuXCJ9XTtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmKHJlc3VsdC5lcnJvcikge1xuICAgICAgICAgICAgICAkc2NvcGUucmVzdWx0cyA9IFt7bmFtZTogXCJFcnJvciBzZWFyY2hpbmcgRUNPUy5cIn1dO1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy9icmVhayB1cCB0aGUgcmVzdWx0cyBieSB0eXBlLlxuICAgICAgICAgICRzY29wZS5wcm9qZWN0UmVzdWx0cyA9IHJlc3VsdC5maWx0ZXIoZnVuY3Rpb24oaXRlbSl7XG4gICAgICAgICAgICAgcmV0dXJuIGl0ZW0udGhlbWVfdHlwZSA9PSAnUHJvamVjdCc7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICAkc2NvcGUuZGlzYXN0ZXJSZXN1bHRzID0gcmVzdWx0LmZpbHRlcihmdW5jdGlvbihpdGVtKXtcbiAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0udGhlbWVfdHlwZSA9PSAnRGlzYXN0ZXInO1xuICAgICAgICAgIH0pO1xuXG4gICAgICB9KTtcbiAgfVxuXG4gICAgLy9XaGVuIGEgdXNlciBjbGlja3Mgb25lIG9mIHRoZSBzZWFyY2ggcmVzdWx0IGl0ZW1zXG4gICAgJHNjb3BlLmhhbmRsZVNlYXJjaFJlc3VsdENsaWNrID0gZnVuY3Rpb24ocHJvcGVydGllcyl7XG4gICAgICAgIC8vU2VuZCB0byBkZWF0aWxzIHBhbmVsXG4gICAgICAgIHNlbmRQcm9qZWN0VG9EZXRhaWxzUGFuZWwocHJvcGVydGllcyk7XG5cbiAgICAgICAgLy9JZiB3ZSBoYXZlIGEgZ3VpZCwgdGhlbiB0cnkgdG8gem9vbSB0byBpdC5cbiAgICAgICAgaWYocHJvcGVydGllcy5sb2NhdGlvbl9fcl9naXNfZ2VvX2lkX19jICYmIHByb3BlcnRpZXMubGV2ZWwpe1xuICAgICAgICAgICAgem9vbVRvR1VJRChwcm9wZXJ0aWVzLmxvY2F0aW9uX19yX2dpc19nZW9faWRfX2MsIHByb3BlcnRpZXMubGV2ZWwpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIHNlbmRQcm9qZWN0VG9EZXRhaWxzUGFuZWwgKHByb3BlcnRpZXMpIHtcbiAgICAgICRyb290U2NvcGUuJGJyb2FkY2FzdCgnZGV0YWlscycsIHtmZWF0dXJlOiB7cHJvcGVydGllczogcHJvcGVydGllc319KTtcbiAgICB9XG5cblxuICAgIC8vdGhpcyBpcyBhIGR1cGxpY2F0ZSBmcm9tIGJyZWFkY3J1bWJzLmpzICBTaG91bGQgYmUgcmVmYWN0b3JlZCB0byBhIHNpbmdsZSBmdW5jdGlvblxuICAgIGZ1bmN0aW9uIHpvb21Ub0dVSUQgKGd1aWQsIGxldmVsKSB7XG4gICAgICAgIC8vR2l2ZW4gYSBHVUlELCB6b29tIHRvIHRoZSBmZWF0dXJlLlxuXG4gICAgICAgIC8vR3JhYiB0aGUgZmVhdHVyZSBmcm9tIHRoZSBWZWN0b3JQcm92aWRlci5cbiAgICAgICAgVmVjdG9yUHJvdmlkZXIuZmV0Y2hGZWF0dXJlKGd1aWQsIGxldmVsLCBudWxsLCBmdW5jdGlvbiAoZmVhdCkge1xuICAgICAgICAgICAgLy9NYWtlIGEgdGVtcCBnZW9qc29uIGxheWVyIGFuZCBhZGQgdGhlIGdlb2pzb24uXG4gICAgICAgICAgICAvL1RoZW4gZ3JhYiB0aGUgYm91bmRzIGZyb20gaXQgYW5kIHpvb20gdG8gaXQuXG5cbiAgICAgICAgICAgIHZhciBnamwgPSBMLmdlb0pzb24oZmVhdC5nZW9tZXRyeSk7XG4gICAgICAgICAgICAkc2NvcGUuJHBhcmVudC56b29tVG9Cb3VuZHMoZ2psLmdldEJvdW5kcygpKTtcbiAgICAgICAgfSk7XG5cbiAgICB9O1xufSk7XG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgTmljaG9sYXMgSGFsbGFoYW4gPG5oYWxsYWhhbkBzcGF0aWFsZGV2LmNvbT5cbiAqICAgICAgICBhbmQgUnlhbiBXaGl0bGV5ICAgICAgPHJ3aGl0bGV5QHNwYXRpYWxkZXYuY29tPlxuICogICAgICAgICBvbiA0LzE2LzE0LlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ0dlb0FuZ3VsYXInKS5jb250cm9sbGVyKCdTaWRlVmlld0N0cmwnLCBmdW5jdGlvbigkc2NvcGUpIHtcblxuICAvL3Jlc2l6ZSBmdW5jdGlvblxuICBmdW5jdGlvbiByZXNpemVTY3JvbGxhYmxlUGFuZWwoKSB7XG4gICAgJChcIi5zaWRlLXZpZXcgLnNjcm9sbGFibGVcIikuaGVpZ2h0KCQoXCIuc2lkZS12aWV3IC5uYXZwYW5lbFwiKS5oZWlnaHQoKSAtICQoXCIuc2lkZS12aWV3IC5uYXZwYW5lbCAuc2Nyb2xsYWJsZVwiKS5wb3NpdGlvbigpLnRvcCk7ICAvL1RoaXMgc2hvdWxkIHJlc3BvbmQgdG8gd2luZG93LnJlc2l6ZSBldmVudHMgYW5kIHdpbGwgYmUgc2V0IGR1cmluZyB0aGF0IGV2ZW50IHRvIG1ha2Ugc3VyZSB0aGUgcGFuZWwgc3RheXNcbiAgfVxuXG4gIC8vQ29ubmVjdCB0aGUgbGF5b3V0IG9ucmVzaXplIGVuZCBldmVudFxuICB3aW5kb3cubGF5b3V0LnBhbmVzLmNlbnRlci5iaW5kKFwibGF5b3V0cGFuZW9ucmVzaXplX2VuZFwiLCByZXNpemVTY3JvbGxhYmxlUGFuZWwpO1xuXG4gIC8vRm9yIEluaXQuXG4gIHJlc2l6ZVNjcm9sbGFibGVQYW5lbCgpO1xuXG59KTtcbiIsIi8qKlxuICogQ3JlYXRlZCBieSBOaWNob2xhcyBIYWxsYWhhbiA8bmhhbGxhaGFuQHNwYXRpYWxkZXYuY29tPlxuICogICAgICAgb24gMy8yNi8xNC5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdHZW9Bbmd1bGFyJykuY29udHJvbGxlcignU3Rvcmllc0N0cmwnLCBmdW5jdGlvbigkc2NvcGUsICRzdGF0ZVBhcmFtcywgU3Rvcmllc0NvbmZpZykge1xuICAkc2NvcGUucGFyYW1zID0gJHN0YXRlUGFyYW1zO1xuXG4gIC8vR2V0IFN0b3JpZXMgZnJvbSBjb25maWcgZmlsZSBhbmQgbG9hZCB0aGVtLlxuICAkc2NvcGUuc3Rvcmllc0NvbmZpZyA9IFN0b3JpZXNDb25maWc7XG4gICRzY29wZS5zdG9yaWVzID0gW107XG4gICRzY29wZS5zdG9yaWVzU2VhcmNoQXJyYXkgPSBbXTtcbiAgJHNjb3BlLnN0b3JpZXNTZWFyY2hUZXh0ID0gXCJcIjtcbiAgJHNjb3BlLnN0b3JpZXNFeHRlbnRBcnJheSA9IFtdOyAvL2N1cnJlbnRseSBub3QgdXNlZCwgYnV0IHNob3VsZCBiZSB0byBhbGxvdyBFeHRlbnQgdG8gcGVyZm9ybSAnQU5EJyBsb2dpYyB3aXRoIHRoZSBrZXl3b3Jkcy5cblxuICBmb3IgKHZhciBzdG9yaWVzS2V5IGluIFN0b3JpZXNDb25maWcpIHtcblxuICAgIC8vIFdlIGRvbid0IHdhbnQgdG8gc2hvdyB0aGUgZmluZCBmdW5jLlxuICAgIGlmICh0eXBlb2YgU3Rvcmllc0NvbmZpZ1tzdG9yaWVzS2V5XSA9PT0gJ2Z1bmN0aW9uJyB8fCBzdG9yaWVzS2V5ID09ICdzdG9yaWVzJykge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgJHNjb3BlLnN0b3JpZXMucHVzaChTdG9yaWVzQ29uZmlnW3N0b3JpZXNLZXldKTtcbiAgfVxuXG4gICRzY29wZS5maWx0ZXJCeUNoZWNrYm94ID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICAvL1Rha2UgdGhlIHRlcm0gcGFzc2VkIGluIGFuZCBhZGQgb3IgcmVtb3ZlIGl0IGZyb20gdGhlIGtleXdvcmRzIHRleHRib3guXG4gICAgaWYgKCRzY29wZS5zdG9yaWVzU2VhcmNoQXJyYXkuaW5kZXhPZih2YWx1ZSkgPT0gLTEpIHtcbiAgICAgIC8vQWRkIGl0XG4gICAgICAkc2NvcGUuc3Rvcmllc1NlYXJjaEFycmF5LnB1c2godmFsdWUpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIC8vUmVtb3ZlIGl0XG4gICAgICAkc2NvcGUuc3Rvcmllc1NlYXJjaEFycmF5LnNwbGljZSgkc2NvcGUuc3Rvcmllc1NlYXJjaEFycmF5LmluZGV4T2YodmFsdWUpLCAxKTtcbiAgICB9XG4gIH07XG5cbiAgJHNjb3BlLmZpbHRlckV4dGVudEJ5Q2hlY2tib3ggPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgIC8vVGFrZSB0aGUgdGVybSBwYXNzZWQgaW4gYW5kIGFkZCBvciByZW1vdmUgaXQgZnJvbSB0aGUga2V5d29yZHMgdGV4dGJveC5cbiAgICBpZiAoJHNjb3BlLnN0b3JpZXNFeHRlbnRBcnJheS5pbmRleE9mKHZhbHVlKSA9PSAtMSkge1xuICAgICAgLy9BZGQgaXRcbiAgICAgICRzY29wZS5zdG9yaWVzRXh0ZW50QXJyYXkucHVzaCh2YWx1ZSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgLy9SZW1vdmUgaXRcbiAgICAgICRzY29wZS5zdG9yaWVzRXh0ZW50QXJyYXkuc3BsaWNlKCRzY29wZS5zdG9yaWVzRXh0ZW50QXJyYXkuaW5kZXhPZih2YWx1ZSksIDEpO1xuICAgIH1cbiAgfTtcblxuICAkc2NvcGUuY2xlYXJTZWFyY2ggPSBmdW5jdGlvbigpIHtcbiAgICAkc2NvcGUuc3Rvcmllc1NlYXJjaEFycmF5ID0gW107XG4gICAgJHNjb3BlLnN0b3JpZXNTZWFyY2hUZXh0ID0gXCJcIjtcbiAgICAkc2NvcGUuc3Rvcmllc0V4dGVudEFycmF5ID0gW107XG4gIH1cbn0pO1xuXG5cbmFuZ3VsYXIubW9kdWxlKCdHZW9Bbmd1bGFyJykuZmlsdGVyKCdzZWFyY2hTdG9yaWVzRmlsdGVyJywgZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHN0b3JpZXMsICRzY29wZSkge1xuICAgICAgdmFyIG91dFN0b3JpZXMgPSBbXTtcbiAgICAgIGlmIChzdG9yaWVzKSB7XG4gICAgICAgIC8vbG9vcCB0aHJ1IHN0b3JpZXMgYW5kIGZpbHRlciBiYXNlZCBvbiBzZWFyY2ggdGV4dC9jaGVja2JveGVzLlxuICAgICAgICAvL2NvbW1hIHNlcGFyYXRlZCBpdGVtcyBzaG91bGQgYmUgYnJva2VuIHVwIGFuZCBzZWFyY2hlZCBmb3Igc2VwYXJhdGVseSB1c2luZyAnT1InIGxvZ2ljLlxuXG4gICAgICAgIHZhciBrZXl3b3JkcyA9IFtdO1xuICAgICAgICBpZiAoJHNjb3BlLnN0b3JpZXNTZWFyY2hUZXh0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBrZXl3b3JkcyA9ICRzY29wZS5zdG9yaWVzU2VhcmNoVGV4dC5zcGxpdChcIixcIikuY29uY2F0KCRzY29wZS5zdG9yaWVzU2VhcmNoQXJyYXkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGtleXdvcmRzID0gJHNjb3BlLnN0b3JpZXNTZWFyY2hBcnJheTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoa2V5d29yZHMubGVuZ3RoID09IDApIHtcbiAgICAgICAgICByZXR1cm4gc3RvcmllcztcbiAgICAgICAgfVxuXG4gICAgICAgIHN0b3JpZXMuZm9yRWFjaChmdW5jdGlvbihzdG9yeSkge1xuICAgICAgICAgIGtleXdvcmRzLmZvckVhY2goZnVuY3Rpb24oa2V5d29yZCkge1xuICAgICAgICAgICAgaWYgKGtleXdvcmQubGVuZ3RoID4gMCAmJiBzdG9yeS5rZXl3b3Jkcy50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJC50cmltKGtleXdvcmQudG9Mb3dlckNhc2UoKSkpID4gLTEpIHtcbiAgICAgICAgICAgICAgaWYgKG91dFN0b3JpZXMuaW5kZXhPZihzdG9yeSkgPT0gLTEpIHtcbiAgICAgICAgICAgICAgICBvdXRTdG9yaWVzLnB1c2goc3RvcnkpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBzdG9yaWVzO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG91dFN0b3JpZXM7XG4gICAgfTtcbiAgfSk7IiwiLyoqXG4gKiBDcmVhdGVkIGJ5IE5pY2hvbGFzIEhhbGxhaGFuIDxuaGFsbGFoYW5Ac3BhdGlhbGRldi5jb20+XG4gKiAgICAgICBvbiA1LzYvMTQuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnR2VvQW5ndWxhcicpLmNvbnRyb2xsZXIoJ1RoZW1lQ3RybCcsIGZ1bmN0aW9uICgkc2NvcGUsICRyb290U2NvcGUsICRzdGF0ZSwgJHN0YXRlUGFyYW1zLCBWZWN0b3JQcm92aWRlciwgTGF5ZXJDb25maWcpIHtcblxuICB2YXIgdGhlbWVOYW1lSGFzaCA9ICRyb290U2NvcGUudGhlbWVOYW1lSGFzaCA9IHtcbiAgICBwcm9qZWN0OiAnUHJvamVjdHMnLFxuICAgIGRpc2FzdGVyOiAnRGlzYXN0ZXJzJyxcbiAgICBwcm9qZWN0UmlzazogJ1Byb2plY3QgUmlzaycsXG4gICAgcHJvamVjdEhlYWx0aDogJ1Byb2plY3QgSGVhbHRoJyxcbiAgICBkaXNhc3RlclR5cGU6ICdEaXNhc3RlciBUeXBlJyxcbiAgICBub25lOiAnTm9uZSdcbiAgfTtcblxuICAkc2NvcGUucHJvamVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAkc2NvcGUudGhlbWVOYW1lID0gdGhlbWVOYW1lSGFzaC5wcm9qZWN0O1xuICAgIC8vZW5zdXJlVGhlbWVDb3VudCgpO1xuICAgICRzY29wZS5zZXRUaGVtZVF1ZXJ5UGFyYW0oJ3Byb2plY3QnKTtcbiAgfTtcblxuICAkc2NvcGUuZGlzYXN0ZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgJHNjb3BlLnRoZW1lTmFtZSA9IHRoZW1lTmFtZUhhc2guZGlzYXN0ZXI7XG4gICAgLy9lbnN1cmVUaGVtZUNvdW50KCk7XG4gICAgJHNjb3BlLnNldFRoZW1lUXVlcnlQYXJhbSgnZGlzYXN0ZXInKTtcbiAgfTtcblxuICAkc2NvcGUucHJvamVjdFJpc2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAkc2NvcGUudGhlbWVOYW1lID0gdGhlbWVOYW1lSGFzaC5wcm9qZWN0UmlzaztcbiAgICAgIC8vZW5zdXJlVGhlbWVDb3VudCgpO1xuICAgICAgJHNjb3BlLnNldFRoZW1lUXVlcnlQYXJhbSgncHJvamVjdFJpc2snKTtcbiAgfTtcblxuICAkc2NvcGUucHJvamVjdEhlYWx0aCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICRzY29wZS50aGVtZU5hbWUgPSB0aGVtZU5hbWVIYXNoLnByb2plY3RIZWFsdGg7XG4gICAgICAvL2Vuc3VyZVRoZW1lQ291bnQoKTtcbiAgICAgICRzY29wZS5zZXRUaGVtZVF1ZXJ5UGFyYW0oJ3Byb2plY3RIZWFsdGgnKTtcbiAgfTtcblxuICAkc2NvcGUuZGlzYXN0ZXJUeXBlID0gZnVuY3Rpb24gKCkge1xuICAgICRzY29wZS50aGVtZU5hbWUgPSB0aGVtZU5hbWVIYXNoLmRpc2FzdGVyVHlwZTtcbiAgICAvL2Vuc3VyZVRoZW1lQ291bnQoKTtcbiAgICAkc2NvcGUuc2V0VGhlbWVRdWVyeVBhcmFtKCdkaXNhc3RlclR5cGUnKTtcbiAgfTtcblxuICAkc2NvcGUubm9uZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAkc2NvcGUudGhlbWVOYW1lID0gdGhlbWVOYW1lSGFzaC5ub25lO1xuICAgIC8vdmFyIGxheWVyc0FyciA9ICQuZ3JlcCgkc3RhdGVQYXJhbXMubGF5ZXJzLnNwbGl0KCcsJyksIGZ1bmN0aW9uKHJvdXRlTGF5ZXIpe1xuICAgIC8vICByZXR1cm4gcm91dGVMYXllciAhPT0gJ2dhZG0wJyAmJiByb3V0ZUxheWVyICE9PSAndGhlbWUnO1xuICAgIC8vfSk7XG4gICAgLy8kc3RhdGVQYXJhbXMubGF5ZXJzID0gbGF5ZXJzQXJyLmpvaW4oJywnKTtcbiAgICAkc2NvcGUuc2V0VGhlbWVRdWVyeVBhcmFtKCdub25lJyk7XG4gIH07XG5cbiAgZnVuY3Rpb24gZW5zdXJlVGhlbWVDb3VudCgpIHtcbiAgICBpZiAoJHN0YXRlUGFyYW1zLmxheWVycy5pbmRleE9mKCdnYWRtMCcpID09PSAtMSAmJiAkc3RhdGVQYXJhbXMubGF5ZXJzLmluZGV4T2YoJ3RoZW1lJykgPT09IC0xKSB7XG4gICAgICAkc3RhdGVQYXJhbXMubGF5ZXJzICs9ICcsZ2FkbTAnO1xuICAgIH1cbiAgfVxuXG4gICRzY29wZS5jbG9zZVBhbmVscyA9IGZ1bmN0aW9uICgpe1xuICAgIGZvciAodmFyIHBhcmFtIGluICRzdGF0ZVBhcmFtcykge1xuICAgICAgaWYgKCRzdGF0ZVBhcmFtc1twYXJhbV0gPT09ICdvcGVuJykge1xuICAgICAgICAkc3RhdGVQYXJhbXNbcGFyYW1dID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgJHNjb3BlLnNldFRoZW1lUXVlcnlQYXJhbSA9IGZ1bmN0aW9uICh0aGVtZSkge1xuXG4gICAgLy9jbG9zZSBkZXRhaWxzIHBhbmVsIG9uIHRoZW1lIGNoYW5nZVxuICAgIGlmKCRzY29wZS5pc1BhcmFtKCdkZXRhaWxzLXBhbmVsJykgPT0gdHJ1ZSl7XG4gICAgICBpZigkc3RhdGVQYXJhbXMudGhlbWUgIT09IHRoZW1lKXtcbiAgICAgICAgJHNjb3BlLmNsb3NlUGFuZWxzKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJHN0YXRlUGFyYW1zLnRoZW1lID0gdGhlbWU7XG5cbiAgICAvL2ZvcmNlIGdhZG0wIG9uIGRpc2FzdGVyIGFuZCBkaXNhc3RlclR5cGVcbiAgICBpZih0aGVtZS5pbmRleE9mKCdkaXNhc3RlcicpIT09LTEgJiYgJHN0YXRlUGFyYW1zLmxheWVycy5zcGxpdChcIixcIilbMV0gIT09ICdnYWRtMCcpe1xuICAgICAgdmFyIGxheWVyc0FycmF5O1xuXG4gICAgICBpZigkc3RhdGVQYXJhbXMubGF5ZXJzKXtcbiAgICAgICAgbGF5ZXJzQXJyYXkgPSAkc3RhdGVQYXJhbXMubGF5ZXJzLnNwbGl0KFwiLFwiKTtcbiAgICAgIH1cblxuICAgICAgLy9SZW1vdmUgYWxsIEdBRE0gbGF5ZXJzLlxuICAgICAgbGF5ZXJzQXJyYXkuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUsIGtleSkge1xuICAgICAgICBpZiAoTGF5ZXJDb25maWcudGhlbWVMYXllcnMuaW5kZXhPZih2YWx1ZSkgPiAtMSkge1xuICAgICAgICAgIGxheWVyc0FycmF5LnNwbGljZShsYXllcnNBcnJheS5pbmRleE9mKHZhbHVlKSwgMSk7IC8vcmVtb3ZlIGFueSBHQURNc1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgLy9BZGQgaW4gdGhlIGdhZG0gbGF5ZXIgdG8gdGhlIGxheWVycyBsaXN0IGluIHRoZSBzdGF0ZXBhcmFtcy5cbiAgICAgIGxheWVyc0FycmF5LnB1c2goXCJnYWRtMFwiKTtcbiAgICAgICRzdGF0ZVBhcmFtcy5sYXllcnMgPSBsYXllcnNBcnJheS5qb2luKFwiLFwiKTtcbiAgICB9XG5cbiAgICAvL2Nsb3NlIGZpbHRlcnMgcGFuZWwgaWYgdGhlbWUgaXMgUHJvamVjdCBSaXNrL0hlYWx0aCBvciBOb25lXG4gICAgaWYoKCgkc3RhdGVQYXJhbXMudGhlbWUgIT09ICdwcm9qZWN0JyAmJiAkc3RhdGVQYXJhbXMudGhlbWUgIT09ICdkaXNhc3RlcicpICYmICRzdGF0ZVBhcmFtcy50aGVtZSAhPT0gbnVsbCkpe1xuICAgICAgJHNjb3BlLmNsb3NlUGFyYW0oJ2ZpbHRlcnMtcGFuZWwnKTtcbiAgICB9XG5cbiAgICB2YXIgc3RhdGUgPSAkc3RhdGUuY3VycmVudC5uYW1lIHx8ICdtYWluJztcbiAgICAkc3RhdGUuZ28oc3RhdGUsICRzdGF0ZVBhcmFtcyk7XG4gIH07XG5cbiAgJHNjb3BlLnRoZW1lTmFtZSA9IHRoZW1lTmFtZUhhc2hbJHN0YXRlUGFyYW1zLnRoZW1lXSB8fCB0aGVtZU5hbWVIYXNoW2NvbmZpZy5kZWZhdWx0VGhlbWVdO1xuICAvKlxuICAgSGFuZGxpbmcgVGhlbWUgTWVudSBBbmltYXRpb25zXG4gICAqL1xuXG4gICRzY29wZS50b2dnbGVUaGVtZU1lbnUgPSBmdW5jdGlvbigpe1xuICAgIHZhciBmbGlwcGVkT3V0ID0gJChcIi5tZW51LXNlbGVjdGlvbiAuZHJvcGRvd25cIikuaGFzQ2xhc3MoXCJvcGVuXCIpO1xuXG4gICAgaWYoZmxpcHBlZE91dCA9PSBmYWxzZSl7XG4gICAgICAkc2NvcGUudW5mdXJsVGhlbWVzKCk7XG4gICAgfVxuICAgIGVsc2V7XG4gICAgICAkc2NvcGUucmVmdXJsVGhlbWVzKCk7XG4gICAgfVxuICB9O1xuXG4gICRzY29wZS51bmZ1cmxUaGVtZXMgPSBmdW5jdGlvbigpe1xuICAgICRzY29wZS5yZWZ1cmxUaGVtZXMoKTtcbiAgICAvL1RyeSBqUXVlcnkgdG8gYWRkIGFuICdvbicgY2xhc3MgdG8gZWFjaCBvZiB0aGUgdGhlbWUgTEkgZWxlbWVudHMgb24gYSB0aW1lci5cbiAgICAkKCQoJyNUaGVtZU1lbnUgbGknKS5nZXQoKS5yZXZlcnNlKCkpLmVhY2goZnVuY3Rpb24oaW5kZXgpe1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoc2VsZikuYWRkQ2xhc3MoXCJ0aGVtZS1zZWxlY3Rvci1saS1vblwiKTtcbiAgICAgIH0sIGluZGV4KjEwMCk7XG4gICAgfSk7XG4gIH07XG5cbiAgLy9SZWZ1cmw/XG4gICRzY29wZS5yZWZ1cmxUaGVtZXMgPSBmdW5jdGlvbigpe1xuICAgIC8vVHJ5IGpRdWVyeSB0byByZW1vdmUgdGhlICdvbicgY2xhc3MgdG8gZWFjaCBvZiB0aGUgdGhlbWUgTEkgZWxlbWVudHMgb24gYSB0aW1lci5cbiAgICAkKCcjVGhlbWVTZWxlY3Rvck1lbnUgLmRyb3Bkb3duLW1lbnUgbGknKS5yZW1vdmVDbGFzcyhcInRoZW1lLXNlbGVjdG9yLWxpLW9uXCIpO1xuICB9O1xuXG4gIC8qXG4gICBFbmQgVGhlbWUgTWVudSBBbmltYXRpb25zXG4gICAqL1xuXG59KTtcbiIsIi8qKlxuICogQ3JlYXRlZCBieSBOaWNob2xhcyBIYWxsYWhhbiA8bmhhbGxhaGFuQHNwYXRpYWxkZXYuY29tPlxuICogICAgICAgb24gNC8xNy8xNC5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdHZW9Bbmd1bGFyJykuY29udHJvbGxlcignVXBsb2FkQ3RybCcsIGZ1bmN0aW9uKCRzY29wZSwgJGh0dHAsICRzdGF0ZSwgJHN0YXRlUGFyYW1zLCAkdXBsb2FkKSB7XG5cbiAgJHNjb3BlLnNob3dBbGVydCA9IGZhbHNlO1xuICAkc2NvcGUuc2hvd1Byb2dyZXNzID0gZmFsc2U7XG4gICRzY29wZS5zaG93VXBsb2FkZWRVcmwgPSBmYWxzZTtcbiAgJHNjb3BlLnBlcmNlbnQgPSAzO1xuICAkc2NvcGUuZGlzYWJsZWQgPSBmYWxzZTtcbiAgJHNjb3BlLmtiVXBsb2FkZWQgPSAwO1xuICAkc2NvcGUua2JUb3RhbCA9IDA7XG5cbiAgJHNjb3BlLiR1cGxvYWQgPSAkdXBsb2FkO1xuXG4gICRzY29wZS51cGxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAkKFwiI3VwbG9hZC1maWxlLWlucHV0XCIpLmNsaWNrKCkuY2hhbmdlKGZ1bmN0aW9uKGV2dCkge1xuICAgICAgJHNjb3BlLnNob3dQcm9ncmVzcyA9IHRydWU7XG4gICAgICAkc2NvcGUucGVyY2VudCA9IDU7XG5cbiAgICAgIHZhciBmaWxlTmFtZSA9ICQodGhpcykudmFsKCkuc3BsaXQoJ1xcXFwnKS5wb3AoKTtcbiAgICAgIHZhciBmaWxlID0gJCgnI3VwbG9hZC1maWxlLWlucHV0JykuZ2V0KDApLmZpbGVzWzBdO1xuICAgICAgcGFyc2VBbmRVcGxvYWRGaWxlKGZpbGUsIGZpbGVOYW1lKTtcblxuICAgIH0pO1xuICB9O1xuXG4gICRzY29wZS5maWxlRHJvcHBlZCA9IGZ1bmN0aW9uICgkZmlsZXMpIHtcbiAgICB2YXIgZmlsZSA9ICRmaWxlc1swXTtcbiAgICBwYXJzZUFuZFVwbG9hZEZpbGUoZmlsZSwgZmlsZS5uYW1lKTtcbiAgfTtcblxuICBmdW5jdGlvbiBwYXJzZUFuZFVwbG9hZEZpbGUoZmlsZSwgZmlsZU5hbWUpIHtcbiAgICBpZiAoIWZpbGVOYW1lKSBmaWxlTmFtZSA9ICdmaWxlJztcbiAgICB2YXIgciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgci5yZWFkQXNCaW5hcnlTdHJpbmcoZmlsZSk7XG4gICAgci5vbmxvYWRlbmQgPSBmdW5jdGlvbihlKXtcbiAgICAgIHZhciBkYXRhID0gZS50YXJnZXQucmVzdWx0O1xuICAgICAgdmFyIHBvc3RPYmogPSB7XG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJNYXBmb2xpbyBVcGxvYWRlZCBEYXRhIC0gXCIgKyBmaWxlTmFtZSxcbiAgICAgICAgXCJwdWJsaWNcIjogdHJ1ZSxcbiAgICAgICAgXCJmaWxlc1wiOiB7fVxuICAgICAgfTtcbiAgICAgIHBvc3RPYmouZmlsZXNbZmlsZU5hbWVdID0ge2NvbnRlbnQ6IGRhdGF9O1xuICAgICAgJHNjb3BlLnBlcmNlbnQgPSA3O1xuXG4gICAgICAkc2NvcGUuJHVwbG9hZC5odHRwKHtcbiAgICAgICAgdXJsOiAnaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS9naXN0cycsXG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgIGRhdGE6IHBvc3RPYmosXG4gICAgICAgIGhlYWRlcnM6IHsnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nfVxuICAgICAgfSkucHJvZ3Jlc3MoZnVuY3Rpb24oZXZ0KSB7XG4gICAgICAgICRzY29wZS5wZXJjZW50ID0gcGFyc2VGbG9hdCgoZXZ0LmxvYWRlZCAvIGV2dC50b3RhbFNpemUgKiAxMDApLnRvRml4ZWQoMSkpO1xuICAgICAgICAkc2NvcGUua2JVcGxvYWRlZCA9IChldnQubG9hZGVkIC8gMTAyNCkudG9GaXhlZCgyKTtcbiAgICAgICAgJHNjb3BlLmtiVG90YWwgPSAoZXZ0LnRvdGFsU2l6ZSAvIDEwMjQpLnRvRml4ZWQoMik7XG4gICAgICB9KS5zdWNjZXNzKGZ1bmN0aW9uIChkYXRhLCBzdGF0dXMsIGhlYWRlcnMsIGNvbmZpZykge1xuICAgICAgICAkc2NvcGUuc2hvd1Byb2dyZXNzID0gZmFsc2U7XG4gICAgICAgIHZhciBmaWxlbmFtZSA9IGRhdGEuZmlsZXNbZmlsZU5hbWVdLmZpbGVuYW1lO1xuICAgICAgICAkc2NvcGUuZ2lzdFJhd1VybCA9IGRhdGEuZmlsZXNbZmlsZU5hbWVdLnJhd191cmw7XG4gICAgICAgICRzY29wZS5naXN0SHRtbFVybCA9IGRhdGEuaHRtbF91cmw7XG4gICAgICAgICRzY29wZS5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICRzY29wZS5zaG93VXBsb2FkZWRVcmwgPSB0cnVlO1xuICAgICAgICB3aW5kb3cuZ2lzdHMuYXBwZW5kKHtuYW1lOiBmaWxlbmFtZSwgdXJsOiAkc2NvcGUuZ2lzdFJhd1VybCwgaHRtbFVybDogJHNjb3BlLmdpc3RIdG1sVXJsfSk7XG4gICAgICB9KS5lcnJvcihmdW5jdGlvbiAoZGF0YSwgc3RhdHVzLCBoZWFkZXJzLCBjb25maWcpIHtcbiAgICAgICAgJHNjb3BlLnNob3dBbGVydCA9IHRydWU7XG4gICAgICAgICRzY29wZS5lcnJvck1lc3NhZ2UgPSBKU09OLnN0cmluZ2lmeShkYXRhLG51bGwsMik7XG4gICAgICB9KTtcblxuICAgIH07XG4gIH1cblxuICAkc2NvcGUuYWRkVG9NYXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG5ld1VybCA9ICRzY29wZS5naXN0UmF3VXJsIHx8ICRzY29wZS5yZW1vdGVVcmw7XG4gICAgaWYgKCFuZXdVcmwpIHtcbiAgICAgICRzY29wZS5zaG93QWxlcnQgPSB0cnVlO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgICRzdGF0ZVBhcmFtcy5sYXllcnMgPSAkc3RhdGVQYXJhbXMubGF5ZXJzICsgJywnICsgbmV3VXJsO1xuICAgICQoJyN1cGxvYWRNb2RhbCcpLm1vZGFsKCdoaWRlJyk7XG4gICAgJCgnI3VwbG9hZE1vZGFsJykub24oJ2hpZGRlbi5icy5tb2RhbCcsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICRzdGF0ZS5nbygnbWFpbicsICRzdGF0ZVBhcmFtcyk7XG4gICAgfSk7XG5cbiAgfTtcblxuICAvKipcbiAgICogSWYgVXBsb2FkQ3RybCBnZXRzIGNhbGxlZCB0d2ljZSBmb3Igc29tZSByZWFzb24sIHdlIG1pZ2h0XG4gICAqIGhhdmUgdGhpcyBjbGFzcyBoYW5naW5nIGFyb3VuZCBibG9ja2luZyB0aGUgYXBwLiBVcGxvYWRDdHJsXG4gICAqIGRvZXMgZ2V0IGNhbGxlZCB0d2ljZSBzb21ldGltZXMsIGJlY2F1c2UgdGhlIG1vZGFsIHNvbWV0aW1lc1xuICAgKiBudWRnZXMgdGhlIG1hcCBhbmQgcmVpbnN0YW50aWF0ZXMgdGhlIG1vZGFsIGFnYWluIHZpYSBhIG5ld1xuICAgKiByb3V0ZS5cbiAgICovXG4gICQoJy5tb2RhbC1iYWNrZHJvcCcpLnJlbW92ZSgpO1xuXG4gICQoJyN1cGxvYWRNb2RhbCcpLm1vZGFsKCdzaG93Jyk7XG5cbiAgJCgnI3VwbG9hZE1vZGFsJykub24oJ2hpZGRlbi5icy5tb2RhbCcsIGZ1bmN0aW9uKGUpIHtcbiAgICAkc3RhdGUuZ28oJ21haW4nLCAkc3RhdGVQYXJhbXMpO1xuICB9KTtcblxufSk7XG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgTmljaG9sYXMgSGFsbGFoYW4gPG5oYWxsYWhhbkBzcGF0aWFsZGV2LmNvbT5cbiAqICAgICAgICBhbmQgUnlhbiBXaGl0bGV5ICAgICAgPHJ3aGl0bGV5QHNwYXRpYWxkZXYuY29tPlxuICogICAgICAgb24gNC8yLzE0LlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ0dlb0FuZ3VsYXInKS5jb250cm9sbGVyKCdab29tRXh0ZW50Q3RybCcsIGZ1bmN0aW9uKCRzY29wZSwgJHJvb3RTY29wZSwgJHN0YXRlUGFyYW1zLCBWZWN0b3JQcm92aWRlcikge1xuICAkc2NvcGUucGFyYW1zID0gJHN0YXRlUGFyYW1zO1xuXG4gIC8vSW5pdGlhbGl6ZSB0aGUgY291bnRyeSBzZWxlY3RvciBtZW51IGJ5IGxvYWRpbmcgdGhlIGpzb24gZmlsZSBhbmQgd3JpdGluZyBvdXQgdGhlIG5hbWVzIGludG8gdGhlIHBhbmVsXG4gICRzY29wZS5jb3VudHJ5TGlzdDEgPSBudWxsO1xuXG4gIHZhciB2ZWNSZXMgPSBWZWN0b3JQcm92aWRlci5jcmVhdGVSZXNvdXJjZShcImNvdW50cnlleHRlbnRzXCIpO1xuICB2ZWNSZXMuZmV0Y2goZnVuY3Rpb24oZ2VvanNvbil7XG4gICAgLy9Tb3J0IGFscGhhYmV0aWNhbGx5XG4gICAgZ2VvanNvbi5mZWF0dXJlcyA9IGdlb2pzb24uZmVhdHVyZXMuc29ydChmdW5jdGlvbihhLGIpe1xuICAgICAgdmFyIHRleHRBID0gYS5wcm9wZXJ0aWVzLm5hbWVfMDtcbiAgICAgIHZhciB0ZXh0QiA9IGIucHJvcGVydGllcy5uYW1lXzA7XG4gICAgICByZXR1cm4gKHRleHRBIDwgdGV4dEIpID8gLTEgOiAodGV4dEEgPiB0ZXh0QikgPyAxIDogMDtcbiAgICB9KTtcblxuICAgICRzY29wZS5jb3VudHJ5TGlzdDEgPSBnZW9qc29uLmZlYXR1cmVzO1xuICB9KTtcblxuICAvL0luaXRpYWxpemUgdGhlIEFSQyBSZWdpb24gc2VsZWN0b3IgbWVudSBieSBsb2FkaW5nIHRoZSBqc29uIGZpbGUgYW5kIHdyaXRpbmcgb3V0IHRoZSBuYW1lcyBpbnRvIHRoZSBwYW5lbFxuICAkc2NvcGUucmVnaW9uTGlzdDEgPSBudWxsO1xuXG4gIHZhciB2ZWNSZXNSZWdpb24gPSBWZWN0b3JQcm92aWRlci5jcmVhdGVSZXNvdXJjZShcImFyY3JlZ2lvbmV4dGVudHNcIik7XG4gIHZlY1Jlc1JlZ2lvbi5mZXRjaChmdW5jdGlvbihnZW9qc29uKXtcbiAgICAvL1NvcnQgYWxwaGFiZXRpY2FsbHlcbiAgICBnZW9qc29uLmZlYXR1cmVzID0gZ2VvanNvbi5mZWF0dXJlcy5zb3J0KGZ1bmN0aW9uKGEsYil7XG4gICAgICB2YXIgdGV4dEEgPSBhLnByb3BlcnRpZXMuYXJjX3JlZ2lvbjtcbiAgICAgIHZhciB0ZXh0QiA9IGIucHJvcGVydGllcy5hcmNfcmVnaW9uO1xuICAgICAgcmV0dXJuICh0ZXh0QSA8IHRleHRCKSA/IC0xIDogKHRleHRBID4gdGV4dEIpID8gMSA6IDA7XG4gICAgfSk7XG5cbiAgICAkc2NvcGUucmVnaW9uTGlzdDEgPSBnZW9qc29uLmZlYXR1cmVzO1xuICB9KTtcblxufSk7XG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgTmljaG9sYXMgSGFsbGFoYW4gPG5oYWxsYWhhbkBzcGF0aWFsZGV2LmNvbT5cbiAqICAgYW5kIFJpY2ggR3dvemR6IDxyZ3dvemR6QHNwYXRpYWxkZXYuY29tPlxuICogICAgICAgb24gNS8yMS8xNC5cbiAqL1xuXG5cbm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ0dlb0FuZ3VsYXInKS5mYWN0b3J5KCdEb251dHMnLCBmdW5jdGlvbiAoKSB7XG5cbiAgdmFyIHNlcnZpY2UgPSB7fTtcbiAgc2VydmljZS5kYXRhc2V0ID0gW107XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBEMyBEb251dCB0aGF0IGlzIGxvY2F0ZWQgaW4gdGhlIGRldGFpbHMgcGFuZWwuXG4gICAqL1xuICBmdW5jdGlvbiBFeHBhbmRvRG9udXQoZW50aXRpZXMsIHZpc3VhbGl6YXRpb25EaWN0aW9uYXJ5LCB3cmFwcGVyLCBsYWJlbFBvc2l0aW9uKSB7XG5cbiAgICB2YXIgZGF0YSxcbiAgICAgIHRtcERhdGFzZXQsXG4gICAgICBkYXRhc2V0LFxuICAgICAgd2lkdGgsXG4gICAgICBoZWlnaHQsXG4gICAgICByYWRpdXMsXG4gICAgICBjb2xvcixcbiAgICAgIHBpZSxcbiAgICAgIGFyYyxcbiAgICAgIHN2ZyxcbiAgICAgIHBhdGgsXG4gICAgICByZXBvcnRpbmdWYWx1ZUFycixcbiAgICAgIHJlcG9ydGluZ1ZhbHVlLFxuICAgICAgbGFiZWxXcmFwcGVyO1xuXG4gICAgZGF0YSA9IHt9O1xuXG4gICAgd3JhcHBlciA9ICQod3JhcHBlcilbMF07XG4gICAgJCh3cmFwcGVyKS5odG1sKCcnKTtcbiAgICB0aGlzLndyYXBwZXIgPSB3cmFwcGVyO1xuICAgIHRoaXMubGFiZWxXcmFwcGVyID0gbnVsbDtcbiAgICB0aGlzLnN2ZyA9IG51bGw7XG5cbiAgICBpZih0eXBlb2YgbGFiZWxQb3NpdGlvbiA9PT0gJ3VuZGVmaW5lZCcgfHwgKGxhYmVsUG9zaXRpb24gIT09ICd0b3AnICYmIGxhYmVsUG9zaXRpb24gIT09ICdib3R0b20nKSkge1xuICAgICAgbGFiZWxQb3NpdGlvbiA9ICd0b3AnXG4gICAgfVxuXG4gICAgLy8gTG9vcCB0aHJvdWdoIHRoZSBlbnRpdGllc1xuICAgIGZvciAodmFyIGogPSAwLCBqTWF4ID0gZW50aXRpZXMubGVuZ3RoOyBqIDwgak1heDsgaisrKSB7XG5cbiAgICAgIC8vIFNwbGl0IHRoZSBzZW1pLWNvbG9uIGRlbGltaXRlZCBzdHJpbmcgb2YgcmVwb3J0aW5nIHZhbHVlc1xuICAgICAgaWYoZW50aXRpZXNbal1bJ3NlY3Rvcl9fYyddID09PSBudWxsKSB7XG4gICAgICAgIHJlcG9ydGluZ1ZhbHVlQXJyID0gWy05OTk5XTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlcG9ydGluZ1ZhbHVlQXJyID0gZW50aXRpZXNbal1bJ3NlY3Rvcl9fYyddLnRvU3RyaW5nKCkuc3BsaXQoJzsnKTtcbiAgICAgIH1cbiAgICAgIC8vIExvb3AgdGhydSB0aGUgcmVwb3J0aW5nIHZhbHVlc1xuICAgICAgZm9yICh2YXIgayA9IDAsIGtNYXggPSByZXBvcnRpbmdWYWx1ZUFyci5sZW5ndGg7IGsgPCBrTWF4OyBrKyspIHtcblxuICAgICAgICAvLyB0aGlzIGl0ZXJhdGlvbidzIHJlcG9ydGluZyB2YWx1ZVxuICAgICAgICByZXBvcnRpbmdWYWx1ZSA9IHJlcG9ydGluZ1ZhbHVlQXJyW2tdO1xuXG4gICAgICAgIC8vIElmIHdlIGhhdmUgYWxyZWFkeSBjb21lIGFjcm9zcyB0aGlzIGlkIGJlZm9yZSAoYW5kIHN0YXJ0ZWQgYSBjb3VudCBvZiBpdHMgZnJlcXVlbmN5KSwgaW5jcmVtZW50IHRoZSBjb3VudFxuICAgICAgICBpZihkYXRhLmhhc093blByb3BlcnR5KHJlcG9ydGluZ1ZhbHVlKSkge1xuICAgICAgICAgIGRhdGFbcmVwb3J0aW5nVmFsdWVdWydjb3VudCddKys7XG4gICAgICAgIH1cblxuICAgICAgICBlbHNlIGlmIChyZXBvcnRpbmdWYWx1ZSA9PT0gJycpe1xuICAgICAgICAgIC8vIE51bGwgcmVwb3J0IGlkJ3MgY29tZSB0aHJvdWdoIGFzIGFuIGVtcHR5IHN0cmluZyBiZWNhdXNlIHNwbGl0dGluZyBhbiBlbXB0eSBzdHJpbmcsIGNyZWF0ZXMgYW4gYXJyYXkgd2l0aCBvbmUgZW1wdHkgc3RyaW5nXG4gICAgICAgICAgLy8gIFdlJ3JlIGFzc2lnbmluZyB0aGVzZSB0byBhIHZhbHVlIG9mIC05OTk5XG5cbiAgICAgICAgICAvLyBJbmNyZW1lbnQgdGhlIGNvdW50IG9mIC05OTk5XG4gICAgICAgICAgaWYoZGF0YS5oYXNPd25Qcm9wZXJ0eSgnLTk5OTknKSkge1xuICAgICAgICAgICAgZGF0YVsnLTk5OTknXVsnY291bnQnXSsrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIGlmIHRoaXMgaXMgdGhlIGZpcnN0IG51bGwgaWQsIGNyZWF0ZSBhbiBvYmplY3QgcHJvcGVydHkgYW5kIHN0YXJ0IHRoZSBjb3VudGVyXG4gICAgICAgICAgICBkYXRhWyctOTk5OSddID0ge1xuICAgICAgICAgICAgICAnY291bnQnOiAxLFxuICAgICAgICAgICAgICAnY29sb3InOiB2aXN1YWxpemF0aW9uRGljdGlvbmFyeVstOTk5OV0uY29sb3IsXG4gICAgICAgICAgICAgICdhbGlhcyc6IHZpc3VhbGl6YXRpb25EaWN0aW9uYXJ5Wy05OTk5XS5sYWJlbCB8fCAnVW5rbm93bidcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuXG4gICAgICAgICAgdmFyIHJlcG9ydGluZ1Byb3BlcnRpZXMgPSB2aXN1YWxpemF0aW9uRGljdGlvbmFyeVtyZXBvcnRpbmdWYWx1ZV07XG5cbiAgICAgICAgICBpZiAoIXJlcG9ydGluZ1Byb3BlcnRpZXMpIHtcbiAgICAgICAgICAgIHJlcG9ydGluZ1Byb3BlcnRpZXMgPSB7XG4gICAgICAgICAgICAgIGNvbG9yOiAnIzI0MDIwMScsXG4gICAgICAgICAgICAgIGFsaWFzOiByZXBvcnRpbmdWYWx1ZSB8fCAnVW5rbm93bidcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBpZiB0aGlzIGlzIHRoZSBmaXJzdCB0aW1lIHdlIHNlZSB0aGlzIGlkLCBjcmVhdGUgYW4gb2JqZWN0IHByb3BlcnR5IGFuZCBzdGFydCB0aGUgY291bnRlclxuICAgICAgICAgIGRhdGFbcmVwb3J0aW5nVmFsdWVdID0ge1xuICAgICAgICAgICAgJ2NvdW50JzogMSxcbiAgICAgICAgICAgICdjb2xvcic6IHJlcG9ydGluZ1Byb3BlcnRpZXMuY29sb3IsXG4gICAgICAgICAgICAnYWxpYXMnOiByZXBvcnRpbmdQcm9wZXJ0aWVzLmxhYmVsIHx8ICdVbmtub3duJ1xuICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgfVxuXG4gICAgfVxuXG4gICAgLy8gcHJlcCBkYXRhc2V0IGZvciBEMzsgbmVlZCBhIHRlbXAgZGF0YXNldCB0byBkZWFsIHdpdGggbWVyZ2luZyBvZiBkYXRhIGNvdW50cyBmb3IgJ290aGVyJyBjYXRlZ29yeVxuICAgIHRtcERhdGFzZXQgPSBbXTtcbiAgICBkYXRhc2V0ID0gW107XG5cbiAgICAvLyBQdXNoIHByb3BlcnRpZXMgZnJvbSBvYmplY3QgaG9sZGluZyB0aGUgY2F0ZWdvcnkgY291bnRzL2NvbG9ycyBjYXRlZ29yaWVzIGludG8gYW4gb2JqZWN0IGFycmF5XG4gICAgZm9yICh2YXIgaiBpbiBkYXRhKSB7XG4gICAgICB0bXBEYXRhc2V0LnB1c2goZGF0YVtqXSk7XG4gICAgfVxuXG4gICAgLy8gQ3JlYXRlIGFuIG9iamVjdCB0aGF0IHdpbGwgbWVyZ2UgdGhlIGNvdW50IGZyb20gYWxsIGNsYXNzaWZpY2F0aW9uIGNhdGVyZ29yaWVzIHRoYXQgd2UndmUgZGVlbWVkIGFzICdvdGhlcicnXG4gICAgdmFyIG1lcmdlZE90aGVyID0ge1xuICAgICAgJ2NvdW50JzogMCxcbiAgICAgICdjb2xvcic6IHZpc3VhbGl6YXRpb25EaWN0aW9uYXJ5Wy05OTk5XS5jb2xvcixcbiAgICAgICdhbGlhcyc6IHZpc3VhbGl6YXRpb25EaWN0aW9uYXJ5Wy05OTk5XS5sYWJlbCB8fCAnVW5rbm93bidcbiAgICB9O1xuXG4gICAgLy8gTWVyZ2UgYWxsICdvdGhlcicgb2JqZWN0czsgd2UgZGV0ZXJtaW5lIHdoaWNoIGFyZSAnb3RoZXInIGJ5IHRlc3RpbmcgdG8gc2VlIGlmIGl0cyBiZWVuIGFzc2lnbmVkIHRoZSAnb3RoZXInIGNvbG9yXG4gICAgZm9yICh2YXIgayA9IDAsIGtNYXggPSB0bXBEYXRhc2V0Lmxlbmd0aDsgayA8IGtNYXg7IGsrKykge1xuXG4gICAgICBpZih0bXBEYXRhc2V0W2tdLmNvbG9yID09PSB2aXN1YWxpemF0aW9uRGljdGlvbmFyeVstOTk5OV0uY29sb3IpIHtcbiAgICAgICAgbWVyZ2VkT3RoZXIuY291bnQgPSBtZXJnZWRPdGhlci5jb3VudCArIHRtcERhdGFzZXRba10uY291bnQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkYXRhc2V0LnB1c2godG1wRGF0YXNldFtrXSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQWRkIHRoZSBtZXJnZSBvYmplY3QgdG8gdGhlIGRhdGFzZXQgd2Ugd2lsbCB1c2UgaW4gZG9udXQgY2hhcnRcbiAgICBkYXRhc2V0LnB1c2gobWVyZ2VkT3RoZXIpO1xuICAgIHNlcnZpY2UuZGF0YXNldCA9IGRhdGFzZXQ7XG5cblxuICAgIC8vIFVzZSBqUXVlcnkgdG8gZ2V0IHRoaXMgY2x1c3RlciBtYXJrZXJzIGhlaWdodCBhbmQgd2lkdGggKHNldCBpbiB0aGUgQ1NTKVxuICAgIHdpZHRoID0gJCh3cmFwcGVyKS53aWR0aCgpICogMC42NTtcbiAgICBoZWlnaHQgPSAkKHdyYXBwZXIpLmhlaWdodCgpICogMC42NTtcblxuICAgIGlmKGhlaWdodCA9PT0gMCkge1xuICAgICAgaGVpZ2h0ID0gd2lkdGg7XG4gICAgfVxuXG4gICAgcmFkaXVzID0gIChNYXRoLm1pbih3aWR0aCwgaGVpZ2h0KSAvIDIpIC0gMTA7XG4gICAgbGFiZWxXcmFwcGVyID0gJCgnPGRpdiBjbGFzcz1cImNsZWFyZml4XCIgc3R5bGU9XCJ0ZXh0LWFsaWduOmNlbnRlcjsgbWFyZ2luOiAxMHB4IDA7XCIgPjwvZGl2PicpLmFwcGVuZFRvKHdyYXBwZXIpO1xuICAgIHZhciBsYWJlbFN3YXRjaCA9ICQoJzxkaXYgc3R5bGU9XCJkaXNwbGF5OmlubGluZS1ibG9jazsgd2lkdGg6IDFlbTsgaGVpZ2h0OiAxZW07IGJvcmRlci1yYWRpdXM6IDUwJVwiPjwvZGl2PicpLmFwcGVuZFRvKGxhYmVsV3JhcHBlcik7XG4gICAgdmFyIGxhYmVsVGV4dCA9ICQoJzxkaXYgc3R5bGU9XCJkaXNwbGF5OmlubGluZS1ibG9jazsgcGFkZGluZy1sZWZ0OiAxMHB4O21hcmdpbi10b3A6IC0uNGVtO3ZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XCI+PC9kaXY+JykuYXBwZW5kVG8obGFiZWxXcmFwcGVyKTtcblxuICAgIHBpZSA9IGQzLmxheW91dC5waWUoKVxuICAgICAgLnNvcnQobnVsbCk7XG5cbiAgICBhcmMgPSBkMy5zdmcuYXJjKClcbiAgICAgIC5pbm5lclJhZGl1cyhyYWRpdXMtcmFkaXVzICogMC40KVxuICAgICAgLm91dGVyUmFkaXVzKHJhZGl1cyk7XG5cbiAgICB2YXIgYXJjT3ZlciA9IGQzLnN2Zy5hcmMoKVxuICAgICAgLm91dGVyUmFkaXVzKHJhZGl1cyArIDEwKVxuICAgICAgLmlubmVyUmFkaXVzKChyYWRpdXMtcmFkaXVzICogMC40KSArIDEwKTtcblxuICAgIC8vIE5vdGUgdGhhdCB3ZSBhZGQgJ2NsdXN0ZXJEb251dCcgYXMgYSBzZWxlY3RvclxuICAgIHN2ZyA9IGQzLnNlbGVjdCh3cmFwcGVyKS5hcHBlbmQoXCJzdmdcIilcbiAgICAgIC5hdHRyKFwid2lkdGhcIiwgd2lkdGgpXG4gICAgICAuYXR0cihcImhlaWdodFwiLCBoZWlnaHQpXG4gICAgICAuYXBwZW5kKFwiZ1wiKVxuICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoXCIgKyB3aWR0aCAvIDIgKyBcIixcIiArIGhlaWdodCAvIDIgKyBcIilcIik7XG5cbiAgICB0aGlzLnBhdGggPSBzdmcuc2VsZWN0QWxsKFwicGF0aFwiKVxuICAgICAgLmRhdGEoZnVuY3Rpb24oKXtcbiAgICAgICAgdmFyIGRhdGFPYmpBcnIsXG4gICAgICAgICAgZGF0YUFycixcbiAgICAgICAgICBwaWVEYXRhO1xuXG4gICAgICAgIGRhdGFPYmpBcnIgPSBkYXRhc2V0O1xuXG4gICAgICAgIGRhdGFBcnIgPSBbXTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMCwgaU1heCA9IGRhdGFPYmpBcnIubGVuZ3RoOyBpIDwgaU1heDsgaSsrKSB7XG4gICAgICAgICAgZGF0YUFyci5wdXNoKGRhdGFPYmpBcnJbaV1bJ2NvdW50J10pO1xuICAgICAgICB9XG5cbiAgICAgICAgcGllRGF0YSA9IHBpZShkYXRhQXJyKTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMCwgaU1heCA9IHBpZURhdGEubGVuZ3RoOyBpIDwgaU1heDsgaSsrKSB7XG4gICAgICAgICAgcGllRGF0YVtpXS5kYXRhID0gZGF0YU9iakFycltpXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwaWVEYXRhO1xuICAgICAgfSlcbiAgICAgIC5lbnRlcigpLmFwcGVuZChcInBhdGhcIilcbiAgICAgIC5hdHRyKFwiZmlsbFwiLCBmdW5jdGlvbihkLCBqKSB7XG4gICAgICAgIHJldHVybiBkLmRhdGEuY29sb3I7XG4gICAgICB9KVxuICAgICAgLmF0dHIoXCJkXCIsIGFyYylcbiAgICAgIC5hdHRyKFwiY3Vyc29yXCIsXCJwb2ludGVyXCIpXG4gICAgICAuYXR0cihcImN1cnNvclwiLFwicG9pbnRlclwiKVxuICAgICAgLm9uKFwibW91c2VvdmVyXCIsIGZ1bmN0aW9uKGQsIGkpIHtcblxuICAgICAgICAvLyBjbGVhciBwcmV2aW91c2x5IGFjdGl2ZSBjaGFydCB3ZWRnZVxuICAgICAgICBkMy5zZWxlY3Qod3JhcHBlcikuc2VsZWN0QWxsKCdwYXRoJykudHJhbnNpdGlvbigpXG4gICAgICAgICAgLmR1cmF0aW9uKDEwMClcbiAgICAgICAgICAuYXR0cihcImRcIiwgYXJjKVxuICAgICAgICAgIC5hdHRyKCdvcGFjaXR5JywxKVxuICAgICAgICAgIC5hdHRyKCdzdHJva2Utd2lkdGgnLDEpXG4gICAgICAgICAgLmF0dHIoJ3N0cm9rZScsJ3JnYmEoMjU1LDI1NSwyNTUsMSknKTtcblxuICAgICAgICAvLyBNYWtlIHRoZSBtb3VzZW92ZXIgd2VkZ2UgYWN0aXZlXG4gICAgICAgIGQzLnNlbGVjdCh0aGlzKVxuICAgICAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgICAgICAuZHVyYXRpb24oMTAwKVxuICAgICAgICAgIC5hdHRyKFwiZFwiLCBhcmNPdmVyKVxuICAgICAgICAgIC5hdHRyKCdvcGFjaXR5JywwLjgpXG4gICAgICAgICAgLmF0dHIoJ3N0cm9rZS13aWR0aCcsMilcbiAgICAgICAgICAuYXR0cignc3Ryb2tlJywncmdiYSgyNTUsMjU1LDI1NSwxKScpO1xuXG4gICAgICAgIC8vIE1ha2UgYXBwcm9wcmlhdGUgbGFiZWxcbiAgICAgICAgJChsYWJlbFN3YXRjaCkuY3NzKCdiYWNrZ3JvdW5kLWNvbG9yJywgZC5kYXRhLmNvbG9yKTtcbiAgICAgICAgJChsYWJlbFRleHQpLmh0bWwoZC5kYXRhLmFsaWFzKTtcblxuICAgICAgICAvLyBTaG93IHRoZSBsYWJlbCBpZiBjdXJyZW50bHkgaGlkZGVuXG4gICAgICAgIGlmKCQoc2VsZi5jYXB0aW9uKS5jc3MoJ2Rpc3BsYXknKSA9PT0gJ25vbmUnKSB7XG4gICAgICAgICAgJChsYWJlbFdyYXBwZXIpLnNsaWRlVG9nZ2xlKCk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAvLy5vbihcIm1vdXNlb3V0XCIsIGZ1bmN0aW9uKGQsaSkge30pXG4gICAgICAuZWFjaChmdW5jdGlvbihkLCBpKSB7XG5cbiAgICAgICAgLy8gb24gbG9hZCwgd2Ugd2FudCB0aGUgbGFyZ2VzdCBjaGFydCB3ZWRnZSB0byBiZSBhY3RpdmV3XG4gICAgICAgIGlmKGkgIT09IDAgICl7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgZDMuc2VsZWN0KHRoaXMpXG4gICAgICAgICAgLnRyYW5zaXRpb24oKVxuICAgICAgICAgIC5kdXJhdGlvbigxMDApXG4gICAgICAgICAgLmF0dHIoXCJkXCIsIGFyY092ZXIpXG4gICAgICAgICAgLmF0dHIoJ29wYWNpdHknLDAuOClcbiAgICAgICAgICAuYXR0cignc3Ryb2tlLXdpZHRoJywyKVxuICAgICAgICAgIC5hdHRyKCdzdHJva2UnLCdyZ2JhKDI1NSwyNTUsMjU1LDEpJyk7XG5cbiAgICAgICAgLy8gbWFrZSB0aGUgbGFiZWxcbiAgICAgICAgJChsYWJlbFN3YXRjaCkuY3NzKCdiYWNrZ3JvdW5kLWNvbG9yJywgZC5kYXRhLmNvbG9yKTtcbiAgICAgICAgJChsYWJlbFRleHQpLmh0bWwoZC5kYXRhLmFsaWFzKTtcblxuICAgICAgICBpZigkKGxhYmVsV3JhcHBlcikuY3NzKCdkaXNwbGF5JykgPT09ICdub25lJykge1xuICAgICAgICAgICQobGFiZWxXcmFwcGVyKS5zbGlkZVRvZ2dsZSgpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgIGlmKGxhYmVsUG9zaXRpb24gPT09ICd0b3AnKSB7XG4gICAgICBsYWJlbFdyYXBwZXIucHJlcGVuZFRvKHdyYXBwZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsYWJlbFdyYXBwZXIuYXBwZW5kVG8od3JhcHBlcik7XG4gICAgfVxuXG4gICAgdGhpcy5sYWJlbFdyYXBwZXIgPSBsYWJlbFdyYXBwZXI7XG4gICAgdGhpcy5zdmcgPSBzdmc7XG4gIH1cblxuXG5cblxuICBmdW5jdGlvbiBtYWtlVmlzdWFsaXphdGlvbkRpY3Rpb25hcnkoY2F0ZWdvcnlFbnRpdGllcywgb3B0cyl7XG5cbiAgICB2YXIgb3B0aW9ucyA9IG9wdHMgfHwge307XG5cbiAgICBvcHRpb25zLnVuYXNzaWduZWRDb2xvciA9IG9wdGlvbnMudW5hc3NpZ25lZENvbG9yIHx8ICcjQ0NDQ0NDJztcbiAgICBvcHRpb25zLnVuYXNzaWduZWRMYWJlbCA9IG9wdGlvbnMudW5hc3NpZ25lZExhYmVsIHx8ICdOb3QgQXNzaWduZWQnO1xuXG4gICAgdmFyIGRlZmF1bHRQYWxldHRlID0gWycjZTY1NTUyJyxcdCcjZjE4NDMyJyxcdCcjZjRkNzQ2JyxcdCcjNmQ3YzU4JyxcdCcjYjljMDNlJyxcdCcjMGY0ZTYwJyxcdCcjMDFhYTk1JyxcdCcjYTFiMWNjJyxcdCcjZmY4NTlhJyxcdCcjYjNiMDkxJyxcdCcjOGQyNzI1JyxcdCcjYTM3NjU0JyxcdCcjYmFhNzQ5JyxcdCcjNzViYjE4JyxcdCcjZGRkZmIzJyxcdCcjMzliNGQ3JyxcdCcjODdkOGNlJyxcdCcjNDg3NmMzJyxcdCcjZGIxNzM5JyxcdCcjOGQ4MTA1JyxcdCcjZDA4NDg0JyxcdCcjZmRkNWI3JyxcdCcjZjRmN2Q0JyxcdCcjZDhlZmI5JyxcdCcjZWVmNzU4JyxcdCcjZDZmNGZkJyxcdCcjYWJiZWJjJyxcdCcjODQ3Y2QxJyxcdCcjZWJiOGQ0JyxcdCcjZTljZTg0JyxcdCcjZDBhNmE2JyxcdCcjNjE1NTQ5JyxcdCcjOTk2OTJiJyxcdCcjYWRiZjk1JyxcdCcjMTVlNWM1JyxcdCcjNWJiN2QyJyxcdCcjNGE4Yzg0JyxcdCcjZDE4Y2ZkJyxcdCcjZmMxNzNlJyxcdCcjZmJmM2E1JyxcdCcjOWI1YzVjJyxcdCcjZmJlYmRlJyxcdCcjZGRiOTAzJyxcdCcjY2JjYmNiJyxcdCcjNDY0NjQ2JyxcdCcjMjg3MDg0JyxcdCcjYjJmN2VlJyxcdCcjOWU5ZTllJyxcdCcjZWVlZWVlJyxcdCcjYWUxZmE5J11cblxuICAgIHZhciBkaWN0aW9uYXJ5ID0ge307XG5cbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgY2F0ZWdvcnlFbnRpdGllcy5sZW5ndGg7IGkrKykge1xuXG4gICAgICB2YXIgY29sb3IgPSBudWxsO1xuXG4gICAgICBpZihpIDwgZGVmYXVsdFBhbGV0dGUubGVuZ3RoKSB7XG4gICAgICAgIGNvbG9yID0gZGVmYXVsdFBhbGV0dGVbaV07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgaW5kZXggPSBpICUgZGVmYXVsdFBhbGV0dGUubGVuZ3RoIC0gMTtcbiAgICAgICAgY29sb3IgPSBkZWZhdWx0UGFsZXR0ZVtpbmRleF07XG4gICAgICB9XG4gICAgICBkaWN0aW9uYXJ5W2NhdGVnb3J5RW50aXRpZXNbaV0udmFsdWVdID0ge1xuICAgICAgICB2YWx1ZTogY2F0ZWdvcnlFbnRpdGllc1tpXS52YWx1ZSxcbiAgICAgICAgbGFiZWw6IGNhdGVnb3J5RW50aXRpZXNbaV0ubGFiZWwsXG4gICAgICAgIGNvbG9yOiBjb2xvclxuICAgICAgfTtcblxuICAgIH1cblxuICAgIGRpY3Rpb25hcnlbLTk5OTldID0ge1xuICAgICAgdmFsdWU6IC05OTk5LFxuICAgICAgbGFiZWw6IG9wdGlvbnMudW5hc3NpZ25lZExhYmVsLFxuICAgICAgY29sb3I6IG9wdGlvbnMudW5hc3NpZ25lZENvbG9yXG4gICAgfTtcblxuICAgIHJldHVybiBkaWN0aW9uYXJ5O1xuICB9XG5cblxuICAvKipcbiAgICogUHVibGljIGZ1bmN0aW9ucyB0aGF0IGFyZSBhY2Nlc3NpYmxlIGVsc2V3aGVyZSBpbiB0aGUgYXBwLlxuICAgKiBFeDogRG9udXRzLmNyZWF0ZURldGFpbHNEb251dChhcmcxLCBhcmcyKTtcbiAgICovXG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgRDMgZG9udXQgdGhhdCBnb2VzIGFyb3VuZCBhIGxhYmVsIG9uIHRoZSBtYXAuXG4gICAgICovXG4gICAgc2VydmljZS5jcmVhdGVMYWJlbERvbnV0ID0gZnVuY3Rpb24oc2VjdG9ycywgcHJvamVjdHMsIGRpdklkKSB7XG4gICAgICB2YXIgdml6RGljdGlvbmFyeSA9IG1ha2VWaXN1YWxpemF0aW9uRGljdGlvbmFyeShzZWN0b3JzKTtcbiAgICAgIHZhciBkb251dCA9IG5ldyBFeHBhbmRvRG9udXQocHJvamVjdHMsIHZpekRpY3Rpb25hcnksIGRpdklkICwgJ2JvdHRvbScpO1xuICAgICAgJChkaXZJZCkucHJlcGVuZCgnPGRpdiBpZD1cInNlY3RvcnMtaGVhZGluZ1wiIGNsYXNzPVwiaGVhZGluZ1wiPlNlY3RvcnM8L2Rpdj4nKTtcbiAgICAgIHJldHVybiBkb251dDtcbiAgICB9O1xuXG4gIHJldHVybiBzZXJ2aWNlO1xuXG5cbn0pO1xuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IE5pY2hvbGFzIEhhbGxhaGFuIDxuaGFsbGFoYW5Ac3BhdGlhbGRldi5jb20+XG4gKiAgICAgICBvbiAzLzE4LzE0LlxuICovXG5cbi8qKlxuICogQWxsIG9mIHRoZSBsYXllciBuYW1lcyBuZWVkIHRvIGJlIGxvd2VyY2FzZS5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnR2VvQW5ndWxhcicpLnNlcnZpY2UoJ0xheWVyQ29uZmlnJywgZnVuY3Rpb24gKCkge1xuXG4gIHZhciBjb25maWdMYXllcnMgPSBbXG4gICAgcmVxdWlyZSgnLi4vLi4vLi4vLi4vQ29uZmlnL2xheWVycy9hbGwuanMnKSxcbiAgICByZXF1aXJlKCcuLi8uLi8uLi8uLi9Db25maWcvbGF5ZXJzL2Jhc2VtYXBzLmpzJyksXG4gICAgcmVxdWlyZSgnLi4vLi4vLi4vLi4vQ29uZmlnL2xheWVycy9kaXNhc3Rlci5qcycpLFxuICAgIHJlcXVpcmUoJy4uLy4uLy4uLy4uL0NvbmZpZy9sYXllcnMvb3RoZXIuanMnKSxcbiAgICByZXF1aXJlKCcuLi8uLi8uLi8uLi9Db25maWcvbGF5ZXJzL3Byb2plY3QuanMnKSxcbiAgICByZXF1aXJlKCcuLi8uLi8uLi8uLi9Db25maWcvbGF5ZXJzL3Byb2plY3RoZWFsdGguanMnKSxcbiAgICByZXF1aXJlKCcuLi8uLi8uLi8uLi9Db25maWcvbGF5ZXJzL3Byb2plY3RyaXNrLmpzJyksXG4gICAgcmVxdWlyZSgnLi4vLi4vLi4vLi4vQ29uZmlnL2xheWVycy92ZWN0b3J0aWxlcy5qcycpXG5cbiAgXTtcblxuICAvKipcbiAgICogQWRkcyB0aGUgbGF5ZXJzIHNwZWNpZmllZCBpbiB0aGUgQ29uZmlnL2xheWVycyBkaXJlY3RvcnkgdG8gdGhpcy5cbiAgICovXG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBjb25maWdMYXllcnMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICB2YXIgY2ZnID0gY29uZmlnTGF5ZXJzW2ldO1xuICAgIGZvciAodmFyIGtleSBpbiBjZmcpIHtcbiAgICAgIHRoaXNba2V5XSA9IGNmZ1trZXldO1xuICAgIH1cbiAgfVxuXG5cbiAgLyoqXG4gICAqIGJib3hcbiAgICpcbiAgICogVGhpcyBpcyB1bml2ZXJzYWwgdG8gYWxsIGxheWVycywgYW5kIGJib3h1cmwgZmV0Y2hlcyB0aGUgZmVhdHVyZSBpdGluZXJhcnkuIFRoaXMgaXMgaW4gdHVybiB1c2VkIHRvIGZpbmQgdGhlIGNlbnRlclxuICAgKiBmZWF0dXJlIGZvciB0aGUgYnJlYWRjcnVtYnMgYXMgd2VsbCBhcyBmZXRjaCB0aGUgZmVhdHVyZXMgdGhhdCBhcHBseSB0byBhIEJCb3hHZW9KU09OIG9iamVjdC5cbiAgICpcbiAgICogQHR5cGUge3tiYm94dXJsOiAqLCBjZW50ZXJ1cmw6ICp9fVxuICAgKi9cbiAgdGhpcy5iYm94ID0ge1xuICAgIGJib3h1cmw6IGNvbmZpZy5jaHViYnNQYXRoKCdzZXJ2aWNlcy9jdXN0b20vY3VzdG9tX29wZXJhdGlvbj9uYW1lPWdldGlkc2J5ZXh0ZW50JmZvcm1hdD1qc29uJmJib3g9OmJib3gnKSxcbiAgICAvLyB1c2VkIHRvIGdldCB0aGUgY2VudGVyIGZlYXR1cmUuIGNhbiBnZXQgYW55IGZlYXR1cmUgeW91IHdhbnQgYnkgaWRcbiAgICBmZWF0dXJsOiBjb25maWcuY2h1YmJzUGF0aCgnc2VydmljZXMvY3VzdG9tL2N1c3RvbV9vcGVyYXRpb24/bmFtZT1nZXRmZWF0dXJlc2J5aWQmZm9ybWF0PWdlb2pzb24mZ2FkbV9sZXZlbD06bGV2ZWwmaWRzPTppZHMnKVxuICB9O1xuXG4gIC8qKlxuICAgKiBCQm94R2VvSlNPTlxuICAgKlxuICAgKiBUaGlzIGxheWVyIHR5cGUgcmV0cmlldmVkIGZlYXR1cmVzIHRoYXQgaW50ZXJzZWN0IHdpdGggdGhlIG1hcCdzIGJvdW5kaW5nIGJveC5cbiAgICogVGhlcmUgbXVzdCBiZSBhIGJhY2tlbmQgQVBJIHRoYXQgdW5kZXJzdGFuZHMgdGhpcy4gVGhlIGZlYXR1cmVzIHRoYXQgYXBwbHlcbiAgICogdG8gdGhlIGJvdW5kaW5nIGJveCBhcmUgZmV0Y2hlZCB1bml2ZXJzYWxseSB0byBhbGwgbGF5ZXJzLiBUaGVzZSBlbmRwb2ludHNcbiAgICogYXJlIHNwZWNpZmllZCBpbiB0aGlzLmJib3guXG4gICAqXG4gICAqIFRoZSBDaHViYnMgU3BhdGlhbCBTZXJ2ZXIgZnVsbHkgY29tcHJlaGVuZHMgdGhpcywgb3RoZXJzIGRvIG5vdC5cbiAgICpcbiAgICogQHR5cGUge3t0eXBlOiBzdHJpbmd9fVxuICAgKi9cbiAgLy90aGlzLnRoZW1lY291bnQgPSB7XG4gIC8vICBuYW1lOiAnVGhlbWUgQ291bnQnLFxuICAvLyAgdHlwZTogJ2Jib3hnZW9qc29uJyxcbiAgLy8gIHVybDogY29uZmlnLmNodWJic1BhdGgoXCJzZXJ2aWNlcy9jdXN0b20vY3VzdG9tX29wZXJhdGlvbj9uYW1lPWdldGFnZ3JlZ2F0ZWR0aGVtZWZlYXR1cmVzYnlpZCZmb3JtYXQ9Z2VvanNvbiZ0aGVtZT06dGhlbWUmZ2FkbV9sZXZlbD06bGV2ZWwmaWRzPTppZHMmZmlsdGVycz06ZmlsdGVyc1wiKSxcbiAgLy8gIHByb3BlcnRpZXM6IHtcbiAgLy8gICAgXCJzdHlsZUZuXCI6IGZ1bmN0aW9uIChwcm9wZXJ0aWVzKSB7XG4gIC8vICAgICAgdmFyIHN0eWxlID0ge1xuICAvLyAgICAgICAgY29sb3I6ICd3aGl0ZScsXG4gIC8vICAgICAgICBvcGFjaXR5OiAxLFxuICAvLyAgICAgICAgZmlsbE9wYWNpdHk6IDAuMDcsXG4gIC8vICAgICAgICB3ZWlnaHQ6IDEuNVxuICAvLyAgICAgIH07XG4gIC8vXG4gIC8vICAgICAgaWYgKHByb3BlcnRpZXMudGhlbWUgPT0gXCJkaXNhc3RlclwiKSB7XG4gIC8vICAgICAgICBpZiAocHJvcGVydGllcyAmJiBwcm9wZXJ0aWVzLmlyb2Nfc3RhdHVzX19jKSB7XG4gIC8vICAgICAgICAgIHN3aXRjaCAocHJvcGVydGllcy5pcm9jX3N0YXR1c19fYy50b0xvd2VyQ2FzZSgpKSB7XG4gIC8vICAgICAgICAgICAgY2FzZSBcImFjdGl2ZVwiOlxuICAvLyAgICAgICAgICAgICAgc3R5bGUuZmlsbENvbG9yID0gXCIjY2MwMDMzXCI7XG4gIC8vICAgICAgICAgICAgICBzdHlsZS5maWxsT3BhY2l0eSA9IDAuNTtcbiAgLy8gICAgICAgICAgICAgIGJyZWFrO1xuICAvLyAgICAgICAgICAgIGNhc2UgXCJtb25pdG9yaW5nXCI6XG4gIC8vICAgICAgICAgICAgICBzdHlsZS5maWxsQ29sb3IgPSBcIiNjYzk5MDBcIjtcbiAgLy8gICAgICAgICAgICAgIHN0eWxlLmZpbGxPcGFjaXR5ID0gMC41O1xuICAvLyAgICAgICAgICAgICAgYnJlYWs7XG4gIC8vICAgICAgICAgICAgY2FzZSBcImluYWN0aXZlXCI6XG4gIC8vICAgICAgICAgICAgICBzdHlsZS5maWxsQ29sb3IgPSBcIndoaXRlXCI7XG4gIC8vICAgICAgICAgICAgICBzdHlsZS5maWxsT3BhY2l0eSA9IDAuMDtcbiAgLy8gICAgICAgICAgICAgIGJyZWFrO1xuICAvLyAgICAgICAgICB9XG4gIC8vICAgICAgICB9XG4gIC8vICAgICAgfVxuICAvLyAgICAgIGVsc2UgaWYgKHByb3BlcnRpZXMudGhlbWUgPT0gXCJwcm9qZWN0cmlza1wiKSB7XG4gIC8vICAgICAgICBpZiAocHJvcGVydGllcyAmJiBwcm9wZXJ0aWVzLm92ZXJhbGxfYXNzZXNzbWVudF9fYykge1xuICAvLyAgICAgICAgICBzd2l0Y2ggKHByb3BlcnRpZXMub3ZlcmFsbF9hc3Nlc3NtZW50X19jLnRvTG93ZXJDYXNlKCkpIHtcbiAgLy8gICAgICAgICAgICBjYXNlIFwiY3JpdGljYWxcIjpcbiAgLy8gICAgICAgICAgICAgIHN0eWxlLmZpbGxDb2xvciA9IFwicmVkXCI7XG4gIC8vICAgICAgICAgICAgICBzdHlsZS5maWxsT3BhY2l0eSA9IDAuNTtcbiAgLy8gICAgICAgICAgICAgIGJyZWFrO1xuICAvLyAgICAgICAgICAgIGNhc2UgXCJoaWdoXCI6XG4gIC8vICAgICAgICAgICAgICBzdHlsZS5maWxsQ29sb3IgPSBcIm9yYW5nZVwiO1xuICAvLyAgICAgICAgICAgICAgc3R5bGUuZmlsbE9wYWNpdHkgPSAwLjU7XG4gIC8vICAgICAgICAgICAgICBicmVhaztcbiAgLy8gICAgICAgICAgICBjYXNlIFwibWVkaXVtXCI6XG4gIC8vICAgICAgICAgICAgICBzdHlsZS5maWxsQ29sb3IgPSBcInllbGxvd1wiO1xuICAvLyAgICAgICAgICAgICAgc3R5bGUuZmlsbE9wYWNpdHkgPSAwLjU7XG4gIC8vICAgICAgICAgICAgICBicmVhaztcbiAgLy8gICAgICAgICAgICBjYXNlIFwibG93XCI6XG4gIC8vICAgICAgICAgICAgICBzdHlsZS5maWxsQ29sb3IgPSBcImdyZWVuXCI7XG4gIC8vICAgICAgICAgICAgICBzdHlsZS5maWxsT3BhY2l0eSA9IDAuNTtcbiAgLy8gICAgICAgICAgICAgIGJyZWFrO1xuICAvLyAgICAgICAgICB9XG4gIC8vICAgICAgICB9XG4gIC8vICAgICAgfVxuICAvLyAgICAgIGVsc2UgaWYgKHByb3BlcnRpZXMudGhlbWUgPT0gXCJwcm9qZWN0aGVhbHRoXCIpIHtcbiAgLy8gICAgICAgIGlmIChwcm9wZXJ0aWVzICYmIHByb3BlcnRpZXMub3ZlcmFsbF9zdGF0dXNfX2MpIHtcbiAgLy8gICAgICAgICAgc3dpdGNoIChwcm9wZXJ0aWVzLm92ZXJhbGxfc3RhdHVzX19jLnRvTG93ZXJDYXNlKCkpIHtcbiAgLy8gICAgICAgICAgICBjYXNlIFwicmVkXCI6XG4gIC8vICAgICAgICAgICAgICBzdHlsZS5maWxsQ29sb3IgPSBcInJlZFwiO1xuICAvLyAgICAgICAgICAgICAgc3R5bGUuZmlsbE9wYWNpdHkgPSAwLjU7XG4gIC8vICAgICAgICAgICAgICBicmVhaztcbiAgLy8gICAgICAgICAgICBjYXNlIFwieWVsbG93XCI6XG4gIC8vICAgICAgICAgICAgICBzdHlsZS5maWxsQ29sb3IgPSBcInllbGxvd1wiO1xuICAvLyAgICAgICAgICAgICAgc3R5bGUuZmlsbE9wYWNpdHkgPSAwLjU7XG4gIC8vICAgICAgICAgICAgICBicmVhaztcbiAgLy8gICAgICAgICAgICBjYXNlIFwiZ3JlZW5cIjpcbiAgLy8gICAgICAgICAgICAgIHN0eWxlLmZpbGxDb2xvciA9IFwiZ3JlZW5cIjtcbiAgLy8gICAgICAgICAgICAgIHN0eWxlLmZpbGxPcGFjaXR5ID0gMC41O1xuICAvLyAgICAgICAgICAgICAgYnJlYWs7XG4gIC8vICAgICAgICAgICAgY2FzZSBcIndoaXRlXCI6XG4gIC8vICAgICAgICAgICAgICBzdHlsZS5maWxsQ29sb3IgPSBcIndoaXRlXCI7XG4gIC8vICAgICAgICAgICAgICBzdHlsZS5maWxsT3BhY2l0eSA9IDAuNTtcbiAgLy8gICAgICAgICAgICAgIGJyZWFrO1xuICAvLyAgICAgICAgICB9XG4gIC8vICAgICAgICB9XG4gIC8vICAgICAgfVxuICAvLyAgICAgIHJldHVybiBzdHlsZTtcbiAgLy8gICAgfSxcbiAgLy8gICAgXCJsYWJlbFByb3BlcnR5XCI6IGZ1bmN0aW9uIChwcm9wZXJ0aWVzKSB7XG4gIC8vICAgICAgaWYgKHByb3BlcnRpZXMudGhlbWUgPT0gXCJkaXNhc3RlclwiKSB7XG4gIC8vICAgICAgICB2YXIgY29sb3IgPSBcIlwiO1xuICAvLyAgICAgICAgdmFyIGxhYmVsQ29sb3IgPSBcIlwiO1xuICAvLyAgICAgICAgaWYgKHByb3BlcnRpZXMgJiYgcHJvcGVydGllcy5pcm9jX3N0YXR1c19fYykge1xuICAvLyAgICAgICAgICBzd2l0Y2ggKHByb3BlcnRpZXMuaXJvY19zdGF0dXNfX2MudG9Mb3dlckNhc2UoKSkge1xuICAvLyAgICAgICAgICAgIGNhc2UgXCJhY3RpdmVcIjpcbiAgLy8gICAgICAgICAgICAgIGNvbG9yID0gXCIjY2MwMDMzXCI7XG4gIC8vICAgICAgICAgICAgICBsYWJlbENvbG9yID0gXCIjZmZmXCI7XG4gIC8vICAgICAgICAgICAgICBicmVhaztcbiAgLy8gICAgICAgICAgICBjYXNlIFwibW9uaXRvcmluZ1wiOlxuICAvLyAgICAgICAgICAgICAgY29sb3IgPSBcIiNlMWJiMjVcIjtcbiAgLy8gICAgICAgICAgICAgIGxhYmVsQ29sb3IgPSBcIiNmZmZcIjtcbiAgLy8gICAgICAgICAgICAgIGJyZWFrO1xuICAvLyAgICAgICAgICAgIGNhc2UgXCJpbmFjdGl2ZVwiOlxuICAvLyAgICAgICAgICAgICAgY29sb3IgPSBcIiNiZGJkYmRcIjtcbiAgLy8gICAgICAgICAgICAgIGxhYmVsQ29sb3IgPSBcIiMwMDBcIjtcbiAgLy8gICAgICAgICAgICAgIGJyZWFrO1xuICAvLyAgICAgICAgICB9XG4gIC8vICAgICAgICB9XG4gIC8vICAgICAgICByZXR1cm4gJzxkaXYgY2xhc3M9XCJmZWF0dXJlbGFiZWwtaWNvbi1udW1iZXJcIicgKyAoY29sb3IgPyAnIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogJyArIGNvbG9yICsgJztjb2xvcjogJyArIGxhYmVsQ29sb3IgKyAnXCInIDogJycpICsgJz48c3Bhbj4nICsgcHJvcGVydGllcy50aGVtZV9jb3VudCArICc8L3NwYW4+PC9kaXY+JztcbiAgLy8gICAgICB9XG4gIC8vICAgICAgZWxzZSB7XG4gIC8vICAgICAgICByZXR1cm4gJzxkaXYgY2xhc3M9XCJmZWF0dXJlbGFiZWwtaWNvbi1udW1iZXJcIj48c3Bhbj4nICsgcHJvcGVydGllcy50aGVtZV9jb3VudCArICc8L3NwYW4+PC9kaXY+JztcbiAgLy8gICAgICB9XG4gIC8vICAgIH0sXG4gIC8vICAgIFwibWFwLWljb24tc2l6ZVwiOiBmdW5jdGlvbiAocHJvcGVydGllcykge1xuICAvLyAgICAgIC8vUmV0dXJuIGFuIGFycmF5IG9mIDIgaXRlbXMuIHNpemUgb2YgbWFwIGljb25cbiAgLy8gICAgICByZXR1cm4gWzM1LDM1XTtcbiAgLy8gICAgfSxcbiAgLy8gICAgXCJkZXRhaWxzVXJsXCI6IGNvbmZpZy5jaHViYnNQYXRoKCdzZXJ2aWNlcy9jdXN0b20vY3VzdG9tX29wZXJhdGlvbj9uYW1lPWdldDp0aGVtZWJ5Z3VpZCZmb3JtYXQ9anNvbiZndWlkcz06Z3VpZHMmZ2FkbV9sZXZlbD06bGV2ZWwmZmlsdGVycz06ZmlsdGVycycpLFxuICAvLyAgICBcIm9uU2VsZWN0XCI6ICdmZXRjaEZlYXR1cmVEZXRhaWxzJywgLy8gdGhlIEJCb3hHZW9KU09OIG1ldGhvZCB0byBjYWxsIG9uIHNlbGVjdC4gKHRvZ2dsZWQgb24pXG4gIC8vICAgIFwib25EZXNlbGVjdFwiOiAnY2xvc2VEZXRhaWxzJywgLy8gZmVhdHVyZWxhYmVsIGV2YWx1YXRlcyB0aGlzIHN0cmluZyB3aGVuIGEgZmVhdHVyZSBpcyB0b2dnbGVkIG9mZlxuICAvLyAgICBcImRlZmF1bHRUaGVtZVwiOiAncHJvamVjdCcsIC8vIFRoZSBkZWZhdWx0IHRoZW1lIHRoZSBsYXllciB1c2VzLiBUaGlzIGlzIHVzZWQgaWYgdGhlcmUgaXMgbm8gdGhlbWUgcXVlcnkgcGFyYW0uXG4gIC8vICAgIFwibGVnZW5kXCI6IGZ1bmN0aW9uICh0aGVtZSkge1xuICAvLyAgICAgIGlmICh0aGVtZS50b0xvd2VyQ2FzZSgpID09ICdkaXNhc3RlcicpIHtcbiAgLy8gICAgICAgIC8vZGlzYXN0ZXJcbiAgLy8gICAgICAgIHJldHVybiAnPGltZyBzcmM9XCJpbWFnZXMvbGVnZW5kX2Rpc2FzdGVyLnBuZ1wiIGFsdD1cImRpc2FzdGVyIGxlZ2VuZFwiIC8+JztcbiAgLy8gICAgICB9XG4gIC8vICAgICAgZWxzZSBpZiAodGhlbWUudG9Mb3dlckNhc2UoKSA9PSAncHJvamVjdGhlYWx0aCcpIHtcbiAgLy8gICAgICAgIC8vcHJvamVjdFxuICAvLyAgICAgICAgcmV0dXJuICc8aW1nIHNyYz1cImltYWdlcy9sZWdlbmRfcHJvamVjdGhlYWx0aC5wbmdcIiBhbHQ9XCJwcm9qZWN0IGhlYWx0aCBsZWdlbmRcIiAvPic7XG4gIC8vICAgICAgfVxuICAvLyAgICAgIGVsc2UgaWYodGhlbWUudG9Mb3dlckNhc2UoKSA9PSAncHJvamVjdHJpc2snKSB7XG4gIC8vICAgICAgICByZXR1cm4gJzxpbWcgc3JjPVwiaW1hZ2VzL2xlZ2VuZF9wcm9qZWN0cmlzay5wbmdcIiBhbHQ9XCJwcm9qZWN0IHJpc2sgbGVnZW5kXCIgLz4nO1xuICAvLyAgICAgIH1cbiAgLy8gICAgICBlbHNlIGlmICh0aGVtZS50b0xvd2VyQ2FzZSgpID09ICdwcm9qZWN0Jykge1xuICAvLyAgICAgICAgcmV0dXJuICc8aW1nIHNyYz1cImltYWdlcy9sZWdlbmRfcHJvamVjdC5wbmdcIiBhbHQ9XCJwcm9qZWN0IGxlZ2VuZFwiIC8+JztcbiAgLy8gICAgICB9XG4gIC8vICAgIH1cbiAgLy9cbiAgLy8gIH1cbiAgLy99O1xuXG4gIHRoaXMudGhlbWUgPSB7XG4gICAgbmFtZTogJ1RoZW1lIChCYWRnZSBPZmYpJyxcbiAgICB0eXBlOiAnYmJveGdlb2pzb24nLFxuICAgIHVybDogY29uZmlnLmNodWJic1BhdGgoXCJzZXJ2aWNlcy9jdXN0b20vY3VzdG9tX29wZXJhdGlvbj9uYW1lPWdldGFnZ3JlZ2F0ZWR0aGVtZWZlYXR1cmVzYnlpZCZmb3JtYXQ9Z2VvanNvbiZ0aGVtZT06dGhlbWUmZ2FkbV9sZXZlbD06bGV2ZWwmaWRzPTppZHMmZmlsdGVycz06ZmlsdGVyc1wiKSxcbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICBcInN0eWxlRm5cIjogZnVuY3Rpb24gKHByb3BlcnRpZXMpIHtcbiAgICAgICAgdmFyIHN0eWxlID0ge1xuICAgICAgICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgZmlsbE9wYWNpdHk6IDAuMDcsXG4gICAgICAgICAgd2VpZ2h0OiAxLjVcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAocHJvcGVydGllcy50aGVtZSA9PSBcImRpc2FzdGVyXCIpIHtcbiAgICAgICAgICBpZiAocHJvcGVydGllcyAmJiBwcm9wZXJ0aWVzLmlyb2Nfc3RhdHVzX19jKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKHByb3BlcnRpZXMuaXJvY19zdGF0dXNfX2MudG9Mb3dlckNhc2UoKSkge1xuICAgICAgICAgICAgICBjYXNlIFwiYWN0aXZlXCI6XG4gICAgICAgICAgICAgICAgc3R5bGUuZmlsbENvbG9yID0gXCIjY2MwMDMzXCI7XG4gICAgICAgICAgICAgICAgc3R5bGUuZmlsbE9wYWNpdHkgPSAwLjU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgXCJtb25pdG9yaW5nXCI6XG4gICAgICAgICAgICAgICAgc3R5bGUuZmlsbENvbG9yID0gXCIjY2M5OTAwXCI7XG4gICAgICAgICAgICAgICAgc3R5bGUuZmlsbE9wYWNpdHkgPSAwLjU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgXCJpbmFjdGl2ZVwiOlxuICAgICAgICAgICAgICAgIHN0eWxlLmZpbGxDb2xvciA9IFwid2hpdGVcIjtcbiAgICAgICAgICAgICAgICBzdHlsZS5maWxsT3BhY2l0eSA9IDAuMDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocHJvcGVydGllcy50aGVtZSA9PSBcInByb2plY3RyaXNrXCIpIHtcbiAgICAgICAgICBpZiAocHJvcGVydGllcyAmJiBwcm9wZXJ0aWVzLm92ZXJhbGxfYXNzZXNzbWVudF9fYykge1xuICAgICAgICAgICAgc3dpdGNoIChwcm9wZXJ0aWVzLm92ZXJhbGxfYXNzZXNzbWVudF9fYy50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICAgICAgICAgIGNhc2UgXCJjcml0aWNhbFwiOlxuICAgICAgICAgICAgICAgIHN0eWxlLmZpbGxDb2xvciA9IFwicmVkXCI7XG4gICAgICAgICAgICAgICAgc3R5bGUuZmlsbE9wYWNpdHkgPSAwLjU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgXCJoaWdoXCI6XG4gICAgICAgICAgICAgICAgc3R5bGUuZmlsbENvbG9yID0gXCJvcmFuZ2VcIjtcbiAgICAgICAgICAgICAgICBzdHlsZS5maWxsT3BhY2l0eSA9IDAuNTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSBcIm1lZGl1bVwiOlxuICAgICAgICAgICAgICAgIHN0eWxlLmZpbGxDb2xvciA9IFwieWVsbG93XCI7XG4gICAgICAgICAgICAgICAgc3R5bGUuZmlsbE9wYWNpdHkgPSAwLjU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgXCJsb3dcIjpcbiAgICAgICAgICAgICAgICBzdHlsZS5maWxsQ29sb3IgPSBcImdyZWVuXCI7XG4gICAgICAgICAgICAgICAgc3R5bGUuZmlsbE9wYWNpdHkgPSAwLjU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHByb3BlcnRpZXMudGhlbWUgPT0gXCJwcm9qZWN0aGVhbHRoXCIpIHtcbiAgICAgICAgICBpZiAocHJvcGVydGllcyAmJiBwcm9wZXJ0aWVzLm92ZXJhbGxfc3RhdHVzX19jKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKHByb3BlcnRpZXMub3ZlcmFsbF9zdGF0dXNfX2MudG9Mb3dlckNhc2UoKSkge1xuICAgICAgICAgICAgICBjYXNlIFwicmVkXCI6XG4gICAgICAgICAgICAgICAgc3R5bGUuZmlsbENvbG9yID0gXCJyZWRcIjtcbiAgICAgICAgICAgICAgICBzdHlsZS5maWxsT3BhY2l0eSA9IDAuNTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSBcInllbGxvd1wiOlxuICAgICAgICAgICAgICAgIHN0eWxlLmZpbGxDb2xvciA9IFwieWVsbG93XCI7XG4gICAgICAgICAgICAgICAgc3R5bGUuZmlsbE9wYWNpdHkgPSAwLjU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgXCJncmVlblwiOlxuICAgICAgICAgICAgICAgIHN0eWxlLmZpbGxDb2xvciA9IFwiZ3JlZW5cIjtcbiAgICAgICAgICAgICAgICBzdHlsZS5maWxsT3BhY2l0eSA9IDAuNTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSBcIndoaXRlXCI6XG4gICAgICAgICAgICAgICAgc3R5bGUuZmlsbENvbG9yID0gXCJ3aGl0ZVwiO1xuICAgICAgICAgICAgICAgIHN0eWxlLmZpbGxPcGFjaXR5ID0gMC41O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3R5bGU7XG4gICAgICB9LFxuICAgICAgXCJtYXAtaWNvbi1zaXplXCI6IGZ1bmN0aW9uIChwcm9wZXJ0aWVzKSB7XG4gICAgICAgIC8vUmV0dXJuIGFuIGFycmF5IG9mIDIgaXRlbXMuIHNpemUgb2YgbWFwIGljb25cbiAgICAgICAgcmV0dXJuIFszNSwzNV07XG4gICAgICB9LFxuICAgICAgXCJkZXRhaWxzVXJsXCI6IGNvbmZpZy5jaHViYnNQYXRoKCdzZXJ2aWNlcy9jdXN0b20vY3VzdG9tX29wZXJhdGlvbj9uYW1lPWdldDp0aGVtZWJ5Z3VpZCZmb3JtYXQ9anNvbiZndWlkcz06Z3VpZHMmZ2FkbV9sZXZlbD06bGV2ZWwmZmlsdGVycz06ZmlsdGVycycpLFxuICAgICAgXCJvblNlbGVjdFwiOiAnZmV0Y2hGZWF0dXJlRGV0YWlscycsIC8vIHRoZSBCQm94R2VvSlNPTiBtZXRob2QgdG8gY2FsbCBvbiBzZWxlY3QuICh0b2dnbGVkIG9uKVxuICAgICAgXCJvbkRlc2VsZWN0XCI6ICdjbG9zZURldGFpbHMnLCAvLyBmZWF0dXJlbGFiZWwgZXZhbHVhdGVzIHRoaXMgc3RyaW5nIHdoZW4gYSBmZWF0dXJlIGlzIHRvZ2dsZWQgb2ZmXG4gICAgICBcImRlZmF1bHRUaGVtZVwiOiAncHJvamVjdCcsIC8vIFRoZSBkZWZhdWx0IHRoZW1lIHRoZSBsYXllciB1c2VzLiBUaGlzIGlzIHVzZWQgaWYgdGhlcmUgaXMgbm8gdGhlbWUgcXVlcnkgcGFyYW0uXG4gICAgICBcImxhYmVsUHJvcGVydHlcIjogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiAnPGRpdiBjbGFzcz1cImZlYXR1cmVsYWJlbC1pY29uLW51bWJlclwiIHN0eWxlPVwiZGlzcGxheTpub25lO1wiPjwvZGl2Pic7XG4gICAgICB9LFxuICAgICAgXCJsZWdlbmRcIjogZnVuY3Rpb24gKHRoZW1lKSB7XG4gICAgICAgIGlmICh0aGVtZS50b0xvd2VyQ2FzZSgpID09ICdkaXNhc3RlcicpIHtcbiAgICAgICAgICAvL2Rpc2FzdGVyXG4gICAgICAgICAgcmV0dXJuICc8aW1nIHNyYz1cImltYWdlcy9sZWdlbmRfZGlzYXN0ZXIucG5nXCIgYWx0PVwiZGlzYXN0ZXIgbGVnZW5kXCIgLz4nO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoZW1lLnRvTG93ZXJDYXNlKCkgPT0gJ3Byb2plY3RoZWFsdGgnKSB7XG4gICAgICAgICAgLy9wcm9qZWN0XG4gICAgICAgICAgcmV0dXJuICc8aW1nIHNyYz1cImltYWdlcy9sZWdlbmRfcHJvamVjdGhlYWx0aC5wbmdcIiBhbHQ9XCJwcm9qZWN0IGhlYWx0aCBsZWdlbmRcIiAvPic7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZih0aGVtZS50b0xvd2VyQ2FzZSgpID09ICdwcm9qZWN0cmlzaycpIHtcbiAgICAgICAgICByZXR1cm4gJzxpbWcgc3JjPVwiaW1hZ2VzL2xlZ2VuZF9wcm9qZWN0cmlzay5wbmdcIiBhbHQ9XCJwcm9qZWN0IHJpc2sgbGVnZW5kXCIgLz4nO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoZW1lLnRvTG93ZXJDYXNlKCkgPT0gJ3Byb2plY3QnKSB7XG4gICAgICAgICAgcmV0dXJuICc8aW1nIHNyYz1cImltYWdlcy9sZWdlbmRfcHJvamVjdC5wbmdcIiBhbHQ9XCJwcm9qZWN0IGxlZ2VuZFwiIC8+JztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgfVxuICB9O1xuXG5cbiAgLy9HQURNIGNvdW50cnkgZXh0ZW50cywgbGV2ZWwgMFxuICB0aGlzLmNvdW50cnlleHRlbnRzID0ge1xuICAgIHR5cGU6ICdnZW9qc29uJyxcbiAgICAgIHRoZW1lOiAnb3RoZXInLFxuICAgICAgdXJsOiAnZGF0YS92d19nYWRtX3Jhd19nZW9tLmdlb2pzb24nXG4gIH07XG5cbiAgLy9BUkMgUmVnaW9uIGV4dGVudHNcbiAgdGhpcy5hcmNyZWdpb25leHRlbnRzID0ge1xuICAgIHR5cGU6ICdnZW9qc29uJyxcbiAgICAgIHRoZW1lOiAnb3RoZXInLFxuICAgICAgdXJsOiAnZGF0YS9hcmNfcmVnaW9uX2V4dGVudHMuZ2VvanNvbidcbiAgfTtcblxuICAvKipcbiAgICogRm9yIGxheWVycywgd2UgdHJ5IGFuZCBnZXQgYW4gYWxpYXMgZm9yIGV2ZXJ5dGhpbmcsIHNvIGlmIGl0J3MgYSBVUkwgdGhhdFxuICAgKiBkb2VzIG5vdCBtYXRjaCwgd2UganVzdCB3YW50IHRvIHJldHVybiBpdHNlbGYgc28gd2UgY2FuIGZldGNoIHRoYXQgZ2l2ZW4gdXJsLlxuICAgKlxuICAgKiBAcGFyYW0gbmFtZVxuICAgKiBAcmV0dXJucyB7Kn1cbiAgICovXG4gIHRoaXMuZmluZCA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdmFyIHZhbCA9IHRoaXNbbmFtZV0gfHwgdGhpc1tuYW1lLnRvTG93ZXJDYXNlKCldO1xuICAgIGlmICh0eXBlb2YgdmFsICE9PSAndW5kZWZpbmVkJyAmJiB2YWwgIT09IG51bGwpIHtcbiAgICAgIHJldHVybiB2YWw7XG4gICAgfVxuICAgIGlmIChuYW1lLnNsaWNlKDAsIDQpLnRvTG93ZXJDYXNlKCkgPT09ICdodHRwJykge1xuICAgICAgcmV0dXJuIG5hbWU7XG4gICAgfVxuICAgIGNvbnNvbGUuZXJyb3IoJ0NPVUxEIE5PVCBGSU5EIEFMSUFTOiAnICsgbmFtZSk7XG4gICAgcmV0dXJuIG51bGw7XG4gIH07XG5cbn0pO1xuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IE5pY2hvbGFzIEhhbGxhaGFuIDxuaGFsbGFoYW5Ac3BhdGlhbGRldi5jb20+XG4gKiAgICAgICBvbiAzLzE4LzE0LlxuICovXG5cbi8qKlxuICogQ29uZmlnIEZpbGUgZm9yIFN0b3JpZXMgUGFuZWxcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnR2VvQW5ndWxhcicpLnNlcnZpY2UoJ1N0b3JpZXNDb25maWcnLCBmdW5jdGlvbiAoKSB7XG5cbiAgLyoqXG4gICAqIFN0b3JpZXMgUGFuZWwgTGlzdFxuICAgKlxuICAgKiBMaXN0IG9mIHN0b3JpZXMgdGhhdCBnZXQgc2hvd24gaW4gdGhlIFN0b3JpZXMgUGFuZWwuIEVkaXQgdGhpcyB0byBhZGQgb3IgcmVtb3ZlXG4gICAqIHN0b3JpZXMgdGhhdCB0aGUgdXNlciB3aWxsIHNlZSBhcyBjaG9pY2VzLiBBbGwgc3RvcmllcywgaW5jbHVkaW5nIG9uZXMgbm90IGluIHRoaXNcbiAgICogbGlzdCwgY2FuIHN0aWxsIGJlIG1hbnVhbGx5IHJlZmVyZW5jZWQgaW4gdGhlIHVybC4gVGhpcyBpcyBqdXN0IGZvciB0aGUgVXNlciBJbnRlcmZhY2UuXG4gICAqL1xuICB0aGlzLnN0b3JpZXMgPSBbXG4gICAgJ2hhaXlhbicsXG4gICAgJ2Vib2xhJ1xuICBdO1xuXG5cbiAgLyoqXG4gICAqIFN0b3JpZXNcbiAgICpcbiAgICogQWxsIHN0b3J5IGFsaWFzZXMgY2FuIGJlIHJlZmVycmVkIHRvIGluIHRoZSB1cmwuIFRoZSBjb3JyZXNwb25kaW5nXG4gICAqIHBhdGggdG8gdGhlIHRodW1ibmFpbCBpbiB0aGUgU3RvcmllcyBQYW5lbCBzaG91bGQgYmU6XG4gICAqICAgIGltYWdlcy97YWxpYXNOYW1lfS5qcGdcbiAgICpcbiAgICovXG5cbiAgdGhpcy5oYWl5YW4gPSB7XG4gICAgdXJsOiAnL21hcGZvbGlvL2luZGV4Lmh0bWwjL21hcEAxMi43Njg5NDYsMTIyLjQ4NjU3Miw2KG9ydGhvLGdhZG0wLGdkYWNzKSxkaXNhc3Rlcj9kZXRhaWxzLXBhbmVsPW9wZW4mc2ZfaWQ9YTBFZDAwMDAwMHFabnRVRUFTJyxcbiAgICBuYW1lOiAnVHlwaG9vbiBIYWl5YW4gUmVzcG9uc2UnLFxuICAgIGRhdGU6ICcyMDEzLTEwLTEyJyxcbiAgICB0aHVtYm5haWw6ICdpbWFnZXMvc3Rvcmllcy9oYWl5YW4ucG5nJyxcbiAgICBrZXl3b3JkczogJ1R5cGhvb24sIERpc2FzdGVyIFJlc3BvbnNlLCBIYWl5YW4sIERpc2FzdGVyLCBBTUVFJ1xuICB9O1xuICB0aGlzLnBhbSA9IHtcbiAgICB1cmw6ICcvbWFwZm9saW8vaW5kZXguaHRtbCMvbWFwQC0xNi41NTE5NjIsMTY4LjA4NTMyNyw3KG9ydGhvLGdkYWNzLGdhZG0wKSxkaXNhc3RlcicsXG4gICAgbmFtZTogJ0N5Y2xvbmUgUGFtIFJlc29wbnNlJyxcbiAgICBkYXRlOiAnMjAxNS0xNS0zJyxcbiAgICB0aHVtYm5haWw6ICdpbWFnZXMvc3Rvcmllcy9wYW0ucG5nJyxcbiAgICBrZXl3b3JkczogJ0N5Y2xvbmUsIERpc2FzdGVyIFJlc3BvbnNlLCBWYW51YXR1LCBBZnJpY2EnXG4gIH07XG5cbiAgLyoqXG4gICAqIEZvciBsYXllcnMsIHdlIHRyeSBhbmQgZ2V0IGFuIGFsaWFzIGZvciBldmVyeXRoaW5nLCBzbyBpZiBpdCdzIGEgVVJMIHRoYXRcbiAgICogZG9lcyBub3QgbWF0Y2gsIHdlIGp1c3Qgd2FudCB0byByZXR1cm4gaXRzZWxmIHNvIHdlIGNhbiBmZXRjaCB0aGF0IGdpdmVuIHVybC5cbiAgICpcbiAgICogQHBhcmFtIG5hbWVcbiAgICogQHJldHVybnMgeyp9XG4gICAqL1xuICB0aGlzLmZpbmQgPSBmdW5jdGlvbihuYW1lKSB7XG4gICAgdmFyIHZhbCA9IHRoaXNbbmFtZV0gfHwgdGhpc1tuYW1lLnRvTG93ZXJDYXNlKCldO1xuICAgIGlmICh0eXBlb2YgdmFsICE9PSAndW5kZWZpbmVkJyAmJiB2YWwgIT09IG51bGwpIHtcbiAgICAgIHJldHVybiB2YWw7XG4gICAgfVxuICAgIGlmIChuYW1lLnNsaWNlKDAsIDQpLnRvTG93ZXJDYXNlKCkgPT09ICdodHRwJykge1xuICAgICAgcmV0dXJuIG5hbWU7XG4gICAgfVxuICAgIGNvbnNvbGUuZXJyb3IoJ0NPVUxEIE5PVCBGSU5EIEFMSUFTOiAnICsgbmFtZSk7XG4gICAgcmV0dXJuIG51bGw7XG4gIH07XG5cbn0pO1xuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IE5pY2hvbGFzIEhhbGxhaGFuIDxuaGFsbGFoYW5Ac3BhdGlhbGRldi5jb20+XG4gKiAgICAgICBvbiA2LzMvMTQuXG4gKi9cblxudmFyIEZlYXR1cmVTZXQgPSByZXF1aXJlKCcuLi8uLi8uLi9saWIvZmVhdHVyZWxhYmVsL0ZlYXR1cmVTZXQnKTtcbnZhciBSZXNvdXJjZSA9IHJlcXVpcmUoJy4vcmVzb3VyY2UnKTtcbnZhciBiYm94VXJsID0gcmVxdWlyZSgnLi92ZWN0b3InKS5iYm94VXJsO1xudmFyIGJib3hSZXNvdXJjZXMgPSByZXF1aXJlKCcuL3ZlY3RvcicpLmJib3hSZXNvdXJjZXM7XG5cbnZhciBMID0gcmVxdWlyZSgnLi92ZWN0b3InKS5MO1xudmFyIGFuZ3VsYXIgPSByZXF1aXJlKCcuL3ZlY3RvcicpLmFuZ3VsYXI7XG52YXIgJHJvb3RTY29wZSA9IHJlcXVpcmUoJy4vdmVjdG9yJykuJHJvb3RTY29wZTtcbnZhciAkaHR0cCA9IHJlcXVpcmUoJy4vdmVjdG9yJykuJGh0dHA7XG5cbm1vZHVsZS5leHBvcnRzID0gQkJveEdlb0pTT047XG5cblxuZnVuY3Rpb24gQkJveEdlb0pTT04oY29uZmlnKSB7XG4gIFJlc291cmNlLmNhbGwodGhpcywgY29uZmlnKTtcbiAgaWYoY29uZmlnLmJib3h1cmwpIHtcbiAgICB0aGlzLl9iYm94dXJsID0gYmJveFVybCA9IGNvbmZpZy5iYm94dXJsO1xuICB9XG4gIHRoaXMuX2ZlYXR1cmVzID0ge307XG4gIHRoaXMuX2ZlYXR1cmVMYXllcnNCeUxldmVsID0ge307XG4gIHRoaXMuX2FsbEZlYXR1cmVMYXllcnMgPSB7fTtcbiAgaWYgKGNvbmZpZy5wcm9wZXJ0aWVzICYmIGNvbmZpZy5wcm9wZXJ0aWVzLmxhYmVsUHJvcGVydHkpIHtcbiAgICB0aGlzLl9mZWF0dXJlU2V0ID0gbmV3IEZlYXR1cmVTZXQoKTtcbiAgfVxuICB0aGlzLl9kZWZhdWx0VGhlbWUgPSBjb25maWcuZGVmYXVsdFRoZW1lIHx8ICdwcm9qZWN0JztcblxuICBpZiAoY29uZmlnLmRldGFpbHNVcmwpIHtcbiAgICB0aGlzLl9kZXRhaWxzVXJsID0gY29uZmlnLmRldGFpbHNVcmw7XG4gIH1cblxuICBiYm94UmVzb3VyY2VzLnB1c2godGhpcyk7XG4gIHRoaXMuX3Jlc0lkeCA9IGJib3hSZXNvdXJjZXMubGVuZ3RoIC0gMTtcbn1cblxuQkJveEdlb0pTT04ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShSZXNvdXJjZS5wcm90b3R5cGUpO1xuQkJveEdlb0pTT04ucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gQkJveEdlb0pTT047XG5cblxuQkJveEdlb0pTT04ucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgYmJveFJlc291cmNlcy5zcGxpY2UodGhpcy5fcmVzSWR4LDEpO1xufTtcblxuXG5CQm94R2VvSlNPTi5wcm90b3R5cGUuZ2V0TGF5ZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBsYXllciA9IFJlc291cmNlLnByb3RvdHlwZS5nZXRMYXllci5jYWxsKHRoaXMpO1xuICBsYXllci5kZXN0cm95UmVzb3VyY2UgPSB0aGlzLmRlc3Ryb3k7IC8vIGdpdmVzIHRoZSBtYXAgdG8gZGVzdHJveSB0aGUgYmJveGdlb2pzb24gdmVjdG9yIHByb3ZpZGVyIHJlc291cmNlXG4gIHJldHVybiBsYXllcjtcbn07XG5cblxuQkJveEdlb0pTT04ucHJvdG90eXBlLl9nZXRGZWF0dXJlcyA9IGZ1bmN0aW9uIChmZWF0T2JqKSB7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgdmFyIHRoZW1lID0gJHJvb3RTY29wZS4kc3RhdGVQYXJhbXMudGhlbWUgfHwgc2VsZi5fZGVmYXVsdFRoZW1lO1xuICB2YXIgZmlsdGVycyA9ICdudWxsJztcbiAgaWYgKCRyb290U2NvcGUuJHN0YXRlUGFyYW1zLmZpbHRlcnMpIHtcbiAgICBmaWx0ZXJzID0gJHJvb3RTY29wZS4kc3RhdGVQYXJhbXMuZmlsdGVycztcbiAgfVxuICB2YXIgdXJsID0gdGhpcy5fdXJsLnJlcGxhY2UoJzp0aGVtZScsIHRoZW1lKVxuICAgIC5yZXBsYWNlKCc6bGV2ZWwnLCBmZWF0T2JqLmxldmVsKVxuICAgIC5yZXBsYWNlKCc6aWRzJywgZmVhdE9iai5ndWlkKVxuICAgIC5yZXBsYWNlKCc6ZmlsdGVycycsIGZpbHRlcnMpO1xuICB2YXIgcHJveHlQYXRoID0gY29uZmlnLnByb3h5UGF0aCh1cmwpO1xuXG4gIC8vIGEgY2FjaGUgbWFrZXMgc2Vuc2UgaWYgdGhlIGJib3hnZW9qc29uIG9iamVjdCBpcyByZWluc3RhbnRpYXRlZFxuICAkaHR0cC5nZXQodXJsLCB7Y2FjaGU6IHRydWV9KS5zdWNjZXNzKGZ1bmN0aW9uIChnZW9qc29uLCBzdGF0dXMpIHtcbiAgICBwcm9jZXNzRmVhdHVyZXMoc2VsZiwgZmVhdE9iaiwgZ2VvanNvbik7XG4gIH0pLmVycm9yKGZ1bmN0aW9uKGVycikge1xuICAgICRodHRwLmdldChwcm94eVBhdGgpLnN1Y2Nlc3MoZnVuY3Rpb24gKGdlb2pzb24sIHN0YXR1cykge1xuICAgICAgcHJvY2Vzc0ZlYXR1cmVzKHNlbGYsIGZlYXRPYmosIGdlb2pzb24pO1xuICAgIH0pLmVycm9yKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1VuYWJsZSB0byBnZXRGZWF0dXJlczogJyArIHVybCk7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuZnVuY3Rpb24gcHJvY2Vzc0ZlYXR1cmVzKHNlbGYsIGZlYXRPYmosIGdlb2pzb24pIHtcbiAgaWYgKGdlb2pzb24uZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdVbmFibGUgdG8gZmV0Y2ggZmVhdHVyZTogJyArIGdlb2pzb24uZXJyb3IpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmICghZ2VvanNvbi5mZWF0dXJlcyB8fCBnZW9qc29uLmZlYXR1cmVzLmxlbmd0aCA8IDEpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgZmVhdCA9IGdlb2pzb24uZmVhdHVyZXNbMF07XG5cbiAgLy8gcHV0dGluZyBleGlzdGluZyBwcm9wZXJ0aWVzIGludG8gbmV3IGZlYXR1cmUgb2JqZWN0IHByb3BlcnRpZXNcbiAgZm9yICh2YXIga2V5IGluIGZlYXRPYmopIHtcbiAgICBmZWF0LnByb3BlcnRpZXNba2V5XSA9IGZlYXRPYmpba2V5XTtcbiAgICBkZWxldGUgZmVhdE9ialtrZXldO1xuICB9XG5cbiAgLy8gZXh0ZW5kaW5nIHByb3BlcnRpZXMgZnJvbSB0aGUgY29uZmlnIGZpbGVcbiAgZm9yICh2YXIga2V5IGluIHNlbGYuX2NvbmZpZy5wcm9wZXJ0aWVzKSB7XG4gICAgZmVhdC5wcm9wZXJ0aWVzW2tleV0gPSBzZWxmLl9jb25maWcucHJvcGVydGllc1trZXldO1xuICAgIC8vIExheWVyQ29uZmlnIHdpbGwgc3RhdGUgdGhlIG5hbWUgb2YgdGhlIEJCb3hHZW9KU09OIG1ldGhvZCB0byBiZSBjYWxsZWQgb24gY2xpY2suXG4gICAgaWYgKGtleSA9PT0gJ29uU2VsZWN0JyB8fCBrZXkgPT09ICdvbkRlc2VsZWN0Jykge1xuICAgICAgdmFyIGZuTmFtZSA9IHNlbGYuX2NvbmZpZy5wcm9wZXJ0aWVzW2tleV07XG4gICAgICBmZWF0LnByb3BlcnRpZXNba2V5XSA9IHNlbGZbZm5OYW1lXTtcbiAgICB9XG4gIH1cblxuICBmb3IgKHZhciBrIGluIGZlYXQpIHtcbiAgICBmZWF0T2JqW2tdID0gZmVhdFtrXTtcbiAgfVxuICBhbmd1bGFyLmV4dGVuZChmZWF0T2JqLCBmZWF0KTtcbiAgY29uc29sZS5sb2coJ2ZldGNoZWQgZmVhdHVyZTogJyArIGZlYXRPYmoucHJvcGVydGllcy5uYW1lKTtcblxuICBpZiAoIXNlbGYuX2dlb2pzb25MYXllcikge1xuICAgIHNlbGYuX2dldExheWVyKCk7XG4gICAgY29uc29sZS5sb2coJ2NyZWF0aW5nIGxheWVyIGluIF9nZXRGZWF0dXJlcycpO1xuICB9XG5cbiAgdmFyIG9wdGlvbnMgPSBzZWxmLl9nZW9qc29uTGF5ZXIub3B0aW9ucztcbiAgdmFyIGZlYXRMYXllciA9IEwuR2VvSlNPTi5nZW9tZXRyeVRvTGF5ZXIoZmVhdE9iaiwgb3B0aW9ucy5wb2ludFRvTGF5ZXIsIG9wdGlvbnMuY29vcmRzVG9MYXRMbmcsIG9wdGlvbnMpO1xuICBMLnN0YW1wKGZlYXRMYXllcik7XG4gIGZlYXRMYXllci5mZWF0dXJlID0gTC5HZW9KU09OLmFzRmVhdHVyZShmZWF0T2JqKTtcbiAgZmVhdExheWVyLmRlZmF1bHRPcHRpb25zID0gZmVhdExheWVyLm9wdGlvbnM7XG4gIHNlbGYuX2dlb2pzb25MYXllci5yZXNldFN0eWxlKGZlYXRMYXllcik7XG4gIGlmIChvcHRpb25zLm9uRWFjaEZlYXR1cmUpIHtcbiAgICBvcHRpb25zLm9uRWFjaEZlYXR1cmUoZmVhdE9iaiwgZmVhdExheWVyKTtcbiAgfVxuXG4gIGFkZExheWVyKHNlbGYsIGZlYXRMYXllcik7XG59XG5cblxuLyoqXG4gKiBTaG91bGQgb25seSBiZSB1c2VkIGJ5IEJCb3hMYXllciBvYmplY3RzLlxuICogQ29uc2lkZXIgdGhpcyBhIHByaXZhdGUgbWV0aG9kLlxuICpcbiAqIEBwYXJhbSBzZWxmXG4gKiBAcGFyYW0gZmVhdExheWVyXG4gKi9cbmZ1bmN0aW9uIGFkZExheWVyKHNlbGYsIGZlYXRMYXllcikge1xuICBpZiAoc2VsZi5fZmVhdHVyZVNldCkge1xuICAgIHNlbGYuX2ZlYXR1cmVTZXQuYWRkRmVhdHVyZShmZWF0TGF5ZXIsIHNlbGYuX2dlb2pzb25MYXllcik7XG4gIH1cbiAgc2VsZi5fZ2VvanNvbkxheWVyLmFkZExheWVyKGZlYXRMYXllcik7XG5cbiAgdmFyIHByb3BzID0gZmVhdExheWVyLmZlYXR1cmUucHJvcGVydGllcztcbiAgdmFyIGxldmVsID0gcHJvcHMubGV2ZWw7XG4gIGlmICghc2VsZi5fZmVhdHVyZUxheWVyc0J5TGV2ZWxbbGV2ZWxdKSB7XG4gICAgc2VsZi5fZmVhdHVyZUxheWVyc0J5TGV2ZWxbbGV2ZWxdID0gW107XG4gIH1cbiAgc2VsZi5fZmVhdHVyZUxheWVyc0J5TGV2ZWxbbGV2ZWxdLnB1c2goZmVhdExheWVyKTtcbiAgc2VsZi5fYWxsRmVhdHVyZUxheWVyc1twcm9wcy5ndWlkXSA9IGZlYXRMYXllcjtcbn1cblxuXG5CQm94R2VvSlNPTi5wcm90b3R5cGUucHJvY2Vzc0ZlYXR1cmVJdGluZXJhcnkgPSBmdW5jdGlvbiAoZmVhdEl0aW5lcmFyeSkge1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIHZhciBhY3RpdmVMZXZlbHMgPSB7fTtcbiAgc2VsZi5fYWN0aXZlTGV2ZWxzID0gYWN0aXZlTGV2ZWxzO1xuICBzZWxmLl9mZWF0SXRpbmVyYXJ5SGFzaCA9IHt9O1xuICBmb3IgKHZhciBpPTAsIGxlbiA9IGZlYXRJdGluZXJhcnkubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgICB2YXIgbyA9IGZlYXRJdGluZXJhcnlbaV07XG4gICAgYWN0aXZlTGV2ZWxzW28ubGV2ZWxdID0gdHJ1ZTtcbiAgICBzZWxmLl9mZWF0SXRpbmVyYXJ5SGFzaFtvLmd1aWRdID0gbztcbiAgICB2YXIgZ3VpZCA9IG8uZ3VpZCB8fCBvLmlkO1xuICAgIGlmICghc2VsZi5fZmVhdHVyZXNbZ3VpZF0pIHtcbiAgICAgIC8vIGFkZGluZyBmZWF0dXJlIHRvIGZlYXR1cmVzIGhhc2ggKGFsbCBmZWF0dXJlcyBldmVyKVxuICAgICAgc2VsZi5fZmVhdHVyZXNbZ3VpZF0gPSBvO1xuICAgICAgLy8gZ2V0dGluZyB0aGUgZmVhdHVyZXMgKGluY2x1ZGluZyBiYXNpYywgc2ltcGxpZmllZCBnZW9tZXRyeSlcbiAgICAgIHNlbGYuX2dldEZlYXR1cmVzKG8pO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBpZiB3ZSBhbHJlYWR5IGhhdmUgYSBsYXllciBhbmQgaXQgaXMgbm90IG9uIHRoZSBtYXAgYnV0IHNob3VsZCBiZSB0aGVyZSwgYWRkIGl0IHRvIHRoZSBnZW9qc29uIGxheWVyXG4gICAgICB2YXIgbCA9IHNlbGYuX2FsbEZlYXR1cmVMYXllcnNbZ3VpZF07XG4gICAgICBpZiAobCkge1xuICAgICAgICBhZGRMYXllcihzZWxmLCBsKTtcbiAgICAgIH1cblxuICAgIH1cbiAgfVxuICBzZWxmLl9yZW1vdmVJbmFjdGl2ZUxheWVycyhzZWxmKTtcbiAgcmVtb3ZlSW5hY3RpdmVMYWJlbHMoc2VsZik7XG59O1xuXG5cbi8qKlxuICogVGhpcyBpcyBjYWxsZWQgYnkgdGhlIG9uU2VsZWN0IGV2ZW50IGZvciB0aGUgZmVhdHVyZWxhYmVscy5cbiAqIEBwYXJhbSBmZWF0dXJlTGF5ZXJcbiAqL1xuQkJveEdlb0pTT04ucHJvdG90eXBlLmZldGNoRmVhdHVyZURldGFpbHMgPSBmdW5jdGlvbihmZWF0dXJlTGF5ZXIpIHtcbiAgdmFyIHByb3BlcnRpZXMgPSBmZWF0dXJlTGF5ZXIuZmVhdHVyZS5wcm9wZXJ0aWVzO1xuICB2YXIgZGV0YWlsc1VybCA9IHByb3BlcnRpZXMuZGV0YWlsc1VybDtcbiAgaWYgKCFkZXRhaWxzVXJsKSB7XG4gICAgY29uc29sZS5lcnJvcignV2UgbmVlZCBhIGRldGFpbHNVcmwgdG8gZmV0Y2hGZWF0dXJlRGV0YWlscycpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciB0aGVtZSA9ICRyb290U2NvcGUuJHN0YXRlUGFyYW1zLnRoZW1lIHx8IHByb3BlcnRpZXMuZGVmYXVsdFRoZW1lIHx8ICdwcm9qZWN0JztcbiAgdmFyIHRoZW1lTmFtZSA9ICRyb290U2NvcGUudGhlbWVOYW1lSGFzaFt0aGVtZV07XG4gIGlmICh0eXBlb2YgcHJvcGVydGllcy5sZXZlbCA9PT0gJ3VuZGVmaW5lZCcgfHwgcHJvcGVydGllcy5sZXZlbCA9PT0gbnVsbCkge1xuICAgIGNvbnNvbGUuZXJyb3IoJ3dlIG5lZWQgYSBsZXZlbC4nKTtcbiAgfVxuXG4gIHZhciBmaWx0ZXJzID0gJ251bGwnO1xuICBpZiAoJHJvb3RTY29wZS4kc3RhdGVQYXJhbXMuZmlsdGVycykge1xuICAgIGZpbHRlcnMgPSAkcm9vdFNjb3BlLiRzdGF0ZVBhcmFtcy5maWx0ZXJzO1xuICB9XG5cbiAgZGV0YWlsc1VybCA9IGRldGFpbHNVcmwucmVwbGFjZSgnOnRoZW1lJywgdGhlbWUpXG4gICAgLnJlcGxhY2UoJzpndWlkcycsIHByb3BlcnRpZXMuZ3VpZClcbiAgICAucmVwbGFjZSgnOmxldmVsJywgcHJvcGVydGllcy5sZXZlbClcbiAgICAucmVwbGFjZSgnOmZpbHRlcnMnLCBmaWx0ZXJzKTtcblxuICAkaHR0cC5nZXQoZGV0YWlsc1VybCwge2NhY2hlOiB0cnVlfSkuc3VjY2VzcyhmdW5jdGlvbiAoZGV0YWlscykge1xuXG4gICAgZmVhdHVyZUxheWVyLmZlYXR1cmUucHJvcGVydGllcy5zYWxlc2ZvcmNlID0ge307XG4gICAgZmVhdHVyZUxheWVyLmZlYXR1cmUucHJvcGVydGllcy5zYWxlc2ZvcmNlW3RoZW1lTmFtZV0gPSBkZXRhaWxzO1xuICAgICRyb290U2NvcGUuJGJyb2FkY2FzdCgnZGV0YWlscycsIGZlYXR1cmVMYXllcik7XG5cbiAgfSkuZXJyb3IoZnVuY3Rpb24oZXJyKXtcbiAgICBjb25zb2xlLmVycm9yKEpTT04uc3RyaW5naWZ5KGVycikpO1xuICB9KTtcblxufTtcblxuXG5CQm94R2VvSlNPTi5wcm90b3R5cGUuc2hvd0ZlYXR1cmVQcm9wZXJ0aWVzID0gZnVuY3Rpb24oZmVhdHVyZUxheWVyKSB7XG4gICRyb290U2NvcGUuJGJyb2FkY2FzdCgnZGV0YWlscycsIGZlYXR1cmVMYXllcik7XG59O1xuXG5cbkJCb3hHZW9KU09OLnByb3RvdHlwZS5jbG9zZURldGFpbHMgPSBmdW5jdGlvbiAoKSB7XG4gICRyb290U2NvcGUuY2xvc2VQYXJhbSgnZGV0YWlscy1wYW5lbCcpO1xufTtcblxuXG5mdW5jdGlvbiByZW1vdmVJbmFjdGl2ZUxhYmVscyhzZWxmKSB7XG4gIHZhciBhbGxGZWF0dXJlTGF5ZXJzID0gc2VsZi5fYWxsRmVhdHVyZUxheWVycztcbiAgdmFyIGZlYXR1cmVJdGluZXJhcnkgPSBzZWxmLl9mZWF0SXRpbmVyYXJ5SGFzaDtcbiAgZm9yICh2YXIga2V5IGluIGFsbEZlYXR1cmVMYXllcnMpIHtcbiAgICBpZiAoIWZlYXR1cmVJdGluZXJhcnlba2V5XSkge1xuICAgICAgdmFyIGZlYXR1cmVMYXllciA9IGFsbEZlYXR1cmVMYXllcnNba2V5XTtcbiAgICAgIGlmICggZmVhdHVyZUxheWVyLmdlb2pzb25MYXllciAmJiBmZWF0dXJlTGF5ZXIubGFiZWwpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJSRU1PVklORzogXCIgKyBmZWF0dXJlTGF5ZXIuZmVhdHVyZS5wcm9wZXJ0aWVzLm5hbWUpO1xuICAgICAgICB3aW5kb3cubWFwLnJlbW92ZUxheWVyKGZlYXR1cmVMYXllci5sYWJlbCk7IC8vIE5IIEZJWE1FXG4gICAgICAgIGZlYXR1cmVMYXllci5sYWJlbCA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIGlmICggZmVhdHVyZUxheWVyLmdlb2pzb25MYXllciAmJiBmZWF0dXJlTGF5ZXIuZ2VvanNvbkxheWVyLmxhYmVsKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiUkVNT1ZJTkc6IFwiICsgZmVhdHVyZUxheWVyLmZlYXR1cmUucHJvcGVydGllcy5uYW1lKTtcbiAgICAgICAgd2luZG93Lm1hcC5yZW1vdmVMYXllcihmZWF0dXJlTGF5ZXIuZ2VvanNvbkxheWVyLmxhYmVsKTsgLy8gTkggRklYTUVcbiAgICAgICAgZmVhdHVyZUxheWVyLmdlb2pzb25MYXllci5sYWJlbCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogRm9yIGFsbCBvZiB0aGUgYWN0aXZlIGxheWVycyB0aGF0IHdlIGhhdmUsIHJlbW92ZSBsYXllcnMgdGhhdCBhcmVcbiAqIG5vdCBwYXJ0IG9mIHRoZSBjdXJyZW50IHNldCBvZiBhY3RpdmUgbGV2ZWxzLlxuICpcbiAqIEBwcml2YXRlXG4gKi9cbkJCb3hHZW9KU09OLnByb3RvdHlwZS5fcmVtb3ZlSW5hY3RpdmVMYXllcnMgPSBmdW5jdGlvbihzZWxmKSB7XG4gIHZhciBhY3RpdmVMZXZlbHMgPSB0aGlzLl9hY3RpdmVMZXZlbHM7XG4gIHZhciBmZWF0dXJlTGF5ZXJzQnlMZXZlbCA9IHRoaXMuX2ZlYXR1cmVMYXllcnNCeUxldmVsO1xuICBmb3IgKHZhciBsZXZlbCBpbiBmZWF0dXJlTGF5ZXJzQnlMZXZlbCkge1xuICAgIC8vIGlmIHRoZSBsZXZlbCBpcyBub3QgYW4gYWN0aXZlIGxldmVsLCByZW1vdmUgZnJvbSBtYXBcbiAgICBpZiAoIWFjdGl2ZUxldmVsc1tsZXZlbF0pIHtcbiAgICAgIHZhciBsYXllcnMgPSBmZWF0dXJlTGF5ZXJzQnlMZXZlbFtsZXZlbF07XG4gICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gbGF5ZXJzLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICAgIHZhciBsYXllciA9IGxheWVyc1tpXTtcbiAgICAgICAgc2VsZi5fZ2VvanNvbkxheWVyLnJlbW92ZUxheWVyKGxheWVyKTtcblxuICAgICAgICBjb25zb2xlLmxvZygnUmVtb3ZlZCBMYXllcjogJyArIGxheWVyLmZlYXR1cmUucHJvcGVydGllcy5uYW1lKTtcbiAgICAgIH1cbiAgICAgIGRlbGV0ZSBmZWF0dXJlTGF5ZXJzQnlMZXZlbFtsZXZlbF07XG4gICAgfVxuICB9XG59O1xuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IE5pY2hvbGFzIEhhbGxhaGFuIDxuaGFsbGFoYW5Ac3BhdGlhbGRldi5jb20+XG4gKiAgICAgICBvbiA2LzMvMTQuXG4gKi9cblxudmFyIFJlc291cmNlID0gcmVxdWlyZSgnLi9yZXNvdXJjZScpO1xudmFyICRyb290U2NvcGUgPSByZXF1aXJlKCcuL3ZlY3RvcicpLiRyb290U2NvcGU7XG5cbm1vZHVsZS5leHBvcnRzID0gR2VvSlNPTjtcblxuLyoqXG4gKiBUaGlzIGlzIGEgYmFzaWMgR2VvSlNPTiBWZWN0b3JQcm92aWRlci5cbiAqIEBwYXJhbSBjb25maWdcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBHZW9KU09OKGNvbmZpZykge1xuICBSZXNvdXJjZS5jYWxsKHRoaXMsIGNvbmZpZyk7XG4gIHRoaXMuX2dlb2pzb24gPSBudWxsO1xufVxuXG5HZW9KU09OLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoUmVzb3VyY2UucHJvdG90eXBlKTtcbkdlb0pTT04ucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gR2VvSlNPTjtcblxuR2VvSlNPTi5wcm90b3R5cGUuZmV0Y2ggPSBmdW5jdGlvbiAoY2IpIHtcbiAgaWYgKHRoaXMuX2dlb2pzb24gJiYgdHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKSB7XG4gICAgY2IodGhpcy5fZ2VvanNvbik7XG4gICAgcmV0dXJuO1xuICB9XG4gIHZhciBzZWxmID0gdGhpcztcbiAgUmVzb3VyY2UucHJvdG90eXBlLmZldGNoLmNhbGwodGhpcywgZnVuY3Rpb24oZGF0YSkge1xuICAgIHNlbGYuX2dlb2pzb24gPSBkYXRhO1xuICAgIGlmICh0eXBlb2Ygc2VsZi5fY29uZmlnLnByb3BlcnRpZXMgPT09ICdvYmplY3QnKSB7XG4gICAgICBpZiAoIGRhdGEudHlwZSA9PT0gJ0ZlYXR1cmVDb2xsZWN0aW9uJykge1xuICAgICAgICB2YXIgZmVhdHMgPSBkYXRhLmZlYXR1cmVzO1xuICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gZmVhdHMubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgICAgICAgICB2YXIgZmVhdCA9IGZlYXRzW2ldO1xuICAgICAgICAgIGlmICghZmVhdC5wcm9wZXJ0aWVzKSBmZWF0LnByb3BlcnRpZXMgPSB7fTtcbiAgICAgICAgICBhbmd1bGFyLmV4dGVuZChmZWF0LnByb3BlcnRpZXMsIHNlbGYuX2NvbmZpZy5wcm9wZXJ0aWVzKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHsgLy8gYSBmZWF0dXJlIG9yIGEgZ2VvbWV0cnkgdHlwZVxuICAgICAgICBpZiAoIWRhdGEucHJvcGVydGllcykgZGF0YS5wcm9wZXJ0aWVzID0ge307XG4gICAgICAgIGFuZ3VsYXIuZXh0ZW5kKGRhdGEucHJvcGVydGllcywgc2VsZi5fY29uZmlnLnByb3BlcnRpZXMpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicpIGNiKHNlbGYuX2dlb2pzb24pO1xuICB9KTtcbn07XG5cbkdlb0pTT04ucHJvdG90eXBlLmdldExheWVyID0gZnVuY3Rpb24oKSB7XG4gIGlmICh0aGlzLl9nZW9qc29uTGF5ZXIpIHJldHVybiB0aGlzLl9nZW9qc29uTGF5ZXI7XG4gIHZhciBsYXllciA9ICBSZXNvdXJjZS5wcm90b3R5cGUuZ2V0TGF5ZXIuY2FsbCh0aGlzKTtcbiAgdGhpcy5mZXRjaChmdW5jdGlvbihnZW9qc29uKXtcbiAgICBsYXllci5hZGREYXRhKGdlb2pzb24pO1xuICAgIGxheWVyLmVhY2hMYXllcihmdW5jdGlvbiAobCkge1xuICAgICAgbC5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICRyb290U2NvcGUuJGJyb2FkY2FzdCgnZGV0YWlscycsIGwpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xuICByZXR1cm4gbGF5ZXI7XG59O1xuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IE5pY2hvbGFzIEhhbGxhaGFuIDxuaGFsbGFoYW5Ac3BhdGlhbGRldi5jb20+XG4gKiAgICAgICBvbiA2LzMvMTQuXG4gKi9cblxudmFyIFJlc291cmNlID0gcmVxdWlyZSgnLi9yZXNvdXJjZScpO1xudmFyICRyb290U2NvcGUgPSByZXF1aXJlKCcuL3ZlY3RvcicpLiRyb290U2NvcGU7XG52YXIgdG9HZW9KU09OID0gcmVxdWlyZSgnLi92ZWN0b3InKS50b0dlb0pTT047XG52YXIgJCA9IHJlcXVpcmUoJy4vdmVjdG9yJykuJDtcblxubW9kdWxlLmV4cG9ydHMgPSBLTUw7XG5cbi8qKlxuICogQSBLTUwgUmVzb3VyY2UgZmV0Y2hlcyBLTUwgYW5kIHBhcnNlcyBpdCB3aXRoIHRvZ2VvanNvbi5qc1xuICogTm90ZSB0aGF0IHRvZ2VvanNvbi5qcyBoYXMgYnVncyBhbmQgZG9lcyBub3QgYWNjdXJhdGVseSBwYXJzZVxuICogc29tZSBvZiB0aGUgS01MIHNvdXJjZXMgd2UgaGF2ZSB0ZXN0ZWQgd2l0aC4gVGhpcyBsaWJyYXJ5IGhhc1xuICogYmVlbiBtb2RpZmllZCB3aXRoIG15IGhvdGZpeGVzLlxuICpcbiAqIEBwYXJhbSBjb25maWdcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBLTUwoY29uZmlnKSB7XG4gIFJlc291cmNlLmNhbGwodGhpcywgY29uZmlnKTtcbiAgdGhpcy5fZ2VvanNvbiA9IG51bGw7XG59XG5cbktNTC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFJlc291cmNlLnByb3RvdHlwZSk7XG5LTUwucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gS01MO1xuXG5LTUwucHJvdG90eXBlLmZldGNoID0gZnVuY3Rpb24gKGNiKSB7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgUmVzb3VyY2UucHJvdG90eXBlLmZldGNoLmNhbGwodGhpcywgZnVuY3Rpb24oZGF0YSkge1xuICAgIHZhciB4bWwgPSAkLnBhcnNlWE1MKGRhdGEpO1xuICAgIHNlbGYuX2dlb2pzb24gPSB0b0dlb0pTT04ua21sKHhtbCk7XG4gICAgaWYgKHR5cGVvZiBzZWxmLl9jb25maWcucHJvcGVydGllcyA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGlmICh0eXBlb2Ygc2VsZi5fZ2VvanNvbi5wcm9wZXJ0aWVzID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBzZWxmLl9nZW9qc29uLnByb3BlcnRpZXMgPSB7fTtcbiAgICAgIH1cbiAgICAgIGFuZ3VsYXIuZXh0ZW5kKHNlbGYuX2dlb2pzb24ucHJvcGVydGllcywgc2VsZi5fY29uZmlnLnByb3BlcnRpZXMpO1xuICAgICAgc2VsZi5fZ2VvanNvbi5wcm9wZXJ0aWVzLnNyY1R5cGUgPSAna21sJztcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJykgY2Ioc2VsZi5fZ2VvanNvbiwgc2VsZik7XG4gIH0pO1xufTtcblxuS01MLnByb3RvdHlwZS5nZXRMYXllciA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMuX2dlb2pzb25MYXllcikgcmV0dXJuIHRoaXMuX2dlb2pzb25MYXllcjtcbiAgdmFyIGxheWVyID0gIFJlc291cmNlLnByb3RvdHlwZS5nZXRMYXllci5jYWxsKHRoaXMpO1xuICB0aGlzLmZldGNoKGZ1bmN0aW9uKGdlb2pzb24pe1xuICAgIGxheWVyLmFkZERhdGEoZ2VvanNvbik7XG4gICAgbGF5ZXIuZWFjaExheWVyKGZ1bmN0aW9uIChsKSB7XG4gICAgICBsLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJHJvb3RTY29wZS4kYnJvYWRjYXN0KCdkZXRhaWxzJywgbCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG4gIHJldHVybiBsYXllcjtcbn07XG5cbktNTC5wcm90b3R5cGUuZWFjaExheWVyID0gZnVuY3Rpb24gKGNiKSB7XG4gIHRoaXMuX2VhY2hMYXllckNhbGxiYWNrID0gY2I7XG4gIHRoaXMuZmV0Y2goZnVuY3Rpb24oZ2VvanNvbiwgc2VsZil7XG4gICAgdmFyIGxheWVycyA9IHNlbGYuX2dlb2pzb25MYXllci5fbGF5ZXJzO1xuICAgIGZvciAodmFyIGtleSBpbiBsYXllcnMpIHtcbiAgICAgIHZhciBsYXllciA9IGxheWVyc1trZXldO1xuICAgICAgY2IobGF5ZXIpO1xuICAgIH1cbiAgfSk7XG59O1xuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IE5pY2hvbGFzIEhhbGxhaGFuIDxuaGFsbGFoYW5Ac3BhdGlhbGRldi5jb20+XG4gKiAgICAgICBvbiA2LzMvMTQuXG4gKi9cblxudmFyIHJlc291cmNlcyA9IHJlcXVpcmUoJy4vdmVjdG9yJykucmVzb3VyY2VzO1xudmFyICRodHRwID0gcmVxdWlyZSgnLi92ZWN0b3InKS4kaHR0cDtcblxubW9kdWxlLmV4cG9ydHMgPSBSZXNvdXJjZTtcblxuLyoqXG4gKiBBbGwgVmVjdG9yUHJvdmlkZXIgcmVzb3VyY2VzIGFyZSBjaGlsZHJlbiBvZiB0aGlzIGNsYXNzLlxuICogQHBhcmFtIGNvbmZpZ1xuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIFJlc291cmNlKGNvbmZpZykge1xuICByZXNvdXJjZXMucHVzaCh0aGlzKTtcbiAgdGhpcy5fY29uZmlnID0gY29uZmlnO1xuICB0aGlzLl91cmwgPSBudWxsO1xuICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcpIHtcbiAgICB0aGlzLl91cmwgPSBjb25maWcudXJsO1xuICB9IGVsc2Uge1xuICAgIHRoaXMuX3VybCA9IGNvbmZpZztcbiAgfVxuXG4gIHRoaXMuX2VhY2hMYXllckNhbGxiYWNrID0gbnVsbDtcbiAgdGhpcy5fZ2VvanNvbkxheWVyID0gbnVsbDtcbn1cblxuXG4vKipcbiAqIEZldGNoZXMgZGF0YSBmcm9tIHRoZSBnaXZlbiB1cmwgb2YgYSByZXNvdXJjZS5cbiAqIFN1YmNsYXNzZXMgdGhlbiBoYW5kbGUgdGhlIGNhbGxiYWNrIGFjY29yZGluZ2x5LlxuICpcbiAqIE5lZWRzIHRvIGFsc28gdHJ5IHRvIGdldCBhIHJlc291cmNlIHZpYSB0aGUgQ2h1YmJzXG4gKiBwcm94eS5cbiAqXG4gKiBAcGFyYW0gY2JcbiAqL1xuUmVzb3VyY2UucHJvdG90eXBlLmZldGNoID0gZnVuY3Rpb24oY2IpIHtcbiAgdmFyIHByb3h5UGF0aCA9IGNvbmZpZy5wcm94eVBhdGgodGhpcy5fdXJsKTtcbiAgJGh0dHAuZ2V0KHRoaXMuX3VybCwge2NhY2hlOiB0cnVlfSkuc3VjY2VzcyhmdW5jdGlvbiAoZGF0YSwgc3RhdHVzKSB7XG4gICAgY2IoZGF0YSk7XG4gIH0pLmVycm9yKGZ1bmN0aW9uKCkge1xuICAgIC8vIHRyeWluZyBwcm94eVxuICAgICRodHRwLmdldChwcm94eVBhdGgsIHtjYWNoZTogdHJ1ZX0pLnN1Y2Nlc3MoZnVuY3Rpb24gKGRhdGEsIHN0YXR1cykge1xuICAgICAgY2IoZGF0YSk7XG4gICAgfSkuZXJyb3IoZnVuY3Rpb24oKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiVW5hYmxlIHRvIGZldGNoIGZyb206IFwiICsgcHJveHlQYXRoKTtcbiAgICB9KTtcbiAgfSk7XG5cbn07XG5cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBMZWFmbGV0IEdlb0pTT04gTGF5ZXIgYXNzb2NpYXRlZCB3aXRoIHRoZVxuICogUmVzb3VyY2Ugb3IgY3JlYXRlcyBhIG5ldyBvbmUuXG4gKlxuICogQHJldHVybnMge251bGx8Kn1cbiAqL1xuUmVzb3VyY2UucHJvdG90eXBlLmdldExheWVyID0gZnVuY3Rpb24gKCkge1xuICBpZiAodHlwZW9mIHRoaXMuX2dlb2pzb25MYXllciAhPT0gJ3VuZGVmaW5lZCcgJiYgdGhpcy5fZ2VvanNvbkxheWVyICE9PSBudWxsKSB7XG4gICAgcmV0dXJuIHRoaXMuX2dlb2pzb25MYXllcjtcbiAgfVxuXG4gIHRoaXMuX2dlb2pzb25MYXllciA9IEwuZ2VvSnNvbih0aGlzLl9nZW9qc29uIHx8IG51bGwsIHtcbiAgICBzdHlsZTogZnVuY3Rpb24oZmVhdHVyZSkge1xuICAgICAgaWYgKHR5cGVvZiBmZWF0dXJlLnByb3BlcnRpZXMuc3R5bGVGbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gZmVhdHVyZS5wcm9wZXJ0aWVzLnN0eWxlRm4oZmVhdHVyZS5wcm9wZXJ0aWVzKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBMLm1hcGJveC5zaW1wbGVzdHlsZS5zdHlsZShmZWF0dXJlKTtcbiAgICB9LFxuICAgIHBvaW50VG9MYXllcjogZnVuY3Rpb24oZmVhdHVyZSwgbGF0bG9uKSB7XG4gICAgICBpZiAoIWZlYXR1cmUucHJvcGVydGllcykgZmVhdHVyZS5wcm9wZXJ0aWVzID0ge307XG4gICAgICBpZiAoZmVhdHVyZS5wcm9wZXJ0aWVzLnNjYWxlKSB7XG4gICAgICAgIHJldHVybiBMLmNpcmNsZU1hcmtlcihsYXRsb24sIHtcbiAgICAgICAgICBmaWxsQ29sb3I6IGZlYXR1cmUucHJvcGVydGllcy5jb2xvciB8fCAnI0ZGMDAwMCcsXG4gICAgICAgICAgcmFkaXVzOiAyMCAqIGZlYXR1cmUucHJvcGVydGllcy5zY2FsZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBMLm1hcGJveC5tYXJrZXIuc3R5bGUoZmVhdHVyZSwgbGF0bG9uKTtcbiAgICB9XG4gIH0pLmVhY2hMYXllcih0aGlzLl9lYWNoTGF5ZXJDYWxsYmFjayk7XG5cblxuICByZXR1cm4gdGhpcy5fZ2VvanNvbkxheWVyO1xufTtcblxuUmVzb3VyY2UucHJvdG90eXBlLmVhY2hMYXllciA9IGZ1bmN0aW9uIChjYikge1xuICB0aGlzLl9lYWNoTGF5ZXJDYWxsYmFjayA9IGNiO1xuICB0aGlzLl9nZW9qc29uTGF5ZXIuZWFjaExheWVyKGNiKTtcbn07XG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgTmljaG9sYXMgSGFsbGFoYW4gPG5oYWxsYWhhbkBzcGF0aWFsZGV2LmNvbT5cbiAqICAgICAgIG9uIDMvMTkvMTQuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnR2VvQW5ndWxhcicpLmZhY3RvcnkoJ1ZlY3RvclByb3ZpZGVyJywgZnVuY3Rpb24gKCRyb290U2NvcGUsICRsb2NhdGlvbiwgJGh0dHAsIExheWVyQ29uZmlnKSB7XG5cbiAgdmFyIHZlY3RvciA9IHJlcXVpcmUoJy4vdmVjdG9yJyk7XG4gIHZlY3Rvci5zZXRJbmplY3RvcnMoJHJvb3RTY29wZSwgJGxvY2F0aW9uLCAkaHR0cCwgTGF5ZXJDb25maWcpO1xuXG5cbiAgLyoqXG4gICAqIG1ha2UgdGhlIGRlZmF1bHQgQkJveFVSTCBhYmxlIHRvIGJlIG92ZXJyaWRkZW4gaWYgc3BlY2lmaWVkIGJ5IHRoZSBMYXllckNvbmZpZyBPYmplY3QuXG4gICAqIEBwYXJhbSBjb25maWdcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqL1xuICB2ZWN0b3IuYmJveFVybCA9IExheWVyQ29uZmlnLmJib3guYmJveHVybDtcblxuICB2YXIgUmVzb3VyY2UgPSByZXF1aXJlKCcuL1Jlc291cmNlJyk7XG4gIHZhciBHZW9KU09OID0gcmVxdWlyZSgnLi9HZW9KU09OJyk7XG4gIHZhciBCQm94R2VvSlNPTiA9IHJlcXVpcmUoJy4vQkJveEdlb0pTT04nKTtcbiAgdmFyIEtNTCA9IHJlcXVpcmUoJy4vS01MJyk7XG4gIHZhciBDU1YgPSByZXF1aXJlKCcuL2NzdicpO1xuICB2YXIgUEJGID0gcmVxdWlyZSgnLi9wYmYnKTtcblxuXG4gIC8qKlxuICAgKiBUaGlzIGlzIHVzZWQgYnkgdGhlIGZhY3RvcnkgdG8gZHluYW1pY2FsbHkgc3RhdGUgdGhlIHR5cGUgKGNsYXNzKVxuICAgKiB0aGF0IGl0IHdhbnRzIHRvIGluc3RhbnRpYXRlLlxuICAgKlxuICAgKiBAdHlwZSB7e2dlb2pzb246IEdlb0pTT04sIGJib3hnZW9qc29uOiBCQm94R2VvSlNPTiwga21sOiBLTUx9fVxuICAgKi9cbiAgdmFyIHR5cGVzID0ge1xuICAgIGdlb2pzb246IEdlb0pTT04sXG4gICAgYmJveGdlb2pzb246IEJCb3hHZW9KU09OLFxuICAgIGttbDogS01MLFxuICAgIGNzdjogQ1NWLFxuICAgIHBiZjogUEJGXG4gIH07XG5cblxuXG4gIC8qKlxuICAgKiBGZXRjaGVzIHRoZSBmZWF0dXJlIGl0aW5lcmFyeSBiYXNlZCBvbiB0aGUgY3VycmVudCBiYm94LlxuICAgKlxuICAgKiBUaGUgZmVhdHVyZSBpdGluZXJhcnkgaXMgYSBzZXQgb2YgZmVhdHVyZXMgd2l0aCBzb21lIHByb3BlcnRpZXNcbiAgICogc3VjaCBhcyBndWlkIGFuZCBuYW1lLiBUaGUgZ2VvbWV0cnkgZm9yIGVhY2ggb2YgdGhlc2UgZmVhdHVyZXNcbiAgICogaGFzIG5vdCB5ZXQgYmVlbiByZXF1ZXN0ZWQuIFRoaXMgaXMgZG9uZSBieSBfZ2V0RmVhdHVyZXMuXG4gICAqL1xuICBmdW5jdGlvbiBmZXRjaEZlYXR1cmVJdGluZXJhcnkoKSB7XG4gICAgdmFyIHRoaXNVcmwgPSB2ZWN0b3IuYmJveFVybC5yZXBsYWNlKCc6YmJveCcsIHZlY3Rvci5iYm94KTtcbiAgICB2YXIgcHJveHlQYXRoID0gY29uZmlnLnByb3h5UGF0aCh0aGlzVXJsKTtcbiAgICAkaHR0cC5nZXQodGhpc1VybCwge2NhY2hlOiB0cnVlfSkuc3VjY2VzcyhmdW5jdGlvbiAoZmVhdEl0aW5lcmFyeSwgc3RhdHVzKSB7XG4gICAgICBwcm9jZXNzRmVhdHVyZUl0aW5lcmFyeShmZWF0SXRpbmVyYXJ5KTtcbiAgICB9KS5lcnJvcihmdW5jdGlvbigpIHtcbiAgICAgICRodHRwLmdldChwcm94eVBhdGgsIHtjYWNoZTogdHJ1ZX0pLnN1Y2Nlc3MoZnVuY3Rpb24gKGZlYXRJdGluZXJhcnksIHN0YXR1cykge1xuICAgICAgICBwcm9jZXNzRmVhdHVyZUl0aW5lcmFyeShmZWF0SXRpbmVyYXJ5KTtcbiAgICAgIH0pLmVycm9yKGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiVW5hYmxlIHRvIGZldGNoRmVhdHVyZUl0aW5lcmFyeTogXCIgKyB0aGlzVXJsKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc0ZlYXR1cmVJdGluZXJhcnkoZmVhdEl0aW5lcmFyeSkge1xuXG4gICAgZm9yICh2YXIgaiA9IDAsIGxlbiA9IGZlYXRJdGluZXJhcnkubGVuZ3RoOyBqIDwgbGVuOyBqKyspIHtcbiAgICAgIHZhciBmZWF0ID0gZmVhdEl0aW5lcmFyeVtqXTtcbiAgICAgIGlmICggZmVhdC5pc2NlbnRlciApIHtcbiAgICAgICAgdmVjdG9yLmNlbnRlckxldmVsID0gZmVhdC5sZXZlbCB8fCAwO1xuICAgICAgICAkcm9vdFNjb3BlLiRicm9hZGNhc3QoJ2NlbnRlci1mZWF0dXJlJywgZmVhdCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gaWYgdGhlcmUgYXJlIG5vIGZlYXR1cmVzIGZvciB0aGUgY3VycmVudCBib3VuZGluZyBib3hcbiAgICAvL2lmICghZmVhdEl0aW5lcmFyeSB8fCBmZWF0SXRpbmVyYXJ5Lmxlbmd0aCA9PT0gMCkge1xuICAgIC8vICByZXR1cm47XG4gICAgLy99XG5cbiAgICAvKipcbiAgICAgKiBDZW50ZXIgZmVhdHVyZSBsb2dpYyBmb3IgYnJlYWRjcnVtYnMuXG4gICAgICovXG4gICAgLy9mb3IgKHZhciBpPTAsIGxlbj1mZWF0SXRpbmVyYXJ5Lmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gICAgLy8gIHZhciBmID0gZmVhdEl0aW5lcmFyeVtpXTtcbiAgICAvLyAgaWYgKGYuaXNjZW50ZXIgPT0gdHJ1ZSkge1xuICAgIC8vICAgICRyb290U2NvcGUuJGJyb2FkY2FzdCgnY2VudGVyLWZlYXR1cmUnLCBmKTtcbiAgICAvLyAgfVxuICAgIC8vfVxuXG4gICAgLyoqXG4gICAgICogQkJveEdlb0pTT04gbG9naWNcbiAgICAgKi9cbiAgICAvL2Zvcih2YXIgciA9IDAsIGxlbiA9IHZlY3Rvci5iYm94UmVzb3VyY2VzLmxlbmd0aDsgciA8IGxlbjsgKytyKSB7XG4gICAgLy8gIHZlY3Rvci5iYm94UmVzb3VyY2VzW3JdLnByb2Nlc3NGZWF0dXJlSXRpbmVyYXJ5KGZlYXRJdGluZXJhcnkpO1xuICAgIC8vfVxuXG4gIH1cblxuXG4gIHJldHVybiB7XG4gICAgLyoqXG4gICAgICogWW91IGNhbiBleHBsaWNpdGx5IG5hbWUgdGhlIHR5cGUgb2YgcmVzb3VyY2UuIElmIG5vdCxcbiAgICAgKiB3ZSB3aWxsIGZpZ3VyZSBpdCBvdXQgZm9yIHlvdS4uLlxuICAgICAqXG4gICAgICogQHBhcmFtIHJlc291cmNlTmFtZVxuICAgICAqIEBwYXJhbSB0eXBlXG4gICAgICovXG4gICAgY3JlYXRlUmVzb3VyY2U6IGZ1bmN0aW9uIChyZXNvdXJjZU5hbWUsIHR5cGUpIHtcbiAgICAgIHZhciBjb25maWcgPSBMYXllckNvbmZpZy5maW5kKHJlc291cmNlTmFtZSk7XG4gICAgICBpZiAoY29uZmlnID09PSBudWxsKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1ZlY3RvclByb3ZpZGVyOiBJbnZhbGlkIFJlc291cmNlIENvbmZpZ3VyYXRpb24gTmFtZS4gQ2hlY2sgTGF5ZXJDb25maWcgRmlsZS4uLicpO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlIHx8IGNvbmZpZy50eXBlKSB7XG4gICAgICAgIC8vIGlmIHRoZSByZXNvdXJjZSBpcyBqdXN0IGEgc3RyaW5nLCB0aGVuIGl0IHNob3VsZCBiZSBhIHVybFxuICAgICAgICByZXR1cm4gbmV3IHR5cGVzWyh0eXBlIHx8IGNvbmZpZy50eXBlKS50b0xvd2VyQ2FzZSgpXShjb25maWcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGNvbmZpZy5zbGljZShjb25maWcubGVuZ3RoIC0gMykudG9Mb3dlckNhc2UoKSA9PT0gJ3BiZicpIHtcbiAgICAgICAgICByZXR1cm4gbmV3IFBCRihjb25maWcpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNvbmZpZy5zbGljZShjb25maWcubGVuZ3RoIC0gMykudG9Mb3dlckNhc2UoKSA9PT0gJ2ttbCcpIHtcbiAgICAgICAgICByZXR1cm4gbmV3IEtNTChjb25maWcpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNvbmZpZy5zbGljZShjb25maWcubGVuZ3RoIC0gMykudG9Mb3dlckNhc2UoKSA9PT0gJ2NzdicpIHtcbiAgICAgICAgICByZXR1cm4gbmV3IENTVihjb25maWcpO1xuICAgICAgICB9XG4gICAgICAgIC8vIE5IIFRPRE8gQ2hlY2sgYSBiaXQgbW9yZSBpbnRvIGlmIHRoaXMgcmVzb3VyY2UgaXMgdmFsaWQgR2VvSlNPTlxuICAgICAgICByZXR1cm4gbmV3IEdlb0pTT04oY29uZmlnKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogV2hlbiB0aGUgYm91bmRpbmcgYm94IG9mIHRoZSBtYXAgY2hhbmdlcywgVmVjdG9yUHJvdmlkZXIgbmVlZHNcbiAgICAgKiB0byBiZSBub3RpZmllZCBvZiB0aGUgY3VycmVudCBib3VuZGluZyBib3ggc28gaXQgY2FuIGZldGNoIHRoZVxuICAgICAqIGxhdGVzdCB2ZWN0b3IgZGF0YSBmb3IgdGhlIGJib3ggb2YgdGhlIG1hcCB2aWV3cG9ydC5cbiAgICAgKlxuICAgICAqIFRoZSBiYm94IG11c3QgYmUgV0dTODQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gYmJveFN0ciBcInNvdXRoLHdlc3Qsbm9ydGgsZWFzdFwiID09PSBcIm1pblgsbWluWSxtYXhYLG1heFlcIlxuICAgICAqL1xuICAgIHVwZGF0ZUJCb3g6IGZ1bmN0aW9uKGJib3hTdHIpIHtcbiAgICAgIHZlY3Rvci5iYm94ID0gYmJveFN0cjtcblxuICAgICAgZmV0Y2hGZWF0dXJlSXRpbmVyYXJ5KCk7XG4gICAgfSxcblxuXG4gICAgLyoqXG4gICAgICogUHJvdmlkZXMgdGhlIGFiaWxpdHkgdG8gb3ZlcnJpZGUgdGhlIGdhZG0gbGV2ZWwgYmVpbmcgc2hvd24gYnkgQkJveEdlb0pTT05cbiAgICAgKiBmZWF0dXJlcyBvbiB0aGUgbWFwLiBZb3UgbWF5IHNwZWNpZnkgLTEgdG8gNS4gTm8gYXJncyBvciBhbnl0aGluZyBlbHNlXG4gICAgICogc3dpdGNoZXMgYmFjayBvbiBzbWFydCBnYWRtIChhdXRvbWF0aWNhbGx5IGNob29zaW5nIHRoZSBsZXZlbCBiYXNlZCBvbiBiYm94KS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBsZXZlbFxuICAgICAqL1xuICAgIHNldEdhZG1MZXZlbDogZnVuY3Rpb24obGV2ZWxTdHIpIHtcbiAgICAgIHZhciBsZXZlbCA9IHBhcnNlSW50KGxldmVsU3RyKTtcbiAgICAgIHZlY3Rvci5iYm94VXJsID0gdmVjdG9yLmJib3hVcmwucmVwbGFjZSgvJmdhZG1fbGV2ZWw9LT9cXGQvLCcnKTtcbiAgICAgIGlmIChsZXZlbCA+PSAtMSAmJiBsZXZlbCA8PSA1KSB7XG4gICAgICAgIHZlY3Rvci5iYm94VXJsICs9ICcmZ2FkbV9sZXZlbD0nICsgbGV2ZWw7XG4gICAgICB9XG4gICAgICBjb25zb2xlLmxvZygnYmJveFVybDogJyArIHZlY3Rvci5iYm94VXJsKTtcbiAgICAgIC8vZmV0Y2hGZWF0dXJlSXRpbmVyYXJ5KCk7XG4gICAgfSxcblxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIGZlYXR1cmUgYmFzZWQgb24gZ3VpZCBhbmQgbGV2ZWwuIFlvdSBtYXkgbWVyZ2UgaW4gYSBzZXQgb2YgcHJvcGVydGllcyBpbnRvIHRoZVxuICAgICAqIGNhbGxlZCBiYWNrIG9iamVjdCBpZiBkZXNpcmVkIChvcHRpb25hbCkuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZ3VpZFxuICAgICAqL1xuICAgIGZldGNoRmVhdHVyZTogZnVuY3Rpb24oZ3VpZCwgbGV2ZWwsIHByb3BzVG9NZXJnZSwgY2IpIHtcbiAgICAgIHZhciB1cmwgPSBMYXllckNvbmZpZy5iYm94LmZlYXR1cmwucmVwbGFjZSgnOmxldmVsJywgbGV2ZWwpLnJlcGxhY2UoJzppZHMnLCBndWlkKTtcbiAgICAgIHZhciBwcm94eVBhdGggPSBjb25maWcucHJveHlQYXRoKHVybCk7XG5cbiAgICAgICRodHRwLmdldCh1cmwsIHtjYWNoZTogdHJ1ZX0pLnN1Y2Nlc3MoZnVuY3Rpb24gKGdlb2pzb24sIHN0YXR1cykge1xuICAgICAgICBtZXJnZShnZW9qc29uKTtcbiAgICAgIH0pLmVycm9yKGZ1bmN0aW9uKGVycikge1xuICAgICAgICAkaHR0cC5nZXQocHJveHlQYXRoKS5zdWNjZXNzKGZ1bmN0aW9uIChnZW9qc29uLCBzdGF0dXMpIHtcbiAgICAgICAgICBtZXJnZShnZW9qc29uKTtcbiAgICAgICAgfSkuZXJyb3IoZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1VuYWJsZSB0byBmZXRjaEZlYXR1cmU6ICcgKyBndWlkKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcblxuICAgICAgZnVuY3Rpb24gbWVyZ2UoZ2VvanNvbikge1xuICAgICAgICAvKipcbiAgICAgICAgICogRGVhbCB3aXRoIGJhZCBzdHVmZi5cbiAgICAgICAgICovXG4gICAgICAgIGlmIChnZW9qc29uLmVycm9yKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignVW5hYmxlIHRvIGZldGNoIGZlYXR1cmU6ICcgKyBnZW9qc29uLmVycm9yKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWdlb2pzb24uZmVhdHVyZXMgfHwgZ2VvanNvbi5mZWF0dXJlcy5sZW5ndGggPCAxKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gd2Ugb25seSBhcmUgYWN0dWFsbHkgYXNraW5nIGZvciAxIGZlYXR1cmVcbiAgICAgICAgdmFyIGZlYXQgPSBnZW9qc29uLmZlYXR1cmVzWzBdO1xuXG4gICAgICAgIC8vIHB1dHRpbmcgZXhpc3RpbmcgcHJvcGVydGllcyBpbnRvIGdlb2pzb24gZmVhdHVyZVxuICAgICAgICBpZiAocHJvcHNUb01lcmdlKSB7XG4gICAgICAgICAgZm9yICh2YXIga2V5IGluIHByb3BzVG9NZXJnZSkge1xuICAgICAgICAgICAgZmVhdC5wcm9wZXJ0aWVzW2tleV0gPSBwcm9wc1RvTWVyZ2Vba2V5XTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjYihmZWF0KTtcbiAgICAgIH1cblxuICAgIH1cblxuXG4gIH07XG5cblxufSk7XG5cbiIsIi8qKlxuICogQ3JlYXRlZCBieSBSeWFuIFdoaXRsZXkgPHJ3aGl0bGV5QHNwYXRpYWxkZXYuY29tPlxuICogICAgICAgb24gNi8zLzE0LlxuICovXG5cbnZhciBSZXNvdXJjZSA9IHJlcXVpcmUoJy4vcmVzb3VyY2UnKTtcbnZhciAkcm9vdFNjb3BlID0gcmVxdWlyZSgnLi92ZWN0b3InKS4kcm9vdFNjb3BlO1xudmFyICQgPSByZXF1aXJlKCcuL3ZlY3RvcicpLiQ7XG5cbm1vZHVsZS5leHBvcnRzID0gQ1NWO1xuXG4vKipcbiAqIEEgQ1NWIFJlc291cmNlIGZldGNoZXMgQ1NWIGFuZCBwYXJzZXMgaXRcbiAqXG4gKiBAcGFyYW0gY29uZmlnXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gQ1NWKGNvbmZpZykge1xuICBSZXNvdXJjZS5jYWxsKHRoaXMsIGNvbmZpZyk7XG4gIHRoaXMuX2dlb2pzb24gPSBudWxsO1xufVxuXG5DU1YucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShSZXNvdXJjZS5wcm90b3R5cGUpO1xuQ1NWLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IENTVjtcblxuQ1NWLnByb3RvdHlwZS5sYXRGaWVsZFN0cmluZ3MgPSBbXCJsYXRcIiwgXCJsYXRpdHVkZVwiLCBcInlcIiwgXCJ5Y2VudGVyXCJdO1xuQ1NWLnByb3RvdHlwZS5sb25nRmllbGRTdHJpbmdzID0gW1wibG9uXCIsIFwibG9uZ1wiLCBcImxvbmdpdHVkZVwiLCBcInhcIiwgXCJ4Y2VudGVyXCIsIFwibG5nXCJdO1xuXG5DU1YucHJvdG90eXBlLmdldExheWVyID0gZnVuY3Rpb24gKCkge1xuICBpZiAodGhpcy5fZ2VvanNvbkxheWVyKSByZXR1cm4gdGhpcy5fZ2VvanNvbkxheWVyO1xuICB2YXIgbGF5ZXIgPSBSZXNvdXJjZS5wcm90b3R5cGUuZ2V0TGF5ZXIuY2FsbCh0aGlzKTtcbiAgdGhpcy5mZXRjaChmdW5jdGlvbiAoZ2VvanNvbikge1xuICAgIGxheWVyLmFkZERhdGEoZ2VvanNvbik7XG4gICAgbGF5ZXIuZWFjaExheWVyKGZ1bmN0aW9uIChsKSB7XG4gICAgICBsLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJHJvb3RTY29wZS4kYnJvYWRjYXN0KCdkZXRhaWxzJywgbCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG4gIHJldHVybiBsYXllcjtcbn07XG5cbkNTVi5wcm90b3R5cGUuZmV0Y2ggPSBmdW5jdGlvbiAoY2IpIHtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICBSZXNvdXJjZS5wcm90b3R5cGUuZmV0Y2guY2FsbCh0aGlzLCBmdW5jdGlvbiAoZGF0YSkge1xuICAgIC8vZGF0YSBzaG91bGQgYmUgdGhlIHJhdyBjc3YuXG5cbiAgICBzZWxmLl9nZW9qc29uID0gc2VsZi5wcm9jZXNzQ3N2RGF0YShkYXRhKTtcblxuICAgIGlmICh0eXBlb2Ygc2VsZi5fY29uZmlnLnByb3BlcnRpZXMgPT09ICdvYmplY3QnKSB7XG4gICAgICBhbmd1bGFyLmV4dGVuZChzZWxmLl9nZW9qc29uLnByb3BlcnRpZXMsIHNlbGYuX2NvbmZpZy5wcm9wZXJ0aWVzKTtcbiAgICAgIHNlbGYuX2dlb2pzb24ucHJvcGVydGllcy5zcmNUeXBlID0gJ2Nzdic7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicpIGNiKHNlbGYuX2dlb2pzb24sIHNlbGYpO1xuICB9KTtcbn07XG5cbkNTVi5wcm90b3R5cGUuaGFuZGxlQ3N2ID0gZnVuY3Rpb24gKGZpbGUsIGxheWVyKSB7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgaWYgKGZpbGUuZGF0YSkge1xuICAgIHZhciBkZWNvZGVkID0gdGhpcy5ieXRlc1RvU3RyaW5nKHNlbGYuQmFzZTY0LmRlY29kZShmaWxlLmRhdGEpKTtcbiAgICBzZWxmLnByb2Nlc3NDc3ZEYXRhKGRlY29kZWQpO1xuICB9IGVsc2Uge1xuICAgIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgIHJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIkZpbmlzaGVkIHJlYWRpbmcgQ1NWIGRhdGFcIik7XG4gICAgICBzZWxmLnByb2Nlc3NDc3ZEYXRhKHJlYWRlci5yZXN1bHQsIGxheWVyKTtcbiAgICB9O1xuICAgIHJlYWRlci5yZWFkQXNUZXh0KGZpbGUpO1xuICB9XG59O1xuXG5DU1YucHJvdG90eXBlLmdldFNlcGFyYXRvciA9IGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgdmFyIHNlcGFyYXRvcnMgPSBbXCIsXCIsIFwiICAgICAgXCIsIFwiO1wiLCBcInxcIl07XG4gIHZhciBtYXhTZXBhcmF0b3JMZW5ndGggPSAwO1xuICB2YXIgbWF4U2VwYXJhdG9yVmFsdWUgPSBcIlwiO1xuICAkLmVhY2goc2VwYXJhdG9ycywgZnVuY3Rpb24gKGlkeCwgc2VwYXJhdG9yKSB7XG4gICAgdmFyIGxlbmd0aCA9IHN0cmluZy5zcGxpdChzZXBhcmF0b3IpLmxlbmd0aDtcbiAgICBpZiAobGVuZ3RoID4gbWF4U2VwYXJhdG9yTGVuZ3RoKSB7XG4gICAgICBtYXhTZXBhcmF0b3JMZW5ndGggPSBsZW5ndGg7XG4gICAgICBtYXhTZXBhcmF0b3JWYWx1ZSA9IHNlcGFyYXRvcjtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gbWF4U2VwYXJhdG9yVmFsdWU7XG59O1xuXG5DU1YucHJvdG90eXBlLmJ5dGVzVG9TdHJpbmcgPSBmdW5jdGlvbiAoYikge1xuICB2YXIgcyA9IFtdO1xuICAkLmVhY2goYiwgZnVuY3Rpb24gKGlkeCwgYykge1xuICAgIHMucHVzaChTdHJpbmcuZnJvbUNoYXJDb2RlKGMpKTtcbiAgfSk7XG4gIHJldHVybiBzLmpvaW4oXCJcIik7XG59O1xuXG5DU1YucHJvdG90eXBlLnByb2Nlc3NDc3ZEYXRhID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgdmFyIG5ld0xpbmVJZHggPSBkYXRhLmluZGV4T2YoXCJcXG5cIik7XG4gIHZhciBmaXJzdExpbmUgPSAkLnRyaW0oZGF0YS5zdWJzdHIoMCwgbmV3TGluZUlkeCkpOyAvL3JlbW92ZSBleHRyYSB3aGl0ZXNwYWNlLCBub3Qgc3VyZSBpZiBJIG5lZWQgdG8gZG8gdGhpcyBzaW5jZSBJIHRocmV3IG91dCBzcGFjZSBkZWxpbWl0ZXJzXG4gIHZhciBzZXBhcmF0b3IgPSB0aGlzLmdldFNlcGFyYXRvcihmaXJzdExpbmUpO1xuICB2YXIgY3N2U3RvcmUgPSAkLmNzdi50b09iamVjdHMoZGF0YSk7XG4gIHZhciBmaWVsZE5hbWVzID0gZmlyc3RMaW5lLnNwbGl0KHNlcGFyYXRvcik7XG5cbiAgdmFyIGxhdEZpZWxkID0gbnVsbDtcbiAgdmFyIGxvbmdGaWVsZCA9IG51bGw7XG5cbiAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gIC8vRmluZCBMYXQvTG5nIGNvbHVtbnNcbiAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGZpZWxkTmFtZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICB2YXIgZmllbGROYW1lID0gZmllbGROYW1lc1tpXTtcbiAgICB2YXIgbWF0Y2hJZDtcbiAgICBtYXRjaElkID0gJC5pbkFycmF5KGZpZWxkTmFtZS50b0xvd2VyQ2FzZSgpLCBzZWxmLmxhdEZpZWxkU3RyaW5ncyk7XG4gICAgaWYgKG1hdGNoSWQgIT09IC0xKSB7XG4gICAgICBsYXRGaWVsZCA9IGZpZWxkTmFtZTtcbiAgICB9XG5cbiAgICBtYXRjaElkID0gJC5pbkFycmF5KGZpZWxkTmFtZS50b0xvd2VyQ2FzZSgpLCBzZWxmLmxvbmdGaWVsZFN0cmluZ3MpO1xuICAgIGlmIChtYXRjaElkICE9PSAtMSkge1xuICAgICAgbG9uZ0ZpZWxkID0gZmllbGROYW1lO1xuICAgIH1cbiAgfVxuXG4gIC8vSWYgTWlzc2luZyBMYXRmaWVsZCBvciBMb25nRmllbGQsIHRoZW4gZXhpdC5cbiAgaWYgKCFsYXRGaWVsZCkge1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAoIWxvbmdGaWVsZCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBvdXRwdXRHZW9KU09OID0ge1xuICAgIFwidHlwZVwiOiBcIkZlYXR1cmVDb2xsZWN0aW9uXCIsXG4gICAgXCJmZWF0dXJlc1wiOiBbXVxuICB9O1xuXG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBjc3ZTdG9yZS5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIHZhciByb3cgPSBjc3ZTdG9yZVtpXTtcbiAgICB2YXIgbGF0aXR1ZGUgPSBwYXJzZUZsb2F0KHJvd1tsYXRGaWVsZF0pO1xuICAgIHZhciBsb25naXR1ZGUgPSBwYXJzZUZsb2F0KHJvd1tsb25nRmllbGRdKTtcblxuICAgIGlmIChpc05hTihsYXRpdHVkZSkgfHwgaXNOYU4obG9uZ2l0dWRlKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vY3JlYXRlIEdlb0pTT04gZnJhZ21lbnRcbiAgICBvdXRwdXRHZW9KU09OLmZlYXR1cmVzLnB1c2goe1xuICAgICAgXCJ0eXBlXCI6IFwiRmVhdHVyZVwiLFxuICAgICAgXCJnZW9tZXRyeVwiOiB7XCJ0eXBlXCI6IFwiUG9pbnRcIiwgXCJjb29yZGluYXRlc1wiOiBbbG9uZ2l0dWRlLCBsYXRpdHVkZV19LFxuICAgICAgXCJwcm9wZXJ0aWVzXCI6IHJvd1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIG91dHB1dEdlb0pTT047XG59O1xuXG5DU1YucHJvdG90eXBlLmVhY2hMYXllciA9IGZ1bmN0aW9uIChjYikge1xuICB0aGlzLl9lYWNoTGF5ZXJDYWxsYmFjayA9IGNiO1xuICB0aGlzLmZldGNoKGZ1bmN0aW9uIChnZW9qc29uLCBzZWxmKSB7XG4gICAgdmFyIGxheWVycyA9IHNlbGYuX2dlb2pzb25MYXllci5fbGF5ZXJzO1xuICAgIGZvciAodmFyIGtleSBpbiBsYXllcnMpIHtcbiAgICAgIHZhciBsYXllciA9IGxheWVyc1trZXldO1xuICAgICAgY2IobGF5ZXIpO1xuICAgIH1cbiAgfSk7XG59O1xuXG4vKipcbiAqXG4gKiAgQmFzZTY0IGVuY29kZSAvIGRlY29kZVxuICogIGh0dHA6Ly93d3cud2VidG9vbGtpdC5pbmZvL1xuICpcbiAqKi9cbkNTVi5wcm90b3R5cGUuQmFzZTY0ID0ge1xuXG4gIC8vIHByaXZhdGUgcHJvcGVydHlcbiAgX2tleVN0cjogXCJBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvPVwiLFxuXG4gIC8vIHB1YmxpYyBtZXRob2QgZm9yIGVuY29kaW5nXG4gIGVuY29kZTogZnVuY3Rpb24gKGlucHV0KSB7XG4gICAgdmFyIG91dHB1dCA9IFwiXCI7XG4gICAgdmFyIGNocjEsIGNocjIsIGNocjMsIGVuYzEsIGVuYzIsIGVuYzMsIGVuYzQ7XG4gICAgdmFyIGkgPSAwO1xuXG4gICAgaW5wdXQgPSBCYXNlNjQuX3V0ZjhfZW5jb2RlKGlucHV0KTtcblxuICAgIHdoaWxlIChpIDwgaW5wdXQubGVuZ3RoKSB7XG5cbiAgICAgIGNocjEgPSBpbnB1dC5jaGFyQ29kZUF0KGkrKyk7XG4gICAgICBjaHIyID0gaW5wdXQuY2hhckNvZGVBdChpKyspO1xuICAgICAgY2hyMyA9IGlucHV0LmNoYXJDb2RlQXQoaSsrKTtcblxuICAgICAgZW5jMSA9IGNocjEgPj4gMjtcbiAgICAgIGVuYzIgPSAoKGNocjEgJiAzKSA8PCA0KSB8IChjaHIyID4+IDQpO1xuICAgICAgZW5jMyA9ICgoY2hyMiAmIDE1KSA8PCAyKSB8IChjaHIzID4+IDYpO1xuICAgICAgZW5jNCA9IGNocjMgJiA2MztcblxuICAgICAgaWYgKGlzTmFOKGNocjIpKSB7XG4gICAgICAgIGVuYzMgPSBlbmM0ID0gNjQ7XG4gICAgICB9IGVsc2UgaWYgKGlzTmFOKGNocjMpKSB7XG4gICAgICAgIGVuYzQgPSA2NDtcbiAgICAgIH1cblxuICAgICAgb3V0cHV0ID0gb3V0cHV0ICtcbiAgICAgICAgdGhpcy5fa2V5U3RyLmNoYXJBdChlbmMxKSArIHRoaXMuX2tleVN0ci5jaGFyQXQoZW5jMikgK1xuICAgICAgICB0aGlzLl9rZXlTdHIuY2hhckF0KGVuYzMpICsgdGhpcy5fa2V5U3RyLmNoYXJBdChlbmM0KTtcblxuICAgIH1cblxuICAgIHJldHVybiBvdXRwdXQ7XG4gIH0sXG5cbiAgLy8gcHVibGljIG1ldGhvZCBmb3IgZGVjb2RpbmdcbiAgZGVjb2RlOiBmdW5jdGlvbiAoaW5wdXQpIHtcbiAgICB2YXIgb3V0cHV0ID0gXCJcIjtcbiAgICB2YXIgY2hyMSwgY2hyMiwgY2hyMztcbiAgICB2YXIgZW5jMSwgZW5jMiwgZW5jMywgZW5jNDtcbiAgICB2YXIgaSA9IDA7XG5cbiAgICBpbnB1dCA9IGlucHV0LnJlcGxhY2UoL1teQS1aYS16MC05XFwrXFwvXFw9XS9nLCBcIlwiKTtcblxuICAgIHdoaWxlIChpIDwgaW5wdXQubGVuZ3RoKSB7XG5cbiAgICAgIGVuYzEgPSB0aGlzLl9rZXlTdHIuaW5kZXhPZihpbnB1dC5jaGFyQXQoaSsrKSk7XG4gICAgICBlbmMyID0gdGhpcy5fa2V5U3RyLmluZGV4T2YoaW5wdXQuY2hhckF0KGkrKykpO1xuICAgICAgZW5jMyA9IHRoaXMuX2tleVN0ci5pbmRleE9mKGlucHV0LmNoYXJBdChpKyspKTtcbiAgICAgIGVuYzQgPSB0aGlzLl9rZXlTdHIuaW5kZXhPZihpbnB1dC5jaGFyQXQoaSsrKSk7XG5cbiAgICAgIGNocjEgPSAoZW5jMSA8PCAyKSB8IChlbmMyID4+IDQpO1xuICAgICAgY2hyMiA9ICgoZW5jMiAmIDE1KSA8PCA0KSB8IChlbmMzID4+IDIpO1xuICAgICAgY2hyMyA9ICgoZW5jMyAmIDMpIDw8IDYpIHwgZW5jNDtcblxuICAgICAgb3V0cHV0ID0gb3V0cHV0ICsgU3RyaW5nLmZyb21DaGFyQ29kZShjaHIxKTtcblxuICAgICAgaWYgKGVuYzMgIT0gNjQpIHtcbiAgICAgICAgb3V0cHV0ID0gb3V0cHV0ICsgU3RyaW5nLmZyb21DaGFyQ29kZShjaHIyKTtcbiAgICAgIH1cbiAgICAgIGlmIChlbmM0ICE9IDY0KSB7XG4gICAgICAgIG91dHB1dCA9IG91dHB1dCArIFN0cmluZy5mcm9tQ2hhckNvZGUoY2hyMyk7XG4gICAgICB9XG5cbiAgICB9XG5cbiAgICBvdXRwdXQgPSB0aGlzLkJhc2U2NC5fdXRmOF9kZWNvZGUob3V0cHV0KTtcblxuICAgIHJldHVybiBvdXRwdXQ7XG5cbiAgfSxcblxuICAvLyBwcml2YXRlIG1ldGhvZCBmb3IgVVRGLTggZW5jb2RpbmdcbiAgX3V0ZjhfZW5jb2RlOiBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gICAgc3RyaW5nID0gc3RyaW5nLnJlcGxhY2UoL1xcclxcbi9nLCBcIlxcblwiKTtcbiAgICB2YXIgdXRmdGV4dCA9IFwiXCI7XG5cbiAgICBmb3IgKHZhciBuID0gMDsgbiA8IHN0cmluZy5sZW5ndGg7IG4rKykge1xuXG4gICAgICB2YXIgYyA9IHN0cmluZy5jaGFyQ29kZUF0KG4pO1xuXG4gICAgICBpZiAoYyA8IDEyOCkge1xuICAgICAgICB1dGZ0ZXh0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYyk7XG4gICAgICB9IGVsc2UgaWYgKChjID4gMTI3KSAmJiAoYyA8IDIwNDgpKSB7XG4gICAgICAgIHV0ZnRleHQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSgoYyA+PiA2KSB8IDE5Mik7XG4gICAgICAgIHV0ZnRleHQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSgoYyAmIDYzKSB8IDEyOCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB1dGZ0ZXh0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoKGMgPj4gMTIpIHwgMjI0KTtcbiAgICAgICAgdXRmdGV4dCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKCgoYyA+PiA2KSAmIDYzKSB8IDEyOCk7XG4gICAgICAgIHV0ZnRleHQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSgoYyAmIDYzKSB8IDEyOCk7XG4gICAgICB9XG5cbiAgICB9XG5cbiAgICByZXR1cm4gdXRmdGV4dDtcbiAgfSxcblxuICAvLyBwcml2YXRlIG1ldGhvZCBmb3IgVVRGLTggZGVjb2RpbmdcbiAgX3V0ZjhfZGVjb2RlOiBmdW5jdGlvbiAodXRmdGV4dCkge1xuICAgIHZhciBzdHJpbmcgPSBcIlwiO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgYyA9IGMxID0gYzIgPSAwO1xuXG4gICAgd2hpbGUgKGkgPCB1dGZ0ZXh0Lmxlbmd0aCkge1xuXG4gICAgICBjID0gdXRmdGV4dC5jaGFyQ29kZUF0KGkpO1xuXG4gICAgICBpZiAoYyA8IDEyOCkge1xuICAgICAgICBzdHJpbmcgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShjKTtcbiAgICAgICAgaSsrO1xuICAgICAgfSBlbHNlIGlmICgoYyA+IDE5MSkgJiYgKGMgPCAyMjQpKSB7XG4gICAgICAgIGMyID0gdXRmdGV4dC5jaGFyQ29kZUF0KGkgKyAxKTtcbiAgICAgICAgc3RyaW5nICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoKChjICYgMzEpIDw8IDYpIHwgKGMyICYgNjMpKTtcbiAgICAgICAgaSArPSAyO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYzIgPSB1dGZ0ZXh0LmNoYXJDb2RlQXQoaSArIDEpO1xuICAgICAgICBjMyA9IHV0ZnRleHQuY2hhckNvZGVBdChpICsgMik7XG4gICAgICAgIHN0cmluZyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKCgoYyAmIDE1KSA8PCAxMikgfCAoKGMyICYgNjMpIDw8IDYpIHwgKGMzICYgNjMpKTtcbiAgICAgICAgaSArPSAzO1xuICAgICAgfVxuXG4gICAgfVxuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG59O1xuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IFJ5YW4gV2hpdGxleSA8cndoaXRsZXlAc3BhdGlhbGRldi5jb20+XG4gKiAgICAgICBvbiAxMi8xNS8xNC5cbiAqL1xuXG52YXIgUmVzb3VyY2UgPSByZXF1aXJlKCcuL3Jlc291cmNlJyk7XG52YXIgJHJvb3RTY29wZSA9IHJlcXVpcmUoJy4vdmVjdG9yJykuJHJvb3RTY29wZTtcbnZhciAkaHR0cCA9IHJlcXVpcmUoJy4vdmVjdG9yJykuJGh0dHA7XG52YXIgdmVjdG9yID0gcmVxdWlyZSgnLi92ZWN0b3InKTtcblxubW9kdWxlLmV4cG9ydHMgPSBQQkY7XG5cbi8qKlxuICogQSBQQkYgUmVzb3VyY2UgaW5zdGFudGlhdGVzIGEgTVZUU291cmNlIChNYXBib3ggVmVjdG9yIFRpbGUpXG4gKlxuICogQHBhcmFtIGNvbmZpZ1xuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIFBCRihvcHRpb25zKSB7XG4gIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gIHRoaXMuX29uVGlsZXNMb2FkZWQgPSBvcHRpb25zLm9uVGlsZXNMb2FkZWQ7IC8vU3RvcmUgdGhlIHJlYWwgZnVuY3Rpb24gaW4gYSBsb2NhbCBwcm9wZXJ0eS5cbiAgdGhpcy5fb25DbGljayA9IG9wdGlvbnMub25DbGljazsgLy9TdG9yZSB0aGUgcmVhbCBmdW5jdGlvbiBpbiBhIGxvY2FsIHByb3BlcnR5LlxuICB0aGlzLl9vblNlbGVjdCA9IG9wdGlvbnMub25TZWxlY3Q7ICAvL1N0b3JlIHRoZSByZWFsIGZ1bmN0aW9uIGluIGEgbG9jYWwgcHJvcGVydHkgc28gd2UgY2FuIG92ZXJsb2FkIGl0IGxhdGVyIHdpdGggYW5ndWxhciBzdHVmZi5cbiAgdGhpcy5fb25GaWx0ZXIgPSBvcHRpb25zLmZpbHRlcjsgLy9TdG9yZSB0aGUgcmVhbCBmdW5jdGlvbiBpbiBhIGxvY2FsIHByb3BlcnR5LlxuICB0aGlzLl9zdHlsZSA9IG9wdGlvbnMuc3R5bGU7IC8vU3RvcmUgdGhlIHJlYWwgZnVuY3Rpb24gaW4gYSBsb2NhbCBwcm9wZXJ0eS5cblxuICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgb3B0aW9ucy5vblRpbGVzTG9hZGVkID0gZnVuY3Rpb24oTVZUU291cmNlKXtcblxuICAgIGlmKHNlbGYuX29uVGlsZXNMb2FkZWQpIHNlbGYuX29uVGlsZXNMb2FkZWQoTVZUU291cmNlLCAkaHR0cCwgJHJvb3RTY29wZSk7XG5cbiAgfVxuXG4gIG9wdGlvbnMub25DbGljayA9IGZ1bmN0aW9uKGV2dCl7XG5cbiAgICBzZWxmLl9vbkNsaWNrKGV2dCwgJGh0dHAsICRyb290U2NvcGUsIHNlbGYpO1xuXG4gIH1cblxuICBvcHRpb25zLm9uU2VsZWN0ID0gZnVuY3Rpb24odnRmKXtcblxuICAgIHNlbGYuX29uU2VsZWN0KHZ0Ziwgc2VsZik7XG5cbiAgfVxuXG4gIG9wdGlvbnMuZmlsdGVyID0gZnVuY3Rpb24odnRmKXtcblxuICAgIHJldHVybiBzZWxmLl9vbkZpbHRlcih2dGYsICRyb290U2NvcGUpO1xuXG4gIH1cblxuICBvcHRpb25zLnN0eWxlID0gZnVuY3Rpb24odnRmKXtcblxuICAgIHJldHVybiBzZWxmLl9zdHlsZSh2dGYsICRyb290U2NvcGUpO1xuXG4gIH1cblxuICB0aGlzLmxheWVyID0gbmV3IEwuVGlsZUxheWVyLk1WVFNvdXJjZShvcHRpb25zKTtcbn1cblxuUEJGLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoUmVzb3VyY2UucHJvdG90eXBlKTtcblBCRi5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBQQkY7XG5cblBCRi5wcm90b3R5cGUuZ2V0TGF5ZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLmxheWVyO1xufTtcblxuUEJGLnByb3RvdHlwZS5mZXRjaEZlYXR1cmVEZXRhaWxzID0gZnVuY3Rpb24oZ3VpZCwgbGV2ZWwsIG5hbWUpIHtcblxuXG4gIHZhciBkZXRhaWxzVXJsID0gY29uZmlnLmNodWJic1BhdGgodGhpcy5vcHRpb25zLmRldGFpbHNVcmwpO1xuICBpZiAoIWRldGFpbHNVcmwpIHtcbiAgICBjb25zb2xlLmVycm9yKCdXZSBuZWVkIGEgZGV0YWlsc1VybCB0byBmZXRjaEZlYXR1cmVEZXRhaWxzJyk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIHRoZW1lID0gJHJvb3RTY29wZS4kc3RhdGVQYXJhbXMudGhlbWUgfHwgJ3Byb2plY3QnO1xuXG4gIC8vRXhpdCBpZiB0aGVtZSBpcyBub25lLlxuICBpZih0aGVtZS50b0xvd2VyQ2FzZSgpID09PSAnbm9uZScpIHJldHVybjtcblxuICB2YXIgdGhlbWVOYW1lID0gJHJvb3RTY29wZS50aGVtZU5hbWVIYXNoW3RoZW1lXTtcbiAgaWYgKHR5cGVvZiBsZXZlbCA9PT0gJ3VuZGVmaW5lZCcgfHwgbGV2ZWwgPT09IG51bGwpIHtcbiAgICBjb25zb2xlLmVycm9yKCd3ZSBuZWVkIGEgbGV2ZWwuJyk7XG4gIH1cblxuICB2YXIgZmlsdGVycyA9ICdudWxsJztcbiAgaWYgKCRyb290U2NvcGUuJHN0YXRlUGFyYW1zLmZpbHRlcnMpIHtcbiAgICBmaWx0ZXJzID0gJHJvb3RTY29wZS4kc3RhdGVQYXJhbXMuZmlsdGVycztcbiAgfVxuXG4gIC8vZm9yIGRpc2FzdGVyVHlwZSwganVzdCB1c2UgdGhlIGRpc2FzdGVyIGVuZHBvaW50XG4gIGlmKHRoZW1lLnRvTG93ZXJDYXNlKCkgPT0gJ2Rpc2FzdGVydHlwZScpe1xuICAgIHRoZW1lID0gJ2Rpc2FzdGVyJztcbiAgfVxuXG4gIGRldGFpbHNVcmwgPSBkZXRhaWxzVXJsLnJlcGxhY2UoJzp0aGVtZScsIHRoZW1lKVxuICAgIC5yZXBsYWNlKCc6Z3VpZHMnLCBndWlkKVxuICAgIC5yZXBsYWNlKCc6bGV2ZWwnLCBsZXZlbClcbiAgICAucmVwbGFjZSgnOmZpbHRlcnMnLCBmaWx0ZXJzKTtcblxuICAkaHR0cC5nZXQoZGV0YWlsc1VybCwge2NhY2hlOiB0cnVlfSkuc3VjY2VzcyhmdW5jdGlvbiAoZGV0YWlscykge1xuICAgIHZhciBmZWF0dXJlTGF5ZXIgPSB7IGZlYXR1cmU6IHsgcHJvcGVydGllczoge319fTtcbiAgICBmZWF0dXJlTGF5ZXIuZmVhdHVyZS5wcm9wZXJ0aWVzLnNhbGVzZm9yY2UgPSB7fTtcbiAgICBmZWF0dXJlTGF5ZXIuZmVhdHVyZS5wcm9wZXJ0aWVzLnNhbGVzZm9yY2VbdGhlbWVOYW1lXSA9IGRldGFpbHM7XG4gICAgZmVhdHVyZUxheWVyLmZlYXR1cmUucHJvcGVydGllcy5uYW1lID0gbmFtZTtcbiAgICAkcm9vdFNjb3BlLiRicm9hZGNhc3QoJ2RldGFpbHMnLCBmZWF0dXJlTGF5ZXIpO1xuXG4gIH0pLmVycm9yKGZ1bmN0aW9uKGVycil7XG4gICAgY29uc29sZS5lcnJvcihKU09OLnN0cmluZ2lmeShlcnIpKTtcbiAgfSk7XG5cbn07XG5cblxuXG5cbiIsIi8qKlxuICogQ3JlYXRlZCBieSBOaWNob2xhcyBIYWxsYWhhbiA8bmhhbGxhaGFuQHNwYXRpYWxkZXYuY29tPlxuICogICAgICAgb24gNi8zLzE0LlxuICovXG5cbnZhciByZXNvdXJjZXMgPSByZXF1aXJlKCcuL3ZlY3RvcicpLnJlc291cmNlcztcbnZhciAkaHR0cCA9IHJlcXVpcmUoJy4vdmVjdG9yJykuJGh0dHA7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVzb3VyY2U7XG5cbi8qKlxuICogQWxsIFZlY3RvclByb3ZpZGVyIHJlc291cmNlcyBhcmUgY2hpbGRyZW4gb2YgdGhpcyBjbGFzcy5cbiAqIEBwYXJhbSBjb25maWdcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBSZXNvdXJjZShjb25maWcpIHtcbiAgcmVzb3VyY2VzLnB1c2godGhpcyk7XG4gIHRoaXMuX2NvbmZpZyA9IGNvbmZpZztcbiAgdGhpcy5fdXJsID0gbnVsbDtcbiAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnKSB7XG4gICAgdGhpcy5fdXJsID0gY29uZmlnLnVybDtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLl91cmwgPSBjb25maWc7XG4gIH1cblxuICB0aGlzLl9lYWNoTGF5ZXJDYWxsYmFjayA9IG51bGw7XG4gIHRoaXMuX2dlb2pzb25MYXllciA9IG51bGw7XG59XG5cblxuLyoqXG4gKiBGZXRjaGVzIGRhdGEgZnJvbSB0aGUgZ2l2ZW4gdXJsIG9mIGEgcmVzb3VyY2UuXG4gKiBTdWJjbGFzc2VzIHRoZW4gaGFuZGxlIHRoZSBjYWxsYmFjayBhY2NvcmRpbmdseS5cbiAqXG4gKiBOZWVkcyB0byBhbHNvIHRyeSB0byBnZXQgYSByZXNvdXJjZSB2aWEgdGhlIENodWJic1xuICogcHJveHkuXG4gKlxuICogQHBhcmFtIGNiXG4gKi9cblJlc291cmNlLnByb3RvdHlwZS5mZXRjaCA9IGZ1bmN0aW9uKGNiKSB7XG4gIHZhciBwcm94eVBhdGggPSBjb25maWcucHJveHlQYXRoKHRoaXMuX3VybCk7XG4gICRodHRwLmdldCh0aGlzLl91cmwsIHtjYWNoZTogdHJ1ZX0pLnN1Y2Nlc3MoZnVuY3Rpb24gKGRhdGEsIHN0YXR1cykge1xuICAgIGNiKGRhdGEpO1xuICB9KS5lcnJvcihmdW5jdGlvbigpIHtcbiAgICAvLyB0cnlpbmcgcHJveHlcbiAgICAkaHR0cC5nZXQocHJveHlQYXRoLCB7Y2FjaGU6IHRydWV9KS5zdWNjZXNzKGZ1bmN0aW9uIChkYXRhLCBzdGF0dXMpIHtcbiAgICAgIGNiKGRhdGEpO1xuICAgIH0pLmVycm9yKGZ1bmN0aW9uKCkge1xuICAgICAgY29uc29sZS5lcnJvcihcIlVuYWJsZSB0byBmZXRjaCBmcm9tOiBcIiArIHByb3h5UGF0aCk7XG4gICAgfSk7XG4gIH0pO1xuXG59O1xuXG5cbi8qKlxuICogUmV0dXJucyB0aGUgTGVhZmxldCBHZW9KU09OIExheWVyIGFzc29jaWF0ZWQgd2l0aCB0aGVcbiAqIFJlc291cmNlIG9yIGNyZWF0ZXMgYSBuZXcgb25lLlxuICpcbiAqIEByZXR1cm5zIHtudWxsfCp9XG4gKi9cblJlc291cmNlLnByb3RvdHlwZS5nZXRMYXllciA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHR5cGVvZiB0aGlzLl9nZW9qc29uTGF5ZXIgIT09ICd1bmRlZmluZWQnICYmIHRoaXMuX2dlb2pzb25MYXllciAhPT0gbnVsbCkge1xuICAgIHJldHVybiB0aGlzLl9nZW9qc29uTGF5ZXI7XG4gIH1cblxuICB0aGlzLl9nZW9qc29uTGF5ZXIgPSBMLmdlb0pzb24odGhpcy5fZ2VvanNvbiB8fCBudWxsLCB7XG4gICAgc3R5bGU6IGZ1bmN0aW9uKGZlYXR1cmUpIHtcbiAgICAgIGlmICh0eXBlb2YgZmVhdHVyZS5wcm9wZXJ0aWVzLnN0eWxlRm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIGZlYXR1cmUucHJvcGVydGllcy5zdHlsZUZuKGZlYXR1cmUucHJvcGVydGllcyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gTC5tYXBib3guc2ltcGxlc3R5bGUuc3R5bGUoZmVhdHVyZSk7XG4gICAgfSxcbiAgICBwb2ludFRvTGF5ZXI6IGZ1bmN0aW9uKGZlYXR1cmUsIGxhdGxvbikge1xuICAgICAgaWYgKCFmZWF0dXJlLnByb3BlcnRpZXMpIGZlYXR1cmUucHJvcGVydGllcyA9IHt9O1xuICAgICAgaWYgKGZlYXR1cmUucHJvcGVydGllcy5zY2FsZSkge1xuICAgICAgICByZXR1cm4gTC5jaXJjbGVNYXJrZXIobGF0bG9uLCB7XG4gICAgICAgICAgZmlsbENvbG9yOiBmZWF0dXJlLnByb3BlcnRpZXMuY29sb3IgfHwgJyNGRjAwMDAnLFxuICAgICAgICAgIHJhZGl1czogMjAgKiBmZWF0dXJlLnByb3BlcnRpZXMuc2NhbGVcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gTC5tYXBib3gubWFya2VyLnN0eWxlKGZlYXR1cmUsIGxhdGxvbik7XG4gICAgfVxuICB9KS5lYWNoTGF5ZXIodGhpcy5fZWFjaExheWVyQ2FsbGJhY2spO1xuXG5cbiAgcmV0dXJuIHRoaXMuX2dlb2pzb25MYXllcjtcbn07XG5cblJlc291cmNlLnByb3RvdHlwZS5lYWNoTGF5ZXIgPSBmdW5jdGlvbiAoY2IpIHtcbiAgdGhpcy5fZWFjaExheWVyQ2FsbGJhY2sgPSBjYjtcbiAgdGhpcy5fZ2VvanNvbkxheWVyLmVhY2hMYXllcihjYik7XG59O1xuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IE5pY2hvbGFzIEhhbGxhaGFuIDxuaGFsbGFoYW5Ac3BhdGlhbGRldi5jb20+XG4gKiAgICAgICBvbiA2LzMvMTQuXG4gKi9cblxudmFyIHZlY3RvciA9IHt9O1xubW9kdWxlLmV4cG9ydHMgPSB2ZWN0b3I7XG5cbnZlY3Rvci5zZXRJbmplY3RvcnMgPSBmdW5jdGlvbiAoJHJvb3RTY29wZSwgJGxvY2F0aW9uLCAkaHR0cCwgTGF5ZXJDb25maWcpIHtcbiAgdmVjdG9yLiRyb290U2NvcGUgPSAkcm9vdFNjb3BlO1xuICB2ZWN0b3IuJGxvY2F0aW9uID0gJGxvY2F0aW9uO1xuICB2ZWN0b3IuJGh0dHAgPSAkaHR0cDtcbiAgdmVjdG9yLkxheWVyQ29uZmlnID0gTGF5ZXJDb25maWc7XG59O1xuXG52ZWN0b3IuYW5ndWxhciA9IGFuZ3VsYXI7XG52ZWN0b3IuTCA9IEw7XG52ZWN0b3IuJCA9ICQ7XG52ZWN0b3IudG9HZW9KU09OID0gdG9HZW9KU09OO1xuXG5cbi8qKlxuICogVGhpcyBpcyB1cGRhdGVkIGJ5IHVwZGF0ZUJCb3guIEl0IGlzIHRoZW4gdXNlZCB0byBxdWVyeSBhbGxcbiAqIFZlY3RvclByb3ZpZGVycyB0aGF0IHVzZSBhIGJvdW5kaW5nIGJveCB0byBnZXQgYWRkaXRpb25hbFxuICogZmVhdHVyZXMuXG4gKlxuICogQHR5cGUge3N0cmluZ31cbiAqL1xudmFyIGJib3ggPSB2ZWN0b3IuYmJveCA9IG51bGw7XG5cbi8qKlxuICogRXZlcnkgcmVzb3VyY2UgdGhhdCBoYXMgYmVlbiBpbnN0YW50aWF0ZWQuXG4gKiBAdHlwZSB7QXJyYXl9XG4gKi9cbnZhciByZXNvdXJjZXMgPSB2ZWN0b3IucmVzb3VyY2VzID0gW107XG5kZWJ1Zy5yZXNvdXJjZXMgPSByZXNvdXJjZXM7XG5cbi8qKlxuICogRXZlcnkgcmVzb3VyY2Ugd2l0aCBhIGJvdW5kaW5nIGJveCBmZXRjaGluZyBtZWNoYW5pc20uXG4gKiBAdHlwZSB7QXJyYXl9XG4gKi9cbnZhciBiYm94UmVzb3VyY2VzID0gdmVjdG9yLmJib3hSZXNvdXJjZXMgPSBbXTtcbmRlYnVnLmJib3hSZXNvdXJjZXMgPSBiYm94UmVzb3VyY2VzO1xuXG52YXIgYmJveFVybCA9IHZlY3Rvci5iYm94VXJsID0gJyc7XG5cbnZhciBjZW50ZXJMZXZlbCA9IHZlY3Rvci5jZW50ZXJMZXZlbCA9IDA7XG5cblxuXG4iLCIvKiFcbiAqIFRoZSBidWZmZXIgbW9kdWxlIGZyb20gbm9kZS5qcywgZm9yIHRoZSBicm93c2VyLlxuICpcbiAqIEBhdXRob3IgICBGZXJvc3MgQWJvdWtoYWRpamVoIDxmZXJvc3NAZmVyb3NzLm9yZz4gPGh0dHA6Ly9mZXJvc3Mub3JnPlxuICogQGxpY2Vuc2UgIE1JVFxuICovXG5cbnZhciBiYXNlNjQgPSByZXF1aXJlKCdiYXNlNjQtanMnKVxudmFyIGllZWU3NTQgPSByZXF1aXJlKCdpZWVlNzU0JylcblxuZXhwb3J0cy5CdWZmZXIgPSBCdWZmZXJcbmV4cG9ydHMuU2xvd0J1ZmZlciA9IEJ1ZmZlclxuZXhwb3J0cy5JTlNQRUNUX01BWF9CWVRFUyA9IDUwXG5CdWZmZXIucG9vbFNpemUgPSA4MTkyXG5cbi8qKlxuICogSWYgYFRZUEVEX0FSUkFZX1NVUFBPUlRgOlxuICogICA9PT0gdHJ1ZSAgICBVc2UgVWludDhBcnJheSBpbXBsZW1lbnRhdGlvbiAoZmFzdGVzdClcbiAqICAgPT09IGZhbHNlICAgVXNlIE9iamVjdCBpbXBsZW1lbnRhdGlvbiAobW9zdCBjb21wYXRpYmxlLCBldmVuIElFNilcbiAqXG4gKiBCcm93c2VycyB0aGF0IHN1cHBvcnQgdHlwZWQgYXJyYXlzIGFyZSBJRSAxMCssIEZpcmVmb3ggNCssIENocm9tZSA3KywgU2FmYXJpIDUuMSssXG4gKiBPcGVyYSAxMS42KywgaU9TIDQuMisuXG4gKlxuICogTm90ZTpcbiAqXG4gKiAtIEltcGxlbWVudGF0aW9uIG11c3Qgc3VwcG9ydCBhZGRpbmcgbmV3IHByb3BlcnRpZXMgdG8gYFVpbnQ4QXJyYXlgIGluc3RhbmNlcy5cbiAqICAgRmlyZWZveCA0LTI5IGxhY2tlZCBzdXBwb3J0LCBmaXhlZCBpbiBGaXJlZm94IDMwKy5cbiAqICAgU2VlOiBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD02OTU0MzguXG4gKlxuICogIC0gQ2hyb21lIDktMTAgaXMgbWlzc2luZyB0aGUgYFR5cGVkQXJyYXkucHJvdG90eXBlLnN1YmFycmF5YCBmdW5jdGlvbi5cbiAqXG4gKiAgLSBJRTEwIGhhcyBhIGJyb2tlbiBgVHlwZWRBcnJheS5wcm90b3R5cGUuc3ViYXJyYXlgIGZ1bmN0aW9uIHdoaWNoIHJldHVybnMgYXJyYXlzIG9mXG4gKiAgICBpbmNvcnJlY3QgbGVuZ3RoIGluIHNvbWUgc2l0dWF0aW9ucy5cbiAqXG4gKiBXZSBkZXRlY3QgdGhlc2UgYnVnZ3kgYnJvd3NlcnMgYW5kIHNldCBgVFlQRURfQVJSQVlfU1VQUE9SVGAgdG8gYGZhbHNlYCBzbyB0aGV5IHdpbGxcbiAqIGdldCB0aGUgT2JqZWN0IGltcGxlbWVudGF0aW9uLCB3aGljaCBpcyBzbG93ZXIgYnV0IHdpbGwgd29yayBjb3JyZWN0bHkuXG4gKi9cbnZhciBUWVBFRF9BUlJBWV9TVVBQT1JUID0gKGZ1bmN0aW9uICgpIHtcbiAgdHJ5IHtcbiAgICB2YXIgYnVmID0gbmV3IEFycmF5QnVmZmVyKDApXG4gICAgdmFyIGFyciA9IG5ldyBVaW50OEFycmF5KGJ1ZilcbiAgICBhcnIuZm9vID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gNDIgfVxuICAgIHJldHVybiA0MiA9PT0gYXJyLmZvbygpICYmIC8vIHR5cGVkIGFycmF5IGluc3RhbmNlcyBjYW4gYmUgYXVnbWVudGVkXG4gICAgICAgIHR5cGVvZiBhcnIuc3ViYXJyYXkgPT09ICdmdW5jdGlvbicgJiYgLy8gY2hyb21lIDktMTAgbGFjayBgc3ViYXJyYXlgXG4gICAgICAgIG5ldyBVaW50OEFycmF5KDEpLnN1YmFycmF5KDEsIDEpLmJ5dGVMZW5ndGggPT09IDAgLy8gaWUxMCBoYXMgYnJva2VuIGBzdWJhcnJheWBcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59KSgpXG5cbi8qKlxuICogQ2xhc3M6IEJ1ZmZlclxuICogPT09PT09PT09PT09PVxuICpcbiAqIFRoZSBCdWZmZXIgY29uc3RydWN0b3IgcmV0dXJucyBpbnN0YW5jZXMgb2YgYFVpbnQ4QXJyYXlgIHRoYXQgYXJlIGF1Z21lbnRlZFxuICogd2l0aCBmdW5jdGlvbiBwcm9wZXJ0aWVzIGZvciBhbGwgdGhlIG5vZGUgYEJ1ZmZlcmAgQVBJIGZ1bmN0aW9ucy4gV2UgdXNlXG4gKiBgVWludDhBcnJheWAgc28gdGhhdCBzcXVhcmUgYnJhY2tldCBub3RhdGlvbiB3b3JrcyBhcyBleHBlY3RlZCAtLSBpdCByZXR1cm5zXG4gKiBhIHNpbmdsZSBvY3RldC5cbiAqXG4gKiBCeSBhdWdtZW50aW5nIHRoZSBpbnN0YW5jZXMsIHdlIGNhbiBhdm9pZCBtb2RpZnlpbmcgdGhlIGBVaW50OEFycmF5YFxuICogcHJvdG90eXBlLlxuICovXG5mdW5jdGlvbiBCdWZmZXIgKHN1YmplY3QsIGVuY29kaW5nLCBub1plcm8pIHtcbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIEJ1ZmZlcikpXG4gICAgcmV0dXJuIG5ldyBCdWZmZXIoc3ViamVjdCwgZW5jb2RpbmcsIG5vWmVybylcblxuICB2YXIgdHlwZSA9IHR5cGVvZiBzdWJqZWN0XG5cbiAgLy8gRmluZCB0aGUgbGVuZ3RoXG4gIHZhciBsZW5ndGhcbiAgaWYgKHR5cGUgPT09ICdudW1iZXInKVxuICAgIGxlbmd0aCA9IHN1YmplY3QgPiAwID8gc3ViamVjdCA+Pj4gMCA6IDBcbiAgZWxzZSBpZiAodHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICBpZiAoZW5jb2RpbmcgPT09ICdiYXNlNjQnKVxuICAgICAgc3ViamVjdCA9IGJhc2U2NGNsZWFuKHN1YmplY3QpXG4gICAgbGVuZ3RoID0gQnVmZmVyLmJ5dGVMZW5ndGgoc3ViamVjdCwgZW5jb2RpbmcpXG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gJ29iamVjdCcgJiYgc3ViamVjdCAhPT0gbnVsbCkgeyAvLyBhc3N1bWUgb2JqZWN0IGlzIGFycmF5LWxpa2VcbiAgICBpZiAoc3ViamVjdC50eXBlID09PSAnQnVmZmVyJyAmJiBpc0FycmF5KHN1YmplY3QuZGF0YSkpXG4gICAgICBzdWJqZWN0ID0gc3ViamVjdC5kYXRhXG4gICAgbGVuZ3RoID0gK3N1YmplY3QubGVuZ3RoID4gMCA/IE1hdGguZmxvb3IoK3N1YmplY3QubGVuZ3RoKSA6IDBcbiAgfSBlbHNlXG4gICAgdGhyb3cgbmV3IEVycm9yKCdGaXJzdCBhcmd1bWVudCBuZWVkcyB0byBiZSBhIG51bWJlciwgYXJyYXkgb3Igc3RyaW5nLicpXG5cbiAgdmFyIGJ1ZlxuICBpZiAoVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIC8vIFByZWZlcnJlZDogUmV0dXJuIGFuIGF1Z21lbnRlZCBgVWludDhBcnJheWAgaW5zdGFuY2UgZm9yIGJlc3QgcGVyZm9ybWFuY2VcbiAgICBidWYgPSBCdWZmZXIuX2F1Z21lbnQobmV3IFVpbnQ4QXJyYXkobGVuZ3RoKSlcbiAgfSBlbHNlIHtcbiAgICAvLyBGYWxsYmFjazogUmV0dXJuIFRISVMgaW5zdGFuY2Ugb2YgQnVmZmVyIChjcmVhdGVkIGJ5IGBuZXdgKVxuICAgIGJ1ZiA9IHRoaXNcbiAgICBidWYubGVuZ3RoID0gbGVuZ3RoXG4gICAgYnVmLl9pc0J1ZmZlciA9IHRydWVcbiAgfVxuXG4gIHZhciBpXG4gIGlmIChUWVBFRF9BUlJBWV9TVVBQT1JUICYmIHR5cGVvZiBzdWJqZWN0LmJ5dGVMZW5ndGggPT09ICdudW1iZXInKSB7XG4gICAgLy8gU3BlZWQgb3B0aW1pemF0aW9uIC0tIHVzZSBzZXQgaWYgd2UncmUgY29weWluZyBmcm9tIGEgdHlwZWQgYXJyYXlcbiAgICBidWYuX3NldChzdWJqZWN0KVxuICB9IGVsc2UgaWYgKGlzQXJyYXlpc2goc3ViamVjdCkpIHtcbiAgICAvLyBUcmVhdCBhcnJheS1pc2ggb2JqZWN0cyBhcyBhIGJ5dGUgYXJyYXlcbiAgICBpZiAoQnVmZmVyLmlzQnVmZmVyKHN1YmplY3QpKSB7XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspXG4gICAgICAgIGJ1ZltpXSA9IHN1YmplY3QucmVhZFVJbnQ4KGkpXG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKylcbiAgICAgICAgYnVmW2ldID0gKChzdWJqZWN0W2ldICUgMjU2KSArIDI1NikgJSAyNTZcbiAgICB9XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICBidWYud3JpdGUoc3ViamVjdCwgMCwgZW5jb2RpbmcpXG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gJ251bWJlcicgJiYgIVRZUEVEX0FSUkFZX1NVUFBPUlQgJiYgIW5vWmVybykge1xuICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgYnVmW2ldID0gMFxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBidWZcbn1cblxuLy8gU1RBVElDIE1FVEhPRFNcbi8vID09PT09PT09PT09PT09XG5cbkJ1ZmZlci5pc0VuY29kaW5nID0gZnVuY3Rpb24gKGVuY29kaW5nKSB7XG4gIHN3aXRjaCAoU3RyaW5nKGVuY29kaW5nKS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgY2FzZSAnaGV4JzpcbiAgICBjYXNlICd1dGY4JzpcbiAgICBjYXNlICd1dGYtOCc6XG4gICAgY2FzZSAnYXNjaWknOlxuICAgIGNhc2UgJ2JpbmFyeSc6XG4gICAgY2FzZSAnYmFzZTY0JzpcbiAgICBjYXNlICdyYXcnOlxuICAgIGNhc2UgJ3VjczInOlxuICAgIGNhc2UgJ3Vjcy0yJzpcbiAgICBjYXNlICd1dGYxNmxlJzpcbiAgICBjYXNlICd1dGYtMTZsZSc6XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG5CdWZmZXIuaXNCdWZmZXIgPSBmdW5jdGlvbiAoYikge1xuICByZXR1cm4gISEoYiAhPSBudWxsICYmIGIuX2lzQnVmZmVyKVxufVxuXG5CdWZmZXIuYnl0ZUxlbmd0aCA9IGZ1bmN0aW9uIChzdHIsIGVuY29kaW5nKSB7XG4gIHZhciByZXRcbiAgc3RyID0gc3RyLnRvU3RyaW5nKClcbiAgc3dpdGNoIChlbmNvZGluZyB8fCAndXRmOCcpIHtcbiAgICBjYXNlICdoZXgnOlxuICAgICAgcmV0ID0gc3RyLmxlbmd0aCAvIDJcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAndXRmOCc6XG4gICAgY2FzZSAndXRmLTgnOlxuICAgICAgcmV0ID0gdXRmOFRvQnl0ZXMoc3RyKS5sZW5ndGhcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnYXNjaWknOlxuICAgIGNhc2UgJ2JpbmFyeSc6XG4gICAgY2FzZSAncmF3JzpcbiAgICAgIHJldCA9IHN0ci5sZW5ndGhcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnYmFzZTY0JzpcbiAgICAgIHJldCA9IGJhc2U2NFRvQnl0ZXMoc3RyKS5sZW5ndGhcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAndWNzMic6XG4gICAgY2FzZSAndWNzLTInOlxuICAgIGNhc2UgJ3V0ZjE2bGUnOlxuICAgIGNhc2UgJ3V0Zi0xNmxlJzpcbiAgICAgIHJldCA9IHN0ci5sZW5ndGggKiAyXG4gICAgICBicmVha1xuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Vua25vd24gZW5jb2RpbmcnKVxuICB9XG4gIHJldHVybiByZXRcbn1cblxuQnVmZmVyLmNvbmNhdCA9IGZ1bmN0aW9uIChsaXN0LCB0b3RhbExlbmd0aCkge1xuICBhc3NlcnQoaXNBcnJheShsaXN0KSwgJ1VzYWdlOiBCdWZmZXIuY29uY2F0KGxpc3RbLCBsZW5ndGhdKScpXG5cbiAgaWYgKGxpc3QubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIG5ldyBCdWZmZXIoMClcbiAgfSBlbHNlIGlmIChsaXN0Lmxlbmd0aCA9PT0gMSkge1xuICAgIHJldHVybiBsaXN0WzBdXG4gIH1cblxuICB2YXIgaVxuICBpZiAodG90YWxMZW5ndGggPT09IHVuZGVmaW5lZCkge1xuICAgIHRvdGFsTGVuZ3RoID0gMFxuICAgIGZvciAoaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICB0b3RhbExlbmd0aCArPSBsaXN0W2ldLmxlbmd0aFxuICAgIH1cbiAgfVxuXG4gIHZhciBidWYgPSBuZXcgQnVmZmVyKHRvdGFsTGVuZ3RoKVxuICB2YXIgcG9zID0gMFxuICBmb3IgKGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXVxuICAgIGl0ZW0uY29weShidWYsIHBvcylcbiAgICBwb3MgKz0gaXRlbS5sZW5ndGhcbiAgfVxuICByZXR1cm4gYnVmXG59XG5cbkJ1ZmZlci5jb21wYXJlID0gZnVuY3Rpb24gKGEsIGIpIHtcbiAgYXNzZXJ0KEJ1ZmZlci5pc0J1ZmZlcihhKSAmJiBCdWZmZXIuaXNCdWZmZXIoYiksICdBcmd1bWVudHMgbXVzdCBiZSBCdWZmZXJzJylcbiAgdmFyIHggPSBhLmxlbmd0aFxuICB2YXIgeSA9IGIubGVuZ3RoXG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBNYXRoLm1pbih4LCB5KTsgaSA8IGxlbiAmJiBhW2ldID09PSBiW2ldOyBpKyspIHt9XG4gIGlmIChpICE9PSBsZW4pIHtcbiAgICB4ID0gYVtpXVxuICAgIHkgPSBiW2ldXG4gIH1cbiAgaWYgKHggPCB5KSB7XG4gICAgcmV0dXJuIC0xXG4gIH1cbiAgaWYgKHkgPCB4KSB7XG4gICAgcmV0dXJuIDFcbiAgfVxuICByZXR1cm4gMFxufVxuXG4vLyBCVUZGRVIgSU5TVEFOQ0UgTUVUSE9EU1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cblxuZnVuY3Rpb24gaGV4V3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICBvZmZzZXQgPSBOdW1iZXIob2Zmc2V0KSB8fCAwXG4gIHZhciByZW1haW5pbmcgPSBidWYubGVuZ3RoIC0gb2Zmc2V0XG4gIGlmICghbGVuZ3RoKSB7XG4gICAgbGVuZ3RoID0gcmVtYWluaW5nXG4gIH0gZWxzZSB7XG4gICAgbGVuZ3RoID0gTnVtYmVyKGxlbmd0aClcbiAgICBpZiAobGVuZ3RoID4gcmVtYWluaW5nKSB7XG4gICAgICBsZW5ndGggPSByZW1haW5pbmdcbiAgICB9XG4gIH1cblxuICAvLyBtdXN0IGJlIGFuIGV2ZW4gbnVtYmVyIG9mIGRpZ2l0c1xuICB2YXIgc3RyTGVuID0gc3RyaW5nLmxlbmd0aFxuICBhc3NlcnQoc3RyTGVuICUgMiA9PT0gMCwgJ0ludmFsaWQgaGV4IHN0cmluZycpXG5cbiAgaWYgKGxlbmd0aCA+IHN0ckxlbiAvIDIpIHtcbiAgICBsZW5ndGggPSBzdHJMZW4gLyAyXG4gIH1cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIHZhciBieXRlID0gcGFyc2VJbnQoc3RyaW5nLnN1YnN0cihpICogMiwgMiksIDE2KVxuICAgIGFzc2VydCghaXNOYU4oYnl0ZSksICdJbnZhbGlkIGhleCBzdHJpbmcnKVxuICAgIGJ1ZltvZmZzZXQgKyBpXSA9IGJ5dGVcbiAgfVxuICByZXR1cm4gaVxufVxuXG5mdW5jdGlvbiB1dGY4V3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICB2YXIgY2hhcnNXcml0dGVuID0gYmxpdEJ1ZmZlcih1dGY4VG9CeXRlcyhzdHJpbmcpLCBidWYsIG9mZnNldCwgbGVuZ3RoKVxuICByZXR1cm4gY2hhcnNXcml0dGVuXG59XG5cbmZ1bmN0aW9uIGFzY2lpV3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICB2YXIgY2hhcnNXcml0dGVuID0gYmxpdEJ1ZmZlcihhc2NpaVRvQnl0ZXMoc3RyaW5nKSwgYnVmLCBvZmZzZXQsIGxlbmd0aClcbiAgcmV0dXJuIGNoYXJzV3JpdHRlblxufVxuXG5mdW5jdGlvbiBiaW5hcnlXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHJldHVybiBhc2NpaVdyaXRlKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcbn1cblxuZnVuY3Rpb24gYmFzZTY0V3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICB2YXIgY2hhcnNXcml0dGVuID0gYmxpdEJ1ZmZlcihiYXNlNjRUb0J5dGVzKHN0cmluZyksIGJ1Ziwgb2Zmc2V0LCBsZW5ndGgpXG4gIHJldHVybiBjaGFyc1dyaXR0ZW5cbn1cblxuZnVuY3Rpb24gdXRmMTZsZVdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgdmFyIGNoYXJzV3JpdHRlbiA9IGJsaXRCdWZmZXIodXRmMTZsZVRvQnl0ZXMoc3RyaW5nKSwgYnVmLCBvZmZzZXQsIGxlbmd0aClcbiAgcmV0dXJuIGNoYXJzV3JpdHRlblxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlID0gZnVuY3Rpb24gKHN0cmluZywgb2Zmc2V0LCBsZW5ndGgsIGVuY29kaW5nKSB7XG4gIC8vIFN1cHBvcnQgYm90aCAoc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCwgZW5jb2RpbmcpXG4gIC8vIGFuZCB0aGUgbGVnYWN5IChzdHJpbmcsIGVuY29kaW5nLCBvZmZzZXQsIGxlbmd0aClcbiAgaWYgKGlzRmluaXRlKG9mZnNldCkpIHtcbiAgICBpZiAoIWlzRmluaXRlKGxlbmd0aCkpIHtcbiAgICAgIGVuY29kaW5nID0gbGVuZ3RoXG4gICAgICBsZW5ndGggPSB1bmRlZmluZWRcbiAgICB9XG4gIH0gZWxzZSB7ICAvLyBsZWdhY3lcbiAgICB2YXIgc3dhcCA9IGVuY29kaW5nXG4gICAgZW5jb2RpbmcgPSBvZmZzZXRcbiAgICBvZmZzZXQgPSBsZW5ndGhcbiAgICBsZW5ndGggPSBzd2FwXG4gIH1cblxuICBvZmZzZXQgPSBOdW1iZXIob2Zmc2V0KSB8fCAwXG4gIHZhciByZW1haW5pbmcgPSB0aGlzLmxlbmd0aCAtIG9mZnNldFxuICBpZiAoIWxlbmd0aCkge1xuICAgIGxlbmd0aCA9IHJlbWFpbmluZ1xuICB9IGVsc2Uge1xuICAgIGxlbmd0aCA9IE51bWJlcihsZW5ndGgpXG4gICAgaWYgKGxlbmd0aCA+IHJlbWFpbmluZykge1xuICAgICAgbGVuZ3RoID0gcmVtYWluaW5nXG4gICAgfVxuICB9XG4gIGVuY29kaW5nID0gU3RyaW5nKGVuY29kaW5nIHx8ICd1dGY4JykudG9Mb3dlckNhc2UoKVxuXG4gIHZhciByZXRcbiAgc3dpdGNoIChlbmNvZGluZykge1xuICAgIGNhc2UgJ2hleCc6XG4gICAgICByZXQgPSBoZXhXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICd1dGY4JzpcbiAgICBjYXNlICd1dGYtOCc6XG4gICAgICByZXQgPSB1dGY4V3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnYXNjaWknOlxuICAgICAgcmV0ID0gYXNjaWlXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICdiaW5hcnknOlxuICAgICAgcmV0ID0gYmluYXJ5V3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnYmFzZTY0JzpcbiAgICAgIHJldCA9IGJhc2U2NFdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ3VjczInOlxuICAgIGNhc2UgJ3Vjcy0yJzpcbiAgICBjYXNlICd1dGYxNmxlJzpcbiAgICBjYXNlICd1dGYtMTZsZSc6XG4gICAgICByZXQgPSB1dGYxNmxlV3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcbiAgICAgIGJyZWFrXG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBFcnJvcignVW5rbm93biBlbmNvZGluZycpXG4gIH1cbiAgcmV0dXJuIHJldFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKGVuY29kaW5nLCBzdGFydCwgZW5kKSB7XG4gIHZhciBzZWxmID0gdGhpc1xuXG4gIGVuY29kaW5nID0gU3RyaW5nKGVuY29kaW5nIHx8ICd1dGY4JykudG9Mb3dlckNhc2UoKVxuICBzdGFydCA9IE51bWJlcihzdGFydCkgfHwgMFxuICBlbmQgPSAoZW5kID09PSB1bmRlZmluZWQpID8gc2VsZi5sZW5ndGggOiBOdW1iZXIoZW5kKVxuXG4gIC8vIEZhc3RwYXRoIGVtcHR5IHN0cmluZ3NcbiAgaWYgKGVuZCA9PT0gc3RhcnQpXG4gICAgcmV0dXJuICcnXG5cbiAgdmFyIHJldFxuICBzd2l0Y2ggKGVuY29kaW5nKSB7XG4gICAgY2FzZSAnaGV4JzpcbiAgICAgIHJldCA9IGhleFNsaWNlKHNlbGYsIHN0YXJ0LCBlbmQpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ3V0ZjgnOlxuICAgIGNhc2UgJ3V0Zi04JzpcbiAgICAgIHJldCA9IHV0ZjhTbGljZShzZWxmLCBzdGFydCwgZW5kKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICdhc2NpaSc6XG4gICAgICByZXQgPSBhc2NpaVNsaWNlKHNlbGYsIHN0YXJ0LCBlbmQpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ2JpbmFyeSc6XG4gICAgICByZXQgPSBiaW5hcnlTbGljZShzZWxmLCBzdGFydCwgZW5kKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICdiYXNlNjQnOlxuICAgICAgcmV0ID0gYmFzZTY0U2xpY2Uoc2VsZiwgc3RhcnQsIGVuZClcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAndWNzMic6XG4gICAgY2FzZSAndWNzLTInOlxuICAgIGNhc2UgJ3V0ZjE2bGUnOlxuICAgIGNhc2UgJ3V0Zi0xNmxlJzpcbiAgICAgIHJldCA9IHV0ZjE2bGVTbGljZShzZWxmLCBzdGFydCwgZW5kKVxuICAgICAgYnJlYWtcbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmtub3duIGVuY29kaW5nJylcbiAgfVxuICByZXR1cm4gcmV0XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUudG9KU09OID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6ICdCdWZmZXInLFxuICAgIGRhdGE6IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKHRoaXMuX2FyciB8fCB0aGlzLCAwKVxuICB9XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuZXF1YWxzID0gZnVuY3Rpb24gKGIpIHtcbiAgYXNzZXJ0KEJ1ZmZlci5pc0J1ZmZlcihiKSwgJ0FyZ3VtZW50IG11c3QgYmUgYSBCdWZmZXInKVxuICByZXR1cm4gQnVmZmVyLmNvbXBhcmUodGhpcywgYikgPT09IDBcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5jb21wYXJlID0gZnVuY3Rpb24gKGIpIHtcbiAgYXNzZXJ0KEJ1ZmZlci5pc0J1ZmZlcihiKSwgJ0FyZ3VtZW50IG11c3QgYmUgYSBCdWZmZXInKVxuICByZXR1cm4gQnVmZmVyLmNvbXBhcmUodGhpcywgYilcbn1cblxuLy8gY29weSh0YXJnZXRCdWZmZXIsIHRhcmdldFN0YXJ0PTAsIHNvdXJjZVN0YXJ0PTAsIHNvdXJjZUVuZD1idWZmZXIubGVuZ3RoKVxuQnVmZmVyLnByb3RvdHlwZS5jb3B5ID0gZnVuY3Rpb24gKHRhcmdldCwgdGFyZ2V0X3N0YXJ0LCBzdGFydCwgZW5kKSB7XG4gIHZhciBzb3VyY2UgPSB0aGlzXG5cbiAgaWYgKCFzdGFydCkgc3RhcnQgPSAwXG4gIGlmICghZW5kICYmIGVuZCAhPT0gMCkgZW5kID0gdGhpcy5sZW5ndGhcbiAgaWYgKCF0YXJnZXRfc3RhcnQpIHRhcmdldF9zdGFydCA9IDBcblxuICAvLyBDb3B5IDAgYnl0ZXM7IHdlJ3JlIGRvbmVcbiAgaWYgKGVuZCA9PT0gc3RhcnQpIHJldHVyblxuICBpZiAodGFyZ2V0Lmxlbmd0aCA9PT0gMCB8fCBzb3VyY2UubGVuZ3RoID09PSAwKSByZXR1cm5cblxuICAvLyBGYXRhbCBlcnJvciBjb25kaXRpb25zXG4gIGFzc2VydChlbmQgPj0gc3RhcnQsICdzb3VyY2VFbmQgPCBzb3VyY2VTdGFydCcpXG4gIGFzc2VydCh0YXJnZXRfc3RhcnQgPj0gMCAmJiB0YXJnZXRfc3RhcnQgPCB0YXJnZXQubGVuZ3RoLFxuICAgICAgJ3RhcmdldFN0YXJ0IG91dCBvZiBib3VuZHMnKVxuICBhc3NlcnQoc3RhcnQgPj0gMCAmJiBzdGFydCA8IHNvdXJjZS5sZW5ndGgsICdzb3VyY2VTdGFydCBvdXQgb2YgYm91bmRzJylcbiAgYXNzZXJ0KGVuZCA+PSAwICYmIGVuZCA8PSBzb3VyY2UubGVuZ3RoLCAnc291cmNlRW5kIG91dCBvZiBib3VuZHMnKVxuXG4gIC8vIEFyZSB3ZSBvb2I/XG4gIGlmIChlbmQgPiB0aGlzLmxlbmd0aClcbiAgICBlbmQgPSB0aGlzLmxlbmd0aFxuICBpZiAodGFyZ2V0Lmxlbmd0aCAtIHRhcmdldF9zdGFydCA8IGVuZCAtIHN0YXJ0KVxuICAgIGVuZCA9IHRhcmdldC5sZW5ndGggLSB0YXJnZXRfc3RhcnQgKyBzdGFydFxuXG4gIHZhciBsZW4gPSBlbmQgLSBzdGFydFxuXG4gIGlmIChsZW4gPCAxMDAgfHwgIVRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICB0YXJnZXRbaSArIHRhcmdldF9zdGFydF0gPSB0aGlzW2kgKyBzdGFydF1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdGFyZ2V0Ll9zZXQodGhpcy5zdWJhcnJheShzdGFydCwgc3RhcnQgKyBsZW4pLCB0YXJnZXRfc3RhcnQpXG4gIH1cbn1cblxuZnVuY3Rpb24gYmFzZTY0U2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICBpZiAoc3RhcnQgPT09IDAgJiYgZW5kID09PSBidWYubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGJhc2U2NC5mcm9tQnl0ZUFycmF5KGJ1ZilcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gYmFzZTY0LmZyb21CeXRlQXJyYXkoYnVmLnNsaWNlKHN0YXJ0LCBlbmQpKVxuICB9XG59XG5cbmZ1bmN0aW9uIHV0ZjhTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIHZhciByZXMgPSAnJ1xuICB2YXIgdG1wID0gJydcbiAgZW5kID0gTWF0aC5taW4oYnVmLmxlbmd0aCwgZW5kKVxuXG4gIGZvciAodmFyIGkgPSBzdGFydDsgaSA8IGVuZDsgaSsrKSB7XG4gICAgaWYgKGJ1ZltpXSA8PSAweDdGKSB7XG4gICAgICByZXMgKz0gZGVjb2RlVXRmOENoYXIodG1wKSArIFN0cmluZy5mcm9tQ2hhckNvZGUoYnVmW2ldKVxuICAgICAgdG1wID0gJydcbiAgICB9IGVsc2Uge1xuICAgICAgdG1wICs9ICclJyArIGJ1ZltpXS50b1N0cmluZygxNilcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzICsgZGVjb2RlVXRmOENoYXIodG1wKVxufVxuXG5mdW5jdGlvbiBhc2NpaVNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIHJldCA9ICcnXG4gIGVuZCA9IE1hdGgubWluKGJ1Zi5sZW5ndGgsIGVuZClcblxuICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7IGkrKykge1xuICAgIHJldCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGJ1ZltpXSlcbiAgfVxuICByZXR1cm4gcmV0XG59XG5cbmZ1bmN0aW9uIGJpbmFyeVNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgcmV0dXJuIGFzY2lpU2xpY2UoYnVmLCBzdGFydCwgZW5kKVxufVxuXG5mdW5jdGlvbiBoZXhTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIHZhciBsZW4gPSBidWYubGVuZ3RoXG5cbiAgaWYgKCFzdGFydCB8fCBzdGFydCA8IDApIHN0YXJ0ID0gMFxuICBpZiAoIWVuZCB8fCBlbmQgPCAwIHx8IGVuZCA+IGxlbikgZW5kID0gbGVuXG5cbiAgdmFyIG91dCA9ICcnXG4gIGZvciAodmFyIGkgPSBzdGFydDsgaSA8IGVuZDsgaSsrKSB7XG4gICAgb3V0ICs9IHRvSGV4KGJ1ZltpXSlcbiAgfVxuICByZXR1cm4gb3V0XG59XG5cbmZ1bmN0aW9uIHV0ZjE2bGVTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIHZhciBieXRlcyA9IGJ1Zi5zbGljZShzdGFydCwgZW5kKVxuICB2YXIgcmVzID0gJydcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBieXRlcy5sZW5ndGg7IGkgKz0gMikge1xuICAgIHJlcyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGJ5dGVzW2ldICsgYnl0ZXNbaSArIDFdICogMjU2KVxuICB9XG4gIHJldHVybiByZXNcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5zbGljZSA9IGZ1bmN0aW9uIChzdGFydCwgZW5kKSB7XG4gIHZhciBsZW4gPSB0aGlzLmxlbmd0aFxuICBzdGFydCA9IH5+c3RhcnRcbiAgZW5kID0gZW5kID09PSB1bmRlZmluZWQgPyBsZW4gOiB+fmVuZFxuXG4gIGlmIChzdGFydCA8IDApIHtcbiAgICBzdGFydCArPSBsZW47XG4gICAgaWYgKHN0YXJ0IDwgMClcbiAgICAgIHN0YXJ0ID0gMFxuICB9IGVsc2UgaWYgKHN0YXJ0ID4gbGVuKSB7XG4gICAgc3RhcnQgPSBsZW5cbiAgfVxuXG4gIGlmIChlbmQgPCAwKSB7XG4gICAgZW5kICs9IGxlblxuICAgIGlmIChlbmQgPCAwKVxuICAgICAgZW5kID0gMFxuICB9IGVsc2UgaWYgKGVuZCA+IGxlbikge1xuICAgIGVuZCA9IGxlblxuICB9XG5cbiAgaWYgKGVuZCA8IHN0YXJ0KVxuICAgIGVuZCA9IHN0YXJ0XG5cbiAgaWYgKFRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICByZXR1cm4gQnVmZmVyLl9hdWdtZW50KHRoaXMuc3ViYXJyYXkoc3RhcnQsIGVuZCkpXG4gIH0gZWxzZSB7XG4gICAgdmFyIHNsaWNlTGVuID0gZW5kIC0gc3RhcnRcbiAgICB2YXIgbmV3QnVmID0gbmV3IEJ1ZmZlcihzbGljZUxlbiwgdW5kZWZpbmVkLCB0cnVlKVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2xpY2VMZW47IGkrKykge1xuICAgICAgbmV3QnVmW2ldID0gdGhpc1tpICsgc3RhcnRdXG4gICAgfVxuICAgIHJldHVybiBuZXdCdWZcbiAgfVxufVxuXG4vLyBgZ2V0YCB3aWxsIGJlIHJlbW92ZWQgaW4gTm9kZSAwLjEzK1xuQnVmZmVyLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAob2Zmc2V0KSB7XG4gIGNvbnNvbGUubG9nKCcuZ2V0KCkgaXMgZGVwcmVjYXRlZC4gQWNjZXNzIHVzaW5nIGFycmF5IGluZGV4ZXMgaW5zdGVhZC4nKVxuICByZXR1cm4gdGhpcy5yZWFkVUludDgob2Zmc2V0KVxufVxuXG4vLyBgc2V0YCB3aWxsIGJlIHJlbW92ZWQgaW4gTm9kZSAwLjEzK1xuQnVmZmVyLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiAodiwgb2Zmc2V0KSB7XG4gIGNvbnNvbGUubG9nKCcuc2V0KCkgaXMgZGVwcmVjYXRlZC4gQWNjZXNzIHVzaW5nIGFycmF5IGluZGV4ZXMgaW5zdGVhZC4nKVxuICByZXR1cm4gdGhpcy53cml0ZVVJbnQ4KHYsIG9mZnNldClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDggPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgYXNzZXJ0KG9mZnNldCAhPT0gdW5kZWZpbmVkICYmIG9mZnNldCAhPT0gbnVsbCwgJ21pc3Npbmcgb2Zmc2V0JylcbiAgICBhc3NlcnQob2Zmc2V0IDwgdGhpcy5sZW5ndGgsICdUcnlpbmcgdG8gcmVhZCBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG4gIH1cblxuICBpZiAob2Zmc2V0ID49IHRoaXMubGVuZ3RoKVxuICAgIHJldHVyblxuXG4gIHJldHVybiB0aGlzW29mZnNldF1cbn1cblxuZnVuY3Rpb24gcmVhZFVJbnQxNiAoYnVmLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGFzc2VydCh0eXBlb2YgbGl0dGxlRW5kaWFuID09PSAnYm9vbGVhbicsICdtaXNzaW5nIG9yIGludmFsaWQgZW5kaWFuJylcbiAgICBhc3NlcnQob2Zmc2V0ICE9PSB1bmRlZmluZWQgJiYgb2Zmc2V0ICE9PSBudWxsLCAnbWlzc2luZyBvZmZzZXQnKVxuICAgIGFzc2VydChvZmZzZXQgKyAxIDwgYnVmLmxlbmd0aCwgJ1RyeWluZyB0byByZWFkIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbiAgfVxuXG4gIHZhciBsZW4gPSBidWYubGVuZ3RoXG4gIGlmIChvZmZzZXQgPj0gbGVuKVxuICAgIHJldHVyblxuXG4gIHZhciB2YWxcbiAgaWYgKGxpdHRsZUVuZGlhbikge1xuICAgIHZhbCA9IGJ1ZltvZmZzZXRdXG4gICAgaWYgKG9mZnNldCArIDEgPCBsZW4pXG4gICAgICB2YWwgfD0gYnVmW29mZnNldCArIDFdIDw8IDhcbiAgfSBlbHNlIHtcbiAgICB2YWwgPSBidWZbb2Zmc2V0XSA8PCA4XG4gICAgaWYgKG9mZnNldCArIDEgPCBsZW4pXG4gICAgICB2YWwgfD0gYnVmW29mZnNldCArIDFdXG4gIH1cbiAgcmV0dXJuIHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50MTZMRSA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiByZWFkVUludDE2KHRoaXMsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQxNkJFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIHJlYWRVSW50MTYodGhpcywgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbmZ1bmN0aW9uIHJlYWRVSW50MzIgKGJ1Ziwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBhc3NlcnQodHlwZW9mIGxpdHRsZUVuZGlhbiA9PT0gJ2Jvb2xlYW4nLCAnbWlzc2luZyBvciBpbnZhbGlkIGVuZGlhbicpXG4gICAgYXNzZXJ0KG9mZnNldCAhPT0gdW5kZWZpbmVkICYmIG9mZnNldCAhPT0gbnVsbCwgJ21pc3Npbmcgb2Zmc2V0JylcbiAgICBhc3NlcnQob2Zmc2V0ICsgMyA8IGJ1Zi5sZW5ndGgsICdUcnlpbmcgdG8gcmVhZCBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG4gIH1cblxuICB2YXIgbGVuID0gYnVmLmxlbmd0aFxuICBpZiAob2Zmc2V0ID49IGxlbilcbiAgICByZXR1cm5cblxuICB2YXIgdmFsXG4gIGlmIChsaXR0bGVFbmRpYW4pIHtcbiAgICBpZiAob2Zmc2V0ICsgMiA8IGxlbilcbiAgICAgIHZhbCA9IGJ1ZltvZmZzZXQgKyAyXSA8PCAxNlxuICAgIGlmIChvZmZzZXQgKyAxIDwgbGVuKVxuICAgICAgdmFsIHw9IGJ1ZltvZmZzZXQgKyAxXSA8PCA4XG4gICAgdmFsIHw9IGJ1ZltvZmZzZXRdXG4gICAgaWYgKG9mZnNldCArIDMgPCBsZW4pXG4gICAgICB2YWwgPSB2YWwgKyAoYnVmW29mZnNldCArIDNdIDw8IDI0ID4+PiAwKVxuICB9IGVsc2Uge1xuICAgIGlmIChvZmZzZXQgKyAxIDwgbGVuKVxuICAgICAgdmFsID0gYnVmW29mZnNldCArIDFdIDw8IDE2XG4gICAgaWYgKG9mZnNldCArIDIgPCBsZW4pXG4gICAgICB2YWwgfD0gYnVmW29mZnNldCArIDJdIDw8IDhcbiAgICBpZiAob2Zmc2V0ICsgMyA8IGxlbilcbiAgICAgIHZhbCB8PSBidWZbb2Zmc2V0ICsgM11cbiAgICB2YWwgPSB2YWwgKyAoYnVmW29mZnNldF0gPDwgMjQgPj4+IDApXG4gIH1cbiAgcmV0dXJuIHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50MzJMRSA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiByZWFkVUludDMyKHRoaXMsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQzMkJFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIHJlYWRVSW50MzIodGhpcywgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDggPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgYXNzZXJ0KG9mZnNldCAhPT0gdW5kZWZpbmVkICYmIG9mZnNldCAhPT0gbnVsbCxcbiAgICAgICAgJ21pc3Npbmcgb2Zmc2V0JylcbiAgICBhc3NlcnQob2Zmc2V0IDwgdGhpcy5sZW5ndGgsICdUcnlpbmcgdG8gcmVhZCBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG4gIH1cblxuICBpZiAob2Zmc2V0ID49IHRoaXMubGVuZ3RoKVxuICAgIHJldHVyblxuXG4gIHZhciBuZWcgPSB0aGlzW29mZnNldF0gJiAweDgwXG4gIGlmIChuZWcpXG4gICAgcmV0dXJuICgweGZmIC0gdGhpc1tvZmZzZXRdICsgMSkgKiAtMVxuICBlbHNlXG4gICAgcmV0dXJuIHRoaXNbb2Zmc2V0XVxufVxuXG5mdW5jdGlvbiByZWFkSW50MTYgKGJ1Ziwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBhc3NlcnQodHlwZW9mIGxpdHRsZUVuZGlhbiA9PT0gJ2Jvb2xlYW4nLCAnbWlzc2luZyBvciBpbnZhbGlkIGVuZGlhbicpXG4gICAgYXNzZXJ0KG9mZnNldCAhPT0gdW5kZWZpbmVkICYmIG9mZnNldCAhPT0gbnVsbCwgJ21pc3Npbmcgb2Zmc2V0JylcbiAgICBhc3NlcnQob2Zmc2V0ICsgMSA8IGJ1Zi5sZW5ndGgsICdUcnlpbmcgdG8gcmVhZCBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG4gIH1cblxuICB2YXIgbGVuID0gYnVmLmxlbmd0aFxuICBpZiAob2Zmc2V0ID49IGxlbilcbiAgICByZXR1cm5cblxuICB2YXIgdmFsID0gcmVhZFVJbnQxNihidWYsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCB0cnVlKVxuICB2YXIgbmVnID0gdmFsICYgMHg4MDAwXG4gIGlmIChuZWcpXG4gICAgcmV0dXJuICgweGZmZmYgLSB2YWwgKyAxKSAqIC0xXG4gIGVsc2VcbiAgICByZXR1cm4gdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDE2TEUgPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gcmVhZEludDE2KHRoaXMsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDE2QkUgPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gcmVhZEludDE2KHRoaXMsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG5mdW5jdGlvbiByZWFkSW50MzIgKGJ1Ziwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBhc3NlcnQodHlwZW9mIGxpdHRsZUVuZGlhbiA9PT0gJ2Jvb2xlYW4nLCAnbWlzc2luZyBvciBpbnZhbGlkIGVuZGlhbicpXG4gICAgYXNzZXJ0KG9mZnNldCAhPT0gdW5kZWZpbmVkICYmIG9mZnNldCAhPT0gbnVsbCwgJ21pc3Npbmcgb2Zmc2V0JylcbiAgICBhc3NlcnQob2Zmc2V0ICsgMyA8IGJ1Zi5sZW5ndGgsICdUcnlpbmcgdG8gcmVhZCBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG4gIH1cblxuICB2YXIgbGVuID0gYnVmLmxlbmd0aFxuICBpZiAob2Zmc2V0ID49IGxlbilcbiAgICByZXR1cm5cblxuICB2YXIgdmFsID0gcmVhZFVJbnQzMihidWYsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCB0cnVlKVxuICB2YXIgbmVnID0gdmFsICYgMHg4MDAwMDAwMFxuICBpZiAobmVnKVxuICAgIHJldHVybiAoMHhmZmZmZmZmZiAtIHZhbCArIDEpICogLTFcbiAgZWxzZVxuICAgIHJldHVybiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50MzJMRSA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiByZWFkSW50MzIodGhpcywgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50MzJCRSA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiByZWFkSW50MzIodGhpcywgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbmZ1bmN0aW9uIHJlYWRGbG9hdCAoYnVmLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGFzc2VydCh0eXBlb2YgbGl0dGxlRW5kaWFuID09PSAnYm9vbGVhbicsICdtaXNzaW5nIG9yIGludmFsaWQgZW5kaWFuJylcbiAgICBhc3NlcnQob2Zmc2V0ICsgMyA8IGJ1Zi5sZW5ndGgsICdUcnlpbmcgdG8gcmVhZCBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG4gIH1cblxuICByZXR1cm4gaWVlZTc1NC5yZWFkKGJ1Ziwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIDIzLCA0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRGbG9hdExFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIHJlYWRGbG9hdCh0aGlzLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRGbG9hdEJFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIHJlYWRGbG9hdCh0aGlzLCBvZmZzZXQsIGZhbHNlLCBub0Fzc2VydClcbn1cblxuZnVuY3Rpb24gcmVhZERvdWJsZSAoYnVmLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGFzc2VydCh0eXBlb2YgbGl0dGxlRW5kaWFuID09PSAnYm9vbGVhbicsICdtaXNzaW5nIG9yIGludmFsaWQgZW5kaWFuJylcbiAgICBhc3NlcnQob2Zmc2V0ICsgNyA8IGJ1Zi5sZW5ndGgsICdUcnlpbmcgdG8gcmVhZCBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG4gIH1cblxuICByZXR1cm4gaWVlZTc1NC5yZWFkKGJ1Ziwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIDUyLCA4KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWREb3VibGVMRSA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiByZWFkRG91YmxlKHRoaXMsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZERvdWJsZUJFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIHJlYWREb3VibGUodGhpcywgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50OCA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgYXNzZXJ0KHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwsICdtaXNzaW5nIHZhbHVlJylcbiAgICBhc3NlcnQob2Zmc2V0ICE9PSB1bmRlZmluZWQgJiYgb2Zmc2V0ICE9PSBudWxsLCAnbWlzc2luZyBvZmZzZXQnKVxuICAgIGFzc2VydChvZmZzZXQgPCB0aGlzLmxlbmd0aCwgJ3RyeWluZyB0byB3cml0ZSBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG4gICAgdmVyaWZ1aW50KHZhbHVlLCAweGZmKVxuICB9XG5cbiAgaWYgKG9mZnNldCA+PSB0aGlzLmxlbmd0aCkgcmV0dXJuXG5cbiAgdGhpc1tvZmZzZXRdID0gdmFsdWVcbiAgcmV0dXJuIG9mZnNldCArIDFcbn1cblxuZnVuY3Rpb24gd3JpdGVVSW50MTYgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgYXNzZXJ0KHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwsICdtaXNzaW5nIHZhbHVlJylcbiAgICBhc3NlcnQodHlwZW9mIGxpdHRsZUVuZGlhbiA9PT0gJ2Jvb2xlYW4nLCAnbWlzc2luZyBvciBpbnZhbGlkIGVuZGlhbicpXG4gICAgYXNzZXJ0KG9mZnNldCAhPT0gdW5kZWZpbmVkICYmIG9mZnNldCAhPT0gbnVsbCwgJ21pc3Npbmcgb2Zmc2V0JylcbiAgICBhc3NlcnQob2Zmc2V0ICsgMSA8IGJ1Zi5sZW5ndGgsICd0cnlpbmcgdG8gd3JpdGUgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxuICAgIHZlcmlmdWludCh2YWx1ZSwgMHhmZmZmKVxuICB9XG5cbiAgdmFyIGxlbiA9IGJ1Zi5sZW5ndGhcbiAgaWYgKG9mZnNldCA+PSBsZW4pXG4gICAgcmV0dXJuXG5cbiAgZm9yICh2YXIgaSA9IDAsIGogPSBNYXRoLm1pbihsZW4gLSBvZmZzZXQsIDIpOyBpIDwgajsgaSsrKSB7XG4gICAgYnVmW29mZnNldCArIGldID1cbiAgICAgICAgKHZhbHVlICYgKDB4ZmYgPDwgKDggKiAobGl0dGxlRW5kaWFuID8gaSA6IDEgLSBpKSkpKSA+Pj5cbiAgICAgICAgICAgIChsaXR0bGVFbmRpYW4gPyBpIDogMSAtIGkpICogOFxuICB9XG4gIHJldHVybiBvZmZzZXQgKyAyXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50MTZMRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gd3JpdGVVSW50MTYodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50MTZCRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gd3JpdGVVSW50MTYodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG5mdW5jdGlvbiB3cml0ZVVJbnQzMiAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBhc3NlcnQodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCwgJ21pc3NpbmcgdmFsdWUnKVxuICAgIGFzc2VydCh0eXBlb2YgbGl0dGxlRW5kaWFuID09PSAnYm9vbGVhbicsICdtaXNzaW5nIG9yIGludmFsaWQgZW5kaWFuJylcbiAgICBhc3NlcnQob2Zmc2V0ICE9PSB1bmRlZmluZWQgJiYgb2Zmc2V0ICE9PSBudWxsLCAnbWlzc2luZyBvZmZzZXQnKVxuICAgIGFzc2VydChvZmZzZXQgKyAzIDwgYnVmLmxlbmd0aCwgJ3RyeWluZyB0byB3cml0ZSBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG4gICAgdmVyaWZ1aW50KHZhbHVlLCAweGZmZmZmZmZmKVxuICB9XG5cbiAgdmFyIGxlbiA9IGJ1Zi5sZW5ndGhcbiAgaWYgKG9mZnNldCA+PSBsZW4pXG4gICAgcmV0dXJuXG5cbiAgZm9yICh2YXIgaSA9IDAsIGogPSBNYXRoLm1pbihsZW4gLSBvZmZzZXQsIDQpOyBpIDwgajsgaSsrKSB7XG4gICAgYnVmW29mZnNldCArIGldID1cbiAgICAgICAgKHZhbHVlID4+PiAobGl0dGxlRW5kaWFuID8gaSA6IDMgLSBpKSAqIDgpICYgMHhmZlxuICB9XG4gIHJldHVybiBvZmZzZXQgKyA0XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50MzJMRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gd3JpdGVVSW50MzIodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50MzJCRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gd3JpdGVVSW50MzIodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50OCA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgYXNzZXJ0KHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwsICdtaXNzaW5nIHZhbHVlJylcbiAgICBhc3NlcnQob2Zmc2V0ICE9PSB1bmRlZmluZWQgJiYgb2Zmc2V0ICE9PSBudWxsLCAnbWlzc2luZyBvZmZzZXQnKVxuICAgIGFzc2VydChvZmZzZXQgPCB0aGlzLmxlbmd0aCwgJ1RyeWluZyB0byB3cml0ZSBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG4gICAgdmVyaWZzaW50KHZhbHVlLCAweDdmLCAtMHg4MClcbiAgfVxuXG4gIGlmIChvZmZzZXQgPj0gdGhpcy5sZW5ndGgpXG4gICAgcmV0dXJuXG5cbiAgaWYgKHZhbHVlID49IDApXG4gICAgdGhpcy53cml0ZVVJbnQ4KHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KVxuICBlbHNlXG4gICAgdGhpcy53cml0ZVVJbnQ4KDB4ZmYgKyB2YWx1ZSArIDEsIG9mZnNldCwgbm9Bc3NlcnQpXG4gIHJldHVybiBvZmZzZXQgKyAxXG59XG5cbmZ1bmN0aW9uIHdyaXRlSW50MTYgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgYXNzZXJ0KHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwsICdtaXNzaW5nIHZhbHVlJylcbiAgICBhc3NlcnQodHlwZW9mIGxpdHRsZUVuZGlhbiA9PT0gJ2Jvb2xlYW4nLCAnbWlzc2luZyBvciBpbnZhbGlkIGVuZGlhbicpXG4gICAgYXNzZXJ0KG9mZnNldCAhPT0gdW5kZWZpbmVkICYmIG9mZnNldCAhPT0gbnVsbCwgJ21pc3Npbmcgb2Zmc2V0JylcbiAgICBhc3NlcnQob2Zmc2V0ICsgMSA8IGJ1Zi5sZW5ndGgsICdUcnlpbmcgdG8gd3JpdGUgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxuICAgIHZlcmlmc2ludCh2YWx1ZSwgMHg3ZmZmLCAtMHg4MDAwKVxuICB9XG5cbiAgdmFyIGxlbiA9IGJ1Zi5sZW5ndGhcbiAgaWYgKG9mZnNldCA+PSBsZW4pXG4gICAgcmV0dXJuXG5cbiAgaWYgKHZhbHVlID49IDApXG4gICAgd3JpdGVVSW50MTYoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KVxuICBlbHNlXG4gICAgd3JpdGVVSW50MTYoYnVmLCAweGZmZmYgKyB2YWx1ZSArIDEsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydClcbiAgcmV0dXJuIG9mZnNldCArIDJcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDE2TEUgPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIHdyaXRlSW50MTYodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQxNkJFID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiB3cml0ZUludDE2KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlLCBub0Fzc2VydClcbn1cblxuZnVuY3Rpb24gd3JpdGVJbnQzMiAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBhc3NlcnQodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCwgJ21pc3NpbmcgdmFsdWUnKVxuICAgIGFzc2VydCh0eXBlb2YgbGl0dGxlRW5kaWFuID09PSAnYm9vbGVhbicsICdtaXNzaW5nIG9yIGludmFsaWQgZW5kaWFuJylcbiAgICBhc3NlcnQob2Zmc2V0ICE9PSB1bmRlZmluZWQgJiYgb2Zmc2V0ICE9PSBudWxsLCAnbWlzc2luZyBvZmZzZXQnKVxuICAgIGFzc2VydChvZmZzZXQgKyAzIDwgYnVmLmxlbmd0aCwgJ1RyeWluZyB0byB3cml0ZSBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG4gICAgdmVyaWZzaW50KHZhbHVlLCAweDdmZmZmZmZmLCAtMHg4MDAwMDAwMClcbiAgfVxuXG4gIHZhciBsZW4gPSBidWYubGVuZ3RoXG4gIGlmIChvZmZzZXQgPj0gbGVuKVxuICAgIHJldHVyblxuXG4gIGlmICh2YWx1ZSA+PSAwKVxuICAgIHdyaXRlVUludDMyKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydClcbiAgZWxzZVxuICAgIHdyaXRlVUludDMyKGJ1ZiwgMHhmZmZmZmZmZiArIHZhbHVlICsgMSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KVxuICByZXR1cm4gb2Zmc2V0ICsgNFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50MzJMRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gd3JpdGVJbnQzMih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDMyQkUgPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIHdyaXRlSW50MzIodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG5mdW5jdGlvbiB3cml0ZUZsb2F0IChidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGFzc2VydCh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsLCAnbWlzc2luZyB2YWx1ZScpXG4gICAgYXNzZXJ0KHR5cGVvZiBsaXR0bGVFbmRpYW4gPT09ICdib29sZWFuJywgJ21pc3Npbmcgb3IgaW52YWxpZCBlbmRpYW4nKVxuICAgIGFzc2VydChvZmZzZXQgIT09IHVuZGVmaW5lZCAmJiBvZmZzZXQgIT09IG51bGwsICdtaXNzaW5nIG9mZnNldCcpXG4gICAgYXNzZXJ0KG9mZnNldCArIDMgPCBidWYubGVuZ3RoLCAnVHJ5aW5nIHRvIHdyaXRlIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbiAgICB2ZXJpZklFRUU3NTQodmFsdWUsIDMuNDAyODIzNDY2Mzg1Mjg4NmUrMzgsIC0zLjQwMjgyMzQ2NjM4NTI4ODZlKzM4KVxuICB9XG5cbiAgdmFyIGxlbiA9IGJ1Zi5sZW5ndGhcbiAgaWYgKG9mZnNldCA+PSBsZW4pXG4gICAgcmV0dXJuXG5cbiAgaWVlZTc1NC53cml0ZShidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgMjMsIDQpXG4gIHJldHVybiBvZmZzZXQgKyA0XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVGbG9hdExFID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiB3cml0ZUZsb2F0KHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlRmxvYXRCRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gd3JpdGVGbG9hdCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbmZ1bmN0aW9uIHdyaXRlRG91YmxlIChidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGFzc2VydCh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsLCAnbWlzc2luZyB2YWx1ZScpXG4gICAgYXNzZXJ0KHR5cGVvZiBsaXR0bGVFbmRpYW4gPT09ICdib29sZWFuJywgJ21pc3Npbmcgb3IgaW52YWxpZCBlbmRpYW4nKVxuICAgIGFzc2VydChvZmZzZXQgIT09IHVuZGVmaW5lZCAmJiBvZmZzZXQgIT09IG51bGwsICdtaXNzaW5nIG9mZnNldCcpXG4gICAgYXNzZXJ0KG9mZnNldCArIDcgPCBidWYubGVuZ3RoLFxuICAgICAgICAnVHJ5aW5nIHRvIHdyaXRlIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbiAgICB2ZXJpZklFRUU3NTQodmFsdWUsIDEuNzk3NjkzMTM0ODYyMzE1N0UrMzA4LCAtMS43OTc2OTMxMzQ4NjIzMTU3RSszMDgpXG4gIH1cblxuICB2YXIgbGVuID0gYnVmLmxlbmd0aFxuICBpZiAob2Zmc2V0ID49IGxlbilcbiAgICByZXR1cm5cblxuICBpZWVlNzU0LndyaXRlKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCA1MiwgOClcbiAgcmV0dXJuIG9mZnNldCArIDhcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZURvdWJsZUxFID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiB3cml0ZURvdWJsZSh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZURvdWJsZUJFID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiB3cml0ZURvdWJsZSh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbi8vIGZpbGwodmFsdWUsIHN0YXJ0PTAsIGVuZD1idWZmZXIubGVuZ3RoKVxuQnVmZmVyLnByb3RvdHlwZS5maWxsID0gZnVuY3Rpb24gKHZhbHVlLCBzdGFydCwgZW5kKSB7XG4gIGlmICghdmFsdWUpIHZhbHVlID0gMFxuICBpZiAoIXN0YXJ0KSBzdGFydCA9IDBcbiAgaWYgKCFlbmQpIGVuZCA9IHRoaXMubGVuZ3RoXG5cbiAgYXNzZXJ0KGVuZCA+PSBzdGFydCwgJ2VuZCA8IHN0YXJ0JylcblxuICAvLyBGaWxsIDAgYnl0ZXM7IHdlJ3JlIGRvbmVcbiAgaWYgKGVuZCA9PT0gc3RhcnQpIHJldHVyblxuICBpZiAodGhpcy5sZW5ndGggPT09IDApIHJldHVyblxuXG4gIGFzc2VydChzdGFydCA+PSAwICYmIHN0YXJ0IDwgdGhpcy5sZW5ndGgsICdzdGFydCBvdXQgb2YgYm91bmRzJylcbiAgYXNzZXJ0KGVuZCA+PSAwICYmIGVuZCA8PSB0aGlzLmxlbmd0aCwgJ2VuZCBvdXQgb2YgYm91bmRzJylcblxuICB2YXIgaVxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xuICAgIGZvciAoaSA9IHN0YXJ0OyBpIDwgZW5kOyBpKyspIHtcbiAgICAgIHRoaXNbaV0gPSB2YWx1ZVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB2YXIgYnl0ZXMgPSB1dGY4VG9CeXRlcyh2YWx1ZS50b1N0cmluZygpKVxuICAgIHZhciBsZW4gPSBieXRlcy5sZW5ndGhcbiAgICBmb3IgKGkgPSBzdGFydDsgaSA8IGVuZDsgaSsrKSB7XG4gICAgICB0aGlzW2ldID0gYnl0ZXNbaSAlIGxlbl1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGhpc1xufVxuXG5CdWZmZXIucHJvdG90eXBlLmluc3BlY3QgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBvdXQgPSBbXVxuICB2YXIgbGVuID0gdGhpcy5sZW5ndGhcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgIG91dFtpXSA9IHRvSGV4KHRoaXNbaV0pXG4gICAgaWYgKGkgPT09IGV4cG9ydHMuSU5TUEVDVF9NQVhfQllURVMpIHtcbiAgICAgIG91dFtpICsgMV0gPSAnLi4uJ1xuICAgICAgYnJlYWtcbiAgICB9XG4gIH1cbiAgcmV0dXJuICc8QnVmZmVyICcgKyBvdXQuam9pbignICcpICsgJz4nXG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBgQXJyYXlCdWZmZXJgIHdpdGggdGhlICpjb3BpZWQqIG1lbW9yeSBvZiB0aGUgYnVmZmVyIGluc3RhbmNlLlxuICogQWRkZWQgaW4gTm9kZSAwLjEyLiBPbmx5IGF2YWlsYWJsZSBpbiBicm93c2VycyB0aGF0IHN1cHBvcnQgQXJyYXlCdWZmZXIuXG4gKi9cbkJ1ZmZlci5wcm90b3R5cGUudG9BcnJheUJ1ZmZlciA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHR5cGVvZiBVaW50OEFycmF5ICE9PSAndW5kZWZpbmVkJykge1xuICAgIGlmIChUWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgICByZXR1cm4gKG5ldyBCdWZmZXIodGhpcykpLmJ1ZmZlclxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgYnVmID0gbmV3IFVpbnQ4QXJyYXkodGhpcy5sZW5ndGgpXG4gICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gYnVmLmxlbmd0aDsgaSA8IGxlbjsgaSArPSAxKSB7XG4gICAgICAgIGJ1ZltpXSA9IHRoaXNbaV1cbiAgICAgIH1cbiAgICAgIHJldHVybiBidWYuYnVmZmVyXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcignQnVmZmVyLnRvQXJyYXlCdWZmZXIgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXInKVxuICB9XG59XG5cbi8vIEhFTFBFUiBGVU5DVElPTlNcbi8vID09PT09PT09PT09PT09PT1cblxudmFyIEJQID0gQnVmZmVyLnByb3RvdHlwZVxuXG4vKipcbiAqIEF1Z21lbnQgYSBVaW50OEFycmF5ICppbnN0YW5jZSogKG5vdCB0aGUgVWludDhBcnJheSBjbGFzcyEpIHdpdGggQnVmZmVyIG1ldGhvZHNcbiAqL1xuQnVmZmVyLl9hdWdtZW50ID0gZnVuY3Rpb24gKGFycikge1xuICBhcnIuX2lzQnVmZmVyID0gdHJ1ZVxuXG4gIC8vIHNhdmUgcmVmZXJlbmNlIHRvIG9yaWdpbmFsIFVpbnQ4QXJyYXkgZ2V0L3NldCBtZXRob2RzIGJlZm9yZSBvdmVyd3JpdGluZ1xuICBhcnIuX2dldCA9IGFyci5nZXRcbiAgYXJyLl9zZXQgPSBhcnIuc2V0XG5cbiAgLy8gZGVwcmVjYXRlZCwgd2lsbCBiZSByZW1vdmVkIGluIG5vZGUgMC4xMytcbiAgYXJyLmdldCA9IEJQLmdldFxuICBhcnIuc2V0ID0gQlAuc2V0XG5cbiAgYXJyLndyaXRlID0gQlAud3JpdGVcbiAgYXJyLnRvU3RyaW5nID0gQlAudG9TdHJpbmdcbiAgYXJyLnRvTG9jYWxlU3RyaW5nID0gQlAudG9TdHJpbmdcbiAgYXJyLnRvSlNPTiA9IEJQLnRvSlNPTlxuICBhcnIuZXF1YWxzID0gQlAuZXF1YWxzXG4gIGFyci5jb21wYXJlID0gQlAuY29tcGFyZVxuICBhcnIuY29weSA9IEJQLmNvcHlcbiAgYXJyLnNsaWNlID0gQlAuc2xpY2VcbiAgYXJyLnJlYWRVSW50OCA9IEJQLnJlYWRVSW50OFxuICBhcnIucmVhZFVJbnQxNkxFID0gQlAucmVhZFVJbnQxNkxFXG4gIGFyci5yZWFkVUludDE2QkUgPSBCUC5yZWFkVUludDE2QkVcbiAgYXJyLnJlYWRVSW50MzJMRSA9IEJQLnJlYWRVSW50MzJMRVxuICBhcnIucmVhZFVJbnQzMkJFID0gQlAucmVhZFVJbnQzMkJFXG4gIGFyci5yZWFkSW50OCA9IEJQLnJlYWRJbnQ4XG4gIGFyci5yZWFkSW50MTZMRSA9IEJQLnJlYWRJbnQxNkxFXG4gIGFyci5yZWFkSW50MTZCRSA9IEJQLnJlYWRJbnQxNkJFXG4gIGFyci5yZWFkSW50MzJMRSA9IEJQLnJlYWRJbnQzMkxFXG4gIGFyci5yZWFkSW50MzJCRSA9IEJQLnJlYWRJbnQzMkJFXG4gIGFyci5yZWFkRmxvYXRMRSA9IEJQLnJlYWRGbG9hdExFXG4gIGFyci5yZWFkRmxvYXRCRSA9IEJQLnJlYWRGbG9hdEJFXG4gIGFyci5yZWFkRG91YmxlTEUgPSBCUC5yZWFkRG91YmxlTEVcbiAgYXJyLnJlYWREb3VibGVCRSA9IEJQLnJlYWREb3VibGVCRVxuICBhcnIud3JpdGVVSW50OCA9IEJQLndyaXRlVUludDhcbiAgYXJyLndyaXRlVUludDE2TEUgPSBCUC53cml0ZVVJbnQxNkxFXG4gIGFyci53cml0ZVVJbnQxNkJFID0gQlAud3JpdGVVSW50MTZCRVxuICBhcnIud3JpdGVVSW50MzJMRSA9IEJQLndyaXRlVUludDMyTEVcbiAgYXJyLndyaXRlVUludDMyQkUgPSBCUC53cml0ZVVJbnQzMkJFXG4gIGFyci53cml0ZUludDggPSBCUC53cml0ZUludDhcbiAgYXJyLndyaXRlSW50MTZMRSA9IEJQLndyaXRlSW50MTZMRVxuICBhcnIud3JpdGVJbnQxNkJFID0gQlAud3JpdGVJbnQxNkJFXG4gIGFyci53cml0ZUludDMyTEUgPSBCUC53cml0ZUludDMyTEVcbiAgYXJyLndyaXRlSW50MzJCRSA9IEJQLndyaXRlSW50MzJCRVxuICBhcnIud3JpdGVGbG9hdExFID0gQlAud3JpdGVGbG9hdExFXG4gIGFyci53cml0ZUZsb2F0QkUgPSBCUC53cml0ZUZsb2F0QkVcbiAgYXJyLndyaXRlRG91YmxlTEUgPSBCUC53cml0ZURvdWJsZUxFXG4gIGFyci53cml0ZURvdWJsZUJFID0gQlAud3JpdGVEb3VibGVCRVxuICBhcnIuZmlsbCA9IEJQLmZpbGxcbiAgYXJyLmluc3BlY3QgPSBCUC5pbnNwZWN0XG4gIGFyci50b0FycmF5QnVmZmVyID0gQlAudG9BcnJheUJ1ZmZlclxuXG4gIHJldHVybiBhcnJcbn1cblxudmFyIElOVkFMSURfQkFTRTY0X1JFID0gL1teK1xcLzAtOUEtel0vZ1xuXG5mdW5jdGlvbiBiYXNlNjRjbGVhbiAoc3RyKSB7XG4gIC8vIE5vZGUgc3RyaXBzIG91dCBpbnZhbGlkIGNoYXJhY3RlcnMgbGlrZSBcXG4gYW5kIFxcdCBmcm9tIHRoZSBzdHJpbmcsIGJhc2U2NC1qcyBkb2VzIG5vdFxuICBzdHIgPSBzdHJpbmd0cmltKHN0cikucmVwbGFjZShJTlZBTElEX0JBU0U2NF9SRSwgJycpXG4gIC8vIE5vZGUgYWxsb3dzIGZvciBub24tcGFkZGVkIGJhc2U2NCBzdHJpbmdzIChtaXNzaW5nIHRyYWlsaW5nID09PSksIGJhc2U2NC1qcyBkb2VzIG5vdFxuICB3aGlsZSAoc3RyLmxlbmd0aCAlIDQgIT09IDApIHtcbiAgICBzdHIgPSBzdHIgKyAnPSdcbiAgfVxuICByZXR1cm4gc3RyXG59XG5cbmZ1bmN0aW9uIHN0cmluZ3RyaW0gKHN0cikge1xuICBpZiAoc3RyLnRyaW0pIHJldHVybiBzdHIudHJpbSgpXG4gIHJldHVybiBzdHIucmVwbGFjZSgvXlxccyt8XFxzKyQvZywgJycpXG59XG5cbmZ1bmN0aW9uIGlzQXJyYXkgKHN1YmplY3QpIHtcbiAgcmV0dXJuIChBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIChzdWJqZWN0KSB7XG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChzdWJqZWN0KSA9PT0gJ1tvYmplY3QgQXJyYXldJ1xuICB9KShzdWJqZWN0KVxufVxuXG5mdW5jdGlvbiBpc0FycmF5aXNoIChzdWJqZWN0KSB7XG4gIHJldHVybiBpc0FycmF5KHN1YmplY3QpIHx8IEJ1ZmZlci5pc0J1ZmZlcihzdWJqZWN0KSB8fFxuICAgICAgc3ViamVjdCAmJiB0eXBlb2Ygc3ViamVjdCA9PT0gJ29iamVjdCcgJiZcbiAgICAgIHR5cGVvZiBzdWJqZWN0Lmxlbmd0aCA9PT0gJ251bWJlcidcbn1cblxuZnVuY3Rpb24gdG9IZXggKG4pIHtcbiAgaWYgKG4gPCAxNikgcmV0dXJuICcwJyArIG4udG9TdHJpbmcoMTYpXG4gIHJldHVybiBuLnRvU3RyaW5nKDE2KVxufVxuXG5mdW5jdGlvbiB1dGY4VG9CeXRlcyAoc3RyKSB7XG4gIHZhciBieXRlQXJyYXkgPSBbXVxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xuICAgIHZhciBiID0gc3RyLmNoYXJDb2RlQXQoaSlcbiAgICBpZiAoYiA8PSAweDdGKSB7XG4gICAgICBieXRlQXJyYXkucHVzaChiKVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgc3RhcnQgPSBpXG4gICAgICBpZiAoYiA+PSAweEQ4MDAgJiYgYiA8PSAweERGRkYpIGkrK1xuICAgICAgdmFyIGggPSBlbmNvZGVVUklDb21wb25lbnQoc3RyLnNsaWNlKHN0YXJ0LCBpKzEpKS5zdWJzdHIoMSkuc3BsaXQoJyUnKVxuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBoLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGJ5dGVBcnJheS5wdXNoKHBhcnNlSW50KGhbal0sIDE2KSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGJ5dGVBcnJheVxufVxuXG5mdW5jdGlvbiBhc2NpaVRvQnl0ZXMgKHN0cikge1xuICB2YXIgYnl0ZUFycmF5ID0gW11cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcbiAgICAvLyBOb2RlJ3MgY29kZSBzZWVtcyB0byBiZSBkb2luZyB0aGlzIGFuZCBub3QgJiAweDdGLi5cbiAgICBieXRlQXJyYXkucHVzaChzdHIuY2hhckNvZGVBdChpKSAmIDB4RkYpXG4gIH1cbiAgcmV0dXJuIGJ5dGVBcnJheVxufVxuXG5mdW5jdGlvbiB1dGYxNmxlVG9CeXRlcyAoc3RyKSB7XG4gIHZhciBjLCBoaSwgbG9cbiAgdmFyIGJ5dGVBcnJheSA9IFtdXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XG4gICAgYyA9IHN0ci5jaGFyQ29kZUF0KGkpXG4gICAgaGkgPSBjID4+IDhcbiAgICBsbyA9IGMgJSAyNTZcbiAgICBieXRlQXJyYXkucHVzaChsbylcbiAgICBieXRlQXJyYXkucHVzaChoaSlcbiAgfVxuXG4gIHJldHVybiBieXRlQXJyYXlcbn1cblxuZnVuY3Rpb24gYmFzZTY0VG9CeXRlcyAoc3RyKSB7XG4gIHJldHVybiBiYXNlNjQudG9CeXRlQXJyYXkoc3RyKVxufVxuXG5mdW5jdGlvbiBibGl0QnVmZmVyIChzcmMsIGRzdCwgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIGlmICgoaSArIG9mZnNldCA+PSBkc3QubGVuZ3RoKSB8fCAoaSA+PSBzcmMubGVuZ3RoKSlcbiAgICAgIGJyZWFrXG4gICAgZHN0W2kgKyBvZmZzZXRdID0gc3JjW2ldXG4gIH1cbiAgcmV0dXJuIGlcbn1cblxuZnVuY3Rpb24gZGVjb2RlVXRmOENoYXIgKHN0cikge1xuICB0cnkge1xuICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoc3RyKVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZSgweEZGRkQpIC8vIFVURiA4IGludmFsaWQgY2hhclxuICB9XG59XG5cbi8qXG4gKiBXZSBoYXZlIHRvIG1ha2Ugc3VyZSB0aGF0IHRoZSB2YWx1ZSBpcyBhIHZhbGlkIGludGVnZXIuIFRoaXMgbWVhbnMgdGhhdCBpdFxuICogaXMgbm9uLW5lZ2F0aXZlLiBJdCBoYXMgbm8gZnJhY3Rpb25hbCBjb21wb25lbnQgYW5kIHRoYXQgaXQgZG9lcyBub3RcbiAqIGV4Y2VlZCB0aGUgbWF4aW11bSBhbGxvd2VkIHZhbHVlLlxuICovXG5mdW5jdGlvbiB2ZXJpZnVpbnQgKHZhbHVlLCBtYXgpIHtcbiAgYXNzZXJ0KHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicsICdjYW5ub3Qgd3JpdGUgYSBub24tbnVtYmVyIGFzIGEgbnVtYmVyJylcbiAgYXNzZXJ0KHZhbHVlID49IDAsICdzcGVjaWZpZWQgYSBuZWdhdGl2ZSB2YWx1ZSBmb3Igd3JpdGluZyBhbiB1bnNpZ25lZCB2YWx1ZScpXG4gIGFzc2VydCh2YWx1ZSA8PSBtYXgsICd2YWx1ZSBpcyBsYXJnZXIgdGhhbiBtYXhpbXVtIHZhbHVlIGZvciB0eXBlJylcbiAgYXNzZXJ0KE1hdGguZmxvb3IodmFsdWUpID09PSB2YWx1ZSwgJ3ZhbHVlIGhhcyBhIGZyYWN0aW9uYWwgY29tcG9uZW50Jylcbn1cblxuZnVuY3Rpb24gdmVyaWZzaW50ICh2YWx1ZSwgbWF4LCBtaW4pIHtcbiAgYXNzZXJ0KHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicsICdjYW5ub3Qgd3JpdGUgYSBub24tbnVtYmVyIGFzIGEgbnVtYmVyJylcbiAgYXNzZXJ0KHZhbHVlIDw9IG1heCwgJ3ZhbHVlIGxhcmdlciB0aGFuIG1heGltdW0gYWxsb3dlZCB2YWx1ZScpXG4gIGFzc2VydCh2YWx1ZSA+PSBtaW4sICd2YWx1ZSBzbWFsbGVyIHRoYW4gbWluaW11bSBhbGxvd2VkIHZhbHVlJylcbiAgYXNzZXJ0KE1hdGguZmxvb3IodmFsdWUpID09PSB2YWx1ZSwgJ3ZhbHVlIGhhcyBhIGZyYWN0aW9uYWwgY29tcG9uZW50Jylcbn1cblxuZnVuY3Rpb24gdmVyaWZJRUVFNzU0ICh2YWx1ZSwgbWF4LCBtaW4pIHtcbiAgYXNzZXJ0KHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicsICdjYW5ub3Qgd3JpdGUgYSBub24tbnVtYmVyIGFzIGEgbnVtYmVyJylcbiAgYXNzZXJ0KHZhbHVlIDw9IG1heCwgJ3ZhbHVlIGxhcmdlciB0aGFuIG1heGltdW0gYWxsb3dlZCB2YWx1ZScpXG4gIGFzc2VydCh2YWx1ZSA+PSBtaW4sICd2YWx1ZSBzbWFsbGVyIHRoYW4gbWluaW11bSBhbGxvd2VkIHZhbHVlJylcbn1cblxuZnVuY3Rpb24gYXNzZXJ0ICh0ZXN0LCBtZXNzYWdlKSB7XG4gIGlmICghdGVzdCkgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UgfHwgJ0ZhaWxlZCBhc3NlcnRpb24nKVxufVxuIiwidmFyIGxvb2t1cCA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvJztcblxuOyhmdW5jdGlvbiAoZXhwb3J0cykge1xuXHQndXNlIHN0cmljdCc7XG5cbiAgdmFyIEFyciA9ICh0eXBlb2YgVWludDhBcnJheSAhPT0gJ3VuZGVmaW5lZCcpXG4gICAgPyBVaW50OEFycmF5XG4gICAgOiBBcnJheVxuXG5cdHZhciBQTFVTICAgPSAnKycuY2hhckNvZGVBdCgwKVxuXHR2YXIgU0xBU0ggID0gJy8nLmNoYXJDb2RlQXQoMClcblx0dmFyIE5VTUJFUiA9ICcwJy5jaGFyQ29kZUF0KDApXG5cdHZhciBMT1dFUiAgPSAnYScuY2hhckNvZGVBdCgwKVxuXHR2YXIgVVBQRVIgID0gJ0EnLmNoYXJDb2RlQXQoMClcblxuXHRmdW5jdGlvbiBkZWNvZGUgKGVsdCkge1xuXHRcdHZhciBjb2RlID0gZWx0LmNoYXJDb2RlQXQoMClcblx0XHRpZiAoY29kZSA9PT0gUExVUylcblx0XHRcdHJldHVybiA2MiAvLyAnKydcblx0XHRpZiAoY29kZSA9PT0gU0xBU0gpXG5cdFx0XHRyZXR1cm4gNjMgLy8gJy8nXG5cdFx0aWYgKGNvZGUgPCBOVU1CRVIpXG5cdFx0XHRyZXR1cm4gLTEgLy9ubyBtYXRjaFxuXHRcdGlmIChjb2RlIDwgTlVNQkVSICsgMTApXG5cdFx0XHRyZXR1cm4gY29kZSAtIE5VTUJFUiArIDI2ICsgMjZcblx0XHRpZiAoY29kZSA8IFVQUEVSICsgMjYpXG5cdFx0XHRyZXR1cm4gY29kZSAtIFVQUEVSXG5cdFx0aWYgKGNvZGUgPCBMT1dFUiArIDI2KVxuXHRcdFx0cmV0dXJuIGNvZGUgLSBMT1dFUiArIDI2XG5cdH1cblxuXHRmdW5jdGlvbiBiNjRUb0J5dGVBcnJheSAoYjY0KSB7XG5cdFx0dmFyIGksIGosIGwsIHRtcCwgcGxhY2VIb2xkZXJzLCBhcnJcblxuXHRcdGlmIChiNjQubGVuZ3RoICUgNCA+IDApIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignSW52YWxpZCBzdHJpbmcuIExlbmd0aCBtdXN0IGJlIGEgbXVsdGlwbGUgb2YgNCcpXG5cdFx0fVxuXG5cdFx0Ly8gdGhlIG51bWJlciBvZiBlcXVhbCBzaWducyAocGxhY2UgaG9sZGVycylcblx0XHQvLyBpZiB0aGVyZSBhcmUgdHdvIHBsYWNlaG9sZGVycywgdGhhbiB0aGUgdHdvIGNoYXJhY3RlcnMgYmVmb3JlIGl0XG5cdFx0Ly8gcmVwcmVzZW50IG9uZSBieXRlXG5cdFx0Ly8gaWYgdGhlcmUgaXMgb25seSBvbmUsIHRoZW4gdGhlIHRocmVlIGNoYXJhY3RlcnMgYmVmb3JlIGl0IHJlcHJlc2VudCAyIGJ5dGVzXG5cdFx0Ly8gdGhpcyBpcyBqdXN0IGEgY2hlYXAgaGFjayB0byBub3QgZG8gaW5kZXhPZiB0d2ljZVxuXHRcdHZhciBsZW4gPSBiNjQubGVuZ3RoXG5cdFx0cGxhY2VIb2xkZXJzID0gJz0nID09PSBiNjQuY2hhckF0KGxlbiAtIDIpID8gMiA6ICc9JyA9PT0gYjY0LmNoYXJBdChsZW4gLSAxKSA/IDEgOiAwXG5cblx0XHQvLyBiYXNlNjQgaXMgNC8zICsgdXAgdG8gdHdvIGNoYXJhY3RlcnMgb2YgdGhlIG9yaWdpbmFsIGRhdGFcblx0XHRhcnIgPSBuZXcgQXJyKGI2NC5sZW5ndGggKiAzIC8gNCAtIHBsYWNlSG9sZGVycylcblxuXHRcdC8vIGlmIHRoZXJlIGFyZSBwbGFjZWhvbGRlcnMsIG9ubHkgZ2V0IHVwIHRvIHRoZSBsYXN0IGNvbXBsZXRlIDQgY2hhcnNcblx0XHRsID0gcGxhY2VIb2xkZXJzID4gMCA/IGI2NC5sZW5ndGggLSA0IDogYjY0Lmxlbmd0aFxuXG5cdFx0dmFyIEwgPSAwXG5cblx0XHRmdW5jdGlvbiBwdXNoICh2KSB7XG5cdFx0XHRhcnJbTCsrXSA9IHZcblx0XHR9XG5cblx0XHRmb3IgKGkgPSAwLCBqID0gMDsgaSA8IGw7IGkgKz0gNCwgaiArPSAzKSB7XG5cdFx0XHR0bXAgPSAoZGVjb2RlKGI2NC5jaGFyQXQoaSkpIDw8IDE4KSB8IChkZWNvZGUoYjY0LmNoYXJBdChpICsgMSkpIDw8IDEyKSB8IChkZWNvZGUoYjY0LmNoYXJBdChpICsgMikpIDw8IDYpIHwgZGVjb2RlKGI2NC5jaGFyQXQoaSArIDMpKVxuXHRcdFx0cHVzaCgodG1wICYgMHhGRjAwMDApID4+IDE2KVxuXHRcdFx0cHVzaCgodG1wICYgMHhGRjAwKSA+PiA4KVxuXHRcdFx0cHVzaCh0bXAgJiAweEZGKVxuXHRcdH1cblxuXHRcdGlmIChwbGFjZUhvbGRlcnMgPT09IDIpIHtcblx0XHRcdHRtcCA9IChkZWNvZGUoYjY0LmNoYXJBdChpKSkgPDwgMikgfCAoZGVjb2RlKGI2NC5jaGFyQXQoaSArIDEpKSA+PiA0KVxuXHRcdFx0cHVzaCh0bXAgJiAweEZGKVxuXHRcdH0gZWxzZSBpZiAocGxhY2VIb2xkZXJzID09PSAxKSB7XG5cdFx0XHR0bXAgPSAoZGVjb2RlKGI2NC5jaGFyQXQoaSkpIDw8IDEwKSB8IChkZWNvZGUoYjY0LmNoYXJBdChpICsgMSkpIDw8IDQpIHwgKGRlY29kZShiNjQuY2hhckF0KGkgKyAyKSkgPj4gMilcblx0XHRcdHB1c2goKHRtcCA+PiA4KSAmIDB4RkYpXG5cdFx0XHRwdXNoKHRtcCAmIDB4RkYpXG5cdFx0fVxuXG5cdFx0cmV0dXJuIGFyclxuXHR9XG5cblx0ZnVuY3Rpb24gdWludDhUb0Jhc2U2NCAodWludDgpIHtcblx0XHR2YXIgaSxcblx0XHRcdGV4dHJhQnl0ZXMgPSB1aW50OC5sZW5ndGggJSAzLCAvLyBpZiB3ZSBoYXZlIDEgYnl0ZSBsZWZ0LCBwYWQgMiBieXRlc1xuXHRcdFx0b3V0cHV0ID0gXCJcIixcblx0XHRcdHRlbXAsIGxlbmd0aFxuXG5cdFx0ZnVuY3Rpb24gZW5jb2RlIChudW0pIHtcblx0XHRcdHJldHVybiBsb29rdXAuY2hhckF0KG51bSlcblx0XHR9XG5cblx0XHRmdW5jdGlvbiB0cmlwbGV0VG9CYXNlNjQgKG51bSkge1xuXHRcdFx0cmV0dXJuIGVuY29kZShudW0gPj4gMTggJiAweDNGKSArIGVuY29kZShudW0gPj4gMTIgJiAweDNGKSArIGVuY29kZShudW0gPj4gNiAmIDB4M0YpICsgZW5jb2RlKG51bSAmIDB4M0YpXG5cdFx0fVxuXG5cdFx0Ly8gZ28gdGhyb3VnaCB0aGUgYXJyYXkgZXZlcnkgdGhyZWUgYnl0ZXMsIHdlJ2xsIGRlYWwgd2l0aCB0cmFpbGluZyBzdHVmZiBsYXRlclxuXHRcdGZvciAoaSA9IDAsIGxlbmd0aCA9IHVpbnQ4Lmxlbmd0aCAtIGV4dHJhQnl0ZXM7IGkgPCBsZW5ndGg7IGkgKz0gMykge1xuXHRcdFx0dGVtcCA9ICh1aW50OFtpXSA8PCAxNikgKyAodWludDhbaSArIDFdIDw8IDgpICsgKHVpbnQ4W2kgKyAyXSlcblx0XHRcdG91dHB1dCArPSB0cmlwbGV0VG9CYXNlNjQodGVtcClcblx0XHR9XG5cblx0XHQvLyBwYWQgdGhlIGVuZCB3aXRoIHplcm9zLCBidXQgbWFrZSBzdXJlIHRvIG5vdCBmb3JnZXQgdGhlIGV4dHJhIGJ5dGVzXG5cdFx0c3dpdGNoIChleHRyYUJ5dGVzKSB7XG5cdFx0XHRjYXNlIDE6XG5cdFx0XHRcdHRlbXAgPSB1aW50OFt1aW50OC5sZW5ndGggLSAxXVxuXHRcdFx0XHRvdXRwdXQgKz0gZW5jb2RlKHRlbXAgPj4gMilcblx0XHRcdFx0b3V0cHV0ICs9IGVuY29kZSgodGVtcCA8PCA0KSAmIDB4M0YpXG5cdFx0XHRcdG91dHB1dCArPSAnPT0nXG5cdFx0XHRcdGJyZWFrXG5cdFx0XHRjYXNlIDI6XG5cdFx0XHRcdHRlbXAgPSAodWludDhbdWludDgubGVuZ3RoIC0gMl0gPDwgOCkgKyAodWludDhbdWludDgubGVuZ3RoIC0gMV0pXG5cdFx0XHRcdG91dHB1dCArPSBlbmNvZGUodGVtcCA+PiAxMClcblx0XHRcdFx0b3V0cHV0ICs9IGVuY29kZSgodGVtcCA+PiA0KSAmIDB4M0YpXG5cdFx0XHRcdG91dHB1dCArPSBlbmNvZGUoKHRlbXAgPDwgMikgJiAweDNGKVxuXHRcdFx0XHRvdXRwdXQgKz0gJz0nXG5cdFx0XHRcdGJyZWFrXG5cdFx0fVxuXG5cdFx0cmV0dXJuIG91dHB1dFxuXHR9XG5cblx0ZXhwb3J0cy50b0J5dGVBcnJheSA9IGI2NFRvQnl0ZUFycmF5XG5cdGV4cG9ydHMuZnJvbUJ5dGVBcnJheSA9IHVpbnQ4VG9CYXNlNjRcbn0odHlwZW9mIGV4cG9ydHMgPT09ICd1bmRlZmluZWQnID8gKHRoaXMuYmFzZTY0anMgPSB7fSkgOiBleHBvcnRzKSlcbiIsImV4cG9ydHMucmVhZCA9IGZ1bmN0aW9uKGJ1ZmZlciwgb2Zmc2V0LCBpc0xFLCBtTGVuLCBuQnl0ZXMpIHtcbiAgdmFyIGUsIG0sXG4gICAgICBlTGVuID0gbkJ5dGVzICogOCAtIG1MZW4gLSAxLFxuICAgICAgZU1heCA9ICgxIDw8IGVMZW4pIC0gMSxcbiAgICAgIGVCaWFzID0gZU1heCA+PiAxLFxuICAgICAgbkJpdHMgPSAtNyxcbiAgICAgIGkgPSBpc0xFID8gKG5CeXRlcyAtIDEpIDogMCxcbiAgICAgIGQgPSBpc0xFID8gLTEgOiAxLFxuICAgICAgcyA9IGJ1ZmZlcltvZmZzZXQgKyBpXTtcblxuICBpICs9IGQ7XG5cbiAgZSA9IHMgJiAoKDEgPDwgKC1uQml0cykpIC0gMSk7XG4gIHMgPj49ICgtbkJpdHMpO1xuICBuQml0cyArPSBlTGVuO1xuICBmb3IgKDsgbkJpdHMgPiAwOyBlID0gZSAqIDI1NiArIGJ1ZmZlcltvZmZzZXQgKyBpXSwgaSArPSBkLCBuQml0cyAtPSA4KTtcblxuICBtID0gZSAmICgoMSA8PCAoLW5CaXRzKSkgLSAxKTtcbiAgZSA+Pj0gKC1uQml0cyk7XG4gIG5CaXRzICs9IG1MZW47XG4gIGZvciAoOyBuQml0cyA+IDA7IG0gPSBtICogMjU2ICsgYnVmZmVyW29mZnNldCArIGldLCBpICs9IGQsIG5CaXRzIC09IDgpO1xuXG4gIGlmIChlID09PSAwKSB7XG4gICAgZSA9IDEgLSBlQmlhcztcbiAgfSBlbHNlIGlmIChlID09PSBlTWF4KSB7XG4gICAgcmV0dXJuIG0gPyBOYU4gOiAoKHMgPyAtMSA6IDEpICogSW5maW5pdHkpO1xuICB9IGVsc2Uge1xuICAgIG0gPSBtICsgTWF0aC5wb3coMiwgbUxlbik7XG4gICAgZSA9IGUgLSBlQmlhcztcbiAgfVxuICByZXR1cm4gKHMgPyAtMSA6IDEpICogbSAqIE1hdGgucG93KDIsIGUgLSBtTGVuKTtcbn07XG5cbmV4cG9ydHMud3JpdGUgPSBmdW5jdGlvbihidWZmZXIsIHZhbHVlLCBvZmZzZXQsIGlzTEUsIG1MZW4sIG5CeXRlcykge1xuICB2YXIgZSwgbSwgYyxcbiAgICAgIGVMZW4gPSBuQnl0ZXMgKiA4IC0gbUxlbiAtIDEsXG4gICAgICBlTWF4ID0gKDEgPDwgZUxlbikgLSAxLFxuICAgICAgZUJpYXMgPSBlTWF4ID4+IDEsXG4gICAgICBydCA9IChtTGVuID09PSAyMyA/IE1hdGgucG93KDIsIC0yNCkgLSBNYXRoLnBvdygyLCAtNzcpIDogMCksXG4gICAgICBpID0gaXNMRSA/IDAgOiAobkJ5dGVzIC0gMSksXG4gICAgICBkID0gaXNMRSA/IDEgOiAtMSxcbiAgICAgIHMgPSB2YWx1ZSA8IDAgfHwgKHZhbHVlID09PSAwICYmIDEgLyB2YWx1ZSA8IDApID8gMSA6IDA7XG5cbiAgdmFsdWUgPSBNYXRoLmFicyh2YWx1ZSk7XG5cbiAgaWYgKGlzTmFOKHZhbHVlKSB8fCB2YWx1ZSA9PT0gSW5maW5pdHkpIHtcbiAgICBtID0gaXNOYU4odmFsdWUpID8gMSA6IDA7XG4gICAgZSA9IGVNYXg7XG4gIH0gZWxzZSB7XG4gICAgZSA9IE1hdGguZmxvb3IoTWF0aC5sb2codmFsdWUpIC8gTWF0aC5MTjIpO1xuICAgIGlmICh2YWx1ZSAqIChjID0gTWF0aC5wb3coMiwgLWUpKSA8IDEpIHtcbiAgICAgIGUtLTtcbiAgICAgIGMgKj0gMjtcbiAgICB9XG4gICAgaWYgKGUgKyBlQmlhcyA+PSAxKSB7XG4gICAgICB2YWx1ZSArPSBydCAvIGM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbHVlICs9IHJ0ICogTWF0aC5wb3coMiwgMSAtIGVCaWFzKTtcbiAgICB9XG4gICAgaWYgKHZhbHVlICogYyA+PSAyKSB7XG4gICAgICBlKys7XG4gICAgICBjIC89IDI7XG4gICAgfVxuXG4gICAgaWYgKGUgKyBlQmlhcyA+PSBlTWF4KSB7XG4gICAgICBtID0gMDtcbiAgICAgIGUgPSBlTWF4O1xuICAgIH0gZWxzZSBpZiAoZSArIGVCaWFzID49IDEpIHtcbiAgICAgIG0gPSAodmFsdWUgKiBjIC0gMSkgKiBNYXRoLnBvdygyLCBtTGVuKTtcbiAgICAgIGUgPSBlICsgZUJpYXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIG0gPSB2YWx1ZSAqIE1hdGgucG93KDIsIGVCaWFzIC0gMSkgKiBNYXRoLnBvdygyLCBtTGVuKTtcbiAgICAgIGUgPSAwO1xuICAgIH1cbiAgfVxuXG4gIGZvciAoOyBtTGVuID49IDg7IGJ1ZmZlcltvZmZzZXQgKyBpXSA9IG0gJiAweGZmLCBpICs9IGQsIG0gLz0gMjU2LCBtTGVuIC09IDgpO1xuXG4gIGUgPSAoZSA8PCBtTGVuKSB8IG07XG4gIGVMZW4gKz0gbUxlbjtcbiAgZm9yICg7IGVMZW4gPiAwOyBidWZmZXJbb2Zmc2V0ICsgaV0gPSBlICYgMHhmZiwgaSArPSBkLCBlIC89IDI1NiwgZUxlbiAtPSA4KTtcblxuICBidWZmZXJbb2Zmc2V0ICsgaSAtIGRdIHw9IHMgKiAxMjg7XG59O1xuIl19
