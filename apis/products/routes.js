const express = require("express");
const router = express.Router();
const {fetchProducts,postProduct,deleteProduct, updateProduct} = require ("./controllers");
const product = require("../../products");

router.get("/", fetchProducts);

router.post("/", postProduct);

router.delete("/:productId", deleteProduct);

router.put("/:productId", updateProduct);

module.exports=router;