const express = require('express');
const app = express();
// To tell server to read body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// end
const mytodo = {
    id: 1,
    title: "title no 1"
};
const mytodo2 = {
    source: "aaa",
    message: "bbb",
};
app.get('/', function(req,res){
    res.send('Hello world GET.')
})

app.get('/json', function(req,res){
    res.json(mytodo);
});

app.get('/html', function(req,res){
    res.sendFile(__dirname + '/index.html');
})

app.post('/', function(req,res){
    res.json(mytodo);
})
app.put('/', function(req, res){
    const body = req.body;
    const newTitle = body.title;
    mytodo.title = newTitle;
    res.json(mytodo);
});

app.listen(4000);
