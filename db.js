const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

// const uri = "mongodb+srv://sahan:sahan@cluster0.mcmck.mongodb.net/travel-log?retryWrites=true&w=majority"
const db = process.env.MONGODB_URI;

mongoose.connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
// .then((conn) => {
//   console.log("MongoDB Connection Succesfull !");
// })
// .catch((err) => {
//   console.log(err);
// });

const database = mongoose.connection;

module.exports = database;
