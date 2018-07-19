// just creating and exporting a utility type object with API functions

// initialize dotenv module
require("dotenv").config();

// require keys file
const keys = require("./keys.js")

// require all API modules

const Twitter = require("twitter");
const Spotify = require('node-spotify-api');

const request = require("request");

// require filesystem module
const fs = require("fs");

// Initialize Twitter & Spotify
twitterClient = new Twitter(keys.twitter);
spotifyClient = new Spotify(keys.spotify);


// functions required in the liribot export
/*
    liribot.myTweets();
    liribot.spotifyThisSong(data);
    liribot.movieThis(data);
    liribot.doWhatItSays();
*/

const liribot = {
    myTweets : function(){
        console.log("Okay, let's snoop on some tweets.");
    },
    spotifyThisSong : function(songName){
        console.log("Alright, let's check out Spotify info for " + songName);
    },
    movieThis : function(movieName){
        console.log("Yeah, I can look up info on " + movieName + ", just give me a second to grab it.");
    },
    doWhatItSays : function(){
        console.log("Okay, I'll do whatever that random file says to do.");
        // Pull in random.txt then run the command
    },
    unknownAction : function(){
        console.log("Oh man, I have no idea what you just asked for.")
        liribot.spotifyThisSong("Sandstorm");
    },
    runCommand : function(command, data){
        switch (command){
            case "my-tweets":
                liribot.myTweets();
                break;
            case "spotify-this-song":
                liribot.spotifyThisSong(data);
                break;
            case "movie-this":
                liribot.movieThis(data);
                break;
            case "do-what-it-says":
                liribot.doWhatItSays();
                break;
            default:
                liribot.unknownAction();
        }
    }
}

module.exports = liribot;