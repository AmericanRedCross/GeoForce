/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *       on 5/6/14.
 */

module.exports = angular.module('GeoAngular').controller('ThemeCtrl', function ($scope, $rootScope, $state, $stateParams, VectorProvider, LayerConfig) {

  var themeNameHash = $rootScope.themeNameHash = {
    project: 'Projects',
    disaster: 'Disasters',
    projectRisk: 'Project Risk',
    projectHealth: 'Project Health',
    disasterType: 'Disaster Type',
    none: 'None'
  };

  $scope.project = function () {
    $scope.themeName = themeNameHash.project;
    //ensureThemeCount();
    $scope.setThemeQueryParam('project');
  };

  $scope.disaster = function () {
    $scope.themeName = themeNameHash.disaster;
    //ensureThemeCount();
    $scope.setThemeQueryParam('disaster');
  };

  $scope.projectRisk = function () {
      $scope.themeName = themeNameHash.projectRisk;
      //ensureThemeCount();
      $scope.setThemeQueryParam('projectRisk');
  };

  $scope.projectHealth = function () {
      $scope.themeName = themeNameHash.projectHealth;
      //ensureThemeCount();
      $scope.setThemeQueryParam('projectHealth');
  };

  $scope.disasterType = function () {
    $scope.themeName = themeNameHash.disasterType;
    //ensureThemeCount();
    $scope.setThemeQueryParam('disasterType');
  };

  $scope.none = function () {
    $scope.themeName = themeNameHash.none;
    //var layersArr = $.grep($stateParams.layers.split(','), function(routeLayer){
    //  return routeLayer !== 'gadm0' && routeLayer !== 'theme';
    //});
    //$stateParams.layers = layersArr.join(',');
    $scope.setThemeQueryParam('none');
  };

  function ensureThemeCount() {
    if ($stateParams.layers.indexOf('gadm0') === -1 && $stateParams.layers.indexOf('theme') === -1) {
      $stateParams.layers += ',gadm0';
    }
  }

  $scope.setThemeQueryParam = function (theme) {
    //close details panel on theme change
    if($scope.isParam('details-panel') == true){
      if($stateParams.theme !== theme){
        $scope.closeParam('details-panel');
      }
    }

    //force gadm0 on disaster and disasterType
    if(theme.indexOf('disaster')!==-1 && $stateParams.layers.split(",")[1] !== 'gadm0'){
      var layersArray;

      if($stateParams.layers){
        layersArray = $stateParams.layers.split(",");
      }

      //Remove all GADM layers.
      layersArray.forEach(function (value, key) {
        if (LayerConfig.themeLayers.indexOf(value) > -1) {
          layersArray.splice(layersArray.indexOf(value), 1); //remove any GADMs
        }
      });

      //Add in the gadm layer to the layers list in the stateparams.
      layersArray.push("gadm0");
      $stateParams.layers = layersArray.join(",");
    }

    $stateParams.theme = theme;

    //close filters panel if theme is Project Risk/Health or None
    if((($stateParams.theme !== 'project' && $stateParams.theme !== 'disaster') && $stateParams.theme !== null)){
      $scope.closeParam('filters-panel');
    }

    var state = $state.current.name || 'main';
    $state.go(state, $stateParams);
  };

  $scope.themeName = themeNameHash[$stateParams.theme] || themeNameHash[config.defaultTheme];

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
    $($('#ThemeMenu li').get().reverse()).each(function(index){
      var self = this;
      setTimeout(function () {
        $(self).addClass("theme-selector-li-on");
      }, index*100);
    });
  };

  //Refurl?
  $scope.refurlThemes = function(){
    //Try jQuery to remove the 'on' class to each of the theme LI elements on a timer.
    $('#ThemeSelectorMenu .dropdown-menu li').removeClass("theme-selector-li-on");
  };

  /*
   End Theme Menu Animations
   */

});
