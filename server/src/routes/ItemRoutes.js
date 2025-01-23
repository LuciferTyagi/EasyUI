const express = require('express');
const { getItemsByCategory, addItem, addVariationToItem } = require('../controllers/ItemController.js');

const router = express.Router();

router.get('/:categoryId', getItemsByCategory); // Get items by category
router.post('/', addItem); // Add a new item
router.patch('/:itemId/variations', addVariationToItem); // Add variations to an item

module.exports = router; // Export the router using module.exports
