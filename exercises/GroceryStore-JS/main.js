// Write a program that has a shopper object. Include at least one property with each of the following data types as values to the properties:
// String
// Number
// Boolean
// Function (called a "method" when it's inside an object like this. Check out an example for help writing your own)
// In addition, you should add a groceryCart property to your object, which should be an Array of items that can commonly be found in a grocery cart.
var shopper = {
    shopperName: "Anikthomas",
    age: 35,
    loyaltyMember: true,
    groceryCart: ["bread","tea","milk"],
    howManyItemINCart: function(){
        return this.groceryCart.length;
    }
};
shopper.howManyItemINCart();

// Define a function that prints "Hello, Class" to the terminal window.
// Call/Invoke that function to make it work.

function hi (){
    return "hello,Class!" ;
}
console.log(hi());





