import React from "react";
import Header from "./Header/";
import Content from "./Content";
import Footer from "./Footer/";

function App(){
    return (
        <div className="wrapper">
          
           <div className="Header"> <Header></Header>  </div>
            <Content></Content>
            <Footer></Footer>

            </div>
    )
}

export default App;

//export page does the compile parts