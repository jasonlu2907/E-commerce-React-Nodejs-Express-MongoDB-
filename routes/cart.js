const express = require('express');

const Cart = require('../models/Cart');
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require('../routes/verifyToken');

const cartRouter = express.Router();

// -------- CREATE ---------
cartRouter
  .route('/')
  .post(verifyToken, async (req, res) => {
    console.log(req);
    const newCart = new Cart(req.body);

    try {
      const savedCart = await newCart.save();
      res.status(200).json(savedCart);
    } catch (err) {
      res.status(500).json(err);
    }
  });

// ---------------- GET CÁCH 1-------------------
// GET USER CART
cartRouter
  .route('/find/:userId')
  .get(verifyTokenAndAuthorization, async (req, res) => {
    try {
      const cart = await Cart.findOne({ userId: req.params.userId });
      res.status(200).json(cart);
    } catch (err) {
      res.status(500).json(err);
    }
  });

// GET ALL CARTS, Only admin can do this.
cartRouter.route('/').get(verifyTokenAndAdmin, async (req, res) => {
  try {
    const carts = await Cart.find();
    res.status(200).json(carts);
  } catch (err) {
    res.status(500).json(err);
  }
})

// ---------------- GET CÁCH 2-------------------
// cartRouter
//   .route('/')
//   .get(userController.getAllUsers)
//   .post(userController.createUser);

// ---------------- UPDATE -------------------
cartRouter.route('/:id').put(verifyTokenAndAuthorization, async (req, res) => {
  try {
    const updatedCart = await Cart.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body, // SET EVERYTHING INSIDE THE BODY
      },
      { new: true }
    ); // RETURN a value for updatedUser
    res.status(200).json(updatedCart);
  } catch (err) {
    res.status(500).json(err);
  }
});

// ---------------- DELETE -------------------
cartRouter
  .route(':/id')
  .delete(verifyTokenAndAuthorization, async (req, res) => {
    try {
      await Cart.findByIdAndDelete(req.params.id);
      res.status(200).json('Cart has been deleted !');
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = cartRouter;
