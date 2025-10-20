const express = require('express');
const bodyParser= require('body-parser');

const expressApp=express();

expressApp.use(bodyParser.urlencoded());

expressApp.use('/add-product',(req,res,next)=>{
    console.log('Add product middleware.');
    res.send('<form action="/product" method="POST"><input type="text" name="product_name"/><button type="submit">Add a product</button></form>');
});

expressApp.post('/product',(req,res,next)=>{
    console.log('product middleware.');
    console.log(req.body);
    res.redirect('/')
});

expressApp.use((req,res,next)=>{
    console.log('Default middleware.');
    res.send("<h1>Hello world from Express.js</<h1>");
});

expressApp.listen(3000);