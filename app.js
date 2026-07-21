const express = require("express");
const expenseRoutes = require("./routes/expenseRoutes");

const app = express();

// Middleware
app.use(express.json());

// Home Route
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    project: "Expense Tracker API",
    version: "1.0.0",
    description: "A RESTful API for managing expenses built with Node.js and Express.",
    group: "Group 3 - Controllers",
    endpoints: {
      "GET /expenses": "Get all expenses",
      "GET /expenses/:id": "Get a single expense",
      "POST /expenses": "Create a new expense",
      "PUT /expenses/:id": "Update an expense",
      "DELETE /expenses/:id": "Delete an expense"
    }
  });
});

// Expense Routes
app.use("/expenses", expenseRoutes);

// 404 Route
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found."
  });
});

module.exports = app;
