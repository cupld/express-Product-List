let products = require("../../products")


exports.fetchProducts=(req,res) => {
    res.json(products);
}
exports.postProduct=(req,res) =>{
    const id= products.length + 1;
    const newProduct = {id: id, ...req.body};
    products.push(newProduct);
    res.json({message: "Done"})
}
exports.deleteProduct=(req,res) =>{
    const {productId}= req.params;
    // const productId = re.prams.productId;
    const foundProduct = products.find(product => product.is === +productId);
    if(foundProduct){
        const newArray = products.filter(product => product.id !== +productId);
        products = newArray;
        res.status(204).end();
    }
    else{
        res.status(404).end();
    }
}

