const express = require("express");
const router = express.Router();


const cntlr = require("../controllers/api/v1");

router.use('/api/v1',require('./api/v1'));

module.exports = router;
