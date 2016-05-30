
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports =  function (schemaName) {
	return new Schema(
		{schemaName: {type: String, default: schemaName},
		workerId: Schema.Types.ObjectId,
		workerName: String,
		priceLevel: String,
		pictureUrl: String,
		workHours: [{type: Schema.Types.ObjectId, ref: 'HoursWorked'}],
		holidays: [{type: Schema.Types.ObjectId, ref: 'Holiday'}],
		calendar: [{type: Schema.Types.ObjectId, ref: 'CalendarYear'}]
		});
};
