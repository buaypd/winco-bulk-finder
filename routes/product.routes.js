import { Router} from "express";
import { getAllProductsHandler } from "../controllers/product.controller.js";

const router = Router();

router.get("/", getAllProductsHandler);

export default router;