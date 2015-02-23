//4.3.2014 - Ryan Whitley
var flow = require('flow');
var common = require("../../../common"),
    settings = require('../../../private/settings'),
    shortid = require('shortid');

var operation = {};

/* METADATA */
operation.name = "GetAggregatedThemeFeaturesByExtent";
operation.description = "Smartly gets Red Cross theme data associated with Red Cross disasters or projects based on a map viewport (extent).";
operation.inputs = {};

operation.inputs["bbox"] = {}; //Tile BBox coordinates, zlevel, xmin, xmax, ymin, ymax example: 8, 44, 48, 28, 30
operation.inputs["theme"] = ""; //string - theme name
operation.inputs["gadm_level"] = ""; //string - gadm_level (0 -5)
operation.inputs["filters"] = ""; //string - sql WHERE clause, minus the 'WHERE'

//Specific fields we want to pull from the aggregated theme features tables
var theme_details = {
    project: [],
    disaster: ["CASE WHEN array_agg(lower(iroc_status__c)) @> ARRAY['active'] THEN 'Active' WHEN array_agg(lower(iroc_status__c)) @> ARRAY['monitoring'] THEN 'Monitoring' WHEN array_agg(lower(iroc_status__c)) @> ARRAY['inactive'] THEN 'Inactive' END as iroc_status__c"],
    projectRisk: ["CASE WHEN array_agg(lower(overall_assessment__c)) @> ARRAY['critical'] THEN 'Critical' WHEN array_agg(lower(overall_assessment__c)) @> ARRAY['high'] THEN 'High' WHEN array_agg(lower(overall_assessment__c)) @> ARRAY['medium'] THEN 'Medium' WHEN array_agg(lower(overall_assessment__c)) @> ARRAY['low'] THEN 'Low' END as overall_assessment__c" ],
    projectHealth: ["CASE WHEN array_agg(lower(overall_status__c)) @> ARRAY['red'] THEN 'Red' WHEN array_agg(lower(overall_status__c)) @> ARRAY['yellow'] THEN 'Yellow' WHEN array_agg(lower(overall_status__c)) @> ARRAY['green'] THEN 'Green' WHEN array_agg(lower(overall_status__c)) @> ARRAY['white'] THEN 'White' END as overall_status__c"]
};

operation.outputImage = false;

operation.execute = flow.define(
    function (args, callback) {
        this.args = args;
        this.callback = callback;



        //Generate UniqueID for this GP Task
        operation.id = shortid.generate();

        //See if inputs are set. Incoming arguments should contain the same properties as the input parameters.
        if (operation.isInputValid(args) === true) {

            //assign parameters to object.
            operation.inputs["bbox"] = args.bbox;
            operation.inputs["theme"] = args.theme.toLowerCase();
            operation.inputs["gadm_level"] = args.gadm_level.toLowerCase();
            operation.inputs["filters"] = args.filters;

            //No cached
            //Convert bbox to WKT
            args.wkt = common.convertTileBoundsToBBoxWKT(args.bbox);

            if (settings.projectsManyToMany) {
                if (operation.inputs["theme"] === 'projectrisk') {
                    this.Query = "SELECT '" + operation.inputs["theme"] + "' as theme, sum(riskcount{{gadm_level}}) as theme_count, {{rfacount}}, {{theme_details}}, guid{{gadm_level}} as guid FROM sf_aggregated_gadm_{{theme}}_counts_many WHERE ST_Intersects(ST_GeomFromText({{in_wkt}}, 4326), geom{{gadm_level}}) {{filters}} GROUP BY guid{{gadm_level}}, geom{{gadm_level}}";
                }
                else if (operation.inputs["theme"] === 'project' || operation.inputs["theme"] === 'projecthealth') {
                    this.Query = "SELECT '" + operation.inputs["theme"] + "' as theme, sum(count{{gadm_level}}) as theme_count, {{rfacount}}, {{theme_details}}, guid{{gadm_level}} as guid FROM sf_aggregated_gadm_{{theme}}_counts_many WHERE ST_Intersects(ST_GeomFromText({{in_wkt}}, 4326), geom{{gadm_level}}) {{filters}} GROUP BY guid{{gadm_level}}, geom{{gadm_level}}";
                }
                else {
                    this.Query = "SELECT '" + operation.inputs["theme"] + "' as theme, sum(count{{gadm_level}}) as theme_count, {{rfacount}}, {{theme_details}}, guid{{gadm_level}} as guid FROM sf_aggregated_gadm_{{theme}}_counts WHERE ST_Intersects(ST_GeomFromText({{in_wkt}}, 4326), geom{{gadm_level}}) {{filters}} GROUP BY guid{{gadm_level}}, geom{{gadm_level}}";
                }
            }
            else {
                if (operation.inputs["theme"] === 'projectrisk') {
                    this.Query = "SELECT '" + operation.inputs["theme"] + "' as theme, sum(riskcount{{gadm_level}}) as theme_count, {{rfacount}}, {{theme_details}}, guid{{gadm_level}} as guid FROM sf_aggregated_gadm_{{theme}}_counts WHERE ST_Intersects(ST_GeomFromText({{in_wkt}}, 4326), geom{{gadm_level}}) {{filters}} GROUP BY guid{{gadm_level}}, geom{{gadm_level}}";
                } else {
                    this.Query = "SELECT '" + operation.inputs["theme"] + "' as theme, sum(count{{gadm_level}}) as theme_count, {{rfacount}}, {{theme_details}}, guid{{gadm_level}} as guid FROM sf_aggregated_gadm_{{theme}}_counts WHERE ST_Intersects(ST_GeomFromText({{in_wkt}}, 4326), geom{{gadm_level}}) {{filters}} GROUP BY guid{{gadm_level}}, geom{{gadm_level}}";
                }
            }

            //If theme is project, projectRisk, or projectHealth, add to the filters where phase is 2 - 5, which equates to Active projects.
            //In Salesforce, the phase__c column is text and has delimited values in the cells.  So, we'll do a 'like' operator instead of =
            var activeProjectWhereClause = " AND (phase__c LIKE '%2%' OR phase__c LIKE '%3%' OR phase__c LIKE '%4%')";


            //need to wrap ids in single quotes
            //Execute the query
            var query, filters = '';
            if (operation.inputs["gadm_level"] == -1) {
                operation.inputs["gadm_level"] = "arc";
            }
            if (operation.inputs["filters"] && operation.inputs["filters"] !== 'null') {
                var inputFilters = operation.inputs["filters"].replace(/%20/g, ' ').replace(/%25/g, '%').replace(/%27/g, "'");
                filters = " AND (" + inputFilters + ")";

                //Add where clause to only show active projects
                if (operation.inputs["theme"].toLowerCase() == 'project' || operation.inputs["theme"].toLowerCase() == 'projectrisk' || operation.inputs["theme"].toLowerCase() == 'projecthealth') {
                    filters += activeProjectWhereClause;
                }
            }
            else {
                //Add where clause to only show active projects
                if (operation.inputs["theme"].toLowerCase() == 'project' || operation.inputs["theme"].toLowerCase() == 'projectrisk' || operation.inputs["theme"].toLowerCase() == 'projecthealth') {
                    filters = activeProjectWhereClause;
                }
            }
            if (operation.inputs["theme"].toLowerCase() == 'disaster') {
                //If a disaster, include RFA counts from rollup table
                this.Query = this.Query.replace("{{rfacount}},", "sum(rfacount{{gadm_level}}) as rfa_count,");
                this.Query = this.Query.replace("{{theme_details}},", theme_details["disaster"].join(",") + ",");
                //This is hard coded into disaster requests UNTIL disaster filters are enabled in the left panel
                filters = " AND iroc_status__c != 'Inactive'";

            } else if (operation.inputs["theme"].toLowerCase() == 'project') {
                //No RFA counts.
                this.Query = this.Query.replace("{{rfacount}},", "");
                this.Query = this.Query.replace("{{theme_details}},", "");
            }
            else if (operation.inputs["theme"].toLowerCase() == 'projectrisk') {
                operation.inputs["theme"] = 'project';
                this.Query = this.Query.replace("{{rfacount}},", "");
                this.Query = this.Query.replace("{{theme_details}},", theme_details["projectRisk"].length > 0 ? theme_details["projectRisk"].join(",") + "," : "");
            }
            else if (operation.inputs["theme"].toLowerCase() == 'projecthealth') {
                operation.inputs["theme"] = 'project';
                this.Query = this.Query.replace("{{rfacount}},", "");
                this.Query = this.Query.replace("{{theme_details}},", theme_details["projectHealth"].length > 0 ? theme_details["projectHealth"].join(",") + "," : "");
            }

            //Execute the query
            query = {
                text: this.Query.split('{{gadm_level}}').join(operation.inputs["gadm_level"]).split('{{theme}}').join(operation.inputs["theme"]).replace("{{filters}}", filters).split("{{in_wkt}}").join("'" + args.wkt + "'"),
                values: []
            };

            common.executePgQuery(query, this);//Flow to next function when done.
        }
        else {
            //Invalid arguments
            //return message
            callback({text: "Missing or invalid required arguments: bbox must be a comma separated list of 5 integers. first integer must be between 0 and 17."}, null); //err is first argument
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
        if (input["bbox"]) {
            var bbox = input["bbox"].split(",");
            if(bbox.length == 5){
                if(bbox[0] > 17 || bbox[0] < 0){
                    //must be between 0 and 17
                    return false;
                }
            }
            else{
                //Must have 5 args.
                return false;
            }
            //It's got everything we need.
            return true;
        }
    }

    //TODO - check that the ST_Extent of the input WKT at least touches the BBox of the country specified.
    //If not, then respond accordingly.

    return isValid;
}

operation.wrapIdsInQuotes = function(ids) {
    return ids.split(',').map(function(item) {
        return "'" + item + "'";
    });
};

module.exports = operation;