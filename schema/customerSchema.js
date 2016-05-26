function customerSchema() {
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

module.exports = customerSchema;
