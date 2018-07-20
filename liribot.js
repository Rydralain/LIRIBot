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
        console.log("Hmm... Who are you?");
        // find out who is logged in
        twitterClient.get('account/verify_credentials', function(error, data, response) {
            let userName = data.screen_name;
            console.log("Ah, Twitter says you are " + userName + "\n" +
                        "Alright, let's grab your last 20 tweets.");
            // get their last 20 posts.
            twitterClient.get('statuses/user_timeline', {count: 20, screen_name : userName}, function(error, data, response) {
                data.forEach(function(value){
                    console.log("On " + value.created_at + "\n" + 
                                "You said: \n" + 
                                value.text);
                });
             });
         });
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
        fs.readFile("./random.txt", "UTF8", (err, data) => {
            if(err){
                throw err
            }

            let commands = data.split(",");
            liribot.runCommand(commands[0], commands[1]);
        });
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