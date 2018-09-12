import React, { Component } from 'react'
import { connect } from 'react-redux';
import { newPosting } from '../redux';


class NewPosting extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: ''
        }
        this.handleChange =this.handleChange.bind(this);
        this.handleSubmit =this.handleSubmit.bind(this);
   

    }
   
    handleSubmit(e) {
        e.preventDefault();
        e.target.submit.disabled = true;
        this.props.newPosting(this.state)
        window.location.assign('/')

    }
    handleChange(e) {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value

        })
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input name='title' type="text" placeholder="title" onChange={this.handleChange} required/>
                    <textarea rows='20' name='description' placeholder='description' onChange={this.handleChange} ></textarea>
                    <button id='submit'>submit</button>

                </form>
                

            </div>
        )
    }
}

export default connect(null, {newPosting})(NewPosting);
