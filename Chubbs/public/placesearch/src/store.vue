/**
* Created by DBaah on 1/30/17.
*/
<script>
    //    var axios = require('axios');
    import axios from 'axios';
    import config from './config'

    export default ({
        debug: true,
        config: config,
        state: {
            message: 'Hello!',
            searchQuery: "",
            searchLocationResults: [],
            searchLocationResultType: "",
            adminStackResponse: {},
            _geoJSONLayer: null,
            _geoJSON: null,
            searchResultsLoading: false,
            emptySearchResults: false
        },
        setSearchLocationResults: function (results){
            this.state.emptySearchResults = (results.data.features.length === 0);
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
        setsearchResultsLoading: function (isLoading){
            this.state.searchResultsLoading = isLoading;
        },
        clearMessageAction: function () {
            this.debug && console.log('clearMessageAction triggered');
            this.state.message = ''
        }
    });
</script>