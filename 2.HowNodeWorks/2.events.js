const EventEmitter = require('events');
const http = require('http');

class newSale extends EventEmitter {
  constructor() {
    super();
  }
}

const emitter = new newSale();

emitter.on('newSale', () => {
  console.log('There is a new sale');
});
emitter.on('newSale', () => {
  console.log('Customer_Name: Rahil');
});
emitter.on('newSale', (stock) => {
  console.log(`Stock Updated:${stock}`);
});
emitter.emit('newSale', 2); // without this events wont be exexuted and 1st, arguement is the event name and 2nd, is the arguement for the .on callback function parameters

const server = http.createServer();

server.on('request', (req, res) => {
  console.log('Received Request!');
  console.log(req.url);
  res.end('Request Received');
});
server.on('request', (req, res) => {
  console.log('Another Received Request!');
});
server.on('close', (req, res) => {
  console.log('Server Closed');
});

server.listen(8000, '127.0.0.1', () => {
  console.log('Waiting For Response................');
});
server.close();
