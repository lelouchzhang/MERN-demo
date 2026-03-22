import express from "express";

import {
  createProduct,
  deleteProductById,
  getAllProducts,
  updateProductById,
} from "../controllers/products.controller.js";

const router = express.Router();

router.get("/", getAllProducts);

router.post("/", createProduct);

router.put("/:id", updateProductById);

router.delete("/:id", deleteProductById);

export default router;
