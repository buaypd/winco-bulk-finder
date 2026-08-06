import { getAllProducts, getProductById, createProduct } from "../services/product.service.js";

export const getAllProductsHandler = (req, res) => {
  let productArray = getAllProducts();
  res.status(200).json(productArray);
}

export const getProductByIdHandler = (req, res) => {
  const id = Number(req.params.id);
  const product = getProductById(id);

  if(product){
    res.status(200).json(product);
  } else {
    res.status(404).json({
      message: `Product not found with id ${id}`
    });
  }
}

export const createProductHandler = (req, res) => {
const newProduct = createProduct(req.body);
res.status(201).json(newProduct);
}
