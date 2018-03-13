var ask = require("readline-sync")

var playTheGame = function(){
    var playerNAme = ask.question("heyo","whats your name?")
    console.log("thanks" + playerName + "!So very nice to meet you!")
    if (playerName === "ben"){
        console.log("Youre stealing my life away");
        playerLife--;
        console.log(playerLife);
    }else if(playerName === "jamie"){
        console.log("More life for you")
        playerLife++;
        console.log(playerLife);
    }
}

    while (playerLife > 0){
        playTheGame ();
    }
console.log("Dun dun duuuuhhn");
