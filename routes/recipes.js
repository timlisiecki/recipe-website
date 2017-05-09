var express= require("express");
var router = express.Router();
var Recipe = require("../models/recipe");
var middleware = require("../middleware");

// INDEX ROUTE
router.get("/", function(req, res){
    Recipe.find({}, function(err, allRecipes){
       if(err){
           console.log(err);
       } else{
           res.render("recipes/index", {recipes: allRecipes, currentUser: req.user});
       }
    });
});

// CREATE ROUTE
router.post("/", middleware.isLoggedIn, function(req, res){
    var name = req.body.name;
    var subname = req.body.subname;
    var image = req.body.image;
    var desc = req.body.description;
    var author = {
        id: req.user._id,
        username: req.user.username,
        email: req.body.email
    }
    var newRecipe = {name: name, subname: subname, image: image, description: desc, author: author};
    Recipe.create(newRecipe, function(err, newlyCreated){
        if(err){
            console.log(err);
        } else{
            res.redirect("/recipes");
        }
    });
});

// NEW ROUTE
router.get("/new", middleware.isLoggedIn, function(req, res){
   res.render("recipes/new"); 
});

// SHOW ROUTE
router.get("/:id", function(req, res){
    Recipe.findById(req.params.id).populate("comments").exec(function(err, foundRecipe){
       if(err){
           console.log(err);
       } else {
           console.log(foundRecipe);
           res.render("recipes/show", {recipe: foundRecipe}); 
       }
    });
});

// EDIT ROUTE
router.get("/:id/edit", middleware.checkRecipeOwnership, function(req, res){
        Recipe.findById(req.params.id, function(err, foundRecipe){
            res.render("recipes/edit", {recipe: foundRecipe});
        });
});

// UPDATE ROUTE
router.put("/:id", middleware.checkRecipeOwnership, function(req, res){
    Recipe.findByIdAndUpdate(req.params.id, req.body.recipe, function(err, updatedRecipe){
        if(err){
            res.redirect("/recipes");
        } else {
            res.redirect("/recipes/" + req.params.id);
        }
    });
});

// DESTROY ROUTE
router.delete("/:id", middleware.checkRecipeOwnership, function(req, res){
    Recipe.findByIdAndRemove(req.params.id, function(err){
        if(err){
            res.redirect("/recipes");
        } else {
            res.redirect("/recipes");
        }
    });
});

module.exports = router;