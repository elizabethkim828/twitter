var express = require('express');
var app = express();
var swig = require('swig');
var routes = require('./routes/');
var bodyParser = require('body-parser');

app.use('/', bodyParser.urlencoded());
app.use('/', bodyParser.json());

//middleware
app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

//processes
app.use('/', routes);

app.use(express.static('public'));

app.listen(3000, function () {
  console.log('server listening...');
});



