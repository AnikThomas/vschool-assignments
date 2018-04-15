import React, { Component } from 'react';
import Restaurants from './Restaurants';
import './styles.css';
import Home from './Home';
import About from './About';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
    render() {

        return (

            <div>
                <Switch>{/* use for changing app component */}
                    
                    <Route exact path='/' component={Home} /> {/* display the component based on the address, exact here mean: load this component when the path is slash */}  
                    <Route path='/restaurant' component={Restaurants} />
                    <Route path='/about' component={About} />

                </Switch>

            </div>
        )
    }
}


export default App;





