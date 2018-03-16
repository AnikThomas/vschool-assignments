//sudocode : taking json output to public website and then we parse it to the content of our page.
//first
//using vanilla javascript :
var xhr = new XMLHttpRequest();//constructor function only on web browser for checking,
xhr.onreadystatechange = function(){ //we define the "onready statechange"
    if(xhr.readyState == 4 && xhr.status ==200){ //200 is to checking http status code
        var jsonData = xhr.responseText;//we pull the raw json and store as json data
        var data = JSON.parse(jsonData);//we parse the json and stro that as data
        // console.log(jsonData);
        document.getElementById("name").innerHTML=data.name //we going to take "name" property and put that into h1.
     for(var i=0; i< data.starships.length; i++){//we going to create a loop to list the starship as url starships (console.log(data.starships)) to check.
        var listItem = document.createElement("li");//create an "li" for each starships
        var itemContent = document.createTextNode(data.starships[i]);//we are going to place the url inside that "li"
        listItem.appendChild(itemContent);// we are going to take that content & set at in the "li"
        document.getElementById("whatever").appendChild(listItem);//place that "li" in to that "ul".

    
    }
      
    }
}


xhr.open("GET", "https://swapi.co/api/people/1/", true);  //use "GET" methode to pull that url the Json data
xhr.send();

//Postman is a toll to create the 