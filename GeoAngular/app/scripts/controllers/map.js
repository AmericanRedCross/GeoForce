/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *     on Mon Mar 17 2014
 */

(function () { 'use strict';

angular.module('GeoAngular').controller('MapCtrl', MapCtrl);


function MapCtrl($scope, $routeParams, leafletData) {
    $scope.test = 'here';
    $routeParams.stories = 'inmapctr';

    var lat     = parseFloat($routeParams.lat)   || 0;
    var lng     = parseFloat($routeParams.lng)   || 0;
    var zoom    = parseFloat($routeParams.zoom)  || 2;
    var layers  = $routeParams.layers.split(',') || 'http://{s}.tile.osm.org/{z}/{x}/{y}.png';

    // first layer should always be treated as the basemap
    var basemap = layers[0];
    layers = layers.slice(1);

    $scope.center = {
        lat: lat,
        lng: lng,
        zoom: zoom
    };
    $scope.defaults = {
        tileLayer: basemap,
        scrollWheelZoom: true
    }

}


})();