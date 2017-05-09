var express= require("express");
var router = express.Router();
var Blog = require("../models/blog");
var middleware = require("../middleware");

// INDEX ROUTE
router.get("/", function(req, res){
    Blog.find({}, function(err, allBlogs){
       if(err){
           console.log(err);
       } else{
           res.render("blogs/blog", {blogs: allBlogs, currentUser: req.user});
       }
    });
});

// CREATE ROUTE
router.post("/", middleware.isLoggedIn, function(req, res){
    var title = req.body.title;
    var subtitle = req.body.subtitle;
    var image = req.body.image;
    var content = req.body.content;
    var author = {
        id: req.user._id,
        username: req.user.username
    }
    var newBlog = {title: title, subtitle: subtitle, image: image, content: content, author: author};
    Blog.create(newBlog, function(err, newlyCreated){
        if(err){
            console.log(err);
        } else{
            res.redirect("/blog");
        }
    });
});

// NEW ROUTE
router.get("/new", middleware.isLoggedIn, function(req, res){
   res.render("blogs/new"); 
});

// SHOW ROUTE
router.get("/:id", function(req, res){
    Blog.findById(req.params.id).populate("comments").exec(function(err, foundBlog){
       if(err){
           console.log(err);
       } else {
           console.log(foundBlog);
           res.render("blogs/show", {blog: foundBlog}); 
       }
    });
});

// EDIT ROUTE
router.get("/:id/edit", middleware.checkRecipeOwnership, function(req, res){
        Blog.findById(req.params.id, function(err, foundBlog){
            res.render("blogs/edit", {blog: foundBlog});
        });
});

// UPDATE ROUTE
router.put("/:id", middleware.checkBlogOwnership, function(req, res){
    Blog.findByIdAndUpdate(req.params.id, req.body.blog, function(err, updatedBlog){
        if(err){
            res.redirect("/blog");
        } else {
            res.redirect("/blog/" + req.params.id);
        }
    });
});

// DESTROY ROUTE
router.delete("/:id", middleware.checkBlogOwnership, function(req, res){
    Blog.findByIdAndRemove(req.params.id, function(err){
        if(err){
            res.redirect("/blog");
        } else {
            res.redirect("/blog");
        }
    });
});

module.exports = router;