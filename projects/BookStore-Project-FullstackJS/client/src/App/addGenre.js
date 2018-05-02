import React, { Component } from 'react';
import { connect } from 'react-redux';
import {addGenre} from '../redux';


class addGenre extends Component {
    constructor(props){
        super(props);
        this.state ={
            name:''
        }
    }
    handleSubmit(e){
        e.preventDefault();
        e.target.submit.disabled = true;
        this.props.addGenre(this.state)
        window.location.assign('/')
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input name='firstname' type='text' placeholder='Genre name' onChange={this.handleChange}/>

                    <input name='lastname' type='text'
                    placeholder='Genre name' onChange={this.handleChange} required/>
                    <button id='submit'>submit</button>



                </form>
                
            </div>
        )
    }
}






export default addGenre;