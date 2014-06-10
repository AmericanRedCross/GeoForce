/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *       on 3/27/14.
 */

module.exports = angular.module('GeoAngular').controller('LegendCtrl', function($scope, LayerConfig) {

  $scope.$on('layers-update', function (evt, layers) {
    $scope.layers = [];
    for (var i = layers.length - 1; i >= 1; i--){
      var l = layers[i];
      var lcfg = LayerConfig.find(l);

      var name = lcfg.name;
      if (!name && lcfg.properties && lcfg.properties.title) {
        name = lcfg.properties.title;
      } else if (!name) {
        name = l;
      }

      var layer = {
        name: name
      };

      $scope.layers.push(layer);
    }
  });

});