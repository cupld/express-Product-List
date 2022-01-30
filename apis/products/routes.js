const express = require("express");
const router = express.Router();
const {fetchProducts,postProduct,deleteProduct} = require ("./controllers");
const product = require("../../products");

router.get("/", );

router.post("/", );

router.delete("/:productId", );

module.exports=router;