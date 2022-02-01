const express = require ("express");
const res = require("express/lib/response");
const productsRoute = require("./apis/products/routes");
const connectDB = require("./db/database");
const ports = 800;
const app = express();
let products = require ("./products");
app.use(express.json());
app.use((req,res,next) => {
    console.log(`${req.method} ${req.protocol}://${req.hostname}:${ports}${req.path}`);
    next();
})
app.use("/api/products",productsRoute);



app.get("/", (req,res) =>{
console.log("Hello");
res.json ({name: "Ahmed"});
})

app.use((req, res, next) => {
    res.status(404).json({message: "path not found"});
    next();
})

app.use((err, req, res, next) => {
    res.status(err.status || 500)
    .json({message: err.message || "Internal Server Error" });
    next();
})


connectDB();
app.listen(8000 , () => {console.log("this app is running on port 8000 ")});