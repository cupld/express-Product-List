const express = require ("express");
const res = require("express/lib/response");
const productsRoute = require("./apis/products/routes");
const connectDB = require("./db/database");
const { logger, errorHandler, notFoundPage } = require("./middleware/middleware");
const ports = 800;
const app = express();
let products = require ("./products");
app.use(express.json());
app.use(logger)
app.use("/api/products",productsRoute);



app.get("/", (req,res) =>{
console.log("Hello");
res.json ({name: "Ahmed"});
})

app.use(errorHandler)

app.use(notFoundPage)


connectDB();
app.listen(8000 , () => {console.log("this app is running on port 8000 ")});