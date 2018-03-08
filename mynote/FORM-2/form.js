
var nameInput = document.getElementById("firstName");
var data = {
    firstName:"",
}
var form = document.getElementById("submit");
var peanutBox = document.getElementById("peanuts");
var peanutBox = document.getElementById("wheatbox");
var peanutBox = document.getElementById("pollenbox");


//this event listener just track the user activity and add the data to approriate part of the data object
nameInput.addEventListener("input", function (event){
    data.firstName = event.target.value;
    console.log(data);
});

//send off the information now that it has been collected
form.addEventListener("submit", function(){
    alert("First Name: " + data.firstName + "\n");
});

// "input" is the event that gets a triggered when it detects a change in gthe values
// how to do on checkbox,when i click on that thing i want to return array on the value,
//first write a function, and pass to an event,when i check in the button the value will be in array
function setAllergy(event){
// user click on checkbox
// if its checked, add to the Array
console.log(event.target.checked);
if(event.target.checked){
    data.allergies.push(event.target.name);
}else{
    //if its not checked remove from the array
    //find where string is
var index = data.allergies.indexOf(event.target.name)
//splice the string out of the array from index
data.allergies.splice(index, 1);

}
console.log(data.allergies);
// if its not checked remove from the array


}
pollenBox.addEventListener("input", setAllergy)
wheatBox.addEventListener("input", setAllergy)
peanutBox.addEventListener("input", setAllergy)

//this is just an object to store user input data
//we define it in terms of what is meaningfull to use as human

var data = {
    firstName: "",
    allergies:[]
}