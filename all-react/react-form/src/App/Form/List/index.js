import React from "react";

function List(props) {
    const {firstName, lastName, email} = props.objPerson
    console.log(props);
    return (
        
            <li>
                <h2>{firstName} {lastName} {email}</h2>
                
            </li>
        
    )
}

export default List;

