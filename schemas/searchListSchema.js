
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports =  function (schemaName) {
	return new Schema({
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
};