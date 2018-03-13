var movieJSON = require ("../movies.json");

// Home
exports.home = function (req,res){
    var movies = movieJSON.movies
    res.render("home", {
        title: "Star Wars Movies",
        movies: movies,
    })
}

//movie single
exports.movie_single = function (req, res){
    //using the params sytax to get the episode number and displaying it using the res.send
   var episode_number= req.params.episode_number;
   res.send("This is the page of episode_number " + episode_number)
}

// not found page
exports.not_found = function (req, res){
res.send(" This is not the page you are looking for")
}