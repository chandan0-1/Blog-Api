const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/blog_api", {
  useCreateIndex: true,
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

const db = mongoose.connection;

db.on("err", console.error.bind("Error in Connecting to DB"));

db.once("open", () => {
  console.log("Connected to Database Successfully!!");
});
