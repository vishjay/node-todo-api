const MongoClient = require("mongodb").MongoClient;

MongoClient.connect('mongodb://localhost:27017/', (err, client) => {
    if (err) {
        return console.log('Unable to connect to the database');
    }
    console.log('Connected to the MongoDB server');
    
    client.db('node-todo-api').collection('todos').insertOne({
        text: 'Some task',
        isCompleted: false
    }, (err, result) => {
        if (err) {
            return console.log('Unable to insert', err);
        }

        console.log(JSON.stringify(result.ops, undefined, 2));
    })

    client.close();
});

