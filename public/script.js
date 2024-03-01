var socket=io();//creating socket connection

let btn=document.getElementById('btn');
let inputMsg=document.getElementById('newmsg');
let msgList=document.getElementById('msglist');

btn.onclick=function exec(){
    socket.emit('msg_send',{
        msg:inputMsg.value  
    }
    );

}

socket.on('msg_rcvd',(data)=>{
    // console.log("collected new event from server")
    let limsg=document.createElement('li');
    limsg.innerText=data.msg;
    // console.log(div);
    msgList.appendChild(limsg); 
})