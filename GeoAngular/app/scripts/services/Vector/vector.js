/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *       on 6/3/14.
 */

var vector = {};
module.exports = vector;




/**
 * This is updated by updateBBox. It is then used to query all
 * VectorProviders that use a bounding box to get additional
 * features.
 *
 * @type {string}
 */
vector.bbox = null;

/**
 * Every resource that has been instantiated.
 * @type {Array}
 */
vector.resources = [];
debug.resources = vector.resources;

/**
 * Every resource with a bounding box fetching mechanism.
 * @type {Array}
 */
vector.bboxResources = [];
debug.bboxResources = vector.bboxResources;

vector.bboxUrl = '';

vector.centerLevel = 0;

vector.setInjectors = function ($rootScope, $location, $http, LayerConfig) {
  vector.$rootScope = $rootScope;
  vector.$location = $location;
  vector.$http = $http;
  vector.LayerConfig = LayerConfig;
};

vector.angular = angular;
vector.L = L;

vector.map = debug.map; //NH fixme!!!
