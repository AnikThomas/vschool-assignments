import React from "react";



function Component(props) {
    console.log(props)
    const{ title, article, postClass, anikClass} = props;
    return (
        <div><h1 className={postClass}>{title}</h1>
            <p className={anikClass}>{article}</p></div>
    )
}


export default Component;