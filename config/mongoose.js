const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/blog_api", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  createIndexes: true
});

const db = mongoose.connection;

db.on("err", console.error.bind("Error in Connecting to DB"));

db.once("open", () => {
  console.log("Connected to Database Successfully!!");
});
