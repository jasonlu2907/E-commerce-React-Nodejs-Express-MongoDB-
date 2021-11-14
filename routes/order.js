const express = require('express');

const Order = require('../models/Order');
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require('../routes/verifyToken');

const orderRouter = express.Router();

// -------- CREATE ---------
orderRouter.route('/').post(verifyToken, async (req, res) => {
  const newOrder = new Order(req.body);

  try {
    const savedOrder = await newOrder.save();
    res.status(200).json(savedOrder);
  } catch (err) {
    res.status(500).json(err);
  }
});

// ---------------- GET CÁCH 1-------------------
// GET USER ORDERS
orderRouter
  .route('/find/:userId')
  .get(verifyTokenAndAuthorization, async (req, res) => {
    try {
      const orders = await Order.find({ userId: req.params.userId });
      res.status(200).json(orders);
    } catch (err) {
      res.status(500).json(err);
    }
  });

// GET ALL TYPE OF ORDERS, Only admin can do this.
orderRouter.route('/').get(verifyTokenAndAdmin, async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json(err);
  }
});

// ---------------- GET CÁCH 2-------------------
// orderRouter
//   .route('/')
//   .get(userController.getAllUsers)
//   .post(userController.createUser);

// ---------------- UPDATE -------------------
orderRouter.route('/:id').put(verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body, // SET EVERYTHING INSIDE THE BODY
      },
      { new: true }
    ); // RETURN a value for updatedUser
    res.status(200).json(updatedOrder);
  } catch (err) {
    res.status(500).json(err);
  }
});

// ---------------- DELETE -------------------
orderRouter.route(':/id').delete(verifyTokenAndAdmin, async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.params.id);
    res.status(200).json('Order has been deleted !');
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET MONTHLY INCOME
orderRouter.route('/income').get(verifyTokenAndAdmin, async (req, res) => {
  const date = new Date();
  const lastMonth = new Date(date.setMonth(date.getMonth() - 1)); // Last year since today
  const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));

  try {
    const income = await Order.aggregate([
      { $match: { createdAt: { $gte: previousMonth } } },
      { $project: { month: { $month: '$createdAt' }, sales: '$amount' } },
      {
        $group: {
          _id: '$month',
          total: { $sum: '$sales' },
        },
      },
    ]);

    res.status(200).json(income);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = orderRouter;
