exports.getAddProduct = (req,res,next)=>{
    console.log('Add product middleware.');
    res.render('add-product', 
        {docTitle:'Add Product', 
            path:'/add-product', 
            activeAddProduct:true 
        });
}