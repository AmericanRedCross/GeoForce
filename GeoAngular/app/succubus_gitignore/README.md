Do not track or commit any of the files in this directory. `meta.js` in Succubus writes
data to this nightly. This data is used by the UI of the app.

To get an updated model of the details and filters panels,
run meta.js via `node Succubus/preprocessing_operations/meta.js`
or run the entire Succubus ETL. This writes the data that you need to have an operational
UI for the Filter and Details panel in the web app.

This data needs to be ignored by git, because Succubus runs nightly and will keep adding
updates to the tracked area, thus preventing a clean pull on the server to get updates.

You must run Succucbus or `node Succubus/preprocessing_operations/meta.js` for the 
Mapfolio GeoAngular web app to work.
