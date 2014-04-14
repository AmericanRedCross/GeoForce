//4.3.2014 - Ryan Whitley
var flow = require('flow');
var common = require("../../../common"),settings = require('../../../settings'),shortid = require('shortid');
var operation = {};

/* METADATA */
operation.name = "GetAggregatedThemeFeaturesByID";
operation.description = "Gets theme-based features and properties based on GADM ID and level.";
operation.inputs = {};

operation.outputImage = false;

operation.inputs["ids"] = {}; //comma separated list of ids
operation.inputs["theme"] = {}; //string - theme name
operation.inputs["gadm_level"] = {}; //string - gadm_level (0 -5)

operation.Query = "SELECT sum(count{{gadm_level}}) as project_count, guid{{gadm_level}} as guid, ST_ASGeoJSON(geom{{gadm_level}}) FROM sf_aggregated_gadm_{{theme}}_counts WHERE guid{{gadm_level}} IN ({{ids}}) GROUP BY guid{{gadm_level}}, geom{{gadm_level}}";

operation.execute = flow.define(
    function (args, callback) {
        this.args = args;
        this.callback = callback;
        //Step 1

        //Generate UniqueID for this Task
        operation.id = shortid.generate();

        //See if inputs are set. Incoming arguments should contain the same properties as the input parameters.
        if (operation.isInputValid(args) === true) {
            operation.inputs["ids"] = args.ids;
            operation.inputs["theme"] = args.theme.toLowerCase();
					  operation.inputs["gadm_level"] = args.gadm_level.toLowerCase();

            //need to wrap ids in single quotes
            //Execute the query
            var query;
						query = { text: operation.Query.split('{{gadm_level}}').join(operation.inputs["gadm_level"]).replace('{{theme}}', operation.inputs["theme"]).split("{{ids}}").join(operation.wrapIdsInQuotes(args.ids)) };
            common.executePgQuery(query, this);//Flow to next function when done.
        }
        else {
            //Invalid arguments
            //return message
            callback("Missing or invalid required arguments: theme or ids or gadm_level"); //err is first argument
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
        if (input["ids"] && input["theme"] && input["gadm_level"]) {
            //It's got everything we need.
            return true;
        }
    }

    return isValid;
}

operation.wrapIdsInQuotes = function(ids){
    return ids.split(',').map(function(item){
        return "'" + item + "'";
    });
}

module.exports = operation;