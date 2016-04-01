var express = require('express');
var bodyParser = require('body-parser');
var _ = require('underscore');


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
	res.json(todos);
});



app.get('/todos/:id', function(req,res) {

	console.log('here');
	var todoId = parseInt(req.params.id, 10);
	var matchedTodo;

	console.log('id = '+todoId);

	matchedTodo = _.findWhere(todos, {id:todoId});

	if (matchedTodo) {
		console.log('found')
		res.json(matchedTodo);	
	} else {
		res.status(404).send();
	}
	
});


// POST

app.post('/todos', function(req,res) {

	var body = _.pick(req.body, 'description', 'completed');
	
	console.log('description' + body.description);

	if (!_.isBoolean(body.completed) || !_.isString(body.description) || body.description.trim().length == 0) {
		return res.status(400).send();
	}

		res.json(body);

		var newTodo = {
		id: todoNextId,
		description: body.description.trim(),
		completed: body.completed,
		};

		todoNextId = todoNextId + 1;

		todos.push(newTodo);
	
});

// DELETE /todos/:id
app.delete('/todos/:id', function(req,res) {

	console.log('here');
	var todoId = parseInt(req.params.id, 10);
	var matchedTodo;

	console.log('id = '+todoId);

	matchedTodo = _.findWhere(todos, {id:todoId});

	if (matchedTodo) {
		console.log('found')
		todos = _.without(todos, matchedTodo);	
		res.json(matchedTodo);
	} else {
		res.status(404).send();
	}
	
});

app.listen(PORT, function () {
	console.log('Express listening on port '+PORT);
});