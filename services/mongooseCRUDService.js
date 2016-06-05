var express = require("express");
var jwt = require('jsonwebtoken');
var mongoose = require('mongoose');
var requestAuth = require('./customerAuthorisation.js');
var customerSchema = require('../schemas/customerSchema.js');
var loginModel = {};

function mongooseHandler(schemaModel, mModel) {

	var mongooseModel = schemaModel;
	var router = express.Router();
	loginModel = mModel;

	router.get('/', requireAuthentication, function(req,res) {

	mongooseModel.find({}, function (err, docs) {
		if (err) {
			res.status(500).send('Something broke!');
		} else {
			res.json(docs);
		}
	})
}).post('/',requireAuthentication, function(req, res) {

	var _ = require('underscore');

	var newModel = new mongooseModel();

	var fields = [];
	fields = Object.keys(newModel.schema.paths);

	var body = _.pick(req.body, fields);
	fields.forEach(function(field){
		if (typeof body[field] === 'undefined') {
			// nop
		} else {
			newModel[field] = body[field];
		}
	});
	
	newModel.save(function(err) {
		if (err) return console.error(err);
		res.json(newModel.toJSON());
	});

}).put('/',requireAuthentication,function(req,res) {
	var _ = require('underscore');
	
	var fields = [];
	fields = Object.keys(mongooseModel.schema.paths);

	var body = _.pick(req.body, fields);
	fields.forEach(function(field){
		if (typeof body[field] === 'undefined') {
			// nop
		} else {
			mongooseModel[field] = body[field];
		}
	});
	
	mongooseModel.save(function(err) {
		if (err) return console.error(err);
		res.json(mongooseModel.toJSON());
	});
}).get("/:loginName",requireAuthentication,function(req, res) {

	console.log('loginname...');

	var customerId = req.params.loginName;
	mongooseModel.find({"loginName": customerId}, function (err, docs) {
		if (err) {
			res.status(500).send('Something broke!');
		} else {
			res.json(docs);		
		}
		})
	});

	return router;
};

var requireAuthentication = function(req, res, next) {
	var token = req.get('Auth');
	var a = requestAuth(loginModel, token).then(
		function(a) {
			next();
		}, function() {
			res.status(401).send();
		}
	);
}

module.exports = mongooseHandler;