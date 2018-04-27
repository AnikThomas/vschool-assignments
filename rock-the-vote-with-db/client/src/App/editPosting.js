import React, { Component } from 'react';
import axios from "axios";

class EditPosting extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            _id: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    handleChange(e) {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value

        })
    }

    handleSubmit(e) {
        e.preventDefault();
        e.target.submit.disabled = true;
        axios.put(`/post/${this.state._id}`, this.state).then(window.location.assign(`/posting/${this.state._id}`))

    }

    getOnePosting = (postingID) => {
        axios.get(`/post/${postingID}`)
            .then(response => {
                console.log(response.data)
                this.setState({
                    title: response.data.title,
                    description: response.data.title,
                    _id: postingID
                });
            })
    }
    componentDidMount() {
        this.getOnePosting(this.props.match.params.id)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input name='title' type="text" placeholder="title" onChange={this.handleChange} required value={this.state.title} />
                    <textarea rows='20' name='description' placeholder='description' onChange={this.handleChange} value={this.state.description} ></textarea>
                    <button id='submit'>submit</button>

                </form>


            </div>
        )
    }
}

export default EditPosting;
