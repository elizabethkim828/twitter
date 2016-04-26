var express = require('express');
var app = express();
var swig = require('swig');

var locals = {
	title: 'An Example 2',
	subheaders: [
		{ subheader: 'test1' },
		{ subheader: 'test2' },
		{ subheader: 'test3' },
	],
    people: [
        { name: 'Gandalf'},
        { name: 'Frodo' },
        { name: 'Hermione'}
    ]
}

swig.renderFile(__dirname + '/views/index.html');

//middleware
app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

//process template
app.get('/', function (req, res) {
  	res.render( 'index', {
  		header: locals.title,
  		subheaders: locals.subheaders,
  		people: locals.people
  	});
});

app.listen(3000, function () {
  console.log('server listening...');
});