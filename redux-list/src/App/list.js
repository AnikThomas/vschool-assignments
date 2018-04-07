import React from "react";
import {connect} from 'react-redux';
import Item from './Item';
import {removeCat} from '../redux/cats';


const mapStateToProps = state=>{
    return state
}


function List(props) {
    const handleClick = index =>{
        props.removeCat(index)
    }
    console.log(props.cats.data)
    // const List = props.cats.data.map((catObj, index) => <div key={index}> <img src={catObj.imgUrl} title={catObj.caption} alt={catObj.caption}/></div>)
    const listItem = props.cats.data.map((catObj, index) => <Item key={index} {...catObj} handleClick={handleClick} index={index}></Item>)
    return (

        <div>
            {listItem }
        </div>
    )
}



export default connect(mapStateToProps, {removeCat})(List);