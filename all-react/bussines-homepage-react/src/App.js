import React from "react";

const header1 = { color: "blue" } //define object to pass to style
//=========================================
const today = new Date();//constructor 
const chosenClassName = today.getHours() > 17 ? "daytime" : "nighttime"//dynamic,sett var value based on condition
console.log(today);
//===========================================
function App() {
    return (
        <div style={{ display: "flex", justifyContent: "space-around" }}>
      
            <h1 style={header1}>Number 1</h1>  {/*inline variable*/}
             <h1 className="header2">Number 2</h1> {/*class name reference CSS */}
            <h1 className={chosenClassName}>Number 3</h1> {/*use the variable that reference a class in CSS  */} 
        </div>
    )

}


export default App;

