import React from "react";

function PlanetItem(props) {
    const {name, diameter, climate} = props;
    //console.log(props)
    //const name = props.name
    //const diameter = props.diameter (its the same like this instead of rewrite that over and over again)
    return (
        <div>
            <h1>{name}</h1>
            <p>Diameter: {diameter}</p>
            <p>Climate:{climate}</p>
        </div>
    )
}


export default PlanetItem;