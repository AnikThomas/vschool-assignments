 //I've just looged in to a website
//the server sent me a token to use authorization
//store token in local storage to have for later

// var token =
// "wuywdgwirygeyfidhisjdadybgbh6bijobjsdhbosd.go8tryjhsy6774wgw45g.reg97w38ewrer7878";

// localStorage.setItem("token", token)// first token to get object - property example title
//                                     // second token is to get value
// //pretend i've signed off and shut my computer down
// //later i go to the same site
// //I dont want to have to log in every single time
// //so i want to GET the token from storage and use that to login automatically

// function login(){
//     if(localStorage.getItem("token"){
//         alert("Welcome! You have been logged in automatically")
//     }else {
//         alert("Sorry you must log in!");
//     }
// }
// login();
//===========================================================
// var cart = [
//     {
//         type : "transistor radio",
//         price:2
//     },

// {
//     type : "vinyl record",
//     price:2
//     },

// {
//     type : "iphone",
//     price:1000
//     },
// ]

// localStorage.setItem("cart", JSON.stringify(cart));
// console.log(JSON.parse(localStorage.getItem("cart")));

//=======================================================
var str ="im a string";
sessionStorage.setItem("str", str);

var num = 10;
sessionStorage.setItem("num",num);
console.log(sessionStorage.getItem("num")) // if we want to get it back


var bool = true;
sessionStorage.setItem("bool",bool);
console.log(sessionStorage.getItem("num")) // if we want to get it back
//========================================
var obj = {
    key: "value",
    method: function(){
        console.log("im a method");
    }
}
localStorage.setItem("obj", JSON.stringify(obj));
console.log(JSON.parse(localStorage.getItem("obj")));

//===============================================
var arr = ['4, true, "yellow'];

localStorage.setItem("arr",JSON.stringify(arr));
console.log(JSON.parse(localStorage.getItem("arr")))

window.addEventListener("click",function(){
    //handle the logic here
    console.log("i clicked!");
})