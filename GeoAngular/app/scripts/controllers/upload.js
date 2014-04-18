/**
 * Created by Nicholas Hallahan <nhallahan@spatialdev.com>
 *       on 4/17/14.
 */

angular.module('GeoAngular').controller('UploadCtrl', function($scope, $http, $state, $stateParams) {
  console.log('UploadCtrl');

  $scope.showAlert = false;
  $scope.showProgress = false;
  $scope.showUploadedUrl = false;
  $scope.percent = 10;
  $scope.disabled = false;

  $scope.upload = function() {
    $("#upload-file-input").click().change(function(evt) {
      $scope.showProgress = true;
      $scope.percent = 20;

      var fileName = $(this).val().split('\\').pop();
      var file = $('#upload-file-input').get(0).files[0];
      var r = new FileReader();
      r.readAsBinaryString(file);
      r.onloadend = function(e){
        var data = e.target.result;
        var postObj = {
          "description": "Mapfolio Uploaded Data - " + fileName,
          "public": true,
          "files": {}
        };
        postObj.files[fileName] = {content: data};
        $scope.percent = 50;

        $http({
          url: 'https://api.github.com/gists',
          method: "POST",
          data: postObj,
          headers: {'Content-Type': 'application/json'}
        }).success(function (data, status, headers, config) {
          $scope.showProgress = false;
          $scope.gistRawUrl = data.files[fileName].raw_url;
          $scope.gistHtmlUrl = data.html_url;
          $scope.disabled = true;
          $scope.showUploadedUrl = true;
          window.gists.append(data);

        }).error(function (data, status, headers, config) {
          $scope.showAlert = true;
          $scope.errorMessage = JSON.stringify(data,null,2);
        });

      };

    });
  };

  $scope.addToMap = function () {
    var newUrl = $scope.gistRawUrl || $scope.remoteUrl;
    if (!newUrl) {
      $scope.showAlert = true;
      return;
    }

    $stateParams.layers = $stateParams.layers + ',' + newUrl;
    $('#uploadModal').modal('hide').on('hidden.bs.modal', function(e) {
      $state.go('main', $stateParams);
    });

  };

  $('#uploadModal').modal('show');

});
