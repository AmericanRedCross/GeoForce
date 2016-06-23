//4.9.2014 - Ryan Whitley
var flow = require('flow');
var common = require("../../../common"),
    settings = require('../../../private/settings'),
    shortid = require('shortid');

var operation = {};

/* METADATA */
operation.name = "DoECOSTextSearch";
operation.description = "Search ECOS for given text.";
operation.inputs = {};

operation.outputImage = false;

operation.inputs["text"] = {}; //search text

operation.ProjectSearchFields = ["sector__c", "status__c", "stage_name__c", "sub_sector__c", "name", "summary__c", "sf_id"]; //List columns from sf_project thru which to search
operation.DisasterSearchFields = ["name", "disaster_type__c", "summary__c", "sf_id", "category__c"]; //List columns from sf_disaster thru which to search

//Do not display projects or disasters that have TEST as the first word in the project name.
var removeTESTProjects = " AND name NOT ILIKE 'test%'";

function getSQLQueries (){
    var Queries = []; //Query will be built dynamically below
    Queries.push({ type: 'project', query: buildQueryClause(operation.ProjectSearchFields, 'sf_project')});
    Queries.push({ type: 'disaster', query: buildQueryClause(operation.DisasterSearchFields, 'sf_disaster')});
    return Queries;
}

function buildQueryClause(searchFields, tableName, tableAlias){
    //Loop thru Search Field Array and build SQL query
    var sql = "";
    if(searchFields && searchFields.length > 0) {
        sql += "SELECT * from " + tableName + " WHERE (";
        sql += searchFields.join(" ILIKE '%{{text}}%' OR ");
        sql += " ILIKE '%{{text}}%' ";

    }
    if(tableName == 'sf_project'){
       sql = sql.replace(" * ", " 'Project' as theme_type, sf_project.* "); //Replace * with whitelist
       sql += ")";
       sql += removeTESTProjects;
    }else if(tableName == 'sf_disaster'){
        sql = sql.replace(" * ", " 'Disaster' as theme_type, sf_disaster.* "); //Replace * with whitelist
        sql += ");"
    }
    return sql;
}

operation.execute = flow.define(
    function (args, callback) {
        this.args = args;
        this.callback = callback;
        //Step 1

        //Generate UniqueID for this Task
        operation.id = shortid.generate();

        this.queries = getSQLQueries(); //Build the query objects

        //See if inputs are set. Incoming arguments should contain the same properties as the input parameters.
        if (operation.isInputValid(args) === true) {
            //prepare bbox string as WKT
            operation.inputs["text"] = args.text;

            //Execute the query
            this.queries.forEach(function(queryObj){
                var thisQuery = { text: queryObj.query.split("{{text}}").join(operation.inputs["text"]) };
                if(thisQuery) {
                    common.executePgQuery(thisQuery, this.MULTI(queryObj.type));//Flow to next function when all are done.
                }
            }.bind(this));

        }
        else {
            //Invalid arguments
            //return message
            callback("Missing or invalid required arguments: text"); //err is first argument
        }
    },
    function (results) {
        //Step 2 - get the results and pass back to calling function
        //Merge the results together.
        var mergedResults = {rows: []};
        this.queries.forEach(function(queryObj) {
            if(queryObj.query.length > 0) {
                if(results[queryObj.type][0]){
                    //There was an error.
                    //Skip this.
                    common.log("Error searching for " + queryObj.type);
                }else{
                    mergedResults.rows = mergedResults.rows.concat(results[queryObj.type][1].rows);
                }
            }
        });
        this.callback(null, mergedResults);
    }
);

//Make sure arguments are tight before executing
operation.isInputValid = function (input) {
    //Test to see if inputs are specified
    var isValid = false;

    if (input) {
        //make sure we have a bbox.  Other args are optional
        if (input["text"]) {
            //It's got everything we need.
            return true;
        }
    }

    return isValid;
};

operation.wrapIdsInQuotes = function(ids){
    return ids.split(',').map(function(item){
        return "'" + item + "'";
    });
};

module.exports = operation;