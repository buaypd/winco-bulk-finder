import { Router} from "express";
import { getAllProductsHandler, getProductByIdHandler, createProductHandler } from "../controllers/product.controller.js";

const router = Router();

router.get("/", getAllProductsHandler);
router.get("/:id", getProductByIdHandler);
router.post("/", createProductHandler);


export default router;