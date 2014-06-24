/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *       on 3/26/14.
 */

module.exports = angular.module('GeoAngular').controller('StoriesCtrl', function($scope, $stateParams, StoriesConfig) {
  $scope.params = $stateParams;

  //Get Stories from config file and load them.
  $scope.storiesConfig = StoriesConfig;
  $scope.stories = [];
  $scope.storiesSearchArray = [];
  $scope.storiesSearchText = "";
  $scope.storiesExtentArray = []; //currently not used, but should be to allow Extent to perform 'AND' logic with the keywords.

    for (var storiesKey in StoriesConfig) {

        // We don't want to show the find func.
        if (  typeof StoriesConfig[storiesKey] === 'function' || storiesKey == 'stories') {
            continue;
        }

       $scope.stories.push(StoriesConfig[storiesKey]);
    }

  $scope.filterByCheckbox = function(value) {
    //Take the term passed in and add or remove it from the keywords textbox.
    if ($scope.storiesSearchArray.indexOf(value) == -1) {
      //Add it
      $scope.storiesSearchArray.push(value);
    }
    else {
      //Remove it
      $scope.storiesSearchArray.splice($scope.storiesSearchArray.indexOf(value), 1);
    }
  }

  $scope.filterExtentByCheckbox = function(value) {
    //Take the term passed in and add or remove it from the keywords textbox.
    if ($scope.storiesExtentArray.indexOf(value) == -1) {
      //Add it
      $scope.storiesExtentArray.push(value);
    }
    else {
      //Remove it
      $scope.storiesExtentArray.splice($scope.storiesExtentArray.indexOf(value), 1);
    }
  }

  $scope.clearSearch = function() {
    $scope.storiesSearchArray = [];
    $scope.storiesSearchText = "";
    $scope.storiesExtentArray = [];
  }
});


angular.module('GeoAngular')
  .filter('searchStoriesFilter', function () {
    return function (stories, $scope) {
      var outStories = [];
      if (stories) {
        //loop thru stories and filter based on search text/checkboxes.
        //comma separated items should be broken up and searched for separately using 'OR' logic.

        var keywords = [];
        if($scope.storiesSearchText.length > 0){
          keywords = $scope.storiesSearchText.split(",").concat($scope.storiesSearchArray);
        }
        else{
          keywords = $scope.storiesSearchArray;
        }
        if(keywords.length == 0){
          return stories;
        }

        stories.forEach(function(story){
            keywords.forEach(function(keyword){
                if(keyword.length > 0 && story.keywords.toLowerCase().indexOf($.trim(keyword.toLowerCase())) > -1) {
                  if (outStories.indexOf(story) == -1) {
                    outStories.push(story);
                  }
                }
            });
        });


      }else{
        return stories;
      }
      return outStories;
    };
  });