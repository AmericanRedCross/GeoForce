<template>
    <div class="search-wrapper">
        <form v-on:submit.prevent="getLocationSearchResults()">
            <ui-textbox icon="search" placeholder="Search for a place or administrative boundary" v-model="query"></ui-textbox>
        </form>
        <div class="hint"> <span style="color:#ff0000">Hint:</span> enter a name, NOT a fully qualified City, Province, Country (for example, 'Port-au-Prince' NOT 'Port-au-Prince, Haiti')
        </div>
    </div>
</template>

<script>
    import state from '../store.vue'
    import axios from 'axios'
    import { UiTextbox } from 'keen-ui';

    export default {
        name: 'LocationSearch',
        components: {
            UiTextbox
        },
        data () {
            return {
                query: "",
                sharedState: state
            }
        },
        computed: {
            queryResults () {
                return this.sharedState.state.queryResults
            }
        },
        methods: {
            getLocationSearchResults: function () {
                var vm = this;
                var hostIp = vm.sharedState.config.hostIp;
                vm.sharedState.setsearchResultsLoading(true);

                axios.post(hostIp + '/services/nameSearch', {
                            "searchterm": this.query,
                            "format": "GeoJSON",
                            "returnGeometry": "no"
                        })
                        .then(function (response) {
                            // add "active" property to each feature
                            if(response.data.features.length > 0){
                                var f = response.data.features;
                                response.data.features = f.map(function(r){r.properties.active = false; return r})
                            }

                            vm.sharedState.setsearchResultsLoading(false);
                            vm.sharedState.setSearchLocationResults(response);

                            // disable create map & edit map triggers
                            vm.sharedState.setCreateLocationPinDropped(false);
                            vm.sharedState.setCreateLocationActivated(false);
                            vm.sharedState.setEditLocationActivated(false);
                            vm.sharedState.setEditLocationPinDropped(false);
                        })
                        .catch(function (error) {
                            console.log(error);
                            vm.sharedState.setsearchResultsLoading(false);
                        });
            }
        }
    }
</script>

<style>
    .search-wrapper {
        padding: 20px;
        max-width: 900px;
        margin: 0 auto 10px auto;
    }

    .search-wrapper .hint {
        font-size: 15px;
    }
</style>
