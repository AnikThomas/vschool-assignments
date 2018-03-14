var rs = require("readline-sync");

//while loop continues 

var player = {
    name: "playerName",
    hp: 100,
    attack: undefined,
    enemiesKilled: 0
}

var Enemy = function(){
    this.attack = Math.floor(Math.random() * 20) + 10,
    this.hp = 50
    // etc etc
}

// while (player.hp > 0 && player.enemiesKilled <3){
    
// }
console.log('Hello fello adventurer!!!!');

var userName = rs.question('May I have your name? ');
console.log('Hi ' + userName + '!');

console.log('enter W to walk');
var answerWalk = rs.question('enter W ?');
console.log('Hi ' + answerWalk + '!');


