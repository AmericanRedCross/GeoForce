/**
 *
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *     on Thu May 8 2014
 *
 * This module fetches the meta-data about all of the
 * @type {exports}
 */

var sf    = require('./../salesforce');
var flow  = require('flow');
var S     = require('string');
var fs    = require('fs');


/**
 * All of the tables that we are to get meta-data about...
 *
 * @type {{Project__c: null, Disaster__c: null, Disaster_Location__c: null, Project_Location__c: null, Request_For_Assistance__c: null, Location__c: null}}
 */
var tables = {
  Project__c: null,
  Disaster__c: null,
  Disaster_Location__c: null,
  Project_Location__c: null,
  Request_For_Assistance__c: null,
  Location__c: null
};


flow.exec(
  function() {
    for (var table in tables) {
      sf.describeObject(table, this.MULTI(table));
    }
  }, function(results) {
    for (var result in results) {
      // we dont want the numeric stuff that flow throws in here...
      if( ! S(result).isNumeric() ) {
        tables[result] = results[result];
      }
    }
    fs.writeFileSync('meta-data/sf-objects.json', JSON.stringify(tables,null,2));

    createObjectFieldHash();
  }
);

function createObjectFieldHash() {
  for (var table in tables) {
    var t = tables[table];
    tables[table] = {};
    var fields = t.fields;
    for (var i in fields) {
      var field = fields[i];
      tables[table][field.name] = {
        label: field.label,
        inlineHelpText: field.inlineHelpText,
        picklistValues: field.picklistValues || null
      }
    }
  }
  fs.writeFileSync('meta-data/sf-object-field-hash.json', JSON.stringify(tables,null,2));
  fs.writeFileSync('../GeoAngular/app/data/sf-object-field-hash.json', JSON.stringify(tables));
}
