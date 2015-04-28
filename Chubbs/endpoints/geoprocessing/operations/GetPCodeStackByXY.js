//8.31.2013 - Ryan Whitley
//9.17.2014 - Nicholas Hallahan <nhallahan@spatialdev.com>

//Starting a Plug and Play GP Workflow
var flow = require('flow');
var pg = require('pg');
var common = require("../../../common");

var pcoderLibrary = require("../pcoderSettings.js");

//Takes in a POINT (X Y) and returns JSON object containing the intersected boundaries along with pcodes if applicable.
//Arguments are:
//1. X (Longitude)
//2. Y (Latitude)


var operation = {};


/* METADATA */

operation.name = "GetPCodeStackByXY";
operation.description = "Takes an X and Y coordinate, returns JSON object with intersected GADM boundaries with any pcodes that are available.";
operation.inputs = {};


operation.inputs["x"] = { value: "", required: true, help: "x coordinate (longitude), decimal degrees" };
operation.inputs["y"] = { value: "", required: true, help: "y coordinate (latitude), decimal degrees" };
operation.inputs["returnGeometry"] = { value: "", required: false, default_value: false, help: "true or false"}; //default value = false

operation.execute = flow.define(
  function(args, callback) {

    //The query to be executed

    //This contains Geom, but doesn't output in the HTML correctly.
    //var query = "select name0,guid0,ST_AsGeoJSON(geom0) as geom0,pcode0,name1,guid1,ST_AsGeoJSON(geom1) as geom1,pcode1,name2,guid2,ST_AsGeoJSON(geom2) as geom2,pcode2,name3,guid3,ST_AsGeoJSON(geom3) as geom3,pcode3,name4,guid4,ST_AsGeoJSON(geom4) as geom4,pcode4,name5,guid5,ST_AsGeoJSON(geom5) as geom5,pcode5  from gadmrollup where ST_Intersects(ST_GeomFromText('POINT({{x}} {{y}})', 4326), geom3);";

    //Because different countries have differing levels (Nepal goes down to level 4, others to level 3), we don't know which level to intersect against.
    //Start with the lowest (5).  If empty, move on to level 4 and so on until we get results back.
    var query = "select name0,guid0,pcode0,name1,guid1,pcode1,name2,guid2,pcode2,name3,guid3,pcode3,name4,guid4,pcode4,name5,guid5,pcode5 {{geometry}} from gadmrollup where ST_Intersects(ST_GeomFromText('POINT({{x}} {{y}})', 4326), {{intersection_level}});";


    this.args = args;
    this.callback = callback;
    //Step 1

    var x = operation.inputs["x"].value = args.x;
    var y = operation.inputs["y"].value = args.y;
    var returnGeometry = operation.inputs["returnGeometry"].value = (args.returnGeometry == 'true');

    //See if inputs are set. Incoming arguments should contain the same properties as the input parameters.
    if (operation.isInputValid(operation.inputs) === true) {

      if(returnGeometry == true){
        //Geometry, replace the geometry placeholder with the geometry columns.
        query = query.replace('{{geometry}}', ', ST_AsGeoJSON(geom0) as geom0,ST_AsGeoJSON(geom1) as geom1,ST_AsGeoJSON(geom2) as geom2,ST_AsGeoJSON(geom3) as geom3,ST_AsGeoJSON(geom4) as geom4,ST_AsGeoJSON(geom5) as geom5')
        //List the expected geom columns that come back from this query, so the formatters know which geoms to convert to GeoJSON
        operation.geom_columns = ['geom0', 'geom1', 'geom2', 'geom3', 'geom4', 'geom5']; //List the expected geom columns that come back from this query, so the formatters know which geoms to convert to GeoJSON
      }else{
         //no geometry.  Replace the placeholder with empty string
        query = query.replace('{{geometry}}', '');
        operation.geom_columns = [];
      }

      //Recursive function to do the intersecting starting at level 5 and working its way up until a match is found.
      var levels = [5,4,3,2,1,0]; //The GADM levels to search thru
      var number_of_levels = levels.length - 1; //How many levels will we iterate over?
      var self = this;

      (function tryXYIntersect() {
        if (number_of_levels >= 0) {
          //Update the level
          var sql = { text: query.replace("{{x}}", x).replace("{{y}}", y).replace("{{intersection_level}}", "geom" + number_of_levels), values: []};


          pcoderLibrary.executePgQuery(sql, function (error, results) {
            if (!error && results.rows && results.rows.length > 0) {
              self.callback(error, results);
              number_of_levels = -1;
              return;
            }
            number_of_levels --;
            tryXYIntersect();
          });
        }
        else{
           //we've run out of levels. Exit.
          self.callback(null, { rows: [] });
        }
      }())



    }
    else {
      //Invalid arguments
      //return message
      callback({text: "Missing required arguments: x, y"});
    }
  },
  function(err, results) {
    //Step 2 - get the results and pass back to calling function
    this.callback(err, results);
  }
);


//Make sure arguments are tight before executing
operation.isInputValid = function(input) {
  //Check inputs
  if(input){
    for (var key in input) {
      if (input.hasOwnProperty(key)) {
        if (input[key].required && (!input[key].value || input[key].value.length == 0)) {
            //Required but not present.
            return false;
        }
      }
    }
  }

  return true;
};

module.exports = operation;
