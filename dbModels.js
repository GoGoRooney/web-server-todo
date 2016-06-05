

var maker = require('./services/mongooseModelBuilder'); 
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var businessSchema = require('./schemas/businessSchema');
var customerSchema = require('./schemas/customerSchema');
var workerSchema = require('./schemas/workerSchema');
var businessHoursSchema = require('./schemas/businessHoursSchema');
var calendarDaysSchema = require('./schemas/calendarDaysSchema');
var holidaysSchema = require('./schemas/holidaysSchema');
var hoursWorkedSchema = require('./schemas/hoursWorkedSchema');
var reviewsSchema = require('./schemas/reviewsSchema');
var searchListSchema = require('./schemas/searchListSchema');
var timeSlotsSchema = require('./schemas/timeSlotsSchema');

var schemas = {"customer": new customerSchema('customer'),
				"business": new businessSchema('business'),
				"worker":  new workerSchema('worker'),
				"businessHours": new businessHoursSchema('businessHours'),
				"calendarDays": new calendarDaysSchema('calendarDays'),
				"holidays": new holidaysSchema('holidays'),
				"hoursWorked": new hoursWorkedSchema('hoursWorked'),
				"reviews": new reviewsSchema('reviews'),
				"searchList": new searchListSchema('searchList'),
				"timeSlots": new timeSlotsSchema('timeSlots')};
		

var schemaModels = new Object();				

function findSchema(schemaName) {
	mongooseModelBuilder = new maker(schemaName, schemas[schemaName]);
	model = mongooseModelBuilder.make();

	return model;
}

function initModel(schemaName) {

	console.log(schemaName);
	return new Promise(function (resolve, reject) {
		// schema exists
		var requiredSchema = findSchema(schemaName);	
		console.log('requiredSchema '+requiredSchema);
		if ('undefined' === requiredSchema) {
			reject();
		}
		resolve(requiredSchema);

	});
}


function findMongooseModel(modelName) {
	return findSchema(modelName);
}


module.exports = initModel, findMongooseModel;
