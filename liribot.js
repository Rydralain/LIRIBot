// just creating and exporting a utility type object with API functions

// require all API modules

// require keys file
const keys = require("./keys.js")

// functions required in the liribot export
/*
    liribot.myTweets();
    liribot.spotifyThisSong(data);
    liribot.movieThis(data);
    liribot.doWhatItSays();
*/

const liribot = {
    myTweets : function(){
        console.log("tweets");
    },
    spotifyThisSong : function(songName){
        console.log("spotify", songName);
    },
    movieThis : function(movieName){
        console.log("movie", movieName);
    },
    doWhatItSays(){
        console.log("dowhat");
    }
}

module.exports = liribot;