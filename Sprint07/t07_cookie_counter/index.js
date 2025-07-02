const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();

app.use(cookieParser());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/front.js', (req, res) => {
    res.sendFile(__dirname + '/front.js');
});

app.get('/cookie', (req, res) => {
    let counter = 1;
    if (req.cookies.counter) {
        counter = parseInt(req.cookies.counter) + 1;
    }

    res.cookie('counter', counter, {
        maxAge: 60000,
    });

    res.status(200).send(counter);
});

app.listen(3000, () => console.log('Server started on http://localhost:3000'));