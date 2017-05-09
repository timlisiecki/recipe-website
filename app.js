var express         = require("express"),
    app             = express(),
    bodyParser      = require("body-parser"),
    mongoose        = require("mongoose"),
    flash           = require("connect-flash"),
    passport        = require("passport"),
    LocalStrategy   = require("passport-local"),
    methodOverride  = require("method-override"),
    Recipe          = require("./models/recipe"),
    Comment         = require("./models/comment"),
    User            = require("./models/user"),
    Blog            = require("./models/blog"),
    seedDB          = require("./seeds");
    
var commentRoutes   = require("./routes/comments"),
    recipeRoutes    = require("./routes/recipes"),
    blogRoutes      = require("./routes/blogs"),
    indexRoutes     = require("./routes/index");
 
// var url = process.env.DATABASEURL || "mongodb://localhost/yelp_camp";
// mongoose.connect(url);
mongoose.connect("mongodb://recipe:webapp@ds155428.mlab.com:55428/recipewebapp");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
app.use(flash());

// (SEEDS THE DATABASE)
seedDB();


// PASSPORT CONFIGURATION
app.use(require("express-session")({
    secret: "The Times was the greatest bar!",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next){
    res.locals.currentUser = req.user;
    res.locals.error = req.flash("error");
    res.locals.success = req.flash("success");
    next();
});

app.use(indexRoutes);
app.use("/recipes", recipeRoutes);
app.use("/recipes/:id/comments", commentRoutes);
app.use("/blog", blogRoutes);




app.listen(process.env.PORT || 3000, process.env.IP, function(){
   console.log("The server has started."); 
});
