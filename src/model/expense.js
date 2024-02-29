const mongoose = require("mongoose");

const ExpenseSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  incomeId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  itemName: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  description: String
});

const Expense = mongoose.model("Expense", ExpenseSchema);

module.exports = Expense;

