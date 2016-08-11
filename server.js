var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var request = require('request-json');
var client = request.createClient('http://localhost:8080/');
	client.headers['Accept'] = 'application/json';

app.use(express.static(__dirname + '/public'));                 
app.use(bodyParser.urlencoded({'extended':'true'}));            
app.use(bodyParser.json());                                     
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 

app.listen(8080);
	console.log("App listening on port 8080");

app.get('/', function (req, res) {
	res.sendFile(__dirname + '/public/index.html'); 
});