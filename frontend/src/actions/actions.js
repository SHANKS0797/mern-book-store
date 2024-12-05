import axios from "axios";

export const createProduct = async (payload) => {
    const res = await axios.post("/api/products/createProduct", payload)
    return res.data;
}

export const getProductsList = async () => {
    const res = await axios.get("/api/products/getProducts")
    return res.data;
}