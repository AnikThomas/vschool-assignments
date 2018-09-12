var rs = require("readline-sync"); //for user interaction

var Enemy = function () {//enemy constructor
    this.type = getRandomType();
    this.hitPoints = this.genHitPoints();
    this.defense = this.hitPoints * 3;
}
function getRandomType() {
    var enemyTypes = ["Ancient Dragon", "Prowler", "Mighty Grunt"];
    var randIndex = Math.floor(Math.random() * 3);
    return enemyTypes[randIndex];
}
Enemy.prototype.genHitPoints = function (type) {
    switch (this.type) {
        case "Ancient Dragon":
            return Math.floor(Math.random() * 21) + 80;
        case "Prowler":
            return Math.floor(Math.random() * 30) + 50;
        case "Mighty Grunt":
            return Math.floor(Math.random() * 30) + 20;
    }
}
//define the object player
var player = {
    name: "playerName",
    hitPoints: 100,
    attack: () => Math.floor(Math.random() * 20) + 10, // random number 10-30
    enemiesKilled: 0,
    inventory: []
}
//define the random reward
function getRandomReward() {
    var rewards = ["gold", "silver", "bronze", "A rock", "some dirt", "a sharp tooth"];
    var randIndex = Math.floor(Math.random() * rewards.length);
    return rewards[randIndex];
}
//define enemy attack
function enemyAttacks() {
    var enemyAttack = Math.floor(Math.random() * 40);
    player.hitPoints -= enemyAttack;//take away health from the player
    if (player.hitPoints <= 0) { // are you dead?
        console.log(`${player.name} has been torn to shreads hahahahaha don't you dare!!!`)
        console.log('GAME OVER');
        stillFighting = false;
    }
    return stillFighting;
}
//define attack the enemy
function attackTheEnemy(enemy) {
    enemy.hitPoints -= Math.floor(Math.random() * 20) + 10;
        stillFighting = true;
    if (enemy.hitPoints <= 0) {
        stillFighting = false;
        player.hitPoints += Math.floor(Math.random() * 50);
        console.log()
        player.enemiesKilled++;
        player.inventory.push(getRandomReward());
    } else {
        stillFighting = enemyAttacks();
    }
    return stillFighting;
}

console.log('Hello fello adventurer!!!!');

player.name = rs.question('May I have your name? ');
console.log(`Hi ${player.name}!`);

let stillPlaying = true;
while (stillPlaying && player.hitPoints >0) {
    // console.log('enter W̲ to walk');
    var answerWalk = rs.keyIn(`\nWhat do you like to do now?\n\nD̲iscover\nq̲uit\nI̲nventory`);
    if (answerWalk === "Q" || answerWalk === "q") {
        stillPlaying = false;
    }
    if (answerWalk === "I" || answerWalk === "i") {
        console.log(`${player.name}  ${player.hitPoints} ` + player.inventory)
    }
    if (answerWalk === "D" || answerWalk === "d") {

        if (Math.floor(Math.random() * 100) < 33) {
            var theNewEnemy = new Enemy();
            console.log(`A vicious ${theNewEnemy.type} has appeared!`)
            console.log(`Decide ${player.name}... attack or Runnnnn!!!!!`)

            var stillFighting = true;
            while (stillFighting) {
                var attackOrRun = rs.keyIn(`Do you like to Attack or Runnnnn!!!!!`)
                if (attackOrRun === "a" || attackOrRun === "A") {
                    stillFighting = attackTheEnemy(theNewEnemy);
                } else {
                    if (Math.floor(Math.random() * 2) + 1 === 2) {
                        stillFighting = false;
                    } else {
                        stillFighting = enemyAttacks();
                    }
                }
                console.log(player);
            }

        }
    }
}