const Product = require("../../db/models/Product");
let products = require("../../products");

exports.fetchProducts= async(req,res) => {
    try{
        const productArray = await Product.find()
        res.json(productArray);
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
}
exports.postProduct= async(req,res) =>{
    try{
    const newProduct = await Product.create(req.body);
    res.status(201).json(newProduct);
    }
    catch(error){
    res.status(500).json({message: error.message});
    }
}
exports.deleteProduct= async(req,res) =>{
    const {productId}= req.params; 
    try{
    const foundProduct = await Product.findByIdAndDelete({_id: productId});
    if(foundProduct) res.status(204).end();
    else res.status(404).json({message: error.message});
    }
    catch(error){
    res.status(500).json({message: error.message});
    }
}

exports.updateProduct= async(req,res) =>{
    const { productId }= req.params;
    try{
        const foundProduct = await Product.findByIdAndUpdate(
            {_id: productId}, req.body, 
            { new: true, runValidators: true });
        if (foundProduct) res.json(foundProduct);
        else res.status(404).json({message: "not found"});
    }
    catch(error){
        res.status(500).json({message: error.message});
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