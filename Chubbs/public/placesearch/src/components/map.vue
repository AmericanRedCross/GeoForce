<template>
    <div class="map-container">
        <div class="newlocation-container">
            <ui-button color="red" raised :size="size" class="btn" v-on:click="sharedState.setCreateLocationActivated(true)">+ New
                Location
            </ui-button>
        </div>
        <div id="map"></div>
    </div>
</template>

<script>
    import state from '../store.vue'
    import axios from 'axios'

    var map;

    export default {
        name: 'leafletmap',
        mounted: function () {

            var vm = this;
            map = this.map = L.map('map').setView([0, 0], 3);
            L.tileLayer('https://a.tiles.mapbox.com/v3/americanredcross.map-dn70q0vb/{z}/{x}/{y}.png').addTo(this.map);

            // FeatureGroup is to store editable layers
            this.drawnItems = new L.FeatureGroup().addTo(map);

            // fires when user finishes create pin drop
            this.map.on(L.Draw.Event.CREATED, function (event) {
                var layer = event.layer;

                vm.drawnItems.addLayer(layer);

                if (vm.drawnItems._map === null) vm.drawnItems.addTo(vm.map);
                // activate create pin template

                vm.sharedState.setCreateLocationPinDropped(true);
                vm.sharedState.setCreateLocationActivated(false);

                // get Admin Stack
                vm.getAdminStack(layer._latlng);
                // set Location lat_lng
                vm.sharedState.setCustomLocationCoordinates(layer._latlng)

            });

            // fires when user selects "CANCEL" or "SAVE"
            this.map.on(L.Draw.Event.EDITSTOP, function (event) {

                // only set as activated if the edit Location Pin has been onto the map
                if (vm.sharedState.editLocationPinDropped) {
                    vm.sharedState.setEditLocationActivated(true);
                }
            });

            // fires after user has moved pin from one location to another
            this.map.on(L.Draw.Event.EDITMOVE, function (event) {
                var layer = event.layer;

                vm.drawnItems.addLayer(layer);
                vm.sharedState.setEditLocationPinDropped(true);

                // notify listeners that user is creating a NEW location
                if(!vm.editLocationActivated){
                    // set pin propped to true
                    vm.sharedState.setCreateLocationPinDropped(true);
                }

                // get Admin Stack
                vm.getAdminStack(layer._latlng);
                // set Location lat_lng
                vm.sharedState.setCustomLocationCoordinates(layer._latlng);
            });

            // fires after use has selected edit button
            this.map.on(L.Draw.Event.EDITSTART, function (event) {

                if(!vm.sharedState.createLocationActivated) {
                    vm.sharedState.setEditLocationActivated(true);
                    vm.sharedState.setEditLocationPinDropped(false);

                    // we're no longer in create location mode, so set to false
                    vm.sharedState.setCreateLocationPinDropped(false);
                }
            });

            // fires after use has selected start button
            this.map.on(L.Draw.Event.DRAWSTART, function (event) {

                // only set edit activate true if new location is not activated
                if (!vm.sharedState.state.createLocationActivated) vm.sharedState.setEditLocationActivated(true);

                // set pin dropped to false
                vm.sharedState.setCreateLocationPinDropped(false);
            });

            this.showThisLayer("gadm0_geom_simplify_med");

        },
        data () {
            return {
                map: {},
                sharedState: state,
                pbfSource: {},
                pbfStyle: function (feature) {
                    var style = {};

                    var type = feature.type;
                    switch (type) {
                        case 1: //'Point'
                            style.color = 'rgba(252,146,114,0.6)';
                            style.radius = 5;

                        case 2: //'LineString'
                            style.color = 'rgba(161,217,155,0.8)';
                            style.size = 3;

                        case 3: //'Polygon'
                            style.color = 'rgba(149,139,255,0.4)';
                            style.outline = {
                                color: 'rgb(20,20,20)',
                                size: 2
                            };
                    }

                    if (feature.layer.name === 'gadm0') {
                        //            style.label = function() {
                        //                return feature.properties.name_0;
                        //            };
                    }

                    return style;
                },
                drawnItems: {},
                mapControl: {},
                mvtSource: {}
            }
        },
        computed: {
            adminStack () {
                return this.sharedState.state.adminStackResponse;
            },
            searchLocationResults () {
                return this.sharedState.state.searchLocationResults;
            },
            searchLocationResultType () {
                return this.sharedState.state.searchLocationResultType;
            },
            createLocationActivated () {
                return this.sharedState.state.createLocationActivated;
            },
            createLocationPinDropped () {
                return this.sharedState.state.createLocationPinDropped;
            },
            editLocationActivated () {
                return this.sharedState.state.editLocationActivated;
            },
            editLocationPinDropped () {
                return this.sharedState.state.editLocationPinDropped;
            }
        },
        watch: {
            adminStack: function () {
                if (!this.createLocationPinDropped && !this.editLocationPinDropped) {
                    this.showMapFeature(this.adminStack);
                }
            },
            createLocationActivated: function () {
                (this.createLocationActivated) ? this.activateCreateLocation() : this.deactivateMapControls();
            },
            searchLocationResults: function () {
                this.deactivateMapControls();
            },
            editLocationActivated: function () {
                if (this.editLocationActivated){
                    this.activateEditLocation();
                } else {
                    this.deactivateMapControls();
                }
            },
            createLocationPinDropped: function () {
                this.deactivateMapControls();
            },
            editLocationPinDropped: function () {
                this.deactivateMapControls();
            }

        },
        methods: {
            showThisLayer: function (name, guid, cb) {
                var map = this.map;

                if (this.pbfSource) map.removeLayer(this.pbfSource);
                this.pbfSource = null;
                this.pbfSource = this.createGADMVecorTileLayer(name, guid);
                this.pbfSource.style = this.pbfStyle;
                map.addLayer(this.pbfSource);
                //Callback when layer is added to map
                if (cb) cb();
            },
            createGADMVecorTileLayer: function (name, guid) {
                var hostIp = this.sharedState.config.hostIp;

                return new L.TileLayer.MVTSource({
                    //url: "../services/vector-tiles/GADM/{z}/{x}/{y}.pbf",
                    url: hostIp + "/services/postgis/" + name + "/vector-tiles/{z}/{x}/{y}.pbf?fields=guid" + (guid ? "&where=guid%3D%27" + guid + "%27" : ""), //filter by guid if present
                    debug: false,
                    clickableLayers: [],
                    getIDForLayerFeature: function (feature) {
                        return feature.properties.guid;
                    }
                });
            },
            showMapFeature: function (infeature) {
                var vm = this;
                var map = this.map;
                var level = infeature.level || null;

                var _geoJSONLayer = vm.sharedState.state._geoJSONLayer || vm.pbfSource;
                var _geoJSON = infeature.features[0];
                var source = vm.sharedState.state.searchLocationResultType;

                //clear the map
                if (_geoJSON && _geoJSONLayer) map.removeLayer(_geoJSONLayer);

                if (vm.drawnItems.hasOwnProperty("_layers") && !vm.sharedState.state.createLocationPinDropped) {
                    vm.map.removeLayer(vm.drawnItems);
                }

                if (source == "GADM") {

                    var gjl = L.geoJson(_geoJSON.geometry);

                    //if level is specified, turn on only that level. Default to 2
                    if (level) {
                        var layerName = (level == "-1") ? "arc_regions_dissolved_geom" : "gadm" + level + "_geom_simplify_med";

                        this.showThisLayer(layerName, _geoJSON.properties.stack_guid, function () {
                            //After layer has been added to map
                            //zoom to layer
                            map.fitBounds(gjl.getBounds());
                        });
                    }
                    else {
                        this.showThisLayer("gadm0_geom_simplify_med", '', function () {
                            //After layer has been added to map
                            //zoom to layer
                            map.fitBounds(gjl.getBounds());
                        });
                    }
                }

                // Geonames results are displayed as markers
                else if (_geoJSON && source === "Geonames") {
                    //Pluck out the x,y and plot it
                    vm.sharedState.setgeoJSONLayer(L.featureGroup([L.marker([_geoJSON.properties.centroid[1], _geoJSON.properties.centroid[0]])]).addTo(map));
                    //zoom to layer
                    if (vm.sharedState.state._geoJSONLayer) {
                        var bounds = vm.sharedState.state._geoJSONLayer.getBounds();
                        map.fitBounds(bounds, {maxZoom: 9});
                    }

                    // Custom results should be added to drawnItems layer
                } else if (_geoJSON && source === "Custom") {
                    //Pluck out the x,y and plot it
                    var x = _geoJSON.properties.centroid[1];
                    var y = _geoJSON.properties.centroid[0];
                    var layer = L.marker([x, y]);

                    vm.sharedState.setgeoJSONLayer(layer);

                    // remove pbf source layer
                    this.map.removeLayer(this.pbfSource);

                    // remove all markers
                    vm.drawnItems.eachLayer(function (l){
                        if(l instanceof L.Marker) vm.drawnItems.removeLayer(l);
                    });

                    vm.drawnItems.addLayer(layer);

                    if(vm.drawnItems._map === null || typeof vm.drawnItems._map === "undefined") vm.drawnItems.addTo(map);

                    //zoom to layer
                    if (vm.sharedState.state._geoJSONLayer) {
                        map.setView(L.latLng(x, y), 8)
                    }
                }
            },
            getAdminStack: function (cords) {

                var hostIp = this.sharedState.config.hostIp;
                var vm = this;

                var postArgs = {
                    wkt: "POINT(" + cords.lng + " " + cords.lat + ")",
                    datasource: "GADM", //Default Search for x,y admin stack is GADM
                    format: "GeoJSON",
                    returnGeometry: "yes"
                };

                axios.post(hostIp + '/services/getAdminStack', postArgs)
                        .then(function (response) {
                            vm.sharedState.setAdminStackResponse(response.data);
                        })
                        .catch(function (error) {
                            console.log(error);
                        });
            },
            activateCreateLocation: function () {
                var vm = this;
                var _geoJSONLayer = vm.sharedState.state._geoJSONLayer || vm.pbfSource;

                // add leaflet draw controls
                if (vm.mapControl._map === null || typeof vm.mapControl._map === "undefined") {

                    vm.drawnItems.eachLayer(function (l){
                        if(l instanceof L.Marker) vm.drawnItems.removeLayer(l);
                    });

                    vm.mapControl = new L.Control.Draw({
                        position: 'topleft',
                        edit: {
                            featureGroup: this.drawnItems,
                            poly: {
                                allowIntersection: false
                            }
                        },
                        draw: {
                            circle: false,
                            polyline: false,
                            rectangle: false,
                            polygon: false,
                            simpleshape: false,
                            marker: true
                        }
                    });

                    // add leaflet draw
                    vm.map.addControl(vm.mapControl);
                }

                //TODO clear the map if vector tile layer is On
                if (_geoJSONLayer) vm.map.removeLayer(_geoJSONLayer);

                // disable edit location state
                vm.sharedState.setEditLocationActivated(false);
                vm.sharedState.setEditLocationPinDropped(false);

            },
            activateEditLocation: function () {
                var vm = this;

                if ((vm.mapControl._map === null || typeof vm.mapControl._map === "undefined") && vm.editLocationActivated) {

                    vm.mapControl = new L.Control.Draw({
                        position: 'topleft',
                        edit: {
                            featureGroup: this.drawnItems,
                            poly: {
                                allowIntersection: false
                            }
                        },
                        draw: {
                            circle: false,
                            polyline: false,
                            rectangle: false,
                            polygon: false,
                            simpleshape: false,
                            marker: true
                        }
                    });

                    // add leaflet draw
                    this.map.addControl(vm.mapControl);
                } else {
                    this.deactivateMapControls();
                }

            },
            deactivateMapControls : function (){
                // first check if we're in the right state to remove map controls
                if (!this.editLocationActivated && !this.editLocationPinDropped && !this.createLocationActivated &&!this.createLocationPinDropped){
                    if (this.mapControl._map !== null && typeof this.mapControl._map !== "undefined") this.map.removeControl(this.mapControl);
                    // remove leaflet draw & pbfsource layer from map
                    this.map.removeLayer(this.drawnItems);
                    this.map.removeLayer(this.pbfSource);
                }
            }
        }
    }
</script>

<style>

    #map {
        width: 400px;
        height: 400px;
    }

    .newlocation-container {
        width: 100%;
    }

    .newlocation-container .btn {
        float: left;
        margin: 10px 0 10px 0;
    }

    .map-container {
        width:40%;
        float: left;
    }


</style>
