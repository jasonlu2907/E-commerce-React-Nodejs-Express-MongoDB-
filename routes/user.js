const express = require('express');

const userRouter = express.Router();
const userController = require('../controller/userController');

userRouter.get('/hello', (req, res) => res.send('Nhu con cac'));

userRouter
  .route('/')
  .get(userController.getAllUsers)
  .post(userController.createUser);

module.exports = userRouter;
