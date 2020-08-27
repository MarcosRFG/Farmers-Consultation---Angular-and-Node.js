'use strict';
var assert = require('assert');
var farmerSearchController = require('../controllers/getFarmerSearchController');

describe('Test Unit', function() {
    describe('# Test farmerSearchController', function() {

        it('farmerSearchController: nots search', function(done) {
            var req = {
                'query': {
                    'search': ''       
                }
            };

            var res = {
                json: function(err){ },
                status: function(responseStatus) {
                    assert.equal(responseStatus, 400);
                    return this; 
                }
            } ;           

            farmerSearchController(req, res);
            done();
        });

        it('farmerSearchController: with search by name', function(done) {
            var req = {
                'query': {
                    'search': 'Bruna'       
                }
            };

            var res = {
                json: function(err) { },
                status: function(responseStatus) {
                    assert.equal(responseStatus, 200);
                    return this; 
                }
            } ;           

            farmerSearchController(req, res);
            done();
        });

        it('farmerSearchController: with search by doc', function(done) {
            var req = {
                'query': {
                    'search': '04857230982'       
                }
            };

            var res = {
                json: function(err) { },
                status: function(responseStatus) {
                    assert.equal(responseStatus, 200);
                    return this; 
                }
            } ;           

            farmerSearchController(req, res);
            done();
        });

    });
});
