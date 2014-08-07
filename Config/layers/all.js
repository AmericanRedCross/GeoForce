/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *       on 8/6/14.
 */

module.exports = {

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

  usgsearthquake: {
    type: 'geojson',
    theme: 'all',
    url: 'http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson',
    properties: {
      'title': 'USGS Realtime Earthquakes Feed (Week)'

    }
  },

  phl: {
    type: 'geojson',
    theme: 'all',
    url: 'data/test/phl.geojson',
    properties: {
      "title": 'The Philippines',
      "stroke": 'white',
      "stroke-width": 2,
      "dash-array": '3',
      "stroke-opacity": 1,
      "fill": "green",
      "fill-opacity": 0.7,
      legend: ""
    }
  },

  wa: {
    type: 'geojson',
    theme: 'all',
    url: 'data/test/washington.geojson',
    properties: {
      title: 'Washington (State)',
      fill: "#FFBE00",
      legend: ""
    }
  },

  wafires: {
    type: 'geojson',
    theme: 'all',
    url: 'data/test/state_wa_lrg_fires.geojson',
    properties: {
      "title": "Washington Fires",
      "stroke": "#FF8800",
      "stroke-width": 1,
      "fill": "#FFBE00",
      "fill-opacity": 0.5,
      legend: ""
    }
  },

  //GADM country extents, level 0
  countryextents: {
    type: 'geojson',
    theme: 'all',
    url: 'data/vw_gadm_raw_geom.geojson'
  },

  //ARC Region extents
  arcregionextents: {
    type: 'geojson',
    theme: 'all',
    url: 'data/arc_region_extents.geojson'
  },


  /**
   * KML
   */
  gdacs: {
    name: 'GDACS: Global Disaster Alert and Coordination System',
    type: 'kml',
    theme: 'all',
    url: 'http://www.gdacs.org/xml/gdacs.kml',
    properties: {
      legend: ''
    }
  },
  gdacstest: {
    name: 'GDACS Test',
    type: 'kml',
    theme: 'all',
    url: 'data/test/gdacs.kml',
    properties: {
      legend: ''
    }
  },
  earthquakes: {
    name: 'USGS Earthquakes',
    type: 'kml',
    theme: 'all',
    url: 'http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/1.0_week_age.kml',
    properties: {
      legend: ''
    }
  },
  earthquakestest: {
    name: 'USGS Earthquakes Test',
    type: 'kml',
    theme: 'all',
    url: 'data/test/usgs-earthquakes.kml',
    properties: {
      legend: ''
    }
  },


  /**
   * CSV
   */
  ugandafsp: {
    name: 'Uganda Financial Service Providers',
    type: 'csv',
    theme: 'all',
    url: 'data/test/uganda.csv',
    properties: {
      legend: ''
    }
  },
  sampletracks: {
    name: 'Sample GPS Tracks',
    type: 'csv',
    theme: 'all',
    url: 'data/test/sample-tracks.csv',
    properties: {
      legend: ''
    }
  },


  /**
   * WMS
   */
  airtemp: {
    name: 'NOAA Air Temperature',
    type: 'wms',
    theme: 'all',
    url: 'http://nowcoast.noaa.gov/wms/com.esri.wms.Esrimap/obs',
    transparent: true,      // default true
    format: 'image/png',    // default 'image/png'
    layers: 'OBS_MET_TEMP',
    properties: {
      legend: ""
    }
  },

  // Not working??? works in QGIS. Most layers, however, don't even work in QGIS.
  sanandreas: {
    name: 'San Andreas Scenario ShakeMap M7.8 (1857 Rupture)',
    type: 'wms',
    theme: 'all',
    url: 'http://lacrmt.sahanafoundation.org:8080/geoserver/wms?LAYERS=lacrmt%3Ainund2&',
    transparent: false,
    layers: 'lacrmt:sanandreas78',
    properties: {
      legend: ""
    }
  },

  landcover: {
    name: 'MODIS Landcover 2009',
    type: 'wms',
    theme: 'all',
    url: 'http://ags.servirlabs.net/ArcGIS/services/ReferenceNode/MODIS_Landcover_Type1_2009/MapServer/WMSServer',
    layers: '0',
    properties: {
      legend: ""
    }
  },

  growingperiod: {
    name: 'Average Length of Growing Period (days)',
    type: 'wms',
    theme: 'all',
    url: 'http://apps.harvestchoice.org/arcgis/services/MapServices/cell_values_4/MapServer/WMSServer',
    layers: '15',
    properties: {
      legend: ""
    }
  },


  /**
   * XYZ
   */
  clouds: {
    name: 'Cloud Cover',
    type: 'xyz',
    theme: 'all',
    url: 'http://{s}.tile.openweathermap.org/map/clouds_cls/{z}/{x}/{y}.png',
    opacity: 0.5 // optional. opacity is 0.5 if not specified
  },

  precipitation: {
    name: 'Precipitation',
    type: 'xyz',
    theme: 'all',
    url: 'http://{s}.tile.openweathermap.org/map/precipitation/{z}/{x}/{y}.png',
    opacity: 0.5
  },

  precipitationclassic: {
    name: 'Precipitation (Classic)',
    type: 'xyz',
    theme: 'all',
    url: 'http://{s}.tile.openweathermap.org/map/precipitation_cls/{z}/{x}/{y}.png',
    opacity: 0.4
  },

  rain: {
    name: 'Rain',
    type: 'xyz',
    theme: 'all',
    url: 'http://{s}.tile.openweathermap.org/map/rain/{z}/{x}/{y}.png'
  },

  rainclassic: {
    name: 'Rain (Classic)',
    type: 'xyz',
    theme: 'all',
    url: 'http://{s}.tile.openweathermap.org/map/rain_cls/{z}/{x}/{y}.png'
  },

  pressure: {
    name: 'Pressure',
    type: 'xyz',
    theme: 'all',
    url: 'http://{s}.tile.openweathermap.org/map/pressure/{z}/{x}/{y}.png'
  },

  pressurecontour: {
    name: 'Pressure Contour',
    type: 'xyz',
    theme: 'all',
    url: 'http://{s}.tile.openweathermap.org/map/pressure_cntr/{z}/{x}/{y}.png',
    opacity: 0.9
  },

  temperature: {
    name: 'Temperature',
    type: 'xyz',
    theme: 'all',
    url: 'http://{s}.tile.openweathermap.org/map/temp/{z}/{x}/{y}.png'
  },

  wind: {
    name: 'Wind',
    type: 'xyz',
    theme: 'all',
    url: 'http://{s}.tile.openweathermap.org/map/wind/{z}/{x}/{y}.png'
  },

  snow: {
    name: 'Snow',
    type: 'xyz',
    theme: 'all',
    url: 'http://{s}.tile.openweathermap.org/map/snow/{z}/{x}/{y}.png'
  },


  /**
   * Other (Vector Provider attempts to figure out the vector type). This only
   * works with vector layer types.
   */
  usoutline: 'http://eric.clst.org/wupl/Stuff/gz_2010_us_outline_20m.json'

};
