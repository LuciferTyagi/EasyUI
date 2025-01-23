const mongoose = require("mongoose");

const variationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  details: { type: String, required: true },
  code: { type: String, required: true },
});

const itemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  generalDetail: { type: String, required: true },
  variations: [variationSchema],
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
});

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;
