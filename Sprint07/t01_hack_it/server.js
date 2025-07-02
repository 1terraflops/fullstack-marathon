const express = require('express');
const bcrypt = require('bcrypt');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let hash = '';
let _salt = '';

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/index.js', (req, res) => {
    res.sendFile(__dirname + '/index.js');
});

app.post('/submit', async (req, res) => {
    const { password, salt } = req.body;
    _salt = salt;
    hash = await bcrypt.hash(password, salt);
    res.status(200).send(hash);
});

app.post('/guess', async (req, res) => {
    const { guess } = req.body;
    res.status(200).send(await bcrypt.compare(guess, hash));
})

app.listen(3000, () => console.log('Server started on http://localhost:3000'));