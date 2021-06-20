let Admin = require("../model/admin");
let Blog = require("../model/blog");
const jwt = require("jsonwebtoken");

//----------------- Creating a admin user--------
module.exports.create = async (req, res) => {
  const { email, password } = req.body;
  const admin = await Admin.findOne({ email });

  if (admin) {
    return res.status(401).json({
      Message: "Admin already Exists",
    });
  }
  Admin.create({email,password});
  return res.status(200).json({
    message: "Admin Created Successfully",
  });
};



// ----------creating session / doing login as Admin---------
module.exports.login = async (req, res) => {
  const { email, password } = req.body;

// if body is incomplete 
  if (!req.body.email || !req.body.password) {
    return res.status(400).json({
      message: "Please fill all the required fields !!",
    });
  }

  const secret_key = "blogapitest";

  try {
    const admin = await Admin.findOne({ email});

    console.log(admin);
    if (!admin){
      return res.status(404).json({
        message: "Invalid Username/Password!",
      });

    }

    if (admin.password == password) {
      return res.status(200).json({
        message: "Login as Admin Successfully",
        token: jwt.sign(admin.toJSON(), secret_key, { expiresIn: 10000 }),
      });
    }
  } catch (err) {
    return res.status(501).json({
      Error: err || "Internal Server Error",
    });
  }
};


// Controller function to delete a single blog using his id
module.exports.deleteOne = async function (req, res) {
  try {
    // if found then update
    let blog = await Blog.findByIdAndRemove(req.params.id);

    if (!blog) {
      return res.status(404).json({
        message: "Cannot found the blog with Specified ID",
      });
    }

    // if found and Deleted
    return res.status(200).json({
      message: "Blog Deleted Successfully",
    });
  } catch (err) {
    return res.status(501).json({
      message: err || "Internal Server Error !!",
    });
  }
};
