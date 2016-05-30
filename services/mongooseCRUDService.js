var express = require("express");


function mongooseHandler(schemaModel) {

var mongooseModel = schemaModel;
var router = express.Router();
router.get('/', function(req,res) {

	mongooseModel.find({}, function (err, docs) {
		if (err) {
			res.status(500).send('Something broke!');
		} else {
			res.json(docs);		
		}
	})
}).post('/', function(req, res) {

	console.log('customer posting ');
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
	
console.log(newModel);

	newModel.save(function(err) {
		if (err) return console.error(err);
		res.json(newModel.toJSON());
	});

}).put('/',function(req,res) {
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
}).get("/:loginName", function(req, res) {

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

module.exports = mongooseHandler;