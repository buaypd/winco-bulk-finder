import { getAllProducts, getProductById, createProduct, updateProduct } from "../services/product.service.js";

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

export const updatedProductHandler = (req, res) => {
  const id =  Number(req.params.id);

  const updatedProduct = updateProduct(id, req.body);

  if (!updatedProduct) {
    return res.status(404).json({
      message: "Product not found"
    });
  }

  res.status(200).json(updatedProduct);
}

export const replaceProductHandler = (req, res) => {
  const product = replaceProduct(req.params.id, req.body);
  if (!product) return res.status(404).json({ message: "Product not found" });
  res.json(product);
};

export const deleteProductHandler = (req, res) => {
  const deleted = deleteProduct(req.params.id);
  if (!deleted) return res.status(404).json({ message: "Product not found" });
  res.json(deleted);
};
