import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import Nav from "./nav";


class DisplayBook extends Component {

    render() {
        console.log("show", this.props);
        let books = [];
        if (this.props.books)
            books = this.props.books.map(obj => <div key={obj._id} className="displayBook">
                <Link to={`/book/${obj._id}`}><h2>{obj.title}</h2></Link> <h4>by {obj.author}</h4> <div className="img1"><img  alt="" src={obj.image} /> </div></div>)

                return(
                    <div className="display"> <Nav></Nav>
                        {books}
                    </div>
                    
                )

    }
}




const mapStateToProps = (state) => state
export default connect(mapStateToProps,{})(DisplayBook)