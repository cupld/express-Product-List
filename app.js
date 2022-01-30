const express = require ("express");
const { message } = require("statuses");
const app = express();
let products = require ("./products");
app.use(express.json());


app.get("/", (req,res) =>{
console.log("Hello");
res.json ({name: "Ahmed"});
})

app.get("/products", (req,res) => {
    res.json(products);
})

app.post("/products", (req,res) =>{
    const id= products.length + 1;
    const newProduct = {id: id, ...req.body};
    products.push(newProduct);
    res.json({message: "Done"})
})

app.delete("/products:products.id", (req,res) =>{
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

})

app.listen(8000 , () => {console.log("this app is running on port 8000 ")});