/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *       on 8/6/14.
 */

module.exports = {


  /**
   * KML
   */

  earthquakes: {
    name: 'USGS Earthquakes',
    type: 'kml',
    theme: 'project',
    url: 'http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/1.0_week_age.kml',
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
    theme: 'project',
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
    theme: 'project',
    url: 'http://lacrmt.sahanafoundation.org:8080/geoserver/wms?LAYERS=lacrmt%3Ainund2&',
    transparent: false,
    layers: 'lacrmt:sanandreas78',
    properties: {
      legend: ""
    }
  },

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


  /**
   * XYZ
   */
  pressurecontour: {
    name: 'Pressure Contour',
    type: 'xyz',
    theme: 'project',
    url: 'http://{s}.tile.openweathermap.org/map/pressure_cntr/{z}/{x}/{y}.png',
    opacity: 0.9
  },

  temperature: {
    name: 'Temperature',
    type: 'xyz',
    theme: 'project',
    url: 'http://{s}.tile.openweathermap.org/map/temp/{z}/{x}/{y}.png'
  },

  wind: {
    name: 'Wind',
    type: 'xyz',
    theme: 'project',
    url: 'http://{s}.tile.openweathermap.org/map/wind/{z}/{x}/{y}.png'
  }
};
