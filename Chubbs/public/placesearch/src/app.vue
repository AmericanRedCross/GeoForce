<template>
    <div id="app">
        <div id="wrapper">

            <div id="content">
                <search></search>

                <div class="clearfix wrapper">
                    <leafletmap></leafletmap>

                    <searchResultsTable></searchResultsTable>
                </div>

                <adminStack></adminStack>

            </div> <!-- /#content -->

            <div id="footer">
                <div id="line"></div>
                <p>&copy; <a href="http://redcross.org" target="_blank">American Red Cross</a> 2013</p>
            </div>

        </div> <!-- /#wrapper -->
    </div>
</template>

<script>
    var search = require('./components/search.vue');
    var searchResultsTable = require('./components/searchResultsTable.vue');
    var leafletmap = require('./components/map.vue');
    var adminStack = require('./components/adminStack.vue');

    export default {
        name: 'app',
        components: {
            search,
            leafletmap,
            searchResultsTable,
            adminStack
        },
        data () {
            return {
                msg: 'Welcome to Your Vue.js App test'
            }
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
