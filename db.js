const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

// Local Database
const db = process.env.LOCAL_DB

// Atlas Database
// const db = process.env.MONGODB_URI;

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
