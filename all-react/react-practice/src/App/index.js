import React from "react";
import Component from "./Component";

const data = {
    title: "Welcome to my page",
    article: "lorem ipsum gila gila aja kali ya",
    postClass: "red",
    anikClass:"green"
}
const data2 = {
    title: "Welcome to new page",
    article: "lorem ipsum gila gila aja kali ya",
    postClass: "pink"
}


function App() {
    return (
        <div>
            <Component {...data}></Component>
            <Component {...data2}></Component>
        </div>



    )
}


export default App;