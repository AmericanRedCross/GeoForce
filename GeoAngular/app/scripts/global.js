/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *       on 3/28/14.
 */

var debug = {};

window.wait = false;
window.mapMoveEnd = false;

window.gists = {};
gists.append = function (gistData) {
  var gistsStr = localStorage.getItem('gists');
  var gists = JSON.parse(gistsStr);
  if (!gists) gists = {};
  gists[gistData.url] = gistData;
  gistsStr = JSON.stringify(gists);
  localStorage.setItem('gists',gistsStr);
};

gists.fetch = function() {
  var str = localStorage.getItem('gists');
  return JSON.parse(str);
};

window.prevLayersStr = '';
window.prevLevelStr = '';
window.prevZoomStr = '';
