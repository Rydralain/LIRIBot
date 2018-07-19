const liribot = require("./liribot.js");

// set first input var (if present)
if(process.argv[2]){
    command = process.argv[2];
}
else{
    command = "my-tweets";
    console.log("No command entered, displaying tweets.");
}
// Store the rest of the inputs in a single string "data" (if present)
var data = "";

if(process.argv[3]){
    for(let i = 3; i < process.argv.length; i ++){
        data += process.argv[i] + " ";
    }
}
else if(command === "spotify-this-song"){
    data = "Teardrop";
    console.log("No song entered, displaying information for 'Teardrop'.");
}
else if(command === "movie-this"){
    data = "The Machinist";
    console.log("No movie entered, displaying data for 'The Machinist'.");
}

data = data.trim();

// Switch for different commands
/*
    my-tweets           -   liribot.myTweets();
    spotify-this-song   -   liribot.spotifyThisSong(data);
    movie-this          -   liribot.movieThis(data);
    do-what-it-says     -   liribot.doWhatItSays();
*/

liribot.runCommand(command, data);