const express = require("express");
const router = express.Router();
const passport = require("passport");

const blogCntrlr = require("../controllers/blogCntrlr");

// Routes for a new blog
router.post("/create", passport.authenticate('jwt', {session: false}), blogCntrlr.create)

// to get all the blog with only title and author 
router.get("/showAll",passport.authenticate("jwt", { session: false }),blogCntrlr.showAll);


// to get all the blog with all field so that we can get the id  
// of a blog post and fetch that only one blog using his id
router.get("/all-blog",passport.authenticate("jwt", { session: false }),blogCntrlr.allBlog);

// getting a single blog by using his id
router.get(
  "/get-one/:id",
  passport.authenticate("jwt", { session: false }),
  blogCntrlr.findOne
);
router.put(
  "/update/:id",
  passport.authenticate("jwt", { session: false }),
  blogCntrlr.update
);

router.delete(
  "/delete/:id",
  passport.authenticate("jwt", { session: false }),
  blogCntrlr.delete
);



module.exports = router;
