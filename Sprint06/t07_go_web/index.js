const http = require('http');
const fs = require('fs');
const normal = require('./normal-router');
const quantum = require('./quantum-router');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        fs.readFile('views/index.ejs', (err, data) => {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data);
        })
    }
    if (req.url === '/normal.ejs') {
        const time = normal.calculateTime();

        fs.readFile('views/normal.ejs', 'utf-8', (err, data) => {
            const ejs = data
                .replace('${years}', time.years())
                .replace('${months}', time.months())
                .replace('${days}', time.days());

            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(ejs);
        });
    }
    if (req.url === '/quantum.ejs') {
        const time = quantum.calculateTime();

        fs.readFile('views/quantum.ejs', 'utf-8', (err, data) => {
            const ejs = data
                .replace('${quantumTime[0]}', String(time[0]))
                .replace('${quantumTime[1]}', String(time[1]))
                .replace('${quantumTime[2]}', String(time[2]));

            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(ejs);
        })
    }
});

server.listen(3000, () => console.log('Server running on http://localhost:3000/'));