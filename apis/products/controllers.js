const Product = require("../../db/models/Product");
let products = require("../../products");

exports.showProduct = async (productId,next) =>{
    try{
        const prod = await Product.findById(productId);
        return prod;
    }
    catch(error){
        next(error)
    }
}

exports.fetchProducts= async(req,res, next) => {
    try{
        const productArray = await Product.find()
        res.json(productArray);
    }
    catch(error){
    next(error);
    }
}
exports.postProduct= async(req,res, next) =>{
    try{
    const newProduct = await Product.create(req.body);
    res.status(201).json(newProduct);
    }
    catch(error){
    next(error);
    }
}
exports.deleteProduct= async(req,res, next) =>{ 
    try{
    await Product.findByIdAndDelete({_id: req.product.id});
    res.status(204).end();
    }
    catch(error){
    next(error);
    }
}

exports.updateProduct= async(req,res, next) =>{
    
    try{
        const foundProduct = await Product.findByIdAndUpdate(
            {_id: req.product.id}, req.body, 
            { new: true, runValidators: true });
            res.json(foundProduct);
    }
    catch(error){
    next(error);
    }
    
}
 


// const {productId}= req.params;
// // const productId = re.prams.productId;
// const foundProduct = products.find(product => product.is === +productId);
// if(foundProduct){
//     const newArray = products.filter(product => product.id !== +productId);
//     products = newArray;
//     res.status(204).end();
// }
// else{
//     res.status(404).end();
// }