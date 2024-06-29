
const express = require('express');
const Datastore = require('nedb');

const app = express();
app.listen(3000, () => console.log('listens at port 3000'));
app.use(express.static('index.html'));
app.use(express.json({limit: '1mb'}));

const database = new Datastore('database.db');
database.loadDatabase();
// database.insert({name: "James",age: 20});
// database.insert({name: "Erick",age: 22});
// database.insert({name: "Juma",age: 23});
// database.insert({name: "Jack",age: 22});



app.post('/api', (request,response) => {
    console.log(request.body);
    const data = request.data;
    const timestamp = Date.now();
    database.timestamp = timestamp;
    database.insert(data);
    response.json({
        status: 'sucess',
        latitude: request.lat,
        timestamp:timestamp,
        longitude: request.long,
    })
})