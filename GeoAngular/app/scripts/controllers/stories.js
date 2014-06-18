/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *       on 3/26/14.
 */

module.exports = angular.module('GeoAngular').controller('StoriesCtrl', function($scope, $stateParams, StoriesConfig) {
  $scope.params = $stateParams;

  //Get Stories from config file and load them.
  $scope.storiesConfig = StoriesConfig;
  $scope.stories = [];
  $scope.storiesSearchText = "";

    for (var storiesKey in StoriesConfig) {

        // We don't want to show the find func.
        if (  typeof StoriesConfig[storiesKey] === 'function' || storiesKey == 'stories') {
            continue;
        }

       $scope.stories.push(StoriesConfig[storiesKey]);
    }

  $scope.filterByCheckbox = function(value){
      //Take the term passed in and add or remove it from the keywords textbox.
      if($scope.storiesSearchText.indexOf(value) == -1){
          //Add it
          $scope.storiesSearchText += ", " + value;
      }
      else{
          //Remove it
          $scope.storiesSearchText.replace(", " + value, "").replace(value, "");
      }
  }

  $scope.selectedStoriesFilter = function(customers) {
        var i, len;

        // get customers that have been checked
        var checkedCustomers = $filter('filter')(customers, {checked: true});

        // Add in a check to see if any customers were selected. If none, return
        // them all without filters
        if(checkedCustomers.length == 0) {
            return customers;
        }

        // get all the unique cities that come from these checked customers
        var cities = {};
        for(i = 0, len = checkedCustomers.length; i < len; ++i) {
            // if this checked customers cities isn't already in the cities object
            // add it
            if(!cities.hasOwnProperty(checkedCustomers[i].city)) {
                cities[checkedCustomers[i].city] = true;
            }
        }

        // Now that we have the cities that come from the checked customers, we can
        //get all customers from those cities and return them
        var ret = [];
        for(i = 0, len = customers.length; i < len; ++i) {
            // If this customer's city exists in the cities object, add it to the
            // return array
            if(cities[customers[i].city]) {
                ret.push(customers[i]);
            }
        }

        // we have our result!
        return ret;
    };

});
