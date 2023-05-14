const express = require('express');
const app = express();

app.get('/', function(req,res){
    res.send('Hello world.')
})

app.get('/json', function(req,res){
    res.json({
        source: "server",
        message: "hello",
    });
});

app.get('/html', function(req,res){
    res.sendFile(__dirname + '/index.html');
})

app.listen(4000);
