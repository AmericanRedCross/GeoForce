//////////Print (from phantasm repository - https://github.com/apollolm/phantasm)

//Common and settings should be used by all sub-modules
var express = require('express'),
    common = require("../../common"),
    settings = require('../../private/settings'),
    request = require('request'),
    http = require('http'),
    path = require('path'),
    flow = require('flow'),
    shortId = require('shortid'),
    phantom = require('phantom');


exports.app = function () {
    var app = express();

    app.set('views', __dirname + '/views');
    app.set('view engine', 'jade');

    app.all('/print', exportImage);

    app.use("/output", express.static(path.join(__dirname, 'public/output')));


    return app;
}

var exportImage = flow.define(
  function (req, res) {

      this.req = req;
      this.res = res;
      this.args = {};

      //Grab POST or QueryString args depending on type
      if (this.req.method.toLowerCase() == "post") {
          //If a post, then arguments will be members of the this.req.body property
          this.args = this.req.body;
      }
      else if (this.req.method.toLowerCase() == "get") {
          //If request is a get, then args will be members of the this.req.query property
          this.args = this.req.query;
      }


      if (JSON.stringify(this.args) != '{}') {

          //check for required parameters
          if(!this.args.url){
              this.args.errorMessage = "Need to supply a url.";

              //Abort
              common.respond(this.req, this.res, this.args);
              return;
          }


          //Which view to render in jade
          this.args.view = "print";

          //Set defaults for parameters.
          this.args.format = this.args.format || "html";
          this.args.imageformat = this.args.imageformat || "png";
          this.args.viewportheight = this.args.viewportheight || 800;
          this.args.viewportwidth = this.args.viewportwidth || 1200;
          this.args.delay = this.args.delay || 1000; //ms

          //DO IT
          common.log("Creating Phantom Instance...");

          phantom.create(this, {parameters:{'ignore-ssl-errors':'yes'}}); //flow to next function
      }
      else {
          this.args.view = "print";

          //Render Query Form without any results.
          common.respond(this.req, this.res, this.args);
      }
  },
  function (ph) {

      //coming from phantom.create
      common.log("Creating Page Object...");
      this.ph = ph;
      return ph.createPage(this); //flow to next function
  },
  function (page) {
      //set size
      this.page = page;
      common.log("Setting Page size...");
      this.page.set('viewportSize', { width: this.args.viewportwidth, height: this.args.viewportheight }, this); //flow to next function
  },
  function (err) {
      this.resources = [];//Set up an array to hold all outgoing requests

      var resources = this.resources;

      //Setup Resource Listeners
      this.page.onResourceRequested = function (request) {
          resources[request.id] = request.stage;
          common.log("outgoing request sent.");
      };

      //When a resource has been recieved, remove it from the list
      this.page.onResourceReceived = function (request) {
          resources[request.id] = request.stage;
          common.log("outgoing response recieved.");
      };

      common.log("Opening Page...");
      return this.page.open(this.args.url, this);
  },
  function (status) {
      common.log("Opened Page...");
      //Let page render before continuing

      this.page.onConsoleMessage = function (msg) {
          console.log(msg);
      };

      return this.page.evaluate(function (args) {

          //console.log("Codeblock: " + args.codeblock);
          console.log("Evaluating js...");
          if (args.selector) console.log("selector: " + args.selector);
          // console.log("args: " + args);
          var result = {};

          //Execute any pre-rendering javascript here
          if (args.codeblock) {
              console.log("About to execute pre-render logic.");
              var preFunk;
              try {
                  preFunk = (new Function("return function() {" + args.codeblock + "};"))();
                  preFunk();
              } catch (e) {
                  console.log("error executing code block: " + e.message);
              }
              console.log("Executed pre-render logic.");
          }

          if (args.selector) {
              console.log("Getting clip extent");

              var clipRect = document.querySelector(args.selector).getBoundingClientRect();
              console.log(clipRect);
              result.clipRect = clipRect;
              return result;
          }
          else {
              return result;
          }

      }, this, { codeblock: this.args.codeblock, selector: this.args.selector }); //arguments to be passed to page.evaluate
  },
  function (err, result) {
      //Callback for page.evaluate
      //this is being called too quickly.  add delay
      this.clipResult = result; //if user is clipping, then store the info here.

      var resources = this.resources; //copy for closure
      var flo = this;

      setTimeout(function () {

          common.log("about to synch outgoing and incoming requests.");

          //Keep an eye on all of the outgoing resource requests.
          //When they all are complete, then move on.
          waitFor(function () {
                // See if all outgoing requests have completed
                for (var i = 1; i < resources.length; ++i) {
                    common.log(resources[i]);
                    if (!resources[i] || resources[i] != 'end') {
                        common.log("outgoing requests still pending.");
                        return false;
                    }
                }
                common.log("outgoing requests all complete, moving on.");
                return true;
            },
            flo, //when done, go to next flow
            50000); //The Timeout milliseconds.  After this, give up and move on


      }, 1000); //Built in delay to let the execution block have a chance to send out requests.


  },
  function (status) {
      //Callback for when all initial pageload resource requests have ended.
      var flo = this;
      this.outputURL = this.req.protocol + "://" + this.req.get('host') + "/output/";
      this.filename = 'phantomoutput' + shortId.generate() + '.' + this.args.imageformat;

      setTimeout(function () {
          if (this.clipResult && this.clipResult.clipRect) {
              //Clip
              this.page.set('clipRect', { width: this.clipResult.clipRect.width, height: this.clipResult.clipRect.height, top: this.clipResult.clipRect.top, left: this.clipResult.clipRect.left }, this);
          }
          else {
              //Don't clip
              common.log("about to render page:");
              flo(); //just flow
          }
      }, this.args.delay); //wait before rendering.
  },
  function (err) {
      return this.page.render('public/output/' + this.filename, this);
  },
  function () {
      common.log('Page Rendered.');

      this.ph.exit();
      //Render
      this.args.imageLink = this.filename;
      this.args.featureCollection = { image: this.outputURL + this.filename };

      common.respond(this.req, this.res, this.args);
  }
)



/**
 * See https://github.com/ariya/phantomjs/blob/master/examples/waitfor.js
 *
 * Wait until the test condition is true or a timeout occurs. Useful for waiting
 * on a server response or for a ui change (fadeIn, etc.) to occur.
 *
 * @param testFx javascript condition that evaluates to a boolean,
 * it can be passed in as a string (e.g.: "1 == 1" or "$('#bar').is(':visible')" or
 * as a callback function.
 * @param onReady what to do when testFx condition is fulfilled,
 * it can be passed in as a string (e.g.: "1 == 1" or "$('#bar').is(':visible')" or
 * as a callback function.
 * @param timeOutMillis the max amount of time to wait. If not specified, 3 sec is used.
 */
function waitFor(testFx, onReady, timeOutMillis) {
    var maxtimeOutMillis = timeOutMillis ? timeOutMillis : 3000, //< Default Max Timout is 3s
      start = new Date().getTime(),
      condition = (typeof (testFx) === "string" ? eval(testFx) : testFx()), //< defensive code
      interval = setInterval(function () {
          if ((new Date().getTime() - start < maxtimeOutMillis) && !condition) {
              // If not time-out yet and condition not yet fulfilled
              condition = (typeof (testFx) === "string" ? eval(testFx) : testFx()); //< defensive code
          } else {
              if (!condition) {
                  // If condition still not fulfilled (timeout but condition is 'false')
                  console.log("'waitFor()' timeout");
                  typeof (onReady) === "string" ? eval(onReady) : onReady('timeout'); //< Do what it's supposed to do once the condition is fulfilled
                  clearInterval(interval); //< Stop this interval
                  //ph.exit(1);
              } else {
                  // Condition fulfilled (timeout and/or condition is 'true')
                  console.log("'waitFor()' finished in " + (new Date().getTime() - start) + "ms.");
                  typeof (onReady) === "string" ? eval(onReady) : onReady('success'); //< Do what it's supposed to do once the condition is fulfilled
                  clearInterval(interval); //< Stop this interval
              }
          }
      }, 250); //< repeat check every 250ms
};
