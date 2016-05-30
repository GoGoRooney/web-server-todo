var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports =  function (schemaName) {
	return new Schema(
			{schemaName: {type: String, default: schemaName},
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
			}
		);
};