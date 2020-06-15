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
    }
    if(req.url === '/api/api'){
        res.write(JSON.stringify([1,2,3]));
        res.end();
    }
});


server.on('connection', (Socket) =>{
    console.log('new connection');
})
server.listen(3000);

console.log('listening on port 3000...');
