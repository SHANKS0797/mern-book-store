import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.route.js"
import cors from "cors";
dotenv.config();
const PORT = process.env.PORT
const app = express();

app.use(express.json());

app.use(cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"]
}))
app.use("/api/products", productRoutes);

app.listen(PORT, () => {
    connectDB();
})