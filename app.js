const express = require ("express");
const productsRoute = require("./apis/products/routes");
const connectDB = require("./db/database");
const app = express();
let products = require ("./products");
app.use(express.json());

app.use("/api/products",productsRoute);



app.get("/", (req,res) =>{
console.log("Hello");
res.json ({name: "Ahmed"});
})

connectDB();
app.listen(8000 , () => {console.log("this app is running on port 8000 ")});