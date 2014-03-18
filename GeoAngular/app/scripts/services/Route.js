/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *     on Mon Mar 17 2014
 */

(function () { 'use strict';

angular.module('GeoAngular').service('Route', Route);

function Route($rootScope) {
    // default route parameters. gets reset by AppCtrl.
    this.params = {
        lat: '0',
        lng: '0',
        zoom: '2',
        layers: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
        stories: 'Route' //NH TODO take out, just for debugging...
    };

    this.setRouteParams = function(routeParams) {
        this.params = routeParams;
    }

    this.getRouteParams = function() {
        return this.params;
    }

    this.updateLatLngZoom = function(lat, lng, zoom) {
        var params = this.params;
        params.lat = lat;
        params.lng = lng;
        params.zoom = zoom;
        $rootScope.$broadcast('update-lat-lng-zoom', params);
    }
}

})();