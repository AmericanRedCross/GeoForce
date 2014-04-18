/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *       on 4/17/14.
 */

angular.module('GeoAngular').controller('UploadCtrl', function($scope) {
  console.log('UploadCtrl');

  $scope.showAlert = false;
  $scope.showProgress = false;
  $scope.showUploadedUrl = false;

  $scope.upload = function() {
    $("#upload-file-input").click().change(function(evt) {
      var fileName = $(this).val().split('\\').pop();
      var file = $('#upload-file-input').get(0).files[0];
      var r = new FileReader();
      r.readAsBinaryString(file);
      r.loaded()
      r.onloadend = function(e){
        var data = e.target.result;
        console.log(data);
        //send you binary data via $http or $resource or do anything else with it
      };
    });
  };


});
