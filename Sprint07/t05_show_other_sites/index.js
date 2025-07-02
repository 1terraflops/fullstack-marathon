const express = require('express');
const axios = require("axios");

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/front.js', (req, res) => {
    res.sendFile(__dirname + '/front.js');
});

app.post('/website', async (req, res) => {
    const response = await axios.get(req.body.url);
    const html = response.data;

    const match = html.match(/<body[^>]*>[\s\S]*?<\/body>/i);
    res.status(200).send({ html: match });
});


app.listen(3000, () => console.log('Server started on http://localhost:3000'));