const mongoose = require("mongoose");

const ExpenseSchema = new mongoose.Schema({
  income: {
    type: Number,
    required: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  expenses: [
    {
      category_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
      },
      item_name: {
        type: String,
        required: true
      },
      amount: {
        type: Number,
        required: true
      },
      created_at: {
        type: Date,
        default: Date.now
      },
      updated_at: {
        type: Date,
        default: Date.now
      }
    }
  ],
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at: {
    type: Date,
    default: Date.now
  },
  status: {
    type: Boolean,
    default: true
  }
});

module.exports = mongoose.model("expense", ExpenseSchema);
