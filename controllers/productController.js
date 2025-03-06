import Product from "../models/Product.js";
import fs from 'fs';
import mongoose from "mongoose";


export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    return res.status(200).json(products);

  } catch (err) {
    return res.status(400).json({ message: `${err}` });
  }
}
export const getProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findById(id);
    return res.status(200).json(product);

  } catch (err) {
    return res.status(400).json({ message: `${err}` });
  }
}
export const addProduct = async (req, res) => {
  const { title, description, price, category } = req.body;
  try {
    await Product.create({
      title,
      description,
      price,
      category,
      image: req.imagePath
    });
    return res.status(200).json({ message: 'successfully product added' });
  } catch (err) {
    return res.status(400).json({ message: `${err}` });

  }
}



export const updateProduct = async (req, res) => {
  const { title, description, price, category } = req.body;
  const { id } = req.params;
  try {

    if (!mongoose.isValidObjectId(id)) return res.status(400).json({ message: 'invalid id' });

    const product = await Product.findById(id);
    if (!product) return res.status(404).json({ message: 'product not found' });
    product.title = title || product.title;
    product.description = description || product.description;
    product.price = price || product.price;
    product.category = category || product.category;

    if (req.imagePath) {
      fs.unlink(`./uploads${product.image}`, async (err) => {
        if (err) return res.status(400).json({ message: `${err}` });
        product.image = req.imagePath;
        await product.save();
        return res.status(200).json({ message: 'product updated successfully' });
      });

    } else {
      await product.save();
      return res.status(200).json({ message: 'product updated successfully' });

    }





  } catch (err) {
    return res.status(400).json({ message: `${err}` });
  }


}




export const removeProduct = async (req, res) => {
  const { id } = req.params;
  try {

    if (!mongoose.isValidObjectId(id)) return res.status(400).json({ message: 'invalid id' });

    const product = await Product.findById(id);
    if (!product) return res.status(404).json({ message: 'product not found' });

    await Product.findByIdAndDelete(id);
    fs.unlink(`./uploads${product.image}`, (err) => {
      if (err) return res.status(400).json({ message: `${err}` });
      return res.status(200).json({ message: 'product deleted successfully' });
    });



  } catch (err) {
    return res.status(400).json({ message: `${err}` });
  }
}


