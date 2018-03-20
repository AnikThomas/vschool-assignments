var body = document.body;

var boxes = document.getElementById('box');
// boxes.addEventListener("mouseleave",function(){
//     boxes.style.backgroundColor= "white";
// });
boxes.addEventListener("mouseenter",function(){
    boxes.style.backgroundColor= "blue";
});

boxes.addEventListener("mousedown",function(){
    boxes.style.backgroundColor= "red";
});

boxes.addEventListener("mouseup",function(){
    boxes.style.backgroundColor= "yellow";
});

boxes.addEventListener("dblclick",function(){
    boxes.style.backgroundColor= "green";
});

body.addEventListener("wheel",function() {
    boxes.style.backgroundColor= "orange";
});

body.addEventListener("keyup",function(e){
    console.log(e.which);
    if (e.which === "B"){
        boxes.style.backgroundColor= "blue";
    }else if (e.which === "R"){
        boxes.style.backgroundColor= "red";
    }else if (e.which === "Y"){
        boxes.style.backgroundColor= "yellow";
    }else if (e.which === "G"){
        boxes.style.backgroundColor= "green";
    }else if(e.which === "O"){
        boxes.style.backgroundColor= "orange";
    }
});

