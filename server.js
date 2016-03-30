var express = require('express');

var app = express();

var PORT  = process.env.PORT || 3000;

var todos = [{
	description: 'ring hairdressers',
	completed: false,
	id: 1
},
{
	description:'send cv',
	completed: false,
	id: 2
},
{
	description:'cut grass',
	completed: true,
	id: 3
}
];




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



app.listen(PORT, function () {
	console.log('Express listening on port '+PORT);
});