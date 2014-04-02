/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *       on 3/26/14.
 */

angular.module('GeoAngular').controller('StoriesCtrl', function($scope, $routeParams, $location, Route) {
  console.log('StoriesCtrl');

  $scope.navTo = Route.navTo;

  //resize function
  $scope.resizeStoriesScrollablePanel = function(){
    $(".container.stories-container .scrollable").height($(".container.stories-container").height() - $(".container.stories-container .scrollable").position().top);  //This should respond to window.resize events and will be set during that event to make sure the panel stays
  }

  //Connect the layout onresize end event
  window.layout.panes.center.bind("layoutpaneonresize_end", $scope.resizeStoriesScrollablePanel);

  //For Init.
  $scope.resizeStoriesScrollablePanel();

});