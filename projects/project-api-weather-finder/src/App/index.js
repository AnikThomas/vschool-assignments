import React from 'react';
import Titles from './components/Titles.js';
import Form from './components/Form.js';
import Weather from './components/Weather.js';
import {Switch, Route, Link} from 'react-router-dom';

function App() {
    return (
        <div className='app-wrapper'>
            <header className='flex-around'>
                <Link to='/'>Titles</Link>
                <Link to='/form'>Form</Link>
                <Link to='/weather'>Weather</Link>
                
            </header>
            <div className='content-wrapper'>
                <Switch> 
                    <Route exact path='/' component={Titles}></Route>
                    <Route path='/form' component={Form}></Route>
                    <Route path='/weather' component={Weather}></Route>
                </Switch>

            </div>

        </div>
    );

}






export default App;