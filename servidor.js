const http = require('http');
const fs = require('fs');
const path = require('path');
const PORT = 3000;

const server = http.createServer((req, res) => {
let filePath = './public' + req.url;

if (req.url === '/') {
    filePath = './public/index.html';
}

const extname = path.extname(filePath);
let contentType = 'text/html';

switch (extname) {
    case '.css':
    contentType = 'text/css';
    break;
    case '.png':
    contentType = 'image/png';
    break;
}

fs.readFile(filePath, (err, content) => {
    if (err) {
    res.writeHead(404);
    res.end('Página no encontrada');
    } else {
    res.writeHead(200, { 'Content-Type': contentType });
    res.end(content);
    }
});
});

server.listen(PORT, () => {
console.log(`Servidor corriendo en http://localhost:${PORT}`);
});