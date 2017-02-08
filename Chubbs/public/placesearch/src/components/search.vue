<template>
    <div class="wrapper">
        <form v-on:submit.prevent="getLocationSearchResults()">
            <input v-model="query" type="text"/>
            <input v-on:click="getLocationSearchResults()" type="submit"/>
        </form>
        <div>Search for a places' name or administrative boundary by entering a name in the search box.</div>
        <div style="font-size:90%; color:#6d6e70;">Hint: enter a name, NOT a fully qualified City, Province, Country
            (for example, 'Port-au-Prince' NOT 'Port-au-Prince, Haiti')
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
                            vm.sharedState.setsearchResultsLoading(false);
                            vm.sharedState.setSearchLocationResultType(response);
                            vm.sharedState.setSearchLocationResults(response);
                        })
                        .catch(function (error) {
                            console.log(error);
                        });
            }
        }
    }
</script>

<style>
</style>
