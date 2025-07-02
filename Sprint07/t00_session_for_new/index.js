const express = require('express');
const multer = require('multer');

const app = express();
const upload = multer();

const PORT = 3000;
let data = {};

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/front.js', (req, res) => {
    res.sendFile(__dirname + '/front.js');
});

app.get('/data', (req, res) => {
    res.send(data);
});

app.post('/submit', upload.none(), (req, res) => {
    data = req.body;
    res.status(200).send();
});

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}/`);
});