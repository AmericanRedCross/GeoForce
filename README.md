GeoForce
========

Making Salesforce spatial.


##Chubbs

Chubbs is the NodeJS Spatial Server that serves as the API from which the web application consumes data. This
consumes data from the PostGIS database.

##GeoAngular

This is the front-end JavaScript application that utilizes AngularJS, Leaflet, and Bootstrap.

##Succubus

This is our custum ETL (Extract, Transform, Load) tool that consumes data from Salesforce and inserts it into
our PostGIS database.

The basic idea behind this tool is that we have a set of queries that gets us all of what we need from Salesforce.
These queries in turn have their own table in PostGIS. These are referred to as "Query Tables." All of the tables
created and updated by Succubus have the prefix `sf_` in the PostGIS database.

