//socket.io  (nodejs library) not websocket websocket is protocol bidirectional low latency thing
//persistent connection -when http connection not break.  keep alive header use for client to server but for server to client we use websocket protocol. 
//Non persistent connection when http connection complete tcp connection break.
// websocket tcp not udp.reliable.
// WebSocket api makes 2 ways interactive communication session between users servers.Pipeline way communication 2 way.
// called full duplex communication.because we dont need to make tcp connection again and again.

//one is express and other is webpage
const express=require('express');
const http = require('http');
const socketio= require('socket.io');


const app=express();
const server = http.createServer(app);
const io=socketio(server);

io.on('connection', (socket) => {
    console.log('a user connected');  //socket id is unique for every user
    
    socket.on('from_client',()=>{
        console.log('event from client')
    })

    setInterval(()=>{
        socket.emit("from_server");
    },2000)
});
  

app.use('/',express.static(__dirname+'/public'));  //in expresss to connect static file



server.listen(3000,()=>{       //line 15 const server = http.createServer(app);
    console.log('Server Started');
});