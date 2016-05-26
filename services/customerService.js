var express = require("express");
var router = express.Router();
var customerSchema = require("../schema/customerSchema");
var customerMongoosModel = new customerSchema();



router.get('/', function(req,res) {
	customerMongoosModel.find({}, function (err, docs) {
		if (err) {
			res.status(500).send('Something broke!');
		} else {
			res.json(docs);		
		}
	})
}).post('/', function(req, res) {

	console.log('customer posting ');
	var _ = require('underscore');

	var newModel = new customerMongoosModel();

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
	
console.log(newModel);

	newModel.save(function(err) {
		if (err) return console.error(err);
		res.json(newModel.toJSON());
	});

}).put('/',function(req,res) {
	var _ = require('underscore');
	
	var fields = [];
	fields = Object.keys(customerMongoosModel.schema.paths);

	var body = _.pick(req.body, fields);
	fields.forEach(function(field){
		if (typeof body[field] === 'undefined') {
			// nop
		} else {
			customerMongoosModel[field] = body[field];
		}
	});
	
	customerMongoosModel.save(function(err) {
		if (err) return console.error(err);
		res.json(customerMongoosModel.toJSON());
	});
}).get("/:loginName", function(req, res) {

	console.log('loginname...');

	var customerId = req.params.loginName;
	customerMongoosModel.find({"loginName": customerId}, function (err, docs) {
		if (err) {
			res.status(500).send('Something broke!');
		} else {
			res.json(docs);		
		}
	})
});

module.exports = router;