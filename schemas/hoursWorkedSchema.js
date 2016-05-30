
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports =  function (schemaName) {
	return new Schema({
		dayName: String,
		whenStartMoring:  Date,
		whenEndMorning: Date,
		whenStartAfternoon: Date,
		whenEnd: Date }
		);
};