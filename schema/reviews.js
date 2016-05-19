function businessModel() {


this.urlStr='/reviews';
 this.newSchema = function() {

	var mongoose = require('mongoose');
	var Schema = mongoose.Schema;

	var ReviewsSchema = new Schema(
	{ body: String,
		date: Date }
	);
return mongoose.model('reviews', ReviewsSchema);	
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