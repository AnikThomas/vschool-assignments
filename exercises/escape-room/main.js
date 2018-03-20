var readlineSync = require('readline-sync');

console.log('Welcome to the adventure escape room game!');
var myName = readlineSync.question('what is your name?')
console.log('hi ' + myName);
var haveKey = false;
var alive = true;

while (alive){
    var choice = readlineSync.question('lets,play! you will have 3 option to do on this game \noptions:\n [1]"put hand in the hole"\n [2]"find the key" \n [3]"open the door\n');
    if(choice === "1"){
        console.log('you\'re dead!');
        alive = false;
        break;
    }if(choice === "2"){
        console.log("dadada you got the key! here is the key");
        haveKey = true;
    }else if(choice === "3"){
        if(haveKey){
            console.log("congratulations you win and escaped the room!");
            alive = false;
            return;
        }
        console.log("ohh, door does\'nt open it is locked");
    }
}
//===========================================================================

//     switch(choice){
//         case "1":
//             console.log('you\'re dead!');
//             return;
//         case "2":
//             console.log("dadada you got the key! here is the key");
//             haveKey = true;
//         case "3":
//             if(haveKey){
//                 console.log("congratulations you win and escaped the room!");
//                 return;
//             }
//             console.log("ohh, door does\'nt open it is locked");
//     }
    
// }


