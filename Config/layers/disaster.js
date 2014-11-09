/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *       on 8/6/14.
 */

module.exports = {
  earthquakes: {
    name: 'USGS Earthquakes',
    type: 'kml',
    theme: 'disaster',
    url: 'http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/1.0_week_age.kml',
    properties: {
      legend: ''
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
  },

};
