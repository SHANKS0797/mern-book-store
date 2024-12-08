import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String, required: true
    },
    category: {
        type: String, required: true
    },
    author: {
        type: String, required: true
    },
    image: {
        type: String, required: true
    },
    price: {
        type: Number, required: true
    },
    publication: {
        type: String, required: true
    },
    releaseDate: {
        type: String, required: true
    },
    isLatest: {
        type: Boolean
    },
    isTrending: {
        type: Boolean
    },
    isBestSelling: {
        type: Boolean
    }
},
)

const Product = mongoose.model("Product", productSchema);
export default Product;