# Expense Tracker API

## Overview

The Expense Tracker API is a RESTful API built with **Node.js** and **Express.js**. It allows users to manage their daily expenses through Create, Read, Update, and Delete (CRUD) operations.

---

## Features

- View all expenses
- View a single expense
- Add a new expense
- Update an existing expense
- Delete an expense
- Input validation
- JSON responses
- RESTful API design

---

## Technologies Used

- Node.js
- Express.js
- JavaScript
- dotenv

---

## Project Structure

```
expense-tracker/
│
├── controllers/
│   └── expenseController.js
│
├── data/
│   └── expenses.js
│
├── routes/
│   └── expenseRoutes.js
│
├── app.js
├── server.js
├── .env
├── package.json
├── package-lock.json
└── README.md
```

---

## Installation

Clone the repository:

```bash
git clone https://github.com/smarthost6000-sys/expense-tracker.git
```

Install dependencies:

```bash
npm install
```

Run the application:

```bash
npm start
```

The server will start at:

```
http://localhost:3000
```

---

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | / | API Information |
| GET | /expenses | Get all expenses |
| GET | /expenses/:id | Get one expense |
| POST | /expenses | Create a new expense |
| PUT | /expenses/:id | Update an expense |
| DELETE | /expenses/:id | Delete an expense |

---

## Example Request

```json
{
  "amount": 5000,
  "category": "Food",
  "description": "Lunch at restaurant",
  "date": "2026-07-15"
}
```

---

## Team

**Group 3 – Controllers**

Project developed by **Group 3 Members**.

---

## License

This project is for educational purposes.
