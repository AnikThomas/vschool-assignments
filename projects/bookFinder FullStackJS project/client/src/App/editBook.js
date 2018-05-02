import React, { Component } from 'react';
import axios from 'axios';
import Nav from "./nav";

class EditBook extends Component {
    constructor(props) {
        super(props);
        this.state = {
            _id:"",
            title: "",
            synopsis: "",
            publisher: "",
            author: "",
            isbn: "",
            image: "",
            price: ""
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
        axios.put(`/books/${this.state._id}`, this.state).then(window.location.assign(`/book/${this.state._id}`))
    }
    getOneBook = (bookID) => {
        axios.get(`/books/${bookID}`)
            .then(response => {
                console.log("respondf",response)
                this.setState({
                   ...response.data
                })
            })
    }
    componentDidMount() {
        this.getOneBook(this.props.match.params.id)
    }
    render() {
        console.log("state",this.state)
        return (<div>
        <Nav></Nav>
        <div className="edit2">
        <div 
        className="formContainer"><form onSubmit={this.handleSubmit}>
                    <input className="title" type="text" name="title" placeholder="book title" onChange={this.handleChange} value={this.state.title} />
                    <textarea className="area" value={this.state.synopsis} name="synopsis" onChange={this.handleChange}></textarea>
                    <input className="author" type="text" name="author" value={this.state.author} placeholder="author name" onChange={this.handleChange} />
                    <input className="isbn" type="text" name="isbn" value={this.state.isbn} placeholder="isbn" onChange={this.handleChange} />
                    <input className="price" type="text" name="price" value={this.state.price} placeholder="price" onChange={this.handleChange} />
                    <input className="img" type="text" name="image" value={this.state.image} placeholder="image url" onChange={this.handleChange} />
                    <div><input type="submit" /></div>

                </form>
            </div></div></div>
        )
    }

}
export default EditBook;
