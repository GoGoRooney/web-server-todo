function businessModel() {

this.urlStr='/searchList';

 this.newSchema = function() {

	var mongoose = require('mongoose');
	var Schema = mongoose.Schema;
	
	var SearchListSchema = new Schema({
		availableDate: Date,
		lengthTime: Date,
		latitude: Number,
		longitude: Number,
		priceLevel: String,
		businessType: String,
		businessId: [{type: Schema.Types.ObjectId, ref: 'business'}],
		workerId: [{type: Schema.Types.ObjectId, ref: 'worker'}],
		bookedByUser: [{type: Schema.Types.ObjectId, ref: 'worker'}]
	});

	return mongoose.model('searchList', SearchListSchema);	
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
