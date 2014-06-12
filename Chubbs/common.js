//common.js is a collection of commonly used functions by the main app.js and all submodules.
var pg = require('pg'),
    querystring = require('querystring'),
    http = require("http"),
    settings = require("./settings"),
    fs = require("fs"),
    zlib = require("zlib"),
    shortid = require("shortid"),
    mercator = require('./utils/sphericalmercator.js'), // 3857
    geographic = require('./utils/geographic.js'), //4326
    parseXYZ = require('./utils/tile.js').parseXYZ;

var common = {};
common.formatters = {};

common.respond = function (req, res, args, callback) {

  // File name the respondant JSON will be if downloaded.
  var downloadFileName = args.name || args.table || 'download';

  // makes the json pretty if desired. (2 space indent)
  var indent = args.pretty ? 2 : null;

  //Show or hide different NAV elements based on whether the endpoint is installed or not


  //Write out a response as JSON or HTML with the appropriate arguments.  Add more formats here if desired
  if (!args.format || args.format.toLowerCase() == "html") {
    //calculate response time
    args.responseTime = new Date - req._startTime; //ms since start of request

    //Determine sample request based on args
    res.render(args.view, args);
  }
  else if (args.format && (args.format.toLowerCase() == "json" || args.format.toLowerCase() == "esrijson" || args.format.toLowerCase() == "j")) {
    //Respond with JSON
    if (args.errorMessage) {
//      res.jsonp(500, { error: args.errorMessage });
      res.writeHead(500, {
        'Content-Type': 'application/json'
      });
      res.end(JSON.stringify({ error: args.errorMessage }, null, indent));
    }
    else {
      //Send back json file
      res.setHeader('Content-disposition', 'attachment; filename=' + downloadFileName + '.json');
      res.writeHead(200, {
        'Content-Type': 'application/json'
      });

      res.end(JSON.stringify(args.featureCollection, null, indent));
//    res.jsonp(args.featureCollection);

    }
  }
  else if (args.format.toLowerCase() == "geojson") {
    //Set initial header
    res.setHeader('Content-disposition', 'attachment; filename=' + downloadFileName + '.geojson');

    //Responsd with GeoJSON
    if (args.errorMessage) {
      res.writeHead(500, {
        'Content-Type': 'application/json'
      });
      res.end(JSON.stringify({ error: args.errorMessage }, null, indent));
    }
    else {
      //Send back json file
      res.writeHead(200, {
        'Content-Type': 'application/json'
      });

      //res.setHeader('Content-Type', 'application/json');
      //this.compress(req, res, JSON.stringify(args.featureCollection, null, indent));

      res.end(JSON.stringify(args.featureCollection, null, indent));
    }
  }
  else if (args.format && (args.format.toLowerCase() == "shapefile")) {
    //Requesting Shapefile Format.
    //If there's an error, return a json
    if (args.errorMessage) {
      res.writeHead(500, {
        'Content-Type': 'application/json'
      });
      res.end(JSON.stringify({ error: args.errorMessage }, null, indent));
    }
    else {
      //Send back a shapefile
      res.download(args.file, function () {
        callback(args.file)
      });
    }
  }
  else if (args.format && (args.format.toLowerCase() == "csv")) {
    //Responsd with CSV
    //If there's an error, return a json
    if (args.errorMessage) {
      res.writeHead(500, {
        'Content-Type': 'application/json'
      });
      res.end(JSON.stringify({ error: args.errorMessage }, null, indent));
    }
    else {
      var filename = downloadFileName + ".csv";
      //Send back a csv
      res.setHeader('Content-disposition', 'attachment; filename=' + filename);
      res.writeHead(200, {
        'Content-Type': 'text/csv'
      });
      res.end(args.featureCollection);
    }
  }
  else {
    //If unrecognized format is specified
    if (args.errorMessage) {
      res.writeHead(500, {
        'Content-Type': 'application/json'
      });
      res.end(JSON.stringify({ error: args.errorMessage }, null, indent));
    }
    else {
      res.writeHead(200, {
        'Content-Type': 'application/json'
      });
      res.end(JSON.stringify(args.featureCollection, null, indent));
    }
  }
};

common.compress = function(req, res, result) {
    var acceptEncoding = req.headers['accept-encoding'];
    if (!acceptEncoding) { acceptEncoding = ''; }
    if (acceptEncoding.match(/\bdeflate\b/)) {
        zlib.deflate(result, function(err, result) {
            if (!err) {
                res.writeHead(200, { 'content-encoding': 'deflate' });
                res.end(result);
            }
        });
    } else
    if (acceptEncoding.match(/\bgzip\b/)) {
        zlib.gzip(result, function(err, result){
            if (!err) {
                res.writeHead(200, { 'content-encoding': 'gzip' });
                res.end(result);
            }
        });
    } else {
        res.writeHead(200, {});
        res.end(result);
    }
}

common.executePgQuery = function (query, callback) {
    //Just run the query
    //Setup Connection to PG
    pg.connect(global.conString, function(err, client, done) {
        if(err){
            //return an error
            callback(err);
            return;
        }

        //Log the query to the console, for debugging
        common.log("Executing query: " + query.text + (query.values && query.values.length > 0 ?  ", " + query.values : ""));

        //execute query
        client.query(query, function(err, result) {
            done();

            //go to callback
            callback(err, result);
        });
    });
}

//Utilities
common.log = function(message) {
    //Write to console
    console.log(message);
}

common.vacuumAnalyzeAll = function(){
    var query = { text: "VACUUM ANALYZE;", values: [] };
    common.executePgQuery(query, function (err, result) {
        console.log("Performed VACUUM ANALYZE on ALL;")
    });
}

//Determine if a string contains all numbers.
common.IsNumeric = function (sText) {
    var ValidChars = "0123456789";
    var IsNumber = true;
    var Char;

    sText.toString().replace(/\s+/g, '')

    for (i = 0; i < sText.length && IsNumber == true; i++) {
        Char = sText.charAt(i);
        if (ValidChars.indexOf(Char) == -1) {
            IsNumber = false;
        }
    }
    return IsNumber;
}


//Take in an array, spit out an array of escaped columns
common.escapePostGresColumns = function (items) {
    //wrap all strings in double quotes
    return items.map(function (item) {
        //remove all quotes then wrap with quotes, just to be sure
        return '"' + item.replace(/"/g, "") + '"';
    });
}

//Take in an array, spit out an array of unescaped columns
common.unEscapePostGresColumns = function (items) {
    //remove all double quotes from strings
    return items.map(function (item) {
        //remove all quotes
        return item.replace(/"/g, "");
    });
}

common.isValidSQL = function (item) {
    //if(!item || item.length == 0) return true;

    //var illegalChars = /[\<\>\;\\\/\"\'\[\]]/;

    //if (illegalChars.test(item)) {
    //    //String contains invalid characters
    //    log("invalid sql: " + item);
    //    return false;
    //} else {
    //    return true;
    //}
    return true;
    //TODO - add validation code.
}


//Take a tile bounds (along with a z) and create a bounding box for PostGIS queries.
//Tile bounds coordinates, zlevel, xmin, xmax, ymin, ymax example: 8, 44, 48, 28, 30
common.convertTileBoundsToBBoxWKT = function(bbox){
    var bboxcoords = bbox.split(',');
    var z = bboxcoords[0];
    var xmin = bboxcoords[1];
    var xmax = bboxcoords[2];
    var ymin = bboxcoords[3];
    var ymax = bboxcoords[4];

    var boundsObj = { z: z, xmin: xmin, xmax: xmax, ymin: ymin, ymax: ymax };
    var TopLeftTile = { z: z, y: ymin, x: xmin};
    var TopRightTile = { z: z, y: ymin, x: xmax};
    var BottomLeftTile = { z: z, y: ymax, x: xmin};
    var BottomRightTile = { z: z, y: ymax, x: xmax};

    //Get the upper left tile, upper right tile, lower left tile, lower right tile and convert to WGS84, then use the maxes and mins to create the bbox.
    var bboxTopLeft = mercator.xyz_to_envelope(parseInt(TopLeftTile.x), parseInt(TopLeftTile.y), parseInt(TopLeftTile.z), false, true);
    var bboxBottomRight = mercator.xyz_to_envelope(parseInt(BottomRightTile.x), parseInt(BottomRightTile.y), parseInt(BottomRightTile.z), false, true);

    //Had to reverse the indices here, they were backwards from what I thought they should be.
    var corners = { minx: bboxTopLeft[0], miny: bboxTopLeft[1], maxx: bboxBottomRight[2], maxy: bboxBottomRight[3]};
    return "POLYGON((minx miny, minx maxy, maxx maxy, maxx miny, minx miny))".split('minx').join(corners.minx).split('miny').join(corners.miny).split('maxx').join(corners.maxx).split('maxy').join(corners.maxy);
}

////Take in results object, return GeoJSON (if there is geometry)
common.formatters.geoJSONFormatter = function (rows, geom_fields_array, geom_extent_array) {
    //Take in results object, return GeoJSON
    if (!geom_fields_array || geom_fields_array.length == 0) {
        //See if the extent array is populated
        if (geom_extent_array && geom_extent_array.length > 0) {
            //If no geometry, but extent is defined, just swap out the geom field name for the extent field name
            geom_fields_array = geom_extent_array;
        } else {
            //Use a default if none else are present
            geom_fields_array = ["geom"];
        }
    }

    //Loop thru results
    var featureCollection = { "type": "FeatureCollection", "features": [] };

    rows.forEach(function (row) {

        var feature = { "type": "Feature", "properties": {} };
        //Depending on whether or not there are geometry properties, handle it.  If multiple geoms, use a GeometryCollection output for GeoJSON.

        if (geom_fields_array && geom_fields_array.length == 1) {
            //single geometry
            if (row[geom_fields_array[0]]) {
                feature.geometry = JSON.parse(row[geom_fields_array[0]]);

                //remove the geometry property from the row object so we're just left with non-spatial properties
                delete row[geom_fields_array[0]];
            }
        }
        else if (geom_fields_array && geom_fields_array.length > 1) {
            //if more than 1 geom, make a geomcollection property
            feature.geometry = { "type": "GeometryCollection", "geometries": [] };
            geom_fields_array.forEach(function (item) {
                feature.geometry.geometries.push(row[item]);
                //remove the geometry property from the row object so we're just left with non-spatial properties
                delete row[item];
            });
        }

        feature.properties = row;
        featureCollection.features.push(feature);
    })

    return featureCollection;
}

common.formatters.ESRIFeatureSetJSONFormatter = function (rows, geom_fields_array) {
    //Take in results object, return ESRI Flavor of GeoJSON
    if (!geom_fields_array) geom_fields_array = ["geom"]; //default

    //Loop thru results
    var featureSet = { "features": [], "geometryType": "" };

    rows.forEach(function (row) {
        var feature = { "attributes": {} };
        //Depending on whether or not there is geometry properties, handle it.  
        //Multiple geometry featureclasses don't exist in ESRI-land.  How to handle?  For now, just take the 1st one we come across
        //TODO:  Make user choose what they want

        if (geom_fields_array) {
            //single geometry
            if (row[geom_fields_array[0]]) {
                //manipulate to conform
                if (row[geom_fields_array[0]].type == "Polygon") featureSet.geometryType = "esriGeometryPolygon";
                else if (row[geom_fields_array[0]].type == "Point") featureSet.geometryType = "esriGeometryPoint";
                else if (row[geom_fields_array[0]].type == "Line") featureSet.geometryType = "esriGeometryLine";
                else if (row[geom_fields_array[0]].type == "Polyline") featureSet.geometryType = "esriGeometryPolyline";
                else if (row[geom_fields_array[0]].type == "MultiPolygon") featureSet.geometryType = "esriGeometryPolygon";

                //TODO - add the rest
                //TODO - support all types below
                feature.geometry = {};

                var rowGeom = JSON.parse(row[geom_fields_array[0]]);
                if (featureSet.geometryType = "esriGeometryPolygon") {
                    feature.geometry.rings = rowGeom.coordinates;
                }
                else {
                    feature.geometry = rowGeom;
                }
                //remove the geometry property from the row object so we're just left with non-spatial properties
                delete row[geom_fields_array[0]];
            }
        }


        feature.attributes = row;
        featureSet.features.push(feature);
    })

    return featureSet;
}

////Take in results object, return CSV (exclude geometry)
common.formatters.CSVFormatter = function (rows, geom_fields_array) {
    //Take in results object, return CSV
    if (!geom_fields_array) geom_fields_array = ["geom"]; //default

    //Loop thru results
    var csvArray = []; //at the end, csvArray will be joined and separated by commas to make the csv

    //Get column names
    if (rows && rows[0]) {
        Object.keys(rows[0]).forEach(function (column_name) {
            if(geom_fields_array.indexOf(column_name) == -1) csvArray.push(column_name + ","); //only add if not a geom column
        });

        //Add newline
        csvArray.push('\r\n');
    }


    rows.forEach(function (row) {
        //Depending on whether or not there is geometry properties, handle it.  If multiple geoms, use a GeometryCollection output for GeoJSON.

        for (var index in row) {
            if (geom_fields_array.indexOf(index) == -1)
                csvArray.push((row[index] || '') + ",");
        }
        //Add newline
        csvArray.push('\r\n');
    })

    return csvArray.join("");
}


common.executeSelfRESTRequest = function(table, path, postargs, callback, settings) {
    //Grab JSON from our own rest service for a table.
    var post_data = querystring.stringify(postargs);
    console.log("Post Data: " + post_data);

    var options = {
        host: settings.application.host,
        path: path.replace("{table}", table),
        port: settings.application.port,
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Length': post_data.length
        }
    };


    var post_req = http.request(options, function (res) {
        var str = [];

        res.on('error', function (err) {
            console.log("problem");
        });

        //res.setEncoding('utf8');  
        res.on('data', function (chunk) {
            str.push(chunk);
        });

        //the whole response has been recieved, so we just print it out here
        res.on('end', function () {
            console.log("ended API response");
            callback(null, JSON.parse(str));
        });
    });

    //execute
    post_req.write(post_data);
    post_req.end();
}


//Pass in an object and write out a GeoJSON File
common.writeGeoJSONFile = function (geojson, name, callback) {

    //Write out a GeoJSON file to disk - remove all whitespace
    var geoJsonOutFile = name + '.json';
    var fullPath = "." + settings.application.geoJsonOutputFolder + geoJsonOutFile;
    fs.writeFile(fullPath, JSON.stringify(geojson).replace(/\s+/g, ''), function (err) {
        if (err) {
            console.log(err.message);
        }
        else {
            console.log("created GeoJSON file.");
        }

        //pass back err, even if null
        callback(err, geoJsonOutFile, fullPath);
    });

}

module.exports = common;
