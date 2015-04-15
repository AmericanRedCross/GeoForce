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
  Location__c: null,
  Indicator__c: null,
  Indicator_Value__c: null,
  Logframe_Element__c: null,
  Risk__c: null,
  Project_Evaluation__c: null

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
    console.log('meta-data/sf-objects.json written to disk');

    createObjectFieldHash();
    createProjectFilterCheckboxes();
      createDisasterFilterCheckboxes()
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
    hash[table] = {};
    var t = tables[table];
    var fields = t.fields;
    for (var i in fields) {
      var field = fields[i];
      if (table === 'Location__c') {
        var key = 'location__r_' + field.name.toLowerCase();
      } else {
        var key = field.name.toLowerCase();
      }
      hash[table][key] = {
        label: field.label,
        inlineHelpText: field.inlineHelpText,
        picklistValues: field.picklistValues || null
      }
    }
  }
  fs.writeFileSync('meta-data/sf-object-field-hash.json', JSON.stringify(hash,null,2));
  console.log('meta-data/sf-object-field-hash.json written to disk');
  fs.writeFileSync('../GeoAngular/app/succubus_gitignore/sf-object-field-hash.json', JSON.stringify(hash));
  console.log('../GeoAngular/app/succubus_gitignore/sf-object-field-hash.json written to disk');
}

function createProjectFilterCheckboxes() {
  var checkboxes = {
    sectors: [],
    status: []
  };

    var colors = ['#e65552',	'#f18432',	'#f4d746',	'#6d7c58',	'#b9c03e',	'#0f4e60',	'#01aa95',	'#a1b1cc',	'#ff859a',	'#b3b091',	'#8d2725',	'#a37654',	'#baa749',	'#75bb18',	'#dddfb3',	'#39b4d7',	'#87d8ce',	'#4876c3',	'#db1739',	'#8d8105',	'#d08484',	'#fdd5b7',	'#f4f7d4',	'#d8efb9',	'#eef758',	'#d6f4fd',	'#abbebc',	'#847cd1',	'#ebb8d4',	'#e9ce84',	'#d0a6a6',	'#615549',	'#99692b',	'#adbf95',	'#15e5c5',	'#5bb7d2',	'#4a8c84',	'#d18cfd',	'#fc173e',	'#fbf3a5',	'#9b5c5c',	'#fbebde',	'#ddb903',	'#cbcbcb',	'#464646',	'#287084',	'#b2f7ee',	'#9e9e9e',	'#eeeeee',	'#ae1fa9']

  var fields = tables.Project__c.fields;
  for (var key in fields) {
    var field = fields[key];
    if (field.name === "Status__c") {
      for (var key2 in field.picklistValues) {
        checkboxes.status.push({name: field.picklistValues[key2].value, checked: false});
      }
      continue;
    }
    if (field.name === "Sector__c") {
      var clrIdx = 0;
      for (var key3 in field.picklistValues) {
        checkboxes.sectors.push({name: field.picklistValues[key3].value, checked: false, color: colors[clrIdx++]});
      }
    }
  }
  fs.writeFileSync('meta-data/sf-project-filter-checkboxes.json', JSON.stringify(checkboxes,null,2));
  console.log('meta-data/sf-project-filter-checkboxes.json written to disk');
  fs.writeFileSync('../GeoAngular/app/succubus_gitignore/sf-project-filter-checkboxes.json', JSON.stringify(checkboxes));
  console.log('../GeoAngular/app/succubus_gitignore/sf-project-filter-checkboxes.json written to disk');
}

function createDisasterFilterCheckboxes() {
  var checkboxes = {
    disasterTypes: [],
    status: []
  };

  var colors = ['#e65552',	'#f18432',	'#f4d746',	'#6d7c58',	'#b9c03e',	'#0f4e60',	'#01aa95',	'#a1b1cc',	'#ff859a',	'#b3b091',	'#8d2725',	'#a37654',	'#baa749',	'#75bb18',	'#dddfb3',	'#39b4d7',	'#87d8ce',	'#4876c3',	'#db1739',	'#8d8105',	'#d08484',	'#fdd5b7',	'#f4f7d4',	'#d8efb9',	'#eef758',	'#d6f4fd',	'#abbebc',	'#847cd1',	'#ebb8d4',	'#e9ce84',	'#d0a6a6',	'#615549',	'#99692b',	'#adbf95',	'#15e5c5',	'#5bb7d2',	'#4a8c84',	'#d18cfd',	'#fc173e',	'#fbf3a5',	'#9b5c5c',	'#fbebde',	'#ddb903',	'#cbcbcb',	'#464646',	'#287084',	'#b2f7ee',	'#9e9e9e',	'#eeeeee',	'#ae1fa9']

  var fields = tables.Disaster__c.fields;
  for (var key in fields) {
    var field = fields[key];
    if (field.name === "IROC_Status__c") {
      for (var key2 in field.picklistValues) {
        checkboxes.status.push({name: field.picklistValues[key2].value, checked: false});
      }
      continue;
    }
    if (field.name === "Disaster_Type__c") {
      var clrIdx = 0;
      for (var key3 in field.picklistValues) {
        checkboxes.disasterTypes.push({name: field.picklistValues[key3].value, checked: false, color: colors[clrIdx++]});
      }
    }
  }
  fs.writeFileSync('meta-data/sf-disaster-filter-checkboxes.json', JSON.stringify(checkboxes,null,2));
  console.log('meta-data/sf-project-disaster-checkboxes.json written to disk');
  fs.writeFileSync('../GeoAngular/app/succubus_gitignore/sf-disaster-filter-checkboxes.json', JSON.stringify(checkboxes));
  console.log('../GeoAngular/app/succubus_gitignore/sf-disaster-filter-checkboxes.json written to disk');
}
