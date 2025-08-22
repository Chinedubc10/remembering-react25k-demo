import axios from "axios";
import type { Product } from "../types/products";

export const getProducts = async (): Promise<Product[]> => {
    const response = await axios.get("https://fakestoreapi.com/products");
    return response.data;
};
