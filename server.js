var express = require('express');
var path    = require('path');
var app     = express();


app.use(express.static(path.join(__dirname, '/public')));


var server = app.listen(3007, function() {

	var host = server.address().address;
	var port = server.address().port;

	console.log('App listening at http://%s:%s', host, port);

});