import React from "react";

function book(props) {
    let book=<div ><img src={props.image} alt='' /><div><h2>{props.title}</h2><div>by {props.author_ID[0].firstname} {props.author_ID[0].lastname} <strong>Price:${props.price}</strong></div> {props.isbn}</div></div>
    return (
        <div className="book">
            {book}
        </div>
    )
}

export default book;