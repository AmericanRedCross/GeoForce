/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *       on 3/18/14.
 */

/**
 * Config File for Stories Panel
 */
module.exports = angular.module('GeoAngular').service('StoriesConfig', function () {

  /**
   * Stories Panel List
   *
   * List of stories that get shown in the Stories Panel. Edit this to add or remove
   * stories that the user will see as choices. All stories, including ones not in this
   * list, can still be manually referenced in the url. This is just for the User Interface.
   */
  this.stories = [
    'haiyan',
    'ebola',
    'gis',
    'disasters',
    'popmovement',
    'currentprojects',
    'haitiprojects',
    'gdpc',
    'lacprojects',
    'ameeprojects',
    'africaprojects'
  ];


  /**
   * Stories
   *
   * All story aliases can be referred to in the url. The corresponding
   * path to the thumbnail in the Stories Panel should be:
   *    images/{aliasName}.jpg
   *
   */

  this.haiyan = {
    url: '/mapfolio/index.html#/map@12.768946,122.486572,6(ortho,gadm0,gdacs),disaster?details-panel=open&sf_id=a0Ed000000qZntUEAS',
    name: 'Typhoon Haiyan Response',
    date: '2013-10-12',
    thumbnail: 'images/stories/haiyan.jpg',
    keywords: 'Typhoon, Disaster Response, Haiyan, Disaster, AMEE'
  };
  this.pam = {
    url: '/mapfolio/index.html#/map@-16.551962,168.085327,7(ortho,gdacs,gadm0),disaster',
    name: 'Cyclone Pam Resopnse',
    date: '2015-15-3',
    thumbnail: 'images/stories/pam.jpg',
    keywords: 'Cyclone, Disaster Response, Vanuatu, Africa'
  };
  this.gis = {
    url: 'mapfolio/#/map@13.496473,10.458984,3(satellite,gadm0),project/export?filters=sector__c%2520LIKE%2520%2527%2525GIS%2520%2526%2520Information%2520Management%2525%2527%2520',
    name: 'GIS Projects',
    date: '2015-30-12',
    thumbnail: 'images/stories/gis.jpg',
    keywords: 'GIS, Missing Maps, Map'
  };
  this.disasters = {
    url: 'mapfolio/#/map@19.145168,41.660156,2(satellite,gadm0),disasterType?filters=iroc_status__c%2520LIKE%2520%2527%2525Monitoring%2525%2527OR%2520iroc_status__c%2520LIKE%2520%2527%2525Active%2525%2527%2520&category=Human%20Related',
    name: 'Active Responses',
    date: '2015-30-12',
    thumbnail: 'images/stories/disasters.jpg',
    keywords: 'IROC, Response, Disaster'
  };
  this.popmovement = {
    url: 'mapfolio/#/map@45.475540,15.754395,5(satellite,gadm0),disasterType?filters=disaster_type__c%2520LIKE%2520%2527%2525Population%2520Movement%2525%2527%2520AND%2520%2528iroc_status__c%2520LIKE%2520%2527%2525Monitoring%2525%2527OR%2520iroc_status__c%2520LIKE%2520%2527%2525Active%2525%2527%2520%2529&category=Human%20Related',
    name: 'European Pop Movement',
    date: '2015-30-12',
    thumbnail: 'images/stories/popmovement.jpg',
    keywords: 'IROC, Response, Disaster, Population Movement'
  };
  this.currentprojects = {
    url: 'mapfolio/#/map@24.686952,27.246094,2(satellite,gadm0),project',
    name: 'Current Projects',
    date: '2015-30-12',
    thumbnail: 'images/stories/projects.jpg',
    keywords: 'IRP, Africa, AMEE, LAC, World, Programs, Projects'
  };
  this.haitiprojects = {
    url:'mapfolio/#/map@18.940062,-71.650085,8(satellite,gadm0),project?filters=null&details-panel=open',
    name: 'HAP Projects',
    date: '2015-30-12',
    thumbnail: 'images/stories/hap.jpg',
    keywords: 'LAC, HAP, Haiti, Programs, Projects'
  };
  this.gdpc = {
    url:'mapfolio/#/map@6.489983,18.105469,2(satellite,gadm0),project?filters=business_unit__c%2520LIKE%2520%2527%2525GDPC%2525%2527%2520',
    name: 'GDPC Projects',
    date: '2015-30-12',
    thumbnail: 'images/stories/gdpc.jpg',
    keywords: 'GDPC, Programs, Projects'
  };
  this.lacprojects = {
    url:'mapfolio/#/map@-12.382928,-64.028320,4(satellite,gadm0),project?filters=business_unit__c%2520LIKE%2520%2527%2525LAC%2525%2527%2520',
    name: 'GDPC Projects',
    date: '2015-30-12',
    thumbnail: 'images/stories/lac.jpg',
    keywords: 'LAC, Programs, Projects'
  };
  this.ameeprojects = {
    url:'mapfolio/#/map@6.489983,18.105469,2(satellite,gadm0),project?filters=business_unit__c%2520LIKE%2520%2527%2525GDPC%2525%2527%2520',
    name: 'GDPC Projects',
    date: '2015-30-12',
    thumbnail: 'images/stories/amee.jpg',
    keywords: 'AMEE, Programs, Projects'
  };
  this.africaprojects = {
    url:'mapfolio/#/map@-1.581830,23.598633,4(satellite,gadm0),project',
    name: 'Africa Projects',
    date: '2015-30-12',
    thumbnail: 'images/stories/africa.jpg',
    keywords: 'Africa, Programs, Projects'
  };
  this.rfl = {
    url:'mapfolio/#/map@37.405074,-94.020996,5(satellite,gadm1),project?filters=business_unit__c%2520LIKE%2520%2527%2525IHL%2525%2527%2520OR%2520business_unit__c%2520LIKE%2520%2527%2525RFL%2525%2527%2520&details-panel=open',
    name: 'RFL Projects',
    date: '2015-30-12',
    thumbnail: 'images/stories/rfl.jpg',
    keywords: 'Africa, Programs, Projects'
  };

  /**
   * For layers, we try and get an alias for everything, so if it's a URL that
   * does not match, we just want to return itself so we can fetch that given url.
   *
   * @param name
   * @returns {*}
   */
  this.find = function(name) {
    var val = this[name] || this[name.toLowerCase()];
    if (typeof val !== 'undefined' && val !== null) {
      return val;
    }
    if (name.slice(0, 4).toLowerCase() === 'http') {
      return name;
    }
    console.error('COULD NOT FIND ALIAS: ' + name);
    return null;
  };

});
