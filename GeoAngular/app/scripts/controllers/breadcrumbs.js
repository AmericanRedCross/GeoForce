/**
 * Created by Ryan Whitley <rwhitley@spatialdev.com>
 *       on 4/17/14.
 */

angular.module('GeoAngular').controller('BreadcrumbsCtrl', function($scope, $rootScope, $state, $stateParams, $http) {
	console.log('BreadcrumbsCtrl');

	var title = $scope.title = $stateParams.title || 'World';

	var fullStackURL = config.chubbsPath('services/getAdminStack?format=json&adminlevel=:adminlevel&stackid=:guid&datasource=gadm');

	$scope.$on('center-feature', function (event, featObj) {
		//Using the Center Feature's GUID, fetch the full stack details.
		var url = fullStackURL.replace(':adminlevel', featObj.level).replace(':guid', featObj.guid);
		var self = this;

		// not cached because we only fetch when we dont have the feature in the hash
		$http.get(url).success(function (geojson, status) {

			if (geojson.error) {
				console.error('Unable to fetch feature: ' + geojson.error);
				return;
			}

			if (!geojson.features || geojson.features.length < 1) {
				return;
			}

			//Update The Breadcrumb display
			$scope.level = featObj.level;
			var feature = geojson.features[0];

			//Clear lower level scope items in case we've zoomed out
			for(var x=featObj.level; x <= 5; x++){
				//null out any level values that are LOWER than what we're currently looking at
				$scope["level" + x] = "";
			}

			//using the requested level, dig out the properties for that level and ones above it
			for(var i=featObj.level; i >= 0; i--){
				$scope["level" + i] = feature.properties["adm" + i + "_name"];
			}



		});

	});

});