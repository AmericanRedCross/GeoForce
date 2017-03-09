<template>
    <div class="search-wrapper">
        <div class="form-wrapper">
            <form @submit.prevent="getLocationSearchResults()">
                <ui-textbox autofocus icon="search" placeholder="Search for a place or administrative boundary"
                            v-model="query"></ui-textbox>
            </form>
            <div class="hint"><span style="color:#ff0000">Hint:</span> enter a name, NOT a fully qualified City,
                Province, Country (for example, 'Port-au-Prince' NOT 'Port-au-Prince, Haiti')
            </div>
        </div>
    </div>
</template>

<script>
    import state from '../store.vue'
    import axios from 'axios'
    import {UiTextbox} from 'keen-ui';

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
                            if (response.data.features.length > 0) {
                                var f = response.data.features;
                                response.data.features = f.map(function (r) {
                                    r.properties.active = false;
                                    return r
                                })
                            }

                            vm.sharedState.setsearchResultsLoading(false);
                            vm.sharedState.setSearchLocationResults(response);

                            // disable create map & edit map triggers
                            vm.sharedState.setCreateLocationPinDropped(false);
                            vm.sharedState.setCreateLocationActivated(false);
                            vm.sharedState.setEditLocationActivated(false);
                            vm.sharedState.setEditLocationPinDropped(false);

                            // clear admin stack
                            vm.sharedState.setAdminStackResponse({});
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
        height: 140px;
        background: #fff;
        width: 100%;
    }

    .search-wrapper .hint {
        font-size: 12px;
        color: #626262;
        margin: 0 0 0 36px;
    }

    .form-wrapper {
        max-width: 781px;
        margin: 15px auto;
    }

    .ui-textbox__input, .ui-textbox__textarea {
        font-size: 18px;
        font-family: Arial, Helvetica, sans-serif;
        font-style: italic;
        color: #A6A6A6;
    }

    .ui-textbox__input, .ui-textbox__textarea:focus {
        color: #000000;
        font-style: normal;
    }
</style>
