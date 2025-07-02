const express = require("express");
const https = require("https");
const crypto = require("crypto");

const app = express();

const publicKey = ''; //Enter your own public key here
const privateKey = ''; // Enter your own private key here

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.get("/style.css", (req, res) => {
    res.sendFile(__dirname + "/style.css");
});

app.get("/front.js", (req, res) => {
    res.sendFile(__dirname + "/front.js");
});

app.get("/api/characters", (req, res) => {
    const ts = Date.now().toString();
    const hash = crypto.createHash("md5").update(ts + privateKey + publicKey).digest("hex");

    const url = `https://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}`;

    https.get(url, (apiRes) => {
        let data = "";

        apiRes.on("data", chunk => data += chunk);
        apiRes.on("end", () => {
            const json = JSON.parse(data);
            res.json(json.data);
        });
    }).on("error", err => {
        console.error(err);
        res.status(500).send("API Error");
    });
});

app.listen(3000, () => {console.log(`Server running at http://localhost:3000`);});