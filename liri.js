//console.log("this works")

require("dotenv").config();

var keys = require("./keys.js");

var Spotify = require('node-spotify-api');

var spotify = new Spotify(keys.spotify);


var operation = process.argv[2];
var request = process.argv[3];

if (operation === "spotify-this-song") {
    song(request)
}

function song(request) {

}
spotify.search({ type: "track", limit: 1, query: request }, function (err, data) {

    if (err) {
        return console.log(err);
    }


    console.log(JSON.stringify(data))
    var artist = data.tracks.items[0].album.artists[0].name;
    var name = data.tracks.items[0].name;
    var url = data.tracks.items[0].href;
    var album = data.tracks.items[0].album.name;
    console.log("Song Name: " + name);
    console.log("Album Name: " + album);

    console.log("Artist Name: " + artist);
    console.log("Preview link of the song from spotify " + url);
})





    //console.log(data.tracks.items[2]);


//var axios = require("axios");
//var eventInfo = process.argv[2];

//var queryUrl = "https://rest.bandsintown.com/artists/celine+dion/events?"
    //+ bandName + "app_id=codingbootcamp";

    //console.log(queryUrl);






