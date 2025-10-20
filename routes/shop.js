const path = require('path');
const express = require('express');
const router=express.Router();

const utilDir=require('../util/path');

router.get('/',(req,res,next)=>{
    console.log('Default middleware.');
    res.sendFile(path.join(utilDir,'views','shop.html'));
});

module.exports=router;