import mongoose from "mongoose";
import Product from "../models/product.model.js";

// -------------------- GET PRODUCT IN DB --------------------
export const getProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json({ success: true, data: products });
    } catch (error) {
        res.status(500).json({ success: false, message: "Server Error" })
    }
}
// -------------------- CREATE PRODUCT IN DB --------------------
export const createProduct = async (req, res) => {
    const product = req.body
    if (!product.name || !product.category || !product.author || !product.image || !product.image || !product.price || !product.price || !product.publication || !product.releaseDate) {
        return res.status(400).json({ success: false, message: "Please enter valid data" })
    }
    const newProduct = new Product(product)
    try {
        await newProduct.save();
        res.status(201).json({ success: true, data: newProduct })
    } catch (error) {
        res.status(500).json({ success: false, message: "Internal Server Error" })
    }
}
// -------------------- DELETE PRODUCT FROM DB --------------------
export const deleteProduct = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success: false, message: "Product not found" })
    }
    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: "Product deleted" })
    } catch (error) {
        res.status(500).json({ success: false, message: "Server Error" })
    }
}
// -------------------- UPDATE PRODUCT FROM DB --------------------
export const updateProductInfo = async (req, res) => {
    const { id } = req.params;
    const product = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success: false, message: "Product not found" })
    }
    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, product, { new: true })
        res.status(200).json({ success: true, data: updatedProduct })
    } catch (error) {
        res.status(500).json({ success: false, message: "Server Error" })
    }
}