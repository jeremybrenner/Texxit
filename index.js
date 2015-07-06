var express = require('express');
var restler = require('restler');

var app = express();

app.all('/', function(req,res) {
	restler.get('http://reddit.com/.json').on('complete', function(reddit){
		var titles = "<Response>";
		for( var i = 0; i < 5; i++) {
			titles += "<Sms>"+reddit.data.children[i].data.title+"</Sms>"
		}
		titles += "</Response>";
		res.send(titles);
	});
});

// port 4000 tunnel created with ngrok
app.listen(4000, function(){
	console.log("Make it so")
});