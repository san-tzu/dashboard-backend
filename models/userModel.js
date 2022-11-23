const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      min: 4,
      max: 12,
      unique: true,
      required: [true, "User Name is required"],
    },
    password: {
      type: String,
      min: 8,
      required: [true, "Password is required"],
    },
    role: {
      type: String,
      required: [true, "Role Name is required"],
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
