    var app = require('express')();&#xD;&#xA;    var http = require('http').Server(app);&#xD;&#xA;    var io = require('socket.io')(http);&#xD;&#xA;    app.get('/', function(req, res){&#xD;&#xA;      res.sendFile(__dirname + '/index.html');&#xD;&#xA;    });&#xD;&#xA;    var port = process.env.PORT || 5050&#xD;&#xA;    http.listen(port, function(){&#xD;&#xA;    	console.log(process.env);&#xD;&#xA;      console.log('listening on *:5050');&#xD;&#xA;    });