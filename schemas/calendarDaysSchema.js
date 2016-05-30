var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports =  function (schemaName) {
	return new Schema({
		calendarDayId: Schema.Types.ObjectId,
		dayName: String,
		timeUnitsSize: String,
		timeSlots: [{type: Schema.Types.ObjectId, ref: 'TimeSlots'}]
	});
}