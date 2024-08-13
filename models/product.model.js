import mongoose from "mongoose";

// Define the schema for a single variation
const variationSchema = new mongoose.Schema({
  size: {
    type: String,
    required: true,
    trim: true,
  },
  color: {
    type: String,
    required: true,
    trim: true,
  },
  stock: {
    type: Number,
    required: true,
    min: 0,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
});

// Define the schema for the product image gallery
const imageSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true,
  },
  altText: {
    type: String,
    trim: true,
  },
});

// Define the main product schema
const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    category: {
      type: String,
      required: true,
      trim: true,
    },
    imageUrl: {
      type: String,
      required: false,
    },
    stock: {
      type: Number,
      required: true,
    },
    basePrice: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    gallery: [imageSchema],
    variations: [variationSchema],
  },
  { timestamps: true }
);


const Product = mongoose.model("Product", productSchema);

export default Product;
