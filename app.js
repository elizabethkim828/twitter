var express = require('express');
var app = express();
var swig = require('swig');

var locals = {
	title: 'An Example',
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
  		title: locals.title,
  		people: locals.people
  	});
});

app.listen(3000, function () {
  console.log('server listening...');
});