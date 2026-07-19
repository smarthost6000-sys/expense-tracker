const expenses = require("../data/expenses");

exports.getExpenses = (req, res) => {
  res.json(expenses);
};

exports.getExpenseById = (req, res) => {
  const id = parseInt(req.params.id);
  const expense = expenses.find(e => e.id === id);

  if (!expense) {
    return res.status(404).json({ message: "Expense not found" });
  }

  res.json(expense);
};

exports.addExpense = (req, res) => {
  const { amount, category, date } = req.body;

  const newExpense = {
    id: expenses.length + 1,
    amount,
    category,
    date
  };

  expenses.push(newExpense);
  res.status(201).json(newExpense);
};

exports.updateExpense = (req, res) => {
  const id = parseInt(req.params.id);
  const expense = expenses.find(e => e.id === id);

  if (!expense) {
    return res.status(404).json({ message: "Expense not found" });
  }

  const { amount, category, date } = req.body;

  expense.amount = amount || expense.amount;
  expense.category = category || expense.category;
  expense.date = date || expense.date;

  res.json(expense);
};

exports.deleteExpense = (req, res) => {
  const id = parseInt(req.params.id);
  const index = expenses.findIndex(e => e.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Expense not found" });
  }

  expenses.splice(index, 1);

  res.json({ message: "Expense deleted successfully" });
};
