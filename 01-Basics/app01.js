const http = require('http');
//the following line will import code based on a local file in the same directory
//const specialhttp=require('/specialhttp');


function localListener(req, res){

}


//The following line will work too
//const server=http.createServer(localListener);

//The following lines will work too. Just another way to write the same code.
/*const server=http.createServer(function (req,res{

}));*/

const server=http.createServer((req,res)=>{
    console.log(req);
    //Next line will terminate the server
    //process.exit();
});

server.listen(3000);