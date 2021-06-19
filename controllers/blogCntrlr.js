let User = require("../model/user");
let Blog = require("../model/blog");

//-------------------- Creating a new Blog --------------------
module.exports.create = async function (req, res) {
  try {
    Blog.create(
      {
        title: req.body.title,
        author: req.user._id,
        content: req.body.content,
      },
      function (err, blog) {
        if (err) {
          return res.status(401).json({
            message: "Error in creating the blog",
          });
        }
      }
    );
    return res.status(200).json({
      message: "Blog Created Successfully",
    });
  } catch (err) {
    if (err)
      return res.status(500).json({
        message: "Internal Server Error",
      });
  }
};

// to get all the blog with only title and author 
module.exports.showAll = async function (req, res) {
  try {

    let blog = await Blog.find({}).sort("-createdAt").populate("author")
    // pusing title and Author in a arr so that in the ouput only author and title will visible
    var arr = []
    for (i of blog){
      arr.push({
        title:i.title,
        author: i.author.name
      })
    }
    return res.status(200).send(arr)

  } catch (err) {
    if (err) {
      return res.status(500).json({
        message: "Internal Server Error",
      });
    }
  }
};

// to get all the blog with all field so that we can get the id  
// of a blog post and fetch that only one blog using his id

module.exports.allBlog = async function (req, res) {
  try {
    let blog = await Blog.find({}).sort("-createdAt")//.populate("author");
    // pusing title and Author in a arr so that in the ouput only author and title will visible

    return res.status(200).send(blog);

  } catch (err) {
    if (err) {
      return res.status(500).json({
        message: "Internal Server Error",
      });
    }
  }
};



// ---------------------getting a single blog by using his id----------------//
module.exports.findOne = async function (req, res) {
  let blog = await Blog.findById(req.params.id).populate("author");

  if (blog){
    return res.status(200).json({
      Title: blog.title,
      Author: blog.author.name,
      Content: blog.content
    })
  }
  else{
    return res.status(404).json({
      message : "Blog not found!!"
    })
  }
};


//--------------- Updating a Single Blog using his ID-------------------------//
module.exports.update = async function(req, res){
  // Checking if request is valid
  if (!req.body.content){
    return res.status(400).json({
      message : "Blog Title and Content can not Empty!!"
    })
  }

  try{
    // if found then update
    let blog = await Blog.findByIdAndUpdate(req.params.id, {
      title: req.body.title,
      content : req.body.content
    }, {new:true})

    // if not found then
    if (!blog) {
      return res.status(404).json({
        message: "Cannot found the blog with Specified ID",
      });
    }
    // passing {new: true} so that can send updated blog
    return res.send(blog)

}catch(err){
  return res.status(501).json({
    message: "Internal Server Error !!"
  }); 
}}



//--------------- Deleting a Single Blog using his ID-------------------------//
module.exports.delete = async function (req, res) {
  try {
    // if found then update
    let blog = await Blog.findByIdAndDelete(req.params.id);
    
    if (!blog){
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
      message: "Internal Server Error !!",
    });
  }
};

