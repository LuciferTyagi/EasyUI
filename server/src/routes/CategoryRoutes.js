const express = require('express');
const { getCategories, addCategory } = require('../controllers/CategoryController.js');

const router = express.Router();

router.get('/', getCategories); // Get all categories
router.post('/', addCategory); // Add a new category

module.exports = router; // Export the router using module.exports
