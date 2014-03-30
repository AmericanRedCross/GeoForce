/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *     on Mon Mar 17 2014
 */

angular.module('GeoAngular').controller('MapCtrl', function ($scope, leafletData, Alias, VectorProvider) {
  console.log('MapCtrl');

  $scope.routeParams = window.RouteParams;

  var lastLayersStr = '';
  $scope.blur = '';

  //Init activeTheme property
  $scope.activeTheme = "Projects";

  //Init selectedFeatureTitle property
  $scope.selectedFeatureTitle = "Philippines";

  //Initialize the dummy project/disaster click results - this needs to be moved to a new controller
  $scope.groupings = { 'Projects': { items: [{name: 'Project 1', id: 1}, {name:'Project 2', id:2}, {name:'Project 3', id: 3}, {name:'RedCross Project', id:4}]}, 'Disasters': {items: [{name:'Oso Landslide', id:1}, {name:'Hurricane', id:2}]} };


  var layersStr = null;

  function setParams() {
    if (RouteParams.landing) {
      console.log('landing');
      $scope.blur = 'blur';
    } else {
      $scope.blur = '';
    }
    var lat = parseFloat(RouteParams.lat)   || 0;
    var lng = parseFloat(RouteParams.lng)   || 0;
    var zoom = parseFloat(RouteParams.zoom) || 2;
    layersStr = RouteParams.layers;
    var layers = layersStr.split(',') || Alias.redcross;

    // first layer should always be treated as the basemap
    var basemap = Alias.find(layers[0]) || Alias.redcross;
    var overlays = layers.slice(1);

    if (lastLayersStr !== layersStr) {
      console.log('Setting layers.');
      if (Array.isArray(overlays) && overlays.length > 0)
        addOverlays(overlays);

      $scope.defaults = {
        scrollWheelZoom: true
      };

      $scope.tiles = {
        url: basemap
      };
    }

    $scope.center = {
      lat: lat,
      lng: lng,
      zoom: zoom
    };

    lastLayersStr = layersStr;
  }
  setParams();

  $scope.$on('route-update', function() {
    var c = $scope.center;
    var lat = c.lat.toFixed(6);
    var lng = c.lng.toFixed(6);
    var zoom = c.zoom.toString();
    if (   RouteParams.lat    !== lat
        || RouteParams.lng    !== lng
        || RouteParams.zoom   !== zoom
        || RouteParams.layers !== layersStr ) {

      console.log('map.js route-update Updating Map...');
      setParams();
    }

  });


  leafletData.getMap().then(function (map) {
    map.on('moveend', function () { // move is good too
      var c = map.getCenter();
      var lat = c.lat.toFixed(6);
      var lng = c.lng.toFixed(6);
      var zoom = map.getZoom().toString();

      if (   RouteParams.lat  !== lat
          || RouteParams.lng  !== lng
          || RouteParams.zoom !== zoom ) {

        console.log('map: lat,lng,zoom !== RouteParams');
        RouteParams.lat = lat;
        RouteParams.lng = lng;
        RouteParams.zoom = zoom;
      }

    });
  });


  function addOverlays(overlays) {
    leafletData.getMap().then(function (map) {

      for (var i = 0, len = overlays.length; i < len; ++i) {
        var o = overlays[i];
        var vecRes = VectorProvider.createResource(o);
        vecRes.fetch(function(geojson, name){
          $scope.geojson = {
            data: geojson,
            style: {
              fillColor: "green",
              weight: 2,
              opacity: 1,
              color: 'white',
              dashArray: '3',
              fillOpacity: 0.7
            }
          }
        });
      }

    });
  }


});
