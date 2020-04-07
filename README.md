# liri-node-app

![](https://github.com/tamrichardson/liri-node-app/blob/master/Capture.JPG)

Description:

Packages installed:
Node-Spotify-API
Axios
Moment
DotEnv


API's used:
https://www.artists.bandsintown.com
https://developer.spotify.com/documentation/web-api/
http://www.omdbapi.com/


Functions:
1.) spotify-this-song:makes a request to the Spotify API and we get back a JSON object that includes everything we need (title, artist, album, and preview link).

example: node liri.js spotify-this-song "yellow submarine"

2.) concert-this: makes a request to the BandsInTown API using axios and we get back a JSON object that includes everything we need (venue name, venue city and event date (moment.js used to fomat date)).

example: node liri.js concert-this yungblud

3.) movie-this: makes a request to the OMDb API using axios and we get back a JSON object that includes everything we need (title, year, IMDb rating, language, etc.)

example: node liri.js movie-this "fight club"

4.) do-what-it-says:reads from a file called "random.text" and executes the command and query found there.

example: node liri.js do-what-it-says

Video Demo:
"https://drive.google.com/file/d/1WFf8Z2CFAAfqFYwNhh1Vtr85jIGg_h3s/preview" 
