import Product from './models/productModel.js';
const productData = {
    name: "Leather Backpack",
    description: "A stylish leather backpack, perfect for daily use. Made from premium quality leather with a spacious interior.",
    category: "Accessories",
    imageUrl: "https://img.freepik.com/free-photo/brown-leather-backpack_144627-19252.jpg",
    stock: 75,  // Stock must be greater than 0
    gallery: [
      {
        url: "https://img.freepik.com/free-photo/brown-leather-backpack_144627-19252.jpg",
        altText: "Front view of a brown leather backpack"
      },
      {
        url: "https://img.freepik.com/free-photo/opened-brown-leather-backpack-showing-spacious-interior_144627-19253.jpg",
        altText: "Open brown leather backpack showing the interior"
      },
      {
        url: "https://img.freepik.com/free-photo/brown-leather-backpack-closeup_144627-19254.jpg",
        altText: "Close-up of the leather texture on the backpack"
      }
    ],
    variations: [
      {
        size: "Medium",
        color: "Brown",
        stock: 40,  // Stock must be greater than 0
        price: 59.99  // Price must be greater than 0
      },
      {
        size: "Large",
        color: "Brown",
        stock: 35,  // Stock must be greater than 0
        price: 79.99  // Price must be greater than 0
      }
    ],
    basePrice: 59.99,  // Base price must be greater than 0
    quantity: 1  // Quantity must be greater than 0
  };
  
  Product.create(productData)
    .then(product => {
      console.log('Product created:', product);
    })
    .catch(err => {
      console.error('Error creating product:', err);
    });
  