const express = require('express');
const router = express.Router();
const passport = require('passport');

const cntlrApi = require("../../../controllers/api/v1/index");
router.get("/home", cntlrApi.home);
router.post("/create", cntlrApi.create);
router.post(
  "/create-session",
  cntlrApi.createSession
);


module.exports = router
