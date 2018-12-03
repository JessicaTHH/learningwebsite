
var express = require('express')
var http = require('http');
var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(require('body-parser')());

var server = http.createServer(app);

// server.listen(4444, () => {
//     console.log('server listen 4444')
// })

app.get('/pop', function(req, res) {
	console.log("Someone has request to pop");
    var testObject = {
        "AppName": "MongoPop",
        "Version": 1.0
    }
    res.json(testObject);
});

app.get('/color', function(req,res) {
    console.log("Someone has request to color");
    const color = require('./routes/color');
    console.log('hello from backend')
    color.color(res);
});

app.get('/selectColors', function(req,res) {
    console.log("Someone has request to select color");
    const selectColors = require('./routes/selectcolors');
    console.log('hello from backend')
      selectColors.selectColors(res);
});


// app.get('/learncolor', function(req, res) {
//     console.log("Someone has request to learncolor");
//      res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });


const port = process.env.PORT || 4444;
app.listen(port, () => {
 console.log('Listening on port', port);
});