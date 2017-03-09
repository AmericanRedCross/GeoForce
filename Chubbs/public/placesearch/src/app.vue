<template>
  <div id="app">

    <header>
      <a href="/placesearch/search.html">
        <div>ARC Place search</div>
      </a>
    </header>

    <search></search>

    <div id="content">
        <div class="results-container">
          <leafletmap></leafletmap>

          <searchResultsTable></searchResultsTable>

          <adminStack></adminStack>
        </div>

      </div> <!-- /#content -->

    <div id="footer">
      <div id="line"></div>
      <p>&copy; <a href="http://redcross.org" target="_blank">American Red Cross</a> 2017</p>
    </div>

  </div>
</template>

<script>
  import search from './components/search.vue'
  import searchResultsTable from './components/searchResultsTable.vue'
  import leafletmap from './components/map.vue'
  import adminStack from './components/adminStack.vue'

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
    font-family: Arial, Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    width: 100%;
    margin: 0;
    min-height: 100%;
    position: relative;
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

  .results-container {
    min-height: 568px;
  }

  header {
    height: 45px;
    background-color: #f44336;
  }

  header a {
    text-decoration: none;
  }

  header div {
    color: white;
    font-weight: bold;
    padding: 13px 0 0 20px;
  }
</style>
