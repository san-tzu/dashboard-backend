const User = require("../models/userModel");

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({
      status: "Success!",
      count: users.length,
      users,
    });
  } catch (error) {
    res.status(404).json({
      status: "Faild!",
      message: error,
    });
  }
};

exports.getOneUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json({
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

exports.updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    res.status(200).json({
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

exports.deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: "Success!",
      data: null,
    });
  } catch (error) {
    res.status(404).json({
      status: "Faild!",
      message: error,
    });
  }
};
