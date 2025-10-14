const http= require('http');

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
    res.setHeader('Content-Type','text/html');
    res.write('<html>')
    res.write('<head><title>Node.JS Server is running</title></head>')
    res.write('<body><h1>Hello world from node.js server</h1></body>')
    res.write('</html')
    res.end();
});

server.listen(3000);