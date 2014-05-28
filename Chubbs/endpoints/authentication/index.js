//////////Authentication


//Express, Common and settings should be used by all sub-modules
var express = require('express'),
    common = require("../../common"),
    settings = require('../../settings');

//Module-specific requires:
var path = require('path'),
    fs = require("fs"),
    flow = require('flow'),
    passport = require("passport"),
	//BearerStrategy = require('passport-http-bearer').Strategy,
    ForceDotComStrategy = require('passport-forcedotcom').Strategy;
    

exports.passport = function () {

    passport.use(new ForceDotComStrategy({
        clientID: settings.salesforce.ConsumerKey,
        clientSecret: settings.salesforce.ClientSecret,
        scope: settings.salesforce.Scope,
        callbackURL: settings.salesforce.CallbackURL,
        authorizationURL: settings.salesforce.authorizationURL
    }, function verify(token, refreshToken, profile, done) {
        console.log(profile);
        return done(null, profile);
    }));

    return passport;
}
