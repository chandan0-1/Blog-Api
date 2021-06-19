const User = require("../model/user");
const jwt = require("jsonwebtoken");

// test controller 
module.exports.home = function (req, res) {
  return res.json(200, {
    message: "Hello from API's",
    post: [],
  });
};

// User sing-up Controller
module.exports.create = async function (req, res) {
  if (!req.body.name || !req.body.email || !req.body.password) {
    return res.status(400).send({
      message: "Please fll all fields!!",
    });
  }

  try {
    // Checking if user present in the DataBase
    let user = await User.findOne({ email: req.body.email });

    // if user not present in the dataBase then creatiing one
    if (!user) {
      User.create(req.body, function (user) {
        // console.log("User", req.body);
        return res.status(200).send({
          message: "User created Successfully!!",
        });
      });
    } else {
      return res.status(400).json({
        message: "User already Exists",
      });
    }
  } catch (err) {
    return res.status(500).json({
      status: "500",
      message: err || "Error in creating User",
    });
  }
};


// ----------Sign in user
module.exports.createSession = async (req, res) => {

    if (!req.body.email || !req.body.password) {
      return res.status(400).json({
        message: "Please fill all the required fields !!",
      });
    }
  const { email, password } = req.body;
  const secret_key = "blogapitest";

  try {
    let user = await User.findOne({ email });

    if (!user || user.password != password) {
      return res.status(401).json({
        Message: "Invalid Username/Password",
      });
    }

    if (user.password == password) {
      return res.status(200).json({
        Message: "Login Successfully!!",
        token: jwt.sign(user.toJSON(), secret_key, { expiresIn: 10000 }),
      });
    }
  } catch (err) {
    console.log("Error", err);
    return res.status(500).json({
      Message: "Internal Server Error",
    });
  }
};
