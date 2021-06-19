const express = require("express");
const router = express.Router();

// diverting routes to the respective domain router
router.use("/user",require("./user"))
router.use("/admin", require("./admin"));
router.use("/blog", require("./blog"));


module.exports = router;
