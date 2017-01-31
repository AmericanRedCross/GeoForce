<template>
    <div style="float:left">
        <div id="map"></div>
    </div>
</template>

<script>
    import state from '../store.vue'

    export default {
        name: 'leafletmap',
        mounted: function () {
            this.map = L.map('map').setView([0, 0], 3);
            L.tileLayer('https://a.tiles.mapbox.com/v3/americanredcross.map-dn70q0vb/{z}/{x}/{y}.png').addTo(this.map);

            this.map.addControl(new L.Control.Draw({
                draw: {
                    circle: false,
                    polyline: false,
                    rectangle: false,
                    polygon: false,
                    simpleshape: false
                }
            }));

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
                }
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
              this.showMapFeature(this.adminStack)
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

                vm.sharedState.setgeoJSON(infeature.features[0]);

                var _geoJSONLayer = vm.sharedState.state._geoJSONLayer;
                var _geoJSON = vm.sharedState.state._geoJSON;
                var source = vm.sharedState.state.searchLocationResultType;

                //clear the map
                if (_geoJSONLayer) map.removeLayer(_geoJSONLayer);

                if (_geoJSON && source == "GeoDB") {

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
                        // Geonames results are displayed at markers
                else if (_geoJSON && source == "Geonames") {
                    //Pluck out the x,y and plot it
                    vm.sharedState.setgeoJSONLayer(L.featureGroup([L.marker([_geoJSON.properties.centroid[1], _geoJSON.properties.centroid[0]])]).addTo(map));
                    //zoom to layer
                    if (vm.sharedState.state._geoJSONLayer) {
                        var bounds = vm.sharedState.state._geoJSONLayer.getBounds();
                        map.fitBounds(bounds, {maxZoom:7});
                    }
                }
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
