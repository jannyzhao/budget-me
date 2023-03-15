const express = require("express");
const router = express.Router();

/* GET transactions listing. */
router.get("/", function (req, res, next) {
  res.json({
    message: "GET /api/transactions",
  });
});

module.exports = router;
