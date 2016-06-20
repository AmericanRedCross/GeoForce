/**
 * Created by ryanwhitley on 4/28/15.
 */
var pg = require('pg'),
  common = require("../../common"),
  settings = require('../../private/settings');

var pCodeLibrary = {};

//For PCoder DB
//Settingsjs needs to have a settings.pcoderPG object that contains the connection string for pcoder.
pCodeLibrary.PCoderConString = "postgres://" + settings.pcoderPG.username + ":" + settings.pcoderPG.password + "@" + settings.pcoderPG.server + ":" + settings.pcoderPG.port + "/" + settings.pcoderPG.database;

//Executes queries against pcoder DB
//TODO: Make a single function that accepts connection keyword to choose the right connection
pCodeLibrary.executePgQuery = function (query, callback) {
  //Just run the query
  //Setup Connection to PG
  pg.connect(pCodeLibrary.PCoderConString, function(err, client, done) {
    if(err){
      //return an error
      callback(err);
      return;
    }

    //Log the query to the console, for debugging
    common.log("Executing query: " + query.text + (query.values && query.values.length > 0 ?  ", " + query.values : ""));

    //execute query
    client.query(query, function(err, result) {
      done();

      //go to callback
      callback(err, result);
    });
  });
};

module.exports = pCodeLibrary;