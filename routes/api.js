const express = require("express");
const router = express.Router();

// diverting routes to the respective domain router
router.use("/api/user",require("./user"))
router.use("/api/admin", require("./admin"));
router.use("/api/blog", require("./blog"));


module.exports = router;
