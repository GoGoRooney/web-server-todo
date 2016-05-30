/* http://localhost:3000/ft/post/hoursWorked oder http://localhost:3000/ft/post/customer, siehe url in schema/*.js */


var mongoose = require('mongoose');
var express = require('express');
var bodyParser = require('body-parser');
var _ = require('underscore');
var Schema = mongoose.Schema;


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

var maker = require('./services/mongooseModelBuilder'); 
var newSchemas = require("./schemas");
var mongooseCRUDService = require('./services/mongooseCRUDService'); 

mongoose.set('debug', true);

var mongooseModelBuilder = new maker('business', new newSchemas.businessSchema('business'));
var mongooseModel = mongooseModelBuilder.make();
app.use('/business', new mongooseCRUDService(mongooseModel));

mongooseModelBuilder = new maker('customer', new newSchemas.customerSchema('customer'));
mongooseModel = mongooseModelBuilder.make();
app.use('/customer', new mongooseCRUDService(mongooseModel));

mongooseModelBuilder = new maker('worker', new newSchemas.workerSchema('worker'));
mongooseModel = mongooseModelBuilder.make();
app.use('/worker',  new mongooseCRUDService(mongooseModel));

mongooseModelBuilder = new maker('businessHours', new newSchemas.businessHoursSchema('businessHours'));
mongooseModel = mongooseModelBuilder.make();
app.use('/businessHours', new mongooseCRUDService(mongooseModel));

mongooseModelBuilder = new maker('calendarDays', new newSchemas.calendarDaysSchema('calendarDays'));
mongooseModel = mongooseModelBuilder.make();
app.use('/calendarDays', new mongooseCRUDService(mongooseModel));

mongooseModelBuilder = new maker('holidays', new newSchemas.holidaysSchema('holidays'));
mongooseModel = mongooseModelBuilder.make();
app.use('/holidays', new mongooseCRUDService(mongooseModel));

mongooseModelBuilder = new maker('hoursWorked', new newSchemas.hoursWorkedSchema('hoursWorked'));
mongooseModel = mongooseModelBuilder.make();
app.use('/hoursWorked', new mongooseCRUDService(mongooseModel));

mongooseModelBuilder = new maker('reviews', new newSchemas.reviewsSchema('reviews'));
mongooseModel = mongooseModelBuilder.make();
app.use('/reviews',  new mongooseCRUDService(mongooseModel));

mongooseModelBuilder = new maker('searchList', new newSchemas.searchListSchema('searchList'));
mongooseModel = mongooseModelBuilder.make();
app.use('/searchList', new mongooseCRUDService(mongooseModel));

mongooseModelBuilder = new maker('timeSlots', new newSchemas.timeSlotsSchema('timeSlots'));
mongooseModel = mongooseModelBuilder.make();
app.use('/timeSlots',  new mongooseCRUDService(mongooseModel));


app.listen(PORT, function () {
		console.log('Express listening on port '+PORT);
	});	


console.log('finished');
