/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *       on 4/10/14.
 */

var config = {};

config.chubbsPath = function(relPath) {
  return window.location.protocol + "//"  + window.location.host + "/" + relPath;
};

config.proxyPath = function(path) {
  return config.chubbsPath('services/utilities/proxy?url=' + path);
};


/**
 * These are the details initially shown for projects.
 * Clicking on the Show More Details button will show the rest.
 *
 * @type {{}}
 */
config.projectDetailsShortList = {
  end_date__c: true,
  isd_region__c: true,
  name: true,
  status__c: true,
  sector__c: true,
  start_date__c: true,
  target_beneficiaries_direct__c: true,
  timeline_status__c: true,
  total_budget__c: true
};


/**
 * These are the details initially shown for disasters.
 * Clicking on the Show More Details button will show the rest.
 *
 * @type {{}}
 */
config.disasterDetailsShortList = {
  name: true
};
