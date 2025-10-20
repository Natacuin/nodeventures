const path= require('path');

const express = require('express');
const bodyParser= require('body-parser');

const adminRoutes= require('./routes/admin');
const ShopRoutes= require('./routes/shop');
const utilDir=require('./util/path');

const expressApp=express();

expressApp.use(bodyParser.urlencoded());

expressApp.use('/admin',adminRoutes);
expressApp.use(ShopRoutes);
expressApp.use((req,res,next)=>{
    res.status(404).sendFile(path.join(utilDir,'views','404.html'));
});

expressApp.listen(3000);