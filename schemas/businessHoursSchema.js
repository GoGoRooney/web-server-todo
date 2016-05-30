
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports =  function (schemaName) {
	return new Schema(
		{schemaName: {type: String, default: schemaName},
		dayName: String,
		whenOpen:  Date,
		whenEndMorning: Date,
		whenStartAfternoon: Date,
		whenClose: Date	
		});
};	
