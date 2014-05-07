/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *       on 3/27/14.
 */

angular.module('GeoAngular').controller('FiltersCtrl', function($scope, $http) {
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
      return;
    }

    $scope.whereClause = "sector__c LIKE '%" + filteredSector + "%' ";

    filteredSector = sectorFilters.pop();
    while (filteredSector) {
      $scope.whereClause += "OR sector__c LIKE '%" + filteredSector + "%' ";
      filteredSector = sectorFilters.pop();
    }

  };

  $scope.customFilter = function () {

  };

});