/**
* Created by DBaah on 1/30/17.
*/
<script>
    var axios = require('axios');

    export default ({
        debug: true,
        config: {
            hostIp: "http://54.187.215.30"
        },
        state: {
            message: 'Hello!',
            searchQuery: "",
            searchLocationResults: [],
            searchLocationResultType: "",
            adminStackResponse: {},
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