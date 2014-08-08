/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *       on 8/6/14.
 */

module.exports = {
  snow: {
    name: 'Snow',
    type: 'xyz',
    theme: 'other',
    url: 'http://{s}.tile.openweathermap.org/map/snow/{z}/{x}/{y}.png'
  },

  /**
   * Other (Vector Provider attempts to figure out the vector type). This only
   * works with vector layer types.
   */
  usoutline: 'http://eric.clst.org/wupl/Stuff/gz_2010_us_outline_20m.json'

};
