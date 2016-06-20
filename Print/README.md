phantasm - current version compatible with v1.9.2
========

## Overview

Phantasm is a node.js web service for exporting html web pages to PDF, PNG, JPG or GIF.  It is mainly a wrapper around phantomjs.

Required arguments are:

* URL - a URL to be loaded
* Output Format - would you like a PDF or PNG?  

Before an image of the page you've specified is created, you have a chance to pass in javascript commands.


##Installation

* [Ubuntu 12 and 13](/docs/Ubuntu_Install.md)
* [Windows](/docs/Windows_Install.md)
* [OSX](/docs/OSX_Install.md)

## Dependencies

[PhantomJS](http://phantomjs.org/index.html)


## Parmaters

#### url:
The most simple scenario is to provide a URL to the service.  The URL will load in an invisible browser on the server and PhantomJS will output an image.

	url: 'http://www.google.com'

#### imageformat:

	imageformat: 'png' | 'jpg' | 'gif' | 'pdf'

PhantomJS can output .png, .jpg, .gif and .pdf

#### format:

	format: 'html' | 'json'

html - Will render the result to the web form that was used to submit the request.  Just used to test out your settings mostly.

json - Will return a json object with a path to the output image.  Used when programmatically calling service.

#### selector:
Use a CSS selector to only return an image for the matching node's area. #mapDiv would only return an image showing the area bound by a div with the ID of 'mapDiv', for example.
	
	selector: '#mapDiv'

#### viewportheight:
The height, in px, that the invisible browser on the server should be.

	viewportheight: 800

#### viewportwidth:
The width, in px, that the invisible browser on the server should be.

	viewportwidth: 1200

#### codeblock:
This is the good part.
You can send javascript code to be executed in the page that's been loaded before the image is captured.  Use this to modify the page however you'd like.  The trick to capturing a user's page as they see is is to steal the DOM nodes you'd like (by cloning them in javascript) and injecting them into a print template HTML page that you've set up.

	codeblock: '$("#printContainer").append("<div>Hello World!</div>");'

## Examples

###Simplest example
You can send a javascript ajax request to this service using a POST request.  Here's an example.

	var postArgs = {
		format: "json",
		imageformat: "png"
		url: "http://www.fspmaps.com?region=bgd"
    };

	$.getJSON("http://www.yourinstance.com?callback=?", postArgs).done(function (data) { 
	    //celebrate 
		//Do something with data - the JSON object
	});


####Response JSON
	{
	  "image":"http://print.spatialdev.com/output/phantomoutput12345.png"
	}

####Output Image
That's it.  You just get a snapshot of the page just as it appears on first load.
![alt text](https://raw.github.com/apollolm/phantasm/master/docs/screens/SimpleOutput.png "Simple Output")



### Selector example

Maybe you just want to have an image of a partulcar portion of a page.  Well, you can use css selectors to specify a dom node.
For example, maybe you just want the left hand panel.  The ID of this node is 'SideBar'.
So let's add the #SideBar selector option:

	var postArgs = {
		format: "json",
		imageformat: "png",
		url: "http://www.fspmaps.com?region=bgd",
		selector: "#SideBar"
    };

	$.getJSON("http://www.yourinstance.com?callback=?", postArgs).done(function (data) { 
	    //celebrate 
		//Do something with data - the JSON object
	});


####Response JSON
	{
	  "image":"http://print.spatialdev.com/output/phantomoutput123456.png"
	}

####Output Image
OK.  So we only get the left side.  Cool.
![alt text](https://raw.github.com/apollolm/phantasm/master/docs/screens/LeftPanel.png "Selector Output")

###Leaflet Map example
OK.  A user is on my site.  They're looking at a map and turning on and off filters and zooming and panning.  
I want to capture the state of their map as well as some charts they've created using dynamic input and export it as a PNG.

Q: How?

A: Using javascript, steal their DOM nodes and pass them to an HTML shell page waiting on your server. (a print template)
Here's how you might do that.

	//Steal the leaflet map div (the inner one with all of the map tiles and content)
	var mapHTML = $('<div>').append($(".leaflet-map-pane").clone()).html().replace(/\"/g, '\\"');

	//Now take the string version of the map div and create instructions that will be passed to phantasm to insert it.
	var codeblock = '$("#printMapDiv").replaceWith("' + mapHTML + '");'; //This will be executed on the page when loaded on the server.

	var postArgs = {
		format: "json",
		imageformat: "png",
		url: "http://www.mydomain.com/printTemplates/print.html", //An example of this print.html page below
		codeblock: mapHTML
    };

	$.getJSON("http://www.yourinstance.com?callback=?", postArgs).done(function (data) { 
	    //celebrate 
		//Do something with data - the JSON object
	});

####Example of print.html
You create one or more print templates and make it accessible to the phantasm server (use a publicly accessible URL for example).
This example print template loads jQuery, jQueryUI, the Leaflet API, my normal site's .css file as well as a special print.css that overrides some styles that I don't want to see
in a printed version (such as hiding checkbox controls).

If your page needs d3, then load the d3 library in your template.
Lastly, the map div needs to be initialized as a leaflet map.  I do this in printLoad.js.

	<!DOCTYPE html>
	<html xmlns="http://www.w3.org/1999/xhtml">
	  <head>
		<title>FSP Interactive Map</title>
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<link rel="stylesheet" href="http://cdn.leafletjs.com/leaflet-0.6.4/leaflet.css" />
		<link rel="stylesheet" href="css/site.css" />
		<link rel="stylesheet" href="css/print.css"  />
	    <script src="http://cdn.leafletjs.com/leaflet-0.6.4/leaflet.js"></script>
		<script src='scripts/libs/jquery-1.8.2.min.js' type="text/javascript"></script>
		<script src="scripts/libs/jquery-ui-1.9.2.custom.min.js"></script>
	  </head>
	  <body>
		<div id="upperMapWrapper" style="border: 1px solid #b0b0b0;">
		    <div id="printMapDiv"></div>
            <div id="legendFilters"></div>
        </div>
	  </body>
	  <script src="scripts/printLoad.js" type="text/javascript"></script>
	  <script src="http://d3js.org/d3.v3.min.js"></script>
	</html

#### Initialize Leaflet map
Just initialize the map.  Don't worry about any settings since you'll be injecting the map dynamically.
	
	var map;
	$(document).ready(function () {
		map = L.map('printMapDiv');
	});

#### What's happening?
So.  When you pass the url http://www.mydomain.com/printTemplates/print.html to phantasm, it loads your print template in the invisible browser on the server.
Then in your client, take the map that the user is currently looking at and convert it and all of its contents into a string.  Wrap that in a jQuery command:

	var codeblock = '$("#printMapDiv").replaceWith("' + mapHTML + '");';

After print.html is loaded on the server, it will execute that code.  
In this case, it's going to inject the user's map node into a div in the print template called 'printMapDiv', effectively transferring 
what the user is seeing into the browser on the server.

An image will then be captured.

Note:  You can add more jQuery instructions to further modify the page.  Perhaps you want to add a legend or change the contents of a particular 
text element.  Just add more instructions to the codeblock string that gets passed to the server.

Extra Credit: Let the user choose which elements they want to export in your client application.  People like to have control.
	

####Response JSON
	{
	  "image":"http://print.spatialdev.com/output/phantomoutput123456.png"
	}

####Output Image
Wow.  It's exactly what the user was looking at!
![alt text](https://raw.github.com/apollolm/phantasm/master/docs/screens/LeafletOutput.png "Leaflet Output")



### ESRI Javascript API example, using Dojo

OK.  A user is on a different site - one with a map built using the ESRI JavaScript API.  They're looking at a map and turning on and off filters and zooming and panning.  
I want to capture the state of their map as well as some charts they've created using dynamic input and export it as a PNG.

Q: How?

A: Same thing as above. Using javascript, steal their DOM nodes and pass them to an HTML shell page waiting on your server. (a print template)
Here's how you might do that.

	//Steal the ESRI map div (the inner one with all of the map tiles and content)
	var mapHTML = dojo.place(dojo.clone(dojo.byId("mapDiv_root")), dojo.create('div')).innerHTML.replace(/\"/g, '\\"');

	//Now take the string version of the map div and create instructions that will be passed to phantasm to insert it.
	var codeblock += "dojo.place('" + mapHTML + "',  dojo.byId('printMapDiv'), 'only');"; //This will be executed on the page when loaded on the server.

	var postArgs = {
		format: "json",
		imageformat: "png",
		url: "http://www.mydomain.com/printTemplates/print.html", //An example of this print.html page below
		codeblock: mapHTML
    };

	//using jQuery to post.  You could use Dojo to post, too.
    $.ajax({
        type: "POST",
        url: 'http://print.spatialdev.com/',
        data: postArgs,
        success: function(data){
			//do something with the response
		}
    });

####Example of print.html
You create one or more print templates and make it accessible to the phantasm server (use a publicly accessible URL for example).
This example print template loads Dojo, the ESRI JavaScript API, my normal site's .css file as well as a special print.css that overrides some styles that I don't want to see
in a printed version (such as hiding checkbox controls).

If your page needs d3, then load the d3 library in your template.
Lastly, the map div needs to be initialized as an ESRI map.  I do this in printLoad.js.

	<!DOCTYPE html>
	<html xmlns="http://www.w3.org/1999/xhtml">
	  <head>
		<title>FSP Interactive Map</title>
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<link rel="stylesheet" href="http://serverapi.arcgisonline.com/jsapi/arcgis/3.4/js/dojo/dijit/themes/claro/claro.css">
		<link rel="stylesheet" href="http://serverapi.arcgisonline.com/jsapi/arcgis/3.4/js/esri/css/esri.css">
		<link rel="stylesheet" href="css/site.css" />
		<link rel="stylesheet" href="css/print.css"  />
		<script src="http://serverapi.arcgisonline.com/jsapi/arcgis/3.4/"></script>
	  </head>
	  <body>
		<div id="upperMapWrapper" style="border: 1px solid #b0b0b0;">
		    <div id="printMapDiv"></div>
            <div id="legendFilters"></div>
        </div>
	  </body>
	  <script src="scripts/printLoad.js" type="text/javascript"></script>
	  <script src="http://d3js.org/d3.v3.min.js"></script>
	</html

#### Initialize ESRI map
Just initialize the map.  Don't worry about any settings since you'll be injecting the map dynamically.
	
	var map;
	dojo.ready(function () {
		map = new esri.Map("printMapDiv");
	});

#### What's happening?
So.  When you pass the url http://www.mydomain.com/printTemplates/print.html to phantasm, it loads your print template in the invisible browser on the server.
Then in your client, take the map that the user is currently looking at and convert it and all of its contents into a string.  Wrap that in a dojo command:

	var codeblock += "dojo.place('" + mapHTML + "',  dojo.byId('printMapDiv'), 'only');";

After print.html is loaded on the server, it will execute that code.  
In this case, it's going to inject the user's map node into a div in the print template called 'printMapDiv', effectively transferring 
what the user is seeing into the browser on the server.

An image will then be captured.

Note:  You can add more dojo instructions to further modify the page.  Perhaps you want to add a legend or change the contents of a particular 
text element.  Just add more instructions to the codeblock string that gets passed to the server.

Extra Credit: Let the user choose which elements they want to export in your client application.  People like to have control.
	

####Response JSON
	{
	  "image":"http://print.spatialdev.com/output/phantomoutput1234567.png"
	}

####Output Image
Wow.  It's exactly what the user was looking at!
![alt text](https://raw.github.com/apollolm/phantasm/master/docs/screens/LeafletOutput.png "ESRI Output")




