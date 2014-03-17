(function () { 'use strict';

angular.module('GeoAngular').controller('AppCtrl', AppCtrl);


function AppCtrl($scope, $routeParams, $location) {

    // weird bug where redirect peels out ://{s when : is there
//    $routeParams.layers

    $scope.routeParams = $routeParams;

    // Update the route when the model is updated.
    $scope.$watchCollection('routeParams', function(newValue, oldValue) {
        $location.path( '/map@' + newValue.lat +
                        ',' + newValue.lng +
                        ',' + newValue.zoom +
                        '(' + newValue.layers +
                        ')/stories/' + newValue.stories);

    });
}


})();