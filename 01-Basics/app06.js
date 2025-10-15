const http= require('http');
const fs=require('fs');

const server=http.createServer((req,res)=>{
    if(req.url==='/')
    {
        res.setHeader('Content-Type','text/html');
        res.write('<html>')
        res.write('<head><title>Node.JS Server is running</title></head>')
        res.write('<body><h1>Enter your name</h1>')
        res.write('<form action="/message" method="POST"><input type="text" name="message"/><button type="submit">Send</button></form></body>')
        res.write('</html>')
        return res.end();
    }
    if (req.url==='/message' && req.method==='POST')
    {
        const body=[];
        //Start to receive the data.
        req.on('data', (chunckOfData)=>{
            console.log(chunckOfData);
            body.push(chunckOfData);
        });
        //When all the data is received, save the data in a file.
        req.on('end',()=>{
            const parsedBody=Buffer.concat(body).toString();
            console.log(parsedBody);
            const message=parsedBody.split('=')[1];
            //For async method, an additional function needs to be passed to the method as callback
            fs.writeFile('message.txt', message, (err) => {
                res.statusCode=302;
                //res.setHeader('Location','/');
                return res.end();
            });
        });
        

    }
    res.setHeader('Content-Type','text/html');
    res.write('<html>')
    res.write('<head><title>Node.JS Server is running</title></head>')
    res.write('<body><h1>Hello world from node.js server</h1></body>')
    res.write('</html')
    res.end();
});

server.listen(3000);