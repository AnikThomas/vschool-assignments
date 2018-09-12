// The Todo API is something we built to help students create web applications with a completely open API to use. Have fun! And don't get too crazy on it...
//AXIOS TOdo PRACTICE :
//Axios does to pull the array object from vschool.todolist API
//=============================================================================================


var toDoURL = "https://api.vschool.io/Anik/todo/"; //url for interface with the API
var toDoList = document.getElementById('toDoList');// create the var that points to the to do list
var newTodoForm = document.getElementById('newTodoForm');// create the var that points to the form

axios.get(toDoURL).then(function (response) {
    console.log(response.data);
    for (i = 0; i < response.data.length; i++) {

        if (response.data[i].completed) {//adds li to the existing inner HTML when it is completed
            toDoList.innerHTML += `<li style="text-decoration:line-through" id='${response.data[i]._id}'>
            <h3>${response.data[i].title}</h3>
            <p>${response.data[i].description}</p>
            <p>${response.data[i].price}</p>
            <button onClick="del('${response.data[i]._id}')">Delete</button>
            <input type="checkbox" onChange="put('${response.data[i]._id}',${response.data[i].completed})">`
            if (response.data[i].imgUrl != undefined && response.data[i].imgUrl.length > 0) {//
                toDoList.innerHTML += `<img src='${response.data[i].imgUrl}'>`;
            }
            toDoList.innerHTML += `</li>`;

        } else {//adds li to the existing inner HTML when it is (!not) completed
            toDoList.innerHTML += `<li id='${response.data[i]._id}'>
            <h3>${response.data[i].title}</h3>
            <p>${response.data[i].description}</p>
            <p>${response.data[i].price}</p>
            <button onClick="del('${response.data[i]._id}')">Delete</button>
            <input type="checkbox" onChange="put('${response.data[i]._id}',${response.data[i].completed})">`
            if (response.data[i].imgUrl != undefined && response.data[i].imgUrl.length > 0) {//
                toDoList.innerHTML += `<img src='${response.data[i].imgUrl}'>`;
            }
            toDoList.innerHTML += `</li>`;

        }
    }
})
// get the element by id to get my submit button on click on response
document.getElementById("submit").addEventListener("click", function (event) {
    var todoListObject = {
        title: newTodoForm.title.value,
        description: newTodoForm.description.value,
        price: newTodoForm.price.value,
        completed: newTodoForm.completed.value,
        imgUrl: newTodoForm.img.value
    }
    event.preventDefault();
    axios.post(toDoURL, todoListObject).then(function (response) {// to post form content to the API
        document.getElementById("toDoList")
        location.reload();
    });
});

// //console.log(data1);
function del(id) {// delete method
    console.log(id)
    axios.delete(toDoURL + id).then(function (response) {
        // alert("Your todo was successfully deleted!")
        console.log(response.data);
        document.getElementById(id).remove()
    })
};

function put(id, checked) {// we are taking an id and wether completed is true or (!)not
    if (checked === false) {
        axios.put(toDoURL + id, { completed: true }).then(function (response) {
            document.getElementById(id).style = "text-decoration:line-through"
        });
    } else {
        axios.put(toDoURL + id, { completed: false }).then(function (response) {
            document.getElementById(id).style = "text-decoration:none"
        });
    }

};

