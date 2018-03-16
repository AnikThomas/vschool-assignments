
var axios = require("axios");
var json = axios.get("http://swapi.co/api/planets/").then(function(response){
    console.log(response.data)
});


//request to the star wars API :

//Request ("http://swapi.co/api/planets/")

function starWars(error,response,body){
    if (!err && response.statuscode === 200){
        var data = json.parse(body);
        console.log(data);
    }
}


