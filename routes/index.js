const express = require("express");
const router = express.Router();


router.use("/user",require("./user"))
router.use("/admin", require("./admin"));
router.use("/blog", require("./blog"));


module.exports = router;
