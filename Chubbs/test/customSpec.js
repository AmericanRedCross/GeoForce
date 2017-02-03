var chai = require('chai');
var testRequest = require('supertest');
var expect = require('chai').expect;
var app = require('../app');
chai.use(require('chai-things'));
var settings = require('../private/settings');
var fs = require('fs');
var path = require('path');

describe('Custom API endpoint suit', function () {

    describe('GET /services/getAdminStack', function () {
        it('should have status 200 and contain specified data structure', function (done) {

            testRequest(app)
                .post('/services/getAdminStack')
                .send({
                    "format":"GeoJSON",
                    "returnGeometry":"yes",
                    "stackid":"c87a2e99-7534-4573-b46e-071718454cf8",
                    "adminlevel":"2",
                    "datasource":"Custom"
                })
                .end(function (err, res) {
                    // Test that the endpoint exists and responds
                    expect(res).to.have.property('status', 200);

                    expect(res.body).to.have.property("type").to.equal("FeatureCollection");
                    expect(res.body).to.have.property("features").that.is.a("Array");

                    done();
                });
        });
    });

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

                    expect(res.body[0]).to.have.property("___create_arccustomlocation").to.equal("true");

                    done();
                });
        });
    });

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

                    expect(res.body[0]).to.have.property("___edit_arccustomlocation").to.equal("true");

                    done();
                });
        });
    });

});