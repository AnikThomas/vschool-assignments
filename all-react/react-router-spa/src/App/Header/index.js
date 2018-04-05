import React from "react";
import {Link} from 'react-router-dom';

function Header(props) {
    return (
        <header>
            
                <nav>
                    <Link to='/'>Home</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/contact'>Contact</Link>
                    <a href='https://google.com'>google</a>
                </nav>
                
                <h1>Welcome to Whatever.com!</h1>
        </header>
    )
}

export default Header;