require('jquery');
// require('socketio');


/*=================================
=            VARIABLES            =
=================================*/
var http = require('http'),
	fs = require('fs'),
	express = require('request'),
	PORT = '8080', // Put your port here
	indexFile = fs.readFileSync('index.html'),
	socket = require('socket.io')(8082);

	http.createServer(function (req, res) {
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.end(indexFile);
		socket.emit('tweet', 'twwefwefeet');
	}).listen(PORT, '127.0.0.1');


	socket.on('connection',function(socket){
		console.log('A new user connect');
		// This event will trigger when any user is connected.
		// You can use 'socket' to emit and receive events.
		socket.on('commend added',function(data){
			// When any connected client emit this event, we will receive it here.
			socket.emit('something happend'); // for all.
			socket.broadcast.emit('something happend'); // for all except me.
		});
	});
	
console.log('Server running at http://127.0.0.1:'+PORT+'/');