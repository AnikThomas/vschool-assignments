import React from "react";
import { Link } from 'react-router-dom';


function Home() {
    return (
        <div className='Home'>
            <div className='banner'>
                <h1>Find your perfect restaurant in Salt Lake City</h1>
               <Link to='/about'><div className='buttonfinder'>About</div></Link>
            <Link to='/restaurant'><div className='buttonfinder'>Find Restaurant</div></Link>
            
            </div>
        </div>
    )
}


export default Home;