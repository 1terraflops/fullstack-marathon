const express = require('express');
const ListAvengerQuotes = require('./ListAvengerQuotes.js');

const app = express();
app.use(express.json());

const list = new ListAvengerQuotes();

app.get('/', (req, res) => {
    res.status(200).sendFile(__dirname + '/index.html');
});

app.get('/front.js', (req, res) => {
    res.status(200).sendFile(__dirname + '/front.js');
});

app.get('/data', (req, res) => {
    res.status(200).send({xml: list.toXML(), json: list.fromXML()});
});

app.listen(3000, () => console.log('Server started on http://localhost:3000'));