/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *     on Mon Mar 17 2014
 */

module.exports = angular.module('GeoAngular').controller('MapCtrl', function ($scope, $rootScope, $state, $stateParams, LayerConfig, VectorProvider, $http, $sce) {
  var map = L.map('map', {worldCopyJump: true});
  var firstLoad = true;

  $scope.params = $stateParams;
  $scope.blur = '';
  $scope.grayout = ''; //use this class to gray out the map, such as when the country selector menu is active
  $scope.legendObject = {}; //When PBF layers are drawn, grab the legendObject out of it so we know what classes are being drawn on the map

  //Add refresh mapp control
  addRefreshMapControl();

  $scope.toggleState = function (stateName) {
    var state = $state.current.name !== stateName ? stateName : 'main';
    $state.go(state, $stateParams);
  };

  var lastLayersStr = '';
  var layerDifference; //an object that stores whether or not new layers are added, or have been removed, and what their names are
  var lastBasemapUrl = null;
  var basemapLayer = null;
  var layersStr = null;
  var overlayNames = [];
  var overlays = [];
  var overlays_dictionary = {};
  var theme = null;
  var filters = null;

  function redraw() {
    forceGadm0();
    var lat = parseFloat($stateParams.lat) || 0;
    var lng = parseFloat($stateParams.lng) || 0;
    var zoom = parseFloat($stateParams.zoom) || 8;
    layersStr = $stateParams.layers || LayerConfig.redcross.url;
    var layers = layersStr.split(',');

    // first layer should always be treated as the basemap
    var basemap = LayerConfig.find(layers[0]) || LayerConfig.redcross.url;
    if (typeof basemap === 'string') {
      var basemapUrl = basemap;
    } else {
      var basemapUrl = basemap.url;
    }

    overlayNames = layers.slice(1);

    if (lastBasemapUrl !== basemapUrl && typeof map === 'object') {
      if (basemapLayer) {
        map.removeLayer(basemapLayer);
      }
      basemapLayer = L.tileLayer(basemapUrl).addTo(map);

      basemapLayer.on('load', function () {
        //Move to back
        basemapLayer.bringToBack();
      });

    }

    //Layers have changed.  Do something about it.
    if (lastLayersStr !== layersStr) {

      //See if new layers are added or if layers need to be removed.
      var lastLayersArray = lastLayersStr.split(',');
      var currentLayersArray = layersStr.split(',');

      if(lastLayersArray.length > currentLayersArray.length){
        //One or more layers has been removed.
        layerDifference = { type: 'removed', list: $(lastLayersArray).not(currentLayersArray).get()};
      }
      else{
        //One or more layers has been added
        layerDifference = { type: 'added', list: $(currentLayersArray).not(lastLayersArray).get()};

      }

      drawOverlays(layerDifference);

      $scope.defaults = {
        scrollWheelZoom: true
      };

      $scope.tiles = {
        url: basemapUrl
      };
    }

    var c = $scope.center = {
      lat: lat,
      lng: lng,
      zoom: zoom
    };

    if (typeof map === 'object' && (c.lat != 0 && c.lng != 0)) {
      map.setView([c.lat, c.lng], zoom);
    }

    if ((theme !== $stateParams.theme || filters !== $stateParams.filters) || firstLoad === true) {

      firstLoad = false;

      //Update local variables
      theme = $stateParams.theme;
      filters = $stateParams.filters;

      //Call the 'onChanged' function
      onThemeChanged($stateParams.theme);
      onFiltersChanged($stateParams.filters);
    }

    broadcastBBox();
    lastLayersStr = layersStr;
    lastBasemapUrl = basemapUrl;
  }

  //For vector tile choropleths, ask for new data .json from the server
  onThemeChanged($stateParams.theme);


  /***
   * Broadcast Listeners.
   */
  $scope.$on('route-update', function () {
    if ($scope.blur === 'blur' && $state.current.name !== 'landing') {
      $scope.blur = '';
    }

    var c;
    if (!$scope.center) {
      var lat = parseFloat($stateParams.lat) || 0;
      var lng = parseFloat($stateParams.lng) || 0;
      var zoom = parseFloat($stateParams.zoom) || 8;

      c = $scope.center = {
        lat: lat,
        lng: lng,
        zoom: zoom
      };
    }
    else {
      c = $scope.center;
    }

    var lat = c.lat.toFixed(6);
    var lng = c.lng.toFixed(6);
    var zoom = c.zoom.toString();
    if (mapMoveEnd) {
      mapMoveEnd = false;
    } else if ($stateParams.lat !== lat
      || $stateParams.lng !== lng
      || $stateParams.zoom !== zoom
      || $stateParams.layers !== layersStr
      || $stateParams.theme !== theme
      || $stateParams.filters !== filters) {

      console.log('map.js route-update Updating Map...');
      redraw();
    }

  });

  $rootScope.$on('themelabels-update', function () {
    //Call the function
    onThemeLabelChanged();

    //See if we should show theme badges/bubbles or not
    if($stateParams.themelabels !== null && $stateParams.themelabels !== undefined){
      $scope.themeLabelsChecked = $stateParams.themelabels;
    }
    else{
      //if not present, default to true
      $scope.themeLabelsChecked = 'true';
    }
  });


  $scope.$on('blur', function () {
    $scope.blur = 'blur';
  });

  //this takes in a WKT GeoJSON Extent geometry
  $scope.zoomToExtent = function (extent) {
    delete $stateParams['zoom-extent'];

    var southWest = {lat: extent[0][1], lng: extent[0][0]};
    var northEast = {lat: extent[2][1], lng: extent[2][0]};

    $scope.bounds = L.latLngBounds(southWest, northEast);

    //Zoom to bounds
    map.fitBounds($scope.bounds);
  };

  //This take a leaflet bounds object and handles it.
  delete $stateParams['zoom-extent'];
  $scope.zoomToBounds = function (bounds) {

    //Build new bounds object
    $scope.bounds = L.latLngBounds(bounds.getSouthWest(), bounds.getNorthEast());

    //Zoom to bounds
    map.fitBounds($scope.bounds);
  };


  function broadcastBBox() {
    //NH TODO Fixme. Find a better solution than a spin lock.
    if (!wait) {
      wait = true;
      setTimeout(function () {

        //Get the MIN/MAX Tile ZYX extents.
        //If they haven't chagned, then don't proceed.

        //When the page loads, no zoom or center has been set, so don't get bounds until that has happened
        if (!map.getZoom()) {
          return;
        }
        var tileBounds = getCurrentTileBounds(map);
        var zoom = map.getZoom();

        $scope.zoom = zoom;
        var minx = tileBounds.min.x;
        var maxx = tileBounds.max.x;
        var miny = tileBounds.min.y;
        var maxy = tileBounds.max.y;

        //Detect negative mins and set to 0
        if (minx < 0) minx = 0;
        if (miny < 0) miny = 0;

        //Check for extreme values greater than the tile bounds
        var extremeValue = Math.pow(2, zoom) - 1;

        if (maxx > extremeValue) maxx = extremeValue;
        if (maxy > extremeValue) maxy = extremeValue;

        var str = zoom + "," + minx + ',' +
          maxx + ',' +
          miny + ',' +
          maxy;

        VectorProvider.updateBBox(str);
        $rootScope.bbox = str; //save the bbox string to rootScope so VectorTile styling functions have access


        wait = false;
      }, 150);
    }

  }

  /**
   * Ripped From Leaflet TileLayer
   * Calculate the Max/Min ZYX Tile bounds.
   * Use those to snap BBox requests so we can cache.
   */

  function getCurrentTileBounds(map) {
    var bounds = map.getPixelBounds(),
      tileSize = 256; //TODO

    // tile coordinates range for the current view
    var tileBounds = L.bounds(
      bounds.min.divideBy(tileSize).floor(),
      bounds.max.divideBy(tileSize).floor());

    return tileBounds;
  }


  /**
   * Native Leaflet Map Object
   */

  window.map = map;
  map.on('moveend', function () { // move is good too
    var c = map.getCenter();
    var lat = c.lat.toFixed(6);
    var lng = c.lng.toFixed(6);
    var zoom = map.getZoom().toString();

    if ($stateParams.lat !== lat
      || $stateParams.lng !== lng
      || $stateParams.zoom !== zoom) {


      $stateParams.lat = lat;
      $stateParams.lng = lng;
      $stateParams.zoom = zoom;
      mapMoveEnd = true;
      $state.go($state.current.name, $stateParams);
      broadcastBBox();

      //Update ECOS Details - Usually this happens when tiles finish loading after a pan.  But sometimes if the tiles are loaded/cached, then the event doesn't fire after the map stops moving.
      //updateECOSData(overlayNames);
    }
  });

  map.on('zoomend', function(evt) {

    var zoom = evt.target.getZoom();

    //When zoom ends, swap css class on map div, so the labels will change size
    //remove old classes, just in case

    $("#map").removeClass("medium-label");
    $("#map").removeClass("large-label");


    //Add appropriate class basd on zoom
    if (zoom >= 0 && zoom <= 5) {
      $("#map").addClass("medium-label");
    }
    else if (zoom > 5 && zoom <= 13) {
      $("#map").addClass("large-label");
    }

  });

  $rootScope.$watch('level', function () {
     //if the GADM level changes (and is something), then need to fetch new ECOS data for this theme
     onThemeChanged();
  });

  //Connect the layout onresize end event
  try {
    window.addEventListener("resize", map.invalidateSize);
  } catch (e) {
    //Nothing
  }


  //Difference object tells us whether new items have been added, or if layers have been removed.
  function drawOverlays(differenceObject) {

    for (var i = 0, len = overlayNames.length; i < len; ++i) {
      var overlayName = overlayNames[i];
      var currOverlay = overlays[i];

      if (currOverlay && currOverlay.overlayName === overlayName) {
        continue; // layer is already there, continue on!
      }

      // remove the current layer that is not what should be that layer in the list
      else if (currOverlay && currOverlay._map) {
        if (currOverlay.destroyResource) currOverlay.destroyResource();
        map.removeLayer(currOverlay);
      }

      /**
       * Mapnik Vector Tile Format (.PBF)
       */
      if (typeof LayerConfig[overlayName] === 'object'
        && LayerConfig[overlayName].type.toLowerCase() === 'pbf') {

        var vecRes = VectorProvider.createResource(overlayName);
        if (vecRes) {
          var layer = vecRes.getLayer();
          layer.overlayName = overlayName;
        }
        else {
          //Not a valid layer.
          console.log(overlayName + " is not a layer specified in layerConfig.js");
          continue;
        }
      }

      // try for WMS (not a vector layer)
      // if things get more fancy with wms, it should get its own factory
      else if (typeof LayerConfig[overlayName] === 'object'
        && LayerConfig[overlayName].type.toLowerCase() === 'wms') {

        var cfg = LayerConfig[overlayName];

        if (cfg) {


          var layer = L.tileLayer.wms(cfg.url, {
            format: cfg.format || 'image/png',
            transparent: cfg.transparent || true,
            layers: cfg.layers
          });

        }
        else {
          //Not a valid layer.
          console.log(overlayName + " is not a layer specified in layerConfig.js");
          continue;
        }
      }


      /**
       * Tiles that are an overlay. OSM / Google / Mapnik tend to make tiles in this format.
       */
      else if (typeof LayerConfig[overlayName] === 'object'
        && LayerConfig[overlayName].type.toLowerCase() === 'xyz') {

        var cfg = LayerConfig[overlayName];
        if (cfg) {


          var layer = L.tileLayer(cfg.url, {
            opacity: cfg.opacity || 0.5
          });
        }

        else {
          //Not a valid layer.
          console.log(overlayName + " is not a layer specified in layerConfig.js");
          continue;
        }
      }

      /**
       * TMS flips the y. GeoServer often serves this.
       */
      else if (typeof LayerConfig[overlayName] === 'object'
        && LayerConfig[overlayName].type.toLowerCase() === 'tms') {
        var cfg = LayerConfig[overlayName];

        if (cfg) {
          var layer = L.tileLayer(cfg.url, {
            opacity: cfg.opacity || 0.5,
            tms: true
          });
        }

        else {
          //Not a valid layer.
          console.log(overlayName + " is not a layer specified in layerConfig.js");
          continue;
        }
      }

      // if its not wms, its a vector layer
      else {
        var vecRes = VectorProvider.createResource(overlayName);
        if (vecRes) {
          var layer = vecRes.getLayer();
        }
        else {
          //Not a valid layer.
          console.log(overlayName + " is not a layer specified in layerConfig.js");
          continue;
        }
      }

      if(layer){
        layer.overlayName = overlayName;
        layer.addTo(map);
        overlays[i] = layer;
        overlays_dictionary[overlayName] = layer; //keep a dictionary reference for faster fetching in UpdateECOSData

        //See which GADM level is currently loaded and store it in rootScope (assumes one at a time, which might go away at some point)
        if (LayerConfig.themeLayers.indexOf(overlayName) > -1) {
          //We have one of the theme layers (GADM), parse the name and find out which level we're dealing with as opposed to storing a seaprate level state param
          //If arcregions, then level is -1
          var level;
          if(overlayName === 'arcregions'){
            level = -1;
          }
          else{
            level = overlayName.substring(overlayName.length - 1, overlayName.length);
          }
          $rootScope.level = level; //Store in rootscope
        }
      }
    }


    if(differenceObject && differenceObject.type == 'removed'){
      // there are more overlays left in the list, less layers specified in route
      // we need to remove those too.
      var i = 0;
      for (var len2 = overlays.length; i < len2; ++i) {
        //If the overlay name exists in the list of layers to be removed, then remove it.
        if (overlays[i] && overlays[i].overlayName && differenceObject.list.indexOf(overlays[i].overlayName) > -1) {
          if(overlays[i].destroyResource) overlays[i].destroyResource();
          map.removeLayer(overlays[i]);
          delete overlays_dictionary[overlays[i].overlayName]; //delete dictionary reference for faster fetching in UpdateECOSData
          delete overlays[i];
        }
      }
    }
  }


  /**
   * When the theme label state changes, this function will be fired.
   * @param theme
   */
  function onThemeLabelChanged() {

    //Find the current theme level, if any
    var level = $rootScope.level; //set in drawoverlays

    if(!level) return; //no theme

    var layer = overlays_dictionary["gadm" + level];

    if (layer) {
      redrawThemeLayers(layer);
    }

  }

  /**
   * When the theme changes, this function will be fired.
   * @param theme
   */
  function onThemeChanged(theme) {

    if($stateParams.theme){
      forceGadm0();
    }

    //Find the current theme level, if any
    var level = $rootScope.level; //set in drawoverlays

    if (!level) return; //no theme

    var layer;

    if(level == -1){
      //Arc Regions
      layer = overlays_dictionary["arcregions"];
    }
    else{
      //Gadm
      layer = overlays_dictionary["gadm" + level];
    }


    if (layer) {

      if($stateParams.theme.toLowerCase() === 'none'){
          //Skip the mumbo jumbo.  Clear the cached ECOS data and redraw empty
          $rootScope.vtData = {};
          redrawThemeLayers(layer);
      }
      else{
        //For vector tile choropleths, ask for new data .json from the server
        getECOSProperties(function (data) {

          if (data && data.features) {

            var guids = {};

            angular.forEach(data.features, function (dataItem, dataKey) {
              guids[dataItem.properties.guid] = dataItem.properties;
            });

            $rootScope.vtData = guids; //Store the data to be merged with vector tile layer.  In config/vectortiles.js, the MVT choropleth layers will attempt to merge this data in when tiles finish loading (any time new tiles are requested, like zoomin/out/pan)

            redrawThemeLayers(layer);

          }
        })
      }

    }

  }



  function redrawThemeLayers(layer){
    var layers = layer.getLayers();

    if (!layers) return; //no layers have loaded yet.  This needs to wait until some tiles have loaded.

    var vtLayer;
    var vtLabelLayer;

    //TODO: Move this logic to a single location

    vtLayer = layers["GADM_2014"];
    vtLabelLayer = layers["GADM_2014_label"];


    if(vtLayer && vtLayer.features) {
      //Clear ecos property from MVTFeature
      clearFeatureProperties(vtLayer.features);
      //Clear ecos property from Label Layer
      clearFeatureProperties(vtLabelLayer.features);


      //Update Layer(s) style and redraw
      vtLayer.clearLayerFeatureHash(); //Force VTs to be reparsed.
      vtLabelLayer.clearLayerFeatureHash();
    }

    //Clear the MVT internal legend object before redrawing
    if(vtLayer) vtLayer.clearLegendObject();
    if(vtLabelLayer) vtLabelLayer.clearLegendObject();

    layer.redraw(true); //false means that this redraw won't trigger the onTilesLoaded event.

    //Fetch the legend after redraw
    //need to wait until all tiles finish drawing
    layer.options.onTilesLoaded = function(){



      if(vtLayer){
        var legendObject = vtLayer.getLegendObject();
        if(legendObject){
          //set it equal to the scope

          $scope.$apply(function() {
            $scope.legendObject = legendObject;
          });

          var newLegendObject = {};
          var ONA = $scope.UNOCHAIconLookup;

          // loop through lengend objcet
          // add to new legend object if:
          //    1. legend object has ONA lookup icon
          //    2. new legend object doesn't have same ONA lookup icon


          for(var i=0;i<Object.keys(legendObject).length;i++){
            if(typeof ONA[Object.keys(legendObject)[i]] !== 'undefined'){
              legendObject[Object.keys(legendObject)[i]].icon = ONA[Object.keys(legendObject)[i]].icon;
            }
            if(typeof legendObject[Object.keys(legendObject)[i]].icon !== 'undefined') {

              if(Object.keys(newLegendObject).length==0){
                newLegendObject[Object.keys(legendObject)[i]] = legendObject[Object.keys(legendObject)[i]];
              } else{

                for(var x=0;x<Object.keys(newLegendObject).length;x++){
                  Object.keys(legendObject).forEach(function(val){
                    if(newLegendObject[Object.keys(newLegendObject)[x]].icon.indexOf(legendObject[val].icon)==-1){
                      newLegendObject[Object.keys(legendObject)[i]] = legendObject[Object.keys(legendObject)[i]];
                    }
                  });
                }
              }

            }
          }



          $scope.newLegendObject = newLegendObject;

          // broadcast legend width for resize
          if($stateParams.theme == 'disasterType'){
            $scope.firstObject = legendObject[Object.keys(legendObject)[0]];
            var legendWidth = {width: document.getElementById('legend').offsetWidth};
            legendWidth.fold = (Object.keys(legendObject).length > 2);
            $rootScope.$broadcast('legend-width', legendWidth);
          }

          $scope.themeLabel = $rootScope.themeNameHash[$stateParams.theme];
          //$scope.legendObjectLabel = legendObject[Object.keys(legendObject)[0]].legendLabel.replace("#",""); //remove '#'
        }
      }

      if(vtLabelLayer){
        var bubbleLegendObject = vtLabelLayer.getLegendObject();
        if(bubbleLegendObject){
          //set it equal to the scope
          if($stateParams.theme.toLowerCase() == "disastertype"){
            //Disaster type has different bubble images
            $scope.bubbleLegendObject = bubbleLegendObject;
          }
          else{
            //Other themes use the same bubble type.
            //So just grab the first one
            var keys = Object.keys(bubbleLegendObject);
            if(bubbleLegendObject[keys[0]] && bubbleLegendObject[keys[0]].options && bubbleLegendObject[keys[0]].options.html){
              $scope.singleBubbleObject = $sce.trustAsHtml(bubbleLegendObject[keys[0]].options.html);
            }
          }
        }
      }


    }
  }


  /**
   * When the filters change, this function will be fired.
   * @param theme
   */
  function onFiltersChanged(filters){

  }

  /**
   * Force gadm0 on all disaster themes
   * @param theme
   */
  function forceGadm0(){
    //var theme = $stateParams.theme;
    //
    //if(theme.indexOf('disaster')!==-1 && $stateParams.layers.split(",")[1] !== 'gadm0'){
    //  var layersArray;
    //
    //  if($stateParams.layers){
    //    layersArray = $stateParams.layers.split(",");
    //  }
    //
    //  //Remove all GADM layers.
    //  layersArray.forEach(function (value, key) {
    //    if (LayerConfig.themeLayers.indexOf(value) > -1) {
    //      layersArray.splice(layersArray.indexOf(value), 1); //remove any GADMs
    //    }
    //  });
    //
    //  //Add in the gadm layer to the layers list in the stateparams.
    //  layersArray.push("gadm0");
    //  $stateParams.layers = layersArray.join(",");
    //
    //  var state = $state.current.name || 'main';
    //  $state.go(state, $stateParams);
    //}

  }

  function redrawMapOverlays(layerNames){
    map.eachLayer(function (layer) {
      if(layerNames.indexOf(layer.overlayName) > -1){
        layer.redraw();
      }
    });
  }

  /**
   * Take data/properties from the server and merge them in with a vector tiles layer.
   * @param ecosData - the data
   * @param layerNames - any layer names to apply the data to
   * @newTheme - boolean. If true, a new theme has been selected, so existing VT propeties will be cleared.  If false, then we can skip features that already have been 'filled' and worry about new ones.
   */
  function updateECOSData(ecosData, newTheme) {

      var layer = overlays_dictionary["gadm0"];

      if(layer){
        if (ecosData) {
          var layers = layer.getLayers();

          //Update VTFSource filter
          //layer.setFilter(function(mvt, ctx){
          //  //Filter checks if feature has ecos properties.
          //  return ($rootScope.vtData && $rootScope.vtData[mvt.properties.guid]) ? true : false;
          //})

          //If any features are returned, loop thru the vtfs and apply these values, restyle.
          mergeECOSProperties(layers, ecosData, newTheme);



          //Update Layer(s) style and redraw
          layer.setStyle(layer.style); //feed back in the same style
          layer.redraw(false); //false means that this redraw won't trigger the onTilesLoaded event.
        }
      }

  }

  /***
   *
   * When the app starts, or when the filters change, fetch the .json file that contains the counts for all of the districts for a given Administrative boundary level
   * Currently, each of these files will be small enough to bulk load them a single time, as opposed to when the user pans the map.
   * These files will be used to update the vector tiles choropleth map.
   *
   * @param $http
   * @param $rootScope
   * @param cb
   */
  function getECOSProperties (cb){
    //This should fetch data from the server that pertains to the features loaded in the current extent.
    //var url = "http://localhost:3001/services/custom/custom_operation?name=getaggregatedthemefeaturesbyextent&format=geojson&bbox=:bbox&theme=:theme&gadm_level=0&filters=:filters";

    var level = $rootScope.level;

    if (!level) return; //exit if no level

    var url = "../services/custom/custom_operation?name=getallaggregatedthemefeatures&format=geojson&theme=:theme&gadm_level=" + level + "&filters=:filters";

    if ($rootScope.$stateParams.filters) {
      filters = $rootScope.$stateParams.filters;
      //Add filters to URL.
      url = url.replace(":filters", filters);
    }
    else {
      url = url.replace("&filters=:filters", ""); //no filters.  Remove
    }

    var theme = $rootScope.$stateParams.theme || 'project';
    url = url.replace(":theme", theme);

    //When done, call the cb (callback) function
    $http.get(url, {cache: true}).success(cb).error(function (err) {
      console.log("err");
    });
  }

  //Take an MVTLayer(s) and add in properties from a web service call
  //newTheme is a boolean that tells us whether to clear existing properties or keep what we've got and just add to the set.
  function mergeECOSProperties(MVTLayers, data, newTheme){
    if (MVTLayers) {

      var fullStart = new Date();

      //Grab the current theme.
      var theme = ($rootScope && $rootScope.$stateParams && $rootScope.$stateParams.theme) || 'project';

      for (var layer in MVTLayers) {
        if (layer && MVTLayers[layer].features) {

          //optionally clear out old ECOS properties.
          if (newTheme === true) {
            //Clear ecos property from MVTFeature
            clearFeatureProperties(MVTLayers[layer].features);
            //"unlink" the data - set the linked property to false.
          }

          //Iterate over data, use the ID to attempt to line up data in MVTLayer.features dictionary (id is the key)
          angular.forEach(Object.keys(data), function (key) { //.map(function(item){ return !item.properties.isMapped; })
            var vtf = MVTLayers[layer].features[key];

            //mark as linked
            data.isLinked = true;

            if (vtf) {
              vtf.properties.theme = theme;
              vtf.properties.ecos_properties = {};
              vtf.properties.ecos_properties[theme] = data[key];
            }
          });

        }
      }

      var msDiff = new Date().getTime() - new Date(fullStart).getTime(); //Difference in ms
      console.log("Merge Time: " + msDiff);
    }
  }

  //As we swap ECOS properties out on the vector tile layer, clear out the old properties so we don't get residual theme values from old themes.
  function clearFeatureProperties(features){

    angular.forEach(features, function (vtf, vtfkey) {
      if(vtf.properties) {
        vtf.properties.ecos_properties = {};
        vtf.theme = "";
      }

      //Remove Old labels
      vtf.removeLabel();

    });

  }


  var opacity = 0.5;
  $scope.UNOCHAIconLookup = {

    "Meteorological - Tropical Cyclone": {icon: "icon-disaster_cyclone", color: "rgba(255,0,0," + opacity + ")"},
    "Floods": {icon: "icon-disaster_flood", color: "rgba(255,0,0," + opacity + ")"},
    "Tsunami, Volcano": {icon: "icon-disaster_tsunami", color: "rgba(255,0,0," + opacity + ")"},
    "Floods, Storm": {icon: "icon-disaster_flood", color: "rgba(255,0,0," + opacity + ")"},
    "Tsunami": {icon: "icon-disaster_tsunami", color: "rgba(255,0,0," + opacity + ")"},
    "Famine / Food Insecurity": {icon: "icon-cluster_food_security", color: "rgba(255,0,0," + opacity + ")"},
    "Drought": {icon: "icon-disaster_drought", color: "rgba(255,0,0," + opacity + ")"},
    "Meteorological - Tropical Cyclone;Hydrological - Floods": {icon: "icon-disaster_cyclone", color: "rgba(255,0,0," + opacity + ")"},
    "Food Insecurity": {icon: "icon-cluster_food_security", color: "rgba(255,0,0," + opacity + ")"},
    "Civil Unrest": {icon: "icon-people_rebel", color: "rgba(255,0,0," + opacity + ")"},
    "Floods, Tropical Storm": {icon: "icon-disaster_flood", color: "rgba(255,0,0," + opacity + ")"},
    "Complex Emergency": {icon: "icon-crisis_conflict", color: "rgba(255,0,0," + opacity + ")"},
    "Epidemic": {icon: "icon-disaster_epidemic", color: "rgba(255,0,0," + opacity + ")"},
    "Population Movement": {icon: "icon-crisis_population_displacement", color: "rgba(255,0,0," + opacity + ")"},
    "Climatological - Drought": {icon: "icon-disaster_drought", color: "rgba(255,0,0," + opacity + ")"},
    "Winter Storm": {icon: "icon-disaster_snowfall", color: "rgba(255,0,0," + opacity + ")"},
    "Tropical Storm": {icon: "icon-disaster_heavy_rain", color: "rgba(255,0,0," + opacity + ")"},
    "Earthquake, Tsunami": {icon: "icon-disaster_earthquake", color: "rgba(255,0,0," + opacity + ")"},
    "Hydrological - Floods": {icon: "icon-disaster_flood", color: "rgba(255,0,0," + opacity + ")"},
    "Landslide;Floods": {icon: "icon-disaster_landslide", color: "rgba(255,0,0," + opacity + ")"},
    "Earthquake": {icon: "icon-disaster_earthquake", color: "rgba(255,0,0," + opacity + ")"},
    "Landslide;Hydrological - Floods": {icon: "icon-disaster_landslide", color: "rgba(255,0,0," + opacity + ")"}

  }


  //Add a leaflet control to the map container that refreshes the state of the app
  function addRefreshMapControl(){

    L.easyButton('glyphicon glyphicon-refresh', //Css class
      function (){ }, //onClick function
      'Reset App', //Title
      map, //map control ref
      'btnResetMap', //id
      '/mapfolio/#/default' //a href (optional)
    )

  }

});
