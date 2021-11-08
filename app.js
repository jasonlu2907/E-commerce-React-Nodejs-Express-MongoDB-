const express = require('express');
const app = express();

const userRouter = require('./routes/user');
const authRouter = require('./routes/auth');

app.use(express.json());

// API endpoints
app.use('/api/v1/users', userRouter);
app.use('/api/v1/auth', authRouter);

module.exports = app;