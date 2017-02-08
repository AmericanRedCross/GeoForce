<template>
    <div style="float:left">
        <div id="map"></div>
    </div>
</template>

<script>
    import state from '../store.vue'
    import axios from 'axios'
    import { UiTextbox } from 'keen-ui';

    var map;

    export default {
        name: 'leafletmap',
        mounted: function () {
            var vm = this;

            map = this.map = L.map('map').setView([0, 0], 3);
            L.tileLayer('https://a.tiles.mapbox.com/v3/americanredcross.map-dn70q0vb/{z}/{x}/{y}.png').addTo(this.map);

            // FeatureGroup is to store editable layers
            this.drawnItems = new L.FeatureGroup().addTo(this.map);

            // add leaflet draw
            this.map.addControl(new L.Control.Draw({
                position: 'topright',
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
                    simpleshape: false
                }
            }));

            // fires when user finishes create pin drop
            this.map.on(L.Draw.Event.CREATED, function (event) {
                var layer = event.layer;

                vm.drawnItems.addLayer(layer);

                // activate create pin template

                // get Admin Stack
                vm.getAdminStack(layer._latlng);

            });

            // fires when user selects "save" in edit mode
            this.map.on(L.Draw.Event.EDITSTOP, function (event){
                var feature = vm.sharedState.state._geoJSON;

                vm.EditModeActivated = false;
            });

            // fires after user has moved pin from one location to another
            this.map.on(L.Draw.Event.EDITMOVE, function (event){
                var layer = event.layer;
                var feature = vm.sharedState.state._geoJSON;

                // trigger popup

                // get Admin Stack
                vm.getAdminStack(layer._latlng);
            });

            // fires after use has selected edit button
            this.map.on(L.Draw.Event.EDITSTART, function (event){
                vm.EditModeActivated = true;
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
                EditModeActivated: false
            }
        },
        computed:  {
            adminStack () {
                return this.sharedState.state.adminStackResponse;
            },
            searchLocationResults () {
                return this.sharedState.state.searchLocationResults;
            },
            searchLocationResultType () {
                return this.sharedState.state.searchLocationResultType;
            }
        },
        watch: {
            adminStack: function (){
                if(this.EditModeActivated === false){
                    this.showMapFeature(this.adminStack)
                }
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
            showMapFeature: function(infeature) {
                var vm = this;
                var map = this.map;
                var level = infeature.level || null;

                var _geoJSONLayer = vm.sharedState.state._geoJSONLayer || vm.pbfSource;
                var _geoJSON = infeature.features[0];
                var source = vm.sharedState.state.searchLocationResultType;

                //clear the map
                if (_geoJSON && _geoJSONLayer) map.removeLayer(_geoJSONLayer);

                if (source == "GADM") {

                    var gjl = L.geoJson(_geoJSON.geometry);

                    //if level is specified, turn on only that level. Default to 2
                    if(level) {
                        var layerName = (level == "-1") ? "arc_regions_dissolved_geom" : "gadm" + level + "_geom_simplify_med";

                        this.showThisLayer(layerName, _geoJSON.properties.stack_guid, function(){
                            //After layer has been added to map
                            //zoom to layer
                            map.fitBounds(gjl.getBounds());
                        });
                    }
                    else{
                        this.showThisLayer("gadm0_geom_simplify_med", '', function() {
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
                        map.fitBounds(bounds, {maxZoom:9});
                    }

                // Custom results should be added to drawnItems layer
                } else if (_geoJSON && source === "Custom") {
                    //Pluck out the x,y and plot it
                    var x = _geoJSON.properties.centroid[1];
                    var y = _geoJSON.properties.centroid[0];
                    var layer = L.marker([x, y]);

                    vm.sharedState.setgeoJSONLayer(layer);
                    vm.drawnItems.addLayer(layer);
                    //zoom to layer
                    if (vm.sharedState.state._geoJSONLayer) {
                        map.setView(L.latLng(x, y), 8)
                    }
                }
            },
            getAdminStack: function(cords){

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
            }
        }
    }
</script>

<style>

    #map {
        float: left;
        width: 400px;
        height: 400px;
    }


</style>
