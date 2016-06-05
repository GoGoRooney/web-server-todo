/* http://localhost:3000/ft/post/hoursWorked oder http://localhost:3000/ft/post/customer, siehe url in schema/*.js */

var mongoose = require('mongoose');
var express = require('express');
var bodyParser = require('body-parser');
var _ = require('underscore');

var Schema = mongoose.Schema;
var app = express();
var PORT  = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost/test', function(err, res) {
	if (err) {
		console.log(err);
	} else {
		console.log('connected');
	}
});

mongoose.set('debug', true);


var modelHandler = require('./dbModels.js');
var auth=require('./services/customerAuthenticate.js');
var mongooseCRUDService = require('./services/mongooseCRUDService.js');
var customerModel = {};


app.use(express.static(__dirname+'/client'));
app.use(bodyParser.json());

modelHandler('customer').then(function(model) {
	customerModel = model;
	var service = new mongooseCRUDService(model,model);
	app.use('/customer',service);
}, function() {
	console.log('** error **');
});

modelHandler('business').then(function(model) {
	app.use('/business', new mongooseCRUDService(model,model) );
}, function() {
	console.log('** error **');
});

modelHandler('worker').then(function(model) {
	app.use('/worker', new mongooseCRUDService(model,model) );
}, function() {
	console.log('** error **');
});

modelHandler('businessHours').then(function(model) {
	app.use('/businessHours', new mongooseCRUDService(model,model) );
}, function() {
	console.log('** error **');
});

modelHandler('calendarDays').then(function(model) {
	app.use('/calendarDays', new mongooseCRUDService(model,model) );
}, function() {
	console.log('** error **');
});

modelHandler('holidays').then(function(model) {
	app.use('/holidays', new mongooseCRUDService(model,model) );
}, function() {
	console.log('** error **');
});

modelHandler('hoursWorked').then(function(model) {
	app.use('/hoursWorked', new mongooseCRUDService(model,model) );
}, function() {
	console.log('** error **');
});

modelHandler('reviews').then(function(model) {
	app.use('/reviews', new mongooseCRUDService(model,model) );
}, function() {
	console.log('** error **');
});

modelHandler('searchList').then(function(model) {
	app.use('/searchList', new mongooseCRUDService(model,model) );
}, function() {
	console.log('** error **');
});


modelHandler('timeSlots').then(function(model) {
	app.use('/timeSlots', new mongooseCRUDService(model,model) );
}, function() {
	console.log('** error **');
});



// add authentication to header, all requests will be verified with this token. 
app.post('/users/login', function(req, res) {
		var body = _.pick(req.body, 'loginName', 'password');
		if (typeof body.loginName != 'string' || typeof body.password != 'string') {
				res.status(400).send();
		}
		var a = new auth(customerModel, body, body.loginName, 'String').then(
			function(token) {
				res.header('Auth', token).status(200).send();
			}, function () {
				res.status(401).send();
			}
		);
});


app.listen(PORT, function () {
		console.log('Express listening on port '+PORT);
});	
