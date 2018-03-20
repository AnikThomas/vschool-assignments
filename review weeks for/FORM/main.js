
var contactForm = document.getElementById("contact-form");
contactForm.addEventListener("submit", function(event){
    event.preventDefault();
    var firstName = contactForm.firstName.value;
    var lastName = contactForm.firstName.value;
    var email = contactForm.firstName.value;
    alert("first Name: " + firstName );
    alert("First Name: " + person.firstName);
});

//var firstName = contactForm.firstName.value;
//console.log(firtsName);