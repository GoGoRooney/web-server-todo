function workerModel() {

this.urlStr='/worker';
	this.newSchema = function() {

	var mongoose = require('mongoose');
	var Schema = mongoose.Schema;
	var workerSchema = new Schema(
		{workerId: Schema.Types.ObjectId,
		workerName: String,
		priceLevel: String,
		pictureUrl: String,
		workHours: [{type: Schema.Types.ObjectId, ref: 'HoursWorked'}],
		holidays: [{type: Schema.Types.ObjectId, ref: 'Holiday'}],
		calendar: [{type: Schema.Types.ObjectId, ref: 'CalendarYear'}]
		});

		return mongoose.model('worker', workerSchema);	
	}

this.postFunction = function(req, res, next) {
 	
	var _ = require('underscore');
	var m = this.newSchema();
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
};


module.exports = workerModel;