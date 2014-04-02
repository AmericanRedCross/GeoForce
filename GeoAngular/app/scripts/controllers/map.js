/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *     on Mon Mar 17 2014
 */

angular.module('GeoAngular').controller('MapCtrl', function ($scope, $rootScope, $state, $stateParams, leafletData, LayerConfig, VectorProvider, leafletBoundsHelpers) {
  console.log('MapCtrl');

  $scope.routeParams = window.RouteParams;

  var lastLayersStr = '';
  $scope.blur = '';
  $scope.grayout = ''; //use this class to gray out the map, such as when the country selector menu is active

  //Init activeTheme property
  $scope.activeTheme = "Projects";

  //Init selectedFeatureTitle property
  $scope.selectedFeatureTitle = "Philippines";

  //Initialize the country selector menu by loading the json file and writing out the names into the panel
  $scope.countryList1 = null;
  $scope.countryList2 = null;
  $scope.countryList3 = null;
  var vecRes = VectorProvider.createResource("countryextents");
  vecRes.fetch(function(geojson){
    //Sort alphabetically
    geojson.features = geojson.features.sort(function(a,b){
      var textA = a.properties.name_0;
      var textB = b.properties.name_0;
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    });

    //Break up the file into thirds
    var length = geojson.features.length;
    $scope.countryList1 = geojson.features.slice(0, length/3);
    $scope.countryList2 = geojson.features.slice(length/3 + 1, (length/3) * 2);
    $scope.countryList3 = geojson.features.slice(((length/3) * 2) + 1, length);
  });

  //Initialize the ARC Region selector menu by loading the json file and writing out the names into the panel
  $scope.regionList1 = null;
  $scope.regionList2 = null;
  $scope.regionList3 = null;
  var vecResRegion = VectorProvider.createResource("arcregionextents");
  vecResRegion.fetch(function(geojson){
    //Sort alphabetically
    geojson.features = geojson.features.sort(function(a,b){
      var textA = a.properties.arcregion2;
      var textB = b.properties.arcregion2;
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    });

    //Break up the file into thirds
    var length = geojson.features.length;
    $scope.regionList1 = geojson.features.slice(0, 2);
    $scope.regionList2 = geojson.features.slice(2, 3);
    $scope.regionList3 = geojson.features.slice(3, 4);
  });

  //Function to Zoom to a selected Extent
  $scope.zoomToExtent = function(extent){
    $scope.bounds = {
      northEast: { lat: extent[2][1], lng: extent[2][0] },
      southWest: { lat: extent[0][1], lng: extent[0][0] }
    };
    //Trigger the menu to collapse
    $scope.countrySelectorVisible = false;
  };


  //Initialize the dummy project/disaster click results - this needs to be moved to a new controller
  $scope.groupings = { 'Projects': { items: [
    {name: 'Project 1', id: 1},
    {name: 'Project 2', id: 2},
    {name: 'Project 3', id: 3},
    {name: 'RedCross Project', id: 4}
  ]}, 'Disasters': {items: [
    {name: 'Oso Landslide', id: 1},
    {name: 'Hurricane', id: 2}
  ]} };


  var layersStr = null;
  var overlayNames = [];

  function redraw() {

    var lat = parseFloat(RouteParams.lat)   || 0;
    var lng = parseFloat(RouteParams.lng)   || 0;
    var zoom = parseFloat(RouteParams.zoom) || 2;
    layersStr = RouteParams.layers;
    var layers = layersStr.split(',') || LayerConfig.redcross;

    // first layer should always be treated as the basemap
    var basemap = LayerConfig.find(layers[0]) || LayerConfig.redcross;
    overlayNames = layers.slice(1);

    if (lastLayersStr !== layersStr) {
      console.log('Setting layers.');
      if (Array.isArray(overlayNames) && overlayNames.length > 0)
        drawOverlays();

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
  redraw();

  $scope.$on('route-update', function() {
    if ($scope.blur === 'blur' && $state.current.name !== 'landing') {
      $scope.blur = '';
    }
    var c = $scope.center;
    var lat = c.lat.toFixed(6);
    var lng = c.lng.toFixed(6);
    var zoom = c.zoom.toString();
    if (   $stateParams.lat    !== lat
        || $stateParams.lng    !== lng
        || $stateParams.zoom   !== zoom
        || $stateParams.layers !== layersStr ) {

      console.log('map.js route-update Updating Map...');
      redraw();
    }

  });

  $scope.$on('blur', function() {
    $scope.blur = 'blur';
  });

  leafletData.getMap().then(function (map) {
    map.on('moveend', function () { // move is good too
      var c = map.getCenter();
      var lat = c.lat.toFixed(6);
      var lng = c.lng.toFixed(6);
      var zoom = map.getZoom().toString();

      if (   $stateParams.lat  !== lat
          || $stateParams.lng  !== lng
          || $stateParams.zoom !== zoom ) {

        console.log('map: lat,lng,zoom !== RouteParams');
        $stateParams.lat = lat;
        $stateParams.lng = lng;
        $stateParams.zoom = zoom;
        $state.go($state.current.name, {
          lat: lat,
          lng: lng,
          zoom: zoom
        });
      }

    });

    //Connect the layout onresize end event
    window.layout.panes.center.bind("layoutpaneonresize_end", function () {
      map.invalidateSize();
    });
  });


  var overlays = [];

  /**
   * NH TODO: Make sure that the overlays draw in the correct order rather
   *          than the order from which they happen to be fetched.
   *          Also be smart with inserting new layers instead of redrawing
   *          everything...
   */
  function drawOverlays() {
    leafletData.getMap().then(function (map) {

      for (var h = 0, len = overlays.length; h < len; ++h) {
        map.removeLayer(overlays[h]);
      }

      for (var i = 0, len = overlayNames.length; i < len; ++i) {

        // need to fetch data and redraw layer
        var vecRes = VectorProvider.createResource(overlayNames[i]);
        vecRes.fetch(function(geojson){

          var geojsonLayer = L.geoJson(geojson, {
            style: L.mapbox.simplestyle.style,
            pointToLayer: function(feature, latlon) {
              if (!feature.properties) feature.properties = {};
              if (feature.properties.scale) {
                return L.circleMarker(latlon, {
                  fillColor: feature.properties.color || '#FF0000',
                  radius: 20 * feature.properties.scale
                });
              }
              return L.mapbox.marker.style(feature, latlon);
            }
          }).eachLayer(add).addTo(map);

          function add(l) {
            var properties = l.feature.properties;
            console.log(JSON.stringify(properties));
          }

          geojsonLayer.name = name;
          overlays.push(geojsonLayer);

        });

      }

    });
  }


});
