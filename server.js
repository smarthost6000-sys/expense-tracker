require("dotenv").config();

const app = require("./app");

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("==================================");
  console.log(" Expense Tracker API");
  console.log(" Server is running successfully");
  console.log(` Listening on port ${PORT}`);
  console.log(` URL: http://localhost:${PORT}`);
  console.log("==================================");
});
