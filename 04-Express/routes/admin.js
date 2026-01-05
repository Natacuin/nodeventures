const path=require('path');

const express = require('express');
const router=express.Router();

const utilDir=require('../util/path');

const products=[];

router.get('/add-product',(req,res,next)=>{
    console.log('Add product middleware.');
    res.render('add-product', {docTitle:'Add Product', path:'/add-product' });
    //res.sendFile(path.join(utilDir,'views','add-product.html'))
});

router.post('/add-product',(req,res,next)=>{
    console.log('Product name received:'+req.body);
    console.log('Inserting product name in variable');
    products.push({title:req.body.title,price:'$9.99', description:'Nice description'});
    console.log('Value of the variable'+products.toString());
    res.redirect('/')
});

exports.routes= router;
exports.products=products;