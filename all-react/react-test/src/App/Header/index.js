import React from "react";
import fuzzball from '../../images/white-cat2.jpg';

function Header(){
    return <header className="header-wrapper">
       <h1 className="header-title"> Welcome to my web Page</h1>
       <img src={fuzzball} alt="cute cat"/>
    </header>
}

export default Header;