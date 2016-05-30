var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports =  function (schemaName) {
	return new Schema(
			{schemaName: {type: String, default: schemaName},
			customerId: Schema.Types.ObjectId,
			loginName: String,
			password: String,
			salt: String,
			passwordHash: String,
			name: String,
			telephoneNr: String,
			emailAddress: String
			});
};