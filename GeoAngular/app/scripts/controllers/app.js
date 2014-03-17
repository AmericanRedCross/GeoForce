(function () { 'use strict';

angular.module('GeoAngular').controller('AppCtrl', AppCtrl);


function AppCtrl($scope, $routeParams, $location) {

    // weird bug where redirect peels out ://{s when : is there
    // $routeParams.layers We just dont have the : in main.js so that
    // part of the path does not go away...
    $routeParams.layers = $routeParams.layers.replace('http//', 'http://');

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