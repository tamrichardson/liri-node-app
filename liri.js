require("dotenv").config();

var keys = require("./keys.js");

var spotify = new Spotify(keys.spotify);

// Include the axios npm package (Don't forget to run "npm install axios" in this folder first!)
var axios = require("axios");

// Store all of the arguments in an array
var movieArgs = process.argv;

// Create an empty variable for holding the movie name
var movieName = "";

for (var i = 2; i < movieArgs.length; i++) {
    if (i > 2 && i < movieArgs.length) {
        movieName = movieName + "+" + movieArgs[i];
    } else {
        movieName += movieArgs[i];
    }

}

// Then run a request with axios to the OMDB API with the movie specified
var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";


// This line is just to help us debug against the actual URL.
console.log(queryUrl).then(
    function (response) {
        console.log("Release Year: " + response.data.Year);
    })
    .catch(function (error) {
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx

            console.log
                ("-----------Data------------");
            console.log(error.response.data);
            console.log
                ("-----------Status-----------");
            console.log(error.response.data);
            console.log
                ("-----------Status-----------");
            console.log(error.response.headers);
        } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an object that comes back with details pertaining to the error that occurred.
            console.log(error.request);
        } else {
            // Something happened in setting up the request that triggered an Error
            console.log("Error", error.message);
        }
        console.log(error.config);
    })




