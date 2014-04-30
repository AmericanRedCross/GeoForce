/**
 * Created by Ryan Whitley <rwhitley@spatialdev.com>
 *     on Tue April 10th, 2014
 */

var ecosetl = require('./pg.js');
var postprocessing = require('./postprocessing_operations'), preprocessing = require('./preprocessing_operations');

//Run preprocessing operations, then ETL, followed by postprocessing operations
preprocessing.run(function(){
	//Finished preprocessing
	console.log("Finished preprocessing.");

	console.log("Starting ETL.");
	//Start ETL
	ecosetl.run(function(err){
		console.log("ETL Complete. Moving on to Postprocessing.");

		//when ETL is done, try postprocessing commands
		postprocessing.run(function(){
			//We're done postprocessing.
			console.log("Done postprocessing.")
		})
	});
});

