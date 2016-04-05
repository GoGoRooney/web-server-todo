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
	var queryParams = req.query;

	var filteredTodos = todos;

	if (queryParams.hasOwnProperty('completed') && queryParams.completed === 'true') {
		filteredTodos = _.where(filteredTodos, {completed: true});
	} else if (queryParams.hasOwnProperty('completed') && queryParams.completed === 'false') {
		filteredTodos = _.where(filteredTodos, {completed: false})
	}


	
	if (queryParams.hasOwnProperty('q') && queryParams.q.length > 0) {
		filteredTodos =_.filter(filteredTodos, function(str) { 
				return str.description.toLowerCase().indexOf(queryParams.q.toLowerCase()) != -1;
			 });
	}



	res.json(filteredTodos);
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


app.listen(PORT, function () {
	console.log('Express listening on port '+PORT);
});