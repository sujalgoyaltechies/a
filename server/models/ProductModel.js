const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    generation: {
      type: Number,
      
    },
    originalPrice: {
      type: Number,
      required: true,
      min: 0,
    },
    brand: {
      type: String,
      required: true,
    },
    model: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    condition: {
      type: String,
    },
    storage: {
      type: Number,
    },
    processor: String,
    memory: String,

    graphics: String,
    display: String,
    stockQuantity: {
      type: Number,
      required: true,
      min: 0,
    },
    Price: {
      type: Number,
      default: 0,
    },
    img: {
      type: String,
    },
    category: {
      type: String,
      required: true,
    },
    token: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
