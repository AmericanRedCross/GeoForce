/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *       on 4/7/14.
 */

(function(){ 'use strict';

if (!L.spatialdev) L.spatialdev = {};

L.spatialdev.featurelabel = {
  featureSets: [],
  pathUpdated: function(leafletId) {
    var featureSets = L.spatialdev.featurelabel.featureSets;
    for(var i= 0, len=featureSets.length; i<len; ++i) {
      featureSets[i]._pathUpdated(leafletId);
    }
  }
};

}());