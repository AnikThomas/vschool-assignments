//import { Route, Switch} from 'react-router';
import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getGenre} from "../redux";
import GenreComponent from "./Genre.js";


class App extends Component {
    componentDidMount(){
      this.props.getGenre();
    }
    render() {
        console.log("props",this.props)
        let GenreArr = []
        if(this.props.Genre){
            GenreArr = this.props.Genre.map((obj) => <GenreComponent key={obj._id} {...obj}/>)

        }
        return (
            <div>
             {GenreArr}   
            </div>
        )
    }
}






const mapStateToProps = (state) => state
export default connect(mapStateToProps, {getGenre})(App);
