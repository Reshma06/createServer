const http = require('http');

const server = http.createServer(function(req, res) {
    console.log('Reshma');
});

server.listen(4000);