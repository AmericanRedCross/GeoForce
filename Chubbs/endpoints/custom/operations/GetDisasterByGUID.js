/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *       on 4/28/14.
 */

/**
 *
 * Example SQL Query:
 *
 * SELECT * FROM sf_disaster_location AS loc
 * LEFT JOIN sf_disaster as dis ON loc.disaster__r_id = dis.sf_id
 * WHERE location__r_gis_geo_id__c IN ('13501e00-c3a0-4772-b060-66a9c80c3702');
 *
 * SELECT * FROM sf_request_for_assistance
 * WHERE disaster__r_id = 'a0Fd000000TjiIzEAJ';
 *
 * Example Endpoint:
 *
 * http://localhost:3000/services/custom/custom_operation?name=getdisastersbyguid&format=json&guids=13501e00-c3a0-4772-b060-66a9c80c3702&pretty=true
 *
 */

var flow = require('flow');
var common = require("../../../common");
var settings = require('../../../settings');
var shortid = require('shortid');

var operation = {};

/* METADATA */
operation.name = "GetDisasterByGUID";
operation.description = "Gets ECOS Disasters for a given GADM boundary based on a GUID.";
operation.inputs = {};

operation.outputImage = false;

operation.inputs["guids"] = {}; //comma separated list of guids
operation.inputs["gadm_level"] = {}; //gadm_level to search thru

operation.RequestForAssistanceQuery =
"SELECT * FROM sf_request_for_assistance \
WHERE disaster__r_id = {{guid}};";

operation.execute = flow.define(
  function (args, callback) {
    this.args = args;
    this.callback = callback;
    //Step 1

    operation.DisasterQuery =
      "SELECT dis.*, loc.disaster__r_id, loc.location__r_admin_0__c, location__r_admin_1__c, location__r_admin_2__c, location__r_admin_3__c, location__r_admin_4__c, location__r_admin_5__c FROM sf_disaster_location AS loc \
      LEFT JOIN sf_disaster as dis ON loc.disaster__r_id = dis.sf_id \
      INNER JOIN sf_aggregated_gadm_disaster_counts ON dis.sf_id = sf_aggregated_gadm_disaster_counts.sf_id \
      AND sf_aggregated_gadm_disaster_counts.guid{{gadm_level}}::text = loc.location__r_gis_geo_id__c \
      WHERE guid{{gadm_level}} = ({{guids}});";

    operation.DisasterARCQuery =
      "SELECT dis.*, dis.sf_id as disaster__r_id, null as location__r_admin_0__c, null as location__r_admin_1__c, null as location__r_admin_2__c, null as location__r_admin_3__c, null as location__r_admin_4__c, null as location__r_admin_5__c \
      FROM sf_disaster dis \
      INNER JOIN sf_aggregated_gadm_disaster_counts ON dis.sf_id = sf_aggregated_gadm_disaster_counts.sf_id \
      WHERE guid{{gadm_level}} = ({{guids}});";

    //Generate UniqueID for this Task
    operation.id = shortid.generate();

    //See if inputs are set. Incoming arguments should contain the same properties as the input parameters.
    if (operation.isInputValid(args) === true) {
      //prepare bbox string as WKT
      operation.inputs["guids"] = args.guids;
      operation.inputs["gadm_level"] = args.gadm_level;

      if(operation.inputs["gadm_level"] == -1) {
          operation.inputs["gadm_level"] = "arc";
      }

      //need to wrap ids in single quotes
      //Execute the query
      var disasterQuery;
      if(operation.inputs["gadm_level"] == "arc"){
        disasterQuery = { text: operation.DisasterARCQuery.split("{{guids}}").join(operation.wrapIdsInQuotes(operation.inputs["guids"])).split("{{gadm_level}}").join(operation.inputs["gadm_level"]) };
      }
      else{
        disasterQuery = { text: operation.DisasterQuery.split("{{guids}}").join(operation.wrapIdsInQuotes(operation.inputs["guids"])).split("{{gadm_level}}").join(operation.inputs["gadm_level"]) };
      }
      common.executePgQuery(disasterQuery, this);//Flow to next function when done.
    }
    else {
      //Invalid arguments
      //return message
      callback("Missing or invalid required arguments: guids"); //err is first argument
    }
  },
  function (err, results) {
    if (err) {
      this.callback(err);
      return;
    }
    //Step 2 - do the request for assistance query
    var disasters = this.disasters = results.rows;
    for (var i = 0, len = disasters.length; i < len; ++i) {
      var disaster = disasters[i];
      var id = disaster.disaster__r_id;
      var requestForAssistanceQuery = { text: operation.RequestForAssistanceQuery.replace("{{guid}}", operation.wrapIdsInQuotes(id)) };
      common.executePgQuery(requestForAssistanceQuery, this.MULTI(id));
    }
  },
  function (args) {
    //Step 3 - get the results and pass back to calling function
    for (var i = 0, len = this.disasters.length; i < len; ++i) {
      var disaster = this.disasters[i];
      var disasterId = disaster.disaster__r_id;
      for (var key in args) {
        if (key === disasterId) {
          var reqForAssist = args[key];
          // if there is an error for the request for assistance query
          if (reqForAssist[0] !== null) {
            this.callback(reqForAssist[0]);
          } else {
            // apply request for assistance data to disaster
            disaster.requestsForAssistance = reqForAssist[1].rows; // the second arg from the query, which would be the result.
            if (disaster.requestsForAssistance.length === 0) {
              disaster.requestsForAssistance = 'none';
            }
          }
        }
      }
    }
    var results = { rows: this.disasters };
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

operation.wrapIdsInQuotes = function(ids){
  return ids.split(',').map(function(item){
    return "'" + item + "'";
  });
};

module.exports = operation;
