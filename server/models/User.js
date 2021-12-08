const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false },
    // createdDate: { type: Date, required: true },
  },
  { timestamps: true } // Schema's 2nd param replace line 9
);

module.exports = mongoose.model('User', UserSchema);
