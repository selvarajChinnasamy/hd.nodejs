const http = require('http');
const app = require('./app');
var config = require('./config/config.json');

const port = config.port.portNumber;

const server = http.createServer(app);

server.listen(port);