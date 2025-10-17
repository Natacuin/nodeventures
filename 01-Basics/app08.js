const http=require('http');

const server= http.createServer((req,res)=>{
    res.setHeader('Content-Type','text/html');
    res.write('<html><head><title>Project</title></head>');
    res.write('<body>');
    if(req.url==='/'){
        console.log('Request=default');
        res.write('<span>Please enter your name:!</span>');
        res.write('<form method="POST" action="/create-user"><input type="text" name="user_name"><button type="submit">Create</button></form>');
        res.write('</body>');
        return res.end();
    }
    if (req.url==='/users'){
        console.log('Request=users');
        res.write('<ul><il>User 1</il></ul>');
        res.write('<ul><il>User 2</il></ul>');
        res.write('<ul><il>User 3</il></ul>');
        res.write('<ul><il>User 4</il></ul>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }
    if (req.url==='/create-user' && req.method=='POST'){
        console.log('Request=create-user');
        const body=[];
        req.on('data',(chunckOfData)=>{
            body.push(chunckOfData);
        });

        const dataComming=req.on('end',()=>{
            
            let message=Buffer.concat(body).toString();
            console.log(message);
            message=message.split('=')[1];
            console.log(message);

            res.write(`<ul><il>New User: ${message} </il></ul>`);
            res.write('</body>');
            res.write('</html>');
            return res.end();
        });
    }
});

server.listen(3000);