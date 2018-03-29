import React from "react";


let vacationSpots = [
    {
        place: "Meridian, Idaho",
        price: 40,
        timeToGo: "Spring"
    }, {
        place: "Cancun",
        price: 900,
        timeToGo: "Winter"
    }, {
        place: "China",
        price: 1200,
        timeToGo: "Fall"
    }, {
        place: "Russia",
        price: 1100,
        timeToGo: "Summer"
    }, {
        place: "Lebanon",
        price: 400,
        timeToGo: "Spring"
    }
]

function dollar(price) {
    if (price > 1000) {
        return "$$$";
    } else if (price < 1000 && price < 500) {
        return "$$";
    } else {
        return "$";
    }
}

function Spots() {
    const spotArr = vacationSpots.map((obj, index) => <div key={index} className={obj.timeToGo}><h2>{obj.place}</h2> ${obj.price} {dollar(obj.price)}</div>);
    return (
        <div>
                {spotArr}
        </div>
    )
}


export default Spots;