/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *       on 3/27/14.
 */

angular.module('GeoAngular').controller('FiltersCtrl', function($scope, $http, $state, $stateParams) {
  console.log('FiltersCtrl');
  $scope.params = $stateParams;

  $scope.navTab = 'sectors';

  $scope.sectors = [];

  $http.get(config.chubbsPath('services/custom/custom_operation?name=getprojectsectorlist&format=json'), {cache: true}).success(function (data, status) {
    for (var i = 0, len = data.length; i < len; ++i) {
      $scope.sectors.push({name: data[i], checked: false});
    }
    debug.filtersScope = $scope;
  }).error(function() {
    console.error("Unable to fetch project sector list");
  });

  $scope.sectorsFilter = function () {
    var sectorFilters = [];
    for (var i = 0, len = $scope.sectors.length; i < len; ++i) {
      var sector = $scope.sectors[i];
      if (sector.checked) {
        sectorFilters.push(sector.name);
      }
    }
    var filteredSector = sectorFilters.pop();

    // no sectors to filter
    if (!filteredSector) {
      $scope.whereClause = 'null';
    } else {
      $scope.whereClause = "sector__c LIKE '%" + filteredSector + "%' ";
      filteredSector = sectorFilters.pop();
      while (filteredSector) {
        $scope.whereClause += "OR sector__c LIKE '%" + filteredSector + "%' ";
        filteredSector = sectorFilters.pop();
      }
    }
    $scope.submitFilter();
  };

  $scope.submitFilter = function () {
    $stateParams.filters = $scope.whereClause;
    var state = $state.current.name || 'main';
    $state.go(state, $stateParams);
    $scope.$parent.$parent.drawOverlays();
  };

  $scope.startDate = {};
  $scope.endDate = {};
  $scope.timelineStatus = {};
  $scope.createDate = {};
  $scope.lastModified = {};
  $scope.startDate.empty      = true;
  $scope.startDate.open       = true;
  $scope.endDate.empty        = true;
  $scope.endDate.open         = false;
  $scope.timelineStatus.empty = true;
  $scope.timelineStatus.open  = false;
  $scope.createDate.open      = false;
  $scope.lastModified.open    = false;

  debug.startDate = $scope.startDate;

});