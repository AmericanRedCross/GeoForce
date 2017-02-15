<template>

    <div class="container">
        <ui-progress-linear color="primary" v-show="searchResultsLoading"></ui-progress-linear>
        <div class="result"
             v-if="!searchResultsLoading && !createLocationPinDropped && !createLocationActivated && !editLocationActivated">

            <div v-if="emptySearchResults">No matches found. Please try another search term.</div>
            <div class="table-container" v-if="searchLocationResults.length > 0 && !searchResultsLoading">

                <thead>
                <th>Name</th>
                <th class="align-center">ECOS ID</th>
                <th class="align-center">Level</th>
                <th class="align-right">Source</th>
                </thead>

                <div class="body">
                    <div class="row" v-for="(loc,index) in searchLocationResults">
                        <div class="cell name" v-if="loc.properties.source === 'Geonames'"
                             @click="startGetAdminStackByXY(loc)">{{loc.properties.name }}<span
                                v-if="loc.properties.adminName1">, {{loc.properties.adminName1}}</span></div>
                        <div class="cell name" v-if="loc.properties.source != 'Geonames'"
                             @click="startGetAdminStackById(loc)">{{loc.properties.fullname || loc.properties.name}}
                        </div>
                        <div class="cell align-center" v-if="loc.properties.source === 'Custom'">
                            {{loc.properties.ecos_id}}
                        </div>
                        <div class="cell align-center" v-if="loc.properties.source != 'Custom'"></div>
                        <div class="cell align-center" v-if="loc.properties.source === 'Geonames'">
                            {{loc.properties.fcodeName}}
                        </div>
                        <div class="cell align-center" v-if="loc.properties.source != 'Geonames'">{{loc.properties.level
                            || loc.properties.level}}
                        </div>
                        <div class="cell align-right">{{loc.properties.source}}</div>
                    </div>
                </div>
            </div>

        </div>

        <!-- Create Map Location Input-->
        <div class="create-location" v-show="createLocationActivated || createLocationPinDropped">

            <div v-show="createLocationActivated && !createLocationPinDropped">
                Please click on the din icon to drop a pin on the map.
            </div>

            <table cellspacing="10" cellpadding="0" class="edit-table" v-show="createLocationPinDropped">
                <thead>
                <th class="align-left">Name</th>
                <th class="align-left">ECOS id</th>
                </thead>

                <tbody>
                <tr>
                    <td>
                        <ui-textbox required placeholder="Enter location name"
                                    v-model="customLocation.name"></ui-textbox>
                    </td>
                    <td>
                        <ui-textbox required placeholder="Enter ECOS ID" v-model="customLocation.ecos_id"></ui-textbox>
                    </td>
                </tr>
                </tbody>
            </table>

            <div v-show="createLocationPinDropped">
                <ui-button type="secondary" @click="cancelCustomLocationView()">Cancel</ui-button>
                <ui-button raised :loading="loadingSubmitCustomLocation" @click="createCustomLocation()" :disabled="customLocation.name.length === 0 || customLocation.ecos_id.length === 0">Submit
                </ui-button>
            </div>

        </div>

        <!-- Edit Map Location Input-->
        <div class="edit-location" v-show="editLocationActivated && !createLocationActivated">

            <table cellspacing="10" cellpadding="0" class="edit-table">
                <thead>
                <th class="align-left">Name</th>
                <th class="align-left">ECOS id</th>
                </thead>

                <tbody>
                <tr>
                    <td>
                        <ui-textbox required placeholder="Enter location name"
                                    v-model="customLocation.name"></ui-textbox>
                    </td>
                    <td>
                        <ui-textbox required placeholder="Enter ECOS ID" v-model="customLocation.ecos_id"></ui-textbox>
                    </td>
                </tr>
                </tbody>
            </table>

            <div>
                <ui-button type="secondary" @click="cancelCustomLocationView()">Cancel</ui-button>
                <ui-button raised :loading="loadingSubmitCustomLocation" @click="editCustomLocation()" :disabled="customLocation.name.length === 0 || customLocation.ecos_id.length === 0">Submit</ui-button>
            </div>

        </div>

        <ui-snackbar-container position="right" ref="snackbarContainer"></ui-snackbar-container>
    </div>

</template>

<script>

    import state from '../store.vue'
    import axios from 'axios'
    import adminStack from './adminStack.vue'
    import map from './map.vue'

    export default {
        name: 'searchResultsTable',
        data () {
            return {
                msg: 'Welcome to the map component',
                query: "",
                sharedState: state,
                _chosenFeature: {},
                customLocation: {
                    name: "",
                    ecos_id: ""
                },
                loadingSubmitCustomLocation: false
            }
        },
        computed: {
            searchLocationResults () {
                return this.sharedState.state.searchLocationResults;
            },
            searchLocationResultType () {
                return this.sharedState.state.searchLocationResultType;
            },
            searchResultsLoading () {
                return this.sharedState.state.searchResultsLoading;
            },
            emptySearchResults () {
                return this.sharedState.state.emptySearchResults;
            },
            createLocationActivated () {
                return this.sharedState.state.createLocationActivated;
            },
            createLocationPinDropped () {
                return this.sharedState.state.createLocationPinDropped;
            },
            customLocationCoordinates () {
                return this.sharedState.state.customLocationCoordinates;
            },
            editLocationActivated () {
                return this.sharedState.state.editLocationActivated;
            }
        },
        watch: {
            editLocationActivated: function () {
                if (this.sharedState.state._geoJSON != null && !this.createLocationPinDropped) {
                    // set "customLocation properties" when Custom Location is selected from Search Results
                    this.customLocation.name = this.sharedState.state._geoJSON.properties.name;
                    this.customLocation.ecos_id = this.sharedState.state._geoJSON.properties.ecos_id;
                    this.customLocation.id = this.sharedState.state._geoJSON.properties.id;
                }
            },
            searchLocationResults: function () {

            },
            // clear customLocation object whenever create location button is slected
            createLocationActivated: function () {
                this.customLocation = {name: "", ecos_id: ""};
            }
        },
        methods: {
            startGetAdminStackByXY: function (feature) {
                var vm = this;
                vm._chosenFeature = feature;
                var hostIp = vm.sharedState.config.hostIp;
                vm.sharedState.setgeoJSON(feature);
                vm.sharedState.setSearchLocationResultType(feature.properties.source);

                var postArgs = {
                    wkt: "POINT(" + feature.properties.lng + " " + feature.properties.lat + ")",
                    datasource: "GADM", //Default Search for x,y admin stack is GADM
                    format: "GeoJSON",
                    returnGeometry: "yes"
                };

                var url = hostIp + "/services/getAdminStack";

                //Send POST,
                axios.post(url, postArgs)
                        .then(function (response) {
                            vm.sharedState.setAdminStackResponse(response.data);
                        })
                        .catch(function (error) {
                            console.log(error);
                        });
            },
            startGetAdminStackById: function (feature) {

                var vm = this;
                var hostIp = vm.sharedState.config.hostIp;
                var level = feature.properties.level;
                var searchType = feature.properties.source === "Custom" ? "stackid" : "featureid";
                vm.sharedState.setgeoJSON(feature);
                vm.sharedState.setSearchLocationResultType(feature.properties.source);

                var postArgs = {
                    format: "GeoJSON",
                    returnGeometry: "yes"
                };

                postArgs[searchType] = feature.properties[searchType];

                if (feature.properties.source === "Custom") {
                    postArgs["adminlevel"] = feature.properties.gadm_stack_level;
                    postArgs["datasource"] = feature.properties.source;
                    postArgs[searchType] = feature.properties.gadm_stack_guid;
                }

                var url = hostIp + '/services/getAdminStack';

                //Send POST,
                axios.post(url, postArgs)
                        .then(function (response) {
                            response.data.level = level;
                            vm.sharedState.setAdminStackResponse(response.data);

                            // if results are Custom, set turn on edit mode
                            if (vm.sharedState.state.searchLocationResultType === "Custom" && !vm.sharedState.state.createLocationPinDropped) {
                                vm.sharedState.setEditLocationActivated(true);
                            }
                        })
                        .catch(function (error) {
                            console.log(error);
                        });
            },
            createCustomLocation: function () {
                var vm = this;
                var hostIp = vm.sharedState.config.hostIp;
                vm.loadingSubmitCustomLocation = true;

                var postArgs = {
                    "ecos_id": vm.customLocation.ecos_id,
                    "name": vm.customLocation.name,
                    "wkt": "POINT(" + vm.customLocationCoordinates.lng + " " + vm.customLocationCoordinates.lat + ")"
                };

                var url = hostIp + '/services/customLocation';

                //Send POST,
                axios.post(url, postArgs)
                        .then(function (response) {
                            console.log(response);
                            vm.loadingSubmitCustomLocation = false;
                            vm.createSnackbar("You new location has been added to 'Custom' source");

                            // TODO figure out what we want to do after a successful POST.. UiSnackbar??
//                            vm.sharedState.setCreateLocationPinDropped(false);
                            vm.sharedState.setCreateLocationActivated(false);

                            // fetch new stack information
                            vm.startGetAdminStackById(response.data.features[0]);
                        })
                        .catch(function (error) {
                            vm.loadingSubmitCustomLocation = false;
                            console.log(error);
                            vm.createSnackbar(error.response.data.error || "Error.")
                        });
            },
            editCustomLocation: function () {
                var vm = this;
                var hostIp = vm.sharedState.config.hostIp;
                vm.loadingSubmitCustomLocation = true;

                var postArgs = {
                    "id": vm.customLocation.id,
                    "ecos_id": vm.customLocation.ecos_id,
                    "name": vm.customLocation.name
                };


                if (vm.customLocationCoordinates.length !== 2) {
                    postArgs.wkt = "POINT (" + vm.sharedState.state._geoJSONLayer._latlng.lng + " " + vm.sharedState.state._geoJSONLayer._latlng.lat + ")";
                } else {
                    postArgs.wkt = "POINT(" + vm.customLocationCoordinates.lng + " " + vm.customLocationCoordinates.lat + ")";
                }

                var url = hostIp + '/services/customLocation';

                //Send POST,
                axios.patch(url, postArgs)
                        .then(function (response) {
                            console.log(response);
                            vm.loadingSubmitCustomLocation = false;
                            vm.createSnackbar("You Custom location has been updated");

                            //TODO figure out what we want to do after a successful PATCH... UiSnackbar?
//                            vm.sharedState.setEditLocationActivated(false);
                            vm.sharedState.setEditLocationPinDropped(false);
                            // fetch new stack information
                            vm.startGetAdminStackById(response.data.features[0]);
                        })
                        .catch(function (error) {
                            vm.loadingSubmitCustomLocation = false;
                            console.log(error);
                            vm.createSnackbar(error.response.data.error || "Error.")
                        });
            },
            createSnackbar: function(message) {
                this.$refs.snackbarContainer.createSnackbar({
                    message: message,
                    duration: 5000
                });
            },
            cancelCustomLocationView: function (){
                // disable create map & edit map triggers
                this.sharedState.setCreateLocationPinDropped(false);
                this.sharedState.setCreateLocationActivated(false);
                this.sharedState.setEditLocationActivated(false);
                this.sharedState.setEditLocationPinDropped(false);
            }
        }
    }
</script>

<style>

    .md-table table {
        /*max-width: 500px;*/
    }

    .edit-location, .create-location {
        padding: 20px;
        float: left;
    }

    .result {
        padding: 20px;
    }

    .ui-progress-linear {
    width: 100%;
    float: right;
    margin: 100px 0 0 0;
    }

    .table-container {
        min-width: 600px;
        margin: 0 25px 0 0;
        max-height: 500px;
        overflow-y: scroll;
    }

    .body {
        display: table-row-group;
        background: white;
    }

    .body-container {
    padding: 10px;
    }

    .row {
    display: table-row
    }

    .cell {
    display: table-cell;
    text-align: left;
    border-bottom: 1px solid #dbdbdb;
    padding: 15px 5px;
    cursor: pointer;
    }

    .cell.name {
        min-width: 300px;
    }

    .edit-table {
        min-width: 600px;
    }

    .align-left {
        text-align: left;
    }

    .align-right {
        text-align: right;
    }

    .align-center {
        text-align: center;
    }

    .edit-table td:first-child {
        padding: 0 50px 0 0;
    }

    .container {
        width: 60%;
        height: 100%;
        float: left;
        min-height: 550px;
        position: relative;
    }

    thead th {
        text-align: left;
    }

</style>
