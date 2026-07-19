# Expense Tracker API

## Description
The Expense Tracker API is a simple REST API built with Express.js. It allows users to manage their expenses by adding, viewing, updating, and deleting expense records.

## Features
- Add a new expense
- View all expenses
- View a single expense by ID
- Update an existing expense
- Delete an expense

## Project Structure

```
expense-tracker/
├── data/
│   └── expenses.js
├── controllers/
│   └── expenseController.js
├── routes/
│   └── expenseRoutes.js
├── app.js
├── server.js
├── .env
└── README.md
```

## Installation

```bash
npm install
```

## Run the Project

```bash
npm start
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /expenses | Get all expenses |
| GET | /expenses/:id | Get a single expense |
| POST | /expenses | Add a new expense |
| PUT | /expenses/:id | Update an expense |
| DELETE | /expenses/:id | Delete an expense |

## Technologies Used
- Node.js
- Express.js
- JavaScript
