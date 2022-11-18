const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });


// if (process.env.NODE_ENV === "development") {
//   // Local Database
//   const db = process.env.LOCAL_DB;
// } else {
//   // Atlas Database
//   const db = process.env.MONGODB_URI;
// }

  const db = process.env.LOCAL_DB;

mongoose.connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
// .then((conn) => {
//   console.log("MongoDB Connection Succesfull !");
// })
// .catch((err) => {
//   console.log(err);
// });

const database = mongoose.connection;

module.exports = database;
