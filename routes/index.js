var express= require("express");
var router = express.Router();
var passport = require("passport");
var Blog = require("../models/blog");
var User = require("../models/user");

// ROOT ROUTE
router.get("/", function(req, res){
   res.render("landing"); 
});

// AUTH ROUTES

// Sign in form
router.get("/register", function(req, res){
    res.render("register");
});

// Handle sign up logic
router.post("/register", function(req, res){
    var newUser = new User({username: req.body.username, email: req.body.email});
    User.register(newUser, req.body.password, function(err, user){
        if(err){
            req.flash("error", err.message);
            return res.render("register");
        }
        passport.authenticate("local")(req, res, function(){
            req.flash("success", "Welcome to RecipeWebApp, " + user.username + "!");
            res.redirect("/recipes");
        });
    });
});

// Show login form
router.get("/login", function(req, res){
    res.render("login");
});

// Handle login logic
router.post("/login", passport.authenticate("local",
    {
        successRedirect: "/recipes",
        failureRedirect: "/login"
    }), function(req, res){
    
});

// Logout Route
router.get("/logout", function(req, res){
    req.logout();
    req.flash("success", "Logged You Out!");
    res.redirect("/recipes");
});

// Add Contact and Recent routes. Maybe a search route??
router.get("/contact", function(req, res){
    res.render("contact");
});

module.exports = router;