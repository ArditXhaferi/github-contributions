const express = require("express");
const router = express.Router();

/**
 * GET contributions list.
 *
 * @return contributions list | empty.
 */
router.get("/", async (req, res) => {
  try {
    res.json({
      status: 200,
      message: "Testing if this works",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server error");
  }
});

module.exports = router;
