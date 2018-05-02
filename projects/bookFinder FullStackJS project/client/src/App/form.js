import React from "react";
import Nav from "./nav"

 function form() {
    return (
        <div className="main">
            <div className="fullWidth">
        <Nav/>
        <form action="/books" method="get">
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.10/css/all.css" integrity="sha384-+d0P83n9kaQMCwj8F4RJB66tzIwOKmrdb46+porD/OvrJ+37WqIM7UoBtwHO6Nlg" crossorigin="anonymous" />
            <div className="icon">
                <input id="search" type="text" name="title" placeholder="Enter book title" />
                <button id="searchIcon"><i class="fas fa-search fa-3x"></i></button>



            </div>
        </form>
        </div>
        </div>
    )
}

export default form