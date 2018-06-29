//const MongoClient = require('mongodb').MongoClient;
const {
    MongoClient,
    ObjectId
} = reuire('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to Mongodb Server');
    }

    console.log('Connected to Mongodb Server');

    // db.collection('Todos').insertOne({
    //     text: 'Something new one',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert todo' , err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });


    // Insert new doc into User(name, age, location)
    // db.collection('User').insertOne({
    //     name: 'Nikesh',
    //     age: 35,
    //     location: 'Chandigarh'
    // }, (err, result) => {
    //     if(err) {
    //         console.log('Unabale to insert User' , err);
    //     }
    //     console.log(result.ops);
    // });

    db.collection('Todos').find().toArray().then((docs)=>{
        console.log('Todos');
    })


    db.close();
});