const { check } = require("express-validator");
const handleValidationErrors = require("./handleValidationErrors");

const validateTransactionInput = [
  check("date")
    .exists({ checkFalsy: true })
    .isISO8601()
    .toDate()
    .withMessage("Invalid date"),
  check("company")
    .exists({ checkFalsy: true })
    .isLength({ min: 2, max: 140 })
    .withMessage("Must enter name of company"),
  check("description")
    .exists({ checkFalsy: true })
    .isLength({ min: 2, max: 140 })
    .optional()
    .withMessage("Optional description must be between 2 and 140 characters"),
  check("type")
    .exists({ checkFalsy: true })
    .contains("income", "expense", "saving")
    .withMessage("Please select one of the options listed"),
  check("category")
    .exists({ checkFalsy: true })
    .contains(
      "paycheck",
      "saving",
      "car",
      "groceries",
      "insurance",
      "subscription",
      "miscellaneous",
      "entertainment",
      "dining out",
      "rent/mortgage",
      "household"
    )
    .withMessage("Please select one of the options listed"),
  check("amount")
    .exists({ checkFalsy: true })
    .matches(/^\$(\d{1, 3}(\, \d{3})*|(\d+))(\.\d{2})?$/)
    .withMessage("Amount should resemble $10.50"),
  handleValidationErrors,
];

module.exports = validateTweetInput;
