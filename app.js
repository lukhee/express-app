var express = require("express");

var routes = require ("./routes")

var path = require("path");

var app = express();
app.use(express.static(path.join(__dirname,"public")))
 
//Routes
app.set("view engine", "ejs");

//home page
app.get("/", routes.home)

//movie single
app.get("/star_wars_episode/:episode_number?",routes.movie_single)

// not found page
app.get("*",routes.not_found)
app.listen(3000, function(){
    console.log("This application is running on local host 3000")
}); 