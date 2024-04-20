const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  productId: {
    type: String,
  },
  description: {
    type: String,
  },
  category: {
    type: [String],
  },
  store: {
    type: String,
    default: "web",
    required: true,
  },
  brand: {
    type: String,
  },
  imageUrl: [
    {
      name: { type: String },
      url: { type: String },
      public_id: { type: String },
    },
  ],
  variants: [
    {
      name: { type: String },
      description: { type: String },
      size: [
        {
          size: { type: String },
          price: { type: Number },
          stock: { type: Number },
        },
      ],
    },
  ],
  // status: {
  //   type: String,
  //   enum: ["publik", "arsip"],
  //   required: true,
  //   default: "publik",
  // },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
