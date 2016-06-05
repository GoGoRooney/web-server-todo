var bcrypt = require('bcrypt');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports =  function (schemaName) {

	this.newschema = new Schema(
			{schemaName: {type: String, default: schemaName},
			customerId: Schema.Types.ObjectId,
			loginName: {type: String, min:1, max:30},
			password: {type: String, min:10, max:20, set: hashPassword },
			salt: String,
			passwordHash: String,
			name: {type:String, min:1, max:255},
			telephoneNr: {type:String, min:1, max:25},
			emailAddress: {type:String, min:1, max:255}
			});

	function hashPassword(v) {
		var salt = bcrypt.genSaltSync(10);
		var hashedPwd = bcrypt.hashSync(v, salt);

		return hashedPwd;
	}

	return this.newschema;
};
