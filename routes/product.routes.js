import { Router} from "express";
import { getAllProductsHandler, getProductByIdHandler, createProductHandler, updatedProductHandler, replaceProductHandler, deleteProductHandler } from "../controllers/product.controller.js";

const router = Router();

router.get("/", getAllProductsHandler);
router.get("/:id", getProductByIdHandler);
router.post("/", createProductHandler);
router.patch("/:id", updatedProductHandler);
router.put("/:id", replaceProductHandler);
router.delete("/:id", deleteProductHandler);

export default router;