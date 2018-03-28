import React from "react";


function Pet(petProps) {
    const {name, breed} =petProps;
    return (
        
            <li>
                {name} – {breed}
            </li>
      
    )
}


export default Pet;