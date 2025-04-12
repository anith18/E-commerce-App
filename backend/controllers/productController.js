import { v2 as cloudinary } from "cloudinary";
import productModel from "../models/productModel.js";

const addProduct = async (req, res) => {
  try {
    const { name, description, price, category, subCategory, sizes, bestseller } = req.body;

    // Check if req.files exists
    if (!req.files) {
      return res.status(400).json({ success: false, message: "No files uploaded" });
    }

    // Get uploaded images safely
    const images = ["image1", "image2", "image3", "image4"]
      .map((key) => req.files[key]?.[0])
      .filter((item) => item !== undefined && item.path);

    // Upload images to Cloudinary
    let imagesUrl = await Promise.all(
      images.map(async (item) => {
        let result = await cloudinary.uploader.upload(item.path, { resource_type: 'image' });
        return result.secure_url;
      })
    );

    // Safely parse sizes
    let parsedSizes;
    try {
      parsedSizes = JSON.parse(sizes);
    } catch (err) {
      return res.status(400).json({ success: false, message: "Invalid sizes format" });
    }

    const productData = {
      name,
      description,
      category,
      price: Number(price),
      subCategory,
      bestseller: bestseller?.toString().toLowerCase() === "true",
      sizes: parsedSizes,
      image: imagesUrl,
      date: Date.now(),
    };

    console.log(productData);
    const product = new productModel(productData);
    await product.save();

    res.json({ success: true, message: "Product added successfully" });

  } catch (error) {
    console.error(error); // Log the actual error
    res.status(500).json({ success: false, message: error.message });
  }
};



// Function for listing products
const listProducts = async (req, res) => {
  console.log("hello entered here")
  try {
    const products = await productModel.find({});
    res.json({ success: true, products });
    console.log(products)
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: error.message });
  }
};



// Function for removing a product
const removeProduct = async (req, res) => {
  try {
    await productModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "Product Removed" });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: error.message });
  }
};

// Function for single product info
const singleProduct = async (req, res) => {
  try {
    const { productId } = req.body;
    const product = await productModel.findById(productId);

    if (!product) {
      return res.json({ success: false, message: "Product not found" });
    }

    res.json({ success: true, product });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: error.message });
  }
};

export { listProducts, addProduct, removeProduct, singleProduct };
