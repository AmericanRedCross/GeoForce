//4.3.2014 - Ryan Whitley
var flow = require('flow');
var common = require("../../../common"),settings = require('../../../settings'),shortid = require('shortid');

var operation = {};

/* METADATA */
operation.name = "GetIdsByExtent";
operation.description = "Smartly gets GADM IDs associated with Red Cross disasters or projects based on a map viewport (extent).";
operation.inputs = {};

//operation.inputs["bbox"] = {}; //SW coordiantes, NE coordinates, in lat/lng (4326).  minx, miny, maxx, maxy - example: -127.76000976562501,43.476840397778915,-113.060302734375,49.30363576187125
operation.inputs["bbox"] = {}; //Tile BBox coordinates, zlevel, xmin, xmax, ymin, ymax example: 8, 44, 48, 28, 30
operation.inputs["gadm_level"] = []; //Optional GADM level to start searching thru (default is level 0)

operation.outputImage = false;

operation.execute = flow.define(
    function (args, callback) {
        this.args = args;
        this.callback = callback;
        //Step 1

        //Generate UniqueID for this GP Task
        operation.id = shortid.generate();

        //See if inputs are set. Incoming arguments should contain the same properties as the input parameters.
        if (operation.isInputValid(args) === true) {

            //assign parameters to object.
            operation.inputs["bbox"] = args.bbox;
            operation.inputs["gadm_level"] = args.gadm_level;

            //No cached
            //Convert bbox to WKT
            args.wkt = common.convertTileBoundsToBBoxWKT(args.bbox);

            //Execute the query
            var query = { text: "select * from udf_getidsbyextent(" + (args.gadm_level || "null") + ", '" + args.wkt + "');", values: []};
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



module.exports = operation;