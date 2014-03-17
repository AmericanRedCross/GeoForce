/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *     on Mon Mar 17 2014
 */

(function () { 'use strict';

angular.module('GeoAngular', ['leaflet-directive']).controller('MapCtrl', MapCtrl);


function MapCtrl(leafletData, $scope, $routeParams, $location) {
    console.log('hi');

}


})();