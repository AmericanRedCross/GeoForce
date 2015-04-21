//4.9.2014 - Ryan Whitley
var flow = require('flow');
var common = require("../../../common"),
    settings = require('../../../private/settings'),
    shortid = require('shortid');

var operation = {};

/* METADATA */
operation.name = "GetProjectByGUID";
operation.description = "Gets ECOS Projects for a given GADM boundary based on a GUID.";
operation.inputs = {};

operation.outputImage = false;

operation.inputs["guids"] = {}; //comma separated list of guids
operation.inputs["gadm_level"] = {}; //gadm_level to search thru
operation.inputs["filters"] = ""; //string - sql WHERE clause, minus the 'WHERE'

operation.execute = flow.define(
  function (args, callback) {
    this.args = args;
    this.callback = callback;
    //Step 1

    //Generate UniqueID for this Task
    operation.id = shortid.generate();

    var projectArcQuery;

    if (settings.projectsManyToMany) {
      projectArcQuery =
        "SELECT sf_project.*, sf_project.sf_id as project__r_id, null as location__r_admin_0__c, null as location__r_admin_1__c, null as location__r_admin_2__c, null as location__r_admin_3__c, null as location__r_admin_4__c, null as location__r_admin_5__c \
        FROM sf_project \
        INNER JOIN sf_aggregated_gadm_project_counts_many ON sf_project.sf_id = sf_aggregated_gadm_project_counts_many.sf_id \
        WHERE guid{{gadm_level}} = ({{guids}}) {{filters}};";
    }
    else{
      projectArcQuery =
        "SELECT sf_project.*, sf_project.sf_id as project__r_id, null as location__r_admin_0__c, null as location__r_admin_1__c, null as location__r_admin_2__c, null as location__r_admin_3__c, null as location__r_admin_4__c, null as location__r_admin_5__c \
        FROM sf_project \
        INNER JOIN sf_aggregated_gadm_project_counts ON sf_project.sf_id = sf_aggregated_gadm_project_counts.sf_id \
        WHERE guid{{gadm_level}} = ({{guids}}) {{filters}};";
    }

    // Newer schema where we can have many-to-many locations per project.
    if (settings.projectsManyToMany) {

      operation.ProjectQuery =
        "SELECT sf_project.* \
        FROM sf_project \
        WHERE sf_id = (SELECT DISTINCT sf_id from sf_aggregated_gadm_project_counts_many where sf_project.sf_id = sf_id and guid{{gadm_level}} = {{guids}}) \
         {{filters}};";

    }
    // Original project query where we have 1 location per project.
    else {
      operation.ProjectQuery =
        "SELECT sf_project.* \
        FROM sf_aggregated_gadm_project_counts, sf_project \
        WHERE sf_aggregated_gadm_project_counts.sf_id = sf_project.sf_id \
        AND guid{{gadm_level}} = {{guids}} {{filters}}; ";
    }

    operation.IndicatorQuery = "SELECT sf_indicator.*, " +
      "val.actual__c, val.collection_period__c, val.effective_date__c, val.overlap__c, val.period__c, val.subjective__c, " +
      "val.target_percent__c, val.target__c, val.variance__c, val.period_actual_sum__c, val.period_actuals_max__c, " +
      "val.period_target_max__c, val.period_target_sum__c, val.unique_indicator_value__c, val.isdeleted " +
      "FROM sf_indicator, sf_indicator_value AS val " +
      "WHERE sf_indicator.project__c = {{guid}} AND val.indicator__c = sf_indicator.sf_id LIMIT 10;";


    //operation.IndicatorValueQuery = "SELECT * " +
    //  "FROM sf_indicator_value " +
    //  "WHERE indicator__c = {{guid}}; ";

    //operation.LogframeElementQuery = "SELECT * " +
    //  "FROM sf_logframe_element " +
    //  "WHERE sf_id = {{guid}}";

    //If theme is project, projectRisk, or projectHealth, add to the filters where phase is 1 - 5, which equates to Active projects.
    //In SalesForce, the phase__c column is text and has delimited values in the cells.  So, we'll do a 'like' operator instead of =
    var activeProjectWhereClause = " AND (sf_project.phase__c LIKE '%2%' OR sf_project.phase__c LIKE '%3%' OR sf_project.phase__c LIKE '%4%')";


    //See if inputs are set. Incoming arguments should contain the same properties as the input parameters.
    if (operation.isInputValid(args) === true) {
      //prepare bbox string as WKT
      operation.inputs["guids"] = args.guids;
      operation.inputs["gadm_level"] = args.gadm_level;
      operation.inputs["filters"] = args.filters;

      var filters = '';

      if (operation.inputs["gadm_level"] == -1) {
        operation.inputs["gadm_level"] = "arc";
      }
      if (operation.inputs["filters"] && operation.inputs["filters"] !== 'null') {
        var inputFilters = operation.inputs["filters"].replace(/%20/g, ' ').replace(/%25/g, '%').replace(/%27/g, "'");
        filters = " AND (" + inputFilters + ")";
        filters += activeProjectWhereClause;
      }
      else {
        //Add where clause to only show active projects
        filters = activeProjectWhereClause;
      }

      if (operation.inputs["gadm_level"] === "arc") {
        operation.ProjectQuery = projectArcQuery;
      }

      //need to wrap ids in single quotes
      //Execute the query
      var projectQuery = operation.ProjectQuery
        .split("{{guids}}").join(operation.wrapIdsInQuotes(operation.inputs["guids"]))
        .split("{{gadm_level}}").join(operation.inputs["gadm_level"])
        .split("{{filters}}").join(filters);

      common.executePgQuery({text: projectQuery}, this); //Flow to next function when done.
    }
    else {
      //Invalid arguments
      //return message
      callback("Missing or invalid required arguments: guids"); //err is first argument
    }
  },
  function (err, results) {
    if (err) {
      console.error(err);
      this.callback(err);
      return;
    }
    var projects = this.projects = results.rows;
    if(!projects || projects.length == 0){
      //No properties for this GUID
      this({});
    }

    //Get related project indicators
    for (var i = 0, len = projects.length; i < len; i++) {
      var proj = projects[i];
      var projId = proj.sf_id;
      var indicatorQuery = { text: operation.IndicatorQuery.replace("{{guid}}", operation.wrapIdsInQuotes(projId)) };
      common.executePgQuery(indicatorQuery, this.MULTI(projId));
    }
  },
  function (args) {
    for (var i = 0, len = this.projects.length; i < len; i++) {
      var proj = this.projects[i];
      var projId = proj.sf_id;
      for (var key in args) {
        if (key === projId) {
          var indicRes = args[key];
          // if there is an error for the indicator query
          if (indicRes[0] !== null) {
            this.callback(indicRes[0]);
          } else {
            // apply indicator data to project
            proj.indicators = indicRes[1].rows;
            if (proj.indicators.length === 0) {
              proj.indicators = 'none';
            }
          }
          break;
        }
      }
    }
    var results = { rows: this.projects };

    this.callback(null, results);
  }
);

//Make sure arguments are tight before executing
operation.isInputValid = function (input) {
  //Test to see if inputs are specified
  var isValid = false;

  if (input) {
    //make sure we have a bbox.  Other args are optional
    if (input["guids"] && input["gadm_level"]) {
      //It's got everything we need.
      return true;
    }
  }

  return isValid;
};

operation.wrapIdsInQuotes = function (ids) {
  return ids.split(',').map(function (item) {
    return "'" + item + "'";
  });
};

operation.fullyQualifyFilter = function (filterString) {
  var Ors = filterString.split(' OR ');


  Ors.forEach(function (item) {

  });


};

module.exports = operation;
