var express = require('express');
var bodyParser = require('body-parser');
var _ = require('underscore');
var db = require('./db.js')

var app = express();



var PORT  = process.env.PORT || 3000;


var todos = [];

var todoNextId = 1;

app.use(bodyParser.json());


app.get('/', function (req,res) {
	res.send('Todo Api Root');

});


// GET /todos
app.get('/todos', function(req,res) {
	var query = req.query;
	var where = {};

	if (query.hasOwnProperty('completed') && query.completed === 'true') {
		where.completed = true;
	} else if (query.hasOwnProperty('completed') && query.completed === 'false') {
		where.completed = false;
	}
	
	if (query.hasOwnProperty('q') && query.q.length > 0) {
		where.description = {
			$like: '%' + query.q + '%'
		};
	}

	db.todo.findAll({where: where}).then (function(todos) {
		res.json(todos);
	}, function (e) {
		 res.status(500).send();
	});

});



app.get('/todos/:id', function(req,res) {
	var todoId = parseInt(req.params.id, 10);


	console.log('looking for '+todoId);
	db.todo.findById(todoId).then (function (todo) {
			if (!!todo) {
				res.json(todo.toJSON());
			} else {
				res.status(404).send();
			}
	}, function (e) {
		res.status(500).send();
	});

});


// POST

app.post('/todos', function(req,res) {

	var body = _.pick(req.body, 'description', 'completed');
	
	console.log('description' + body.description);

	db.todo.create(body).then(function(todo) {
		res.json(todo.toJSON());
	}, function (error) {
		res.status(400).json(error);
	});
});

// DELETE /todos/:id
app.delete('/todos/:id', function(req,res) {
	
	var todoId = parseInt(req.params.id, 10);

	console.log('looking for '+todoId);
	db.todo.destroy({
			where: { 
					id: todoId
				} 
			}).then(function (norows) {
				if (norows === 0) {
					res.status(404).json({ error: 'no todo with id '});
				} else {
					res.status(204).send();
				}
	}, function (e) {
		res.status(500).send();
	});

	
});

// PUT /todos/:id
app.put('/todos/:id', function(req,res) {
	var todoId = parseInt(req.params.id, 10);
	
	var body = _.pick(req.body, 'description', 'completed');
	var validAttribute = {};

	console.log('description' + body.description);


	var matchedTodo = _.findWhere(todos, {id:todoId});
	if (!matchedTodo) {
		return res.status(404).send();
	}
	console.log('found');


	if (body.hasOwnProperty('completed') && _.isBoolean(body.completed)) {
		validAttribute.completed=body.completed;
	} else if (body.hasOwnProperty('completed')) {
		return res.status(400).send();
	} else {
		// nop
	}

	console.log('found 2');

	if (body.hasOwnProperty('description') && _.isString(body.description)) {
		validAttribute.description=body.description;
	} else if (body.hasOwnProperty('description')) {
		return res.status(400).send();
	} else {
		// nop
	}

	console.log('found 3');

	_.extend(matchedTodo, validAttribute);

	res.json(matchedTodo);
	
});

// 
db.sequelize.sync().then(function () {
	app.listen(PORT, function () {
		console.log('Express listening on port '+PORT);
	});	
});
