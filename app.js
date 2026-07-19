const express = require("express");
const app = express();

const expenseRoutes = require("./routes/expenseRoutes");

app.use(express.json());

app.use("/expenses", expenseRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to the Expense Tracker API");
});

module.exports = app;

