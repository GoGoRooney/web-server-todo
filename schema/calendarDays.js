function businessModel() {

this.urlStr='/calendarDays';
 this.newSchema = function() {


	var mongoose = require('mongoose');

	var Schema = mongoose.Schema;
	var CalendarDays = new Schema({
		calendarDayId: Schema.Types.ObjectId,
		dayName: String,
		timeUnitsSize: String,
		timeSlots: [{type: Schema.Types.ObjectId, ref: 'TimeSlots'}]
	});

 	return mongoose.model('calendarDays',CalendarDays);
	}


this.getFunction = function(req, res, next) {
	m.find({}, function (err, docs) {
		if (err) {
			console.log(err);
		} else {
			res.json(docs);		
		}
	});
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
