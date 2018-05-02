import React, { Component } from 'react';
import { connect } from 'react-redux';
import { newBook } from '../redux';

class NewBook extends Component {
    constructor(props) {
        super(props);

        this.state = {
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
        this.props.newBook(this.state)
        window.location.assign('/books')
    }

    render() {
        console.log(this.state);
        return (<div className="editBar">
            <div className="formContainer"><form onSubmit={this.handleSubmit} >
                <input className="title" type="text" name="title" value={this.state.title} placeholder="book title" onChange={this.handleChange} />
                <textarea className="area" value={this.state.synopsis} name="synopsis" placeholder="synopsis" onChange={this.handleChange}></textarea>
                <input className="author" type="text" name="author" value={this.state.author} placeholder="author name" onChange={this.handleChange} />
                <input className="isbn" type="text" name="isbn" value={this.state.isbn} placeholder="isbn" onChange={this.handleChange} />
                <input className="price" type="text" name="price" value={this.state.price} placeholder="price" onChange={this.handleChange} />
                <input className="img" type="text" name="image" value={this.state.image} placeholder="img url" onChange={this.handleChange} />
                <div><input className="submit" type="submit" /></div>

            </form></div></div>)
    }
}

export default connect(null, { newBook })(NewBook)