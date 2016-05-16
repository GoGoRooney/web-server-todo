
function WorkerSchema() {
	var mongoose = require('mongoose');
	var Schema = mongoose.Schema;
	var workerSchema = new Schema(
		{workerId: Schema.Types.ObjectId,
		workerName: String,
		priceLevel: String,
		pictureUrl: String,
		workHours: [{type: Schema.Types.ObjectId, ref: 'HoursWorked'}],
		holidays: [{type: Schema.Types.ObjectId, ref: 'Holiday'}],
		calendar: [{type: Schema.Types.ObjectId, ref: 'CalendarYear'}]
		});

	WorkerSchema.prototype.doCreateSchema = 
	function(workerName, priceLevel, url, callback) {
		var mongoose = require('mongoose');
		var Worker = mongoose.model('Worker', workerSchema);	
		var worker = new Worker();

		worker.workerName = workerName;
		worker.priceLevel = priceLevel;
		worker.pictureUrl = url;
		worker.save(function(err) {
			if (err) {
				return callback(err);
			}
			console.log('Created worker');
			}	
		);

 		if (typeof callback === "function") {
 			console.log('caling function------>');
			callback(null, worker);
		} else {
			console.log('callback is not a function');
		}
	};
}


module.exports = WorkerSchema;