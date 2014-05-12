/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *       on 5/6/14.
 */

angular.module('GeoAngular').controller('ThemeCtrl', function ($scope, $rootScope, $state, $stateParams, VectorProvider) {

  var themeNameHash = $rootScope.themeNameHash = {
    project: 'Projects',
    disaster: 'Disasters',
    none: 'None'
  };

  $scope.project = function () {
    $scope.themeName = themeNameHash.project;
    $scope.setThemeQueryParam('project');
    $scope.$parent.drawOverlays();
  };

  $scope.disaster = function () {
    $scope.themeName = themeNameHash.disaster;
    $scope.setThemeQueryParam('disaster');
    $scope.$parent.drawOverlays();
  };

  $scope.none = function () {
    $scope.themeName = themeNameHash.none;
    $scope.setThemeQueryParam();
    $scope.$parent.drawOverlays();
  };

  $scope.setThemeQueryParam = function (theme) {
    $stateParams.theme = theme;
    var state = $state.current.name || 'main';
    $state.go(state, $stateParams);
  };

  $scope.themeName = themeNameHash[$stateParams.theme] || 'Projects';

  /*
   Handling Theme Menu Animations
   */

  $scope.toggleThemeMenu = function(){
    var flippedOut = $(".menu-selection .dropdown").hasClass("open");

    if(flippedOut == false){
      $scope.unfurlThemes();
    }
    else{
      $scope.refurlThemes();
    }
  };

  $scope.unfurlThemes = function(){
    $scope.refurlThemes();
    //Try jQuery to add an 'on' class to each of the theme LI elements on a timer.
    $($('#ThemeSelectorMenu .dropdown-menu li').get().reverse()).each(function(index){
      var self = this;
      setTimeout(function () {
        $(self).addClass("on");
      }, index*150);
    });
  };

  //Refurl?
  $scope.refurlThemes = function(){
    //Try jQuery to remove the 'on' class to each of the theme LI elements on a timer.
    $('#ThemeSelectorMenu .dropdown-menu li').removeClass("on");
  };

  /*
   End Theme Menu Animations
   */

});