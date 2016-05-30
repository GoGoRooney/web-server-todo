function modelMaker(name,schema) {

	var mongoose = require('mongoose');

	this.name = name;
	this.schema = schema;

	this.make = function modelMaker() {
		return mongoose.model(this.name, this.schema);	
	}
}


module.exports = modelMaker;