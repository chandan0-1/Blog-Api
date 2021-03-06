const express = require('express');
const port = process.env.PORT || 8001;
const bodyParser = require("body-parser");
const jwt = require('jsonwebtoken');

// Including Passport Strategy
const passport = require("passport");
const passportJWT = require("./config/passport-jwt");

const path = require("path");

// Creating the app instance
const app = express();

app.use("/", express.static(path.join(__dirname,'views')
  ));

// importing the db
const db = require("./config/mongoose");

// using body parser for Json 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// distributing the routes
app.use('/',require('./routes/api.js'))

app.get("/", function(req,res){
    return res.send("<h1> API is Ready, Please use Postman to test it !! </h1>");
});

app.listen(port, function(err){
  console.log(`Server is Running on the port no: ${port}`)
});

