import React from "react";


function DisplayForm(props) {
    const { firstName, lastName, email } = props.inputs;

    console.log(props);

    return (
        <div>
        <form onSubmit={props.handleSubmit}>
                <div>
                    <input name="firstName" autoComplete="given-name"    onChange={props.handleChange} value={firstName} type="text" placeholder="Enter Name" required/>
                    <input name="lastName" autoComplete="family-name" onChange={props.handleChange} value={lastName} type="text" placeholder="Enter Name" />
                    <input name="email" autoComplete="email" onChange={props.handleChange} value={email} type="email" placeholder="@email" />
                    <button>Submit</button>
                </div>
           
                
            </form>

           


        </div>
    )
}


export default DisplayForm;

