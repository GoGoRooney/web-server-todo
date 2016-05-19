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


var schemas = require("./schema");
var businessPostEndPoint = new schemas.businessSchema();
var workerPostEndPoint = new schemas.workerSchema();
var businessHoursPostEndPoint = new schemas.businessHoursSchema();
var holidaysPostEndPoint = new schemas.holidaysSchema();
var reviewsPostEndPoint = new schemas.reviewsSchema();
var searchListPostEndPoint = new schemas.searchListSchema();
var timeslotsPostEndPoint = new schemas.timeslotsSchema();
var customerPostEndPoint = new schemas.customerSchema();
var calendarDaysPostEndPoint = new schemas.calendarDaysSchema();
var hoursWorkedPostEndPoint = new schemas.hoursWorkedSchema();


var allPostEndpoints = [hoursWorkedPostEndPoint, customerPostEndPoint, timeslotsPostEndPoint, searchListPostEndPoint, 
reviewsPostEndPoint, holidaysPostEndPoint, businessHoursPostEndPoint, workerPostEndPoint, businessPostEndPoint, calendarDaysPostEndPoint];




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

function checkGetUrl(element, index, array) {

	this.req = checkPostUrl.prototype.req;
	this.res = checkPostUrl.prototype.res;
	this.next = checkPostUrl.prototype.next;
	

	console.log(element.urlStr);
	console.log(element);

	if (this.req.path.indexOf(element.urlStr, this.req.path.length - element.urlStr.length) !== -1) {
		element.getFunction(this.req, this.res, this.next);
	}


}

var postEndPoints = function(req, res, next) {

	checkPostUrl.prototype.req = req;
	checkPostUrl.prototype.res = res;
	checkPostUrl.prototype.next = next;


	allPostEndpoints.forEach(checkPostUrl);

	console.log(req.path);

}

var getEndPoints = function(req, res, next) {

	checkPostUrl.prototype.req = req;
	checkPostUrl.prototype.res = res;
	checkPostUrl.prototype.next = next;


	allPostEndpoints.forEach(checkGetUrl);

	console.log(req.path);

}


app.post('/ft/post/*', [postEndPoints]);
app.get('/ft/get/*', [getEndPoints]);


app.listen(PORT, function () {
		console.log('Express listening on port '+PORT);
	});	


console.log('finished');
