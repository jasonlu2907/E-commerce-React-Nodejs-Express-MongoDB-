const express = require('express');
const CryptoJS = require('crypto-js');

const Product = require('../models/Product');
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require('../routes/verifyToken');

const productRouter = express.Router();

// -------- CREATE ---------
productRouter.route('/').post(verifyTokenAndAdmin, async (req, res) => {
  const newProduct = new Product(req.body);

  try {
    const savedProduct = await newProduct.save();
    res.status(200).json(savedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});

// ---------------- GET CÁCH 1-------------------
productRouter.route('/find/:id').get(async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET ALL PRODUCTS
productRouter.route('/').get(async (req, res) => {
  const queryNew = req.query.latest;
  const queryCategory = req.query.category;

  let products;
  try {
    if (queryNew) {
      products = await Product.find().sort({ createdAt: -1 }).limit(5);
    } else if (queryCategory) {
      products = await Product.find({
        categories: {
          $in: [queryCategory], // if queryCategory matches inside categories Array
        },
      });
    } else {
      products = await Product.find();
    }

    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
});

// ---------------- GET CÁCH 2-------------------
// productRouter
//   .route('/')
//   .get(userController.getAllUsers)
//   .post(userController.createUser);

// ---------------- UPDATE -------------------
productRouter.route('/:id').put(verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body, // SET EVERYTHING INSIDE THE BODY
      },
      { new: true }
    ); // RETURN a value for updatedUser
    res.status(200).json(updatedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});

// ---------------- DELETE -------------------
productRouter.route(':/id').delete(verifyTokenAndAdmin, async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json('Product has been deleted !');
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = productRouter;
