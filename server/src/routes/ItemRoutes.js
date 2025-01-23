import express from 'express';
import { getItemsByCategory, addItem ,addVariationToItem} from '../controllers/ItemController.js'; 

const router = express.Router();

router.get('/:categoryId', getItemsByCategory); // Get items by category
router.post('/', addItem); // Add a new item
router.patch('/:itemId/variations', addVariationToItem);
export default router; // Export the router as the default export
