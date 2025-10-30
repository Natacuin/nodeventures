const path = require('path');
const express = require('express');
const router=express.Router();

const utilDir=require('../util/path');
const adminData=require('./admin');

router.get('/',(req,res,next)=>{
    console.log('Default middleware.');
    console.log(adminData.products);
    // res.sendFile(path.join(utilDir,'views','shop.pug'));
    res.render('shop')
});

module.exports=router;