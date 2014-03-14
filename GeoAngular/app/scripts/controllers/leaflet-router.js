/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *     on Tue Mar 11 2014
 */

angular.module( "GeoAngular", ["leaflet-directive"]).controller("LeafletRouterController", [
                '$scope', '$http', 'leafletData', '$location',
                function($scope, $http, leafletData, $location) {

    var map = leafletData.getMap();

    var path = $location.path();
    console.log(path);

    var coords = path.slice(path.indexOf('@')+1,path.indexOf('z')).split(',');

    var lat = parseFloat(coords[0]) || 0;
    var lng = parseFloat(coords[1]) || 0;
    var zoom = parseInt(coords[2]) || 2;
    console.log(lat);
    console.log(lng);
    console.log(zoom);

    var layers = path.slice(path.indexOf('(')+1,path.indexOf(')')).split(',');
    var basemap = layers[0] || 'http://{s}.tile.osm.org/{z}/{x}/{y}.png';
    layers = layers.slice(1);

    var layerStr = '';
    if (layers.length > 0) {
        layerStr = ',' + layers.toString();
    }
    $location.path('/map@'+lat+','+lng+','+zoom+'z('+basemap+layerStr+')');

    angular.extend($scope, {
        center: {
            lat: lat,
            lng: lng,
            zoom: zoom
        },
        defaults: {
            tileLayer: basemap,
            scrollWheelZoom: true
        }
    });

    leafletData.getMap().then(function(map) {
        map.on('move',function(){ // moveend is good too
            var c = map.getCenter();
            var zoom = map.getZoom();
            var lat = c.lat.toFixed(6);
            var lng = c.lng.toFixed(6);
            $location.path('/map@'+lat+','+lng+','+zoom+'z('+basemap+layerStr+')');
        });
    });

    // Get the countries geojson data from a JSON
    $http.get("data/test/phl.geojson").success(function(data, status) {
        angular.extend($scope, {
            geojson: {
                data: data,
                style: {
                    fillColor: "#e8e0d8",
                    weight: 2,
                    opacity: 1,
                    color: 'white',
                    fillOpacity: 0.8
                }
            }
        });
    });

}

]);
