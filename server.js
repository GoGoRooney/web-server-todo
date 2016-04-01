var express = require('express');
var bodyParser = require('body-parser');
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

	todos.forEach(function (todo) {
		if (todo.id === todoId) {
			matchedTodo = todo;		
		}
	});

	if (matchedTodo) {
		console.log('found')
		res.json(matchedTodo);	
	} else {
		res.status(404).send();
	}
	
});


// POST

app.post('/todos', function(req,res) {
	var body = req.body;

	console.log('description' + body.description);

	res.json(body);

	var newTodo = {
		id: todoNextId,
		description: body.description,
		completed: body.completed,
	};

	todoNextId = todoNextId + 1;

	todos.push(newTodo);

});


app.listen(PORT, function () {
	console.log('Express listening on port '+PORT);
});