/* http://localhost:3000/ft/post/hoursWorked oder http://localhost:3000/ft/post/customer, siehe url in schema/*.js */


var mongoose = require('mongoose');
var express = require('express');
var bodyParser = require('body-parser');
var _ = require('underscore');

var app = express();
var PORT  = process.env.PORT || 3000;

var urlStr = 'mongodb://localhost/test';
var db = mongoose.connect(urlStr, function(err, res) {
	if (err) {
		console.log(err);
	} else {
		console.log('connected');
	}
});

app.use(express.static(__dirname+'/client'));
app.use(bodyParser.json());

app.get('/', function (req,res) {
	res.send('Freietermine Api Root');
});


mongoose.set('debug', true);

var businessSchema = require('./schema/business')
var businessPostEndPoint = new businessSchema();

var workerSchema = require('./schema/worker')
var workerPostEndPoint = new workerSchema();

var businessHoursSchema = require('./schema/businessHours')
var businessHoursPostEndPoint = new businessHoursSchema();

var holidaysSchema = require('./schema/holidays')
var holidaysPostEndPoint = new holidaysSchema();

var reviewsSchema = require('./schema/reviews')
var reviewsPostEndPoint = new reviewsSchema();

var searchListSchema = require('./schema/searchlist')
var searchListPostEndPoint = new searchListSchema();

var timeslotsSchema = require('./schema/timeSlots')
var timeslotsPostEndPoint = new timeslotsSchema();

var customerSchema = require('./schema/customer')
var customerPostEndPoint = new customerSchema();

var hoursWorkedSchema = require('./schema/hoursWorked')
var hoursWorkedPostEndPoint = new hoursWorkedSchema();

var allPostEndpoints = [hoursWorkedPostEndPoint, customerPostEndPoint, timeslotsPostEndPoint, searchListPostEndPoint, 
reviewsPostEndPoint, holidaysPostEndPoint, businessHoursPostEndPoint, workerPostEndPoint, businessPostEndPoint];

function checkPostUrl(element, index, array) {

	this.req = checkPostUrl.prototype.req;
	this.res = checkPostUrl.prototype.res;
	this.next = checkPostUrl.prototype.next;
	

	console.log(element.urlStr);
	console.log(element);

	if (this.req.path.indexOf(element.urlStr, this.req.path.length - element.urlStr.length) !== -1) {
		element.postFunction(this.req, this.res, this.next);
	}


}

var postEndPoints = function(req, res, next) {

	checkPostUrl.prototype.req = req;
	checkPostUrl.prototype.res = res;
	checkPostUrl.prototype.next = next;


	allPostEndpoints.forEach(checkPostUrl);

	console.log(req.path);
/*
	if (req.path.indexOf('/business', req.path.length - 9) !== -1) {
		businessPostEndPoint.postFunction(req, res, next);
	}

	if (req.path.indexOf('/worker', req.path.length - 7) !== -1) {
		workerPostEndPoint.postFunction(req, res, next);
	}
	
	if (req.path.indexOf('/businessHours', req.path.length - 14) !== -1) {
		businessHoursPostEndPoint.postFunction(req, res, next);
	}

	if (req.path.indexOf('/holidays', req.path.length - 9) !== -1) {
		holidaysPostEndPoint.postFunction(req, res, next);
	}

	if (req.path.indexOf('/reviews', req.path.length - 8) !== -1) {
		reviewsPostEndPoint.postFunction(req, res, next);
	}

	if (req.path.indexOf('/searchlist', req.path.length - 11) !== -1) {
		searchListPostEndPoint.postFunction(req, res, next);
	}

	if (req.path.indexOf('/timeslots', req.path.length - 10) !== -1) {
		timeslotsPostEndPoint.postFunction(req, res, next);
	}

	if (req.path.indexOf('/customer', req.path.length - 9) !== -1) {
		customerPostEndPoint.postFunction(req, res, next);
	}


	if (req.path.indexOf('/hoursWorked', req.path.length - 12) !== -1) {
		hoursWorkedPostEndPoint.postFunction(req, res, next);
	}
*/
}

app.post('/ft/post/*', [postEndPoints]);


app.listen(PORT, function () {
		console.log('Express listening on port '+PORT);
	});	


console.log('finished');
