GeoForce
========

Making Salesforce spatial.


##Chubbs

Chubbs is the NodeJS Spatial Server that serves as the API from which the web application consumes data. This
consumes data from the PostGIS database. This is currently a read-only tool. Specific SQL queries to perform the
logic we need is done by creating an SQL view. This view in turn automatically becomes an endpoint in Chubbs.

##GeoAngular

This is the front-end JavaScript application that utilizes AngularJS, Leaflet, and Bootstrap. The core of the architecture
in GeoAngular is the use of AngularJS' `ngRouter` to reflect all states of the application--both the map as well as
the stories and other applicable views.

##Succubus

This is our custum ETL (Extract, Transform, Load) tool that consumes data from Salesforce and inserts it into
our PostGIS database.

The basic idea behind this tool is that we have a set of queries that gets us all of what we need from Salesforce.
These queries in turn have their own table in PostGIS. These are referred to as "Query Tables." All of the tables
created and updated by Succubus have the prefix `sf_` in the PostGIS database.

