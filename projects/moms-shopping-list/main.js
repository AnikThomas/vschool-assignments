
//determine if list exist in local storage,if not set it to empty array

if(!localStorage.getItem("list")){//if there is anything in there it will return true,the (!)mean not true/return false
    localStorage.setItem("list",JSON.stringify([]))//creating an item call list in local storage that is a JSON empty object.
}

//define my ListItem and my form elements
var orderList = document.getElementById('orderList');// OL (order List)
var form = document.getElementById('form');//form

//get the list array from the local storage:
var storage = JSON.parse(localStorage.getItem('list'));
//console.log(storage);

//loop all through the item in the list and then call the function that turn into (li) elements:
for(var i=0; i<storage.length; i++){
    addToItemList(i);

}
//build the(li)and add it into the order list:( its takes the index of storage array)
function addToItemList(i){
    var li = document.createElement('li'); //creates the <li> elements
    li.id = i;
    var text = document.createTextNode(storage[i]);//creates the text inside the <li>


//the delete button:
    var button = document.createElement('button');
    button.innerHTML = '❌';
    button.name = storage[i];
    button.addEventListener('click', function (event){
        var myParent = event.target.parentNode;
        console.log(myParent);
        storage.splice(storage.indexOf(this.name), 1)//splice take the storage array and remove part of it in this scenerio we will looking for this.name amd removing that one item.
        localStorage.setItem("list",JSON.stringify(storage))
        orderList.removeChild(myParent);
    })
    li.appendChild(button);
   


    li.appendChild(text);//actually add the text in to the <li>
    orderList.appendChild(li);//put the <li> in to the order list
}

//add the event listener to my form
form.addEventListener('submit',function(event){
    event.preventDefault();
    storage.push(form.listItem.value);
    addToItemList(storage.length-1);
    localStorage.setItem('list',JSON.stringify(storage));
    form.reset();
})



