// const MongoClient = require('mongodb').MongoClient;
const {
    MongoClient,
    ObjectID
} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to Mongodb Server');
    }

    console.log('Connected to Mongodb Server');
    // deleteMany
    // db.collection('Todos').deleteMany({text: 'the lunch'}).then((result)=>{
    //     console.log(result);
    // })

    // deleteOne
    // db.collection('Todos').deleteOne({
    //     _id: ObjectID('5b36828bc3f0212b4625000c')
    //     }).then((result) => {
    //         console.log(result);
    //     });

    // findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: true}).then((result)=>{
    // console.log(result);
    //})

    db.collection('User').deleteOne({
        _id: 1024
    }).then((result)=>{
        console.log(JSON.stringify(result, null, 2));
    });

    // db.collection('User').findOneAndDelete({
    //     _id: ObjectID('5b368404c3f0212b462500fe')
    // }).then((result)=>{
    //     console.log(JSON.stringify(result, null, 2));
    // });

    //db.close();
});