//console.log("this works")

require("dotenv").config();

var keys = require("./keys.js");

var Spotify = require('node-spotify-api');

var spotify = new Spotify(keys.spotify);

var axios = require("axios");

var operation = process.argv[2];
var request = process.argv[3];


if (operation === "spotify-this-song") {
    song(request)
}

if (operation === "concert-this") {
    event(request)
}

if (operation === "movie-this") {
    movie(request)
}

//songs
function song(request) {

}
spotify.search({ type: "track", limit: 1, query: request }, function (err, data) {

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

//concerts
function event(request) {

}
axios.get("https://rest.bandsintown.com/artists/" + request + "/events?app_id=codingbootcamp").then(
    function (response) {
        //console.log(response.data);

        var venueName = response.data.venue.name;
        var venueCity = response.data.venue.city;
        var venueDate = response.data.datetime;
        console.log("Name of the venue is " + venueName)
        console.log("Venue location is " + venueCity)
        console.log("Date of the event is " + venueDate)
    })
    .catch(function (error) {
    })


//movies
function movie(request) {
    var queryUrl = "http://www.omdbapi.com/?t=" + request + "&y=&plot=short&apikey=trilogy";
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









