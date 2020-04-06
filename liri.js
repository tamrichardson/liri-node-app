//console.log("this works")

require("dotenv").config();

var keys = require("./keys.js");

var Spotify = require('node-spotify-api');

var spotify = new Spotify(keys.spotify);

var axios = require("axios");
var moment = require("moment")
var fs = require("fs")

var operation = process.argv[2];
var request = process.argv[3];
var movieSearch = process.argv[3];
var songSearch = process.argv[3];

if (process.argv.length === 3) {
    var movieSearch = "Mr Nobody"
}
if (process.argv.length === 3) {
    var songSearch = "Ace of Base"
}

function operations(operation, request) {
    if (operation === "spotify-this-song") {
        song(request)
    }

    if (operation === "concert-this") {
        event(request)
    }

    if (operation === "movie-this") {
        movie(request)
    }
    if (operation === "do-what-it-says") {
        doSomething(request)
    }
}
operations(operation, request)
//songs
function song(request) {


    spotify.search({ type: "track", limit: 10, query: songSearch }, function (err, data) {

        if (err) {
            return console.log(err);
        }

        //console.log(JSON.parse(JSON.stringify(data.tracks.items[0])))
        var artist = data.tracks.items[0].album.artists[0].name;
        var name = data.tracks.items[0].name;
        var url = data.tracks.items[0].href;
        var album = data.tracks.items[0].album.name;
        console.log("Song Name: " + name);
        console.log("Album Name: " + album);
        console.log("Artist Name: " + artist);
        console.log("Preview link of the song from spotify " + url);
    })
}

//concerts
function event(request) {


    axios.get("https://rest.bandsintown.com/artists/" + request + "/events?app_id=codingbootcamp").then(
        function (response) {
            console.log(response.data[0]);

            var venueName = response.data[0].venue.name;
            var venueCity = response.data[0].venue.city;
            var venueDate = response.data[0].datetime;
            venueDate = moment(venueDate).format('MM/DD/YYYY');
            console.log("Name of the venue is: " + venueName)
            console.log("Venue location is: " + venueCity)
            console.log("Date of the event: is " + venueDate)
        })
        .catch(function (error) {
            throw error
        })
}


//movies
function movie(request) {
    var queryUrl = "http://www.omdbapi.com/?t=" + movieSearch + "&y=&plot=short&apikey=trilogy";
    axios.get(queryUrl).then(
        function (response) {
            console.log("Title of the movie: " + response.data.Title);
            console.log("Year the movie came out: " + response.data.Year);
            console.log("IMDB Rating of the movie: " + response.data.imdbRating);
            console.log("Country where the movie was produced: " + response.data.Country);
            console.log("Language of the movie: " + response.data.Language);
            console.log("Plot of the movie " + response.data.Plot);
            console.log("Actors in this movie: " + response.data.Actors);
        })
        .catch(function (error) {
            if (error.response) {

                console.log("---------------Data---------------");
                console.log(error.response.data);

            }
        })
}
//do something
function doSomething() {

    // This block of code will read from the "movies.txt" file.
    // It's important to include the "utf8" parameter or the code will provide stream data (garbage)
    // The code will store the contents of the reading inside the variable "data"
    fs.readFile("random.txt", "utf8", function (error, data) {

        // If the code experiences any errors it will log the error to the console.
        if (error) {
            return console.log(error);
        }

        // We will then print the contents of data
        console.log(data);

        // Then split it by commas (to make it more readable)
        var dataArr = data.split(",");

        // We will then re-display the content as an array for later use.
        console.log(dataArr);
        operations(dataArr[0], dataArr[1])
    });
}







