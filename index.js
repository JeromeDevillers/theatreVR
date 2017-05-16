var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;


// Serve Custom Js
app.get('/dist/bundle.js', function(req, res){
  res.sendFile(__dirname + '/dist/bundle.js');
})

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.get('/admin', function(req, res){
  res.sendFile(__dirname + '/admin.html');
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

http.listen(port, function(){
  console.log('listening on localhost:' + port);
});