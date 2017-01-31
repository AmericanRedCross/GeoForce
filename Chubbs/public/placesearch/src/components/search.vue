<template>
    <div class="wrapper">
        <form v-on:submit.prevent="onSubmit" v-on:submit="getLocationSearchResults()">
            <input v-model="query" type="text"/>
            <input v-on:click="getLocationSearchResults()" type="submit">Submit</input>
        </form>
        <div>Search for a placename or administrative boundary by entering a name in the search box.</div>
        <div style="font-size:90%; color:#6d6e70;">Hint: enter a name, NOT a fully qualified City, Province, Country
            (for example, 'Port-au-Prince' NOT 'Port-au-Prince, Haiti')
        </div>
    </div>
</template>

<script>
    var state = require('../store.vue');
    var axios = require('axios');

    export default {
        name: 'LocationSearch',
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
                var vm = this
                var hostIp = this.sharedState.config.hostIp;

                axios.post(hostIp + '/services/nameSearch', {
                            "searchterm": this.query,
                            "format": "GeoJSON",
                            "returnGeometry": "no"
                        })
                        .then(function (response) {
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
