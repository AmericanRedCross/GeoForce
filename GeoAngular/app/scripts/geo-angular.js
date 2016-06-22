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
    var first = true;
    for (var i = 0, len = status.length; i < len; ++i) {
      var stat = status[i];
      if (stat.checked) {
        if (first) {
          $scope.statusClause = "status__c LIKE '%" + stat.name + "%'";
          first = false;
        } else {
          $scope.statusClause += "OR status__c LIKE '%" + stat.name + "%' ";
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
      var stat = phase[i];
      if (stat.checked) {
        if (first) {
          $scope.phaseClause = "phase__c LIKE '%" + stat.name + "%'";
          first = false;
        } else {
          $scope.phaseClause += "OR phase__c LIKE '%" + stat.name + "%' ";
        }
      }
    }
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
        parts = [$scope.sectorClause, $scope.dateClause, $scope.statusClause, $scope.budgetClause];
      } else {
        parts = [$scope.sectorClause, $scope.dateClause, $scope.budgetClause];
      }
    } else {
      parts = [$scope.sectorClause, $scope.dateClause, $scope.statusClause, $scope.budgetClause, $scope.businessUnitsClause];
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
      $stateParams.filters = "iroc_status__c LIKE '%Monitoring%'OR iroc_status__c LIKE '%Active%'";
    }

    //remove all filters when switching from disaster to project
    if(theme.indexOf('project')!==-1 && $stateParams.theme.indexOf('disaster')!== -1 ){
      delete $stateParams.filters;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvYWRtaW4vRG9jdW1lbnRzL0dpdEh1Yi9HZW9Gb3JjZS9Db25maWcvbGF5ZXJzL2FsbC5qcyIsIi9Vc2Vycy9hZG1pbi9Eb2N1bWVudHMvR2l0SHViL0dlb0ZvcmNlL0NvbmZpZy9sYXllcnMvYmFzZW1hcHMuanMiLCIvVXNlcnMvYWRtaW4vRG9jdW1lbnRzL0dpdEh1Yi9HZW9Gb3JjZS9Db25maWcvbGF5ZXJzL2Rpc2FzdGVyLmpzIiwiL1VzZXJzL2FkbWluL0RvY3VtZW50cy9HaXRIdWIvR2VvRm9yY2UvQ29uZmlnL2xheWVycy9vdGhlci5qcyIsIi9Vc2Vycy9hZG1pbi9Eb2N1bWVudHMvR2l0SHViL0dlb0ZvcmNlL0NvbmZpZy9sYXllcnMvcHJvamVjdC5qcyIsIi9Vc2Vycy9hZG1pbi9Eb2N1bWVudHMvR2l0SHViL0dlb0ZvcmNlL0NvbmZpZy9sYXllcnMvcHJvamVjdHJpc2suanMiLCIvVXNlcnMvYWRtaW4vRG9jdW1lbnRzL0dpdEh1Yi9HZW9Gb3JjZS9Db25maWcvbGF5ZXJzL3ZlY3RvcnRpbGVzLmpzIiwiL1VzZXJzL2FkbWluL0RvY3VtZW50cy9HaXRIdWIvR2VvRm9yY2UvR2VvQW5ndWxhci9hcHAvbGliL0xlYWZsZXQuTWFwYm94VmVjdG9yVGlsZS9ub2RlX21vZHVsZXMvcGJmL2luZGV4LmpzIiwiL1VzZXJzL2FkbWluL0RvY3VtZW50cy9HaXRIdWIvR2VvRm9yY2UvR2VvQW5ndWxhci9hcHAvbGliL0xlYWZsZXQuTWFwYm94VmVjdG9yVGlsZS9ub2RlX21vZHVsZXMvcGJmL25vZGVfbW9kdWxlcy9pZWVlNzU0L2luZGV4LmpzIiwiL1VzZXJzL2FkbWluL0RvY3VtZW50cy9HaXRIdWIvR2VvRm9yY2UvR2VvQW5ndWxhci9hcHAvbGliL0xlYWZsZXQuTWFwYm94VmVjdG9yVGlsZS9ub2RlX21vZHVsZXMvcG9pbnQtZ2VvbWV0cnkvaW5kZXguanMiLCIvVXNlcnMvYWRtaW4vRG9jdW1lbnRzL0dpdEh1Yi9HZW9Gb3JjZS9HZW9Bbmd1bGFyL2FwcC9saWIvTGVhZmxldC5NYXBib3hWZWN0b3JUaWxlL25vZGVfbW9kdWxlcy92ZWN0b3ItdGlsZS9pbmRleC5qcyIsIi9Vc2Vycy9hZG1pbi9Eb2N1bWVudHMvR2l0SHViL0dlb0ZvcmNlL0dlb0FuZ3VsYXIvYXBwL2xpYi9MZWFmbGV0Lk1hcGJveFZlY3RvclRpbGUvbm9kZV9tb2R1bGVzL3ZlY3Rvci10aWxlL2xpYi92ZWN0b3J0aWxlLmpzIiwiL1VzZXJzL2FkbWluL0RvY3VtZW50cy9HaXRIdWIvR2VvRm9yY2UvR2VvQW5ndWxhci9hcHAvbGliL0xlYWZsZXQuTWFwYm94VmVjdG9yVGlsZS9ub2RlX21vZHVsZXMvdmVjdG9yLXRpbGUvbGliL3ZlY3RvcnRpbGVmZWF0dXJlLmpzIiwiL1VzZXJzL2FkbWluL0RvY3VtZW50cy9HaXRIdWIvR2VvRm9yY2UvR2VvQW5ndWxhci9hcHAvbGliL0xlYWZsZXQuTWFwYm94VmVjdG9yVGlsZS9ub2RlX21vZHVsZXMvdmVjdG9yLXRpbGUvbGliL3ZlY3RvcnRpbGVsYXllci5qcyIsIi9Vc2Vycy9hZG1pbi9Eb2N1bWVudHMvR2l0SHViL0dlb0ZvcmNlL0dlb0FuZ3VsYXIvYXBwL2xpYi9MZWFmbGV0Lk1hcGJveFZlY3RvclRpbGUvc3JjL01WVEZlYXR1cmUuanMiLCIvVXNlcnMvYWRtaW4vRG9jdW1lbnRzL0dpdEh1Yi9HZW9Gb3JjZS9HZW9Bbmd1bGFyL2FwcC9saWIvTGVhZmxldC5NYXBib3hWZWN0b3JUaWxlL3NyYy9NVlRMYXllci5qcyIsIi9Vc2Vycy9hZG1pbi9Eb2N1bWVudHMvR2l0SHViL0dlb0ZvcmNlL0dlb0FuZ3VsYXIvYXBwL2xpYi9MZWFmbGV0Lk1hcGJveFZlY3RvclRpbGUvc3JjL01WVFNvdXJjZS5qcyIsIi9Vc2Vycy9hZG1pbi9Eb2N1bWVudHMvR2l0SHViL0dlb0ZvcmNlL0dlb0FuZ3VsYXIvYXBwL2xpYi9MZWFmbGV0Lk1hcGJveFZlY3RvclRpbGUvc3JjL01WVFV0aWwuanMiLCIvVXNlcnMvYWRtaW4vRG9jdW1lbnRzL0dpdEh1Yi9HZW9Gb3JjZS9HZW9Bbmd1bGFyL2FwcC9saWIvTGVhZmxldC5NYXBib3hWZWN0b3JUaWxlL3NyYy9TdGF0aWNMYWJlbC9TdGF0aWNMYWJlbC5qcyIsIi9Vc2Vycy9hZG1pbi9Eb2N1bWVudHMvR2l0SHViL0dlb0ZvcmNlL0dlb0FuZ3VsYXIvYXBwL2xpYi9mZWF0dXJlbGFiZWwvRmVhdHVyZVNldC5qcyIsIi9Vc2Vycy9hZG1pbi9Eb2N1bWVudHMvR2l0SHViL0dlb0ZvcmNlL0dlb0FuZ3VsYXIvYXBwL2xpYi9mZWF0dXJlbGFiZWwvTGFiZWwuanMiLCIvVXNlcnMvYWRtaW4vRG9jdW1lbnRzL0dpdEh1Yi9HZW9Gb3JjZS9HZW9Bbmd1bGFyL2FwcC9saWIvZmVhdHVyZWxhYmVsL2ZlYXR1cmVsYWJlbC5qcyIsIi9Vc2Vycy9hZG1pbi9Eb2N1bWVudHMvR2l0SHViL0dlb0ZvcmNlL0dlb0FuZ3VsYXIvYXBwL2xpYi9mZWF0dXJlbGFiZWwvbGVhZmxldC1wYXRjaC5qcyIsIi9Vc2Vycy9hZG1pbi9Eb2N1bWVudHMvR2l0SHViL0dlb0ZvcmNlL0dlb0FuZ3VsYXIvYXBwL3NjcmlwdHMvYXBwLmpzIiwiL1VzZXJzL2FkbWluL0RvY3VtZW50cy9HaXRIdWIvR2VvRm9yY2UvR2VvQW5ndWxhci9hcHAvc2NyaXB0cy9jb250cm9sbGVycy9iYXNlbWFwcy5qcyIsIi9Vc2Vycy9hZG1pbi9Eb2N1bWVudHMvR2l0SHViL0dlb0ZvcmNlL0dlb0FuZ3VsYXIvYXBwL3NjcmlwdHMvY29udHJvbGxlcnMvYnJlYWRjcnVtYnMuanMiLCIvVXNlcnMvYWRtaW4vRG9jdW1lbnRzL0dpdEh1Yi9HZW9Gb3JjZS9HZW9Bbmd1bGFyL2FwcC9zY3JpcHRzL2NvbnRyb2xsZXJzL2RldGFpbHMuanMiLCIvVXNlcnMvYWRtaW4vRG9jdW1lbnRzL0dpdEh1Yi9HZW9Gb3JjZS9HZW9Bbmd1bGFyL2FwcC9zY3JpcHRzL2NvbnRyb2xsZXJzL2V4cG9ydC5qcyIsIi9Vc2Vycy9hZG1pbi9Eb2N1bWVudHMvR2l0SHViL0dlb0ZvcmNlL0dlb0FuZ3VsYXIvYXBwL3NjcmlwdHMvY29udHJvbGxlcnMvZmlsdGVycy5qcyIsIi9Vc2Vycy9hZG1pbi9Eb2N1bWVudHMvR2l0SHViL0dlb0ZvcmNlL0dlb0FuZ3VsYXIvYXBwL3NjcmlwdHMvY29udHJvbGxlcnMvaW5mby5qcyIsIi9Vc2Vycy9hZG1pbi9Eb2N1bWVudHMvR2l0SHViL0dlb0ZvcmNlL0dlb0FuZ3VsYXIvYXBwL3NjcmlwdHMvY29udHJvbGxlcnMvbGF5ZXJzLmpzIiwiL1VzZXJzL2FkbWluL0RvY3VtZW50cy9HaXRIdWIvR2VvRm9yY2UvR2VvQW5ndWxhci9hcHAvc2NyaXB0cy9jb250cm9sbGVycy9sZWdlbmQuanMiLCIvVXNlcnMvYWRtaW4vRG9jdW1lbnRzL0dpdEh1Yi9HZW9Gb3JjZS9HZW9Bbmd1bGFyL2FwcC9zY3JpcHRzL2NvbnRyb2xsZXJzL21haW4uanMiLCIvVXNlcnMvYWRtaW4vRG9jdW1lbnRzL0dpdEh1Yi9HZW9Gb3JjZS9HZW9Bbmd1bGFyL2FwcC9zY3JpcHRzL2NvbnRyb2xsZXJzL21hcC5qcyIsIi9Vc2Vycy9hZG1pbi9Eb2N1bWVudHMvR2l0SHViL0dlb0ZvcmNlL0dlb0FuZ3VsYXIvYXBwL3NjcmlwdHMvY29udHJvbGxlcnMvbmF2YmFyLmpzIiwiL1VzZXJzL2FkbWluL0RvY3VtZW50cy9HaXRIdWIvR2VvRm9yY2UvR2VvQW5ndWxhci9hcHAvc2NyaXB0cy9jb250cm9sbGVycy9zZWFyY2guanMiLCIvVXNlcnMvYWRtaW4vRG9jdW1lbnRzL0dpdEh1Yi9HZW9Gb3JjZS9HZW9Bbmd1bGFyL2FwcC9zY3JpcHRzL2NvbnRyb2xsZXJzL3NpZGUtdmlldy5qcyIsIi9Vc2Vycy9hZG1pbi9Eb2N1bWVudHMvR2l0SHViL0dlb0ZvcmNlL0dlb0FuZ3VsYXIvYXBwL3NjcmlwdHMvY29udHJvbGxlcnMvc3Rvcmllcy5qcyIsIi9Vc2Vycy9hZG1pbi9Eb2N1bWVudHMvR2l0SHViL0dlb0ZvcmNlL0dlb0FuZ3VsYXIvYXBwL3NjcmlwdHMvY29udHJvbGxlcnMvdGhlbWUuanMiLCIvVXNlcnMvYWRtaW4vRG9jdW1lbnRzL0dpdEh1Yi9HZW9Gb3JjZS9HZW9Bbmd1bGFyL2FwcC9zY3JpcHRzL2NvbnRyb2xsZXJzL3VwbG9hZC5qcyIsIi9Vc2Vycy9hZG1pbi9Eb2N1bWVudHMvR2l0SHViL0dlb0ZvcmNlL0dlb0FuZ3VsYXIvYXBwL3NjcmlwdHMvY29udHJvbGxlcnMvem9vbS1leHRlbnQuanMiLCIvVXNlcnMvYWRtaW4vRG9jdW1lbnRzL0dpdEh1Yi9HZW9Gb3JjZS9HZW9Bbmd1bGFyL2FwcC9zY3JpcHRzL3NlcnZpY2VzL0RvbnV0cy5qcyIsIi9Vc2Vycy9hZG1pbi9Eb2N1bWVudHMvR2l0SHViL0dlb0ZvcmNlL0dlb0FuZ3VsYXIvYXBwL3NjcmlwdHMvc2VydmljZXMvTGF5ZXJDb25maWcuanMiLCIvVXNlcnMvYWRtaW4vRG9jdW1lbnRzL0dpdEh1Yi9HZW9Gb3JjZS9HZW9Bbmd1bGFyL2FwcC9zY3JpcHRzL3NlcnZpY2VzL1N0b3JpZXNDb25maWcuanMiLCIvVXNlcnMvYWRtaW4vRG9jdW1lbnRzL0dpdEh1Yi9HZW9Gb3JjZS9HZW9Bbmd1bGFyL2FwcC9zY3JpcHRzL3NlcnZpY2VzL1ZlY3Rvci9CQm94R2VvSlNPTi5qcyIsIi9Vc2Vycy9hZG1pbi9Eb2N1bWVudHMvR2l0SHViL0dlb0ZvcmNlL0dlb0FuZ3VsYXIvYXBwL3NjcmlwdHMvc2VydmljZXMvVmVjdG9yL0dlb0pTT04uanMiLCIvVXNlcnMvYWRtaW4vRG9jdW1lbnRzL0dpdEh1Yi9HZW9Gb3JjZS9HZW9Bbmd1bGFyL2FwcC9zY3JpcHRzL3NlcnZpY2VzL1ZlY3Rvci9LTUwuanMiLCIvVXNlcnMvYWRtaW4vRG9jdW1lbnRzL0dpdEh1Yi9HZW9Gb3JjZS9HZW9Bbmd1bGFyL2FwcC9zY3JpcHRzL3NlcnZpY2VzL1ZlY3Rvci9QQkYuanMiLCIvVXNlcnMvYWRtaW4vRG9jdW1lbnRzL0dpdEh1Yi9HZW9Gb3JjZS9HZW9Bbmd1bGFyL2FwcC9zY3JpcHRzL3NlcnZpY2VzL1ZlY3Rvci9SZXNvdXJjZS5qcyIsIi9Vc2Vycy9hZG1pbi9Eb2N1bWVudHMvR2l0SHViL0dlb0ZvcmNlL0dlb0FuZ3VsYXIvYXBwL3NjcmlwdHMvc2VydmljZXMvVmVjdG9yL1ZlY3RvclByb3ZpZGVyLmpzIiwiL1VzZXJzL2FkbWluL0RvY3VtZW50cy9HaXRIdWIvR2VvRm9yY2UvR2VvQW5ndWxhci9hcHAvc2NyaXB0cy9zZXJ2aWNlcy9WZWN0b3IvY3N2LmpzIiwiL1VzZXJzL2FkbWluL0RvY3VtZW50cy9HaXRIdWIvR2VvRm9yY2UvR2VvQW5ndWxhci9hcHAvc2NyaXB0cy9zZXJ2aWNlcy9WZWN0b3IvdmVjdG9yLmpzIiwiL1VzZXJzL2FkbWluL0RvY3VtZW50cy9HaXRIdWIvR2VvRm9yY2UvR2VvQW5ndWxhci9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnVmZmVyL2luZGV4LmpzIiwiL1VzZXJzL2FkbWluL0RvY3VtZW50cy9HaXRIdWIvR2VvRm9yY2UvR2VvQW5ndWxhci9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnVmZmVyL25vZGVfbW9kdWxlcy9iYXNlNjQtanMvbGliL2I2NC5qcyIsIi9Vc2Vycy9hZG1pbi9Eb2N1bWVudHMvR2l0SHViL0dlb0ZvcmNlL0dlb0FuZ3VsYXIvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2J1ZmZlci9ub2RlX21vZHVsZXMvaWVlZTc1NC9pbmRleC5qcyIsIi9Vc2Vycy9hZG1pbi9Eb2N1bWVudHMvR2l0SHViL0dlb0ZvcmNlL0dlb0FuZ3VsYXIvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2J1ZmZlci9ub2RlX21vZHVsZXMvaXMtYXJyYXkvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdHhCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuSUE7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1SUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2piQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4ZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5Z0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9FQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0WUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN01BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6b0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5TUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeHJCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3WkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaDVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4UkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0SEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1aENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwibW9kdWxlLmV4cG9ydHMgPSB7XG5cblxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0ge1xuXG4gIC8qKlxuICAgKiBCYXNlbWFwcyBQYW5lbCBMaXN0XG4gICAqXG4gICAqIExpc3Qgb2YgYmFzZW1hcHMgdGhhdCBnZXQgc2hvd24gaW4gdGhlIEJhc2VtYXBzIFBhbmVsLiBFZGl0IHRoaXMgdG8gYWRkIG9yIHJlbW92ZVxuICAgKiBiYXNlbWFwcyB0aGF0IHRoZSB1c2VyIHdpbGwgc2VlIGFzIGNob2ljZXMuIEFsbCBiYXNlbWFwcywgaW5jbHVkaW5nIG9uZXMgbm90IGluIHRoaXNcbiAgICogbGlzdCwgY2FuIHN0aWxsIGJlIG1hbnVhbGx5IHJlZmVyZW5jZWQgaW4gdGhlIHVybC4gVGhpcyBpcyBqdXN0IGZvciB0aGUgVXNlciBJbnRlcmZhY2UuXG4gICAqL1xuICBiYXNlbWFwczogW1xuICAgICdvc21ob3QnLFxuICAgICdvc20nLFxuICAgICdzYXRlbGxpdGUnLFxuICAgICd0b25lcicsXG4gICAgJ2RhcmsnLFxuICAgICdnaXRodWInLFxuICAgICduYXRnZW8nLFxuICAgICd1c2dzdG9wbycsXG4gICAgJ2Vzcml0b3BvJyxcbiAgICAnd2F0ZXJjb2xvcidcbiAgXSxcblxuXG4gIC8qKlxuICAgKiBCYXNlbWFwc1xuICAgKlxuICAgKiBBbGwgYmFzZW1hcCBhbGlhc2VzIHRoYXQgY2FuIGJlIHJlZmVycmVkIHRvIGluIHRoZSB1cmwuIFRoZSBjb3JyZXNwb25kaW5nXG4gICAqIHBhdGggdG8gdGhlIHRodW1ibmFpbCBpbiB0aGUgQmFzZW1hcHMgUGFuZWwgc2hvdWxkIGJlOlxuICAgKiAgICBpbWFnZXMve2FsaWFzTmFtZX0uanBnXG4gICAqXG4gICAqL1xuXG4gIG9zbWhvdDoge1xuICAgIHVybDogJ2h0dHA6Ly97c30udGlsZS5vcGVuc3RyZWV0bWFwLmZyL2hvdC97en0ve3h9L3t5fS5wbmcnLFxuICAgIG5hbWU6ICdIdW1hbml0YXJpYW4gT3BlblN0cmVldE1hcCcsXG4gICAgdHlwZTogJ2Jhc2VtYXAnXG4gIH0sXG5cbiAgLy8gcmVkY3Jvc3M6IHtcbiAgLy8gICB1cmw6ICdodHRwczovL3tzfS50aWxlcy5tYXBib3guY29tL3YzL2FtZXJpY2FucmVkY3Jvc3MuaGNqaTIyZGUve3p9L3t4fS97eX0ucG5nJyxcbiAgLy8gICBuYW1lOiAnUmVkIENyb3NzJyxcbiAgLy8gICB0eXBlOiAnYmFzZW1hcCdcbiAgLy8gfSxcblxuICBzYXRlbGxpdGU6IHtcbiAgICB1cmw6ICdodHRwczovL3tzfS50aWxlcy5tYXBib3guY29tL3YzL2V4YW1wbGVzLm1hcC1xZnlyeDVyOC97en0ve3h9L3t5fS5wbmcnLFxuICAgIG5hbWU6ICdNYXBib3ggU2F0ZWxsaXRlJyxcbiAgICB0eXBlOiAnYmFzZW1hcCdcbiAgfSxcblxuICBnaXRodWI6IHtcbiAgICB1cmw6ICdodHRwOi8ve3N9LnRpbGVzLm1hcGJveC5jb20vdjMvZ2l0aHViLm1hcC14Z3Eyc3Zyei97en0ve3h9L3t5fS5wbmcnLFxuICAgIG5hbWU6ICdHaXRodWInLFxuICAgIHR5cGU6ICdiYXNlbWFwJ1xuICB9LFxuXG4gIGRhcms6IHtcbiAgICB1cmw6ICdodHRwOi8ve3N9LnRpbGVzLm1hcGJveC5jb20vdjMvc3BhdGlhbGRldi5tYXAtYzl6MmN5ZWYve3p9L3t4fS97eX0ucG5nJyxcbiAgICBuYW1lOiAnRGFyayBUaGVtZScsXG4gICAgdHlwZTogJ2Jhc2VtYXAnXG4gIH0sXG5cbiAgb3NtOiB7XG4gICAgdXJsOiAnaHR0cDovL3tzfS50aWxlLm9zbS5vcmcve3p9L3t4fS97eX0ucG5nJyxcbiAgICBuYW1lOiAnU3RhbmRhcmQgT3BlblN0cmVldE1hcCcsXG4gICAgdHlwZTogJ2Jhc2VtYXAnXG4gIH0sXG5cbiAgbmF0Z2VvOiB7XG4gICAgdXJsOiAnaHR0cDovL3NlcnZpY2VzLmFyY2dpc29ubGluZS5jb20vQXJjR0lTL3Jlc3Qvc2VydmljZXMvTmF0R2VvX1dvcmxkX01hcC9NYXBTZXJ2ZXIvdGlsZS97en0ve3l9L3t4fScsXG4gICAgbmFtZTogJ05hdGlvbmFsIEdlb2dyYXBoaWMnLFxuICAgIHR5cGU6ICdiYXNlbWFwJ1xuICB9LFxuXG4gIHVzZ3N0b3BvOiB7XG4gICAgdXJsOiAnaHR0cDovL3NlcnZpY2VzLmFyY2dpc29ubGluZS5jb20vQXJjR0lTL3Jlc3Qvc2VydmljZXMvVVNBX1RvcG9fTWFwcy9NYXBTZXJ2ZXIvdGlsZS97en0ve3l9L3t4fScsXG4gICAgbmFtZTogJ1VTR1MgVG9wb2dyYXBoaWMnLFxuICAgIHR5cGU6ICdiYXNlbWFwJ1xuICB9LFxuXG4gIG9ydGhvOiB7XG4gICAgdXJsOiAnaHR0cDovL3NlcnZpY2VzLmFyY2dpc29ubGluZS5jb20vQXJjR0lTL3Jlc3Qvc2VydmljZXMvV29ybGRfSW1hZ2VyeS9NYXBTZXJ2ZXIvdGlsZS97en0ve3l9L3t4fScsXG4gICAgbmFtZTogJ09ydGhvZ3JhcGhpYycsXG4gICAgdHlwZTogJ2Jhc2VtYXAnXG4gIH0sXG5cbiAgZXNyaXRvcG86IHtcbiAgICB1cmw6ICdodHRwOi8vc2VydmljZXMuYXJjZ2lzb25saW5lLmNvbS9BcmNHSVMvcmVzdC9zZXJ2aWNlcy9Xb3JsZF9Ub3BvX01hcC9NYXBTZXJ2ZXIvdGlsZS97en0ve3l9L3t4fScsXG4gICAgbmFtZTogJ0VzcmkgVG9wb2dyYXBoaWMnLFxuICAgIHR5cGU6ICdiYXNlbWFwJ1xuICB9LFxuXG4gIHRvbmVyOiB7XG4gICAgdXJsOiAnaHR0cDovL3tzfS50aWxlLnN0YW1lbi5jb20vdG9uZXIve3p9L3t4fS97eX0ucG5nJyxcbiAgICBuYW1lOiAnU3RhbWVuIFRvbmVyJyxcbiAgICB0eXBlOiAnYmFzZW1hcCdcbiAgfSxcblxuICB3YXRlcmNvbG9yOiB7XG4gICAgdXJsOiAnaHR0cDovL3tzfS50aWxlLnN0YW1lbi5jb20vd2F0ZXJjb2xvci97en0ve3h9L3t5fS5wbmcnLFxuICAgIG5hbWU6ICdTdGFtZW4gV2F0ZXJjb2xvcicsXG4gICAgdHlwZTogJ2Jhc2VtYXAnXG4gIH1cblxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0ge1xuICB1c2dzZWFydGhxdWFrZToge1xuICAgIHR5cGU6ICdnZW9qc29uJyxcbiAgICB0aGVtZTogJ2Rpc2FzdGVyJyxcbiAgICB1cmw6ICdodHRwOi8vZWFydGhxdWFrZS51c2dzLmdvdi9lYXJ0aHF1YWtlcy9mZWVkL3YxLjAvc3VtbWFyeS9zaWduaWZpY2FudF93ZWVrLmdlb2pzb24nLFxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICd0aXRsZSc6ICdVU0dTIFJlYWx0aW1lIEVhcnRocXVha2VzIEZlZWQgKFdlZWspJ1xuXG4gICAgfVxuICB9LFxuXG4gIHByZWNpcGl0YXRpb246IHtcbiAgICBuYW1lOiAnUHJlY2lwaXRhdGlvbicsXG4gICAgdHlwZTogJ3h5eicsXG4gICAgdGhlbWU6ICdkaXNhc3RlcicsXG4gICAgdXJsOiAnaHR0cDovL3tzfS50aWxlLm9wZW53ZWF0aGVybWFwLm9yZy9tYXAvcHJlY2lwaXRhdGlvbi97en0ve3h9L3t5fS5wbmcnLFxuICAgIG9wYWNpdHk6IDAuNVxuICB9LFxuXG4gIHJhaW46IHtcbiAgICBuYW1lOiAnUmFpbicsXG4gICAgdHlwZTogJ3h5eicsXG4gICAgdGhlbWU6ICdkaXNhc3RlcicsXG4gICAgdXJsOiAnaHR0cDovL3tzfS50aWxlLm9wZW53ZWF0aGVybWFwLm9yZy9tYXAvcmFpbi97en0ve3h9L3t5fS5wbmcnXG4gIH1cblxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0ge1xuXG4gIHNub3c6IHtcbiAgICBuYW1lOiAnU25vdycsXG4gICAgdHlwZTogJ3h5eicsXG4gICAgdGhlbWU6ICdvdGhlcicsXG4gICAgdXJsOiAnaHR0cDovL3tzfS50aWxlLm9wZW53ZWF0aGVybWFwLm9yZy9tYXAvc25vdy97en0ve3h9L3t5fS5wbmcnXG4gIH0sXG5cbiAgcHJlc3N1cmVjb250b3VyOiB7XG4gICAgbmFtZTogJ1ByZXNzdXJlIENvbnRvdXInLFxuICAgIHR5cGU6ICd4eXonLFxuICAgIHRoZW1lOiAnb3RoZXInLFxuICAgIHVybDogJ2h0dHA6Ly97c30udGlsZS5vcGVud2VhdGhlcm1hcC5vcmcvbWFwL3ByZXNzdXJlX2NudHIve3p9L3t4fS97eX0ucG5nJyxcbiAgICBvcGFjaXR5OiAwLjlcbiAgfSxcblxuICBwcmVzc3VyZToge1xuICAgIG5hbWU6ICdQcmVzc3VyZScsXG4gICAgdHlwZTogJ3h5eicsXG4gICAgdGhlbWU6ICdvdGhlcicsXG4gICAgdXJsOiAnaHR0cDovL3tzfS50aWxlLm9wZW53ZWF0aGVybWFwLm9yZy9tYXAvcHJlc3N1cmUve3p9L3t4fS97eX0ucG5nJ1xuICB9LFxuXG4gIHRlbXBlcmF0dXJlOiB7XG4gICAgbmFtZTogJ1RlbXBlcmF0dXJlJyxcbiAgICB0eXBlOiAneHl6JyxcbiAgICB0aGVtZTogJ290aGVyJyxcbiAgICB1cmw6ICdodHRwOi8ve3N9LnRpbGUub3BlbndlYXRoZXJtYXAub3JnL21hcC90ZW1wL3t6fS97eH0ve3l9LnBuZydcbiAgfSxcblxuICB3aW5kOiB7XG4gICAgbmFtZTogJ1dpbmQnLFxuICAgIHR5cGU6ICd4eXonLFxuICAgIHRoZW1lOiAnb3RoZXInLFxuICAgIHVybDogJ2h0dHA6Ly97c30udGlsZS5vcGVud2VhdGhlcm1hcC5vcmcvbWFwL3dpbmQve3p9L3t4fS97eX0ucG5nJ1xuICB9LFxuXG4gIGNsb3Vkczoge1xuICAgIG5hbWU6ICdDbG91ZCBDb3ZlcicsXG4gICAgdHlwZTogJ3h5eicsXG4gICAgdGhlbWU6ICdvdGhlcicsXG4gICAgdXJsOiAnaHR0cDovL3tzfS50aWxlLm9wZW53ZWF0aGVybWFwLm9yZy9tYXAvY2xvdWRzX2Nscy97en0ve3h9L3t5fS5wbmcnLFxuICAgIG9wYWNpdHk6IDAuNSAvLyBvcHRpb25hbC4gb3BhY2l0eSBpcyAwLjUgaWYgbm90IHNwZWNpZmllZFxuICB9LFxuXG4gIHByZWNpcGl0YXRpb25jbGFzc2ljOiB7XG4gICAgbmFtZTogJ1ByZWNpcGl0YXRpb24gKENsYXNzaWMpJyxcbiAgICB0eXBlOiAneHl6JyxcbiAgICB0aGVtZTogJ290aGVyJyxcbiAgICB1cmw6ICdodHRwOi8ve3N9LnRpbGUub3BlbndlYXRoZXJtYXAub3JnL21hcC9wcmVjaXBpdGF0aW9uX2Nscy97en0ve3h9L3t5fS5wbmcnLFxuICAgIG9wYWNpdHk6IDAuNFxuICB9LFxuXG4gIHJhaW5jbGFzc2ljOiB7XG4gICAgbmFtZTogJ1JhaW4gKENsYXNzaWMpJyxcbiAgICB0eXBlOiAneHl6JyxcbiAgICB0aGVtZTogJ290aGVyJyxcbiAgICB1cmw6ICdodHRwOi8ve3N9LnRpbGUub3BlbndlYXRoZXJtYXAub3JnL21hcC9yYWluX2Nscy97en0ve3h9L3t5fS5wbmcnXG4gIH0sXG5cbiAgbGFjY29tbXVuaXRpZXM6IHtcbiAgICBuYW1lOiAnTEFDIENvbW11bml0aWVzJyxcbiAgICB0eXBlOiAnZ2VvanNvbicsXG4gICAgdGhlbWU6ICdvdGhlcicsXG4gICAgdXJsOiAnaHR0cHM6Ly9naXN0LmdpdGh1YnVzZXJjb250ZW50LmNvbS9hbm9ueW1vdXMvZDU4ZTUxZDYxMmFkZDY0ODMyNTcvcmF3L0xBQ19Db21tdW5pdGllc19zdHlsZWQuZ2VvanNvbidcbiAgfSxcblxuICByZmxpbnN0cnVjdG9yczoge1xuICAgIG5hbWU6ICdSRkwgSW5zdHJ1Y3RvcnMnLFxuICAgIHR5cGU6ICdnZW9qc29uJyxcbiAgICB0aGVtZTogJ290aGVyJyxcbiAgICB1cmw6ICdodHRwczovL2dpc3QuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2RhbmJqb3NlcGgvNzExZjkyYmZhZTFiMTFlZWUxZTkvcmF3L3JmbC1pbnN0cnVjdG9ycy5nZW9qc29uJ1xuICB9LFxuXG4gIG1pc3NpbmdtYXBzX21hcGF0aG9uczoge1xuICAgIG5hbWU6ICdNaXNzaW5nIE1hcHMgTWFwYXRob25zJyxcbiAgICB0eXBlOiAnZ2VvanNvbicsXG4gICAgdGhlbWU6ICdvdGhlcicsXG4gICAgdXJsOiAnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL01pc3NpbmdNYXBzL21pc3NpbmdtYXBzLmdpdGh1Yi5pby9tYXN0ZXIvZGF0YS9ldmVudHMuanNvbidcbiAgfSxcbiAgLy9JbmZyb20gUmlzayBMYXllcnNcbiAgaW5mb3JtX3dvcmxkX2luZGV4OiB7XG4gICAgbmFtZTogJ0luZm9ybSBXb3JsZCBSaXNrIEluZGV4JyxcbiAgICB0eXBlOiAnZ2VvanNvbicsXG4gICAgdGhlbWU6ICdvdGhlcicsXG4gICAgdXJsOiAnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL0FtZXJpY2FuUmVkQ3Jvc3Mvcmlza2xheWVycy9tYXN0ZXIvaW5mb3JtL0lORk9STV93b3JsZF9pbmRleC5nZW9qc29uJ1xuICB9LFxuICBpbmZvcm1fd29ybGRfaW5kZXhfbmF0dXJhbF9oYXphcmRzOiB7XG4gICAgbmFtZTogJ0luZm9ybSBOYXR1cmFsIEhhemFyZHMnLFxuICAgIHR5cGU6ICdnZW9qc29uJyxcbiAgICB0aGVtZTogJ290aGVyJyxcbiAgICB1cmw6ICdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vQW1lcmljYW5SZWRDcm9zcy9yaXNrbGF5ZXJzL21hc3Rlci9pbmZvcm0vSU5GT1JNX3dvcmxkX2luZGV4X25hdHVyYWxfaGF6YXJkLmdlb2pzb24nXG4gIH0sXG4gIGluZm9ybV93b3JsZF9pbmRleF90b3BsaW5lOiB7XG4gICAgbmFtZTogJ0luZm9ybSBSaXNrIFRvcCBMaW5lJyxcbiAgICB0eXBlOiAnZ2VvanNvbicsXG4gICAgdGhlbWU6ICdvdGhlcicsXG4gICAgdXJsOiAnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL0FtZXJpY2FuUmVkQ3Jvc3Mvcmlza2xheWVycy9tYXN0ZXIvaW5mb3JtL0lORk9STV93b3JsZF9pbmRleF90b3BsaW5lX21ldHJpY3MuZ2VvanNvbidcbiAgfSxcbiAgd3JpX3Jpc2syMDE0OiB7XG4gICAgbmFtZTogJ1dvcmxkIFJpc2sgSW5kZXggMjAxNCcsXG4gICAgdHlwZTogJ2dlb2pzb24nLFxuICAgIHRoZW1lOiAnb3RoZXInLFxuICAgIHVybDogJ2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9BbWVyaWNhblJlZENyb3NzL3Jpc2tsYXllcnMvbWFzdGVyL1dSSV9yaXNrMjAxNC5nZW9qc29uJ1xuICB9LFxuICBhY3RpdmVfaHVycmljYW5lOiB7XG4gICAgbmFtZTogJ0FjdGl2ZSBIdXJyaWNhbmVzJyxcbiAgICB0eXBlOiAna21sJyxcbiAgICB0aGVtZTogJ290aGVyJyxcbiAgICB1cmw6ICdodHRwOi8vd3d3Lm5oYy5ub2FhLmdvdi9naXMva21sL25oY19hY3RpdmUua21sJ1xuICB9LFxuICBhcmNfb2ZmaWNlczoge1xuICAgIG5hbWU6ICdJU0QgT2ZmaWNlcycsXG4gICAgdHlwZTogJ2dlb2pzb24nLFxuICAgIHRoZW1lOiAnb3RoZXInLFxuICAgIHVybDogJ2h0dHBzOi8vZ2lzdC5naXRodWJ1c2VyY29udGVudC5jb20vZGFsZWt1bmNlL2VhYTQwZjMxNGFkNWE2ZDI4YTZlL3Jhdy9hcmNfb2ZmaWNlcy5nZW9qc29uJ1xuICB9LFxuICByZWRjcm9zc19vZmZpY2VzOiB7XG4gICAgbmFtZTogJ1JlZCBDcm9zcyBPZmZpY2VzIFdvcmxkIFdpZGUnLFxuICAgIHR5cGU6ICdnZW9qc29uJyxcbiAgICB0aGVtZTogJ290aGVyJyxcbiAgICB1cmw6ICdodHRwczovL2dpc3QuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2RhbGVrdW5jZS81ZmIyYTRiMzdjZDg2ZTdjYjgyZS9yYXcvOWM0MTU3OWJmZWRmNWEwYTUwYzlhN2FmZWEwNmQxNmRjM2NhOWViMi9yY3JjX2xvY2F0aW9ucy5nZW9qc29uJ1xuICB9XG5cbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcblxuICAvL05vdGUgLSBhcyBvZiBBcHJpbCAxMiwgMjAxNSwgdGhpcyBpcyByZXR1cm5pbmcgZW1wdHkgaW1hZ2VzXG4gIC8vbGFuZGNvdmVyOiB7XG4gIC8vICBuYW1lOiAnTU9ESVMgTGFuZGNvdmVyIDIwMTEnLFxuICAvLyAgdHlwZTogJ3dtcycsXG4gIC8vICB0aGVtZTogJ3Byb2plY3QnLFxuICAvLyAgdXJsOiAnaHR0cDovL2Fncy5zZXJ2aXJsYWJzLm5ldC9hcmNnaXMvcmVzdC9zZXJ2aWNlcy9HbG9iYWwvTU9ESVNfTGFuZGNvdmVyX1R5cGUxXzIwMTEvTWFwU2VydmVyL1dNU1NlcnZlcicsXG4gIC8vICBsYXllcnM6ICcwJyxcbiAgLy8gIHByb3BlcnRpZXM6IHtcbiAgLy8gICAgbGVnZW5kOiBcIlwiXG4gIC8vICB9XG4gIC8vfVxuXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSB7XG5cbn07XG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgUnlhbiBXaGl0bGV5IDxyd2hpdGxleUBzcGF0aWFsZGV2LmNvbT5cbiAqICAgICAgIG9uIDEyLzE1LzE0LlxuICovXG5cbi8vRGVmYXVsdCBvcGFjaXR5IG9mIEdBRE0gcG9seWdvbnNcbnZhciBvcGFjaXR5ID0gXCIwLjVcIjtcblxudmFyIGdhZG0wID0ge1xuICB0eXBlOiAncGJmJyxcbiAgbmFtZTogJ0dBRE0wJyxcbiAgLy91cmw6IFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL3NlcnZpY2VzL3Bvc3RnaXMvZ2FkbTAvZ2VvbV9zaW1wbGlmeV9tZWQvdmVjdG9yLXRpbGVzL3t6fS97eH0ve3l9LnBiZj9maWVsZHM9Z3VpZDo6Y2hhcmFjdGVyIHZhcnlpbmcsbmFtZV8wLHllYXImbGFiZWxwb2ludHM9dHJ1ZVwiLFxuICAvL3VybDogXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvc2VydmljZXMvcG9zdGdpcy9nYWRtMC9nZW9tX3NpbXBsaWZ5X21lZC92ZWN0b3ItdGlsZXMve3p9L3t4fS97eX0ucGJmP2ZpZWxkcz1ndWlkOjpjaGFyYWN0ZXIgdmFyeWluZyxuYW1lXzAseWVhclwiLFxuXG4gIC8vdXJsOiBcIi4uL3NlcnZpY2VzL3ZlY3Rvci10aWxlcy9nYWRtMF9sYWJlbHNfMjAxNC97en0ve3h9L3t5fS5wYmZcIixcbiAgdXJsOiBcImh0dHBzOi8vczMtdXMtd2VzdC0yLmFtYXpvbmF3cy5jb20vdmVjdG9yLXRpbGVzL2dhZG0wL3t6fS97eH0ve3l9LnBiZlwiLFxuXG4gIC8vdXJsOiBcImh0dHA6Ly97c30uc3BhdGlhbGRldnRpbGVzLmNvbS9nYWRtMC97en0ve3h9L3t5fS5wYmZcIixcbiAgZGV0YWlsc1VybDogJ3NlcnZpY2VzL2N1c3RvbS9jdXN0b21fb3BlcmF0aW9uP25hbWU9Z2V0OnRoZW1lYnlndWlkJmZvcm1hdD1qc29uJmd1aWRzPTpndWlkcyZnYWRtX2xldmVsPTpsZXZlbCZmaWx0ZXJzPTpmaWx0ZXJzJyxcbiAgZGVidWc6IGZhbHNlLFxuICBjbGlja2FibGVMYXllcnM6IFtcIkdBRE1fMjAxNFwiXSxcblxuICBnZXRJREZvckxheWVyRmVhdHVyZTogZnVuY3Rpb24gKGZlYXR1cmUpIHtcbiAgICByZXR1cm4gZmVhdHVyZS5wcm9wZXJ0aWVzLmd1aWQ7XG4gICAgLy9yZXR1cm4gZmVhdHVyZS5wcm9wZXJ0aWVzLm5hbWVfMDtcbiAgfSxcbiAgbXV0ZXhUb2dnbGU6IHRydWUsXG5cbiAgLy9UaGUgZmlsdGVyIGZ1bmN0aW9uIGRvZXMgMiB0aGluZ3M6IDEpIE1lcmdlIGluIGV4dGVybmFsIHByb3BlcnRpZXMgdGhhdCBjYW4gYmUgdXNlZCBmb3IgY2hvcm9wbGV0aGluZy4gIDIpIEZpbHRlciBvdXQgZmVhdHVyZXMgdGhhdCBkb24ndCBoYXZlIEVDT1MgcHJvcGVydGllc1xuICBmaWx0ZXI6IGZ1bmN0aW9uKHZ0ZiwgJHJvb3RTY29wZSl7XG4gICAgdmFyIGRhdGEgPSAkcm9vdFNjb3BlLnZ0RGF0YTtcblxuICAgIC8vU2hvdyBvbmx5IGNvdW50cmllcyB3aXRoIGFjdGl2ZSB0aGVtZSBwcm9wZXJ0aWVzXG4gICAgaWYoZGF0YSAmJiBkYXRhW3Z0Zi5wcm9wZXJ0aWVzLmd1aWRdKXtcbiAgICAgIHZhciB0aGVtZSA9ICRyb290U2NvcGUuJHN0YXRlUGFyYW1zLnRoZW1lO1xuICAgICAgdnRmLnByb3BlcnRpZXMudGhlbWUgPSB0aGVtZTtcbiAgICAgIHZ0Zi5wcm9wZXJ0aWVzLmVjb3NfcHJvcGVydGllcyA9IHt9O1xuICAgICAgdnRmLnByb3BlcnRpZXMuZWNvc19wcm9wZXJ0aWVzW3RoZW1lXSA9IGRhdGFbdnRmLnByb3BlcnRpZXMuZ3VpZF07XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7IC8vZHJhdyBmZWF0dXJlXG4gIH0sXG5cbiAgLyoqXG4gICAqIFdoZW4gd2Ugd2FudCB0byBsaW5rIGV2ZW50cyBiZXR3ZWVuIGxheWVycywgbGlrZSBjbGlja2luZyBvbiBhIGxhYmVsIGFuZCBhXG4gICAqIGNvcnJlc3BvbmRpbmcgcG9seWdvbiBmcmVhdHVyZSwgdGhpcyB3aWxsIHJldHVybiB0aGUgY29ycmVzcG9uZGluZyBtYXBwaW5nXG4gICAqIGJldHdlZW4gbGF5ZXJzLiBUaGlzIHByb3ZpZGVzIGtub3dsZWRnZSBvZiB3aGljaCBvdGhlciBmZWF0dXJlIGEgZ2l2ZW4gZmVhdHVyZVxuICAgKiBpcyBsaW5rZWQgdG8uXG4gICAqXG4gICAqIEBwYXJhbSBsYXllck5hbWUgIHRoZSBsYXllciB3ZSB3YW50IHRvIGtub3cgdGhlIGxpbmtlZCBsYXllciBmcm9tXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IHJldHVybnMgY29ycmVzcG9uZGluZyBsaW5rZWQgbGF5ZXJcbiAgICovXG4gIGxheWVyTGluazogZnVuY3Rpb24gKGxheWVyTmFtZSkge1xuICAgIGlmIChsYXllck5hbWUuaW5kZXhPZignX2xhYmVsJykgPiAtMSkge1xuICAgICAgcmV0dXJuIGxheWVyTmFtZS5yZXBsYWNlKCdfbGFiZWwnLCAnJyk7XG4gICAgfVxuICAgIHJldHVybiBsYXllck5hbWUgKyAnX2xhYmVsJztcbiAgfSxcblxuICBzdHlsZTogZ2V0VGhlbWVTdHlsZSxcblxuICBvbkNsaWNrOiBmdW5jdGlvbihldnQsICRodHRwLCAkcm9vdFNjb3BlLCBQQkZPYmplY3QpIHtcblxuICAgIGlmKGV2dCAmJiBldnQuZmVhdHVyZSAmJiBldnQuZmVhdHVyZS5pZCl7XG4gICAgICAvL0RvIHRoZSBvbmNsaWNrIHRoaW5nXG4gICAgICBQQkZPYmplY3QuZmV0Y2hGZWF0dXJlRGV0YWlscyhldnQuZmVhdHVyZS5pZCwgMCwgZXZ0LmZlYXR1cmUucHJvcGVydGllcy5uYW1lXzApO1xuICAgIH1cbiAgfSxcbiAgb25TZWxlY3Q6IGZ1bmN0aW9uKHZ0ZiwgUEJGT2JqZWN0KXtcbiAgICAvL1doZW4gYSBzZWxlY3Rpb24gaGFzIGNoYW5nZWQgKGxpa2V5IHdoZW4gYSBsYWJlbCB3YXMgY2xpY2tlZCBhbmQgdGhlIGNvcnJlc3BvbmRpbmcgZmVhdHVyZSBzZWxlY3RlZClcbiAgICBpZih2dGYgJiYgdnRmLmlkKXtcbiAgICAgIC8vRG8gdGhlIG9uY2xpY2sgdGhpbmdcbiAgICAgIFBCRk9iamVjdC5mZXRjaEZlYXR1cmVEZXRhaWxzKHZ0Zi5pZCwgMCwgdnRmLnByb3BlcnRpZXMubmFtZV8wKTtcbiAgICB9XG4gIH0sXG4gIGxlZ2VuZDogZnVuY3Rpb24oKXtcblxuICB9XG59XG5cbnZhciBnYWRtMSA9IHtcbiAgdHlwZTogJ3BiZicsXG4gIG5hbWU6ICdHQURNMScsXG4gIC8vdXJsOiBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9zZXJ2aWNlcy9wb3N0Z2lzL2dhZG0wL2dlb21fc2ltcGxpZnlfbWVkL3ZlY3Rvci10aWxlcy97en0ve3h9L3t5fS5wYmY/ZmllbGRzPWd1aWQ6OmNoYXJhY3RlciB2YXJ5aW5nLG5hbWVfMCx5ZWFyJmxhYmVscG9pbnRzPXRydWVcIixcbiAgLy91cmw6IFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL3NlcnZpY2VzL3Bvc3RnaXMvZ2FkbTAvZ2VvbV9zaW1wbGlmeV9tZWQvdmVjdG9yLXRpbGVzL3t6fS97eH0ve3l9LnBiZj9maWVsZHM9Z3VpZDo6Y2hhcmFjdGVyIHZhcnlpbmcsbmFtZV8wLHllYXJcIixcblxuICB1cmw6IFwiaHR0cHM6Ly9zMy11cy13ZXN0LTIuYW1hem9uYXdzLmNvbS92ZWN0b3ItdGlsZXMvZ2FkbTEve3p9L3t4fS97eX0ucGJmXCIsXG5cbiAgZGV0YWlsc1VybDogJ3NlcnZpY2VzL2N1c3RvbS9jdXN0b21fb3BlcmF0aW9uP25hbWU9Z2V0OnRoZW1lYnlndWlkJmZvcm1hdD1qc29uJmd1aWRzPTpndWlkcyZnYWRtX2xldmVsPTEmZmlsdGVycz06ZmlsdGVycycsXG4gIGRlYnVnOiBmYWxzZSxcbiAgY2xpY2thYmxlTGF5ZXJzOiBbXCJHQURNXzIwMTRcIl0sXG5cbiAgZ2V0SURGb3JMYXllckZlYXR1cmU6IGZ1bmN0aW9uIChmZWF0dXJlKSB7XG4gICAgcmV0dXJuIGZlYXR1cmUucHJvcGVydGllcy5ndWlkO1xuICB9LFxuICBtdXRleFRvZ2dsZTogdHJ1ZSxcblxuICAvKipcbiAgICogVGhlIGZpbHRlciBmdW5jdGlvbiBnZXRzIGNhbGxlZCB3aGVuIGl0ZXJhdGluZyB0aG91Z2ggZWFjaCB2ZWN0b3IgdGlsZSBmZWF0dXJlICh2dGYpLiBZb3UgaGF2ZSBhY2Nlc3NcbiAgICogdG8gZXZlcnkgcHJvcGVydHkgYXNzb2NpYXRlZCB3aXRoIGEgZ2l2ZW4gZmVhdHVyZSAodGhlIGZlYXR1cmUsIGFuZCB0aGUgbGF5ZXIpLiBZb3UgY2FuIGFsc28gZmlsdGVyXG4gICAqIGJhc2VkIG9mIHRoZSBjb250ZXh0IChlYWNoIHRpbGUgdGhhdCB0aGUgZmVhdHVyZSBpcyBkcmF3biBvbnRvKS5cbiAgICpcbiAgICogUmV0dXJuaW5nIGZhbHNlIHNraXBzIG92ZXIgdGhlIGZlYXR1cmUgYW5kIGl0IGlzIG5vdCBkcmF3bi5cbiAgICpcbiAgICogQHBhcmFtIGZlYXR1cmVcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBmaWx0ZXI6IGZ1bmN0aW9uKHZ0ZiwgJHJvb3RTY29wZSl7XG4gICAgdmFyIGRhdGEgPSAkcm9vdFNjb3BlLnZ0RGF0YTtcblxuICAgIGlmKGRhdGEgJiYgZGF0YVt2dGYucHJvcGVydGllcy5ndWlkXSl7XG4gICAgICB2YXIgdGhlbWUgPSAkcm9vdFNjb3BlLiRzdGF0ZVBhcmFtcy50aGVtZTtcbiAgICAgIHZ0Zi5wcm9wZXJ0aWVzLnRoZW1lID0gdGhlbWU7XG4gICAgICB2dGYucHJvcGVydGllcy5lY29zX3Byb3BlcnRpZXMgPSB7fTtcbiAgICAgIHZ0Zi5wcm9wZXJ0aWVzLmVjb3NfcHJvcGVydGllc1t0aGVtZV0gPSBkYXRhW3Z0Zi5wcm9wZXJ0aWVzLmd1aWRdO1xuICAgICAgLy9yZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSxcblxuICAvKipcbiAgICogV2hlbiB3ZSB3YW50IHRvIGxpbmsgZXZlbnRzIGJldHdlZW4gbGF5ZXJzLCBsaWtlIGNsaWNraW5nIG9uIGEgbGFiZWwgYW5kIGFcbiAgICogY29ycmVzcG9uZGluZyBwb2x5Z29uIGZyZWF0dXJlLCB0aGlzIHdpbGwgcmV0dXJuIHRoZSBjb3JyZXNwb25kaW5nIG1hcHBpbmdcbiAgICogYmV0d2VlbiBsYXllcnMuIFRoaXMgcHJvdmlkZXMga25vd2xlZGdlIG9mIHdoaWNoIG90aGVyIGZlYXR1cmUgYSBnaXZlbiBmZWF0dXJlXG4gICAqIGlzIGxpbmtlZCB0by5cbiAgICpcbiAgICogQHBhcmFtIGxheWVyTmFtZSAgdGhlIGxheWVyIHdlIHdhbnQgdG8ga25vdyB0aGUgbGlua2VkIGxheWVyIGZyb21cbiAgICogQHJldHVybnMge3N0cmluZ30gcmV0dXJucyBjb3JyZXNwb25kaW5nIGxpbmtlZCBsYXllclxuICAgKi9cbiAgbGF5ZXJMaW5rOiBmdW5jdGlvbiAobGF5ZXJOYW1lKSB7XG4gICAgaWYgKGxheWVyTmFtZS5pbmRleE9mKCdfbGFiZWwnKSA+IC0xKSB7XG4gICAgICByZXR1cm4gbGF5ZXJOYW1lLnJlcGxhY2UoJ19sYWJlbCcsICcnKTtcbiAgICB9XG4gICAgcmV0dXJuIGxheWVyTmFtZSArICdfbGFiZWwnO1xuICB9LFxuXG4gIHN0eWxlOiBnZXRUaGVtZVN0eWxlLFxuXG4gIG9uQ2xpY2s6IGZ1bmN0aW9uKGV2dCwgJGh0dHAsICRyb290U2NvcGUsIFBCRk9iamVjdCkge1xuXG4gICAgaWYoZXZ0ICYmIGV2dC5mZWF0dXJlICYmIGV2dC5mZWF0dXJlLmlkKXtcbiAgICAgIC8vRG8gdGhlIG9uY2xpY2sgdGhpbmdcbiAgICAgIFBCRk9iamVjdC5mZXRjaEZlYXR1cmVEZXRhaWxzKGV2dC5mZWF0dXJlLmlkLCAwLCBldnQuZmVhdHVyZS5wcm9wZXJ0aWVzLm5hbWVfMSArIFwiLCBcIiArIGV2dC5mZWF0dXJlLnByb3BlcnRpZXMubmFtZV8wKTtcbiAgICB9XG4gIH0sXG4gIG9uU2VsZWN0OiBmdW5jdGlvbih2dGYsIFBCRk9iamVjdCl7XG4gICAgLy9XaGVuIGEgc2VsZWN0aW9uIGhhcyBjaGFuZ2VkIChsaWtleSB3aGVuIGEgbGFiZWwgd2FzIGNsaWNrZWQgYW5kIHRoZSBjb3JyZXNwb25kaW5nIGZlYXR1cmUgc2VsZWN0ZWQpXG4gICAgaWYodnRmICYmIHZ0Zi5pZCl7XG4gICAgICAvL0RvIHRoZSBvbmNsaWNrIHRoaW5nXG4gICAgICBQQkZPYmplY3QuZmV0Y2hGZWF0dXJlRGV0YWlscyh2dGYuaWQsIDAsIHZ0Zi5wcm9wZXJ0aWVzLm5hbWVfMSArIFwiLCBcIiArIHZ0Zi5wcm9wZXJ0aWVzLm5hbWVfMCk7XG4gICAgfVxuICB9XG59XG5cbnZhciBnYWRtMiA9IHtcbiAgdHlwZTogJ3BiZicsXG4gIG5hbWU6ICdHQURNMicsXG4gIC8vdXJsOiBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9zZXJ2aWNlcy9wb3N0Z2lzL2dhZG0wL2dlb21fc2ltcGxpZnlfbWVkL3ZlY3Rvci10aWxlcy97en0ve3h9L3t5fS5wYmY/ZmllbGRzPWd1aWQ6OmNoYXJhY3RlciB2YXJ5aW5nLG5hbWVfMCx5ZWFyJmxhYmVscG9pbnRzPXRydWVcIixcbiAgLy91cmw6IFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL3NlcnZpY2VzL3Bvc3RnaXMvZ2FkbTAvZ2VvbV9zaW1wbGlmeV9tZWQvdmVjdG9yLXRpbGVzL3t6fS97eH0ve3l9LnBiZj9maWVsZHM9Z3VpZDo6Y2hhcmFjdGVyIHZhcnlpbmcsbmFtZV8wLHllYXJcIixcblxuICB1cmw6IFwiaHR0cHM6Ly9zMy11cy13ZXN0LTIuYW1hem9uYXdzLmNvbS92ZWN0b3ItdGlsZXMvZ2FkbTIve3p9L3t4fS97eX0ucGJmXCIsXG5cbiAgZGV0YWlsc1VybDogJ3NlcnZpY2VzL2N1c3RvbS9jdXN0b21fb3BlcmF0aW9uP25hbWU9Z2V0OnRoZW1lYnlndWlkJmZvcm1hdD1qc29uJmd1aWRzPTpndWlkcyZnYWRtX2xldmVsPTImZmlsdGVycz06ZmlsdGVycycsXG4gIGRlYnVnOiBmYWxzZSxcbiAgY2xpY2thYmxlTGF5ZXJzOiBbXCJHQURNXzIwMTRcIl0sXG5cbiAgZ2V0SURGb3JMYXllckZlYXR1cmU6IGZ1bmN0aW9uIChmZWF0dXJlKSB7XG4gICAgcmV0dXJuIGZlYXR1cmUucHJvcGVydGllcy5ndWlkO1xuICB9LFxuICBtdXRleFRvZ2dsZTogdHJ1ZSxcblxuICAvKipcbiAgICogVGhlIGZpbHRlciBmdW5jdGlvbiBnZXRzIGNhbGxlZCB3aGVuIGl0ZXJhdGluZyB0aG91Z2ggZWFjaCB2ZWN0b3IgdGlsZSBmZWF0dXJlICh2dGYpLiBZb3UgaGF2ZSBhY2Nlc3NcbiAgICogdG8gZXZlcnkgcHJvcGVydHkgYXNzb2NpYXRlZCB3aXRoIGEgZ2l2ZW4gZmVhdHVyZSAodGhlIGZlYXR1cmUsIGFuZCB0aGUgbGF5ZXIpLiBZb3UgY2FuIGFsc28gZmlsdGVyXG4gICAqIGJhc2VkIG9mIHRoZSBjb250ZXh0IChlYWNoIHRpbGUgdGhhdCB0aGUgZmVhdHVyZSBpcyBkcmF3biBvbnRvKS5cbiAgICpcbiAgICogUmV0dXJuaW5nIGZhbHNlIHNraXBzIG92ZXIgdGhlIGZlYXR1cmUgYW5kIGl0IGlzIG5vdCBkcmF3bi5cbiAgICpcbiAgICogQHBhcmFtIGZlYXR1cmVcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBmaWx0ZXI6IGZ1bmN0aW9uKHZ0ZiwgJHJvb3RTY29wZSl7XG4gICAgdmFyIGRhdGEgPSAkcm9vdFNjb3BlLnZ0RGF0YTtcblxuICAgIGlmKGRhdGEgJiYgZGF0YVt2dGYucHJvcGVydGllcy5ndWlkXSl7XG4gICAgICB2YXIgdGhlbWUgPSAkcm9vdFNjb3BlLiRzdGF0ZVBhcmFtcy50aGVtZTtcbiAgICAgIHZ0Zi5wcm9wZXJ0aWVzLnRoZW1lID0gdGhlbWU7XG4gICAgICB2dGYucHJvcGVydGllcy5lY29zX3Byb3BlcnRpZXMgPSB7fTtcbiAgICAgIHZ0Zi5wcm9wZXJ0aWVzLmVjb3NfcHJvcGVydGllc1t0aGVtZV0gPSBkYXRhW3Z0Zi5wcm9wZXJ0aWVzLmd1aWRdO1xuICAgICAgLy9yZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSxcblxuICAvKipcbiAgICogV2hlbiB3ZSB3YW50IHRvIGxpbmsgZXZlbnRzIGJldHdlZW4gbGF5ZXJzLCBsaWtlIGNsaWNraW5nIG9uIGEgbGFiZWwgYW5kIGFcbiAgICogY29ycmVzcG9uZGluZyBwb2x5Z29uIGZyZWF0dXJlLCB0aGlzIHdpbGwgcmV0dXJuIHRoZSBjb3JyZXNwb25kaW5nIG1hcHBpbmdcbiAgICogYmV0d2VlbiBsYXllcnMuIFRoaXMgcHJvdmlkZXMga25vd2xlZGdlIG9mIHdoaWNoIG90aGVyIGZlYXR1cmUgYSBnaXZlbiBmZWF0dXJlXG4gICAqIGlzIGxpbmtlZCB0by5cbiAgICpcbiAgICogQHBhcmFtIGxheWVyTmFtZSAgdGhlIGxheWVyIHdlIHdhbnQgdG8ga25vdyB0aGUgbGlua2VkIGxheWVyIGZyb21cbiAgICogQHJldHVybnMge3N0cmluZ30gcmV0dXJucyBjb3JyZXNwb25kaW5nIGxpbmtlZCBsYXllclxuICAgKi9cbiAgbGF5ZXJMaW5rOiBmdW5jdGlvbiAobGF5ZXJOYW1lKSB7XG4gICAgaWYgKGxheWVyTmFtZS5pbmRleE9mKCdfbGFiZWwnKSA+IC0xKSB7XG4gICAgICByZXR1cm4gbGF5ZXJOYW1lLnJlcGxhY2UoJ19sYWJlbCcsICcnKTtcbiAgICB9XG4gICAgcmV0dXJuIGxheWVyTmFtZSArICdfbGFiZWwnO1xuICB9LFxuXG4gIHN0eWxlOiBnZXRUaGVtZVN0eWxlLFxuXG4gIG9uQ2xpY2s6IGZ1bmN0aW9uKGV2dCwgJGh0dHAsICRyb290U2NvcGUsIFBCRk9iamVjdCkge1xuXG4gICAgaWYoZXZ0ICYmIGV2dC5mZWF0dXJlICYmIGV2dC5mZWF0dXJlLmlkKXtcbiAgICAgIC8vRG8gdGhlIG9uY2xpY2sgdGhpbmdcbiAgICAgIFBCRk9iamVjdC5mZXRjaEZlYXR1cmVEZXRhaWxzKGV2dC5mZWF0dXJlLmlkLCAwLCBldnQuZmVhdHVyZS5wcm9wZXJ0aWVzLm5hbWVfMiArIFwiLCBcIiArIGV2dC5mZWF0dXJlLnByb3BlcnRpZXMubmFtZV8xICsgXCIsIFwiICsgZXZ0LmZlYXR1cmUucHJvcGVydGllcy5uYW1lXzApO1xuICAgIH1cbiAgfSxcbiAgb25TZWxlY3Q6IGZ1bmN0aW9uKHZ0ZiwgUEJGT2JqZWN0KXtcbiAgICAvL1doZW4gYSBzZWxlY3Rpb24gaGFzIGNoYW5nZWQgKGxpa2V5IHdoZW4gYSBsYWJlbCB3YXMgY2xpY2tlZCBhbmQgdGhlIGNvcnJlc3BvbmRpbmcgZmVhdHVyZSBzZWxlY3RlZClcbiAgICBpZih2dGYgJiYgdnRmLmlkKXtcbiAgICAgIC8vRG8gdGhlIG9uY2xpY2sgdGhpbmdcbiAgICAgIFBCRk9iamVjdC5mZXRjaEZlYXR1cmVEZXRhaWxzKHZ0Zi5pZCwgMCwgdnRmLnByb3BlcnRpZXMubmFtZV8yICsgXCIsIFwiICsgdnRmLnByb3BlcnRpZXMubmFtZV8xICsgXCIsIFwiICsgdnRmLnByb3BlcnRpZXMubmFtZV8wKTtcbiAgICB9XG4gIH1cbn1cblxuXG4vKipcbiAqIFJlZCBDcm9zcyBSZWdpb25zXG4gKi9cblxudmFyIGFyY3JlZ2lvbnMgPSB7XG4gIHR5cGU6ICdwYmYnLFxuICBuYW1lOiAnYXJjcmVnaW9ucycsXG4gIC8vdXJsOiBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9zZXJ2aWNlcy9wb3N0Z2lzL2dhZG0wL2dlb21fc2ltcGxpZnlfbWVkL3ZlY3Rvci10aWxlcy97en0ve3h9L3t5fS5wYmY/ZmllbGRzPWd1aWQ6OmNoYXJhY3RlciB2YXJ5aW5nLG5hbWVfMCx5ZWFyJmxhYmVscG9pbnRzPXRydWVcIixcbiAgLy91cmw6IFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL3NlcnZpY2VzL3Bvc3RnaXMvZ2FkbTAvZ2VvbV9zaW1wbGlmeV9tZWQvdmVjdG9yLXRpbGVzL3t6fS97eH0ve3l9LnBiZj9maWVsZHM9Z3VpZDo6Y2hhcmFjdGVyIHZhcnlpbmcsbmFtZV8wLHllYXJcIixcblxuICB1cmw6IFwiaHR0cHM6Ly9zMy11cy13ZXN0LTIuYW1hem9uYXdzLmNvbS92ZWN0b3ItdGlsZXMvYXJjX3JlZ2lvbnMve3p9L3t4fS97eX0ucGJmXCIsXG5cbiAgZGV0YWlsc1VybDogJ3NlcnZpY2VzL2N1c3RvbS9jdXN0b21fb3BlcmF0aW9uP25hbWU9Z2V0OnRoZW1lYnlndWlkJmZvcm1hdD1qc29uJmd1aWRzPTpndWlkcyZnYWRtX2xldmVsPS0xJmZpbHRlcnM9OmZpbHRlcnMnLFxuICBkZWJ1ZzogZmFsc2UsXG4gIGNsaWNrYWJsZUxheWVyczogW1wiR0FETV8yMDE0XCJdLFxuXG4gIGdldElERm9yTGF5ZXJGZWF0dXJlOiBmdW5jdGlvbiAoZmVhdHVyZSkge1xuICAgIHJldHVybiBmZWF0dXJlLnByb3BlcnRpZXMuZ3VpZDtcbiAgfSxcbiAgbXV0ZXhUb2dnbGU6IHRydWUsXG5cbiAgLyoqXG4gICAqIFRoZSBmaWx0ZXIgZnVuY3Rpb24gZ2V0cyBjYWxsZWQgd2hlbiBpdGVyYXRpbmcgdGhvdWdoIGVhY2ggdmVjdG9yIHRpbGUgZmVhdHVyZSAodnRmKS4gWW91IGhhdmUgYWNjZXNzXG4gICAqIHRvIGV2ZXJ5IHByb3BlcnR5IGFzc29jaWF0ZWQgd2l0aCBhIGdpdmVuIGZlYXR1cmUgKHRoZSBmZWF0dXJlLCBhbmQgdGhlIGxheWVyKS4gWW91IGNhbiBhbHNvIGZpbHRlclxuICAgKiBiYXNlZCBvZiB0aGUgY29udGV4dCAoZWFjaCB0aWxlIHRoYXQgdGhlIGZlYXR1cmUgaXMgZHJhd24gb250bykuXG4gICAqXG4gICAqIFJldHVybmluZyBmYWxzZSBza2lwcyBvdmVyIHRoZSBmZWF0dXJlIGFuZCBpdCBpcyBub3QgZHJhd24uXG4gICAqXG4gICAqIEBwYXJhbSBmZWF0dXJlXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgZmlsdGVyOiBmdW5jdGlvbih2dGYsICRyb290U2NvcGUpe1xuICAgIHZhciBkYXRhID0gJHJvb3RTY29wZS52dERhdGE7XG5cbiAgICBpZihkYXRhICYmIGRhdGFbdnRmLnByb3BlcnRpZXMuZ3VpZF0pe1xuICAgICAgdmFyIHRoZW1lID0gJHJvb3RTY29wZS4kc3RhdGVQYXJhbXMudGhlbWU7XG4gICAgICB2dGYucHJvcGVydGllcy50aGVtZSA9IHRoZW1lO1xuICAgICAgdnRmLnByb3BlcnRpZXMuZWNvc19wcm9wZXJ0aWVzID0ge307XG4gICAgICB2dGYucHJvcGVydGllcy5lY29zX3Byb3BlcnRpZXNbdGhlbWVdID0gZGF0YVt2dGYucHJvcGVydGllcy5ndWlkXTtcbiAgICAgIC8vcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFdoZW4gd2Ugd2FudCB0byBsaW5rIGV2ZW50cyBiZXR3ZWVuIGxheWVycywgbGlrZSBjbGlja2luZyBvbiBhIGxhYmVsIGFuZCBhXG4gICAqIGNvcnJlc3BvbmRpbmcgcG9seWdvbiBmcmVhdHVyZSwgdGhpcyB3aWxsIHJldHVybiB0aGUgY29ycmVzcG9uZGluZyBtYXBwaW5nXG4gICAqIGJldHdlZW4gbGF5ZXJzLiBUaGlzIHByb3ZpZGVzIGtub3dsZWRnZSBvZiB3aGljaCBvdGhlciBmZWF0dXJlIGEgZ2l2ZW4gZmVhdHVyZVxuICAgKiBpcyBsaW5rZWQgdG8uXG4gICAqXG4gICAqIEBwYXJhbSBsYXllck5hbWUgIHRoZSBsYXllciB3ZSB3YW50IHRvIGtub3cgdGhlIGxpbmtlZCBsYXllciBmcm9tXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IHJldHVybnMgY29ycmVzcG9uZGluZyBsaW5rZWQgbGF5ZXJcbiAgICovXG4gIGxheWVyTGluazogZnVuY3Rpb24gKGxheWVyTmFtZSkge1xuICAgIGlmIChsYXllck5hbWUuaW5kZXhPZignX2xhYmVsJykgPiAtMSkge1xuICAgICAgcmV0dXJuIGxheWVyTmFtZS5yZXBsYWNlKCdfbGFiZWwnLCAnJyk7XG4gICAgfVxuICAgIHJldHVybiBsYXllck5hbWUgKyAnX2xhYmVsJztcbiAgfSxcblxuICBzdHlsZTogZ2V0VGhlbWVTdHlsZSxcblxuICBvbkNsaWNrOiBmdW5jdGlvbihldnQsICRodHRwLCAkcm9vdFNjb3BlLCBQQkZPYmplY3QpIHtcblxuICAgIGlmKGV2dCAmJiBldnQuZmVhdHVyZSAmJiBldnQuZmVhdHVyZS5pZCl7XG4gICAgICAvL0RvIHRoZSBvbmNsaWNrIHRoaW5nXG4gICAgICBQQkZPYmplY3QuZmV0Y2hGZWF0dXJlRGV0YWlscyhldnQuZmVhdHVyZS5pZCwgMCwgZXZ0LmZlYXR1cmUucHJvcGVydGllcy5BUkNfUmVnaW9uKTtcbiAgICB9XG4gIH0sXG4gIG9uU2VsZWN0OiBmdW5jdGlvbih2dGYsIFBCRk9iamVjdCl7XG4gICAgLy9XaGVuIGEgc2VsZWN0aW9uIGhhcyBjaGFuZ2VkIChsaWtleSB3aGVuIGEgbGFiZWwgd2FzIGNsaWNrZWQgYW5kIHRoZSBjb3JyZXNwb25kaW5nIGZlYXR1cmUgc2VsZWN0ZWQpXG4gICAgaWYodnRmICYmIHZ0Zi5pZCl7XG4gICAgICAvL0RvIHRoZSBvbmNsaWNrIHRoaW5nXG4gICAgICBQQkZPYmplY3QuZmV0Y2hGZWF0dXJlRGV0YWlscyh2dGYuaWQsIDAsIHZ0Zi5wcm9wZXJ0aWVzLkFSQ19SZWdpb24pO1xuICAgIH1cbiAgfVxufVxuXG5cblxuXG5mdW5jdGlvbiBnZXRUaGVtZVN0eWxlKHZ0ZiwgJHJvb3RTY29wZSl7XG5cbiAgdmFyIGVjb3NfYm9yZGVyX3RoaWNrbmVzcyA9IDE7IC8vcHggLSB0aGlzIGlzIHRoZSB0aGlja25lc3Mgb2YgYm91bmRhcmllcyB0aGF0IGhhdmUgZWNvcyBkYXRhIGFzc29jaWF0ZWRcbiAgdmFyIGVjb3NfYm9yZGVyX2NvbG9yID0gXCJyZ2JhKDE0MCwxNDAsMTQwLDEpXCI7XG5cbiAgdmFyIHN0eWxlID0ge307XG4gIC8vRGVmYXVsdCBzdHlsZSBmb3IgYWxsIGJvdW5kYXJpZXMgLSBtYWtlIGhvbGxvdywgd2l0aCBhIHRoaW4gb3V0bGluZS5cbiAgc3R5bGUuY29sb3IgPSAncmdiYSgwLDAsMCwwLjEpJztcbiAgc3R5bGUub3V0bGluZSA9IHtcbiAgICBjb2xvcjogJ3JnYmEoMjAsMjAsMjAsMC41KScsXG4gICAgc2l6ZTouNVxuICB9O1xuXG4gIHZhciBwcm9wZXJ0aWVzID0gdnRmLnByb3BlcnRpZXM7XG5cbiAgLy9Ta2lwIGlmIHdlJ3JlIGEgcmVndWxhciBwb2x5Z29uLCBhbmQgbm90IGEgbGFiZWwgcG9pbnQsIGFuZCBpZiB0aGVyZSBpcyBubyBFQ09TIHByb3BlcnRpZXMuXG4gIGlmKHZ0Zi5sYXllci5uYW1lLmluZGV4T2YoJ2xhYmVsJykgPT0gLTEgJiYgIXByb3BlcnRpZXMudGhlbWUpe1xuICAgIHJldHVybiBzdHlsZTtcbiAgfVxuXG4gIHZhciBjaGVja2VkO1xuXG4gIC8vU2VlIGlmIHdlIHNob3VsZCBzaG93IHRoZW1lIGJhZGdlcy9idWJibGVzIG9yIG5vdFxuICBpZigkc3RhdGVQYXJhbXMudGhlbWVsYWJlbHMgIT09IG51bGwgJiYgJHN0YXRlUGFyYW1zLnRoZW1lbGFiZWxzICE9PSB1bmRlZmluZWQpe1xuICAgIGNoZWNrZWQgPSAkc3RhdGVQYXJhbXMudGhlbWVsYWJlbHM7XG4gIH1cbiAgZWxzZXtcbiAgICAvL2lmIG5vdCBwcmVzZW50LCBkZWZhdWx0IHRvIHRydWVcbiAgICBjaGVja2VkID0gJ3RydWUnO1xuICB9XG5cbiAgdmFyIGVjb3NQcm9wZXJ0aWVzO1xuXG4gIGlmIChwcm9wZXJ0aWVzLnRoZW1lID09IFwiZGlzYXN0ZXJcIikge1xuICAgIGVjb3NQcm9wZXJ0aWVzID0gcHJvcGVydGllc1tcImVjb3NfcHJvcGVydGllc1wiXVtcImRpc2FzdGVyXCJdO1xuXG4gICAgaWYgKGVjb3NQcm9wZXJ0aWVzKSB7XG4gICAgICBpZiAoZWNvc1Byb3BlcnRpZXMuaXJvY19zdGF0dXNfX2MpIHtcbiAgICAgICAgLy9LZWVwIHRyYWNrIG9mIHRoZSBwcm9wZXJ0eSBuYW1lIGZvciB0aGUgc2FrZSBvZiBsZWdlbmQgZGlzcGxheVxuICAgICAgICBzdHlsZS5sZWdlbmRMYWJlbCA9IGVjb3NQcm9wZXJ0aWVzLmlyb2Nfc3RhdHVzX19jO1xuXG4gICAgICAgIHN3aXRjaCAoZWNvc1Byb3BlcnRpZXMuaXJvY19zdGF0dXNfX2MudG9Mb3dlckNhc2UoKSkge1xuICAgICAgICAgIGNhc2UgXCJhY3RpdmVcIjpcbiAgICAgICAgICAgIHN0eWxlLmNvbG9yID0gJ3JnYmEoMjA0LDAsNTEsJyArIG9wYWNpdHkgKyAnKSc7XG4gICAgICAgICAgICBzdHlsZS5vdXRsaW5lID0ge1xuICAgICAgICAgICAgICBjb2xvcjogZWNvc19ib3JkZXJfY29sb3IsXG4gICAgICAgICAgICAgIHNpemU6IGVjb3NfYm9yZGVyX3RoaWNrbmVzc1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBcIm1vbml0b3JpbmdcIjpcbiAgICAgICAgICAgIHN0eWxlLmNvbG9yID0gJ3JnYmEoMjA0LDE1MywwLCcgKyBvcGFjaXR5ICsgJyknO1xuICAgICAgICAgICAgc3R5bGUub3V0bGluZSA9IHtcbiAgICAgICAgICAgICAgY29sb3I6IGVjb3NfYm9yZGVyX2NvbG9yLFxuICAgICAgICAgICAgICBzaXplOiBlY29zX2JvcmRlcl90aGlja25lc3NcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgXCJpbmFjdGl2ZVwiOlxuICAgICAgICAgICAgc3R5bGUuY29sb3IgPSAncmdiYSgyNTUsMjU1LDI1NSwnICsgb3BhY2l0eSArICcpJztcbiAgICAgICAgICAgIHN0eWxlLm91dGxpbmUgPSB7XG4gICAgICAgICAgICAgIGNvbG9yOiBlY29zX2JvcmRlcl9jb2xvcixcbiAgICAgICAgICAgICAgc2l6ZTogZWNvc19ib3JkZXJfdGhpY2tuZXNzXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICB9XG4gIGVsc2UgaWYgKHByb3BlcnRpZXMudGhlbWUgPT0gXCJkaXNhc3RlclR5cGVcIikge1xuICAgIGVjb3NQcm9wZXJ0aWVzID0gcHJvcGVydGllc1tcImVjb3NfcHJvcGVydGllc1wiXVtcImRpc2FzdGVyVHlwZVwiXTsgLy90aGlzIGlzIGFuIGFycmF5IG9mIGRpc2FzdGVyIHR5cGVzIGZvciB0aGlzIGFyZWFcbiAgICBpZiAoZWNvc1Byb3BlcnRpZXMgJiYgZWNvc1Byb3BlcnRpZXMuZGlzYXN0ZXJfdHlwZV9fYykge1xuXG4gICAgICAvL0tlZXAgdHJhY2sgb2YgdGhlIHByb3BlcnR5IG5hbWUgZm9yIHRoZSBzYWtlIG9mIGxlZ2VuZCBkaXNwbGF5XG4gICAgICBzdHlsZS5sZWdlbmRMYWJlbCA9IGVjb3NQcm9wZXJ0aWVzLmRpc2FzdGVyX3R5cGVfX2M7XG5cbiAgICAgIC8vVXNlIHRoZSBzdGF0dXMgdG8gY29sb3IgdGhlIHJlZ2lvbnMgYnkgc3RhdHVzLlxuICAgICAgaWYgKGVjb3NQcm9wZXJ0aWVzLmlyb2Nfc3RhdHVzX19jKSB7XG5cbiAgICAgICAgc3dpdGNoIChlY29zUHJvcGVydGllcy5pcm9jX3N0YXR1c19fYy50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICAgICAgY2FzZSBcImFjdGl2ZVwiOlxuICAgICAgICAgICAgc3R5bGUuY29sb3IgPSAncmdiYSgyMDQsMCw1MSwnICsgb3BhY2l0eSArICcpJztcbiAgICAgICAgICAgIHN0eWxlLm91dGxpbmUgPSB7XG4gICAgICAgICAgICAgIGNvbG9yOiBlY29zX2JvcmRlcl9jb2xvcixcbiAgICAgICAgICAgICAgc2l6ZTogZWNvc19ib3JkZXJfdGhpY2tuZXNzXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFwibW9uaXRvcmluZ1wiOlxuICAgICAgICAgICAgc3R5bGUuY29sb3IgPSAncmdiYSgyMDQsMTUzLDAsJyArIG9wYWNpdHkgKyAnKSc7XG4gICAgICAgICAgICBzdHlsZS5vdXRsaW5lID0ge1xuICAgICAgICAgICAgICBjb2xvcjogZWNvc19ib3JkZXJfY29sb3IsXG4gICAgICAgICAgICAgIHNpemU6IGVjb3NfYm9yZGVyX3RoaWNrbmVzc1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBcImluYWN0aXZlXCI6XG4gICAgICAgICAgICBzdHlsZS5jb2xvciA9ICdyZ2JhKDI1NSwyNTUsMjU1LCcgKyBvcGFjaXR5ICsgJyknO1xuICAgICAgICAgICAgc3R5bGUub3V0bGluZSA9IHtcbiAgICAgICAgICAgICAgY29sb3I6IGVjb3NfYm9yZGVyX2NvbG9yLFxuICAgICAgICAgICAgICBzaXplOiBlY29zX2JvcmRlcl90aGlja25lc3NcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNle1xuICAgICAgICAvL0xvb2sgdXAgdGhlIGNvbG9yIGluIHRoZSBkaWN0aW9uYXJ5LCBpZiBzdGF0dXMgcHJvcGVydHkgaXMgbm90IGFyb3VuZFxuICAgICAgICBzdHlsZS5jb2xvciA9IGNvbmZpZy5VTk9DSEFJY29uTG9va3VwW2Vjb3NQcm9wZXJ0aWVzLmRpc2FzdGVyX3R5cGVfX2NbMF1dLmNvbG9yO1xuXG4gICAgICAgIC8vVXNlIHRoZSBzYW1lIG91dGxpbmVcbiAgICAgICAgc3R5bGUub3V0bGluZSA9IHtcbiAgICAgICAgICBjb2xvcjogZWNvc19ib3JkZXJfY29sb3IsXG4gICAgICAgICAgc2l6ZTogZWNvc19ib3JkZXJfdGhpY2tuZXNzXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYoY2hlY2tlZCA9PSAndHJ1ZScpe1xuICAgICAgICAvL0Rpc2FzdGVyIFR5cGUgc2hvdWxkIHVzZSBPQ0hBIGljb25zXG4gICAgICAgIC8vQnV0IHJlcGxhY2UgdGhlIG9wYWNpdHkgd2l0aCBzb2xpZCBmaWxsIGZvciB0aGUgYnViYmxlXG4gICAgICAgIHZhciBidWJibGVfZmlsbCA9IHN0eWxlLmNvbG9yLnJlcGxhY2UoXCIsXCIgKyBvcGFjaXR5ICsgXCIpXCIsIFwiLDEpXCIpO1xuICAgICAgICBzdHlsZS5zdGF0aWNMYWJlbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB2YXIgbGFiZWxTdHlsZSA9IHtcbiAgICAgICAgICAgIGh0bWw6IChlY29zUHJvcGVydGllcyAmJiBlY29zUHJvcGVydGllcy5kaXNhc3Rlcl90eXBlX19jWzBdID8gYnVpbGREaXNhc3RlclR5cGVMYWJlbChlY29zUHJvcGVydGllcy5kaXNhc3Rlcl90eXBlX19jWzBdLCBidWJibGVfZmlsbCwgc3R5bGUub3V0bGluZSkgOiBcIlwiKSxcbiAgICAgICAgICAgIGljb25TaXplOiBbNDIsIDQyXSxcbiAgICAgICAgICAgIGNzc0NsYXNzOiAnbm9jbGFzcydcbiAgICAgICAgICB9O1xuICAgICAgICAgIHJldHVybiBsYWJlbFN0eWxlO1xuICAgICAgICB9O1xuICAgICAgfVxuXG5cbiAgICB9XG4gIH1cbiAgZWxzZSBpZiAocHJvcGVydGllcy50aGVtZSA9PSBcInByb2plY3RSaXNrXCIpIHtcbiAgICBlY29zUHJvcGVydGllcyA9IHByb3BlcnRpZXNbXCJlY29zX3Byb3BlcnRpZXNcIl1bXCJwcm9qZWN0Umlza1wiXTtcbiAgICBpZiAoZWNvc1Byb3BlcnRpZXMgJiYgZWNvc1Byb3BlcnRpZXMub3ZlcmFsbF9hc3Nlc3NtZW50X19jKSB7XG4gICAgICAvL0tlZXAgdHJhY2sgb2YgdGhlIHByb3BlcnR5IG5hbWUgZm9yIHRoZSBzYWtlIG9mIGxlZ2VuZCBkaXNwbGF5XG4gICAgICBzdHlsZS5sZWdlbmRMYWJlbCA9IGVjb3NQcm9wZXJ0aWVzLm92ZXJhbGxfYXNzZXNzbWVudF9fYztcblxuICAgICAgc3dpdGNoIChlY29zUHJvcGVydGllcy5vdmVyYWxsX2Fzc2Vzc21lbnRfX2MudG9Mb3dlckNhc2UoKSkge1xuICAgICAgICBjYXNlIFwiY3JpdGljYWxcIjpcbiAgICAgICAgICBzdHlsZS5jb2xvciA9ICdyZ2JhKDI1NSwwLDAsJyArIG9wYWNpdHkgKyAnKSc7XG4gICAgICAgICAgc3R5bGUub3V0bGluZSA9IHtcbiAgICAgICAgICAgIGNvbG9yOiBlY29zX2JvcmRlcl9jb2xvcixcbiAgICAgICAgICAgIHNpemU6IGVjb3NfYm9yZGVyX3RoaWNrbmVzc1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcImhpZ2hcIjpcbiAgICAgICAgICBzdHlsZS5jb2xvciA9ICdyZ2JhKDI1NSwxMjcsMCwnICsgb3BhY2l0eSArICcpJztcbiAgICAgICAgICBzdHlsZS5vdXRsaW5lID0ge1xuICAgICAgICAgICAgY29sb3I6IGVjb3NfYm9yZGVyX2NvbG9yLFxuICAgICAgICAgICAgc2l6ZTogZWNvc19ib3JkZXJfdGhpY2tuZXNzXG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwibWVkaXVtXCI6XG4gICAgICAgICAgc3R5bGUuY29sb3IgPSAncmdiYSgyNTUsMjU1LDAsJyArIG9wYWNpdHkgKyAnKSc7XG4gICAgICAgICAgc3R5bGUub3V0bGluZSA9IHtcbiAgICAgICAgICAgIGNvbG9yOiBlY29zX2JvcmRlcl9jb2xvcixcbiAgICAgICAgICAgIHNpemU6IGVjb3NfYm9yZGVyX3RoaWNrbmVzc1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcImxvd1wiOlxuICAgICAgICAgIHN0eWxlLmNvbG9yID0gJ3JnYmEoMCwyNTUsMCwnICsgb3BhY2l0eSArICcpJztcbiAgICAgICAgICBzdHlsZS5vdXRsaW5lID0ge1xuICAgICAgICAgICAgY29sb3I6IGVjb3NfYm9yZGVyX2NvbG9yLFxuICAgICAgICAgICAgc2l6ZTogZWNvc19ib3JkZXJfdGhpY2tuZXNzXG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBlbHNlIGlmIChwcm9wZXJ0aWVzLnRoZW1lID09IFwicHJvamVjdEhlYWx0aFwiKSB7XG4gICAgZWNvc1Byb3BlcnRpZXMgPSBwcm9wZXJ0aWVzW1wiZWNvc19wcm9wZXJ0aWVzXCJdW1wicHJvamVjdEhlYWx0aFwiXTtcbiAgICBpZiAoZWNvc1Byb3BlcnRpZXMgJiYgZWNvc1Byb3BlcnRpZXMub3ZlcmFsbF9zdGF0dXNfX2MpIHtcbiAgICAgIC8vS2VlcCB0cmFjayBvZiB0aGUgcHJvcGVydHkgbmFtZSBmb3IgdGhlIHNha2Ugb2YgbGVnZW5kIGRpc3BsYXlcbiAgICAgIHN0eWxlLmxlZ2VuZExhYmVsID0gZWNvc1Byb3BlcnRpZXMub3ZlcmFsbF9zdGF0dXNfX2M7XG5cbiAgICAgIHN3aXRjaCAoZWNvc1Byb3BlcnRpZXMub3ZlcmFsbF9zdGF0dXNfX2MudG9Mb3dlckNhc2UoKSkge1xuICAgICAgICBjYXNlIFwicmVkXCI6XG4gICAgICAgICAgc3R5bGUuY29sb3IgPSAncmdiYSgyNTUsMCwwLCcgKyBvcGFjaXR5ICsgJyknO1xuICAgICAgICAgIHN0eWxlLm91dGxpbmUgPSB7XG4gICAgICAgICAgICBjb2xvcjogZWNvc19ib3JkZXJfY29sb3IsXG4gICAgICAgICAgICBzaXplOiBlY29zX2JvcmRlcl90aGlja25lc3NcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJ5ZWxsb3dcIjpcbiAgICAgICAgICBzdHlsZS5jb2xvciA9ICdyZ2JhKDI1NSwyNTUsMCwnICsgb3BhY2l0eSArICcpJztcbiAgICAgICAgICBzdHlsZS5vdXRsaW5lID0ge1xuICAgICAgICAgICAgY29sb3I6IGVjb3NfYm9yZGVyX2NvbG9yLFxuICAgICAgICAgICAgc2l6ZTogZWNvc19ib3JkZXJfdGhpY2tuZXNzXG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiZ3JlZW5cIjpcbiAgICAgICAgICBzdHlsZS5jb2xvciA9ICdyZ2JhKDAsMjU1LDAsJyArIG9wYWNpdHkgKyAnKSc7XG4gICAgICAgICAgc3R5bGUub3V0bGluZSA9IHtcbiAgICAgICAgICAgIGNvbG9yOiBlY29zX2JvcmRlcl9jb2xvcixcbiAgICAgICAgICAgIHNpemU6IGVjb3NfYm9yZGVyX3RoaWNrbmVzc1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIndoaXRlXCI6XG4gICAgICAgICAgc3R5bGUuY29sb3IgPSAncmdiYSgyNTUsMjU1LDI1NSwnICsgb3BhY2l0eSArICcpJztcbiAgICAgICAgICBzdHlsZS5vdXRsaW5lID0ge1xuICAgICAgICAgICAgY29sb3I6IGVjb3NfYm9yZGVyX2NvbG9yLFxuICAgICAgICAgICAgc2l6ZTogZWNvc19ib3JkZXJfdGhpY2tuZXNzXG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBlbHNlIGlmIChwcm9wZXJ0aWVzLnRoZW1lID09IFwicHJvamVjdFwiKSB7XG4gICAgZWNvc1Byb3BlcnRpZXMgPSBwcm9wZXJ0aWVzW1wiZWNvc19wcm9wZXJ0aWVzXCJdW1wicHJvamVjdFwiXTtcblxuICAgIGlmIChlY29zUHJvcGVydGllcyAmJiBlY29zUHJvcGVydGllcykge1xuXG4gICAgICAvL0tlZXAgdHJhY2sgb2YgdGhlIHByb3BlcnR5IG5hbWUgZm9yIHRoZSBzYWtlIG9mIGxlZ2VuZCBkaXNwbGF5XG4gICAgICBzdHlsZS5sZWdlbmRMYWJlbCA9IFwiI1Byb2plY3RzXCI7XG5cbiAgICAgIC8vZm9yIHRoZSBwdXJwb3NlcyBvZiBzaG93aW5nIGEgbGVnZW5kLCBrZWVwIHRoaXMgZ3JhZGllbnQgaGFuZHlcbiAgICAgIHN0eWxlLmdyYWRpZW50ID0gW1xuICAgICAgICAncmdiYSgyNTUsMjU1LDI1NSwnICsgb3BhY2l0eSArICcpJyxcbiAgICAgICAgJ3JnYmEoMCwyNTUsNTksJyArIG9wYWNpdHkgKyAnKSdcbiAgICAgIF07XG5cbiAgICAgIHZhciBjb3VudCA9ICBwYXJzZUludChlY29zUHJvcGVydGllcy50aGVtZV9jb3VudCk7XG5cbiAgICAgIGlmKGNvdW50ID09IDApIHtcbiAgICAgICAgLy9tYWtlIGhvbGxvd1xuICAgICAgICBzdHlsZS5jb2xvciA9ICdyZ2JhKDAsMCwwLCcgKyBvcGFjaXR5ICsgJyknO1xuICAgICAgICBzdHlsZS5vdXRsaW5lID0ge1xuICAgICAgICAgIGNvbG9yOiBlY29zX2JvcmRlcl9jb2xvcixcbiAgICAgICAgICBzaXplOiBlY29zX2JvcmRlcl90aGlja25lc3NcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSBpZihjb3VudCA+IDAgJiYgY291bnQgPD0gMikge1xuICAgICAgICAvL21ha2UgaG9sbG93XG4gICAgICAgIHN0eWxlLmNvbG9yID0gJ3JnYmEoMjI5LDI1NSwyMzUsJyArIG9wYWNpdHkgKyAnKSc7XG4gICAgICAgIHN0eWxlLm91dGxpbmUgPSB7XG4gICAgICAgICAgY29sb3I6IGVjb3NfYm9yZGVyX2NvbG9yLFxuICAgICAgICAgIHNpemU6IGVjb3NfYm9yZGVyX3RoaWNrbmVzc1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIGlmKGNvdW50ID4gMiAmJiBjb3VudCA8PSA1KSB7XG4gICAgICAgIC8vbWFrZSBob2xsb3dcbiAgICAgICAgc3R5bGUuY29sb3IgPSAncmdiYSgxNjksMjU1LDE4OSwnICsgb3BhY2l0eSArICcpJztcbiAgICAgICAgc3R5bGUub3V0bGluZSA9IHtcbiAgICAgICAgICBjb2xvcjogZWNvc19ib3JkZXJfY29sb3IsXG4gICAgICAgICAgc2l6ZTogZWNvc19ib3JkZXJfdGhpY2tuZXNzXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2UgaWYoY291bnQgPiA1ICYmIGNvdW50IDw9IDgpIHtcbiAgICAgICAgLy9tYWtlIGhvbGxvd1xuICAgICAgICBzdHlsZS5jb2xvciA9ICdyZ2JhKDE2OSwyNTUsMTI1LCcgKyBvcGFjaXR5ICsgJyknO1xuICAgICAgICBzdHlsZS5vdXRsaW5lID0ge1xuICAgICAgICAgIGNvbG9yOiBlY29zX2JvcmRlcl9jb2xvcixcbiAgICAgICAgICBzaXplOiBlY29zX2JvcmRlcl90aGlja25lc3NcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSBpZihjb3VudCA+IDggJiYgY291bnQgPD0gMTApIHtcbiAgICAgICAgLy9tYWtlIGhvbGxvd1xuICAgICAgICBzdHlsZS5jb2xvciA9ICdyZ2JhKDQxLDI1NSw5MCwnICsgb3BhY2l0eSArICcpJztcbiAgICAgICAgc3R5bGUub3V0bGluZSA9IHtcbiAgICAgICAgICBjb2xvcjogZWNvc19ib3JkZXJfY29sb3IsXG4gICAgICAgICAgc2l6ZTogZWNvc19ib3JkZXJfdGhpY2tuZXNzXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2UgaWYoY291bnQgPiAxMCkge1xuICAgICAgICAvL21ha2UgaG9sbG93XG4gICAgICAgIHN0eWxlLmNvbG9yID0gJ3JnYmEoMCwyNTUsNTksJyArIG9wYWNpdHkgKyAnKSc7XG4gICAgICAgIHN0eWxlLm91dGxpbmUgPSB7XG4gICAgICAgICAgY29sb3I6IGVjb3NfYm9yZGVyX2NvbG9yLFxuICAgICAgICAgIHNpemU6IGVjb3NfYm9yZGVyX3RoaWNrbmVzc1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICB9XG4gICAgZWxzZXtcbiAgICAgIC8vbWFrZSBob2xsb3dcbiAgICAgIHN0eWxlLmNvbG9yID0gJ3JnYmEoMCwwLDAsJyArIG9wYWNpdHkgKyAnKSc7XG4gICAgICBzdHlsZS5vdXRsaW5lID0ge1xuICAgICAgICBjb2xvcjogZWNvc19ib3JkZXJfY29sb3IsXG4gICAgICAgIHNpemU6IGVjb3NfYm9yZGVyX3RoaWNrbmVzc1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG5cbiAgLy9pZighaGF0Y2hEZXNpZ24pe1xuICAvLyAgaGF0Y2hEZXNpZ24gPSBnZXRJbWFnZVJlZigpO1xuICAvL31cblxuICAvL3N0eWxlLnNlbGVjdGVkID0ge1xuICAvLyAgY29sb3I6IGZ1bmN0aW9uKGN0eDJkKXtcbiAgLy8gICAgLy9IYXRjaCBzeW1ib2xcbiAgLy8gICAgdmFyIHJlcGVhdCA9IGN0eDJkLmNyZWF0ZVBhdHRlcm4oaGF0Y2hEZXNpZ24sIFwicmVwZWF0XCIpO1xuICAvLyAgICByZXR1cm4gcmVwZWF0O1xuICAvL1xuICAvLyAgfSxcbiAgLy8gIG91dGxpbmUgOiB7XG4gIC8vICAgIGNvbG9yOiAncmdiKDI1NSwyNTUsMCknLFxuICAvLyAgICBzaXplOiAyXG4gIC8vICB9XG4gIC8vfVxuXG4gIHN0eWxlLnNlbGVjdGVkID0ge1xuICAgIC8vY29sb3I6ICdyZ2JhKDAsMjU1LDI1NSwwLjEpJyxcbiAgICBjb2xvcjogc3R5bGUuY29sb3IsXG4gICAgb3V0bGluZSA6IHtcbiAgICAgIGNvbG9yOiAncmdiYSgwLDI1NSwyNTUsMSknLFxuICAgICAgc2l6ZTogMlxuICAgIH1cbiAgfVxuXG4gIC8vTGFiZWxcbiAgaWYoY2hlY2tlZCA9PSAndHJ1ZScpIHtcblxuICAgIGlmICh2dGYubGF5ZXIubmFtZSA9PT0gJ0dBRE1fMjAxNF9sYWJlbCcpIHtcbiAgICAgIGlmIChlY29zUHJvcGVydGllcyAmJiBlY29zUHJvcGVydGllcy50aGVtZV9jb3VudCkge1xuXG4gICAgICAgIGlmIChwcm9wZXJ0aWVzLnRoZW1lICE9IFwiZGlzYXN0ZXJUeXBlXCIpIHtcbiAgICAgICAgICAvL0Rpc2FzdGVyIFR5cGUgbGFiZWxzIGFyZSBzZXQgaW4gdGhlIGJsb2MgYWJvdmVcbiAgICAgICAgICAvL0FsbCBvdGhlcnMgYXJlIHNldCBoZXJlLlxuXG4gICAgICAgICAgc3R5bGUuc3RhdGljTGFiZWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgbGFiZWxTdHlsZSA9IHtcbiAgICAgICAgICAgICAgaHRtbDogKGVjb3NQcm9wZXJ0aWVzICYmIGVjb3NQcm9wZXJ0aWVzLnRoZW1lX2NvdW50ID8gYnVpbGREeW5hbWljTGFiZWwoZWNvc1Byb3BlcnRpZXMpIDogXCJcIiksXG4gICAgICAgICAgICAgIGljb25TaXplOiBbNDIsIDQyXSxcbiAgICAgICAgICAgICAgY3NzQ2xhc3M6ICdub2NsYXNzJ1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJldHVybiBsYWJlbFN0eWxlO1xuICAgICAgICAgIH07XG5cbiAgICAgICAgfVxuXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgLy9XaGVuIHN3aXRjaGluZyB0aGVtZXMsIHJlc2V0IG9sZCBsYWJlbCBzdHlsZXMgdG8gbnVsbCBzbyBsYWJlbHMgZG9uJ3QgZ2V0IGRyYXduIGZvciBvbGQgdGhlbWUuXG4gICAgICAgIHN0eWxlLnN0YXRpY0xhYmVsID0gbnVsbDtcbiAgICAgIH1cblxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gYnVpbGREeW5hbWljTGFiZWwocHJvcGVydGllcyl7XG4gIGlmIChwcm9wZXJ0aWVzLnRoZW1lID09IFwiZGlzYXN0ZXJcIikge1xuICAgIHZhciBjb2xvciA9IFwiXCI7XG4gICAgdmFyIGxhYmVsQ29sb3IgPSBcIlwiO1xuICAgIGlmIChwcm9wZXJ0aWVzICYmIHByb3BlcnRpZXMuaXJvY19zdGF0dXNfX2MpIHtcbiAgICAgIHN3aXRjaCAocHJvcGVydGllcy5pcm9jX3N0YXR1c19fYy50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICAgIGNhc2UgXCJhY3RpdmVcIjpcbiAgICAgICAgICBjb2xvciA9IFwicmdiYSgyMDQsMCw1MSwxKVwiO1xuICAgICAgICAgIGxhYmVsQ29sb3IgPSBcIiNmZmZcIjtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIm1vbml0b3JpbmdcIjpcbiAgICAgICAgICBjb2xvciA9IFwicmdiYSgyMjUsMTg3LDM3LDEpXCI7XG4gICAgICAgICAgbGFiZWxDb2xvciA9IFwiI2ZmZlwiO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiaW5hY3RpdmVcIjpcbiAgICAgICAgICBjb2xvciA9IFwicmdiYSgxODksMTg5LDE4OSwxKVwiO1xuICAgICAgICAgIGxhYmVsQ29sb3IgPSBcIiMwMDBcIjtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuICc8ZGl2IGNsYXNzPVwibGFiZWwtaWNvbi1udW1iZXItNDBwZXJjZW50XCInICsgKGNvbG9yID8gJyBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6ICcgKyBjb2xvciArICc7Y29sb3I6ICcgKyBsYWJlbENvbG9yICsgJ1wiJyA6ICcnKSArICc+PHNwYW4+JyArIHByb3BlcnRpZXMudGhlbWVfY291bnQgKyAnPC9zcGFuPjwvZGl2Pic7XG4gIH1cbiAgZWxzZSB7XG4gICAgcmV0dXJuICc8ZGl2IGNsYXNzPVwibGFiZWwtaWNvbi1udW1iZXItNDBwZXJjZW50XCI+PHNwYW4+JyArIHByb3BlcnRpZXMudGhlbWVfY291bnQgKyAnPC9zcGFuPjwvZGl2Pic7XG4gIH1cbn1cblxuXG4vKlxuU2V0IHRoZSBkaWN0aW9uYXJ5IHVzZWQgdG8gbG9vayB1cCBVTk9DSEEgaWNvbnMgZm9yIGRpc2FzdGVyIHR5cGVzXG4gKi9cbi8vdmFyIFVOT0NIQUljb25Mb29rdXAgPSB7XG4vL1xuLy8gIFwiTWV0ZW9yb2xvZ2ljYWwgLSBUcm9waWNhbCBDeWNsb25lXCI6IHtpY29uOiBcImljb24tZGlzYXN0ZXJfY3ljbG9uZVwiLCBjb2xvcjogXCJyZ2JhKDI1NSwwLDAsXCIgKyBvcGFjaXR5ICsgXCIpXCJ9LFxuLy8gIFwiRmxvb2RzXCI6IHtpY29uOiBcImljb24tZGlzYXN0ZXJfZmxvb2RcIiwgY29sb3I6IFwicmdiYSgyNTUsMCwwLFwiICsgb3BhY2l0eSArIFwiKVwifSxcbi8vICBcIlRzdW5hbWksIFZvbGNhbm9cIjoge2ljb246IFwiaWNvbi1kaXNhc3Rlcl90c3VuYW1pXCIsIGNvbG9yOiBcInJnYmEoMjU1LDAsMCxcIiArIG9wYWNpdHkgKyBcIilcIn0sXG4vLyAgXCJGbG9vZHMsIFN0b3JtXCI6IHtpY29uOiBcImljb24tZGlzYXN0ZXJfZmxvb2RcIiwgY29sb3I6IFwicmdiYSgyNTUsMCwwLFwiICsgb3BhY2l0eSArIFwiKVwifSxcbi8vICBcIlRzdW5hbWlcIjoge2ljb246IFwiaWNvbi1kaXNhc3Rlcl90c3VuYW1pXCIsIGNvbG9yOiBcInJnYmEoMjU1LDAsMCxcIiArIG9wYWNpdHkgKyBcIilcIn0sXG4vLyAgXCJGYW1pbmUgLyBGb29kIEluc2VjdXJpdHlcIjoge2ljb246IFwiaWNvbi1jbHVzdGVyX2Zvb2Rfc2VjdXJpdHlcIiwgY29sb3I6IFwicmdiYSgyNTUsMCwwLFwiICsgb3BhY2l0eSArIFwiKVwifSxcbi8vICBcIkRyb3VnaHRcIjoge2ljb246IFwiaWNvbi1kaXNhc3Rlcl9kcm91Z2h0XCIsIGNvbG9yOiBcInJnYmEoMjU1LDAsMCxcIiArIG9wYWNpdHkgKyBcIilcIn0sXG4vLyAgXCJNZXRlb3JvbG9naWNhbCAtIFRyb3BpY2FsIEN5Y2xvbmU7SHlkcm9sb2dpY2FsIC0gRmxvb2RzXCI6IHtpY29uOiBcImljb24tZGlzYXN0ZXJfY3ljbG9uZVwiLCBjb2xvcjogXCJyZ2JhKDI1NSwwLDAsXCIgKyBvcGFjaXR5ICsgXCIpXCJ9LFxuLy8gIFwiRm9vZCBJbnNlY3VyaXR5XCI6IHtpY29uOiBcImljb24tY2x1c3Rlcl9mb29kX3NlY3VyaXR5XCIsIGNvbG9yOiBcInJnYmEoMjU1LDAsMCxcIiArIG9wYWNpdHkgKyBcIilcIn0sXG4vLyAgXCJDaXZpbCBVbnJlc3RcIjoge2ljb246IFwiaWNvbi1wZW9wbGVfcmViZWxcIiwgY29sb3I6IFwicmdiYSgyNTUsMCwwLFwiICsgb3BhY2l0eSArIFwiKVwifSxcbi8vICBcIkZsb29kcywgVHJvcGljYWwgU3Rvcm1cIjoge2ljb246IFwiaWNvbi1kaXNhc3Rlcl9mbG9vZFwiLCBjb2xvcjogXCJyZ2JhKDI1NSwwLDAsXCIgKyBvcGFjaXR5ICsgXCIpXCJ9LFxuLy8gIFwiQ29tcGxleCBFbWVyZ2VuY3lcIjoge2ljb246IFwiaWNvbi1jcmlzaXNfY29uZmxpY3RcIiwgY29sb3I6IFwicmdiYSgyNTUsMCwwLFwiICsgb3BhY2l0eSArIFwiKVwifSxcbi8vICBcIkVwaWRlbWljXCI6IHtpY29uOiBcImljb24tZGlzYXN0ZXJfZXBpZGVtaWNcIiwgY29sb3I6IFwicmdiYSgyNTUsMCwwLFwiICsgb3BhY2l0eSArIFwiKVwifSxcbi8vICBcIlBvcHVsYXRpb24gTW92ZW1lbnRcIjoge2ljb246IFwiaWNvbi1jcmlzaXNfcG9wdWxhdGlvbl9kaXNwbGFjZW1lbnRcIiwgY29sb3I6IFwicmdiYSgyNTUsMCwwLFwiICsgb3BhY2l0eSArIFwiKVwifSxcbi8vICBcIkNsaW1hdG9sb2dpY2FsIC0gRHJvdWdodFwiOiB7aWNvbjogXCJpY29uLWRpc2FzdGVyX2Ryb3VnaHRcIiwgY29sb3I6IFwicmdiYSgyNTUsMCwwLFwiICsgb3BhY2l0eSArIFwiKVwifSxcbi8vICBcIldpbnRlciBTdG9ybVwiOiB7aWNvbjogXCJpY29uLWRpc2FzdGVyX3Nub3dmYWxsXCIsIGNvbG9yOiBcInJnYmEoMjU1LDAsMCxcIiArIG9wYWNpdHkgKyBcIilcIn0sXG4vLyAgXCJUcm9waWNhbCBTdG9ybVwiOiB7aWNvbjogXCJpY29uLWRpc2FzdGVyX2hlYXZ5X3JhaW5cIiwgY29sb3I6IFwicmdiYSgyNTUsMCwwLFwiICsgb3BhY2l0eSArIFwiKVwifSxcbi8vICBcIkVhcnRocXVha2UsIFRzdW5hbWlcIjoge2ljb246IFwiaWNvbi1kaXNhc3Rlcl9lYXJ0aHF1YWtlXCIsIGNvbG9yOiBcInJnYmEoMjU1LDAsMCxcIiArIG9wYWNpdHkgKyBcIilcIn0sXG4vLyAgXCJIeWRyb2xvZ2ljYWwgLSBGbG9vZHNcIjoge2ljb246IFwiaWNvbi1kaXNhc3Rlcl9mbG9vZFwiLCBjb2xvcjogXCJyZ2JhKDI1NSwwLDAsXCIgKyBvcGFjaXR5ICsgXCIpXCJ9LFxuLy8gIFwiTGFuZHNsaWRlO0Zsb29kc1wiOiB7aWNvbjogXCJpY29uLWRpc2FzdGVyX2xhbmRzbGlkZVwiLCBjb2xvcjogXCJyZ2JhKDI1NSwwLDAsXCIgKyBvcGFjaXR5ICsgXCIpXCJ9LFxuLy8gIFwiRWFydGhxdWFrZVwiOiB7aWNvbjogXCJpY29uLWRpc2FzdGVyX2VhcnRocXVha2VcIiwgY29sb3I6IFwicmdiYSgyNTUsMCwwLFwiICsgb3BhY2l0eSArIFwiKVwifSxcbi8vICBcIkxhbmRzbGlkZTtIeWRyb2xvZ2ljYWwgLSBGbG9vZHNcIjoge2ljb246IFwiaWNvbi1kaXNhc3Rlcl9sYW5kc2xpZGVcIiwgY29sb3I6IFwicmdiYSgyNTUsMCwwLFwiICsgb3BhY2l0eSArIFwiKVwifVxuLy9cbi8vfVxuXG5mdW5jdGlvbiBidWlsZERpc2FzdGVyVHlwZUxhYmVsKGRpc2FzdGVyVHlwZSwgY29sb3IpIHtcblxuICB2YXIgYmFja0NvbG9yID0gXCJcIjtcbiAgdmFyIGxhYmVsQ29sb3IgPSBcIlwiO1xuICBpZiAoZGlzYXN0ZXJUeXBlKSB7XG5cbiAgICBiYWNrQ29sb3IgPSBjb2xvciB8fCBcInJnYmEoMjA0LDAsNTEsMC40KVwiO1xuXG4gICAgaWYoY29sb3IuaW5kZXhPZihcIjI1NSwyNTUsMjU1XCIpID4gLTEpe1xuICAgICAgLy9pZiB0aGUgbGFiZWwgaXMgd2hpdGUsIG1ha2UgdGhlIHRleHQgYmxhY2tcbiAgICAgIGxhYmVsQ29sb3IgPSBcIiMwMDBcIjtcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgIGxhYmVsQ29sb3IgPSBcIiNmZmZcIjtcbiAgICB9XG4gIH1cblxuICB2YXIgaWNvbiA9IGNvbmZpZy5VTk9DSEFJY29uTG9va3VwW2Rpc2FzdGVyVHlwZV0uaWNvbiB8fCAnaWNvbi1vdGhlcl9jbHVzdGVyX290aGVyJztcblxuICByZXR1cm4gJzxkaXYgY2xhc3M9XCJsYWJlbC1pY29uLW51bWJlci0xMDBwZXJjZW50XCInICsgKGJhY2tDb2xvciA/ICcgc3R5bGU9XCJmb250LWZhbWlseTogaHVtYW5pdGFyaWFuX2ljb25zOyBiYWNrZ3JvdW5kLWNvbG9yOiAnICsgYmFja0NvbG9yICsgJztjb2xvcjogJyArIGxhYmVsQ29sb3IgKyAnXCInIDogJycpICsgJz48aSBjbGFzcz1cInVuICcgKyBpY29uICsgJ1wiPjwvaT48L2Rpdj4nO1xuXG59XG5cblxuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4vLyBmdW5jdGlvbiB3YWl0Zm9yIC0gV2FpdCB1bnRpbCBhIGNvbmRpdGlvbiBpcyBtZXRcbi8vXG4vLyBOZWVkZWQgcGFyYW1ldGVyczpcbi8vICAgIHRlc3Q6IGEgdmFsdWVcbi8vICAgIGV4cGVjdGVkVmFsdWU6IHRoZSB2YWx1ZSBvZiB0aGUgdGVzdCBmdW5jdGlvbiB3ZSBhcmUgd2FpdGluZyBmb3Jcbi8vICAgIG1zZWM6IGRlbGF5IGJldHdlZW4gdGhlIGNhbGxzIHRvIHRlc3Rcbi8vICAgIGNhbGxiYWNrOiBmdW5jdGlvbiB0byBleGVjdXRlIHdoZW4gdGhlIGNvbmRpdGlvbiBpcyBtZXRcbi8vIFBhcmFtZXRlcnMgZm9yIGRlYnVnZ2luZzpcbi8vICAgIGNvdW50OiB1c2VkIHRvIGNvdW50IHRoZSBsb29wc1xuLy8gICAgc291cmNlOiBhIHN0cmluZyB0byBzcGVjaWZ5IGFuIElELCBhIG1lc3NhZ2UsIGV0Y1xuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5mdW5jdGlvbiB3YWl0Zm9yKHRlc3QsIGV4cGVjdGVkVmFsdWUsIG1zZWMsIGNvdW50LCBzb3VyY2UsIGNhbGxiYWNrKSB7XG4gIC8vIENoZWNrIGlmIGNvbmRpdGlvbiBtZXQuIElmIG5vdCwgcmUtY2hlY2sgbGF0ZXIgKG1zZWMpLlxuICB3aGlsZSAodGVzdCgpICE9PSBleHBlY3RlZFZhbHVlKSB7XG4gICAgY291bnQrKztcbiAgICBjb25zb2xlLmxvZyhcIldhaXRpbmcgZm9yIGNvbmRpdGlvbiB0byBiZSBtZXQuLi5cIiArIGNvdW50KTtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgd2FpdGZvcih0ZXN0LCBleHBlY3RlZFZhbHVlLCBtc2VjLCBjb3VudCwgc291cmNlLCBjYWxsYmFjayk7XG4gICAgfSwgbXNlYyk7XG4gICAgcmV0dXJuO1xuICB9XG4gIC8vIENvbmRpdGlvbiBmaW5hbGx5IG1ldC4gY2FsbGJhY2soKSBjYW4gYmUgZXhlY3V0ZWQuXG4gIGNvbnNvbGUubG9nKHNvdXJjZSArICc6ICcgKyB0ZXN0KCkgKyAnLCBleHBlY3RlZDogJyArIGV4cGVjdGVkVmFsdWUgKyAnLCAnICsgY291bnQgKyAnIGxvb3BzLicpO1xuICBjYWxsYmFjaygpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVEZXNpZ24oKXtcbiAgdmFyIHBhdHRlcm4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgcGF0dGVybi53aWR0aCA9IDQwO1xuICBwYXR0ZXJuLmhlaWdodCA9IDQwO1xuICB2YXIgcGN0eCA9IHBhdHRlcm4uZ2V0Q29udGV4dCgnMmQnKTtcblxuICBwY3R4LmZpbGxTdHlsZSA9IFwicmdiYSgxODgsIDIyMiwgMTc4LCAwLjUpXCI7XG4gIHBjdHguZmlsbFJlY3QoMCwwLDIwLDIwKTtcbiAgcGN0eC5maWxsUmVjdCgyMCwyMCwyMCwyMCk7XG5cbiAgcmV0dXJuIHBhdHRlcm47XG59XG5cbmZ1bmN0aW9uIGdldEltYWdlUmVmKHVybCl7XG4gIHZhciBpbWcgPSBuZXcgSW1hZ2UoMjU2LDI1Nik7IC8vIHdpZHRoLCBoZWlnaHQgdmFsdWVzIGFyZSBvcHRpb25hbCBwYXJhbXNcbiAgaW1nLnNyYyA9ICdpbWFnZXMvZGlhZ29uYWxfc3RyaXBlc18xLnBuZyc7XG4gIHJldHVybiBpbWc7XG59XG5cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGdhZG0wIDogZ2FkbTAsXG4gIGdhZG0xIDogZ2FkbTEsXG4gIGdhZG0yIDogZ2FkbTIsXG4gIGFyY3JlZ2lvbnM6IGFyY3JlZ2lvbnMsXG4gIHRoZW1lTGF5ZXJzOiBbXCJnYWRtMFwiLCBcImdhZG0xXCIsIFwiZ2FkbTJcIiwgXCJhcmNyZWdpb25zXCJdIC8vYSBsaXN0IG9mIHRoZSB0aGVtZSBsYXllcnMgLSB1c2VkIHRvIGRldGVybWluZSB3aGV0aGVyIG9yIG5vdCBvbmUgaXMgY3VycmVudGx5IGxvYWRlZCBvciBub3QuXG59OyIsIihmdW5jdGlvbiAoQnVmZmVyKXtcbid1c2Ugc3RyaWN0JztcblxudmFyIGllZWU3NTQgPSByZXF1aXJlKCdpZWVlNzU0Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUHJvdG9idWY7XG5mdW5jdGlvbiBQcm90b2J1ZihidWYpIHtcbiAgICB0aGlzLmJ1ZiA9IGJ1ZjtcbiAgICB0aGlzLnBvcyA9IDA7XG59XG5cblByb3RvYnVmLnByb3RvdHlwZSA9IHtcbiAgICBnZXQgbGVuZ3RoKCkgeyByZXR1cm4gdGhpcy5idWYubGVuZ3RoOyB9XG59O1xuXG5Qcm90b2J1Zi5WYXJpbnQgPSAwO1xuUHJvdG9idWYuSW50NjQgPSAxO1xuUHJvdG9idWYuTWVzc2FnZSA9IDI7XG5Qcm90b2J1Zi5TdHJpbmcgPSAyO1xuUHJvdG9idWYuUGFja2VkID0gMjtcblByb3RvYnVmLkludDMyID0gNTtcblxuUHJvdG9idWYucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmJ1ZiA9IG51bGw7XG59O1xuXG4vLyA9PT0gUkVBRElORyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5Qcm90b2J1Zi5wcm90b3R5cGUucmVhZFVJbnQzMiA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciB2YWwgPSB0aGlzLmJ1Zi5yZWFkVUludDMyTEUodGhpcy5wb3MpO1xuICAgIHRoaXMucG9zICs9IDQ7XG4gICAgcmV0dXJuIHZhbDtcbn07XG5cblByb3RvYnVmLnByb3RvdHlwZS5yZWFkVUludDY0ID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHZhbCA9IHRoaXMuYnVmLnJlYWRVSW50NjRMRSh0aGlzLnBvcyk7XG4gICAgdGhpcy5wb3MgKz0gODtcbiAgICByZXR1cm4gdmFsO1xufTtcblxuUHJvdG9idWYucHJvdG90eXBlLnJlYWREb3VibGUgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgdmFsID0gaWVlZTc1NC5yZWFkKHRoaXMuYnVmLCB0aGlzLnBvcywgdHJ1ZSwgNTIsIDgpO1xuICAgIHRoaXMucG9zICs9IDg7XG4gICAgcmV0dXJuIHZhbDtcbn07XG5cblByb3RvYnVmLnByb3RvdHlwZS5yZWFkVmFyaW50ID0gZnVuY3Rpb24oKSB7XG4gICAgLy8gVE9ETzogYm91bmRzIGNoZWNraW5nXG4gICAgdmFyIHBvcyA9IHRoaXMucG9zO1xuICAgIGlmICh0aGlzLmJ1Zltwb3NdIDw9IDB4N2YpIHtcbiAgICAgICAgdGhpcy5wb3MrKztcbiAgICAgICAgcmV0dXJuIHRoaXMuYnVmW3Bvc107XG4gICAgfSBlbHNlIGlmICh0aGlzLmJ1Zltwb3MgKyAxXSA8PSAweDdmKSB7XG4gICAgICAgIHRoaXMucG9zICs9IDI7XG4gICAgICAgIHJldHVybiAodGhpcy5idWZbcG9zXSAmIDB4N2YpIHwgKHRoaXMuYnVmW3BvcyArIDFdIDw8IDcpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5idWZbcG9zICsgMl0gPD0gMHg3Zikge1xuICAgICAgICB0aGlzLnBvcyArPSAzO1xuICAgICAgICByZXR1cm4gKHRoaXMuYnVmW3Bvc10gJiAweDdmKSB8ICh0aGlzLmJ1Zltwb3MgKyAxXSAmIDB4N2YpIDw8IDcgfCAodGhpcy5idWZbcG9zICsgMl0pIDw8IDE0O1xuICAgIH0gZWxzZSBpZiAodGhpcy5idWZbcG9zICsgM10gPD0gMHg3Zikge1xuICAgICAgICB0aGlzLnBvcyArPSA0O1xuICAgICAgICByZXR1cm4gKHRoaXMuYnVmW3Bvc10gJiAweDdmKSB8ICh0aGlzLmJ1Zltwb3MgKyAxXSAmIDB4N2YpIDw8IDcgfCAodGhpcy5idWZbcG9zICsgMl0gJiAweDdmKSA8PCAxNCB8ICh0aGlzLmJ1Zltwb3MgKyAzXSkgPDwgMjE7XG4gICAgfSBlbHNlIGlmICh0aGlzLmJ1Zltwb3MgKyA0XSA8PSAweDdmKSB7XG4gICAgICAgIHRoaXMucG9zICs9IDU7XG4gICAgICAgIHJldHVybiAoKHRoaXMuYnVmW3Bvc10gJiAweDdmKSB8ICh0aGlzLmJ1Zltwb3MgKyAxXSAmIDB4N2YpIDw8IDcgfCAodGhpcy5idWZbcG9zICsgMl0gJiAweDdmKSA8PCAxNCB8ICh0aGlzLmJ1Zltwb3MgKyAzXSkgPDwgMjEpICsgKHRoaXMuYnVmW3BvcyArIDRdICogMjY4NDM1NDU2KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNraXAoUHJvdG9idWYuVmFyaW50KTtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIC8vIHRocm93IG5ldyBFcnJvcihcIlRPRE86IEhhbmRsZSA2KyBieXRlIHZhcmludHNcIik7XG4gICAgfVxufTtcblxuUHJvdG9idWYucHJvdG90eXBlLnJlYWRTVmFyaW50ID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIG51bSA9IHRoaXMucmVhZFZhcmludCgpO1xuICAgIGlmIChudW0gPiAyMTQ3NDgzNjQ3KSB0aHJvdyBuZXcgRXJyb3IoJ1RPRE86IEhhbmRsZSBudW1iZXJzID49IDJeMzAnKTtcbiAgICAvLyB6aWd6YWcgZW5jb2RpbmdcbiAgICByZXR1cm4gKChudW0gPj4gMSkgXiAtKG51bSAmIDEpKTtcbn07XG5cblByb3RvYnVmLnByb3RvdHlwZS5yZWFkU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGJ5dGVzID0gdGhpcy5yZWFkVmFyaW50KCk7XG4gICAgLy8gVE9ETzogYm91bmRzIGNoZWNraW5nXG4gICAgdmFyIGNociA9IFN0cmluZy5mcm9tQ2hhckNvZGU7XG4gICAgdmFyIGIgPSB0aGlzLmJ1ZjtcbiAgICB2YXIgcCA9IHRoaXMucG9zO1xuICAgIHZhciBlbmQgPSB0aGlzLnBvcyArIGJ5dGVzO1xuICAgIHZhciBzdHIgPSAnJztcbiAgICB3aGlsZSAocCA8IGVuZCkge1xuICAgICAgICBpZiAoYltwXSA8PSAweDdGKSBzdHIgKz0gY2hyKGJbcCsrXSk7XG4gICAgICAgIGVsc2UgaWYgKGJbcF0gPD0gMHhCRikgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIFVURi04IGNvZGVwb2ludDogJyArIGJbcF0pO1xuICAgICAgICBlbHNlIGlmIChiW3BdIDw9IDB4REYpIHN0ciArPSBjaHIoKGJbcCsrXSAmIDB4MUYpIDw8IDYgfCAoYltwKytdICYgMHgzRikpO1xuICAgICAgICBlbHNlIGlmIChiW3BdIDw9IDB4RUYpIHN0ciArPSBjaHIoKGJbcCsrXSAmIDB4MUYpIDw8IDEyIHwgKGJbcCsrXSAmIDB4M0YpIDw8IDYgfCAoYltwKytdICYgMHgzRikpO1xuICAgICAgICBlbHNlIGlmIChiW3BdIDw9IDB4RjcpIHAgKz0gNDsgLy8gV2UgY2FuJ3QgaGFuZGxlIHRoZXNlIGNvZGVwb2ludHMgaW4gSlMsIHNvIHNraXAuXG4gICAgICAgIGVsc2UgaWYgKGJbcF0gPD0gMHhGQikgcCArPSA1O1xuICAgICAgICBlbHNlIGlmIChiW3BdIDw9IDB4RkQpIHAgKz0gNjtcbiAgICAgICAgZWxzZSB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgVVRGLTggY29kZXBvaW50OiAnICsgYltwXSk7XG4gICAgfVxuICAgIHRoaXMucG9zICs9IGJ5dGVzO1xuICAgIHJldHVybiBzdHI7XG59O1xuXG5Qcm90b2J1Zi5wcm90b3R5cGUucmVhZEJ1ZmZlciA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBieXRlcyA9IHRoaXMucmVhZFZhcmludCgpO1xuICAgIHZhciBidWZmZXIgPSB0aGlzLmJ1Zi5zdWJhcnJheSh0aGlzLnBvcywgdGhpcy5wb3MgKyBieXRlcyk7XG4gICAgdGhpcy5wb3MgKz0gYnl0ZXM7XG4gICAgcmV0dXJuIGJ1ZmZlcjtcbn07XG5cblByb3RvYnVmLnByb3RvdHlwZS5yZWFkUGFja2VkID0gZnVuY3Rpb24odHlwZSkge1xuICAgIC8vIFRPRE86IGJvdW5kcyBjaGVja2luZ1xuICAgIHZhciBieXRlcyA9IHRoaXMucmVhZFZhcmludCgpO1xuICAgIHZhciBlbmQgPSB0aGlzLnBvcyArIGJ5dGVzO1xuICAgIHZhciBhcnJheSA9IFtdO1xuICAgIHdoaWxlICh0aGlzLnBvcyA8IGVuZCkge1xuICAgICAgICBhcnJheS5wdXNoKHRoaXNbJ3JlYWQnICsgdHlwZV0oKSk7XG4gICAgfVxuICAgIHJldHVybiBhcnJheTtcbn07XG5cblByb3RvYnVmLnByb3RvdHlwZS5za2lwID0gZnVuY3Rpb24odmFsKSB7XG4gICAgLy8gVE9ETzogYm91bmRzIGNoZWNraW5nXG4gICAgdmFyIHR5cGUgPSB2YWwgJiAweDc7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIC8qIHZhcmludCAqLyBjYXNlIFByb3RvYnVmLlZhcmludDogd2hpbGUgKHRoaXMuYnVmW3RoaXMucG9zKytdID4gMHg3Zik7IGJyZWFrO1xuICAgICAgICAvKiA2NCBiaXQgKi8gY2FzZSBQcm90b2J1Zi5JbnQ2NDogdGhpcy5wb3MgKz0gODsgYnJlYWs7XG4gICAgICAgIC8qIGxlbmd0aCAqLyBjYXNlIFByb3RvYnVmLk1lc3NhZ2U6IHZhciBieXRlcyA9IHRoaXMucmVhZFZhcmludCgpOyB0aGlzLnBvcyArPSBieXRlczsgYnJlYWs7XG4gICAgICAgIC8qIDMyIGJpdCAqLyBjYXNlIFByb3RvYnVmLkludDMyOiB0aGlzLnBvcyArPSA0OyBicmVhaztcbiAgICAgICAgZGVmYXVsdDogdGhyb3cgbmV3IEVycm9yKCdVbmltcGxlbWVudGVkIHR5cGU6ICcgKyB0eXBlKTtcbiAgICB9XG59O1xuXG4vLyA9PT0gV1JJVElORyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5Qcm90b2J1Zi5wcm90b3R5cGUud3JpdGVUYWcgPSBmdW5jdGlvbih0YWcsIHR5cGUpIHtcbiAgICB0aGlzLndyaXRlVmFyaW50KCh0YWcgPDwgMykgfCB0eXBlKTtcbn07XG5cblByb3RvYnVmLnByb3RvdHlwZS5yZWFsbG9jID0gZnVuY3Rpb24obWluKSB7XG4gICAgdmFyIGxlbmd0aCA9IHRoaXMuYnVmLmxlbmd0aDtcbiAgICB3aGlsZSAobGVuZ3RoIDwgdGhpcy5wb3MgKyBtaW4pIGxlbmd0aCAqPSAyO1xuICAgIGlmIChsZW5ndGggIT0gdGhpcy5idWYubGVuZ3RoKSB7XG4gICAgICAgIHZhciBidWYgPSBuZXcgQnVmZmVyKGxlbmd0aCk7XG4gICAgICAgIHRoaXMuYnVmLmNvcHkoYnVmKTtcbiAgICAgICAgdGhpcy5idWYgPSBidWY7XG4gICAgfVxufTtcblxuUHJvdG9idWYucHJvdG90eXBlLmZpbmlzaCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmJ1Zi5zbGljZSgwLCB0aGlzLnBvcyk7XG59O1xuXG5Qcm90b2J1Zi5wcm90b3R5cGUud3JpdGVQYWNrZWQgPSBmdW5jdGlvbih0eXBlLCB0YWcsIGl0ZW1zKSB7XG4gICAgaWYgKCFpdGVtcy5sZW5ndGgpIHJldHVybjtcblxuICAgIHZhciBtZXNzYWdlID0gbmV3IFByb3RvYnVmKCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBtZXNzYWdlWyd3cml0ZScgKyB0eXBlXShpdGVtc1tpXSk7XG4gICAgfVxuICAgIHZhciBkYXRhID0gbWVzc2FnZS5maW5pc2goKTtcblxuICAgIHRoaXMud3JpdGVUYWcodGFnLCBQcm90b2J1Zi5QYWNrZWQpO1xuICAgIHRoaXMud3JpdGVCdWZmZXIoZGF0YSk7XG59O1xuXG5Qcm90b2J1Zi5wcm90b3R5cGUud3JpdGVVSW50MzIgPSBmdW5jdGlvbih2YWwpIHtcbiAgICB0aGlzLnJlYWxsb2MoNCk7XG4gICAgdGhpcy5idWYud3JpdGVVSW50MzJMRSh2YWwsIHRoaXMucG9zKTtcbiAgICB0aGlzLnBvcyArPSA0O1xufTtcblxuUHJvdG9idWYucHJvdG90eXBlLndyaXRlVGFnZ2VkVUludDMyID0gZnVuY3Rpb24odGFnLCB2YWwpIHtcbiAgICB0aGlzLndyaXRlVGFnKHRhZywgUHJvdG9idWYuSW50MzIpO1xuICAgIHRoaXMud3JpdGVVSW50MzIodmFsKTtcbn07XG5cblByb3RvYnVmLnByb3RvdHlwZS53cml0ZVZhcmludCA9IGZ1bmN0aW9uKHZhbCkge1xuICAgIHZhbCA9IE51bWJlcih2YWwpO1xuICAgIGlmIChpc05hTih2YWwpKSB7XG4gICAgICAgIHZhbCA9IDA7XG4gICAgfVxuXG4gICAgaWYgKHZhbCA8PSAweDdmKSB7XG4gICAgICAgIHRoaXMucmVhbGxvYygxKTtcbiAgICAgICAgdGhpcy5idWZbdGhpcy5wb3MrK10gPSB2YWw7XG4gICAgfSBlbHNlIGlmICh2YWwgPD0gMHgzZmZmKSB7XG4gICAgICAgIHRoaXMucmVhbGxvYygyKTtcbiAgICAgICAgdGhpcy5idWZbdGhpcy5wb3MrK10gPSAweDgwIHwgKCh2YWwgPj4+IDApICYgMHg3Zik7XG4gICAgICAgIHRoaXMuYnVmW3RoaXMucG9zKytdID0gMHgwMCB8ICgodmFsID4+PiA3KSAmIDB4N2YpO1xuICAgIH0gZWxzZSBpZiAodmFsIDw9IDB4MWZmZmZmZikge1xuICAgICAgICB0aGlzLnJlYWxsb2MoMyk7XG4gICAgICAgIHRoaXMuYnVmW3RoaXMucG9zKytdID0gMHg4MCB8ICgodmFsID4+PiAwKSAmIDB4N2YpO1xuICAgICAgICB0aGlzLmJ1Zlt0aGlzLnBvcysrXSA9IDB4ODAgfCAoKHZhbCA+Pj4gNykgJiAweDdmKTtcbiAgICAgICAgdGhpcy5idWZbdGhpcy5wb3MrK10gPSAweDAwIHwgKCh2YWwgPj4+IDE0KSAmIDB4N2YpO1xuICAgIH0gZWxzZSBpZiAodmFsIDw9IDB4ZmZmZmZmZikge1xuICAgICAgICB0aGlzLnJlYWxsb2MoNCk7XG4gICAgICAgIHRoaXMuYnVmW3RoaXMucG9zKytdID0gMHg4MCB8ICgodmFsID4+PiAwKSAmIDB4N2YpO1xuICAgICAgICB0aGlzLmJ1Zlt0aGlzLnBvcysrXSA9IDB4ODAgfCAoKHZhbCA+Pj4gNykgJiAweDdmKTtcbiAgICAgICAgdGhpcy5idWZbdGhpcy5wb3MrK10gPSAweDgwIHwgKCh2YWwgPj4+IDE0KSAmIDB4N2YpO1xuICAgICAgICB0aGlzLmJ1Zlt0aGlzLnBvcysrXSA9IDB4MDAgfCAoKHZhbCA+Pj4gMjEpICYgMHg3Zik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgd2hpbGUgKHZhbCA+IDApIHtcbiAgICAgICAgICAgIHZhciBiID0gdmFsICYgMHg3ZjtcbiAgICAgICAgICAgIHZhbCA9IE1hdGguZmxvb3IodmFsIC8gMTI4KTtcbiAgICAgICAgICAgIGlmICh2YWwgPiAwKSBiIHw9IDB4ODBcbiAgICAgICAgICAgIHRoaXMucmVhbGxvYygxKTtcbiAgICAgICAgICAgIHRoaXMuYnVmW3RoaXMucG9zKytdID0gYjtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cblByb3RvYnVmLnByb3RvdHlwZS53cml0ZVRhZ2dlZFZhcmludCA9IGZ1bmN0aW9uKHRhZywgdmFsKSB7XG4gICAgdGhpcy53cml0ZVRhZyh0YWcsIFByb3RvYnVmLlZhcmludCk7XG4gICAgdGhpcy53cml0ZVZhcmludCh2YWwpO1xufTtcblxuUHJvdG9idWYucHJvdG90eXBlLndyaXRlU1ZhcmludCA9IGZ1bmN0aW9uKHZhbCkge1xuICAgIGlmICh2YWwgPj0gMCkge1xuICAgICAgICB0aGlzLndyaXRlVmFyaW50KHZhbCAqIDIpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMud3JpdGVWYXJpbnQodmFsICogLTIgLSAxKTtcbiAgICB9XG59O1xuXG5Qcm90b2J1Zi5wcm90b3R5cGUud3JpdGVUYWdnZWRTVmFyaW50ID0gZnVuY3Rpb24odGFnLCB2YWwpIHtcbiAgICB0aGlzLndyaXRlVGFnKHRhZywgUHJvdG9idWYuVmFyaW50KTtcbiAgICB0aGlzLndyaXRlU1ZhcmludCh2YWwpO1xufTtcblxuUHJvdG9idWYucHJvdG90eXBlLndyaXRlQm9vbGVhbiA9IGZ1bmN0aW9uKHZhbCkge1xuICAgIHRoaXMud3JpdGVWYXJpbnQoQm9vbGVhbih2YWwpKTtcbn07XG5cblByb3RvYnVmLnByb3RvdHlwZS53cml0ZVRhZ2dlZEJvb2xlYW4gPSBmdW5jdGlvbih0YWcsIHZhbCkge1xuICAgIHRoaXMud3JpdGVUYWdnZWRWYXJpbnQodGFnLCBCb29sZWFuKHZhbCkpO1xufTtcblxuUHJvdG9idWYucHJvdG90eXBlLndyaXRlU3RyaW5nID0gZnVuY3Rpb24oc3RyKSB7XG4gICAgc3RyID0gU3RyaW5nKHN0cik7XG4gICAgdmFyIGJ5dGVzID0gQnVmZmVyLmJ5dGVMZW5ndGgoc3RyKTtcbiAgICB0aGlzLndyaXRlVmFyaW50KGJ5dGVzKTtcbiAgICB0aGlzLnJlYWxsb2MoYnl0ZXMpO1xuICAgIHRoaXMuYnVmLndyaXRlKHN0ciwgdGhpcy5wb3MpO1xuICAgIHRoaXMucG9zICs9IGJ5dGVzO1xufTtcblxuUHJvdG9idWYucHJvdG90eXBlLndyaXRlVGFnZ2VkU3RyaW5nID0gZnVuY3Rpb24odGFnLCBzdHIpIHtcbiAgICB0aGlzLndyaXRlVGFnKHRhZywgUHJvdG9idWYuU3RyaW5nKTtcbiAgICB0aGlzLndyaXRlU3RyaW5nKHN0cik7XG59O1xuXG5Qcm90b2J1Zi5wcm90b3R5cGUud3JpdGVGbG9hdCA9IGZ1bmN0aW9uKHZhbCkge1xuICAgIHRoaXMucmVhbGxvYyg0KTtcbiAgICB0aGlzLmJ1Zi53cml0ZUZsb2F0TEUodmFsLCB0aGlzLnBvcyk7XG4gICAgdGhpcy5wb3MgKz0gNDtcbn07XG5cblByb3RvYnVmLnByb3RvdHlwZS53cml0ZVRhZ2dlZEZsb2F0ID0gZnVuY3Rpb24odGFnLCB2YWwpIHtcbiAgICB0aGlzLndyaXRlVGFnKHRhZywgUHJvdG9idWYuSW50MzIpO1xuICAgIHRoaXMud3JpdGVGbG9hdCh2YWwpO1xufTtcblxuUHJvdG9idWYucHJvdG90eXBlLndyaXRlRG91YmxlID0gZnVuY3Rpb24odmFsKSB7XG4gICAgdGhpcy5yZWFsbG9jKDgpO1xuICAgIHRoaXMuYnVmLndyaXRlRG91YmxlTEUodmFsLCB0aGlzLnBvcyk7XG4gICAgdGhpcy5wb3MgKz0gODtcbn07XG5cblByb3RvYnVmLnByb3RvdHlwZS53cml0ZVRhZ2dlZERvdWJsZSA9IGZ1bmN0aW9uKHRhZywgdmFsKSB7XG4gICAgdGhpcy53cml0ZVRhZyh0YWcsIFByb3RvYnVmLkludDY0KTtcbiAgICB0aGlzLndyaXRlRG91YmxlKHZhbCk7XG59O1xuXG5Qcm90b2J1Zi5wcm90b3R5cGUud3JpdGVCdWZmZXIgPSBmdW5jdGlvbihidWZmZXIpIHtcbiAgICB2YXIgYnl0ZXMgPSBidWZmZXIubGVuZ3RoO1xuICAgIHRoaXMud3JpdGVWYXJpbnQoYnl0ZXMpO1xuICAgIHRoaXMucmVhbGxvYyhieXRlcyk7XG4gICAgYnVmZmVyLmNvcHkodGhpcy5idWYsIHRoaXMucG9zKTtcbiAgICB0aGlzLnBvcyArPSBieXRlcztcbn07XG5cblByb3RvYnVmLnByb3RvdHlwZS53cml0ZVRhZ2dlZEJ1ZmZlciA9IGZ1bmN0aW9uKHRhZywgYnVmZmVyKSB7XG4gICAgdGhpcy53cml0ZVRhZyh0YWcsIFByb3RvYnVmLlN0cmluZyk7XG4gICAgdGhpcy53cml0ZUJ1ZmZlcihidWZmZXIpO1xufTtcblxuUHJvdG9idWYucHJvdG90eXBlLndyaXRlTWVzc2FnZSA9IGZ1bmN0aW9uKHRhZywgcHJvdG9idWYpIHtcbiAgICB2YXIgYnVmZmVyID0gcHJvdG9idWYuZmluaXNoKCk7XG4gICAgdGhpcy53cml0ZVRhZyh0YWcsIFByb3RvYnVmLk1lc3NhZ2UpO1xuICAgIHRoaXMud3JpdGVCdWZmZXIoYnVmZmVyKTtcbn07XG5cbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwiYnVmZmVyXCIpLkJ1ZmZlcilcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0OnV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkltRndjQzlzYVdJdlRHVmhabXhsZEM1TllYQmliM2hXWldOMGIzSlVhV3hsTDI1dlpHVmZiVzlrZFd4bGN5OXdZbVl2YVc1a1pYZ3Vhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanRCUVVGQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQklpd2labWxzWlNJNkltZGxibVZ5WVhSbFpDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUluZFhObElITjBjbWxqZENjN1hHNWNiblpoY2lCcFpXVmxOelUwSUQwZ2NtVnhkV2x5WlNnbmFXVmxaVGMxTkNjcE8xeHVYRzV0YjJSMWJHVXVaWGh3YjNKMGN5QTlJRkJ5YjNSdlluVm1PMXh1Wm5WdVkzUnBiMjRnVUhKdmRHOWlkV1lvWW5WbUtTQjdYRzRnSUNBZ2RHaHBjeTVpZFdZZ1BTQmlkV1k3WEc0Z0lDQWdkR2hwY3k1d2IzTWdQU0F3TzF4dWZWeHVYRzVRY205MGIySjFaaTV3Y205MGIzUjVjR1VnUFNCN1hHNGdJQ0FnWjJWMElHeGxibWQwYUNncElIc2djbVYwZFhKdUlIUm9hWE11WW5WbUxteGxibWQwYURzZ2ZWeHVmVHRjYmx4dVVISnZkRzlpZFdZdVZtRnlhVzUwSUQwZ01EdGNibEJ5YjNSdlluVm1Ma2x1ZERZMElEMGdNVHRjYmxCeWIzUnZZblZtTGsxbGMzTmhaMlVnUFNBeU8xeHVVSEp2ZEc5aWRXWXVVM1J5YVc1bklEMGdNanRjYmxCeWIzUnZZblZtTGxCaFkydGxaQ0E5SURJN1hHNVFjbTkwYjJKMVppNUpiblF6TWlBOUlEVTdYRzVjYmxCeWIzUnZZblZtTG5CeWIzUnZkSGx3WlM1a1pYTjBjbTk1SUQwZ1puVnVZM1JwYjI0b0tTQjdYRzRnSUNBZ2RHaHBjeTVpZFdZZ1BTQnVkV3hzTzF4dWZUdGNibHh1THk4Z1BUMDlJRkpGUVVSSlRrY2dQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDFjYmx4dVVISnZkRzlpZFdZdWNISnZkRzkwZVhCbExuSmxZV1JWU1c1ME16SWdQU0JtZFc1amRHbHZiaWdwSUh0Y2JpQWdJQ0IyWVhJZ2RtRnNJRDBnZEdocGN5NWlkV1l1Y21WaFpGVkpiblF6TWt4RktIUm9hWE11Y0c5ektUdGNiaUFnSUNCMGFHbHpMbkJ2Y3lBclBTQTBPMXh1SUNBZ0lISmxkSFZ5YmlCMllXdzdYRzU5TzF4dVhHNVFjbTkwYjJKMVppNXdjbTkwYjNSNWNHVXVjbVZoWkZWSmJuUTJOQ0E5SUdaMWJtTjBhVzl1S0NrZ2UxeHVJQ0FnSUhaaGNpQjJZV3dnUFNCMGFHbHpMbUoxWmk1eVpXRmtWVWx1ZERZMFRFVW9kR2hwY3k1d2IzTXBPMXh1SUNBZ0lIUm9hWE11Y0c5eklDczlJRGc3WEc0Z0lDQWdjbVYwZFhKdUlIWmhiRHRjYm4wN1hHNWNibEJ5YjNSdlluVm1MbkJ5YjNSdmRIbHdaUzV5WldGa1JHOTFZbXhsSUQwZ1puVnVZM1JwYjI0b0tTQjdYRzRnSUNBZ2RtRnlJSFpoYkNBOUlHbGxaV1UzTlRRdWNtVmhaQ2gwYUdsekxtSjFaaXdnZEdocGN5NXdiM01zSUhSeWRXVXNJRFV5TENBNEtUdGNiaUFnSUNCMGFHbHpMbkJ2Y3lBclBTQTRPMXh1SUNBZ0lISmxkSFZ5YmlCMllXdzdYRzU5TzF4dVhHNVFjbTkwYjJKMVppNXdjbTkwYjNSNWNHVXVjbVZoWkZaaGNtbHVkQ0E5SUdaMWJtTjBhVzl1S0NrZ2UxeHVJQ0FnSUM4dklGUlBSRTg2SUdKdmRXNWtjeUJqYUdWamEybHVaMXh1SUNBZ0lIWmhjaUJ3YjNNZ1BTQjBhR2x6TG5CdmN6dGNiaUFnSUNCcFppQW9kR2hwY3k1aWRXWmJjRzl6WFNBOFBTQXdlRGRtS1NCN1hHNGdJQ0FnSUNBZ0lIUm9hWE11Y0c5ekt5czdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQjBhR2x6TG1KMVpsdHdiM05kTzF4dUlDQWdJSDBnWld4elpTQnBaaUFvZEdocGN5NWlkV1piY0c5eklDc2dNVjBnUEQwZ01IZzNaaWtnZTF4dUlDQWdJQ0FnSUNCMGFHbHpMbkJ2Y3lBclBTQXlPMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdLSFJvYVhNdVluVm1XM0J2YzEwZ0ppQXdlRGRtS1NCOElDaDBhR2x6TG1KMVpsdHdiM01nS3lBeFhTQThQQ0EzS1R0Y2JpQWdJQ0I5SUdWc2MyVWdhV1lnS0hSb2FYTXVZblZtVzNCdmN5QXJJREpkSUR3OUlEQjROMllwSUh0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTV3YjNNZ0t6MGdNenRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJQ2gwYUdsekxtSjFabHR3YjNOZElDWWdNSGczWmlrZ2ZDQW9kR2hwY3k1aWRXWmJjRzl6SUNzZ01WMGdKaUF3ZURkbUtTQThQQ0EzSUh3Z0tIUm9hWE11WW5WbVczQnZjeUFySURKZEtTQThQQ0F4TkR0Y2JpQWdJQ0I5SUdWc2MyVWdhV1lnS0hSb2FYTXVZblZtVzNCdmN5QXJJRE5kSUR3OUlEQjROMllwSUh0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTV3YjNNZ0t6MGdORHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJQ2gwYUdsekxtSjFabHR3YjNOZElDWWdNSGczWmlrZ2ZDQW9kR2hwY3k1aWRXWmJjRzl6SUNzZ01WMGdKaUF3ZURkbUtTQThQQ0EzSUh3Z0tIUm9hWE11WW5WbVczQnZjeUFySURKZElDWWdNSGczWmlrZ1BEd2dNVFFnZkNBb2RHaHBjeTVpZFdaYmNHOXpJQ3NnTTEwcElEdzhJREl4TzF4dUlDQWdJSDBnWld4elpTQnBaaUFvZEdocGN5NWlkV1piY0c5eklDc2dORjBnUEQwZ01IZzNaaWtnZTF4dUlDQWdJQ0FnSUNCMGFHbHpMbkJ2Y3lBclBTQTFPMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdLQ2gwYUdsekxtSjFabHR3YjNOZElDWWdNSGczWmlrZ2ZDQW9kR2hwY3k1aWRXWmJjRzl6SUNzZ01WMGdKaUF3ZURkbUtTQThQQ0EzSUh3Z0tIUm9hWE11WW5WbVczQnZjeUFySURKZElDWWdNSGczWmlrZ1BEd2dNVFFnZkNBb2RHaHBjeTVpZFdaYmNHOXpJQ3NnTTEwcElEdzhJREl4S1NBcklDaDBhR2x6TG1KMVpsdHdiM01nS3lBMFhTQXFJREkyT0RRek5UUTFOaWs3WEc0Z0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lDQWdkR2hwY3k1emEybHdLRkJ5YjNSdlluVm1MbFpoY21sdWRDazdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQXdPMXh1SUNBZ0lDQWdJQ0F2THlCMGFISnZkeUJ1WlhjZ1JYSnliM0lvWENKVVQwUlBPaUJJWVc1a2JHVWdOaXNnWW5sMFpTQjJZWEpwYm5SelhDSXBPMXh1SUNBZ0lIMWNibjA3WEc1Y2JsQnliM1J2WW5WbUxuQnliM1J2ZEhsd1pTNXlaV0ZrVTFaaGNtbHVkQ0E5SUdaMWJtTjBhVzl1S0NrZ2UxeHVJQ0FnSUhaaGNpQnVkVzBnUFNCMGFHbHpMbkpsWVdSV1lYSnBiblFvS1R0Y2JpQWdJQ0JwWmlBb2JuVnRJRDRnTWpFME56UTRNelkwTnlrZ2RHaHliM2NnYm1WM0lFVnljbTl5S0NkVVQwUlBPaUJJWVc1a2JHVWdiblZ0WW1WeWN5QStQU0F5WGpNd0p5azdYRzRnSUNBZ0x5OGdlbWxuZW1GbklHVnVZMjlrYVc1blhHNGdJQ0FnY21WMGRYSnVJQ2dvYm5WdElENCtJREVwSUY0Z0xTaHVkVzBnSmlBeEtTazdYRzU5TzF4dVhHNVFjbTkwYjJKMVppNXdjbTkwYjNSNWNHVXVjbVZoWkZOMGNtbHVaeUE5SUdaMWJtTjBhVzl1S0NrZ2UxeHVJQ0FnSUhaaGNpQmllWFJsY3lBOUlIUm9hWE11Y21WaFpGWmhjbWx1ZENncE8xeHVJQ0FnSUM4dklGUlBSRTg2SUdKdmRXNWtjeUJqYUdWamEybHVaMXh1SUNBZ0lIWmhjaUJqYUhJZ1BTQlRkSEpwYm1jdVpuSnZiVU5vWVhKRGIyUmxPMXh1SUNBZ0lIWmhjaUJpSUQwZ2RHaHBjeTVpZFdZN1hHNGdJQ0FnZG1GeUlIQWdQU0IwYUdsekxuQnZjenRjYmlBZ0lDQjJZWElnWlc1a0lEMGdkR2hwY3k1d2IzTWdLeUJpZVhSbGN6dGNiaUFnSUNCMllYSWdjM1J5SUQwZ0p5YzdYRzRnSUNBZ2QyaHBiR1VnS0hBZ1BDQmxibVFwSUh0Y2JpQWdJQ0FnSUNBZ2FXWWdLR0piY0YwZ1BEMGdNSGczUmlrZ2MzUnlJQ3M5SUdOb2NpaGlXM0FySzEwcE8xeHVJQ0FnSUNBZ0lDQmxiSE5sSUdsbUlDaGlXM0JkSUR3OUlEQjRRa1lwSUhSb2NtOTNJRzVsZHlCRmNuSnZjaWduU1c1MllXeHBaQ0JWVkVZdE9DQmpiMlJsY0c5cGJuUTZJQ2NnS3lCaVczQmRLVHRjYmlBZ0lDQWdJQ0FnWld4elpTQnBaaUFvWWx0d1hTQThQU0F3ZUVSR0tTQnpkSElnS3owZ1kyaHlLQ2hpVzNBcksxMGdKaUF3ZURGR0tTQThQQ0EySUh3Z0tHSmJjQ3NyWFNBbUlEQjRNMFlwS1R0Y2JpQWdJQ0FnSUNBZ1pXeHpaU0JwWmlBb1lsdHdYU0E4UFNBd2VFVkdLU0J6ZEhJZ0t6MGdZMmh5S0NoaVczQXJLMTBnSmlBd2VERkdLU0E4UENBeE1pQjhJQ2hpVzNBcksxMGdKaUF3ZUROR0tTQThQQ0EySUh3Z0tHSmJjQ3NyWFNBbUlEQjRNMFlwS1R0Y2JpQWdJQ0FnSUNBZ1pXeHpaU0JwWmlBb1lsdHdYU0E4UFNBd2VFWTNLU0J3SUNzOUlEUTdJQzh2SUZkbElHTmhiaWQwSUdoaGJtUnNaU0IwYUdWelpTQmpiMlJsY0c5cGJuUnpJR2x1SUVwVExDQnpieUJ6YTJsd0xseHVJQ0FnSUNBZ0lDQmxiSE5sSUdsbUlDaGlXM0JkSUR3OUlEQjRSa0lwSUhBZ0t6MGdOVHRjYmlBZ0lDQWdJQ0FnWld4elpTQnBaaUFvWWx0d1hTQThQU0F3ZUVaRUtTQndJQ3M5SURZN1hHNGdJQ0FnSUNBZ0lHVnNjMlVnZEdoeWIzY2dibVYzSUVWeWNtOXlLQ2RKYm5aaGJHbGtJRlZVUmkwNElHTnZaR1Z3YjJsdWREb2dKeUFySUdKYmNGMHBPMXh1SUNBZ0lIMWNiaUFnSUNCMGFHbHpMbkJ2Y3lBclBTQmllWFJsY3p0Y2JpQWdJQ0J5WlhSMWNtNGdjM1J5TzF4dWZUdGNibHh1VUhKdmRHOWlkV1l1Y0hKdmRHOTBlWEJsTG5KbFlXUkNkV1ptWlhJZ1BTQm1kVzVqZEdsdmJpZ3BJSHRjYmlBZ0lDQjJZWElnWW5sMFpYTWdQU0IwYUdsekxuSmxZV1JXWVhKcGJuUW9LVHRjYmlBZ0lDQjJZWElnWW5WbVptVnlJRDBnZEdocGN5NWlkV1l1YzNWaVlYSnlZWGtvZEdocGN5NXdiM01zSUhSb2FYTXVjRzl6SUNzZ1lubDBaWE1wTzF4dUlDQWdJSFJvYVhNdWNHOXpJQ3M5SUdKNWRHVnpPMXh1SUNBZ0lISmxkSFZ5YmlCaWRXWm1aWEk3WEc1OU8xeHVYRzVRY205MGIySjFaaTV3Y205MGIzUjVjR1V1Y21WaFpGQmhZMnRsWkNBOUlHWjFibU4wYVc5dUtIUjVjR1VwSUh0Y2JpQWdJQ0F2THlCVVQwUlBPaUJpYjNWdVpITWdZMmhsWTJ0cGJtZGNiaUFnSUNCMllYSWdZbmwwWlhNZ1BTQjBhR2x6TG5KbFlXUldZWEpwYm5Rb0tUdGNiaUFnSUNCMllYSWdaVzVrSUQwZ2RHaHBjeTV3YjNNZ0t5QmllWFJsY3p0Y2JpQWdJQ0IyWVhJZ1lYSnlZWGtnUFNCYlhUdGNiaUFnSUNCM2FHbHNaU0FvZEdocGN5NXdiM01nUENCbGJtUXBJSHRjYmlBZ0lDQWdJQ0FnWVhKeVlYa3VjSFZ6YUNoMGFHbHpXeWR5WldGa0p5QXJJSFI1Y0dWZEtDa3BPMXh1SUNBZ0lIMWNiaUFnSUNCeVpYUjFjbTRnWVhKeVlYazdYRzU5TzF4dVhHNVFjbTkwYjJKMVppNXdjbTkwYjNSNWNHVXVjMnRwY0NBOUlHWjFibU4wYVc5dUtIWmhiQ2tnZTF4dUlDQWdJQzh2SUZSUFJFODZJR0p2ZFc1a2N5QmphR1ZqYTJsdVoxeHVJQ0FnSUhaaGNpQjBlWEJsSUQwZ2RtRnNJQ1lnTUhnM08xeHVJQ0FnSUhOM2FYUmphQ0FvZEhsd1pTa2dlMXh1SUNBZ0lDQWdJQ0F2S2lCMllYSnBiblFnS2k4Z1kyRnpaU0JRY205MGIySjFaaTVXWVhKcGJuUTZJSGRvYVd4bElDaDBhR2x6TG1KMVpsdDBhR2x6TG5CdmN5c3JYU0ErSURCNE4yWXBPeUJpY21WaGF6dGNiaUFnSUNBZ0lDQWdMeW9nTmpRZ1ltbDBJQ292SUdOaGMyVWdVSEp2ZEc5aWRXWXVTVzUwTmpRNklIUm9hWE11Y0c5eklDczlJRGc3SUdKeVpXRnJPMXh1SUNBZ0lDQWdJQ0F2S2lCc1pXNW5kR2dnS2k4Z1kyRnpaU0JRY205MGIySjFaaTVOWlhOellXZGxPaUIyWVhJZ1lubDBaWE1nUFNCMGFHbHpMbkpsWVdSV1lYSnBiblFvS1RzZ2RHaHBjeTV3YjNNZ0t6MGdZbmwwWlhNN0lHSnlaV0ZyTzF4dUlDQWdJQ0FnSUNBdktpQXpNaUJpYVhRZ0tpOGdZMkZ6WlNCUWNtOTBiMkoxWmk1SmJuUXpNam9nZEdocGN5NXdiM01nS3owZ05Ec2dZbkpsWVdzN1hHNGdJQ0FnSUNBZ0lHUmxabUYxYkhRNklIUm9jbTkzSUc1bGR5QkZjbkp2Y2lnblZXNXBiWEJzWlcxbGJuUmxaQ0IwZVhCbE9pQW5JQ3NnZEhsd1pTazdYRzRnSUNBZ2ZWeHVmVHRjYmx4dUx5OGdQVDA5SUZkU1NWUkpUa2NnUFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQxY2JseHVVSEp2ZEc5aWRXWXVjSEp2ZEc5MGVYQmxMbmR5YVhSbFZHRm5JRDBnWm5WdVkzUnBiMjRvZEdGbkxDQjBlWEJsS1NCN1hHNGdJQ0FnZEdocGN5NTNjbWwwWlZaaGNtbHVkQ2dvZEdGbklEdzhJRE1wSUh3Z2RIbHdaU2s3WEc1OU8xeHVYRzVRY205MGIySjFaaTV3Y205MGIzUjVjR1V1Y21WaGJHeHZZeUE5SUdaMWJtTjBhVzl1S0cxcGJpa2dlMXh1SUNBZ0lIWmhjaUJzWlc1bmRHZ2dQU0IwYUdsekxtSjFaaTVzWlc1bmRHZzdYRzRnSUNBZ2QyaHBiR1VnS0d4bGJtZDBhQ0E4SUhSb2FYTXVjRzl6SUNzZ2JXbHVLU0JzWlc1bmRHZ2dLajBnTWp0Y2JpQWdJQ0JwWmlBb2JHVnVaM1JvSUNFOUlIUm9hWE11WW5WbUxteGxibWQwYUNrZ2UxeHVJQ0FnSUNBZ0lDQjJZWElnWW5WbUlEMGdibVYzSUVKMVptWmxjaWhzWlc1bmRHZ3BPMXh1SUNBZ0lDQWdJQ0IwYUdsekxtSjFaaTVqYjNCNUtHSjFaaWs3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVZblZtSUQwZ1luVm1PMXh1SUNBZ0lIMWNibjA3WEc1Y2JsQnliM1J2WW5WbUxuQnliM1J2ZEhsd1pTNW1hVzVwYzJnZ1BTQm1kVzVqZEdsdmJpZ3BJSHRjYmlBZ0lDQnlaWFIxY200Z2RHaHBjeTVpZFdZdWMyeHBZMlVvTUN3Z2RHaHBjeTV3YjNNcE8xeHVmVHRjYmx4dVVISnZkRzlpZFdZdWNISnZkRzkwZVhCbExuZHlhWFJsVUdGamEyVmtJRDBnWm5WdVkzUnBiMjRvZEhsd1pTd2dkR0ZuTENCcGRHVnRjeWtnZTF4dUlDQWdJR2xtSUNnaGFYUmxiWE11YkdWdVozUm9LU0J5WlhSMWNtNDdYRzVjYmlBZ0lDQjJZWElnYldWemMyRm5aU0E5SUc1bGR5QlFjbTkwYjJKMVppZ3BPMXh1SUNBZ0lHWnZjaUFvZG1GeUlHa2dQU0F3T3lCcElEd2dhWFJsYlhNdWJHVnVaM1JvT3lCcEt5c3BJSHRjYmlBZ0lDQWdJQ0FnYldWemMyRm5aVnNuZDNKcGRHVW5JQ3NnZEhsd1pWMG9hWFJsYlhOYmFWMHBPMXh1SUNBZ0lIMWNiaUFnSUNCMllYSWdaR0YwWVNBOUlHMWxjM05oWjJVdVptbHVhWE5vS0NrN1hHNWNiaUFnSUNCMGFHbHpMbmR5YVhSbFZHRm5LSFJoWnl3Z1VISnZkRzlpZFdZdVVHRmphMlZrS1R0Y2JpQWdJQ0IwYUdsekxuZHlhWFJsUW5WbVptVnlLR1JoZEdFcE8xeHVmVHRjYmx4dVVISnZkRzlpZFdZdWNISnZkRzkwZVhCbExuZHlhWFJsVlVsdWRETXlJRDBnWm5WdVkzUnBiMjRvZG1Gc0tTQjdYRzRnSUNBZ2RHaHBjeTV5WldGc2JHOWpLRFFwTzF4dUlDQWdJSFJvYVhNdVluVm1MbmR5YVhSbFZVbHVkRE15VEVVb2RtRnNMQ0IwYUdsekxuQnZjeWs3WEc0Z0lDQWdkR2hwY3k1d2IzTWdLejBnTkR0Y2JuMDdYRzVjYmxCeWIzUnZZblZtTG5CeWIzUnZkSGx3WlM1M2NtbDBaVlJoWjJkbFpGVkpiblF6TWlBOUlHWjFibU4wYVc5dUtIUmhaeXdnZG1Gc0tTQjdYRzRnSUNBZ2RHaHBjeTUzY21sMFpWUmhaeWgwWVdjc0lGQnliM1J2WW5WbUxrbHVkRE15S1R0Y2JpQWdJQ0IwYUdsekxuZHlhWFJsVlVsdWRETXlLSFpoYkNrN1hHNTlPMXh1WEc1UWNtOTBiMkoxWmk1d2NtOTBiM1I1Y0dVdWQzSnBkR1ZXWVhKcGJuUWdQU0JtZFc1amRHbHZiaWgyWVd3cElIdGNiaUFnSUNCMllXd2dQU0JPZFcxaVpYSW9kbUZzS1R0Y2JpQWdJQ0JwWmlBb2FYTk9ZVTRvZG1Gc0tTa2dlMXh1SUNBZ0lDQWdJQ0IyWVd3Z1BTQXdPMXh1SUNBZ0lIMWNibHh1SUNBZ0lHbG1JQ2gyWVd3Z1BEMGdNSGczWmlrZ2UxeHVJQ0FnSUNBZ0lDQjBhR2x6TG5KbFlXeHNiMk1vTVNrN1hHNGdJQ0FnSUNBZ0lIUm9hWE11WW5WbVczUm9hWE11Y0c5ekt5dGRJRDBnZG1Gc08xeHVJQ0FnSUgwZ1pXeHpaU0JwWmlBb2RtRnNJRHc5SURCNE0yWm1aaWtnZTF4dUlDQWdJQ0FnSUNCMGFHbHpMbkpsWVd4c2IyTW9NaWs3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVZblZtVzNSb2FYTXVjRzl6S3l0ZElEMGdNSGc0TUNCOElDZ29kbUZzSUQ0K1BpQXdLU0FtSURCNE4yWXBPMXh1SUNBZ0lDQWdJQ0IwYUdsekxtSjFabHQwYUdsekxuQnZjeXNyWFNBOUlEQjRNREFnZkNBb0tIWmhiQ0ErUGo0Z055a2dKaUF3ZURkbUtUdGNiaUFnSUNCOUlHVnNjMlVnYVdZZ0tIWmhiQ0E4UFNBd2VERm1abVptWm1ZcElIdGNiaUFnSUNBZ0lDQWdkR2hwY3k1eVpXRnNiRzlqS0RNcE8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG1KMVpsdDBhR2x6TG5CdmN5c3JYU0E5SURCNE9EQWdmQ0FvS0haaGJDQStQajRnTUNrZ0ppQXdlRGRtS1R0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVpZFdaYmRHaHBjeTV3YjNNcksxMGdQU0F3ZURnd0lId2dLQ2gyWVd3Z1BqNCtJRGNwSUNZZ01IZzNaaWs3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVZblZtVzNSb2FYTXVjRzl6S3l0ZElEMGdNSGd3TUNCOElDZ29kbUZzSUQ0K1BpQXhOQ2tnSmlBd2VEZG1LVHRjYmlBZ0lDQjlJR1ZzYzJVZ2FXWWdLSFpoYkNBOFBTQXdlR1ptWm1abVptWXBJSHRjYmlBZ0lDQWdJQ0FnZEdocGN5NXlaV0ZzYkc5aktEUXBPMXh1SUNBZ0lDQWdJQ0IwYUdsekxtSjFabHQwYUdsekxuQnZjeXNyWFNBOUlEQjRPREFnZkNBb0tIWmhiQ0ErUGo0Z01Da2dKaUF3ZURkbUtUdGNiaUFnSUNBZ0lDQWdkR2hwY3k1aWRXWmJkR2hwY3k1d2IzTXJLMTBnUFNBd2VEZ3dJSHdnS0NoMllXd2dQajQrSURjcElDWWdNSGczWmlrN1hHNGdJQ0FnSUNBZ0lIUm9hWE11WW5WbVczUm9hWE11Y0c5ekt5dGRJRDBnTUhnNE1DQjhJQ2dvZG1Gc0lENCtQaUF4TkNrZ0ppQXdlRGRtS1R0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVpZFdaYmRHaHBjeTV3YjNNcksxMGdQU0F3ZURBd0lId2dLQ2gyWVd3Z1BqNCtJREl4S1NBbUlEQjROMllwTzF4dUlDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQWdJSGRvYVd4bElDaDJZV3dnUGlBd0tTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCMllYSWdZaUE5SUhaaGJDQW1JREI0TjJZN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IyWVd3Z1BTQk5ZWFJvTG1ac2IyOXlLSFpoYkNBdklERXlPQ2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaUFvZG1Gc0lENGdNQ2tnWWlCOFBTQXdlRGd3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TG5KbFlXeHNiMk1vTVNrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxtSjFabHQwYUdsekxuQnZjeXNyWFNBOUlHSTdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQjlYRzU5TzF4dVhHNVFjbTkwYjJKMVppNXdjbTkwYjNSNWNHVXVkM0pwZEdWVVlXZG5aV1JXWVhKcGJuUWdQU0JtZFc1amRHbHZiaWgwWVdjc0lIWmhiQ2tnZTF4dUlDQWdJSFJvYVhNdWQzSnBkR1ZVWVdjb2RHRm5MQ0JRY205MGIySjFaaTVXWVhKcGJuUXBPMXh1SUNBZ0lIUm9hWE11ZDNKcGRHVldZWEpwYm5Rb2RtRnNLVHRjYm4wN1hHNWNibEJ5YjNSdlluVm1MbkJ5YjNSdmRIbHdaUzUzY21sMFpWTldZWEpwYm5RZ1BTQm1kVzVqZEdsdmJpaDJZV3dwSUh0Y2JpQWdJQ0JwWmlBb2RtRnNJRDQ5SURBcElIdGNiaUFnSUNBZ0lDQWdkR2hwY3k1M2NtbDBaVlpoY21sdWRDaDJZV3dnS2lBeUtUdGNiaUFnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnSUNCMGFHbHpMbmR5YVhSbFZtRnlhVzUwS0haaGJDQXFJQzB5SUMwZ01TazdYRzRnSUNBZ2ZWeHVmVHRjYmx4dVVISnZkRzlpZFdZdWNISnZkRzkwZVhCbExuZHlhWFJsVkdGbloyVmtVMVpoY21sdWRDQTlJR1oxYm1OMGFXOXVLSFJoWnl3Z2RtRnNLU0I3WEc0Z0lDQWdkR2hwY3k1M2NtbDBaVlJoWnloMFlXY3NJRkJ5YjNSdlluVm1MbFpoY21sdWRDazdYRzRnSUNBZ2RHaHBjeTUzY21sMFpWTldZWEpwYm5Rb2RtRnNLVHRjYm4wN1hHNWNibEJ5YjNSdlluVm1MbkJ5YjNSdmRIbHdaUzUzY21sMFpVSnZiMnhsWVc0Z1BTQm1kVzVqZEdsdmJpaDJZV3dwSUh0Y2JpQWdJQ0IwYUdsekxuZHlhWFJsVm1GeWFXNTBLRUp2YjJ4bFlXNG9kbUZzS1NrN1hHNTlPMXh1WEc1UWNtOTBiMkoxWmk1d2NtOTBiM1I1Y0dVdWQzSnBkR1ZVWVdkblpXUkNiMjlzWldGdUlEMGdablZ1WTNScGIyNG9kR0ZuTENCMllXd3BJSHRjYmlBZ0lDQjBhR2x6TG5keWFYUmxWR0ZuWjJWa1ZtRnlhVzUwS0hSaFp5d2dRbTl2YkdWaGJpaDJZV3dwS1R0Y2JuMDdYRzVjYmxCeWIzUnZZblZtTG5CeWIzUnZkSGx3WlM1M2NtbDBaVk4wY21sdVp5QTlJR1oxYm1OMGFXOXVLSE4wY2lrZ2UxeHVJQ0FnSUhOMGNpQTlJRk4wY21sdVp5aHpkSElwTzF4dUlDQWdJSFpoY2lCaWVYUmxjeUE5SUVKMVptWmxjaTVpZVhSbFRHVnVaM1JvS0hOMGNpazdYRzRnSUNBZ2RHaHBjeTUzY21sMFpWWmhjbWx1ZENoaWVYUmxjeWs3WEc0Z0lDQWdkR2hwY3k1eVpXRnNiRzlqS0dKNWRHVnpLVHRjYmlBZ0lDQjBhR2x6TG1KMVppNTNjbWwwWlNoemRISXNJSFJvYVhNdWNHOXpLVHRjYmlBZ0lDQjBhR2x6TG5CdmN5QXJQU0JpZVhSbGN6dGNibjA3WEc1Y2JsQnliM1J2WW5WbUxuQnliM1J2ZEhsd1pTNTNjbWwwWlZSaFoyZGxaRk4wY21sdVp5QTlJR1oxYm1OMGFXOXVLSFJoWnl3Z2MzUnlLU0I3WEc0Z0lDQWdkR2hwY3k1M2NtbDBaVlJoWnloMFlXY3NJRkJ5YjNSdlluVm1MbE4wY21sdVp5azdYRzRnSUNBZ2RHaHBjeTUzY21sMFpWTjBjbWx1WnloemRISXBPMXh1ZlR0Y2JseHVVSEp2ZEc5aWRXWXVjSEp2ZEc5MGVYQmxMbmR5YVhSbFJteHZZWFFnUFNCbWRXNWpkR2x2YmloMllXd3BJSHRjYmlBZ0lDQjBhR2x6TG5KbFlXeHNiMk1vTkNrN1hHNGdJQ0FnZEdocGN5NWlkV1l1ZDNKcGRHVkdiRzloZEV4RktIWmhiQ3dnZEdocGN5NXdiM01wTzF4dUlDQWdJSFJvYVhNdWNHOXpJQ3M5SURRN1hHNTlPMXh1WEc1UWNtOTBiMkoxWmk1d2NtOTBiM1I1Y0dVdWQzSnBkR1ZVWVdkblpXUkdiRzloZENBOUlHWjFibU4wYVc5dUtIUmhaeXdnZG1Gc0tTQjdYRzRnSUNBZ2RHaHBjeTUzY21sMFpWUmhaeWgwWVdjc0lGQnliM1J2WW5WbUxrbHVkRE15S1R0Y2JpQWdJQ0IwYUdsekxuZHlhWFJsUm14dllYUW9kbUZzS1R0Y2JuMDdYRzVjYmxCeWIzUnZZblZtTG5CeWIzUnZkSGx3WlM1M2NtbDBaVVJ2ZFdKc1pTQTlJR1oxYm1OMGFXOXVLSFpoYkNrZ2UxeHVJQ0FnSUhSb2FYTXVjbVZoYkd4dll5ZzRLVHRjYmlBZ0lDQjBhR2x6TG1KMVppNTNjbWwwWlVSdmRXSnNaVXhGS0haaGJDd2dkR2hwY3k1d2IzTXBPMXh1SUNBZ0lIUm9hWE11Y0c5eklDczlJRGc3WEc1OU8xeHVYRzVRY205MGIySjFaaTV3Y205MGIzUjVjR1V1ZDNKcGRHVlVZV2RuWldSRWIzVmliR1VnUFNCbWRXNWpkR2x2YmloMFlXY3NJSFpoYkNrZ2UxeHVJQ0FnSUhSb2FYTXVkM0pwZEdWVVlXY29kR0ZuTENCUWNtOTBiMkoxWmk1SmJuUTJOQ2s3WEc0Z0lDQWdkR2hwY3k1M2NtbDBaVVJ2ZFdKc1pTaDJZV3dwTzF4dWZUdGNibHh1VUhKdmRHOWlkV1l1Y0hKdmRHOTBlWEJsTG5keWFYUmxRblZtWm1WeUlEMGdablZ1WTNScGIyNG9ZblZtWm1WeUtTQjdYRzRnSUNBZ2RtRnlJR0o1ZEdWeklEMGdZblZtWm1WeUxteGxibWQwYUR0Y2JpQWdJQ0IwYUdsekxuZHlhWFJsVm1GeWFXNTBLR0o1ZEdWektUdGNiaUFnSUNCMGFHbHpMbkpsWVd4c2IyTW9ZbmwwWlhNcE8xeHVJQ0FnSUdKMVptWmxjaTVqYjNCNUtIUm9hWE11WW5WbUxDQjBhR2x6TG5CdmN5azdYRzRnSUNBZ2RHaHBjeTV3YjNNZ0t6MGdZbmwwWlhNN1hHNTlPMXh1WEc1UWNtOTBiMkoxWmk1d2NtOTBiM1I1Y0dVdWQzSnBkR1ZVWVdkblpXUkNkV1ptWlhJZ1BTQm1kVzVqZEdsdmJpaDBZV2NzSUdKMVptWmxjaWtnZTF4dUlDQWdJSFJvYVhNdWQzSnBkR1ZVWVdjb2RHRm5MQ0JRY205MGIySjFaaTVUZEhKcGJtY3BPMXh1SUNBZ0lIUm9hWE11ZDNKcGRHVkNkV1ptWlhJb1luVm1abVZ5S1R0Y2JuMDdYRzVjYmxCeWIzUnZZblZtTG5CeWIzUnZkSGx3WlM1M2NtbDBaVTFsYzNOaFoyVWdQU0JtZFc1amRHbHZiaWgwWVdjc0lIQnliM1J2WW5WbUtTQjdYRzRnSUNBZ2RtRnlJR0oxWm1abGNpQTlJSEJ5YjNSdlluVm1MbVpwYm1semFDZ3BPMXh1SUNBZ0lIUm9hWE11ZDNKcGRHVlVZV2NvZEdGbkxDQlFjbTkwYjJKMVppNU5aWE56WVdkbEtUdGNiaUFnSUNCMGFHbHpMbmR5YVhSbFFuVm1abVZ5S0dKMVptWmxjaWs3WEc1OU8xeHVJbDE5IiwiZXhwb3J0cy5yZWFkID0gZnVuY3Rpb24oYnVmZmVyLCBvZmZzZXQsIGlzTEUsIG1MZW4sIG5CeXRlcykge1xuICB2YXIgZSwgbSxcbiAgICAgIGVMZW4gPSBuQnl0ZXMgKiA4IC0gbUxlbiAtIDEsXG4gICAgICBlTWF4ID0gKDEgPDwgZUxlbikgLSAxLFxuICAgICAgZUJpYXMgPSBlTWF4ID4+IDEsXG4gICAgICBuQml0cyA9IC03LFxuICAgICAgaSA9IGlzTEUgPyAobkJ5dGVzIC0gMSkgOiAwLFxuICAgICAgZCA9IGlzTEUgPyAtMSA6IDEsXG4gICAgICBzID0gYnVmZmVyW29mZnNldCArIGldO1xuXG4gIGkgKz0gZDtcblxuICBlID0gcyAmICgoMSA8PCAoLW5CaXRzKSkgLSAxKTtcbiAgcyA+Pj0gKC1uQml0cyk7XG4gIG5CaXRzICs9IGVMZW47XG4gIGZvciAoOyBuQml0cyA+IDA7IGUgPSBlICogMjU2ICsgYnVmZmVyW29mZnNldCArIGldLCBpICs9IGQsIG5CaXRzIC09IDgpO1xuXG4gIG0gPSBlICYgKCgxIDw8ICgtbkJpdHMpKSAtIDEpO1xuICBlID4+PSAoLW5CaXRzKTtcbiAgbkJpdHMgKz0gbUxlbjtcbiAgZm9yICg7IG5CaXRzID4gMDsgbSA9IG0gKiAyNTYgKyBidWZmZXJbb2Zmc2V0ICsgaV0sIGkgKz0gZCwgbkJpdHMgLT0gOCk7XG5cbiAgaWYgKGUgPT09IDApIHtcbiAgICBlID0gMSAtIGVCaWFzO1xuICB9IGVsc2UgaWYgKGUgPT09IGVNYXgpIHtcbiAgICByZXR1cm4gbSA/IE5hTiA6ICgocyA/IC0xIDogMSkgKiBJbmZpbml0eSk7XG4gIH0gZWxzZSB7XG4gICAgbSA9IG0gKyBNYXRoLnBvdygyLCBtTGVuKTtcbiAgICBlID0gZSAtIGVCaWFzO1xuICB9XG4gIHJldHVybiAocyA/IC0xIDogMSkgKiBtICogTWF0aC5wb3coMiwgZSAtIG1MZW4pO1xufTtcblxuZXhwb3J0cy53cml0ZSA9IGZ1bmN0aW9uKGJ1ZmZlciwgdmFsdWUsIG9mZnNldCwgaXNMRSwgbUxlbiwgbkJ5dGVzKSB7XG4gIHZhciBlLCBtLCBjLFxuICAgICAgZUxlbiA9IG5CeXRlcyAqIDggLSBtTGVuIC0gMSxcbiAgICAgIGVNYXggPSAoMSA8PCBlTGVuKSAtIDEsXG4gICAgICBlQmlhcyA9IGVNYXggPj4gMSxcbiAgICAgIHJ0ID0gKG1MZW4gPT09IDIzID8gTWF0aC5wb3coMiwgLTI0KSAtIE1hdGgucG93KDIsIC03NykgOiAwKSxcbiAgICAgIGkgPSBpc0xFID8gMCA6IChuQnl0ZXMgLSAxKSxcbiAgICAgIGQgPSBpc0xFID8gMSA6IC0xLFxuICAgICAgcyA9IHZhbHVlIDwgMCB8fCAodmFsdWUgPT09IDAgJiYgMSAvIHZhbHVlIDwgMCkgPyAxIDogMDtcblxuICB2YWx1ZSA9IE1hdGguYWJzKHZhbHVlKTtcblxuICBpZiAoaXNOYU4odmFsdWUpIHx8IHZhbHVlID09PSBJbmZpbml0eSkge1xuICAgIG0gPSBpc05hTih2YWx1ZSkgPyAxIDogMDtcbiAgICBlID0gZU1heDtcbiAgfSBlbHNlIHtcbiAgICBlID0gTWF0aC5mbG9vcihNYXRoLmxvZyh2YWx1ZSkgLyBNYXRoLkxOMik7XG4gICAgaWYgKHZhbHVlICogKGMgPSBNYXRoLnBvdygyLCAtZSkpIDwgMSkge1xuICAgICAgZS0tO1xuICAgICAgYyAqPSAyO1xuICAgIH1cbiAgICBpZiAoZSArIGVCaWFzID49IDEpIHtcbiAgICAgIHZhbHVlICs9IHJ0IC8gYztcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsdWUgKz0gcnQgKiBNYXRoLnBvdygyLCAxIC0gZUJpYXMpO1xuICAgIH1cbiAgICBpZiAodmFsdWUgKiBjID49IDIpIHtcbiAgICAgIGUrKztcbiAgICAgIGMgLz0gMjtcbiAgICB9XG5cbiAgICBpZiAoZSArIGVCaWFzID49IGVNYXgpIHtcbiAgICAgIG0gPSAwO1xuICAgICAgZSA9IGVNYXg7XG4gICAgfSBlbHNlIGlmIChlICsgZUJpYXMgPj0gMSkge1xuICAgICAgbSA9ICh2YWx1ZSAqIGMgLSAxKSAqIE1hdGgucG93KDIsIG1MZW4pO1xuICAgICAgZSA9IGUgKyBlQmlhcztcbiAgICB9IGVsc2Uge1xuICAgICAgbSA9IHZhbHVlICogTWF0aC5wb3coMiwgZUJpYXMgLSAxKSAqIE1hdGgucG93KDIsIG1MZW4pO1xuICAgICAgZSA9IDA7XG4gICAgfVxuICB9XG5cbiAgZm9yICg7IG1MZW4gPj0gODsgYnVmZmVyW29mZnNldCArIGldID0gbSAmIDB4ZmYsIGkgKz0gZCwgbSAvPSAyNTYsIG1MZW4gLT0gOCk7XG5cbiAgZSA9IChlIDw8IG1MZW4pIHwgbTtcbiAgZUxlbiArPSBtTGVuO1xuICBmb3IgKDsgZUxlbiA+IDA7IGJ1ZmZlcltvZmZzZXQgKyBpXSA9IGUgJiAweGZmLCBpICs9IGQsIGUgLz0gMjU2LCBlTGVuIC09IDgpO1xuXG4gIGJ1ZmZlcltvZmZzZXQgKyBpIC0gZF0gfD0gcyAqIDEyODtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gUG9pbnQ7XG5cbmZ1bmN0aW9uIFBvaW50KHgsIHkpIHtcbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG59XG5cblBvaW50LnByb3RvdHlwZSA9IHtcbiAgICBjbG9uZTogZnVuY3Rpb24oKSB7IHJldHVybiBuZXcgUG9pbnQodGhpcy54LCB0aGlzLnkpOyB9LFxuXG4gICAgYWRkOiAgICAgZnVuY3Rpb24ocCkgeyByZXR1cm4gdGhpcy5jbG9uZSgpLl9hZGQocCk7ICAgICB9LFxuICAgIHN1YjogICAgIGZ1bmN0aW9uKHApIHsgcmV0dXJuIHRoaXMuY2xvbmUoKS5fc3ViKHApOyAgICAgfSxcbiAgICBtdWx0OiAgICBmdW5jdGlvbihrKSB7IHJldHVybiB0aGlzLmNsb25lKCkuX211bHQoayk7ICAgIH0sXG4gICAgZGl2OiAgICAgZnVuY3Rpb24oaykgeyByZXR1cm4gdGhpcy5jbG9uZSgpLl9kaXYoayk7ICAgICB9LFxuICAgIHJvdGF0ZTogIGZ1bmN0aW9uKGEpIHsgcmV0dXJuIHRoaXMuY2xvbmUoKS5fcm90YXRlKGEpOyAgfSxcbiAgICBtYXRNdWx0OiBmdW5jdGlvbihtKSB7IHJldHVybiB0aGlzLmNsb25lKCkuX21hdE11bHQobSk7IH0sXG4gICAgdW5pdDogICAgZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzLmNsb25lKCkuX3VuaXQoKTsgfSxcbiAgICBwZXJwOiAgICBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMuY2xvbmUoKS5fcGVycCgpOyB9LFxuICAgIHJvdW5kOiAgIGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpcy5jbG9uZSgpLl9yb3VuZCgpOyB9LFxuXG4gICAgbWFnOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydCh0aGlzLnggKiB0aGlzLnggKyB0aGlzLnkgKiB0aGlzLnkpO1xuICAgIH0sXG5cbiAgICBlcXVhbHM6IGZ1bmN0aW9uKHApIHtcbiAgICAgICAgcmV0dXJuIHRoaXMueCA9PT0gcC54ICYmXG4gICAgICAgICAgICAgICB0aGlzLnkgPT09IHAueTtcbiAgICB9LFxuXG4gICAgZGlzdDogZnVuY3Rpb24ocCkge1xuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KHRoaXMuZGlzdFNxcihwKSk7XG4gICAgfSxcblxuICAgIGRpc3RTcXI6IGZ1bmN0aW9uKHApIHtcbiAgICAgICAgdmFyIGR4ID0gcC54IC0gdGhpcy54LFxuICAgICAgICAgICAgZHkgPSBwLnkgLSB0aGlzLnk7XG4gICAgICAgIHJldHVybiBkeCAqIGR4ICsgZHkgKiBkeTtcbiAgICB9LFxuXG4gICAgYW5nbGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gTWF0aC5hdGFuMih0aGlzLnksIHRoaXMueCk7XG4gICAgfSxcblxuICAgIGFuZ2xlVG86IGZ1bmN0aW9uKGIpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguYXRhbjIodGhpcy55IC0gYi55LCB0aGlzLnggLSBiLngpO1xuICAgIH0sXG5cbiAgICBhbmdsZVdpdGg6IGZ1bmN0aW9uKGIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYW5nbGVXaXRoU2VwKGIueCwgYi55KTtcbiAgICB9LFxuXG4gICAgLy8gRmluZCB0aGUgYW5nbGUgb2YgdGhlIHR3byB2ZWN0b3JzLCBzb2x2aW5nIHRoZSBmb3JtdWxhIGZvciB0aGUgY3Jvc3MgcHJvZHVjdCBhIHggYiA9IHxhfHxifHNpbijOuCkgZm9yIM64LlxuICAgIGFuZ2xlV2l0aFNlcDogZnVuY3Rpb24oeCwgeSkge1xuICAgICAgICByZXR1cm4gTWF0aC5hdGFuMihcbiAgICAgICAgICAgIHRoaXMueCAqIHkgLSB0aGlzLnkgKiB4LFxuICAgICAgICAgICAgdGhpcy54ICogeCArIHRoaXMueSAqIHkpO1xuICAgIH0sXG5cbiAgICBfbWF0TXVsdDogZnVuY3Rpb24obSkge1xuICAgICAgICB2YXIgeCA9IG1bMF0gKiB0aGlzLnggKyBtWzFdICogdGhpcy55LFxuICAgICAgICAgICAgeSA9IG1bMl0gKiB0aGlzLnggKyBtWzNdICogdGhpcy55O1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgX2FkZDogZnVuY3Rpb24ocCkge1xuICAgICAgICB0aGlzLnggKz0gcC54O1xuICAgICAgICB0aGlzLnkgKz0gcC55O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgX3N1YjogZnVuY3Rpb24ocCkge1xuICAgICAgICB0aGlzLnggLT0gcC54O1xuICAgICAgICB0aGlzLnkgLT0gcC55O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgX211bHQ6IGZ1bmN0aW9uKGspIHtcbiAgICAgICAgdGhpcy54ICo9IGs7XG4gICAgICAgIHRoaXMueSAqPSBrO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgX2RpdjogZnVuY3Rpb24oaykge1xuICAgICAgICB0aGlzLnggLz0gaztcbiAgICAgICAgdGhpcy55IC89IGs7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICBfdW5pdDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuX2Rpdih0aGlzLm1hZygpKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIF9wZXJwOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHkgPSB0aGlzLnk7XG4gICAgICAgIHRoaXMueSA9IHRoaXMueDtcbiAgICAgICAgdGhpcy54ID0gLXk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICBfcm90YXRlOiBmdW5jdGlvbihhbmdsZSkge1xuICAgICAgICB2YXIgY29zID0gTWF0aC5jb3MoYW5nbGUpLFxuICAgICAgICAgICAgc2luID0gTWF0aC5zaW4oYW5nbGUpLFxuICAgICAgICAgICAgeCA9IGNvcyAqIHRoaXMueCAtIHNpbiAqIHRoaXMueSxcbiAgICAgICAgICAgIHkgPSBzaW4gKiB0aGlzLnggKyBjb3MgKiB0aGlzLnk7XG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICBfcm91bmQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLnggPSBNYXRoLnJvdW5kKHRoaXMueCk7XG4gICAgICAgIHRoaXMueSA9IE1hdGgucm91bmQodGhpcy55KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufTtcblxuLy8gY29uc3RydWN0cyBQb2ludCBmcm9tIGFuIGFycmF5IGlmIG5lY2Vzc2FyeVxuUG9pbnQuY29udmVydCA9IGZ1bmN0aW9uIChhKSB7XG4gICAgaWYgKGEgaW5zdGFuY2VvZiBQb2ludCkge1xuICAgICAgICByZXR1cm4gYTtcbiAgICB9XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoYSkpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQb2ludChhWzBdLCBhWzFdKTtcbiAgICB9XG4gICAgcmV0dXJuIGE7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMuVmVjdG9yVGlsZSA9IHJlcXVpcmUoJy4vbGliL3ZlY3RvcnRpbGUuanMnKTtcbm1vZHVsZS5leHBvcnRzLlZlY3RvclRpbGVGZWF0dXJlID0gcmVxdWlyZSgnLi9saWIvdmVjdG9ydGlsZWZlYXR1cmUuanMnKTtcbm1vZHVsZS5leHBvcnRzLlZlY3RvclRpbGVMYXllciA9IHJlcXVpcmUoJy4vbGliL3ZlY3RvcnRpbGVsYXllci5qcycpO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgVmVjdG9yVGlsZUxheWVyID0gcmVxdWlyZSgnLi92ZWN0b3J0aWxlbGF5ZXInKTtcblxubW9kdWxlLmV4cG9ydHMgPSBWZWN0b3JUaWxlO1xuXG5mdW5jdGlvbiBWZWN0b3JUaWxlKGJ1ZmZlciwgZW5kKSB7XG5cbiAgICB0aGlzLmxheWVycyA9IHt9O1xuICAgIHRoaXMuX2J1ZmZlciA9IGJ1ZmZlcjtcblxuICAgIGVuZCA9IGVuZCB8fCBidWZmZXIubGVuZ3RoO1xuXG4gICAgd2hpbGUgKGJ1ZmZlci5wb3MgPCBlbmQpIHtcbiAgICAgICAgdmFyIHZhbCA9IGJ1ZmZlci5yZWFkVmFyaW50KCksXG4gICAgICAgICAgICB0YWcgPSB2YWwgPj4gMztcblxuICAgICAgICBpZiAodGFnID09IDMpIHtcbiAgICAgICAgICAgIHZhciBsYXllciA9IHRoaXMucmVhZExheWVyKCk7XG4gICAgICAgICAgICBpZiAobGF5ZXIubGVuZ3RoKSB0aGlzLmxheWVyc1tsYXllci5uYW1lXSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYnVmZmVyLnNraXAodmFsKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuVmVjdG9yVGlsZS5wcm90b3R5cGUucmVhZExheWVyID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGJ1ZmZlciA9IHRoaXMuX2J1ZmZlcixcbiAgICAgICAgYnl0ZXMgPSBidWZmZXIucmVhZFZhcmludCgpLFxuICAgICAgICBlbmQgPSBidWZmZXIucG9zICsgYnl0ZXMsXG4gICAgICAgIGxheWVyID0gbmV3IFZlY3RvclRpbGVMYXllcihidWZmZXIsIGVuZCk7XG5cbiAgICBidWZmZXIucG9zID0gZW5kO1xuXG4gICAgcmV0dXJuIGxheWVyO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIFBvaW50ID0gcmVxdWlyZSgncG9pbnQtZ2VvbWV0cnknKTtcblxubW9kdWxlLmV4cG9ydHMgPSBWZWN0b3JUaWxlRmVhdHVyZTtcblxuZnVuY3Rpb24gVmVjdG9yVGlsZUZlYXR1cmUoYnVmZmVyLCBlbmQsIGV4dGVudCwga2V5cywgdmFsdWVzKSB7XG5cbiAgICB0aGlzLnByb3BlcnRpZXMgPSB7fTtcblxuICAgIC8vIFB1YmxpY1xuICAgIHRoaXMuZXh0ZW50ID0gZXh0ZW50O1xuICAgIHRoaXMudHlwZSA9IDA7XG5cbiAgICAvLyBQcml2YXRlXG4gICAgdGhpcy5fYnVmZmVyID0gYnVmZmVyO1xuICAgIHRoaXMuX2dlb21ldHJ5ID0gLTE7XG5cbiAgICBlbmQgPSBlbmQgfHwgYnVmZmVyLmxlbmd0aDtcblxuICAgIHdoaWxlIChidWZmZXIucG9zIDwgZW5kKSB7XG4gICAgICAgIHZhciB2YWwgPSBidWZmZXIucmVhZFZhcmludCgpLFxuICAgICAgICAgICAgdGFnID0gdmFsID4+IDM7XG5cbiAgICAgICAgaWYgKHRhZyA9PSAxKSB7XG4gICAgICAgICAgICB0aGlzLl9pZCA9IGJ1ZmZlci5yZWFkVmFyaW50KCk7XG5cbiAgICAgICAgfSBlbHNlIGlmICh0YWcgPT0gMikge1xuICAgICAgICAgICAgdmFyIHRhZ0xlbiA9IGJ1ZmZlci5yZWFkVmFyaW50KCksXG4gICAgICAgICAgICAgICAgdGFnRW5kID0gYnVmZmVyLnBvcyArIHRhZ0xlbjtcblxuICAgICAgICAgICAgd2hpbGUgKGJ1ZmZlci5wb3MgPCB0YWdFbmQpIHtcbiAgICAgICAgICAgICAgICB2YXIga2V5ID0ga2V5c1tidWZmZXIucmVhZFZhcmludCgpXTtcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSB2YWx1ZXNbYnVmZmVyLnJlYWRWYXJpbnQoKV07XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wZXJ0aWVzW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9IGVsc2UgaWYgKHRhZyA9PSAzKSB7XG4gICAgICAgICAgICB0aGlzLnR5cGUgPSBidWZmZXIucmVhZFZhcmludCgpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAodGFnID09IDQpIHtcbiAgICAgICAgICAgIHRoaXMuX2dlb21ldHJ5ID0gYnVmZmVyLnBvcztcbiAgICAgICAgICAgIGJ1ZmZlci5za2lwKHZhbCk7XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJ1ZmZlci5za2lwKHZhbCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblZlY3RvclRpbGVGZWF0dXJlLnR5cGVzID0gWydVbmtub3duJywgJ1BvaW50JywgJ0xpbmVTdHJpbmcnLCAnUG9seWdvbiddO1xuXG5WZWN0b3JUaWxlRmVhdHVyZS5wcm90b3R5cGUubG9hZEdlb21ldHJ5ID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGJ1ZmZlciA9IHRoaXMuX2J1ZmZlcjtcbiAgICBidWZmZXIucG9zID0gdGhpcy5fZ2VvbWV0cnk7XG5cbiAgICB2YXIgYnl0ZXMgPSBidWZmZXIucmVhZFZhcmludCgpLFxuICAgICAgICBlbmQgPSBidWZmZXIucG9zICsgYnl0ZXMsXG4gICAgICAgIGNtZCA9IDEsXG4gICAgICAgIGxlbmd0aCA9IDAsXG4gICAgICAgIHggPSAwLFxuICAgICAgICB5ID0gMCxcbiAgICAgICAgbGluZXMgPSBbXSxcbiAgICAgICAgbGluZTtcblxuICAgIHdoaWxlIChidWZmZXIucG9zIDwgZW5kKSB7XG4gICAgICAgIGlmICghbGVuZ3RoKSB7XG4gICAgICAgICAgICB2YXIgY21kX2xlbmd0aCA9IGJ1ZmZlci5yZWFkVmFyaW50KCk7XG4gICAgICAgICAgICBjbWQgPSBjbWRfbGVuZ3RoICYgMHg3O1xuICAgICAgICAgICAgbGVuZ3RoID0gY21kX2xlbmd0aCA+PiAzO1xuICAgICAgICB9XG5cbiAgICAgICAgbGVuZ3RoLS07XG5cbiAgICAgICAgaWYgKGNtZCA9PT0gMSB8fCBjbWQgPT09IDIpIHtcbiAgICAgICAgICAgIHggKz0gYnVmZmVyLnJlYWRTVmFyaW50KCk7XG4gICAgICAgICAgICB5ICs9IGJ1ZmZlci5yZWFkU1ZhcmludCgpO1xuXG4gICAgICAgICAgICBpZiAoY21kID09PSAxKSB7XG4gICAgICAgICAgICAgICAgLy8gbW92ZVRvXG4gICAgICAgICAgICAgICAgaWYgKGxpbmUpIHtcbiAgICAgICAgICAgICAgICAgICAgbGluZXMucHVzaChsaW5lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGluZSA9IFtdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsaW5lLnB1c2gobmV3IFBvaW50KHgsIHkpKTtcbiAgICAgICAgfSBlbHNlIGlmIChjbWQgPT09IDcpIHtcbiAgICAgICAgICAgIC8vIGNsb3NlUG9seWdvblxuICAgICAgICAgICAgbGluZS5wdXNoKGxpbmVbMF0uY2xvbmUoKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3Vua25vd24gY29tbWFuZCAnICsgY21kKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmIChsaW5lKSBsaW5lcy5wdXNoKGxpbmUpO1xuXG4gICAgcmV0dXJuIGxpbmVzO1xufTtcblxuVmVjdG9yVGlsZUZlYXR1cmUucHJvdG90eXBlLmJib3ggPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgYnVmZmVyID0gdGhpcy5fYnVmZmVyO1xuICAgIGJ1ZmZlci5wb3MgPSB0aGlzLl9nZW9tZXRyeTtcblxuICAgIHZhciBieXRlcyA9IGJ1ZmZlci5yZWFkVmFyaW50KCksXG4gICAgICAgIGVuZCA9IGJ1ZmZlci5wb3MgKyBieXRlcyxcblxuICAgICAgICBjbWQgPSAxLFxuICAgICAgICBsZW5ndGggPSAwLFxuICAgICAgICB4ID0gMCxcbiAgICAgICAgeSA9IDAsXG4gICAgICAgIHgxID0gSW5maW5pdHksXG4gICAgICAgIHgyID0gLUluZmluaXR5LFxuICAgICAgICB5MSA9IEluZmluaXR5LFxuICAgICAgICB5MiA9IC1JbmZpbml0eTtcblxuICAgIHdoaWxlIChidWZmZXIucG9zIDwgZW5kKSB7XG4gICAgICAgIGlmICghbGVuZ3RoKSB7XG4gICAgICAgICAgICB2YXIgY21kX2xlbmd0aCA9IGJ1ZmZlci5yZWFkVmFyaW50KCk7XG4gICAgICAgICAgICBjbWQgPSBjbWRfbGVuZ3RoICYgMHg3O1xuICAgICAgICAgICAgbGVuZ3RoID0gY21kX2xlbmd0aCA+PiAzO1xuICAgICAgICB9XG5cbiAgICAgICAgbGVuZ3RoLS07XG5cbiAgICAgICAgaWYgKGNtZCA9PT0gMSB8fCBjbWQgPT09IDIpIHtcbiAgICAgICAgICAgIHggKz0gYnVmZmVyLnJlYWRTVmFyaW50KCk7XG4gICAgICAgICAgICB5ICs9IGJ1ZmZlci5yZWFkU1ZhcmludCgpO1xuICAgICAgICAgICAgaWYgKHggPCB4MSkgeDEgPSB4O1xuICAgICAgICAgICAgaWYgKHggPiB4MikgeDIgPSB4O1xuICAgICAgICAgICAgaWYgKHkgPCB5MSkgeTEgPSB5O1xuICAgICAgICAgICAgaWYgKHkgPiB5MikgeTIgPSB5O1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY21kICE9PSA3KSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3Vua25vd24gY29tbWFuZCAnICsgY21kKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBbeDEsIHkxLCB4MiwgeTJdO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIFZlY3RvclRpbGVGZWF0dXJlID0gcmVxdWlyZSgnLi92ZWN0b3J0aWxlZmVhdHVyZS5qcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFZlY3RvclRpbGVMYXllcjtcbmZ1bmN0aW9uIFZlY3RvclRpbGVMYXllcihidWZmZXIsIGVuZCkge1xuICAgIC8vIFB1YmxpY1xuICAgIHRoaXMudmVyc2lvbiA9IDE7XG4gICAgdGhpcy5uYW1lID0gbnVsbDtcbiAgICB0aGlzLmV4dGVudCA9IDQwOTY7XG4gICAgdGhpcy5sZW5ndGggPSAwO1xuXG4gICAgLy8gUHJpdmF0ZVxuICAgIHRoaXMuX2J1ZmZlciA9IGJ1ZmZlcjtcbiAgICB0aGlzLl9rZXlzID0gW107XG4gICAgdGhpcy5fdmFsdWVzID0gW107XG4gICAgdGhpcy5fZmVhdHVyZXMgPSBbXTtcblxuICAgIHZhciB2YWwsIHRhZztcblxuICAgIGVuZCA9IGVuZCB8fCBidWZmZXIubGVuZ3RoO1xuXG4gICAgd2hpbGUgKGJ1ZmZlci5wb3MgPCBlbmQpIHtcbiAgICAgICAgdmFsID0gYnVmZmVyLnJlYWRWYXJpbnQoKTtcbiAgICAgICAgdGFnID0gdmFsID4+IDM7XG5cbiAgICAgICAgaWYgKHRhZyA9PT0gMTUpIHtcbiAgICAgICAgICAgIHRoaXMudmVyc2lvbiA9IGJ1ZmZlci5yZWFkVmFyaW50KCk7XG4gICAgICAgIH0gZWxzZSBpZiAodGFnID09PSAxKSB7XG4gICAgICAgICAgICB0aGlzLm5hbWUgPSBidWZmZXIucmVhZFN0cmluZygpO1xuICAgICAgICB9IGVsc2UgaWYgKHRhZyA9PT0gNSkge1xuICAgICAgICAgICAgdGhpcy5leHRlbnQgPSBidWZmZXIucmVhZFZhcmludCgpO1xuICAgICAgICB9IGVsc2UgaWYgKHRhZyA9PT0gMikge1xuICAgICAgICAgICAgdGhpcy5sZW5ndGgrKztcbiAgICAgICAgICAgIHRoaXMuX2ZlYXR1cmVzLnB1c2goYnVmZmVyLnBvcyk7XG4gICAgICAgICAgICBidWZmZXIuc2tpcCh2YWwpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAodGFnID09PSAzKSB7XG4gICAgICAgICAgICB0aGlzLl9rZXlzLnB1c2goYnVmZmVyLnJlYWRTdHJpbmcoKSk7XG4gICAgICAgIH0gZWxzZSBpZiAodGFnID09PSA0KSB7XG4gICAgICAgICAgICB0aGlzLl92YWx1ZXMucHVzaCh0aGlzLnJlYWRGZWF0dXJlVmFsdWUoKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBidWZmZXIuc2tpcCh2YWwpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5WZWN0b3JUaWxlTGF5ZXIucHJvdG90eXBlLnJlYWRGZWF0dXJlVmFsdWUgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgYnVmZmVyID0gdGhpcy5fYnVmZmVyLFxuICAgICAgICB2YWx1ZSA9IG51bGwsXG4gICAgICAgIGJ5dGVzID0gYnVmZmVyLnJlYWRWYXJpbnQoKSxcbiAgICAgICAgZW5kID0gYnVmZmVyLnBvcyArIGJ5dGVzLFxuICAgICAgICB2YWwsIHRhZztcblxuICAgIHdoaWxlIChidWZmZXIucG9zIDwgZW5kKSB7XG4gICAgICAgIHZhbCA9IGJ1ZmZlci5yZWFkVmFyaW50KCk7XG4gICAgICAgIHRhZyA9IHZhbCA+PiAzO1xuXG4gICAgICAgIGlmICh0YWcgPT0gMSkge1xuICAgICAgICAgICAgdmFsdWUgPSBidWZmZXIucmVhZFN0cmluZygpO1xuICAgICAgICB9IGVsc2UgaWYgKHRhZyA9PSAyKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3JlYWQgZmxvYXQnKTtcbiAgICAgICAgfSBlbHNlIGlmICh0YWcgPT0gMykge1xuICAgICAgICAgICAgdmFsdWUgPSBidWZmZXIucmVhZERvdWJsZSgpO1xuICAgICAgICB9IGVsc2UgaWYgKHRhZyA9PSA0KSB7XG4gICAgICAgICAgICB2YWx1ZSA9IGJ1ZmZlci5yZWFkVmFyaW50KCk7XG4gICAgICAgIH0gZWxzZSBpZiAodGFnID09IDUpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigncmVhZCB1aW50Jyk7XG4gICAgICAgIH0gZWxzZSBpZiAodGFnID09IDYpIHtcbiAgICAgICAgICAgIHZhbHVlID0gYnVmZmVyLnJlYWRTVmFyaW50KCk7XG4gICAgICAgIH0gZWxzZSBpZiAodGFnID09IDcpIHtcbiAgICAgICAgICAgIHZhbHVlID0gQm9vbGVhbihidWZmZXIucmVhZFZhcmludCgpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJ1ZmZlci5za2lwKHZhbCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWU7XG59O1xuXG4vLyByZXR1cm4gZmVhdHVyZSBgaWAgZnJvbSB0aGlzIGxheWVyIGFzIGEgYFZlY3RvclRpbGVGZWF0dXJlYFxuVmVjdG9yVGlsZUxheWVyLnByb3RvdHlwZS5mZWF0dXJlID0gZnVuY3Rpb24oaSkge1xuICAgIGlmIChpIDwgMCB8fCBpID49IHRoaXMuX2ZlYXR1cmVzLmxlbmd0aCkgdGhyb3cgbmV3IEVycm9yKCdmZWF0dXJlIGluZGV4IG91dCBvZiBib3VuZHMnKTtcblxuICAgIHRoaXMuX2J1ZmZlci5wb3MgPSB0aGlzLl9mZWF0dXJlc1tpXTtcbiAgICB2YXIgZW5kID0gdGhpcy5fYnVmZmVyLnJlYWRWYXJpbnQoKSArIHRoaXMuX2J1ZmZlci5wb3M7XG5cbiAgICByZXR1cm4gbmV3IFZlY3RvclRpbGVGZWF0dXJlKHRoaXMuX2J1ZmZlciwgZW5kLCB0aGlzLmV4dGVudCwgdGhpcy5fa2V5cywgdGhpcy5fdmFsdWVzKTtcbn07XG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgUnlhbiBXaGl0bGV5LCBEYW5pZWwgRHVhcnRlLCBhbmQgTmljaG9sYXMgSGFsbGFoYW5cbiAqICAgIG9uIDYvMDMvMTQuXG4gKi9cbnZhciBVdGlsID0gcmVxdWlyZSgnLi9NVlRVdGlsJyk7XG52YXIgU3RhdGljTGFiZWwgPSByZXF1aXJlKCcuL1N0YXRpY0xhYmVsL1N0YXRpY0xhYmVsLmpzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gTVZURmVhdHVyZTtcblxuZnVuY3Rpb24gTVZURmVhdHVyZShtdnRMYXllciwgdnRmLCBjdHgsIGlkLCBzdHlsZSkge1xuICBpZiAoIXZ0ZikgcmV0dXJuIG51bGw7XG5cbiAgLy8gQXBwbHkgYWxsIG9mIHRoZSBwcm9wZXJ0aWVzIG9mIHZ0ZiB0byB0aGlzIG9iamVjdC5cbiAgZm9yICh2YXIga2V5IGluIHZ0Zikge1xuICAgIHRoaXNba2V5XSA9IHZ0ZltrZXldO1xuICB9XG5cbiAgdGhpcy5tdnRMYXllciA9IG12dExheWVyO1xuICB0aGlzLm12dFNvdXJjZSA9IG12dExheWVyLm12dFNvdXJjZTtcbiAgdGhpcy5tYXAgPSBtdnRMYXllci5tdnRTb3VyY2UubWFwO1xuXG4gIHRoaXMuaWQgPSBpZDtcblxuICB0aGlzLmxheWVyTGluayA9IHRoaXMubXZ0U291cmNlLmxheWVyTGluaztcbiAgdGhpcy50b2dnbGVFbmFibGVkID0gdHJ1ZTtcbiAgdGhpcy5zZWxlY3RlZCA9IGZhbHNlO1xuXG4gIC8vIGhvdyBtdWNoIHdlIGRpdmlkZSB0aGUgY29vcmRpbmF0ZSBmcm9tIHRoZSB2ZWN0b3IgdGlsZVxuICB0aGlzLmRpdmlzb3IgPSB2dGYuZXh0ZW50IC8gY3R4LnRpbGVTaXplO1xuICB0aGlzLmV4dGVudCA9IHZ0Zi5leHRlbnQ7XG4gIHRoaXMudGlsZVNpemUgPSBjdHgudGlsZVNpemU7XG5cbiAgLy9BbiBvYmplY3QgdG8gc3RvcmUgdGhlIHBhdGhzIGFuZCBjb250ZXh0cyBmb3IgdGhpcyBmZWF0dXJlXG4gIHRoaXMudGlsZXMgPSB7fTtcblxuICB0aGlzLnN0eWxlID0gc3R5bGU7XG5cbiAgLy9BZGQgdG8gdGhlIGNvbGxlY3Rpb25cbiAgdGhpcy5hZGRUaWxlRmVhdHVyZSh2dGYsIGN0eCk7XG5cbiAgdmFyIHNlbGYgPSB0aGlzO1xuICB0aGlzLm1hcC5vbignem9vbWVuZCcsIGZ1bmN0aW9uKCkge1xuICAgIHNlbGYuc3RhdGljTGFiZWwgPSBudWxsO1xuICB9KTtcblxuICBpZiAoc3R5bGUgJiYgc3R5bGUuZHluYW1pY0xhYmVsICYmIHR5cGVvZiBzdHlsZS5keW5hbWljTGFiZWwgPT09ICdmdW5jdGlvbicpIHtcbiAgICB0aGlzLmR5bmFtaWNMYWJlbCA9IHRoaXMubXZ0U291cmNlLmR5bmFtaWNMYWJlbC5jcmVhdGVGZWF0dXJlKHRoaXMpO1xuICB9XG5cbiAgYWpheChzZWxmKTtcbn1cblxuXG5mdW5jdGlvbiBhamF4KHNlbGYpIHtcbiAgdmFyIHN0eWxlID0gc2VsZi5zdHlsZTtcbiAgaWYgKHN0eWxlICYmIHN0eWxlLmFqYXhTb3VyY2UgJiYgdHlwZW9mIHN0eWxlLmFqYXhTb3VyY2UgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgYWpheEVuZHBvaW50ID0gc3R5bGUuYWpheFNvdXJjZShzZWxmKTtcbiAgICBpZiAoYWpheEVuZHBvaW50KSB7XG4gICAgICBVdGlsLmdldEpTT04oYWpheEVuZHBvaW50LCBmdW5jdGlvbihlcnJvciwgcmVzcG9uc2UsIGJvZHkpIHtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgdGhyb3cgWydhamF4U291cmNlIEFKQVggRXJyb3InLCBlcnJvcl07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYWpheENhbGxiYWNrKHNlbGYsIHJlc3BvbnNlKTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gYWpheENhbGxiYWNrKHNlbGYsIHJlc3BvbnNlKSB7XG4gIHNlbGYuYWpheERhdGEgPSByZXNwb25zZTtcblxuICAvKipcbiAgICogWW91IGNhbiBhdHRhY2ggYSBjYWxsYmFjayBmdW5jdGlvbiB0byBhIGZlYXR1cmUgaW4geW91ciBhcHBcbiAgICogdGhhdCB3aWxsIGdldCBjYWxsZWQgd2hlbmV2ZXIgbmV3IGFqYXhEYXRhIGNvbWVzIGluLiBUaGlzXG4gICAqIGNhbiBiZSB1c2VkIHRvIHVwZGF0ZSBVSSB0aGF0IGxvb2tzIGF0IGRhdGEgZnJvbSB3aXRoaW4gYSBmZWF0dXJlLlxuICAgKlxuICAgKiBzZXRTdHlsZSBtYXkgcG9zc2libHkgaGF2ZSBhIHN0eWxlIHdpdGggYSBkaWZmZXJlbnQgYWpheERhdGEgc291cmNlLFxuICAgKiBhbmQgeW91IHdvdWxkIHBvdGVudGlhbGx5IGdldCBuZXcgY29udGV4dHVhbCBkYXRhIGZvciB5b3VyIGZlYXR1cmUuXG4gICAqXG4gICAqIFRPRE86IFRoaXMgbmVlZHMgdG8gYmUgZG9jdW1lbnRlZC5cbiAgICovXG4gIGlmICh0eXBlb2Ygc2VsZi5hamF4RGF0YVJlY2VpdmVkID09PSAnZnVuY3Rpb24nKSB7XG4gICAgc2VsZi5hamF4RGF0YVJlY2VpdmVkKHNlbGYsIHJlc3BvbnNlKTtcbiAgfVxuXG4gIHNlbGYuX3NldFN0eWxlKHNlbGYubXZ0TGF5ZXIuc3R5bGUpO1xuICByZWRyYXdUaWxlcyhzZWxmKTtcbn1cblxuTVZURmVhdHVyZS5wcm90b3R5cGUuX3NldFN0eWxlID0gZnVuY3Rpb24oc3R5bGVGbikge1xuICB0aGlzLnN0eWxlID0gc3R5bGVGbih0aGlzLCB0aGlzLmFqYXhEYXRhKTtcblxuICAvLyBUaGUgbGFiZWwgZ2V0cyByZW1vdmVkLCBhbmQgdGhlIChyZSlkcmF3LFxuICAvLyB0aGF0IGlzIGluaXRpYXRlZCBieSB0aGUgTVZUTGF5ZXIgY3JlYXRlcyBhIG5ldyBsYWJlbC5cbiAgdGhpcy5yZW1vdmVMYWJlbCgpO1xufTtcblxuTVZURmVhdHVyZS5wcm90b3R5cGUuc2V0U3R5bGUgPSBmdW5jdGlvbihzdHlsZUZuKSB7XG4gIHRoaXMuYWpheERhdGEgPSBudWxsO1xuICB0aGlzLnN0eWxlID0gc3R5bGVGbih0aGlzLCBudWxsKTtcbiAgdmFyIGhhc0FqYXhTb3VyY2UgPSBhamF4KHRoaXMpO1xuICBpZiAoIWhhc0FqYXhTb3VyY2UpIHtcbiAgICAvLyBUaGUgbGFiZWwgZ2V0cyByZW1vdmVkLCBhbmQgdGhlIChyZSlkcmF3LFxuICAgIC8vIHRoYXQgaXMgaW5pdGlhdGVkIGJ5IHRoZSBNVlRMYXllciBjcmVhdGVzIGEgbmV3IGxhYmVsLlxuICAgIHRoaXMucmVtb3ZlTGFiZWwoKTtcbiAgfVxufTtcblxuTVZURmVhdHVyZS5wcm90b3R5cGUuZHJhdyA9IGZ1bmN0aW9uKGNhbnZhc0lEKSB7XG4gIC8vR2V0IHRoZSBpbmZvIGZyb20gdGhlIHRpbGVzIGxpc3RcbiAgdmFyIHRpbGVJbmZvID0gIHRoaXMudGlsZXNbY2FudmFzSURdO1xuXG4gIHZhciB2dGYgPSB0aWxlSW5mby52dGY7XG4gIHZhciBjdHggPSB0aWxlSW5mby5jdHg7XG5cbiAgLy9HZXQgdGhlIGFjdHVhbCBjYW52YXMgZnJvbSB0aGUgcGFyZW50IGxheWVyJ3MgX3RpbGVzIG9iamVjdC5cbiAgdmFyIHh5ID0gY2FudmFzSUQuc3BsaXQoXCI6XCIpLnNsaWNlKDEsIDMpLmpvaW4oXCI6XCIpO1xuICBjdHguY2FudmFzID0gdGhpcy5tdnRMYXllci5fdGlsZXNbeHldO1xuXG4vLyAgVGhpcyBjb3VsZCBiZSB1c2VkIHRvIGRpcmVjdGx5IGNvbXB1dGUgdGhlIHN0eWxlIGZ1bmN0aW9uIGZyb20gdGhlIGxheWVyIG9uIGV2ZXJ5IGRyYXcuXG4vLyAgVGhpcyBpcyBtdWNoIGxlc3MgZWZmaWNpZW50Li4uXG4vLyAgdGhpcy5zdHlsZSA9IHRoaXMubXZ0TGF5ZXIuc3R5bGUodGhpcyk7XG5cbiAgaWYgKHRoaXMuc2VsZWN0ZWQpIHtcbiAgICB2YXIgc3R5bGUgPSB0aGlzLnN0eWxlLnNlbGVjdGVkIHx8IHRoaXMuc3R5bGU7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHN0eWxlID0gdGhpcy5zdHlsZTtcbiAgfVxuXG4gIHN3aXRjaCAodnRmLnR5cGUpIHtcbiAgICBjYXNlIDE6IC8vUG9pbnRcbiAgICAgIHRoaXMuX2RyYXdQb2ludChjdHgsIHZ0Zi5jb29yZGluYXRlcywgc3R5bGUpO1xuICAgICAgaWYgKCF0aGlzLnN0YXRpY0xhYmVsICYmIHR5cGVvZiB0aGlzLnN0eWxlLnN0YXRpY0xhYmVsID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGlmICh0aGlzLnN0eWxlLmFqYXhTb3VyY2UgJiYgIXRoaXMuYWpheERhdGEpIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9kcmF3U3RhdGljTGFiZWwoY3R4LCB2dGYuY29vcmRpbmF0ZXMsIHN0eWxlKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAyOiAvL0xpbmVTdHJpbmdcbiAgICAgIHRoaXMuX2RyYXdMaW5lU3RyaW5nKGN0eCwgdnRmLmNvb3JkaW5hdGVzLCBzdHlsZSk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgMzogLy9Qb2x5Z29uXG4gICAgICB0aGlzLl9kcmF3UG9seWdvbihjdHgsIHZ0Zi5jb29yZGluYXRlcywgc3R5bGUpO1xuICAgICAgYnJlYWs7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbm1hbmFnZWQgdHlwZTogJyArIHZ0Zi50eXBlKTtcbiAgfVxuXG59O1xuXG5NVlRGZWF0dXJlLnByb3RvdHlwZS5nZXRQYXRoc0ZvclRpbGUgPSBmdW5jdGlvbihjYW52YXNJRCkge1xuICAvL0dldCB0aGUgaW5mbyBmcm9tIHRoZSBwYXJ0cyBsaXN0XG4gIHJldHVybiB0aGlzLnRpbGVzW2NhbnZhc0lEXS5wYXRocztcbn07XG5cbk1WVEZlYXR1cmUucHJvdG90eXBlLmFkZFRpbGVGZWF0dXJlID0gZnVuY3Rpb24odnRmLCBjdHgpIHtcbiAgLy9TdG9yZSB0aGUgaW1wb3J0YW50IGl0ZW1zIGluIHRoZSB0aWxlcyBsaXN0XG5cbiAgLy9XZSBvbmx5IHdhbnQgdG8gc3RvcmUgaW5mbyBmb3IgdGlsZXMgZm9yIHRoZSBjdXJyZW50IG1hcCB6b29tLiAgSWYgaXQgaXMgdGlsZSBpbmZvIGZvciBhbm90aGVyIHpvb20gbGV2ZWwsIGlnbm9yZSBpdFxuICAvL0Fsc28sIGlmIHRoZXJlIGFyZSBleGlzdGluZyB0aWxlcyBpbiB0aGUgbGlzdCBmb3Igb3RoZXIgem9vbSBsZXZlbHMsIGV4cHVuZ2UgdGhlbS5cbiAgdmFyIHpvb20gPSB0aGlzLm1hcC5nZXRab29tKCk7XG5cbiAgaWYoY3R4Lnpvb20gIT0gem9vbSkgcmV0dXJuO1xuXG4gIHRoaXMuY2xlYXJUaWxlRmVhdHVyZXMoem9vbSk7IC8vVE9ETzogVGhpcyBpdGVyYXRlcyB0aHJ1IGFsbCB0aWxlcyBldmVyeSB0aW1lIGEgbmV3IHRpbGUgaXMgYWRkZWQuICBGaWd1cmUgb3V0IGEgYmV0dGVyIHdheSB0byBkbyB0aGlzLlxuXG4gIHRoaXMudGlsZXNbY3R4LmlkXSA9IHtcbiAgICBjdHg6IGN0eCxcbiAgICB2dGY6IHZ0ZixcbiAgICBwYXRoczogW11cbiAgfTtcblxufTtcblxuXG4vKipcbiAqIENsZWFyIHRoZSBpbm5lciBsaXN0IG9mIHRpbGUgZmVhdHVyZXMgaWYgdGhleSBkb24ndCBtYXRjaCB0aGUgZ2l2ZW4gem9vbS5cbiAqXG4gKiBAcGFyYW0gem9vbVxuICovXG5NVlRGZWF0dXJlLnByb3RvdHlwZS5jbGVhclRpbGVGZWF0dXJlcyA9IGZ1bmN0aW9uKHpvb20pIHtcbiAgLy9JZiBzdG9yZWQgdGlsZXMgZXhpc3QgZm9yIG90aGVyIHpvb20gbGV2ZWxzLCBleHB1bmdlIHRoZW0gZnJvbSB0aGUgbGlzdC5cbiAgZm9yICh2YXIga2V5IGluIHRoaXMudGlsZXMpIHtcbiAgICAgaWYoa2V5LnNwbGl0KFwiOlwiKVswXSAhPSB6b29tKSBkZWxldGUgdGhpcy50aWxlc1trZXldO1xuICB9XG59O1xuXG4vKipcbiAqIFJlZHJhd3MgYWxsIG9mIHRoZSB0aWxlcyBhc3NvY2lhdGVkIHdpdGggYSBmZWF0dXJlLiBVc2VmdWwgZm9yXG4gKiBzdHlsZSBjaGFuZ2UgYW5kIHRvZ2dsaW5nLlxuICpcbiAqIEBwYXJhbSBzZWxmXG4gKi9cbmZ1bmN0aW9uIHJlZHJhd1RpbGVzKHNlbGYpIHtcbiAgLy9SZWRyYXcgdGhlIHdob2xlIHRpbGUsIG5vdCBqdXN0IHRoaXMgdnRmXG4gIHZhciB0aWxlcyA9IHNlbGYudGlsZXM7XG4gIHZhciBtdnRMYXllciA9IHNlbGYubXZ0TGF5ZXI7XG5cbiAgZm9yICh2YXIgaWQgaW4gdGlsZXMpIHtcbiAgICB2YXIgdGlsZVpvb20gPSBwYXJzZUludChpZC5zcGxpdCgnOicpWzBdKTtcbiAgICB2YXIgbWFwWm9vbSA9IHNlbGYubWFwLmdldFpvb20oKTtcbiAgICBpZiAodGlsZVpvb20gPT09IG1hcFpvb20pIHtcbiAgICAgIC8vUmVkcmF3IHRoZSB0aWxlXG4gICAgICBtdnRMYXllci5yZWRyYXdUaWxlKGlkKTtcbiAgICB9XG4gIH1cbn1cblxuTVZURmVhdHVyZS5wcm90b3R5cGUudG9nZ2xlID0gZnVuY3Rpb24oKSB7XG4gIGlmICh0aGlzLnNlbGVjdGVkKSB7XG4gICAgdGhpcy5kZXNlbGVjdCgpO1xuICB9IGVsc2Uge1xuICAgIHRoaXMuc2VsZWN0KCk7XG4gIH1cbn07XG5cbk1WVEZlYXR1cmUucHJvdG90eXBlLnNlbGVjdCA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLnNlbGVjdGVkID0gdHJ1ZTtcbiAgdGhpcy5tdnRTb3VyY2UuZmVhdHVyZVNlbGVjdGVkKHRoaXMpO1xuICByZWRyYXdUaWxlcyh0aGlzKTtcbiAgdmFyIGxpbmtlZEZlYXR1cmUgPSB0aGlzLmxpbmtlZEZlYXR1cmUoKTtcbiAgaWYgKGxpbmtlZEZlYXR1cmUgJiYgbGlua2VkRmVhdHVyZS5zdGF0aWNMYWJlbCAmJiAhbGlua2VkRmVhdHVyZS5zdGF0aWNMYWJlbC5zZWxlY3RlZCkge1xuICAgIGxpbmtlZEZlYXR1cmUuc3RhdGljTGFiZWwuc2VsZWN0KCk7XG4gIH1cbn07XG5cbk1WVEZlYXR1cmUucHJvdG90eXBlLmRlc2VsZWN0ID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuc2VsZWN0ZWQgPSBmYWxzZTtcbiAgdGhpcy5tdnRTb3VyY2UuZmVhdHVyZURlc2VsZWN0ZWQodGhpcyk7XG4gIHJlZHJhd1RpbGVzKHRoaXMpO1xuICB2YXIgbGlua2VkRmVhdHVyZSA9IHRoaXMubGlua2VkRmVhdHVyZSgpO1xuICBpZiAobGlua2VkRmVhdHVyZSAmJiBsaW5rZWRGZWF0dXJlLnN0YXRpY0xhYmVsICYmIGxpbmtlZEZlYXR1cmUuc3RhdGljTGFiZWwuc2VsZWN0ZWQpIHtcbiAgICBsaW5rZWRGZWF0dXJlLnN0YXRpY0xhYmVsLmRlc2VsZWN0KCk7XG4gIH1cbn07XG5cbk1WVEZlYXR1cmUucHJvdG90eXBlLm9uID0gZnVuY3Rpb24oZXZlbnRUeXBlLCBjYWxsYmFjaykge1xuICB0aGlzLl9ldmVudEhhbmRsZXJzW2V2ZW50VHlwZV0gPSBjYWxsYmFjaztcbn07XG5cbk1WVEZlYXR1cmUucHJvdG90eXBlLl9kcmF3UG9pbnQgPSBmdW5jdGlvbihjdHgsIGNvb3Jkc0FycmF5LCBzdHlsZSkge1xuICBpZiAoIXN0eWxlKSByZXR1cm47XG4gIGlmICghY3R4IHx8ICFjdHguY2FudmFzKSByZXR1cm47XG5cbiAgdmFyIHRpbGUgPSB0aGlzLnRpbGVzW2N0eC5pZF07XG5cbiAgLy9HZXQgcmFkaXVzXG4gIHZhciByYWRpdXMgPSAxO1xuICBpZiAodHlwZW9mIHN0eWxlLnJhZGl1cyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJhZGl1cyA9IHN0eWxlLnJhZGl1cyhjdHguem9vbSk7IC8vQWxsb3dzIGZvciBzY2FsZSBkZXBlbmRlbnQgcmVkbmVyaW5nXG4gIH1cbiAgZWxzZXtcbiAgICByYWRpdXMgPSBzdHlsZS5yYWRpdXM7XG4gIH1cblxuICB2YXIgcCA9IHRoaXMuX3RpbGVQb2ludChjb29yZHNBcnJheVswXVswXSk7XG4gIHZhciBjID0gY3R4LmNhbnZhcztcbiAgdmFyIGN0eDJkO1xuICB0cnl7XG4gICAgY3R4MmQgPSBjLmdldENvbnRleHQoJzJkJyk7XG4gIH1cbiAgY2F0Y2goZSl7XG4gICAgY29uc29sZS5sb2coXCJfZHJhd1BvaW50IGVycm9yOiBcIiArIGUpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGN0eDJkLmJlZ2luUGF0aCgpO1xuICBjdHgyZC5maWxsU3R5bGUgPSBzdHlsZS5jb2xvcjtcbiAgY3R4MmQuYXJjKHAueCwgcC55LCByYWRpdXMsIDAsIE1hdGguUEkgKiAyKTtcbiAgY3R4MmQuY2xvc2VQYXRoKCk7XG4gIGN0eDJkLmZpbGwoKTtcblxuICBpZihzdHlsZS5saW5lV2lkdGggJiYgc3R5bGUuc3Ryb2tlU3R5bGUpe1xuICAgIGN0eDJkLmxpbmVXaWR0aCA9IHN0eWxlLmxpbmVXaWR0aDtcbiAgICBjdHgyZC5zdHJva2VTdHlsZSA9IHN0eWxlLnN0cm9rZVN0eWxlO1xuICAgIGN0eDJkLnN0cm9rZSgpO1xuICB9XG5cbiAgY3R4MmQucmVzdG9yZSgpO1xuICB0aWxlLnBhdGhzLnB1c2goW3BdKTtcbn07XG5cbk1WVEZlYXR1cmUucHJvdG90eXBlLl9kcmF3TGluZVN0cmluZyA9IGZ1bmN0aW9uKGN0eCwgY29vcmRzQXJyYXksIHN0eWxlKSB7XG4gIGlmICghc3R5bGUpIHJldHVybjtcbiAgaWYgKCFjdHggfHwgIWN0eC5jYW52YXMpIHJldHVybjtcblxuICB2YXIgY3R4MmQgPSBjdHguY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gIGN0eDJkLnN0cm9rZVN0eWxlID0gc3R5bGUuY29sb3I7XG4gIGN0eDJkLmxpbmVXaWR0aCA9IHN0eWxlLnNpemU7XG4gIGN0eDJkLmJlZ2luUGF0aCgpO1xuXG4gIHZhciBwcm9qQ29vcmRzID0gW107XG4gIHZhciB0aWxlID0gdGhpcy50aWxlc1tjdHguaWRdO1xuXG4gIGZvciAodmFyIGdpZHggaW4gY29vcmRzQXJyYXkpIHtcbiAgICB2YXIgY29vcmRzID0gY29vcmRzQXJyYXlbZ2lkeF07XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgY29vcmRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgbWV0aG9kID0gKGkgPT09IDAgPyAnbW92ZScgOiAnbGluZScpICsgJ1RvJztcbiAgICAgIHZhciBwcm9qID0gdGhpcy5fdGlsZVBvaW50KGNvb3Jkc1tpXSk7XG4gICAgICBwcm9qQ29vcmRzLnB1c2gocHJvaik7XG4gICAgICBjdHgyZFttZXRob2RdKHByb2oueCwgcHJvai55KTtcbiAgICB9XG4gIH1cblxuICBjdHgyZC5zdHJva2UoKTtcbiAgY3R4MmQucmVzdG9yZSgpO1xuXG4gIHRpbGUucGF0aHMucHVzaChwcm9qQ29vcmRzKTtcbn07XG5cbk1WVEZlYXR1cmUucHJvdG90eXBlLl9kcmF3UG9seWdvbiA9IGZ1bmN0aW9uKGN0eCwgY29vcmRzQXJyYXksIHN0eWxlKSB7XG4gIGlmICghc3R5bGUpIHJldHVybjtcbiAgaWYgKCFjdHggfHwgIWN0eC5jYW52YXMpIHJldHVybjtcblxuICB2YXIgY3R4MmQgPSBjdHguY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gIHZhciBvdXRsaW5lID0gc3R5bGUub3V0bGluZTtcblxuICAvLyBjb2xvciBtYXkgYmUgZGVmaW5lZCB2aWEgZnVuY3Rpb24gdG8gbWFrZSBjaG9yb3BsZXRoIHdvcmsgcmlnaHRcbiAgaWYgKHR5cGVvZiBzdHlsZS5jb2xvciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGN0eDJkLmZpbGxTdHlsZSA9IHN0eWxlLmNvbG9yKGN0eDJkKTtcbiAgfSBlbHNlIHtcbiAgICBjdHgyZC5maWxsU3R5bGUgPSBzdHlsZS5jb2xvcjtcbiAgfVxuXG4gIGlmIChvdXRsaW5lKSB7XG4gICAgY3R4MmQuc3Ryb2tlU3R5bGUgPSBvdXRsaW5lLmNvbG9yO1xuICAgIGN0eDJkLmxpbmVXaWR0aCA9IG91dGxpbmUuc2l6ZTtcbiAgfVxuICBjdHgyZC5iZWdpblBhdGgoKTtcblxuICB2YXIgcHJvakNvb3JkcyA9IFtdO1xuICB2YXIgdGlsZSA9IHRoaXMudGlsZXNbY3R4LmlkXTtcblxuICB2YXIgZmVhdHVyZUxhYmVsID0gdGhpcy5keW5hbWljTGFiZWw7XG4gIGlmIChmZWF0dXJlTGFiZWwpIHtcbiAgICBmZWF0dXJlTGFiZWwuYWRkVGlsZVBvbHlzKGN0eCwgY29vcmRzQXJyYXkpO1xuICB9XG5cbiAgZm9yICh2YXIgZ2lkeCA9IDAsIGxlbiA9IGNvb3Jkc0FycmF5Lmxlbmd0aDsgZ2lkeCA8IGxlbjsgZ2lkeCsrKSB7XG4gICAgdmFyIGNvb3JkcyA9IGNvb3Jkc0FycmF5W2dpZHhdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb29yZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBjb29yZCA9IGNvb3Jkc1tpXTtcbiAgICAgIHZhciBtZXRob2QgPSAoaSA9PT0gMCA/ICdtb3ZlJyA6ICdsaW5lJykgKyAnVG8nO1xuICAgICAgdmFyIHByb2ogPSB0aGlzLl90aWxlUG9pbnQoY29vcmRzW2ldKTtcbiAgICAgIHByb2pDb29yZHMucHVzaChwcm9qKTtcbiAgICAgIGN0eDJkW21ldGhvZF0ocHJvai54LCBwcm9qLnkpO1xuICAgIH1cbiAgfVxuXG4gIGN0eDJkLmNsb3NlUGF0aCgpO1xuICBjdHgyZC5maWxsKCk7XG4gIGlmIChvdXRsaW5lKSB7XG4gICAgY3R4MmQuc3Ryb2tlKCk7XG4gIH1cblxuICB0aWxlLnBhdGhzLnB1c2gocHJvakNvb3Jkcyk7XG5cbn07XG5cbk1WVEZlYXR1cmUucHJvdG90eXBlLl9kcmF3U3RhdGljTGFiZWwgPSBmdW5jdGlvbihjdHgsIGNvb3Jkc0FycmF5LCBzdHlsZSkge1xuICBpZiAoIXN0eWxlKSByZXR1cm47XG4gIGlmICghY3R4KSByZXR1cm47XG5cbiAgLy8gSWYgdGhlIGNvcnJlc3BvbmRpbmcgbGF5ZXIgaXMgbm90IG9uIHRoZSBtYXAsIFxuICAvLyB3ZSBkb250IHdhbnQgdG8gcHV0IG9uIGEgbGFiZWwuXG4gIGlmICghdGhpcy5tdnRMYXllci5fbWFwKSByZXR1cm47XG5cbiAgdmFyIHZlY1B0ID0gdGhpcy5fdGlsZVBvaW50KGNvb3Jkc0FycmF5WzBdWzBdKTtcblxuICAvLyBXZSdyZSBtYWtpbmcgYSBzdGFuZGFyZCBMZWFmbGV0IE1hcmtlciBmb3IgdGhpcyBsYWJlbC5cbiAgdmFyIHAgPSB0aGlzLl9wcm9qZWN0KHZlY1B0LCBjdHgudGlsZS54LCBjdHgudGlsZS55LCB0aGlzLmV4dGVudCwgdGhpcy50aWxlU2l6ZSk7IC8vdmVjdGlsZSBwdCB0byBtZXJjIHB0XG4gIHZhciBtZXJjUHQgPSBMLnBvaW50KHAueCwgcC55KTsgLy8gbWFrZSBpbnRvIGxlYWZsZXQgb2JqXG4gIHZhciBsYXRMbmcgPSB0aGlzLm1hcC51bnByb2plY3QobWVyY1B0KTsgLy8gbWVyYyBwdCB0byBsYXRsbmdcblxuICB0aGlzLnN0YXRpY0xhYmVsID0gbmV3IFN0YXRpY0xhYmVsKHRoaXMsIGN0eCwgbGF0TG5nLCBzdHlsZSk7XG4gIHRoaXMubXZ0TGF5ZXIuZmVhdHVyZVdpdGhMYWJlbEFkZGVkKHRoaXMpO1xufTtcblxuTVZURmVhdHVyZS5wcm90b3R5cGUucmVtb3ZlTGFiZWwgPSBmdW5jdGlvbigpIHtcbiAgaWYgKCF0aGlzLnN0YXRpY0xhYmVsKSByZXR1cm47XG4gIHRoaXMuc3RhdGljTGFiZWwucmVtb3ZlKCk7XG4gIHRoaXMuc3RhdGljTGFiZWwgPSBudWxsO1xufTtcblxuLyoqXG4gKiBQcm9qZWN0cyBhIHZlY3RvciB0aWxlIHBvaW50IHRvIHRoZSBTcGhlcmljYWwgTWVyY2F0b3IgcGl4ZWwgc3BhY2UgZm9yIGEgZ2l2ZW4gem9vbSBsZXZlbC5cbiAqXG4gKiBAcGFyYW0gdmVjUHRcbiAqIEBwYXJhbSB0aWxlWFxuICogQHBhcmFtIHRpbGVZXG4gKiBAcGFyYW0gZXh0ZW50XG4gKiBAcGFyYW0gdGlsZVNpemVcbiAqL1xuTVZURmVhdHVyZS5wcm90b3R5cGUuX3Byb2plY3QgPSBmdW5jdGlvbih2ZWNQdCwgdGlsZVgsIHRpbGVZLCBleHRlbnQsIHRpbGVTaXplKSB7XG4gIHZhciB4T2Zmc2V0ID0gdGlsZVggKiB0aWxlU2l6ZTtcbiAgdmFyIHlPZmZzZXQgPSB0aWxlWSAqIHRpbGVTaXplO1xuICByZXR1cm4ge1xuICAgIHg6IE1hdGguZmxvb3IodmVjUHQueCArIHhPZmZzZXQpLFxuICAgIHk6IE1hdGguZmxvb3IodmVjUHQueSArIHlPZmZzZXQpXG4gIH07XG59O1xuXG4vKipcbiAqIFRha2VzIGEgY29vcmRpbmF0ZSBmcm9tIGEgdmVjdG9yIHRpbGUgYW5kIHR1cm5zIGl0IGludG8gYSBMZWFmbGV0IFBvaW50LlxuICpcbiAqIEBwYXJhbSBjdHhcbiAqIEBwYXJhbSBjb29yZHNcbiAqIEByZXR1cm5zIHtlR2VvbVR5cGUuUG9pbnR9XG4gKiBAcHJpdmF0ZVxuICovXG5NVlRGZWF0dXJlLnByb3RvdHlwZS5fdGlsZVBvaW50ID0gZnVuY3Rpb24oY29vcmRzKSB7XG4gIHJldHVybiBuZXcgTC5Qb2ludChjb29yZHMueCAvIHRoaXMuZGl2aXNvciwgY29vcmRzLnkgLyB0aGlzLmRpdmlzb3IpO1xufTtcblxuTVZURmVhdHVyZS5wcm90b3R5cGUubGlua2VkRmVhdHVyZSA9IGZ1bmN0aW9uKCkge1xuICB2YXIgbGlua2VkTGF5ZXIgPSB0aGlzLm12dExheWVyLmxpbmtlZExheWVyKCk7XG4gIGlmKGxpbmtlZExheWVyKXtcbiAgICB2YXIgbGlua2VkRmVhdHVyZSA9IGxpbmtlZExheWVyLmZlYXR1cmVzW3RoaXMuaWRdO1xuICAgIHJldHVybiBsaW5rZWRGZWF0dXJlO1xuICB9ZWxzZXtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufTtcblxuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IFJ5YW4gV2hpdGxleSBvbiA1LzE3LzE0LlxuICovXG4vKiogRm9ya2VkIGZyb20gaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vREd1aWRpLzE3MTYwMTAgKiovXG52YXIgTVZURmVhdHVyZSA9IHJlcXVpcmUoJy4vTVZURmVhdHVyZScpO1xudmFyIFV0aWwgPSByZXF1aXJlKCcuL01WVFV0aWwnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBMLlRpbGVMYXllci5DYW52YXMuZXh0ZW5kKHtcblxuICBvcHRpb25zOiB7XG4gICAgZGVidWc6IGZhbHNlLFxuICAgIGlzSGlkZGVuTGF5ZXI6IGZhbHNlLFxuICAgIGdldElERm9yTGF5ZXJGZWF0dXJlOiBmdW5jdGlvbigpIHt9LFxuICAgIHRpbGVTaXplOiAyNTYsXG4gICAgbGluZUNsaWNrVG9sZXJhbmNlOiAyXG4gIH0sXG5cbiAgX2ZlYXR1cmVJc0NsaWNrZWQ6IHt9LFxuXG4gIF9pc1BvaW50SW5Qb2x5OiBmdW5jdGlvbihwdCwgcG9seSkge1xuICAgIGlmKHBvbHkgJiYgcG9seS5sZW5ndGgpIHtcbiAgICAgIGZvciAodmFyIGMgPSBmYWxzZSwgaSA9IC0xLCBsID0gcG9seS5sZW5ndGgsIGogPSBsIC0gMTsgKytpIDwgbDsgaiA9IGkpXG4gICAgICAgICgocG9seVtpXS55IDw9IHB0LnkgJiYgcHQueSA8IHBvbHlbal0ueSkgfHwgKHBvbHlbal0ueSA8PSBwdC55ICYmIHB0LnkgPCBwb2x5W2ldLnkpKVxuICAgICAgICAmJiAocHQueCA8IChwb2x5W2pdLnggLSBwb2x5W2ldLngpICogKHB0LnkgLSBwb2x5W2ldLnkpIC8gKHBvbHlbal0ueSAtIHBvbHlbaV0ueSkgKyBwb2x5W2ldLngpXG4gICAgICAgICYmIChjID0gIWMpO1xuICAgICAgcmV0dXJuIGM7XG4gICAgfVxuICB9LFxuXG4gIF9nZXREaXN0YW5jZUZyb21MaW5lOiBmdW5jdGlvbihwdCwgcHRzKSB7XG4gICAgdmFyIG1pbiA9IE51bWJlci5QT1NJVElWRV9JTkZJTklUWTtcbiAgICBpZiAocHRzICYmIHB0cy5sZW5ndGggPiAxKSB7XG4gICAgICBwdCA9IEwucG9pbnQocHQueCwgcHQueSk7XG4gICAgICBmb3IgKHZhciBpID0gMCwgbCA9IHB0cy5sZW5ndGggLSAxOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIHZhciB0ZXN0ID0gdGhpcy5fcHJvamVjdFBvaW50T25MaW5lU2VnbWVudChwdCwgcHRzW2ldLCBwdHNbaSArIDFdKTtcbiAgICAgICAgaWYgKHRlc3QuZGlzdGFuY2UgPD0gbWluKSB7XG4gICAgICAgICAgbWluID0gdGVzdC5kaXN0YW5jZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbWluO1xuICB9LFxuXG4gIF9wcm9qZWN0UG9pbnRPbkxpbmVTZWdtZW50OiBmdW5jdGlvbihwLCByMCwgcjEpIHtcbiAgICB2YXIgbGluZUxlbmd0aCA9IHIwLmRpc3RhbmNlVG8ocjEpO1xuICAgIGlmIChsaW5lTGVuZ3RoIDwgMSkge1xuICAgICAgICByZXR1cm4ge2Rpc3RhbmNlOiBwLmRpc3RhbmNlVG8ocjApLCBjb29yZGluYXRlOiByMH07XG4gICAgfVxuICAgIHZhciB1ID0gKChwLnggLSByMC54KSAqIChyMS54IC0gcjAueCkgKyAocC55IC0gcjAueSkgKiAocjEueSAtIHIwLnkpKSAvIE1hdGgucG93KGxpbmVMZW5ndGgsIDIpO1xuICAgIGlmICh1IDwgMC4wMDAwMDAxKSB7XG4gICAgICAgIHJldHVybiB7ZGlzdGFuY2U6IHAuZGlzdGFuY2VUbyhyMCksIGNvb3JkaW5hdGU6IHIwfTtcbiAgICB9XG4gICAgaWYgKHUgPiAwLjk5OTk5OTkpIHtcbiAgICAgICAgcmV0dXJuIHtkaXN0YW5jZTogcC5kaXN0YW5jZVRvKHIxKSwgY29vcmRpbmF0ZTogcjF9O1xuICAgIH1cbiAgICB2YXIgYSA9IEwucG9pbnQocjAueCArIHUgKiAocjEueCAtIHIwLngpLCByMC55ICsgdSAqIChyMS55IC0gcjAueSkpO1xuICAgIHJldHVybiB7ZGlzdGFuY2U6IHAuZGlzdGFuY2VUbyhhKSwgcG9pbnQ6IGF9O1xuICB9LFxuXG4gIGluaXRpYWxpemU6IGZ1bmN0aW9uKG12dFNvdXJjZSwgb3B0aW9ucykge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICBzZWxmLm12dFNvdXJjZSA9IG12dFNvdXJjZTtcbiAgICBMLlV0aWwuc2V0T3B0aW9ucyh0aGlzLCBvcHRpb25zKTtcblxuICAgIHRoaXMuc3R5bGUgPSBvcHRpb25zLnN0eWxlO1xuICAgIHRoaXMubmFtZSA9IG9wdGlvbnMubmFtZTtcbiAgICB0aGlzLl9jYW52YXNJRFRvRmVhdHVyZXMgPSB7fTtcbiAgICB0aGlzLmZlYXR1cmVzID0ge307XG4gICAgdGhpcy5mZWF0dXJlc1dpdGhMYWJlbHMgPSBbXTtcbiAgICB0aGlzLl9oaWdoZXN0Q291bnQgPSAwO1xuICAgIHRoaXMubGVnZW5kT2JqZWN0ID0ge307XG4gIH0sXG5cbiAgb25BZGQ6IGZ1bmN0aW9uKG1hcCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICBzZWxmLm1hcCA9IG1hcDtcbiAgICBMLlRpbGVMYXllci5DYW52YXMucHJvdG90eXBlLm9uQWRkLmNhbGwodGhpcywgbWFwKTtcbiAgICBtYXAub24oJ2xheWVycmVtb3ZlJywgZnVuY3Rpb24oZSkge1xuICAgICAgLy8gd2Ugb25seSB3YW50IHRvIGRvIHN0dWZmIHdoZW4gdGhlIGxheWVycmVtb3ZlIGV2ZW50IGlzIG9uIHRoaXMgbGF5ZXJcbiAgICAgIGlmIChlLmxheWVyLl9sZWFmbGV0X2lkID09PSBzZWxmLl9sZWFmbGV0X2lkKSB7XG4gICAgICAgIHJlbW92ZUxhYmVscyhzZWxmKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcblxuICBkcmF3VGlsZTogZnVuY3Rpb24oY2FudmFzLCB0aWxlUG9pbnQsIHpvb20pIHtcblxuICAgIHZhciBjdHggPSB7XG4gICAgICBjYW52YXM6IGNhbnZhcyxcbiAgICAgIHRpbGU6IHRpbGVQb2ludCxcbiAgICAgIHpvb206IHpvb20sXG4gICAgICB0aWxlU2l6ZTogdGhpcy5vcHRpb25zLnRpbGVTaXplXG4gICAgfTtcblxuICAgIGN0eC5pZCA9IFV0aWwuZ2V0Q29udGV4dElEKGN0eCk7XG5cbiAgICBpZiAoIXRoaXMuX2NhbnZhc0lEVG9GZWF0dXJlc1tjdHguaWRdKSB7XG4gICAgICB0aGlzLl9pbml0aWFsaXplRmVhdHVyZXNIYXNoKGN0eCk7XG4gICAgfVxuICAgIGlmICghdGhpcy5mZWF0dXJlcykge1xuICAgICAgdGhpcy5mZWF0dXJlcyA9IHt9O1xuICAgIH1cblxuICB9LFxuXG4gIF9pbml0aWFsaXplRmVhdHVyZXNIYXNoOiBmdW5jdGlvbihjdHgpe1xuICAgIHRoaXMuX2NhbnZhc0lEVG9GZWF0dXJlc1tjdHguaWRdID0ge307XG4gICAgdGhpcy5fY2FudmFzSURUb0ZlYXR1cmVzW2N0eC5pZF0uZmVhdHVyZXMgPSBbXTtcbiAgICB0aGlzLl9jYW52YXNJRFRvRmVhdHVyZXNbY3R4LmlkXS5jYW52YXMgPSBjdHguY2FudmFzO1xuICB9LFxuXG4gIF9kcmF3OiBmdW5jdGlvbihjdHgpIHtcbiAgICAvL0RyYXcgaXMgaGFuZGxlZCBieSB0aGUgcGFyZW50IE1WVFNvdXJjZSBvYmplY3RcbiAgfSxcbiAgZ2V0Q2FudmFzOiBmdW5jdGlvbihwYXJlbnRDdHgpe1xuICAgIC8vVGhpcyBnZXRzIGNhbGxlZCBpZiBhIHZlY3RvciB0aWxlIGZlYXR1cmUgaGFzIGFscmVhZHkgYmVlbiBwYXJzZWQuXG4gICAgLy9XZSd2ZSBhbHJlYWR5IGdvdCB0aGUgZ2VvbSwganVzdCBnZXQgb24gd2l0aCB0aGUgZHJhd2luZy5cbiAgICAvL05lZWQgYSB3YXkgdG8gcGx1Y2sgYSBjYW52YXMgZWxlbWVudCBmcm9tIHRoaXMgbGF5ZXIgZ2l2ZW4gdGhlIHBhcmVudCBsYXllcidzIGlkLlxuICAgIC8vV2FpdCBmb3IgaXQgdG8gZ2V0IGxvYWRlZCBiZWZvcmUgcHJvY2VlZGluZy5cbiAgICB2YXIgdGlsZVBvaW50ID0gcGFyZW50Q3R4LnRpbGU7XG4gICAgdmFyIGN0eCA9IHRoaXMuX3RpbGVzW3RpbGVQb2ludC54ICsgXCI6XCIgKyB0aWxlUG9pbnQueV07XG5cbiAgICBpZihjdHgpe1xuICAgICAgcGFyZW50Q3R4LmNhbnZhcyA9IGN0eDtcbiAgICAgIHRoaXMucmVkcmF3VGlsZShwYXJlbnRDdHguaWQpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIC8vVGhpcyBpcyBhIHRpbWVyIHRoYXQgd2lsbCB3YWl0IGZvciBhIGNyaXRlcmlvbiB0byByZXR1cm4gdHJ1ZS5cbiAgICAvL0lmIG5vdCB0cnVlIHdpdGhpbiB0aGUgdGltZW91dCBkdXJhdGlvbiwgaXQgd2lsbCBtb3ZlIG9uLlxuICAgIHdhaXRGb3IoZnVuY3Rpb24gKCkge1xuICAgICAgICBjdHggPSBzZWxmLl90aWxlc1t0aWxlUG9pbnQueCArIFwiOlwiICsgdGlsZVBvaW50LnldO1xuICAgICAgICBpZihjdHgpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGZ1bmN0aW9uKCl7XG4gICAgICAgIC8vV2hlbiBpdCBmaW5pc2hlcywgZG8gdGhpcy5cbiAgICAgICAgY3R4ID0gc2VsZi5fdGlsZXNbdGlsZVBvaW50LnggKyBcIjpcIiArIHRpbGVQb2ludC55XTtcbiAgICAgICAgcGFyZW50Q3R4LmNhbnZhcyA9IGN0eDtcbiAgICAgICAgc2VsZi5yZWRyYXdUaWxlKHBhcmVudEN0eC5pZCk7XG5cbiAgICAgIH0sIC8vd2hlbiBkb25lLCBnbyB0byBuZXh0IGZsb3dcbiAgICAgIDIwMDApOyAvL1RoZSBUaW1lb3V0IG1pbGxpc2Vjb25kcy4gIEFmdGVyIHRoaXMsIGdpdmUgdXAgYW5kIG1vdmUgb25cblxuICB9LFxuXG4gIHBhcnNlVmVjdG9yVGlsZUxheWVyOiBmdW5jdGlvbih2dGwsIGN0eCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB2YXIgdGlsZVBvaW50ID0gY3R4LnRpbGU7XG4gICAgdmFyIGxheWVyQ3R4ICA9IHsgY2FudmFzOiBudWxsLCBpZDogY3R4LmlkLCB0aWxlOiBjdHgudGlsZSwgem9vbTogY3R4Lnpvb20sIHRpbGVTaXplOiBjdHgudGlsZVNpemV9O1xuXG4gICAgLy9TZWUgaWYgd2UgY2FuIHBsdWNrIHRoZSBjaGlsZCB0aWxlIGZyb20gdGhpcyBQQkYgdGlsZSBsYXllciBiYXNlZCBvbiB0aGUgbWFzdGVyIGxheWVyJ3MgdGlsZSBpZC5cbiAgICBsYXllckN0eC5jYW52YXMgPSBzZWxmLl90aWxlc1t0aWxlUG9pbnQueCArIFwiOlwiICsgdGlsZVBvaW50LnldO1xuXG5cblxuICAgIC8vSW5pdGlhbGl6ZSB0aGlzIHRpbGUncyBmZWF0dXJlIHN0b3JhZ2UgaGFzaCwgaWYgaXQgaGFzbid0IGFscmVhZHkgYmVlbiBjcmVhdGVkLlxuICAgIC8vIFVzZWQgZm9yIHdoZW4gZmlsdGVycyBhcmUgdXBkYXRlZCwgYW5kIGZlYXR1cmVzIGFyZSBjbGVhcmVkIHRvIHByZXBhcmUgZm9yIGEgZnJlc2ggcmVkcmF3LlxuICAgIGlmICghdGhpcy5fY2FudmFzSURUb0ZlYXR1cmVzW2xheWVyQ3R4LmlkXSkge1xuICAgICAgdGhpcy5faW5pdGlhbGl6ZUZlYXR1cmVzSGFzaChsYXllckN0eCk7XG4gICAgfWVsc2V7XG4gICAgICAvL0NsZWFyIHRoaXMgdGlsZSdzIHByZXZpb3VzbHkgc2F2ZWQgZmVhdHVyZXMuXG4gICAgICB0aGlzLmNsZWFyVGlsZUZlYXR1cmVIYXNoKGxheWVyQ3R4LmlkKTtcbiAgICB9XG5cbiAgICB2YXIgZmVhdHVyZXMgPSB2dGwucGFyc2VkRmVhdHVyZXM7XG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGZlYXR1cmVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICB2YXIgdnRmID0gZmVhdHVyZXNbaV07IC8vdmVjdG9yIHRpbGUgZmVhdHVyZVxuICAgICAgdnRmLmxheWVyID0gdnRsO1xuXG4gICAgICAvKipcbiAgICAgICAqIEFwcGx5IGZpbHRlciBvbiBmZWF0dXJlIGlmIHRoZXJlIGlzIG9uZS4gRGVmaW5lZCBpbiB0aGUgb3B0aW9ucyBvYmplY3RcbiAgICAgICAqIG9mIFRpbGVMYXllci5NVlRTb3VyY2UuanNcbiAgICAgICAqL1xuICAgICAgdmFyIGZpbHRlciA9IHNlbGYub3B0aW9ucy5maWx0ZXI7XG4gICAgICBpZiAodHlwZW9mIGZpbHRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBpZiAoIGZpbHRlcih2dGYsIGxheWVyQ3R4KSA9PT0gZmFsc2UgKSBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgdmFyIGdldElERm9yTGF5ZXJGZWF0dXJlO1xuICAgICAgaWYgKHR5cGVvZiBzZWxmLm9wdGlvbnMuZ2V0SURGb3JMYXllckZlYXR1cmUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgZ2V0SURGb3JMYXllckZlYXR1cmUgPSBzZWxmLm9wdGlvbnMuZ2V0SURGb3JMYXllckZlYXR1cmU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBnZXRJREZvckxheWVyRmVhdHVyZSA9IFV0aWwuZ2V0SURGb3JMYXllckZlYXR1cmU7XG4gICAgICB9XG4gICAgICB2YXIgdW5pcXVlSUQgPSBzZWxmLm9wdGlvbnMuZ2V0SURGb3JMYXllckZlYXR1cmUodnRmKSB8fCBpO1xuICAgICAgdmFyIG12dEZlYXR1cmUgPSBzZWxmLmZlYXR1cmVzW3VuaXF1ZUlEXTtcblxuICAgICAgLyoqXG4gICAgICAgKiBVc2UgbGF5ZXJPcmRlcmluZyBmdW5jdGlvbiB0byBhcHBseSBhIHpJbmRleCBwcm9wZXJ0eSB0byBlYWNoIHZ0Zi4gIFRoaXMgaXMgZGVmaW5lZCBpblxuICAgICAgICogVGlsZUxheWVyLk1WVFNvdXJjZS5qcy4gIFVzZWQgYmVsb3cgdG8gc29ydCBmZWF0dXJlcy5ucG1cbiAgICAgICAqL1xuICAgICAgdmFyIGxheWVyT3JkZXJpbmcgPSBzZWxmLm9wdGlvbnMubGF5ZXJPcmRlcmluZztcbiAgICAgIGlmICh0eXBlb2YgbGF5ZXJPcmRlcmluZyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBsYXllck9yZGVyaW5nKHZ0ZiwgbGF5ZXJDdHgpOyAvL0FwcGxpZXMgYSBjdXN0b20gcHJvcGVydHkgdG8gdGhlIGZlYXR1cmUsIHdoaWNoIGlzIHVzZWQgYWZ0ZXIgd2UncmUgdGhydSBpdGVyYXRpbmcgdG8gc29ydFxuICAgICAgfVxuXG4gICAgICAvL0NyZWF0ZSBhIG5ldyBNVlRGZWF0dXJlIGlmIG9uZSBkb2Vzbid0IGFscmVhZHkgZXhpc3QgZm9yIHRoaXMgZmVhdHVyZS5cbiAgICAgIGlmICghbXZ0RmVhdHVyZSkge1xuICAgICAgICAvL0dldCBhIHN0eWxlIGZvciB0aGUgZmVhdHVyZSAtIHNldCBpdCBqdXN0IG9uY2UgZm9yIGVhY2ggbmV3IE1WVEZlYXR1cmVcbiAgICAgICAgdmFyIHN0eWxlID0gc2VsZi5zdHlsZSh2dGYpO1xuXG4gICAgICAgIC8vSWYgc3R5bGUubGVnZW5kTGFiZWwgcHJvcGVydHkgZXhpc3RzLCBidWlsZCBhIGxlZ2VuZCBvYmplY3QuXG4gICAgICAgIC8vaWYoc3R5bGUubGVnZW5kTGFiZWwpe1xuICAgICAgICAvLyAgc2VsZi5sZWdlbmRPYmplY3Rbc3R5bGUubGVnZW5kTGFiZWxdID0gc3R5bGU7XG4gICAgICAgIC8vfVxuXG4gICAgICAgIC8vY3JlYXRlIGEgbmV3IGZlYXR1cmVcbiAgICAgICAgc2VsZi5mZWF0dXJlc1t1bmlxdWVJRF0gPSBtdnRGZWF0dXJlID0gbmV3IE1WVEZlYXR1cmUoc2VsZiwgdnRmLCBsYXllckN0eCwgdW5pcXVlSUQsIHN0eWxlKTtcbiAgICAgICAgaWYgKHN0eWxlICYmIHN0eWxlLmR5bmFtaWNMYWJlbCAmJiB0eXBlb2Ygc3R5bGUuZHluYW1pY0xhYmVsID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgc2VsZi5mZWF0dXJlc1dpdGhMYWJlbHMucHVzaChtdnRGZWF0dXJlKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy9BZGQgdGhlIG5ldyBwYXJ0IHRvIHRoZSBleGlzdGluZyBmZWF0dXJlXG4gICAgICAgIG12dEZlYXR1cmUuYWRkVGlsZUZlYXR1cmUodnRmLCBsYXllckN0eCk7XG4gICAgICB9XG5cbiAgICAgIC8vQXNzb2NpYXRlICYgU2F2ZSB0aGlzIGZlYXR1cmUgd2l0aCB0aGlzIHRpbGUgZm9yIGxhdGVyXG4gICAgICBpZihsYXllckN0eCAmJiBsYXllckN0eC5pZCkgc2VsZi5fY2FudmFzSURUb0ZlYXR1cmVzW2xheWVyQ3R4LmlkXVsnZmVhdHVyZXMnXS5wdXNoKG12dEZlYXR1cmUpO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQXBwbHkgc29ydGluZyAoekluZGV4KSBvbiBmZWF0dXJlIGlmIHRoZXJlIGlzIGEgZnVuY3Rpb24gZGVmaW5lZCBpbiB0aGUgb3B0aW9ucyBvYmplY3RcbiAgICAgKiBvZiBUaWxlTGF5ZXIuTVZUU291cmNlLmpzXG4gICAgICovXG4gICAgdmFyIGxheWVyT3JkZXJpbmcgPSBzZWxmLm9wdGlvbnMubGF5ZXJPcmRlcmluZztcbiAgICBpZiAobGF5ZXJPcmRlcmluZykge1xuICAgICAgLy9XZSd2ZSBhc3NpZ25lZCB0aGUgY3VzdG9tIHpJbmRleCBwcm9wZXJ0eSB3aGVuIGl0ZXJhdGluZyBhYm92ZS4gIE5vdyBqdXN0IHNvcnQuXG4gICAgICBzZWxmLl9jYW52YXNJRFRvRmVhdHVyZXNbbGF5ZXJDdHguaWRdLmZlYXR1cmVzID0gc2VsZi5fY2FudmFzSURUb0ZlYXR1cmVzW2xheWVyQ3R4LmlkXS5mZWF0dXJlcy5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIC0oYi5wcm9wZXJ0aWVzLnpJbmRleCAtIGEucHJvcGVydGllcy56SW5kZXgpXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBzZWxmLnJlZHJhd1RpbGUobGF5ZXJDdHguaWQpO1xuICB9LFxuXG4gIHNldFN0eWxlOiBmdW5jdGlvbihzdHlsZUZuKSB7XG4gICAgLy8gcmVmcmVzaCB0aGUgbnVtYmVyIGZvciB0aGUgaGlnaGVzdCBjb3VudCB2YWx1ZVxuICAgIC8vIHRoaXMgaXMgdXNlZCBvbmx5IGZvciBjaG9yb3BsZXRoXG4gICAgdGhpcy5faGlnaGVzdENvdW50ID0gMDtcblxuICAgIC8vIGxvd2VzdCBjb3VudCBzaG91bGQgbm90IGJlIDAsIHNpbmNlIHdlIHdhbnQgdG8gZmlndXJlIG91dCB0aGUgbG93ZXN0XG4gICAgdGhpcy5fbG93ZXN0Q291bnQgPSBudWxsO1xuXG4gICAgdGhpcy5zdHlsZSA9IHN0eWxlRm47XG4gICAgZm9yICh2YXIga2V5IGluIHRoaXMuZmVhdHVyZXMpIHtcbiAgICAgIHZhciBmZWF0ID0gdGhpcy5mZWF0dXJlc1trZXldO1xuICAgICAgZmVhdC5zZXRTdHlsZShzdHlsZUZuKTtcbiAgICB9XG4gICAgdmFyIHogPSB0aGlzLm1hcC5nZXRab29tKCk7XG4gICAgZm9yICh2YXIga2V5IGluIHRoaXMuX3RpbGVzKSB7XG4gICAgICB2YXIgaWQgPSB6ICsgJzonICsga2V5O1xuICAgICAgdGhpcy5yZWRyYXdUaWxlKGlkKTtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIEFzIGNvdW50cyBmb3IgY2hvcm9wbGV0aHMgY29tZSBpbiB3aXRoIHRoZSBhamF4IGRhdGEsXG4gICAqIHdlIHdhbnQgdG8ga2VlcCB0cmFjayBvZiB3aGljaCB2YWx1ZSBpcyB0aGUgaGlnaGVzdFxuICAgKiB0byBjcmVhdGUgdGhlIGNvbG9yIHJhbXAgZm9yIHRoZSBmaWxscyBvZiBwb2x5Z29ucy5cbiAgICogQHBhcmFtIGNvdW50XG4gICAqL1xuICBzZXRIaWdoZXN0Q291bnQ6IGZ1bmN0aW9uKGNvdW50KSB7XG4gICAgaWYgKGNvdW50ID4gdGhpcy5faGlnaGVzdENvdW50KSB7XG4gICAgICB0aGlzLl9oaWdoZXN0Q291bnQgPSBjb3VudDtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGhpZ2hlc3QgbnVtYmVyIG9mIGFsbCBvZiB0aGUgY291bnRzIHRoYXQgaGF2ZSBjb21lIGluXG4gICAqIGZyb20gc2V0SGlnaGVzdENvdW50LiBUaGlzIGlzIGFzc3VtZWQgdG8gYmUgc2V0IHZpYSBhamF4IGNhbGxiYWNrcy5cbiAgICogQHJldHVybnMge251bWJlcn1cbiAgICovXG4gIGdldEhpZ2hlc3RDb3VudDogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2hpZ2hlc3RDb3VudDtcbiAgfSxcblxuICBzZXRMb3dlc3RDb3VudDogZnVuY3Rpb24oY291bnQpIHtcbiAgICBpZiAoIXRoaXMuX2xvd2VzdENvdW50IHx8IGNvdW50IDwgdGhpcy5fbG93ZXN0Q291bnQpIHtcbiAgICAgIHRoaXMuX2xvd2VzdENvdW50ID0gY291bnQ7XG4gICAgfVxuICB9LFxuXG4gIGdldExvd2VzdENvdW50OiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fbG93ZXN0Q291bnQ7XG4gIH0sXG5cbiAgc2V0Q291bnRSYW5nZTogZnVuY3Rpb24oY291bnQpIHtcbiAgICB0aGlzLnNldEhpZ2hlc3RDb3VudChjb3VudCk7XG4gICAgdGhpcy5zZXRMb3dlc3RDb3VudChjb3VudCk7XG4gIH0sXG5cbiAgLy9UaGlzIGlzIHRoZSBvbGQgd2F5LiAgSXQgd29ya3MsIGJ1dCBpcyBzbG93IGZvciBtb3VzZW92ZXIgZXZlbnRzLiAgRmluZSBmb3IgY2xpY2sgZXZlbnRzLlxuICBoYW5kbGVDbGlja0V2ZW50OiBmdW5jdGlvbihldnQsIGNiKSB7XG4gICAgLy9DbGljayBoYXBwZW5lZCBvbiB0aGUgR3JvdXBMYXllciAoTWFuYWdlcikgYW5kIHBhc3NlZCBpdCBoZXJlXG4gICAgdmFyIHRpbGVJRCA9IGV2dC50aWxlSUQuc3BsaXQoXCI6XCIpLnNsaWNlKDEsIDMpLmpvaW4oXCI6XCIpO1xuICAgIHZhciBjYW52YXMgPSB0aGlzLl90aWxlc1t0aWxlSURdO1xuICAgIGlmKCFjYW52YXMpIChjYihldnQpKTsgLy9icmVhayBvdXRcbiAgICB2YXIgeCA9IGV2dC5sYXllclBvaW50LnggLSBjYW52YXMuX2xlYWZsZXRfcG9zLng7XG4gICAgdmFyIHkgPSBldnQubGF5ZXJQb2ludC55IC0gY2FudmFzLl9sZWFmbGV0X3Bvcy55O1xuXG4gICAgdmFyIHRpbGVQb2ludCA9IHt4OiB4LCB5OiB5fTtcbiAgICB2YXIgZmVhdHVyZXMgPSB0aGlzLl9jYW52YXNJRFRvRmVhdHVyZXNbZXZ0LnRpbGVJRF0uZmVhdHVyZXM7XG5cbiAgICB2YXIgbWluRGlzdGFuY2UgPSBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFk7XG4gICAgdmFyIG5lYXJlc3QgPSBudWxsO1xuICAgIHZhciBqLCBwYXRocywgZGlzdGFuY2U7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGZlYXR1cmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZmVhdHVyZSA9IGZlYXR1cmVzW2ldO1xuICAgICAgc3dpdGNoIChmZWF0dXJlLnR5cGUpIHtcbiAgICAgICAgY2FzZSAyOiAvL0xpbmVTdHJpbmdcbiAgICAgICAgICBwYXRocyA9IGZlYXR1cmUuZ2V0UGF0aHNGb3JUaWxlKGV2dC50aWxlSUQpO1xuICAgICAgICAgIGZvciAoaiA9IDA7IGogPCBwYXRocy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgaWYgKGZlYXR1cmUuc3R5bGUpIHtcbiAgICAgICAgICAgICAgdmFyIGRpc3RhbmNlID0gdGhpcy5fZ2V0RGlzdGFuY2VGcm9tTGluZSh0aWxlUG9pbnQsIHBhdGhzW2pdKTtcbiAgICAgICAgICAgICAgdmFyIHRoaWNrbmVzcyA9IChmZWF0dXJlLnNlbGVjdGVkICYmIGZlYXR1cmUuc3R5bGUuc2VsZWN0ZWQgPyBmZWF0dXJlLnN0eWxlLnNlbGVjdGVkLnNpemUgOiBmZWF0dXJlLnN0eWxlLnNpemUpO1xuICAgICAgICAgICAgICBpZiAoZGlzdGFuY2UgPCB0aGlja25lc3MgLyAyICsgdGhpcy5vcHRpb25zLmxpbmVDbGlja1RvbGVyYW5jZSAmJiBkaXN0YW5jZSA8IG1pbkRpc3RhbmNlKSB7XG4gICAgICAgICAgICAgICAgbmVhcmVzdCA9IGZlYXR1cmU7XG4gICAgICAgICAgICAgICAgbWluRGlzdGFuY2UgPSBkaXN0YW5jZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIDM6IC8vUG9seWdvblxuICAgICAgICAgIHBhdGhzID0gZmVhdHVyZS5nZXRQYXRoc0ZvclRpbGUoZXZ0LnRpbGVJRCk7XG4gICAgICAgICAgZm9yIChqID0gMDsgaiA8IHBhdGhzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5faXNQb2ludEluUG9seSh0aWxlUG9pbnQsIHBhdGhzW2pdKSkge1xuICAgICAgICAgICAgICBuZWFyZXN0ID0gZmVhdHVyZTtcbiAgICAgICAgICAgICAgbWluRGlzdGFuY2UgPSAwOyAvLyBwb2ludCBpcyBpbnNpZGUgdGhlIHBvbHlnb24sIHNvIGRpc3RhbmNlIGlzIHplcm9cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBpZiAobWluRGlzdGFuY2UgPT0gMCkgYnJlYWs7XG4gICAgfVxuXG4gICAgaWYgKG5lYXJlc3QgJiYgbmVhcmVzdC50b2dnbGVFbmFibGVkKSB7XG4gICAgICAgIG5lYXJlc3QudG9nZ2xlKCk7XG4gICAgfVxuICAgIGV2dC5mZWF0dXJlID0gbmVhcmVzdDtcbiAgICBjYihldnQpO1xuICB9LFxuXG4gIGNsZWFyVGlsZTogZnVuY3Rpb24oaWQpIHtcbiAgICAvL2lkIGlzIHRoZSBlbnRpcmUgem9vbTp4OnkuICB3ZSBqdXN0IHdhbnQgeDp5LlxuICAgIHZhciBjYSA9IGlkLnNwbGl0KFwiOlwiKTtcbiAgICB2YXIgY2FudmFzSWQgPSBjYVsxXSArIFwiOlwiICsgY2FbMl07XG5cbiAgICAvL1RPRE86IHRoaXMgaXMgc29tZXRpbWVzIHVuZGVmaW5lZC5cbiAgICBpZiAodHlwZW9mIHRoaXMuX3RpbGVzW2NhbnZhc0lkXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIGNhbnZhcyA9IHRoaXMuX3RpbGVzW2NhbnZhc0lkXTtcblxuICAgIHZhciBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgY29udGV4dC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgfSxcblxuICBjbGVhclRpbGVGZWF0dXJlSGFzaDogZnVuY3Rpb24oY2FudmFzSUQpe1xuICAgIHRoaXMuX2NhbnZhc0lEVG9GZWF0dXJlc1tjYW52YXNJRF0gPSB7IGZlYXR1cmVzOiBbXX07IC8vR2V0IHJpZCBvZiBhbGwgc2F2ZWQgZmVhdHVyZXNcbiAgfSxcblxuICBjbGVhckxheWVyRmVhdHVyZUhhc2g6IGZ1bmN0aW9uKCl7XG4gICAgdGhpcy5mZWF0dXJlcyA9IHt9O1xuICB9LFxuXG4gIHJlZHJhd1RpbGU6IGZ1bmN0aW9uKGNhbnZhc0lEKSB7XG4gICAgLy9GaXJzdCwgY2xlYXIgdGhlIGNhbnZhc1xuICAgIHRoaXMuY2xlYXJUaWxlKGNhbnZhc0lEKTtcblxuICAgIC8vIElmIHRoZSBmZWF0dXJlcyBhcmUgbm90IGluIHRoZSB0aWxlLCB0aGVuIHRoZXJlIGlzIG5vdGhpbmcgdG8gcmVkcmF3LlxuICAgIC8vIFRoaXMgbWF5IGhhcHBlbiBpZiB5b3UgY2FsbCByZWRyYXcgYmVmb3JlIGZlYXR1cmVzIGhhdmUgbG9hZGVkIGFuZCBpbml0aWFsbHlcbiAgICAvLyBkcmF3biB0aGUgdGlsZS5cbiAgICB2YXIgZmVhdGZlYXRzID0gdGhpcy5fY2FudmFzSURUb0ZlYXR1cmVzW2NhbnZhc0lEXTtcbiAgICBpZiAoIWZlYXRmZWF0cykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vR2V0IHRoZSBmZWF0dXJlcyBmb3IgdGhpcyB0aWxlLCBhbmQgcmVkcmF3IHRoZW0uXG4gICAgdmFyIGZlYXR1cmVzID0gZmVhdGZlYXRzLmZlYXR1cmVzO1xuXG4gICAgLy8gd2Ugd2FudCB0byBza2lwIGRyYXdpbmcgdGhlIHNlbGVjdGVkIGZlYXR1cmVzIGFuZCBkcmF3IHRoZW0gbGFzdFxuICAgIHZhciBzZWxlY3RlZEZlYXR1cmVzID0gW107XG5cbiAgICAvLyBkcmF3aW5nIGFsbCBvZiB0aGUgbm9uLXNlbGVjdGVkIGZlYXR1cmVzXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBmZWF0dXJlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGZlYXR1cmUgPSBmZWF0dXJlc1tpXTtcbiAgICAgIGlmIChmZWF0dXJlLnNlbGVjdGVkKSB7XG4gICAgICAgIHNlbGVjdGVkRmVhdHVyZXMucHVzaChmZWF0dXJlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZlYXR1cmUuZHJhdyhjYW52YXNJRCk7XG4gICAgICAgIHRoaXMuYWRkTGVnZW5kU3R5bGUoZmVhdHVyZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gZHJhd2luZyB0aGUgc2VsZWN0ZWQgZmVhdHVyZXMgbGFzdFxuICAgIGZvciAodmFyIGogPSAwLCBsZW4yID0gc2VsZWN0ZWRGZWF0dXJlcy5sZW5ndGg7IGogPCBsZW4yOyBqKyspIHtcbiAgICAgIHZhciBzZWxGZWF0ID0gc2VsZWN0ZWRGZWF0dXJlc1tqXTtcbiAgICAgIHNlbEZlYXQuZHJhdyhjYW52YXNJRCk7XG4gICAgfVxuXG4gIH0sXG5cbiAgX3Jlc2V0Q2FudmFzSURUb0ZlYXR1cmVzOiBmdW5jdGlvbihjYW52YXNJRCwgY2FudmFzKSB7XG5cbiAgICB0aGlzLl9jYW52YXNJRFRvRmVhdHVyZXNbY2FudmFzSURdID0ge307XG4gICAgdGhpcy5fY2FudmFzSURUb0ZlYXR1cmVzW2NhbnZhc0lEXS5mZWF0dXJlcyA9IFtdO1xuICAgIHRoaXMuX2NhbnZhc0lEVG9GZWF0dXJlc1tjYW52YXNJRF0uY2FudmFzID0gY2FudmFzO1xuXG4gIH0sXG5cbiAgbGlua2VkTGF5ZXI6IGZ1bmN0aW9uKCkge1xuICAgIGlmKHRoaXMubXZ0U291cmNlLmxheWVyTGluaykge1xuICAgICAgdmFyIGxpbmtOYW1lID0gdGhpcy5tdnRTb3VyY2UubGF5ZXJMaW5rKHRoaXMubmFtZSk7XG4gICAgICByZXR1cm4gdGhpcy5tdnRTb3VyY2UubGF5ZXJzW2xpbmtOYW1lXTtcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfSxcblxuICBmZWF0dXJlV2l0aExhYmVsQWRkZWQ6IGZ1bmN0aW9uKGZlYXR1cmUpIHtcbiAgICB0aGlzLmZlYXR1cmVzV2l0aExhYmVscy5wdXNoKGZlYXR1cmUpO1xuICB9LFxuXG4gIGFkZExlZ2VuZFN0eWxlOiBmdW5jdGlvbihmZWF0dXJlKXtcbiAgICAvL1Rha2UgaW4gYSBmZWF0dXJlLCBhbmQgYWRkIGluIGNsYXNzIG5hbWVzIGFuZCBjb2xvcnMgYmFzZWQgb24gZHJhd2luZyBzdHlsZVxuXG4gICAgLy9JZiBzdHlsZS5sZWdlbmRMYWJlbCBwcm9wZXJ0eSBleGlzdHMsIGJ1aWxkIGEgbGVnZW5kIG9iamVjdC5cbiAgICBpZihmZWF0dXJlLnN0eWxlLmxlZ2VuZExhYmVsKXtcbiAgICAgIHRoaXMubGVnZW5kT2JqZWN0W2ZlYXR1cmUuc3R5bGUubGVnZW5kTGFiZWxdID0gZmVhdHVyZS5zdHlsZTtcbiAgICB9XG5cbiAgICAvL1N0b3JlIHRoZSBidWJibGUgSFRNTCwgaWYgcHJlc2VudFxuICAgIGlmKGZlYXR1cmUuc3RhdGljTGFiZWwpe1xuICAgICAgdGhpcy5sZWdlbmRPYmplY3RbZmVhdHVyZS5zdHlsZS5sZWdlbmRMYWJlbF0gPSBmZWF0dXJlLnN0YXRpY0xhYmVsLmljb247XG4gICAgfVxuICB9LFxuXG4gIGNsZWFyTGVnZW5kT2JqZWN0OiBmdW5jdGlvbigpe1xuICAgIHRoaXMubGVnZW5kT2JqZWN0ID0ge307XG4gIH0sXG5cbiAgZ2V0TGVnZW5kT2JqZWN0OiBmdW5jdGlvbigpe1xuICAgIC8vR2V0IHRoZSBsZWdlbmQgb2JqZWN0IGZvciB0aGlzIGxheWVyLlxuICAgIHJldHVybiB0aGlzLmxlZ2VuZE9iamVjdDtcbiAgfVxuXG59KTtcblxuXG5mdW5jdGlvbiByZW1vdmVMYWJlbHMoc2VsZikge1xuICB2YXIgZmVhdHVyZXMgPSBzZWxmLmZlYXR1cmVzV2l0aExhYmVscztcbiAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGZlYXR1cmVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgdmFyIGZlYXQgPSBmZWF0dXJlc1tpXTtcbiAgICBmZWF0LnJlbW92ZUxhYmVsKCk7XG4gIH1cbiAgc2VsZi5mZWF0dXJlc1dpdGhMYWJlbHMgPSBbXTtcbn1cblxuXG4vKipcbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vYXJpeWEvcGhhbnRvbWpzL2Jsb2IvbWFzdGVyL2V4YW1wbGVzL3dhaXRmb3IuanNcbiAqXG4gKiBXYWl0IHVudGlsIHRoZSB0ZXN0IGNvbmRpdGlvbiBpcyB0cnVlIG9yIGEgdGltZW91dCBvY2N1cnMuIFVzZWZ1bCBmb3Igd2FpdGluZ1xuICogb24gYSBzZXJ2ZXIgcmVzcG9uc2Ugb3IgZm9yIGEgdWkgY2hhbmdlIChmYWRlSW4sIGV0Yy4pIHRvIG9jY3VyLlxuICpcbiAqIEBwYXJhbSB0ZXN0RnggamF2YXNjcmlwdCBjb25kaXRpb24gdGhhdCBldmFsdWF0ZXMgdG8gYSBib29sZWFuLFxuICogaXQgY2FuIGJlIHBhc3NlZCBpbiBhcyBhIHN0cmluZyAoZS5nLjogXCIxID09IDFcIiBvciBcIiQoJyNiYXInKS5pcygnOnZpc2libGUnKVwiIG9yXG4gKiBhcyBhIGNhbGxiYWNrIGZ1bmN0aW9uLlxuICogQHBhcmFtIG9uUmVhZHkgd2hhdCB0byBkbyB3aGVuIHRlc3RGeCBjb25kaXRpb24gaXMgZnVsZmlsbGVkLFxuICogaXQgY2FuIGJlIHBhc3NlZCBpbiBhcyBhIHN0cmluZyAoZS5nLjogXCIxID09IDFcIiBvciBcIiQoJyNiYXInKS5pcygnOnZpc2libGUnKVwiIG9yXG4gKiBhcyBhIGNhbGxiYWNrIGZ1bmN0aW9uLlxuICogQHBhcmFtIHRpbWVPdXRNaWxsaXMgdGhlIG1heCBhbW91bnQgb2YgdGltZSB0byB3YWl0LiBJZiBub3Qgc3BlY2lmaWVkLCAzIHNlYyBpcyB1c2VkLlxuICovXG5mdW5jdGlvbiB3YWl0Rm9yKHRlc3RGeCwgb25SZWFkeSwgdGltZU91dE1pbGxpcykge1xuICB2YXIgbWF4dGltZU91dE1pbGxpcyA9IHRpbWVPdXRNaWxsaXMgPyB0aW1lT3V0TWlsbGlzIDogMzAwMCwgLy88IERlZmF1bHQgTWF4IFRpbW91dCBpcyAzc1xuICAgIHN0YXJ0ID0gbmV3IERhdGUoKS5nZXRUaW1lKCksXG4gICAgY29uZGl0aW9uID0gKHR5cGVvZiAodGVzdEZ4KSA9PT0gXCJzdHJpbmdcIiA/IGV2YWwodGVzdEZ4KSA6IHRlc3RGeCgpKSwgLy88IGRlZmVuc2l2ZSBjb2RlXG4gICAgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoKG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gc3RhcnQgPCBtYXh0aW1lT3V0TWlsbGlzKSAmJiAhY29uZGl0aW9uKSB7XG4gICAgICAgIC8vIElmIG5vdCB0aW1lLW91dCB5ZXQgYW5kIGNvbmRpdGlvbiBub3QgeWV0IGZ1bGZpbGxlZFxuICAgICAgICBjb25kaXRpb24gPSAodHlwZW9mICh0ZXN0RngpID09PSBcInN0cmluZ1wiID8gZXZhbCh0ZXN0RngpIDogdGVzdEZ4KCkpOyAvLzwgZGVmZW5zaXZlIGNvZGVcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICghY29uZGl0aW9uKSB7XG4gICAgICAgICAgLy8gSWYgY29uZGl0aW9uIHN0aWxsIG5vdCBmdWxmaWxsZWQgKHRpbWVvdXQgYnV0IGNvbmRpdGlvbiBpcyAnZmFsc2UnKVxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiJ3dhaXRGb3IoKScgdGltZW91dFwiKTtcbiAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTsgLy88IFN0b3AgdGhpcyBpbnRlcnZhbFxuICAgICAgICAgIHR5cGVvZiAob25SZWFkeSkgPT09IFwic3RyaW5nXCIgPyBldmFsKG9uUmVhZHkpIDogb25SZWFkeSgndGltZW91dCcpOyAvLzwgRG8gd2hhdCBpdCdzIHN1cHBvc2VkIHRvIGRvIG9uY2UgdGhlIGNvbmRpdGlvbiBpcyBmdWxmaWxsZWRcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBDb25kaXRpb24gZnVsZmlsbGVkICh0aW1lb3V0IGFuZC9vciBjb25kaXRpb24gaXMgJ3RydWUnKVxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiJ3dhaXRGb3IoKScgZmluaXNoZWQgaW4gXCIgKyAobmV3IERhdGUoKS5nZXRUaW1lKCkgLSBzdGFydCkgKyBcIm1zLlwiKTtcbiAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTsgLy88IFN0b3AgdGhpcyBpbnRlcnZhbFxuICAgICAgICAgIHR5cGVvZiAob25SZWFkeSkgPT09IFwic3RyaW5nXCIgPyBldmFsKG9uUmVhZHkpIDogb25SZWFkeSgnc3VjY2VzcycpOyAvLzwgRG8gd2hhdCBpdCdzIHN1cHBvc2VkIHRvIGRvIG9uY2UgdGhlIGNvbmRpdGlvbiBpcyBmdWxmaWxsZWRcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIDUwKTsgLy88IHJlcGVhdCBjaGVjayBldmVyeSA1MG1zXG59O1xuIiwidmFyIFZlY3RvclRpbGUgPSByZXF1aXJlKCd2ZWN0b3ItdGlsZScpLlZlY3RvclRpbGU7XG52YXIgUHJvdG9idWYgPSByZXF1aXJlKCdwYmYnKTtcbnZhciBQb2ludCA9IHJlcXVpcmUoJ3BvaW50LWdlb21ldHJ5Jyk7XG52YXIgVXRpbCA9IHJlcXVpcmUoJy4vTVZUVXRpbCcpO1xudmFyIE1WVExheWVyID0gcmVxdWlyZSgnLi9NVlRMYXllcicpO1xuXG5cbm1vZHVsZS5leHBvcnRzID0gTC5UaWxlTGF5ZXIuTVZUU291cmNlID0gTC5UaWxlTGF5ZXIuQ2FudmFzLmV4dGVuZCh7XG5cbiAgb3B0aW9uczoge1xuICAgIGRlYnVnOiBmYWxzZSxcbiAgICB1cmw6IFwiXCIsIC8vVVJMIFRPIFZlY3RvciBUaWxlIFNvdXJjZSxcbiAgICBnZXRJREZvckxheWVyRmVhdHVyZTogZnVuY3Rpb24oKSB7fSxcbiAgICB0aWxlU2l6ZTogMjU2LFxuICAgIHZpc2libGVMYXllcnM6IFtdXG4gIH0sXG4gIGxheWVyczoge30sIC8vS2VlcCBhIGxpc3Qgb2YgdGhlIGxheWVycyBjb250YWluZWQgaW4gdGhlIFBCRnNcbiAgcHJvY2Vzc2VkVGlsZXM6IHt9LCAvL0tlZXAgYSBsaXN0IG9mIHRpbGVzIHRoYXQgaGF2ZSBiZWVuIHByb2Nlc3NlZCBhbHJlYWR5XG4gIF9ldmVudEhhbmRsZXJzOiB7fSxcbiAgX3RyaWdnZXJPblRpbGVzTG9hZGVkRXZlbnQ6IHRydWUsIC8vd2hldGhlciBvciBub3QgdG8gZmlyZSB0aGUgb25UaWxlc0xvYWRlZCBldmVudCB3aGVuIGFsbCBvZiB0aGUgdGlsZXMgZmluaXNoIGxvYWRpbmcuXG4gIF91cmw6IFwiXCIsIC8vaW50ZXJuYWwgVVJMIHByb3BlcnR5XG5cbiAgc3R5bGU6IGZ1bmN0aW9uKGZlYXR1cmUpIHtcbiAgICB2YXIgc3R5bGUgPSB7fTtcblxuICAgIHZhciB0eXBlID0gZmVhdHVyZS50eXBlO1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSAxOiAvLydQb2ludCdcbiAgICAgICAgc3R5bGUuY29sb3IgPSAncmdiYSg0OSw3OSw3OSwxKSc7XG4gICAgICAgIHN0eWxlLnJhZGl1cyA9IDU7XG4gICAgICAgIHN0eWxlLnNlbGVjdGVkID0ge1xuICAgICAgICAgIGNvbG9yOiAncmdiYSgyNTUsMjU1LDAsMC41KScsXG4gICAgICAgICAgcmFkaXVzOiA2XG4gICAgICAgIH07XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAyOiAvLydMaW5lU3RyaW5nJ1xuICAgICAgICBzdHlsZS5jb2xvciA9ICdyZ2JhKDE2MSwyMTcsMTU1LDAuOCknO1xuICAgICAgICBzdHlsZS5zaXplID0gMztcbiAgICAgICAgc3R5bGUuc2VsZWN0ZWQgPSB7XG4gICAgICAgICAgY29sb3I6ICdyZ2JhKDI1NSwyNSwwLDAuNSknLFxuICAgICAgICAgIHNpemU6IDRcbiAgICAgICAgfTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDM6IC8vJ1BvbHlnb24nXG4gICAgICAgIHN0eWxlLmNvbG9yID0gJ3JnYmEoNDksNzksNzksMSknO1xuICAgICAgICBzdHlsZS5vdXRsaW5lID0ge1xuICAgICAgICAgIGNvbG9yOiAncmdiYSgxNjEsMjE3LDE1NSwwLjgpJyxcbiAgICAgICAgICBzaXplOiAxXG4gICAgICAgIH07XG4gICAgICAgIHN0eWxlLnNlbGVjdGVkID0ge1xuICAgICAgICAgIGNvbG9yOiAncmdiYSgyNTUsMTQwLDAsMC4zKScsXG4gICAgICAgICAgb3V0bGluZToge1xuICAgICAgICAgICAgY29sb3I6ICdyZ2JhKDI1NSwxNDAsMCwxKScsXG4gICAgICAgICAgICBzaXplOiAyXG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgcmV0dXJuIHN0eWxlO1xuICB9LFxuXG5cbiAgaW5pdGlhbGl6ZTogZnVuY3Rpb24ob3B0aW9ucykge1xuICAgIEwuVXRpbC5zZXRPcHRpb25zKHRoaXMsIG9wdGlvbnMpO1xuXG4gICAgLy9hIGxpc3Qgb2YgdGhlIGxheWVycyBjb250YWluZWQgaW4gdGhlIFBCRnNcbiAgICB0aGlzLmxheWVycyA9IHt9O1xuXG4gICAgLy8gdGlsZXMgY3VycmVudGx5IGluIHRoZSB2aWV3cG9ydFxuICAgIHRoaXMuYWN0aXZlVGlsZXMgPSB7fTtcblxuICAgIC8vIHRoYXRzIHRoYXQgaGF2ZSBiZWVuIGxvYWRlZCBhbmQgZHJhd25cbiAgICB0aGlzLmxvYWRlZFRpbGVzID0ge307XG5cbiAgICB0aGlzLl91cmwgPSB0aGlzLm9wdGlvbnMudXJsO1xuXG4gICAgLyoqXG4gICAgICogRm9yIHNvbWUgcmVhc29uLCBMZWFmbGV0IGhhcyBzb21lIGNvZGUgdGhhdCByZXNldHMgdGhlXG4gICAgICogeiBpbmRleCBpbiB0aGUgb3B0aW9ucyBvYmplY3QuIEknbSBoYXZpbmcgdHJvdWJsZSB0cmFja2luZ1xuICAgICAqIGRvd24gZXhhY3RseSB3aGF0IGRvZXMgdGhpcyBhbmQgd2h5LCBzbyBmb3Igbm93LCB3ZSBzaG91bGRcbiAgICAgKiBqdXN0IGNvcHkgdGhlIHZhbHVlIHRvIHRoaXMuekluZGV4IHNvIHdlIGNhbiBoYXZlIHRoZSByaWdodFxuICAgICAqIG51bWJlciB3aGVuIHdlIG1ha2UgdGhlIHN1YnNlcXVlbnQgTVZUTGF5ZXJzLlxuICAgICAqL1xuICAgIHRoaXMuekluZGV4ID0gb3B0aW9ucy56SW5kZXg7XG5cbiAgICBpZiAodHlwZW9mIG9wdGlvbnMuc3R5bGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRoaXMuc3R5bGUgPSBvcHRpb25zLnN0eWxlO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5hamF4U291cmNlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aGlzLmFqYXhTb3VyY2UgPSBvcHRpb25zLmFqYXhTb3VyY2U7XG4gICAgfVxuXG4gICAgdGhpcy5sYXllckxpbmsgPSBvcHRpb25zLmxheWVyTGluaztcblxuICAgIHRoaXMuX2V2ZW50SGFuZGxlcnMgPSB7fTtcblxuICAgIHRoaXMuX3RpbGVzVG9Qcm9jZXNzID0gMDsgLy9zdG9yZSB0aGUgbWF4IG51bWJlciBvZiB0aWxlcyB0byBiZSBsb2FkZWQuICBMYXRlciwgd2UgY2FuIHVzZSB0aGlzIGNvdW50IHRvIGNvdW50IGRvd24gUEJGIGxvYWRpbmcuXG4gIH0sXG5cbiAgcmVkcmF3OiBmdW5jdGlvbih0cmlnZ2VyT25UaWxlc0xvYWRlZEV2ZW50KXtcbiAgICAvL09ubHkgc2V0IHRvIGZhbHNlIGlmIGl0IGFjdHVhbGx5IGlzIHBhc3NlZCBpbiBhcyAnZmFsc2UnXG4gICAgaWYgKHRyaWdnZXJPblRpbGVzTG9hZGVkRXZlbnQgPT09IGZhbHNlKSB7XG4gICAgICB0aGlzLl90cmlnZ2VyT25UaWxlc0xvYWRlZEV2ZW50ID0gZmFsc2U7XG4gICAgfVxuXG4gICAgTC5UaWxlTGF5ZXIuQ2FudmFzLnByb3RvdHlwZS5yZWRyYXcuY2FsbCh0aGlzKTtcbiAgfSxcblxuICBvbkFkZDogZnVuY3Rpb24obWFwKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHNlbGYubWFwID0gbWFwO1xuICAgIEwuVGlsZUxheWVyLkNhbnZhcy5wcm90b3R5cGUub25BZGQuY2FsbCh0aGlzLCBtYXApO1xuXG4gICAgdmFyIG1hcE9uQ2xpY2tDYWxsYmFjayA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgIHNlbGYuX29uQ2xpY2soZSk7XG4gICAgfTtcblxuICAgIG1hcC5vbignY2xpY2snLCBtYXBPbkNsaWNrQ2FsbGJhY2spO1xuXG4gICAgbWFwLm9uKFwibGF5ZXJyZW1vdmVcIiwgZnVuY3Rpb24oZSkge1xuICAgICAgLy8gY2hlY2sgdG8gc2VlIGlmIHRoZSBsYXllciByZW1vdmVkIGlzIHRoaXMgb25lXG4gICAgICAvLyBjYWxsIGEgbWV0aG9kIHRvIHJlbW92ZSB0aGUgY2hpbGQgbGF5ZXJzICh0aGUgb25lcyB0aGF0IGFjdHVhbGx5IGhhdmUgc29tZXRoaW5nIGRyYXduIG9uIHRoZW0pLlxuICAgICAgaWYgKGUubGF5ZXIuX2xlYWZsZXRfaWQgPT09IHNlbGYuX2xlYWZsZXRfaWQgJiYgZS5sYXllci5yZW1vdmVDaGlsZExheWVycykge1xuICAgICAgICBlLmxheWVyLnJlbW92ZUNoaWxkTGF5ZXJzKG1hcCk7XG4gICAgICAgIG1hcC5vZmYoJ2NsaWNrJywgbWFwT25DbGlja0NhbGxiYWNrKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHNlbGYuYWRkQ2hpbGRMYXllcnMobWFwKTtcblxuICAgIGlmICh0eXBlb2YgRHluYW1pY0xhYmVsID09PSAnZnVuY3Rpb24nICkge1xuICAgICAgdGhpcy5keW5hbWljTGFiZWwgPSBuZXcgRHluYW1pY0xhYmVsKG1hcCwgdGhpcywge30pO1xuICAgIH1cblxuICB9LFxuXG4gIGRyYXdUaWxlOiBmdW5jdGlvbihjYW52YXMsIHRpbGVQb2ludCwgem9vbSkge1xuICAgIHZhciBjdHggPSB7XG4gICAgICBpZDogW3pvb20sIHRpbGVQb2ludC54LCB0aWxlUG9pbnQueV0uam9pbihcIjpcIiksXG4gICAgICBjYW52YXM6IGNhbnZhcyxcbiAgICAgIHRpbGU6IHRpbGVQb2ludCxcbiAgICAgIHpvb206IHpvb20sXG4gICAgICB0aWxlU2l6ZTogdGhpcy5vcHRpb25zLnRpbGVTaXplXG4gICAgfTtcblxuICAgIC8vQ2FwdHVyZSB0aGUgbWF4IG51bWJlciBvZiB0aGUgdGlsZXMgdG8gbG9hZCBoZXJlLiB0aGlzLl90aWxlc1RvUHJvY2VzcyBpcyBhbiBpbnRlcm5hbCBudW1iZXIgd2UgdXNlIHRvIGtub3cgd2hlbiB3ZSd2ZSBmaW5pc2hlZCByZXF1ZXN0aW5nIFBCRnMuXG4gICAgaWYodGhpcy5fdGlsZXNUb1Byb2Nlc3MgPCB0aGlzLl90aWxlc1RvTG9hZCkgdGhpcy5fdGlsZXNUb1Byb2Nlc3MgPSB0aGlzLl90aWxlc1RvTG9hZDtcblxuICAgIHZhciBpZCA9IGN0eC5pZCA9IFV0aWwuZ2V0Q29udGV4dElEKGN0eCk7XG4gICAgdGhpcy5hY3RpdmVUaWxlc1tpZF0gPSBjdHg7XG5cbiAgICBpZighdGhpcy5wcm9jZXNzZWRUaWxlc1tjdHguem9vbV0pIHRoaXMucHJvY2Vzc2VkVGlsZXNbY3R4Lnpvb21dID0ge307XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLmRlYnVnKSB7XG4gICAgICB0aGlzLl9kcmF3RGVidWdJbmZvKGN0eCk7XG4gICAgfVxuICAgIHRoaXMuX2RyYXcoY3R4KTtcbiAgfSxcblxuICBzZXRPcGFjaXR5OmZ1bmN0aW9uKG9wYWNpdHkpIHtcbiAgICB0aGlzLl9zZXRWaXNpYmxlTGF5ZXJzU3R5bGUoJ29wYWNpdHknLG9wYWNpdHkpO1xuICB9LFxuXG4gIHNldFpJbmRleDpmdW5jdGlvbih6SW5kZXgpIHtcbiAgICB0aGlzLl9zZXRWaXNpYmxlTGF5ZXJzU3R5bGUoJ3pJbmRleCcsekluZGV4KTtcbiAgfSxcblxuICBfc2V0VmlzaWJsZUxheWVyc1N0eWxlOmZ1bmN0aW9uKHN0eWxlLCB2YWx1ZSkge1xuICAgIGZvcih2YXIga2V5IGluIHRoaXMubGF5ZXJzKSB7XG4gICAgICB0aGlzLmxheWVyc1trZXldLl90aWxlQ29udGFpbmVyLnN0eWxlW3N0eWxlXSA9IHZhbHVlO1xuICAgIH1cbiAgfSxcblxuICBfZHJhd0RlYnVnSW5mbzogZnVuY3Rpb24oY3R4KSB7XG4gICAgdmFyIG1heCA9IHRoaXMub3B0aW9ucy50aWxlU2l6ZTtcbiAgICB2YXIgZyA9IGN0eC5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBnLnN0cm9rZVN0eWxlID0gJyMwMDAwMDAnO1xuICAgIGcuZmlsbFN0eWxlID0gJyNGRkZGMDAnO1xuICAgIGcuc3Ryb2tlUmVjdCgwLCAwLCBtYXgsIG1heCk7XG4gICAgZy5mb250ID0gXCIxMnB4IEFyaWFsXCI7XG4gICAgZy5maWxsUmVjdCgwLCAwLCA1LCA1KTtcbiAgICBnLmZpbGxSZWN0KDAsIG1heCAtIDUsIDUsIDUpO1xuICAgIGcuZmlsbFJlY3QobWF4IC0gNSwgMCwgNSwgNSk7XG4gICAgZy5maWxsUmVjdChtYXggLSA1LCBtYXggLSA1LCA1LCA1KTtcbiAgICBnLmZpbGxSZWN0KG1heCAvIDIgLSA1LCBtYXggLyAyIC0gNSwgMTAsIDEwKTtcbiAgICBnLnN0cm9rZVRleHQoY3R4Lnpvb20gKyAnICcgKyBjdHgudGlsZS54ICsgJyAnICsgY3R4LnRpbGUueSwgbWF4IC8gMiAtIDMwLCBtYXggLyAyIC0gMTApO1xuICB9LFxuXG4gIF9kcmF3OiBmdW5jdGlvbihjdHgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbi8vICAgIC8vVGhpcyB3b3JrcyB0byBza2lwIGZldGNoaW5nIGFuZCBwcm9jZXNzaW5nIHRpbGVzIGlmIHRoZXkndmUgYWxyZWFkeSBiZWVuIHByb2Nlc3NlZC5cbi8vICAgIHZhciB2ZWN0b3JUaWxlID0gdGhpcy5wcm9jZXNzZWRUaWxlc1tjdHguem9vbV1bY3R4LmlkXTtcbi8vICAgIC8vaWYgd2UndmUgYWxyZWFkeSBwYXJzZWQgaXQsIGRvbid0IGdldCBpdCBhZ2Fpbi5cbi8vICAgIGlmKHZlY3RvclRpbGUpe1xuLy8gICAgICBjb25zb2xlLmxvZyhcIlNraXBwaW5nIGZldGNoaW5nIFwiICsgY3R4LmlkKTtcbi8vICAgICAgc2VsZi5jaGVja1ZlY3RvclRpbGVMYXllcnMocGFyc2VWVCh2ZWN0b3JUaWxlKSwgY3R4LCB0cnVlKTtcbi8vICAgICAgc2VsZi5yZWR1Y2VUaWxlc1RvUHJvY2Vzc0NvdW50KCk7XG4vLyAgICAgIHJldHVybjtcbi8vICAgIH1cblxuICAgIGlmICghdGhpcy5fdXJsKSByZXR1cm47XG4gICAgdmFyIHNyYyA9IHRoaXMuZ2V0VGlsZVVybCh7IHg6IGN0eC50aWxlLngsIHk6IGN0eC50aWxlLnksIHo6IGN0eC56b29tIH0pO1xuXG4gICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgIHhoci5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgIGlmICh4aHIuc3RhdHVzID09IFwiMjAwXCIpIHtcblxuICAgICAgICBpZigheGhyLnJlc3BvbnNlKSByZXR1cm47XG5cbiAgICAgICAgdmFyIGFycmF5QnVmZmVyID0gbmV3IFVpbnQ4QXJyYXkoeGhyLnJlc3BvbnNlKTtcbiAgICAgICAgdmFyIGJ1ZiA9IG5ldyBQcm90b2J1ZihhcnJheUJ1ZmZlcik7XG4gICAgICAgIHZhciB2dCA9IG5ldyBWZWN0b3JUaWxlKGJ1Zik7XG4gICAgICAgIC8vQ2hlY2sgdGhlIGN1cnJlbnQgbWFwIGxheWVyIHpvb20uICBJZiBmYXN0IHpvb21pbmcgaXMgb2NjdXJyaW5nLCB0aGVuIHNob3J0IGNpcmN1aXQgdGlsZXMgdGhhdCBhcmUgZm9yIGEgZGlmZmVyZW50IHpvb20gbGV2ZWwgdGhhbiB3ZSdyZSBjdXJyZW50bHkgb24uXG4gICAgICAgIGlmKHNlbGYubWFwICYmIHNlbGYubWFwLmdldFpvb20oKSAhPSBjdHguem9vbSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiRmV0Y2hlZCB0aWxlIGZvciB6b29tIGxldmVsIFwiICsgY3R4Lnpvb20gKyBcIi4gTWFwIGlzIGF0IHpvb20gbGV2ZWwgXCIgKyBzZWxmLl9tYXAuZ2V0Wm9vbSgpKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgc2VsZi5jaGVja1ZlY3RvclRpbGVMYXllcnMocGFyc2VWVCh2dCksIGN0eCk7XG4gICAgICAgIHRpbGVMb2FkZWQoc2VsZiwgY3R4KTtcbiAgICAgIH1cblxuICAgICAgLy9laXRoZXIgd2F5LCByZWR1Y2UgdGhlIGNvdW50IG9mIHRpbGVzVG9Qcm9jZXNzIHRpbGVzIGhlcmVcbiAgICAgIHNlbGYucmVkdWNlVGlsZXNUb1Byb2Nlc3NDb3VudCgpO1xuICAgIH07XG5cbiAgICB4aHIub25lcnJvciA9IGZ1bmN0aW9uKCkge1xuICAgICAgY29uc29sZS5sb2coXCJ4aHIgZXJyb3I6IFwiICsgeGhyLnN0YXR1cylcbiAgICB9O1xuXG4gICAgeGhyLm9wZW4oJ0dFVCcsIHNyYywgdHJ1ZSk7IC8vYXN5bmMgaXMgdHJ1ZVxuICAgIHhoci5yZXNwb25zZVR5cGUgPSAnYXJyYXlidWZmZXInO1xuICAgIHhoci5zZW5kKCk7XG4gIH0sXG5cbiAgcmVkdWNlVGlsZXNUb1Byb2Nlc3NDb3VudDogZnVuY3Rpb24oKXtcbiAgICB0aGlzLl90aWxlc1RvUHJvY2Vzcy0tO1xuICAgIGlmKCF0aGlzLl90aWxlc1RvUHJvY2Vzcyl7XG4gICAgICAvL1RyaWdnZXIgZXZlbnQgbGV0dGluZyB1cyBrbm93IHRoYXQgYWxsIFBCRnMgaGF2ZSBiZWVuIGxvYWRlZCBhbmQgcHJvY2Vzc2VkIChvciA0MDQnZCkuXG4gICAgICBpZih0aGlzLl9ldmVudEhhbmRsZXJzW1wiUEJGTG9hZFwiXSkgdGhpcy5fZXZlbnRIYW5kbGVyc1tcIlBCRkxvYWRcIl0oKTtcbiAgICAgIHRoaXMuX3BiZkxvYWRlZCgpO1xuICAgIH1cbiAgfSxcblxuICBjaGVja1ZlY3RvclRpbGVMYXllcnM6IGZ1bmN0aW9uKHZ0LCBjdHgsIHBhcnNlZCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIC8vQ2hlY2sgaWYgdGhlcmUgYXJlIHNwZWNpZmllZCB2aXNpYmxlIGxheWVyc1xuICAgIGlmKHNlbGYub3B0aW9ucy52aXNpYmxlTGF5ZXJzICYmIHNlbGYub3B0aW9ucy52aXNpYmxlTGF5ZXJzLmxlbmd0aCA+IDApe1xuICAgICAgLy9vbmx5IGxldCB0aHJ1IHRoZSBsYXllcnMgbGlzdGVkIGluIHRoZSB2aXNpYmxlTGF5ZXJzIGFycmF5XG4gICAgICBmb3IodmFyIGk9MDsgaSA8IHNlbGYub3B0aW9ucy52aXNpYmxlTGF5ZXJzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgdmFyIGxheWVyTmFtZSA9IHNlbGYub3B0aW9ucy52aXNpYmxlTGF5ZXJzW2ldO1xuICAgICAgICBpZih2dC5sYXllcnNbbGF5ZXJOYW1lXSl7XG4gICAgICAgICAgIC8vUHJvY2VlZCB3aXRoIHBhcnNpbmdcbiAgICAgICAgICBzZWxmLnByZXBhcmVNVlRMYXllcnModnQubGF5ZXJzW2xheWVyTmFtZV0sIGxheWVyTmFtZSwgY3R4LCBwYXJzZWQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfWVsc2V7XG4gICAgICAvL1BhcnNlIGFsbCB2dC5sYXllcnNcbiAgICAgIGZvciAodmFyIGtleSBpbiB2dC5sYXllcnMpIHtcbiAgICAgICAgc2VsZi5wcmVwYXJlTVZUTGF5ZXJzKHZ0LmxheWVyc1trZXldLCBrZXksIGN0eCwgcGFyc2VkKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgcHJlcGFyZU1WVExheWVyczogZnVuY3Rpb24obHlyICxrZXksIGN0eCwgcGFyc2VkKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgaWYgKCFzZWxmLmxheWVyc1trZXldKSB7XG4gICAgICAvL0NyZWF0ZSBNVlRMYXllciBvciBNVlRQb2ludExheWVyIGZvciB1c2VyXG4gICAgICBzZWxmLmxheWVyc1trZXldID0gc2VsZi5jcmVhdGVNVlRMYXllcihrZXksIGx5ci5wYXJzZWRGZWF0dXJlc1swXS50eXBlIHx8IG51bGwpO1xuICAgIH1cblxuICAgIGlmIChwYXJzZWQpIHtcbiAgICAgIC8vV2UndmUgYWxyZWFkeSBwYXJzZWQgaXQuICBHbyBnZXQgY2FudmFzIGFuZCBkcmF3LlxuICAgICAgc2VsZi5sYXllcnNba2V5XS5nZXRDYW52YXMoY3R4LCBseXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZWxmLmxheWVyc1trZXldLnBhcnNlVmVjdG9yVGlsZUxheWVyKGx5ciwgY3R4KTtcbiAgICB9XG5cbiAgfSxcblxuICBjcmVhdGVNVlRMYXllcjogZnVuY3Rpb24oa2V5LCB0eXBlKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgdmFyIGdldElERm9yTGF5ZXJGZWF0dXJlO1xuICAgIGlmICh0eXBlb2Ygc2VsZi5vcHRpb25zLmdldElERm9yTGF5ZXJGZWF0dXJlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBnZXRJREZvckxheWVyRmVhdHVyZSA9IHNlbGYub3B0aW9ucy5nZXRJREZvckxheWVyRmVhdHVyZTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2V0SURGb3JMYXllckZlYXR1cmUgPSBVdGlsLmdldElERm9yTGF5ZXJGZWF0dXJlO1xuICAgIH1cblxuICAgIHZhciBvcHRpb25zID0ge1xuICAgICAgZ2V0SURGb3JMYXllckZlYXR1cmU6IGdldElERm9yTGF5ZXJGZWF0dXJlLFxuICAgICAgZmlsdGVyOiBzZWxmLm9wdGlvbnMuZmlsdGVyLFxuICAgICAgbGF5ZXJPcmRlcmluZzogc2VsZi5vcHRpb25zLmxheWVyT3JkZXJpbmcsXG4gICAgICBzdHlsZTogc2VsZi5zdHlsZSxcbiAgICAgIG5hbWU6IGtleSxcbiAgICAgIGFzeW5jaDogdHJ1ZVxuICAgIH07XG5cbiAgICBpZiAoc2VsZi5vcHRpb25zLnpJbmRleCkge1xuICAgICAgb3B0aW9ucy56SW5kZXggPSBzZWxmLnpJbmRleDtcbiAgICB9XG5cbiAgICAvL1Rha2UgdGhlIGxheWVyIGFuZCBjcmVhdGUgYSBuZXcgTVZUTGF5ZXIgb3IgTVZUUG9pbnRMYXllciBpZiBvbmUgZG9lc24ndCBleGlzdC5cbiAgICB2YXIgbGF5ZXIgPSBuZXcgTVZUTGF5ZXIoc2VsZiwgb3B0aW9ucykuYWRkVG8oc2VsZi5tYXApO1xuXG4gICAgcmV0dXJuIGxheWVyO1xuICB9LFxuXG4gIGdldExheWVyczogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMubGF5ZXJzO1xuICB9LFxuXG4gIGhpZGVMYXllcjogZnVuY3Rpb24oaWQpIHtcbiAgICBpZiAodGhpcy5sYXllcnNbaWRdKSB7XG4gICAgICB0aGlzLl9tYXAucmVtb3ZlTGF5ZXIodGhpcy5sYXllcnNbaWRdKTtcbiAgICAgIGlmKHRoaXMub3B0aW9ucy52aXNpYmxlTGF5ZXJzLmluZGV4T2YoXCJpZFwiKSA+IC0xKXtcbiAgICAgICAgdGhpcy52aXNpYmxlTGF5ZXJzLnNwbGljZSh0aGlzLm9wdGlvbnMudmlzaWJsZUxheWVycy5pbmRleE9mKFwiaWRcIiksIDEpO1xuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICBzaG93TGF5ZXI6IGZ1bmN0aW9uKGlkKSB7XG4gICAgaWYgKHRoaXMubGF5ZXJzW2lkXSkge1xuICAgICAgdGhpcy5fbWFwLmFkZExheWVyKHRoaXMubGF5ZXJzW2lkXSk7XG4gICAgICBpZih0aGlzLm9wdGlvbnMudmlzaWJsZUxheWVycy5pbmRleE9mKFwiaWRcIikgPT0gLTEpe1xuICAgICAgICB0aGlzLnZpc2libGVMYXllcnMucHVzaChpZCk7XG4gICAgICB9XG4gICAgfVxuICAgIC8vTWFrZSBzdXJlIG1hbmFnZXIgbGF5ZXIgaXMgYWx3YXlzIGluIGZyb250XG4gICAgdGhpcy5icmluZ1RvRnJvbnQoKTtcbiAgfSxcblxuICByZW1vdmVDaGlsZExheWVyczogZnVuY3Rpb24obWFwKXtcbiAgICAvL1JlbW92ZSBjaGlsZCBsYXllcnMgb2YgdGhpcyBncm91cCBsYXllclxuICAgIGZvciAodmFyIGtleSBpbiB0aGlzLmxheWVycykge1xuICAgICAgdmFyIGxheWVyID0gdGhpcy5sYXllcnNba2V5XTtcbiAgICAgIG1hcC5yZW1vdmVMYXllcihsYXllcik7XG4gICAgfVxuICB9LFxuXG4gIGFkZENoaWxkTGF5ZXJzOiBmdW5jdGlvbihtYXApIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgaWYoc2VsZi5vcHRpb25zLnZpc2libGVMYXllcnMubGVuZ3RoID4gMCl7XG4gICAgICAvL29ubHkgbGV0IHRocnUgdGhlIGxheWVycyBsaXN0ZWQgaW4gdGhlIHZpc2libGVMYXllcnMgYXJyYXlcbiAgICAgIGZvcih2YXIgaT0wOyBpIDwgc2VsZi5vcHRpb25zLnZpc2libGVMYXllcnMubGVuZ3RoOyBpKyspe1xuICAgICAgICB2YXIgbGF5ZXJOYW1lID0gc2VsZi5vcHRpb25zLnZpc2libGVMYXllcnNbaV07XG4gICAgICAgIHZhciBsYXllciA9IHRoaXMubGF5ZXJzW2xheWVyTmFtZV07XG4gICAgICAgIGlmKGxheWVyKXtcbiAgICAgICAgICAvL1Byb2NlZWQgd2l0aCBwYXJzaW5nXG4gICAgICAgICAgbWFwLmFkZExheWVyKGxheWVyKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1lbHNle1xuICAgICAgLy9BZGQgYWxsIGxheWVyc1xuICAgICAgZm9yICh2YXIga2V5IGluIHRoaXMubGF5ZXJzKSB7XG4gICAgICAgIHZhciBsYXllciA9IHRoaXMubGF5ZXJzW2tleV07XG4gICAgICAgIC8vIGxheWVyIGlzIHNldCB0byB2aXNpYmxlIGFuZCBpcyBub3QgYWxyZWFkeSBvbiBtYXBcbiAgICAgICAgaWYgKCFsYXllci5fbWFwKSB7XG4gICAgICAgICAgbWFwLmFkZExheWVyKGxheWVyKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICBiaW5kOiBmdW5jdGlvbihldmVudFR5cGUsIGNhbGxiYWNrKSB7XG4gICAgdGhpcy5fZXZlbnRIYW5kbGVyc1tldmVudFR5cGVdID0gY2FsbGJhY2s7XG4gIH0sXG5cbiAgX29uQ2xpY2s6IGZ1bmN0aW9uKGV2dCkge1xuICAgIC8vSGVyZSwgcGFzcyB0aGUgZXZlbnQgb24gdG8gdGhlIGNoaWxkIE1WVExheWVyIGFuZCBoYXZlIGl0IGRvIHRoZSBoaXQgdGVzdCBhbmQgaGFuZGxlIHRoZSByZXN1bHQuXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHZhciBvbkNsaWNrID0gc2VsZi5vcHRpb25zLm9uQ2xpY2s7XG4gICAgdmFyIGNsaWNrYWJsZUxheWVycyA9IHNlbGYub3B0aW9ucy5jbGlja2FibGVMYXllcnM7XG4gICAgdmFyIGxheWVycyA9IHNlbGYubGF5ZXJzO1xuXG4gICAgZXZ0LnRpbGVJRCA9ICBnZXRUaWxlVVJMKGV2dC5sYXRsbmcubGF0LCBldnQubGF0bG5nLmxuZywgdGhpcy5tYXAuZ2V0Wm9vbSgpKTtcblxuICAgIC8vIFdlIG11c3QgaGF2ZSBhbiBhcnJheSBvZiBjbGlja2FibGUgbGF5ZXJzLCBvdGhlcndpc2UsIHdlIGp1c3QgcGFzc1xuICAgIC8vIHRoZSBldmVudCB0byB0aGUgcHVibGljIG9uQ2xpY2sgY2FsbGJhY2sgaW4gb3B0aW9ucy5cblxuICAgIGlmKCFjbGlja2FibGVMYXllcnMpe1xuICAgICAgY2xpY2thYmxlTGF5ZXJzID0gT2JqZWN0LmtleXMoc2VsZi5sYXllcnMpO1xuICAgIH1cblxuICAgIGlmIChjbGlja2FibGVMYXllcnMgJiYgY2xpY2thYmxlTGF5ZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBjbGlja2FibGVMYXllcnMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgdmFyIGtleSA9IGNsaWNrYWJsZUxheWVyc1tpXTtcbiAgICAgICAgdmFyIGxheWVyID0gbGF5ZXJzW2tleV07XG4gICAgICAgIGlmIChsYXllcikge1xuICAgICAgICAgIGxheWVyLmhhbmRsZUNsaWNrRXZlbnQoZXZ0LCBmdW5jdGlvbihldnQpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb25DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICBvbkNsaWNrKGV2dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHR5cGVvZiBvbkNsaWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIG9uQ2xpY2soZXZ0KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgfSxcblxuICBzZXRGaWx0ZXI6IGZ1bmN0aW9uKGZpbHRlckZ1bmN0aW9uLCBsYXllck5hbWUpIHtcbiAgICAvL3Rha2UgaW4gYSBuZXcgZmlsdGVyIGZ1bmN0aW9uLlxuICAgIC8vUHJvcGFnYXRlIHRvIGNoaWxkIGxheWVycy5cblxuICAgIC8vQWRkIGZpbHRlciB0byBhbGwgY2hpbGQgbGF5ZXJzIGlmIG5vIGxheWVyIGlzIHNwZWNpZmllZC5cbiAgICBmb3IgKHZhciBrZXkgaW4gdGhpcy5sYXllcnMpIHtcbiAgICAgIHZhciBsYXllciA9IHRoaXMubGF5ZXJzW2tleV07XG5cbiAgICAgIGlmIChsYXllck5hbWUpe1xuICAgICAgICBpZihrZXkudG9Mb3dlckNhc2UoKSA9PSBsYXllck5hbWUudG9Mb3dlckNhc2UoKSl7XG4gICAgICAgICAgbGF5ZXIub3B0aW9ucy5maWx0ZXIgPSBmaWx0ZXJGdW5jdGlvbjsgLy9Bc3NpZ24gZmlsdGVyIHRvIGNoaWxkIGxheWVyLCBvbmx5IGlmIG5hbWUgbWF0Y2hlc1xuICAgICAgICAgIC8vQWZ0ZXIgZmlsdGVyIGlzIHNldCwgdGhlIG9sZCBmZWF0dXJlIGhhc2hlcyBhcmUgaW52YWxpZC4gIENsZWFyIHRoZW0gZm9yIG5leHQgZHJhdy5cbiAgICAgICAgICBsYXllci5jbGVhckxheWVyRmVhdHVyZUhhc2goKTtcbiAgICAgICAgICAvL2xheWVyLmNsZWFyVGlsZUZlYXR1cmVIYXNoKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2V7XG4gICAgICAgIGxheWVyLm9wdGlvbnMuZmlsdGVyID0gZmlsdGVyRnVuY3Rpb247IC8vQXNzaWduIGZpbHRlciB0byBjaGlsZCBsYXllclxuICAgICAgICAvL0FmdGVyIGZpbHRlciBpcyBzZXQsIHRoZSBvbGQgZmVhdHVyZSBoYXNoZXMgYXJlIGludmFsaWQuICBDbGVhciB0aGVtIGZvciBuZXh0IGRyYXcuXG4gICAgICAgIGxheWVyLmNsZWFyTGF5ZXJGZWF0dXJlSGFzaCgpO1xuICAgICAgICAvL2xheWVyLmNsZWFyVGlsZUZlYXR1cmVIYXNoKCk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBUYWtlIGluIGEgbmV3IHN0eWxlIGZ1bmN0aW9uIGFuZCBwcm9wb2dhdGUgdG8gY2hpbGQgbGF5ZXJzLlxuICAgKiBJZiB5b3UgZG8gbm90IHNldCBhIGxheWVyIG5hbWUsIGl0IHJlc2V0cyB0aGUgc3R5bGUgZm9yIGFsbCBvZiB0aGUgbGF5ZXJzLlxuICAgKiBAcGFyYW0gc3R5bGVGdW5jdGlvblxuICAgKiBAcGFyYW0gbGF5ZXJOYW1lXG4gICAqL1xuICBzZXRTdHlsZTogZnVuY3Rpb24oc3R5bGVGbiwgbGF5ZXJOYW1lKSB7XG4gICAgZm9yICh2YXIga2V5IGluIHRoaXMubGF5ZXJzKSB7XG4gICAgICB2YXIgbGF5ZXIgPSB0aGlzLmxheWVyc1trZXldO1xuICAgICAgaWYgKGxheWVyTmFtZSkge1xuICAgICAgICBpZihrZXkudG9Mb3dlckNhc2UoKSA9PSBsYXllck5hbWUudG9Mb3dlckNhc2UoKSkge1xuICAgICAgICAgIGxheWVyLnNldFN0eWxlKHN0eWxlRm4pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsYXllci5zZXRTdHlsZShzdHlsZUZuKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgZmVhdHVyZVNlbGVjdGVkOiBmdW5jdGlvbihtdnRGZWF0dXJlKSB7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5tdXRleFRvZ2dsZSkge1xuICAgICAgaWYgKHRoaXMuX3NlbGVjdGVkRmVhdHVyZSkge1xuICAgICAgICB0aGlzLl9zZWxlY3RlZEZlYXR1cmUuZGVzZWxlY3QoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX3NlbGVjdGVkRmVhdHVyZSA9IG12dEZlYXR1cmU7XG4gICAgfVxuICAgIGlmICh0aGlzLm9wdGlvbnMub25TZWxlY3QpIHtcbiAgICAgIHRoaXMub3B0aW9ucy5vblNlbGVjdChtdnRGZWF0dXJlKTtcbiAgICB9XG4gIH0sXG5cbiAgZmVhdHVyZURlc2VsZWN0ZWQ6IGZ1bmN0aW9uKG12dEZlYXR1cmUpIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLm11dGV4VG9nZ2xlICYmIHRoaXMuX3NlbGVjdGVkRmVhdHVyZSkge1xuICAgICAgdGhpcy5fc2VsZWN0ZWRGZWF0dXJlID0gbnVsbDtcbiAgICB9XG4gICAgaWYgKHRoaXMub3B0aW9ucy5vbkRlc2VsZWN0KSB7XG4gICAgICB0aGlzLm9wdGlvbnMub25EZXNlbGVjdChtdnRGZWF0dXJlKTtcbiAgICB9XG4gIH0sXG5cbiAgX3BiZkxvYWRlZDogZnVuY3Rpb24oKSB7XG4gICAgLy9GaXJlcyB3aGVuIGFsbCB0aWxlcyBmcm9tIHRoaXMgbGF5ZXIgaGF2ZSBiZWVuIGxvYWRlZCBhbmQgZHJhd24gKG9yIDQwNCdkKS5cblxuICAgIC8vTWFrZSBzdXJlIG1hbmFnZXIgbGF5ZXIgaXMgYWx3YXlzIGluIGZyb250XG4gICAgdGhpcy5icmluZ1RvRnJvbnQoKTtcblxuICAgIC8vU2VlIGlmIHRoZXJlIGlzIGFuIGV2ZW50IHRvIGV4ZWN1dGVcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdmFyIG9uVGlsZXNMb2FkZWQgPSBzZWxmLm9wdGlvbnMub25UaWxlc0xvYWRlZDtcblxuICAgIGlmIChvblRpbGVzTG9hZGVkICYmIHR5cGVvZiBvblRpbGVzTG9hZGVkID09PSAnZnVuY3Rpb24nICYmIHRoaXMuX3RyaWdnZXJPblRpbGVzTG9hZGVkRXZlbnQgPT09IHRydWUpIHtcbiAgICAgIG9uVGlsZXNMb2FkZWQodGhpcyk7XG4gICAgfVxuICAgIHNlbGYuX3RyaWdnZXJPblRpbGVzTG9hZGVkRXZlbnQgPSB0cnVlOyAvL3Jlc2V0IC0gaWYgcmVkcmF3KCkgaXMgY2FsbGVkIHdpdGggdGhlIG9wdGluYWwgJ2ZhbHNlJyBwYXJhbWV0ZXIgdG8gdGVtcG9yYXJpbHkgZGlzYWJsZSB0aGUgb25UaWxlc0xvYWRlZCBldmVudCBmcm9tIGZpcmluZy4gIFRoaXMgcmVzZXRzIGl0IGJhY2sgdG8gdHJ1ZSBhZnRlciBhIHNpbmdsZSB0aW1lIG9mIGZpcmluZyBhcyAnZmFsc2UnLlxuICB9XG5cbn0pO1xuXG5cbmlmICh0eXBlb2YoTnVtYmVyLnByb3RvdHlwZS50b1JhZCkgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgTnVtYmVyLnByb3RvdHlwZS50b1JhZCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzICogTWF0aC5QSSAvIDE4MDtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRUaWxlVVJMKGxhdCwgbG9uLCB6b29tKSB7XG4gIHZhciB4dGlsZSA9IHBhcnNlSW50KE1hdGguZmxvb3IoIChsb24gKyAxODApIC8gMzYwICogKDE8PHpvb20pICkpO1xuICB2YXIgeXRpbGUgPSBwYXJzZUludChNYXRoLmZsb29yKCAoMSAtIE1hdGgubG9nKE1hdGgudGFuKGxhdC50b1JhZCgpKSArIDEgLyBNYXRoLmNvcyhsYXQudG9SYWQoKSkpIC8gTWF0aC5QSSkgLyAyICogKDE8PHpvb20pICkpO1xuICByZXR1cm4gXCJcIiArIHpvb20gKyBcIjpcIiArIHh0aWxlICsgXCI6XCIgKyB5dGlsZTtcbn1cblxuZnVuY3Rpb24gdGlsZUxvYWRlZChwYmZTb3VyY2UsIGN0eCkge1xuICBwYmZTb3VyY2UubG9hZGVkVGlsZXNbY3R4LmlkXSA9IGN0eDtcbn1cblxuZnVuY3Rpb24gcGFyc2VWVCh2dCl7XG4gIGZvciAodmFyIGtleSBpbiB2dC5sYXllcnMpIHtcbiAgICB2YXIgbHlyID0gdnQubGF5ZXJzW2tleV07XG4gICAgcGFyc2VWVEZlYXR1cmVzKGx5cik7XG4gIH1cbiAgcmV0dXJuIHZ0O1xufVxuXG5mdW5jdGlvbiBwYXJzZVZURmVhdHVyZXModnRsKXtcbiAgdnRsLnBhcnNlZEZlYXR1cmVzID0gW107XG4gIHZhciBmZWF0dXJlcyA9IHZ0bC5fZmVhdHVyZXM7XG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBmZWF0dXJlcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIHZhciB2dGYgPSB2dGwuZmVhdHVyZShpKTtcbiAgICB2dGYuY29vcmRpbmF0ZXMgPSB2dGYubG9hZEdlb21ldHJ5KCk7XG4gICAgdnRsLnBhcnNlZEZlYXR1cmVzLnB1c2godnRmKTtcbiAgfVxuICByZXR1cm4gdnRsO1xufVxuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IE5pY2hvbGFzIEhhbGxhaGFuIDxuaGFsbGFoYW5Ac3BhdGlhbGRldi5jb20+XG4gKiAgICAgICBvbiA4LzE1LzE0LlxuICovXG52YXIgVXRpbCA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cblV0aWwuZ2V0Q29udGV4dElEID0gZnVuY3Rpb24oY3R4KSB7XG4gIHJldHVybiBbY3R4Lnpvb20sIGN0eC50aWxlLngsIGN0eC50aWxlLnldLmpvaW4oXCI6XCIpO1xufTtcblxuLyoqXG4gKiBEZWZhdWx0IGZ1bmN0aW9uIHRoYXQgZ2V0cyB0aGUgaWQgZm9yIGEgbGF5ZXIgZmVhdHVyZS5cbiAqIFNvbWV0aW1lcyB0aGlzIG5lZWRzIHRvIGJlIGRvbmUgaW4gYSBkaWZmZXJlbnQgd2F5IGFuZFxuICogY2FuIGJlIHNwZWNpZmllZCBieSB0aGUgdXNlciBpbiB0aGUgb3B0aW9ucyBmb3IgTC5UaWxlTGF5ZXIuTVZUU291cmNlLlxuICpcbiAqIEBwYXJhbSBmZWF0dXJlXG4gKiBAcmV0dXJucyB7Y3R4LmlkfCp8aWR8c3RyaW5nfGpzdHMuaW5kZXguY2hhaW4uTW9ub3RvbmVDaGFpbi5pZHxudW1iZXJ9XG4gKi9cblV0aWwuZ2V0SURGb3JMYXllckZlYXR1cmUgPSBmdW5jdGlvbihmZWF0dXJlKSB7XG4gIHJldHVybiBmZWF0dXJlLnByb3BlcnRpZXMuaWQ7XG59O1xuXG5VdGlsLmdldEpTT04gPSBmdW5jdGlvbih1cmwsIGNhbGxiYWNrKSB7XG4gIHZhciB4bWxodHRwID0gdHlwZW9mIFhNTEh0dHBSZXF1ZXN0ICE9PSAndW5kZWZpbmVkJyA/IG5ldyBYTUxIdHRwUmVxdWVzdCgpIDogbmV3IEFjdGl2ZVhPYmplY3QoJ01pY3Jvc29mdC5YTUxIVFRQJyk7XG4gIHhtbGh0dHAub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHN0YXR1cyA9IHhtbGh0dHAuc3RhdHVzO1xuICAgIGlmICh4bWxodHRwLnJlYWR5U3RhdGUgPT09IDQgJiYgc3RhdHVzID49IDIwMCAmJiBzdGF0dXMgPCAzMDApIHtcbiAgICAgIHZhciBqc29uID0gSlNPTi5wYXJzZSh4bWxodHRwLnJlc3BvbnNlVGV4dCk7XG4gICAgICBjYWxsYmFjayhudWxsLCBqc29uKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2FsbGJhY2soIHsgZXJyb3I6IHRydWUsIHN0YXR1czogc3RhdHVzIH0gKTtcbiAgICB9XG4gIH07XG4gIHhtbGh0dHAub3BlbihcIkdFVFwiLCB1cmwsIHRydWUpO1xuICB4bWxodHRwLnNlbmQoKTtcbn07XG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgTmljaG9sYXMgSGFsbGFoYW4gPG5oYWxsYWhhbkBzcGF0aWFsZGV2LmNvbT5cbiAqICAgICAgIG9uIDcvMzEvMTQuXG4gKi9cbnZhciBVdGlsID0gcmVxdWlyZSgnLi4vTVZUVXRpbCcpO1xubW9kdWxlLmV4cG9ydHMgPSBTdGF0aWNMYWJlbDtcblxuZnVuY3Rpb24gU3RhdGljTGFiZWwobXZ0RmVhdHVyZSwgY3R4LCBsYXRMbmcsIHN0eWxlKSB7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgdGhpcy5tdnRGZWF0dXJlID0gbXZ0RmVhdHVyZTtcbiAgdGhpcy5tYXAgPSBtdnRGZWF0dXJlLm1hcDtcbiAgdGhpcy56b29tID0gY3R4Lnpvb207XG4gIHRoaXMubGF0TG5nID0gbGF0TG5nO1xuICB0aGlzLnNlbGVjdGVkID0gZmFsc2U7XG5cbiAgaWYgKG12dEZlYXR1cmUubGlua2VkRmVhdHVyZSkge1xuICAgIHZhciBsaW5rZWRGZWF0dXJlID0gbXZ0RmVhdHVyZS5saW5rZWRGZWF0dXJlKCk7XG4gICAgaWYgKGxpbmtlZEZlYXR1cmUgJiYgbGlua2VkRmVhdHVyZS5zZWxlY3RlZCkge1xuICAgICAgc2VsZi5zZWxlY3RlZCA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgaW5pdChzZWxmLCBtdnRGZWF0dXJlLCBjdHgsIGxhdExuZywgc3R5bGUpXG59XG5cbmZ1bmN0aW9uIGluaXQoc2VsZiwgbXZ0RmVhdHVyZSwgY3R4LCBsYXRMbmcsIHN0eWxlKSB7XG4gIHZhciBhamF4RGF0YSA9IG12dEZlYXR1cmUuYWpheERhdGE7XG4gIHZhciBzdHkgPSBzZWxmLnN0eWxlID0gc3R5bGUuc3RhdGljTGFiZWwobXZ0RmVhdHVyZSwgYWpheERhdGEpO1xuICB2YXIgaWNvbiA9IHNlbGYuaWNvbiA9IEwuZGl2SWNvbih7XG4gICAgY2xhc3NOYW1lOiBzdHkuY3NzQ2xhc3MgfHwgJ2xhYmVsLWljb24tdGV4dCcsXG4gICAgaHRtbDogc3R5Lmh0bWwsXG4gICAgaWNvblNpemU6IHN0eS5pY29uU2l6ZSB8fCBbNTAsNTBdXG4gIH0pO1xuXG4gIHNlbGYubWFya2VyID0gTC5tYXJrZXIobGF0TG5nLCB7aWNvbjogaWNvbn0pLmFkZFRvKHNlbGYubWFwKTtcblxuICBpZiAoc2VsZi5zZWxlY3RlZCkge1xuICAgIHNlbGYubWFya2VyLl9pY29uLmNsYXNzTGlzdC5hZGQoc2VsZi5zdHlsZS5jc3NTZWxlY3RlZENsYXNzIHx8ICdsYWJlbC1pY29uLXRleHQtc2VsZWN0ZWQnKTtcbiAgfVxuXG4gIHNlbGYubWFya2VyLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICBzZWxmLnRvZ2dsZSgpO1xuICB9KTtcblxuICBzZWxmLm1hcC5vbignem9vbWVuZCcsIGZ1bmN0aW9uKGUpIHtcbiAgICB2YXIgbmV3Wm9vbSA9IGUudGFyZ2V0LmdldFpvb20oKTtcbiAgICBpZiAoc2VsZi56b29tICE9PSBuZXdab29tKSB7XG4gICAgICBzZWxmLm1hcC5yZW1vdmVMYXllcihzZWxmLm1hcmtlcik7XG4gICAgfVxuICB9KTtcbn1cblxuXG5TdGF0aWNMYWJlbC5wcm90b3R5cGUudG9nZ2xlID0gZnVuY3Rpb24oKSB7XG4gIGlmICh0aGlzLnNlbGVjdGVkKSB7XG4gICAgdGhpcy5kZXNlbGVjdCgpO1xuICB9IGVsc2Uge1xuICAgIHRoaXMuc2VsZWN0KCk7XG4gIH1cbn07XG5cblN0YXRpY0xhYmVsLnByb3RvdHlwZS5zZWxlY3QgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5zZWxlY3RlZCA9IHRydWU7XG4gIHRoaXMubWFya2VyLl9pY29uLmNsYXNzTGlzdC5hZGQodGhpcy5zdHlsZS5jc3NTZWxlY3RlZENsYXNzIHx8ICdsYWJlbC1pY29uLXRleHQtc2VsZWN0ZWQnKTtcbiAgdmFyIGxpbmtlZEZlYXR1cmUgPSB0aGlzLm12dEZlYXR1cmUubGlua2VkRmVhdHVyZSgpO1xuICBpZiAoIWxpbmtlZEZlYXR1cmUuc2VsZWN0ZWQpIGxpbmtlZEZlYXR1cmUuc2VsZWN0KCk7XG59O1xuXG5TdGF0aWNMYWJlbC5wcm90b3R5cGUuZGVzZWxlY3QgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5zZWxlY3RlZCA9IGZhbHNlO1xuICB0aGlzLm1hcmtlci5faWNvbi5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuc3R5bGUuY3NzU2VsZWN0ZWRDbGFzcyB8fCAnbGFiZWwtaWNvbi10ZXh0LXNlbGVjdGVkJyk7XG4gIHZhciBsaW5rZWRGZWF0dXJlID0gdGhpcy5tdnRGZWF0dXJlLmxpbmtlZEZlYXR1cmUoKTtcbiAgaWYgKGxpbmtlZEZlYXR1cmUuc2VsZWN0ZWQpIGxpbmtlZEZlYXR1cmUuZGVzZWxlY3QoKTtcbn07XG5cblN0YXRpY0xhYmVsLnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbigpIHtcbiAgaWYgKCF0aGlzLm1hcCB8fCAhdGhpcy5tYXJrZXIpIHJldHVybjtcbiAgdGhpcy5tYXAucmVtb3ZlTGF5ZXIodGhpcy5tYXJrZXIpO1xufTtcbiIsIi8qKlxuICogQ3JlYXRlZCBieSBOaWNob2xhcyBIYWxsYWhhbiA8bmhhbGxhaGFuQHNwYXRpYWxkZXYuY29tPlxuICogICAgICAgb24gNC83LzE0LlxuICovXG5cbnZhciBmZWF0dXJlbGFiZWwgPSByZXF1aXJlKCcuL2ZlYXR1cmVsYWJlbCcpO1xudmFyIGZlYXR1cmVTZXRzID0gZmVhdHVyZWxhYmVsLmZlYXR1cmVTZXRzO1xudmFyIExhYmVsID0gcmVxdWlyZSgnLi9MYWJlbC5qcycpO1xuXG5cbmZ1bmN0aW9uIEZlYXR1cmVTZXQoKSB7XG4gIHRoaXMuZmVhdHVyZXMgPSBbXTtcbiAgdGhpcy5fcGF0aElkSGFzaCA9IHt9O1xuICBmZWF0dXJlU2V0cy5wdXNoKHRoaXMpO1xuICB0aGlzLnNlbGVjdGVkRmVhdHVyZUxheWVyID0gbnVsbDtcbiAgdGhpcy5zZWxlY3RlZEljb24gPSBudWxsO1xufVxubW9kdWxlLmV4cG9ydHMgPSBGZWF0dXJlU2V0O1xuXG5cbkZlYXR1cmVTZXQucHJvdG90eXBlLmFkZEZlYXR1cmUgPSBmdW5jdGlvbiAoZmVhdHVyZUxheWVyLCBnZW9qc29uTGF5ZXIpIHtcbiAgZmVhdHVyZUxheWVyLmdlb2pzb25MYXllciA9IGdlb2pzb25MYXllcjtcbiAgaWYgKCFmZWF0dXJlTGF5ZXIuX2xlYWZsZXRfaWQpIHtcbiAgICBMLnN0YW1wKGZlYXR1cmVMYXllcik7XG4gIH1cbiAgdGhpcy5mZWF0dXJlcy5wdXNoKGZlYXR1cmVMYXllcik7XG5cbiAgLy8gZmVhdHVyZSBjb25zaXN0cyBvZiBvbmUgcG9seWdvblxuICBpZiAoIWZlYXR1cmVMYXllci5fbGF5ZXJzKSB7XG4gICAgdmFyIGxlYWZsZXRJZCA9IGZlYXR1cmVMYXllci5fbGVhZmxldF9pZDtcbiAgICB0aGlzLl9wYXRoSWRIYXNoW2xlYWZsZXRJZF0gPSBmZWF0dXJlTGF5ZXI7XG4gIH1cblxuICAvLyBmZWF0dXJlIGNvbnNpc3RzIG9mIHNldmVyYWwgcG9seWdvbnNcbiAgZWxzZSB7XG4gICAgZm9yICh2YXIgaWQgaW4gZmVhdHVyZUxheWVyLl9sYXllcnMpIHtcbiAgICAgIHZhciBwYXRoTGF5ZXIgPSBmZWF0dXJlTGF5ZXIuX2xheWVyc1tpZF07XG4gICAgICB2YXIgbGVhZmxldElkID0gcGF0aExheWVyLl9sZWFmbGV0X2lkO1xuICAgICAgdGhpcy5fcGF0aElkSGFzaFtsZWFmbGV0SWRdID0gZmVhdHVyZUxheWVyO1xuICAgIH1cbiAgfVxuXG59O1xuXG5cbkZlYXR1cmVTZXQucHJvdG90eXBlLl9wYXRoVXBkYXRlZCA9IGZ1bmN0aW9uIChsZWFmbGV0SWQpIHtcbiAgdmFyIGZlYXR1cmVMYXllciA9IHRoaXMuX3BhdGhJZEhhc2hbbGVhZmxldElkXTtcbiAgLy8gdGhlIGhhc2ggZG9lc24ndCBhbHdheXMgY2F0Y2ggdGhlIGlkIGlmIHRoZSBncmFwaGljIGhhcyBub3QgeWV0IGJlZW4gcmVuZGVyZWQuXG4gIGlmICghZmVhdHVyZUxheWVyKSB7XG4gICAgdmFyIGZlYXR1cmVzID0gdGhpcy5mZWF0dXJlcztcbiAgICBmb3IgKHZhciBrZXkgaW4gZmVhdHVyZXMpIHtcbiAgICAgIHZhciBmZWF0ID0gdGhpcy5mZWF0dXJlc1trZXldO1xuICAgICAgaWYgKGZlYXQuX2xlYWZsZXRfaWQgPT09IGxlYWZsZXRJZCkge1xuICAgICAgICBmZWF0dXJlTGF5ZXIgPSBmZWF0O1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcGF0aFVwZGF0ZWQoZmVhdHVyZUxheWVyLCB0aGlzKTtcbn07XG5cblxuZnVuY3Rpb24gcGF0aFVwZGF0ZWQoZmVhdHVyZUxheWVyLCBmZWF0dXJlU2V0KSB7XG4gIC8vIElmIHRoZSBpZCBkb2VzbnQgaGFzaCwgbm8gcGF0aCBmb3IgdGhlIGZlYXR1cmVzIGluIG91ciBmZWF0dXJlIHNldCBhcHBseS5cbiAgaWYgKCFmZWF0dXJlTGF5ZXIpIHtcbiAgICAvL2NvbnNvbGUuZXJyb3IoJ3BhdGhVcGRhdGVkIGZlYXR1cmVMYXllciBlbXB0eScpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChmZWF0dXJlTGF5ZXIuX2xheWVycykge1xuXG4gICAgLy8gb25seSBjYWxjdWxhdGUgY2VudGVyIGFmdGVyIGFsbCBvZiB0aGUgcG9seWdvbnMgaGF2ZSBiZWVuIHVwZGF0ZWRcbiAgICBpZiAoIWZlYXR1cmVMYXllci5wYXRoc1VwZGF0ZWQpIGZlYXR1cmVMYXllci5wYXRoc1VwZGF0ZWQgPSAwO1xuICAgICsrZmVhdHVyZUxheWVyLnBhdGhzVXBkYXRlZDtcblxuICAgIGlmIChmZWF0dXJlTGF5ZXIucGF0aHNVcGRhdGVkID09PSBPYmplY3Qua2V5cyhmZWF0dXJlTGF5ZXIuX2xheWVycykubGVuZ3RoKSB7XG4gICAgICB2YXIgbCA9IGZpbmRMYXJnZXN0TGF5ZXIoZmVhdHVyZUxheWVyLl9sYXllcnMpO1xuXG4gICAgICBpZiAobCkge1xuICAgICAgICBmZWF0dXJlTGF5ZXIubGFiZWxDZW50ZXJQb2ludCA9IGNhbGN1bGF0ZUNlbnRlcihsLl9wYXJ0cyk7XG4gICAgICAgIHVwZGF0ZUxhYmVsKGZlYXR1cmVMYXllciwgZmVhdHVyZVNldCk7XG4gICAgICB9XG5cbiAgICAgIGZlYXR1cmVMYXllci5wYXRoc1VwZGF0ZWQgPSAwO1xuICAgIH1cblxuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIHRoZXJlIGlzIG9ubHkgb25lIHBvbHlnb24sIHNvIGNhbGN1bGF0ZSBjZW50ZXIuIGFsc28gY2hlY2sgdG8gc2VlIGlmIHRoZXJlIGFyZSBwYXJ0c1xuICBpZiAoIGZlYXR1cmVMYXllci5fcGFydHMgJiYgZmVhdHVyZUxheWVyLl9wYXJ0cy5sZW5ndGggKSB7XG4gICAgZmVhdHVyZUxheWVyLmxhYmVsQ2VudGVyUG9pbnQgPSBjYWxjdWxhdGVDZW50ZXIoZmVhdHVyZUxheWVyLl9wYXJ0cyk7XG4gICAgdXBkYXRlTGFiZWwoZmVhdHVyZUxheWVyLCBmZWF0dXJlU2V0KTtcblxuICAgIHJldHVybjtcbiAgfVxuXG59XG5cblxuZnVuY3Rpb24gY3JlYXRlTGFiZWwoZmVhdHVyZUxheWVyLCBmZWF0dXJlU2V0KSB7XG4gIHZhciBwb2ludCA9IGZlYXR1cmVMYXllci5sYWJlbENlbnRlclBvaW50O1xuXG4gIHZhciBwcm9wZXJ0aWVzID0gZmVhdHVyZUxheWVyLmZlYXR1cmUucHJvcGVydGllcztcbiAgdmFyIHRleHQgPSBwcm9wZXJ0aWVzLnRpdGxlIHx8IHByb3BlcnRpZXMubmFtZSB8fCAnTGFiZWwnO1xuICBpZiAocHJvcGVydGllcy5sYWJlbFByb3BlcnR5KSB7XG4gICAgaWYgKHR5cGVvZiBwcm9wZXJ0aWVzLmxhYmVsUHJvcGVydHkgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRleHQgPSBwcm9wZXJ0aWVzLmxhYmVsUHJvcGVydHkocHJvcGVydGllcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRleHQgPSBwcm9wZXJ0aWVzW3Byb3BlcnRpZXMubGFiZWxQcm9wZXJ0eV07XG4gICAgfVxuXG4gIH1cblxuICAvL0RldGVybWluZSBtYXAgaWNvbiBjbGFzc1xuICB2YXIgaWNvbkNsYXNzID0gXCJmZWF0dXJlbGFiZWwtaWNvbi10ZXh0XCI7XG4gIGlmIChwcm9wZXJ0aWVzW1wibWFwLWljb24tY2xhc3NcIl0pIHtcbiAgICAgIGlmICh0eXBlb2YgcHJvcGVydGllc1tcIm1hcC1pY29uLWNsYXNzXCJdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgaWNvbkNsYXNzID0gcHJvcGVydGllc1tcIm1hcC1pY29uLWNsYXNzXCJdKHByb3BlcnRpZXMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpY29uQ2xhc3MgPSBwcm9wZXJ0aWVzW3Byb3BlcnRpZXNbXCJtYXAtaWNvbi1jbGFzc1wiXV07XG4gICAgICB9XG4gIH1cblxuICAvL0RldGVybWluZSBtYXAgaWNvbiBzaXplXG4gIHZhciBpY29uU2l6ZSA9IFszNSwzNV07XG4gIGlmIChwcm9wZXJ0aWVzW1wibWFwLWljb24tc2l6ZVwiXSkge1xuICAgICAgaWYgKHR5cGVvZiBwcm9wZXJ0aWVzW1wibWFwLWljb24tc2l6ZVwiXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIGljb25TaXplID0gcHJvcGVydGllc1tcIm1hcC1pY29uLXNpemVcIl0ocHJvcGVydGllcyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIGljb25TaXplID0gcHJvcGVydGllc1twcm9wZXJ0aWVzW1wibWFwLWljb24tc2l6ZVwiXV07XG4gICAgICB9XG4gIH1cblxuICBjb25zb2xlLmxvZygnTEFCRUw6ICcgKyB0ZXh0ICsgJyAoJyArIHBvaW50LnggKyAnLCAnICsgcG9pbnQueSArICcpICcgKyBwcm9wZXJ0aWVzLm5hbWUpO1xuXG4gIHZhciBpY29uID0gTC5kaXZJY29uKHtcbiAgICBjbGFzc05hbWU6IGljb25DbGFzcyB8fCBcIlwiLCAvL2ljb25DbGFzcyB8fCAoJC5pc051bWVyaWModGV4dCkgPyAnZmVhdHVyZWxhYmVsLWljb24tbnVtYmVyJyA6ICdmZWF0dXJlbGFiZWwtaWNvbi10ZXh0JyksXG4gICAgaWNvblNpemU6IGljb25TaXplLFxuICAgIGh0bWw6IHRleHRcbiAgfSk7XG5cbiAgdmFyIGxhYmVsID0gbmV3IExhYmVsKHBvaW50LCBmZWF0dXJlTGF5ZXIsIHtpY29uOmljb259KTtcblxuICBsYWJlbC5jbGVhckFsbEV2ZW50TGlzdGVuZXJzKCk7XG4gIGZlYXR1cmVMYXllci5jbGVhckFsbEV2ZW50TGlzdGVuZXJzKCk7XG5cbiAgbGFiZWwub24oJ21vdXNlb3ZlcicsIGZ1bmN0aW9uKGUpIHtcbiAgICBtb3VzZW92ZXIodGhpcywgdGhpcy5mZWF0dXJlTGF5ZXIpO1xuICB9KTtcblxuICBmZWF0dXJlTGF5ZXIub24oJ21vdXNlb3ZlcicsIGZ1bmN0aW9uIChlKSB7XG4gICAgbW91c2VvdmVyKHRoaXMubGFiZWwsIHRoaXMpO1xuICB9KTtcblxuICBmdW5jdGlvbiB3aGl0ZW5MYWJlbChsYWJlbCkge1xuICAgIGlmIChsYWJlbC5faWNvbikge1xuICAgICAgLy8gbGFiZWwgaXMgdGV4dCBvbmx5LCBubyBiYWRnZVxuICAgICAgaWYgKGxhYmVsLl9pY29uLmNoaWxkcmVuWzBdLmNsYXNzTmFtZS5pbmRleE9mKCdmZWF0dXJlbGFiZWwtaWNvbi10ZXh0JykgPiAtMSkge1xuICAgICAgICBsYWJlbC5faWNvbi5jaGlsZHJlblswXS5zdHlsZVsnY29sb3InXSA9ICdyZ2JhKDI1NSwyNTUsMjU1LDAuNyknO1xuICAgICAgfVxuICAgICAgLy8gbGFiZWwgaGFzIGEgYmFkZ2VcbiAgICAgIGVsc2Uge1xuICAgICAgICBsYWJlbC5faWNvbi5jaGlsZHJlblswXS5zdHlsZVsnYm94LXNoYWRvdyddID0gJzBweCAwcHggMHB4IDZweCByZ2JhKDI1NSwyNTUsMjU1LDAuNyknO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdvbGRlbkxhYmVsKGxhYmVsKSB7XG4gICAgaWYgKGxhYmVsLl9pY29uKSB7XG4gICAgICAvLyBsYWJlbCBpcyB0ZXh0IG9ubHksIG5vIGJhZGdlXG4gICAgICBpZiAobGFiZWwuX2ljb24uY2hpbGRyZW5bMF0uY2xhc3NOYW1lLmluZGV4T2YoJ2ZlYXR1cmVsYWJlbC1pY29uLXRleHQnKSA+IC0xKSB7XG4gICAgICAgIGxhYmVsLl9pY29uLmNoaWxkcmVuWzBdLnN0eWxlWydjb2xvciddID0gJ3JnYmEoMjM3LDE3OCw0MSwwLjgpJztcbiAgICAgIH1cbiAgICAgIC8vIGxhYmVsIGhhcyBhIGJhZGdlXG4gICAgICBlbHNlIHtcbiAgICAgICAgbGFiZWwuX2ljb24uY2hpbGRyZW5bMF0uc3R5bGVbJ2JveC1zaGFkb3cnXSA9ICcwcHggMHB4IDBweCA2cHggcmdiYSgyMzcsMTc4LDQxLDAuOCknO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlZGRlbkxhYmVsKGxhYmVsKSB7XG4gICAgaWYgKGxhYmVsLl9pY29uKSB7XG4gICAgICAvLyBsYWJlbCBpcyB0ZXh0IG9ubHksIG5vIGJhZGdlXG4gICAgICBpZiAobGFiZWwuX2ljb24uY2hpbGRyZW5bMF0uY2xhc3NOYW1lLmluZGV4T2YoJ2ZlYXR1cmVsYWJlbC1pY29uLXRleHQnKSA+IC0xKSB7XG4gICAgICAgIGxhYmVsLl9pY29uLmNoaWxkcmVuWzBdLnN0eWxlWydjb2xvciddID0gJ3JnYmEoMjM3LDI3LDQ2LDAuNSknO1xuICAgICAgfVxuICAgICAgLy8gbGFiZWwgaGFzIGEgYmFkZ2VcbiAgICAgIGVsc2Uge1xuICAgICAgICBsYWJlbC5faWNvbi5jaGlsZHJlblswXS5zdHlsZVsnYm94LXNoYWRvdyddID0gJzBweCAwcHggMHB4IDZweCByZ2JhKDIzNywyNyw0NiwwLjUpJztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBtb3VzZW92ZXIobGFiZWwsIGZlYXR1cmVMYXllcikge1xuICAgIGlmIChmZWF0dXJlTGF5ZXIgIT09IGZlYXR1cmVTZXQuc2VsZWN0ZWRGZWF0dXJlTGF5ZXIpIHtcblxuICAgICAgZ29sZGVuTGFiZWwobGFiZWwpO1xuXG4gICAgICBmZWF0dXJlTGF5ZXIuc2V0U3R5bGUoe1xuICAgICAgICBjb2xvcjogJyNFREIyMjknICAvLyBnb2xkXG4gICAgICB9KTtcbiAgICAgIGZlYXR1cmVMYXllci5icmluZ1RvRnJvbnQoKTtcbiAgICB9XG4gIH1cblxuICBsYWJlbC5vbignbW91c2VvdXQnLCBmdW5jdGlvbihlKSB7XG4gICAgbW91c2VvdXQodGhpcywgdGhpcy5mZWF0dXJlTGF5ZXIpO1xuICB9KTtcblxuICBmZWF0dXJlTGF5ZXIub24oJ21vdXNlb3V0JywgZnVuY3Rpb24gKGUpIHtcbiAgICBtb3VzZW91dCh0aGlzLmxhYmVsLCB0aGlzKTtcbiAgfSk7XG5cbiAgZnVuY3Rpb24gbW91c2VvdXQobGFiZWwsIGZlYXR1cmVMYXllcikge1xuICAgIGlmIChmZWF0dXJlTGF5ZXIgIT09IGZlYXR1cmVTZXQuc2VsZWN0ZWRGZWF0dXJlTGF5ZXIpIHtcblxuICAgICAgd2hpdGVuTGFiZWwobGFiZWwpO1xuXG4gICAgICBmZWF0dXJlTGF5ZXIuc2V0U3R5bGUoe1xuICAgICAgICBjb2xvcjogcHJvcGVydGllcy5jb2xvciB8fCAnd2hpdGUnXG4gICAgICB9KTtcbiAgICAgIGlmIChmZWF0dXJlU2V0LnNlbGVjdGVkRmVhdHVyZUxheWVyKSB7XG4gICAgICAgIGZlYXR1cmVTZXQuc2VsZWN0ZWRGZWF0dXJlTGF5ZXIuYnJpbmdUb0Zyb250KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmZWF0dXJlTGF5ZXIuYnJpbmdUb0Zyb250KCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbGFiZWwub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICBjbGljayh0aGlzLCB0aGlzLmZlYXR1cmVMYXllcik7XG4gIH0pO1xuXG4gIGZlYXR1cmVMYXllci5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgIGNsaWNrKHRoaXMubGFiZWwsIHRoaXMpO1xuICB9KTtcblxuICBmdW5jdGlvbiBjbGljayhsYWJlbCwgZmVhdHVyZUxheWVyKSB7XG4gICAgLy8gVFVSTiBPRkZcbiAgICBpZiAoZmVhdHVyZUxheWVyID09PSBmZWF0dXJlU2V0LnNlbGVjdGVkRmVhdHVyZUxheWVyKSB7XG5cbiAgICAgIHdoaXRlbkxhYmVsKGxhYmVsKTtcblxuICAgICAgZmVhdHVyZUxheWVyLnNldFN0eWxlKHtcbiAgICAgICAgY29sb3I6IHByb3BlcnRpZXMuY29sb3IgfHwgJ3doaXRlJ1xuICAgICAgfSk7XG4gICAgICBmZWF0dXJlTGF5ZXIuYnJpbmdUb0Zyb250KCk7XG4gICAgICBmZWF0dXJlU2V0LnNlbGVjdGVkRmVhdHVyZUxheWVyID0gbnVsbDtcbiAgICAgIGlmIChwcm9wZXJ0aWVzICYmIHByb3BlcnRpZXMub25EZXNlbGVjdCAmJiB0eXBlb2YgcHJvcGVydGllcy5vbkRlc2VsZWN0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHByb3BlcnRpZXMub25EZXNlbGVjdChmZWF0dXJlTGF5ZXIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFRVUk4gT05cbiAgICBlbHNlIHtcbiAgICAgIGlmIChmZWF0dXJlU2V0LnNlbGVjdGVkRmVhdHVyZUxheWVyKSB7XG4gICAgICAgIHdoaXRlbkxhYmVsKHtfaWNvbjogZmVhdHVyZVNldC5zZWxlY3RlZEljb259KTtcbiAgICAgICAgZmVhdHVyZVNldC5zZWxlY3RlZEZlYXR1cmVMYXllci5zZXRTdHlsZSh7XG4gICAgICAgICAgY29sb3I6IHByb3BlcnRpZXMuY29sb3IgfHwgJ3doaXRlJ1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmVkZGVuTGFiZWwobGFiZWwpO1xuXG4gICAgICAvLyByZWQgY3Jvc3MgcmVkICNlZDFiMmVcbiAgICAgIGZlYXR1cmVMYXllci5zZXRTdHlsZSh7XG4gICAgICAgIGNvbG9yOiAnI2Q5NTM0ZicgLy8gcmVkXG4gICAgICB9KTtcbiAgICAgIGZlYXR1cmVMYXllci5icmluZ1RvRnJvbnQoKTtcbiAgICAgIGZlYXR1cmVTZXQuc2VsZWN0ZWRGZWF0dXJlTGF5ZXIgPSBmZWF0dXJlTGF5ZXI7XG4gICAgICBmZWF0dXJlU2V0LnNlbGVjdGVkSWNvbiA9IGxhYmVsLl9pY29uO1xuICAgICAgaWYgKHByb3BlcnRpZXMgJiYgcHJvcGVydGllcy5vblNlbGVjdCAmJiB0eXBlb2YgcHJvcGVydGllcy5vblNlbGVjdCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBwcm9wZXJ0aWVzLm9uU2VsZWN0KGZlYXR1cmVMYXllcik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEZpeGVzIHRoZSBkb3VibGUgbGFiZWwgYnVnLlxuICAgKi9cbiAgZmVhdHVyZUxheWVyLmdlb2pzb25MYXllci5hZGRMYXllcihsYWJlbCk7XG5cbiAgLyoqXG4gICAqIElkZWFsbHkgd2Ugd2FudCB0byBiZSBhZGRpbmcgbGFiZWxzIHRvIHRoZSBhY3R1YWwgbGF5ZXIgdGhleSBhcmUgb25cbiAgICogcmF0aGVyIHRoYW4gdGhlIHBhcmVudCBHZW9KU09OIGxheWVyLlxuICAgKi9cbi8vICAgIGlmICghZmVhdHVyZUxheWVyLmFkZExheWVyKSB7XG4vLyAgICAgIGZlYXR1cmVMYXllci5nZW9qc29uTGF5ZXIuYWRkTGF5ZXIobGFiZWwpO1xuLy8gICAgfSBlbHNlIHtcbi8vICAgICAgZmVhdHVyZUxheWVyLmFkZExheWVyKGxhYmVsKTtcbi8vICAgIH1cblxuICBmZWF0dXJlbGFiZWwubGFiZWxzW2ZlYXR1cmVMYXllci5mZWF0dXJlLnByb3BlcnRpZXMuZ3VpZF0gPSBsYWJlbDtcbn1cblxuXG5mdW5jdGlvbiB1cGRhdGVMYWJlbChmZWF0dXJlTGF5ZXIsIGZlYXR1cmVTZXQpIHtcbiAgaWYgKCAhIGZlYXR1cmVMYXllci5sYWJlbCApIHtcbiAgICBjcmVhdGVMYWJlbChmZWF0dXJlTGF5ZXIsIGZlYXR1cmVTZXQpO1xuICB9IGVsc2Uge1xuICAgIGZlYXR1cmVMYXllci5sYWJlbC51cGRhdGUoZmVhdHVyZUxheWVyLmxhYmVsQ2VudGVyUG9pbnQpO1xuICB9XG59XG5cblxuZnVuY3Rpb24gY2FsY3VsYXRlQ2VudGVyKHBhcnRzKSB7XG5cbiAgdmFyIHBhcnQgPSBmaW5kTGFyZ2VzdFBhcnQocGFydHMpO1xuICB2YXIgY2VudGVyID0gY2VudHJvaWQocGFydCk7XG5cbiAgcmV0dXJuIGNlbnRlci5yb3VuZCgpO1xufVxuXG5cbi8vICBodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0NlbnRyb2lkI0NlbnRyb2lkX29mX3BvbHlnb25cblxuZnVuY3Rpb24gYXJlYShwYXJ0QXJyKSB7XG4gIHZhciBhcmVhID0gMDtcbiAgdmFyIGxlbiA9IHBhcnRBcnIubGVuZ3RoO1xuICBmb3IgKHZhciBpID0gMCwgaiA9IGxlbiAtIDE7IGkgPCBsZW47IGo9aSwgaSsrKSB7XG4gICAgdmFyIHAxID0gcGFydEFycltqXTtcbiAgICB2YXIgcDIgPSBwYXJ0QXJyW2ldO1xuXG4gICAgYXJlYSArPSBwMS54ICogcDIueSAtIHAyLnggKiBwMS55O1xuICB9XG5cbiAgcmV0dXJuIGFyZWEgLyAyO1xufVxuXG4vKlxuICAgIE5IIFRPRE86IFdlIGFyZSBpbmRlZWQgZ2V0dGluZyB0aGUgY2VudHJvaWQsIGJ1dCBpZGVhbGx5IHdlXG4gICAgd2FudCB0byBjaGVjayBpZiB0aGUgY2VudHJvaWQgaXMgYWN0dWFsbHkgd2l0aGluIHRoZSBwb2x5Z29uXG4gICAgZm9yIHRoZSBwb2x5Z29ucyB0aGF0IGJlbmQgbGlrZSBhIGJvb21hcmFuZy4gSWYgaXQgaXMgb3V0c2lkZSxcbiAgICB3ZSBuZWVkIHRvIG51ZGdlIGl0IG92ZXIgdW50aWwgaXQgaXMgaW5zaWRlLi4uXG4gKi9cbmZ1bmN0aW9uIGNlbnRyb2lkKHBhcnRBcnIpIHtcbiAgdmFyIGxlbiA9IHBhcnRBcnIubGVuZ3RoO1xuICB2YXIgeCA9IDA7XG4gIHZhciB5ID0gMDtcbiAgZm9yICh2YXIgaSA9IDAsIGogPSBsZW4gLSAxOyBpIDwgbGVuOyBqPWksIGkrKykge1xuICAgIHZhciBwMSA9IHBhcnRBcnJbal07XG4gICAgdmFyIHAyID0gcGFydEFycltpXTtcbiAgICB2YXIgZiA9IHAxLnggKiBwMi55IC0gcDIueCAqIHAxLnk7XG4gICAgeCArPSAocDEueCArIHAyLngpICogZjtcbiAgICB5ICs9IChwMS55ICsgcDIueSkgKiBmO1xuICB9XG4gIGYgPSBhcmVhKHBhcnRBcnIpICogNjtcbiAgcmV0dXJuIEwucG9pbnQoeC9mLCB5L2YpO1xuXG59XG5cblxuZnVuY3Rpb24gZmluZExhcmdlc3RMYXllcihsYXllcnMpIHtcbiAgdmFyIGxhcmdlc3RMYXllciA9IG51bGw7XG4gIHZhciBtYXhBcmVhID0gMDtcblxuICBmb3IgKHZhciBpZCBpbiBsYXllcnMpIHtcbiAgICB2YXIgbCA9IGxheWVyc1tpZF07XG4gICAgdmFyIHBhcnRzID0gbC5fcGFydHM7XG4gICAgdmFyIGEgPSAwO1xuICAgIGlmICghcGFydHMpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gcGFydHMubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgICAgIGEgKz0gYXJlYShwYXJ0c1tpXSk7XG4gICAgfVxuICAgIGlmIChhID4gbWF4QXJlYSkge1xuICAgICAgbWF4QXJlYSA9IGE7XG4gICAgICBsYXJnZXN0TGF5ZXIgPSBsO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBsYXJnZXN0TGF5ZXI7XG59XG5cbmZ1bmN0aW9uIGZpbmRMYXJnZXN0UGFydChwYXJ0cykge1xuICB2YXIgbGFyZ2VzdFBhcnQgPSBwYXJ0c1swXTtcbiAgdmFyIG1heEFyZWEgPSAwO1xuXG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBwYXJ0cy5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICAgIHZhciBwID0gcGFydHNbaV07XG4gICAgdmFyIGEgPSBhcmVhKHApO1xuICAgIGlmICggYSA+IG1heEFyZWEgKSB7XG4gICAgICBsYXJnZXN0UGFydCA9IHA7XG4gICAgICBtYXhBcmVhID0gYTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGxhcmdlc3RQYXJ0O1xufVxuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IE5pY2hvbGFzIEhhbGxhaGFuIDxuaGFsbGFoYW5Ac3BhdGlhbGRldi5jb20+XG4gKiAgICAgICBvbiA0LzcvMTQuXG4gKlxuICogICAgICAgQmFzZWQgb24gTC5NYXJrZXIgZnJvbSB2MC43LjJcbiAqL1xuXG5cbm1vZHVsZS5leHBvcnRzID0gTC5MYWJlbCA9IEwuQ2xhc3MuZXh0ZW5kKHtcblxuICBpbmNsdWRlczogTC5NaXhpbi5FdmVudHMsXG5cbiAgb3B0aW9uczoge1xuICAgIGljb246IG5ldyBMLkljb24uRGVmYXVsdCgpLFxuICAgIHRpdGxlOiAnJyxcbiAgICBhbHQ6ICcnLFxuICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICBkcmFnZ2FibGU6IGZhbHNlLFxuICAgIGtleWJvYXJkOiB0cnVlLFxuICAgIHpJbmRleE9mZnNldDogMCxcbiAgICBvcGFjaXR5OiAxLFxuICAgIHJpc2VPbkhvdmVyOiBmYWxzZSxcbiAgICByaXNlT2Zmc2V0OiAyNTBcbiAgfSxcblxuICBpbml0aWFsaXplOiBmdW5jdGlvbiAocG9pbnQsIGZlYXR1cmVMYXllciwgb3B0aW9ucykge1xuICAgIEwuc2V0T3B0aW9ucyh0aGlzLCBvcHRpb25zKTtcbi8vICAgIHRoaXMuX2xhdGxuZyA9IEwubGF0TG5nKGxhdGxuZyk7XG4gICAgdGhpcy5fcG9pbnQgPSBwb2ludDtcbiAgICBpZiAoZmVhdHVyZUxheWVyKXtcbiAgICAgIHRoaXMuZmVhdHVyZUxheWVyID0gZmVhdHVyZUxheWVyO1xuICAgICAgZmVhdHVyZUxheWVyLmxhYmVsID0gdGhpcztcbiAgICB9XG4gICAgdGhpcy5pc0xhYmVsID0gdHJ1ZTtcbiAgfSxcblxuICBvbkFkZDogZnVuY3Rpb24gKG1hcCkge1xuICAgIHRoaXMuX21hcCA9IG1hcDtcblxuICAgIG1hcC5vbigndmlld3Jlc2V0JywgdGhpcy51cGRhdGUsIHRoaXMpO1xuXG4gICAgdGhpcy5faW5pdEljb24oKTtcbiAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIHRoaXMuZmlyZSgnYWRkJyk7XG5cbiAgICBpZiAobWFwLm9wdGlvbnMuem9vbUFuaW1hdGlvbiAmJiBtYXAub3B0aW9ucy5tYXJrZXJab29tQW5pbWF0aW9uKSB7XG4gICAgICBtYXAub24oJ3pvb21hbmltJywgdGhpcy5fYW5pbWF0ZVpvb20sIHRoaXMpO1xuICAgIH1cbiAgfSxcblxuICBhZGRUbzogZnVuY3Rpb24gKG1hcCkge1xuICAgIG1hcC5hZGRMYXllcih0aGlzKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfSxcblxuICBvblJlbW92ZTogZnVuY3Rpb24gKG1hcCkge1xuICAgIGlmICh0aGlzLmRyYWdnaW5nKSB7XG4gICAgICB0aGlzLmRyYWdnaW5nLmRpc2FibGUoKTtcbiAgICB9XG5cbiAgICB0aGlzLl9yZW1vdmVJY29uKCk7XG4gICAgdGhpcy5fcmVtb3ZlU2hhZG93KCk7XG5cbiAgICB0aGlzLmZpcmUoJ3JlbW92ZScpO1xuXG4gICAgbWFwLm9mZih7XG4gICAgICAndmlld3Jlc2V0JzogdGhpcy51cGRhdGUsXG4gICAgICAnem9vbWFuaW0nOiB0aGlzLl9hbmltYXRlWm9vbVxuICAgIH0sIHRoaXMpO1xuXG4gICAgdGhpcy5fbWFwID0gbnVsbDtcbiAgfSxcblxuLy8gIGdldExhdExuZzogZnVuY3Rpb24gKCkge1xuLy8gICAgcmV0dXJuIHRoaXMuX2xhdGxuZztcbi8vICB9LFxuLy9cbi8vICBzZXRMYXRMbmc6IGZ1bmN0aW9uIChsYXRsbmcpIHtcbi8vICAgIHRoaXMuX2xhdGxuZyA9IEwubGF0TG5nKGxhdGxuZyk7XG4vL1xuLy8gICAgdGhpcy51cGRhdGUoKTtcbi8vXG4vLyAgICByZXR1cm4gdGhpcy5maXJlKCdtb3ZlJywgeyBsYXRsbmc6IHRoaXMuX2xhdGxuZyB9KTtcbi8vICB9LFxuXG5cblxuICBzZXRaSW5kZXhPZmZzZXQ6IGZ1bmN0aW9uIChvZmZzZXQpIHtcbiAgICB0aGlzLm9wdGlvbnMuekluZGV4T2Zmc2V0ID0gb2Zmc2V0O1xuICAgIHRoaXMudXBkYXRlKCk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfSxcblxuICBzZXRJY29uOiBmdW5jdGlvbiAoaWNvbikge1xuXG4gICAgdGhpcy5vcHRpb25zLmljb24gPSBpY29uO1xuXG4gICAgaWYgKHRoaXMuX21hcCkge1xuICAgICAgdGhpcy5faW5pdEljb24oKTtcbiAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX3BvcHVwKSB7XG4gICAgICB0aGlzLmJpbmRQb3B1cCh0aGlzLl9wb3B1cCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG5cbiAgdXBkYXRlOiBmdW5jdGlvbiAocG9pbnQpIHtcbiAgICBpZiAocG9pbnQpIHtcbiAgICAgIHRoaXMuX3BvaW50ID0gcG9pbnQ7XG4gICAgfVxuICAgIGlmICh0aGlzLl9pY29uKSB7XG4vLyAgICAgIHZhciBwb3MgPSB0aGlzLl9tYXAubGF0TG5nVG9MYXllclBvaW50KHRoaXMuX2xhdGxuZykucm91bmQoKTtcbiAgICAgIHRoaXMuX3NldFBvcyh0aGlzLl9wb2ludCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG5cbiAgX2luaXRJY29uOiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnMsXG4gICAgICBtYXAgPSB0aGlzLl9tYXAsXG4gICAgICBhbmltYXRpb24gPSAobWFwLm9wdGlvbnMuem9vbUFuaW1hdGlvbiAmJiBtYXAub3B0aW9ucy5tYXJrZXJab29tQW5pbWF0aW9uKSxcbiAgICAgIGNsYXNzVG9BZGQgPSBhbmltYXRpb24gPyAnbGVhZmxldC16b29tLWFuaW1hdGVkJyA6ICdsZWFmbGV0LXpvb20taGlkZSc7XG5cbiAgICB2YXIgaWNvbiA9IG9wdGlvbnMuaWNvbi5jcmVhdGVJY29uKHRoaXMuX2ljb24pLFxuICAgICAgYWRkSWNvbiA9IGZhbHNlO1xuXG4gICAgLy8gaWYgd2UncmUgbm90IHJldXNpbmcgdGhlIGljb24sIHJlbW92ZSB0aGUgb2xkIG9uZSBhbmQgaW5pdCBuZXcgb25lXG4gICAgaWYgKGljb24gIT09IHRoaXMuX2ljb24pIHtcbiAgICAgIGlmICh0aGlzLl9pY29uKSB7XG4gICAgICAgIHRoaXMuX3JlbW92ZUljb24oKTtcbiAgICAgIH1cbiAgICAgIGFkZEljb24gPSB0cnVlO1xuXG4gICAgICBpZiAob3B0aW9ucy50aXRsZSkge1xuICAgICAgICBpY29uLnRpdGxlID0gb3B0aW9ucy50aXRsZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG9wdGlvbnMuYWx0KSB7XG4gICAgICAgIGljb24uYWx0ID0gb3B0aW9ucy5hbHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgTC5Eb21VdGlsLmFkZENsYXNzKGljb24sIGNsYXNzVG9BZGQpO1xuXG4gICAgaWYgKG9wdGlvbnMua2V5Ym9hcmQpIHtcbiAgICAgIGljb24udGFiSW5kZXggPSAnMCc7XG4gICAgfVxuXG4gICAgdGhpcy5faWNvbiA9IGljb247XG5cbiAgICB0aGlzLl9pbml0SW50ZXJhY3Rpb24oKTtcblxuICAgIGlmIChvcHRpb25zLnJpc2VPbkhvdmVyKSB7XG4gICAgICBMLkRvbUV2ZW50XG4gICAgICAgIC5vbihpY29uLCAnbW91c2VvdmVyJywgdGhpcy5fYnJpbmdUb0Zyb250LCB0aGlzKVxuICAgICAgICAub24oaWNvbiwgJ21vdXNlb3V0JywgdGhpcy5fcmVzZXRaSW5kZXgsIHRoaXMpO1xuICAgIH1cblxuICAgIHZhciBuZXdTaGFkb3cgPSBvcHRpb25zLmljb24uY3JlYXRlU2hhZG93KHRoaXMuX3NoYWRvdyksXG4gICAgICBhZGRTaGFkb3cgPSBmYWxzZTtcblxuICAgIGlmIChuZXdTaGFkb3cgIT09IHRoaXMuX3NoYWRvdykge1xuICAgICAgdGhpcy5fcmVtb3ZlU2hhZG93KCk7XG4gICAgICBhZGRTaGFkb3cgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChuZXdTaGFkb3cpIHtcbiAgICAgIEwuRG9tVXRpbC5hZGRDbGFzcyhuZXdTaGFkb3csIGNsYXNzVG9BZGQpO1xuICAgIH1cbiAgICB0aGlzLl9zaGFkb3cgPSBuZXdTaGFkb3c7XG5cblxuICAgIGlmIChvcHRpb25zLm9wYWNpdHkgPCAxKSB7XG4gICAgICB0aGlzLl91cGRhdGVPcGFjaXR5KCk7XG4gICAgfVxuXG5cbiAgICB2YXIgcGFuZXMgPSB0aGlzLl9tYXAuX3BhbmVzO1xuXG4gICAgaWYgKGFkZEljb24pIHtcbiAgICAgIHBhbmVzLm1hcmtlclBhbmUuYXBwZW5kQ2hpbGQodGhpcy5faWNvbik7XG4gICAgfVxuXG4gICAgaWYgKG5ld1NoYWRvdyAmJiBhZGRTaGFkb3cpIHtcbiAgICAgIHBhbmVzLnNoYWRvd1BhbmUuYXBwZW5kQ2hpbGQodGhpcy5fc2hhZG93KTtcbiAgICB9XG4gIH0sXG5cbiAgX3JlbW92ZUljb246IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLnJpc2VPbkhvdmVyKSB7XG4gICAgICBMLkRvbUV2ZW50XG4gICAgICAgIC5vZmYodGhpcy5faWNvbiwgJ21vdXNlb3ZlcicsIHRoaXMuX2JyaW5nVG9Gcm9udClcbiAgICAgICAgLm9mZih0aGlzLl9pY29uLCAnbW91c2VvdXQnLCB0aGlzLl9yZXNldFpJbmRleCk7XG4gICAgfVxuXG4gICAgdGhpcy5fbWFwLl9wYW5lcy5tYXJrZXJQYW5lLnJlbW92ZUNoaWxkKHRoaXMuX2ljb24pO1xuXG4gICAgdGhpcy5faWNvbiA9IG51bGw7XG4gIH0sXG5cbiAgX3JlbW92ZVNoYWRvdzogZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLl9zaGFkb3cpIHtcbiAgICAgIHRoaXMuX21hcC5fcGFuZXMuc2hhZG93UGFuZS5yZW1vdmVDaGlsZCh0aGlzLl9zaGFkb3cpO1xuICAgIH1cbiAgICB0aGlzLl9zaGFkb3cgPSBudWxsO1xuICB9LFxuXG4gIF9zZXRQb3M6IGZ1bmN0aW9uIChwb3MpIHtcbiAgICBMLkRvbVV0aWwuc2V0UG9zaXRpb24odGhpcy5faWNvbiwgcG9zKTtcblxuICAgIGlmICh0aGlzLl9zaGFkb3cpIHtcbiAgICAgIEwuRG9tVXRpbC5zZXRQb3NpdGlvbih0aGlzLl9zaGFkb3csIHBvcyk7XG4gICAgfVxuXG4gICAgdGhpcy5fekluZGV4ID0gcG9zLnkgKyB0aGlzLm9wdGlvbnMuekluZGV4T2Zmc2V0O1xuXG4gICAgdGhpcy5fcmVzZXRaSW5kZXgoKTtcbiAgfSxcblxuICBfdXBkYXRlWkluZGV4OiBmdW5jdGlvbiAob2Zmc2V0KSB7XG4gICAgdGhpcy5faWNvbi5zdHlsZS56SW5kZXggPSB0aGlzLl96SW5kZXggKyBvZmZzZXQ7XG4gIH0sXG5cbiAgX2FuaW1hdGVab29tOiBmdW5jdGlvbiAob3B0KSB7XG4vLyAgICB2YXIgcG9zID0gdGhpcy5fbWFwLl9sYXRMbmdUb05ld0xheWVyUG9pbnQodGhpcy5fbGF0bG5nLCBvcHQuem9vbSwgb3B0LmNlbnRlcikucm91bmQoKTtcbi8vXG4vLyAgICB0aGlzLl9zZXRQb3MocG9zKTtcbiAgfSxcblxuICBfaW5pdEludGVyYWN0aW9uOiBmdW5jdGlvbiAoKSB7XG5cbiAgICBpZiAoIXRoaXMub3B0aW9ucy5jbGlja2FibGUpIHsgcmV0dXJuOyB9XG5cbiAgICAvLyBUT0RPIHJlZmFjdG9yIGludG8gc29tZXRoaW5nIHNoYXJlZCB3aXRoIE1hcC9QYXRoL2V0Yy4gdG8gRFJZIGl0IHVwXG5cbiAgICB2YXIgaWNvbiA9IHRoaXMuX2ljb24sXG4gICAgICBldmVudHMgPSBbJ2RibGNsaWNrJywgJ21vdXNlZG93bicsICdtb3VzZW92ZXInLCAnbW91c2VvdXQnLCAnY29udGV4dG1lbnUnXTtcblxuICAgIEwuRG9tVXRpbC5hZGRDbGFzcyhpY29uLCAnbGVhZmxldC1jbGlja2FibGUnKTtcbiAgICBMLkRvbUV2ZW50Lm9uKGljb24sICdjbGljaycsIHRoaXMuX29uTW91c2VDbGljaywgdGhpcyk7XG4gICAgTC5Eb21FdmVudC5vbihpY29uLCAna2V5cHJlc3MnLCB0aGlzLl9vbktleVByZXNzLCB0aGlzKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZXZlbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBMLkRvbUV2ZW50Lm9uKGljb24sIGV2ZW50c1tpXSwgdGhpcy5fZmlyZU1vdXNlRXZlbnQsIHRoaXMpO1xuICAgIH1cblxuICAgIGlmIChMLkhhbmRsZXIuTWFya2VyRHJhZykge1xuICAgICAgdGhpcy5kcmFnZ2luZyA9IG5ldyBMLkhhbmRsZXIuTWFya2VyRHJhZyh0aGlzKTtcblxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5kcmFnZ2FibGUpIHtcbiAgICAgICAgdGhpcy5kcmFnZ2luZy5lbmFibGUoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgX29uTW91c2VDbGljazogZnVuY3Rpb24gKGUpIHtcbiAgICB2YXIgd2FzRHJhZ2dlZCA9IHRoaXMuZHJhZ2dpbmcgJiYgdGhpcy5kcmFnZ2luZy5tb3ZlZCgpO1xuXG4gICAgaWYgKHRoaXMuaGFzRXZlbnRMaXN0ZW5lcnMoZS50eXBlKSB8fCB3YXNEcmFnZ2VkKSB7XG4gICAgICBMLkRvbUV2ZW50LnN0b3BQcm9wYWdhdGlvbihlKTtcbiAgICB9XG5cbiAgICBpZiAod2FzRHJhZ2dlZCkgeyByZXR1cm47IH1cblxuICAgIGlmICgoIXRoaXMuZHJhZ2dpbmcgfHwgIXRoaXMuZHJhZ2dpbmcuX2VuYWJsZWQpICYmIHRoaXMuX21hcC5kcmFnZ2luZyAmJiB0aGlzLl9tYXAuZHJhZ2dpbmcubW92ZWQoKSkgeyByZXR1cm47IH1cblxuICAgIHRoaXMuZmlyZShlLnR5cGUsIHtcbiAgICAgIG9yaWdpbmFsRXZlbnQ6IGUsXG4vLyAgICAgIGxhdGxuZzogdGhpcy5fbGF0bG5nXG4gICAgICBwb2ludDogdGhpcy5fcG9pbnRcbiAgICB9KTtcbiAgfSxcblxuICBfb25LZXlQcmVzczogZnVuY3Rpb24gKGUpIHtcbiAgICBpZiAoZS5rZXlDb2RlID09PSAxMykge1xuICAgICAgdGhpcy5maXJlKCdjbGljaycsIHtcbiAgICAgICAgb3JpZ2luYWxFdmVudDogZSxcbi8vICAgICAgICBsYXRsbmc6IHRoaXMuX2xhdGxuZ1xuICAgICAgICBwb2ludDogdGhpcy5fcG9pbnRcbiAgICAgIH0pO1xuICAgIH1cbiAgfSxcblxuICBfZmlyZU1vdXNlRXZlbnQ6IGZ1bmN0aW9uIChlKSB7XG5cbiAgICB0aGlzLmZpcmUoZS50eXBlLCB7XG4gICAgICBvcmlnaW5hbEV2ZW50OiBlLFxuLy8gICAgICBsYXRsbmc6IHRoaXMuX2xhdGxuZ1xuICAgICAgcG9pbnQ6IHRoaXMuX3BvaW50XG4gICAgfSk7XG5cbiAgICAvLyBUT0RPIHByb3BlciBjdXN0b20gZXZlbnQgcHJvcGFnYXRpb25cbiAgICAvLyB0aGlzIGxpbmUgd2lsbCBhbHdheXMgYmUgY2FsbGVkIGlmIG1hcmtlciBpcyBpbiBhIEZlYXR1cmVHcm91cFxuICAgIGlmIChlLnR5cGUgPT09ICdjb250ZXh0bWVudScgJiYgdGhpcy5oYXNFdmVudExpc3RlbmVycyhlLnR5cGUpKSB7XG4gICAgICBMLkRvbUV2ZW50LnByZXZlbnREZWZhdWx0KGUpO1xuICAgIH1cbiAgICBpZiAoZS50eXBlICE9PSAnbW91c2Vkb3duJykge1xuICAgICAgTC5Eb21FdmVudC5zdG9wUHJvcGFnYXRpb24oZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIEwuRG9tRXZlbnQucHJldmVudERlZmF1bHQoZSk7XG4gICAgfVxuICB9LFxuXG4gIHNldE9wYWNpdHk6IGZ1bmN0aW9uIChvcGFjaXR5KSB7XG4gICAgdGhpcy5vcHRpb25zLm9wYWNpdHkgPSBvcGFjaXR5O1xuICAgIGlmICh0aGlzLl9tYXApIHtcbiAgICAgIHRoaXMuX3VwZGF0ZU9wYWNpdHkoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfSxcblxuICBfdXBkYXRlT3BhY2l0eTogZnVuY3Rpb24gKCkge1xuICAgIEwuRG9tVXRpbC5zZXRPcGFjaXR5KHRoaXMuX2ljb24sIHRoaXMub3B0aW9ucy5vcGFjaXR5KTtcbiAgICBpZiAodGhpcy5fc2hhZG93KSB7XG4gICAgICBMLkRvbVV0aWwuc2V0T3BhY2l0eSh0aGlzLl9zaGFkb3csIHRoaXMub3B0aW9ucy5vcGFjaXR5KTtcbiAgICB9XG4gIH0sXG5cbiAgX2JyaW5nVG9Gcm9udDogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuX3VwZGF0ZVpJbmRleCh0aGlzLm9wdGlvbnMucmlzZU9mZnNldCk7XG4gIH0sXG5cbiAgX3Jlc2V0WkluZGV4OiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5fdXBkYXRlWkluZGV4KDApO1xuICB9XG59KTtcbiIsIi8qKlxuICogQ3JlYXRlZCBieSBOaWNob2xhcyBIYWxsYWhhbiA8bmhhbGxhaGFuQHNwYXRpYWxkZXYuY29tPlxuICogICAgICAgb24gNC83LzE0LlxuICovXG5cbnZhciBmZWF0dXJlU2V0cyA9IFtdO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZmVhdHVyZVNldHM6IGZlYXR1cmVTZXRzLFxuICBwYXRoVXBkYXRlZDogZnVuY3Rpb24obGVhZmxldElkKSB7XG4gICAgZm9yKHZhciBpPSAwLCBsZW49ZmVhdHVyZVNldHMubGVuZ3RoOyBpPGxlbjsgKytpKSB7XG4gICAgICBmZWF0dXJlU2V0c1tpXS5fcGF0aFVwZGF0ZWQobGVhZmxldElkKTtcbiAgICB9XG4gIH0sXG4gIGxhYmVsczoge31cbn07XG5cbnJlcXVpcmUoJy4vbGVhZmxldC1wYXRjaCcpO1xuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IE5pY2hvbGFzIEhhbGxhaGFuIDxuaGFsbGFoYW5Ac3BhdGlhbGRldi5jb20+XG4gKiAgICAgICBvbiA1LzcvMTQuXG4gKlxuICogVGhpcyBpcyBhIHBhdGNoIHRoYXQgb3ZlcnJpZGVzIHRoZSBMLlBvbHlsaW5lIGNsYXNzIGluIExlYWZsZXQgMC43LjJcbiAqXG4gKiBBbGwgdGhpcyBpcyBkb2luZyBpcyBicm9hZGNhc3RpbmcgdGhlIGxlYWZsZXQgaWQgZm9yIHRoZSBwYXRoIHRoYXQgaXMgYmVpbmcgcmVkcmF3bi5cbiAqL1xuXG52YXIgZmVhdHVyZWxhYmVsID0gcmVxdWlyZSgnLi9mZWF0dXJlbGFiZWwnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcblxuICAvKipcbiAgICogTGVhZmxldCBwdXRzIHRvbyBtdWNoIG9mIGEgYnVmZmVyIGFyb3VuZCB0aGUgYXJlYSBpbiB3aGljaCBhIHNoYXBlXG4gICAqIGlzIGNsaXBwZWQsIHRodXMgd2Ugd2VyZSBub3QgZ2V0dGluZyBnb29kIGNlbnRyb2lkcyBmb3Igc2hhcGVzIHRoYXRcbiAgICogd2VyZSBiZWluZyBjbGlwcGVkLiBUaGlzIHJlc29sdmVzIHRoYXQuXG4gICAqL1xuICBMLlBhdGguQ0xJUF9QQURESU5HID0gMC4wMjtcblxuICBMLlBvbHlsaW5lLnByb3RvdHlwZS5fdXBkYXRlUGF0aCA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIXRoaXMuX21hcCkgeyByZXR1cm47IH1cblxuICAgIHRoaXMuX2NsaXBQb2ludHMoKTtcbiAgICB0aGlzLl9zaW1wbGlmeVBvaW50cygpO1xuXG4gICAgTC5QYXRoLnByb3RvdHlwZS5fdXBkYXRlUGF0aC5jYWxsKHRoaXMpO1xuXG4gICAgLyoqXG4gICAgICogTm90aWZpZXMgZmVhdHVyZWxhYmVsIHRoYXQgYSBwYXRoIGZvciBhIHZlY3RvciBoYXMgYmVlbiByZWRyYXduIGFuZCB0aGUgbGFiZWwgc2hvdWxkXG4gICAgICogcG9zaXRpb25lZCBvciByZXBvc2l0aW9uZWQuXG4gICAgICovXG4gICAgZmVhdHVyZWxhYmVsLnBhdGhVcGRhdGVkKHRoaXMuX2xlYWZsZXRfaWQpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBGaXhlcyBhIExlYWZsZXQgYnVnIHdoZXJlIGEgcmVmZXJlbmNlIHRvIHRoaXMuX21hcCBpcyBzb21ldGltZXMgbWlzc2luZy5cbiAgICovXG4gIEwuUGF0aC5wcm90b3R5cGUuYnJpbmdUb0Zyb250ID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICghdGhpcy5fbWFwKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgdmFyIHJvb3QgPSB0aGlzLl9tYXAuX3BhdGhSb290LFxuICAgICAgICBwYXRoID0gdGhpcy5fY29udGFpbmVyO1xuXG4gICAgaWYgKHBhdGggJiYgcm9vdC5sYXN0Q2hpbGQgIT09IHBhdGgpIHtcbiAgICAgIHJvb3QuYXBwZW5kQ2hpbGQocGF0aCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG59KCk7IiwiLyoqXG4gKiBUaGlzIGlzIHRoZSBlbnRyeSBwb2ludCBvZiB0aGUgYXBwbGljYXRpb24uIFdlIGRlY2xhcmUgdGhlIG1haW4gbW9kdWxlIGhlcmUgYW5kIHRoZW4gY29uZmlndXJlIHRoZSBtYWluIHJvdXRlclxuICogdGhhdCBjcmVhdGVzIGNvcnJlc3BvbmRpbmcgdmlld3MuIFRoZSBhcnJheSBwYXJhbWV0ZXIgZm9yIG1vZHVsZSBkZWNsYXJlcyB0aGlzIG1vZHVsZSdzIGRlcGVuZGVuY2llcy5cbiAqL1xudmFyIEdlb0FuZ3VsYXIgPSBhbmd1bGFyLm1vZHVsZSgnR2VvQW5ndWxhcicsIFsnYW5ndWxhckZpbGVVcGxvYWQnLCAnbmdDb29raWVzJywgJ25nUmVzb3VyY2UnLCAnbmdTYW5pdGl6ZScsICduZ1JvdXRlJywgJ3VpLnJvdXRlcicsICduZ0FuaW1hdGUnLCAndWkuYm9vdHN0cmFwJywgJ3VpLnNsaWRlcicsICduZ01hdGVyaWFsJ10pO1xuXG5HZW9Bbmd1bGFyLnJ1bihmdW5jdGlvbiAoJHJvb3RTY29wZSwgJHN0YXRlLCAkc3RhdGVQYXJhbXMpIHtcblxuICAvLyBJdCdzIHZlcnkgaGFuZHkgdG8gYWRkIHJlZmVyZW5jZXMgdG8gJHN0YXRlIGFuZCAkc3RhdGVQYXJhbXMgdG8gdGhlICRyb290U2NvcGVcbiAgLy8gc28gdGhhdCB5b3UgY2FuIGFjY2VzcyB0aGVtIGZyb20gYW55IHNjb3BlIHdpdGhpbiB5b3VyIGFwcGxpY2F0aW9ucy5Gb3IgZXhhbXBsZSxcbiAgLy8gPGxpIHVpLXNyZWYtYWN0aXZlPVwiYWN0aXZlIH1cIj4gd2lsbCBzZXQgdGhlIDxsaT4gLy8gdG8gYWN0aXZlIHdoZW5ldmVyXG4gIC8vICdjb250YWN0cy5saXN0JyBvciBvbmUgb2YgaXRzIGRlY2VuZGVudHMgaXMgYWN0aXZlLlxuICAkcm9vdFNjb3BlLiRzdGF0ZSA9ICRzdGF0ZTtcbiAgJHJvb3RTY29wZS4kc3RhdGVQYXJhbXMgPSAkc3RhdGVQYXJhbXM7XG5cbiAgZGVidWcuJHN0YXRlID0gJHN0YXRlO1xuICBkZWJ1Zy4kc3RhdGVQYXJhbXMgPSAkc3RhdGVQYXJhbXM7XG5cbiAgJHJvb3RTY29wZS5pc1N0YXRlID0gZnVuY3Rpb24gKHN0YXRlTmFtZSkge1xuICAgIHJldHVybiAkc3RhdGUuJGN1cnJlbnQubmFtZSA9PT0gc3RhdGVOYW1lO1xuICB9O1xuXG4gICRyb290U2NvcGUuaXNQYXJhbSA9IGZ1bmN0aW9uKHBhcmFtTmFtZSkge1xuICAgIHZhciBib29sID0gJHN0YXRlUGFyYW1zW3BhcmFtTmFtZV07XG4gICAgaWYgKCFib29sKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gICRyb290U2NvcGUuaXNOb3RQYXJhbSA9IGZ1bmN0aW9uKHBhcmFtTmFtZSkge1xuICAgIHZhciBib29sID0gJHN0YXRlUGFyYW1zW3BhcmFtTmFtZV07XG4gICAgaWYgKCFib29sKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gICRyb290U2NvcGUudG9nZ2xlUGFyYW0gPSBmdW5jdGlvbihwYXJhbU5hbWUpIHtcbiAgICB2YXIgYm9vbCA9ICRzdGF0ZVBhcmFtc1twYXJhbU5hbWVdO1xuICAgIGlmICghYm9vbCkge1xuICAgICAgLy8gbXV0ZXggbG9naWMgdGhhdCBtYWtlcyBvbmx5IDEgcGFuZWwgb3BlbiBhdCBhIHRpbWVcbiAgICAgIGZvciAodmFyIHBhcmFtIGluICRzdGF0ZVBhcmFtcykge1xuICAgICAgICBpZiAoJHN0YXRlUGFyYW1zW3BhcmFtXSA9PT0gJ29wZW4nKSB7XG4gICAgICAgICAgJHN0YXRlUGFyYW1zW3BhcmFtXSA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgICRzdGF0ZVBhcmFtc1twYXJhbU5hbWVdID0gJ29wZW4nO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWxldGUgJHN0YXRlUGFyYW1zW3BhcmFtTmFtZV07XG4gICAgfVxuICAgIHZhciBzdGF0ZSA9ICRzdGF0ZS5jdXJyZW50Lm5hbWUgfHwgJ21haW4nO1xuICAgICRzdGF0ZS5nbyhzdGF0ZSwgJHN0YXRlUGFyYW1zKTtcbiAgfTtcblxuICAkcm9vdFNjb3BlLnNldFBhcmFtV2l0aFZhbCA9IGZ1bmN0aW9uIChwYXJhbU5hbWUsIHZhbCkge1xuICAgICRzdGF0ZVBhcmFtc1twYXJhbU5hbWVdID0gdmFsO1xuICAgIHZhciBzdGF0ZSA9ICRzdGF0ZS5jdXJyZW50Lm5hbWUgfHwgJ21haW4nO1xuICAgICRzdGF0ZS5nbyhzdGF0ZSwgJHN0YXRlUGFyYW1zKTtcbiAgfTtcbiAgZGVidWcuJHJvb3RTY29wZSA9ICRyb290U2NvcGU7XG5cblxuICAkcm9vdFNjb3BlLm9wZW5QYXJhbSA9IGZ1bmN0aW9uKHBhcmFtTmFtZSkge1xuICAgIHZhciBib29sID0gJHN0YXRlUGFyYW1zW3BhcmFtTmFtZV07XG4gICAgaWYgKCFib29sKSB7XG4gICAgICAvLyBtdXRleCBsb2dpYyB0aGF0IG1ha2VzIG9ubHkgMSBwYW5lbCBvcGVuIGF0IGEgdGltZVxuICAgICAgZm9yICh2YXIgcGFyYW0gaW4gJHN0YXRlUGFyYW1zKSB7XG4gICAgICAgIGlmICgkc3RhdGVQYXJhbXNbcGFyYW1dID09PSAnb3BlbicpIHtcbiAgICAgICAgICAkc3RhdGVQYXJhbXNbcGFyYW1dID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgJHN0YXRlUGFyYW1zW3BhcmFtTmFtZV0gPSAnb3Blbic7XG4gICAgICB2YXIgc3RhdGUgPSAkc3RhdGUuY3VycmVudC5uYW1lIHx8ICdtYWluJztcbiAgICAgICRzdGF0ZS5nbyhzdGF0ZSwgJHN0YXRlUGFyYW1zKTtcbiAgICB9XG4gIH07XG5cbiAgJHJvb3RTY29wZS5jbG9zZVBhcmFtID0gZnVuY3Rpb24ocGFyYW1OYW1lKSB7XG4gICAgdmFyIGJvb2wgPSAkc3RhdGVQYXJhbXNbcGFyYW1OYW1lXTtcbiAgICBpZiAoYm9vbCkge1xuICAgICAgZGVsZXRlICRzdGF0ZVBhcmFtc1twYXJhbU5hbWVdO1xuICAgICAgdmFyIHN0YXRlID0gJHN0YXRlLmN1cnJlbnQubmFtZSB8fCAnbWFpbic7XG4gICAgICAkc3RhdGUuZ28oc3RhdGUsICRzdGF0ZVBhcmFtcyk7XG4gICAgfVxuICB9O1xuXG4gICRyb290U2NvcGUuaXNOb3RTdGF0ZSA9IGZ1bmN0aW9uIChzdGF0ZU5hbWUpIHtcbiAgICByZXR1cm4gJHN0YXRlLiRjdXJyZW50Lm5hbWUgIT09IHN0YXRlTmFtZTtcbiAgfTtcblxuICB3aW5kb3cuJHN0YXRlID0gJHN0YXRlO1xuICB3aW5kb3cuJHN0YXRlUGFyYW1zID0gJHN0YXRlUGFyYW1zO1xuXG59KTtcblxuR2VvQW5ndWxhci5jb25maWcoZnVuY3Rpb24gKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpIHtcbiAgJHVybFJvdXRlclByb3ZpZGVyXG4gICAgLndoZW4oJy9kZWZhdWx0JywgJy9tYXBAMC4xLDAuMSwyKG9zbWhvdCxnYWRtMCkscHJvamVjdCcpXG4gICAgLm90aGVyd2lzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbWFwZm9saW9Sb3V0ZScpIHx8ICcvbWFwQDEsMSwyKG9zbWhvdCxnYWRtMCkscHJvamVjdCcpO1xuXG4gICRzdGF0ZVByb3ZpZGVyXG4gICAgLnN0YXRlKCdtYWluJywge1xuICAgICAgdXJsOiAnL21hcEA6bGF0LDpsbmcsOnpvb20oKmxheWVycyksOnRoZW1lP3pvb20tZXh0ZW50JnN0b3JpZXMmbGF5ZXJzLXBhbmVsJmZpbHRlcnMtcGFuZWwmZmlsdGVycyZsZWdlbmQmYmFzZW1hcHMmaW5mbyZ0aXRsZSZkZXRhaWxzLXBhbmVsJnNlYXJjaC1wYW5lbCZzZl9pZCZsZXZlbCZ0aGVtZWxhYmVscyZjYXRlZ29yeSZsZWdlbmQtcGFuZWwmZnVsbHNjcmVlbicsXG4gICAgICB2aWV3czoge1xuICAgICAgICAnZGV0YWlscyc6IHtcbiAgICAgICAgICB0ZW1wbGF0ZTogJyAnLFxuICAgICAgICAgIGNvbnRyb2xsZXI6ICdNYWluQ3RybCdcbiAgICAgICAgfSxcbiAgICAgICAgJ3RoZW1lJzoge1xuICAgICAgICAgIHRlbXBsYXRlVXJsOiAndmlld3MvdGhlbWUuaHRtbCcsXG4gICAgICAgICAgY29udHJvbGxlcjogJ1RoZW1lQ3RybCdcbiAgICAgICAgfSxcbiAgICAgICAgJ2JsZXZlbHMnOntcbiAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3ZpZXdzL2JsZXZlbHMuaHRtbCcsXG4gICAgICAgICAgY29udHJvbGxlcjogJ0xheWVyc0N0cmwnXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICAgIC5zdGF0ZSgndXBsb2FkJywge1xuICAgICAgdXJsOiAnL21hcEA6bGF0LDpsbmcsOnpvb20oKmxheWVycyksOnRoZW1lL3VwbG9hZD96b29tLWV4dGVudCZzdG9yaWVzJmxheWVycy1wYW5lbCZmaWx0ZXJzLXBhbmVsJmZpbHRlcnMmbGVnZW5kJmJhc2VtYXBzJmluZm8mdGl0bGUmZGV0YWlscy1wYW5lbCZzZWFyY2gtcGFuZWwmc2ZfaWQmbGV2ZWwmdGhlbWVsYWJlbHMmY2F0ZWdvcnkmbGVnZW5kLXBhbmVsJmZ1bGxzY3JlZW4nLFxuICAgICAgdmlld3M6IHtcbiAgICAgICAgJ2RldGFpbHMnOiB7XG4gICAgICAgICAgdGVtcGxhdGU6ICcgJyxcbiAgICAgICAgICBjb250cm9sbGVyOiAnTWFpbkN0cmwnXG4gICAgICAgIH0sXG4gICAgICAgICd1cGxvYWQnOiB7XG4gICAgICAgICAgdGVtcGxhdGVVcmw6ICd2aWV3cy91cGxvYWQuaHRtbCcsXG4gICAgICAgICAgY29udHJvbGxlcjogJ1VwbG9hZEN0cmwnXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICAgIC5zdGF0ZSgnZXhwb3J0Jywge1xuICAgICAgdXJsOiAnL21hcEA6bGF0LDpsbmcsOnpvb20oKmxheWVycyksOnRoZW1lL2V4cG9ydD96b29tLWV4dGVudCZzdG9yaWVzJmxheWVycy1wYW5lbCZmaWx0ZXJzLXBhbmVsJmZpbHRlcnMmbGVnZW5kJmJhc2VtYXBzJmluZm8mdGl0bGUmZGV0YWlscy1wYW5lbCZzZWFyY2gtcGFuZWwmc2ZfaWQmbGV2ZWwmdGhlbWVsYWJlbHMmY2F0ZWdvcnkmbGVnZW5kLXBhbmVsJmZ1bGxzY3JlZW4nLFxuICAgICAgdmlld3M6IHtcbiAgICAgICAgJ2RldGFpbHMnOiB7XG4gICAgICAgICAgdGVtcGxhdGU6ICcgJyxcbiAgICAgICAgICBjb250cm9sbGVyOiAnTWFpbkN0cmwnXG4gICAgICAgIH0sXG4gICAgICAgICdleHBvcnQnOiB7XG4gICAgICAgICAgdGVtcGxhdGVVcmw6ICd2aWV3cy9leHBvcnQuaHRtbCcsXG4gICAgICAgICAgY29udHJvbGxlcjogJ0V4cG9ydEN0cmwnXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxufSk7XG5cblxuR2VvQW5ndWxhci5kaXJlY3RpdmUoJ3NlbGVjdE9uQ2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB7XG4gICAgcmVzdHJpY3Q6ICdBJyxcbiAgICBsaW5rOiBmdW5jdGlvbiAoc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSB7XG4gICAgICBlbGVtZW50Lm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5zZWxlY3QoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcbn0pO1xuXG5cbmFuZ3VsYXIubW9kdWxlKCdHZW9Bbmd1bGFyJykuZGlyZWN0aXZlKCdteVNob3cnLCBmdW5jdGlvbigkYW5pbWF0ZSkge1xuICByZXR1cm4ge1xuICAgIHNjb3BlOiB7XG4gICAgICAnbXlTaG93JzogJz0nLFxuICAgICAgJ2FmdGVyU2hvdyc6ICcmJyxcbiAgICAgICdhZnRlckhpZGUnOiAnJidcbiAgICB9LFxuICAgIGxpbms6IGZ1bmN0aW9uKHNjb3BlLCBlbGVtZW50KSB7XG4gICAgICBzY29wZS4kd2F0Y2goJ215U2hvdycsIGZ1bmN0aW9uKHNob3csIG9sZFNob3cpIHtcbiAgICAgICAgaWYgKHNob3cpIHtcbiAgICAgICAgICAkYW5pbWF0ZS5yZW1vdmVDbGFzcyhlbGVtZW50LCAnbmctaGlkZScsIHNjb3BlLmFmdGVyU2hvdyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFzaG93KSB7XG4gICAgICAgICAgJGFuaW1hdGUuYWRkQ2xhc3MoZWxlbWVudCwgJ25nLWhpZGUnLCBzY29wZS5hZnRlckhpZGUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn0pO1xuXG5cbnJlcXVpcmUoJy4vc2VydmljZXMvTGF5ZXJDb25maWcnKTtcbnJlcXVpcmUoJy4vc2VydmljZXMvU3Rvcmllc0NvbmZpZycpO1xucmVxdWlyZSgnLi9zZXJ2aWNlcy9WZWN0b3IvVmVjdG9yUHJvdmlkZXInKTtcbnJlcXVpcmUoJy4vc2VydmljZXMvRG9udXRzJyk7XG5yZXF1aXJlKCcuL2NvbnRyb2xsZXJzL21haW4nKTtcbnJlcXVpcmUoJy4vY29udHJvbGxlcnMvbWFwJyk7XG5yZXF1aXJlKCcuL2NvbnRyb2xsZXJzL2RldGFpbHMnKTtcbnJlcXVpcmUoJy4vY29udHJvbGxlcnMvbmF2YmFyJyk7XG5yZXF1aXJlKCcuL2NvbnRyb2xsZXJzL3NpZGUtdmlldycpO1xucmVxdWlyZSgnLi9jb250cm9sbGVycy9zdG9yaWVzJyk7XG5yZXF1aXJlKCcuL2NvbnRyb2xsZXJzL2xheWVycycpO1xucmVxdWlyZSgnLi9jb250cm9sbGVycy9maWx0ZXJzJyk7XG5yZXF1aXJlKCcuL2NvbnRyb2xsZXJzL2xlZ2VuZCcpO1xucmVxdWlyZSgnLi9jb250cm9sbGVycy9pbmZvJyk7XG5yZXF1aXJlKCcuL2NvbnRyb2xsZXJzL2Jhc2VtYXBzJyk7XG5yZXF1aXJlKCcuL2NvbnRyb2xsZXJzL2JyZWFkY3J1bWJzJyk7XG5yZXF1aXJlKCcuL2NvbnRyb2xsZXJzL3pvb20tZXh0ZW50Jyk7XG5yZXF1aXJlKCcuL2NvbnRyb2xsZXJzL3RoZW1lJyk7XG5yZXF1aXJlKCcuL2NvbnRyb2xsZXJzL3VwbG9hZCcpO1xucmVxdWlyZSgnLi9jb250cm9sbGVycy9zZWFyY2gnKTtcbnJlcXVpcmUoJy4vY29udHJvbGxlcnMvZXhwb3J0Jyk7XG5yZXF1aXJlKCcuLi9saWIvTGVhZmxldC5NYXBib3hWZWN0b3JUaWxlL3NyYy9NVlRTb3VyY2UuanMnKTtcblxuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IFJ5YW4gV2hpdGxleSA8cndoaXRsZXlAc3BhdGlhbGRldi5jb20+XG4gKiAgICAgICBvbiAzLzI4LzE0LlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ0dlb0FuZ3VsYXInKS5jb250cm9sbGVyKCdCYXNlbWFwc0N0cmwnLCBmdW5jdGlvbigkc2NvcGUsICRzdGF0ZSwgJHN0YXRlUGFyYW1zLCBMYXllckNvbmZpZykge1xuICAkc2NvcGUuYmFzZW1hcHMgPSBMYXllckNvbmZpZy5iYXNlbWFwcztcblxuICAkc2NvcGUubmFtZSA9IGZ1bmN0aW9uIChhbGlhcykge1xuICAgIHJldHVybiBMYXllckNvbmZpZ1thbGlhc10ubmFtZSB8fCBhbGlhcztcbiAgfTtcblxuICAkc2NvcGUuZ2V0TGF5ZXJzID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKCEgJHN0YXRlUGFyYW1zIHx8ICEkc3RhdGVQYXJhbXMubGF5ZXJzKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICAgIHZhciBsYXllcnMgPSAkc3RhdGVQYXJhbXMubGF5ZXJzLnNwbGl0KCcsJyk7XG4gICAgcmV0dXJuIGxheWVycztcbiAgfTtcblxuICAkc2NvcGUuY3VycmVudEJhc2VtYXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGxheWVycyA9ICRzY29wZS5nZXRMYXllcnMoKTtcbiAgICBpZiAoIWxheWVycykgcmV0dXJuIG51bGw7XG4gICAgcmV0dXJuIGxheWVyc1swXTtcbiAgfTtcblxuICAkc2NvcGUuc3dhcEJhc2VtYXAgPSBmdW5jdGlvbiAoYmFzZW1hcCkge1xuICAgIHZhciBsYXllcnMgPSAkc2NvcGUuZ2V0TGF5ZXJzKCk7XG4gICAgbGF5ZXJzWzBdID0gYmFzZW1hcDtcbiAgICBsYXllcnMgPSBsYXllcnMuam9pbignLCcpO1xuICAgIGFuZ3VsYXIuZXh0ZW5kKCRzdGF0ZVBhcmFtcywge1xuICAgICAgbGF5ZXJzOiBsYXllcnNcbiAgICB9KTtcbiAgICAkc3RhdGUuZ28oJ21haW4nLCAkc3RhdGVQYXJhbXMpO1xuICB9O1xuXG4gICRzY29wZS5pc0FjdGl2ZUJhc2VtYXAgPSBmdW5jdGlvbihiYXNlbWFwKSB7XG4gICAgcmV0dXJuICRzY29wZS5jdXJyZW50QmFzZW1hcCgpID09PSBiYXNlbWFwO1xuICB9O1xuXG59KTsiLCIvKipcbiAqIENyZWF0ZWQgYnkgUnlhbiBXaGl0bGV5IDxyd2hpdGxleUBzcGF0aWFsZGV2LmNvbT5cbiAqICAgICAgIG9uIDQvMTcvMTQuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnR2VvQW5ndWxhcicpLmNvbnRyb2xsZXIoJ0JyZWFkY3J1bWJzQ3RybCcsIGZ1bmN0aW9uKCRzY29wZSwgJHJvb3RTY29wZSwgJHN0YXRlLCAkc3RhdGVQYXJhbXMsICRodHRwLCBWZWN0b3JQcm92aWRlcikge1xuXG4gIC8qKlxuICAgKiBGaXhlcyBDaHJvbWUgTWFnbmlmeWluZyBHbGFzcyBJc3N1ZSAjMjA2XG4gICAqL1xuLy8gIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4vLyAgICB2YXIgdG9vbGJhciA9ICQoJyNNYXBVcHBlclJpZ2h0VG9vbGJhcldyYXBwZXInKTtcbi8vICAgIHdoaWxlICggdG9vbGJhci5oZWlnaHQoKSA+IDQwICkge1xuLy8gICAgICB0b29sYmFyLndpZHRoKCB0b29sYmFyLndpZHRoKCkgKyAxICk7XG4vLyAgICB9XG4vLyAgfSwgMTAwMCk7XG5cblxuXHQvL3ZhciBmdWxsU3RhY2tVUkwgPSBjb25maWcuY2h1YmJzUGF0aCgnc2VydmljZXMvZ2V0QWRtaW5TdGFjaz9mb3JtYXQ9anNvbiZhZG1pbmxldmVsPTphZG1pbmxldmVsJnN0YWNraWQ9Omd1aWQmZGF0YXNvdXJjZT1nYWRtJyk7XG5cdHZhciBmdWxsU3RhY2tVUkwgPSBjb25maWcuY2h1YmJzUGF0aCgnc2VydmljZXMvY3VzdG9tL2N1c3RvbV9vcGVyYXRpb24/bmFtZT1HZXRCcmVhZENydW1ic1dpdGhUaGVtZUNvdW50c0J5SUQmZm9ybWF0PWpzb24mZ2FkbV9sZXZlbD06YWRtaW5sZXZlbCZpZHM9Omd1aWQmZGF0YXNvdXJjZT1nYWRtJnRoZW1lPXByb2plY3RzJyk7XG5cblx0dmFyIGJyZWFkQ3J1bWJGZWF0dXJlcyA9IHt9OyAvL1N0b3JlIHJlc3VsdHMgb2YgdGhlIHN0YWNrIGxvb2t1cCBoZXJlIHNvIHdlIGNhbiByZXVzZS5cblxuXHQkc2NvcGUuJG9uKCdjZW50ZXItZmVhdHVyZScsIGZ1bmN0aW9uIChldmVudCwgZmVhdE9iaikge1xuXG5cdFx0Ly9TZWUgaWYgdGhlIGZlYXR1cmUgc3RhY2sgaGFzIGFscmVhZHkgYmVlbiBzdG9yZWRcblx0XHRpZihicmVhZENydW1iRmVhdHVyZXNbZmVhdE9iai5sZXZlbF0gJiYgYnJlYWRDcnVtYkZlYXR1cmVzW2ZlYXRPYmoubGV2ZWxdW2ZlYXRPYmouZ3VpZF0pe1xuXHRcdFx0Ly9BbHJlYWR5IGhhdmUgaXRcblx0XHRcdHVwZGF0ZUJyZWFkQ3J1bWJzKGJyZWFkQ3J1bWJGZWF0dXJlc1tmZWF0T2JqLmxldmVsXVtmZWF0T2JqLmd1aWRdLCBmZWF0T2JqLmxldmVsKTtcblx0XHR9XG5cdFx0ZWxzZXtcblx0XHRcdC8vR28gZmV0Y2ggaXRcblx0XHRcdC8vVXNpbmcgdGhlIENlbnRlciBGZWF0dXJlJ3MgR1VJRCwgZmV0Y2ggdGhlIGZ1bGwgc3RhY2sgZGV0YWlscy5cblx0XHRcdHZhciB1cmwgPSBmdWxsU3RhY2tVUkwucmVwbGFjZSgnOmFkbWlubGV2ZWwnLCBmZWF0T2JqLmxldmVsKS5yZXBsYWNlKCc6Z3VpZCcsIGZlYXRPYmouZ3VpZCk7XG5cdFx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cblxuXHRcdFx0Ly8gRmV0Y2ggZnJvbSB0aGUgc2VydmVyIG9ubHkgaWYgd2UgZG9uJ3QgaGF2ZSBpdCBpbiB0aGUgaGFzaFxuXHRcdFx0JGh0dHAuZ2V0KHVybCkuc3VjY2VzcyhmdW5jdGlvbiAocmVzdWx0LCBzdGF0dXMpIHtcblxuXHRcdFx0XHRpZiAoIXJlc3VsdCB8fCByZXN1bHQuZXJyb3IpIHtcblx0XHRcdFx0XHRjb25zb2xlLmVycm9yKCdVbmFibGUgdG8gZmV0Y2ggZmVhdHVyZTogJyArIHJlc3VsdC5lcnJvcik7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0dmFyIHByb3BlcnRpZXMgPSByZXN1bHRbMF07XG5cblx0XHRcdFx0Ly9VcGRhdGVcbiAgICAgICAgICAgICAgICBpZihwcm9wZXJ0aWVzKXtcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlQnJlYWRDcnVtYnMocHJvcGVydGllcywgZmVhdE9iai5sZXZlbCk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy9TdG9yZSBpbiB0aGUgaGFzaC5cbiAgICAgICAgICAgICAgICAgICAgaWYoYnJlYWRDcnVtYkZlYXR1cmVzW2ZlYXRPYmoubGV2ZWxdKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFkQ3J1bWJGZWF0dXJlc1tmZWF0T2JqLmxldmVsXVtwcm9wZXJ0aWVzW1wiZ3VpZFwiICsgZmVhdE9iai5sZXZlbF1dID0gcHJvcGVydGllcztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWRDcnVtYkZlYXR1cmVzW2ZlYXRPYmoubGV2ZWxdID0ge307XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhZENydW1iRmVhdHVyZXNbZmVhdE9iai5sZXZlbF1bcHJvcGVydGllc1tcImd1aWRcIiArIGZlYXRPYmoubGV2ZWxdXSA9IHByb3BlcnRpZXM7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJcIik7XG4gICAgICAgICAgICAgICAgfVxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9KTtcblxuXHRmdW5jdGlvbiB1cGRhdGVCcmVhZENydW1icyhmZWF0T2JqLCBsZXZlbCkge1xuXHRcdC8vVXBkYXRlIFRoZSBCcmVhZGNydW1iIGRpc3BsYXlcblx0XHQvL0NsZWFyIGxvd2VyIGxldmVsIHNjb3BlIGl0ZW1zIGluIGNhc2Ugd2UndmUgem9vbWVkIG91dFxuXHRcdGZvciAodmFyIHggPSBsZXZlbDsgeCA8PSA1OyB4KyspIHtcblx0XHRcdC8vbnVsbCBvdXQgYW55IGxldmVsIHZhbHVlcyB0aGF0IGFyZSBMT1dFUiB0aGFuIHdoYXQgd2UncmUgY3VycmVudGx5IGxvb2tpbmcgYXRcblx0XHRcdCRzY29wZVtcImxldmVsXCIgKyB4XSA9IFwiXCI7XG5cdFx0XHQkc2NvcGVbXCJmZWF0XCIgKyB4XSA9IG51bGw7XG5cblx0XHRcdGlmKHggPT0gLTEpe1xuXHRcdFx0XHQkc2NvcGVbXCJsZXZlbGFyY1wiXSA9IGZlYXRPYmpbXCJuYW1lYXJjXCJdO1xuXHRcdFx0XHQkc2NvcGVbXCJmZWF0YXJjXCJdID0gZmVhdE9iajtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvL3VzaW5nIHRoZSByZXF1ZXN0ZWQgbGV2ZWwsIGRpZyBvdXQgdGhlIHByb3BlcnRpZXMgZm9yIHRoYXQgbGV2ZWwgYW5kIG9uZXMgYWJvdmUgaXRcblx0XHRmb3IgKHZhciBpID0gbGV2ZWw7IGkgPj0gLTE7IGktLSkge1xuXHRcdFx0aWYoaSA9PSAtMSl7XG5cdFx0XHRcdCRzY29wZVtcImxldmVsYXJjXCJdID0gZmVhdE9ialtcIm5hbWVhcmNcIl07XG5cdFx0XHRcdCRzY29wZVtcImZlYXRhcmNcIl0gPSBmZWF0T2JqO1xuXHRcdFx0fVxuXHRcdFx0JHNjb3BlW1wibGV2ZWxcIiArIGldID0gZmVhdE9ialtcIm5hbWVcIiArIGldO1xuXHRcdFx0JHNjb3BlW1wiZmVhdFwiICsgaV0gPSBmZWF0T2JqO1xuXHRcdH1cblx0fVxuXG4gICRzY29wZS56b29tVG9HVUlEID0gZnVuY3Rpb24gKGZlYXRPYmosIGxldmVsKSB7XG4gICAgLy9HaXZlbiBhIEdVSUQsIHpvb20gdG8gdGhlIGZlYXR1cmUuXG5cbiAgICAvL0dyYWIgdGhlIGZlYXR1cmUgZnJvbSB0aGUgVmVjdG9yUHJvdmlkZXIuXG4gICAgVmVjdG9yUHJvdmlkZXIuZmV0Y2hGZWF0dXJlKGZlYXRPYmpbXCJndWlkXCIgKyAobGV2ZWwgPj0gMCA/IGxldmVsIDogXCJhcmNcIildLCBsZXZlbCwgbnVsbCwgZnVuY3Rpb24gKGZlYXQpIHtcbiAgICAgIC8vTWFrZSBhIHRlbXAgZ2VvanNvbiBsYXllciBhbmQgYWRkIHRoZSBnZW9qc29uLlxuICAgICAgLy9UaGVuIGdyYWIgdGhlIGJvdW5kcyBmcm9tIGl0IGFuZCB6b29tIHRvIGl0LlxuXG4gICAgICB2YXIgZ2psID0gTC5nZW9Kc29uKGZlYXQuZ2VvbWV0cnkpO1xuICAgICAgJHNjb3BlLiRwYXJlbnQuem9vbVRvQm91bmRzKGdqbC5nZXRCb3VuZHMoKSk7XG4gICAgfSk7XG4gIH07XG5cbiAgJHNjb3BlLnpvb21Ub1dvcmxkID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBib3VuZHMgPSBMLmxhdExuZ0JvdW5kcyhMLmxhdExuZygtNTAsLTE3OSksIEwubGF0TG5nKDUwLDE3OSkpO1xuICAgICRzY29wZS4kcGFyZW50Lnpvb21Ub0JvdW5kcyhib3VuZHMpO1xuICB9O1xuXG59KTtcbiIsIi8qKlxuICogQ3JlYXRlZCBieSBOaWNob2xhcyBIYWxsYWhhbiA8bmhhbGxhaGFuQHNwYXRpYWxkZXYuY29tPlxuICogICAgICAgb24gNC85LzE0LlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ0dlb0FuZ3VsYXInKS5jb250cm9sbGVyKCdEZXRhaWxzQ3RybCcsIGZ1bmN0aW9uICgkc2NvcGUsICRyb290U2NvcGUsICRzdGF0ZSwgJHN0YXRlUGFyYW1zLCAkaHR0cCwgRG9udXRzLCAkZmlsdGVyKSB7XG5cbiAgJHNjb3BlLmRldGFpbHMgPSB7fTtcbiAgJHNjb3BlLm5hdlRhYiA9ICdkZXRhaWxzJztcblxuICAkc2NvcGUuc2FsZXNmb3JjZVVybCA9IGNvbmZpZy5zYWxlc2ZvcmNlVXJsO1xuXG4gICRodHRwLmdldCgnc3VjY3VidXNfZ2l0aWdub3JlL3NmLW9iamVjdC1maWVsZC1oYXNoLmpzb24nLCB7Y2FjaGVkOiB0cnVlfSkuc3VjY2VzcyhmdW5jdGlvbihzZkZpZWxkSGFzaCkge1xuICAgICRzY29wZS5zZkZpZWxkSGFzaCA9IHNmRmllbGRIYXNoO1xuICAgICRzY29wZS5Qcm9qZWN0QnVzaW5lc3NVbml0ID0gc2ZGaWVsZEhhc2hbXCJQcm9qZWN0X19jXCJdW1wiYnVzaW5lc3NfdW5pdF9fY1wiXVtcInBpY2tsaXN0VmFsdWVzXCJdO1xuICB9KTtcblxuICAkc2NvcGUuc2hvd1JmYSA9IGZ1bmN0aW9uIChkZXRhaWxzLCB2YWx1ZSkge1xuICAgIGRldGFpbHMuc2hvd1JmYSA9IHRydWU7XG4gICAgdmFsdWUuc2hvd1JmYSA9IHRydWU7XG4gIH07XG5cbiAgJHNjb3BlLmhpZGVSZmEgPSBmdW5jdGlvbiAoZGV0YWlscywgdmFsdWUpIHtcbiAgICBkZXRhaWxzLnNob3dSZmEgPSBmYWxzZTtcbiAgICB2YWx1ZS5zaG93UmZhID0gZmFsc2U7XG4gIH07XG5cbiAgJHNjb3BlLnNob3dJbmRpY2F0b3JzID0gZnVuY3Rpb24gKGRldGFpbHMsIHZhbHVlKSB7XG4gICAgZGV0YWlscy5zaG93SW5kaWNhdG9ycyA9IHRydWU7XG4gICAgdmFsdWUuc2hvd0luZGljYXRvcnMgPSB0cnVlO1xuICB9O1xuXG4gICRzY29wZS5oaWRlSW5kaWNhdG9ycyA9IGZ1bmN0aW9uIChkZXRhaWxzLCB2YWx1ZSkge1xuICAgIGRldGFpbHMuc2hvd0luZGljYXRvcnMgPSBmYWxzZTtcbiAgICB2YWx1ZS5zaG93SW5kaWNhdG9ycyA9IGZhbHNlO1xuICB9O1xuXG4gICRzY29wZS5zaG93Umlza3MgPSBmdW5jdGlvbiAoZGV0YWlscywgdmFsdWUpIHtcbiAgICAgIGRldGFpbHMuc2hvd1Jpc2tzID0gdHJ1ZTtcbiAgICAgIHZhbHVlLnNob3dSaXNrcyA9IHRydWU7XG4gIH07XG5cbiAgJHNjb3BlLmhpZGVSaXNrcyA9IGZ1bmN0aW9uIChkZXRhaWxzLCB2YWx1ZSkge1xuICAgICAgZGV0YWlscy5zaG93Umlza3MgPSBmYWxzZTtcbiAgICAgIHZhbHVlLnNob3dSaXNrcyA9IGZhbHNlO1xuICB9O1xuXG4gICRzY29wZS5zaG93U3RhdHVzZXMgPSBmdW5jdGlvbiAoZGV0YWlscywgdmFsdWUpIHtcbiAgICAgIGRldGFpbHMuc2hvd1N0YXR1c2VzID0gdHJ1ZTtcbiAgICAgIHZhbHVlLnNob3dTdGF0dXNlcyA9IHRydWU7XG4gIH07XG5cbiAgJHNjb3BlLmhpZGVTdGF0dXNlcyA9IGZ1bmN0aW9uIChkZXRhaWxzLCB2YWx1ZSkge1xuICAgICAgZGV0YWlscy5zaG93U3RhdHVzZXMgPSBmYWxzZTtcbiAgICAgIHZhbHVlLnNob3dTdGF0dXNlcyA9IGZhbHNlO1xuICB9O1xuXG4gICRzY29wZS5sYWJlbCA9IGZ1bmN0aW9uIChrZXkpIHtcblxuICAgIHZhciBkZXNjID0ga2V5O1xuXG4gICAgLy8gZGlzYXN0ZXJcbiAgICBpZiAoJHN0YXRlUGFyYW1zLnRoZW1lLmluZGV4T2YoJ2Rpc2FzdGVyJykgIT09IC0xKSB7XG5cbiAgICAgIGlmICgkc2NvcGUuc2ZGaWVsZEhhc2guRGlzYXN0ZXJfX2Nba2V5XSkge1xuICAgICAgICBkZXNjID0gJHNjb3BlLnNmRmllbGRIYXNoLkRpc2FzdGVyX19jW2tleV0ubGFiZWwgfHwga2V5O1xuICAgICAgfVxuXG4gICAgICBpZiAoJHNjb3BlLnNmRmllbGRIYXNoLkxvY2F0aW9uX19jW2tleV0pIHtcbiAgICAgICAgZGVzYyA9ICRzY29wZS5zZkZpZWxkSGFzaC5Mb2NhdGlvbl9fY1trZXldLmxhYmVsIHx8IGtleTtcbiAgICAgIH1cblxuICAgICAgaWYgKCRzY29wZS5zZkZpZWxkSGFzaC5EaXNhc3Rlcl9Mb2NhdGlvbl9fY1trZXldKSB7XG4gICAgICAgIGRlc2MgPSAkc2NvcGUuc2ZGaWVsZEhhc2guRGlzYXN0ZXJfTG9jYXRpb25fX2Nba2V5XS5sYWJlbCB8fCBrZXk7XG4gICAgICB9XG5cbiAgICAgIGlmICgkc2NvcGUuc2ZGaWVsZEhhc2guUmVxdWVzdF9Gb3JfQXNzaXN0YW5jZV9fY1trZXldKSB7XG4gICAgICAgIGRlc2MgPSAkc2NvcGUuc2ZGaWVsZEhhc2guUmVxdWVzdF9Gb3JfQXNzaXN0YW5jZV9fY1trZXldLmxhYmVsIHx8IGtleTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRlc2M7XG4gICAgfVxuXG4gICAgLy8gY29udGV4dHVhbCBsYXllclxuICAgIGlmICgkc2NvcGUuY29udGV4dHVhbExheWVyKSB7XG4gICAgICByZXR1cm4ga2V5O1xuICAgIH1cblxuXG4gICAgaWYgKCRzdGF0ZVBhcmFtcy50aGVtZSA9PT0gJ3Byb2plY3RSaXNrJykge1xuICAgICAgLy8gcHJvamVjdFxuICAgICAgaWYgKCRzY29wZS5zZkZpZWxkSGFzaC5Qcm9qZWN0X19jW2tleV0pIHtcbiAgICAgICAgZGVzYyA9ICRzY29wZS5zZkZpZWxkSGFzaC5Qcm9qZWN0X19jW2tleV0ubGFiZWwgfHwga2V5O1xuICAgICAgfVxuXG4gICAgICBpZiAoJHNjb3BlLnNmRmllbGRIYXNoLkxvY2F0aW9uX19jW2tleV0pIHtcbiAgICAgICAgZGVzYyA9ICRzY29wZS5zZkZpZWxkSGFzaC5Mb2NhdGlvbl9fY1trZXldLmxhYmVsIHx8IGtleTtcbiAgICAgIH1cblxuICAgICAgaWYgKCRzY29wZS5zZkZpZWxkSGFzaC5SaXNrX19jW2tleV0pIHtcbiAgICAgICAgZGVzYyA9ICRzY29wZS5zZkZpZWxkSGFzaC5SaXNrX19jW2tleV0ubGFiZWwgfHwga2V5O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGVzYztcbiAgICB9XG5cblxuICAgIC8vaWYgKCRzdGF0ZVBhcmFtcy50aGVtZSA9PT0gJ3Byb2plY3RIZWFsdGgnKSB7XG4gICAgLy8gIC8vIHByb2plY3RcbiAgICAvLyAgaWYgKCRzY29wZS5zZkZpZWxkSGFzaC5Qcm9qZWN0X19jW2tleV0pIHtcbiAgICAvLyAgICBkZXNjID0gJHNjb3BlLnNmRmllbGRIYXNoLlByb2plY3RfX2Nba2V5XS5sYWJlbCB8fCBrZXk7XG4gICAgLy8gIH1cbiAgICAvL1xuICAgIC8vICBpZiAoJHNjb3BlLnNmRmllbGRIYXNoLkxvY2F0aW9uX19jW2tleV0pIHtcbiAgICAvLyAgICBkZXNjID0gJHNjb3BlLnNmRmllbGRIYXNoLkxvY2F0aW9uX19jW2tleV0ubGFiZWwgfHwga2V5O1xuICAgIC8vICB9XG4gICAgLy9cbiAgICAvLyAgaWYgKCRzY29wZS5zZkZpZWxkSGFzaC5Qcm9qZWN0X0V2YWx1YXRpb25fX2Nba2V5XSkge1xuICAgIC8vICAgIGRlc2MgPSAkc2NvcGUuc2ZGaWVsZEhhc2guUHJvamVjdF9FdmFsdWF0aW9uX19jW2tleV0ubGFiZWwgfHwga2V5O1xuICAgIC8vICB9XG4gICAgLy9cbiAgICAvLyAgcmV0dXJuIGRlc2M7XG4gICAgLy99XG5cbiAgICAvLyBwcm9qZWN0XG4gICAgaWYgKCRzY29wZS5zZkZpZWxkSGFzaC5Qcm9qZWN0X19jW2tleV0pIHtcbiAgICAgIGRlc2MgPSAkc2NvcGUuc2ZGaWVsZEhhc2guUHJvamVjdF9fY1trZXldLmxhYmVsIHx8IGtleTtcbiAgICB9XG5cbiAgICBpZiAoJHNjb3BlLnNmRmllbGRIYXNoLkxvY2F0aW9uX19jW2tleV0pIHtcbiAgICAgIGRlc2MgPSAkc2NvcGUuc2ZGaWVsZEhhc2guTG9jYXRpb25fX2Nba2V5XS5sYWJlbCB8fCBrZXk7XG4gICAgfVxuXG4gICAgaWYgKCRzY29wZS5zZkZpZWxkSGFzaC5JbmRpY2F0b3JfX2Nba2V5XSkge1xuICAgICAgZGVzYyA9ICRzY29wZS5zZkZpZWxkSGFzaC5JbmRpY2F0b3JfX2Nba2V5XS5sYWJlbCB8fCBrZXk7XG4gICAgfVxuXG4gICAgaWYgKCRzY29wZS5zZkZpZWxkSGFzaC5JbmRpY2F0b3JfVmFsdWVfX2Nba2V5XSkge1xuICAgICAgZGVzYyA9ICRzY29wZS5zZkZpZWxkSGFzaC5JbmRpY2F0b3JfVmFsdWVfX2Nba2V5XS5sYWJlbCB8fCBrZXk7XG4gICAgfVxuXG4gICAgaWYgKCRzY29wZS5zZkZpZWxkSGFzaC5Mb2dmcmFtZV9FbGVtZW50X19jW2tleV0pIHtcbiAgICAgIGRlc2MgPSAkc2NvcGUuc2ZGaWVsZEhhc2guTG9nZnJhbWVfRWxlbWVudF9fY1trZXldLmxhYmVsIHx8IGtleTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGVzYztcblxuICB9O1xuXG4gICRzY29wZS50b29sdGlwID0gZnVuY3Rpb24gKGtleSkge1xuLy8gICAgKHNmRmllbGRIYXNoW2tleV0uaW5saW5lSGVscFRleHQgfHwgJycpICsgJyBGaWVsZE5hbWU6ICcgKyBrZXlcblxuICAgIHZhciBkZXNjID0gJyc7XG5cbiAgICAvLyBkaXNhc3RlclxuICAgIGlmICgkc3RhdGVQYXJhbXMudGhlbWUgPT09ICdkaXNhc3RlcicpIHtcblxuICAgICAgaWYgKCRzY29wZS5zZkZpZWxkSGFzaC5EaXNhc3Rlcl9fY1trZXldKSB7XG4gICAgICAgIGRlc2MgPSAkc2NvcGUuc2ZGaWVsZEhhc2guRGlzYXN0ZXJfX2Nba2V5XS5pbmxpbmVIZWxwVGV4dCB8fCAnJztcbiAgICAgIH1cblxuICAgICAgaWYgKCRzY29wZS5zZkZpZWxkSGFzaC5Mb2NhdGlvbl9fY1trZXldKSB7XG4gICAgICAgIGRlc2MgPSAkc2NvcGUuc2ZGaWVsZEhhc2guTG9jYXRpb25fX2Nba2V5XS5pbmxpbmVIZWxwVGV4dCB8fCAnJztcbiAgICAgIH1cblxuICAgICAgaWYgKCRzY29wZS5zZkZpZWxkSGFzaC5EaXNhc3Rlcl9Mb2NhdGlvbl9fY1trZXldKSB7XG4gICAgICAgIGRlc2MgPSAkc2NvcGUuc2ZGaWVsZEhhc2guRGlzYXN0ZXJfTG9jYXRpb25fX2Nba2V5XS5pbmxpbmVIZWxwVGV4dCB8fCAnJztcbiAgICAgIH1cblxuICAgICAgaWYgKCRzY29wZS5zZkZpZWxkSGFzaC5SZXF1ZXN0X0Zvcl9Bc3Npc3RhbmNlX19jW2tleV0pIHtcbiAgICAgICAgZGVzYyA9ICRzY29wZS5zZkZpZWxkSGFzaC5SZXF1ZXN0X0Zvcl9Bc3Npc3RhbmNlX19jW2tleV0uaW5saW5lSGVscFRleHQgfHwgJyc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkZXNjICsgJyBGaWVsZE5hbWU6ICcgKyBrZXk7XG4gICAgfVxuXG4gICAgLy8gY29udGV4dHVhbCBsYXllclxuICAgIGlmICgkc2NvcGUuY29udGV4dHVhbExheWVyKSB7XG4gICAgICByZXR1cm4gJ0ZpZWxkTmFtZTogJyArIGtleTtcbiAgICB9XG5cbiAgICBpZiAoJHN0YXRlUGFyYW1zLnRoZW1lID09PSAncHJvamVjdFJpc2snKSB7XG4gICAgICBpZiAoJHNjb3BlLnNmRmllbGRIYXNoLlByb2plY3RfX2Nba2V5XSkge1xuICAgICAgICBkZXNjID0gJHNjb3BlLnNmRmllbGRIYXNoLlByb2plY3RfX2Nba2V5XS5pbmxpbmVIZWxwVGV4dCB8fCAnJztcbiAgICAgIH1cblxuICAgICAgaWYgKCRzY29wZS5zZkZpZWxkSGFzaC5Mb2NhdGlvbl9fY1trZXldKSB7XG4gICAgICAgIGRlc2MgPSAkc2NvcGUuc2ZGaWVsZEhhc2guTG9jYXRpb25fX2Nba2V5XS5pbmxpbmVIZWxwVGV4dCB8fCAnJztcbiAgICAgIH1cblxuICAgICAgaWYgKCRzY29wZS5zZkZpZWxkSGFzaC5SaXNrX19jW2tleV0pIHtcbiAgICAgICAgZGVzYyA9ICRzY29wZS5zZkZpZWxkSGFzaC5SaXNrX19jW2tleV0uaW5saW5lSGVscFRleHQgfHwgJyc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkZXNjICsgJyBGaWVsZE5hbWU6ICcgKyBrZXk7XG4gICAgfVxuXG4gICAgLy9pZiAoJHN0YXRlUGFyYW1zLnRoZW1lID09PSAncHJvamVjdEhlYWx0aCcpIHtcbiAgICAvLyAgaWYgKCRzY29wZS5zZkZpZWxkSGFzaC5Qcm9qZWN0X19jW2tleV0pIHtcbiAgICAvLyAgICBkZXNjID0gJHNjb3BlLnNmRmllbGRIYXNoLlByb2plY3RfX2Nba2V5XS5pbmxpbmVIZWxwVGV4dCB8fCAnJztcbiAgICAvLyAgfVxuICAgIC8vXG4gICAgLy8gIGlmICgkc2NvcGUuc2ZGaWVsZEhhc2guTG9jYXRpb25fX2Nba2V5XSkge1xuICAgIC8vICAgIGRlc2MgPSAkc2NvcGUuc2ZGaWVsZEhhc2guTG9jYXRpb25fX2Nba2V5XS5pbmxpbmVIZWxwVGV4dCB8fCAnJztcbiAgICAvLyAgfVxuICAgIC8vXG4gICAgLy8gIGlmICgkc2NvcGUuc2ZGaWVsZEhhc2guUHJvamVjdF9FdmFsdWF0aW9uX19jW2tleV0pIHtcbiAgICAvLyAgICBkZXNjID0gJHNjb3BlLnNmRmllbGRIYXNoLlByb2plY3RfRXZhbHVhdGlvbl9fY1trZXldLmlubGluZUhlbHBUZXh0IHx8ICcnO1xuICAgIC8vICB9XG4gICAgLy8gIHJldHVybiBkZXNjICsgJyBGaWVsZE5hbWU6ICcgKyBrZXk7XG4gICAgLy99XG5cbiAgICAvLyBwcm9qZWN0XG4gICAgaWYgKCRzY29wZS5zZkZpZWxkSGFzaC5Qcm9qZWN0X19jW2tleV0pIHtcbiAgICAgIGRlc2MgPSAkc2NvcGUuc2ZGaWVsZEhhc2guUHJvamVjdF9fY1trZXldLmlubGluZUhlbHBUZXh0IHx8ICcnO1xuICAgIH1cblxuICAgIGlmICgkc2NvcGUuc2ZGaWVsZEhhc2guTG9jYXRpb25fX2Nba2V5XSkge1xuICAgICAgZGVzYyA9ICRzY29wZS5zZkZpZWxkSGFzaC5Mb2NhdGlvbl9fY1trZXldLmlubGluZUhlbHBUZXh0IHx8ICcnO1xuICAgIH1cblxuICAgIGlmICgkc2NvcGUuc2ZGaWVsZEhhc2guSW5kaWNhdG9yX19jW2tleV0pIHtcbiAgICAgIGRlc2MgPSAkc2NvcGUuc2ZGaWVsZEhhc2guSW5kaWNhdG9yX19jW2tleV0uaW5saW5lSGVscFRleHQgfHwgJyc7XG4gICAgfVxuXG4gICAgaWYgKCRzY29wZS5zZkZpZWxkSGFzaC5JbmRpY2F0b3JfVmFsdWVfX2Nba2V5XSkge1xuICAgICAgZGVzYyA9ICRzY29wZS5zZkZpZWxkSGFzaC5JbmRpY2F0b3JfVmFsdWVfX2Nba2V5XS5pbmxpbmVIZWxwVGV4dCB8fCAnJztcbiAgICB9XG5cbiAgICBpZiAoJHNjb3BlLnNmRmllbGRIYXNoLkxvZ2ZyYW1lX0VsZW1lbnRfX2Nba2V5XSkge1xuICAgICAgZGVzYyA9ICRzY29wZS5zZkZpZWxkSGFzaC5Mb2dmcmFtZV9FbGVtZW50X19jW2tleV0uaW5saW5lSGVscFRleHQgfHwgJyc7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRlc2MgKyAnIEZpZWxkTmFtZTogJyArIGtleTtcblxuICB9O1xuXG4gIC8vSW5pdCBzZWxlY3RlZEZlYXR1cmVUaXRsZSBwcm9wZXJ0eVxuICAkc2NvcGUudGl0bGU9IFwiRmVhdHVyZSBEZXRhaWxzXCI7XG5cbiAgdmFyIHNvcnREZXRhaWxzID0gZnVuY3Rpb24oKXtcbiAgICB2YXIgcHJvamVjdGtleSA9IE9iamVjdC5rZXlzKCRzY29wZS5ncm91cGluZ3MpWzBdO1xuXG4gICAgLy8gUHJvamVjdHMgYW5kIFByb2plY3QgUmlzayBoYXZlIHNhbWUgc29ydGluZyBydWxlc1xuICAgIGlmKCRzY29wZS5ncm91cGluZ3MuaGFzT3duUHJvcGVydHkoJ1Byb2plY3RzJyk9PXRydWUgfHwgJHNjb3BlLmdyb3VwaW5ncy5oYXNPd25Qcm9wZXJ0eSgnUHJvamVjdCBSaXNrJyk9PXRydWUpe1xuICAgICAgJHNjb3BlLmdyb3VwaW5nc1twcm9qZWN0a2V5XSA9IFNvcnRCeVByb2plY3RSaXNrKCRzY29wZS5ncm91cGluZ3NbcHJvamVjdGtleV0pO1xuICAgIH07XG5cbiAgICBpZigkc2NvcGUuZ3JvdXBpbmdzLmhhc093blByb3BlcnR5KCdQcm9qZWN0IEhlYWx0aCcpPT10cnVlKXtcbiAgICAgICRzY29wZS5ncm91cGluZ3NbcHJvamVjdGtleV0gPSBTb3J0QnlQcm9qZWN0SGVhbHRoKCRzY29wZS5ncm91cGluZ3NbcHJvamVjdGtleV0pO1xuICAgIH07XG5cbiAgICBpZigkc2NvcGUuZ3JvdXBpbmdzLmhhc093blByb3BlcnR5KCdEaXNhc3RlcnMnKT09dHJ1ZSl7XG4gICAgICAkc2NvcGUuZ3JvdXBpbmdzWydEaXNhc3RlcnMnXSA9IFNvcnlCeURpc2FzdGVyKCRzY29wZS5ncm91cGluZ3NbJ0Rpc2FzdGVycyddKTtcbiAgICB9O1xuXG4gIH07XG5cbiAgJHNjb3BlLnRvZ2dsZVN0YXRlID0gZnVuY3Rpb24oc3RhdGVOYW1lKSB7XG4gICAgdmFyIHN0YXRlID0gJHN0YXRlLmN1cnJlbnQubmFtZSAhPT0gc3RhdGVOYW1lID8gc3RhdGVOYW1lIDogJ21haW4nO1xuICAgICRzdGF0ZS5nbyhzdGF0ZSwgJHN0YXRlUGFyYW1zKTtcbiAgfTtcblxuICAkc2NvcGUuaXRlbXNMaXN0ID0gdHJ1ZTtcbiAgJHNjb3BlLmRldGFpbHMgPSBmYWxzZTtcblxuXG4gIC8vSW5pdGlhbGl6ZSB0aGUgZHVtbXkgcHJvamVjdC9kaXNhc3RlciBjbGljayByZXN1bHRzXG4gICRzY29wZS5ncm91cGluZ3MgPSB7fTtcblxuICAkc2NvcGUuYWxlcnRVc2VyVG9DbGljayA9IHRydWU7XG5cbiAgJHNjb3BlLiRvbignZGV0YWlscycsIGZ1bmN0aW9uIChldmVudCwgZmVhdHVyZUxheWVyKSB7XG4gICAgJHNjb3BlLmFsZXJ0VXNlclRvQ2xpY2sgPSBmYWxzZTtcbiAgICB2YXIgcHJvcGVydGllcyA9IGZlYXR1cmVMYXllci5mZWF0dXJlLnByb3BlcnRpZXM7XG4gICAgJHNjb3BlLmZlYXR1cmUgPSBmZWF0dXJlTGF5ZXIuZmVhdHVyZTtcbiAgICAkc2NvcGUudGl0bGUgPSAkc2NvcGUuZmVhdHVyZVRpdGxlID0gcHJvcGVydGllcy5uYW1lIHx8IHByb3BlcnRpZXMudGl0bGUgfHwgJ1NlbGVjdGVkIEZlYXR1cmUnO1xuICAgIGlmIChwcm9wZXJ0aWVzLnNhbGVzZm9yY2UpIHsgLy8gc2FsZXNmb3JjZSB0aGVtZSBiYWRnZSBzZWxlY3RlZFxuICAgICAgJHNjb3BlLmNvbnRleHR1YWxMYXllciA9IGZhbHNlO1xuICAgICAgJHNjb3BlLmdyb3VwaW5ncyA9IHByb3BlcnRpZXMuc2FsZXNmb3JjZTtcblxuICAgICAgc29ydERldGFpbHMoKTtcblxuICAgICAgJHNjb3BlLm51bVRoZW1lSXRlbXMgPSAkLm1hcChwcm9wZXJ0aWVzLnNhbGVzZm9yY2UsIGZ1bmN0aW9uKG4pIHsgcmV0dXJuIG59KS5sZW5ndGg7XG4gICAgICAkc2NvcGUuc2hvd0xpc3QoKTtcblxuICAgICAgLy8gY2xvc2UgcGFyYW0gaWYgdXNlciBzZWxlY3RzIGEgY291bnRyeSB3aXRoIG5vIGRhdGFcbiAgICAgIHZhciBvYmp0aXRsZSA9IE9iamVjdC5rZXlzKHByb3BlcnRpZXMuc2FsZXNmb3JjZSlbMF07XG4gICAgICBpZihwcm9wZXJ0aWVzLnNhbGVzZm9yY2Vbb2JqdGl0bGVdLmxlbmd0aD49MSl7XG4gICAgICAgICRzY29wZS5vcGVuUGFyYW0oJ2RldGFpbHMtcGFuZWwnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICRzY29wZS5jbG9zZVBhcmFtKCdkZXRhaWxzLXBhbmVsJyk7XG4gICAgICB9XG5cbiAgICAgICRzY29wZS5jcmVhdGVEb251dHMoKTtcbiAgICAgICRzY29wZS5kYXRhc2V0ID0gRG9udXRzLmRhdGFzZXQ7XG5cbiAgICAgIC8vc2VjdG9yIGxlZ2VuZFxuICAgICAgdmFyIGRjPTA7IC8vdG90YWwgc2VjdG9yc1xuICAgICAgZm9yKHZhciBpPTA7aTwkc2NvcGUuZGF0YXNldC5sZW5ndGg7aSsrKXtcbiAgICAgICAgZGMgPSBkYyArICRzY29wZS5kYXRhc2V0W2ldLmNvdW50O1xuICAgICAgfVxuICAgICAgZm9yKHZhciBpPTA7aTwkc2NvcGUuZGF0YXNldC5sZW5ndGg7aSsrKXtcbiAgICAgICAgJHNjb3BlLmRhdGFzZXRbaV0ud2lkdGggPSBNYXRoLnJvdW5kKCgyNzcgKiAoJHNjb3BlLmRhdGFzZXRbaV0uY291bnQvZGMpKSk7IC8vIHBlcmNlbnRhZ2Ugb2YgZGl2ICgyNTBweClcbiAgICAgIH1cbiAgICAgIC8vIFNvcnQgc2VjdG9yIGFycmF5IGJ5IGNvdW50XG4gICAgICAkc2NvcGUuZGF0YXNldC5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgIHJldHVybiBiLndpZHRoIC0gYS53aWR0aDsgLy8gc29ydCBieSBjb3VudFxuICAgICAgfSk7XG5cbiAgICAgIGlmKCRzY29wZS5kYXRhc2V0Lmxlbmd0aD4wKSB7XG4gICAgICAgICRzY29wZS5kYXRhc2V0VGl0bGUgPSAkc2NvcGUuZGF0YXNldFswXS5hbGlhcztcbiAgICAgICAgJHNjb3BlLmRhdGFzZXRDb2xvciA9ICRzY29wZS5kYXRhc2V0WzBdLmNvbG9yO1xuICAgICAgICAkc2NvcGUuZGF0YXNldENvdW50ID0gJHNjb3BlLmRhdGFzZXRbMF0uY291bnQ7XG4gICAgICB9XG5cbiAgICAgICRzY29wZS5oaWRlTGVnZW5kID0gZmFsc2U7XG4gICAgICAvLyBlbmQgc2VjdG9yIGxlZ2VuZFxuXG4gICAgfSBlbHNlIHsgLy8gc3RhbmRhcmQgZ2VvanNvbiwgc2hvdyBwcm9wZXJ0aWVzIGFzIGRldGFpbHNcblxuICAgICAgJHNjb3BlLmNvbnRleHR1YWxMYXllciA9IChwcm9wZXJ0aWVzLnNmX2lkID8gZmFsc2UgOiB0cnVlKTtcbiAgICAgICRzY29wZS5zaG93RGV0YWlscyhwcm9wZXJ0aWVzKTtcbiAgICAgICRzY29wZS5vcGVuUGFyYW0oJ2RldGFpbHMtcGFuZWwnKTtcbiAgICAgIC8vJHNjb3BlLm51bVRoZW1lSXRlbXMgPSAxOyAvL25vbiBzYWxlcyBmb3JjZSBmZWF0dXJlc1xuICAgIH1cbiAgICAkc2NvcGUucmVzaXplRGV0YWlsc1BhbmVsKCk7XG4gIH0pO1xuXG4gIHZhciBTb3J0QnlQcm9qZWN0UmlzayA9IGZ1bmN0aW9uKGFycil7XG4gICAgYXJyLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgIGlmIChjb25maWcuUHJvamVjdFJpc2tPcmRlclthLm92ZXJhbGxfYXNzZXNzbWVudF9fY10gPCBjb25maWcuUHJvamVjdFJpc2tPcmRlcltiLm92ZXJhbGxfYXNzZXNzbWVudF9fY10pIHtcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgICB9XG4gICAgICBpZiAoY29uZmlnLlByb2plY3RSaXNrT3JkZXJbYS5vdmVyYWxsX2Fzc2Vzc21lbnRfX2NdID4gY29uZmlnLlByb2plY3RSaXNrT3JkZXJbYi5vdmVyYWxsX2Fzc2Vzc21lbnRfX2NdKSB7XG4gICAgICAgIHJldHVybiAtMTtcbiAgICAgIH1cbiAgICAgIC8vIGEgbXVzdCBiZSBlcXVhbCB0byBiXG4gICAgICByZXR1cm4gMDtcbiAgICB9KTtcblxuICAgIHJldHVybiBhcnI7XG4gIH07XG4gIHZhciBTb3J5QnlEaXNhc3RlciA9IGZ1bmN0aW9uKGFycil7XG4gICAgYXJyLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgIGlmIChjb25maWcuRGlzYXN0ZXJPcmRlclthLmlyb2Nfc3RhdHVzX19jXSA8IGNvbmZpZy5EaXNhc3Rlck9yZGVyW2IuaXJvY19zdGF0dXNfX2NdKSB7XG4gICAgICAgIHJldHVybiAxO1xuICAgICAgfVxuICAgICAgaWYgKGNvbmZpZy5EaXNhc3Rlck9yZGVyW2EuaXJvY19zdGF0dXNfX2NdID4gY29uZmlnLkRpc2FzdGVyT3JkZXJbYi5pcm9jX3N0YXR1c19fY10pIHtcbiAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgfVxuICAgICAgLy8gaW4gY2FzZSBvZiBhIHRpZTsgb3JkZXIgYnkgZGF0ZVxuICAgICAgcmV0dXJuIG5ldyBEYXRlKGIuZGF0ZV9fYykgLSBuZXcgRGF0ZShhLmRhdGVfX2MpO1xuXG4gICAgfSk7XG5cbiAgICByZXR1cm4gYXJyO1xuICB9O1xuICB2YXIgU29ydEJ5UHJvamVjdEhlYWx0aCA9IGZ1bmN0aW9uKGFycil7XG4gICAgYXJyLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgIGlmIChjb25maWcuUHJvamVjdEhlYWx0aE9yZGVyW2Eub3ZlcmFsbF9zdGF0dXNfX2NdIDwgY29uZmlnLlByb2plY3RIZWFsdGhPcmRlcltiLm92ZXJhbGxfc3RhdHVzX19jXSkge1xuICAgICAgICByZXR1cm4gMTtcbiAgICAgIH1cbiAgICAgIGlmIChjb25maWcuUHJvamVjdEhlYWx0aE9yZGVyW2Eub3ZlcmFsbF9zdGF0dXNfX2NdID4gY29uZmlnLlByb2plY3RIZWFsdGhPcmRlcltiLm92ZXJhbGxfc3RhdHVzX19jXSkge1xuICAgICAgICByZXR1cm4gLTE7XG4gICAgICB9XG4gICAgICAvLyBhIG11c3QgYmUgZXF1YWwgdG8gYlxuICAgICAgcmV0dXJuIDA7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gYXJyO1xuICB9O1xuXG5cbiAgJHNjb3BlLiRvbigncm91dGUtdXBkYXRlJywgZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZl9pZCA9ICRzdGF0ZVBhcmFtcy5zZl9pZDtcbiAgICAkc2NvcGUudGhlbWUgPSAkc3RhdGVQYXJhbXMudGhlbWU7XG4gICAgaWYgKCRzY29wZS5hbGVydFVzZXJUb0NsaWNrID09PSBmYWxzZSkgcmV0dXJuO1xuICAgIGlmIChzZl9pZCAmJiB0eXBlb2Ygc2ZfaWQgPT09ICdzdHJpbmcnKSB7XG4gICAgICB2YXIgdXJsID0gY29uZmlnLmNodWJic1BhdGgoJ3NlcnZpY2VzL2N1c3RvbS9jdXN0b21fb3BlcmF0aW9uP25hbWU9ZG9lY29zdGV4dHNlYXJjaCZmb3JtYXQ9anNvbiZ0ZXh0PScpICsgc2ZfaWQ7XG4gICAgICAkaHR0cC5nZXQodXJsKS5zdWNjZXNzKGZ1bmN0aW9uIChyZXN1bHQsIHN0YXR1cykge1xuICAgICAgICBpZiAocmVzdWx0WzBdKSB7XG4gICAgICAgICAgJHJvb3RTY29wZS4kYnJvYWRjYXN0KCdkZXRhaWxzJywgeyBmZWF0dXJlOiB7IHByb3BlcnRpZXM6IHJlc3VsdFswXSB9IH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xuXG4gICRzY29wZS5jcmVhdGVEb251dHMgPSBmdW5jdGlvbigpIHtcbiAgICAvLyB1c2VzIGpxdWVyeSB0byBwdXQgZG9udXQgaW4gYSBkaXYuXG4gICAgaWYgKCRzY29wZS5ncm91cGluZ3MgJiYgJHNjb3BlLmdyb3VwaW5ncy5Qcm9qZWN0cykge1xuICAgICAgRG9udXRzLmNyZWF0ZUxhYmVsRG9udXQoJHNjb3BlLnNmRmllbGRIYXNoLlByb2plY3RfX2Muc2VjdG9yX19jLnBpY2tsaXN0VmFsdWVzLCAkc2NvcGUuZ3JvdXBpbmdzLlByb2plY3RzLCAnI2RldGFpbHMtZG9udXQnKTtcbiAgICB9XG4gIH07XG5cbiAgJHNjb3BlLm1vcmVMZXNzID0gJ01vcmUnO1xuXG4gICRzY29wZS50b2dnbGVNb3JlTGVzcyA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoJHNjb3BlLm1vcmVMZXNzID09PSAnTW9yZScpIHtcbiAgICAgICRzY29wZS5tb3JlTGVzcyA9ICdMZXNzJztcbiAgICB9IGVsc2Uge1xuICAgICAgJHNjb3BlLm1vcmVMZXNzID0gJ01vcmUnO1xuICAgIH1cbiAgICAvL1Jlc2l6ZTtcbiAgICAkc2NvcGUucmVzaXplRGV0YWlsc1BhbmVsKCk7XG4gIH07XG5cbiAgJHNjb3BlLnNob3dEZXRhaWxzID0gZnVuY3Rpb24gKGl0ZW0sIHRoZW1lSXRlbXMsIGlkeCkge1xuICAgICRzY29wZS5oaWRlTGVnZW5kID0gdHJ1ZTtcblxuICAgIGlmIChpdGVtLnNmX2lkKSB7XG4gICAgICAkcm9vdFNjb3BlLnNldFBhcmFtV2l0aFZhbCgnc2ZfaWQnLCBpdGVtLnNmX2lkKTtcbiAgICB9XG4gICAgaWYgKGl0ZW0ubmFtZSB8fCBpdGVtLnRpdGxlKSB7XG4gICAgICAkc2NvcGUudGl0bGUgPSBpdGVtLm5hbWUgfHwgaXRlbS50aXRsZTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGlkeCA9PT0gJ251bWJlcicpICRzY29wZS5hY3RpdmVUaGVtZUl0ZW1JZHggPSBpZHg7XG4gICAgaWYgKHRoZW1lSXRlbXMpICRzY29wZS5hY3RpdmVUaGVtZUl0ZW1zTGlzdCA9IHRoZW1lSXRlbXM7XG5cbiAgICAkc2NvcGUuaXRlbXNMaXN0ID0gZmFsc2U7XG4gICAgLy9cbiAgICBpZighJHNjb3BlLiQkcGhhc2UpIHtcbiAgICAgICRzY29wZS4kYXBwbHkoZnVuY3Rpb24oKXtcbiAgICAgICAgJHNjb3BlLmRldGFpbHMgPSByZW1vdmVVbndhbnRlZEl0ZW1zKGZvcm1hdERldGFpbHMoaXRlbSwgJHN0YXRlUGFyYW1zLnRoZW1lKSwgJHN0YXRlUGFyYW1zLnRoZW1lKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAkc2NvcGUuZGV0YWlscyA9IHJlbW92ZVVud2FudGVkSXRlbXMoZm9ybWF0RGV0YWlscyhpdGVtLCAkc3RhdGVQYXJhbXMudGhlbWUpLCAkc3RhdGVQYXJhbXMudGhlbWUpO1xuICAgIH1cblxuICAgICAgLy8kc2NvcGUuZGV0YWlscyA9IHJlbW92ZVVud2FudGVkSXRlbXMoZm9ybWF0RGV0YWlscyhpdGVtLCAkc3RhdGVQYXJhbXMudGhlbWUpLCAkc3RhdGVQYXJhbXMudGhlbWUpO1xuXG4gICAgaWYgKCEkc2NvcGUuY29udGV4dHVhbExheWVyKSB7XG4gICAgICAkc2NvcGUubGVzc0RldGFpbHMgPSByZW1vdmVVbndhbnRlZEl0ZW1zKGxlc3NEZXRhaWxzKGZvcm1hdERldGFpbHMoaXRlbSwgJHN0YXRlUGFyYW1zLnRoZW1lKSksICRzdGF0ZVBhcmFtcy50aGVtZSk7XG4gICAgfVxuXG4gICAgLy9GaWx0ZXIvRm9ybWF0IFJGQXMgYW5kIEluZGljYXRvcnNcbiAgICBpZiAoJHNjb3BlLmRldGFpbHMucmVxdWVzdHNGb3JBc3Npc3RhbmNlICYmIGFuZ3VsYXIuaXNBcnJheSgkc2NvcGUuZGV0YWlscy5yZXF1ZXN0c0ZvckFzc2lzdGFuY2UpKSB7XG4gICAgICAvL0ZpbHRlci9Gb3JtYXRcbiAgICAgICRzY29wZS5kZXRhaWxzLnJlcXVlc3RzRm9yQXNzaXN0YW5jZSA9ICRzY29wZS5kZXRhaWxzLnJlcXVlc3RzRm9yQXNzaXN0YW5jZS5tYXAoZnVuY3Rpb24gKHJmYSkge1xuICAgICAgICByZXR1cm4gcmVtb3ZlVW53YW50ZWRJdGVtcyhmb3JtYXREZXRhaWxzKHJmYSwgXCJSRkFcIiksIFwiUkZBXCIpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKCRzY29wZS5kZXRhaWxzLmluZGljYXRvcnMgJiYgYW5ndWxhci5pc0FycmF5KCRzY29wZS5kZXRhaWxzLmluZGljYXRvcnMpKSB7XG4gICAgICAvL0ZpbHRlci9Gb3JtYXRcbiAgICAgICRzY29wZS5kZXRhaWxzLmluZGljYXRvcnMgPSAkc2NvcGUuZGV0YWlscy5pbmRpY2F0b3JzLm1hcChmdW5jdGlvbiAoaW5kaWNhdG9yKSB7XG4gICAgICAgIHJldHVybiByZW1vdmVVbndhbnRlZEl0ZW1zKGZvcm1hdERldGFpbHMoaW5kaWNhdG9yLCBcImluZGljYXRvclwiKSwgXCJpbmRpY2F0b3JcIik7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoJHNjb3BlLmRldGFpbHMucmlza3MgJiYgYW5ndWxhci5pc0FycmF5KCRzY29wZS5kZXRhaWxzLnJpc2tzKSA9PT0gdHJ1ZSkge1xuICAgICAgLy9GaWx0ZXIvRm9ybWF0XG4gICAgICAkc2NvcGUuZGV0YWlscy5yaXNrcyA9ICRzY29wZS5kZXRhaWxzLnJpc2tzLm1hcChmdW5jdGlvbiAocmlzaykge1xuICAgICAgICByZXR1cm4gcmVtb3ZlVW53YW50ZWRJdGVtcyhmb3JtYXREZXRhaWxzKHJpc2ssIFwicmlza1wiKSwgXCJyaXNrXCIpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKCRzY29wZS5kZXRhaWxzLnN0YXR1c2VzICYmIGFuZ3VsYXIuaXNBcnJheSgkc2NvcGUuZGV0YWlscy5zdGF0dXNlcykpIHtcbiAgICAgIC8vRmlsdGVyL0Zvcm1hdFxuICAgICAgJHNjb3BlLmRldGFpbHMuc3RhdHVzZXMgPSAkc2NvcGUuZGV0YWlscy5zdGF0dXNlcy5tYXAoZnVuY3Rpb24gKHN0YXR1cykge1xuICAgICAgICByZXR1cm4gcmVtb3ZlVW53YW50ZWRJdGVtcyhmb3JtYXREZXRhaWxzKHN0YXR1cywgXCJzdGF0dXNcIiksIFwic3RhdHVzXCIpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy9OZWVkIHRvIHdhaXQgdW50aWwgZGV0YWlscyBwYW5lbCBzd2l0Y2hlcyBtb2RlcywgYW5kIHRoZW4gY2FsY3VsYXRlIHRoZSBzaXplLlxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgJHNjb3BlLnJlc2l6ZURldGFpbHNQYW5lbCgpO1xuICAgIH0sIDEwMCk7XG5cbiAgfTtcblxuICBmdW5jdGlvbiByZW1vdmVVbndhbnRlZEl0ZW1zKGRldGFpbHMsIHR5cGUpIHtcbiAgICB2YXIgcGFzc3Rocm91Z2hEZXRhaWxzID0ge307XG4gICAgdmFyIGJsYWNrbGlzdERpY3Rpb25hcnkgPSBjb25maWcudW53YW50ZWRQcm9qZWN0RGV0YWlscztcblxuICAgIGlmICh0eXBlID09PSAnZGlzYXN0ZXInKSB7XG4gICAgICBibGFja2xpc3REaWN0aW9uYXJ5ID0gY29uZmlnLnVud2FudGVkRGlzYXN0ZXJEZXRhaWxzO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlID09PSAncHJvamVjdCcpIHtcbiAgICAgIGJsYWNrbGlzdERpY3Rpb25hcnkgPSBjb25maWcudW53YW50ZWRQcm9qZWN0RGV0YWlscztcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSA9PT0gJ1JGQScpIHtcbiAgICAgIGJsYWNrbGlzdERpY3Rpb25hcnkgPSBjb25maWcudW53YW50ZWRSRkFEZXRhaWxzO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlID09PSAnaW5kaWNhdG9yJykge1xuICAgICAgYmxhY2tsaXN0RGljdGlvbmFyeSA9IGNvbmZpZy51bndhbnRlZEluZGljYXRvckRldGFpbHM7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgPT09ICdwcm9qZWN0UmlzaycgfHwgdHlwZSA9PT0gJ3Jpc2snKSB7XG4gICAgICBibGFja2xpc3REaWN0aW9uYXJ5ID0gY29uZmlnLnVud2FudGVkUHJvamVjdFJpc2tEZXRhaWxzO1xuICAgIH1cbiAgICAvL2Vsc2UgaWYgKHR5cGUgPT09ICdwcm9qZWN0SGVhbHRoJyB8fCB0eXBlID09PSAnc3RhdHVzJykge1xuICAgIC8vICBibGFja2xpc3REaWN0aW9uYXJ5ID0gY29uZmlnLnVud2FudGVkUHJvamVjdEhlYWx0aERldGFpbHM7XG4gICAgLy99XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gZGV0YWlscykge1xuICAgICAgdmFyIGJsYWNrbGlzdGVkID0gYmxhY2tsaXN0RGljdGlvbmFyeVtrZXldO1xuICAgICAgaWYgKGJsYWNrbGlzdGVkICYmICh0eXBlb2YgYmxhY2tsaXN0ZWQgPT09ICdmdW5jdGlvbicpKSB7XG4gICAgICAgIC8vZXZhbHVhdGUgdGhlIGZ1bmN0aW9uIHRvIGRlY2lkZSBpZiB0aGUga2V5IHNob3VsZCBiZSBzaG93bi5cbiAgICAgICAgYmxhY2tsaXN0ZWQgPSBibGFja2xpc3RlZChkZXRhaWxzW2tleV0pO1xuICAgICAgfVxuICAgICAgaWYgKCFibGFja2xpc3RlZCkge1xuICAgICAgICAvL0FsbG93IHRoZSBpdGVtIHRocnUgaWYgaXQgaXMgbm90IGJsYWNrbGlzdGVkXG4gICAgICAgIHBhc3N0aHJvdWdoRGV0YWlsc1trZXldID0gZGV0YWlsc1trZXldO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBwYXNzdGhyb3VnaERldGFpbHM7XG4gIH1cblxuICBmdW5jdGlvbiBmb3JtYXREZXRhaWxzKGRldGFpbHMsIHR5cGUpIHtcbiAgICB2YXIgZm9ybWF0dGVkRGV0YWlscyA9IHt9O1xuICAgIHZhciBmb3JtYXR0aW5nRGljdGlvbmFyeSA9IGNvbmZpZy5wcm9qZWN0RGV0YWlsc0Zvcm1hdHRpbmc7XG5cbiAgICBpZiAodHlwZS5pbmRleE9mKCdkaXNhc3RlcicpICE9PSAtMSkge1xuICAgICAgZm9ybWF0dGluZ0RpY3Rpb25hcnkgPSBjb25maWcuZGlzYXN0ZXJEZXRhaWxzRm9ybWF0dGluZztcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSA9PT0gJ3Byb2plY3QnKSB7XG4gICAgICBmb3JtYXR0aW5nRGljdGlvbmFyeSA9IGNvbmZpZy5wcm9qZWN0RGV0YWlsc0Zvcm1hdHRpbmc7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgPT09ICdSRkEnKSB7XG4gICAgICBmb3JtYXR0aW5nRGljdGlvbmFyeSA9IGNvbmZpZy5SRkFEZXRhaWxzRm9ybWF0dGluZztcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSA9PT0gJ2luZGljYXRvcicpIHtcbiAgICAgIGZvcm1hdHRpbmdEaWN0aW9uYXJ5ID0gY29uZmlnLmluZGljYXRvckRldGFpbHNGb3JtYXR0aW5nO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlID09PSAncHJvamVjdFJpc2snIHx8IHR5cGUgPT09ICdyaXNrJykge1xuICAgICAgZm9ybWF0dGluZ0RpY3Rpb25hcnkgPSBjb25maWcucHJvamVjdFJpc2tEZXRhaWxzRm9ybWF0dGluZztcbiAgICB9XG4gICAgLy9lbHNlIGlmICh0eXBlID09PSAncHJvamVjdEhlYWx0aCcgfHwgdHlwZSA9PT0gJ3N0YXR1cycpIHtcbiAgICAvLyAgZm9ybWF0dGluZ0RpY3Rpb25hcnkgPSBjb25maWcucHJvamVjdEhlYWx0aERldGFpbHNGb3JtYXR0aW5nO1xuICAgIC8vfVxuXG4gICAgZm9yICh2YXIga2V5IGluIGRldGFpbHMpIHtcbiAgICAgIHZhciBmb3JtYXR0ZXIgPSBmb3JtYXR0aW5nRGljdGlvbmFyeVtrZXldO1xuICAgICAgaWYgKGZvcm1hdHRlcikge1xuICAgICAgICBzd2l0Y2ggKGZvcm1hdHRlci5zcGxpdChcIixcIilbMF0pIHtcbiAgICAgICAgICBjYXNlIFwiY3VycmVuY3lcIjpcbiAgICAgICAgICAgIGZvcm1hdHRlZERldGFpbHNba2V5XSA9ICRmaWx0ZXIoJ2N1cnJlbmN5JykoZGV0YWlsc1trZXldLCAoZm9ybWF0dGVyLnNwbGl0KFwiLFwiKVsxXSB8fCBcIlVTRFwiKSk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgXCJudW1iZXJcIjpcbiAgICAgICAgICAgIGZvcm1hdHRlZERldGFpbHNba2V5XSA9ICRmaWx0ZXIoJ251bWJlcicpKGRldGFpbHNba2V5XSk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgXCJkYXRlXCI6XG4gICAgICAgICAgICBmb3JtYXR0ZWREZXRhaWxzW2tleV0gPSAkZmlsdGVyKCdkYXRlJykoZGV0YWlsc1trZXldLCBcInl5eXktZGQtTU1cIik7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgXCJyZmFOYW1lXCI6XG4gICAgICAgICAgICBmb3JtYXR0ZWREZXRhaWxzW2tleV0gPSAkc2NvcGUuZGV0YWlscy5sb2NhdGlvbl9fcl9hZG1pbl8wX19jICsgJyAnICsgJHNjb3BlLmRldGFpbHMuZGlzYXN0ZXJfdHlwZV9fYyArICcgLSAnICsgZGV0YWlscy5hcHBlYWxfc291cmNlX19jO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgZm9ybWF0dGVkRGV0YWlsc1trZXldID0gZGV0YWlsc1trZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgLy9ObyBmb3JtYXR0aW5nXG4gICAgICAgIGZvcm1hdHRlZERldGFpbHNba2V5XSA9IGRldGFpbHNba2V5XTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZm9ybWF0dGVkRGV0YWlscztcbiAgfVxuXG4gIGZ1bmN0aW9uIGxlc3NEZXRhaWxzKGRldGFpbHMpIHtcbiAgICB2YXIgbGVzc0RldGFpbHMgPSBbXTtcbiAgICBpZiAoJHN0YXRlUGFyYW1zLnRoZW1lLmluZGV4T2YoJ2Rpc2FzdGVyJykhPT0tMSkge1xuICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGNvbmZpZy5kaXNhc3RlckRldGFpbHNTaG9ydExpc3QubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgdmFyIGtleSA9IGNvbmZpZy5kaXNhc3RlckRldGFpbHNTaG9ydExpc3RbaV07XG4gICAgICAgIGxlc3NEZXRhaWxzLnB1c2goe1xuICAgICAgICAgIGtleToga2V5LFxuICAgICAgICAgIHZhbHVlOiBkZXRhaWxzW2tleV1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBwcm9qZWN0RGV0YWlsc1Nob3J0TGlzdCA9IGNvbmZpZy5wcm9qZWN0RGV0YWlsc1Nob3J0TGlzdDtcbiAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBwcm9qZWN0RGV0YWlsc1Nob3J0TGlzdC5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICB2YXIga2V5ID0gcHJvamVjdERldGFpbHNTaG9ydExpc3RbaV07XG4gICAgICAgIGxlc3NEZXRhaWxzLnB1c2goe1xuICAgICAgICAgIGtleToga2V5LFxuICAgICAgICAgIHZhbHVlOiBkZXRhaWxzW2tleV1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBsZXNzRGV0YWlscztcbiAgfVxuXG4gICRzY29wZS5uZXh0VGhlbWVJdGVtID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGxlbiA9ICRzY29wZS5hY3RpdmVUaGVtZUl0ZW1zTGlzdC5sZW5ndGg7XG4gICAgaWYgKCsrJHNjb3BlLmFjdGl2ZVRoZW1lSXRlbUlkeCA+PSBsZW4pICRzY29wZS5hY3RpdmVUaGVtZUl0ZW1JZHggPSAwO1xuICAgIHZhciBpdGVtID0gJHNjb3BlLmFjdGl2ZVRoZW1lSXRlbXNMaXN0WyRzY29wZS5hY3RpdmVUaGVtZUl0ZW1JZHhdO1xuICAgICRzY29wZS5zaG93RGV0YWlscyhpdGVtKTtcbiAgfTtcblxuICAkc2NvcGUucHJldlRoZW1lSXRlbSA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBsZW4gPSAkc2NvcGUuYWN0aXZlVGhlbWVJdGVtc0xpc3QubGVuZ3RoO1xuICAgIGlmICgtLSRzY29wZS5hY3RpdmVUaGVtZUl0ZW1JZHggPCAwKSAkc2NvcGUuYWN0aXZlVGhlbWVJdGVtSWR4ID0gbGVuIC0gMTtcbiAgICB2YXIgaXRlbSA9ICRzY29wZS5hY3RpdmVUaGVtZUl0ZW1zTGlzdFskc2NvcGUuYWN0aXZlVGhlbWVJdGVtSWR4XTtcbiAgICAkc2NvcGUuc2hvd0RldGFpbHMoaXRlbSk7XG4gIH07XG5cbiAgJHNjb3BlLnNob3dMaXN0ID0gZnVuY3Rpb24gKCkge1xuICAgICRzY29wZS50aXRsZSA9ICRzY29wZS5mZWF0dXJlVGl0bGU7XG4gICAgJHNjb3BlLml0ZW1zTGlzdCA9IHRydWU7XG4gICAgJHNjb3BlLmRldGFpbHMgPSBmYWxzZTtcbiAgICAkc2NvcGUuaGlkZUxlZ2VuZCA9IGZhbHNlO1xuICB9O1xuXG4gICRzY29wZS5yZXNpemVEZXRhaWxzUGFuZWwgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgaGVpZ2h0ID0gJCgnI01hcEN0cmwnKS5oZWlnaHQoKSAtIDI2MDsgLy9NYWdpYyBOdW1iZXJcblxuICAgIC8vaGVpZ2h0IGlzIHRoZSB2YWx1ZSB0aGF0IHRoZSBlbnRpcmUgZGV0YWlscyBwYW5lbCBzaG91bGQgbmV2ZXIgZXhjZWVkLlxuICAgIC8vV2l0aGluIHRoZSBwYW5lbCBpdHNlbGYsIHRoZSBpbm5lciBjb250YWluZXIgbmVlZHMgdG8gYWRqdXN0IGl0cyBoZWlnaHQgYmFzZWQgb24gdGhlIGNvbnRlbnRzIG9mIHRoZSBwYW5lbC5cbiAgICAvL1NvbWV0aW1lcywgdGhlcmUgYXJlIHRhYnMsIGFuZCBzb21ldGltZXMgdGhlIHByb2plY3QvZGlzYXN0ZXIgZGVzY3JpcHRpb24gY2FuIGJlIHF1aXRlIGxvbmcuXG4gICAgLy9JbiB0aGVzZSBjYXNlcywgdGhlbiBpbm5lckNvbnRhaW5lciBzaG91bGQgc2hyaW5rIHRvIGZpdCB3aXRoaW4gdGhlIG1heC1oZWlnaHQgb2YgdGhlIG91dGVyIHBhbmVsIChoZWlnaHQpXG5cbiAgICAvL0ZpbmQgdGhlIHRvcCBvZiB0aGUgaW5uZXJDb250YWluZXIsIGFuZCBzdWJ0cmFjdCBmcm9tIHRoZSBtYXggaGVpZ2h0IG9mIHRoZSBwYW5lbC4gIFRoYXQncyB3aGF0IHRoZSBtYXgtaGVpZ2h0IG9mIHRoZSBpbm5lciBwYW5lbCBzaG91bGQgYmVcbiAgICB2YXIgaW5uZXJUb3AgPSAkKCcjRGV0YWlsc1BhbmVsIC5Jbm5lckNvbnRhaW5lcicpLnBvc2l0aW9uKCkudG9wO1xuICAgIHZhciBib3R0b21IZWlnaHQgPSAkKFwiLmRldGFpbHMtYm90dG9tLWJ1dHRvbnMucHVsbC1yaWdodFwiKS5oZWlnaHQoKTtcblxuICAgICQoJyNEZXRhaWxzUGFuZWwgLklubmVyQ29udGFpbmVyICcpLmNzcyhcIm1heC1oZWlnaHRcIiwgaGVpZ2h0IC0gaW5uZXJUb3AgLSBib3R0b21IZWlnaHQpO1xuICB9O1xuXG5cdC8vQ29ubmVjdCB0aGUgd2luZG93IG9ucmVzaXplIGVuZCBldmVudFxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCAkc2NvcGUucmVzaXplRGV0YWlsc1BhbmVsKTtcblxuXG4gIC8vRm9yIEluaXQuXG5cdCRzY29wZS5yZXNpemVEZXRhaWxzUGFuZWwoKTtcblxuICAkc2NvcGUuc2F2ZSA9IGZ1bmN0aW9uIChkYXRhLCBuYW1lKSB7XG4gICAgdmFyIGpzb24gPSBKU09OLnN0cmluZ2lmeShkYXRhLCBudWxsLCAyKTtcbiAgICB2YXIgYmxvYiA9IG5ldyBCbG9iKFtqc29uXSwge3R5cGU6J3RleHQvcGxhaW4nfSk7XG4gICAgdmFyIGRvd25sb2FkTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIHZhciB1cmwgPSAod2luZG93LndlYmtpdFVSTCAhPSBudWxsID8gd2luZG93LndlYmtpdFVSTCA6IHdpbmRvdy5VUkwpO1xuICAgIGRvd25sb2FkTGluay5ocmVmID0gdXJsLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcbiAgICBkb3dubG9hZExpbmsuZG93bmxvYWQgPSBuYW1lIHx8ICdmZWF0dXJlLmdlb2pzb24nO1xuICAgIGRvd25sb2FkTGluay5jbGljaygpO1xuICB9O1xuXG4gICRzY29wZS51cGRhdGVTZWN0b3JMZWdlbmQgPSBmdW5jdGlvbihhbGlhcyxjb2xvcixjb3VudCl7XG4gICAgJHNjb3BlLmRhdGFzZXRUaXRsZSA9IGFsaWFzO1xuICAgICRzY29wZS5kYXRhc2V0Q29sb3IgPSBjb2xvcjtcbiAgICAkc2NvcGUuZGF0YXNldENvdW50ID0gY291bnQ7XG4gIH1cblxufSk7XG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgUnlhbiBXaGl0bGV5XG4gKiAgICAgICBvbiA2LzQvMTQuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnR2VvQW5ndWxhcicpLmNvbnRyb2xsZXIoJ0V4cG9ydEN0cmwnLCBmdW5jdGlvbigkc2NvcGUsICRodHRwLCAkc3RhdGUsICRzdGF0ZVBhcmFtcykge1xuICAgIGNvbnNvbGUubG9nKCdFeHBvcnRDdHJsJyk7XG5cbiAgICAkc2NvcGUuZXhwb3J0ID0gZnVuY3Rpb24gKCkge1xuXG4gICAgfTtcblxuICAgICRzY29wZS5yb3V0ZVVybCA9IHdpbmRvdy5sb2NhdGlvbjtcblxuXG4gICAgLyoqXG4gICAgICogSWYgRXhwb3J0Q3RybCBnZXRzIGNhbGxlZCB0d2ljZSBmb3Igc29tZSByZWFzb24sIHdlIG1pZ2h0XG4gICAgICogaGF2ZSB0aGlzIGNsYXNzIGhhbmdpbmcgYXJvdW5kIGJsb2NraW5nIHRoZSBhcHAuIEV4cG9ydEN0cmxcbiAgICAgKiBkb2VzIGdldCBjYWxsZWQgdHdpY2Ugc29tZXRpbWVzLCBiZWNhdXNlIHRoZSBtb2RhbCBzb21ldGltZXNcbiAgICAgKiBudWRnZXMgdGhlIG1hcCBhbmQgcmVpbnN0YW50aWF0ZXMgdGhlIG1vZGFsIGFnYWluIHZpYSBhIG5ld1xuICAgICAqIHJvdXRlLlxuICAgICAqL1xuICAgICQoJy5tb2RhbC1iYWNrZHJvcCcpLnJlbW92ZSgpO1xuXG4gICAgJCgnI2V4cG9ydE1vZGFsJykubW9kYWwoJ3Nob3cnKTtcblxuICAgICQoJyNleHBvcnRNb2RhbCcpLm9uKCdoaWRkZW4uYnMubW9kYWwnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAkc3RhdGUuZ28oJ21haW4nLCAkc3RhdGVQYXJhbXMpO1xuICAgIH0pO1xuXG5cbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAvL2RlZmF1bHRzXG4gICAgc2VsZi5fTGF5b3V0RWxlbWVudHMgPSB7IFwibWFwXCI6IHRydWUsIFwibGVnZW5kXCI6IHRydWUsIFwib3B0aW9uYWx0aGVtZWRldGFpbHNcIjogZmFsc2UgfTtcbiAgICBzZWxmLl9JbWFnZUZvcm1hdCA9ICdwbmcnO1xuXG4gICAgc2VsZi5faW5pdCA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBzZWxmLl9jb25uZWN0UmFkaW9CdXR0b25PbkNsaWNrcygpO1xuICAgICAgICAkKFwiI2V4ZWN1dGVFeHBvcnRCdXR0b25cIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvL1Nob3cgbG9hZGluZyBnaWYuIEhpZGUgZXhwb3J0IGJ1dHRvblxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBzZWxmLl9leHBvcnRJbWFnZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICBzZWxmLl9zaG93RXhwb3J0QnV0dG9uSGlkZUxvYWRlcigpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBzZWxmLl9zaG93V2FpdGluZ1BhbmVsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBzZWxmLl9zaG93TG9hZGVyKCk7IC8vc2hvdyBrbmlnaHRSaWRlciBpbWFnZSwgaGlkZVxuICAgICAgICAkKFwiI2V4cG9ydE9wdGlvbnNQYW5lbFwiKS5jc3Moe1wiZGlzcGxheVwiOiBcIm5vbmVcIn0pO1xuICAgICAgICAkKFwiI2V4cG9ydFdhaXRpbmdQYW5lbFwiKS5jc3MoeyBcImRpc3BsYXlcIjogXCJibG9ja1wiIH0pO1xuICAgICAgICAkKFwiLmV4cG9ydEdyb3VwVGl0bGUuZXJyb3JcIikuY3NzKHsgXCJkaXNwbGF5XCI6IFwibm9uZVwiIH0pOyAvL0hpZGUgZXJyb3IgbWVzc2FnZSwgaWYgc2hvd25cbiAgICAgICAgJChcIi5pbWFnZU9wZW5CdXR0b25cIikuY3NzKHtcImRpc3BsYXlcIjogXCJub25lXCJ9KTsgLy9oaWRlIG9wZW4gaW1hZ2UgYnV0dG9uXG4gICAgfVxuXG4gICAgc2VsZi5faGlkZVdhaXRpbmdQYW5lbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJChcIiNleHBvcnRXYWl0aW5nUGFuZWxcIikuY3NzKHtcImRpc3BsYXlcIjogXCJub25lXCJ9KTtcbiAgICAgICAgJChcIiNleHBvcnRPcHRpb25zUGFuZWxcIikuY3NzKHtcImRpc3BsYXlcIjogXCJibG9ja1wifSk7XG4gICAgfVxuXG4gICAgc2VsZi5faGlkZUV4cG9ydEJ1dHRvblNob3dMb2FkZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoXCIjZXhlY3V0ZUV4cG9ydEJ1dHRvblwiKS5jc3MoeyBcImRpc3BsYXlcIjogXCJub25lXCIgfSk7XG4gICAgICAgICQoXCIua25pZ2h0UmlkZXJMb2FkZXJcIikuY3NzKHsgXCJkaXNwbGF5XCI6IFwiYmxvY2tcIiB9KTtcbiAgICB9XG5cbiAgICBzZWxmLl9zaG93RXhwb3J0QnV0dG9uSGlkZUxvYWRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJChcIiNleGVjdXRlRXhwb3J0QnV0dG9uXCIpLmNzcyh7XCJkaXNwbGF5XCI6IFwiYmxvY2tcIn0pO1xuICAgICAgICAkKFwiLmtuaWdodFJpZGVyTG9hZGVyXCIpLmNzcyh7XCJkaXNwbGF5XCI6IFwibm9uZVwifSk7XG4gICAgfVxuXG4gICAgc2VsZi5fY29ubmVjdFJhZGlvQnV0dG9uT25DbGlja3MgPSBmdW5jdGlvbiAoKSB7XG5cblxuICAgICAgICAkKFwiI29wdGlvbmFsT3V0cHV0TWFwXCIpLm9uKFwiY2xpY2tcIiwgc2VsZi5fZ2V0TGF5b3V0RWxlbWVudE9uQ2xpY2soJ21hcCcpKTtcbiAgICAgICAgJChcIiNvcHRpb25hbE91dHB1dExlZ2VuZFwiKS5vbihcImNsaWNrXCIsIHNlbGYuX2dldExheW91dEVsZW1lbnRPbkNsaWNrKCdsZWdlbmQnKSk7XG4gICAgICAgICQoXCIjb3B0aW9uYWxUaGVtZURldGFpbHNcIikub24oXCJjbGlja1wiLCBzZWxmLl9nZXRMYXlvdXRFbGVtZW50T25DbGljaygnb3B0aW9uYWx0aGVtZWRldGFpbHMnKSk7XG5cblxuICAgICAgICB2YXIgcG5nUkJOb2RlID0gJChcIiNwbmdJbWFnZUZvcm1hdFwiKTtcbiAgICAgICAgcG5nUkJOb2RlLm9uKFwiY2xpY2tcIiwgc2VsZi5fZ2V0SW1hZ2VCdXR0b25SYWRpb0J1dHRvbk9uQ2xpY2socG5nUkJOb2RlLCAncG5nJykpO1xuXG4gICAgICAgIHZhciBwZGZSQk5vZGUgPSAkKFwiI3BkZkltYWdlRm9ybWF0XCIpO1xuICAgICAgICBwZGZSQk5vZGUub24oXCJjbGlja1wiLCBzZWxmLl9nZXRJbWFnZUJ1dHRvblJhZGlvQnV0dG9uT25DbGljayhwZGZSQk5vZGUsICdwZGYnKSk7XG5cbiAgICAgICAgJChcIiNleHBvcnRDbG9zZVwiKS5vbihcImNsaWNrXCIsIHNlbGYuaGlkZUV4cG9ydE9wdGlvbik7XG5cbiAgICAgICAgJChcIi5raWxsT3BlbkJ1dHRvblwiKS5vbihcImNsaWNrXCIsIHNlbGYuX2hpZGVXYWl0aW5nUGFuZWwpOyAvL3RoZSBkaXNjYXJkIGJ1dHRvblxuXG4gICAgfTtcblxuICAgIHNlbGYuX2dldEltYWdlQnV0dG9uUmFkaW9CdXR0b25PbkNsaWNrID0gZnVuY3Rpb24gKG5vZGUsIGltYWdlRm9ybWF0KSB7XG5cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHNlbGYuX0ltYWdlRm9ybWF0ID0gaW1hZ2VGb3JtYXQ7XG4gICAgICAgICAgICBzZWxmLl9yZW1vdmVBbGxTZWxlY3RlZFJhZGlvQnV0dG9ucyhcImV4cG9ydE9wdGlvbnNDb250YWluZXJcIik7XG4gICAgICAgICAgICBub2RlLmFkZENsYXNzKFwiZXhwb3J0UmFkaW9CdXR0b25TZWxlY3RlZFwiKTtcbiAgICAgICAgfTtcbiAgICB9O1xuXG4gICAgc2VsZi5fZ2V0TGF5b3V0RWxlbWVudE9uQ2xpY2sgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy9Ub2dnbGUgQWN0aXZlIFN0YXRlXG4gICAgICAgICAgICBzZWxmLl9MYXlvdXRFbGVtZW50c1tlbGVtZW50XSA9ICFzZWxmLl9MYXlvdXRFbGVtZW50c1tlbGVtZW50XTtcblxuICAgICAgICAgICAgLy8kKFwiI2V4cG9ydE9wdGlvbnMgLmNoZWNrYm94XCIpLnJlbW92ZUNsYXNzKFwiY2hlY2tlZFwiKTtcbiAgICAgICAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ2NoZWNrZWQnKTtcbiAgICAgICAgfTtcbiAgICB9O1xuXG4gICAgc2VsZi5fcmVtb3ZlQWxsU2VsZWN0ZWRSYWRpb0J1dHRvbnMgPSBmdW5jdGlvbiAocGFyZW50RGl2SUQpIHtcbiAgICAgICAgJC5lYWNoKCQoXCIjXCIgKyBwYXJlbnREaXZJRCArIFwiIC5leHBvcnRSYWRpb0J1dHRvblNlbGVjdGVkXCIpLCBmdW5jdGlvbiAoaWR4LCBub2RlKSB7XG4gICAgICAgICAgICAkKG5vZGUpLnJlbW92ZUNsYXNzKFwiZXhwb3J0UmFkaW9CdXR0b25TZWxlY3RlZFwiKTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIHNlbGYuX2hpZGVMb2FkZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoXCIua25pZ2h0UmlkZXJMb2FkZXJcIikuY3NzKHtcImRpc3BsYXlcIjogXCJub25lXCJ9KTtcbiAgICB9XG5cbiAgICBzZWxmLl9zaG93TG9hZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAkKFwiLmtuaWdodFJpZGVyTG9hZGVyXCIpLmNzcyh7XCJkaXNwbGF5XCI6IFwiYmxvY2tcIn0pO1xuICAgIH1cblxuICAgIHRoaXMuc2hvd0V4cG9ydE9wdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJChcIiNleHBvcnRPcHRpb25zXCIpLmNzcyh7IFwiZGlzcGxheVwiOiBcImJsb2NrXCIgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5oaWRlRXhwb3J0T3B0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAkKFwiI2V4cG9ydE9wdGlvbnNcIikuY3NzKHsgXCJkaXNwbGF5XCI6IFwibm9uZVwiIH0pO1xuICAgIH1cblxuICAgIHNlbGYuX2tpbGxPcGVuSW1hZ2VCdXR0b24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vSGlkZSAnb3BlbiBpbWFnZScgYnV0dG9uIGFuZCBzaG93IGV4cG9ydCBidXR0b24uXG4gICAgICAgIHNlbGYuX3Nob3dFeHBvcnRCdXR0b25IaWRlTG9hZGVyKCk7XG4gICAgICAgICQoXCIuaW1hZ2VPcGVuQnV0dG9uXCIpLmNzcyh7XCJkaXNwbGF5XCI6IFwibm9uZVwifSk7XG4gICAgfVxuXG4gICAgc2VsZi5fb25FcnJvciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc2VsZi5faGlkZVdhaXRpbmdQYW5lbCgpO1xuICAgICAgICAvL0Rpc3BsYXkgZXJyb3IgbWVzc2FnZS5cbiAgICAgICAgJChcIi5leHBvcnRHcm91cFRpdGxlLmVycm9yXCIpLnJlcGxhY2UoXCI8c3Bhbj5UaGVyZSB3YXMgYW4gZXJyb3IgZXhwb3J0aW5nIHRoZSBpbWFnZS48L3NwYW4+XCIpO1xuICAgICAgICAkKFwiLmV4cG9ydEdyb3VwVGl0bGUuZXJyb3JcIikuY3NzKHtcImRpc3BsYXlcIjogXCJibG9ja1wifSk7XG4gICAgfVxuXG4gICAgc2VsZi5fZXhwb3J0SW1hZ2UgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgdmFyIHRpdGxlSFRNTCA9IFwiVGl0bGVcIjtcblxuICAgICAgICAvL3ZhciBsZWdlbmRzSFRNTCA9ICQoJzxkaXY+JykuYXBwZW5kKCQoXCIjTGF5ZXJMaXN0V3JhcHBlclwiKS5jbG9uZSgpKS5odG1sKCkucmVwbGFjZSgvXFxcIi9nLCAnXFxcXFwiJyk7XG5cblxuICAgICAgICB2YXIgbGF5b3V0V2lkdGggPSAkKFwiYm9keVwiKS53aWR0aCgpO1xuICAgICAgICB2YXIgbWFwSGVpZ2h0ID0gJChcIiNNYXBDdHJsXCIpLmhlaWdodCgpO1xuICAgICAgICB2YXIgbWFwV2lkdGggPSAkKFwiI01hcEN0cmxcIikud2lkdGgoKTtcblxuICAgICAgICB2YXIgY29kZWJsb2NrID0gXCJcIjtcbiAgICAgICAgLy9BZGp1c3QgYm9keSB3aWR0aFxuICAgICAgICBjb2RlYmxvY2sgKz0gJyQoXCJib2R5XCIpLndpZHRoKCcgKyAobWFwV2lkdGggKyAyMCkgKyAnKTsnO1xuXG4gICAgICAgIC8vc2hvdyBsb2FkZXJcbiAgICAgICAgc2VsZi5fc2hvd1dhaXRpbmdQYW5lbCgpO1xuXG4gICAgICAgIC8vZm9ybWF0dGluZ1xuICAgICAgICAvL2NvZGVibG9jayA9IGNvZGVibG9jay5yZXBsYWNlKC8oXFxyXFxufFxcbnxcXHIpL2dtLCBcIlwiKTsgIC8vcmVtb3ZlIGxpbmUgYnJlYWtzXG5cbiAgICAgICAgdmFyIHByaW50UG9zdEFyZ3MgPSB7XG4gICAgICAgICAgICAvL3VybDogJ2h0dHA6Ly9nZW8ucmVkY3Jvc3MuY29tL21hcGZvbGlvL3ByaW50Lmh0bScsXG4gICAgICAgICAgICB1cmw6ICRzY29wZS5yb3V0ZVVybC5ocmVmLnJlcGxhY2UoXCJtYXBmb2xpby8jXCIsIFwibWFwZm9saW8vcHJpbnQuaHRtbCNcIikucmVwbGFjZShcIm1hcGZvbGlvL2luZGV4Lmh0bWwjXCIsIFwibWFwZm9saW8vcHJpbnQuaHRtbCNcIikucmVwbGFjZShcIi9leHBvcnRcIiwgXCJcIikucmVwbGFjZShcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMVwiLCBcImh0dHBzOi8vZ2VvLnJlZGNyb3NzLm9yZ1wiKSwgLy9Td2FwIHRoZSBjdXJyZW50IHVybCBmb3IgdGhlIHByaW50IHVybFxuICAgICAgICAgICAgaW1hZ2Vmb3JtYXQ6IHNlbGYuX0ltYWdlRm9ybWF0IHx8ICdwbmcnLFxuICAgICAgICAgICAgZm9ybWF0OiAnanNvbicsXG4gICAgICAgICAgICAvL2NvZGVibG9jazogY29kZWJsb2NrLFxuICAgICAgICAgICAgdmlld3BvcnRoZWlnaHQ6IG1hcEhlaWdodCxcbiAgICAgICAgICAgIHZpZXdwb3J0d2lkdGg6IGxheW91dFdpZHRoLFxuICAgICAgICAgICAgZGVsYXk6IDUwMDAgLy90aW1lIHRvIHdhaXQgaW4gbXNcbiAgICAgICAgfTtcblxuXG4gICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcbiAgICAgICAgICAgIHVybDogJ2h0dHA6Ly9wcmludC5zcGF0aWFsZGV2LmNvbScsXG4gICAgICAgICAgICBkYXRhOiBwcmludFBvc3RBcmdzLFxuICAgICAgICAgICAgc3VjY2Vzczogc2VsZi5fb25JbWFnZUV4cG9ydCxcbiAgICAgICAgICAgIGVycm9yOiBzZWxmLl9vbkVycm9yXG4gICAgICAgIH0pO1xuXG4gICAgfTtcblxuICAgIHNlbGYuX29uSW1hZ2VFeHBvcnQgPSBmdW5jdGlvbiAocmVzdWx0KSB7XG5cbiAgICAgICAgdmFyIGV4cG9ydEltYWdlVVJMID0gcmVzdWx0LmltYWdlO1xuXG4gICAgICAgIC8vaW5zdGVhZCwgc2hvdyBhIGJ1dHRvbi9oeXBlcmxpbmsgZm9yIHRoZSB1c2VyIHRvIG9wZW4gdGhlIGltYWdlLlxuICAgICAgICAkKFwiLmltYWdlT3BlbkJ1dHRvbiBhXCIpLmF0dHIoXCJocmVmXCIsIGV4cG9ydEltYWdlVVJMKTtcbiAgICAgICAgJChcIi5pbWFnZU9wZW5CdXR0b25cIikuY3NzKHtcImRpc3BsYXlcIjogXCJibG9ja1wifSk7XG5cbiAgICAgICAgLy9IaWRlIGxvYWRlclxuICAgICAgICBzZWxmLl9oaWRlTG9hZGVyKCk7XG4gICAgfTtcblxuICAgIHNlbGYuX2luaXQoKTtcbn0pO1xuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IE5pY2hvbGFzIEhhbGxhaGFuIDxuaGFsbGFoYW5Ac3BhdGlhbGRldi5jb20+XG4gKiAgICAgICBvbiAzLzI3LzE0LlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ0dlb0FuZ3VsYXInKS5jb250cm9sbGVyKCdGaWx0ZXJzQ3RybCcsIGZ1bmN0aW9uICgkc2NvcGUsICRodHRwLCAkc3RhdGUsICRzdGF0ZVBhcmFtcywgJHRpbWVvdXQpIHtcbiAgJHNjb3BlLmZpbHRlck1vZGUgPSBcInByb2plY3RcIjsgLy9XaGljaCB0aGVtZSBhcmUgd2UgZmlsdGVyaW5nP1xuICAkc2NvcGUucGFyYW1zID0gJHN0YXRlUGFyYW1zO1xuICAkc2NvcGUuc2VhcmNoVGV4dCA9ICcnO1xuICAkc2NvcGUubmF2VGFiID0gJ3NlY3RvcnMnO1xuICAkc2NvcGUuc2VjdG9ycyA9IFtdO1xuICAkc2NvcGUuc2VsZWN0ZWQgPSBmYWxzZTtcbiAgJHNjb3BlLmRpc2FzdGVyVHlwZXMgPSBbXTtcbiAgJHNjb3BlLnN0YXR1cyA9IFtdO1xuICAkc2NvcGUuYnVzaW5lc3NVbml0cyA9IFtdO1xuICAkc2NvcGUuZGlzYXN0ZXJUeXBlc2NhdGVnb3J5ID0ge307XG4gIGRlYnVnLmJ1ZGdldCA9ICRzY29wZS5idWRnZXQgPSB7XG4gICAgc2xpZGVyOiBbMjAwMCwgODAwMF0sXG4gICAgbWluOiAwLFxuICAgIG1lYW46IDUwMDAsXG4gICAgbWF4OiAxMDAwMDBcbiAgfTtcblxuICAkdGltZW91dChmdW5jdGlvbigpe1xuICAgIC8vIHNpbmNlIHdlIHJlbW92ZWQgYWN0aXZlIHByb2plY3RzIGZyb20gYXBpLCB3ZSd2ZSBnb3QgdG8gdHVybiBvbiBhY3RpdmUgZmlsdGVyIG9uIHBhZ2UgbG9hZFxuXG4gICAgaWYoISRzdGF0ZVBhcmFtcy5maWx0ZXJzIHx8ICRzdGF0ZVBhcmFtcy5maWx0ZXJzID09IFwibnVsbFwiKSB7XG4gICAgICBzZXREZWZhdWx0UHJvamVjdFN0YXR1cygpXG4gICAgfVxuICB9KTtcblxuICBmdW5jdGlvbiBzZXREZWZhdWx0UHJvamVjdFN0YXR1cygpe1xuICAgICRzY29wZS5zdGF0dXMuZm9yRWFjaChmdW5jdGlvbihzKXtcbiAgICAgIGlmKHMubmFtZSA9PT0gXCJBY3RpdmVcIil7XG4gICAgICAgIHMuY2hlY2tlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gICAgJHNjb3BlLnN0YXR1c0ZpbHRlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBjaGVja2JveCBpbmZvIHRoYXQgd2FzIGdlbmVyYXRlZCBieSB0aGUgU3VjY3VidXMuXG4gICAqL1xuICAkaHR0cC5nZXQoJ3N1Y2N1YnVzX2dpdGlnbm9yZS9zZi1wcm9qZWN0LWZpbHRlci1jaGVja2JveGVzLmpzb24nLCB7Y2FjaGU6IHRydWV9KS5zdWNjZXNzKGZ1bmN0aW9uIChkYXRhLCBzdGF0dXMpIHtcbiAgICBhbmd1bGFyLmV4dGVuZCgkc2NvcGUsIGRhdGEpO1xuICAgIGRlYnVnLmZpbHRlcnNTY29wZSA9ICRzY29wZTtcbiAgfSkuZXJyb3IoZnVuY3Rpb24gKCkge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJVbmFibGUgdG8gZmV0Y2ggcHJvamVjdCBmaWx0ZXIgbWV0YSBkYXRhXCIpO1xuICB9KTtcblxuICAkaHR0cC5nZXQoJ3N1Y2N1YnVzX2dpdGlnbm9yZS9zZi1kaXNhc3Rlci1maWx0ZXItY2hlY2tib3hlcy5qc29uJywge2NhY2hlOiB0cnVlfSkuc3VjY2VzcyhmdW5jdGlvbiAoZGF0YSwgc3RhdHVzKSB7XG4gICAgYW5ndWxhci5leHRlbmQoJHNjb3BlLCBkYXRhKTtcbiAgICBkZWJ1Zy5maWx0ZXJzU2NvcGUgPSAkc2NvcGU7XG4gICAgJHNjb3BlLmNhdGVnb3JpemVEaXNhc3RlckZpbHRlcnMoKTtcbiAgICAvLyRzY29wZS5kZWZhdWx0U3RhdHVzKCk7IC8vIGNoZWNrIE1vbml0b3JpbmcgYW5kIEFjdGl2ZSBpbiBTdGF0dXMgb2JqZWN0XG4gIH0pLmVycm9yKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiVW5hYmxlIHRvIGZldGNoIGRpc2FzdGVyIGZpbHRlciBtZXRhIGRhdGFcIik7XG4gIH0pO1xuXG4gICRodHRwLmdldCgnc3VjY3VidXNfZ2l0aWdub3JlL3NmLW9iamVjdC1maWVsZC1oYXNoLmpzb24nLCB7Y2FjaGVkOiB0cnVlfSkuc3VjY2VzcyhmdW5jdGlvbiAoc2ZGaWVsZEhhc2gpIHtcbiAgICAkc2NvcGUuc2ZGaWVsZEhhc2ggPSBzZkZpZWxkSGFzaDtcbiAgICAkc2NvcGUuYnVzaW5lc3NVbml0cyA9IHNmRmllbGRIYXNoW1wiUHJvamVjdF9fY1wiXVtcImJ1c2luZXNzX3VuaXRfX2NcIl1bXCJwaWNrbGlzdFZhbHVlc1wiXTtcbiAgICAkc2NvcGUucGhhc2VfX2MgPSBzZkZpZWxkSGFzaFtcIlByb2plY3RfX2NcIl1bXCJwaGFzZV9fY1wiXVtcInBpY2tsaXN0VmFsdWVzXCJdO1xuICAgIC8vIGFkZCBkZXNjcmlwdGlvbiAmIGNvbWJpbmUgcGhhc2UgMy80LzVcbiAgICAkc2NvcGUucGhhc2VfX2MuZm9yRWFjaChmdW5jdGlvbihwaGFzZSl7XG4gICAgICBzZkZpZWxkSGFzaFtcIlByb2plY3RfX2NcIl1bXCJwaGFzZV9fY1wiXS5pbmxpbmVIZWxwVGV4dC5zcGxpdCgvXFxuLykuZm9yRWFjaChmdW5jdGlvbihkZXNjKXtcbiAgICAgICAgaWYoZGVzYy5pbmRleE9mKHBoYXNlLnZhbHVlKSAhPT0gLTEpe1xuICAgICAgICAgIHBoYXNlLmRlc2NyaXB0aW9uID0gZGVzY1xuICAgICAgICB9IGVsc2UgaWYgKHBoYXNlLmxhYmVsID09IFwiMy80LzVcIiAmJiAoZGVzYy5pbmRleE9mKFwiM1wiKSAhPT0gLTEgfHwgZGVzYy5pbmRleE9mKFwiNFwiKSAhPT0gLTEgfHwgZGVzYy5pbmRleE9mKFwiNVwiKSAhPT0gLTEpKXtcbiAgICAgICAgICBwaGFzZS5kZXNjcmlwdGlvbiAgPSAodHlwZW9mIHBoYXNlLmRlc2NyaXB0aW9uID09PSBcInVuZGVmaW5lZFwiKSA/IGRlc2MgOiBwaGFzZS5kZXNjcmlwdGlvbiArIFwiIC0gXCIgKyBkZXNjO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBnZXRCdXNpbmVzc1VuaXRUeXBlcygpO1xuICB9KS5lcnJvcihmdW5jdGlvbiAoKSB7XG4gICAgY29uc29sZS5lcnJvcihcIlVuYWJsZSB0byBmZXRjaCBvYmplY3QgZmllbGQgbWV0YSBkYXRhXCIpO1xuICB9KTtcblxuICAvLyB0YWtlIGFycmF5IG9mIGRpc2FzdGVyIHR5cGVzIGFuZCBjcmVhdGUgYSBuZXcgb2JqZWN0IHRoYXQgc2VwYXJhdGVzIGJ5IGNhdGVnb3J5XG4gICRzY29wZS5jYXRlZ29yaXplRGlzYXN0ZXJGaWx0ZXJzID0gZnVuY3Rpb24gKCkge1xuICAgICRzY29wZS5zZWFyY2hMaXN0ID0gW107XG4gICAgdmFyIGR0ID0gJHNjb3BlLmRpc2FzdGVyVHlwZXM7XG4gICAgdmFyIHAgPSBudWxsO1xuICAgIHZhciBhcnIgPSBbXTtcbiAgICB2YXIgY1R5cGVzID0ge307XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkdC5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGR0W2ldLm5hbWUuaW5kZXhPZignLS0tJykgIT09IC0xKSB7XG4gICAgICAgIGFyciA9IFtdO1xuICAgICAgICBjVHlwZXNbZHRbaV0ubmFtZS5yZXBsYWNlKFwiLS0tIFwiLCBcIlwiKS5yZXBsYWNlKFwiIC0tLVwiLCBcIlwiKV0gPSB7fTtcbiAgICAgICAgcCA9IGR0W2ldLm5hbWUucmVwbGFjZShcIi0tLSBcIiwgXCJcIikucmVwbGFjZShcIiAtLS1cIiwgXCJcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkc2NvcGUuc2VhcmNoTGlzdC5wdXNoKGR0W2ldKTtcbiAgICAgIH1cbiAgICAgIGlmIChkdFtpXS5uYW1lLmluZGV4T2YoJy0tLScpID09IC0xKSB7XG4gICAgICAgIGFyci5wdXNoKGR0W2ldKTtcbiAgICAgICAgY1R5cGVzW3BdID0gYXJyO1xuICAgICAgfVxuICAgIH1cbiAgICAkc2NvcGUuZGlzYXN0ZXJUeXBlc2NhdGVnb3J5ID0gY1R5cGVzO1xuICB9O1xuXG4gICRzY29wZS5jbG9zZVBhbmVscyA9IGZ1bmN0aW9uICgpIHtcbiAgICBmb3IgKHZhciBwYXJhbSBpbiAkc3RhdGVQYXJhbXMpIHtcbiAgICAgIGlmICgkc3RhdGVQYXJhbXNbcGFyYW1dID09PSAnb3BlbicpIHtcbiAgICAgICAgJHN0YXRlUGFyYW1zW3BhcmFtXSA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gICRzY29wZS4kb24oJ3RoZW1lLXVwZGF0ZScsIGZ1bmN0aW9uICgpIHtcblxuICAgIGlmICgkc3RhdGVQYXJhbXMudGhlbWUuaW5kZXhPZignZGlzYXN0ZXInKSE9PS0xKSB7XG4gICAgICAkc2NvcGUubmF2VGFiID0gJ2Rpc2FzdGVyVHlwZSc7XG4gICAgfTtcblxuICAgIGlmICgkc3RhdGVQYXJhbXMudGhlbWUuaW5kZXhPZigncHJvamVjdCcpIT09IC0xKSB7XG4gICAgICAkc2NvcGUubmF2VGFiID0gJ3NlY3RvcnMnO1xuICAgIH07XG5cbiAgICBpZiAoJHN0YXRlUGFyYW1zLnRoZW1lLmluZGV4T2YoJ2Rpc2FzdGVyJykgIT09IC0xICYmICgkc3RhdGVQYXJhbXMuZmlsdGVycykpIHtcbiAgICAgIGRlY29kZURpc2FzdGVyRmlsdGVyc1VSTCgpO1xuICAgIH1cblxuICAgIGlmICgkc3RhdGVQYXJhbXMudGhlbWUuaW5kZXhPZigncHJvamVjdCcpICE9PSAtMSAmJiAoJHN0YXRlUGFyYW1zLmZpbHRlcnMpKSB7XG4gICAgICBkZWNvZGVQcm9qZWN0RmlsdGVyc1VSTCgpO1xuICAgIH1cbiAgfSk7XG5cbiAgdmFyIGdldEJ1c2luZXNzVW5pdFR5cGVzID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBCdXNpbmVzc1VuaXRUeXBlcyA9IFtdO1xuXG4gICAgJHNjb3BlLmJ1c2luZXNzVW5pdHMuZm9yRWFjaChmdW5jdGlvbiAodmFsLCBpZHgpIHtcbiAgICAgIEJ1c2luZXNzVW5pdFR5cGVzLnB1c2godmFsKTtcbiAgICAgIEJ1c2luZXNzVW5pdFR5cGVzW2lkeF0uY2hlY2tlZCA9IGZhbHNlO1xuICAgIH0pO1xuXG4gICAgJHNjb3BlLkJ1c2luZXNzVW5pdFR5cGVzID0gQnVzaW5lc3NVbml0VHlwZXM7XG4gIH07XG5cbiAgLy8gdGhlIHR3byBkZWNvZGUgbWV0aG9kcyByZWFkIHRoZSB1cmwgYW5kIHVwZGF0ZSB0aGUgZmlsdGVyIHBhbmVsXG4gIC8vIGNoZWNrYm94ZXMgKGRpc2FzdGVydHlwZSwgcHJvamVjdHR5cGUsIGJ1c2luZXNzdHlwZSAmIHN0YXR1cykgYWNjb3JkaW5nbHlcblxuICB2YXIgZGVjb2RlRGlzYXN0ZXJGaWx0ZXJzVVJMID0gZnVuY3Rpb24gKCkge1xuICAgIC8vdmFyIHN0ciA9IGRlY29kZVVSSUNvbXBvbmVudChlbmNvZGVVUklDb21wb25lbnQoJHN0YXRlUGFyYW1zLmZpbHRlcnMpKTtcbiAgICB2YXIgc3RyID0gZGVjb2RlVVJJQ29tcG9uZW50KGVuY29kZVVSSUNvbXBvbmVudCgkc3RhdGVQYXJhbXMuZmlsdGVycykpO1xuXG4gICAgdmFyIGluZGV4ID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChzdHJbaV0gPT09IFwiJVwiKSBpbmRleC5wdXNoKGkpO1xuICAgIH1cblxuICAgIHZhciBhcnIgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGluZGV4Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBhcnIucHVzaChzdHIuc3Vic3RyaW5nKGluZGV4W2ldICsgMSwgaW5kZXhbaSArIDFdKSk7XG4gICAgICBpID0gaSArIDE7XG4gICAgfVxuXG4gICAgaWYgKCRzdGF0ZVBhcmFtcy5maWx0ZXJzICE9PSBudWxsICYmICRzdGF0ZVBhcmFtcy5maWx0ZXJzICE9PSBcIlwiXG4gICAgICAmJiAkc3RhdGVQYXJhbXMuZmlsdGVycyAhPT0gXCJudWxsXCIgJiYgdHlwZW9mICRzdGF0ZVBhcmFtcy5maWx0ZXJzICE9PSAndW5kZWZpbmVkJykge1xuXG4gICAgICB2YXIgZGlzYXN0ZXJzID0gJHNjb3BlLmRpc2FzdGVyVHlwZXM7XG4gICAgICB2YXIgc3RhdHVzZXMgPSAkc2NvcGUuZGlzYXN0ZXJTdGF0dXM7XG5cbiAgICAgICRzY29wZS5zZWN0b3JDbGF1c2UgPSBudWxsO1xuICAgICAgdmFyIGZpcnN0ID0gdHJ1ZTtcbiAgICAgIGZvciAodmFyIHMgPSAwOyBzIDwgYXJyLmxlbmd0aDsgcysrKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBkaXNhc3RlcnMubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgICAgICAgICB2YXIgZGlzYXN0ZXIgPSBkaXNhc3RlcnNbaV07XG4gICAgICAgICAgaWYgKGFycltzXS5pbmRleE9mKGRpc2FzdGVyLm5hbWUpICE9PSAtMSkge1xuICAgICAgICAgICAgaWYgKGZpcnN0KSB7XG4gICAgICAgICAgICAgIGRpc2FzdGVyLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAkc2NvcGUuc2VjdG9yQ2xhdXNlID0gXCJkaXNhc3Rlcl90eXBlX19jIExJS0UgJyVcIiArIGRpc2FzdGVyLm5hbWUgKyBcIiUnIFwiO1xuICAgICAgICAgICAgICBmaXJzdCA9IGZhbHNlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZGlzYXN0ZXIuY2hlY2tlZCA9IHRydWU7XG4gICAgICAgICAgICAgICRzY29wZS5zZWN0b3JDbGF1c2UgKz0gXCJPUiBkaXNhc3Rlcl90eXBlX19jIExJS0UgJyVcIiArIGRpc2FzdGVyLm5hbWUgKyBcIiUnIFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgkc3RhdGVQYXJhbXMuZmlsdGVycy5pbmRleE9mKCdpcm9jX3N0YXR1c19fYycpICE9PSAtMSkge1xuICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBzdGF0dXNlcy5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICAgICAgICAgICAgdmFyIHN0YXR1cyA9IHN0YXR1c2VzW2ldO1xuICAgICAgICAgICAgaWYgKGFycltzXS5pbmRleE9mKHN0YXR1cy5uYW1lKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgc3RhdHVzLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAkc2NvcGUuZGlzYXN0ZXJTdGF0dXNGaWx0ZXIoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAkc2NvcGUuY2xlYXJEaXNhc3RlclR5cGVGaWx0ZXIoKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIGRlY29kZVByb2plY3RGaWx0ZXJzVVJMID0gZnVuY3Rpb24gKCkge1xuICAgIC8vdmFyIHN0ciA9IGRlY29kZVVSSUNvbXBvbmVudChlbmNvZGVVUklDb21wb25lbnQoJHN0YXRlUGFyYW1zLmZpbHRlcnMpKTtcbiAgICB2YXIgc3RyID0gZGVjb2RlVVJJQ29tcG9uZW50KGVuY29kZVVSSUNvbXBvbmVudCgkc3RhdGVQYXJhbXMuZmlsdGVycykpO1xuXG4gICAgdmFyIGluZGV4ID0gW107XG5cbiAgICAvL2xvb3AgdGhyb3VnaCBzdHJpbmcgYW5kIHJlbW92ZSAnJSdcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHN0cltpXSA9PT0gXCIlXCIpIGluZGV4LnB1c2goaSk7XG4gICAgfVxuXG4gICAgdmFyIGFyciA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaW5kZXgubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFyci5wdXNoKHN0ci5zdWJzdHJpbmcoaW5kZXhbaV0gKyAxLCBpbmRleFtpICsgMV0pKTtcbiAgICAgIGkgPSBpICsgMTtcbiAgICB9XG5cbiAgICBpZiAoJHN0YXRlUGFyYW1zLmZpbHRlcnMgIT09IG51bGwgJiYgJHN0YXRlUGFyYW1zLmZpbHRlcnMgIT09IFwiXCJcbiAgICAgICYmICRzdGF0ZVBhcmFtcy5maWx0ZXJzICE9PSBcIm51bGxcIiAmJiB0eXBlb2YgJHN0YXRlUGFyYW1zLmZpbHRlcnMgIT09ICd1bmRlZmluZWQnKSB7XG5cbiAgICAgIHZhciBzZWN0b3JzID0gJHNjb3BlLnNlY3RvcnM7XG4gICAgICAkc2NvcGUuc2VjdG9yQ2xhdXNlID0gbnVsbDtcbiAgICAgIHZhciBidW5pdHMgPSAkc2NvcGUuQnVzaW5lc3NVbml0VHlwZXM7XG4gICAgICB2YXIgYnVuaXQgPSBidW5pdHNbaV07XG5cblxuICAgICAgdmFyIGZpcnN0ID0gdHJ1ZTtcbiAgICAgIGZvciAodmFyIHMgPSAwOyBzIDwgYXJyLmxlbmd0aDsgcysrKSB7XG4gICAgICAgIGlmICgkc3RhdGVQYXJhbXMuZmlsdGVycy5pbmRleE9mKCdzZWN0b3JfX2MnKSAhPT0gLTEpe1xuICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBzZWN0b3JzLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICAgICAgICB2YXIgc2VjdG9yID0gc2VjdG9yc1tpXTtcbiAgICAgICAgICAgIGlmIChhcnJbc10gPT0gc2VjdG9yLm5hbWUpIHtcbiAgICAgICAgICAgICAgaWYgKGZpcnN0KSB7XG4gICAgICAgICAgICAgICAgc2VjdG9yLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICRzY29wZS5zZWN0b3JDbGF1c2UgPSBcInNlY3Rvcl9fYyBMSUtFICclXCIgKyBzZWN0b3IubmFtZSArIFwiJScgXCI7XG4gICAgICAgICAgICAgICAgZmlyc3QgPSBmYWxzZTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzZWN0b3IuY2hlY2tlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgJHNjb3BlLnNlY3RvckNsYXVzZSA9IFwic2VjdG9yX19jIExJS0UgJyVcIiArIHNlY3Rvci5uYW1lICsgXCIlJyBcIjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgICAgIGlmICgkc3RhdGVQYXJhbXMuZmlsdGVycy5pbmRleE9mKCdidXNpbmVzc191bml0X19jJykgIT09IC0xKSB7XG4gICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGJ1bml0cy5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICAgICAgICAgICAgaWYgKGFycltzXS5pbmRleE9mKGJ1bml0LmxhYmVsKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgYnVuaXQuY2hlY2tlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAvL3VuY2hlY2sgYWxsIGZpbHRlcnNcbiAgICAgICRzY29wZS5jbGVhckFsbEZpbHRlcnMoKTtcbiAgICB9XG4gIH07XG5cblxuICAkc2NvcGUuJG9uKCdmaWx0ZXJzLXVwZGF0ZScsIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoJHN0YXRlUGFyYW1zLnRoZW1lLmluZGV4T2YoJ2Rpc2FzdGVyJykgIT09IC0xKSBkZWNvZGVEaXNhc3RlckZpbHRlcnNVUkwoKTtcbiAgICBpZiAoJHN0YXRlUGFyYW1zLnRoZW1lID09ICdwcm9qZWN0JykgZGVjb2RlUHJvamVjdEZpbHRlcnNVUkwoKTtcbiAgfSk7XG5cbiAgLyoqXG4gICAqIEdldCBidWRnZXQgc3RhdHMgZnJvbSBDaHViYnMgLSBkeW5hbWljIGZyb20gUG9zdEdJUy5cbiAgICovXG4gICRodHRwLmdldChjb25maWcuY2h1YmJzUGF0aCgnc2VydmljZXMvY3VzdG9tL2N1c3RvbV9vcGVyYXRpb24/bmFtZT1wcm9qZWN0dG90YWxidWRnZXQmZm9ybWF0PWpzb24nKSwge2NhY2hlOiB0cnVlfSkuc3VjY2VzcyhmdW5jdGlvbiAoZGF0YSwgc3RhdHVzKSB7XG4gICAgaWYgKGRhdGEubGVuZ3RoID4gMCkge1xuICAgICAgJHNjb3BlLmJ1ZGdldC5taW4gPSBkYXRhWzBdLm1pbjtcbiAgICAgICRzY29wZS5idWRnZXQubWVhbiA9IGRhdGFbMF0uYXZnO1xuICAgICAgJHNjb3BlLmJ1ZGdldC5tYXggPSBkYXRhWzBdLm1heDtcbiAgICAgICRzY29wZS5idWRnZXQuc2xpZGVyID0gW2RhdGFbMF0ubWluLCBkYXRhWzBdLm1heF07XG4gICAgfVxuICB9KS5lcnJvcihmdW5jdGlvbiAoKSB7XG4gICAgY29uc29sZS5lcnJvcihcIlVuYWJsZSB0byBmZXRjaCBUb3RhbCBCdWRnZXQgTWluLCBNZWFuLCBNYXhcIik7XG4gIH0pO1xuXG4gICRzY29wZS5kYXRlRmlsdGVycyA9IFtcbiAgICB7XG4gICAgICBuYW1lOiAnU3RhcnQgRGF0ZScsXG4gICAgICByYWRpbzogJ29uJyxcbiAgICAgIGVtcHR5OiB0cnVlLFxuICAgICAgb3BlbmVkOiBmYWxzZVxuICAgIH0sIHtcbiAgICAgIG5hbWU6ICdFbmQgRGF0ZScsXG4gICAgICByYWRpbzogJ29uJyxcbiAgICAgIGVtcHR5OiB0cnVlLFxuICAgICAgb3BlbmVkOiBmYWxzZVxuICAgIH0sIHtcbiAgICAgIG5hbWU6ICdDcmVhdGUgRGF0ZScsXG4gICAgICByYWRpbzogJ29uJyxcbiAgICAgIGVtcHR5OiB0cnVlLFxuICAgICAgb3BlbmVkOiBmYWxzZVxuICAgIH0sIHtcbiAgICAgIG5hbWU6ICdMYXN0IE1vZGlmaWVkJyxcbiAgICAgIHJhZGlvOiAnb24nLFxuICAgICAgZW1wdHk6IHRydWUsXG4gICAgICBvcGVuZWQ6IGZhbHNlXG4gICAgfVxuICBdO1xuXG4gICRzY29wZS50b2dnbGVEYXRlID0gZnVuY3Rpb24gKCRldmVudCwgZGF0ZUZpbHRlcikge1xuICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgIGRhdGVGaWx0ZXIub3BlbmVkID0gIWRhdGVGaWx0ZXIub3BlbmVkO1xuICB9O1xuXG4gICRzY29wZS5zZWN0b3JzRmlsdGVyID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWN0b3JzID0gJHNjb3BlLnNlY3RvcnM7XG4gICAgJHNjb3BlLnNlY3RvckNsYXVzZSA9IG51bGw7XG4gICAgdmFyIGZpcnN0ID0gdHJ1ZTtcbiAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gc2VjdG9ycy5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICAgICAgdmFyIHNlY3RvciA9IHNlY3RvcnNbaV07XG4gICAgICBpZiAoc2VjdG9yLmNoZWNrZWQpIHtcbiAgICAgICAgaWYgKGZpcnN0KSB7XG4gICAgICAgICAgJHNjb3BlLnNlY3RvckNsYXVzZSA9IFwic2VjdG9yX19jIExJS0UgJyVcIiArIHNlY3Rvci5uYW1lICsgXCIlJyBcIjtcbiAgICAgICAgICBmaXJzdCA9IGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICRzY29wZS5zZWN0b3JDbGF1c2UgKz0gXCJPUiBzZWN0b3JfX2MgTElLRSAnJVwiICsgc2VjdG9yLm5hbWUgKyBcIiUnIFwiO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgICRzY29wZS5jb21wb3NlV2hlcmVDbGF1c2UoKTtcbiAgfTtcblxuICAkc2NvcGUuYnVzaW5lc3NVbml0c0ZpbHRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgYnVuaXRzID0gJHNjb3BlLkJ1c2luZXNzVW5pdFR5cGVzO1xuICAgICRzY29wZS5idXNpbmVzc1VuaXRzQ2xhdXNlID0gbnVsbDtcbiAgICB2YXIgZmlyc3QgPSB0cnVlO1xuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBidW5pdHMubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgICAgIHZhciBidW5pdCA9IGJ1bml0c1tpXTtcbiAgICAgIGlmIChidW5pdC5jaGVja2VkKSB7XG4gICAgICAgIGlmIChmaXJzdCkge1xuICAgICAgICAgICRzY29wZS5idXNpbmVzc1VuaXRzQ2xhdXNlID0gXCJidXNpbmVzc191bml0X19jIExJS0UgJyVcIiArIGJ1bml0LmxhYmVsICsgXCIlJyBcIjtcbiAgICAgICAgICBmaXJzdCA9IGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICRzY29wZS5idXNpbmVzc1VuaXRzQ2xhdXNlICs9IFwiT1IgYnVzaW5lc3NfdW5pdF9fYyBMSUtFICclXCIgKyBidW5pdC5sYWJlbCArIFwiJScgXCI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgJHNjb3BlLmNvbXBvc2VXaGVyZUNsYXVzZSgpO1xuICB9O1xuXG4gICRzY29wZS5kaXNhc3RlclR5cGVzRmlsdGVyID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBkaXNhc3RlcnMgPSAkc2NvcGUuZGlzYXN0ZXJUeXBlcztcbiAgICAkc2NvcGUuc2VjdG9yQ2xhdXNlID0gbnVsbDtcbiAgICB2YXIgZmlyc3QgPSB0cnVlO1xuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBkaXNhc3RlcnMubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgICAgIHZhciBkaXNhc3RlciA9IGRpc2FzdGVyc1tpXTtcbiAgICAgIGlmIChkaXNhc3Rlci5jaGVja2VkKSB7XG4gICAgICAgIGlmIChmaXJzdCkge1xuICAgICAgICAgICRzY29wZS5zZWN0b3JDbGF1c2UgPSBcImRpc2FzdGVyX3R5cGVfX2MgTElLRSAnJVwiICsgZGlzYXN0ZXIubmFtZSArIFwiJScgXCI7XG4gICAgICAgICAgaWYgKCRzY29wZS5zdGF0dXNDbGF1c2UgIT09IG51bGwpIHtcbiAgICAgICAgICAgICRzY29wZS5zZWN0b3JDbGF1c2UgPSAkc2NvcGUuc2VjdG9yQ2xhdXNlICsgJ0FORCAnICsgXCIoXCIgKyAkc2NvcGUuc3RhdHVzQ2xhdXNlICsgXCIpXCI7XG4gICAgICAgICAgfVxuICAgICAgICAgIGZpcnN0ID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgJHNjb3BlLnNlY3RvckNsYXVzZSArPSBcIk9SIGRpc2FzdGVyX3R5cGVfX2MgTElLRSAnJVwiICsgZGlzYXN0ZXIubmFtZSArIFwiJScgXCI7XG4gICAgICAgICAgaWYgKCRzY29wZS5zdGF0dXNDbGF1c2UgIT09IG51bGwpIHtcbiAgICAgICAgICAgICRzY29wZS5zZWN0b3JDbGF1c2UgPSAkc2NvcGUuc2VjdG9yQ2xhdXNlICsgJ0FORCcgKyBcIihcIiArICRzY29wZS5zdGF0dXNDbGF1c2UgKyBcIilcIjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgJHNjb3BlLmNvbXBvc2VXaGVyZUNsYXVzZSgpO1xuICB9O1xuXG4gICRzY29wZS5jbGVhclNlY3RvcnNGaWx0ZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlY3RvcnMgPSAkc2NvcGUuc2VjdG9ycztcbiAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gc2VjdG9ycy5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICAgICAgc2VjdG9yc1tpXS5jaGVja2VkID0gZmFsc2U7XG4gICAgfVxuICAgICRzY29wZS5zZWN0b3JDbGF1c2UgPSBudWxsO1xuICAgICRzY29wZS5jb21wb3NlV2hlcmVDbGF1c2UoKTtcbiAgfTtcblxuICAkc2NvcGUuY2xlYXJCdXNpbmVzc1VuaXRGaWx0ZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGJ1bml0cyA9ICRzY29wZS5CdXNpbmVzc1VuaXRUeXBlcztcbiAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gYnVuaXRzLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICBidW5pdHNbaV0uY2hlY2tlZCA9IGZhbHNlO1xuICAgIH1cbiAgICAkc2NvcGUuYnVzaW5lc3NVbml0c0NsYXVzZSA9IG51bGw7XG5cbiAgICAkc2NvcGUuY29tcG9zZVdoZXJlQ2xhdXNlKCk7XG4gIH07XG5cbiAgJHNjb3BlLmNsZWFyRGlzYXN0ZXJUeXBlRmlsdGVyID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBkaXNhc3RlcnMgPSAkc2NvcGUuZGlzYXN0ZXJUeXBlcztcbiAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gZGlzYXN0ZXJzLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICBkaXNhc3RlcnNbaV0uY2hlY2tlZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgJHNjb3BlLmRpc2FzdGVyU3RhdHVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAkc2NvcGUuZGlzYXN0ZXJTdGF0dXNbaV0uY2hlY2tlZCA9IGZhbHNlO1xuICAgIH1cblxuICAgICRzY29wZS5zdGF0dXNDbGF1c2UgPSBudWxsO1xuICAgICRzY29wZS5zZWN0b3JDbGF1c2UgPSBudWxsO1xuICAgICRzY29wZS5jb21wb3NlV2hlcmVDbGF1c2UoKTtcbiAgfTtcblxuICAkc2NvcGUuY2xlYXJEaXNhc3RlckZpbHRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZGlzYXN0ZXJzID0gJHNjb3BlLmRpc2FzdGVyVHlwZXM7XG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGRpc2FzdGVycy5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICAgICAgZGlzYXN0ZXJzW2ldLmNoZWNrZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgJHNjb3BlLnNlY3RvckNsYXVzZSA9IG51bGw7XG4gICAgJHNjb3BlLmNvbXBvc2VXaGVyZUNsYXVzZSgpO1xuICB9O1xuXG4gICRzY29wZS5kZWZhdWx0U3RhdHVzID0gZnVuY3Rpb24gKCkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgJHNjb3BlLmRpc2FzdGVyU3RhdHVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoJHNjb3BlLmRpc2FzdGVyU3RhdHVzW2ldLm5hbWUgIT09IFwiSW5hY3RpdmVcIikge1xuICAgICAgICAkc2NvcGUuZGlzYXN0ZXJTdGF0dXNbaV0uY2hlY2tlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gICRzY29wZS5zdGF0dXNGaWx0ZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHN0YXR1cyA9ICRzY29wZS5zdGF0dXM7XG4gICAgJHNjb3BlLnN0YXR1c0NsYXVzZSA9IG51bGw7XG4gICAgdmFyIGZpcnN0ID0gdHJ1ZTtcbiAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gc3RhdHVzLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICB2YXIgc3RhdCA9IHN0YXR1c1tpXTtcbiAgICAgIGlmIChzdGF0LmNoZWNrZWQpIHtcbiAgICAgICAgaWYgKGZpcnN0KSB7XG4gICAgICAgICAgJHNjb3BlLnN0YXR1c0NsYXVzZSA9IFwic3RhdHVzX19jIExJS0UgJyVcIiArIHN0YXQubmFtZSArIFwiJSdcIjtcbiAgICAgICAgICBmaXJzdCA9IGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICRzY29wZS5zdGF0dXNDbGF1c2UgKz0gXCJPUiBzdGF0dXNfX2MgTElLRSAnJVwiICsgc3RhdC5uYW1lICsgXCIlJyBcIjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAkc2NvcGUuY29tcG9zZVdoZXJlQ2xhdXNlKCk7XG4gIH07XG5cbiAgJHNjb3BlLnBoYXNlRmlsdGVyID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBwaGFzZSA9ICRzY29wZS5waGFzZV9fYztcbiAgICAkc2NvcGUucGhhc2VDbGF1c2UgPSBudWxsO1xuICAgIHZhciBmaXJzdCA9IHRydWU7XG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHBoYXNlLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICB2YXIgc3RhdCA9IHBoYXNlW2ldO1xuICAgICAgaWYgKHN0YXQuY2hlY2tlZCkge1xuICAgICAgICBpZiAoZmlyc3QpIHtcbiAgICAgICAgICAkc2NvcGUucGhhc2VDbGF1c2UgPSBcInBoYXNlX19jIExJS0UgJyVcIiArIHN0YXQubmFtZSArIFwiJSdcIjtcbiAgICAgICAgICBmaXJzdCA9IGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICRzY29wZS5waGFzZUNsYXVzZSArPSBcIk9SIHBoYXNlX19jIExJS0UgJyVcIiArIHN0YXQubmFtZSArIFwiJScgXCI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgJHNjb3BlLmNvbXBvc2VXaGVyZUNsYXVzZSgpO1xuICB9O1xuXG4gICRzY29wZS5kaXNhc3RlclN0YXR1c0ZpbHRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc3RhdHVzID0gJHNjb3BlLmRpc2FzdGVyU3RhdHVzO1xuICAgICRzY29wZS5zdGF0dXNDbGF1c2UgPSBudWxsO1xuICAgIHZhciBmaXJzdCA9IHRydWU7XG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHN0YXR1cy5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICAgICAgdmFyIHN0YXQgPSBzdGF0dXNbaV07XG4gICAgICBpZiAoc3RhdC5jaGVja2VkKSB7XG4gICAgICAgIGlmIChmaXJzdCkge1xuICAgICAgICAgICRzY29wZS5zdGF0dXNDbGF1c2UgPSBcImlyb2Nfc3RhdHVzX19jIExJS0UgJyVcIiArIHN0YXQubmFtZSArIFwiJSdcIjtcbiAgICAgICAgICBmaXJzdCA9IGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICRzY29wZS5zdGF0dXNDbGF1c2UgKz0gXCJPUiBpcm9jX3N0YXR1c19fYyBMSUtFICclXCIgKyBzdGF0Lm5hbWUgKyBcIiUnIFwiO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG5cbiAgJHNjb3BlLmNsZWFyU3RhdHVzRmlsdGVyID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzdGF0dXMgPSAkc2NvcGUuc3RhdHVzO1xuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBzdGF0dXMubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgICAgIHN0YXR1c1tpXS5jaGVja2VkID0gZmFsc2U7XG4gICAgfVxuICAgICRzY29wZS5zdGF0dXNDbGF1c2UgPSBudWxsO1xuICAgICRzY29wZS5jb21wb3NlV2hlcmVDbGF1c2UoKTtcbiAgfTtcblxuXG4gICRzY29wZS5kYXRlRmlsdGVyID0gZnVuY3Rpb24gKCkge1xuICAgICRzY29wZS5kYXRlQ2xhdXNlID0gbnVsbDtcbiAgICB2YXIgX2ZpcnN0ID0gdHJ1ZTtcbiAgICB2YXIgZmlyc3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoX2ZpcnN0KSB7XG4gICAgICAgIF9maXJzdCA9IGZhbHNlO1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgICB9XG4gICAgICByZXR1cm4gJyBBTkQgJztcbiAgICB9O1xuICAgIHZhciBkYXRlRmlsdGVycyA9ICRzY29wZS5kYXRlRmlsdGVycztcbiAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gZGF0ZUZpbHRlcnMubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgICAgIHZhciBmaWx0ZXIgPSBkYXRlRmlsdGVyc1tpXTtcblxuICAgICAgaWYgKGZpbHRlci5uYW1lID09PSAnU3RhcnQgRGF0ZScgJiYgZmlsdGVyLmRhdGUpIHtcbiAgICAgICAgJHNjb3BlLmRhdGVDbGF1c2UgPSBmaXJzdCgpICsgJ3N0YXJ0X2RhdGVfX2MnICsgY29tcGFyZShmaWx0ZXIpICsgXCInXCIgKyBkYXRlU3RyaW5nKGZpbHRlci5kYXRlKSArIFwiJ1wiO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKGZpbHRlci5uYW1lID09PSAnRW5kIERhdGUnICYmIGZpbHRlci5kYXRlKSB7XG4gICAgICAgICRzY29wZS5kYXRlQ2xhdXNlID0gZmlyc3QoKSArICdlbmRfZGF0ZV9fYycgKyBjb21wYXJlKGZpbHRlcikgKyBcIidcIiArIGRhdGVTdHJpbmcoZmlsdGVyLmRhdGUpICsgXCInXCI7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoZmlsdGVyLm5hbWUgPT09ICdDcmVhdGUgRGF0ZScgJiYgZmlsdGVyLmRhdGUpIHtcbiAgICAgICAgJHNjb3BlLmRhdGVDbGF1c2UgPSBmaXJzdCgpICsgJ2NyZWF0ZWRhdGUnICsgY29tcGFyZShmaWx0ZXIpICsgXCInXCIgKyBkYXRlU3RyaW5nKGZpbHRlci5kYXRlKSArIFwiJ1wiO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKGZpbHRlci5uYW1lID09PSAnTGFzdCBNb2RpZmllZCcgJiYgZmlsdGVyLmRhdGUpIHtcbiAgICAgICAgJHNjb3BlLmRhdGVDbGF1c2UgPSBmaXJzdCgpICsgJ2xhc3Rtb2RpZmllZGRhdGUnICsgY29tcGFyZShmaWx0ZXIpICsgXCInXCIgKyBkYXRlU3RyaW5nKGZpbHRlci5kYXRlKSArIFwiJ1wiO1xuICAgICAgfVxuXG4gICAgfVxuICAgICRzY29wZS5jb21wb3NlV2hlcmVDbGF1c2UoKTtcbiAgfTtcblxuICAkc2NvcGUuY2xlYXJEYXRlRmlsdGVyID0gZnVuY3Rpb24gKCkge1xuICAgICRzY29wZS5kYXRlRmlsdGVycyA9IFtcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ1N0YXJ0IERhdGUnLFxuICAgICAgICByYWRpbzogJ29uJyxcbiAgICAgICAgZW1wdHk6IHRydWUsXG4gICAgICAgIG9wZW5lZDogZmFsc2UsXG4gICAgICAgIGRhdGU6IG51bGxcbiAgICAgIH0sIHtcbiAgICAgICAgbmFtZTogJ0VuZCBEYXRlJyxcbiAgICAgICAgcmFkaW86ICdvbicsXG4gICAgICAgIGVtcHR5OiB0cnVlLFxuICAgICAgICBvcGVuZWQ6IGZhbHNlLFxuICAgICAgICBkYXRlOiBudWxsXG4gICAgICB9LCB7XG4gICAgICAgIG5hbWU6ICdDcmVhdGUgRGF0ZScsXG4gICAgICAgIHJhZGlvOiAnb24nLFxuICAgICAgICBlbXB0eTogdHJ1ZSxcbiAgICAgICAgb3BlbmVkOiBmYWxzZSxcbiAgICAgICAgZGF0ZTogbnVsbFxuICAgICAgfSwge1xuICAgICAgICBuYW1lOiAnTGFzdCBNb2RpZmllZCcsXG4gICAgICAgIHJhZGlvOiAnb24nLFxuICAgICAgICBlbXB0eTogdHJ1ZSxcbiAgICAgICAgb3BlbmVkOiBmYWxzZSxcbiAgICAgICAgZGF0ZTogbnVsbFxuICAgICAgfVxuICAgIF07XG4gICAgJHNjb3BlLmRhdGVDbGF1c2UgPSBudWxsO1xuICAgICRzY29wZS5jb21wb3NlV2hlcmVDbGF1c2UoKTtcbiAgfTtcblxuICAvKipcbiAgICogVXNlZCBpbiBkYXRlRmlsdGVyLiBEZXRlcm1pbmVzIHRoZSBwcm9wZXIgU1FMIGNvbXBhcmF0b3IgdG8gdXNlXG4gICAqIGZvciBmaWx0ZXJpbmcgYSBkYXRlLlxuICAgKlxuICAgKiBAcGFyYW0gZmlsdGVyXG4gICAqL1xuICBmdW5jdGlvbiBjb21wYXJlKGZpbHRlcikge1xuICAgIHZhciByYWRpbyA9IGZpbHRlci5yYWRpbztcbiAgICBpZiAocmFkaW8gPT09ICdvbicpIHtcbiAgICAgIHJldHVybiAnPSc7XG4gICAgfVxuICAgIGlmIChyYWRpbyA9PT0gJ2JlZm9yZScpIHtcbiAgICAgIHJldHVybiAnPCc7XG4gICAgfVxuICAgIGlmIChyYWRpbyA9PT0gJ2FmdGVyJykge1xuICAgICAgcmV0dXJuICc+JztcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBkYXRlIGFzIFlZWVktTU0tRERcbiAgICpcbiAgICogQHBhcmFtIGRhdGVcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICovXG4gIGZ1bmN0aW9uIGRhdGVTdHJpbmcoZGF0ZSkge1xuICAgIHJldHVybiBkYXRlLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApO1xuICB9XG5cbiAgJHNjb3BlLmJ1ZGdldEZpbHRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAkc2NvcGUuYnVkZ2V0Q2xhdXNlID0gbnVsbDtcbiAgICB2YXIgbWluID0gJHNjb3BlLmJ1ZGdldC5zbGlkZXJbMF07XG4gICAgdmFyIG1heCA9ICRzY29wZS5idWRnZXQuc2xpZGVyWzFdO1xuICAgIGlmIChtaW4gIT09IDAgJiYgbWF4ICE9PSAkc2NvcGUuYnVkZ2V0Lm1heCkgeyAvL2JvdGggbWluIGFuZCBtYXggY2hhbmdlZFxuICAgICAgJHNjb3BlLmJ1ZGdldENsYXVzZSA9ICd0b3RhbF9idWRnZXRfX2M+PScgKyBtaW4gKyAnIEFORCB0b3RhbF9idWRnZXRfX2M8PScgKyBtYXg7XG4gICAgfSBlbHNlIGlmIChtaW4gIT09IDApIHsgLy8gb25seSBtaW4gY2hhbmdlZFxuICAgICAgJHNjb3BlLmJ1ZGdldENsYXVzZSA9ICd0b3RhbF9idWRnZXRfX2M+PScgKyBtaW5cbiAgICB9IGVsc2UgaWYgKG1heCAhPT0gJHNjb3BlLmJ1ZGdldC5tYXgpIHsgLy8gb25seSBtYXggY2hhbmdlZFxuICAgICAgJHNjb3BlLmJ1ZGdldENsYXVzZSA9ICd0b3RhbF9idWRnZXRfX2M8PScgKyBtYXg7XG4gICAgfVxuICAgICRzY29wZS5jb21wb3NlV2hlcmVDbGF1c2UoKTtcbiAgfTtcblxuICAkc2NvcGUuY2xlYXJCdWRnZXRGaWx0ZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgJHNjb3BlLmJ1ZGdldC5zbGlkZXJbMF0gPSAkc2NvcGUuYnVkZ2V0Lm1pbjtcbiAgICAkc2NvcGUuYnVkZ2V0LnNsaWRlclsxXSA9ICRzY29wZS5idWRnZXQubWF4O1xuICAgICRzY29wZS5idWRnZXRDbGF1c2UgPSBudWxsO1xuICAgICRzY29wZS5jb21wb3NlV2hlcmVDbGF1c2UoKTtcbiAgfTtcblxuICAkc2NvcGUuY29tcG9zZVdoZXJlQ2xhdXNlID0gZnVuY3Rpb24gKCkge1xuICAgICRzY29wZS53aGVyZUNsYXVzZSA9IG51bGw7XG4gICAgdmFyIHBhcnRzID0gW107XG5cbiAgICBpZiAoJHN0YXRlUGFyYW1zLnRoZW1lLmluZGV4T2YoJ2Rpc2FzdGVyJykgIT09IC0xKSB7XG4gICAgICBpZiAoJHNjb3BlLnNlY3RvckNsYXVzZSA9PSBudWxsKSB7XG4gICAgICAgIHBhcnRzID0gWyRzY29wZS5zZWN0b3JDbGF1c2UsICRzY29wZS5kYXRlQ2xhdXNlLCAkc2NvcGUuc3RhdHVzQ2xhdXNlLCAkc2NvcGUuYnVkZ2V0Q2xhdXNlXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhcnRzID0gWyRzY29wZS5zZWN0b3JDbGF1c2UsICRzY29wZS5kYXRlQ2xhdXNlLCAkc2NvcGUuYnVkZ2V0Q2xhdXNlXTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcGFydHMgPSBbJHNjb3BlLnNlY3RvckNsYXVzZSwgJHNjb3BlLmRhdGVDbGF1c2UsICRzY29wZS5zdGF0dXNDbGF1c2UsICRzY29wZS5idWRnZXRDbGF1c2UsICRzY29wZS5idXNpbmVzc1VuaXRzQ2xhdXNlXTtcbiAgICB9XG5cbiAgICB2YXIgZmlyc3QgPSB0cnVlO1xuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBwYXJ0cy5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICAgICAgdmFyIHBhcnQgPSBwYXJ0c1tpXTtcbiAgICAgIGlmIChwYXJ0KSB7XG4gICAgICAgIGlmIChmaXJzdCkge1xuICAgICAgICAgICRzY29wZS53aGVyZUNsYXVzZSA9IHBhcnQ7XG4gICAgICAgICAgZmlyc3QgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAkc2NvcGUud2hlcmVDbGF1c2UgKz0gJ0FORCAnICsgcGFydDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoISRzY29wZS53aGVyZUNsYXVzZSkgJHNjb3BlLndoZXJlQ2xhdXNlID0gJ251bGwnO1xuICAgICRzY29wZS5zdWJtaXRGaWx0ZXIoKTtcbiAgfTtcblxuICAkc2NvcGUuc3VibWl0RmlsdGVyID0gZnVuY3Rpb24gKCkge1xuXG4gICAgaWYgKCRzdGF0ZVBhcmFtcy50aGVtZS5pbmRleE9mKCdwcm9qZWN0JykgIT09IC0xKSRzdGF0ZVBhcmFtcy5maWx0ZXJzID0gZXNjYXBlKCRzY29wZS53aGVyZUNsYXVzZSk7XG4gICAgaWYgKCRzdGF0ZVBhcmFtcy50aGVtZS5pbmRleE9mKCdkaXNhc3RlcicpICE9PSAtMSkkc3RhdGVQYXJhbXMuZmlsdGVycyA9IGVzY2FwZSgkc2NvcGUud2hlcmVDbGF1c2UpO1xuXG4gICAgdmFyIHN0YXRlID0gJHN0YXRlLmN1cnJlbnQubmFtZSB8fCAnbWFpbic7XG4gICAgJHN0YXRlLmdvKHN0YXRlLCAkc3RhdGVQYXJhbXMpO1xuICB9O1xuXG4gICRzY29wZS5jbGVhckFsbEZpbHRlcnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgJHNjb3BlLmNsZWFyU2VjdG9yc0ZpbHRlcigpO1xuICAgICRzY29wZS5jbGVhclN0YXR1c0ZpbHRlcigpO1xuICAgICRzY29wZS5jbGVhckRhdGVGaWx0ZXIoKTtcbiAgICAkc2NvcGUuY2xlYXJCdWRnZXRGaWx0ZXIoKTtcbiAgICAkc2NvcGUuY2xlYXJEaXNhc3RlclR5cGVGaWx0ZXIoKTtcbiAgICAkc2NvcGUuY2xlYXJCdXNpbmVzc1VuaXRGaWx0ZXIoKTtcbiAgfTtcblxuICAvLyBwdXRzIHRoZSBjYXRlZ29yeSBpbiBVUkxcbiAgJHNjb3BlLnB1dENhdGVnb3J5VVJMID0gZnVuY3Rpb24gKGNhdGVnb3J5TmFtZSkge1xuICAgIGlmICgkc3RhdGVQYXJhbXMuY2F0ZWdvcnkgPT0gY2F0ZWdvcnlOYW1lKSB7XG4gICAgICAkc3RhdGVQYXJhbXMuY2F0ZWdvcnkgPSBudWxsO1xuICAgICAgJHN0YXRlLmdvKCRzdGF0ZS5jdXJyZW50Lm5hbWUsICRzdGF0ZVBhcmFtcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICRzdGF0ZVBhcmFtcy5jYXRlZ29yeSA9IGNhdGVnb3J5TmFtZTtcbiAgICAgICRzdGF0ZS5nbygkc3RhdGUuY3VycmVudC5uYW1lLCAkc3RhdGVQYXJhbXMpO1xuICAgIH1cbiAgfTtcblxuICAkc2NvcGUuaGFuZGxlU2VhcmNoID0gZnVuY3Rpb24gKHZhbCkge1xuICAgIHZhciBkdCA9ICRzY29wZS5kaXNhc3RlclR5cGVzY2F0ZWdvcnk7XG4gICAgJHNjb3BlLnNlYXJjaFRleHQgPSB2YWw7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBPYmplY3Qua2V5cyhkdCkubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBhcnIgPSBkdFtPYmplY3Qua2V5cyhkdClbaV1dO1xuICAgICAgZm9yICh2YXIgeiA9IDA7IHogPCBhcnIubGVuZ3RoOyB6KyspIHtcbiAgICAgICAgaWYgKGFyclt6XS5uYW1lLmluZGV4T2YodmFsKSAhPT0gLTEpIHtcbiAgICAgICAgICAkc3RhdGVQYXJhbXMuY2F0ZWdvcnkgPSBPYmplY3Qua2V5cyhkdClbaV07XG4gICAgICAgICAgJHNjb3BlLmRpc2FzdGVyVHlwZXNjYXRlZ29yeVtPYmplY3Qua2V5cyhkdClbaV1dW3pdLmlzU2VhcmNoQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB2YXIgc3RhdGUgPSAkc3RhdGUuY3VycmVudC5uYW1lIHx8ICdtYWluJztcbiAgICAkc3RhdGUuZ28oc3RhdGUsICRzdGF0ZVBhcmFtcyk7XG4gIH07XG5cbiAgJHNjb3BlLmhpZ2hsaWdodExheWVyID0gZnVuY3Rpb24gKHZhbCkge1xuICAgICRzY29wZS5zZWxlY3RlZCA9IHRydWU7XG4gICAgJHRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGR0ID0gJHNjb3BlLmRpc2FzdGVyVHlwZXNjYXRlZ29yeTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgT2JqZWN0LmtleXMoZHQpLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBhcnIgPSBkdFtPYmplY3Qua2V5cyhkdClbaV1dO1xuICAgICAgICBmb3IgKHZhciB6ID0gMDsgeiA8IGFyci5sZW5ndGg7IHorKykge1xuICAgICAgICAgIGlmIChhcnJbel0ubmFtZS5pbmRleE9mKHZhbCkgIT09IC0xKSB7XG4gICAgICAgICAgICAkc2NvcGUuZGlzYXN0ZXJUeXBlc2NhdGVnb3J5W09iamVjdC5rZXlzKGR0KVtpXV1bel0uaXNTZWFyY2hBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgICRzY29wZS5zZWFyY2hUZXh0ID0gJyc7XG4gICAgICAkc2NvcGUuc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICB9LCAyMDAwKTtcbiAgfTtcblxuICAkc2NvcGUuVU5PQ0hBSWNvbkxvb2t1cCA9IGNvbmZpZy5VTk9DSEFJY29uTG9va3VwO1xuXG59KTtcbiIsIi8qKlxuICogQ3JlYXRlZCBieSBOaWNob2xhcyBIYWxsYWhhbiA8bmhhbGxhaGFuQHNwYXRpYWxkZXYuY29tPlxuICogICAgICAgb24gMy8yNy8xNC5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdHZW9Bbmd1bGFyJykuY29udHJvbGxlcignSW5mb0N0cmwnLCBmdW5jdGlvbigkc2NvcGUpIHtcbiAgJHNjb3BlLnBhcmFtcyA9ICRzdGF0ZVBhcmFtcztcbn0pOyIsIi8qKlxuICogQ3JlYXRlZCBieSBOaWNob2xhcyBIYWxsYWhhbiA8bmhhbGxhaGFuQHNwYXRpYWxkZXYuY29tPlxuICogICAgICAgb24gMy8yNy8xNC5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdHZW9Bbmd1bGFyJykuY29udHJvbGxlcignTGF5ZXJzQ3RybCcsIGZ1bmN0aW9uKCRzY29wZSwgJHN0YXRlLCAkc3RhdGVQYXJhbXMsIExheWVyQ29uZmlnLCBWZWN0b3JQcm92aWRlciwgJHJvb3RTY29wZSkge1xuICAkc2NvcGUucGFyYW1zID0gJHN0YXRlUGFyYW1zO1xuICAkc2NvcGUuem9vbSA9IHBhcnNlSW50KCRzdGF0ZVBhcmFtcy56b29tKTtcbiAgJHNjb3BlLm5hdlRhYiA9ICdjb250ZXh0dWFsJztcblxuICAkc2NvcGUuZ2lzdHMgPSBbXTsgLy9pbml0aWFsaXplIGFzIGVtcHR5XG4gICRzY29wZS5tYXBMYXllcnMgPSBbXTsgLy9pbml0aWFsaXplIGFzIGVtcHR5XG5cbiAgJHNjb3BlLmFyY3JlZ2lvbnNMYWJlbCA9ICdBUkMgUmVnaW9ucyc7XG4gICRzY29wZS5nYWRtMExhYmVsID0gJ0NvdW50cmllcyc7XG4gICRzY29wZS5nYWRtMUxhYmVsID0gJ1N0YXRlIC8gUHJvdmluY2UnO1xuICAkc2NvcGUuZ2FkbTJMYWJlbCA9ICdDb3VudHkgLyBEaXN0cmljdCc7XG5cblxuICBkZWJ1Zy5MYXllckNvbmZpZyA9IExheWVyQ29uZmlnO1xuICBkZWJ1Zy5zZXRHYWRtTGV2ZWwgPSBWZWN0b3JQcm92aWRlci5zZXRHYWRtTGV2ZWw7XG5cbiAgJHNjb3BlLmdhZG1MZXZlbCA9ICRyb290U2NvcGUubGV2ZWwgfHwgMDtcblxuICAkc2NvcGUudGhlbWVMYWJlbHMgPSB7IGlzQ2hlY2tlZDogJHN0YXRlUGFyYW1zLnRoZW1lbGFiZWxzIHx8IHRydWUgfTtcblxuICAkc2NvcGUudGhlbWUgPSB7IGlzQ2hlY2tlZDogdHJ1ZSB9O1xuXG4gICRzY29wZS50aGVtZUxheWVyID0gTGF5ZXJDb25maWcudGhlbWU7XG5cbiAgJHNjb3BlLnVwZGF0ZUdhZG0gPSBmdW5jdGlvbiAobGV2ZWwpIHtcbiAgICAkc2NvcGUubGV2ZWwgPSBsZXZlbC50b1N0cmluZygpO1xuICAgIGlmKGxldmVsLnRvU3RyaW5nKCkgIT09ICRzY29wZS5nYWRtTGV2ZWwpIHtcbiAgICAgICRzY29wZS5nYWRtTGV2ZWwgPSBsZXZlbC50b1N0cmluZygpIHx8IFwiMFwiO1xuICAgICAgY29uc29sZS5sb2coJHNjb3BlLmdhZG1MZXZlbCk7XG4gICAgfTtcblxuICB9O1xuXG4gICRzY29wZS5jbG9zZVBhbmVscyA9IGZ1bmN0aW9uICgpe1xuICAgIGZvciAodmFyIHBhcmFtIGluICRzdGF0ZVBhcmFtcykge1xuICAgICAgaWYgKCRzdGF0ZVBhcmFtc1twYXJhbV0gPT09ICdvcGVuJykge1xuICAgICAgICAkc3RhdGVQYXJhbXNbcGFyYW1dID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgJHNjb3BlLnVwZGF0ZVRoZW1lTGFiZWwgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAoJHNjb3BlLnRoZW1lTGFiZWxzLmlzQ2hlY2tlZCA9PT0gdHJ1ZSkge1xuICAgICAgJHN0YXRlUGFyYW1zLnRoZW1lbGFiZWxzID0gJ3RydWUnO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIC8vcmVtb3ZlIGZyb20gc3RhdGVwYXJhbXNcbiAgICAgICRzdGF0ZVBhcmFtcy50aGVtZWxhYmVscyA9ICdmYWxzZSc7XG4gICAgfVxuXG4gICAgdmFyIHN0YXRlID0gJHN0YXRlLmN1cnJlbnQubmFtZSB8fCAnbWFpbic7XG4gICAgJHN0YXRlLmdvKHN0YXRlLCAkc3RhdGVQYXJhbXMpO1xuICB9O1xuXG4gIC8vVG9nZ2xlIEVDT1MgTGF5ZXIgLSBpZiBvZmYsIHRoZW4gdHVybiBvbiBhbmQgdmljZSB2ZXJzYS5cbiAgJHNjb3BlLnVwZGF0ZVRoZW1lID0gZnVuY3Rpb24oKSB7XG5cbiAgICB2YXIgbGF5ZXJzQXJyYXk7XG5cbiAgICBpZigkc3RhdGVQYXJhbXMubGF5ZXJzKXtcbiAgICAgIGxheWVyc0FycmF5ID0gJHN0YXRlUGFyYW1zLmxheWVycy5zcGxpdChcIixcIik7XG4gICAgfVxuICAgIGVsc2V7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKCRzY29wZS50aGVtZS5pc0NoZWNrZWQgPT09IHRydWUpIHtcblxuICAgICAgLy9SZW1vdmUgYWxsIEdBRE0gbGF5ZXJzLlxuICAgICAgYW5ndWxhci5mb3JFYWNoKGxheWVyc0FycmF5LCBmdW5jdGlvbiAodmFsdWUsIGtleSkge1xuICAgICAgICBpZiAoTGF5ZXJDb25maWcudGhlbWVMYXllcnMuaW5kZXhPZih2YWx1ZSkgPiAtMSkge1xuICAgICAgICAgIGxheWVyc0FycmF5LnNwbGljZShsYXllcnNBcnJheS5pbmRleE9mKHZhbHVlKSwgMSk7IC8vcmVtb3ZlIGFueSBHQURNc1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgLy9BZGQgaW4gdGhlIGdhZG0gbGF5ZXIgdG8gdGhlIGxheWVycyBsaXN0IGluIHRoZSBzdGF0ZXBhcmFtcy5cbiAgICAgIGlmKCRzY29wZS5nYWRtTGV2ZWwgPT0gLTEpe1xuICAgICAgICBsYXllcnNBcnJheS5wdXNoKFwiYXJjcmVnaW9uc1wiKTtcbiAgICAgIH1cbiAgICAgIGVsc2V7XG4gICAgICAgIGxheWVyc0FycmF5LnB1c2goXCJnYWRtXCIgKyAkc2NvcGUuZ2FkbUxldmVsKVxuICAgICAgfVxuXG4gICAgICAkc3RhdGVQYXJhbXMubGF5ZXJzID0gbGF5ZXJzQXJyYXkuam9pbihcIixcIik7XG5cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAvL3JlbW92ZSBmcm9tIHN0YXRlcGFyYW1zXG4gICAgICAvL1JlbW92ZSBhbGwgR0FETSBsYXllcnMuXG4gICAgICBhbmd1bGFyLmZvckVhY2gobGF5ZXJzQXJyYXksIGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XG4gICAgICAgIGlmIChMYXllckNvbmZpZy50aGVtZUxheWVycy5pbmRleE9mKHZhbHVlKSA+IC0xKSB7XG4gICAgICAgICAgbGF5ZXJzQXJyYXkuc3BsaWNlKGxheWVyc0FycmF5LmluZGV4T2YodmFsdWUpLCAxKTsgLy9yZW1vdmUgYW55IEdBRE1zXG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICAkc3RhdGVQYXJhbXMubGF5ZXJzID0gbGF5ZXJzQXJyYXkuam9pbihcIixcIik7XG4gICAgfVxuXG4gICAgdmFyIHN0YXRlID0gJHN0YXRlLmN1cnJlbnQubmFtZSB8fCAnbWFpbic7XG4gICAgJHN0YXRlLmdvKHN0YXRlLCAkc3RhdGVQYXJhbXMpO1xuXG4gIH07XG5cblxuICAkc2NvcGUuJHdhdGNoKCdnYWRtTGV2ZWwnLCBmdW5jdGlvbiAobmV3VmFsdWUpIHtcbiAgICAkc2NvcGUudXBkYXRlVGhlbWUoKTtcbiAgfSk7XG5cbiAgLy8kc2NvcGUuJG9uKCdsZXZlbC11cGRhdGUnLCBmdW5jdGlvbiAoKSB7XG4gIC8vICBWZWN0b3JQcm92aWRlci5zZXRHYWRtTGV2ZWwoJHN0YXRlUGFyYW1zLmxldmVsKTtcbiAgLy8gICRzY29wZS5nYWRtTGV2ZWwgPSAkc3RhdGVQYXJhbXMubGV2ZWxcbiAgLy99KTtcblxuICAkc2NvcGUuJG9uKCd6b29tLXVwZGF0ZScsIGZ1bmN0aW9uICgpIHtcbiAgICAkc2NvcGUuem9vbSA9IHBhcnNlSW50KCRzdGF0ZVBhcmFtcy56b29tKTtcbiAgfSk7XG5cblxuICAvKipcbiAgICogVGhpcyBpcyB0aGUgY29sbGVjdGlvbiBvZiBhbGwgb2YgdGhlIGxheWVycyB3ZSBoYXZlLlxuICAgKiBUaGlzIGlzIHVzZWQgYnkgdGhlIHNlYXJjaExheWVyc0ZpbHRlci5cbiAgICovXG4gICRzY29wZS5hbGxMYXllcnMgPSB7fTtcbiAgLy8gYnVpbGRpbmcgdGhlIGFsbExheWVycyBtb2RlbFxuICBmb3IgKHZhciBrIGluIExheWVyQ29uZmlnKSB7XG4gICAgdmFyIGxheWVyID0gTGF5ZXJDb25maWdba107XG5cbiAgICAvLyBXZSBkb24ndCB3YW50IHRvIHNob3cgbGF5ZXJzIHRoYXQgYXJlIGJhc2VtYXBzLCBhbmQgd2UgZG9uJ3Qgd2FudCB0byBzaG93IHRoZSBmaW5kIGZ1bmMuXG4gICAgaWYgKHR5cGVvZiBsYXllciA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgfHwgayA9PT0gJ2Jhc2VtYXBzJ1xuICAgICAgfHwgayA9PT0gJ2Jib3gnXG4gICAgICB8fCBrID09PSAndGhlbWVMYXllcnMnXG4gICAgICB8fCBrID09PSAnY291bnRyeWV4dGVudHMnXG4gICAgICB8fCBrID09PSAnYXJjcmVnaW9uZXh0ZW50cydcbiAgICAgIHx8IGxheWVyLnR5cGUgPT09ICdiYXNlbWFwJykge1xuXG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICAkc2NvcGUuYWxsTGF5ZXJzW2tdID0ga2V5VG9PYmooayk7XG4gIH1cblxuICAkc2NvcGUubGF5ZXJzUGFuZWxzID0ge1xuLy8gICAgJ0JvdW5kYXJpZXMnOiB7fSxcbi8vICAgICdHZW9KU09OJzoge30sXG4vLyAgICAnS01MJzoge30sXG4vLyAgICAnQ1NWJzoge30sXG4vLyAgICAnV01TJzoge30sXG4gICAgJ0NvbnRleHR1YWwgbGF5ZXJzOic6IHt9XG4gIH07XG5cbiAgZnVuY3Rpb24gYnVpbGRMYXllcnNNb2RlbCgpIHtcbiAgICAkc2NvcGUubGF5ZXJzUGFuZWxzWydDb250ZXh0dWFsIGxheWVyczonXSA9IHt9O1xuICAgIGZvciAodmFyIGxheWVyS2V5IGluIExheWVyQ29uZmlnKSB7XG4gICAgICB2YXIgbGF5ZXIgPSBMYXllckNvbmZpZ1tsYXllcktleV07XG5cbiAgICAgIC8vIFdlIGRvbid0IHdhbnQgdG8gc2hvdyBsYXllcnMgdGhhdCBhcmUgYmFzZW1hcHMsIGFuZCB3ZSBkb24ndCB3YW50IHRvIHNob3cgdGhlIGZpbmQgZnVuYy5cbiAgICAgIGlmICggIHR5cGVvZiBsYXllciA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICB8fCBsYXllcktleSA9PT0gJ2Jhc2VtYXBzJ1xuICAgICAgICB8fCBsYXllcktleSA9PT0gJ2Jib3gnXG4gICAgICAgIHx8IGxheWVyLnR5cGUgPT09ICdiYXNlbWFwJyApIHtcblxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCEkc2NvcGUuJHN0YXRlUGFyYW1zLnRoZW1lKSB7XG4gICAgICAgIHZhciB0aGVtZSA9ICdwcm9qZWN0JztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciB0aGVtZSA9ICRzY29wZS4kc3RhdGVQYXJhbXMudGhlbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFsYXllci50aGVtZSB8fCAobGF5ZXIudGhlbWUudG9Mb3dlckNhc2UoKSAhPT0gJ2FsbCcgJiYgbGF5ZXIudGhlbWUudG9Mb3dlckNhc2UoKSAhPT0gdGhlbWUpICkge1xuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICAkc2NvcGUubGF5ZXJzUGFuZWxzWydDb250ZXh0dWFsIGxheWVyczonXVtsYXllcktleV0gPSBrZXlUb09iaihsYXllcktleSk7XG5cbiAgICB9XG4gIH1cbiAgYnVpbGRMYXllcnNNb2RlbCgpO1xuXG4gIGRlYnVnLmxheWVyc1BhbmVscyA9ICRzY29wZS5sYXllcnNQYW5lbHM7XG5cbiAgZnVuY3Rpb24ga2V5VG9PYmooa2V5KSB7XG4gICAgdmFyIHZhbCA9IExheWVyQ29uZmlnW2tleV07XG4gICAgaWYgKHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB1cmw6IHZhbFxuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbDtcbiAgfVxuXG4gIC8vTkggVE9ETzogTm90IHlldCBmdWxseSBpbXBsZW1lbnRlZCAtIHBvc3NpYmxlIGV4dHJhIGZlYXR1cmUuLi5cbiAgLyoqXG4gICAqIExheWVycyB0aGF0IGFyZSBhY3RpdmUgb24gdGhlIG1hcCBidXQgYXJlIG5vdCBtZW50aW9uZWQgaW4gTGF5ZXJDb25maWdcbiAgICogQHR5cGUge3t9fVxuICAgKi9cbiAgJHNjb3BlLm5vbWFkTGF5ZXJzID0ge307XG5cblxuICAvKipcbiAgICogV2hlbiB0aGUgcm91dGUgY2hhbmdlcywgd2Ugc2hvdWxkIHNlZSB3aGF0IGxheWVycyB3ZSBoYXZlIG9uIHRoZXJlIGFuZCBoYXZlIHRoZSBsYXllcnNcbiAgICogaW4gdGhlIHBhbmVscyBjaGVja2VkIGFjY29yZGluZ2x5LlxuICAgKi9cbiAgJHNjb3BlLiRvbignbGF5ZXJzLXVwZGF0ZScsIGZ1bmN0aW9uKGV2dCwgbGF5ZXJzKSB7XG5cbiAgICBidWlsZExheWVyc01vZGVsKCk7XG5cbiAgICAvLyBnaXRodWIgZ2lzdHNcbiAgICAkc2NvcGUubGlzdEdpc3RzKCk7XG5cbiAgICAvLyByZXNldCB0aGUgbm9tYWQgbGF5ZXJzXG4gICAgZm9yICh2YXIgbmsgaW4gJHNjb3BlLm5vbWFkTGF5ZXJzKSB7XG4gICAgICAkc2NvcGUubm9tYWRMYXllcnNbbmtdLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIC8vIHJlc2V0IHRoZSBsYXllciBjb25maWcgbGF5ZXJzXG4gICAgZm9yICh2YXIgbGNrIGluIExheWVyQ29uZmlnKSB7XG4gICAgICBpZiAodHlwZW9mIExheWVyQ29uZmlnW2xja10gPT09ICdvYmplY3QnICYmIExheWVyQ29uZmlnW2xja10gIT09IG51bGwpIHtcbiAgICAgICAgTGF5ZXJDb25maWdbbGNrXS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVjayBpZiB0aGUgbGF5ZXIgaXMgYWN0aXZlIGluIG1hcCBsYXllcnNcbiAgICAgKiBGb3JjZSBnYWRtMCBvbiBkaXNhc3RlciB0aGVtZXNcbiAgICAgKi9cblxuICAgIHZhciB0aGVtZSA9ICRzdGF0ZVBhcmFtcy50aGVtZTtcblxuXG4gICAgLy9mb3JjZSBnYWRtMCBvbiBkaXNhc3RlciB0aGVtZXMgd2hlbiB1c2VyIGNoYW5nZXMgZ2FkbSBsZXZlbFxuICAgIGlmKHRoZW1lLmluZGV4T2YoJ2Rpc2FzdGVyJykhPT0tMSAmJiAkc3RhdGVQYXJhbXMubGF5ZXJzLnNwbGl0KFwiLFwiKVsxXSAhPT0gJ2dhZG0wJyl7XG5cbiAgICAgIHZhciBsYXllcnNBcnJheSA9IFtdO1xuXG4gICAgICBpZigkc3RhdGVQYXJhbXMubGF5ZXJzKXtcbiAgICAgICAgbGF5ZXJzQXJyYXkgPSAkc3RhdGVQYXJhbXMubGF5ZXJzLnNwbGl0KFwiLFwiKTtcbiAgICAgIH1cblxuICAgICAgLy9SZW1vdmUgYWxsIEdBRE0gbGF5ZXJzLlxuICAgICAgbGF5ZXJzQXJyYXkuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUsIGtleSkge1xuICAgICAgICBpZiAoTGF5ZXJDb25maWcudGhlbWVMYXllcnMuaW5kZXhPZih2YWx1ZSkgPiAtMSkge1xuICAgICAgICAgIGxheWVyc0FycmF5LnNwbGljZShsYXllcnNBcnJheS5pbmRleE9mKHZhbHVlKSwgMSk7IC8vcmVtb3ZlIGFueSBHQURNc1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgLy9BZGQgaW4gdGhlIGdhZG0gbGF5ZXIgdG8gdGhlIGxheWVycyBsaXN0IGluIHRoZSBzdGF0ZXBhcmFtcy5cbiAgICAgIGxheWVyc0FycmF5LnB1c2goXCJnYWRtMFwiKTtcbiAgICAgICRzdGF0ZVBhcmFtcy5sYXllcnMgPSBsYXllcnNBcnJheS5qb2luKFwiLFwiKTtcbiAgICB9XG5cblxuICAgICRzY29wZS5tYXBMYXllcnMgPSAkc3RhdGVQYXJhbXMubGF5ZXJzLnNwbGl0KFwiLFwiKTtcblxuICAgIC8vIHNraXAgdGhlIGZpcnN0IGxheWVyLCB0aGUgYmFzZW1hcFxuICAgIGZvciAodmFyIGkgPSAxLCBsZW4gPSBsYXllcnMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIHZhciBsID0gbGF5ZXJzW2ldO1xuICAgICAgLy8gbGF5ZXIgaXMgaW4gdGhlIGxheWVyIGNvbmZpZ1xuICAgICAgaWYgKHR5cGVvZiBMYXllckNvbmZpZ1tsXSA9PT0gJ29iamVjdCcgJiYgTGF5ZXJDb25maWdbbF0gIT09IG51bGwpIHtcbiAgICAgICAgTGF5ZXJDb25maWdbbF0uYWN0aXZlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIC8vIGxheWVyIGlzIGEgZ2l0aHViIGdpc3RcbiAgICAgIGVsc2UgaWYgKCRzY29wZS5naXN0cyAmJiAkc2NvcGUuZ2lzdHNbbF0pIHtcbiAgICAgICAgJHNjb3BlLmdpc3RzW2xdLmFjdGl2ZSA9IHRydWU7XG4gICAgICB9XG4gICAgICAvLyBsYXllciBpcyBhIG5vdCBpbiB0aGUgbGF5ZXIgY29uZmlnLiBpdCdzIG5vbWFkaWMuXG4gICAgICBlbHNlIHtcbiAgICAgICAgJHNjb3BlLm5vbWFkTGF5ZXJzW2xdID0ge1xuICAgICAgICAgIG5hbWU6IGwsXG4gICAgICAgICAgdXJsOiBsLFxuICAgICAgICAgIGFjdGl2ZTogdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gIH0pO1xuXG4gICRzY29wZS4kb24oJ3JvdXRlLXVwZGF0ZScsIGZ1bmN0aW9uKCkge1xuICAgIC8vQ2hlY2sgdGhlIHN0YXRlUGFyYW1zXG4gICAgLy9TcGVjaWZpY2FsbHksIHNlZSBhYm91dCB0aGUgbGFiZWwgcHJvcGVydGllcyBiZWluZyBjaGVja2VkLlxuXG4gICAgdmFyIGNoZWNrZWQ7XG5cbiAgICAvL1NlZSBpZiB3ZSBzaG91bGQgc2hvdyB0aGVtZSBiYWRnZXMvYnViYmxlcyBvciBub3RcbiAgICBpZigkc3RhdGVQYXJhbXMudGhlbWVsYWJlbHMgIT09IG51bGwgJiYgJHN0YXRlUGFyYW1zLnRoZW1lbGFiZWxzICE9PSB1bmRlZmluZWQpe1xuICAgICAgY2hlY2tlZCA9ICRzdGF0ZVBhcmFtcy50aGVtZWxhYmVscztcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgIC8vaWYgbm90IHByZXNlbnQsIGRlZmF1bHQgdG8gdHJ1ZVxuICAgICAgY2hlY2tlZCA9ICd0cnVlJztcbiAgICB9XG5cbiAgICAkc2NvcGUudGhlbWVMYWJlbHMgPSB7IGlzQ2hlY2tlZDogKGNoZWNrZWQgPT0gJ3RydWUnID8gdHJ1ZSA6IGZhbHNlKSB9O1xuXG4gICAgLy9TZWUgd2hpY2gsIGlmIGFueSwgZ2FkbSBsZXZlbHMgaXMgYWN0aXZlXG4gICAgaWYoJHJvb3RTY29wZS5sZXZlbCl7XG4gICAgICAkc2NvcGUuZ2FkbUxldmVsID0gJHJvb3RTY29wZS5sZXZlbDtcbiAgICB9XG5cbiAgfSk7XG5cblxuICAkc2NvcGUudG9nZ2xlTWFwTGF5ZXIgPSBmdW5jdGlvbiAobGF5ZXJLZXksIGxheWVyKSB7XG5cbiAgICAvLyBhZGQgbGF5ZXJcbiAgICBpZiAobGF5ZXIuYWN0aXZlID09PSB0cnVlKSB7XG4gICAgICAkc2NvcGUubWFwTGF5ZXJzLnB1c2gobGF5ZXJLZXkpO1xuXG4gICAgLy8gcmVtb3ZlIGxheWVyXG4gICAgfSBlbHNlIHtcbiAgICAgICRzY29wZS5tYXBMYXllcnMgPSAkLmdyZXAoJHNjb3BlLm1hcExheWVycywgZnVuY3Rpb24ocm91dGVMYXllcil7XG4gICAgICAgIHJldHVybiByb3V0ZUxheWVyICE9PSBsYXllcktleTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgICRzdGF0ZVBhcmFtcy5sYXllcnMgPSAkc2NvcGUubWFwTGF5ZXJzLmpvaW4oJywnKTtcbiAgICB2YXIgc3RhdGUgPSAkc3RhdGUuY3VycmVudC5uYW1lIHx8ICdtYWluJztcbiAgICAkc3RhdGUuZ28oc3RhdGUsICRzdGF0ZVBhcmFtcyk7XG5cbiAgfTtcblxuXG4gICRzY29wZS5saXN0R2lzdHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgJHNjb3BlLmdpc3RzID0gZ2lzdHMuZmV0Y2goKTtcbiAgICBpZiAoJHNjb3BlLmdpc3RzKSB7XG4gICAgICAkc2NvcGUubnVtR2lzdHMgPSBPYmplY3Qua2V5cygkc2NvcGUuZ2lzdHMpLmxlbmd0aDtcbiAgICB9IGVsc2Uge1xuICAgICAgJHNjb3BlLm51bUdpc3RzID0gMDtcbiAgICB9XG4gIH07XG4gICRzY29wZS5saXN0R2lzdHMoKTtcbiAgZGVidWcuZ2lzdHNMYXllcnNQYW5lbCA9ICRzY29wZS5naXN0cztcblxuICAkc2NvcGUuc2VhcmNoTGF5ZXJzID0gJHNjb3BlLmFsbExheWVycztcblxuICAkc2NvcGUuc2VhcmNoID0gZnVuY3Rpb24oc2VhcmNoVGV4dCkge1xuICAgIHZhciBsYXllcnMgPSAkc2NvcGUuYWxsTGF5ZXJzO1xuICAgIGlmICh0eXBlb2Ygc2VhcmNoVGV4dCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHNlYXJjaFRleHQgPSBzZWFyY2hUZXh0LnRvTG93ZXJDYXNlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICRzY29wZS5zZWFyY2hMYXllcnMgPSBsYXllcnM7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciBzZWFyY2hMYXllcnMgPSB7fTtcbiAgICBmb3IgKHZhciBrIGluIGxheWVycykge1xuICAgICAgdmFyIGwgPSBsYXllcnNba107XG4gICAgICBmb3IgKHZhciBrMiBpbiBsKSB7XG4gICAgICAgIHZhciB2YWwgPSBsW2syXS50b1N0cmluZygpO1xuICAgICAgICBpZiAodmFsLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihzZWFyY2hUZXh0KSA+IC0xKSB7XG4gICAgICAgICAgc2VhcmNoTGF5ZXJzW2tdID0gbDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdmFyIHByb3BzID0gbC5wcm9wZXJ0aWVzO1xuICAgICAgaWYgKHByb3BzKSB7XG4gICAgICAgIGZvciAodmFyIGszIGluIHByb3BzKSB7XG4gICAgICAgICAgdmFyIHZhbCA9IHByb3BzW2szXS50b1N0cmluZygpO1xuICAgICAgICAgIGlmICh2YWwudG9Mb3dlckNhc2UoKS5pbmRleE9mKHNlYXJjaFRleHQpID4gLTEpIHtcbiAgICAgICAgICAgIHNlYXJjaExheWVyc1trXSA9IGw7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgJHNjb3BlLnNlYXJjaExheWVycyA9IHNlYXJjaExheWVycztcbiAgfTtcblxuICAvKlxuICAgSGFuZGxpbmcgVGhlbWUgTWVudSBBbmltYXRpb25zXG4gICAqL1xuXG4gICRzY29wZS50b2dnbGVCTGV2ZWxNZW51ID0gZnVuY3Rpb24oKXtcbiAgICB2YXIgZmxpcHBlZE91dCA9ICQoXCIubWVudS1zZWxlY3Rpb24gLmRyb3Bkb3duXCIpLmhhc0NsYXNzKFwib3BlblwiKTtcblxuICAgIGlmKGZsaXBwZWRPdXQgPT0gZmFsc2Upe1xuICAgICAgJHNjb3BlLnVuZnVybFRoZW1lcygpO1xuICAgIH1cbiAgICBlbHNle1xuICAgICAgJHNjb3BlLnJlZnVybFRoZW1lcygpO1xuICAgIH1cbiAgfTtcblxuICAkc2NvcGUudW5mdXJsVGhlbWVzID0gZnVuY3Rpb24oKXtcbiAgICAkc2NvcGUucmVmdXJsVGhlbWVzKCk7XG4gICAgLy9UcnkgalF1ZXJ5IHRvIGFkZCBhbiAnb24nIGNsYXNzIHRvIGVhY2ggb2YgdGhlIHRoZW1lIExJIGVsZW1lbnRzIG9uIGEgdGltZXIuXG4gICAgJCgkKCcjQkxldmVsTWVudSBsaScpLmdldCgpLnJldmVyc2UoKSkuZWFjaChmdW5jdGlvbihpbmRleCl7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJChzZWxmKS5hZGRDbGFzcyhcInRoZW1lLXNlbGVjdG9yLWxpLW9uXCIpO1xuICAgICAgfSwgaW5kZXgqMTAwKTtcbiAgICB9KTtcbiAgfTtcblxuICAvL1JlZnVybD9cbiAgJHNjb3BlLnJlZnVybFRoZW1lcyA9IGZ1bmN0aW9uKCl7XG4gICAgLy9UcnkgalF1ZXJ5IHRvIHJlbW92ZSB0aGUgJ29uJyBjbGFzcyB0byBlYWNoIG9mIHRoZSB0aGVtZSBMSSBlbGVtZW50cyBvbiBhIHRpbWVyLlxuICAgICQoJyNCTGV2ZWxTZWxlY3Rvck1lbnUgLmRyb3Bkb3duLW1lbnUgbGknKS5yZW1vdmVDbGFzcyhcInRoZW1lLXNlbGVjdG9yLWxpLW9uXCIpO1xuICB9O1xuXG4gIC8qXG4gICBFbmQgVGhlbWUgTWVudSBBbmltYXRpb25zXG4gICAqL1xuXG59KTtcblxuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IE5pY2hvbGFzIEhhbGxhaGFuIDxuaGFsbGFoYW5Ac3BhdGlhbGRldi5jb20+XG4gKiAgICAgICBvbiAzLzI3LzE0LlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ0dlb0FuZ3VsYXInKS5jb250cm9sbGVyKCdMZWdlbmRDdHJsJywgZnVuY3Rpb24oJHNjb3BlLCBMYXllckNvbmZpZywgJHN0YXRlUGFyYW1zKSB7XG5cbiAgJHNjb3BlLmZvbGQgPSBmYWxzZTtcblxuICAvL3RoZW1lTG9va3VwIGlzIHVzZWQgdG8gZGlzcGxheSB0aGUgbGFiZWwgaW4gdGhlIG1hcCBsZWdlbmQgaW4gdGhlIGJvdHRvbSBsZWZ0LlxuICAvL1NvIHRoZSBsYWJlbCB3aWxsIGRldmlhdGUgZnJvbSB0aGUgYWN0dWFsIG5hbWUgb2YgdGhlIHRoZW1lLiAgRm9yIHByb2plY3QgcmlzaywgZm9yIGV4YW1wbGUsIHdlIHdhbnQgdGhlIGxhYmVsIHRvIHNheSBDaXJjbGUgPSAjIG9mIHByb2plY3RzLCBub3QgIyBvZiBwcm9qZWN0IHJpc2suXG4gIHZhciB0aGVtZUxvb2t1cCA9IHtcbiAgICBkaXNhc3RlcjogeyBuYW1lOiAnRGlzYXN0ZXJzJywgbGFiZWw6ICcjIG9mIERpc2FzdGVycyd9LFxuICAgIHByb2plY3Q6IHsgbmFtZTogJ1Byb2plY3RzJywgbGFiZWw6ICcjIG9mIFByb2plY3RzJ30sXG4gICAgcHJvamVjdEhlYWx0aDogeyBuYW1lOiAnUHJvamVjdCBIZWFsdGgnLCBsYWJlbDogJyMgb2YgUHJvamVjdHMnfSxcbiAgICBwcm9qZWN0UmlzazogeyBuYW1lOiAnUHJvamVjdCBSaXNrJywgbGFiZWw6ICcjIG9mIFByb2plY3RzJ30sXG4gICAgZGlzYXN0ZXJUeXBlOiB7IG5hbWU6ICdEaXNhc3RlciBUeXBlJywgbGFiZWw6ICcjIG9mIERpc2FzdGVycyd9XG4gIH07XG5cbiAgJHNjb3BlLiRvbignbGF5ZXJzLXVwZGF0ZScsIGZ1bmN0aW9uIChldnQsIGxheWVycykge1xuICAgICRzY29wZS5sYXllcnMgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gbGF5ZXJzLmxlbmd0aCAtIDE7IGkgPj0gMTsgaS0tKXtcbiAgICAgIHZhciBsID0gbGF5ZXJzW2ldO1xuICAgICAgdmFyIGxheWVyID0ge307XG4gICAgICB2YXIgbGNmZyA9IExheWVyQ29uZmlnLmZpbmQobCk7XG5cbiAgICAgIGlmKCFsY2ZnKXtcbiAgICAgICAgLy9leGl0IGlmIGxheWVyIG5hbWUgaXMgbm90IGluIGNvbmZpZy5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBsYXllci5hbGlhcyA9IGw7XG4gICAgICBsYXllci5uYW1lID0gbGNmZy5uYW1lO1xuICAgICAgaWYobCA9PT0gJ2dhZG0wJyB8fCBsID09PSAndGhlbWUnKXtcbiAgICAgICAgICBsYXllci5uYW1lID0gJHN0YXRlUGFyYW1zLnRoZW1lIHx8ICdQcm9qZWN0JztcbiAgICAgIH1cbiAgICAgIGlmICghbmFtZSAmJiBsY2ZnLnByb3BlcnRpZXMgJiYgbGNmZy5wcm9wZXJ0aWVzLnRpdGxlKSB7XG4gICAgICAgIGxheWVyLm5hbWUgPSBsY2ZnLnByb3BlcnRpZXMudGl0bGU7XG4gICAgICB9IGVsc2UgaWYgKCFsYXllci5uYW1lKSB7XG4gICAgICAgIGxheWVyLm5hbWUgPSBsO1xuICAgICAgfVxuXG4gICAgICBpZihsY2ZnLnByb3BlcnRpZXMpe1xuICAgICAgICAgIGlmKGxjZmcucHJvcGVydGllcy5sZWdlbmQpe1xuICAgICAgICAgICAgICBpZih0eXBlb2YgbGNmZy5wcm9wZXJ0aWVzLmxlZ2VuZCA9PT0gJ2Z1bmN0aW9uJyl7XG4gICAgICAgICAgICAgICAgICAgIC8vQnVpbGQgdGhlIGxlZ2VuZCBlbGVtZW50XG4gICAgICAgICAgICAgICAgICAgIGxheWVyLmFjdGl2ZUxlZ2VuZCA9IGxjZmcucHJvcGVydGllcy5sZWdlbmQoJHN0YXRlUGFyYW1zLnRoZW1lIHx8ICdwcm9qZWN0Jyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgIC8vSWYgbGVnZW5kIGlzIGEgc3RyaW5nLCB1c2UgaXQgZGlyZWN0bHlcbiAgICAgICAgICAgICAgICAgIGxheWVyLmFjdGl2ZUxlZ2VuZCA9IGxjZmcucHJvcGVydGllcy5sZWdlbmQ7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgLy9ObyBsZWdlbmQgZGVmaW5lZC4gIFVzZSBhIGRlZmF1bHQuXG5cbiAgICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgICRzY29wZS5sYXllcnMucHVzaChsYXllcik7XG4gICAgfVxuICB9KTtcblxuICAkc2NvcGUuJG9uKCdsZWdlbmQtd2lkdGgnLCBmdW5jdGlvbiAoZXZ0LGx3KXtcbiAgICAkc2NvcGUud2lkdGggPSBsdy53aWR0aDtcbiAgICAkc2NvcGUuZm9sZCA9IGx3LmZvbGQ7XG4gICAgaWYobHcud2lkdGg+PTQzNSB8fCBsdy5mb2xkID09IHRydWUpe1xuICAgICAgJHNjb3BlLmZvbGQgPSB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgJHNjb3BlLiRvbigndGhlbWUtdXBkYXRlJywgZnVuY3Rpb24oKXtcbiAgICAkc2NvcGUudGhlbWVMYWJlbCA9ICcnO1xuICAgIGlmKCRzdGF0ZVBhcmFtcy50aGVtZSAhPT0gbnVsbCAmJiAkc3RhdGVQYXJhbXMudGhlbWUgIT09IFwiXCIpIHtcbiAgICAgICRzY29wZS50aGVtZUxhYmVsID0gdGhlbWVMb29rdXBbJHN0YXRlUGFyYW1zLnRoZW1lXS5sYWJlbDtcbiAgICB9XG4gIH0pO1xuXG4gIC8qXG4gICBTZXQgdGhlIGRpY3Rpb25hcnkgdXNlZCB0byBsb29rIHVwIFVOT0NIQSBpY29ucyBmb3IgZGlzYXN0ZXIgdHlwZXNcbiAgICovXG4gIHZhciBvcGFjaXR5ID0gXCIwLjVcIlxuICAkc2NvcGUuVU5PQ0hBSWNvbkxvb2t1cCA9IHtcblxuICAgIFwiTWV0ZW9yb2xvZ2ljYWwgLSBUcm9waWNhbCBDeWNsb25lXCI6IHtpY29uOiBcImljb24tZGlzYXN0ZXJfY3ljbG9uZVwiLCBjb2xvcjogXCJyZ2JhKDI1NSwwLDAsXCIgKyBvcGFjaXR5ICsgXCIpXCJ9LFxuICAgIFwiRmxvb2RzXCI6IHtpY29uOiBcImljb24tZGlzYXN0ZXJfZmxvb2RcIiwgY29sb3I6IFwicmdiYSgyNTUsMCwwLFwiICsgb3BhY2l0eSArIFwiKVwifSxcbiAgICBcIlRzdW5hbWksIFZvbGNhbm9cIjoge2ljb246IFwiaWNvbi1kaXNhc3Rlcl90c3VuYW1pXCIsIGNvbG9yOiBcInJnYmEoMjU1LDAsMCxcIiArIG9wYWNpdHkgKyBcIilcIn0sXG4gICAgXCJGbG9vZHMsIFN0b3JtXCI6IHtpY29uOiBcImljb24tZGlzYXN0ZXJfZmxvb2RcIiwgY29sb3I6IFwicmdiYSgyNTUsMCwwLFwiICsgb3BhY2l0eSArIFwiKVwifSxcbiAgICBcIlRzdW5hbWlcIjoge2ljb246IFwiaWNvbi1kaXNhc3Rlcl90c3VuYW1pXCIsIGNvbG9yOiBcInJnYmEoMjU1LDAsMCxcIiArIG9wYWNpdHkgKyBcIilcIn0sXG4gICAgXCJGYW1pbmUgLyBGb29kIEluc2VjdXJpdHlcIjoge2ljb246IFwiaWNvbi1jbHVzdGVyX2Zvb2Rfc2VjdXJpdHlcIiwgY29sb3I6IFwicmdiYSgyNTUsMCwwLFwiICsgb3BhY2l0eSArIFwiKVwifSxcbiAgICBcIkRyb3VnaHRcIjoge2ljb246IFwiaWNvbi1kaXNhc3Rlcl9kcm91Z2h0XCIsIGNvbG9yOiBcInJnYmEoMjU1LDAsMCxcIiArIG9wYWNpdHkgKyBcIilcIn0sXG4gICAgXCJNZXRlb3JvbG9naWNhbCAtIFRyb3BpY2FsIEN5Y2xvbmU7SHlkcm9sb2dpY2FsIC0gRmxvb2RzXCI6IHtpY29uOiBcImljb24tZGlzYXN0ZXJfY3ljbG9uZVwiLCBjb2xvcjogXCJyZ2JhKDI1NSwwLDAsXCIgKyBvcGFjaXR5ICsgXCIpXCJ9LFxuICAgIFwiRm9vZCBJbnNlY3VyaXR5XCI6IHtpY29uOiBcImljb24tY2x1c3Rlcl9mb29kX3NlY3VyaXR5XCIsIGNvbG9yOiBcInJnYmEoMjU1LDAsMCxcIiArIG9wYWNpdHkgKyBcIilcIn0sXG4gICAgXCJDaXZpbCBVbnJlc3RcIjoge2ljb246IFwiaWNvbi1wZW9wbGVfcmViZWxcIiwgY29sb3I6IFwicmdiYSgyNTUsMCwwLFwiICsgb3BhY2l0eSArIFwiKVwifSxcbiAgICBcIkZsb29kcywgVHJvcGljYWwgU3Rvcm1cIjoge2ljb246IFwiaWNvbi1kaXNhc3Rlcl9mbG9vZFwiLCBjb2xvcjogXCJyZ2JhKDI1NSwwLDAsXCIgKyBvcGFjaXR5ICsgXCIpXCJ9LFxuICAgIFwiQ29tcGxleCBFbWVyZ2VuY3lcIjoge2ljb246IFwiaWNvbi1jcmlzaXNfY29uZmxpY3RcIiwgY29sb3I6IFwicmdiYSgyNTUsMCwwLFwiICsgb3BhY2l0eSArIFwiKVwifSxcbiAgICBcIkVwaWRlbWljXCI6IHtpY29uOiBcImljb24tZGlzYXN0ZXJfZXBpZGVtaWNcIiwgY29sb3I6IFwicmdiYSgyNTUsMCwwLFwiICsgb3BhY2l0eSArIFwiKVwifSxcbiAgICBcIlBvcHVsYXRpb24gTW92ZW1lbnRcIjoge2ljb246IFwiaWNvbi1jcmlzaXNfcG9wdWxhdGlvbl9kaXNwbGFjZW1lbnRcIiwgY29sb3I6IFwicmdiYSgyNTUsMCwwLFwiICsgb3BhY2l0eSArIFwiKVwifSxcbiAgICBcIkNsaW1hdG9sb2dpY2FsIC0gRHJvdWdodFwiOiB7aWNvbjogXCJpY29uLWRpc2FzdGVyX2Ryb3VnaHRcIiwgY29sb3I6IFwicmdiYSgyNTUsMCwwLFwiICsgb3BhY2l0eSArIFwiKVwifSxcbiAgICBcIldpbnRlciBTdG9ybVwiOiB7aWNvbjogXCJpY29uLWRpc2FzdGVyX3Nub3dmYWxsXCIsIGNvbG9yOiBcInJnYmEoMjU1LDAsMCxcIiArIG9wYWNpdHkgKyBcIilcIn0sXG4gICAgXCJUcm9waWNhbCBTdG9ybVwiOiB7aWNvbjogXCJpY29uLWRpc2FzdGVyX2hlYXZ5X3JhaW5cIiwgY29sb3I6IFwicmdiYSgyNTUsMCwwLFwiICsgb3BhY2l0eSArIFwiKVwifSxcbiAgICBcIkVhcnRocXVha2UsIFRzdW5hbWlcIjoge2ljb246IFwiaWNvbi1kaXNhc3Rlcl9lYXJ0aHF1YWtlXCIsIGNvbG9yOiBcInJnYmEoMjU1LDAsMCxcIiArIG9wYWNpdHkgKyBcIilcIn0sXG4gICAgXCJIeWRyb2xvZ2ljYWwgLSBGbG9vZHNcIjoge2ljb246IFwiaWNvbi1kaXNhc3Rlcl9mbG9vZFwiLCBjb2xvcjogXCJyZ2JhKDI1NSwwLDAsXCIgKyBvcGFjaXR5ICsgXCIpXCJ9LFxuICAgIFwiTGFuZHNsaWRlO0Zsb29kc1wiOiB7aWNvbjogXCJpY29uLWRpc2FzdGVyX2xhbmRzbGlkZVwiLCBjb2xvcjogXCJyZ2JhKDI1NSwwLDAsXCIgKyBvcGFjaXR5ICsgXCIpXCJ9LFxuICAgIFwiRWFydGhxdWFrZVwiOiB7aWNvbjogXCJpY29uLWRpc2FzdGVyX2VhcnRocXVha2VcIiwgY29sb3I6IFwicmdiYSgyNTUsMCwwLFwiICsgb3BhY2l0eSArIFwiKVwifSxcbiAgICBcIkxhbmRzbGlkZTtIeWRyb2xvZ2ljYWwgLSBGbG9vZHNcIjoge2ljb246IFwiaWNvbi1kaXNhc3Rlcl9sYW5kc2xpZGVcIiwgY29sb3I6IFwicmdiYSgyNTUsMCwwLFwiICsgb3BhY2l0eSArIFwiKVwifVxuXG4gIH1cblxufSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdHZW9Bbmd1bGFyJykuY29udHJvbGxlcignTWFpbkN0cmwnLCBmdW5jdGlvbigkc2NvcGUsICRyb290U2NvcGUsICRzdGF0ZSwgJHN0YXRlUGFyYW1zLCAkbG9jYXRpb24pIHtcbiAgZGVidWcuJGxvY2F0aW9uID0gJGxvY2F0aW9uO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbWFwZm9saW9Sb3V0ZScsICRsb2NhdGlvbi5wYXRoKCkpO1xuXG4gIC8vIE5IIFRPRE86IFNlZSBpZiB0aGlzIGlzIGFsc28gdGhlIGNhc2Ugd2l0aCB1aS1yb3V0ZXI/XG4gIC8vIHdlaXJkIGJ1ZyB3aGVyZSByZWRpcmVjdCBwZWVscyBvdXQgJzovL3tzJyB3aGVuICc6JyBpcyB0aGVyZVxuICAvLyAkcm91dGVQYXJhbXMubGF5ZXJzIFdlIGp1c3QgZG9udCBoYXZlIHRoZSA6IGluIG1haW4uanMgc28gdGhhdFxuICAvLyBwYXJ0IG9mIHRoZSBwYXRoIGRvZXMgbm90IGdvIGF3YXkuLi5cbiAgdmFyIGxheWVyc1N0ciA9ICRzdGF0ZVBhcmFtcy5sYXllcnMgPSAkc3RhdGVQYXJhbXMubGF5ZXJzLnJlcGxhY2UoJ2h0dHAvLycsICdodHRwOi8vJyk7XG4gIHZhciB0aGVtZVN0ciA9ICRzdGF0ZVBhcmFtcy50aGVtZTtcbiAgdmFyIGZpbHRlcnNTdHIgPSAkc3RhdGVQYXJhbXMuZmlsdGVycztcbiAgdmFyIGNhdGVnb3J5U3RyID0gJHN0YXRlUGFyYW1zLmNhdGVnb3J5OyAvLyBsYXllciBjYXRlZ29yeSBvcGVuXG4gIHZhciB0aGVtZUxhYmVsU3RyID0gJHN0YXRlUGFyYW1zLnRoZW1lbGFiZWxzOyAvLyB0aGVtZWxhYmVscyAoYnViYmxlcylcbiAgdmFyIGZ1bGxzY3JlZW4gPSAkc3RhdGVQYXJhbXMuZnVsbHNjcmVlbjsgLy93aGV0aGVyIG9yIG5vdCB0aGUgYXBwIGlzIGluIGZ1bGxzY3JlZW4gbW9kZVxuXG4gIHZhciBsZXZlbFN0ciA9ICRzdGF0ZVBhcmFtcy5sZXZlbDtcbiAgdmFyIHpvb21TdHIgPSAkc3RhdGVQYXJhbXMuem9vbTtcbiAgJHJvb3RTY29wZS4kYnJvYWRjYXN0KCdyb3V0ZS11cGRhdGUnKTtcblxuICAvKipcbiAgICogT25seSBpZiB0aGUgbGF0ZXN0IHJvdXRlIGhhcyBhIGRpZmZlcmVudCBsYXllciBzdHJpbmcgdGhhbiBiZWZvcmUuXG4gICAqL1xuICBpZiAobGF5ZXJzU3RyICE9PSB3aW5kb3cucHJldkxheWVyc1N0cikge1xuICAgIHdpbmRvdy5wcmV2TGF5ZXJzU3RyID0gbGF5ZXJzU3RyO1xuICAgIHZhciBsYXllcnMgPSBsYXllcnNTdHIuc3BsaXQoJywnKTtcbiAgICAkcm9vdFNjb3BlLiRicm9hZGNhc3QoJ2xheWVycy11cGRhdGUnLCBsYXllcnMpO1xuICB9XG5cbiAgaWYgKGxldmVsU3RyICE9PSBudWxsICYmIGxldmVsU3RyICE9PSB3aW5kb3cucHJldkxldmVsU3RyKSB7XG4gICAgd2luZG93LnByZXZMZXZlbFN0ciA9IGxldmVsU3RyO1xuICAgICRyb290U2NvcGUuJGJyb2FkY2FzdCgnbGV2ZWwtdXBkYXRlJywgbGV2ZWxTdHIpO1xuICB9XG5cbiAgaWYgKHpvb21TdHIgIT09IHdpbmRvdy5wcmV2Wm9vbVN0cikge1xuICAgIHdpbmRvdy5wcmV2Wm9vbVN0ciA9IHpvb21TdHI7XG4gICAgJHJvb3RTY29wZS4kYnJvYWRjYXN0KCd6b29tLXVwZGF0ZScsIHpvb21TdHIpO1xuICB9XG5cbiAgaWYgKHRoZW1lU3RyICE9PSB3aW5kb3cucHJldnRoZW1lU3RyKSB7XG4gICAgd2luZG93LnByZXZ0aGVtZVN0ciA9IHRoZW1lU3RyO1xuICAgICRyb290U2NvcGUuJGJyb2FkY2FzdCgndGhlbWUtdXBkYXRlJywgdGhlbWVTdHIpO1xuICB9XG5cbiAgaWYgKGZpbHRlcnNTdHIgIT09IHdpbmRvdy5wcmV2ZmlsdGVyc1N0cikge1xuICAgIHdpbmRvdy5wcmV2ZmlsdGVyc1N0ciA9IGZpbHRlcnNTdHI7XG4gICAgJHJvb3RTY29wZS4kYnJvYWRjYXN0KCdmaWx0ZXJzLXVwZGF0ZScsIGZpbHRlcnNTdHIpO1xuICB9XG5cbiAgLy8gaWYgdGhlIG9wZW4gY2F0ZWdvcnkgaGFzIGNoYW5nZWQgYnJvYWRjYXN0IGNhdGVnb3J5IGhhcyBjaGFuZ2VkXG4gIGlmIChjYXRlZ29yeVN0ciAhPT0gd2luZG93LnByZXZDYXRlZ29yeVN0cikge1xuICAgIHdpbmRvdy5wcmV2Q2F0ZWdvcnlTdHIgPSBjYXRlZ29yeVN0cjtcbiAgICAkcm9vdFNjb3BlLiRicm9hZGNhc3QoJ2NhdGVnb3J5LXVwZGF0ZScsIGNhdGVnb3J5U3RyKTtcbiAgfVxuXG4gIC8vIGlmIHRoZSB0aGVtZWxhYmVscyBoYXMgY2hhbmdlZCBicm9hZGNhc3QgdGhlbWVsYWJlbHMgaGFzIGNoYW5nZWRcbiAgaWYod2luZG93LnRoZW1lTGFiZWxTdHIgIT0gdGhlbWVMYWJlbFN0cikge1xuICAgIHdpbmRvdy50aGVtZUxhYmVsU3RyID0gdGhlbWVMYWJlbFN0cjtcbiAgICAkcm9vdFNjb3BlLiRicm9hZGNhc3QoJ3RoZW1lbGFiZWxzLXVwZGF0ZScsIHRoZW1lTGFiZWxTdHIpO1xuICB9XG5cbiAgLy8gaWYgdGhlIGZ1bGxzY3JlZW4gYXR0cmlidXRlIGhhcyBjaGFuZ2VkIGJyb2FkY2FzdCBmdWxsc2NyZWVuIGhhcyBjaGFuZ2VkXG4gIGlmKHdpbmRvdy5mdWxsc2NyZWVuICE9IGZ1bGxzY3JlZW4pIHtcbiAgICB3aW5kb3cuZnVsbHNjcmVlbiA9IGZ1bGxzY3JlZW47XG4gICAgJHJvb3RTY29wZS4kYnJvYWRjYXN0KCdmdWxsc2NyZWVuLWNoYW5nZWQnLCBmdWxsc2NyZWVuKTtcbiAgfVxuXG59KTtcbiIsIi8qKlxuICogQ3JlYXRlZCBieSBOaWNob2xhcyBIYWxsYWhhbiA8bmhhbGxhaGFuQHNwYXRpYWxkZXYuY29tPlxuICogICAgIG9uIE1vbiBNYXIgMTcgMjAxNFxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ0dlb0FuZ3VsYXInKS5jb250cm9sbGVyKCdNYXBDdHJsJywgZnVuY3Rpb24gKCRzY29wZSwgJHJvb3RTY29wZSwgJHN0YXRlLCAkc3RhdGVQYXJhbXMsIExheWVyQ29uZmlnLCBWZWN0b3JQcm92aWRlciwgJGh0dHAsICRzY2UpIHtcbiAgdmFyIG1hcCA9IEwubWFwKCdtYXAnLCB7d29ybGRDb3B5SnVtcDogdHJ1ZX0pO1xuICB2YXIgZmlyc3RMb2FkID0gdHJ1ZTtcblxuICAkc2NvcGUucGFyYW1zID0gJHN0YXRlUGFyYW1zO1xuICAkc2NvcGUuYmx1ciA9ICcnO1xuICAkc2NvcGUuZ3JheW91dCA9ICcnOyAvL3VzZSB0aGlzIGNsYXNzIHRvIGdyYXkgb3V0IHRoZSBtYXAsIHN1Y2ggYXMgd2hlbiB0aGUgY291bnRyeSBzZWxlY3RvciBtZW51IGlzIGFjdGl2ZVxuICAkc2NvcGUubGVnZW5kT2JqZWN0ID0ge307IC8vV2hlbiBQQkYgbGF5ZXJzIGFyZSBkcmF3biwgZ3JhYiB0aGUgbGVnZW5kT2JqZWN0IG91dCBvZiBpdCBzbyB3ZSBrbm93IHdoYXQgY2xhc3NlcyBhcmUgYmVpbmcgZHJhd24gb24gdGhlIG1hcFxuXG4gIC8vQWRkIHJlZnJlc2ggbWFwcCBjb250cm9sXG4gIGFkZFJlZnJlc2hNYXBDb250cm9sKCk7XG5cbiAgJHNjb3BlLnRvZ2dsZVN0YXRlID0gZnVuY3Rpb24gKHN0YXRlTmFtZSkge1xuICAgIHZhciBzdGF0ZSA9ICRzdGF0ZS5jdXJyZW50Lm5hbWUgIT09IHN0YXRlTmFtZSA/IHN0YXRlTmFtZSA6ICdtYWluJztcbiAgICAkc3RhdGUuZ28oc3RhdGUsICRzdGF0ZVBhcmFtcyk7XG4gIH07XG5cbiAgdmFyIGxhc3RMYXllcnNTdHIgPSAnJztcbiAgdmFyIGxheWVyRGlmZmVyZW5jZTsgLy9hbiBvYmplY3QgdGhhdCBzdG9yZXMgd2hldGhlciBvciBub3QgbmV3IGxheWVycyBhcmUgYWRkZWQsIG9yIGhhdmUgYmVlbiByZW1vdmVkLCBhbmQgd2hhdCB0aGVpciBuYW1lcyBhcmVcbiAgdmFyIGxhc3RCYXNlbWFwVXJsID0gbnVsbDtcbiAgdmFyIGJhc2VtYXBMYXllciA9IG51bGw7XG4gIHZhciBsYXllcnNTdHIgPSBudWxsO1xuICB2YXIgb3ZlcmxheU5hbWVzID0gW107XG4gIHZhciBvdmVybGF5cyA9IFtdO1xuICB2YXIgb3ZlcmxheXNfZGljdGlvbmFyeSA9IHt9O1xuICB2YXIgdGhlbWUgPSBudWxsO1xuICB2YXIgZmlsdGVycyA9IG51bGw7XG5cbiAgZnVuY3Rpb24gcmVkcmF3KCkge1xuICAgIGZvcmNlR2FkbTAoKTtcbiAgICB2YXIgbGF0ID0gcGFyc2VGbG9hdCgkc3RhdGVQYXJhbXMubGF0KSB8fCAwO1xuICAgIHZhciBsbmcgPSBwYXJzZUZsb2F0KCRzdGF0ZVBhcmFtcy5sbmcpIHx8IDA7XG4gICAgdmFyIHpvb20gPSBwYXJzZUZsb2F0KCRzdGF0ZVBhcmFtcy56b29tKSB8fCA4O1xuICAgIGxheWVyc1N0ciA9ICRzdGF0ZVBhcmFtcy5sYXllcnMgfHwgTGF5ZXJDb25maWcucmVkY3Jvc3MudXJsO1xuICAgIHZhciBsYXllcnMgPSBsYXllcnNTdHIuc3BsaXQoJywnKTtcblxuICAgIC8vIGZpcnN0IGxheWVyIHNob3VsZCBhbHdheXMgYmUgdHJlYXRlZCBhcyB0aGUgYmFzZW1hcFxuICAgIHZhciBiYXNlbWFwID0gTGF5ZXJDb25maWcuZmluZChsYXllcnNbMF0pIHx8IExheWVyQ29uZmlnLnJlZGNyb3NzLnVybDtcbiAgICBpZiAodHlwZW9mIGJhc2VtYXAgPT09ICdzdHJpbmcnKSB7XG4gICAgICB2YXIgYmFzZW1hcFVybCA9IGJhc2VtYXA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBiYXNlbWFwVXJsID0gYmFzZW1hcC51cmw7XG4gICAgfVxuXG4gICAgb3ZlcmxheU5hbWVzID0gbGF5ZXJzLnNsaWNlKDEpO1xuXG4gICAgaWYgKGxhc3RCYXNlbWFwVXJsICE9PSBiYXNlbWFwVXJsICYmIHR5cGVvZiBtYXAgPT09ICdvYmplY3QnKSB7XG4gICAgICBpZiAoYmFzZW1hcExheWVyKSB7XG4gICAgICAgIG1hcC5yZW1vdmVMYXllcihiYXNlbWFwTGF5ZXIpO1xuICAgICAgfVxuICAgICAgYmFzZW1hcExheWVyID0gTC50aWxlTGF5ZXIoYmFzZW1hcFVybCkuYWRkVG8obWFwKTtcblxuICAgICAgYmFzZW1hcExheWVyLm9uKCdsb2FkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAvL01vdmUgdG8gYmFja1xuICAgICAgICBiYXNlbWFwTGF5ZXIuYnJpbmdUb0JhY2soKTtcbiAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgLy9MYXllcnMgaGF2ZSBjaGFuZ2VkLiAgRG8gc29tZXRoaW5nIGFib3V0IGl0LlxuICAgIGlmIChsYXN0TGF5ZXJzU3RyICE9PSBsYXllcnNTdHIpIHtcblxuICAgICAgLy9TZWUgaWYgbmV3IGxheWVycyBhcmUgYWRkZWQgb3IgaWYgbGF5ZXJzIG5lZWQgdG8gYmUgcmVtb3ZlZC5cbiAgICAgIHZhciBsYXN0TGF5ZXJzQXJyYXkgPSBsYXN0TGF5ZXJzU3RyLnNwbGl0KCcsJyk7XG4gICAgICB2YXIgY3VycmVudExheWVyc0FycmF5ID0gbGF5ZXJzU3RyLnNwbGl0KCcsJyk7XG5cbiAgICAgIGlmKGxhc3RMYXllcnNBcnJheS5sZW5ndGggPiBjdXJyZW50TGF5ZXJzQXJyYXkubGVuZ3RoKXtcbiAgICAgICAgLy9PbmUgb3IgbW9yZSBsYXllcnMgaGFzIGJlZW4gcmVtb3ZlZC5cbiAgICAgICAgbGF5ZXJEaWZmZXJlbmNlID0geyB0eXBlOiAncmVtb3ZlZCcsIGxpc3Q6ICQobGFzdExheWVyc0FycmF5KS5ub3QoY3VycmVudExheWVyc0FycmF5KS5nZXQoKX07XG4gICAgICB9XG4gICAgICBlbHNle1xuICAgICAgICAvL09uZSBvciBtb3JlIGxheWVycyBoYXMgYmVlbiBhZGRlZFxuICAgICAgICBsYXllckRpZmZlcmVuY2UgPSB7IHR5cGU6ICdhZGRlZCcsIGxpc3Q6ICQoY3VycmVudExheWVyc0FycmF5KS5ub3QobGFzdExheWVyc0FycmF5KS5nZXQoKX07XG5cbiAgICAgIH1cblxuICAgICAgZHJhd092ZXJsYXlzKGxheWVyRGlmZmVyZW5jZSk7XG5cbiAgICAgICRzY29wZS5kZWZhdWx0cyA9IHtcbiAgICAgICAgc2Nyb2xsV2hlZWxab29tOiB0cnVlXG4gICAgICB9O1xuXG4gICAgICAkc2NvcGUudGlsZXMgPSB7XG4gICAgICAgIHVybDogYmFzZW1hcFVybFxuICAgICAgfTtcbiAgICB9XG5cbiAgICB2YXIgYyA9ICRzY29wZS5jZW50ZXIgPSB7XG4gICAgICBsYXQ6IGxhdCxcbiAgICAgIGxuZzogbG5nLFxuICAgICAgem9vbTogem9vbVxuICAgIH07XG5cbiAgICBpZiAodHlwZW9mIG1hcCA9PT0gJ29iamVjdCcgJiYgKGMubGF0ICE9IDAgJiYgYy5sbmcgIT0gMCkpIHtcbiAgICAgIG1hcC5zZXRWaWV3KFtjLmxhdCwgYy5sbmddLCB6b29tKTtcbiAgICB9XG5cbiAgICBpZiAoKHRoZW1lICE9PSAkc3RhdGVQYXJhbXMudGhlbWUgfHwgZmlsdGVycyAhPT0gJHN0YXRlUGFyYW1zLmZpbHRlcnMpIHx8IGZpcnN0TG9hZCA9PT0gdHJ1ZSkge1xuXG4gICAgICBmaXJzdExvYWQgPSBmYWxzZTtcblxuICAgICAgLy9VcGRhdGUgbG9jYWwgdmFyaWFibGVzXG4gICAgICB0aGVtZSA9ICRzdGF0ZVBhcmFtcy50aGVtZTtcbiAgICAgIGZpbHRlcnMgPSAkc3RhdGVQYXJhbXMuZmlsdGVycztcblxuICAgICAgLy9DYWxsIHRoZSAnb25DaGFuZ2VkJyBmdW5jdGlvblxuICAgICAgb25UaGVtZUNoYW5nZWQoJHN0YXRlUGFyYW1zLnRoZW1lKTtcbiAgICAgIG9uRmlsdGVyc0NoYW5nZWQoJHN0YXRlUGFyYW1zLmZpbHRlcnMpO1xuICAgIH1cblxuICAgIGJyb2FkY2FzdEJCb3goKTtcbiAgICBsYXN0TGF5ZXJzU3RyID0gbGF5ZXJzU3RyO1xuICAgIGxhc3RCYXNlbWFwVXJsID0gYmFzZW1hcFVybDtcbiAgfVxuXG4gIC8vRm9yIHZlY3RvciB0aWxlIGNob3JvcGxldGhzLCBhc2sgZm9yIG5ldyBkYXRhIC5qc29uIGZyb20gdGhlIHNlcnZlclxuICBvblRoZW1lQ2hhbmdlZCgkc3RhdGVQYXJhbXMudGhlbWUpO1xuXG5cbiAgLyoqKlxuICAgKiBCcm9hZGNhc3QgTGlzdGVuZXJzLlxuICAgKi9cbiAgJHNjb3BlLiRvbigncm91dGUtdXBkYXRlJywgZnVuY3Rpb24gKCkge1xuICAgIGlmICgkc2NvcGUuYmx1ciA9PT0gJ2JsdXInICYmICRzdGF0ZS5jdXJyZW50Lm5hbWUgIT09ICdsYW5kaW5nJykge1xuICAgICAgJHNjb3BlLmJsdXIgPSAnJztcbiAgICB9XG5cbiAgICB2YXIgYztcbiAgICBpZiAoISRzY29wZS5jZW50ZXIpIHtcbiAgICAgIHZhciBsYXQgPSBwYXJzZUZsb2F0KCRzdGF0ZVBhcmFtcy5sYXQpIHx8IDA7XG4gICAgICB2YXIgbG5nID0gcGFyc2VGbG9hdCgkc3RhdGVQYXJhbXMubG5nKSB8fCAwO1xuICAgICAgdmFyIHpvb20gPSBwYXJzZUZsb2F0KCRzdGF0ZVBhcmFtcy56b29tKSB8fCA4O1xuXG4gICAgICBjID0gJHNjb3BlLmNlbnRlciA9IHtcbiAgICAgICAgbGF0OiBsYXQsXG4gICAgICAgIGxuZzogbG5nLFxuICAgICAgICB6b29tOiB6b29tXG4gICAgICB9O1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGMgPSAkc2NvcGUuY2VudGVyO1xuICAgIH1cblxuICAgIHZhciBsYXQgPSBjLmxhdC50b0ZpeGVkKDYpO1xuICAgIHZhciBsbmcgPSBjLmxuZy50b0ZpeGVkKDYpO1xuICAgIHZhciB6b29tID0gYy56b29tLnRvU3RyaW5nKCk7XG4gICAgaWYgKG1hcE1vdmVFbmQpIHtcbiAgICAgIG1hcE1vdmVFbmQgPSBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKCRzdGF0ZVBhcmFtcy5sYXQgIT09IGxhdFxuICAgICAgfHwgJHN0YXRlUGFyYW1zLmxuZyAhPT0gbG5nXG4gICAgICB8fCAkc3RhdGVQYXJhbXMuem9vbSAhPT0gem9vbVxuICAgICAgfHwgJHN0YXRlUGFyYW1zLmxheWVycyAhPT0gbGF5ZXJzU3RyXG4gICAgICB8fCAkc3RhdGVQYXJhbXMudGhlbWUgIT09IHRoZW1lXG4gICAgICB8fCAkc3RhdGVQYXJhbXMuZmlsdGVycyAhPT0gZmlsdGVycykge1xuXG4gICAgICBjb25zb2xlLmxvZygnbWFwLmpzIHJvdXRlLXVwZGF0ZSBVcGRhdGluZyBNYXAuLi4nKTtcbiAgICAgIHJlZHJhdygpO1xuICAgIH1cblxuICB9KTtcblxuICAkcm9vdFNjb3BlLiRvbigndGhlbWVsYWJlbHMtdXBkYXRlJywgZnVuY3Rpb24gKCkge1xuICAgIC8vQ2FsbCB0aGUgZnVuY3Rpb25cbiAgICBvblRoZW1lTGFiZWxDaGFuZ2VkKCk7XG5cbiAgICAvL1NlZSBpZiB3ZSBzaG91bGQgc2hvdyB0aGVtZSBiYWRnZXMvYnViYmxlcyBvciBub3RcbiAgICBpZigkc3RhdGVQYXJhbXMudGhlbWVsYWJlbHMgIT09IG51bGwgJiYgJHN0YXRlUGFyYW1zLnRoZW1lbGFiZWxzICE9PSB1bmRlZmluZWQpe1xuICAgICAgJHNjb3BlLnRoZW1lTGFiZWxzQ2hlY2tlZCA9ICRzdGF0ZVBhcmFtcy50aGVtZWxhYmVscztcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgIC8vaWYgbm90IHByZXNlbnQsIGRlZmF1bHQgdG8gdHJ1ZVxuICAgICAgJHNjb3BlLnRoZW1lTGFiZWxzQ2hlY2tlZCA9ICd0cnVlJztcbiAgICB9XG4gIH0pO1xuXG5cbiAgJHNjb3BlLiRvbignYmx1cicsIGZ1bmN0aW9uICgpIHtcbiAgICAkc2NvcGUuYmx1ciA9ICdibHVyJztcbiAgfSk7XG5cbiAgLy90aGlzIHRha2VzIGluIGEgV0tUIEdlb0pTT04gRXh0ZW50IGdlb21ldHJ5XG4gICRzY29wZS56b29tVG9FeHRlbnQgPSBmdW5jdGlvbiAoZXh0ZW50KSB7XG4gICAgZGVsZXRlICRzdGF0ZVBhcmFtc1snem9vbS1leHRlbnQnXTtcblxuICAgIHZhciBzb3V0aFdlc3QgPSB7bGF0OiBleHRlbnRbMF1bMV0sIGxuZzogZXh0ZW50WzBdWzBdfTtcbiAgICB2YXIgbm9ydGhFYXN0ID0ge2xhdDogZXh0ZW50WzJdWzFdLCBsbmc6IGV4dGVudFsyXVswXX07XG5cbiAgICAkc2NvcGUuYm91bmRzID0gTC5sYXRMbmdCb3VuZHMoc291dGhXZXN0LCBub3J0aEVhc3QpO1xuXG4gICAgLy9ab29tIHRvIGJvdW5kc1xuICAgIG1hcC5maXRCb3VuZHMoJHNjb3BlLmJvdW5kcyk7XG4gIH07XG5cbiAgLy9UaGlzIHRha2UgYSBsZWFmbGV0IGJvdW5kcyBvYmplY3QgYW5kIGhhbmRsZXMgaXQuXG4gIGRlbGV0ZSAkc3RhdGVQYXJhbXNbJ3pvb20tZXh0ZW50J107XG4gICRzY29wZS56b29tVG9Cb3VuZHMgPSBmdW5jdGlvbiAoYm91bmRzKSB7XG5cbiAgICAvL0J1aWxkIG5ldyBib3VuZHMgb2JqZWN0XG4gICAgJHNjb3BlLmJvdW5kcyA9IEwubGF0TG5nQm91bmRzKGJvdW5kcy5nZXRTb3V0aFdlc3QoKSwgYm91bmRzLmdldE5vcnRoRWFzdCgpKTtcblxuICAgIC8vWm9vbSB0byBib3VuZHNcbiAgICBtYXAuZml0Qm91bmRzKCRzY29wZS5ib3VuZHMpO1xuICB9O1xuXG5cbiAgZnVuY3Rpb24gYnJvYWRjYXN0QkJveCgpIHtcbiAgICAvL05IIFRPRE8gRml4bWUuIEZpbmQgYSBiZXR0ZXIgc29sdXRpb24gdGhhbiBhIHNwaW4gbG9jay5cbiAgICBpZiAoIXdhaXQpIHtcbiAgICAgIHdhaXQgPSB0cnVlO1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgLy9HZXQgdGhlIE1JTi9NQVggVGlsZSBaWVggZXh0ZW50cy5cbiAgICAgICAgLy9JZiB0aGV5IGhhdmVuJ3QgY2hhZ25lZCwgdGhlbiBkb24ndCBwcm9jZWVkLlxuXG4gICAgICAgIC8vV2hlbiB0aGUgcGFnZSBsb2Fkcywgbm8gem9vbSBvciBjZW50ZXIgaGFzIGJlZW4gc2V0LCBzbyBkb24ndCBnZXQgYm91bmRzIHVudGlsIHRoYXQgaGFzIGhhcHBlbmVkXG4gICAgICAgIGlmICghbWFwLmdldFpvb20oKSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdGlsZUJvdW5kcyA9IGdldEN1cnJlbnRUaWxlQm91bmRzKG1hcCk7XG4gICAgICAgIHZhciB6b29tID0gbWFwLmdldFpvb20oKTtcblxuICAgICAgICAkc2NvcGUuem9vbSA9IHpvb207XG4gICAgICAgIHZhciBtaW54ID0gdGlsZUJvdW5kcy5taW4ueDtcbiAgICAgICAgdmFyIG1heHggPSB0aWxlQm91bmRzLm1heC54O1xuICAgICAgICB2YXIgbWlueSA9IHRpbGVCb3VuZHMubWluLnk7XG4gICAgICAgIHZhciBtYXh5ID0gdGlsZUJvdW5kcy5tYXgueTtcblxuICAgICAgICAvL0RldGVjdCBuZWdhdGl2ZSBtaW5zIGFuZCBzZXQgdG8gMFxuICAgICAgICBpZiAobWlueCA8IDApIG1pbnggPSAwO1xuICAgICAgICBpZiAobWlueSA8IDApIG1pbnkgPSAwO1xuXG4gICAgICAgIC8vQ2hlY2sgZm9yIGV4dHJlbWUgdmFsdWVzIGdyZWF0ZXIgdGhhbiB0aGUgdGlsZSBib3VuZHNcbiAgICAgICAgdmFyIGV4dHJlbWVWYWx1ZSA9IE1hdGgucG93KDIsIHpvb20pIC0gMTtcblxuICAgICAgICBpZiAobWF4eCA+IGV4dHJlbWVWYWx1ZSkgbWF4eCA9IGV4dHJlbWVWYWx1ZTtcbiAgICAgICAgaWYgKG1heHkgPiBleHRyZW1lVmFsdWUpIG1heHkgPSBleHRyZW1lVmFsdWU7XG5cbiAgICAgICAgdmFyIHN0ciA9IHpvb20gKyBcIixcIiArIG1pbnggKyAnLCcgK1xuICAgICAgICAgIG1heHggKyAnLCcgK1xuICAgICAgICAgIG1pbnkgKyAnLCcgK1xuICAgICAgICAgIG1heHk7XG5cbiAgICAgICAgVmVjdG9yUHJvdmlkZXIudXBkYXRlQkJveChzdHIpO1xuICAgICAgICAkcm9vdFNjb3BlLmJib3ggPSBzdHI7IC8vc2F2ZSB0aGUgYmJveCBzdHJpbmcgdG8gcm9vdFNjb3BlIHNvIFZlY3RvclRpbGUgc3R5bGluZyBmdW5jdGlvbnMgaGF2ZSBhY2Nlc3NcblxuXG4gICAgICAgIHdhaXQgPSBmYWxzZTtcbiAgICAgIH0sIDE1MCk7XG4gICAgfVxuXG4gIH1cblxuICAvKipcbiAgICogUmlwcGVkIEZyb20gTGVhZmxldCBUaWxlTGF5ZXJcbiAgICogQ2FsY3VsYXRlIHRoZSBNYXgvTWluIFpZWCBUaWxlIGJvdW5kcy5cbiAgICogVXNlIHRob3NlIHRvIHNuYXAgQkJveCByZXF1ZXN0cyBzbyB3ZSBjYW4gY2FjaGUuXG4gICAqL1xuXG4gIGZ1bmN0aW9uIGdldEN1cnJlbnRUaWxlQm91bmRzKG1hcCkge1xuICAgIHZhciBib3VuZHMgPSBtYXAuZ2V0UGl4ZWxCb3VuZHMoKSxcbiAgICAgIHRpbGVTaXplID0gMjU2OyAvL1RPRE9cblxuICAgIC8vIHRpbGUgY29vcmRpbmF0ZXMgcmFuZ2UgZm9yIHRoZSBjdXJyZW50IHZpZXdcbiAgICB2YXIgdGlsZUJvdW5kcyA9IEwuYm91bmRzKFxuICAgICAgYm91bmRzLm1pbi5kaXZpZGVCeSh0aWxlU2l6ZSkuZmxvb3IoKSxcbiAgICAgIGJvdW5kcy5tYXguZGl2aWRlQnkodGlsZVNpemUpLmZsb29yKCkpO1xuXG4gICAgcmV0dXJuIHRpbGVCb3VuZHM7XG4gIH1cblxuXG4gIC8qKlxuICAgKiBOYXRpdmUgTGVhZmxldCBNYXAgT2JqZWN0XG4gICAqL1xuXG4gIHdpbmRvdy5tYXAgPSBtYXA7XG4gIG1hcC5vbignbW92ZWVuZCcsIGZ1bmN0aW9uICgpIHsgLy8gbW92ZSBpcyBnb29kIHRvb1xuICAgIHZhciBjID0gbWFwLmdldENlbnRlcigpO1xuICAgIHZhciBsYXQgPSBjLmxhdC50b0ZpeGVkKDYpO1xuICAgIHZhciBsbmcgPSBjLmxuZy50b0ZpeGVkKDYpO1xuICAgIHZhciB6b29tID0gbWFwLmdldFpvb20oKS50b1N0cmluZygpO1xuXG4gICAgaWYgKCRzdGF0ZVBhcmFtcy5sYXQgIT09IGxhdFxuICAgICAgfHwgJHN0YXRlUGFyYW1zLmxuZyAhPT0gbG5nXG4gICAgICB8fCAkc3RhdGVQYXJhbXMuem9vbSAhPT0gem9vbSkge1xuXG5cbiAgICAgICRzdGF0ZVBhcmFtcy5sYXQgPSBsYXQ7XG4gICAgICAkc3RhdGVQYXJhbXMubG5nID0gbG5nO1xuICAgICAgJHN0YXRlUGFyYW1zLnpvb20gPSB6b29tO1xuICAgICAgbWFwTW92ZUVuZCA9IHRydWU7XG4gICAgICAkc3RhdGUuZ28oJHN0YXRlLmN1cnJlbnQubmFtZSwgJHN0YXRlUGFyYW1zKTtcbiAgICAgIGJyb2FkY2FzdEJCb3goKTtcblxuICAgICAgLy9VcGRhdGUgRUNPUyBEZXRhaWxzIC0gVXN1YWxseSB0aGlzIGhhcHBlbnMgd2hlbiB0aWxlcyBmaW5pc2ggbG9hZGluZyBhZnRlciBhIHBhbi4gIEJ1dCBzb21ldGltZXMgaWYgdGhlIHRpbGVzIGFyZSBsb2FkZWQvY2FjaGVkLCB0aGVuIHRoZSBldmVudCBkb2Vzbid0IGZpcmUgYWZ0ZXIgdGhlIG1hcCBzdG9wcyBtb3ZpbmcuXG4gICAgICAvL3VwZGF0ZUVDT1NEYXRhKG92ZXJsYXlOYW1lcyk7XG4gICAgfVxuICB9KTtcblxuICBtYXAub24oJ3pvb21lbmQnLCBmdW5jdGlvbihldnQpIHtcblxuICAgIHZhciB6b29tID0gZXZ0LnRhcmdldC5nZXRab29tKCk7XG5cbiAgICAvL1doZW4gem9vbSBlbmRzLCBzd2FwIGNzcyBjbGFzcyBvbiBtYXAgZGl2LCBzbyB0aGUgbGFiZWxzIHdpbGwgY2hhbmdlIHNpemVcbiAgICAvL3JlbW92ZSBvbGQgY2xhc3NlcywganVzdCBpbiBjYXNlXG5cbiAgICAkKFwiI21hcFwiKS5yZW1vdmVDbGFzcyhcIm1lZGl1bS1sYWJlbFwiKTtcbiAgICAkKFwiI21hcFwiKS5yZW1vdmVDbGFzcyhcImxhcmdlLWxhYmVsXCIpO1xuXG5cbiAgICAvL0FkZCBhcHByb3ByaWF0ZSBjbGFzcyBiYXNkIG9uIHpvb21cbiAgICBpZiAoem9vbSA+PSAwICYmIHpvb20gPD0gNSkge1xuICAgICAgJChcIiNtYXBcIikuYWRkQ2xhc3MoXCJtZWRpdW0tbGFiZWxcIik7XG4gICAgfVxuICAgIGVsc2UgaWYgKHpvb20gPiA1ICYmIHpvb20gPD0gMTMpIHtcbiAgICAgICQoXCIjbWFwXCIpLmFkZENsYXNzKFwibGFyZ2UtbGFiZWxcIik7XG4gICAgfVxuXG4gIH0pO1xuXG4gICRyb290U2NvcGUuJHdhdGNoKCdsZXZlbCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgLy9pZiB0aGUgR0FETSBsZXZlbCBjaGFuZ2VzIChhbmQgaXMgc29tZXRoaW5nKSwgdGhlbiBuZWVkIHRvIGZldGNoIG5ldyBFQ09TIGRhdGEgZm9yIHRoaXMgdGhlbWVcbiAgICAgb25UaGVtZUNoYW5nZWQoKTtcbiAgfSk7XG5cbiAgLy9Db25uZWN0IHRoZSBsYXlvdXQgb25yZXNpemUgZW5kIGV2ZW50XG4gIHRyeSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgbWFwLmludmFsaWRhdGVTaXplKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIC8vTm90aGluZ1xuICB9XG5cblxuICAvL0RpZmZlcmVuY2Ugb2JqZWN0IHRlbGxzIHVzIHdoZXRoZXIgbmV3IGl0ZW1zIGhhdmUgYmVlbiBhZGRlZCwgb3IgaWYgbGF5ZXJzIGhhdmUgYmVlbiByZW1vdmVkLlxuICBmdW5jdGlvbiBkcmF3T3ZlcmxheXMoZGlmZmVyZW5jZU9iamVjdCkge1xuXG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IG92ZXJsYXlOYW1lcy5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICAgICAgdmFyIG92ZXJsYXlOYW1lID0gb3ZlcmxheU5hbWVzW2ldO1xuICAgICAgdmFyIGN1cnJPdmVybGF5ID0gb3ZlcmxheXNbaV07XG5cbiAgICAgIGlmIChjdXJyT3ZlcmxheSAmJiBjdXJyT3ZlcmxheS5vdmVybGF5TmFtZSA9PT0gb3ZlcmxheU5hbWUpIHtcbiAgICAgICAgY29udGludWU7IC8vIGxheWVyIGlzIGFscmVhZHkgdGhlcmUsIGNvbnRpbnVlIG9uIVxuICAgICAgfVxuXG4gICAgICAvLyByZW1vdmUgdGhlIGN1cnJlbnQgbGF5ZXIgdGhhdCBpcyBub3Qgd2hhdCBzaG91bGQgYmUgdGhhdCBsYXllciBpbiB0aGUgbGlzdFxuICAgICAgZWxzZSBpZiAoY3Vyck92ZXJsYXkgJiYgY3Vyck92ZXJsYXkuX21hcCkge1xuICAgICAgICBpZiAoY3Vyck92ZXJsYXkuZGVzdHJveVJlc291cmNlKSBjdXJyT3ZlcmxheS5kZXN0cm95UmVzb3VyY2UoKTtcbiAgICAgICAgbWFwLnJlbW92ZUxheWVyKGN1cnJPdmVybGF5KTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBNYXBuaWsgVmVjdG9yIFRpbGUgRm9ybWF0ICguUEJGKVxuICAgICAgICovXG4gICAgICBpZiAodHlwZW9mIExheWVyQ29uZmlnW292ZXJsYXlOYW1lXSA9PT0gJ29iamVjdCdcbiAgICAgICAgJiYgTGF5ZXJDb25maWdbb3ZlcmxheU5hbWVdLnR5cGUudG9Mb3dlckNhc2UoKSA9PT0gJ3BiZicpIHtcblxuICAgICAgICB2YXIgdmVjUmVzID0gVmVjdG9yUHJvdmlkZXIuY3JlYXRlUmVzb3VyY2Uob3ZlcmxheU5hbWUpO1xuICAgICAgICBpZiAodmVjUmVzKSB7XG4gICAgICAgICAgdmFyIGxheWVyID0gdmVjUmVzLmdldExheWVyKCk7XG4gICAgICAgICAgbGF5ZXIub3ZlcmxheU5hbWUgPSBvdmVybGF5TmFtZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAvL05vdCBhIHZhbGlkIGxheWVyLlxuICAgICAgICAgIGNvbnNvbGUubG9nKG92ZXJsYXlOYW1lICsgXCIgaXMgbm90IGEgbGF5ZXIgc3BlY2lmaWVkIGluIGxheWVyQ29uZmlnLmpzXCIpO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIHRyeSBmb3IgV01TIChub3QgYSB2ZWN0b3IgbGF5ZXIpXG4gICAgICAvLyBpZiB0aGluZ3MgZ2V0IG1vcmUgZmFuY3kgd2l0aCB3bXMsIGl0IHNob3VsZCBnZXQgaXRzIG93biBmYWN0b3J5XG4gICAgICBlbHNlIGlmICh0eXBlb2YgTGF5ZXJDb25maWdbb3ZlcmxheU5hbWVdID09PSAnb2JqZWN0J1xuICAgICAgICAmJiBMYXllckNvbmZpZ1tvdmVybGF5TmFtZV0udHlwZS50b0xvd2VyQ2FzZSgpID09PSAnd21zJykge1xuXG4gICAgICAgIHZhciBjZmcgPSBMYXllckNvbmZpZ1tvdmVybGF5TmFtZV07XG5cbiAgICAgICAgaWYgKGNmZykge1xuXG5cbiAgICAgICAgICB2YXIgbGF5ZXIgPSBMLnRpbGVMYXllci53bXMoY2ZnLnVybCwge1xuICAgICAgICAgICAgZm9ybWF0OiBjZmcuZm9ybWF0IHx8ICdpbWFnZS9wbmcnLFxuICAgICAgICAgICAgdHJhbnNwYXJlbnQ6IGNmZy50cmFuc3BhcmVudCB8fCB0cnVlLFxuICAgICAgICAgICAgbGF5ZXJzOiBjZmcubGF5ZXJzXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAvL05vdCBhIHZhbGlkIGxheWVyLlxuICAgICAgICAgIGNvbnNvbGUubG9nKG92ZXJsYXlOYW1lICsgXCIgaXMgbm90IGEgbGF5ZXIgc3BlY2lmaWVkIGluIGxheWVyQ29uZmlnLmpzXCIpO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cblxuICAgICAgLyoqXG4gICAgICAgKiBUaWxlcyB0aGF0IGFyZSBhbiBvdmVybGF5LiBPU00gLyBHb29nbGUgLyBNYXBuaWsgdGVuZCB0byBtYWtlIHRpbGVzIGluIHRoaXMgZm9ybWF0LlxuICAgICAgICovXG4gICAgICBlbHNlIGlmICh0eXBlb2YgTGF5ZXJDb25maWdbb3ZlcmxheU5hbWVdID09PSAnb2JqZWN0J1xuICAgICAgICAmJiBMYXllckNvbmZpZ1tvdmVybGF5TmFtZV0udHlwZS50b0xvd2VyQ2FzZSgpID09PSAneHl6Jykge1xuXG4gICAgICAgIHZhciBjZmcgPSBMYXllckNvbmZpZ1tvdmVybGF5TmFtZV07XG4gICAgICAgIGlmIChjZmcpIHtcblxuXG4gICAgICAgICAgdmFyIGxheWVyID0gTC50aWxlTGF5ZXIoY2ZnLnVybCwge1xuICAgICAgICAgICAgb3BhY2l0eTogY2ZnLm9wYWNpdHkgfHwgMC41XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAvL05vdCBhIHZhbGlkIGxheWVyLlxuICAgICAgICAgIGNvbnNvbGUubG9nKG92ZXJsYXlOYW1lICsgXCIgaXMgbm90IGEgbGF5ZXIgc3BlY2lmaWVkIGluIGxheWVyQ29uZmlnLmpzXCIpO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogVE1TIGZsaXBzIHRoZSB5LiBHZW9TZXJ2ZXIgb2Z0ZW4gc2VydmVzIHRoaXMuXG4gICAgICAgKi9cbiAgICAgIGVsc2UgaWYgKHR5cGVvZiBMYXllckNvbmZpZ1tvdmVybGF5TmFtZV0gPT09ICdvYmplY3QnXG4gICAgICAgICYmIExheWVyQ29uZmlnW292ZXJsYXlOYW1lXS50eXBlLnRvTG93ZXJDYXNlKCkgPT09ICd0bXMnKSB7XG4gICAgICAgIHZhciBjZmcgPSBMYXllckNvbmZpZ1tvdmVybGF5TmFtZV07XG5cbiAgICAgICAgaWYgKGNmZykge1xuICAgICAgICAgIHZhciBsYXllciA9IEwudGlsZUxheWVyKGNmZy51cmwsIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IGNmZy5vcGFjaXR5IHx8IDAuNSxcbiAgICAgICAgICAgIHRtczogdHJ1ZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgLy9Ob3QgYSB2YWxpZCBsYXllci5cbiAgICAgICAgICBjb25zb2xlLmxvZyhvdmVybGF5TmFtZSArIFwiIGlzIG5vdCBhIGxheWVyIHNwZWNpZmllZCBpbiBsYXllckNvbmZpZy5qc1wiKTtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBpZiBpdHMgbm90IHdtcywgaXRzIGEgdmVjdG9yIGxheWVyXG4gICAgICBlbHNlIHtcbiAgICAgICAgdmFyIHZlY1JlcyA9IFZlY3RvclByb3ZpZGVyLmNyZWF0ZVJlc291cmNlKG92ZXJsYXlOYW1lKTtcbiAgICAgICAgaWYgKHZlY1Jlcykge1xuICAgICAgICAgIHZhciBsYXllciA9IHZlY1Jlcy5nZXRMYXllcigpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIC8vTm90IGEgdmFsaWQgbGF5ZXIuXG4gICAgICAgICAgY29uc29sZS5sb2cob3ZlcmxheU5hbWUgKyBcIiBpcyBub3QgYSBsYXllciBzcGVjaWZpZWQgaW4gbGF5ZXJDb25maWcuanNcIik7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYobGF5ZXIpe1xuICAgICAgICBsYXllci5vdmVybGF5TmFtZSA9IG92ZXJsYXlOYW1lO1xuICAgICAgICBsYXllci5hZGRUbyhtYXApO1xuICAgICAgICBvdmVybGF5c1tpXSA9IGxheWVyO1xuICAgICAgICBvdmVybGF5c19kaWN0aW9uYXJ5W292ZXJsYXlOYW1lXSA9IGxheWVyOyAvL2tlZXAgYSBkaWN0aW9uYXJ5IHJlZmVyZW5jZSBmb3IgZmFzdGVyIGZldGNoaW5nIGluIFVwZGF0ZUVDT1NEYXRhXG5cbiAgICAgICAgLy9TZWUgd2hpY2ggR0FETSBsZXZlbCBpcyBjdXJyZW50bHkgbG9hZGVkIGFuZCBzdG9yZSBpdCBpbiByb290U2NvcGUgKGFzc3VtZXMgb25lIGF0IGEgdGltZSwgd2hpY2ggbWlnaHQgZ28gYXdheSBhdCBzb21lIHBvaW50KVxuICAgICAgICBpZiAoTGF5ZXJDb25maWcudGhlbWVMYXllcnMuaW5kZXhPZihvdmVybGF5TmFtZSkgPiAtMSkge1xuICAgICAgICAgIC8vV2UgaGF2ZSBvbmUgb2YgdGhlIHRoZW1lIGxheWVycyAoR0FETSksIHBhcnNlIHRoZSBuYW1lIGFuZCBmaW5kIG91dCB3aGljaCBsZXZlbCB3ZSdyZSBkZWFsaW5nIHdpdGggYXMgb3Bwb3NlZCB0byBzdG9yaW5nIGEgc2VhcHJhdGUgbGV2ZWwgc3RhdGUgcGFyYW1cbiAgICAgICAgICAvL0lmIGFyY3JlZ2lvbnMsIHRoZW4gbGV2ZWwgaXMgLTFcbiAgICAgICAgICB2YXIgbGV2ZWw7XG4gICAgICAgICAgaWYob3ZlcmxheU5hbWUgPT09ICdhcmNyZWdpb25zJyl7XG4gICAgICAgICAgICBsZXZlbCA9IC0xO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgbGV2ZWwgPSBvdmVybGF5TmFtZS5zdWJzdHJpbmcob3ZlcmxheU5hbWUubGVuZ3RoIC0gMSwgb3ZlcmxheU5hbWUubGVuZ3RoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgJHJvb3RTY29wZS5sZXZlbCA9IGxldmVsOyAvL1N0b3JlIGluIHJvb3RzY29wZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG5cbiAgICBpZihkaWZmZXJlbmNlT2JqZWN0ICYmIGRpZmZlcmVuY2VPYmplY3QudHlwZSA9PSAncmVtb3ZlZCcpe1xuICAgICAgLy8gdGhlcmUgYXJlIG1vcmUgb3ZlcmxheXMgbGVmdCBpbiB0aGUgbGlzdCwgbGVzcyBsYXllcnMgc3BlY2lmaWVkIGluIHJvdXRlXG4gICAgICAvLyB3ZSBuZWVkIHRvIHJlbW92ZSB0aG9zZSB0b28uXG4gICAgICB2YXIgaSA9IDA7XG4gICAgICBmb3IgKHZhciBsZW4yID0gb3ZlcmxheXMubGVuZ3RoOyBpIDwgbGVuMjsgKytpKSB7XG4gICAgICAgIC8vSWYgdGhlIG92ZXJsYXkgbmFtZSBleGlzdHMgaW4gdGhlIGxpc3Qgb2YgbGF5ZXJzIHRvIGJlIHJlbW92ZWQsIHRoZW4gcmVtb3ZlIGl0LlxuICAgICAgICBpZiAob3ZlcmxheXNbaV0gJiYgb3ZlcmxheXNbaV0ub3ZlcmxheU5hbWUgJiYgZGlmZmVyZW5jZU9iamVjdC5saXN0LmluZGV4T2Yob3ZlcmxheXNbaV0ub3ZlcmxheU5hbWUpID4gLTEpIHtcbiAgICAgICAgICBpZihvdmVybGF5c1tpXS5kZXN0cm95UmVzb3VyY2UpIG92ZXJsYXlzW2ldLmRlc3Ryb3lSZXNvdXJjZSgpO1xuICAgICAgICAgIG1hcC5yZW1vdmVMYXllcihvdmVybGF5c1tpXSk7XG4gICAgICAgICAgZGVsZXRlIG92ZXJsYXlzX2RpY3Rpb25hcnlbb3ZlcmxheXNbaV0ub3ZlcmxheU5hbWVdOyAvL2RlbGV0ZSBkaWN0aW9uYXJ5IHJlZmVyZW5jZSBmb3IgZmFzdGVyIGZldGNoaW5nIGluIFVwZGF0ZUVDT1NEYXRhXG4gICAgICAgICAgZGVsZXRlIG92ZXJsYXlzW2ldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cblxuICAvKipcbiAgICogV2hlbiB0aGUgdGhlbWUgbGFiZWwgc3RhdGUgY2hhbmdlcywgdGhpcyBmdW5jdGlvbiB3aWxsIGJlIGZpcmVkLlxuICAgKiBAcGFyYW0gdGhlbWVcbiAgICovXG4gIGZ1bmN0aW9uIG9uVGhlbWVMYWJlbENoYW5nZWQoKSB7XG5cbiAgICAvL0ZpbmQgdGhlIGN1cnJlbnQgdGhlbWUgbGV2ZWwsIGlmIGFueVxuICAgIHZhciBsZXZlbCA9ICRyb290U2NvcGUubGV2ZWw7IC8vc2V0IGluIGRyYXdvdmVybGF5c1xuXG4gICAgaWYoIWxldmVsKSByZXR1cm47IC8vbm8gdGhlbWVcblxuICAgIHZhciBsYXllciA9IG92ZXJsYXlzX2RpY3Rpb25hcnlbXCJnYWRtXCIgKyBsZXZlbF07XG5cbiAgICBpZiAobGF5ZXIpIHtcbiAgICAgIHJlZHJhd1RoZW1lTGF5ZXJzKGxheWVyKTtcbiAgICB9XG5cbiAgfVxuXG4gIC8qKlxuICAgKiBXaGVuIHRoZSB0aGVtZSBjaGFuZ2VzLCB0aGlzIGZ1bmN0aW9uIHdpbGwgYmUgZmlyZWQuXG4gICAqIEBwYXJhbSB0aGVtZVxuICAgKi9cbiAgZnVuY3Rpb24gb25UaGVtZUNoYW5nZWQodGhlbWUpIHtcblxuICAgIGlmKCRzdGF0ZVBhcmFtcy50aGVtZSl7XG4gICAgICBmb3JjZUdhZG0wKCk7XG4gICAgfVxuXG4gICAgLy9GaW5kIHRoZSBjdXJyZW50IHRoZW1lIGxldmVsLCBpZiBhbnlcbiAgICB2YXIgbGV2ZWwgPSAkcm9vdFNjb3BlLmxldmVsOyAvL3NldCBpbiBkcmF3b3ZlcmxheXNcblxuICAgIGlmICghbGV2ZWwpIHJldHVybjsgLy9ubyB0aGVtZVxuXG4gICAgdmFyIGxheWVyO1xuXG4gICAgaWYobGV2ZWwgPT0gLTEpe1xuICAgICAgLy9BcmMgUmVnaW9uc1xuICAgICAgbGF5ZXIgPSBvdmVybGF5c19kaWN0aW9uYXJ5W1wiYXJjcmVnaW9uc1wiXTtcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgIC8vR2FkbVxuICAgICAgbGF5ZXIgPSBvdmVybGF5c19kaWN0aW9uYXJ5W1wiZ2FkbVwiICsgbGV2ZWxdO1xuICAgIH1cblxuXG4gICAgaWYgKGxheWVyKSB7XG5cbiAgICAgIGlmKCRzdGF0ZVBhcmFtcy50aGVtZS50b0xvd2VyQ2FzZSgpID09PSAnbm9uZScpe1xuICAgICAgICAgIC8vU2tpcCB0aGUgbXVtYm8ganVtYm8uICBDbGVhciB0aGUgY2FjaGVkIEVDT1MgZGF0YSBhbmQgcmVkcmF3IGVtcHR5XG4gICAgICAgICAgJHJvb3RTY29wZS52dERhdGEgPSB7fTtcbiAgICAgICAgICByZWRyYXdUaGVtZUxheWVycyhsYXllcik7XG4gICAgICB9XG4gICAgICBlbHNle1xuICAgICAgICAvL0ZvciB2ZWN0b3IgdGlsZSBjaG9yb3BsZXRocywgYXNrIGZvciBuZXcgZGF0YSAuanNvbiBmcm9tIHRoZSBzZXJ2ZXJcbiAgICAgICAgZ2V0RUNPU1Byb3BlcnRpZXMoZnVuY3Rpb24gKGRhdGEpIHtcblxuICAgICAgICAgIGlmIChkYXRhICYmIGRhdGEuZmVhdHVyZXMpIHtcblxuICAgICAgICAgICAgdmFyIGd1aWRzID0ge307XG5cbiAgICAgICAgICAgIGFuZ3VsYXIuZm9yRWFjaChkYXRhLmZlYXR1cmVzLCBmdW5jdGlvbiAoZGF0YUl0ZW0sIGRhdGFLZXkpIHtcbiAgICAgICAgICAgICAgZ3VpZHNbZGF0YUl0ZW0ucHJvcGVydGllcy5ndWlkXSA9IGRhdGFJdGVtLnByb3BlcnRpZXM7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgJHJvb3RTY29wZS52dERhdGEgPSBndWlkczsgLy9TdG9yZSB0aGUgZGF0YSB0byBiZSBtZXJnZWQgd2l0aCB2ZWN0b3IgdGlsZSBsYXllci4gIEluIGNvbmZpZy92ZWN0b3J0aWxlcy5qcywgdGhlIE1WVCBjaG9yb3BsZXRoIGxheWVycyB3aWxsIGF0dGVtcHQgdG8gbWVyZ2UgdGhpcyBkYXRhIGluIHdoZW4gdGlsZXMgZmluaXNoIGxvYWRpbmcgKGFueSB0aW1lIG5ldyB0aWxlcyBhcmUgcmVxdWVzdGVkLCBsaWtlIHpvb21pbi9vdXQvcGFuKVxuXG4gICAgICAgICAgICByZWRyYXdUaGVtZUxheWVycyhsYXllcik7XG5cbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICB9XG5cbiAgfVxuXG5cblxuICBmdW5jdGlvbiByZWRyYXdUaGVtZUxheWVycyhsYXllcil7XG4gICAgdmFyIGxheWVycyA9IGxheWVyLmdldExheWVycygpO1xuXG4gICAgaWYgKCFsYXllcnMpIHJldHVybjsgLy9ubyBsYXllcnMgaGF2ZSBsb2FkZWQgeWV0LiAgVGhpcyBuZWVkcyB0byB3YWl0IHVudGlsIHNvbWUgdGlsZXMgaGF2ZSBsb2FkZWQuXG5cbiAgICB2YXIgdnRMYXllcjtcbiAgICB2YXIgdnRMYWJlbExheWVyO1xuXG4gICAgLy9UT0RPOiBNb3ZlIHRoaXMgbG9naWMgdG8gYSBzaW5nbGUgbG9jYXRpb25cblxuICAgIHZ0TGF5ZXIgPSBsYXllcnNbXCJHQURNXzIwMTRcIl07XG4gICAgdnRMYWJlbExheWVyID0gbGF5ZXJzW1wiR0FETV8yMDE0X2xhYmVsXCJdO1xuXG5cbiAgICBpZih2dExheWVyICYmIHZ0TGF5ZXIuZmVhdHVyZXMpIHtcbiAgICAgIC8vQ2xlYXIgZWNvcyBwcm9wZXJ0eSBmcm9tIE1WVEZlYXR1cmVcbiAgICAgIGNsZWFyRmVhdHVyZVByb3BlcnRpZXModnRMYXllci5mZWF0dXJlcyk7XG4gICAgICAvL0NsZWFyIGVjb3MgcHJvcGVydHkgZnJvbSBMYWJlbCBMYXllclxuICAgICAgY2xlYXJGZWF0dXJlUHJvcGVydGllcyh2dExhYmVsTGF5ZXIuZmVhdHVyZXMpO1xuXG5cbiAgICAgIC8vVXBkYXRlIExheWVyKHMpIHN0eWxlIGFuZCByZWRyYXdcbiAgICAgIHZ0TGF5ZXIuY2xlYXJMYXllckZlYXR1cmVIYXNoKCk7IC8vRm9yY2UgVlRzIHRvIGJlIHJlcGFyc2VkLlxuICAgICAgdnRMYWJlbExheWVyLmNsZWFyTGF5ZXJGZWF0dXJlSGFzaCgpO1xuICAgIH1cblxuICAgIC8vQ2xlYXIgdGhlIE1WVCBpbnRlcm5hbCBsZWdlbmQgb2JqZWN0IGJlZm9yZSByZWRyYXdpbmdcbiAgICBpZih2dExheWVyKSB2dExheWVyLmNsZWFyTGVnZW5kT2JqZWN0KCk7XG4gICAgaWYodnRMYWJlbExheWVyKSB2dExhYmVsTGF5ZXIuY2xlYXJMZWdlbmRPYmplY3QoKTtcblxuICAgIGxheWVyLnJlZHJhdyh0cnVlKTsgLy9mYWxzZSBtZWFucyB0aGF0IHRoaXMgcmVkcmF3IHdvbid0IHRyaWdnZXIgdGhlIG9uVGlsZXNMb2FkZWQgZXZlbnQuXG5cbiAgICAvL0ZldGNoIHRoZSBsZWdlbmQgYWZ0ZXIgcmVkcmF3XG4gICAgLy9uZWVkIHRvIHdhaXQgdW50aWwgYWxsIHRpbGVzIGZpbmlzaCBkcmF3aW5nXG4gICAgbGF5ZXIub3B0aW9ucy5vblRpbGVzTG9hZGVkID0gZnVuY3Rpb24oKXtcblxuXG5cbiAgICAgIGlmKHZ0TGF5ZXIpe1xuICAgICAgICB2YXIgbGVnZW5kT2JqZWN0ID0gdnRMYXllci5nZXRMZWdlbmRPYmplY3QoKTtcbiAgICAgICAgaWYobGVnZW5kT2JqZWN0KXtcbiAgICAgICAgICAvL3NldCBpdCBlcXVhbCB0byB0aGUgc2NvcGVcblxuICAgICAgICAgICRzY29wZS4kYXBwbHkoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkc2NvcGUubGVnZW5kT2JqZWN0ID0gbGVnZW5kT2JqZWN0O1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgdmFyIG5ld0xlZ2VuZE9iamVjdCA9IHt9O1xuICAgICAgICAgIHZhciBPTkEgPSAkc2NvcGUuVU5PQ0hBSWNvbkxvb2t1cDtcblxuICAgICAgICAgIC8vIGxvb3AgdGhyb3VnaCBsZW5nZW5kIG9iamNldFxuICAgICAgICAgIC8vIGFkZCB0byBuZXcgbGVnZW5kIG9iamVjdCBpZjpcbiAgICAgICAgICAvLyAgICAxLiBsZWdlbmQgb2JqZWN0IGhhcyBPTkEgbG9va3VwIGljb25cbiAgICAgICAgICAvLyAgICAyLiBuZXcgbGVnZW5kIG9iamVjdCBkb2Vzbid0IGhhdmUgc2FtZSBPTkEgbG9va3VwIGljb25cblxuXG4gICAgICAgICAgZm9yKHZhciBpPTA7aTxPYmplY3Qua2V5cyhsZWdlbmRPYmplY3QpLmxlbmd0aDtpKyspe1xuICAgICAgICAgICAgaWYodHlwZW9mIE9OQVtPYmplY3Qua2V5cyhsZWdlbmRPYmplY3QpW2ldXSAhPT0gJ3VuZGVmaW5lZCcpe1xuICAgICAgICAgICAgICBsZWdlbmRPYmplY3RbT2JqZWN0LmtleXMobGVnZW5kT2JqZWN0KVtpXV0uaWNvbiA9IE9OQVtPYmplY3Qua2V5cyhsZWdlbmRPYmplY3QpW2ldXS5pY29uO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYodHlwZW9mIGxlZ2VuZE9iamVjdFtPYmplY3Qua2V5cyhsZWdlbmRPYmplY3QpW2ldXS5pY29uICE9PSAndW5kZWZpbmVkJykge1xuXG4gICAgICAgICAgICAgIGlmKE9iamVjdC5rZXlzKG5ld0xlZ2VuZE9iamVjdCkubGVuZ3RoPT0wKXtcbiAgICAgICAgICAgICAgICBuZXdMZWdlbmRPYmplY3RbT2JqZWN0LmtleXMobGVnZW5kT2JqZWN0KVtpXV0gPSBsZWdlbmRPYmplY3RbT2JqZWN0LmtleXMobGVnZW5kT2JqZWN0KVtpXV07XG4gICAgICAgICAgICAgIH0gZWxzZXtcblxuICAgICAgICAgICAgICAgIGZvcih2YXIgeD0wO3g8T2JqZWN0LmtleXMobmV3TGVnZW5kT2JqZWN0KS5sZW5ndGg7eCsrKXtcbiAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKGxlZ2VuZE9iamVjdCkuZm9yRWFjaChmdW5jdGlvbih2YWwpe1xuICAgICAgICAgICAgICAgICAgICBpZihuZXdMZWdlbmRPYmplY3RbT2JqZWN0LmtleXMobmV3TGVnZW5kT2JqZWN0KVt4XV0uaWNvbi5pbmRleE9mKGxlZ2VuZE9iamVjdFt2YWxdLmljb24pPT0tMSl7XG4gICAgICAgICAgICAgICAgICAgICAgbmV3TGVnZW5kT2JqZWN0W09iamVjdC5rZXlzKGxlZ2VuZE9iamVjdClbaV1dID0gbGVnZW5kT2JqZWN0W09iamVjdC5rZXlzKGxlZ2VuZE9iamVjdClbaV1dO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuXG5cbiAgICAgICAgICAkc2NvcGUubmV3TGVnZW5kT2JqZWN0ID0gbmV3TGVnZW5kT2JqZWN0O1xuXG4gICAgICAgICAgLy8gYnJvYWRjYXN0IGxlZ2VuZCB3aWR0aCBmb3IgcmVzaXplXG4gICAgICAgICAgaWYoJHN0YXRlUGFyYW1zLnRoZW1lID09ICdkaXNhc3RlclR5cGUnKXtcbiAgICAgICAgICAgICRzY29wZS5maXJzdE9iamVjdCA9IGxlZ2VuZE9iamVjdFtPYmplY3Qua2V5cyhsZWdlbmRPYmplY3QpWzBdXTtcbiAgICAgICAgICAgIHZhciBsZWdlbmRXaWR0aCA9IHt3aWR0aDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xlZ2VuZCcpLm9mZnNldFdpZHRofTtcbiAgICAgICAgICAgIGxlZ2VuZFdpZHRoLmZvbGQgPSAoT2JqZWN0LmtleXMobGVnZW5kT2JqZWN0KS5sZW5ndGggPiAyKTtcbiAgICAgICAgICAgICRyb290U2NvcGUuJGJyb2FkY2FzdCgnbGVnZW5kLXdpZHRoJywgbGVnZW5kV2lkdGgpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgICRzY29wZS50aGVtZUxhYmVsID0gJHJvb3RTY29wZS50aGVtZU5hbWVIYXNoWyRzdGF0ZVBhcmFtcy50aGVtZV07XG4gICAgICAgICAgLy8kc2NvcGUubGVnZW5kT2JqZWN0TGFiZWwgPSBsZWdlbmRPYmplY3RbT2JqZWN0LmtleXMobGVnZW5kT2JqZWN0KVswXV0ubGVnZW5kTGFiZWwucmVwbGFjZShcIiNcIixcIlwiKTsgLy9yZW1vdmUgJyMnXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYodnRMYWJlbExheWVyKXtcbiAgICAgICAgdmFyIGJ1YmJsZUxlZ2VuZE9iamVjdCA9IHZ0TGFiZWxMYXllci5nZXRMZWdlbmRPYmplY3QoKTtcbiAgICAgICAgaWYoYnViYmxlTGVnZW5kT2JqZWN0KXtcbiAgICAgICAgICAvL3NldCBpdCBlcXVhbCB0byB0aGUgc2NvcGVcbiAgICAgICAgICBpZigkc3RhdGVQYXJhbXMudGhlbWUudG9Mb3dlckNhc2UoKSA9PSBcImRpc2FzdGVydHlwZVwiKXtcbiAgICAgICAgICAgIC8vRGlzYXN0ZXIgdHlwZSBoYXMgZGlmZmVyZW50IGJ1YmJsZSBpbWFnZXNcbiAgICAgICAgICAgICRzY29wZS5idWJibGVMZWdlbmRPYmplY3QgPSBidWJibGVMZWdlbmRPYmplY3Q7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAvL090aGVyIHRoZW1lcyB1c2UgdGhlIHNhbWUgYnViYmxlIHR5cGUuXG4gICAgICAgICAgICAvL1NvIGp1c3QgZ3JhYiB0aGUgZmlyc3Qgb25lXG4gICAgICAgICAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGJ1YmJsZUxlZ2VuZE9iamVjdCk7XG4gICAgICAgICAgICBpZihidWJibGVMZWdlbmRPYmplY3Rba2V5c1swXV0gJiYgYnViYmxlTGVnZW5kT2JqZWN0W2tleXNbMF1dLm9wdGlvbnMgJiYgYnViYmxlTGVnZW5kT2JqZWN0W2tleXNbMF1dLm9wdGlvbnMuaHRtbCl7XG4gICAgICAgICAgICAgICRzY29wZS5zaW5nbGVCdWJibGVPYmplY3QgPSAkc2NlLnRydXN0QXNIdG1sKGJ1YmJsZUxlZ2VuZE9iamVjdFtrZXlzWzBdXS5vcHRpb25zLmh0bWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG5cbiAgICB9XG4gIH1cblxuXG4gIC8qKlxuICAgKiBXaGVuIHRoZSBmaWx0ZXJzIGNoYW5nZSwgdGhpcyBmdW5jdGlvbiB3aWxsIGJlIGZpcmVkLlxuICAgKiBAcGFyYW0gdGhlbWVcbiAgICovXG4gIGZ1bmN0aW9uIG9uRmlsdGVyc0NoYW5nZWQoZmlsdGVycyl7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiBGb3JjZSBnYWRtMCBvbiBhbGwgZGlzYXN0ZXIgdGhlbWVzXG4gICAqIEBwYXJhbSB0aGVtZVxuICAgKi9cbiAgZnVuY3Rpb24gZm9yY2VHYWRtMCgpe1xuICAgIC8vdmFyIHRoZW1lID0gJHN0YXRlUGFyYW1zLnRoZW1lO1xuICAgIC8vXG4gICAgLy9pZih0aGVtZS5pbmRleE9mKCdkaXNhc3RlcicpIT09LTEgJiYgJHN0YXRlUGFyYW1zLmxheWVycy5zcGxpdChcIixcIilbMV0gIT09ICdnYWRtMCcpe1xuICAgIC8vICB2YXIgbGF5ZXJzQXJyYXk7XG4gICAgLy9cbiAgICAvLyAgaWYoJHN0YXRlUGFyYW1zLmxheWVycyl7XG4gICAgLy8gICAgbGF5ZXJzQXJyYXkgPSAkc3RhdGVQYXJhbXMubGF5ZXJzLnNwbGl0KFwiLFwiKTtcbiAgICAvLyAgfVxuICAgIC8vXG4gICAgLy8gIC8vUmVtb3ZlIGFsbCBHQURNIGxheWVycy5cbiAgICAvLyAgbGF5ZXJzQXJyYXkuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUsIGtleSkge1xuICAgIC8vICAgIGlmIChMYXllckNvbmZpZy50aGVtZUxheWVycy5pbmRleE9mKHZhbHVlKSA+IC0xKSB7XG4gICAgLy8gICAgICBsYXllcnNBcnJheS5zcGxpY2UobGF5ZXJzQXJyYXkuaW5kZXhPZih2YWx1ZSksIDEpOyAvL3JlbW92ZSBhbnkgR0FETXNcbiAgICAvLyAgICB9XG4gICAgLy8gIH0pO1xuICAgIC8vXG4gICAgLy8gIC8vQWRkIGluIHRoZSBnYWRtIGxheWVyIHRvIHRoZSBsYXllcnMgbGlzdCBpbiB0aGUgc3RhdGVwYXJhbXMuXG4gICAgLy8gIGxheWVyc0FycmF5LnB1c2goXCJnYWRtMFwiKTtcbiAgICAvLyAgJHN0YXRlUGFyYW1zLmxheWVycyA9IGxheWVyc0FycmF5LmpvaW4oXCIsXCIpO1xuICAgIC8vXG4gICAgLy8gIHZhciBzdGF0ZSA9ICRzdGF0ZS5jdXJyZW50Lm5hbWUgfHwgJ21haW4nO1xuICAgIC8vICAkc3RhdGUuZ28oc3RhdGUsICRzdGF0ZVBhcmFtcyk7XG4gICAgLy99XG5cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlZHJhd01hcE92ZXJsYXlzKGxheWVyTmFtZXMpe1xuICAgIG1hcC5lYWNoTGF5ZXIoZnVuY3Rpb24gKGxheWVyKSB7XG4gICAgICBpZihsYXllck5hbWVzLmluZGV4T2YobGF5ZXIub3ZlcmxheU5hbWUpID4gLTEpe1xuICAgICAgICBsYXllci5yZWRyYXcoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUYWtlIGRhdGEvcHJvcGVydGllcyBmcm9tIHRoZSBzZXJ2ZXIgYW5kIG1lcmdlIHRoZW0gaW4gd2l0aCBhIHZlY3RvciB0aWxlcyBsYXllci5cbiAgICogQHBhcmFtIGVjb3NEYXRhIC0gdGhlIGRhdGFcbiAgICogQHBhcmFtIGxheWVyTmFtZXMgLSBhbnkgbGF5ZXIgbmFtZXMgdG8gYXBwbHkgdGhlIGRhdGEgdG9cbiAgICogQG5ld1RoZW1lIC0gYm9vbGVhbi4gSWYgdHJ1ZSwgYSBuZXcgdGhlbWUgaGFzIGJlZW4gc2VsZWN0ZWQsIHNvIGV4aXN0aW5nIFZUIHByb3BldGllcyB3aWxsIGJlIGNsZWFyZWQuICBJZiBmYWxzZSwgdGhlbiB3ZSBjYW4gc2tpcCBmZWF0dXJlcyB0aGF0IGFscmVhZHkgaGF2ZSBiZWVuICdmaWxsZWQnIGFuZCB3b3JyeSBhYm91dCBuZXcgb25lcy5cbiAgICovXG4gIGZ1bmN0aW9uIHVwZGF0ZUVDT1NEYXRhKGVjb3NEYXRhLCBuZXdUaGVtZSkge1xuXG4gICAgICB2YXIgbGF5ZXIgPSBvdmVybGF5c19kaWN0aW9uYXJ5W1wiZ2FkbTBcIl07XG5cbiAgICAgIGlmKGxheWVyKXtcbiAgICAgICAgaWYgKGVjb3NEYXRhKSB7XG4gICAgICAgICAgdmFyIGxheWVycyA9IGxheWVyLmdldExheWVycygpO1xuXG4gICAgICAgICAgLy9VcGRhdGUgVlRGU291cmNlIGZpbHRlclxuICAgICAgICAgIC8vbGF5ZXIuc2V0RmlsdGVyKGZ1bmN0aW9uKG12dCwgY3R4KXtcbiAgICAgICAgICAvLyAgLy9GaWx0ZXIgY2hlY2tzIGlmIGZlYXR1cmUgaGFzIGVjb3MgcHJvcGVydGllcy5cbiAgICAgICAgICAvLyAgcmV0dXJuICgkcm9vdFNjb3BlLnZ0RGF0YSAmJiAkcm9vdFNjb3BlLnZ0RGF0YVttdnQucHJvcGVydGllcy5ndWlkXSkgPyB0cnVlIDogZmFsc2U7XG4gICAgICAgICAgLy99KVxuXG4gICAgICAgICAgLy9JZiBhbnkgZmVhdHVyZXMgYXJlIHJldHVybmVkLCBsb29wIHRocnUgdGhlIHZ0ZnMgYW5kIGFwcGx5IHRoZXNlIHZhbHVlcywgcmVzdHlsZS5cbiAgICAgICAgICBtZXJnZUVDT1NQcm9wZXJ0aWVzKGxheWVycywgZWNvc0RhdGEsIG5ld1RoZW1lKTtcblxuXG5cbiAgICAgICAgICAvL1VwZGF0ZSBMYXllcihzKSBzdHlsZSBhbmQgcmVkcmF3XG4gICAgICAgICAgbGF5ZXIuc2V0U3R5bGUobGF5ZXIuc3R5bGUpOyAvL2ZlZWQgYmFjayBpbiB0aGUgc2FtZSBzdHlsZVxuICAgICAgICAgIGxheWVyLnJlZHJhdyhmYWxzZSk7IC8vZmFsc2UgbWVhbnMgdGhhdCB0aGlzIHJlZHJhdyB3b24ndCB0cmlnZ2VyIHRoZSBvblRpbGVzTG9hZGVkIGV2ZW50LlxuICAgICAgICB9XG4gICAgICB9XG5cbiAgfVxuXG4gIC8qKipcbiAgICpcbiAgICogV2hlbiB0aGUgYXBwIHN0YXJ0cywgb3Igd2hlbiB0aGUgZmlsdGVycyBjaGFuZ2UsIGZldGNoIHRoZSAuanNvbiBmaWxlIHRoYXQgY29udGFpbnMgdGhlIGNvdW50cyBmb3IgYWxsIG9mIHRoZSBkaXN0cmljdHMgZm9yIGEgZ2l2ZW4gQWRtaW5pc3RyYXRpdmUgYm91bmRhcnkgbGV2ZWxcbiAgICogQ3VycmVudGx5LCBlYWNoIG9mIHRoZXNlIGZpbGVzIHdpbGwgYmUgc21hbGwgZW5vdWdoIHRvIGJ1bGsgbG9hZCB0aGVtIGEgc2luZ2xlIHRpbWUsIGFzIG9wcG9zZWQgdG8gd2hlbiB0aGUgdXNlciBwYW5zIHRoZSBtYXAuXG4gICAqIFRoZXNlIGZpbGVzIHdpbGwgYmUgdXNlZCB0byB1cGRhdGUgdGhlIHZlY3RvciB0aWxlcyBjaG9yb3BsZXRoIG1hcC5cbiAgICpcbiAgICogQHBhcmFtICRodHRwXG4gICAqIEBwYXJhbSAkcm9vdFNjb3BlXG4gICAqIEBwYXJhbSBjYlxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0RUNPU1Byb3BlcnRpZXMgKGNiKXtcbiAgICAvL1RoaXMgc2hvdWxkIGZldGNoIGRhdGEgZnJvbSB0aGUgc2VydmVyIHRoYXQgcGVydGFpbnMgdG8gdGhlIGZlYXR1cmVzIGxvYWRlZCBpbiB0aGUgY3VycmVudCBleHRlbnQuXG4gICAgLy92YXIgdXJsID0gXCJodHRwOi8vbG9jYWxob3N0OjMwMDEvc2VydmljZXMvY3VzdG9tL2N1c3RvbV9vcGVyYXRpb24/bmFtZT1nZXRhZ2dyZWdhdGVkdGhlbWVmZWF0dXJlc2J5ZXh0ZW50JmZvcm1hdD1nZW9qc29uJmJib3g9OmJib3gmdGhlbWU9OnRoZW1lJmdhZG1fbGV2ZWw9MCZmaWx0ZXJzPTpmaWx0ZXJzXCI7XG5cbiAgICB2YXIgbGV2ZWwgPSAkcm9vdFNjb3BlLmxldmVsO1xuXG4gICAgaWYgKCFsZXZlbCkgcmV0dXJuOyAvL2V4aXQgaWYgbm8gbGV2ZWxcblxuICAgIHZhciB1cmwgPSBcIi4uL3NlcnZpY2VzL2N1c3RvbS9jdXN0b21fb3BlcmF0aW9uP25hbWU9Z2V0YWxsYWdncmVnYXRlZHRoZW1lZmVhdHVyZXMmZm9ybWF0PWdlb2pzb24mdGhlbWU9OnRoZW1lJmdhZG1fbGV2ZWw9XCIgKyBsZXZlbCArIFwiJmZpbHRlcnM9OmZpbHRlcnNcIjtcblxuICAgIGlmICgkcm9vdFNjb3BlLiRzdGF0ZVBhcmFtcy5maWx0ZXJzKSB7XG4gICAgICBmaWx0ZXJzID0gJHJvb3RTY29wZS4kc3RhdGVQYXJhbXMuZmlsdGVycztcbiAgICAgIC8vQWRkIGZpbHRlcnMgdG8gVVJMLlxuICAgICAgdXJsID0gdXJsLnJlcGxhY2UoXCI6ZmlsdGVyc1wiLCBmaWx0ZXJzKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB1cmwgPSB1cmwucmVwbGFjZShcIiZmaWx0ZXJzPTpmaWx0ZXJzXCIsIFwiXCIpOyAvL25vIGZpbHRlcnMuICBSZW1vdmVcbiAgICB9XG5cbiAgICB2YXIgdGhlbWUgPSAkcm9vdFNjb3BlLiRzdGF0ZVBhcmFtcy50aGVtZSB8fCAncHJvamVjdCc7XG4gICAgdXJsID0gdXJsLnJlcGxhY2UoXCI6dGhlbWVcIiwgdGhlbWUpO1xuXG4gICAgLy9XaGVuIGRvbmUsIGNhbGwgdGhlIGNiIChjYWxsYmFjaykgZnVuY3Rpb25cbiAgICAkaHR0cC5nZXQodXJsLCB7Y2FjaGU6IHRydWV9KS5zdWNjZXNzKGNiKS5lcnJvcihmdW5jdGlvbiAoZXJyKSB7XG4gICAgICBjb25zb2xlLmxvZyhcImVyclwiKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vVGFrZSBhbiBNVlRMYXllcihzKSBhbmQgYWRkIGluIHByb3BlcnRpZXMgZnJvbSBhIHdlYiBzZXJ2aWNlIGNhbGxcbiAgLy9uZXdUaGVtZSBpcyBhIGJvb2xlYW4gdGhhdCB0ZWxscyB1cyB3aGV0aGVyIHRvIGNsZWFyIGV4aXN0aW5nIHByb3BlcnRpZXMgb3Iga2VlcCB3aGF0IHdlJ3ZlIGdvdCBhbmQganVzdCBhZGQgdG8gdGhlIHNldC5cbiAgZnVuY3Rpb24gbWVyZ2VFQ09TUHJvcGVydGllcyhNVlRMYXllcnMsIGRhdGEsIG5ld1RoZW1lKXtcbiAgICBpZiAoTVZUTGF5ZXJzKSB7XG5cbiAgICAgIHZhciBmdWxsU3RhcnQgPSBuZXcgRGF0ZSgpO1xuXG4gICAgICAvL0dyYWIgdGhlIGN1cnJlbnQgdGhlbWUuXG4gICAgICB2YXIgdGhlbWUgPSAoJHJvb3RTY29wZSAmJiAkcm9vdFNjb3BlLiRzdGF0ZVBhcmFtcyAmJiAkcm9vdFNjb3BlLiRzdGF0ZVBhcmFtcy50aGVtZSkgfHwgJ3Byb2plY3QnO1xuXG4gICAgICBmb3IgKHZhciBsYXllciBpbiBNVlRMYXllcnMpIHtcbiAgICAgICAgaWYgKGxheWVyICYmIE1WVExheWVyc1tsYXllcl0uZmVhdHVyZXMpIHtcblxuICAgICAgICAgIC8vb3B0aW9uYWxseSBjbGVhciBvdXQgb2xkIEVDT1MgcHJvcGVydGllcy5cbiAgICAgICAgICBpZiAobmV3VGhlbWUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIC8vQ2xlYXIgZWNvcyBwcm9wZXJ0eSBmcm9tIE1WVEZlYXR1cmVcbiAgICAgICAgICAgIGNsZWFyRmVhdHVyZVByb3BlcnRpZXMoTVZUTGF5ZXJzW2xheWVyXS5mZWF0dXJlcyk7XG4gICAgICAgICAgICAvL1widW5saW5rXCIgdGhlIGRhdGEgLSBzZXQgdGhlIGxpbmtlZCBwcm9wZXJ0eSB0byBmYWxzZS5cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvL0l0ZXJhdGUgb3ZlciBkYXRhLCB1c2UgdGhlIElEIHRvIGF0dGVtcHQgdG8gbGluZSB1cCBkYXRhIGluIE1WVExheWVyLmZlYXR1cmVzIGRpY3Rpb25hcnkgKGlkIGlzIHRoZSBrZXkpXG4gICAgICAgICAgYW5ndWxhci5mb3JFYWNoKE9iamVjdC5rZXlzKGRhdGEpLCBmdW5jdGlvbiAoa2V5KSB7IC8vLm1hcChmdW5jdGlvbihpdGVtKXsgcmV0dXJuICFpdGVtLnByb3BlcnRpZXMuaXNNYXBwZWQ7IH0pXG4gICAgICAgICAgICB2YXIgdnRmID0gTVZUTGF5ZXJzW2xheWVyXS5mZWF0dXJlc1trZXldO1xuXG4gICAgICAgICAgICAvL21hcmsgYXMgbGlua2VkXG4gICAgICAgICAgICBkYXRhLmlzTGlua2VkID0gdHJ1ZTtcblxuICAgICAgICAgICAgaWYgKHZ0Zikge1xuICAgICAgICAgICAgICB2dGYucHJvcGVydGllcy50aGVtZSA9IHRoZW1lO1xuICAgICAgICAgICAgICB2dGYucHJvcGVydGllcy5lY29zX3Byb3BlcnRpZXMgPSB7fTtcbiAgICAgICAgICAgICAgdnRmLnByb3BlcnRpZXMuZWNvc19wcm9wZXJ0aWVzW3RoZW1lXSA9IGRhdGFba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciBtc0RpZmYgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIG5ldyBEYXRlKGZ1bGxTdGFydCkuZ2V0VGltZSgpOyAvL0RpZmZlcmVuY2UgaW4gbXNcbiAgICAgIGNvbnNvbGUubG9nKFwiTWVyZ2UgVGltZTogXCIgKyBtc0RpZmYpO1xuICAgIH1cbiAgfVxuXG4gIC8vQXMgd2Ugc3dhcCBFQ09TIHByb3BlcnRpZXMgb3V0IG9uIHRoZSB2ZWN0b3IgdGlsZSBsYXllciwgY2xlYXIgb3V0IHRoZSBvbGQgcHJvcGVydGllcyBzbyB3ZSBkb24ndCBnZXQgcmVzaWR1YWwgdGhlbWUgdmFsdWVzIGZyb20gb2xkIHRoZW1lcy5cbiAgZnVuY3Rpb24gY2xlYXJGZWF0dXJlUHJvcGVydGllcyhmZWF0dXJlcyl7XG5cbiAgICBhbmd1bGFyLmZvckVhY2goZmVhdHVyZXMsIGZ1bmN0aW9uICh2dGYsIHZ0ZmtleSkge1xuICAgICAgaWYodnRmLnByb3BlcnRpZXMpIHtcbiAgICAgICAgdnRmLnByb3BlcnRpZXMuZWNvc19wcm9wZXJ0aWVzID0ge307XG4gICAgICAgIHZ0Zi50aGVtZSA9IFwiXCI7XG4gICAgICB9XG5cbiAgICAgIC8vUmVtb3ZlIE9sZCBsYWJlbHNcbiAgICAgIHZ0Zi5yZW1vdmVMYWJlbCgpO1xuXG4gICAgfSk7XG5cbiAgfVxuXG5cbiAgdmFyIG9wYWNpdHkgPSAwLjU7XG4gICRzY29wZS5VTk9DSEFJY29uTG9va3VwID0ge1xuXG4gICAgXCJNZXRlb3JvbG9naWNhbCAtIFRyb3BpY2FsIEN5Y2xvbmVcIjoge2ljb246IFwiaWNvbi1kaXNhc3Rlcl9jeWNsb25lXCIsIGNvbG9yOiBcInJnYmEoMjU1LDAsMCxcIiArIG9wYWNpdHkgKyBcIilcIn0sXG4gICAgXCJGbG9vZHNcIjoge2ljb246IFwiaWNvbi1kaXNhc3Rlcl9mbG9vZFwiLCBjb2xvcjogXCJyZ2JhKDI1NSwwLDAsXCIgKyBvcGFjaXR5ICsgXCIpXCJ9LFxuICAgIFwiVHN1bmFtaSwgVm9sY2Fub1wiOiB7aWNvbjogXCJpY29uLWRpc2FzdGVyX3RzdW5hbWlcIiwgY29sb3I6IFwicmdiYSgyNTUsMCwwLFwiICsgb3BhY2l0eSArIFwiKVwifSxcbiAgICBcIkZsb29kcywgU3Rvcm1cIjoge2ljb246IFwiaWNvbi1kaXNhc3Rlcl9mbG9vZFwiLCBjb2xvcjogXCJyZ2JhKDI1NSwwLDAsXCIgKyBvcGFjaXR5ICsgXCIpXCJ9LFxuICAgIFwiVHN1bmFtaVwiOiB7aWNvbjogXCJpY29uLWRpc2FzdGVyX3RzdW5hbWlcIiwgY29sb3I6IFwicmdiYSgyNTUsMCwwLFwiICsgb3BhY2l0eSArIFwiKVwifSxcbiAgICBcIkZhbWluZSAvIEZvb2QgSW5zZWN1cml0eVwiOiB7aWNvbjogXCJpY29uLWNsdXN0ZXJfZm9vZF9zZWN1cml0eVwiLCBjb2xvcjogXCJyZ2JhKDI1NSwwLDAsXCIgKyBvcGFjaXR5ICsgXCIpXCJ9LFxuICAgIFwiRHJvdWdodFwiOiB7aWNvbjogXCJpY29uLWRpc2FzdGVyX2Ryb3VnaHRcIiwgY29sb3I6IFwicmdiYSgyNTUsMCwwLFwiICsgb3BhY2l0eSArIFwiKVwifSxcbiAgICBcIk1ldGVvcm9sb2dpY2FsIC0gVHJvcGljYWwgQ3ljbG9uZTtIeWRyb2xvZ2ljYWwgLSBGbG9vZHNcIjoge2ljb246IFwiaWNvbi1kaXNhc3Rlcl9jeWNsb25lXCIsIGNvbG9yOiBcInJnYmEoMjU1LDAsMCxcIiArIG9wYWNpdHkgKyBcIilcIn0sXG4gICAgXCJGb29kIEluc2VjdXJpdHlcIjoge2ljb246IFwiaWNvbi1jbHVzdGVyX2Zvb2Rfc2VjdXJpdHlcIiwgY29sb3I6IFwicmdiYSgyNTUsMCwwLFwiICsgb3BhY2l0eSArIFwiKVwifSxcbiAgICBcIkNpdmlsIFVucmVzdFwiOiB7aWNvbjogXCJpY29uLXBlb3BsZV9yZWJlbFwiLCBjb2xvcjogXCJyZ2JhKDI1NSwwLDAsXCIgKyBvcGFjaXR5ICsgXCIpXCJ9LFxuICAgIFwiRmxvb2RzLCBUcm9waWNhbCBTdG9ybVwiOiB7aWNvbjogXCJpY29uLWRpc2FzdGVyX2Zsb29kXCIsIGNvbG9yOiBcInJnYmEoMjU1LDAsMCxcIiArIG9wYWNpdHkgKyBcIilcIn0sXG4gICAgXCJDb21wbGV4IEVtZXJnZW5jeVwiOiB7aWNvbjogXCJpY29uLWNyaXNpc19jb25mbGljdFwiLCBjb2xvcjogXCJyZ2JhKDI1NSwwLDAsXCIgKyBvcGFjaXR5ICsgXCIpXCJ9LFxuICAgIFwiRXBpZGVtaWNcIjoge2ljb246IFwiaWNvbi1kaXNhc3Rlcl9lcGlkZW1pY1wiLCBjb2xvcjogXCJyZ2JhKDI1NSwwLDAsXCIgKyBvcGFjaXR5ICsgXCIpXCJ9LFxuICAgIFwiUG9wdWxhdGlvbiBNb3ZlbWVudFwiOiB7aWNvbjogXCJpY29uLWNyaXNpc19wb3B1bGF0aW9uX2Rpc3BsYWNlbWVudFwiLCBjb2xvcjogXCJyZ2JhKDI1NSwwLDAsXCIgKyBvcGFjaXR5ICsgXCIpXCJ9LFxuICAgIFwiQ2xpbWF0b2xvZ2ljYWwgLSBEcm91Z2h0XCI6IHtpY29uOiBcImljb24tZGlzYXN0ZXJfZHJvdWdodFwiLCBjb2xvcjogXCJyZ2JhKDI1NSwwLDAsXCIgKyBvcGFjaXR5ICsgXCIpXCJ9LFxuICAgIFwiV2ludGVyIFN0b3JtXCI6IHtpY29uOiBcImljb24tZGlzYXN0ZXJfc25vd2ZhbGxcIiwgY29sb3I6IFwicmdiYSgyNTUsMCwwLFwiICsgb3BhY2l0eSArIFwiKVwifSxcbiAgICBcIlRyb3BpY2FsIFN0b3JtXCI6IHtpY29uOiBcImljb24tZGlzYXN0ZXJfaGVhdnlfcmFpblwiLCBjb2xvcjogXCJyZ2JhKDI1NSwwLDAsXCIgKyBvcGFjaXR5ICsgXCIpXCJ9LFxuICAgIFwiRWFydGhxdWFrZSwgVHN1bmFtaVwiOiB7aWNvbjogXCJpY29uLWRpc2FzdGVyX2VhcnRocXVha2VcIiwgY29sb3I6IFwicmdiYSgyNTUsMCwwLFwiICsgb3BhY2l0eSArIFwiKVwifSxcbiAgICBcIkh5ZHJvbG9naWNhbCAtIEZsb29kc1wiOiB7aWNvbjogXCJpY29uLWRpc2FzdGVyX2Zsb29kXCIsIGNvbG9yOiBcInJnYmEoMjU1LDAsMCxcIiArIG9wYWNpdHkgKyBcIilcIn0sXG4gICAgXCJMYW5kc2xpZGU7Rmxvb2RzXCI6IHtpY29uOiBcImljb24tZGlzYXN0ZXJfbGFuZHNsaWRlXCIsIGNvbG9yOiBcInJnYmEoMjU1LDAsMCxcIiArIG9wYWNpdHkgKyBcIilcIn0sXG4gICAgXCJFYXJ0aHF1YWtlXCI6IHtpY29uOiBcImljb24tZGlzYXN0ZXJfZWFydGhxdWFrZVwiLCBjb2xvcjogXCJyZ2JhKDI1NSwwLDAsXCIgKyBvcGFjaXR5ICsgXCIpXCJ9LFxuICAgIFwiTGFuZHNsaWRlO0h5ZHJvbG9naWNhbCAtIEZsb29kc1wiOiB7aWNvbjogXCJpY29uLWRpc2FzdGVyX2xhbmRzbGlkZVwiLCBjb2xvcjogXCJyZ2JhKDI1NSwwLDAsXCIgKyBvcGFjaXR5ICsgXCIpXCJ9XG5cbiAgfVxuXG5cbiAgLy9BZGQgYSBsZWFmbGV0IGNvbnRyb2wgdG8gdGhlIG1hcCBjb250YWluZXIgdGhhdCByZWZyZXNoZXMgdGhlIHN0YXRlIG9mIHRoZSBhcHBcbiAgZnVuY3Rpb24gYWRkUmVmcmVzaE1hcENvbnRyb2woKXtcblxuICAgIEwuZWFzeUJ1dHRvbignZ2x5cGhpY29uIGdseXBoaWNvbi1yZWZyZXNoJywgLy9Dc3MgY2xhc3NcbiAgICAgIGZ1bmN0aW9uICgpeyB9LCAvL29uQ2xpY2sgZnVuY3Rpb25cbiAgICAgICdSZXNldCBBcHAnLCAvL1RpdGxlXG4gICAgICBtYXAsIC8vbWFwIGNvbnRyb2wgcmVmXG4gICAgICAnYnRuUmVzZXRNYXAnLCAvL2lkXG4gICAgICAnL21hcGZvbGlvLyMvZGVmYXVsdCcgLy9hIGhyZWYgKG9wdGlvbmFsKVxuICAgIClcblxuICB9XG5cbn0pO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnR2VvQW5ndWxhcicpLmNvbnRyb2xsZXIoJ05hdkJhckN0cmwnLCBmdW5jdGlvbigkc2NvcGUsICRzdGF0ZSwgJHN0YXRlUGFyYW1zLCAkcm9vdFNjb3BlKSB7XG5cbiAgJHNjb3BlLnBhcmFtcyA9ICRzdGF0ZVBhcmFtcztcbiAgJHNjb3BlLmZ1bGxzY3JlZW4gPSBmYWxzZTtcblxuICAvL0lmIHN0YXRlUGFyYW1zLmZ1bGxTY3JlZW49dHJ1ZSwgdGhlbiBhcHBseSBhIGNsYXNzIHRvIHRoZSBIVE1MIGJvZHkgY2FsbGVkIC5mdWxsU2NyZWVuXG5cbiAgJHNjb3BlLnRvZ2dsZUZ1bGxTY3JlZW4gPSBmdW5jdGlvbigpe1xuICAgICAgLy9TZXQgdGhlIHN0YXRlUGFyYW0gdG8gZnVsbHNjcmVlbj10cnVlXG4gICAgJHNjb3BlLmZ1bGxzY3JlZW4gPSAhJHNjb3BlLmZ1bGxzY3JlZW47XG4gICAgJHN0YXRlUGFyYW1zLmZ1bGxzY3JlZW4gPSAkc2NvcGUuZnVsbHNjcmVlbjtcbiAgICB2YXIgc3RhdGUgPSAkc3RhdGUuY3VycmVudC5uYW1lIHx8ICdtYWluJztcbiAgICAkc3RhdGUuZ28oc3RhdGUsICRzdGF0ZVBhcmFtcyk7XG4gIH1cblxuXG4gICRyb290U2NvcGUuJG9uKCdmdWxsc2NyZWVuLWNoYW5nZWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgLy9JZiB0aGUgZnVsbHNjcmVlbiBzdGF0ZSBjaGFuZ2VzLlxuICAgIGlmKCRzdGF0ZVBhcmFtcy5mdWxsc2NyZWVuID09IFwidHJ1ZVwiKXtcbiAgICAgICRzY29wZS5mdWxsc2NyZWVuICA9IHRydWU7XG4gICAgfWVsc2V7XG4gICAgICAkc2NvcGUuZnVsbHNjcmVlbiAgPSBmYWxzZTtcbiAgICB9XG5cbiAgfSk7XG5cblxuXG59KTtcbiIsIi8qKlxuICogQ3JlYXRlZCBieSBSeWFuIFdoaXRsZXkgPHJ3aGl0bGV5QHNwYXRpYWxkZXYuY29tPlxuICogICAgICAgb24gNS8yMS8xNC5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdHZW9Bbmd1bGFyJykuY29udHJvbGxlcignU2VhcmNoRUNPU0N0cmwnLCBmdW5jdGlvbigkc2NvcGUsICRyb290U2NvcGUsICRzdGF0ZVBhcmFtcywgJGh0dHAsIFZlY3RvclByb3ZpZGVyKSB7XG4gICRzY29wZS5wYXJhbXMgPSAkc3RhdGVQYXJhbXM7XG5cbiAgdmFyIHVybCA9IGNvbmZpZy5jaHViYnNQYXRoKCdzZXJ2aWNlcy9jdXN0b20vY3VzdG9tX29wZXJhdGlvbj9uYW1lPWRvZWNvc3RleHRzZWFyY2gmZm9ybWF0PWpzb24mdGV4dD06dGV4dCcpO1xuXG4gICRzY29wZS5zZWFyY2hUZXh0ID0gJyc7XG4gICRzY29wZS4kd2F0Y2goJ1NlYXJjaElucHV0JywgZXhlY3V0ZUVDT1NTZWFyY2gsIHRydWUpO1xuXG5cbiAgZnVuY3Rpb24gZXhlY3V0ZUVDT1NTZWFyY2ggKHRleHQpe1xuICAgICAgaWYoIXRleHQgfHwgdGV4dC5sZW5ndGggPCAzKSByZXR1cm47XG5cbiAgICAgIHZhciB0aGlzVVJMID0gdXJsLnJlcGxhY2UoXCI6dGV4dFwiLCB0ZXh0KTtcblxuICAgICAgLy8gRmV0Y2ggZnJvbSB0aGUgc2VydmVyIG9ubHkgaWYgd2UgZG9uJ3QgaGF2ZSBpdCBpbiB0aGUgaGFzaFxuICAgICAgJGh0dHAuZ2V0KHRoaXNVUkwpLnN1Y2Nlc3MoZnVuY3Rpb24gKHJlc3VsdCwgc3RhdHVzKSB7XG5cbiAgICAgICAgICBpZiAoIXJlc3VsdCl7XG4gICAgICAgICAgICAgICRzY29wZS5yZXN1bHRzID0gW3tuYW1lOiBcIk5vIHJlc3VsdHMgZm91bmQuXCJ9XTtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmKHJlc3VsdC5lcnJvcikge1xuICAgICAgICAgICAgICAkc2NvcGUucmVzdWx0cyA9IFt7bmFtZTogXCJFcnJvciBzZWFyY2hpbmcgRUNPUy5cIn1dO1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy9icmVhayB1cCB0aGUgcmVzdWx0cyBieSB0eXBlLlxuICAgICAgICAgICRzY29wZS5wcm9qZWN0UmVzdWx0cyA9IHJlc3VsdC5maWx0ZXIoZnVuY3Rpb24oaXRlbSl7XG4gICAgICAgICAgICAgcmV0dXJuIGl0ZW0udGhlbWVfdHlwZSA9PSAnUHJvamVjdCc7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICAkc2NvcGUuZGlzYXN0ZXJSZXN1bHRzID0gcmVzdWx0LmZpbHRlcihmdW5jdGlvbihpdGVtKXtcbiAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0udGhlbWVfdHlwZSA9PSAnRGlzYXN0ZXInO1xuICAgICAgICAgIH0pO1xuXG4gICAgICB9KTtcbiAgfVxuXG4gICAgLy9XaGVuIGEgdXNlciBjbGlja3Mgb25lIG9mIHRoZSBzZWFyY2ggcmVzdWx0IGl0ZW1zXG4gICAgJHNjb3BlLmhhbmRsZVNlYXJjaFJlc3VsdENsaWNrID0gZnVuY3Rpb24ocHJvcGVydGllcyl7XG4gICAgICAgIC8vU2VuZCB0byBkZWF0aWxzIHBhbmVsXG4gICAgICAgIHNlbmRQcm9qZWN0VG9EZXRhaWxzUGFuZWwocHJvcGVydGllcyk7XG5cbiAgICAgICAgLy9JZiB3ZSBoYXZlIGEgZ3VpZCwgdGhlbiB0cnkgdG8gem9vbSB0byBpdC5cbiAgICAgICAgaWYocHJvcGVydGllcy5sb2NhdGlvbl9fcl9naXNfZ2VvX2lkX19jICYmIHByb3BlcnRpZXMubGV2ZWwpe1xuICAgICAgICAgICAgem9vbVRvR1VJRChwcm9wZXJ0aWVzLmxvY2F0aW9uX19yX2dpc19nZW9faWRfX2MsIHByb3BlcnRpZXMubGV2ZWwpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIHNlbmRQcm9qZWN0VG9EZXRhaWxzUGFuZWwgKHByb3BlcnRpZXMpIHtcbiAgICAgICRyb290U2NvcGUuJGJyb2FkY2FzdCgnZGV0YWlscycsIHtmZWF0dXJlOiB7cHJvcGVydGllczogcHJvcGVydGllc319KTtcbiAgICB9XG5cblxuICAgIC8vdGhpcyBpcyBhIGR1cGxpY2F0ZSBmcm9tIGJyZWFkY3J1bWJzLmpzICBTaG91bGQgYmUgcmVmYWN0b3JlZCB0byBhIHNpbmdsZSBmdW5jdGlvblxuICAgIGZ1bmN0aW9uIHpvb21Ub0dVSUQgKGd1aWQsIGxldmVsKSB7XG4gICAgICAgIC8vR2l2ZW4gYSBHVUlELCB6b29tIHRvIHRoZSBmZWF0dXJlLlxuXG4gICAgICAgIC8vR3JhYiB0aGUgZmVhdHVyZSBmcm9tIHRoZSBWZWN0b3JQcm92aWRlci5cbiAgICAgICAgVmVjdG9yUHJvdmlkZXIuZmV0Y2hGZWF0dXJlKGd1aWQsIGxldmVsLCBudWxsLCBmdW5jdGlvbiAoZmVhdCkge1xuICAgICAgICAgICAgLy9NYWtlIGEgdGVtcCBnZW9qc29uIGxheWVyIGFuZCBhZGQgdGhlIGdlb2pzb24uXG4gICAgICAgICAgICAvL1RoZW4gZ3JhYiB0aGUgYm91bmRzIGZyb20gaXQgYW5kIHpvb20gdG8gaXQuXG5cbiAgICAgICAgICAgIHZhciBnamwgPSBMLmdlb0pzb24oZmVhdC5nZW9tZXRyeSk7XG4gICAgICAgICAgICAkc2NvcGUuJHBhcmVudC56b29tVG9Cb3VuZHMoZ2psLmdldEJvdW5kcygpKTtcbiAgICAgICAgfSk7XG5cbiAgICB9O1xufSk7XG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgTmljaG9sYXMgSGFsbGFoYW4gPG5oYWxsYWhhbkBzcGF0aWFsZGV2LmNvbT5cbiAqICAgICAgICBhbmQgUnlhbiBXaGl0bGV5ICAgICAgPHJ3aGl0bGV5QHNwYXRpYWxkZXYuY29tPlxuICogICAgICAgICBvbiA0LzE2LzE0LlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ0dlb0FuZ3VsYXInKS5jb250cm9sbGVyKCdTaWRlVmlld0N0cmwnLCBmdW5jdGlvbigkc2NvcGUsICR0aW1lb3V0KSB7XG5cbiAgLy9yZXNpemUgZnVuY3Rpb25cbiAgZnVuY3Rpb24gcmVzaXplU2Nyb2xsYWJsZVBhbmVsKCkge1xuICAgICQoXCIuc2lkZS12aWV3IC5zY3JvbGxhYmxlXCIpLmhlaWdodCgkKFwiLnNpZGUtdmlldyAubmF2cGFuZWxcIikuaGVpZ2h0KCkgLSAkKFwiLnNpZGUtdmlldyAubmF2cGFuZWwgLnNjcm9sbGFibGVcIikucG9zaXRpb24oKS50b3ApOyAgLy9UaGlzIHNob3VsZCByZXNwb25kIHRvIHdpbmRvdy5yZXNpemUgZXZlbnRzIGFuZCB3aWxsIGJlIHNldCBkdXJpbmcgdGhhdCBldmVudCB0byBtYWtlIHN1cmUgdGhlIHBhbmVsIHN0YXlzXG4gICAgLy8gZHluYW1pY2FsbHkgcmVzaXplIHByb2plY3QgZmlsdGVyIHRhYnNcbiAgICAkKFwibWQtY29udGVudCAucHJvamVjdC1maWx0ZXJzXCIpLmhlaWdodCgkKFwiLm5hdnBhbmVsLmNvbnRhaW5lci5maWx0ZXJzLWNvbnRhaW5lclwiKS5oZWlnaHQoKSAtIDEyNSk7XG4gIH1cblxuICAvL0Nvbm5lY3QgdGhlIGxheW91dCBvbnJlc2l6ZSBlbmQgZXZlbnRcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgcmVzaXplU2Nyb2xsYWJsZVBhbmVsKTtcblxuXG4gIC8vRm9yIEluaXQuXG4gIHJlc2l6ZVNjcm9sbGFibGVQYW5lbCgpO1xuXG4gIC8vIHRoaXMgZmlyZXMgd2hlbiBhbGwgYW5ndWxhciBkb20gZWxlbWVudHMgYXJlIHJlbmRlcmVkXG4gICR0aW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICByZXNpemVTY3JvbGxhYmxlUGFuZWwoKTtcbiAgfSk7XG5cbn0pO1xuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IE5pY2hvbGFzIEhhbGxhaGFuIDxuaGFsbGFoYW5Ac3BhdGlhbGRldi5jb20+XG4gKiAgICAgICBvbiAzLzI2LzE0LlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ0dlb0FuZ3VsYXInKS5jb250cm9sbGVyKCdTdG9yaWVzQ3RybCcsIGZ1bmN0aW9uKCRzY29wZSwgJHN0YXRlUGFyYW1zLCBTdG9yaWVzQ29uZmlnKSB7XG4gICRzY29wZS5wYXJhbXMgPSAkc3RhdGVQYXJhbXM7XG5cbiAgLy9HZXQgU3RvcmllcyBmcm9tIGNvbmZpZyBmaWxlIGFuZCBsb2FkIHRoZW0uXG4gICRzY29wZS5zdG9yaWVzQ29uZmlnID0gU3Rvcmllc0NvbmZpZztcbiAgJHNjb3BlLnN0b3JpZXMgPSBbXTtcbiAgJHNjb3BlLnN0b3JpZXNTZWFyY2hBcnJheSA9IFtdO1xuICAkc2NvcGUuc3Rvcmllc1NlYXJjaFRleHQgPSBcIlwiO1xuICAkc2NvcGUuc3Rvcmllc0V4dGVudEFycmF5ID0gW107IC8vY3VycmVudGx5IG5vdCB1c2VkLCBidXQgc2hvdWxkIGJlIHRvIGFsbG93IEV4dGVudCB0byBwZXJmb3JtICdBTkQnIGxvZ2ljIHdpdGggdGhlIGtleXdvcmRzLlxuXG4gIGZvciAodmFyIHN0b3JpZXNLZXkgaW4gU3Rvcmllc0NvbmZpZykge1xuXG4gICAgLy8gV2UgZG9uJ3Qgd2FudCB0byBzaG93IHRoZSBmaW5kIGZ1bmMuXG4gICAgaWYgKHR5cGVvZiBTdG9yaWVzQ29uZmlnW3N0b3JpZXNLZXldID09PSAnZnVuY3Rpb24nIHx8IHN0b3JpZXNLZXkgPT0gJ3N0b3JpZXMnKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICAkc2NvcGUuc3Rvcmllcy5wdXNoKFN0b3JpZXNDb25maWdbc3Rvcmllc0tleV0pO1xuICB9XG5cbiAgJHNjb3BlLmZpbHRlckJ5Q2hlY2tib3ggPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgIC8vVGFrZSB0aGUgdGVybSBwYXNzZWQgaW4gYW5kIGFkZCBvciByZW1vdmUgaXQgZnJvbSB0aGUga2V5d29yZHMgdGV4dGJveC5cbiAgICBpZiAoJHNjb3BlLnN0b3JpZXNTZWFyY2hBcnJheS5pbmRleE9mKHZhbHVlKSA9PSAtMSkge1xuICAgICAgLy9BZGQgaXRcbiAgICAgICRzY29wZS5zdG9yaWVzU2VhcmNoQXJyYXkucHVzaCh2YWx1ZSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgLy9SZW1vdmUgaXRcbiAgICAgICRzY29wZS5zdG9yaWVzU2VhcmNoQXJyYXkuc3BsaWNlKCRzY29wZS5zdG9yaWVzU2VhcmNoQXJyYXkuaW5kZXhPZih2YWx1ZSksIDEpO1xuICAgIH1cbiAgfTtcblxuICAkc2NvcGUuZmlsdGVyRXh0ZW50QnlDaGVja2JveCA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgLy9UYWtlIHRoZSB0ZXJtIHBhc3NlZCBpbiBhbmQgYWRkIG9yIHJlbW92ZSBpdCBmcm9tIHRoZSBrZXl3b3JkcyB0ZXh0Ym94LlxuICAgIGlmICgkc2NvcGUuc3Rvcmllc0V4dGVudEFycmF5LmluZGV4T2YodmFsdWUpID09IC0xKSB7XG4gICAgICAvL0FkZCBpdFxuICAgICAgJHNjb3BlLnN0b3JpZXNFeHRlbnRBcnJheS5wdXNoKHZhbHVlKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAvL1JlbW92ZSBpdFxuICAgICAgJHNjb3BlLnN0b3JpZXNFeHRlbnRBcnJheS5zcGxpY2UoJHNjb3BlLnN0b3JpZXNFeHRlbnRBcnJheS5pbmRleE9mKHZhbHVlKSwgMSk7XG4gICAgfVxuICB9O1xuXG4gICRzY29wZS5jbGVhclNlYXJjaCA9IGZ1bmN0aW9uKCkge1xuICAgICRzY29wZS5zdG9yaWVzU2VhcmNoQXJyYXkgPSBbXTtcbiAgICAkc2NvcGUuc3Rvcmllc1NlYXJjaFRleHQgPSBcIlwiO1xuICAgICRzY29wZS5zdG9yaWVzRXh0ZW50QXJyYXkgPSBbXTtcbiAgfVxufSk7XG5cblxuYW5ndWxhci5tb2R1bGUoJ0dlb0FuZ3VsYXInKS5maWx0ZXIoJ3NlYXJjaFN0b3JpZXNGaWx0ZXInLCBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oc3RvcmllcywgJHNjb3BlKSB7XG4gICAgICB2YXIgb3V0U3RvcmllcyA9IFtdO1xuICAgICAgaWYgKHN0b3JpZXMpIHtcbiAgICAgICAgLy9sb29wIHRocnUgc3RvcmllcyBhbmQgZmlsdGVyIGJhc2VkIG9uIHNlYXJjaCB0ZXh0L2NoZWNrYm94ZXMuXG4gICAgICAgIC8vY29tbWEgc2VwYXJhdGVkIGl0ZW1zIHNob3VsZCBiZSBicm9rZW4gdXAgYW5kIHNlYXJjaGVkIGZvciBzZXBhcmF0ZWx5IHVzaW5nICdPUicgbG9naWMuXG5cbiAgICAgICAgdmFyIGtleXdvcmRzID0gW107XG4gICAgICAgIGlmICgkc2NvcGUuc3Rvcmllc1NlYXJjaFRleHQubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGtleXdvcmRzID0gJHNjb3BlLnN0b3JpZXNTZWFyY2hUZXh0LnNwbGl0KFwiLFwiKS5jb25jYXQoJHNjb3BlLnN0b3JpZXNTZWFyY2hBcnJheSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAga2V5d29yZHMgPSAkc2NvcGUuc3Rvcmllc1NlYXJjaEFycmF5O1xuICAgICAgICB9XG4gICAgICAgIGlmIChrZXl3b3Jkcy5sZW5ndGggPT0gMCkge1xuICAgICAgICAgIHJldHVybiBzdG9yaWVzO1xuICAgICAgICB9XG5cbiAgICAgICAgc3Rvcmllcy5mb3JFYWNoKGZ1bmN0aW9uKHN0b3J5KSB7XG4gICAgICAgICAga2V5d29yZHMuZm9yRWFjaChmdW5jdGlvbihrZXl3b3JkKSB7XG4gICAgICAgICAgICBpZiAoa2V5d29yZC5sZW5ndGggPiAwICYmIHN0b3J5LmtleXdvcmRzLnRvTG93ZXJDYXNlKCkuaW5kZXhPZigkLnRyaW0oa2V5d29yZC50b0xvd2VyQ2FzZSgpKSkgPiAtMSkge1xuICAgICAgICAgICAgICBpZiAob3V0U3Rvcmllcy5pbmRleE9mKHN0b3J5KSA9PSAtMSkge1xuICAgICAgICAgICAgICAgIG91dFN0b3JpZXMucHVzaChzdG9yeSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cblxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHN0b3JpZXM7XG4gICAgICB9XG4gICAgICByZXR1cm4gb3V0U3RvcmllcztcbiAgICB9O1xuICB9KTsiLCIvKipcbiAqIENyZWF0ZWQgYnkgTmljaG9sYXMgSGFsbGFoYW4gPG5oYWxsYWhhbkBzcGF0aWFsZGV2LmNvbT5cbiAqICAgICAgIG9uIDUvNi8xNC5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdHZW9Bbmd1bGFyJykuY29udHJvbGxlcignVGhlbWVDdHJsJywgZnVuY3Rpb24gKCRzY29wZSwgJHJvb3RTY29wZSwgJHN0YXRlLCAkc3RhdGVQYXJhbXMsIFZlY3RvclByb3ZpZGVyLCBMYXllckNvbmZpZykge1xuXG4gIHZhciB0aGVtZU5hbWVIYXNoID0gJHJvb3RTY29wZS50aGVtZU5hbWVIYXNoID0ge1xuICAgIHByb2plY3Q6ICdQcm9qZWN0cycsXG4gICAgZGlzYXN0ZXI6ICdEaXNhc3RlcnMnLFxuICAgIHByb2plY3RSaXNrOiAnUHJvamVjdCBSaXNrJyxcbiAgICAvL3Byb2plY3RIZWFsdGg6ICdQcm9qZWN0IEhlYWx0aCcsXG4gICAgZGlzYXN0ZXJUeXBlOiAnRGlzYXN0ZXIgVHlwZScsXG4gICAgbm9uZTogJ05vbmUnXG4gIH07XG5cbiAgJHNjb3BlLnByb2plY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgJHNjb3BlLnRoZW1lTmFtZSA9IHRoZW1lTmFtZUhhc2gucHJvamVjdDtcbiAgICAkc2NvcGUuc2V0VGhlbWVRdWVyeVBhcmFtKCdwcm9qZWN0Jyk7XG4gIH07XG5cbiAgJHNjb3BlLmRpc2FzdGVyID0gZnVuY3Rpb24gKCkge1xuICAgICRzY29wZS50aGVtZU5hbWUgPSB0aGVtZU5hbWVIYXNoLmRpc2FzdGVyO1xuICAgICRzY29wZS5zZXRUaGVtZVF1ZXJ5UGFyYW0oJ2Rpc2FzdGVyJyk7XG4gIH07XG5cbiAgJHNjb3BlLnByb2plY3RSaXNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgJHNjb3BlLnRoZW1lTmFtZSA9IHRoZW1lTmFtZUhhc2gucHJvamVjdFJpc2s7XG4gICAgICAkc2NvcGUuc2V0VGhlbWVRdWVyeVBhcmFtKCdwcm9qZWN0UmlzaycpO1xuICB9O1xuXG4gICRzY29wZS5wcm9qZWN0SGVhbHRoID0gZnVuY3Rpb24gKCkge1xuICAgICAgJHNjb3BlLnRoZW1lTmFtZSA9IHRoZW1lTmFtZUhhc2gucHJvamVjdEhlYWx0aDtcbiAgICAgICRzY29wZS5zZXRUaGVtZVF1ZXJ5UGFyYW0oJ3Byb2plY3RIZWFsdGgnKTtcbiAgfTtcblxuICAkc2NvcGUuZGlzYXN0ZXJUeXBlID0gZnVuY3Rpb24gKCkge1xuICAgICRzY29wZS50aGVtZU5hbWUgPSB0aGVtZU5hbWVIYXNoLmRpc2FzdGVyVHlwZTtcbiAgICAkc2NvcGUuc2V0VGhlbWVRdWVyeVBhcmFtKCdkaXNhc3RlclR5cGUnKTtcbiAgfTtcblxuICAkc2NvcGUubm9uZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAkc2NvcGUudGhlbWVOYW1lID0gdGhlbWVOYW1lSGFzaC5ub25lO1xuICAgICRzY29wZS5zZXRUaGVtZVF1ZXJ5UGFyYW0oJ25vbmUnKTtcbiAgfTtcblxuXG4gICRzY29wZS5jbG9zZVBhbmVscyA9IGZ1bmN0aW9uICgpe1xuICAgIGZvciAodmFyIHBhcmFtIGluICRzdGF0ZVBhcmFtcykge1xuICAgICAgaWYgKCRzdGF0ZVBhcmFtc1twYXJhbV0gPT09ICdvcGVuJykge1xuICAgICAgICAkc3RhdGVQYXJhbXNbcGFyYW1dID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgJHNjb3BlLnNldFRoZW1lUXVlcnlQYXJhbSA9IGZ1bmN0aW9uICh0aGVtZSkge1xuXG4gICAgLy9jbG9zZSBkZXRhaWxzIHBhbmVsIG9uIHRoZW1lIGNoYW5nZVxuICAgIGlmKCRzY29wZS5pc1BhcmFtKCdkZXRhaWxzLXBhbmVsJykgPT0gdHJ1ZSl7XG4gICAgICBpZigkc3RhdGVQYXJhbXMudGhlbWUgIT09IHRoZW1lKXtcbiAgICAgICAgJHNjb3BlLmNsb3NlUGFuZWxzKCk7XG4gICAgICB9XG4gICAgfVxuXG5cbiAgICAvL2FwcGVuZCB0aGUgZGVmYXVsdCBkaXNhc3RlciBmaWx0ZXIgd2hlbiBzd2l0Y2hpbmcgZnJvbSBwcm9qZWN0IHRvIGRpc2FzdGVyXG4gICAgaWYodGhlbWUuaW5kZXhPZignZGlzYXN0ZXInKSAhPT0gLTEgJiYgJHN0YXRlUGFyYW1zLnRoZW1lLmluZGV4T2YoJ3Byb2plY3QnKSAhPT0gLTEpe1xuICAgICAgJHN0YXRlUGFyYW1zLmZpbHRlcnMgPSBcImlyb2Nfc3RhdHVzX19jIExJS0UgJyVNb25pdG9yaW5nJSdPUiBpcm9jX3N0YXR1c19fYyBMSUtFICclQWN0aXZlJSdcIjtcbiAgICB9XG5cbiAgICAvL3JlbW92ZSBhbGwgZmlsdGVycyB3aGVuIHN3aXRjaGluZyBmcm9tIGRpc2FzdGVyIHRvIHByb2plY3RcbiAgICBpZih0aGVtZS5pbmRleE9mKCdwcm9qZWN0JykhPT0tMSAmJiAkc3RhdGVQYXJhbXMudGhlbWUuaW5kZXhPZignZGlzYXN0ZXInKSE9PSAtMSApe1xuICAgICAgZGVsZXRlICRzdGF0ZVBhcmFtcy5maWx0ZXJzO1xuICAgIH1cblxuICAgICRzdGF0ZVBhcmFtcy50aGVtZSA9IHRoZW1lO1xuXG4gICAgLy9mb3JjZSBnYWRtMCBvbiBkaXNhc3RlciBhbmQgZGlzYXN0ZXJUeXBlXG4gICAgaWYodGhlbWUuaW5kZXhPZignZGlzYXN0ZXInKSE9PS0xICYmICRzdGF0ZVBhcmFtcy5sYXllcnMuc3BsaXQoXCIsXCIpWzFdICE9PSAnZ2FkbTAnKXtcbiAgICAgIHZhciBsYXllcnNBcnJheTtcblxuICAgICAgaWYoJHN0YXRlUGFyYW1zLmxheWVycyl7XG4gICAgICAgIGxheWVyc0FycmF5ID0gJHN0YXRlUGFyYW1zLmxheWVycy5zcGxpdChcIixcIik7XG4gICAgICB9XG5cbiAgICAgIC8vUmVtb3ZlIGFsbCBHQURNIGxheWVycy5cbiAgICAgIGxheWVyc0FycmF5LmZvckVhY2goZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcbiAgICAgICAgaWYgKExheWVyQ29uZmlnLnRoZW1lTGF5ZXJzLmluZGV4T2YodmFsdWUpID4gLTEpIHtcbiAgICAgICAgICBsYXllcnNBcnJheS5zcGxpY2UobGF5ZXJzQXJyYXkuaW5kZXhPZih2YWx1ZSksIDEpOyAvL3JlbW92ZSBhbnkgR0FETXNcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIC8vQWRkIGluIHRoZSBnYWRtIGxheWVyIHRvIHRoZSBsYXllcnMgbGlzdCBpbiB0aGUgc3RhdGVwYXJhbXMuXG4gICAgICBsYXllcnNBcnJheS5wdXNoKFwiZ2FkbTBcIik7XG4gICAgICAkc3RhdGVQYXJhbXMubGF5ZXJzID0gbGF5ZXJzQXJyYXkuam9pbihcIixcIik7XG4gICAgfVxuXG4gICAgLy9jbG9zZSBmaWx0ZXJzIHBhbmVsIGlmIHRoZW1lIGlzICBOb25lXG4gICAgaWYoJHN0YXRlUGFyYW1zLnRoZW1lID09ICdub25lJyB8fCAkc3RhdGVQYXJhbXMudGhlbWUgIT09IG51bGwpIHtcbiAgICAgICRzY29wZS5jbG9zZVBhcmFtKCdmaWx0ZXJzLXBhbmVsJyk7XG4gICAgfVxuXG5cbiAgICB2YXIgc3RhdGUgPSAkc3RhdGUuY3VycmVudC5uYW1lIHx8ICdtYWluJztcbiAgICAkc3RhdGUuZ28oc3RhdGUsICRzdGF0ZVBhcmFtcyk7XG4gIH07XG5cbiAgJHNjb3BlLnRoZW1lTmFtZSA9IHRoZW1lTmFtZUhhc2hbJHN0YXRlUGFyYW1zLnRoZW1lXSB8fCB0aGVtZU5hbWVIYXNoW2NvbmZpZy5kZWZhdWx0VGhlbWVdO1xuICAvKlxuICAgSGFuZGxpbmcgVGhlbWUgTWVudSBBbmltYXRpb25zXG4gICAqL1xuXG4gICRzY29wZS50b2dnbGVUaGVtZU1lbnUgPSBmdW5jdGlvbigpe1xuICAgIHZhciBmbGlwcGVkT3V0ID0gJChcIi5tZW51LXNlbGVjdGlvbiAuZHJvcGRvd25cIikuaGFzQ2xhc3MoXCJvcGVuXCIpO1xuXG4gICAgaWYoZmxpcHBlZE91dCA9PSBmYWxzZSl7XG4gICAgICAkc2NvcGUudW5mdXJsVGhlbWVzKCk7XG4gICAgfVxuICAgIGVsc2V7XG4gICAgICAkc2NvcGUucmVmdXJsVGhlbWVzKCk7XG4gICAgfVxuICB9O1xuXG4gICRzY29wZS51bmZ1cmxUaGVtZXMgPSBmdW5jdGlvbigpe1xuICAgICRzY29wZS5yZWZ1cmxUaGVtZXMoKTtcbiAgICAvL1RyeSBqUXVlcnkgdG8gYWRkIGFuICdvbicgY2xhc3MgdG8gZWFjaCBvZiB0aGUgdGhlbWUgTEkgZWxlbWVudHMgb24gYSB0aW1lci5cbiAgICAkKCQoJyNUaGVtZU1lbnUgbGknKS5nZXQoKS5yZXZlcnNlKCkpLmVhY2goZnVuY3Rpb24oaW5kZXgpe1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoc2VsZikuYWRkQ2xhc3MoXCJ0aGVtZS1zZWxlY3Rvci1saS1vblwiKTtcbiAgICAgIH0sIGluZGV4KjEwMCk7XG4gICAgfSk7XG4gIH07XG5cbiAgLy9SZWZ1cmw/XG4gICRzY29wZS5yZWZ1cmxUaGVtZXMgPSBmdW5jdGlvbigpe1xuICAgIC8vVHJ5IGpRdWVyeSB0byByZW1vdmUgdGhlICdvbicgY2xhc3MgdG8gZWFjaCBvZiB0aGUgdGhlbWUgTEkgZWxlbWVudHMgb24gYSB0aW1lci5cbiAgICAkKCcjVGhlbWVTZWxlY3Rvck1lbnUgLmRyb3Bkb3duLW1lbnUgbGknKS5yZW1vdmVDbGFzcyhcInRoZW1lLXNlbGVjdG9yLWxpLW9uXCIpO1xuICB9O1xuXG4gIC8qXG4gICBFbmQgVGhlbWUgTWVudSBBbmltYXRpb25zXG4gICAqL1xuXG59KTtcbiIsIi8qKlxuICogQ3JlYXRlZCBieSBOaWNob2xhcyBIYWxsYWhhbiA8bmhhbGxhaGFuQHNwYXRpYWxkZXYuY29tPlxuICogICAgICAgb24gNC8xNy8xNC5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdHZW9Bbmd1bGFyJykuY29udHJvbGxlcignVXBsb2FkQ3RybCcsIGZ1bmN0aW9uKCRzY29wZSwgJGh0dHAsICRzdGF0ZSwgJHN0YXRlUGFyYW1zLCAkdXBsb2FkKSB7XG5cbiAgJHNjb3BlLnNob3dBbGVydCA9IGZhbHNlO1xuICAkc2NvcGUuc2hvd1Byb2dyZXNzID0gZmFsc2U7XG4gICRzY29wZS5zaG93VXBsb2FkZWRVcmwgPSBmYWxzZTtcbiAgJHNjb3BlLnBlcmNlbnQgPSAzO1xuICAkc2NvcGUuZGlzYWJsZWQgPSBmYWxzZTtcbiAgJHNjb3BlLmtiVXBsb2FkZWQgPSAwO1xuICAkc2NvcGUua2JUb3RhbCA9IDA7XG5cbiAgJHNjb3BlLiR1cGxvYWQgPSAkdXBsb2FkO1xuXG4gICRzY29wZS51cGxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAkKFwiI3VwbG9hZC1maWxlLWlucHV0XCIpLmNsaWNrKCkuY2hhbmdlKGZ1bmN0aW9uKGV2dCkge1xuICAgICAgJHNjb3BlLnNob3dQcm9ncmVzcyA9IHRydWU7XG4gICAgICAkc2NvcGUucGVyY2VudCA9IDU7XG5cbiAgICAgIHZhciBmaWxlTmFtZSA9ICQodGhpcykudmFsKCkuc3BsaXQoJ1xcXFwnKS5wb3AoKTtcbiAgICAgIHZhciBmaWxlID0gJCgnI3VwbG9hZC1maWxlLWlucHV0JykuZ2V0KDApLmZpbGVzWzBdO1xuICAgICAgcGFyc2VBbmRVcGxvYWRGaWxlKGZpbGUsIGZpbGVOYW1lKTtcblxuICAgIH0pO1xuICB9O1xuXG4gICRzY29wZS5maWxlRHJvcHBlZCA9IGZ1bmN0aW9uICgkZmlsZXMpIHtcbiAgICB2YXIgZmlsZSA9ICRmaWxlc1swXTtcbiAgICBwYXJzZUFuZFVwbG9hZEZpbGUoZmlsZSwgZmlsZS5uYW1lKTtcbiAgfTtcblxuICBmdW5jdGlvbiBwYXJzZUFuZFVwbG9hZEZpbGUoZmlsZSwgZmlsZU5hbWUpIHtcbiAgICBpZiAoIWZpbGVOYW1lKSBmaWxlTmFtZSA9ICdmaWxlJztcbiAgICB2YXIgciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgci5yZWFkQXNCaW5hcnlTdHJpbmcoZmlsZSk7XG4gICAgci5vbmxvYWRlbmQgPSBmdW5jdGlvbihlKXtcbiAgICAgIHZhciBkYXRhID0gZS50YXJnZXQucmVzdWx0O1xuICAgICAgdmFyIHBvc3RPYmogPSB7XG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJNYXBmb2xpbyBVcGxvYWRlZCBEYXRhIC0gXCIgKyBmaWxlTmFtZSxcbiAgICAgICAgXCJwdWJsaWNcIjogdHJ1ZSxcbiAgICAgICAgXCJmaWxlc1wiOiB7fVxuICAgICAgfTtcbiAgICAgIHBvc3RPYmouZmlsZXNbZmlsZU5hbWVdID0ge2NvbnRlbnQ6IGRhdGF9O1xuICAgICAgJHNjb3BlLnBlcmNlbnQgPSA3O1xuXG4gICAgICAkc2NvcGUuJHVwbG9hZC5odHRwKHtcbiAgICAgICAgdXJsOiAnaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS9naXN0cycsXG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgIGRhdGE6IHBvc3RPYmosXG4gICAgICAgIGhlYWRlcnM6IHsnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nfVxuICAgICAgfSkucHJvZ3Jlc3MoZnVuY3Rpb24oZXZ0KSB7XG4gICAgICAgICRzY29wZS5wZXJjZW50ID0gcGFyc2VGbG9hdCgoZXZ0LmxvYWRlZCAvIGV2dC50b3RhbFNpemUgKiAxMDApLnRvRml4ZWQoMSkpO1xuICAgICAgICAkc2NvcGUua2JVcGxvYWRlZCA9IChldnQubG9hZGVkIC8gMTAyNCkudG9GaXhlZCgyKTtcbiAgICAgICAgJHNjb3BlLmtiVG90YWwgPSAoZXZ0LnRvdGFsU2l6ZSAvIDEwMjQpLnRvRml4ZWQoMik7XG4gICAgICB9KS5zdWNjZXNzKGZ1bmN0aW9uIChkYXRhLCBzdGF0dXMsIGhlYWRlcnMsIGNvbmZpZykge1xuICAgICAgICAkc2NvcGUuc2hvd1Byb2dyZXNzID0gZmFsc2U7XG4gICAgICAgIHZhciBmaWxlbmFtZSA9IGRhdGEuZmlsZXNbZmlsZU5hbWVdLmZpbGVuYW1lO1xuICAgICAgICAkc2NvcGUuZ2lzdFJhd1VybCA9IGRhdGEuZmlsZXNbZmlsZU5hbWVdLnJhd191cmw7XG4gICAgICAgICRzY29wZS5naXN0SHRtbFVybCA9IGRhdGEuaHRtbF91cmw7XG4gICAgICAgICRzY29wZS5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICRzY29wZS5zaG93VXBsb2FkZWRVcmwgPSB0cnVlO1xuICAgICAgICB3aW5kb3cuZ2lzdHMuYXBwZW5kKHtuYW1lOiBmaWxlbmFtZSwgdXJsOiAkc2NvcGUuZ2lzdFJhd1VybCwgaHRtbFVybDogJHNjb3BlLmdpc3RIdG1sVXJsfSk7XG4gICAgICB9KS5lcnJvcihmdW5jdGlvbiAoZGF0YSwgc3RhdHVzLCBoZWFkZXJzLCBjb25maWcpIHtcbiAgICAgICAgJHNjb3BlLnNob3dBbGVydCA9IHRydWU7XG4gICAgICAgICRzY29wZS5lcnJvck1lc3NhZ2UgPSBKU09OLnN0cmluZ2lmeShkYXRhLG51bGwsMik7XG4gICAgICB9KTtcblxuICAgIH07XG4gIH1cblxuICAkc2NvcGUuYWRkVG9NYXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG5ld1VybCA9ICRzY29wZS5naXN0UmF3VXJsIHx8ICRzY29wZS5yZW1vdGVVcmw7XG4gICAgaWYgKCFuZXdVcmwpIHtcbiAgICAgICRzY29wZS5zaG93QWxlcnQgPSB0cnVlO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgICRzdGF0ZVBhcmFtcy5sYXllcnMgPSAkc3RhdGVQYXJhbXMubGF5ZXJzICsgJywnICsgbmV3VXJsO1xuICAgICQoJyN1cGxvYWRNb2RhbCcpLm1vZGFsKCdoaWRlJyk7XG4gICAgJCgnI3VwbG9hZE1vZGFsJykub24oJ2hpZGRlbi5icy5tb2RhbCcsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICRzdGF0ZS5nbygnbWFpbicsICRzdGF0ZVBhcmFtcyk7XG4gICAgfSk7XG5cbiAgfTtcblxuICAvKipcbiAgICogSWYgVXBsb2FkQ3RybCBnZXRzIGNhbGxlZCB0d2ljZSBmb3Igc29tZSByZWFzb24sIHdlIG1pZ2h0XG4gICAqIGhhdmUgdGhpcyBjbGFzcyBoYW5naW5nIGFyb3VuZCBibG9ja2luZyB0aGUgYXBwLiBVcGxvYWRDdHJsXG4gICAqIGRvZXMgZ2V0IGNhbGxlZCB0d2ljZSBzb21ldGltZXMsIGJlY2F1c2UgdGhlIG1vZGFsIHNvbWV0aW1lc1xuICAgKiBudWRnZXMgdGhlIG1hcCBhbmQgcmVpbnN0YW50aWF0ZXMgdGhlIG1vZGFsIGFnYWluIHZpYSBhIG5ld1xuICAgKiByb3V0ZS5cbiAgICovXG4gICQoJy5tb2RhbC1iYWNrZHJvcCcpLnJlbW92ZSgpO1xuXG4gICQoJyN1cGxvYWRNb2RhbCcpLm1vZGFsKCdzaG93Jyk7XG5cbiAgJCgnI3VwbG9hZE1vZGFsJykub24oJ2hpZGRlbi5icy5tb2RhbCcsIGZ1bmN0aW9uKGUpIHtcbiAgICAkc3RhdGUuZ28oJ21haW4nLCAkc3RhdGVQYXJhbXMpO1xuICB9KTtcblxufSk7XG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgTmljaG9sYXMgSGFsbGFoYW4gPG5oYWxsYWhhbkBzcGF0aWFsZGV2LmNvbT5cbiAqICAgICAgICBhbmQgUnlhbiBXaGl0bGV5ICAgICAgPHJ3aGl0bGV5QHNwYXRpYWxkZXYuY29tPlxuICogICAgICAgb24gNC8yLzE0LlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ0dlb0FuZ3VsYXInKS5jb250cm9sbGVyKCdab29tRXh0ZW50Q3RybCcsIGZ1bmN0aW9uKCRzY29wZSwgJHJvb3RTY29wZSwgJHN0YXRlUGFyYW1zLCBWZWN0b3JQcm92aWRlcikge1xuICAkc2NvcGUucGFyYW1zID0gJHN0YXRlUGFyYW1zO1xuXG4gIC8vSW5pdGlhbGl6ZSB0aGUgY291bnRyeSBzZWxlY3RvciBtZW51IGJ5IGxvYWRpbmcgdGhlIGpzb24gZmlsZSBhbmQgd3JpdGluZyBvdXQgdGhlIG5hbWVzIGludG8gdGhlIHBhbmVsXG4gICRzY29wZS5jb3VudHJ5TGlzdDEgPSBudWxsO1xuXG4gIHZhciB2ZWNSZXMgPSBWZWN0b3JQcm92aWRlci5jcmVhdGVSZXNvdXJjZShcImNvdW50cnlleHRlbnRzXCIpO1xuICB2ZWNSZXMuZmV0Y2goZnVuY3Rpb24oZ2VvanNvbil7XG4gICAgLy9Tb3J0IGFscGhhYmV0aWNhbGx5XG4gICAgZ2VvanNvbi5mZWF0dXJlcyA9IGdlb2pzb24uZmVhdHVyZXMuc29ydChmdW5jdGlvbihhLGIpe1xuICAgICAgdmFyIHRleHRBID0gYS5wcm9wZXJ0aWVzLm5hbWVfMDtcbiAgICAgIHZhciB0ZXh0QiA9IGIucHJvcGVydGllcy5uYW1lXzA7XG4gICAgICByZXR1cm4gKHRleHRBIDwgdGV4dEIpID8gLTEgOiAodGV4dEEgPiB0ZXh0QikgPyAxIDogMDtcbiAgICB9KTtcblxuICAgICRzY29wZS5jb3VudHJ5TGlzdDEgPSBnZW9qc29uLmZlYXR1cmVzO1xuICB9KTtcblxuICAvL0luaXRpYWxpemUgdGhlIEFSQyBSZWdpb24gc2VsZWN0b3IgbWVudSBieSBsb2FkaW5nIHRoZSBqc29uIGZpbGUgYW5kIHdyaXRpbmcgb3V0IHRoZSBuYW1lcyBpbnRvIHRoZSBwYW5lbFxuICAkc2NvcGUucmVnaW9uTGlzdDEgPSBudWxsO1xuXG4gIHZhciB2ZWNSZXNSZWdpb24gPSBWZWN0b3JQcm92aWRlci5jcmVhdGVSZXNvdXJjZShcImFyY3JlZ2lvbmV4dGVudHNcIik7XG4gIHZlY1Jlc1JlZ2lvbi5mZXRjaChmdW5jdGlvbihnZW9qc29uKXtcbiAgICAvL1NvcnQgYWxwaGFiZXRpY2FsbHlcbiAgICBnZW9qc29uLmZlYXR1cmVzID0gZ2VvanNvbi5mZWF0dXJlcy5zb3J0KGZ1bmN0aW9uKGEsYil7XG4gICAgICB2YXIgdGV4dEEgPSBhLnByb3BlcnRpZXMuYXJjX3JlZ2lvbjtcbiAgICAgIHZhciB0ZXh0QiA9IGIucHJvcGVydGllcy5hcmNfcmVnaW9uO1xuICAgICAgcmV0dXJuICh0ZXh0QSA8IHRleHRCKSA/IC0xIDogKHRleHRBID4gdGV4dEIpID8gMSA6IDA7XG4gICAgfSk7XG5cbiAgICAkc2NvcGUucmVnaW9uTGlzdDEgPSBnZW9qc29uLmZlYXR1cmVzO1xuICB9KTtcblxufSk7XG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgTmljaG9sYXMgSGFsbGFoYW4gPG5oYWxsYWhhbkBzcGF0aWFsZGV2LmNvbT5cbiAqICAgYW5kIFJpY2ggR3dvemR6IDxyZ3dvemR6QHNwYXRpYWxkZXYuY29tPlxuICogICAgICAgb24gNS8yMS8xNC5cbiAqL1xuXG5cbm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ0dlb0FuZ3VsYXInKS5mYWN0b3J5KCdEb251dHMnLCBmdW5jdGlvbiAoKSB7XG5cbiAgdmFyIHNlcnZpY2UgPSB7fTtcbiAgc2VydmljZS5kYXRhc2V0ID0gW107XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBEMyBEb251dCB0aGF0IGlzIGxvY2F0ZWQgaW4gdGhlIGRldGFpbHMgcGFuZWwuXG4gICAqL1xuICBmdW5jdGlvbiBFeHBhbmRvRG9udXQoZW50aXRpZXMsIHZpc3VhbGl6YXRpb25EaWN0aW9uYXJ5LCB3cmFwcGVyLCBsYWJlbFBvc2l0aW9uKSB7XG5cbiAgICB2YXIgZGF0YSxcbiAgICAgIHRtcERhdGFzZXQsXG4gICAgICBkYXRhc2V0LFxuICAgICAgd2lkdGgsXG4gICAgICBoZWlnaHQsXG4gICAgICByYWRpdXMsXG4gICAgICBjb2xvcixcbiAgICAgIHBpZSxcbiAgICAgIGFyYyxcbiAgICAgIHN2ZyxcbiAgICAgIHBhdGgsXG4gICAgICByZXBvcnRpbmdWYWx1ZUFycixcbiAgICAgIHJlcG9ydGluZ1ZhbHVlLFxuICAgICAgbGFiZWxXcmFwcGVyO1xuXG4gICAgZGF0YSA9IHt9O1xuXG4gICAgd3JhcHBlciA9ICQod3JhcHBlcilbMF07XG4gICAgJCh3cmFwcGVyKS5odG1sKCcnKTtcbiAgICB0aGlzLndyYXBwZXIgPSB3cmFwcGVyO1xuICAgIHRoaXMubGFiZWxXcmFwcGVyID0gbnVsbDtcbiAgICB0aGlzLnN2ZyA9IG51bGw7XG5cbiAgICBpZih0eXBlb2YgbGFiZWxQb3NpdGlvbiA9PT0gJ3VuZGVmaW5lZCcgfHwgKGxhYmVsUG9zaXRpb24gIT09ICd0b3AnICYmIGxhYmVsUG9zaXRpb24gIT09ICdib3R0b20nKSkge1xuICAgICAgbGFiZWxQb3NpdGlvbiA9ICd0b3AnXG4gICAgfVxuXG4gICAgLy8gTG9vcCB0aHJvdWdoIHRoZSBlbnRpdGllc1xuICAgIGZvciAodmFyIGogPSAwLCBqTWF4ID0gZW50aXRpZXMubGVuZ3RoOyBqIDwgak1heDsgaisrKSB7XG5cbiAgICAgIC8vIFNwbGl0IHRoZSBzZW1pLWNvbG9uIGRlbGltaXRlZCBzdHJpbmcgb2YgcmVwb3J0aW5nIHZhbHVlc1xuICAgICAgaWYoZW50aXRpZXNbal1bJ3NlY3Rvcl9fYyddID09PSBudWxsKSB7XG4gICAgICAgIHJlcG9ydGluZ1ZhbHVlQXJyID0gWy05OTk5XTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlcG9ydGluZ1ZhbHVlQXJyID0gZW50aXRpZXNbal1bJ3NlY3Rvcl9fYyddLnRvU3RyaW5nKCkuc3BsaXQoJzsnKTtcbiAgICAgIH1cbiAgICAgIC8vIExvb3AgdGhydSB0aGUgcmVwb3J0aW5nIHZhbHVlc1xuICAgICAgZm9yICh2YXIgayA9IDAsIGtNYXggPSByZXBvcnRpbmdWYWx1ZUFyci5sZW5ndGg7IGsgPCBrTWF4OyBrKyspIHtcblxuICAgICAgICAvLyB0aGlzIGl0ZXJhdGlvbidzIHJlcG9ydGluZyB2YWx1ZVxuICAgICAgICByZXBvcnRpbmdWYWx1ZSA9IHJlcG9ydGluZ1ZhbHVlQXJyW2tdO1xuXG4gICAgICAgIC8vIElmIHdlIGhhdmUgYWxyZWFkeSBjb21lIGFjcm9zcyB0aGlzIGlkIGJlZm9yZSAoYW5kIHN0YXJ0ZWQgYSBjb3VudCBvZiBpdHMgZnJlcXVlbmN5KSwgaW5jcmVtZW50IHRoZSBjb3VudFxuICAgICAgICBpZihkYXRhLmhhc093blByb3BlcnR5KHJlcG9ydGluZ1ZhbHVlKSkge1xuICAgICAgICAgIGRhdGFbcmVwb3J0aW5nVmFsdWVdWydjb3VudCddKys7XG4gICAgICAgIH1cblxuICAgICAgICBlbHNlIGlmIChyZXBvcnRpbmdWYWx1ZSA9PT0gJycpe1xuICAgICAgICAgIC8vIE51bGwgcmVwb3J0IGlkJ3MgY29tZSB0aHJvdWdoIGFzIGFuIGVtcHR5IHN0cmluZyBiZWNhdXNlIHNwbGl0dGluZyBhbiBlbXB0eSBzdHJpbmcsIGNyZWF0ZXMgYW4gYXJyYXkgd2l0aCBvbmUgZW1wdHkgc3RyaW5nXG4gICAgICAgICAgLy8gIFdlJ3JlIGFzc2lnbmluZyB0aGVzZSB0byBhIHZhbHVlIG9mIC05OTk5XG5cbiAgICAgICAgICAvLyBJbmNyZW1lbnQgdGhlIGNvdW50IG9mIC05OTk5XG4gICAgICAgICAgaWYoZGF0YS5oYXNPd25Qcm9wZXJ0eSgnLTk5OTknKSkge1xuICAgICAgICAgICAgZGF0YVsnLTk5OTknXVsnY291bnQnXSsrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIGlmIHRoaXMgaXMgdGhlIGZpcnN0IG51bGwgaWQsIGNyZWF0ZSBhbiBvYmplY3QgcHJvcGVydHkgYW5kIHN0YXJ0IHRoZSBjb3VudGVyXG4gICAgICAgICAgICBkYXRhWyctOTk5OSddID0ge1xuICAgICAgICAgICAgICAnY291bnQnOiAxLFxuICAgICAgICAgICAgICAnY29sb3InOiB2aXN1YWxpemF0aW9uRGljdGlvbmFyeVstOTk5OV0uY29sb3IsXG4gICAgICAgICAgICAgICdhbGlhcyc6IHZpc3VhbGl6YXRpb25EaWN0aW9uYXJ5Wy05OTk5XS5sYWJlbCB8fCAnVW5rbm93bidcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuXG4gICAgICAgICAgdmFyIHJlcG9ydGluZ1Byb3BlcnRpZXMgPSB2aXN1YWxpemF0aW9uRGljdGlvbmFyeVtyZXBvcnRpbmdWYWx1ZV07XG5cbiAgICAgICAgICBpZiAoIXJlcG9ydGluZ1Byb3BlcnRpZXMpIHtcbiAgICAgICAgICAgIHJlcG9ydGluZ1Byb3BlcnRpZXMgPSB7XG4gICAgICAgICAgICAgIGNvbG9yOiAnIzI0MDIwMScsXG4gICAgICAgICAgICAgIGFsaWFzOiByZXBvcnRpbmdWYWx1ZSB8fCAnVW5rbm93bidcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBpZiB0aGlzIGlzIHRoZSBmaXJzdCB0aW1lIHdlIHNlZSB0aGlzIGlkLCBjcmVhdGUgYW4gb2JqZWN0IHByb3BlcnR5IGFuZCBzdGFydCB0aGUgY291bnRlclxuICAgICAgICAgIGRhdGFbcmVwb3J0aW5nVmFsdWVdID0ge1xuICAgICAgICAgICAgJ2NvdW50JzogMSxcbiAgICAgICAgICAgICdjb2xvcic6IHJlcG9ydGluZ1Byb3BlcnRpZXMuY29sb3IsXG4gICAgICAgICAgICAnYWxpYXMnOiByZXBvcnRpbmdQcm9wZXJ0aWVzLmxhYmVsIHx8ICdVbmtub3duJ1xuICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgfVxuXG4gICAgfVxuXG4gICAgLy8gcHJlcCBkYXRhc2V0IGZvciBEMzsgbmVlZCBhIHRlbXAgZGF0YXNldCB0byBkZWFsIHdpdGggbWVyZ2luZyBvZiBkYXRhIGNvdW50cyBmb3IgJ290aGVyJyBjYXRlZ29yeVxuICAgIHRtcERhdGFzZXQgPSBbXTtcbiAgICBkYXRhc2V0ID0gW107XG5cbiAgICAvLyBQdXNoIHByb3BlcnRpZXMgZnJvbSBvYmplY3QgaG9sZGluZyB0aGUgY2F0ZWdvcnkgY291bnRzL2NvbG9ycyBjYXRlZ29yaWVzIGludG8gYW4gb2JqZWN0IGFycmF5XG4gICAgZm9yICh2YXIgaiBpbiBkYXRhKSB7XG4gICAgICB0bXBEYXRhc2V0LnB1c2goZGF0YVtqXSk7XG4gICAgfVxuXG4gICAgLy8gQ3JlYXRlIGFuIG9iamVjdCB0aGF0IHdpbGwgbWVyZ2UgdGhlIGNvdW50IGZyb20gYWxsIGNsYXNzaWZpY2F0aW9uIGNhdGVyZ29yaWVzIHRoYXQgd2UndmUgZGVlbWVkIGFzICdvdGhlcicnXG4gICAgdmFyIG1lcmdlZE90aGVyID0ge1xuICAgICAgJ2NvdW50JzogMCxcbiAgICAgICdjb2xvcic6IHZpc3VhbGl6YXRpb25EaWN0aW9uYXJ5Wy05OTk5XS5jb2xvcixcbiAgICAgICdhbGlhcyc6IHZpc3VhbGl6YXRpb25EaWN0aW9uYXJ5Wy05OTk5XS5sYWJlbCB8fCAnVW5rbm93bidcbiAgICB9O1xuXG4gICAgLy8gTWVyZ2UgYWxsICdvdGhlcicgb2JqZWN0czsgd2UgZGV0ZXJtaW5lIHdoaWNoIGFyZSAnb3RoZXInIGJ5IHRlc3RpbmcgdG8gc2VlIGlmIGl0cyBiZWVuIGFzc2lnbmVkIHRoZSAnb3RoZXInIGNvbG9yXG4gICAgZm9yICh2YXIgayA9IDAsIGtNYXggPSB0bXBEYXRhc2V0Lmxlbmd0aDsgayA8IGtNYXg7IGsrKykge1xuXG4gICAgICBpZih0bXBEYXRhc2V0W2tdLmNvbG9yID09PSB2aXN1YWxpemF0aW9uRGljdGlvbmFyeVstOTk5OV0uY29sb3IpIHtcbiAgICAgICAgbWVyZ2VkT3RoZXIuY291bnQgPSBtZXJnZWRPdGhlci5jb3VudCArIHRtcERhdGFzZXRba10uY291bnQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkYXRhc2V0LnB1c2godG1wRGF0YXNldFtrXSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQWRkIHRoZSBtZXJnZSBvYmplY3QgdG8gdGhlIGRhdGFzZXQgd2Ugd2lsbCB1c2UgaW4gZG9udXQgY2hhcnRcbiAgICBkYXRhc2V0LnB1c2gobWVyZ2VkT3RoZXIpO1xuICAgIHNlcnZpY2UuZGF0YXNldCA9IGRhdGFzZXQ7XG5cblxuICAgIC8vIFVzZSBqUXVlcnkgdG8gZ2V0IHRoaXMgY2x1c3RlciBtYXJrZXJzIGhlaWdodCBhbmQgd2lkdGggKHNldCBpbiB0aGUgQ1NTKVxuICAgIHdpZHRoID0gJCh3cmFwcGVyKS53aWR0aCgpICogMC42NTtcbiAgICBoZWlnaHQgPSAkKHdyYXBwZXIpLmhlaWdodCgpICogMC42NTtcblxuICAgIGlmKGhlaWdodCA9PT0gMCkge1xuICAgICAgaGVpZ2h0ID0gd2lkdGg7XG4gICAgfVxuXG4gICAgcmFkaXVzID0gIChNYXRoLm1pbih3aWR0aCwgaGVpZ2h0KSAvIDIpIC0gMTA7XG4gICAgbGFiZWxXcmFwcGVyID0gJCgnPGRpdiBjbGFzcz1cImNsZWFyZml4XCIgc3R5bGU9XCJ0ZXh0LWFsaWduOmNlbnRlcjsgbWFyZ2luOiAxMHB4IDA7XCIgPjwvZGl2PicpLmFwcGVuZFRvKHdyYXBwZXIpO1xuICAgIHZhciBsYWJlbFN3YXRjaCA9ICQoJzxkaXYgc3R5bGU9XCJkaXNwbGF5OmlubGluZS1ibG9jazsgd2lkdGg6IDFlbTsgaGVpZ2h0OiAxZW07IGJvcmRlci1yYWRpdXM6IDUwJVwiPjwvZGl2PicpLmFwcGVuZFRvKGxhYmVsV3JhcHBlcik7XG4gICAgdmFyIGxhYmVsVGV4dCA9ICQoJzxkaXYgc3R5bGU9XCJkaXNwbGF5OmlubGluZS1ibG9jazsgcGFkZGluZy1sZWZ0OiAxMHB4O21hcmdpbi10b3A6IC0uNGVtO3ZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XCI+PC9kaXY+JykuYXBwZW5kVG8obGFiZWxXcmFwcGVyKTtcblxuICAgIHBpZSA9IGQzLmxheW91dC5waWUoKVxuICAgICAgLnNvcnQobnVsbCk7XG5cbiAgICBhcmMgPSBkMy5zdmcuYXJjKClcbiAgICAgIC5pbm5lclJhZGl1cyhyYWRpdXMtcmFkaXVzICogMC40KVxuICAgICAgLm91dGVyUmFkaXVzKHJhZGl1cyk7XG5cbiAgICB2YXIgYXJjT3ZlciA9IGQzLnN2Zy5hcmMoKVxuICAgICAgLm91dGVyUmFkaXVzKHJhZGl1cyArIDEwKVxuICAgICAgLmlubmVyUmFkaXVzKChyYWRpdXMtcmFkaXVzICogMC40KSArIDEwKTtcblxuICAgIC8vIE5vdGUgdGhhdCB3ZSBhZGQgJ2NsdXN0ZXJEb251dCcgYXMgYSBzZWxlY3RvclxuICAgIHN2ZyA9IGQzLnNlbGVjdCh3cmFwcGVyKS5hcHBlbmQoXCJzdmdcIilcbiAgICAgIC5hdHRyKFwid2lkdGhcIiwgd2lkdGgpXG4gICAgICAuYXR0cihcImhlaWdodFwiLCBoZWlnaHQpXG4gICAgICAuYXBwZW5kKFwiZ1wiKVxuICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoXCIgKyB3aWR0aCAvIDIgKyBcIixcIiArIGhlaWdodCAvIDIgKyBcIilcIik7XG5cbiAgICB0aGlzLnBhdGggPSBzdmcuc2VsZWN0QWxsKFwicGF0aFwiKVxuICAgICAgLmRhdGEoZnVuY3Rpb24oKXtcbiAgICAgICAgdmFyIGRhdGFPYmpBcnIsXG4gICAgICAgICAgZGF0YUFycixcbiAgICAgICAgICBwaWVEYXRhO1xuXG4gICAgICAgIGRhdGFPYmpBcnIgPSBkYXRhc2V0O1xuXG4gICAgICAgIGRhdGFBcnIgPSBbXTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMCwgaU1heCA9IGRhdGFPYmpBcnIubGVuZ3RoOyBpIDwgaU1heDsgaSsrKSB7XG4gICAgICAgICAgZGF0YUFyci5wdXNoKGRhdGFPYmpBcnJbaV1bJ2NvdW50J10pO1xuICAgICAgICB9XG5cbiAgICAgICAgcGllRGF0YSA9IHBpZShkYXRhQXJyKTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMCwgaU1heCA9IHBpZURhdGEubGVuZ3RoOyBpIDwgaU1heDsgaSsrKSB7XG4gICAgICAgICAgcGllRGF0YVtpXS5kYXRhID0gZGF0YU9iakFycltpXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwaWVEYXRhO1xuICAgICAgfSlcbiAgICAgIC5lbnRlcigpLmFwcGVuZChcInBhdGhcIilcbiAgICAgIC5hdHRyKFwiZmlsbFwiLCBmdW5jdGlvbihkLCBqKSB7XG4gICAgICAgIHJldHVybiBkLmRhdGEuY29sb3I7XG4gICAgICB9KVxuICAgICAgLmF0dHIoXCJkXCIsIGFyYylcbiAgICAgIC5hdHRyKFwiY3Vyc29yXCIsXCJwb2ludGVyXCIpXG4gICAgICAuYXR0cihcImN1cnNvclwiLFwicG9pbnRlclwiKVxuICAgICAgLm9uKFwibW91c2VvdmVyXCIsIGZ1bmN0aW9uKGQsIGkpIHtcblxuICAgICAgICAvLyBjbGVhciBwcmV2aW91c2x5IGFjdGl2ZSBjaGFydCB3ZWRnZVxuICAgICAgICBkMy5zZWxlY3Qod3JhcHBlcikuc2VsZWN0QWxsKCdwYXRoJykudHJhbnNpdGlvbigpXG4gICAgICAgICAgLmR1cmF0aW9uKDEwMClcbiAgICAgICAgICAuYXR0cihcImRcIiwgYXJjKVxuICAgICAgICAgIC5hdHRyKCdvcGFjaXR5JywxKVxuICAgICAgICAgIC5hdHRyKCdzdHJva2Utd2lkdGgnLDEpXG4gICAgICAgICAgLmF0dHIoJ3N0cm9rZScsJ3JnYmEoMjU1LDI1NSwyNTUsMSknKTtcblxuICAgICAgICAvLyBNYWtlIHRoZSBtb3VzZW92ZXIgd2VkZ2UgYWN0aXZlXG4gICAgICAgIGQzLnNlbGVjdCh0aGlzKVxuICAgICAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgICAgICAuZHVyYXRpb24oMTAwKVxuICAgICAgICAgIC5hdHRyKFwiZFwiLCBhcmNPdmVyKVxuICAgICAgICAgIC5hdHRyKCdvcGFjaXR5JywwLjgpXG4gICAgICAgICAgLmF0dHIoJ3N0cm9rZS13aWR0aCcsMilcbiAgICAgICAgICAuYXR0cignc3Ryb2tlJywncmdiYSgyNTUsMjU1LDI1NSwxKScpO1xuXG4gICAgICAgIC8vIE1ha2UgYXBwcm9wcmlhdGUgbGFiZWxcbiAgICAgICAgJChsYWJlbFN3YXRjaCkuY3NzKCdiYWNrZ3JvdW5kLWNvbG9yJywgZC5kYXRhLmNvbG9yKTtcbiAgICAgICAgJChsYWJlbFRleHQpLmh0bWwoZC5kYXRhLmFsaWFzKTtcblxuICAgICAgICAvLyBTaG93IHRoZSBsYWJlbCBpZiBjdXJyZW50bHkgaGlkZGVuXG4gICAgICAgIGlmKCQoc2VsZi5jYXB0aW9uKS5jc3MoJ2Rpc3BsYXknKSA9PT0gJ25vbmUnKSB7XG4gICAgICAgICAgJChsYWJlbFdyYXBwZXIpLnNsaWRlVG9nZ2xlKCk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAvLy5vbihcIm1vdXNlb3V0XCIsIGZ1bmN0aW9uKGQsaSkge30pXG4gICAgICAuZWFjaChmdW5jdGlvbihkLCBpKSB7XG5cbiAgICAgICAgLy8gb24gbG9hZCwgd2Ugd2FudCB0aGUgbGFyZ2VzdCBjaGFydCB3ZWRnZSB0byBiZSBhY3RpdmV3XG4gICAgICAgIGlmKGkgIT09IDAgICl7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgZDMuc2VsZWN0KHRoaXMpXG4gICAgICAgICAgLnRyYW5zaXRpb24oKVxuICAgICAgICAgIC5kdXJhdGlvbigxMDApXG4gICAgICAgICAgLmF0dHIoXCJkXCIsIGFyY092ZXIpXG4gICAgICAgICAgLmF0dHIoJ29wYWNpdHknLDAuOClcbiAgICAgICAgICAuYXR0cignc3Ryb2tlLXdpZHRoJywyKVxuICAgICAgICAgIC5hdHRyKCdzdHJva2UnLCdyZ2JhKDI1NSwyNTUsMjU1LDEpJyk7XG5cbiAgICAgICAgLy8gbWFrZSB0aGUgbGFiZWxcbiAgICAgICAgJChsYWJlbFN3YXRjaCkuY3NzKCdiYWNrZ3JvdW5kLWNvbG9yJywgZC5kYXRhLmNvbG9yKTtcbiAgICAgICAgJChsYWJlbFRleHQpLmh0bWwoZC5kYXRhLmFsaWFzKTtcblxuICAgICAgICBpZigkKGxhYmVsV3JhcHBlcikuY3NzKCdkaXNwbGF5JykgPT09ICdub25lJykge1xuICAgICAgICAgICQobGFiZWxXcmFwcGVyKS5zbGlkZVRvZ2dsZSgpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgIGlmKGxhYmVsUG9zaXRpb24gPT09ICd0b3AnKSB7XG4gICAgICBsYWJlbFdyYXBwZXIucHJlcGVuZFRvKHdyYXBwZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsYWJlbFdyYXBwZXIuYXBwZW5kVG8od3JhcHBlcik7XG4gICAgfVxuXG4gICAgdGhpcy5sYWJlbFdyYXBwZXIgPSBsYWJlbFdyYXBwZXI7XG4gICAgdGhpcy5zdmcgPSBzdmc7XG4gIH1cblxuXG5cblxuICBmdW5jdGlvbiBtYWtlVmlzdWFsaXphdGlvbkRpY3Rpb25hcnkoY2F0ZWdvcnlFbnRpdGllcywgb3B0cyl7XG5cbiAgICB2YXIgb3B0aW9ucyA9IG9wdHMgfHwge307XG5cbiAgICBvcHRpb25zLnVuYXNzaWduZWRDb2xvciA9IG9wdGlvbnMudW5hc3NpZ25lZENvbG9yIHx8ICcjQ0NDQ0NDJztcbiAgICBvcHRpb25zLnVuYXNzaWduZWRMYWJlbCA9IG9wdGlvbnMudW5hc3NpZ25lZExhYmVsIHx8ICdOb3QgQXNzaWduZWQnO1xuXG4gICAgdmFyIGRlZmF1bHRQYWxldHRlID0gWycjZTY1NTUyJyxcdCcjZjE4NDMyJyxcdCcjZjRkNzQ2JyxcdCcjNmQ3YzU4JyxcdCcjYjljMDNlJyxcdCcjMGY0ZTYwJyxcdCcjMDFhYTk1JyxcdCcjYTFiMWNjJyxcdCcjZmY4NTlhJyxcdCcjYjNiMDkxJyxcdCcjOGQyNzI1JyxcdCcjYTM3NjU0JyxcdCcjYmFhNzQ5JyxcdCcjNzViYjE4JyxcdCcjZGRkZmIzJyxcdCcjMzliNGQ3JyxcdCcjODdkOGNlJyxcdCcjNDg3NmMzJyxcdCcjZGIxNzM5JyxcdCcjOGQ4MTA1JyxcdCcjZDA4NDg0JyxcdCcjZmRkNWI3JyxcdCcjZjRmN2Q0JyxcdCcjZDhlZmI5JyxcdCcjZWVmNzU4JyxcdCcjZDZmNGZkJyxcdCcjYWJiZWJjJyxcdCcjODQ3Y2QxJyxcdCcjZWJiOGQ0JyxcdCcjZTljZTg0JyxcdCcjZDBhNmE2JyxcdCcjNjE1NTQ5JyxcdCcjOTk2OTJiJyxcdCcjYWRiZjk1JyxcdCcjMTVlNWM1JyxcdCcjNWJiN2QyJyxcdCcjNGE4Yzg0JyxcdCcjZDE4Y2ZkJyxcdCcjZmMxNzNlJyxcdCcjZmJmM2E1JyxcdCcjOWI1YzVjJyxcdCcjZmJlYmRlJyxcdCcjZGRiOTAzJyxcdCcjY2JjYmNiJyxcdCcjNDY0NjQ2JyxcdCcjMjg3MDg0JyxcdCcjYjJmN2VlJyxcdCcjOWU5ZTllJyxcdCcjZWVlZWVlJyxcdCcjYWUxZmE5J11cblxuICAgIHZhciBkaWN0aW9uYXJ5ID0ge307XG5cbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgY2F0ZWdvcnlFbnRpdGllcy5sZW5ndGg7IGkrKykge1xuXG4gICAgICB2YXIgY29sb3IgPSBudWxsO1xuXG4gICAgICBpZihpIDwgZGVmYXVsdFBhbGV0dGUubGVuZ3RoKSB7XG4gICAgICAgIGNvbG9yID0gZGVmYXVsdFBhbGV0dGVbaV07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgaW5kZXggPSBpICUgZGVmYXVsdFBhbGV0dGUubGVuZ3RoIC0gMTtcbiAgICAgICAgY29sb3IgPSBkZWZhdWx0UGFsZXR0ZVtpbmRleF07XG4gICAgICB9XG4gICAgICBkaWN0aW9uYXJ5W2NhdGVnb3J5RW50aXRpZXNbaV0udmFsdWVdID0ge1xuICAgICAgICB2YWx1ZTogY2F0ZWdvcnlFbnRpdGllc1tpXS52YWx1ZSxcbiAgICAgICAgbGFiZWw6IGNhdGVnb3J5RW50aXRpZXNbaV0ubGFiZWwsXG4gICAgICAgIGNvbG9yOiBjb2xvclxuICAgICAgfTtcblxuICAgIH1cblxuICAgIGRpY3Rpb25hcnlbLTk5OTldID0ge1xuICAgICAgdmFsdWU6IC05OTk5LFxuICAgICAgbGFiZWw6IG9wdGlvbnMudW5hc3NpZ25lZExhYmVsLFxuICAgICAgY29sb3I6IG9wdGlvbnMudW5hc3NpZ25lZENvbG9yXG4gICAgfTtcblxuICAgIHJldHVybiBkaWN0aW9uYXJ5O1xuICB9XG5cblxuICAvKipcbiAgICogUHVibGljIGZ1bmN0aW9ucyB0aGF0IGFyZSBhY2Nlc3NpYmxlIGVsc2V3aGVyZSBpbiB0aGUgYXBwLlxuICAgKiBFeDogRG9udXRzLmNyZWF0ZURldGFpbHNEb251dChhcmcxLCBhcmcyKTtcbiAgICovXG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgRDMgZG9udXQgdGhhdCBnb2VzIGFyb3VuZCBhIGxhYmVsIG9uIHRoZSBtYXAuXG4gICAgICovXG4gICAgc2VydmljZS5jcmVhdGVMYWJlbERvbnV0ID0gZnVuY3Rpb24oc2VjdG9ycywgcHJvamVjdHMsIGRpdklkKSB7XG4gICAgICB2YXIgdml6RGljdGlvbmFyeSA9IG1ha2VWaXN1YWxpemF0aW9uRGljdGlvbmFyeShzZWN0b3JzKTtcbiAgICAgIHZhciBkb251dCA9IG5ldyBFeHBhbmRvRG9udXQocHJvamVjdHMsIHZpekRpY3Rpb25hcnksIGRpdklkICwgJ2JvdHRvbScpO1xuICAgICAgJChkaXZJZCkucHJlcGVuZCgnPGRpdiBpZD1cInNlY3RvcnMtaGVhZGluZ1wiIGNsYXNzPVwiaGVhZGluZ1wiPlNlY3RvcnM8L2Rpdj4nKTtcbiAgICAgIHJldHVybiBkb251dDtcbiAgICB9O1xuXG4gIHJldHVybiBzZXJ2aWNlO1xuXG5cbn0pO1xuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IE5pY2hvbGFzIEhhbGxhaGFuIDxuaGFsbGFoYW5Ac3BhdGlhbGRldi5jb20+XG4gKiAgICAgICBvbiAzLzE4LzE0LlxuICovXG5cbi8qKlxuICogQWxsIG9mIHRoZSBsYXllciBuYW1lcyBuZWVkIHRvIGJlIGxvd2VyY2FzZS5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyLm1vZHVsZSgnR2VvQW5ndWxhcicpLnNlcnZpY2UoJ0xheWVyQ29uZmlnJywgZnVuY3Rpb24gKCkge1xuXG4gIHZhciBjb25maWdMYXllcnMgPSBbXG4gICAgcmVxdWlyZSgnLi4vLi4vLi4vLi4vQ29uZmlnL2xheWVycy9hbGwuanMnKSxcbiAgICByZXF1aXJlKCcuLi8uLi8uLi8uLi9Db25maWcvbGF5ZXJzL2Jhc2VtYXBzLmpzJyksXG4gICAgcmVxdWlyZSgnLi4vLi4vLi4vLi4vQ29uZmlnL2xheWVycy9kaXNhc3Rlci5qcycpLFxuICAgIHJlcXVpcmUoJy4uLy4uLy4uLy4uL0NvbmZpZy9sYXllcnMvb3RoZXIuanMnKSxcbiAgICByZXF1aXJlKCcuLi8uLi8uLi8uLi9Db25maWcvbGF5ZXJzL3Byb2plY3QuanMnKSxcbiAgICAvL3JlcXVpcmUoJy4uLy4uLy4uLy4uL0NvbmZpZy9sYXllcnMvcHJvamVjdGhlYWx0aC5qcycpLFxuICAgIHJlcXVpcmUoJy4uLy4uLy4uLy4uL0NvbmZpZy9sYXllcnMvcHJvamVjdHJpc2suanMnKSxcbiAgICByZXF1aXJlKCcuLi8uLi8uLi8uLi9Db25maWcvbGF5ZXJzL3ZlY3RvcnRpbGVzLmpzJylcblxuICBdO1xuXG4gIC8qKlxuICAgKiBBZGRzIHRoZSBsYXllcnMgc3BlY2lmaWVkIGluIHRoZSBDb25maWcvbGF5ZXJzIGRpcmVjdG9yeSB0byB0aGlzLlxuICAgKi9cbiAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGNvbmZpZ0xheWVycy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIHZhciBjZmcgPSBjb25maWdMYXllcnNbaV07XG4gICAgZm9yICh2YXIga2V5IGluIGNmZykge1xuICAgICAgdGhpc1trZXldID0gY2ZnW2tleV07XG4gICAgfVxuICB9XG5cblxuICAvKipcbiAgICogYmJveFxuICAgKlxuICAgKiBUaGlzIGlzIHVuaXZlcnNhbCB0byBhbGwgbGF5ZXJzLCBhbmQgYmJveHVybCBmZXRjaGVzIHRoZSBmZWF0dXJlIGl0aW5lcmFyeS4gVGhpcyBpcyBpbiB0dXJuIHVzZWQgdG8gZmluZCB0aGUgY2VudGVyXG4gICAqIGZlYXR1cmUgZm9yIHRoZSBicmVhZGNydW1icyBhcyB3ZWxsIGFzIGZldGNoIHRoZSBmZWF0dXJlcyB0aGF0IGFwcGx5IHRvIGEgQkJveEdlb0pTT04gb2JqZWN0LlxuICAgKlxuICAgKiBAdHlwZSB7e2Jib3h1cmw6ICosIGNlbnRlcnVybDogKn19XG4gICAqL1xuICB0aGlzLmJib3ggPSB7XG4gICAgYmJveHVybDogY29uZmlnLmNodWJic1BhdGgoJ3NlcnZpY2VzL2N1c3RvbS9jdXN0b21fb3BlcmF0aW9uP25hbWU9Z2V0aWRzYnlleHRlbnQmZm9ybWF0PWpzb24mYmJveD06YmJveCcpLFxuICAgIC8vIHVzZWQgdG8gZ2V0IHRoZSBjZW50ZXIgZmVhdHVyZS4gY2FuIGdldCBhbnkgZmVhdHVyZSB5b3Ugd2FudCBieSBpZFxuICAgIGZlYXR1cmw6IGNvbmZpZy5jaHViYnNQYXRoKCdzZXJ2aWNlcy9jdXN0b20vY3VzdG9tX29wZXJhdGlvbj9uYW1lPWdldGZlYXR1cmVzYnlpZCZmb3JtYXQ9Z2VvanNvbiZnYWRtX2xldmVsPTpsZXZlbCZpZHM9OmlkcycpXG4gIH07XG5cbiAgLyoqXG4gICAqIEJCb3hHZW9KU09OXG4gICAqXG4gICAqIFRoaXMgbGF5ZXIgdHlwZSByZXRyaWV2ZWQgZmVhdHVyZXMgdGhhdCBpbnRlcnNlY3Qgd2l0aCB0aGUgbWFwJ3MgYm91bmRpbmcgYm94LlxuICAgKiBUaGVyZSBtdXN0IGJlIGEgYmFja2VuZCBBUEkgdGhhdCB1bmRlcnN0YW5kcyB0aGlzLiBUaGUgZmVhdHVyZXMgdGhhdCBhcHBseVxuICAgKiB0byB0aGUgYm91bmRpbmcgYm94IGFyZSBmZXRjaGVkIHVuaXZlcnNhbGx5IHRvIGFsbCBsYXllcnMuIFRoZXNlIGVuZHBvaW50c1xuICAgKiBhcmUgc3BlY2lmaWVkIGluIHRoaXMuYmJveC5cbiAgICpcbiAgICogVGhlIENodWJicyBTcGF0aWFsIFNlcnZlciBmdWxseSBjb21wcmVoZW5kcyB0aGlzLCBvdGhlcnMgZG8gbm90LlxuICAgKlxuICAgKiBAdHlwZSB7e3R5cGU6IHN0cmluZ319XG4gICAqL1xuXG4gIC8vR0FETSBjb3VudHJ5IGV4dGVudHMsIGxldmVsIDBcbiAgdGhpcy5jb3VudHJ5ZXh0ZW50cyA9IHtcbiAgICB0eXBlOiAnZ2VvanNvbicsXG4gICAgICB0aGVtZTogJ290aGVyJyxcbiAgICAgIHVybDogJ2RhdGEvdndfZ2FkbV9yYXdfZ2VvbS5nZW9qc29uJ1xuICB9O1xuXG4gIC8vQVJDIFJlZ2lvbiBleHRlbnRzXG4gIHRoaXMuYXJjcmVnaW9uZXh0ZW50cyA9IHtcbiAgICB0eXBlOiAnZ2VvanNvbicsXG4gICAgICB0aGVtZTogJ290aGVyJyxcbiAgICAgIHVybDogJ2RhdGEvYXJjX3JlZ2lvbl9leHRlbnRzLmdlb2pzb24nXG4gIH07XG5cbiAgLyoqXG4gICAqIEZvciBsYXllcnMsIHdlIHRyeSBhbmQgZ2V0IGFuIGFsaWFzIGZvciBldmVyeXRoaW5nLCBzbyBpZiBpdCdzIGEgVVJMIHRoYXRcbiAgICogZG9lcyBub3QgbWF0Y2gsIHdlIGp1c3Qgd2FudCB0byByZXR1cm4gaXRzZWxmIHNvIHdlIGNhbiBmZXRjaCB0aGF0IGdpdmVuIHVybC5cbiAgICpcbiAgICogQHBhcmFtIG5hbWVcbiAgICogQHJldHVybnMgeyp9XG4gICAqL1xuICB0aGlzLmZpbmQgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHZhciB2YWwgPSB0aGlzW25hbWVdIHx8IHRoaXNbbmFtZS50b0xvd2VyQ2FzZSgpXTtcbiAgICBpZiAodHlwZW9mIHZhbCAhPT0gJ3VuZGVmaW5lZCcgJiYgdmFsICE9PSBudWxsKSB7XG4gICAgICByZXR1cm4gdmFsO1xuICAgIH1cbiAgICBpZiAobmFtZS5zbGljZSgwLCA0KS50b0xvd2VyQ2FzZSgpID09PSAnaHR0cCcpIHtcbiAgICAgIHJldHVybiBuYW1lO1xuICAgIH1cbiAgICBjb25zb2xlLmVycm9yKCdDT1VMRCBOT1QgRklORCBBTElBUzogJyArIG5hbWUpO1xuICAgIHJldHVybiBudWxsO1xuICB9O1xuXG59KTtcbiIsIi8qKlxuICogQ3JlYXRlZCBieSBOaWNob2xhcyBIYWxsYWhhbiA8bmhhbGxhaGFuQHNwYXRpYWxkZXYuY29tPlxuICogICAgICAgb24gMy8xOC8xNC5cbiAqL1xuXG4vKipcbiAqIENvbmZpZyBGaWxlIGZvciBTdG9yaWVzIFBhbmVsXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ0dlb0FuZ3VsYXInKS5zZXJ2aWNlKCdTdG9yaWVzQ29uZmlnJywgZnVuY3Rpb24gKCkge1xuXG4gIC8qKlxuICAgKiBTdG9yaWVzIFBhbmVsIExpc3RcbiAgICpcbiAgICogTGlzdCBvZiBzdG9yaWVzIHRoYXQgZ2V0IHNob3duIGluIHRoZSBTdG9yaWVzIFBhbmVsLiBFZGl0IHRoaXMgdG8gYWRkIG9yIHJlbW92ZVxuICAgKiBzdG9yaWVzIHRoYXQgdGhlIHVzZXIgd2lsbCBzZWUgYXMgY2hvaWNlcy4gQWxsIHN0b3JpZXMsIGluY2x1ZGluZyBvbmVzIG5vdCBpbiB0aGlzXG4gICAqIGxpc3QsIGNhbiBzdGlsbCBiZSBtYW51YWxseSByZWZlcmVuY2VkIGluIHRoZSB1cmwuIFRoaXMgaXMganVzdCBmb3IgdGhlIFVzZXIgSW50ZXJmYWNlLlxuICAgKi9cbiAgdGhpcy5zdG9yaWVzID0gW1xuICAgICdoYWl5YW4nLFxuICAgICdlYm9sYScsXG4gICAgJ2dpcycsXG4gICAgJ2Rpc2FzdGVycycsXG4gICAgJ3BvcG1vdmVtZW50JyxcbiAgICAnY3VycmVudHByb2plY3RzJyxcbiAgICAnaGFpdGlwcm9qZWN0cycsXG4gICAgJ2dkcGMnLFxuICAgICdsYWNwcm9qZWN0cycsXG4gICAgJ2FtZWVwcm9qZWN0cycsXG4gICAgJ2FmcmljYXByb2plY3RzJ1xuICBdO1xuXG5cbiAgLyoqXG4gICAqIFN0b3JpZXNcbiAgICpcbiAgICogQWxsIHN0b3J5IGFsaWFzZXMgY2FuIGJlIHJlZmVycmVkIHRvIGluIHRoZSB1cmwuIFRoZSBjb3JyZXNwb25kaW5nXG4gICAqIHBhdGggdG8gdGhlIHRodW1ibmFpbCBpbiB0aGUgU3RvcmllcyBQYW5lbCBzaG91bGQgYmU6XG4gICAqICAgIGltYWdlcy97YWxpYXNOYW1lfS5qcGdcbiAgICpcbiAgICovXG5cbiAgdGhpcy5oYWl5YW4gPSB7XG4gICAgdXJsOiAnL21hcGZvbGlvL2luZGV4Lmh0bWwjL21hcEAxMi43Njg5NDYsMTIyLjQ4NjU3Miw2KG9ydGhvLGdhZG0wLGdkYWNzKSxkaXNhc3Rlcj9kZXRhaWxzLXBhbmVsPW9wZW4mc2ZfaWQ9YTBFZDAwMDAwMHFabnRVRUFTJyxcbiAgICBuYW1lOiAnVHlwaG9vbiBIYWl5YW4gUmVzcG9uc2UnLFxuICAgIGRhdGU6ICcyMDEzLTEwLTEyJyxcbiAgICB0aHVtYm5haWw6ICdpbWFnZXMvc3Rvcmllcy9oYWl5YW4uanBnJyxcbiAgICBrZXl3b3JkczogJ1R5cGhvb24sIERpc2FzdGVyIFJlc3BvbnNlLCBIYWl5YW4sIERpc2FzdGVyLCBBTUVFJ1xuICB9O1xuICB0aGlzLnBhbSA9IHtcbiAgICB1cmw6ICcvbWFwZm9saW8vaW5kZXguaHRtbCMvbWFwQC0xNi41NTE5NjIsMTY4LjA4NTMyNyw3KG9ydGhvLGdkYWNzLGdhZG0wKSxkaXNhc3RlcicsXG4gICAgbmFtZTogJ0N5Y2xvbmUgUGFtIFJlc29wbnNlJyxcbiAgICBkYXRlOiAnMjAxNS0xNS0zJyxcbiAgICB0aHVtYm5haWw6ICdpbWFnZXMvc3Rvcmllcy9wYW0uanBnJyxcbiAgICBrZXl3b3JkczogJ0N5Y2xvbmUsIERpc2FzdGVyIFJlc3BvbnNlLCBWYW51YXR1LCBBZnJpY2EnXG4gIH07XG4gIHRoaXMuZ2lzID0ge1xuICAgIHVybDogJ21hcGZvbGlvLyMvbWFwQDEzLjQ5NjQ3MywxMC40NTg5ODQsMyhzYXRlbGxpdGUsZ2FkbTApLHByb2plY3QvZXhwb3J0P2ZpbHRlcnM9c2VjdG9yX19jJTI1MjBMSUtFJTI1MjAlMjUyNyUyNTI1R0lTJTI1MjAlMjUyNiUyNTIwSW5mb3JtYXRpb24lMjUyME1hbmFnZW1lbnQlMjUyNSUyNTI3JTI1MjAnLFxuICAgIG5hbWU6ICdHSVMgUHJvamVjdHMnLFxuICAgIGRhdGU6ICcyMDE1LTMwLTEyJyxcbiAgICB0aHVtYm5haWw6ICdpbWFnZXMvc3Rvcmllcy9naXMuanBnJyxcbiAgICBrZXl3b3JkczogJ0dJUywgTWlzc2luZyBNYXBzLCBNYXAnXG4gIH07XG4gIHRoaXMuZGlzYXN0ZXJzID0ge1xuICAgIHVybDogJ21hcGZvbGlvLyMvbWFwQDE5LjE0NTE2OCw0MS42NjAxNTYsMihzYXRlbGxpdGUsZ2FkbTApLGRpc2FzdGVyVHlwZT9maWx0ZXJzPWlyb2Nfc3RhdHVzX19jJTI1MjBMSUtFJTI1MjAlMjUyNyUyNTI1TW9uaXRvcmluZyUyNTI1JTI1MjdPUiUyNTIwaXJvY19zdGF0dXNfX2MlMjUyMExJS0UlMjUyMCUyNTI3JTI1MjVBY3RpdmUlMjUyNSUyNTI3JTI1MjAmY2F0ZWdvcnk9SHVtYW4lMjBSZWxhdGVkJyxcbiAgICBuYW1lOiAnQWN0aXZlIFJlc3BvbnNlcycsXG4gICAgZGF0ZTogJzIwMTUtMzAtMTInLFxuICAgIHRodW1ibmFpbDogJ2ltYWdlcy9zdG9yaWVzL2Rpc2FzdGVycy5qcGcnLFxuICAgIGtleXdvcmRzOiAnSVJPQywgUmVzcG9uc2UsIERpc2FzdGVyJ1xuICB9O1xuICB0aGlzLnBvcG1vdmVtZW50ID0ge1xuICAgIHVybDogJ21hcGZvbGlvLyMvbWFwQDQ1LjQ3NTU0MCwxNS43NTQzOTUsNShzYXRlbGxpdGUsZ2FkbTApLGRpc2FzdGVyVHlwZT9maWx0ZXJzPWRpc2FzdGVyX3R5cGVfX2MlMjUyMExJS0UlMjUyMCUyNTI3JTI1MjVQb3B1bGF0aW9uJTI1MjBNb3ZlbWVudCUyNTI1JTI1MjclMjUyMEFORCUyNTIwJTI1Mjhpcm9jX3N0YXR1c19fYyUyNTIwTElLRSUyNTIwJTI1MjclMjUyNU1vbml0b3JpbmclMjUyNSUyNTI3T1IlMjUyMGlyb2Nfc3RhdHVzX19jJTI1MjBMSUtFJTI1MjAlMjUyNyUyNTI1QWN0aXZlJTI1MjUlMjUyNyUyNTIwJTI1MjkmY2F0ZWdvcnk9SHVtYW4lMjBSZWxhdGVkJyxcbiAgICBuYW1lOiAnRXVyb3BlYW4gUG9wIE1vdmVtZW50JyxcbiAgICBkYXRlOiAnMjAxNS0zMC0xMicsXG4gICAgdGh1bWJuYWlsOiAnaW1hZ2VzL3N0b3JpZXMvcG9wbW92ZW1lbnQuanBnJyxcbiAgICBrZXl3b3JkczogJ0lST0MsIFJlc3BvbnNlLCBEaXNhc3RlciwgUG9wdWxhdGlvbiBNb3ZlbWVudCdcbiAgfTtcbiAgdGhpcy5jdXJyZW50cHJvamVjdHMgPSB7XG4gICAgdXJsOiAnbWFwZm9saW8vIy9tYXBAMjQuNjg2OTUyLDI3LjI0NjA5NCwyKHNhdGVsbGl0ZSxnYWRtMCkscHJvamVjdCcsXG4gICAgbmFtZTogJ0N1cnJlbnQgUHJvamVjdHMnLFxuICAgIGRhdGU6ICcyMDE1LTMwLTEyJyxcbiAgICB0aHVtYm5haWw6ICdpbWFnZXMvc3Rvcmllcy9wcm9qZWN0cy5qcGcnLFxuICAgIGtleXdvcmRzOiAnSVJQLCBBZnJpY2EsIEFNRUUsIExBQywgV29ybGQsIFByb2dyYW1zLCBQcm9qZWN0cydcbiAgfTtcbiAgdGhpcy5oYWl0aXByb2plY3RzID0ge1xuICAgIHVybDonbWFwZm9saW8vIy9tYXBAMTguOTQwMDYyLC03MS42NTAwODUsOChzYXRlbGxpdGUsZ2FkbTApLHByb2plY3Q/ZmlsdGVycz1udWxsJmRldGFpbHMtcGFuZWw9b3BlbicsXG4gICAgbmFtZTogJ0hBUCBQcm9qZWN0cycsXG4gICAgZGF0ZTogJzIwMTUtMzAtMTInLFxuICAgIHRodW1ibmFpbDogJ2ltYWdlcy9zdG9yaWVzL2hhcC5qcGcnLFxuICAgIGtleXdvcmRzOiAnTEFDLCBIQVAsIEhhaXRpLCBQcm9ncmFtcywgUHJvamVjdHMnXG4gIH07XG4gIHRoaXMuZ2RwYyA9IHtcbiAgICB1cmw6J21hcGZvbGlvLyMvbWFwQDYuNDg5OTgzLDE4LjEwNTQ2OSwyKHNhdGVsbGl0ZSxnYWRtMCkscHJvamVjdD9maWx0ZXJzPWJ1c2luZXNzX3VuaXRfX2MlMjUyMExJS0UlMjUyMCUyNTI3JTI1MjVHRFBDJTI1MjUlMjUyNyUyNTIwJyxcbiAgICBuYW1lOiAnR0RQQyBQcm9qZWN0cycsXG4gICAgZGF0ZTogJzIwMTUtMzAtMTInLFxuICAgIHRodW1ibmFpbDogJ2ltYWdlcy9zdG9yaWVzL2dkcGMuanBnJyxcbiAgICBrZXl3b3JkczogJ0dEUEMsIFByb2dyYW1zLCBQcm9qZWN0cydcbiAgfTtcbiAgdGhpcy5sYWNwcm9qZWN0cyA9IHtcbiAgICB1cmw6J21hcGZvbGlvLyMvbWFwQC0xMi4zODI5MjgsLTY0LjAyODMyMCw0KHNhdGVsbGl0ZSxnYWRtMCkscHJvamVjdD9maWx0ZXJzPWJ1c2luZXNzX3VuaXRfX2MlMjUyMExJS0UlMjUyMCUyNTI3JTI1MjVMQUMlMjUyNSUyNTI3JTI1MjAnLFxuICAgIG5hbWU6ICdHRFBDIFByb2plY3RzJyxcbiAgICBkYXRlOiAnMjAxNS0zMC0xMicsXG4gICAgdGh1bWJuYWlsOiAnaW1hZ2VzL3N0b3JpZXMvbGFjLmpwZycsXG4gICAga2V5d29yZHM6ICdMQUMsIFByb2dyYW1zLCBQcm9qZWN0cydcbiAgfTtcbiAgdGhpcy5hbWVlcHJvamVjdHMgPSB7XG4gICAgdXJsOidtYXBmb2xpby8jL21hcEA2LjQ4OTk4MywxOC4xMDU0NjksMihzYXRlbGxpdGUsZ2FkbTApLHByb2plY3Q/ZmlsdGVycz1idXNpbmVzc191bml0X19jJTI1MjBMSUtFJTI1MjAlMjUyNyUyNTI1R0RQQyUyNTI1JTI1MjclMjUyMCcsXG4gICAgbmFtZTogJ0dEUEMgUHJvamVjdHMnLFxuICAgIGRhdGU6ICcyMDE1LTMwLTEyJyxcbiAgICB0aHVtYm5haWw6ICdpbWFnZXMvc3Rvcmllcy9hbWVlLmpwZycsXG4gICAga2V5d29yZHM6ICdBTUVFLCBQcm9ncmFtcywgUHJvamVjdHMnXG4gIH07XG4gIHRoaXMuYWZyaWNhcHJvamVjdHMgPSB7XG4gICAgdXJsOidtYXBmb2xpby8jL21hcEAtMS41ODE4MzAsMjMuNTk4NjMzLDQoc2F0ZWxsaXRlLGdhZG0wKSxwcm9qZWN0JyxcbiAgICBuYW1lOiAnQWZyaWNhIFByb2plY3RzJyxcbiAgICBkYXRlOiAnMjAxNS0zMC0xMicsXG4gICAgdGh1bWJuYWlsOiAnaW1hZ2VzL3N0b3JpZXMvYWZyaWNhLmpwZycsXG4gICAga2V5d29yZHM6ICdBZnJpY2EsIFByb2dyYW1zLCBQcm9qZWN0cydcbiAgfTtcbiAgdGhpcy5yZmwgPSB7XG4gICAgdXJsOidtYXBmb2xpby8jL21hcEAzNy40MDUwNzQsLTk0LjAyMDk5Niw1KHNhdGVsbGl0ZSxnYWRtMSkscHJvamVjdD9maWx0ZXJzPWJ1c2luZXNzX3VuaXRfX2MlMjUyMExJS0UlMjUyMCUyNTI3JTI1MjVJSEwlMjUyNSUyNTI3JTI1MjBPUiUyNTIwYnVzaW5lc3NfdW5pdF9fYyUyNTIwTElLRSUyNTIwJTI1MjclMjUyNVJGTCUyNTI1JTI1MjclMjUyMCZkZXRhaWxzLXBhbmVsPW9wZW4nLFxuICAgIG5hbWU6ICdSRkwgUHJvamVjdHMnLFxuICAgIGRhdGU6ICcyMDE1LTMwLTEyJyxcbiAgICB0aHVtYm5haWw6ICdpbWFnZXMvc3Rvcmllcy9yZmwuanBnJyxcbiAgICBrZXl3b3JkczogJ1JGTCwgUmVzdG9yaW5nIEZhbWlseSBMaW5rcywgUHJvZ3JhbXMsIFByb2plY3RzJ1xuICB9O1xuXG4gIC8qKlxuICAgKiBGb3IgbGF5ZXJzLCB3ZSB0cnkgYW5kIGdldCBhbiBhbGlhcyBmb3IgZXZlcnl0aGluZywgc28gaWYgaXQncyBhIFVSTCB0aGF0XG4gICAqIGRvZXMgbm90IG1hdGNoLCB3ZSBqdXN0IHdhbnQgdG8gcmV0dXJuIGl0c2VsZiBzbyB3ZSBjYW4gZmV0Y2ggdGhhdCBnaXZlbiB1cmwuXG4gICAqXG4gICAqIEBwYXJhbSBuYW1lXG4gICAqIEByZXR1cm5zIHsqfVxuICAgKi9cbiAgdGhpcy5maW5kID0gZnVuY3Rpb24obmFtZSkge1xuICAgIHZhciB2YWwgPSB0aGlzW25hbWVdIHx8IHRoaXNbbmFtZS50b0xvd2VyQ2FzZSgpXTtcbiAgICBpZiAodHlwZW9mIHZhbCAhPT0gJ3VuZGVmaW5lZCcgJiYgdmFsICE9PSBudWxsKSB7XG4gICAgICByZXR1cm4gdmFsO1xuICAgIH1cbiAgICBpZiAobmFtZS5zbGljZSgwLCA0KS50b0xvd2VyQ2FzZSgpID09PSAnaHR0cCcpIHtcbiAgICAgIHJldHVybiBuYW1lO1xuICAgIH1cbiAgICBjb25zb2xlLmVycm9yKCdDT1VMRCBOT1QgRklORCBBTElBUzogJyArIG5hbWUpO1xuICAgIHJldHVybiBudWxsO1xuICB9O1xuXG59KTtcbiIsIi8qKlxuICogQ3JlYXRlZCBieSBOaWNob2xhcyBIYWxsYWhhbiA8bmhhbGxhaGFuQHNwYXRpYWxkZXYuY29tPlxuICogICAgICAgb24gNi8zLzE0LlxuICovXG5cbnZhciBGZWF0dXJlU2V0ID0gcmVxdWlyZSgnLi4vLi4vLi4vbGliL2ZlYXR1cmVsYWJlbC9GZWF0dXJlU2V0Jyk7XG52YXIgUmVzb3VyY2UgPSByZXF1aXJlKCcuL1Jlc291cmNlJyk7XG52YXIgYmJveFVybCA9IHJlcXVpcmUoJy4vdmVjdG9yJykuYmJveFVybDtcbnZhciBiYm94UmVzb3VyY2VzID0gcmVxdWlyZSgnLi92ZWN0b3InKS5iYm94UmVzb3VyY2VzO1xuXG52YXIgTCA9IHJlcXVpcmUoJy4vdmVjdG9yJykuTDtcbnZhciBhbmd1bGFyID0gcmVxdWlyZSgnLi92ZWN0b3InKS5hbmd1bGFyO1xudmFyICRyb290U2NvcGUgPSByZXF1aXJlKCcuL3ZlY3RvcicpLiRyb290U2NvcGU7XG52YXIgJGh0dHAgPSByZXF1aXJlKCcuL3ZlY3RvcicpLiRodHRwO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEJCb3hHZW9KU09OO1xuXG5cbmZ1bmN0aW9uIEJCb3hHZW9KU09OKGNvbmZpZykge1xuICBSZXNvdXJjZS5jYWxsKHRoaXMsIGNvbmZpZyk7XG4gIGlmKGNvbmZpZy5iYm94dXJsKSB7XG4gICAgdGhpcy5fYmJveHVybCA9IGJib3hVcmwgPSBjb25maWcuYmJveHVybDtcbiAgfVxuICB0aGlzLl9mZWF0dXJlcyA9IHt9O1xuICB0aGlzLl9mZWF0dXJlTGF5ZXJzQnlMZXZlbCA9IHt9O1xuICB0aGlzLl9hbGxGZWF0dXJlTGF5ZXJzID0ge307XG4gIGlmIChjb25maWcucHJvcGVydGllcyAmJiBjb25maWcucHJvcGVydGllcy5sYWJlbFByb3BlcnR5KSB7XG4gICAgdGhpcy5fZmVhdHVyZVNldCA9IG5ldyBGZWF0dXJlU2V0KCk7XG4gIH1cbiAgdGhpcy5fZGVmYXVsdFRoZW1lID0gY29uZmlnLmRlZmF1bHRUaGVtZSB8fCAncHJvamVjdCc7XG5cbiAgaWYgKGNvbmZpZy5kZXRhaWxzVXJsKSB7XG4gICAgdGhpcy5fZGV0YWlsc1VybCA9IGNvbmZpZy5kZXRhaWxzVXJsO1xuICB9XG5cbiAgYmJveFJlc291cmNlcy5wdXNoKHRoaXMpO1xuICB0aGlzLl9yZXNJZHggPSBiYm94UmVzb3VyY2VzLmxlbmd0aCAtIDE7XG59XG5cbkJCb3hHZW9KU09OLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoUmVzb3VyY2UucHJvdG90eXBlKTtcbkJCb3hHZW9KU09OLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEJCb3hHZW9KU09OO1xuXG5cbkJCb3hHZW9KU09OLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG4gIGJib3hSZXNvdXJjZXMuc3BsaWNlKHRoaXMuX3Jlc0lkeCwxKTtcbn07XG5cblxuQkJveEdlb0pTT04ucHJvdG90eXBlLmdldExheWVyID0gZnVuY3Rpb24gKCkge1xuICB2YXIgbGF5ZXIgPSBSZXNvdXJjZS5wcm90b3R5cGUuZ2V0TGF5ZXIuY2FsbCh0aGlzKTtcbiAgbGF5ZXIuZGVzdHJveVJlc291cmNlID0gdGhpcy5kZXN0cm95OyAvLyBnaXZlcyB0aGUgbWFwIHRvIGRlc3Ryb3kgdGhlIGJib3hnZW9qc29uIHZlY3RvciBwcm92aWRlciByZXNvdXJjZVxuICByZXR1cm4gbGF5ZXI7XG59O1xuXG5cbkJCb3hHZW9KU09OLnByb3RvdHlwZS5fZ2V0RmVhdHVyZXMgPSBmdW5jdGlvbiAoZmVhdE9iaikge1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIHZhciB0aGVtZSA9ICRyb290U2NvcGUuJHN0YXRlUGFyYW1zLnRoZW1lIHx8IHNlbGYuX2RlZmF1bHRUaGVtZTtcbiAgdmFyIGZpbHRlcnMgPSAnbnVsbCc7XG4gIGlmICgkcm9vdFNjb3BlLiRzdGF0ZVBhcmFtcy5maWx0ZXJzKSB7XG4gICAgZmlsdGVycyA9ICRyb290U2NvcGUuJHN0YXRlUGFyYW1zLmZpbHRlcnM7XG4gIH1cbiAgdmFyIHVybCA9IHRoaXMuX3VybC5yZXBsYWNlKCc6dGhlbWUnLCB0aGVtZSlcbiAgICAucmVwbGFjZSgnOmxldmVsJywgZmVhdE9iai5sZXZlbClcbiAgICAucmVwbGFjZSgnOmlkcycsIGZlYXRPYmouZ3VpZClcbiAgICAucmVwbGFjZSgnOmZpbHRlcnMnLCBmaWx0ZXJzKTtcbiAgdmFyIHByb3h5UGF0aCA9IGNvbmZpZy5wcm94eVBhdGgodXJsKTtcblxuICAvLyBhIGNhY2hlIG1ha2VzIHNlbnNlIGlmIHRoZSBiYm94Z2VvanNvbiBvYmplY3QgaXMgcmVpbnN0YW50aWF0ZWRcbiAgJGh0dHAuZ2V0KHVybCwge2NhY2hlOiB0cnVlfSkuc3VjY2VzcyhmdW5jdGlvbiAoZ2VvanNvbiwgc3RhdHVzKSB7XG4gICAgcHJvY2Vzc0ZlYXR1cmVzKHNlbGYsIGZlYXRPYmosIGdlb2pzb24pO1xuICB9KS5lcnJvcihmdW5jdGlvbihlcnIpIHtcbiAgICAkaHR0cC5nZXQocHJveHlQYXRoKS5zdWNjZXNzKGZ1bmN0aW9uIChnZW9qc29uLCBzdGF0dXMpIHtcbiAgICAgIHByb2Nlc3NGZWF0dXJlcyhzZWxmLCBmZWF0T2JqLCBnZW9qc29uKTtcbiAgICB9KS5lcnJvcihmdW5jdGlvbiAoZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdVbmFibGUgdG8gZ2V0RmVhdHVyZXM6ICcgKyB1cmwpO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbmZ1bmN0aW9uIHByb2Nlc3NGZWF0dXJlcyhzZWxmLCBmZWF0T2JqLCBnZW9qc29uKSB7XG4gIGlmIChnZW9qc29uLmVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignVW5hYmxlIHRvIGZldGNoIGZlYXR1cmU6ICcgKyBnZW9qc29uLmVycm9yKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoIWdlb2pzb24uZmVhdHVyZXMgfHwgZ2VvanNvbi5mZWF0dXJlcy5sZW5ndGggPCAxKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIGZlYXQgPSBnZW9qc29uLmZlYXR1cmVzWzBdO1xuXG4gIC8vIHB1dHRpbmcgZXhpc3RpbmcgcHJvcGVydGllcyBpbnRvIG5ldyBmZWF0dXJlIG9iamVjdCBwcm9wZXJ0aWVzXG4gIGZvciAodmFyIGtleSBpbiBmZWF0T2JqKSB7XG4gICAgZmVhdC5wcm9wZXJ0aWVzW2tleV0gPSBmZWF0T2JqW2tleV07XG4gICAgZGVsZXRlIGZlYXRPYmpba2V5XTtcbiAgfVxuXG4gIC8vIGV4dGVuZGluZyBwcm9wZXJ0aWVzIGZyb20gdGhlIGNvbmZpZyBmaWxlXG4gIGZvciAodmFyIGtleSBpbiBzZWxmLl9jb25maWcucHJvcGVydGllcykge1xuICAgIGZlYXQucHJvcGVydGllc1trZXldID0gc2VsZi5fY29uZmlnLnByb3BlcnRpZXNba2V5XTtcbiAgICAvLyBMYXllckNvbmZpZyB3aWxsIHN0YXRlIHRoZSBuYW1lIG9mIHRoZSBCQm94R2VvSlNPTiBtZXRob2QgdG8gYmUgY2FsbGVkIG9uIGNsaWNrLlxuICAgIGlmIChrZXkgPT09ICdvblNlbGVjdCcgfHwga2V5ID09PSAnb25EZXNlbGVjdCcpIHtcbiAgICAgIHZhciBmbk5hbWUgPSBzZWxmLl9jb25maWcucHJvcGVydGllc1trZXldO1xuICAgICAgZmVhdC5wcm9wZXJ0aWVzW2tleV0gPSBzZWxmW2ZuTmFtZV07XG4gICAgfVxuICB9XG5cbiAgZm9yICh2YXIgayBpbiBmZWF0KSB7XG4gICAgZmVhdE9ialtrXSA9IGZlYXRba107XG4gIH1cbiAgYW5ndWxhci5leHRlbmQoZmVhdE9iaiwgZmVhdCk7XG4gIGNvbnNvbGUubG9nKCdmZXRjaGVkIGZlYXR1cmU6ICcgKyBmZWF0T2JqLnByb3BlcnRpZXMubmFtZSk7XG5cbiAgaWYgKCFzZWxmLl9nZW9qc29uTGF5ZXIpIHtcbiAgICBzZWxmLl9nZXRMYXllcigpO1xuICAgIGNvbnNvbGUubG9nKCdjcmVhdGluZyBsYXllciBpbiBfZ2V0RmVhdHVyZXMnKTtcbiAgfVxuXG4gIHZhciBvcHRpb25zID0gc2VsZi5fZ2VvanNvbkxheWVyLm9wdGlvbnM7XG4gIHZhciBmZWF0TGF5ZXIgPSBMLkdlb0pTT04uZ2VvbWV0cnlUb0xheWVyKGZlYXRPYmosIG9wdGlvbnMucG9pbnRUb0xheWVyLCBvcHRpb25zLmNvb3Jkc1RvTGF0TG5nLCBvcHRpb25zKTtcbiAgTC5zdGFtcChmZWF0TGF5ZXIpO1xuICBmZWF0TGF5ZXIuZmVhdHVyZSA9IEwuR2VvSlNPTi5hc0ZlYXR1cmUoZmVhdE9iaik7XG4gIGZlYXRMYXllci5kZWZhdWx0T3B0aW9ucyA9IGZlYXRMYXllci5vcHRpb25zO1xuICBzZWxmLl9nZW9qc29uTGF5ZXIucmVzZXRTdHlsZShmZWF0TGF5ZXIpO1xuICBpZiAob3B0aW9ucy5vbkVhY2hGZWF0dXJlKSB7XG4gICAgb3B0aW9ucy5vbkVhY2hGZWF0dXJlKGZlYXRPYmosIGZlYXRMYXllcik7XG4gIH1cblxuICBhZGRMYXllcihzZWxmLCBmZWF0TGF5ZXIpO1xufVxuXG5cbi8qKlxuICogU2hvdWxkIG9ubHkgYmUgdXNlZCBieSBCQm94TGF5ZXIgb2JqZWN0cy5cbiAqIENvbnNpZGVyIHRoaXMgYSBwcml2YXRlIG1ldGhvZC5cbiAqXG4gKiBAcGFyYW0gc2VsZlxuICogQHBhcmFtIGZlYXRMYXllclxuICovXG5mdW5jdGlvbiBhZGRMYXllcihzZWxmLCBmZWF0TGF5ZXIpIHtcbiAgaWYgKHNlbGYuX2ZlYXR1cmVTZXQpIHtcbiAgICBzZWxmLl9mZWF0dXJlU2V0LmFkZEZlYXR1cmUoZmVhdExheWVyLCBzZWxmLl9nZW9qc29uTGF5ZXIpO1xuICB9XG4gIHNlbGYuX2dlb2pzb25MYXllci5hZGRMYXllcihmZWF0TGF5ZXIpO1xuXG4gIHZhciBwcm9wcyA9IGZlYXRMYXllci5mZWF0dXJlLnByb3BlcnRpZXM7XG4gIHZhciBsZXZlbCA9IHByb3BzLmxldmVsO1xuICBpZiAoIXNlbGYuX2ZlYXR1cmVMYXllcnNCeUxldmVsW2xldmVsXSkge1xuICAgIHNlbGYuX2ZlYXR1cmVMYXllcnNCeUxldmVsW2xldmVsXSA9IFtdO1xuICB9XG4gIHNlbGYuX2ZlYXR1cmVMYXllcnNCeUxldmVsW2xldmVsXS5wdXNoKGZlYXRMYXllcik7XG4gIHNlbGYuX2FsbEZlYXR1cmVMYXllcnNbcHJvcHMuZ3VpZF0gPSBmZWF0TGF5ZXI7XG59XG5cblxuQkJveEdlb0pTT04ucHJvdG90eXBlLnByb2Nlc3NGZWF0dXJlSXRpbmVyYXJ5ID0gZnVuY3Rpb24gKGZlYXRJdGluZXJhcnkpIHtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICB2YXIgYWN0aXZlTGV2ZWxzID0ge307XG4gIHNlbGYuX2FjdGl2ZUxldmVscyA9IGFjdGl2ZUxldmVscztcbiAgc2VsZi5fZmVhdEl0aW5lcmFyeUhhc2ggPSB7fTtcbiAgZm9yICh2YXIgaT0wLCBsZW4gPSBmZWF0SXRpbmVyYXJ5Lmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gICAgdmFyIG8gPSBmZWF0SXRpbmVyYXJ5W2ldO1xuICAgIGFjdGl2ZUxldmVsc1tvLmxldmVsXSA9IHRydWU7XG4gICAgc2VsZi5fZmVhdEl0aW5lcmFyeUhhc2hbby5ndWlkXSA9IG87XG4gICAgdmFyIGd1aWQgPSBvLmd1aWQgfHwgby5pZDtcbiAgICBpZiAoIXNlbGYuX2ZlYXR1cmVzW2d1aWRdKSB7XG4gICAgICAvLyBhZGRpbmcgZmVhdHVyZSB0byBmZWF0dXJlcyBoYXNoIChhbGwgZmVhdHVyZXMgZXZlcilcbiAgICAgIHNlbGYuX2ZlYXR1cmVzW2d1aWRdID0gbztcbiAgICAgIC8vIGdldHRpbmcgdGhlIGZlYXR1cmVzIChpbmNsdWRpbmcgYmFzaWMsIHNpbXBsaWZpZWQgZ2VvbWV0cnkpXG4gICAgICBzZWxmLl9nZXRGZWF0dXJlcyhvKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gaWYgd2UgYWxyZWFkeSBoYXZlIGEgbGF5ZXIgYW5kIGl0IGlzIG5vdCBvbiB0aGUgbWFwIGJ1dCBzaG91bGQgYmUgdGhlcmUsIGFkZCBpdCB0byB0aGUgZ2VvanNvbiBsYXllclxuICAgICAgdmFyIGwgPSBzZWxmLl9hbGxGZWF0dXJlTGF5ZXJzW2d1aWRdO1xuICAgICAgaWYgKGwpIHtcbiAgICAgICAgYWRkTGF5ZXIoc2VsZiwgbCk7XG4gICAgICB9XG5cbiAgICB9XG4gIH1cbiAgc2VsZi5fcmVtb3ZlSW5hY3RpdmVMYXllcnMoc2VsZik7XG4gIHJlbW92ZUluYWN0aXZlTGFiZWxzKHNlbGYpO1xufTtcblxuXG4vKipcbiAqIFRoaXMgaXMgY2FsbGVkIGJ5IHRoZSBvblNlbGVjdCBldmVudCBmb3IgdGhlIGZlYXR1cmVsYWJlbHMuXG4gKiBAcGFyYW0gZmVhdHVyZUxheWVyXG4gKi9cbkJCb3hHZW9KU09OLnByb3RvdHlwZS5mZXRjaEZlYXR1cmVEZXRhaWxzID0gZnVuY3Rpb24oZmVhdHVyZUxheWVyKSB7XG4gIHZhciBwcm9wZXJ0aWVzID0gZmVhdHVyZUxheWVyLmZlYXR1cmUucHJvcGVydGllcztcbiAgdmFyIGRldGFpbHNVcmwgPSBwcm9wZXJ0aWVzLmRldGFpbHNVcmw7XG4gIGlmICghZGV0YWlsc1VybCkge1xuICAgIGNvbnNvbGUuZXJyb3IoJ1dlIG5lZWQgYSBkZXRhaWxzVXJsIHRvIGZldGNoRmVhdHVyZURldGFpbHMnKTtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgdGhlbWUgPSAkcm9vdFNjb3BlLiRzdGF0ZVBhcmFtcy50aGVtZSB8fCBwcm9wZXJ0aWVzLmRlZmF1bHRUaGVtZSB8fCAncHJvamVjdCc7XG4gIHZhciB0aGVtZU5hbWUgPSAkcm9vdFNjb3BlLnRoZW1lTmFtZUhhc2hbdGhlbWVdO1xuICBpZiAodHlwZW9mIHByb3BlcnRpZXMubGV2ZWwgPT09ICd1bmRlZmluZWQnIHx8IHByb3BlcnRpZXMubGV2ZWwgPT09IG51bGwpIHtcbiAgICBjb25zb2xlLmVycm9yKCd3ZSBuZWVkIGEgbGV2ZWwuJyk7XG4gIH1cblxuICB2YXIgZmlsdGVycyA9ICdudWxsJztcbiAgaWYgKCRyb290U2NvcGUuJHN0YXRlUGFyYW1zLmZpbHRlcnMpIHtcbiAgICBmaWx0ZXJzID0gJHJvb3RTY29wZS4kc3RhdGVQYXJhbXMuZmlsdGVycztcbiAgfVxuXG4gIGRldGFpbHNVcmwgPSBkZXRhaWxzVXJsLnJlcGxhY2UoJzp0aGVtZScsIHRoZW1lKVxuICAgIC5yZXBsYWNlKCc6Z3VpZHMnLCBwcm9wZXJ0aWVzLmd1aWQpXG4gICAgLnJlcGxhY2UoJzpsZXZlbCcsIHByb3BlcnRpZXMubGV2ZWwpXG4gICAgLnJlcGxhY2UoJzpmaWx0ZXJzJywgZmlsdGVycyk7XG5cbiAgJGh0dHAuZ2V0KGRldGFpbHNVcmwsIHtjYWNoZTogdHJ1ZX0pLnN1Y2Nlc3MoZnVuY3Rpb24gKGRldGFpbHMpIHtcblxuICAgIGZlYXR1cmVMYXllci5mZWF0dXJlLnByb3BlcnRpZXMuc2FsZXNmb3JjZSA9IHt9O1xuICAgIGZlYXR1cmVMYXllci5mZWF0dXJlLnByb3BlcnRpZXMuc2FsZXNmb3JjZVt0aGVtZU5hbWVdID0gZGV0YWlscztcbiAgICAkcm9vdFNjb3BlLiRicm9hZGNhc3QoJ2RldGFpbHMnLCBmZWF0dXJlTGF5ZXIpO1xuXG4gIH0pLmVycm9yKGZ1bmN0aW9uKGVycil7XG4gICAgY29uc29sZS5lcnJvcihKU09OLnN0cmluZ2lmeShlcnIpKTtcbiAgfSk7XG5cbn07XG5cblxuQkJveEdlb0pTT04ucHJvdG90eXBlLnNob3dGZWF0dXJlUHJvcGVydGllcyA9IGZ1bmN0aW9uKGZlYXR1cmVMYXllcikge1xuICAkcm9vdFNjb3BlLiRicm9hZGNhc3QoJ2RldGFpbHMnLCBmZWF0dXJlTGF5ZXIpO1xufTtcblxuXG5CQm94R2VvSlNPTi5wcm90b3R5cGUuY2xvc2VEZXRhaWxzID0gZnVuY3Rpb24gKCkge1xuICAkcm9vdFNjb3BlLmNsb3NlUGFyYW0oJ2RldGFpbHMtcGFuZWwnKTtcbn07XG5cblxuZnVuY3Rpb24gcmVtb3ZlSW5hY3RpdmVMYWJlbHMoc2VsZikge1xuICB2YXIgYWxsRmVhdHVyZUxheWVycyA9IHNlbGYuX2FsbEZlYXR1cmVMYXllcnM7XG4gIHZhciBmZWF0dXJlSXRpbmVyYXJ5ID0gc2VsZi5fZmVhdEl0aW5lcmFyeUhhc2g7XG4gIGZvciAodmFyIGtleSBpbiBhbGxGZWF0dXJlTGF5ZXJzKSB7XG4gICAgaWYgKCFmZWF0dXJlSXRpbmVyYXJ5W2tleV0pIHtcbiAgICAgIHZhciBmZWF0dXJlTGF5ZXIgPSBhbGxGZWF0dXJlTGF5ZXJzW2tleV07XG4gICAgICBpZiAoIGZlYXR1cmVMYXllci5nZW9qc29uTGF5ZXIgJiYgZmVhdHVyZUxheWVyLmxhYmVsKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiUkVNT1ZJTkc6IFwiICsgZmVhdHVyZUxheWVyLmZlYXR1cmUucHJvcGVydGllcy5uYW1lKTtcbiAgICAgICAgd2luZG93Lm1hcC5yZW1vdmVMYXllcihmZWF0dXJlTGF5ZXIubGFiZWwpOyAvLyBOSCBGSVhNRVxuICAgICAgICBmZWF0dXJlTGF5ZXIubGFiZWwgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICBpZiAoIGZlYXR1cmVMYXllci5nZW9qc29uTGF5ZXIgJiYgZmVhdHVyZUxheWVyLmdlb2pzb25MYXllci5sYWJlbCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIlJFTU9WSU5HOiBcIiArIGZlYXR1cmVMYXllci5mZWF0dXJlLnByb3BlcnRpZXMubmFtZSk7XG4gICAgICAgIHdpbmRvdy5tYXAucmVtb3ZlTGF5ZXIoZmVhdHVyZUxheWVyLmdlb2pzb25MYXllci5sYWJlbCk7IC8vIE5IIEZJWE1FXG4gICAgICAgIGZlYXR1cmVMYXllci5nZW9qc29uTGF5ZXIubGFiZWwgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIEZvciBhbGwgb2YgdGhlIGFjdGl2ZSBsYXllcnMgdGhhdCB3ZSBoYXZlLCByZW1vdmUgbGF5ZXJzIHRoYXQgYXJlXG4gKiBub3QgcGFydCBvZiB0aGUgY3VycmVudCBzZXQgb2YgYWN0aXZlIGxldmVscy5cbiAqXG4gKiBAcHJpdmF0ZVxuICovXG5CQm94R2VvSlNPTi5wcm90b3R5cGUuX3JlbW92ZUluYWN0aXZlTGF5ZXJzID0gZnVuY3Rpb24oc2VsZikge1xuICB2YXIgYWN0aXZlTGV2ZWxzID0gdGhpcy5fYWN0aXZlTGV2ZWxzO1xuICB2YXIgZmVhdHVyZUxheWVyc0J5TGV2ZWwgPSB0aGlzLl9mZWF0dXJlTGF5ZXJzQnlMZXZlbDtcbiAgZm9yICh2YXIgbGV2ZWwgaW4gZmVhdHVyZUxheWVyc0J5TGV2ZWwpIHtcbiAgICAvLyBpZiB0aGUgbGV2ZWwgaXMgbm90IGFuIGFjdGl2ZSBsZXZlbCwgcmVtb3ZlIGZyb20gbWFwXG4gICAgaWYgKCFhY3RpdmVMZXZlbHNbbGV2ZWxdKSB7XG4gICAgICB2YXIgbGF5ZXJzID0gZmVhdHVyZUxheWVyc0J5TGV2ZWxbbGV2ZWxdO1xuICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGxheWVycy5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICAgICAgICB2YXIgbGF5ZXIgPSBsYXllcnNbaV07XG4gICAgICAgIHNlbGYuX2dlb2pzb25MYXllci5yZW1vdmVMYXllcihsYXllcik7XG5cbiAgICAgICAgY29uc29sZS5sb2coJ1JlbW92ZWQgTGF5ZXI6ICcgKyBsYXllci5mZWF0dXJlLnByb3BlcnRpZXMubmFtZSk7XG4gICAgICB9XG4gICAgICBkZWxldGUgZmVhdHVyZUxheWVyc0J5TGV2ZWxbbGV2ZWxdO1xuICAgIH1cbiAgfVxufTtcbiIsIi8qKlxuICogQ3JlYXRlZCBieSBOaWNob2xhcyBIYWxsYWhhbiA8bmhhbGxhaGFuQHNwYXRpYWxkZXYuY29tPlxuICogICAgICAgb24gNi8zLzE0LlxuICovXG5cbnZhciBSZXNvdXJjZSA9IHJlcXVpcmUoJy4vUmVzb3VyY2UnKTtcbnZhciAkcm9vdFNjb3BlID0gcmVxdWlyZSgnLi92ZWN0b3InKS4kcm9vdFNjb3BlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEdlb0pTT047XG5cbi8qKlxuICogVGhpcyBpcyBhIGJhc2ljIEdlb0pTT04gVmVjdG9yUHJvdmlkZXIuXG4gKiBAcGFyYW0gY29uZmlnXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gR2VvSlNPTihjb25maWcpIHtcbiAgUmVzb3VyY2UuY2FsbCh0aGlzLCBjb25maWcpO1xuICB0aGlzLl9nZW9qc29uID0gbnVsbDtcbn1cblxuR2VvSlNPTi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFJlc291cmNlLnByb3RvdHlwZSk7XG5HZW9KU09OLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEdlb0pTT047XG5cbkdlb0pTT04ucHJvdG90eXBlLmZldGNoID0gZnVuY3Rpb24gKGNiKSB7XG4gIGlmICh0aGlzLl9nZW9qc29uICYmIHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGNiKHRoaXMuX2dlb2pzb24pO1xuICAgIHJldHVybjtcbiAgfVxuICB2YXIgc2VsZiA9IHRoaXM7XG4gIFJlc291cmNlLnByb3RvdHlwZS5mZXRjaC5jYWxsKHRoaXMsIGZ1bmN0aW9uKGRhdGEpIHtcbiAgICBzZWxmLl9nZW9qc29uID0gZGF0YTtcbiAgICBpZiAodHlwZW9mIHNlbGYuX2NvbmZpZy5wcm9wZXJ0aWVzID09PSAnb2JqZWN0Jykge1xuICAgICAgaWYgKCBkYXRhLnR5cGUgPT09ICdGZWF0dXJlQ29sbGVjdGlvbicpIHtcbiAgICAgICAgdmFyIGZlYXRzID0gZGF0YS5mZWF0dXJlcztcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGZlYXRzLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICAgICAgdmFyIGZlYXQgPSBmZWF0c1tpXTtcbiAgICAgICAgICBpZiAoIWZlYXQucHJvcGVydGllcykgZmVhdC5wcm9wZXJ0aWVzID0ge307XG4gICAgICAgICAgYW5ndWxhci5leHRlbmQoZmVhdC5wcm9wZXJ0aWVzLCBzZWxmLl9jb25maWcucHJvcGVydGllcyk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7IC8vIGEgZmVhdHVyZSBvciBhIGdlb21ldHJ5IHR5cGVcbiAgICAgICAgaWYgKCFkYXRhLnByb3BlcnRpZXMpIGRhdGEucHJvcGVydGllcyA9IHt9O1xuICAgICAgICBhbmd1bGFyLmV4dGVuZChkYXRhLnByb3BlcnRpZXMsIHNlbGYuX2NvbmZpZy5wcm9wZXJ0aWVzKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKSBjYihzZWxmLl9nZW9qc29uKTtcbiAgfSk7XG59O1xuXG5HZW9KU09OLnByb3RvdHlwZS5nZXRMYXllciA9IGZ1bmN0aW9uKCkge1xuICBpZiAodGhpcy5fZ2VvanNvbkxheWVyKSByZXR1cm4gdGhpcy5fZ2VvanNvbkxheWVyO1xuICB2YXIgbGF5ZXIgPSAgUmVzb3VyY2UucHJvdG90eXBlLmdldExheWVyLmNhbGwodGhpcyk7XG4gIHRoaXMuZmV0Y2goZnVuY3Rpb24oZ2VvanNvbil7XG4gICAgbGF5ZXIuYWRkRGF0YShnZW9qc29uKTtcbiAgICBsYXllci5lYWNoTGF5ZXIoZnVuY3Rpb24gKGwpIHtcbiAgICAgIGwub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkcm9vdFNjb3BlLiRicm9hZGNhc3QoJ2RldGFpbHMnLCBsKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcbiAgcmV0dXJuIGxheWVyO1xufTtcbiIsIi8qKlxuICogQ3JlYXRlZCBieSBOaWNob2xhcyBIYWxsYWhhbiA8bmhhbGxhaGFuQHNwYXRpYWxkZXYuY29tPlxuICogICAgICAgb24gNi8zLzE0LlxuICovXG5cbnZhciBSZXNvdXJjZSA9IHJlcXVpcmUoJy4vUmVzb3VyY2UnKTtcbnZhciAkcm9vdFNjb3BlID0gcmVxdWlyZSgnLi92ZWN0b3InKS4kcm9vdFNjb3BlO1xudmFyIHRvR2VvSlNPTiA9IHJlcXVpcmUoJy4vdmVjdG9yJykudG9HZW9KU09OO1xudmFyICQgPSByZXF1aXJlKCcuL3ZlY3RvcicpLiQ7XG5cbm1vZHVsZS5leHBvcnRzID0gS01MO1xuXG4vKipcbiAqIEEgS01MIFJlc291cmNlIGZldGNoZXMgS01MIGFuZCBwYXJzZXMgaXQgd2l0aCB0b2dlb2pzb24uanNcbiAqIE5vdGUgdGhhdCB0b2dlb2pzb24uanMgaGFzIGJ1Z3MgYW5kIGRvZXMgbm90IGFjY3VyYXRlbHkgcGFyc2VcbiAqIHNvbWUgb2YgdGhlIEtNTCBzb3VyY2VzIHdlIGhhdmUgdGVzdGVkIHdpdGguIFRoaXMgbGlicmFyeSBoYXNcbiAqIGJlZW4gbW9kaWZpZWQgd2l0aCBteSBob3RmaXhlcy5cbiAqXG4gKiBAcGFyYW0gY29uZmlnXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gS01MKGNvbmZpZykge1xuICBSZXNvdXJjZS5jYWxsKHRoaXMsIGNvbmZpZyk7XG4gIHRoaXMuX2dlb2pzb24gPSBudWxsO1xufVxuXG5LTUwucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShSZXNvdXJjZS5wcm90b3R5cGUpO1xuS01MLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEtNTDtcblxuS01MLnByb3RvdHlwZS5mZXRjaCA9IGZ1bmN0aW9uIChjYikge1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIFJlc291cmNlLnByb3RvdHlwZS5mZXRjaC5jYWxsKHRoaXMsIGZ1bmN0aW9uKGRhdGEpIHtcbiAgICB2YXIgeG1sID0gJC5wYXJzZVhNTChkYXRhKTtcbiAgICBzZWxmLl9nZW9qc29uID0gdG9HZW9KU09OLmttbCh4bWwpO1xuICAgIGlmICh0eXBlb2Ygc2VsZi5fY29uZmlnLnByb3BlcnRpZXMgPT09ICdvYmplY3QnKSB7XG4gICAgICBpZiAodHlwZW9mIHNlbGYuX2dlb2pzb24ucHJvcGVydGllcyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgc2VsZi5fZ2VvanNvbi5wcm9wZXJ0aWVzID0ge307XG4gICAgICB9XG4gICAgICBhbmd1bGFyLmV4dGVuZChzZWxmLl9nZW9qc29uLnByb3BlcnRpZXMsIHNlbGYuX2NvbmZpZy5wcm9wZXJ0aWVzKTtcbiAgICAgIHNlbGYuX2dlb2pzb24ucHJvcGVydGllcy5zcmNUeXBlID0gJ2ttbCc7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicpIGNiKHNlbGYuX2dlb2pzb24sIHNlbGYpO1xuICB9KTtcbn07XG5cbktNTC5wcm90b3R5cGUuZ2V0TGF5ZXIgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0aGlzLl9nZW9qc29uTGF5ZXIpIHJldHVybiB0aGlzLl9nZW9qc29uTGF5ZXI7XG4gIHZhciBsYXllciA9ICBSZXNvdXJjZS5wcm90b3R5cGUuZ2V0TGF5ZXIuY2FsbCh0aGlzKTtcbiAgdGhpcy5mZXRjaChmdW5jdGlvbihnZW9qc29uKXtcbiAgICBsYXllci5hZGREYXRhKGdlb2pzb24pO1xuICAgIGxheWVyLmVhY2hMYXllcihmdW5jdGlvbiAobCkge1xuICAgICAgbC5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICRyb290U2NvcGUuJGJyb2FkY2FzdCgnZGV0YWlscycsIGwpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xuICByZXR1cm4gbGF5ZXI7XG59O1xuXG5LTUwucHJvdG90eXBlLmVhY2hMYXllciA9IGZ1bmN0aW9uIChjYikge1xuICB0aGlzLl9lYWNoTGF5ZXJDYWxsYmFjayA9IGNiO1xuICB0aGlzLmZldGNoKGZ1bmN0aW9uKGdlb2pzb24sIHNlbGYpe1xuICAgIHZhciBsYXllcnMgPSBzZWxmLl9nZW9qc29uTGF5ZXIuX2xheWVycztcbiAgICBmb3IgKHZhciBrZXkgaW4gbGF5ZXJzKSB7XG4gICAgICB2YXIgbGF5ZXIgPSBsYXllcnNba2V5XTtcbiAgICAgIGNiKGxheWVyKTtcbiAgICB9XG4gIH0pO1xufTtcbiIsIi8qKlxuICogQ3JlYXRlZCBieSBSeWFuIFdoaXRsZXkgPHJ3aGl0bGV5QHNwYXRpYWxkZXYuY29tPlxuICogICAgICAgb24gMTIvMTUvMTQuXG4gKi9cblxudmFyIFJlc291cmNlID0gcmVxdWlyZSgnLi9SZXNvdXJjZScpO1xudmFyICRyb290U2NvcGUgPSByZXF1aXJlKCcuL3ZlY3RvcicpLiRyb290U2NvcGU7XG52YXIgJGh0dHAgPSByZXF1aXJlKCcuL3ZlY3RvcicpLiRodHRwO1xudmFyIHZlY3RvciA9IHJlcXVpcmUoJy4vdmVjdG9yJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUEJGO1xuXG4vKipcbiAqIEEgUEJGIFJlc291cmNlIGluc3RhbnRpYXRlcyBhIE1WVFNvdXJjZSAoTWFwYm94IFZlY3RvciBUaWxlKVxuICpcbiAqIEBwYXJhbSBjb25maWdcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBQQkYob3B0aW9ucykge1xuICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICB0aGlzLl9vblRpbGVzTG9hZGVkID0gb3B0aW9ucy5vblRpbGVzTG9hZGVkOyAvL1N0b3JlIHRoZSByZWFsIGZ1bmN0aW9uIGluIGEgbG9jYWwgcHJvcGVydHkuXG4gIHRoaXMuX29uQ2xpY2sgPSBvcHRpb25zLm9uQ2xpY2s7IC8vU3RvcmUgdGhlIHJlYWwgZnVuY3Rpb24gaW4gYSBsb2NhbCBwcm9wZXJ0eS5cbiAgdGhpcy5fb25TZWxlY3QgPSBvcHRpb25zLm9uU2VsZWN0OyAgLy9TdG9yZSB0aGUgcmVhbCBmdW5jdGlvbiBpbiBhIGxvY2FsIHByb3BlcnR5IHNvIHdlIGNhbiBvdmVybG9hZCBpdCBsYXRlciB3aXRoIGFuZ3VsYXIgc3R1ZmYuXG4gIHRoaXMuX29uRmlsdGVyID0gb3B0aW9ucy5maWx0ZXI7IC8vU3RvcmUgdGhlIHJlYWwgZnVuY3Rpb24gaW4gYSBsb2NhbCBwcm9wZXJ0eS5cbiAgdGhpcy5fc3R5bGUgPSBvcHRpb25zLnN0eWxlOyAvL1N0b3JlIHRoZSByZWFsIGZ1bmN0aW9uIGluIGEgbG9jYWwgcHJvcGVydHkuXG5cbiAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gIG9wdGlvbnMub25UaWxlc0xvYWRlZCA9IGZ1bmN0aW9uKE1WVFNvdXJjZSl7XG5cbiAgICBpZihzZWxmLl9vblRpbGVzTG9hZGVkKSBzZWxmLl9vblRpbGVzTG9hZGVkKE1WVFNvdXJjZSwgJGh0dHAsICRyb290U2NvcGUpO1xuXG4gIH1cblxuICBvcHRpb25zLm9uQ2xpY2sgPSBmdW5jdGlvbihldnQpe1xuXG4gICAgc2VsZi5fb25DbGljayhldnQsICRodHRwLCAkcm9vdFNjb3BlLCBzZWxmKTtcblxuICB9XG5cbiAgb3B0aW9ucy5vblNlbGVjdCA9IGZ1bmN0aW9uKHZ0Zil7XG5cbiAgICBzZWxmLl9vblNlbGVjdCh2dGYsIHNlbGYpO1xuXG4gIH1cblxuICBvcHRpb25zLmZpbHRlciA9IGZ1bmN0aW9uKHZ0Zil7XG5cbiAgICByZXR1cm4gc2VsZi5fb25GaWx0ZXIodnRmLCAkcm9vdFNjb3BlKTtcblxuICB9XG5cbiAgb3B0aW9ucy5zdHlsZSA9IGZ1bmN0aW9uKHZ0Zil7XG5cbiAgICByZXR1cm4gc2VsZi5fc3R5bGUodnRmLCAkcm9vdFNjb3BlKTtcblxuICB9XG5cbiAgdGhpcy5sYXllciA9IG5ldyBMLlRpbGVMYXllci5NVlRTb3VyY2Uob3B0aW9ucyk7XG59XG5cblBCRi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFJlc291cmNlLnByb3RvdHlwZSk7XG5QQkYucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gUEJGO1xuXG5QQkYucHJvdG90eXBlLmdldExheWVyID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5sYXllcjtcbn07XG5cblBCRi5wcm90b3R5cGUuZmV0Y2hGZWF0dXJlRGV0YWlscyA9IGZ1bmN0aW9uKGd1aWQsIGxldmVsLCBuYW1lKSB7XG5cblxuICB2YXIgZGV0YWlsc1VybCA9IGNvbmZpZy5jaHViYnNQYXRoKHRoaXMub3B0aW9ucy5kZXRhaWxzVXJsKTtcbiAgaWYgKCFkZXRhaWxzVXJsKSB7XG4gICAgY29uc29sZS5lcnJvcignV2UgbmVlZCBhIGRldGFpbHNVcmwgdG8gZmV0Y2hGZWF0dXJlRGV0YWlscycpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciB0aGVtZSA9ICRyb290U2NvcGUuJHN0YXRlUGFyYW1zLnRoZW1lIHx8ICdwcm9qZWN0JztcblxuICAvL0V4aXQgaWYgdGhlbWUgaXMgbm9uZS5cbiAgaWYodGhlbWUudG9Mb3dlckNhc2UoKSA9PT0gJ25vbmUnKSByZXR1cm47XG5cbiAgdmFyIHRoZW1lTmFtZSA9ICRyb290U2NvcGUudGhlbWVOYW1lSGFzaFt0aGVtZV07XG4gIGlmICh0eXBlb2YgbGV2ZWwgPT09ICd1bmRlZmluZWQnIHx8IGxldmVsID09PSBudWxsKSB7XG4gICAgY29uc29sZS5lcnJvcignd2UgbmVlZCBhIGxldmVsLicpO1xuICB9XG5cbiAgdmFyIGZpbHRlcnMgPSAnbnVsbCc7XG4gIGlmICgkcm9vdFNjb3BlLiRzdGF0ZVBhcmFtcy5maWx0ZXJzKSB7XG4gICAgZmlsdGVycyA9ICRyb290U2NvcGUuJHN0YXRlUGFyYW1zLmZpbHRlcnM7XG4gIH1cblxuICAvL2ZvciBkaXNhc3RlclR5cGUsIGp1c3QgdXNlIHRoZSBkaXNhc3RlciBlbmRwb2ludFxuICBpZih0aGVtZS50b0xvd2VyQ2FzZSgpID09ICdkaXNhc3RlcnR5cGUnKXtcbiAgICB0aGVtZSA9ICdkaXNhc3Rlcic7XG4gIH1cblxuICBkZXRhaWxzVXJsID0gZGV0YWlsc1VybC5yZXBsYWNlKCc6dGhlbWUnLCB0aGVtZSlcbiAgICAucmVwbGFjZSgnOmd1aWRzJywgZ3VpZClcbiAgICAucmVwbGFjZSgnOmxldmVsJywgbGV2ZWwpXG4gICAgLnJlcGxhY2UoJzpmaWx0ZXJzJywgZmlsdGVycyk7XG5cbiAgJGh0dHAuZ2V0KGRldGFpbHNVcmwsIHtjYWNoZTogdHJ1ZX0pLnN1Y2Nlc3MoZnVuY3Rpb24gKGRldGFpbHMpIHtcbiAgICB2YXIgZmVhdHVyZUxheWVyID0geyBmZWF0dXJlOiB7IHByb3BlcnRpZXM6IHt9fX07XG4gICAgZmVhdHVyZUxheWVyLmZlYXR1cmUucHJvcGVydGllcy5zYWxlc2ZvcmNlID0ge307XG4gICAgZmVhdHVyZUxheWVyLmZlYXR1cmUucHJvcGVydGllcy5zYWxlc2ZvcmNlW3RoZW1lTmFtZV0gPSBkZXRhaWxzO1xuICAgIGZlYXR1cmVMYXllci5mZWF0dXJlLnByb3BlcnRpZXMubmFtZSA9IG5hbWU7XG4gICAgJHJvb3RTY29wZS4kYnJvYWRjYXN0KCdkZXRhaWxzJywgZmVhdHVyZUxheWVyKTtcblxuICB9KS5lcnJvcihmdW5jdGlvbihlcnIpe1xuICAgIGNvbnNvbGUuZXJyb3IoSlNPTi5zdHJpbmdpZnkoZXJyKSk7XG4gIH0pO1xuXG59O1xuXG5cblxuXG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgTmljaG9sYXMgSGFsbGFoYW4gPG5oYWxsYWhhbkBzcGF0aWFsZGV2LmNvbT5cbiAqICAgICAgIG9uIDYvMy8xNC5cbiAqL1xuXG52YXIgcmVzb3VyY2VzID0gcmVxdWlyZSgnLi92ZWN0b3InKS5yZXNvdXJjZXM7XG52YXIgJGh0dHAgPSByZXF1aXJlKCcuL3ZlY3RvcicpLiRodHRwO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlc291cmNlO1xuXG4vKipcbiAqIEFsbCBWZWN0b3JQcm92aWRlciByZXNvdXJjZXMgYXJlIGNoaWxkcmVuIG9mIHRoaXMgY2xhc3MuXG4gKiBAcGFyYW0gY29uZmlnXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gUmVzb3VyY2UoY29uZmlnKSB7XG4gIHJlc291cmNlcy5wdXNoKHRoaXMpO1xuICB0aGlzLl9jb25maWcgPSBjb25maWc7XG4gIHRoaXMuX3VybCA9IG51bGw7XG4gIGlmICh0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0Jykge1xuICAgIHRoaXMuX3VybCA9IGNvbmZpZy51cmw7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5fdXJsID0gY29uZmlnO1xuICB9XG5cbiAgdGhpcy5fZWFjaExheWVyQ2FsbGJhY2sgPSBudWxsO1xuICB0aGlzLl9nZW9qc29uTGF5ZXIgPSBudWxsO1xufVxuXG5cbi8qKlxuICogRmV0Y2hlcyBkYXRhIGZyb20gdGhlIGdpdmVuIHVybCBvZiBhIHJlc291cmNlLlxuICogU3ViY2xhc3NlcyB0aGVuIGhhbmRsZSB0aGUgY2FsbGJhY2sgYWNjb3JkaW5nbHkuXG4gKlxuICogTmVlZHMgdG8gYWxzbyB0cnkgdG8gZ2V0IGEgcmVzb3VyY2UgdmlhIHRoZSBDaHViYnNcbiAqIHByb3h5LlxuICpcbiAqIEBwYXJhbSBjYlxuICovXG5SZXNvdXJjZS5wcm90b3R5cGUuZmV0Y2ggPSBmdW5jdGlvbihjYikge1xuICB2YXIgcHJveHlQYXRoID0gY29uZmlnLnByb3h5UGF0aCh0aGlzLl91cmwpO1xuICAkaHR0cC5nZXQodGhpcy5fdXJsLCB7Y2FjaGU6IHRydWV9KS5zdWNjZXNzKGZ1bmN0aW9uIChkYXRhLCBzdGF0dXMpIHtcbiAgICBjYihkYXRhKTtcbiAgfSkuZXJyb3IoZnVuY3Rpb24oKSB7XG4gICAgLy8gdHJ5aW5nIHByb3h5XG4gICAgJGh0dHAuZ2V0KHByb3h5UGF0aCwge2NhY2hlOiB0cnVlfSkuc3VjY2VzcyhmdW5jdGlvbiAoZGF0YSwgc3RhdHVzKSB7XG4gICAgICBjYihkYXRhKTtcbiAgICB9KS5lcnJvcihmdW5jdGlvbigpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJVbmFibGUgdG8gZmV0Y2ggZnJvbTogXCIgKyBwcm94eVBhdGgpO1xuICAgIH0pO1xuICB9KTtcblxufTtcblxuXG4vKipcbiAqIFJldHVybnMgdGhlIExlYWZsZXQgR2VvSlNPTiBMYXllciBhc3NvY2lhdGVkIHdpdGggdGhlXG4gKiBSZXNvdXJjZSBvciBjcmVhdGVzIGEgbmV3IG9uZS5cbiAqXG4gKiBAcmV0dXJucyB7bnVsbHwqfVxuICovXG5SZXNvdXJjZS5wcm90b3R5cGUuZ2V0TGF5ZXIgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0eXBlb2YgdGhpcy5fZ2VvanNvbkxheWVyICE9PSAndW5kZWZpbmVkJyAmJiB0aGlzLl9nZW9qc29uTGF5ZXIgIT09IG51bGwpIHtcbiAgICByZXR1cm4gdGhpcy5fZ2VvanNvbkxheWVyO1xuICB9XG5cbiAgdGhpcy5fZ2VvanNvbkxheWVyID0gTC5nZW9Kc29uKHRoaXMuX2dlb2pzb24gfHwgbnVsbCwge1xuICAgIHN0eWxlOiBmdW5jdGlvbihmZWF0dXJlKSB7XG4gICAgICBpZiAodHlwZW9mIGZlYXR1cmUucHJvcGVydGllcy5zdHlsZUZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBmZWF0dXJlLnByb3BlcnRpZXMuc3R5bGVGbihmZWF0dXJlLnByb3BlcnRpZXMpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIEwubWFwYm94LnNpbXBsZXN0eWxlLnN0eWxlKGZlYXR1cmUpO1xuICAgIH0sXG4gICAgcG9pbnRUb0xheWVyOiBmdW5jdGlvbihmZWF0dXJlLCBsYXRsb24pIHtcbiAgICAgIGlmICghZmVhdHVyZS5wcm9wZXJ0aWVzKSBmZWF0dXJlLnByb3BlcnRpZXMgPSB7fTtcbiAgICAgIGlmIChmZWF0dXJlLnByb3BlcnRpZXMuc2NhbGUpIHtcbiAgICAgICAgcmV0dXJuIEwuY2lyY2xlTWFya2VyKGxhdGxvbiwge1xuICAgICAgICAgIGZpbGxDb2xvcjogZmVhdHVyZS5wcm9wZXJ0aWVzLmNvbG9yIHx8ICcjRkYwMDAwJyxcbiAgICAgICAgICByYWRpdXM6IDIwICogZmVhdHVyZS5wcm9wZXJ0aWVzLnNjYWxlXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIEwubWFwYm94Lm1hcmtlci5zdHlsZShmZWF0dXJlLCBsYXRsb24pO1xuICAgIH1cbiAgfSkuZWFjaExheWVyKHRoaXMuX2VhY2hMYXllckNhbGxiYWNrKTtcblxuXG4gIHJldHVybiB0aGlzLl9nZW9qc29uTGF5ZXI7XG59O1xuXG5SZXNvdXJjZS5wcm90b3R5cGUuZWFjaExheWVyID0gZnVuY3Rpb24gKGNiKSB7XG4gIHRoaXMuX2VhY2hMYXllckNhbGxiYWNrID0gY2I7XG4gIHRoaXMuX2dlb2pzb25MYXllci5lYWNoTGF5ZXIoY2IpO1xufTtcbiIsIi8qKlxuICogQ3JlYXRlZCBieSBOaWNob2xhcyBIYWxsYWhhbiA8bmhhbGxhaGFuQHNwYXRpYWxkZXYuY29tPlxuICogICAgICAgb24gMy8xOS8xNC5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXIubW9kdWxlKCdHZW9Bbmd1bGFyJykuZmFjdG9yeSgnVmVjdG9yUHJvdmlkZXInLCBmdW5jdGlvbiAoJHJvb3RTY29wZSwgJGxvY2F0aW9uLCAkaHR0cCwgTGF5ZXJDb25maWcpIHtcblxuICB2YXIgdmVjdG9yID0gcmVxdWlyZSgnLi92ZWN0b3InKTtcbiAgdmVjdG9yLnNldEluamVjdG9ycygkcm9vdFNjb3BlLCAkbG9jYXRpb24sICRodHRwLCBMYXllckNvbmZpZyk7XG5cblxuICAvKipcbiAgICogbWFrZSB0aGUgZGVmYXVsdCBCQm94VVJMIGFibGUgdG8gYmUgb3ZlcnJpZGRlbiBpZiBzcGVjaWZpZWQgYnkgdGhlIExheWVyQ29uZmlnIE9iamVjdC5cbiAgICogQHBhcmFtIGNvbmZpZ1xuICAgKiBAY29uc3RydWN0b3JcbiAgICovXG4gIHZlY3Rvci5iYm94VXJsID0gTGF5ZXJDb25maWcuYmJveC5iYm94dXJsO1xuXG4gIHZhciBSZXNvdXJjZSA9IHJlcXVpcmUoJy4vUmVzb3VyY2UnKTtcbiAgdmFyIEdlb0pTT04gPSByZXF1aXJlKCcuL0dlb0pTT04nKTtcbiAgdmFyIEJCb3hHZW9KU09OID0gcmVxdWlyZSgnLi9CQm94R2VvSlNPTicpO1xuICB2YXIgS01MID0gcmVxdWlyZSgnLi9LTUwnKTtcbiAgdmFyIENTViA9IHJlcXVpcmUoJy4vY3N2Jyk7XG4gIHZhciBQQkYgPSByZXF1aXJlKCcuL1BCRicpO1xuXG5cbiAgLyoqXG4gICAqIFRoaXMgaXMgdXNlZCBieSB0aGUgZmFjdG9yeSB0byBkeW5hbWljYWxseSBzdGF0ZSB0aGUgdHlwZSAoY2xhc3MpXG4gICAqIHRoYXQgaXQgd2FudHMgdG8gaW5zdGFudGlhdGUuXG4gICAqXG4gICAqIEB0eXBlIHt7Z2VvanNvbjogR2VvSlNPTiwgYmJveGdlb2pzb246IEJCb3hHZW9KU09OLCBrbWw6IEtNTH19XG4gICAqL1xuICB2YXIgdHlwZXMgPSB7XG4gICAgZ2VvanNvbjogR2VvSlNPTixcbiAgICBiYm94Z2VvanNvbjogQkJveEdlb0pTT04sXG4gICAga21sOiBLTUwsXG4gICAgY3N2OiBDU1YsXG4gICAgcGJmOiBQQkZcbiAgfTtcblxuXG5cbiAgLyoqXG4gICAqIEZldGNoZXMgdGhlIGZlYXR1cmUgaXRpbmVyYXJ5IGJhc2VkIG9uIHRoZSBjdXJyZW50IGJib3guXG4gICAqXG4gICAqIFRoZSBmZWF0dXJlIGl0aW5lcmFyeSBpcyBhIHNldCBvZiBmZWF0dXJlcyB3aXRoIHNvbWUgcHJvcGVydGllc1xuICAgKiBzdWNoIGFzIGd1aWQgYW5kIG5hbWUuIFRoZSBnZW9tZXRyeSBmb3IgZWFjaCBvZiB0aGVzZSBmZWF0dXJlc1xuICAgKiBoYXMgbm90IHlldCBiZWVuIHJlcXVlc3RlZC4gVGhpcyBpcyBkb25lIGJ5IF9nZXRGZWF0dXJlcy5cbiAgICovXG4gIGZ1bmN0aW9uIGZldGNoRmVhdHVyZUl0aW5lcmFyeSgpIHtcbiAgICB2YXIgdGhpc1VybCA9IHZlY3Rvci5iYm94VXJsLnJlcGxhY2UoJzpiYm94JywgdmVjdG9yLmJib3gpO1xuICAgIHZhciBwcm94eVBhdGggPSBjb25maWcucHJveHlQYXRoKHRoaXNVcmwpO1xuICAgICRodHRwLmdldCh0aGlzVXJsLCB7Y2FjaGU6IHRydWV9KS5zdWNjZXNzKGZ1bmN0aW9uIChmZWF0SXRpbmVyYXJ5LCBzdGF0dXMpIHtcbiAgICAgIHByb2Nlc3NGZWF0dXJlSXRpbmVyYXJ5KGZlYXRJdGluZXJhcnkpO1xuICAgIH0pLmVycm9yKGZ1bmN0aW9uKCkge1xuICAgICAgJGh0dHAuZ2V0KHByb3h5UGF0aCwge2NhY2hlOiB0cnVlfSkuc3VjY2VzcyhmdW5jdGlvbiAoZmVhdEl0aW5lcmFyeSwgc3RhdHVzKSB7XG4gICAgICAgIHByb2Nlc3NGZWF0dXJlSXRpbmVyYXJ5KGZlYXRJdGluZXJhcnkpO1xuICAgICAgfSkuZXJyb3IoZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJVbmFibGUgdG8gZmV0Y2hGZWF0dXJlSXRpbmVyYXJ5OiBcIiArIHRoaXNVcmwpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBwcm9jZXNzRmVhdHVyZUl0aW5lcmFyeShmZWF0SXRpbmVyYXJ5KSB7XG5cbiAgICBmb3IgKHZhciBqID0gMCwgbGVuID0gZmVhdEl0aW5lcmFyeS5sZW5ndGg7IGogPCBsZW47IGorKykge1xuICAgICAgdmFyIGZlYXQgPSBmZWF0SXRpbmVyYXJ5W2pdO1xuICAgICAgaWYgKCBmZWF0LmlzY2VudGVyICkge1xuICAgICAgICB2ZWN0b3IuY2VudGVyTGV2ZWwgPSBmZWF0LmxldmVsIHx8IDA7XG4gICAgICAgICRyb290U2NvcGUuJGJyb2FkY2FzdCgnY2VudGVyLWZlYXR1cmUnLCBmZWF0KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBpZiB0aGVyZSBhcmUgbm8gZmVhdHVyZXMgZm9yIHRoZSBjdXJyZW50IGJvdW5kaW5nIGJveFxuICAgIC8vaWYgKCFmZWF0SXRpbmVyYXJ5IHx8IGZlYXRJdGluZXJhcnkubGVuZ3RoID09PSAwKSB7XG4gICAgLy8gIHJldHVybjtcbiAgICAvL31cblxuICAgIC8qKlxuICAgICAqIENlbnRlciBmZWF0dXJlIGxvZ2ljIGZvciBicmVhZGNydW1icy5cbiAgICAgKi9cbiAgICAvL2ZvciAodmFyIGk9MCwgbGVuPWZlYXRJdGluZXJhcnkubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgICAvLyAgdmFyIGYgPSBmZWF0SXRpbmVyYXJ5W2ldO1xuICAgIC8vICBpZiAoZi5pc2NlbnRlciA9PSB0cnVlKSB7XG4gICAgLy8gICAgJHJvb3RTY29wZS4kYnJvYWRjYXN0KCdjZW50ZXItZmVhdHVyZScsIGYpO1xuICAgIC8vICB9XG4gICAgLy99XG5cbiAgICAvKipcbiAgICAgKiBCQm94R2VvSlNPTiBsb2dpY1xuICAgICAqL1xuICAgIC8vZm9yKHZhciByID0gMCwgbGVuID0gdmVjdG9yLmJib3hSZXNvdXJjZXMubGVuZ3RoOyByIDwgbGVuOyArK3IpIHtcbiAgICAvLyAgdmVjdG9yLmJib3hSZXNvdXJjZXNbcl0ucHJvY2Vzc0ZlYXR1cmVJdGluZXJhcnkoZmVhdEl0aW5lcmFyeSk7XG4gICAgLy99XG5cbiAgfVxuXG5cbiAgcmV0dXJuIHtcbiAgICAvKipcbiAgICAgKiBZb3UgY2FuIGV4cGxpY2l0bHkgbmFtZSB0aGUgdHlwZSBvZiByZXNvdXJjZS4gSWYgbm90LFxuICAgICAqIHdlIHdpbGwgZmlndXJlIGl0IG91dCBmb3IgeW91Li4uXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcmVzb3VyY2VOYW1lXG4gICAgICogQHBhcmFtIHR5cGVcbiAgICAgKi9cbiAgICBjcmVhdGVSZXNvdXJjZTogZnVuY3Rpb24gKHJlc291cmNlTmFtZSwgdHlwZSkge1xuICAgICAgdmFyIGNvbmZpZyA9IExheWVyQ29uZmlnLmZpbmQocmVzb3VyY2VOYW1lKTtcbiAgICAgIGlmIChjb25maWcgPT09IG51bGwpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignVmVjdG9yUHJvdmlkZXI6IEludmFsaWQgUmVzb3VyY2UgQ29uZmlndXJhdGlvbiBOYW1lLiBDaGVjayBMYXllckNvbmZpZyBGaWxlLi4uJyk7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGUgfHwgY29uZmlnLnR5cGUpIHtcbiAgICAgICAgLy8gaWYgdGhlIHJlc291cmNlIGlzIGp1c3QgYSBzdHJpbmcsIHRoZW4gaXQgc2hvdWxkIGJlIGEgdXJsXG4gICAgICAgIHJldHVybiBuZXcgdHlwZXNbKHR5cGUgfHwgY29uZmlnLnR5cGUpLnRvTG93ZXJDYXNlKCldKGNvbmZpZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoY29uZmlnLnNsaWNlKGNvbmZpZy5sZW5ndGggLSAzKS50b0xvd2VyQ2FzZSgpID09PSAncGJmJykge1xuICAgICAgICAgIHJldHVybiBuZXcgUEJGKGNvbmZpZyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY29uZmlnLnNsaWNlKGNvbmZpZy5sZW5ndGggLSAzKS50b0xvd2VyQ2FzZSgpID09PSAna21sJykge1xuICAgICAgICAgIHJldHVybiBuZXcgS01MKGNvbmZpZyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY29uZmlnLnNsaWNlKGNvbmZpZy5sZW5ndGggLSAzKS50b0xvd2VyQ2FzZSgpID09PSAnY3N2Jykge1xuICAgICAgICAgIHJldHVybiBuZXcgQ1NWKGNvbmZpZyk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gTkggVE9ETyBDaGVjayBhIGJpdCBtb3JlIGludG8gaWYgdGhpcyByZXNvdXJjZSBpcyB2YWxpZCBHZW9KU09OXG4gICAgICAgIHJldHVybiBuZXcgR2VvSlNPTihjb25maWcpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBXaGVuIHRoZSBib3VuZGluZyBib3ggb2YgdGhlIG1hcCBjaGFuZ2VzLCBWZWN0b3JQcm92aWRlciBuZWVkc1xuICAgICAqIHRvIGJlIG5vdGlmaWVkIG9mIHRoZSBjdXJyZW50IGJvdW5kaW5nIGJveCBzbyBpdCBjYW4gZmV0Y2ggdGhlXG4gICAgICogbGF0ZXN0IHZlY3RvciBkYXRhIGZvciB0aGUgYmJveCBvZiB0aGUgbWFwIHZpZXdwb3J0LlxuICAgICAqXG4gICAgICogVGhlIGJib3ggbXVzdCBiZSBXR1M4NC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBiYm94U3RyIFwic291dGgsd2VzdCxub3J0aCxlYXN0XCIgPT09IFwibWluWCxtaW5ZLG1heFgsbWF4WVwiXG4gICAgICovXG4gICAgdXBkYXRlQkJveDogZnVuY3Rpb24oYmJveFN0cikge1xuICAgICAgdmVjdG9yLmJib3ggPSBiYm94U3RyO1xuXG4gICAgICBmZXRjaEZlYXR1cmVJdGluZXJhcnkoKTtcbiAgICB9LFxuXG5cbiAgICAvKipcbiAgICAgKiBQcm92aWRlcyB0aGUgYWJpbGl0eSB0byBvdmVycmlkZSB0aGUgZ2FkbSBsZXZlbCBiZWluZyBzaG93biBieSBCQm94R2VvSlNPTlxuICAgICAqIGZlYXR1cmVzIG9uIHRoZSBtYXAuIFlvdSBtYXkgc3BlY2lmeSAtMSB0byA1LiBObyBhcmdzIG9yIGFueXRoaW5nIGVsc2VcbiAgICAgKiBzd2l0Y2hlcyBiYWNrIG9uIHNtYXJ0IGdhZG0gKGF1dG9tYXRpY2FsbHkgY2hvb3NpbmcgdGhlIGxldmVsIGJhc2VkIG9uIGJib3gpLlxuICAgICAqXG4gICAgICogQHBhcmFtIGxldmVsXG4gICAgICovXG4gICAgc2V0R2FkbUxldmVsOiBmdW5jdGlvbihsZXZlbFN0cikge1xuICAgICAgdmFyIGxldmVsID0gcGFyc2VJbnQobGV2ZWxTdHIpO1xuICAgICAgdmVjdG9yLmJib3hVcmwgPSB2ZWN0b3IuYmJveFVybC5yZXBsYWNlKC8mZ2FkbV9sZXZlbD0tP1xcZC8sJycpO1xuICAgICAgaWYgKGxldmVsID49IC0xICYmIGxldmVsIDw9IDUpIHtcbiAgICAgICAgdmVjdG9yLmJib3hVcmwgKz0gJyZnYWRtX2xldmVsPScgKyBsZXZlbDtcbiAgICAgIH1cbiAgICAgIGNvbnNvbGUubG9nKCdiYm94VXJsOiAnICsgdmVjdG9yLmJib3hVcmwpO1xuICAgICAgLy9mZXRjaEZlYXR1cmVJdGluZXJhcnkoKTtcbiAgICB9LFxuXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgZmVhdHVyZSBiYXNlZCBvbiBndWlkIGFuZCBsZXZlbC4gWW91IG1heSBtZXJnZSBpbiBhIHNldCBvZiBwcm9wZXJ0aWVzIGludG8gdGhlXG4gICAgICogY2FsbGVkIGJhY2sgb2JqZWN0IGlmIGRlc2lyZWQgKG9wdGlvbmFsKS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBndWlkXG4gICAgICovXG4gICAgZmV0Y2hGZWF0dXJlOiBmdW5jdGlvbihndWlkLCBsZXZlbCwgcHJvcHNUb01lcmdlLCBjYikge1xuICAgICAgdmFyIHVybCA9IExheWVyQ29uZmlnLmJib3guZmVhdHVybC5yZXBsYWNlKCc6bGV2ZWwnLCBsZXZlbCkucmVwbGFjZSgnOmlkcycsIGd1aWQpO1xuICAgICAgdmFyIHByb3h5UGF0aCA9IGNvbmZpZy5wcm94eVBhdGgodXJsKTtcblxuICAgICAgJGh0dHAuZ2V0KHVybCwge2NhY2hlOiB0cnVlfSkuc3VjY2VzcyhmdW5jdGlvbiAoZ2VvanNvbiwgc3RhdHVzKSB7XG4gICAgICAgIG1lcmdlKGdlb2pzb24pO1xuICAgICAgfSkuZXJyb3IoZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICRodHRwLmdldChwcm94eVBhdGgpLnN1Y2Nlc3MoZnVuY3Rpb24gKGdlb2pzb24sIHN0YXR1cykge1xuICAgICAgICAgIG1lcmdlKGdlb2pzb24pO1xuICAgICAgICB9KS5lcnJvcihmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignVW5hYmxlIHRvIGZldGNoRmVhdHVyZTogJyArIGd1aWQpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgICBmdW5jdGlvbiBtZXJnZShnZW9qc29uKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEZWFsIHdpdGggYmFkIHN0dWZmLlxuICAgICAgICAgKi9cbiAgICAgICAgaWYgKGdlb2pzb24uZXJyb3IpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdVbmFibGUgdG8gZmV0Y2ggZmVhdHVyZTogJyArIGdlb2pzb24uZXJyb3IpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghZ2VvanNvbi5mZWF0dXJlcyB8fCBnZW9qc29uLmZlYXR1cmVzLmxlbmd0aCA8IDEpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyB3ZSBvbmx5IGFyZSBhY3R1YWxseSBhc2tpbmcgZm9yIDEgZmVhdHVyZVxuICAgICAgICB2YXIgZmVhdCA9IGdlb2pzb24uZmVhdHVyZXNbMF07XG5cbiAgICAgICAgLy8gcHV0dGluZyBleGlzdGluZyBwcm9wZXJ0aWVzIGludG8gZ2VvanNvbiBmZWF0dXJlXG4gICAgICAgIGlmIChwcm9wc1RvTWVyZ2UpIHtcbiAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gcHJvcHNUb01lcmdlKSB7XG4gICAgICAgICAgICBmZWF0LnByb3BlcnRpZXNba2V5XSA9IHByb3BzVG9NZXJnZVtrZXldO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNiKGZlYXQpO1xuICAgICAgfVxuXG4gICAgfVxuXG5cbiAgfTtcblxuXG59KTtcblxuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IFJ5YW4gV2hpdGxleSA8cndoaXRsZXlAc3BhdGlhbGRldi5jb20+XG4gKiAgICAgICBvbiA2LzMvMTQuXG4gKi9cblxudmFyIFJlc291cmNlID0gcmVxdWlyZSgnLi9SZXNvdXJjZScpO1xudmFyICRyb290U2NvcGUgPSByZXF1aXJlKCcuL3ZlY3RvcicpLiRyb290U2NvcGU7XG52YXIgJCA9IHJlcXVpcmUoJy4vdmVjdG9yJykuJDtcblxubW9kdWxlLmV4cG9ydHMgPSBDU1Y7XG5cbi8qKlxuICogQSBDU1YgUmVzb3VyY2UgZmV0Y2hlcyBDU1YgYW5kIHBhcnNlcyBpdFxuICpcbiAqIEBwYXJhbSBjb25maWdcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBDU1YoY29uZmlnKSB7XG4gIFJlc291cmNlLmNhbGwodGhpcywgY29uZmlnKTtcbiAgdGhpcy5fZ2VvanNvbiA9IG51bGw7XG59XG5cbkNTVi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFJlc291cmNlLnByb3RvdHlwZSk7XG5DU1YucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gQ1NWO1xuXG5DU1YucHJvdG90eXBlLmxhdEZpZWxkU3RyaW5ncyA9IFtcImxhdFwiLCBcImxhdGl0dWRlXCIsIFwieVwiLCBcInljZW50ZXJcIl07XG5DU1YucHJvdG90eXBlLmxvbmdGaWVsZFN0cmluZ3MgPSBbXCJsb25cIiwgXCJsb25nXCIsIFwibG9uZ2l0dWRlXCIsIFwieFwiLCBcInhjZW50ZXJcIiwgXCJsbmdcIl07XG5cbkNTVi5wcm90b3R5cGUuZ2V0TGF5ZXIgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0aGlzLl9nZW9qc29uTGF5ZXIpIHJldHVybiB0aGlzLl9nZW9qc29uTGF5ZXI7XG4gIHZhciBsYXllciA9IFJlc291cmNlLnByb3RvdHlwZS5nZXRMYXllci5jYWxsKHRoaXMpO1xuICB0aGlzLmZldGNoKGZ1bmN0aW9uIChnZW9qc29uKSB7XG4gICAgbGF5ZXIuYWRkRGF0YShnZW9qc29uKTtcbiAgICBsYXllci5lYWNoTGF5ZXIoZnVuY3Rpb24gKGwpIHtcbiAgICAgIGwub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkcm9vdFNjb3BlLiRicm9hZGNhc3QoJ2RldGFpbHMnLCBsKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcbiAgcmV0dXJuIGxheWVyO1xufTtcblxuQ1NWLnByb3RvdHlwZS5mZXRjaCA9IGZ1bmN0aW9uIChjYikge1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIFJlc291cmNlLnByb3RvdHlwZS5mZXRjaC5jYWxsKHRoaXMsIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgLy9kYXRhIHNob3VsZCBiZSB0aGUgcmF3IGNzdi5cblxuICAgIHNlbGYuX2dlb2pzb24gPSBzZWxmLnByb2Nlc3NDc3ZEYXRhKGRhdGEpO1xuXG4gICAgaWYgKHR5cGVvZiBzZWxmLl9jb25maWcucHJvcGVydGllcyA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGFuZ3VsYXIuZXh0ZW5kKHNlbGYuX2dlb2pzb24ucHJvcGVydGllcywgc2VsZi5fY29uZmlnLnByb3BlcnRpZXMpO1xuICAgICAgc2VsZi5fZ2VvanNvbi5wcm9wZXJ0aWVzLnNyY1R5cGUgPSAnY3N2JztcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJykgY2Ioc2VsZi5fZ2VvanNvbiwgc2VsZik7XG4gIH0pO1xufTtcblxuQ1NWLnByb3RvdHlwZS5oYW5kbGVDc3YgPSBmdW5jdGlvbiAoZmlsZSwgbGF5ZXIpIHtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICBpZiAoZmlsZS5kYXRhKSB7XG4gICAgdmFyIGRlY29kZWQgPSB0aGlzLmJ5dGVzVG9TdHJpbmcoc2VsZi5CYXNlNjQuZGVjb2RlKGZpbGUuZGF0YSkpO1xuICAgIHNlbGYucHJvY2Vzc0NzdkRhdGEoZGVjb2RlZCk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgcmVhZGVyLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiRmluaXNoZWQgcmVhZGluZyBDU1YgZGF0YVwiKTtcbiAgICAgIHNlbGYucHJvY2Vzc0NzdkRhdGEocmVhZGVyLnJlc3VsdCwgbGF5ZXIpO1xuICAgIH07XG4gICAgcmVhZGVyLnJlYWRBc1RleHQoZmlsZSk7XG4gIH1cbn07XG5cbkNTVi5wcm90b3R5cGUuZ2V0U2VwYXJhdG9yID0gZnVuY3Rpb24gKHN0cmluZykge1xuICB2YXIgc2VwYXJhdG9ycyA9IFtcIixcIiwgXCIgICAgICBcIiwgXCI7XCIsIFwifFwiXTtcbiAgdmFyIG1heFNlcGFyYXRvckxlbmd0aCA9IDA7XG4gIHZhciBtYXhTZXBhcmF0b3JWYWx1ZSA9IFwiXCI7XG4gICQuZWFjaChzZXBhcmF0b3JzLCBmdW5jdGlvbiAoaWR4LCBzZXBhcmF0b3IpIHtcbiAgICB2YXIgbGVuZ3RoID0gc3RyaW5nLnNwbGl0KHNlcGFyYXRvcikubGVuZ3RoO1xuICAgIGlmIChsZW5ndGggPiBtYXhTZXBhcmF0b3JMZW5ndGgpIHtcbiAgICAgIG1heFNlcGFyYXRvckxlbmd0aCA9IGxlbmd0aDtcbiAgICAgIG1heFNlcGFyYXRvclZhbHVlID0gc2VwYXJhdG9yO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBtYXhTZXBhcmF0b3JWYWx1ZTtcbn07XG5cbkNTVi5wcm90b3R5cGUuYnl0ZXNUb1N0cmluZyA9IGZ1bmN0aW9uIChiKSB7XG4gIHZhciBzID0gW107XG4gICQuZWFjaChiLCBmdW5jdGlvbiAoaWR4LCBjKSB7XG4gICAgcy5wdXNoKFN0cmluZy5mcm9tQ2hhckNvZGUoYykpO1xuICB9KTtcbiAgcmV0dXJuIHMuam9pbihcIlwiKTtcbn07XG5cbkNTVi5wcm90b3R5cGUucHJvY2Vzc0NzdkRhdGEgPSBmdW5jdGlvbiAoZGF0YSkge1xuICB2YXIgbmV3TGluZUlkeCA9IGRhdGEuaW5kZXhPZihcIlxcblwiKTtcbiAgdmFyIGZpcnN0TGluZSA9ICQudHJpbShkYXRhLnN1YnN0cigwLCBuZXdMaW5lSWR4KSk7IC8vcmVtb3ZlIGV4dHJhIHdoaXRlc3BhY2UsIG5vdCBzdXJlIGlmIEkgbmVlZCB0byBkbyB0aGlzIHNpbmNlIEkgdGhyZXcgb3V0IHNwYWNlIGRlbGltaXRlcnNcbiAgdmFyIHNlcGFyYXRvciA9IHRoaXMuZ2V0U2VwYXJhdG9yKGZpcnN0TGluZSk7XG4gIHZhciBjc3ZTdG9yZSA9ICQuY3N2LnRvT2JqZWN0cyhkYXRhKTtcbiAgdmFyIGZpZWxkTmFtZXMgPSBmaXJzdExpbmUuc3BsaXQoc2VwYXJhdG9yKTtcblxuICB2YXIgbGF0RmllbGQgPSBudWxsO1xuICB2YXIgbG9uZ0ZpZWxkID0gbnVsbDtcblxuICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgLy9GaW5kIExhdC9MbmcgY29sdW1uc1xuICBmb3IgKHZhciBpID0gMCwgbGVuID0gZmllbGROYW1lcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIHZhciBmaWVsZE5hbWUgPSBmaWVsZE5hbWVzW2ldO1xuICAgIHZhciBtYXRjaElkO1xuICAgIG1hdGNoSWQgPSAkLmluQXJyYXkoZmllbGROYW1lLnRvTG93ZXJDYXNlKCksIHNlbGYubGF0RmllbGRTdHJpbmdzKTtcbiAgICBpZiAobWF0Y2hJZCAhPT0gLTEpIHtcbiAgICAgIGxhdEZpZWxkID0gZmllbGROYW1lO1xuICAgIH1cblxuICAgIG1hdGNoSWQgPSAkLmluQXJyYXkoZmllbGROYW1lLnRvTG93ZXJDYXNlKCksIHNlbGYubG9uZ0ZpZWxkU3RyaW5ncyk7XG4gICAgaWYgKG1hdGNoSWQgIT09IC0xKSB7XG4gICAgICBsb25nRmllbGQgPSBmaWVsZE5hbWU7XG4gICAgfVxuICB9XG5cbiAgLy9JZiBNaXNzaW5nIExhdGZpZWxkIG9yIExvbmdGaWVsZCwgdGhlbiBleGl0LlxuICBpZiAoIWxhdEZpZWxkKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmICghbG9uZ0ZpZWxkKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIG91dHB1dEdlb0pTT04gPSB7XG4gICAgXCJ0eXBlXCI6IFwiRmVhdHVyZUNvbGxlY3Rpb25cIixcbiAgICBcImZlYXR1cmVzXCI6IFtdXG4gIH07XG5cbiAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGNzdlN0b3JlLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgdmFyIHJvdyA9IGNzdlN0b3JlW2ldO1xuICAgIHZhciBsYXRpdHVkZSA9IHBhcnNlRmxvYXQocm93W2xhdEZpZWxkXSk7XG4gICAgdmFyIGxvbmdpdHVkZSA9IHBhcnNlRmxvYXQocm93W2xvbmdGaWVsZF0pO1xuXG4gICAgaWYgKGlzTmFOKGxhdGl0dWRlKSB8fCBpc05hTihsb25naXR1ZGUpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy9jcmVhdGUgR2VvSlNPTiBmcmFnbWVudFxuICAgIG91dHB1dEdlb0pTT04uZmVhdHVyZXMucHVzaCh7XG4gICAgICBcInR5cGVcIjogXCJGZWF0dXJlXCIsXG4gICAgICBcImdlb21ldHJ5XCI6IHtcInR5cGVcIjogXCJQb2ludFwiLCBcImNvb3JkaW5hdGVzXCI6IFtsb25naXR1ZGUsIGxhdGl0dWRlXX0sXG4gICAgICBcInByb3BlcnRpZXNcIjogcm93XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gb3V0cHV0R2VvSlNPTjtcbn07XG5cbkNTVi5wcm90b3R5cGUuZWFjaExheWVyID0gZnVuY3Rpb24gKGNiKSB7XG4gIHRoaXMuX2VhY2hMYXllckNhbGxiYWNrID0gY2I7XG4gIHRoaXMuZmV0Y2goZnVuY3Rpb24gKGdlb2pzb24sIHNlbGYpIHtcbiAgICB2YXIgbGF5ZXJzID0gc2VsZi5fZ2VvanNvbkxheWVyLl9sYXllcnM7XG4gICAgZm9yICh2YXIga2V5IGluIGxheWVycykge1xuICAgICAgdmFyIGxheWVyID0gbGF5ZXJzW2tleV07XG4gICAgICBjYihsYXllcik7XG4gICAgfVxuICB9KTtcbn07XG5cbi8qKlxuICpcbiAqICBCYXNlNjQgZW5jb2RlIC8gZGVjb2RlXG4gKiAgaHR0cDovL3d3dy53ZWJ0b29sa2l0LmluZm8vXG4gKlxuICoqL1xuQ1NWLnByb3RvdHlwZS5CYXNlNjQgPSB7XG5cbiAgLy8gcHJpdmF0ZSBwcm9wZXJ0eVxuICBfa2V5U3RyOiBcIkFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky89XCIsXG5cbiAgLy8gcHVibGljIG1ldGhvZCBmb3IgZW5jb2RpbmdcbiAgZW5jb2RlOiBmdW5jdGlvbiAoaW5wdXQpIHtcbiAgICB2YXIgb3V0cHV0ID0gXCJcIjtcbiAgICB2YXIgY2hyMSwgY2hyMiwgY2hyMywgZW5jMSwgZW5jMiwgZW5jMywgZW5jNDtcbiAgICB2YXIgaSA9IDA7XG5cbiAgICBpbnB1dCA9IEJhc2U2NC5fdXRmOF9lbmNvZGUoaW5wdXQpO1xuXG4gICAgd2hpbGUgKGkgPCBpbnB1dC5sZW5ndGgpIHtcblxuICAgICAgY2hyMSA9IGlucHV0LmNoYXJDb2RlQXQoaSsrKTtcbiAgICAgIGNocjIgPSBpbnB1dC5jaGFyQ29kZUF0KGkrKyk7XG4gICAgICBjaHIzID0gaW5wdXQuY2hhckNvZGVBdChpKyspO1xuXG4gICAgICBlbmMxID0gY2hyMSA+PiAyO1xuICAgICAgZW5jMiA9ICgoY2hyMSAmIDMpIDw8IDQpIHwgKGNocjIgPj4gNCk7XG4gICAgICBlbmMzID0gKChjaHIyICYgMTUpIDw8IDIpIHwgKGNocjMgPj4gNik7XG4gICAgICBlbmM0ID0gY2hyMyAmIDYzO1xuXG4gICAgICBpZiAoaXNOYU4oY2hyMikpIHtcbiAgICAgICAgZW5jMyA9IGVuYzQgPSA2NDtcbiAgICAgIH0gZWxzZSBpZiAoaXNOYU4oY2hyMykpIHtcbiAgICAgICAgZW5jNCA9IDY0O1xuICAgICAgfVxuXG4gICAgICBvdXRwdXQgPSBvdXRwdXQgK1xuICAgICAgICB0aGlzLl9rZXlTdHIuY2hhckF0KGVuYzEpICsgdGhpcy5fa2V5U3RyLmNoYXJBdChlbmMyKSArXG4gICAgICAgIHRoaXMuX2tleVN0ci5jaGFyQXQoZW5jMykgKyB0aGlzLl9rZXlTdHIuY2hhckF0KGVuYzQpO1xuXG4gICAgfVxuXG4gICAgcmV0dXJuIG91dHB1dDtcbiAgfSxcblxuICAvLyBwdWJsaWMgbWV0aG9kIGZvciBkZWNvZGluZ1xuICBkZWNvZGU6IGZ1bmN0aW9uIChpbnB1dCkge1xuICAgIHZhciBvdXRwdXQgPSBcIlwiO1xuICAgIHZhciBjaHIxLCBjaHIyLCBjaHIzO1xuICAgIHZhciBlbmMxLCBlbmMyLCBlbmMzLCBlbmM0O1xuICAgIHZhciBpID0gMDtcblxuICAgIGlucHV0ID0gaW5wdXQucmVwbGFjZSgvW15BLVphLXowLTlcXCtcXC9cXD1dL2csIFwiXCIpO1xuXG4gICAgd2hpbGUgKGkgPCBpbnB1dC5sZW5ndGgpIHtcblxuICAgICAgZW5jMSA9IHRoaXMuX2tleVN0ci5pbmRleE9mKGlucHV0LmNoYXJBdChpKyspKTtcbiAgICAgIGVuYzIgPSB0aGlzLl9rZXlTdHIuaW5kZXhPZihpbnB1dC5jaGFyQXQoaSsrKSk7XG4gICAgICBlbmMzID0gdGhpcy5fa2V5U3RyLmluZGV4T2YoaW5wdXQuY2hhckF0KGkrKykpO1xuICAgICAgZW5jNCA9IHRoaXMuX2tleVN0ci5pbmRleE9mKGlucHV0LmNoYXJBdChpKyspKTtcblxuICAgICAgY2hyMSA9IChlbmMxIDw8IDIpIHwgKGVuYzIgPj4gNCk7XG4gICAgICBjaHIyID0gKChlbmMyICYgMTUpIDw8IDQpIHwgKGVuYzMgPj4gMik7XG4gICAgICBjaHIzID0gKChlbmMzICYgMykgPDwgNikgfCBlbmM0O1xuXG4gICAgICBvdXRwdXQgPSBvdXRwdXQgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKGNocjEpO1xuXG4gICAgICBpZiAoZW5jMyAhPSA2NCkge1xuICAgICAgICBvdXRwdXQgPSBvdXRwdXQgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKGNocjIpO1xuICAgICAgfVxuICAgICAgaWYgKGVuYzQgIT0gNjQpIHtcbiAgICAgICAgb3V0cHV0ID0gb3V0cHV0ICsgU3RyaW5nLmZyb21DaGFyQ29kZShjaHIzKTtcbiAgICAgIH1cblxuICAgIH1cblxuICAgIG91dHB1dCA9IHRoaXMuQmFzZTY0Ll91dGY4X2RlY29kZShvdXRwdXQpO1xuXG4gICAgcmV0dXJuIG91dHB1dDtcblxuICB9LFxuXG4gIC8vIHByaXZhdGUgbWV0aG9kIGZvciBVVEYtOCBlbmNvZGluZ1xuICBfdXRmOF9lbmNvZGU6IGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgICBzdHJpbmcgPSBzdHJpbmcucmVwbGFjZSgvXFxyXFxuL2csIFwiXFxuXCIpO1xuICAgIHZhciB1dGZ0ZXh0ID0gXCJcIjtcblxuICAgIGZvciAodmFyIG4gPSAwOyBuIDwgc3RyaW5nLmxlbmd0aDsgbisrKSB7XG5cbiAgICAgIHZhciBjID0gc3RyaW5nLmNoYXJDb2RlQXQobik7XG5cbiAgICAgIGlmIChjIDwgMTI4KSB7XG4gICAgICAgIHV0ZnRleHQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShjKTtcbiAgICAgIH0gZWxzZSBpZiAoKGMgPiAxMjcpICYmIChjIDwgMjA0OCkpIHtcbiAgICAgICAgdXRmdGV4dCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKChjID4+IDYpIHwgMTkyKTtcbiAgICAgICAgdXRmdGV4dCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKChjICYgNjMpIHwgMTI4KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHV0ZnRleHQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSgoYyA+PiAxMikgfCAyMjQpO1xuICAgICAgICB1dGZ0ZXh0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoKChjID4+IDYpICYgNjMpIHwgMTI4KTtcbiAgICAgICAgdXRmdGV4dCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKChjICYgNjMpIHwgMTI4KTtcbiAgICAgIH1cblxuICAgIH1cblxuICAgIHJldHVybiB1dGZ0ZXh0O1xuICB9LFxuXG4gIC8vIHByaXZhdGUgbWV0aG9kIGZvciBVVEYtOCBkZWNvZGluZ1xuICBfdXRmOF9kZWNvZGU6IGZ1bmN0aW9uICh1dGZ0ZXh0KSB7XG4gICAgdmFyIHN0cmluZyA9IFwiXCI7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBjID0gYzEgPSBjMiA9IDA7XG5cbiAgICB3aGlsZSAoaSA8IHV0ZnRleHQubGVuZ3RoKSB7XG5cbiAgICAgIGMgPSB1dGZ0ZXh0LmNoYXJDb2RlQXQoaSk7XG5cbiAgICAgIGlmIChjIDwgMTI4KSB7XG4gICAgICAgIHN0cmluZyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGMpO1xuICAgICAgICBpKys7XG4gICAgICB9IGVsc2UgaWYgKChjID4gMTkxKSAmJiAoYyA8IDIyNCkpIHtcbiAgICAgICAgYzIgPSB1dGZ0ZXh0LmNoYXJDb2RlQXQoaSArIDEpO1xuICAgICAgICBzdHJpbmcgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSgoKGMgJiAzMSkgPDwgNikgfCAoYzIgJiA2MykpO1xuICAgICAgICBpICs9IDI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjMiA9IHV0ZnRleHQuY2hhckNvZGVBdChpICsgMSk7XG4gICAgICAgIGMzID0gdXRmdGV4dC5jaGFyQ29kZUF0KGkgKyAyKTtcbiAgICAgICAgc3RyaW5nICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoKChjICYgMTUpIDw8IDEyKSB8ICgoYzIgJiA2MykgPDwgNikgfCAoYzMgJiA2MykpO1xuICAgICAgICBpICs9IDM7XG4gICAgICB9XG5cbiAgICB9XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbn07XG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgTmljaG9sYXMgSGFsbGFoYW4gPG5oYWxsYWhhbkBzcGF0aWFsZGV2LmNvbT5cbiAqICAgICAgIG9uIDYvMy8xNC5cbiAqL1xuXG52YXIgdmVjdG9yID0ge307XG5tb2R1bGUuZXhwb3J0cyA9IHZlY3RvcjtcblxudmVjdG9yLnNldEluamVjdG9ycyA9IGZ1bmN0aW9uICgkcm9vdFNjb3BlLCAkbG9jYXRpb24sICRodHRwLCBMYXllckNvbmZpZykge1xuICB2ZWN0b3IuJHJvb3RTY29wZSA9ICRyb290U2NvcGU7XG4gIHZlY3Rvci4kbG9jYXRpb24gPSAkbG9jYXRpb247XG4gIHZlY3Rvci4kaHR0cCA9ICRodHRwO1xuICB2ZWN0b3IuTGF5ZXJDb25maWcgPSBMYXllckNvbmZpZztcbn07XG5cbnZlY3Rvci5hbmd1bGFyID0gYW5ndWxhcjtcbnZlY3Rvci5MID0gTDtcbnZlY3Rvci4kID0gJDtcbnZlY3Rvci50b0dlb0pTT04gPSB0b0dlb0pTT047XG5cblxuLyoqXG4gKiBUaGlzIGlzIHVwZGF0ZWQgYnkgdXBkYXRlQkJveC4gSXQgaXMgdGhlbiB1c2VkIHRvIHF1ZXJ5IGFsbFxuICogVmVjdG9yUHJvdmlkZXJzIHRoYXQgdXNlIGEgYm91bmRpbmcgYm94IHRvIGdldCBhZGRpdGlvbmFsXG4gKiBmZWF0dXJlcy5cbiAqXG4gKiBAdHlwZSB7c3RyaW5nfVxuICovXG52YXIgYmJveCA9IHZlY3Rvci5iYm94ID0gbnVsbDtcblxuLyoqXG4gKiBFdmVyeSByZXNvdXJjZSB0aGF0IGhhcyBiZWVuIGluc3RhbnRpYXRlZC5cbiAqIEB0eXBlIHtBcnJheX1cbiAqL1xudmFyIHJlc291cmNlcyA9IHZlY3Rvci5yZXNvdXJjZXMgPSBbXTtcbmRlYnVnLnJlc291cmNlcyA9IHJlc291cmNlcztcblxuLyoqXG4gKiBFdmVyeSByZXNvdXJjZSB3aXRoIGEgYm91bmRpbmcgYm94IGZldGNoaW5nIG1lY2hhbmlzbS5cbiAqIEB0eXBlIHtBcnJheX1cbiAqL1xudmFyIGJib3hSZXNvdXJjZXMgPSB2ZWN0b3IuYmJveFJlc291cmNlcyA9IFtdO1xuZGVidWcuYmJveFJlc291cmNlcyA9IGJib3hSZXNvdXJjZXM7XG5cbnZhciBiYm94VXJsID0gdmVjdG9yLmJib3hVcmwgPSAnJztcblxudmFyIGNlbnRlckxldmVsID0gdmVjdG9yLmNlbnRlckxldmVsID0gMDtcblxuXG5cbiIsIi8qIVxuICogVGhlIGJ1ZmZlciBtb2R1bGUgZnJvbSBub2RlLmpzLCBmb3IgdGhlIGJyb3dzZXIuXG4gKlxuICogQGF1dGhvciAgIEZlcm9zcyBBYm91a2hhZGlqZWggPGZlcm9zc0BmZXJvc3Mub3JnPiA8aHR0cDovL2Zlcm9zcy5vcmc+XG4gKiBAbGljZW5zZSAgTUlUXG4gKi9cblxudmFyIGJhc2U2NCA9IHJlcXVpcmUoJ2Jhc2U2NC1qcycpXG52YXIgaWVlZTc1NCA9IHJlcXVpcmUoJ2llZWU3NTQnKVxudmFyIGlzQXJyYXkgPSByZXF1aXJlKCdpcy1hcnJheScpXG5cbmV4cG9ydHMuQnVmZmVyID0gQnVmZmVyXG5leHBvcnRzLlNsb3dCdWZmZXIgPSBCdWZmZXJcbmV4cG9ydHMuSU5TUEVDVF9NQVhfQllURVMgPSA1MFxuQnVmZmVyLnBvb2xTaXplID0gODE5MiAvLyBub3QgdXNlZCBieSB0aGlzIGltcGxlbWVudGF0aW9uXG5cbnZhciBrTWF4TGVuZ3RoID0gMHgzZmZmZmZmZlxuXG4vKipcbiAqIElmIGBCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVGA6XG4gKiAgID09PSB0cnVlICAgIFVzZSBVaW50OEFycmF5IGltcGxlbWVudGF0aW9uIChmYXN0ZXN0KVxuICogICA9PT0gZmFsc2UgICBVc2UgT2JqZWN0IGltcGxlbWVudGF0aW9uIChtb3N0IGNvbXBhdGlibGUsIGV2ZW4gSUU2KVxuICpcbiAqIEJyb3dzZXJzIHRoYXQgc3VwcG9ydCB0eXBlZCBhcnJheXMgYXJlIElFIDEwKywgRmlyZWZveCA0KywgQ2hyb21lIDcrLCBTYWZhcmkgNS4xKyxcbiAqIE9wZXJhIDExLjYrLCBpT1MgNC4yKy5cbiAqXG4gKiBOb3RlOlxuICpcbiAqIC0gSW1wbGVtZW50YXRpb24gbXVzdCBzdXBwb3J0IGFkZGluZyBuZXcgcHJvcGVydGllcyB0byBgVWludDhBcnJheWAgaW5zdGFuY2VzLlxuICogICBGaXJlZm94IDQtMjkgbGFja2VkIHN1cHBvcnQsIGZpeGVkIGluIEZpcmVmb3ggMzArLlxuICogICBTZWU6IGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTY5NTQzOC5cbiAqXG4gKiAgLSBDaHJvbWUgOS0xMCBpcyBtaXNzaW5nIHRoZSBgVHlwZWRBcnJheS5wcm90b3R5cGUuc3ViYXJyYXlgIGZ1bmN0aW9uLlxuICpcbiAqICAtIElFMTAgaGFzIGEgYnJva2VuIGBUeXBlZEFycmF5LnByb3RvdHlwZS5zdWJhcnJheWAgZnVuY3Rpb24gd2hpY2ggcmV0dXJucyBhcnJheXMgb2ZcbiAqICAgIGluY29ycmVjdCBsZW5ndGggaW4gc29tZSBzaXR1YXRpb25zLlxuICpcbiAqIFdlIGRldGVjdCB0aGVzZSBidWdneSBicm93c2VycyBhbmQgc2V0IGBCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVGAgdG8gYGZhbHNlYCBzbyB0aGV5IHdpbGxcbiAqIGdldCB0aGUgT2JqZWN0IGltcGxlbWVudGF0aW9uLCB3aGljaCBpcyBzbG93ZXIgYnV0IHdpbGwgd29yayBjb3JyZWN0bHkuXG4gKi9cbkJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUID0gKGZ1bmN0aW9uICgpIHtcbiAgdHJ5IHtcbiAgICB2YXIgYnVmID0gbmV3IEFycmF5QnVmZmVyKDApXG4gICAgdmFyIGFyciA9IG5ldyBVaW50OEFycmF5KGJ1ZilcbiAgICBhcnIuZm9vID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gNDIgfVxuICAgIHJldHVybiA0MiA9PT0gYXJyLmZvbygpICYmIC8vIHR5cGVkIGFycmF5IGluc3RhbmNlcyBjYW4gYmUgYXVnbWVudGVkXG4gICAgICAgIHR5cGVvZiBhcnIuc3ViYXJyYXkgPT09ICdmdW5jdGlvbicgJiYgLy8gY2hyb21lIDktMTAgbGFjayBgc3ViYXJyYXlgXG4gICAgICAgIG5ldyBVaW50OEFycmF5KDEpLnN1YmFycmF5KDEsIDEpLmJ5dGVMZW5ndGggPT09IDAgLy8gaWUxMCBoYXMgYnJva2VuIGBzdWJhcnJheWBcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59KSgpXG5cbi8qKlxuICogQ2xhc3M6IEJ1ZmZlclxuICogPT09PT09PT09PT09PVxuICpcbiAqIFRoZSBCdWZmZXIgY29uc3RydWN0b3IgcmV0dXJucyBpbnN0YW5jZXMgb2YgYFVpbnQ4QXJyYXlgIHRoYXQgYXJlIGF1Z21lbnRlZFxuICogd2l0aCBmdW5jdGlvbiBwcm9wZXJ0aWVzIGZvciBhbGwgdGhlIG5vZGUgYEJ1ZmZlcmAgQVBJIGZ1bmN0aW9ucy4gV2UgdXNlXG4gKiBgVWludDhBcnJheWAgc28gdGhhdCBzcXVhcmUgYnJhY2tldCBub3RhdGlvbiB3b3JrcyBhcyBleHBlY3RlZCAtLSBpdCByZXR1cm5zXG4gKiBhIHNpbmdsZSBvY3RldC5cbiAqXG4gKiBCeSBhdWdtZW50aW5nIHRoZSBpbnN0YW5jZXMsIHdlIGNhbiBhdm9pZCBtb2RpZnlpbmcgdGhlIGBVaW50OEFycmF5YFxuICogcHJvdG90eXBlLlxuICovXG5mdW5jdGlvbiBCdWZmZXIgKHN1YmplY3QsIGVuY29kaW5nLCBub1plcm8pIHtcbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIEJ1ZmZlcikpXG4gICAgcmV0dXJuIG5ldyBCdWZmZXIoc3ViamVjdCwgZW5jb2RpbmcsIG5vWmVybylcblxuICB2YXIgdHlwZSA9IHR5cGVvZiBzdWJqZWN0XG5cbiAgLy8gRmluZCB0aGUgbGVuZ3RoXG4gIHZhciBsZW5ndGhcbiAgaWYgKHR5cGUgPT09ICdudW1iZXInKVxuICAgIGxlbmd0aCA9IHN1YmplY3QgPiAwID8gc3ViamVjdCA+Pj4gMCA6IDBcbiAgZWxzZSBpZiAodHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICBpZiAoZW5jb2RpbmcgPT09ICdiYXNlNjQnKVxuICAgICAgc3ViamVjdCA9IGJhc2U2NGNsZWFuKHN1YmplY3QpXG4gICAgbGVuZ3RoID0gQnVmZmVyLmJ5dGVMZW5ndGgoc3ViamVjdCwgZW5jb2RpbmcpXG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gJ29iamVjdCcgJiYgc3ViamVjdCAhPT0gbnVsbCkgeyAvLyBhc3N1bWUgb2JqZWN0IGlzIGFycmF5LWxpa2VcbiAgICBpZiAoc3ViamVjdC50eXBlID09PSAnQnVmZmVyJyAmJiBpc0FycmF5KHN1YmplY3QuZGF0YSkpXG4gICAgICBzdWJqZWN0ID0gc3ViamVjdC5kYXRhXG4gICAgbGVuZ3RoID0gK3N1YmplY3QubGVuZ3RoID4gMCA/IE1hdGguZmxvb3IoK3N1YmplY3QubGVuZ3RoKSA6IDBcbiAgfSBlbHNlXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignbXVzdCBzdGFydCB3aXRoIG51bWJlciwgYnVmZmVyLCBhcnJheSBvciBzdHJpbmcnKVxuXG4gIGlmICh0aGlzLmxlbmd0aCA+IGtNYXhMZW5ndGgpXG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0F0dGVtcHQgdG8gYWxsb2NhdGUgQnVmZmVyIGxhcmdlciB0aGFuIG1heGltdW0gJyArXG4gICAgICAnc2l6ZTogMHgnICsga01heExlbmd0aC50b1N0cmluZygxNikgKyAnIGJ5dGVzJylcblxuICB2YXIgYnVmXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIC8vIFByZWZlcnJlZDogUmV0dXJuIGFuIGF1Z21lbnRlZCBgVWludDhBcnJheWAgaW5zdGFuY2UgZm9yIGJlc3QgcGVyZm9ybWFuY2VcbiAgICBidWYgPSBCdWZmZXIuX2F1Z21lbnQobmV3IFVpbnQ4QXJyYXkobGVuZ3RoKSlcbiAgfSBlbHNlIHtcbiAgICAvLyBGYWxsYmFjazogUmV0dXJuIFRISVMgaW5zdGFuY2Ugb2YgQnVmZmVyIChjcmVhdGVkIGJ5IGBuZXdgKVxuICAgIGJ1ZiA9IHRoaXNcbiAgICBidWYubGVuZ3RoID0gbGVuZ3RoXG4gICAgYnVmLl9pc0J1ZmZlciA9IHRydWVcbiAgfVxuXG4gIHZhciBpXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCAmJiB0eXBlb2Ygc3ViamVjdC5ieXRlTGVuZ3RoID09PSAnbnVtYmVyJykge1xuICAgIC8vIFNwZWVkIG9wdGltaXphdGlvbiAtLSB1c2Ugc2V0IGlmIHdlJ3JlIGNvcHlpbmcgZnJvbSBhIHR5cGVkIGFycmF5XG4gICAgYnVmLl9zZXQoc3ViamVjdClcbiAgfSBlbHNlIGlmIChpc0FycmF5aXNoKHN1YmplY3QpKSB7XG4gICAgLy8gVHJlYXQgYXJyYXktaXNoIG9iamVjdHMgYXMgYSBieXRlIGFycmF5XG4gICAgaWYgKEJ1ZmZlci5pc0J1ZmZlcihzdWJqZWN0KSkge1xuICAgICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKVxuICAgICAgICBidWZbaV0gPSBzdWJqZWN0LnJlYWRVSW50OChpKVxuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspXG4gICAgICAgIGJ1ZltpXSA9ICgoc3ViamVjdFtpXSAlIDI1NikgKyAyNTYpICUgMjU2XG4gICAgfVxuICB9IGVsc2UgaWYgKHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgYnVmLndyaXRlKHN1YmplY3QsIDAsIGVuY29kaW5nKVxuICB9IGVsc2UgaWYgKHR5cGUgPT09ICdudW1iZXInICYmICFCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCAmJiAhbm9aZXJvKSB7XG4gICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBidWZbaV0gPSAwXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGJ1ZlxufVxuXG5CdWZmZXIuaXNCdWZmZXIgPSBmdW5jdGlvbiAoYikge1xuICByZXR1cm4gISEoYiAhPSBudWxsICYmIGIuX2lzQnVmZmVyKVxufVxuXG5CdWZmZXIuY29tcGFyZSA9IGZ1bmN0aW9uIChhLCBiKSB7XG4gIGlmICghQnVmZmVyLmlzQnVmZmVyKGEpIHx8ICFCdWZmZXIuaXNCdWZmZXIoYikpXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnRzIG11c3QgYmUgQnVmZmVycycpXG5cbiAgdmFyIHggPSBhLmxlbmd0aFxuICB2YXIgeSA9IGIubGVuZ3RoXG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBNYXRoLm1pbih4LCB5KTsgaSA8IGxlbiAmJiBhW2ldID09PSBiW2ldOyBpKyspIHt9XG4gIGlmIChpICE9PSBsZW4pIHtcbiAgICB4ID0gYVtpXVxuICAgIHkgPSBiW2ldXG4gIH1cbiAgaWYgKHggPCB5KSByZXR1cm4gLTFcbiAgaWYgKHkgPCB4KSByZXR1cm4gMVxuICByZXR1cm4gMFxufVxuXG5CdWZmZXIuaXNFbmNvZGluZyA9IGZ1bmN0aW9uIChlbmNvZGluZykge1xuICBzd2l0Y2ggKFN0cmluZyhlbmNvZGluZykudG9Mb3dlckNhc2UoKSkge1xuICAgIGNhc2UgJ2hleCc6XG4gICAgY2FzZSAndXRmOCc6XG4gICAgY2FzZSAndXRmLTgnOlxuICAgIGNhc2UgJ2FzY2lpJzpcbiAgICBjYXNlICdiaW5hcnknOlxuICAgIGNhc2UgJ2Jhc2U2NCc6XG4gICAgY2FzZSAncmF3JzpcbiAgICBjYXNlICd1Y3MyJzpcbiAgICBjYXNlICd1Y3MtMic6XG4gICAgY2FzZSAndXRmMTZsZSc6XG4gICAgY2FzZSAndXRmLTE2bGUnOlxuICAgICAgcmV0dXJuIHRydWVcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxuQnVmZmVyLmNvbmNhdCA9IGZ1bmN0aW9uIChsaXN0LCB0b3RhbExlbmd0aCkge1xuICBpZiAoIWlzQXJyYXkobGlzdCkpIHRocm93IG5ldyBUeXBlRXJyb3IoJ1VzYWdlOiBCdWZmZXIuY29uY2F0KGxpc3RbLCBsZW5ndGhdKScpXG5cbiAgaWYgKGxpc3QubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIG5ldyBCdWZmZXIoMClcbiAgfSBlbHNlIGlmIChsaXN0Lmxlbmd0aCA9PT0gMSkge1xuICAgIHJldHVybiBsaXN0WzBdXG4gIH1cblxuICB2YXIgaVxuICBpZiAodG90YWxMZW5ndGggPT09IHVuZGVmaW5lZCkge1xuICAgIHRvdGFsTGVuZ3RoID0gMFxuICAgIGZvciAoaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICB0b3RhbExlbmd0aCArPSBsaXN0W2ldLmxlbmd0aFxuICAgIH1cbiAgfVxuXG4gIHZhciBidWYgPSBuZXcgQnVmZmVyKHRvdGFsTGVuZ3RoKVxuICB2YXIgcG9zID0gMFxuICBmb3IgKGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXVxuICAgIGl0ZW0uY29weShidWYsIHBvcylcbiAgICBwb3MgKz0gaXRlbS5sZW5ndGhcbiAgfVxuICByZXR1cm4gYnVmXG59XG5cbkJ1ZmZlci5ieXRlTGVuZ3RoID0gZnVuY3Rpb24gKHN0ciwgZW5jb2RpbmcpIHtcbiAgdmFyIHJldFxuICBzdHIgPSBzdHIgKyAnJ1xuICBzd2l0Y2ggKGVuY29kaW5nIHx8ICd1dGY4Jykge1xuICAgIGNhc2UgJ2FzY2lpJzpcbiAgICBjYXNlICdiaW5hcnknOlxuICAgIGNhc2UgJ3Jhdyc6XG4gICAgICByZXQgPSBzdHIubGVuZ3RoXG4gICAgICBicmVha1xuICAgIGNhc2UgJ3VjczInOlxuICAgIGNhc2UgJ3Vjcy0yJzpcbiAgICBjYXNlICd1dGYxNmxlJzpcbiAgICBjYXNlICd1dGYtMTZsZSc6XG4gICAgICByZXQgPSBzdHIubGVuZ3RoICogMlxuICAgICAgYnJlYWtcbiAgICBjYXNlICdoZXgnOlxuICAgICAgcmV0ID0gc3RyLmxlbmd0aCA+Pj4gMVxuICAgICAgYnJlYWtcbiAgICBjYXNlICd1dGY4JzpcbiAgICBjYXNlICd1dGYtOCc6XG4gICAgICByZXQgPSB1dGY4VG9CeXRlcyhzdHIpLmxlbmd0aFxuICAgICAgYnJlYWtcbiAgICBjYXNlICdiYXNlNjQnOlxuICAgICAgcmV0ID0gYmFzZTY0VG9CeXRlcyhzdHIpLmxlbmd0aFxuICAgICAgYnJlYWtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0ID0gc3RyLmxlbmd0aFxuICB9XG4gIHJldHVybiByZXRcbn1cblxuLy8gcHJlLXNldCBmb3IgdmFsdWVzIHRoYXQgbWF5IGV4aXN0IGluIHRoZSBmdXR1cmVcbkJ1ZmZlci5wcm90b3R5cGUubGVuZ3RoID0gdW5kZWZpbmVkXG5CdWZmZXIucHJvdG90eXBlLnBhcmVudCA9IHVuZGVmaW5lZFxuXG4vLyB0b1N0cmluZyhlbmNvZGluZywgc3RhcnQ9MCwgZW5kPWJ1ZmZlci5sZW5ndGgpXG5CdWZmZXIucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKGVuY29kaW5nLCBzdGFydCwgZW5kKSB7XG4gIHZhciBsb3dlcmVkQ2FzZSA9IGZhbHNlXG5cbiAgc3RhcnQgPSBzdGFydCA+Pj4gMFxuICBlbmQgPSBlbmQgPT09IHVuZGVmaW5lZCB8fCBlbmQgPT09IEluZmluaXR5ID8gdGhpcy5sZW5ndGggOiBlbmQgPj4+IDBcblxuICBpZiAoIWVuY29kaW5nKSBlbmNvZGluZyA9ICd1dGY4J1xuICBpZiAoc3RhcnQgPCAwKSBzdGFydCA9IDBcbiAgaWYgKGVuZCA+IHRoaXMubGVuZ3RoKSBlbmQgPSB0aGlzLmxlbmd0aFxuICBpZiAoZW5kIDw9IHN0YXJ0KSByZXR1cm4gJydcblxuICB3aGlsZSAodHJ1ZSkge1xuICAgIHN3aXRjaCAoZW5jb2RpbmcpIHtcbiAgICAgIGNhc2UgJ2hleCc6XG4gICAgICAgIHJldHVybiBoZXhTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBjYXNlICd1dGY4JzpcbiAgICAgIGNhc2UgJ3V0Zi04JzpcbiAgICAgICAgcmV0dXJuIHV0ZjhTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBjYXNlICdhc2NpaSc6XG4gICAgICAgIHJldHVybiBhc2NpaVNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGNhc2UgJ2JpbmFyeSc6XG4gICAgICAgIHJldHVybiBiaW5hcnlTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBjYXNlICdiYXNlNjQnOlxuICAgICAgICByZXR1cm4gYmFzZTY0U2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgY2FzZSAndWNzMic6XG4gICAgICBjYXNlICd1Y3MtMic6XG4gICAgICBjYXNlICd1dGYxNmxlJzpcbiAgICAgIGNhc2UgJ3V0Zi0xNmxlJzpcbiAgICAgICAgcmV0dXJuIHV0ZjE2bGVTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpZiAobG93ZXJlZENhc2UpXG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVW5rbm93biBlbmNvZGluZzogJyArIGVuY29kaW5nKVxuICAgICAgICBlbmNvZGluZyA9IChlbmNvZGluZyArICcnKS50b0xvd2VyQ2FzZSgpXG4gICAgICAgIGxvd2VyZWRDYXNlID0gdHJ1ZVxuICAgIH1cbiAgfVxufVxuXG5CdWZmZXIucHJvdG90eXBlLmVxdWFscyA9IGZ1bmN0aW9uIChiKSB7XG4gIGlmKCFCdWZmZXIuaXNCdWZmZXIoYikpIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50IG11c3QgYmUgYSBCdWZmZXInKVxuICByZXR1cm4gQnVmZmVyLmNvbXBhcmUodGhpcywgYikgPT09IDBcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5pbnNwZWN0ID0gZnVuY3Rpb24gKCkge1xuICB2YXIgc3RyID0gJydcbiAgdmFyIG1heCA9IGV4cG9ydHMuSU5TUEVDVF9NQVhfQllURVNcbiAgaWYgKHRoaXMubGVuZ3RoID4gMCkge1xuICAgIHN0ciA9IHRoaXMudG9TdHJpbmcoJ2hleCcsIDAsIG1heCkubWF0Y2goLy57Mn0vZykuam9pbignICcpXG4gICAgaWYgKHRoaXMubGVuZ3RoID4gbWF4KVxuICAgICAgc3RyICs9ICcgLi4uICdcbiAgfVxuICByZXR1cm4gJzxCdWZmZXIgJyArIHN0ciArICc+J1xufVxuXG5CdWZmZXIucHJvdG90eXBlLmNvbXBhcmUgPSBmdW5jdGlvbiAoYikge1xuICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcihiKSkgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnQgbXVzdCBiZSBhIEJ1ZmZlcicpXG4gIHJldHVybiBCdWZmZXIuY29tcGFyZSh0aGlzLCBiKVxufVxuXG4vLyBgZ2V0YCB3aWxsIGJlIHJlbW92ZWQgaW4gTm9kZSAwLjEzK1xuQnVmZmVyLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAob2Zmc2V0KSB7XG4gIGNvbnNvbGUubG9nKCcuZ2V0KCkgaXMgZGVwcmVjYXRlZC4gQWNjZXNzIHVzaW5nIGFycmF5IGluZGV4ZXMgaW5zdGVhZC4nKVxuICByZXR1cm4gdGhpcy5yZWFkVUludDgob2Zmc2V0KVxufVxuXG4vLyBgc2V0YCB3aWxsIGJlIHJlbW92ZWQgaW4gTm9kZSAwLjEzK1xuQnVmZmVyLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiAodiwgb2Zmc2V0KSB7XG4gIGNvbnNvbGUubG9nKCcuc2V0KCkgaXMgZGVwcmVjYXRlZC4gQWNjZXNzIHVzaW5nIGFycmF5IGluZGV4ZXMgaW5zdGVhZC4nKVxuICByZXR1cm4gdGhpcy53cml0ZVVJbnQ4KHYsIG9mZnNldClcbn1cblxuZnVuY3Rpb24gaGV4V3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICBvZmZzZXQgPSBOdW1iZXIob2Zmc2V0KSB8fCAwXG4gIHZhciByZW1haW5pbmcgPSBidWYubGVuZ3RoIC0gb2Zmc2V0XG4gIGlmICghbGVuZ3RoKSB7XG4gICAgbGVuZ3RoID0gcmVtYWluaW5nXG4gIH0gZWxzZSB7XG4gICAgbGVuZ3RoID0gTnVtYmVyKGxlbmd0aClcbiAgICBpZiAobGVuZ3RoID4gcmVtYWluaW5nKSB7XG4gICAgICBsZW5ndGggPSByZW1haW5pbmdcbiAgICB9XG4gIH1cblxuICAvLyBtdXN0IGJlIGFuIGV2ZW4gbnVtYmVyIG9mIGRpZ2l0c1xuICB2YXIgc3RyTGVuID0gc3RyaW5nLmxlbmd0aFxuICBpZiAoc3RyTGVuICUgMiAhPT0gMCkgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGhleCBzdHJpbmcnKVxuXG4gIGlmIChsZW5ndGggPiBzdHJMZW4gLyAyKSB7XG4gICAgbGVuZ3RoID0gc3RyTGVuIC8gMlxuICB9XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgYnl0ZSA9IHBhcnNlSW50KHN0cmluZy5zdWJzdHIoaSAqIDIsIDIpLCAxNilcbiAgICBpZiAoaXNOYU4oYnl0ZSkpIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBoZXggc3RyaW5nJylcbiAgICBidWZbb2Zmc2V0ICsgaV0gPSBieXRlXG4gIH1cbiAgcmV0dXJuIGlcbn1cblxuZnVuY3Rpb24gdXRmOFdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgdmFyIGNoYXJzV3JpdHRlbiA9IGJsaXRCdWZmZXIodXRmOFRvQnl0ZXMoc3RyaW5nKSwgYnVmLCBvZmZzZXQsIGxlbmd0aClcbiAgcmV0dXJuIGNoYXJzV3JpdHRlblxufVxuXG5mdW5jdGlvbiBhc2NpaVdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgdmFyIGNoYXJzV3JpdHRlbiA9IGJsaXRCdWZmZXIoYXNjaWlUb0J5dGVzKHN0cmluZyksIGJ1Ziwgb2Zmc2V0LCBsZW5ndGgpXG4gIHJldHVybiBjaGFyc1dyaXR0ZW5cbn1cblxuZnVuY3Rpb24gYmluYXJ5V3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gYXNjaWlXcml0ZShidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG59XG5cbmZ1bmN0aW9uIGJhc2U2NFdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgdmFyIGNoYXJzV3JpdHRlbiA9IGJsaXRCdWZmZXIoYmFzZTY0VG9CeXRlcyhzdHJpbmcpLCBidWYsIG9mZnNldCwgbGVuZ3RoKVxuICByZXR1cm4gY2hhcnNXcml0dGVuXG59XG5cbmZ1bmN0aW9uIHV0ZjE2bGVXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHZhciBjaGFyc1dyaXR0ZW4gPSBibGl0QnVmZmVyKHV0ZjE2bGVUb0J5dGVzKHN0cmluZyksIGJ1Ziwgb2Zmc2V0LCBsZW5ndGgsIDIpXG4gIHJldHVybiBjaGFyc1dyaXR0ZW5cbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZSA9IGZ1bmN0aW9uIChzdHJpbmcsIG9mZnNldCwgbGVuZ3RoLCBlbmNvZGluZykge1xuICAvLyBTdXBwb3J0IGJvdGggKHN0cmluZywgb2Zmc2V0LCBsZW5ndGgsIGVuY29kaW5nKVxuICAvLyBhbmQgdGhlIGxlZ2FjeSAoc3RyaW5nLCBlbmNvZGluZywgb2Zmc2V0LCBsZW5ndGgpXG4gIGlmIChpc0Zpbml0ZShvZmZzZXQpKSB7XG4gICAgaWYgKCFpc0Zpbml0ZShsZW5ndGgpKSB7XG4gICAgICBlbmNvZGluZyA9IGxlbmd0aFxuICAgICAgbGVuZ3RoID0gdW5kZWZpbmVkXG4gICAgfVxuICB9IGVsc2UgeyAgLy8gbGVnYWN5XG4gICAgdmFyIHN3YXAgPSBlbmNvZGluZ1xuICAgIGVuY29kaW5nID0gb2Zmc2V0XG4gICAgb2Zmc2V0ID0gbGVuZ3RoXG4gICAgbGVuZ3RoID0gc3dhcFxuICB9XG5cbiAgb2Zmc2V0ID0gTnVtYmVyKG9mZnNldCkgfHwgMFxuICB2YXIgcmVtYWluaW5nID0gdGhpcy5sZW5ndGggLSBvZmZzZXRcbiAgaWYgKCFsZW5ndGgpIHtcbiAgICBsZW5ndGggPSByZW1haW5pbmdcbiAgfSBlbHNlIHtcbiAgICBsZW5ndGggPSBOdW1iZXIobGVuZ3RoKVxuICAgIGlmIChsZW5ndGggPiByZW1haW5pbmcpIHtcbiAgICAgIGxlbmd0aCA9IHJlbWFpbmluZ1xuICAgIH1cbiAgfVxuICBlbmNvZGluZyA9IFN0cmluZyhlbmNvZGluZyB8fCAndXRmOCcpLnRvTG93ZXJDYXNlKClcblxuICB2YXIgcmV0XG4gIHN3aXRjaCAoZW5jb2RpbmcpIHtcbiAgICBjYXNlICdoZXgnOlxuICAgICAgcmV0ID0gaGV4V3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAndXRmOCc6XG4gICAgY2FzZSAndXRmLTgnOlxuICAgICAgcmV0ID0gdXRmOFdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ2FzY2lpJzpcbiAgICAgIHJldCA9IGFzY2lpV3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnYmluYXJ5JzpcbiAgICAgIHJldCA9IGJpbmFyeVdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ2Jhc2U2NCc6XG4gICAgICByZXQgPSBiYXNlNjRXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICd1Y3MyJzpcbiAgICBjYXNlICd1Y3MtMic6XG4gICAgY2FzZSAndXRmMTZsZSc6XG4gICAgY2FzZSAndXRmLTE2bGUnOlxuICAgICAgcmV0ID0gdXRmMTZsZVdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG4gICAgICBicmVha1xuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdVbmtub3duIGVuY29kaW5nOiAnICsgZW5jb2RpbmcpXG4gIH1cbiAgcmV0dXJuIHJldFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnRvSlNPTiA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiAnQnVmZmVyJyxcbiAgICBkYXRhOiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCh0aGlzLl9hcnIgfHwgdGhpcywgMClcbiAgfVxufVxuXG5mdW5jdGlvbiBiYXNlNjRTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIGlmIChzdGFydCA9PT0gMCAmJiBlbmQgPT09IGJ1Zi5sZW5ndGgpIHtcbiAgICByZXR1cm4gYmFzZTY0LmZyb21CeXRlQXJyYXkoYnVmKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBiYXNlNjQuZnJvbUJ5dGVBcnJheShidWYuc2xpY2Uoc3RhcnQsIGVuZCkpXG4gIH1cbn1cblxuZnVuY3Rpb24gdXRmOFNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIHJlcyA9ICcnXG4gIHZhciB0bXAgPSAnJ1xuICBlbmQgPSBNYXRoLm1pbihidWYubGVuZ3RoLCBlbmQpXG5cbiAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyBpKyspIHtcbiAgICBpZiAoYnVmW2ldIDw9IDB4N0YpIHtcbiAgICAgIHJlcyArPSBkZWNvZGVVdGY4Q2hhcih0bXApICsgU3RyaW5nLmZyb21DaGFyQ29kZShidWZbaV0pXG4gICAgICB0bXAgPSAnJ1xuICAgIH0gZWxzZSB7XG4gICAgICB0bXAgKz0gJyUnICsgYnVmW2ldLnRvU3RyaW5nKDE2KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXMgKyBkZWNvZGVVdGY4Q2hhcih0bXApXG59XG5cbmZ1bmN0aW9uIGFzY2lpU2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICB2YXIgcmV0ID0gJydcbiAgZW5kID0gTWF0aC5taW4oYnVmLmxlbmd0aCwgZW5kKVxuXG4gIGZvciAodmFyIGkgPSBzdGFydDsgaSA8IGVuZDsgaSsrKSB7XG4gICAgcmV0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYnVmW2ldKVxuICB9XG4gIHJldHVybiByZXRcbn1cblxuZnVuY3Rpb24gYmluYXJ5U2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICByZXR1cm4gYXNjaWlTbGljZShidWYsIHN0YXJ0LCBlbmQpXG59XG5cbmZ1bmN0aW9uIGhleFNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGxlbiA9IGJ1Zi5sZW5ndGhcblxuICBpZiAoIXN0YXJ0IHx8IHN0YXJ0IDwgMCkgc3RhcnQgPSAwXG4gIGlmICghZW5kIHx8IGVuZCA8IDAgfHwgZW5kID4gbGVuKSBlbmQgPSBsZW5cblxuICB2YXIgb3V0ID0gJydcbiAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyBpKyspIHtcbiAgICBvdXQgKz0gdG9IZXgoYnVmW2ldKVxuICB9XG4gIHJldHVybiBvdXRcbn1cblxuZnVuY3Rpb24gdXRmMTZsZVNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGJ5dGVzID0gYnVmLnNsaWNlKHN0YXJ0LCBlbmQpXG4gIHZhciByZXMgPSAnJ1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGJ5dGVzLmxlbmd0aDsgaSArPSAyKSB7XG4gICAgcmVzICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYnl0ZXNbaV0gKyBieXRlc1tpICsgMV0gKiAyNTYpXG4gIH1cbiAgcmV0dXJuIHJlc1xufVxuXG5CdWZmZXIucHJvdG90eXBlLnNsaWNlID0gZnVuY3Rpb24gKHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGxlbiA9IHRoaXMubGVuZ3RoXG4gIHN0YXJ0ID0gfn5zdGFydFxuICBlbmQgPSBlbmQgPT09IHVuZGVmaW5lZCA/IGxlbiA6IH5+ZW5kXG5cbiAgaWYgKHN0YXJ0IDwgMCkge1xuICAgIHN0YXJ0ICs9IGxlbjtcbiAgICBpZiAoc3RhcnQgPCAwKVxuICAgICAgc3RhcnQgPSAwXG4gIH0gZWxzZSBpZiAoc3RhcnQgPiBsZW4pIHtcbiAgICBzdGFydCA9IGxlblxuICB9XG5cbiAgaWYgKGVuZCA8IDApIHtcbiAgICBlbmQgKz0gbGVuXG4gICAgaWYgKGVuZCA8IDApXG4gICAgICBlbmQgPSAwXG4gIH0gZWxzZSBpZiAoZW5kID4gbGVuKSB7XG4gICAgZW5kID0gbGVuXG4gIH1cblxuICBpZiAoZW5kIDwgc3RhcnQpXG4gICAgZW5kID0gc3RhcnRcblxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICByZXR1cm4gQnVmZmVyLl9hdWdtZW50KHRoaXMuc3ViYXJyYXkoc3RhcnQsIGVuZCkpXG4gIH0gZWxzZSB7XG4gICAgdmFyIHNsaWNlTGVuID0gZW5kIC0gc3RhcnRcbiAgICB2YXIgbmV3QnVmID0gbmV3IEJ1ZmZlcihzbGljZUxlbiwgdW5kZWZpbmVkLCB0cnVlKVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2xpY2VMZW47IGkrKykge1xuICAgICAgbmV3QnVmW2ldID0gdGhpc1tpICsgc3RhcnRdXG4gICAgfVxuICAgIHJldHVybiBuZXdCdWZcbiAgfVxufVxuXG4vKlxuICogTmVlZCB0byBtYWtlIHN1cmUgdGhhdCBidWZmZXIgaXNuJ3QgdHJ5aW5nIHRvIHdyaXRlIG91dCBvZiBib3VuZHMuXG4gKi9cbmZ1bmN0aW9uIGNoZWNrT2Zmc2V0IChvZmZzZXQsIGV4dCwgbGVuZ3RoKSB7XG4gIGlmICgob2Zmc2V0ICUgMSkgIT09IDAgfHwgb2Zmc2V0IDwgMClcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignb2Zmc2V0IGlzIG5vdCB1aW50JylcbiAgaWYgKG9mZnNldCArIGV4dCA+IGxlbmd0aClcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignVHJ5aW5nIHRvIGFjY2VzcyBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQ4ID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydClcbiAgICBjaGVja09mZnNldChvZmZzZXQsIDEsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gdGhpc1tvZmZzZXRdXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQxNkxFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydClcbiAgICBjaGVja09mZnNldChvZmZzZXQsIDIsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gdGhpc1tvZmZzZXRdIHwgKHRoaXNbb2Zmc2V0ICsgMV0gPDwgOClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDE2QkUgPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KVxuICAgIGNoZWNrT2Zmc2V0KG9mZnNldCwgMiwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiAodGhpc1tvZmZzZXRdIDw8IDgpIHwgdGhpc1tvZmZzZXQgKyAxXVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50MzJMRSA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpXG4gICAgY2hlY2tPZmZzZXQob2Zmc2V0LCA0LCB0aGlzLmxlbmd0aClcblxuICByZXR1cm4gKCh0aGlzW29mZnNldF0pIHxcbiAgICAgICh0aGlzW29mZnNldCArIDFdIDw8IDgpIHxcbiAgICAgICh0aGlzW29mZnNldCArIDJdIDw8IDE2KSkgK1xuICAgICAgKHRoaXNbb2Zmc2V0ICsgM10gKiAweDEwMDAwMDApXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQzMkJFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydClcbiAgICBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuXG4gIHJldHVybiAodGhpc1tvZmZzZXRdICogMHgxMDAwMDAwKSArXG4gICAgICAoKHRoaXNbb2Zmc2V0ICsgMV0gPDwgMTYpIHxcbiAgICAgICh0aGlzW29mZnNldCArIDJdIDw8IDgpIHxcbiAgICAgIHRoaXNbb2Zmc2V0ICsgM10pXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDggPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KVxuICAgIGNoZWNrT2Zmc2V0KG9mZnNldCwgMSwgdGhpcy5sZW5ndGgpXG4gIGlmICghKHRoaXNbb2Zmc2V0XSAmIDB4ODApKVxuICAgIHJldHVybiAodGhpc1tvZmZzZXRdKVxuICByZXR1cm4gKCgweGZmIC0gdGhpc1tvZmZzZXRdICsgMSkgKiAtMSlcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50MTZMRSA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpXG4gICAgY2hlY2tPZmZzZXQob2Zmc2V0LCAyLCB0aGlzLmxlbmd0aClcbiAgdmFyIHZhbCA9IHRoaXNbb2Zmc2V0XSB8ICh0aGlzW29mZnNldCArIDFdIDw8IDgpXG4gIHJldHVybiAodmFsICYgMHg4MDAwKSA/IHZhbCB8IDB4RkZGRjAwMDAgOiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50MTZCRSA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpXG4gICAgY2hlY2tPZmZzZXQob2Zmc2V0LCAyLCB0aGlzLmxlbmd0aClcbiAgdmFyIHZhbCA9IHRoaXNbb2Zmc2V0ICsgMV0gfCAodGhpc1tvZmZzZXRdIDw8IDgpXG4gIHJldHVybiAodmFsICYgMHg4MDAwKSA/IHZhbCB8IDB4RkZGRjAwMDAgOiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50MzJMRSA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpXG4gICAgY2hlY2tPZmZzZXQob2Zmc2V0LCA0LCB0aGlzLmxlbmd0aClcblxuICByZXR1cm4gKHRoaXNbb2Zmc2V0XSkgfFxuICAgICAgKHRoaXNbb2Zmc2V0ICsgMV0gPDwgOCkgfFxuICAgICAgKHRoaXNbb2Zmc2V0ICsgMl0gPDwgMTYpIHxcbiAgICAgICh0aGlzW29mZnNldCArIDNdIDw8IDI0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQzMkJFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydClcbiAgICBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuXG4gIHJldHVybiAodGhpc1tvZmZzZXRdIDw8IDI0KSB8XG4gICAgICAodGhpc1tvZmZzZXQgKyAxXSA8PCAxNikgfFxuICAgICAgKHRoaXNbb2Zmc2V0ICsgMl0gPDwgOCkgfFxuICAgICAgKHRoaXNbb2Zmc2V0ICsgM10pXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEZsb2F0TEUgPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KVxuICAgIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiBpZWVlNzU0LnJlYWQodGhpcywgb2Zmc2V0LCB0cnVlLCAyMywgNClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkRmxvYXRCRSA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpXG4gICAgY2hlY2tPZmZzZXQob2Zmc2V0LCA0LCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuIGllZWU3NTQucmVhZCh0aGlzLCBvZmZzZXQsIGZhbHNlLCAyMywgNClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkRG91YmxlTEUgPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KVxuICAgIGNoZWNrT2Zmc2V0KG9mZnNldCwgOCwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiBpZWVlNzU0LnJlYWQodGhpcywgb2Zmc2V0LCB0cnVlLCA1MiwgOClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkRG91YmxlQkUgPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KVxuICAgIGNoZWNrT2Zmc2V0KG9mZnNldCwgOCwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiBpZWVlNzU0LnJlYWQodGhpcywgb2Zmc2V0LCBmYWxzZSwgNTIsIDgpXG59XG5cbmZ1bmN0aW9uIGNoZWNrSW50IChidWYsIHZhbHVlLCBvZmZzZXQsIGV4dCwgbWF4LCBtaW4pIHtcbiAgaWYgKCFCdWZmZXIuaXNCdWZmZXIoYnVmKSkgdGhyb3cgbmV3IFR5cGVFcnJvcignYnVmZmVyIG11c3QgYmUgYSBCdWZmZXIgaW5zdGFuY2UnKVxuICBpZiAodmFsdWUgPiBtYXggfHwgdmFsdWUgPCBtaW4pIHRocm93IG5ldyBUeXBlRXJyb3IoJ3ZhbHVlIGlzIG91dCBvZiBib3VuZHMnKVxuICBpZiAob2Zmc2V0ICsgZXh0ID4gYnVmLmxlbmd0aCkgdGhyb3cgbmV3IFR5cGVFcnJvcignaW5kZXggb3V0IG9mIHJhbmdlJylcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQ4ID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KVxuICAgIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDEsIDB4ZmYsIDApXG4gIGlmICghQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHZhbHVlID0gTWF0aC5mbG9vcih2YWx1ZSlcbiAgdGhpc1tvZmZzZXRdID0gdmFsdWVcbiAgcmV0dXJuIG9mZnNldCArIDFcbn1cblxuZnVuY3Rpb24gb2JqZWN0V3JpdGVVSW50MTYgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuKSB7XG4gIGlmICh2YWx1ZSA8IDApIHZhbHVlID0gMHhmZmZmICsgdmFsdWUgKyAxXG4gIGZvciAodmFyIGkgPSAwLCBqID0gTWF0aC5taW4oYnVmLmxlbmd0aCAtIG9mZnNldCwgMik7IGkgPCBqOyBpKyspIHtcbiAgICBidWZbb2Zmc2V0ICsgaV0gPSAodmFsdWUgJiAoMHhmZiA8PCAoOCAqIChsaXR0bGVFbmRpYW4gPyBpIDogMSAtIGkpKSkpID4+PlxuICAgICAgKGxpdHRsZUVuZGlhbiA/IGkgOiAxIC0gaSkgKiA4XG4gIH1cbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQxNkxFID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KVxuICAgIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDIsIDB4ZmZmZiwgMClcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gdmFsdWVcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiA4KVxuICB9IGVsc2Ugb2JqZWN0V3JpdGVVSW50MTYodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSlcbiAgcmV0dXJuIG9mZnNldCArIDJcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQxNkJFID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KVxuICAgIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDIsIDB4ZmZmZiwgMClcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlID4+PiA4KVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSB2YWx1ZVxuICB9IGVsc2Ugb2JqZWN0V3JpdGVVSW50MTYodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UpXG4gIHJldHVybiBvZmZzZXQgKyAyXG59XG5cbmZ1bmN0aW9uIG9iamVjdFdyaXRlVUludDMyIChidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbikge1xuICBpZiAodmFsdWUgPCAwKSB2YWx1ZSA9IDB4ZmZmZmZmZmYgKyB2YWx1ZSArIDFcbiAgZm9yICh2YXIgaSA9IDAsIGogPSBNYXRoLm1pbihidWYubGVuZ3RoIC0gb2Zmc2V0LCA0KTsgaSA8IGo7IGkrKykge1xuICAgIGJ1ZltvZmZzZXQgKyBpXSA9ICh2YWx1ZSA+Pj4gKGxpdHRsZUVuZGlhbiA/IGkgOiAzIC0gaSkgKiA4KSAmIDB4ZmZcbiAgfVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDMyTEUgPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpXG4gICAgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgNCwgMHhmZmZmZmZmZiwgMClcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXQgKyAzXSA9ICh2YWx1ZSA+Pj4gMjQpXG4gICAgdGhpc1tvZmZzZXQgKyAyXSA9ICh2YWx1ZSA+Pj4gMTYpXG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gOClcbiAgICB0aGlzW29mZnNldF0gPSB2YWx1ZVxuICB9IGVsc2Ugb2JqZWN0V3JpdGVVSW50MzIodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSlcbiAgcmV0dXJuIG9mZnNldCArIDRcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQzMkJFID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KVxuICAgIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDQsIDB4ZmZmZmZmZmYsIDApXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSA+Pj4gMjQpXG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gMTYpXG4gICAgdGhpc1tvZmZzZXQgKyAyXSA9ICh2YWx1ZSA+Pj4gOClcbiAgICB0aGlzW29mZnNldCArIDNdID0gdmFsdWVcbiAgfSBlbHNlIG9iamVjdFdyaXRlVUludDMyKHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlKVxuICByZXR1cm4gb2Zmc2V0ICsgNFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50OCA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydClcbiAgICBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAxLCAweDdmLCAtMHg4MClcbiAgaWYgKCFCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkgdmFsdWUgPSBNYXRoLmZsb29yKHZhbHVlKVxuICBpZiAodmFsdWUgPCAwKSB2YWx1ZSA9IDB4ZmYgKyB2YWx1ZSArIDFcbiAgdGhpc1tvZmZzZXRdID0gdmFsdWVcbiAgcmV0dXJuIG9mZnNldCArIDFcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDE2TEUgPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpXG4gICAgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMiwgMHg3ZmZmLCAtMHg4MDAwKVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldF0gPSB2YWx1ZVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDgpXG4gIH0gZWxzZSBvYmplY3RXcml0ZVVJbnQxNih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlKVxuICByZXR1cm4gb2Zmc2V0ICsgMlxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50MTZCRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydClcbiAgICBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAyLCAweDdmZmYsIC0weDgwMDApXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSA+Pj4gOClcbiAgICB0aGlzW29mZnNldCArIDFdID0gdmFsdWVcbiAgfSBlbHNlIG9iamVjdFdyaXRlVUludDE2KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlKVxuICByZXR1cm4gb2Zmc2V0ICsgMlxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50MzJMRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydClcbiAgICBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCA0LCAweDdmZmZmZmZmLCAtMHg4MDAwMDAwMClcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gdmFsdWVcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiA4KVxuICAgIHRoaXNbb2Zmc2V0ICsgMl0gPSAodmFsdWUgPj4+IDE2KVxuICAgIHRoaXNbb2Zmc2V0ICsgM10gPSAodmFsdWUgPj4+IDI0KVxuICB9IGVsc2Ugb2JqZWN0V3JpdGVVSW50MzIodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSlcbiAgcmV0dXJuIG9mZnNldCArIDRcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDMyQkUgPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpXG4gICAgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgNCwgMHg3ZmZmZmZmZiwgLTB4ODAwMDAwMDApXG4gIGlmICh2YWx1ZSA8IDApIHZhbHVlID0gMHhmZmZmZmZmZiArIHZhbHVlICsgMVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldF0gPSAodmFsdWUgPj4+IDI0KVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDE2KVxuICAgIHRoaXNbb2Zmc2V0ICsgMl0gPSAodmFsdWUgPj4+IDgpXG4gICAgdGhpc1tvZmZzZXQgKyAzXSA9IHZhbHVlXG4gIH0gZWxzZSBvYmplY3RXcml0ZVVJbnQzMih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSlcbiAgcmV0dXJuIG9mZnNldCArIDRcbn1cblxuZnVuY3Rpb24gY2hlY2tJRUVFNzU0IChidWYsIHZhbHVlLCBvZmZzZXQsIGV4dCwgbWF4LCBtaW4pIHtcbiAgaWYgKHZhbHVlID4gbWF4IHx8IHZhbHVlIDwgbWluKSB0aHJvdyBuZXcgVHlwZUVycm9yKCd2YWx1ZSBpcyBvdXQgb2YgYm91bmRzJylcbiAgaWYgKG9mZnNldCArIGV4dCA+IGJ1Zi5sZW5ndGgpIHRocm93IG5ldyBUeXBlRXJyb3IoJ2luZGV4IG91dCBvZiByYW5nZScpXG59XG5cbmZ1bmN0aW9uIHdyaXRlRmxvYXQgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KVxuICAgIGNoZWNrSUVFRTc1NChidWYsIHZhbHVlLCBvZmZzZXQsIDQsIDMuNDAyODIzNDY2Mzg1Mjg4NmUrMzgsIC0zLjQwMjgyMzQ2NjM4NTI4ODZlKzM4KVxuICBpZWVlNzU0LndyaXRlKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCAyMywgNClcbiAgcmV0dXJuIG9mZnNldCArIDRcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUZsb2F0TEUgPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIHdyaXRlRmxvYXQodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVGbG9hdEJFID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiB3cml0ZUZsb2F0KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlLCBub0Fzc2VydClcbn1cblxuZnVuY3Rpb24gd3JpdGVEb3VibGUgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KVxuICAgIGNoZWNrSUVFRTc1NChidWYsIHZhbHVlLCBvZmZzZXQsIDgsIDEuNzk3NjkzMTM0ODYyMzE1N0UrMzA4LCAtMS43OTc2OTMxMzQ4NjIzMTU3RSszMDgpXG4gIGllZWU3NTQud3JpdGUoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIDUyLCA4KVxuICByZXR1cm4gb2Zmc2V0ICsgOFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlRG91YmxlTEUgPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIHdyaXRlRG91YmxlKHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlRG91YmxlQkUgPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIHdyaXRlRG91YmxlKHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlLCBub0Fzc2VydClcbn1cblxuLy8gY29weSh0YXJnZXRCdWZmZXIsIHRhcmdldFN0YXJ0PTAsIHNvdXJjZVN0YXJ0PTAsIHNvdXJjZUVuZD1idWZmZXIubGVuZ3RoKVxuQnVmZmVyLnByb3RvdHlwZS5jb3B5ID0gZnVuY3Rpb24gKHRhcmdldCwgdGFyZ2V0X3N0YXJ0LCBzdGFydCwgZW5kKSB7XG4gIHZhciBzb3VyY2UgPSB0aGlzXG5cbiAgaWYgKCFzdGFydCkgc3RhcnQgPSAwXG4gIGlmICghZW5kICYmIGVuZCAhPT0gMCkgZW5kID0gdGhpcy5sZW5ndGhcbiAgaWYgKCF0YXJnZXRfc3RhcnQpIHRhcmdldF9zdGFydCA9IDBcblxuICAvLyBDb3B5IDAgYnl0ZXM7IHdlJ3JlIGRvbmVcbiAgaWYgKGVuZCA9PT0gc3RhcnQpIHJldHVyblxuICBpZiAodGFyZ2V0Lmxlbmd0aCA9PT0gMCB8fCBzb3VyY2UubGVuZ3RoID09PSAwKSByZXR1cm5cblxuICAvLyBGYXRhbCBlcnJvciBjb25kaXRpb25zXG4gIGlmIChlbmQgPCBzdGFydCkgdGhyb3cgbmV3IFR5cGVFcnJvcignc291cmNlRW5kIDwgc291cmNlU3RhcnQnKVxuICBpZiAodGFyZ2V0X3N0YXJ0IDwgMCB8fCB0YXJnZXRfc3RhcnQgPj0gdGFyZ2V0Lmxlbmd0aClcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCd0YXJnZXRTdGFydCBvdXQgb2YgYm91bmRzJylcbiAgaWYgKHN0YXJ0IDwgMCB8fCBzdGFydCA+PSBzb3VyY2UubGVuZ3RoKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdzb3VyY2VTdGFydCBvdXQgb2YgYm91bmRzJylcbiAgaWYgKGVuZCA8IDAgfHwgZW5kID4gc291cmNlLmxlbmd0aCkgdGhyb3cgbmV3IFR5cGVFcnJvcignc291cmNlRW5kIG91dCBvZiBib3VuZHMnKVxuXG4gIC8vIEFyZSB3ZSBvb2I/XG4gIGlmIChlbmQgPiB0aGlzLmxlbmd0aClcbiAgICBlbmQgPSB0aGlzLmxlbmd0aFxuICBpZiAodGFyZ2V0Lmxlbmd0aCAtIHRhcmdldF9zdGFydCA8IGVuZCAtIHN0YXJ0KVxuICAgIGVuZCA9IHRhcmdldC5sZW5ndGggLSB0YXJnZXRfc3RhcnQgKyBzdGFydFxuXG4gIHZhciBsZW4gPSBlbmQgLSBzdGFydFxuXG4gIGlmIChsZW4gPCAxMDAwIHx8ICFCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIHRhcmdldFtpICsgdGFyZ2V0X3N0YXJ0XSA9IHRoaXNbaSArIHN0YXJ0XVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB0YXJnZXQuX3NldCh0aGlzLnN1YmFycmF5KHN0YXJ0LCBzdGFydCArIGxlbiksIHRhcmdldF9zdGFydClcbiAgfVxufVxuXG4vLyBmaWxsKHZhbHVlLCBzdGFydD0wLCBlbmQ9YnVmZmVyLmxlbmd0aClcbkJ1ZmZlci5wcm90b3R5cGUuZmlsbCA9IGZ1bmN0aW9uICh2YWx1ZSwgc3RhcnQsIGVuZCkge1xuICBpZiAoIXZhbHVlKSB2YWx1ZSA9IDBcbiAgaWYgKCFzdGFydCkgc3RhcnQgPSAwXG4gIGlmICghZW5kKSBlbmQgPSB0aGlzLmxlbmd0aFxuXG4gIGlmIChlbmQgPCBzdGFydCkgdGhyb3cgbmV3IFR5cGVFcnJvcignZW5kIDwgc3RhcnQnKVxuXG4gIC8vIEZpbGwgMCBieXRlczsgd2UncmUgZG9uZVxuICBpZiAoZW5kID09PSBzdGFydCkgcmV0dXJuXG4gIGlmICh0aGlzLmxlbmd0aCA9PT0gMCkgcmV0dXJuXG5cbiAgaWYgKHN0YXJ0IDwgMCB8fCBzdGFydCA+PSB0aGlzLmxlbmd0aCkgdGhyb3cgbmV3IFR5cGVFcnJvcignc3RhcnQgb3V0IG9mIGJvdW5kcycpXG4gIGlmIChlbmQgPCAwIHx8IGVuZCA+IHRoaXMubGVuZ3RoKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdlbmQgb3V0IG9mIGJvdW5kcycpXG5cbiAgdmFyIGlcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICBmb3IgKGkgPSBzdGFydDsgaSA8IGVuZDsgaSsrKSB7XG4gICAgICB0aGlzW2ldID0gdmFsdWVcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdmFyIGJ5dGVzID0gdXRmOFRvQnl0ZXModmFsdWUudG9TdHJpbmcoKSlcbiAgICB2YXIgbGVuID0gYnl0ZXMubGVuZ3RoXG4gICAgZm9yIChpID0gc3RhcnQ7IGkgPCBlbmQ7IGkrKykge1xuICAgICAgdGhpc1tpXSA9IGJ5dGVzW2kgJSBsZW5dXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRoaXNcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IGBBcnJheUJ1ZmZlcmAgd2l0aCB0aGUgKmNvcGllZCogbWVtb3J5IG9mIHRoZSBidWZmZXIgaW5zdGFuY2UuXG4gKiBBZGRlZCBpbiBOb2RlIDAuMTIuIE9ubHkgYXZhaWxhYmxlIGluIGJyb3dzZXJzIHRoYXQgc3VwcG9ydCBBcnJheUJ1ZmZlci5cbiAqL1xuQnVmZmVyLnByb3RvdHlwZS50b0FycmF5QnVmZmVyID0gZnVuY3Rpb24gKCkge1xuICBpZiAodHlwZW9mIFVpbnQ4QXJyYXkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgICByZXR1cm4gKG5ldyBCdWZmZXIodGhpcykpLmJ1ZmZlclxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgYnVmID0gbmV3IFVpbnQ4QXJyYXkodGhpcy5sZW5ndGgpXG4gICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gYnVmLmxlbmd0aDsgaSA8IGxlbjsgaSArPSAxKSB7XG4gICAgICAgIGJ1ZltpXSA9IHRoaXNbaV1cbiAgICAgIH1cbiAgICAgIHJldHVybiBidWYuYnVmZmVyXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0J1ZmZlci50b0FycmF5QnVmZmVyIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyJylcbiAgfVxufVxuXG4vLyBIRUxQRVIgRlVOQ1RJT05TXG4vLyA9PT09PT09PT09PT09PT09XG5cbnZhciBCUCA9IEJ1ZmZlci5wcm90b3R5cGVcblxuLyoqXG4gKiBBdWdtZW50IGEgVWludDhBcnJheSAqaW5zdGFuY2UqIChub3QgdGhlIFVpbnQ4QXJyYXkgY2xhc3MhKSB3aXRoIEJ1ZmZlciBtZXRob2RzXG4gKi9cbkJ1ZmZlci5fYXVnbWVudCA9IGZ1bmN0aW9uIChhcnIpIHtcbiAgYXJyLmNvbnN0cnVjdG9yID0gQnVmZmVyXG4gIGFyci5faXNCdWZmZXIgPSB0cnVlXG5cbiAgLy8gc2F2ZSByZWZlcmVuY2UgdG8gb3JpZ2luYWwgVWludDhBcnJheSBnZXQvc2V0IG1ldGhvZHMgYmVmb3JlIG92ZXJ3cml0aW5nXG4gIGFyci5fZ2V0ID0gYXJyLmdldFxuICBhcnIuX3NldCA9IGFyci5zZXRcblxuICAvLyBkZXByZWNhdGVkLCB3aWxsIGJlIHJlbW92ZWQgaW4gbm9kZSAwLjEzK1xuICBhcnIuZ2V0ID0gQlAuZ2V0XG4gIGFyci5zZXQgPSBCUC5zZXRcblxuICBhcnIud3JpdGUgPSBCUC53cml0ZVxuICBhcnIudG9TdHJpbmcgPSBCUC50b1N0cmluZ1xuICBhcnIudG9Mb2NhbGVTdHJpbmcgPSBCUC50b1N0cmluZ1xuICBhcnIudG9KU09OID0gQlAudG9KU09OXG4gIGFyci5lcXVhbHMgPSBCUC5lcXVhbHNcbiAgYXJyLmNvbXBhcmUgPSBCUC5jb21wYXJlXG4gIGFyci5jb3B5ID0gQlAuY29weVxuICBhcnIuc2xpY2UgPSBCUC5zbGljZVxuICBhcnIucmVhZFVJbnQ4ID0gQlAucmVhZFVJbnQ4XG4gIGFyci5yZWFkVUludDE2TEUgPSBCUC5yZWFkVUludDE2TEVcbiAgYXJyLnJlYWRVSW50MTZCRSA9IEJQLnJlYWRVSW50MTZCRVxuICBhcnIucmVhZFVJbnQzMkxFID0gQlAucmVhZFVJbnQzMkxFXG4gIGFyci5yZWFkVUludDMyQkUgPSBCUC5yZWFkVUludDMyQkVcbiAgYXJyLnJlYWRJbnQ4ID0gQlAucmVhZEludDhcbiAgYXJyLnJlYWRJbnQxNkxFID0gQlAucmVhZEludDE2TEVcbiAgYXJyLnJlYWRJbnQxNkJFID0gQlAucmVhZEludDE2QkVcbiAgYXJyLnJlYWRJbnQzMkxFID0gQlAucmVhZEludDMyTEVcbiAgYXJyLnJlYWRJbnQzMkJFID0gQlAucmVhZEludDMyQkVcbiAgYXJyLnJlYWRGbG9hdExFID0gQlAucmVhZEZsb2F0TEVcbiAgYXJyLnJlYWRGbG9hdEJFID0gQlAucmVhZEZsb2F0QkVcbiAgYXJyLnJlYWREb3VibGVMRSA9IEJQLnJlYWREb3VibGVMRVxuICBhcnIucmVhZERvdWJsZUJFID0gQlAucmVhZERvdWJsZUJFXG4gIGFyci53cml0ZVVJbnQ4ID0gQlAud3JpdGVVSW50OFxuICBhcnIud3JpdGVVSW50MTZMRSA9IEJQLndyaXRlVUludDE2TEVcbiAgYXJyLndyaXRlVUludDE2QkUgPSBCUC53cml0ZVVJbnQxNkJFXG4gIGFyci53cml0ZVVJbnQzMkxFID0gQlAud3JpdGVVSW50MzJMRVxuICBhcnIud3JpdGVVSW50MzJCRSA9IEJQLndyaXRlVUludDMyQkVcbiAgYXJyLndyaXRlSW50OCA9IEJQLndyaXRlSW50OFxuICBhcnIud3JpdGVJbnQxNkxFID0gQlAud3JpdGVJbnQxNkxFXG4gIGFyci53cml0ZUludDE2QkUgPSBCUC53cml0ZUludDE2QkVcbiAgYXJyLndyaXRlSW50MzJMRSA9IEJQLndyaXRlSW50MzJMRVxuICBhcnIud3JpdGVJbnQzMkJFID0gQlAud3JpdGVJbnQzMkJFXG4gIGFyci53cml0ZUZsb2F0TEUgPSBCUC53cml0ZUZsb2F0TEVcbiAgYXJyLndyaXRlRmxvYXRCRSA9IEJQLndyaXRlRmxvYXRCRVxuICBhcnIud3JpdGVEb3VibGVMRSA9IEJQLndyaXRlRG91YmxlTEVcbiAgYXJyLndyaXRlRG91YmxlQkUgPSBCUC53cml0ZURvdWJsZUJFXG4gIGFyci5maWxsID0gQlAuZmlsbFxuICBhcnIuaW5zcGVjdCA9IEJQLmluc3BlY3RcbiAgYXJyLnRvQXJyYXlCdWZmZXIgPSBCUC50b0FycmF5QnVmZmVyXG5cbiAgcmV0dXJuIGFyclxufVxuXG52YXIgSU5WQUxJRF9CQVNFNjRfUkUgPSAvW14rXFwvMC05QS16XS9nXG5cbmZ1bmN0aW9uIGJhc2U2NGNsZWFuIChzdHIpIHtcbiAgLy8gTm9kZSBzdHJpcHMgb3V0IGludmFsaWQgY2hhcmFjdGVycyBsaWtlIFxcbiBhbmQgXFx0IGZyb20gdGhlIHN0cmluZywgYmFzZTY0LWpzIGRvZXMgbm90XG4gIHN0ciA9IHN0cmluZ3RyaW0oc3RyKS5yZXBsYWNlKElOVkFMSURfQkFTRTY0X1JFLCAnJylcbiAgLy8gTm9kZSBhbGxvd3MgZm9yIG5vbi1wYWRkZWQgYmFzZTY0IHN0cmluZ3MgKG1pc3NpbmcgdHJhaWxpbmcgPT09KSwgYmFzZTY0LWpzIGRvZXMgbm90XG4gIHdoaWxlIChzdHIubGVuZ3RoICUgNCAhPT0gMCkge1xuICAgIHN0ciA9IHN0ciArICc9J1xuICB9XG4gIHJldHVybiBzdHJcbn1cblxuZnVuY3Rpb24gc3RyaW5ndHJpbSAoc3RyKSB7XG4gIGlmIChzdHIudHJpbSkgcmV0dXJuIHN0ci50cmltKClcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nLCAnJylcbn1cblxuZnVuY3Rpb24gaXNBcnJheWlzaCAoc3ViamVjdCkge1xuICByZXR1cm4gaXNBcnJheShzdWJqZWN0KSB8fCBCdWZmZXIuaXNCdWZmZXIoc3ViamVjdCkgfHxcbiAgICAgIHN1YmplY3QgJiYgdHlwZW9mIHN1YmplY3QgPT09ICdvYmplY3QnICYmXG4gICAgICB0eXBlb2Ygc3ViamVjdC5sZW5ndGggPT09ICdudW1iZXInXG59XG5cbmZ1bmN0aW9uIHRvSGV4IChuKSB7XG4gIGlmIChuIDwgMTYpIHJldHVybiAnMCcgKyBuLnRvU3RyaW5nKDE2KVxuICByZXR1cm4gbi50b1N0cmluZygxNilcbn1cblxuZnVuY3Rpb24gdXRmOFRvQnl0ZXMgKHN0cikge1xuICB2YXIgYnl0ZUFycmF5ID0gW11cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgYiA9IHN0ci5jaGFyQ29kZUF0KGkpXG4gICAgaWYgKGIgPD0gMHg3Rikge1xuICAgICAgYnl0ZUFycmF5LnB1c2goYilcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHN0YXJ0ID0gaVxuICAgICAgaWYgKGIgPj0gMHhEODAwICYmIGIgPD0gMHhERkZGKSBpKytcbiAgICAgIHZhciBoID0gZW5jb2RlVVJJQ29tcG9uZW50KHN0ci5zbGljZShzdGFydCwgaSsxKSkuc3Vic3RyKDEpLnNwbGl0KCclJylcbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgaC5sZW5ndGg7IGorKykge1xuICAgICAgICBieXRlQXJyYXkucHVzaChwYXJzZUludChoW2pdLCAxNikpXG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBieXRlQXJyYXlcbn1cblxuZnVuY3Rpb24gYXNjaWlUb0J5dGVzIChzdHIpIHtcbiAgdmFyIGJ5dGVBcnJheSA9IFtdXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XG4gICAgLy8gTm9kZSdzIGNvZGUgc2VlbXMgdG8gYmUgZG9pbmcgdGhpcyBhbmQgbm90ICYgMHg3Ri4uXG4gICAgYnl0ZUFycmF5LnB1c2goc3RyLmNoYXJDb2RlQXQoaSkgJiAweEZGKVxuICB9XG4gIHJldHVybiBieXRlQXJyYXlcbn1cblxuZnVuY3Rpb24gdXRmMTZsZVRvQnl0ZXMgKHN0cikge1xuICB2YXIgYywgaGksIGxvXG4gIHZhciBieXRlQXJyYXkgPSBbXVxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xuICAgIGMgPSBzdHIuY2hhckNvZGVBdChpKVxuICAgIGhpID0gYyA+PiA4XG4gICAgbG8gPSBjICUgMjU2XG4gICAgYnl0ZUFycmF5LnB1c2gobG8pXG4gICAgYnl0ZUFycmF5LnB1c2goaGkpXG4gIH1cblxuICByZXR1cm4gYnl0ZUFycmF5XG59XG5cbmZ1bmN0aW9uIGJhc2U2NFRvQnl0ZXMgKHN0cikge1xuICByZXR1cm4gYmFzZTY0LnRvQnl0ZUFycmF5KHN0cilcbn1cblxuZnVuY3Rpb24gYmxpdEJ1ZmZlciAoc3JjLCBkc3QsIG9mZnNldCwgbGVuZ3RoLCB1bml0U2l6ZSkge1xuICBpZiAodW5pdFNpemUpIGxlbmd0aCAtPSBsZW5ndGggJSB1bml0U2l6ZTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIGlmICgoaSArIG9mZnNldCA+PSBkc3QubGVuZ3RoKSB8fCAoaSA+PSBzcmMubGVuZ3RoKSlcbiAgICAgIGJyZWFrXG4gICAgZHN0W2kgKyBvZmZzZXRdID0gc3JjW2ldXG4gIH1cbiAgcmV0dXJuIGlcbn1cblxuZnVuY3Rpb24gZGVjb2RlVXRmOENoYXIgKHN0cikge1xuICB0cnkge1xuICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoc3RyKVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZSgweEZGRkQpIC8vIFVURiA4IGludmFsaWQgY2hhclxuICB9XG59XG4iLCJ2YXIgbG9va3VwID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky8nO1xuXG47KGZ1bmN0aW9uIChleHBvcnRzKSB7XG5cdCd1c2Ugc3RyaWN0JztcblxuICB2YXIgQXJyID0gKHR5cGVvZiBVaW50OEFycmF5ICE9PSAndW5kZWZpbmVkJylcbiAgICA/IFVpbnQ4QXJyYXlcbiAgICA6IEFycmF5XG5cblx0dmFyIFBMVVMgICA9ICcrJy5jaGFyQ29kZUF0KDApXG5cdHZhciBTTEFTSCAgPSAnLycuY2hhckNvZGVBdCgwKVxuXHR2YXIgTlVNQkVSID0gJzAnLmNoYXJDb2RlQXQoMClcblx0dmFyIExPV0VSICA9ICdhJy5jaGFyQ29kZUF0KDApXG5cdHZhciBVUFBFUiAgPSAnQScuY2hhckNvZGVBdCgwKVxuXG5cdGZ1bmN0aW9uIGRlY29kZSAoZWx0KSB7XG5cdFx0dmFyIGNvZGUgPSBlbHQuY2hhckNvZGVBdCgwKVxuXHRcdGlmIChjb2RlID09PSBQTFVTKVxuXHRcdFx0cmV0dXJuIDYyIC8vICcrJ1xuXHRcdGlmIChjb2RlID09PSBTTEFTSClcblx0XHRcdHJldHVybiA2MyAvLyAnLydcblx0XHRpZiAoY29kZSA8IE5VTUJFUilcblx0XHRcdHJldHVybiAtMSAvL25vIG1hdGNoXG5cdFx0aWYgKGNvZGUgPCBOVU1CRVIgKyAxMClcblx0XHRcdHJldHVybiBjb2RlIC0gTlVNQkVSICsgMjYgKyAyNlxuXHRcdGlmIChjb2RlIDwgVVBQRVIgKyAyNilcblx0XHRcdHJldHVybiBjb2RlIC0gVVBQRVJcblx0XHRpZiAoY29kZSA8IExPV0VSICsgMjYpXG5cdFx0XHRyZXR1cm4gY29kZSAtIExPV0VSICsgMjZcblx0fVxuXG5cdGZ1bmN0aW9uIGI2NFRvQnl0ZUFycmF5IChiNjQpIHtcblx0XHR2YXIgaSwgaiwgbCwgdG1wLCBwbGFjZUhvbGRlcnMsIGFyclxuXG5cdFx0aWYgKGI2NC5sZW5ndGggJSA0ID4gMCkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHN0cmluZy4gTGVuZ3RoIG11c3QgYmUgYSBtdWx0aXBsZSBvZiA0Jylcblx0XHR9XG5cblx0XHQvLyB0aGUgbnVtYmVyIG9mIGVxdWFsIHNpZ25zIChwbGFjZSBob2xkZXJzKVxuXHRcdC8vIGlmIHRoZXJlIGFyZSB0d28gcGxhY2Vob2xkZXJzLCB0aGFuIHRoZSB0d28gY2hhcmFjdGVycyBiZWZvcmUgaXRcblx0XHQvLyByZXByZXNlbnQgb25lIGJ5dGVcblx0XHQvLyBpZiB0aGVyZSBpcyBvbmx5IG9uZSwgdGhlbiB0aGUgdGhyZWUgY2hhcmFjdGVycyBiZWZvcmUgaXQgcmVwcmVzZW50IDIgYnl0ZXNcblx0XHQvLyB0aGlzIGlzIGp1c3QgYSBjaGVhcCBoYWNrIHRvIG5vdCBkbyBpbmRleE9mIHR3aWNlXG5cdFx0dmFyIGxlbiA9IGI2NC5sZW5ndGhcblx0XHRwbGFjZUhvbGRlcnMgPSAnPScgPT09IGI2NC5jaGFyQXQobGVuIC0gMikgPyAyIDogJz0nID09PSBiNjQuY2hhckF0KGxlbiAtIDEpID8gMSA6IDBcblxuXHRcdC8vIGJhc2U2NCBpcyA0LzMgKyB1cCB0byB0d28gY2hhcmFjdGVycyBvZiB0aGUgb3JpZ2luYWwgZGF0YVxuXHRcdGFyciA9IG5ldyBBcnIoYjY0Lmxlbmd0aCAqIDMgLyA0IC0gcGxhY2VIb2xkZXJzKVxuXG5cdFx0Ly8gaWYgdGhlcmUgYXJlIHBsYWNlaG9sZGVycywgb25seSBnZXQgdXAgdG8gdGhlIGxhc3QgY29tcGxldGUgNCBjaGFyc1xuXHRcdGwgPSBwbGFjZUhvbGRlcnMgPiAwID8gYjY0Lmxlbmd0aCAtIDQgOiBiNjQubGVuZ3RoXG5cblx0XHR2YXIgTCA9IDBcblxuXHRcdGZ1bmN0aW9uIHB1c2ggKHYpIHtcblx0XHRcdGFycltMKytdID0gdlxuXHRcdH1cblxuXHRcdGZvciAoaSA9IDAsIGogPSAwOyBpIDwgbDsgaSArPSA0LCBqICs9IDMpIHtcblx0XHRcdHRtcCA9IChkZWNvZGUoYjY0LmNoYXJBdChpKSkgPDwgMTgpIHwgKGRlY29kZShiNjQuY2hhckF0KGkgKyAxKSkgPDwgMTIpIHwgKGRlY29kZShiNjQuY2hhckF0KGkgKyAyKSkgPDwgNikgfCBkZWNvZGUoYjY0LmNoYXJBdChpICsgMykpXG5cdFx0XHRwdXNoKCh0bXAgJiAweEZGMDAwMCkgPj4gMTYpXG5cdFx0XHRwdXNoKCh0bXAgJiAweEZGMDApID4+IDgpXG5cdFx0XHRwdXNoKHRtcCAmIDB4RkYpXG5cdFx0fVxuXG5cdFx0aWYgKHBsYWNlSG9sZGVycyA9PT0gMikge1xuXHRcdFx0dG1wID0gKGRlY29kZShiNjQuY2hhckF0KGkpKSA8PCAyKSB8IChkZWNvZGUoYjY0LmNoYXJBdChpICsgMSkpID4+IDQpXG5cdFx0XHRwdXNoKHRtcCAmIDB4RkYpXG5cdFx0fSBlbHNlIGlmIChwbGFjZUhvbGRlcnMgPT09IDEpIHtcblx0XHRcdHRtcCA9IChkZWNvZGUoYjY0LmNoYXJBdChpKSkgPDwgMTApIHwgKGRlY29kZShiNjQuY2hhckF0KGkgKyAxKSkgPDwgNCkgfCAoZGVjb2RlKGI2NC5jaGFyQXQoaSArIDIpKSA+PiAyKVxuXHRcdFx0cHVzaCgodG1wID4+IDgpICYgMHhGRilcblx0XHRcdHB1c2godG1wICYgMHhGRilcblx0XHR9XG5cblx0XHRyZXR1cm4gYXJyXG5cdH1cblxuXHRmdW5jdGlvbiB1aW50OFRvQmFzZTY0ICh1aW50OCkge1xuXHRcdHZhciBpLFxuXHRcdFx0ZXh0cmFCeXRlcyA9IHVpbnQ4Lmxlbmd0aCAlIDMsIC8vIGlmIHdlIGhhdmUgMSBieXRlIGxlZnQsIHBhZCAyIGJ5dGVzXG5cdFx0XHRvdXRwdXQgPSBcIlwiLFxuXHRcdFx0dGVtcCwgbGVuZ3RoXG5cblx0XHRmdW5jdGlvbiBlbmNvZGUgKG51bSkge1xuXHRcdFx0cmV0dXJuIGxvb2t1cC5jaGFyQXQobnVtKVxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIHRyaXBsZXRUb0Jhc2U2NCAobnVtKSB7XG5cdFx0XHRyZXR1cm4gZW5jb2RlKG51bSA+PiAxOCAmIDB4M0YpICsgZW5jb2RlKG51bSA+PiAxMiAmIDB4M0YpICsgZW5jb2RlKG51bSA+PiA2ICYgMHgzRikgKyBlbmNvZGUobnVtICYgMHgzRilcblx0XHR9XG5cblx0XHQvLyBnbyB0aHJvdWdoIHRoZSBhcnJheSBldmVyeSB0aHJlZSBieXRlcywgd2UnbGwgZGVhbCB3aXRoIHRyYWlsaW5nIHN0dWZmIGxhdGVyXG5cdFx0Zm9yIChpID0gMCwgbGVuZ3RoID0gdWludDgubGVuZ3RoIC0gZXh0cmFCeXRlczsgaSA8IGxlbmd0aDsgaSArPSAzKSB7XG5cdFx0XHR0ZW1wID0gKHVpbnQ4W2ldIDw8IDE2KSArICh1aW50OFtpICsgMV0gPDwgOCkgKyAodWludDhbaSArIDJdKVxuXHRcdFx0b3V0cHV0ICs9IHRyaXBsZXRUb0Jhc2U2NCh0ZW1wKVxuXHRcdH1cblxuXHRcdC8vIHBhZCB0aGUgZW5kIHdpdGggemVyb3MsIGJ1dCBtYWtlIHN1cmUgdG8gbm90IGZvcmdldCB0aGUgZXh0cmEgYnl0ZXNcblx0XHRzd2l0Y2ggKGV4dHJhQnl0ZXMpIHtcblx0XHRcdGNhc2UgMTpcblx0XHRcdFx0dGVtcCA9IHVpbnQ4W3VpbnQ4Lmxlbmd0aCAtIDFdXG5cdFx0XHRcdG91dHB1dCArPSBlbmNvZGUodGVtcCA+PiAyKVxuXHRcdFx0XHRvdXRwdXQgKz0gZW5jb2RlKCh0ZW1wIDw8IDQpICYgMHgzRilcblx0XHRcdFx0b3V0cHV0ICs9ICc9PSdcblx0XHRcdFx0YnJlYWtcblx0XHRcdGNhc2UgMjpcblx0XHRcdFx0dGVtcCA9ICh1aW50OFt1aW50OC5sZW5ndGggLSAyXSA8PCA4KSArICh1aW50OFt1aW50OC5sZW5ndGggLSAxXSlcblx0XHRcdFx0b3V0cHV0ICs9IGVuY29kZSh0ZW1wID4+IDEwKVxuXHRcdFx0XHRvdXRwdXQgKz0gZW5jb2RlKCh0ZW1wID4+IDQpICYgMHgzRilcblx0XHRcdFx0b3V0cHV0ICs9IGVuY29kZSgodGVtcCA8PCAyKSAmIDB4M0YpXG5cdFx0XHRcdG91dHB1dCArPSAnPSdcblx0XHRcdFx0YnJlYWtcblx0XHR9XG5cblx0XHRyZXR1cm4gb3V0cHV0XG5cdH1cblxuXHRleHBvcnRzLnRvQnl0ZUFycmF5ID0gYjY0VG9CeXRlQXJyYXlcblx0ZXhwb3J0cy5mcm9tQnl0ZUFycmF5ID0gdWludDhUb0Jhc2U2NFxufSh0eXBlb2YgZXhwb3J0cyA9PT0gJ3VuZGVmaW5lZCcgPyAodGhpcy5iYXNlNjRqcyA9IHt9KSA6IGV4cG9ydHMpKVxuIiwiZXhwb3J0cy5yZWFkID0gZnVuY3Rpb24gKGJ1ZmZlciwgb2Zmc2V0LCBpc0xFLCBtTGVuLCBuQnl0ZXMpIHtcbiAgdmFyIGUsIG1cbiAgdmFyIGVMZW4gPSBuQnl0ZXMgKiA4IC0gbUxlbiAtIDFcbiAgdmFyIGVNYXggPSAoMSA8PCBlTGVuKSAtIDFcbiAgdmFyIGVCaWFzID0gZU1heCA+PiAxXG4gIHZhciBuQml0cyA9IC03XG4gIHZhciBpID0gaXNMRSA/IChuQnl0ZXMgLSAxKSA6IDBcbiAgdmFyIGQgPSBpc0xFID8gLTEgOiAxXG4gIHZhciBzID0gYnVmZmVyW29mZnNldCArIGldXG5cbiAgaSArPSBkXG5cbiAgZSA9IHMgJiAoKDEgPDwgKC1uQml0cykpIC0gMSlcbiAgcyA+Pj0gKC1uQml0cylcbiAgbkJpdHMgKz0gZUxlblxuICBmb3IgKDsgbkJpdHMgPiAwOyBlID0gZSAqIDI1NiArIGJ1ZmZlcltvZmZzZXQgKyBpXSwgaSArPSBkLCBuQml0cyAtPSA4KSB7fVxuXG4gIG0gPSBlICYgKCgxIDw8ICgtbkJpdHMpKSAtIDEpXG4gIGUgPj49ICgtbkJpdHMpXG4gIG5CaXRzICs9IG1MZW5cbiAgZm9yICg7IG5CaXRzID4gMDsgbSA9IG0gKiAyNTYgKyBidWZmZXJbb2Zmc2V0ICsgaV0sIGkgKz0gZCwgbkJpdHMgLT0gOCkge31cblxuICBpZiAoZSA9PT0gMCkge1xuICAgIGUgPSAxIC0gZUJpYXNcbiAgfSBlbHNlIGlmIChlID09PSBlTWF4KSB7XG4gICAgcmV0dXJuIG0gPyBOYU4gOiAoKHMgPyAtMSA6IDEpICogSW5maW5pdHkpXG4gIH0gZWxzZSB7XG4gICAgbSA9IG0gKyBNYXRoLnBvdygyLCBtTGVuKVxuICAgIGUgPSBlIC0gZUJpYXNcbiAgfVxuICByZXR1cm4gKHMgPyAtMSA6IDEpICogbSAqIE1hdGgucG93KDIsIGUgLSBtTGVuKVxufVxuXG5leHBvcnRzLndyaXRlID0gZnVuY3Rpb24gKGJ1ZmZlciwgdmFsdWUsIG9mZnNldCwgaXNMRSwgbUxlbiwgbkJ5dGVzKSB7XG4gIHZhciBlLCBtLCBjXG4gIHZhciBlTGVuID0gbkJ5dGVzICogOCAtIG1MZW4gLSAxXG4gIHZhciBlTWF4ID0gKDEgPDwgZUxlbikgLSAxXG4gIHZhciBlQmlhcyA9IGVNYXggPj4gMVxuICB2YXIgcnQgPSAobUxlbiA9PT0gMjMgPyBNYXRoLnBvdygyLCAtMjQpIC0gTWF0aC5wb3coMiwgLTc3KSA6IDApXG4gIHZhciBpID0gaXNMRSA/IDAgOiAobkJ5dGVzIC0gMSlcbiAgdmFyIGQgPSBpc0xFID8gMSA6IC0xXG4gIHZhciBzID0gdmFsdWUgPCAwIHx8ICh2YWx1ZSA9PT0gMCAmJiAxIC8gdmFsdWUgPCAwKSA/IDEgOiAwXG5cbiAgdmFsdWUgPSBNYXRoLmFicyh2YWx1ZSlcblxuICBpZiAoaXNOYU4odmFsdWUpIHx8IHZhbHVlID09PSBJbmZpbml0eSkge1xuICAgIG0gPSBpc05hTih2YWx1ZSkgPyAxIDogMFxuICAgIGUgPSBlTWF4XG4gIH0gZWxzZSB7XG4gICAgZSA9IE1hdGguZmxvb3IoTWF0aC5sb2codmFsdWUpIC8gTWF0aC5MTjIpXG4gICAgaWYgKHZhbHVlICogKGMgPSBNYXRoLnBvdygyLCAtZSkpIDwgMSkge1xuICAgICAgZS0tXG4gICAgICBjICo9IDJcbiAgICB9XG4gICAgaWYgKGUgKyBlQmlhcyA+PSAxKSB7XG4gICAgICB2YWx1ZSArPSBydCAvIGNcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsdWUgKz0gcnQgKiBNYXRoLnBvdygyLCAxIC0gZUJpYXMpXG4gICAgfVxuICAgIGlmICh2YWx1ZSAqIGMgPj0gMikge1xuICAgICAgZSsrXG4gICAgICBjIC89IDJcbiAgICB9XG5cbiAgICBpZiAoZSArIGVCaWFzID49IGVNYXgpIHtcbiAgICAgIG0gPSAwXG4gICAgICBlID0gZU1heFxuICAgIH0gZWxzZSBpZiAoZSArIGVCaWFzID49IDEpIHtcbiAgICAgIG0gPSAodmFsdWUgKiBjIC0gMSkgKiBNYXRoLnBvdygyLCBtTGVuKVxuICAgICAgZSA9IGUgKyBlQmlhc1xuICAgIH0gZWxzZSB7XG4gICAgICBtID0gdmFsdWUgKiBNYXRoLnBvdygyLCBlQmlhcyAtIDEpICogTWF0aC5wb3coMiwgbUxlbilcbiAgICAgIGUgPSAwXG4gICAgfVxuICB9XG5cbiAgZm9yICg7IG1MZW4gPj0gODsgYnVmZmVyW29mZnNldCArIGldID0gbSAmIDB4ZmYsIGkgKz0gZCwgbSAvPSAyNTYsIG1MZW4gLT0gOCkge31cblxuICBlID0gKGUgPDwgbUxlbikgfCBtXG4gIGVMZW4gKz0gbUxlblxuICBmb3IgKDsgZUxlbiA+IDA7IGJ1ZmZlcltvZmZzZXQgKyBpXSA9IGUgJiAweGZmLCBpICs9IGQsIGUgLz0gMjU2LCBlTGVuIC09IDgpIHt9XG5cbiAgYnVmZmVyW29mZnNldCArIGkgLSBkXSB8PSBzICogMTI4XG59XG4iLCJcbi8qKlxuICogaXNBcnJheVxuICovXG5cbnZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcblxuLyoqXG4gKiB0b1N0cmluZ1xuICovXG5cbnZhciBzdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuXG4vKipcbiAqIFdoZXRoZXIgb3Igbm90IHRoZSBnaXZlbiBgdmFsYFxuICogaXMgYW4gYXJyYXkuXG4gKlxuICogZXhhbXBsZTpcbiAqXG4gKiAgICAgICAgaXNBcnJheShbXSk7XG4gKiAgICAgICAgLy8gPiB0cnVlXG4gKiAgICAgICAgaXNBcnJheShhcmd1bWVudHMpO1xuICogICAgICAgIC8vID4gZmFsc2VcbiAqICAgICAgICBpc0FycmF5KCcnKTtcbiAqICAgICAgICAvLyA+IGZhbHNlXG4gKlxuICogQHBhcmFtIHttaXhlZH0gdmFsXG4gKiBAcmV0dXJuIHtib29sfVxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gaXNBcnJheSB8fCBmdW5jdGlvbiAodmFsKSB7XG4gIHJldHVybiAhISB2YWwgJiYgJ1tvYmplY3QgQXJyYXldJyA9PSBzdHIuY2FsbCh2YWwpO1xufTtcbiJdfQ==
