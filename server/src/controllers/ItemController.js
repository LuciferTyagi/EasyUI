import Category from "../models/Category.js";
import Item from "../models/Item.js";

export const getItemsByCategory = async (req, res) => {
  const { categoryId } = req.params;
  try {
    const items = await Item.find({ category: categoryId });
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const addItem = async (req, res) => {
  const { name,generalDetail, variations , categoryId } = req.body;
  try {
    const item = new Item({ name,generalDetail, variations, category: categoryId });
    await item.save();

    // Add item reference to category
    const category = await Category.findById(categoryId);
    category.items.push(item._id);
    await category.save();

    res.status(201).json(item);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const addVariationToItem = async (req, res) => {
  const { itemId } = req.params; // Item ID from the URL
  const { variations } = req.body; // New variations from the request body

  try {
    const item = await Item.findById(itemId);

    if (!item) {
      return res.status(404).json({ error: "Item not found" });
    }

    // Add new variations to the existing variations array
    item.variations.push(...variations);

    // Save the updated item
    await item.save();

    res.status(200).json(item);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};