(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/admin/Documents/GitHub/GeoForce/Config/layers/all.js":[function(require,module,exports){
module.exports = {


};

},{}],"/Users/admin/Documents/GitHub/GeoForce/Config/layers/basemaps.js":[function(require,module,exports){
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
    'toner',
    'dark',
    'github',
    'natgeo',
    'usgstopo',
    'esritopo',
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

  // redcross: {
  //   url: 'https://{s}.tiles.mapbox.com/v3/americanredcross.hcji22de/{z}/{x}/{y}.png',
  //   name: 'Red Cross',
  //   type: 'basemap'
  // },

  satellite: {
    url: 'https://{s}.tiles.mapbox.com/v3/examples.map-qfyrx5r8/{z}/{x}/{y}.png',
    name: 'Mapbox Satellite',
    type: 'basemap'
  },

  github: {
    url: 'http://{s}.tiles.mapbox.com/v3/github.map-xgq2svrz/{z}/{x}/{y}.png',
    name: 'Github',
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

},{}],"/Users/admin/Documents/GitHub/GeoForce/Config/layers/disaster.js":[function(require,module,exports){
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

},{}],"/Users/admin/Documents/GitHub/GeoForce/Config/layers/other.js":[function(require,module,exports){
module.exports = {

  snow: {
    name: 'Snow',
    type: 'xyz',
    theme: 'other',
    url: 'http://{s}.tile.openweathermap.org/map/snow/{z}/{x}/{y}.png'
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
  },

  rflinstructors: {
    name: 'RFL Instructors',
    type: 'geojson',
    theme: 'other',
    url: 'https://gist.githubusercontent.com/danbjoseph/711f92bfae1b11eee1e9/raw/rfl-instructors.geojson'
  },

  missingmaps_mapathons: {
    name: 'Missing Maps Mapathons',
    type: 'geojson',
    theme: 'other',
    url: 'https://raw.githubusercontent.com/MissingMaps/missingmaps.github.io/master/data/events.json'
  },
  //Infrom Risk Layers
  inform_world_index: {
    name: 'Inform World Risk Index',
    type: 'geojson',
    theme: 'other',
    url: 'https://raw.githubusercontent.com/AmericanRedCross/risklayers/master/inform/INFORM_world_index.geojson'
  },
  inform_world_index_natural_hazards: {
    name: 'Inform Natural Hazards',
    type: 'geojson',
    theme: 'other',
    url: 'https://raw.githubusercontent.com/AmericanRedCross/risklayers/master/inform/INFORM_world_index_natural_hazard.geojson'
  },
  inform_world_index_topline: {
    name: 'Inform Risk Top Line',
    type: 'geojson',
    theme: 'other',
    url: 'https://raw.githubusercontent.com/AmericanRedCross/risklayers/master/inform/INFORM_world_index_topline_metrics.geojson'
  },
  wri_risk2014: {
    name: 'World Risk Index 2014',
    type: 'geojson',
    theme: 'other',
    url: 'https://raw.githubusercontent.com/AmericanRedCross/risklayers/master/WRI_risk2014.geojson'
  },
  active_hurricane: {
    name: 'Active Hurricanes',
    type: 'kml',
    theme: 'other',
    url: 'http://www.nhc.noaa.gov/gis/kml/nhc_active.kml'
  },
  arc_offices: {
    name: 'ISD Offices',
    type: 'geojson',
    theme: 'other',
    url: 'https://gist.githubusercontent.com/dalekunce/eaa40f314ad5a6d28a6e/raw/arc_offices.geojson'
  },
  redcross_offices: {
    name: 'Red Cross Offices World Wide',
    type: 'geojson',
    theme: 'other',
    url: 'https://gist.githubusercontent.com/dalekunce/5fb2a4b37cd86e7cb82e/raw/9c41579bfedf5a0a50c9a7afea06d16dc3ca9eb2/rcrc_locations.geojson'
  }

};

},{}],"/Users/admin/Documents/GitHub/GeoForce/Config/layers/project.js":[function(require,module,exports){
module.exports = {

  //Note - as of April 12, 2015, this is returning empty images
  //landcover: {
  //  name: 'MODIS Landcover 2011',
  //  type: 'wms',
  //  theme: 'project',
  //  url: 'http://ags.servirlabs.net/arcgis/rest/services/Global/MODIS_Landcover_Type1_2011/MapServer/WMSServer',
  //  layers: '0',
  //  properties: {
  //    legend: ""
  //  }
  //}

};

},{}],"/Users/admin/Documents/GitHub/GeoForce/Config/layers/projectrisk.js":[function(require,module,exports){
module.exports = {

};

},{}],"/Users/admin/Documents/GitHub/GeoForce/Config/layers/vectortiles.js":[function(require,module,exports){
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
  url: "https://s3-us-west-2.amazonaws.com/vector-tiles/gadm0/{z}/{x}/{y}.pbf",

  //url: "http://{s}.spatialdevtiles.com/gadm0/{z}/{x}/{y}.pbf",
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

  url: "https://s3-us-west-2.amazonaws.com/vector-tiles/gadm1/{z}/{x}/{y}.pbf",

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

  url: "https://s3-us-west-2.amazonaws.com/vector-tiles/gadm2/{z}/{x}/{y}.pbf",

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


/**
 * Red Cross Regions
 */

var arcregions = {
  type: 'pbf',
  name: 'arcregions',
  //url: "http://localhost:3000/services/postgis/gadm0/geom_simplify_med/vector-tiles/{z}/{x}/{y}.pbf?fields=guid::character varying,name_0,year&labelpoints=true",
  //url: "http://localhost:3000/services/postgis/gadm0/geom_simplify_med/vector-tiles/{z}/{x}/{y}.pbf?fields=guid::character varying,name_0,year",

  url: "https://s3-us-west-2.amazonaws.com/vector-tiles/arc_regions/{z}/{x}/{y}.pbf",

  detailsUrl: 'services/custom/custom_operation?name=get:themebyguid&format=json&guids=:guids&gadm_level=-1&filters=:filters',
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
      PBFObject.fetchFeatureDetails(evt.feature.id, 0, evt.feature.properties.ARC_Region);
    }
  },
  onSelect: function(vtf, PBFObject){
    //When a selection has changed (likey when a label was clicked and the corresponding feature selected)
    if(vtf && vtf.id){
      //Do the onclick thing
      PBFObject.fetchFeatureDetails(vtf.id, 0, vtf.properties.ARC_Region);
    }
  }
}




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

      //Use the status to color the regions by status.
      if (ecosProperties.iroc_status__c) {

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
      else{
        //Look up the color in the dictionary, if status property is not around
        style.color = config.UNOCHAIconLookup[ecosProperties.disaster_type__c[0]].color;

        //Use the same outline
        style.outline = {
          color: ecos_border_color,
          size: ecos_border_thickness
        }
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
//var UNOCHAIconLookup = {
//
//  "Meteorological - Tropical Cyclone": {icon: "icon-disaster_cyclone", color: "rgba(255,0,0," + opacity + ")"},
//  "Floods": {icon: "icon-disaster_flood", color: "rgba(255,0,0," + opacity + ")"},
//  "Tsunami, Volcano": {icon: "icon-disaster_tsunami", color: "rgba(255,0,0," + opacity + ")"},
//  "Floods, Storm": {icon: "icon-disaster_flood", color: "rgba(255,0,0," + opacity + ")"},
//  "Tsunami": {icon: "icon-disaster_tsunami", color: "rgba(255,0,0," + opacity + ")"},
//  "Famine / Food Insecurity": {icon: "icon-cluster_food_security", color: "rgba(255,0,0," + opacity + ")"},
//  "Drought": {icon: "icon-disaster_drought", color: "rgba(255,0,0," + opacity + ")"},
//  "Meteorological - Tropical Cyclone;Hydrological - Floods": {icon: "icon-disaster_cyclone", color: "rgba(255,0,0," + opacity + ")"},
//  "Food Insecurity": {icon: "icon-cluster_food_security", color: "rgba(255,0,0," + opacity + ")"},
//  "Civil Unrest": {icon: "icon-people_rebel", color: "rgba(255,0,0," + opacity + ")"},
//  "Floods, Tropical Storm": {icon: "icon-disaster_flood", color: "rgba(255,0,0," + opacity + ")"},
//  "Complex Emergency": {icon: "icon-crisis_conflict", color: "rgba(255,0,0," + opacity + ")"},
//  "Epidemic": {icon: "icon-disaster_epidemic", color: "rgba(255,0,0," + opacity + ")"},
//  "Population Movement": {icon: "icon-crisis_population_displacement", color: "rgba(255,0,0," + opacity + ")"},
//  "Climatological - Drought": {icon: "icon-disaster_drought", color: "rgba(255,0,0," + opacity + ")"},
//  "Winter Storm": {icon: "icon-disaster_snowfall", color: "rgba(255,0,0," + opacity + ")"},
//  "Tropical Storm": {icon: "icon-disaster_heavy_rain", color: "rgba(255,0,0," + opacity + ")"},
//  "Earthquake, Tsunami": {icon: "icon-disaster_earthquake", color: "rgba(255,0,0," + opacity + ")"},
//  "Hydrological - Floods": {icon: "icon-disaster_flood", color: "rgba(255,0,0," + opacity + ")"},
//  "Landslide;Floods": {icon: "icon-disaster_landslide", color: "rgba(255,0,0," + opacity + ")"},
//  "Earthquake": {icon: "icon-disaster_earthquake", color: "rgba(255,0,0," + opacity + ")"},
//  "Landslide;Hydrological - Floods": {icon: "icon-disaster_landslide", color: "rgba(255,0,0," + opacity + ")"}
//
//}

function buildDisasterTypeLabel(disasterType, color) {

  var backColor = "";
  var labelColor = "";
  if (disasterType) {

    backColor = color || "rgba(204,0,51,0.4)";

    if(color.indexOf("255,255,255") > -1){
      //if the label is white, make the text black
      labelColor = "#000";
    }
    else{
      labelColor = "#fff";
    }
  }

  var icon = config.UNOCHAIconLookup[disasterType].icon || 'icon-other_cluster_other';

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
  arcregions: arcregions,
  themeLayers: ["gadm0", "gadm1", "gadm2", "arcregions"] //a list of the theme layers - used to determine whether or not one is currently loaded or not.
};
},{}],"/Users/admin/Documents/GitHub/GeoForce/GeoAngular/app/lib/Leaflet.MapboxVectorTile/node_modules/pbf/index.js":[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9saWIvTGVhZmxldC5NYXBib3hWZWN0b3JUaWxlL25vZGVfbW9kdWxlcy9wYmYvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBpZWVlNzU0ID0gcmVxdWlyZSgnaWVlZTc1NCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFByb3RvYnVmO1xuZnVuY3Rpb24gUHJvdG9idWYoYnVmKSB7XG4gICAgdGhpcy5idWYgPSBidWY7XG4gICAgdGhpcy5wb3MgPSAwO1xufVxuXG5Qcm90b2J1Zi5wcm90b3R5cGUgPSB7XG4gICAgZ2V0IGxlbmd0aCgpIHsgcmV0dXJuIHRoaXMuYnVmLmxlbmd0aDsgfVxufTtcblxuUHJvdG9idWYuVmFyaW50ID0gMDtcblByb3RvYnVmLkludDY0ID0gMTtcblByb3RvYnVmLk1lc3NhZ2UgPSAyO1xuUHJvdG9idWYuU3RyaW5nID0gMjtcblByb3RvYnVmLlBhY2tlZCA9IDI7XG5Qcm90b2J1Zi5JbnQzMiA9IDU7XG5cblByb3RvYnVmLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5idWYgPSBudWxsO1xufTtcblxuLy8gPT09IFJFQURJTkcgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuUHJvdG9idWYucHJvdG90eXBlLnJlYWRVSW50MzIgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgdmFsID0gdGhpcy5idWYucmVhZFVJbnQzMkxFKHRoaXMucG9zKTtcbiAgICB0aGlzLnBvcyArPSA0O1xuICAgIHJldHVybiB2YWw7XG59O1xuXG5Qcm90b2J1Zi5wcm90b3R5cGUucmVhZFVJbnQ2NCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciB2YWwgPSB0aGlzLmJ1Zi5yZWFkVUludDY0TEUodGhpcy5wb3MpO1xuICAgIHRoaXMucG9zICs9IDg7XG4gICAgcmV0dXJuIHZhbDtcbn07XG5cblByb3RvYnVmLnByb3RvdHlwZS5yZWFkRG91YmxlID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHZhbCA9IGllZWU3NTQucmVhZCh0aGlzLmJ1ZiwgdGhpcy5wb3MsIHRydWUsIDUyLCA4KTtcbiAgICB0aGlzLnBvcyArPSA4O1xuICAgIHJldHVybiB2YWw7XG59O1xuXG5Qcm90b2J1Zi5wcm90b3R5cGUucmVhZFZhcmludCA9IGZ1bmN0aW9uKCkge1xuICAgIC8vIFRPRE86IGJvdW5kcyBjaGVja2luZ1xuICAgIHZhciBwb3MgPSB0aGlzLnBvcztcbiAgICBpZiAodGhpcy5idWZbcG9zXSA8PSAweDdmKSB7XG4gICAgICAgIHRoaXMucG9zKys7XG4gICAgICAgIHJldHVybiB0aGlzLmJ1Zltwb3NdO1xuICAgIH0gZWxzZSBpZiAodGhpcy5idWZbcG9zICsgMV0gPD0gMHg3Zikge1xuICAgICAgICB0aGlzLnBvcyArPSAyO1xuICAgICAgICByZXR1cm4gKHRoaXMuYnVmW3Bvc10gJiAweDdmKSB8ICh0aGlzLmJ1Zltwb3MgKyAxXSA8PCA3KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuYnVmW3BvcyArIDJdIDw9IDB4N2YpIHtcbiAgICAgICAgdGhpcy5wb3MgKz0gMztcbiAgICAgICAgcmV0dXJuICh0aGlzLmJ1Zltwb3NdICYgMHg3ZikgfCAodGhpcy5idWZbcG9zICsgMV0gJiAweDdmKSA8PCA3IHwgKHRoaXMuYnVmW3BvcyArIDJdKSA8PCAxNDtcbiAgICB9IGVsc2UgaWYgKHRoaXMuYnVmW3BvcyArIDNdIDw9IDB4N2YpIHtcbiAgICAgICAgdGhpcy5wb3MgKz0gNDtcbiAgICAgICAgcmV0dXJuICh0aGlzLmJ1Zltwb3NdICYgMHg3ZikgfCAodGhpcy5idWZbcG9zICsgMV0gJiAweDdmKSA8PCA3IHwgKHRoaXMuYnVmW3BvcyArIDJdICYgMHg3ZikgPDwgMTQgfCAodGhpcy5idWZbcG9zICsgM10pIDw8IDIxO1xuICAgIH0gZWxzZSBpZiAodGhpcy5idWZbcG9zICsgNF0gPD0gMHg3Zikge1xuICAgICAgICB0aGlzLnBvcyArPSA1O1xuICAgICAgICByZXR1cm4gKCh0aGlzLmJ1Zltwb3NdICYgMHg3ZikgfCAodGhpcy5idWZbcG9zICsgMV0gJiAweDdmKSA8PCA3IHwgKHRoaXMuYnVmW3BvcyArIDJdICYgMHg3ZikgPDwgMTQgfCAodGhpcy5idWZbcG9zICsgM10pIDw8IDIxKSArICh0aGlzLmJ1Zltwb3MgKyA0XSAqIDI2ODQzNTQ1Nik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5za2lwKFByb3RvYnVmLlZhcmludCk7XG4gICAgICAgIHJldHVybiAwO1xuICAgICAgICAvLyB0aHJvdyBuZXcgRXJyb3IoXCJUT0RPOiBIYW5kbGUgNisgYnl0ZSB2YXJpbnRzXCIpO1xuICAgIH1cbn07XG5cblByb3RvYnVmLnByb3RvdHlwZS5yZWFkU1ZhcmludCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBudW0gPSB0aGlzLnJlYWRWYXJpbnQoKTtcbiAgICBpZiAobnVtID4gMjE0NzQ4MzY0NykgdGhyb3cgbmV3IEVycm9yKCdUT0RPOiBIYW5kbGUgbnVtYmVycyA+PSAyXjMwJyk7XG4gICAgLy8gemlnemFnIGVuY29kaW5nXG4gICAgcmV0dXJuICgobnVtID4+IDEpIF4gLShudW0gJiAxKSk7XG59O1xuXG5Qcm90b2J1Zi5wcm90b3R5cGUucmVhZFN0cmluZyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBieXRlcyA9IHRoaXMucmVhZFZhcmludCgpO1xuICAgIC8vIFRPRE86IGJvdW5kcyBjaGVja2luZ1xuICAgIHZhciBjaHIgPSBTdHJpbmcuZnJvbUNoYXJDb2RlO1xuICAgIHZhciBiID0gdGhpcy5idWY7XG4gICAgdmFyIHAgPSB0aGlzLnBvcztcbiAgICB2YXIgZW5kID0gdGhpcy5wb3MgKyBieXRlcztcbiAgICB2YXIgc3RyID0gJyc7XG4gICAgd2hpbGUgKHAgPCBlbmQpIHtcbiAgICAgICAgaWYgKGJbcF0gPD0gMHg3Rikgc3RyICs9IGNocihiW3ArK10pO1xuICAgICAgICBlbHNlIGlmIChiW3BdIDw9IDB4QkYpIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBVVEYtOCBjb2RlcG9pbnQ6ICcgKyBiW3BdKTtcbiAgICAgICAgZWxzZSBpZiAoYltwXSA8PSAweERGKSBzdHIgKz0gY2hyKChiW3ArK10gJiAweDFGKSA8PCA2IHwgKGJbcCsrXSAmIDB4M0YpKTtcbiAgICAgICAgZWxzZSBpZiAoYltwXSA8PSAweEVGKSBzdHIgKz0gY2hyKChiW3ArK10gJiAweDFGKSA8PCAxMiB8IChiW3ArK10gJiAweDNGKSA8PCA2IHwgKGJbcCsrXSAmIDB4M0YpKTtcbiAgICAgICAgZWxzZSBpZiAoYltwXSA8PSAweEY3KSBwICs9IDQ7IC8vIFdlIGNhbid0IGhhbmRsZSB0aGVzZSBjb2RlcG9pbnRzIGluIEpTLCBzbyBza2lwLlxuICAgICAgICBlbHNlIGlmIChiW3BdIDw9IDB4RkIpIHAgKz0gNTtcbiAgICAgICAgZWxzZSBpZiAoYltwXSA8PSAweEZEKSBwICs9IDY7XG4gICAgICAgIGVsc2UgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIFVURi04IGNvZGVwb2ludDogJyArIGJbcF0pO1xuICAgIH1cbiAgICB0aGlzLnBvcyArPSBieXRlcztcbiAgICByZXR1cm4gc3RyO1xufTtcblxuUHJvdG9idWYucHJvdG90eXBlLnJlYWRCdWZmZXIgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgYnl0ZXMgPSB0aGlzLnJlYWRWYXJpbnQoKTtcbiAgICB2YXIgYnVmZmVyID0gdGhpcy5idWYuc3ViYXJyYXkodGhpcy5wb3MsIHRoaXMucG9zICsgYnl0ZXMpO1xuICAgIHRoaXMucG9zICs9IGJ5dGVzO1xuICAgIHJldHVybiBidWZmZXI7XG59O1xuXG5Qcm90b2J1Zi5wcm90b3R5cGUucmVhZFBhY2tlZCA9IGZ1bmN0aW9uKHR5cGUpIHtcbiAgICAvLyBUT0RPOiBib3VuZHMgY2hlY2tpbmdcbiAgICB2YXIgYnl0ZXMgPSB0aGlzLnJlYWRWYXJpbnQoKTtcbiAgICB2YXIgZW5kID0gdGhpcy5wb3MgKyBieXRlcztcbiAgICB2YXIgYXJyYXkgPSBbXTtcbiAgICB3aGlsZSAodGhpcy5wb3MgPCBlbmQpIHtcbiAgICAgICAgYXJyYXkucHVzaCh0aGlzWydyZWFkJyArIHR5cGVdKCkpO1xuICAgIH1cbiAgICByZXR1cm4gYXJyYXk7XG59O1xuXG5Qcm90b2J1Zi5wcm90b3R5cGUuc2tpcCA9IGZ1bmN0aW9uKHZhbCkge1xuICAgIC8vIFRPRE86IGJvdW5kcyBjaGVja2luZ1xuICAgIHZhciB0eXBlID0gdmFsICYgMHg3O1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAvKiB2YXJpbnQgKi8gY2FzZSBQcm90b2J1Zi5WYXJpbnQ6IHdoaWxlICh0aGlzLmJ1Zlt0aGlzLnBvcysrXSA+IDB4N2YpOyBicmVhaztcbiAgICAgICAgLyogNjQgYml0ICovIGNhc2UgUHJvdG9idWYuSW50NjQ6IHRoaXMucG9zICs9IDg7IGJyZWFrO1xuICAgICAgICAvKiBsZW5ndGggKi8gY2FzZSBQcm90b2J1Zi5NZXNzYWdlOiB2YXIgYnl0ZXMgPSB0aGlzLnJlYWRWYXJpbnQoKTsgdGhpcy5wb3MgKz0gYnl0ZXM7IGJyZWFrO1xuICAgICAgICAvKiAzMiBiaXQgKi8gY2FzZSBQcm90b2J1Zi5JbnQzMjogdGhpcy5wb3MgKz0gNDsgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6IHRocm93IG5ldyBFcnJvcignVW5pbXBsZW1lbnRlZCB0eXBlOiAnICsgdHlwZSk7XG4gICAgfVxufTtcblxuLy8gPT09IFdSSVRJTkcgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuUHJvdG9idWYucHJvdG90eXBlLndyaXRlVGFnID0gZnVuY3Rpb24odGFnLCB0eXBlKSB7XG4gICAgdGhpcy53cml0ZVZhcmludCgodGFnIDw8IDMpIHwgdHlwZSk7XG59O1xuXG5Qcm90b2J1Zi5wcm90b3R5cGUucmVhbGxvYyA9IGZ1bmN0aW9uKG1pbikge1xuICAgIHZhciBsZW5ndGggPSB0aGlzLmJ1Zi5sZW5ndGg7XG4gICAgd2hpbGUgKGxlbmd0aCA8IHRoaXMucG9zICsgbWluKSBsZW5ndGggKj0gMjtcbiAgICBpZiAobGVuZ3RoICE9IHRoaXMuYnVmLmxlbmd0aCkge1xuICAgICAgICB2YXIgYnVmID0gbmV3IEJ1ZmZlcihsZW5ndGgpO1xuICAgICAgICB0aGlzLmJ1Zi5jb3B5KGJ1Zik7XG4gICAgICAgIHRoaXMuYnVmID0gYnVmO1xuICAgIH1cbn07XG5cblByb3RvYnVmLnByb3RvdHlwZS5maW5pc2ggPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5idWYuc2xpY2UoMCwgdGhpcy5wb3MpO1xufTtcblxuUHJvdG9idWYucHJvdG90eXBlLndyaXRlUGFja2VkID0gZnVuY3Rpb24odHlwZSwgdGFnLCBpdGVtcykge1xuICAgIGlmICghaXRlbXMubGVuZ3RoKSByZXR1cm47XG5cbiAgICB2YXIgbWVzc2FnZSA9IG5ldyBQcm90b2J1ZigpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbWVzc2FnZVsnd3JpdGUnICsgdHlwZV0oaXRlbXNbaV0pO1xuICAgIH1cbiAgICB2YXIgZGF0YSA9IG1lc3NhZ2UuZmluaXNoKCk7XG5cbiAgICB0aGlzLndyaXRlVGFnKHRhZywgUHJvdG9idWYuUGFja2VkKTtcbiAgICB0aGlzLndyaXRlQnVmZmVyKGRhdGEpO1xufTtcblxuUHJvdG9idWYucHJvdG90eXBlLndyaXRlVUludDMyID0gZnVuY3Rpb24odmFsKSB7XG4gICAgdGhpcy5yZWFsbG9jKDQpO1xuICAgIHRoaXMuYnVmLndyaXRlVUludDMyTEUodmFsLCB0aGlzLnBvcyk7XG4gICAgdGhpcy5wb3MgKz0gNDtcbn07XG5cblByb3RvYnVmLnByb3RvdHlwZS53cml0ZVRhZ2dlZFVJbnQzMiA9IGZ1bmN0aW9uKHRhZywgdmFsKSB7XG4gICAgdGhpcy53cml0ZVRhZyh0YWcsIFByb3RvYnVmLkludDMyKTtcbiAgICB0aGlzLndyaXRlVUludDMyKHZhbCk7XG59O1xuXG5Qcm90b2J1Zi5wcm90b3R5cGUud3JpdGVWYXJpbnQgPSBmdW5jdGlvbih2YWwpIHtcbiAgICB2YWwgPSBOdW1iZXIodmFsKTtcbiAgICBpZiAoaXNOYU4odmFsKSkge1xuICAgICAgICB2YWwgPSAwO1xuICAgIH1cblxuICAgIGlmICh2YWwgPD0gMHg3Zikge1xuICAgICAgICB0aGlzLnJlYWxsb2MoMSk7XG4gICAgICAgIHRoaXMuYnVmW3RoaXMucG9zKytdID0gdmFsO1xuICAgIH0gZWxzZSBpZiAodmFsIDw9IDB4M2ZmZikge1xuICAgICAgICB0aGlzLnJlYWxsb2MoMik7XG4gICAgICAgIHRoaXMuYnVmW3RoaXMucG9zKytdID0gMHg4MCB8ICgodmFsID4+PiAwKSAmIDB4N2YpO1xuICAgICAgICB0aGlzLmJ1Zlt0aGlzLnBvcysrXSA9IDB4MDAgfCAoKHZhbCA+Pj4gNykgJiAweDdmKTtcbiAgICB9IGVsc2UgaWYgKHZhbCA8PSAweDFmZmZmZmYpIHtcbiAgICAgICAgdGhpcy5yZWFsbG9jKDMpO1xuICAgICAgICB0aGlzLmJ1Zlt0aGlzLnBvcysrXSA9IDB4ODAgfCAoKHZhbCA+Pj4gMCkgJiAweDdmKTtcbiAgICAgICAgdGhpcy5idWZbdGhpcy5wb3MrK10gPSAweDgwIHwgKCh2YWwgPj4+IDcpICYgMHg3Zik7XG4gICAgICAgIHRoaXMuYnVmW3RoaXMucG9zKytdID0gMHgwMCB8ICgodmFsID4+PiAxNCkgJiAweDdmKTtcbiAgICB9IGVsc2UgaWYgKHZhbCA8PSAweGZmZmZmZmYpIHtcbiAgICAgICAgdGhpcy5yZWFsbG9jKDQpO1xuICAgICAgICB0aGlzLmJ1Zlt0aGlzLnBvcysrXSA9IDB4ODAgfCAoKHZhbCA+Pj4gMCkgJiAweDdmKTtcbiAgICAgICAgdGhpcy5idWZbdGhpcy5wb3MrK10gPSAweDgwIHwgKCh2YWwgPj4+IDcpICYgMHg3Zik7XG4gICAgICAgIHRoaXMuYnVmW3RoaXMucG9zKytdID0gMHg4MCB8ICgodmFsID4+PiAxNCkgJiAweDdmKTtcbiAgICAgICAgdGhpcy5idWZbdGhpcy5wb3MrK10gPSAweDAwIHwgKCh2YWwgPj4+IDIxKSAmIDB4N2YpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHdoaWxlICh2YWwgPiAwKSB7XG4gICAgICAgICAgICB2YXIgYiA9IHZhbCAmIDB4N2Y7XG4gICAgICAgICAgICB2YWwgPSBNYXRoLmZsb29yKHZhbCAvIDEyOCk7XG4gICAgICAgICAgICBpZiAodmFsID4gMCkgYiB8PSAweDgwXG4gICAgICAgICAgICB0aGlzLnJlYWxsb2MoMSk7XG4gICAgICAgICAgICB0aGlzLmJ1Zlt0aGlzLnBvcysrXSA9IGI7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5Qcm90b2J1Zi5wcm90b3R5cGUud3JpdGVUYWdnZWRWYXJpbnQgPSBmdW5jdGlvbih0YWcsIHZhbCkge1xuICAgIHRoaXMud3JpdGVUYWcodGFnLCBQcm90b2J1Zi5WYXJpbnQpO1xuICAgIHRoaXMud3JpdGVWYXJpbnQodmFsKTtcbn07XG5cblByb3RvYnVmLnByb3RvdHlwZS53cml0ZVNWYXJpbnQgPSBmdW5jdGlvbih2YWwpIHtcbiAgICBpZiAodmFsID49IDApIHtcbiAgICAgICAgdGhpcy53cml0ZVZhcmludCh2YWwgKiAyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLndyaXRlVmFyaW50KHZhbCAqIC0yIC0gMSk7XG4gICAgfVxufTtcblxuUHJvdG9idWYucHJvdG90eXBlLndyaXRlVGFnZ2VkU1ZhcmludCA9IGZ1bmN0aW9uKHRhZywgdmFsKSB7XG4gICAgdGhpcy53cml0ZVRhZyh0YWcsIFByb3RvYnVmLlZhcmludCk7XG4gICAgdGhpcy53cml0ZVNWYXJpbnQodmFsKTtcbn07XG5cblByb3RvYnVmLnByb3RvdHlwZS53cml0ZUJvb2xlYW4gPSBmdW5jdGlvbih2YWwpIHtcbiAgICB0aGlzLndyaXRlVmFyaW50KEJvb2xlYW4odmFsKSk7XG59O1xuXG5Qcm90b2J1Zi5wcm90b3R5cGUud3JpdGVUYWdnZWRCb29sZWFuID0gZnVuY3Rpb24odGFnLCB2YWwpIHtcbiAgICB0aGlzLndyaXRlVGFnZ2VkVmFyaW50KHRhZywgQm9vbGVhbih2YWwpKTtcbn07XG5cblByb3RvYnVmLnByb3RvdHlwZS53cml0ZVN0cmluZyA9IGZ1bmN0aW9uKHN0cikge1xuICAgIHN0ciA9IFN0cmluZyhzdHIpO1xuICAgIHZhciBieXRlcyA9IEJ1ZmZlci5ieXRlTGVuZ3RoKHN0cik7XG4gICAgdGhpcy53cml0ZVZhcmludChieXRlcyk7XG4gICAgdGhpcy5yZWFsbG9jKGJ5dGVzKTtcbiAgICB0aGlzLmJ1Zi53cml0ZShzdHIsIHRoaXMucG9zKTtcbiAgICB0aGlzLnBvcyArPSBieXRlcztcbn07XG5cblByb3RvYnVmLnByb3RvdHlwZS53cml0ZVRhZ2dlZFN0cmluZyA9IGZ1bmN0aW9uKHRhZywgc3RyKSB7XG4gICAgdGhpcy53cml0ZVRhZyh0YWcsIFByb3RvYnVmLlN0cmluZyk7XG4gICAgdGhpcy53cml0ZVN0cmluZyhzdHIpO1xufTtcblxuUHJvdG9idWYucHJvdG90eXBlLndyaXRlRmxvYXQgPSBmdW5jdGlvbih2YWwpIHtcbiAgICB0aGlzLnJlYWxsb2MoNCk7XG4gICAgdGhpcy5idWYud3JpdGVGbG9hdExFKHZhbCwgdGhpcy5wb3MpO1xuICAgIHRoaXMucG9zICs9IDQ7XG59O1xuXG5Qcm90b2J1Zi5wcm90b3R5cGUud3JpdGVUYWdnZWRGbG9hdCA9IGZ1bmN0aW9uKHRhZywgdmFsKSB7XG4gICAgdGhpcy53cml0ZVRhZyh0YWcsIFByb3RvYnVmLkludDMyKTtcbiAgICB0aGlzLndyaXRlRmxvYXQodmFsKTtcbn07XG5cblByb3RvYnVmLnByb3RvdHlwZS53cml0ZURvdWJsZSA9IGZ1bmN0aW9uKHZhbCkge1xuICAgIHRoaXMucmVhbGxvYyg4KTtcbiAgICB0aGlzLmJ1Zi53cml0ZURvdWJsZUxFKHZhbCwgdGhpcy5wb3MpO1xuICAgIHRoaXMucG9zICs9IDg7XG59O1xuXG5Qcm90b2J1Zi5wcm90b3R5cGUud3JpdGVUYWdnZWREb3VibGUgPSBmdW5jdGlvbih0YWcsIHZhbCkge1xuICAgIHRoaXMud3JpdGVUYWcodGFnLCBQcm90b2J1Zi5JbnQ2NCk7XG4gICAgdGhpcy53cml0ZURvdWJsZSh2YWwpO1xufTtcblxuUHJvdG9idWYucHJvdG90eXBlLndyaXRlQnVmZmVyID0gZnVuY3Rpb24oYnVmZmVyKSB7XG4gICAgdmFyIGJ5dGVzID0gYnVmZmVyLmxlbmd0aDtcbiAgICB0aGlzLndyaXRlVmFyaW50KGJ5dGVzKTtcbiAgICB0aGlzLnJlYWxsb2MoYnl0ZXMpO1xuICAgIGJ1ZmZlci5jb3B5KHRoaXMuYnVmLCB0aGlzLnBvcyk7XG4gICAgdGhpcy5wb3MgKz0gYnl0ZXM7XG59O1xuXG5Qcm90b2J1Zi5wcm90b3R5cGUud3JpdGVUYWdnZWRCdWZmZXIgPSBmdW5jdGlvbih0YWcsIGJ1ZmZlcikge1xuICAgIHRoaXMud3JpdGVUYWcodGFnLCBQcm90b2J1Zi5TdHJpbmcpO1xuICAgIHRoaXMud3JpdGVCdWZmZXIoYnVmZmVyKTtcbn07XG5cblByb3RvYnVmLnByb3RvdHlwZS53cml0ZU1lc3NhZ2UgPSBmdW5jdGlvbih0YWcsIHByb3RvYnVmKSB7XG4gICAgdmFyIGJ1ZmZlciA9IHByb3RvYnVmLmZpbmlzaCgpO1xuICAgIHRoaXMud3JpdGVUYWcodGFnLCBQcm90b2J1Zi5NZXNzYWdlKTtcbiAgICB0aGlzLndyaXRlQnVmZmVyKGJ1ZmZlcik7XG59O1xuIl19
},{"buffer":"/Users/admin/Documents/GitHub/GeoForce/GeoAngular/node_modules/browserify/node_modules/buffer/index.js","ieee754":"/Users/admin/Documents/GitHub/GeoForce/GeoAngular/app/lib/Leaflet.MapboxVectorTile/node_modules/pbf/node_modules/ieee754/index.js"}],"/Users/admin/Documents/GitHub/GeoForce/GeoAngular/app/lib/Leaflet.MapboxVectorTile/node_modules/pbf/node_modules/ieee754/index.js":[function(require,module,exports){
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

},{}],"/Users/admin/Documents/GitHub/GeoForce/GeoAngular/app/lib/Leaflet.MapboxVectorTile/node_modules/point-geometry/index.js":[function(require,module,exports){
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

},{}],"/Users/admin/Documents/GitHub/GeoForce/GeoAngular/app/lib/Leaflet.MapboxVectorTile/node_modules/vector-tile/index.js":[function(require,module,exports){
module.exports.VectorTile = require('./lib/vectortile.js');
module.exports.VectorTileFeature = require('./lib/vectortilefeature.js');
module.exports.VectorTileLayer = require('./lib/vectortilelayer.js');

},{"./lib/vectortile.js":"/Users/admin/Documents/GitHub/GeoForce/GeoAngular/app/lib/Leaflet.MapboxVectorTile/node_modules/vector-tile/lib/vectortile.js","./lib/vectortilefeature.js":"/Users/admin/Documents/GitHub/GeoForce/GeoAngular/app/lib/Leaflet.MapboxVectorTile/node_modules/vector-tile/lib/vectortilefeature.js","./lib/vectortilelayer.js":"/Users/admin/Documents/GitHub/GeoForce/GeoAngular/app/lib/Leaflet.MapboxVectorTile/node_modules/vector-tile/lib/vectortilelayer.js"}],"/Users/admin/Documents/GitHub/GeoForce/GeoAngular/app/lib/Leaflet.MapboxVectorTile/node_modules/vector-tile/lib/vectortile.js":[function(require,module,exports){
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

},{"./vectortilelayer":"/Users/admin/Documents/GitHub/GeoForce/GeoAngular/app/lib/Leaflet.MapboxVectorTile/node_modules/vector-tile/lib/vectortilelayer.js"}],"/Users/admin/Documents/GitHub/GeoForce/GeoAngular/app/lib/Leaflet.MapboxVectorTile/node_modules/vector-tile/lib/vectortilefeature.js":[function(require,module,exports){
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

},{"point-geometry":"/Users/admin/Documents/GitHub/GeoForce/GeoAngular/app/lib/Leaflet.MapboxVectorTile/node_modules/point-geometry/index.js"}],"/Users/admin/Documents/GitHub/GeoForce/GeoAngular/app/lib/Leaflet.MapboxVectorTile/node_modules/vector-tile/lib/vectortilelayer.js":[function(require,module,exports){
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

},{"./vectortilefeature.js":"/Users/admin/Documents/GitHub/GeoForce/GeoAngular/app/lib/Leaflet.MapboxVectorTile/node_modules/vector-tile/lib/vectortilefeature.js"}],"/Users/admin/Documents/GitHub/GeoForce/GeoAngular/app/lib/Leaflet.MapboxVectorTile/src/MVTFeature.js":[function(require,module,exports){
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


},{"./MVTUtil":"/Users/admin/Documents/GitHub/GeoForce/GeoAngular/app/lib/Leaflet.MapboxVectorTile/src/MVTUtil.js","./StaticLabel/StaticLabel.js":"/Users/admin/Documents/GitHub/GeoForce/GeoAngular/app/lib/Leaflet.MapboxVectorTile/src/StaticLabel/StaticLabel.js"}],"/Users/admin/Documents/GitHub/GeoForce/GeoAngular/app/lib/Leaflet.MapboxVectorTile/src/MVTLayer.js":[function(require,module,exports){
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

},{"./MVTFeature":"/Users/admin/Documents/GitHub/GeoForce/GeoAngular/app/lib/Leaflet.MapboxVectorTile/src/MVTFeature.js","./MVTUtil":"/Users/admin/Documents/GitHub/GeoForce/GeoAngular/app/lib/Leaflet.MapboxVectorTile/src/MVTUtil.js"}],"/Users/admin/Documents/GitHub/GeoForce/GeoAngular/app/lib/Leaflet.MapboxVectorTile/src/MVTSource.js":[function(require,module,exports){
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

},{"./MVTLayer":"/Users/admin/Documents/GitHub/GeoForce/GeoAngular/app/lib/Leaflet.MapboxVectorTile/src/MVTLayer.js","./MVTUtil":"/Users/admin/Documents/GitHub/GeoForce/GeoAngular/app/lib/Leaflet.MapboxVectorTile/src/MVTUtil.js","pbf":"/Users/admin/Documents/GitHub/GeoForce/GeoAngular/app/lib/Leaflet.MapboxVectorTile/node_modules/pbf/index.js","point-geometry":"/Users/admin/Documents/GitHub/GeoForce/GeoAngular/app/lib/Leaflet.MapboxVectorTile/node_modules/point-geometry/index.js","vector-tile":"/Users/admin/Documents/GitHub/GeoForce/GeoAngular/app/lib/Leaflet.MapboxVectorTile/node_modules/vector-tile/index.js"}],"/Users/admin/Documents/GitHub/GeoForce/GeoAngular/app/lib/Leaflet.MapboxVectorTile/src/MVTUtil.js":[function(require,module,exports){
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

},{}],"/Users/admin/Documents/GitHub/GeoForce/GeoAngular/app/lib/Leaflet.MapboxVectorTile/src/StaticLabel/StaticLabel.js":[function(require,module,exports){
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

},{"../MVTUtil":"/Users/admin/Documents/GitHub/GeoForce/GeoAngular/app/lib/Leaflet.MapboxVectorTile/src/MVTUtil.js"}],"/Users/admin/Documents/GitHub/GeoForce/GeoAngular/app/lib/featurelabel/FeatureSet.js":[function(require,module,exports){
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

},{"./Label.js":"/Users/admin/Documents/GitHub/GeoForce/GeoAngular/app/lib/featurelabel/Label.js","./featurelabel":"/Users/admin/Documents/GitHub/GeoForce/GeoAngular/app/lib/featurelabel/featurelabel.js"}],"/Users/admin/Documents/GitHub/GeoForce/GeoAngular/app/lib/featurelabel/Label.js":[function(require,module,exports){
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

},{}],"/Users/admin/Documents/GitHub/GeoForce/GeoAngular/app/lib/featurelabel/featurelabel.js":[function(require,module,exports){
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

},{"./leaflet-patch":"/Users/admin/Documents/GitHub/GeoForce/GeoAngular/app/lib/featurelabel/leaflet-patch.js"}],"/Users/admin/Documents/GitHub/GeoForce/GeoAngular/app/lib/featurelabel/leaflet-patch.js":[function(require,module,exports){
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
},{"./featurelabel":"/Users/admin/Documents/GitHub/GeoForce/GeoAngular/app/lib/featurelabel/featurelabel.js"}],"/Users/admin/Documents/GitHub/GeoForce/GeoAngular/app/scripts/app.js":[function(require,module,exports){
/**
 * This is the entry point of the application. We declare the main module here and then configure the main router
 * that creates corresponding views. The array parameter for module declares this module's dependencies.
 */
var GeoAngular = angular.module('GeoAngular', ['angularFileUpload', 'ngCookies', 'ngResource', 'ngSanitize', 'ngRoute', 'ui.router', 'ngAnimate', 'ui.bootstrap', 'ui.slider', 'ngMaterial']);

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
    .when('/default', '/map@0.1,0.1,2(osmhot,gadm0),project')
    .otherwise(localStorage.getItem('mapfolioRoute') || '/map@1,1,2(osmhot,gadm0),project');

  $stateProvider
    .state('main', {
      url: '/map@:lat,:lng,:zoom(*layers),:theme?zoom-extent&stories&layers-panel&filters-panel&filters&legend&basemaps&info&title&details-panel&search-panel&sf_id&level&themelabels&category&legend-panel&fullscreen',
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
      url: '/map@:lat,:lng,:zoom(*layers),:theme/upload?zoom-extent&stories&layers-panel&filters-panel&filters&legend&basemaps&info&title&details-panel&search-panel&sf_id&level&themelabels&category&legend-panel&fullscreen',
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
      url: '/map@:lat,:lng,:zoom(*layers),:theme/export?zoom-extent&stories&layers-panel&filters-panel&filters&legend&basemaps&info&title&details-panel&search-panel&sf_id&level&themelabels&category&legend-panel&fullscreen',
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


},{"../lib/Leaflet.MapboxVectorTile/src/MVTSource.js":"/Users/admin/Documents/GitHub/GeoForce/GeoAngular/app/lib/Leaflet.MapboxVectorTile/src/MVTSource.js","./controllers/basemaps":"/Users/admin/Documents/GitHub/GeoForce/GeoAngular/app/scripts/controllers/basemaps.js","./controllers/breadcrumbs":"/Users/admin/Documents/GitHub/GeoForce/GeoAngular/app/scripts/controllers/breadcrumbs.js","./controllers/details":"/Users/admin/Documents/GitHub/GeoForce/GeoAngular/app/scripts/controllers/details.js","./controllers/export":"/Users/admin/Documents/GitHub/GeoForce/GeoAngular/app/scripts/controllers/export.js","./controllers/filters":"/Users/admin/Documents/GitHub/GeoForce/GeoAngular/app/scripts/controllers/filters.js","./controllers/info":"/Users/admin/Documents/GitHub/GeoForce/GeoAngular/app/scripts/controllers/info.js","./controllers/layers":"/Users/admin/Documents/GitHub/GeoForce/GeoAngular/app/scripts/controllers/layers.js","./controllers/legend":"/Users/admin/Documents/GitHub/GeoForce/GeoAngular/app/scripts/controllers/legend.js","./controllers/main":"/Users/admin/Documents/GitHub/GeoForce/GeoAngular/app/scripts/controllers/main.js","./controllers/map":"/Users/admin/Documents/GitHub/GeoForce/GeoAngular/app/scripts/controllers/map.js","./controllers/navbar":"/Users/admin/Documents/GitHub/GeoForce/GeoAngular/app/scripts/controllers/navbar.js","./controllers/search":"/Users/admin/Documents/GitHub/GeoForce/GeoAngular/app/scripts/controllers/search.js","./controllers/side-view":"/Users/admin/Documents/GitHub/GeoForce/GeoAngular/app/scripts/controllers/side-view.js","./controllers/stories":"/Users/admin/Documents/GitHub/GeoForce/GeoAngular/app/scripts/controllers/stories.js","./controllers/theme":"/Users/admin/Documents/GitHub/GeoForce/GeoAngular/app/scripts/controllers/theme.js","./controllers/upload":"/Users/admin/Documents/GitHub/GeoForce/GeoAngular/app/scripts/controllers/upload.js","./controllers/zoom-extent":"/Users/admin/Documents/GitHub/GeoForce/GeoAngular/app/scripts/controllers/zoom-extent.js","./services/Donuts":"/Users/admin/Documents/GitHub/GeoForce/GeoAngular/app/scripts/services/Donuts.js","./services/LayerConfig":"/Users/admin/Documents/GitHub/GeoForce/GeoAngular/app/scripts/services/LayerConfig.js","./services/StoriesConfig":"/Users/admin/Documents/GitHub/GeoForce/GeoAngular/app/scripts/services/StoriesConfig.js","./services/Vector/VectorProvider":"/Users/admin/Documents/GitHub/GeoForce/GeoAngular/app/scripts/services/Vector/VectorProvider.js"}],"/Users/admin/Documents/GitHub/GeoForce/GeoAngular/app/scripts/controllers/basemaps.js":[function(require,module,exports){
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
},{}],"/Users/admin/Documents/GitHub/GeoForce/GeoAngular/app/scripts/controllers/breadcrumbs.js":[function(require,module,exports){
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

},{}],"/Users/admin/Documents/GitHub/GeoForce/GeoAngular/app/scripts/controllers/details.js":[function(require,module,exports){
/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *       on 4/9/14.
 */

module.exports = angular.module('GeoAngular').controller('DetailsCtrl', function ($scope, $rootScope, $state, $stateParams, $http, Donuts, $filter) {

  $scope.details = {};
  $scope.navTab = 'details';

  $scope.salesforceUrl = config.salesforceUrl;

  $http.get('succubus_gitignore/sf-object-field-hash.json', {cached: true}).success(function(sfFieldHash) {
    $scope.sfFieldHash = sfFieldHash;
    $scope.ProjectBusinessUnit = sfFieldHash["Project__c"]["business_unit__c"]["picklistValues"];
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
    if ($stateParams.theme.indexOf('disaster') !== -1) {

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


    //if ($stateParams.theme === 'projectHealth') {
    //  // project
    //  if ($scope.sfFieldHash.Project__c[key]) {
    //    desc = $scope.sfFieldHash.Project__c[key].label || key;
    //  }
    //
    //  if ($scope.sfFieldHash.Location__c[key]) {
    //    desc = $scope.sfFieldHash.Location__c[key].label || key;
    //  }
    //
    //  if ($scope.sfFieldHash.Project_Evaluation__c[key]) {
    //    desc = $scope.sfFieldHash.Project_Evaluation__c[key].label || key;
    //  }
    //
    //  return desc;
    //}

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

    //if ($stateParams.theme === 'projectHealth') {
    //  if ($scope.sfFieldHash.Project__c[key]) {
    //    desc = $scope.sfFieldHash.Project__c[key].inlineHelpText || '';
    //  }
    //
    //  if ($scope.sfFieldHash.Location__c[key]) {
    //    desc = $scope.sfFieldHash.Location__c[key].inlineHelpText || '';
    //  }
    //
    //  if ($scope.sfFieldHash.Project_Evaluation__c[key]) {
    //    desc = $scope.sfFieldHash.Project_Evaluation__c[key].inlineHelpText || '';
    //  }
    //  return desc + ' FieldName: ' + key;
    //}

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
      //$scope.numThemeItems = 1; //non sales force features
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
    //
    if(!$scope.$$phase) {
      $scope.$apply(function(){
        $scope.details = removeUnwantedItems(formatDetails(item, $stateParams.theme), $stateParams.theme);
      });
    } else {
      $scope.details = removeUnwantedItems(formatDetails(item, $stateParams.theme), $stateParams.theme);
    }

      //$scope.details = removeUnwantedItems(formatDetails(item, $stateParams.theme), $stateParams.theme);

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
    //else if (type === 'projectHealth' || type === 'status') {
    //  blacklistDictionary = config.unwantedProjectHealthDetails;
    //}

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

    if (type.indexOf('disaster') !== -1) {
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
    //else if (type === 'projectHealth' || type === 'status') {
    //  formattingDictionary = config.projectHealthDetailsFormatting;
    //}

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

	//Connect the window onresize end event
  window.addEventListener("resize", $scope.resizeDetailsPanel);


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

},{}],"/Users/admin/Documents/GitHub/GeoForce/GeoAngular/app/scripts/controllers/export.js":[function(require,module,exports){
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

},{}],"/Users/admin/Documents/GitHub/GeoForce/GeoAngular/app/scripts/controllers/filters.js":[function(require,module,exports){
/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *       on 3/27/14.
 */

module.exports = angular.module('GeoAngular').controller('FiltersCtrl', function ($scope, $http, $state, $stateParams, $timeout) {
  $scope.filterMode = "project"; //Which theme are we filtering?
  $scope.params = $stateParams;
  $scope.searchText = '';
  $scope.navTab = 'sectors';
  $scope.sectors = [];
  $scope.selected = false;
  $scope.disasterTypes = [];
  $scope.status = [];
  $scope.businessUnits = [];
  $scope.disasterTypescategory = {};
  debug.budget = $scope.budget = {
    slider: [2000, 8000],
    min: 0,
    mean: 5000,
    max: 100000
  };

  $timeout(function(){
    // since we removed active projects from api, we've got to turn on active filter on page load

    if(!$stateParams.filters || $stateParams.filters == "null") {
      setDefaultProjectStatus()
    }
  });

  function setDefaultProjectStatus(){
    $scope.status.forEach(function(s){
      if(s.name === "Active"){
        s.checked = true;
      }
    });
    $scope.statusFilter();
  }

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
    //$scope.defaultStatus(); // check Monitoring and Active in Status object
  }).error(function () {
    console.error("Unable to fetch disaster filter meta data");
  });

  $http.get('succubus_gitignore/sf-object-field-hash.json', {cached: true}).success(function (sfFieldHash) {
    $scope.sfFieldHash = sfFieldHash;
    $scope.businessUnits = sfFieldHash["Project__c"]["business_unit__c"]["picklistValues"];
    $scope.phase__c = sfFieldHash["Project__c"]["phase__c"]["picklistValues"];
    // add description & combine phase 3/4/5
    $scope.phase__c.forEach(function(phase){
      phase.checked = false;
      sfFieldHash["Project__c"]["phase__c"].inlineHelpText.split(/\n/).forEach(function(desc){
        if(desc.indexOf(phase.value) !== -1){
          phase.description = desc
        } else if (phase.label == "3/4/5" && (desc.indexOf("3") !== -1 || desc.indexOf("4") !== -1 || desc.indexOf("5") !== -1)){
          phase.description  = (typeof phase.description === "undefined") ? desc : phase.description + " - " + desc;
        }
      });
    });
    getBusinessUnitTypes();
  }).error(function () {
    console.error("Unable to fetch object field meta data");
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

  $scope.closePanels = function () {
    for (var param in $stateParams) {
      if ($stateParams[param] === 'open') {
        $stateParams[param] = null;
      }
    }
  };

  $scope.$on('theme-update', function () {

    if ($stateParams.theme.indexOf('disaster')!==-1) {
      $scope.navTab = 'disasterType';
    };

    if ($stateParams.theme.indexOf('project')!== -1) {
      $scope.navTab = 'sectors';
    };

    if ($stateParams.theme.indexOf('disaster') !== -1 && ($stateParams.filters)) {
      decodeDisasterFiltersURL();
    }

    if ($stateParams.theme.indexOf('project') !== -1 && ($stateParams.filters)) {
      decodeProjectFiltersURL();
    }
  });

  var getBusinessUnitTypes = function () {
    var BusinessUnitTypes = [];

    $scope.businessUnits.forEach(function (val, idx) {
      BusinessUnitTypes.push(val);
      BusinessUnitTypes[idx].checked = false;
    });

    $scope.BusinessUnitTypes = BusinessUnitTypes;
  };

  // the two decode methods read the url and update the filter panel
  // checkboxes (disastertype, projecttype, businesstype & status) accordingly

  var decodeDisasterFiltersURL = function () {
    //var str = decodeURIComponent(encodeURIComponent($stateParams.filters));
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
      && $stateParams.filters !== "null" && typeof $stateParams.filters !== 'undefined') {

      var disasters = $scope.disasterTypes;
      var statuses = $scope.disasterStatus;

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

        if ($stateParams.filters.indexOf('iroc_status__c') !== -1) {
          for (var i = 0, len = statuses.length; i < len; ++i) {
            var status = statuses[i];
            if (arr[s].indexOf(status.name) !== -1) {
              status.checked = true;
            }
          }
        }
        $scope.disasterStatusFilter();
      }
    }
    else {
      $scope.clearDisasterTypeFilter();
    }
  };

  var decodeProjectFiltersURL = function () {
    //var str = decodeURIComponent(encodeURIComponent($stateParams.filters));
    var str = decodeURIComponent(encodeURIComponent($stateParams.filters));

    var index = [];

    //loop through string and remove '%'
    for (var i = 0; i < str.length; i++) {
      if (str[i] === "%") index.push(i);
    }

    var arr = [];
    for (var i = 0; i < index.length; i++) {
      arr.push(str.substring(index[i] + 1, index[i + 1]));
      i = i + 1;
    }

    if ($stateParams.filters !== null && $stateParams.filters !== ""
      && $stateParams.filters !== "null" && typeof $stateParams.filters !== 'undefined') {

      var sectors = $scope.sectors;
      $scope.sectorClause = null;
      var bunits = $scope.BusinessUnitTypes;
      var bunit = bunits[i];


      var first = true;
      for (var s = 0; s < arr.length; s++) {
        if ($stateParams.filters.indexOf('sector__c') !== -1){
          for (var i = 0, len = sectors.length; i < len; ++i) {
            var sector = sectors[i];
            if (arr[s] == sector.name) {
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
        if ($stateParams.filters.indexOf('business_unit__c') !== -1) {
          for (var i = 0, len = bunits.length; i < len; ++i) {
            if (arr[s].indexOf(bunit.label) !== -1) {
              bunit.checked = true;
            }
          }
        }

      }
    }
    else {
      //uncheck all filters
      $scope.clearAllFilters();
    }
  };


  $scope.$on('filters-update', function () {
    if ($stateParams.theme.indexOf('disaster') !== -1) decodeDisasterFiltersURL();
    if ($stateParams.theme == 'project') decodeProjectFiltersURL();
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

  $scope.businessUnitsFilter = function () {
    var bunits = $scope.BusinessUnitTypes;
    $scope.businessUnitsClause = null;
    var first = true;
    for (var i = 0, len = bunits.length; i < len; ++i) {
      var bunit = bunits[i];
      if (bunit.checked) {
        if (first) {
          $scope.businessUnitsClause = "business_unit__c LIKE '%" + bunit.label + "%' ";
          first = false;
        } else {
          $scope.businessUnitsClause += "OR business_unit__c LIKE '%" + bunit.label + "%' ";
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
          if ($scope.statusClause !== null) {
            $scope.sectorClause = $scope.sectorClause + 'AND ' + "(" + $scope.statusClause + ")";
          }
          first = false;
        } else {
          $scope.sectorClause += "OR disaster_type__c LIKE '%" + disaster.name + "%' ";
          if ($scope.statusClause !== null) {
            $scope.sectorClause = $scope.sectorClause + 'AND' + "(" + $scope.statusClause + ")";
          }
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

  $scope.clearBusinessUnitFilter = function () {
    var bunits = $scope.BusinessUnitTypes;
    for (var i = 0, len = bunits.length; i < len; ++i) {
      bunits[i].checked = false;
    }
    $scope.businessUnitsClause = null;

    $scope.composeWhereClause();
  };

  $scope.clearDisasterTypeFilter = function () {
    var disasters = $scope.disasterTypes;
    for (var i = 0, len = disasters.length; i < len; ++i) {
      disasters[i].checked = false;
    }

    for (var i = 0; i < $scope.disasterStatus.length; i++) {
      $scope.disasterStatus[i].checked = false;
    }

    $scope.statusClause = null;
    $scope.sectorClause = null;
    $scope.composeWhereClause();
  };

  $scope.clearDisasterFilter = function () {
    var disasters = $scope.disasterTypes;
    for (var i = 0, len = disasters.length; i < len; ++i) {
      disasters[i].checked = false;
    }
    $scope.sectorClause = null;
    $scope.composeWhereClause();
  };

  $scope.defaultStatus = function () {
    for (var i = 0; i < $scope.disasterStatus.length; i++) {
      if ($scope.disasterStatus[i].name !== "Inactive") {
        $scope.disasterStatus[i].checked = true;
      }
    }
  };

  $scope.statusFilter = function () {
    var status = $scope.status;
    $scope.statusClause = null;
    var statusColumn = ($stateParams.layers.indexOf('arcregions') !== -1) ? 'status__c' : 'status__c';
    var first = true;
    for (var i = 0, len = status.length; i < len; ++i) {
      var stat = status[i];
      if (stat.checked) {
        if (first) {
          $scope.statusClause = statusColumn + " LIKE '%" + stat.name + "%'";
          first = false;
        } else {
          $scope.statusClause += "OR " + statusColumn + " LIKE '%" + stat.name + "%' ";
        }
      }
    }
    $scope.composeWhereClause();
  };

  $scope.phaseFilter = function () {
    var phase = $scope.phase__c;
    $scope.phaseClause = null;
    var first = true;
    for (var i = 0, len = phase.length; i < len; ++i) {
      var p = phase[i];
      if (p.checked) {
        if (first) {
          $scope.phaseClause = "phase__c LIKE '%" + p.value + "%'";
          first = false;
        } else {
          $scope.phaseClause += "OR phase__c LIKE '%" + p.value + "%' ";
        }
      }
    }
    $scope.composeWhereClause();
  };

  $scope.clearPhaseFilter = function () {
    var phase = $scope.phase__c;
    for (var i = 0, len = phase.length; i < len; ++i) {
      phase[i].checked = false;
    }
    $scope.phaseClause = null;
    $scope.composeWhereClause();
  };

  $scope.disasterStatusFilter = function () {
    var status = $scope.disasterStatus;
    $scope.statusClause = null;
    var first = true;
    for (var i = 0, len = status.length; i < len; ++i) {
      var stat = status[i];
      if (stat.checked) {
        if (first) {
          $scope.statusClause = "iroc_status__c LIKE '%" + stat.name + "%'";
          first = false;
        } else {
          $scope.statusClause += "OR iroc_status__c LIKE '%" + stat.name + "%' ";
        }
      }
    }
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
    var parts = [];

    if ($stateParams.theme.indexOf('disaster') !== -1) {
      if ($scope.sectorClause == null) {
        parts = [$scope.sectorClause, $scope.dateClause, $scope.statusClause, $scope.budgetClause, $scope.phaseClause];
      } else {
        parts = [$scope.sectorClause, $scope.dateClause, $scope.budgetClause, $scope.phaseClause];
      }
    } else {
      parts = [$scope.sectorClause, $scope.dateClause, $scope.statusClause, $scope.budgetClause, $scope.businessUnitsClause, $scope.phaseClause];
    }

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

    if ($stateParams.theme.indexOf('project') !== -1)$stateParams.filters = escape($scope.whereClause);
    if ($stateParams.theme.indexOf('disaster') !== -1)$stateParams.filters = escape($scope.whereClause);

    var state = $state.current.name || 'main';
    $state.go(state, $stateParams);
  };

  $scope.clearAllFilters = function () {
    $scope.clearSectorsFilter();
    $scope.clearStatusFilter();
    $scope.clearPhaseFilter();
    $scope.clearDateFilter();
    $scope.clearBudgetFilter();
    $scope.clearDisasterTypeFilter();
    $scope.clearBusinessUnitFilter();
  };

  // puts the category in URL
  $scope.putCategoryURL = function (categoryName) {
    if ($stateParams.category == categoryName) {
      $stateParams.category = null;
      $state.go($state.current.name, $stateParams);
    } else {
      $stateParams.category = categoryName;
      $state.go($state.current.name, $stateParams);
    }
  };

  $scope.handleSearch = function (val) {
    var dt = $scope.disasterTypescategory;
    $scope.searchText = val;
    for (var i = 0; i < Object.keys(dt).length; i++) {
      var arr = dt[Object.keys(dt)[i]];
      for (var z = 0; z < arr.length; z++) {
        if (arr[z].name.indexOf(val) !== -1) {
          $stateParams.category = Object.keys(dt)[i];
          $scope.disasterTypescategory[Object.keys(dt)[i]][z].isSearchActive = true;
        }
      }
    }
    var state = $state.current.name || 'main';
    $state.go(state, $stateParams);
  };

  $scope.highlightLayer = function (val) {
    $scope.selected = true;
    $timeout(function () {
      var dt = $scope.disasterTypescategory;
      for (var i = 0; i < Object.keys(dt).length; i++) {
        var arr = dt[Object.keys(dt)[i]];
        for (var z = 0; z < arr.length; z++) {
          if (arr[z].name.indexOf(val) !== -1) {
            $scope.disasterTypescategory[Object.keys(dt)[i]][z].isSearchActive = false;
          }
        }
      }
      $scope.searchText = '';
      $scope.selected = false;
    }, 2000);
  };

  $scope.UNOCHAIconLookup = config.UNOCHAIconLookup;

});

},{}],"/Users/admin/Documents/GitHub/GeoForce/GeoAngular/app/scripts/controllers/info.js":[function(require,module,exports){
/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *       on 3/27/14.
 */

module.exports = angular.module('GeoAngular').controller('InfoCtrl', function($scope) {
  $scope.params = $stateParams;
});
},{}],"/Users/admin/Documents/GitHub/GeoForce/GeoAngular/app/scripts/controllers/layers.js":[function(require,module,exports){
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

  $scope.arcregionsLabel = 'ARC Regions';
  $scope.gadm0Label = 'Countries';
  $scope.gadm1Label = 'State / Province';
  $scope.gadm2Label = 'County / District';


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
      if($scope.gadmLevel == -1){
        layersArray.push("arcregions");
      }
      else{
        layersArray.push("gadm" + $scope.gadmLevel)
      }

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
    if (typeof layer === 'function'
      || k === 'basemaps'
      || k === 'bbox'
      || k === 'themeLayers'
      || k === 'countryextents'
      || k === 'arcregionextents'
      || layer.type === 'basemap') {

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


},{}],"/Users/admin/Documents/GitHub/GeoForce/GeoAngular/app/scripts/controllers/legend.js":[function(require,module,exports){
/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *       on 3/27/14.
 */

module.exports = angular.module('GeoAngular').controller('LegendCtrl', function($scope, LayerConfig, $stateParams) {

  $scope.fold = false;

  //themeLookup is used to display the label in the map legend in the bottom left.
  //So the label will deviate from the actual name of the theme.  For project risk, for example, we want the label to say Circle = # of projects, not # of project risk.
  var themeLookup = {
    disaster: { name: 'Disasters', label: '# of Disasters'},
    project: { name: 'Projects', label: '# of Projects'},
    projectHealth: { name: 'Project Health', label: '# of Projects'},
    projectRisk: { name: 'Project Risk', label: '# of Projects'},
    disasterType: { name: 'Disaster Type', label: '# of Disasters'}
  };

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
    }
  });

  $scope.$on('theme-update', function(){
    $scope.themeLabel = '';
    if($stateParams.theme !== null && $stateParams.theme !== "") {
      $scope.themeLabel = themeLookup[$stateParams.theme].label;
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

},{}],"/Users/admin/Documents/GitHub/GeoForce/GeoAngular/app/scripts/controllers/main.js":[function(require,module,exports){
module.exports = angular.module('GeoAngular').controller('MainCtrl', function($scope, $rootScope, $state, $stateParams, $location) {
  debug.$location = $location;
  localStorage.setItem('mapfolioRoute', $location.path());

  // NH TODO: See if this is also the case with ui-router?
  // weird bug where redirect peels out '://{s' when ':' is there
  // $routeParams.layers We just dont have the : in main.js so that
  // part of the path does not go away...
  var layersStr = $stateParams.layers = $stateParams.layers.replace('http//', 'http://');
  var themeStr = $stateParams.theme;
  var filtersStr = $stateParams.filters;
  var categoryStr = $stateParams.category; // layer category open
  var themeLabelStr = $stateParams.themelabels; // themelabels (bubbles)
  var fullscreen = $stateParams.fullscreen; //whether or not the app is in fullscreen mode

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

  // if the fullscreen attribute has changed broadcast fullscreen has changed
  if(window.fullscreen != fullscreen) {
    window.fullscreen = fullscreen;
    $rootScope.$broadcast('fullscreen-changed', fullscreen);
  }

});

},{}],"/Users/admin/Documents/GitHub/GeoForce/GeoAngular/app/scripts/controllers/map.js":[function(require,module,exports){
/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *     on Mon Mar 17 2014
 */

module.exports = angular.module('GeoAngular').controller('MapCtrl', function ($scope, $rootScope, $state, $stateParams, LayerConfig, VectorProvider, $http, $sce) {
  var map = L.map('map', {worldCopyJump: true});
  var firstLoad = true;

  $scope.params = $stateParams;
  $scope.blur = '';
  $scope.grayout = ''; //use this class to gray out the map, such as when the country selector menu is active
  $scope.legendObject = {}; //When PBF layers are drawn, grab the legendObject out of it so we know what classes are being drawn on the map

  //Add refresh mapp control
  addRefreshMapControl();

  $scope.toggleState = function (stateName) {
    var state = $state.current.name !== stateName ? stateName : 'main';
    $state.go(state, $stateParams);
  };

  var lastLayersStr = '';
  var layerDifference; //an object that stores whether or not new layers are added, or have been removed, and what their names are
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

    //Layers have changed.  Do something about it.
    if (lastLayersStr !== layersStr) {

      //See if new layers are added or if layers need to be removed.
      var lastLayersArray = lastLayersStr.split(',');
      var currentLayersArray = layersStr.split(',');

      if(lastLayersArray.length > currentLayersArray.length){
        //One or more layers has been removed.
        layerDifference = { type: 'removed', list: $(lastLayersArray).not(currentLayersArray).get()};
      }
      else{
        //One or more layers has been added
        layerDifference = { type: 'added', list: $(currentLayersArray).not(lastLayersArray).get()};

      }

      drawOverlays(layerDifference);

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
    window.addEventListener("resize", map.invalidateSize);
  } catch (e) {
    //Nothing
  }


  //Difference object tells us whether new items have been added, or if layers have been removed.
  function drawOverlays(differenceObject) {

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
          //If arcregions, then level is -1
          var level;
          if(overlayName === 'arcregions'){
            level = -1;
          }
          else{
            level = overlayName.substring(overlayName.length - 1, overlayName.length);
          }
          $rootScope.level = level; //Store in rootscope
        }
      }
    }


    if(differenceObject && differenceObject.type == 'removed'){
      // there are more overlays left in the list, less layers specified in route
      // we need to remove those too.
      var i = 0;
      for (var len2 = overlays.length; i < len2; ++i) {
        //If the overlay name exists in the list of layers to be removed, then remove it.
        if (overlays[i] && overlays[i].overlayName && differenceObject.list.indexOf(overlays[i].overlayName) > -1) {
          if(overlays[i].destroyResource) overlays[i].destroyResource();
          map.removeLayer(overlays[i]);
          delete overlays_dictionary[overlays[i].overlayName]; //delete dictionary reference for faster fetching in UpdateECOSData
          delete overlays[i];
        }
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

    var layer;

    if(level == -1){
      //Arc Regions
      layer = overlays_dictionary["arcregions"];
    }
    else{
      //Gadm
      layer = overlays_dictionary["gadm" + level];
    }


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

          $scope.$apply(function() {
            $scope.legendObject = legendObject;
          });

          var newLegendObject = {};
          var ONA = $scope.UNOCHAIconLookup;

          // loop through lengend objcet
          // add to new legend object if:
          //    1. legend object has ONA lookup icon
          //    2. new legend object doesn't have same ONA lookup icon


          for(var i=0;i<Object.keys(legendObject).length;i++){
            if(typeof ONA[Object.keys(legendObject)[i]] !== 'undefined'){
              legendObject[Object.keys(legendObject)[i]].icon = ONA[Object.keys(legendObject)[i]].icon;
            }
            if(typeof legendObject[Object.keys(legendObject)[i]].icon !== 'undefined') {

              if(Object.keys(newLegendObject).length==0){
                newLegendObject[Object.keys(legendObject)[i]] = legendObject[Object.keys(legendObject)[i]];
              } else{

                for(var x=0;x<Object.keys(newLegendObject).length;x++){
                  Object.keys(legendObject).forEach(function(val){
                    if(newLegendObject[Object.keys(newLegendObject)[x]].icon.indexOf(legendObject[val].icon)==-1){
                      newLegendObject[Object.keys(legendObject)[i]] = legendObject[Object.keys(legendObject)[i]];
                    }
                  });
                }
              }

            }
          }



          $scope.newLegendObject = newLegendObject;

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
    //var theme = $stateParams.theme;
    //
    //if(theme.indexOf('disaster')!==-1 && $stateParams.layers.split(",")[1] !== 'gadm0'){
    //  var layersArray;
    //
    //  if($stateParams.layers){
    //    layersArray = $stateParams.layers.split(",");
    //  }
    //
    //  //Remove all GADM layers.
    //  layersArray.forEach(function (value, key) {
    //    if (LayerConfig.themeLayers.indexOf(value) > -1) {
    //      layersArray.splice(layersArray.indexOf(value), 1); //remove any GADMs
    //    }
    //  });
    //
    //  //Add in the gadm layer to the layers list in the stateparams.
    //  layersArray.push("gadm0");
    //  $stateParams.layers = layersArray.join(",");
    //
    //  var state = $state.current.name || 'main';
    //  $state.go(state, $stateParams);
    //}

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


  var opacity = 0.5;
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


  //Add a leaflet control to the map container that refreshes the state of the app
  function addRefreshMapControl(){

    L.easyButton('glyphicon glyphicon-refresh', //Css class
      function (){ }, //onClick function
      'Reset App', //Title
      map, //map control ref
      'btnResetMap', //id
      '/mapfolio/#/default' //a href (optional)
    )

  }

});

},{}],"/Users/admin/Documents/GitHub/GeoForce/GeoAngular/app/scripts/controllers/navbar.js":[function(require,module,exports){
module.exports = angular.module('GeoAngular').controller('NavBarCtrl', function($scope, $state, $stateParams, $rootScope) {

  $scope.params = $stateParams;
  $scope.fullscreen = false;

  //If stateParams.fullScreen=true, then apply a class to the HTML body called .fullScreen

  $scope.toggleFullScreen = function(){
      //Set the stateParam to fullscreen=true
    $scope.fullscreen = !$scope.fullscreen;
    $stateParams.fullscreen = $scope.fullscreen;
    var state = $state.current.name || 'main';
    $state.go(state, $stateParams);
  }


  $rootScope.$on('fullscreen-changed', function () {
    //If the fullscreen state changes.
    if($stateParams.fullscreen == "true"){
      $scope.fullscreen  = true;
    }else{
      $scope.fullscreen  = false;
    }

  });



});

},{}],"/Users/admin/Documents/GitHub/GeoForce/GeoAngular/app/scripts/controllers/search.js":[function(require,module,exports){
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

},{}],"/Users/admin/Documents/GitHub/GeoForce/GeoAngular/app/scripts/controllers/side-view.js":[function(require,module,exports){
/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *        and Ryan Whitley      <rwhitley@spatialdev.com>
 *         on 4/16/14.
 */

module.exports = angular.module('GeoAngular').controller('SideViewCtrl', function($scope, $timeout) {

  //resize function
  function resizeScrollablePanel() {
    $(".side-view .scrollable").height($(".side-view .navpanel").height() - $(".side-view .navpanel .scrollable").position().top);  //This should respond to window.resize events and will be set during that event to make sure the panel stays
    // dynamically resize project filter tabs
    $("md-content .project-filters").height($(".navpanel.container.filters-container").height() - 125);
  }

  //Connect the layout onresize end event
  window.addEventListener("resize", resizeScrollablePanel);


  //For Init.
  resizeScrollablePanel();

  // this fires when all angular dom elements are rendered
  $timeout(function () {
    resizeScrollablePanel();
  });

});

},{}],"/Users/admin/Documents/GitHub/GeoForce/GeoAngular/app/scripts/controllers/stories.js":[function(require,module,exports){
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
},{}],"/Users/admin/Documents/GitHub/GeoForce/GeoAngular/app/scripts/controllers/theme.js":[function(require,module,exports){
/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *       on 5/6/14.
 */

module.exports = angular.module('GeoAngular').controller('ThemeCtrl', function ($scope, $rootScope, $state, $stateParams, VectorProvider, LayerConfig) {

  var themeNameHash = $rootScope.themeNameHash = {
    project: 'Projects',
    disaster: 'Disasters',
    projectRisk: 'Project Risk',
    //projectHealth: 'Project Health',
    disasterType: 'Disaster Type',
    none: 'None'
  };

  $scope.project = function () {
    $scope.themeName = themeNameHash.project;
    $scope.setThemeQueryParam('project');
  };

  $scope.disaster = function () {
    $scope.themeName = themeNameHash.disaster;
    $scope.setThemeQueryParam('disaster');
  };

  $scope.projectRisk = function () {
      $scope.themeName = themeNameHash.projectRisk;
      $scope.setThemeQueryParam('projectRisk');
  };

  $scope.projectHealth = function () {
      $scope.themeName = themeNameHash.projectHealth;
      $scope.setThemeQueryParam('projectHealth');
  };

  $scope.disasterType = function () {
    $scope.themeName = themeNameHash.disasterType;
    $scope.setThemeQueryParam('disasterType');
  };

  $scope.none = function () {
    $scope.themeName = themeNameHash.none;
    $scope.setThemeQueryParam('none');
  };

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


    //append the default disaster filter when switching from project to disaster
    if(theme.indexOf('disaster') !== -1 && $stateParams.theme.indexOf('project') !== -1){
      $stateParams.filters = "iroc_status__c LIKE '%Monitoring%' OR iroc_status__c LIKE '%Active%'";
    }

    //remove all filters when switching from disaster to project
    if(theme.indexOf('project')!==-1 && $stateParams.theme.indexOf('disaster')!== -1 ){
      $stateParams.filters = "status__c LIKE '%Active%'";
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

    //close filters panel if theme is  None
    if($stateParams.theme == 'none' || $stateParams.theme !== null) {
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

},{}],"/Users/admin/Documents/GitHub/GeoForce/GeoAngular/app/scripts/controllers/upload.js":[function(require,module,exports){
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

},{}],"/Users/admin/Documents/GitHub/GeoForce/GeoAngular/app/scripts/controllers/zoom-extent.js":[function(require,module,exports){
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

},{}],"/Users/admin/Documents/GitHub/GeoForce/GeoAngular/app/scripts/services/Donuts.js":[function(require,module,exports){
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

},{}],"/Users/admin/Documents/GitHub/GeoForce/GeoAngular/app/scripts/services/LayerConfig.js":[function(require,module,exports){
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
    //require('../../../../Config/layers/projecthealth.js'),
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

},{"../../../../Config/layers/all.js":"/Users/admin/Documents/GitHub/GeoForce/Config/layers/all.js","../../../../Config/layers/basemaps.js":"/Users/admin/Documents/GitHub/GeoForce/Config/layers/basemaps.js","../../../../Config/layers/disaster.js":"/Users/admin/Documents/GitHub/GeoForce/Config/layers/disaster.js","../../../../Config/layers/other.js":"/Users/admin/Documents/GitHub/GeoForce/Config/layers/other.js","../../../../Config/layers/project.js":"/Users/admin/Documents/GitHub/GeoForce/Config/layers/project.js","../../../../Config/layers/projectrisk.js":"/Users/admin/Documents/GitHub/GeoForce/Config/layers/projectrisk.js","../../../../Config/layers/vectortiles.js":"/Users/admin/Documents/GitHub/GeoForce/Config/layers/vectortiles.js"}],"/Users/admin/Documents/GitHub/GeoForce/GeoAngular/app/scripts/services/StoriesConfig.js":[function(require,module,exports){
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
    'ebola',
    'gis',
    'disasters',
    'popmovement',
    'currentprojects',
    'haitiprojects',
    'gdpc',
    'lacprojects',
    'ameeprojects',
    'africaprojects'
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
    thumbnail: 'images/stories/haiyan.jpg',
    keywords: 'Typhoon, Disaster Response, Haiyan, Disaster, AMEE'
  };
  this.pam = {
    url: '/mapfolio/index.html#/map@-16.551962,168.085327,7(ortho,gdacs,gadm0),disaster',
    name: 'Cyclone Pam Resopnse',
    date: '2015-15-3',
    thumbnail: 'images/stories/pam.jpg',
    keywords: 'Cyclone, Disaster Response, Vanuatu, Africa'
  };
  this.gis = {
    url: 'mapfolio/#/map@13.496473,10.458984,3(satellite,gadm0),project/export?filters=sector__c%2520LIKE%2520%2527%2525GIS%2520%2526%2520Information%2520Management%2525%2527%2520',
    name: 'GIS Projects',
    date: '2015-30-12',
    thumbnail: 'images/stories/gis.jpg',
    keywords: 'GIS, Missing Maps, Map'
  };
  this.disasters = {
    url: 'mapfolio/#/map@19.145168,41.660156,2(satellite,gadm0),disasterType?filters=iroc_status__c%2520LIKE%2520%2527%2525Monitoring%2525%2527OR%2520iroc_status__c%2520LIKE%2520%2527%2525Active%2525%2527%2520&category=Human%20Related',
    name: 'Active Responses',
    date: '2015-30-12',
    thumbnail: 'images/stories/disasters.jpg',
    keywords: 'IROC, Response, Disaster'
  };
  this.popmovement = {
    url: 'mapfolio/#/map@45.475540,15.754395,5(satellite,gadm0),disasterType?filters=disaster_type__c%2520LIKE%2520%2527%2525Population%2520Movement%2525%2527%2520AND%2520%2528iroc_status__c%2520LIKE%2520%2527%2525Monitoring%2525%2527OR%2520iroc_status__c%2520LIKE%2520%2527%2525Active%2525%2527%2520%2529&category=Human%20Related',
    name: 'European Pop Movement',
    date: '2015-30-12',
    thumbnail: 'images/stories/popmovement.jpg',
    keywords: 'IROC, Response, Disaster, Population Movement'
  };
  this.currentprojects = {
    url: 'mapfolio/#/map@24.686952,27.246094,2(satellite,gadm0),project',
    name: 'Current Projects',
    date: '2015-30-12',
    thumbnail: 'images/stories/projects.jpg',
    keywords: 'IRP, Africa, AMEE, LAC, World, Programs, Projects'
  };
  this.haitiprojects = {
    url:'mapfolio/#/map@18.940062,-71.650085,8(satellite,gadm0),project?filters=null&details-panel=open',
    name: 'HAP Projects',
    date: '2015-30-12',
    thumbnail: 'images/stories/hap.jpg',
    keywords: 'LAC, HAP, Haiti, Programs, Projects'
  };
  this.gdpc = {
    url:'mapfolio/#/map@6.489983,18.105469,2(satellite,gadm0),project?filters=business_unit__c%2520LIKE%2520%2527%2525GDPC%2525%2527%2520',
    name: 'GDPC Projects',
    date: '2015-30-12',
    thumbnail: 'images/stories/gdpc.jpg',
    keywords: 'GDPC, Programs, Projects'
  };
  this.lacprojects = {
    url:'mapfolio/#/map@-12.382928,-64.028320,4(satellite,gadm0),project?filters=business_unit__c%2520LIKE%2520%2527%2525LAC%2525%2527%2520',
    name: 'GDPC Projects',
    date: '2015-30-12',
    thumbnail: 'images/stories/lac.jpg',
    keywords: 'LAC, Programs, Projects'
  };
  this.ameeprojects = {
    url:'mapfolio/#/map@6.489983,18.105469,2(satellite,gadm0),project?filters=business_unit__c%2520LIKE%2520%2527%2525GDPC%2525%2527%2520',
    name: 'GDPC Projects',
    date: '2015-30-12',
    thumbnail: 'images/stories/amee.jpg',
    keywords: 'AMEE, Programs, Projects'
  };
  this.africaprojects = {
    url:'mapfolio/#/map@-1.581830,23.598633,4(satellite,gadm0),project',
    name: 'Africa Projects',
    date: '2015-30-12',
    thumbnail: 'images/stories/africa.jpg',
    keywords: 'Africa, Programs, Projects'
  };
  this.rfl = {
    url:'mapfolio/#/map@37.405074,-94.020996,5(satellite,gadm1),project?filters=business_unit__c%2520LIKE%2520%2527%2525IHL%2525%2527%2520OR%2520business_unit__c%2520LIKE%2520%2527%2525RFL%2525%2527%2520&details-panel=open',
    name: 'RFL Projects',
    date: '2015-30-12',
    thumbnail: 'images/stories/rfl.jpg',
    keywords: 'RFL, Restoring Family Links, Programs, Projects'
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

},{}],"/Users/admin/Documents/GitHub/GeoForce/GeoAngular/app/scripts/services/Vector/BBoxGeoJSON.js":[function(require,module,exports){
/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *       on 6/3/14.
 */

var FeatureSet = require('../../../lib/featurelabel/FeatureSet');
var Resource = require('./Resource');
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

},{"../../../lib/featurelabel/FeatureSet":"/Users/admin/Documents/GitHub/GeoForce/GeoAngular/app/lib/featurelabel/FeatureSet.js","./Resource":"/Users/admin/Documents/GitHub/GeoForce/GeoAngular/app/scripts/services/Vector/Resource.js","./vector":"/Users/admin/Documents/GitHub/GeoForce/GeoAngular/app/scripts/services/Vector/vector.js"}],"/Users/admin/Documents/GitHub/GeoForce/GeoAngular/app/scripts/services/Vector/GeoJSON.js":[function(require,module,exports){
/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *       on 6/3/14.
 */

var Resource = require('./Resource');
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

},{"./Resource":"/Users/admin/Documents/GitHub/GeoForce/GeoAngular/app/scripts/services/Vector/Resource.js","./vector":"/Users/admin/Documents/GitHub/GeoForce/GeoAngular/app/scripts/services/Vector/vector.js"}],"/Users/admin/Documents/GitHub/GeoForce/GeoAngular/app/scripts/services/Vector/KML.js":[function(require,module,exports){
/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *       on 6/3/14.
 */

var Resource = require('./Resource');
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

},{"./Resource":"/Users/admin/Documents/GitHub/GeoForce/GeoAngular/app/scripts/services/Vector/Resource.js","./vector":"/Users/admin/Documents/GitHub/GeoForce/GeoAngular/app/scripts/services/Vector/vector.js"}],"/Users/admin/Documents/GitHub/GeoForce/GeoAngular/app/scripts/services/Vector/PBF.js":[function(require,module,exports){
/**
 * Created by Ryan Whitley <rwhitley@spatialdev.com>
 *       on 12/15/14.
 */

var Resource = require('./Resource');
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

  //TODO dynamically add sf_project to each filter column if arcregions

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





},{"./Resource":"/Users/admin/Documents/GitHub/GeoForce/GeoAngular/app/scripts/services/Vector/Resource.js","./vector":"/Users/admin/Documents/GitHub/GeoForce/GeoAngular/app/scripts/services/Vector/vector.js"}],"/Users/admin/Documents/GitHub/GeoForce/GeoAngular/app/scripts/services/Vector/Resource.js":[function(require,module,exports){
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

},{"./vector":"/Users/admin/Documents/GitHub/GeoForce/GeoAngular/app/scripts/services/Vector/vector.js"}],"/Users/admin/Documents/GitHub/GeoForce/GeoAngular/app/scripts/services/Vector/VectorProvider.js":[function(require,module,exports){
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
  var PBF = require('./PBF');


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


},{"./BBoxGeoJSON":"/Users/admin/Documents/GitHub/GeoForce/GeoAngular/app/scripts/services/Vector/BBoxGeoJSON.js","./GeoJSON":"/Users/admin/Documents/GitHub/GeoForce/GeoAngular/app/scripts/services/Vector/GeoJSON.js","./KML":"/Users/admin/Documents/GitHub/GeoForce/GeoAngular/app/scripts/services/Vector/KML.js","./PBF":"/Users/admin/Documents/GitHub/GeoForce/GeoAngular/app/scripts/services/Vector/PBF.js","./Resource":"/Users/admin/Documents/GitHub/GeoForce/GeoAngular/app/scripts/services/Vector/Resource.js","./csv":"/Users/admin/Documents/GitHub/GeoForce/GeoAngular/app/scripts/services/Vector/csv.js","./vector":"/Users/admin/Documents/GitHub/GeoForce/GeoAngular/app/scripts/services/Vector/vector.js"}],"/Users/admin/Documents/GitHub/GeoForce/GeoAngular/app/scripts/services/Vector/csv.js":[function(require,module,exports){
/**
 * Created by Ryan Whitley <rwhitley@spatialdev.com>
 *       on 6/3/14.
 */

var Resource = require('./Resource');
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

},{"./Resource":"/Users/admin/Documents/GitHub/GeoForce/GeoAngular/app/scripts/services/Vector/Resource.js","./vector":"/Users/admin/Documents/GitHub/GeoForce/GeoAngular/app/scripts/services/Vector/vector.js"}],"/Users/admin/Documents/GitHub/GeoForce/GeoAngular/app/scripts/services/Vector/vector.js":[function(require,module,exports){
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




},{}],"/Users/admin/Documents/GitHub/GeoForce/GeoAngular/node_modules/browserify/node_modules/buffer/index.js":[function(require,module,exports){
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

},{"base64-js":"/Users/admin/Documents/GitHub/GeoForce/GeoAngular/node_modules/browserify/node_modules/buffer/node_modules/base64-js/lib/b64.js","ieee754":"/Users/admin/Documents/GitHub/GeoForce/GeoAngular/node_modules/browserify/node_modules/buffer/node_modules/ieee754/index.js","is-array":"/Users/admin/Documents/GitHub/GeoForce/GeoAngular/node_modules/browserify/node_modules/buffer/node_modules/is-array/index.js"}],"/Users/admin/Documents/GitHub/GeoForce/GeoAngular/node_modules/browserify/node_modules/buffer/node_modules/base64-js/lib/b64.js":[function(require,module,exports){
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

},{}],"/Users/admin/Documents/GitHub/GeoForce/GeoAngular/node_modules/browserify/node_modules/buffer/node_modules/ieee754/index.js":[function(require,module,exports){
exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}

},{}],"/Users/admin/Documents/GitHub/GeoForce/GeoAngular/node_modules/browserify/node_modules/buffer/node_modules/is-array/index.js":[function(require,module,exports){

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

},{}]},{},["/Users/admin/Documents/GitHub/GeoForce/GeoAngular/app/scripts/app.js"])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvYWRtaW4vRG9jdW1lbnRzL0dpdEh1Yi9HZW9Gb3JjZS9Db25maWcvbGF5ZXJzL2FsbC5qcyIsIi9Vc2Vycy9hZG1pbi9Eb2N1bWVudHMvR2l0SHViL0dlb0ZvcmNlL0NvbmZpZy9sYXllcnMvYmFzZW1hcHMuanMiLCIvVXNlcnMvYWRtaW4vRG9jdW1lbnRzL0dpdEh1Yi9HZW9Gb3JjZS9Db25maWcvbGF5ZXJzL2Rpc2FzdGVyLmpzIiwiL1VzZXJzL2FkbWluL0RvY3VtZW50cy9HaXRIdWIvR2VvRm9yY2UvQ29uZmlnL2xheWVycy9vdGhlci5qcyIsIi9Vc2Vycy9hZG1pbi9Eb2N1bWVudHMvR2l0SHViL0dlb0ZvcmNlL0NvbmZpZy9sYXllcnMvcHJvamVjdC5qcyIsIi9Vc2Vycy9hZG1pbi9Eb2N1bWVudHMvR2l0SHViL0dlb0ZvcmNlL0NvbmZpZy9sYXllcnMvcHJvamVjdHJpc2suanMiLCIvVXNlcnMvYWRtaW4vRG9jdW1lbnRzL0dpdEh1Yi9HZW9Gb3JjZS9Db25maWcvbGF5ZXJzL3ZlY3RvcnRpbGVzLmpzIiwiL1VzZXJzL2FkbWluL0RvY3VtZW50cy9HaXRIdWIvR2VvRm9yY2UvR2VvQW5ndWxhci9hcHAvbGliL0xlYWZsZXQuTWFwYm94VmVjdG9yVGlsZS9ub2RlX21vZHVsZXMvcGJmL2luZGV4LmpzIiwiL1VzZXJzL2FkbWluL0RvY3VtZW50cy9HaXRIdWIvR2VvRm9yY2UvR2VvQW5ndWxhci9hcHAvbGliL0xlYWZsZXQuTWFwYm94VmVjdG9yVGlsZS9ub2RlX21vZHVsZXMvcGJmL25vZGVfbW9kdWxlcy9pZWVlNzU0L2luZGV4LmpzIiwiL1VzZXJzL2FkbWluL0RvY3VtZW50cy9HaXRIdWIvR2VvRm9yY2UvR2VvQW5ndWxhci9hcHAvbGliL0xlYWZsZXQuTWFwYm94VmVjdG9yVGlsZS9ub2RlX21vZHVsZXMvcG9pbnQtZ2VvbWV0cnkvaW5kZXguanMiLCIvVXNlcnMvYWRtaW4vRG9jdW1lbnRzL0dpdEh1Yi9HZW9Gb3JjZS9HZW9Bbmd1bGFyL2FwcC9saWIvTGVhZmxldC5NYXBib3hWZWN0b3JUaWxlL25vZGVfbW9kdWxlcy92ZWN0b3ItdGlsZS9pbmRleC5qcyIsIi9Vc2Vycy9hZG1pbi9Eb2N1bWVudHMvR2l0SHViL0dlb0ZvcmNlL0dlb0FuZ3VsYXIvYXBwL2xpYi9MZWFmbGV0Lk1hcGJveFZlY3RvclRpbGUvbm9kZV9tb2R1bGVzL3ZlY3Rvci10aWxlL2xpYi92ZWN0b3J0aWxlLmpzIiwiL1VzZXJzL2FkbWluL0RvY3VtZW50cy9HaXRIdWIvR2VvRm9yY2UvR2VvQW5ndWxhci9hcHAvbGliL0xlYWZsZXQuTWFwYm94VmVjdG9yVGlsZS9ub2RlX21vZHVsZXMvdmVjdG9yLXRpbGUvbGliL3ZlY3RvcnRpbGVmZWF0dXJlLmpzIiwiL1VzZXJzL2FkbWluL0RvY3VtZW50cy9HaXRIdWIvR2VvRm9yY2UvR2VvQW5ndWxhci9hcHAvbGliL0xlYWZsZXQuTWFwYm94VmVjdG9yVGlsZS9ub2RlX21vZHVsZXMvdmVjdG9yLXRpbGUvbGliL3ZlY3RvcnRpbGVsYXllci5qcyIsIi9Vc2Vycy9hZG1pbi9Eb2N1bWVudHMvR2l0SHViL0dlb0ZvcmNlL0dlb0FuZ3VsYXIvYXBwL2xpYi9MZWFmbGV0Lk1hcGJveFZlY3RvclRpbGUvc3JjL01WVEZlYXR1cmUuanMiLCIvVXNlcnMvYWRtaW4vRG9jdW1lbnRzL0dpdEh1Yi9HZW9Gb3JjZS9HZW9Bbmd1bGFyL2FwcC9saWIvTGVhZmxldC5NYXBib3hWZWN0b3JUaWxlL3NyYy9NVlRMYXllci5qcyIsIi9Vc2Vycy9hZG1pbi9Eb2N1bWVudHMvR2l0SHViL0dlb0ZvcmNlL0dlb0FuZ3VsYXIvYXBwL2xpYi9MZWFmbGV0Lk1hcGJveFZlY3RvclRpbGUvc3JjL01WVFNvdXJjZS5qcyIsIi9Vc2Vycy9hZG1pbi9Eb2N1bWVudHMvR2l0SHViL0dlb0ZvcmNlL0dlb0FuZ3VsYXIvYXBwL2xpYi9MZWFmbGV0Lk1hcGJveFZlY3RvclRpbGUvc3JjL01WVFV0aWwuanMiLCIvVXNlcnMvYWRtaW4vRG9jdW1lbnRzL0dpdEh1Yi9HZW9Gb3JjZS9HZW9Bbmd1bGFyL2FwcC9saWIvTGVhZmxldC5NYXBib3hWZWN0b3JUaWxlL3NyYy9TdGF0aWNMYWJlbC9TdGF0aWNMYWJlbC5qcyIsIi9Vc2Vycy9hZG1pbi9Eb2N1bWVudHMvR2l0SHViL0dlb0ZvcmNlL0dlb0FuZ3VsYXIvYXBwL2xpYi9mZWF0dXJlbGFiZWwvRmVhdHVyZVNldC5qcyIsIi9Vc2Vycy9hZG1pbi9Eb2N1bWVudHMvR2l0SHViL0dlb0ZvcmNlL0dlb0FuZ3VsYXIvYXBwL2xpYi9mZWF0dXJlbGFiZWwvTGFiZWwuanMiLCIvVXNlcnMvYWRtaW4vRG9jdW1lbnRzL0dpdEh1Yi9HZW9Gb3JjZS9HZW9Bbmd1bGFyL2FwcC9saWIvZmVhdHVyZWxhYmVsL2ZlYXR1cmVsYWJlbC5qcyIsIi9Vc2Vycy9hZG1pbi9Eb2N1bWVudHMvR2l0SHViL0dlb0ZvcmNlL0dlb0FuZ3VsYXIvYXBwL2xpYi9mZWF0dXJlbGFiZWwvbGVhZmxldC1wYXRjaC5qcyIsIi9Vc2Vycy9hZG1pbi9Eb2N1bWVudHMvR2l0SHViL0dlb0ZvcmNlL0dlb0FuZ3VsYXIvYXBwL3NjcmlwdHMvYXBwLmpzIiwiL1VzZXJzL2FkbWluL0RvY3VtZW50cy9HaXRIdWIvR2VvRm9yY2UvR2VvQW5ndWxhci9hcHAvc2NyaXB0cy9jb250cm9sbGVycy9iYXNlbWFwcy5qcyIsIi9Vc2Vycy9hZG1pbi9Eb2N1bWVudHMvR2l0SHViL0dlb0ZvcmNlL0dlb0FuZ3VsYXIvYXBwL3NjcmlwdHMvY29udHJvbGxlcnMvYnJlYWRjcnVtYnMuanMiLCIvVXNlcnMvYWRtaW4vRG9jdW1lbnRzL0dpdEh1Yi9HZW9Gb3JjZS9HZW9Bbmd1bGFyL2FwcC9zY3JpcHRzL2NvbnRyb2xsZXJzL2RldGFpbHMuanMiLCIvVXNlcnMvYWRtaW4vRG9jdW1lbnRzL0dpdEh1Yi9HZW9Gb3JjZS9HZW9Bbmd1bGFyL2FwcC9zY3JpcHRzL2NvbnRyb2xsZXJzL2V4cG9ydC5qcyIsIi9Vc2Vycy9hZG1pbi9Eb2N1bWVudHMvR2l0SHViL0dlb0ZvcmNlL0dlb0FuZ3VsYXIvYXBwL3NjcmlwdHMvY29udHJvbGxlcnMvZmlsdGVycy5qcyIsIi9Vc2Vycy9hZG1pbi9Eb2N1bWVudHMvR2l0SHViL0dlb0ZvcmNlL0dlb0FuZ3VsYXIvYXBwL3NjcmlwdHMvY29udHJvbGxlcnMvaW5mby5qcyIsIi9Vc2Vycy9hZG1pbi9Eb2N1bWVudHMvR2l0SHViL0dlb0ZvcmNlL0dlb0FuZ3VsYXIvYXBwL3NjcmlwdHMvY29udHJvbGxlcnMvbGF5ZXJzLmpzIiwiL1VzZXJzL2FkbWluL0RvY3VtZW50cy9HaXRIdWIvR2VvRm9yY2UvR2VvQW5ndWxhci9hcHAvc2NyaXB0cy9jb250cm9sbGVycy9sZWdlbmQuanMiLCIvVXNlcnMvYWRtaW4vRG9jdW1lbnRzL0dpdEh1Yi9HZW9Gb3JjZS9HZW9Bbmd1bGFyL2FwcC9zY3JpcHRzL2NvbnRyb2xsZXJzL21haW4uanMiLCIvVXNlcnMvYWRtaW4vRG9jdW1lbnRzL0dpdEh1Yi9HZW9Gb3JjZS9HZW9Bbmd1bGFyL2FwcC9zY3JpcHRzL2NvbnRyb2xsZXJzL21hcC5qcyIsIi9Vc2Vycy9hZG1pbi9Eb2N1bWVudHMvR2l0SHViL0dlb0ZvcmNlL0dlb0FuZ3VsYXIvYXBwL3NjcmlwdHMvY29udHJvbGxlcnMvbmF2YmFyLmpzIiwiL1VzZXJzL2FkbWluL0RvY3VtZW50cy9HaXRIdWIvR2VvRm9yY2UvR2VvQW5ndWxhci9hcHAvc2NyaXB0cy9jb250cm9sbGVycy9zZWFyY2guanMiLCIvVXNlcnMvYWRtaW4vRG9jdW1lbnRzL0dpdEh1Yi9HZW9Gb3JjZS9HZW9Bbmd1bGFyL2FwcC9zY3JpcHRzL2NvbnRyb2xsZXJzL3NpZGUtdmlldy5qcyIsIi9Vc2Vycy9hZG1pbi9Eb2N1bWVudHMvR2l0SHViL0dlb0ZvcmNlL0dlb0FuZ3VsYXIvYXBwL3NjcmlwdHMvY29udHJvbGxlcnMvc3Rvcmllcy5qcyIsIi9Vc2Vycy9hZG1pbi9Eb2N1bWVudHMvR2l0SHViL0dlb0ZvcmNlL0dlb0FuZ3VsYXIvYXBwL3NjcmlwdHMvY29udHJvbGxlcnMvdGhlbWUuanMiLCIvVXNlcnMvYWRtaW4vRG9jdW1lbnRzL0dpdEh1Yi9HZW9Gb3JjZS9HZW9Bbmd1bGFyL2FwcC9zY3JpcHRzL2NvbnRyb2xsZXJzL3VwbG9hZC5qcyIsIi9Vc2Vycy9hZG1pbi9Eb2N1bWVudHMvR2l0SHViL0dlb0ZvcmNlL0dlb0FuZ3VsYXIvYXBwL3NjcmlwdHMvY29udHJvbGxlcnMvem9vbS1leHRlbnQuanMiLCIvVXNlcnMvYWRtaW4vRG9jdW1lbnRzL0dpdEh1Yi9HZW9Gb3JjZS9HZW9Bbmd1bGFyL2FwcC9zY3JpcHRzL3NlcnZpY2VzL0RvbnV0cy5qcyIsIi9Vc2Vycy9hZG1pbi9Eb2N1bWVudHMvR2l0SHViL0dlb0ZvcmNlL0dlb0FuZ3VsYXIvYXBwL3NjcmlwdHMvc2VydmljZXMvTGF5ZXJDb25maWcuanMiLCIvVXNlcnMvYWRtaW4vRG9jdW1lbnRzL0dpdEh1Yi9HZW9Gb3JjZS9HZW9Bbmd1bGFyL2FwcC9zY3JpcHRzL3NlcnZpY2VzL1N0b3JpZXNDb25maWcuanMiLCIvVXNlcnMvYWRtaW4vRG9jdW1lbnRzL0dpdEh1Yi9HZW9Gb3JjZS9HZW9Bbmd1bGFyL2FwcC9zY3JpcHRzL3NlcnZpY2VzL1ZlY3Rvci9CQm94R2VvSlNPTi5qcyIsIi9Vc2Vycy9hZG1pbi9Eb2N1bWVudHMvR2l0SHViL0dlb0ZvcmNlL0dlb0FuZ3VsYXIvYXBwL3NjcmlwdHMvc2VydmljZXMvVmVjdG9yL0dlb0pTT04uanMiLCIvVXNlcnMvYWRtaW4vRG9jdW1lbnRzL0dpdEh1Yi9HZW9Gb3JjZS9HZW9Bbmd1bGFyL2FwcC9zY3JpcHRzL3NlcnZpY2VzL1ZlY3Rvci9LTUwuanMiLCIvVXNlcnMvYWRtaW4vRG9jdW1lbnRzL0dpdEh1Yi9HZW9Gb3JjZS9HZW9Bbmd1bGFyL2FwcC9zY3JpcHRzL3NlcnZpY2VzL1ZlY3Rvci9QQkYuanMiLCIvVXNlcnMvYWRtaW4vRG9jdW1lbnRzL0dpdEh1Yi9HZW9Gb3JjZS9HZW9Bbmd1bGFyL2FwcC9zY3JpcHRzL3NlcnZpY2VzL1ZlY3Rvci9SZXNvdXJjZS5qcyIsIi9Vc2Vycy9hZG1pbi9Eb2N1bWVudHMvR2l0SHViL0dlb0ZvcmNlL0dlb0FuZ3VsYXIvYXBwL3NjcmlwdHMvc2VydmljZXMvVmVjdG9yL1ZlY3RvclByb3ZpZGVyLmpzIiwiL1VzZXJzL2FkbWluL0RvY3VtZW50cy9HaXRIdWIvR2VvRm9yY2UvR2VvQW5ndWxhci9hcHAvc2NyaXB0cy9zZXJ2aWNlcy9WZWN0b3IvY3N2LmpzIiwiL1VzZXJzL2FkbWluL0RvY3VtZW50cy9HaXRIdWIvR2VvRm9yY2UvR2VvQW5ndWxhci9hcHAvc2NyaXB0cy9zZXJ2aWNlcy9WZWN0b3IvdmVjdG9yLmpzIiwiL1VzZXJzL2FkbWluL0RvY3VtZW50cy9HaXRIdWIvR2VvRm9yY2UvR2VvQW5ndWxhci9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnVmZmVyL2luZGV4LmpzIiwiL1VzZXJzL2FkbWluL0RvY3VtZW50cy9HaXRIdWIvR2VvRm9yY2UvR2VvQW5ndWxhci9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnVmZmVyL25vZGVfbW9kdWxlcy9iYXNlNjQtanMvbGliL2I2NC5qcyIsIi9Vc2Vycy9hZG1pbi9Eb2N1bWVudHMvR2l0SHViL0dlb0ZvcmNlL0dlb0FuZ3VsYXIvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2J1ZmZlci9ub2RlX21vZHVsZXMvaWVlZTc1NC9pbmRleC5qcyIsIi9Vc2Vycy9hZG1pbi9Eb2N1bWVudHMvR2l0SHViL0dlb0ZvcmNlL0dlb0FuZ3VsYXIvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2J1ZmZlci9ub2RlX21vZHVsZXMvaXMtYXJyYXkvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdHhCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuSUE7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1SUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2piQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4ZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5Z0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9FQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0WUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN01BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6b0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5TUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcHNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3WkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaDVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9UQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeFJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJtb2R1bGUuZXhwb3J0cyA9IHtcblxuXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSB7XG5cbiAgLyoqXG4gICAqIEJhc2VtYXBzIFBhbmVsIExpc3RcbiAgICpcbiAgICogTGlzdCBvZiBiYXNlbWFwcyB0aGF0IGdldCBzaG93biBpbiB0aGUgQmFzZW1hcHMgUGFuZWwuIEVkaXQgdGhpcyB0byBhZGQgb3IgcmVtb3ZlXG4gICAqIGJhc2VtYXBzIHRoYXQgdGhlIHVzZXIgd2lsbCBzZWUgYXMgY2hvaWNlcy4gQWxsIGJhc2VtYXBzLCBpbmNsdWRpbmcgb25lcyBub3QgaW4gdGhpc1xuICAgKiBsaXN0LCBjYW4gc3RpbGwgYmUgbWFudWFsbHkgcmVmZXJlbmNlZCBpbiB0aGUgdXJsLiBUaGlzIGlzIGp1c3QgZm9yIHRoZSBVc2VyIEludGVyZmFjZS5cbiAgICovXG4gIGJhc2VtYXBzOiBbXG4gICAgJ29zbWhvdCcsXG4gICAgJ29zbScsXG4gICAgJ3NhdGVsbGl0ZScsXG4gICAgJ3RvbmVyJyxcbiAgICAnZGFyaycsXG4gICAgJ2dpdGh1YicsXG4gICAgJ25hdGdlbycsXG4gICAgJ3VzZ3N0b3BvJyxcbiAgICAnZXNyaXRvcG8nLFxuICAgICd3YXRlcmNvbG9yJ1xuICBdLFxuXG5cbiAgLyoqXG4gICAqIEJhc2VtYXBzXG4gICAqXG4gICAqIEFsbCBiYXNlbWFwIGFsaWFzZXMgdGhhdCBjYW4gYmUgcmVmZXJyZWQgdG8gaW4gdGhlIHVybC4gVGhlIGNvcnJlc3BvbmRpbmdcbiAgICogcGF0aCB0byB0aGUgdGh1bWJuYWlsIGluIHRoZSBCYXNlbWFwcyBQYW5lbCBzaG91bGQgYmU6XG4gICAqICAgIGltYWdlcy97YWxpYXNOYW1lfS5qcGdcbiAgICpcbiAgICovXG5cbiAgb3NtaG90OiB7XG4gICAgdXJsOiAnaHR0cDovL3tzfS50aWxlLm9wZW5zdHJlZXRtYXAuZnIvaG90L3t6fS97eH0ve3l9LnBuZycsXG4gICAgbmFtZTogJ0h1bWFuaXRhcmlhbiBPcGVuU3RyZWV0TWFwJyxcbiAgICB0eXBlOiAnYmFzZW1hcCdcbiAgfSxcblxuICAvLyByZWRjcm9zczoge1xuICAvLyAgIHVybDogJ2h0dHBzOi8ve3N9LnRpbGVzLm1hcGJveC5jb20vdjMvYW1lcmljYW5yZWRjcm9zcy5oY2ppMjJkZS97en0ve3h9L3t5fS5wbmcnLFxuICAvLyAgIG5hbWU6ICdSZWQgQ3Jvc3MnLFxuICAvLyAgIHR5cGU6ICdiYXNlbWFwJ1xuICAvLyB9LFxuXG4gIHNhdGVsbGl0ZToge1xuICAgIHVybDogJ2h0dHBzOi8ve3N9LnRpbGVzLm1hcGJveC5jb20vdjMvZXhhbXBsZXMubWFwLXFmeXJ4NXI4L3t6fS97eH0ve3l9LnBuZycsXG4gICAgbmFtZTogJ01hcGJveCBTYXRlbGxpdGUnLFxuICAgIHR5cGU6ICdiYXNlbWFwJ1xuICB9LFxuXG4gIGdpdGh1Yjoge1xuICAgIHVybDogJ2h0dHA6Ly97c30udGlsZXMubWFwYm94LmNvbS92My9naXRodWIubWFwLXhncTJzdnJ6L3t6fS97eH0ve3l9LnBuZycsXG4gICAgbmFtZTogJ0dpdGh1YicsXG4gICAgdHlwZTogJ2Jhc2VtYXAnXG4gIH0sXG5cbiAgZGFyazoge1xuICAgIHVybDogJ2h0dHA6Ly97c30udGlsZXMubWFwYm94LmNvbS92My9zcGF0aWFsZGV2Lm1hcC1jOXoyY3llZi97en0ve3h9L3t5fS5wbmcnLFxuICAgIG5hbWU6ICdEYXJrIFRoZW1lJyxcbiAgICB0eXBlOiAnYmFzZW1hcCdcbiAgfSxcblxuICBvc206IHtcbiAgICB1cmw6ICdodHRwOi8ve3N9LnRpbGUub3NtLm9yZy97en0ve3h9L3t5fS5wbmcnLFxuICAgIG5hbWU6ICdTdGFuZGFyZCBPcGVuU3RyZWV0TWFwJyxcbiAgICB0eXBlOiAnYmFzZW1hcCdcbiAgfSxcblxuICBuYXRnZW86IHtcbiAgICB1cmw6ICdodHRwOi8vc2VydmljZXMuYXJjZ2lzb25saW5lLmNvbS9BcmNHSVMvcmVzdC9zZXJ2aWNlcy9OYXRHZW9fV29ybGRfTWFwL01hcFNlcnZlci90aWxlL3t6fS97eX0ve3h9JyxcbiAgICBuYW1lOiAnTmF0aW9uYWwgR2VvZ3JhcGhpYycsXG4gICAgdHlwZTogJ2Jhc2VtYXAnXG4gIH0sXG5cbiAgdXNnc3RvcG86IHtcbiAgICB1cmw6ICdodHRwOi8vc2VydmljZXMuYXJjZ2lzb25saW5lLmNvbS9BcmNHSVMvcmVzdC9zZXJ2aWNlcy9VU0FfVG9wb19NYXBzL01hcFNlcnZlci90aWxlL3t6fS97eX0ve3h9JyxcbiAgICBuYW1lOiAnVVNHUyBUb3BvZ3JhcGhpYycsXG4gICAgdHlwZTogJ2Jhc2VtYXAnXG4gIH0sXG5cbiAgb3J0aG86IHtcbiAgICB1cmw6ICdodHRwOi8vc2VydmljZXMuYXJjZ2lzb25saW5lLmNvbS9BcmNHSVMvcmVzdC9zZXJ2aWNlcy9Xb3JsZF9JbWFnZXJ5L01hcFNlcnZlci90aWxlL3t6fS97eX0ve3h9JyxcbiAgICBuYW1lOiAnT3J0aG9ncmFwaGljJyxcbiAgICB0eXBlOiAnYmFzZW1hcCdcbiAgfSxcblxuICBlc3JpdG9wbzoge1xuICAgIHVybDogJ2h0dHA6Ly9zZXJ2aWNlcy5hcmNnaXNvbmxpbmUuY29tL0FyY0dJUy9yZXN0L3NlcnZpY2VzL1dvcmxkX1RvcG9fTWFwL01hcFNlcnZlci90aWxlL3t6fS97eX0ve3h9JyxcbiAgICBuYW1lOiAnRXNyaSBUb3BvZ3JhcGhpYycsXG4gICAgdHlwZTogJ2Jhc2VtYXAnXG4gIH0sXG5cbiAgdG9uZXI6IHtcbiAgICB1cmw6ICdodHRwOi8ve3N9LnRpbGUuc3RhbWVuLmNvbS90b25lci97en0ve3h9L3t5fS5wbmcnLFxuICAgIG5hbWU6ICdTdGFtZW4gVG9uZXInLFxuICAgIHR5cGU6ICdiYXNlbWFwJ1xuICB9LFxuXG4gIHdhdGVyY29sb3I6IHtcbiAgICB1cmw6ICdodHRwOi8ve3N9LnRpbGUuc3RhbWVuLmNvbS93YXRlcmNvbG9yL3t6fS97eH0ve3l9LnBuZycsXG4gICAgbmFtZTogJ1N0YW1lbiBXYXRlcmNvbG9yJyxcbiAgICB0eXBlOiAnYmFzZW1hcCdcbiAgfVxuXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIHVzZ3NlYXJ0aHF1YWtlOiB7XG4gICAgdHlwZTogJ2dlb2pzb24nLFxuICAgIHRoZW1lOiAnZGlzYXN0ZXInLFxuICAgIHVybDogJ2h0dHA6Ly9lYXJ0aHF1YWtlLnVzZ3MuZ292L2VhcnRocXVha2VzL2ZlZWQvdjEuMC9zdW1tYXJ5L3NpZ25pZmljYW50X3dlZWsuZ2VvanNvbicsXG4gICAgcHJvcGVydGllczoge1xuICAgICAgJ3RpdGxlJzogJ1VTR1MgUmVhbHRpbWUgRWFydGhxdWFrZXMgRmVlZCAoV2VlayknXG5cbiAgICB9XG4gIH0sXG5cbiAgcHJlY2lwaXRhdGlvbjoge1xuICAgIG5hbWU6ICdQcmVjaXBpdGF0aW9uJyxcbiAgICB0eXBlOiAneHl6JyxcbiAgICB0aGVtZTogJ2Rpc2FzdGVyJyxcbiAgICB1cmw6ICdodHRwOi8ve3N9LnRpbGUub3BlbndlYXRoZXJtYXAub3JnL21hcC9wcmVjaXBpdGF0aW9uL3t6fS97eH0ve3l9LnBuZycsXG4gICAgb3BhY2l0eTogMC41XG4gIH0sXG5cbiAgcmFpbjoge1xuICAgIG5hbWU6ICdSYWluJyxcbiAgICB0eXBlOiAneHl6JyxcbiAgICB0aGVtZTogJ2Rpc2FzdGVyJyxcbiAgICB1cmw6ICdodHRwOi8ve3N9LnRpbGUub3BlbndlYXRoZXJtYXAub3JnL21hcC9yYWluL3t6fS97eH0ve3l9LnBuZydcbiAgfVxuXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSB7XG5cbiAgc25vdzoge1xuICAgIG5hbWU6ICdTbm93JyxcbiAgICB0eXBlOiAneHl6JyxcbiAgICB0aGVtZTogJ290aGVyJyxcbiAgICB1cmw6ICdodHRwOi8ve3N9LnRpbGUub3BlbndlYXRoZXJtYXAub3JnL21hcC9zbm93L3t6fS97eH0ve3l9LnBuZydcbiAgfSxcblxuICBwcmVzc3VyZWNvbnRvdXI6IHtcbiAgICBuYW1lOiAnUHJlc3N1cmUgQ29udG91cicsXG4gICAgdHlwZTogJ3h5eicsXG4gICAgdGhlbWU6ICdvdGhlcicsXG4gICAgdXJsOiAnaHR0cDovL3tzfS50aWxlLm9wZW53ZWF0aGVybWFwLm9yZy9tYXAvcHJlc3N1cmVfY250ci97en0ve3h9L3t5fS5wbmcnLFxuICAgIG9wYWNpdHk6IDAuOVxuICB9LFxuXG4gIHByZXNzdXJlOiB7XG4gICAgbmFtZTogJ1ByZXNzdXJlJyxcbiAgICB0eXBlOiAneHl6JyxcbiAgICB0aGVtZTogJ290aGVyJyxcbiAgICB1cmw6ICdodHRwOi8ve3N9LnRpbGUub3BlbndlYXRoZXJtYXAub3JnL21hcC9wcmVzc3VyZS97en0ve3h9L3t5fS5wbmcnXG4gIH0sXG5cbiAgdGVtcGVyYXR1cmU6IHtcbiAgICBuYW1lOiAnVGVtcGVyYXR1cmUnLFxuICAgIHR5cGU6ICd4eXonLFxuICAgIHRoZW1lOiAnb3RoZXInLFxuICAgIHVybDogJ2h0dHA6Ly97c30udGlsZS5vcGVud2VhdGhlcm1hcC5vcmcvbWFwL3RlbXAve3p9L3t4fS97eX0ucG5nJ1xuICB9LFxuXG4gIHdpbmQ6IHtcbiAgICBuYW1lOiAnV2luZCcsXG4gICAgdHlwZTogJ3h5eicsXG4gICAgdGhlbWU6ICdvdGhlcicsXG4gICAgdXJsOiAnaHR0cDovL3tzfS50aWxlLm9wZW53ZWF0aGVybWFwLm9yZy9tYXAvd2luZC97en0ve3h9L3t5fS5wbmcnXG4gIH0sXG5cbiAgY2xvdWRzOiB7XG4gICAgbmFtZTogJ0Nsb3VkIENvdmVyJyxcbiAgICB0eXBlOiAneHl6JyxcbiAgICB0aGVtZTogJ290aGVyJyxcbiAgICB1cmw6ICdodHRwOi8ve3N9LnRpbGUub3BlbndlYXRoZXJtYXAub3JnL21hcC9jbG91ZHNfY2xzL3t6fS97eH0ve3l9LnBuZycsXG4gICAgb3BhY2l0eTogMC41IC8vIG9wdGlvbmFsLiBvcGFjaXR5IGlzIDAuNSBpZiBub3Qgc3BlY2lmaWVkXG4gIH0sXG5cbiAgcHJlY2lwaXRhdGlvbmNsYXNzaWM6IHtcbiAgICBuYW1lOiAnUHJlY2lwaXRhdGlvbiAoQ2xhc3NpYyknLFxuICAgIHR5cGU6ICd4eXonLFxuICAgIHRoZW1lOiAnb3RoZXInLFxuICAgIHVybDogJ2h0dHA6Ly97c30udGlsZS5vcGVud2VhdGhlcm1hcC5vcmcvbWFwL3ByZWNpcGl0YXRpb25fY2xzL3t6fS97eH0ve3l9LnBuZycsXG4gICAgb3BhY2l0eTogMC40XG4gIH0sXG5cbiAgcmFpbmNsYXNzaWM6IHtcbiAgICBuYW1lOiAnUmFpbiAoQ2xhc3NpYyknLFxuICAgIHR5cGU6ICd4eXonLFxuICAgIHRoZW1lOiAnb3RoZXInLFxuICAgIHVybDogJ2h0dHA6Ly97c30udGlsZS5vcGVud2VhdGhlcm1hcC5vcmcvbWFwL3JhaW5fY2xzL3t6fS97eH0ve3l9LnBuZydcbiAgfSxcblxuICBsYWNjb21tdW5pdGllczoge1xuICAgIG5hbWU6ICdMQUMgQ29tbXVuaXRpZXMnLFxuICAgIHR5cGU6ICdnZW9qc29uJyxcbiAgICB0aGVtZTogJ290aGVyJyxcbiAgICB1cmw6ICdodHRwczovL2dpc3QuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2Fub255bW91cy9kNThlNTFkNjEyYWRkNjQ4MzI1Ny9yYXcvTEFDX0NvbW11bml0aWVzX3N0eWxlZC5nZW9qc29uJ1xuICB9LFxuXG4gIHJmbGluc3RydWN0b3JzOiB7XG4gICAgbmFtZTogJ1JGTCBJbnN0cnVjdG9ycycsXG4gICAgdHlwZTogJ2dlb2pzb24nLFxuICAgIHRoZW1lOiAnb3RoZXInLFxuICAgIHVybDogJ2h0dHBzOi8vZ2lzdC5naXRodWJ1c2VyY29udGVudC5jb20vZGFuYmpvc2VwaC83MTFmOTJiZmFlMWIxMWVlZTFlOS9yYXcvcmZsLWluc3RydWN0b3JzLmdlb2pzb24nXG4gIH0sXG5cbiAgbWlzc2luZ21hcHNfbWFwYXRob25zOiB7XG4gICAgbmFtZTogJ01pc3NpbmcgTWFwcyBNYXBhdGhvbnMnLFxuICAgIHR5cGU6ICdnZW9qc29uJyxcbiAgICB0aGVtZTogJ290aGVyJyxcbiAgICB1cmw6ICdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vTWlzc2luZ01hcHMvbWlzc2luZ21hcHMuZ2l0aHViLmlvL21hc3Rlci9kYXRhL2V2ZW50cy5qc29uJ1xuICB9LFxuICAvL0luZnJvbSBSaXNrIExheWVyc1xuICBpbmZvcm1fd29ybGRfaW5kZXg6IHtcbiAgICBuYW1lOiAnSW5mb3JtIFdvcmxkIFJpc2sgSW5kZXgnLFxuICAgIHR5cGU6ICdnZW9qc29uJyxcbiAgICB0aGVtZTogJ290aGVyJyxcbiAgICB1cmw6ICdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vQW1lcmljYW5SZWRDcm9zcy9yaXNrbGF5ZXJzL21hc3Rlci9pbmZvcm0vSU5GT1JNX3dvcmxkX2luZGV4Lmdlb2pzb24nXG4gIH0sXG4gIGluZm9ybV93b3JsZF9pbmRleF9uYXR1cmFsX2hhemFyZHM6IHtcbiAgICBuYW1lOiAnSW5mb3JtIE5hdHVyYWwgSGF6YXJkcycsXG4gICAgdHlwZTogJ2dlb2pzb24nLFxuICAgIHRoZW1lOiAnb3RoZXInLFxuICAgIHVybDogJ2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9BbWVyaWNhblJlZENyb3NzL3Jpc2tsYXllcnMvbWFzdGVyL2luZm9ybS9JTkZPUk1fd29ybGRfaW5kZXhfbmF0dXJhbF9oYXphcmQuZ2VvanNvbidcbiAgfSxcbiAgaW5mb3JtX3dvcmxkX2luZGV4X3RvcGxpbmU6IHtcbiAgICBuYW1lOiAnSW5mb3JtIFJpc2sgVG9wIExpbmUnLFxuICAgIHR5cGU6ICdnZW9qc29uJyxcbiAgICB0aGVtZTogJ290aGVyJyxcbiAgICB1cmw6ICdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vQW1lcmljYW5SZWRDcm9zcy9yaXNrbGF5ZXJzL21hc3Rlci9pbmZvcm0vSU5GT1JNX3dvcmxkX2luZGV4X3RvcGxpbmVfbWV0cmljcy5nZW9qc29uJ1xuICB9LFxuICB3cmlfcmlzazIwMTQ6IHtcbiAgICBuYW1lOiAnV29ybGQgUmlzayBJbmRleCAyMDE0JyxcbiAgICB0eXBlOiAnZ2VvanNvbicsXG4gICAgdGhlbWU6ICdvdGhlcicsXG4gICAgdXJsOiAnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL0FtZXJpY2FuUmVkQ3Jvc3Mvcmlza2xheWVycy9tYXN0ZXIvV1JJX3Jpc2syMDE0Lmdlb2pzb24nXG4gIH0sXG4gIGFjdGl2ZV9odXJyaWNhbmU6IHtcbiAgICBuYW1lOiAnQWN0aXZlIEh1cnJpY2FuZXMnLFxuICAgIHR5cGU6ICdrbWwnLFxuICAgIHRoZW1lOiAnb3RoZXInLFxuICAgIHVybDogJ2h0dHA6Ly93d3cubmhjLm5vYWEuZ292L2dpcy9rbWwvbmhjX2FjdGl2ZS5rbWwnXG4gIH0sXG4gIGFyY19vZmZpY2VzOiB7XG4gICAgbmFtZTogJ0lTRCBPZmZpY2VzJyxcbiAgICB0eXBlOiAnZ2VvanNvbicsXG4gICAgdGhlbWU6ICdvdGhlcicsXG4gICAgdXJsOiAnaHR0cHM6Ly9naXN0LmdpdGh1YnVzZXJjb250ZW50LmNvbS9kYWxla3VuY2UvZWFhNDBmMzE0YWQ1YTZkMjhhNmUvcmF3L2FyY19vZmZpY2VzLmdlb2pzb24nXG4gIH0sXG4gIHJlZGNyb3NzX29mZmljZXM6IHtcbiAgICBuYW1lOiAnUmVkIENyb3NzIE9mZmljZXMgV29ybGQgV2lkZScsXG4gICAgdHlwZTogJ2dlb2pzb24nLFxuICAgIHRoZW1lOiAnb3RoZXInLFxuICAgIHVybDogJ2h0dHBzOi8vZ2lzdC5naXRodWJ1c2VyY29udGVudC5jb20vZGFsZWt1bmNlLzVmYjJhNGIzN2NkODZlN2NiODJlL3Jhdy85YzQxNTc5YmZlZGY1YTBhNTBjOWE3YWZlYTA2ZDE2ZGMzY2E5ZWIyL3JjcmNfbG9jYXRpb25zLmdlb2pzb24nXG4gIH1cblxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0ge1xuXG4gIC8vTm90ZSAtIGFzIG9mIEFwcmlsIDEyLCAyMDE1LCB0aGlzIGlzIHJldHVybmluZyBlbXB0eSBpbWFnZXNcbiAgLy9sYW5kY292ZXI6IHtcbiAgLy8gIG5hbWU6ICdNT0RJUyBMYW5kY292ZXIgMjAxMScsXG4gIC8vICB0eXBlOiAnd21zJyxcbiAgLy8gIHRoZW1lOiAncHJvamVjdCcsXG4gIC8vICB1cmw6ICdodHRwOi8vYWdzLnNlcnZpcmxhYnMubmV0L2FyY2dpcy9yZXN0L3NlcnZpY2VzL0dsb2JhbC9NT0RJU19MYW5kY292ZXJfVHlwZTFfMjAxMS9NYXBTZXJ2ZXIvV01TU2VydmVyJyxcbiAgLy8gIGxheWVyczogJzAnLFxuICAvLyAgcHJvcGVydGllczoge1xuICAvLyAgICBsZWdlbmQ6IFwiXCJcbiAgLy8gIH1cbiAgLy99XG5cbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcblxufTtcbiIsIi8qKlxuICogQ3JlYXRlZCBieSBSeWFuIFdoaXRsZXkgPHJ3aGl0bGV5QHNwYXRpYWxkZXYuY29tPlxuICogICAgICAgb24gMTIvMTUvMTQuXG4gKi9cblxuLy9EZWZhdWx0IG9wYWNpdHkgb2YgR0FETSBwb2x5Z29uc1xudmFyIG9wYWNpdHkgPSBcIjAuNVwiO1xuXG52YXIgZ2FkbTAgPSB7XG4gIHR5cGU6ICdwYmYnLFxuICBuYW1lOiAnR0FETTAnLFxuICAvL3VybDogXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvc2VydmljZXMvcG9zdGdpcy9nYWRtMC9nZW9tX3NpbXBsaWZ5X21lZC92ZWN0b3ItdGlsZXMve3p9L3t4fS97eX0ucGJmP2ZpZWxkcz1ndWlkOjpjaGFyYWN0ZXIgdmFyeWluZyxuYW1lXzAseWVhciZsYWJlbHBvaW50cz10cnVlXCIsXG4gIC8vdXJsOiBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9zZXJ2aWNlcy9wb3N0Z2lzL2dhZG0wL2dlb21fc2ltcGxpZnlfbWVkL3ZlY3Rvci10aWxlcy97en0ve3h9L3t5fS5wYmY/ZmllbGRzPWd1aWQ6OmNoYXJhY3RlciB2YXJ5aW5nLG5hbWVfMCx5ZWFyXCIsXG5cbiAgLy91cmw6IFwiLi4vc2VydmljZXMvdmVjdG9yLXRpbGVzL2dhZG0wX2xhYmVsc18yMDE0L3t6fS97eH0ve3l9LnBiZlwiLFxuICB1cmw6IFwiaHR0cHM6Ly9zMy11cy13ZXN0LTIuYW1hem9uYXdzLmNvbS92ZWN0b3ItdGlsZXMvZ2FkbTAve3p9L3t4fS97eX0ucGJmXCIsXG5cbiAgLy91cmw6IFwiaHR0cDovL3tzfS5zcGF0aWFsZGV2dGlsZXMuY29tL2dhZG0wL3t6fS97eH0ve3l9LnBiZlwiLFxuICBkZXRhaWxzVXJsOiAnc2VydmljZXMvY3VzdG9tL2N1c3RvbV9vcGVyYXRpb24/bmFtZT1nZXQ6dGhlbWVieWd1aWQmZm9ybWF0PWpzb24mZ3VpZHM9Omd1aWRzJmdhZG1fbGV2ZWw9OmxldmVsJmZpbHRlcnM9OmZpbHRlcnMnLFxuICBkZWJ1ZzogZmFsc2UsXG4gIGNsaWNrYWJsZUxheWVyczogW1wiR0FETV8yMDE0XCJdLFxuXG4gIGdldElERm9yTGF5ZXJGZWF0dXJlOiBmdW5jdGlvbiAoZmVhdHVyZSkge1xuICAgIHJldHVybiBmZWF0dXJlLnByb3BlcnRpZXMuZ3VpZDtcbiAgICAvL3JldHVybiBmZWF0dXJlLnByb3BlcnRpZXMubmFtZV8wO1xuICB9LFxuICBtdXRleFRvZ2dsZTogdHJ1ZSxcblxuICAvL1RoZSBmaWx0ZXIgZnVuY3Rpb24gZG9lcyAyIHRoaW5nczogMSkgTWVyZ2UgaW4gZXh0ZXJuYWwgcHJvcGVydGllcyB0aGF0IGNhbiBiZSB1c2VkIGZvciBjaG9yb3BsZXRoaW5nLiAgMikgRmlsdGVyIG91dCBmZWF0dXJlcyB0aGF0IGRvbid0IGhhdmUgRUNPUyBwcm9wZXJ0aWVzXG4gIGZpbHRlcjogZnVuY3Rpb24odnRmLCAkcm9vdFNjb3BlKXtcbiAgICB2YXIgZGF0YSA9ICRyb290U2NvcGUudnREYXRhO1xuXG4gICAgLy9TaG93IG9ubHkgY291bnRyaWVzIHdpdGggYWN0aXZlIHRoZW1lIHByb3BlcnRpZXNcbiAgICBpZihkYXRhICYmIGRhdGFbdnRmLnByb3BlcnRpZXMuZ3VpZF0pe1xuICAgICAgdmFyIHRoZW1lID0gJHJvb3RTY29wZS4kc3RhdGVQYXJhbXMudGhlbWU7XG4gICAgICB2dGYucHJvcGVydGllcy50aGVtZSA9IHRoZW1lO1xuICAgICAgdnRmLnByb3BlcnRpZXMuZWNvc19wcm9wZXJ0aWVzID0ge307XG4gICAgICB2dGYucHJvcGVydGllcy5lY29zX3Byb3BlcnRpZXNbdGhlbWVdID0gZGF0YVt2dGYucHJvcGVydGllcy5ndWlkXTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTsgLy9kcmF3IGZlYXR1cmVcbiAgfSxcblxuICAvKipcbiAgICogV2hlbiB3ZSB3YW50IHRvIGxpbmsgZXZlbnRzIGJldHdlZW4gbGF5ZXJzLCBsaWtlIGNsaWNraW5nIG9uIGEgbGFiZWwgYW5kIGFcbiAgICogY29ycmVzcG9uZGluZyBwb2x5Z29uIGZyZWF0dXJlLCB0aGlzIHdpbGwgcmV0dXJuIHRoZSBjb3JyZXNwb25kaW5nIG1hcHBpbmdcbiAgICogYmV0d2VlbiBsYXllcnMuIFRoaXMgcHJvdmlkZXMga25vd2xlZGdlIG9mIHdoaWNoIG90aGVyIGZlYXR1cmUgYSBnaXZlbiBmZWF0dXJlXG4gICAqIGlzIGxpbmtlZCB0by5cbiAgICpcbiAgICogQHBhcmFtIGxheWVyTmFtZSAgdGhlIGxheWVyIHdlIHdhbnQgdG8ga25vdyB0aGUgbGlua2VkIGxheWVyIGZyb21cbiAgICogQHJldHVybnMge3N0cmluZ30gcmV0dXJucyBjb3JyZXNwb25kaW5nIGxpbmtlZCBsYXllclxuICAgKi9cbiAgbGF5ZXJMaW5rOiBmdW5jdGlvbiAobGF5ZXJOYW1lKSB7XG4gICAgaWYgKGxheWVyTmFtZS5pbmRleE9mKCdfbGFiZWwnKSA+IC0xKSB7XG4gICAgICByZXR1cm4gbGF5ZXJOYW1lLnJlcGxhY2UoJ19sYWJlbCcsICcnKTtcbiAgICB9XG4gICAgcmV0dXJuIGxheWVyTmFtZSArICdfbGFiZWwnO1xuICB9LFxuXG4gIHN0eWxlOiBnZXRUaGVtZVN0eWxlLFxuXG4gIG9uQ2xpY2s6IGZ1bmN0aW9uKGV2dCwgJGh0dHAsICRyb290U2NvcGUsIFBCRk9iamVjdCkge1xuXG4gICAgaWYoZXZ0ICYmIGV2dC5mZWF0dXJlICYmIGV2dC5mZWF0dXJlLmlkKXtcbiAgICAgIC8vRG8gdGhlIG9uY2xpY2sgdGhpbmdcbiAgICAgIFBCRk9iamVjdC5mZXRjaEZlYXR1cmVEZXRhaWxzKGV2dC5mZWF0dXJlLmlkLCAwLCBldnQuZmVhdHVyZS5wcm9wZXJ0aWVzLm5hbWVfMCk7XG4gICAgfVxuICB9LFxuICBvblNlbGVjdDogZnVuY3Rpb24odnRmLCBQQkZPYmplY3Qpe1xuICAgIC8vV2hlbiBhIHNlbGVjdGlvbiBoYXMgY2hhbmdlZCAobGlrZXkgd2hlbiBhIGxhYmVsIHdhcyBjbGlja2VkIGFuZCB0aGUgY29ycmVzcG9uZGluZyBmZWF0dXJlIHNlbGVjdGVkKVxuICAgIGlmKHZ0ZiAmJiB2dGYuaWQpe1xuICAgICAgLy9EbyB0aGUgb25jbGljayB0aGluZ1xuICAgICAgUEJGT2JqZWN0LmZldGNoRmVhdHVyZURldGFpbHModnRmLmlkLCAwLCB2dGYucHJvcGVydGllcy5uYW1lXzApO1xuICAgIH1cbiAgfSxcbiAgbGVnZW5kOiBmdW5jdGlvbigpe1xuXG4gIH1cbn1cblxudmFyIGdhZG0xID0ge1xuICB0eXBlOiAncGJmJyxcbiAgbmFtZTogJ0dBRE0xJyxcbiAgLy91cmw6IFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL3NlcnZpY2VzL3Bvc3RnaXMvZ2FkbTAvZ2VvbV9zaW1wbGlmeV9tZWQvdmVjdG9yLXRpbGVzL3t6fS97eH0ve3l9LnBiZj9maWVsZHM9Z3VpZDo6Y2hhcmFjdGVyIHZhcnlpbmcsbmFtZV8wLHllYXImbGFiZWxwb2ludHM9dHJ1ZVwiLFxuICAvL3VybDogXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvc2VydmljZXMvcG9zdGdpcy9nYWRtMC9nZW9tX3NpbXBsaWZ5X21lZC92ZWN0b3ItdGlsZXMve3p9L3t4fS97eX0ucGJmP2ZpZWxkcz1ndWlkOjpjaGFyYWN0ZXIgdmFyeWluZyxuYW1lXzAseWVhclwiLFxuXG4gIHVybDogXCJodHRwczovL3MzLXVzLXdlc3QtMi5hbWF6b25hd3MuY29tL3ZlY3Rvci10aWxlcy9nYWRtMS97en0ve3h9L3t5fS5wYmZcIixcblxuICBkZXRhaWxzVXJsOiAnc2VydmljZXMvY3VzdG9tL2N1c3RvbV9vcGVyYXRpb24/bmFtZT1nZXQ6dGhlbWVieWd1aWQmZm9ybWF0PWpzb24mZ3VpZHM9Omd1aWRzJmdhZG1fbGV2ZWw9MSZmaWx0ZXJzPTpmaWx0ZXJzJyxcbiAgZGVidWc6IGZhbHNlLFxuICBjbGlja2FibGVMYXllcnM6IFtcIkdBRE1fMjAxNFwiXSxcblxuICBnZXRJREZvckxheWVyRmVhdHVyZTogZnVuY3Rpb24gKGZlYXR1cmUpIHtcbiAgICByZXR1cm4gZmVhdHVyZS5wcm9wZXJ0aWVzLmd1aWQ7XG4gIH0sXG4gIG11dGV4VG9nZ2xlOiB0cnVlLFxuXG4gIC8qKlxuICAgKiBUaGUgZmlsdGVyIGZ1bmN0aW9uIGdldHMgY2FsbGVkIHdoZW4gaXRlcmF0aW5nIHRob3VnaCBlYWNoIHZlY3RvciB0aWxlIGZlYXR1cmUgKHZ0ZikuIFlvdSBoYXZlIGFjY2Vzc1xuICAgKiB0byBldmVyeSBwcm9wZXJ0eSBhc3NvY2lhdGVkIHdpdGggYSBnaXZlbiBmZWF0dXJlICh0aGUgZmVhdHVyZSwgYW5kIHRoZSBsYXllcikuIFlvdSBjYW4gYWxzbyBmaWx0ZXJcbiAgICogYmFzZWQgb2YgdGhlIGNvbnRleHQgKGVhY2ggdGlsZSB0aGF0IHRoZSBmZWF0dXJlIGlzIGRyYXduIG9udG8pLlxuICAgKlxuICAgKiBSZXR1cm5pbmcgZmFsc2Ugc2tpcHMgb3ZlciB0aGUgZmVhdHVyZSBhbmQgaXQgaXMgbm90IGRyYXduLlxuICAgKlxuICAgKiBAcGFyYW0gZmVhdHVyZVxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIGZpbHRlcjogZnVuY3Rpb24odnRmLCAkcm9vdFNjb3BlKXtcbiAgICB2YXIgZGF0YSA9ICRyb290U2NvcGUudnREYXRhO1xuXG4gICAgaWYoZGF0YSAmJiBkYXRhW3Z0Zi5wcm9wZXJ0aWVzLmd1aWRdKXtcbiAgICAgIHZhciB0aGVtZSA9ICRyb290U2NvcGUuJHN0YXRlUGFyYW1zLnRoZW1lO1xuICAgICAgdnRmLnByb3BlcnRpZXMudGhlbWUgPSB0aGVtZTtcbiAgICAgIHZ0Zi5wcm9wZXJ0aWVzLmVjb3NfcHJvcGVydGllcyA9IHt9O1xuICAgICAgdnRmLnByb3BlcnRpZXMuZWNvc19wcm9wZXJ0aWVzW3RoZW1lXSA9IGRhdGFbdnRmLnByb3BlcnRpZXMuZ3VpZF07XG4gICAgICAvL3JldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9LFxuXG4gIC8qKlxuICAgKiBXaGVuIHdlIHdhbnQgdG8gbGluayBldmVudHMgYmV0d2VlbiBsYXllcnMsIGxpa2UgY2xpY2tpbmcgb24gYSBsYWJlbCBhbmQgYVxuICAgKiBjb3JyZXNwb25kaW5nIHBvbHlnb24gZnJlYXR1cmUsIHRoaXMgd2lsbCByZXR1cm4gdGhlIGNvcnJlc3BvbmRpbmcgbWFwcGluZ1xuICAgKiBiZXR3ZWVuIGxheWVycy4gVGhpcyBwcm92aWRlcyBrbm93bGVkZ2Ugb2Ygd2hpY2ggb3RoZXIgZmVhdHVyZSBhIGdpdmVuIGZlYXR1cmVcbiAgICogaXMgbGlua2VkIHRvLlxuICAgKlxuICAgKiBAcGFyYW0gbGF5ZXJOYW1lICB0aGUgbGF5ZXIgd2Ugd2FudCB0byBrbm93IHRoZSBsaW5rZWQgbGF5ZXIgZnJvbVxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSByZXR1cm5zIGNvcnJlc3BvbmRpbmcgbGlua2VkIGxheWVyXG4gICAqL1xuICBsYXllckxpbms6IGZ1bmN0aW9uIChsYXllck5hbWUpIHtcbiAgICBpZiAobGF5ZXJOYW1lLmluZGV4T2YoJ19sYWJlbCcpID4gLTEpIHtcbiAgICAgIHJldHVybiBsYXllck5hbWUucmVwbGFjZSgnX2xhYmVsJywgJycpO1xuICAgIH1cbiAgICByZXR1cm4gbGF5ZXJOYW1lICsgJ19sYWJlbCc7XG4gIH0sXG5cbiAgc3R5bGU6IGdldFRoZW1lU3R5bGUsXG5cbiAgb25DbGljazogZnVuY3Rpb24oZXZ0LCAkaHR0cCwgJHJvb3RTY29wZSwgUEJGT2JqZWN0KSB7XG5cbiAgICBpZihldnQgJiYgZXZ0LmZlYXR1cmUgJiYgZXZ0LmZlYXR1cmUuaWQpe1xuICAgICAgLy9EbyB0aGUgb25jbGljayB0aGluZ1xuICAgICAgUEJGT2JqZWN0LmZldGNoRmVhdHVyZURldGFpbHMoZXZ0LmZlYXR1cmUuaWQsIDAsIGV2dC5mZWF0dXJlLnByb3BlcnRpZXMubmFtZV8xICsgXCIsIFwiICsgZXZ0LmZlYXR1cmUucHJvcGVydGllcy5uYW1lXzApO1xuICAgIH1cbiAgfSxcbiAgb25TZWxlY3Q6IGZ1bmN0aW9uKHZ0ZiwgUEJGT2JqZWN0KXtcbiAgICAvL1doZW4gYSBzZWxlY3Rpb24gaGFzIGNoYW5nZWQgKGxpa2V5IHdoZW4gYSBsYWJlbCB3YXMgY2xpY2tlZCBhbmQgdGhlIGNvcnJlc3BvbmRpbmcgZmVhdHVyZSBzZWxlY3RlZClcbiAgICBpZih2dGYgJiYgdnRmLmlkKXtcbiAgICAgIC8vRG8gdGhlIG9uY2xpY2sgdGhpbmdcbiAgICAgIFBCRk9iamVjdC5mZXRjaEZlYXR1cmVEZXRhaWxzKHZ0Zi5pZCwgMCwgdnRmLnByb3BlcnRpZXMubmFtZV8xICsgXCIsIFwiICsgdnRmLnByb3BlcnRpZXMubmFtZV8wKTtcbiAgICB9XG4gIH1cbn1cblxudmFyIGdhZG0yID0ge1xuICB0eXBlOiAncGJmJyxcbiAgbmFtZTogJ0dBRE0yJyxcbiAgLy91cmw6IFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL3NlcnZpY2VzL3Bvc3RnaXMvZ2FkbTAvZ2VvbV9zaW1wbGlmeV9tZWQvdmVjdG9yLXRpbGVzL3t6fS97eH0ve3l9LnBiZj9maWVsZHM9Z3VpZDo6Y2hhcmFjdGVyIHZhcnlpbmcsbmFtZV8wLHllYXImbGFiZWxwb2ludHM9dHJ1ZVwiLFxuICAvL3VybDogXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvc2VydmljZXMvcG9zdGdpcy9nYWRtMC9nZW9tX3NpbXBsaWZ5X21lZC92ZWN0b3ItdGlsZXMve3p9L3t4fS97eX0ucGJmP2ZpZWxkcz1ndWlkOjpjaGFyYWN0ZXIgdmFyeWluZyxuYW1lXzAseWVhclwiLFxuXG4gIHVybDogXCJodHRwczovL3MzLXVzLXdlc3QtMi5hbWF6b25hd3MuY29tL3ZlY3Rvci10aWxlcy9nYWRtMi97en0ve3h9L3t5fS5wYmZcIixcblxuICBkZXRhaWxzVXJsOiAnc2VydmljZXMvY3VzdG9tL2N1c3RvbV9vcGVyYXRpb24/bmFtZT1nZXQ6dGhlbWVieWd1aWQmZm9ybWF0PWpzb24mZ3VpZHM9Omd1aWRzJmdhZG1fbGV2ZWw9MiZmaWx0ZXJzPTpmaWx0ZXJzJyxcbiAgZGVidWc6IGZhbHNlLFxuICBjbGlja2FibGVMYXllcnM6IFtcIkdBRE1fMjAxNFwiXSxcblxuICBnZXRJREZvckxheWVyRmVhdHVyZTogZnVuY3Rpb24gKGZlYXR1cmUpIHtcbiAgICByZXR1cm4gZmVhdHVyZS5wcm9wZXJ0aWVzLmd1aWQ7XG4gIH0sXG4gIG11dGV4VG9nZ2xlOiB0cnVlLFxuXG4gIC8qKlxuICAgKiBUaGUgZmlsdGVyIGZ1bmN0aW9uIGdldHMgY2FsbGVkIHdoZW4gaXRlcmF0aW5nIHRob3VnaCBlYWNoIHZlY3RvciB0aWxlIGZlYXR1cmUgKHZ0ZikuIFlvdSBoYXZlIGFjY2Vzc1xuICAgKiB0byBldmVyeSBwcm9wZXJ0eSBhc3NvY2lhdGVkIHdpdGggYSBnaXZlbiBmZWF0dXJlICh0aGUgZmVhdHVyZSwgYW5kIHRoZSBsYXllcikuIFlvdSBjYW4gYWxzbyBmaWx0ZXJcbiAgICogYmFzZWQgb2YgdGhlIGNvbnRleHQgKGVhY2ggdGlsZSB0aGF0IHRoZSBmZWF0dXJlIGlzIGRyYXduIG9udG8pLlxuICAgKlxuICAgKiBSZXR1cm5pbmcgZmFsc2Ugc2tpcHMgb3ZlciB0aGUgZmVhdHVyZSBhbmQgaXQgaXMgbm90IGRyYXduLlxuICAgKlxuICAgKiBAcGFyYW0gZmVhdHVyZVxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIGZpbHRlcjogZnVuY3Rpb24odnRmLCAkcm9vdFNjb3BlKXtcbiAgICB2YXIgZGF0YSA9ICRyb290U2NvcGUudnREYXRhO1xuXG4gICAgaWYoZGF0YSAmJiBkYXRhW3Z0Zi5wcm9wZXJ0aWVzLmd1aWRdKXtcbiAgICAgIHZhciB0aGVtZSA9ICRyb290U2NvcGUuJHN0YXRlUGFyYW1zLnRoZW1lO1xuICAgICAgdnRmLnByb3BlcnRpZXMudGhlbWUgPSB0aGVtZTtcbiAgICAgIHZ0Zi5wcm9wZXJ0aWVzLmVjb3NfcHJvcGVydGllcyA9IHt9O1xuICAgICAgdnRmLnByb3BlcnRpZXMuZWNvc19wcm9wZXJ0aWVzW3RoZW1lXSA9IGRhdGFbdnRmLnByb3BlcnRpZXMuZ3VpZF07XG4gICAgICAvL3JldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9LFxuXG4gIC8qKlxuICAgKiBXaGVuIHdlIHdhbnQgdG8gbGluayBldmVudHMgYmV0d2VlbiBsYXllcnMsIGxpa2UgY2xpY2tpbmcgb24gYSBsYWJlbCBhbmQgYVxuICAgKiBjb3JyZXNwb25kaW5nIHBvbHlnb24gZnJlYXR1cmUsIHRoaXMgd2lsbCByZXR1cm4gdGhlIGNvcnJlc3BvbmRpbmcgbWFwcGluZ1xuICAgKiBiZXR3ZWVuIGxheWVycy4gVGhpcyBwcm92aWRlcyBrbm93bGVkZ2Ugb2Ygd2hpY2ggb3RoZXIgZmVhdHVyZSBhIGdpdmVuIGZlYXR1cmVcbiAgICogaXMgbGlua2VkIHRvLlxuICAgKlxuICAgKiBAcGFyYW0gbGF5ZXJOYW1lICB0aGUgbGF5ZXIgd2Ugd2FudCB0byBrbm93IHRoZSBsaW5rZWQgbGF5ZXIgZnJvbVxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSByZXR1cm5zIGNvcnJlc3BvbmRpbmcgbGlua2VkIGxheWVyXG4gICAqL1xuICBsYXllckxpbms6IGZ1bmN0aW9uIChsYXllck5hbWUpIHtcbiAgICBpZiAobGF5ZXJOYW1lLmluZGV4T2YoJ19sYWJlbCcpID4gLTEpIHtcbiAgICAgIHJldHVybiBsYXllck5hbWUucmVwbGFjZSgnX2xhYmVsJywgJycpO1xuICAgIH1cbiAgICByZXR1cm4gbGF5ZXJOYW1lICsgJ19sYWJlbCc7XG4gIH0sXG5cbiAgc3R5bGU6IGdldFRoZW1lU3R5bGUsXG5cbiAgb25DbGljazogZnVuY3Rpb24oZXZ0LCAkaHR0cCwgJHJvb3RTY29wZSwgUEJGT2JqZWN0KSB7XG5cbiAgICBpZihldnQgJiYgZXZ0LmZlYXR1cmUgJiYgZXZ0LmZlYXR1cmUuaWQpe1xuICAgICAgLy9EbyB0aGUgb25jbGljayB0aGluZ1xuICAgICAgUEJGT2JqZWN0LmZldGNoRmVhdHVyZURldGFpbHMoZXZ0LmZlYXR1cmUuaWQsIDAsIGV2dC5mZWF0dXJlLnByb3BlcnRpZXMubmFtZV8yICsgXCIsIFwiICsgZXZ0LmZlYXR1cmUucHJvcGVydGllcy5uYW1lXzEgKyBcIiwgXCIgKyBldnQuZmVhdHVyZS5wcm9wZXJ0aWVzLm5hbWVfMCk7XG4gICAgfVxuICB9LFxuICBvblNlbGVjdDogZnVuY3Rpb24odnRmLCBQQkZPYmplY3Qpe1xuICAgIC8vV2hlbiBhIHNlbGVjdGlvbiBoYXMgY2hhbmdlZCAobGlrZXkgd2hlbiBhIGxhYmVsIHdhcyBjbGlja2VkIGFuZCB0aGUgY29ycmVzcG9uZGluZyBmZWF0dXJlIHNlbGVjdGVkKVxuICAgIGlmKHZ0ZiAmJiB2dGYuaWQpe1xuICAgICAgLy9EbyB0aGUgb25jbGljayB0aGluZ1xuICAgICAgUEJGT2JqZWN0LmZldGNoRmVhdHVyZURldGFpbHModnRmLmlkLCAwLCB2dGYucHJvcGVydGllcy5uYW1lXzIgKyBcIiwgXCIgKyB2dGYucHJvcGVydGllcy5uYW1lXzEgKyBcIiwgXCIgKyB2dGYucHJvcGVydGllcy5uYW1lXzApO1xuICAgIH1cbiAgfVxufVxuXG5cbi8qKlxuICogUmVkIENyb3NzIFJlZ2lvbnNcbiAqL1xuXG52YXIgYXJjcmVnaW9ucyA9IHtcbiAgdHlwZTogJ3BiZicsXG4gIG5hbWU6ICdhcmNyZWdpb25zJyxcbiAgLy91cmw6IFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL3NlcnZpY2VzL3Bvc3RnaXMvZ2FkbTAvZ2VvbV9zaW1wbGlmeV9tZWQvdmVjdG9yLXRpbGVzL3t6fS97eH0ve3l9LnBiZj9maWVsZHM9Z3VpZDo6Y2hhcmFjdGVyIHZhcnlpbmcsbmFtZV8wLHllYXImbGFiZWxwb2ludHM9dHJ1ZVwiLFxuICAvL3VybDogXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvc2VydmljZXMvcG9zdGdpcy9nYWRtMC9nZW9tX3NpbXBsaWZ5X21lZC92ZWN0b3ItdGlsZXMve3p9L3t4fS97eX0ucGJmP2ZpZWxkcz1ndWlkOjpjaGFyYWN0ZXIgdmFyeWluZyxuYW1lXzAseWVhclwiLFxuXG4gIHVybDogXCJodHRwczovL3MzLXVzLXdlc3QtMi5hbWF6b25hd3MuY29tL3ZlY3Rvci10aWxlcy9hcmNfcmVnaW9ucy97en0ve3h9L3t5fS5wYmZcIixcblxuICBkZXRhaWxzVXJsOiAnc2VydmljZXMvY3VzdG9tL2N1c3RvbV9vcGVyYXRpb24/bmFtZT1nZXQ6dGhlbWVieWd1aWQmZm9ybWF0PWpzb24mZ3VpZHM9Omd1aWRzJmdhZG1fbGV2ZWw9LTEmZmlsdGVycz06ZmlsdGVycycsXG4gIGRlYnVnOiBmYWxzZSxcbiAgY2xpY2thYmxlTGF5ZXJzOiBbXCJHQURNXzIwMTRcIl0sXG5cbiAgZ2V0SURGb3JMYXllckZlYXR1cmU6IGZ1bmN0aW9uIChmZWF0dXJlKSB7XG4gICAgcmV0dXJuIGZlYXR1cmUucHJvcGVydGllcy5ndWlkO1xuICB9LFxuICBtdXRleFRvZ2dsZTogdHJ1ZSxcblxuICAvKipcbiAgICogVGhlIGZpbHRlciBmdW5jdGlvbiBnZXRzIGNhbGxlZCB3aGVuIGl0ZXJhdGluZyB0aG91Z2ggZWFjaCB2ZWN0b3IgdGlsZSBmZWF0dXJlICh2dGYpLiBZb3UgaGF2ZSBhY2Nlc3NcbiAgICogdG8gZXZlcnkgcHJvcGVydHkgYXNzb2NpYXRlZCB3aXRoIGEgZ2l2ZW4gZmVhdHVyZSAodGhlIGZlYXR1cmUsIGFuZCB0aGUgbGF5ZXIpLiBZb3UgY2FuIGFsc28gZmlsdGVyXG4gICAqIGJhc2VkIG9mIHRoZSBjb250ZXh0IChlYWNoIHRpbGUgdGhhdCB0aGUgZmVhdHVyZSBpcyBkcmF3biBvbnRvKS5cbiAgICpcbiAgICogUmV0dXJuaW5nIGZhbHNlIHNraXBzIG92ZXIgdGhlIGZlYXR1cmUgYW5kIGl0IGlzIG5vdCBkcmF3bi5cbiAgICpcbiAgICogQHBhcmFtIGZlYXR1cmVcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBmaWx0ZXI6IGZ1bmN0aW9uKHZ0ZiwgJHJvb3RTY29wZSl7XG4gICAgdmFyIGRhdGEgPSAkcm9vdFNjb3BlLnZ0RGF0YTtcblxuICAgIGlmKGRhdGEgJiYgZGF0YVt2dGYucHJvcGVydGllcy5ndWlkXSl7XG4gICAgICB2YXIgdGhlbWUgPSAkcm9vdFNjb3BlLiRzdGF0ZVBhcmFtcy50aGVtZTtcbiAgICAgIHZ0Zi5wcm9wZXJ0aWVzLnRoZW1lID0gdGhlbWU7XG4gICAgICB2dGYucHJvcGVydGllcy5lY29zX3Byb3BlcnRpZXMgPSB7fTtcbiAgICAgIHZ0Zi5wcm9wZXJ0aWVzLmVjb3NfcHJvcGVydGllc1t0aGVtZV0gPSBkYXRhW3Z0Zi5wcm9wZXJ0aWVzLmd1aWRdO1xuICAgICAgLy9yZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSxcblxuICAvKipcbiAgICogV2hlbiB3ZSB3YW50IHRvIGxpbmsgZXZlbnRzIGJldHdlZW4gbGF5ZXJzLCBsaWtlIGNsaWNraW5nIG9uIGEgbGFiZWwgYW5kIGFcbiAgICogY29ycmVzcG9uZGluZyBwb2x5Z29uIGZyZWF0dXJlLCB0aGlzIHdpbGwgcmV0dXJuIHRoZSBjb3JyZXNwb25kaW5nIG1hcHBpbmdcbiAgICogYmV0d2VlbiBsYXllcnMuIFRoaXMgcHJvdmlkZXMga25vd2xlZGdlIG9mIHdoaWNoIG90aGVyIGZlYXR1cmUgYSBnaXZlbiBmZWF0dXJlXG4gICAqIGlzIGxpbmtlZCB0by5cbiAgICpcbiAgICogQHBhcmFtIGxheWVyTmFtZSAgdGhlIGxheWVyIHdlIHdhbnQgdG8ga25vdyB0aGUgbGlua2VkIGxheWVyIGZyb21cbiAgICogQHJldHVybnMge3N0cmluZ30gcmV0dXJucyBjb3JyZXNwb25kaW5nIGxpbmtlZCBsYXllclxuICAgKi9cbiAgbGF5ZXJMaW5rOiBmdW5jdGlvbiAobGF5ZXJOYW1lKSB7XG4gICAgaWYgKGxheWVyTmFtZS5pbmRleE9mKCdfbGFiZWwnKSA+IC0xKSB7XG4gICAgICByZXR1cm4gbGF5ZXJOYW1lLnJlcGxhY2UoJ19sYWJlbCcsICcnKTtcbiAgICB9XG4gICAgcmV0dXJuIGxheWVyTmFtZSArICdfbGFiZWwnO1xuICB9LFxuXG4gIHN0eWxlOiBnZXRUaGVtZVN0eWxlLFxuXG4gIG9uQ2xpY2s6IGZ1bmN0aW9uKGV2dCwgJGh0dHAsICRyb290U2NvcGUsIFBCRk9iamVjdCkge1xuXG4gICAgaWYoZXZ0ICYmIGV2dC5mZWF0dXJlICYmIGV2dC5mZWF0dXJlLmlkKXtcbiAgICAgIC8vRG8gdGhlIG9uY2xpY2sgdGhpbmdcbiAgICAgIFBCRk9iamVjdC5mZXRjaEZlYXR1cmVEZXRhaWxzKGV2dC5mZWF0dXJlLmlkLCAwLCBldnQuZmVhdHVyZS5wcm9wZXJ0aWVzLkFSQ19SZWdpb24pO1xuICAgIH1cbiAgfSxcbiAgb25TZWxlY3Q6IGZ1bmN0aW9uKHZ0ZiwgUEJGT2JqZWN0KXtcbiAgICAvL1doZW4gYSBzZWxlY3Rpb24gaGFzIGNoYW5nZWQgKGxpa2V5IHdoZW4gYSBsYWJlbCB3YXMgY2xpY2tlZCBhbmQgdGhlIGNvcnJlc3BvbmRpbmcgZmVhdHVyZSBzZWxlY3RlZClcbiAgICBpZih2dGYgJiYgdnRmLmlkKXtcbiAgICAgIC8vRG8gdGhlIG9uY2xpY2sgdGhpbmdcbiAgICAgIFBCRk9iamVjdC5mZXRjaEZlYXR1cmVEZXRhaWxzKHZ0Zi5pZCwgMCwgdnRmLnByb3BlcnRpZXMuQVJDX1JlZ2lvbik7XG4gICAgfVxuICB9XG59XG5cblxuXG5cbmZ1bmN0aW9uIGdldFRoZW1lU3R5bGUodnRmLCAkcm9vdFNjb3BlKXtcblxuICB2YXIgZWNvc19ib3JkZXJfdGhpY2tuZXNzID0gMTsgLy9weCAtIHRoaXMgaXMgdGhlIHRoaWNrbmVzcyBvZiBib3VuZGFyaWVzIHRoYXQgaGF2ZSBlY29zIGRhdGEgYXNzb2NpYXRlZFxuICB2YXIgZWNvc19ib3JkZXJfY29sb3IgPSBcInJnYmEoMTQwLDE0MCwxNDAsMSlcIjtcblxuICB2YXIgc3R5bGUgPSB7fTtcbiAgLy9EZWZhdWx0IHN0eWxlIGZvciBhbGwgYm91bmRhcmllcyAtIG1ha2UgaG9sbG93LCB3aXRoIGEgdGhpbiBvdXRsaW5lLlxuICBzdHlsZS5jb2xvciA9ICdyZ2JhKDAsMCwwLDAuMSknO1xuICBzdHlsZS5vdXRsaW5lID0ge1xuICAgIGNvbG9yOiAncmdiYSgyMCwyMCwyMCwwLjUpJyxcbiAgICBzaXplOi41XG4gIH07XG5cbiAgdmFyIHByb3BlcnRpZXMgPSB2dGYucHJvcGVydGllcztcblxuICAvL1NraXAgaWYgd2UncmUgYSByZWd1bGFyIHBvbHlnb24sIGFuZCBub3QgYSBsYWJlbCBwb2ludCwgYW5kIGlmIHRoZXJlIGlzIG5vIEVDT1MgcHJvcGVydGllcy5cbiAgaWYodnRmLmxheWVyLm5hbWUuaW5kZXhPZignbGFiZWwnKSA9PSAtMSAmJiAhcHJvcGVydGllcy50aGVtZSl7XG4gICAgcmV0dXJuIHN0eWxlO1xuICB9XG5cbiAgdmFyIGNoZWNrZWQ7XG5cbiAgLy9TZWUgaWYgd2Ugc2hvdWxkIHNob3cgdGhlbWUgYmFkZ2VzL2J1YmJsZXMgb3Igbm90XG4gIGlmKCRzdGF0ZVBhcmFtcy50aGVtZWxhYmVscyAhPT0gbnVsbCAmJiAkc3RhdGVQYXJhbXMudGhlbWVsYWJlbHMgIT09IHVuZGVmaW5lZCl7XG4gICAgY2hlY2tlZCA9ICRzdGF0ZVBhcmFtcy50aGVtZWxhYmVscztcbiAgfVxuICBlbHNle1xuICAgIC8vaWYgbm90IHByZXNlbnQsIGRlZmF1bHQgdG8gdHJ1ZVxuICAgIGNoZWNrZWQgPSAndHJ1ZSc7XG4gIH1cblxuICB2YXIgZWNvc1Byb3BlcnRpZXM7XG5cbiAgaWYgKHByb3BlcnRpZXMudGhlbWUgPT0gXCJkaXNhc3RlclwiKSB7XG4gICAgZWNvc1Byb3BlcnRpZXMgPSBwcm9wZXJ0aWVzW1wiZWNvc19wcm9wZXJ0aWVzXCJdW1wiZGlzYXN0ZXJcIl07XG5cbiAgICBpZiAoZWNvc1Byb3BlcnRpZXMpIHtcbiAgICAgIGlmIChlY29zUHJvcGVydGllcy5pcm9jX3N0YXR1c19fYykge1xuICAgICAgICAvL0tlZXAgdHJhY2sgb2YgdGhlIHByb3BlcnR5IG5hbWUgZm9yIHRoZSBzYWtlIG9mIGxlZ2VuZCBkaXNwbGF5XG4gICAgICAgIHN0eWxlLmxlZ2VuZExhYmVsID0gZWNvc1Byb3BlcnRpZXMuaXJvY19zdGF0dXNfX2M7XG5cbiAgICAgICAgc3dpdGNoIChlY29zUHJvcGVydGllcy5pcm9jX3N0YXR1c19fYy50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICAgICAgY2FzZSBcImFjdGl2ZVwiOlxuICAgICAgICAgICAgc3R5bGUuY29sb3IgPSAncmdiYSgyMDQsMCw1MSwnICsgb3BhY2l0eSArICcpJztcbiAgICAgICAgICAgIHN0eWxlLm91dGxpbmUgPSB7XG4gICAgICAgICAgICAgIGNvbG9yOiBlY29zX2JvcmRlcl9jb2xvcixcbiAgICAgICAgICAgICAgc2l6ZTogZWNvc19ib3JkZXJfdGhpY2tuZXNzXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFwibW9uaXRvcmluZ1wiOlxuICAgICAgICAgICAgc3R5bGUuY29sb3IgPSAncmdiYSgyMDQsMTUzLDAsJyArIG9wYWNpdHkgKyAnKSc7XG4gICAgICAgICAgICBzdHlsZS5vdXRsaW5lID0ge1xuICAgICAgICAgICAgICBjb2xvcjogZWNvc19ib3JkZXJfY29sb3IsXG4gICAgICAgICAgICAgIHNpemU6IGVjb3NfYm9yZGVyX3RoaWNrbmVzc1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBcImluYWN0aXZlXCI6XG4gICAgICAgICAgICBzdHlsZS5jb2xvciA9ICdyZ2JhKDI1NSwyNTUsMjU1LCcgKyBvcGFjaXR5ICsgJyknO1xuICAgICAgICAgICAgc3R5bGUub3V0bGluZSA9IHtcbiAgICAgICAgICAgICAgY29sb3I6IGVjb3NfYm9yZGVyX2NvbG9yLFxuICAgICAgICAgICAgICBzaXplOiBlY29zX2JvcmRlcl90aGlja25lc3NcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gIH1cbiAgZWxzZSBpZiAocHJvcGVydGllcy50aGVtZSA9PSBcImRpc2FzdGVyVHlwZVwiKSB7XG4gICAgZWNvc1Byb3BlcnRpZXMgPSBwcm9wZXJ0aWVzW1wiZWNvc19wcm9wZXJ0aWVzXCJdW1wiZGlzYXN0ZXJUeXBlXCJdOyAvL3RoaXMgaXMgYW4gYXJyYXkgb2YgZGlzYXN0ZXIgdHlwZXMgZm9yIHRoaXMgYXJlYVxuICAgIGlmIChlY29zUHJvcGVydGllcyAmJiBlY29zUHJvcGVydGllcy5kaXNhc3Rlcl90eXBlX19jKSB7XG5cbiAgICAgIC8vS2VlcCB0cmFjayBvZiB0aGUgcHJvcGVydHkgbmFtZSBmb3IgdGhlIHNha2Ugb2YgbGVnZW5kIGRpc3BsYXlcbiAgICAgIHN0eWxlLmxlZ2VuZExhYmVsID0gZWNvc1Byb3BlcnRpZXMuZGlzYXN0ZXJfdHlwZV9fYztcblxuICAgICAgLy9Vc2UgdGhlIHN0YXR1cyB0byBjb2xvciB0aGUgcmVnaW9ucyBieSBzdGF0dXMuXG4gICAgICBpZiAoZWNvc1Byb3BlcnRpZXMuaXJvY19zdGF0dXNfX2MpIHtcblxuICAgICAgICBzd2l0Y2ggKGVjb3NQcm9wZXJ0aWVzLmlyb2Nfc3RhdHVzX19jLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgICAgICBjYXNlIFwiYWN0aXZlXCI6XG4gICAgICAgICAgICBzdHlsZS5jb2xvciA9ICdyZ2JhKDIwNCwwLDUxLCcgKyBvcGFjaXR5ICsgJyknO1xuICAgICAgICAgICAgc3R5bGUub3V0bGluZSA9IHtcbiAgICAgICAgICAgICAgY29sb3I6IGVjb3NfYm9yZGVyX2NvbG9yLFxuICAgICAgICAgICAgICBzaXplOiBlY29zX2JvcmRlcl90aGlja25lc3NcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgXCJtb25pdG9yaW5nXCI6XG4gICAgICAgICAgICBzdHlsZS5jb2xvciA9ICdyZ2JhKDIwNCwxNTMsMCwnICsgb3BhY2l0eSArICcpJztcbiAgICAgICAgICAgIHN0eWxlLm91dGxpbmUgPSB7XG4gICAgICAgICAgICAgIGNvbG9yOiBlY29zX2JvcmRlcl9jb2xvcixcbiAgICAgICAgICAgICAgc2l6ZTogZWNvc19ib3JkZXJfdGhpY2tuZXNzXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFwiaW5hY3RpdmVcIjpcbiAgICAgICAgICAgIHN0eWxlLmNvbG9yID0gJ3JnYmEoMjU1LDI1NSwyNTUsJyArIG9wYWNpdHkgKyAnKSc7XG4gICAgICAgICAgICBzdHlsZS5vdXRsaW5lID0ge1xuICAgICAgICAgICAgICBjb2xvcjogZWNvc19ib3JkZXJfY29sb3IsXG4gICAgICAgICAgICAgIHNpemU6IGVjb3NfYm9yZGVyX3RoaWNrbmVzc1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2V7XG4gICAgICAgIC8vTG9vayB1cCB0aGUgY29sb3IgaW4gdGhlIGRpY3Rpb25hcnksIGlmIHN0YXR1cyBwcm9wZXJ0eSBpcyBub3QgYXJvdW5kXG4gICAgICAgIHN0eWxlLmNvbG9yID0gY29uZmlnLlVOT0NIQUljb25Mb29rdXBbZWNvc1Byb3BlcnRpZXMuZGlzYXN0ZXJfdHlwZV9fY1swXV0uY29sb3I7XG5cbiAgICAgICAgLy9Vc2UgdGhlIHNhbWUgb3V0bGluZVxuICAgICAgICBzdHlsZS5vdXRsaW5lID0ge1xuICAgICAgICAgIGNvbG9yOiBlY29zX2JvcmRlcl9jb2xvcixcbiAgICAgICAgICBzaXplOiBlY29zX2JvcmRlcl90aGlja25lc3NcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZihjaGVja2VkID09ICd0cnVlJyl7XG4gICAgICAgIC8vRGlzYXN0ZXIgVHlwZSBzaG91bGQgdXNlIE9DSEEgaWNvbnNcbiAgICAgICAgLy9CdXQgcmVwbGFjZSB0aGUgb3BhY2l0eSB3aXRoIHNvbGlkIGZpbGwgZm9yIHRoZSBidWJibGVcbiAgICAgICAgdmFyIGJ1YmJsZV9maWxsID0gc3R5bGUuY29sb3IucmVwbGFjZShcIixcIiArIG9wYWNpdHkgKyBcIilcIiwgXCIsMSlcIik7XG4gICAgICAgIHN0eWxlLnN0YXRpY0xhYmVsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHZhciBsYWJlbFN0eWxlID0ge1xuICAgICAgICAgICAgaHRtbDogKGVjb3NQcm9wZXJ0aWVzICYmIGVjb3NQcm9wZXJ0aWVzLmRpc2FzdGVyX3R5cGVfX2NbMF0gPyBidWlsZERpc2FzdGVyVHlwZUxhYmVsKGVjb3NQcm9wZXJ0aWVzLmRpc2FzdGVyX3R5cGVfX2NbMF0sIGJ1YmJsZV9maWxsLCBzdHlsZS5vdXRsaW5lKSA6IFwiXCIpLFxuICAgICAgICAgICAgaWNvblNpemU6IFs0MiwgNDJdLFxuICAgICAgICAgICAgY3NzQ2xhc3M6ICdub2NsYXNzJ1xuICAgICAgICAgIH07XG4gICAgICAgICAgcmV0dXJuIGxhYmVsU3R5bGU7XG4gICAgICAgIH07XG4gICAgICB9XG5cblxuICAgIH1cbiAgfVxuICBlbHNlIGlmIChwcm9wZXJ0aWVzLnRoZW1lID09IFwicHJvamVjdFJpc2tcIikge1xuICAgIGVjb3NQcm9wZXJ0aWVzID0gcHJvcGVydGllc1tcImVjb3NfcHJvcGVydGllc1wiXVtcInByb2plY3RSaXNrXCJdO1xuICAgIGlmIChlY29zUHJvcGVydGllcyAmJiBlY29zUHJvcGVydGllcy5vdmVyYWxsX2Fzc2Vzc21lbnRfX2MpIHtcbiAgICAgIC8vS2VlcCB0cmFjayBvZiB0aGUgcHJvcGVydHkgbmFtZSBmb3IgdGhlIHNha2Ugb2YgbGVnZW5kIGRpc3BsYXlcbiAgICAgIHN0eWxlLmxlZ2VuZExhYmVsID0gZWNvc1Byb3BlcnRpZXMub3ZlcmFsbF9hc3Nlc3NtZW50X19jO1xuXG4gICAgICBzd2l0Y2ggKGVjb3NQcm9wZXJ0aWVzLm92ZXJhbGxfYXNzZXNzbWVudF9fYy50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICAgIGNhc2UgXCJjcml0aWNhbFwiOlxuICAgICAgICAgIHN0eWxlLmNvbG9yID0gJ3JnYmEoMjU1LDAsMCwnICsgb3BhY2l0eSArICcpJztcbiAgICAgICAgICBzdHlsZS5vdXRsaW5lID0ge1xuICAgICAgICAgICAgY29sb3I6IGVjb3NfYm9yZGVyX2NvbG9yLFxuICAgICAgICAgICAgc2l6ZTogZWNvc19ib3JkZXJfdGhpY2tuZXNzXG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiaGlnaFwiOlxuICAgICAgICAgIHN0eWxlLmNvbG9yID0gJ3JnYmEoMjU1LDEyNywwLCcgKyBvcGFjaXR5ICsgJyknO1xuICAgICAgICAgIHN0eWxlLm91dGxpbmUgPSB7XG4gICAgICAgICAgICBjb2xvcjogZWNvc19ib3JkZXJfY29sb3IsXG4gICAgICAgICAgICBzaXplOiBlY29zX2JvcmRlcl90aGlja25lc3NcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJtZWRpdW1cIjpcbiAgICAgICAgICBzdHlsZS5jb2xvciA9ICdyZ2JhKDI1NSwyNTUsMCwnICsgb3BhY2l0eSArICcpJztcbiAgICAgICAgICBzdHlsZS5vdXRsaW5lID0ge1xuICAgICAgICAgICAgY29sb3I6IGVjb3NfYm9yZGVyX2NvbG9yLFxuICAgICAgICAgICAgc2l6ZTogZWNvc19ib3JkZXJfdGhpY2tuZXNzXG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwibG93XCI6XG4gICAgICAgICAgc3R5bGUuY29sb3IgPSAncmdiYSgwLDI1NSwwLCcgKyBvcGFjaXR5ICsgJyknO1xuICAgICAgICAgIHN0eWxlLm91dGxpbmUgPSB7XG4gICAgICAgICAgICBjb2xvcjogZWNvc19ib3JkZXJfY29sb3IsXG4gICAgICAgICAgICBzaXplOiBlY29zX2JvcmRlcl90aGlja25lc3NcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGVsc2UgaWYgKHByb3BlcnRpZXMudGhlbWUgPT0gXCJwcm9qZWN0SGVhbHRoXCIpIHtcbiAgICBlY29zUHJvcGVydGllcyA9IHByb3BlcnRpZXNbXCJlY29zX3Byb3BlcnRpZXNcIl1bXCJwcm9qZWN0SGVhbHRoXCJdO1xuICAgIGlmIChlY29zUHJvcGVydGllcyAmJiBlY29zUHJvcGVydGllcy5vdmVyYWxsX3N0YXR1c19fYykge1xuICAgICAgLy9LZWVwIHRyYWNrIG9mIHRoZSBwcm9wZXJ0eSBuYW1lIGZvciB0aGUgc2FrZSBvZiBsZWdlbmQgZGlzcGxheVxuICAgICAgc3R5bGUubGVnZW5kTGFiZWwgPSBlY29zUHJvcGVydGllcy5vdmVyYWxsX3N0YXR1c19fYztcblxuICAgICAgc3dpdGNoIChlY29zUHJvcGVydGllcy5vdmVyYWxsX3N0YXR1c19fYy50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICAgIGNhc2UgXCJyZWRcIjpcbiAgICAgICAgICBzdHlsZS5jb2xvciA9ICdyZ2JhKDI1NSwwLDAsJyArIG9wYWNpdHkgKyAnKSc7XG4gICAgICAgICAgc3R5bGUub3V0bGluZSA9IHtcbiAgICAgICAgICAgIGNvbG9yOiBlY29zX2JvcmRlcl9jb2xvcixcbiAgICAgICAgICAgIHNpemU6IGVjb3NfYm9yZGVyX3RoaWNrbmVzc1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcInllbGxvd1wiOlxuICAgICAgICAgIHN0eWxlLmNvbG9yID0gJ3JnYmEoMjU1LDI1NSwwLCcgKyBvcGFjaXR5ICsgJyknO1xuICAgICAgICAgIHN0eWxlLm91dGxpbmUgPSB7XG4gICAgICAgICAgICBjb2xvcjogZWNvc19ib3JkZXJfY29sb3IsXG4gICAgICAgICAgICBzaXplOiBlY29zX2JvcmRlcl90aGlja25lc3NcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJncmVlblwiOlxuICAgICAgICAgIHN0eWxlLmNvbG9yID0gJ3JnYmEoMCwyNTUsMCwnICsgb3BhY2l0eSArICcpJztcbiAgICAgICAgICBzdHlsZS5vdXRsaW5lID0ge1xuICAgICAgICAgICAgY29sb3I6IGVjb3NfYm9yZGVyX2NvbG9yLFxuICAgICAgICAgICAgc2l6ZTogZWNvc19ib3JkZXJfdGhpY2tuZXNzXG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwid2hpdGVcIjpcbiAgICAgICAgICBzdHlsZS5jb2xvciA9ICdyZ2JhKDI1NSwyNTUsMjU1LCcgKyBvcGFjaXR5ICsgJyknO1xuICAgICAgICAgIHN0eWxlLm91dGxpbmUgPSB7XG4gICAgICAgICAgICBjb2xvcjogZWNvc19ib3JkZXJfY29sb3IsXG4gICAgICAgICAgICBzaXplOiBlY29zX2JvcmRlcl90aGlja25lc3NcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGVsc2UgaWYgKHByb3BlcnRpZXMudGhlbWUgPT0gXCJwcm9qZWN0XCIpIHtcbiAgICBlY29zUHJvcGVydGllcyA9IHByb3BlcnRpZXNbXCJlY29zX3Byb3BlcnRpZXNcIl1bXCJwcm9qZWN0XCJdO1xuXG4gICAgaWYgKGVjb3NQcm9wZXJ0aWVzICYmIGVjb3NQcm9wZXJ0aWVzKSB7XG5cbiAgICAgIC8vS2VlcCB0cmFjayBvZiB0aGUgcHJvcGVydHkgbmFtZSBmb3IgdGhlIHNha2Ugb2YgbGVnZW5kIGRpc3BsYXlcbiAgICAgIHN0eWxlLmxlZ2VuZExhYmVsID0gXCIjUHJvamVjdHNcIjtcblxuICAgICAgLy9mb3IgdGhlIHB1cnBvc2VzIG9mIHNob3dpbmcgYSBsZWdlbmQsIGtlZXAgdGhpcyBncmFkaWVudCBoYW5keVxuICAgICAgc3R5bGUuZ3JhZGllbnQgPSBbXG4gICAgICAgICdyZ2JhKDI1NSwyNTUsMjU1LCcgKyBvcGFjaXR5ICsgJyknLFxuICAgICAgICAncmdiYSgwLDI1NSw1OSwnICsgb3BhY2l0eSArICcpJ1xuICAgICAgXTtcblxuICAgICAgdmFyIGNvdW50ID0gIHBhcnNlSW50KGVjb3NQcm9wZXJ0aWVzLnRoZW1lX2NvdW50KTtcblxuICAgICAgaWYoY291bnQgPT0gMCkge1xuICAgICAgICAvL21ha2UgaG9sbG93XG4gICAgICAgIHN0eWxlLmNvbG9yID0gJ3JnYmEoMCwwLDAsJyArIG9wYWNpdHkgKyAnKSc7XG4gICAgICAgIHN0eWxlLm91dGxpbmUgPSB7XG4gICAgICAgICAgY29sb3I6IGVjb3NfYm9yZGVyX2NvbG9yLFxuICAgICAgICAgIHNpemU6IGVjb3NfYm9yZGVyX3RoaWNrbmVzc1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIGlmKGNvdW50ID4gMCAmJiBjb3VudCA8PSAyKSB7XG4gICAgICAgIC8vbWFrZSBob2xsb3dcbiAgICAgICAgc3R5bGUuY29sb3IgPSAncmdiYSgyMjksMjU1LDIzNSwnICsgb3BhY2l0eSArICcpJztcbiAgICAgICAgc3R5bGUub3V0bGluZSA9IHtcbiAgICAgICAgICBjb2xvcjogZWNvc19ib3JkZXJfY29sb3IsXG4gICAgICAgICAgc2l6ZTogZWNvc19ib3JkZXJfdGhpY2tuZXNzXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2UgaWYoY291bnQgPiAyICYmIGNvdW50IDw9IDUpIHtcbiAgICAgICAgLy9tYWtlIGhvbGxvd1xuICAgICAgICBzdHlsZS5jb2xvciA9ICdyZ2JhKDE2OSwyNTUsMTg5LCcgKyBvcGFjaXR5ICsgJyknO1xuICAgICAgICBzdHlsZS5vdXRsaW5lID0ge1xuICAgICAgICAgIGNvbG9yOiBlY29zX2JvcmRlcl9jb2xvcixcbiAgICAgICAgICBzaXplOiBlY29zX2JvcmRlcl90aGlja25lc3NcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSBpZihjb3VudCA+IDUgJiYgY291bnQgPD0gOCkge1xuICAgICAgICAvL21ha2UgaG9sbG93XG4gICAgICAgIHN0eWxlLmNvbG9yID0gJ3JnYmEoMTY5LDI1NSwxMjUsJyArIG9wYWNpdHkgKyAnKSc7XG4gICAgICAgIHN0eWxlLm91dGxpbmUgPSB7XG4gICAgICAgICAgY29sb3I6IGVjb3NfYm9yZGVyX2NvbG9yLFxuICAgICAgICAgIHNpemU6IGVjb3NfYm9yZGVyX3RoaWNrbmVzc1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIGlmKGNvdW50ID4gOCAmJiBjb3VudCA8PSAxMCkge1xuICAgICAgICAvL21ha2UgaG9sbG93XG4gICAgICAgIHN0eWxlLmNvbG9yID0gJ3JnYmEoNDEsMjU1LDkwLCcgKyBvcGFjaXR5ICsgJyknO1xuICAgICAgICBzdHlsZS5vdXRsaW5lID0ge1xuICAgICAgICAgIGNvbG9yOiBlY29zX2JvcmRlcl9jb2xvcixcbiAgICAgICAgICBzaXplOiBlY29zX2JvcmRlcl90aGlja25lc3NcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSBpZihjb3VudCA+IDEwKSB7XG4gICAgICAgIC8vbWFrZSBob2xsb3dcbiAgICAgICAgc3R5bGUuY29sb3IgPSAncmdiYSgwLDI1NSw1OSwnICsgb3BhY2l0eSArICcpJztcbiAgICAgICAgc3R5bGUub3V0bGluZSA9IHtcbiAgICAgICAgICBjb2xvcjogZWNvc19ib3JkZXJfY29sb3IsXG4gICAgICAgICAgc2l6ZTogZWNvc19ib3JkZXJfdGhpY2tuZXNzXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgIH1cbiAgICBlbHNle1xuICAgICAgLy9tYWtlIGhvbGxvd1xuICAgICAgc3R5bGUuY29sb3IgPSAncmdiYSgwLDAsMCwnICsgb3BhY2l0eSArICcpJztcbiAgICAgIHN0eWxlLm91dGxpbmUgPSB7XG4gICAgICAgIGNvbG9yOiBlY29zX2JvcmRlcl9jb2xvcixcbiAgICAgICAgc2l6ZTogZWNvc19ib3JkZXJfdGhpY2tuZXNzXG4gICAgICB9XG4gICAgfVxuICB9XG5cblxuICAvL2lmKCFoYXRjaERlc2lnbil7XG4gIC8vICBoYXRjaERlc2lnbiA9IGdldEltYWdlUmVmKCk7XG4gIC8vfVxuXG4gIC8vc3R5bGUuc2VsZWN0ZWQgPSB7XG4gIC8vICBjb2xvcjogZnVuY3Rpb24oY3R4MmQpe1xuICAvLyAgICAvL0hhdGNoIHN5bWJvbFxuICAvLyAgICB2YXIgcmVwZWF0ID0gY3R4MmQuY3JlYXRlUGF0dGVybihoYXRjaERlc2lnbiwgXCJyZXBlYXRcIik7XG4gIC8vICAgIHJldHVybiByZXBlYXQ7XG4gIC8vXG4gIC8vICB9LFxuICAvLyAgb3V0bGluZSA6IHtcbiAgLy8gICAgY29sb3I6ICdyZ2IoMjU1LDI1NSwwKScsXG4gIC8vICAgIHNpemU6IDJcbiAgLy8gIH1cbiAgLy99XG5cbiAgc3R5bGUuc2VsZWN0ZWQgPSB7XG4gICAgLy9jb2xvcjogJ3JnYmEoMCwyNTUsMjU1LDAuMSknLFxuICAgIGNvbG9yOiBzdHlsZS5jb2xvcixcbiAgICBvdXRsaW5lIDoge1xuICAgICAgY29sb3I6ICdyZ2JhKDAsMjU1LDI1NSwxKScsXG4gICAgICBzaXplOiAyXG4gICAgfVxuICB9XG5cbiAgLy9MYWJlbFxuICBpZihjaGVja2VkID09ICd0cnVlJykge1xuXG4gICAgaWYgKHZ0Zi5sYXllci5uYW1lID09PSAnR0FETV8yMDE0X2xhYmVsJykge1xuICAgICAgaWYgKGVjb3NQcm9wZXJ0aWVzICYmIGVjb3NQcm9wZXJ0aWVzLnRoZW1lX2NvdW50KSB7XG5cbiAgICAgICAgaWYgKHByb3BlcnRpZXMudGhlbWUgIT0gXCJkaXNhc3RlclR5cGVcIikge1xuICAgICAgICAgIC8vRGlzYXN0ZXIgVHlwZSBsYWJlbHMgYXJlIHNldCBpbiB0aGUgYmxvYyBhYm92ZVxuICAgICAgICAgIC8vQWxsIG90aGVycyBhcmUgc2V0IGhlcmUuXG5cbiAgICAgICAgICBzdHlsZS5zdGF0aWNMYWJlbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBsYWJlbFN0eWxlID0ge1xuICAgICAgICAgICAgICBodG1sOiAoZWNvc1Byb3BlcnRpZXMgJiYgZWNvc1Byb3BlcnRpZXMudGhlbWVfY291bnQgPyBidWlsZER5bmFtaWNMYWJlbChlY29zUHJvcGVydGllcykgOiBcIlwiKSxcbiAgICAgICAgICAgICAgaWNvblNpemU6IFs0MiwgNDJdLFxuICAgICAgICAgICAgICBjc3NDbGFzczogJ25vY2xhc3MnXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmV0dXJuIGxhYmVsU3R5bGU7XG4gICAgICAgICAgfTtcblxuICAgICAgICB9XG5cbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICAvL1doZW4gc3dpdGNoaW5nIHRoZW1lcywgcmVzZXQgb2xkIGxhYmVsIHN0eWxlcyB0byBudWxsIHNvIGxhYmVscyBkb24ndCBnZXQgZHJhd24gZm9yIG9sZCB0aGVtZS5cbiAgICAgICAgc3R5bGUuc3RhdGljTGFiZWwgPSBudWxsO1xuICAgICAgfVxuXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiBidWlsZER5bmFtaWNMYWJlbChwcm9wZXJ0aWVzKXtcbiAgaWYgKHByb3BlcnRpZXMudGhlbWUgPT0gXCJkaXNhc3RlclwiKSB7XG4gICAgdmFyIGNvbG9yID0gXCJcIjtcbiAgICB2YXIgbGFiZWxDb2xvciA9IFwiXCI7XG4gICAgaWYgKHByb3BlcnRpZXMgJiYgcHJvcGVydGllcy5pcm9jX3N0YXR1c19fYykge1xuICAgICAgc3dpdGNoIChwcm9wZXJ0aWVzLmlyb2Nfc3RhdHVzX19jLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgICAgY2FzZSBcImFjdGl2ZVwiOlxuICAgICAgICAgIGNvbG9yID0gXCJyZ2JhKDIwNCwwLDUxLDEpXCI7XG4gICAgICAgICAgbGFiZWxDb2xvciA9IFwiI2ZmZlwiO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwibW9uaXRvcmluZ1wiOlxuICAgICAgICAgIGNvbG9yID0gXCJyZ2JhKDIyNSwxODcsMzcsMSlcIjtcbiAgICAgICAgICBsYWJlbENvbG9yID0gXCIjZmZmXCI7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJpbmFjdGl2ZVwiOlxuICAgICAgICAgIGNvbG9yID0gXCJyZ2JhKDE4OSwxODksMTg5LDEpXCI7XG4gICAgICAgICAgbGFiZWxDb2xvciA9IFwiIzAwMFwiO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gJzxkaXYgY2xhc3M9XCJsYWJlbC1pY29uLW51bWJlci00MHBlcmNlbnRcIicgKyAoY29sb3IgPyAnIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogJyArIGNvbG9yICsgJztjb2xvcjogJyArIGxhYmVsQ29sb3IgKyAnXCInIDogJycpICsgJz48c3Bhbj4nICsgcHJvcGVydGllcy50aGVtZV9jb3VudCArICc8L3NwYW4+PC9kaXY+JztcbiAgfVxuICBlbHNlIHtcbiAgICByZXR1cm4gJzxkaXYgY2xhc3M9XCJsYWJlbC1pY29uLW51bWJlci00MHBlcmNlbnRcIj48c3Bhbj4nICsgcHJvcGVydGllcy50aGVtZV9jb3VudCArICc8L3NwYW4+PC9kaXY+JztcbiAgfVxufVxuXG5cbi8qXG5TZXQgdGhlIGRpY3Rpb25hcnkgdXNlZCB0byBsb29rIHVwIFVOT0NIQSBpY29ucyBmb3IgZGlzYXN0ZXIgdHlwZXNcbiAqL1xuLy92YXIgVU5PQ0hBSWNvbkxvb2t1cCA9IHtcbi8vXG4vLyAgXCJNZXRlb3JvbG9naWNhbCAtIFRyb3BpY2FsIEN5Y2xvbmVcIjoge2ljb246IFwiaWNvbi1kaXNhc3Rlcl9jeWNsb25lXCIsIGNvbG9yOiBcInJnYmEoMjU1LDAsMCxcIiArIG9wYWNpdHkgKyBcIilcIn0sXG4vLyAgXCJGbG9vZHNcIjoge2ljb246IFwiaWNvbi1kaXNhc3Rlcl9mbG9vZFwiLCBjb2xvcjogXCJyZ2JhKDI1NSwwLDAsXCIgKyBvcGFjaXR5ICsgXCIpXCJ9LFxuLy8gIFwiVHN1bmFtaSwgVm9sY2Fub1wiOiB7aWNvbjogXCJpY29uLWRpc2FzdGVyX3RzdW5hbWlcIiwgY29sb3I6IFwicmdiYSgyNTUsMCwwLFwiICsgb3BhY2l0eSArIFwiKVwifSxcbi8vICBcIkZsb29kcywgU3Rvcm1cIjoge2ljb246IFwiaWNvbi1kaXNhc3Rlcl9mbG9vZFwiLCBjb2xvcjogXCJyZ2JhKDI1NSwwLDAsXCIgKyBvcGFjaXR5ICsgXCIpXCJ9LFxuLy8gIFwiVHN1bmFtaVwiOiB7aWNvbjogXCJpY29uLWRpc2FzdGVyX3RzdW5hbWlcIiwgY29sb3I6IFwicmdiYSgyNTUsMCwwLFwiICsgb3BhY2l0eSArIFwiKVwifSxcbi8vICBcIkZhbWluZSAvIEZvb2QgSW5zZWN1cml0eVwiOiB7aWNvbjogXCJpY29uLWNsdXN0ZXJfZm9vZF9zZWN1cml0eVwiLCBjb2xvcjogXCJyZ2JhKDI1NSwwLDAsXCIgKyBvcGFjaXR5ICsgXCIpXCJ9LFxuLy8gIFwiRHJvdWdodFwiOiB7aWNvbjogXCJpY29uLWRpc2FzdGVyX2Ryb3VnaHRcIiwgY29sb3I6IFwicmdiYSgyNTUsMCwwLFwiICsgb3BhY2l0eSArIFwiKVwifSxcbi8vICBcIk1ldGVvcm9sb2dpY2FsIC0gVHJvcGljYWwgQ3ljbG9uZTtIeWRyb2xvZ2ljYWwgLSBGbG9vZHNcIjoge2ljb246IFwiaWNvbi1kaXNhc3Rlcl9jeWNsb25lXCIsIGNvbG9yOiBcInJnYmEoMjU1LDAsMCxcIiArIG9wYWNpdHkgKyBcIilcIn0sXG4vLyAgXCJGb29kIEluc2VjdXJpdHlcIjoge2ljb246IFwiaWNvbi1jbHVzdGVyX2Zvb2Rfc2VjdXJpdHlcIiwgY29sb3I6IFwicmdiYSgyNTUsMCwwLFwiICsgb3BhY2l0eSArIFwiKVwifSxcbi8vICBcIkNpdmlsIFVucmVzdFwiOiB7aWNvbjogXCJpY29uLXBlb3BsZV9yZWJlbFwiLCBjb2xvcjogXCJyZ2JhKDI1NSwwLDAsXCIgKyBvcGFjaXR5ICsgXCIpXCJ9LFxuLy8gIFwiRmxvb2RzLCBUcm9waWNhbCBTdG9ybVwiOiB7aWNvbjogXCJpY29uLWRpc2FzdGVyX2Zsb29kXCIsIGNvbG9yOiBcInJnYmEoMjU1LDAsMCxcIiArIG9wYWNpdHkgKyBcIilcIn0sXG4vLyAgXCJDb21wbGV4IEVtZXJnZW5jeVwiOiB7aWNvbjogXCJpY29uLWNyaXNpc19jb25mbGljdFwiLCBjb2xvcjogXCJyZ2JhKDI1NSwwLDAsXCIgKyBvcGFjaXR5ICsgXCIpXCJ9LFxuLy8gIFwiRXBpZGVtaWNcIjoge2ljb246IFwiaWNvbi1kaXNhc3Rlcl9lcGlkZW1pY1wiLCBjb2xvcjogXCJyZ2JhKDI1NSwwLDAsXCIgKyBvcGFjaXR5ICsgXCIpXCJ9LFxuLy8gIFwiUG9wdWxhdGlvbiBNb3ZlbWVudFwiOiB7aWNvbjogXCJpY29uLWNyaXNpc19wb3B1bGF0aW9uX2Rpc3BsYWNlbWVudFwiLCBjb2xvcjogXCJyZ2JhKDI1NSwwLDAsXCIgKyBvcGFjaXR5ICsgXCIpXCJ9LFxuLy8gIFwiQ2xpbWF0b2xvZ2ljYWwgLSBEcm91Z2h0XCI6IHtpY29uOiBcImljb24tZGlzYXN0ZXJfZHJvdWdodFwiLCBjb2xvcjogXCJyZ2JhKDI1NSwwLDAsXCIgKyBvcGFjaXR5ICsgXCIpXCJ9LFxuLy8gIFwiV2ludGVyIFN0b3JtXCI6IHtpY29uOiBcImljb24tZGlzYXN0ZXJfc25vd2ZhbGxcIiwgY29sb3I6IFwicmdiYSgyNTUsMCwwLFwiICsgb3BhY2l0eSArIFwiKVwifSxcbi8vICBcIlRyb3BpY2FsIFN0b3JtXCI6IHtpY29uOiBcImljb24tZGlzYXN0ZXJfaGVhdnlfcmFpblwiLCBjb2xvcjogXCJyZ2JhKDI1NSwwLDAsXCIgKyBvcGFjaXR5ICsgXCIpXCJ9LFxuLy8gIFwiRWFydGhxdWFrZSwgVHN1bmFtaVwiOiB7aWNvbjogXCJpY29uLWRpc2FzdGVyX2VhcnRocXVha2VcIiwgY29sb3I6IFwicmdiYSgyNTUsMCwwLFwiICsgb3BhY2l0eSArIFwiKVwifSxcbi8vICBcIkh5ZHJvbG9naWNhbCAtIEZsb29kc1wiOiB7aWNvbjogXCJpY29uLWRpc2FzdGVyX2Zsb29kXCIsIGNvbG9yOiBcInJnYmEoMjU1LDAsMCxcIiArIG9wYWNpdHkgKyBcIilcIn0sXG4vLyAgXCJMYW5kc2xpZGU7Rmxvb2RzXCI6IHtpY29uOiBcImljb24tZGlzYXN0ZXJfbGFuZHNsaWRlXCIsIGNvbG9yOiBcInJnYmEoMjU1LDAsMCxcIiArIG9wYWNpdHkgKyBcIilcIn0sXG4vLyAgXCJFYXJ0aHF1YWtlXCI6IHtpY29uOiBcImljb24tZGlzYXN0ZXJfZWFydGhxdWFrZVwiLCBjb2xvcjogXCJyZ2JhKDI1NSwwLDAsXCIgKyBvcGFjaXR5ICsgXCIpXCJ9LFxuLy8gIFwiTGFuZHNsaWRlO0h5ZHJvbG9naWNhbCAtIEZsb29kc1wiOiB7aWNvbjogXCJpY29uLWRpc2FzdGVyX2xhbmRzbGlkZVwiLCBjb2xvcjogXCJyZ2JhKDI1NSwwLDAsXCIgKyBvcGFjaXR5ICsgXCIpXCJ9XG4vL1xuLy99XG5cbmZ1bmN0aW9uIGJ1aWxkRGlzYXN0ZXJUeXBlTGFiZWwoZGlzYXN0ZXJUeXBlLCBjb2xvcikge1xuXG4gIHZhciBiYWNrQ29sb3IgPSBcIlwiO1xuICB2YXIgbGFiZWxDb2xvciA9IFwiXCI7XG4gIGlmIChkaXNhc3RlclR5cGUpIHtcblxuICAgIGJhY2tDb2xvciA9IGNvbG9yIHx8IFwicmdiYSgyMDQsMCw1MSwwLjQpXCI7XG5cbiAgICBpZihjb2xvci5pbmRleE9mKFwiMjU1LDI1NSwyNTVcIikgPiAtMSl7XG4gICAgICAvL2lmIHRoZSBsYWJlbCBpcyB3aGl0ZSwgbWFrZSB0aGUgdGV4dCBibGFja1xuICAgICAgbGFiZWxDb2xvciA9IFwiIzAwMFwiO1xuICAgIH1cbiAgICBlbHNle1xuICAgICAgbGFiZWxDb2xvciA9IFwiI2ZmZlwiO1xuICAgIH1cbiAgfVxuXG4gIHZhciBpY29uID0gY29uZmlnLlVOT0NIQUljb25Mb29rdXBbZGlzYXN0ZXJUeXBlXS5pY29uIHx8ICdpY29uLW90aGVyX2NsdXN0ZXJfb3RoZXInO1xuXG4gIHJldHVybiAnPGRpdiBjbGFzcz1cImxhYmVsLWljb24tbnVtYmVyLTEwMHBlcmNlbnRcIicgKyAoYmFja0NvbG9yID8gJyBzdHlsZT1cImZvbnQtZmFtaWx5OiBodW1hbml0YXJpYW5faWNvbnM7IGJhY2tncm91bmQtY29sb3I6ICcgKyBiYWNrQ29sb3IgKyAnO2NvbG9yOiAnICsgbGFiZWxDb2xvciArICdcIicgOiAnJykgKyAnPjxpIGNsYXNzPVwidW4gJyArIGljb24gKyAnXCI+PC9pPjwvZGl2Pic7XG5cbn1cblxuXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbi8vIGZ1bmN0aW9uIHdhaXRmb3IgLSBXYWl0IHVudGlsIGEgY29uZGl0aW9uIGlzIG1ldFxuLy9cbi8vIE5lZWRlZCBwYXJhbWV0ZXJzOlxuLy8gICAgdGVzdDogYSB2YWx1ZVxuLy8gICAgZXhwZWN0ZWRWYWx1ZTogdGhlIHZhbHVlIG9mIHRoZSB0ZXN0IGZ1bmN0aW9uIHdlIGFyZSB3YWl0aW5nIGZvclxuLy8gICAgbXNlYzogZGVsYXkgYmV0d2VlbiB0aGUgY2FsbHMgdG8gdGVzdFxuLy8gICAgY2FsbGJhY2s6IGZ1bmN0aW9uIHRvIGV4ZWN1dGUgd2hlbiB0aGUgY29uZGl0aW9uIGlzIG1ldFxuLy8gUGFyYW1ldGVycyBmb3IgZGVidWdnaW5nOlxuLy8gICAgY291bnQ6IHVzZWQgdG8gY291bnQgdGhlIGxvb3BzXG4vLyAgICBzb3VyY2U6IGEgc3RyaW5nIHRvIHNwZWNpZnkgYW4gSUQsIGEgbWVzc2FnZSwgZXRjXG4vLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbmZ1bmN0aW9uIHdhaXRmb3IodGVzdCwgZXhwZWN0ZWRWYWx1ZSwgbXNlYywgY291bnQsIHNvdXJjZSwgY2FsbGJhY2spIHtcbiAgLy8gQ2hlY2sgaWYgY29uZGl0aW9uIG1ldC4gSWYgbm90LCByZS1jaGVjayBsYXRlciAobXNlYykuXG4gIHdoaWxlICh0ZXN0KCkgIT09IGV4cGVjdGVkVmFsdWUpIHtcbiAgICBjb3VudCsrO1xuICAgIGNvbnNvbGUubG9nKFwiV2FpdGluZyBmb3IgY29uZGl0aW9uIHRvIGJlIG1ldC4uLlwiICsgY291bnQpO1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICB3YWl0Zm9yKHRlc3QsIGV4cGVjdGVkVmFsdWUsIG1zZWMsIGNvdW50LCBzb3VyY2UsIGNhbGxiYWNrKTtcbiAgICB9LCBtc2VjKTtcbiAgICByZXR1cm47XG4gIH1cbiAgLy8gQ29uZGl0aW9uIGZpbmFsbHkgbWV0LiBjYWxsYmFjaygpIGNhbiBiZSBleGVjdXRlZC5cbiAgY29uc29sZS5sb2coc291cmNlICsgJzogJyArIHRlc3QoKSArICcsIGV4cGVjdGVkOiAnICsgZXhwZWN0ZWRWYWx1ZSArICcsICcgKyBjb3VudCArICcgbG9vcHMuJyk7XG4gIGNhbGxiYWNrKCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZURlc2lnbigpe1xuICB2YXIgcGF0dGVybiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICBwYXR0ZXJuLndpZHRoID0gNDA7XG4gIHBhdHRlcm4uaGVpZ2h0ID0gNDA7XG4gIHZhciBwY3R4ID0gcGF0dGVybi5nZXRDb250ZXh0KCcyZCcpO1xuXG4gIHBjdHguZmlsbFN0eWxlID0gXCJyZ2JhKDE4OCwgMjIyLCAxNzgsIDAuNSlcIjtcbiAgcGN0eC5maWxsUmVjdCgwLDAsMjAsMjApO1xuICBwY3R4LmZpbGxSZWN0KDIwLDIwLDIwLDIwKTtcblxuICByZXR1cm4gcGF0dGVybjtcbn1cblxuZnVuY3Rpb24gZ2V0SW1hZ2VSZWYodXJsKXtcbiAgdmFyIGltZyA9IG5ldyBJbWFnZSgyNTYsMjU2KTsgLy8gd2lkdGgsIGhlaWdodCB2YWx1ZXMgYXJlIG9wdGlvbmFsIHBhcmFtc1xuICBpbWcuc3JjID0gJ2ltYWdlcy9kaWFnb25hbF9zdHJpcGVzXzEucG5nJztcbiAgcmV0dXJuIGltZztcbn1cblxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZ2FkbTAgOiBnYWRtMCxcbiAgZ2FkbTEgOiBnYWRtMSxcbiAgZ2FkbTIgOiBnYWRtMixcbiAgYXJjcmVnaW9uczogYXJjcmVnaW9ucyxcbiAgdGhlbWVMYXllcnM6IFtcImdhZG0wXCIsIFwiZ2FkbTFcIiwgXCJnYWRtMlwiLCBcImFyY3JlZ2lvbnNcIl0gLy9hIGxpc3Qgb2YgdGhlIHRoZW1lIGxheWVycyAtIHVzZWQgdG8gZGV0ZXJtaW5lIHdoZXRoZXIgb3Igbm90IG9uZSBpcyBjdXJyZW50bHkgbG9hZGVkIG9yIG5vdC5cbn07IiwiKGZ1bmN0aW9uIChCdWZmZXIpe1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgaWVlZTc1NCA9IHJlcXVpcmUoJ2llZWU3NTQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBQcm90b2J1ZjtcbmZ1bmN0aW9uIFByb3RvYnVmKGJ1Zikge1xuICAgIHRoaXMuYnVmID0gYnVmO1xuICAgIHRoaXMucG9zID0gMDtcbn1cblxuUHJvdG9idWYucHJvdG90eXBlID0ge1xuICAgIGdldCBsZW5ndGgoKSB7IHJldHVybiB0aGlzLmJ1Zi5sZW5ndGg7IH1cbn07XG5cblByb3RvYnVmLlZhcmludCA9IDA7XG5Qcm90b2J1Zi5JbnQ2NCA9IDE7XG5Qcm90b2J1Zi5NZXNzYWdlID0gMjtcblByb3RvYnVmLlN0cmluZyA9IDI7XG5Qcm90b2J1Zi5QYWNrZWQgPSAyO1xuUHJvdG9idWYuSW50MzIgPSA1O1xuXG5Qcm90b2J1Zi5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuYnVmID0gbnVsbDtcbn07XG5cbi8vID09PSBSRUFESU5HID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cblByb3RvYnVmLnByb3RvdHlwZS5yZWFkVUludDMyID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHZhbCA9IHRoaXMuYnVmLnJlYWRVSW50MzJMRSh0aGlzLnBvcyk7XG4gICAgdGhpcy5wb3MgKz0gNDtcbiAgICByZXR1cm4gdmFsO1xufTtcblxuUHJvdG9idWYucHJvdG90eXBlLnJlYWRVSW50NjQgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgdmFsID0gdGhpcy5idWYucmVhZFVJbnQ2NExFKHRoaXMucG9zKTtcbiAgICB0aGlzLnBvcyArPSA4O1xuICAgIHJldHVybiB2YWw7XG59O1xuXG5Qcm90b2J1Zi5wcm90b3R5cGUucmVhZERvdWJsZSA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciB2YWwgPSBpZWVlNzU0LnJlYWQodGhpcy5idWYsIHRoaXMucG9zLCB0cnVlLCA1MiwgOCk7XG4gICAgdGhpcy5wb3MgKz0gODtcbiAgICByZXR1cm4gdmFsO1xufTtcblxuUHJvdG9idWYucHJvdG90eXBlLnJlYWRWYXJpbnQgPSBmdW5jdGlvbigpIHtcbiAgICAvLyBUT0RPOiBib3VuZHMgY2hlY2tpbmdcbiAgICB2YXIgcG9zID0gdGhpcy5wb3M7XG4gICAgaWYgKHRoaXMuYnVmW3Bvc10gPD0gMHg3Zikge1xuICAgICAgICB0aGlzLnBvcysrO1xuICAgICAgICByZXR1cm4gdGhpcy5idWZbcG9zXTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuYnVmW3BvcyArIDFdIDw9IDB4N2YpIHtcbiAgICAgICAgdGhpcy5wb3MgKz0gMjtcbiAgICAgICAgcmV0dXJuICh0aGlzLmJ1Zltwb3NdICYgMHg3ZikgfCAodGhpcy5idWZbcG9zICsgMV0gPDwgNyk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmJ1Zltwb3MgKyAyXSA8PSAweDdmKSB7XG4gICAgICAgIHRoaXMucG9zICs9IDM7XG4gICAgICAgIHJldHVybiAodGhpcy5idWZbcG9zXSAmIDB4N2YpIHwgKHRoaXMuYnVmW3BvcyArIDFdICYgMHg3ZikgPDwgNyB8ICh0aGlzLmJ1Zltwb3MgKyAyXSkgPDwgMTQ7XG4gICAgfSBlbHNlIGlmICh0aGlzLmJ1Zltwb3MgKyAzXSA8PSAweDdmKSB7XG4gICAgICAgIHRoaXMucG9zICs9IDQ7XG4gICAgICAgIHJldHVybiAodGhpcy5idWZbcG9zXSAmIDB4N2YpIHwgKHRoaXMuYnVmW3BvcyArIDFdICYgMHg3ZikgPDwgNyB8ICh0aGlzLmJ1Zltwb3MgKyAyXSAmIDB4N2YpIDw8IDE0IHwgKHRoaXMuYnVmW3BvcyArIDNdKSA8PCAyMTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuYnVmW3BvcyArIDRdIDw9IDB4N2YpIHtcbiAgICAgICAgdGhpcy5wb3MgKz0gNTtcbiAgICAgICAgcmV0dXJuICgodGhpcy5idWZbcG9zXSAmIDB4N2YpIHwgKHRoaXMuYnVmW3BvcyArIDFdICYgMHg3ZikgPDwgNyB8ICh0aGlzLmJ1Zltwb3MgKyAyXSAmIDB4N2YpIDw8IDE0IHwgKHRoaXMuYnVmW3BvcyArIDNdKSA8PCAyMSkgKyAodGhpcy5idWZbcG9zICsgNF0gKiAyNjg0MzU0NTYpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2tpcChQcm90b2J1Zi5WYXJpbnQpO1xuICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgLy8gdGhyb3cgbmV3IEVycm9yKFwiVE9ETzogSGFuZGxlIDYrIGJ5dGUgdmFyaW50c1wiKTtcbiAgICB9XG59O1xuXG5Qcm90b2J1Zi5wcm90b3R5cGUucmVhZFNWYXJpbnQgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgbnVtID0gdGhpcy5yZWFkVmFyaW50KCk7XG4gICAgaWYgKG51bSA+IDIxNDc0ODM2NDcpIHRocm93IG5ldyBFcnJvcignVE9ETzogSGFuZGxlIG51bWJlcnMgPj0gMl4zMCcpO1xuICAgIC8vIHppZ3phZyBlbmNvZGluZ1xuICAgIHJldHVybiAoKG51bSA+PiAxKSBeIC0obnVtICYgMSkpO1xufTtcblxuUHJvdG9idWYucHJvdG90eXBlLnJlYWRTdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgYnl0ZXMgPSB0aGlzLnJlYWRWYXJpbnQoKTtcbiAgICAvLyBUT0RPOiBib3VuZHMgY2hlY2tpbmdcbiAgICB2YXIgY2hyID0gU3RyaW5nLmZyb21DaGFyQ29kZTtcbiAgICB2YXIgYiA9IHRoaXMuYnVmO1xuICAgIHZhciBwID0gdGhpcy5wb3M7XG4gICAgdmFyIGVuZCA9IHRoaXMucG9zICsgYnl0ZXM7XG4gICAgdmFyIHN0ciA9ICcnO1xuICAgIHdoaWxlIChwIDwgZW5kKSB7XG4gICAgICAgIGlmIChiW3BdIDw9IDB4N0YpIHN0ciArPSBjaHIoYltwKytdKTtcbiAgICAgICAgZWxzZSBpZiAoYltwXSA8PSAweEJGKSB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgVVRGLTggY29kZXBvaW50OiAnICsgYltwXSk7XG4gICAgICAgIGVsc2UgaWYgKGJbcF0gPD0gMHhERikgc3RyICs9IGNocigoYltwKytdICYgMHgxRikgPDwgNiB8IChiW3ArK10gJiAweDNGKSk7XG4gICAgICAgIGVsc2UgaWYgKGJbcF0gPD0gMHhFRikgc3RyICs9IGNocigoYltwKytdICYgMHgxRikgPDwgMTIgfCAoYltwKytdICYgMHgzRikgPDwgNiB8IChiW3ArK10gJiAweDNGKSk7XG4gICAgICAgIGVsc2UgaWYgKGJbcF0gPD0gMHhGNykgcCArPSA0OyAvLyBXZSBjYW4ndCBoYW5kbGUgdGhlc2UgY29kZXBvaW50cyBpbiBKUywgc28gc2tpcC5cbiAgICAgICAgZWxzZSBpZiAoYltwXSA8PSAweEZCKSBwICs9IDU7XG4gICAgICAgIGVsc2UgaWYgKGJbcF0gPD0gMHhGRCkgcCArPSA2O1xuICAgICAgICBlbHNlIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBVVEYtOCBjb2RlcG9pbnQ6ICcgKyBiW3BdKTtcbiAgICB9XG4gICAgdGhpcy5wb3MgKz0gYnl0ZXM7XG4gICAgcmV0dXJuIHN0cjtcbn07XG5cblByb3RvYnVmLnByb3RvdHlwZS5yZWFkQnVmZmVyID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGJ5dGVzID0gdGhpcy5yZWFkVmFyaW50KCk7XG4gICAgdmFyIGJ1ZmZlciA9IHRoaXMuYnVmLnN1YmFycmF5KHRoaXMucG9zLCB0aGlzLnBvcyArIGJ5dGVzKTtcbiAgICB0aGlzLnBvcyArPSBieXRlcztcbiAgICByZXR1cm4gYnVmZmVyO1xufTtcblxuUHJvdG9idWYucHJvdG90eXBlLnJlYWRQYWNrZWQgPSBmdW5jdGlvbih0eXBlKSB7XG4gICAgLy8gVE9ETzogYm91bmRzIGNoZWNraW5nXG4gICAgdmFyIGJ5dGVzID0gdGhpcy5yZWFkVmFyaW50KCk7XG4gICAgdmFyIGVuZCA9IHRoaXMucG9zICsgYnl0ZXM7XG4gICAgdmFyIGFycmF5ID0gW107XG4gICAgd2hpbGUgKHRoaXMucG9zIDwgZW5kKSB7XG4gICAgICAgIGFycmF5LnB1c2godGhpc1sncmVhZCcgKyB0eXBlXSgpKTtcbiAgICB9XG4gICAgcmV0dXJuIGFycmF5O1xufTtcblxuUHJvdG9idWYucHJvdG90eXBlLnNraXAgPSBmdW5jdGlvbih2YWwpIHtcbiAgICAvLyBUT0RPOiBib3VuZHMgY2hlY2tpbmdcbiAgICB2YXIgdHlwZSA9IHZhbCAmIDB4NztcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgLyogdmFyaW50ICovIGNhc2UgUHJvdG9idWYuVmFyaW50OiB3aGlsZSAodGhpcy5idWZbdGhpcy5wb3MrK10gPiAweDdmKTsgYnJlYWs7XG4gICAgICAgIC8qIDY0IGJpdCAqLyBjYXNlIFByb3RvYnVmLkludDY0OiB0aGlzLnBvcyArPSA4OyBicmVhaztcbiAgICAgICAgLyogbGVuZ3RoICovIGNhc2UgUHJvdG9idWYuTWVzc2FnZTogdmFyIGJ5dGVzID0gdGhpcy5yZWFkVmFyaW50KCk7IHRoaXMucG9zICs9IGJ5dGVzOyBicmVhaztcbiAgICAgICAgLyogMzIgYml0ICovIGNhc2UgUHJvdG9idWYuSW50MzI6IHRoaXMucG9zICs9IDQ7IGJyZWFrO1xuICAgICAgICBkZWZhdWx0OiB0aHJvdyBuZXcgRXJyb3IoJ1VuaW1wbGVtZW50ZWQgdHlwZTogJyArIHR5cGUpO1xuICAgIH1cbn07XG5cbi8vID09PSBXUklUSU5HID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cblByb3RvYnVmLnByb3RvdHlwZS53cml0ZVRhZyA9IGZ1bmN0aW9uKHRhZywgdHlwZSkge1xuICAgIHRoaXMud3JpdGVWYXJpbnQoKHRhZyA8PCAzKSB8IHR5cGUpO1xufTtcblxuUHJvdG9idWYucHJvdG90eXBlLnJlYWxsb2MgPSBmdW5jdGlvbihtaW4pIHtcbiAgICB2YXIgbGVuZ3RoID0gdGhpcy5idWYubGVuZ3RoO1xuICAgIHdoaWxlIChsZW5ndGggPCB0aGlzLnBvcyArIG1pbikgbGVuZ3RoICo9IDI7XG4gICAgaWYgKGxlbmd0aCAhPSB0aGlzLmJ1Zi5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGJ1ZiA9IG5ldyBCdWZmZXIobGVuZ3RoKTtcbiAgICAgICAgdGhpcy5idWYuY29weShidWYpO1xuICAgICAgICB0aGlzLmJ1ZiA9IGJ1ZjtcbiAgICB9XG59O1xuXG5Qcm90b2J1Zi5wcm90b3R5cGUuZmluaXNoID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuYnVmLnNsaWNlKDAsIHRoaXMucG9zKTtcbn07XG5cblByb3RvYnVmLnByb3RvdHlwZS53cml0ZVBhY2tlZCA9IGZ1bmN0aW9uKHR5cGUsIHRhZywgaXRlbXMpIHtcbiAgICBpZiAoIWl0ZW1zLmxlbmd0aCkgcmV0dXJuO1xuXG4gICAgdmFyIG1lc3NhZ2UgPSBuZXcgUHJvdG9idWYoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIG1lc3NhZ2VbJ3dyaXRlJyArIHR5cGVdKGl0ZW1zW2ldKTtcbiAgICB9XG4gICAgdmFyIGRhdGEgPSBtZXNzYWdlLmZpbmlzaCgpO1xuXG4gICAgdGhpcy53cml0ZVRhZyh0YWcsIFByb3RvYnVmLlBhY2tlZCk7XG4gICAgdGhpcy53cml0ZUJ1ZmZlcihkYXRhKTtcbn07XG5cblByb3RvYnVmLnByb3RvdHlwZS53cml0ZVVJbnQzMiA9IGZ1bmN0aW9uKHZhbCkge1xuICAgIHRoaXMucmVhbGxvYyg0KTtcbiAgICB0aGlzLmJ1Zi53cml0ZVVJbnQzMkxFKHZhbCwgdGhpcy5wb3MpO1xuICAgIHRoaXMucG9zICs9IDQ7XG59O1xuXG5Qcm90b2J1Zi5wcm90b3R5cGUud3JpdGVUYWdnZWRVSW50MzIgPSBmdW5jdGlvbih0YWcsIHZhbCkge1xuICAgIHRoaXMud3JpdGVUYWcodGFnLCBQcm90b2J1Zi5JbnQzMik7XG4gICAgdGhpcy53cml0ZVVJbnQzMih2YWwpO1xufTtcblxuUHJvdG9idWYucHJvdG90eXBlLndyaXRlVmFyaW50ID0gZnVuY3Rpb24odmFsKSB7XG4gICAgdmFsID0gTnVtYmVyKHZhbCk7XG4gICAgaWYgKGlzTmFOKHZhbCkpIHtcbiAgICAgICAgdmFsID0gMDtcbiAgICB9XG5cbiAgICBpZiAodmFsIDw9IDB4N2YpIHtcbiAgICAgICAgdGhpcy5yZWFsbG9jKDEpO1xuICAgICAgICB0aGlzLmJ1Zlt0aGlzLnBvcysrXSA9IHZhbDtcbiAgICB9IGVsc2UgaWYgKHZhbCA8PSAweDNmZmYpIHtcbiAgICAgICAgdGhpcy5yZWFsbG9jKDIpO1xuICAgICAgICB0aGlzLmJ1Zlt0aGlzLnBvcysrXSA9IDB4ODAgfCAoKHZhbCA+Pj4gMCkgJiAweDdmKTtcbiAgICAgICAgdGhpcy5idWZbdGhpcy5wb3MrK10gPSAweDAwIHwgKCh2YWwgPj4+IDcpICYgMHg3Zik7XG4gICAgfSBlbHNlIGlmICh2YWwgPD0gMHgxZmZmZmZmKSB7XG4gICAgICAgIHRoaXMucmVhbGxvYygzKTtcbiAgICAgICAgdGhpcy5idWZbdGhpcy5wb3MrK10gPSAweDgwIHwgKCh2YWwgPj4+IDApICYgMHg3Zik7XG4gICAgICAgIHRoaXMuYnVmW3RoaXMucG9zKytdID0gMHg4MCB8ICgodmFsID4+PiA3KSAmIDB4N2YpO1xuICAgICAgICB0aGlzLmJ1Zlt0aGlzLnBvcysrXSA9IDB4MDAgfCAoKHZhbCA+Pj4gMTQpICYgMHg3Zik7XG4gICAgfSBlbHNlIGlmICh2YWwgPD0gMHhmZmZmZmZmKSB7XG4gICAgICAgIHRoaXMucmVhbGxvYyg0KTtcbiAgICAgICAgdGhpcy5idWZbdGhpcy5wb3MrK10gPSAweDgwIHwgKCh2YWwgPj4+IDApICYgMHg3Zik7XG4gICAgICAgIHRoaXMuYnVmW3RoaXMucG9zKytdID0gMHg4MCB8ICgodmFsID4+PiA3KSAmIDB4N2YpO1xuICAgICAgICB0aGlzLmJ1Zlt0aGlzLnBvcysrXSA9IDB4ODAgfCAoKHZhbCA+Pj4gMTQpICYgMHg3Zik7XG4gICAgICAgIHRoaXMuYnVmW3RoaXMucG9zKytdID0gMHgwMCB8ICgodmFsID4+PiAyMSkgJiAweDdmKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB3aGlsZSAodmFsID4gMCkge1xuICAgICAgICAgICAgdmFyIGIgPSB2YWwgJiAweDdmO1xuICAgICAgICAgICAgdmFsID0gTWF0aC5mbG9vcih2YWwgLyAxMjgpO1xuICAgICAgICAgICAgaWYgKHZhbCA+IDApIGIgfD0gMHg4MFxuICAgICAgICAgICAgdGhpcy5yZWFsbG9jKDEpO1xuICAgICAgICAgICAgdGhpcy5idWZbdGhpcy5wb3MrK10gPSBiO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuUHJvdG9idWYucHJvdG90eXBlLndyaXRlVGFnZ2VkVmFyaW50ID0gZnVuY3Rpb24odGFnLCB2YWwpIHtcbiAgICB0aGlzLndyaXRlVGFnKHRhZywgUHJvdG9idWYuVmFyaW50KTtcbiAgICB0aGlzLndyaXRlVmFyaW50KHZhbCk7XG59O1xuXG5Qcm90b2J1Zi5wcm90b3R5cGUud3JpdGVTVmFyaW50ID0gZnVuY3Rpb24odmFsKSB7XG4gICAgaWYgKHZhbCA+PSAwKSB7XG4gICAgICAgIHRoaXMud3JpdGVWYXJpbnQodmFsICogMik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy53cml0ZVZhcmludCh2YWwgKiAtMiAtIDEpO1xuICAgIH1cbn07XG5cblByb3RvYnVmLnByb3RvdHlwZS53cml0ZVRhZ2dlZFNWYXJpbnQgPSBmdW5jdGlvbih0YWcsIHZhbCkge1xuICAgIHRoaXMud3JpdGVUYWcodGFnLCBQcm90b2J1Zi5WYXJpbnQpO1xuICAgIHRoaXMud3JpdGVTVmFyaW50KHZhbCk7XG59O1xuXG5Qcm90b2J1Zi5wcm90b3R5cGUud3JpdGVCb29sZWFuID0gZnVuY3Rpb24odmFsKSB7XG4gICAgdGhpcy53cml0ZVZhcmludChCb29sZWFuKHZhbCkpO1xufTtcblxuUHJvdG9idWYucHJvdG90eXBlLndyaXRlVGFnZ2VkQm9vbGVhbiA9IGZ1bmN0aW9uKHRhZywgdmFsKSB7XG4gICAgdGhpcy53cml0ZVRhZ2dlZFZhcmludCh0YWcsIEJvb2xlYW4odmFsKSk7XG59O1xuXG5Qcm90b2J1Zi5wcm90b3R5cGUud3JpdGVTdHJpbmcgPSBmdW5jdGlvbihzdHIpIHtcbiAgICBzdHIgPSBTdHJpbmcoc3RyKTtcbiAgICB2YXIgYnl0ZXMgPSBCdWZmZXIuYnl0ZUxlbmd0aChzdHIpO1xuICAgIHRoaXMud3JpdGVWYXJpbnQoYnl0ZXMpO1xuICAgIHRoaXMucmVhbGxvYyhieXRlcyk7XG4gICAgdGhpcy5idWYud3JpdGUoc3RyLCB0aGlzLnBvcyk7XG4gICAgdGhpcy5wb3MgKz0gYnl0ZXM7XG59O1xuXG5Qcm90b2J1Zi5wcm90b3R5cGUud3JpdGVUYWdnZWRTdHJpbmcgPSBmdW5jdGlvbih0YWcsIHN0cikge1xuICAgIHRoaXMud3JpdGVUYWcodGFnLCBQcm90b2J1Zi5TdHJpbmcpO1xuICAgIHRoaXMud3JpdGVTdHJpbmcoc3RyKTtcbn07XG5cblByb3RvYnVmLnByb3RvdHlwZS53cml0ZUZsb2F0ID0gZnVuY3Rpb24odmFsKSB7XG4gICAgdGhpcy5yZWFsbG9jKDQpO1xuICAgIHRoaXMuYnVmLndyaXRlRmxvYXRMRSh2YWwsIHRoaXMucG9zKTtcbiAgICB0aGlzLnBvcyArPSA0O1xufTtcblxuUHJvdG9idWYucHJvdG90eXBlLndyaXRlVGFnZ2VkRmxvYXQgPSBmdW5jdGlvbih0YWcsIHZhbCkge1xuICAgIHRoaXMud3JpdGVUYWcodGFnLCBQcm90b2J1Zi5JbnQzMik7XG4gICAgdGhpcy53cml0ZUZsb2F0KHZhbCk7XG59O1xuXG5Qcm90b2J1Zi5wcm90b3R5cGUud3JpdGVEb3VibGUgPSBmdW5jdGlvbih2YWwpIHtcbiAgICB0aGlzLnJlYWxsb2MoOCk7XG4gICAgdGhpcy5idWYud3JpdGVEb3VibGVMRSh2YWwsIHRoaXMucG9zKTtcbiAgICB0aGlzLnBvcyArPSA4O1xufTtcblxuUHJvdG9idWYucHJvdG90eXBlLndyaXRlVGFnZ2VkRG91YmxlID0gZnVuY3Rpb24odGFnLCB2YWwpIHtcbiAgICB0aGlzLndyaXRlVGFnKHRhZywgUHJvdG9idWYuSW50NjQpO1xuICAgIHRoaXMud3JpdGVEb3VibGUodmFsKTtcbn07XG5cblByb3RvYnVmLnByb3RvdHlwZS53cml0ZUJ1ZmZlciA9IGZ1bmN0aW9uKGJ1ZmZlcikge1xuICAgIHZhciBieXRlcyA9IGJ1ZmZlci5sZW5ndGg7XG4gICAgdGhpcy53cml0ZVZhcmludChieXRlcyk7XG4gICAgdGhpcy5yZWFsbG9jKGJ5dGVzKTtcbiAgICBidWZmZXIuY29weSh0aGlzLmJ1ZiwgdGhpcy5wb3MpO1xuICAgIHRoaXMucG9zICs9IGJ5dGVzO1xufTtcblxuUHJvdG9idWYucHJvdG90eXBlLndyaXRlVGFnZ2VkQnVmZmVyID0gZnVuY3Rpb24odGFnLCBidWZmZXIpIHtcbiAgICB0aGlzLndyaXRlVGFnKHRhZywgUHJvdG9idWYuU3RyaW5nKTtcbiAgICB0aGlzLndyaXRlQnVmZmVyKGJ1ZmZlcik7XG59O1xuXG5Qcm90b2J1Zi5wcm90b3R5cGUud3JpdGVNZXNzYWdlID0gZnVuY3Rpb24odGFnLCBwcm90b2J1Zikge1xuICAgIHZhciBidWZmZXIgPSBwcm90b2J1Zi5maW5pc2goKTtcbiAgICB0aGlzLndyaXRlVGFnKHRhZywgUHJvdG9idWYuTWVzc2FnZSk7XG4gICAgdGhpcy53cml0ZUJ1ZmZlcihidWZmZXIpO1xufTtcblxufSkuY2FsbCh0aGlzLHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyKVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ6dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW1Gd2NDOXNhV0l2VEdWaFpteGxkQzVOWVhCaWIzaFdaV04wYjNKVWFXeGxMMjV2WkdWZmJXOWtkV3hsY3k5d1ltWXZhVzVrWlhndWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqdEJRVUZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CSWl3aVptbHNaU0k2SW1kbGJtVnlZWFJsWkM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SW5kWE5sSUhOMGNtbGpkQ2M3WEc1Y2JuWmhjaUJwWldWbE56VTBJRDBnY21WeGRXbHlaU2duYVdWbFpUYzFOQ2NwTzF4dVhHNXRiMlIxYkdVdVpYaHdiM0owY3lBOUlGQnliM1J2WW5WbU8xeHVablZ1WTNScGIyNGdVSEp2ZEc5aWRXWW9ZblZtS1NCN1hHNGdJQ0FnZEdocGN5NWlkV1lnUFNCaWRXWTdYRzRnSUNBZ2RHaHBjeTV3YjNNZ1BTQXdPMXh1ZlZ4dVhHNVFjbTkwYjJKMVppNXdjbTkwYjNSNWNHVWdQU0I3WEc0Z0lDQWdaMlYwSUd4bGJtZDBhQ2dwSUhzZ2NtVjBkWEp1SUhSb2FYTXVZblZtTG14bGJtZDBhRHNnZlZ4dWZUdGNibHh1VUhKdmRHOWlkV1l1Vm1GeWFXNTBJRDBnTUR0Y2JsQnliM1J2WW5WbUxrbHVkRFkwSUQwZ01UdGNibEJ5YjNSdlluVm1MazFsYzNOaFoyVWdQU0F5TzF4dVVISnZkRzlpZFdZdVUzUnlhVzVuSUQwZ01qdGNibEJ5YjNSdlluVm1MbEJoWTJ0bFpDQTlJREk3WEc1UWNtOTBiMkoxWmk1SmJuUXpNaUE5SURVN1hHNWNibEJ5YjNSdlluVm1MbkJ5YjNSdmRIbHdaUzVrWlhOMGNtOTVJRDBnWm5WdVkzUnBiMjRvS1NCN1hHNGdJQ0FnZEdocGN5NWlkV1lnUFNCdWRXeHNPMXh1ZlR0Y2JseHVMeThnUFQwOUlGSkZRVVJKVGtjZ1BUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMWNibHh1VUhKdmRHOWlkV1l1Y0hKdmRHOTBlWEJsTG5KbFlXUlZTVzUwTXpJZ1BTQm1kVzVqZEdsdmJpZ3BJSHRjYmlBZ0lDQjJZWElnZG1Gc0lEMGdkR2hwY3k1aWRXWXVjbVZoWkZWSmJuUXpNa3hGS0hSb2FYTXVjRzl6S1R0Y2JpQWdJQ0IwYUdsekxuQnZjeUFyUFNBME8xeHVJQ0FnSUhKbGRIVnliaUIyWVd3N1hHNTlPMXh1WEc1UWNtOTBiMkoxWmk1d2NtOTBiM1I1Y0dVdWNtVmhaRlZKYm5RMk5DQTlJR1oxYm1OMGFXOXVLQ2tnZTF4dUlDQWdJSFpoY2lCMllXd2dQU0IwYUdsekxtSjFaaTV5WldGa1ZVbHVkRFkwVEVVb2RHaHBjeTV3YjNNcE8xeHVJQ0FnSUhSb2FYTXVjRzl6SUNzOUlEZzdYRzRnSUNBZ2NtVjBkWEp1SUhaaGJEdGNibjA3WEc1Y2JsQnliM1J2WW5WbUxuQnliM1J2ZEhsd1pTNXlaV0ZrUkc5MVlteGxJRDBnWm5WdVkzUnBiMjRvS1NCN1hHNGdJQ0FnZG1GeUlIWmhiQ0E5SUdsbFpXVTNOVFF1Y21WaFpDaDBhR2x6TG1KMVppd2dkR2hwY3k1d2IzTXNJSFJ5ZFdVc0lEVXlMQ0E0S1R0Y2JpQWdJQ0IwYUdsekxuQnZjeUFyUFNBNE8xeHVJQ0FnSUhKbGRIVnliaUIyWVd3N1hHNTlPMXh1WEc1UWNtOTBiMkoxWmk1d2NtOTBiM1I1Y0dVdWNtVmhaRlpoY21sdWRDQTlJR1oxYm1OMGFXOXVLQ2tnZTF4dUlDQWdJQzh2SUZSUFJFODZJR0p2ZFc1a2N5QmphR1ZqYTJsdVoxeHVJQ0FnSUhaaGNpQndiM01nUFNCMGFHbHpMbkJ2Y3p0Y2JpQWdJQ0JwWmlBb2RHaHBjeTVpZFdaYmNHOXpYU0E4UFNBd2VEZG1LU0I3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVjRzl6S3lzN1hHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCMGFHbHpMbUoxWmx0d2IzTmRPMXh1SUNBZ0lIMGdaV3h6WlNCcFppQW9kR2hwY3k1aWRXWmJjRzl6SUNzZ01WMGdQRDBnTUhnM1ppa2dlMXh1SUNBZ0lDQWdJQ0IwYUdsekxuQnZjeUFyUFNBeU8xeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z0tIUm9hWE11WW5WbVczQnZjMTBnSmlBd2VEZG1LU0I4SUNoMGFHbHpMbUoxWmx0d2IzTWdLeUF4WFNBOFBDQTNLVHRjYmlBZ0lDQjlJR1ZzYzJVZ2FXWWdLSFJvYVhNdVluVm1XM0J2Y3lBcklESmRJRHc5SURCNE4yWXBJSHRjYmlBZ0lDQWdJQ0FnZEdocGN5NXdiM01nS3owZ016dGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlDaDBhR2x6TG1KMVpsdHdiM05kSUNZZ01IZzNaaWtnZkNBb2RHaHBjeTVpZFdaYmNHOXpJQ3NnTVYwZ0ppQXdlRGRtS1NBOFBDQTNJSHdnS0hSb2FYTXVZblZtVzNCdmN5QXJJREpkS1NBOFBDQXhORHRjYmlBZ0lDQjlJR1ZzYzJVZ2FXWWdLSFJvYVhNdVluVm1XM0J2Y3lBcklETmRJRHc5SURCNE4yWXBJSHRjYmlBZ0lDQWdJQ0FnZEdocGN5NXdiM01nS3owZ05EdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlDaDBhR2x6TG1KMVpsdHdiM05kSUNZZ01IZzNaaWtnZkNBb2RHaHBjeTVpZFdaYmNHOXpJQ3NnTVYwZ0ppQXdlRGRtS1NBOFBDQTNJSHdnS0hSb2FYTXVZblZtVzNCdmN5QXJJREpkSUNZZ01IZzNaaWtnUER3Z01UUWdmQ0FvZEdocGN5NWlkV1piY0c5eklDc2dNMTBwSUR3OElESXhPMXh1SUNBZ0lIMGdaV3h6WlNCcFppQW9kR2hwY3k1aWRXWmJjRzl6SUNzZ05GMGdQRDBnTUhnM1ppa2dlMXh1SUNBZ0lDQWdJQ0IwYUdsekxuQnZjeUFyUFNBMU8xeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z0tDaDBhR2x6TG1KMVpsdHdiM05kSUNZZ01IZzNaaWtnZkNBb2RHaHBjeTVpZFdaYmNHOXpJQ3NnTVYwZ0ppQXdlRGRtS1NBOFBDQTNJSHdnS0hSb2FYTXVZblZtVzNCdmN5QXJJREpkSUNZZ01IZzNaaWtnUER3Z01UUWdmQ0FvZEdocGN5NWlkV1piY0c5eklDc2dNMTBwSUR3OElESXhLU0FySUNoMGFHbHpMbUoxWmx0d2IzTWdLeUEwWFNBcUlESTJPRFF6TlRRMU5pazdYRzRnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTV6YTJsd0tGQnliM1J2WW5WbUxsWmhjbWx1ZENrN1hHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlBd08xeHVJQ0FnSUNBZ0lDQXZMeUIwYUhKdmR5QnVaWGNnUlhKeWIzSW9YQ0pVVDBSUE9pQklZVzVrYkdVZ05pc2dZbmwwWlNCMllYSnBiblJ6WENJcE8xeHVJQ0FnSUgxY2JuMDdYRzVjYmxCeWIzUnZZblZtTG5CeWIzUnZkSGx3WlM1eVpXRmtVMVpoY21sdWRDQTlJR1oxYm1OMGFXOXVLQ2tnZTF4dUlDQWdJSFpoY2lCdWRXMGdQU0IwYUdsekxuSmxZV1JXWVhKcGJuUW9LVHRjYmlBZ0lDQnBaaUFvYm5WdElENGdNakUwTnpRNE16WTBOeWtnZEdoeWIzY2dibVYzSUVWeWNtOXlLQ2RVVDBSUE9pQklZVzVrYkdVZ2JuVnRZbVZ5Y3lBK1BTQXlYak13SnlrN1hHNGdJQ0FnTHk4Z2VtbG5lbUZuSUdWdVkyOWthVzVuWEc0Z0lDQWdjbVYwZFhKdUlDZ29iblZ0SUQ0K0lERXBJRjRnTFNodWRXMGdKaUF4S1NrN1hHNTlPMXh1WEc1UWNtOTBiMkoxWmk1d2NtOTBiM1I1Y0dVdWNtVmhaRk4wY21sdVp5QTlJR1oxYm1OMGFXOXVLQ2tnZTF4dUlDQWdJSFpoY2lCaWVYUmxjeUE5SUhSb2FYTXVjbVZoWkZaaGNtbHVkQ2dwTzF4dUlDQWdJQzh2SUZSUFJFODZJR0p2ZFc1a2N5QmphR1ZqYTJsdVoxeHVJQ0FnSUhaaGNpQmphSElnUFNCVGRISnBibWN1Wm5KdmJVTm9ZWEpEYjJSbE8xeHVJQ0FnSUhaaGNpQmlJRDBnZEdocGN5NWlkV1k3WEc0Z0lDQWdkbUZ5SUhBZ1BTQjBhR2x6TG5CdmN6dGNiaUFnSUNCMllYSWdaVzVrSUQwZ2RHaHBjeTV3YjNNZ0t5QmllWFJsY3p0Y2JpQWdJQ0IyWVhJZ2MzUnlJRDBnSnljN1hHNGdJQ0FnZDJocGJHVWdLSEFnUENCbGJtUXBJSHRjYmlBZ0lDQWdJQ0FnYVdZZ0tHSmJjRjBnUEQwZ01IZzNSaWtnYzNSeUlDczlJR05vY2loaVczQXJLMTBwTzF4dUlDQWdJQ0FnSUNCbGJITmxJR2xtSUNoaVczQmRJRHc5SURCNFFrWXBJSFJvY205M0lHNWxkeUJGY25KdmNpZ25TVzUyWVd4cFpDQlZWRVl0T0NCamIyUmxjRzlwYm5RNklDY2dLeUJpVzNCZEtUdGNiaUFnSUNBZ0lDQWdaV3h6WlNCcFppQW9ZbHR3WFNBOFBTQXdlRVJHS1NCemRISWdLejBnWTJoeUtDaGlXM0FySzEwZ0ppQXdlREZHS1NBOFBDQTJJSHdnS0dKYmNDc3JYU0FtSURCNE0wWXBLVHRjYmlBZ0lDQWdJQ0FnWld4elpTQnBaaUFvWWx0d1hTQThQU0F3ZUVWR0tTQnpkSElnS3owZ1kyaHlLQ2hpVzNBcksxMGdKaUF3ZURGR0tTQThQQ0F4TWlCOElDaGlXM0FySzEwZ0ppQXdlRE5HS1NBOFBDQTJJSHdnS0dKYmNDc3JYU0FtSURCNE0wWXBLVHRjYmlBZ0lDQWdJQ0FnWld4elpTQnBaaUFvWWx0d1hTQThQU0F3ZUVZM0tTQndJQ3M5SURRN0lDOHZJRmRsSUdOaGJpZDBJR2hoYm1Sc1pTQjBhR1Z6WlNCamIyUmxjRzlwYm5SeklHbHVJRXBUTENCemJ5QnphMmx3TGx4dUlDQWdJQ0FnSUNCbGJITmxJR2xtSUNoaVczQmRJRHc5SURCNFJrSXBJSEFnS3owZ05UdGNiaUFnSUNBZ0lDQWdaV3h6WlNCcFppQW9ZbHR3WFNBOFBTQXdlRVpFS1NCd0lDczlJRFk3WEc0Z0lDQWdJQ0FnSUdWc2MyVWdkR2h5YjNjZ2JtVjNJRVZ5Y205eUtDZEpiblpoYkdsa0lGVlVSaTA0SUdOdlpHVndiMmx1ZERvZ0p5QXJJR0piY0YwcE8xeHVJQ0FnSUgxY2JpQWdJQ0IwYUdsekxuQnZjeUFyUFNCaWVYUmxjenRjYmlBZ0lDQnlaWFIxY200Z2MzUnlPMXh1ZlR0Y2JseHVVSEp2ZEc5aWRXWXVjSEp2ZEc5MGVYQmxMbkpsWVdSQ2RXWm1aWElnUFNCbWRXNWpkR2x2YmlncElIdGNiaUFnSUNCMllYSWdZbmwwWlhNZ1BTQjBhR2x6TG5KbFlXUldZWEpwYm5Rb0tUdGNiaUFnSUNCMllYSWdZblZtWm1WeUlEMGdkR2hwY3k1aWRXWXVjM1ZpWVhKeVlYa29kR2hwY3k1d2IzTXNJSFJvYVhNdWNHOXpJQ3NnWW5sMFpYTXBPMXh1SUNBZ0lIUm9hWE11Y0c5eklDczlJR0o1ZEdWek8xeHVJQ0FnSUhKbGRIVnliaUJpZFdabVpYSTdYRzU5TzF4dVhHNVFjbTkwYjJKMVppNXdjbTkwYjNSNWNHVXVjbVZoWkZCaFkydGxaQ0E5SUdaMWJtTjBhVzl1S0hSNWNHVXBJSHRjYmlBZ0lDQXZMeUJVVDBSUE9pQmliM1Z1WkhNZ1kyaGxZMnRwYm1kY2JpQWdJQ0IyWVhJZ1lubDBaWE1nUFNCMGFHbHpMbkpsWVdSV1lYSnBiblFvS1R0Y2JpQWdJQ0IyWVhJZ1pXNWtJRDBnZEdocGN5NXdiM01nS3lCaWVYUmxjenRjYmlBZ0lDQjJZWElnWVhKeVlYa2dQU0JiWFR0Y2JpQWdJQ0IzYUdsc1pTQW9kR2hwY3k1d2IzTWdQQ0JsYm1RcElIdGNiaUFnSUNBZ0lDQWdZWEp5WVhrdWNIVnphQ2gwYUdseld5ZHlaV0ZrSnlBcklIUjVjR1ZkS0NrcE8xeHVJQ0FnSUgxY2JpQWdJQ0J5WlhSMWNtNGdZWEp5WVhrN1hHNTlPMXh1WEc1UWNtOTBiMkoxWmk1d2NtOTBiM1I1Y0dVdWMydHBjQ0E5SUdaMWJtTjBhVzl1S0haaGJDa2dlMXh1SUNBZ0lDOHZJRlJQUkU4NklHSnZkVzVrY3lCamFHVmphMmx1WjF4dUlDQWdJSFpoY2lCMGVYQmxJRDBnZG1Gc0lDWWdNSGczTzF4dUlDQWdJSE4zYVhSamFDQW9kSGx3WlNrZ2UxeHVJQ0FnSUNBZ0lDQXZLaUIyWVhKcGJuUWdLaThnWTJGelpTQlFjbTkwYjJKMVppNVdZWEpwYm5RNklIZG9hV3hsSUNoMGFHbHpMbUoxWmx0MGFHbHpMbkJ2Y3lzclhTQStJREI0TjJZcE95QmljbVZoYXp0Y2JpQWdJQ0FnSUNBZ0x5b2dOalFnWW1sMElDb3ZJR05oYzJVZ1VISnZkRzlpZFdZdVNXNTBOalE2SUhSb2FYTXVjRzl6SUNzOUlEZzdJR0p5WldGck8xeHVJQ0FnSUNBZ0lDQXZLaUJzWlc1bmRHZ2dLaThnWTJGelpTQlFjbTkwYjJKMVppNU5aWE56WVdkbE9pQjJZWElnWW5sMFpYTWdQU0IwYUdsekxuSmxZV1JXWVhKcGJuUW9LVHNnZEdocGN5NXdiM01nS3owZ1lubDBaWE03SUdKeVpXRnJPMXh1SUNBZ0lDQWdJQ0F2S2lBek1pQmlhWFFnS2k4Z1kyRnpaU0JRY205MGIySjFaaTVKYm5Rek1qb2dkR2hwY3k1d2IzTWdLejBnTkRzZ1luSmxZV3M3WEc0Z0lDQWdJQ0FnSUdSbFptRjFiSFE2SUhSb2NtOTNJRzVsZHlCRmNuSnZjaWduVlc1cGJYQnNaVzFsYm5SbFpDQjBlWEJsT2lBbklDc2dkSGx3WlNrN1hHNGdJQ0FnZlZ4dWZUdGNibHh1THk4Z1BUMDlJRmRTU1ZSSlRrY2dQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDFjYmx4dVVISnZkRzlpZFdZdWNISnZkRzkwZVhCbExuZHlhWFJsVkdGbklEMGdablZ1WTNScGIyNG9kR0ZuTENCMGVYQmxLU0I3WEc0Z0lDQWdkR2hwY3k1M2NtbDBaVlpoY21sdWRDZ29kR0ZuSUR3OElETXBJSHdnZEhsd1pTazdYRzU5TzF4dVhHNVFjbTkwYjJKMVppNXdjbTkwYjNSNWNHVXVjbVZoYkd4dll5QTlJR1oxYm1OMGFXOXVLRzFwYmlrZ2UxeHVJQ0FnSUhaaGNpQnNaVzVuZEdnZ1BTQjBhR2x6TG1KMVppNXNaVzVuZEdnN1hHNGdJQ0FnZDJocGJHVWdLR3hsYm1kMGFDQThJSFJvYVhNdWNHOXpJQ3NnYldsdUtTQnNaVzVuZEdnZ0tqMGdNanRjYmlBZ0lDQnBaaUFvYkdWdVozUm9JQ0U5SUhSb2FYTXVZblZtTG14bGJtZDBhQ2tnZTF4dUlDQWdJQ0FnSUNCMllYSWdZblZtSUQwZ2JtVjNJRUoxWm1abGNpaHNaVzVuZEdncE8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG1KMVppNWpiM0I1S0dKMVppazdYRzRnSUNBZ0lDQWdJSFJvYVhNdVluVm1JRDBnWW5WbU8xeHVJQ0FnSUgxY2JuMDdYRzVjYmxCeWIzUnZZblZtTG5CeWIzUnZkSGx3WlM1bWFXNXBjMmdnUFNCbWRXNWpkR2x2YmlncElIdGNiaUFnSUNCeVpYUjFjbTRnZEdocGN5NWlkV1l1YzJ4cFkyVW9NQ3dnZEdocGN5NXdiM01wTzF4dWZUdGNibHh1VUhKdmRHOWlkV1l1Y0hKdmRHOTBlWEJsTG5keWFYUmxVR0ZqYTJWa0lEMGdablZ1WTNScGIyNG9kSGx3WlN3Z2RHRm5MQ0JwZEdWdGN5a2dlMXh1SUNBZ0lHbG1JQ2doYVhSbGJYTXViR1Z1WjNSb0tTQnlaWFIxY200N1hHNWNiaUFnSUNCMllYSWdiV1Z6YzJGblpTQTlJRzVsZHlCUWNtOTBiMkoxWmlncE8xeHVJQ0FnSUdadmNpQW9kbUZ5SUdrZ1BTQXdPeUJwSUR3Z2FYUmxiWE11YkdWdVozUm9PeUJwS3lzcElIdGNiaUFnSUNBZ0lDQWdiV1Z6YzJGblpWc25kM0pwZEdVbklDc2dkSGx3WlYwb2FYUmxiWE5iYVYwcE8xeHVJQ0FnSUgxY2JpQWdJQ0IyWVhJZ1pHRjBZU0E5SUcxbGMzTmhaMlV1Wm1sdWFYTm9LQ2s3WEc1Y2JpQWdJQ0IwYUdsekxuZHlhWFJsVkdGbktIUmhaeXdnVUhKdmRHOWlkV1l1VUdGamEyVmtLVHRjYmlBZ0lDQjBhR2x6TG5keWFYUmxRblZtWm1WeUtHUmhkR0VwTzF4dWZUdGNibHh1VUhKdmRHOWlkV1l1Y0hKdmRHOTBlWEJsTG5keWFYUmxWVWx1ZERNeUlEMGdablZ1WTNScGIyNG9kbUZzS1NCN1hHNGdJQ0FnZEdocGN5NXlaV0ZzYkc5aktEUXBPMXh1SUNBZ0lIUm9hWE11WW5WbUxuZHlhWFJsVlVsdWRETXlURVVvZG1Gc0xDQjBhR2x6TG5CdmN5azdYRzRnSUNBZ2RHaHBjeTV3YjNNZ0t6MGdORHRjYm4wN1hHNWNibEJ5YjNSdlluVm1MbkJ5YjNSdmRIbHdaUzUzY21sMFpWUmhaMmRsWkZWSmJuUXpNaUE5SUdaMWJtTjBhVzl1S0hSaFp5d2dkbUZzS1NCN1hHNGdJQ0FnZEdocGN5NTNjbWwwWlZSaFp5aDBZV2NzSUZCeWIzUnZZblZtTGtsdWRETXlLVHRjYmlBZ0lDQjBhR2x6TG5keWFYUmxWVWx1ZERNeUtIWmhiQ2s3WEc1OU8xeHVYRzVRY205MGIySjFaaTV3Y205MGIzUjVjR1V1ZDNKcGRHVldZWEpwYm5RZ1BTQm1kVzVqZEdsdmJpaDJZV3dwSUh0Y2JpQWdJQ0IyWVd3Z1BTQk9kVzFpWlhJb2RtRnNLVHRjYmlBZ0lDQnBaaUFvYVhOT1lVNG9kbUZzS1NrZ2UxeHVJQ0FnSUNBZ0lDQjJZV3dnUFNBd08xeHVJQ0FnSUgxY2JseHVJQ0FnSUdsbUlDaDJZV3dnUEQwZ01IZzNaaWtnZTF4dUlDQWdJQ0FnSUNCMGFHbHpMbkpsWVd4c2IyTW9NU2s3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVZblZtVzNSb2FYTXVjRzl6S3l0ZElEMGdkbUZzTzF4dUlDQWdJSDBnWld4elpTQnBaaUFvZG1Gc0lEdzlJREI0TTJabVppa2dlMXh1SUNBZ0lDQWdJQ0IwYUdsekxuSmxZV3hzYjJNb01pazdYRzRnSUNBZ0lDQWdJSFJvYVhNdVluVm1XM1JvYVhNdWNHOXpLeXRkSUQwZ01IZzRNQ0I4SUNnb2RtRnNJRDQrUGlBd0tTQW1JREI0TjJZcE8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG1KMVpsdDBhR2x6TG5CdmN5c3JYU0E5SURCNE1EQWdmQ0FvS0haaGJDQStQajRnTnlrZ0ppQXdlRGRtS1R0Y2JpQWdJQ0I5SUdWc2MyVWdhV1lnS0haaGJDQThQU0F3ZURGbVptWm1abVlwSUh0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTV5WldGc2JHOWpLRE1wTzF4dUlDQWdJQ0FnSUNCMGFHbHpMbUoxWmx0MGFHbHpMbkJ2Y3lzclhTQTlJREI0T0RBZ2ZDQW9LSFpoYkNBK1BqNGdNQ2tnSmlBd2VEZG1LVHRjYmlBZ0lDQWdJQ0FnZEdocGN5NWlkV1piZEdocGN5NXdiM01ySzEwZ1BTQXdlRGd3SUh3Z0tDaDJZV3dnUGo0K0lEY3BJQ1lnTUhnM1ppazdYRzRnSUNBZ0lDQWdJSFJvYVhNdVluVm1XM1JvYVhNdWNHOXpLeXRkSUQwZ01IZ3dNQ0I4SUNnb2RtRnNJRDQrUGlBeE5Da2dKaUF3ZURkbUtUdGNiaUFnSUNCOUlHVnNjMlVnYVdZZ0tIWmhiQ0E4UFNBd2VHWm1abVptWm1ZcElIdGNiaUFnSUNBZ0lDQWdkR2hwY3k1eVpXRnNiRzlqS0RRcE8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG1KMVpsdDBhR2x6TG5CdmN5c3JYU0E5SURCNE9EQWdmQ0FvS0haaGJDQStQajRnTUNrZ0ppQXdlRGRtS1R0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVpZFdaYmRHaHBjeTV3YjNNcksxMGdQU0F3ZURnd0lId2dLQ2gyWVd3Z1BqNCtJRGNwSUNZZ01IZzNaaWs3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVZblZtVzNSb2FYTXVjRzl6S3l0ZElEMGdNSGc0TUNCOElDZ29kbUZzSUQ0K1BpQXhOQ2tnSmlBd2VEZG1LVHRjYmlBZ0lDQWdJQ0FnZEdocGN5NWlkV1piZEdocGN5NXdiM01ySzEwZ1BTQXdlREF3SUh3Z0tDaDJZV3dnUGo0K0lESXhLU0FtSURCNE4yWXBPMXh1SUNBZ0lIMGdaV3h6WlNCN1hHNGdJQ0FnSUNBZ0lIZG9hV3hsSUNoMllXd2dQaUF3S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IyWVhJZ1lpQTlJSFpoYkNBbUlEQjROMlk3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjJZV3dnUFNCTllYUm9MbVpzYjI5eUtIWmhiQ0F2SURFeU9DazdYRzRnSUNBZ0lDQWdJQ0FnSUNCcFppQW9kbUZzSUQ0Z01Da2dZaUI4UFNBd2VEZ3dYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbkpsWVd4c2IyTW9NU2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TG1KMVpsdDBhR2x6TG5CdmN5c3JYU0E5SUdJN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNCOVhHNTlPMXh1WEc1UWNtOTBiMkoxWmk1d2NtOTBiM1I1Y0dVdWQzSnBkR1ZVWVdkblpXUldZWEpwYm5RZ1BTQm1kVzVqZEdsdmJpaDBZV2NzSUhaaGJDa2dlMXh1SUNBZ0lIUm9hWE11ZDNKcGRHVlVZV2NvZEdGbkxDQlFjbTkwYjJKMVppNVdZWEpwYm5RcE8xeHVJQ0FnSUhSb2FYTXVkM0pwZEdWV1lYSnBiblFvZG1Gc0tUdGNibjA3WEc1Y2JsQnliM1J2WW5WbUxuQnliM1J2ZEhsd1pTNTNjbWwwWlZOV1lYSnBiblFnUFNCbWRXNWpkR2x2YmloMllXd3BJSHRjYmlBZ0lDQnBaaUFvZG1Gc0lENDlJREFwSUh0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTUzY21sMFpWWmhjbWx1ZENoMllXd2dLaUF5S1R0Y2JpQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdJQ0IwYUdsekxuZHlhWFJsVm1GeWFXNTBLSFpoYkNBcUlDMHlJQzBnTVNrN1hHNGdJQ0FnZlZ4dWZUdGNibHh1VUhKdmRHOWlkV1l1Y0hKdmRHOTBlWEJsTG5keWFYUmxWR0ZuWjJWa1UxWmhjbWx1ZENBOUlHWjFibU4wYVc5dUtIUmhaeXdnZG1Gc0tTQjdYRzRnSUNBZ2RHaHBjeTUzY21sMFpWUmhaeWgwWVdjc0lGQnliM1J2WW5WbUxsWmhjbWx1ZENrN1hHNGdJQ0FnZEdocGN5NTNjbWwwWlZOV1lYSnBiblFvZG1Gc0tUdGNibjA3WEc1Y2JsQnliM1J2WW5WbUxuQnliM1J2ZEhsd1pTNTNjbWwwWlVKdmIyeGxZVzRnUFNCbWRXNWpkR2x2YmloMllXd3BJSHRjYmlBZ0lDQjBhR2x6TG5keWFYUmxWbUZ5YVc1MEtFSnZiMnhsWVc0b2RtRnNLU2s3WEc1OU8xeHVYRzVRY205MGIySjFaaTV3Y205MGIzUjVjR1V1ZDNKcGRHVlVZV2RuWldSQ2IyOXNaV0Z1SUQwZ1puVnVZM1JwYjI0b2RHRm5MQ0IyWVd3cElIdGNiaUFnSUNCMGFHbHpMbmR5YVhSbFZHRm5aMlZrVm1GeWFXNTBLSFJoWnl3Z1FtOXZiR1ZoYmloMllXd3BLVHRjYm4wN1hHNWNibEJ5YjNSdlluVm1MbkJ5YjNSdmRIbHdaUzUzY21sMFpWTjBjbWx1WnlBOUlHWjFibU4wYVc5dUtITjBjaWtnZTF4dUlDQWdJSE4wY2lBOUlGTjBjbWx1WnloemRISXBPMXh1SUNBZ0lIWmhjaUJpZVhSbGN5QTlJRUoxWm1abGNpNWllWFJsVEdWdVozUm9LSE4wY2lrN1hHNGdJQ0FnZEdocGN5NTNjbWwwWlZaaGNtbHVkQ2hpZVhSbGN5azdYRzRnSUNBZ2RHaHBjeTV5WldGc2JHOWpLR0o1ZEdWektUdGNiaUFnSUNCMGFHbHpMbUoxWmk1M2NtbDBaU2h6ZEhJc0lIUm9hWE11Y0c5ektUdGNiaUFnSUNCMGFHbHpMbkJ2Y3lBclBTQmllWFJsY3p0Y2JuMDdYRzVjYmxCeWIzUnZZblZtTG5CeWIzUnZkSGx3WlM1M2NtbDBaVlJoWjJkbFpGTjBjbWx1WnlBOUlHWjFibU4wYVc5dUtIUmhaeXdnYzNSeUtTQjdYRzRnSUNBZ2RHaHBjeTUzY21sMFpWUmhaeWgwWVdjc0lGQnliM1J2WW5WbUxsTjBjbWx1WnlrN1hHNGdJQ0FnZEdocGN5NTNjbWwwWlZOMGNtbHVaeWh6ZEhJcE8xeHVmVHRjYmx4dVVISnZkRzlpZFdZdWNISnZkRzkwZVhCbExuZHlhWFJsUm14dllYUWdQU0JtZFc1amRHbHZiaWgyWVd3cElIdGNiaUFnSUNCMGFHbHpMbkpsWVd4c2IyTW9OQ2s3WEc0Z0lDQWdkR2hwY3k1aWRXWXVkM0pwZEdWR2JHOWhkRXhGS0haaGJDd2dkR2hwY3k1d2IzTXBPMXh1SUNBZ0lIUm9hWE11Y0c5eklDczlJRFE3WEc1OU8xeHVYRzVRY205MGIySjFaaTV3Y205MGIzUjVjR1V1ZDNKcGRHVlVZV2RuWldSR2JHOWhkQ0E5SUdaMWJtTjBhVzl1S0hSaFp5d2dkbUZzS1NCN1hHNGdJQ0FnZEdocGN5NTNjbWwwWlZSaFp5aDBZV2NzSUZCeWIzUnZZblZtTGtsdWRETXlLVHRjYmlBZ0lDQjBhR2x6TG5keWFYUmxSbXh2WVhRb2RtRnNLVHRjYm4wN1hHNWNibEJ5YjNSdlluVm1MbkJ5YjNSdmRIbHdaUzUzY21sMFpVUnZkV0pzWlNBOUlHWjFibU4wYVc5dUtIWmhiQ2tnZTF4dUlDQWdJSFJvYVhNdWNtVmhiR3h2WXlnNEtUdGNiaUFnSUNCMGFHbHpMbUoxWmk1M2NtbDBaVVJ2ZFdKc1pVeEZLSFpoYkN3Z2RHaHBjeTV3YjNNcE8xeHVJQ0FnSUhSb2FYTXVjRzl6SUNzOUlEZzdYRzU5TzF4dVhHNVFjbTkwYjJKMVppNXdjbTkwYjNSNWNHVXVkM0pwZEdWVVlXZG5aV1JFYjNWaWJHVWdQU0JtZFc1amRHbHZiaWgwWVdjc0lIWmhiQ2tnZTF4dUlDQWdJSFJvYVhNdWQzSnBkR1ZVWVdjb2RHRm5MQ0JRY205MGIySjFaaTVKYm5RMk5DazdYRzRnSUNBZ2RHaHBjeTUzY21sMFpVUnZkV0pzWlNoMllXd3BPMXh1ZlR0Y2JseHVVSEp2ZEc5aWRXWXVjSEp2ZEc5MGVYQmxMbmR5YVhSbFFuVm1abVZ5SUQwZ1puVnVZM1JwYjI0b1luVm1abVZ5S1NCN1hHNGdJQ0FnZG1GeUlHSjVkR1Z6SUQwZ1luVm1abVZ5TG14bGJtZDBhRHRjYmlBZ0lDQjBhR2x6TG5keWFYUmxWbUZ5YVc1MEtHSjVkR1Z6S1R0Y2JpQWdJQ0IwYUdsekxuSmxZV3hzYjJNb1lubDBaWE1wTzF4dUlDQWdJR0oxWm1abGNpNWpiM0I1S0hSb2FYTXVZblZtTENCMGFHbHpMbkJ2Y3lrN1hHNGdJQ0FnZEdocGN5NXdiM01nS3owZ1lubDBaWE03WEc1OU8xeHVYRzVRY205MGIySjFaaTV3Y205MGIzUjVjR1V1ZDNKcGRHVlVZV2RuWldSQ2RXWm1aWElnUFNCbWRXNWpkR2x2YmloMFlXY3NJR0oxWm1abGNpa2dlMXh1SUNBZ0lIUm9hWE11ZDNKcGRHVlVZV2NvZEdGbkxDQlFjbTkwYjJKMVppNVRkSEpwYm1jcE8xeHVJQ0FnSUhSb2FYTXVkM0pwZEdWQ2RXWm1aWElvWW5WbVptVnlLVHRjYm4wN1hHNWNibEJ5YjNSdlluVm1MbkJ5YjNSdmRIbHdaUzUzY21sMFpVMWxjM05oWjJVZ1BTQm1kVzVqZEdsdmJpaDBZV2NzSUhCeWIzUnZZblZtS1NCN1hHNGdJQ0FnZG1GeUlHSjFabVpsY2lBOUlIQnliM1J2WW5WbUxtWnBibWx6YUNncE8xeHVJQ0FnSUhSb2FYTXVkM0pwZEdWVVlXY29kR0ZuTENCUWNtOTBiMkoxWmk1TlpYTnpZV2RsS1R0Y2JpQWdJQ0IwYUdsekxuZHlhWFJsUW5WbVptVnlLR0oxWm1abGNpazdYRzU5TzF4dUlsMTkiLCJleHBvcnRzLnJlYWQgPSBmdW5jdGlvbihidWZmZXIsIG9mZnNldCwgaXNMRSwgbUxlbiwgbkJ5dGVzKSB7XG4gIHZhciBlLCBtLFxuICAgICAgZUxlbiA9IG5CeXRlcyAqIDggLSBtTGVuIC0gMSxcbiAgICAgIGVNYXggPSAoMSA8PCBlTGVuKSAtIDEsXG4gICAgICBlQmlhcyA9IGVNYXggPj4gMSxcbiAgICAgIG5CaXRzID0gLTcsXG4gICAgICBpID0gaXNMRSA/IChuQnl0ZXMgLSAxKSA6IDAsXG4gICAgICBkID0gaXNMRSA/IC0xIDogMSxcbiAgICAgIHMgPSBidWZmZXJbb2Zmc2V0ICsgaV07XG5cbiAgaSArPSBkO1xuXG4gIGUgPSBzICYgKCgxIDw8ICgtbkJpdHMpKSAtIDEpO1xuICBzID4+PSAoLW5CaXRzKTtcbiAgbkJpdHMgKz0gZUxlbjtcbiAgZm9yICg7IG5CaXRzID4gMDsgZSA9IGUgKiAyNTYgKyBidWZmZXJbb2Zmc2V0ICsgaV0sIGkgKz0gZCwgbkJpdHMgLT0gOCk7XG5cbiAgbSA9IGUgJiAoKDEgPDwgKC1uQml0cykpIC0gMSk7XG4gIGUgPj49ICgtbkJpdHMpO1xuICBuQml0cyArPSBtTGVuO1xuICBmb3IgKDsgbkJpdHMgPiAwOyBtID0gbSAqIDI1NiArIGJ1ZmZlcltvZmZzZXQgKyBpXSwgaSArPSBkLCBuQml0cyAtPSA4KTtcblxuICBpZiAoZSA9PT0gMCkge1xuICAgIGUgPSAxIC0gZUJpYXM7XG4gIH0gZWxzZSBpZiAoZSA9PT0gZU1heCkge1xuICAgIHJldHVybiBtID8gTmFOIDogKChzID8gLTEgOiAxKSAqIEluZmluaXR5KTtcbiAgfSBlbHNlIHtcbiAgICBtID0gbSArIE1hdGgucG93KDIsIG1MZW4pO1xuICAgIGUgPSBlIC0gZUJpYXM7XG4gIH1cbiAgcmV0dXJuIChzID8gLTEgOiAxKSAqIG0gKiBNYXRoLnBvdygyLCBlIC0gbUxlbik7XG59O1xuXG5leHBvcnRzLndyaXRlID0gZnVuY3Rpb24oYnVmZmVyLCB2YWx1ZSwgb2Zmc2V0LCBpc0xFLCBtTGVuLCBuQnl0ZXMpIHtcbiAgdmFyIGUsIG0sIGMsXG4gICAgICBlTGVuID0gbkJ5dGVzICogOCAtIG1MZW4gLSAxLFxuICAgICAgZU1heCA9ICgxIDw8IGVMZW4pIC0gMSxcbiAgICAgIGVCaWFzID0gZU1heCA+PiAxLFxuICAgICAgcnQgPSAobUxlbiA9PT0gMjMgPyBNYXRoLnBvdygyLCAtMjQpIC0gTWF0aC5wb3coMiwgLTc3KSA6IDApLFxuICAgICAgaSA9IGlzTEUgPyAwIDogKG5CeXRlcyAtIDEpLFxuICAgICAgZCA9IGlzTEUgPyAxIDogLTEsXG4gICAgICBzID0gdmFsdWUgPCAwIHx8ICh2YWx1ZSA9PT0gMCAmJiAxIC8gdmFsdWUgPCAwKSA/IDEgOiAwO1xuXG4gIHZhbHVlID0gTWF0aC5hYnModmFsdWUpO1xuXG4gIGlmIChpc05hTih2YWx1ZSkgfHwgdmFsdWUgPT09IEluZmluaXR5KSB7XG4gICAgbSA9IGlzTmFOKHZhbHVlKSA/IDEgOiAwO1xuICAgIGUgPSBlTWF4O1xuICB9IGVsc2Uge1xuICAgIGUgPSBNYXRoLmZsb29yKE1hdGgubG9nKHZhbHVlKSAvIE1hdGguTE4yKTtcbiAgICBpZiAodmFsdWUgKiAoYyA9IE1hdGgucG93KDIsIC1lKSkgPCAxKSB7XG4gICAgICBlLS07XG4gICAgICBjICo9IDI7XG4gICAgfVxuICAgIGlmIChlICsgZUJpYXMgPj0gMSkge1xuICAgICAgdmFsdWUgKz0gcnQgLyBjO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWx1ZSArPSBydCAqIE1hdGgucG93KDIsIDEgLSBlQmlhcyk7XG4gICAgfVxuICAgIGlmICh2YWx1ZSAqIGMgPj0gMikge1xuICAgICAgZSsrO1xuICAgICAgYyAvPSAyO1xuICAgIH1cblxuICAgIGlmIChlICsgZUJpYXMgPj0gZU1heCkge1xuICAgICAgbSA9IDA7XG4gICAgICBlID0gZU1heDtcbiAgICB9IGVsc2UgaWYgKGUgKyBlQmlhcyA+PSAxKSB7XG4gICAgICBtID0gKHZhbHVlICogYyAtIDEpICogTWF0aC5wb3coMiwgbUxlbik7XG4gICAgICBlID0gZSArIGVCaWFzO1xuICAgIH0gZWxzZSB7XG4gICAgICBtID0gdmFsdWUgKiBNYXRoLnBvdygyLCBlQmlhcyAtIDEpICogTWF0aC5wb3coMiwgbUxlbik7XG4gICAgICBlID0gMDtcbiAgICB9XG4gIH1cblxuICBmb3IgKDsgbUxlbiA+PSA4OyBidWZmZXJbb2Zmc2V0ICsgaV0gPSBtICYgMHhmZiwgaSArPSBkLCBtIC89IDI1NiwgbUxlbiAtPSA4KTtcblxuICBlID0gKGUgPDwgbUxlbikgfCBtO1xuICBlTGVuICs9IG1MZW47XG4gIGZvciAoOyBlTGVuID4gMDsgYnVmZmVyW29mZnNldCArIGldID0gZSAmIDB4ZmYsIGkgKz0gZCwgZSAvPSAyNTYsIGVMZW4gLT0gOCk7XG5cbiAgYnVmZmVyW29mZnNldCArIGkgLSBkXSB8PSBzICogMTI4O1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBQb2ludDtcblxuZnVuY3Rpb24gUG9pbnQoeCwgeSkge1xuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbn1cblxuUG9pbnQucHJvdG90eXBlID0ge1xuICAgIGNsb25lOiBmdW5jdGlvbigpIHsgcmV0dXJuIG5ldyBQb2ludCh0aGlzLngsIHRoaXMueSk7IH0sXG5cbiAgICBhZGQ6ICAgICBmdW5jdGlvbihwKSB7IHJldHVybiB0aGlzLmNsb25lKCkuX2FkZChwKTsgICAgIH0sXG4gICAgc3ViOiAgICAgZnVuY3Rpb24ocCkgeyByZXR1cm4gdGhpcy5jbG9uZSgpLl9zdWIocCk7ICAgICB9LFxuICAgIG11bHQ6ICAgIGZ1bmN0aW9uKGspIHsgcmV0dXJuIHRoaXMuY2xvbmUoKS5fbXVsdChrKTsgICAgfSxcbiAgICBkaXY6ICAgICBmdW5jdGlvbihrKSB7IHJldHVybiB0aGlzLmNsb25lKCkuX2RpdihrKTsgICAgIH0sXG4gICAgcm90YXRlOiAgZnVuY3Rpb24oYSkgeyByZXR1cm4gdGhpcy5jbG9uZSgpLl9yb3RhdGUoYSk7ICB9LFxuICAgIG1hdE11bHQ6IGZ1bmN0aW9uKG0pIHsgcmV0dXJuIHRoaXMuY2xvbmUoKS5fbWF0TXVsdChtKTsgfSxcbiAgICB1bml0OiAgICBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMuY2xvbmUoKS5fdW5pdCgpOyB9LFxuICAgIHBlcnA6ICAgIGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpcy5jbG9uZSgpLl9wZXJwKCk7IH0sXG4gICAgcm91bmQ6ICAgZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzLmNsb25lKCkuX3JvdW5kKCk7IH0sXG5cbiAgICBtYWc6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KHRoaXMueCAqIHRoaXMueCArIHRoaXMueSAqIHRoaXMueSk7XG4gICAgfSxcblxuICAgIGVxdWFsczogZnVuY3Rpb24ocCkge1xuICAgICAgICByZXR1cm4gdGhpcy54ID09PSBwLnggJiZcbiAgICAgICAgICAgICAgIHRoaXMueSA9PT0gcC55O1xuICAgIH0sXG5cbiAgICBkaXN0OiBmdW5jdGlvbihwKSB7XG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQodGhpcy5kaXN0U3FyKHApKTtcbiAgICB9LFxuXG4gICAgZGlzdFNxcjogZnVuY3Rpb24ocCkge1xuICAgICAgICB2YXIgZHggPSBwLnggLSB0aGlzLngsXG4gICAgICAgICAgICBkeSA9IHAueSAtIHRoaXMueTtcbiAgICAgICAgcmV0dXJuIGR4ICogZHggKyBkeSAqIGR5O1xuICAgIH0sXG5cbiAgICBhbmdsZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBNYXRoLmF0YW4yKHRoaXMueSwgdGhpcy54KTtcbiAgICB9LFxuXG4gICAgYW5nbGVUbzogZnVuY3Rpb24oYikge1xuICAgICAgICByZXR1cm4gTWF0aC5hdGFuMih0aGlzLnkgLSBiLnksIHRoaXMueCAtIGIueCk7XG4gICAgfSxcblxuICAgIGFuZ2xlV2l0aDogZnVuY3Rpb24oYikge1xuICAgICAgICByZXR1cm4gdGhpcy5hbmdsZVdpdGhTZXAoYi54LCBiLnkpO1xuICAgIH0sXG5cbiAgICAvLyBGaW5kIHRoZSBhbmdsZSBvZiB0aGUgdHdvIHZlY3RvcnMsIHNvbHZpbmcgdGhlIGZvcm11bGEgZm9yIHRoZSBjcm9zcyBwcm9kdWN0IGEgeCBiID0gfGF8fGJ8c2luKM64KSBmb3IgzrguXG4gICAgYW5nbGVXaXRoU2VwOiBmdW5jdGlvbih4LCB5KSB7XG4gICAgICAgIHJldHVybiBNYXRoLmF0YW4yKFxuICAgICAgICAgICAgdGhpcy54ICogeSAtIHRoaXMueSAqIHgsXG4gICAgICAgICAgICB0aGlzLnggKiB4ICsgdGhpcy55ICogeSk7XG4gICAgfSxcblxuICAgIF9tYXRNdWx0OiBmdW5jdGlvbihtKSB7XG4gICAgICAgIHZhciB4ID0gbVswXSAqIHRoaXMueCArIG1bMV0gKiB0aGlzLnksXG4gICAgICAgICAgICB5ID0gbVsyXSAqIHRoaXMueCArIG1bM10gKiB0aGlzLnk7XG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICBfYWRkOiBmdW5jdGlvbihwKSB7XG4gICAgICAgIHRoaXMueCArPSBwLng7XG4gICAgICAgIHRoaXMueSArPSBwLnk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICBfc3ViOiBmdW5jdGlvbihwKSB7XG4gICAgICAgIHRoaXMueCAtPSBwLng7XG4gICAgICAgIHRoaXMueSAtPSBwLnk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICBfbXVsdDogZnVuY3Rpb24oaykge1xuICAgICAgICB0aGlzLnggKj0gaztcbiAgICAgICAgdGhpcy55ICo9IGs7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICBfZGl2OiBmdW5jdGlvbihrKSB7XG4gICAgICAgIHRoaXMueCAvPSBrO1xuICAgICAgICB0aGlzLnkgLz0gaztcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIF91bml0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5fZGl2KHRoaXMubWFnKCkpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgX3BlcnA6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgeSA9IHRoaXMueTtcbiAgICAgICAgdGhpcy55ID0gdGhpcy54O1xuICAgICAgICB0aGlzLnggPSAteTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIF9yb3RhdGU6IGZ1bmN0aW9uKGFuZ2xlKSB7XG4gICAgICAgIHZhciBjb3MgPSBNYXRoLmNvcyhhbmdsZSksXG4gICAgICAgICAgICBzaW4gPSBNYXRoLnNpbihhbmdsZSksXG4gICAgICAgICAgICB4ID0gY29zICogdGhpcy54IC0gc2luICogdGhpcy55LFxuICAgICAgICAgICAgeSA9IHNpbiAqIHRoaXMueCArIGNvcyAqIHRoaXMueTtcbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIF9yb3VuZDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMueCA9IE1hdGgucm91bmQodGhpcy54KTtcbiAgICAgICAgdGhpcy55ID0gTWF0aC5yb3VuZCh0aGlzLnkpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59O1xuXG4vLyBjb25zdHJ1Y3RzIFBvaW50IGZyb20gYW4gYXJyYXkgaWYgbmVjZXNzYXJ5XG5Qb2ludC5jb252ZXJ0ID0gZnVuY3Rpb24gKGEpIHtcbiAgICBpZiAoYSBpbnN0YW5jZW9mIFBvaW50KSB7XG4gICAgICAgIHJldHVybiBhO1xuICAgIH1cbiAgICBpZiAoQXJyYXkuaXNBcnJheShhKSkge1xuICAgICAgICByZXR1cm4gbmV3IFBvaW50KGFbMF0sIGFbMV0pO1xuICAgIH1cbiAgICByZXR1cm4gYTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cy5WZWN0b3JUaWxlID0gcmVxdWlyZSgnLi9saWIvdmVjdG9ydGlsZS5qcycpO1xubW9kdWxlLmV4cG9ydHMuVmVjdG9yVGlsZUZlYXR1cmUgPSByZXF1aXJlKCcuL2xpYi92ZWN0b3J0aWxlZmVhdHVyZS5qcycpO1xubW9kdWxlLmV4cG9ydHMuVmVjdG9yVGlsZUxheWVyID0gcmVxdWlyZSgnLi9saWIvdmVjdG9ydGlsZWxheWVyLmpzJyk7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBWZWN0b3JUaWxlTGF5ZXIgPSByZXF1aXJlKCcuL3ZlY3RvcnRpbGVsYXllcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFZlY3RvclRpbGU7XG5cbmZ1bmN0aW9uIFZlY3RvclRpbGUoYnVmZmVyLCBlbmQpIHtcblxuICAgIHRoaXMubGF5ZXJzID0ge307XG4gICAgdGhpcy5fYnVmZmVyID0gYnVmZmVyO1xuXG4gICAgZW5kID0gZW5kIHx8IGJ1ZmZlci5sZW5ndGg7XG5cbiAgICB3aGlsZSAoYnVmZmVyLnBvcyA8IGVuZCkge1xuICAgICAgICB2YXIgdmFsID0gYnVmZmVyLnJlYWRWYXJpbnQoKSxcbiAgICAgICAgICAgIHRhZyA9IHZhbCA+PiAzO1xuXG4gICAgICAgIGlmICh0YWcgPT0gMykge1xuICAgICAgICAgICAgdmFyIGxheWVyID0gdGhpcy5yZWFkTGF5ZXIoKTtcbiAgICAgICAgICAgIGlmIChsYXllci5sZW5ndGgpIHRoaXMubGF5ZXJzW2xheWVyLm5hbWVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBidWZmZXIuc2tpcCh2YWwpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5WZWN0b3JUaWxlLnByb3RvdHlwZS5yZWFkTGF5ZXIgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgYnVmZmVyID0gdGhpcy5fYnVmZmVyLFxuICAgICAgICBieXRlcyA9IGJ1ZmZlci5yZWFkVmFyaW50KCksXG4gICAgICAgIGVuZCA9IGJ1ZmZlci5wb3MgKyBieXRlcyxcbiAgICAgICAgbGF5ZXIgPSBuZXcgVmVjdG9yVGlsZUxheWVyKGJ1ZmZlciwgZW5kKTtcblxuICAgIGJ1ZmZlci5wb3MgPSBlbmQ7XG5cbiAgICByZXR1cm4gbGF5ZXI7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgUG9pbnQgPSByZXF1aXJlKCdwb2ludC1nZW9tZXRyeScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFZlY3RvclRpbGVGZWF0dXJlO1xuXG5mdW5jdGlvbiBWZWN0b3JUaWxlRmVhdHVyZShidWZmZXIsIGVuZCwgZXh0ZW50LCBrZXlzLCB2YWx1ZXMpIHtcblxuICAgIHRoaXMucHJvcGVydGllcyA9IHt9O1xuXG4gICAgLy8gUHVibGljXG4gICAgdGhpcy5leHRlbnQgPSBleHRlbnQ7XG4gICAgdGhpcy50eXBlID0gMDtcblxuICAgIC8vIFByaXZhdGVcbiAgICB0aGlzLl9idWZmZXIgPSBidWZmZXI7XG4gICAgdGhpcy5fZ2VvbWV0cnkgPSAtMTtcblxuICAgIGVuZCA9IGVuZCB8fCBidWZmZXIubGVuZ3RoO1xuXG4gICAgd2hpbGUgKGJ1ZmZlci5wb3MgPCBlbmQpIHtcbiAgICAgICAgdmFyIHZhbCA9IGJ1ZmZlci5yZWFkVmFyaW50KCksXG4gICAgICAgICAgICB0YWcgPSB2YWwgPj4gMztcblxuICAgICAgICBpZiAodGFnID09IDEpIHtcbiAgICAgICAgICAgIHRoaXMuX2lkID0gYnVmZmVyLnJlYWRWYXJpbnQoKTtcblxuICAgICAgICB9IGVsc2UgaWYgKHRhZyA9PSAyKSB7XG4gICAgICAgICAgICB2YXIgdGFnTGVuID0gYnVmZmVyLnJlYWRWYXJpbnQoKSxcbiAgICAgICAgICAgICAgICB0YWdFbmQgPSBidWZmZXIucG9zICsgdGFnTGVuO1xuXG4gICAgICAgICAgICB3aGlsZSAoYnVmZmVyLnBvcyA8IHRhZ0VuZCkge1xuICAgICAgICAgICAgICAgIHZhciBrZXkgPSBrZXlzW2J1ZmZlci5yZWFkVmFyaW50KCldO1xuICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IHZhbHVlc1tidWZmZXIucmVhZFZhcmludCgpXTtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BlcnRpZXNba2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0gZWxzZSBpZiAodGFnID09IDMpIHtcbiAgICAgICAgICAgIHRoaXMudHlwZSA9IGJ1ZmZlci5yZWFkVmFyaW50KCk7XG5cbiAgICAgICAgfSBlbHNlIGlmICh0YWcgPT0gNCkge1xuICAgICAgICAgICAgdGhpcy5fZ2VvbWV0cnkgPSBidWZmZXIucG9zO1xuICAgICAgICAgICAgYnVmZmVyLnNraXAodmFsKTtcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYnVmZmVyLnNraXAodmFsKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuVmVjdG9yVGlsZUZlYXR1cmUudHlwZXMgPSBbJ1Vua25vd24nLCAnUG9pbnQnLCAnTGluZVN0cmluZycsICdQb2x5Z29uJ107XG5cblZlY3RvclRpbGVGZWF0dXJlLnByb3RvdHlwZS5sb2FkR2VvbWV0cnkgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgYnVmZmVyID0gdGhpcy5fYnVmZmVyO1xuICAgIGJ1ZmZlci5wb3MgPSB0aGlzLl9nZW9tZXRyeTtcblxuICAgIHZhciBieXRlcyA9IGJ1ZmZlci5yZWFkVmFyaW50KCksXG4gICAgICAgIGVuZCA9IGJ1ZmZlci5wb3MgKyBieXRlcyxcbiAgICAgICAgY21kID0gMSxcbiAgICAgICAgbGVuZ3RoID0gMCxcbiAgICAgICAgeCA9IDAsXG4gICAgICAgIHkgPSAwLFxuICAgICAgICBsaW5lcyA9IFtdLFxuICAgICAgICBsaW5lO1xuXG4gICAgd2hpbGUgKGJ1ZmZlci5wb3MgPCBlbmQpIHtcbiAgICAgICAgaWYgKCFsZW5ndGgpIHtcbiAgICAgICAgICAgIHZhciBjbWRfbGVuZ3RoID0gYnVmZmVyLnJlYWRWYXJpbnQoKTtcbiAgICAgICAgICAgIGNtZCA9IGNtZF9sZW5ndGggJiAweDc7XG4gICAgICAgICAgICBsZW5ndGggPSBjbWRfbGVuZ3RoID4+IDM7XG4gICAgICAgIH1cblxuICAgICAgICBsZW5ndGgtLTtcblxuICAgICAgICBpZiAoY21kID09PSAxIHx8IGNtZCA9PT0gMikge1xuICAgICAgICAgICAgeCArPSBidWZmZXIucmVhZFNWYXJpbnQoKTtcbiAgICAgICAgICAgIHkgKz0gYnVmZmVyLnJlYWRTVmFyaW50KCk7XG5cbiAgICAgICAgICAgIGlmIChjbWQgPT09IDEpIHtcbiAgICAgICAgICAgICAgICAvLyBtb3ZlVG9cbiAgICAgICAgICAgICAgICBpZiAobGluZSkge1xuICAgICAgICAgICAgICAgICAgICBsaW5lcy5wdXNoKGxpbmUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsaW5lID0gW107XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxpbmUucHVzaChuZXcgUG9pbnQoeCwgeSkpO1xuICAgICAgICB9IGVsc2UgaWYgKGNtZCA9PT0gNykge1xuICAgICAgICAgICAgLy8gY2xvc2VQb2x5Z29uXG4gICAgICAgICAgICBsaW5lLnB1c2gobGluZVswXS5jbG9uZSgpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigndW5rbm93biBjb21tYW5kICcgKyBjbWQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGxpbmUpIGxpbmVzLnB1c2gobGluZSk7XG5cbiAgICByZXR1cm4gbGluZXM7XG59O1xuXG5WZWN0b3JUaWxlRmVhdHVyZS5wcm90b3R5cGUuYmJveCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBidWZmZXIgPSB0aGlzLl9idWZmZXI7XG4gICAgYnVmZmVyLnBvcyA9IHRoaXMuX2dlb21ldHJ5O1xuXG4gICAgdmFyIGJ5dGVzID0gYnVmZmVyLnJlYWRWYXJpbnQoKSxcbiAgICAgICAgZW5kID0gYnVmZmVyLnBvcyArIGJ5dGVzLFxuXG4gICAgICAgIGNtZCA9IDEsXG4gICAgICAgIGxlbmd0aCA9IDAsXG4gICAgICAgIHggPSAwLFxuICAgICAgICB5ID0gMCxcbiAgICAgICAgeDEgPSBJbmZpbml0eSxcbiAgICAgICAgeDIgPSAtSW5maW5pdHksXG4gICAgICAgIHkxID0gSW5maW5pdHksXG4gICAgICAgIHkyID0gLUluZmluaXR5O1xuXG4gICAgd2hpbGUgKGJ1ZmZlci5wb3MgPCBlbmQpIHtcbiAgICAgICAgaWYgKCFsZW5ndGgpIHtcbiAgICAgICAgICAgIHZhciBjbWRfbGVuZ3RoID0gYnVmZmVyLnJlYWRWYXJpbnQoKTtcbiAgICAgICAgICAgIGNtZCA9IGNtZF9sZW5ndGggJiAweDc7XG4gICAgICAgICAgICBsZW5ndGggPSBjbWRfbGVuZ3RoID4+IDM7XG4gICAgICAgIH1cblxuICAgICAgICBsZW5ndGgtLTtcblxuICAgICAgICBpZiAoY21kID09PSAxIHx8IGNtZCA9PT0gMikge1xuICAgICAgICAgICAgeCArPSBidWZmZXIucmVhZFNWYXJpbnQoKTtcbiAgICAgICAgICAgIHkgKz0gYnVmZmVyLnJlYWRTVmFyaW50KCk7XG4gICAgICAgICAgICBpZiAoeCA8IHgxKSB4MSA9IHg7XG4gICAgICAgICAgICBpZiAoeCA+IHgyKSB4MiA9IHg7XG4gICAgICAgICAgICBpZiAoeSA8IHkxKSB5MSA9IHk7XG4gICAgICAgICAgICBpZiAoeSA+IHkyKSB5MiA9IHk7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjbWQgIT09IDcpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigndW5rbm93biBjb21tYW5kICcgKyBjbWQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIFt4MSwgeTEsIHgyLCB5Ml07XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgVmVjdG9yVGlsZUZlYXR1cmUgPSByZXF1aXJlKCcuL3ZlY3RvcnRpbGVmZWF0dXJlLmpzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gVmVjdG9yVGlsZUxheWVyO1xuZnVuY3Rpb24gVmVjdG9yVGlsZUxheWVyKGJ1ZmZlciwgZW5kKSB7XG4gICAgLy8gUHVibGljXG4gICAgdGhpcy52ZXJzaW9uID0gMTtcbiAgICB0aGlzLm5hbWUgPSBudWxsO1xuICAgIHRoaXMuZXh0ZW50ID0gNDA5NjtcbiAgICB0aGlzLmxlbmd0aCA9IDA7XG5cbiAgICAvLyBQcml2YXRlXG4gICAgdGhpcy5fYnVmZmVyID0gYnVmZmVyO1xuICAgIHRoaXMuX2tleXMgPSBbXTtcbiAgICB0aGlzLl92YWx1ZXMgPSBbXTtcbiAgICB0aGlzLl9mZWF0dXJlcyA9IFtdO1xuXG4gICAgdmFyIHZhbCwgdGFnO1xuXG4gICAgZW5kID0gZW5kIHx8IGJ1ZmZlci5sZW5ndGg7XG5cbiAgICB3aGlsZSAoYnVmZmVyLnBvcyA8IGVuZCkge1xuICAgICAgICB2YWwgPSBidWZmZXIucmVhZFZhcmludCgpO1xuICAgICAgICB0YWcgPSB2YWwgPj4gMztcblxuICAgICAgICBpZiAodGFnID09PSAxNSkge1xuICAgICAgICAgICAgdGhpcy52ZXJzaW9uID0gYnVmZmVyLnJlYWRWYXJpbnQoKTtcbiAgICAgICAgfSBlbHNlIGlmICh0YWcgPT09IDEpIHtcbiAgICAgICAgICAgIHRoaXMubmFtZSA9IGJ1ZmZlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgIH0gZWxzZSBpZiAodGFnID09PSA1KSB7XG4gICAgICAgICAgICB0aGlzLmV4dGVudCA9IGJ1ZmZlci5yZWFkVmFyaW50KCk7XG4gICAgICAgIH0gZWxzZSBpZiAodGFnID09PSAyKSB7XG4gICAgICAgICAgICB0aGlzLmxlbmd0aCsrO1xuICAgICAgICAgICAgdGhpcy5fZmVhdHVyZXMucHVzaChidWZmZXIucG9zKTtcbiAgICAgICAgICAgIGJ1ZmZlci5za2lwKHZhbCk7XG5cbiAgICAgICAgfSBlbHNlIGlmICh0YWcgPT09IDMpIHtcbiAgICAgICAgICAgIHRoaXMuX2tleXMucHVzaChidWZmZXIucmVhZFN0cmluZygpKTtcbiAgICAgICAgfSBlbHNlIGlmICh0YWcgPT09IDQpIHtcbiAgICAgICAgICAgIHRoaXMuX3ZhbHVlcy5wdXNoKHRoaXMucmVhZEZlYXR1cmVWYWx1ZSgpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJ1ZmZlci5za2lwKHZhbCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblZlY3RvclRpbGVMYXllci5wcm90b3R5cGUucmVhZEZlYXR1cmVWYWx1ZSA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBidWZmZXIgPSB0aGlzLl9idWZmZXIsXG4gICAgICAgIHZhbHVlID0gbnVsbCxcbiAgICAgICAgYnl0ZXMgPSBidWZmZXIucmVhZFZhcmludCgpLFxuICAgICAgICBlbmQgPSBidWZmZXIucG9zICsgYnl0ZXMsXG4gICAgICAgIHZhbCwgdGFnO1xuXG4gICAgd2hpbGUgKGJ1ZmZlci5wb3MgPCBlbmQpIHtcbiAgICAgICAgdmFsID0gYnVmZmVyLnJlYWRWYXJpbnQoKTtcbiAgICAgICAgdGFnID0gdmFsID4+IDM7XG5cbiAgICAgICAgaWYgKHRhZyA9PSAxKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IGJ1ZmZlci5yZWFkU3RyaW5nKCk7XG4gICAgICAgIH0gZWxzZSBpZiAodGFnID09IDIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigncmVhZCBmbG9hdCcpO1xuICAgICAgICB9IGVsc2UgaWYgKHRhZyA9PSAzKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IGJ1ZmZlci5yZWFkRG91YmxlKCk7XG4gICAgICAgIH0gZWxzZSBpZiAodGFnID09IDQpIHtcbiAgICAgICAgICAgIHZhbHVlID0gYnVmZmVyLnJlYWRWYXJpbnQoKTtcbiAgICAgICAgfSBlbHNlIGlmICh0YWcgPT0gNSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdyZWFkIHVpbnQnKTtcbiAgICAgICAgfSBlbHNlIGlmICh0YWcgPT0gNikge1xuICAgICAgICAgICAgdmFsdWUgPSBidWZmZXIucmVhZFNWYXJpbnQoKTtcbiAgICAgICAgfSBlbHNlIGlmICh0YWcgPT0gNykge1xuICAgICAgICAgICAgdmFsdWUgPSBCb29sZWFuKGJ1ZmZlci5yZWFkVmFyaW50KCkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYnVmZmVyLnNraXAodmFsKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZTtcbn07XG5cbi8vIHJldHVybiBmZWF0dXJlIGBpYCBmcm9tIHRoaXMgbGF5ZXIgYXMgYSBgVmVjdG9yVGlsZUZlYXR1cmVgXG5WZWN0b3JUaWxlTGF5ZXIucHJvdG90eXBlLmZlYXR1cmUgPSBmdW5jdGlvbihpKSB7XG4gICAgaWYgKGkgPCAwIHx8IGkgPj0gdGhpcy5fZmVhdHVyZXMubGVuZ3RoKSB0aHJvdyBuZXcgRXJyb3IoJ2ZlYXR1cmUgaW5kZXggb3V0IG9mIGJvdW5kcycpO1xuXG4gICAgdGhpcy5fYnVmZmVyLnBvcyA9IHRoaXMuX2ZlYXR1cmVzW2ldO1xuICAgIHZhciBlbmQgPSB0aGlzLl9idWZmZXIucmVhZFZhcmludCgpICsgdGhpcy5fYnVmZmVyLnBvcztcblxuICAgIHJldHVybiBuZXcgVmVjdG9yVGlsZUZlYXR1cmUodGhpcy5fYnVmZmVyLCBlbmQsIHRoaXMuZXh0ZW50LCB0aGlzLl9rZXlzLCB0aGlzLl92YWx1ZXMpO1xufTtcbiIsIi8qKlxuICogQ3JlYXRlZCBieSBSeWFuIFdoaXRsZXksIERhbmllbCBEdWFydGUsIGFuZCBOaWNob2xhcyBIYWxsYWhhblxuICogICAgb24gNi8wMy8xNC5cbiAqL1xudmFyIFV0aWwgPSByZXF1aXJlKCcuL01WVFV0aWwnKTtcbnZhciBTdGF0aWNMYWJlbCA9IHJlcXVpcmUoJy4vU3RhdGljTGFiZWwvU3RhdGljTGFiZWwuanMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBNVlRGZWF0dXJlO1xuXG5mdW5jdGlvbiBNVlRGZWF0dXJlKG12dExheWVyLCB2dGYsIGN0eCwgaWQsIHN0eWxlKSB7XG4gIGlmICghdnRmKSByZXR1cm4gbnVsbDtcblxuICAvLyBBcHBseSBhbGwgb2YgdGhlIHByb3BlcnRpZXMgb2YgdnRmIHRvIHRoaXMgb2JqZWN0LlxuICBmb3IgKHZhciBrZXkgaW4gdnRmKSB7XG4gICAgdGhpc1trZXldID0gdnRmW2tleV07XG4gIH1cblxuICB0aGlzLm12dExheWVyID0gbXZ0TGF5ZXI7XG4gIHRoaXMubXZ0U291cmNlID0gbXZ0TGF5ZXIubXZ0U291cmNlO1xuICB0aGlzLm1hcCA9IG12dExheWVyLm12dFNvdXJjZS5tYXA7XG5cbiAgdGhpcy5pZCA9IGlkO1xuXG4gIHRoaXMubGF5ZXJMaW5rID0gdGhpcy5tdnRTb3VyY2UubGF5ZXJMaW5rO1xuICB0aGlzLnRvZ2dsZUVuYWJsZWQgPSB0cnVlO1xuICB0aGlzLnNlbGVjdGVkID0gZmFsc2U7XG5cbiAgLy8gaG93IG11Y2ggd2UgZGl2aWRlIHRoZSBjb29yZGluYXRlIGZyb20gdGhlIHZlY3RvciB0aWxlXG4gIHRoaXMuZGl2aXNvciA9IHZ0Zi5leHRlbnQgLyBjdHgudGlsZVNpemU7XG4gIHRoaXMuZXh0ZW50ID0gdnRmLmV4dGVudDtcbiAgdGhpcy50aWxlU2l6ZSA9IGN0eC50aWxlU2l6ZTtcblxuICAvL0FuIG9iamVjdCB0byBzdG9yZSB0aGUgcGF0aHMgYW5kIGNvbnRleHRzIGZvciB0aGlzIGZlYXR1cmVcbiAgdGhpcy50aWxlcyA9IHt9O1xuXG4gIHRoaXMuc3R5bGUgPSBzdHlsZTtcblxuICAvL0FkZCB0byB0aGUgY29sbGVjdGlvblxuICB0aGlzLmFkZFRpbGVGZWF0dXJlKHZ0ZiwgY3R4KTtcblxuICB2YXIgc2VsZiA9IHRoaXM7XG4gIHRoaXMubWFwLm9uKCd6b29tZW5kJywgZnVuY3Rpb24oKSB7XG4gICAgc2VsZi5zdGF0aWNMYWJlbCA9IG51bGw7XG4gIH0pO1xuXG4gIGlmIChzdHlsZSAmJiBzdHlsZS5keW5hbWljTGFiZWwgJiYgdHlwZW9mIHN0eWxlLmR5bmFtaWNMYWJlbCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHRoaXMuZHluYW1pY0xhYmVsID0gdGhpcy5tdnRTb3VyY2UuZHluYW1pY0xhYmVsLmNyZWF0ZUZlYXR1cmUodGhpcyk7XG4gIH1cblxuICBhamF4KHNlbGYpO1xufVxuXG5cbmZ1bmN0aW9uIGFqYXgoc2VsZikge1xuICB2YXIgc3R5bGUgPSBzZWxmLnN0eWxlO1xuICBpZiAoc3R5bGUgJiYgc3R5bGUuYWpheFNvdXJjZSAmJiB0eXBlb2Ygc3R5bGUuYWpheFNvdXJjZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBhamF4RW5kcG9pbnQgPSBzdHlsZS5hamF4U291cmNlKHNlbGYpO1xuICAgIGlmIChhamF4RW5kcG9pbnQpIHtcbiAgICAgIFV0aWwuZ2V0SlNPTihhamF4RW5kcG9pbnQsIGZ1bmN0aW9uKGVycm9yLCByZXNwb25zZSwgYm9keSkge1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICB0aHJvdyBbJ2FqYXhTb3VyY2UgQUpBWCBFcnJvcicsIGVycm9yXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhamF4Q2FsbGJhY2soc2VsZiwgcmVzcG9uc2UpO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBhamF4Q2FsbGJhY2soc2VsZiwgcmVzcG9uc2UpIHtcbiAgc2VsZi5hamF4RGF0YSA9IHJlc3BvbnNlO1xuXG4gIC8qKlxuICAgKiBZb3UgY2FuIGF0dGFjaCBhIGNhbGxiYWNrIGZ1bmN0aW9uIHRvIGEgZmVhdHVyZSBpbiB5b3VyIGFwcFxuICAgKiB0aGF0IHdpbGwgZ2V0IGNhbGxlZCB3aGVuZXZlciBuZXcgYWpheERhdGEgY29tZXMgaW4uIFRoaXNcbiAgICogY2FuIGJlIHVzZWQgdG8gdXBkYXRlIFVJIHRoYXQgbG9va3MgYXQgZGF0YSBmcm9tIHdpdGhpbiBhIGZlYXR1cmUuXG4gICAqXG4gICAqIHNldFN0eWxlIG1heSBwb3NzaWJseSBoYXZlIGEgc3R5bGUgd2l0aCBhIGRpZmZlcmVudCBhamF4RGF0YSBzb3VyY2UsXG4gICAqIGFuZCB5b3Ugd291bGQgcG90ZW50aWFsbHkgZ2V0IG5ldyBjb250ZXh0dWFsIGRhdGEgZm9yIHlvdXIgZmVhdHVyZS5cbiAgICpcbiAgICogVE9ETzogVGhpcyBuZWVkcyB0byBiZSBkb2N1bWVudGVkLlxuICAgKi9cbiAgaWYgKHR5cGVvZiBzZWxmLmFqYXhEYXRhUmVjZWl2ZWQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBzZWxmLmFqYXhEYXRhUmVjZWl2ZWQoc2VsZiwgcmVzcG9uc2UpO1xuICB9XG5cbiAgc2VsZi5fc2V0U3R5bGUoc2VsZi5tdnRMYXllci5zdHlsZSk7XG4gIHJlZHJhd1RpbGVzKHNlbGYpO1xufVxuXG5NVlRGZWF0dXJlLnByb3RvdHlwZS5fc2V0U3R5bGUgPSBmdW5jdGlvbihzdHlsZUZuKSB7XG4gIHRoaXMuc3R5bGUgPSBzdHlsZUZuKHRoaXMsIHRoaXMuYWpheERhdGEpO1xuXG4gIC8vIFRoZSBsYWJlbCBnZXRzIHJlbW92ZWQsIGFuZCB0aGUgKHJlKWRyYXcsXG4gIC8vIHRoYXQgaXMgaW5pdGlhdGVkIGJ5IHRoZSBNVlRMYXllciBjcmVhdGVzIGEgbmV3IGxhYmVsLlxuICB0aGlzLnJlbW92ZUxhYmVsKCk7XG59O1xuXG5NVlRGZWF0dXJlLnByb3RvdHlwZS5zZXRTdHlsZSA9IGZ1bmN0aW9uKHN0eWxlRm4pIHtcbiAgdGhpcy5hamF4RGF0YSA9IG51bGw7XG4gIHRoaXMuc3R5bGUgPSBzdHlsZUZuKHRoaXMsIG51bGwpO1xuICB2YXIgaGFzQWpheFNvdXJjZSA9IGFqYXgodGhpcyk7XG4gIGlmICghaGFzQWpheFNvdXJjZSkge1xuICAgIC8vIFRoZSBsYWJlbCBnZXRzIHJlbW92ZWQsIGFuZCB0aGUgKHJlKWRyYXcsXG4gICAgLy8gdGhhdCBpcyBpbml0aWF0ZWQgYnkgdGhlIE1WVExheWVyIGNyZWF0ZXMgYSBuZXcgbGFiZWwuXG4gICAgdGhpcy5yZW1vdmVMYWJlbCgpO1xuICB9XG59O1xuXG5NVlRGZWF0dXJlLnByb3RvdHlwZS5kcmF3ID0gZnVuY3Rpb24oY2FudmFzSUQpIHtcbiAgLy9HZXQgdGhlIGluZm8gZnJvbSB0aGUgdGlsZXMgbGlzdFxuICB2YXIgdGlsZUluZm8gPSAgdGhpcy50aWxlc1tjYW52YXNJRF07XG5cbiAgdmFyIHZ0ZiA9IHRpbGVJbmZvLnZ0ZjtcbiAgdmFyIGN0eCA9IHRpbGVJbmZvLmN0eDtcblxuICAvL0dldCB0aGUgYWN0dWFsIGNhbnZhcyBmcm9tIHRoZSBwYXJlbnQgbGF5ZXIncyBfdGlsZXMgb2JqZWN0LlxuICB2YXIgeHkgPSBjYW52YXNJRC5zcGxpdChcIjpcIikuc2xpY2UoMSwgMykuam9pbihcIjpcIik7XG4gIGN0eC5jYW52YXMgPSB0aGlzLm12dExheWVyLl90aWxlc1t4eV07XG5cbi8vICBUaGlzIGNvdWxkIGJlIHVzZWQgdG8gZGlyZWN0bHkgY29tcHV0ZSB0aGUgc3R5bGUgZnVuY3Rpb24gZnJvbSB0aGUgbGF5ZXIgb24gZXZlcnkgZHJhdy5cbi8vICBUaGlzIGlzIG11Y2ggbGVzcyBlZmZpY2llbnQuLi5cbi8vICB0aGlzLnN0eWxlID0gdGhpcy5tdnRMYXllci5zdHlsZSh0aGlzKTtcblxuICBpZiAodGhpcy5zZWxlY3RlZCkge1xuICAgIHZhciBzdHlsZSA9IHRoaXMuc3R5bGUuc2VsZWN0ZWQgfHwgdGhpcy5zdHlsZTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgc3R5bGUgPSB0aGlzLnN0eWxlO1xuICB9XG5cbiAgc3dpdGNoICh2dGYudHlwZSkge1xuICAgIGNhc2UgMTogLy9Qb2ludFxuICAgICAgdGhpcy5fZHJhd1BvaW50KGN0eCwgdnRmLmNvb3JkaW5hdGVzLCBzdHlsZSk7XG4gICAgICBpZiAoIXRoaXMuc3RhdGljTGFiZWwgJiYgdHlwZW9mIHRoaXMuc3R5bGUuc3RhdGljTGFiZWwgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgaWYgKHRoaXMuc3R5bGUuYWpheFNvdXJjZSAmJiAhdGhpcy5hamF4RGF0YSkge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2RyYXdTdGF0aWNMYWJlbChjdHgsIHZ0Zi5jb29yZGluYXRlcywgc3R5bGUpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIDI6IC8vTGluZVN0cmluZ1xuICAgICAgdGhpcy5fZHJhd0xpbmVTdHJpbmcoY3R4LCB2dGYuY29vcmRpbmF0ZXMsIHN0eWxlKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAzOiAvL1BvbHlnb25cbiAgICAgIHRoaXMuX2RyYXdQb2x5Z29uKGN0eCwgdnRmLmNvb3JkaW5hdGVzLCBzdHlsZSk7XG4gICAgICBicmVhaztcblxuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VubWFuYWdlZCB0eXBlOiAnICsgdnRmLnR5cGUpO1xuICB9XG5cbn07XG5cbk1WVEZlYXR1cmUucHJvdG90eXBlLmdldFBhdGhzRm9yVGlsZSA9IGZ1bmN0aW9uKGNhbnZhc0lEKSB7XG4gIC8vR2V0IHRoZSBpbmZvIGZyb20gdGhlIHBhcnRzIGxpc3RcbiAgcmV0dXJuIHRoaXMudGlsZXNbY2FudmFzSURdLnBhdGhzO1xufTtcblxuTVZURmVhdHVyZS5wcm90b3R5cGUuYWRkVGlsZUZlYXR1cmUgPSBmdW5jdGlvbih2dGYsIGN0eCkge1xuICAvL1N0b3JlIHRoZSBpbXBvcnRhbnQgaXRlbXMgaW4gdGhlIHRpbGVzIGxpc3RcblxuICAvL1dlIG9ubHkgd2FudCB0byBzdG9yZSBpbmZvIGZvciB0aWxlcyBmb3IgdGhlIGN1cnJlbnQgbWFwIHpvb20uICBJZiBpdCBpcyB0aWxlIGluZm8gZm9yIGFub3RoZXIgem9vbSBsZXZlbCwgaWdub3JlIGl0XG4gIC8vQWxzbywgaWYgdGhlcmUgYXJlIGV4aXN0aW5nIHRpbGVzIGluIHRoZSBsaXN0IGZvciBvdGhlciB6b29tIGxldmVscywgZXhwdW5nZSB0aGVtLlxuICB2YXIgem9vbSA9IHRoaXMubWFwLmdldFpvb20oKTtcblxuICBpZihjdHguem9vbSAhPSB6b29tKSByZXR1cm47XG5cbiAgdGhpcy5jbGVhclRpbGVGZWF0dXJlcyh6b29tKTsgLy9UT0RPOiBUaGlzIGl0ZXJhdGVzIHRocnUgYWxsIHRpbGVzIGV2ZXJ5IHRpbWUgYSBuZXcgdGlsZSBpcyBhZGRlZC4gIEZpZ3VyZSBvdXQgYSBiZXR0ZXIgd2F5IHRvIGRvIHRoaXMuXG5cbiAgdGhpcy50aWxlc1tjdHguaWRdID0ge1xuICAgIGN0eDogY3R4LFxuICAgIHZ0ZjogdnRmLFxuICAgIHBhdGhzOiBbXVxuICB9O1xuXG59O1xuXG5cbi8qKlxuICogQ2xlYXIgdGhlIGlubmVyIGxpc3Qgb2YgdGlsZSBmZWF0dXJlcyBpZiB0aGV5IGRvbid0IG1hdGNoIHRoZSBnaXZlbiB6b29tLlxuICpcbiAqIEBwYXJhbSB6b29tXG4gKi9cbk1WVEZlYXR1cmUucHJvdG90eXBlLmNsZWFyVGlsZUZlYXR1cmVzID0gZnVuY3Rpb24oem9vbSkge1xuICAvL0lmIHN0b3JlZCB0aWxlcyBleGlzdCBmb3Igb3RoZXIgem9vbSBsZXZlbHMsIGV4cHVuZ2UgdGhlbSBmcm9tIHRoZSBsaXN0LlxuICBmb3IgKHZhciBrZXkgaW4gdGhpcy50aWxlcykge1xuICAgICBpZihrZXkuc3BsaXQoXCI6XCIpWzBdICE9IHpvb20pIGRlbGV0ZSB0aGlzLnRpbGVzW2tleV07XG4gIH1cbn07XG5cbi8qKlxuICogUmVkcmF3cyBhbGwgb2YgdGhlIHRpbGVzIGFzc29jaWF0ZWQgd2l0aCBhIGZlYXR1cmUuIFVzZWZ1bCBmb3JcbiAqIHN0eWxlIGNoYW5nZSBhbmQgdG9nZ2xpbmcuXG4gKlxuICogQHBhcmFtIHNlbGZcbiAqL1xuZnVuY3Rpb24gcmVkcmF3VGlsZXMoc2VsZikge1xuICAvL1JlZHJhdyB0aGUgd2hvbGUgdGlsZSwgbm90IGp1c3QgdGhpcyB2dGZcbiAgdmFyIHRpbGVzID0gc2VsZi50aWxlcztcbiAgdmFyIG12dExheWVyID0gc2VsZi5tdnRMYXllcjtcblxuICBmb3IgKHZhciBpZCBpbiB0aWxlcykge1xuICAgIHZhciB0aWxlWm9vbSA9IHBhcnNlSW50KGlkLnNwbGl0KCc6JylbMF0pO1xuICAgIHZhciBtYXBab29tID0gc2VsZi5tYXAuZ2V0Wm9vbSgpO1xuICAgIGlmICh0aWxlWm9vbSA9PT0gbWFwWm9vbSkge1xuICAgICAgLy9SZWRyYXcgdGhlIHRpbGVcbiAgICAgIG12dExheWVyLnJlZHJhd1RpbGUoaWQpO1xuICAgIH1cbiAgfVxufVxuXG5NVlRGZWF0dXJlLnByb3RvdHlwZS50b2dnbGUgPSBmdW5jdGlvbigpIHtcbiAgaWYgKHRoaXMuc2VsZWN0ZWQpIHtcbiAgICB0aGlzLmRlc2VsZWN0KCk7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5zZWxlY3QoKTtcbiAgfVxufTtcblxuTVZURmVhdHVyZS5wcm90b3R5cGUuc2VsZWN0ID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuc2VsZWN0ZWQgPSB0cnVlO1xuICB0aGlzLm12dFNvdXJjZS5mZWF0dXJlU2VsZWN0ZWQodGhpcyk7XG4gIHJlZHJhd1RpbGVzKHRoaXMpO1xuICB2YXIgbGlua2VkRmVhdHVyZSA9IHRoaXMubGlua2VkRmVhdHVyZSgpO1xuICBpZiAobGlua2VkRmVhdHVyZSAmJiBsaW5rZWRGZWF0dXJlLnN0YXRpY0xhYmVsICYmICFsaW5rZWRGZWF0dXJlLnN0YXRpY0xhYmVsLnNlbGVjdGVkKSB7XG4gICAgbGlua2VkRmVhdHVyZS5zdGF0aWNMYWJlbC5zZWxlY3QoKTtcbiAgfVxufTtcblxuTVZURmVhdHVyZS5wcm90b3R5cGUuZGVzZWxlY3QgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5zZWxlY3RlZCA9IGZhbHNlO1xuICB0aGlzLm12dFNvdXJjZS5mZWF0dXJlRGVzZWxlY3RlZCh0aGlzKTtcbiAgcmVkcmF3VGlsZXModGhpcyk7XG4gIHZhciBsaW5rZWRGZWF0dXJlID0gdGhpcy5saW5rZWRGZWF0dXJlKCk7XG4gIGlmIChsaW5rZWRGZWF0dXJlICYmIGxpbmtlZEZlYXR1cmUuc3RhdGljTGFiZWwgJiYgbGlua2VkRmVhdHVyZS5zdGF0aWNMYWJlbC5zZWxlY3RlZCkge1xuICAgIGxpbmtlZEZlYXR1cmUuc3RhdGljTGFiZWwuZGVzZWxlY3QoKTtcbiAgfVxufTtcblxuTVZURmVhdHVyZS5wcm90b3R5cGUub24gPSBmdW5jdGlvbihldmVudFR5cGUsIGNhbGxiYWNrKSB7XG4gIHRoaXMuX2V2ZW50SGFuZGxlcnNbZXZlbnRUeXBlXSA9IGNhbGxiYWNrO1xufTtcblxuTVZURmVhdHVyZS5wcm90b3R5cGUuX2RyYXdQb2ludCA9IGZ1bmN0aW9uKGN0eCwgY29vcmRzQXJyYXksIHN0eWxlKSB7XG4gIGlmICghc3R5bGUpIHJldHVybjtcbiAgaWYgKCFjdHggfHwgIWN0eC5jYW52YXMpIHJldHVybjtcblxuICB2YXIgdGlsZSA9IHRoaXMudGlsZXNbY3R4LmlkXTtcblxuICAvL0dldCByYWRpdXNcbiAgdmFyIHJhZGl1cyA9IDE7XG4gIGlmICh0eXBlb2Ygc3R5bGUucmFkaXVzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmFkaXVzID0gc3R5bGUucmFkaXVzKGN0eC56b29tKTsgLy9BbGxvd3MgZm9yIHNjYWxlIGRlcGVuZGVudCByZWRuZXJpbmdcbiAgfVxuICBlbHNle1xuICAgIHJhZGl1cyA9IHN0eWxlLnJhZGl1cztcbiAgfVxuXG4gIHZhciBwID0gdGhpcy5fdGlsZVBvaW50KGNvb3Jkc0FycmF5WzBdWzBdKTtcbiAgdmFyIGMgPSBjdHguY2FudmFzO1xuICB2YXIgY3R4MmQ7XG4gIHRyeXtcbiAgICBjdHgyZCA9IGMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgfVxuICBjYXRjaChlKXtcbiAgICBjb25zb2xlLmxvZyhcIl9kcmF3UG9pbnQgZXJyb3I6IFwiICsgZSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY3R4MmQuYmVnaW5QYXRoKCk7XG4gIGN0eDJkLmZpbGxTdHlsZSA9IHN0eWxlLmNvbG9yO1xuICBjdHgyZC5hcmMocC54LCBwLnksIHJhZGl1cywgMCwgTWF0aC5QSSAqIDIpO1xuICBjdHgyZC5jbG9zZVBhdGgoKTtcbiAgY3R4MmQuZmlsbCgpO1xuXG4gIGlmKHN0eWxlLmxpbmVXaWR0aCAmJiBzdHlsZS5zdHJva2VTdHlsZSl7XG4gICAgY3R4MmQubGluZVdpZHRoID0gc3R5bGUubGluZVdpZHRoO1xuICAgIGN0eDJkLnN0cm9rZVN0eWxlID0gc3R5bGUuc3Ryb2tlU3R5bGU7XG4gICAgY3R4MmQuc3Ryb2tlKCk7XG4gIH1cblxuICBjdHgyZC5yZXN0b3JlKCk7XG4gIHRpbGUucGF0aHMucHVzaChbcF0pO1xufTtcblxuTVZURmVhdHVyZS5wcm90b3R5cGUuX2RyYXdMaW5lU3RyaW5nID0gZnVuY3Rpb24oY3R4LCBjb29yZHNBcnJheSwgc3R5bGUpIHtcbiAgaWYgKCFzdHlsZSkgcmV0dXJuO1xuICBpZiAoIWN0eCB8fCAhY3R4LmNhbnZhcykgcmV0dXJuO1xuXG4gIHZhciBjdHgyZCA9IGN0eC5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgY3R4MmQuc3Ryb2tlU3R5bGUgPSBzdHlsZS5jb2xvcjtcbiAgY3R4MmQubGluZVdpZHRoID0gc3R5bGUuc2l6ZTtcbiAgY3R4MmQuYmVnaW5QYXRoKCk7XG5cbiAgdmFyIHByb2pDb29yZHMgPSBbXTtcbiAgdmFyIHRpbGUgPSB0aGlzLnRpbGVzW2N0eC5pZF07XG5cbiAgZm9yICh2YXIgZ2lkeCBpbiBjb29yZHNBcnJheSkge1xuICAgIHZhciBjb29yZHMgPSBjb29yZHNBcnJheVtnaWR4XTtcblxuICAgIGZvciAoaSA9IDA7IGkgPCBjb29yZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBtZXRob2QgPSAoaSA9PT0gMCA/ICdtb3ZlJyA6ICdsaW5lJykgKyAnVG8nO1xuICAgICAgdmFyIHByb2ogPSB0aGlzLl90aWxlUG9pbnQoY29vcmRzW2ldKTtcbiAgICAgIHByb2pDb29yZHMucHVzaChwcm9qKTtcbiAgICAgIGN0eDJkW21ldGhvZF0ocHJvai54LCBwcm9qLnkpO1xuICAgIH1cbiAgfVxuXG4gIGN0eDJkLnN0cm9rZSgpO1xuICBjdHgyZC5yZXN0b3JlKCk7XG5cbiAgdGlsZS5wYXRocy5wdXNoKHByb2pDb29yZHMpO1xufTtcblxuTVZURmVhdHVyZS5wcm90b3R5cGUuX2RyYXdQb2x5Z29uID0gZnVuY3Rpb24oY3R4LCBjb29yZHNBcnJheSwgc3R5bGUpIHtcbiAgaWYgKCFzdHlsZSkgcmV0dXJuO1xuICBpZiAoIWN0eCB8fCAhY3R4LmNhbnZhcykgcmV0dXJuO1xuXG4gIHZhciBjdHgyZCA9IGN0eC5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgdmFyIG91dGxpbmUgPSBzdHlsZS5vdXRsaW5lO1xuXG4gIC8vIGNvbG9yIG1heSBiZSBkZWZpbmVkIHZpYSBmdW5jdGlvbiB0byBtYWtlIGNob3JvcGxldGggd29yayByaWdodFxuICBpZiAodHlwZW9mIHN0eWxlLmNvbG9yID09PSAnZnVuY3Rpb24nKSB7XG4gICAgY3R4MmQuZmlsbFN0eWxlID0gc3R5bGUuY29sb3IoY3R4MmQpO1xuICB9IGVsc2Uge1xuICAgIGN0eDJkLmZpbGxTdHlsZSA9IHN0eWxlLmNvbG9yO1xuICB9XG5cbiAgaWYgKG91dGxpbmUpIHtcbiAgICBjdHgyZC5zdHJva2VTdHlsZSA9IG91dGxpbmUuY29sb3I7XG4gICAgY3R4MmQubGluZVdpZHRoID0gb3V0bGluZS5zaXplO1xuICB9XG4gIGN0eDJkLmJlZ2luUGF0aCgpO1xuXG4gIHZhciBwcm9qQ29vcmRzID0gW107XG4gIHZhciB0aWxlID0gdGhpcy50aWxlc1tjdHguaWRdO1xuXG4gIHZhciBmZWF0dXJlTGFiZWwgPSB0aGlzLmR5bmFtaWNMYWJlbDtcbiAgaWYgKGZlYXR1cmVMYWJlbCkge1xuICAgIGZlYXR1cmVMYWJlbC5hZGRUaWxlUG9seXMoY3R4LCBjb29yZHNBcnJheSk7XG4gIH1cblxuICBmb3IgKHZhciBnaWR4ID0gMCwgbGVuID0gY29vcmRzQXJyYXkubGVuZ3RoOyBnaWR4IDwgbGVuOyBnaWR4KyspIHtcbiAgICB2YXIgY29vcmRzID0gY29vcmRzQXJyYXlbZ2lkeF07XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvb3Jkcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGNvb3JkID0gY29vcmRzW2ldO1xuICAgICAgdmFyIG1ldGhvZCA9IChpID09PSAwID8gJ21vdmUnIDogJ2xpbmUnKSArICdUbyc7XG4gICAgICB2YXIgcHJvaiA9IHRoaXMuX3RpbGVQb2ludChjb29yZHNbaV0pO1xuICAgICAgcHJvakNvb3Jkcy5wdXNoKHByb2opO1xuICAgICAgY3R4MmRbbWV0aG9kXShwcm9qLngsIHByb2oueSk7XG4gICAgfVxuICB9XG5cbiAgY3R4MmQuY2xvc2VQYXRoKCk7XG4gIGN0eDJkLmZpbGwoKTtcbiAgaWYgKG91dGxpbmUpIHtcbiAgICBjdHgyZC5zdHJva2UoKTtcbiAgfVxuXG4gIHRpbGUucGF0aHMucHVzaChwcm9qQ29vcmRzKTtcblxufTtcblxuTVZURmVhdHVyZS5wcm90b3R5cGUuX2RyYXdTdGF0aWNMYWJlbCA9IGZ1bmN0aW9uKGN0eCwgY29vcmRzQXJyYXksIHN0eWxlKSB7XG4gIGlmICghc3R5bGUpIHJldHVybjtcbiAgaWYgKCFjdHgpIHJldHVybjtcblxuICAvLyBJZiB0aGUgY29ycmVzcG9uZGluZyBsYXllciBpcyBub3Qgb24gdGhlIG1hcCwgXG4gIC8vIHdlIGRvbnQgd2FudCB0byBwdXQgb24gYSBsYWJlbC5cbiAgaWYgKCF0aGlzLm12dExheWVyLl9tYXApIHJldHVybjtcblxuICB2YXIgdmVjUHQgPSB0aGlzLl90aWxlUG9pbnQoY29vcmRzQXJyYXlbMF1bMF0pO1xuXG4gIC8vIFdlJ3JlIG1ha2luZyBhIHN0YW5kYXJkIExlYWZsZXQgTWFya2VyIGZvciB0aGlzIGxhYmVsLlxuICB2YXIgcCA9IHRoaXMuX3Byb2plY3QodmVjUHQsIGN0eC50aWxlLngsIGN0eC50aWxlLnksIHRoaXMuZXh0ZW50LCB0aGlzLnRpbGVTaXplKTsgLy92ZWN0aWxlIHB0IHRvIG1lcmMgcHRcbiAgdmFyIG1lcmNQdCA9IEwucG9pbnQocC54LCBwLnkpOyAvLyBtYWtlIGludG8gbGVhZmxldCBvYmpcbiAgdmFyIGxhdExuZyA9IHRoaXMubWFwLnVucHJvamVjdChtZXJjUHQpOyAvLyBtZXJjIHB0IHRvIGxhdGxuZ1xuXG4gIHRoaXMuc3RhdGljTGFiZWwgPSBuZXcgU3RhdGljTGFiZWwodGhpcywgY3R4LCBsYXRMbmcsIHN0eWxlKTtcbiAgdGhpcy5tdnRMYXllci5mZWF0dXJlV2l0aExhYmVsQWRkZWQodGhpcyk7XG59O1xuXG5NVlRGZWF0dXJlLnByb3RvdHlwZS5yZW1vdmVMYWJlbCA9IGZ1bmN0aW9uKCkge1xuICBpZiAoIXRoaXMuc3RhdGljTGFiZWwpIHJldHVybjtcbiAgdGhpcy5zdGF0aWNMYWJlbC5yZW1vdmUoKTtcbiAgdGhpcy5zdGF0aWNMYWJlbCA9IG51bGw7XG59O1xuXG4vKipcbiAqIFByb2plY3RzIGEgdmVjdG9yIHRpbGUgcG9pbnQgdG8gdGhlIFNwaGVyaWNhbCBNZXJjYXRvciBwaXhlbCBzcGFjZSBmb3IgYSBnaXZlbiB6b29tIGxldmVsLlxuICpcbiAqIEBwYXJhbSB2ZWNQdFxuICogQHBhcmFtIHRpbGVYXG4gKiBAcGFyYW0gdGlsZVlcbiAqIEBwYXJhbSBleHRlbnRcbiAqIEBwYXJhbSB0aWxlU2l6ZVxuICovXG5NVlRGZWF0dXJlLnByb3RvdHlwZS5fcHJvamVjdCA9IGZ1bmN0aW9uKHZlY1B0LCB0aWxlWCwgdGlsZVksIGV4dGVudCwgdGlsZVNpemUpIHtcbiAgdmFyIHhPZmZzZXQgPSB0aWxlWCAqIHRpbGVTaXplO1xuICB2YXIgeU9mZnNldCA9IHRpbGVZICogdGlsZVNpemU7XG4gIHJldHVybiB7XG4gICAgeDogTWF0aC5mbG9vcih2ZWNQdC54ICsgeE9mZnNldCksXG4gICAgeTogTWF0aC5mbG9vcih2ZWNQdC55ICsgeU9mZnNldClcbiAgfTtcbn07XG5cbi8qKlxuICogVGFrZXMgYSBjb29yZGluYXRlIGZyb20gYSB2ZWN0b3IgdGlsZSBhbmQgdHVybnMgaXQgaW50byBhIExlYWZsZXQgUG9pbnQuXG4gKlxuICogQHBhcmFtIGN0eFxuICogQHBhcmFtIGNvb3Jkc1xuICogQHJldHVybnMge2VHZW9tVHlwZS5Qb2ludH1cbiAqIEBwcml2YXRlXG4gKi9cbk1WVEZlYXR1cmUucHJvdG90eXBlLl90aWxlUG9pbnQgPSBmdW5jdGlvbihjb29yZHMpIHtcbiAgcmV0dXJuIG5ldyBMLlBvaW50KGNvb3Jkcy54IC8gdGhpcy5kaXZpc29yLCBjb29yZHMueSAvIHRoaXMuZGl2aXNvcik7XG59O1xuXG5NVlRGZWF0dXJlLnByb3RvdHlwZS5saW5rZWRGZWF0dXJlID0gZnVuY3Rpb24oKSB7XG4gIHZhciBsaW5rZWRMYXllciA9IHRoaXMubXZ0TGF5ZXIubGlua2VkTGF5ZXIoKTtcbiAgaWYobGlua2VkTGF5ZXIpe1xuICAgIHZhciBsaW5rZWRGZWF0dXJlID0gbGlua2VkTGF5ZXIuZmVhdHVyZXNbdGhpcy5pZF07XG4gICAgcmV0dXJuIGxpbmtlZEZlYXR1cmU7XG4gIH1lbHNle1xuICAgIHJldHVybiBudWxsO1xuICB9XG59O1xuXG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgUnlhbiBXaGl0bGV5IG9uIDUvMTcvMTQuXG4gKi9cbi8qKiBGb3JrZWQgZnJvbSBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9ER3VpZGkvMTcxNjAxMCAqKi9cbnZhciBNVlRGZWF0dXJlID0gcmVxdWlyZSgnLi9NVlRGZWF0dXJlJyk7XG52YXIgVXRpbCA9IHJlcXVpcmUoJy4vTVZUVXRpbCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEwuVGlsZUxheWVyLkNhbnZhcy5leHRlbmQoe1xuXG4gIG9wdGlvbnM6IHtcbiAgICBkZWJ1ZzogZmFsc2UsXG4gICAgaXNIaWRkZW5MYXllcjogZmFsc2UsXG4gICAgZ2V0SURGb3JMYXllckZlYXR1cmU6IGZ1bmN0aW9uKCkge30sXG4gICAgdGlsZVNpemU6IDI1NixcbiAgICBsaW5lQ2xpY2tUb2xlcmFuY2U6IDJcbiAgfSxcblxuICBfZmVhdHVyZUlzQ2xpY2tlZDoge30sXG5cbiAgX2lzUG9pbnRJblBvbHk6IGZ1bmN0aW9uKHB0LCBwb2x5KSB7XG4gICAgaWYocG9seSAmJiBwb2x5Lmxlbmd0aCkge1xuICAgICAgZm9yICh2YXIgYyA9IGZhbHNlLCBpID0gLTEsIGwgPSBwb2x5Lmxlbmd0aCwgaiA9IGwgLSAxOyArK2kgPCBsOyBqID0gaSlcbiAgICAgICAgKChwb2x5W2ldLnkgPD0gcHQueSAmJiBwdC55IDwgcG9seVtqXS55KSB8fCAocG9seVtqXS55IDw9IHB0LnkgJiYgcHQueSA8IHBvbHlbaV0ueSkpXG4gICAgICAgICYmIChwdC54IDwgKHBvbHlbal0ueCAtIHBvbHlbaV0ueCkgKiAocHQueSAtIHBvbHlbaV0ueSkgLyAocG9seVtqXS55IC0gcG9seVtpXS55KSArIHBvbHlbaV0ueClcbiAgICAgICAgJiYgKGMgPSAhYyk7XG4gICAgICByZXR1cm4gYztcbiAgICB9XG4gIH0sXG5cbiAgX2dldERpc3RhbmNlRnJvbUxpbmU6IGZ1bmN0aW9uKHB0LCBwdHMpIHtcbiAgICB2YXIgbWluID0gTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZO1xuICAgIGlmIChwdHMgJiYgcHRzLmxlbmd0aCA+IDEpIHtcbiAgICAgIHB0ID0gTC5wb2ludChwdC54LCBwdC55KTtcbiAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gcHRzLmxlbmd0aCAtIDE7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgdmFyIHRlc3QgPSB0aGlzLl9wcm9qZWN0UG9pbnRPbkxpbmVTZWdtZW50KHB0LCBwdHNbaV0sIHB0c1tpICsgMV0pO1xuICAgICAgICBpZiAodGVzdC5kaXN0YW5jZSA8PSBtaW4pIHtcbiAgICAgICAgICBtaW4gPSB0ZXN0LmRpc3RhbmNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBtaW47XG4gIH0sXG5cbiAgX3Byb2plY3RQb2ludE9uTGluZVNlZ21lbnQ6IGZ1bmN0aW9uKHAsIHIwLCByMSkge1xuICAgIHZhciBsaW5lTGVuZ3RoID0gcjAuZGlzdGFuY2VUbyhyMSk7XG4gICAgaWYgKGxpbmVMZW5ndGggPCAxKSB7XG4gICAgICAgIHJldHVybiB7ZGlzdGFuY2U6IHAuZGlzdGFuY2VUbyhyMCksIGNvb3JkaW5hdGU6IHIwfTtcbiAgICB9XG4gICAgdmFyIHUgPSAoKHAueCAtIHIwLngpICogKHIxLnggLSByMC54KSArIChwLnkgLSByMC55KSAqIChyMS55IC0gcjAueSkpIC8gTWF0aC5wb3cobGluZUxlbmd0aCwgMik7XG4gICAgaWYgKHUgPCAwLjAwMDAwMDEpIHtcbiAgICAgICAgcmV0dXJuIHtkaXN0YW5jZTogcC5kaXN0YW5jZVRvKHIwKSwgY29vcmRpbmF0ZTogcjB9O1xuICAgIH1cbiAgICBpZiAodSA+IDAuOTk5OTk5OSkge1xuICAgICAgICByZXR1cm4ge2Rpc3RhbmNlOiBwLmRpc3RhbmNlVG8ocjEpLCBjb29yZGluYXRlOiByMX07XG4gICAgfVxuICAgIHZhciBhID0gTC5wb2ludChyMC54ICsgdSAqIChyMS54IC0gcjAueCksIHIwLnkgKyB1ICogKHIxLnkgLSByMC55KSk7XG4gICAgcmV0dXJuIHtkaXN0YW5jZTogcC5kaXN0YW5jZVRvKGEpLCBwb2ludDogYX07XG4gIH0sXG5cbiAgaW5pdGlhbGl6ZTogZnVuY3Rpb24obXZ0U291cmNlLCBvcHRpb25zKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHNlbGYubXZ0U291cmNlID0gbXZ0U291cmNlO1xuICAgIEwuVXRpbC5zZXRPcHRpb25zKHRoaXMsIG9wdGlvbnMpO1xuXG4gICAgdGhpcy5zdHlsZSA9IG9wdGlvbnMuc3R5bGU7XG4gICAgdGhpcy5uYW1lID0gb3B0aW9ucy5uYW1lO1xuICAgIHRoaXMuX2NhbnZhc0lEVG9GZWF0dXJlcyA9IHt9O1xuICAgIHRoaXMuZmVhdHVyZXMgPSB7fTtcbiAgICB0aGlzLmZlYXR1cmVzV2l0aExhYmVscyA9IFtdO1xuICAgIHRoaXMuX2hpZ2hlc3RDb3VudCA9IDA7XG4gICAgdGhpcy5sZWdlbmRPYmplY3QgPSB7fTtcbiAgfSxcblxuICBvbkFkZDogZnVuY3Rpb24obWFwKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHNlbGYubWFwID0gbWFwO1xuICAgIEwuVGlsZUxheWVyLkNhbnZhcy5wcm90b3R5cGUub25BZGQuY2FsbCh0aGlzLCBtYXApO1xuICAgIG1hcC5vbignbGF5ZXJyZW1vdmUnLCBmdW5jdGlvbihlKSB7XG4gICAgICAvLyB3ZSBvbmx5IHdhbnQgdG8gZG8gc3R1ZmYgd2hlbiB0aGUgbGF5ZXJyZW1vdmUgZXZlbnQgaXMgb24gdGhpcyBsYXllclxuICAgICAgaWYgKGUubGF5ZXIuX2xlYWZsZXRfaWQgPT09IHNlbGYuX2xlYWZsZXRfaWQpIHtcbiAgICAgICAgcmVtb3ZlTGFiZWxzKHNlbGYpO1xuICAgICAgfVxuICAgIH0pO1xuICB9LFxuXG4gIGRyYXdUaWxlOiBmdW5jdGlvbihjYW52YXMsIHRpbGVQb2ludCwgem9vbSkge1xuXG4gICAgdmFyIGN0eCA9IHtcbiAgICAgIGNhbnZhczogY2FudmFzLFxuICAgICAgdGlsZTogdGlsZVBvaW50LFxuICAgICAgem9vbTogem9vbSxcbiAgICAgIHRpbGVTaXplOiB0aGlzLm9wdGlvbnMudGlsZVNpemVcbiAgICB9O1xuXG4gICAgY3R4LmlkID0gVXRpbC5nZXRDb250ZXh0SUQoY3R4KTtcblxuICAgIGlmICghdGhpcy5fY2FudmFzSURUb0ZlYXR1cmVzW2N0eC5pZF0pIHtcbiAgICAgIHRoaXMuX2luaXRpYWxpemVGZWF0dXJlc0hhc2goY3R4KTtcbiAgICB9XG4gICAgaWYgKCF0aGlzLmZlYXR1cmVzKSB7XG4gICAgICB0aGlzLmZlYXR1cmVzID0ge307XG4gICAgfVxuXG4gIH0sXG5cbiAgX2luaXRpYWxpemVGZWF0dXJlc0hhc2g6IGZ1bmN0aW9uKGN0eCl7XG4gICAgdGhpcy5fY2FudmFzSURUb0ZlYXR1cmVzW2N0eC5pZF0gPSB7fTtcbiAgICB0aGlzLl9jYW52YXNJRFRvRmVhdHVyZXNbY3R4LmlkXS5mZWF0dXJlcyA9IFtdO1xuICAgIHRoaXMuX2NhbnZhc0lEVG9GZWF0dXJlc1tjdHguaWRdLmNhbnZhcyA9IGN0eC5jYW52YXM7XG4gIH0sXG5cbiAgX2RyYXc6IGZ1bmN0aW9uKGN0eCkge1xuICAgIC8vRHJhdyBpcyBoYW5kbGVkIGJ5IHRoZSBwYXJlbnQgTVZUU291cmNlIG9iamVjdFxuICB9LFxuICBnZXRDYW52YXM6IGZ1bmN0aW9uKHBhcmVudEN0eCl7XG4gICAgLy9UaGlzIGdldHMgY2FsbGVkIGlmIGEgdmVjdG9yIHRpbGUgZmVhdHVyZSBoYXMgYWxyZWFkeSBiZWVuIHBhcnNlZC5cbiAgICAvL1dlJ3ZlIGFscmVhZHkgZ290IHRoZSBnZW9tLCBqdXN0IGdldCBvbiB3aXRoIHRoZSBkcmF3aW5nLlxuICAgIC8vTmVlZCBhIHdheSB0byBwbHVjayBhIGNhbnZhcyBlbGVtZW50IGZyb20gdGhpcyBsYXllciBnaXZlbiB0aGUgcGFyZW50IGxheWVyJ3MgaWQuXG4gICAgLy9XYWl0IGZvciBpdCB0byBnZXQgbG9hZGVkIGJlZm9yZSBwcm9jZWVkaW5nLlxuICAgIHZhciB0aWxlUG9pbnQgPSBwYXJlbnRDdHgudGlsZTtcbiAgICB2YXIgY3R4ID0gdGhpcy5fdGlsZXNbdGlsZVBvaW50LnggKyBcIjpcIiArIHRpbGVQb2ludC55XTtcblxuICAgIGlmKGN0eCl7XG4gICAgICBwYXJlbnRDdHguY2FudmFzID0gY3R4O1xuICAgICAgdGhpcy5yZWRyYXdUaWxlKHBhcmVudEN0eC5pZCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgLy9UaGlzIGlzIGEgdGltZXIgdGhhdCB3aWxsIHdhaXQgZm9yIGEgY3JpdGVyaW9uIHRvIHJldHVybiB0cnVlLlxuICAgIC8vSWYgbm90IHRydWUgd2l0aGluIHRoZSB0aW1lb3V0IGR1cmF0aW9uLCBpdCB3aWxsIG1vdmUgb24uXG4gICAgd2FpdEZvcihmdW5jdGlvbiAoKSB7XG4gICAgICAgIGN0eCA9IHNlbGYuX3RpbGVzW3RpbGVQb2ludC54ICsgXCI6XCIgKyB0aWxlUG9pbnQueV07XG4gICAgICAgIGlmKGN0eCkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZnVuY3Rpb24oKXtcbiAgICAgICAgLy9XaGVuIGl0IGZpbmlzaGVzLCBkbyB0aGlzLlxuICAgICAgICBjdHggPSBzZWxmLl90aWxlc1t0aWxlUG9pbnQueCArIFwiOlwiICsgdGlsZVBvaW50LnldO1xuICAgICAgICBwYXJlbnRDdHguY2FudmFzID0gY3R4O1xuICAgICAgICBzZWxmLnJlZHJhd1RpbGUocGFyZW50Q3R4LmlkKTtcblxuICAgICAgfSwgLy93aGVuIGRvbmUsIGdvIHRvIG5leHQgZmxvd1xuICAgICAgMjAwMCk7IC8vVGhlIFRpbWVvdXQgbWlsbGlzZWNvbmRzLiAgQWZ0ZXIgdGhpcywgZ2l2ZSB1cCBhbmQgbW92ZSBvblxuXG4gIH0sXG5cbiAgcGFyc2VWZWN0b3JUaWxlTGF5ZXI6IGZ1bmN0aW9uKHZ0bCwgY3R4KSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHZhciB0aWxlUG9pbnQgPSBjdHgudGlsZTtcbiAgICB2YXIgbGF5ZXJDdHggID0geyBjYW52YXM6IG51bGwsIGlkOiBjdHguaWQsIHRpbGU6IGN0eC50aWxlLCB6b29tOiBjdHguem9vbSwgdGlsZVNpemU6IGN0eC50aWxlU2l6ZX07XG5cbiAgICAvL1NlZSBpZiB3ZSBjYW4gcGx1Y2sgdGhlIGNoaWxkIHRpbGUgZnJvbSB0aGlzIFBCRiB0aWxlIGxheWVyIGJhc2VkIG9uIHRoZSBtYXN0ZXIgbGF5ZXIncyB0aWxlIGlkLlxuICAgIGxheWVyQ3R4LmNhbnZhcyA9IHNlbGYuX3RpbGVzW3RpbGVQb2ludC54ICsgXCI6XCIgKyB0aWxlUG9pbnQueV07XG5cblxuXG4gICAgLy9Jbml0aWFsaXplIHRoaXMgdGlsZSdzIGZlYXR1cmUgc3RvcmFnZSBoYXNoLCBpZiBpdCBoYXNuJ3QgYWxyZWFkeSBiZWVuIGNyZWF0ZWQuXG4gICAgLy8gVXNlZCBmb3Igd2hlbiBmaWx0ZXJzIGFyZSB1cGRhdGVkLCBhbmQgZmVhdHVyZXMgYXJlIGNsZWFyZWQgdG8gcHJlcGFyZSBmb3IgYSBmcmVzaCByZWRyYXcuXG4gICAgaWYgKCF0aGlzLl9jYW52YXNJRFRvRmVhdHVyZXNbbGF5ZXJDdHguaWRdKSB7XG4gICAgICB0aGlzLl9pbml0aWFsaXplRmVhdHVyZXNIYXNoKGxheWVyQ3R4KTtcbiAgICB9ZWxzZXtcbiAgICAgIC8vQ2xlYXIgdGhpcyB0aWxlJ3MgcHJldmlvdXNseSBzYXZlZCBmZWF0dXJlcy5cbiAgICAgIHRoaXMuY2xlYXJUaWxlRmVhdHVyZUhhc2gobGF5ZXJDdHguaWQpO1xuICAgIH1cblxuICAgIHZhciBmZWF0dXJlcyA9IHZ0bC5wYXJzZWRGZWF0dXJlcztcbiAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gZmVhdHVyZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIHZhciB2dGYgPSBmZWF0dXJlc1tpXTsgLy92ZWN0b3IgdGlsZSBmZWF0dXJlXG4gICAgICB2dGYubGF5ZXIgPSB2dGw7XG5cbiAgICAgIC8qKlxuICAgICAgICogQXBwbHkgZmlsdGVyIG9uIGZlYXR1cmUgaWYgdGhlcmUgaXMgb25lLiBEZWZpbmVkIGluIHRoZSBvcHRpb25zIG9iamVjdFxuICAgICAgICogb2YgVGlsZUxheWVyLk1WVFNvdXJjZS5qc1xuICAgICAgICovXG4gICAgICB2YXIgZmlsdGVyID0gc2VsZi5vcHRpb25zLmZpbHRlcjtcbiAgICAgIGlmICh0eXBlb2YgZmlsdGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGlmICggZmlsdGVyKHZ0ZiwgbGF5ZXJDdHgpID09PSBmYWxzZSApIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICB2YXIgZ2V0SURGb3JMYXllckZlYXR1cmU7XG4gICAgICBpZiAodHlwZW9mIHNlbGYub3B0aW9ucy5nZXRJREZvckxheWVyRmVhdHVyZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBnZXRJREZvckxheWVyRmVhdHVyZSA9IHNlbGYub3B0aW9ucy5nZXRJREZvckxheWVyRmVhdHVyZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGdldElERm9yTGF5ZXJGZWF0dXJlID0gVXRpbC5nZXRJREZvckxheWVyRmVhdHVyZTtcbiAgICAgIH1cbiAgICAgIHZhciB1bmlxdWVJRCA9IHNlbGYub3B0aW9ucy5nZXRJREZvckxheWVyRmVhdHVyZSh2dGYpIHx8IGk7XG4gICAgICB2YXIgbXZ0RmVhdHVyZSA9IHNlbGYuZmVhdHVyZXNbdW5pcXVlSURdO1xuXG4gICAgICAvKipcbiAgICAgICAqIFVzZSBsYXllck9yZGVyaW5nIGZ1bmN0aW9uIHRvIGFwcGx5IGEgekluZGV4IHByb3BlcnR5IHRvIGVhY2ggdnRmLiAgVGhpcyBpcyBkZWZpbmVkIGluXG4gICAgICAgKiBUaWxlTGF5ZXIuTVZUU291cmNlLmpzLiAgVXNlZCBiZWxvdyB0byBzb3J0IGZlYXR1cmVzLm5wbVxuICAgICAgICovXG4gICAgICB2YXIgbGF5ZXJPcmRlcmluZyA9IHNlbGYub3B0aW9ucy5sYXllck9yZGVyaW5nO1xuICAgICAgaWYgKHR5cGVvZiBsYXllck9yZGVyaW5nID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGxheWVyT3JkZXJpbmcodnRmLCBsYXllckN0eCk7IC8vQXBwbGllcyBhIGN1c3RvbSBwcm9wZXJ0eSB0byB0aGUgZmVhdHVyZSwgd2hpY2ggaXMgdXNlZCBhZnRlciB3ZSdyZSB0aHJ1IGl0ZXJhdGluZyB0byBzb3J0XG4gICAgICB9XG5cbiAgICAgIC8vQ3JlYXRlIGEgbmV3IE1WVEZlYXR1cmUgaWYgb25lIGRvZXNuJ3QgYWxyZWFkeSBleGlzdCBmb3IgdGhpcyBmZWF0dXJlLlxuICAgICAgaWYgKCFtdnRGZWF0dXJlKSB7XG4gICAgICAgIC8vR2V0IGEgc3R5bGUgZm9yIHRoZSBmZWF0dXJlIC0gc2V0IGl0IGp1c3Qgb25jZSBmb3IgZWFjaCBuZXcgTVZURmVhdHVyZVxuICAgICAgICB2YXIgc3R5bGUgPSBzZWxmLnN0eWxlKHZ0Zik7XG5cbiAgICAgICAgLy9JZiBzdHlsZS5sZWdlbmRMYWJlbCBwcm9wZXJ0eSBleGlzdHMsIGJ1aWxkIGEgbGVnZW5kIG9iamVjdC5cbiAgICAgICAgLy9pZihzdHlsZS5sZWdlbmRMYWJlbCl7XG4gICAgICAgIC8vICBzZWxmLmxlZ2VuZE9iamVjdFtzdHlsZS5sZWdlbmRMYWJlbF0gPSBzdHlsZTtcbiAgICAgICAgLy99XG5cbiAgICAgICAgLy9jcmVhdGUgYSBuZXcgZmVhdHVyZVxuICAgICAgICBzZWxmLmZlYXR1cmVzW3VuaXF1ZUlEXSA9IG12dEZlYXR1cmUgPSBuZXcgTVZURmVhdHVyZShzZWxmLCB2dGYsIGxheWVyQ3R4LCB1bmlxdWVJRCwgc3R5bGUpO1xuICAgICAgICBpZiAoc3R5bGUgJiYgc3R5bGUuZHluYW1pY0xhYmVsICYmIHR5cGVvZiBzdHlsZS5keW5hbWljTGFiZWwgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBzZWxmLmZlYXR1cmVzV2l0aExhYmVscy5wdXNoKG12dEZlYXR1cmUpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvL0FkZCB0aGUgbmV3IHBhcnQgdG8gdGhlIGV4aXN0aW5nIGZlYXR1cmVcbiAgICAgICAgbXZ0RmVhdHVyZS5hZGRUaWxlRmVhdHVyZSh2dGYsIGxheWVyQ3R4KTtcbiAgICAgIH1cblxuICAgICAgLy9Bc3NvY2lhdGUgJiBTYXZlIHRoaXMgZmVhdHVyZSB3aXRoIHRoaXMgdGlsZSBmb3IgbGF0ZXJcbiAgICAgIGlmKGxheWVyQ3R4ICYmIGxheWVyQ3R4LmlkKSBzZWxmLl9jYW52YXNJRFRvRmVhdHVyZXNbbGF5ZXJDdHguaWRdWydmZWF0dXJlcyddLnB1c2gobXZ0RmVhdHVyZSk7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBcHBseSBzb3J0aW5nICh6SW5kZXgpIG9uIGZlYXR1cmUgaWYgdGhlcmUgaXMgYSBmdW5jdGlvbiBkZWZpbmVkIGluIHRoZSBvcHRpb25zIG9iamVjdFxuICAgICAqIG9mIFRpbGVMYXllci5NVlRTb3VyY2UuanNcbiAgICAgKi9cbiAgICB2YXIgbGF5ZXJPcmRlcmluZyA9IHNlbGYub3B0aW9ucy5sYXllck9yZGVyaW5nO1xuICAgIGlmIChsYXllck9yZGVyaW5nKSB7XG4gICAgICAvL1dlJ3ZlIGFzc2lnbmVkIHRoZSBjdXN0b20gekluZGV4IHByb3BlcnR5IHdoZW4gaXRlcmF0aW5nIGFib3ZlLiAgTm93IGp1c3Qgc29ydC5cbiAgICAgIHNlbGYuX2NhbnZhc0lEVG9GZWF0dXJlc1tsYXllckN0eC5pZF0uZmVhdHVyZXMgPSBzZWxmLl9jYW52YXNJRFRvRmVhdHVyZXNbbGF5ZXJDdHguaWRdLmZlYXR1cmVzLnNvcnQoZnVuY3Rpb24oYSwgYikge1xuICAgICAgICByZXR1cm4gLShiLnByb3BlcnRpZXMuekluZGV4IC0gYS5wcm9wZXJ0aWVzLnpJbmRleClcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHNlbGYucmVkcmF3VGlsZShsYXllckN0eC5pZCk7XG4gIH0sXG5cbiAgc2V0U3R5bGU6IGZ1bmN0aW9uKHN0eWxlRm4pIHtcbiAgICAvLyByZWZyZXNoIHRoZSBudW1iZXIgZm9yIHRoZSBoaWdoZXN0IGNvdW50IHZhbHVlXG4gICAgLy8gdGhpcyBpcyB1c2VkIG9ubHkgZm9yIGNob3JvcGxldGhcbiAgICB0aGlzLl9oaWdoZXN0Q291bnQgPSAwO1xuXG4gICAgLy8gbG93ZXN0IGNvdW50IHNob3VsZCBub3QgYmUgMCwgc2luY2Ugd2Ugd2FudCB0byBmaWd1cmUgb3V0IHRoZSBsb3dlc3RcbiAgICB0aGlzLl9sb3dlc3RDb3VudCA9IG51bGw7XG5cbiAgICB0aGlzLnN0eWxlID0gc3R5bGVGbjtcbiAgICBmb3IgKHZhciBrZXkgaW4gdGhpcy5mZWF0dXJlcykge1xuICAgICAgdmFyIGZlYXQgPSB0aGlzLmZlYXR1cmVzW2tleV07XG4gICAgICBmZWF0LnNldFN0eWxlKHN0eWxlRm4pO1xuICAgIH1cbiAgICB2YXIgeiA9IHRoaXMubWFwLmdldFpvb20oKTtcbiAgICBmb3IgKHZhciBrZXkgaW4gdGhpcy5fdGlsZXMpIHtcbiAgICAgIHZhciBpZCA9IHogKyAnOicgKyBrZXk7XG4gICAgICB0aGlzLnJlZHJhd1RpbGUoaWQpO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogQXMgY291bnRzIGZvciBjaG9yb3BsZXRocyBjb21lIGluIHdpdGggdGhlIGFqYXggZGF0YSxcbiAgICogd2Ugd2FudCB0byBrZWVwIHRyYWNrIG9mIHdoaWNoIHZhbHVlIGlzIHRoZSBoaWdoZXN0XG4gICAqIHRvIGNyZWF0ZSB0aGUgY29sb3IgcmFtcCBmb3IgdGhlIGZpbGxzIG9mIHBvbHlnb25zLlxuICAgKiBAcGFyYW0gY291bnRcbiAgICovXG4gIHNldEhpZ2hlc3RDb3VudDogZnVuY3Rpb24oY291bnQpIHtcbiAgICBpZiAoY291bnQgPiB0aGlzLl9oaWdoZXN0Q291bnQpIHtcbiAgICAgIHRoaXMuX2hpZ2hlc3RDb3VudCA9IGNvdW50O1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgaGlnaGVzdCBudW1iZXIgb2YgYWxsIG9mIHRoZSBjb3VudHMgdGhhdCBoYXZlIGNvbWUgaW5cbiAgICogZnJvbSBzZXRIaWdoZXN0Q291bnQuIFRoaXMgaXMgYXNzdW1lZCB0byBiZSBzZXQgdmlhIGFqYXggY2FsbGJhY2tzLlxuICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0SGlnaGVzdENvdW50OiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5faGlnaGVzdENvdW50O1xuICB9LFxuXG4gIHNldExvd2VzdENvdW50OiBmdW5jdGlvbihjb3VudCkge1xuICAgIGlmICghdGhpcy5fbG93ZXN0Q291bnQgfHwgY291bnQgPCB0aGlzLl9sb3dlc3RDb3VudCkge1xuICAgICAgdGhpcy5fbG93ZXN0Q291bnQgPSBjb3VudDtcbiAgICB9XG4gIH0sXG5cbiAgZ2V0TG93ZXN0Q291bnQ6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9sb3dlc3RDb3VudDtcbiAgfSxcblxuICBzZXRDb3VudFJhbmdlOiBmdW5jdGlvbihjb3VudCkge1xuICAgIHRoaXMuc2V0SGlnaGVzdENvdW50KGNvdW50KTtcbiAgICB0aGlzLnNldExvd2VzdENvdW50KGNvdW50KTtcbiAgfSxcblxuICAvL1RoaXMgaXMgdGhlIG9sZCB3YXkuICBJdCB3b3JrcywgYnV0IGlzIHNsb3cgZm9yIG1vdXNlb3ZlciBldmVudHMuICBGaW5lIGZvciBjbGljayBldmVudHMuXG4gIGhhbmRsZUNsaWNrRXZlbnQ6IGZ1bmN0aW9uKGV2dCwgY2IpIHtcbiAgICAvL0NsaWNrIGhhcHBlbmVkIG9uIHRoZSBHcm91cExheWVyIChNYW5hZ2VyKSBhbmQgcGFzc2VkIGl0IGhlcmVcbiAgICB2YXIgdGlsZUlEID0gZXZ0LnRpbGVJRC5zcGxpdChcIjpcIikuc2xpY2UoMSwgMykuam9pbihcIjpcIik7XG4gICAgdmFyIGNhbnZhcyA9IHRoaXMuX3RpbGVzW3RpbGVJRF07XG4gICAgaWYoIWNhbnZhcykgKGNiKGV2dCkpOyAvL2JyZWFrIG91dFxuICAgIHZhciB4ID0gZXZ0LmxheWVyUG9pbnQueCAtIGNhbnZhcy5fbGVhZmxldF9wb3MueDtcbiAgICB2YXIgeSA9IGV2dC5sYXllclBvaW50LnkgLSBjYW52YXMuX2xlYWZsZXRfcG9zLnk7XG5cbiAgICB2YXIgdGlsZVBvaW50ID0ge3g6IHgsIHk6IHl9O1xuICAgIHZhciBmZWF0dXJlcyA9IHRoaXMuX2NhbnZhc0lEVG9GZWF0dXJlc1tldnQudGlsZUlEXS5mZWF0dXJlcztcblxuICAgIHZhciBtaW5EaXN0YW5jZSA9IE51bWJlci5QT1NJVElWRV9JTkZJTklUWTtcbiAgICB2YXIgbmVhcmVzdCA9IG51bGw7XG4gICAgdmFyIGosIHBhdGhzLCBkaXN0YW5jZTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZmVhdHVyZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBmZWF0dXJlID0gZmVhdHVyZXNbaV07XG4gICAgICBzd2l0Y2ggKGZlYXR1cmUudHlwZSkge1xuICAgICAgICBjYXNlIDI6IC8vTGluZVN0cmluZ1xuICAgICAgICAgIHBhdGhzID0gZmVhdHVyZS5nZXRQYXRoc0ZvclRpbGUoZXZ0LnRpbGVJRCk7XG4gICAgICAgICAgZm9yIChqID0gMDsgaiA8IHBhdGhzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICBpZiAoZmVhdHVyZS5zdHlsZSkge1xuICAgICAgICAgICAgICB2YXIgZGlzdGFuY2UgPSB0aGlzLl9nZXREaXN0YW5jZUZyb21MaW5lKHRpbGVQb2ludCwgcGF0aHNbal0pO1xuICAgICAgICAgICAgICB2YXIgdGhpY2tuZXNzID0gKGZlYXR1cmUuc2VsZWN0ZWQgJiYgZmVhdHVyZS5zdHlsZS5zZWxlY3RlZCA/IGZlYXR1cmUuc3R5bGUuc2VsZWN0ZWQuc2l6ZSA6IGZlYXR1cmUuc3R5bGUuc2l6ZSk7XG4gICAgICAgICAgICAgIGlmIChkaXN0YW5jZSA8IHRoaWNrbmVzcyAvIDIgKyB0aGlzLm9wdGlvbnMubGluZUNsaWNrVG9sZXJhbmNlICYmIGRpc3RhbmNlIDwgbWluRGlzdGFuY2UpIHtcbiAgICAgICAgICAgICAgICBuZWFyZXN0ID0gZmVhdHVyZTtcbiAgICAgICAgICAgICAgICBtaW5EaXN0YW5jZSA9IGRpc3RhbmNlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgMzogLy9Qb2x5Z29uXG4gICAgICAgICAgcGF0aHMgPSBmZWF0dXJlLmdldFBhdGhzRm9yVGlsZShldnQudGlsZUlEKTtcbiAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgcGF0aHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9pc1BvaW50SW5Qb2x5KHRpbGVQb2ludCwgcGF0aHNbal0pKSB7XG4gICAgICAgICAgICAgIG5lYXJlc3QgPSBmZWF0dXJlO1xuICAgICAgICAgICAgICBtaW5EaXN0YW5jZSA9IDA7IC8vIHBvaW50IGlzIGluc2lkZSB0aGUgcG9seWdvbiwgc28gZGlzdGFuY2UgaXMgemVyb1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGlmIChtaW5EaXN0YW5jZSA9PSAwKSBicmVhaztcbiAgICB9XG5cbiAgICBpZiAobmVhcmVzdCAmJiBuZWFyZXN0LnRvZ2dsZUVuYWJsZWQpIHtcbiAgICAgICAgbmVhcmVzdC50b2dnbGUoKTtcbiAgICB9XG4gICAgZXZ0LmZlYXR1cmUgPSBuZWFyZXN0O1xuICAgIGNiKGV2dCk7XG4gIH0sXG5cbiAgY2xlYXJUaWxlOiBmdW5jdGlvbihpZCkge1xuICAgIC8vaWQgaXMgdGhlIGVudGlyZSB6b29tOng6eS4gIHdlIGp1c3Qgd2FudCB4OnkuXG4gICAgdmFyIGNhID0gaWQuc3BsaXQoXCI6XCIpO1xuICAgIHZhciBjYW52YXNJZCA9IGNhWzFdICsgXCI6XCIgKyBjYVsyXTtcblxuICAgIC8vVE9ETzogdGhpcyBpcyBzb21ldGltZXMgdW5kZWZpbmVkLlxuICAgIGlmICh0eXBlb2YgdGhpcy5fdGlsZXNbY2FudmFzSWRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgY2FudmFzID0gdGhpcy5fdGlsZXNbY2FudmFzSWRdO1xuXG4gICAgdmFyIGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBjb250ZXh0LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICB9LFxuXG4gIGNsZWFyVGlsZUZlYXR1cmVIYXNoOiBmdW5jdGlvbihjYW52YXNJRCl7XG4gICAgdGhpcy5fY2FudmFzSURUb0ZlYXR1cmVzW2NhbnZhc0lEXSA9IHsgZmVhdHVyZXM6IFtdfTsgLy9HZXQgcmlkIG9mIGFsbCBzYXZlZCBmZWF0dXJlc1xuICB9LFxuXG4gIGNsZWFyTGF5ZXJGZWF0dXJlSGFzaDogZnVuY3Rpb24oKXtcbiAgICB0aGlzLmZlYXR1cmVzID0ge307XG4gIH0sXG5cbiAgcmVkcmF3VGlsZTogZnVuY3Rpb24oY2FudmFzSUQpIHtcbiAgICAvL0ZpcnN0LCBjbGVhciB0aGUgY2FudmFzXG4gICAgdGhpcy5jbGVhclRpbGUoY2FudmFzSUQpO1xuXG4gICAgLy8gSWYgdGhlIGZlYXR1cmVzIGFyZSBub3QgaW4gdGhlIHRpbGUsIHRoZW4gdGhlcmUgaXMgbm90aGluZyB0byByZWRyYXcuXG4gICAgLy8gVGhpcyBtYXkgaGFwcGVuIGlmIHlvdSBjYWxsIHJlZHJhdyBiZWZvcmUgZmVhdHVyZXMgaGF2ZSBsb2FkZWQgYW5kIGluaXRpYWxseVxuICAgIC8vIGRyYXduIHRoZSB0aWxlLlxuICAgIHZhciBmZWF0ZmVhdHMgPSB0aGlzLl9jYW52YXNJRFRvRmVhdHVyZXNbY2FudmFzSURdO1xuICAgIGlmICghZmVhdGZlYXRzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy9HZXQgdGhlIGZlYXR1cmVzIGZvciB0aGlzIHRpbGUsIGFuZCByZWRyYXcgdGhlbS5cbiAgICB2YXIgZmVhdHVyZXMgPSBmZWF0ZmVhdHMuZmVhdHVyZXM7XG5cbiAgICAvLyB3ZSB3YW50IHRvIHNraXAgZHJhd2luZyB0aGUgc2VsZWN0ZWQgZmVhdHVyZXMgYW5kIGRyYXcgdGhlbSBsYXN0XG4gICAgdmFyIHNlbGVjdGVkRmVhdHVyZXMgPSBbXTtcblxuICAgIC8vIGRyYXdpbmcgYWxsIG9mIHRoZSBub24tc2VsZWN0ZWQgZmVhdHVyZXNcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGZlYXR1cmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZmVhdHVyZSA9IGZlYXR1cmVzW2ldO1xuICAgICAgaWYgKGZlYXR1cmUuc2VsZWN0ZWQpIHtcbiAgICAgICAgc2VsZWN0ZWRGZWF0dXJlcy5wdXNoKGZlYXR1cmUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZmVhdHVyZS5kcmF3KGNhbnZhc0lEKTtcbiAgICAgICAgdGhpcy5hZGRMZWdlbmRTdHlsZShmZWF0dXJlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBkcmF3aW5nIHRoZSBzZWxlY3RlZCBmZWF0dXJlcyBsYXN0XG4gICAgZm9yICh2YXIgaiA9IDAsIGxlbjIgPSBzZWxlY3RlZEZlYXR1cmVzLmxlbmd0aDsgaiA8IGxlbjI7IGorKykge1xuICAgICAgdmFyIHNlbEZlYXQgPSBzZWxlY3RlZEZlYXR1cmVzW2pdO1xuICAgICAgc2VsRmVhdC5kcmF3KGNhbnZhc0lEKTtcbiAgICB9XG5cbiAgfSxcblxuICBfcmVzZXRDYW52YXNJRFRvRmVhdHVyZXM6IGZ1bmN0aW9uKGNhbnZhc0lELCBjYW52YXMpIHtcblxuICAgIHRoaXMuX2NhbnZhc0lEVG9GZWF0dXJlc1tjYW52YXNJRF0gPSB7fTtcbiAgICB0aGlzLl9jYW52YXNJRFRvRmVhdHVyZXNbY2FudmFzSURdLmZlYXR1cmVzID0gW107XG4gICAgdGhpcy5fY2FudmFzSURUb0ZlYXR1cmVzW2NhbnZhc0lEXS5jYW52YXMgPSBjYW52YXM7XG5cbiAgfSxcblxuICBsaW5rZWRMYXllcjogZnVuY3Rpb24oKSB7XG4gICAgaWYodGhpcy5tdnRTb3VyY2UubGF5ZXJMaW5rKSB7XG4gICAgICB2YXIgbGlua05hbWUgPSB0aGlzLm12dFNvdXJjZS5sYXllckxpbmsodGhpcy5uYW1lKTtcbiAgICAgIHJldHVybiB0aGlzLm12dFNvdXJjZS5sYXllcnNbbGlua05hbWVdO1xuICAgIH1cbiAgICBlbHNle1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9LFxuXG4gIGZlYXR1cmVXaXRoTGFiZWxBZGRlZDogZnVuY3Rpb24oZmVhdHVyZSkge1xuICAgIHRoaXMuZmVhdHVyZXNXaXRoTGFiZWxzLnB1c2goZmVhdHVyZSk7XG4gIH0sXG5cbiAgYWRkTGVnZW5kU3R5bGU6IGZ1bmN0aW9uKGZlYXR1cmUpe1xuICAgIC8vVGFrZSBpbiBhIGZlYXR1cmUsIGFuZCBhZGQgaW4gY2xhc3MgbmFtZXMgYW5kIGNvbG9ycyBiYXNlZCBvbiBkcmF3aW5nIHN0eWxlXG5cbiAgICAvL0lmIHN0eWxlLmxlZ2VuZExhYmVsIHByb3BlcnR5IGV4aXN0cywgYnVpbGQgYSBsZWdlbmQgb2JqZWN0LlxuICAgIGlmKGZlYXR1cmUuc3R5bGUubGVnZW5kTGFiZWwpe1xuICAgICAgdGhpcy5sZWdlbmRPYmplY3RbZmVhdHVyZS5zdHlsZS5sZWdlbmRMYWJlbF0gPSBmZWF0dXJlLnN0eWxlO1xuICAgIH1cblxuICAgIC8vU3RvcmUgdGhlIGJ1YmJsZSBIVE1MLCBpZiBwcmVzZW50XG4gICAgaWYoZmVhdHVyZS5zdGF0aWNMYWJlbCl7XG4gICAgICB0aGlzLmxlZ2VuZE9iamVjdFtmZWF0dXJlLnN0eWxlLmxlZ2VuZExhYmVsXSA9IGZlYXR1cmUuc3RhdGljTGFiZWwuaWNvbjtcbiAgICB9XG4gIH0sXG5cbiAgY2xlYXJMZWdlbmRPYmplY3Q6IGZ1bmN0aW9uKCl7XG4gICAgdGhpcy5sZWdlbmRPYmplY3QgPSB7fTtcbiAgfSxcblxuICBnZXRMZWdlbmRPYmplY3Q6IGZ1bmN0aW9uKCl7XG4gICAgLy9HZXQgdGhlIGxlZ2VuZCBvYmplY3QgZm9yIHRoaXMgbGF5ZXIuXG4gICAgcmV0dXJuIHRoaXMubGVnZW5kT2JqZWN0O1xuICB9XG5cbn0pO1xuXG5cbmZ1bmN0aW9uIHJlbW92ZUxhYmVscyhzZWxmKSB7XG4gIHZhciBmZWF0dXJlcyA9IHNlbGYuZmVhdHVyZXNXaXRoTGFiZWxzO1xuICBmb3IgKHZhciBpID0gMCwgbGVuID0gZmVhdHVyZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICB2YXIgZmVhdCA9IGZlYXR1cmVzW2ldO1xuICAgIGZlYXQucmVtb3ZlTGFiZWwoKTtcbiAgfVxuICBzZWxmLmZlYXR1cmVzV2l0aExhYmVscyA9IFtdO1xufVxuXG5cbi8qKlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9hcml5YS9waGFudG9tanMvYmxvYi9tYXN0ZXIvZXhhbXBsZXMvd2FpdGZvci5qc1xuICpcbiAqIFdhaXQgdW50aWwgdGhlIHRlc3QgY29uZGl0aW9uIGlzIHRydWUgb3IgYSB0aW1lb3V0IG9jY3Vycy4gVXNlZnVsIGZvciB3YWl0aW5nXG4gKiBvbiBhIHNlcnZlciByZXNwb25zZSBvciBmb3IgYSB1aSBjaGFuZ2UgKGZhZGVJbiwgZXRjLikgdG8gb2NjdXIuXG4gKlxuICogQHBhcmFtIHRlc3RGeCBqYXZhc2NyaXB0IGNvbmRpdGlvbiB0aGF0IGV2YWx1YXRlcyB0byBhIGJvb2xlYW4sXG4gKiBpdCBjYW4gYmUgcGFzc2VkIGluIGFzIGEgc3RyaW5nIChlLmcuOiBcIjEgPT0gMVwiIG9yIFwiJCgnI2JhcicpLmlzKCc6dmlzaWJsZScpXCIgb3JcbiAqIGFzIGEgY2FsbGJhY2sgZnVuY3Rpb24uXG4gKiBAcGFyYW0gb25SZWFkeSB3aGF0IHRvIGRvIHdoZW4gdGVzdEZ4IGNvbmRpdGlvbiBpcyBmdWxmaWxsZWQsXG4gKiBpdCBjYW4gYmUgcGFzc2VkIGluIGFzIGEgc3RyaW5nIChlLmcuOiBcIjEgPT0gMVwiIG9yIFwiJCgnI2JhcicpLmlzKCc6dmlzaWJsZScpXCIgb3JcbiAqIGFzIGEgY2FsbGJhY2sgZnVuY3Rpb24uXG4gKiBAcGFyYW0gdGltZU91dE1pbGxpcyB0aGUgbWF4IGFtb3VudCBvZiB0aW1lIHRvIHdhaXQuIElmIG5vdCBzcGVjaWZpZWQsIDMgc2VjIGlzIHVzZWQuXG4gKi9cbmZ1bmN0aW9uIHdhaXRGb3IodGVzdEZ4LCBvblJlYWR5LCB0aW1lT3V0TWlsbGlzKSB7XG4gIHZhciBtYXh0aW1lT3V0TWlsbGlzID0gdGltZU91dE1pbGxpcyA/IHRpbWVPdXRNaWxsaXMgOiAzMDAwLCAvLzwgRGVmYXVsdCBNYXggVGltb3V0IGlzIDNzXG4gICAgc3RhcnQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSxcbiAgICBjb25kaXRpb24gPSAodHlwZW9mICh0ZXN0RngpID09PSBcInN0cmluZ1wiID8gZXZhbCh0ZXN0RngpIDogdGVzdEZ4KCkpLCAvLzwgZGVmZW5zaXZlIGNvZGVcbiAgICBpbnRlcnZhbCA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICgobmV3IERhdGUoKS5nZXRUaW1lKCkgLSBzdGFydCA8IG1heHRpbWVPdXRNaWxsaXMpICYmICFjb25kaXRpb24pIHtcbiAgICAgICAgLy8gSWYgbm90IHRpbWUtb3V0IHlldCBhbmQgY29uZGl0aW9uIG5vdCB5ZXQgZnVsZmlsbGVkXG4gICAgICAgIGNvbmRpdGlvbiA9ICh0eXBlb2YgKHRlc3RGeCkgPT09IFwic3RyaW5nXCIgPyBldmFsKHRlc3RGeCkgOiB0ZXN0RngoKSk7IC8vPCBkZWZlbnNpdmUgY29kZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKCFjb25kaXRpb24pIHtcbiAgICAgICAgICAvLyBJZiBjb25kaXRpb24gc3RpbGwgbm90IGZ1bGZpbGxlZCAodGltZW91dCBidXQgY29uZGl0aW9uIGlzICdmYWxzZScpXG4gICAgICAgICAgY29uc29sZS5sb2coXCInd2FpdEZvcigpJyB0aW1lb3V0XCIpO1xuICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpOyAvLzwgU3RvcCB0aGlzIGludGVydmFsXG4gICAgICAgICAgdHlwZW9mIChvblJlYWR5KSA9PT0gXCJzdHJpbmdcIiA/IGV2YWwob25SZWFkeSkgOiBvblJlYWR5KCd0aW1lb3V0Jyk7IC8vPCBEbyB3aGF0IGl0J3Mgc3VwcG9zZWQgdG8gZG8gb25jZSB0aGUgY29uZGl0aW9uIGlzIGZ1bGZpbGxlZFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIENvbmRpdGlvbiBmdWxmaWxsZWQgKHRpbWVvdXQgYW5kL29yIGNvbmRpdGlvbiBpcyAndHJ1ZScpXG4gICAgICAgICAgY29uc29sZS5sb2coXCInd2FpdEZvcigpJyBmaW5pc2hlZCBpbiBcIiArIChuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIHN0YXJ0KSArIFwibXMuXCIpO1xuICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpOyAvLzwgU3RvcCB0aGlzIGludGVydmFsXG4gICAgICAgICAgdHlwZW9mIChvblJlYWR5KSA9PT0gXCJzdHJpbmdcIiA/IGV2YWwob25SZWFkeSkgOiBvblJlYWR5KCdzdWNjZXNzJyk7IC8vPCBEbyB3aGF0IGl0J3Mgc3VwcG9zZWQgdG8gZG8gb25jZSB0aGUgY29uZGl0aW9uIGlzIGZ1bGZpbGxlZFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgNTApOyAvLzwgcmVwZWF0IGNoZWNrIGV2ZXJ5IDUwbXNcbn07XG4iLCJ2YXIgVmVjdG9yVGlsZSA9IHJlcXVpcmUoJ3ZlY3Rvci10aWxlJykuVmVjdG9yVGlsZTtcbnZhciBQcm90b2J1ZiA9IHJlcXVpcmUoJ3BiZicpO1xudmFyIFBvaW50ID0gcmVxdWlyZSgncG9pbnQtZ2VvbWV0cnknKTtcbnZhciBVdGlsID0gcmVxdWlyZSgnLi9NVlRVdGlsJyk7XG52YXIgTVZUTGF5ZXIgPSByZXF1aXJlKCcuL01WVExheWVyJyk7XG5cblxubW9kdWxlLmV4cG9ydHMgPSBMLlRpbGVMYXllci5NVlRTb3VyY2UgPSBMLlRpbGVMYXllci5DYW52YXMuZXh0ZW5kKHtcblxuICBvcHRpb25zOiB7XG4gICAgZGVidWc6IGZhbHNlLFxuICAgIHVybDogXCJcIiwgLy9VUkwgVE8gVmVjdG9yIFRpbGUgU291cmNlLFxuICAgIGdldElERm9yTGF5ZXJGZWF0dXJlOiBmdW5jdGlvbigpIHt9LFxuICAgIHRpbGVTaXplOiAyNTYsXG4gICAgdmlzaWJsZUxheWVyczogW11cbiAgfSxcbiAgbGF5ZXJzOiB7fSwgLy9LZWVwIGEgbGlzdCBvZiB0aGUgbGF5ZXJzIGNvbnRhaW5lZCBpbiB0aGUgUEJGc1xuICBwcm9jZXNzZWRUaWxlczoge30sIC8vS2VlcCBhIGxpc3Qgb2YgdGlsZXMgdGhhdCBoYXZlIGJlZW4gcHJvY2Vzc2VkIGFscmVhZHlcbiAgX2V2ZW50SGFuZGxlcnM6IHt9LFxuICBfdHJpZ2dlck9uVGlsZXNMb2FkZWRFdmVudDogdHJ1ZSwgLy93aGV0aGVyIG9yIG5vdCB0byBmaXJlIHRoZSBvblRpbGVzTG9hZGVkIGV2ZW50IHdoZW4gYWxsIG9mIHRoZSB0aWxlcyBmaW5pc2ggbG9hZGluZy5cbiAgX3VybDogXCJcIiwgLy9pbnRlcm5hbCBVUkwgcHJvcGVydHlcblxuICBzdHlsZTogZnVuY3Rpb24oZmVhdHVyZSkge1xuICAgIHZhciBzdHlsZSA9IHt9O1xuXG4gICAgdmFyIHR5cGUgPSBmZWF0dXJlLnR5cGU7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlIDE6IC8vJ1BvaW50J1xuICAgICAgICBzdHlsZS5jb2xvciA9ICdyZ2JhKDQ5LDc5LDc5LDEpJztcbiAgICAgICAgc3R5bGUucmFkaXVzID0gNTtcbiAgICAgICAgc3R5bGUuc2VsZWN0ZWQgPSB7XG4gICAgICAgICAgY29sb3I6ICdyZ2JhKDI1NSwyNTUsMCwwLjUpJyxcbiAgICAgICAgICByYWRpdXM6IDZcbiAgICAgICAgfTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDI6IC8vJ0xpbmVTdHJpbmcnXG4gICAgICAgIHN0eWxlLmNvbG9yID0gJ3JnYmEoMTYxLDIxNywxNTUsMC44KSc7XG4gICAgICAgIHN0eWxlLnNpemUgPSAzO1xuICAgICAgICBzdHlsZS5zZWxlY3RlZCA9IHtcbiAgICAgICAgICBjb2xvcjogJ3JnYmEoMjU1LDI1LDAsMC41KScsXG4gICAgICAgICAgc2l6ZTogNFxuICAgICAgICB9O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMzogLy8nUG9seWdvbidcbiAgICAgICAgc3R5bGUuY29sb3IgPSAncmdiYSg0OSw3OSw3OSwxKSc7XG4gICAgICAgIHN0eWxlLm91dGxpbmUgPSB7XG4gICAgICAgICAgY29sb3I6ICdyZ2JhKDE2MSwyMTcsMTU1LDAuOCknLFxuICAgICAgICAgIHNpemU6IDFcbiAgICAgICAgfTtcbiAgICAgICAgc3R5bGUuc2VsZWN0ZWQgPSB7XG4gICAgICAgICAgY29sb3I6ICdyZ2JhKDI1NSwxNDAsMCwwLjMpJyxcbiAgICAgICAgICBvdXRsaW5lOiB7XG4gICAgICAgICAgICBjb2xvcjogJ3JnYmEoMjU1LDE0MCwwLDEpJyxcbiAgICAgICAgICAgIHNpemU6IDJcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICByZXR1cm4gc3R5bGU7XG4gIH0sXG5cblxuICBpbml0aWFsaXplOiBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgTC5VdGlsLnNldE9wdGlvbnModGhpcywgb3B0aW9ucyk7XG5cbiAgICAvL2EgbGlzdCBvZiB0aGUgbGF5ZXJzIGNvbnRhaW5lZCBpbiB0aGUgUEJGc1xuICAgIHRoaXMubGF5ZXJzID0ge307XG5cbiAgICAvLyB0aWxlcyBjdXJyZW50bHkgaW4gdGhlIHZpZXdwb3J0XG4gICAgdGhpcy5hY3RpdmVUaWxlcyA9IHt9O1xuXG4gICAgLy8gdGhhdHMgdGhhdCBoYXZlIGJlZW4gbG9hZGVkIGFuZCBkcmF3blxuICAgIHRoaXMubG9hZGVkVGlsZXMgPSB7fTtcblxuICAgIHRoaXMuX3VybCA9IHRoaXMub3B0aW9ucy51cmw7XG5cbiAgICAvKipcbiAgICAgKiBGb3Igc29tZSByZWFzb24sIExlYWZsZXQgaGFzIHNvbWUgY29kZSB0aGF0IHJlc2V0cyB0aGVcbiAgICAgKiB6IGluZGV4IGluIHRoZSBvcHRpb25zIG9iamVjdC4gSSdtIGhhdmluZyB0cm91YmxlIHRyYWNraW5nXG4gICAgICogZG93biBleGFjdGx5IHdoYXQgZG9lcyB0aGlzIGFuZCB3aHksIHNvIGZvciBub3csIHdlIHNob3VsZFxuICAgICAqIGp1c3QgY29weSB0aGUgdmFsdWUgdG8gdGhpcy56SW5kZXggc28gd2UgY2FuIGhhdmUgdGhlIHJpZ2h0XG4gICAgICogbnVtYmVyIHdoZW4gd2UgbWFrZSB0aGUgc3Vic2VxdWVudCBNVlRMYXllcnMuXG4gICAgICovXG4gICAgdGhpcy56SW5kZXggPSBvcHRpb25zLnpJbmRleDtcblxuICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5zdHlsZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhpcy5zdHlsZSA9IG9wdGlvbnMuc3R5bGU7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBvcHRpb25zLmFqYXhTb3VyY2UgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRoaXMuYWpheFNvdXJjZSA9IG9wdGlvbnMuYWpheFNvdXJjZTtcbiAgICB9XG5cbiAgICB0aGlzLmxheWVyTGluayA9IG9wdGlvbnMubGF5ZXJMaW5rO1xuXG4gICAgdGhpcy5fZXZlbnRIYW5kbGVycyA9IHt9O1xuXG4gICAgdGhpcy5fdGlsZXNUb1Byb2Nlc3MgPSAwOyAvL3N0b3JlIHRoZSBtYXggbnVtYmVyIG9mIHRpbGVzIHRvIGJlIGxvYWRlZC4gIExhdGVyLCB3ZSBjYW4gdXNlIHRoaXMgY291bnQgdG8gY291bnQgZG93biBQQkYgbG9hZGluZy5cbiAgfSxcblxuICByZWRyYXc6IGZ1bmN0aW9uKHRyaWdnZXJPblRpbGVzTG9hZGVkRXZlbnQpe1xuICAgIC8vT25seSBzZXQgdG8gZmFsc2UgaWYgaXQgYWN0dWFsbHkgaXMgcGFzc2VkIGluIGFzICdmYWxzZSdcbiAgICBpZiAodHJpZ2dlck9uVGlsZXNMb2FkZWRFdmVudCA9PT0gZmFsc2UpIHtcbiAgICAgIHRoaXMuX3RyaWdnZXJPblRpbGVzTG9hZGVkRXZlbnQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBMLlRpbGVMYXllci5DYW52YXMucHJvdG90eXBlLnJlZHJhdy5jYWxsKHRoaXMpO1xuICB9LFxuXG4gIG9uQWRkOiBmdW5jdGlvbihtYXApIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgc2VsZi5tYXAgPSBtYXA7XG4gICAgTC5UaWxlTGF5ZXIuQ2FudmFzLnByb3RvdHlwZS5vbkFkZC5jYWxsKHRoaXMsIG1hcCk7XG5cbiAgICB2YXIgbWFwT25DbGlja0NhbGxiYWNrID0gZnVuY3Rpb24oZSkge1xuICAgICAgc2VsZi5fb25DbGljayhlKTtcbiAgICB9O1xuXG4gICAgbWFwLm9uKCdjbGljaycsIG1hcE9uQ2xpY2tDYWxsYmFjayk7XG5cbiAgICBtYXAub24oXCJsYXllcnJlbW92ZVwiLCBmdW5jdGlvbihlKSB7XG4gICAgICAvLyBjaGVjayB0byBzZWUgaWYgdGhlIGxheWVyIHJlbW92ZWQgaXMgdGhpcyBvbmVcbiAgICAgIC8vIGNhbGwgYSBtZXRob2QgdG8gcmVtb3ZlIHRoZSBjaGlsZCBsYXllcnMgKHRoZSBvbmVzIHRoYXQgYWN0dWFsbHkgaGF2ZSBzb21ldGhpbmcgZHJhd24gb24gdGhlbSkuXG4gICAgICBpZiAoZS5sYXllci5fbGVhZmxldF9pZCA9PT0gc2VsZi5fbGVhZmxldF9pZCAmJiBlLmxheWVyLnJlbW92ZUNoaWxkTGF5ZXJzKSB7XG4gICAgICAgIGUubGF5ZXIucmVtb3ZlQ2hpbGRMYXllcnMobWFwKTtcbiAgICAgICAgbWFwLm9mZignY2xpY2snLCBtYXBPbkNsaWNrQ2FsbGJhY2spO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgc2VsZi5hZGRDaGlsZExheWVycyhtYXApO1xuXG4gICAgaWYgKHR5cGVvZiBEeW5hbWljTGFiZWwgPT09ICdmdW5jdGlvbicgKSB7XG4gICAgICB0aGlzLmR5bmFtaWNMYWJlbCA9IG5ldyBEeW5hbWljTGFiZWwobWFwLCB0aGlzLCB7fSk7XG4gICAgfVxuXG4gIH0sXG5cbiAgZHJhd1RpbGU6IGZ1bmN0aW9uKGNhbnZhcywgdGlsZVBvaW50LCB6b29tKSB7XG4gICAgdmFyIGN0eCA9IHtcbiAgICAgIGlkOiBbem9vbSwgdGlsZVBvaW50LngsIHRpbGVQb2ludC55XS5qb2luKFwiOlwiKSxcbiAgICAgIGNhbnZhczogY2FudmFzLFxuICAgICAgdGlsZTogdGlsZVBvaW50LFxuICAgICAgem9vbTogem9vbSxcbiAgICAgIHRpbGVTaXplOiB0aGlzLm9wdGlvbnMudGlsZVNpemVcbiAgICB9O1xuXG4gICAgLy9DYXB0dXJlIHRoZSBtYXggbnVtYmVyIG9mIHRoZSB0aWxlcyB0byBsb2FkIGhlcmUuIHRoaXMuX3RpbGVzVG9Qcm9jZXNzIGlzIGFuIGludGVybmFsIG51bWJlciB3ZSB1c2UgdG8ga25vdyB3aGVuIHdlJ3ZlIGZpbmlzaGVkIHJlcXVlc3RpbmcgUEJGcy5cbiAgICBpZih0aGlzLl90aWxlc1RvUHJvY2VzcyA8IHRoaXMuX3RpbGVzVG9Mb2FkKSB0aGlzLl90aWxlc1RvUHJvY2VzcyA9IHRoaXMuX3RpbGVzVG9Mb2FkO1xuXG4gICAgdmFyIGlkID0gY3R4LmlkID0gVXRpbC5nZXRDb250ZXh0SUQoY3R4KTtcbiAgICB0aGlzLmFjdGl2ZVRpbGVzW2lkXSA9IGN0eDtcblxuICAgIGlmKCF0aGlzLnByb2Nlc3NlZFRpbGVzW2N0eC56b29tXSkgdGhpcy5wcm9jZXNzZWRUaWxlc1tjdHguem9vbV0gPSB7fTtcblxuICAgIGlmICh0aGlzLm9wdGlvbnMuZGVidWcpIHtcbiAgICAgIHRoaXMuX2RyYXdEZWJ1Z0luZm8oY3R4KTtcbiAgICB9XG4gICAgdGhpcy5fZHJhdyhjdHgpO1xuICB9LFxuXG4gIHNldE9wYWNpdHk6ZnVuY3Rpb24ob3BhY2l0eSkge1xuICAgIHRoaXMuX3NldFZpc2libGVMYXllcnNTdHlsZSgnb3BhY2l0eScsb3BhY2l0eSk7XG4gIH0sXG5cbiAgc2V0WkluZGV4OmZ1bmN0aW9uKHpJbmRleCkge1xuICAgIHRoaXMuX3NldFZpc2libGVMYXllcnNTdHlsZSgnekluZGV4Jyx6SW5kZXgpO1xuICB9LFxuXG4gIF9zZXRWaXNpYmxlTGF5ZXJzU3R5bGU6ZnVuY3Rpb24oc3R5bGUsIHZhbHVlKSB7XG4gICAgZm9yKHZhciBrZXkgaW4gdGhpcy5sYXllcnMpIHtcbiAgICAgIHRoaXMubGF5ZXJzW2tleV0uX3RpbGVDb250YWluZXIuc3R5bGVbc3R5bGVdID0gdmFsdWU7XG4gICAgfVxuICB9LFxuXG4gIF9kcmF3RGVidWdJbmZvOiBmdW5jdGlvbihjdHgpIHtcbiAgICB2YXIgbWF4ID0gdGhpcy5vcHRpb25zLnRpbGVTaXplO1xuICAgIHZhciBnID0gY3R4LmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIGcuc3Ryb2tlU3R5bGUgPSAnIzAwMDAwMCc7XG4gICAgZy5maWxsU3R5bGUgPSAnI0ZGRkYwMCc7XG4gICAgZy5zdHJva2VSZWN0KDAsIDAsIG1heCwgbWF4KTtcbiAgICBnLmZvbnQgPSBcIjEycHggQXJpYWxcIjtcbiAgICBnLmZpbGxSZWN0KDAsIDAsIDUsIDUpO1xuICAgIGcuZmlsbFJlY3QoMCwgbWF4IC0gNSwgNSwgNSk7XG4gICAgZy5maWxsUmVjdChtYXggLSA1LCAwLCA1LCA1KTtcbiAgICBnLmZpbGxSZWN0KG1heCAtIDUsIG1heCAtIDUsIDUsIDUpO1xuICAgIGcuZmlsbFJlY3QobWF4IC8gMiAtIDUsIG1heCAvIDIgLSA1LCAxMCwgMTApO1xuICAgIGcuc3Ryb2tlVGV4dChjdHguem9vbSArICcgJyArIGN0eC50aWxlLnggKyAnICcgKyBjdHgudGlsZS55LCBtYXggLyAyIC0gMzAsIG1heCAvIDIgLSAxMCk7XG4gIH0sXG5cbiAgX2RyYXc6IGZ1bmN0aW9uKGN0eCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuLy8gICAgLy9UaGlzIHdvcmtzIHRvIHNraXAgZmV0Y2hpbmcgYW5kIHByb2Nlc3NpbmcgdGlsZXMgaWYgdGhleSd2ZSBhbHJlYWR5IGJlZW4gcHJvY2Vzc2VkLlxuLy8gICAgdmFyIHZlY3RvclRpbGUgPSB0aGlzLnByb2Nlc3NlZFRpbGVzW2N0eC56b29tXVtjdHguaWRdO1xuLy8gICAgLy9pZiB3ZSd2ZSBhbHJlYWR5IHBhcnNlZCBpdCwgZG9uJ3QgZ2V0IGl0IGFnYWluLlxuLy8gICAgaWYodmVjdG9yVGlsZSl7XG4vLyAgICAgIGNvbnNvbGUubG9nKFwiU2tpcHBpbmcgZmV0Y2hpbmcgXCIgKyBjdHguaWQpO1xuLy8gICAgICBzZWxmLmNoZWNrVmVjdG9yVGlsZUxheWVycyhwYXJzZVZUKHZlY3RvclRpbGUpLCBjdHgsIHRydWUpO1xuLy8gICAgICBzZWxmLnJlZHVjZVRpbGVzVG9Qcm9jZXNzQ291bnQoKTtcbi8vICAgICAgcmV0dXJuO1xuLy8gICAgfVxuXG4gICAgaWYgKCF0aGlzLl91cmwpIHJldHVybjtcbiAgICB2YXIgc3JjID0gdGhpcy5nZXRUaWxlVXJsKHsgeDogY3R4LnRpbGUueCwgeTogY3R4LnRpbGUueSwgejogY3R4Lnpvb20gfSk7XG5cbiAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgeGhyLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKHhoci5zdGF0dXMgPT0gXCIyMDBcIikge1xuXG4gICAgICAgIGlmKCF4aHIucmVzcG9uc2UpIHJldHVybjtcblxuICAgICAgICB2YXIgYXJyYXlCdWZmZXIgPSBuZXcgVWludDhBcnJheSh4aHIucmVzcG9uc2UpO1xuICAgICAgICB2YXIgYnVmID0gbmV3IFByb3RvYnVmKGFycmF5QnVmZmVyKTtcbiAgICAgICAgdmFyIHZ0ID0gbmV3IFZlY3RvclRpbGUoYnVmKTtcbiAgICAgICAgLy9DaGVjayB0aGUgY3VycmVudCBtYXAgbGF5ZXIgem9vbS4gIElmIGZhc3Qgem9vbWluZyBpcyBvY2N1cnJpbmcsIHRoZW4gc2hvcnQgY2lyY3VpdCB0aWxlcyB0aGF0IGFyZSBmb3IgYSBkaWZmZXJlbnQgem9vbSBsZXZlbCB0aGFuIHdlJ3JlIGN1cnJlbnRseSBvbi5cbiAgICAgICAgaWYoc2VsZi5tYXAgJiYgc2VsZi5tYXAuZ2V0Wm9vbSgpICE9IGN0eC56b29tKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJGZXRjaGVkIHRpbGUgZm9yIHpvb20gbGV2ZWwgXCIgKyBjdHguem9vbSArIFwiLiBNYXAgaXMgYXQgem9vbSBsZXZlbCBcIiArIHNlbGYuX21hcC5nZXRab29tKCkpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBzZWxmLmNoZWNrVmVjdG9yVGlsZUxheWVycyhwYXJzZVZUKHZ0KSwgY3R4KTtcbiAgICAgICAgdGlsZUxvYWRlZChzZWxmLCBjdHgpO1xuICAgICAgfVxuXG4gICAgICAvL2VpdGhlciB3YXksIHJlZHVjZSB0aGUgY291bnQgb2YgdGlsZXNUb1Byb2Nlc3MgdGlsZXMgaGVyZVxuICAgICAgc2VsZi5yZWR1Y2VUaWxlc1RvUHJvY2Vzc0NvdW50KCk7XG4gICAgfTtcblxuICAgIHhoci5vbmVycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgICBjb25zb2xlLmxvZyhcInhociBlcnJvcjogXCIgKyB4aHIuc3RhdHVzKVxuICAgIH07XG5cbiAgICB4aHIub3BlbignR0VUJywgc3JjLCB0cnVlKTsgLy9hc3luYyBpcyB0cnVlXG4gICAgeGhyLnJlc3BvbnNlVHlwZSA9ICdhcnJheWJ1ZmZlcic7XG4gICAgeGhyLnNlbmQoKTtcbiAgfSxcblxuICByZWR1Y2VUaWxlc1RvUHJvY2Vzc0NvdW50OiBmdW5jdGlvbigpe1xuICAgIHRoaXMuX3RpbGVzVG9Qcm9jZXNzLS07XG4gICAgaWYoIXRoaXMuX3RpbGVzVG9Qcm9jZXNzKXtcbiAgICAgIC8vVHJpZ2dlciBldmVudCBsZXR0aW5nIHVzIGtub3cgdGhhdCBhbGwgUEJGcyBoYXZlIGJlZW4gbG9hZGVkIGFuZCBwcm9jZXNzZWQgKG9yIDQwNCdkKS5cbiAgICAgIGlmKHRoaXMuX2V2ZW50SGFuZGxlcnNbXCJQQkZMb2FkXCJdKSB0aGlzLl9ldmVudEhhbmRsZXJzW1wiUEJGTG9hZFwiXSgpO1xuICAgICAgdGhpcy5fcGJmTG9hZGVkKCk7XG4gICAgfVxuICB9LFxuXG4gIGNoZWNrVmVjdG9yVGlsZUxheWVyczogZnVuY3Rpb24odnQsIGN0eCwgcGFyc2VkKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgLy9DaGVjayBpZiB0aGVyZSBhcmUgc3BlY2lmaWVkIHZpc2libGUgbGF5ZXJzXG4gICAgaWYoc2VsZi5vcHRpb25zLnZpc2libGVMYXllcnMgJiYgc2VsZi5vcHRpb25zLnZpc2libGVMYXllcnMubGVuZ3RoID4gMCl7XG4gICAgICAvL29ubHkgbGV0IHRocnUgdGhlIGxheWVycyBsaXN0ZWQgaW4gdGhlIHZpc2libGVMYXllcnMgYXJyYXlcbiAgICAgIGZvcih2YXIgaT0wOyBpIDwgc2VsZi5vcHRpb25zLnZpc2libGVMYXllcnMubGVuZ3RoOyBpKyspe1xuICAgICAgICB2YXIgbGF5ZXJOYW1lID0gc2VsZi5vcHRpb25zLnZpc2libGVMYXllcnNbaV07XG4gICAgICAgIGlmKHZ0LmxheWVyc1tsYXllck5hbWVdKXtcbiAgICAgICAgICAgLy9Qcm9jZWVkIHdpdGggcGFyc2luZ1xuICAgICAgICAgIHNlbGYucHJlcGFyZU1WVExheWVycyh2dC5sYXllcnNbbGF5ZXJOYW1lXSwgbGF5ZXJOYW1lLCBjdHgsIHBhcnNlZCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9ZWxzZXtcbiAgICAgIC8vUGFyc2UgYWxsIHZ0LmxheWVyc1xuICAgICAgZm9yICh2YXIga2V5IGluIHZ0LmxheWVycykge1xuICAgICAgICBzZWxmLnByZXBhcmVNVlRMYXllcnModnQubGF5ZXJzW2tleV0sIGtleSwgY3R4LCBwYXJzZWQpO1xuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICBwcmVwYXJlTVZUTGF5ZXJzOiBmdW5jdGlvbihseXIgLGtleSwgY3R4LCBwYXJzZWQpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICBpZiAoIXNlbGYubGF5ZXJzW2tleV0pIHtcbiAgICAgIC8vQ3JlYXRlIE1WVExheWVyIG9yIE1WVFBvaW50TGF5ZXIgZm9yIHVzZXJcbiAgICAgIHNlbGYubGF5ZXJzW2tleV0gPSBzZWxmLmNyZWF0ZU1WVExheWVyKGtleSwgbHlyLnBhcnNlZEZlYXR1cmVzWzBdLnR5cGUgfHwgbnVsbCk7XG4gICAgfVxuXG4gICAgaWYgKHBhcnNlZCkge1xuICAgICAgLy9XZSd2ZSBhbHJlYWR5IHBhcnNlZCBpdC4gIEdvIGdldCBjYW52YXMgYW5kIGRyYXcuXG4gICAgICBzZWxmLmxheWVyc1trZXldLmdldENhbnZhcyhjdHgsIGx5cik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNlbGYubGF5ZXJzW2tleV0ucGFyc2VWZWN0b3JUaWxlTGF5ZXIobHlyLCBjdHgpO1xuICAgIH1cblxuICB9LFxuXG4gIGNyZWF0ZU1WVExheWVyOiBmdW5jdGlvbihrZXksIHR5cGUpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICB2YXIgZ2V0SURGb3JMYXllckZlYXR1cmU7XG4gICAgaWYgKHR5cGVvZiBzZWxmLm9wdGlvbnMuZ2V0SURGb3JMYXllckZlYXR1cmUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGdldElERm9yTGF5ZXJGZWF0dXJlID0gc2VsZi5vcHRpb25zLmdldElERm9yTGF5ZXJGZWF0dXJlO1xuICAgIH0gZWxzZSB7XG4gICAgICBnZXRJREZvckxheWVyRmVhdHVyZSA9IFV0aWwuZ2V0SURGb3JMYXllckZlYXR1cmU7XG4gICAgfVxuXG4gICAgdmFyIG9wdGlvbnMgPSB7XG4gICAgICBnZXRJREZvckxheWVyRmVhdHVyZTogZ2V0SURGb3JMYXllckZlYXR1cmUsXG4gICAgICBmaWx0ZXI6IHNlbGYub3B0aW9ucy5maWx0ZXIsXG4gICAgICBsYXllck9yZGVyaW5nOiBzZWxmLm9wdGlvbnMubGF5ZXJPcmRlcmluZyxcbiAgICAgIHN0eWxlOiBzZWxmLnN0eWxlLFxuICAgICAgbmFtZToga2V5LFxuICAgICAgYXN5bmNoOiB0cnVlXG4gICAgfTtcblxuICAgIGlmIChzZWxmLm9wdGlvbnMuekluZGV4KSB7XG4gICAgICBvcHRpb25zLnpJbmRleCA9IHNlbGYuekluZGV4O1xuICAgIH1cblxuICAgIC8vVGFrZSB0aGUgbGF5ZXIgYW5kIGNyZWF0ZSBhIG5ldyBNVlRMYXllciBvciBNVlRQb2ludExheWVyIGlmIG9uZSBkb2Vzbid0IGV4aXN0LlxuICAgIHZhciBsYXllciA9IG5ldyBNVlRMYXllcihzZWxmLCBvcHRpb25zKS5hZGRUbyhzZWxmLm1hcCk7XG5cbiAgICByZXR1cm4gbGF5ZXI7XG4gIH0sXG5cbiAgZ2V0TGF5ZXJzOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5sYXllcnM7XG4gIH0sXG5cbiAgaGlkZUxheWVyOiBmdW5jdGlvbihpZCkge1xuICAgIGlmICh0aGlzLmxheWVyc1tpZF0pIHtcbiAgICAgIHRoaXMuX21hcC5yZW1vdmVMYXllcih0aGlzLmxheWVyc1tpZF0pO1xuICAgICAgaWYodGhpcy5vcHRpb25zLnZpc2libGVMYXllcnMuaW5kZXhPZihcImlkXCIpID4gLTEpe1xuICAgICAgICB0aGlzLnZpc2libGVMYXllcnMuc3BsaWNlKHRoaXMub3B0aW9ucy52aXNpYmxlTGF5ZXJzLmluZGV4T2YoXCJpZFwiKSwgMSk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIHNob3dMYXllcjogZnVuY3Rpb24oaWQpIHtcbiAgICBpZiAodGhpcy5sYXllcnNbaWRdKSB7XG4gICAgICB0aGlzLl9tYXAuYWRkTGF5ZXIodGhpcy5sYXllcnNbaWRdKTtcbiAgICAgIGlmKHRoaXMub3B0aW9ucy52aXNpYmxlTGF5ZXJzLmluZGV4T2YoXCJpZFwiKSA9PSAtMSl7XG4gICAgICAgIHRoaXMudmlzaWJsZUxheWVycy5wdXNoKGlkKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy9NYWtlIHN1cmUgbWFuYWdlciBsYXllciBpcyBhbHdheXMgaW4gZnJvbnRcbiAgICB0aGlzLmJyaW5nVG9Gcm9udCgpO1xuICB9LFxuXG4gIHJlbW92ZUNoaWxkTGF5ZXJzOiBmdW5jdGlvbihtYXApe1xuICAgIC8vUmVtb3ZlIGNoaWxkIGxheWVycyBvZiB0aGlzIGdyb3VwIGxheWVyXG4gICAgZm9yICh2YXIga2V5IGluIHRoaXMubGF5ZXJzKSB7XG4gICAgICB2YXIgbGF5ZXIgPSB0aGlzLmxheWVyc1trZXldO1xuICAgICAgbWFwLnJlbW92ZUxheWVyKGxheWVyKTtcbiAgICB9XG4gIH0sXG5cbiAgYWRkQ2hpbGRMYXllcnM6IGZ1bmN0aW9uKG1hcCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICBpZihzZWxmLm9wdGlvbnMudmlzaWJsZUxheWVycy5sZW5ndGggPiAwKXtcbiAgICAgIC8vb25seSBsZXQgdGhydSB0aGUgbGF5ZXJzIGxpc3RlZCBpbiB0aGUgdmlzaWJsZUxheWVycyBhcnJheVxuICAgICAgZm9yKHZhciBpPTA7IGkgPCBzZWxmLm9wdGlvbnMudmlzaWJsZUxheWVycy5sZW5ndGg7IGkrKyl7XG4gICAgICAgIHZhciBsYXllck5hbWUgPSBzZWxmLm9wdGlvbnMudmlzaWJsZUxheWVyc1tpXTtcbiAgICAgICAgdmFyIGxheWVyID0gdGhpcy5sYXllcnNbbGF5ZXJOYW1lXTtcbiAgICAgICAgaWYobGF5ZXIpe1xuICAgICAgICAgIC8vUHJvY2VlZCB3aXRoIHBhcnNpbmdcbiAgICAgICAgICBtYXAuYWRkTGF5ZXIobGF5ZXIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfWVsc2V7XG4gICAgICAvL0FkZCBhbGwgbGF5ZXJzXG4gICAgICBmb3IgKHZhciBrZXkgaW4gdGhpcy5sYXllcnMpIHtcbiAgICAgICAgdmFyIGxheWVyID0gdGhpcy5sYXllcnNba2V5XTtcbiAgICAgICAgLy8gbGF5ZXIgaXMgc2V0IHRvIHZpc2libGUgYW5kIGlzIG5vdCBhbHJlYWR5IG9uIG1hcFxuICAgICAgICBpZiAoIWxheWVyLl9tYXApIHtcbiAgICAgICAgICBtYXAuYWRkTGF5ZXIobGF5ZXIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIGJpbmQ6IGZ1bmN0aW9uKGV2ZW50VHlwZSwgY2FsbGJhY2spIHtcbiAgICB0aGlzLl9ldmVudEhhbmRsZXJzW2V2ZW50VHlwZV0gPSBjYWxsYmFjaztcbiAgfSxcblxuICBfb25DbGljazogZnVuY3Rpb24oZXZ0KSB7XG4gICAgLy9IZXJlLCBwYXNzIHRoZSBldmVudCBvbiB0byB0aGUgY2hpbGQgTVZUTGF5ZXIgYW5kIGhhdmUgaXQgZG8gdGhlIGhpdCB0ZXN0IGFuZCBoYW5kbGUgdGhlIHJlc3VsdC5cbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdmFyIG9uQ2xpY2sgPSBzZWxmLm9wdGlvbnMub25DbGljaztcbiAgICB2YXIgY2xpY2thYmxlTGF5ZXJzID0gc2VsZi5vcHRpb25zLmNsaWNrYWJsZUxheWVycztcbiAgICB2YXIgbGF5ZXJzID0gc2VsZi5sYXllcnM7XG5cbiAgICBldnQudGlsZUlEID0gIGdldFRpbGVVUkwoZXZ0LmxhdGxuZy5sYXQsIGV2dC5sYXRsbmcubG5nLCB0aGlzLm1hcC5nZXRab29tKCkpO1xuXG4gICAgLy8gV2UgbXVzdCBoYXZlIGFuIGFycmF5IG9mIGNsaWNrYWJsZSBsYXllcnMsIG90aGVyd2lzZSwgd2UganVzdCBwYXNzXG4gICAgLy8gdGhlIGV2ZW50IHRvIHRoZSBwdWJsaWMgb25DbGljayBjYWxsYmFjayBpbiBvcHRpb25zLlxuXG4gICAgaWYoIWNsaWNrYWJsZUxheWVycyl7XG4gICAgICBjbGlja2FibGVMYXllcnMgPSBPYmplY3Qua2V5cyhzZWxmLmxheWVycyk7XG4gICAgfVxuXG4gICAgaWYgKGNsaWNrYWJsZUxheWVycyAmJiBjbGlja2FibGVMYXllcnMubGVuZ3RoID4gMCkge1xuICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGNsaWNrYWJsZUxheWVycy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICB2YXIga2V5ID0gY2xpY2thYmxlTGF5ZXJzW2ldO1xuICAgICAgICB2YXIgbGF5ZXIgPSBsYXllcnNba2V5XTtcbiAgICAgICAgaWYgKGxheWVyKSB7XG4gICAgICAgICAgbGF5ZXIuaGFuZGxlQ2xpY2tFdmVudChldnQsIGZ1bmN0aW9uKGV2dCkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBvbkNsaWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgIG9uQ2xpY2soZXZ0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodHlwZW9mIG9uQ2xpY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgb25DbGljayhldnQpO1xuICAgICAgfVxuICAgIH1cblxuICB9LFxuXG4gIHNldEZpbHRlcjogZnVuY3Rpb24oZmlsdGVyRnVuY3Rpb24sIGxheWVyTmFtZSkge1xuICAgIC8vdGFrZSBpbiBhIG5ldyBmaWx0ZXIgZnVuY3Rpb24uXG4gICAgLy9Qcm9wYWdhdGUgdG8gY2hpbGQgbGF5ZXJzLlxuXG4gICAgLy9BZGQgZmlsdGVyIHRvIGFsbCBjaGlsZCBsYXllcnMgaWYgbm8gbGF5ZXIgaXMgc3BlY2lmaWVkLlxuICAgIGZvciAodmFyIGtleSBpbiB0aGlzLmxheWVycykge1xuICAgICAgdmFyIGxheWVyID0gdGhpcy5sYXllcnNba2V5XTtcblxuICAgICAgaWYgKGxheWVyTmFtZSl7XG4gICAgICAgIGlmKGtleS50b0xvd2VyQ2FzZSgpID09IGxheWVyTmFtZS50b0xvd2VyQ2FzZSgpKXtcbiAgICAgICAgICBsYXllci5vcHRpb25zLmZpbHRlciA9IGZpbHRlckZ1bmN0aW9uOyAvL0Fzc2lnbiBmaWx0ZXIgdG8gY2hpbGQgbGF5ZXIsIG9ubHkgaWYgbmFtZSBtYXRjaGVzXG4gICAgICAgICAgLy9BZnRlciBmaWx0ZXIgaXMgc2V0LCB0aGUgb2xkIGZlYXR1cmUgaGFzaGVzIGFyZSBpbnZhbGlkLiAgQ2xlYXIgdGhlbSBmb3IgbmV4dCBkcmF3LlxuICAgICAgICAgIGxheWVyLmNsZWFyTGF5ZXJGZWF0dXJlSGFzaCgpO1xuICAgICAgICAgIC8vbGF5ZXIuY2xlYXJUaWxlRmVhdHVyZUhhc2goKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZXtcbiAgICAgICAgbGF5ZXIub3B0aW9ucy5maWx0ZXIgPSBmaWx0ZXJGdW5jdGlvbjsgLy9Bc3NpZ24gZmlsdGVyIHRvIGNoaWxkIGxheWVyXG4gICAgICAgIC8vQWZ0ZXIgZmlsdGVyIGlzIHNldCwgdGhlIG9sZCBmZWF0dXJlIGhhc2hlcyBhcmUgaW52YWxpZC4gIENsZWFyIHRoZW0gZm9yIG5leHQgZHJhdy5cbiAgICAgICAgbGF5ZXIuY2xlYXJMYXllckZlYXR1cmVIYXNoKCk7XG4gICAgICAgIC8vbGF5ZXIuY2xlYXJUaWxlRmVhdHVyZUhhc2goKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIFRha2UgaW4gYSBuZXcgc3R5bGUgZnVuY3Rpb24gYW5kIHByb3BvZ2F0ZSB0byBjaGlsZCBsYXllcnMuXG4gICAqIElmIHlvdSBkbyBub3Qgc2V0IGEgbGF5ZXIgbmFtZSwgaXQgcmVzZXRzIHRoZSBzdHlsZSBmb3IgYWxsIG9mIHRoZSBsYXllcnMuXG4gICAqIEBwYXJhbSBzdHlsZUZ1bmN0aW9uXG4gICAqIEBwYXJhbSBsYXllck5hbWVcbiAgICovXG4gIHNldFN0eWxlOiBmdW5jdGlvbihzdHlsZUZuLCBsYXllck5hbWUpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gdGhpcy5sYXllcnMpIHtcbiAgICAgIHZhciBsYXllciA9IHRoaXMubGF5ZXJzW2tleV07XG4gICAgICBpZiAobGF5ZXJOYW1lKSB7XG4gICAgICAgIGlmKGtleS50b0xvd2VyQ2FzZSgpID09IGxheWVyTmFtZS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICAgICAgbGF5ZXIuc2V0U3R5bGUoc3R5bGVGbik7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxheWVyLnNldFN0eWxlKHN0eWxlRm4pO1xuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICBmZWF0dXJlU2VsZWN0ZWQ6IGZ1bmN0aW9uKG12dEZlYXR1cmUpIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLm11dGV4VG9nZ2xlKSB7XG4gICAgICBpZiAodGhpcy5fc2VsZWN0ZWRGZWF0dXJlKSB7XG4gICAgICAgIHRoaXMuX3NlbGVjdGVkRmVhdHVyZS5kZXNlbGVjdCgpO1xuICAgICAgfVxuICAgICAgdGhpcy5fc2VsZWN0ZWRGZWF0dXJlID0gbXZ0RmVhdHVyZTtcbiAgICB9XG4gICAgaWYgKHRoaXMub3B0aW9ucy5vblNlbGVjdCkge1xuICAgICAgdGhpcy5vcHRpb25zLm9uU2VsZWN0KG12dEZlYXR1cmUpO1xuICAgIH1cbiAgfSxcblxuICBmZWF0dXJlRGVzZWxlY3RlZDogZnVuY3Rpb24obXZ0RmVhdHVyZSkge1xuICAgIGlmICh0aGlzLm9wdGlvbnMubXV0ZXhUb2dnbGUgJiYgdGhpcy5fc2VsZWN0ZWRGZWF0dXJlKSB7XG4gICAgICB0aGlzLl9zZWxlY3RlZEZlYXR1cmUgPSBudWxsO1xuICAgIH1cbiAgICBpZiAodGhpcy5vcHRpb25zLm9uRGVzZWxlY3QpIHtcbiAgICAgIHRoaXMub3B0aW9ucy5vbkRlc2VsZWN0KG12dEZlYXR1cmUpO1xuICAgIH1cbiAgfSxcblxuICBfcGJmTG9hZGVkOiBmdW5jdGlvbigpIHtcbiAgICAvL0ZpcmVzIHdoZW4gYWxsIHRpbGVzIGZyb20gdGhpcyBsYXllciBoYXZlIGJlZW4gbG9hZGVkIGFuZCBkcmF3biAob3IgNDA0J2QpLlxuXG4gICAgLy9NYWtlIHN1cmUgbWFuYWdlciBsYXllciBpcyBhbHdheXMgaW4gZnJvbnRcbiAgICB0aGlzLmJyaW5nVG9Gcm9udCgpO1xuXG4gICAgLy9TZWUgaWYgdGhlcmUgaXMgYW4gZXZlbnQgdG8gZXhlY3V0ZVxuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB2YXIgb25UaWxlc0xvYWRlZCA9IHNlbGYub3B0aW9ucy5vblRpbGVzTG9hZGVkO1xuXG4gICAgaWYgKG9uVGlsZXNMb2FkZWQgJiYgdHlwZW9mIG9uVGlsZXNMb2FkZWQgPT09ICdmdW5jdGlvbicgJiYgdGhpcy5fdHJpZ2dlck9uVGlsZXNMb2FkZWRFdmVudCA9PT0gdHJ1ZSkge1xuICAgICAgb25UaWxlc0xvYWRlZCh0aGlzKTtcbiAgICB9XG4gICAgc2VsZi5fdHJpZ2dlck9uVGlsZXNMb2FkZWRFdmVudCA9IHRydWU7IC8vcmVzZXQgLSBpZiByZWRyYXcoKSBpcyBjYWxsZWQgd2l0aCB0aGUgb3B0aW5hbCAnZmFsc2UnIHBhcmFtZXRlciB0byB0ZW1wb3JhcmlseSBkaXNhYmxlIHRoZSBvblRpbGVzTG9hZGVkIGV2ZW50IGZyb20gZmlyaW5nLiAgVGhpcyByZXNldHMgaXQgYmFjayB0byB0cnVlIGFmdGVyIGEgc2luZ2xlIHRpbWUgb2YgZmlyaW5nIGFzICdmYWxzZScuXG4gIH1cblxufSk7XG5cblxuaWYgKHR5cGVvZihOdW1iZXIucHJvdG90eXBlLnRvUmFkKSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICBOdW1iZXIucHJvdG90eXBlLnRvUmFkID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMgKiBNYXRoLlBJIC8gMTgwO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldFRpbGVVUkwobGF0LCBsb24sIHpvb20pIHtcbiAgdmFyIHh0aWxlID0gcGFyc2VJbnQoTWF0aC5mbG9vciggKGxvbiArIDE4MCkgLyAzNjAgKiAoMTw8em9vbSkgKSk7XG4gIHZhciB5dGlsZSA9IHBhcnNlSW50KE1hdGguZmxvb3IoICgxIC0gTWF0aC5sb2coTWF0aC50YW4obGF0LnRvUmFkKCkpICsgMSAvIE1hdGguY29zKGxhdC50b1JhZCgpKSkgLyBNYXRoLlBJKSAvIDIgKiAoMTw8em9vbSkgKSk7XG4gIHJldHVybiBcIlwiICsgem9vbSArIFwiOlwiICsgeHRpbGUgKyBcIjpcIiArIHl0aWxlO1xufVxuXG5mdW5jdGlvbiB0aWxlTG9hZGVkKHBiZlNvdXJjZSwgY3R4KSB7XG4gIHBiZlNvdXJjZS5sb2FkZWRUaWxlc1tjdHguaWRdID0gY3R4O1xufVxuXG5mdW5jdGlvbiBwYXJzZVZUKHZ0KXtcbiAgZm9yICh2YXIga2V5IGluIHZ0LmxheWVycykge1xuICAgIHZhciBseXIgPSB2dC5sYXllcnNba2V5XTtcbiAgICBwYXJzZVZURmVhdHVyZXMobHlyKTtcbiAgfVxuICByZXR1cm4gdnQ7XG59XG5cbmZ1bmN0aW9uIHBhcnNlVlRGZWF0dXJlcyh2dGwpe1xuICB2dGwucGFyc2VkRmVhdHVyZXMgPSBbXTtcbiAgdmFyIGZlYXR1cmVzID0gdnRsLl9mZWF0dXJlcztcbiAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGZlYXR1cmVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgdmFyIHZ0ZiA9IHZ0bC5mZWF0dXJlKGkpO1xuICAgIHZ0Zi5jb29yZGluYXRlcyA9IHZ0Zi5sb2FkR2VvbWV0cnkoKTtcbiAgICB2dGwucGFyc2VkRmVhdHVyZXMucHVzaCh2dGYpO1xuICB9XG4gIHJldHVybiB2dGw7XG59XG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgTmljaG9sYXMgSGFsbGFoYW4gPG5oYWxsYWhhbkBzcGF0aWFsZGV2LmNvbT5cbiAqICAgICAgIG9uIDgvMTUvMTQuXG4gKi9cbnZhciBVdGlsID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuVXRpbC5nZXRDb250ZXh0SUQgPSBmdW5jdGlvbihjdHgpIHtcbiAgcmV0dXJuIFtjdHguem9vbSwgY3R4LnRpbGUueCwgY3R4LnRpbGUueV0uam9pbihcIjpcIik7XG59O1xuXG4vKipcbiAqIERlZmF1bHQgZnVuY3Rpb24gdGhhdCBnZXRzIHRoZSBpZCBmb3IgYSBsYXllciBmZWF0dXJlLlxuICogU29tZXRpbWVzIHRoaXMgbmVlZHMgdG8gYmUgZG9uZSBpbiBhIGRpZmZlcmVudCB3YXkgYW5kXG4gKiBjYW4gYmUgc3BlY2lmaWVkIGJ5IHRoZSB1c2VyIGluIHRoZSBvcHRpb25zIGZvciBMLlRpbGVMYXllci5NVlRTb3VyY2UuXG4gKlxuICogQHBhcmFtIGZlYXR1cmVcbiAqIEByZXR1cm5zIHtjdHguaWR8KnxpZHxzdHJpbmd8anN0cy5pbmRleC5jaGFpbi5Nb25vdG9uZUNoYWluLmlkfG51bWJlcn1cbiAqL1xuVXRpbC5nZXRJREZvckxheWVyRmVhdHVyZSA9IGZ1bmN0aW9uKGZlYXR1cmUpIHtcbiAgcmV0dXJuIGZlYXR1cmUucHJvcGVydGllcy5pZDtcbn07XG5cblV0aWwuZ2V0SlNPTiA9IGZ1bmN0aW9uKHVybCwgY2FsbGJhY2spIHtcbiAgdmFyIHhtbGh0dHAgPSB0eXBlb2YgWE1MSHR0cFJlcXVlc3QgIT09ICd1bmRlZmluZWQnID8gbmV3IFhNTEh0dHBSZXF1ZXN0KCkgOiBuZXcgQWN0aXZlWE9iamVjdCgnTWljcm9zb2Z0LlhNTEhUVFAnKTtcbiAgeG1saHR0cC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgc3RhdHVzID0geG1saHR0cC5zdGF0dXM7XG4gICAgaWYgKHhtbGh0dHAucmVhZHlTdGF0ZSA9PT0gNCAmJiBzdGF0dXMgPj0gMjAwICYmIHN0YXR1cyA8IDMwMCkge1xuICAgICAgdmFyIGpzb24gPSBKU09OLnBhcnNlKHhtbGh0dHAucmVzcG9uc2VUZXh0KTtcbiAgICAgIGNhbGxiYWNrKG51bGwsIGpzb24pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjYWxsYmFjayggeyBlcnJvcjogdHJ1ZSwgc3RhdHVzOiBzdGF0dXMgfSApO1xuICAgIH1cbiAgfTtcbiAgeG1saHR0cC5vcGVuKFwiR0VUXCIsIHVybCwgdHJ1ZSk7XG4gIHhtbGh0dHAuc2VuZCgpO1xufTtcbiIsIi8qKlxuICogQ3JlYXRlZCBieSBOaWNob2xhcyBIYWxsYWhhbiA8bmhhbGxhaGFuQHNwYXRpYWxkZXYuY29tPlxuICogICAgICAgb24gNy8zMS8xNC5cbiAqL1xudmFyIFV0aWwgPSByZXF1aXJlKCcuLi9NVlRVdGlsJyk7XG5tb2R1bGUuZXhwb3J0cyA9IFN0YXRpY0xhYmVsO1xuXG5mdW5jdGlvbiBTdGF0aWNMYWJlbChtdnRGZWF0dXJlLCBjdHgsIGxhdExuZywgc3R5bGUpIHtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICB0aGlzLm12dEZlYXR1cmUgPSBtdnRGZWF0dXJlO1xuICB0aGlzLm1hcCA9IG12dEZlYXR1cmUubWFwO1xuICB0aGlzLnpvb20gPSBjdHguem9vbTtcbiAgdGhpcy5sYXRMbmcgPSBsYXRMbmc7XG4gIHRoaXMuc2VsZWN0ZWQgPSBmYWxzZTtcblxuICBpZiAobXZ0RmVhdHVyZS5saW5rZWRGZWF0dXJlKSB7XG4gICAgdmFyIGxpbmtlZEZlYXR1cmUgPSBtdnRGZWF0dXJlLmxpbmtlZEZlYXR1cmUoKTtcbiAgICBpZiAobGlua2VkRmVhdHVyZSAmJiBsaW5rZWRGZWF0dXJlLnNlbGVjdGVkKSB7XG4gICAgICBzZWxmLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBpbml0KHNlbGYsIG12dEZlYXR1cmUsIGN0eCwgbGF0TG5nLCBzdHlsZSlcbn1cblxuZnVuY3Rpb24gaW5pdChzZWxmLCBtdnRGZWF0dXJlLCBjdHgsIGxhdExuZywgc3R5bGUpIHtcbiAgdmFyIGFqYXhEYXRhID0gbXZ0RmVhdHVyZS5hamF4RGF0YTtcbiAgdmFyIHN0eSA9IHNlbGYuc3R5bGUgPSBzdHlsZS5zdGF0aWNMYWJlbChtdnRGZWF0dXJlLCBhamF4RGF0YSk7XG4gIHZhciBpY29uID0gc2VsZi5pY29uID0gTC5kaXZJY29uKHtcbiAgICBjbGFzc05hbWU6IHN0eS5jc3NDbGFzcyB8fCAnbGFiZWwtaWNvbi10ZXh0JyxcbiAgICBodG1sOiBzdHkuaHRtbCxcbiAgICBpY29uU2l6ZTogc3R5Lmljb25TaXplIHx8IFs1MCw1MF1cbiAgfSk7XG5cbiAgc2VsZi5tYXJrZXIgPSBMLm1hcmtlcihsYXRMbmcsIHtpY29uOiBpY29ufSkuYWRkVG8oc2VsZi5tYXApO1xuXG4gIGlmIChzZWxmLnNlbGVjdGVkKSB7XG4gICAgc2VsZi5tYXJrZXIuX2ljb24uY2xhc3NMaXN0LmFkZChzZWxmLnN0eWxlLmNzc1NlbGVjdGVkQ2xhc3MgfHwgJ2xhYmVsLWljb24tdGV4dC1zZWxlY3RlZCcpO1xuICB9XG5cbiAgc2VsZi5tYXJrZXIub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIHNlbGYudG9nZ2xlKCk7XG4gIH0pO1xuXG4gIHNlbGYubWFwLm9uKCd6b29tZW5kJywgZnVuY3Rpb24oZSkge1xuICAgIHZhciBuZXdab29tID0gZS50YXJnZXQuZ2V0Wm9vbSgpO1xuICAgIGlmIChzZWxmLnpvb20gIT09IG5ld1pvb20pIHtcbiAgICAgIHNlbGYubWFwLnJlbW92ZUxheWVyKHNlbGYubWFya2VyKTtcbiAgICB9XG4gIH0pO1xufVxuXG5cblN0YXRpY0xhYmVsLnByb3RvdHlwZS50b2dnbGUgPSBmdW5jdGlvbigpIHtcbiAgaWYgKHRoaXMuc2VsZWN0ZWQpIHtcbiAgICB0aGlzLmRlc2VsZWN0KCk7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5zZWxlY3QoKTtcbiAgfVxufTtcblxuU3RhdGljTGFiZWwucHJvdG90eXBlLnNlbGVjdCA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLnNlbGVjdGVkID0gdHJ1ZTtcbiAgdGhpcy5tYXJrZXIuX2ljb24uY2xhc3NMaXN0LmFkZCh0aGlzLnN0eWxlLmNzc1NlbGVjdGVkQ2xhc3MgfHwgJ2xhYmVsLWljb24tdGV4dC1zZWxlY3RlZCcpO1xuICB2YXIgbGlua2VkRmVhdHVyZSA9IHRoaXMubXZ0RmVhdHVyZS5saW5rZWRGZWF0dXJlKCk7XG4gIGlmICghbGlua2VkRmVhdHVyZS5zZWxlY3RlZCkgbGlua2VkRmVhdHVyZS5zZWxlY3QoKTtcbn07XG5cblN0YXRpY0xhYmVsLnByb3RvdHlwZS5kZXNlbGVjdCA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLnNlbGVjdGVkID0gZmFsc2U7XG4gIHRoaXMubWFya2VyLl9pY29uLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5zdHlsZS5jc3NTZWxlY3RlZENsYXNzIHx8ICdsYWJlbC1pY29uLXRleHQtc2VsZWN0ZWQnKTtcbiAgdmFyIGxpbmtlZEZlYXR1cmUgPSB0aGlzLm12dEZlYXR1cmUubGlua2VkRmVhdHVyZSgpO1xuICBpZiAobGlua2VkRmVhdHVyZS5zZWxlY3RlZCkgbGlua2VkRmVhdHVyZS5kZXNlbGVjdCgpO1xufTtcblxuU3RhdGljTGFiZWwucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uKCkge1xuICBpZiAoIXRoaXMubWFwIHx8ICF0aGlzLm1hcmtlcikgcmV0dXJuO1xuICB0aGlzLm1hcC5yZW1vdmVMYXllcih0aGlzLm1hcmtlcik7XG59O1xuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IE5pY2hvbGFzIEhhbGxhaGFuIDxuaGFsbGFoYW5Ac3BhdGlhbGRldi5jb20+XG4gKiAgICAgICBvbiA0LzcvMTQuXG4gKi9cblxudmFyIGZlYXR1cmVsYWJlbCA9IHJlcXVpcmUoJy4vZmVhdHVyZWxhYmVsJyk7XG52YXIgZmVhdHVyZVNldHMgPSBmZWF0dXJlbGFiZWwuZmVhdHVyZVNldHM7XG52YXIgTGFiZWwgPSByZXF1aXJlKCcuL0xhYmVsLmpzJyk7XG5cblxuZnVuY3Rpb24gRmVhdHVyZVNldCgpIHtcbiAgdGhpcy5mZWF0dXJlcyA9IFtdO1xuICB0aGlzLl9wYXRoSWRIYXNoID0ge307XG4gIGZlYXR1cmVTZXRzLnB1c2godGhpcyk7XG4gIHRoaXMuc2VsZWN0ZWRGZWF0dXJlTGF5ZXIgPSBudWxsO1xuICB0aGlzLnNlbGVjdGVkSWNvbiA9IG51bGw7XG59XG5tb2R1bGUuZXhwb3J0cyA9IEZlYXR1cmVTZXQ7XG5cblxuRmVhdHVyZVNldC5wcm90b3R5cGUuYWRkRmVhdHVyZSA9IGZ1bmN0aW9uIChmZWF0dXJlTGF5ZXIsIGdlb2pzb25MYXllcikge1xuICBmZWF0dXJlTGF5ZXIuZ2VvanNvbkxheWVyID0gZ2VvanNvbkxheWVyO1xuICBpZiAoIWZlYXR1cmVMYXllci5fbGVhZmxldF9pZCkge1xuICAgIEwuc3RhbXAoZmVhdHVyZUxheWVyKTtcbiAgfVxuICB0aGlzLmZlYXR1cmVzLnB1c2goZmVhdHVyZUxheWVyKTtcblxuICAvLyBmZWF0dXJlIGNvbnNpc3RzIG9mIG9uZSBwb2x5Z29uXG4gIGlmICghZmVhdHVyZUxheWVyLl9sYXllcnMpIHtcbiAgICB2YXIgbGVhZmxldElkID0gZmVhdHVyZUxheWVyLl9sZWFmbGV0X2lkO1xuICAgIHRoaXMuX3BhdGhJZEhhc2hbbGVhZmxldElkXSA9IGZlYXR1cmVMYXllcjtcbiAgfVxuXG4gIC8vIGZlYXR1cmUgY29uc2lzdHMgb2Ygc2V2ZXJhbCBwb2x5Z29uc1xuICBlbHNlIHtcbiAgICBmb3IgKHZhciBpZCBpbiBmZWF0dXJlTGF5ZXIuX2xheWVycykge1xuICAgICAgdmFyIHBhdGhMYXllciA9IGZlYXR1cmVMYXllci5fbGF5ZXJzW2lkXTtcbiAgICAgIHZhciBsZWFmbGV0SWQgPSBwYXRoTGF5ZXIuX2xlYWZsZXRfaWQ7XG4gICAgICB0aGlzLl9wYXRoSWRIYXNoW2xlYWZsZXRJZF0gPSBmZWF0dXJlTGF5ZXI7XG4gICAgfVxuICB9XG5cbn07XG5cblxuRmVhdHVyZVNldC5wcm90b3R5cGUuX3BhdGhVcGRhdGVkID0gZnVuY3Rpb24gKGxlYWZsZXRJZCkge1xuICB2YXIgZmVhdHVyZUxheWVyID0gdGhpcy5fcGF0aElkSGFzaFtsZWFmbGV0SWRdO1xuICAvLyB0aGUgaGFzaCBkb2Vzbid0IGFsd2F5cyBjYXRjaCB0aGUgaWQgaWYgdGhlIGdyYXBoaWMgaGFzIG5vdCB5ZXQgYmVlbiByZW5kZXJlZC5cbiAgaWYgKCFmZWF0dXJlTGF5ZXIpIHtcbiAgICB2YXIgZmVhdHVyZXMgPSB0aGlzLmZlYXR1cmVzO1xuICAgIGZvciAodmFyIGtleSBpbiBmZWF0dXJlcykge1xuICAgICAgdmFyIGZlYXQgPSB0aGlzLmZlYXR1cmVzW2tleV07XG4gICAgICBpZiAoZmVhdC5fbGVhZmxldF9pZCA9PT0gbGVhZmxldElkKSB7XG4gICAgICAgIGZlYXR1cmVMYXllciA9IGZlYXQ7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBwYXRoVXBkYXRlZChmZWF0dXJlTGF5ZXIsIHRoaXMpO1xufTtcblxuXG5mdW5jdGlvbiBwYXRoVXBkYXRlZChmZWF0dXJlTGF5ZXIsIGZlYXR1cmVTZXQpIHtcbiAgLy8gSWYgdGhlIGlkIGRvZXNudCBoYXNoLCBubyBwYXRoIGZvciB0aGUgZmVhdHVyZXMgaW4gb3VyIGZlYXR1cmUgc2V0IGFwcGx5LlxuICBpZiAoIWZlYXR1cmVMYXllcikge1xuICAgIC8vY29uc29sZS5lcnJvcigncGF0aFVwZGF0ZWQgZmVhdHVyZUxheWVyIGVtcHR5Jyk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGZlYXR1cmVMYXllci5fbGF5ZXJzKSB7XG5cbiAgICAvLyBvbmx5IGNhbGN1bGF0ZSBjZW50ZXIgYWZ0ZXIgYWxsIG9mIHRoZSBwb2x5Z29ucyBoYXZlIGJlZW4gdXBkYXRlZFxuICAgIGlmICghZmVhdHVyZUxheWVyLnBhdGhzVXBkYXRlZCkgZmVhdHVyZUxheWVyLnBhdGhzVXBkYXRlZCA9IDA7XG4gICAgKytmZWF0dXJlTGF5ZXIucGF0aHNVcGRhdGVkO1xuXG4gICAgaWYgKGZlYXR1cmVMYXllci5wYXRoc1VwZGF0ZWQgPT09IE9iamVjdC5rZXlzKGZlYXR1cmVMYXllci5fbGF5ZXJzKS5sZW5ndGgpIHtcbiAgICAgIHZhciBsID0gZmluZExhcmdlc3RMYXllcihmZWF0dXJlTGF5ZXIuX2xheWVycyk7XG5cbiAgICAgIGlmIChsKSB7XG4gICAgICAgIGZlYXR1cmVMYXllci5sYWJlbENlbnRlclBvaW50ID0gY2FsY3VsYXRlQ2VudGVyKGwuX3BhcnRzKTtcbiAgICAgICAgdXBkYXRlTGFiZWwoZmVhdHVyZUxheWVyLCBmZWF0dXJlU2V0KTtcbiAgICAgIH1cblxuICAgICAgZmVhdHVyZUxheWVyLnBhdGhzVXBkYXRlZCA9IDA7XG4gICAgfVxuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gdGhlcmUgaXMgb25seSBvbmUgcG9seWdvbiwgc28gY2FsY3VsYXRlIGNlbnRlci4gYWxzbyBjaGVjayB0byBzZWUgaWYgdGhlcmUgYXJlIHBhcnRzXG4gIGlmICggZmVhdHVyZUxheWVyLl9wYXJ0cyAmJiBmZWF0dXJlTGF5ZXIuX3BhcnRzLmxlbmd0aCApIHtcbiAgICBmZWF0dXJlTGF5ZXIubGFiZWxDZW50ZXJQb2ludCA9IGNhbGN1bGF0ZUNlbnRlcihmZWF0dXJlTGF5ZXIuX3BhcnRzKTtcbiAgICB1cGRhdGVMYWJlbChmZWF0dXJlTGF5ZXIsIGZlYXR1cmVTZXQpO1xuXG4gICAgcmV0dXJuO1xuICB9XG5cbn1cblxuXG5mdW5jdGlvbiBjcmVhdGVMYWJlbChmZWF0dXJlTGF5ZXIsIGZlYXR1cmVTZXQpIHtcbiAgdmFyIHBvaW50ID0gZmVhdHVyZUxheWVyLmxhYmVsQ2VudGVyUG9pbnQ7XG5cbiAgdmFyIHByb3BlcnRpZXMgPSBmZWF0dXJlTGF5ZXIuZmVhdHVyZS5wcm9wZXJ0aWVzO1xuICB2YXIgdGV4dCA9IHByb3BlcnRpZXMudGl0bGUgfHwgcHJvcGVydGllcy5uYW1lIHx8ICdMYWJlbCc7XG4gIGlmIChwcm9wZXJ0aWVzLmxhYmVsUHJvcGVydHkpIHtcbiAgICBpZiAodHlwZW9mIHByb3BlcnRpZXMubGFiZWxQcm9wZXJ0eSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGV4dCA9IHByb3BlcnRpZXMubGFiZWxQcm9wZXJ0eShwcm9wZXJ0aWVzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGV4dCA9IHByb3BlcnRpZXNbcHJvcGVydGllcy5sYWJlbFByb3BlcnR5XTtcbiAgICB9XG5cbiAgfVxuXG4gIC8vRGV0ZXJtaW5lIG1hcCBpY29uIGNsYXNzXG4gIHZhciBpY29uQ2xhc3MgPSBcImZlYXR1cmVsYWJlbC1pY29uLXRleHRcIjtcbiAgaWYgKHByb3BlcnRpZXNbXCJtYXAtaWNvbi1jbGFzc1wiXSkge1xuICAgICAgaWYgKHR5cGVvZiBwcm9wZXJ0aWVzW1wibWFwLWljb24tY2xhc3NcIl0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBpY29uQ2xhc3MgPSBwcm9wZXJ0aWVzW1wibWFwLWljb24tY2xhc3NcIl0ocHJvcGVydGllcyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIGljb25DbGFzcyA9IHByb3BlcnRpZXNbcHJvcGVydGllc1tcIm1hcC1pY29uLWNsYXNzXCJdXTtcbiAgICAgIH1cbiAgfVxuXG4gIC8vRGV0ZXJtaW5lIG1hcCBpY29uIHNpemVcbiAgdmFyIGljb25TaXplID0gWzM1LDM1XTtcbiAgaWYgKHByb3BlcnRpZXNbXCJtYXAtaWNvbi1zaXplXCJdKSB7XG4gICAgICBpZiAodHlwZW9mIHByb3BlcnRpZXNbXCJtYXAtaWNvbi1zaXplXCJdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgaWNvblNpemUgPSBwcm9wZXJ0aWVzW1wibWFwLWljb24tc2l6ZVwiXShwcm9wZXJ0aWVzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWNvblNpemUgPSBwcm9wZXJ0aWVzW3Byb3BlcnRpZXNbXCJtYXAtaWNvbi1zaXplXCJdXTtcbiAgICAgIH1cbiAgfVxuXG4gIGNvbnNvbGUubG9nKCdMQUJFTDogJyArIHRleHQgKyAnICgnICsgcG9pbnQueCArICcsICcgKyBwb2ludC55ICsgJykgJyArIHByb3BlcnRpZXMubmFtZSk7XG5cbiAgdmFyIGljb24gPSBMLmRpdkljb24oe1xuICAgIGNsYXNzTmFtZTogaWNvbkNsYXNzIHx8IFwiXCIsIC8vaWNvbkNsYXNzIHx8ICgkLmlzTnVtZXJpYyh0ZXh0KSA/ICdmZWF0dXJlbGFiZWwtaWNvbi1udW1iZXInIDogJ2ZlYXR1cmVsYWJlbC1pY29uLXRleHQnKSxcbiAgICBpY29uU2l6ZTogaWNvblNpemUsXG4gICAgaHRtbDogdGV4dFxuICB9KTtcblxuICB2YXIgbGFiZWwgPSBuZXcgTGFiZWwocG9pbnQsIGZlYXR1cmVMYXllciwge2ljb246aWNvbn0pO1xuXG4gIGxhYmVsLmNsZWFyQWxsRXZlbnRMaXN0ZW5lcnMoKTtcbiAgZmVhdHVyZUxheWVyLmNsZWFyQWxsRXZlbnRMaXN0ZW5lcnMoKTtcblxuICBsYWJlbC5vbignbW91c2VvdmVyJywgZnVuY3Rpb24oZSkge1xuICAgIG1vdXNlb3Zlcih0aGlzLCB0aGlzLmZlYXR1cmVMYXllcik7XG4gIH0pO1xuXG4gIGZlYXR1cmVMYXllci5vbignbW91c2VvdmVyJywgZnVuY3Rpb24gKGUpIHtcbiAgICBtb3VzZW92ZXIodGhpcy5sYWJlbCwgdGhpcyk7XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIHdoaXRlbkxhYmVsKGxhYmVsKSB7XG4gICAgaWYgKGxhYmVsLl9pY29uKSB7XG4gICAgICAvLyBsYWJlbCBpcyB0ZXh0IG9ubHksIG5vIGJhZGdlXG4gICAgICBpZiAobGFiZWwuX2ljb24uY2hpbGRyZW5bMF0uY2xhc3NOYW1lLmluZGV4T2YoJ2ZlYXR1cmVsYWJlbC1pY29uLXRleHQnKSA+IC0xKSB7XG4gICAgICAgIGxhYmVsLl9pY29uLmNoaWxkcmVuWzBdLnN0eWxlWydjb2xvciddID0gJ3JnYmEoMjU1LDI1NSwyNTUsMC43KSc7XG4gICAgICB9XG4gICAgICAvLyBsYWJlbCBoYXMgYSBiYWRnZVxuICAgICAgZWxzZSB7XG4gICAgICAgIGxhYmVsLl9pY29uLmNoaWxkcmVuWzBdLnN0eWxlWydib3gtc2hhZG93J10gPSAnMHB4IDBweCAwcHggNnB4IHJnYmEoMjU1LDI1NSwyNTUsMC43KSc7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ29sZGVuTGFiZWwobGFiZWwpIHtcbiAgICBpZiAobGFiZWwuX2ljb24pIHtcbiAgICAgIC8vIGxhYmVsIGlzIHRleHQgb25seSwgbm8gYmFkZ2VcbiAgICAgIGlmIChsYWJlbC5faWNvbi5jaGlsZHJlblswXS5jbGFzc05hbWUuaW5kZXhPZignZmVhdHVyZWxhYmVsLWljb24tdGV4dCcpID4gLTEpIHtcbiAgICAgICAgbGFiZWwuX2ljb24uY2hpbGRyZW5bMF0uc3R5bGVbJ2NvbG9yJ10gPSAncmdiYSgyMzcsMTc4LDQxLDAuOCknO1xuICAgICAgfVxuICAgICAgLy8gbGFiZWwgaGFzIGEgYmFkZ2VcbiAgICAgIGVsc2Uge1xuICAgICAgICBsYWJlbC5faWNvbi5jaGlsZHJlblswXS5zdHlsZVsnYm94LXNoYWRvdyddID0gJzBweCAwcHggMHB4IDZweCByZ2JhKDIzNywxNzgsNDEsMC44KSc7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVkZGVuTGFiZWwobGFiZWwpIHtcbiAgICBpZiAobGFiZWwuX2ljb24pIHtcbiAgICAgIC8vIGxhYmVsIGlzIHRleHQgb25seSwgbm8gYmFkZ2VcbiAgICAgIGlmIChsYWJlbC5faWNvbi5jaGlsZHJlblswXS5jbGFzc05hbWUuaW5kZXhPZignZmVhdHVyZWxhYmVsLWljb24tdGV4dCcpID4gLTEpIHtcbiAgICAgICAgbGFiZWwuX2ljb24uY2hpbGRyZW5bMF0uc3R5bGVbJ2NvbG9yJ10gPSAncmdiYSgyMzcsMjcsNDYsMC41KSc7XG4gICAgICB9XG4gICAgICAvLyBsYWJlbCBoYXMgYSBiYWRnZVxuICAgICAgZWxzZSB7XG4gICAgICAgIGxhYmVsLl9pY29uLmNoaWxkcmVuWzBdLnN0eWxlWydib3gtc2hhZG93J10gPSAnMHB4IDBweCAwcHggNnB4IHJnYmEoMjM3LDI3LDQ2LDAuNSknO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG1vdXNlb3ZlcihsYWJlbCwgZmVhdHVyZUxheWVyKSB7XG4gICAgaWYgKGZlYXR1cmVMYXllciAhPT0gZmVhdHVyZVNldC5zZWxlY3RlZEZlYXR1cmVMYXllcikge1xuXG4gICAgICBnb2xkZW5MYWJlbChsYWJlbCk7XG5cbiAgICAgIGZlYXR1cmVMYXllci5zZXRTdHlsZSh7XG4gICAgICAgIGNvbG9yOiAnI0VEQjIyOScgIC8vIGdvbGRcbiAgICAgIH0pO1xuICAgICAgZmVhdHVyZUxheWVyLmJyaW5nVG9Gcm9udCgpO1xuICAgIH1cbiAgfVxuXG4gIGxhYmVsLm9uKCdtb3VzZW91dCcsIGZ1bmN0aW9uKGUpIHtcbiAgICBtb3VzZW91dCh0aGlzLCB0aGlzLmZlYXR1cmVMYXllcik7XG4gIH0pO1xuXG4gIGZlYXR1cmVMYXllci5vbignbW91c2VvdXQnLCBmdW5jdGlvbiAoZSkge1xuICAgIG1vdXNlb3V0KHRoaXMubGFiZWwsIHRoaXMpO1xuICB9KTtcblxuICBmdW5jdGlvbiBtb3VzZW91dChsYWJlbCwgZmVhdHVyZUxheWVyKSB7XG4gICAgaWYgKGZlYXR1cmVMYXllciAhPT0gZmVhdHVyZVNldC5zZWxlY3RlZEZlYXR1cmVMYXllcikge1xuXG4gICAgICB3aGl0ZW5MYWJlbChsYWJlbCk7XG5cbiAgICAgIGZlYXR1cmVMYXllci5zZXRTdHlsZSh7XG4gICAgICAgIGNvbG9yOiBwcm9wZXJ0aWVzLmNvbG9yIHx8ICd3aGl0ZSdcbiAgICAgIH0pO1xuICAgICAgaWYgKGZlYXR1cmVTZXQuc2VsZWN0ZWRGZWF0dXJlTGF5ZXIpIHtcbiAgICAgICAgZmVhdHVyZVNldC5zZWxlY3RlZEZlYXR1cmVMYXllci5icmluZ1RvRnJvbnQoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZlYXR1cmVMYXllci5icmluZ1RvRnJvbnQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBsYWJlbC5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgIGNsaWNrKHRoaXMsIHRoaXMuZmVhdHVyZUxheWVyKTtcbiAgfSk7XG5cbiAgZmVhdHVyZUxheWVyLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgY2xpY2sodGhpcy5sYWJlbCwgdGhpcyk7XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIGNsaWNrKGxhYmVsLCBmZWF0dXJlTGF5ZXIpIHtcbiAgICAvLyBUVVJOIE9GRlxuICAgIGlmIChmZWF0dXJlTGF5ZXIgPT09IGZlYXR1cmVTZXQuc2VsZWN0ZWRGZWF0dXJlTGF5ZXIpIHtcblxuICAgICAgd2hpdGVuTGFiZWwobGFiZWwpO1xuXG4gICAgICBmZWF0dXJlTGF5ZXIuc2V0U3R5bGUoe1xuICAgICAgICBjb2xvcjogcHJvcGVydGllcy5jb2xvciB8fCAnd2hpdGUnXG4gICAgICB9KTtcbiAgICAgIGZlYXR1cmVMYXllci5icmluZ1RvRnJvbnQoKTtcbiAgICAgIGZlYXR1cmVTZXQuc2VsZWN0ZWRGZWF0dXJlTGF5ZXIgPSBudWxsO1xuICAgICAgaWYgKHByb3BlcnRpZXMgJiYgcHJvcGVydGllcy5vbkRlc2VsZWN0ICYmIHR5cGVvZiBwcm9wZXJ0aWVzLm9uRGVzZWxlY3QgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcHJvcGVydGllcy5vbkRlc2VsZWN0KGZlYXR1cmVMYXllcik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gVFVSTiBPTlxuICAgIGVsc2Uge1xuICAgICAgaWYgKGZlYXR1cmVTZXQuc2VsZWN0ZWRGZWF0dXJlTGF5ZXIpIHtcbiAgICAgICAgd2hpdGVuTGFiZWwoe19pY29uOiBmZWF0dXJlU2V0LnNlbGVjdGVkSWNvbn0pO1xuICAgICAgICBmZWF0dXJlU2V0LnNlbGVjdGVkRmVhdHVyZUxheWVyLnNldFN0eWxlKHtcbiAgICAgICAgICBjb2xvcjogcHJvcGVydGllcy5jb2xvciB8fCAnd2hpdGUnXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZWRkZW5MYWJlbChsYWJlbCk7XG5cbiAgICAgIC8vIHJlZCBjcm9zcyByZWQgI2VkMWIyZVxuICAgICAgZmVhdHVyZUxheWVyLnNldFN0eWxlKHtcbiAgICAgICAgY29sb3I6ICcjZDk1MzRmJyAvLyByZWRcbiAgICAgIH0pO1xuICAgICAgZmVhdHVyZUxheWVyLmJyaW5nVG9Gcm9udCgpO1xuICAgICAgZmVhdHVyZVNldC5zZWxlY3RlZEZlYXR1cmVMYXllciA9IGZlYXR1cmVMYXllcjtcbiAgICAgIGZlYXR1cmVTZXQuc2VsZWN0ZWRJY29uID0gbGFiZWwuX2ljb247XG4gICAgICBpZiAocHJvcGVydGllcyAmJiBwcm9wZXJ0aWVzLm9uU2VsZWN0ICYmIHR5cGVvZiBwcm9wZXJ0aWVzLm9uU2VsZWN0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHByb3BlcnRpZXMub25TZWxlY3QoZmVhdHVyZUxheWVyKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRml4ZXMgdGhlIGRvdWJsZSBsYWJlbCBidWcuXG4gICAqL1xuICBmZWF0dXJlTGF5ZXIuZ2VvanNvbkxheWVyLmFkZExheWVyKGxhYmVsKTtcblxuICAvKipcbiAgICogSWRlYWxseSB3ZSB3YW50IHRvIGJlIGFkZGluZyBsYWJlbHMgdG8gdGhlIGFjdHVhbCBsYXllciB0aGV5IGFyZSBvblxuICAgKiByYXRoZXIgdGhhbiB0aGUgcGFyZW50IEdlb0pTT04gbGF5ZXIuXG4gICAqL1xuLy8gICAgaWYgKCFmZWF0dXJlTGF5ZXIuYWRkTGF5ZXIpIHtcbi8vICAgICAgZmVhdHVyZUxheWVyLmdlb2pzb25MYXllci5hZGRMYXllcihsYWJlbCk7XG4vLyAgICB9IGVsc2Uge1xuLy8gICAgICBmZWF0dXJlTGF5ZXIuYWRkTGF5ZXIobGFiZWwpO1xuLy8gICAgfVxuXG4gIGZlYXR1cmVsYWJlbC5sYWJlbHNbZmVhdHVyZUxheWVyLmZlYXR1cmUucHJvcGVydGllcy5ndWlkXSA9IGxhYmVsO1xufVxuXG5cbmZ1bmN0aW9uIHVwZGF0ZUxhYmVsKGZlYXR1cmVMYXllciwgZmVhdHVyZVNldCkge1xuICBpZiAoICEgZmVhdHVyZUxheWVyLmxhYmVsICkge1xuICAgIGNyZWF0ZUxhYmVsKGZlYXR1cmVMYXllciwgZmVhdHVyZVNldCk7XG4gIH0gZWxzZSB7XG4gICAgZmVhdHVyZUxheWVyLmxhYmVsLnVwZGF0ZShmZWF0dXJlTGF5ZXIubGFiZWxDZW50ZXJQb2ludCk7XG4gIH1cbn1cblxuXG5mdW5jdGlvbiBjYWxjdWxhdGVDZW50ZXIocGFydHMpIHtcblxuICB2YXIgcGFydCA9IGZpbmRMYXJnZXN0UGFydChwYXJ0cyk7XG4gIHZhciBjZW50ZXIgPSBjZW50cm9pZChwYXJ0KTtcblxuICByZXR1cm4gY2VudGVyLnJvdW5kKCk7XG59XG5cblxuLy8gIGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQ2VudHJvaWQjQ2VudHJvaWRfb2ZfcG9seWdvblxuXG5mdW5jdGlvbiBhcmVhKHBhcnRBcnIpIHtcbiAgdmFyIGFyZWEgPSAwO1xuICB2YXIgbGVuID0gcGFydEFyci5sZW5ndGg7XG4gIGZvciAodmFyIGkgPSAwLCBqID0gbGVuIC0gMTsgaSA8IGxlbjsgaj1pLCBpKyspIHtcbiAgICB2YXIgcDEgPSBwYXJ0QXJyW2pdO1xuICAgIHZhciBwMiA9IHBhcnRBcnJbaV07XG5cbiAgICBhcmVhICs9IHAxLnggKiBwMi55IC0gcDIueCAqIHAxLnk7XG4gIH1cblxuICByZXR1cm4gYXJlYSAvIDI7XG59XG5cbi8qXG4gICAgTkggVE9ETzogV2UgYXJlIGluZGVlZCBnZXR0aW5nIHRoZSBjZW50cm9pZCwgYnV0IGlkZWFsbHkgd2VcbiAgICB3YW50IHRvIGNoZWNrIGlmIHRoZSBjZW50cm9pZCBpcyBhY3R1YWxseSB3aXRoaW4gdGhlIHBvbHlnb25cbiAgICBmb3IgdGhlIHBvbHlnb25zIHRoYXQgYmVuZCBsaWtlIGEgYm9vbWFyYW5nLiBJZiBpdCBpcyBvdXRzaWRlLFxuICAgIHdlIG5lZWQgdG8gbnVkZ2UgaXQgb3ZlciB1bnRpbCBpdCBpcyBpbnNpZGUuLi5cbiAqL1xuZnVuY3Rpb24gY2VudHJvaWQocGFydEFycikge1xuICB2YXIgbGVuID0gcGFydEFyci5sZW5ndGg7XG4gIHZhciB4ID0gMDtcbiAgdmFyIHkgPSAwO1xuICBmb3IgKHZhciBpID0gMCwgaiA9IGxlbiAtIDE7IGkgPCBsZW47IGo9aSwgaSsrKSB7XG4gICAgdmFyIHAxID0gcGFydEFycltqXTtcbiAgICB2YXIgcDIgPSBwYXJ0QXJyW2ldO1xuICAgIHZhciBmID0gcDEueCAqIHAyLnkgLSBwMi54ICogcDEueTtcbiAgICB4ICs9IChwMS54ICsgcDIueCkgKiBmO1xuICAgIHkgKz0gKHAxLnkgKyBwMi55KSAqIGY7XG4gIH1cbiAgZiA9IGFyZWEocGFydEFycikgKiA2O1xuICByZXR1cm4gTC5wb2ludCh4L2YsIHkvZik7XG5cbn1cblxuXG5mdW5jdGlvbiBmaW5kTGFyZ2VzdExheWVyKGxheWVycykge1xuICB2YXIgbGFyZ2VzdExheWVyID0gbnVsbDtcbiAgdmFyIG1heEFyZWEgPSAwO1xuXG4gIGZvciAodmFyIGlkIGluIGxheWVycykge1xuICAgIHZhciBsID0gbGF5ZXJzW2lkXTtcbiAgICB2YXIgcGFydHMgPSBsLl9wYXJ0cztcbiAgICB2YXIgYSA9IDA7XG4gICAgaWYgKCFwYXJ0cykge1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBwYXJ0cy5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICAgICAgYSArPSBhcmVhKHBhcnRzW2ldKTtcbiAgICB9XG4gICAgaWYgKGEgPiBtYXhBcmVhKSB7XG4gICAgICBtYXhBcmVhID0gYTtcbiAgICAgIGxhcmdlc3RMYXllciA9IGw7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGxhcmdlc3RMYXllcjtcbn1cblxuZnVuY3Rpb24gZmluZExhcmdlc3RQYXJ0KHBhcnRzKSB7XG4gIHZhciBsYXJnZXN0UGFydCA9IHBhcnRzWzBdO1xuICB2YXIgbWF4QXJlYSA9IDA7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHBhcnRzLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gICAgdmFyIHAgPSBwYXJ0c1tpXTtcbiAgICB2YXIgYSA9IGFyZWEocCk7XG4gICAgaWYgKCBhID4gbWF4QXJlYSApIHtcbiAgICAgIGxhcmdlc3RQYXJ0ID0gcDtcbiAgICAgIG1heEFyZWEgPSBhO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbGFyZ2VzdFBhcnQ7XG59XG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgTmljaG9sYXMgSGFsbGFoYW4gPG5oYWxsYWhhbkBzcGF0aWFsZGV2LmNvbT5cbiAqICAgICAgIG9uIDQvNy8xNC5cbiAqXG4gKiAgICAgICBCYXNlZCBvbiBMLk1hcmtlciBmcm9tIHYwLjcuMlxuICovXG5cblxubW9kdWxlLmV4cG9ydHMgPSBMLkxhYmVsID0gTC5DbGFzcy5leHRlbmQoe1xuXG4gIGluY2x1ZGVzOiBMLk1peGluLkV2ZW50cyxcblxuICBvcHRpb25zOiB7XG4gICAgaWNvbjogbmV3IEwuSWNvbi5EZWZhdWx0KCksXG4gICAgdGl0bGU6ICcnLFxuICAgIGFsdDogJycsXG4gICAgY2xpY2thYmxlOiB0cnVlLFxuICAgIGRyYWdnYWJsZTogZmFsc2UsXG4gICAga2V5Ym9hcmQ6IHRydWUsXG4gICAgekluZGV4T2Zmc2V0OiAwLFxuICAgIG9wYWNpdHk6IDEsXG4gICAgcmlzZU9uSG92ZXI6IGZhbHNlLFxuICAgIHJpc2VPZmZzZXQ6IDI1MFxuICB9LFxuXG4gIGluaXRpYWxpemU6IGZ1bmN0aW9uIChwb2ludCwgZmVhdHVyZUxheWVyLCBvcHRpb25zKSB7XG4gICAgTC5zZXRPcHRpb25zKHRoaXMsIG9wdGlvbnMpO1xuLy8gICAgdGhpcy5fbGF0bG5nID0gTC5sYXRMbmcobGF0bG5nKTtcbiAgICB0aGlzLl9wb2ludCA9IHBvaW50O1xuICAgIGlmIChmZWF0dXJlTGF5ZXIpe1xuICAgICAgdGhpcy5mZWF0dXJlTGF5ZXIgPSBmZWF0dXJlTGF5ZXI7XG4gICAgICBmZWF0dXJlTGF5ZXIubGFiZWwgPSB0aGlzO1xuICAgIH1cbiAgICB0aGlzLmlzTGFiZWwgPSB0cnVlO1xuICB9LFxuXG4gIG9uQWRkOiBmdW5jdGlvbiAobWFwKSB7XG4gICAgdGhpcy5fbWFwID0gbWFwO1xuXG4gICAgbWFwLm9uKCd2aWV3cmVzZXQnLCB0aGlzLnVwZGF0ZSwgdGhpcyk7XG5cbiAgICB0aGlzLl9pbml0SWNvbigpO1xuICAgIHRoaXMudXBkYXRlKCk7XG4gICAgdGhpcy5maXJlKCdhZGQnKTtcblxuICAgIGlmIChtYXAub3B0aW9ucy56b29tQW5pbWF0aW9uICYmIG1hcC5vcHRpb25zLm1hcmtlclpvb21BbmltYXRpb24pIHtcbiAgICAgIG1hcC5vbignem9vbWFuaW0nLCB0aGlzLl9hbmltYXRlWm9vbSwgdGhpcyk7XG4gICAgfVxuICB9LFxuXG4gIGFkZFRvOiBmdW5jdGlvbiAobWFwKSB7XG4gICAgbWFwLmFkZExheWVyKHRoaXMpO1xuICAgIHJldHVybiB0aGlzO1xuICB9LFxuXG4gIG9uUmVtb3ZlOiBmdW5jdGlvbiAobWFwKSB7XG4gICAgaWYgKHRoaXMuZHJhZ2dpbmcpIHtcbiAgICAgIHRoaXMuZHJhZ2dpbmcuZGlzYWJsZSgpO1xuICAgIH1cblxuICAgIHRoaXMuX3JlbW92ZUljb24oKTtcbiAgICB0aGlzLl9yZW1vdmVTaGFkb3coKTtcblxuICAgIHRoaXMuZmlyZSgncmVtb3ZlJyk7XG5cbiAgICBtYXAub2ZmKHtcbiAgICAgICd2aWV3cmVzZXQnOiB0aGlzLnVwZGF0ZSxcbiAgICAgICd6b29tYW5pbSc6IHRoaXMuX2FuaW1hdGVab29tXG4gICAgfSwgdGhpcyk7XG5cbiAgICB0aGlzLl9tYXAgPSBudWxsO1xuICB9LFxuXG4vLyAgZ2V0TGF0TG5nOiBmdW5jdGlvbiAoKSB7XG4vLyAgICByZXR1cm4gdGhpcy5fbGF0bG5nO1xuLy8gIH0sXG4vL1xuLy8gIHNldExhdExuZzogZnVuY3Rpb24gKGxhdGxuZykge1xuLy8gICAgdGhpcy5fbGF0bG5nID0gTC5sYXRMbmcobGF0bG5nKTtcbi8vXG4vLyAgICB0aGlzLnVwZGF0ZSgpO1xuLy9cbi8vICAgIHJldHVybiB0aGlzLmZpcmUoJ21vdmUnLCB7IGxhdGxuZzogdGhpcy5fbGF0bG5nIH0pO1xuLy8gIH0sXG5cblxuXG4gIHNldFpJbmRleE9mZnNldDogZnVuY3Rpb24gKG9mZnNldCkge1xuICAgIHRoaXMub3B0aW9ucy56SW5kZXhPZmZzZXQgPSBvZmZzZXQ7XG4gICAgdGhpcy51cGRhdGUoKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9LFxuXG4gIHNldEljb246IGZ1bmN0aW9uIChpY29uKSB7XG5cbiAgICB0aGlzLm9wdGlvbnMuaWNvbiA9IGljb247XG5cbiAgICBpZiAodGhpcy5fbWFwKSB7XG4gICAgICB0aGlzLl9pbml0SWNvbigpO1xuICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fcG9wdXApIHtcbiAgICAgIHRoaXMuYmluZFBvcHVwKHRoaXMuX3BvcHVwKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfSxcblxuICB1cGRhdGU6IGZ1bmN0aW9uIChwb2ludCkge1xuICAgIGlmIChwb2ludCkge1xuICAgICAgdGhpcy5fcG9pbnQgPSBwb2ludDtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2ljb24pIHtcbi8vICAgICAgdmFyIHBvcyA9IHRoaXMuX21hcC5sYXRMbmdUb0xheWVyUG9pbnQodGhpcy5fbGF0bG5nKS5yb3VuZCgpO1xuICAgICAgdGhpcy5fc2V0UG9zKHRoaXMuX3BvaW50KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfSxcblxuICBfaW5pdEljb246IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgb3B0aW9ucyA9IHRoaXMub3B0aW9ucyxcbiAgICAgIG1hcCA9IHRoaXMuX21hcCxcbiAgICAgIGFuaW1hdGlvbiA9IChtYXAub3B0aW9ucy56b29tQW5pbWF0aW9uICYmIG1hcC5vcHRpb25zLm1hcmtlclpvb21BbmltYXRpb24pLFxuICAgICAgY2xhc3NUb0FkZCA9IGFuaW1hdGlvbiA/ICdsZWFmbGV0LXpvb20tYW5pbWF0ZWQnIDogJ2xlYWZsZXQtem9vbS1oaWRlJztcblxuICAgIHZhciBpY29uID0gb3B0aW9ucy5pY29uLmNyZWF0ZUljb24odGhpcy5faWNvbiksXG4gICAgICBhZGRJY29uID0gZmFsc2U7XG5cbiAgICAvLyBpZiB3ZSdyZSBub3QgcmV1c2luZyB0aGUgaWNvbiwgcmVtb3ZlIHRoZSBvbGQgb25lIGFuZCBpbml0IG5ldyBvbmVcbiAgICBpZiAoaWNvbiAhPT0gdGhpcy5faWNvbikge1xuICAgICAgaWYgKHRoaXMuX2ljb24pIHtcbiAgICAgICAgdGhpcy5fcmVtb3ZlSWNvbigpO1xuICAgICAgfVxuICAgICAgYWRkSWNvbiA9IHRydWU7XG5cbiAgICAgIGlmIChvcHRpb25zLnRpdGxlKSB7XG4gICAgICAgIGljb24udGl0bGUgPSBvcHRpb25zLnRpdGxlO1xuICAgICAgfVxuXG4gICAgICBpZiAob3B0aW9ucy5hbHQpIHtcbiAgICAgICAgaWNvbi5hbHQgPSBvcHRpb25zLmFsdDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBMLkRvbVV0aWwuYWRkQ2xhc3MoaWNvbiwgY2xhc3NUb0FkZCk7XG5cbiAgICBpZiAob3B0aW9ucy5rZXlib2FyZCkge1xuICAgICAgaWNvbi50YWJJbmRleCA9ICcwJztcbiAgICB9XG5cbiAgICB0aGlzLl9pY29uID0gaWNvbjtcblxuICAgIHRoaXMuX2luaXRJbnRlcmFjdGlvbigpO1xuXG4gICAgaWYgKG9wdGlvbnMucmlzZU9uSG92ZXIpIHtcbiAgICAgIEwuRG9tRXZlbnRcbiAgICAgICAgLm9uKGljb24sICdtb3VzZW92ZXInLCB0aGlzLl9icmluZ1RvRnJvbnQsIHRoaXMpXG4gICAgICAgIC5vbihpY29uLCAnbW91c2VvdXQnLCB0aGlzLl9yZXNldFpJbmRleCwgdGhpcyk7XG4gICAgfVxuXG4gICAgdmFyIG5ld1NoYWRvdyA9IG9wdGlvbnMuaWNvbi5jcmVhdGVTaGFkb3codGhpcy5fc2hhZG93KSxcbiAgICAgIGFkZFNoYWRvdyA9IGZhbHNlO1xuXG4gICAgaWYgKG5ld1NoYWRvdyAhPT0gdGhpcy5fc2hhZG93KSB7XG4gICAgICB0aGlzLl9yZW1vdmVTaGFkb3coKTtcbiAgICAgIGFkZFNoYWRvdyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKG5ld1NoYWRvdykge1xuICAgICAgTC5Eb21VdGlsLmFkZENsYXNzKG5ld1NoYWRvdywgY2xhc3NUb0FkZCk7XG4gICAgfVxuICAgIHRoaXMuX3NoYWRvdyA9IG5ld1NoYWRvdztcblxuXG4gICAgaWYgKG9wdGlvbnMub3BhY2l0eSA8IDEpIHtcbiAgICAgIHRoaXMuX3VwZGF0ZU9wYWNpdHkoKTtcbiAgICB9XG5cblxuICAgIHZhciBwYW5lcyA9IHRoaXMuX21hcC5fcGFuZXM7XG5cbiAgICBpZiAoYWRkSWNvbikge1xuICAgICAgcGFuZXMubWFya2VyUGFuZS5hcHBlbmRDaGlsZCh0aGlzLl9pY29uKTtcbiAgICB9XG5cbiAgICBpZiAobmV3U2hhZG93ICYmIGFkZFNoYWRvdykge1xuICAgICAgcGFuZXMuc2hhZG93UGFuZS5hcHBlbmRDaGlsZCh0aGlzLl9zaGFkb3cpO1xuICAgIH1cbiAgfSxcblxuICBfcmVtb3ZlSWNvbjogZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLm9wdGlvbnMucmlzZU9uSG92ZXIpIHtcbiAgICAgIEwuRG9tRXZlbnRcbiAgICAgICAgLm9mZih0aGlzLl9pY29uLCAnbW91c2VvdmVyJywgdGhpcy5fYnJpbmdUb0Zyb250KVxuICAgICAgICAub2ZmKHRoaXMuX2ljb24sICdtb3VzZW91dCcsIHRoaXMuX3Jlc2V0WkluZGV4KTtcbiAgICB9XG5cbiAgICB0aGlzLl9tYXAuX3BhbmVzLm1hcmtlclBhbmUucmVtb3ZlQ2hpbGQodGhpcy5faWNvbik7XG5cbiAgICB0aGlzLl9pY29uID0gbnVsbDtcbiAgfSxcblxuICBfcmVtb3ZlU2hhZG93OiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuX3NoYWRvdykge1xuICAgICAgdGhpcy5fbWFwLl9wYW5lcy5zaGFkb3dQYW5lLnJlbW92ZUNoaWxkKHRoaXMuX3NoYWRvdyk7XG4gICAgfVxuICAgIHRoaXMuX3NoYWRvdyA9IG51bGw7XG4gIH0sXG5cbiAgX3NldFBvczogZnVuY3Rpb24gKHBvcykge1xuICAgIEwuRG9tVXRpbC5zZXRQb3NpdGlvbih0aGlzLl9pY29uLCBwb3MpO1xuXG4gICAgaWYgKHRoaXMuX3NoYWRvdykge1xuICAgICAgTC5Eb21VdGlsLnNldFBvc2l0aW9uKHRoaXMuX3NoYWRvdywgcG9zKTtcbiAgICB9XG5cbiAgICB0aGlzLl96SW5kZXggPSBwb3MueSArIHRoaXMub3B0aW9ucy56SW5kZXhPZmZzZXQ7XG5cbiAgICB0aGlzLl9yZXNldFpJbmRleCgpO1xuICB9LFxuXG4gIF91cGRhdGVaSW5kZXg6IGZ1bmN0aW9uIChvZmZzZXQpIHtcbiAgICB0aGlzLl9pY29uLnN0eWxlLnpJbmRleCA9IHRoaXMuX3pJbmRleCArIG9mZnNldDtcbiAgfSxcblxuICBfYW5pbWF0ZVpvb206IGZ1bmN0aW9uIChvcHQpIHtcbi8vICAgIHZhciBwb3MgPSB0aGlzLl9tYXAuX2xhdExuZ1RvTmV3TGF5ZXJQb2ludCh0aGlzLl9sYXRsbmcsIG9wdC56b29tLCBvcHQuY2VudGVyKS5yb3VuZCgpO1xuLy9cbi8vICAgIHRoaXMuX3NldFBvcyhwb3MpO1xuICB9LFxuXG4gIF9pbml0SW50ZXJhY3Rpb246IGZ1bmN0aW9uICgpIHtcblxuICAgIGlmICghdGhpcy5vcHRpb25zLmNsaWNrYWJsZSkgeyByZXR1cm47IH1cblxuICAgIC8vIFRPRE8gcmVmYWN0b3IgaW50byBzb21ldGhpbmcgc2hhcmVkIHdpdGggTWFwL1BhdGgvZXRjLiB0byBEUlkgaXQgdXBcblxuICAgIHZhciBpY29uID0gdGhpcy5faWNvbixcbiAgICAgIGV2ZW50cyA9IFsnZGJsY2xpY2snLCAnbW91c2Vkb3duJywgJ21vdXNlb3ZlcicsICdtb3VzZW91dCcsICdjb250ZXh0bWVudSddO1xuXG4gICAgTC5Eb21VdGlsLmFkZENsYXNzKGljb24sICdsZWFmbGV0LWNsaWNrYWJsZScpO1xuICAgIEwuRG9tRXZlbnQub24oaWNvbiwgJ2NsaWNrJywgdGhpcy5fb25Nb3VzZUNsaWNrLCB0aGlzKTtcbiAgICBMLkRvbUV2ZW50Lm9uKGljb24sICdrZXlwcmVzcycsIHRoaXMuX29uS2V5UHJlc3MsIHRoaXMpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBldmVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIEwuRG9tRXZlbnQub24oaWNvbiwgZXZlbnRzW2ldLCB0aGlzLl9maXJlTW91c2VFdmVudCwgdGhpcyk7XG4gICAgfVxuXG4gICAgaWYgKEwuSGFuZGxlci5NYXJrZXJEcmFnKSB7XG4gICAgICB0aGlzLmRyYWdnaW5nID0gbmV3IEwuSGFuZGxlci5NYXJrZXJEcmFnKHRoaXMpO1xuXG4gICAgICBpZiAodGhpcy5vcHRpb25zLmRyYWdnYWJsZSkge1xuICAgICAgICB0aGlzLmRyYWdnaW5nLmVuYWJsZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICBfb25Nb3VzZUNsaWNrOiBmdW5jdGlvbiAoZSkge1xuICAgIHZhciB3YXNEcmFnZ2VkID0gdGhpcy5kcmFnZ2luZyAmJiB0aGlzLmRyYWdnaW5nLm1vdmVkKCk7XG5cbiAgICBpZiAodGhpcy5oYXNFdmVudExpc3RlbmVycyhlLnR5cGUpIHx8IHdhc0RyYWdnZWQpIHtcbiAgICAgIEwuRG9tRXZlbnQuc3RvcFByb3BhZ2F0aW9uKGUpO1xuICAgIH1cblxuICAgIGlmICh3YXNEcmFnZ2VkKSB7IHJldHVybjsgfVxuXG4gICAgaWYgKCghdGhpcy5kcmFnZ2luZyB8fCAhdGhpcy5kcmFnZ2luZy5fZW5hYmxlZCkgJiYgdGhpcy5fbWFwLmRyYWdnaW5nICYmIHRoaXMuX21hcC5kcmFnZ2luZy5tb3ZlZCgpKSB7IHJldHVybjsgfVxuXG4gICAgdGhpcy5maXJlKGUudHlwZSwge1xuICAgICAgb3JpZ2luYWxFdmVudDogZSxcbi8vICAgICAgbGF0bG5nOiB0aGlzLl9sYXRsbmdcbiAgICAgIHBvaW50OiB0aGlzLl9wb2ludFxuICAgIH0pO1xuICB9LFxuXG4gIF9vbktleVByZXNzOiBmdW5jdGlvbiAoZSkge1xuICAgIGlmIChlLmtleUNvZGUgPT09IDEzKSB7XG4gICAgICB0aGlzLmZpcmUoJ2NsaWNrJywge1xuICAgICAgICBvcmlnaW5hbEV2ZW50OiBlLFxuLy8gICAgICAgIGxhdGxuZzogdGhpcy5fbGF0bG5nXG4gICAgICAgIHBvaW50OiB0aGlzLl9wb2ludFxuICAgICAgfSk7XG4gICAgfVxuICB9LFxuXG4gIF9maXJlTW91c2VFdmVudDogZnVuY3Rpb24gKGUpIHtcblxuICAgIHRoaXMuZmlyZShlLnR5cGUsIHtcbiAgICAgIG9yaWdpbmFsRXZlbnQ6IGUsXG4vLyAgICAgIGxhdGxuZzogdGhpcy5fbGF0bG5nXG4gICAgICBwb2ludDogdGhpcy5fcG9pbnRcbiAgICB9KTtcblxuICAgIC8vIFRPRE8gcHJvcGVyIGN1c3RvbSBldmVudCBwcm9wYWdhdGlvblxuICAgIC8vIHRoaXMgbGluZSB3aWxsIGFsd2F5cyBiZSBjYWxsZWQgaWYgbWFya2VyIGlzIGluIGEgRmVhdHVyZUdyb3VwXG4gICAgaWYgKGUudHlwZSA9PT0gJ2NvbnRleHRtZW51JyAmJiB0aGlzLmhhc0V2ZW50TGlzdGVuZXJzKGUudHlwZSkpIHtcbiAgICAgIEwuRG9tRXZlbnQucHJldmVudERlZmF1bHQoZSk7XG4gICAgfVxuICAgIGlmIChlLnR5cGUgIT09ICdtb3VzZWRvd24nKSB7XG4gICAgICBMLkRvbUV2ZW50LnN0b3BQcm9wYWdhdGlvbihlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgTC5Eb21FdmVudC5wcmV2ZW50RGVmYXVsdChlKTtcbiAgICB9XG4gIH0sXG5cbiAgc2V0T3BhY2l0eTogZnVuY3Rpb24gKG9wYWNpdHkpIHtcbiAgICB0aGlzLm9wdGlvbnMub3BhY2l0eSA9IG9wYWNpdHk7XG4gICAgaWYgKHRoaXMuX21hcCkge1xuICAgICAgdGhpcy5fdXBkYXRlT3BhY2l0eSgpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9LFxuXG4gIF91cGRhdGVPcGFjaXR5OiBmdW5jdGlvbiAoKSB7XG4gICAgTC5Eb21VdGlsLnNldE9wYWNpdHkodGhpcy5faWNvbiwgdGhpcy5vcHRpb25zLm9wYWNpdHkpO1xuICAgIGlmICh0aGlzLl9zaGFkb3cpIHtcbiAgICAgIEwuRG9tVXRpbC5zZXRPcGFjaXR5KHRoaXMuX3NoYWRvdywgdGhpcy5vcHRpb25zLm9wYWNpdHkpO1xuICAgIH1cbiAgfSxcblxuICBfYnJpbmdUb0Zyb250OiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5fdXBkYXRlWkluZGV4KHRoaXMub3B0aW9ucy5yaXNlT2Zmc2V0KTtcbiAgfSxcblxuICBfcmVzZXRaSW5kZXg6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLl91cGRhdGVaSW5kZXgoMCk7XG4gIH1cbn0pO1xuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IE5pY2hvbGFzIEhhbGxhaGFuIDxuaGFsbGFoYW5Ac3BhdGlhbGRldi5jb20+XG4gKiAgICAgICBvbiA0LzcvMTQuXG4gKi9cblxudmFyIGZlYXR1cmVTZXRzID0gW107XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBmZWF0dXJlU2V0czogZmVhdHVyZVNldHMsXG4gIHBhdGhVcGRhdGVkOiBmdW5jdGlvbihsZWFmbGV0SWQpIHtcbiAgICBmb3IodmFyIGk9IDAsIGxlbj1mZWF0dXJlU2V0cy5sZW5ndGg7IGk8bGVuOyArK2kpIHtcbiAgICAgIGZlYXR1cmVTZXRzW2ldLl9wYXRoVXBkYXRlZChsZWFmbGV0SWQpO1xuICAgIH1cbiAgfSxcbiAgbGFiZWxzOiB7fVxufTtcblxucmVxdWlyZSgnLi9sZWFmbGV0LXBhdGNoJyk7XG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgTmljaG9sYXMgSGFsbGFoYW4gPG5oYWxsYWhhbkBzcGF0aWFsZGV2LmNvbT5cbiAqICAgICAgIG9uIDUvNy8xNC5cbiAqXG4gKiBUaGlzIGlzIGEgcGF0Y2ggdGhhdCBvdmVycmlkZXMgdGhlIEwuUG9seWxpbmUgY2xhc3MgaW4gTGVhZmxldCAwLjcuMlxuICpcbiAqIEFsbCB0aGlzIGlzIGRvaW5nIGlzIGJyb2FkY2FzdGluZyB0aGUgbGVhZmxldCBpZCBmb3IgdGhlIHBhdGggdGhhdCBpcyBiZWluZyByZWRyYXduLlxuICovXG5cbnZhciBmZWF0dXJlbGFiZWwgPSByZXF1aXJlKCcuL2ZlYXR1cmVsYWJlbCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuXG4gIC8qKlxuICAgKiBMZWFmbGV0IHB1dHMgdG9vIG11Y2ggb2YgYSBidWZmZXIgYXJvdW5kIHRoZSBhcmVhIGluIHdoaWNoIGEgc2hhcGVcbiAgICogaXMgY2xpcHBlZCwgdGh1cyB3ZSB3ZXJlIG5vdCBnZXR0aW5nIGdvb2QgY2VudHJvaWRzIGZvciBzaGFwZXMgdGhhdFxuICAgKiB3ZXJlIGJlaW5nIGNsaXBwZWQuIFRoaXMgcmVzb2x2ZXMgdGhhdC5cbiAgICovXG4gIEwuUGF0aC5DTElQX1BBRERJTkcgPSAwLjAyO1xuXG4gIEwuUG9seWxpbmUucHJvdG90eXBlLl91cGRhdGVQYXRoID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICghdGhpcy5fbWFwKSB7IHJldHVybjsgfVxuXG4gICAgdGhpcy5fY2xpcFBvaW50cygpO1xuICAgIHRoaXMuX3NpbXBsaWZ5UG9pbnRzKCk7XG5cbiAgICBMLlBhdGgucHJvdG90eXBlLl91cGRhdGVQYXRoLmNhbGwodGhpcyk7XG5cbiAgICAvKipcbiAgICAgKiBOb3RpZmllcyBmZWF0dXJlbGFiZWwgdGhhdCBhIHBhdGggZm9yIGEgdmVjdG9yIGhhcyBiZWVuIHJlZHJhd24gYW5kIHRoZSBsYWJlbCBzaG91bGRcbiAgICAgKiBwb3NpdGlvbmVkIG9yIHJlcG9zaXRpb25lZC5cbiAgICAgKi9cbiAgICBmZWF0dXJlbGFiZWwucGF0aFVwZGF0ZWQodGhpcy5fbGVhZmxldF9pZCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEZpeGVzIGEgTGVhZmxldCBidWcgd2hlcmUgYSByZWZlcmVuY2UgdG8gdGhpcy5fbWFwIGlzIHNvbWV0aW1lcyBtaXNzaW5nLlxuICAgKi9cbiAgTC5QYXRoLnByb3RvdHlwZS5icmluZ1RvRnJvbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCF0aGlzLl9tYXApIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICB2YXIgcm9vdCA9IHRoaXMuX21hcC5fcGF0aFJvb3QsXG4gICAgICAgIHBhdGggPSB0aGlzLl9jb250YWluZXI7XG5cbiAgICBpZiAocGF0aCAmJiByb290Lmxhc3RDaGlsZCAhPT0gcGF0aCkge1xuICAgICAgcm9vdC5hcHBlbmRDaGlsZChwYXRoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbn0oKTsiLCIvKipcbiAqIFRoaXMgaXMgdGhlIGVudHJ5IHBvaW50IG9mIHRoZSBhcHBsaWNhdGlvbi4gV2UgZGVjbGFyZSB0aGUgbWFpbiBtb2R1bGUgaGVyZSBhbmQgdGhlbiBjb25maWd1cmUgdGhlIG1haW4gcm91dGVyXG4gKiB0aGF0IGNyZWF0ZXMgY29ycmVzcG9uZGluZyB2aWV3cy4gVGhlIGFycmF5IHBhcmFtZXRlciBmb3IgbW9kdWxlIGRlY2xhcmVzIHRoaXMgbW9kdWxlJ3MgZGVwZW5kZW5jaWVzLlxuICovXG52YXIgR2VvQW5ndWxhciA9IGFuZ3VsYXIubW9kdWxlKCdHZW9Bbmd1bGFyJywgWydhbmd1bGFyRmlsZVVwbG9hZCcsICduZ0Nvb2tpZXMnLCAnbmdSZXNvdXJjZScsICduZ1Nhbml0aXplJywgJ25nUm91dGUnLCAndWkucm91dGVyJywgJ25nQW5pbWF0ZScsICd1aS5ib290c3RyYXAnLCAndWkuc2xpZGVyJywgJ25nTWF0ZXJpYWwnXSk7XG5cbkdlb0FuZ3VsYXIucnVuKGZ1bmN0aW9uICgkcm9vdFNjb3BlLCAkc3RhdGUsICRzdGF0ZVBhcmFtcykge1xuXG4gIC8vIEl0J3MgdmVyeSBoYW5keSB0byBhZGQgcmVmZXJlbmNlcyB0byAkc3RhdGUgYW5kICRzdGF0ZVBhcmFtcyB0byB0aGUgJHJvb3RTY29wZVxuICAvLyBzbyB0aGF0IHlvdSBjYW4gYWNjZXNzIHRoZW0gZnJvbSBhbnkgc2NvcGUgd2l0aGluIHlvdXIgYXBwbGljYXRpb25zLkZvciBleGFtcGxlLFxuICAvLyA8bGkgdWktc3JlZi1hY3RpdmU9XCJhY3RpdmUgfVwiPiB3aWxsIHNldCB0aGUgPGxpPiAvLyB0byBhY3RpdmUgd2hlbmV2ZXJcbiAgLy8gJ2NvbnRhY3RzLmxpc3QnIG9yIG9uZSBvZiBpdHMgZGVjZW5kZW50cyBpcyBhY3RpdmUuXG4gICRyb290U2NvcGUuJHN0YXRlID0gJHN0YXRlO1xuICAkcm9vdFNjb3BlLiRzdGF0ZVBhcmFtcyA9ICRzdGF0ZVBhcmFtcztcblxuICBkZWJ1Zy4kc3RhdGUgPSAkc3RhdGU7XG4gIGRlYnVnLiRzdGF0ZVBhcmFtcyA9ICRzdGF0ZVBhcmFtcztcblxuICAkcm9vdFNjb3BlLmlzU3RhdGUgPSBmdW5jdGlvbiAoc3RhdGVOYW1lKSB7XG4gICAgcmV0dXJuICRzdGF0ZS4kY3VycmVudC5uYW1lID09PSBzdGF0ZU5hbWU7XG4gIH07XG5cbiAgJHJvb3RTY29wZS5pc1BhcmFtID0gZnVuY3Rpb24ocGFyYW1OYW1lKSB7XG4gICAgdmFyIGJvb2wgPSAkc3RhdGVQYXJhbXNbcGFyYW1OYW1lXTtcbiAgICBpZiAoIWJvb2wpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgJHJvb3RTY29wZS5pc05vdFBhcmFtID0gZnVuY3Rpb24ocGFyYW1OYW1lKSB7XG4gICAgdmFyIGJvb2wgPSAkc3RhdGVQYXJhbXNbcGFyYW1OYW1lXTtcbiAgICBpZiAoIWJvb2wpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgJHJvb3RTY29wZS50b2dnbGVQYXJhbSA9IGZ1bmN0aW9uKHBhcmFtTmFtZSkge1xuICAgIHZhciBib29sID0gJHN0YXRlUGFyYW1zW3BhcmFtTmFtZV07XG4gICAgaWYgKCFib29sKSB7XG4gICAgICAvLyBtdXRleCBsb2dpYyB0aGF0IG1ha2VzIG9ubHkgMSBwYW5lbCBvcGVuIGF0IGEgdGltZVxuICAgICAgZm9yICh2YXIgcGFyYW0gaW4gJHN0YXRlUGFyYW1zKSB7XG4gICAgICAgIGlmICgkc3RhdGVQYXJhbXNbcGFyYW1dID09PSAnb3BlbicpIHtcbiAgICAgICAgICAkc3RhdGVQYXJhbXNbcGFyYW1dID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgJHN0YXRlUGFyYW1zW3BhcmFtTmFtZV0gPSAnb3Blbic7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlbGV0ZSAkc3RhdGVQYXJhbXNbcGFyYW1OYW1lXTtcbiAgICB9XG4gICAgdmFyIHN0YXRlID0gJHN0YXRlLmN1cnJlbnQubmFtZSB8fCAnbWFpbic7XG4gICAgJHN0YXRlLmdvKHN0YXRlLCAkc3RhdGVQYXJhbXMpO1xuICB9O1xuXG4gICRyb290U2NvcGUuc2V0UGFyYW1XaXRoVmFsID0gZnVuY3Rpb24gKHBhcmFtTmFtZSwgdmFsKSB7XG4gICAgJHN0YXRlUGFyYW1zW3BhcmFtTmFtZV0gPSB2YWw7XG4gICAgdmFyIHN0YXRlID0gJHN0YXRlLmN1cnJlbnQubmFtZSB8fCAnbWFpbic7XG4gICAgJHN0YXRlLmdvKHN0YXRlLCAkc3RhdGVQYXJhbXMpO1xuICB9O1xuICBkZWJ1Zy4kcm9vdFNjb3BlID0gJHJvb3RTY29wZTtcblxuXG4gICRyb290U2NvcGUub3BlblBhcmFtID0gZnVuY3Rpb24ocGFyYW1OYW1lKSB7XG4gICAgdmFyIGJvb2wgPSAkc3RhdGVQYXJhbXNbcGFyYW1OYW1lXTtcbiAgICBpZiAoIWJvb2wpIHtcbiAgICAgIC8vIG11dGV4IGxvZ2ljIHRoYXQgbWFrZXMgb25seSAxIHBhbmVsIG9wZW4gYXQgYSB0aW1lXG4gICAgICBmb3IgKHZhciBwYXJhbSBpbiAkc3RhdGVQYXJhbXMpIHtcbiAgICAgICAgaWYgKCRzdGF0ZVBhcmFtc1twYXJhbV0gPT09ICdvcGVuJykge1xuICAgICAgICAgICRzdGF0ZVBhcmFtc1twYXJhbV0gPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAkc3RhdGVQYXJhbXNbcGFyYW1OYW1lXSA9ICdvcGVuJztcbiAgICAgIHZhciBzdGF0ZSA9ICRzdGF0ZS5jdXJyZW50Lm5hbWUgfHwgJ21haW4nO1xuICAgICAgJHN0YXRlLmdvKHN0YXRlLCAkc3RhdGVQYXJhbXMpO1xuICAgIH1cbiAgfTtcblxuICAkcm9vdFNjb3BlLmNsb3NlUGFyYW0gPSBmdW5jdGlvbihwYXJhbU5hbWUpIHtcbiAgICB2YXIgYm9vbCA9ICRzdGF0ZVBhcmFtc1twYXJhbU5hbWVdO1xuICAgIGlmIChib29sKSB7XG4gICAgICBkZWxldGUgJHN0YXRlUGFyYW1zW3BhcmFtTmFtZV07XG4gICAgICB2YXIgc3RhdGUgPSAkc3RhdGUuY3VycmVudC5uYW1lIHx8ICdtYWluJztcbiAgICAgICRzdGF0ZS5nbyhzdGF0ZSwgJHN0YXRlUGFyYW1zKTtcbiAgICB9XG4gIH07XG5cbiAgJHJvb3RTY29wZS5pc05vdFN0YXRlID0gZnVuY3Rpb24gKHN0YXRlTmFtZSkge1xuICAgIHJldHVybiAkc3RhdGUuJGN1cnJlbnQubmFtZSAhPT0gc3RhdGVOYW1lO1xuICB9O1xuXG4gIHdpbmRvdy4kc3RhdGUgPSAkc3RhdGU7XG4gIHdpbmRvdy4kc3RhdGVQYXJhbXMgPSAkc3RhdGVQYXJhbXM7XG5cbn0pO1xuXG5HZW9Bbmd1bGFyLmNvbmZpZyhmdW5jdGlvbiAoJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcikge1xuICAkdXJsUm91dGVyUHJvdmlkZXJcbiAgICAud2hlbignL2RlZmF1bHQnLCAnL21hcEAwLjEsMC4xLDIob3NtaG90LGdhZG0wKSxwcm9qZWN0JylcbiAgICAub3RoZXJ3aXNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdtYXBmb2xpb1JvdXRlJykgfHwgJy9tYXBAMSwxLDIob3NtaG90LGdhZG0wKSxwcm9qZWN0Jyk7XG5cbiAgJHN0YXRlUHJvdmlkZXJcbiAgICAuc3RhdGUoJ21haW4nLCB7XG4gICAgICB1cmw6ICcvbWFwQDpsYXQsOmxuZyw6em9vbSgqbGF5ZXJzKSw6dGhlbWU/em9vbS1leHRlbnQmc3RvcmllcyZsYXllcnMtcGFuZWwmZmlsdGVycy1wYW5lbCZmaWx0ZXJzJmxlZ2VuZCZiYXNlbWFwcyZpbmZvJnRpdGxlJmRldGFpbHMtcGFuZWwmc2VhcmNoLXBhbmVsJnNmX2lkJmxldmVsJnRoZW1lbGFiZWxzJmNhdGVnb3J5JmxlZ2VuZC1wYW5lbCZmdWxsc2NyZWVuJyxcbiAgICAgIHZpZXdzOiB7XG4gICAgICAgICdkZXRhaWxzJzoge1xuICAgICAgICAgIHRlbXBsYXRlOiAnICcsXG4gICAgICAgICAgY29udHJvbGxlcjogJ01haW5DdHJsJ1xuICAgICAgICB9LFxuICAgICAgICAndGhlbWUnOiB7XG4gICAgICAgICAgdGVtcGxhdGVVcmw6ICd2aWV3cy90aGVtZS5odG1sJyxcbiAgICAgICAgICBjb250cm9sbGVyOiAnVGhlbWVDdHJsJ1xuICAgICAgICB9LFxuICAgICAgICAnYmxldmVscyc6e1xuICAgICAgICAgIHRlbXBsYXRlVXJsOiAndmlld3MvYmxldmVscy5odG1sJyxcbiAgICAgICAgICBjb250cm9sbGVyOiAnTGF5ZXJzQ3RybCdcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gICAgLnN0YXRlKCd1cGxvYWQnLCB7XG4gICAgICB1cmw6ICcvbWFwQDpsYXQsOmxuZyw6em9vbSgqbGF5ZXJzKSw6dGhlbWUvdXBsb2FkP3pvb20tZXh0ZW50JnN0b3JpZXMmbGF5ZXJzLXBhbmVsJmZpbHRlcnMtcGFuZWwmZmlsdGVycyZsZWdlbmQmYmFzZW1hcHMmaW5mbyZ0aXRsZSZkZXRhaWxzLXBhbmVsJnNlYXJjaC1wYW5lbCZzZl9pZCZsZXZlbCZ0aGVtZWxhYmVscyZjYXRlZ29yeSZsZWdlbmQtcGFuZWwmZnVsbHNjcmVlbicsXG4gICAgICB2aWV3czoge1xuICAgICAgICAnZGV0YWlscyc6IHtcbiAgICAgICAgICB0ZW1wbGF0ZTogJyAnLFxuICAgICAgICAgIGNvbnRyb2xsZXI6ICdNYWluQ3RybCdcbiAgICAgICAgfSxcbiAgICAgICAgJ3VwbG9hZCc6IHtcbiAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3ZpZXdzL3VwbG9hZC5odG1sJyxcbiAgICAgICAgICBjb250cm9sbGVyOiAnVXBsb2FkQ3RybCdcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gICAgLnN0YXRlKCdleHBvcnQnLCB7XG4gICAgICB1cmw6ICcvbWFwQDpsYXQsOmxuZyw6em9vbSgqbGF5ZXJzKSw6dGhlbWUvZXhwb3J0P3pvb20tZXh0ZW50JnN0b3JpZXMmbGF5ZXJzLXBhbmVsJmZpbHRlcnMtcGFuZWwmZmlsdGVycyZsZWdlbmQmYmFzZW1hcHMmaW5mbyZ0aXRsZSZkZXRhaWxzLXBhbmVsJnNlYXJjaC1wYW5lbCZzZl9pZCZsZXZlbCZ0aGVtZWxhYmVscyZjYXRlZ29yeSZsZWdlbmQtcGFuZWwmZnVsbHNjcmVlbicsXG4gICAgICB2aWV3czoge1xuICAgICAgICAnZGV0YWlscyc6IHtcbiAgICAgICAgICB0ZW1wbGF0ZTogJyAnLFxuICAgICAgICAgIGNvbnRyb2xsZXI6ICdNYWluQ3RybCdcbiAgICAgICAgfSxcbiAgICAgICAgJ2V4cG9ydCc6IHtcbiAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3ZpZXdzL2V4cG9ydC5odG1sJyxcbiAgICAgICAgICBjb250cm9sbGVyOiAnRXhwb3J0Q3RybCdcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG59KTtcblxuXG5HZW9Bbmd1bGFyLmRpcmVjdGl2ZSgnc2VsZWN0T25DbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHtcbiAgICByZXN0cmljdDogJ0EnLFxuICAgIGxpbms6IGZ1bmN0aW9uIChzY29wZSwgZWxlbWVudCwgYXR0cnMpIHtcbiAgICAgIGVsZW1lbnQub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnNlbGVjdCgpO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xufSk7XG5cblxuYW5ndWxhci5tb2R1bGUoJ0dlb0FuZ3VsYXInKS5kaXJlY3RpdmUoJ215U2hvdycsIGZ1bmN0aW9uKCRhbmltYXRlKSB7XG4gIHJldHVybiB7XG4gICAgc2NvcGU6IHtcbiAgICAgICdteVNob3cnOiAnPScsXG4gICAgICAnYWZ0ZXJTaG93JzogJyYnLFxuICAgICAgJ2FmdGVySGlkZSc6ICcmJ1xuICAgIH0sXG4gICAgbGluazogZnVuY3Rpb24oc2NvcGUsIGVsZW1lbnQpIHtcbiAgICAgIHNjb3BlLiR3YXRjaCgnbXlTaG93JywgZnVuY3Rpb24oc2hvdywgb2xkU2hvdykge1xuICAgICAgICBpZiAoc2hvdykge1xuICAgICAgICAgICRhbmltYXRlLnJlbW92ZUNsYXNzKGVsZW1lbnQsICduZy1oaWRlJywgc2NvcGUuYWZ0ZXJTaG93KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXNob3cpIHtcbiAgICAgICAgICAkYW5pbWF0ZS5hZGRDbGFzcyhlbGVtZW50LCAnbmctaGlkZScsIHNjb3BlLmFmdGVySGlkZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufSk7XG5cblxucmVxdWlyZSgnLi9zZXJ2aWNlcy9MYXllckNvbmZpZycpO1xucmVxdWlyZSgnLi9zZXJ2aWNlcy9TdG9yaWVzQ29uZmlnJyk7XG5yZXF1aXJlKCcuL3NlcnZpY2VzL1ZlY3Rvci9WZWN0b3JQcm92aWRlcicpO1xucmVxdWlyZSgnLi9zZXJ2aWNlcy9Eb251dHMnKTtcbnJlcXVpcmUoJy4vY29udHJvbGxlcnMvbWFpbicpO1xucmVxdWlyZSgnLi9jb250cm9sbGVycy9tYXAnKTtcbnJlcXVpcmUoJy4vY29udHJvbGxlcnMvZGV0YWlscycpO1xucmVxdWlyZSgnLi9jb250cm9sbGVycy9uYXZiYXInKTtcbnJlcXVpcmUoJy4vY29udHJvbGxlcnMvc2lkZS12aWV3Jyk7XG5yZXF1aXJlKCcuL2NvbnRyb2xsZXJzL3N0b3JpZXMnKTtcbnJlcXVpcmUoJy4vY29udHJvbGxlcnMvbGF5ZXJzJyk7XG5yZXF1aXJlKCcuL2NvbnRyb2xsZXJzL2ZpbHRlcnMnKTtcbnJlcXVpcmUoJy4vY29udHJvbGxlcnMvbGVnZW5kJyk7XG5yZXF1aXJlKCcuL2NvbnRyb2xsZXJzL2luZm8nKTtcbnJlcXVpcmUoJy4vY29udHJvbGxlcnMvYmFzZW1hcHMnKTtcbnJlcXVpcmUoJy4vY29udHJvbGxlcnMvYnJlYWRjcnVtYnMnKTtcbnJlcXVpcmUoJy4vY29udHJvbGxlcnMvem9vbS1leHRlbnQnKTtcbnJlcXVpcmUoJy4vY29udHJvbGxlcnMvdGhlbWUnKTtcbnJlcXVpcmUoJy4vY29udHJvbGxlcnMvdXBsb2FkJyk7XG5yZXF1aXJlKCcuL2NvbnRyb2xsZXJzL3NlYXJjaCcpO1xucmVxdWlyZSgnLi9jb250cm9sbGVycy9leHBvcnQnKTtcbnJlcXVpcmUoJy4uL2xpYi9MZWFmbGV0Lk1hcGJveFZlY3RvclRpbGUvc3JjL01WVFNvdXJjZS5qcycpO1xuXG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgUnlhbiBXaGl0bGV5IDxyd2hpdGxleUBzcGF0aWFsZGV2LmNvbT5cbiAqICAgICAgIG9uIDMvMjgvMTQuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnR2VvQW5ndWxhcicpLmNvbnRyb2xsZXIoJ0Jhc2VtYXBzQ3RybCcsIGZ1bmN0aW9uKCRzY29wZSwgJHN0YXRlLCAkc3RhdGVQYXJhbXMsIExheWVyQ29uZmlnKSB7XG4gICRzY29wZS5iYXNlbWFwcyA9IExheWVyQ29uZmlnLmJhc2VtYXBzO1xuXG4gICRzY29wZS5uYW1lID0gZnVuY3Rpb24gKGFsaWFzKSB7XG4gICAgcmV0dXJuIExheWVyQ29uZmlnW2FsaWFzXS5uYW1lIHx8IGFsaWFzO1xuICB9O1xuXG4gICRzY29wZS5nZXRMYXllcnMgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAoISAkc3RhdGVQYXJhbXMgfHwgISRzdGF0ZVBhcmFtcy5sYXllcnMpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgdmFyIGxheWVycyA9ICRzdGF0ZVBhcmFtcy5sYXllcnMuc3BsaXQoJywnKTtcbiAgICByZXR1cm4gbGF5ZXJzO1xuICB9O1xuXG4gICRzY29wZS5jdXJyZW50QmFzZW1hcCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgbGF5ZXJzID0gJHNjb3BlLmdldExheWVycygpO1xuICAgIGlmICghbGF5ZXJzKSByZXR1cm4gbnVsbDtcbiAgICByZXR1cm4gbGF5ZXJzWzBdO1xuICB9O1xuXG4gICRzY29wZS5zd2FwQmFzZW1hcCA9IGZ1bmN0aW9uIChiYXNlbWFwKSB7XG4gICAgdmFyIGxheWVycyA9ICRzY29wZS5nZXRMYXllcnMoKTtcbiAgICBsYXllcnNbMF0gPSBiYXNlbWFwO1xuICAgIGxheWVycyA9IGxheWVycy5qb2luKCcsJyk7XG4gICAgYW5ndWxhci5leHRlbmQoJHN0YXRlUGFyYW1zLCB7XG4gICAgICBsYXllcnM6IGxheWVyc1xuICAgIH0pO1xuICAgICRzdGF0ZS5nbygnbWFpbicsICRzdGF0ZVBhcmFtcyk7XG4gIH07XG5cbiAgJHNjb3BlLmlzQWN0aXZlQmFzZW1hcCA9IGZ1bmN0aW9uKGJhc2VtYXApIHtcbiAgICByZXR1cm4gJHNjb3BlLmN1cnJlbnRCYXNlbWFwKCkgPT09IGJhc2VtYXA7XG4gIH07XG5cbn0pOyIsIi8qKlxuICogQ3JlYXRlZCBieSBSeWFuIFdoaXRsZXkgPHJ3aGl0bGV5QHNwYXRpYWxkZXYuY29tPlxuICogICAgICAgb24gNC8xNy8xNC5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdHZW9Bbmd1bGFyJykuY29udHJvbGxlcignQnJlYWRjcnVtYnNDdHJsJywgZnVuY3Rpb24oJHNjb3BlLCAkcm9vdFNjb3BlLCAkc3RhdGUsICRzdGF0ZVBhcmFtcywgJGh0dHAsIFZlY3RvclByb3ZpZGVyKSB7XG5cbiAgLyoqXG4gICAqIEZpeGVzIENocm9tZSBNYWduaWZ5aW5nIEdsYXNzIElzc3VlICMyMDZcbiAgICovXG4vLyAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbi8vICAgIHZhciB0b29sYmFyID0gJCgnI01hcFVwcGVyUmlnaHRUb29sYmFyV3JhcHBlcicpO1xuLy8gICAgd2hpbGUgKCB0b29sYmFyLmhlaWdodCgpID4gNDAgKSB7XG4vLyAgICAgIHRvb2xiYXIud2lkdGgoIHRvb2xiYXIud2lkdGgoKSArIDEgKTtcbi8vICAgIH1cbi8vICB9LCAxMDAwKTtcblxuXG5cdC8vdmFyIGZ1bGxTdGFja1VSTCA9IGNvbmZpZy5jaHViYnNQYXRoKCdzZXJ2aWNlcy9nZXRBZG1pblN0YWNrP2Zvcm1hdD1qc29uJmFkbWlubGV2ZWw9OmFkbWlubGV2ZWwmc3RhY2tpZD06Z3VpZCZkYXRhc291cmNlPWdhZG0nKTtcblx0dmFyIGZ1bGxTdGFja1VSTCA9IGNvbmZpZy5jaHViYnNQYXRoKCdzZXJ2aWNlcy9jdXN0b20vY3VzdG9tX29wZXJhdGlvbj9uYW1lPUdldEJyZWFkQ3J1bWJzV2l0aFRoZW1lQ291bnRzQnlJRCZmb3JtYXQ9anNvbiZnYWRtX2xldmVsPTphZG1pbmxldmVsJmlkcz06Z3VpZCZkYXRhc291cmNlPWdhZG0mdGhlbWU9cHJvamVjdHMnKTtcblxuXHR2YXIgYnJlYWRDcnVtYkZlYXR1cmVzID0ge307IC8vU3RvcmUgcmVzdWx0cyBvZiB0aGUgc3RhY2sgbG9va3VwIGhlcmUgc28gd2UgY2FuIHJldXNlLlxuXG5cdCRzY29wZS4kb24oJ2NlbnRlci1mZWF0dXJlJywgZnVuY3Rpb24gKGV2ZW50LCBmZWF0T2JqKSB7XG5cblx0XHQvL1NlZSBpZiB0aGUgZmVhdHVyZSBzdGFjayBoYXMgYWxyZWFkeSBiZWVuIHN0b3JlZFxuXHRcdGlmKGJyZWFkQ3J1bWJGZWF0dXJlc1tmZWF0T2JqLmxldmVsXSAmJiBicmVhZENydW1iRmVhdHVyZXNbZmVhdE9iai5sZXZlbF1bZmVhdE9iai5ndWlkXSl7XG5cdFx0XHQvL0FscmVhZHkgaGF2ZSBpdFxuXHRcdFx0dXBkYXRlQnJlYWRDcnVtYnMoYnJlYWRDcnVtYkZlYXR1cmVzW2ZlYXRPYmoubGV2ZWxdW2ZlYXRPYmouZ3VpZF0sIGZlYXRPYmoubGV2ZWwpO1xuXHRcdH1cblx0XHRlbHNle1xuXHRcdFx0Ly9HbyBmZXRjaCBpdFxuXHRcdFx0Ly9Vc2luZyB0aGUgQ2VudGVyIEZlYXR1cmUncyBHVUlELCBmZXRjaCB0aGUgZnVsbCBzdGFjayBkZXRhaWxzLlxuXHRcdFx0dmFyIHVybCA9IGZ1bGxTdGFja1VSTC5yZXBsYWNlKCc6YWRtaW5sZXZlbCcsIGZlYXRPYmoubGV2ZWwpLnJlcGxhY2UoJzpndWlkJywgZmVhdE9iai5ndWlkKTtcblx0XHRcdHZhciBzZWxmID0gdGhpcztcblxuXG5cdFx0XHQvLyBGZXRjaCBmcm9tIHRoZSBzZXJ2ZXIgb25seSBpZiB3ZSBkb24ndCBoYXZlIGl0IGluIHRoZSBoYXNoXG5cdFx0XHQkaHR0cC5nZXQodXJsKS5zdWNjZXNzKGZ1bmN0aW9uIChyZXN1bHQsIHN0YXR1cykge1xuXG5cdFx0XHRcdGlmICghcmVzdWx0IHx8IHJlc3VsdC5lcnJvcikge1xuXHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoJ1VuYWJsZSB0byBmZXRjaCBmZWF0dXJlOiAnICsgcmVzdWx0LmVycm9yKTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR2YXIgcHJvcGVydGllcyA9IHJlc3VsdFswXTtcblxuXHRcdFx0XHQvL1VwZGF0ZVxuICAgICAgICAgICAgICAgIGlmKHByb3BlcnRpZXMpe1xuICAgICAgICAgICAgICAgICAgICB1cGRhdGVCcmVhZENydW1icyhwcm9wZXJ0aWVzLCBmZWF0T2JqLmxldmVsKTtcblxuICAgICAgICAgICAgICAgICAgICAvL1N0b3JlIGluIHRoZSBoYXNoLlxuICAgICAgICAgICAgICAgICAgICBpZihicmVhZENydW1iRmVhdHVyZXNbZmVhdE9iai5sZXZlbF0pe1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWRDcnVtYkZlYXR1cmVzW2ZlYXRPYmoubGV2ZWxdW3Byb3BlcnRpZXNbXCJndWlkXCIgKyBmZWF0T2JqLmxldmVsXV0gPSBwcm9wZXJ0aWVzO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhZENydW1iRmVhdHVyZXNbZmVhdE9iai5sZXZlbF0gPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFkQ3J1bWJGZWF0dXJlc1tmZWF0T2JqLmxldmVsXVtwcm9wZXJ0aWVzW1wiZ3VpZFwiICsgZmVhdE9iai5sZXZlbF1dID0gcHJvcGVydGllcztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlwiKTtcbiAgICAgICAgICAgICAgICB9XG5cdFx0XHR9KTtcblx0XHR9XG5cdH0pO1xuXG5cdGZ1bmN0aW9uIHVwZGF0ZUJyZWFkQ3J1bWJzKGZlYXRPYmosIGxldmVsKSB7XG5cdFx0Ly9VcGRhdGUgVGhlIEJyZWFkY3J1bWIgZGlzcGxheVxuXHRcdC8vQ2xlYXIgbG93ZXIgbGV2ZWwgc2NvcGUgaXRlbXMgaW4gY2FzZSB3ZSd2ZSB6b29tZWQgb3V0XG5cdFx0Zm9yICh2YXIgeCA9IGxldmVsOyB4IDw9IDU7IHgrKykge1xuXHRcdFx0Ly9udWxsIG91dCBhbnkgbGV2ZWwgdmFsdWVzIHRoYXQgYXJlIExPV0VSIHRoYW4gd2hhdCB3ZSdyZSBjdXJyZW50bHkgbG9va2luZyBhdFxuXHRcdFx0JHNjb3BlW1wibGV2ZWxcIiArIHhdID0gXCJcIjtcblx0XHRcdCRzY29wZVtcImZlYXRcIiArIHhdID0gbnVsbDtcblxuXHRcdFx0aWYoeCA9PSAtMSl7XG5cdFx0XHRcdCRzY29wZVtcImxldmVsYXJjXCJdID0gZmVhdE9ialtcIm5hbWVhcmNcIl07XG5cdFx0XHRcdCRzY29wZVtcImZlYXRhcmNcIl0gPSBmZWF0T2JqO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vdXNpbmcgdGhlIHJlcXVlc3RlZCBsZXZlbCwgZGlnIG91dCB0aGUgcHJvcGVydGllcyBmb3IgdGhhdCBsZXZlbCBhbmQgb25lcyBhYm92ZSBpdFxuXHRcdGZvciAodmFyIGkgPSBsZXZlbDsgaSA+PSAtMTsgaS0tKSB7XG5cdFx0XHRpZihpID09IC0xKXtcblx0XHRcdFx0JHNjb3BlW1wibGV2ZWxhcmNcIl0gPSBmZWF0T2JqW1wibmFtZWFyY1wiXTtcblx0XHRcdFx0JHNjb3BlW1wiZmVhdGFyY1wiXSA9IGZlYXRPYmo7XG5cdFx0XHR9XG5cdFx0XHQkc2NvcGVbXCJsZXZlbFwiICsgaV0gPSBmZWF0T2JqW1wibmFtZVwiICsgaV07XG5cdFx0XHQkc2NvcGVbXCJmZWF0XCIgKyBpXSA9IGZlYXRPYmo7XG5cdFx0fVxuXHR9XG5cbiAgJHNjb3BlLnpvb21Ub0dVSUQgPSBmdW5jdGlvbiAoZmVhdE9iaiwgbGV2ZWwpIHtcbiAgICAvL0dpdmVuIGEgR1VJRCwgem9vbSB0byB0aGUgZmVhdHVyZS5cblxuICAgIC8vR3JhYiB0aGUgZmVhdHVyZSBmcm9tIHRoZSBWZWN0b3JQcm92aWRlci5cbiAgICBWZWN0b3JQcm92aWRlci5mZXRjaEZlYXR1cmUoZmVhdE9ialtcImd1aWRcIiArIChsZXZlbCA+PSAwID8gbGV2ZWwgOiBcImFyY1wiKV0sIGxldmVsLCBudWxsLCBmdW5jdGlvbiAoZmVhdCkge1xuICAgICAgLy9NYWtlIGEgdGVtcCBnZW9qc29uIGxheWVyIGFuZCBhZGQgdGhlIGdlb2pzb24uXG4gICAgICAvL1RoZW4gZ3JhYiB0aGUgYm91bmRzIGZyb20gaXQgYW5kIHpvb20gdG8gaXQuXG5cbiAgICAgIHZhciBnamwgPSBMLmdlb0pzb24oZmVhdC5nZW9tZXRyeSk7XG4gICAgICAkc2NvcGUuJHBhcmVudC56b29tVG9Cb3VuZHMoZ2psLmdldEJvdW5kcygpKTtcbiAgICB9KTtcbiAgfTtcblxuICAkc2NvcGUuem9vbVRvV29ybGQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGJvdW5kcyA9IEwubGF0TG5nQm91bmRzKEwubGF0TG5nKC01MCwtMTc5KSwgTC5sYXRMbmcoNTAsMTc5KSk7XG4gICAgJHNjb3BlLiRwYXJlbnQuem9vbVRvQm91bmRzKGJvdW5kcyk7XG4gIH07XG5cbn0pO1xuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IE5pY2hvbGFzIEhhbGxhaGFuIDxuaGFsbGFoYW5Ac3BhdGlhbGRldi5jb20+XG4gKiAgICAgICBvbiA0LzkvMTQuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnR2VvQW5ndWxhcicpLmNvbnRyb2xsZXIoJ0RldGFpbHNDdHJsJywgZnVuY3Rpb24gKCRzY29wZSwgJHJvb3RTY29wZSwgJHN0YXRlLCAkc3RhdGVQYXJhbXMsICRodHRwLCBEb251dHMsICRmaWx0ZXIpIHtcblxuICAkc2NvcGUuZGV0YWlscyA9IHt9O1xuICAkc2NvcGUubmF2VGFiID0gJ2RldGFpbHMnO1xuXG4gICRzY29wZS5zYWxlc2ZvcmNlVXJsID0gY29uZmlnLnNhbGVzZm9yY2VVcmw7XG5cbiAgJGh0dHAuZ2V0KCdzdWNjdWJ1c19naXRpZ25vcmUvc2Ytb2JqZWN0LWZpZWxkLWhhc2guanNvbicsIHtjYWNoZWQ6IHRydWV9KS5zdWNjZXNzKGZ1bmN0aW9uKHNmRmllbGRIYXNoKSB7XG4gICAgJHNjb3BlLnNmRmllbGRIYXNoID0gc2ZGaWVsZEhhc2g7XG4gICAgJHNjb3BlLlByb2plY3RCdXNpbmVzc1VuaXQgPSBzZkZpZWxkSGFzaFtcIlByb2plY3RfX2NcIl1bXCJidXNpbmVzc191bml0X19jXCJdW1wicGlja2xpc3RWYWx1ZXNcIl07XG4gIH0pO1xuXG4gICRzY29wZS5zaG93UmZhID0gZnVuY3Rpb24gKGRldGFpbHMsIHZhbHVlKSB7XG4gICAgZGV0YWlscy5zaG93UmZhID0gdHJ1ZTtcbiAgICB2YWx1ZS5zaG93UmZhID0gdHJ1ZTtcbiAgfTtcblxuICAkc2NvcGUuaGlkZVJmYSA9IGZ1bmN0aW9uIChkZXRhaWxzLCB2YWx1ZSkge1xuICAgIGRldGFpbHMuc2hvd1JmYSA9IGZhbHNlO1xuICAgIHZhbHVlLnNob3dSZmEgPSBmYWxzZTtcbiAgfTtcblxuICAkc2NvcGUuc2hvd0luZGljYXRvcnMgPSBmdW5jdGlvbiAoZGV0YWlscywgdmFsdWUpIHtcbiAgICBkZXRhaWxzLnNob3dJbmRpY2F0b3JzID0gdHJ1ZTtcbiAgICB2YWx1ZS5zaG93SW5kaWNhdG9ycyA9IHRydWU7XG4gIH07XG5cbiAgJHNjb3BlLmhpZGVJbmRpY2F0b3JzID0gZnVuY3Rpb24gKGRldGFpbHMsIHZhbHVlKSB7XG4gICAgZGV0YWlscy5zaG93SW5kaWNhdG9ycyA9IGZhbHNlO1xuICAgIHZhbHVlLnNob3dJbmRpY2F0b3JzID0gZmFsc2U7XG4gIH07XG5cbiAgJHNjb3BlLnNob3dSaXNrcyA9IGZ1bmN0aW9uIChkZXRhaWxzLCB2YWx1ZSkge1xuICAgICAgZGV0YWlscy5zaG93Umlza3MgPSB0cnVlO1xuICAgICAgdmFsdWUuc2hvd1Jpc2tzID0gdHJ1ZTtcbiAgfTtcblxuICAkc2NvcGUuaGlkZVJpc2tzID0gZnVuY3Rpb24gKGRldGFpbHMsIHZhbHVlKSB7XG4gICAgICBkZXRhaWxzLnNob3dSaXNrcyA9IGZhbHNlO1xuICAgICAgdmFsdWUuc2hvd1Jpc2tzID0gZmFsc2U7XG4gIH07XG5cbiAgJHNjb3BlLnNob3dTdGF0dXNlcyA9IGZ1bmN0aW9uIChkZXRhaWxzLCB2YWx1ZSkge1xuICAgICAgZGV0YWlscy5zaG93U3RhdHVzZXMgPSB0cnVlO1xuICAgICAgdmFsdWUuc2hvd1N0YXR1c2VzID0gdHJ1ZTtcbiAgfTtcblxuICAkc2NvcGUuaGlkZVN0YXR1c2VzID0gZnVuY3Rpb24gKGRldGFpbHMsIHZhbHVlKSB7XG4gICAgICBkZXRhaWxzLnNob3dTdGF0dXNlcyA9IGZhbHNlO1xuICAgICAgdmFsdWUuc2hvd1N0YXR1c2VzID0gZmFsc2U7XG4gIH07XG5cbiAgJHNjb3BlLmxhYmVsID0gZnVuY3Rpb24gKGtleSkge1xuXG4gICAgdmFyIGRlc2MgPSBrZXk7XG5cbiAgICAvLyBkaXNhc3RlclxuICAgIGlmICgkc3RhdGVQYXJhbXMudGhlbWUuaW5kZXhPZignZGlzYXN0ZXInKSAhPT0gLTEpIHtcblxuICAgICAgaWYgKCRzY29wZS5zZkZpZWxkSGFzaC5EaXNhc3Rlcl9fY1trZXldKSB7XG4gICAgICAgIGRlc2MgPSAkc2NvcGUuc2ZGaWVsZEhhc2guRGlzYXN0ZXJfX2Nba2V5XS5sYWJlbCB8fCBrZXk7XG4gICAgICB9XG5cbiAgICAgIGlmICgkc2NvcGUuc2ZGaWVsZEhhc2guTG9jYXRpb25fX2Nba2V5XSkge1xuICAgICAgICBkZXNjID0gJHNjb3BlLnNmRmllbGRIYXNoLkxvY2F0aW9uX19jW2tleV0ubGFiZWwgfHwga2V5O1xuICAgICAgfVxuXG4gICAgICBpZiAoJHNjb3BlLnNmRmllbGRIYXNoLkRpc2FzdGVyX0xvY2F0aW9uX19jW2tleV0pIHtcbiAgICAgICAgZGVzYyA9ICRzY29wZS5zZkZpZWxkSGFzaC5EaXNhc3Rlcl9Mb2NhdGlvbl9fY1trZXldLmxhYmVsIHx8IGtleTtcbiAgICAgIH1cblxuICAgICAgaWYgKCRzY29wZS5zZkZpZWxkSGFzaC5SZXF1ZXN0X0Zvcl9Bc3Npc3RhbmNlX19jW2tleV0pIHtcbiAgICAgICAgZGVzYyA9ICRzY29wZS5zZkZpZWxkSGFzaC5SZXF1ZXN0X0Zvcl9Bc3Npc3RhbmNlX19jW2tleV0ubGFiZWwgfHwga2V5O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGVzYztcbiAgICB9XG5cbiAgICAvLyBjb250ZXh0dWFsIGxheWVyXG4gICAgaWYgKCRzY29wZS5jb250ZXh0dWFsTGF5ZXIpIHtcbiAgICAgIHJldHVybiBrZXk7XG4gICAgfVxuXG5cbiAgICBpZiAoJHN0YXRlUGFyYW1zLnRoZW1lID09PSAncHJvamVjdFJpc2snKSB7XG4gICAgICAvLyBwcm9qZWN0XG4gICAgICBpZiAoJHNjb3BlLnNmRmllbGRIYXNoLlByb2plY3RfX2Nba2V5XSkge1xuICAgICAgICBkZXNjID0gJHNjb3BlLnNmRmllbGRIYXNoLlByb2plY3RfX2Nba2V5XS5sYWJlbCB8fCBrZXk7XG4gICAgICB9XG5cbiAgICAgIGlmICgkc2NvcGUuc2ZGaWVsZEhhc2guTG9jYXRpb25fX2Nba2V5XSkge1xuICAgICAgICBkZXNjID0gJHNjb3BlLnNmRmllbGRIYXNoLkxvY2F0aW9uX19jW2tleV0ubGFiZWwgfHwga2V5O1xuICAgICAgfVxuXG4gICAgICBpZiAoJHNjb3BlLnNmRmllbGRIYXNoLlJpc2tfX2Nba2V5XSkge1xuICAgICAgICBkZXNjID0gJHNjb3BlLnNmRmllbGRIYXNoLlJpc2tfX2Nba2V5XS5sYWJlbCB8fCBrZXk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkZXNjO1xuICAgIH1cblxuXG4gICAgLy9pZiAoJHN0YXRlUGFyYW1zLnRoZW1lID09PSAncHJvamVjdEhlYWx0aCcpIHtcbiAgICAvLyAgLy8gcHJvamVjdFxuICAgIC8vICBpZiAoJHNjb3BlLnNmRmllbGRIYXNoLlByb2plY3RfX2Nba2V5XSkge1xuICAgIC8vICAgIGRlc2MgPSAkc2NvcGUuc2ZGaWVsZEhhc2guUHJvamVjdF9fY1trZXldLmxhYmVsIHx8IGtleTtcbiAgICAvLyAgfVxuICAgIC8vXG4gICAgLy8gIGlmICgkc2NvcGUuc2ZGaWVsZEhhc2guTG9jYXRpb25fX2Nba2V5XSkge1xuICAgIC8vICAgIGRlc2MgPSAkc2NvcGUuc2ZGaWVsZEhhc2guTG9jYXRpb25fX2Nba2V5XS5sYWJlbCB8fCBrZXk7XG4gICAgLy8gIH1cbiAgICAvL1xuICAgIC8vICBpZiAoJHNjb3BlLnNmRmllbGRIYXNoLlByb2plY3RfRXZhbHVhdGlvbl9fY1trZXldKSB7XG4gICAgLy8gICAgZGVzYyA9ICRzY29wZS5zZkZpZWxkSGFzaC5Qcm9qZWN0X0V2YWx1YXRpb25fX2Nba2V5XS5sYWJlbCB8fCBrZXk7XG4gICAgLy8gIH1cbiAgICAvL1xuICAgIC8vICByZXR1cm4gZGVzYztcbiAgICAvL31cblxuICAgIC8vIHByb2plY3RcbiAgICBpZiAoJHNjb3BlLnNmRmllbGRIYXNoLlByb2plY3RfX2Nba2V5XSkge1xuICAgICAgZGVzYyA9ICRzY29wZS5zZkZpZWxkSGFzaC5Qcm9qZWN0X19jW2tleV0ubGFiZWwgfHwga2V5O1xuICAgIH1cblxuICAgIGlmICgkc2NvcGUuc2ZGaWVsZEhhc2guTG9jYXRpb25fX2Nba2V5XSkge1xuICAgICAgZGVzYyA9ICRzY29wZS5zZkZpZWxkSGFzaC5Mb2NhdGlvbl9fY1trZXldLmxhYmVsIHx8IGtleTtcbiAgICB9XG5cbiAgICBpZiAoJHNjb3BlLnNmRmllbGRIYXNoLkluZGljYXRvcl9fY1trZXldKSB7XG4gICAgICBkZXNjID0gJHNjb3BlLnNmRmllbGRIYXNoLkluZGljYXRvcl9fY1trZXldLmxhYmVsIHx8IGtleTtcbiAgICB9XG5cbiAgICBpZiAoJHNjb3BlLnNmRmllbGRIYXNoLkluZGljYXRvcl9WYWx1ZV9fY1trZXldKSB7XG4gICAgICBkZXNjID0gJHNjb3BlLnNmRmllbGRIYXNoLkluZGljYXRvcl9WYWx1ZV9fY1trZXldLmxhYmVsIHx8IGtleTtcbiAgICB9XG5cbiAgICBpZiAoJHNjb3BlLnNmRmllbGRIYXNoLkxvZ2ZyYW1lX0VsZW1lbnRfX2Nba2V5XSkge1xuICAgICAgZGVzYyA9ICRzY29wZS5zZkZpZWxkSGFzaC5Mb2dmcmFtZV9FbGVtZW50X19jW2tleV0ubGFiZWwgfHwga2V5O1xuICAgIH1cblxuICAgIHJldHVybiBkZXNjO1xuXG4gIH07XG5cbiAgJHNjb3BlLnRvb2x0aXAgPSBmdW5jdGlvbiAoa2V5KSB7XG4vLyAgICAoc2ZGaWVsZEhhc2hba2V5XS5pbmxpbmVIZWxwVGV4dCB8fCAnJykgKyAnIEZpZWxkTmFtZTogJyArIGtleVxuXG4gICAgdmFyIGRlc2MgPSAnJztcblxuICAgIC8vIGRpc2FzdGVyXG4gICAgaWYgKCRzdGF0ZVBhcmFtcy50aGVtZSA9PT0gJ2Rpc2FzdGVyJykge1xuXG4gICAgICBpZiAoJHNjb3BlLnNmRmllbGRIYXNoLkRpc2FzdGVyX19jW2tleV0pIHtcbiAgICAgICAgZGVzYyA9ICRzY29wZS5zZkZpZWxkSGFzaC5EaXNhc3Rlcl9fY1trZXldLmlubGluZUhlbHBUZXh0IHx8ICcnO1xuICAgICAgfVxuXG4gICAgICBpZiAoJHNjb3BlLnNmRmllbGRIYXNoLkxvY2F0aW9uX19jW2tleV0pIHtcbiAgICAgICAgZGVzYyA9ICRzY29wZS5zZkZpZWxkSGFzaC5Mb2NhdGlvbl9fY1trZXldLmlubGluZUhlbHBUZXh0IHx8ICcnO1xuICAgICAgfVxuXG4gICAgICBpZiAoJHNjb3BlLnNmRmllbGRIYXNoLkRpc2FzdGVyX0xvY2F0aW9uX19jW2tleV0pIHtcbiAgICAgICAgZGVzYyA9ICRzY29wZS5zZkZpZWxkSGFzaC5EaXNhc3Rlcl9Mb2NhdGlvbl9fY1trZXldLmlubGluZUhlbHBUZXh0IHx8ICcnO1xuICAgICAgfVxuXG4gICAgICBpZiAoJHNjb3BlLnNmRmllbGRIYXNoLlJlcXVlc3RfRm9yX0Fzc2lzdGFuY2VfX2Nba2V5XSkge1xuICAgICAgICBkZXNjID0gJHNjb3BlLnNmRmllbGRIYXNoLlJlcXVlc3RfRm9yX0Fzc2lzdGFuY2VfX2Nba2V5XS5pbmxpbmVIZWxwVGV4dCB8fCAnJztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRlc2MgKyAnIEZpZWxkTmFtZTogJyArIGtleTtcbiAgICB9XG5cbiAgICAvLyBjb250ZXh0dWFsIGxheWVyXG4gICAgaWYgKCRzY29wZS5jb250ZXh0dWFsTGF5ZXIpIHtcbiAgICAgIHJldHVybiAnRmllbGROYW1lOiAnICsga2V5O1xuICAgIH1cblxuICAgIGlmICgkc3RhdGVQYXJhbXMudGhlbWUgPT09ICdwcm9qZWN0UmlzaycpIHtcbiAgICAgIGlmICgkc2NvcGUuc2ZGaWVsZEhhc2guUHJvamVjdF9fY1trZXldKSB7XG4gICAgICAgIGRlc2MgPSAkc2NvcGUuc2ZGaWVsZEhhc2guUHJvamVjdF9fY1trZXldLmlubGluZUhlbHBUZXh0IHx8ICcnO1xuICAgICAgfVxuXG4gICAgICBpZiAoJHNjb3BlLnNmRmllbGRIYXNoLkxvY2F0aW9uX19jW2tleV0pIHtcbiAgICAgICAgZGVzYyA9ICRzY29wZS5zZkZpZWxkSGFzaC5Mb2NhdGlvbl9fY1trZXldLmlubGluZUhlbHBUZXh0IHx8ICcnO1xuICAgICAgfVxuXG4gICAgICBpZiAoJHNjb3BlLnNmRmllbGRIYXNoLlJpc2tfX2Nba2V5XSkge1xuICAgICAgICBkZXNjID0gJHNjb3BlLnNmRmllbGRIYXNoLlJpc2tfX2Nba2V5XS5pbmxpbmVIZWxwVGV4dCB8fCAnJztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRlc2MgKyAnIEZpZWxkTmFtZTogJyArIGtleTtcbiAgICB9XG5cbiAgICAvL2lmICgkc3RhdGVQYXJhbXMudGhlbWUgPT09ICdwcm9qZWN0SGVhbHRoJykge1xuICAgIC8vICBpZiAoJHNjb3BlLnNmRmllbGRIYXNoLlByb2plY3RfX2Nba2V5XSkge1xuICAgIC8vICAgIGRlc2MgPSAkc2NvcGUuc2ZGaWVsZEhhc2guUHJvamVjdF9fY1trZXldLmlubGluZUhlbHBUZXh0IHx8ICcnO1xuICAgIC8vICB9XG4gICAgLy9cbiAgICAvLyAgaWYgKCRzY29wZS5zZkZpZWxkSGFzaC5Mb2NhdGlvbl9fY1trZXldKSB7XG4gICAgLy8gICAgZGVzYyA9ICRzY29wZS5zZkZpZWxkSGFzaC5Mb2NhdGlvbl9fY1trZXldLmlubGluZUhlbHBUZXh0IHx8ICcnO1xuICAgIC8vICB9XG4gICAgLy9cbiAgICAvLyAgaWYgKCRzY29wZS5zZkZpZWxkSGFzaC5Qcm9qZWN0X0V2YWx1YXRpb25fX2Nba2V5XSkge1xuICAgIC8vICAgIGRlc2MgPSAkc2NvcGUuc2ZGaWVsZEhhc2guUHJvamVjdF9FdmFsdWF0aW9uX19jW2tleV0uaW5saW5lSGVscFRleHQgfHwgJyc7XG4gICAgLy8gIH1cbiAgICAvLyAgcmV0dXJuIGRlc2MgKyAnIEZpZWxkTmFtZTogJyArIGtleTtcbiAgICAvL31cblxuICAgIC8vIHByb2plY3RcbiAgICBpZiAoJHNjb3BlLnNmRmllbGRIYXNoLlByb2plY3RfX2Nba2V5XSkge1xuICAgICAgZGVzYyA9ICRzY29wZS5zZkZpZWxkSGFzaC5Qcm9qZWN0X19jW2tleV0uaW5saW5lSGVscFRleHQgfHwgJyc7XG4gICAgfVxuXG4gICAgaWYgKCRzY29wZS5zZkZpZWxkSGFzaC5Mb2NhdGlvbl9fY1trZXldKSB7XG4gICAgICBkZXNjID0gJHNjb3BlLnNmRmllbGRIYXNoLkxvY2F0aW9uX19jW2tleV0uaW5saW5lSGVscFRleHQgfHwgJyc7XG4gICAgfVxuXG4gICAgaWYgKCRzY29wZS5zZkZpZWxkSGFzaC5JbmRpY2F0b3JfX2Nba2V5XSkge1xuICAgICAgZGVzYyA9ICRzY29wZS5zZkZpZWxkSGFzaC5JbmRpY2F0b3JfX2Nba2V5XS5pbmxpbmVIZWxwVGV4dCB8fCAnJztcbiAgICB9XG5cbiAgICBpZiAoJHNjb3BlLnNmRmllbGRIYXNoLkluZGljYXRvcl9WYWx1ZV9fY1trZXldKSB7XG4gICAgICBkZXNjID0gJHNjb3BlLnNmRmllbGRIYXNoLkluZGljYXRvcl9WYWx1ZV9fY1trZXldLmlubGluZUhlbHBUZXh0IHx8ICcnO1xuICAgIH1cblxuICAgIGlmICgkc2NvcGUuc2ZGaWVsZEhhc2guTG9nZnJhbWVfRWxlbWVudF9fY1trZXldKSB7XG4gICAgICBkZXNjID0gJHNjb3BlLnNmRmllbGRIYXNoLkxvZ2ZyYW1lX0VsZW1lbnRfX2Nba2V5XS5pbmxpbmVIZWxwVGV4dCB8fCAnJztcbiAgICB9XG5cbiAgICByZXR1cm4gZGVzYyArICcgRmllbGROYW1lOiAnICsga2V5O1xuXG4gIH07XG5cbiAgLy9Jbml0IHNlbGVjdGVkRmVhdHVyZVRpdGxlIHByb3BlcnR5XG4gICRzY29wZS50aXRsZT0gXCJGZWF0dXJlIERldGFpbHNcIjtcblxuICB2YXIgc29ydERldGFpbHMgPSBmdW5jdGlvbigpe1xuICAgIHZhciBwcm9qZWN0a2V5ID0gT2JqZWN0LmtleXMoJHNjb3BlLmdyb3VwaW5ncylbMF07XG5cbiAgICAvLyBQcm9qZWN0cyBhbmQgUHJvamVjdCBSaXNrIGhhdmUgc2FtZSBzb3J0aW5nIHJ1bGVzXG4gICAgaWYoJHNjb3BlLmdyb3VwaW5ncy5oYXNPd25Qcm9wZXJ0eSgnUHJvamVjdHMnKT09dHJ1ZSB8fCAkc2NvcGUuZ3JvdXBpbmdzLmhhc093blByb3BlcnR5KCdQcm9qZWN0IFJpc2snKT09dHJ1ZSl7XG4gICAgICAkc2NvcGUuZ3JvdXBpbmdzW3Byb2plY3RrZXldID0gU29ydEJ5UHJvamVjdFJpc2soJHNjb3BlLmdyb3VwaW5nc1twcm9qZWN0a2V5XSk7XG4gICAgfTtcblxuICAgIGlmKCRzY29wZS5ncm91cGluZ3MuaGFzT3duUHJvcGVydHkoJ1Byb2plY3QgSGVhbHRoJyk9PXRydWUpe1xuICAgICAgJHNjb3BlLmdyb3VwaW5nc1twcm9qZWN0a2V5XSA9IFNvcnRCeVByb2plY3RIZWFsdGgoJHNjb3BlLmdyb3VwaW5nc1twcm9qZWN0a2V5XSk7XG4gICAgfTtcblxuICAgIGlmKCRzY29wZS5ncm91cGluZ3MuaGFzT3duUHJvcGVydHkoJ0Rpc2FzdGVycycpPT10cnVlKXtcbiAgICAgICRzY29wZS5ncm91cGluZ3NbJ0Rpc2FzdGVycyddID0gU29yeUJ5RGlzYXN0ZXIoJHNjb3BlLmdyb3VwaW5nc1snRGlzYXN0ZXJzJ10pO1xuICAgIH07XG5cbiAgfTtcblxuICAkc2NvcGUudG9nZ2xlU3RhdGUgPSBmdW5jdGlvbihzdGF0ZU5hbWUpIHtcbiAgICB2YXIgc3RhdGUgPSAkc3RhdGUuY3VycmVudC5uYW1lICE9PSBzdGF0ZU5hbWUgPyBzdGF0ZU5hbWUgOiAnbWFpbic7XG4gICAgJHN0YXRlLmdvKHN0YXRlLCAkc3RhdGVQYXJhbXMpO1xuICB9O1xuXG4gICRzY29wZS5pdGVtc0xpc3QgPSB0cnVlO1xuICAkc2NvcGUuZGV0YWlscyA9IGZhbHNlO1xuXG5cbiAgLy9Jbml0aWFsaXplIHRoZSBkdW1teSBwcm9qZWN0L2Rpc2FzdGVyIGNsaWNrIHJlc3VsdHNcbiAgJHNjb3BlLmdyb3VwaW5ncyA9IHt9O1xuXG4gICRzY29wZS5hbGVydFVzZXJUb0NsaWNrID0gdHJ1ZTtcblxuICAkc2NvcGUuJG9uKCdkZXRhaWxzJywgZnVuY3Rpb24gKGV2ZW50LCBmZWF0dXJlTGF5ZXIpIHtcbiAgICAkc2NvcGUuYWxlcnRVc2VyVG9DbGljayA9IGZhbHNlO1xuICAgIHZhciBwcm9wZXJ0aWVzID0gZmVhdHVyZUxheWVyLmZlYXR1cmUucHJvcGVydGllcztcbiAgICAkc2NvcGUuZmVhdHVyZSA9IGZlYXR1cmVMYXllci5mZWF0dXJlO1xuICAgICRzY29wZS50aXRsZSA9ICRzY29wZS5mZWF0dXJlVGl0bGUgPSBwcm9wZXJ0aWVzLm5hbWUgfHwgcHJvcGVydGllcy50aXRsZSB8fCAnU2VsZWN0ZWQgRmVhdHVyZSc7XG4gICAgaWYgKHByb3BlcnRpZXMuc2FsZXNmb3JjZSkgeyAvLyBzYWxlc2ZvcmNlIHRoZW1lIGJhZGdlIHNlbGVjdGVkXG4gICAgICAkc2NvcGUuY29udGV4dHVhbExheWVyID0gZmFsc2U7XG4gICAgICAkc2NvcGUuZ3JvdXBpbmdzID0gcHJvcGVydGllcy5zYWxlc2ZvcmNlO1xuXG4gICAgICBzb3J0RGV0YWlscygpO1xuXG4gICAgICAkc2NvcGUubnVtVGhlbWVJdGVtcyA9ICQubWFwKHByb3BlcnRpZXMuc2FsZXNmb3JjZSwgZnVuY3Rpb24obikgeyByZXR1cm4gbn0pLmxlbmd0aDtcbiAgICAgICRzY29wZS5zaG93TGlzdCgpO1xuXG4gICAgICAvLyBjbG9zZSBwYXJhbSBpZiB1c2VyIHNlbGVjdHMgYSBjb3VudHJ5IHdpdGggbm8gZGF0YVxuICAgICAgdmFyIG9ianRpdGxlID0gT2JqZWN0LmtleXMocHJvcGVydGllcy5zYWxlc2ZvcmNlKVswXTtcbiAgICAgIGlmKHByb3BlcnRpZXMuc2FsZXNmb3JjZVtvYmp0aXRsZV0ubGVuZ3RoPj0xKXtcbiAgICAgICAgJHNjb3BlLm9wZW5QYXJhbSgnZGV0YWlscy1wYW5lbCcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJHNjb3BlLmNsb3NlUGFyYW0oJ2RldGFpbHMtcGFuZWwnKTtcbiAgICAgIH1cblxuICAgICAgJHNjb3BlLmNyZWF0ZURvbnV0cygpO1xuICAgICAgJHNjb3BlLmRhdGFzZXQgPSBEb251dHMuZGF0YXNldDtcblxuICAgICAgLy9zZWN0b3IgbGVnZW5kXG4gICAgICB2YXIgZGM9MDsgLy90b3RhbCBzZWN0b3JzXG4gICAgICBmb3IodmFyIGk9MDtpPCRzY29wZS5kYXRhc2V0Lmxlbmd0aDtpKyspe1xuICAgICAgICBkYyA9IGRjICsgJHNjb3BlLmRhdGFzZXRbaV0uY291bnQ7XG4gICAgICB9XG4gICAgICBmb3IodmFyIGk9MDtpPCRzY29wZS5kYXRhc2V0Lmxlbmd0aDtpKyspe1xuICAgICAgICAkc2NvcGUuZGF0YXNldFtpXS53aWR0aCA9IE1hdGgucm91bmQoKDI3NyAqICgkc2NvcGUuZGF0YXNldFtpXS5jb3VudC9kYykpKTsgLy8gcGVyY2VudGFnZSBvZiBkaXYgKDI1MHB4KVxuICAgICAgfVxuICAgICAgLy8gU29ydCBzZWN0b3IgYXJyYXkgYnkgY291bnRcbiAgICAgICRzY29wZS5kYXRhc2V0LnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIGIud2lkdGggLSBhLndpZHRoOyAvLyBzb3J0IGJ5IGNvdW50XG4gICAgICB9KTtcblxuICAgICAgaWYoJHNjb3BlLmRhdGFzZXQubGVuZ3RoPjApIHtcbiAgICAgICAgJHNjb3BlLmRhdGFzZXRUaXRsZSA9ICRzY29wZS5kYXRhc2V0WzBdLmFsaWFzO1xuICAgICAgICAkc2NvcGUuZGF0YXNldENvbG9yID0gJHNjb3BlLmRhdGFzZXRbMF0uY29sb3I7XG4gICAgICAgICRzY29wZS5kYXRhc2V0Q291bnQgPSAkc2NvcGUuZGF0YXNldFswXS5jb3VudDtcbiAgICAgIH1cblxuICAgICAgJHNjb3BlLmhpZGVMZWdlbmQgPSBmYWxzZTtcbiAgICAgIC8vIGVuZCBzZWN0b3IgbGVnZW5kXG5cbiAgICB9IGVsc2UgeyAvLyBzdGFuZGFyZCBnZW9qc29uLCBzaG93IHByb3BlcnRpZXMgYXMgZGV0YWlsc1xuXG4gICAgICAkc2NvcGUuY29udGV4dHVhbExheWVyID0gKHByb3BlcnRpZXMuc2ZfaWQgPyBmYWxzZSA6IHRydWUpO1xuICAgICAgJHNjb3BlLnNob3dEZXRhaWxzKHByb3BlcnRpZXMpO1xuICAgICAgJHNjb3BlLm9wZW5QYXJhbSgnZGV0YWlscy1wYW5lbCcpO1xuICAgICAgLy8kc2NvcGUubnVtVGhlbWVJdGVtcyA9IDE7IC8vbm9uIHNhbGVzIGZvcmNlIGZlYXR1cmVzXG4gICAgfVxuICAgICRzY29wZS5yZXNpemVEZXRhaWxzUGFuZWwoKTtcbiAgfSk7XG5cbiAgdmFyIFNvcnRCeVByb2plY3RSaXNrID0gZnVuY3Rpb24oYXJyKXtcbiAgICBhcnIuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgaWYgKGNvbmZpZy5Qcm9qZWN0Umlza09yZGVyW2Eub3ZlcmFsbF9hc3Nlc3NtZW50X19jXSA8IGNvbmZpZy5Qcm9qZWN0Umlza09yZGVyW2Iub3ZlcmFsbF9hc3Nlc3NtZW50X19jXSkge1xuICAgICAgICByZXR1cm4gMTtcbiAgICAgIH1cbiAgICAgIGlmIChjb25maWcuUHJvamVjdFJpc2tPcmRlclthLm92ZXJhbGxfYXNzZXNzbWVudF9fY10gPiBjb25maWcuUHJvamVjdFJpc2tPcmRlcltiLm92ZXJhbGxfYXNzZXNzbWVudF9fY10pIHtcbiAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgfVxuICAgICAgLy8gYSBtdXN0IGJlIGVxdWFsIHRvIGJcbiAgICAgIHJldHVybiAwO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGFycjtcbiAgfTtcbiAgdmFyIFNvcnlCeURpc2FzdGVyID0gZnVuY3Rpb24oYXJyKXtcbiAgICBhcnIuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgaWYgKGNvbmZpZy5EaXNhc3Rlck9yZGVyW2EuaXJvY19zdGF0dXNfX2NdIDwgY29uZmlnLkRpc2FzdGVyT3JkZXJbYi5pcm9jX3N0YXR1c19fY10pIHtcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgICB9XG4gICAgICBpZiAoY29uZmlnLkRpc2FzdGVyT3JkZXJbYS5pcm9jX3N0YXR1c19fY10gPiBjb25maWcuRGlzYXN0ZXJPcmRlcltiLmlyb2Nfc3RhdHVzX19jXSkge1xuICAgICAgICByZXR1cm4gLTE7XG4gICAgICB9XG4gICAgICAvLyBpbiBjYXNlIG9mIGEgdGllOyBvcmRlciBieSBkYXRlXG4gICAgICByZXR1cm4gbmV3IERhdGUoYi5kYXRlX19jKSAtIG5ldyBEYXRlKGEuZGF0ZV9fYyk7XG5cbiAgICB9KTtcblxuICAgIHJldHVybiBhcnI7XG4gIH07XG4gIHZhciBTb3J0QnlQcm9qZWN0SGVhbHRoID0gZnVuY3Rpb24oYXJyKXtcbiAgICBhcnIuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgaWYgKGNvbmZpZy5Qcm9qZWN0SGVhbHRoT3JkZXJbYS5vdmVyYWxsX3N0YXR1c19fY10gPCBjb25maWcuUHJvamVjdEhlYWx0aE9yZGVyW2Iub3ZlcmFsbF9zdGF0dXNfX2NdKSB7XG4gICAgICAgIHJldHVybiAxO1xuICAgICAgfVxuICAgICAgaWYgKGNvbmZpZy5Qcm9qZWN0SGVhbHRoT3JkZXJbYS5vdmVyYWxsX3N0YXR1c19fY10gPiBjb25maWcuUHJvamVjdEhlYWx0aE9yZGVyW2Iub3ZlcmFsbF9zdGF0dXNfX2NdKSB7XG4gICAgICAgIHJldHVybiAtMTtcbiAgICAgIH1cbiAgICAgIC8vIGEgbXVzdCBiZSBlcXVhbCB0byBiXG4gICAgICByZXR1cm4gMDtcbiAgICB9KTtcblxuICAgIHJldHVybiBhcnI7XG4gIH07XG5cblxuICAkc2NvcGUuJG9uKCdyb3V0ZS11cGRhdGUnLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNmX2lkID0gJHN0YXRlUGFyYW1zLnNmX2lkO1xuICAgICRzY29wZS50aGVtZSA9ICRzdGF0ZVBhcmFtcy50aGVtZTtcbiAgICBpZiAoJHNjb3BlLmFsZXJ0VXNlclRvQ2xpY2sgPT09IGZhbHNlKSByZXR1cm47XG4gICAgaWYgKHNmX2lkICYmIHR5cGVvZiBzZl9pZCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHZhciB1cmwgPSBjb25maWcuY2h1YmJzUGF0aCgnc2VydmljZXMvY3VzdG9tL2N1c3RvbV9vcGVyYXRpb24/bmFtZT1kb2Vjb3N0ZXh0c2VhcmNoJmZvcm1hdD1qc29uJnRleHQ9JykgKyBzZl9pZDtcbiAgICAgICRodHRwLmdldCh1cmwpLnN1Y2Nlc3MoZnVuY3Rpb24gKHJlc3VsdCwgc3RhdHVzKSB7XG4gICAgICAgIGlmIChyZXN1bHRbMF0pIHtcbiAgICAgICAgICAkcm9vdFNjb3BlLiRicm9hZGNhc3QoJ2RldGFpbHMnLCB7IGZlYXR1cmU6IHsgcHJvcGVydGllczogcmVzdWx0WzBdIH0gfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG5cbiAgJHNjb3BlLmNyZWF0ZURvbnV0cyA9IGZ1bmN0aW9uKCkge1xuICAgIC8vIHVzZXMganF1ZXJ5IHRvIHB1dCBkb251dCBpbiBhIGRpdi5cbiAgICBpZiAoJHNjb3BlLmdyb3VwaW5ncyAmJiAkc2NvcGUuZ3JvdXBpbmdzLlByb2plY3RzKSB7XG4gICAgICBEb251dHMuY3JlYXRlTGFiZWxEb251dCgkc2NvcGUuc2ZGaWVsZEhhc2guUHJvamVjdF9fYy5zZWN0b3JfX2MucGlja2xpc3RWYWx1ZXMsICRzY29wZS5ncm91cGluZ3MuUHJvamVjdHMsICcjZGV0YWlscy1kb251dCcpO1xuICAgIH1cbiAgfTtcblxuICAkc2NvcGUubW9yZUxlc3MgPSAnTW9yZSc7XG5cbiAgJHNjb3BlLnRvZ2dsZU1vcmVMZXNzID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICgkc2NvcGUubW9yZUxlc3MgPT09ICdNb3JlJykge1xuICAgICAgJHNjb3BlLm1vcmVMZXNzID0gJ0xlc3MnO1xuICAgIH0gZWxzZSB7XG4gICAgICAkc2NvcGUubW9yZUxlc3MgPSAnTW9yZSc7XG4gICAgfVxuICAgIC8vUmVzaXplO1xuICAgICRzY29wZS5yZXNpemVEZXRhaWxzUGFuZWwoKTtcbiAgfTtcblxuICAkc2NvcGUuc2hvd0RldGFpbHMgPSBmdW5jdGlvbiAoaXRlbSwgdGhlbWVJdGVtcywgaWR4KSB7XG4gICAgJHNjb3BlLmhpZGVMZWdlbmQgPSB0cnVlO1xuXG4gICAgaWYgKGl0ZW0uc2ZfaWQpIHtcbiAgICAgICRyb290U2NvcGUuc2V0UGFyYW1XaXRoVmFsKCdzZl9pZCcsIGl0ZW0uc2ZfaWQpO1xuICAgIH1cbiAgICBpZiAoaXRlbS5uYW1lIHx8IGl0ZW0udGl0bGUpIHtcbiAgICAgICRzY29wZS50aXRsZSA9IGl0ZW0ubmFtZSB8fCBpdGVtLnRpdGxlO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgaWR4ID09PSAnbnVtYmVyJykgJHNjb3BlLmFjdGl2ZVRoZW1lSXRlbUlkeCA9IGlkeDtcbiAgICBpZiAodGhlbWVJdGVtcykgJHNjb3BlLmFjdGl2ZVRoZW1lSXRlbXNMaXN0ID0gdGhlbWVJdGVtcztcblxuICAgICRzY29wZS5pdGVtc0xpc3QgPSBmYWxzZTtcbiAgICAvL1xuICAgIGlmKCEkc2NvcGUuJCRwaGFzZSkge1xuICAgICAgJHNjb3BlLiRhcHBseShmdW5jdGlvbigpe1xuICAgICAgICAkc2NvcGUuZGV0YWlscyA9IHJlbW92ZVVud2FudGVkSXRlbXMoZm9ybWF0RGV0YWlscyhpdGVtLCAkc3RhdGVQYXJhbXMudGhlbWUpLCAkc3RhdGVQYXJhbXMudGhlbWUpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICRzY29wZS5kZXRhaWxzID0gcmVtb3ZlVW53YW50ZWRJdGVtcyhmb3JtYXREZXRhaWxzKGl0ZW0sICRzdGF0ZVBhcmFtcy50aGVtZSksICRzdGF0ZVBhcmFtcy50aGVtZSk7XG4gICAgfVxuXG4gICAgICAvLyRzY29wZS5kZXRhaWxzID0gcmVtb3ZlVW53YW50ZWRJdGVtcyhmb3JtYXREZXRhaWxzKGl0ZW0sICRzdGF0ZVBhcmFtcy50aGVtZSksICRzdGF0ZVBhcmFtcy50aGVtZSk7XG5cbiAgICBpZiAoISRzY29wZS5jb250ZXh0dWFsTGF5ZXIpIHtcbiAgICAgICRzY29wZS5sZXNzRGV0YWlscyA9IHJlbW92ZVVud2FudGVkSXRlbXMobGVzc0RldGFpbHMoZm9ybWF0RGV0YWlscyhpdGVtLCAkc3RhdGVQYXJhbXMudGhlbWUpKSwgJHN0YXRlUGFyYW1zLnRoZW1lKTtcbiAgICB9XG5cbiAgICAvL0ZpbHRlci9Gb3JtYXQgUkZBcyBhbmQgSW5kaWNhdG9yc1xuICAgIGlmICgkc2NvcGUuZGV0YWlscy5yZXF1ZXN0c0ZvckFzc2lzdGFuY2UgJiYgYW5ndWxhci5pc0FycmF5KCRzY29wZS5kZXRhaWxzLnJlcXVlc3RzRm9yQXNzaXN0YW5jZSkpIHtcbiAgICAgIC8vRmlsdGVyL0Zvcm1hdFxuICAgICAgJHNjb3BlLmRldGFpbHMucmVxdWVzdHNGb3JBc3Npc3RhbmNlID0gJHNjb3BlLmRldGFpbHMucmVxdWVzdHNGb3JBc3Npc3RhbmNlLm1hcChmdW5jdGlvbiAocmZhKSB7XG4gICAgICAgIHJldHVybiByZW1vdmVVbndhbnRlZEl0ZW1zKGZvcm1hdERldGFpbHMocmZhLCBcIlJGQVwiKSwgXCJSRkFcIik7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoJHNjb3BlLmRldGFpbHMuaW5kaWNhdG9ycyAmJiBhbmd1bGFyLmlzQXJyYXkoJHNjb3BlLmRldGFpbHMuaW5kaWNhdG9ycykpIHtcbiAgICAgIC8vRmlsdGVyL0Zvcm1hdFxuICAgICAgJHNjb3BlLmRldGFpbHMuaW5kaWNhdG9ycyA9ICRzY29wZS5kZXRhaWxzLmluZGljYXRvcnMubWFwKGZ1bmN0aW9uIChpbmRpY2F0b3IpIHtcbiAgICAgICAgcmV0dXJuIHJlbW92ZVVud2FudGVkSXRlbXMoZm9ybWF0RGV0YWlscyhpbmRpY2F0b3IsIFwiaW5kaWNhdG9yXCIpLCBcImluZGljYXRvclwiKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmICgkc2NvcGUuZGV0YWlscy5yaXNrcyAmJiBhbmd1bGFyLmlzQXJyYXkoJHNjb3BlLmRldGFpbHMucmlza3MpID09PSB0cnVlKSB7XG4gICAgICAvL0ZpbHRlci9Gb3JtYXRcbiAgICAgICRzY29wZS5kZXRhaWxzLnJpc2tzID0gJHNjb3BlLmRldGFpbHMucmlza3MubWFwKGZ1bmN0aW9uIChyaXNrKSB7XG4gICAgICAgIHJldHVybiByZW1vdmVVbndhbnRlZEl0ZW1zKGZvcm1hdERldGFpbHMocmlzaywgXCJyaXNrXCIpLCBcInJpc2tcIik7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoJHNjb3BlLmRldGFpbHMuc3RhdHVzZXMgJiYgYW5ndWxhci5pc0FycmF5KCRzY29wZS5kZXRhaWxzLnN0YXR1c2VzKSkge1xuICAgICAgLy9GaWx0ZXIvRm9ybWF0XG4gICAgICAkc2NvcGUuZGV0YWlscy5zdGF0dXNlcyA9ICRzY29wZS5kZXRhaWxzLnN0YXR1c2VzLm1hcChmdW5jdGlvbiAoc3RhdHVzKSB7XG4gICAgICAgIHJldHVybiByZW1vdmVVbndhbnRlZEl0ZW1zKGZvcm1hdERldGFpbHMoc3RhdHVzLCBcInN0YXR1c1wiKSwgXCJzdGF0dXNcIik7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvL05lZWQgdG8gd2FpdCB1bnRpbCBkZXRhaWxzIHBhbmVsIHN3aXRjaGVzIG1vZGVzLCBhbmQgdGhlbiBjYWxjdWxhdGUgdGhlIHNpemUuXG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAkc2NvcGUucmVzaXplRGV0YWlsc1BhbmVsKCk7XG4gICAgfSwgMTAwKTtcblxuICB9O1xuXG4gIGZ1bmN0aW9uIHJlbW92ZVVud2FudGVkSXRlbXMoZGV0YWlscywgdHlwZSkge1xuICAgIHZhciBwYXNzdGhyb3VnaERldGFpbHMgPSB7fTtcbiAgICB2YXIgYmxhY2tsaXN0RGljdGlvbmFyeSA9IGNvbmZpZy51bndhbnRlZFByb2plY3REZXRhaWxzO1xuXG4gICAgaWYgKHR5cGUgPT09ICdkaXNhc3RlcicpIHtcbiAgICAgIGJsYWNrbGlzdERpY3Rpb25hcnkgPSBjb25maWcudW53YW50ZWREaXNhc3RlckRldGFpbHM7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgPT09ICdwcm9qZWN0Jykge1xuICAgICAgYmxhY2tsaXN0RGljdGlvbmFyeSA9IGNvbmZpZy51bndhbnRlZFByb2plY3REZXRhaWxzO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlID09PSAnUkZBJykge1xuICAgICAgYmxhY2tsaXN0RGljdGlvbmFyeSA9IGNvbmZpZy51bndhbnRlZFJGQURldGFpbHM7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgPT09ICdpbmRpY2F0b3InKSB7XG4gICAgICBibGFja2xpc3REaWN0aW9uYXJ5ID0gY29uZmlnLnVud2FudGVkSW5kaWNhdG9yRGV0YWlscztcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSA9PT0gJ3Byb2plY3RSaXNrJyB8fCB0eXBlID09PSAncmlzaycpIHtcbiAgICAgIGJsYWNrbGlzdERpY3Rpb25hcnkgPSBjb25maWcudW53YW50ZWRQcm9qZWN0Umlza0RldGFpbHM7XG4gICAgfVxuICAgIC8vZWxzZSBpZiAodHlwZSA9PT0gJ3Byb2plY3RIZWFsdGgnIHx8IHR5cGUgPT09ICdzdGF0dXMnKSB7XG4gICAgLy8gIGJsYWNrbGlzdERpY3Rpb25hcnkgPSBjb25maWcudW53YW50ZWRQcm9qZWN0SGVhbHRoRGV0YWlscztcbiAgICAvL31cblxuICAgIGZvciAodmFyIGtleSBpbiBkZXRhaWxzKSB7XG4gICAgICB2YXIgYmxhY2tsaXN0ZWQgPSBibGFja2xpc3REaWN0aW9uYXJ5W2tleV07XG4gICAgICBpZiAoYmxhY2tsaXN0ZWQgJiYgKHR5cGVvZiBibGFja2xpc3RlZCA9PT0gJ2Z1bmN0aW9uJykpIHtcbiAgICAgICAgLy9ldmFsdWF0ZSB0aGUgZnVuY3Rpb24gdG8gZGVjaWRlIGlmIHRoZSBrZXkgc2hvdWxkIGJlIHNob3duLlxuICAgICAgICBibGFja2xpc3RlZCA9IGJsYWNrbGlzdGVkKGRldGFpbHNba2V5XSk7XG4gICAgICB9XG4gICAgICBpZiAoIWJsYWNrbGlzdGVkKSB7XG4gICAgICAgIC8vQWxsb3cgdGhlIGl0ZW0gdGhydSBpZiBpdCBpcyBub3QgYmxhY2tsaXN0ZWRcbiAgICAgICAgcGFzc3Rocm91Z2hEZXRhaWxzW2tleV0gPSBkZXRhaWxzW2tleV07XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhc3N0aHJvdWdoRGV0YWlscztcbiAgfVxuXG4gIGZ1bmN0aW9uIGZvcm1hdERldGFpbHMoZGV0YWlscywgdHlwZSkge1xuICAgIHZhciBmb3JtYXR0ZWREZXRhaWxzID0ge307XG4gICAgdmFyIGZvcm1hdHRpbmdEaWN0aW9uYXJ5ID0gY29uZmlnLnByb2plY3REZXRhaWxzRm9ybWF0dGluZztcblxuICAgIGlmICh0eXBlLmluZGV4T2YoJ2Rpc2FzdGVyJykgIT09IC0xKSB7XG4gICAgICBmb3JtYXR0aW5nRGljdGlvbmFyeSA9IGNvbmZpZy5kaXNhc3RlckRldGFpbHNGb3JtYXR0aW5nO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlID09PSAncHJvamVjdCcpIHtcbiAgICAgIGZvcm1hdHRpbmdEaWN0aW9uYXJ5ID0gY29uZmlnLnByb2plY3REZXRhaWxzRm9ybWF0dGluZztcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSA9PT0gJ1JGQScpIHtcbiAgICAgIGZvcm1hdHRpbmdEaWN0aW9uYXJ5ID0gY29uZmlnLlJGQURldGFpbHNGb3JtYXR0aW5nO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlID09PSAnaW5kaWNhdG9yJykge1xuICAgICAgZm9ybWF0dGluZ0RpY3Rpb25hcnkgPSBjb25maWcuaW5kaWNhdG9yRGV0YWlsc0Zvcm1hdHRpbmc7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgPT09ICdwcm9qZWN0UmlzaycgfHwgdHlwZSA9PT0gJ3Jpc2snKSB7XG4gICAgICBmb3JtYXR0aW5nRGljdGlvbmFyeSA9IGNvbmZpZy5wcm9qZWN0Umlza0RldGFpbHNGb3JtYXR0aW5nO1xuICAgIH1cbiAgICAvL2Vsc2UgaWYgKHR5cGUgPT09ICdwcm9qZWN0SGVhbHRoJyB8fCB0eXBlID09PSAnc3RhdHVzJykge1xuICAgIC8vICBmb3JtYXR0aW5nRGljdGlvbmFyeSA9IGNvbmZpZy5wcm9qZWN0SGVhbHRoRGV0YWlsc0Zvcm1hdHRpbmc7XG4gICAgLy99XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gZGV0YWlscykge1xuICAgICAgdmFyIGZvcm1hdHRlciA9IGZvcm1hdHRpbmdEaWN0aW9uYXJ5W2tleV07XG4gICAgICBpZiAoZm9ybWF0dGVyKSB7XG4gICAgICAgIHN3aXRjaCAoZm9ybWF0dGVyLnNwbGl0KFwiLFwiKVswXSkge1xuICAgICAgICAgIGNhc2UgXCJjdXJyZW5jeVwiOlxuICAgICAgICAgICAgZm9ybWF0dGVkRGV0YWlsc1trZXldID0gJGZpbHRlcignY3VycmVuY3knKShkZXRhaWxzW2tleV0sIChmb3JtYXR0ZXIuc3BsaXQoXCIsXCIpWzFdIHx8IFwiVVNEXCIpKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSBcIm51bWJlclwiOlxuICAgICAgICAgICAgZm9ybWF0dGVkRGV0YWlsc1trZXldID0gJGZpbHRlcignbnVtYmVyJykoZGV0YWlsc1trZXldKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSBcImRhdGVcIjpcbiAgICAgICAgICAgIGZvcm1hdHRlZERldGFpbHNba2V5XSA9ICRmaWx0ZXIoJ2RhdGUnKShkZXRhaWxzW2tleV0sIFwieXl5eS1kZC1NTVwiKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSBcInJmYU5hbWVcIjpcbiAgICAgICAgICAgIGZvcm1hdHRlZERldGFpbHNba2V5XSA9ICRzY29wZS5kZXRhaWxzLmxvY2F0aW9uX19yX2FkbWluXzBfX2MgKyAnICcgKyAkc2NvcGUuZGV0YWlscy5kaXNhc3Rlcl90eXBlX19jICsgJyAtICcgKyBkZXRhaWxzLmFwcGVhbF9zb3VyY2VfX2M7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBmb3JtYXR0ZWREZXRhaWxzW2tleV0gPSBkZXRhaWxzW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICAvL05vIGZvcm1hdHRpbmdcbiAgICAgICAgZm9ybWF0dGVkRGV0YWlsc1trZXldID0gZGV0YWlsc1trZXldO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmb3JtYXR0ZWREZXRhaWxzO1xuICB9XG5cbiAgZnVuY3Rpb24gbGVzc0RldGFpbHMoZGV0YWlscykge1xuICAgIHZhciBsZXNzRGV0YWlscyA9IFtdO1xuICAgIGlmICgkc3RhdGVQYXJhbXMudGhlbWUuaW5kZXhPZignZGlzYXN0ZXInKSE9PS0xKSB7XG4gICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gY29uZmlnLmRpc2FzdGVyRGV0YWlsc1Nob3J0TGlzdC5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICB2YXIga2V5ID0gY29uZmlnLmRpc2FzdGVyRGV0YWlsc1Nob3J0TGlzdFtpXTtcbiAgICAgICAgbGVzc0RldGFpbHMucHVzaCh7XG4gICAgICAgICAga2V5OiBrZXksXG4gICAgICAgICAgdmFsdWU6IGRldGFpbHNba2V5XVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHByb2plY3REZXRhaWxzU2hvcnRMaXN0ID0gY29uZmlnLnByb2plY3REZXRhaWxzU2hvcnRMaXN0O1xuICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHByb2plY3REZXRhaWxzU2hvcnRMaXN0Lmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIHZhciBrZXkgPSBwcm9qZWN0RGV0YWlsc1Nob3J0TGlzdFtpXTtcbiAgICAgICAgbGVzc0RldGFpbHMucHVzaCh7XG4gICAgICAgICAga2V5OiBrZXksXG4gICAgICAgICAgdmFsdWU6IGRldGFpbHNba2V5XVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGxlc3NEZXRhaWxzO1xuICB9XG5cbiAgJHNjb3BlLm5leHRUaGVtZUl0ZW0gPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgbGVuID0gJHNjb3BlLmFjdGl2ZVRoZW1lSXRlbXNMaXN0Lmxlbmd0aDtcbiAgICBpZiAoKyskc2NvcGUuYWN0aXZlVGhlbWVJdGVtSWR4ID49IGxlbikgJHNjb3BlLmFjdGl2ZVRoZW1lSXRlbUlkeCA9IDA7XG4gICAgdmFyIGl0ZW0gPSAkc2NvcGUuYWN0aXZlVGhlbWVJdGVtc0xpc3RbJHNjb3BlLmFjdGl2ZVRoZW1lSXRlbUlkeF07XG4gICAgJHNjb3BlLnNob3dEZXRhaWxzKGl0ZW0pO1xuICB9O1xuXG4gICRzY29wZS5wcmV2VGhlbWVJdGVtID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGxlbiA9ICRzY29wZS5hY3RpdmVUaGVtZUl0ZW1zTGlzdC5sZW5ndGg7XG4gICAgaWYgKC0tJHNjb3BlLmFjdGl2ZVRoZW1lSXRlbUlkeCA8IDApICRzY29wZS5hY3RpdmVUaGVtZUl0ZW1JZHggPSBsZW4gLSAxO1xuICAgIHZhciBpdGVtID0gJHNjb3BlLmFjdGl2ZVRoZW1lSXRlbXNMaXN0WyRzY29wZS5hY3RpdmVUaGVtZUl0ZW1JZHhdO1xuICAgICRzY29wZS5zaG93RGV0YWlscyhpdGVtKTtcbiAgfTtcblxuICAkc2NvcGUuc2hvd0xpc3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgJHNjb3BlLnRpdGxlID0gJHNjb3BlLmZlYXR1cmVUaXRsZTtcbiAgICAkc2NvcGUuaXRlbXNMaXN0ID0gdHJ1ZTtcbiAgICAkc2NvcGUuZGV0YWlscyA9IGZhbHNlO1xuICAgICRzY29wZS5oaWRlTGVnZW5kID0gZmFsc2U7XG4gIH07XG5cbiAgJHNjb3BlLnJlc2l6ZURldGFpbHNQYW5lbCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBoZWlnaHQgPSAkKCcjTWFwQ3RybCcpLmhlaWdodCgpIC0gMjYwOyAvL01hZ2ljIE51bWJlclxuXG4gICAgLy9oZWlnaHQgaXMgdGhlIHZhbHVlIHRoYXQgdGhlIGVudGlyZSBkZXRhaWxzIHBhbmVsIHNob3VsZCBuZXZlciBleGNlZWQuXG4gICAgLy9XaXRoaW4gdGhlIHBhbmVsIGl0c2VsZiwgdGhlIGlubmVyIGNvbnRhaW5lciBuZWVkcyB0byBhZGp1c3QgaXRzIGhlaWdodCBiYXNlZCBvbiB0aGUgY29udGVudHMgb2YgdGhlIHBhbmVsLlxuICAgIC8vU29tZXRpbWVzLCB0aGVyZSBhcmUgdGFicywgYW5kIHNvbWV0aW1lcyB0aGUgcHJvamVjdC9kaXNhc3RlciBkZXNjcmlwdGlvbiBjYW4gYmUgcXVpdGUgbG9uZy5cbiAgICAvL0luIHRoZXNlIGNhc2VzLCB0aGVuIGlubmVyQ29udGFpbmVyIHNob3VsZCBzaHJpbmsgdG8gZml0IHdpdGhpbiB0aGUgbWF4LWhlaWdodCBvZiB0aGUgb3V0ZXIgcGFuZWwgKGhlaWdodClcblxuICAgIC8vRmluZCB0aGUgdG9wIG9mIHRoZSBpbm5lckNvbnRhaW5lciwgYW5kIHN1YnRyYWN0IGZyb20gdGhlIG1heCBoZWlnaHQgb2YgdGhlIHBhbmVsLiAgVGhhdCdzIHdoYXQgdGhlIG1heC1oZWlnaHQgb2YgdGhlIGlubmVyIHBhbmVsIHNob3VsZCBiZVxuICAgIHZhciBpbm5lclRvcCA9ICQoJyNEZXRhaWxzUGFuZWwgLklubmVyQ29udGFpbmVyJykucG9zaXRpb24oKS50b3A7XG4gICAgdmFyIGJvdHRvbUhlaWdodCA9ICQoXCIuZGV0YWlscy1ib3R0b20tYnV0dG9ucy5wdWxsLXJpZ2h0XCIpLmhlaWdodCgpO1xuXG4gICAgJCgnI0RldGFpbHNQYW5lbCAuSW5uZXJDb250YWluZXIgJykuY3NzKFwibWF4LWhlaWdodFwiLCBoZWlnaHQgLSBpbm5lclRvcCAtIGJvdHRvbUhlaWdodCk7XG4gIH07XG5cblx0Ly9Db25uZWN0IHRoZSB3aW5kb3cgb25yZXNpemUgZW5kIGV2ZW50XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsICRzY29wZS5yZXNpemVEZXRhaWxzUGFuZWwpO1xuXG5cbiAgLy9Gb3IgSW5pdC5cblx0JHNjb3BlLnJlc2l6ZURldGFpbHNQYW5lbCgpO1xuXG4gICRzY29wZS5zYXZlID0gZnVuY3Rpb24gKGRhdGEsIG5hbWUpIHtcbiAgICB2YXIganNvbiA9IEpTT04uc3RyaW5naWZ5KGRhdGEsIG51bGwsIDIpO1xuICAgIHZhciBibG9iID0gbmV3IEJsb2IoW2pzb25dLCB7dHlwZTondGV4dC9wbGFpbid9KTtcbiAgICB2YXIgZG93bmxvYWRMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgdmFyIHVybCA9ICh3aW5kb3cud2Via2l0VVJMICE9IG51bGwgPyB3aW5kb3cud2Via2l0VVJMIDogd2luZG93LlVSTCk7XG4gICAgZG93bmxvYWRMaW5rLmhyZWYgPSB1cmwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuICAgIGRvd25sb2FkTGluay5kb3dubG9hZCA9IG5hbWUgfHwgJ2ZlYXR1cmUuZ2VvanNvbic7XG4gICAgZG93bmxvYWRMaW5rLmNsaWNrKCk7XG4gIH07XG5cbiAgJHNjb3BlLnVwZGF0ZVNlY3RvckxlZ2VuZCA9IGZ1bmN0aW9uKGFsaWFzLGNvbG9yLGNvdW50KXtcbiAgICAkc2NvcGUuZGF0YXNldFRpdGxlID0gYWxpYXM7XG4gICAgJHNjb3BlLmRhdGFzZXRDb2xvciA9IGNvbG9yO1xuICAgICRzY29wZS5kYXRhc2V0Q291bnQgPSBjb3VudDtcbiAgfVxuXG59KTtcbiIsIi8qKlxuICogQ3JlYXRlZCBieSBSeWFuIFdoaXRsZXlcbiAqICAgICAgIG9uIDYvNC8xNC5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdHZW9Bbmd1bGFyJykuY29udHJvbGxlcignRXhwb3J0Q3RybCcsIGZ1bmN0aW9uKCRzY29wZSwgJGh0dHAsICRzdGF0ZSwgJHN0YXRlUGFyYW1zKSB7XG4gICAgY29uc29sZS5sb2coJ0V4cG9ydEN0cmwnKTtcblxuICAgICRzY29wZS5leHBvcnQgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICB9O1xuXG4gICAgJHNjb3BlLnJvdXRlVXJsID0gd2luZG93LmxvY2F0aW9uO1xuXG5cbiAgICAvKipcbiAgICAgKiBJZiBFeHBvcnRDdHJsIGdldHMgY2FsbGVkIHR3aWNlIGZvciBzb21lIHJlYXNvbiwgd2UgbWlnaHRcbiAgICAgKiBoYXZlIHRoaXMgY2xhc3MgaGFuZ2luZyBhcm91bmQgYmxvY2tpbmcgdGhlIGFwcC4gRXhwb3J0Q3RybFxuICAgICAqIGRvZXMgZ2V0IGNhbGxlZCB0d2ljZSBzb21ldGltZXMsIGJlY2F1c2UgdGhlIG1vZGFsIHNvbWV0aW1lc1xuICAgICAqIG51ZGdlcyB0aGUgbWFwIGFuZCByZWluc3RhbnRpYXRlcyB0aGUgbW9kYWwgYWdhaW4gdmlhIGEgbmV3XG4gICAgICogcm91dGUuXG4gICAgICovXG4gICAgJCgnLm1vZGFsLWJhY2tkcm9wJykucmVtb3ZlKCk7XG5cbiAgICAkKCcjZXhwb3J0TW9kYWwnKS5tb2RhbCgnc2hvdycpO1xuXG4gICAgJCgnI2V4cG9ydE1vZGFsJykub24oJ2hpZGRlbi5icy5tb2RhbCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICRzdGF0ZS5nbygnbWFpbicsICRzdGF0ZVBhcmFtcyk7XG4gICAgfSk7XG5cblxuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIC8vZGVmYXVsdHNcbiAgICBzZWxmLl9MYXlvdXRFbGVtZW50cyA9IHsgXCJtYXBcIjogdHJ1ZSwgXCJsZWdlbmRcIjogdHJ1ZSwgXCJvcHRpb25hbHRoZW1lZGV0YWlsc1wiOiBmYWxzZSB9O1xuICAgIHNlbGYuX0ltYWdlRm9ybWF0ID0gJ3BuZyc7XG5cbiAgICBzZWxmLl9pbml0ID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIHNlbGYuX2Nvbm5lY3RSYWRpb0J1dHRvbk9uQ2xpY2tzKCk7XG4gICAgICAgICQoXCIjZXhlY3V0ZUV4cG9ydEJ1dHRvblwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vU2hvdyBsb2FkaW5nIGdpZi4gSGlkZSBleHBvcnQgYnV0dG9uXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHNlbGYuX2V4cG9ydEltYWdlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIHNlbGYuX3Nob3dFeHBvcnRCdXR0b25IaWRlTG9hZGVyKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIHNlbGYuX3Nob3dXYWl0aW5nUGFuZWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNlbGYuX3Nob3dMb2FkZXIoKTsgLy9zaG93IGtuaWdodFJpZGVyIGltYWdlLCBoaWRlXG4gICAgICAgICQoXCIjZXhwb3J0T3B0aW9uc1BhbmVsXCIpLmNzcyh7XCJkaXNwbGF5XCI6IFwibm9uZVwifSk7XG4gICAgICAgICQoXCIjZXhwb3J0V2FpdGluZ1BhbmVsXCIpLmNzcyh7IFwiZGlzcGxheVwiOiBcImJsb2NrXCIgfSk7XG4gICAgICAgICQoXCIuZXhwb3J0R3JvdXBUaXRsZS5lcnJvclwiKS5jc3MoeyBcImRpc3BsYXlcIjogXCJub25lXCIgfSk7IC8vSGlkZSBlcnJvciBtZXNzYWdlLCBpZiBzaG93blxuICAgICAgICAkKFwiLmltYWdlT3BlbkJ1dHRvblwiKS5jc3Moe1wiZGlzcGxheVwiOiBcIm5vbmVcIn0pOyAvL2hpZGUgb3BlbiBpbWFnZSBidXR0b25cbiAgICB9XG5cbiAgICBzZWxmLl9oaWRlV2FpdGluZ1BhbmVsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAkKFwiI2V4cG9ydFdhaXRpbmdQYW5lbFwiKS5jc3Moe1wiZGlzcGxheVwiOiBcIm5vbmVcIn0pO1xuICAgICAgICAkKFwiI2V4cG9ydE9wdGlvbnNQYW5lbFwiKS5jc3Moe1wiZGlzcGxheVwiOiBcImJsb2NrXCJ9KTtcbiAgICB9XG5cbiAgICBzZWxmLl9oaWRlRXhwb3J0QnV0dG9uU2hvd0xvYWRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJChcIiNleGVjdXRlRXhwb3J0QnV0dG9uXCIpLmNzcyh7IFwiZGlzcGxheVwiOiBcIm5vbmVcIiB9KTtcbiAgICAgICAgJChcIi5rbmlnaHRSaWRlckxvYWRlclwiKS5jc3MoeyBcImRpc3BsYXlcIjogXCJibG9ja1wiIH0pO1xuICAgIH1cblxuICAgIHNlbGYuX3Nob3dFeHBvcnRCdXR0b25IaWRlTG9hZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAkKFwiI2V4ZWN1dGVFeHBvcnRCdXR0b25cIikuY3NzKHtcImRpc3BsYXlcIjogXCJibG9ja1wifSk7XG4gICAgICAgICQoXCIua25pZ2h0UmlkZXJMb2FkZXJcIikuY3NzKHtcImRpc3BsYXlcIjogXCJub25lXCJ9KTtcbiAgICB9XG5cbiAgICBzZWxmLl9jb25uZWN0UmFkaW9CdXR0b25PbkNsaWNrcyA9IGZ1bmN0aW9uICgpIHtcblxuXG4gICAgICAgICQoXCIjb3B0aW9uYWxPdXRwdXRNYXBcIikub24oXCJjbGlja1wiLCBzZWxmLl9nZXRMYXlvdXRFbGVtZW50T25DbGljaygnbWFwJykpO1xuICAgICAgICAkKFwiI29wdGlvbmFsT3V0cHV0TGVnZW5kXCIpLm9uKFwiY2xpY2tcIiwgc2VsZi5fZ2V0TGF5b3V0RWxlbWVudE9uQ2xpY2soJ2xlZ2VuZCcpKTtcbiAgICAgICAgJChcIiNvcHRpb25hbFRoZW1lRGV0YWlsc1wiKS5vbihcImNsaWNrXCIsIHNlbGYuX2dldExheW91dEVsZW1lbnRPbkNsaWNrKCdvcHRpb25hbHRoZW1lZGV0YWlscycpKTtcblxuXG4gICAgICAgIHZhciBwbmdSQk5vZGUgPSAkKFwiI3BuZ0ltYWdlRm9ybWF0XCIpO1xuICAgICAgICBwbmdSQk5vZGUub24oXCJjbGlja1wiLCBzZWxmLl9nZXRJbWFnZUJ1dHRvblJhZGlvQnV0dG9uT25DbGljayhwbmdSQk5vZGUsICdwbmcnKSk7XG5cbiAgICAgICAgdmFyIHBkZlJCTm9kZSA9ICQoXCIjcGRmSW1hZ2VGb3JtYXRcIik7XG4gICAgICAgIHBkZlJCTm9kZS5vbihcImNsaWNrXCIsIHNlbGYuX2dldEltYWdlQnV0dG9uUmFkaW9CdXR0b25PbkNsaWNrKHBkZlJCTm9kZSwgJ3BkZicpKTtcblxuICAgICAgICAkKFwiI2V4cG9ydENsb3NlXCIpLm9uKFwiY2xpY2tcIiwgc2VsZi5oaWRlRXhwb3J0T3B0aW9uKTtcblxuICAgICAgICAkKFwiLmtpbGxPcGVuQnV0dG9uXCIpLm9uKFwiY2xpY2tcIiwgc2VsZi5faGlkZVdhaXRpbmdQYW5lbCk7IC8vdGhlIGRpc2NhcmQgYnV0dG9uXG5cbiAgICB9O1xuXG4gICAgc2VsZi5fZ2V0SW1hZ2VCdXR0b25SYWRpb0J1dHRvbk9uQ2xpY2sgPSBmdW5jdGlvbiAobm9kZSwgaW1hZ2VGb3JtYXQpIHtcblxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc2VsZi5fSW1hZ2VGb3JtYXQgPSBpbWFnZUZvcm1hdDtcbiAgICAgICAgICAgIHNlbGYuX3JlbW92ZUFsbFNlbGVjdGVkUmFkaW9CdXR0b25zKFwiZXhwb3J0T3B0aW9uc0NvbnRhaW5lclwiKTtcbiAgICAgICAgICAgIG5vZGUuYWRkQ2xhc3MoXCJleHBvcnRSYWRpb0J1dHRvblNlbGVjdGVkXCIpO1xuICAgICAgICB9O1xuICAgIH07XG5cbiAgICBzZWxmLl9nZXRMYXlvdXRFbGVtZW50T25DbGljayA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvL1RvZ2dsZSBBY3RpdmUgU3RhdGVcbiAgICAgICAgICAgIHNlbGYuX0xheW91dEVsZW1lbnRzW2VsZW1lbnRdID0gIXNlbGYuX0xheW91dEVsZW1lbnRzW2VsZW1lbnRdO1xuXG4gICAgICAgICAgICAvLyQoXCIjZXhwb3J0T3B0aW9ucyAuY2hlY2tib3hcIikucmVtb3ZlQ2xhc3MoXCJjaGVja2VkXCIpO1xuICAgICAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnY2hlY2tlZCcpO1xuICAgICAgICB9O1xuICAgIH07XG5cbiAgICBzZWxmLl9yZW1vdmVBbGxTZWxlY3RlZFJhZGlvQnV0dG9ucyA9IGZ1bmN0aW9uIChwYXJlbnREaXZJRCkge1xuICAgICAgICAkLmVhY2goJChcIiNcIiArIHBhcmVudERpdklEICsgXCIgLmV4cG9ydFJhZGlvQnV0dG9uU2VsZWN0ZWRcIiksIGZ1bmN0aW9uIChpZHgsIG5vZGUpIHtcbiAgICAgICAgICAgICQobm9kZSkucmVtb3ZlQ2xhc3MoXCJleHBvcnRSYWRpb0J1dHRvblNlbGVjdGVkXCIpO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgc2VsZi5faGlkZUxvYWRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJChcIi5rbmlnaHRSaWRlckxvYWRlclwiKS5jc3Moe1wiZGlzcGxheVwiOiBcIm5vbmVcIn0pO1xuICAgIH1cblxuICAgIHNlbGYuX3Nob3dMb2FkZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoXCIua25pZ2h0UmlkZXJMb2FkZXJcIikuY3NzKHtcImRpc3BsYXlcIjogXCJibG9ja1wifSk7XG4gICAgfVxuXG4gICAgdGhpcy5zaG93RXhwb3J0T3B0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAkKFwiI2V4cG9ydE9wdGlvbnNcIikuY3NzKHsgXCJkaXNwbGF5XCI6IFwiYmxvY2tcIiB9KTtcbiAgICB9XG5cbiAgICB0aGlzLmhpZGVFeHBvcnRPcHRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoXCIjZXhwb3J0T3B0aW9uc1wiKS5jc3MoeyBcImRpc3BsYXlcIjogXCJub25lXCIgfSk7XG4gICAgfVxuXG4gICAgc2VsZi5fa2lsbE9wZW5JbWFnZUJ1dHRvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy9IaWRlICdvcGVuIGltYWdlJyBidXR0b24gYW5kIHNob3cgZXhwb3J0IGJ1dHRvbi5cbiAgICAgICAgc2VsZi5fc2hvd0V4cG9ydEJ1dHRvbkhpZGVMb2FkZXIoKTtcbiAgICAgICAgJChcIi5pbWFnZU9wZW5CdXR0b25cIikuY3NzKHtcImRpc3BsYXlcIjogXCJub25lXCJ9KTtcbiAgICB9XG5cbiAgICBzZWxmLl9vbkVycm9yID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBzZWxmLl9oaWRlV2FpdGluZ1BhbmVsKCk7XG4gICAgICAgIC8vRGlzcGxheSBlcnJvciBtZXNzYWdlLlxuICAgICAgICAkKFwiLmV4cG9ydEdyb3VwVGl0bGUuZXJyb3JcIikucmVwbGFjZShcIjxzcGFuPlRoZXJlIHdhcyBhbiBlcnJvciBleHBvcnRpbmcgdGhlIGltYWdlLjwvc3Bhbj5cIik7XG4gICAgICAgICQoXCIuZXhwb3J0R3JvdXBUaXRsZS5lcnJvclwiKS5jc3Moe1wiZGlzcGxheVwiOiBcImJsb2NrXCJ9KTtcbiAgICB9XG5cbiAgICBzZWxmLl9leHBvcnRJbWFnZSA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICB2YXIgdGl0bGVIVE1MID0gXCJUaXRsZVwiO1xuXG4gICAgICAgIC8vdmFyIGxlZ2VuZHNIVE1MID0gJCgnPGRpdj4nKS5hcHBlbmQoJChcIiNMYXllckxpc3RXcmFwcGVyXCIpLmNsb25lKCkpLmh0bWwoKS5yZXBsYWNlKC9cXFwiL2csICdcXFxcXCInKTtcblxuXG4gICAgICAgIHZhciBsYXlvdXRXaWR0aCA9ICQoXCJib2R5XCIpLndpZHRoKCk7XG4gICAgICAgIHZhciBtYXBIZWlnaHQgPSAkKFwiI01hcEN0cmxcIikuaGVpZ2h0KCk7XG4gICAgICAgIHZhciBtYXBXaWR0aCA9ICQoXCIjTWFwQ3RybFwiKS53aWR0aCgpO1xuXG4gICAgICAgIHZhciBjb2RlYmxvY2sgPSBcIlwiO1xuICAgICAgICAvL0FkanVzdCBib2R5IHdpZHRoXG4gICAgICAgIGNvZGVibG9jayArPSAnJChcImJvZHlcIikud2lkdGgoJyArIChtYXBXaWR0aCArIDIwKSArICcpOyc7XG5cbiAgICAgICAgLy9zaG93IGxvYWRlclxuICAgICAgICBzZWxmLl9zaG93V2FpdGluZ1BhbmVsKCk7XG5cbiAgICAgICAgLy9mb3JtYXR0aW5nXG4gICAgICAgIC8vY29kZWJsb2NrID0gY29kZWJsb2NrLnJlcGxhY2UoLyhcXHJcXG58XFxufFxccikvZ20sIFwiXCIpOyAgLy9yZW1vdmUgbGluZSBicmVha3NcblxuICAgICAgICB2YXIgcHJpbnRQb3N0QXJncyA9IHtcbiAgICAgICAgICAgIC8vdXJsOiAnaHR0cDovL2dlby5yZWRjcm9zcy5jb20vbWFwZm9saW8vcHJpbnQuaHRtJyxcbiAgICAgICAgICAgIHVybDogJHNjb3BlLnJvdXRlVXJsLmhyZWYucmVwbGFjZShcIm1hcGZvbGlvLyNcIiwgXCJtYXBmb2xpby9wcmludC5odG1sI1wiKS5yZXBsYWNlKFwibWFwZm9saW8vaW5kZXguaHRtbCNcIiwgXCJtYXBmb2xpby9wcmludC5odG1sI1wiKS5yZXBsYWNlKFwiL2V4cG9ydFwiLCBcIlwiKS5yZXBsYWNlKFwiaHR0cDovL2xvY2FsaG9zdDozMDAxXCIsIFwiaHR0cHM6Ly9nZW8ucmVkY3Jvc3Mub3JnXCIpLCAvL1N3YXAgdGhlIGN1cnJlbnQgdXJsIGZvciB0aGUgcHJpbnQgdXJsXG4gICAgICAgICAgICBpbWFnZWZvcm1hdDogc2VsZi5fSW1hZ2VGb3JtYXQgfHwgJ3BuZycsXG4gICAgICAgICAgICBmb3JtYXQ6ICdqc29uJyxcbiAgICAgICAgICAgIC8vY29kZWJsb2NrOiBjb2RlYmxvY2ssXG4gICAgICAgICAgICB2aWV3cG9ydGhlaWdodDogbWFwSGVpZ2h0LFxuICAgICAgICAgICAgdmlld3BvcnR3aWR0aDogbGF5b3V0V2lkdGgsXG4gICAgICAgICAgICBkZWxheTogNTAwMCAvL3RpbWUgdG8gd2FpdCBpbiBtc1xuICAgICAgICB9O1xuXG5cbiAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxuICAgICAgICAgICAgdXJsOiAnaHR0cDovL3ByaW50LnNwYXRpYWxkZXYuY29tJyxcbiAgICAgICAgICAgIGRhdGE6IHByaW50UG9zdEFyZ3MsXG4gICAgICAgICAgICBzdWNjZXNzOiBzZWxmLl9vbkltYWdlRXhwb3J0LFxuICAgICAgICAgICAgZXJyb3I6IHNlbGYuX29uRXJyb3JcbiAgICAgICAgfSk7XG5cbiAgICB9O1xuXG4gICAgc2VsZi5fb25JbWFnZUV4cG9ydCA9IGZ1bmN0aW9uIChyZXN1bHQpIHtcblxuICAgICAgICB2YXIgZXhwb3J0SW1hZ2VVUkwgPSByZXN1bHQuaW1hZ2U7XG5cbiAgICAgICAgLy9pbnN0ZWFkLCBzaG93IGEgYnV0dG9uL2h5cGVybGluayBmb3IgdGhlIHVzZXIgdG8gb3BlbiB0aGUgaW1hZ2UuXG4gICAgICAgICQoXCIuaW1hZ2VPcGVuQnV0dG9uIGFcIikuYXR0cihcImhyZWZcIiwgZXhwb3J0SW1hZ2VVUkwpO1xuICAgICAgICAkKFwiLmltYWdlT3BlbkJ1dHRvblwiKS5jc3Moe1wiZGlzcGxheVwiOiBcImJsb2NrXCJ9KTtcblxuICAgICAgICAvL0hpZGUgbG9hZGVyXG4gICAgICAgIHNlbGYuX2hpZGVMb2FkZXIoKTtcbiAgICB9O1xuXG4gICAgc2VsZi5faW5pdCgpO1xufSk7XG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgTmljaG9sYXMgSGFsbGFoYW4gPG5oYWxsYWhhbkBzcGF0aWFsZGV2LmNvbT5cbiAqICAgICAgIG9uIDMvMjcvMTQuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnR2VvQW5ndWxhcicpLmNvbnRyb2xsZXIoJ0ZpbHRlcnNDdHJsJywgZnVuY3Rpb24gKCRzY29wZSwgJGh0dHAsICRzdGF0ZSwgJHN0YXRlUGFyYW1zLCAkdGltZW91dCkge1xuICAkc2NvcGUuZmlsdGVyTW9kZSA9IFwicHJvamVjdFwiOyAvL1doaWNoIHRoZW1lIGFyZSB3ZSBmaWx0ZXJpbmc/XG4gICRzY29wZS5wYXJhbXMgPSAkc3RhdGVQYXJhbXM7XG4gICRzY29wZS5zZWFyY2hUZXh0ID0gJyc7XG4gICRzY29wZS5uYXZUYWIgPSAnc2VjdG9ycyc7XG4gICRzY29wZS5zZWN0b3JzID0gW107XG4gICRzY29wZS5zZWxlY3RlZCA9IGZhbHNlO1xuICAkc2NvcGUuZGlzYXN0ZXJUeXBlcyA9IFtdO1xuICAkc2NvcGUuc3RhdHVzID0gW107XG4gICRzY29wZS5idXNpbmVzc1VuaXRzID0gW107XG4gICRzY29wZS5kaXNhc3RlclR5cGVzY2F0ZWdvcnkgPSB7fTtcbiAgZGVidWcuYnVkZ2V0ID0gJHNjb3BlLmJ1ZGdldCA9IHtcbiAgICBzbGlkZXI6IFsyMDAwLCA4MDAwXSxcbiAgICBtaW46IDAsXG4gICAgbWVhbjogNTAwMCxcbiAgICBtYXg6IDEwMDAwMFxuICB9O1xuXG4gICR0aW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgLy8gc2luY2Ugd2UgcmVtb3ZlZCBhY3RpdmUgcHJvamVjdHMgZnJvbSBhcGksIHdlJ3ZlIGdvdCB0byB0dXJuIG9uIGFjdGl2ZSBmaWx0ZXIgb24gcGFnZSBsb2FkXG5cbiAgICBpZighJHN0YXRlUGFyYW1zLmZpbHRlcnMgfHwgJHN0YXRlUGFyYW1zLmZpbHRlcnMgPT0gXCJudWxsXCIpIHtcbiAgICAgIHNldERlZmF1bHRQcm9qZWN0U3RhdHVzKClcbiAgICB9XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIHNldERlZmF1bHRQcm9qZWN0U3RhdHVzKCl7XG4gICAgJHNjb3BlLnN0YXR1cy5mb3JFYWNoKGZ1bmN0aW9uKHMpe1xuICAgICAgaWYocy5uYW1lID09PSBcIkFjdGl2ZVwiKXtcbiAgICAgICAgcy5jaGVja2VkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICAkc2NvcGUuc3RhdHVzRmlsdGVyKCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGNoZWNrYm94IGluZm8gdGhhdCB3YXMgZ2VuZXJhdGVkIGJ5IHRoZSBTdWNjdWJ1cy5cbiAgICovXG4gICRodHRwLmdldCgnc3VjY3VidXNfZ2l0aWdub3JlL3NmLXByb2plY3QtZmlsdGVyLWNoZWNrYm94ZXMuanNvbicsIHtjYWNoZTogdHJ1ZX0pLnN1Y2Nlc3MoZnVuY3Rpb24gKGRhdGEsIHN0YXR1cykge1xuICAgIGFuZ3VsYXIuZXh0ZW5kKCRzY29wZSwgZGF0YSk7XG4gICAgZGVidWcuZmlsdGVyc1Njb3BlID0gJHNjb3BlO1xuICB9KS5lcnJvcihmdW5jdGlvbiAoKSB7XG4gICAgY29uc29sZS5lcnJvcihcIlVuYWJsZSB0byBmZXRjaCBwcm9qZWN0IGZpbHRlciBtZXRhIGRhdGFcIik7XG4gIH0pO1xuXG4gICRodHRwLmdldCgnc3VjY3VidXNfZ2l0aWdub3JlL3NmLWRpc2FzdGVyLWZpbHRlci1jaGVja2JveGVzLmpzb24nLCB7Y2FjaGU6IHRydWV9KS5zdWNjZXNzKGZ1bmN0aW9uIChkYXRhLCBzdGF0dXMpIHtcbiAgICBhbmd1bGFyLmV4dGVuZCgkc2NvcGUsIGRhdGEpO1xuICAgIGRlYnVnLmZpbHRlcnNTY29wZSA9ICRzY29wZTtcbiAgICAkc2NvcGUuY2F0ZWdvcml6ZURpc2FzdGVyRmlsdGVycygpO1xuICAgIC8vJHNjb3BlLmRlZmF1bHRTdGF0dXMoKTsgLy8gY2hlY2sgTW9uaXRvcmluZyBhbmQgQWN0aXZlIGluIFN0YXR1cyBvYmplY3RcbiAgfSkuZXJyb3IoZnVuY3Rpb24gKCkge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJVbmFibGUgdG8gZmV0Y2ggZGlzYXN0ZXIgZmlsdGVyIG1ldGEgZGF0YVwiKTtcbiAgfSk7XG5cbiAgJGh0dHAuZ2V0KCdzdWNjdWJ1c19naXRpZ25vcmUvc2Ytb2JqZWN0LWZpZWxkLWhhc2guanNvbicsIHtjYWNoZWQ6IHRydWV9KS5zdWNjZXNzKGZ1bmN0aW9uIChzZkZpZWxkSGFzaCkge1xuICAgICRzY29wZS5zZkZpZWxkSGFzaCA9IHNmRmllbGRIYXNoO1xuICAgICRzY29wZS5idXNpbmVzc1VuaXRzID0gc2ZGaWVsZEhhc2hbXCJQcm9qZWN0X19jXCJdW1wiYnVzaW5lc3NfdW5pdF9fY1wiXVtcInBpY2tsaXN0VmFsdWVzXCJdO1xuICAgICRzY29wZS5waGFzZV9fYyA9IHNmRmllbGRIYXNoW1wiUHJvamVjdF9fY1wiXVtcInBoYXNlX19jXCJdW1wicGlja2xpc3RWYWx1ZXNcIl07XG4gICAgLy8gYWRkIGRlc2NyaXB0aW9uICYgY29tYmluZSBwaGFzZSAzLzQvNVxuICAgICRzY29wZS5waGFzZV9fYy5mb3JFYWNoKGZ1bmN0aW9uKHBoYXNlKXtcbiAgICAgIHBoYXNlLmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgIHNmRmllbGRIYXNoW1wiUHJvamVjdF9fY1wiXVtcInBoYXNlX19jXCJdLmlubGluZUhlbHBUZXh0LnNwbGl0KC9cXG4vKS5mb3JFYWNoKGZ1bmN0aW9uKGRlc2Mpe1xuICAgICAgICBpZihkZXNjLmluZGV4T2YocGhhc2UudmFsdWUpICE9PSAtMSl7XG4gICAgICAgICAgcGhhc2UuZGVzY3JpcHRpb24gPSBkZXNjXG4gICAgICAgIH0gZWxzZSBpZiAocGhhc2UubGFiZWwgPT0gXCIzLzQvNVwiICYmIChkZXNjLmluZGV4T2YoXCIzXCIpICE9PSAtMSB8fCBkZXNjLmluZGV4T2YoXCI0XCIpICE9PSAtMSB8fCBkZXNjLmluZGV4T2YoXCI1XCIpICE9PSAtMSkpe1xuICAgICAgICAgIHBoYXNlLmRlc2NyaXB0aW9uICA9ICh0eXBlb2YgcGhhc2UuZGVzY3JpcHRpb24gPT09IFwidW5kZWZpbmVkXCIpID8gZGVzYyA6IHBoYXNlLmRlc2NyaXB0aW9uICsgXCIgLSBcIiArIGRlc2M7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGdldEJ1c2luZXNzVW5pdFR5cGVzKCk7XG4gIH0pLmVycm9yKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiVW5hYmxlIHRvIGZldGNoIG9iamVjdCBmaWVsZCBtZXRhIGRhdGFcIik7XG4gIH0pO1xuXG4gIC8vIHRha2UgYXJyYXkgb2YgZGlzYXN0ZXIgdHlwZXMgYW5kIGNyZWF0ZSBhIG5ldyBvYmplY3QgdGhhdCBzZXBhcmF0ZXMgYnkgY2F0ZWdvcnlcbiAgJHNjb3BlLmNhdGVnb3JpemVEaXNhc3RlckZpbHRlcnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgJHNjb3BlLnNlYXJjaExpc3QgPSBbXTtcbiAgICB2YXIgZHQgPSAkc2NvcGUuZGlzYXN0ZXJUeXBlcztcbiAgICB2YXIgcCA9IG51bGw7XG4gICAgdmFyIGFyciA9IFtdO1xuICAgIHZhciBjVHlwZXMgPSB7fTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGR0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoZHRbaV0ubmFtZS5pbmRleE9mKCctLS0nKSAhPT0gLTEpIHtcbiAgICAgICAgYXJyID0gW107XG4gICAgICAgIGNUeXBlc1tkdFtpXS5uYW1lLnJlcGxhY2UoXCItLS0gXCIsIFwiXCIpLnJlcGxhY2UoXCIgLS0tXCIsIFwiXCIpXSA9IHt9O1xuICAgICAgICBwID0gZHRbaV0ubmFtZS5yZXBsYWNlKFwiLS0tIFwiLCBcIlwiKS5yZXBsYWNlKFwiIC0tLVwiLCBcIlwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICRzY29wZS5zZWFyY2hMaXN0LnB1c2goZHRbaV0pO1xuICAgICAgfVxuICAgICAgaWYgKGR0W2ldLm5hbWUuaW5kZXhPZignLS0tJykgPT0gLTEpIHtcbiAgICAgICAgYXJyLnB1c2goZHRbaV0pO1xuICAgICAgICBjVHlwZXNbcF0gPSBhcnI7XG4gICAgICB9XG4gICAgfVxuICAgICRzY29wZS5kaXNhc3RlclR5cGVzY2F0ZWdvcnkgPSBjVHlwZXM7XG4gIH07XG5cbiAgJHNjb3BlLmNsb3NlUGFuZWxzID0gZnVuY3Rpb24gKCkge1xuICAgIGZvciAodmFyIHBhcmFtIGluICRzdGF0ZVBhcmFtcykge1xuICAgICAgaWYgKCRzdGF0ZVBhcmFtc1twYXJhbV0gPT09ICdvcGVuJykge1xuICAgICAgICAkc3RhdGVQYXJhbXNbcGFyYW1dID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgJHNjb3BlLiRvbigndGhlbWUtdXBkYXRlJywgZnVuY3Rpb24gKCkge1xuXG4gICAgaWYgKCRzdGF0ZVBhcmFtcy50aGVtZS5pbmRleE9mKCdkaXNhc3RlcicpIT09LTEpIHtcbiAgICAgICRzY29wZS5uYXZUYWIgPSAnZGlzYXN0ZXJUeXBlJztcbiAgICB9O1xuXG4gICAgaWYgKCRzdGF0ZVBhcmFtcy50aGVtZS5pbmRleE9mKCdwcm9qZWN0JykhPT0gLTEpIHtcbiAgICAgICRzY29wZS5uYXZUYWIgPSAnc2VjdG9ycyc7XG4gICAgfTtcblxuICAgIGlmICgkc3RhdGVQYXJhbXMudGhlbWUuaW5kZXhPZignZGlzYXN0ZXInKSAhPT0gLTEgJiYgKCRzdGF0ZVBhcmFtcy5maWx0ZXJzKSkge1xuICAgICAgZGVjb2RlRGlzYXN0ZXJGaWx0ZXJzVVJMKCk7XG4gICAgfVxuXG4gICAgaWYgKCRzdGF0ZVBhcmFtcy50aGVtZS5pbmRleE9mKCdwcm9qZWN0JykgIT09IC0xICYmICgkc3RhdGVQYXJhbXMuZmlsdGVycykpIHtcbiAgICAgIGRlY29kZVByb2plY3RGaWx0ZXJzVVJMKCk7XG4gICAgfVxuICB9KTtcblxuICB2YXIgZ2V0QnVzaW5lc3NVbml0VHlwZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIEJ1c2luZXNzVW5pdFR5cGVzID0gW107XG5cbiAgICAkc2NvcGUuYnVzaW5lc3NVbml0cy5mb3JFYWNoKGZ1bmN0aW9uICh2YWwsIGlkeCkge1xuICAgICAgQnVzaW5lc3NVbml0VHlwZXMucHVzaCh2YWwpO1xuICAgICAgQnVzaW5lc3NVbml0VHlwZXNbaWR4XS5jaGVja2VkID0gZmFsc2U7XG4gICAgfSk7XG5cbiAgICAkc2NvcGUuQnVzaW5lc3NVbml0VHlwZXMgPSBCdXNpbmVzc1VuaXRUeXBlcztcbiAgfTtcblxuICAvLyB0aGUgdHdvIGRlY29kZSBtZXRob2RzIHJlYWQgdGhlIHVybCBhbmQgdXBkYXRlIHRoZSBmaWx0ZXIgcGFuZWxcbiAgLy8gY2hlY2tib3hlcyAoZGlzYXN0ZXJ0eXBlLCBwcm9qZWN0dHlwZSwgYnVzaW5lc3N0eXBlICYgc3RhdHVzKSBhY2NvcmRpbmdseVxuXG4gIHZhciBkZWNvZGVEaXNhc3RlckZpbHRlcnNVUkwgPSBmdW5jdGlvbiAoKSB7XG4gICAgLy92YXIgc3RyID0gZGVjb2RlVVJJQ29tcG9uZW50KGVuY29kZVVSSUNvbXBvbmVudCgkc3RhdGVQYXJhbXMuZmlsdGVycykpO1xuICAgIHZhciBzdHIgPSBkZWNvZGVVUklDb21wb25lbnQoZW5jb2RlVVJJQ29tcG9uZW50KCRzdGF0ZVBhcmFtcy5maWx0ZXJzKSk7XG5cbiAgICB2YXIgaW5kZXggPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHN0cltpXSA9PT0gXCIlXCIpIGluZGV4LnB1c2goaSk7XG4gICAgfVxuXG4gICAgdmFyIGFyciA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaW5kZXgubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFyci5wdXNoKHN0ci5zdWJzdHJpbmcoaW5kZXhbaV0gKyAxLCBpbmRleFtpICsgMV0pKTtcbiAgICAgIGkgPSBpICsgMTtcbiAgICB9XG5cbiAgICBpZiAoJHN0YXRlUGFyYW1zLmZpbHRlcnMgIT09IG51bGwgJiYgJHN0YXRlUGFyYW1zLmZpbHRlcnMgIT09IFwiXCJcbiAgICAgICYmICRzdGF0ZVBhcmFtcy5maWx0ZXJzICE9PSBcIm51bGxcIiAmJiB0eXBlb2YgJHN0YXRlUGFyYW1zLmZpbHRlcnMgIT09ICd1bmRlZmluZWQnKSB7XG5cbiAgICAgIHZhciBkaXNhc3RlcnMgPSAkc2NvcGUuZGlzYXN0ZXJUeXBlcztcbiAgICAgIHZhciBzdGF0dXNlcyA9ICRzY29wZS5kaXNhc3RlclN0YXR1cztcblxuICAgICAgJHNjb3BlLnNlY3RvckNsYXVzZSA9IG51bGw7XG4gICAgICB2YXIgZmlyc3QgPSB0cnVlO1xuICAgICAgZm9yICh2YXIgcyA9IDA7IHMgPCBhcnIubGVuZ3RoOyBzKyspIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGRpc2FzdGVycy5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICAgICAgICAgIHZhciBkaXNhc3RlciA9IGRpc2FzdGVyc1tpXTtcbiAgICAgICAgICBpZiAoYXJyW3NdLmluZGV4T2YoZGlzYXN0ZXIubmFtZSkgIT09IC0xKSB7XG4gICAgICAgICAgICBpZiAoZmlyc3QpIHtcbiAgICAgICAgICAgICAgZGlzYXN0ZXIuY2hlY2tlZCA9IHRydWU7XG4gICAgICAgICAgICAgICRzY29wZS5zZWN0b3JDbGF1c2UgPSBcImRpc2FzdGVyX3R5cGVfX2MgTElLRSAnJVwiICsgZGlzYXN0ZXIubmFtZSArIFwiJScgXCI7XG4gICAgICAgICAgICAgIGZpcnN0ID0gZmFsc2U7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBkaXNhc3Rlci5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgJHNjb3BlLnNlY3RvckNsYXVzZSArPSBcIk9SIGRpc2FzdGVyX3R5cGVfX2MgTElLRSAnJVwiICsgZGlzYXN0ZXIubmFtZSArIFwiJScgXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCRzdGF0ZVBhcmFtcy5maWx0ZXJzLmluZGV4T2YoJ2lyb2Nfc3RhdHVzX19jJykgIT09IC0xKSB7XG4gICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHN0YXR1c2VzLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICAgICAgICB2YXIgc3RhdHVzID0gc3RhdHVzZXNbaV07XG4gICAgICAgICAgICBpZiAoYXJyW3NdLmluZGV4T2Yoc3RhdHVzLm5hbWUpICE9PSAtMSkge1xuICAgICAgICAgICAgICBzdGF0dXMuY2hlY2tlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICRzY29wZS5kaXNhc3RlclN0YXR1c0ZpbHRlcigpO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICRzY29wZS5jbGVhckRpc2FzdGVyVHlwZUZpbHRlcigpO1xuICAgIH1cbiAgfTtcblxuICB2YXIgZGVjb2RlUHJvamVjdEZpbHRlcnNVUkwgPSBmdW5jdGlvbiAoKSB7XG4gICAgLy92YXIgc3RyID0gZGVjb2RlVVJJQ29tcG9uZW50KGVuY29kZVVSSUNvbXBvbmVudCgkc3RhdGVQYXJhbXMuZmlsdGVycykpO1xuICAgIHZhciBzdHIgPSBkZWNvZGVVUklDb21wb25lbnQoZW5jb2RlVVJJQ29tcG9uZW50KCRzdGF0ZVBhcmFtcy5maWx0ZXJzKSk7XG5cbiAgICB2YXIgaW5kZXggPSBbXTtcblxuICAgIC8vbG9vcCB0aHJvdWdoIHN0cmluZyBhbmQgcmVtb3ZlICclJ1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoc3RyW2ldID09PSBcIiVcIikgaW5kZXgucHVzaChpKTtcbiAgICB9XG5cbiAgICB2YXIgYXJyID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpbmRleC5sZW5ndGg7IGkrKykge1xuICAgICAgYXJyLnB1c2goc3RyLnN1YnN0cmluZyhpbmRleFtpXSArIDEsIGluZGV4W2kgKyAxXSkpO1xuICAgICAgaSA9IGkgKyAxO1xuICAgIH1cblxuICAgIGlmICgkc3RhdGVQYXJhbXMuZmlsdGVycyAhPT0gbnVsbCAmJiAkc3RhdGVQYXJhbXMuZmlsdGVycyAhPT0gXCJcIlxuICAgICAgJiYgJHN0YXRlUGFyYW1zLmZpbHRlcnMgIT09IFwibnVsbFwiICYmIHR5cGVvZiAkc3RhdGVQYXJhbXMuZmlsdGVycyAhPT0gJ3VuZGVmaW5lZCcpIHtcblxuICAgICAgdmFyIHNlY3RvcnMgPSAkc2NvcGUuc2VjdG9ycztcbiAgICAgICRzY29wZS5zZWN0b3JDbGF1c2UgPSBudWxsO1xuICAgICAgdmFyIGJ1bml0cyA9ICRzY29wZS5CdXNpbmVzc1VuaXRUeXBlcztcbiAgICAgIHZhciBidW5pdCA9IGJ1bml0c1tpXTtcblxuXG4gICAgICB2YXIgZmlyc3QgPSB0cnVlO1xuICAgICAgZm9yICh2YXIgcyA9IDA7IHMgPCBhcnIubGVuZ3RoOyBzKyspIHtcbiAgICAgICAgaWYgKCRzdGF0ZVBhcmFtcy5maWx0ZXJzLmluZGV4T2YoJ3NlY3Rvcl9fYycpICE9PSAtMSl7XG4gICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHNlY3RvcnMubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgICAgICAgICAgIHZhciBzZWN0b3IgPSBzZWN0b3JzW2ldO1xuICAgICAgICAgICAgaWYgKGFycltzXSA9PSBzZWN0b3IubmFtZSkge1xuICAgICAgICAgICAgICBpZiAoZmlyc3QpIHtcbiAgICAgICAgICAgICAgICBzZWN0b3IuY2hlY2tlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgJHNjb3BlLnNlY3RvckNsYXVzZSA9IFwic2VjdG9yX19jIExJS0UgJyVcIiArIHNlY3Rvci5uYW1lICsgXCIlJyBcIjtcbiAgICAgICAgICAgICAgICBmaXJzdCA9IGZhbHNlO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNlY3Rvci5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAkc2NvcGUuc2VjdG9yQ2xhdXNlID0gXCJzZWN0b3JfX2MgTElLRSAnJVwiICsgc2VjdG9yLm5hbWUgKyBcIiUnIFwiO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICAgICAgaWYgKCRzdGF0ZVBhcmFtcy5maWx0ZXJzLmluZGV4T2YoJ2J1c2luZXNzX3VuaXRfX2MnKSAhPT0gLTEpIHtcbiAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gYnVuaXRzLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICAgICAgICBpZiAoYXJyW3NdLmluZGV4T2YoYnVuaXQubGFiZWwpICE9PSAtMSkge1xuICAgICAgICAgICAgICBidW5pdC5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIC8vdW5jaGVjayBhbGwgZmlsdGVyc1xuICAgICAgJHNjb3BlLmNsZWFyQWxsRmlsdGVycygpO1xuICAgIH1cbiAgfTtcblxuXG4gICRzY29wZS4kb24oJ2ZpbHRlcnMtdXBkYXRlJywgZnVuY3Rpb24gKCkge1xuICAgIGlmICgkc3RhdGVQYXJhbXMudGhlbWUuaW5kZXhPZignZGlzYXN0ZXInKSAhPT0gLTEpIGRlY29kZURpc2FzdGVyRmlsdGVyc1VSTCgpO1xuICAgIGlmICgkc3RhdGVQYXJhbXMudGhlbWUgPT0gJ3Byb2plY3QnKSBkZWNvZGVQcm9qZWN0RmlsdGVyc1VSTCgpO1xuICB9KTtcblxuICAvKipcbiAgICogR2V0IGJ1ZGdldCBzdGF0cyBmcm9tIENodWJicyAtIGR5bmFtaWMgZnJvbSBQb3N0R0lTLlxuICAgKi9cbiAgJGh0dHAuZ2V0KGNvbmZpZy5jaHViYnNQYXRoKCdzZXJ2aWNlcy9jdXN0b20vY3VzdG9tX29wZXJhdGlvbj9uYW1lPXByb2plY3R0b3RhbGJ1ZGdldCZmb3JtYXQ9anNvbicpLCB7Y2FjaGU6IHRydWV9KS5zdWNjZXNzKGZ1bmN0aW9uIChkYXRhLCBzdGF0dXMpIHtcbiAgICBpZiAoZGF0YS5sZW5ndGggPiAwKSB7XG4gICAgICAkc2NvcGUuYnVkZ2V0Lm1pbiA9IGRhdGFbMF0ubWluO1xuICAgICAgJHNjb3BlLmJ1ZGdldC5tZWFuID0gZGF0YVswXS5hdmc7XG4gICAgICAkc2NvcGUuYnVkZ2V0Lm1heCA9IGRhdGFbMF0ubWF4O1xuICAgICAgJHNjb3BlLmJ1ZGdldC5zbGlkZXIgPSBbZGF0YVswXS5taW4sIGRhdGFbMF0ubWF4XTtcbiAgICB9XG4gIH0pLmVycm9yKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiVW5hYmxlIHRvIGZldGNoIFRvdGFsIEJ1ZGdldCBNaW4sIE1lYW4sIE1heFwiKTtcbiAgfSk7XG5cbiAgJHNjb3BlLmRhdGVGaWx0ZXJzID0gW1xuICAgIHtcbiAgICAgIG5hbWU6ICdTdGFydCBEYXRlJyxcbiAgICAgIHJhZGlvOiAnb24nLFxuICAgICAgZW1wdHk6IHRydWUsXG4gICAgICBvcGVuZWQ6IGZhbHNlXG4gICAgfSwge1xuICAgICAgbmFtZTogJ0VuZCBEYXRlJyxcbiAgICAgIHJhZGlvOiAnb24nLFxuICAgICAgZW1wdHk6IHRydWUsXG4gICAgICBvcGVuZWQ6IGZhbHNlXG4gICAgfSwge1xuICAgICAgbmFtZTogJ0NyZWF0ZSBEYXRlJyxcbiAgICAgIHJhZGlvOiAnb24nLFxuICAgICAgZW1wdHk6IHRydWUsXG4gICAgICBvcGVuZWQ6IGZhbHNlXG4gICAgfSwge1xuICAgICAgbmFtZTogJ0xhc3QgTW9kaWZpZWQnLFxuICAgICAgcmFkaW86ICdvbicsXG4gICAgICBlbXB0eTogdHJ1ZSxcbiAgICAgIG9wZW5lZDogZmFsc2VcbiAgICB9XG4gIF07XG5cbiAgJHNjb3BlLnRvZ2dsZURhdGUgPSBmdW5jdGlvbiAoJGV2ZW50LCBkYXRlRmlsdGVyKSB7XG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgZGF0ZUZpbHRlci5vcGVuZWQgPSAhZGF0ZUZpbHRlci5vcGVuZWQ7XG4gIH07XG5cbiAgJHNjb3BlLnNlY3RvcnNGaWx0ZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlY3RvcnMgPSAkc2NvcGUuc2VjdG9ycztcbiAgICAkc2NvcGUuc2VjdG9yQ2xhdXNlID0gbnVsbDtcbiAgICB2YXIgZmlyc3QgPSB0cnVlO1xuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBzZWN0b3JzLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICB2YXIgc2VjdG9yID0gc2VjdG9yc1tpXTtcbiAgICAgIGlmIChzZWN0b3IuY2hlY2tlZCkge1xuICAgICAgICBpZiAoZmlyc3QpIHtcbiAgICAgICAgICAkc2NvcGUuc2VjdG9yQ2xhdXNlID0gXCJzZWN0b3JfX2MgTElLRSAnJVwiICsgc2VjdG9yLm5hbWUgKyBcIiUnIFwiO1xuICAgICAgICAgIGZpcnN0ID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgJHNjb3BlLnNlY3RvckNsYXVzZSArPSBcIk9SIHNlY3Rvcl9fYyBMSUtFICclXCIgKyBzZWN0b3IubmFtZSArIFwiJScgXCI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgJHNjb3BlLmNvbXBvc2VXaGVyZUNsYXVzZSgpO1xuICB9O1xuXG4gICRzY29wZS5idXNpbmVzc1VuaXRzRmlsdGVyID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBidW5pdHMgPSAkc2NvcGUuQnVzaW5lc3NVbml0VHlwZXM7XG4gICAgJHNjb3BlLmJ1c2luZXNzVW5pdHNDbGF1c2UgPSBudWxsO1xuICAgIHZhciBmaXJzdCA9IHRydWU7XG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGJ1bml0cy5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICAgICAgdmFyIGJ1bml0ID0gYnVuaXRzW2ldO1xuICAgICAgaWYgKGJ1bml0LmNoZWNrZWQpIHtcbiAgICAgICAgaWYgKGZpcnN0KSB7XG4gICAgICAgICAgJHNjb3BlLmJ1c2luZXNzVW5pdHNDbGF1c2UgPSBcImJ1c2luZXNzX3VuaXRfX2MgTElLRSAnJVwiICsgYnVuaXQubGFiZWwgKyBcIiUnIFwiO1xuICAgICAgICAgIGZpcnN0ID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgJHNjb3BlLmJ1c2luZXNzVW5pdHNDbGF1c2UgKz0gXCJPUiBidXNpbmVzc191bml0X19jIExJS0UgJyVcIiArIGJ1bml0LmxhYmVsICsgXCIlJyBcIjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAkc2NvcGUuY29tcG9zZVdoZXJlQ2xhdXNlKCk7XG4gIH07XG5cbiAgJHNjb3BlLmRpc2FzdGVyVHlwZXNGaWx0ZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGRpc2FzdGVycyA9ICRzY29wZS5kaXNhc3RlclR5cGVzO1xuICAgICRzY29wZS5zZWN0b3JDbGF1c2UgPSBudWxsO1xuICAgIHZhciBmaXJzdCA9IHRydWU7XG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGRpc2FzdGVycy5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICAgICAgdmFyIGRpc2FzdGVyID0gZGlzYXN0ZXJzW2ldO1xuICAgICAgaWYgKGRpc2FzdGVyLmNoZWNrZWQpIHtcbiAgICAgICAgaWYgKGZpcnN0KSB7XG4gICAgICAgICAgJHNjb3BlLnNlY3RvckNsYXVzZSA9IFwiZGlzYXN0ZXJfdHlwZV9fYyBMSUtFICclXCIgKyBkaXNhc3Rlci5uYW1lICsgXCIlJyBcIjtcbiAgICAgICAgICBpZiAoJHNjb3BlLnN0YXR1c0NsYXVzZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgJHNjb3BlLnNlY3RvckNsYXVzZSA9ICRzY29wZS5zZWN0b3JDbGF1c2UgKyAnQU5EICcgKyBcIihcIiArICRzY29wZS5zdGF0dXNDbGF1c2UgKyBcIilcIjtcbiAgICAgICAgICB9XG4gICAgICAgICAgZmlyc3QgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAkc2NvcGUuc2VjdG9yQ2xhdXNlICs9IFwiT1IgZGlzYXN0ZXJfdHlwZV9fYyBMSUtFICclXCIgKyBkaXNhc3Rlci5uYW1lICsgXCIlJyBcIjtcbiAgICAgICAgICBpZiAoJHNjb3BlLnN0YXR1c0NsYXVzZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgJHNjb3BlLnNlY3RvckNsYXVzZSA9ICRzY29wZS5zZWN0b3JDbGF1c2UgKyAnQU5EJyArIFwiKFwiICsgJHNjb3BlLnN0YXR1c0NsYXVzZSArIFwiKVwiO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAkc2NvcGUuY29tcG9zZVdoZXJlQ2xhdXNlKCk7XG4gIH07XG5cbiAgJHNjb3BlLmNsZWFyU2VjdG9yc0ZpbHRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2VjdG9ycyA9ICRzY29wZS5zZWN0b3JzO1xuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBzZWN0b3JzLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICBzZWN0b3JzW2ldLmNoZWNrZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgJHNjb3BlLnNlY3RvckNsYXVzZSA9IG51bGw7XG4gICAgJHNjb3BlLmNvbXBvc2VXaGVyZUNsYXVzZSgpO1xuICB9O1xuXG4gICRzY29wZS5jbGVhckJ1c2luZXNzVW5pdEZpbHRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgYnVuaXRzID0gJHNjb3BlLkJ1c2luZXNzVW5pdFR5cGVzO1xuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBidW5pdHMubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgICAgIGJ1bml0c1tpXS5jaGVja2VkID0gZmFsc2U7XG4gICAgfVxuICAgICRzY29wZS5idXNpbmVzc1VuaXRzQ2xhdXNlID0gbnVsbDtcblxuICAgICRzY29wZS5jb21wb3NlV2hlcmVDbGF1c2UoKTtcbiAgfTtcblxuICAkc2NvcGUuY2xlYXJEaXNhc3RlclR5cGVGaWx0ZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGRpc2FzdGVycyA9ICRzY29wZS5kaXNhc3RlclR5cGVzO1xuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBkaXNhc3RlcnMubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgICAgIGRpc2FzdGVyc1tpXS5jaGVja2VkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCAkc2NvcGUuZGlzYXN0ZXJTdGF0dXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICRzY29wZS5kaXNhc3RlclN0YXR1c1tpXS5jaGVja2VkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgJHNjb3BlLnN0YXR1c0NsYXVzZSA9IG51bGw7XG4gICAgJHNjb3BlLnNlY3RvckNsYXVzZSA9IG51bGw7XG4gICAgJHNjb3BlLmNvbXBvc2VXaGVyZUNsYXVzZSgpO1xuICB9O1xuXG4gICRzY29wZS5jbGVhckRpc2FzdGVyRmlsdGVyID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBkaXNhc3RlcnMgPSAkc2NvcGUuZGlzYXN0ZXJUeXBlcztcbiAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gZGlzYXN0ZXJzLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICBkaXNhc3RlcnNbaV0uY2hlY2tlZCA9IGZhbHNlO1xuICAgIH1cbiAgICAkc2NvcGUuc2VjdG9yQ2xhdXNlID0gbnVsbDtcbiAgICAkc2NvcGUuY29tcG9zZVdoZXJlQ2xhdXNlKCk7XG4gIH07XG5cbiAgJHNjb3BlLmRlZmF1bHRTdGF0dXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCAkc2NvcGUuZGlzYXN0ZXJTdGF0dXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICgkc2NvcGUuZGlzYXN0ZXJTdGF0dXNbaV0ubmFtZSAhPT0gXCJJbmFjdGl2ZVwiKSB7XG4gICAgICAgICRzY29wZS5kaXNhc3RlclN0YXR1c1tpXS5jaGVja2VkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgJHNjb3BlLnN0YXR1c0ZpbHRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc3RhdHVzID0gJHNjb3BlLnN0YXR1cztcbiAgICAkc2NvcGUuc3RhdHVzQ2xhdXNlID0gbnVsbDtcbiAgICB2YXIgc3RhdHVzQ29sdW1uID0gKCRzdGF0ZVBhcmFtcy5sYXllcnMuaW5kZXhPZignYXJjcmVnaW9ucycpICE9PSAtMSkgPyAnc3RhdHVzX19jJyA6ICdzdGF0dXNfX2MnO1xuICAgIHZhciBmaXJzdCA9IHRydWU7XG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHN0YXR1cy5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICAgICAgdmFyIHN0YXQgPSBzdGF0dXNbaV07XG4gICAgICBpZiAoc3RhdC5jaGVja2VkKSB7XG4gICAgICAgIGlmIChmaXJzdCkge1xuICAgICAgICAgICRzY29wZS5zdGF0dXNDbGF1c2UgPSBzdGF0dXNDb2x1bW4gKyBcIiBMSUtFICclXCIgKyBzdGF0Lm5hbWUgKyBcIiUnXCI7XG4gICAgICAgICAgZmlyc3QgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAkc2NvcGUuc3RhdHVzQ2xhdXNlICs9IFwiT1IgXCIgKyBzdGF0dXNDb2x1bW4gKyBcIiBMSUtFICclXCIgKyBzdGF0Lm5hbWUgKyBcIiUnIFwiO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgICRzY29wZS5jb21wb3NlV2hlcmVDbGF1c2UoKTtcbiAgfTtcblxuICAkc2NvcGUucGhhc2VGaWx0ZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHBoYXNlID0gJHNjb3BlLnBoYXNlX19jO1xuICAgICRzY29wZS5waGFzZUNsYXVzZSA9IG51bGw7XG4gICAgdmFyIGZpcnN0ID0gdHJ1ZTtcbiAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gcGhhc2UubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgICAgIHZhciBwID0gcGhhc2VbaV07XG4gICAgICBpZiAocC5jaGVja2VkKSB7XG4gICAgICAgIGlmIChmaXJzdCkge1xuICAgICAgICAgICRzY29wZS5waGFzZUNsYXVzZSA9IFwicGhhc2VfX2MgTElLRSAnJVwiICsgcC52YWx1ZSArIFwiJSdcIjtcbiAgICAgICAgICBmaXJzdCA9IGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICRzY29wZS5waGFzZUNsYXVzZSArPSBcIk9SIHBoYXNlX19jIExJS0UgJyVcIiArIHAudmFsdWUgKyBcIiUnIFwiO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgICRzY29wZS5jb21wb3NlV2hlcmVDbGF1c2UoKTtcbiAgfTtcblxuICAkc2NvcGUuY2xlYXJQaGFzZUZpbHRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcGhhc2UgPSAkc2NvcGUucGhhc2VfX2M7XG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHBoYXNlLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICBwaGFzZVtpXS5jaGVja2VkID0gZmFsc2U7XG4gICAgfVxuICAgICRzY29wZS5waGFzZUNsYXVzZSA9IG51bGw7XG4gICAgJHNjb3BlLmNvbXBvc2VXaGVyZUNsYXVzZSgpO1xuICB9O1xuXG4gICRzY29wZS5kaXNhc3RlclN0YXR1c0ZpbHRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc3RhdHVzID0gJHNjb3BlLmRpc2FzdGVyU3RhdHVzO1xuICAgICRzY29wZS5zdGF0dXNDbGF1c2UgPSBudWxsO1xuICAgIHZhciBmaXJzdCA9IHRydWU7XG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHN0YXR1cy5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICAgICAgdmFyIHN0YXQgPSBzdGF0dXNbaV07XG4gICAgICBpZiAoc3RhdC5jaGVja2VkKSB7XG4gICAgICAgIGlmIChmaXJzdCkge1xuICAgICAgICAgICRzY29wZS5zdGF0dXNDbGF1c2UgPSBcImlyb2Nfc3RhdHVzX19jIExJS0UgJyVcIiArIHN0YXQubmFtZSArIFwiJSdcIjtcbiAgICAgICAgICBmaXJzdCA9IGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICRzY29wZS5zdGF0dXNDbGF1c2UgKz0gXCJPUiBpcm9jX3N0YXR1c19fYyBMSUtFICclXCIgKyBzdGF0Lm5hbWUgKyBcIiUnIFwiO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG5cbiAgJHNjb3BlLmNsZWFyU3RhdHVzRmlsdGVyID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzdGF0dXMgPSAkc2NvcGUuc3RhdHVzO1xuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBzdGF0dXMubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgICAgIHN0YXR1c1tpXS5jaGVja2VkID0gZmFsc2U7XG4gICAgfVxuICAgICRzY29wZS5zdGF0dXNDbGF1c2UgPSBudWxsO1xuICAgICRzY29wZS5jb21wb3NlV2hlcmVDbGF1c2UoKTtcbiAgfTtcblxuXG4gICRzY29wZS5kYXRlRmlsdGVyID0gZnVuY3Rpb24gKCkge1xuICAgICRzY29wZS5kYXRlQ2xhdXNlID0gbnVsbDtcbiAgICB2YXIgX2ZpcnN0ID0gdHJ1ZTtcbiAgICB2YXIgZmlyc3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoX2ZpcnN0KSB7XG4gICAgICAgIF9maXJzdCA9IGZhbHNlO1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgICB9XG4gICAgICByZXR1cm4gJyBBTkQgJztcbiAgICB9O1xuICAgIHZhciBkYXRlRmlsdGVycyA9ICRzY29wZS5kYXRlRmlsdGVycztcbiAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gZGF0ZUZpbHRlcnMubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgICAgIHZhciBmaWx0ZXIgPSBkYXRlRmlsdGVyc1tpXTtcblxuICAgICAgaWYgKGZpbHRlci5uYW1lID09PSAnU3RhcnQgRGF0ZScgJiYgZmlsdGVyLmRhdGUpIHtcbiAgICAgICAgJHNjb3BlLmRhdGVDbGF1c2UgPSBmaXJzdCgpICsgJ3N0YXJ0X2RhdGVfX2MnICsgY29tcGFyZShmaWx0ZXIpICsgXCInXCIgKyBkYXRlU3RyaW5nKGZpbHRlci5kYXRlKSArIFwiJ1wiO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKGZpbHRlci5uYW1lID09PSAnRW5kIERhdGUnICYmIGZpbHRlci5kYXRlKSB7XG4gICAgICAgICRzY29wZS5kYXRlQ2xhdXNlID0gZmlyc3QoKSArICdlbmRfZGF0ZV9fYycgKyBjb21wYXJlKGZpbHRlcikgKyBcIidcIiArIGRhdGVTdHJpbmcoZmlsdGVyLmRhdGUpICsgXCInXCI7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoZmlsdGVyLm5hbWUgPT09ICdDcmVhdGUgRGF0ZScgJiYgZmlsdGVyLmRhdGUpIHtcbiAgICAgICAgJHNjb3BlLmRhdGVDbGF1c2UgPSBmaXJzdCgpICsgJ2NyZWF0ZWRhdGUnICsgY29tcGFyZShmaWx0ZXIpICsgXCInXCIgKyBkYXRlU3RyaW5nKGZpbHRlci5kYXRlKSArIFwiJ1wiO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKGZpbHRlci5uYW1lID09PSAnTGFzdCBNb2RpZmllZCcgJiYgZmlsdGVyLmRhdGUpIHtcbiAgICAgICAgJHNjb3BlLmRhdGVDbGF1c2UgPSBmaXJzdCgpICsgJ2xhc3Rtb2RpZmllZGRhdGUnICsgY29tcGFyZShmaWx0ZXIpICsgXCInXCIgKyBkYXRlU3RyaW5nKGZpbHRlci5kYXRlKSArIFwiJ1wiO1xuICAgICAgfVxuXG4gICAgfVxuICAgICRzY29wZS5jb21wb3NlV2hlcmVDbGF1c2UoKTtcbiAgfTtcblxuICAkc2NvcGUuY2xlYXJEYXRlRmlsdGVyID0gZnVuY3Rpb24gKCkge1xuICAgICRzY29wZS5kYXRlRmlsdGVycyA9IFtcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ1N0YXJ0IERhdGUnLFxuICAgICAgICByYWRpbzogJ29uJyxcbiAgICAgICAgZW1wdHk6IHRydWUsXG4gICAgICAgIG9wZW5lZDogZmFsc2UsXG4gICAgICAgIGRhdGU6IG51bGxcbiAgICAgIH0sIHtcbiAgICAgICAgbmFtZTogJ0VuZCBEYXRlJyxcbiAgICAgICAgcmFkaW86ICdvbicsXG4gICAgICAgIGVtcHR5OiB0cnVlLFxuICAgICAgICBvcGVuZWQ6IGZhbHNlLFxuICAgICAgICBkYXRlOiBudWxsXG4gICAgICB9LCB7XG4gICAgICAgIG5hbWU6ICdDcmVhdGUgRGF0ZScsXG4gICAgICAgIHJhZGlvOiAnb24nLFxuICAgICAgICBlbXB0eTogdHJ1ZSxcbiAgICAgICAgb3BlbmVkOiBmYWxzZSxcbiAgICAgICAgZGF0ZTogbnVsbFxuICAgICAgfSwge1xuICAgICAgICBuYW1lOiAnTGFzdCBNb2RpZmllZCcsXG4gICAgICAgIHJhZGlvOiAnb24nLFxuICAgICAgICBlbXB0eTogdHJ1ZSxcbiAgICAgICAgb3BlbmVkOiBmYWxzZSxcbiAgICAgICAgZGF0ZTogbnVsbFxuICAgICAgfVxuICAgIF07XG4gICAgJHNjb3BlLmRhdGVDbGF1c2UgPSBudWxsO1xuICAgICRzY29wZS5jb21wb3NlV2hlcmVDbGF1c2UoKTtcbiAgfTtcblxuICAvKipcbiAgICogVXNlZCBpbiBkYXRlRmlsdGVyLiBEZXRlcm1pbmVzIHRoZSBwcm9wZXIgU1FMIGNvbXBhcmF0b3IgdG8gdXNlXG4gICAqIGZvciBmaWx0ZXJpbmcgYSBkYXRlLlxuICAgKlxuICAgKiBAcGFyYW0gZmlsdGVyXG4gICAqL1xuICBmdW5jdGlvbiBjb21wYXJlKGZpbHRlcikge1xuICAgIHZhciByYWRpbyA9IGZpbHRlci5yYWRpbztcbiAgICBpZiAocmFkaW8gPT09ICdvbicpIHtcbiAgICAgIHJldHVybiAnPSc7XG4gICAgfVxuICAgIGlmIChyYWRpbyA9PT0gJ2JlZm9yZScpIHtcbiAgICAgIHJldHVybiAnPCc7XG4gICAgfVxuICAgIGlmIChyYWRpbyA9PT0gJ2FmdGVyJykge1xuICAgICAgcmV0dXJuICc+JztcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBkYXRlIGFzIFlZWVktTU0tRERcbiAgICpcbiAgICogQHBhcmFtIGRhdGVcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICovXG4gIGZ1bmN0aW9uIGRhdGVTdHJpbmcoZGF0ZSkge1xuICAgIHJldHVybiBkYXRlLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApO1xuICB9XG5cbiAgJHNjb3BlLmJ1ZGdldEZpbHRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAkc2NvcGUuYnVkZ2V0Q2xhdXNlID0gbnVsbDtcbiAgICB2YXIgbWluID0gJHNjb3BlLmJ1ZGdldC5zbGlkZXJbMF07XG4gICAgdmFyIG1heCA9ICRzY29wZS5idWRnZXQuc2xpZGVyWzFdO1xuICAgIGlmIChtaW4gIT09IDAgJiYgbWF4ICE9PSAkc2NvcGUuYnVkZ2V0Lm1heCkgeyAvL2JvdGggbWluIGFuZCBtYXggY2hhbmdlZFxuICAgICAgJHNjb3BlLmJ1ZGdldENsYXVzZSA9ICd0b3RhbF9idWRnZXRfX2M+PScgKyBtaW4gKyAnIEFORCB0b3RhbF9idWRnZXRfX2M8PScgKyBtYXg7XG4gICAgfSBlbHNlIGlmIChtaW4gIT09IDApIHsgLy8gb25seSBtaW4gY2hhbmdlZFxuICAgICAgJHNjb3BlLmJ1ZGdldENsYXVzZSA9ICd0b3RhbF9idWRnZXRfX2M+PScgKyBtaW5cbiAgICB9IGVsc2UgaWYgKG1heCAhPT0gJHNjb3BlLmJ1ZGdldC5tYXgpIHsgLy8gb25seSBtYXggY2hhbmdlZFxuICAgICAgJHNjb3BlLmJ1ZGdldENsYXVzZSA9ICd0b3RhbF9idWRnZXRfX2M8PScgKyBtYXg7XG4gICAgfVxuICAgICRzY29wZS5jb21wb3NlV2hlcmVDbGF1c2UoKTtcbiAgfTtcblxuICAkc2NvcGUuY2xlYXJCdWRnZXRGaWx0ZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgJHNjb3BlLmJ1ZGdldC5zbGlkZXJbMF0gPSAkc2NvcGUuYnVkZ2V0Lm1pbjtcbiAgICAkc2NvcGUuYnVkZ2V0LnNsaWRlclsxXSA9ICRzY29wZS5idWRnZXQubWF4O1xuICAgICRzY29wZS5idWRnZXRDbGF1c2UgPSBudWxsO1xuICAgICRzY29wZS5jb21wb3NlV2hlcmVDbGF1c2UoKTtcbiAgfTtcblxuICAkc2NvcGUuY29tcG9zZVdoZXJlQ2xhdXNlID0gZnVuY3Rpb24gKCkge1xuICAgICRzY29wZS53aGVyZUNsYXVzZSA9IG51bGw7XG4gICAgdmFyIHBhcnRzID0gW107XG5cbiAgICBpZiAoJHN0YXRlUGFyYW1zLnRoZW1lLmluZGV4T2YoJ2Rpc2FzdGVyJykgIT09IC0xKSB7XG4gICAgICBpZiAoJHNjb3BlLnNlY3RvckNsYXVzZSA9PSBudWxsKSB7XG4gICAgICAgIHBhcnRzID0gWyRzY29wZS5zZWN0b3JDbGF1c2UsICRzY29wZS5kYXRlQ2xhdXNlLCAkc2NvcGUuc3RhdHVzQ2xhdXNlLCAkc2NvcGUuYnVkZ2V0Q2xhdXNlLCAkc2NvcGUucGhhc2VDbGF1c2VdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFydHMgPSBbJHNjb3BlLnNlY3RvckNsYXVzZSwgJHNjb3BlLmRhdGVDbGF1c2UsICRzY29wZS5idWRnZXRDbGF1c2UsICRzY29wZS5waGFzZUNsYXVzZV07XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhcnRzID0gWyRzY29wZS5zZWN0b3JDbGF1c2UsICRzY29wZS5kYXRlQ2xhdXNlLCAkc2NvcGUuc3RhdHVzQ2xhdXNlLCAkc2NvcGUuYnVkZ2V0Q2xhdXNlLCAkc2NvcGUuYnVzaW5lc3NVbml0c0NsYXVzZSwgJHNjb3BlLnBoYXNlQ2xhdXNlXTtcbiAgICB9XG5cbiAgICB2YXIgZmlyc3QgPSB0cnVlO1xuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBwYXJ0cy5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICAgICAgdmFyIHBhcnQgPSBwYXJ0c1tpXTtcbiAgICAgIGlmIChwYXJ0KSB7XG4gICAgICAgIGlmIChmaXJzdCkge1xuICAgICAgICAgICRzY29wZS53aGVyZUNsYXVzZSA9IHBhcnQ7XG4gICAgICAgICAgZmlyc3QgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAkc2NvcGUud2hlcmVDbGF1c2UgKz0gJ0FORCAnICsgcGFydDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoISRzY29wZS53aGVyZUNsYXVzZSkgJHNjb3BlLndoZXJlQ2xhdXNlID0gJ251bGwnO1xuICAgICRzY29wZS5zdWJtaXRGaWx0ZXIoKTtcbiAgfTtcblxuICAkc2NvcGUuc3VibWl0RmlsdGVyID0gZnVuY3Rpb24gKCkge1xuXG4gICAgaWYgKCRzdGF0ZVBhcmFtcy50aGVtZS5pbmRleE9mKCdwcm9qZWN0JykgIT09IC0xKSRzdGF0ZVBhcmFtcy5maWx0ZXJzID0gZXNjYXBlKCRzY29wZS53aGVyZUNsYXVzZSk7XG4gICAgaWYgKCRzdGF0ZVBhcmFtcy50aGVtZS5pbmRleE9mKCdkaXNhc3RlcicpICE9PSAtMSkkc3RhdGVQYXJhbXMuZmlsdGVycyA9IGVzY2FwZSgkc2NvcGUud2hlcmVDbGF1c2UpO1xuXG4gICAgdmFyIHN0YXRlID0gJHN0YXRlLmN1cnJlbnQubmFtZSB8fCAnbWFpbic7XG4gICAgJHN0YXRlLmdvKHN0YXRlLCAkc3RhdGVQYXJhbXMpO1xuICB9O1xuXG4gICRzY29wZS5jbGVhckFsbEZpbHRlcnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgJHNjb3BlLmNsZWFyU2VjdG9yc0ZpbHRlcigpO1xuICAgICRzY29wZS5jbGVhclN0YXR1c0ZpbHRlcigpO1xuICAgICRzY29wZS5jbGVhclBoYXNlRmlsdGVyKCk7XG4gICAgJHNjb3BlLmNsZWFyRGF0ZUZpbHRlcigpO1xuICAgICRzY29wZS5jbGVhckJ1ZGdldEZpbHRlcigpO1xuICAgICRzY29wZS5jbGVhckRpc2FzdGVyVHlwZUZpbHRlcigpO1xuICAgICRzY29wZS5jbGVhckJ1c2luZXNzVW5pdEZpbHRlcigpO1xuICB9O1xuXG4gIC8vIHB1dHMgdGhlIGNhdGVnb3J5IGluIFVSTFxuICAkc2NvcGUucHV0Q2F0ZWdvcnlVUkwgPSBmdW5jdGlvbiAoY2F0ZWdvcnlOYW1lKSB7XG4gICAgaWYgKCRzdGF0ZVBhcmFtcy5jYXRlZ29yeSA9PSBjYXRlZ29yeU5hbWUpIHtcbiAgICAgICRzdGF0ZVBhcmFtcy5jYXRlZ29yeSA9IG51bGw7XG4gICAgICAkc3RhdGUuZ28oJHN0YXRlLmN1cnJlbnQubmFtZSwgJHN0YXRlUGFyYW1zKTtcbiAgICB9IGVsc2Uge1xuICAgICAgJHN0YXRlUGFyYW1zLmNhdGVnb3J5ID0gY2F0ZWdvcnlOYW1lO1xuICAgICAgJHN0YXRlLmdvKCRzdGF0ZS5jdXJyZW50Lm5hbWUsICRzdGF0ZVBhcmFtcyk7XG4gICAgfVxuICB9O1xuXG4gICRzY29wZS5oYW5kbGVTZWFyY2ggPSBmdW5jdGlvbiAodmFsKSB7XG4gICAgdmFyIGR0ID0gJHNjb3BlLmRpc2FzdGVyVHlwZXNjYXRlZ29yeTtcbiAgICAkc2NvcGUuc2VhcmNoVGV4dCA9IHZhbDtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IE9iamVjdC5rZXlzKGR0KS5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGFyciA9IGR0W09iamVjdC5rZXlzKGR0KVtpXV07XG4gICAgICBmb3IgKHZhciB6ID0gMDsgeiA8IGFyci5sZW5ndGg7IHorKykge1xuICAgICAgICBpZiAoYXJyW3pdLm5hbWUuaW5kZXhPZih2YWwpICE9PSAtMSkge1xuICAgICAgICAgICRzdGF0ZVBhcmFtcy5jYXRlZ29yeSA9IE9iamVjdC5rZXlzKGR0KVtpXTtcbiAgICAgICAgICAkc2NvcGUuZGlzYXN0ZXJUeXBlc2NhdGVnb3J5W09iamVjdC5rZXlzKGR0KVtpXV1bel0uaXNTZWFyY2hBY3RpdmUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHZhciBzdGF0ZSA9ICRzdGF0ZS5jdXJyZW50Lm5hbWUgfHwgJ21haW4nO1xuICAgICRzdGF0ZS5nbyhzdGF0ZSwgJHN0YXRlUGFyYW1zKTtcbiAgfTtcblxuICAkc2NvcGUuaGlnaGxpZ2h0TGF5ZXIgPSBmdW5jdGlvbiAodmFsKSB7XG4gICAgJHNjb3BlLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAkdGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgZHQgPSAkc2NvcGUuZGlzYXN0ZXJUeXBlc2NhdGVnb3J5O1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBPYmplY3Qua2V5cyhkdCkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGFyciA9IGR0W09iamVjdC5rZXlzKGR0KVtpXV07XG4gICAgICAgIGZvciAodmFyIHogPSAwOyB6IDwgYXJyLmxlbmd0aDsgeisrKSB7XG4gICAgICAgICAgaWYgKGFyclt6XS5uYW1lLmluZGV4T2YodmFsKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICRzY29wZS5kaXNhc3RlclR5cGVzY2F0ZWdvcnlbT2JqZWN0LmtleXMoZHQpW2ldXVt6XS5pc1NlYXJjaEFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgJHNjb3BlLnNlYXJjaFRleHQgPSAnJztcbiAgICAgICRzY29wZS5zZWxlY3RlZCA9IGZhbHNlO1xuICAgIH0sIDIwMDApO1xuICB9O1xuXG4gICRzY29wZS5VTk9DSEFJY29uTG9va3VwID0gY29uZmlnLlVOT0NIQUljb25Mb29rdXA7XG5cbn0pO1xuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IE5pY2hvbGFzIEhhbGxhaGFuIDxuaGFsbGFoYW5Ac3BhdGlhbGRldi5jb20+XG4gKiAgICAgICBvbiAzLzI3LzE0LlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ0dlb0FuZ3VsYXInKS5jb250cm9sbGVyKCdJbmZvQ3RybCcsIGZ1bmN0aW9uKCRzY29wZSkge1xuICAkc2NvcGUucGFyYW1zID0gJHN0YXRlUGFyYW1zO1xufSk7IiwiLyoqXG4gKiBDcmVhdGVkIGJ5IE5pY2hvbGFzIEhhbGxhaGFuIDxuaGFsbGFoYW5Ac3BhdGlhbGRldi5jb20+XG4gKiAgICAgICBvbiAzLzI3LzE0LlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ0dlb0FuZ3VsYXInKS5jb250cm9sbGVyKCdMYXllcnNDdHJsJywgZnVuY3Rpb24oJHNjb3BlLCAkc3RhdGUsICRzdGF0ZVBhcmFtcywgTGF5ZXJDb25maWcsIFZlY3RvclByb3ZpZGVyLCAkcm9vdFNjb3BlKSB7XG4gICRzY29wZS5wYXJhbXMgPSAkc3RhdGVQYXJhbXM7XG4gICRzY29wZS56b29tID0gcGFyc2VJbnQoJHN0YXRlUGFyYW1zLnpvb20pO1xuICAkc2NvcGUubmF2VGFiID0gJ2NvbnRleHR1YWwnO1xuXG4gICRzY29wZS5naXN0cyA9IFtdOyAvL2luaXRpYWxpemUgYXMgZW1wdHlcbiAgJHNjb3BlLm1hcExheWVycyA9IFtdOyAvL2luaXRpYWxpemUgYXMgZW1wdHlcblxuICAkc2NvcGUuYXJjcmVnaW9uc0xhYmVsID0gJ0FSQyBSZWdpb25zJztcbiAgJHNjb3BlLmdhZG0wTGFiZWwgPSAnQ291bnRyaWVzJztcbiAgJHNjb3BlLmdhZG0xTGFiZWwgPSAnU3RhdGUgLyBQcm92aW5jZSc7XG4gICRzY29wZS5nYWRtMkxhYmVsID0gJ0NvdW50eSAvIERpc3RyaWN0JztcblxuXG4gIGRlYnVnLkxheWVyQ29uZmlnID0gTGF5ZXJDb25maWc7XG4gIGRlYnVnLnNldEdhZG1MZXZlbCA9IFZlY3RvclByb3ZpZGVyLnNldEdhZG1MZXZlbDtcblxuICAkc2NvcGUuZ2FkbUxldmVsID0gJHJvb3RTY29wZS5sZXZlbCB8fCAwO1xuXG4gICRzY29wZS50aGVtZUxhYmVscyA9IHsgaXNDaGVja2VkOiAkc3RhdGVQYXJhbXMudGhlbWVsYWJlbHMgfHwgdHJ1ZSB9O1xuXG4gICRzY29wZS50aGVtZSA9IHsgaXNDaGVja2VkOiB0cnVlIH07XG5cbiAgJHNjb3BlLnRoZW1lTGF5ZXIgPSBMYXllckNvbmZpZy50aGVtZTtcblxuICAkc2NvcGUudXBkYXRlR2FkbSA9IGZ1bmN0aW9uIChsZXZlbCkge1xuICAgICRzY29wZS5sZXZlbCA9IGxldmVsLnRvU3RyaW5nKCk7XG4gICAgaWYobGV2ZWwudG9TdHJpbmcoKSAhPT0gJHNjb3BlLmdhZG1MZXZlbCkge1xuICAgICAgJHNjb3BlLmdhZG1MZXZlbCA9IGxldmVsLnRvU3RyaW5nKCkgfHwgXCIwXCI7XG4gICAgICBjb25zb2xlLmxvZygkc2NvcGUuZ2FkbUxldmVsKTtcbiAgICB9O1xuXG4gIH07XG5cbiAgJHNjb3BlLmNsb3NlUGFuZWxzID0gZnVuY3Rpb24gKCl7XG4gICAgZm9yICh2YXIgcGFyYW0gaW4gJHN0YXRlUGFyYW1zKSB7XG4gICAgICBpZiAoJHN0YXRlUGFyYW1zW3BhcmFtXSA9PT0gJ29wZW4nKSB7XG4gICAgICAgICRzdGF0ZVBhcmFtc1twYXJhbV0gPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICAkc2NvcGUudXBkYXRlVGhlbWVMYWJlbCA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICgkc2NvcGUudGhlbWVMYWJlbHMuaXNDaGVja2VkID09PSB0cnVlKSB7XG4gICAgICAkc3RhdGVQYXJhbXMudGhlbWVsYWJlbHMgPSAndHJ1ZSc7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgLy9yZW1vdmUgZnJvbSBzdGF0ZXBhcmFtc1xuICAgICAgJHN0YXRlUGFyYW1zLnRoZW1lbGFiZWxzID0gJ2ZhbHNlJztcbiAgICB9XG5cbiAgICB2YXIgc3RhdGUgPSAkc3RhdGUuY3VycmVudC5uYW1lIHx8ICdtYWluJztcbiAgICAkc3RhdGUuZ28oc3RhdGUsICRzdGF0ZVBhcmFtcyk7XG4gIH07XG5cbiAgLy9Ub2dnbGUgRUNPUyBMYXllciAtIGlmIG9mZiwgdGhlbiB0dXJuIG9uIGFuZCB2aWNlIHZlcnNhLlxuICAkc2NvcGUudXBkYXRlVGhlbWUgPSBmdW5jdGlvbigpIHtcblxuICAgIHZhciBsYXllcnNBcnJheTtcblxuICAgIGlmKCRzdGF0ZVBhcmFtcy5sYXllcnMpe1xuICAgICAgbGF5ZXJzQXJyYXkgPSAkc3RhdGVQYXJhbXMubGF5ZXJzLnNwbGl0KFwiLFwiKTtcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoJHNjb3BlLnRoZW1lLmlzQ2hlY2tlZCA9PT0gdHJ1ZSkge1xuXG4gICAgICAvL1JlbW92ZSBhbGwgR0FETSBsYXllcnMuXG4gICAgICBhbmd1bGFyLmZvckVhY2gobGF5ZXJzQXJyYXksIGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XG4gICAgICAgIGlmIChMYXllckNvbmZpZy50aGVtZUxheWVycy5pbmRleE9mKHZhbHVlKSA+IC0xKSB7XG4gICAgICAgICAgbGF5ZXJzQXJyYXkuc3BsaWNlKGxheWVyc0FycmF5LmluZGV4T2YodmFsdWUpLCAxKTsgLy9yZW1vdmUgYW55IEdBRE1zXG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICAvL0FkZCBpbiB0aGUgZ2FkbSBsYXllciB0byB0aGUgbGF5ZXJzIGxpc3QgaW4gdGhlIHN0YXRlcGFyYW1zLlxuICAgICAgaWYoJHNjb3BlLmdhZG1MZXZlbCA9PSAtMSl7XG4gICAgICAgIGxheWVyc0FycmF5LnB1c2goXCJhcmNyZWdpb25zXCIpO1xuICAgICAgfVxuICAgICAgZWxzZXtcbiAgICAgICAgbGF5ZXJzQXJyYXkucHVzaChcImdhZG1cIiArICRzY29wZS5nYWRtTGV2ZWwpXG4gICAgICB9XG5cbiAgICAgICRzdGF0ZVBhcmFtcy5sYXllcnMgPSBsYXllcnNBcnJheS5qb2luKFwiLFwiKTtcblxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIC8vcmVtb3ZlIGZyb20gc3RhdGVwYXJhbXNcbiAgICAgIC8vUmVtb3ZlIGFsbCBHQURNIGxheWVycy5cbiAgICAgIGFuZ3VsYXIuZm9yRWFjaChsYXllcnNBcnJheSwgZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcbiAgICAgICAgaWYgKExheWVyQ29uZmlnLnRoZW1lTGF5ZXJzLmluZGV4T2YodmFsdWUpID4gLTEpIHtcbiAgICAgICAgICBsYXllcnNBcnJheS5zcGxpY2UobGF5ZXJzQXJyYXkuaW5kZXhPZih2YWx1ZSksIDEpOyAvL3JlbW92ZSBhbnkgR0FETXNcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgICRzdGF0ZVBhcmFtcy5sYXllcnMgPSBsYXllcnNBcnJheS5qb2luKFwiLFwiKTtcbiAgICB9XG5cbiAgICB2YXIgc3RhdGUgPSAkc3RhdGUuY3VycmVudC5uYW1lIHx8ICdtYWluJztcbiAgICAkc3RhdGUuZ28oc3RhdGUsICRzdGF0ZVBhcmFtcyk7XG5cbiAgfTtcblxuXG4gICRzY29wZS4kd2F0Y2goJ2dhZG1MZXZlbCcsIGZ1bmN0aW9uIChuZXdWYWx1ZSkge1xuICAgICRzY29wZS51cGRhdGVUaGVtZSgpO1xuICB9KTtcblxuICAvLyRzY29wZS4kb24oJ2xldmVsLXVwZGF0ZScsIGZ1bmN0aW9uICgpIHtcbiAgLy8gIFZlY3RvclByb3ZpZGVyLnNldEdhZG1MZXZlbCgkc3RhdGVQYXJhbXMubGV2ZWwpO1xuICAvLyAgJHNjb3BlLmdhZG1MZXZlbCA9ICRzdGF0ZVBhcmFtcy5sZXZlbFxuICAvL30pO1xuXG4gICRzY29wZS4kb24oJ3pvb20tdXBkYXRlJywgZnVuY3Rpb24gKCkge1xuICAgICRzY29wZS56b29tID0gcGFyc2VJbnQoJHN0YXRlUGFyYW1zLnpvb20pO1xuICB9KTtcblxuXG4gIC8qKlxuICAgKiBUaGlzIGlzIHRoZSBjb2xsZWN0aW9uIG9mIGFsbCBvZiB0aGUgbGF5ZXJzIHdlIGhhdmUuXG4gICAqIFRoaXMgaXMgdXNlZCBieSB0aGUgc2VhcmNoTGF5ZXJzRmlsdGVyLlxuICAgKi9cbiAgJHNjb3BlLmFsbExheWVycyA9IHt9O1xuICAvLyBidWlsZGluZyB0aGUgYWxsTGF5ZXJzIG1vZGVsXG4gIGZvciAodmFyIGsgaW4gTGF5ZXJDb25maWcpIHtcbiAgICB2YXIgbGF5ZXIgPSBMYXllckNvbmZpZ1trXTtcblxuICAgIC8vIFdlIGRvbid0IHdhbnQgdG8gc2hvdyBsYXllcnMgdGhhdCBhcmUgYmFzZW1hcHMsIGFuZCB3ZSBkb24ndCB3YW50IHRvIHNob3cgdGhlIGZpbmQgZnVuYy5cbiAgICBpZiAodHlwZW9mIGxheWVyID09PSAnZnVuY3Rpb24nXG4gICAgICB8fCBrID09PSAnYmFzZW1hcHMnXG4gICAgICB8fCBrID09PSAnYmJveCdcbiAgICAgIHx8IGsgPT09ICd0aGVtZUxheWVycydcbiAgICAgIHx8IGsgPT09ICdjb3VudHJ5ZXh0ZW50cydcbiAgICAgIHx8IGsgPT09ICdhcmNyZWdpb25leHRlbnRzJ1xuICAgICAgfHwgbGF5ZXIudHlwZSA9PT0gJ2Jhc2VtYXAnKSB7XG5cbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgICRzY29wZS5hbGxMYXllcnNba10gPSBrZXlUb09iaihrKTtcbiAgfVxuXG4gICRzY29wZS5sYXllcnNQYW5lbHMgPSB7XG4vLyAgICAnQm91bmRhcmllcyc6IHt9LFxuLy8gICAgJ0dlb0pTT04nOiB7fSxcbi8vICAgICdLTUwnOiB7fSxcbi8vICAgICdDU1YnOiB7fSxcbi8vICAgICdXTVMnOiB7fSxcbiAgICAnQ29udGV4dHVhbCBsYXllcnM6Jzoge31cbiAgfTtcblxuICBmdW5jdGlvbiBidWlsZExheWVyc01vZGVsKCkge1xuICAgICRzY29wZS5sYXllcnNQYW5lbHNbJ0NvbnRleHR1YWwgbGF5ZXJzOiddID0ge307XG4gICAgZm9yICh2YXIgbGF5ZXJLZXkgaW4gTGF5ZXJDb25maWcpIHtcbiAgICAgIHZhciBsYXllciA9IExheWVyQ29uZmlnW2xheWVyS2V5XTtcblxuICAgICAgLy8gV2UgZG9uJ3Qgd2FudCB0byBzaG93IGxheWVycyB0aGF0IGFyZSBiYXNlbWFwcywgYW5kIHdlIGRvbid0IHdhbnQgdG8gc2hvdyB0aGUgZmluZCBmdW5jLlxuICAgICAgaWYgKCAgdHlwZW9mIGxheWVyID09PSAnZnVuY3Rpb24nXG4gICAgICAgIHx8IGxheWVyS2V5ID09PSAnYmFzZW1hcHMnXG4gICAgICAgIHx8IGxheWVyS2V5ID09PSAnYmJveCdcbiAgICAgICAgfHwgbGF5ZXIudHlwZSA9PT0gJ2Jhc2VtYXAnICkge1xuXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoISRzY29wZS4kc3RhdGVQYXJhbXMudGhlbWUpIHtcbiAgICAgICAgdmFyIHRoZW1lID0gJ3Byb2plY3QnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHRoZW1lID0gJHNjb3BlLiRzdGF0ZVBhcmFtcy50aGVtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWxheWVyLnRoZW1lIHx8IChsYXllci50aGVtZS50b0xvd2VyQ2FzZSgpICE9PSAnYWxsJyAmJiBsYXllci50aGVtZS50b0xvd2VyQ2FzZSgpICE9PSB0aGVtZSkgKSB7XG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgICRzY29wZS5sYXllcnNQYW5lbHNbJ0NvbnRleHR1YWwgbGF5ZXJzOiddW2xheWVyS2V5XSA9IGtleVRvT2JqKGxheWVyS2V5KTtcblxuICAgIH1cbiAgfVxuICBidWlsZExheWVyc01vZGVsKCk7XG5cbiAgZGVidWcubGF5ZXJzUGFuZWxzID0gJHNjb3BlLmxheWVyc1BhbmVscztcblxuICBmdW5jdGlvbiBrZXlUb09iaihrZXkpIHtcbiAgICB2YXIgdmFsID0gTGF5ZXJDb25maWdba2V5XTtcbiAgICBpZiAodHlwZW9mIHZhbCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHVybDogdmFsXG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gdmFsO1xuICB9XG5cbiAgLy9OSCBUT0RPOiBOb3QgeWV0IGZ1bGx5IGltcGxlbWVudGVkIC0gcG9zc2libGUgZXh0cmEgZmVhdHVyZS4uLlxuICAvKipcbiAgICogTGF5ZXJzIHRoYXQgYXJlIGFjdGl2ZSBvbiB0aGUgbWFwIGJ1dCBhcmUgbm90IG1lbnRpb25lZCBpbiBMYXllckNvbmZpZ1xuICAgKiBAdHlwZSB7e319XG4gICAqL1xuICAkc2NvcGUubm9tYWRMYXllcnMgPSB7fTtcblxuXG4gIC8qKlxuICAgKiBXaGVuIHRoZSByb3V0ZSBjaGFuZ2VzLCB3ZSBzaG91bGQgc2VlIHdoYXQgbGF5ZXJzIHdlIGhhdmUgb24gdGhlcmUgYW5kIGhhdmUgdGhlIGxheWVyc1xuICAgKiBpbiB0aGUgcGFuZWxzIGNoZWNrZWQgYWNjb3JkaW5nbHkuXG4gICAqL1xuICAkc2NvcGUuJG9uKCdsYXllcnMtdXBkYXRlJywgZnVuY3Rpb24oZXZ0LCBsYXllcnMpIHtcblxuICAgIGJ1aWxkTGF5ZXJzTW9kZWwoKTtcblxuICAgIC8vIGdpdGh1YiBnaXN0c1xuICAgICRzY29wZS5saXN0R2lzdHMoKTtcblxuICAgIC8vIHJlc2V0IHRoZSBub21hZCBsYXllcnNcbiAgICBmb3IgKHZhciBuayBpbiAkc2NvcGUubm9tYWRMYXllcnMpIHtcbiAgICAgICRzY29wZS5ub21hZExheWVyc1tua10uYWN0aXZlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gcmVzZXQgdGhlIGxheWVyIGNvbmZpZyBsYXllcnNcbiAgICBmb3IgKHZhciBsY2sgaW4gTGF5ZXJDb25maWcpIHtcbiAgICAgIGlmICh0eXBlb2YgTGF5ZXJDb25maWdbbGNrXSA9PT0gJ29iamVjdCcgJiYgTGF5ZXJDb25maWdbbGNrXSAhPT0gbnVsbCkge1xuICAgICAgICBMYXllckNvbmZpZ1tsY2tdLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIHRoZSBsYXllciBpcyBhY3RpdmUgaW4gbWFwIGxheWVyc1xuICAgICAqIEZvcmNlIGdhZG0wIG9uIGRpc2FzdGVyIHRoZW1lc1xuICAgICAqL1xuXG4gICAgdmFyIHRoZW1lID0gJHN0YXRlUGFyYW1zLnRoZW1lO1xuXG5cbiAgICAvL2ZvcmNlIGdhZG0wIG9uIGRpc2FzdGVyIHRoZW1lcyB3aGVuIHVzZXIgY2hhbmdlcyBnYWRtIGxldmVsXG4gICAgaWYodGhlbWUuaW5kZXhPZignZGlzYXN0ZXInKSE9PS0xICYmICRzdGF0ZVBhcmFtcy5sYXllcnMuc3BsaXQoXCIsXCIpWzFdICE9PSAnZ2FkbTAnKXtcblxuICAgICAgdmFyIGxheWVyc0FycmF5ID0gW107XG5cbiAgICAgIGlmKCRzdGF0ZVBhcmFtcy5sYXllcnMpe1xuICAgICAgICBsYXllcnNBcnJheSA9ICRzdGF0ZVBhcmFtcy5sYXllcnMuc3BsaXQoXCIsXCIpO1xuICAgICAgfVxuXG4gICAgICAvL1JlbW92ZSBhbGwgR0FETSBsYXllcnMuXG4gICAgICBsYXllcnNBcnJheS5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XG4gICAgICAgIGlmIChMYXllckNvbmZpZy50aGVtZUxheWVycy5pbmRleE9mKHZhbHVlKSA+IC0xKSB7XG4gICAgICAgICAgbGF5ZXJzQXJyYXkuc3BsaWNlKGxheWVyc0FycmF5LmluZGV4T2YodmFsdWUpLCAxKTsgLy9yZW1vdmUgYW55IEdBRE1zXG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICAvL0FkZCBpbiB0aGUgZ2FkbSBsYXllciB0byB0aGUgbGF5ZXJzIGxpc3QgaW4gdGhlIHN0YXRlcGFyYW1zLlxuICAgICAgbGF5ZXJzQXJyYXkucHVzaChcImdhZG0wXCIpO1xuICAgICAgJHN0YXRlUGFyYW1zLmxheWVycyA9IGxheWVyc0FycmF5LmpvaW4oXCIsXCIpO1xuICAgIH1cblxuXG4gICAgJHNjb3BlLm1hcExheWVycyA9ICRzdGF0ZVBhcmFtcy5sYXllcnMuc3BsaXQoXCIsXCIpO1xuXG4gICAgLy8gc2tpcCB0aGUgZmlyc3QgbGF5ZXIsIHRoZSBiYXNlbWFwXG4gICAgZm9yICh2YXIgaSA9IDEsIGxlbiA9IGxheWVycy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgdmFyIGwgPSBsYXllcnNbaV07XG4gICAgICAvLyBsYXllciBpcyBpbiB0aGUgbGF5ZXIgY29uZmlnXG4gICAgICBpZiAodHlwZW9mIExheWVyQ29uZmlnW2xdID09PSAnb2JqZWN0JyAmJiBMYXllckNvbmZpZ1tsXSAhPT0gbnVsbCkge1xuICAgICAgICBMYXllckNvbmZpZ1tsXS5hY3RpdmUgPSB0cnVlO1xuICAgICAgfVxuICAgICAgLy8gbGF5ZXIgaXMgYSBnaXRodWIgZ2lzdFxuICAgICAgZWxzZSBpZiAoJHNjb3BlLmdpc3RzICYmICRzY29wZS5naXN0c1tsXSkge1xuICAgICAgICAkc2NvcGUuZ2lzdHNbbF0uYWN0aXZlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIC8vIGxheWVyIGlzIGEgbm90IGluIHRoZSBsYXllciBjb25maWcuIGl0J3Mgbm9tYWRpYy5cbiAgICAgIGVsc2Uge1xuICAgICAgICAkc2NvcGUubm9tYWRMYXllcnNbbF0gPSB7XG4gICAgICAgICAgbmFtZTogbCxcbiAgICAgICAgICB1cmw6IGwsXG4gICAgICAgICAgYWN0aXZlOiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgfSk7XG5cbiAgJHNjb3BlLiRvbigncm91dGUtdXBkYXRlJywgZnVuY3Rpb24oKSB7XG4gICAgLy9DaGVjayB0aGUgc3RhdGVQYXJhbXNcbiAgICAvL1NwZWNpZmljYWxseSwgc2VlIGFib3V0IHRoZSBsYWJlbCBwcm9wZXJ0aWVzIGJlaW5nIGNoZWNrZWQuXG5cbiAgICB2YXIgY2hlY2tlZDtcblxuICAgIC8vU2VlIGlmIHdlIHNob3VsZCBzaG93IHRoZW1lIGJhZGdlcy9idWJibGVzIG9yIG5vdFxuICAgIGlmKCRzdGF0ZVBhcmFtcy50aGVtZWxhYmVscyAhPT0gbnVsbCAmJiAkc3RhdGVQYXJhbXMudGhlbWVsYWJlbHMgIT09IHVuZGVmaW5lZCl7XG4gICAgICBjaGVja2VkID0gJHN0YXRlUGFyYW1zLnRoZW1lbGFiZWxzO1xuICAgIH1cbiAgICBlbHNle1xuICAgICAgLy9pZiBub3QgcHJlc2VudCwgZGVmYXVsdCB0byB0cnVlXG4gICAgICBjaGVja2VkID0gJ3RydWUnO1xuICAgIH1cblxuICAgICRzY29wZS50aGVtZUxhYmVscyA9IHsgaXNDaGVja2VkOiAoY2hlY2tlZCA9PSAndHJ1ZScgPyB0cnVlIDogZmFsc2UpIH07XG5cbiAgICAvL1NlZSB3aGljaCwgaWYgYW55LCBnYWRtIGxldmVscyBpcyBhY3RpdmVcbiAgICBpZigkcm9vdFNjb3BlLmxldmVsKXtcbiAgICAgICRzY29wZS5nYWRtTGV2ZWwgPSAkcm9vdFNjb3BlLmxldmVsO1xuICAgIH1cblxuICB9KTtcblxuXG4gICRzY29wZS50b2dnbGVNYXBMYXllciA9IGZ1bmN0aW9uIChsYXllcktleSwgbGF5ZXIpIHtcblxuICAgIC8vIGFkZCBsYXllclxuICAgIGlmIChsYXllci5hY3RpdmUgPT09IHRydWUpIHtcbiAgICAgICRzY29wZS5tYXBMYXllcnMucHVzaChsYXllcktleSk7XG5cbiAgICAvLyByZW1vdmUgbGF5ZXJcbiAgICB9IGVsc2Uge1xuICAgICAgJHNjb3BlLm1hcExheWVycyA9ICQuZ3JlcCgkc2NvcGUubWFwTGF5ZXJzLCBmdW5jdGlvbihyb3V0ZUxheWVyKXtcbiAgICAgICAgcmV0dXJuIHJvdXRlTGF5ZXIgIT09IGxheWVyS2V5O1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgJHN0YXRlUGFyYW1zLmxheWVycyA9ICRzY29wZS5tYXBMYXllcnMuam9pbignLCcpO1xuICAgIHZhciBzdGF0ZSA9ICRzdGF0ZS5jdXJyZW50Lm5hbWUgfHwgJ21haW4nO1xuICAgICRzdGF0ZS5nbyhzdGF0ZSwgJHN0YXRlUGFyYW1zKTtcblxuICB9O1xuXG5cbiAgJHNjb3BlLmxpc3RHaXN0cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAkc2NvcGUuZ2lzdHMgPSBnaXN0cy5mZXRjaCgpO1xuICAgIGlmICgkc2NvcGUuZ2lzdHMpIHtcbiAgICAgICRzY29wZS5udW1HaXN0cyA9IE9iamVjdC5rZXlzKCRzY29wZS5naXN0cykubGVuZ3RoO1xuICAgIH0gZWxzZSB7XG4gICAgICAkc2NvcGUubnVtR2lzdHMgPSAwO1xuICAgIH1cbiAgfTtcbiAgJHNjb3BlLmxpc3RHaXN0cygpO1xuICBkZWJ1Zy5naXN0c0xheWVyc1BhbmVsID0gJHNjb3BlLmdpc3RzO1xuXG4gICRzY29wZS5zZWFyY2hMYXllcnMgPSAkc2NvcGUuYWxsTGF5ZXJzO1xuXG4gICRzY29wZS5zZWFyY2ggPSBmdW5jdGlvbihzZWFyY2hUZXh0KSB7XG4gICAgdmFyIGxheWVycyA9ICRzY29wZS5hbGxMYXllcnM7XG4gICAgaWYgKHR5cGVvZiBzZWFyY2hUZXh0ID09PSAnc3RyaW5nJykge1xuICAgICAgc2VhcmNoVGV4dCA9IHNlYXJjaFRleHQudG9Mb3dlckNhc2UoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgJHNjb3BlLnNlYXJjaExheWVycyA9IGxheWVycztcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHNlYXJjaExheWVycyA9IHt9O1xuICAgIGZvciAodmFyIGsgaW4gbGF5ZXJzKSB7XG4gICAgICB2YXIgbCA9IGxheWVyc1trXTtcbiAgICAgIGZvciAodmFyIGsyIGluIGwpIHtcbiAgICAgICAgdmFyIHZhbCA9IGxbazJdLnRvU3RyaW5nKCk7XG4gICAgICAgIGlmICh2YWwudG9Mb3dlckNhc2UoKS5pbmRleE9mKHNlYXJjaFRleHQpID4gLTEpIHtcbiAgICAgICAgICBzZWFyY2hMYXllcnNba10gPSBsO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB2YXIgcHJvcHMgPSBsLnByb3BlcnRpZXM7XG4gICAgICBpZiAocHJvcHMpIHtcbiAgICAgICAgZm9yICh2YXIgazMgaW4gcHJvcHMpIHtcbiAgICAgICAgICB2YXIgdmFsID0gcHJvcHNbazNdLnRvU3RyaW5nKCk7XG4gICAgICAgICAgaWYgKHZhbC50b0xvd2VyQ2FzZSgpLmluZGV4T2Yoc2VhcmNoVGV4dCkgPiAtMSkge1xuICAgICAgICAgICAgc2VhcmNoTGF5ZXJzW2tdID0gbDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAkc2NvcGUuc2VhcmNoTGF5ZXJzID0gc2VhcmNoTGF5ZXJzO1xuICB9O1xuXG4gIC8qXG4gICBIYW5kbGluZyBUaGVtZSBNZW51IEFuaW1hdGlvbnNcbiAgICovXG5cbiAgJHNjb3BlLnRvZ2dsZUJMZXZlbE1lbnUgPSBmdW5jdGlvbigpe1xuICAgIHZhciBmbGlwcGVkT3V0ID0gJChcIi5tZW51LXNlbGVjdGlvbiAuZHJvcGRvd25cIikuaGFzQ2xhc3MoXCJvcGVuXCIpO1xuXG4gICAgaWYoZmxpcHBlZE91dCA9PSBmYWxzZSl7XG4gICAgICAkc2NvcGUudW5mdXJsVGhlbWVzKCk7XG4gICAgfVxuICAgIGVsc2V7XG4gICAgICAkc2NvcGUucmVmdXJsVGhlbWVzKCk7XG4gICAgfVxuICB9O1xuXG4gICRzY29wZS51bmZ1cmxUaGVtZXMgPSBmdW5jdGlvbigpe1xuICAgICRzY29wZS5yZWZ1cmxUaGVtZXMoKTtcbiAgICAvL1RyeSBqUXVlcnkgdG8gYWRkIGFuICdvbicgY2xhc3MgdG8gZWFjaCBvZiB0aGUgdGhlbWUgTEkgZWxlbWVudHMgb24gYSB0aW1lci5cbiAgICAkKCQoJyNCTGV2ZWxNZW51IGxpJykuZ2V0KCkucmV2ZXJzZSgpKS5lYWNoKGZ1bmN0aW9uKGluZGV4KXtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHNlbGYpLmFkZENsYXNzKFwidGhlbWUtc2VsZWN0b3ItbGktb25cIik7XG4gICAgICB9LCBpbmRleCoxMDApO1xuICAgIH0pO1xuICB9O1xuXG4gIC8vUmVmdXJsP1xuICAkc2NvcGUucmVmdXJsVGhlbWVzID0gZnVuY3Rpb24oKXtcbiAgICAvL1RyeSBqUXVlcnkgdG8gcmVtb3ZlIHRoZSAnb24nIGNsYXNzIHRvIGVhY2ggb2YgdGhlIHRoZW1lIExJIGVsZW1lbnRzIG9uIGEgdGltZXIuXG4gICAgJCgnI0JMZXZlbFNlbGVjdG9yTWVudSAuZHJvcGRvd24tbWVudSBsaScpLnJlbW92ZUNsYXNzKFwidGhlbWUtc2VsZWN0b3ItbGktb25cIik7XG4gIH07XG5cbiAgLypcbiAgIEVuZCBUaGVtZSBNZW51IEFuaW1hdGlvbnNcbiAgICovXG5cbn0pO1xuXG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgTmljaG9sYXMgSGFsbGFoYW4gPG5oYWxsYWhhbkBzcGF0aWFsZGV2LmNvbT5cbiAqICAgICAgIG9uIDMvMjcvMTQuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnR2VvQW5ndWxhcicpLmNvbnRyb2xsZXIoJ0xlZ2VuZEN0cmwnLCBmdW5jdGlvbigkc2NvcGUsIExheWVyQ29uZmlnLCAkc3RhdGVQYXJhbXMpIHtcblxuICAkc2NvcGUuZm9sZCA9IGZhbHNlO1xuXG4gIC8vdGhlbWVMb29rdXAgaXMgdXNlZCB0byBkaXNwbGF5IHRoZSBsYWJlbCBpbiB0aGUgbWFwIGxlZ2VuZCBpbiB0aGUgYm90dG9tIGxlZnQuXG4gIC8vU28gdGhlIGxhYmVsIHdpbGwgZGV2aWF0ZSBmcm9tIHRoZSBhY3R1YWwgbmFtZSBvZiB0aGUgdGhlbWUuICBGb3IgcHJvamVjdCByaXNrLCBmb3IgZXhhbXBsZSwgd2Ugd2FudCB0aGUgbGFiZWwgdG8gc2F5IENpcmNsZSA9ICMgb2YgcHJvamVjdHMsIG5vdCAjIG9mIHByb2plY3Qgcmlzay5cbiAgdmFyIHRoZW1lTG9va3VwID0ge1xuICAgIGRpc2FzdGVyOiB7IG5hbWU6ICdEaXNhc3RlcnMnLCBsYWJlbDogJyMgb2YgRGlzYXN0ZXJzJ30sXG4gICAgcHJvamVjdDogeyBuYW1lOiAnUHJvamVjdHMnLCBsYWJlbDogJyMgb2YgUHJvamVjdHMnfSxcbiAgICBwcm9qZWN0SGVhbHRoOiB7IG5hbWU6ICdQcm9qZWN0IEhlYWx0aCcsIGxhYmVsOiAnIyBvZiBQcm9qZWN0cyd9LFxuICAgIHByb2plY3RSaXNrOiB7IG5hbWU6ICdQcm9qZWN0IFJpc2snLCBsYWJlbDogJyMgb2YgUHJvamVjdHMnfSxcbiAgICBkaXNhc3RlclR5cGU6IHsgbmFtZTogJ0Rpc2FzdGVyIFR5cGUnLCBsYWJlbDogJyMgb2YgRGlzYXN0ZXJzJ31cbiAgfTtcblxuICAkc2NvcGUuJG9uKCdsYXllcnMtdXBkYXRlJywgZnVuY3Rpb24gKGV2dCwgbGF5ZXJzKSB7XG4gICAgJHNjb3BlLmxheWVycyA9IFtdO1xuICAgIGZvciAodmFyIGkgPSBsYXllcnMubGVuZ3RoIC0gMTsgaSA+PSAxOyBpLS0pe1xuICAgICAgdmFyIGwgPSBsYXllcnNbaV07XG4gICAgICB2YXIgbGF5ZXIgPSB7fTtcbiAgICAgIHZhciBsY2ZnID0gTGF5ZXJDb25maWcuZmluZChsKTtcblxuICAgICAgaWYoIWxjZmcpe1xuICAgICAgICAvL2V4aXQgaWYgbGF5ZXIgbmFtZSBpcyBub3QgaW4gY29uZmlnLlxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGxheWVyLmFsaWFzID0gbDtcbiAgICAgIGxheWVyLm5hbWUgPSBsY2ZnLm5hbWU7XG4gICAgICBpZihsID09PSAnZ2FkbTAnIHx8IGwgPT09ICd0aGVtZScpe1xuICAgICAgICAgIGxheWVyLm5hbWUgPSAkc3RhdGVQYXJhbXMudGhlbWUgfHwgJ1Byb2plY3QnO1xuICAgICAgfVxuICAgICAgaWYgKCFuYW1lICYmIGxjZmcucHJvcGVydGllcyAmJiBsY2ZnLnByb3BlcnRpZXMudGl0bGUpIHtcbiAgICAgICAgbGF5ZXIubmFtZSA9IGxjZmcucHJvcGVydGllcy50aXRsZTtcbiAgICAgIH0gZWxzZSBpZiAoIWxheWVyLm5hbWUpIHtcbiAgICAgICAgbGF5ZXIubmFtZSA9IGw7XG4gICAgICB9XG5cbiAgICAgIGlmKGxjZmcucHJvcGVydGllcyl7XG4gICAgICAgICAgaWYobGNmZy5wcm9wZXJ0aWVzLmxlZ2VuZCl7XG4gICAgICAgICAgICAgIGlmKHR5cGVvZiBsY2ZnLnByb3BlcnRpZXMubGVnZW5kID09PSAnZnVuY3Rpb24nKXtcbiAgICAgICAgICAgICAgICAgICAgLy9CdWlsZCB0aGUgbGVnZW5kIGVsZW1lbnRcbiAgICAgICAgICAgICAgICAgICAgbGF5ZXIuYWN0aXZlTGVnZW5kID0gbGNmZy5wcm9wZXJ0aWVzLmxlZ2VuZCgkc3RhdGVQYXJhbXMudGhlbWUgfHwgJ3Byb2plY3QnKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgICAgLy9JZiBsZWdlbmQgaXMgYSBzdHJpbmcsIHVzZSBpdCBkaXJlY3RseVxuICAgICAgICAgICAgICAgICAgbGF5ZXIuYWN0aXZlTGVnZW5kID0gbGNmZy5wcm9wZXJ0aWVzLmxlZ2VuZDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAvL05vIGxlZ2VuZCBkZWZpbmVkLiAgVXNlIGEgZGVmYXVsdC5cblxuICAgICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgJHNjb3BlLmxheWVycy5wdXNoKGxheWVyKTtcbiAgICB9XG4gIH0pO1xuXG4gICRzY29wZS4kb24oJ2xlZ2VuZC13aWR0aCcsIGZ1bmN0aW9uIChldnQsbHcpe1xuICAgICRzY29wZS53aWR0aCA9IGx3LndpZHRoO1xuICAgICRzY29wZS5mb2xkID0gbHcuZm9sZDtcbiAgICBpZihsdy53aWR0aD49NDM1IHx8IGx3LmZvbGQgPT0gdHJ1ZSl7XG4gICAgICAkc2NvcGUuZm9sZCA9IHRydWU7XG4gICAgfVxuICB9KTtcblxuICAkc2NvcGUuJG9uKCd0aGVtZS11cGRhdGUnLCBmdW5jdGlvbigpe1xuICAgICRzY29wZS50aGVtZUxhYmVsID0gJyc7XG4gICAgaWYoJHN0YXRlUGFyYW1zLnRoZW1lICE9PSBudWxsICYmICRzdGF0ZVBhcmFtcy50aGVtZSAhPT0gXCJcIikge1xuICAgICAgJHNjb3BlLnRoZW1lTGFiZWwgPSB0aGVtZUxvb2t1cFskc3RhdGVQYXJhbXMudGhlbWVdLmxhYmVsO1xuICAgIH1cbiAgfSk7XG5cbiAgLypcbiAgIFNldCB0aGUgZGljdGlvbmFyeSB1c2VkIHRvIGxvb2sgdXAgVU5PQ0hBIGljb25zIGZvciBkaXNhc3RlciB0eXBlc1xuICAgKi9cbiAgdmFyIG9wYWNpdHkgPSBcIjAuNVwiXG4gICRzY29wZS5VTk9DSEFJY29uTG9va3VwID0ge1xuXG4gICAgXCJNZXRlb3JvbG9naWNhbCAtIFRyb3BpY2FsIEN5Y2xvbmVcIjoge2ljb246IFwiaWNvbi1kaXNhc3Rlcl9jeWNsb25lXCIsIGNvbG9yOiBcInJnYmEoMjU1LDAsMCxcIiArIG9wYWNpdHkgKyBcIilcIn0sXG4gICAgXCJGbG9vZHNcIjoge2ljb246IFwiaWNvbi1kaXNhc3Rlcl9mbG9vZFwiLCBjb2xvcjogXCJyZ2JhKDI1NSwwLDAsXCIgKyBvcGFjaXR5ICsgXCIpXCJ9LFxuICAgIFwiVHN1bmFtaSwgVm9sY2Fub1wiOiB7aWNvbjogXCJpY29uLWRpc2FzdGVyX3RzdW5hbWlcIiwgY29sb3I6IFwicmdiYSgyNTUsMCwwLFwiICsgb3BhY2l0eSArIFwiKVwifSxcbiAgICBcIkZsb29kcywgU3Rvcm1cIjoge2ljb246IFwiaWNvbi1kaXNhc3Rlcl9mbG9vZFwiLCBjb2xvcjogXCJyZ2JhKDI1NSwwLDAsXCIgKyBvcGFjaXR5ICsgXCIpXCJ9LFxuICAgIFwiVHN1bmFtaVwiOiB7aWNvbjogXCJpY29uLWRpc2FzdGVyX3RzdW5hbWlcIiwgY29sb3I6IFwicmdiYSgyNTUsMCwwLFwiICsgb3BhY2l0eSArIFwiKVwifSxcbiAgICBcIkZhbWluZSAvIEZvb2QgSW5zZWN1cml0eVwiOiB7aWNvbjogXCJpY29uLWNsdXN0ZXJfZm9vZF9zZWN1cml0eVwiLCBjb2xvcjogXCJyZ2JhKDI1NSwwLDAsXCIgKyBvcGFjaXR5ICsgXCIpXCJ9LFxuICAgIFwiRHJvdWdodFwiOiB7aWNvbjogXCJpY29uLWRpc2FzdGVyX2Ryb3VnaHRcIiwgY29sb3I6IFwicmdiYSgyNTUsMCwwLFwiICsgb3BhY2l0eSArIFwiKVwifSxcbiAgICBcIk1ldGVvcm9sb2dpY2FsIC0gVHJvcGljYWwgQ3ljbG9uZTtIeWRyb2xvZ2ljYWwgLSBGbG9vZHNcIjoge2ljb246IFwiaWNvbi1kaXNhc3Rlcl9jeWNsb25lXCIsIGNvbG9yOiBcInJnYmEoMjU1LDAsMCxcIiArIG9wYWNpdHkgKyBcIilcIn0sXG4gICAgXCJGb29kIEluc2VjdXJpdHlcIjoge2ljb246IFwiaWNvbi1jbHVzdGVyX2Zvb2Rfc2VjdXJpdHlcIiwgY29sb3I6IFwicmdiYSgyNTUsMCwwLFwiICsgb3BhY2l0eSArIFwiKVwifSxcbiAgICBcIkNpdmlsIFVucmVzdFwiOiB7aWNvbjogXCJpY29uLXBlb3BsZV9yZWJlbFwiLCBjb2xvcjogXCJyZ2JhKDI1NSwwLDAsXCIgKyBvcGFjaXR5ICsgXCIpXCJ9LFxuICAgIFwiRmxvb2RzLCBUcm9waWNhbCBTdG9ybVwiOiB7aWNvbjogXCJpY29uLWRpc2FzdGVyX2Zsb29kXCIsIGNvbG9yOiBcInJnYmEoMjU1LDAsMCxcIiArIG9wYWNpdHkgKyBcIilcIn0sXG4gICAgXCJDb21wbGV4IEVtZXJnZW5jeVwiOiB7aWNvbjogXCJpY29uLWNyaXNpc19jb25mbGljdFwiLCBjb2xvcjogXCJyZ2JhKDI1NSwwLDAsXCIgKyBvcGFjaXR5ICsgXCIpXCJ9LFxuICAgIFwiRXBpZGVtaWNcIjoge2ljb246IFwiaWNvbi1kaXNhc3Rlcl9lcGlkZW1pY1wiLCBjb2xvcjogXCJyZ2JhKDI1NSwwLDAsXCIgKyBvcGFjaXR5ICsgXCIpXCJ9LFxuICAgIFwiUG9wdWxhdGlvbiBNb3ZlbWVudFwiOiB7aWNvbjogXCJpY29uLWNyaXNpc19wb3B1bGF0aW9uX2Rpc3BsYWNlbWVudFwiLCBjb2xvcjogXCJyZ2JhKDI1NSwwLDAsXCIgKyBvcGFjaXR5ICsgXCIpXCJ9LFxuICAgIFwiQ2xpbWF0b2xvZ2ljYWwgLSBEcm91Z2h0XCI6IHtpY29uOiBcImljb24tZGlzYXN0ZXJfZHJvdWdodFwiLCBjb2xvcjogXCJyZ2JhKDI1NSwwLDAsXCIgKyBvcGFjaXR5ICsgXCIpXCJ9LFxuICAgIFwiV2ludGVyIFN0b3JtXCI6IHtpY29uOiBcImljb24tZGlzYXN0ZXJfc25vd2ZhbGxcIiwgY29sb3I6IFwicmdiYSgyNTUsMCwwLFwiICsgb3BhY2l0eSArIFwiKVwifSxcbiAgICBcIlRyb3BpY2FsIFN0b3JtXCI6IHtpY29uOiBcImljb24tZGlzYXN0ZXJfaGVhdnlfcmFpblwiLCBjb2xvcjogXCJyZ2JhKDI1NSwwLDAsXCIgKyBvcGFjaXR5ICsgXCIpXCJ9LFxuICAgIFwiRWFydGhxdWFrZSwgVHN1bmFtaVwiOiB7aWNvbjogXCJpY29uLWRpc2FzdGVyX2VhcnRocXVha2VcIiwgY29sb3I6IFwicmdiYSgyNTUsMCwwLFwiICsgb3BhY2l0eSArIFwiKVwifSxcbiAgICBcIkh5ZHJvbG9naWNhbCAtIEZsb29kc1wiOiB7aWNvbjogXCJpY29uLWRpc2FzdGVyX2Zsb29kXCIsIGNvbG9yOiBcInJnYmEoMjU1LDAsMCxcIiArIG9wYWNpdHkgKyBcIilcIn0sXG4gICAgXCJMYW5kc2xpZGU7Rmxvb2RzXCI6IHtpY29uOiBcImljb24tZGlzYXN0ZXJfbGFuZHNsaWRlXCIsIGNvbG9yOiBcInJnYmEoMjU1LDAsMCxcIiArIG9wYWNpdHkgKyBcIilcIn0sXG4gICAgXCJFYXJ0aHF1YWtlXCI6IHtpY29uOiBcImljb24tZGlzYXN0ZXJfZWFydGhxdWFrZVwiLCBjb2xvcjogXCJyZ2JhKDI1NSwwLDAsXCIgKyBvcGFjaXR5ICsgXCIpXCJ9LFxuICAgIFwiTGFuZHNsaWRlO0h5ZHJvbG9naWNhbCAtIEZsb29kc1wiOiB7aWNvbjogXCJpY29uLWRpc2FzdGVyX2xhbmRzbGlkZVwiLCBjb2xvcjogXCJyZ2JhKDI1NSwwLDAsXCIgKyBvcGFjaXR5ICsgXCIpXCJ9XG5cbiAgfVxuXG59KTtcbiIsIm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ0dlb0FuZ3VsYXInKS5jb250cm9sbGVyKCdNYWluQ3RybCcsIGZ1bmN0aW9uKCRzY29wZSwgJHJvb3RTY29wZSwgJHN0YXRlLCAkc3RhdGVQYXJhbXMsICRsb2NhdGlvbikge1xuICBkZWJ1Zy4kbG9jYXRpb24gPSAkbG9jYXRpb247XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdtYXBmb2xpb1JvdXRlJywgJGxvY2F0aW9uLnBhdGgoKSk7XG5cbiAgLy8gTkggVE9ETzogU2VlIGlmIHRoaXMgaXMgYWxzbyB0aGUgY2FzZSB3aXRoIHVpLXJvdXRlcj9cbiAgLy8gd2VpcmQgYnVnIHdoZXJlIHJlZGlyZWN0IHBlZWxzIG91dCAnOi8ve3MnIHdoZW4gJzonIGlzIHRoZXJlXG4gIC8vICRyb3V0ZVBhcmFtcy5sYXllcnMgV2UganVzdCBkb250IGhhdmUgdGhlIDogaW4gbWFpbi5qcyBzbyB0aGF0XG4gIC8vIHBhcnQgb2YgdGhlIHBhdGggZG9lcyBub3QgZ28gYXdheS4uLlxuICB2YXIgbGF5ZXJzU3RyID0gJHN0YXRlUGFyYW1zLmxheWVycyA9ICRzdGF0ZVBhcmFtcy5sYXllcnMucmVwbGFjZSgnaHR0cC8vJywgJ2h0dHA6Ly8nKTtcbiAgdmFyIHRoZW1lU3RyID0gJHN0YXRlUGFyYW1zLnRoZW1lO1xuICB2YXIgZmlsdGVyc1N0ciA9ICRzdGF0ZVBhcmFtcy5maWx0ZXJzO1xuICB2YXIgY2F0ZWdvcnlTdHIgPSAkc3RhdGVQYXJhbXMuY2F0ZWdvcnk7IC8vIGxheWVyIGNhdGVnb3J5IG9wZW5cbiAgdmFyIHRoZW1lTGFiZWxTdHIgPSAkc3RhdGVQYXJhbXMudGhlbWVsYWJlbHM7IC8vIHRoZW1lbGFiZWxzIChidWJibGVzKVxuICB2YXIgZnVsbHNjcmVlbiA9ICRzdGF0ZVBhcmFtcy5mdWxsc2NyZWVuOyAvL3doZXRoZXIgb3Igbm90IHRoZSBhcHAgaXMgaW4gZnVsbHNjcmVlbiBtb2RlXG5cbiAgdmFyIGxldmVsU3RyID0gJHN0YXRlUGFyYW1zLmxldmVsO1xuICB2YXIgem9vbVN0ciA9ICRzdGF0ZVBhcmFtcy56b29tO1xuICAkcm9vdFNjb3BlLiRicm9hZGNhc3QoJ3JvdXRlLXVwZGF0ZScpO1xuXG4gIC8qKlxuICAgKiBPbmx5IGlmIHRoZSBsYXRlc3Qgcm91dGUgaGFzIGEgZGlmZmVyZW50IGxheWVyIHN0cmluZyB0aGFuIGJlZm9yZS5cbiAgICovXG4gIGlmIChsYXllcnNTdHIgIT09IHdpbmRvdy5wcmV2TGF5ZXJzU3RyKSB7XG4gICAgd2luZG93LnByZXZMYXllcnNTdHIgPSBsYXllcnNTdHI7XG4gICAgdmFyIGxheWVycyA9IGxheWVyc1N0ci5zcGxpdCgnLCcpO1xuICAgICRyb290U2NvcGUuJGJyb2FkY2FzdCgnbGF5ZXJzLXVwZGF0ZScsIGxheWVycyk7XG4gIH1cblxuICBpZiAobGV2ZWxTdHIgIT09IG51bGwgJiYgbGV2ZWxTdHIgIT09IHdpbmRvdy5wcmV2TGV2ZWxTdHIpIHtcbiAgICB3aW5kb3cucHJldkxldmVsU3RyID0gbGV2ZWxTdHI7XG4gICAgJHJvb3RTY29wZS4kYnJvYWRjYXN0KCdsZXZlbC11cGRhdGUnLCBsZXZlbFN0cik7XG4gIH1cblxuICBpZiAoem9vbVN0ciAhPT0gd2luZG93LnByZXZab29tU3RyKSB7XG4gICAgd2luZG93LnByZXZab29tU3RyID0gem9vbVN0cjtcbiAgICAkcm9vdFNjb3BlLiRicm9hZGNhc3QoJ3pvb20tdXBkYXRlJywgem9vbVN0cik7XG4gIH1cblxuICBpZiAodGhlbWVTdHIgIT09IHdpbmRvdy5wcmV2dGhlbWVTdHIpIHtcbiAgICB3aW5kb3cucHJldnRoZW1lU3RyID0gdGhlbWVTdHI7XG4gICAgJHJvb3RTY29wZS4kYnJvYWRjYXN0KCd0aGVtZS11cGRhdGUnLCB0aGVtZVN0cik7XG4gIH1cblxuICBpZiAoZmlsdGVyc1N0ciAhPT0gd2luZG93LnByZXZmaWx0ZXJzU3RyKSB7XG4gICAgd2luZG93LnByZXZmaWx0ZXJzU3RyID0gZmlsdGVyc1N0cjtcbiAgICAkcm9vdFNjb3BlLiRicm9hZGNhc3QoJ2ZpbHRlcnMtdXBkYXRlJywgZmlsdGVyc1N0cik7XG4gIH1cblxuICAvLyBpZiB0aGUgb3BlbiBjYXRlZ29yeSBoYXMgY2hhbmdlZCBicm9hZGNhc3QgY2F0ZWdvcnkgaGFzIGNoYW5nZWRcbiAgaWYgKGNhdGVnb3J5U3RyICE9PSB3aW5kb3cucHJldkNhdGVnb3J5U3RyKSB7XG4gICAgd2luZG93LnByZXZDYXRlZ29yeVN0ciA9IGNhdGVnb3J5U3RyO1xuICAgICRyb290U2NvcGUuJGJyb2FkY2FzdCgnY2F0ZWdvcnktdXBkYXRlJywgY2F0ZWdvcnlTdHIpO1xuICB9XG5cbiAgLy8gaWYgdGhlIHRoZW1lbGFiZWxzIGhhcyBjaGFuZ2VkIGJyb2FkY2FzdCB0aGVtZWxhYmVscyBoYXMgY2hhbmdlZFxuICBpZih3aW5kb3cudGhlbWVMYWJlbFN0ciAhPSB0aGVtZUxhYmVsU3RyKSB7XG4gICAgd2luZG93LnRoZW1lTGFiZWxTdHIgPSB0aGVtZUxhYmVsU3RyO1xuICAgICRyb290U2NvcGUuJGJyb2FkY2FzdCgndGhlbWVsYWJlbHMtdXBkYXRlJywgdGhlbWVMYWJlbFN0cik7XG4gIH1cblxuICAvLyBpZiB0aGUgZnVsbHNjcmVlbiBhdHRyaWJ1dGUgaGFzIGNoYW5nZWQgYnJvYWRjYXN0IGZ1bGxzY3JlZW4gaGFzIGNoYW5nZWRcbiAgaWYod2luZG93LmZ1bGxzY3JlZW4gIT0gZnVsbHNjcmVlbikge1xuICAgIHdpbmRvdy5mdWxsc2NyZWVuID0gZnVsbHNjcmVlbjtcbiAgICAkcm9vdFNjb3BlLiRicm9hZGNhc3QoJ2Z1bGxzY3JlZW4tY2hhbmdlZCcsIGZ1bGxzY3JlZW4pO1xuICB9XG5cbn0pO1xuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IE5pY2hvbGFzIEhhbGxhaGFuIDxuaGFsbGFoYW5Ac3BhdGlhbGRldi5jb20+XG4gKiAgICAgb24gTW9uIE1hciAxNyAyMDE0XG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnR2VvQW5ndWxhcicpLmNvbnRyb2xsZXIoJ01hcEN0cmwnLCBmdW5jdGlvbiAoJHNjb3BlLCAkcm9vdFNjb3BlLCAkc3RhdGUsICRzdGF0ZVBhcmFtcywgTGF5ZXJDb25maWcsIFZlY3RvclByb3ZpZGVyLCAkaHR0cCwgJHNjZSkge1xuICB2YXIgbWFwID0gTC5tYXAoJ21hcCcsIHt3b3JsZENvcHlKdW1wOiB0cnVlfSk7XG4gIHZhciBmaXJzdExvYWQgPSB0cnVlO1xuXG4gICRzY29wZS5wYXJhbXMgPSAkc3RhdGVQYXJhbXM7XG4gICRzY29wZS5ibHVyID0gJyc7XG4gICRzY29wZS5ncmF5b3V0ID0gJyc7IC8vdXNlIHRoaXMgY2xhc3MgdG8gZ3JheSBvdXQgdGhlIG1hcCwgc3VjaCBhcyB3aGVuIHRoZSBjb3VudHJ5IHNlbGVjdG9yIG1lbnUgaXMgYWN0aXZlXG4gICRzY29wZS5sZWdlbmRPYmplY3QgPSB7fTsgLy9XaGVuIFBCRiBsYXllcnMgYXJlIGRyYXduLCBncmFiIHRoZSBsZWdlbmRPYmplY3Qgb3V0IG9mIGl0IHNvIHdlIGtub3cgd2hhdCBjbGFzc2VzIGFyZSBiZWluZyBkcmF3biBvbiB0aGUgbWFwXG5cbiAgLy9BZGQgcmVmcmVzaCBtYXBwIGNvbnRyb2xcbiAgYWRkUmVmcmVzaE1hcENvbnRyb2woKTtcblxuICAkc2NvcGUudG9nZ2xlU3RhdGUgPSBmdW5jdGlvbiAoc3RhdGVOYW1lKSB7XG4gICAgdmFyIHN0YXRlID0gJHN0YXRlLmN1cnJlbnQubmFtZSAhPT0gc3RhdGVOYW1lID8gc3RhdGVOYW1lIDogJ21haW4nO1xuICAgICRzdGF0ZS5nbyhzdGF0ZSwgJHN0YXRlUGFyYW1zKTtcbiAgfTtcblxuICB2YXIgbGFzdExheWVyc1N0ciA9ICcnO1xuICB2YXIgbGF5ZXJEaWZmZXJlbmNlOyAvL2FuIG9iamVjdCB0aGF0IHN0b3JlcyB3aGV0aGVyIG9yIG5vdCBuZXcgbGF5ZXJzIGFyZSBhZGRlZCwgb3IgaGF2ZSBiZWVuIHJlbW92ZWQsIGFuZCB3aGF0IHRoZWlyIG5hbWVzIGFyZVxuICB2YXIgbGFzdEJhc2VtYXBVcmwgPSBudWxsO1xuICB2YXIgYmFzZW1hcExheWVyID0gbnVsbDtcbiAgdmFyIGxheWVyc1N0ciA9IG51bGw7XG4gIHZhciBvdmVybGF5TmFtZXMgPSBbXTtcbiAgdmFyIG92ZXJsYXlzID0gW107XG4gIHZhciBvdmVybGF5c19kaWN0aW9uYXJ5ID0ge307XG4gIHZhciB0aGVtZSA9IG51bGw7XG4gIHZhciBmaWx0ZXJzID0gbnVsbDtcblxuICBmdW5jdGlvbiByZWRyYXcoKSB7XG4gICAgZm9yY2VHYWRtMCgpO1xuICAgIHZhciBsYXQgPSBwYXJzZUZsb2F0KCRzdGF0ZVBhcmFtcy5sYXQpIHx8IDA7XG4gICAgdmFyIGxuZyA9IHBhcnNlRmxvYXQoJHN0YXRlUGFyYW1zLmxuZykgfHwgMDtcbiAgICB2YXIgem9vbSA9IHBhcnNlRmxvYXQoJHN0YXRlUGFyYW1zLnpvb20pIHx8IDg7XG4gICAgbGF5ZXJzU3RyID0gJHN0YXRlUGFyYW1zLmxheWVycyB8fCBMYXllckNvbmZpZy5yZWRjcm9zcy51cmw7XG4gICAgdmFyIGxheWVycyA9IGxheWVyc1N0ci5zcGxpdCgnLCcpO1xuXG4gICAgLy8gZmlyc3QgbGF5ZXIgc2hvdWxkIGFsd2F5cyBiZSB0cmVhdGVkIGFzIHRoZSBiYXNlbWFwXG4gICAgdmFyIGJhc2VtYXAgPSBMYXllckNvbmZpZy5maW5kKGxheWVyc1swXSkgfHwgTGF5ZXJDb25maWcucmVkY3Jvc3MudXJsO1xuICAgIGlmICh0eXBlb2YgYmFzZW1hcCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHZhciBiYXNlbWFwVXJsID0gYmFzZW1hcDtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGJhc2VtYXBVcmwgPSBiYXNlbWFwLnVybDtcbiAgICB9XG5cbiAgICBvdmVybGF5TmFtZXMgPSBsYXllcnMuc2xpY2UoMSk7XG5cbiAgICBpZiAobGFzdEJhc2VtYXBVcmwgIT09IGJhc2VtYXBVcmwgJiYgdHlwZW9mIG1hcCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGlmIChiYXNlbWFwTGF5ZXIpIHtcbiAgICAgICAgbWFwLnJlbW92ZUxheWVyKGJhc2VtYXBMYXllcik7XG4gICAgICB9XG4gICAgICBiYXNlbWFwTGF5ZXIgPSBMLnRpbGVMYXllcihiYXNlbWFwVXJsKS5hZGRUbyhtYXApO1xuXG4gICAgICBiYXNlbWFwTGF5ZXIub24oJ2xvYWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vTW92ZSB0byBiYWNrXG4gICAgICAgIGJhc2VtYXBMYXllci5icmluZ1RvQmFjaygpO1xuICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICAvL0xheWVycyBoYXZlIGNoYW5nZWQuICBEbyBzb21ldGhpbmcgYWJvdXQgaXQuXG4gICAgaWYgKGxhc3RMYXllcnNTdHIgIT09IGxheWVyc1N0cikge1xuXG4gICAgICAvL1NlZSBpZiBuZXcgbGF5ZXJzIGFyZSBhZGRlZCBvciBpZiBsYXllcnMgbmVlZCB0byBiZSByZW1vdmVkLlxuICAgICAgdmFyIGxhc3RMYXllcnNBcnJheSA9IGxhc3RMYXllcnNTdHIuc3BsaXQoJywnKTtcbiAgICAgIHZhciBjdXJyZW50TGF5ZXJzQXJyYXkgPSBsYXllcnNTdHIuc3BsaXQoJywnKTtcblxuICAgICAgaWYobGFzdExheWVyc0FycmF5Lmxlbmd0aCA+IGN1cnJlbnRMYXllcnNBcnJheS5sZW5ndGgpe1xuICAgICAgICAvL09uZSBvciBtb3JlIGxheWVycyBoYXMgYmVlbiByZW1vdmVkLlxuICAgICAgICBsYXllckRpZmZlcmVuY2UgPSB7IHR5cGU6ICdyZW1vdmVkJywgbGlzdDogJChsYXN0TGF5ZXJzQXJyYXkpLm5vdChjdXJyZW50TGF5ZXJzQXJyYXkpLmdldCgpfTtcbiAgICAgIH1cbiAgICAgIGVsc2V7XG4gICAgICAgIC8vT25lIG9yIG1vcmUgbGF5ZXJzIGhhcyBiZWVuIGFkZGVkXG4gICAgICAgIGxheWVyRGlmZmVyZW5jZSA9IHsgdHlwZTogJ2FkZGVkJywgbGlzdDogJChjdXJyZW50TGF5ZXJzQXJyYXkpLm5vdChsYXN0TGF5ZXJzQXJyYXkpLmdldCgpfTtcblxuICAgICAgfVxuXG4gICAgICBkcmF3T3ZlcmxheXMobGF5ZXJEaWZmZXJlbmNlKTtcblxuICAgICAgJHNjb3BlLmRlZmF1bHRzID0ge1xuICAgICAgICBzY3JvbGxXaGVlbFpvb206IHRydWVcbiAgICAgIH07XG5cbiAgICAgICRzY29wZS50aWxlcyA9IHtcbiAgICAgICAgdXJsOiBiYXNlbWFwVXJsXG4gICAgICB9O1xuICAgIH1cblxuICAgIHZhciBjID0gJHNjb3BlLmNlbnRlciA9IHtcbiAgICAgIGxhdDogbGF0LFxuICAgICAgbG5nOiBsbmcsXG4gICAgICB6b29tOiB6b29tXG4gICAgfTtcblxuICAgIGlmICh0eXBlb2YgbWFwID09PSAnb2JqZWN0JyAmJiAoYy5sYXQgIT0gMCAmJiBjLmxuZyAhPSAwKSkge1xuICAgICAgbWFwLnNldFZpZXcoW2MubGF0LCBjLmxuZ10sIHpvb20pO1xuICAgIH1cblxuICAgIGlmICgodGhlbWUgIT09ICRzdGF0ZVBhcmFtcy50aGVtZSB8fCBmaWx0ZXJzICE9PSAkc3RhdGVQYXJhbXMuZmlsdGVycykgfHwgZmlyc3RMb2FkID09PSB0cnVlKSB7XG5cbiAgICAgIGZpcnN0TG9hZCA9IGZhbHNlO1xuXG4gICAgICAvL1VwZGF0ZSBsb2NhbCB2YXJpYWJsZXNcbiAgICAgIHRoZW1lID0gJHN0YXRlUGFyYW1zLnRoZW1lO1xuICAgICAgZmlsdGVycyA9ICRzdGF0ZVBhcmFtcy5maWx0ZXJzO1xuXG4gICAgICAvL0NhbGwgdGhlICdvbkNoYW5nZWQnIGZ1bmN0aW9uXG4gICAgICBvblRoZW1lQ2hhbmdlZCgkc3RhdGVQYXJhbXMudGhlbWUpO1xuICAgICAgb25GaWx0ZXJzQ2hhbmdlZCgkc3RhdGVQYXJhbXMuZmlsdGVycyk7XG4gICAgfVxuXG4gICAgYnJvYWRjYXN0QkJveCgpO1xuICAgIGxhc3RMYXllcnNTdHIgPSBsYXllcnNTdHI7XG4gICAgbGFzdEJhc2VtYXBVcmwgPSBiYXNlbWFwVXJsO1xuICB9XG5cbiAgLy9Gb3IgdmVjdG9yIHRpbGUgY2hvcm9wbGV0aHMsIGFzayBmb3IgbmV3IGRhdGEgLmpzb24gZnJvbSB0aGUgc2VydmVyXG4gIG9uVGhlbWVDaGFuZ2VkKCRzdGF0ZVBhcmFtcy50aGVtZSk7XG5cblxuICAvKioqXG4gICAqIEJyb2FkY2FzdCBMaXN0ZW5lcnMuXG4gICAqL1xuICAkc2NvcGUuJG9uKCdyb3V0ZS11cGRhdGUnLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCRzY29wZS5ibHVyID09PSAnYmx1cicgJiYgJHN0YXRlLmN1cnJlbnQubmFtZSAhPT0gJ2xhbmRpbmcnKSB7XG4gICAgICAkc2NvcGUuYmx1ciA9ICcnO1xuICAgIH1cblxuICAgIHZhciBjO1xuICAgIGlmICghJHNjb3BlLmNlbnRlcikge1xuICAgICAgdmFyIGxhdCA9IHBhcnNlRmxvYXQoJHN0YXRlUGFyYW1zLmxhdCkgfHwgMDtcbiAgICAgIHZhciBsbmcgPSBwYXJzZUZsb2F0KCRzdGF0ZVBhcmFtcy5sbmcpIHx8IDA7XG4gICAgICB2YXIgem9vbSA9IHBhcnNlRmxvYXQoJHN0YXRlUGFyYW1zLnpvb20pIHx8IDg7XG5cbiAgICAgIGMgPSAkc2NvcGUuY2VudGVyID0ge1xuICAgICAgICBsYXQ6IGxhdCxcbiAgICAgICAgbG5nOiBsbmcsXG4gICAgICAgIHpvb206IHpvb21cbiAgICAgIH07XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgYyA9ICRzY29wZS5jZW50ZXI7XG4gICAgfVxuXG4gICAgdmFyIGxhdCA9IGMubGF0LnRvRml4ZWQoNik7XG4gICAgdmFyIGxuZyA9IGMubG5nLnRvRml4ZWQoNik7XG4gICAgdmFyIHpvb20gPSBjLnpvb20udG9TdHJpbmcoKTtcbiAgICBpZiAobWFwTW92ZUVuZCkge1xuICAgICAgbWFwTW92ZUVuZCA9IGZhbHNlO1xuICAgIH0gZWxzZSBpZiAoJHN0YXRlUGFyYW1zLmxhdCAhPT0gbGF0XG4gICAgICB8fCAkc3RhdGVQYXJhbXMubG5nICE9PSBsbmdcbiAgICAgIHx8ICRzdGF0ZVBhcmFtcy56b29tICE9PSB6b29tXG4gICAgICB8fCAkc3RhdGVQYXJhbXMubGF5ZXJzICE9PSBsYXllcnNTdHJcbiAgICAgIHx8ICRzdGF0ZVBhcmFtcy50aGVtZSAhPT0gdGhlbWVcbiAgICAgIHx8ICRzdGF0ZVBhcmFtcy5maWx0ZXJzICE9PSBmaWx0ZXJzKSB7XG5cbiAgICAgIGNvbnNvbGUubG9nKCdtYXAuanMgcm91dGUtdXBkYXRlIFVwZGF0aW5nIE1hcC4uLicpO1xuICAgICAgcmVkcmF3KCk7XG4gICAgfVxuXG4gIH0pO1xuXG4gICRyb290U2NvcGUuJG9uKCd0aGVtZWxhYmVscy11cGRhdGUnLCBmdW5jdGlvbiAoKSB7XG4gICAgLy9DYWxsIHRoZSBmdW5jdGlvblxuICAgIG9uVGhlbWVMYWJlbENoYW5nZWQoKTtcblxuICAgIC8vU2VlIGlmIHdlIHNob3VsZCBzaG93IHRoZW1lIGJhZGdlcy9idWJibGVzIG9yIG5vdFxuICAgIGlmKCRzdGF0ZVBhcmFtcy50aGVtZWxhYmVscyAhPT0gbnVsbCAmJiAkc3RhdGVQYXJhbXMudGhlbWVsYWJlbHMgIT09IHVuZGVmaW5lZCl7XG4gICAgICAkc2NvcGUudGhlbWVMYWJlbHNDaGVja2VkID0gJHN0YXRlUGFyYW1zLnRoZW1lbGFiZWxzO1xuICAgIH1cbiAgICBlbHNle1xuICAgICAgLy9pZiBub3QgcHJlc2VudCwgZGVmYXVsdCB0byB0cnVlXG4gICAgICAkc2NvcGUudGhlbWVMYWJlbHNDaGVja2VkID0gJ3RydWUnO1xuICAgIH1cbiAgfSk7XG5cblxuICAkc2NvcGUuJG9uKCdibHVyJywgZnVuY3Rpb24gKCkge1xuICAgICRzY29wZS5ibHVyID0gJ2JsdXInO1xuICB9KTtcblxuICAvL3RoaXMgdGFrZXMgaW4gYSBXS1QgR2VvSlNPTiBFeHRlbnQgZ2VvbWV0cnlcbiAgJHNjb3BlLnpvb21Ub0V4dGVudCA9IGZ1bmN0aW9uIChleHRlbnQpIHtcbiAgICBkZWxldGUgJHN0YXRlUGFyYW1zWyd6b29tLWV4dGVudCddO1xuXG4gICAgdmFyIHNvdXRoV2VzdCA9IHtsYXQ6IGV4dGVudFswXVsxXSwgbG5nOiBleHRlbnRbMF1bMF19O1xuICAgIHZhciBub3J0aEVhc3QgPSB7bGF0OiBleHRlbnRbMl1bMV0sIGxuZzogZXh0ZW50WzJdWzBdfTtcblxuICAgICRzY29wZS5ib3VuZHMgPSBMLmxhdExuZ0JvdW5kcyhzb3V0aFdlc3QsIG5vcnRoRWFzdCk7XG5cbiAgICAvL1pvb20gdG8gYm91bmRzXG4gICAgbWFwLmZpdEJvdW5kcygkc2NvcGUuYm91bmRzKTtcbiAgfTtcblxuICAvL1RoaXMgdGFrZSBhIGxlYWZsZXQgYm91bmRzIG9iamVjdCBhbmQgaGFuZGxlcyBpdC5cbiAgZGVsZXRlICRzdGF0ZVBhcmFtc1snem9vbS1leHRlbnQnXTtcbiAgJHNjb3BlLnpvb21Ub0JvdW5kcyA9IGZ1bmN0aW9uIChib3VuZHMpIHtcblxuICAgIC8vQnVpbGQgbmV3IGJvdW5kcyBvYmplY3RcbiAgICAkc2NvcGUuYm91bmRzID0gTC5sYXRMbmdCb3VuZHMoYm91bmRzLmdldFNvdXRoV2VzdCgpLCBib3VuZHMuZ2V0Tm9ydGhFYXN0KCkpO1xuXG4gICAgLy9ab29tIHRvIGJvdW5kc1xuICAgIG1hcC5maXRCb3VuZHMoJHNjb3BlLmJvdW5kcyk7XG4gIH07XG5cblxuICBmdW5jdGlvbiBicm9hZGNhc3RCQm94KCkge1xuICAgIC8vTkggVE9ETyBGaXhtZS4gRmluZCBhIGJldHRlciBzb2x1dGlvbiB0aGFuIGEgc3BpbiBsb2NrLlxuICAgIGlmICghd2FpdCkge1xuICAgICAgd2FpdCA9IHRydWU7XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAvL0dldCB0aGUgTUlOL01BWCBUaWxlIFpZWCBleHRlbnRzLlxuICAgICAgICAvL0lmIHRoZXkgaGF2ZW4ndCBjaGFnbmVkLCB0aGVuIGRvbid0IHByb2NlZWQuXG5cbiAgICAgICAgLy9XaGVuIHRoZSBwYWdlIGxvYWRzLCBubyB6b29tIG9yIGNlbnRlciBoYXMgYmVlbiBzZXQsIHNvIGRvbid0IGdldCBib3VuZHMgdW50aWwgdGhhdCBoYXMgaGFwcGVuZWRcbiAgICAgICAgaWYgKCFtYXAuZ2V0Wm9vbSgpKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciB0aWxlQm91bmRzID0gZ2V0Q3VycmVudFRpbGVCb3VuZHMobWFwKTtcbiAgICAgICAgdmFyIHpvb20gPSBtYXAuZ2V0Wm9vbSgpO1xuXG4gICAgICAgICRzY29wZS56b29tID0gem9vbTtcbiAgICAgICAgdmFyIG1pbnggPSB0aWxlQm91bmRzLm1pbi54O1xuICAgICAgICB2YXIgbWF4eCA9IHRpbGVCb3VuZHMubWF4Lng7XG4gICAgICAgIHZhciBtaW55ID0gdGlsZUJvdW5kcy5taW4ueTtcbiAgICAgICAgdmFyIG1heHkgPSB0aWxlQm91bmRzLm1heC55O1xuXG4gICAgICAgIC8vRGV0ZWN0IG5lZ2F0aXZlIG1pbnMgYW5kIHNldCB0byAwXG4gICAgICAgIGlmIChtaW54IDwgMCkgbWlueCA9IDA7XG4gICAgICAgIGlmIChtaW55IDwgMCkgbWlueSA9IDA7XG5cbiAgICAgICAgLy9DaGVjayBmb3IgZXh0cmVtZSB2YWx1ZXMgZ3JlYXRlciB0aGFuIHRoZSB0aWxlIGJvdW5kc1xuICAgICAgICB2YXIgZXh0cmVtZVZhbHVlID0gTWF0aC5wb3coMiwgem9vbSkgLSAxO1xuXG4gICAgICAgIGlmIChtYXh4ID4gZXh0cmVtZVZhbHVlKSBtYXh4ID0gZXh0cmVtZVZhbHVlO1xuICAgICAgICBpZiAobWF4eSA+IGV4dHJlbWVWYWx1ZSkgbWF4eSA9IGV4dHJlbWVWYWx1ZTtcblxuICAgICAgICB2YXIgc3RyID0gem9vbSArIFwiLFwiICsgbWlueCArICcsJyArXG4gICAgICAgICAgbWF4eCArICcsJyArXG4gICAgICAgICAgbWlueSArICcsJyArXG4gICAgICAgICAgbWF4eTtcblxuICAgICAgICBWZWN0b3JQcm92aWRlci51cGRhdGVCQm94KHN0cik7XG4gICAgICAgICRyb290U2NvcGUuYmJveCA9IHN0cjsgLy9zYXZlIHRoZSBiYm94IHN0cmluZyB0byByb290U2NvcGUgc28gVmVjdG9yVGlsZSBzdHlsaW5nIGZ1bmN0aW9ucyBoYXZlIGFjY2Vzc1xuXG5cbiAgICAgICAgd2FpdCA9IGZhbHNlO1xuICAgICAgfSwgMTUwKTtcbiAgICB9XG5cbiAgfVxuXG4gIC8qKlxuICAgKiBSaXBwZWQgRnJvbSBMZWFmbGV0IFRpbGVMYXllclxuICAgKiBDYWxjdWxhdGUgdGhlIE1heC9NaW4gWllYIFRpbGUgYm91bmRzLlxuICAgKiBVc2UgdGhvc2UgdG8gc25hcCBCQm94IHJlcXVlc3RzIHNvIHdlIGNhbiBjYWNoZS5cbiAgICovXG5cbiAgZnVuY3Rpb24gZ2V0Q3VycmVudFRpbGVCb3VuZHMobWFwKSB7XG4gICAgdmFyIGJvdW5kcyA9IG1hcC5nZXRQaXhlbEJvdW5kcygpLFxuICAgICAgdGlsZVNpemUgPSAyNTY7IC8vVE9ET1xuXG4gICAgLy8gdGlsZSBjb29yZGluYXRlcyByYW5nZSBmb3IgdGhlIGN1cnJlbnQgdmlld1xuICAgIHZhciB0aWxlQm91bmRzID0gTC5ib3VuZHMoXG4gICAgICBib3VuZHMubWluLmRpdmlkZUJ5KHRpbGVTaXplKS5mbG9vcigpLFxuICAgICAgYm91bmRzLm1heC5kaXZpZGVCeSh0aWxlU2l6ZSkuZmxvb3IoKSk7XG5cbiAgICByZXR1cm4gdGlsZUJvdW5kcztcbiAgfVxuXG5cbiAgLyoqXG4gICAqIE5hdGl2ZSBMZWFmbGV0IE1hcCBPYmplY3RcbiAgICovXG5cbiAgd2luZG93Lm1hcCA9IG1hcDtcbiAgbWFwLm9uKCdtb3ZlZW5kJywgZnVuY3Rpb24gKCkgeyAvLyBtb3ZlIGlzIGdvb2QgdG9vXG4gICAgdmFyIGMgPSBtYXAuZ2V0Q2VudGVyKCk7XG4gICAgdmFyIGxhdCA9IGMubGF0LnRvRml4ZWQoNik7XG4gICAgdmFyIGxuZyA9IGMubG5nLnRvRml4ZWQoNik7XG4gICAgdmFyIHpvb20gPSBtYXAuZ2V0Wm9vbSgpLnRvU3RyaW5nKCk7XG5cbiAgICBpZiAoJHN0YXRlUGFyYW1zLmxhdCAhPT0gbGF0XG4gICAgICB8fCAkc3RhdGVQYXJhbXMubG5nICE9PSBsbmdcbiAgICAgIHx8ICRzdGF0ZVBhcmFtcy56b29tICE9PSB6b29tKSB7XG5cblxuICAgICAgJHN0YXRlUGFyYW1zLmxhdCA9IGxhdDtcbiAgICAgICRzdGF0ZVBhcmFtcy5sbmcgPSBsbmc7XG4gICAgICAkc3RhdGVQYXJhbXMuem9vbSA9IHpvb207XG4gICAgICBtYXBNb3ZlRW5kID0gdHJ1ZTtcbiAgICAgICRzdGF0ZS5nbygkc3RhdGUuY3VycmVudC5uYW1lLCAkc3RhdGVQYXJhbXMpO1xuICAgICAgYnJvYWRjYXN0QkJveCgpO1xuXG4gICAgICAvL1VwZGF0ZSBFQ09TIERldGFpbHMgLSBVc3VhbGx5IHRoaXMgaGFwcGVucyB3aGVuIHRpbGVzIGZpbmlzaCBsb2FkaW5nIGFmdGVyIGEgcGFuLiAgQnV0IHNvbWV0aW1lcyBpZiB0aGUgdGlsZXMgYXJlIGxvYWRlZC9jYWNoZWQsIHRoZW4gdGhlIGV2ZW50IGRvZXNuJ3QgZmlyZSBhZnRlciB0aGUgbWFwIHN0b3BzIG1vdmluZy5cbiAgICAgIC8vdXBkYXRlRUNPU0RhdGEob3ZlcmxheU5hbWVzKTtcbiAgICB9XG4gIH0pO1xuXG4gIG1hcC5vbignem9vbWVuZCcsIGZ1bmN0aW9uKGV2dCkge1xuXG4gICAgdmFyIHpvb20gPSBldnQudGFyZ2V0LmdldFpvb20oKTtcblxuICAgIC8vV2hlbiB6b29tIGVuZHMsIHN3YXAgY3NzIGNsYXNzIG9uIG1hcCBkaXYsIHNvIHRoZSBsYWJlbHMgd2lsbCBjaGFuZ2Ugc2l6ZVxuICAgIC8vcmVtb3ZlIG9sZCBjbGFzc2VzLCBqdXN0IGluIGNhc2VcblxuICAgICQoXCIjbWFwXCIpLnJlbW92ZUNsYXNzKFwibWVkaXVtLWxhYmVsXCIpO1xuICAgICQoXCIjbWFwXCIpLnJlbW92ZUNsYXNzKFwibGFyZ2UtbGFiZWxcIik7XG5cblxuICAgIC8vQWRkIGFwcHJvcHJpYXRlIGNsYXNzIGJhc2Qgb24gem9vbVxuICAgIGlmICh6b29tID49IDAgJiYgem9vbSA8PSA1KSB7XG4gICAgICAkKFwiI21hcFwiKS5hZGRDbGFzcyhcIm1lZGl1bS1sYWJlbFwiKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoem9vbSA+IDUgJiYgem9vbSA8PSAxMykge1xuICAgICAgJChcIiNtYXBcIikuYWRkQ2xhc3MoXCJsYXJnZS1sYWJlbFwiKTtcbiAgICB9XG5cbiAgfSk7XG5cbiAgJHJvb3RTY29wZS4kd2F0Y2goJ2xldmVsJywgZnVuY3Rpb24gKCkge1xuICAgICAvL2lmIHRoZSBHQURNIGxldmVsIGNoYW5nZXMgKGFuZCBpcyBzb21ldGhpbmcpLCB0aGVuIG5lZWQgdG8gZmV0Y2ggbmV3IEVDT1MgZGF0YSBmb3IgdGhpcyB0aGVtZVxuICAgICBvblRoZW1lQ2hhbmdlZCgpO1xuICB9KTtcblxuICAvL0Nvbm5lY3QgdGhlIGxheW91dCBvbnJlc2l6ZSBlbmQgZXZlbnRcbiAgdHJ5IHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBtYXAuaW52YWxpZGF0ZVNpemUpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgLy9Ob3RoaW5nXG4gIH1cblxuXG4gIC8vRGlmZmVyZW5jZSBvYmplY3QgdGVsbHMgdXMgd2hldGhlciBuZXcgaXRlbXMgaGF2ZSBiZWVuIGFkZGVkLCBvciBpZiBsYXllcnMgaGF2ZSBiZWVuIHJlbW92ZWQuXG4gIGZ1bmN0aW9uIGRyYXdPdmVybGF5cyhkaWZmZXJlbmNlT2JqZWN0KSB7XG5cbiAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gb3ZlcmxheU5hbWVzLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICB2YXIgb3ZlcmxheU5hbWUgPSBvdmVybGF5TmFtZXNbaV07XG4gICAgICB2YXIgY3Vyck92ZXJsYXkgPSBvdmVybGF5c1tpXTtcblxuICAgICAgaWYgKGN1cnJPdmVybGF5ICYmIGN1cnJPdmVybGF5Lm92ZXJsYXlOYW1lID09PSBvdmVybGF5TmFtZSkge1xuICAgICAgICBjb250aW51ZTsgLy8gbGF5ZXIgaXMgYWxyZWFkeSB0aGVyZSwgY29udGludWUgb24hXG4gICAgICB9XG5cbiAgICAgIC8vIHJlbW92ZSB0aGUgY3VycmVudCBsYXllciB0aGF0IGlzIG5vdCB3aGF0IHNob3VsZCBiZSB0aGF0IGxheWVyIGluIHRoZSBsaXN0XG4gICAgICBlbHNlIGlmIChjdXJyT3ZlcmxheSAmJiBjdXJyT3ZlcmxheS5fbWFwKSB7XG4gICAgICAgIGlmIChjdXJyT3ZlcmxheS5kZXN0cm95UmVzb3VyY2UpIGN1cnJPdmVybGF5LmRlc3Ryb3lSZXNvdXJjZSgpO1xuICAgICAgICBtYXAucmVtb3ZlTGF5ZXIoY3Vyck92ZXJsYXkpO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIE1hcG5payBWZWN0b3IgVGlsZSBGb3JtYXQgKC5QQkYpXG4gICAgICAgKi9cbiAgICAgIGlmICh0eXBlb2YgTGF5ZXJDb25maWdbb3ZlcmxheU5hbWVdID09PSAnb2JqZWN0J1xuICAgICAgICAmJiBMYXllckNvbmZpZ1tvdmVybGF5TmFtZV0udHlwZS50b0xvd2VyQ2FzZSgpID09PSAncGJmJykge1xuXG4gICAgICAgIHZhciB2ZWNSZXMgPSBWZWN0b3JQcm92aWRlci5jcmVhdGVSZXNvdXJjZShvdmVybGF5TmFtZSk7XG4gICAgICAgIGlmICh2ZWNSZXMpIHtcbiAgICAgICAgICB2YXIgbGF5ZXIgPSB2ZWNSZXMuZ2V0TGF5ZXIoKTtcbiAgICAgICAgICBsYXllci5vdmVybGF5TmFtZSA9IG92ZXJsYXlOYW1lO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIC8vTm90IGEgdmFsaWQgbGF5ZXIuXG4gICAgICAgICAgY29uc29sZS5sb2cob3ZlcmxheU5hbWUgKyBcIiBpcyBub3QgYSBsYXllciBzcGVjaWZpZWQgaW4gbGF5ZXJDb25maWcuanNcIik7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gdHJ5IGZvciBXTVMgKG5vdCBhIHZlY3RvciBsYXllcilcbiAgICAgIC8vIGlmIHRoaW5ncyBnZXQgbW9yZSBmYW5jeSB3aXRoIHdtcywgaXQgc2hvdWxkIGdldCBpdHMgb3duIGZhY3RvcnlcbiAgICAgIGVsc2UgaWYgKHR5cGVvZiBMYXllckNvbmZpZ1tvdmVybGF5TmFtZV0gPT09ICdvYmplY3QnXG4gICAgICAgICYmIExheWVyQ29uZmlnW292ZXJsYXlOYW1lXS50eXBlLnRvTG93ZXJDYXNlKCkgPT09ICd3bXMnKSB7XG5cbiAgICAgICAgdmFyIGNmZyA9IExheWVyQ29uZmlnW292ZXJsYXlOYW1lXTtcblxuICAgICAgICBpZiAoY2ZnKSB7XG5cblxuICAgICAgICAgIHZhciBsYXllciA9IEwudGlsZUxheWVyLndtcyhjZmcudXJsLCB7XG4gICAgICAgICAgICBmb3JtYXQ6IGNmZy5mb3JtYXQgfHwgJ2ltYWdlL3BuZycsXG4gICAgICAgICAgICB0cmFuc3BhcmVudDogY2ZnLnRyYW5zcGFyZW50IHx8IHRydWUsXG4gICAgICAgICAgICBsYXllcnM6IGNmZy5sYXllcnNcbiAgICAgICAgICB9KTtcblxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIC8vTm90IGEgdmFsaWQgbGF5ZXIuXG4gICAgICAgICAgY29uc29sZS5sb2cob3ZlcmxheU5hbWUgKyBcIiBpcyBub3QgYSBsYXllciBzcGVjaWZpZWQgaW4gbGF5ZXJDb25maWcuanNcIik7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuXG4gICAgICAvKipcbiAgICAgICAqIFRpbGVzIHRoYXQgYXJlIGFuIG92ZXJsYXkuIE9TTSAvIEdvb2dsZSAvIE1hcG5payB0ZW5kIHRvIG1ha2UgdGlsZXMgaW4gdGhpcyBmb3JtYXQuXG4gICAgICAgKi9cbiAgICAgIGVsc2UgaWYgKHR5cGVvZiBMYXllckNvbmZpZ1tvdmVybGF5TmFtZV0gPT09ICdvYmplY3QnXG4gICAgICAgICYmIExheWVyQ29uZmlnW292ZXJsYXlOYW1lXS50eXBlLnRvTG93ZXJDYXNlKCkgPT09ICd4eXonKSB7XG5cbiAgICAgICAgdmFyIGNmZyA9IExheWVyQ29uZmlnW292ZXJsYXlOYW1lXTtcbiAgICAgICAgaWYgKGNmZykge1xuXG5cbiAgICAgICAgICB2YXIgbGF5ZXIgPSBMLnRpbGVMYXllcihjZmcudXJsLCB7XG4gICAgICAgICAgICBvcGFjaXR5OiBjZmcub3BhY2l0eSB8fCAwLjVcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIC8vTm90IGEgdmFsaWQgbGF5ZXIuXG4gICAgICAgICAgY29uc29sZS5sb2cob3ZlcmxheU5hbWUgKyBcIiBpcyBub3QgYSBsYXllciBzcGVjaWZpZWQgaW4gbGF5ZXJDb25maWcuanNcIik7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBUTVMgZmxpcHMgdGhlIHkuIEdlb1NlcnZlciBvZnRlbiBzZXJ2ZXMgdGhpcy5cbiAgICAgICAqL1xuICAgICAgZWxzZSBpZiAodHlwZW9mIExheWVyQ29uZmlnW292ZXJsYXlOYW1lXSA9PT0gJ29iamVjdCdcbiAgICAgICAgJiYgTGF5ZXJDb25maWdbb3ZlcmxheU5hbWVdLnR5cGUudG9Mb3dlckNhc2UoKSA9PT0gJ3RtcycpIHtcbiAgICAgICAgdmFyIGNmZyA9IExheWVyQ29uZmlnW292ZXJsYXlOYW1lXTtcblxuICAgICAgICBpZiAoY2ZnKSB7XG4gICAgICAgICAgdmFyIGxheWVyID0gTC50aWxlTGF5ZXIoY2ZnLnVybCwge1xuICAgICAgICAgICAgb3BhY2l0eTogY2ZnLm9wYWNpdHkgfHwgMC41LFxuICAgICAgICAgICAgdG1zOiB0cnVlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAvL05vdCBhIHZhbGlkIGxheWVyLlxuICAgICAgICAgIGNvbnNvbGUubG9nKG92ZXJsYXlOYW1lICsgXCIgaXMgbm90IGEgbGF5ZXIgc3BlY2lmaWVkIGluIGxheWVyQ29uZmlnLmpzXCIpO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIGlmIGl0cyBub3Qgd21zLCBpdHMgYSB2ZWN0b3IgbGF5ZXJcbiAgICAgIGVsc2Uge1xuICAgICAgICB2YXIgdmVjUmVzID0gVmVjdG9yUHJvdmlkZXIuY3JlYXRlUmVzb3VyY2Uob3ZlcmxheU5hbWUpO1xuICAgICAgICBpZiAodmVjUmVzKSB7XG4gICAgICAgICAgdmFyIGxheWVyID0gdmVjUmVzLmdldExheWVyKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgLy9Ob3QgYSB2YWxpZCBsYXllci5cbiAgICAgICAgICBjb25zb2xlLmxvZyhvdmVybGF5TmFtZSArIFwiIGlzIG5vdCBhIGxheWVyIHNwZWNpZmllZCBpbiBsYXllckNvbmZpZy5qc1wiKTtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZihsYXllcil7XG4gICAgICAgIGxheWVyLm92ZXJsYXlOYW1lID0gb3ZlcmxheU5hbWU7XG4gICAgICAgIGxheWVyLmFkZFRvKG1hcCk7XG4gICAgICAgIG92ZXJsYXlzW2ldID0gbGF5ZXI7XG4gICAgICAgIG92ZXJsYXlzX2RpY3Rpb25hcnlbb3ZlcmxheU5hbWVdID0gbGF5ZXI7IC8va2VlcCBhIGRpY3Rpb25hcnkgcmVmZXJlbmNlIGZvciBmYXN0ZXIgZmV0Y2hpbmcgaW4gVXBkYXRlRUNPU0RhdGFcblxuICAgICAgICAvL1NlZSB3aGljaCBHQURNIGxldmVsIGlzIGN1cnJlbnRseSBsb2FkZWQgYW5kIHN0b3JlIGl0IGluIHJvb3RTY29wZSAoYXNzdW1lcyBvbmUgYXQgYSB0aW1lLCB3aGljaCBtaWdodCBnbyBhd2F5IGF0IHNvbWUgcG9pbnQpXG4gICAgICAgIGlmIChMYXllckNvbmZpZy50aGVtZUxheWVycy5pbmRleE9mKG92ZXJsYXlOYW1lKSA+IC0xKSB7XG4gICAgICAgICAgLy9XZSBoYXZlIG9uZSBvZiB0aGUgdGhlbWUgbGF5ZXJzIChHQURNKSwgcGFyc2UgdGhlIG5hbWUgYW5kIGZpbmQgb3V0IHdoaWNoIGxldmVsIHdlJ3JlIGRlYWxpbmcgd2l0aCBhcyBvcHBvc2VkIHRvIHN0b3JpbmcgYSBzZWFwcmF0ZSBsZXZlbCBzdGF0ZSBwYXJhbVxuICAgICAgICAgIC8vSWYgYXJjcmVnaW9ucywgdGhlbiBsZXZlbCBpcyAtMVxuICAgICAgICAgIHZhciBsZXZlbDtcbiAgICAgICAgICBpZihvdmVybGF5TmFtZSA9PT0gJ2FyY3JlZ2lvbnMnKXtcbiAgICAgICAgICAgIGxldmVsID0gLTE7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICBsZXZlbCA9IG92ZXJsYXlOYW1lLnN1YnN0cmluZyhvdmVybGF5TmFtZS5sZW5ndGggLSAxLCBvdmVybGF5TmFtZS5sZW5ndGgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAkcm9vdFNjb3BlLmxldmVsID0gbGV2ZWw7IC8vU3RvcmUgaW4gcm9vdHNjb3BlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cblxuICAgIGlmKGRpZmZlcmVuY2VPYmplY3QgJiYgZGlmZmVyZW5jZU9iamVjdC50eXBlID09ICdyZW1vdmVkJyl7XG4gICAgICAvLyB0aGVyZSBhcmUgbW9yZSBvdmVybGF5cyBsZWZ0IGluIHRoZSBsaXN0LCBsZXNzIGxheWVycyBzcGVjaWZpZWQgaW4gcm91dGVcbiAgICAgIC8vIHdlIG5lZWQgdG8gcmVtb3ZlIHRob3NlIHRvby5cbiAgICAgIHZhciBpID0gMDtcbiAgICAgIGZvciAodmFyIGxlbjIgPSBvdmVybGF5cy5sZW5ndGg7IGkgPCBsZW4yOyArK2kpIHtcbiAgICAgICAgLy9JZiB0aGUgb3ZlcmxheSBuYW1lIGV4aXN0cyBpbiB0aGUgbGlzdCBvZiBsYXllcnMgdG8gYmUgcmVtb3ZlZCwgdGhlbiByZW1vdmUgaXQuXG4gICAgICAgIGlmIChvdmVybGF5c1tpXSAmJiBvdmVybGF5c1tpXS5vdmVybGF5TmFtZSAmJiBkaWZmZXJlbmNlT2JqZWN0Lmxpc3QuaW5kZXhPZihvdmVybGF5c1tpXS5vdmVybGF5TmFtZSkgPiAtMSkge1xuICAgICAgICAgIGlmKG92ZXJsYXlzW2ldLmRlc3Ryb3lSZXNvdXJjZSkgb3ZlcmxheXNbaV0uZGVzdHJveVJlc291cmNlKCk7XG4gICAgICAgICAgbWFwLnJlbW92ZUxheWVyKG92ZXJsYXlzW2ldKTtcbiAgICAgICAgICBkZWxldGUgb3ZlcmxheXNfZGljdGlvbmFyeVtvdmVybGF5c1tpXS5vdmVybGF5TmFtZV07IC8vZGVsZXRlIGRpY3Rpb25hcnkgcmVmZXJlbmNlIGZvciBmYXN0ZXIgZmV0Y2hpbmcgaW4gVXBkYXRlRUNPU0RhdGFcbiAgICAgICAgICBkZWxldGUgb3ZlcmxheXNbaV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuXG4gIC8qKlxuICAgKiBXaGVuIHRoZSB0aGVtZSBsYWJlbCBzdGF0ZSBjaGFuZ2VzLCB0aGlzIGZ1bmN0aW9uIHdpbGwgYmUgZmlyZWQuXG4gICAqIEBwYXJhbSB0aGVtZVxuICAgKi9cbiAgZnVuY3Rpb24gb25UaGVtZUxhYmVsQ2hhbmdlZCgpIHtcblxuICAgIC8vRmluZCB0aGUgY3VycmVudCB0aGVtZSBsZXZlbCwgaWYgYW55XG4gICAgdmFyIGxldmVsID0gJHJvb3RTY29wZS5sZXZlbDsgLy9zZXQgaW4gZHJhd292ZXJsYXlzXG5cbiAgICBpZighbGV2ZWwpIHJldHVybjsgLy9ubyB0aGVtZVxuXG4gICAgdmFyIGxheWVyID0gb3ZlcmxheXNfZGljdGlvbmFyeVtcImdhZG1cIiArIGxldmVsXTtcblxuICAgIGlmIChsYXllcikge1xuICAgICAgcmVkcmF3VGhlbWVMYXllcnMobGF5ZXIpO1xuICAgIH1cblxuICB9XG5cbiAgLyoqXG4gICAqIFdoZW4gdGhlIHRoZW1lIGNoYW5nZXMsIHRoaXMgZnVuY3Rpb24gd2lsbCBiZSBmaXJlZC5cbiAgICogQHBhcmFtIHRoZW1lXG4gICAqL1xuICBmdW5jdGlvbiBvblRoZW1lQ2hhbmdlZCh0aGVtZSkge1xuXG4gICAgaWYoJHN0YXRlUGFyYW1zLnRoZW1lKXtcbiAgICAgIGZvcmNlR2FkbTAoKTtcbiAgICB9XG5cbiAgICAvL0ZpbmQgdGhlIGN1cnJlbnQgdGhlbWUgbGV2ZWwsIGlmIGFueVxuICAgIHZhciBsZXZlbCA9ICRyb290U2NvcGUubGV2ZWw7IC8vc2V0IGluIGRyYXdvdmVybGF5c1xuXG4gICAgaWYgKCFsZXZlbCkgcmV0dXJuOyAvL25vIHRoZW1lXG5cbiAgICB2YXIgbGF5ZXI7XG5cbiAgICBpZihsZXZlbCA9PSAtMSl7XG4gICAgICAvL0FyYyBSZWdpb25zXG4gICAgICBsYXllciA9IG92ZXJsYXlzX2RpY3Rpb25hcnlbXCJhcmNyZWdpb25zXCJdO1xuICAgIH1cbiAgICBlbHNle1xuICAgICAgLy9HYWRtXG4gICAgICBsYXllciA9IG92ZXJsYXlzX2RpY3Rpb25hcnlbXCJnYWRtXCIgKyBsZXZlbF07XG4gICAgfVxuXG5cbiAgICBpZiAobGF5ZXIpIHtcblxuICAgICAgaWYoJHN0YXRlUGFyYW1zLnRoZW1lLnRvTG93ZXJDYXNlKCkgPT09ICdub25lJyl7XG4gICAgICAgICAgLy9Ta2lwIHRoZSBtdW1ibyBqdW1iby4gIENsZWFyIHRoZSBjYWNoZWQgRUNPUyBkYXRhIGFuZCByZWRyYXcgZW1wdHlcbiAgICAgICAgICAkcm9vdFNjb3BlLnZ0RGF0YSA9IHt9O1xuICAgICAgICAgIHJlZHJhd1RoZW1lTGF5ZXJzKGxheWVyKTtcbiAgICAgIH1cbiAgICAgIGVsc2V7XG4gICAgICAgIC8vRm9yIHZlY3RvciB0aWxlIGNob3JvcGxldGhzLCBhc2sgZm9yIG5ldyBkYXRhIC5qc29uIGZyb20gdGhlIHNlcnZlclxuICAgICAgICBnZXRFQ09TUHJvcGVydGllcyhmdW5jdGlvbiAoZGF0YSkge1xuXG4gICAgICAgICAgaWYgKGRhdGEgJiYgZGF0YS5mZWF0dXJlcykge1xuXG4gICAgICAgICAgICB2YXIgZ3VpZHMgPSB7fTtcblxuICAgICAgICAgICAgYW5ndWxhci5mb3JFYWNoKGRhdGEuZmVhdHVyZXMsIGZ1bmN0aW9uIChkYXRhSXRlbSwgZGF0YUtleSkge1xuICAgICAgICAgICAgICBndWlkc1tkYXRhSXRlbS5wcm9wZXJ0aWVzLmd1aWRdID0gZGF0YUl0ZW0ucHJvcGVydGllcztcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAkcm9vdFNjb3BlLnZ0RGF0YSA9IGd1aWRzOyAvL1N0b3JlIHRoZSBkYXRhIHRvIGJlIG1lcmdlZCB3aXRoIHZlY3RvciB0aWxlIGxheWVyLiAgSW4gY29uZmlnL3ZlY3RvcnRpbGVzLmpzLCB0aGUgTVZUIGNob3JvcGxldGggbGF5ZXJzIHdpbGwgYXR0ZW1wdCB0byBtZXJnZSB0aGlzIGRhdGEgaW4gd2hlbiB0aWxlcyBmaW5pc2ggbG9hZGluZyAoYW55IHRpbWUgbmV3IHRpbGVzIGFyZSByZXF1ZXN0ZWQsIGxpa2Ugem9vbWluL291dC9wYW4pXG5cbiAgICAgICAgICAgIHJlZHJhd1RoZW1lTGF5ZXJzKGxheWVyKTtcblxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH1cblxuICAgIH1cblxuICB9XG5cblxuXG4gIGZ1bmN0aW9uIHJlZHJhd1RoZW1lTGF5ZXJzKGxheWVyKXtcbiAgICB2YXIgbGF5ZXJzID0gbGF5ZXIuZ2V0TGF5ZXJzKCk7XG5cbiAgICBpZiAoIWxheWVycykgcmV0dXJuOyAvL25vIGxheWVycyBoYXZlIGxvYWRlZCB5ZXQuICBUaGlzIG5lZWRzIHRvIHdhaXQgdW50aWwgc29tZSB0aWxlcyBoYXZlIGxvYWRlZC5cblxuICAgIHZhciB2dExheWVyO1xuICAgIHZhciB2dExhYmVsTGF5ZXI7XG5cbiAgICAvL1RPRE86IE1vdmUgdGhpcyBsb2dpYyB0byBhIHNpbmdsZSBsb2NhdGlvblxuXG4gICAgdnRMYXllciA9IGxheWVyc1tcIkdBRE1fMjAxNFwiXTtcbiAgICB2dExhYmVsTGF5ZXIgPSBsYXllcnNbXCJHQURNXzIwMTRfbGFiZWxcIl07XG5cblxuICAgIGlmKHZ0TGF5ZXIgJiYgdnRMYXllci5mZWF0dXJlcykge1xuICAgICAgLy9DbGVhciBlY29zIHByb3BlcnR5IGZyb20gTVZURmVhdHVyZVxuICAgICAgY2xlYXJGZWF0dXJlUHJvcGVydGllcyh2dExheWVyLmZlYXR1cmVzKTtcbiAgICAgIC8vQ2xlYXIgZWNvcyBwcm9wZXJ0eSBmcm9tIExhYmVsIExheWVyXG4gICAgICBjbGVhckZlYXR1cmVQcm9wZXJ0aWVzKHZ0TGFiZWxMYXllci5mZWF0dXJlcyk7XG5cblxuICAgICAgLy9VcGRhdGUgTGF5ZXIocykgc3R5bGUgYW5kIHJlZHJhd1xuICAgICAgdnRMYXllci5jbGVhckxheWVyRmVhdHVyZUhhc2goKTsgLy9Gb3JjZSBWVHMgdG8gYmUgcmVwYXJzZWQuXG4gICAgICB2dExhYmVsTGF5ZXIuY2xlYXJMYXllckZlYXR1cmVIYXNoKCk7XG4gICAgfVxuXG4gICAgLy9DbGVhciB0aGUgTVZUIGludGVybmFsIGxlZ2VuZCBvYmplY3QgYmVmb3JlIHJlZHJhd2luZ1xuICAgIGlmKHZ0TGF5ZXIpIHZ0TGF5ZXIuY2xlYXJMZWdlbmRPYmplY3QoKTtcbiAgICBpZih2dExhYmVsTGF5ZXIpIHZ0TGFiZWxMYXllci5jbGVhckxlZ2VuZE9iamVjdCgpO1xuXG4gICAgbGF5ZXIucmVkcmF3KHRydWUpOyAvL2ZhbHNlIG1lYW5zIHRoYXQgdGhpcyByZWRyYXcgd29uJ3QgdHJpZ2dlciB0aGUgb25UaWxlc0xvYWRlZCBldmVudC5cblxuICAgIC8vRmV0Y2ggdGhlIGxlZ2VuZCBhZnRlciByZWRyYXdcbiAgICAvL25lZWQgdG8gd2FpdCB1bnRpbCBhbGwgdGlsZXMgZmluaXNoIGRyYXdpbmdcbiAgICBsYXllci5vcHRpb25zLm9uVGlsZXNMb2FkZWQgPSBmdW5jdGlvbigpe1xuXG5cblxuICAgICAgaWYodnRMYXllcil7XG4gICAgICAgIHZhciBsZWdlbmRPYmplY3QgPSB2dExheWVyLmdldExlZ2VuZE9iamVjdCgpO1xuICAgICAgICBpZihsZWdlbmRPYmplY3Qpe1xuICAgICAgICAgIC8vc2V0IGl0IGVxdWFsIHRvIHRoZSBzY29wZVxuXG4gICAgICAgICAgJHNjb3BlLiRhcHBseShmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICRzY29wZS5sZWdlbmRPYmplY3QgPSBsZWdlbmRPYmplY3Q7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICB2YXIgbmV3TGVnZW5kT2JqZWN0ID0ge307XG4gICAgICAgICAgdmFyIE9OQSA9ICRzY29wZS5VTk9DSEFJY29uTG9va3VwO1xuXG4gICAgICAgICAgLy8gbG9vcCB0aHJvdWdoIGxlbmdlbmQgb2JqY2V0XG4gICAgICAgICAgLy8gYWRkIHRvIG5ldyBsZWdlbmQgb2JqZWN0IGlmOlxuICAgICAgICAgIC8vICAgIDEuIGxlZ2VuZCBvYmplY3QgaGFzIE9OQSBsb29rdXAgaWNvblxuICAgICAgICAgIC8vICAgIDIuIG5ldyBsZWdlbmQgb2JqZWN0IGRvZXNuJ3QgaGF2ZSBzYW1lIE9OQSBsb29rdXAgaWNvblxuXG5cbiAgICAgICAgICBmb3IodmFyIGk9MDtpPE9iamVjdC5rZXlzKGxlZ2VuZE9iamVjdCkubGVuZ3RoO2krKyl7XG4gICAgICAgICAgICBpZih0eXBlb2YgT05BW09iamVjdC5rZXlzKGxlZ2VuZE9iamVjdClbaV1dICE9PSAndW5kZWZpbmVkJyl7XG4gICAgICAgICAgICAgIGxlZ2VuZE9iamVjdFtPYmplY3Qua2V5cyhsZWdlbmRPYmplY3QpW2ldXS5pY29uID0gT05BW09iamVjdC5rZXlzKGxlZ2VuZE9iamVjdClbaV1dLmljb247XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZih0eXBlb2YgbGVnZW5kT2JqZWN0W09iamVjdC5rZXlzKGxlZ2VuZE9iamVjdClbaV1dLmljb24gIT09ICd1bmRlZmluZWQnKSB7XG5cbiAgICAgICAgICAgICAgaWYoT2JqZWN0LmtleXMobmV3TGVnZW5kT2JqZWN0KS5sZW5ndGg9PTApe1xuICAgICAgICAgICAgICAgIG5ld0xlZ2VuZE9iamVjdFtPYmplY3Qua2V5cyhsZWdlbmRPYmplY3QpW2ldXSA9IGxlZ2VuZE9iamVjdFtPYmplY3Qua2V5cyhsZWdlbmRPYmplY3QpW2ldXTtcbiAgICAgICAgICAgICAgfSBlbHNle1xuXG4gICAgICAgICAgICAgICAgZm9yKHZhciB4PTA7eDxPYmplY3Qua2V5cyhuZXdMZWdlbmRPYmplY3QpLmxlbmd0aDt4Kyspe1xuICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXMobGVnZW5kT2JqZWN0KS5mb3JFYWNoKGZ1bmN0aW9uKHZhbCl7XG4gICAgICAgICAgICAgICAgICAgIGlmKG5ld0xlZ2VuZE9iamVjdFtPYmplY3Qua2V5cyhuZXdMZWdlbmRPYmplY3QpW3hdXS5pY29uLmluZGV4T2YobGVnZW5kT2JqZWN0W3ZhbF0uaWNvbik9PS0xKXtcbiAgICAgICAgICAgICAgICAgICAgICBuZXdMZWdlbmRPYmplY3RbT2JqZWN0LmtleXMobGVnZW5kT2JqZWN0KVtpXV0gPSBsZWdlbmRPYmplY3RbT2JqZWN0LmtleXMobGVnZW5kT2JqZWN0KVtpXV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG5cblxuICAgICAgICAgICRzY29wZS5uZXdMZWdlbmRPYmplY3QgPSBuZXdMZWdlbmRPYmplY3Q7XG5cbiAgICAgICAgICAvLyBicm9hZGNhc3QgbGVnZW5kIHdpZHRoIGZvciByZXNpemVcbiAgICAgICAgICBpZigkc3RhdGVQYXJhbXMudGhlbWUgPT0gJ2Rpc2FzdGVyVHlwZScpe1xuICAgICAgICAgICAgJHNjb3BlLmZpcnN0T2JqZWN0ID0gbGVnZW5kT2JqZWN0W09iamVjdC5rZXlzKGxlZ2VuZE9iamVjdClbMF1dO1xuICAgICAgICAgICAgdmFyIGxlZ2VuZFdpZHRoID0ge3dpZHRoOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGVnZW5kJykub2Zmc2V0V2lkdGh9O1xuICAgICAgICAgICAgbGVnZW5kV2lkdGguZm9sZCA9IChPYmplY3Qua2V5cyhsZWdlbmRPYmplY3QpLmxlbmd0aCA+IDIpO1xuICAgICAgICAgICAgJHJvb3RTY29wZS4kYnJvYWRjYXN0KCdsZWdlbmQtd2lkdGgnLCBsZWdlbmRXaWR0aCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJHNjb3BlLnRoZW1lTGFiZWwgPSAkcm9vdFNjb3BlLnRoZW1lTmFtZUhhc2hbJHN0YXRlUGFyYW1zLnRoZW1lXTtcbiAgICAgICAgICAvLyRzY29wZS5sZWdlbmRPYmplY3RMYWJlbCA9IGxlZ2VuZE9iamVjdFtPYmplY3Qua2V5cyhsZWdlbmRPYmplY3QpWzBdXS5sZWdlbmRMYWJlbC5yZXBsYWNlKFwiI1wiLFwiXCIpOyAvL3JlbW92ZSAnIydcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZih2dExhYmVsTGF5ZXIpe1xuICAgICAgICB2YXIgYnViYmxlTGVnZW5kT2JqZWN0ID0gdnRMYWJlbExheWVyLmdldExlZ2VuZE9iamVjdCgpO1xuICAgICAgICBpZihidWJibGVMZWdlbmRPYmplY3Qpe1xuICAgICAgICAgIC8vc2V0IGl0IGVxdWFsIHRvIHRoZSBzY29wZVxuICAgICAgICAgIGlmKCRzdGF0ZVBhcmFtcy50aGVtZS50b0xvd2VyQ2FzZSgpID09IFwiZGlzYXN0ZXJ0eXBlXCIpe1xuICAgICAgICAgICAgLy9EaXNhc3RlciB0eXBlIGhhcyBkaWZmZXJlbnQgYnViYmxlIGltYWdlc1xuICAgICAgICAgICAgJHNjb3BlLmJ1YmJsZUxlZ2VuZE9iamVjdCA9IGJ1YmJsZUxlZ2VuZE9iamVjdDtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIC8vT3RoZXIgdGhlbWVzIHVzZSB0aGUgc2FtZSBidWJibGUgdHlwZS5cbiAgICAgICAgICAgIC8vU28ganVzdCBncmFiIHRoZSBmaXJzdCBvbmVcbiAgICAgICAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMoYnViYmxlTGVnZW5kT2JqZWN0KTtcbiAgICAgICAgICAgIGlmKGJ1YmJsZUxlZ2VuZE9iamVjdFtrZXlzWzBdXSAmJiBidWJibGVMZWdlbmRPYmplY3Rba2V5c1swXV0ub3B0aW9ucyAmJiBidWJibGVMZWdlbmRPYmplY3Rba2V5c1swXV0ub3B0aW9ucy5odG1sKXtcbiAgICAgICAgICAgICAgJHNjb3BlLnNpbmdsZUJ1YmJsZU9iamVjdCA9ICRzY2UudHJ1c3RBc0h0bWwoYnViYmxlTGVnZW5kT2JqZWN0W2tleXNbMF1dLm9wdGlvbnMuaHRtbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cblxuICAgIH1cbiAgfVxuXG5cbiAgLyoqXG4gICAqIFdoZW4gdGhlIGZpbHRlcnMgY2hhbmdlLCB0aGlzIGZ1bmN0aW9uIHdpbGwgYmUgZmlyZWQuXG4gICAqIEBwYXJhbSB0aGVtZVxuICAgKi9cbiAgZnVuY3Rpb24gb25GaWx0ZXJzQ2hhbmdlZChmaWx0ZXJzKXtcblxuICB9XG5cbiAgLyoqXG4gICAqIEZvcmNlIGdhZG0wIG9uIGFsbCBkaXNhc3RlciB0aGVtZXNcbiAgICogQHBhcmFtIHRoZW1lXG4gICAqL1xuICBmdW5jdGlvbiBmb3JjZUdhZG0wKCl7XG4gICAgLy92YXIgdGhlbWUgPSAkc3RhdGVQYXJhbXMudGhlbWU7XG4gICAgLy9cbiAgICAvL2lmKHRoZW1lLmluZGV4T2YoJ2Rpc2FzdGVyJykhPT0tMSAmJiAkc3RhdGVQYXJhbXMubGF5ZXJzLnNwbGl0KFwiLFwiKVsxXSAhPT0gJ2dhZG0wJyl7XG4gICAgLy8gIHZhciBsYXllcnNBcnJheTtcbiAgICAvL1xuICAgIC8vICBpZigkc3RhdGVQYXJhbXMubGF5ZXJzKXtcbiAgICAvLyAgICBsYXllcnNBcnJheSA9ICRzdGF0ZVBhcmFtcy5sYXllcnMuc3BsaXQoXCIsXCIpO1xuICAgIC8vICB9XG4gICAgLy9cbiAgICAvLyAgLy9SZW1vdmUgYWxsIEdBRE0gbGF5ZXJzLlxuICAgIC8vICBsYXllcnNBcnJheS5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XG4gICAgLy8gICAgaWYgKExheWVyQ29uZmlnLnRoZW1lTGF5ZXJzLmluZGV4T2YodmFsdWUpID4gLTEpIHtcbiAgICAvLyAgICAgIGxheWVyc0FycmF5LnNwbGljZShsYXllcnNBcnJheS5pbmRleE9mKHZhbHVlKSwgMSk7IC8vcmVtb3ZlIGFueSBHQURNc1xuICAgIC8vICAgIH1cbiAgICAvLyAgfSk7XG4gICAgLy9cbiAgICAvLyAgLy9BZGQgaW4gdGhlIGdhZG0gbGF5ZXIgdG8gdGhlIGxheWVycyBsaXN0IGluIHRoZSBzdGF0ZXBhcmFtcy5cbiAgICAvLyAgbGF5ZXJzQXJyYXkucHVzaChcImdhZG0wXCIpO1xuICAgIC8vICAkc3RhdGVQYXJhbXMubGF5ZXJzID0gbGF5ZXJzQXJyYXkuam9pbihcIixcIik7XG4gICAgLy9cbiAgICAvLyAgdmFyIHN0YXRlID0gJHN0YXRlLmN1cnJlbnQubmFtZSB8fCAnbWFpbic7XG4gICAgLy8gICRzdGF0ZS5nbyhzdGF0ZSwgJHN0YXRlUGFyYW1zKTtcbiAgICAvL31cblxuICB9XG5cbiAgZnVuY3Rpb24gcmVkcmF3TWFwT3ZlcmxheXMobGF5ZXJOYW1lcyl7XG4gICAgbWFwLmVhY2hMYXllcihmdW5jdGlvbiAobGF5ZXIpIHtcbiAgICAgIGlmKGxheWVyTmFtZXMuaW5kZXhPZihsYXllci5vdmVybGF5TmFtZSkgPiAtMSl7XG4gICAgICAgIGxheWVyLnJlZHJhdygpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFRha2UgZGF0YS9wcm9wZXJ0aWVzIGZyb20gdGhlIHNlcnZlciBhbmQgbWVyZ2UgdGhlbSBpbiB3aXRoIGEgdmVjdG9yIHRpbGVzIGxheWVyLlxuICAgKiBAcGFyYW0gZWNvc0RhdGEgLSB0aGUgZGF0YVxuICAgKiBAcGFyYW0gbGF5ZXJOYW1lcyAtIGFueSBsYXllciBuYW1lcyB0byBhcHBseSB0aGUgZGF0YSB0b1xuICAgKiBAbmV3VGhlbWUgLSBib29sZWFuLiBJZiB0cnVlLCBhIG5ldyB0aGVtZSBoYXMgYmVlbiBzZWxlY3RlZCwgc28gZXhpc3RpbmcgVlQgcHJvcGV0aWVzIHdpbGwgYmUgY2xlYXJlZC4gIElmIGZhbHNlLCB0aGVuIHdlIGNhbiBza2lwIGZlYXR1cmVzIHRoYXQgYWxyZWFkeSBoYXZlIGJlZW4gJ2ZpbGxlZCcgYW5kIHdvcnJ5IGFib3V0IG5ldyBvbmVzLlxuICAgKi9cbiAgZnVuY3Rpb24gdXBkYXRlRUNPU0RhdGEoZWNvc0RhdGEsIG5ld1RoZW1lKSB7XG5cbiAgICAgIHZhciBsYXllciA9IG92ZXJsYXlzX2RpY3Rpb25hcnlbXCJnYWRtMFwiXTtcblxuICAgICAgaWYobGF5ZXIpe1xuICAgICAgICBpZiAoZWNvc0RhdGEpIHtcbiAgICAgICAgICB2YXIgbGF5ZXJzID0gbGF5ZXIuZ2V0TGF5ZXJzKCk7XG5cbiAgICAgICAgICAvL1VwZGF0ZSBWVEZTb3VyY2UgZmlsdGVyXG4gICAgICAgICAgLy9sYXllci5zZXRGaWx0ZXIoZnVuY3Rpb24obXZ0LCBjdHgpe1xuICAgICAgICAgIC8vICAvL0ZpbHRlciBjaGVja3MgaWYgZmVhdHVyZSBoYXMgZWNvcyBwcm9wZXJ0aWVzLlxuICAgICAgICAgIC8vICByZXR1cm4gKCRyb290U2NvcGUudnREYXRhICYmICRyb290U2NvcGUudnREYXRhW212dC5wcm9wZXJ0aWVzLmd1aWRdKSA/IHRydWUgOiBmYWxzZTtcbiAgICAgICAgICAvL30pXG5cbiAgICAgICAgICAvL0lmIGFueSBmZWF0dXJlcyBhcmUgcmV0dXJuZWQsIGxvb3AgdGhydSB0aGUgdnRmcyBhbmQgYXBwbHkgdGhlc2UgdmFsdWVzLCByZXN0eWxlLlxuICAgICAgICAgIG1lcmdlRUNPU1Byb3BlcnRpZXMobGF5ZXJzLCBlY29zRGF0YSwgbmV3VGhlbWUpO1xuXG5cblxuICAgICAgICAgIC8vVXBkYXRlIExheWVyKHMpIHN0eWxlIGFuZCByZWRyYXdcbiAgICAgICAgICBsYXllci5zZXRTdHlsZShsYXllci5zdHlsZSk7IC8vZmVlZCBiYWNrIGluIHRoZSBzYW1lIHN0eWxlXG4gICAgICAgICAgbGF5ZXIucmVkcmF3KGZhbHNlKTsgLy9mYWxzZSBtZWFucyB0aGF0IHRoaXMgcmVkcmF3IHdvbid0IHRyaWdnZXIgdGhlIG9uVGlsZXNMb2FkZWQgZXZlbnQuXG4gICAgICAgIH1cbiAgICAgIH1cblxuICB9XG5cbiAgLyoqKlxuICAgKlxuICAgKiBXaGVuIHRoZSBhcHAgc3RhcnRzLCBvciB3aGVuIHRoZSBmaWx0ZXJzIGNoYW5nZSwgZmV0Y2ggdGhlIC5qc29uIGZpbGUgdGhhdCBjb250YWlucyB0aGUgY291bnRzIGZvciBhbGwgb2YgdGhlIGRpc3RyaWN0cyBmb3IgYSBnaXZlbiBBZG1pbmlzdHJhdGl2ZSBib3VuZGFyeSBsZXZlbFxuICAgKiBDdXJyZW50bHksIGVhY2ggb2YgdGhlc2UgZmlsZXMgd2lsbCBiZSBzbWFsbCBlbm91Z2ggdG8gYnVsayBsb2FkIHRoZW0gYSBzaW5nbGUgdGltZSwgYXMgb3Bwb3NlZCB0byB3aGVuIHRoZSB1c2VyIHBhbnMgdGhlIG1hcC5cbiAgICogVGhlc2UgZmlsZXMgd2lsbCBiZSB1c2VkIHRvIHVwZGF0ZSB0aGUgdmVjdG9yIHRpbGVzIGNob3JvcGxldGggbWFwLlxuICAgKlxuICAgKiBAcGFyYW0gJGh0dHBcbiAgICogQHBhcmFtICRyb290U2NvcGVcbiAgICogQHBhcmFtIGNiXG4gICAqL1xuICBmdW5jdGlvbiBnZXRFQ09TUHJvcGVydGllcyAoY2Ipe1xuICAgIC8vVGhpcyBzaG91bGQgZmV0Y2ggZGF0YSBmcm9tIHRoZSBzZXJ2ZXIgdGhhdCBwZXJ0YWlucyB0byB0aGUgZmVhdHVyZXMgbG9hZGVkIGluIHRoZSBjdXJyZW50IGV4dGVudC5cbiAgICAvL3ZhciB1cmwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9zZXJ2aWNlcy9jdXN0b20vY3VzdG9tX29wZXJhdGlvbj9uYW1lPWdldGFnZ3JlZ2F0ZWR0aGVtZWZlYXR1cmVzYnlleHRlbnQmZm9ybWF0PWdlb2pzb24mYmJveD06YmJveCZ0aGVtZT06dGhlbWUmZ2FkbV9sZXZlbD0wJmZpbHRlcnM9OmZpbHRlcnNcIjtcblxuICAgIHZhciBsZXZlbCA9ICRyb290U2NvcGUubGV2ZWw7XG5cbiAgICBpZiAoIWxldmVsKSByZXR1cm47IC8vZXhpdCBpZiBubyBsZXZlbFxuXG4gICAgdmFyIHVybCA9IFwiLi4vc2VydmljZXMvY3VzdG9tL2N1c3RvbV9vcGVyYXRpb24/bmFtZT1nZXRhbGxhZ2dyZWdhdGVkdGhlbWVmZWF0dXJlcyZmb3JtYXQ9Z2VvanNvbiZ0aGVtZT06dGhlbWUmZ2FkbV9sZXZlbD1cIiArIGxldmVsICsgXCImZmlsdGVycz06ZmlsdGVyc1wiO1xuXG4gICAgaWYgKCRyb290U2NvcGUuJHN0YXRlUGFyYW1zLmZpbHRlcnMpIHtcbiAgICAgIGZpbHRlcnMgPSAkcm9vdFNjb3BlLiRzdGF0ZVBhcmFtcy5maWx0ZXJzO1xuICAgICAgLy9BZGQgZmlsdGVycyB0byBVUkwuXG4gICAgICB1cmwgPSB1cmwucmVwbGFjZShcIjpmaWx0ZXJzXCIsIGZpbHRlcnMpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHVybCA9IHVybC5yZXBsYWNlKFwiJmZpbHRlcnM9OmZpbHRlcnNcIiwgXCJcIik7IC8vbm8gZmlsdGVycy4gIFJlbW92ZVxuICAgIH1cblxuICAgIHZhciB0aGVtZSA9ICRyb290U2NvcGUuJHN0YXRlUGFyYW1zLnRoZW1lIHx8ICdwcm9qZWN0JztcbiAgICB1cmwgPSB1cmwucmVwbGFjZShcIjp0aGVtZVwiLCB0aGVtZSk7XG5cbiAgICAvL1doZW4gZG9uZSwgY2FsbCB0aGUgY2IgKGNhbGxiYWNrKSBmdW5jdGlvblxuICAgICRodHRwLmdldCh1cmwsIHtjYWNoZTogdHJ1ZX0pLnN1Y2Nlc3MoY2IpLmVycm9yKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiZXJyXCIpO1xuICAgIH0pO1xuICB9XG5cbiAgLy9UYWtlIGFuIE1WVExheWVyKHMpIGFuZCBhZGQgaW4gcHJvcGVydGllcyBmcm9tIGEgd2ViIHNlcnZpY2UgY2FsbFxuICAvL25ld1RoZW1lIGlzIGEgYm9vbGVhbiB0aGF0IHRlbGxzIHVzIHdoZXRoZXIgdG8gY2xlYXIgZXhpc3RpbmcgcHJvcGVydGllcyBvciBrZWVwIHdoYXQgd2UndmUgZ290IGFuZCBqdXN0IGFkZCB0byB0aGUgc2V0LlxuICBmdW5jdGlvbiBtZXJnZUVDT1NQcm9wZXJ0aWVzKE1WVExheWVycywgZGF0YSwgbmV3VGhlbWUpe1xuICAgIGlmIChNVlRMYXllcnMpIHtcblxuICAgICAgdmFyIGZ1bGxTdGFydCA9IG5ldyBEYXRlKCk7XG5cbiAgICAgIC8vR3JhYiB0aGUgY3VycmVudCB0aGVtZS5cbiAgICAgIHZhciB0aGVtZSA9ICgkcm9vdFNjb3BlICYmICRyb290U2NvcGUuJHN0YXRlUGFyYW1zICYmICRyb290U2NvcGUuJHN0YXRlUGFyYW1zLnRoZW1lKSB8fCAncHJvamVjdCc7XG5cbiAgICAgIGZvciAodmFyIGxheWVyIGluIE1WVExheWVycykge1xuICAgICAgICBpZiAobGF5ZXIgJiYgTVZUTGF5ZXJzW2xheWVyXS5mZWF0dXJlcykge1xuXG4gICAgICAgICAgLy9vcHRpb25hbGx5IGNsZWFyIG91dCBvbGQgRUNPUyBwcm9wZXJ0aWVzLlxuICAgICAgICAgIGlmIChuZXdUaGVtZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgLy9DbGVhciBlY29zIHByb3BlcnR5IGZyb20gTVZURmVhdHVyZVxuICAgICAgICAgICAgY2xlYXJGZWF0dXJlUHJvcGVydGllcyhNVlRMYXllcnNbbGF5ZXJdLmZlYXR1cmVzKTtcbiAgICAgICAgICAgIC8vXCJ1bmxpbmtcIiB0aGUgZGF0YSAtIHNldCB0aGUgbGlua2VkIHByb3BlcnR5IHRvIGZhbHNlLlxuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vSXRlcmF0ZSBvdmVyIGRhdGEsIHVzZSB0aGUgSUQgdG8gYXR0ZW1wdCB0byBsaW5lIHVwIGRhdGEgaW4gTVZUTGF5ZXIuZmVhdHVyZXMgZGljdGlvbmFyeSAoaWQgaXMgdGhlIGtleSlcbiAgICAgICAgICBhbmd1bGFyLmZvckVhY2goT2JqZWN0LmtleXMoZGF0YSksIGZ1bmN0aW9uIChrZXkpIHsgLy8ubWFwKGZ1bmN0aW9uKGl0ZW0peyByZXR1cm4gIWl0ZW0ucHJvcGVydGllcy5pc01hcHBlZDsgfSlcbiAgICAgICAgICAgIHZhciB2dGYgPSBNVlRMYXllcnNbbGF5ZXJdLmZlYXR1cmVzW2tleV07XG5cbiAgICAgICAgICAgIC8vbWFyayBhcyBsaW5rZWRcbiAgICAgICAgICAgIGRhdGEuaXNMaW5rZWQgPSB0cnVlO1xuXG4gICAgICAgICAgICBpZiAodnRmKSB7XG4gICAgICAgICAgICAgIHZ0Zi5wcm9wZXJ0aWVzLnRoZW1lID0gdGhlbWU7XG4gICAgICAgICAgICAgIHZ0Zi5wcm9wZXJ0aWVzLmVjb3NfcHJvcGVydGllcyA9IHt9O1xuICAgICAgICAgICAgICB2dGYucHJvcGVydGllcy5lY29zX3Byb3BlcnRpZXNbdGhlbWVdID0gZGF0YVtrZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIG1zRGlmZiA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gbmV3IERhdGUoZnVsbFN0YXJ0KS5nZXRUaW1lKCk7IC8vRGlmZmVyZW5jZSBpbiBtc1xuICAgICAgY29uc29sZS5sb2coXCJNZXJnZSBUaW1lOiBcIiArIG1zRGlmZik7XG4gICAgfVxuICB9XG5cbiAgLy9BcyB3ZSBzd2FwIEVDT1MgcHJvcGVydGllcyBvdXQgb24gdGhlIHZlY3RvciB0aWxlIGxheWVyLCBjbGVhciBvdXQgdGhlIG9sZCBwcm9wZXJ0aWVzIHNvIHdlIGRvbid0IGdldCByZXNpZHVhbCB0aGVtZSB2YWx1ZXMgZnJvbSBvbGQgdGhlbWVzLlxuICBmdW5jdGlvbiBjbGVhckZlYXR1cmVQcm9wZXJ0aWVzKGZlYXR1cmVzKXtcblxuICAgIGFuZ3VsYXIuZm9yRWFjaChmZWF0dXJlcywgZnVuY3Rpb24gKHZ0ZiwgdnRma2V5KSB7XG4gICAgICBpZih2dGYucHJvcGVydGllcykge1xuICAgICAgICB2dGYucHJvcGVydGllcy5lY29zX3Byb3BlcnRpZXMgPSB7fTtcbiAgICAgICAgdnRmLnRoZW1lID0gXCJcIjtcbiAgICAgIH1cblxuICAgICAgLy9SZW1vdmUgT2xkIGxhYmVsc1xuICAgICAgdnRmLnJlbW92ZUxhYmVsKCk7XG5cbiAgICB9KTtcblxuICB9XG5cblxuICB2YXIgb3BhY2l0eSA9IDAuNTtcbiAgJHNjb3BlLlVOT0NIQUljb25Mb29rdXAgPSB7XG5cbiAgICBcIk1ldGVvcm9sb2dpY2FsIC0gVHJvcGljYWwgQ3ljbG9uZVwiOiB7aWNvbjogXCJpY29uLWRpc2FzdGVyX2N5Y2xvbmVcIiwgY29sb3I6IFwicmdiYSgyNTUsMCwwLFwiICsgb3BhY2l0eSArIFwiKVwifSxcbiAgICBcIkZsb29kc1wiOiB7aWNvbjogXCJpY29uLWRpc2FzdGVyX2Zsb29kXCIsIGNvbG9yOiBcInJnYmEoMjU1LDAsMCxcIiArIG9wYWNpdHkgKyBcIilcIn0sXG4gICAgXCJUc3VuYW1pLCBWb2xjYW5vXCI6IHtpY29uOiBcImljb24tZGlzYXN0ZXJfdHN1bmFtaVwiLCBjb2xvcjogXCJyZ2JhKDI1NSwwLDAsXCIgKyBvcGFjaXR5ICsgXCIpXCJ9LFxuICAgIFwiRmxvb2RzLCBTdG9ybVwiOiB7aWNvbjogXCJpY29uLWRpc2FzdGVyX2Zsb29kXCIsIGNvbG9yOiBcInJnYmEoMjU1LDAsMCxcIiArIG9wYWNpdHkgKyBcIilcIn0sXG4gICAgXCJUc3VuYW1pXCI6IHtpY29uOiBcImljb24tZGlzYXN0ZXJfdHN1bmFtaVwiLCBjb2xvcjogXCJyZ2JhKDI1NSwwLDAsXCIgKyBvcGFjaXR5ICsgXCIpXCJ9LFxuICAgIFwiRmFtaW5lIC8gRm9vZCBJbnNlY3VyaXR5XCI6IHtpY29uOiBcImljb24tY2x1c3Rlcl9mb29kX3NlY3VyaXR5XCIsIGNvbG9yOiBcInJnYmEoMjU1LDAsMCxcIiArIG9wYWNpdHkgKyBcIilcIn0sXG4gICAgXCJEcm91Z2h0XCI6IHtpY29uOiBcImljb24tZGlzYXN0ZXJfZHJvdWdodFwiLCBjb2xvcjogXCJyZ2JhKDI1NSwwLDAsXCIgKyBvcGFjaXR5ICsgXCIpXCJ9LFxuICAgIFwiTWV0ZW9yb2xvZ2ljYWwgLSBUcm9waWNhbCBDeWNsb25lO0h5ZHJvbG9naWNhbCAtIEZsb29kc1wiOiB7aWNvbjogXCJpY29uLWRpc2FzdGVyX2N5Y2xvbmVcIiwgY29sb3I6IFwicmdiYSgyNTUsMCwwLFwiICsgb3BhY2l0eSArIFwiKVwifSxcbiAgICBcIkZvb2QgSW5zZWN1cml0eVwiOiB7aWNvbjogXCJpY29uLWNsdXN0ZXJfZm9vZF9zZWN1cml0eVwiLCBjb2xvcjogXCJyZ2JhKDI1NSwwLDAsXCIgKyBvcGFjaXR5ICsgXCIpXCJ9LFxuICAgIFwiQ2l2aWwgVW5yZXN0XCI6IHtpY29uOiBcImljb24tcGVvcGxlX3JlYmVsXCIsIGNvbG9yOiBcInJnYmEoMjU1LDAsMCxcIiArIG9wYWNpdHkgKyBcIilcIn0sXG4gICAgXCJGbG9vZHMsIFRyb3BpY2FsIFN0b3JtXCI6IHtpY29uOiBcImljb24tZGlzYXN0ZXJfZmxvb2RcIiwgY29sb3I6IFwicmdiYSgyNTUsMCwwLFwiICsgb3BhY2l0eSArIFwiKVwifSxcbiAgICBcIkNvbXBsZXggRW1lcmdlbmN5XCI6IHtpY29uOiBcImljb24tY3Jpc2lzX2NvbmZsaWN0XCIsIGNvbG9yOiBcInJnYmEoMjU1LDAsMCxcIiArIG9wYWNpdHkgKyBcIilcIn0sXG4gICAgXCJFcGlkZW1pY1wiOiB7aWNvbjogXCJpY29uLWRpc2FzdGVyX2VwaWRlbWljXCIsIGNvbG9yOiBcInJnYmEoMjU1LDAsMCxcIiArIG9wYWNpdHkgKyBcIilcIn0sXG4gICAgXCJQb3B1bGF0aW9uIE1vdmVtZW50XCI6IHtpY29uOiBcImljb24tY3Jpc2lzX3BvcHVsYXRpb25fZGlzcGxhY2VtZW50XCIsIGNvbG9yOiBcInJnYmEoMjU1LDAsMCxcIiArIG9wYWNpdHkgKyBcIilcIn0sXG4gICAgXCJDbGltYXRvbG9naWNhbCAtIERyb3VnaHRcIjoge2ljb246IFwiaWNvbi1kaXNhc3Rlcl9kcm91Z2h0XCIsIGNvbG9yOiBcInJnYmEoMjU1LDAsMCxcIiArIG9wYWNpdHkgKyBcIilcIn0sXG4gICAgXCJXaW50ZXIgU3Rvcm1cIjoge2ljb246IFwiaWNvbi1kaXNhc3Rlcl9zbm93ZmFsbFwiLCBjb2xvcjogXCJyZ2JhKDI1NSwwLDAsXCIgKyBvcGFjaXR5ICsgXCIpXCJ9LFxuICAgIFwiVHJvcGljYWwgU3Rvcm1cIjoge2ljb246IFwiaWNvbi1kaXNhc3Rlcl9oZWF2eV9yYWluXCIsIGNvbG9yOiBcInJnYmEoMjU1LDAsMCxcIiArIG9wYWNpdHkgKyBcIilcIn0sXG4gICAgXCJFYXJ0aHF1YWtlLCBUc3VuYW1pXCI6IHtpY29uOiBcImljb24tZGlzYXN0ZXJfZWFydGhxdWFrZVwiLCBjb2xvcjogXCJyZ2JhKDI1NSwwLDAsXCIgKyBvcGFjaXR5ICsgXCIpXCJ9LFxuICAgIFwiSHlkcm9sb2dpY2FsIC0gRmxvb2RzXCI6IHtpY29uOiBcImljb24tZGlzYXN0ZXJfZmxvb2RcIiwgY29sb3I6IFwicmdiYSgyNTUsMCwwLFwiICsgb3BhY2l0eSArIFwiKVwifSxcbiAgICBcIkxhbmRzbGlkZTtGbG9vZHNcIjoge2ljb246IFwiaWNvbi1kaXNhc3Rlcl9sYW5kc2xpZGVcIiwgY29sb3I6IFwicmdiYSgyNTUsMCwwLFwiICsgb3BhY2l0eSArIFwiKVwifSxcbiAgICBcIkVhcnRocXVha2VcIjoge2ljb246IFwiaWNvbi1kaXNhc3Rlcl9lYXJ0aHF1YWtlXCIsIGNvbG9yOiBcInJnYmEoMjU1LDAsMCxcIiArIG9wYWNpdHkgKyBcIilcIn0sXG4gICAgXCJMYW5kc2xpZGU7SHlkcm9sb2dpY2FsIC0gRmxvb2RzXCI6IHtpY29uOiBcImljb24tZGlzYXN0ZXJfbGFuZHNsaWRlXCIsIGNvbG9yOiBcInJnYmEoMjU1LDAsMCxcIiArIG9wYWNpdHkgKyBcIilcIn1cblxuICB9XG5cblxuICAvL0FkZCBhIGxlYWZsZXQgY29udHJvbCB0byB0aGUgbWFwIGNvbnRhaW5lciB0aGF0IHJlZnJlc2hlcyB0aGUgc3RhdGUgb2YgdGhlIGFwcFxuICBmdW5jdGlvbiBhZGRSZWZyZXNoTWFwQ29udHJvbCgpe1xuXG4gICAgTC5lYXN5QnV0dG9uKCdnbHlwaGljb24gZ2x5cGhpY29uLXJlZnJlc2gnLCAvL0NzcyBjbGFzc1xuICAgICAgZnVuY3Rpb24gKCl7IH0sIC8vb25DbGljayBmdW5jdGlvblxuICAgICAgJ1Jlc2V0IEFwcCcsIC8vVGl0bGVcbiAgICAgIG1hcCwgLy9tYXAgY29udHJvbCByZWZcbiAgICAgICdidG5SZXNldE1hcCcsIC8vaWRcbiAgICAgICcvbWFwZm9saW8vIy9kZWZhdWx0JyAvL2EgaHJlZiAob3B0aW9uYWwpXG4gICAgKVxuXG4gIH1cblxufSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdHZW9Bbmd1bGFyJykuY29udHJvbGxlcignTmF2QmFyQ3RybCcsIGZ1bmN0aW9uKCRzY29wZSwgJHN0YXRlLCAkc3RhdGVQYXJhbXMsICRyb290U2NvcGUpIHtcblxuICAkc2NvcGUucGFyYW1zID0gJHN0YXRlUGFyYW1zO1xuICAkc2NvcGUuZnVsbHNjcmVlbiA9IGZhbHNlO1xuXG4gIC8vSWYgc3RhdGVQYXJhbXMuZnVsbFNjcmVlbj10cnVlLCB0aGVuIGFwcGx5IGEgY2xhc3MgdG8gdGhlIEhUTUwgYm9keSBjYWxsZWQgLmZ1bGxTY3JlZW5cblxuICAkc2NvcGUudG9nZ2xlRnVsbFNjcmVlbiA9IGZ1bmN0aW9uKCl7XG4gICAgICAvL1NldCB0aGUgc3RhdGVQYXJhbSB0byBmdWxsc2NyZWVuPXRydWVcbiAgICAkc2NvcGUuZnVsbHNjcmVlbiA9ICEkc2NvcGUuZnVsbHNjcmVlbjtcbiAgICAkc3RhdGVQYXJhbXMuZnVsbHNjcmVlbiA9ICRzY29wZS5mdWxsc2NyZWVuO1xuICAgIHZhciBzdGF0ZSA9ICRzdGF0ZS5jdXJyZW50Lm5hbWUgfHwgJ21haW4nO1xuICAgICRzdGF0ZS5nbyhzdGF0ZSwgJHN0YXRlUGFyYW1zKTtcbiAgfVxuXG5cbiAgJHJvb3RTY29wZS4kb24oJ2Z1bGxzY3JlZW4tY2hhbmdlZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAvL0lmIHRoZSBmdWxsc2NyZWVuIHN0YXRlIGNoYW5nZXMuXG4gICAgaWYoJHN0YXRlUGFyYW1zLmZ1bGxzY3JlZW4gPT0gXCJ0cnVlXCIpe1xuICAgICAgJHNjb3BlLmZ1bGxzY3JlZW4gID0gdHJ1ZTtcbiAgICB9ZWxzZXtcbiAgICAgICRzY29wZS5mdWxsc2NyZWVuICA9IGZhbHNlO1xuICAgIH1cblxuICB9KTtcblxuXG5cbn0pO1xuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IFJ5YW4gV2hpdGxleSA8cndoaXRsZXlAc3BhdGlhbGRldi5jb20+XG4gKiAgICAgICBvbiA1LzIxLzE0LlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ0dlb0FuZ3VsYXInKS5jb250cm9sbGVyKCdTZWFyY2hFQ09TQ3RybCcsIGZ1bmN0aW9uKCRzY29wZSwgJHJvb3RTY29wZSwgJHN0YXRlUGFyYW1zLCAkaHR0cCwgVmVjdG9yUHJvdmlkZXIpIHtcbiAgJHNjb3BlLnBhcmFtcyA9ICRzdGF0ZVBhcmFtcztcblxuICB2YXIgdXJsID0gY29uZmlnLmNodWJic1BhdGgoJ3NlcnZpY2VzL2N1c3RvbS9jdXN0b21fb3BlcmF0aW9uP25hbWU9ZG9lY29zdGV4dHNlYXJjaCZmb3JtYXQ9anNvbiZ0ZXh0PTp0ZXh0Jyk7XG5cbiAgJHNjb3BlLnNlYXJjaFRleHQgPSAnJztcbiAgJHNjb3BlLiR3YXRjaCgnU2VhcmNoSW5wdXQnLCBleGVjdXRlRUNPU1NlYXJjaCwgdHJ1ZSk7XG5cblxuICBmdW5jdGlvbiBleGVjdXRlRUNPU1NlYXJjaCAodGV4dCl7XG4gICAgICBpZighdGV4dCB8fCB0ZXh0Lmxlbmd0aCA8IDMpIHJldHVybjtcblxuICAgICAgdmFyIHRoaXNVUkwgPSB1cmwucmVwbGFjZShcIjp0ZXh0XCIsIHRleHQpO1xuXG4gICAgICAvLyBGZXRjaCBmcm9tIHRoZSBzZXJ2ZXIgb25seSBpZiB3ZSBkb24ndCBoYXZlIGl0IGluIHRoZSBoYXNoXG4gICAgICAkaHR0cC5nZXQodGhpc1VSTCkuc3VjY2VzcyhmdW5jdGlvbiAocmVzdWx0LCBzdGF0dXMpIHtcblxuICAgICAgICAgIGlmICghcmVzdWx0KXtcbiAgICAgICAgICAgICAgJHNjb3BlLnJlc3VsdHMgPSBbe25hbWU6IFwiTm8gcmVzdWx0cyBmb3VuZC5cIn1dO1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYocmVzdWx0LmVycm9yKSB7XG4gICAgICAgICAgICAgICRzY29wZS5yZXN1bHRzID0gW3tuYW1lOiBcIkVycm9yIHNlYXJjaGluZyBFQ09TLlwifV07XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvL2JyZWFrIHVwIHRoZSByZXN1bHRzIGJ5IHR5cGUuXG4gICAgICAgICAgJHNjb3BlLnByb2plY3RSZXN1bHRzID0gcmVzdWx0LmZpbHRlcihmdW5jdGlvbihpdGVtKXtcbiAgICAgICAgICAgICByZXR1cm4gaXRlbS50aGVtZV90eXBlID09ICdQcm9qZWN0JztcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgICRzY29wZS5kaXNhc3RlclJlc3VsdHMgPSByZXN1bHQuZmlsdGVyKGZ1bmN0aW9uKGl0ZW0pe1xuICAgICAgICAgICAgICByZXR1cm4gaXRlbS50aGVtZV90eXBlID09ICdEaXNhc3Rlcic7XG4gICAgICAgICAgfSk7XG5cbiAgICAgIH0pO1xuICB9XG5cbiAgICAvL1doZW4gYSB1c2VyIGNsaWNrcyBvbmUgb2YgdGhlIHNlYXJjaCByZXN1bHQgaXRlbXNcbiAgICAkc2NvcGUuaGFuZGxlU2VhcmNoUmVzdWx0Q2xpY2sgPSBmdW5jdGlvbihwcm9wZXJ0aWVzKXtcbiAgICAgICAgLy9TZW5kIHRvIGRlYXRpbHMgcGFuZWxcbiAgICAgICAgc2VuZFByb2plY3RUb0RldGFpbHNQYW5lbChwcm9wZXJ0aWVzKTtcblxuICAgICAgICAvL0lmIHdlIGhhdmUgYSBndWlkLCB0aGVuIHRyeSB0byB6b29tIHRvIGl0LlxuICAgICAgICBpZihwcm9wZXJ0aWVzLmxvY2F0aW9uX19yX2dpc19nZW9faWRfX2MgJiYgcHJvcGVydGllcy5sZXZlbCl7XG4gICAgICAgICAgICB6b29tVG9HVUlEKHByb3BlcnRpZXMubG9jYXRpb25fX3JfZ2lzX2dlb19pZF9fYywgcHJvcGVydGllcy5sZXZlbCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gc2VuZFByb2plY3RUb0RldGFpbHNQYW5lbCAocHJvcGVydGllcykge1xuICAgICAgJHJvb3RTY29wZS4kYnJvYWRjYXN0KCdkZXRhaWxzJywge2ZlYXR1cmU6IHtwcm9wZXJ0aWVzOiBwcm9wZXJ0aWVzfX0pO1xuICAgIH1cblxuXG4gICAgLy90aGlzIGlzIGEgZHVwbGljYXRlIGZyb20gYnJlYWRjcnVtYnMuanMgIFNob3VsZCBiZSByZWZhY3RvcmVkIHRvIGEgc2luZ2xlIGZ1bmN0aW9uXG4gICAgZnVuY3Rpb24gem9vbVRvR1VJRCAoZ3VpZCwgbGV2ZWwpIHtcbiAgICAgICAgLy9HaXZlbiBhIEdVSUQsIHpvb20gdG8gdGhlIGZlYXR1cmUuXG5cbiAgICAgICAgLy9HcmFiIHRoZSBmZWF0dXJlIGZyb20gdGhlIFZlY3RvclByb3ZpZGVyLlxuICAgICAgICBWZWN0b3JQcm92aWRlci5mZXRjaEZlYXR1cmUoZ3VpZCwgbGV2ZWwsIG51bGwsIGZ1bmN0aW9uIChmZWF0KSB7XG4gICAgICAgICAgICAvL01ha2UgYSB0ZW1wIGdlb2pzb24gbGF5ZXIgYW5kIGFkZCB0aGUgZ2VvanNvbi5cbiAgICAgICAgICAgIC8vVGhlbiBncmFiIHRoZSBib3VuZHMgZnJvbSBpdCBhbmQgem9vbSB0byBpdC5cblxuICAgICAgICAgICAgdmFyIGdqbCA9IEwuZ2VvSnNvbihmZWF0Lmdlb21ldHJ5KTtcbiAgICAgICAgICAgICRzY29wZS4kcGFyZW50Lnpvb21Ub0JvdW5kcyhnamwuZ2V0Qm91bmRzKCkpO1xuICAgICAgICB9KTtcblxuICAgIH07XG59KTtcbiIsIi8qKlxuICogQ3JlYXRlZCBieSBOaWNob2xhcyBIYWxsYWhhbiA8bmhhbGxhaGFuQHNwYXRpYWxkZXYuY29tPlxuICogICAgICAgIGFuZCBSeWFuIFdoaXRsZXkgICAgICA8cndoaXRsZXlAc3BhdGlhbGRldi5jb20+XG4gKiAgICAgICAgIG9uIDQvMTYvMTQuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnR2VvQW5ndWxhcicpLmNvbnRyb2xsZXIoJ1NpZGVWaWV3Q3RybCcsIGZ1bmN0aW9uKCRzY29wZSwgJHRpbWVvdXQpIHtcblxuICAvL3Jlc2l6ZSBmdW5jdGlvblxuICBmdW5jdGlvbiByZXNpemVTY3JvbGxhYmxlUGFuZWwoKSB7XG4gICAgJChcIi5zaWRlLXZpZXcgLnNjcm9sbGFibGVcIikuaGVpZ2h0KCQoXCIuc2lkZS12aWV3IC5uYXZwYW5lbFwiKS5oZWlnaHQoKSAtICQoXCIuc2lkZS12aWV3IC5uYXZwYW5lbCAuc2Nyb2xsYWJsZVwiKS5wb3NpdGlvbigpLnRvcCk7ICAvL1RoaXMgc2hvdWxkIHJlc3BvbmQgdG8gd2luZG93LnJlc2l6ZSBldmVudHMgYW5kIHdpbGwgYmUgc2V0IGR1cmluZyB0aGF0IGV2ZW50IHRvIG1ha2Ugc3VyZSB0aGUgcGFuZWwgc3RheXNcbiAgICAvLyBkeW5hbWljYWxseSByZXNpemUgcHJvamVjdCBmaWx0ZXIgdGFic1xuICAgICQoXCJtZC1jb250ZW50IC5wcm9qZWN0LWZpbHRlcnNcIikuaGVpZ2h0KCQoXCIubmF2cGFuZWwuY29udGFpbmVyLmZpbHRlcnMtY29udGFpbmVyXCIpLmhlaWdodCgpIC0gMTI1KTtcbiAgfVxuXG4gIC8vQ29ubmVjdCB0aGUgbGF5b3V0IG9ucmVzaXplIGVuZCBldmVudFxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCByZXNpemVTY3JvbGxhYmxlUGFuZWwpO1xuXG5cbiAgLy9Gb3IgSW5pdC5cbiAgcmVzaXplU2Nyb2xsYWJsZVBhbmVsKCk7XG5cbiAgLy8gdGhpcyBmaXJlcyB3aGVuIGFsbCBhbmd1bGFyIGRvbSBlbGVtZW50cyBhcmUgcmVuZGVyZWRcbiAgJHRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgIHJlc2l6ZVNjcm9sbGFibGVQYW5lbCgpO1xuICB9KTtcblxufSk7XG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgTmljaG9sYXMgSGFsbGFoYW4gPG5oYWxsYWhhbkBzcGF0aWFsZGV2LmNvbT5cbiAqICAgICAgIG9uIDMvMjYvMTQuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnR2VvQW5ndWxhcicpLmNvbnRyb2xsZXIoJ1N0b3JpZXNDdHJsJywgZnVuY3Rpb24oJHNjb3BlLCAkc3RhdGVQYXJhbXMsIFN0b3JpZXNDb25maWcpIHtcbiAgJHNjb3BlLnBhcmFtcyA9ICRzdGF0ZVBhcmFtcztcblxuICAvL0dldCBTdG9yaWVzIGZyb20gY29uZmlnIGZpbGUgYW5kIGxvYWQgdGhlbS5cbiAgJHNjb3BlLnN0b3JpZXNDb25maWcgPSBTdG9yaWVzQ29uZmlnO1xuICAkc2NvcGUuc3RvcmllcyA9IFtdO1xuICAkc2NvcGUuc3Rvcmllc1NlYXJjaEFycmF5ID0gW107XG4gICRzY29wZS5zdG9yaWVzU2VhcmNoVGV4dCA9IFwiXCI7XG4gICRzY29wZS5zdG9yaWVzRXh0ZW50QXJyYXkgPSBbXTsgLy9jdXJyZW50bHkgbm90IHVzZWQsIGJ1dCBzaG91bGQgYmUgdG8gYWxsb3cgRXh0ZW50IHRvIHBlcmZvcm0gJ0FORCcgbG9naWMgd2l0aCB0aGUga2V5d29yZHMuXG5cbiAgZm9yICh2YXIgc3Rvcmllc0tleSBpbiBTdG9yaWVzQ29uZmlnKSB7XG5cbiAgICAvLyBXZSBkb24ndCB3YW50IHRvIHNob3cgdGhlIGZpbmQgZnVuYy5cbiAgICBpZiAodHlwZW9mIFN0b3JpZXNDb25maWdbc3Rvcmllc0tleV0gPT09ICdmdW5jdGlvbicgfHwgc3Rvcmllc0tleSA9PSAnc3RvcmllcycpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgICRzY29wZS5zdG9yaWVzLnB1c2goU3Rvcmllc0NvbmZpZ1tzdG9yaWVzS2V5XSk7XG4gIH1cblxuICAkc2NvcGUuZmlsdGVyQnlDaGVja2JveCA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgLy9UYWtlIHRoZSB0ZXJtIHBhc3NlZCBpbiBhbmQgYWRkIG9yIHJlbW92ZSBpdCBmcm9tIHRoZSBrZXl3b3JkcyB0ZXh0Ym94LlxuICAgIGlmICgkc2NvcGUuc3Rvcmllc1NlYXJjaEFycmF5LmluZGV4T2YodmFsdWUpID09IC0xKSB7XG4gICAgICAvL0FkZCBpdFxuICAgICAgJHNjb3BlLnN0b3JpZXNTZWFyY2hBcnJheS5wdXNoKHZhbHVlKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAvL1JlbW92ZSBpdFxuICAgICAgJHNjb3BlLnN0b3JpZXNTZWFyY2hBcnJheS5zcGxpY2UoJHNjb3BlLnN0b3JpZXNTZWFyY2hBcnJheS5pbmRleE9mKHZhbHVlKSwgMSk7XG4gICAgfVxuICB9O1xuXG4gICRzY29wZS5maWx0ZXJFeHRlbnRCeUNoZWNrYm94ID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICAvL1Rha2UgdGhlIHRlcm0gcGFzc2VkIGluIGFuZCBhZGQgb3IgcmVtb3ZlIGl0IGZyb20gdGhlIGtleXdvcmRzIHRleHRib3guXG4gICAgaWYgKCRzY29wZS5zdG9yaWVzRXh0ZW50QXJyYXkuaW5kZXhPZih2YWx1ZSkgPT0gLTEpIHtcbiAgICAgIC8vQWRkIGl0XG4gICAgICAkc2NvcGUuc3Rvcmllc0V4dGVudEFycmF5LnB1c2godmFsdWUpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIC8vUmVtb3ZlIGl0XG4gICAgICAkc2NvcGUuc3Rvcmllc0V4dGVudEFycmF5LnNwbGljZSgkc2NvcGUuc3Rvcmllc0V4dGVudEFycmF5LmluZGV4T2YodmFsdWUpLCAxKTtcbiAgICB9XG4gIH07XG5cbiAgJHNjb3BlLmNsZWFyU2VhcmNoID0gZnVuY3Rpb24oKSB7XG4gICAgJHNjb3BlLnN0b3JpZXNTZWFyY2hBcnJheSA9IFtdO1xuICAgICRzY29wZS5zdG9yaWVzU2VhcmNoVGV4dCA9IFwiXCI7XG4gICAgJHNjb3BlLnN0b3JpZXNFeHRlbnRBcnJheSA9IFtdO1xuICB9XG59KTtcblxuXG5hbmd1bGFyLm1vZHVsZSgnR2VvQW5ndWxhcicpLmZpbHRlcignc2VhcmNoU3Rvcmllc0ZpbHRlcicsIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBmdW5jdGlvbihzdG9yaWVzLCAkc2NvcGUpIHtcbiAgICAgIHZhciBvdXRTdG9yaWVzID0gW107XG4gICAgICBpZiAoc3Rvcmllcykge1xuICAgICAgICAvL2xvb3AgdGhydSBzdG9yaWVzIGFuZCBmaWx0ZXIgYmFzZWQgb24gc2VhcmNoIHRleHQvY2hlY2tib3hlcy5cbiAgICAgICAgLy9jb21tYSBzZXBhcmF0ZWQgaXRlbXMgc2hvdWxkIGJlIGJyb2tlbiB1cCBhbmQgc2VhcmNoZWQgZm9yIHNlcGFyYXRlbHkgdXNpbmcgJ09SJyBsb2dpYy5cblxuICAgICAgICB2YXIga2V5d29yZHMgPSBbXTtcbiAgICAgICAgaWYgKCRzY29wZS5zdG9yaWVzU2VhcmNoVGV4dC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAga2V5d29yZHMgPSAkc2NvcGUuc3Rvcmllc1NlYXJjaFRleHQuc3BsaXQoXCIsXCIpLmNvbmNhdCgkc2NvcGUuc3Rvcmllc1NlYXJjaEFycmF5KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBrZXl3b3JkcyA9ICRzY29wZS5zdG9yaWVzU2VhcmNoQXJyYXk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGtleXdvcmRzLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgcmV0dXJuIHN0b3JpZXM7XG4gICAgICAgIH1cblxuICAgICAgICBzdG9yaWVzLmZvckVhY2goZnVuY3Rpb24oc3RvcnkpIHtcbiAgICAgICAgICBrZXl3b3Jkcy5mb3JFYWNoKGZ1bmN0aW9uKGtleXdvcmQpIHtcbiAgICAgICAgICAgIGlmIChrZXl3b3JkLmxlbmd0aCA+IDAgJiYgc3Rvcnkua2V5d29yZHMudG9Mb3dlckNhc2UoKS5pbmRleE9mKCQudHJpbShrZXl3b3JkLnRvTG93ZXJDYXNlKCkpKSA+IC0xKSB7XG4gICAgICAgICAgICAgIGlmIChvdXRTdG9yaWVzLmluZGV4T2Yoc3RvcnkpID09IC0xKSB7XG4gICAgICAgICAgICAgICAgb3V0U3Rvcmllcy5wdXNoKHN0b3J5KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gc3RvcmllcztcbiAgICAgIH1cbiAgICAgIHJldHVybiBvdXRTdG9yaWVzO1xuICAgIH07XG4gIH0pOyIsIi8qKlxuICogQ3JlYXRlZCBieSBOaWNob2xhcyBIYWxsYWhhbiA8bmhhbGxhaGFuQHNwYXRpYWxkZXYuY29tPlxuICogICAgICAgb24gNS82LzE0LlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ0dlb0FuZ3VsYXInKS5jb250cm9sbGVyKCdUaGVtZUN0cmwnLCBmdW5jdGlvbiAoJHNjb3BlLCAkcm9vdFNjb3BlLCAkc3RhdGUsICRzdGF0ZVBhcmFtcywgVmVjdG9yUHJvdmlkZXIsIExheWVyQ29uZmlnKSB7XG5cbiAgdmFyIHRoZW1lTmFtZUhhc2ggPSAkcm9vdFNjb3BlLnRoZW1lTmFtZUhhc2ggPSB7XG4gICAgcHJvamVjdDogJ1Byb2plY3RzJyxcbiAgICBkaXNhc3RlcjogJ0Rpc2FzdGVycycsXG4gICAgcHJvamVjdFJpc2s6ICdQcm9qZWN0IFJpc2snLFxuICAgIC8vcHJvamVjdEhlYWx0aDogJ1Byb2plY3QgSGVhbHRoJyxcbiAgICBkaXNhc3RlclR5cGU6ICdEaXNhc3RlciBUeXBlJyxcbiAgICBub25lOiAnTm9uZSdcbiAgfTtcblxuICAkc2NvcGUucHJvamVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAkc2NvcGUudGhlbWVOYW1lID0gdGhlbWVOYW1lSGFzaC5wcm9qZWN0O1xuICAgICRzY29wZS5zZXRUaGVtZVF1ZXJ5UGFyYW0oJ3Byb2plY3QnKTtcbiAgfTtcblxuICAkc2NvcGUuZGlzYXN0ZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgJHNjb3BlLnRoZW1lTmFtZSA9IHRoZW1lTmFtZUhhc2guZGlzYXN0ZXI7XG4gICAgJHNjb3BlLnNldFRoZW1lUXVlcnlQYXJhbSgnZGlzYXN0ZXInKTtcbiAgfTtcblxuICAkc2NvcGUucHJvamVjdFJpc2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAkc2NvcGUudGhlbWVOYW1lID0gdGhlbWVOYW1lSGFzaC5wcm9qZWN0UmlzaztcbiAgICAgICRzY29wZS5zZXRUaGVtZVF1ZXJ5UGFyYW0oJ3Byb2plY3RSaXNrJyk7XG4gIH07XG5cbiAgJHNjb3BlLnByb2plY3RIZWFsdGggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAkc2NvcGUudGhlbWVOYW1lID0gdGhlbWVOYW1lSGFzaC5wcm9qZWN0SGVhbHRoO1xuICAgICAgJHNjb3BlLnNldFRoZW1lUXVlcnlQYXJhbSgncHJvamVjdEhlYWx0aCcpO1xuICB9O1xuXG4gICRzY29wZS5kaXNhc3RlclR5cGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgJHNjb3BlLnRoZW1lTmFtZSA9IHRoZW1lTmFtZUhhc2guZGlzYXN0ZXJUeXBlO1xuICAgICRzY29wZS5zZXRUaGVtZVF1ZXJ5UGFyYW0oJ2Rpc2FzdGVyVHlwZScpO1xuICB9O1xuXG4gICRzY29wZS5ub25lID0gZnVuY3Rpb24gKCkge1xuICAgICRzY29wZS50aGVtZU5hbWUgPSB0aGVtZU5hbWVIYXNoLm5vbmU7XG4gICAgJHNjb3BlLnNldFRoZW1lUXVlcnlQYXJhbSgnbm9uZScpO1xuICB9O1xuXG4gICRzY29wZS5jbG9zZVBhbmVscyA9IGZ1bmN0aW9uICgpe1xuICAgIGZvciAodmFyIHBhcmFtIGluICRzdGF0ZVBhcmFtcykge1xuICAgICAgaWYgKCRzdGF0ZVBhcmFtc1twYXJhbV0gPT09ICdvcGVuJykge1xuICAgICAgICAkc3RhdGVQYXJhbXNbcGFyYW1dID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgJHNjb3BlLnNldFRoZW1lUXVlcnlQYXJhbSA9IGZ1bmN0aW9uICh0aGVtZSkge1xuXG4gICAgLy9jbG9zZSBkZXRhaWxzIHBhbmVsIG9uIHRoZW1lIGNoYW5nZVxuICAgIGlmKCRzY29wZS5pc1BhcmFtKCdkZXRhaWxzLXBhbmVsJykgPT0gdHJ1ZSl7XG4gICAgICBpZigkc3RhdGVQYXJhbXMudGhlbWUgIT09IHRoZW1lKXtcbiAgICAgICAgJHNjb3BlLmNsb3NlUGFuZWxzKCk7XG4gICAgICB9XG4gICAgfVxuXG5cbiAgICAvL2FwcGVuZCB0aGUgZGVmYXVsdCBkaXNhc3RlciBmaWx0ZXIgd2hlbiBzd2l0Y2hpbmcgZnJvbSBwcm9qZWN0IHRvIGRpc2FzdGVyXG4gICAgaWYodGhlbWUuaW5kZXhPZignZGlzYXN0ZXInKSAhPT0gLTEgJiYgJHN0YXRlUGFyYW1zLnRoZW1lLmluZGV4T2YoJ3Byb2plY3QnKSAhPT0gLTEpe1xuICAgICAgJHN0YXRlUGFyYW1zLmZpbHRlcnMgPSBcImlyb2Nfc3RhdHVzX19jIExJS0UgJyVNb25pdG9yaW5nJScgT1IgaXJvY19zdGF0dXNfX2MgTElLRSAnJUFjdGl2ZSUnXCI7XG4gICAgfVxuXG4gICAgLy9yZW1vdmUgYWxsIGZpbHRlcnMgd2hlbiBzd2l0Y2hpbmcgZnJvbSBkaXNhc3RlciB0byBwcm9qZWN0XG4gICAgaWYodGhlbWUuaW5kZXhPZigncHJvamVjdCcpIT09LTEgJiYgJHN0YXRlUGFyYW1zLnRoZW1lLmluZGV4T2YoJ2Rpc2FzdGVyJykhPT0gLTEgKXtcbiAgICAgICRzdGF0ZVBhcmFtcy5maWx0ZXJzID0gXCJzdGF0dXNfX2MgTElLRSAnJUFjdGl2ZSUnXCI7XG4gICAgfVxuXG4gICAgJHN0YXRlUGFyYW1zLnRoZW1lID0gdGhlbWU7XG5cbiAgICAvL2ZvcmNlIGdhZG0wIG9uIGRpc2FzdGVyIGFuZCBkaXNhc3RlclR5cGVcbiAgICBpZih0aGVtZS5pbmRleE9mKCdkaXNhc3RlcicpIT09LTEgJiYgJHN0YXRlUGFyYW1zLmxheWVycy5zcGxpdChcIixcIilbMV0gIT09ICdnYWRtMCcpe1xuICAgICAgdmFyIGxheWVyc0FycmF5O1xuXG4gICAgICBpZigkc3RhdGVQYXJhbXMubGF5ZXJzKXtcbiAgICAgICAgbGF5ZXJzQXJyYXkgPSAkc3RhdGVQYXJhbXMubGF5ZXJzLnNwbGl0KFwiLFwiKTtcbiAgICAgIH1cblxuICAgICAgLy9SZW1vdmUgYWxsIEdBRE0gbGF5ZXJzLlxuICAgICAgbGF5ZXJzQXJyYXkuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUsIGtleSkge1xuICAgICAgICBpZiAoTGF5ZXJDb25maWcudGhlbWVMYXllcnMuaW5kZXhPZih2YWx1ZSkgPiAtMSkge1xuICAgICAgICAgIGxheWVyc0FycmF5LnNwbGljZShsYXllcnNBcnJheS5pbmRleE9mKHZhbHVlKSwgMSk7IC8vcmVtb3ZlIGFueSBHQURNc1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgLy9BZGQgaW4gdGhlIGdhZG0gbGF5ZXIgdG8gdGhlIGxheWVycyBsaXN0IGluIHRoZSBzdGF0ZXBhcmFtcy5cbiAgICAgIGxheWVyc0FycmF5LnB1c2goXCJnYWRtMFwiKTtcbiAgICAgICRzdGF0ZVBhcmFtcy5sYXllcnMgPSBsYXllcnNBcnJheS5qb2luKFwiLFwiKTtcbiAgICB9XG5cbiAgICAvL2Nsb3NlIGZpbHRlcnMgcGFuZWwgaWYgdGhlbWUgaXMgIE5vbmVcbiAgICBpZigkc3RhdGVQYXJhbXMudGhlbWUgPT0gJ25vbmUnIHx8ICRzdGF0ZVBhcmFtcy50aGVtZSAhPT0gbnVsbCkge1xuICAgICAgJHNjb3BlLmNsb3NlUGFyYW0oJ2ZpbHRlcnMtcGFuZWwnKTtcbiAgICB9XG5cblxuICAgIHZhciBzdGF0ZSA9ICRzdGF0ZS5jdXJyZW50Lm5hbWUgfHwgJ21haW4nO1xuICAgICRzdGF0ZS5nbyhzdGF0ZSwgJHN0YXRlUGFyYW1zKTtcbiAgfTtcblxuICAkc2NvcGUudGhlbWVOYW1lID0gdGhlbWVOYW1lSGFzaFskc3RhdGVQYXJhbXMudGhlbWVdIHx8IHRoZW1lTmFtZUhhc2hbY29uZmlnLmRlZmF1bHRUaGVtZV07XG4gIC8qXG4gICBIYW5kbGluZyBUaGVtZSBNZW51IEFuaW1hdGlvbnNcbiAgICovXG5cbiAgJHNjb3BlLnRvZ2dsZVRoZW1lTWVudSA9IGZ1bmN0aW9uKCl7XG4gICAgdmFyIGZsaXBwZWRPdXQgPSAkKFwiLm1lbnUtc2VsZWN0aW9uIC5kcm9wZG93blwiKS5oYXNDbGFzcyhcIm9wZW5cIik7XG5cbiAgICBpZihmbGlwcGVkT3V0ID09IGZhbHNlKXtcbiAgICAgICRzY29wZS51bmZ1cmxUaGVtZXMoKTtcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgICRzY29wZS5yZWZ1cmxUaGVtZXMoKTtcbiAgICB9XG4gIH07XG5cbiAgJHNjb3BlLnVuZnVybFRoZW1lcyA9IGZ1bmN0aW9uKCl7XG4gICAgJHNjb3BlLnJlZnVybFRoZW1lcygpO1xuICAgIC8vVHJ5IGpRdWVyeSB0byBhZGQgYW4gJ29uJyBjbGFzcyB0byBlYWNoIG9mIHRoZSB0aGVtZSBMSSBlbGVtZW50cyBvbiBhIHRpbWVyLlxuICAgICQoJCgnI1RoZW1lTWVudSBsaScpLmdldCgpLnJldmVyc2UoKSkuZWFjaChmdW5jdGlvbihpbmRleCl7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJChzZWxmKS5hZGRDbGFzcyhcInRoZW1lLXNlbGVjdG9yLWxpLW9uXCIpO1xuICAgICAgfSwgaW5kZXgqMTAwKTtcbiAgICB9KTtcbiAgfTtcblxuICAvL1JlZnVybD9cbiAgJHNjb3BlLnJlZnVybFRoZW1lcyA9IGZ1bmN0aW9uKCl7XG4gICAgLy9UcnkgalF1ZXJ5IHRvIHJlbW92ZSB0aGUgJ29uJyBjbGFzcyB0byBlYWNoIG9mIHRoZSB0aGVtZSBMSSBlbGVtZW50cyBvbiBhIHRpbWVyLlxuICAgICQoJyNUaGVtZVNlbGVjdG9yTWVudSAuZHJvcGRvd24tbWVudSBsaScpLnJlbW92ZUNsYXNzKFwidGhlbWUtc2VsZWN0b3ItbGktb25cIik7XG4gIH07XG5cbiAgLypcbiAgIEVuZCBUaGVtZSBNZW51IEFuaW1hdGlvbnNcbiAgICovXG5cbn0pO1xuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IE5pY2hvbGFzIEhhbGxhaGFuIDxuaGFsbGFoYW5Ac3BhdGlhbGRldi5jb20+XG4gKiAgICAgICBvbiA0LzE3LzE0LlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ0dlb0FuZ3VsYXInKS5jb250cm9sbGVyKCdVcGxvYWRDdHJsJywgZnVuY3Rpb24oJHNjb3BlLCAkaHR0cCwgJHN0YXRlLCAkc3RhdGVQYXJhbXMsICR1cGxvYWQpIHtcblxuICAkc2NvcGUuc2hvd0FsZXJ0ID0gZmFsc2U7XG4gICRzY29wZS5zaG93UHJvZ3Jlc3MgPSBmYWxzZTtcbiAgJHNjb3BlLnNob3dVcGxvYWRlZFVybCA9IGZhbHNlO1xuICAkc2NvcGUucGVyY2VudCA9IDM7XG4gICRzY29wZS5kaXNhYmxlZCA9IGZhbHNlO1xuICAkc2NvcGUua2JVcGxvYWRlZCA9IDA7XG4gICRzY29wZS5rYlRvdGFsID0gMDtcblxuICAkc2NvcGUuJHVwbG9hZCA9ICR1cGxvYWQ7XG5cbiAgJHNjb3BlLnVwbG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICQoXCIjdXBsb2FkLWZpbGUtaW5wdXRcIikuY2xpY2soKS5jaGFuZ2UoZnVuY3Rpb24oZXZ0KSB7XG4gICAgICAkc2NvcGUuc2hvd1Byb2dyZXNzID0gdHJ1ZTtcbiAgICAgICRzY29wZS5wZXJjZW50ID0gNTtcblxuICAgICAgdmFyIGZpbGVOYW1lID0gJCh0aGlzKS52YWwoKS5zcGxpdCgnXFxcXCcpLnBvcCgpO1xuICAgICAgdmFyIGZpbGUgPSAkKCcjdXBsb2FkLWZpbGUtaW5wdXQnKS5nZXQoMCkuZmlsZXNbMF07XG4gICAgICBwYXJzZUFuZFVwbG9hZEZpbGUoZmlsZSwgZmlsZU5hbWUpO1xuXG4gICAgfSk7XG4gIH07XG5cbiAgJHNjb3BlLmZpbGVEcm9wcGVkID0gZnVuY3Rpb24gKCRmaWxlcykge1xuICAgIHZhciBmaWxlID0gJGZpbGVzWzBdO1xuICAgIHBhcnNlQW5kVXBsb2FkRmlsZShmaWxlLCBmaWxlLm5hbWUpO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHBhcnNlQW5kVXBsb2FkRmlsZShmaWxlLCBmaWxlTmFtZSkge1xuICAgIGlmICghZmlsZU5hbWUpIGZpbGVOYW1lID0gJ2ZpbGUnO1xuICAgIHZhciByID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICByLnJlYWRBc0JpbmFyeVN0cmluZyhmaWxlKTtcbiAgICByLm9ubG9hZGVuZCA9IGZ1bmN0aW9uKGUpe1xuICAgICAgdmFyIGRhdGEgPSBlLnRhcmdldC5yZXN1bHQ7XG4gICAgICB2YXIgcG9zdE9iaiA9IHtcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIk1hcGZvbGlvIFVwbG9hZGVkIERhdGEgLSBcIiArIGZpbGVOYW1lLFxuICAgICAgICBcInB1YmxpY1wiOiB0cnVlLFxuICAgICAgICBcImZpbGVzXCI6IHt9XG4gICAgICB9O1xuICAgICAgcG9zdE9iai5maWxlc1tmaWxlTmFtZV0gPSB7Y29udGVudDogZGF0YX07XG4gICAgICAkc2NvcGUucGVyY2VudCA9IDc7XG5cbiAgICAgICRzY29wZS4kdXBsb2FkLmh0dHAoe1xuICAgICAgICB1cmw6ICdodHRwczovL2FwaS5naXRodWIuY29tL2dpc3RzJyxcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgZGF0YTogcG9zdE9iaixcbiAgICAgICAgaGVhZGVyczogeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9XG4gICAgICB9KS5wcm9ncmVzcyhmdW5jdGlvbihldnQpIHtcbiAgICAgICAgJHNjb3BlLnBlcmNlbnQgPSBwYXJzZUZsb2F0KChldnQubG9hZGVkIC8gZXZ0LnRvdGFsU2l6ZSAqIDEwMCkudG9GaXhlZCgxKSk7XG4gICAgICAgICRzY29wZS5rYlVwbG9hZGVkID0gKGV2dC5sb2FkZWQgLyAxMDI0KS50b0ZpeGVkKDIpO1xuICAgICAgICAkc2NvcGUua2JUb3RhbCA9IChldnQudG90YWxTaXplIC8gMTAyNCkudG9GaXhlZCgyKTtcbiAgICAgIH0pLnN1Y2Nlc3MoZnVuY3Rpb24gKGRhdGEsIHN0YXR1cywgaGVhZGVycywgY29uZmlnKSB7XG4gICAgICAgICRzY29wZS5zaG93UHJvZ3Jlc3MgPSBmYWxzZTtcbiAgICAgICAgdmFyIGZpbGVuYW1lID0gZGF0YS5maWxlc1tmaWxlTmFtZV0uZmlsZW5hbWU7XG4gICAgICAgICRzY29wZS5naXN0UmF3VXJsID0gZGF0YS5maWxlc1tmaWxlTmFtZV0ucmF3X3VybDtcbiAgICAgICAgJHNjb3BlLmdpc3RIdG1sVXJsID0gZGF0YS5odG1sX3VybDtcbiAgICAgICAgJHNjb3BlLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgJHNjb3BlLnNob3dVcGxvYWRlZFVybCA9IHRydWU7XG4gICAgICAgIHdpbmRvdy5naXN0cy5hcHBlbmQoe25hbWU6IGZpbGVuYW1lLCB1cmw6ICRzY29wZS5naXN0UmF3VXJsLCBodG1sVXJsOiAkc2NvcGUuZ2lzdEh0bWxVcmx9KTtcbiAgICAgIH0pLmVycm9yKGZ1bmN0aW9uIChkYXRhLCBzdGF0dXMsIGhlYWRlcnMsIGNvbmZpZykge1xuICAgICAgICAkc2NvcGUuc2hvd0FsZXJ0ID0gdHJ1ZTtcbiAgICAgICAgJHNjb3BlLmVycm9yTWVzc2FnZSA9IEpTT04uc3RyaW5naWZ5KGRhdGEsbnVsbCwyKTtcbiAgICAgIH0pO1xuXG4gICAgfTtcbiAgfVxuXG4gICRzY29wZS5hZGRUb01hcCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgbmV3VXJsID0gJHNjb3BlLmdpc3RSYXdVcmwgfHwgJHNjb3BlLnJlbW90ZVVybDtcbiAgICBpZiAoIW5ld1VybCkge1xuICAgICAgJHNjb3BlLnNob3dBbGVydCA9IHRydWU7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgJHN0YXRlUGFyYW1zLmxheWVycyA9ICRzdGF0ZVBhcmFtcy5sYXllcnMgKyAnLCcgKyBuZXdVcmw7XG4gICAgJCgnI3VwbG9hZE1vZGFsJykubW9kYWwoJ2hpZGUnKTtcbiAgICAkKCcjdXBsb2FkTW9kYWwnKS5vbignaGlkZGVuLmJzLm1vZGFsJywgZnVuY3Rpb24oZSkge1xuICAgICAgJHN0YXRlLmdvKCdtYWluJywgJHN0YXRlUGFyYW1zKTtcbiAgICB9KTtcblxuICB9O1xuXG4gIC8qKlxuICAgKiBJZiBVcGxvYWRDdHJsIGdldHMgY2FsbGVkIHR3aWNlIGZvciBzb21lIHJlYXNvbiwgd2UgbWlnaHRcbiAgICogaGF2ZSB0aGlzIGNsYXNzIGhhbmdpbmcgYXJvdW5kIGJsb2NraW5nIHRoZSBhcHAuIFVwbG9hZEN0cmxcbiAgICogZG9lcyBnZXQgY2FsbGVkIHR3aWNlIHNvbWV0aW1lcywgYmVjYXVzZSB0aGUgbW9kYWwgc29tZXRpbWVzXG4gICAqIG51ZGdlcyB0aGUgbWFwIGFuZCByZWluc3RhbnRpYXRlcyB0aGUgbW9kYWwgYWdhaW4gdmlhIGEgbmV3XG4gICAqIHJvdXRlLlxuICAgKi9cbiAgJCgnLm1vZGFsLWJhY2tkcm9wJykucmVtb3ZlKCk7XG5cbiAgJCgnI3VwbG9hZE1vZGFsJykubW9kYWwoJ3Nob3cnKTtcblxuICAkKCcjdXBsb2FkTW9kYWwnKS5vbignaGlkZGVuLmJzLm1vZGFsJywgZnVuY3Rpb24oZSkge1xuICAgICRzdGF0ZS5nbygnbWFpbicsICRzdGF0ZVBhcmFtcyk7XG4gIH0pO1xuXG59KTtcbiIsIi8qKlxuICogQ3JlYXRlZCBieSBOaWNob2xhcyBIYWxsYWhhbiA8bmhhbGxhaGFuQHNwYXRpYWxkZXYuY29tPlxuICogICAgICAgIGFuZCBSeWFuIFdoaXRsZXkgICAgICA8cndoaXRsZXlAc3BhdGlhbGRldi5jb20+XG4gKiAgICAgICBvbiA0LzIvMTQuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnR2VvQW5ndWxhcicpLmNvbnRyb2xsZXIoJ1pvb21FeHRlbnRDdHJsJywgZnVuY3Rpb24oJHNjb3BlLCAkcm9vdFNjb3BlLCAkc3RhdGVQYXJhbXMsIFZlY3RvclByb3ZpZGVyKSB7XG4gICRzY29wZS5wYXJhbXMgPSAkc3RhdGVQYXJhbXM7XG5cbiAgLy9Jbml0aWFsaXplIHRoZSBjb3VudHJ5IHNlbGVjdG9yIG1lbnUgYnkgbG9hZGluZyB0aGUganNvbiBmaWxlIGFuZCB3cml0aW5nIG91dCB0aGUgbmFtZXMgaW50byB0aGUgcGFuZWxcbiAgJHNjb3BlLmNvdW50cnlMaXN0MSA9IG51bGw7XG5cbiAgdmFyIHZlY1JlcyA9IFZlY3RvclByb3ZpZGVyLmNyZWF0ZVJlc291cmNlKFwiY291bnRyeWV4dGVudHNcIik7XG4gIHZlY1Jlcy5mZXRjaChmdW5jdGlvbihnZW9qc29uKXtcbiAgICAvL1NvcnQgYWxwaGFiZXRpY2FsbHlcbiAgICBnZW9qc29uLmZlYXR1cmVzID0gZ2VvanNvbi5mZWF0dXJlcy5zb3J0KGZ1bmN0aW9uKGEsYil7XG4gICAgICB2YXIgdGV4dEEgPSBhLnByb3BlcnRpZXMubmFtZV8wO1xuICAgICAgdmFyIHRleHRCID0gYi5wcm9wZXJ0aWVzLm5hbWVfMDtcbiAgICAgIHJldHVybiAodGV4dEEgPCB0ZXh0QikgPyAtMSA6ICh0ZXh0QSA+IHRleHRCKSA/IDEgOiAwO1xuICAgIH0pO1xuXG4gICAgJHNjb3BlLmNvdW50cnlMaXN0MSA9IGdlb2pzb24uZmVhdHVyZXM7XG4gIH0pO1xuXG4gIC8vSW5pdGlhbGl6ZSB0aGUgQVJDIFJlZ2lvbiBzZWxlY3RvciBtZW51IGJ5IGxvYWRpbmcgdGhlIGpzb24gZmlsZSBhbmQgd3JpdGluZyBvdXQgdGhlIG5hbWVzIGludG8gdGhlIHBhbmVsXG4gICRzY29wZS5yZWdpb25MaXN0MSA9IG51bGw7XG5cbiAgdmFyIHZlY1Jlc1JlZ2lvbiA9IFZlY3RvclByb3ZpZGVyLmNyZWF0ZVJlc291cmNlKFwiYXJjcmVnaW9uZXh0ZW50c1wiKTtcbiAgdmVjUmVzUmVnaW9uLmZldGNoKGZ1bmN0aW9uKGdlb2pzb24pe1xuICAgIC8vU29ydCBhbHBoYWJldGljYWxseVxuICAgIGdlb2pzb24uZmVhdHVyZXMgPSBnZW9qc29uLmZlYXR1cmVzLnNvcnQoZnVuY3Rpb24oYSxiKXtcbiAgICAgIHZhciB0ZXh0QSA9IGEucHJvcGVydGllcy5hcmNfcmVnaW9uO1xuICAgICAgdmFyIHRleHRCID0gYi5wcm9wZXJ0aWVzLmFyY19yZWdpb247XG4gICAgICByZXR1cm4gKHRleHRBIDwgdGV4dEIpID8gLTEgOiAodGV4dEEgPiB0ZXh0QikgPyAxIDogMDtcbiAgICB9KTtcblxuICAgICRzY29wZS5yZWdpb25MaXN0MSA9IGdlb2pzb24uZmVhdHVyZXM7XG4gIH0pO1xuXG59KTtcbiIsIi8qKlxuICogQ3JlYXRlZCBieSBOaWNob2xhcyBIYWxsYWhhbiA8bmhhbGxhaGFuQHNwYXRpYWxkZXYuY29tPlxuICogICBhbmQgUmljaCBHd296ZHogPHJnd296ZHpAc3BhdGlhbGRldi5jb20+XG4gKiAgICAgICBvbiA1LzIxLzE0LlxuICovXG5cblxubW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnR2VvQW5ndWxhcicpLmZhY3RvcnkoJ0RvbnV0cycsIGZ1bmN0aW9uICgpIHtcblxuICB2YXIgc2VydmljZSA9IHt9O1xuICBzZXJ2aWNlLmRhdGFzZXQgPSBbXTtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhIEQzIERvbnV0IHRoYXQgaXMgbG9jYXRlZCBpbiB0aGUgZGV0YWlscyBwYW5lbC5cbiAgICovXG4gIGZ1bmN0aW9uIEV4cGFuZG9Eb251dChlbnRpdGllcywgdmlzdWFsaXphdGlvbkRpY3Rpb25hcnksIHdyYXBwZXIsIGxhYmVsUG9zaXRpb24pIHtcblxuICAgIHZhciBkYXRhLFxuICAgICAgdG1wRGF0YXNldCxcbiAgICAgIGRhdGFzZXQsXG4gICAgICB3aWR0aCxcbiAgICAgIGhlaWdodCxcbiAgICAgIHJhZGl1cyxcbiAgICAgIGNvbG9yLFxuICAgICAgcGllLFxuICAgICAgYXJjLFxuICAgICAgc3ZnLFxuICAgICAgcGF0aCxcbiAgICAgIHJlcG9ydGluZ1ZhbHVlQXJyLFxuICAgICAgcmVwb3J0aW5nVmFsdWUsXG4gICAgICBsYWJlbFdyYXBwZXI7XG5cbiAgICBkYXRhID0ge307XG5cbiAgICB3cmFwcGVyID0gJCh3cmFwcGVyKVswXTtcbiAgICAkKHdyYXBwZXIpLmh0bWwoJycpO1xuICAgIHRoaXMud3JhcHBlciA9IHdyYXBwZXI7XG4gICAgdGhpcy5sYWJlbFdyYXBwZXIgPSBudWxsO1xuICAgIHRoaXMuc3ZnID0gbnVsbDtcblxuICAgIGlmKHR5cGVvZiBsYWJlbFBvc2l0aW9uID09PSAndW5kZWZpbmVkJyB8fCAobGFiZWxQb3NpdGlvbiAhPT0gJ3RvcCcgJiYgbGFiZWxQb3NpdGlvbiAhPT0gJ2JvdHRvbScpKSB7XG4gICAgICBsYWJlbFBvc2l0aW9uID0gJ3RvcCdcbiAgICB9XG5cbiAgICAvLyBMb29wIHRocm91Z2ggdGhlIGVudGl0aWVzXG4gICAgZm9yICh2YXIgaiA9IDAsIGpNYXggPSBlbnRpdGllcy5sZW5ndGg7IGogPCBqTWF4OyBqKyspIHtcblxuICAgICAgLy8gU3BsaXQgdGhlIHNlbWktY29sb24gZGVsaW1pdGVkIHN0cmluZyBvZiByZXBvcnRpbmcgdmFsdWVzXG4gICAgICBpZihlbnRpdGllc1tqXVsnc2VjdG9yX19jJ10gPT09IG51bGwpIHtcbiAgICAgICAgcmVwb3J0aW5nVmFsdWVBcnIgPSBbLTk5OTldO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVwb3J0aW5nVmFsdWVBcnIgPSBlbnRpdGllc1tqXVsnc2VjdG9yX19jJ10udG9TdHJpbmcoKS5zcGxpdCgnOycpO1xuICAgICAgfVxuICAgICAgLy8gTG9vcCB0aHJ1IHRoZSByZXBvcnRpbmcgdmFsdWVzXG4gICAgICBmb3IgKHZhciBrID0gMCwga01heCA9IHJlcG9ydGluZ1ZhbHVlQXJyLmxlbmd0aDsgayA8IGtNYXg7IGsrKykge1xuXG4gICAgICAgIC8vIHRoaXMgaXRlcmF0aW9uJ3MgcmVwb3J0aW5nIHZhbHVlXG4gICAgICAgIHJlcG9ydGluZ1ZhbHVlID0gcmVwb3J0aW5nVmFsdWVBcnJba107XG5cbiAgICAgICAgLy8gSWYgd2UgaGF2ZSBhbHJlYWR5IGNvbWUgYWNyb3NzIHRoaXMgaWQgYmVmb3JlIChhbmQgc3RhcnRlZCBhIGNvdW50IG9mIGl0cyBmcmVxdWVuY3kpLCBpbmNyZW1lbnQgdGhlIGNvdW50XG4gICAgICAgIGlmKGRhdGEuaGFzT3duUHJvcGVydHkocmVwb3J0aW5nVmFsdWUpKSB7XG4gICAgICAgICAgZGF0YVtyZXBvcnRpbmdWYWx1ZV1bJ2NvdW50J10rKztcbiAgICAgICAgfVxuXG4gICAgICAgIGVsc2UgaWYgKHJlcG9ydGluZ1ZhbHVlID09PSAnJyl7XG4gICAgICAgICAgLy8gTnVsbCByZXBvcnQgaWQncyBjb21lIHRocm91Z2ggYXMgYW4gZW1wdHkgc3RyaW5nIGJlY2F1c2Ugc3BsaXR0aW5nIGFuIGVtcHR5IHN0cmluZywgY3JlYXRlcyBhbiBhcnJheSB3aXRoIG9uZSBlbXB0eSBzdHJpbmdcbiAgICAgICAgICAvLyAgV2UncmUgYXNzaWduaW5nIHRoZXNlIHRvIGEgdmFsdWUgb2YgLTk5OTlcblxuICAgICAgICAgIC8vIEluY3JlbWVudCB0aGUgY291bnQgb2YgLTk5OTlcbiAgICAgICAgICBpZihkYXRhLmhhc093blByb3BlcnR5KCctOTk5OScpKSB7XG4gICAgICAgICAgICBkYXRhWyctOTk5OSddWydjb3VudCddKys7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gaWYgdGhpcyBpcyB0aGUgZmlyc3QgbnVsbCBpZCwgY3JlYXRlIGFuIG9iamVjdCBwcm9wZXJ0eSBhbmQgc3RhcnQgdGhlIGNvdW50ZXJcbiAgICAgICAgICAgIGRhdGFbJy05OTk5J10gPSB7XG4gICAgICAgICAgICAgICdjb3VudCc6IDEsXG4gICAgICAgICAgICAgICdjb2xvcic6IHZpc3VhbGl6YXRpb25EaWN0aW9uYXJ5Wy05OTk5XS5jb2xvcixcbiAgICAgICAgICAgICAgJ2FsaWFzJzogdmlzdWFsaXphdGlvbkRpY3Rpb25hcnlbLTk5OTldLmxhYmVsIHx8ICdVbmtub3duJ1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG5cbiAgICAgICAgICB2YXIgcmVwb3J0aW5nUHJvcGVydGllcyA9IHZpc3VhbGl6YXRpb25EaWN0aW9uYXJ5W3JlcG9ydGluZ1ZhbHVlXTtcblxuICAgICAgICAgIGlmICghcmVwb3J0aW5nUHJvcGVydGllcykge1xuICAgICAgICAgICAgcmVwb3J0aW5nUHJvcGVydGllcyA9IHtcbiAgICAgICAgICAgICAgY29sb3I6ICcjMjQwMjAxJyxcbiAgICAgICAgICAgICAgYWxpYXM6IHJlcG9ydGluZ1ZhbHVlIHx8ICdVbmtub3duJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIGlmIHRoaXMgaXMgdGhlIGZpcnN0IHRpbWUgd2Ugc2VlIHRoaXMgaWQsIGNyZWF0ZSBhbiBvYmplY3QgcHJvcGVydHkgYW5kIHN0YXJ0IHRoZSBjb3VudGVyXG4gICAgICAgICAgZGF0YVtyZXBvcnRpbmdWYWx1ZV0gPSB7XG4gICAgICAgICAgICAnY291bnQnOiAxLFxuICAgICAgICAgICAgJ2NvbG9yJzogcmVwb3J0aW5nUHJvcGVydGllcy5jb2xvcixcbiAgICAgICAgICAgICdhbGlhcyc6IHJlcG9ydGluZ1Byb3BlcnRpZXMubGFiZWwgfHwgJ1Vua25vd24nXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICB9XG5cbiAgICB9XG5cbiAgICAvLyBwcmVwIGRhdGFzZXQgZm9yIEQzOyBuZWVkIGEgdGVtcCBkYXRhc2V0IHRvIGRlYWwgd2l0aCBtZXJnaW5nIG9mIGRhdGEgY291bnRzIGZvciAnb3RoZXInIGNhdGVnb3J5XG4gICAgdG1wRGF0YXNldCA9IFtdO1xuICAgIGRhdGFzZXQgPSBbXTtcblxuICAgIC8vIFB1c2ggcHJvcGVydGllcyBmcm9tIG9iamVjdCBob2xkaW5nIHRoZSBjYXRlZ29yeSBjb3VudHMvY29sb3JzIGNhdGVnb3JpZXMgaW50byBhbiBvYmplY3QgYXJyYXlcbiAgICBmb3IgKHZhciBqIGluIGRhdGEpIHtcbiAgICAgIHRtcERhdGFzZXQucHVzaChkYXRhW2pdKTtcbiAgICB9XG5cbiAgICAvLyBDcmVhdGUgYW4gb2JqZWN0IHRoYXQgd2lsbCBtZXJnZSB0aGUgY291bnQgZnJvbSBhbGwgY2xhc3NpZmljYXRpb24gY2F0ZXJnb3JpZXMgdGhhdCB3ZSd2ZSBkZWVtZWQgYXMgJ290aGVyJydcbiAgICB2YXIgbWVyZ2VkT3RoZXIgPSB7XG4gICAgICAnY291bnQnOiAwLFxuICAgICAgJ2NvbG9yJzogdmlzdWFsaXphdGlvbkRpY3Rpb25hcnlbLTk5OTldLmNvbG9yLFxuICAgICAgJ2FsaWFzJzogdmlzdWFsaXphdGlvbkRpY3Rpb25hcnlbLTk5OTldLmxhYmVsIHx8ICdVbmtub3duJ1xuICAgIH07XG5cbiAgICAvLyBNZXJnZSBhbGwgJ290aGVyJyBvYmplY3RzOyB3ZSBkZXRlcm1pbmUgd2hpY2ggYXJlICdvdGhlcicgYnkgdGVzdGluZyB0byBzZWUgaWYgaXRzIGJlZW4gYXNzaWduZWQgdGhlICdvdGhlcicgY29sb3JcbiAgICBmb3IgKHZhciBrID0gMCwga01heCA9IHRtcERhdGFzZXQubGVuZ3RoOyBrIDwga01heDsgaysrKSB7XG5cbiAgICAgIGlmKHRtcERhdGFzZXRba10uY29sb3IgPT09IHZpc3VhbGl6YXRpb25EaWN0aW9uYXJ5Wy05OTk5XS5jb2xvcikge1xuICAgICAgICBtZXJnZWRPdGhlci5jb3VudCA9IG1lcmdlZE90aGVyLmNvdW50ICsgdG1wRGF0YXNldFtrXS5jb3VudDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRhdGFzZXQucHVzaCh0bXBEYXRhc2V0W2tdKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBBZGQgdGhlIG1lcmdlIG9iamVjdCB0byB0aGUgZGF0YXNldCB3ZSB3aWxsIHVzZSBpbiBkb251dCBjaGFydFxuICAgIGRhdGFzZXQucHVzaChtZXJnZWRPdGhlcik7XG4gICAgc2VydmljZS5kYXRhc2V0ID0gZGF0YXNldDtcblxuXG4gICAgLy8gVXNlIGpRdWVyeSB0byBnZXQgdGhpcyBjbHVzdGVyIG1hcmtlcnMgaGVpZ2h0IGFuZCB3aWR0aCAoc2V0IGluIHRoZSBDU1MpXG4gICAgd2lkdGggPSAkKHdyYXBwZXIpLndpZHRoKCkgKiAwLjY1O1xuICAgIGhlaWdodCA9ICQod3JhcHBlcikuaGVpZ2h0KCkgKiAwLjY1O1xuXG4gICAgaWYoaGVpZ2h0ID09PSAwKSB7XG4gICAgICBoZWlnaHQgPSB3aWR0aDtcbiAgICB9XG5cbiAgICByYWRpdXMgPSAgKE1hdGgubWluKHdpZHRoLCBoZWlnaHQpIC8gMikgLSAxMDtcbiAgICBsYWJlbFdyYXBwZXIgPSAkKCc8ZGl2IGNsYXNzPVwiY2xlYXJmaXhcIiBzdHlsZT1cInRleHQtYWxpZ246Y2VudGVyOyBtYXJnaW46IDEwcHggMDtcIiA+PC9kaXY+JykuYXBwZW5kVG8od3JhcHBlcik7XG4gICAgdmFyIGxhYmVsU3dhdGNoID0gJCgnPGRpdiBzdHlsZT1cImRpc3BsYXk6aW5saW5lLWJsb2NrOyB3aWR0aDogMWVtOyBoZWlnaHQ6IDFlbTsgYm9yZGVyLXJhZGl1czogNTAlXCI+PC9kaXY+JykuYXBwZW5kVG8obGFiZWxXcmFwcGVyKTtcbiAgICB2YXIgbGFiZWxUZXh0ID0gJCgnPGRpdiBzdHlsZT1cImRpc3BsYXk6aW5saW5lLWJsb2NrOyBwYWRkaW5nLWxlZnQ6IDEwcHg7bWFyZ2luLXRvcDogLS40ZW07dmVydGljYWwtYWxpZ246IG1pZGRsZTtcIj48L2Rpdj4nKS5hcHBlbmRUbyhsYWJlbFdyYXBwZXIpO1xuXG4gICAgcGllID0gZDMubGF5b3V0LnBpZSgpXG4gICAgICAuc29ydChudWxsKTtcblxuICAgIGFyYyA9IGQzLnN2Zy5hcmMoKVxuICAgICAgLmlubmVyUmFkaXVzKHJhZGl1cy1yYWRpdXMgKiAwLjQpXG4gICAgICAub3V0ZXJSYWRpdXMocmFkaXVzKTtcblxuICAgIHZhciBhcmNPdmVyID0gZDMuc3ZnLmFyYygpXG4gICAgICAub3V0ZXJSYWRpdXMocmFkaXVzICsgMTApXG4gICAgICAuaW5uZXJSYWRpdXMoKHJhZGl1cy1yYWRpdXMgKiAwLjQpICsgMTApO1xuXG4gICAgLy8gTm90ZSB0aGF0IHdlIGFkZCAnY2x1c3RlckRvbnV0JyBhcyBhIHNlbGVjdG9yXG4gICAgc3ZnID0gZDMuc2VsZWN0KHdyYXBwZXIpLmFwcGVuZChcInN2Z1wiKVxuICAgICAgLmF0dHIoXCJ3aWR0aFwiLCB3aWR0aClcbiAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIGhlaWdodClcbiAgICAgIC5hcHBlbmQoXCJnXCIpXG4gICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZShcIiArIHdpZHRoIC8gMiArIFwiLFwiICsgaGVpZ2h0IC8gMiArIFwiKVwiKTtcblxuICAgIHRoaXMucGF0aCA9IHN2Zy5zZWxlY3RBbGwoXCJwYXRoXCIpXG4gICAgICAuZGF0YShmdW5jdGlvbigpe1xuICAgICAgICB2YXIgZGF0YU9iakFycixcbiAgICAgICAgICBkYXRhQXJyLFxuICAgICAgICAgIHBpZURhdGE7XG5cbiAgICAgICAgZGF0YU9iakFyciA9IGRhdGFzZXQ7XG5cbiAgICAgICAgZGF0YUFyciA9IFtdO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBpTWF4ID0gZGF0YU9iakFyci5sZW5ndGg7IGkgPCBpTWF4OyBpKyspIHtcbiAgICAgICAgICBkYXRhQXJyLnB1c2goZGF0YU9iakFycltpXVsnY291bnQnXSk7XG4gICAgICAgIH1cblxuICAgICAgICBwaWVEYXRhID0gcGllKGRhdGFBcnIpO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBpTWF4ID0gcGllRGF0YS5sZW5ndGg7IGkgPCBpTWF4OyBpKyspIHtcbiAgICAgICAgICBwaWVEYXRhW2ldLmRhdGEgPSBkYXRhT2JqQXJyW2ldO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHBpZURhdGE7XG4gICAgICB9KVxuICAgICAgLmVudGVyKCkuYXBwZW5kKFwicGF0aFwiKVxuICAgICAgLmF0dHIoXCJmaWxsXCIsIGZ1bmN0aW9uKGQsIGopIHtcbiAgICAgICAgcmV0dXJuIGQuZGF0YS5jb2xvcjtcbiAgICAgIH0pXG4gICAgICAuYXR0cihcImRcIiwgYXJjKVxuICAgICAgLmF0dHIoXCJjdXJzb3JcIixcInBvaW50ZXJcIilcbiAgICAgIC5hdHRyKFwiY3Vyc29yXCIsXCJwb2ludGVyXCIpXG4gICAgICAub24oXCJtb3VzZW92ZXJcIiwgZnVuY3Rpb24oZCwgaSkge1xuXG4gICAgICAgIC8vIGNsZWFyIHByZXZpb3VzbHkgYWN0aXZlIGNoYXJ0IHdlZGdlXG4gICAgICAgIGQzLnNlbGVjdCh3cmFwcGVyKS5zZWxlY3RBbGwoJ3BhdGgnKS50cmFuc2l0aW9uKClcbiAgICAgICAgICAuZHVyYXRpb24oMTAwKVxuICAgICAgICAgIC5hdHRyKFwiZFwiLCBhcmMpXG4gICAgICAgICAgLmF0dHIoJ29wYWNpdHknLDEpXG4gICAgICAgICAgLmF0dHIoJ3N0cm9rZS13aWR0aCcsMSlcbiAgICAgICAgICAuYXR0cignc3Ryb2tlJywncmdiYSgyNTUsMjU1LDI1NSwxKScpO1xuXG4gICAgICAgIC8vIE1ha2UgdGhlIG1vdXNlb3ZlciB3ZWRnZSBhY3RpdmVcbiAgICAgICAgZDMuc2VsZWN0KHRoaXMpXG4gICAgICAgICAgLnRyYW5zaXRpb24oKVxuICAgICAgICAgIC5kdXJhdGlvbigxMDApXG4gICAgICAgICAgLmF0dHIoXCJkXCIsIGFyY092ZXIpXG4gICAgICAgICAgLmF0dHIoJ29wYWNpdHknLDAuOClcbiAgICAgICAgICAuYXR0cignc3Ryb2tlLXdpZHRoJywyKVxuICAgICAgICAgIC5hdHRyKCdzdHJva2UnLCdyZ2JhKDI1NSwyNTUsMjU1LDEpJyk7XG5cbiAgICAgICAgLy8gTWFrZSBhcHByb3ByaWF0ZSBsYWJlbFxuICAgICAgICAkKGxhYmVsU3dhdGNoKS5jc3MoJ2JhY2tncm91bmQtY29sb3InLCBkLmRhdGEuY29sb3IpO1xuICAgICAgICAkKGxhYmVsVGV4dCkuaHRtbChkLmRhdGEuYWxpYXMpO1xuXG4gICAgICAgIC8vIFNob3cgdGhlIGxhYmVsIGlmIGN1cnJlbnRseSBoaWRkZW5cbiAgICAgICAgaWYoJChzZWxmLmNhcHRpb24pLmNzcygnZGlzcGxheScpID09PSAnbm9uZScpIHtcbiAgICAgICAgICAkKGxhYmVsV3JhcHBlcikuc2xpZGVUb2dnbGUoKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC8vLm9uKFwibW91c2VvdXRcIiwgZnVuY3Rpb24oZCxpKSB7fSlcbiAgICAgIC5lYWNoKGZ1bmN0aW9uKGQsIGkpIHtcblxuICAgICAgICAvLyBvbiBsb2FkLCB3ZSB3YW50IHRoZSBsYXJnZXN0IGNoYXJ0IHdlZGdlIHRvIGJlIGFjdGl2ZXdcbiAgICAgICAgaWYoaSAhPT0gMCAgKXtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBkMy5zZWxlY3QodGhpcylcbiAgICAgICAgICAudHJhbnNpdGlvbigpXG4gICAgICAgICAgLmR1cmF0aW9uKDEwMClcbiAgICAgICAgICAuYXR0cihcImRcIiwgYXJjT3ZlcilcbiAgICAgICAgICAuYXR0cignb3BhY2l0eScsMC44KVxuICAgICAgICAgIC5hdHRyKCdzdHJva2Utd2lkdGgnLDIpXG4gICAgICAgICAgLmF0dHIoJ3N0cm9rZScsJ3JnYmEoMjU1LDI1NSwyNTUsMSknKTtcblxuICAgICAgICAvLyBtYWtlIHRoZSBsYWJlbFxuICAgICAgICAkKGxhYmVsU3dhdGNoKS5jc3MoJ2JhY2tncm91bmQtY29sb3InLCBkLmRhdGEuY29sb3IpO1xuICAgICAgICAkKGxhYmVsVGV4dCkuaHRtbChkLmRhdGEuYWxpYXMpO1xuXG4gICAgICAgIGlmKCQobGFiZWxXcmFwcGVyKS5jc3MoJ2Rpc3BsYXknKSA9PT0gJ25vbmUnKSB7XG4gICAgICAgICAgJChsYWJlbFdyYXBwZXIpLnNsaWRlVG9nZ2xlKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgaWYobGFiZWxQb3NpdGlvbiA9PT0gJ3RvcCcpIHtcbiAgICAgIGxhYmVsV3JhcHBlci5wcmVwZW5kVG8od3JhcHBlcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxhYmVsV3JhcHBlci5hcHBlbmRUbyh3cmFwcGVyKTtcbiAgICB9XG5cbiAgICB0aGlzLmxhYmVsV3JhcHBlciA9IGxhYmVsV3JhcHBlcjtcbiAgICB0aGlzLnN2ZyA9IHN2ZztcbiAgfVxuXG5cblxuXG4gIGZ1bmN0aW9uIG1ha2VWaXN1YWxpemF0aW9uRGljdGlvbmFyeShjYXRlZ29yeUVudGl0aWVzLCBvcHRzKXtcblxuICAgIHZhciBvcHRpb25zID0gb3B0cyB8fCB7fTtcblxuICAgIG9wdGlvbnMudW5hc3NpZ25lZENvbG9yID0gb3B0aW9ucy51bmFzc2lnbmVkQ29sb3IgfHwgJyNDQ0NDQ0MnO1xuICAgIG9wdGlvbnMudW5hc3NpZ25lZExhYmVsID0gb3B0aW9ucy51bmFzc2lnbmVkTGFiZWwgfHwgJ05vdCBBc3NpZ25lZCc7XG5cbiAgICB2YXIgZGVmYXVsdFBhbGV0dGUgPSBbJyNlNjU1NTInLFx0JyNmMTg0MzInLFx0JyNmNGQ3NDYnLFx0JyM2ZDdjNTgnLFx0JyNiOWMwM2UnLFx0JyMwZjRlNjAnLFx0JyMwMWFhOTUnLFx0JyNhMWIxY2MnLFx0JyNmZjg1OWEnLFx0JyNiM2IwOTEnLFx0JyM4ZDI3MjUnLFx0JyNhMzc2NTQnLFx0JyNiYWE3NDknLFx0JyM3NWJiMTgnLFx0JyNkZGRmYjMnLFx0JyMzOWI0ZDcnLFx0JyM4N2Q4Y2UnLFx0JyM0ODc2YzMnLFx0JyNkYjE3MzknLFx0JyM4ZDgxMDUnLFx0JyNkMDg0ODQnLFx0JyNmZGQ1YjcnLFx0JyNmNGY3ZDQnLFx0JyNkOGVmYjknLFx0JyNlZWY3NTgnLFx0JyNkNmY0ZmQnLFx0JyNhYmJlYmMnLFx0JyM4NDdjZDEnLFx0JyNlYmI4ZDQnLFx0JyNlOWNlODQnLFx0JyNkMGE2YTYnLFx0JyM2MTU1NDknLFx0JyM5OTY5MmInLFx0JyNhZGJmOTUnLFx0JyMxNWU1YzUnLFx0JyM1YmI3ZDInLFx0JyM0YThjODQnLFx0JyNkMThjZmQnLFx0JyNmYzE3M2UnLFx0JyNmYmYzYTUnLFx0JyM5YjVjNWMnLFx0JyNmYmViZGUnLFx0JyNkZGI5MDMnLFx0JyNjYmNiY2InLFx0JyM0NjQ2NDYnLFx0JyMyODcwODQnLFx0JyNiMmY3ZWUnLFx0JyM5ZTllOWUnLFx0JyNlZWVlZWUnLFx0JyNhZTFmYTknXVxuXG4gICAgdmFyIGRpY3Rpb25hcnkgPSB7fTtcblxuICAgIGZvcih2YXIgaSA9IDA7IGkgPCBjYXRlZ29yeUVudGl0aWVzLmxlbmd0aDsgaSsrKSB7XG5cbiAgICAgIHZhciBjb2xvciA9IG51bGw7XG5cbiAgICAgIGlmKGkgPCBkZWZhdWx0UGFsZXR0ZS5sZW5ndGgpIHtcbiAgICAgICAgY29sb3IgPSBkZWZhdWx0UGFsZXR0ZVtpXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBpbmRleCA9IGkgJSBkZWZhdWx0UGFsZXR0ZS5sZW5ndGggLSAxO1xuICAgICAgICBjb2xvciA9IGRlZmF1bHRQYWxldHRlW2luZGV4XTtcbiAgICAgIH1cbiAgICAgIGRpY3Rpb25hcnlbY2F0ZWdvcnlFbnRpdGllc1tpXS52YWx1ZV0gPSB7XG4gICAgICAgIHZhbHVlOiBjYXRlZ29yeUVudGl0aWVzW2ldLnZhbHVlLFxuICAgICAgICBsYWJlbDogY2F0ZWdvcnlFbnRpdGllc1tpXS5sYWJlbCxcbiAgICAgICAgY29sb3I6IGNvbG9yXG4gICAgICB9O1xuXG4gICAgfVxuXG4gICAgZGljdGlvbmFyeVstOTk5OV0gPSB7XG4gICAgICB2YWx1ZTogLTk5OTksXG4gICAgICBsYWJlbDogb3B0aW9ucy51bmFzc2lnbmVkTGFiZWwsXG4gICAgICBjb2xvcjogb3B0aW9ucy51bmFzc2lnbmVkQ29sb3JcbiAgICB9O1xuXG4gICAgcmV0dXJuIGRpY3Rpb25hcnk7XG4gIH1cblxuXG4gIC8qKlxuICAgKiBQdWJsaWMgZnVuY3Rpb25zIHRoYXQgYXJlIGFjY2Vzc2libGUgZWxzZXdoZXJlIGluIHRoZSBhcHAuXG4gICAqIEV4OiBEb251dHMuY3JlYXRlRGV0YWlsc0RvbnV0KGFyZzEsIGFyZzIpO1xuICAgKi9cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBEMyBkb251dCB0aGF0IGdvZXMgYXJvdW5kIGEgbGFiZWwgb24gdGhlIG1hcC5cbiAgICAgKi9cbiAgICBzZXJ2aWNlLmNyZWF0ZUxhYmVsRG9udXQgPSBmdW5jdGlvbihzZWN0b3JzLCBwcm9qZWN0cywgZGl2SWQpIHtcbiAgICAgIHZhciB2aXpEaWN0aW9uYXJ5ID0gbWFrZVZpc3VhbGl6YXRpb25EaWN0aW9uYXJ5KHNlY3RvcnMpO1xuICAgICAgdmFyIGRvbnV0ID0gbmV3IEV4cGFuZG9Eb251dChwcm9qZWN0cywgdml6RGljdGlvbmFyeSwgZGl2SWQgLCAnYm90dG9tJyk7XG4gICAgICAkKGRpdklkKS5wcmVwZW5kKCc8ZGl2IGlkPVwic2VjdG9ycy1oZWFkaW5nXCIgY2xhc3M9XCJoZWFkaW5nXCI+U2VjdG9yczwvZGl2PicpO1xuICAgICAgcmV0dXJuIGRvbnV0O1xuICAgIH07XG5cbiAgcmV0dXJuIHNlcnZpY2U7XG5cblxufSk7XG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgTmljaG9sYXMgSGFsbGFoYW4gPG5oYWxsYWhhbkBzcGF0aWFsZGV2LmNvbT5cbiAqICAgICAgIG9uIDMvMTgvMTQuXG4gKi9cblxuLyoqXG4gKiBBbGwgb2YgdGhlIGxheWVyIG5hbWVzIG5lZWQgdG8gYmUgbG93ZXJjYXNlLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdHZW9Bbmd1bGFyJykuc2VydmljZSgnTGF5ZXJDb25maWcnLCBmdW5jdGlvbiAoKSB7XG5cbiAgdmFyIGNvbmZpZ0xheWVycyA9IFtcbiAgICByZXF1aXJlKCcuLi8uLi8uLi8uLi9Db25maWcvbGF5ZXJzL2FsbC5qcycpLFxuICAgIHJlcXVpcmUoJy4uLy4uLy4uLy4uL0NvbmZpZy9sYXllcnMvYmFzZW1hcHMuanMnKSxcbiAgICByZXF1aXJlKCcuLi8uLi8uLi8uLi9Db25maWcvbGF5ZXJzL2Rpc2FzdGVyLmpzJyksXG4gICAgcmVxdWlyZSgnLi4vLi4vLi4vLi4vQ29uZmlnL2xheWVycy9vdGhlci5qcycpLFxuICAgIHJlcXVpcmUoJy4uLy4uLy4uLy4uL0NvbmZpZy9sYXllcnMvcHJvamVjdC5qcycpLFxuICAgIC8vcmVxdWlyZSgnLi4vLi4vLi4vLi4vQ29uZmlnL2xheWVycy9wcm9qZWN0aGVhbHRoLmpzJyksXG4gICAgcmVxdWlyZSgnLi4vLi4vLi4vLi4vQ29uZmlnL2xheWVycy9wcm9qZWN0cmlzay5qcycpLFxuICAgIHJlcXVpcmUoJy4uLy4uLy4uLy4uL0NvbmZpZy9sYXllcnMvdmVjdG9ydGlsZXMuanMnKVxuXG4gIF07XG5cbiAgLyoqXG4gICAqIEFkZHMgdGhlIGxheWVycyBzcGVjaWZpZWQgaW4gdGhlIENvbmZpZy9sYXllcnMgZGlyZWN0b3J5IHRvIHRoaXMuXG4gICAqL1xuICBmb3IgKHZhciBpID0gMCwgbGVuID0gY29uZmlnTGF5ZXJzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgdmFyIGNmZyA9IGNvbmZpZ0xheWVyc1tpXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gY2ZnKSB7XG4gICAgICB0aGlzW2tleV0gPSBjZmdba2V5XTtcbiAgICB9XG4gIH1cblxuXG4gIC8qKlxuICAgKiBiYm94XG4gICAqXG4gICAqIFRoaXMgaXMgdW5pdmVyc2FsIHRvIGFsbCBsYXllcnMsIGFuZCBiYm94dXJsIGZldGNoZXMgdGhlIGZlYXR1cmUgaXRpbmVyYXJ5LiBUaGlzIGlzIGluIHR1cm4gdXNlZCB0byBmaW5kIHRoZSBjZW50ZXJcbiAgICogZmVhdHVyZSBmb3IgdGhlIGJyZWFkY3J1bWJzIGFzIHdlbGwgYXMgZmV0Y2ggdGhlIGZlYXR1cmVzIHRoYXQgYXBwbHkgdG8gYSBCQm94R2VvSlNPTiBvYmplY3QuXG4gICAqXG4gICAqIEB0eXBlIHt7YmJveHVybDogKiwgY2VudGVydXJsOiAqfX1cbiAgICovXG4gIHRoaXMuYmJveCA9IHtcbiAgICBiYm94dXJsOiBjb25maWcuY2h1YmJzUGF0aCgnc2VydmljZXMvY3VzdG9tL2N1c3RvbV9vcGVyYXRpb24/bmFtZT1nZXRpZHNieWV4dGVudCZmb3JtYXQ9anNvbiZiYm94PTpiYm94JyksXG4gICAgLy8gdXNlZCB0byBnZXQgdGhlIGNlbnRlciBmZWF0dXJlLiBjYW4gZ2V0IGFueSBmZWF0dXJlIHlvdSB3YW50IGJ5IGlkXG4gICAgZmVhdHVybDogY29uZmlnLmNodWJic1BhdGgoJ3NlcnZpY2VzL2N1c3RvbS9jdXN0b21fb3BlcmF0aW9uP25hbWU9Z2V0ZmVhdHVyZXNieWlkJmZvcm1hdD1nZW9qc29uJmdhZG1fbGV2ZWw9OmxldmVsJmlkcz06aWRzJylcbiAgfTtcblxuICAvKipcbiAgICogQkJveEdlb0pTT05cbiAgICpcbiAgICogVGhpcyBsYXllciB0eXBlIHJldHJpZXZlZCBmZWF0dXJlcyB0aGF0IGludGVyc2VjdCB3aXRoIHRoZSBtYXAncyBib3VuZGluZyBib3guXG4gICAqIFRoZXJlIG11c3QgYmUgYSBiYWNrZW5kIEFQSSB0aGF0IHVuZGVyc3RhbmRzIHRoaXMuIFRoZSBmZWF0dXJlcyB0aGF0IGFwcGx5XG4gICAqIHRvIHRoZSBib3VuZGluZyBib3ggYXJlIGZldGNoZWQgdW5pdmVyc2FsbHkgdG8gYWxsIGxheWVycy4gVGhlc2UgZW5kcG9pbnRzXG4gICAqIGFyZSBzcGVjaWZpZWQgaW4gdGhpcy5iYm94LlxuICAgKlxuICAgKiBUaGUgQ2h1YmJzIFNwYXRpYWwgU2VydmVyIGZ1bGx5IGNvbXByZWhlbmRzIHRoaXMsIG90aGVycyBkbyBub3QuXG4gICAqXG4gICAqIEB0eXBlIHt7dHlwZTogc3RyaW5nfX1cbiAgICovXG5cbiAgLy9HQURNIGNvdW50cnkgZXh0ZW50cywgbGV2ZWwgMFxuICB0aGlzLmNvdW50cnlleHRlbnRzID0ge1xuICAgIHR5cGU6ICdnZW9qc29uJyxcbiAgICAgIHRoZW1lOiAnb3RoZXInLFxuICAgICAgdXJsOiAnZGF0YS92d19nYWRtX3Jhd19nZW9tLmdlb2pzb24nXG4gIH07XG5cbiAgLy9BUkMgUmVnaW9uIGV4dGVudHNcbiAgdGhpcy5hcmNyZWdpb25leHRlbnRzID0ge1xuICAgIHR5cGU6ICdnZW9qc29uJyxcbiAgICAgIHRoZW1lOiAnb3RoZXInLFxuICAgICAgdXJsOiAnZGF0YS9hcmNfcmVnaW9uX2V4dGVudHMuZ2VvanNvbidcbiAgfTtcblxuICAvKipcbiAgICogRm9yIGxheWVycywgd2UgdHJ5IGFuZCBnZXQgYW4gYWxpYXMgZm9yIGV2ZXJ5dGhpbmcsIHNvIGlmIGl0J3MgYSBVUkwgdGhhdFxuICAgKiBkb2VzIG5vdCBtYXRjaCwgd2UganVzdCB3YW50IHRvIHJldHVybiBpdHNlbGYgc28gd2UgY2FuIGZldGNoIHRoYXQgZ2l2ZW4gdXJsLlxuICAgKlxuICAgKiBAcGFyYW0gbmFtZVxuICAgKiBAcmV0dXJucyB7Kn1cbiAgICovXG4gIHRoaXMuZmluZCA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdmFyIHZhbCA9IHRoaXNbbmFtZV0gfHwgdGhpc1tuYW1lLnRvTG93ZXJDYXNlKCldO1xuICAgIGlmICh0eXBlb2YgdmFsICE9PSAndW5kZWZpbmVkJyAmJiB2YWwgIT09IG51bGwpIHtcbiAgICAgIHJldHVybiB2YWw7XG4gICAgfVxuICAgIGlmIChuYW1lLnNsaWNlKDAsIDQpLnRvTG93ZXJDYXNlKCkgPT09ICdodHRwJykge1xuICAgICAgcmV0dXJuIG5hbWU7XG4gICAgfVxuICAgIGNvbnNvbGUuZXJyb3IoJ0NPVUxEIE5PVCBGSU5EIEFMSUFTOiAnICsgbmFtZSk7XG4gICAgcmV0dXJuIG51bGw7XG4gIH07XG5cbn0pO1xuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IE5pY2hvbGFzIEhhbGxhaGFuIDxuaGFsbGFoYW5Ac3BhdGlhbGRldi5jb20+XG4gKiAgICAgICBvbiAzLzE4LzE0LlxuICovXG5cbi8qKlxuICogQ29uZmlnIEZpbGUgZm9yIFN0b3JpZXMgUGFuZWxcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnR2VvQW5ndWxhcicpLnNlcnZpY2UoJ1N0b3JpZXNDb25maWcnLCBmdW5jdGlvbiAoKSB7XG5cbiAgLyoqXG4gICAqIFN0b3JpZXMgUGFuZWwgTGlzdFxuICAgKlxuICAgKiBMaXN0IG9mIHN0b3JpZXMgdGhhdCBnZXQgc2hvd24gaW4gdGhlIFN0b3JpZXMgUGFuZWwuIEVkaXQgdGhpcyB0byBhZGQgb3IgcmVtb3ZlXG4gICAqIHN0b3JpZXMgdGhhdCB0aGUgdXNlciB3aWxsIHNlZSBhcyBjaG9pY2VzLiBBbGwgc3RvcmllcywgaW5jbHVkaW5nIG9uZXMgbm90IGluIHRoaXNcbiAgICogbGlzdCwgY2FuIHN0aWxsIGJlIG1hbnVhbGx5IHJlZmVyZW5jZWQgaW4gdGhlIHVybC4gVGhpcyBpcyBqdXN0IGZvciB0aGUgVXNlciBJbnRlcmZhY2UuXG4gICAqL1xuICB0aGlzLnN0b3JpZXMgPSBbXG4gICAgJ2hhaXlhbicsXG4gICAgJ2Vib2xhJyxcbiAgICAnZ2lzJyxcbiAgICAnZGlzYXN0ZXJzJyxcbiAgICAncG9wbW92ZW1lbnQnLFxuICAgICdjdXJyZW50cHJvamVjdHMnLFxuICAgICdoYWl0aXByb2plY3RzJyxcbiAgICAnZ2RwYycsXG4gICAgJ2xhY3Byb2plY3RzJyxcbiAgICAnYW1lZXByb2plY3RzJyxcbiAgICAnYWZyaWNhcHJvamVjdHMnXG4gIF07XG5cblxuICAvKipcbiAgICogU3Rvcmllc1xuICAgKlxuICAgKiBBbGwgc3RvcnkgYWxpYXNlcyBjYW4gYmUgcmVmZXJyZWQgdG8gaW4gdGhlIHVybC4gVGhlIGNvcnJlc3BvbmRpbmdcbiAgICogcGF0aCB0byB0aGUgdGh1bWJuYWlsIGluIHRoZSBTdG9yaWVzIFBhbmVsIHNob3VsZCBiZTpcbiAgICogICAgaW1hZ2VzL3thbGlhc05hbWV9LmpwZ1xuICAgKlxuICAgKi9cblxuICB0aGlzLmhhaXlhbiA9IHtcbiAgICB1cmw6ICcvbWFwZm9saW8vaW5kZXguaHRtbCMvbWFwQDEyLjc2ODk0NiwxMjIuNDg2NTcyLDYob3J0aG8sZ2FkbTAsZ2RhY3MpLGRpc2FzdGVyP2RldGFpbHMtcGFuZWw9b3BlbiZzZl9pZD1hMEVkMDAwMDAwcVpudFVFQVMnLFxuICAgIG5hbWU6ICdUeXBob29uIEhhaXlhbiBSZXNwb25zZScsXG4gICAgZGF0ZTogJzIwMTMtMTAtMTInLFxuICAgIHRodW1ibmFpbDogJ2ltYWdlcy9zdG9yaWVzL2hhaXlhbi5qcGcnLFxuICAgIGtleXdvcmRzOiAnVHlwaG9vbiwgRGlzYXN0ZXIgUmVzcG9uc2UsIEhhaXlhbiwgRGlzYXN0ZXIsIEFNRUUnXG4gIH07XG4gIHRoaXMucGFtID0ge1xuICAgIHVybDogJy9tYXBmb2xpby9pbmRleC5odG1sIy9tYXBALTE2LjU1MTk2MiwxNjguMDg1MzI3LDcob3J0aG8sZ2RhY3MsZ2FkbTApLGRpc2FzdGVyJyxcbiAgICBuYW1lOiAnQ3ljbG9uZSBQYW0gUmVzb3Buc2UnLFxuICAgIGRhdGU6ICcyMDE1LTE1LTMnLFxuICAgIHRodW1ibmFpbDogJ2ltYWdlcy9zdG9yaWVzL3BhbS5qcGcnLFxuICAgIGtleXdvcmRzOiAnQ3ljbG9uZSwgRGlzYXN0ZXIgUmVzcG9uc2UsIFZhbnVhdHUsIEFmcmljYSdcbiAgfTtcbiAgdGhpcy5naXMgPSB7XG4gICAgdXJsOiAnbWFwZm9saW8vIy9tYXBAMTMuNDk2NDczLDEwLjQ1ODk4NCwzKHNhdGVsbGl0ZSxnYWRtMCkscHJvamVjdC9leHBvcnQ/ZmlsdGVycz1zZWN0b3JfX2MlMjUyMExJS0UlMjUyMCUyNTI3JTI1MjVHSVMlMjUyMCUyNTI2JTI1MjBJbmZvcm1hdGlvbiUyNTIwTWFuYWdlbWVudCUyNTI1JTI1MjclMjUyMCcsXG4gICAgbmFtZTogJ0dJUyBQcm9qZWN0cycsXG4gICAgZGF0ZTogJzIwMTUtMzAtMTInLFxuICAgIHRodW1ibmFpbDogJ2ltYWdlcy9zdG9yaWVzL2dpcy5qcGcnLFxuICAgIGtleXdvcmRzOiAnR0lTLCBNaXNzaW5nIE1hcHMsIE1hcCdcbiAgfTtcbiAgdGhpcy5kaXNhc3RlcnMgPSB7XG4gICAgdXJsOiAnbWFwZm9saW8vIy9tYXBAMTkuMTQ1MTY4LDQxLjY2MDE1NiwyKHNhdGVsbGl0ZSxnYWRtMCksZGlzYXN0ZXJUeXBlP2ZpbHRlcnM9aXJvY19zdGF0dXNfX2MlMjUyMExJS0UlMjUyMCUyNTI3JTI1MjVNb25pdG9yaW5nJTI1MjUlMjUyN09SJTI1MjBpcm9jX3N0YXR1c19fYyUyNTIwTElLRSUyNTIwJTI1MjclMjUyNUFjdGl2ZSUyNTI1JTI1MjclMjUyMCZjYXRlZ29yeT1IdW1hbiUyMFJlbGF0ZWQnLFxuICAgIG5hbWU6ICdBY3RpdmUgUmVzcG9uc2VzJyxcbiAgICBkYXRlOiAnMjAxNS0zMC0xMicsXG4gICAgdGh1bWJuYWlsOiAnaW1hZ2VzL3N0b3JpZXMvZGlzYXN0ZXJzLmpwZycsXG4gICAga2V5d29yZHM6ICdJUk9DLCBSZXNwb25zZSwgRGlzYXN0ZXInXG4gIH07XG4gIHRoaXMucG9wbW92ZW1lbnQgPSB7XG4gICAgdXJsOiAnbWFwZm9saW8vIy9tYXBANDUuNDc1NTQwLDE1Ljc1NDM5NSw1KHNhdGVsbGl0ZSxnYWRtMCksZGlzYXN0ZXJUeXBlP2ZpbHRlcnM9ZGlzYXN0ZXJfdHlwZV9fYyUyNTIwTElLRSUyNTIwJTI1MjclMjUyNVBvcHVsYXRpb24lMjUyME1vdmVtZW50JTI1MjUlMjUyNyUyNTIwQU5EJTI1MjAlMjUyOGlyb2Nfc3RhdHVzX19jJTI1MjBMSUtFJTI1MjAlMjUyNyUyNTI1TW9uaXRvcmluZyUyNTI1JTI1MjdPUiUyNTIwaXJvY19zdGF0dXNfX2MlMjUyMExJS0UlMjUyMCUyNTI3JTI1MjVBY3RpdmUlMjUyNSUyNTI3JTI1MjAlMjUyOSZjYXRlZ29yeT1IdW1hbiUyMFJlbGF0ZWQnLFxuICAgIG5hbWU6ICdFdXJvcGVhbiBQb3AgTW92ZW1lbnQnLFxuICAgIGRhdGU6ICcyMDE1LTMwLTEyJyxcbiAgICB0aHVtYm5haWw6ICdpbWFnZXMvc3Rvcmllcy9wb3Btb3ZlbWVudC5qcGcnLFxuICAgIGtleXdvcmRzOiAnSVJPQywgUmVzcG9uc2UsIERpc2FzdGVyLCBQb3B1bGF0aW9uIE1vdmVtZW50J1xuICB9O1xuICB0aGlzLmN1cnJlbnRwcm9qZWN0cyA9IHtcbiAgICB1cmw6ICdtYXBmb2xpby8jL21hcEAyNC42ODY5NTIsMjcuMjQ2MDk0LDIoc2F0ZWxsaXRlLGdhZG0wKSxwcm9qZWN0JyxcbiAgICBuYW1lOiAnQ3VycmVudCBQcm9qZWN0cycsXG4gICAgZGF0ZTogJzIwMTUtMzAtMTInLFxuICAgIHRodW1ibmFpbDogJ2ltYWdlcy9zdG9yaWVzL3Byb2plY3RzLmpwZycsXG4gICAga2V5d29yZHM6ICdJUlAsIEFmcmljYSwgQU1FRSwgTEFDLCBXb3JsZCwgUHJvZ3JhbXMsIFByb2plY3RzJ1xuICB9O1xuICB0aGlzLmhhaXRpcHJvamVjdHMgPSB7XG4gICAgdXJsOidtYXBmb2xpby8jL21hcEAxOC45NDAwNjIsLTcxLjY1MDA4NSw4KHNhdGVsbGl0ZSxnYWRtMCkscHJvamVjdD9maWx0ZXJzPW51bGwmZGV0YWlscy1wYW5lbD1vcGVuJyxcbiAgICBuYW1lOiAnSEFQIFByb2plY3RzJyxcbiAgICBkYXRlOiAnMjAxNS0zMC0xMicsXG4gICAgdGh1bWJuYWlsOiAnaW1hZ2VzL3N0b3JpZXMvaGFwLmpwZycsXG4gICAga2V5d29yZHM6ICdMQUMsIEhBUCwgSGFpdGksIFByb2dyYW1zLCBQcm9qZWN0cydcbiAgfTtcbiAgdGhpcy5nZHBjID0ge1xuICAgIHVybDonbWFwZm9saW8vIy9tYXBANi40ODk5ODMsMTguMTA1NDY5LDIoc2F0ZWxsaXRlLGdhZG0wKSxwcm9qZWN0P2ZpbHRlcnM9YnVzaW5lc3NfdW5pdF9fYyUyNTIwTElLRSUyNTIwJTI1MjclMjUyNUdEUEMlMjUyNSUyNTI3JTI1MjAnLFxuICAgIG5hbWU6ICdHRFBDIFByb2plY3RzJyxcbiAgICBkYXRlOiAnMjAxNS0zMC0xMicsXG4gICAgdGh1bWJuYWlsOiAnaW1hZ2VzL3N0b3JpZXMvZ2RwYy5qcGcnLFxuICAgIGtleXdvcmRzOiAnR0RQQywgUHJvZ3JhbXMsIFByb2plY3RzJ1xuICB9O1xuICB0aGlzLmxhY3Byb2plY3RzID0ge1xuICAgIHVybDonbWFwZm9saW8vIy9tYXBALTEyLjM4MjkyOCwtNjQuMDI4MzIwLDQoc2F0ZWxsaXRlLGdhZG0wKSxwcm9qZWN0P2ZpbHRlcnM9YnVzaW5lc3NfdW5pdF9fYyUyNTIwTElLRSUyNTIwJTI1MjclMjUyNUxBQyUyNTI1JTI1MjclMjUyMCcsXG4gICAgbmFtZTogJ0dEUEMgUHJvamVjdHMnLFxuICAgIGRhdGU6ICcyMDE1LTMwLTEyJyxcbiAgICB0aHVtYm5haWw6ICdpbWFnZXMvc3Rvcmllcy9sYWMuanBnJyxcbiAgICBrZXl3b3JkczogJ0xBQywgUHJvZ3JhbXMsIFByb2plY3RzJ1xuICB9O1xuICB0aGlzLmFtZWVwcm9qZWN0cyA9IHtcbiAgICB1cmw6J21hcGZvbGlvLyMvbWFwQDYuNDg5OTgzLDE4LjEwNTQ2OSwyKHNhdGVsbGl0ZSxnYWRtMCkscHJvamVjdD9maWx0ZXJzPWJ1c2luZXNzX3VuaXRfX2MlMjUyMExJS0UlMjUyMCUyNTI3JTI1MjVHRFBDJTI1MjUlMjUyNyUyNTIwJyxcbiAgICBuYW1lOiAnR0RQQyBQcm9qZWN0cycsXG4gICAgZGF0ZTogJzIwMTUtMzAtMTInLFxuICAgIHRodW1ibmFpbDogJ2ltYWdlcy9zdG9yaWVzL2FtZWUuanBnJyxcbiAgICBrZXl3b3JkczogJ0FNRUUsIFByb2dyYW1zLCBQcm9qZWN0cydcbiAgfTtcbiAgdGhpcy5hZnJpY2Fwcm9qZWN0cyA9IHtcbiAgICB1cmw6J21hcGZvbGlvLyMvbWFwQC0xLjU4MTgzMCwyMy41OTg2MzMsNChzYXRlbGxpdGUsZ2FkbTApLHByb2plY3QnLFxuICAgIG5hbWU6ICdBZnJpY2EgUHJvamVjdHMnLFxuICAgIGRhdGU6ICcyMDE1LTMwLTEyJyxcbiAgICB0aHVtYm5haWw6ICdpbWFnZXMvc3Rvcmllcy9hZnJpY2EuanBnJyxcbiAgICBrZXl3b3JkczogJ0FmcmljYSwgUHJvZ3JhbXMsIFByb2plY3RzJ1xuICB9O1xuICB0aGlzLnJmbCA9IHtcbiAgICB1cmw6J21hcGZvbGlvLyMvbWFwQDM3LjQwNTA3NCwtOTQuMDIwOTk2LDUoc2F0ZWxsaXRlLGdhZG0xKSxwcm9qZWN0P2ZpbHRlcnM9YnVzaW5lc3NfdW5pdF9fYyUyNTIwTElLRSUyNTIwJTI1MjclMjUyNUlITCUyNTI1JTI1MjclMjUyME9SJTI1MjBidXNpbmVzc191bml0X19jJTI1MjBMSUtFJTI1MjAlMjUyNyUyNTI1UkZMJTI1MjUlMjUyNyUyNTIwJmRldGFpbHMtcGFuZWw9b3BlbicsXG4gICAgbmFtZTogJ1JGTCBQcm9qZWN0cycsXG4gICAgZGF0ZTogJzIwMTUtMzAtMTInLFxuICAgIHRodW1ibmFpbDogJ2ltYWdlcy9zdG9yaWVzL3JmbC5qcGcnLFxuICAgIGtleXdvcmRzOiAnUkZMLCBSZXN0b3JpbmcgRmFtaWx5IExpbmtzLCBQcm9ncmFtcywgUHJvamVjdHMnXG4gIH07XG5cbiAgLyoqXG4gICAqIEZvciBsYXllcnMsIHdlIHRyeSBhbmQgZ2V0IGFuIGFsaWFzIGZvciBldmVyeXRoaW5nLCBzbyBpZiBpdCdzIGEgVVJMIHRoYXRcbiAgICogZG9lcyBub3QgbWF0Y2gsIHdlIGp1c3Qgd2FudCB0byByZXR1cm4gaXRzZWxmIHNvIHdlIGNhbiBmZXRjaCB0aGF0IGdpdmVuIHVybC5cbiAgICpcbiAgICogQHBhcmFtIG5hbWVcbiAgICogQHJldHVybnMgeyp9XG4gICAqL1xuICB0aGlzLmZpbmQgPSBmdW5jdGlvbihuYW1lKSB7XG4gICAgdmFyIHZhbCA9IHRoaXNbbmFtZV0gfHwgdGhpc1tuYW1lLnRvTG93ZXJDYXNlKCldO1xuICAgIGlmICh0eXBlb2YgdmFsICE9PSAndW5kZWZpbmVkJyAmJiB2YWwgIT09IG51bGwpIHtcbiAgICAgIHJldHVybiB2YWw7XG4gICAgfVxuICAgIGlmIChuYW1lLnNsaWNlKDAsIDQpLnRvTG93ZXJDYXNlKCkgPT09ICdodHRwJykge1xuICAgICAgcmV0dXJuIG5hbWU7XG4gICAgfVxuICAgIGNvbnNvbGUuZXJyb3IoJ0NPVUxEIE5PVCBGSU5EIEFMSUFTOiAnICsgbmFtZSk7XG4gICAgcmV0dXJuIG51bGw7XG4gIH07XG5cbn0pO1xuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IE5pY2hvbGFzIEhhbGxhaGFuIDxuaGFsbGFoYW5Ac3BhdGlhbGRldi5jb20+XG4gKiAgICAgICBvbiA2LzMvMTQuXG4gKi9cblxudmFyIEZlYXR1cmVTZXQgPSByZXF1aXJlKCcuLi8uLi8uLi9saWIvZmVhdHVyZWxhYmVsL0ZlYXR1cmVTZXQnKTtcbnZhciBSZXNvdXJjZSA9IHJlcXVpcmUoJy4vUmVzb3VyY2UnKTtcbnZhciBiYm94VXJsID0gcmVxdWlyZSgnLi92ZWN0b3InKS5iYm94VXJsO1xudmFyIGJib3hSZXNvdXJjZXMgPSByZXF1aXJlKCcuL3ZlY3RvcicpLmJib3hSZXNvdXJjZXM7XG5cbnZhciBMID0gcmVxdWlyZSgnLi92ZWN0b3InKS5MO1xudmFyIGFuZ3VsYXIgPSByZXF1aXJlKCcuL3ZlY3RvcicpLmFuZ3VsYXI7XG52YXIgJHJvb3RTY29wZSA9IHJlcXVpcmUoJy4vdmVjdG9yJykuJHJvb3RTY29wZTtcbnZhciAkaHR0cCA9IHJlcXVpcmUoJy4vdmVjdG9yJykuJGh0dHA7XG5cbm1vZHVsZS5leHBvcnRzID0gQkJveEdlb0pTT047XG5cblxuZnVuY3Rpb24gQkJveEdlb0pTT04oY29uZmlnKSB7XG4gIFJlc291cmNlLmNhbGwodGhpcywgY29uZmlnKTtcbiAgaWYoY29uZmlnLmJib3h1cmwpIHtcbiAgICB0aGlzLl9iYm94dXJsID0gYmJveFVybCA9IGNvbmZpZy5iYm94dXJsO1xuICB9XG4gIHRoaXMuX2ZlYXR1cmVzID0ge307XG4gIHRoaXMuX2ZlYXR1cmVMYXllcnNCeUxldmVsID0ge307XG4gIHRoaXMuX2FsbEZlYXR1cmVMYXllcnMgPSB7fTtcbiAgaWYgKGNvbmZpZy5wcm9wZXJ0aWVzICYmIGNvbmZpZy5wcm9wZXJ0aWVzLmxhYmVsUHJvcGVydHkpIHtcbiAgICB0aGlzLl9mZWF0dXJlU2V0ID0gbmV3IEZlYXR1cmVTZXQoKTtcbiAgfVxuICB0aGlzLl9kZWZhdWx0VGhlbWUgPSBjb25maWcuZGVmYXVsdFRoZW1lIHx8ICdwcm9qZWN0JztcblxuICBpZiAoY29uZmlnLmRldGFpbHNVcmwpIHtcbiAgICB0aGlzLl9kZXRhaWxzVXJsID0gY29uZmlnLmRldGFpbHNVcmw7XG4gIH1cblxuICBiYm94UmVzb3VyY2VzLnB1c2godGhpcyk7XG4gIHRoaXMuX3Jlc0lkeCA9IGJib3hSZXNvdXJjZXMubGVuZ3RoIC0gMTtcbn1cblxuQkJveEdlb0pTT04ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShSZXNvdXJjZS5wcm90b3R5cGUpO1xuQkJveEdlb0pTT04ucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gQkJveEdlb0pTT047XG5cblxuQkJveEdlb0pTT04ucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgYmJveFJlc291cmNlcy5zcGxpY2UodGhpcy5fcmVzSWR4LDEpO1xufTtcblxuXG5CQm94R2VvSlNPTi5wcm90b3R5cGUuZ2V0TGF5ZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBsYXllciA9IFJlc291cmNlLnByb3RvdHlwZS5nZXRMYXllci5jYWxsKHRoaXMpO1xuICBsYXllci5kZXN0cm95UmVzb3VyY2UgPSB0aGlzLmRlc3Ryb3k7IC8vIGdpdmVzIHRoZSBtYXAgdG8gZGVzdHJveSB0aGUgYmJveGdlb2pzb24gdmVjdG9yIHByb3ZpZGVyIHJlc291cmNlXG4gIHJldHVybiBsYXllcjtcbn07XG5cblxuQkJveEdlb0pTT04ucHJvdG90eXBlLl9nZXRGZWF0dXJlcyA9IGZ1bmN0aW9uIChmZWF0T2JqKSB7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgdmFyIHRoZW1lID0gJHJvb3RTY29wZS4kc3RhdGVQYXJhbXMudGhlbWUgfHwgc2VsZi5fZGVmYXVsdFRoZW1lO1xuICB2YXIgZmlsdGVycyA9ICdudWxsJztcbiAgaWYgKCRyb290U2NvcGUuJHN0YXRlUGFyYW1zLmZpbHRlcnMpIHtcbiAgICBmaWx0ZXJzID0gJHJvb3RTY29wZS4kc3RhdGVQYXJhbXMuZmlsdGVycztcbiAgfVxuICB2YXIgdXJsID0gdGhpcy5fdXJsLnJlcGxhY2UoJzp0aGVtZScsIHRoZW1lKVxuICAgIC5yZXBsYWNlKCc6bGV2ZWwnLCBmZWF0T2JqLmxldmVsKVxuICAgIC5yZXBsYWNlKCc6aWRzJywgZmVhdE9iai5ndWlkKVxuICAgIC5yZXBsYWNlKCc6ZmlsdGVycycsIGZpbHRlcnMpO1xuICB2YXIgcHJveHlQYXRoID0gY29uZmlnLnByb3h5UGF0aCh1cmwpO1xuXG4gIC8vIGEgY2FjaGUgbWFrZXMgc2Vuc2UgaWYgdGhlIGJib3hnZW9qc29uIG9iamVjdCBpcyByZWluc3RhbnRpYXRlZFxuICAkaHR0cC5nZXQodXJsLCB7Y2FjaGU6IHRydWV9KS5zdWNjZXNzKGZ1bmN0aW9uIChnZW9qc29uLCBzdGF0dXMpIHtcbiAgICBwcm9jZXNzRmVhdHVyZXMoc2VsZiwgZmVhdE9iaiwgZ2VvanNvbik7XG4gIH0pLmVycm9yKGZ1bmN0aW9uKGVycikge1xuICAgICRodHRwLmdldChwcm94eVBhdGgpLnN1Y2Nlc3MoZnVuY3Rpb24gKGdlb2pzb24sIHN0YXR1cykge1xuICAgICAgcHJvY2Vzc0ZlYXR1cmVzKHNlbGYsIGZlYXRPYmosIGdlb2pzb24pO1xuICAgIH0pLmVycm9yKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1VuYWJsZSB0byBnZXRGZWF0dXJlczogJyArIHVybCk7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuZnVuY3Rpb24gcHJvY2Vzc0ZlYXR1cmVzKHNlbGYsIGZlYXRPYmosIGdlb2pzb24pIHtcbiAgaWYgKGdlb2pzb24uZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdVbmFibGUgdG8gZmV0Y2ggZmVhdHVyZTogJyArIGdlb2pzb24uZXJyb3IpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmICghZ2VvanNvbi5mZWF0dXJlcyB8fCBnZW9qc29uLmZlYXR1cmVzLmxlbmd0aCA8IDEpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgZmVhdCA9IGdlb2pzb24uZmVhdHVyZXNbMF07XG5cbiAgLy8gcHV0dGluZyBleGlzdGluZyBwcm9wZXJ0aWVzIGludG8gbmV3IGZlYXR1cmUgb2JqZWN0IHByb3BlcnRpZXNcbiAgZm9yICh2YXIga2V5IGluIGZlYXRPYmopIHtcbiAgICBmZWF0LnByb3BlcnRpZXNba2V5XSA9IGZlYXRPYmpba2V5XTtcbiAgICBkZWxldGUgZmVhdE9ialtrZXldO1xuICB9XG5cbiAgLy8gZXh0ZW5kaW5nIHByb3BlcnRpZXMgZnJvbSB0aGUgY29uZmlnIGZpbGVcbiAgZm9yICh2YXIga2V5IGluIHNlbGYuX2NvbmZpZy5wcm9wZXJ0aWVzKSB7XG4gICAgZmVhdC5wcm9wZXJ0aWVzW2tleV0gPSBzZWxmLl9jb25maWcucHJvcGVydGllc1trZXldO1xuICAgIC8vIExheWVyQ29uZmlnIHdpbGwgc3RhdGUgdGhlIG5hbWUgb2YgdGhlIEJCb3hHZW9KU09OIG1ldGhvZCB0byBiZSBjYWxsZWQgb24gY2xpY2suXG4gICAgaWYgKGtleSA9PT0gJ29uU2VsZWN0JyB8fCBrZXkgPT09ICdvbkRlc2VsZWN0Jykge1xuICAgICAgdmFyIGZuTmFtZSA9IHNlbGYuX2NvbmZpZy5wcm9wZXJ0aWVzW2tleV07XG4gICAgICBmZWF0LnByb3BlcnRpZXNba2V5XSA9IHNlbGZbZm5OYW1lXTtcbiAgICB9XG4gIH1cblxuICBmb3IgKHZhciBrIGluIGZlYXQpIHtcbiAgICBmZWF0T2JqW2tdID0gZmVhdFtrXTtcbiAgfVxuICBhbmd1bGFyLmV4dGVuZChmZWF0T2JqLCBmZWF0KTtcbiAgY29uc29sZS5sb2coJ2ZldGNoZWQgZmVhdHVyZTogJyArIGZlYXRPYmoucHJvcGVydGllcy5uYW1lKTtcblxuICBpZiAoIXNlbGYuX2dlb2pzb25MYXllcikge1xuICAgIHNlbGYuX2dldExheWVyKCk7XG4gICAgY29uc29sZS5sb2coJ2NyZWF0aW5nIGxheWVyIGluIF9nZXRGZWF0dXJlcycpO1xuICB9XG5cbiAgdmFyIG9wdGlvbnMgPSBzZWxmLl9nZW9qc29uTGF5ZXIub3B0aW9ucztcbiAgdmFyIGZlYXRMYXllciA9IEwuR2VvSlNPTi5nZW9tZXRyeVRvTGF5ZXIoZmVhdE9iaiwgb3B0aW9ucy5wb2ludFRvTGF5ZXIsIG9wdGlvbnMuY29vcmRzVG9MYXRMbmcsIG9wdGlvbnMpO1xuICBMLnN0YW1wKGZlYXRMYXllcik7XG4gIGZlYXRMYXllci5mZWF0dXJlID0gTC5HZW9KU09OLmFzRmVhdHVyZShmZWF0T2JqKTtcbiAgZmVhdExheWVyLmRlZmF1bHRPcHRpb25zID0gZmVhdExheWVyLm9wdGlvbnM7XG4gIHNlbGYuX2dlb2pzb25MYXllci5yZXNldFN0eWxlKGZlYXRMYXllcik7XG4gIGlmIChvcHRpb25zLm9uRWFjaEZlYXR1cmUpIHtcbiAgICBvcHRpb25zLm9uRWFjaEZlYXR1cmUoZmVhdE9iaiwgZmVhdExheWVyKTtcbiAgfVxuXG4gIGFkZExheWVyKHNlbGYsIGZlYXRMYXllcik7XG59XG5cblxuLyoqXG4gKiBTaG91bGQgb25seSBiZSB1c2VkIGJ5IEJCb3hMYXllciBvYmplY3RzLlxuICogQ29uc2lkZXIgdGhpcyBhIHByaXZhdGUgbWV0aG9kLlxuICpcbiAqIEBwYXJhbSBzZWxmXG4gKiBAcGFyYW0gZmVhdExheWVyXG4gKi9cbmZ1bmN0aW9uIGFkZExheWVyKHNlbGYsIGZlYXRMYXllcikge1xuICBpZiAoc2VsZi5fZmVhdHVyZVNldCkge1xuICAgIHNlbGYuX2ZlYXR1cmVTZXQuYWRkRmVhdHVyZShmZWF0TGF5ZXIsIHNlbGYuX2dlb2pzb25MYXllcik7XG4gIH1cbiAgc2VsZi5fZ2VvanNvbkxheWVyLmFkZExheWVyKGZlYXRMYXllcik7XG5cbiAgdmFyIHByb3BzID0gZmVhdExheWVyLmZlYXR1cmUucHJvcGVydGllcztcbiAgdmFyIGxldmVsID0gcHJvcHMubGV2ZWw7XG4gIGlmICghc2VsZi5fZmVhdHVyZUxheWVyc0J5TGV2ZWxbbGV2ZWxdKSB7XG4gICAgc2VsZi5fZmVhdHVyZUxheWVyc0J5TGV2ZWxbbGV2ZWxdID0gW107XG4gIH1cbiAgc2VsZi5fZmVhdHVyZUxheWVyc0J5TGV2ZWxbbGV2ZWxdLnB1c2goZmVhdExheWVyKTtcbiAgc2VsZi5fYWxsRmVhdHVyZUxheWVyc1twcm9wcy5ndWlkXSA9IGZlYXRMYXllcjtcbn1cblxuXG5CQm94R2VvSlNPTi5wcm90b3R5cGUucHJvY2Vzc0ZlYXR1cmVJdGluZXJhcnkgPSBmdW5jdGlvbiAoZmVhdEl0aW5lcmFyeSkge1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIHZhciBhY3RpdmVMZXZlbHMgPSB7fTtcbiAgc2VsZi5fYWN0aXZlTGV2ZWxzID0gYWN0aXZlTGV2ZWxzO1xuICBzZWxmLl9mZWF0SXRpbmVyYXJ5SGFzaCA9IHt9O1xuICBmb3IgKHZhciBpPTAsIGxlbiA9IGZlYXRJdGluZXJhcnkubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgICB2YXIgbyA9IGZlYXRJdGluZXJhcnlbaV07XG4gICAgYWN0aXZlTGV2ZWxzW28ubGV2ZWxdID0gdHJ1ZTtcbiAgICBzZWxmLl9mZWF0SXRpbmVyYXJ5SGFzaFtvLmd1aWRdID0gbztcbiAgICB2YXIgZ3VpZCA9IG8uZ3VpZCB8fCBvLmlkO1xuICAgIGlmICghc2VsZi5fZmVhdHVyZXNbZ3VpZF0pIHtcbiAgICAgIC8vIGFkZGluZyBmZWF0dXJlIHRvIGZlYXR1cmVzIGhhc2ggKGFsbCBmZWF0dXJlcyBldmVyKVxuICAgICAgc2VsZi5fZmVhdHVyZXNbZ3VpZF0gPSBvO1xuICAgICAgLy8gZ2V0dGluZyB0aGUgZmVhdHVyZXMgKGluY2x1ZGluZyBiYXNpYywgc2ltcGxpZmllZCBnZW9tZXRyeSlcbiAgICAgIHNlbGYuX2dldEZlYXR1cmVzKG8pO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBpZiB3ZSBhbHJlYWR5IGhhdmUgYSBsYXllciBhbmQgaXQgaXMgbm90IG9uIHRoZSBtYXAgYnV0IHNob3VsZCBiZSB0aGVyZSwgYWRkIGl0IHRvIHRoZSBnZW9qc29uIGxheWVyXG4gICAgICB2YXIgbCA9IHNlbGYuX2FsbEZlYXR1cmVMYXllcnNbZ3VpZF07XG4gICAgICBpZiAobCkge1xuICAgICAgICBhZGRMYXllcihzZWxmLCBsKTtcbiAgICAgIH1cblxuICAgIH1cbiAgfVxuICBzZWxmLl9yZW1vdmVJbmFjdGl2ZUxheWVycyhzZWxmKTtcbiAgcmVtb3ZlSW5hY3RpdmVMYWJlbHMoc2VsZik7XG59O1xuXG5cbi8qKlxuICogVGhpcyBpcyBjYWxsZWQgYnkgdGhlIG9uU2VsZWN0IGV2ZW50IGZvciB0aGUgZmVhdHVyZWxhYmVscy5cbiAqIEBwYXJhbSBmZWF0dXJlTGF5ZXJcbiAqL1xuQkJveEdlb0pTT04ucHJvdG90eXBlLmZldGNoRmVhdHVyZURldGFpbHMgPSBmdW5jdGlvbihmZWF0dXJlTGF5ZXIpIHtcbiAgdmFyIHByb3BlcnRpZXMgPSBmZWF0dXJlTGF5ZXIuZmVhdHVyZS5wcm9wZXJ0aWVzO1xuICB2YXIgZGV0YWlsc1VybCA9IHByb3BlcnRpZXMuZGV0YWlsc1VybDtcbiAgaWYgKCFkZXRhaWxzVXJsKSB7XG4gICAgY29uc29sZS5lcnJvcignV2UgbmVlZCBhIGRldGFpbHNVcmwgdG8gZmV0Y2hGZWF0dXJlRGV0YWlscycpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciB0aGVtZSA9ICRyb290U2NvcGUuJHN0YXRlUGFyYW1zLnRoZW1lIHx8IHByb3BlcnRpZXMuZGVmYXVsdFRoZW1lIHx8ICdwcm9qZWN0JztcbiAgdmFyIHRoZW1lTmFtZSA9ICRyb290U2NvcGUudGhlbWVOYW1lSGFzaFt0aGVtZV07XG4gIGlmICh0eXBlb2YgcHJvcGVydGllcy5sZXZlbCA9PT0gJ3VuZGVmaW5lZCcgfHwgcHJvcGVydGllcy5sZXZlbCA9PT0gbnVsbCkge1xuICAgIGNvbnNvbGUuZXJyb3IoJ3dlIG5lZWQgYSBsZXZlbC4nKTtcbiAgfVxuXG4gIHZhciBmaWx0ZXJzID0gJ251bGwnO1xuICBpZiAoJHJvb3RTY29wZS4kc3RhdGVQYXJhbXMuZmlsdGVycykge1xuICAgIGZpbHRlcnMgPSAkcm9vdFNjb3BlLiRzdGF0ZVBhcmFtcy5maWx0ZXJzO1xuICB9XG5cbiAgZGV0YWlsc1VybCA9IGRldGFpbHNVcmwucmVwbGFjZSgnOnRoZW1lJywgdGhlbWUpXG4gICAgLnJlcGxhY2UoJzpndWlkcycsIHByb3BlcnRpZXMuZ3VpZClcbiAgICAucmVwbGFjZSgnOmxldmVsJywgcHJvcGVydGllcy5sZXZlbClcbiAgICAucmVwbGFjZSgnOmZpbHRlcnMnLCBmaWx0ZXJzKTtcblxuICAkaHR0cC5nZXQoZGV0YWlsc1VybCwge2NhY2hlOiB0cnVlfSkuc3VjY2VzcyhmdW5jdGlvbiAoZGV0YWlscykge1xuXG4gICAgZmVhdHVyZUxheWVyLmZlYXR1cmUucHJvcGVydGllcy5zYWxlc2ZvcmNlID0ge307XG4gICAgZmVhdHVyZUxheWVyLmZlYXR1cmUucHJvcGVydGllcy5zYWxlc2ZvcmNlW3RoZW1lTmFtZV0gPSBkZXRhaWxzO1xuICAgICRyb290U2NvcGUuJGJyb2FkY2FzdCgnZGV0YWlscycsIGZlYXR1cmVMYXllcik7XG5cbiAgfSkuZXJyb3IoZnVuY3Rpb24oZXJyKXtcbiAgICBjb25zb2xlLmVycm9yKEpTT04uc3RyaW5naWZ5KGVycikpO1xuICB9KTtcblxufTtcblxuXG5CQm94R2VvSlNPTi5wcm90b3R5cGUuc2hvd0ZlYXR1cmVQcm9wZXJ0aWVzID0gZnVuY3Rpb24oZmVhdHVyZUxheWVyKSB7XG4gICRyb290U2NvcGUuJGJyb2FkY2FzdCgnZGV0YWlscycsIGZlYXR1cmVMYXllcik7XG59O1xuXG5cbkJCb3hHZW9KU09OLnByb3RvdHlwZS5jbG9zZURldGFpbHMgPSBmdW5jdGlvbiAoKSB7XG4gICRyb290U2NvcGUuY2xvc2VQYXJhbSgnZGV0YWlscy1wYW5lbCcpO1xufTtcblxuXG5mdW5jdGlvbiByZW1vdmVJbmFjdGl2ZUxhYmVscyhzZWxmKSB7XG4gIHZhciBhbGxGZWF0dXJlTGF5ZXJzID0gc2VsZi5fYWxsRmVhdHVyZUxheWVycztcbiAgdmFyIGZlYXR1cmVJdGluZXJhcnkgPSBzZWxmLl9mZWF0SXRpbmVyYXJ5SGFzaDtcbiAgZm9yICh2YXIga2V5IGluIGFsbEZlYXR1cmVMYXllcnMpIHtcbiAgICBpZiAoIWZlYXR1cmVJdGluZXJhcnlba2V5XSkge1xuICAgICAgdmFyIGZlYXR1cmVMYXllciA9IGFsbEZlYXR1cmVMYXllcnNba2V5XTtcbiAgICAgIGlmICggZmVhdHVyZUxheWVyLmdlb2pzb25MYXllciAmJiBmZWF0dXJlTGF5ZXIubGFiZWwpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJSRU1PVklORzogXCIgKyBmZWF0dXJlTGF5ZXIuZmVhdHVyZS5wcm9wZXJ0aWVzLm5hbWUpO1xuICAgICAgICB3aW5kb3cubWFwLnJlbW92ZUxheWVyKGZlYXR1cmVMYXllci5sYWJlbCk7IC8vIE5IIEZJWE1FXG4gICAgICAgIGZlYXR1cmVMYXllci5sYWJlbCA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIGlmICggZmVhdHVyZUxheWVyLmdlb2pzb25MYXllciAmJiBmZWF0dXJlTGF5ZXIuZ2VvanNvbkxheWVyLmxhYmVsKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiUkVNT1ZJTkc6IFwiICsgZmVhdHVyZUxheWVyLmZlYXR1cmUucHJvcGVydGllcy5uYW1lKTtcbiAgICAgICAgd2luZG93Lm1hcC5yZW1vdmVMYXllcihmZWF0dXJlTGF5ZXIuZ2VvanNvbkxheWVyLmxhYmVsKTsgLy8gTkggRklYTUVcbiAgICAgICAgZmVhdHVyZUxheWVyLmdlb2pzb25MYXllci5sYWJlbCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogRm9yIGFsbCBvZiB0aGUgYWN0aXZlIGxheWVycyB0aGF0IHdlIGhhdmUsIHJlbW92ZSBsYXllcnMgdGhhdCBhcmVcbiAqIG5vdCBwYXJ0IG9mIHRoZSBjdXJyZW50IHNldCBvZiBhY3RpdmUgbGV2ZWxzLlxuICpcbiAqIEBwcml2YXRlXG4gKi9cbkJCb3hHZW9KU09OLnByb3RvdHlwZS5fcmVtb3ZlSW5hY3RpdmVMYXllcnMgPSBmdW5jdGlvbihzZWxmKSB7XG4gIHZhciBhY3RpdmVMZXZlbHMgPSB0aGlzLl9hY3RpdmVMZXZlbHM7XG4gIHZhciBmZWF0dXJlTGF5ZXJzQnlMZXZlbCA9IHRoaXMuX2ZlYXR1cmVMYXllcnNCeUxldmVsO1xuICBmb3IgKHZhciBsZXZlbCBpbiBmZWF0dXJlTGF5ZXJzQnlMZXZlbCkge1xuICAgIC8vIGlmIHRoZSBsZXZlbCBpcyBub3QgYW4gYWN0aXZlIGxldmVsLCByZW1vdmUgZnJvbSBtYXBcbiAgICBpZiAoIWFjdGl2ZUxldmVsc1tsZXZlbF0pIHtcbiAgICAgIHZhciBsYXllcnMgPSBmZWF0dXJlTGF5ZXJzQnlMZXZlbFtsZXZlbF07XG4gICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gbGF5ZXJzLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICAgIHZhciBsYXllciA9IGxheWVyc1tpXTtcbiAgICAgICAgc2VsZi5fZ2VvanNvbkxheWVyLnJlbW92ZUxheWVyKGxheWVyKTtcblxuICAgICAgICBjb25zb2xlLmxvZygnUmVtb3ZlZCBMYXllcjogJyArIGxheWVyLmZlYXR1cmUucHJvcGVydGllcy5uYW1lKTtcbiAgICAgIH1cbiAgICAgIGRlbGV0ZSBmZWF0dXJlTGF5ZXJzQnlMZXZlbFtsZXZlbF07XG4gICAgfVxuICB9XG59O1xuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IE5pY2hvbGFzIEhhbGxhaGFuIDxuaGFsbGFoYW5Ac3BhdGlhbGRldi5jb20+XG4gKiAgICAgICBvbiA2LzMvMTQuXG4gKi9cblxudmFyIFJlc291cmNlID0gcmVxdWlyZSgnLi9SZXNvdXJjZScpO1xudmFyICRyb290U2NvcGUgPSByZXF1aXJlKCcuL3ZlY3RvcicpLiRyb290U2NvcGU7XG5cbm1vZHVsZS5leHBvcnRzID0gR2VvSlNPTjtcblxuLyoqXG4gKiBUaGlzIGlzIGEgYmFzaWMgR2VvSlNPTiBWZWN0b3JQcm92aWRlci5cbiAqIEBwYXJhbSBjb25maWdcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBHZW9KU09OKGNvbmZpZykge1xuICBSZXNvdXJjZS5jYWxsKHRoaXMsIGNvbmZpZyk7XG4gIHRoaXMuX2dlb2pzb24gPSBudWxsO1xufVxuXG5HZW9KU09OLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoUmVzb3VyY2UucHJvdG90eXBlKTtcbkdlb0pTT04ucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gR2VvSlNPTjtcblxuR2VvSlNPTi5wcm90b3R5cGUuZmV0Y2ggPSBmdW5jdGlvbiAoY2IpIHtcbiAgaWYgKHRoaXMuX2dlb2pzb24gJiYgdHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKSB7XG4gICAgY2IodGhpcy5fZ2VvanNvbik7XG4gICAgcmV0dXJuO1xuICB9XG4gIHZhciBzZWxmID0gdGhpcztcbiAgUmVzb3VyY2UucHJvdG90eXBlLmZldGNoLmNhbGwodGhpcywgZnVuY3Rpb24oZGF0YSkge1xuICAgIHNlbGYuX2dlb2pzb24gPSBkYXRhO1xuICAgIGlmICh0eXBlb2Ygc2VsZi5fY29uZmlnLnByb3BlcnRpZXMgPT09ICdvYmplY3QnKSB7XG4gICAgICBpZiAoIGRhdGEudHlwZSA9PT0gJ0ZlYXR1cmVDb2xsZWN0aW9uJykge1xuICAgICAgICB2YXIgZmVhdHMgPSBkYXRhLmZlYXR1cmVzO1xuICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gZmVhdHMubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgICAgICAgICB2YXIgZmVhdCA9IGZlYXRzW2ldO1xuICAgICAgICAgIGlmICghZmVhdC5wcm9wZXJ0aWVzKSBmZWF0LnByb3BlcnRpZXMgPSB7fTtcbiAgICAgICAgICBhbmd1bGFyLmV4dGVuZChmZWF0LnByb3BlcnRpZXMsIHNlbGYuX2NvbmZpZy5wcm9wZXJ0aWVzKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHsgLy8gYSBmZWF0dXJlIG9yIGEgZ2VvbWV0cnkgdHlwZVxuICAgICAgICBpZiAoIWRhdGEucHJvcGVydGllcykgZGF0YS5wcm9wZXJ0aWVzID0ge307XG4gICAgICAgIGFuZ3VsYXIuZXh0ZW5kKGRhdGEucHJvcGVydGllcywgc2VsZi5fY29uZmlnLnByb3BlcnRpZXMpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicpIGNiKHNlbGYuX2dlb2pzb24pO1xuICB9KTtcbn07XG5cbkdlb0pTT04ucHJvdG90eXBlLmdldExheWVyID0gZnVuY3Rpb24oKSB7XG4gIGlmICh0aGlzLl9nZW9qc29uTGF5ZXIpIHJldHVybiB0aGlzLl9nZW9qc29uTGF5ZXI7XG4gIHZhciBsYXllciA9ICBSZXNvdXJjZS5wcm90b3R5cGUuZ2V0TGF5ZXIuY2FsbCh0aGlzKTtcbiAgdGhpcy5mZXRjaChmdW5jdGlvbihnZW9qc29uKXtcbiAgICBsYXllci5hZGREYXRhKGdlb2pzb24pO1xuICAgIGxheWVyLmVhY2hMYXllcihmdW5jdGlvbiAobCkge1xuICAgICAgbC5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICRyb290U2NvcGUuJGJyb2FkY2FzdCgnZGV0YWlscycsIGwpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xuICByZXR1cm4gbGF5ZXI7XG59O1xuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IE5pY2hvbGFzIEhhbGxhaGFuIDxuaGFsbGFoYW5Ac3BhdGlhbGRldi5jb20+XG4gKiAgICAgICBvbiA2LzMvMTQuXG4gKi9cblxudmFyIFJlc291cmNlID0gcmVxdWlyZSgnLi9SZXNvdXJjZScpO1xudmFyICRyb290U2NvcGUgPSByZXF1aXJlKCcuL3ZlY3RvcicpLiRyb290U2NvcGU7XG52YXIgdG9HZW9KU09OID0gcmVxdWlyZSgnLi92ZWN0b3InKS50b0dlb0pTT047XG52YXIgJCA9IHJlcXVpcmUoJy4vdmVjdG9yJykuJDtcblxubW9kdWxlLmV4cG9ydHMgPSBLTUw7XG5cbi8qKlxuICogQSBLTUwgUmVzb3VyY2UgZmV0Y2hlcyBLTUwgYW5kIHBhcnNlcyBpdCB3aXRoIHRvZ2VvanNvbi5qc1xuICogTm90ZSB0aGF0IHRvZ2VvanNvbi5qcyBoYXMgYnVncyBhbmQgZG9lcyBub3QgYWNjdXJhdGVseSBwYXJzZVxuICogc29tZSBvZiB0aGUgS01MIHNvdXJjZXMgd2UgaGF2ZSB0ZXN0ZWQgd2l0aC4gVGhpcyBsaWJyYXJ5IGhhc1xuICogYmVlbiBtb2RpZmllZCB3aXRoIG15IGhvdGZpeGVzLlxuICpcbiAqIEBwYXJhbSBjb25maWdcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBLTUwoY29uZmlnKSB7XG4gIFJlc291cmNlLmNhbGwodGhpcywgY29uZmlnKTtcbiAgdGhpcy5fZ2VvanNvbiA9IG51bGw7XG59XG5cbktNTC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFJlc291cmNlLnByb3RvdHlwZSk7XG5LTUwucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gS01MO1xuXG5LTUwucHJvdG90eXBlLmZldGNoID0gZnVuY3Rpb24gKGNiKSB7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgUmVzb3VyY2UucHJvdG90eXBlLmZldGNoLmNhbGwodGhpcywgZnVuY3Rpb24oZGF0YSkge1xuICAgIHZhciB4bWwgPSAkLnBhcnNlWE1MKGRhdGEpO1xuICAgIHNlbGYuX2dlb2pzb24gPSB0b0dlb0pTT04ua21sKHhtbCk7XG4gICAgaWYgKHR5cGVvZiBzZWxmLl9jb25maWcucHJvcGVydGllcyA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGlmICh0eXBlb2Ygc2VsZi5fZ2VvanNvbi5wcm9wZXJ0aWVzID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBzZWxmLl9nZW9qc29uLnByb3BlcnRpZXMgPSB7fTtcbiAgICAgIH1cbiAgICAgIGFuZ3VsYXIuZXh0ZW5kKHNlbGYuX2dlb2pzb24ucHJvcGVydGllcywgc2VsZi5fY29uZmlnLnByb3BlcnRpZXMpO1xuICAgICAgc2VsZi5fZ2VvanNvbi5wcm9wZXJ0aWVzLnNyY1R5cGUgPSAna21sJztcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJykgY2Ioc2VsZi5fZ2VvanNvbiwgc2VsZik7XG4gIH0pO1xufTtcblxuS01MLnByb3RvdHlwZS5nZXRMYXllciA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMuX2dlb2pzb25MYXllcikgcmV0dXJuIHRoaXMuX2dlb2pzb25MYXllcjtcbiAgdmFyIGxheWVyID0gIFJlc291cmNlLnByb3RvdHlwZS5nZXRMYXllci5jYWxsKHRoaXMpO1xuICB0aGlzLmZldGNoKGZ1bmN0aW9uKGdlb2pzb24pe1xuICAgIGxheWVyLmFkZERhdGEoZ2VvanNvbik7XG4gICAgbGF5ZXIuZWFjaExheWVyKGZ1bmN0aW9uIChsKSB7XG4gICAgICBsLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJHJvb3RTY29wZS4kYnJvYWRjYXN0KCdkZXRhaWxzJywgbCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG4gIHJldHVybiBsYXllcjtcbn07XG5cbktNTC5wcm90b3R5cGUuZWFjaExheWVyID0gZnVuY3Rpb24gKGNiKSB7XG4gIHRoaXMuX2VhY2hMYXllckNhbGxiYWNrID0gY2I7XG4gIHRoaXMuZmV0Y2goZnVuY3Rpb24oZ2VvanNvbiwgc2VsZil7XG4gICAgdmFyIGxheWVycyA9IHNlbGYuX2dlb2pzb25MYXllci5fbGF5ZXJzO1xuICAgIGZvciAodmFyIGtleSBpbiBsYXllcnMpIHtcbiAgICAgIHZhciBsYXllciA9IGxheWVyc1trZXldO1xuICAgICAgY2IobGF5ZXIpO1xuICAgIH1cbiAgfSk7XG59O1xuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IFJ5YW4gV2hpdGxleSA8cndoaXRsZXlAc3BhdGlhbGRldi5jb20+XG4gKiAgICAgICBvbiAxMi8xNS8xNC5cbiAqL1xuXG52YXIgUmVzb3VyY2UgPSByZXF1aXJlKCcuL1Jlc291cmNlJyk7XG52YXIgJHJvb3RTY29wZSA9IHJlcXVpcmUoJy4vdmVjdG9yJykuJHJvb3RTY29wZTtcbnZhciAkaHR0cCA9IHJlcXVpcmUoJy4vdmVjdG9yJykuJGh0dHA7XG52YXIgdmVjdG9yID0gcmVxdWlyZSgnLi92ZWN0b3InKTtcblxubW9kdWxlLmV4cG9ydHMgPSBQQkY7XG5cbi8qKlxuICogQSBQQkYgUmVzb3VyY2UgaW5zdGFudGlhdGVzIGEgTVZUU291cmNlIChNYXBib3ggVmVjdG9yIFRpbGUpXG4gKlxuICogQHBhcmFtIGNvbmZpZ1xuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIFBCRihvcHRpb25zKSB7XG4gIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gIHRoaXMuX29uVGlsZXNMb2FkZWQgPSBvcHRpb25zLm9uVGlsZXNMb2FkZWQ7IC8vU3RvcmUgdGhlIHJlYWwgZnVuY3Rpb24gaW4gYSBsb2NhbCBwcm9wZXJ0eS5cbiAgdGhpcy5fb25DbGljayA9IG9wdGlvbnMub25DbGljazsgLy9TdG9yZSB0aGUgcmVhbCBmdW5jdGlvbiBpbiBhIGxvY2FsIHByb3BlcnR5LlxuICB0aGlzLl9vblNlbGVjdCA9IG9wdGlvbnMub25TZWxlY3Q7ICAvL1N0b3JlIHRoZSByZWFsIGZ1bmN0aW9uIGluIGEgbG9jYWwgcHJvcGVydHkgc28gd2UgY2FuIG92ZXJsb2FkIGl0IGxhdGVyIHdpdGggYW5ndWxhciBzdHVmZi5cbiAgdGhpcy5fb25GaWx0ZXIgPSBvcHRpb25zLmZpbHRlcjsgLy9TdG9yZSB0aGUgcmVhbCBmdW5jdGlvbiBpbiBhIGxvY2FsIHByb3BlcnR5LlxuICB0aGlzLl9zdHlsZSA9IG9wdGlvbnMuc3R5bGU7IC8vU3RvcmUgdGhlIHJlYWwgZnVuY3Rpb24gaW4gYSBsb2NhbCBwcm9wZXJ0eS5cblxuICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgb3B0aW9ucy5vblRpbGVzTG9hZGVkID0gZnVuY3Rpb24oTVZUU291cmNlKXtcblxuICAgIGlmKHNlbGYuX29uVGlsZXNMb2FkZWQpIHNlbGYuX29uVGlsZXNMb2FkZWQoTVZUU291cmNlLCAkaHR0cCwgJHJvb3RTY29wZSk7XG5cbiAgfVxuXG4gIG9wdGlvbnMub25DbGljayA9IGZ1bmN0aW9uKGV2dCl7XG5cbiAgICBzZWxmLl9vbkNsaWNrKGV2dCwgJGh0dHAsICRyb290U2NvcGUsIHNlbGYpO1xuXG4gIH1cblxuICBvcHRpb25zLm9uU2VsZWN0ID0gZnVuY3Rpb24odnRmKXtcblxuICAgIHNlbGYuX29uU2VsZWN0KHZ0Ziwgc2VsZik7XG5cbiAgfVxuXG4gIG9wdGlvbnMuZmlsdGVyID0gZnVuY3Rpb24odnRmKXtcblxuICAgIHJldHVybiBzZWxmLl9vbkZpbHRlcih2dGYsICRyb290U2NvcGUpO1xuXG4gIH1cblxuICBvcHRpb25zLnN0eWxlID0gZnVuY3Rpb24odnRmKXtcblxuICAgIHJldHVybiBzZWxmLl9zdHlsZSh2dGYsICRyb290U2NvcGUpO1xuXG4gIH1cblxuICB0aGlzLmxheWVyID0gbmV3IEwuVGlsZUxheWVyLk1WVFNvdXJjZShvcHRpb25zKTtcbn1cblxuUEJGLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoUmVzb3VyY2UucHJvdG90eXBlKTtcblBCRi5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBQQkY7XG5cblBCRi5wcm90b3R5cGUuZ2V0TGF5ZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLmxheWVyO1xufTtcblxuUEJGLnByb3RvdHlwZS5mZXRjaEZlYXR1cmVEZXRhaWxzID0gZnVuY3Rpb24oZ3VpZCwgbGV2ZWwsIG5hbWUpIHtcblxuXG4gIHZhciBkZXRhaWxzVXJsID0gY29uZmlnLmNodWJic1BhdGgodGhpcy5vcHRpb25zLmRldGFpbHNVcmwpO1xuICBpZiAoIWRldGFpbHNVcmwpIHtcbiAgICBjb25zb2xlLmVycm9yKCdXZSBuZWVkIGEgZGV0YWlsc1VybCB0byBmZXRjaEZlYXR1cmVEZXRhaWxzJyk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIHRoZW1lID0gJHJvb3RTY29wZS4kc3RhdGVQYXJhbXMudGhlbWUgfHwgJ3Byb2plY3QnO1xuXG4gIC8vRXhpdCBpZiB0aGVtZSBpcyBub25lLlxuICBpZih0aGVtZS50b0xvd2VyQ2FzZSgpID09PSAnbm9uZScpIHJldHVybjtcblxuICB2YXIgdGhlbWVOYW1lID0gJHJvb3RTY29wZS50aGVtZU5hbWVIYXNoW3RoZW1lXTtcbiAgaWYgKHR5cGVvZiBsZXZlbCA9PT0gJ3VuZGVmaW5lZCcgfHwgbGV2ZWwgPT09IG51bGwpIHtcbiAgICBjb25zb2xlLmVycm9yKCd3ZSBuZWVkIGEgbGV2ZWwuJyk7XG4gIH1cblxuICB2YXIgZmlsdGVycyA9ICdudWxsJztcbiAgaWYgKCRyb290U2NvcGUuJHN0YXRlUGFyYW1zLmZpbHRlcnMpIHtcbiAgICBmaWx0ZXJzID0gJHJvb3RTY29wZS4kc3RhdGVQYXJhbXMuZmlsdGVycztcbiAgfVxuXG4gIC8vZm9yIGRpc2FzdGVyVHlwZSwganVzdCB1c2UgdGhlIGRpc2FzdGVyIGVuZHBvaW50XG4gIGlmKHRoZW1lLnRvTG93ZXJDYXNlKCkgPT0gJ2Rpc2FzdGVydHlwZScpe1xuICAgIHRoZW1lID0gJ2Rpc2FzdGVyJztcbiAgfVxuXG4gIGRldGFpbHNVcmwgPSBkZXRhaWxzVXJsLnJlcGxhY2UoJzp0aGVtZScsIHRoZW1lKVxuICAgIC5yZXBsYWNlKCc6Z3VpZHMnLCBndWlkKVxuICAgIC5yZXBsYWNlKCc6bGV2ZWwnLCBsZXZlbClcbiAgICAucmVwbGFjZSgnOmZpbHRlcnMnLCBmaWx0ZXJzKTtcblxuICAvL1RPRE8gZHluYW1pY2FsbHkgYWRkIHNmX3Byb2plY3QgdG8gZWFjaCBmaWx0ZXIgY29sdW1uIGlmIGFyY3JlZ2lvbnNcblxuICAkaHR0cC5nZXQoZGV0YWlsc1VybCwge2NhY2hlOiB0cnVlfSkuc3VjY2VzcyhmdW5jdGlvbiAoZGV0YWlscykge1xuICAgIHZhciBmZWF0dXJlTGF5ZXIgPSB7IGZlYXR1cmU6IHsgcHJvcGVydGllczoge319fTtcbiAgICBmZWF0dXJlTGF5ZXIuZmVhdHVyZS5wcm9wZXJ0aWVzLnNhbGVzZm9yY2UgPSB7fTtcbiAgICBmZWF0dXJlTGF5ZXIuZmVhdHVyZS5wcm9wZXJ0aWVzLnNhbGVzZm9yY2VbdGhlbWVOYW1lXSA9IGRldGFpbHM7XG4gICAgZmVhdHVyZUxheWVyLmZlYXR1cmUucHJvcGVydGllcy5uYW1lID0gbmFtZTtcbiAgICAkcm9vdFNjb3BlLiRicm9hZGNhc3QoJ2RldGFpbHMnLCBmZWF0dXJlTGF5ZXIpO1xuXG4gIH0pLmVycm9yKGZ1bmN0aW9uKGVycil7XG4gICAgY29uc29sZS5lcnJvcihKU09OLnN0cmluZ2lmeShlcnIpKTtcbiAgfSk7XG5cbn07XG5cblxuXG5cbiIsIi8qKlxuICogQ3JlYXRlZCBieSBOaWNob2xhcyBIYWxsYWhhbiA8bmhhbGxhaGFuQHNwYXRpYWxkZXYuY29tPlxuICogICAgICAgb24gNi8zLzE0LlxuICovXG5cbnZhciByZXNvdXJjZXMgPSByZXF1aXJlKCcuL3ZlY3RvcicpLnJlc291cmNlcztcbnZhciAkaHR0cCA9IHJlcXVpcmUoJy4vdmVjdG9yJykuJGh0dHA7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVzb3VyY2U7XG5cbi8qKlxuICogQWxsIFZlY3RvclByb3ZpZGVyIHJlc291cmNlcyBhcmUgY2hpbGRyZW4gb2YgdGhpcyBjbGFzcy5cbiAqIEBwYXJhbSBjb25maWdcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBSZXNvdXJjZShjb25maWcpIHtcbiAgcmVzb3VyY2VzLnB1c2godGhpcyk7XG4gIHRoaXMuX2NvbmZpZyA9IGNvbmZpZztcbiAgdGhpcy5fdXJsID0gbnVsbDtcbiAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnKSB7XG4gICAgdGhpcy5fdXJsID0gY29uZmlnLnVybDtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLl91cmwgPSBjb25maWc7XG4gIH1cblxuICB0aGlzLl9lYWNoTGF5ZXJDYWxsYmFjayA9IG51bGw7XG4gIHRoaXMuX2dlb2pzb25MYXllciA9IG51bGw7XG59XG5cblxuLyoqXG4gKiBGZXRjaGVzIGRhdGEgZnJvbSB0aGUgZ2l2ZW4gdXJsIG9mIGEgcmVzb3VyY2UuXG4gKiBTdWJjbGFzc2VzIHRoZW4gaGFuZGxlIHRoZSBjYWxsYmFjayBhY2NvcmRpbmdseS5cbiAqXG4gKiBOZWVkcyB0byBhbHNvIHRyeSB0byBnZXQgYSByZXNvdXJjZSB2aWEgdGhlIENodWJic1xuICogcHJveHkuXG4gKlxuICogQHBhcmFtIGNiXG4gKi9cblJlc291cmNlLnByb3RvdHlwZS5mZXRjaCA9IGZ1bmN0aW9uKGNiKSB7XG4gIHZhciBwcm94eVBhdGggPSBjb25maWcucHJveHlQYXRoKHRoaXMuX3VybCk7XG4gICRodHRwLmdldCh0aGlzLl91cmwsIHtjYWNoZTogdHJ1ZX0pLnN1Y2Nlc3MoZnVuY3Rpb24gKGRhdGEsIHN0YXR1cykge1xuICAgIGNiKGRhdGEpO1xuICB9KS5lcnJvcihmdW5jdGlvbigpIHtcbiAgICAvLyB0cnlpbmcgcHJveHlcbiAgICAkaHR0cC5nZXQocHJveHlQYXRoLCB7Y2FjaGU6IHRydWV9KS5zdWNjZXNzKGZ1bmN0aW9uIChkYXRhLCBzdGF0dXMpIHtcbiAgICAgIGNiKGRhdGEpO1xuICAgIH0pLmVycm9yKGZ1bmN0aW9uKCkge1xuICAgICAgY29uc29sZS5lcnJvcihcIlVuYWJsZSB0byBmZXRjaCBmcm9tOiBcIiArIHByb3h5UGF0aCk7XG4gICAgfSk7XG4gIH0pO1xuXG59O1xuXG5cbi8qKlxuICogUmV0dXJucyB0aGUgTGVhZmxldCBHZW9KU09OIExheWVyIGFzc29jaWF0ZWQgd2l0aCB0aGVcbiAqIFJlc291cmNlIG9yIGNyZWF0ZXMgYSBuZXcgb25lLlxuICpcbiAqIEByZXR1cm5zIHtudWxsfCp9XG4gKi9cblJlc291cmNlLnByb3RvdHlwZS5nZXRMYXllciA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHR5cGVvZiB0aGlzLl9nZW9qc29uTGF5ZXIgIT09ICd1bmRlZmluZWQnICYmIHRoaXMuX2dlb2pzb25MYXllciAhPT0gbnVsbCkge1xuICAgIHJldHVybiB0aGlzLl9nZW9qc29uTGF5ZXI7XG4gIH1cblxuICB0aGlzLl9nZW9qc29uTGF5ZXIgPSBMLmdlb0pzb24odGhpcy5fZ2VvanNvbiB8fCBudWxsLCB7XG4gICAgc3R5bGU6IGZ1bmN0aW9uKGZlYXR1cmUpIHtcbiAgICAgIGlmICh0eXBlb2YgZmVhdHVyZS5wcm9wZXJ0aWVzLnN0eWxlRm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIGZlYXR1cmUucHJvcGVydGllcy5zdHlsZUZuKGZlYXR1cmUucHJvcGVydGllcyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gTC5tYXBib3guc2ltcGxlc3R5bGUuc3R5bGUoZmVhdHVyZSk7XG4gICAgfSxcbiAgICBwb2ludFRvTGF5ZXI6IGZ1bmN0aW9uKGZlYXR1cmUsIGxhdGxvbikge1xuICAgICAgaWYgKCFmZWF0dXJlLnByb3BlcnRpZXMpIGZlYXR1cmUucHJvcGVydGllcyA9IHt9O1xuICAgICAgaWYgKGZlYXR1cmUucHJvcGVydGllcy5zY2FsZSkge1xuICAgICAgICByZXR1cm4gTC5jaXJjbGVNYXJrZXIobGF0bG9uLCB7XG4gICAgICAgICAgZmlsbENvbG9yOiBmZWF0dXJlLnByb3BlcnRpZXMuY29sb3IgfHwgJyNGRjAwMDAnLFxuICAgICAgICAgIHJhZGl1czogMjAgKiBmZWF0dXJlLnByb3BlcnRpZXMuc2NhbGVcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gTC5tYXBib3gubWFya2VyLnN0eWxlKGZlYXR1cmUsIGxhdGxvbik7XG4gICAgfVxuICB9KS5lYWNoTGF5ZXIodGhpcy5fZWFjaExheWVyQ2FsbGJhY2spO1xuXG5cbiAgcmV0dXJuIHRoaXMuX2dlb2pzb25MYXllcjtcbn07XG5cblJlc291cmNlLnByb3RvdHlwZS5lYWNoTGF5ZXIgPSBmdW5jdGlvbiAoY2IpIHtcbiAgdGhpcy5fZWFjaExheWVyQ2FsbGJhY2sgPSBjYjtcbiAgdGhpcy5fZ2VvanNvbkxheWVyLmVhY2hMYXllcihjYik7XG59O1xuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IE5pY2hvbGFzIEhhbGxhaGFuIDxuaGFsbGFoYW5Ac3BhdGlhbGRldi5jb20+XG4gKiAgICAgICBvbiAzLzE5LzE0LlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ0dlb0FuZ3VsYXInKS5mYWN0b3J5KCdWZWN0b3JQcm92aWRlcicsIGZ1bmN0aW9uICgkcm9vdFNjb3BlLCAkbG9jYXRpb24sICRodHRwLCBMYXllckNvbmZpZykge1xuXG4gIHZhciB2ZWN0b3IgPSByZXF1aXJlKCcuL3ZlY3RvcicpO1xuICB2ZWN0b3Iuc2V0SW5qZWN0b3JzKCRyb290U2NvcGUsICRsb2NhdGlvbiwgJGh0dHAsIExheWVyQ29uZmlnKTtcblxuXG4gIC8qKlxuICAgKiBtYWtlIHRoZSBkZWZhdWx0IEJCb3hVUkwgYWJsZSB0byBiZSBvdmVycmlkZGVuIGlmIHNwZWNpZmllZCBieSB0aGUgTGF5ZXJDb25maWcgT2JqZWN0LlxuICAgKiBAcGFyYW0gY29uZmlnXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKi9cbiAgdmVjdG9yLmJib3hVcmwgPSBMYXllckNvbmZpZy5iYm94LmJib3h1cmw7XG5cbiAgdmFyIFJlc291cmNlID0gcmVxdWlyZSgnLi9SZXNvdXJjZScpO1xuICB2YXIgR2VvSlNPTiA9IHJlcXVpcmUoJy4vR2VvSlNPTicpO1xuICB2YXIgQkJveEdlb0pTT04gPSByZXF1aXJlKCcuL0JCb3hHZW9KU09OJyk7XG4gIHZhciBLTUwgPSByZXF1aXJlKCcuL0tNTCcpO1xuICB2YXIgQ1NWID0gcmVxdWlyZSgnLi9jc3YnKTtcbiAgdmFyIFBCRiA9IHJlcXVpcmUoJy4vUEJGJyk7XG5cblxuICAvKipcbiAgICogVGhpcyBpcyB1c2VkIGJ5IHRoZSBmYWN0b3J5IHRvIGR5bmFtaWNhbGx5IHN0YXRlIHRoZSB0eXBlIChjbGFzcylcbiAgICogdGhhdCBpdCB3YW50cyB0byBpbnN0YW50aWF0ZS5cbiAgICpcbiAgICogQHR5cGUge3tnZW9qc29uOiBHZW9KU09OLCBiYm94Z2VvanNvbjogQkJveEdlb0pTT04sIGttbDogS01MfX1cbiAgICovXG4gIHZhciB0eXBlcyA9IHtcbiAgICBnZW9qc29uOiBHZW9KU09OLFxuICAgIGJib3hnZW9qc29uOiBCQm94R2VvSlNPTixcbiAgICBrbWw6IEtNTCxcbiAgICBjc3Y6IENTVixcbiAgICBwYmY6IFBCRlxuICB9O1xuXG5cblxuICAvKipcbiAgICogRmV0Y2hlcyB0aGUgZmVhdHVyZSBpdGluZXJhcnkgYmFzZWQgb24gdGhlIGN1cnJlbnQgYmJveC5cbiAgICpcbiAgICogVGhlIGZlYXR1cmUgaXRpbmVyYXJ5IGlzIGEgc2V0IG9mIGZlYXR1cmVzIHdpdGggc29tZSBwcm9wZXJ0aWVzXG4gICAqIHN1Y2ggYXMgZ3VpZCBhbmQgbmFtZS4gVGhlIGdlb21ldHJ5IGZvciBlYWNoIG9mIHRoZXNlIGZlYXR1cmVzXG4gICAqIGhhcyBub3QgeWV0IGJlZW4gcmVxdWVzdGVkLiBUaGlzIGlzIGRvbmUgYnkgX2dldEZlYXR1cmVzLlxuICAgKi9cbiAgZnVuY3Rpb24gZmV0Y2hGZWF0dXJlSXRpbmVyYXJ5KCkge1xuICAgIHZhciB0aGlzVXJsID0gdmVjdG9yLmJib3hVcmwucmVwbGFjZSgnOmJib3gnLCB2ZWN0b3IuYmJveCk7XG4gICAgdmFyIHByb3h5UGF0aCA9IGNvbmZpZy5wcm94eVBhdGgodGhpc1VybCk7XG4gICAgJGh0dHAuZ2V0KHRoaXNVcmwsIHtjYWNoZTogdHJ1ZX0pLnN1Y2Nlc3MoZnVuY3Rpb24gKGZlYXRJdGluZXJhcnksIHN0YXR1cykge1xuICAgICAgcHJvY2Vzc0ZlYXR1cmVJdGluZXJhcnkoZmVhdEl0aW5lcmFyeSk7XG4gICAgfSkuZXJyb3IoZnVuY3Rpb24oKSB7XG4gICAgICAkaHR0cC5nZXQocHJveHlQYXRoLCB7Y2FjaGU6IHRydWV9KS5zdWNjZXNzKGZ1bmN0aW9uIChmZWF0SXRpbmVyYXJ5LCBzdGF0dXMpIHtcbiAgICAgICAgcHJvY2Vzc0ZlYXR1cmVJdGluZXJhcnkoZmVhdEl0aW5lcmFyeSk7XG4gICAgICB9KS5lcnJvcihmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIlVuYWJsZSB0byBmZXRjaEZlYXR1cmVJdGluZXJhcnk6IFwiICsgdGhpc1VybCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NGZWF0dXJlSXRpbmVyYXJ5KGZlYXRJdGluZXJhcnkpIHtcblxuICAgIGZvciAodmFyIGogPSAwLCBsZW4gPSBmZWF0SXRpbmVyYXJ5Lmxlbmd0aDsgaiA8IGxlbjsgaisrKSB7XG4gICAgICB2YXIgZmVhdCA9IGZlYXRJdGluZXJhcnlbal07XG4gICAgICBpZiAoIGZlYXQuaXNjZW50ZXIgKSB7XG4gICAgICAgIHZlY3Rvci5jZW50ZXJMZXZlbCA9IGZlYXQubGV2ZWwgfHwgMDtcbiAgICAgICAgJHJvb3RTY29wZS4kYnJvYWRjYXN0KCdjZW50ZXItZmVhdHVyZScsIGZlYXQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGlmIHRoZXJlIGFyZSBubyBmZWF0dXJlcyBmb3IgdGhlIGN1cnJlbnQgYm91bmRpbmcgYm94XG4gICAgLy9pZiAoIWZlYXRJdGluZXJhcnkgfHwgZmVhdEl0aW5lcmFyeS5sZW5ndGggPT09IDApIHtcbiAgICAvLyAgcmV0dXJuO1xuICAgIC8vfVxuXG4gICAgLyoqXG4gICAgICogQ2VudGVyIGZlYXR1cmUgbG9naWMgZm9yIGJyZWFkY3J1bWJzLlxuICAgICAqL1xuICAgIC8vZm9yICh2YXIgaT0wLCBsZW49ZmVhdEl0aW5lcmFyeS5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICAgIC8vICB2YXIgZiA9IGZlYXRJdGluZXJhcnlbaV07XG4gICAgLy8gIGlmIChmLmlzY2VudGVyID09IHRydWUpIHtcbiAgICAvLyAgICAkcm9vdFNjb3BlLiRicm9hZGNhc3QoJ2NlbnRlci1mZWF0dXJlJywgZik7XG4gICAgLy8gIH1cbiAgICAvL31cblxuICAgIC8qKlxuICAgICAqIEJCb3hHZW9KU09OIGxvZ2ljXG4gICAgICovXG4gICAgLy9mb3IodmFyIHIgPSAwLCBsZW4gPSB2ZWN0b3IuYmJveFJlc291cmNlcy5sZW5ndGg7IHIgPCBsZW47ICsrcikge1xuICAgIC8vICB2ZWN0b3IuYmJveFJlc291cmNlc1tyXS5wcm9jZXNzRmVhdHVyZUl0aW5lcmFyeShmZWF0SXRpbmVyYXJ5KTtcbiAgICAvL31cblxuICB9XG5cblxuICByZXR1cm4ge1xuICAgIC8qKlxuICAgICAqIFlvdSBjYW4gZXhwbGljaXRseSBuYW1lIHRoZSB0eXBlIG9mIHJlc291cmNlLiBJZiBub3QsXG4gICAgICogd2Ugd2lsbCBmaWd1cmUgaXQgb3V0IGZvciB5b3UuLi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSByZXNvdXJjZU5hbWVcbiAgICAgKiBAcGFyYW0gdHlwZVxuICAgICAqL1xuICAgIGNyZWF0ZVJlc291cmNlOiBmdW5jdGlvbiAocmVzb3VyY2VOYW1lLCB0eXBlKSB7XG4gICAgICB2YXIgY29uZmlnID0gTGF5ZXJDb25maWcuZmluZChyZXNvdXJjZU5hbWUpO1xuICAgICAgaWYgKGNvbmZpZyA9PT0gbnVsbCkge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdWZWN0b3JQcm92aWRlcjogSW52YWxpZCBSZXNvdXJjZSBDb25maWd1cmF0aW9uIE5hbWUuIENoZWNrIExheWVyQ29uZmlnIEZpbGUuLi4nKTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgICBpZiAodHlwZSB8fCBjb25maWcudHlwZSkge1xuICAgICAgICAvLyBpZiB0aGUgcmVzb3VyY2UgaXMganVzdCBhIHN0cmluZywgdGhlbiBpdCBzaG91bGQgYmUgYSB1cmxcbiAgICAgICAgcmV0dXJuIG5ldyB0eXBlc1sodHlwZSB8fCBjb25maWcudHlwZSkudG9Mb3dlckNhc2UoKV0oY29uZmlnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChjb25maWcuc2xpY2UoY29uZmlnLmxlbmd0aCAtIDMpLnRvTG93ZXJDYXNlKCkgPT09ICdwYmYnKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBQQkYoY29uZmlnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjb25maWcuc2xpY2UoY29uZmlnLmxlbmd0aCAtIDMpLnRvTG93ZXJDYXNlKCkgPT09ICdrbWwnKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBLTUwoY29uZmlnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjb25maWcuc2xpY2UoY29uZmlnLmxlbmd0aCAtIDMpLnRvTG93ZXJDYXNlKCkgPT09ICdjc3YnKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBDU1YoY29uZmlnKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBOSCBUT0RPIENoZWNrIGEgYml0IG1vcmUgaW50byBpZiB0aGlzIHJlc291cmNlIGlzIHZhbGlkIEdlb0pTT05cbiAgICAgICAgcmV0dXJuIG5ldyBHZW9KU09OKGNvbmZpZyk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFdoZW4gdGhlIGJvdW5kaW5nIGJveCBvZiB0aGUgbWFwIGNoYW5nZXMsIFZlY3RvclByb3ZpZGVyIG5lZWRzXG4gICAgICogdG8gYmUgbm90aWZpZWQgb2YgdGhlIGN1cnJlbnQgYm91bmRpbmcgYm94IHNvIGl0IGNhbiBmZXRjaCB0aGVcbiAgICAgKiBsYXRlc3QgdmVjdG9yIGRhdGEgZm9yIHRoZSBiYm94IG9mIHRoZSBtYXAgdmlld3BvcnQuXG4gICAgICpcbiAgICAgKiBUaGUgYmJveCBtdXN0IGJlIFdHUzg0LlxuICAgICAqXG4gICAgICogQHBhcmFtIGJib3hTdHIgXCJzb3V0aCx3ZXN0LG5vcnRoLGVhc3RcIiA9PT0gXCJtaW5YLG1pblksbWF4WCxtYXhZXCJcbiAgICAgKi9cbiAgICB1cGRhdGVCQm94OiBmdW5jdGlvbihiYm94U3RyKSB7XG4gICAgICB2ZWN0b3IuYmJveCA9IGJib3hTdHI7XG5cbiAgICAgIGZldGNoRmVhdHVyZUl0aW5lcmFyeSgpO1xuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIFByb3ZpZGVzIHRoZSBhYmlsaXR5IHRvIG92ZXJyaWRlIHRoZSBnYWRtIGxldmVsIGJlaW5nIHNob3duIGJ5IEJCb3hHZW9KU09OXG4gICAgICogZmVhdHVyZXMgb24gdGhlIG1hcC4gWW91IG1heSBzcGVjaWZ5IC0xIHRvIDUuIE5vIGFyZ3Mgb3IgYW55dGhpbmcgZWxzZVxuICAgICAqIHN3aXRjaGVzIGJhY2sgb24gc21hcnQgZ2FkbSAoYXV0b21hdGljYWxseSBjaG9vc2luZyB0aGUgbGV2ZWwgYmFzZWQgb24gYmJveCkuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gbGV2ZWxcbiAgICAgKi9cbiAgICBzZXRHYWRtTGV2ZWw6IGZ1bmN0aW9uKGxldmVsU3RyKSB7XG4gICAgICB2YXIgbGV2ZWwgPSBwYXJzZUludChsZXZlbFN0cik7XG4gICAgICB2ZWN0b3IuYmJveFVybCA9IHZlY3Rvci5iYm94VXJsLnJlcGxhY2UoLyZnYWRtX2xldmVsPS0/XFxkLywnJyk7XG4gICAgICBpZiAobGV2ZWwgPj0gLTEgJiYgbGV2ZWwgPD0gNSkge1xuICAgICAgICB2ZWN0b3IuYmJveFVybCArPSAnJmdhZG1fbGV2ZWw9JyArIGxldmVsO1xuICAgICAgfVxuICAgICAgY29uc29sZS5sb2coJ2Jib3hVcmw6ICcgKyB2ZWN0b3IuYmJveFVybCk7XG4gICAgICAvL2ZldGNoRmVhdHVyZUl0aW5lcmFyeSgpO1xuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBmZWF0dXJlIGJhc2VkIG9uIGd1aWQgYW5kIGxldmVsLiBZb3UgbWF5IG1lcmdlIGluIGEgc2V0IG9mIHByb3BlcnRpZXMgaW50byB0aGVcbiAgICAgKiBjYWxsZWQgYmFjayBvYmplY3QgaWYgZGVzaXJlZCAob3B0aW9uYWwpLlxuICAgICAqXG4gICAgICogQHBhcmFtIGd1aWRcbiAgICAgKi9cbiAgICBmZXRjaEZlYXR1cmU6IGZ1bmN0aW9uKGd1aWQsIGxldmVsLCBwcm9wc1RvTWVyZ2UsIGNiKSB7XG4gICAgICB2YXIgdXJsID0gTGF5ZXJDb25maWcuYmJveC5mZWF0dXJsLnJlcGxhY2UoJzpsZXZlbCcsIGxldmVsKS5yZXBsYWNlKCc6aWRzJywgZ3VpZCk7XG4gICAgICB2YXIgcHJveHlQYXRoID0gY29uZmlnLnByb3h5UGF0aCh1cmwpO1xuXG4gICAgICAkaHR0cC5nZXQodXJsLCB7Y2FjaGU6IHRydWV9KS5zdWNjZXNzKGZ1bmN0aW9uIChnZW9qc29uLCBzdGF0dXMpIHtcbiAgICAgICAgbWVyZ2UoZ2VvanNvbik7XG4gICAgICB9KS5lcnJvcihmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgJGh0dHAuZ2V0KHByb3h5UGF0aCkuc3VjY2VzcyhmdW5jdGlvbiAoZ2VvanNvbiwgc3RhdHVzKSB7XG4gICAgICAgICAgbWVyZ2UoZ2VvanNvbik7XG4gICAgICAgIH0pLmVycm9yKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdVbmFibGUgdG8gZmV0Y2hGZWF0dXJlOiAnICsgZ3VpZCk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICAgIGZ1bmN0aW9uIG1lcmdlKGdlb2pzb24pIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIERlYWwgd2l0aCBiYWQgc3R1ZmYuXG4gICAgICAgICAqL1xuICAgICAgICBpZiAoZ2VvanNvbi5lcnJvcikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1VuYWJsZSB0byBmZXRjaCBmZWF0dXJlOiAnICsgZ2VvanNvbi5lcnJvcik7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFnZW9qc29uLmZlYXR1cmVzIHx8IGdlb2pzb24uZmVhdHVyZXMubGVuZ3RoIDwgMSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHdlIG9ubHkgYXJlIGFjdHVhbGx5IGFza2luZyBmb3IgMSBmZWF0dXJlXG4gICAgICAgIHZhciBmZWF0ID0gZ2VvanNvbi5mZWF0dXJlc1swXTtcblxuICAgICAgICAvLyBwdXR0aW5nIGV4aXN0aW5nIHByb3BlcnRpZXMgaW50byBnZW9qc29uIGZlYXR1cmVcbiAgICAgICAgaWYgKHByb3BzVG9NZXJnZSkge1xuICAgICAgICAgIGZvciAodmFyIGtleSBpbiBwcm9wc1RvTWVyZ2UpIHtcbiAgICAgICAgICAgIGZlYXQucHJvcGVydGllc1trZXldID0gcHJvcHNUb01lcmdlW2tleV07XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY2IoZmVhdCk7XG4gICAgICB9XG5cbiAgICB9XG5cblxuICB9O1xuXG5cbn0pO1xuXG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgUnlhbiBXaGl0bGV5IDxyd2hpdGxleUBzcGF0aWFsZGV2LmNvbT5cbiAqICAgICAgIG9uIDYvMy8xNC5cbiAqL1xuXG52YXIgUmVzb3VyY2UgPSByZXF1aXJlKCcuL1Jlc291cmNlJyk7XG52YXIgJHJvb3RTY29wZSA9IHJlcXVpcmUoJy4vdmVjdG9yJykuJHJvb3RTY29wZTtcbnZhciAkID0gcmVxdWlyZSgnLi92ZWN0b3InKS4kO1xuXG5tb2R1bGUuZXhwb3J0cyA9IENTVjtcblxuLyoqXG4gKiBBIENTViBSZXNvdXJjZSBmZXRjaGVzIENTViBhbmQgcGFyc2VzIGl0XG4gKlxuICogQHBhcmFtIGNvbmZpZ1xuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIENTVihjb25maWcpIHtcbiAgUmVzb3VyY2UuY2FsbCh0aGlzLCBjb25maWcpO1xuICB0aGlzLl9nZW9qc29uID0gbnVsbDtcbn1cblxuQ1NWLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoUmVzb3VyY2UucHJvdG90eXBlKTtcbkNTVi5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBDU1Y7XG5cbkNTVi5wcm90b3R5cGUubGF0RmllbGRTdHJpbmdzID0gW1wibGF0XCIsIFwibGF0aXR1ZGVcIiwgXCJ5XCIsIFwieWNlbnRlclwiXTtcbkNTVi5wcm90b3R5cGUubG9uZ0ZpZWxkU3RyaW5ncyA9IFtcImxvblwiLCBcImxvbmdcIiwgXCJsb25naXR1ZGVcIiwgXCJ4XCIsIFwieGNlbnRlclwiLCBcImxuZ1wiXTtcblxuQ1NWLnByb3RvdHlwZS5nZXRMYXllciA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMuX2dlb2pzb25MYXllcikgcmV0dXJuIHRoaXMuX2dlb2pzb25MYXllcjtcbiAgdmFyIGxheWVyID0gUmVzb3VyY2UucHJvdG90eXBlLmdldExheWVyLmNhbGwodGhpcyk7XG4gIHRoaXMuZmV0Y2goZnVuY3Rpb24gKGdlb2pzb24pIHtcbiAgICBsYXllci5hZGREYXRhKGdlb2pzb24pO1xuICAgIGxheWVyLmVhY2hMYXllcihmdW5jdGlvbiAobCkge1xuICAgICAgbC5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICRyb290U2NvcGUuJGJyb2FkY2FzdCgnZGV0YWlscycsIGwpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xuICByZXR1cm4gbGF5ZXI7XG59O1xuXG5DU1YucHJvdG90eXBlLmZldGNoID0gZnVuY3Rpb24gKGNiKSB7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgUmVzb3VyY2UucHJvdG90eXBlLmZldGNoLmNhbGwodGhpcywgZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAvL2RhdGEgc2hvdWxkIGJlIHRoZSByYXcgY3N2LlxuXG4gICAgc2VsZi5fZ2VvanNvbiA9IHNlbGYucHJvY2Vzc0NzdkRhdGEoZGF0YSk7XG5cbiAgICBpZiAodHlwZW9mIHNlbGYuX2NvbmZpZy5wcm9wZXJ0aWVzID09PSAnb2JqZWN0Jykge1xuICAgICAgYW5ndWxhci5leHRlbmQoc2VsZi5fZ2VvanNvbi5wcm9wZXJ0aWVzLCBzZWxmLl9jb25maWcucHJvcGVydGllcyk7XG4gICAgICBzZWxmLl9nZW9qc29uLnByb3BlcnRpZXMuc3JjVHlwZSA9ICdjc3YnO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKSBjYihzZWxmLl9nZW9qc29uLCBzZWxmKTtcbiAgfSk7XG59O1xuXG5DU1YucHJvdG90eXBlLmhhbmRsZUNzdiA9IGZ1bmN0aW9uIChmaWxlLCBsYXllcikge1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIGlmIChmaWxlLmRhdGEpIHtcbiAgICB2YXIgZGVjb2RlZCA9IHRoaXMuYnl0ZXNUb1N0cmluZyhzZWxmLkJhc2U2NC5kZWNvZGUoZmlsZS5kYXRhKSk7XG4gICAgc2VsZi5wcm9jZXNzQ3N2RGF0YShkZWNvZGVkKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICByZWFkZXIub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgY29uc29sZS5sb2coXCJGaW5pc2hlZCByZWFkaW5nIENTViBkYXRhXCIpO1xuICAgICAgc2VsZi5wcm9jZXNzQ3N2RGF0YShyZWFkZXIucmVzdWx0LCBsYXllcik7XG4gICAgfTtcbiAgICByZWFkZXIucmVhZEFzVGV4dChmaWxlKTtcbiAgfVxufTtcblxuQ1NWLnByb3RvdHlwZS5nZXRTZXBhcmF0b3IgPSBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gIHZhciBzZXBhcmF0b3JzID0gW1wiLFwiLCBcIiAgICAgIFwiLCBcIjtcIiwgXCJ8XCJdO1xuICB2YXIgbWF4U2VwYXJhdG9yTGVuZ3RoID0gMDtcbiAgdmFyIG1heFNlcGFyYXRvclZhbHVlID0gXCJcIjtcbiAgJC5lYWNoKHNlcGFyYXRvcnMsIGZ1bmN0aW9uIChpZHgsIHNlcGFyYXRvcikge1xuICAgIHZhciBsZW5ndGggPSBzdHJpbmcuc3BsaXQoc2VwYXJhdG9yKS5sZW5ndGg7XG4gICAgaWYgKGxlbmd0aCA+IG1heFNlcGFyYXRvckxlbmd0aCkge1xuICAgICAgbWF4U2VwYXJhdG9yTGVuZ3RoID0gbGVuZ3RoO1xuICAgICAgbWF4U2VwYXJhdG9yVmFsdWUgPSBzZXBhcmF0b3I7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIG1heFNlcGFyYXRvclZhbHVlO1xufTtcblxuQ1NWLnByb3RvdHlwZS5ieXRlc1RvU3RyaW5nID0gZnVuY3Rpb24gKGIpIHtcbiAgdmFyIHMgPSBbXTtcbiAgJC5lYWNoKGIsIGZ1bmN0aW9uIChpZHgsIGMpIHtcbiAgICBzLnB1c2goU3RyaW5nLmZyb21DaGFyQ29kZShjKSk7XG4gIH0pO1xuICByZXR1cm4gcy5qb2luKFwiXCIpO1xufTtcblxuQ1NWLnByb3RvdHlwZS5wcm9jZXNzQ3N2RGF0YSA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gIHZhciBuZXdMaW5lSWR4ID0gZGF0YS5pbmRleE9mKFwiXFxuXCIpO1xuICB2YXIgZmlyc3RMaW5lID0gJC50cmltKGRhdGEuc3Vic3RyKDAsIG5ld0xpbmVJZHgpKTsgLy9yZW1vdmUgZXh0cmEgd2hpdGVzcGFjZSwgbm90IHN1cmUgaWYgSSBuZWVkIHRvIGRvIHRoaXMgc2luY2UgSSB0aHJldyBvdXQgc3BhY2UgZGVsaW1pdGVyc1xuICB2YXIgc2VwYXJhdG9yID0gdGhpcy5nZXRTZXBhcmF0b3IoZmlyc3RMaW5lKTtcbiAgdmFyIGNzdlN0b3JlID0gJC5jc3YudG9PYmplY3RzKGRhdGEpO1xuICB2YXIgZmllbGROYW1lcyA9IGZpcnN0TGluZS5zcGxpdChzZXBhcmF0b3IpO1xuXG4gIHZhciBsYXRGaWVsZCA9IG51bGw7XG4gIHZhciBsb25nRmllbGQgPSBudWxsO1xuXG4gIHZhciBzZWxmID0gdGhpcztcblxuICAvL0ZpbmQgTGF0L0xuZyBjb2x1bW5zXG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBmaWVsZE5hbWVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgdmFyIGZpZWxkTmFtZSA9IGZpZWxkTmFtZXNbaV07XG4gICAgdmFyIG1hdGNoSWQ7XG4gICAgbWF0Y2hJZCA9ICQuaW5BcnJheShmaWVsZE5hbWUudG9Mb3dlckNhc2UoKSwgc2VsZi5sYXRGaWVsZFN0cmluZ3MpO1xuICAgIGlmIChtYXRjaElkICE9PSAtMSkge1xuICAgICAgbGF0RmllbGQgPSBmaWVsZE5hbWU7XG4gICAgfVxuXG4gICAgbWF0Y2hJZCA9ICQuaW5BcnJheShmaWVsZE5hbWUudG9Mb3dlckNhc2UoKSwgc2VsZi5sb25nRmllbGRTdHJpbmdzKTtcbiAgICBpZiAobWF0Y2hJZCAhPT0gLTEpIHtcbiAgICAgIGxvbmdGaWVsZCA9IGZpZWxkTmFtZTtcbiAgICB9XG4gIH1cblxuICAvL0lmIE1pc3NpbmcgTGF0ZmllbGQgb3IgTG9uZ0ZpZWxkLCB0aGVuIGV4aXQuXG4gIGlmICghbGF0RmllbGQpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKCFsb25nRmllbGQpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgb3V0cHV0R2VvSlNPTiA9IHtcbiAgICBcInR5cGVcIjogXCJGZWF0dXJlQ29sbGVjdGlvblwiLFxuICAgIFwiZmVhdHVyZXNcIjogW11cbiAgfTtcblxuICBmb3IgKHZhciBpID0gMCwgbGVuID0gY3N2U3RvcmUubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICB2YXIgcm93ID0gY3N2U3RvcmVbaV07XG4gICAgdmFyIGxhdGl0dWRlID0gcGFyc2VGbG9hdChyb3dbbGF0RmllbGRdKTtcbiAgICB2YXIgbG9uZ2l0dWRlID0gcGFyc2VGbG9hdChyb3dbbG9uZ0ZpZWxkXSk7XG5cbiAgICBpZiAoaXNOYU4obGF0aXR1ZGUpIHx8IGlzTmFOKGxvbmdpdHVkZSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvL2NyZWF0ZSBHZW9KU09OIGZyYWdtZW50XG4gICAgb3V0cHV0R2VvSlNPTi5mZWF0dXJlcy5wdXNoKHtcbiAgICAgIFwidHlwZVwiOiBcIkZlYXR1cmVcIixcbiAgICAgIFwiZ2VvbWV0cnlcIjoge1widHlwZVwiOiBcIlBvaW50XCIsIFwiY29vcmRpbmF0ZXNcIjogW2xvbmdpdHVkZSwgbGF0aXR1ZGVdfSxcbiAgICAgIFwicHJvcGVydGllc1wiOiByb3dcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBvdXRwdXRHZW9KU09OO1xufTtcblxuQ1NWLnByb3RvdHlwZS5lYWNoTGF5ZXIgPSBmdW5jdGlvbiAoY2IpIHtcbiAgdGhpcy5fZWFjaExheWVyQ2FsbGJhY2sgPSBjYjtcbiAgdGhpcy5mZXRjaChmdW5jdGlvbiAoZ2VvanNvbiwgc2VsZikge1xuICAgIHZhciBsYXllcnMgPSBzZWxmLl9nZW9qc29uTGF5ZXIuX2xheWVycztcbiAgICBmb3IgKHZhciBrZXkgaW4gbGF5ZXJzKSB7XG4gICAgICB2YXIgbGF5ZXIgPSBsYXllcnNba2V5XTtcbiAgICAgIGNiKGxheWVyKTtcbiAgICB9XG4gIH0pO1xufTtcblxuLyoqXG4gKlxuICogIEJhc2U2NCBlbmNvZGUgLyBkZWNvZGVcbiAqICBodHRwOi8vd3d3LndlYnRvb2xraXQuaW5mby9cbiAqXG4gKiovXG5DU1YucHJvdG90eXBlLkJhc2U2NCA9IHtcblxuICAvLyBwcml2YXRlIHByb3BlcnR5XG4gIF9rZXlTdHI6IFwiQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLz1cIixcblxuICAvLyBwdWJsaWMgbWV0aG9kIGZvciBlbmNvZGluZ1xuICBlbmNvZGU6IGZ1bmN0aW9uIChpbnB1dCkge1xuICAgIHZhciBvdXRwdXQgPSBcIlwiO1xuICAgIHZhciBjaHIxLCBjaHIyLCBjaHIzLCBlbmMxLCBlbmMyLCBlbmMzLCBlbmM0O1xuICAgIHZhciBpID0gMDtcblxuICAgIGlucHV0ID0gQmFzZTY0Ll91dGY4X2VuY29kZShpbnB1dCk7XG5cbiAgICB3aGlsZSAoaSA8IGlucHV0Lmxlbmd0aCkge1xuXG4gICAgICBjaHIxID0gaW5wdXQuY2hhckNvZGVBdChpKyspO1xuICAgICAgY2hyMiA9IGlucHV0LmNoYXJDb2RlQXQoaSsrKTtcbiAgICAgIGNocjMgPSBpbnB1dC5jaGFyQ29kZUF0KGkrKyk7XG5cbiAgICAgIGVuYzEgPSBjaHIxID4+IDI7XG4gICAgICBlbmMyID0gKChjaHIxICYgMykgPDwgNCkgfCAoY2hyMiA+PiA0KTtcbiAgICAgIGVuYzMgPSAoKGNocjIgJiAxNSkgPDwgMikgfCAoY2hyMyA+PiA2KTtcbiAgICAgIGVuYzQgPSBjaHIzICYgNjM7XG5cbiAgICAgIGlmIChpc05hTihjaHIyKSkge1xuICAgICAgICBlbmMzID0gZW5jNCA9IDY0O1xuICAgICAgfSBlbHNlIGlmIChpc05hTihjaHIzKSkge1xuICAgICAgICBlbmM0ID0gNjQ7XG4gICAgICB9XG5cbiAgICAgIG91dHB1dCA9IG91dHB1dCArXG4gICAgICAgIHRoaXMuX2tleVN0ci5jaGFyQXQoZW5jMSkgKyB0aGlzLl9rZXlTdHIuY2hhckF0KGVuYzIpICtcbiAgICAgICAgdGhpcy5fa2V5U3RyLmNoYXJBdChlbmMzKSArIHRoaXMuX2tleVN0ci5jaGFyQXQoZW5jNCk7XG5cbiAgICB9XG5cbiAgICByZXR1cm4gb3V0cHV0O1xuICB9LFxuXG4gIC8vIHB1YmxpYyBtZXRob2QgZm9yIGRlY29kaW5nXG4gIGRlY29kZTogZnVuY3Rpb24gKGlucHV0KSB7XG4gICAgdmFyIG91dHB1dCA9IFwiXCI7XG4gICAgdmFyIGNocjEsIGNocjIsIGNocjM7XG4gICAgdmFyIGVuYzEsIGVuYzIsIGVuYzMsIGVuYzQ7XG4gICAgdmFyIGkgPSAwO1xuXG4gICAgaW5wdXQgPSBpbnB1dC5yZXBsYWNlKC9bXkEtWmEtejAtOVxcK1xcL1xcPV0vZywgXCJcIik7XG5cbiAgICB3aGlsZSAoaSA8IGlucHV0Lmxlbmd0aCkge1xuXG4gICAgICBlbmMxID0gdGhpcy5fa2V5U3RyLmluZGV4T2YoaW5wdXQuY2hhckF0KGkrKykpO1xuICAgICAgZW5jMiA9IHRoaXMuX2tleVN0ci5pbmRleE9mKGlucHV0LmNoYXJBdChpKyspKTtcbiAgICAgIGVuYzMgPSB0aGlzLl9rZXlTdHIuaW5kZXhPZihpbnB1dC5jaGFyQXQoaSsrKSk7XG4gICAgICBlbmM0ID0gdGhpcy5fa2V5U3RyLmluZGV4T2YoaW5wdXQuY2hhckF0KGkrKykpO1xuXG4gICAgICBjaHIxID0gKGVuYzEgPDwgMikgfCAoZW5jMiA+PiA0KTtcbiAgICAgIGNocjIgPSAoKGVuYzIgJiAxNSkgPDwgNCkgfCAoZW5jMyA+PiAyKTtcbiAgICAgIGNocjMgPSAoKGVuYzMgJiAzKSA8PCA2KSB8IGVuYzQ7XG5cbiAgICAgIG91dHB1dCA9IG91dHB1dCArIFN0cmluZy5mcm9tQ2hhckNvZGUoY2hyMSk7XG5cbiAgICAgIGlmIChlbmMzICE9IDY0KSB7XG4gICAgICAgIG91dHB1dCA9IG91dHB1dCArIFN0cmluZy5mcm9tQ2hhckNvZGUoY2hyMik7XG4gICAgICB9XG4gICAgICBpZiAoZW5jNCAhPSA2NCkge1xuICAgICAgICBvdXRwdXQgPSBvdXRwdXQgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKGNocjMpO1xuICAgICAgfVxuXG4gICAgfVxuXG4gICAgb3V0cHV0ID0gdGhpcy5CYXNlNjQuX3V0ZjhfZGVjb2RlKG91dHB1dCk7XG5cbiAgICByZXR1cm4gb3V0cHV0O1xuXG4gIH0sXG5cbiAgLy8gcHJpdmF0ZSBtZXRob2QgZm9yIFVURi04IGVuY29kaW5nXG4gIF91dGY4X2VuY29kZTogZnVuY3Rpb24gKHN0cmluZykge1xuICAgIHN0cmluZyA9IHN0cmluZy5yZXBsYWNlKC9cXHJcXG4vZywgXCJcXG5cIik7XG4gICAgdmFyIHV0ZnRleHQgPSBcIlwiO1xuXG4gICAgZm9yICh2YXIgbiA9IDA7IG4gPCBzdHJpbmcubGVuZ3RoOyBuKyspIHtcblxuICAgICAgdmFyIGMgPSBzdHJpbmcuY2hhckNvZGVBdChuKTtcblxuICAgICAgaWYgKGMgPCAxMjgpIHtcbiAgICAgICAgdXRmdGV4dCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGMpO1xuICAgICAgfSBlbHNlIGlmICgoYyA+IDEyNykgJiYgKGMgPCAyMDQ4KSkge1xuICAgICAgICB1dGZ0ZXh0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoKGMgPj4gNikgfCAxOTIpO1xuICAgICAgICB1dGZ0ZXh0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoKGMgJiA2MykgfCAxMjgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdXRmdGV4dCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKChjID4+IDEyKSB8IDIyNCk7XG4gICAgICAgIHV0ZnRleHQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSgoKGMgPj4gNikgJiA2MykgfCAxMjgpO1xuICAgICAgICB1dGZ0ZXh0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoKGMgJiA2MykgfCAxMjgpO1xuICAgICAgfVxuXG4gICAgfVxuXG4gICAgcmV0dXJuIHV0ZnRleHQ7XG4gIH0sXG5cbiAgLy8gcHJpdmF0ZSBtZXRob2QgZm9yIFVURi04IGRlY29kaW5nXG4gIF91dGY4X2RlY29kZTogZnVuY3Rpb24gKHV0ZnRleHQpIHtcbiAgICB2YXIgc3RyaW5nID0gXCJcIjtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIGMgPSBjMSA9IGMyID0gMDtcblxuICAgIHdoaWxlIChpIDwgdXRmdGV4dC5sZW5ndGgpIHtcblxuICAgICAgYyA9IHV0ZnRleHQuY2hhckNvZGVBdChpKTtcblxuICAgICAgaWYgKGMgPCAxMjgpIHtcbiAgICAgICAgc3RyaW5nICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYyk7XG4gICAgICAgIGkrKztcbiAgICAgIH0gZWxzZSBpZiAoKGMgPiAxOTEpICYmIChjIDwgMjI0KSkge1xuICAgICAgICBjMiA9IHV0ZnRleHQuY2hhckNvZGVBdChpICsgMSk7XG4gICAgICAgIHN0cmluZyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKCgoYyAmIDMxKSA8PCA2KSB8IChjMiAmIDYzKSk7XG4gICAgICAgIGkgKz0gMjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGMyID0gdXRmdGV4dC5jaGFyQ29kZUF0KGkgKyAxKTtcbiAgICAgICAgYzMgPSB1dGZ0ZXh0LmNoYXJDb2RlQXQoaSArIDIpO1xuICAgICAgICBzdHJpbmcgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSgoKGMgJiAxNSkgPDwgMTIpIHwgKChjMiAmIDYzKSA8PCA2KSB8IChjMyAmIDYzKSk7XG4gICAgICAgIGkgKz0gMztcbiAgICAgIH1cblxuICAgIH1cblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxufTtcbiIsIi8qKlxuICogQ3JlYXRlZCBieSBOaWNob2xhcyBIYWxsYWhhbiA8bmhhbGxhaGFuQHNwYXRpYWxkZXYuY29tPlxuICogICAgICAgb24gNi8zLzE0LlxuICovXG5cbnZhciB2ZWN0b3IgPSB7fTtcbm1vZHVsZS5leHBvcnRzID0gdmVjdG9yO1xuXG52ZWN0b3Iuc2V0SW5qZWN0b3JzID0gZnVuY3Rpb24gKCRyb290U2NvcGUsICRsb2NhdGlvbiwgJGh0dHAsIExheWVyQ29uZmlnKSB7XG4gIHZlY3Rvci4kcm9vdFNjb3BlID0gJHJvb3RTY29wZTtcbiAgdmVjdG9yLiRsb2NhdGlvbiA9ICRsb2NhdGlvbjtcbiAgdmVjdG9yLiRodHRwID0gJGh0dHA7XG4gIHZlY3Rvci5MYXllckNvbmZpZyA9IExheWVyQ29uZmlnO1xufTtcblxudmVjdG9yLmFuZ3VsYXIgPSBhbmd1bGFyO1xudmVjdG9yLkwgPSBMO1xudmVjdG9yLiQgPSAkO1xudmVjdG9yLnRvR2VvSlNPTiA9IHRvR2VvSlNPTjtcblxuXG4vKipcbiAqIFRoaXMgaXMgdXBkYXRlZCBieSB1cGRhdGVCQm94LiBJdCBpcyB0aGVuIHVzZWQgdG8gcXVlcnkgYWxsXG4gKiBWZWN0b3JQcm92aWRlcnMgdGhhdCB1c2UgYSBib3VuZGluZyBib3ggdG8gZ2V0IGFkZGl0aW9uYWxcbiAqIGZlYXR1cmVzLlxuICpcbiAqIEB0eXBlIHtzdHJpbmd9XG4gKi9cbnZhciBiYm94ID0gdmVjdG9yLmJib3ggPSBudWxsO1xuXG4vKipcbiAqIEV2ZXJ5IHJlc291cmNlIHRoYXQgaGFzIGJlZW4gaW5zdGFudGlhdGVkLlxuICogQHR5cGUge0FycmF5fVxuICovXG52YXIgcmVzb3VyY2VzID0gdmVjdG9yLnJlc291cmNlcyA9IFtdO1xuZGVidWcucmVzb3VyY2VzID0gcmVzb3VyY2VzO1xuXG4vKipcbiAqIEV2ZXJ5IHJlc291cmNlIHdpdGggYSBib3VuZGluZyBib3ggZmV0Y2hpbmcgbWVjaGFuaXNtLlxuICogQHR5cGUge0FycmF5fVxuICovXG52YXIgYmJveFJlc291cmNlcyA9IHZlY3Rvci5iYm94UmVzb3VyY2VzID0gW107XG5kZWJ1Zy5iYm94UmVzb3VyY2VzID0gYmJveFJlc291cmNlcztcblxudmFyIGJib3hVcmwgPSB2ZWN0b3IuYmJveFVybCA9ICcnO1xuXG52YXIgY2VudGVyTGV2ZWwgPSB2ZWN0b3IuY2VudGVyTGV2ZWwgPSAwO1xuXG5cblxuIiwiLyohXG4gKiBUaGUgYnVmZmVyIG1vZHVsZSBmcm9tIG5vZGUuanMsIGZvciB0aGUgYnJvd3Nlci5cbiAqXG4gKiBAYXV0aG9yICAgRmVyb3NzIEFib3VraGFkaWplaCA8ZmVyb3NzQGZlcm9zcy5vcmc+IDxodHRwOi8vZmVyb3NzLm9yZz5cbiAqIEBsaWNlbnNlICBNSVRcbiAqL1xuXG52YXIgYmFzZTY0ID0gcmVxdWlyZSgnYmFzZTY0LWpzJylcbnZhciBpZWVlNzU0ID0gcmVxdWlyZSgnaWVlZTc1NCcpXG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJ2lzLWFycmF5JylcblxuZXhwb3J0cy5CdWZmZXIgPSBCdWZmZXJcbmV4cG9ydHMuU2xvd0J1ZmZlciA9IEJ1ZmZlclxuZXhwb3J0cy5JTlNQRUNUX01BWF9CWVRFUyA9IDUwXG5CdWZmZXIucG9vbFNpemUgPSA4MTkyIC8vIG5vdCB1c2VkIGJ5IHRoaXMgaW1wbGVtZW50YXRpb25cblxudmFyIGtNYXhMZW5ndGggPSAweDNmZmZmZmZmXG5cbi8qKlxuICogSWYgYEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUYDpcbiAqICAgPT09IHRydWUgICAgVXNlIFVpbnQ4QXJyYXkgaW1wbGVtZW50YXRpb24gKGZhc3Rlc3QpXG4gKiAgID09PSBmYWxzZSAgIFVzZSBPYmplY3QgaW1wbGVtZW50YXRpb24gKG1vc3QgY29tcGF0aWJsZSwgZXZlbiBJRTYpXG4gKlxuICogQnJvd3NlcnMgdGhhdCBzdXBwb3J0IHR5cGVkIGFycmF5cyBhcmUgSUUgMTArLCBGaXJlZm94IDQrLCBDaHJvbWUgNyssIFNhZmFyaSA1LjErLFxuICogT3BlcmEgMTEuNissIGlPUyA0LjIrLlxuICpcbiAqIE5vdGU6XG4gKlxuICogLSBJbXBsZW1lbnRhdGlvbiBtdXN0IHN1cHBvcnQgYWRkaW5nIG5ldyBwcm9wZXJ0aWVzIHRvIGBVaW50OEFycmF5YCBpbnN0YW5jZXMuXG4gKiAgIEZpcmVmb3ggNC0yOSBsYWNrZWQgc3VwcG9ydCwgZml4ZWQgaW4gRmlyZWZveCAzMCsuXG4gKiAgIFNlZTogaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9Njk1NDM4LlxuICpcbiAqICAtIENocm9tZSA5LTEwIGlzIG1pc3NpbmcgdGhlIGBUeXBlZEFycmF5LnByb3RvdHlwZS5zdWJhcnJheWAgZnVuY3Rpb24uXG4gKlxuICogIC0gSUUxMCBoYXMgYSBicm9rZW4gYFR5cGVkQXJyYXkucHJvdG90eXBlLnN1YmFycmF5YCBmdW5jdGlvbiB3aGljaCByZXR1cm5zIGFycmF5cyBvZlxuICogICAgaW5jb3JyZWN0IGxlbmd0aCBpbiBzb21lIHNpdHVhdGlvbnMuXG4gKlxuICogV2UgZGV0ZWN0IHRoZXNlIGJ1Z2d5IGJyb3dzZXJzIGFuZCBzZXQgYEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUYCB0byBgZmFsc2VgIHNvIHRoZXkgd2lsbFxuICogZ2V0IHRoZSBPYmplY3QgaW1wbGVtZW50YXRpb24sIHdoaWNoIGlzIHNsb3dlciBidXQgd2lsbCB3b3JrIGNvcnJlY3RseS5cbiAqL1xuQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQgPSAoZnVuY3Rpb24gKCkge1xuICB0cnkge1xuICAgIHZhciBidWYgPSBuZXcgQXJyYXlCdWZmZXIoMClcbiAgICB2YXIgYXJyID0gbmV3IFVpbnQ4QXJyYXkoYnVmKVxuICAgIGFyci5mb28gPSBmdW5jdGlvbiAoKSB7IHJldHVybiA0MiB9XG4gICAgcmV0dXJuIDQyID09PSBhcnIuZm9vKCkgJiYgLy8gdHlwZWQgYXJyYXkgaW5zdGFuY2VzIGNhbiBiZSBhdWdtZW50ZWRcbiAgICAgICAgdHlwZW9mIGFyci5zdWJhcnJheSA9PT0gJ2Z1bmN0aW9uJyAmJiAvLyBjaHJvbWUgOS0xMCBsYWNrIGBzdWJhcnJheWBcbiAgICAgICAgbmV3IFVpbnQ4QXJyYXkoMSkuc3ViYXJyYXkoMSwgMSkuYnl0ZUxlbmd0aCA9PT0gMCAvLyBpZTEwIGhhcyBicm9rZW4gYHN1YmFycmF5YFxuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn0pKClcblxuLyoqXG4gKiBDbGFzczogQnVmZmVyXG4gKiA9PT09PT09PT09PT09XG4gKlxuICogVGhlIEJ1ZmZlciBjb25zdHJ1Y3RvciByZXR1cm5zIGluc3RhbmNlcyBvZiBgVWludDhBcnJheWAgdGhhdCBhcmUgYXVnbWVudGVkXG4gKiB3aXRoIGZ1bmN0aW9uIHByb3BlcnRpZXMgZm9yIGFsbCB0aGUgbm9kZSBgQnVmZmVyYCBBUEkgZnVuY3Rpb25zLiBXZSB1c2VcbiAqIGBVaW50OEFycmF5YCBzbyB0aGF0IHNxdWFyZSBicmFja2V0IG5vdGF0aW9uIHdvcmtzIGFzIGV4cGVjdGVkIC0tIGl0IHJldHVybnNcbiAqIGEgc2luZ2xlIG9jdGV0LlxuICpcbiAqIEJ5IGF1Z21lbnRpbmcgdGhlIGluc3RhbmNlcywgd2UgY2FuIGF2b2lkIG1vZGlmeWluZyB0aGUgYFVpbnQ4QXJyYXlgXG4gKiBwcm90b3R5cGUuXG4gKi9cbmZ1bmN0aW9uIEJ1ZmZlciAoc3ViamVjdCwgZW5jb2RpbmcsIG5vWmVybykge1xuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgQnVmZmVyKSlcbiAgICByZXR1cm4gbmV3IEJ1ZmZlcihzdWJqZWN0LCBlbmNvZGluZywgbm9aZXJvKVxuXG4gIHZhciB0eXBlID0gdHlwZW9mIHN1YmplY3RcblxuICAvLyBGaW5kIHRoZSBsZW5ndGhcbiAgdmFyIGxlbmd0aFxuICBpZiAodHlwZSA9PT0gJ251bWJlcicpXG4gICAgbGVuZ3RoID0gc3ViamVjdCA+IDAgPyBzdWJqZWN0ID4+PiAwIDogMFxuICBlbHNlIGlmICh0eXBlID09PSAnc3RyaW5nJykge1xuICAgIGlmIChlbmNvZGluZyA9PT0gJ2Jhc2U2NCcpXG4gICAgICBzdWJqZWN0ID0gYmFzZTY0Y2xlYW4oc3ViamVjdClcbiAgICBsZW5ndGggPSBCdWZmZXIuYnl0ZUxlbmd0aChzdWJqZWN0LCBlbmNvZGluZylcbiAgfSBlbHNlIGlmICh0eXBlID09PSAnb2JqZWN0JyAmJiBzdWJqZWN0ICE9PSBudWxsKSB7IC8vIGFzc3VtZSBvYmplY3QgaXMgYXJyYXktbGlrZVxuICAgIGlmIChzdWJqZWN0LnR5cGUgPT09ICdCdWZmZXInICYmIGlzQXJyYXkoc3ViamVjdC5kYXRhKSlcbiAgICAgIHN1YmplY3QgPSBzdWJqZWN0LmRhdGFcbiAgICBsZW5ndGggPSArc3ViamVjdC5sZW5ndGggPiAwID8gTWF0aC5mbG9vcigrc3ViamVjdC5sZW5ndGgpIDogMFxuICB9IGVsc2VcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdtdXN0IHN0YXJ0IHdpdGggbnVtYmVyLCBidWZmZXIsIGFycmF5IG9yIHN0cmluZycpXG5cbiAgaWYgKHRoaXMubGVuZ3RoID4ga01heExlbmd0aClcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignQXR0ZW1wdCB0byBhbGxvY2F0ZSBCdWZmZXIgbGFyZ2VyIHRoYW4gbWF4aW11bSAnICtcbiAgICAgICdzaXplOiAweCcgKyBrTWF4TGVuZ3RoLnRvU3RyaW5nKDE2KSArICcgYnl0ZXMnKVxuXG4gIHZhciBidWZcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgLy8gUHJlZmVycmVkOiBSZXR1cm4gYW4gYXVnbWVudGVkIGBVaW50OEFycmF5YCBpbnN0YW5jZSBmb3IgYmVzdCBwZXJmb3JtYW5jZVxuICAgIGJ1ZiA9IEJ1ZmZlci5fYXVnbWVudChuZXcgVWludDhBcnJheShsZW5ndGgpKVxuICB9IGVsc2Uge1xuICAgIC8vIEZhbGxiYWNrOiBSZXR1cm4gVEhJUyBpbnN0YW5jZSBvZiBCdWZmZXIgKGNyZWF0ZWQgYnkgYG5ld2ApXG4gICAgYnVmID0gdGhpc1xuICAgIGJ1Zi5sZW5ndGggPSBsZW5ndGhcbiAgICBidWYuX2lzQnVmZmVyID0gdHJ1ZVxuICB9XG5cbiAgdmFyIGlcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUICYmIHR5cGVvZiBzdWJqZWN0LmJ5dGVMZW5ndGggPT09ICdudW1iZXInKSB7XG4gICAgLy8gU3BlZWQgb3B0aW1pemF0aW9uIC0tIHVzZSBzZXQgaWYgd2UncmUgY29weWluZyBmcm9tIGEgdHlwZWQgYXJyYXlcbiAgICBidWYuX3NldChzdWJqZWN0KVxuICB9IGVsc2UgaWYgKGlzQXJyYXlpc2goc3ViamVjdCkpIHtcbiAgICAvLyBUcmVhdCBhcnJheS1pc2ggb2JqZWN0cyBhcyBhIGJ5dGUgYXJyYXlcbiAgICBpZiAoQnVmZmVyLmlzQnVmZmVyKHN1YmplY3QpKSB7XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspXG4gICAgICAgIGJ1ZltpXSA9IHN1YmplY3QucmVhZFVJbnQ4KGkpXG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKylcbiAgICAgICAgYnVmW2ldID0gKChzdWJqZWN0W2ldICUgMjU2KSArIDI1NikgJSAyNTZcbiAgICB9XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICBidWYud3JpdGUoc3ViamVjdCwgMCwgZW5jb2RpbmcpXG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gJ251bWJlcicgJiYgIUJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUICYmICFub1plcm8pIHtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGJ1ZltpXSA9IDBcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYnVmXG59XG5cbkJ1ZmZlci5pc0J1ZmZlciA9IGZ1bmN0aW9uIChiKSB7XG4gIHJldHVybiAhIShiICE9IG51bGwgJiYgYi5faXNCdWZmZXIpXG59XG5cbkJ1ZmZlci5jb21wYXJlID0gZnVuY3Rpb24gKGEsIGIpIHtcbiAgaWYgKCFCdWZmZXIuaXNCdWZmZXIoYSkgfHwgIUJ1ZmZlci5pc0J1ZmZlcihiKSlcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudHMgbXVzdCBiZSBCdWZmZXJzJylcblxuICB2YXIgeCA9IGEubGVuZ3RoXG4gIHZhciB5ID0gYi5sZW5ndGhcbiAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IE1hdGgubWluKHgsIHkpOyBpIDwgbGVuICYmIGFbaV0gPT09IGJbaV07IGkrKykge31cbiAgaWYgKGkgIT09IGxlbikge1xuICAgIHggPSBhW2ldXG4gICAgeSA9IGJbaV1cbiAgfVxuICBpZiAoeCA8IHkpIHJldHVybiAtMVxuICBpZiAoeSA8IHgpIHJldHVybiAxXG4gIHJldHVybiAwXG59XG5cbkJ1ZmZlci5pc0VuY29kaW5nID0gZnVuY3Rpb24gKGVuY29kaW5nKSB7XG4gIHN3aXRjaCAoU3RyaW5nKGVuY29kaW5nKS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgY2FzZSAnaGV4JzpcbiAgICBjYXNlICd1dGY4JzpcbiAgICBjYXNlICd1dGYtOCc6XG4gICAgY2FzZSAnYXNjaWknOlxuICAgIGNhc2UgJ2JpbmFyeSc6XG4gICAgY2FzZSAnYmFzZTY0JzpcbiAgICBjYXNlICdyYXcnOlxuICAgIGNhc2UgJ3VjczInOlxuICAgIGNhc2UgJ3Vjcy0yJzpcbiAgICBjYXNlICd1dGYxNmxlJzpcbiAgICBjYXNlICd1dGYtMTZsZSc6XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG5CdWZmZXIuY29uY2F0ID0gZnVuY3Rpb24gKGxpc3QsIHRvdGFsTGVuZ3RoKSB7XG4gIGlmICghaXNBcnJheShsaXN0KSkgdGhyb3cgbmV3IFR5cGVFcnJvcignVXNhZ2U6IEJ1ZmZlci5jb25jYXQobGlzdFssIGxlbmd0aF0pJylcblxuICBpZiAobGlzdC5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gbmV3IEJ1ZmZlcigwKVxuICB9IGVsc2UgaWYgKGxpc3QubGVuZ3RoID09PSAxKSB7XG4gICAgcmV0dXJuIGxpc3RbMF1cbiAgfVxuXG4gIHZhciBpXG4gIGlmICh0b3RhbExlbmd0aCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdG90YWxMZW5ndGggPSAwXG4gICAgZm9yIChpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRvdGFsTGVuZ3RoICs9IGxpc3RbaV0ubGVuZ3RoXG4gICAgfVxuICB9XG5cbiAgdmFyIGJ1ZiA9IG5ldyBCdWZmZXIodG90YWxMZW5ndGgpXG4gIHZhciBwb3MgPSAwXG4gIGZvciAoaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldXG4gICAgaXRlbS5jb3B5KGJ1ZiwgcG9zKVxuICAgIHBvcyArPSBpdGVtLmxlbmd0aFxuICB9XG4gIHJldHVybiBidWZcbn1cblxuQnVmZmVyLmJ5dGVMZW5ndGggPSBmdW5jdGlvbiAoc3RyLCBlbmNvZGluZykge1xuICB2YXIgcmV0XG4gIHN0ciA9IHN0ciArICcnXG4gIHN3aXRjaCAoZW5jb2RpbmcgfHwgJ3V0ZjgnKSB7XG4gICAgY2FzZSAnYXNjaWknOlxuICAgIGNhc2UgJ2JpbmFyeSc6XG4gICAgY2FzZSAncmF3JzpcbiAgICAgIHJldCA9IHN0ci5sZW5ndGhcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAndWNzMic6XG4gICAgY2FzZSAndWNzLTInOlxuICAgIGNhc2UgJ3V0ZjE2bGUnOlxuICAgIGNhc2UgJ3V0Zi0xNmxlJzpcbiAgICAgIHJldCA9IHN0ci5sZW5ndGggKiAyXG4gICAgICBicmVha1xuICAgIGNhc2UgJ2hleCc6XG4gICAgICByZXQgPSBzdHIubGVuZ3RoID4+PiAxXG4gICAgICBicmVha1xuICAgIGNhc2UgJ3V0ZjgnOlxuICAgIGNhc2UgJ3V0Zi04JzpcbiAgICAgIHJldCA9IHV0ZjhUb0J5dGVzKHN0cikubGVuZ3RoXG4gICAgICBicmVha1xuICAgIGNhc2UgJ2Jhc2U2NCc6XG4gICAgICByZXQgPSBiYXNlNjRUb0J5dGVzKHN0cikubGVuZ3RoXG4gICAgICBicmVha1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXQgPSBzdHIubGVuZ3RoXG4gIH1cbiAgcmV0dXJuIHJldFxufVxuXG4vLyBwcmUtc2V0IGZvciB2YWx1ZXMgdGhhdCBtYXkgZXhpc3QgaW4gdGhlIGZ1dHVyZVxuQnVmZmVyLnByb3RvdHlwZS5sZW5ndGggPSB1bmRlZmluZWRcbkJ1ZmZlci5wcm90b3R5cGUucGFyZW50ID0gdW5kZWZpbmVkXG5cbi8vIHRvU3RyaW5nKGVuY29kaW5nLCBzdGFydD0wLCBlbmQ9YnVmZmVyLmxlbmd0aClcbkJ1ZmZlci5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoZW5jb2RpbmcsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGxvd2VyZWRDYXNlID0gZmFsc2VcblxuICBzdGFydCA9IHN0YXJ0ID4+PiAwXG4gIGVuZCA9IGVuZCA9PT0gdW5kZWZpbmVkIHx8IGVuZCA9PT0gSW5maW5pdHkgPyB0aGlzLmxlbmd0aCA6IGVuZCA+Pj4gMFxuXG4gIGlmICghZW5jb2RpbmcpIGVuY29kaW5nID0gJ3V0ZjgnXG4gIGlmIChzdGFydCA8IDApIHN0YXJ0ID0gMFxuICBpZiAoZW5kID4gdGhpcy5sZW5ndGgpIGVuZCA9IHRoaXMubGVuZ3RoXG4gIGlmIChlbmQgPD0gc3RhcnQpIHJldHVybiAnJ1xuXG4gIHdoaWxlICh0cnVlKSB7XG4gICAgc3dpdGNoIChlbmNvZGluZykge1xuICAgICAgY2FzZSAnaGV4JzpcbiAgICAgICAgcmV0dXJuIGhleFNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGNhc2UgJ3V0ZjgnOlxuICAgICAgY2FzZSAndXRmLTgnOlxuICAgICAgICByZXR1cm4gdXRmOFNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGNhc2UgJ2FzY2lpJzpcbiAgICAgICAgcmV0dXJuIGFzY2lpU2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgY2FzZSAnYmluYXJ5JzpcbiAgICAgICAgcmV0dXJuIGJpbmFyeVNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGNhc2UgJ2Jhc2U2NCc6XG4gICAgICAgIHJldHVybiBiYXNlNjRTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBjYXNlICd1Y3MyJzpcbiAgICAgIGNhc2UgJ3Vjcy0yJzpcbiAgICAgIGNhc2UgJ3V0ZjE2bGUnOlxuICAgICAgY2FzZSAndXRmLTE2bGUnOlxuICAgICAgICByZXR1cm4gdXRmMTZsZVNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGlmIChsb3dlcmVkQ2FzZSlcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdVbmtub3duIGVuY29kaW5nOiAnICsgZW5jb2RpbmcpXG4gICAgICAgIGVuY29kaW5nID0gKGVuY29kaW5nICsgJycpLnRvTG93ZXJDYXNlKClcbiAgICAgICAgbG93ZXJlZENhc2UgPSB0cnVlXG4gICAgfVxuICB9XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuZXF1YWxzID0gZnVuY3Rpb24gKGIpIHtcbiAgaWYoIUJ1ZmZlci5pc0J1ZmZlcihiKSkgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnQgbXVzdCBiZSBhIEJ1ZmZlcicpXG4gIHJldHVybiBCdWZmZXIuY29tcGFyZSh0aGlzLCBiKSA9PT0gMFxufVxuXG5CdWZmZXIucHJvdG90eXBlLmluc3BlY3QgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBzdHIgPSAnJ1xuICB2YXIgbWF4ID0gZXhwb3J0cy5JTlNQRUNUX01BWF9CWVRFU1xuICBpZiAodGhpcy5sZW5ndGggPiAwKSB7XG4gICAgc3RyID0gdGhpcy50b1N0cmluZygnaGV4JywgMCwgbWF4KS5tYXRjaCgvLnsyfS9nKS5qb2luKCcgJylcbiAgICBpZiAodGhpcy5sZW5ndGggPiBtYXgpXG4gICAgICBzdHIgKz0gJyAuLi4gJ1xuICB9XG4gIHJldHVybiAnPEJ1ZmZlciAnICsgc3RyICsgJz4nXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuY29tcGFyZSA9IGZ1bmN0aW9uIChiKSB7XG4gIGlmICghQnVmZmVyLmlzQnVmZmVyKGIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudCBtdXN0IGJlIGEgQnVmZmVyJylcbiAgcmV0dXJuIEJ1ZmZlci5jb21wYXJlKHRoaXMsIGIpXG59XG5cbi8vIGBnZXRgIHdpbGwgYmUgcmVtb3ZlZCBpbiBOb2RlIDAuMTMrXG5CdWZmZXIucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIChvZmZzZXQpIHtcbiAgY29uc29sZS5sb2coJy5nZXQoKSBpcyBkZXByZWNhdGVkLiBBY2Nlc3MgdXNpbmcgYXJyYXkgaW5kZXhlcyBpbnN0ZWFkLicpXG4gIHJldHVybiB0aGlzLnJlYWRVSW50OChvZmZzZXQpXG59XG5cbi8vIGBzZXRgIHdpbGwgYmUgcmVtb3ZlZCBpbiBOb2RlIDAuMTMrXG5CdWZmZXIucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uICh2LCBvZmZzZXQpIHtcbiAgY29uc29sZS5sb2coJy5zZXQoKSBpcyBkZXByZWNhdGVkLiBBY2Nlc3MgdXNpbmcgYXJyYXkgaW5kZXhlcyBpbnN0ZWFkLicpXG4gIHJldHVybiB0aGlzLndyaXRlVUludDgodiwgb2Zmc2V0KVxufVxuXG5mdW5jdGlvbiBoZXhXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIG9mZnNldCA9IE51bWJlcihvZmZzZXQpIHx8IDBcbiAgdmFyIHJlbWFpbmluZyA9IGJ1Zi5sZW5ndGggLSBvZmZzZXRcbiAgaWYgKCFsZW5ndGgpIHtcbiAgICBsZW5ndGggPSByZW1haW5pbmdcbiAgfSBlbHNlIHtcbiAgICBsZW5ndGggPSBOdW1iZXIobGVuZ3RoKVxuICAgIGlmIChsZW5ndGggPiByZW1haW5pbmcpIHtcbiAgICAgIGxlbmd0aCA9IHJlbWFpbmluZ1xuICAgIH1cbiAgfVxuXG4gIC8vIG11c3QgYmUgYW4gZXZlbiBudW1iZXIgb2YgZGlnaXRzXG4gIHZhciBzdHJMZW4gPSBzdHJpbmcubGVuZ3RoXG4gIGlmIChzdHJMZW4gJSAyICE9PSAwKSB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgaGV4IHN0cmluZycpXG5cbiAgaWYgKGxlbmd0aCA+IHN0ckxlbiAvIDIpIHtcbiAgICBsZW5ndGggPSBzdHJMZW4gLyAyXG4gIH1cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIHZhciBieXRlID0gcGFyc2VJbnQoc3RyaW5nLnN1YnN0cihpICogMiwgMiksIDE2KVxuICAgIGlmIChpc05hTihieXRlKSkgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGhleCBzdHJpbmcnKVxuICAgIGJ1ZltvZmZzZXQgKyBpXSA9IGJ5dGVcbiAgfVxuICByZXR1cm4gaVxufVxuXG5mdW5jdGlvbiB1dGY4V3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICB2YXIgY2hhcnNXcml0dGVuID0gYmxpdEJ1ZmZlcih1dGY4VG9CeXRlcyhzdHJpbmcpLCBidWYsIG9mZnNldCwgbGVuZ3RoKVxuICByZXR1cm4gY2hhcnNXcml0dGVuXG59XG5cbmZ1bmN0aW9uIGFzY2lpV3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICB2YXIgY2hhcnNXcml0dGVuID0gYmxpdEJ1ZmZlcihhc2NpaVRvQnl0ZXMoc3RyaW5nKSwgYnVmLCBvZmZzZXQsIGxlbmd0aClcbiAgcmV0dXJuIGNoYXJzV3JpdHRlblxufVxuXG5mdW5jdGlvbiBiaW5hcnlXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHJldHVybiBhc2NpaVdyaXRlKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcbn1cblxuZnVuY3Rpb24gYmFzZTY0V3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICB2YXIgY2hhcnNXcml0dGVuID0gYmxpdEJ1ZmZlcihiYXNlNjRUb0J5dGVzKHN0cmluZyksIGJ1Ziwgb2Zmc2V0LCBsZW5ndGgpXG4gIHJldHVybiBjaGFyc1dyaXR0ZW5cbn1cblxuZnVuY3Rpb24gdXRmMTZsZVdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgdmFyIGNoYXJzV3JpdHRlbiA9IGJsaXRCdWZmZXIodXRmMTZsZVRvQnl0ZXMoc3RyaW5nKSwgYnVmLCBvZmZzZXQsIGxlbmd0aCwgMilcbiAgcmV0dXJuIGNoYXJzV3JpdHRlblxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlID0gZnVuY3Rpb24gKHN0cmluZywgb2Zmc2V0LCBsZW5ndGgsIGVuY29kaW5nKSB7XG4gIC8vIFN1cHBvcnQgYm90aCAoc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCwgZW5jb2RpbmcpXG4gIC8vIGFuZCB0aGUgbGVnYWN5IChzdHJpbmcsIGVuY29kaW5nLCBvZmZzZXQsIGxlbmd0aClcbiAgaWYgKGlzRmluaXRlKG9mZnNldCkpIHtcbiAgICBpZiAoIWlzRmluaXRlKGxlbmd0aCkpIHtcbiAgICAgIGVuY29kaW5nID0gbGVuZ3RoXG4gICAgICBsZW5ndGggPSB1bmRlZmluZWRcbiAgICB9XG4gIH0gZWxzZSB7ICAvLyBsZWdhY3lcbiAgICB2YXIgc3dhcCA9IGVuY29kaW5nXG4gICAgZW5jb2RpbmcgPSBvZmZzZXRcbiAgICBvZmZzZXQgPSBsZW5ndGhcbiAgICBsZW5ndGggPSBzd2FwXG4gIH1cblxuICBvZmZzZXQgPSBOdW1iZXIob2Zmc2V0KSB8fCAwXG4gIHZhciByZW1haW5pbmcgPSB0aGlzLmxlbmd0aCAtIG9mZnNldFxuICBpZiAoIWxlbmd0aCkge1xuICAgIGxlbmd0aCA9IHJlbWFpbmluZ1xuICB9IGVsc2Uge1xuICAgIGxlbmd0aCA9IE51bWJlcihsZW5ndGgpXG4gICAgaWYgKGxlbmd0aCA+IHJlbWFpbmluZykge1xuICAgICAgbGVuZ3RoID0gcmVtYWluaW5nXG4gICAgfVxuICB9XG4gIGVuY29kaW5nID0gU3RyaW5nKGVuY29kaW5nIHx8ICd1dGY4JykudG9Mb3dlckNhc2UoKVxuXG4gIHZhciByZXRcbiAgc3dpdGNoIChlbmNvZGluZykge1xuICAgIGNhc2UgJ2hleCc6XG4gICAgICByZXQgPSBoZXhXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICd1dGY4JzpcbiAgICBjYXNlICd1dGYtOCc6XG4gICAgICByZXQgPSB1dGY4V3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnYXNjaWknOlxuICAgICAgcmV0ID0gYXNjaWlXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICdiaW5hcnknOlxuICAgICAgcmV0ID0gYmluYXJ5V3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnYmFzZTY0JzpcbiAgICAgIHJldCA9IGJhc2U2NFdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ3VjczInOlxuICAgIGNhc2UgJ3Vjcy0yJzpcbiAgICBjYXNlICd1dGYxNmxlJzpcbiAgICBjYXNlICd1dGYtMTZsZSc6XG4gICAgICByZXQgPSB1dGYxNmxlV3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcbiAgICAgIGJyZWFrXG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1Vua25vd24gZW5jb2Rpbmc6ICcgKyBlbmNvZGluZylcbiAgfVxuICByZXR1cm4gcmV0XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUudG9KU09OID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6ICdCdWZmZXInLFxuICAgIGRhdGE6IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKHRoaXMuX2FyciB8fCB0aGlzLCAwKVxuICB9XG59XG5cbmZ1bmN0aW9uIGJhc2U2NFNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgaWYgKHN0YXJ0ID09PSAwICYmIGVuZCA9PT0gYnVmLmxlbmd0aCkge1xuICAgIHJldHVybiBiYXNlNjQuZnJvbUJ5dGVBcnJheShidWYpXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGJhc2U2NC5mcm9tQnl0ZUFycmF5KGJ1Zi5zbGljZShzdGFydCwgZW5kKSlcbiAgfVxufVxuXG5mdW5jdGlvbiB1dGY4U2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICB2YXIgcmVzID0gJydcbiAgdmFyIHRtcCA9ICcnXG4gIGVuZCA9IE1hdGgubWluKGJ1Zi5sZW5ndGgsIGVuZClcblxuICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7IGkrKykge1xuICAgIGlmIChidWZbaV0gPD0gMHg3Rikge1xuICAgICAgcmVzICs9IGRlY29kZVV0ZjhDaGFyKHRtcCkgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKGJ1ZltpXSlcbiAgICAgIHRtcCA9ICcnXG4gICAgfSBlbHNlIHtcbiAgICAgIHRtcCArPSAnJScgKyBidWZbaV0udG9TdHJpbmcoMTYpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlcyArIGRlY29kZVV0ZjhDaGFyKHRtcClcbn1cblxuZnVuY3Rpb24gYXNjaWlTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIHZhciByZXQgPSAnJ1xuICBlbmQgPSBNYXRoLm1pbihidWYubGVuZ3RoLCBlbmQpXG5cbiAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyBpKyspIHtcbiAgICByZXQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShidWZbaV0pXG4gIH1cbiAgcmV0dXJuIHJldFxufVxuXG5mdW5jdGlvbiBiaW5hcnlTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIHJldHVybiBhc2NpaVNsaWNlKGJ1Ziwgc3RhcnQsIGVuZClcbn1cblxuZnVuY3Rpb24gaGV4U2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICB2YXIgbGVuID0gYnVmLmxlbmd0aFxuXG4gIGlmICghc3RhcnQgfHwgc3RhcnQgPCAwKSBzdGFydCA9IDBcbiAgaWYgKCFlbmQgfHwgZW5kIDwgMCB8fCBlbmQgPiBsZW4pIGVuZCA9IGxlblxuXG4gIHZhciBvdXQgPSAnJ1xuICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7IGkrKykge1xuICAgIG91dCArPSB0b0hleChidWZbaV0pXG4gIH1cbiAgcmV0dXJuIG91dFxufVxuXG5mdW5jdGlvbiB1dGYxNmxlU2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICB2YXIgYnl0ZXMgPSBidWYuc2xpY2Uoc3RhcnQsIGVuZClcbiAgdmFyIHJlcyA9ICcnXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYnl0ZXMubGVuZ3RoOyBpICs9IDIpIHtcbiAgICByZXMgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShieXRlc1tpXSArIGJ5dGVzW2kgKyAxXSAqIDI1NilcbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuc2xpY2UgPSBmdW5jdGlvbiAoc3RhcnQsIGVuZCkge1xuICB2YXIgbGVuID0gdGhpcy5sZW5ndGhcbiAgc3RhcnQgPSB+fnN0YXJ0XG4gIGVuZCA9IGVuZCA9PT0gdW5kZWZpbmVkID8gbGVuIDogfn5lbmRcblxuICBpZiAoc3RhcnQgPCAwKSB7XG4gICAgc3RhcnQgKz0gbGVuO1xuICAgIGlmIChzdGFydCA8IDApXG4gICAgICBzdGFydCA9IDBcbiAgfSBlbHNlIGlmIChzdGFydCA+IGxlbikge1xuICAgIHN0YXJ0ID0gbGVuXG4gIH1cblxuICBpZiAoZW5kIDwgMCkge1xuICAgIGVuZCArPSBsZW5cbiAgICBpZiAoZW5kIDwgMClcbiAgICAgIGVuZCA9IDBcbiAgfSBlbHNlIGlmIChlbmQgPiBsZW4pIHtcbiAgICBlbmQgPSBsZW5cbiAgfVxuXG4gIGlmIChlbmQgPCBzdGFydClcbiAgICBlbmQgPSBzdGFydFxuXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHJldHVybiBCdWZmZXIuX2F1Z21lbnQodGhpcy5zdWJhcnJheShzdGFydCwgZW5kKSlcbiAgfSBlbHNlIHtcbiAgICB2YXIgc2xpY2VMZW4gPSBlbmQgLSBzdGFydFxuICAgIHZhciBuZXdCdWYgPSBuZXcgQnVmZmVyKHNsaWNlTGVuLCB1bmRlZmluZWQsIHRydWUpXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzbGljZUxlbjsgaSsrKSB7XG4gICAgICBuZXdCdWZbaV0gPSB0aGlzW2kgKyBzdGFydF1cbiAgICB9XG4gICAgcmV0dXJuIG5ld0J1ZlxuICB9XG59XG5cbi8qXG4gKiBOZWVkIHRvIG1ha2Ugc3VyZSB0aGF0IGJ1ZmZlciBpc24ndCB0cnlpbmcgdG8gd3JpdGUgb3V0IG9mIGJvdW5kcy5cbiAqL1xuZnVuY3Rpb24gY2hlY2tPZmZzZXQgKG9mZnNldCwgZXh0LCBsZW5ndGgpIHtcbiAgaWYgKChvZmZzZXQgJSAxKSAhPT0gMCB8fCBvZmZzZXQgPCAwKVxuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdvZmZzZXQgaXMgbm90IHVpbnQnKVxuICBpZiAob2Zmc2V0ICsgZXh0ID4gbGVuZ3RoKVxuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdUcnlpbmcgdG8gYWNjZXNzIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDggPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KVxuICAgIGNoZWNrT2Zmc2V0KG9mZnNldCwgMSwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiB0aGlzW29mZnNldF1cbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDE2TEUgPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KVxuICAgIGNoZWNrT2Zmc2V0KG9mZnNldCwgMiwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiB0aGlzW29mZnNldF0gfCAodGhpc1tvZmZzZXQgKyAxXSA8PCA4KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50MTZCRSA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpXG4gICAgY2hlY2tPZmZzZXQob2Zmc2V0LCAyLCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuICh0aGlzW29mZnNldF0gPDwgOCkgfCB0aGlzW29mZnNldCArIDFdXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQzMkxFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydClcbiAgICBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuXG4gIHJldHVybiAoKHRoaXNbb2Zmc2V0XSkgfFxuICAgICAgKHRoaXNbb2Zmc2V0ICsgMV0gPDwgOCkgfFxuICAgICAgKHRoaXNbb2Zmc2V0ICsgMl0gPDwgMTYpKSArXG4gICAgICAodGhpc1tvZmZzZXQgKyAzXSAqIDB4MTAwMDAwMClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDMyQkUgPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KVxuICAgIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG5cbiAgcmV0dXJuICh0aGlzW29mZnNldF0gKiAweDEwMDAwMDApICtcbiAgICAgICgodGhpc1tvZmZzZXQgKyAxXSA8PCAxNikgfFxuICAgICAgKHRoaXNbb2Zmc2V0ICsgMl0gPDwgOCkgfFxuICAgICAgdGhpc1tvZmZzZXQgKyAzXSlcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50OCA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpXG4gICAgY2hlY2tPZmZzZXQob2Zmc2V0LCAxLCB0aGlzLmxlbmd0aClcbiAgaWYgKCEodGhpc1tvZmZzZXRdICYgMHg4MCkpXG4gICAgcmV0dXJuICh0aGlzW29mZnNldF0pXG4gIHJldHVybiAoKDB4ZmYgLSB0aGlzW29mZnNldF0gKyAxKSAqIC0xKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQxNkxFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydClcbiAgICBjaGVja09mZnNldChvZmZzZXQsIDIsIHRoaXMubGVuZ3RoKVxuICB2YXIgdmFsID0gdGhpc1tvZmZzZXRdIHwgKHRoaXNbb2Zmc2V0ICsgMV0gPDwgOClcbiAgcmV0dXJuICh2YWwgJiAweDgwMDApID8gdmFsIHwgMHhGRkZGMDAwMCA6IHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQxNkJFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydClcbiAgICBjaGVja09mZnNldChvZmZzZXQsIDIsIHRoaXMubGVuZ3RoKVxuICB2YXIgdmFsID0gdGhpc1tvZmZzZXQgKyAxXSB8ICh0aGlzW29mZnNldF0gPDwgOClcbiAgcmV0dXJuICh2YWwgJiAweDgwMDApID8gdmFsIHwgMHhGRkZGMDAwMCA6IHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQzMkxFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydClcbiAgICBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuXG4gIHJldHVybiAodGhpc1tvZmZzZXRdKSB8XG4gICAgICAodGhpc1tvZmZzZXQgKyAxXSA8PCA4KSB8XG4gICAgICAodGhpc1tvZmZzZXQgKyAyXSA8PCAxNikgfFxuICAgICAgKHRoaXNbb2Zmc2V0ICsgM10gPDwgMjQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDMyQkUgPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KVxuICAgIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG5cbiAgcmV0dXJuICh0aGlzW29mZnNldF0gPDwgMjQpIHxcbiAgICAgICh0aGlzW29mZnNldCArIDFdIDw8IDE2KSB8XG4gICAgICAodGhpc1tvZmZzZXQgKyAyXSA8PCA4KSB8XG4gICAgICAodGhpc1tvZmZzZXQgKyAzXSlcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkRmxvYXRMRSA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpXG4gICAgY2hlY2tPZmZzZXQob2Zmc2V0LCA0LCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuIGllZWU3NTQucmVhZCh0aGlzLCBvZmZzZXQsIHRydWUsIDIzLCA0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRGbG9hdEJFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydClcbiAgICBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gaWVlZTc1NC5yZWFkKHRoaXMsIG9mZnNldCwgZmFsc2UsIDIzLCA0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWREb3VibGVMRSA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpXG4gICAgY2hlY2tPZmZzZXQob2Zmc2V0LCA4LCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuIGllZWU3NTQucmVhZCh0aGlzLCBvZmZzZXQsIHRydWUsIDUyLCA4KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWREb3VibGVCRSA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpXG4gICAgY2hlY2tPZmZzZXQob2Zmc2V0LCA4LCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuIGllZWU3NTQucmVhZCh0aGlzLCBvZmZzZXQsIGZhbHNlLCA1MiwgOClcbn1cblxuZnVuY3Rpb24gY2hlY2tJbnQgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgZXh0LCBtYXgsIG1pbikge1xuICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcihidWYpKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdidWZmZXIgbXVzdCBiZSBhIEJ1ZmZlciBpbnN0YW5jZScpXG4gIGlmICh2YWx1ZSA+IG1heCB8fCB2YWx1ZSA8IG1pbikgdGhyb3cgbmV3IFR5cGVFcnJvcigndmFsdWUgaXMgb3V0IG9mIGJvdW5kcycpXG4gIGlmIChvZmZzZXQgKyBleHQgPiBidWYubGVuZ3RoKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdpbmRleCBvdXQgb2YgcmFuZ2UnKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDggPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpXG4gICAgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMSwgMHhmZiwgMClcbiAgaWYgKCFCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkgdmFsdWUgPSBNYXRoLmZsb29yKHZhbHVlKVxuICB0aGlzW29mZnNldF0gPSB2YWx1ZVxuICByZXR1cm4gb2Zmc2V0ICsgMVxufVxuXG5mdW5jdGlvbiBvYmplY3RXcml0ZVVJbnQxNiAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4pIHtcbiAgaWYgKHZhbHVlIDwgMCkgdmFsdWUgPSAweGZmZmYgKyB2YWx1ZSArIDFcbiAgZm9yICh2YXIgaSA9IDAsIGogPSBNYXRoLm1pbihidWYubGVuZ3RoIC0gb2Zmc2V0LCAyKTsgaSA8IGo7IGkrKykge1xuICAgIGJ1ZltvZmZzZXQgKyBpXSA9ICh2YWx1ZSAmICgweGZmIDw8ICg4ICogKGxpdHRsZUVuZGlhbiA/IGkgOiAxIC0gaSkpKSkgPj4+XG4gICAgICAobGl0dGxlRW5kaWFuID8gaSA6IDEgLSBpKSAqIDhcbiAgfVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDE2TEUgPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpXG4gICAgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMiwgMHhmZmZmLCAwKVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldF0gPSB2YWx1ZVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDgpXG4gIH0gZWxzZSBvYmplY3RXcml0ZVVJbnQxNih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlKVxuICByZXR1cm4gb2Zmc2V0ICsgMlxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDE2QkUgPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpXG4gICAgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMiwgMHhmZmZmLCAwKVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldF0gPSAodmFsdWUgPj4+IDgpXG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9IHZhbHVlXG4gIH0gZWxzZSBvYmplY3RXcml0ZVVJbnQxNih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSlcbiAgcmV0dXJuIG9mZnNldCArIDJcbn1cblxuZnVuY3Rpb24gb2JqZWN0V3JpdGVVSW50MzIgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuKSB7XG4gIGlmICh2YWx1ZSA8IDApIHZhbHVlID0gMHhmZmZmZmZmZiArIHZhbHVlICsgMVxuICBmb3IgKHZhciBpID0gMCwgaiA9IE1hdGgubWluKGJ1Zi5sZW5ndGggLSBvZmZzZXQsIDQpOyBpIDwgajsgaSsrKSB7XG4gICAgYnVmW29mZnNldCArIGldID0gKHZhbHVlID4+PiAobGl0dGxlRW5kaWFuID8gaSA6IDMgLSBpKSAqIDgpICYgMHhmZlxuICB9XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50MzJMRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydClcbiAgICBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCA0LCAweGZmZmZmZmZmLCAwKVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldCArIDNdID0gKHZhbHVlID4+PiAyNClcbiAgICB0aGlzW29mZnNldCArIDJdID0gKHZhbHVlID4+PiAxNilcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiA4KVxuICAgIHRoaXNbb2Zmc2V0XSA9IHZhbHVlXG4gIH0gZWxzZSBvYmplY3RXcml0ZVVJbnQzMih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlKVxuICByZXR1cm4gb2Zmc2V0ICsgNFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDMyQkUgPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpXG4gICAgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgNCwgMHhmZmZmZmZmZiwgMClcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlID4+PiAyNClcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiAxNilcbiAgICB0aGlzW29mZnNldCArIDJdID0gKHZhbHVlID4+PiA4KVxuICAgIHRoaXNbb2Zmc2V0ICsgM10gPSB2YWx1ZVxuICB9IGVsc2Ugb2JqZWN0V3JpdGVVSW50MzIodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UpXG4gIHJldHVybiBvZmZzZXQgKyA0XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQ4ID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KVxuICAgIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDEsIDB4N2YsIC0weDgwKVxuICBpZiAoIUJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB2YWx1ZSA9IE1hdGguZmxvb3IodmFsdWUpXG4gIGlmICh2YWx1ZSA8IDApIHZhbHVlID0gMHhmZiArIHZhbHVlICsgMVxuICB0aGlzW29mZnNldF0gPSB2YWx1ZVxuICByZXR1cm4gb2Zmc2V0ICsgMVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50MTZMRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydClcbiAgICBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAyLCAweDdmZmYsIC0weDgwMDApXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9IHZhbHVlXG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gOClcbiAgfSBlbHNlIG9iamVjdFdyaXRlVUludDE2KHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUpXG4gIHJldHVybiBvZmZzZXQgKyAyXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQxNkJFID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KVxuICAgIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDIsIDB4N2ZmZiwgLTB4ODAwMClcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlID4+PiA4KVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSB2YWx1ZVxuICB9IGVsc2Ugb2JqZWN0V3JpdGVVSW50MTYodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UpXG4gIHJldHVybiBvZmZzZXQgKyAyXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQzMkxFID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KVxuICAgIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDQsIDB4N2ZmZmZmZmYsIC0weDgwMDAwMDAwKVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldF0gPSB2YWx1ZVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDgpXG4gICAgdGhpc1tvZmZzZXQgKyAyXSA9ICh2YWx1ZSA+Pj4gMTYpXG4gICAgdGhpc1tvZmZzZXQgKyAzXSA9ICh2YWx1ZSA+Pj4gMjQpXG4gIH0gZWxzZSBvYmplY3RXcml0ZVVJbnQzMih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlKVxuICByZXR1cm4gb2Zmc2V0ICsgNFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50MzJCRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydClcbiAgICBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCA0LCAweDdmZmZmZmZmLCAtMHg4MDAwMDAwMClcbiAgaWYgKHZhbHVlIDwgMCkgdmFsdWUgPSAweGZmZmZmZmZmICsgdmFsdWUgKyAxXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSA+Pj4gMjQpXG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gMTYpXG4gICAgdGhpc1tvZmZzZXQgKyAyXSA9ICh2YWx1ZSA+Pj4gOClcbiAgICB0aGlzW29mZnNldCArIDNdID0gdmFsdWVcbiAgfSBlbHNlIG9iamVjdFdyaXRlVUludDMyKHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlKVxuICByZXR1cm4gb2Zmc2V0ICsgNFxufVxuXG5mdW5jdGlvbiBjaGVja0lFRUU3NTQgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgZXh0LCBtYXgsIG1pbikge1xuICBpZiAodmFsdWUgPiBtYXggfHwgdmFsdWUgPCBtaW4pIHRocm93IG5ldyBUeXBlRXJyb3IoJ3ZhbHVlIGlzIG91dCBvZiBib3VuZHMnKVxuICBpZiAob2Zmc2V0ICsgZXh0ID4gYnVmLmxlbmd0aCkgdGhyb3cgbmV3IFR5cGVFcnJvcignaW5kZXggb3V0IG9mIHJhbmdlJylcbn1cblxuZnVuY3Rpb24gd3JpdGVGbG9hdCAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpXG4gICAgY2hlY2tJRUVFNzU0KGJ1ZiwgdmFsdWUsIG9mZnNldCwgNCwgMy40MDI4MjM0NjYzODUyODg2ZSszOCwgLTMuNDAyODIzNDY2Mzg1Mjg4NmUrMzgpXG4gIGllZWU3NTQud3JpdGUoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIDIzLCA0KVxuICByZXR1cm4gb2Zmc2V0ICsgNFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlRmxvYXRMRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gd3JpdGVGbG9hdCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUZsb2F0QkUgPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIHdyaXRlRmxvYXQodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG5mdW5jdGlvbiB3cml0ZURvdWJsZSAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpXG4gICAgY2hlY2tJRUVFNzU0KGJ1ZiwgdmFsdWUsIG9mZnNldCwgOCwgMS43OTc2OTMxMzQ4NjIzMTU3RSszMDgsIC0xLjc5NzY5MzEzNDg2MjMxNTdFKzMwOClcbiAgaWVlZTc1NC53cml0ZShidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgNTIsIDgpXG4gIHJldHVybiBvZmZzZXQgKyA4XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVEb3VibGVMRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gd3JpdGVEb3VibGUodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVEb3VibGVCRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gd3JpdGVEb3VibGUodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG4vLyBjb3B5KHRhcmdldEJ1ZmZlciwgdGFyZ2V0U3RhcnQ9MCwgc291cmNlU3RhcnQ9MCwgc291cmNlRW5kPWJ1ZmZlci5sZW5ndGgpXG5CdWZmZXIucHJvdG90eXBlLmNvcHkgPSBmdW5jdGlvbiAodGFyZ2V0LCB0YXJnZXRfc3RhcnQsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIHNvdXJjZSA9IHRoaXNcblxuICBpZiAoIXN0YXJ0KSBzdGFydCA9IDBcbiAgaWYgKCFlbmQgJiYgZW5kICE9PSAwKSBlbmQgPSB0aGlzLmxlbmd0aFxuICBpZiAoIXRhcmdldF9zdGFydCkgdGFyZ2V0X3N0YXJ0ID0gMFxuXG4gIC8vIENvcHkgMCBieXRlczsgd2UncmUgZG9uZVxuICBpZiAoZW5kID09PSBzdGFydCkgcmV0dXJuXG4gIGlmICh0YXJnZXQubGVuZ3RoID09PSAwIHx8IHNvdXJjZS5sZW5ndGggPT09IDApIHJldHVyblxuXG4gIC8vIEZhdGFsIGVycm9yIGNvbmRpdGlvbnNcbiAgaWYgKGVuZCA8IHN0YXJ0KSB0aHJvdyBuZXcgVHlwZUVycm9yKCdzb3VyY2VFbmQgPCBzb3VyY2VTdGFydCcpXG4gIGlmICh0YXJnZXRfc3RhcnQgPCAwIHx8IHRhcmdldF9zdGFydCA+PSB0YXJnZXQubGVuZ3RoKVxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ3RhcmdldFN0YXJ0IG91dCBvZiBib3VuZHMnKVxuICBpZiAoc3RhcnQgPCAwIHx8IHN0YXJ0ID49IHNvdXJjZS5sZW5ndGgpIHRocm93IG5ldyBUeXBlRXJyb3IoJ3NvdXJjZVN0YXJ0IG91dCBvZiBib3VuZHMnKVxuICBpZiAoZW5kIDwgMCB8fCBlbmQgPiBzb3VyY2UubGVuZ3RoKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdzb3VyY2VFbmQgb3V0IG9mIGJvdW5kcycpXG5cbiAgLy8gQXJlIHdlIG9vYj9cbiAgaWYgKGVuZCA+IHRoaXMubGVuZ3RoKVxuICAgIGVuZCA9IHRoaXMubGVuZ3RoXG4gIGlmICh0YXJnZXQubGVuZ3RoIC0gdGFyZ2V0X3N0YXJ0IDwgZW5kIC0gc3RhcnQpXG4gICAgZW5kID0gdGFyZ2V0Lmxlbmd0aCAtIHRhcmdldF9zdGFydCArIHN0YXJ0XG5cbiAgdmFyIGxlbiA9IGVuZCAtIHN0YXJ0XG5cbiAgaWYgKGxlbiA8IDEwMDAgfHwgIUJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgdGFyZ2V0W2kgKyB0YXJnZXRfc3RhcnRdID0gdGhpc1tpICsgc3RhcnRdXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHRhcmdldC5fc2V0KHRoaXMuc3ViYXJyYXkoc3RhcnQsIHN0YXJ0ICsgbGVuKSwgdGFyZ2V0X3N0YXJ0KVxuICB9XG59XG5cbi8vIGZpbGwodmFsdWUsIHN0YXJ0PTAsIGVuZD1idWZmZXIubGVuZ3RoKVxuQnVmZmVyLnByb3RvdHlwZS5maWxsID0gZnVuY3Rpb24gKHZhbHVlLCBzdGFydCwgZW5kKSB7XG4gIGlmICghdmFsdWUpIHZhbHVlID0gMFxuICBpZiAoIXN0YXJ0KSBzdGFydCA9IDBcbiAgaWYgKCFlbmQpIGVuZCA9IHRoaXMubGVuZ3RoXG5cbiAgaWYgKGVuZCA8IHN0YXJ0KSB0aHJvdyBuZXcgVHlwZUVycm9yKCdlbmQgPCBzdGFydCcpXG5cbiAgLy8gRmlsbCAwIGJ5dGVzOyB3ZSdyZSBkb25lXG4gIGlmIChlbmQgPT09IHN0YXJ0KSByZXR1cm5cbiAgaWYgKHRoaXMubGVuZ3RoID09PSAwKSByZXR1cm5cblxuICBpZiAoc3RhcnQgPCAwIHx8IHN0YXJ0ID49IHRoaXMubGVuZ3RoKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdzdGFydCBvdXQgb2YgYm91bmRzJylcbiAgaWYgKGVuZCA8IDAgfHwgZW5kID4gdGhpcy5sZW5ndGgpIHRocm93IG5ldyBUeXBlRXJyb3IoJ2VuZCBvdXQgb2YgYm91bmRzJylcblxuICB2YXIgaVxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xuICAgIGZvciAoaSA9IHN0YXJ0OyBpIDwgZW5kOyBpKyspIHtcbiAgICAgIHRoaXNbaV0gPSB2YWx1ZVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB2YXIgYnl0ZXMgPSB1dGY4VG9CeXRlcyh2YWx1ZS50b1N0cmluZygpKVxuICAgIHZhciBsZW4gPSBieXRlcy5sZW5ndGhcbiAgICBmb3IgKGkgPSBzdGFydDsgaSA8IGVuZDsgaSsrKSB7XG4gICAgICB0aGlzW2ldID0gYnl0ZXNbaSAlIGxlbl1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGhpc1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgYEFycmF5QnVmZmVyYCB3aXRoIHRoZSAqY29waWVkKiBtZW1vcnkgb2YgdGhlIGJ1ZmZlciBpbnN0YW5jZS5cbiAqIEFkZGVkIGluIE5vZGUgMC4xMi4gT25seSBhdmFpbGFibGUgaW4gYnJvd3NlcnMgdGhhdCBzdXBwb3J0IEFycmF5QnVmZmVyLlxuICovXG5CdWZmZXIucHJvdG90eXBlLnRvQXJyYXlCdWZmZXIgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0eXBlb2YgVWludDhBcnJheSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICAgIHJldHVybiAobmV3IEJ1ZmZlcih0aGlzKSkuYnVmZmVyXG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBidWYgPSBuZXcgVWludDhBcnJheSh0aGlzLmxlbmd0aClcbiAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBidWYubGVuZ3RoOyBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICAgICAgYnVmW2ldID0gdGhpc1tpXVxuICAgICAgfVxuICAgICAgcmV0dXJuIGJ1Zi5idWZmZXJcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQnVmZmVyLnRvQXJyYXlCdWZmZXIgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXInKVxuICB9XG59XG5cbi8vIEhFTFBFUiBGVU5DVElPTlNcbi8vID09PT09PT09PT09PT09PT1cblxudmFyIEJQID0gQnVmZmVyLnByb3RvdHlwZVxuXG4vKipcbiAqIEF1Z21lbnQgYSBVaW50OEFycmF5ICppbnN0YW5jZSogKG5vdCB0aGUgVWludDhBcnJheSBjbGFzcyEpIHdpdGggQnVmZmVyIG1ldGhvZHNcbiAqL1xuQnVmZmVyLl9hdWdtZW50ID0gZnVuY3Rpb24gKGFycikge1xuICBhcnIuY29uc3RydWN0b3IgPSBCdWZmZXJcbiAgYXJyLl9pc0J1ZmZlciA9IHRydWVcblxuICAvLyBzYXZlIHJlZmVyZW5jZSB0byBvcmlnaW5hbCBVaW50OEFycmF5IGdldC9zZXQgbWV0aG9kcyBiZWZvcmUgb3ZlcndyaXRpbmdcbiAgYXJyLl9nZXQgPSBhcnIuZ2V0XG4gIGFyci5fc2V0ID0gYXJyLnNldFxuXG4gIC8vIGRlcHJlY2F0ZWQsIHdpbGwgYmUgcmVtb3ZlZCBpbiBub2RlIDAuMTMrXG4gIGFyci5nZXQgPSBCUC5nZXRcbiAgYXJyLnNldCA9IEJQLnNldFxuXG4gIGFyci53cml0ZSA9IEJQLndyaXRlXG4gIGFyci50b1N0cmluZyA9IEJQLnRvU3RyaW5nXG4gIGFyci50b0xvY2FsZVN0cmluZyA9IEJQLnRvU3RyaW5nXG4gIGFyci50b0pTT04gPSBCUC50b0pTT05cbiAgYXJyLmVxdWFscyA9IEJQLmVxdWFsc1xuICBhcnIuY29tcGFyZSA9IEJQLmNvbXBhcmVcbiAgYXJyLmNvcHkgPSBCUC5jb3B5XG4gIGFyci5zbGljZSA9IEJQLnNsaWNlXG4gIGFyci5yZWFkVUludDggPSBCUC5yZWFkVUludDhcbiAgYXJyLnJlYWRVSW50MTZMRSA9IEJQLnJlYWRVSW50MTZMRVxuICBhcnIucmVhZFVJbnQxNkJFID0gQlAucmVhZFVJbnQxNkJFXG4gIGFyci5yZWFkVUludDMyTEUgPSBCUC5yZWFkVUludDMyTEVcbiAgYXJyLnJlYWRVSW50MzJCRSA9IEJQLnJlYWRVSW50MzJCRVxuICBhcnIucmVhZEludDggPSBCUC5yZWFkSW50OFxuICBhcnIucmVhZEludDE2TEUgPSBCUC5yZWFkSW50MTZMRVxuICBhcnIucmVhZEludDE2QkUgPSBCUC5yZWFkSW50MTZCRVxuICBhcnIucmVhZEludDMyTEUgPSBCUC5yZWFkSW50MzJMRVxuICBhcnIucmVhZEludDMyQkUgPSBCUC5yZWFkSW50MzJCRVxuICBhcnIucmVhZEZsb2F0TEUgPSBCUC5yZWFkRmxvYXRMRVxuICBhcnIucmVhZEZsb2F0QkUgPSBCUC5yZWFkRmxvYXRCRVxuICBhcnIucmVhZERvdWJsZUxFID0gQlAucmVhZERvdWJsZUxFXG4gIGFyci5yZWFkRG91YmxlQkUgPSBCUC5yZWFkRG91YmxlQkVcbiAgYXJyLndyaXRlVUludDggPSBCUC53cml0ZVVJbnQ4XG4gIGFyci53cml0ZVVJbnQxNkxFID0gQlAud3JpdGVVSW50MTZMRVxuICBhcnIud3JpdGVVSW50MTZCRSA9IEJQLndyaXRlVUludDE2QkVcbiAgYXJyLndyaXRlVUludDMyTEUgPSBCUC53cml0ZVVJbnQzMkxFXG4gIGFyci53cml0ZVVJbnQzMkJFID0gQlAud3JpdGVVSW50MzJCRVxuICBhcnIud3JpdGVJbnQ4ID0gQlAud3JpdGVJbnQ4XG4gIGFyci53cml0ZUludDE2TEUgPSBCUC53cml0ZUludDE2TEVcbiAgYXJyLndyaXRlSW50MTZCRSA9IEJQLndyaXRlSW50MTZCRVxuICBhcnIud3JpdGVJbnQzMkxFID0gQlAud3JpdGVJbnQzMkxFXG4gIGFyci53cml0ZUludDMyQkUgPSBCUC53cml0ZUludDMyQkVcbiAgYXJyLndyaXRlRmxvYXRMRSA9IEJQLndyaXRlRmxvYXRMRVxuICBhcnIud3JpdGVGbG9hdEJFID0gQlAud3JpdGVGbG9hdEJFXG4gIGFyci53cml0ZURvdWJsZUxFID0gQlAud3JpdGVEb3VibGVMRVxuICBhcnIud3JpdGVEb3VibGVCRSA9IEJQLndyaXRlRG91YmxlQkVcbiAgYXJyLmZpbGwgPSBCUC5maWxsXG4gIGFyci5pbnNwZWN0ID0gQlAuaW5zcGVjdFxuICBhcnIudG9BcnJheUJ1ZmZlciA9IEJQLnRvQXJyYXlCdWZmZXJcblxuICByZXR1cm4gYXJyXG59XG5cbnZhciBJTlZBTElEX0JBU0U2NF9SRSA9IC9bXitcXC8wLTlBLXpdL2dcblxuZnVuY3Rpb24gYmFzZTY0Y2xlYW4gKHN0cikge1xuICAvLyBOb2RlIHN0cmlwcyBvdXQgaW52YWxpZCBjaGFyYWN0ZXJzIGxpa2UgXFxuIGFuZCBcXHQgZnJvbSB0aGUgc3RyaW5nLCBiYXNlNjQtanMgZG9lcyBub3RcbiAgc3RyID0gc3RyaW5ndHJpbShzdHIpLnJlcGxhY2UoSU5WQUxJRF9CQVNFNjRfUkUsICcnKVxuICAvLyBOb2RlIGFsbG93cyBmb3Igbm9uLXBhZGRlZCBiYXNlNjQgc3RyaW5ncyAobWlzc2luZyB0cmFpbGluZyA9PT0pLCBiYXNlNjQtanMgZG9lcyBub3RcbiAgd2hpbGUgKHN0ci5sZW5ndGggJSA0ICE9PSAwKSB7XG4gICAgc3RyID0gc3RyICsgJz0nXG4gIH1cbiAgcmV0dXJuIHN0clxufVxuXG5mdW5jdGlvbiBzdHJpbmd0cmltIChzdHIpIHtcbiAgaWYgKHN0ci50cmltKSByZXR1cm4gc3RyLnRyaW0oKVxuICByZXR1cm4gc3RyLnJlcGxhY2UoL15cXHMrfFxccyskL2csICcnKVxufVxuXG5mdW5jdGlvbiBpc0FycmF5aXNoIChzdWJqZWN0KSB7XG4gIHJldHVybiBpc0FycmF5KHN1YmplY3QpIHx8IEJ1ZmZlci5pc0J1ZmZlcihzdWJqZWN0KSB8fFxuICAgICAgc3ViamVjdCAmJiB0eXBlb2Ygc3ViamVjdCA9PT0gJ29iamVjdCcgJiZcbiAgICAgIHR5cGVvZiBzdWJqZWN0Lmxlbmd0aCA9PT0gJ251bWJlcidcbn1cblxuZnVuY3Rpb24gdG9IZXggKG4pIHtcbiAgaWYgKG4gPCAxNikgcmV0dXJuICcwJyArIG4udG9TdHJpbmcoMTYpXG4gIHJldHVybiBuLnRvU3RyaW5nKDE2KVxufVxuXG5mdW5jdGlvbiB1dGY4VG9CeXRlcyAoc3RyKSB7XG4gIHZhciBieXRlQXJyYXkgPSBbXVxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xuICAgIHZhciBiID0gc3RyLmNoYXJDb2RlQXQoaSlcbiAgICBpZiAoYiA8PSAweDdGKSB7XG4gICAgICBieXRlQXJyYXkucHVzaChiKVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgc3RhcnQgPSBpXG4gICAgICBpZiAoYiA+PSAweEQ4MDAgJiYgYiA8PSAweERGRkYpIGkrK1xuICAgICAgdmFyIGggPSBlbmNvZGVVUklDb21wb25lbnQoc3RyLnNsaWNlKHN0YXJ0LCBpKzEpKS5zdWJzdHIoMSkuc3BsaXQoJyUnKVxuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBoLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGJ5dGVBcnJheS5wdXNoKHBhcnNlSW50KGhbal0sIDE2KSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGJ5dGVBcnJheVxufVxuXG5mdW5jdGlvbiBhc2NpaVRvQnl0ZXMgKHN0cikge1xuICB2YXIgYnl0ZUFycmF5ID0gW11cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcbiAgICAvLyBOb2RlJ3MgY29kZSBzZWVtcyB0byBiZSBkb2luZyB0aGlzIGFuZCBub3QgJiAweDdGLi5cbiAgICBieXRlQXJyYXkucHVzaChzdHIuY2hhckNvZGVBdChpKSAmIDB4RkYpXG4gIH1cbiAgcmV0dXJuIGJ5dGVBcnJheVxufVxuXG5mdW5jdGlvbiB1dGYxNmxlVG9CeXRlcyAoc3RyKSB7XG4gIHZhciBjLCBoaSwgbG9cbiAgdmFyIGJ5dGVBcnJheSA9IFtdXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XG4gICAgYyA9IHN0ci5jaGFyQ29kZUF0KGkpXG4gICAgaGkgPSBjID4+IDhcbiAgICBsbyA9IGMgJSAyNTZcbiAgICBieXRlQXJyYXkucHVzaChsbylcbiAgICBieXRlQXJyYXkucHVzaChoaSlcbiAgfVxuXG4gIHJldHVybiBieXRlQXJyYXlcbn1cblxuZnVuY3Rpb24gYmFzZTY0VG9CeXRlcyAoc3RyKSB7XG4gIHJldHVybiBiYXNlNjQudG9CeXRlQXJyYXkoc3RyKVxufVxuXG5mdW5jdGlvbiBibGl0QnVmZmVyIChzcmMsIGRzdCwgb2Zmc2V0LCBsZW5ndGgsIHVuaXRTaXplKSB7XG4gIGlmICh1bml0U2l6ZSkgbGVuZ3RoIC09IGxlbmd0aCAlIHVuaXRTaXplO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKChpICsgb2Zmc2V0ID49IGRzdC5sZW5ndGgpIHx8IChpID49IHNyYy5sZW5ndGgpKVxuICAgICAgYnJlYWtcbiAgICBkc3RbaSArIG9mZnNldF0gPSBzcmNbaV1cbiAgfVxuICByZXR1cm4gaVxufVxuXG5mdW5jdGlvbiBkZWNvZGVVdGY4Q2hhciAoc3RyKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChzdHIpXG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4RkZGRCkgLy8gVVRGIDggaW52YWxpZCBjaGFyXG4gIH1cbn1cbiIsInZhciBsb29rdXAgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLyc7XG5cbjsoZnVuY3Rpb24gKGV4cG9ydHMpIHtcblx0J3VzZSBzdHJpY3QnO1xuXG4gIHZhciBBcnIgPSAodHlwZW9mIFVpbnQ4QXJyYXkgIT09ICd1bmRlZmluZWQnKVxuICAgID8gVWludDhBcnJheVxuICAgIDogQXJyYXlcblxuXHR2YXIgUExVUyAgID0gJysnLmNoYXJDb2RlQXQoMClcblx0dmFyIFNMQVNIICA9ICcvJy5jaGFyQ29kZUF0KDApXG5cdHZhciBOVU1CRVIgPSAnMCcuY2hhckNvZGVBdCgwKVxuXHR2YXIgTE9XRVIgID0gJ2EnLmNoYXJDb2RlQXQoMClcblx0dmFyIFVQUEVSICA9ICdBJy5jaGFyQ29kZUF0KDApXG5cblx0ZnVuY3Rpb24gZGVjb2RlIChlbHQpIHtcblx0XHR2YXIgY29kZSA9IGVsdC5jaGFyQ29kZUF0KDApXG5cdFx0aWYgKGNvZGUgPT09IFBMVVMpXG5cdFx0XHRyZXR1cm4gNjIgLy8gJysnXG5cdFx0aWYgKGNvZGUgPT09IFNMQVNIKVxuXHRcdFx0cmV0dXJuIDYzIC8vICcvJ1xuXHRcdGlmIChjb2RlIDwgTlVNQkVSKVxuXHRcdFx0cmV0dXJuIC0xIC8vbm8gbWF0Y2hcblx0XHRpZiAoY29kZSA8IE5VTUJFUiArIDEwKVxuXHRcdFx0cmV0dXJuIGNvZGUgLSBOVU1CRVIgKyAyNiArIDI2XG5cdFx0aWYgKGNvZGUgPCBVUFBFUiArIDI2KVxuXHRcdFx0cmV0dXJuIGNvZGUgLSBVUFBFUlxuXHRcdGlmIChjb2RlIDwgTE9XRVIgKyAyNilcblx0XHRcdHJldHVybiBjb2RlIC0gTE9XRVIgKyAyNlxuXHR9XG5cblx0ZnVuY3Rpb24gYjY0VG9CeXRlQXJyYXkgKGI2NCkge1xuXHRcdHZhciBpLCBqLCBsLCB0bXAsIHBsYWNlSG9sZGVycywgYXJyXG5cblx0XHRpZiAoYjY0Lmxlbmd0aCAlIDQgPiAwKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgc3RyaW5nLiBMZW5ndGggbXVzdCBiZSBhIG11bHRpcGxlIG9mIDQnKVxuXHRcdH1cblxuXHRcdC8vIHRoZSBudW1iZXIgb2YgZXF1YWwgc2lnbnMgKHBsYWNlIGhvbGRlcnMpXG5cdFx0Ly8gaWYgdGhlcmUgYXJlIHR3byBwbGFjZWhvbGRlcnMsIHRoYW4gdGhlIHR3byBjaGFyYWN0ZXJzIGJlZm9yZSBpdFxuXHRcdC8vIHJlcHJlc2VudCBvbmUgYnl0ZVxuXHRcdC8vIGlmIHRoZXJlIGlzIG9ubHkgb25lLCB0aGVuIHRoZSB0aHJlZSBjaGFyYWN0ZXJzIGJlZm9yZSBpdCByZXByZXNlbnQgMiBieXRlc1xuXHRcdC8vIHRoaXMgaXMganVzdCBhIGNoZWFwIGhhY2sgdG8gbm90IGRvIGluZGV4T2YgdHdpY2Vcblx0XHR2YXIgbGVuID0gYjY0Lmxlbmd0aFxuXHRcdHBsYWNlSG9sZGVycyA9ICc9JyA9PT0gYjY0LmNoYXJBdChsZW4gLSAyKSA/IDIgOiAnPScgPT09IGI2NC5jaGFyQXQobGVuIC0gMSkgPyAxIDogMFxuXG5cdFx0Ly8gYmFzZTY0IGlzIDQvMyArIHVwIHRvIHR3byBjaGFyYWN0ZXJzIG9mIHRoZSBvcmlnaW5hbCBkYXRhXG5cdFx0YXJyID0gbmV3IEFycihiNjQubGVuZ3RoICogMyAvIDQgLSBwbGFjZUhvbGRlcnMpXG5cblx0XHQvLyBpZiB0aGVyZSBhcmUgcGxhY2Vob2xkZXJzLCBvbmx5IGdldCB1cCB0byB0aGUgbGFzdCBjb21wbGV0ZSA0IGNoYXJzXG5cdFx0bCA9IHBsYWNlSG9sZGVycyA+IDAgPyBiNjQubGVuZ3RoIC0gNCA6IGI2NC5sZW5ndGhcblxuXHRcdHZhciBMID0gMFxuXG5cdFx0ZnVuY3Rpb24gcHVzaCAodikge1xuXHRcdFx0YXJyW0wrK10gPSB2XG5cdFx0fVxuXG5cdFx0Zm9yIChpID0gMCwgaiA9IDA7IGkgPCBsOyBpICs9IDQsIGogKz0gMykge1xuXHRcdFx0dG1wID0gKGRlY29kZShiNjQuY2hhckF0KGkpKSA8PCAxOCkgfCAoZGVjb2RlKGI2NC5jaGFyQXQoaSArIDEpKSA8PCAxMikgfCAoZGVjb2RlKGI2NC5jaGFyQXQoaSArIDIpKSA8PCA2KSB8IGRlY29kZShiNjQuY2hhckF0KGkgKyAzKSlcblx0XHRcdHB1c2goKHRtcCAmIDB4RkYwMDAwKSA+PiAxNilcblx0XHRcdHB1c2goKHRtcCAmIDB4RkYwMCkgPj4gOClcblx0XHRcdHB1c2godG1wICYgMHhGRilcblx0XHR9XG5cblx0XHRpZiAocGxhY2VIb2xkZXJzID09PSAyKSB7XG5cdFx0XHR0bXAgPSAoZGVjb2RlKGI2NC5jaGFyQXQoaSkpIDw8IDIpIHwgKGRlY29kZShiNjQuY2hhckF0KGkgKyAxKSkgPj4gNClcblx0XHRcdHB1c2godG1wICYgMHhGRilcblx0XHR9IGVsc2UgaWYgKHBsYWNlSG9sZGVycyA9PT0gMSkge1xuXHRcdFx0dG1wID0gKGRlY29kZShiNjQuY2hhckF0KGkpKSA8PCAxMCkgfCAoZGVjb2RlKGI2NC5jaGFyQXQoaSArIDEpKSA8PCA0KSB8IChkZWNvZGUoYjY0LmNoYXJBdChpICsgMikpID4+IDIpXG5cdFx0XHRwdXNoKCh0bXAgPj4gOCkgJiAweEZGKVxuXHRcdFx0cHVzaCh0bXAgJiAweEZGKVxuXHRcdH1cblxuXHRcdHJldHVybiBhcnJcblx0fVxuXG5cdGZ1bmN0aW9uIHVpbnQ4VG9CYXNlNjQgKHVpbnQ4KSB7XG5cdFx0dmFyIGksXG5cdFx0XHRleHRyYUJ5dGVzID0gdWludDgubGVuZ3RoICUgMywgLy8gaWYgd2UgaGF2ZSAxIGJ5dGUgbGVmdCwgcGFkIDIgYnl0ZXNcblx0XHRcdG91dHB1dCA9IFwiXCIsXG5cdFx0XHR0ZW1wLCBsZW5ndGhcblxuXHRcdGZ1bmN0aW9uIGVuY29kZSAobnVtKSB7XG5cdFx0XHRyZXR1cm4gbG9va3VwLmNoYXJBdChudW0pXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gdHJpcGxldFRvQmFzZTY0IChudW0pIHtcblx0XHRcdHJldHVybiBlbmNvZGUobnVtID4+IDE4ICYgMHgzRikgKyBlbmNvZGUobnVtID4+IDEyICYgMHgzRikgKyBlbmNvZGUobnVtID4+IDYgJiAweDNGKSArIGVuY29kZShudW0gJiAweDNGKVxuXHRcdH1cblxuXHRcdC8vIGdvIHRocm91Z2ggdGhlIGFycmF5IGV2ZXJ5IHRocmVlIGJ5dGVzLCB3ZSdsbCBkZWFsIHdpdGggdHJhaWxpbmcgc3R1ZmYgbGF0ZXJcblx0XHRmb3IgKGkgPSAwLCBsZW5ndGggPSB1aW50OC5sZW5ndGggLSBleHRyYUJ5dGVzOyBpIDwgbGVuZ3RoOyBpICs9IDMpIHtcblx0XHRcdHRlbXAgPSAodWludDhbaV0gPDwgMTYpICsgKHVpbnQ4W2kgKyAxXSA8PCA4KSArICh1aW50OFtpICsgMl0pXG5cdFx0XHRvdXRwdXQgKz0gdHJpcGxldFRvQmFzZTY0KHRlbXApXG5cdFx0fVxuXG5cdFx0Ly8gcGFkIHRoZSBlbmQgd2l0aCB6ZXJvcywgYnV0IG1ha2Ugc3VyZSB0byBub3QgZm9yZ2V0IHRoZSBleHRyYSBieXRlc1xuXHRcdHN3aXRjaCAoZXh0cmFCeXRlcykge1xuXHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHR0ZW1wID0gdWludDhbdWludDgubGVuZ3RoIC0gMV1cblx0XHRcdFx0b3V0cHV0ICs9IGVuY29kZSh0ZW1wID4+IDIpXG5cdFx0XHRcdG91dHB1dCArPSBlbmNvZGUoKHRlbXAgPDwgNCkgJiAweDNGKVxuXHRcdFx0XHRvdXRwdXQgKz0gJz09J1xuXHRcdFx0XHRicmVha1xuXHRcdFx0Y2FzZSAyOlxuXHRcdFx0XHR0ZW1wID0gKHVpbnQ4W3VpbnQ4Lmxlbmd0aCAtIDJdIDw8IDgpICsgKHVpbnQ4W3VpbnQ4Lmxlbmd0aCAtIDFdKVxuXHRcdFx0XHRvdXRwdXQgKz0gZW5jb2RlKHRlbXAgPj4gMTApXG5cdFx0XHRcdG91dHB1dCArPSBlbmNvZGUoKHRlbXAgPj4gNCkgJiAweDNGKVxuXHRcdFx0XHRvdXRwdXQgKz0gZW5jb2RlKCh0ZW1wIDw8IDIpICYgMHgzRilcblx0XHRcdFx0b3V0cHV0ICs9ICc9J1xuXHRcdFx0XHRicmVha1xuXHRcdH1cblxuXHRcdHJldHVybiBvdXRwdXRcblx0fVxuXG5cdGV4cG9ydHMudG9CeXRlQXJyYXkgPSBiNjRUb0J5dGVBcnJheVxuXHRleHBvcnRzLmZyb21CeXRlQXJyYXkgPSB1aW50OFRvQmFzZTY0XG59KHR5cGVvZiBleHBvcnRzID09PSAndW5kZWZpbmVkJyA/ICh0aGlzLmJhc2U2NGpzID0ge30pIDogZXhwb3J0cykpXG4iLCJleHBvcnRzLnJlYWQgPSBmdW5jdGlvbiAoYnVmZmVyLCBvZmZzZXQsIGlzTEUsIG1MZW4sIG5CeXRlcykge1xuICB2YXIgZSwgbVxuICB2YXIgZUxlbiA9IG5CeXRlcyAqIDggLSBtTGVuIC0gMVxuICB2YXIgZU1heCA9ICgxIDw8IGVMZW4pIC0gMVxuICB2YXIgZUJpYXMgPSBlTWF4ID4+IDFcbiAgdmFyIG5CaXRzID0gLTdcbiAgdmFyIGkgPSBpc0xFID8gKG5CeXRlcyAtIDEpIDogMFxuICB2YXIgZCA9IGlzTEUgPyAtMSA6IDFcbiAgdmFyIHMgPSBidWZmZXJbb2Zmc2V0ICsgaV1cblxuICBpICs9IGRcblxuICBlID0gcyAmICgoMSA8PCAoLW5CaXRzKSkgLSAxKVxuICBzID4+PSAoLW5CaXRzKVxuICBuQml0cyArPSBlTGVuXG4gIGZvciAoOyBuQml0cyA+IDA7IGUgPSBlICogMjU2ICsgYnVmZmVyW29mZnNldCArIGldLCBpICs9IGQsIG5CaXRzIC09IDgpIHt9XG5cbiAgbSA9IGUgJiAoKDEgPDwgKC1uQml0cykpIC0gMSlcbiAgZSA+Pj0gKC1uQml0cylcbiAgbkJpdHMgKz0gbUxlblxuICBmb3IgKDsgbkJpdHMgPiAwOyBtID0gbSAqIDI1NiArIGJ1ZmZlcltvZmZzZXQgKyBpXSwgaSArPSBkLCBuQml0cyAtPSA4KSB7fVxuXG4gIGlmIChlID09PSAwKSB7XG4gICAgZSA9IDEgLSBlQmlhc1xuICB9IGVsc2UgaWYgKGUgPT09IGVNYXgpIHtcbiAgICByZXR1cm4gbSA/IE5hTiA6ICgocyA/IC0xIDogMSkgKiBJbmZpbml0eSlcbiAgfSBlbHNlIHtcbiAgICBtID0gbSArIE1hdGgucG93KDIsIG1MZW4pXG4gICAgZSA9IGUgLSBlQmlhc1xuICB9XG4gIHJldHVybiAocyA/IC0xIDogMSkgKiBtICogTWF0aC5wb3coMiwgZSAtIG1MZW4pXG59XG5cbmV4cG9ydHMud3JpdGUgPSBmdW5jdGlvbiAoYnVmZmVyLCB2YWx1ZSwgb2Zmc2V0LCBpc0xFLCBtTGVuLCBuQnl0ZXMpIHtcbiAgdmFyIGUsIG0sIGNcbiAgdmFyIGVMZW4gPSBuQnl0ZXMgKiA4IC0gbUxlbiAtIDFcbiAgdmFyIGVNYXggPSAoMSA8PCBlTGVuKSAtIDFcbiAgdmFyIGVCaWFzID0gZU1heCA+PiAxXG4gIHZhciBydCA9IChtTGVuID09PSAyMyA/IE1hdGgucG93KDIsIC0yNCkgLSBNYXRoLnBvdygyLCAtNzcpIDogMClcbiAgdmFyIGkgPSBpc0xFID8gMCA6IChuQnl0ZXMgLSAxKVxuICB2YXIgZCA9IGlzTEUgPyAxIDogLTFcbiAgdmFyIHMgPSB2YWx1ZSA8IDAgfHwgKHZhbHVlID09PSAwICYmIDEgLyB2YWx1ZSA8IDApID8gMSA6IDBcblxuICB2YWx1ZSA9IE1hdGguYWJzKHZhbHVlKVxuXG4gIGlmIChpc05hTih2YWx1ZSkgfHwgdmFsdWUgPT09IEluZmluaXR5KSB7XG4gICAgbSA9IGlzTmFOKHZhbHVlKSA/IDEgOiAwXG4gICAgZSA9IGVNYXhcbiAgfSBlbHNlIHtcbiAgICBlID0gTWF0aC5mbG9vcihNYXRoLmxvZyh2YWx1ZSkgLyBNYXRoLkxOMilcbiAgICBpZiAodmFsdWUgKiAoYyA9IE1hdGgucG93KDIsIC1lKSkgPCAxKSB7XG4gICAgICBlLS1cbiAgICAgIGMgKj0gMlxuICAgIH1cbiAgICBpZiAoZSArIGVCaWFzID49IDEpIHtcbiAgICAgIHZhbHVlICs9IHJ0IC8gY1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWx1ZSArPSBydCAqIE1hdGgucG93KDIsIDEgLSBlQmlhcylcbiAgICB9XG4gICAgaWYgKHZhbHVlICogYyA+PSAyKSB7XG4gICAgICBlKytcbiAgICAgIGMgLz0gMlxuICAgIH1cblxuICAgIGlmIChlICsgZUJpYXMgPj0gZU1heCkge1xuICAgICAgbSA9IDBcbiAgICAgIGUgPSBlTWF4XG4gICAgfSBlbHNlIGlmIChlICsgZUJpYXMgPj0gMSkge1xuICAgICAgbSA9ICh2YWx1ZSAqIGMgLSAxKSAqIE1hdGgucG93KDIsIG1MZW4pXG4gICAgICBlID0gZSArIGVCaWFzXG4gICAgfSBlbHNlIHtcbiAgICAgIG0gPSB2YWx1ZSAqIE1hdGgucG93KDIsIGVCaWFzIC0gMSkgKiBNYXRoLnBvdygyLCBtTGVuKVxuICAgICAgZSA9IDBcbiAgICB9XG4gIH1cblxuICBmb3IgKDsgbUxlbiA+PSA4OyBidWZmZXJbb2Zmc2V0ICsgaV0gPSBtICYgMHhmZiwgaSArPSBkLCBtIC89IDI1NiwgbUxlbiAtPSA4KSB7fVxuXG4gIGUgPSAoZSA8PCBtTGVuKSB8IG1cbiAgZUxlbiArPSBtTGVuXG4gIGZvciAoOyBlTGVuID4gMDsgYnVmZmVyW29mZnNldCArIGldID0gZSAmIDB4ZmYsIGkgKz0gZCwgZSAvPSAyNTYsIGVMZW4gLT0gOCkge31cblxuICBidWZmZXJbb2Zmc2V0ICsgaSAtIGRdIHw9IHMgKiAxMjhcbn1cbiIsIlxuLyoqXG4gKiBpc0FycmF5XG4gKi9cblxudmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5O1xuXG4vKipcbiAqIHRvU3RyaW5nXG4gKi9cblxudmFyIHN0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5cbi8qKlxuICogV2hldGhlciBvciBub3QgdGhlIGdpdmVuIGB2YWxgXG4gKiBpcyBhbiBhcnJheS5cbiAqXG4gKiBleGFtcGxlOlxuICpcbiAqICAgICAgICBpc0FycmF5KFtdKTtcbiAqICAgICAgICAvLyA+IHRydWVcbiAqICAgICAgICBpc0FycmF5KGFyZ3VtZW50cyk7XG4gKiAgICAgICAgLy8gPiBmYWxzZVxuICogICAgICAgIGlzQXJyYXkoJycpO1xuICogICAgICAgIC8vID4gZmFsc2VcbiAqXG4gKiBAcGFyYW0ge21peGVkfSB2YWxcbiAqIEByZXR1cm4ge2Jvb2x9XG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBpc0FycmF5IHx8IGZ1bmN0aW9uICh2YWwpIHtcbiAgcmV0dXJuICEhIHZhbCAmJiAnW29iamVjdCBBcnJheV0nID09IHN0ci5jYWxsKHZhbCk7XG59O1xuIl19
