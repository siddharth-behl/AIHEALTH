const {
  health_bot_home,
  condition_to_database,
  dataSort,
} = require("../controllers");
const express = require("express");
const router = express.Router();

router.get("/", health_bot_home);
router.post("/condition", condition_to_database);
router.get("/api/dataSort", dataSort);

module.exports = router;