// Importing the 'http' module
const http = require('http');

// Creating a server
const server = http.createServer((req, res) => {
  // Setting the response headers
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  
  // Sending the response
  res.end('Hello, world!\n');
});

// Setting the port number
const PORT = process.env.PORT || 4000;

// Making the server listen on the specified port
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
