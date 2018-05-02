import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter} from "react-router-dom";
import { getBooks } from "../redux";
import tambahBook from "./tambahBook";
import displayBook from "./displayBook";
import oneBook from "./oneBook";
import form from "./form";
import editBook from "./editBook";



class App extends Component {
    componentDidMount() {
        this.props.getBooks()
    }

    render() {
        
        return (
            <div className="finder">
                
                <div className="horizontalRule">

                </div>
                <Switch>
                    <Route exact path="/" component={form}/>
                    <Route path="/tambah" component={tambahBook}/>
                    <Route path="/book/:id" component={oneBook}/>
                    <Route path="/editBook/:id" component={editBook}/>
                    <Route path="/books" component={displayBook}/>

                </Switch>
            </div>

        )
    }
}

export default withRouter(connect(null, { getBooks })(App))

