/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *       on 4/10/14.
 */

var config = {};

config.chubbsPath = function(relPath) {
  return 'http://localhost:3000/' + relPath;
};

config.proxyPath = function(path) {
  return config.chubbsPath('services/utilities/proxy?url=' + path);
};
