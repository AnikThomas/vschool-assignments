import React from "react";
import Hero from "./Hero.js";
import HeroList from "./heros.Json"

function catchPhrase(phrase) {
     alert(phrase);
}
function Heros(props) {
    const heroArr = HeroList.map((heroObj, index) => <Hero key={index} handleClick={catchPhrase} {...heroObj} />)
    return(<div>{heroArr}</div>)
);
    
}

export default Heros;