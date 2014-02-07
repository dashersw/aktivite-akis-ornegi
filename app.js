
/**
 * Module dependencies.
 */

var express = require('express');
var index = require('./routes/index');
var http = require('http');
var path = require('path');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.use(express.logger('dev'));
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', index.index);
app.get('/activity', index.activity);

http.createServer(app).listen(3000, function(){
  console.log('Express server listening on port 3000');
});
