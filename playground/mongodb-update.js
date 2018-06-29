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
    
    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5b36800ec3f0212b4624ff53')
    // },{
    //     $set: {
    //         completed:true
    //     }
    // },{
    //     returnOrignal : false
    // }).then((result)=>{
    //     console.log(result);
    // })

    db.collection('User').findOneAndUpdate({
        _id: new ObjectID('5b33cc43177bab04fb51e78a')
    }, {
        $set: {
            name: 'shaveta'
        },
        $inc: {
            age: 30
        } 
    }, {
        returnOrignal: false
    }).then((result) => {
        console.log(result);
    })

    //db.close();
});