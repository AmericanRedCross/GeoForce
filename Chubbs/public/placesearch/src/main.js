var Vue  = require('vue');
var App = require('./app.vue');
var store = require('./store.vue');

Vue.config.devtools = true;

new Vue({
  el: '#app',
  store,
  render: h => h(App)
});


// var app = new Vue({
//   el: '#app',
//   data: {
//     hostIp: "http://54.187.215.30",
//     message: "Hello Vue!",
//     pbfSource: {},
//     _geoJSONLayer:{},
//     _geoJSON:[],
//     map:{},
//     _chosenFeature:{},
//     searchQuery: "",
//     searchResponse: [],
//     pbfStyle: function(feature){
//       var style = {};
//
//       var type = feature.type;
//       switch (type) {
//         case 1: //'Point'
//           style.color = 'rgba(252,146,114,0.6)';
//           style.radius = 5;
//
//         case 2: //'LineString'
//           style.color = 'rgba(161,217,155,0.8)';
//           style.size = 3;
//
//         case 3: //'Polygon'
//           style.color = 'rgba(149,139,255,0.4)';
//           style.outline = {
//             color: 'rgb(20,20,20)',
//             size: 2
//           };
//       }
//
//       if (feature.layer.name === 'gadm0') {
// //            style.label = function() {
// //                return feature.properties.name_0;
// //            };
//       }
//
//       return style;
//     }
//   },
//
//   // mounted fires after component is created and mounted to DOM
//   created: function () {
//
//     this.map = L.map('map').setView([0, 0], 3);
//     L.tileLayer('https://a.tiles.mapbox.com/v3/americanredcross.map-dn70q0vb/{z}/{x}/{y}.png').addTo(this.map);
//
//     this.map.addControl(new L.Control.Draw({
//       draw: {
//         circle: false,
//         polyline: false,
//         rectangle: false,
//         polygon: false,
//         simpleshape: false
//       }
//     }));
//
//     this.showThisLayer("gadm0_geom_simplify_med");
//   },
//   methods: {
//     showThisLayer: function(name, guid, cb) {
//       var pbfSource = this.pbfSource;
//       var map = this.map;
//
//       if(pbfSource) map.removeLayer(pbfSource);
//       pbfSource = null;
//       pbfSource = this.createGADMVecorTileLayer(name, guid);
//       pbfSource.style = this.pbfStyle;
//       map.addLayer(pbfSource);
//       //Callback when layer is added to map
//       if(cb) cb();
//     },
//     createGADMVecorTileLayer: function(name, guid){
//       return new L.TileLayer.MVTSource({
//         //url: "../services/vector-tiles/GADM/{z}/{x}/{y}.pbf",
//         url: this.hostIp  + "/services/postgis/" + name + "/vector-tiles/{z}/{x}/{y}.pbf?fields=guid" + (guid ? "&where=guid%3D%27" + guid + "%27" : ""), //filter by guid if present
//         debug: false,
//         clickableLayers: [],
//         getIDForLayerFeature: function(feature) {
//           return feature.properties.guid;
//         }
//       });
//     },
//     sendBackResult: function(featureid, x, y) {
//       //retrieve the returnUrl parameter from the querystring.
//       //Assume it's there.
//       if (urlParams && urlParams.returnUrl) {
//         var url = urlParams.returnUrl; //encodeURIComponent(urlParams.returnUrl);
//         var args = {};
//         //Always add searchterm into querystring
//         if (featureid) {
//           url += "&featureid=" + featureid;
//         }
//         else {
//           if (_chosenFeature) url += "&placename=" + _chosenFeature.properties.name;
//           url += "&x=" + x + "&y=" + y;
//         }
//
//         //redirect
//         window.location = url;
//       }
//       else {
//         //What do do if we don't get a return Url?
//       }
//     },
//     showMapFeature: function(infeature, level) {
//       var _geoJSONLayer = this._geoJSONLayer;
//       var _geoJSON = this._geoJSON;
//
//       //clear the map
//       if (_geoJSONLayer) map.removeLayer(_geoJSONLayer);
//
//       if (_geoJSON && _geoJSON.source == "GeoDB") {
//
//         var gjl = L.geoJson(_geoJSON.features[0].geometry);
//
//
//         //if level is specified, turn on only that level. Default to 2
//         if(level) {
//           var layerName;
//           if(level == '-1') {
//             layerName = "arc_regions_dissolved_geom";
//           }
//           else{
//             layerName = "gadm" + level + "_geom_simplify_med";
//
//           }
//
//           showThisLayer(layerName, _geoJSON.features[0].properties.stack_guid, function(){
//             //After layer has been added to map
//             //zoom to layer
//             map.fitBounds(gjl.getBounds());
//           });
//         }
//         else{
//           showThisLayer("gadm0_geom_simplify_med", '', function() {
//             //After layer has been added to map
//             //zoom to layer
//             map.fitBounds(gjl.getBounds());
//           });
//         }
//       }
//       else if (_geoJSON && _geoJSON.source == "Geonames") {
//         //Pluck out the x,y and plot it
//         this._geoJSONLayer = L.featureGroup([L.marker([infeature.properties.lat, infeature.properties.lng])]).addTo(map);
//         //zoom to layer
//         if (_geoJSONLayer) {
//           var bounds = _geoJSONLayer.getBounds();
//           map.fitBounds(bounds);
//         }
//       }
//     },
//     handleAdminStackResponse: function(data, level) {
//       $("#stackWrapper").css({ "display": "block" });
//       $("#adminResult").html(""); //clear admin panel
//
//       //Store the object for later use.
//       this._geoJSON = data;
//       this._geoJSON.source = "GeoDB";
//
//       //iterate over Admin Stack responses
//       if (data.features.length >= 1) {
//         $.each(data.features, function (i, feature) {
//           var div = $("<span class='adminResultitem'></span>").appendTo("#adminResult");
//
//           //Write out all properties.
//           $.each(feature.properties, function (key, value) {
//             if (key === "stack_guid") {
//               console.log("not displaying " + key + ": " + value);
//             } else if (key === "centroid") {
//               var x = parseFloat(value[0]).toFixed(6);
//               var y = parseFloat(value[1]).toFixed(6);
//               $("<div><span style='font-weight:600;'>" + key + ": </span> " + x + ", " + y + "</div>").appendTo(div);
//             } else {
//               $("<div><span style='font-weight:600;'>" + key + ": </span> " + value + "</div>").appendTo(div);
//             }
//           });
//
//           showMapFeature(feature, level);
//           $("#uxChooseThis").prop("disabled", false); //enabled the second option box
//           $("#uxChooseThis").css("display", "block");
//         });
//       } else {
//         $("#adminResult").html("No Admin Stack Available");
//         $("#uxChooseThis").prop("disabled", false);
//         $("#uxChooseThis").css("display", "none");
//       }
//
//     },
//     startGetAdminStackByXY: function(item) {
//       var postArgs = {
//         wkt: "POINT(" + item.lng + " " + item.lat + ")",
//         datasource: "GADM", //Default Search for x,y admin stack is GADM
//         format: "GeoJSON",
//         returnGeometry: "yes"
//       };
//
//       var url = 'http://127.0.0.1:3000/services/getAdminStack';
//
//       //Send POST,
//       $.getJSON(url, postArgs).done(function (data) {
//         handleAdminStackResponse(data);
//       }).fail(function (jqxhr, textStatus, error) {
//         var err = textStatus + ', ' + error;
//         console.log("Request Failed: " + err);
//       });
//     },
//     startGetAdminStackById: function(item, level) {
//       var postArgs = {
//         featureid: item.featureid,
//         format: "GeoJSON",
//         returnGeometry: "yes"
//       };
//
//       $("#adminResult").html("");
//       var loading = new loader("#adminResult");
//
//
//       var url = 'http://127.0.0.1:3000/services/getAdminStack';
//
//       //Send POST, using JSONP
//       $.getJSON(url, postArgs).done(function (data) {
//         handleAdminStackResponse(data, level);
//       }).fail(function (jqxhr, textStatus, error) {
//         var err = textStatus + ', ' + error;
//         console.log("Request Failed: " + err);
//       }).always(function () { loading.kill(); });
//     },
//     handleNameSearchResponse: function(data) {
//
//       $("#result").html(""); //clear name result panel
//       $("#adminResult").html(""); //clear admin panel
//       $("#stackWrapper").hide(); // hide admin title and choose location button
//
//       if(data && data.features){
//         if(data.features.length == 0){
//           //Let user know there are no matches
//           $("#result").html("No matches found. Please try another search term.");
//           return;
//         }
//       }
//
//       //Let user know they can click on results.
//       $("#result").html('<div style="padding: 5px;margin-bottom: 10px;">Click on a match below to see a preview of the location.</div>'); //clear name result panel
//
//       //Build result table
//       var table = $("<table><thead><tr><th>Name</th><th>Level</th><th>Source</th></tr></thead></table>").appendTo("#result");
//       var tbody = $("<tbody></tbody>").appendTo(table);
//
//       //Iterate over name search matches
//       $.each(data.features, function (i, feature) {
//         var tr = $("<tr class='result'></tr>").appendTo(tbody);
//
//         //if source is IRC GeoDB, then do this.
//         if (data.source == "GeoDB") {
//           //bind a click event to this tr.
//           tr.click(function () {
//             //send a post to the 2nd part of the web service to get the admin stacks using the ID, level and source
//             _chosenFeature = feature;
//             startGetAdminStackById(feature.properties, feature.properties.level);
//             //showMapFeature(feature);
//           });
//
//           //Write out other information for this row for the user to see
//           var linktd = $("<td>" + feature.properties.fullname + "</td>").appendTo(tr);
//           $("<td style='text-align:center'>" + feature.properties.level + "</td><td>" + feature.properties.source + "</td>").appendTo(tr);
//
//         }
//         else if (data.source == "Geonames") {
//           //bind a click event to this tr.
//           tr.click(function () {
//             //send a post to the 2nd part of the web service to get the admin stacks using the Lat Lng
//             _chosenFeature = feature;
//             startGetAdminStackByXY(feature.properties);
//             //showMapFeature(feature);
//           });
//
//           //Write out other information for this row for the user to see
//           var linktd = $("<td>" + feature.properties.name + (feature.properties.adminName1 ? ", " + feature.properties.adminName1 : "") + (feature.properties.countryName ? ", " + feature.properties.countryName : "") + "</td>").appendTo(tr);
//           $("<td>" + feature.properties.fcodeName + "</td><td>Geonames</td>").appendTo(tr);
//         }
//
//
//         //only show a fixed amount of results
//         if (i == 10) {
//           return false;
//         }
//       });
//     },
//     startNameSearch: function() {
//       //clear the map
//       if (this._geoJSONLayer) map.removeLayer(this._geoJSONLayer);
//
//
//       //diasable the select location button DK
//       $("#uxChooseThis").prop("disabled", true); //enabled the second option box
//
//       var searchTerm = this.searchQuery;
//
//       if (!searchTerm) {
//         $("#result").html("Please enter a search term.");
//         return;
//       }
//
//       //Don't allow commas
//       if (searchTerm.indexOf(",") > -1) {
//         $("#result").html("Please enter a placename with no commas.  <span style='font-style:italic'>Example: Port-au-Prince</span>");
//         return;
//       }
//
//       // $("#result").html("");
//       var loading = new loader("#result");
//
//       var postArgs = {
//         searchterm: searchTerm,
//         format: "GeoJSON",
//         returnGeometry: "no"
//       };
//
//       var url = this.hostIp + "/services/nameSearch";
//
//       //Send POST, using JSONP
//       $.getJSON(url, postArgs).done(function (data) {
//
//         this.searchResponse = data;
//
//       }).fail(function (jqxhr, textStatus, error) {
//         var err = textStatus + ', ' + error;
//         console.log("Request Failed: " + err);
//         $("#result").html("There is a problem with the search service.");
//       }).always(function () {
//         loading.kill();
//       });
//     }
//   }
// });
