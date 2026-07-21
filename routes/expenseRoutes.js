const express = require("express");
const router = express.Router();

const {
  getExpenses,
  getExpenseById,
  addExpense,
  updateExpense,
  deleteExpense
} = require("../controllers/expenseController");

// Get all expenses
router.get("/", getExpenses);

// Get one expense
router.get("/:id", getExpenseById);

// Add a new expense
router.post("/", addExpense);

// Update an expense
router.put("/:id", updateExpense);

// Delete an expense
router.delete("/:id", deleteExpense);

module.exports = router;
