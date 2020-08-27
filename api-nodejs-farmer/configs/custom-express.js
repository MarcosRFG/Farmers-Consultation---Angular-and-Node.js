var express = require('express');
var bodyParser = require('body-parser');
var expressVlidator = require('express-validator');
var cors = require('cors');

module.exports = function(){
    var app = express();
    
    app.use(cors());
    app.use(bodyParser.urlencoded({extended : true}));
    app.use(bodyParser.json());
    app.use(expressVlidator());

    return app;
}
