Mapfolio
========

A Node.js-Angular.js project that makes Salesforce.com mappable.

##Overview
The Red Cross is using an instance of Salesforce.com (called ECOS) to store Project and Disaster Response information throughout the organization.
Projects and Disasters in ECOS are assigned a unique identifier that ties each project or disaster to an administrative boundary (from [GADM](http://www.gadm.org/)).
A nightly Extract, Transform and Load operation (ETL) connects to the Salesforce.com API and pulls down the latest information in the ECOS System.
The data is routed to a PostgreSQL/PostGIS instance that has corresponding GADM geometry.  Through some preprocessing and other trickery, the 
data is massaged into a format that is well suited for map display.

##Main Components

There are 4 main components that make up the Mapfolio project:


###Spatial Server (Node.js API and app host)

Spatial Server is the NodeJS Server that acts as the API from which the web application consumes data. This
consumes data from the PostGIS database. This is currently a read-only tool. Specific SQL queries to perform the
logic we need is done by creating an SQL view. This view in turn automatically becomes an endpoint in Spatial Server.
Spatial Server also hosts the GeoAngular web app as static files.

[More About the Red Cross Spatial Server Instance](Docs/SpatialServer.md)

###GeoAngular (Angular.js Web App)

This is the front-end JavaScript application that utilizes AngularJS, Leaflet, and Bootstrap. The core of the architecture
in GeoAngular is the use of AngularJS' `ngRouter` to reflect all states of the application--both the map as well as
the stories and other applicable views.

[More About the Red Cross GeoAngular/Mapfolio App](Docs/GeoAngular.md)


###ETL (Node.js SalesForce ETL)

This is our custum ETL (Extract, Transform, Load) tool that consumes data from Salesforce and inserts it into
our PostGIS database.

The basic idea behind this tool is that we have a set of queries that gets us all of what we need from Salesforce.
These queries in turn have their own table in PostGIS. These are referred to as "Query Tables." All of the tables
created and updated by Succubus have the prefix `sf_` in the PostGIS database.

[More About the Red Cross ETL](Docs/ETL.md)


###Vector Tiles
Version 2.0 of Mapfolio uses Mapbox Vector Tiles [on top of Leaflet](https://github.com/SpatialServer/Leaflet.MapboxVectorTile) for global boundary rendering.
To find out more about making and hosting these vector tiles, [read this](Docs/VectorTiles.md).
More about styling vector tiles in the Leaflet.MapboxVectorTile plugin [here](Docs/VectorTiles_Style.md).


