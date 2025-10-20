const express = require('express');
const bodyParser= require('body-parser');

const adminRoutes= require('./routes/admin');
const ShopRoutes= require('./routes/shop');

const expressApp=express();

expressApp.use(bodyParser.urlencoded());

expressApp.use(adminRoutes);

expressApp.use(ShopRoutes);

expressApp.listen(3000);