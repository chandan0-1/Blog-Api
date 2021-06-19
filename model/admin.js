const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      default: "admin@gmail.com",
    },
    name: {
      type: String,
      required: true,
      default: "Admin4",
    },
    password: {
      type: String,
      required: true,
      default: "admin@123",
    },
  },
  {
    timestamps: true,
  }
);

const Admin = mongoose.model("Admin", adminSchema);
module.exports = Admin;
