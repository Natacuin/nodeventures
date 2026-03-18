const fs=require('fs');
const path=require('path');


const products=[];
module.exports = class Product{

    constructor(title){
        this.title=title;
        this.description='Default description';
        this.price='$10.99';
    }

    save(){
        const pathToFile=path.join(path.dirname(require.main.filename), 'data', 'products.json');
        fs.readFile(pathToFile, (err, fileContent)=>{
            let products=[];
            if (!err){
                console.log("File exists. Reading data...");
                try {
                    products=JSON.parse(fileContent);
                } catch (parseErr) {
                    console.log("Invalid JSON in file. Returning empty array...");
                }
            }else{
                console.log("File does not exist. Returning empty array...");
            }
            products.push(this);
            fs.writeFile(pathToFile, JSON.stringify(products), (err)=>{
                if (err){
                    console.log("Error writing to file: ", err);
                }else{
                    console.log("Product saved successfully.");
                }
            })
        })    
    }
    
    
    static fetchAll(cb){
        const pathToFile=path.join(path.dirname(require.main.filename), 'data', 'products.json');
        fs.readFile(pathToFile, (err, fileContent)=>{
            if (err){
                console.log("File does not exist. Returning empty array...");
                cb([]);
                return;
            }
            console.log("File exists. Reading data...");
            try {
                cb(JSON.parse(fileContent));
            } catch (parseErr) {
                console.log("Invalid JSON in file. Returning empty array...");
                cb([]);
            }
        });
    }

    
};
