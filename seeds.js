var mongoose    = require("mongoose"),
    Recipe      = require("./models/recipe"),
    Blog        = require("./models/blog"),
    Comment     = require("./models/comment");

var data = [
    {
        name: "Sirloin Steak",
        subname: "potatoes and veggies",
        image: "http://cf.bakeatmidnite.com/wp-content/uploads/2014/12/one-skillet-roast-steak-potatoes-2-43-o-1024x768.jpg",
        description: "Bacon ipsum dolor amet beef ribs meatball tongue doner beef meatloaf. Cow pastrami shank chicken venison, bacon picanha ground round pork loin pork chop fatback. Shank jerky doner tail meatball tri-tip frankfurter pancetta cow corned beef pastrami porchetta cupim. Jerky sausage landjaeger kevin. Kevin shank chicken picanha drumstick swine brisket tail bresaola ground round. Landjaeger short loin ground round, corned beef swine bresaola venison sirloin doner.",
        author: {
            username: "Tim",
            id: "585d61364f9fdd07b7bf6dc5"
        }
    },
    {
        name: "Chicken and Waffles",
        subname: "Fireball maple syrup",
        image: "http://www.grandbaby-cakes.com/wp-content/uploads/2014/03/chicken-and-waffles-recipe-1-1024x683.jpg",
        description: "Bacon ipsum dolor amet beef ribs meatball tongue doner beef meatloaf. Cow pastrami shank chicken venison, bacon picanha ground round pork loin pork chop fatback. Shank jerky doner tail meatball tri-tip frankfurter pancetta cow corned beef pastrami porchetta cupim. Jerky sausage landjaeger kevin. Kevin shank chicken picanha drumstick swine brisket tail bresaola ground round. Landjaeger short loin ground round, corned beef swine bresaola venison sirloin doner.",
        author: {
            username: "Tim",
            id: "585d61364f9fdd07b7bf6dc5"
        }
    },
    {
        name: "Breakfast Tacos",
        subname: "corned beef hash",
        image: "http://img.sndimg.com/food/image/upload/w_555,h_416,c_fit,fl_progressive,q_95/v1/img/recipes/48/60/3/Jyccl49ORhCTWMhp8Qtz_DSC_0590.jpg",
        description: "Bacon ipsum dolor amet beef ribs meatball tongue doner beef meatloaf. Cow pastrami shank chicken venison, bacon picanha ground round pork loin pork chop fatback. Shank jerky doner tail meatball tri-tip frankfurter pancetta cow corned beef pastrami porchetta cupim. Jerky sausage landjaeger kevin. Kevin shank chicken picanha drumstick swine brisket tail bresaola ground round. Landjaeger short loin ground round, corned beef swine bresaola venison sirloin doner.",
        author: {
            username: "Tim",
            id: "585d61364f9fdd07b7bf6dc5"
        }
    },
    {
        name: "Chicken Broccoli Alfredo Pizza",
        subname: "basil and mozarella cheese",
        image: "http://normalcooking.com/wp-content/uploads/2013/10/Chicken-Alfredo-Pizza-1.jpg",
        description: "Bacon ipsum dolor amet beef ribs meatball tongue doner beef meatloaf. Cow pastrami shank chicken venison, bacon picanha ground round pork loin pork chop fatback. Shank jerky doner tail meatball tri-tip frankfurter pancetta cow corned beef pastrami porchetta cupim. Jerky sausage landjaeger kevin. Kevin shank chicken picanha drumstick swine brisket tail bresaola ground round. Landjaeger short loin ground round, corned beef swine bresaola venison sirloin doner.",
        author: {
            username: "Tim",
            id: "585d61364f9fdd07b7bf6dc5"
        }
    },
    {
        name: "Bacon-wrapped Stuffed Chicken",
        subname: "cream cheese and chives",
        image: "http://img.sndimg.com/food/image/upload/w_555,h_416,c_fit,fl_progressive,q_95/v1/img/recipes/35/11/56/pic4OW8fs.jpg",
        description: "Bacon ipsum dolor amet beef ribs meatball tongue doner beef meatloaf. Cow pastrami shank chicken venison, bacon picanha ground round pork loin pork chop fatback. Shank jerky doner tail meatball tri-tip frankfurter pancetta cow corned beef pastrami porchetta cupim. Jerky sausage landjaeger kevin. Kevin shank chicken picanha drumstick swine brisket tail bresaola ground round. Landjaeger short loin ground round, corned beef swine bresaola venison sirloin doner.",
        author: {
            username: "Tim",
            id: "585d61364f9fdd07b7bf6dc5"
        }
    },
    {
        name: "Mac 'n' Cheese",
        subname: "fried chicken and bacon",
        image: "http://homecookingmemories.com/wp-content/uploads/2012/11/Chicken-Bacon-Macaroni-and-Cheese-2.jpg",
        description: "Bacon ipsum dolor amet beef ribs meatball tongue doner beef meatloaf. Cow pastrami shank chicken venison, bacon picanha ground round pork loin pork chop fatback. Shank jerky doner tail meatball tri-tip frankfurter pancetta cow corned beef pastrami porchetta cupim. Jerky sausage landjaeger kevin. Kevin shank chicken picanha drumstick swine brisket tail bresaola ground round. Landjaeger short loin ground round, corned beef swine bresaola venison sirloin doner.",
        author: {
            username: "Tim",
            id: "585d61364f9fdd07b7bf6dc5"
        }
    },
    {
        name: "BBQ Pulled Pork",
        subname: "cornbread and sweet potatoes",
        image: "https://media-cdn.tripadvisor.com/media/photo-s/07/b6/84/f7/big-eats-co-brighton.jpg",
        description: "Bacon ipsum dolor amet beef ribs meatball tongue doner beef meatloaf. Cow pastrami shank chicken venison, bacon picanha ground round pork loin pork chop fatback. Shank jerky doner tail meatball tri-tip frankfurter pancetta cow corned beef pastrami porchetta cupim. Jerky sausage landjaeger kevin. Kevin shank chicken picanha drumstick swine brisket tail bresaola ground round. Landjaeger short loin ground round, corned beef swine bresaola venison sirloin doner.",
        author: {
            username: "Tim",
            id: "585d61364f9fdd07b7bf6dc5"
        }
    },
    {
        name: "Pulled Pork Nachos",
        subname: "sour cream and guacamole",
        image: "https://www.mygourmetconnection.com/recipes/appetizers/img/pulled-pork-nachos.jpg",
        description: "Bacon ipsum dolor amet beef ribs meatball tongue doner beef meatloaf. Cow pastrami shank chicken venison, bacon picanha ground round pork loin pork chop fatback. Shank jerky doner tail meatball tri-tip frankfurter pancetta cow corned beef pastrami porchetta cupim. Jerky sausage landjaeger kevin. Kevin shank chicken picanha drumstick swine brisket tail bresaola ground round. Landjaeger short loin ground round, corned beef swine bresaola venison sirloin doner.",
        author: {
            username: "Tim",
            id: "585d61364f9fdd07b7bf6dc5"
        }
    },
    {
        name: "Corned Beef Hashburger",
        subname: "fried egg, cheddar, and bacon",
        image: "http://lifesabargain.net/wp-content/uploads/2016/02/St.-Patricks-Day-Corned-Beef-and-Kraut-Burgers.jpg",
        description: "Bacon ipsum dolor amet beef ribs meatball tongue doner beef meatloaf. Cow pastrami shank chicken venison, bacon picanha ground round pork loin pork chop fatback. Shank jerky doner tail meatball tri-tip frankfurter pancetta cow corned beef pastrami porchetta cupim. Jerky sausage landjaeger kevin. Kevin shank chicken picanha drumstick swine brisket tail bresaola ground round. Landjaeger short loin ground round, corned beef swine bresaola venison sirloin doner.",
        author: {
            username: "Tim",
            id: "585d61364f9fdd07b7bf6dc5"
        }
    },
    {
        name: "Pizza Eggs",
        subname: "basil and pepperoni",
        image: "http://www.incredibleegg.org/wp-content/uploads/pizza-topped-scrambled-eggs1-930x550.jpg",
        description: "Bacon ipsum dolor amet beef ribs meatball tongue doner beef meatloaf. Cow pastrami shank chicken venison, bacon picanha ground round pork loin pork chop fatback. Shank jerky doner tail meatball tri-tip frankfurter pancetta cow corned beef pastrami porchetta cupim. Jerky sausage landjaeger kevin. Kevin shank chicken picanha drumstick swine brisket tail bresaola ground round. Landjaeger short loin ground round, corned beef swine bresaola venison sirloin doner.",
        author: {
            username: "Tim",
            id: "585d61364f9fdd07b7bf6dc5"
        }
    },
    {
        name: "Lamb Chops",
        subname: "feta mashed potatoes ans asparagus",
        image: "http://www.taste.com.au/images/recipes/agt/2003/01/spiced-lamb-cutlets-with-mashed-potato-peas-8847_l.jpeg",
        description: "Bacon ipsum dolor amet beef ribs meatball tongue doner beef meatloaf. Cow pastrami shank chicken venison, bacon picanha ground round pork loin pork chop fatback. Shank jerky doner tail meatball tri-tip frankfurter pancetta cow corned beef pastrami porchetta cupim. Jerky sausage landjaeger kevin. Kevin shank chicken picanha drumstick swine brisket tail bresaola ground round. Landjaeger short loin ground round, corned beef swine bresaola venison sirloin doner.",
        author: {
            username: "Tim",
            id: "585d61364f9fdd07b7bf6dc5"
        }
    },
    {
        name: "Buffalo Chicken Dip",
        subname: "blue cheese and crumbled bacon",
        image: "https://i.ytimg.com/vi/JNNgkKlFYYI/maxresdefault.jpg",
        description: "Bacon ipsum dolor amet beef ribs meatball tongue doner beef meatloaf. Cow pastrami shank chicken venison, bacon picanha ground round pork loin pork chop fatback. Shank jerky doner tail meatball tri-tip frankfurter pancetta cow corned beef pastrami porchetta cupim. Jerky sausage landjaeger kevin. Kevin shank chicken picanha drumstick swine brisket tail bresaola ground round. Landjaeger short loin ground round, corned beef swine bresaola venison sirloin doner.",
        author: {
            username: "Tim",
            id: "585d61364f9fdd07b7bf6dc5"
        }
    },
    {
        name: "Pizza",
        subname: "peppers and black olives",
        image: "http://brunossantamonica.com/photos/brunospizzacooked2.jpg",
        description: "Bacon ipsum dolor amet beef ribs meatball tongue doner beef meatloaf. Cow pastrami shank chicken venison, bacon picanha ground round pork loin pork chop fatback. Shank jerky doner tail meatball tri-tip frankfurter pancetta cow corned beef pastrami porchetta cupim. Jerky sausage landjaeger kevin. Kevin shank chicken picanha drumstick swine brisket tail bresaola ground round. Landjaeger short loin ground round, corned beef swine bresaola venison sirloin doner.",
        author: {
            username: "Tim",
            id: "585d61364f9fdd07b7bf6dc5"
        }
    },
    {
        name: "Ribeye Steak",
        subname: "parmesan fries and sauteed veggies",
        image: "http://www.beachhousepg.com/gallery-photos/Our%20Food/slides/Steak%20and%20Fries.JPG",
        description: "Bacon ipsum dolor amet beef ribs meatball tongue doner beef meatloaf. Cow pastrami shank chicken venison, bacon picanha ground round pork loin pork chop fatback. Shank jerky doner tail meatball tri-tip frankfurter pancetta cow corned beef pastrami porchetta cupim. Jerky sausage landjaeger kevin. Kevin shank chicken picanha drumstick swine brisket tail bresaola ground round. Landjaeger short loin ground round, corned beef swine bresaola venison sirloin doner.",
        author: {
            username: "Tim",
            id: "585d61364f9fdd07b7bf6dc5"
        }
    },
    {
        name: "Pureed Nut Spread",
        subname: "grape relish reduction and brioche bun",
        image: "https://img.ifcdn.com/images/79d4f0ab60377802b9b8d9f062936585f4ffc8ea8d7042aba4f28038669320e4_1.jpg",
        description: "Bacon ipsum dolor amet beef ribs meatball tongue doner beef meatloaf. Cow pastrami shank chicken venison, bacon picanha ground round pork loin pork chop fatback. Shank jerky doner tail meatball tri-tip frankfurter pancetta cow corned beef pastrami porchetta cupim. Jerky sausage landjaeger kevin. Kevin shank chicken picanha drumstick swine brisket tail bresaola ground round. Landjaeger short loin ground round, corned beef swine bresaola venison sirloin doner.",
        author: {
            username: "Tim",
            id: "585d61364f9fdd07b7bf6dc5"
        }
    },
    {
        name: "Pad Thai",
        subname: "chicken and peanut sauce",
        image: "http://howtofeedaloon.com/wp-content/uploads/2014/03/pad_feature-e1394669530860.jpg",
        description: "Bacon ipsum dolor amet beef ribs meatball tongue doner beef meatloaf. Cow pastrami shank chicken venison, bacon picanha ground round pork loin pork chop fatback. Shank jerky doner tail meatball tri-tip frankfurter pancetta cow corned beef pastrami porchetta cupim. Jerky sausage landjaeger kevin. Kevin shank chicken picanha drumstick swine brisket tail bresaola ground round. Landjaeger short loin ground round, corned beef swine bresaola venison sirloin doner.",
        author: {
            username: "Tim",
            id: "585d61364f9fdd07b7bf6dc5"
        }
    }
]

var blogData = [
    {
        title: "How to Cook the Perfect Steak",
        subtitle: "The best technique for the best type of meat",
        image: "https://baconmockup.com/1200/800",
        content: "Bacon ipsum dolor amet beef ribs meatball tongue doner beef meatloaf. Cow pastrami shank chicken venison, bacon picanha ground round pork loin pork chop fatback. Shank jerky doner tail meatball tri-tip frankfurter pancetta cow corned beef pastrami porchetta cupim. Jerky sausage landjaeger kevin. Kevin shank chicken picanha drumstick swine brisket tail bresaola ground round. Landjaeger short loin ground round, corned beef swine bresaola venison sirloin doner",
        author: {
            username: "Tim",
            id: "585d61364f9fdd07b7bf6dc5"
        }
    },
    {
        title: "Different Meals to Cook in Your Slow Cooker",
        subtitle: "From Chicken to Pork to Brisket",
        image: "https://baconmockup.com/1200/400",
        content: "Bacon ipsum dolor amet beef ribs meatball tongue doner beef meatloaf. Cow pastrami shank chicken venison, bacon picanha ground round pork loin pork chop fatback. Shank jerky doner tail meatball tri-tip frankfurter pancetta cow corned beef pastrami porchetta cupim. Jerky sausage landjaeger kevin. Kevin shank chicken picanha drumstick swine brisket tail bresaola ground round. Landjaeger short loin ground round, corned beef swine bresaola venison sirloin doner",
        author: {
            username: "Tim",
            id: "585d61364f9fdd07b7bf6dc5"
        }
    },
    {
        title: "5 Best Kitchen Tools and Equipment to Make the Perfect Meals",
        subtitle: "Things that Should be in Every Kitchen",
        image: "https://baconmockup.com/800/600",
        content: "Bacon ipsum dolor amet beef ribs meatball tongue doner beef meatloaf. Cow pastrami shank chicken venison, bacon picanha ground round pork loin pork chop fatback. Shank jerky doner tail meatball tri-tip frankfurter pancetta cow corned beef pastrami porchetta cupim. Jerky sausage landjaeger kevin. Kevin shank chicken picanha drumstick swine brisket tail bresaola ground round. Landjaeger short loin ground round, corned beef swine bresaola venison sirloin doner",
        author: {
            username: "Tim",
            id: "585d61364f9fdd07b7bf6dc5"
        }
    }
]
// In development, remove all comments, blogs, and recipes in database to prevent malicious or inappropriate data when the server restarts
// Comment out seedDB() before going to production
function seedDB(){
    Comment.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed comments!");
    });
    Recipe.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed recipes!");
        data.forEach(function(seed){
            Recipe.create(seed, function(err, recipe){
                if(err){
                    console.log(err);
                } else {
                    console.log("added a recipe");
                    Comment.create(
                        {
                            text: "Try adding more seasoning and this would be 10/10!",
                            author: {
                                username: "Homer",
                                id: "584f07fe049194c41197d0a9"
                            }
                        }, function(err, comment){
                            if(err){
                                console.log(err);
                            } else {
                                recipe.comments.push(comment);
                                recipe.save();
                                console.log("Created new comment.");
                            }
                    });
                }
            });
        });
    });
    Blog.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed blogs!");
        blogData.forEach(function(seed){
            Blog.create(seed, function(err, blog){
                if(err){
                    console.log(err);
                } else {
                    console.log("added a blog");
                    // Comment.create(
                    //     {
                    //         text: "Definitely going to use that tip next time!",
                    //         author: {
                    //             username: "Homer",
                    //             id: "584f07fe049194c41197d0a9"
                    //         }
                    //     }, function(err, comment){
                    //         if(err){
                    //             console.log(err);
                    //         } else {
                    //             blog.comments.push(comment);
                    //             blog.save();
                    //             console.log("Created new comment.");
                    //         }
                    // });
                }
            });
        });
    });
}

module.exports = seedDB;