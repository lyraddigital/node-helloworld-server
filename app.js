var http = require('http');

var server = http.createServer((req, res) => {
    res.writeHead(200, { 'content-type': 'text/plain' });
    res.end('Hello World');
});

server.listen(8080);