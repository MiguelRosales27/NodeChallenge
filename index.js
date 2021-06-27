const express = require('express');

 const app = express();

 const port = 3100;

 app.get('/', function(req,res){
     res.send("Node Challenge!");
 })
 app.get('/home', function(req,res){
     res.sendFile(__dirname + '/pages/index.html');
 })
app.get('/about', function(req,res){
    res.sendFile(__dirname + '/pages/indexabout.html');
})
app.get('/contact', function(req,res){
    res.sendFile(__dirname + '/pages/indexcontact.html');
})
app.post('/home', function(req,res){
    res.send(" Hello, How are you!");
})
 app.listen(port,function(){
     console.log('Listening at port: ' + port)
 });
