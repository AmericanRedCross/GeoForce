/**
 * Created by Ryan Whitley <rwhitley@spatialdev.com>
 *       on 4/17/14.
 */

angular.module('GeoAngular').controller('BreadcrumbsCtrl', function($scope, $rootScope, $state, $stateParams, $http) {
	console.log('BreadcrumbsCtrl');

	var title = $scope.title = $stateParams.title || 'World';

	var fullStackURL = config.chubbsPath('services/getAdminStack?format=json&adminlevel=:adminlevel&stackid=:guid&datasource=gadm');

	var breadCrumbFeatures = {}; //Store results of the stack lookup here so we can reuse.

	$scope.$on('center-feature', function (event, featObj) {

		//See if the feature stack has already been stored
		if(breadCrumbFeatures[featObj.level] && breadCrumbFeatures[featObj.level][featObj.guid]){
			//Already have it
			updateBreadCrumbs(featObj);
		}
		else{
			//Go fetch it
			//Using the Center Feature's GUID, fetch the full stack details.
			var url = fullStackURL.replace(':adminlevel', featObj.level).replace(':guid', featObj.guid);
			var self = this;

			// Fetch from the server only if we don't have it in the hash
			$http.get(url).success(function (geojson, status) {

				if (geojson.error) {
					console.error('Unable to fetch feature: ' + geojson.error);
					return;
				}

				if (!geojson.features || geojson.features.length < 1) {
					return;
				}


				var featObj = geojson.features[0].properties;

				//Update
				updateBreadCrumbs(featObj);

				//Store in the hash.
				if(breadCrumbFeatures[featObj.level]){
					breadCrumbFeatures[featObj.level][featObj.guid] = featObj;
				}
				else{
					breadCrumbFeatures[featObj.level] = {};
					breadCrumbFeatures[featObj.level][featObj.guid] = featObj;
				}


			});
		}




	});

	function updateBreadCrumbs(featObj) {
		//Update The Breadcrumb display
		$scope.level = featObj.level;

		//Clear lower level scope items in case we've zoomed out
		for (var x = featObj.level; x <= 5; x++) {
			//null out any level values that are LOWER than what we're currently looking at
			$scope["level" + x] = "";
		}

		//using the requested level, dig out the properties for that level and ones above it
		for (var i = featObj.level; i >= 0; i--) {
			$scope["level" + i] = featObj["adm" + i + "_name"];
		}
	}

});