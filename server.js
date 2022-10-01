const express = require('express');

const app = express();

app.listen(3000);

app.get('/', function(req,res) {
    res.send('Hello World');
});

app.get('/about', function(req,res) {
    res.sendFile('./about.html', {root: __dirname});
});

//redirect
app.get('/about-us', (req,res)=>{
    res.redirect('/about');
});

//404 page
app.use((req,res)=>{
    res.sendFile('./Oops.html', {root:__dirname});
});