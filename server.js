var express = require('express')
var http = require('http');
var path = require('path');

var app = express();

app.use(express.static(path.join(__dirname, '/view')));
app.use(require('body-parser')());

var server = http.createServer(app);

server.listen(4444, () => {
    console.log('server listan 4444')
})