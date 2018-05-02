import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteBook } from '../redux';
import { Link } from "react-router-dom";
import Nav from "./nav"

class OneBook extends Component {
    delete = (id) => {
        let doYouWant = window.confirm("Do you want to delete this book?")
        if (doYouWant) {
            this.props.deleteBook(id);
            window.location.assign("/")
        }
    }
    render() {
        let book = [];
        if (this.props.books) {
            book = this.props.books.filter(obj => this.props.match.params.id === obj._id)
            const { title, _id, author,synopsis , price, isbn, image, publisher} = book[0]
            console.log(book[0])
            return (
                
                <div className="oneBook">
                    <Nav />
                    <h1>{title}</h1>
                    <h2>Author by {author}</h2>
                    <p><strong>Synopsis :</strong>  {synopsis}</p>
                    <p><strong>Price : </strong>${price}</p>
                    <p><strong>Isbn : </strong>{isbn}</p>
                    <p><strong>Publisher : </strong> {publisher}</p>
                    <img alt="" src={image} />


                    <div><button className="btn" onClick={() => this.delete(_id)}>delete</button>
                    <Link to={`/editBook/${_id}`} className="btn">edit</Link></div>

                </div>
            )
        }
        return (<div>kjb</div>)
    }
}



const mapStateToProps = (state) => state 

export default connect(mapStateToProps,{deleteBook})(OneBook)

