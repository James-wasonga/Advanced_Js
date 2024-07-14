
const express = require('express');
const Datastore = require('nedb');

const app = express();
app.listen(3000, () => console.log('listens at port 3000'));
app.use(express.static('public'));
app.use(express.json({limit: '1mb'}));

const database = new Datastore('database.db');
database.loadDatabase();
//database.insert({name: "James",age: 20});
// database.insert({name: "Erick",age: 22});
// database.insert({name: "Juma",age: 23});
 database.insert({name: "Felix",age: 24});

app.get('/api', (request,response) => {
    database.find({},(err,data) => {
        if(err){
            response.end();
            return;
        }
        response.json(data);

    });
})


app.post('/api', (request,response) => {
    console.log(request.body);
    const data = request.data;
    const timestamp = Date.now();
    database.timestamp = timestamp;
    database.insert(data);
    response.json(data);
})

