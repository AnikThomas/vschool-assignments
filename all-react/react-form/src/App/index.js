import React from "react";
import Form from "./Form/";




function App() {
    const personToEdit ={
            firstName: "",
            lastName: "",
            email:""
        }
    
    return (
        <div>
            <Form{...personToEdit}></Form>
           
        </div>
    )
}



export default App;