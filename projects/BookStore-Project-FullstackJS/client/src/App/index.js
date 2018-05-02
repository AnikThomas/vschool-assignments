//import { Route, Switch} from 'react-router';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getGenre } from "../redux";
import GenreComponent from "./Genre.js";
import Home from "./Home";
import { Link, Switch, Route, withRouter } from "react-router-dom"


class App extends Component {
    componentDidMount() {
        this.props.getGenre();
    }
    render() {
        console.log("app props", this.props)
        let GenreArr = []
        if (this.props.genre) {
            GenreArr = this.props.genre.map(obj => <Link key={obj._id} to={`/${obj.name}`}>{obj.name}</Link>)
        }
        
        return (
            <div>
                <nav>
                    <Link to="/">Home</Link>
                    {GenreArr}
                    </nav>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/:genre" component={GenreComponent} />
                </Switch>
            </div>
        )
    }
}







const mapStateToProps = (state) => state
export default withRouter(connect(mapStateToProps, { getGenre })(App));
