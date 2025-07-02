const express = require('express');
const fs = require('fs');
const sharp = require('sharp');
const request = require('request');

const app = express();

app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/upload', async (req, res) => {
    const url = req.query.url;
    const originalPath = __dirname + '/original.png';

    request(url).pipe(fs.createWriteStream(originalPath)).on('close', async () => {
        const metadata = await sharp(originalPath).metadata();
        const side = Math.min(metadata.width, metadata.height);

        const squarePath = __dirname + '/square.png';

        await sharp(originalPath)
            .extract({
                left: Math.floor((metadata.width - side) / 2),
                top: Math.floor((metadata.height - side) / 2),
                width: side,
                height: side
            })
            .toFile(squarePath);

        const channels = [
            [[1, 0, 0], [0, 0, 0], [0, 0, 0]],
            [[0, 0, 0], [0, 1, 0], [0, 0, 0]],
            [[0, 0, 0], [0, 0, 0], [0, 0, 1]]
        ];

        const outputPaths = [];

        const baseName = __dirname + '/output_';

        await sharp(squarePath).resize(250, 250).toFile(baseName + '0.png');
        outputPaths.push('output_0.png');

        for (let i = 0; i < 3; i++) {
            const outFile = baseName + (i + 1) + '.png';
            await sharp(squarePath)
                .recomb(channels[i])
                .resize(250, 250)
                .toFile(outFile);
            outputPaths.push('output_' + (i + 1) + '.png');
        }

        res.json({ img: outputPaths });
    });
});

app.listen(3000, () => { console.log(`Server running at http://localhost:3000`) });