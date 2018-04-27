import React from "react";
import {Link} from 'react-router-dom';


function Header() {
    return (
        <header>
            <h2>ROCK THE VOTE APP</h2>
            <nav>
                <Link to='/'>All the Post</Link>
                <Link to='/new'>New post</Link>
            </nav>


        </header>
    )
}










export default Header;