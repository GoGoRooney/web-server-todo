
var cryptojs = require('crypto-js')
var jwt = require('jsonwebtoken')

module.exports =  function(mongooseModel, token) {
	return new Promise(function (resolve, reject) {
			try {

				// extract user id from jwt token and check if user exists!
				var decodedJWT = jwt.verify(token, 'qwertz098');
				var bytes = cryptojs.AES.decrypt(decodedJWT.token, 'abc123!!!');
				var tokenData = JSON.parse(bytes.toString(cryptojs.enc.Utf8));	

				mongooseModel.find( {loginName: tokenData.id}, 
				function (err, docs) {
					if (err) {
						return reject();
					} else {
						if (!docs) {
							return reject();
						}
					resolve();		
					}
				});
			} catch (e) {
				reject();
			}
		});
	}
