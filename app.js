const express = require ("express");
const app = express();
const products = require ("./products");

app.listen(8000 , () => {console.log("this app is running on port 8000 ")});

app.get("/", (req,res) =>{
console.log("Hello");
res.json ({name: "Ahmed"});
})

app.get("/products", (req,res) => {
    res.json(products);
})


