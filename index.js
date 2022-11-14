const database = require("./db");
const PORT = process.env.PORT || 5000;

const app = require("./app");

// Database
database.on("error", console.error.bind(console, "Connection error: "));
database.once("open", () => console.log("Database Connection Successfull!"));

// Server

app.listen(PORT, () => {
  console.log("App running on port: " + PORT);
});
