/**
 * Created by Ryan Whitley <rwhitley@spatialdev.com>
 *       on 4/17/14.
 */

angular.module('GeoAngular').controller('BreadcrumbsCtrl', function($scope, $rootScope, $state, $stateParams, $http) {
	console.log('BreadcrumbsCtrl');

	var title = $scope.title = $stateParams.title || 'World';

	//var fullStackURL = config.chubbsPath('services/getAdminStack?format=json&adminlevel=:adminlevel&stackid=:guid&datasource=gadm');
	var fullStackURL = config.chubbsPath('services/custom/custom_operation?name=GetBreadCrumbsWithThemeCountsByID&format=json&gadm_level=:adminlevel&ids=:guid&datasource=gadm&theme=projects');

	var breadCrumbFeatures = {}; //Store results of the stack lookup here so we can reuse.

	$scope.$on('center-feature', function (event, featObj) {

		//See if the feature stack has already been stored
		if(breadCrumbFeatures[featObj.level] && breadCrumbFeatures[featObj.level][featObj.guid]){
			//Already have it
			updateBreadCrumbs(breadCrumbFeatures[featObj.level][featObj.guid], featObj.level);
		}
		else{
			//Go fetch it
			//Using the Center Feature's GUID, fetch the full stack details.
			var url = fullStackURL.replace(':adminlevel', featObj.level).replace(':guid', featObj.guid);
			var self = this;

			// Fetch from the server only if we don't have it in the hash
			$http.get(url).success(function (result, status) {

				if (!result || result.error) {
					console.error('Unable to fetch feature: ' + result.error);
					return;
				}

				var properties = result[0];

				//Update
				updateBreadCrumbs(properties, featObj.level);

				//Store in the hash.
				if(breadCrumbFeatures[featObj.level]){
					breadCrumbFeatures[featObj.level][properties["guid" + featObj.level]] = properties;
				}
				else{
					breadCrumbFeatures[featObj.level] = {};
					breadCrumbFeatures[featObj.level][properties["guid" + featObj.level]] = properties;
				}


			});
		}




	});

	function updateBreadCrumbs(featObj, level) {
		//Update The Breadcrumb display
		//Clear lower level scope items in case we've zoomed out
		for (var x = level; x <= 5; x++) {
			//null out any level values that are LOWER than what we're currently looking at
			$scope["level" + x] = "";
			$scope["guid" + x] = "";

			if(x == -1){
				$scope["levelarc"] = featObj["namearc"];
				$scope["guidarc"] = featObj["guidarc"];
			}
		}

		//using the requested level, dig out the properties for that level and ones above it
		for (var i = level; i >= 0; i--) {
			if(i == -1){
				$scope["levelarc"] = featObj["namearc"];
				$scope["guidarc"] = featObj["guidarc"];
			}
			$scope["level" + i] = featObj["name" + i];
			$scope["guid" + i] = featObj["guid" + i];
		}
	}

});