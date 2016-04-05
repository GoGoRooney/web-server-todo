var Sequelize = require('Sequelize');
var sequelize = new Sequelize(undefined, undefined,undefined, {
	'dialect': 'sqlite',
	'storage': __dirname+'/basic-sqlite-db.sqlite'
} );


var Todo = sequelize.define('todo', {
	description: {
		type: Sequelize.STRING,
		allowNull: false,
		validate: {
			len: [1, 250]
		}
	},
	completed: {
		type: Sequelize.BOOLEAN,
		allowNull: false,
		defaultValue: false
	}


});

sequelize.sync().then(function () {
	console.log('Everything ok');

	Todo.create({
		description: 'take out trash',
		completed: false 
	}).then(function (todo) {
		Todo.create({
			description: 'Clean office'
		});
	}).then(function(x) {
		return Todo.findAll({
			where: {
				description: {
					$like: '%trash%'
				}
			}
		});
	}).then(function (todos) {
		if (todos) {
			todos.forEach(function (todo) {
				console.log(todo.toJSON());	
			});
			
		} else {
			console.log('no todo found');
		}
	}).catch(function (e) {
		console.log(e);
	});
});
