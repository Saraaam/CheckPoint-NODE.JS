// server.js

const http = require('http'); // Import the http module

// Create the server
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' }); // Set the response header
    res.end('<h1>Hello Node!!!!</h1>\n'); // Send the response body
});

// Start the server on port 3000
server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});
