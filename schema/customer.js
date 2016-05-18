function businessModel() {

this.urlStr='/customer';

 this.newSchema = function() {
	var mongoose = require('mongoose');
	var Schema = mongoose.Schema;
	var customerSchema = new Schema({
		customerId: Schema.Types.ObjectId,
		loginName: String,
		password: String,
		name: String,
		telephoneNr: String,
		emailAddress: String
	});

	return mongoose.model('customer', customerSchema);	
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
