/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *       on 3/18/14.
 */

/**
 * All of the layer names need to be lowercase.
 */
angular.module('GeoAngular').service('LayerConfig', function () {

  /**
   * Basemaps
   * @type {string}
   */
  this.pinterest = 'http://{s}.tiles.mapbox.com/v3/pinterest.map-ho21rkos/{z}/{x}/{y}.png';
  this.osmhot = 'http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png';
  this.redcross = 'https://{s}.tiles.mapbox.com/v3/americanredcross.hcji22de/{z}/{x}/{y}.png';
  this.streets = 'https://{s}.tiles.mapbox.com/v3/examples.map-vyofok3q/{z}/{x}/{y}.png';
  this.terrain = 'https://{s}.tiles.mapbox.com/v3/examples.map-9ijuk24y/{z}/{x}/{y}.png';
  this.satellite = 'https://{s}.tiles.mapbox.com/v3/examples.map-qfyrx5r8/{z}/{x}/{y}.png';

  this.mozilla = 'http://{s}.tiles.mapbox.com/v3/mozilla-webprod.e91ef8b3/{z}/{x}/{y}.png';
  this.github = 'http://{s}.tiles.mapbox.com/v3/github.map-xgq2svrz/{z}/{x}/{y}.png';
  this.green = 'http://{s}.tiles.mapbox.com/v3/examples.map-3gisupiu/{z}/{x}/{y}.png';
  this.dark = 'http://{s}.tiles.mapbox.com/v3/spatialdev.map-c9z2cyef/{z}/{x}/{y}.png';

  this.osm = 'http://{s}.tile.osm.org/{z}/{x}/{y}.png';
  this.osmcycle = 'http://{s}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png';
  this.osmtransport = 'http://{s}.tile2.opencyclemap.org/transport/{z}/{x}/{y}.png';
  this.osmmapquest = 'http://otile3.mqcdn.com/tiles/1.0.0/osm/{z}/{x}/{y}.png';

  this.natgeo = 'http://services.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}';
  this.usgstopo = 'http://services.arcgisonline.com/ArcGIS/rest/services/USA_Topo_Maps/MapServer/tile/{z}/{y}/{x}';
  this.ortho = 'http://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}';
  this.ocean = 'http://services.arcgisonline.com/ArcGIS/rest/services/Ocean/World_Ocean_Base/MapServer/tile/{z}/{y}/{x}';
  this.lightgray = 'http://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}';
  this.esritopo = 'http://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}';




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
    url: 'data/test/phl.geo.json',
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
  this.allprojects = {
    type: 'BBoxGeoJSON',
    bboxurl: config.chubbsPath('services/custom/custom_operation?name=getidsbyextent&format=json&bbox=:bbox'),
    url: config.chubbsPath('services/custom/custom_operation?name=getaggregatedthemefeaturesbyid&format=geojson&theme=project&gadm_level=:level&ids=:ids'),
    properties: {
      "stroke": 'white',
      "stroke-width": 2,
      "stroke-opacity": 1,
      "fill": "green",
      "fill-opacity": 0,
      "labelProperty": "theme_count",
      "detailsUrl": config.chubbsPath('services/custom/custom_operation?name=getprojectbyguid&format=json&guids=:guids'),
      "onClick": 'fetchFeatureDetails' // the BBoxGeoJSON method to call on click.
    }
  };

	this.alldisasters = {
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
			"detailsUrl": config.chubbsPath('services/custom/custom_operation?name=getprojectbyguid&format=json&guids=:guids'),
			"onClick": 'fetchFeatureDetails' // the BBoxGeoJSON method to call on click.
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
    } else {
      if (name.slice(0, 4).toLowerCase() === 'http') {
        return name;
      } else {
        console.error('COULD NOT FIND ALIAS: ' + name);
        return null;
      }
    }
  };

});
