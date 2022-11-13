exports.getAllTravels = (req, res) => {
  res.status(200).json({
    message: "success",
    data: { travels },
  });
};

exports.createTravel = (req, res) => {
  console.log(req.body);
  res.send("Done");
};
