/**
 * Created by Ryan Whitley <rwhitley@spatialdev.com>
 *       on 12/15/14.
 */

var Resource = require('./resource');
var $rootScope = require('./vector').$rootScope;
var $http = require('./vector').$http;
var vector = require('./vector');

module.exports = PBF;

/**
 * A PBF Resource instantiates a MVTSource (Mapbox Vector Tile)
 *
 * @param config
 * @constructor
 */
function PBF(config) {
  this._onTilesLoaded = config.onTilesLoaded; //Store the real function in a local property.

  var self = this;

  config.onTilesLoaded = function(MVTSource){

    self._onTilesLoaded(MVTSource, $http, vector, $rootScope);

  }


  this.layer = new L.TileLayer.MVTSource(config);
}

PBF.prototype = Object.create(Resource.prototype);
PBF.prototype.constructor = PBF;

PBF.prototype.fetch = function (cb) {
  var self = this;

};

PBF.prototype.getLayer = function () {
  return this.layer;
};

PBF.prototype.eachLayer = function (cb) {

};
