const express = require("express");
const router = express.Router();
const {fetchProducts,postProduct,deleteProduct} = require ("./controllers");
const product = require("../../products");

router.get("/", fetchProducts);

router.post("/", postProduct);

router.delete("/:productId", deleteProduct);

module.exports=router;