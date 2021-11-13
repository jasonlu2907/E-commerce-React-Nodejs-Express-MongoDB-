const express = require('express');
const CryptoJS = require('crypto-js');

const User = require('../models/User');
const userController = require('../controller/userController');
const {
  verifyToken,
  verifyTokenAndAuthorization,
} = require('../routes/verifyToken');

const userRouter = express.Router();
userRouter.get('/hello', (req, res) => res.send('Nhu con cac'));

userRouter
  .route('/')
  .get(userController.getAllUsers)
  .post(userController.createUser);

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

module.exports = userRouter;
