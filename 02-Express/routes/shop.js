const express = require('express');
const router=express.Router();

router.get('/',(req,res,next)=>{
    console.log('Default middleware.');
    res.send("<h1>Hello world from Express.js</<h1>");
});

module.exports=router;