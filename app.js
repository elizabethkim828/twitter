var express = require('express');
var app = express();
var swig = require('swig');
var routes = require('./routes/');
var bodyParser = require('body-parser');
var socketio = require('socket.io');

app.use('/', bodyParser.urlencoded());
app.use('/', bodyParser.json());

//middleware
app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

//processes
app.use('/', routes(io));

app.use(express.static('public'));

var server = app.listen(3000, function () {
  console.log('server listening...');
});

var io = socketio.listen(server);


