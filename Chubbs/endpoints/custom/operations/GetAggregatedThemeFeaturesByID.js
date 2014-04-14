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


//operation.Query = "SELECT ST_AsGeoJSON(geom) as geom, project_count, level FROM vw_theme_{{theme}}_gadm WHERE stack_guid IN ({{ids}})";

operation.Query = "";

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
						operation.Query = buildAggregateSQLQuery(operation.inputs["gadm_level"]);
            var query;
						query = { text: operation.Query.replace('{{theme}}', operation.inputs["theme"]).split("{{ids}}").join(operation.wrapIdsInQuotes(args.ids)) };
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

function buildAggregateSQLQuery(viewersLevel){
	//Build a SQL String to find aggregated projects for a level and those below it.
	viewersLevel = parseInt(viewersLevel);
	var levelSQL = []; //Store each statement for a level.
	for(var i=viewersLevel; i <= 5; i++){
		levelSQL.push(buildLevelSQL(viewersLevel, i));
	}

	//Now build the rest of the statement
	var sql = "with projects as (";

	sql += levelSQL.join(" UNION ALL "); //join all level statements together.

	sql += ") SELECT count(guid) as project_count, where guid IN ({{ids}}))) as geom \
					FROM projects \
					GROUP by guid";

	return sql;
}

function buildLevelSQL(viewersLevel, lowerLevel){
	//Build a SQL String to find projects for a level.
	var sql = ("SELECT gadm{{lowerLevel}}.guid FROM  gadm{{viewersLevel}}, " + (viewersLevel == lowerLevel ? "" : "gadm{{lowerLevel}}, ") + " vw_sf_all_projects " +
		(viewersLevel == lowerLevel ? "" : "WHERE gadm{{viewersLevel}}.id_{{viewersLevel}} = gadm{{lowerLevel}}.id_{{viewersLevel}} ") +
		"WHERE gadm{{lowerLevel}}.guid = vw_sf_all_projects.stack_guid " +
		"AND vw_sf_all_projects.level = '{{lowerLevel}}' " +
		"AND gadm{{viewersLevel}}.guid::character varying IN ({{ids}})").split('{{viewersLevel}}').join(viewersLevel).split('{{lowerLevel}}').join(lowerLevel);

	return sql;
}

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