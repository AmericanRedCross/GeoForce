/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *       on 5/7/14.
 *
 * This is a patch that overrides the L.Polyline class in Leaflet 0.7.2
 *
 * All this is doing is broadcasting the leaflet id for the path that is being redrawn.
 */

L.Polyline.prototype._updatePath = function () {
  if (!this._map) { return; }

  this._clipPoints();
  this._simplifyPoints();

  L.Path.prototype._updatePath.call(this);

  if (L.spatialdev && L.spatialdev.featurelabel) {
    L.spatialdev.featurelabel.pathUpdated(this._leaflet_id);
  }
};
