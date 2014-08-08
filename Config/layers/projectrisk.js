/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *       on 8/6/14.
 */

module.exports = {
  sampletracks: {
    name: 'Sample GPS Tracks',
    type: 'csv',
    theme: 'projectrisk',
    url: 'data/test/sample-tracks.csv',
    properties: {
      legend: ''
    }
  },

  landcover: {
    name: 'MODIS Landcover 2009',
    type: 'wms',
    theme: 'projectrisk',
    url: 'http://ags.servirlabs.net/ArcGIS/services/ReferenceNode/MODIS_Landcover_Type1_2009/MapServer/WMSServer',
    layers: '0',
    properties: {
      legend: ""
    }
  },

  earthquakestest: {
    name: 'USGS Earthquakes Test',
    type: 'kml',
    theme: 'projectrisk',
    url: 'data/test/usgs-earthquakes.kml',
    properties: {
      legend: ''
    }
  }

};
