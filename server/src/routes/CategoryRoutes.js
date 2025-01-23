import express from 'express';
import { getCategories, addCategory } from '../controllers/CategoryController'; 

const router = express.Router();

router.get('/', getCategories); // Get all categories
router.post('/', addCategory); // Add a new category

export default router; // Export the router as the default export
