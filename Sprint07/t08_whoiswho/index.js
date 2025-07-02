const express = require('express');
const multer = require('multer');
const fs = require('fs');
const csv = require('csv-parser');
const { createTable, index } = require('./prepareTable');

const app = express();
const upload = multer({ dest: 'uploads/' });

app.use('/js', express.static('./js'));

app.get('/', (req, res) => {
    res.send(index());
});

app.post('/upload', upload.single('file'), (req, res) => {
    if (!req.file) return res.redirect('/');
    const file = req.file.filename;
    const data = [];

    fs.createReadStream(`uploads/${file}`)
        .pipe(csv())
        .on('data', row => data.push(row))
        .on('end', () => {
            const html = createTable(data, '', file);
            res.send(index(html));
        });
});

app.get('/filter', (req, res) => {
    const { file, sentiment = '' } = req.query;
    if (!file) return res.redirect('/');

    const data = [];

    fs.createReadStream(`uploads/${file}`)
        .pipe(csv())
        .on('data', row => data.push(row))
        .on('end', () => {
            const html = createTable(data, sentiment, file);
            res.send(index(html));
        });
});

app.listen(3000, () => {console.log(`Server running at http://localhost:3000`);});