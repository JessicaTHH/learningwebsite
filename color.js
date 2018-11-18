module.exports='color';

const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/colorCollection ';
const client = new MongoClient(url,{ useNewUrlParser: true });



function color(callback){
	client.connect(function(err,db) {
	if (err) {
            console.log("Unable to connect to DB.", err);
            db.close();
        } else {
            console.log("Connection established.");
            db.close();
        	
		};
    })
}

