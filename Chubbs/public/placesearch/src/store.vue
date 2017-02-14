/**
* Created by DBaah on 1/30/17.
*/
<script>

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
            emptySearchResults: false,
            createLocationActivated: false,
            createLocationPinDropped: false,
            customLocationCoordinates: [],
            editLocationActivated: false,
            editLocationPinDropped: false
        },
        setSearchLocationResults: function (results){
            this.state.emptySearchResults = (results.data.features.length === 0);
            this.state.searchLocationResults = results.data.features;
        },
        setSearchLocationResultType: function (source){
            this.state.searchLocationResultType = source;
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
        setCreateLocationActivated: function (activated){
            this.state.createLocationActivated = activated;
        },
        setCreateLocationPinDropped: function (dropped) {
            this.state.createLocationPinDropped = dropped;
        },
        setCustomLocationCoordinates: function (coordinates){
            this.state.customLocationCoordinates = coordinates;
        },
        setEditLocationActivated: function (activated){
            this.state.editLocationActivated = activated;
        },
        setEditLocationPinDropped: function (dropped){
            this.state.editLocationPinDropped = dropped;
        }
    });
</script>