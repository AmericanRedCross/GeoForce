# GeoAngular

GeoAngular is the Angular.js front-end portion of the Mapfolio application.

It contains all of the client-side logic for displaying the Mapfolio applicaton.

The GeoAngular Project is located at /GeoAngular/app

##Orientation

Getting around the project might seem a little daunting at first, so here's an introduction.

###Index.html
This is the main .html file for this (mostly) single page app.  Index references all of the .css and javascript dependencies required to run the app.

Note that this project uses Bower to install 3rd party dependencies, and browserify to group together all custom logic.

The browserified file is output as scripts/geo-angular.js.  

###Scripts Folder

The scripts folder (app/scripts) contains all of the custom javascript that runs the site.  Each major component of the app is broken into its own Angular controller file.

Breifly:

* app.js - The main entry point for Angular framework.  New controllers must be required at the bottom of this file.
* global.js - defines a few globally-available functions
* config.js - defines *some* configuration settings for the app, such as which fields should be shown/hidden in the details panels.  Also contains the ordering of certain attributes in the project/disaster details window.
* geo-angular.js - the browserified file that is actually referenced by index.html

#### controllers/
Inside of scripts/controllers:

* basemaps.js - Defines a few logic functions for working with the basemap panel.  When a new basemap is chosen, the URL ($stateParams) is changed to reflect this.  The stateParams update triggers a UI refresh which then handles swapping the map.
* breadcrumbs.js - Handles fetching geometries and determining center features for display in the breadcrumb control at the top of the ap.
* details.js - Handles receiving an object to display in the details panel through a pub/sub model.
* export.js - Calls the print service with the appropriate arguments required to generate an image of a particular application state.
* filters.js - Resopnsible for piecing together the filter logic in the filters panel.
* info.js - Stub controller that can be used in conjunction with the 'Info Panel'.
* landing.js - When a user shows up to the app and is not authenticated, they're kicked to a default page.  This is for that.
* layers.js - Lots of logic around GADM layers, and Contextual layers.  Keeps track of available layers gathered from various layer config files (located at /config)
* legend.js - Handles updating of the legend at the bottom of the map.
* main.js - An important bit of logic that works with angular-ui-router to watch for changes to the state.  Changes are broadcast to different listeners thoughout the app.
* map.js - Contains almost all of the logic dealing with Leaflet, reading the URL and adding/or removing layers, fetching theme data when map themes change and merging the resulting values into the Vector Tile layers, redrawing the legend, etc.
* navbar.js - Handles updating the stateParams object when fullscreen mode is toggled.
* search.js - Deals with searching the backend for text matches in Projects and Disasters.
* side-view.js - Resizing side panels when the app resizes.
* stories.js - Handles loading and displaying stories stored in the storiesconfig.js
* theme.js - defines themes, and what happens when themes change.
* upload.js - Handles logic for uploading to GISTs.
* zoom-extent.js - loads extents for countries so users can zoom to countries.


#### scripts/services
The StoriesConfig.js that specifies stories, as well as a LayerConfig.js, which pulls in all of the main layer config files from /Config.

* StoriesConfig.js - Specifies stories that should be shown in the stories panel. Thumbnails must be generated manually and placed in /Chubbs/public/images.
* LayerConfig.js - a Stub class that mainly pulls in other config files stored in /Config.
* Donuts.js - d3 logic for creating charts inside of details panel.

###scripts/services/Vector
Inside of scripts/services/Vector there are a number of .js files that deal with loading various kinds of map data.

* BBoxGeoJSON.js - Mainly left over from version 1 - responsible for detecting map bbox updates and fetching GeoJSON from SpatialServer.
* csv.js - Loads and parses csv data specified in layer configs.
* GeoJSON.js - Loadsa and parses GeoJSON data for display in Leaflet.
* KML - Loads and parses KML data for display in Leaflet.
* PBF - Loads and parses Mapbox Vector Tiles for display on Leaflet.  Reads config object and injects angular goodness into click functions, etc.
* Resource - Base class for other layer types.
* vector.js - Mainly left over from BBoxGeoJSON functionality.  
* VectorProvider - a factory class responsible for eating various layer configs and figuring out what to do with them.


### app/lib
3rd party libraries (that weren't loaded from Bower) are included here.

* d3.min.js - d3
* jQuery
* leaflet-omnivore
* mapbox.js
* simplestyle.js
* bootstrap
* Leaflet.MapboxVectorTile - when installing the app for the first time, you need to CD to this directory and run `npm install`
* Leaflet
* FeatureLabel - Legacy code for re-centering labels on pan in SVG.

### app/succubus_gitignore

This folder contains files dumped from the nightly ETL.  The .json files contain mappings between ECOS properties and human readable strings.
There is sometimes some weirdness here with the files.  We .gitingored these files, as we don't want nightly changes to have git conflicts on the server (that would prevent the files from updating).
However, you should be able to clone the app and get it running without running the ETL (which would generate the required files).  Currently, they're .gitignored, although the disaster object was committed before the .gitignore, so there's occasionally some conflits when updating servers.