const express = require("express");

const app = express();

const travels = [
  { start: "Home", end: "Office", meter: 54652.1 },
  { start: "Office", end: "Customer 1", meter: 54692.5 },
  { start: "Customer 1", end: "Customer 2", meter: 54722.4 },
];

// Middlewares

app.use(express.json());

// Routes

const travelRouter = require("./routes/travelRoutes");

app.use("/api/v1/travels", travelRouter);
// app.use("/api/v1/users", userRouter);

module.exports = app;
