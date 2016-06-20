module.exports = angular.module('GeoAngular').controller('MainCtrl', function($scope, $rootScope, $state, $stateParams, $location) {
  debug.$location = $location;
  localStorage.setItem('mapfolioRoute', $location.path());

  // NH TODO: See if this is also the case with ui-router?
  // weird bug where redirect peels out '://{s' when ':' is there
  // $routeParams.layers We just dont have the : in main.js so that
  // part of the path does not go away...
  var layersStr = $stateParams.layers = $stateParams.layers.replace('http//', 'http://');
  var themeStr = $stateParams.theme;
  var filtersStr = $stateParams.filters;
  var categoryStr = $stateParams.category; // layer category open
  var themeLabelStr = $stateParams.themelabels; // themelabels (bubbles)
  var fullscreen = $stateParams.fullscreen; //whether or not the app is in fullscreen mode

  var levelStr = $stateParams.level;
  var zoomStr = $stateParams.zoom;
  $rootScope.$broadcast('route-update');

  /**
   * Only if the latest route has a different layer string than before.
   */
  if (layersStr !== window.prevLayersStr) {
    window.prevLayersStr = layersStr;
    var layers = layersStr.split(',');
    $rootScope.$broadcast('layers-update', layers);
  }

  if (levelStr !== null && levelStr !== window.prevLevelStr) {
    window.prevLevelStr = levelStr;
    $rootScope.$broadcast('level-update', levelStr);
  }

  if (zoomStr !== window.prevZoomStr) {
    window.prevZoomStr = zoomStr;
    $rootScope.$broadcast('zoom-update', zoomStr);
  }

  if (themeStr !== window.prevthemeStr) {
    window.prevthemeStr = themeStr;
    $rootScope.$broadcast('theme-update', themeStr);
  }

  if (filtersStr !== window.prevfiltersStr) {
    window.prevfiltersStr = filtersStr;
    $rootScope.$broadcast('filters-update', filtersStr);
  }

  // if the open category has changed broadcast category has changed
  if (categoryStr !== window.prevCategoryStr) {
    window.prevCategoryStr = categoryStr;
    $rootScope.$broadcast('category-update', categoryStr);
  }

  // if the themelabels has changed broadcast themelabels has changed
  if(window.themeLabelStr != themeLabelStr) {
    window.themeLabelStr = themeLabelStr;
    $rootScope.$broadcast('themelabels-update', themeLabelStr);
  }

  // if the fullscreen attribute has changed broadcast fullscreen has changed
  if(window.fullscreen != fullscreen) {
    window.fullscreen = fullscreen;
    $rootScope.$broadcast('fullscreen-changed', fullscreen);
  }

});
