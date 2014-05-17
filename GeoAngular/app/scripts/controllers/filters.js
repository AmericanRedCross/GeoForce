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


  debug.budget = $scope.budget = {
    slider: {},
    min: 0,
    mean: 50,
    max: 100
  };

  $http.get(config.chubbsPath('services/custom/custom_operation?name=projecttotalbudget&format=json'), {cache: true}).success(function (data, status) {
    if (data.length > 0) {
      $scope.budget.min = data[0].min;
      $scope.budget.mean = data[0].avg;
      $scope.budget.max = data[0].max;
    }
  }).error(function() {
    console.error("Unable to fetch Total Budget Min, Mean, Max");
  });

  $scope.toggleDate = function($event, dateFilter) {
    $event.preventDefault();
    $event.stopPropagation();

    dateFilter.opened = !dateFilter.opened;
  };

  $scope.sectorsFilter = function () {
    $scope.sectorClause = '';
    var sectors = $scope.sectors;
    var first = true;
    for (var i = 0, len = sectors.length; i < len; ++i) {
      var sector = sectors[i];
      if (sector.checked) {
        if (first) {
          $scope.sectorClause = "sector__c LIKE '%" + sector.name + "%' ";
          first = false;
        } else {
          $scope.sectorClause += "OR sector__c LIKE '%" + sector.name + "%' ";
        }
      }
    }
    $scope.composeWhereClause();
  };

  $scope.statusFilter = function () {

  };

  $scope.composeWhereClause = function () {
    $scope.whereClause = $scope.sectorClause;
    if ($scope.whereClause === '') $scope.whereClause = 'null';
    $scope.submitFilter();
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

});
