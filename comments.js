// Create web server
// Create a web server that listens on port 3000 and serves the comments.json file. The comments.json file is an array of objects that have a username and comment property. The server should respond to GET requests to /comments with the contents of the comments.json file.

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');

    if (req.method === 'GET' && req.url === '/comments') {
        fs.readFile('./comments.json', 'utf8', (err, data) => {
            if (err) {
                res.statusCode = 500;
                res.end('An error occurred');
                return;
            }

            res.end(data);
        });
    } else {
        res.statusCode = 404;
        res.end('Not Found');
    }
});

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

// Run the server with node comments.js and visit http://localhost:3000/comments to see the contents of the comments.json file.
