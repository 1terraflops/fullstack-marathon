const express = require('express');
const iconv = require('iconv-lite');

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/index.js', (req, res) => {
    res.sendFile(__dirname + '/index.js');
});

app.post('/utf', (req, res) => {
    res.status(200).send(iconv.encode(req.body.text, 'utf-8'));
});

app.post('/iso', (req, res) => {
   res.status(200).send(iconv.encode(req.body.text, 'iso-8859-1'));
});

app.post('/win', (req, res) => {
    res.status(200).send(iconv.encode(req.body.text, 'windows-1252'));
});

app.listen(3000, () => console.log('Server started on http://localhost:3000'));