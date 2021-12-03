const express = require('express');
const CryptoJS = require('crypto-js');

const User = require('../models/User');
const userController = require('../controller/userController');
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require('../routes/verifyToken');

const userRouter = express.Router();

// ---------------- GET CÁCH 1-------------------
userRouter.route('/find/:id').get(verifyTokenAndAdmin, async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, ...others } = user._doc; // mongodb để các thông tin khác trong property _doc

    res.status(200).json({ ...others });
  } catch (err) {
    res.status(500).json(err);
  }
});

userRouter.route('/').get(verifyTokenAndAdmin, async (req, res) => {
  const query = req.query.latest;

  try {
    const users = query
      ? await User.find().sort({ _id: -1 }).limit(1) // Only return 1 latest user
      : await User.find();

    res.status(200).json({ users });
  } catch (err) {
    res.status(500).json(err);
  }
});

// ---------------- GET CÁCH 2-------------------
// userRouter
//   .route('/')
//   .get(userController.getAllUsers)
//   .post(userController.createUser);

// ---------------- UPDATE -------------------
userRouter.route('/:id').put(verifyTokenAndAuthorization, async (req, res) => {
  // If user changes their password, have to encrypt so that we can decrypt to compare hashedpass & the original
  if (req.body.password) {
    req.body.password = CryptoJS.AES.encrypt(
      req.body.password,
      process.env.SECRET_PASSWORD
    ).toString();
  }

  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body, // SET EVERYTHING INSIDE THE BODY
      },
      { new: true }
    ); // RETURN a value for updatedUser
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

// ---------------- DELETE -------------------
userRouter
  .route('/:id')
  .delete(verifyTokenAndAuthorization, async (req, res) => {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json('User has been deleted !');
    } catch (err) {
      res.status(500).json(err);
    }
  });

// ---------------- GET USER STATS -------------------
userRouter.route('/stats').get(verifyTokenAndAdmin, async (req, res) => {
  const date = new Date();
  const lastYear = new Date(date.setFullYear(date.getFullYear() - 1)); // Last year since today

  try {
    const data = await User.aggregate([
      { $match: { createdAt: { $gte: lastYear } } },
      {
        $project: {
          month: { $month: '$createdAt' },
        },
      },
      {
        $group: { // Giá trị mà biến data trả về
          _id: '$month',
          total: { $sum: 1 },
        },
      },
    ]);

    res.status(200).json(data)
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = userRouter;
