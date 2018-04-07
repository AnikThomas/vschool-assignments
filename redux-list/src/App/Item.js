import React from "react";

function Item(props) {
    const {imgUrl, caption, index, handleClick} = props;
    console.log(props);
    return (
        <div>
        <img src={imgUrl} title={caption} alt={caption}/>
        <button onClick={()=> handleClick(index)}>X</button>
        </div>
    )
}


export default Item;