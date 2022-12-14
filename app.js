const express = require("express");
const cors = require('cors')

const app = express();

const travels = [
  { start: "Home", end: "Office", meter: 54652.1 },
  { start: "Office", end: "Customer 1", meter: 54692.5 },
  { start: "Customer 1", end: "Customer 2", meter: 54722.4 },
];

// Middlewares
app.use(cors())
app.use(express.json());

// Routes

const travelRouter = require("./routes/travelRoutes");
const userRouter = require("./routes/userRoutes");
const authRouter = require("./routes/authRoutes");

app.use("/api/v1", authRouter);
app.use("/api/v1/travels", travelRouter);
app.use("/api/v1/users", userRouter);

module.exports = app;
