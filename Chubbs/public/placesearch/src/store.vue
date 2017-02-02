/**
* Created by DBaah on 1/30/17.
*/
<script>
    //    var axios = require('axios');
    import axios from 'axios';

    export default ({
        debug: true,
        config: {
            hostIp: "http://127.0.0.1:3000"
        },
        state: {
            message: 'Hello!',
            searchQuery: "",
            searchLocationResults: [],
            searchLocationResultType: "",
            adminStackResponse: {},
            customAdminStackResponse: {},
            _geoJSONLayer: null,
            _geoJSON: null
        },
        setSearchLocationResults: function (results){
            this.state.searchLocationResults = results.data.features;
        },
        setSearchLocationResultType: function (results){
            this.state.searchLocationResultType = results.data.source;
        },
        setAdminStackResponse: function (results){
            this.state.adminStackResponse = results;
        },
        setCustomAdminStackResponse: function (results){
            this.state.customAdminStackResponse = results;
        },
        setgeoJSONLayer: function (geojson){
            this.state._geoJSONLayer = geojson;
        },
        setgeoJSON: function (geojson){
            this.state._geoJSON = geojson;
        },
        clearMessageAction: function () {
            this.debug && console.log('clearMessageAction triggered');
            this.state.message = ''
        }
    });
</script>