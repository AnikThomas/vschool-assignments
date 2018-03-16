var toDolist = document.getElementById("toDoList");

//using vanilla javascript :
var xhr = new XMLHttpRequest();//constructor function;

xhr.onreadystatechange = function () {  
    if (xhr.readyState == 4 && xhr.status == 200) {
        var jsonData = xhr.responseText;
        var data = JSON.parse(jsonData);
        console.log(data);
        for(var i=0; i < data.length; i++){
            var todoObj = data[i];
           // console.log(todoObj.title);
            var li = document.createElement("li");
            li.innerHTML = todoObj.title;
            todolist.appendChild(li);


        }
    }
};

xhr.open("GET", "https://swapi.co/api/people/1/", true);  
xhr.send();

//when the page loads, send a request for some data
//with that data, convert it to javascript
//create the necessary html elements which will; display that data