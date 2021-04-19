const express = require('express')
const path = require('path')
const app = express();
const port = 9000;

app.use(express.static(__dirname+'/views/'));
app.use(express.static(__dirname+'/public/'));
app.use(express.static(__dirname+'/routes/'));
console.log(__dirname+'/public/')


app.use('/', require('./routes/index.js'));

app.listen(port, ()=>{
    console.log('RUnning on port 9000')
});