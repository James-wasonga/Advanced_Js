
const express = require('express');
const app = express();
app.listen(3000, () => console.log('listens at port 3000'));
app.use(express.static('index.html'));
app.use(express.json({limit: '1mb'}));

app.post('/api', (request,response) => {
    console.log(request.body);
    response.json({
        status: 'sucess',
        latitude: request.lat,
        longitude: request.long,
    })
})