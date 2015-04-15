//common.js is a collection of commonly used functions by the main phantasm.js and all submodules.
var common = {};
common.formatters = {};

common.respond = function (res, args) {
    //Write out a response as JSON or HTML with the appropriate arguments.  Add more formats here if desired
    if (!args.format || args.format.toLowerCase() == "html") {
        //Determine sample request based on args
        res.render(args.view, args);
    }
    else if (args.format && (args.format.toLowerCase() == "json" || args.format.toLowerCase() == "geojson" || args.format.toLowerCase() == "esrijson" || args.format.toLowerCase() == "j")) {
        //Responsd with GeoJSON (or JSON if there is no geo)

        //Respond with JSON
        res.writeHead(200, { 'content-type': 'application/json', 'Access-Control-Allow-Origin': '*' });

        if (args.errorMessage) {
            res.end(JSON.stringify({ error: args.errorMessage }));
        }
        else {
            res.end(JSON.stringify(args.featureCollection));
        }
    }
    else {
        //If unrecognized format is specified
        if (args.errorMessage) {
            res.end(JSON.stringify({ error: args.errorMessage }));
        }
        else {
            res.end(JSON.stringify(args.featureCollection));
        }
    }
}

//Log messages.  Customize if you want to send to Google Analytics or other 3rd party services.
common.log = function (msg) {
    console.log("Log: " + msg);
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


module.exports = common;
