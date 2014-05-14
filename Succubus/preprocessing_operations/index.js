/**
 * Created by Ryan Whitley <rwhitley@spatialdev.com>
 *     on Tue April 11th, 2014
 *
 *     Runs pre ETL operations, such as view and static table dropping for preprocessing data.
 */


var ecosetl = require('../pg');
var flow = require('flow');

/**
 * Execute the meta-data gathering module...
 */
require('./meta');

module.exports = {};

var operations = {};

function dropThemeView(themeName) {
  return "DROP VIEW IF EXISTS vw_theme_"+themeName+"_gadm;";
}

function dropView(viewName) {
    return "DROP VIEW IF EXISTS " + viewName + ";";
}

//Drop Theme Views used by the client app
operations.dropProjectThemeView = dropThemeView('project');
operations.dropDisasterLocationThemeView = dropThemeView('disaster_location');
operations.dropDisastersView = dropView('vw_sf_disaster');

module.exports.run = flow.define(
	function(cb) {
		this.cb = cb;
		console.log("Starting preprocessing operations.");
		for (var operation in operations) {
			ecosetl.query(operations[operation], this.MULTI());
		}
	},
	function(){
		//When all have finished
		this.cb();
	}
);

