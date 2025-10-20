const http = require('http');

const express = require('express');

const expressApp= express();
expressApp.use((req,res,next)=>{
    console.log('In the middleware.');
    next(); //Thiw allow the request to continue to the next middleware.
});

expressApp.use((req,res,next)=>{
    console.log('Other middleware.');
    res.send("<h1>Hello world from Express.js</<h1>");
});

const server=http.createServer(expressApp);

server.listen(3000);