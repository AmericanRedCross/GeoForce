/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *       on 3/18/14.
 */

(function () {
  'use strict';

  var alias = {

  };

  angular.module('GeoAngular').factory('Alias', function () {
    return {
      /**
       * For layers, try and get an alias for everything, so if it's a URL that
       * does not match, we just want to return itself so we can fetch that given url.
       *
       * @param name
       * @returns {*}
       */
      get: function (name) {
        var val = alias[name];
        if (typeof val !== 'undefined' && val !== null) {
          return val;
        } else {
          return name;
        }
      }
    };
  });


})();