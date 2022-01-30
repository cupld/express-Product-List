const express = require ("express");
const app = express();
let products = require ("./products");
app.use(express.json());
const productsRoute = require("./apis/products/routes");
app.use("/api/products",productsRoute);


app.get("/", (req,res) =>{
console.log("Hello");
res.json ({name: "Ahmed"});
})


app.listen(8000 , () => {console.log("this app is running on port 8000 ")});