//4.3.2014 - Ryan Whitley
var flow = require('flow');
var common = require("../../../common"),
        settings = require('../../../settings'),
        shortid = require('shortid');

//Takes in geojson parts, returns counts by landuse type.
//Arguments are:
//1. The points
//3. Country Code

var operation = {};

/* METADATA */
operation.name = "GetFeaturesByID";
operation.description = "Gets GADM boundaries based on an ID.";
operation.inputs = {};

operation.outputImage = false;

operation.inputs["ids"] = {}; //comma separated list of ids
operation.inputs["simplification level"] = []; //How much to simplify the feature by (in degrees)

operation.Query = "DO $$DECLARE " +
"BEGIN " +
"drop table if exists \"_gptemp{gpid}\"; " +
"create temporary table \"_gptemp{gpid}\" as  " +
"select a.landuse, count(b.*) as count " +
"from {country}_district_landuse a " +
"inner join (SELECT (ST_Dump(ST_CollectionExtract(ST_GeomFromGeoJson('{geojson}'), 1))).geom as geom " +
") b on " +
"st_intersects(a.geom, b.geom) " +
"GROUP BY a.landuse; " +
"END$$; " +
"SELECT * " +
"FROM \"_gptemp{gpid}\" c ";



operation.execute = flow.define(
    function (args, callback) {
        this.args = args;
        this.callback = callback;
        //Step 1

        //Generate UniqueID for this GP Task
        operation.id = shortid.generate();

        //See if inputs are set. Incoming arguments should contain the same properties as the input parameters.
        if (operation.isInputValid(args) === true) {
            //prepare bbox string as WKT
            operation.inputs["bbox"] = args.bbox;
            operation.inputs["gadm_level"] = args.gadm_level;

            //Execute the query
            var query = { text: operation.Query.replace("{geojson}", operation.inputs["geojson"]).split("{gpid}").join(operation.id).replace("{buffer_distance}", operation.inputs["buffer_distance"]).split("{country}").join(countries[operation.inputs["country_code"]].name), values: [] };
            common.executePgQuery(query, this);//Flow to next function when done.

        }
        else {
            //Invalid arguments
            //return message
            callback({text: "Missing or invalid required arguments: bbox"}); //err is first argument
        }
    },
    function (err, results) {
        //Step 2 - get the results and pass back to calling function
        this.callback(err, results);
    }
)

//Make sure arguments are tight before executing
operation.isInputValid = function (input) {
    //Test to see if inputs are specified
    var isValid = false;

    if (input) {
        //make sure we have a bbox.  Other args are optional
        if (input["bbox"] && input["bbox"].split(",").length == 4) {
            //It's got everything we need.
            return true;
        }
    }

    //TODO - check that the ST_Extent of the input WKT at least touches the BBox of the country specified.
    //If not, then respond accordingly.

    return isValid;
}

operation.convertBBoxToWKT = function(bbox){

}

module.exports = operation;