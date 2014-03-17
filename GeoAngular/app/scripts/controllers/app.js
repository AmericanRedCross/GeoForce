(function () { 'use strict';

angular.module('GeoAngular').controller('AppCtrl', AppCtrl);


function AppCtrl($scope, $routeParams) {
    // weird bug where redirect peels out ://{s when : is there

    $scope.params = $routeParams;
}


})();