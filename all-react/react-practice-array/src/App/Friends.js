import React from 'react';

function Friends(props){
    console.log(props)
    return (<div>
        <h1>{props.obj.name}</h1>
        <h3>{props.obj.age}</h3>
    </div>

    )}

export default Friends;