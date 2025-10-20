const express=require('express');

const app=express();

app.use('/Users',(req,res,next)=>{
    console.log('/Users request.');
    res.send('<h1>Users request</h1>');
});

app.use('/',(req,res,next)=>{
    console.log('/ request');
    res.send('<h1>Default request</h1>');
});


app.listen(3000);