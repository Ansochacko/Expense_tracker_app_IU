const dotenv = require("dotenv");
const sendMail = require("../helpers/SendMail");
const Expense = require("../models/Expense");
dotenv.config();

const expenseEmail = async () => {
  const expenses = await Expense.find({});
  const totalExpense = expenses.reduce(
    (acc, expense) => acc + expense.value, 0
  );
  if (totalExpense > 10000) {
    let messageoption = {
      from: process.env.EMAIL,
      to: process.env.ADMIN_EMAIL,
      subject: "Warning!",
      text: `The overall cost amounts to $10,000. Kindly go over your expenses.`
    };

    await sendMail(messageoption);
  }
};

module.exports = {
  expenseEmail
};
