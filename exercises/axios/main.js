// The Todo API is something we built to help students create web applications with a completely open API to use. Have fun! And don't get too crazy on it...

//AXIOS TOdo PRACTICE :
//Axios does to pull the array object from vschool.todolist API

var toDoURL = "https://api.vschool.io/Anik/todo";
var data1 = document.getElementById('data1');

axios.get(toDoURL).then(function(response){ //get method
    console.log(response.data);
    for (i=0; i<response.data.length; i++){
        // data1.innerHTML += `<li>${response.data[i].title}</li>` =another way to building the string easier
data1.innerHTML += '<li>' + response.data[i].title + ' <button onclick="del(\''+ response.data[i]._id + '\')">Delete</button></li>'
    }
})
//console.log(data1);
function del(id) {// delete method
    axios.delete(toDoURL + "/" + id).then(function (response) {
       // alert("Your todo was successfully deleted!")
        location.reload();
    }, function (response) {
        alert("There was a problem deleting your todo :(");
    });
};



 