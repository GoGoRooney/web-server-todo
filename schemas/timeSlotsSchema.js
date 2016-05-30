var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports =  function (schemaName) {
	return new Schema({
	startAt: Date, 
	length: Number, 
	bookingStatus: String});
};