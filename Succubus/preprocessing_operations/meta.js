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
    createProjectFilterCheckboxes();
  }
);

/**
 * This gets all of the keys to be in the exact format they will be found
 * in the details panel in GeoAngular. You can see this being used in:
 *
 * GeoAngular/app/scripts/controllers/details.js
 *
 * This outputs into the meta-data directory as well as the data directory
 * in GeoAngular.
 */
function createObjectFieldHash() {
  var hash = {};
  for (var table in tables) {
    var t = tables[table];
    var fields = t.fields;
    for (var i in fields) {
      var field = fields[i];
      if (table === 'Location__c') {
        var key = 'location__r_' + field.name.toLowerCase();
      } else {
        var key = field.name.toLowerCase();
      }
      hash[key] = {
        label: field.label,
        inlineHelpText: field.inlineHelpText,
        picklistValues: field.picklistValues || null
      }
    }
  }
  fs.writeFileSync('meta-data/sf-object-field-hash.json', JSON.stringify(hash,null,2));
  fs.writeFileSync('../GeoAngular/app/data/sf-object-field-hash.json', JSON.stringify(hash));
}

function createProjectFilterCheckboxes() {
  var checkboxes = {
    sectors: [],
    status: []
  };

  var fields = tables.Project__c.fields;
  for (var i = 0, len = fields.length; i < len; ++i) {
    var field = fields[i];
    console.log(field.name);
    if (field.name === "Status__c") {
      for (var j = 0, len = field.picklistValues.length; j < len; ++j) {
        checkboxes.status.push({name: field.picklistValues[j].value, checked: false});
      }
    }
    if (field.name === "Sector__c") {
      for (var k = 0, len = field.picklistValues.length; k < len; ++k) {
        checkboxes.sectors.push({name: field.picklistValues[k].value, checked: false});
      }
    }
  }
  fs.writeFileSync('meta-data/sf-project-filter-checkboxes.json', JSON.stringify(checkboxes,null,2));
  fs.writeFileSync('../GeoAngular/app/data/sf-project-filter-checkboxes.json', JSON.stringify(checkboxes));
}
