const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const dbName= 'colorCollection';

function selectColors(res){
    MongoClient.connect(url,{ useNewUrlParser: true },function(err,client) {
    if (err) {
            console.log("Unable to connect to DB.", err);
                client.close();
        } else {
            console.log("Connection established.");
            const db=client.db(dbName);
            const collection='colorCollection';
            var clr=db.collection(collection);
            var random=(Math.floor(Math.random() * 9) + 1);
            clr.findOne({_id:random},function(err, result) {
                console.log('in mongo')
                console.log(result);
                res.json(result);
                client.close();
            });
        };
    });
};



module.exports= { selectColors };