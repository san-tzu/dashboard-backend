const Travel = require("../models/travelModel");

exports.getAllTravels = async (req, res) => {
  try {
    const travels = await Travel.find();
    res.status(200).json({
      status: "Success!",
      count: travels.length,
       travels,
    });
  } catch (error) {
    res.status(404).json({
      status: "Faild!",
      message: error,
    });
  }
};

exports.createTravel = async (req, res) => {
  try {
    const newTravel = await Travel.create(req.body.formData);
    res.status(201).json({
      status: "Success!",
      newTravel,
    });
  } catch (error) {
    res.status(404).json({
      status: "Faild!",
      message: error,
    });
  }
};

exports.getOneTravel = async (req, res) => {
  try {
    const travel = await Travel.findById(req.params.id);
    res.status(200).json({
      status: "Success!",
      travel,
    });
  } catch (error) {
    res.status(404).json({
      status: "Faild!",
      message: error,
    });
  }
};

exports.updateTravel = async (req, res) => {
  try {
    const travel = await Travel.findByIdAndUpdate(req.params.id, req.body.formData, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: "Success!",
       travel,
    });
  } catch (error) {
    res.status(404).json({
      status: "Faild!",
      message: error,
    });
  }
};

exports.deleteTravel = async (req, res) => {
  try {
    await Travel.findByIdAndDelete(req.params.id);
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
