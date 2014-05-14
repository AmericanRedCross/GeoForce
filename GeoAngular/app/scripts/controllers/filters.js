/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *       on 3/27/14.
 */

angular.module('GeoAngular').controller('FiltersCtrl', function($scope, $http, $state, $stateParams) {
  console.log('FiltersCtrl');
  $scope.params = $stateParams;

  $scope.navTab = 'sectors';

  $scope.sectors = [];

  $http.get('data/sf-project-filter-checkboxes.json', {cache: true}).success(function (data, status) {
    angular.extend($scope, data);
    debug.filtersScope = $scope;
  }).error(function() {
    console.error("Unable to fetch project filter meta data");
  });

  $scope.toggleDate = function($event, dateFilter) {
    $event.preventDefault();
    $event.stopPropagation();

    dateFilter.opened = !dateFilter.opened;
  };

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

  $scope.statusFilter = function () {

  };

  $scope.submitFilter = function () {
    $stateParams.filters = $scope.whereClause;
    var state = $state.current.name || 'main';
    $state.go(state, $stateParams);
    $scope.$parent.$parent.drawOverlays();
  };

  $scope.dateFilters = [
    {
      name: 'Start Date',
      radio: 'on',
      empty: true,
      opened: false
    },{
      name: 'End Date',
      radio: 'on',
      empty: true,
      opened: false
    },{
      name: 'Create Date',
      radio: 'on',
      empty: true,
      opened: false
    },{
      name: 'Last Modified',
      radio: 'on',
      empty: true,
      opened: false
    }
  ];

  debug.dateFilters = $scope.dateFilters;

  $scope.budget = {
    slider: {}
  };

});