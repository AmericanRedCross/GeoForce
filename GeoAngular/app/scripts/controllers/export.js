/**
 * Created by Ryan Whitley
 *       on 6/4/14.
 */

module.exports = angular.module('GeoAngular').controller('ExportCtrl', function($scope, $http, $state, $stateParams) {
    console.log('ExportCtrl');

    $scope.export = function () {

    };

    $scope.routeUrl = window.location;


    /**
     * If ExportCtrl gets called twice for some reason, we might
     * have this class hanging around blocking the app. ExportCtrl
     * does get called twice sometimes, because the modal sometimes
     * nudges the map and reinstantiates the modal again via a new
     * route.
     */
    $('.modal-backdrop').remove();

    $('#exportModal').modal('show');

    $('#exportModal').on('hidden.bs.modal', function (e) {
        $state.go('main', $stateParams);
    });


    var self = this;

    //defaults
    self._LayoutElements = { "map": true, "legend": true, "countryoverview": false, "accesspointsoverview": false, "bankingoverview": false, "tooloutput": false };
    self._ImageFormat = 'png';

    self._init = function () {

        self._connectRadioButtonOnClicks();
        $("#executeExportButton").on("click", function () {
            //Show loading gif. Hide export button
            try {
                self._exportImage();
            }
            catch (e) {
                self._showExportButtonHideLoader();
            }

        });
    };

    self._showWaitingPanel = function () {
        self._showLoader(); //show knightRider image, hide
        $("#exportOptionsPanel").css({"display": "none"});
        $("#exportWaitingPanel").css({ "display": "block" });
        $(".exportGroupTitle.error").css({ "display": "none" }); //Hide error message, if shown
        $(".imageOpenButton").css({"display": "none"}); //hide open image button
    }

    self._hideWaitingPanel = function () {
        $("#exportWaitingPanel").css({"display": "none"});
        $("#exportOptionsPanel").css({"display": "block"});
    }

    self._hideExportButtonShowLoader = function () {
        $("#executeExportButton").css({ "display": "none" });
        $(".knightRiderLoader").css({ "display": "block" });
    }

    self._showExportButtonHideLoader = function () {
        $("#executeExportButton").css({"display": "block"});
        $(".knightRiderLoader").css({"display": "none"});
    }

    self._connectRadioButtonOnClicks = function () {


        $("#optionalOutputMap").on("click", self._getLayoutElementOnClick('map'));
        $("#optionalOutputLegend").on("click", self._getLayoutElementOnClick('legend'));
        $("#optionalOutputCountryOverview").on("click", self._getLayoutElementOnClick('countryoverview'));
        $("#optionalOutputAccessPointsPanel").on("click", self._getLayoutElementOnClick('accesspointsoverview'));
        $("#optionalOutputBankingOverview").on("click", self._getLayoutElementOnClick('bankingoverview'));
        $("#optionalOutputToolOutput").on("click", self._getLayoutElementOnClick('tooloutput'));

        var pngRBNode = $("#pngImageFormat");
        pngRBNode.on("click", self._getImageButtonRadioButtonOnClick(pngRBNode, 'png'));

        var pdfRBNode = $("#pdfImageFormat");
        pdfRBNode.on("click", self._getImageButtonRadioButtonOnClick(pdfRBNode, 'pdf'));

        $("#exportClose").on("click", self.hideExportOption);

        $(".killOpenButton").on("click", self._hideWaitingPanel); //the discard button

    };

    self._getImageButtonRadioButtonOnClick = function (node, imageFormat) {

        return function () {
            self._ImageFormat = imageFormat;
            self._removeAllSelectedRadioButtons("exportOptionsContainer");
            node.addClass("exportRadioButtonSelected");
        };
    };

    self._getLayoutElementOnClick = function (element) {
        return function () {
            //Toggle Active State
            self._LayoutElements[element] = !self._LayoutElements[element];

            //$("#exportOptions .checkbox").removeClass("checked");
            $(this).toggleClass('checked');
        };
    };

    self._removeAllSelectedRadioButtons = function (parentDivID) {
        $.each($("#" + parentDivID + " .exportRadioButtonSelected"), function (idx, node) {
            $(node).removeClass("exportRadioButtonSelected");
        });
    };

    self._hideLoader = function () {
        $(".knightRiderLoader").css({"display": "none"});
    }

    self._showLoader = function () {
        $(".knightRiderLoader").css({"display": "block"});
    }

    this.showExportOption = function () {
        $("#exportOptions").css({ "display": "block" });
    }

    this.hideExportOption = function () {
        $("#exportOptions").css({ "display": "none" });
    }

    self._killOpenImageButton = function () {
        //Hide 'open image' button and show export button.
        self._showExportButtonHideLoader();
        $(".imageOpenButton").css({"display": "none"});
    }

    self._onError = function () {
        self._hideWaitingPanel();
        //Display error message.
        $(".exportGroupTitle.error").replace("<span>There was an error exporting the image.</span>");
        $(".exportGroupTitle.error").css({"display": "block"});
    }

    self._exportImage = function () {

        var titleHTML = "Title";

        //var legendsHTML = $('<div>').append($("#LayerListWrapper").clone()).html().replace(/\"/g, '\\"');


        var layoutWidth = $("body").width();
        var mapHeight = $("#MapCtrl").height();
        var mapWidth = $("#MapCtrl").width();

        var codeblock = "";
        //Adjust body width
        codeblock += '$("body").width(' + (mapWidth + 20) + ');';

        //Label selected country
        //codeblock += '$("#activeCountry").html( "' + _FSP.MapBuilder.SelectedCountry + '");';

        //Depending on what's in the layoutElements array, grab dom nodes
        var _showNone = true; //flag to detect if user chose nothing

        for (var key in self._LayoutElements) {
            if (self._LayoutElements.hasOwnProperty(key)) {
                //If user has selected even 1 element, then set _showNone to false; (because we are going to show something)
                if (self._LayoutElements[key] === true) {
                    _showNone = false;
                }
                switch (key) {
                    case "map":
                        if (self._LayoutElements[key] === true) {
                            //grab the map div
                            var mapHTML = $('<div>').append($(".leaflet-map-pane").clone()).html().replace(/\"/g, '\\"');
                            if (mapHTML.indexOf('-webkit-transform') === -1) {
                                mapHTML = mapHTML.replace(/-ms-transform/g, 'transform').replace(/transform/g, '-webkit-transform');
                            }
                            codeblock += '$("#MapCtrl").height(' + mapHeight + ');';
                            codeblock += '$("#MapCtrl").replaceWith("' + mapHTML + '");';
                            //Adjust Map wrapper
                            codeblock += '$("#upperMapWrapper").width(' + (mapWidth) + ');';
                            codeblock += '$("#upperMapWrapper").height(' + (mapHeight) + ');';
                        }
                        else {
                            //hide map div
                            codeblock += '$("#upperMapWrapper").hide();';
                        }
                        break;

                    case "legend":
                        if (self._LayoutElements[key] === true) {
                            var legendsHTML = $('<div>').append($("#LayerListWrapper").clone()).html().replace(/\"/g, '\\"');
                            codeblock += "$('#legends').append('" + legendsHTML + "');";

                            //Adjust Title of CICOs
                            codeblock += "$('#legends').prepend($('#parentCICO'));";
                            codeblock += "$('#legends').prepend($('#LayerListWrapper header'));";

                            //adjust layout
                            codeblock += "$('#grpCICO').addClass('clearfix');";
                            codeblock += "$('#LayerListWrapper').addClass('clearfix');";
                            codeblock += "$('#LayerListWrapper').append($('<div id=\\\"otherLayerHolder\\\" style=\\\"float:left;\\\"></div>'));";
                            codeblock += "$('.countryspecificbaselayer').each(function(idx,node){ $('#otherLayerHolder').append($(node)); });";


                            //get filters if used.
                            var legendFiltersHTML = $('<div>').append($('<div class="footnote">* Selected Financial Locations - {Title}</div>'.replace("{Title}", _FSP.TableBuilder.buildCICOLabelExpression())).html().replace(/\"/g, '\\"'));
                            codeblock += "$('#legendFilters').append($('" + legendFiltersHTML.html() + "'));";

                            //Move panelTitle to grpCICO.  1st thing.
                            codeblock += "$('#grpCICO').prepend($('.panelTitle'));";
                        }
                        else {
                            //if both map and legend are excluded, hide the wrapper with border
                            if (self._LayoutElements["map"] != true) {
                                codeblock += '$("#upperMapWrapper").css({"display": "none"});';
                            }
                        }
                        break;

                    case "countryoverview":
                        if (self._LayoutElements[key] === true) {
                            var COHTML = $('<div>').append($("#uxCountryOverview").clone().addClass("on")).html().replace(/\"/g, '\\"');
                            codeblock += "$('#countryOverview').append('" + COHTML + "');";
                        }
                        break;

                    case "accesspointsoverview":
                        if (self._LayoutElements[key] === true) {
                            var APHTML = $('<div>').append($("#uxAccessPointSummary").clone().addClass("on")).html().replace(/\"/g, '\\"');
                            codeblock += "$('#uxAccessPointSummary').append('" + APHTML + "');";
                        }
                        break;

                    case "bankingoverview":
                        if (self._LayoutElements[key] === true) {
                            var BOHTML = $('<div>').append($("#uxAccessVsUsageWrapper").clone().addClass("on")).html().replace(/\"/g, '\\"');
                            codeblock += "$('#uxAccessVsUsageWrapper').append('" + BOHTML + "');";
                        }
                        break;

                    case "tooloutput":
                        if (self._LayoutElements[key] === true) {
                            var TOHTML = $('<div>').append($("#resultStackPlaceholder").clone().addClass("on")).html().replace(/\"/g, '\\"').replace(/\'/g, "\\'");
                            codeblock += "$('#resultStackPlaceholder').append('" + TOHTML + "');";
                        }
                        break;

                }
            }
        }

        if (_showNone == true) {
            //Don't do anything, cause user hasn't selected anything.
            $("#exportMessage").html("Please select 1 or more elements to export.");
            return;
        }
        else {
            $("#exportMessage").html("");
        }

        //show loader
        self._showWaitingPanel();

        //formatting
        codeblock = codeblock.replace(/(\r\n|\n|\r)/gm, "");  //remove line breaks

        var printPostArgs = {
            url: 'http://geo.redcross.com/mapfolio/print.htm',
            imageformat: self._ImageFormat || 'png',
            format: 'json',
            codeblock: codeblock,
            viewportheight: mapHeight,
            viewportwidth: layoutWidth
        };


        $.ajax({
            type: "POST",
            url: 'http://print.spatialdev.com',
            data: printPostArgs,
            success: self._onImageExport,
            error: self._onError
        });

    };

    self._onImageExport = function (result) {

        var exportImageURL = result.image;

        //instead, show a button/hyperlink for the user to open the image.
        $(".imageOpenButton a").attr("href", exportImageURL);
        $(".imageOpenButton").css({"display": "block"});

        //Hide loader
        self._hideLoader();
    };

    self._init();
});
