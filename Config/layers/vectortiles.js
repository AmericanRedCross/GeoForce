/**
 * Created by Ryan Whitley <rwhitley@spatialdev.com>
 *       on 12/15/14.
 */

//Default opacity of GADM polygons
var opacity = "0.5";

var gadm0 = {
  type: 'pbf',
  name: 'GADM0',
  //url: "http://localhost:3000/services/postgis/gadm0/geom_simplify_med/vector-tiles/{z}/{x}/{y}.pbf?fields=guid::character varying,name_0,year&labelpoints=true",
  //url: "http://localhost:3000/services/postgis/gadm0/geom_simplify_med/vector-tiles/{z}/{x}/{y}.pbf?fields=guid::character varying,name_0,year",

  //url: "../services/vector-tiles/gadm0_labels_2014/{z}/{x}/{y}.pbf",
  url: "https://s3-us-west-2.amazonaws.com/vector-tiles/gadm0/{z}/{x}/{y}.pbf",

  //url: "http://{s}.spatialdevtiles.com/gadm0/{z}/{x}/{y}.pbf",
  detailsUrl: 'services/custom/custom_operation?name=get:themebyguid&format=json&guids=:guids&gadm_level=:level&filters=:filters',
  debug: false,
  clickableLayers: ["GADM_2014"],

  getIDForLayerFeature: function (feature) {
    return feature.properties.guid;
    //return feature.properties.name_0;
  },
  mutexToggle: true,

  //The filter function does 2 things: 1) Merge in external properties that can be used for choroplething.  2) Filter out features that don't have ECOS properties
  filter: function(vtf, $rootScope){
    var data = $rootScope.vtData;

    //Show only countries with active theme properties
    if(data && data[vtf.properties.guid]){
      var theme = $rootScope.$stateParams.theme;
      vtf.properties.theme = theme;
      vtf.properties.ecos_properties = {};
      vtf.properties.ecos_properties[theme] = data[vtf.properties.guid];
    }

    return true; //draw feature
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

  onClick: function(evt, $http, $rootScope, PBFObject) {

    if(evt && evt.feature && evt.feature.id){
      //Do the onclick thing
      PBFObject.fetchFeatureDetails(evt.feature.id, 0, evt.feature.properties.name_0);
    }
  },
  onSelect: function(vtf, PBFObject){
    //When a selection has changed (likey when a label was clicked and the corresponding feature selected)
    if(vtf && vtf.id){
      //Do the onclick thing
      PBFObject.fetchFeatureDetails(vtf.id, 0, vtf.properties.name_0);
    }
  },
  legend: function(){

  }
}

var gadm1 = {
  type: 'pbf',
  name: 'GADM1',
  //url: "http://localhost:3000/services/postgis/gadm0/geom_simplify_med/vector-tiles/{z}/{x}/{y}.pbf?fields=guid::character varying,name_0,year&labelpoints=true",
  //url: "http://localhost:3000/services/postgis/gadm0/geom_simplify_med/vector-tiles/{z}/{x}/{y}.pbf?fields=guid::character varying,name_0,year",

  url: "https://s3-us-west-2.amazonaws.com/vector-tiles/gadm1/{z}/{x}/{y}.pbf",

  detailsUrl: 'services/custom/custom_operation?name=get:themebyguid&format=json&guids=:guids&gadm_level=1&filters=:filters',
  debug: false,
  clickableLayers: ["GADM_2014"],

  getIDForLayerFeature: function (feature) {
    return feature.properties.guid;
  },
  mutexToggle: true,

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
  filter: function(vtf, $rootScope){
    var data = $rootScope.vtData;

    if(data && data[vtf.properties.guid]){
      var theme = $rootScope.$stateParams.theme;
      vtf.properties.theme = theme;
      vtf.properties.ecos_properties = {};
      vtf.properties.ecos_properties[theme] = data[vtf.properties.guid];
      //return true;
    }

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

  onClick: function(evt, $http, $rootScope, PBFObject) {

    if(evt && evt.feature && evt.feature.id){
      //Do the onclick thing
      PBFObject.fetchFeatureDetails(evt.feature.id, 0, evt.feature.properties.name_1 + ", " + evt.feature.properties.name_0);
    }
  },
  onSelect: function(vtf, PBFObject){
    //When a selection has changed (likey when a label was clicked and the corresponding feature selected)
    if(vtf && vtf.id){
      //Do the onclick thing
      PBFObject.fetchFeatureDetails(vtf.id, 0, vtf.properties.name_1 + ", " + vtf.properties.name_0);
    }
  }
}

var gadm2 = {
  type: 'pbf',
  name: 'GADM2',
  //url: "http://localhost:3000/services/postgis/gadm0/geom_simplify_med/vector-tiles/{z}/{x}/{y}.pbf?fields=guid::character varying,name_0,year&labelpoints=true",
  //url: "http://localhost:3000/services/postgis/gadm0/geom_simplify_med/vector-tiles/{z}/{x}/{y}.pbf?fields=guid::character varying,name_0,year",

  url: "https://s3-us-west-2.amazonaws.com/vector-tiles/gadm2/{z}/{x}/{y}.pbf",

  detailsUrl: 'services/custom/custom_operation?name=get:themebyguid&format=json&guids=:guids&gadm_level=2&filters=:filters',
  debug: false,
  clickableLayers: ["GADM_2014"],

  getIDForLayerFeature: function (feature) {
    return feature.properties.guid;
  },
  mutexToggle: true,

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
  filter: function(vtf, $rootScope){
    var data = $rootScope.vtData;

    if(data && data[vtf.properties.guid]){
      var theme = $rootScope.$stateParams.theme;
      vtf.properties.theme = theme;
      vtf.properties.ecos_properties = {};
      vtf.properties.ecos_properties[theme] = data[vtf.properties.guid];
      //return true;
    }

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

  onClick: function(evt, $http, $rootScope, PBFObject) {

    if(evt && evt.feature && evt.feature.id){
      //Do the onclick thing
      PBFObject.fetchFeatureDetails(evt.feature.id, 0, evt.feature.properties.name_2 + ", " + evt.feature.properties.name_1 + ", " + evt.feature.properties.name_0);
    }
  },
  onSelect: function(vtf, PBFObject){
    //When a selection has changed (likey when a label was clicked and the corresponding feature selected)
    if(vtf && vtf.id){
      //Do the onclick thing
      PBFObject.fetchFeatureDetails(vtf.id, 0, vtf.properties.name_2 + ", " + vtf.properties.name_1 + ", " + vtf.properties.name_0);
    }
  }
}


/**
 * Red Cross Regions
 */

var arcregions = {
  type: 'pbf',
  name: 'arcregions',
  //url: "http://localhost:3000/services/postgis/gadm0/geom_simplify_med/vector-tiles/{z}/{x}/{y}.pbf?fields=guid::character varying,name_0,year&labelpoints=true",
  //url: "http://localhost:3000/services/postgis/gadm0/geom_simplify_med/vector-tiles/{z}/{x}/{y}.pbf?fields=guid::character varying,name_0,year",

  url: "https://s3-us-west-2.amazonaws.com/vector-tiles/arc_regions/{z}/{x}/{y}.pbf",

  detailsUrl: 'services/custom/custom_operation?name=get:themebyguid&format=json&guids=:guids&gadm_level=-1&filters=:filters',
  debug: false,
  clickableLayers: ["GADM_2014"],

  getIDForLayerFeature: function (feature) {
    return feature.properties.guid;
  },
  mutexToggle: true,

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
  filter: function(vtf, $rootScope){
    var data = $rootScope.vtData;

    if(data && data[vtf.properties.guid]){
      var theme = $rootScope.$stateParams.theme;
      vtf.properties.theme = theme;
      vtf.properties.ecos_properties = {};
      vtf.properties.ecos_properties[theme] = data[vtf.properties.guid];
      //return true;
    }

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

  onClick: function(evt, $http, $rootScope, PBFObject) {

    if(evt && evt.feature && evt.feature.id){
      //Do the onclick thing
      PBFObject.fetchFeatureDetails(evt.feature.id, 0, evt.feature.properties.ARC_Region);
    }
  },
  onSelect: function(vtf, PBFObject){
    //When a selection has changed (likey when a label was clicked and the corresponding feature selected)
    if(vtf && vtf.id){
      //Do the onclick thing
      PBFObject.fetchFeatureDetails(vtf.id, 0, vtf.properties.ARC_Region);
    }
  }
}




function getThemeStyle(vtf, $rootScope){

  var ecos_border_thickness = 1; //px - this is the thickness of boundaries that have ecos data associated
  var ecos_border_color = "rgba(140,140,140,1)";

  var style = {};
  //Default style for all boundaries - make hollow, with a thin outline.
  style.color = 'rgba(0,0,0,0.1)';
  style.outline = {
    color: 'rgba(20,20,20,0.5)',
    size:.5
  };

  var properties = vtf.properties;

  //Skip if we're a regular polygon, and not a label point, and if there is no ECOS properties.
  if(vtf.layer.name.indexOf('label') == -1 && !properties.theme){
    return style;
  }

  var checked;

  //See if we should show theme badges/bubbles or not
  if($stateParams.themelabels !== null && $stateParams.themelabels !== undefined){
    checked = $stateParams.themelabels;
  }
  else{
    //if not present, default to true
    checked = 'true';
  }

  var ecosProperties;

  if (properties.theme == "disaster") {
    ecosProperties = properties["ecos_properties"]["disaster"];

    if (ecosProperties) {
      if (ecosProperties.iroc_status__c) {
        //Keep track of the property name for the sake of legend display
        style.legendLabel = ecosProperties.iroc_status__c;

        switch (ecosProperties.iroc_status__c.toLowerCase()) {
          case "active":
            style.color = 'rgba(204,0,51,' + opacity + ')';
            style.outline = {
              color: ecos_border_color,
              size: ecos_border_thickness
            }
            break;
          case "monitoring":
            style.color = 'rgba(204,153,0,' + opacity + ')';
            style.outline = {
              color: ecos_border_color,
              size: ecos_border_thickness
            }
            break;
          case "inactive":
            style.color = 'rgba(255,255,255,' + opacity + ')';
            style.outline = {
              color: ecos_border_color,
              size: ecos_border_thickness
            }
            break;
        }
      }
    }

  }
  else if (properties.theme == "disasterType") {
    ecosProperties = properties["ecos_properties"]["disasterType"]; //this is an array of disaster types for this area
    if (ecosProperties && ecosProperties.disaster_type__c) {

      //Keep track of the property name for the sake of legend display
      style.legendLabel = ecosProperties.disaster_type__c;

      //Use the status to color the regions by status.
      if (ecosProperties.iroc_status__c) {

        switch (ecosProperties.iroc_status__c.toLowerCase()) {
          case "active":
            style.color = 'rgba(204,0,51,' + opacity + ')';
            style.outline = {
              color: ecos_border_color,
              size: ecos_border_thickness
            }
            break;
          case "monitoring":
            style.color = 'rgba(204,153,0,' + opacity + ')';
            style.outline = {
              color: ecos_border_color,
              size: ecos_border_thickness
            }
            break;
          case "inactive":
            style.color = 'rgba(255,255,255,' + opacity + ')';
            style.outline = {
              color: ecos_border_color,
              size: ecos_border_thickness
            }
            break;
        }
      }
      else{
        //Look up the color in the dictionary, if status property is not around
        style.color = config.UNOCHAIconLookup[ecosProperties.disaster_type__c[0]].color;

        //Use the same outline
        style.outline = {
          color: ecos_border_color,
          size: ecos_border_thickness
        }
      }

      if(checked == 'true'){
        //Disaster Type should use OCHA icons
        //But replace the opacity with solid fill for the bubble
        var bubble_fill = style.color.replace("," + opacity + ")", ",1)");
        style.staticLabel = function () {
          var labelStyle = {
            html: (ecosProperties && ecosProperties.disaster_type__c[0] ? buildDisasterTypeLabel(ecosProperties.disaster_type__c[0], bubble_fill, style.outline) : ""),
            iconSize: [42, 42],
            cssClass: 'noclass'
          };
          return labelStyle;
        };
      }


    }
  }
  else if (properties.theme == "projectRisk") {
    ecosProperties = properties["ecos_properties"]["projectRisk"];
    if (ecosProperties && ecosProperties.overall_assessment__c) {
      //Keep track of the property name for the sake of legend display
      style.legendLabel = ecosProperties.overall_assessment__c;

      switch (ecosProperties.overall_assessment__c.toLowerCase()) {
        case "critical":
          style.color = 'rgba(255,0,0,' + opacity + ')';
          style.outline = {
            color: ecos_border_color,
            size: ecos_border_thickness
          }
          break;
        case "high":
          style.color = 'rgba(255,127,0,' + opacity + ')';
          style.outline = {
            color: ecos_border_color,
            size: ecos_border_thickness
          }
          break;
        case "medium":
          style.color = 'rgba(255,255,0,' + opacity + ')';
          style.outline = {
            color: ecos_border_color,
            size: ecos_border_thickness
          }
          break;
        case "low":
          style.color = 'rgba(0,255,0,' + opacity + ')';
          style.outline = {
            color: ecos_border_color,
            size: ecos_border_thickness
          }
          break;
      }
    }
  }
  else if (properties.theme == "projectHealth") {
    ecosProperties = properties["ecos_properties"]["projectHealth"];
    if (ecosProperties && ecosProperties.overall_status__c) {
      //Keep track of the property name for the sake of legend display
      style.legendLabel = ecosProperties.overall_status__c;

      switch (ecosProperties.overall_status__c.toLowerCase()) {
        case "red":
          style.color = 'rgba(255,0,0,' + opacity + ')';
          style.outline = {
            color: ecos_border_color,
            size: ecos_border_thickness
          }
          break;
        case "yellow":
          style.color = 'rgba(255,255,0,' + opacity + ')';
          style.outline = {
            color: ecos_border_color,
            size: ecos_border_thickness
          }
          break;
        case "green":
          style.color = 'rgba(0,255,0,' + opacity + ')';
          style.outline = {
            color: ecos_border_color,
            size: ecos_border_thickness
          }
          break;
        case "white":
          style.color = 'rgba(255,255,255,' + opacity + ')';
          style.outline = {
            color: ecos_border_color,
            size: ecos_border_thickness
          }
          break;
      }
    }
  }
  else if (properties.theme == "project") {
    ecosProperties = properties["ecos_properties"]["project"];

    if (ecosProperties && ecosProperties) {

      //Keep track of the property name for the sake of legend display
      style.legendLabel = "#Projects";

      //for the purposes of showing a legend, keep this gradient handy
      style.gradient = [
        'rgba(255,255,255,' + opacity + ')',
        'rgba(0,255,59,' + opacity + ')'
      ];

      var count =  parseInt(ecosProperties.theme_count);

      if(count == 0) {
        //make hollow
        style.color = 'rgba(0,0,0,' + opacity + ')';
        style.outline = {
          color: ecos_border_color,
          size: ecos_border_thickness
        }
      }
      else if(count > 0 && count <= 2) {
        //make hollow
        style.color = 'rgba(229,255,235,' + opacity + ')';
        style.outline = {
          color: ecos_border_color,
          size: ecos_border_thickness
        }
      }
      else if(count > 2 && count <= 5) {
        //make hollow
        style.color = 'rgba(169,255,189,' + opacity + ')';
        style.outline = {
          color: ecos_border_color,
          size: ecos_border_thickness
        }
      }
      else if(count > 5 && count <= 8) {
        //make hollow
        style.color = 'rgba(169,255,125,' + opacity + ')';
        style.outline = {
          color: ecos_border_color,
          size: ecos_border_thickness
        }
      }
      else if(count > 8 && count <= 10) {
        //make hollow
        style.color = 'rgba(41,255,90,' + opacity + ')';
        style.outline = {
          color: ecos_border_color,
          size: ecos_border_thickness
        }
      }
      else if(count > 10) {
        //make hollow
        style.color = 'rgba(0,255,59,' + opacity + ')';
        style.outline = {
          color: ecos_border_color,
          size: ecos_border_thickness
        }
      }

    }
    else{
      //make hollow
      style.color = 'rgba(0,0,0,' + opacity + ')';
      style.outline = {
        color: ecos_border_color,
        size: ecos_border_thickness
      }
    }
  }


  //if(!hatchDesign){
  //  hatchDesign = getImageRef();
  //}

  //style.selected = {
  //  color: function(ctx2d){
  //    //Hatch symbol
  //    var repeat = ctx2d.createPattern(hatchDesign, "repeat");
  //    return repeat;
  //
  //  },
  //  outline : {
  //    color: 'rgb(255,255,0)',
  //    size: 2
  //  }
  //}

  style.selected = {
    //color: 'rgba(0,255,255,0.1)',
    color: style.color,
    outline : {
      color: 'rgba(0,255,255,1)',
      size: 2
    }
  }

  //Label
  if(checked == 'true') {

    if (vtf.layer.name === 'GADM_2014_label') {
      if (ecosProperties && ecosProperties.theme_count) {

        if (properties.theme != "disasterType") {
          //Disaster Type labels are set in the bloc above
          //All others are set here.

          style.staticLabel = function () {
            var labelStyle = {
              html: (ecosProperties && ecosProperties.theme_count ? buildDynamicLabel(ecosProperties) : ""),
              iconSize: [42, 42],
              cssClass: 'noclass'
            };
            return labelStyle;
          };

        }

      }
      else {
        //When switching themes, reset old label styles to null so labels don't get drawn for old theme.
        style.staticLabel = null;
      }

    }
  }

  return style;
}

function buildDynamicLabel(properties){
  if (properties.theme == "disaster") {
    var color = "";
    var labelColor = "";
    if (properties && properties.iroc_status__c) {
      switch (properties.iroc_status__c.toLowerCase()) {
        case "active":
          color = "rgba(204,0,51,1)";
          labelColor = "#fff";
          break;
        case "monitoring":
          color = "rgba(225,187,37,1)";
          labelColor = "#fff";
          break;
        case "inactive":
          color = "rgba(189,189,189,1)";
          labelColor = "#000";
          break;
      }
    }
    return '<div class="label-icon-number-40percent"' + (color ? ' style="background-color: ' + color + ';color: ' + labelColor + '"' : '') + '><span>' + properties.theme_count + '</span></div>';
  }
  else {
    return '<div class="label-icon-number-40percent"><span>' + properties.theme_count + '</span></div>';
  }
}


/*
Set the dictionary used to look up UNOCHA icons for disaster types
 */
//var UNOCHAIconLookup = {
//
//  "Meteorological - Tropical Cyclone": {icon: "icon-disaster_cyclone", color: "rgba(255,0,0," + opacity + ")"},
//  "Floods": {icon: "icon-disaster_flood", color: "rgba(255,0,0," + opacity + ")"},
//  "Tsunami, Volcano": {icon: "icon-disaster_tsunami", color: "rgba(255,0,0," + opacity + ")"},
//  "Floods, Storm": {icon: "icon-disaster_flood", color: "rgba(255,0,0," + opacity + ")"},
//  "Tsunami": {icon: "icon-disaster_tsunami", color: "rgba(255,0,0," + opacity + ")"},
//  "Famine / Food Insecurity": {icon: "icon-cluster_food_security", color: "rgba(255,0,0," + opacity + ")"},
//  "Drought": {icon: "icon-disaster_drought", color: "rgba(255,0,0," + opacity + ")"},
//  "Meteorological - Tropical Cyclone;Hydrological - Floods": {icon: "icon-disaster_cyclone", color: "rgba(255,0,0," + opacity + ")"},
//  "Food Insecurity": {icon: "icon-cluster_food_security", color: "rgba(255,0,0," + opacity + ")"},
//  "Civil Unrest": {icon: "icon-people_rebel", color: "rgba(255,0,0," + opacity + ")"},
//  "Floods, Tropical Storm": {icon: "icon-disaster_flood", color: "rgba(255,0,0," + opacity + ")"},
//  "Complex Emergency": {icon: "icon-crisis_conflict", color: "rgba(255,0,0," + opacity + ")"},
//  "Epidemic": {icon: "icon-disaster_epidemic", color: "rgba(255,0,0," + opacity + ")"},
//  "Population Movement": {icon: "icon-crisis_population_displacement", color: "rgba(255,0,0," + opacity + ")"},
//  "Climatological - Drought": {icon: "icon-disaster_drought", color: "rgba(255,0,0," + opacity + ")"},
//  "Winter Storm": {icon: "icon-disaster_snowfall", color: "rgba(255,0,0," + opacity + ")"},
//  "Tropical Storm": {icon: "icon-disaster_heavy_rain", color: "rgba(255,0,0," + opacity + ")"},
//  "Earthquake, Tsunami": {icon: "icon-disaster_earthquake", color: "rgba(255,0,0," + opacity + ")"},
//  "Hydrological - Floods": {icon: "icon-disaster_flood", color: "rgba(255,0,0," + opacity + ")"},
//  "Landslide;Floods": {icon: "icon-disaster_landslide", color: "rgba(255,0,0," + opacity + ")"},
//  "Earthquake": {icon: "icon-disaster_earthquake", color: "rgba(255,0,0," + opacity + ")"},
//  "Landslide;Hydrological - Floods": {icon: "icon-disaster_landslide", color: "rgba(255,0,0," + opacity + ")"}
//
//}

function buildDisasterTypeLabel(disasterType, color) {

  var backColor = "";
  var labelColor = "";
  if (disasterType) {

    backColor = color || "rgba(204,0,51,0.4)";

    if(color.indexOf("255,255,255") > -1){
      //if the label is white, make the text black
      labelColor = "#000";
    }
    else{
      labelColor = "#fff";
    }
  }

  var icon = (config.UNOCHAIconLookup[disasterType]) ? config.UNOCHAIconLookup[disasterType].icon : 'icon-other_cluster_other';

  return '<div class="label-icon-number-100percent"' + (backColor ? ' style="font-family: humanitarian_icons; background-color: ' + backColor + ';color: ' + labelColor + '"' : '') + '><i class="un ' + icon + '"></i></div>';

}


//**********************************************************************
// function waitfor - Wait until a condition is met
//
// Needed parameters:
//    test: a value
//    expectedValue: the value of the test function we are waiting for
//    msec: delay between the calls to test
//    callback: function to execute when the condition is met
// Parameters for debugging:
//    count: used to count the loops
//    source: a string to specify an ID, a message, etc
//**********************************************************************
function waitfor(test, expectedValue, msec, count, source, callback) {
  // Check if condition met. If not, re-check later (msec).
  while (test() !== expectedValue) {
    count++;
    console.log("Waiting for condition to be met..." + count);
    setTimeout(function() {
      waitfor(test, expectedValue, msec, count, source, callback);
    }, msec);
    return;
  }
  // Condition finally met. callback() can be executed.
  console.log(source + ': ' + test() + ', expected: ' + expectedValue + ', ' + count + ' loops.');
  callback();
}

function createDesign(){
  var pattern = document.createElement('canvas');
  pattern.width = 40;
  pattern.height = 40;
  var pctx = pattern.getContext('2d');

  pctx.fillStyle = "rgba(188, 222, 178, 0.5)";
  pctx.fillRect(0,0,20,20);
  pctx.fillRect(20,20,20,20);

  return pattern;
}

function getImageRef(url){
  var img = new Image(256,256); // width, height values are optional params
  img.src = 'images/diagonal_stripes_1.png';
  return img;
}


module.exports = {
  gadm0 : gadm0,
  gadm1 : gadm1,
  gadm2 : gadm2,
  arcregions: arcregions,
  themeLayers: ["gadm0", "gadm1", "gadm2", "arcregions"] //a list of the theme layers - used to determine whether or not one is currently loaded or not.
};