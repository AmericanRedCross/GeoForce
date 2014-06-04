/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *       on 6/4/14.
 */

/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *       on 6/4/14.
 *
 * This is a patch that overrides the L.Polyline class in Leaflet e522582
 *
 * All this is doing is broadcasting the leaflet id for the path that is being redrawn.
 */

L.Polyline.prototype._updatePath = function () {
  if (!this._map) { return; }

  this._clipPoints();
  this._simplifyPoints();
  this._updatePath();

  if (L.spatialdev && L.spatialdev.featurelabel) {
    L.spatialdev.featurelabel.pathUpdated(this._leaflet_id);
  }
};
