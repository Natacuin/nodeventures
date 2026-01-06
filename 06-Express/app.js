const path= require('path');

const express = require('express');
const bodyParser= require('body-parser');

const adminRoutes= require('./routes/admin');
const shopRoutes= require('./routes/shop');
const utilDir=require('./util/path');

const expressApp=express();
const expressHbs = require('express-handlebars');

// Register the engine
expressApp.engine('hbs', expressHbs({
    layoutsDir:'views/layouts/',
    defaultLayout: 'main-layout',
    extname:'hbs'
}));


expressApp.set('view engine','ejs')


expressApp.use(express.static(path.join(utilDir,'public')));
expressApp.use(bodyParser.urlencoded());

expressApp.use('/admin',adminRoutes.routes);
expressApp.use(shopRoutes);
expressApp.use((req,res,next)=>{
    //Simple static html
    //res.status(404).sendFile(path.join(utilDir,'views','404.html'));
    res.render('404',{docTitle:"Page Not Found"});
});

expressApp.listen(3000);