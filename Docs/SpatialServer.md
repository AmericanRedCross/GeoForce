#Red Cross Spatial Server

The Red Cross instance of Spatial Server is a customized branch of [Spatial Server](https://github.com/spatialdev/PGRestAPI).
It is a Node.js application that has many features.  Find out more about the features of Spatial Server by visiting the [docs](https://github.com/spatialdev/PGRestAPI).

Several differences exist between the main branch and this version, notably the OAuth Integration for security.
There is also custom logic specific to this project that has been added.

##Installation
See either [this](Docs/installation.md) or [this](https://github.com/spatialdev/PGRestAPI#installation) for installation instructions.
Note that the 2nd link is for general installation instructions for Spatial Server, not this specific Red Cross instance.

##Custom Endpoints
The Mapfolio application makes use of Spatial Server's Custom Endpoint functionality.  Developers can write custom API logic and drop the .js file into /Endpoints/Custom/Operations to get their custom logic exposed RESTfully.

Some of the main custom endpoints used for Mapfolio are:

* GetProjectByGUID
* GetDisasterByGUID
* GetALLAggregatedThemeFeatures
* DoECOSTextSearch

If there is a problem with what's being shown not jiving with filters, then these services may play a part and will likely need to be updated.

###GetProjectByGUID
When a user clicks on a country or region on the map while the 'Project' theme is active, then this web service gets called.
It accepts a GUID, a GADM Level (-1 thru 5) and optional filters.
Example:

    /services/custom/custom_operation?name=getprojectbyguid&format=json&guids=da7e557d-39a1-4174-844f-227353bc25b6&gadm_level=0&filters=sector__c%20LIKE%20%27%Health%%27

The response includes ProjectID, Name, Dates and other important project information specified by Red Cross.

###GetDisasterByGUID
When a user clicks on a country or region on the map while the 'Disaster' theme is active, then this web service gets called.
It accepts a GUID, a GADM Level (-1 thru 5) and optional filters.
Example:

    /services/custom/custom_operation?name=getdisasterbyguid&format=json&guids=8faaa5f4-531c-4e9b-8b60-28c301d0cf18&gadm_level=0&filters=iroc_status__c%20LIKE%20%27%Monitoring%%27OR%20iroc_status__c%20LIKE%20%27%Active%%27%20OR%20iroc_status__c%20LIKE%20%27%Inactive%%27

The response includes DisasterID, Name, Dates and other important disaster information specified by Red Cross.


###GetAllAggregatedThemeFeatures
When a user selects a new ECOS Theme (such as Project, Disaster, Project Risk, Project Health or Disaster Type), this web service gets called.
It accepts a theme (project, projectRisk, projectHealth, disaster, disasterType), a GADM Level (-1 thru 5) and optional filters.
Example:

    /services/custom/custom_operation?name=getallaggregatedthemefeatures&format=geojson&theme=project&gadm_level=0
    
A featureCollection is returned.
The response includes a theme_count - depending on the theme, it will contain the number of projects at OR below a given boundary level.
The response also includes the GUID (the unique identifier for each boundary geometry)
The response also include the theme name.

This information is subsquently used to join to the in-memory vector tiles that have already been loaded onto the map.
The theme_counts are appened to the properties of each feature, which are then used to symbolize or color-code the map.

###DoECOSTextSearch
When a user searches for project or disaster info via a textbox, then this web service gets called.
It accepts a search string, and executes a text search on 2 tables, combining the results in the output.
Example:

    /services/custom/custom_operation?name=doecostextsearch&format=json&text=Typ
    
The response includes Project or DisasterID, Name, Dates and other important disaster information specified by Red Cross.



##Running The App
After private/settings.js has been completed with the correct DB connection info, cd to /Chubbs and `node app.js`
This should start the Node.js API, and start serving the static GeoAngular assets.
Navigating to IP:3001 (or your port) should open the mapfolio web application.

On a production server, we use either [Forever](https://github.com/foreverjs/forever) or [PM2](https://github.com/Unitech/pm2).

