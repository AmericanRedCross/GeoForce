/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *       on 3/18/14.
 */

angular.module('GeoAngular').service('Alias', function () {

  this.osm = 'http://{s}.tile.osm.org/{z}/{x}/{y}.png';
  this.natgeo = 'http://services.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}';
  this.usgstopo = 'http://services.arcgisonline.com/ArcGIS/rest/services/USA_Topo_Maps/MapServer/tile/{z}/{y}/{x}';
  this.esriortho = 'http://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}';
  this.mapbox = 'http://{s}.tiles.mapbox.com/v3/tmcw.map-7s15q36b/{z}/{x}/{y}.png';

  /**
   * For layers, we try and get an alias for everything, so if it's a URL that
   * does not match, we just want to return itself so we can fetch that given url.
   *
   * @param name
   * @returns {*}
   */
  this.find = function(name) {
    var val = this[name.toLowerCase()];
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
