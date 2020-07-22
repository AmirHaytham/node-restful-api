//Restful API?
//Representational State Transfer
//
//And, we will use express.js as a framework for node.js to make this API a bit easier
//


const http = require('http');

//
const app = require('./app');

//I want to either get that port through an environment variable, or I will hard coded there
const port = process.env.PORT || 3000;


//To create a server, we need to send a listener which is a function excuted whenever we get a new request
const server = http.createServer(app);

server.listen(port);