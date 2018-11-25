
var express = require('express')
var http = require('http');
var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname, '/client/view')));
app.use(require('body-parser')());

var server = http.createServer(app);

server.listen(4444, () => {
    console.log('server listen 4444')
})

app.get('/pop', function(req, res) {
    console.log("Someone has request to pop");
    var testObject = {
        "AppName": "MongoPop",
        "Version": 1.0
    }
    res.json(testObject);
});

app.get('/coloredobject', function(req,res) {
    console.log("Someone has request to colored object");
    const coloredObject = require('./routes/coloredobject');
    res.json(coloredObject.coloredObject());
});

app.get('/color', function(req,res) {
    console.log("Someone has request to color");
    const color = require('./routes/color');
    console.log('hello from backend')
    color.color(res);
});


app.get('/color/learncolor', function(req, res) {
    console.log("Someone has request to learncolor");
     res.sendFile(path.join(__dirname, 'client/view/index.html'));
});

// app.post('/quiz', function(req,res) {
//     console.log("Someone has request to quiz");
//     const colorQuiz = require('./routes/quiz');
//     res.sendFile(path.join(__dirname, 'client/view/index.html'));
// });

// app.get('*', function(req, res) {
//  console.log("Someone has request to all");
//      res.sendFile(path.join(__dirname, 'client/view/index.html'));
// });

