const http = require('http');
const url = require('url');
const path = require('path');
const os = require('os');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        console.log('Executed file:', path.basename(__filename));
        console.log('Arguments:', process.argv.slice(2));

        const serverIP = req.socket.localAddress;
        console.log('Server IP address:', serverIP);

        console.log('Host:', os.userInfo().username);
        console.log('Protocol:', `HTTP/${req.httpVersion}`);
        console.log('Method:', req.method);
        console.log('User-Agent:', req.headers['user-agent']);

        const clientIP = req.socket.remoteAddress;
        console.log('Client IP address:', clientIP);

        const parsedUrl = url.parse(req.url, true);
        console.log('Query parameters:', parsedUrl.query);

        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end(`Success. Check Node console`);
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});