// The Todo API is something we built to help students create web applications with a completely open API to use. Have fun! And don't get too crazy on it...
//AXIOS TOdo PRACTICE :
//Axios does to pull the array object from vschool.todolist API


var toDoURL = "https://api.vschool.io/Anik/todo/";
var toDoList = document.getElementById('toDoList');
var newTodoForm = document.getElementById('newTodoForm');

axios.get(toDoURL).then(function(response){ 
    console.log(response.data);
    for (i=0; i<response.data.length; i++){
        toDoList.innerHTML += `<li>${response.data[i].title}</li>`// another way to building the string easier
        if(response.data[i].completed){
            toDoList.innerHTML += '<li><strike>' + response.data[i].title + '</strike> <button onclick="del(\''     + response.data[i]._id + '\')">Delete</button></li>';    
        }else {
            toDoList.innerHTML += '<li>' + response.data[i].title + ' <button onclick="del(\''     + response.data[i]._id + '\')">Delete</button></li>';
        }

        if(response.data[i].imgUrl != undefined && response.data[i].imgUrl.length > 0){
            toDoList.innerHTML += "<img src=\"" + response.data[i].imgUrl + "\" >" ;
        }
    }
})
// get the element by id to get my submit button on click on response
document.getElementById("submit").addEventListener("click", function(event){
    var todoListObject = {
        title: newTodoForm.title.value,
        description: newTodoForm.description.value,
        price: newTodoForm.price.value,
        completed: newTodoForm.completed.value,
        imgUrl: newTodoForm.img.value
    }
    event.preventDefault();
    axios.post(toDoURL, todoListObject).then(function(response){
        document.getElementById("toDoList")
         location.reload();
    });
});

 // //console.log(data1);
function del(id) {// delete method
    axios.delete(toDoURL + "/" + id).then(function (response) {
       // alert("Your todo was successfully deleted!")
        location.reload();
    }).catch(function (response) {
        alert("There was a problem deleting your todo :(");
    });
};

axios.put(toDoURL + id{// need my body part to get an id,
    title:"buy whole milk"}
});
