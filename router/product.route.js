import express from 'express';
import { getProducts, getProductById, createProduct, updateProduct, deleteProduct } from '../controllers/product.controller.js';

const router = express.Router();

router.get('/', getProducts);           // Get all products
router.get('/:id', getProductById);    // Get a single product by ID
router.post('/', createProduct);        // Create a new product
router.put('/:id', updateProduct);     // Update an existing product by ID
router.delete('/:id', deleteProduct);  // Delete a product by ID

export default router;
