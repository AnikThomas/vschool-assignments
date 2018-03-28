import React from "react";
import Friends from "./Friends";

const friends = [
    { name: "Mighty Morphin' Power Rangers", age: 24 },
    { name: "Batman", age: 45 },
    { name: "Wonder Woman", age: 300 },
    { name: "Cat Woman", age: 26 },
    { name: "Superman", age: 30 },
    { name: "John", age: 21 },
    { name: "Quasimodo", age: 530 }
];


function FriendsList() {
    const list = friends.filter(person =>person.age >=30)
                    .map((obj, index) => (
    <Friends key={obj.name + index} obj={obj}/>)
)

return (
<div>{list}</div>
)
}


export default FriendsList;