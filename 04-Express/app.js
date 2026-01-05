const path= require('path');

const express = require('express');
const bodyParser= require('body-parser');

const adminRoutes= require('./routes/admin');
const ShopRoutes= require('./routes/shop');
const utilDir=require('./util/path');

const expressApp=express();
//Setting the engine to use Pug in this case.
expressApp.set('view engine','pug')


expressApp.use(express.static(path.join(utilDir,'public')));
expressApp.use(bodyParser.urlencoded());

expressApp.use('/admin',adminRoutes.routes);
expressApp.use(ShopRoutes);
expressApp.use((req,res,next)=>{
    //Simple static html
    //res.status(404).sendFile(path.join(utilDir,'views','404.html'));
    res.render('404',{docTitle:"Page Not Found"});
});

expressApp.listen(3000);