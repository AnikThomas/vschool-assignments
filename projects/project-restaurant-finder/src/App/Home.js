import React from "react";
import { Link } from 'react-router-dom';


function Home() {
    return (
        <div>
            <Link to='/restaurant'>Restaurant</Link>
            <Link to='/about'>About</Link>
        </div>
    )
}


export default Home;