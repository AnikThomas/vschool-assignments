
if(!localStorage.getItem('click')){   //check to see if local storage click if exist if its not
    localStorage.setItem('click',0) // created
}

window.addEventListener("click",function(){// add the event listener to the window to catch any click
    localStorage.setItem('click',parseInt(localStorage.getItem('click'))+1)// set the local storage to taking the existing value and add to it at every click(if its click 50times its going to set 50 + 1)
    
})


//  //handle the logic here
//  console.log("i clicked!");

//  //stringify : is a way to store an object or array as a "JSON STRING"!!!
//  //Parse : for arrays and object to convert from JSON string for more accessible to JAVASCRIPT