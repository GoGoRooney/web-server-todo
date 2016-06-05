var cryptojs = require('crypto-js')
var jwt = require('jsonwebtoken')
var bcrypt = require('bcrypt');

module.exports =  function(mongooseModel, body, id, type) {
	return new Promise(function (resolve, reject) {

		// login, check user exists and passwords match
		mongooseModel.find({loginName: body.loginName }, function (err, docs) {
			if (err) {
				return reject();
			} else {
				if (!docs) {
					return reject();
				}

				if (!bcrypt.compareSync(body.password, docs[0].password)) {
					return reject();
				}

				try {
					var stringData = JSON.stringify({ id:id, type:type });

					var encryptedData = cryptojs.AES.encrypt(stringData, 'abc123!!!').toString();
					
					var token = jwt.sign({
							token: encryptedData
						}, 'qwertz098');

					resolve(token);
				} catch (e) {
					console.log(e);

					return reject();
				}
			}	
		})
	})
}
