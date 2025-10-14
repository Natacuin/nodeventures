const http = require('http');

const server=http.createServer((req,res)=>{
    console.log('URL:' + req.url);
    console.log();
    console.log('Headers:')
    console.log(req.headers);
    console.log()
    console.log('Method:'+ req.method);
});

server.listen(3000);