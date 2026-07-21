const expenses = require("../data/expenses");

// Get all expenses
exports.getExpenses = (req, res) => {
  res.json(expenses);
};

// Get expense by ID
exports.getExpenseById = (req, res) => {
  const id = parseInt(req.params.id);
  const expense = expenses.find(e => e.id === id);

  if (!expense) {
    return res.status(404).json({
      message: "Expense not found."
    });
  }

  res.json(expense);
};

// Add a new expense
exports.addExpense = (req, res) => {
  const { amount, category, date } = req.body;

  if (!amount || !category || !date) {
    return res.status(400).json({
      message: "Amount, category and date are required."
    });
  }

  const newExpense = {
    id: expenses.length + 1,
    amount,
    category,
    date
  };

  expenses.push(newExpense);

  res.status(201).json({
    message: "Expense added successfully.",
    expense: newExpense
  });
};

// Update an expense
exports.updateExpense = (req, res) => {
  const id = parseInt(req.params.id);

  const expense = expenses.find(e => e.id === id);

  if (!expense) {
    return res.status(404).json({
      message: "Expense not found."
    });
  }

  const { amount, category, date } = req.body;

  if (amount !== undefined) expense.amount = amount;
  if (category !== undefined) expense.category = category;
  if (date !== undefined) expense.date = date;

  res.json({
    message: "Expense updated successfully.",
    expense
  });
};

// Delete an expense
exports.deleteExpense = (req, res) => {
  const id = parseInt(req.params.id);

  const index = expenses.findIndex(e => e.id === id);

  if (index === -1) {
    return res.status(404).json({
      message: "Expense not found."
    });
  }

  expenses.splice(index, 1);

  res.json({
    message: "Expense deleted successfully."
  });
};
