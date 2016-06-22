/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *        and Ryan Whitley      <rwhitley@spatialdev.com>
 *         on 4/16/14.
 */

module.exports = angular.module('GeoAngular').controller('SideViewCtrl', function($scope, $timeout) {

  //resize function
  function resizeScrollablePanel() {
    $(".side-view .scrollable").height($(".side-view .navpanel").height() - $(".side-view .navpanel .scrollable").position().top);  //This should respond to window.resize events and will be set during that event to make sure the panel stays
    // dynamically resize project filter tabs
    $("md-content .project-filters").height($(".navpanel.container.filters-container").height() - 125);
  }

  //Connect the layout onresize end event
  window.addEventListener("resize", resizeScrollablePanel);


  //For Init.
  resizeScrollablePanel();

  // this fires when all angular dom elements are rendered
  $timeout(function () {
    resizeScrollablePanel();
  });

});
