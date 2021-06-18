const express = require("express");
const router = express.Router();

const userCntrlr = require("../controllers/userCntrlr");

router.get("/home", userCntrlr.home);
router.post("/create", userCntrlr.create);
router.post("/login", userCntrlr.createSession);

module.exports = router;
