//server.js
const express = require('express');
      var server = express();
      const path = require('path');


server.use(express.static('public'))
server.set('port', process.env.PORT || 3000);

//Basic routes
server.get('/', (request,response)=>{
    response.sendFile(path.join(__dirname+'/login.html'));
});

server.get('/about',(request,response)=>{
   response.send('About page');
});

//Express error handling middleware

//Binding to a port
server.listen(3000, ()=>{
   console.log(__dirname)
   console.log(__dirname, '/styles')
  console.log('Express server started at port 3000');
});