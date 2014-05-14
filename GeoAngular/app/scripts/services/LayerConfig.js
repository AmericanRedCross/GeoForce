/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *       on 3/18/14.
 */

/**
 * All of the layer names need to be lowercase.
 */
angular.module('GeoAngular').service('LayerConfig', function () {

  /**
   * Basemaps Panel List
   *
   * List of basemaps that get shown in the Basemaps Panel. Edit this to add or remove
   * basemaps that the user will see as choices. All basemaps, including ones not in this
   * list, can still be manually referenced in the url. This is just for the User Interface.
   */
  this.basemaps = [
    'pinterest',
    'osmhot',
    'osm',
    'satellite',
    'ortho',
    'toner',
    'dark',
    'streets',
    'terrain',
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
  ];


  /**
   * Basemaps
   *
   * All basemap aliases that can be referred to in the url. The corresponding
   * path to the thumbnail in the Basemaps Panel should be:
   *    images/{aliasName}.jpg
   *
   */
  this.pinterest = {
    url: 'http://{s}.tiles.mapbox.com/v3/pinterest.map-ho21rkos/{z}/{x}/{y}.png',
    name: 'Pinterest'
  };
  this.osmhot = {
    url: 'http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png',
    name: 'Humanitarian OpenStreetMap'
  };
  this.redcross = {
    url: 'https://{s}.tiles.mapbox.com/v3/americanredcross.hcji22de/{z}/{x}/{y}.png',
    name: 'Red Cross'
  };
  this.streets = {
    url: 'https://{s}.tiles.mapbox.com/v3/examples.map-vyofok3q/{z}/{x}/{y}.png',
    name: 'Mapbox Streets'
  };
  this.terrain = {
    url: 'https://{s}.tiles.mapbox.com/v3/examples.map-9ijuk24y/{z}/{x}/{y}.png',
    name: 'Mapbox Terrain'
  };
  this.satellite = {
    url: 'https://{s}.tiles.mapbox.com/v3/examples.map-qfyrx5r8/{z}/{x}/{y}.png',
    name: 'Mapbox Satellite'
  };

  this.mozilla = {
    url: 'http://{s}.tiles.mapbox.com/v3/mozilla-webprod.e91ef8b3/{z}/{x}/{y}.png',
    name: 'Mozilla'
  };
  this.github = {
    url: 'http://{s}.tiles.mapbox.com/v3/github.map-xgq2svrz/{z}/{x}/{y}.png',
    name: 'Github'
  };
  this.green = {
    url: 'http://{s}.tiles.mapbox.com/v3/examples.map-3gisupiu/{z}/{x}/{y}.png',
    name: 'Green Theme'
  };
  this.dark = {
    url: 'http://{s}.tiles.mapbox.com/v3/spatialdev.map-c9z2cyef/{z}/{x}/{y}.png',
    name: 'Dark Theme'
  };

  this.osm = {
    url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
    name: 'Standard OpenStreetMap'
  };
  this.osmcycle = {
    url: 'http://{s}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png',
    name: 'Cycle OpenStreetMap'
  };
  this.osmtransport = {
    url: 'http://{s}.tile2.opencyclemap.org/transport/{z}/{x}/{y}.png',
    name: 'Transport OpenStreetMap'
  };
  this.osmmapquest = {
    url: 'http://otile3.mqcdn.com/tiles/1.0.0/osm/{z}/{x}/{y}.png',
    name: 'MapQuest OpenStreetMap'
  };

  this.natgeo = {
    url: 'http://services.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}',
    name: 'National Geographic'
  };
  this.usgstopo = {
    url: 'http://services.arcgisonline.com/ArcGIS/rest/services/USA_Topo_Maps/MapServer/tile/{z}/{y}/{x}',
    name: 'USGS Topographic'
  };
  this.ortho = {
    url: 'http://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
    name: 'Orthographic'
  };
  this.ocean = {
    url: 'http://services.arcgisonline.com/ArcGIS/rest/services/Ocean/World_Ocean_Base/MapServer/tile/{z}/{y}/{x}',
    name: 'Ocean Bathymetric'
  };
  this.lightgray = {
    url: 'http://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}',
    name: 'Light Gray'
  };
  this.esritopo = {
    url: 'http://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}',
    name: 'Esri Topographic'
  };

  this.toner = {
    url: 'http://{s}.tile.stamen.com/toner/{z}/{x}/{y}.png',
    name: 'Stamen Toner'
  };
  this.watercolor = {
    url: 'http://{s}.tile.stamen.com/watercolor/{z}/{x}/{y}.png',
    name: 'Stamen Watercolor'
  };


  /**
   * GeoJSON
   *
   * Note: Specifying the properties extends the properties object of the retrieved GeoJSON.
   * Styling adheres to the Github/Mapbox GeoJSON Styling Spec:
   *
   * https://help.github.com/articles/mapping-geojson-files-on-github
   * https://github.com/mapbox/simplestyle-spec/tree/master/1.1.0
   *
   */
  this.phl = {
    type: 'geojson',
    url: 'data/test/phl.geojson',
    properties: {
      "title": 'The Philippines',
      "stroke": 'white',
      "stroke-width": 2,
      "dash-array": '3',
      "stroke-opacity": 1,
      "fill": "green",
      "fill-opacity": 0.7
    }
  };

  this.wa = {
    type: 'geojson',
    url: 'data/test/washington.geojson',
    properties: {
      fill: "#FFBE00"
    }
  };

  this.wafires = {
    type: 'geojson',
    url: 'data/test/state_wa_lrg_fires.geojson',
    properties: {
      "stroke": "#FF8800",
      "stroke-width": 1,
      "fill": "#FFBE00",
      "fill-opacity": 0.5
    }
  };

  this.projectsbycountry = {
    type: 'geojson',
    url: 'data/test/vw_projects_by_country.geojson'
  };

  //GADM country extents, level 0
  this.countryextents = {
    type: 'geojson',
    url: 'data/vw_gadm_raw_geom.geojson'
  };

  //ARC Region extents
  this.arcregionextents = {
    type: 'geojson',
    url: 'data/arc_region_extents.geojson'
  };


  /**
   * BBoxGeoJSON
   *
   * This layer type retrieved features that intersect with the map's bounding box.
   * There must be a backend API that understands this.
   *
   * The Chubbs Spatial Server fully comprehends this, others do not.
   *
   * @type {{type: string}}
   */
  this.themecount = {
    type: 'BBoxGeoJSON',
    bboxurl: config.chubbsPath('services/custom/custom_operation?name=getidsbyextent&format=json&bbox=:bbox'),
    url: config.chubbsPath("services/custom/custom_operation?name=getaggregatedthemefeaturesbyid&format=geojson&theme=:theme&gadm_level=:level&ids=:ids&filters=:filters"),
    properties: {
      "stroke": 'white',
      "stroke-width": 2,
      "stroke-opacity": 1,
      "fill": "green",
      "fill-opacity": 0,
      "labelProperty": "theme_count",
      "detailsUrl": config.chubbsPath('services/custom/custom_operation?name=get:themebyguid&format=json&guids=:guids&gadm_level=:level'),
      "onSelect": 'fetchFeatureDetails', // the BBoxGeoJSON method to call on select. (toggled on)
      "onDeselect": 'closeDetails', // featurelabel evaluates this string when a feature is toggled off
      "defaultTheme": 'project' // The default theme the layer uses. This is used if there is no theme query param.
    }
  };

  this.themedisaster = {
    type: 'BBoxGeoJSON',
    bboxurl: config.chubbsPath('services/custom/custom_operation?name=getidsbyextent&format=json&bbox=:bbox'),
    url: config.chubbsPath('services/custom/custom_operation?name=getaggregatedthemefeaturesbyid&format=geojson&theme=disaster&gadm_level=:level&ids=:ids'),
    properties: {
      "stroke": 'white',
      "stroke-width": 2,
      "stroke-opacity": 1,
      "fill": "green",
      "fill-opacity": 0,
      "labelProperty": "theme_count",
      "detailsUrl": config.chubbsPath('services/custom/custom_operation?name=getprojectbyguid&format=json&guids=:guids&gadm_level=:level'),
      "onSelect": 'fetchFeatureDetails' // the BBoxGeoJSON method to call on click.
    }
  };

  this.allprojectsfiltered = {
      type: 'BBoxGeoJSON',
      bboxurl: config.chubbsPath('services/custom/custom_operation?name=getidsbyextent&format=json&bbox=:bbox'),
      url: config.chubbsPath("services/custom/custom_operation?name=getaggregatedthemefeaturesbyid&format=geojson&theme=project&gadm_level=:level&ids=:ids&filters=:filters"),
      properties: {
          "stroke": 'white',
          "stroke-width": 2,
          "stroke-opacity": 1,
          "fill": "green",
          "fill-opacity": 0,
          "labelProperty": "theme_count",
          "detailsUrl": config.chubbsPath('services/custom/custom_operation?name=getprojectbyguid&format=json&guids=:guids&gadm_level=:level'),
          "onSelect": 'fetchFeatureDetails' // the BBoxGeoJSON method to call on click.
      }
  };

  this.smartgadm = {
    type: 'BBoxGeoJSON',
    bboxurl: config.chubbsPath('services/custom/custom_operation?name=getidsbyextent&format=json&bbox=:bbox'),
    url: config.chubbsPath('services/custom/custom_operation?name=getfeaturesbyid&format=geojson&gadm_level=:level&ids=:ids'),
    properties: {
      "stroke": 'white',
      "stroke-width": 2,
      "stroke-opacity": 1,
      "fill": "green",
      "fill-opacity": 0,
      "labelProperty": "name"
    }

  };

  this.smartgadmfakecount = {
    type: 'BBoxGeoJSON',
    bboxurl: config.chubbsPath('services/custom/custom_operation?name=getidsbyextent&format=json&bbox=:bbox'),
    url: config.chubbsPath('services/custom/custom_operation?name=getfeaturesbyid&format=geojson&gadm_level=:level&ids=:ids'),
    properties: {
      "stroke": 'white',
      "stroke-width": 2,
      "stroke-opacity": 1,
      "fill": "green",
      "fill-opacity": 0,
      "labelProperty": function() {
//        Math.floor(Math.random() * (max - min + 1)) + min
        return Math.floor(Math.random() * (50 - 1 + 1)) + 1;
      }
    }

  };


  this.gadm0 ={
    type: 'BBoxGeoJSON',
    bboxurl: config.chubbsPath('services/custom/custom_operation?name=getidsbyextent&format=json&bbox=:bbox&gadm_level=0'),
    url: config.chubbsPath('services/custom/custom_operation?name=getfeaturesbyid&format=geojson&gadm_level=:level&ids=:ids')
  };

  this.gadm1 = {
    type: 'BBoxGeoJSON',
    bboxurl: config.chubbsPath('services/custom/custom_operation?name=getidsbyextent&format=json&bbox=:bbox&gadm_level=1'),
    url: config.chubbsPath('services/custom/custom_operation?name=getfeaturesbyid&format=geojson&gadm_level=:level&ids=:ids')
  };

  this.gadm2 = {
    type: 'BBoxGeoJSON',
    bboxurl: config.chubbsPath('services/custom/custom_operation?name=getidsbyextent&format=json&bbox=:bbox&gadm_level=2'),
    url: config.chubbsPath('services/custom/custom_operation?name=getfeaturesbyid&format=geojson&gadm_level=:level&ids=:ids')
  };

  this.gadm3 = {
    type: 'BBoxGeoJSON',
    bboxurl: config.chubbsPath('services/custom/custom_operation?name=getidsbyextent&format=json&bbox=:bbox&gadm_level=3'),
    url: config.chubbsPath('services/custom/custom_operation?name=getfeaturesbyid&format=geojson&gadm_level=:level&ids=:ids')
  };

  /**
   * KML
   */
  this.gdacs = 'http://www.gdacs.org/xml/gdacs.kml';
  this.gdacstest = 'data/test/gdacs.kml';
  this.earthquakes = 'http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/1.0_week_age.kml';
  this.earthquakestest = 'data/test/usgs-earthquakes.kml';




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
