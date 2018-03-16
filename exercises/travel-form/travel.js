// ou just started your own airline, and you need to create a form to collect data about your passengers' upcoming travel plans so they can book their flight.
// You should collect the following information from the user:
// First name (text input)
// Last name (text input)
// Age (number input)
// Gender (radio buttons with 2 or more options)
// Location they're traveling to (select box with at least 3 options. You're an airline that doesn't fly to many places...)
// Whether they have any dietary restrictions (check boxes for vegetarian, kosher, lactose free, etc. Include at least 3 options)
// Each element of the form should be given a name attribute so you can access the data in JavaScript and do stuff with it.
// There should also be a button at the end of the form to submit it. Upon pressing the button, an alert should pop up that looks like this:
var form= document.getElementById("form");
var firstNameInput= document.getElementById("firstName");
var lastNameInput = document.getElementById("lastName");
var gender= document.getElementsByName("gender");
var age = document.getElementById("age");
var destination= document.getElementById("destination");
var vegetarian= document.getElementById("vegetarian");
var kosher= document.getElementById("kosher");
var lactoseFree= document.getElementById("lactoseFree");

var data = {
    food:[]
};

firstNameInput.addEventListener("input",function(event){
    data.firstName = event.target.value;
    console.log(data);
})

lastNameInput.addEventListener("input",function(event){
    data.lastName = event.target.value;
    console.log(data);})

gender[0].addEventListener("change",function(event){
    data.gender = event.target.value;
    console.log(data);})

gender[1].addEventListener("change",function(event){
    data.gender = event.target.value;
    console.log(data);})


age.addEventListener("input",function(event){
    data.age = event.target.value;
    console.log(data);})

destination.addEventListener("change",function(event){
    data.destination = event.target.value;
    console.log(data);})
    
vegetarian.addEventListener("change",food)

    console.log(vegetarian);
    
kosher.addEventListener("change",food)

lactoseFree.addEventListener("change",food)

   form.addEventListener("submit",function(event){
        event.preventDefault();

   alert("Name: "+data.firstName+" "+data.lastName+"\nAge: "+data.age+"\nGender: "+data.gender+"\nDestination: "+data.destination+"\nFood: "+ data.food.join(", "));

})
    
function food (event){
    console.log(event);
    if(event.target.checked){
        data.food.push(event.target.name);
    }else{
        data.food.splice(data.food.indexOf(event.target.name),1);//splice here to use find one item from the array and remove it
    } console.log(data);
}           





















