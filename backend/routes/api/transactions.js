const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = mongoose.model("User");
const Transaction = mongoose.model("Transaction");
const { requireUser } = require("../../config/passport");
const validateTransactionInput = require("../../validations/transactions");

router.get("/user/:userId", async (req, res, next) => {
  let user;
  try {
    user = await User.findById(req.params.userId);
  } catch (err) {
    const error = new Error("User not found");
    error.statusCode = 404;
    error.errors = { message: "No user found with that id" };
    return next(error);
  }
  try {
    const transactions = await Transaction.find({ user: user._id })
      .sort({ createdAt: -1 })
      .populate("user", "_id username");

    const monthlyIncome = transactions
      .filter((transaction) => transaction.type === "Income")
      .reduce((total, transaction) => total + transaction.amount, 0);

    const amountSpent = transactions
      .filter((transaction) => transaction.type === "Expense")
      .reduce((total, transaction) => total + transaction.amount, 0);

    const monthlySavings = transactions
      .filter((transaction) => transaction.type === "Saving")
      .reduce((total, transaction) => total + transaction.amount, 0);

    const balance = monthlyIncome - amountSpent - monthlySavings;

    const calculations = { monthlyIncome, amountSpent, balance };

    return res.json({ calculations, transactions });
  } catch (err) {
    return res.json({ calculations: {}, transactions: [] });
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const transaction = await Transaction.findById(req.params.id).populate(
      "user",
      "_id username"
    );
    return res.json(transaction);
  } catch (err) {
    const error = new Error("Transaction not found");
    error.statusCode = 404;
    error.errors = { message: "No transaction found with that id" };
    return next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const transaction = await Transaction.findById(req.params.id);
    if (!transaction) {
      const error = new Error("Transaction not found");
      error.statusCode = 404;
      error.errors = { message: "No transaction found with that id" };
      return next(error);
    }
    await transaction.deleteOne();
    return res.json({ message: "Transaction deleted successfully" });
  } catch (err) {
    next(err);
  }
});

router.post(
  "/",
  requireUser,
  validateTransactionInput,
  async (req, res, next) => {
    try {
      const newTransaction = new Transaction({
        date: req.body.date,
        company: req.body.company,
        description: req.body.description,
        type: req.body.type,
        category: req.body.category,
        amount: req.body.amount,
        user: req.user._id,
      });

      let transaction = await newTransaction.save();
      transaction = await transaction.populate("user", "_id username");
      return res.json(transaction);
    } catch (err) {
      next(err);
    }
  }
);

router.patch("/:id", async (req, res, next) => {
  try {
    const transaction = await Transaction.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    ).populate("user", "_id username");
    return res.json(transaction);
  } catch (err) {
    const error = new Error("Transaction not found");
    error.statusCode = 404;
    error.errors = { message: "No transaction found with that id" };
    return next(error);
  }
});

module.exports = router;
