const path=require('path');

const express = require('express');
const router=express.Router();

const utilDir=require('../util/path');

router.get('/add-product',(req,res,next)=>{
    console.log('Add product middleware.');
    res.sendFile(path.join(utilDir,'views','add-product.html'))
});

router.post('/add-product',(req,res,next)=>{
    console.log('product middleware.');
    console.log(req.body);
    res.redirect('/')
});

module.exports =router;