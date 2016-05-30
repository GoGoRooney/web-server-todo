
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports =  function (schemaName) {
	return new Schema(
	{ body: String,
		date: Date }
	);
};