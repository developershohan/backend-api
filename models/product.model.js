import mongoose from 'mongoose';

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
    }
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
    }
});

// Define the main product schema
const productSchema = new mongoose.Schema({
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
    gallery: [imageSchema], // Array of images
    variations: [variationSchema], // Array of variations (one per size/color combination)
    basePrice: {               // Added basePrice field
        type: Number,
        required: true,
        min: 0,
    },
    quantity: {  
        type: Number,
        required: true,
        min: 1,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
});

// Middleware to update the `updatedAt` field before each save
productSchema.pre('save', function (next) {
    this.updatedAt = Date.now();
    next();
});

const Product = mongoose.model('Product', productSchema);

export default Product;
