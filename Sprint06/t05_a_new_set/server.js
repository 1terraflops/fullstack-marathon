const http = require('http');
const fs = require('fs');
const path = require('path');

function parseMultipartData(body, boundary) {
    const parts = body.split(boundary).filter(p => p.includes('name='));
    const fields = {};

    parts.forEach(part => {
        const nameMatch = part.match(/name="([^"]+)"/);
        if (nameMatch) {
            const name = nameMatch[1];

            const filenameMatch = part.match(/filename="([^"]+)"/);

            const value = part.split('\r\n\r\n')[1];
            if (value) {
                if (name === 'file' && filenameMatch) {
                    fields[name] = filenameMatch[1];
                }
                else {
                    fields[name] = value.trim().replace(/\r\n--$/, '');
                }
            }
        }
    });

    return fields;
}

const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        if (req.url === '/') {
            fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
                if (err) {
                    res.writeHead(500, {'Content-Type': 'text/plain'});
                    res.end('Error loading form.');
                }
                else {
                    res.writeHead(200, {'Content-Type': 'text/html'});
                    res.end(data);
                }
            });
        }
        else if (req.url === '/front.js') {
            fs.readFile(path.join(__dirname, 'front.js'), (err, data) => {
                if (err) {
                    res.writeHead(500, {'Content-Type': 'text/plain'});
                    res.end('Error loading script.');
                }
                else {
                    res.writeHead(200, {'Content-Type': 'application/javascript'});
                    res.end(data);
                }
            });
        }
        else if (req.url === '/style.css') {
            fs.readFile(path.join(__dirname, 'style.css'), (err, data) => {
                if (err) {
                    res.writeHead(500, {'Content-Type': 'text/plain'});
                    res.end('Error loading stylesheet.');
                }
                else {
                    res.writeHead(200, {'Content-Type': 'text/css'});
                    res.end(data);
                }
            });
        }
        else {
            res.writeHead(404, {'Content-Type': 'text/plain'});
            res.end('Not Found');
        }
    }
    else if (req.method === 'POST' && req.url === '/submit') {
        let body = '';

        req.on('data', chunk => {
            body += chunk;
        });

        req.on('end', () => {
            const contentType = req.headers['content-type'];
            const boundaryMatch = contentType.match(/boundary=(.*)$/);

            if (!boundaryMatch) {
                res.writeHead(400, {'Content-Type': 'text/plain'});
                return res.end('Bad Request');
            }

            const boundary = '--' + boundaryMatch[1];
            const fields = parseMultipartData(body, boundary);

            res.writeHead(200, {'Content-Type': 'application/json'});
            res.end(JSON.stringify(fields));
        });
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});