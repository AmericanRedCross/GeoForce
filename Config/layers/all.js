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

  // phl: {
  //   type: 'geojson',
  //   theme: 'all',
  //   url: 'data/test/phl.geojson',
  //   properties: {
  //     "title": 'The Philippines',
  //     "stroke": 'white',
  //     "stroke-width": 2,
  //     "dash-array": '3',
  //     "stroke-opacity": 1,
  //     "fill": "green",
  //     "fill-opacity": 0.7,
  //     legend: ""
  //   }
  // },
  //
  // /**
  //  * CSV
  //  */
  // ugandafsp: {
  //   name: 'Uganda Financial Service Providers',
  //   type: 'csv',
  //   theme: 'all',
  //   url: 'data/test/uganda.csv',
  //   properties: {
  //     legend: ''
  //   }
  // },

};
