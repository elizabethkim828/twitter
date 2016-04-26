"does this work?"


var express = require('express');
var app = express();
var morgan = require('morgan');

app.use('/', function (request, response, next) {
  console.log(request.method + 1234);
  console.log(request.url);
  next();
});

app.use(morgan('combined'));

app.get('/', function (request, response, next) {
  response.send('Hello World!');
});

app.get('/news', function (request, response, next) {
  response.send('Hello News!');
});

app.post('/modernism', function (request, response, next) {
  response.send('Hello News!');
});

app.listen(3000, function () {
  console.log('server listening...');
});