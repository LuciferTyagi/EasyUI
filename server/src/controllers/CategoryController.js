import Category from "../models/Category.js";

export const getCategories = async (req, res) => {
  try {
    const categories = await Category.find().populate('items'); // Fetch with items
    res.json(categories);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const addCategory = async (req, res) => {
  const { name } = req.body;
  try {
    const category = new Category({ name });
    await category.save();
    res.status(201).json(category);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
