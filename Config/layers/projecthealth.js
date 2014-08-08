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
  },
  gdacstest: {
    name: 'GDACS Test',
    type: 'kml',
    theme: 'projecthealth',
    url: 'data/test/gdacs.kml',
    properties: {
      legend: ''
    }
  },

  wa: {
    type: 'geojson',
    theme: 'projecthealth',
    url: 'data/test/washington.geojson',
    properties: {
      title: 'Washington (State)',
      fill: "#FFBE00",
      legend: ""
    }
  },

  wafires: {
    type: 'geojson',
    theme: 'projecthealth',
    url: 'data/test/state_wa_lrg_fires.geojson',
    properties: {
      "title": "Washington Fires",
      "stroke": "#FF8800",
      "stroke-width": 1,
      "fill": "#FFBE00",
      "fill-opacity": 0.5,
      legend: ""
    }
  }
};
