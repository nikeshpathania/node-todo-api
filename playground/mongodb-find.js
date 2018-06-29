const MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to Mongodb Server');
    }

    console.log('Connected to Mongodb Server');

    

    db.collection('Todos').find({completed: true}).toArray().then((docs)=>{
        console.log('Todos');
        console.log(JSON.stringify(docs, null, 2))
    },(err)=>{
        console.log('Unable to fetch Data', err)

    })


    db.close();
});