
function businessModel() {

this.urlStr='/businessHours';

 this.newSchema = function() {
	var mongoose = require('mongoose');
	var Schema = mongoose.Schema;


	var businessHoursSchema = new Schema(
		{dayName: String,
		whenOpen:  Date,
		whenEndMorning: Date,
		whenStartAfternoon: Date,
		whenClose: Date	});

	 return mongoose.model('businessHours',businessHoursSchema);
	}
	
var m = this.newSchema();

this.postFunction = function(req, res, next) {
 	
	var _ = require('underscore');
	
	
	var model = new m();

	var fields = [];
	fields = Object.keys(model.schema.paths);

	var body = _.pick(req.body, fields);
	fields.forEach(function(field){
		if (typeof body[field] === 'undefined') {
			// nop
		} else {
			model[field] = body[field];
		}
	});
	
	model.save(function(err) {
		if (err) return console.error(err);
		res.json(model.toJSON());
	});
 }

}

module.exports = businessModel;
