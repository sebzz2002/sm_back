const mongoose = require("mongoose");

const Product = mongoose.Schema(
  {
    productName: {
      type: String,
      required: true,
      unique: true,
    },
    productPrice: {
      type: Number,
      required: true,
    },
    stockAvailable: {
      type: Number,
      required: true,
    },
    shouldWeigh: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamp: true,
  }
);

const model = mongoose.model("product", Product);

module.exports = model;
