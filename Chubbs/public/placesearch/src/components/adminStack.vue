<template>
    <div id="stackWrapper" v-if="adminStack.features">
        <div class="chooseButton-wrapper" v-if="adminStack.features.length > 0">
            <ui-button class="chooseButton" raised @click="sendBackResult()">Choose This Location</ui-button>
        </div>
        <div v-show="adminStack.features.length > 0" style="font-weight:600;">
            Administrative Boundary Hierarchy:
        </div>
        <div id="adminResult" v-if="adminStack.features.length > 0">
            <div v-for="(val, key, index) in adminStack.features[0].properties">
                <div v-if="key != 'centroid'">{{key}}: {{val}}</div>
                <div v-if="key === 'centroid'">{{key}}: {{val[0]}}, {{val[1]}}</div>
            </div>
        </div>
        <div class="chooseButton-wrapper" v-if="adminStack.features.length === 0">No Admin Stack Available</div>

        <ui-snackbar-container position="right" ref="snackbarContainer"></ui-snackbar-container>

    </div>
</template>

<script>
    import state from '../store.vue'
    import axios from 'axios'

    export default {
        name: 'AdminStack',
        data () {
            return {
                sharedState: state,
                urlParams: []
            }
        },
        mounted: function () {
            this.getUrlParams();
        },
        computed: {
            // listen for changes in both types of admin stack responses
            adminStack () {
                return this.sharedState.state.adminStackResponse;
            },
            _geoJSON () {
                return this.sharedState.state._geoJSON;
            },
            _geoJSONLayer () {
                return this.sharedState.state._geoJSONLayer;
            }
        },
        methods: {
            //Pass back the ID or x,y to ECOS
            sendBackResult: function () {
                // get feature
                var feature = this._geoJSON;

                //retrieve the returnUrl parameter from the querystring.
                //Assume it's there.
                if (this.urlParams && this.urlParams.returnUrl) {
                    var url = this.urlParams.returnUrl; //encodeURIComponent(urlParams.returnUrl);

                    //Always add searchterm into querystring
                    // check for source type
                    if (feature.properties.source === "GADM" && typeof feature.properties.featureid !== "undefined") {
                        url += "&featureid=" + feature.properties.featureid;
                    } else {
                        // custom and geoname features
                        var latLng = this._geoJSONLayer._latlng;
                        url += "&placename=" + feature.properties.name;
                        url += "&x=" + latLng.lng + "&y=" + latLng.lat + "&customid=" + feature.properties.id + "&adminlevel=" + feature.properties.gadm_stack_level + "&stackid=" + feature.properties.gadm_stack_guid;
                    }

                    // add source to url
                    url+= "&source=" + feature.properties.source;

                    //redirect
                    window.location = url;
                }
                else {
                    // Notify user of missing params
                    this.createSnackbar("Missing ECOS url callback parameters.")
                }
            },

            //Function that parses querystring and creates associative array of parameters.
            getUrlParams: function () {
                var match,
                        pl = /\+/g,  // Regex for replacing addition symbol with a space
                        search = /([^&=]+)=?([^&]*)/g,
                        decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
                        query = window.location.search.substring(1);

                this.urlParams = {};
                while (match = search.exec(query))
                    this.urlParams[decode(match[1])] = decode(match[2]);
            },
            createSnackbar: function(message) {
                this.$refs.snackbarContainer.createSnackbar({
                    message: message,
                    duration: 5000

                });
            }
        }
    }
</script>

<style>

    #adminResult {
        padding: 11px 20px 20px 20px;
        font-size: 14px;
        line-height: 25px;
    }

    #stackWrapper {
        text-align: left;
        position: relative;
        display: inline-block;
        width: 100%;
        padding: 0 20px 20px 0;
    }

    .chooseButton {
        background-color: #337AFF !important;
        color: #fff !important;
    }

    .chooseButton-wrapper {
        padding: 20px 0 20px 0;
    }

</style>
