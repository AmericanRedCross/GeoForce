<template>
    <div class="result" style="float:left" v-if="searchLocationResults.length > 0">
        <div style="padding: 5px;margin-bottom: 10px;">Click on a match below to see a preview of the location.</div>
        <table>
            <thead>
            <tr>
                <th>Name</th>
                <th>Level</th>
                <th>Source</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(loc,index) in searchLocationResults" v-show="index <= 10">
                <td v-if="searchLocationResultType === 'Geonames'" v-on:click="startGetAdminStackByXY(loc);">
                    {{loc.properties.name }} <span
                        v-if="loc.properties.adminName1">, {{loc.properties.adminName1}}</span>
                </td>
                <td v-if="searchLocationResultType != 'Geonames'" v-on:click="startGetAdminStackById(loc);">
                    {{loc.properties.fullname }}
                </td>

                <td v-if="searchLocationResultType === 'Geonames'">
                    {{loc.properties.fcodeName}}
                </td>


                <td v-if="searchLocationResultType != 'Geonames'">
                    {{loc.properties.level}}
                </td>

                <td>{{searchLocationResultType}}</td>
            </tr>
            </tbody>
        </table>
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
                _chosenFeature: {}
            }
        },
        computed: {
            searchLocationResults () {
                return this.sharedState.state.searchLocationResults;
            },
            searchLocationResultType () {
                return this.sharedState.state.searchLocationResultType;
            }
        },
        methods: {
            startGetAdminStackByXY: function (feature) {
                var vm = this;
                vm._chosenFeature = feature;
                var hostIp = vm.sharedState.config.hostIp;
                vm.sharedState.setgeoJSON(feature);


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

                var postArgs = {
                    format: "GeoJSON",
                    returnGeometry: "yes"
                };

                postArgs[searchType] = feature.properties[searchType];

                if(feature.properties.source === "Custom") {
                    postArgs["adminlevel"] = feature.properties.level;
                    postArgs["datasource"] = feature.properties.source;
                }

                var url = hostIp + '/services/getAdminStack';

                //Send POST,
                axios.post(url, postArgs)
                        .then(function (response) {
                            response.data.level = level;
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

    .result {
        padding: 20px;
    }

    table .result {
        cursor: pointer;
    }

    th {
        text-align: left;
        padding: 2px 5px;
    }

    td {
        padding: 2px 5px;
        text-align: left;
    }

    tr {
        cursor: pointer;
    }
</style>
