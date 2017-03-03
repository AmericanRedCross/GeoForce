var chai = require('chai');
var testRequest = require('supertest');
var expect = require('chai').expect;
var app = require('../app');
chai.use(require('chai-things'));
var settings = require('../private/settings');
var fs = require('fs');
var path = require('path');

describe('Custom API endpoint suit', function () {

    // create custom location
    describe('POST /services/customLocation', function () {
        it('should have status 200 and contain specified data structure', function (done) {

            testRequest(app)
                .post('/services/customLocation')
                .send({
                    "ecos_id": "ECOSAPITEST12345",
                    "wkt": "POINT(-122.38846778869627 47.669144446476174)",
                    "name": "API test Location"
                })
                .end(function (err, res) {
                    // Test that the endpoint exists and responds
                    expect(res).to.have.property('status', 200);

                    expect(res.body).to.have.property("features").to.be.an("array");

                    done();
                });
        });
    });

    // edit an existing custom location
    describe('PATCH /services/customLocation', function () {
        it('should have status 200 and contain specified data structure', function (done) {

            testRequest(app)
                .patch('/services/customLocation')
                .send({
                    "id": 1,
                    "ecos_id": "ECOSWEBTEST12345",
                    "wkt": "POINT(-122.4338869627 47.1244446476174)",
                    "name": "Web Test Location"
                })
                .end(function (err, res) {
                    // Test that the endpoint exists and responds
                    expect(res).to.have.property('status', 200);

                    expect(res.body).to.have.property("features").to.be.an("array");
                    expect(res.body.features[0]).to.be.an("object");
                    expect(res.body.features[0]).to.have.property("properties");
                    expect(res.body.features[0].properties).to.have.property("name").to.equal("Web Test Location");
                    expect(res.body.features[0].properties).to.have.property("ecos_id").to.equal("ECOSWEBTEST12345");

                    done();
                });
        });
    });

    // get a custom locations admin stack
    describe('GET /services/getAdminStack', function () {
        it('should have status 200 and contain specified data structure', function (done) {

            testRequest(app)
                .post('/services/getAdminStack')
                .send({
                    "format":"GeoJSON",
                    "returnGeometry":"yes",
                    "stackid":"b2d7e54a-ecfd-42c3-bd31-524b585adffe",
                    "adminlevel":"2",
                    "datasource":"Custom",
                    "customid": 1
                })
                .end(function (err, res) {
                    // Test that the endpoint exists and responds
                    expect(res).to.have.property('status', 200);

                    expect(res.body).to.have.property("type").to.equal("FeatureCollection");
                    expect(res.body).to.have.property("features").that.is.a("Array");
                    expect(res.body.features[0]).to.be.an("object");
                    expect(res.body.features[0]).to.have.property("properties");
                    expect(res.body.features[0].properties).to.have.property("name").to.equal("Web Test Location");

                    done();
                });
        });
    });

    // get a gadm locations admin stack
    describe('GET /services/getAdminStack', function () {
        it('should have status 200 and contain specified data structure', function (done) {

            testRequest(app)
                .post('/services/getAdminStack')
                .send({
                    "format":"GeoJSON",
                    "returnGeometry":"yes",
                    "featureid":"abb0d7cb-aa9a-402d-9b54-3cb5ebb3f4f7"
                })
                .end(function (err, res) {
                    // Test that the endpoint exists and responds
                    expect(res).to.have.property('status', 200);

                    expect(res.body).to.have.property("type").to.equal("FeatureCollection");
                    expect(res.body).to.have.property("features").that.is.a("Array");
                    expect(res.body.features[0]).to.be.an("object");
                    expect(res.body.features[0]).to.have.property("properties");
                    expect(res.body.features[0].properties).to.have.property("adm0_name").to.equal("Cayman Islands");
                    expect(res.body.features[0].properties).to.have.property("adm0_code").to.equal(44);
                    expect(res.body.features[0].properties).to.have.property("source").to.equal("GADM");

                    done();
                });
        });
    });

    // get custom locations search result
    describe('GET /services/nameSearch', function () {
        it('should have status 200 and contain specified data structure', function (done) {

            testRequest(app)
                .post('/services/nameSearch')
                .send({
                    "searchterm":"web test",
                    "format":"GeoJSON",
                    "returnGeometry":"no"
                })
                .end(function (err, res) {
                    // Test that the endpoint exists and responds
                    expect(res).to.have.property('status', 200);

                    expect(res.body).to.have.property("type").to.equal("FeatureCollection");
                    expect(res.body).to.have.property("features").that.is.a("Array");
                    expect(res.body.features[0]).to.be.an("object");
                    expect(res.body.features[0]).to.have.property("properties");
                    expect(res.body.features[0].properties).to.have.property("source").to.equal("Custom");
                    expect(res.body.features[0].properties).to.have.property("name").to.equal("Web Test Location");
                    expect(res.body.features[0].properties).to.have.property("country").to.equal("United States");
                    // custom location must be admin level 8
                    expect(res.body.features[0].properties).to.have.property("level").to.equal("8");

                    done();
                });
        });
    });

    // get search query with combined GADM & Geoname result
    describe('GET /services/nameSearch', function () {
        it('should have status 200 and contain specified data structure', function (done) {

            testRequest(app)
                .post('/services/nameSearch')
                .send({
                    "searchterm":"cayman island",
                    "format":"GeoJSON",
                    "returnGeometry":"no"
                })
                .end(function (err, res) {
                    // Test that the endpoint exists and responds
                    expect(res).to.have.property('status', 200);

                    expect(res.body).to.have.property("type").to.equal("FeatureCollection");
                    expect(res.body).to.have.property("features").that.is.a("Array");
                    expect(res.body).to.have.property("features").to.have.length.above(1);

                    // get all sources
                    var sources = res.body.features.map(function(d){ return d.properties.source});

                    // make sure response has both GADM and Geonames results
                    expect(sources.indexOf("GADM")).to.be.a("number").to.be.above(-1);
                    expect(sources.indexOf("Geonames")).to.be.a("number").to.be.above(-1);

                    done();
                });
        });
    });
});
