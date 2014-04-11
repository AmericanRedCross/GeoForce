/**
 * Created by Ryan Whitley <rwhitley@spatialdev.com>
 *     on Tue April 11th, 2014
 *
 *     Runs pre ETL operations, such as view and static table dropping for preprocessing data.
 */

var ecosetl = require('../pg'), flow = require('flow');


module.exports = {};

var operations = {};

//Drop Theme Views used by the client app
operations.dropThemeViews = "DROP VIEW IF EXISTS vw_theme_projects_gadm;";

module.exports.run = flow.define(
	function(cb) {
		this.cb = cb;
		console.log("Starting preprocessing operations.")
		for (var operation in operations) {
			ecosetl.query(operations[operation], this.MULTI());
		}
	},
	function(){
		//When all have finished
		this.cb();
	}
)

