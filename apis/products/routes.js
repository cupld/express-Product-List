const express = require("express");
const router = express.Router();
const {fetchProducts,postProduct,deleteProduct, updateProduct, showProduct} = require ("./controllers");
const product = require("../../products");

router.param("productId", async (req, res, next, productId) => {
        const searchProduct  = await showProduct(productId, next);
        if(searchProduct){
            req.product = searchProduct;
            next();
        }
        else next({status: 404, message: "Product Not Found"})
})

router.get("/", fetchProducts);

router.post("/", postProduct);

router.delete("/:productId", deleteProduct);

router.put("/:productId", updateProduct);

module.exports=router;