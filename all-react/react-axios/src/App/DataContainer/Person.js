import React from "react";

function Person(props) {
    console.log(props);
    const {name, hair_color} = props;
    return (
        <li>
            <h1>{name}</h1>
            <h3>{hair_color}</h3>

        </li>
    )
}

export default Person;
