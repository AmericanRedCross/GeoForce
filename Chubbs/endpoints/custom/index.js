﻿//////////Custom Module - like Geoprocessing Module, but for custom routes, etc.////////////

//Common and settings should be used by all sub-modules
var express = require('express'),
    common = require("../../common"),
    flow = require('flow'),
    settings = require('../../private/settings');

//The next requires are specific to this module only
var custom = require('./operations');
var CCacher = require("../../lib/ChubbsCache");
var cacher = new CCacher();
var rest = require('../../lib/getJSON');

var mapnik;
try {
    mapnik = require('../../endpoints/mapnik');
} catch (e) {
    mapnik = null;
}

//End module specific requires
exports.app = function (passport) {
    var app = express();

    app.set('views', __dirname + '/views');
    app.set('view engine', 'jade');

    //Show dynamic list of GP options
    app.all('/services/custom', function (req, res) {

        var args = {};
        args.view = "custom_operations";
        args.breadcrumbs = [
            {
                link: "/services/tables",
                name: "Table Listing"
            },
            {
                link: "",
                name: "Custom Endpoints"
            }
        ];
        args.url = req.url;
        args.opslist = [];

        if (custom && custom.names) {
            for (i = 0; i < custom.names.length; i++) {
                args.opslist.push({
                    name: custom.names[i],
                    link: "custom_operation?name=" + custom.names[i]
                });
            }
        }

        //Render HTML page with results at bottom
        common.respond(req, res, args);

    });

    // listen for events to track cache rate and errors
    cacher.on("hit", function (key) {
        console.log("Using Cached response for: " + key)
    });

    cacher.on("miss", function (key) {
        console.log("No cached response for: " + key + ".  Generating.")
    });

    cacher.on("error", function (key) {
        console.log("Error with cache. " + err)
    });

    //Show specific GP operation
    //Cacher will use in-memory cache for 1 day.
    app.all('/services/custom/custom_operation', cacher.cache('days', 1), flow.define(function (req, res) {
    //app.all('/services/custom/custom_operation', flow.define(function (req, res) {
        this.args = {};
        this.req = req;
        this.res = res;

        //Grab POST or QueryString args depending on type
        if (req.method.toLowerCase() == "post") {
            //If a post, then arguments will be members of the this.req.body property
            this.args = req.body;
        } else if (req.method.toLowerCase() == "get") {
            //If request is a get, then args will be members of the this.req.query property
            this.args = req.query;
        }

        if (JSON.stringify(this.args) != '{}') {

            this.args.view = "custom_operation";
            this.args.breadcrumbs = [
                {
                    link: "/services/tables",
                    name: "Table Listing"
                },
                {
                    link: "/services/custom",
                    name: "Custom Endpoints"
                },
                {
                    link: "",
                    name: "Custom Endpoint"
                }
            ];
            this.args.path = this.req.path;
            this.args.host = this.req.headers.host;

            if (this.args.name) {
                //Dynamically load the page
                this.customOperation = custom.operations[this.args.name.toLowerCase()];
                //always lower names.

                if (!this.customOperation) {
                    //No such operation
                    this.args.errorMessage = "No such operation.";
                    common.respond(this.req, this.res, this.args);
                    return;
                }

                //Write out page based on dynamic inputs
                this.args.formfields = [];
                this.args._input_arguments = [];
                this.args._input_values = [];
                this.args.description = this.customOperation.description;
                this.args.breadcrumbs = [
                    {
                        link: "/services/tables",
                        name: "Home"
                    },
                    {
                        link: "/services/custom",
                        name: "Custom Endpoints"
                    },
                    {
                        link: "",
                        name: this.customOperation.name
                    }
                ];

                //See what the inputs are
                //Also see if any of the inputs were provided as args.
                var inputCount = 0; //count the inputs.  If a job has no inputs, then execute anyway.
                for (var key in this.customOperation.inputs) {
                    if (this.customOperation.inputs.hasOwnProperty(key)) {
                        this.args.formfields.push(key);
                        if (this.args[key]) {
                            this.args._input_arguments.push(key);
                            this.args._input_values.push({
                                name: key,
                                value: this.args[key]
                            });
                        }
                        inputCount++;
                    }
                }


                if (this.args._input_arguments.length > 0 || inputCount == 0) {
                    //We've got all of the required arguments
                    this.customOperation.execute(this.args, this);
                    //Flow to next bloc when done
                } else {
                    //They provided no arguments, so just load the empty page
                    //Render HTML page with results at bottom
                    this.args.errorMessage = "No arguments were provided.";
                    common.respond(this.req, this.res, this.args);
                }

                //Now get other args (if any) and process them
                //Commenting out for now.  Let the individual endpoints deal with whether the args were provided or not
                /*if (this.args.formfields.length == this.args._input_arguments.length) {
                 //We've got all of the required arguments
                 this.customOperation.execute(this.args, this);
                 //Flow to next bloc when done
                 } else if (this.args._input_arguments.length > 0) {
                 //they provided some of the arguments, but not all.
                 //Render HTML page with results at bottom
                 this.args.infoMessage = "Not all required arguments were provided.";
                 common.respond(this.req, this.res, this.args);
                 } else {
                 //They provided no arguments, so just load the empty page
                 //Render HTML page with results at bottom
                 this.args.infoMessage = "No arguments were provided.";
                 common.respond(this.req, this.res, this.args);
                 }*/

            } else {
                //Render HTML page with results at bottom
                common.respond(this.req, this.res, this.args);
            }

        } else {
            //Page initial load.  No results
            this.args.view = "custom_operation";
            this.args.breadcrumbs = [
                {
                    link: "/services/tables",
                    name: "Table Listing"
                },
                {
                    link: "/services/custom",
                    name: "Custom Endpoints"
                },
                {
                    link: "",
                    name: "Custom Endpoint"
                }
            ];
            common.respond(this.req, this.res, this.args);

        }
    }, function (err, result) {
        //Flowing from gpOperation.execute
        //check for error
        if (err) {
            //Report error and exit.
            this.args.errorMessage = err;
            this();
        } else {
            //success
            //Write out results to page
            var features = "";

            //Check which format was specified
            if (!this.args.format || this.args.format.toLowerCase() == "html") {
                //Render HTML page with results at bottom
                //TODO:  Handle cases where there is no geo, but we want HTML response.
                features = common.formatters.geoJSONFormatter(result.rows, this.args.geom_fields_array);
                //The page will parse the geoJson to make the HTMl
            } else if (this.args.format && this.args.format.toLowerCase() == "geojson") {
                //Respond with JSON
                features = common.formatters.geoJSONFormatter(result.rows, this.args.geom_fields_array);
            } else if (this.args.format && this.args.format.toLowerCase() == "json") {
                //Respond with JSON
                features = result.rows;
            } else if (this.args.format && this.args.format.toLowerCase() == "esrijson") {
                //Respond with esriJSON
                features = common.formatters.ESRIFeatureSetJSONFormatter(result.rows, this.args.geom_fields_array);
            } else if (this.args.format && this.args.format.toLowerCase() == "csv") {
                //CSV
                features = common.formatters.CSVFormatter(result.rows, common.unEscapePostGresColumns(this.args.geom_fields_array));
            }

            this.args.featureCollection = features;
            //clone and assign output features to args variable

            //if GP operation specifies output image service, then spin one up
            if (mapnik && this.customOperation.outputImage && this.customOperation.outputImage == true && features) {
                mapnik.createGeoJSONQueryRenderer(app, JSON.parse(JSON.stringify(features)), "4326", "style.xml", this.customOperation.id, this);
                //Use a dyanmic GP ID here to append to the name.
            } else {
                this();
                //Just flow
            }
        }
    }, function (result) {
        //Flowing from CreateGeoJSONQueryRenderer, or just responding back to request

        if (result && result.imageURL) {
            this.args.imageURL = "http://" + this.args.host + result.imageURL; //TODO - use correct dynamic protocol (http vs. https)
            if (this.args.featureCollection) {
                this.args.featureCollection.imageURL = this.args.imageURL;
                //Write an extra parameter back to the caller so they know how to fetch the result image.
            }
        }
        common.respond(this.req, this.res, this.args);
        //Write it out
        return;
    }));


    //Importing the GeoWebServices RedCross Endpoints
    app.all('/services/getAdminStack', flow.define(
        function (req, res) {
            //Stash the node request and response objects.
            this.req = req;
            this.res = res;

            //Grab POST or QueryString args depending on type
            if (this.req.method.toLowerCase() == "post") {
                //If a post, then arguments will be members of the this.req.body property
                this.args = this.req.body;
            }
            else if (this.req.method.toLowerCase() == "get") {
                //If request is a get, then args will be members of the this.req.query property
                this.args = this.req.query;
            }

            //Detect if args were passed in
            if (JSON.stringify(this.args) != '{}') {
                //Add custom properties as defaults
                this.args.view = "get_admin_stack";
                this.args.title = "GeoWebServices";
                this.args.jsonp = true;
                this.args.breadcrumbs = [
                    { link: "/services", name: "Home" },
                    { link: "", name: "Get Admin Stack" }
                ];

                //Set up an object to hold search terms
                var searchObj = {};
                searchObj.returnGeometry = this.args.returnGeometry;

                //All 3 need to be defined OR WKT & Datasource and Level, or feature ID.
                if (this.args.featureid) {
                    //If we get the feature id, we need to first look up the item from textsearch table, and then go  get the stack.
                    executeAdminStackSearchByFeatureId(this.args.featureid, this.req, this.res, this.args); //It has its own flow defined
                    //GATrackEvent("Get Admin Stack", "by feature id", this.args.featureid); //Analytics
                    return;
                }
                else if (this.args.stackid && this.args.adminlevel && this.args.datasource) {
                    //Check to see if the datasource was valid
                    if (settings.dsColumns[this.args.datasource.toLowerCase() + this.args.adminlevel]) {
                        //Set up search parameters
                        searchObj.stackid = this.args.stackid;
                        searchObj.adminlevel = this.args.adminlevel;
                        searchObj.datasource = this.args.datasource;
                        searchObj.isSpatial = false;

                        //GATrackEvent("Get Admin Stack", "by Stack ID, Admin, Datasource",  this.args.stackid + "," + this.args.adminlevel + "," + this.args.datasource); //Analytics
                    } else if (settings.dsColumns[this.args.datasource.toLowerCase()]) {
                        //Set up search parameters
                        // get arc_custom_location record id from custom source in case there's multiple custom locations in the same stack
                        if(this.args.datasource.toLowerCase() === "custom") searchObj.customid = this.args.customid;
                        searchObj.stackid = this.args.stackid;
                        searchObj.adminlevel = this.args.adminlevel;
                        searchObj.datasource = this.args.datasource;
                        searchObj.isSpatial = false;
                    }
                    else {
                        //Couldn't find this datasource in the settings file. Exit.
                        this.args.errorMessage = this.args.datasource.toLowerCase() + this.args.adminlevel + " was not found. Try GADM0, GAUL1 or NaturalEarth0, for example";
                        this.args.featureCollection = { message: this.args.errorMessage, type: "FeatureCollection", features: [] };

                        //Render HTML page with results at bottom
                        common.respond(this.req, this.res, this.args);
                        return;
                    }
                }
                else {
                    //did they pass in GEOM And Datasource and Level?
                    if (this.args.wkt && this.args.datasource) {
                        //Check to see if the datasource was valid
                        if (settings.dsColumns[this.args.datasource.toLowerCase() + (this.args.adminlevel ? this.args.adminlevel : "0")]) {
                            //Use the geometry in search parameters
                            searchObj.wkt = this.args.wkt;
                            searchObj.datasource = this.args.datasource; //optional
                            searchObj.adminlevel = this.args.adminlevel; //optional
                            searchObj.isSpatial = true;

                            //GATrackEvent("Get Admin Stack", "by Geom, Admin, Datasource", this.args.wkt + "," + this.args.adminlevel + "," + this.args.datasource); //Analytics

                        } else {
                            //Couldn't find this datasource in the settings file. Exit.
                            this.args.errorMessage = this.args.datasource.toLowerCase() + (this.args.adminlevel ? this.args.adminlevel : "0") + " was not found. Try GADM0, GAUL1 or NaturalEarth0, for example";
                            this.args.featureCollection = { message: this.args.errorMessage, type: "FeatureCollection", features: [] };

                            //Render HTML page with results at bottom
                            common.respond(this.req, this.res, this.args);
                            return;
                        }

                    }
                    else {
                        //Let 'em know, then abort
                        this.args.errorMessage = "Please provide either a boundary's stack ID, level and datasource, OR provide a WKT point and datasource.";
                        this.args.featureCollection = { message: this.args.errorMessage, type: "FeatureCollection", features: [] }; //The page will parse the geoJson to make the HTMl

                        //Render HTML page with results at bottom
                        common.respond(this.req, this.res, this.args);
                        return;
                    }
                }


                //Try querying internal GeoDB
                executeAdminStackSearch(searchObj, this);
            }
            else {
                //If the querystring is empty, just show the regular HTML form.
                //Render Query Form without any results.
                this.args.view = "get_admin_stack";
                this.args.breadcrumbs = [
                    { link: "/services", name: "Home" },
                    { link: "", name: "Get Admin Stack" }
                ];
                this.args.title = "GeoWebServices";

                common.respond(this.req, this.res, this.args);
            }
        }, function (err, result) {
            //The result of execute Admin Stack Search
            //successful search
            if (err) {
                common.log(err);
                this.args.errorMessage = "error: " + err;
                common.respond(this.req, this.res, this.args);
            }
            else {
                this.args.featureCollection = common.formatters.geoJSONFormatter(result.rows); //format as JSON
                common.respond(this.req, this.res, this.args);
            }
        }
    ));

  //Admin Name Query - get - display page with default form
  app.all('/services/nameSearch', function(req,res){
    var args = {};

    //Grab POST or QueryString args depending on type
    if (req.method.toLowerCase() == "post") {
      //If a post, then arguments will be members of the this.req.body property
      args = req.body;
    }
    else if (req.method.toLowerCase() == "get") {
      //If request is a get, then args will be members of the this.req.query property
      args = req.query;
    }

    //Google Analytics
//    ga.trackPage('NameSearch', '/services/nameSearch', function (err, resp) {
//      if (!err && resp.statusCode === 200) {
//        console.log('Page has been tracked with Google Analytics');
//      }
//    });
    //Detect if args were passed in
    if (JSON.stringify(args) != '{}') {
      //Add custom properties as defaults
      args.view = "admin_namesearch"
      args.featureCollection = { };
      args.jsonp = true;

      //Get the text arg, pass it to function
      var featureid = "", datasource = "";
      if (args.searchterm) {
        //User is doing a text search
        datasource = args.datasource; //Optional

        //Try querying internal GeoDB - strict (exact match) first
        startExecuteAdminNameSearch(args.searchterm, { type: "name", strict: true, returnGeometry: args.returnGeometry, datasource: datasource }, req, res, args);
        //GATrackEvent("Get Feature", "by name", args.searchterm); //Analytics

      }
      else if (args.featureid) {
        //User is searching by unique ID from text_search table
        featureid = args.featureid;
        //Try querying internal GeoDB using feature id
        executeAdminIDSearch(featureid, { type: "id", returnGeometry: args.returnGeometry }, function (result) {
          //handle results of id search
          args.featureCollection = common.formatters.geoJSONFormatter(result.rows); //The page will parse the geoJson to make the HTMl
          args.breadcrumbs = [{ link: "/services", name: "Home" }, { link: "", name: "Query" }];
          common.respond(req, res, args);
          return;
        });
        //GATrackEvent("Get Feature", "by Id", args.featureid); //Analytics

      }
      else {
        //No search term, abort.
        args.breadcrumbs = [{ link: "/services", name: "Home" }, { link: "", name: "Query" }];
        args.errorMessage = 'You must specify a search term or feature id.';
        common.respond(req, res, args);
        return;
      }
    }
    else {
      //If no arguments are provided, just show the regular HTML form.
      args.breadcrumbs = [{ link: "/services", name: "Home" }, { link: "", name: "Admin Query by Name" }];
      args.view = "admin_namesearch";
      common.respond(req, res, args);
    }
  });

    /**
     * Create custom ARC location POST endpoint
     */
    app.post('/services/customLocation', function (req, res){
        var args = {};
        var body = req.body;
        args.format = "json";
        args.featureCollection = {};

        // check for required body args
        if (body.ecos_id === undefined || body.name === undefined || body.wkt === undefined){
            args.errorMessage = "error: ecos_id, name, & wkt required in POST body";
            // throw missing required arguments error
            common.respond(req, res, args);
        } else {
            var sql = {};
            sql.text = "SELECT * FROM ___create_arccustomlocation($1,$2,$3)";
            sql.values = [body.ecos_id, body.wkt, body.name];

            common.executePgQuery(sql, function(err, result){
                if(err){
                    // throw error with db message
                    common.log(err);
                    args.errorMessage = err.message;
                    common.respond(req, res, args);
                } else {

                    // response should be [{"___create_arccustomlocation": {} }]
                    args.featureCollection = common.formatters.geoJSONFormatter([JSON.parse(result.rows[0]["___create_arccustomlocation"])]);
                    common.respond(req, res, args);
                }

            });
        }
    });

    /**
     * Edit custom ARC location PATCH endpoint
     */
    app.patch('/services/customLocation', function (req, res){

        var args = {};
        var body = req.body;
        args.format = "json";
        args.featureCollection = {};

        // check for required body args
        if (body.id === undefined || body.ecos_id === undefined || body.name === undefined || body.wkt === undefined){
            args.errorMessage = "error: ecos_id, name, & wkt required in POST body";
            // throw missing required arguments error
            common.respond(req, res, args);
        } else {
            var sql = {};
            sql.text = "SELECT * FROM ___edit_arccustomlocation($1,$2,$3,$4)";
            sql.values = [parseInt(body.id), body.ecos_id, body.wkt, body.name];

            common.executePgQuery(sql, function(err, result){
                if(err){
                    // throw error with db message
                    common.log(err);
                    args.errorMessage = err.message;
                    common.respond(req, res, args);
                } else {
                    // response should be [{"___edit_arccustomlocation":"true"}]
                    args.featureCollection = common.formatters.geoJSONFormatter([JSON.parse(result.rows[0]["___edit_arccustomlocation"])]);
                    common.respond(req, res, args);
                }

            });
        }
    });

    /**
     * DELETE custom ARC location
     */
    app.delete('/services/customLocation/:id', function (req, res){

        var args = {};
        var body = req.body;
        args.format = "json";
        args.featureCollection = {};

        // check for required body args
        if (req.params.id === undefined || body.ecos_id === undefined){
            args.errorMessage = "error: ecos_id required in DELETE body";
            // throw missing required arguments error
            common.respond(req, res, args);
        } else {
            var sql = {};
            sql.text = "SELECT * FROM ___delete_arccustomLocation($1,$2)";
            sql.values = [parseInt(req.params.id), body.ecos_id];

            common.executePgQuery(sql, function(err, result){
                if(err){
                    // throw error with db message
                    common.log(err);
                    args.errorMessage = err.message;
                    common.respond(req, res, args);
                } else {
                    // response should be [{"___delete_arccustomLocation":"true"}]
                    args.featureCollection = common.formatters.geoJSONFormatter([JSON.parse(result.rows[0]["___delete_arccustomlocation"])]);
                    common.respond(req, res, args);
                }

            });
        }
    });

    //RedCross GeoWebServices Search Functions
    //pass in a search term, check the Geodatabase for matching names
    //This is part 1 of 2 for getting back an admin stack
    var startExecuteAdminNameSearch = flow.define(
        function (searchterm, options, req, res, args) {
            this.req = req;
            this.res = res;
            this.args = args;

            //Start looking for geo db matches
            executeStrictAdminNameSearch(searchterm, options, this);

        }, function (err, result) {
            // this is the result of executeAdminNameSearch 'strict' callback
            // result should be success or error. Fetch Loose Admin Names

            if(err || (result && result.rows.length == 0)) {
                this.args.featureCollection = {type: "FeatureCollection", features: []}
            } else {
                this.args.featureCollection = common.formatters.geoJSONFormatter(result.rows.sort(function(a,b){
                    // sort by admin level
                    return parseInt(a.level) - parseInt(b.level)}
                ));
            }

            common.log("strict matches for " + this.args.searchterm + ": " + result.rows.length);

            // Try querying internal GeoDB - not strict
            executeLooseAdminNameSearch(this.args.searchterm, { returnGeometry: this.args.returnGeometry }, this);


        }, function (err, result) {

            // first check if features exist in feature collections
            // if they do, then don't bother to add new results to array of existing features
            if (this.args.featureCollection.features.length === 0){

                if (!err && (result && result.rows.length > 0)) {
                    // set feature Collection to results
                    this.args.featureCollection = common.formatters.geoJSONFormatter(result.rows.sort(function(a,b){
                        // sort by admin level
                        return parseInt(a.level) - parseInt(b.level)
                    }));

                }
            }

            executeCustomLocationAdminNameSearch(this.args.searchterm, {returnGeometry: this.args.returnGeometry} , this);


      },
        function (err, result) {

            //this is the result of arc custom location 'not-strict' callback

            // if rows are returned, append Custom location results to current feature collection
            if(!err && (result && result.rows.length > 0)){
                common.log("custom location matches for " + this.args.searchterm + ": " + result.rows.length);
                var featureCollection = this.args.featureCollection;
                var resultFeatures = common.formatters.geoJSONFormatter(result.rows);

                // append to features if they exist
                if (typeof featureCollection.features !== "undefined"){
                    resultFeatures.features.map(function(r){featureCollection.features.push(r)});
                } else {
                    // set collection to custom location search results
                    featureCollection = resultFeatures;
                }

                this.args.featureCollection = featureCollection;
            }

            //Check GeoNames
            executeGeoNamesAPISearch(this.args.searchterm, this);
        },
      function (statuscode, result) {
            //This is the callback from the GeoNamesAPI Search
            //check the result and decide what to do.

            this.args.breadcrumbs = [
                { link: "/services", name: "Home" },
                { link: "", name: "Query" }
            ];

            if (statuscode && statuscode == "200") {
                //we got a response, check for existing features, if so, append
                if (result && result.geonames && result.geonames.length > 0) {

                    var featureCollection = this.args.featureCollection;
                    var resultFeatures = common.formatters.geoJSONFormatter(result.geonames);//The page will parse the geoJson to make the HTMl

                    // add "source" property to each feature
                    resultFeatures.features.map(function(r){r.properties.source = "Geonames"});

                    // append to features if they exist
                    if (typeof featureCollection.features != "undefined"){
                        resultFeatures.features.map(function(r){featureCollection.features.push(r)});
                        this.args.featureCollection = featureCollection;
                    } else {
                        // set collection to geonames response
                        this.args.featureCollection = resultFeatures; //The page will parse the geoJson to make the HTMl
                    }

                    //Render HTML page with results at bottom
                    common.respond(this.req, this.res, this.args);
                }
                else {

                    //Render HTML page with results at bottom
                    common.respond(this.req, this.res, this.args);

                }
            } else {
                //handle a non 200 response
                this.args.errorMessage = "Unable to complete operation. Response code: " + statuscode;
                this.args.featureCollection = { message: this.args.errorMessage, type: "FeatureCollection", features: [] }; //The page will parse the geoJson to make the HTMl

                //Render HTML page with results at bottom
                common.respond(this.req, this.res, this.args);
            }
        }
    );


  //pass in a search term, check the Geonames API for matching names
  function executeGeoNamesAPISearch(searchterm, callback) {
    //Reach out to GeoNames API

    //Encode for URL
    searchterm = encodeURIComponent(searchterm);

    var options = {
      host: 'api.geonames.org',
      path: '/search?name=' + searchterm + '&username=' + settings.geonames.username + '&featureClass=A&featureClass=P&type=json',
      method: 'GET',
      port: 80,
      headers: {
        'Content-Type': 'application/json'
      }
    };

    rest.getJSON(options, function (statusCode, result) {
      common.log("got geonames result.");
      callback(statusCode, result)
    }); //send result back to calling function
  }


    //Strict name Search
    function executeStrictAdminNameSearch(searchterm, options, callback) {

        var sql = { text: "select * from udf_executestrictadminsearchbyname($1)", values: [searchterm] };

        if (options) {
            if (options.returnGeometry == "yes") {
                //Try for exact match - with geom
                sql = { text: "select * from udf_executestrictadminsearchbynamewithgeom($1)", values: [searchterm] };
            }
            else {
                //Try for exact match - without geom
                sql = { text: "select * from udf_executestrictadminsearchbyname($1)", values: [searchterm] };
            }
            //run it
            common.executePgQuery(sql, callback);
        }
    }

//loose name search
    function executeLooseAdminNameSearch(searchterm, options, callback) {

        var sql = { text: "select * from udf_executeadminsearchbyname($1)", values: [searchterm] };

        if (options) {
            if (options.returnGeometry == "yes") {
                //use wildcard or partial match - with geom
                sql = { text: "select * from udf_executeadminsearchbynamewithgeom($1)", values: [searchterm] };
            }
            else {
                //use wildcard or partial match - without geom
                sql = { text: "select * from udf_executeadminsearchbyname($1)", values: [searchterm] };
            }
        }


        //run it
        common.executePgQuery(sql, callback);
    }

    function executeCustomLocationAdminNameSearch(searchterm, options, callback){

        var query = "SELECT " + (options.returnGeometry === "yes" ? "geom, " : "") + " id, gadm_stack_level, ecos_id, 'Custom' as source, name, country, gadm_stack_guid, level FROM arc_custom_locations WHERE name ILIKE('%' || $1 || '%') ORDER BY name";
        var sql = {text: query, values: [searchterm.trim()]};

        //run it
        common.executePgQuery(sql, callback);
    }

//pass in an ID, check the text search table for the ID
//This is part 1 of 2 for getting back an admin stack
    function executeAdminIDSearch(featureID, options, callback) {

        //search by ID - without geom
        var sql = { text: "select * from udf_executeadminsearchbyid($1)", values: [featureID] }; //default

      //With Vector Tiles, we don't need the geometry back, but if we say geometry: false won't return the extent, which we need.
//        if (options) {
//            if (options.returnGeometry == "yes") {
//                //search by ID - with geom
//                sql = { text: "select * from udf_executeadminsearchbyidwithgeom($1)", values: [featureID] };
//            }
//        }

        //run it
        common.executePgQuery(sql, callback);
    }


//pass in a search object with stackid, admin level, datasource OR WKT, find the matching administrative hierarchy
    function executeAdminStackSearch(searchObject, callback) {
        var sql = "";

        if (searchObject.datasource.toLowerCase() === "custom" && typeof searchObject.customid !== "undefined"){

            sql = buildAdminStackCustomQuery(searchObject.customid, searchObject.stackid, searchObject.adminlevel, searchObject.returnGeometry, searchObject.datasource);
            common.log(sql);

            common.executePgQuery(sql, callback);
        }
        //See if this is a spatial (WKT) search or not
        else if (searchObject.isSpatial == false) {
            //lookup by id, datasource and level
            //build sql query
            sql = buildAdminStackQuery(searchObject.stackid, searchObject.datasource, searchObject.adminlevel, searchObject.returnGeometry);
            common.log(sql);

            //run it
            common.executePgQuery(sql, callback);
        }
        else {
            //do a spatial search

            //If user specifies admin level, then use that to start with, otherwise, start with the lowest level for that datasource
            var adminLevel = 2;

            if (searchObject.adminlevel) {
                //use user's level
                adminLevel = searchObject.adminlevel;
            }
            else {
                //use a specified level
                adminLevel = settings.dsLevels[searchObject.datasource.toLowerCase()];
            }

            common.log(adminLevel);

            //Admin level will be passed in iteratively until we find a match.
            function hitTest(level) {
                if (level >= 0) {
                    //Do Hit Test, starting with lowest available admin level
                    common.log("In hit test loop.  checking level " + level);
                    sql = buildAdminStackSpatialQuery(searchObject.wkt, searchObject.datasource, level, searchObject.returnGeometry);
                    common.executePgQuery(sql, function (err, result) {
                        if (err) {
                            //continue searching
                            hitTest(level - 1);
                        }
                        else {
                            //we found a match, break out.
                            if (result.rows.length > 0) {
                                callback(err, result);
                                return;
                            }
                            else {
                                //continue searching
                                hitTest(level - 1);
                            }
                        }
                    });
                }
                else {
                    //We've hit the end of the road
                    common.log("checked all levels for " + searchObject.wkt + ", found nothing.");
                    callback(null, { rows: [], status: "success" });
                }
            }

            //initiate loop
            hitTest(adminLevel);
        }
    }

    //This is the case where user passes in feature id to the admin stack search. in this case, we need to look up the level and datasource for that feature, and then build a query to get the stack.
    var executeAdminStackSearchByFeatureId = flow.define(
        function (featureid, req, res, args) {
            this.req = req;
            this.res = res;
            this.args = args;

            executeAdminIDSearch(featureid, { type: "id", returnGeometry: this.args.returnGeometry }, this);

        },
        function (err, result) {
            //handle results of executeAdminIDSearch
            if (result && result.rows) {
                //If we got a result from text_search table, then build a query to get the stack.
                var row = result.rows[0];
                var searchObj = {};
                searchObj.stackid = row.stackid;
                searchObj.adminlevel = row.level;
                searchObj.datasource = row.source;
                searchObj.returnGeometry = this.args.returnGeometry;
                searchObj.isSpatial = false;

                executeAdminStackSearch(searchObj, this);
            }
        },
        function (err, result) {
            //handles results of executeAdminStackSearch
            //The result of execute Admin Stack Search
            //successful search
            if (err) {
                common.log(err.message);
                this.args.errorMessage = "error: " + err.message;
                common.respond(this.req, this.res, this.args);
            }
            else {
                this.args.featureCollection = common.formatters.geoJSONFormatter(result.rows); //format as JSON
                common.respond(this.req, this.res, this.args);
            }
        }
    )

    function buildAdminStackCustomQuery (customid, uuid, level, returnGeometry, datasource) {

        // build up query to be executed for adding custom locations to admin stacks
        var gadmLevel = parseInt(level);
        var gadmTable = "gadm" + gadmLevel;
        var queryObj = {};
        var columns = [];

        // get columns names
        for (var i= 0; i <= gadmLevel; i++){
            columns.push("id_" + i + " as adm" + i + "_code");
            columns.push("name_" + i + " as adm" + i + "_name");
        }

        queryObj.text = "SELECT " + (returnGeometry == "yes" ? settings.dsColumns[datasource.toLowerCase()].geometry +"," : "") + "id , gadm_stack_level, gadm_stack_guid as stack_guid, arc_region as isd_region, " + columns.join(",") + " , ST_AsText(ST_Centroid(acl.geom)) as centroid, level, 'Custom' as source, acl.name FROM " + gadmTable + ", arc_custom_locations acl WHERE acl.id = " + customid + " AND acl.gadm_stack_guid = " + gadmTable + " .guid AND guid = $1 LIMIT 1"
        queryObj.values = [uuid];

        return queryObj;
    }

    function buildAdminStackQuery(rowid, datasource, level, returnGeometry) {
        //build up the query to be executed for getting Admin Stacks

        var table = datasource.toLowerCase() + level; //gadm, gaul, naturalearth, local, custom

        //In rare cases, users are looking at ARC Regions
        if(level == "-1"){
            table = "arc_regions_dissolved";
        }

        var queryObj = {};
        try {
            queryObj.text = "SELECT " + (returnGeometry == "yes" ? settings.dsColumns[table].geometry : "") + settings.dsColumns[table].columns + ", 'GADM' as source FROM " + table + " WHERE guid = $1";
            //If we're asking for Extents, then we need to include other columns in group by clause
            if(settings.dsColumns[table].geometry.toLowerCase().indexOf("extent")){
              queryObj.text += " GROUP BY " + settings.dsColumns[table].columns.split(",").map(function(item){ return (item.split("as ").length > 0 ? item.split("as ")[1] : item.split("as ")[0] )}).join(",");
            }
            queryObj.values = [rowid];
        } catch (e) {

        }
        finally {
            return queryObj;
        }


    }

    function buildAdminStackSpatialQuery(wkt, datasource, level, returnGeometry) {
        //build the spatial query for getting Admin Stacks by WKT geometry intersect
        var table = datasource.toLowerCase() + level; //gadm, gaul, naturalearth, local, custom

        //In rare cases, users are looking at ARC Regions
        if (level == "-1") {
            table = "arc_regions_dissolved";
        }

        var queryObj = {};

        queryObj.text = "SELECT " + (returnGeometry == "yes" ? settings.dsColumns[table].geometry : "") + settings.dsColumns[table].columns + ", 'GADM' as source FROM " + table + " WHERE ST_Intersects(ST_GeomFromText($1, 4326), geom)";

        //If we're asking for Extents, then we need to include other columns in group by clause
        if (settings.dsColumns[table].geometry.toLowerCase().indexOf("extent")) {
            queryObj.text += " GROUP BY " + settings.dsColumns[table].columns.split(",").map(function (item) {
                return (item.split("as ").length > 0 ? item.split("as ")[1] : item.split("as ")[0] )
            }).join(",");
        }

        queryObj.values = [wkt];

        return queryObj;
    }

    return app;
}
