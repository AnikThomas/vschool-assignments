import React from "react";
import Pet from './Pets';

function Friend(friendProps) {
   
    const {name, age, pets} =friendProps;
    const petsList = pets.map((petObj, index) => <Pet key={petObj.name + index} {...petObj} />)
    return (
        <div className="bigContainer">
            <h1>{name}</h1>
            <h2>{age}</h2>
            <div><ol>{petsList}</ol></div>
            
            </div>
     
    )
}


export default Friend;