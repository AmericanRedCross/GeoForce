#Vector Tiles - How To

MapFolio uses Mapbox Vector Tiles on top of Leaflet to draw and symbolize the GADM (district boundaries) dataset.

Here is the process to create, and host custom vector tiles.

##Step 1 - Get Mapbox Studio
Download Mapbox Studio - [here](https://www.mapbox.com/mapbox-studio/#darwin)
Install.

##Step 2 - Get your data right
Using Mapbox Studio to bake vector tiles can be time and resource intensive.  Choosing to bake from Shapefiles has proven to perform better then connecting to PostgreSQL, for example.
Anyway, if using a shapefile, minimize the number of 'extra' attributes included.
I used QGIS to connect to the Red Cross RDS instance, and load each GADM level.
I then exported each layer as a local shapefile.
The export process tacks on extra fields which I then deleted.
For GADM0 (for example), I kept the fields name_0, id_0 and guid.
For GADM2, I kept the fields name_0, id_0, name_1, id_1, name_2, id_2, guid.

Next, for each GADM level, I used the QGIS create centroids operation to create a layer of centroids for each polygon.
For points that were obviously outside of the boundaries of the polygon (like Vietnam), I manually moved them back into the polygon they belong to.
Again, make sure the attributes are kept to a minimum - in this case, I kept them the same as the polygon attributes listed above.

##Step 3 - Load data into Studio
1. Open Mapbox Studio.
2. Log in (if necessary).
3. In the bottom left, choose 'Projects', then 'New Project'.
4. In the modal that appears, choose 'Blank Source' on the right.

We will be adding 2 layers for each GADM zoom level - one for the boundaries and one for the label points.
These shapefiles were explained in Step 2.

Click '+ New Layer', then browse to your GADM0 boundary shapefile.
Mapfolio Expects all GADM Boundary layers to be called GADM_2014.  To do this, you must rename the layer in Mapbox Studio.  Under the layers listing, click on the name of the layer you just added.
A microscopic 'rename' link appears at the top of the screen, just under the name of the layer.  Click it and enter GADM_2014 here.

Next, click '+ New Layer' again and browse to your GADM0_label shapefile (this is the point layer created in step 2).

Mapfolio expects the point layer to be called 'GADM_2014_label'.  Follow the instructions just like renaming the polygon layer to rename this layer.

Now!  We're almost ready to export the .mbtiles vector tiles.  We need to tell Mapbox Studio how many zoom levels we want to spit out.

In the top left of the screen, choose 'settings'.  At the bottom of the panel that slides out, adjust the Minzoom and Maxzoom sliders.  For GADM0, we choose 0 thru 9 (or so).

Levels for each Vector Tile Level
* ArcRegions - 0 - 6
* GADM0 - 0 - 9
* GADM1 - 0 - 11
* GADM2 - 5 - 11
* GADM3 - 9 - 11


Click 'Save as' to save your project for later.
Lastly, click 'Settings', then Export to MBTiles.
This might take awhile, depending on how many zoom levels were chosen, and the complexity of the data being converted.
My experience was anywhere between 20 seconds for ArcRegions, to 12 Hours+ for GADM 1 and 2.

When the export process finishes, download/save the output .mbtiles file.


##Hosting the .mbtiles.
There are multiple options for hosting and serving the vector tiles contained within the .mbtiles file.

1) Copy the .mbtiles file into /Chubbs/data/pbf_mbtiles and restart the node app.  New endpoints will be craeted that will serve the vector tiles from the .mbtiles files.
2) Upload and host on on Mapbox.
3) Copy the .mbtiles file to a temporary EC2 machine, explode the .mbtiles file using MBUtil, then copy the files to S3 with a gzip header and serve them statically from S3. (this is what we're doing)


