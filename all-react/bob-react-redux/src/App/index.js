import React from "react";
import {connect} from 'react-redux';
import {increment, decrement} from'../redux';


function App(props) {
    return (
        <div className="app">
        <button onClick={props.decrement}>+</button>
            <h1>{props.counter}</h1>
            <button onClick={()=>props.increment(1)}>+</button>
            <button onClick={()=>props.increment(2)}>2</button>
        </div>
    )
}

function mapStateToProps(state){
    return {
        counter: state
    }
}

export default connect(mapStateToProps, {increment, decrement})(App);

//two reason you might want to connect to the store
//1.does the component need any of the data from the redux store
//2.does this component need to dispatch any actions?