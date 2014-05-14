/**
 *  NH Found this little directive at: http://jsfiddle.net/BRLpQ/1/
 *
 *  This should be refined into a fully functional, refined directive.
 */

angular.module('GeoAngular').directive('slider', function ($parse) {
  return {
    restrict: 'E',
    replace: true,
    template: '<input type="text" />',
    link: function ($scope, element, attrs) {
      var model = $parse(attrs.model);
      var slider = $(element[0]).slider();

      slider.on('slide', function(ev) {
        model.assign($scope, ev.value);
        $scope.$apply();
      });
    }
  }
});
