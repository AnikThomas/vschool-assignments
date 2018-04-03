import React, { Component } from "react";
import DisplayForm from './DisplayForm';
import List from './List';

class Form extends Component {
    constructor(props) {
        super(props);
        this.initialState = {
            inputs: {
                //we can use props to set initial state if we want to
                firstName: props.firstName || "",
                lastName: props.lastName || "",
                email: props.email || ""
            },
            people: []
        }
        this.state = this.initialState
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        //take the value from the input and set state accordingly
        const { value, name } = event.target;
        this.setState(prevState => {
            return {
                //we need prev state so that we can include all the values that we haven't changed:
                inputs: {
                    ...prevState.inputs,
                    //change the ONE value we do want to change
                    [name]: value
                }
            }
        });
    }
    handleSubmit(event) {
        event.preventDefault();
        this.setState(prevState => {
            return {
                //reset the form inputs back to their original state,and include the new object in the array
                input: this.initialState.inputs,
                people: [...prevState.people, prevState.inputs]
            }
        });
    }

    render() {
      
        const { people } = this.state;
        const list = people.map((objPerson, index) => <List key={index} objPerson={objPerson}></List>)
    
        return (
            <div>
            <DisplayForm list={list} {...this.state} handleChange={this.handleChange}  handleSubmit={this.handleSubmit}></DisplayForm>
            
            {/* <form onSubmit={this.handleSubmit}>
                <div>
                    <input name="firstName" onChange={this.handleChange} value={firstName} type="text" placeholder="Enter Name" />
                    <input name="lastName" onChange={this.handleChange} value={lastName} type="text" placeholder="Enter Name" />
                    <input name="email" onChange={this.handleChange} value={email} type="email" placeholder="@email" />
                    <button>Submit</button>
                </div>
                <div><ol>{list}</ol></div>
                
            </form> */}
                <ol>{list}</ol>
        </div>)
    }
}
export default Form;







