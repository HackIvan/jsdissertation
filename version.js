const EventEmitter = require('events');
const emitter = new EventEmitter();


emitter.on('messageLogged', () =>{
    console.log('Listener Called');
    
    
});


emitter.emit('messageLogged');



// other
const EventEmitter = require('events');

const Logger = require('./logger');
const logger = new Logger(); 


logger.on('messageLogged', (arg) => {
    console.log('Listener Called',arg);
    
    
});



logger.log('message');



//// Setting up and running a new server
const http = require ('http');
const { connect } = require('http2');
const { Socket } = require('dgram');

const server = http.createServer((req, res) => {
    if(req.url === '/' ){
        res.write('Server is up');
        res.end();
    }
    if(req.url === '/api/courses'){
        res.write('yes these courses are available');
        res.end();
    } if(req.url === '/api/api'){
        res.write(JSON.stringify([1,2,3]));
        res.end();
    }
});


server.on('connection', (Socket) =>{
    console.log('new connection');
})
server.listen(3000);

console.log('listening on port 3000...');
///// end of setting up a new server on port 3000