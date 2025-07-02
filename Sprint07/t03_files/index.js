const express = require('express');
const File = require('./File.js');
const FileList = require('./FileList.js');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const fileList = new FileList();

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/front.js', (req, res) => {
    res.sendFile(__dirname + '/front.js');
});

app.get('/select-file', (req, res) => {
    res.status(200).send(fileList.getHTMLList());
});

app.get('/file', (req, res) => {
    const { file } = req.query;
    const fileData = new File(file);
    const data = {filename: file, content: fileData.read()};
    res.status(200).send(data);
})

app.post('/submit', (req, res) => {
    const { filename, content } = req.body;
    const file = new File(filename);
    file.write(content);
    res.status(200).send();
});

app.delete('/file', (req, res) => {
    const { file } = req.query;
    const fileData = new File(file);
    fileData.delete();
    res.status(200).send();
});

app.listen(3000, () => console.log('Server listening on http://localhost:3000'));