<template>
    <div id="stackWrapper" v-if="adminStack.features">
        <div style="font-weight:600;">
            Administrative Boundary Hierarchy:
        </div>
        <div id="adminResult" v-if="adminStack.features.length > 0">
            <div v-for="(val, key, index) in adminStack.features[0].properties">
                <div v-if="key != 'centroid'">{{key}}: {{val}}</div>
                <div v-if="key === 'centroid'">{{key}}: {{val[0]}}, {{val[1]}}</div>
            </div>
        </div>
        <div v-if="adminStack.features.length === 0">No Admin Stack Available</div>
        <div v-if="adminStack.features.length > 0">
            <input class="btn-flat btn-chooseThis" id="uxChooseThis" type="button" value="Choose This Location" disabled="true"/>
        </div>
    </div>
</template>

<script>
    var state = require('../store.vue');
    var axios = require('axios');

    export default {
        name: 'AdminStack',
        data () {
            return {
                sharedState: state,
                _geoJSON: {}
            }
        },
        computed:  {
            adminStack () {
                return this.sharedState.state.adminStackResponse;
            }
        },
        methods: {

        }
    }
</script>

<style>
    #stackWrapper {
        text-align: left;
    }
</style>
