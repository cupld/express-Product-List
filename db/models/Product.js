const mongoose = require("mongoose");
const mongooseSlugPlugin = require("mongoose-slug-plugin");

const ProductSchema = new mongoose.Schema({
name: {type: String, require: true},
image: {type: String},
description: {type: String},
color: {type: String},
quantity: {type: Number, min: 0},
price: {type: Number},
});

ProductSchema.plugin(mongooseSlugPlugin, { tmpl: "<%=name%>" });
module.exports = mongoose.model("Product", ProductSchema);