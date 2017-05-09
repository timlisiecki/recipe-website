var mongoose = require("mongoose");

// SCHEMA SETUP
var recipeSchema = new mongoose.Schema({
   name: String,
   subname: String,
   image: String,
   description: String,
   author: {
      id: {
         type: mongoose.Schema.Types.ObjectId,
         ref: "User"
      },
      username: String
   },
   comments: [
         {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment"
         }
      ]
});

module.exports = mongoose.model("Recipe", recipeSchema);
