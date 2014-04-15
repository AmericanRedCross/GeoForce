/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *     on Mon Mar 17 2014
 */

angular.module('GeoAngular').controller('MapCtrl', function ($scope, $rootScope, $state, $stateParams, leafletData, LayerConfig, VectorProvider) {
  console.log('MapCtrl');

  var lastLayersStr = '';
  var title = $scope.title = $stateParams.title || 'World';
  $scope.blur = '';
  $scope.grayout = ''; //use this class to gray out the map, such as when the country selector menu is active

  //Init activeTheme property
  $scope.activeTheme = "Projects";


  $scope.toggleState = function(stateName) {
    var state = $state.current.name !== stateName ? stateName : 'main';
    $state.go(state, $stateParams);
  };

  var layersStr = null;
  var overlayNames = [];

  function redraw() {
    $scope.title = $stateParams.title || 'World';
    var lat = parseFloat($stateParams.lat)   || 0;
    var lng = parseFloat($stateParams.lng)   || 0;
    var zoom = parseFloat($stateParams.zoom) || 2;
    layersStr = $stateParams.layers || LayerConfig.redcross;
    var layers = layersStr.split(',');

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

    broadcastBBox();
    lastLayersStr = layersStr;
  }
  redraw();


  /***
   * Broadcast Listeners.
   */
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
        || $stateParams.title  !== title
        || $stateParams.layers !== layersStr ) {

      console.log('map.js route-update Updating Map...');
      redraw();
    }

  });

  $scope.$on('blur', function() {
    $scope.blur = 'blur';
  });

  $scope.zoomToExtent = function(extent, title){
    $stateParams.title = title;
    delete $stateParams['zoom-extent'];
    $scope.bounds = {
      northEast: { lat: extent[2][1], lng: extent[2][0] },
      southWest: { lat: extent[0][1], lng: extent[0][0] }
    };
  };


  function broadcastBBox() {
    //NH TODO Fixme. Find a better solution than a spin lock.
    if (!wait) {
      wait = true;
      setTimeout(function(){
        leafletData.getMap().then(function (map) {
          var bounds = map.getBounds();
          var west = bounds.getWest();
          var south = bounds.getSouth();
          var east = bounds.getEast();
          var north = bounds.getNorth();

          if (west < -180) west = -180;
          if (south < -90) south = -90;
          if (east > 180) east = 180;
          if (north > 90) north = 90;

          var str = west.toFixed(6) + ',' +
            south.toFixed(6) + ',' +
            east.toFixed(6) + ',' +
            north.toFixed(6);

          VectorProvider.updateBBox(str);
        });
        wait = false;
      }, 150);
    }

  }


  /**
   * Native Leaflet Map Object
   */
  leafletData.getMap().then(function (map) {
    debug.map = map;
    map.on('moveend', function () { // move is good too
      var c = map.getCenter();
      var lat = c.lat.toFixed(6);
      var lng = c.lng.toFixed(6);
      var zoom = map.getZoom().toString();

      if (   $stateParams.lat  !== lat
        || $stateParams.lng  !== lng
        || $stateParams.zoom !== zoom ) {

        console.log('map: lat,lng,zoom !== $stateParams');
        $stateParams.lat = lat;
        $stateParams.lng = lng;
        $stateParams.zoom = zoom;
        $state.go($state.current.name, {
          lat: lat,
          lng: lng,
          zoom: zoom
        });
        broadcastBBox();
      }

    });

    map.on('zoomend', function() {
      broadcastBBox();
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
        var layer = vecRes.getLayer();

        // NH TODO Only works for KML. Think through this better.
        vecRes.eachLayer(function (l) {
          var props = l.feature.properties;

        });


        debug.layer = layer;

        layer.addTo(map);
//        broadcastBBox();
      }

    });
  }

	/*
	Handling Theme Menu Animations
	 */

	$scope.toggleThemeMenu = function(){
		var flippedOut = $(".menu-selection .dropdown").hasClass("open");

		if(flippedOut == false){
			$scope.unfurlThemes();
		}
		else{
			$scope.refurlThemes();
		}
	}

	$scope.unfurlThemes = function(){
		$scope.refurlThemes();
		//Try jQuery to add an 'on' class to each of the theme LI elements on a timer.
		$($('#ThemeSelectorMenu .dropdown-menu li').get().reverse()).each(function(index){
			var self = this;
			setTimeout(function () {
				$(self).addClass("on");
			}, index*150);
		});
	}

	//Refurl?
	$scope.refurlThemes = function(){
		//Try jQuery to remove the 'on' class to each of the theme LI elements on a timer.
		$('#ThemeSelectorMenu .dropdown-menu li').removeClass("on");
	}

	/*
	End Theme Menu Animations
	 */

});