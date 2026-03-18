//const products=[];
const Product=require('../models/product');

exports.getAddProduct = (req,res,next)=>{
    console.log('Add product middleware.');
    res.render('add-product', 
        {docTitle:'Add Product', 
            path:'/add-product', 
            activeAddProduct:true 
        });
};

exports.postAddProduct=(req,res,next)=>{
    const product=new Product(req.body.title);
    console.log('Product name received:'+req.body.title);
    console.log('Inserting product name in variable');
    product.save();
    res.redirect('/')
};

exports.getProducts=(req,res,next)=>{
    Product.fetchAll(products =>{
    console.log('Default middleware.');
    console.log(products);
    //To render dynamic content (pub)
    res.render('shop', {prods:products, docTitle:'Shop', path:'/shop', hasProducts:products.length>0, activeShop:true});
    //To render static HTML files
    //res.sendFile(path.join(utilDir,'views','shop.html'));
});
};