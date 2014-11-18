Do not track or commit any of the files in this directory. `meta.js` in Succubus writes
data to this nightly. This data is used by the UI of the app.

To get an updated model of the details and filters panels,
run meta.js via `node Succubus/preprocessing_operations/meta.js`
or run the entire Succubus ETL. This writes the data that you need to have an operational
UI for the Filter and Details panel in the web app.

This data needs to be ignored by git, because Succubus runs nightly and will keep adding
updates to the tracked area, thus preventing a clean pull on the server to get updates.

An out of date version of `sf-object-field-hash.json` and `sf-project-filter-checkboxes.json`
are in this directory so that you can get the app up and running without having to run
Succubus. This is potentially out of date information, however, and it is recommended
to run meta.js in the Succubus if you are having problems.
