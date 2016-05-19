function businessModel() {

this.urlStr='/business';

 this.newSchema = function() {
	var mongoose = require('mongoose');
	var Schema = mongoose.Schema;
 	var business =  new Schema(
		{schemaName: {type: String, default: 'business'},
		businessId : Schema.Types.ObjectId,
		long: Number,
		lat: Number,
		name: String, 
		street: String,
		houseNr: String,
		placeName: String,
		postCode: String,
		emailAddress: String,
		telephoneNr: String,
		alternativeTelephoneNr: String,
		openingTimes: [{type: Schema.Types.ObjectId, ref: 'businessHours'}],
		holidays: [{type: Schema.Types.ObjectId, ref: 'holidays'}],
		bookingUnits: String,
		bookingsTakenInAdvanceDays: Number,
		price: String,
		reviews: [{type: Schema.Types.ObjectId, ref: 'reviews'}],
		workers: [{type: Schema.Types.ObjectId, ref: 'worker'}]
		});
 	return mongoose.model('business',business);
 }

 var m = this.newSchema();

this.getFunction = function(req, res, next) {
	m.find({}, function (err, docs) {
		if (err) {
			console.log(err);
		} else {
			res.json(docs);		
		}
	});
}

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
