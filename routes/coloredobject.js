
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const dbName= 'colorCollection';

function coloredObject(callback){
    MongoClient.connect(url,{ useNewUrlParser: true },function(err,client) {
    if (err) {
            console.log("Unable to connect to DB.", err);
                client.close();
        } else {
            console.log("Connection established.");
            const db=client.db(dbName);
            const collection='colorCollection';
            var clr=db.collection(collection);
            clr.findOne({},function(err, result) {
                        console.log(result);  
                client.close();
             });
        };
    });
};



module.exports= { coloredObject };