const User = require("../models/userModel");
const bcrypt = require("bcrypt");

exports.registerUser = async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashPass = await bcrypt.hash(req.body.password, salt);
    
    const user = await User.create({
      username: req.body.username,
      password: hashPass,
      role: req.body.role,
    });
    res.status(201).json({
      status: "Success!",
      user,
    });
  } catch (error) {
    res.status(404).json({
      status: "Faild!",
      message: error,
    });
  }
};
