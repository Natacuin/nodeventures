const path = require('path');
const express = require('express');
const router=express.Router();

const utilDir=require('../util/path');
const adminData=require('./admin');

router.get('/',(req,res,next)=>{
    console.log('Default middleware.');
    console.log(adminData.products);
    
    const products=adminData.products;
    //To render dynamic content (pub)
    res.render('shop', {prods:products, docTitle:'Shop', path:'/shop'});
    //To render static HTML files
    //res.sendFile(path.join(utilDir,'views','shop.html'));
});

module.exports=router;