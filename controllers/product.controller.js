import { getAllProducts } from "../services/product.service.js";

export const getAllProductsHandler = (req, res) => {
  let productArray = getAllProducts();
  res.status(200).json(productArray);
}