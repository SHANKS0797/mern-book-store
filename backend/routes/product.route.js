import express from "express";
import { createProduct, deleteProduct, getProducts, updateProductInfo } from "../controller/product.controller.js";

const router = express.Router();
// -------------------- GET PRODUCT IN DB --------------------
router.get("/getProducts", getProducts)
// -------------------- CREATE PRODUCT IN DB --------------------
router.post("/createProduct", createProduct)
// -------------------- DELETE PRODUCT FROM DB --------------------
router.delete("/deleteProduct/:id", deleteProduct)
// -------------------- UPDATE PRODUCT FROM DB --------------------
router.put("/updateProduct/:id", updateProductInfo)

export default router;