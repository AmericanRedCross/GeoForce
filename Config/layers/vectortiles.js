/**
 * Created by Ryan Whitley <rwhitley@spatialdev.com>
 *       on 12/15/14.
 */

module.exports = {
  gaul_fsp : {
    type: 'pbf',
    name: 'GADM0',
    url: "http://localhost:3000/services/postgis/gadm0_7perc/geom/vector-tiles/{z}/{x}/{y}.pbf?fields=guid::character varying,name_0,year",
    debug: true,
    clickableLayers: [],

    getIDForLayerFeature: function (feature) {
      return feature.properties.guid;
    },

    /**
     * The filter function gets called when iterating though each vector tile feature (vtf). You have access
     * to every property associated with a given feature (the feature, and the layer). You can also filter
     * based of the context (each tile that the feature is drawn onto).
     *
     * Returning false skips over the feature and it is not drawn.
     *
     * @param feature
     * @returns {boolean}
     */
    filter: function (feature, context) {
      return true;
    },

    /**
     * When we want to link events between layers, like clicking on a label and a
     * corresponding polygon freature, this will return the corresponding mapping
     * between layers. This provides knowledge of which other feature a given feature
     * is linked to.
     *
     * @param layerName  the layer we want to know the linked layer from
     * @returns {string} returns corresponding linked layer
     */
    layerLink: function (layerName) {
      if (layerName.indexOf('_label') > -1) {
        return layerName.replace('_label', '');
      }
      return layerName + '_label';
    },

    style: getThemeStyle,

    onClick: function(evt) {
      console.log('clickkkk');
    },

    onTilesLoaded: function(MVTSource, $http, vector, $rootScope) {
      //Should fire every time a set of tiles loads.

      //This should fetch data from the server that pertains to the features loaded in the current extent.
      //Use jQuery for now.
      var url = "http://localhost:3001/services/custom/custom_operation?name=getaggregatedthemefeaturesbyextent&format=geojson&bbox=:bbox&theme=:theme&gadm_level=0&filters=:filters";
      url = url.replace(":bbox", $rootScope.bbox);

      if ($rootScope.$stateParams.filters) {
        filters = $rootScope.$stateParams.filters;
        //Add filters to URL.
        url = url.replace(":filters", filters);
      }
      else {
        url = url.replace("&filters=:filters", ""); //no filters.  Remove
      }

      var theme = $rootScope.$stateParams.theme || 'project';
      url = url.replace(":theme", theme);


      $http.get(url, {cache: true}).success(function (data, status) {

        //If any features are returned, loop thru the vtfs and apply these values, restyle.
        if (data && data.features) {

          var guids = {};

          angular.forEach(data.features, function (dataItem, dataKey){
            guids[dataItem.properties.guid] = dataItem.properties;
          });

          var layers = MVTSource.getLayers();

          if (guids.length == 0) {
            //No matches brought back.  make all polygons clear

            return;
          }

          for (var layer in layers) {
            if (layer && layers[layer].features) {
              //Clear out old ECOS properties.
              clearFeatureProperties(layers[layer].features);

              angular.forEach(layers[layer].features, function (vtf, vtfkey) {
                if (vtf.properties.guid && guids[vtf.properties.guid]) {
                  //We've found it.  Add a property to all matching features, then redraw the layer.
                  console.log("found " + vtf.properties.guid);
                  vtf.properties.theme = theme;
                  vtf.properties.ecos_properties = {};
                  vtf.properties.ecos_properties[theme] = guids[vtf.properties.guid];
                }
                else {
                  //no match.  Make it hollow
                  console.log("miss");
                }
              });

              //Update Layer style and redraw
              MVTSource.setStyle(getThemeStyle);
              MVTSource.redraw(false); //false means that this redraw won't trigger the onTilesLoaded event.

            }
          }

        }
      }).error(function (err) {
        console.log("err");
      });


    }
  }

};

function getThemeStyle(vtf){

  var opacity = "0.5";

  var style = {};
  //Default style - make hollow
  style.color = 'rgba(0,0,0,' + opacity + ')';
  style.outline = {
    color: 'rgb(20,20,20)',
    size: 2
  }

  var properties = vtf.properties;

  if(!properties.theme){
    return style;
  }

  if (properties.theme == "disaster") {
    var ecosProperties = properties["ecos_properties"]["disaster"];

    if (ecosProperties) {
      if (ecosProperties.iroc_status__c) {
        switch (ecosProperties.iroc_status__c.toLowerCase()) {
          case "active":
            style.color = 'rgba(204,0,51,' + opacity + ')';
            style.outline = {
              color: 'rgb(20,20,20)',
              size: 2
            }
            break;
          case "monitoring":
            style.color = 'rgba(204,153,0,' + opacity + ')';
            style.outline = {
              color: 'rgb(20,20,20)',
              size: 2
            }
            break;
          case "inactive":
            style.color = 'rgba(255,255,255,' + opacity + ')';
            style.outline = {
              color: 'rgb(20,20,20)',
              size: 2
            }
            break;
        }
      }
    }

  }
  else if (properties.theme == "projectRisk") {
    var ecosProperties = properties["ecos_properties"]["projectRisk"];
    if (ecosProperties && ecosProperties.overall_assessment__c) {
      switch (ecosProperties.overall_assessment__c.toLowerCase()) {
        case "critical":
          style.color = 'rgba(255,0,0,' + opacity + ')';
          style.outline = {
            color: 'rgb(20,20,20)',
            size: 2
          }
          break;
        case "high":
          style.color = 'rgba(255,127,0,' + opacity + ')';
          style.outline = {
            color: 'rgb(20,20,20)',
            size: 2
          }
          break;
        case "medium":
          style.color = 'rgba(255,255,0,' + opacity + ')';
          style.outline = {
            color: 'rgb(20,20,20)',
            size: 2
          }
          break;
        case "low":
          style.color = 'rgba(0,255,0,' + opacity + ')';
          style.outline = {
            color: 'rgb(20,20,20)',
            size: 2
          }
          break;
      }
    }
  }
  else if (properties.theme == "projectHealth") {
    var ecosProperties = properties["ecos_properties"]["projectHealth"];
    if (ecosProperties && ecosProperties.overall_status__c) {
      switch (ecosProperties.overall_status__c.toLowerCase()) {
        case "red":
          style.color = 'rgba(255,0,0,' + opacity + ')';
          style.outline = {
            color: 'rgb(20,20,20)',
            size: 2
          }
          break;
        case "yellow":
          style.color = 'rgba(255,255,0,' + opacity + ')';
          style.outline = {
            color: 'rgb(20,20,20)',
            size: 2
          }
          break;
        case "green":
          style.color = 'rgba(0,255,0,' + opacity + ')';
          style.outline = {
            color: 'rgb(20,20,20)',
            size: 2
          }
          break;
        case "white":
          style.color = 'rgba(255,255,255,' + opacity + ')';
          style.outline = {
            color: 'rgb(20,20,20)',
            size: 2
          }
          break;
      }
    }
  }
  else if (properties.theme == "project") {
    var ecosProperties = properties["ecos_properties"]["project"];

    if (ecosProperties && ecosProperties) {

      var count =  parseInt(ecosProperties.theme_count);

      if(count == 0) {
        //make hollow
        style.color = 'rgba(0,0,0,' + opacity + ')';
        style.outline = {
          color: 'rgb(20,20,20)',
          size: 2
        }
      }
      else if(count > 0 && count <= 2) {
        //make hollow
        style.color = 'rgba(229,255,235,' + opacity + ')';
        style.outline = {
          color: 'rgb(20,20,20)',
          size: 2
        }
      }
      else if(count > 2 && count <= 5) {
        //make hollow
        style.color = 'rgba(169,255,189,' + opacity + ')';
        style.outline = {
          color: 'rgb(20,20,20)',
          size: 2
        }
      }
      else if(count > 5 && count <= 8) {
        //make hollow
        style.color = 'rgba(169,255,125,' + opacity + ')';
        style.outline = {
          color: 'rgb(20,20,20)',
          size: 2
        }
      }
      else if(count > 8 && count <= 10) {
        //make hollow
        style.color = 'rgba(41,255,90,' + opacity + ')';
        style.outline = {
          color: 'rgb(20,20,20)',
          size: 2
        }
      }
      else if(count > 10) {
        //make hollow
        style.color = 'rgba(0,255,59,' + opacity + ')';
        style.outline = {
          color: 'rgb(20,20,20)',
          size: 2
        }
      }

    }
    else{
      //make hollow
      style.color = 'rgba(0,0,0,' + opacity + ')';
      style.outline = {
        color: 'rgb(20,20,20)',
        size: 2
      }
    }
  }
  return style;

}

//As we swap ECOS properties out on the vector tile layer, clear out the old properties so we don't get residual theme values from old themes.
function clearFeatureProperties(features){

  angular.forEach(features, function (vtf, vtfkey) {
    if(vtf.properties) {
      vtf.properties.ecos_properties = {};
      vtf.theme = "";
    }
  });

}